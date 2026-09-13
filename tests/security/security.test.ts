import request from 'supertest';
import app from '../../src/app';
import { setupTestDB, clearTestDB, teardownTestDB } from '../setup/testDb';
import {
  createTestUsers,
  createTestTaxonomy,
  createSampleQuestion,
  generateExpiredToken,
  generateInvalidSecretToken,
  TestAuthContext,
  TestTaxonomyContext,
} from '../setup/testData';

describe('Security & Backend Stability Tests', () => {
  let authContext: TestAuthContext;
  let taxonomyContext: TestTaxonomyContext;
  let sampleQuestion: any;

  beforeAll(async () => {
    await setupTestDB();
  });

  afterAll(async () => {
    await teardownTestDB();
  });

  beforeEach(async () => {
    await clearTestDB();
    authContext = await createTestUsers();
    taxonomyContext = await createTestTaxonomy();

    sampleQuestion = await createSampleQuestion({
      question: 'Security Baseline Question',
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      status: 'published',
    });
  });

  describe('JWT Authentication & Token Security', () => {
    it('should reject requests with missing Authorization header on protected endpoints', async () => {
      const endpoints = [
        { method: 'get', url: '/api/auth/me' },
        { method: 'put', url: '/api/auth/preferences' },
        { method: 'get', url: '/api/questions/saved' },
        { method: 'post', url: `/api/questions/${sampleQuestion._id}/save` },
        { method: 'post', url: `/api/progress/${sampleQuestion._id}` },
        { method: 'get', url: '/api/revision/weak' },
        { method: 'get', url: '/api/revision/quick' },
        { method: 'get', url: '/api/revision/interview-prep' },
        { method: 'get', url: '/api/dashboard' },
        { method: 'get', url: '/api/admin/questions' },
      ];

      for (const ep of endpoints) {
        const res = await (request(app) as any)[ep.method](ep.url);
        expect(res.status).toBe(401);
        expect(res.body.success).toBe(false);
      }
    });

    it('should reject requests with invalid signature token', async () => {
      const invalidToken = generateInvalidSecretToken(authContext.regularUser._id.toString());
      const res = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${invalidToken}`);

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/invalid authorization token/i);
    });

    it('should reject requests with expired token', async () => {
      const expiredToken = generateExpiredToken(authContext.regularUser._id.toString());
      const res = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${expiredToken}`);

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/expired/i);
    });

    it('should reject malformed Bearer header format', async () => {
      const malformedHeaders = [
        'Bearer',
        'Token xyz',
        'Basic dXNlcjpwYXNz',
        'Bearer ',
      ];

      for (const header of malformedHeaders) {
        const res = await request(app)
          .get('/api/auth/me')
          .set('Authorization', header);

        expect(res.status).toBe(401);
        expect(res.body.success).toBe(false);
      }
    });
  });

  describe('Role-Based Access Control (RBAC)', () => {
    it('should prevent regular users from accessing all admin endpoints (403 Forbidden)', async () => {
      const adminEndpoints = [
        { method: 'get', url: '/api/admin/questions' },
        { method: 'post', url: '/api/admin/questions' },
        { method: 'put', url: `/api/admin/questions/${sampleQuestion._id}` },
        { method: 'delete', url: `/api/admin/questions/${sampleQuestion._id}` },
        { method: 'patch', url: `/api/admin/questions/${sampleQuestion._id}/publish` },
        { method: 'patch', url: `/api/admin/questions/${sampleQuestion._id}/archive` },
        { method: 'post', url: '/api/admin/questions/import/preview' },
        { method: 'post', url: '/api/admin/questions/import' },
        { method: 'get', url: '/api/admin/content/stats' },
        { method: 'get', url: '/api/admin/content/gaps' },
      ];

      for (const ep of adminEndpoints) {
        const res = await (request(app) as any)[ep.method](ep.url)
          .set('Authorization', `Bearer ${authContext.userToken}`)
          .send({});

        expect(res.status).toBe(403);
        expect(res.body.success).toBe(false);
        expect(res.body.message).toMatch(/administrator privileges required/i);
      }
    });
  });

  describe('Information Leakage Prevention', () => {
    it('should NEVER expose passwordHash across auth registration, login, profile, and preferences', async () => {
      // 1. Register
      const regRes = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Security User',
          email: 'sec.user@example.com',
          password: 'SecretPassword123!',
        });
      expect(regRes.body.data.user).not.toHaveProperty('passwordHash');
      expect(JSON.stringify(regRes.body)).not.toContain('passwordHash');

      // 2. Login
      const loginRes = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'sec.user@example.com',
          password: 'SecretPassword123!',
        });
      expect(loginRes.body.data.user).not.toHaveProperty('passwordHash');
      expect(JSON.stringify(loginRes.body)).not.toContain('passwordHash');

      const token = loginRes.body.data.token;

      // 3. Me profile
      const meRes = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${token}`);
      expect(meRes.body.data).not.toHaveProperty('passwordHash');
      expect(JSON.stringify(meRes.body)).not.toContain('passwordHash');

      // 4. Update preferences
      const prefRes = await request(app)
        .put('/api/auth/preferences')
        .set('Authorization', `Bearer ${token}`)
        .send({ selectedTechnologies: [taxonomyContext.reactTech._id.toString()] });
      expect(prefRes.body.data).not.toHaveProperty('passwordHash');
      expect(JSON.stringify(prefRes.body)).not.toContain('passwordHash');
    });
  });

  describe('Standardized Error Format & Resilience', () => {
    it('should maintain standard error envelope { success: false, message, errors } across validation failures', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({ email: 'invalid-email' });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(typeof res.body.message).toBe('string');
      expect(Array.isArray(res.body.errors)).toBe(true);
      expect(res.body.errors.length).toBeGreaterThan(0);
    });

    it('should handle malformed ObjectIds safely with 400 Bad Request instead of 500 crashes', async () => {
      const endpointsWithId = [
        { method: 'get', url: '/api/questions/not-an-objectid-12345' },
        { method: 'post', url: '/api/questions/not-an-objectid-12345/save' },
        { method: 'post', url: '/api/progress/not-an-objectid-12345' },
        { method: 'delete', url: '/api/progress/not-an-objectid-12345' },
      ];

      for (const ep of endpointsWithId) {
        const res = await (request(app) as any)[ep.method](ep.url)
          .set('Authorization', `Bearer ${authContext.userToken}`)
          .send({ status: 'known' });

        expect(res.status).toBe(400);
        expect(res.body.success).toBe(false);
        expect(res.body.message).toMatch(/invalid.*id/i);
      }
    });

    it('should return 404 for undefined routes in standard error format', async () => {
      const res = await request(app).get('/api/completely-nonexistent-endpoint-path');

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/Route not found/i);
    });
  });
});
