import request from 'supertest';
import app from '../../src/app';
import { setupTestDB, clearTestDB, teardownTestDB } from '../setup/testDb';
import { createTestUsers, createTestTaxonomy, TestAuthContext, TestTaxonomyContext } from '../setup/testData';
import { User } from '../../src/models/User';

describe('Auth API (/api/auth)', () => {
  let authContext: TestAuthContext;
  let taxonomyContext: TestTaxonomyContext;

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
  });

  describe('POST /api/auth/register', () => {
    it('should register a new user successfully with valid fields', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Jane Developer',
          email: 'jane.dev@example.com',
          password: 'Password123!',
          selectedTechnologies: [taxonomyContext.reactTech._id.toString()],
          selectedPreparationLevel: taxonomyContext.intermediateLevel._id.toString(),
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('token');
      expect(res.body.data).toHaveProperty('user');
      expect(res.body.data.user.email).toBe('jane.dev@example.com');
      expect(res.body.data.user.name).toBe('Jane Developer');
      expect(res.body.data.user.role).toBe('user');
      expect(res.body.data.user).not.toHaveProperty('passwordHash');

      // Verify user in database
      const dbUser = await User.findOne({ email: 'jane.dev@example.com' }).select('+passwordHash');
      expect(dbUser).not.toBeNull();
      expect(dbUser?.passwordHash).toBeDefined();
    });

    it('should reject registration if email already exists', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Duplicate Guy',
          email: 'user.test@example.com', // Already created in beforeEach
          password: 'Password123!',
        });

      expect(res.status).toBe(409);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/already exists/i);
    });

    it('should reject registration with invalid email format', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Invalid Email',
          email: 'not-an-email',
          password: 'Password123!',
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe('Validation failed');
      expect(res.body.errors.some((e: any) => e.field.includes('email'))).toBe(true);
    });

    it('should reject registration with weak/short password (< 6 chars)', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Short Pass',
          email: 'short.pass@example.com',
          password: '123',
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.errors.some((e: any) => e.field.includes('password'))).toBe(true);
    });

    it('should reject registration when required fields are missing', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          // missing email, password, name
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe('Validation failed');
    });

    it('should preserve role specified on registration if allowed or default to user', async () => {
      const res = await request(app)
        .post('/api/auth/register')
        .send({
          name: 'Admin Role Request',
          email: 'admin.req@example.com',
          password: 'SecurePassword123!',
          role: 'admin',
        });

      expect(res.status).toBe(201);
      expect(res.body.data.user.role).toBe('admin');
    });
  });

  describe('POST /api/auth/login', () => {
    it('should log in successfully with correct credentials', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'user.test@example.com',
          password: 'TestPassword123!',
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveProperty('token');
      expect(res.body.data).toHaveProperty('user');
      expect(res.body.data.user.email).toBe('user.test@example.com');
      expect(res.body.data.user).not.toHaveProperty('passwordHash');
    });

    it('should reject login with incorrect password', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'user.test@example.com',
          password: 'WrongPassword!',
        });

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/invalid email or password/i);
    });

    it('should reject login with unknown email', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'unknown.ghost@example.com',
          password: 'TestPassword123!',
        });

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/invalid email or password/i);
    });

    it('should reject login when credentials are missing', async () => {
      const res = await request(app)
        .post('/api/auth/login')
        .send({});

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe('Validation failed');
    });
  });

  describe('GET /api/auth/me', () => {
    it('should return the current user profile with valid JWT', async () => {
      const res = await request(app)
        .get('/api/auth/me')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.email).toBe(authContext.regularUser.email);
      expect(res.body.data.name).toBe(authContext.regularUser.name);
      expect(res.body.data.role).toBe('user');
      expect(res.body.data).not.toHaveProperty('passwordHash');
    });

    it('should reject request when JWT token is missing', async () => {
      const res = await request(app).get('/api/auth/me');

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/token is missing/i);
    });

    it('should reject request when JWT token is invalid or malformed', async () => {
      const res = await request(app)
        .get('/api/auth/me')
        .set('Authorization', 'Bearer totally.invalid.jwttokenstring');

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/invalid authorization token/i);
    });
  });

  describe('PUT /api/auth/preferences', () => {
    it('should update user preferences with valid technology and level IDs', async () => {
      const res = await request(app)
        .put('/api/auth/preferences')
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({
          selectedTechnologies: [taxonomyContext.nodeTech._id.toString()],
          selectedPreparationLevel: taxonomyContext.advancedLevel._id.toString(),
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.selectedTechnologies).toHaveLength(1);
      expect(res.body.data.selectedPreparationLevel._id).toBe(taxonomyContext.advancedLevel._id.toString());
      expect(res.body.data).not.toHaveProperty('passwordHash');
    });

    it('should reject preferences update with invalid technology ID format', async () => {
      const res = await request(app)
        .put('/api/auth/preferences')
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({
          selectedTechnologies: ['invalid-tech-id-123'],
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/Invalid ID format/i);
    });

    it('should reject preferences update with invalid preparation level ID format', async () => {
      const res = await request(app)
        .put('/api/auth/preferences')
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({
          selectedPreparationLevel: 'not-a-valid-level-objectid',
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/Invalid ID format/i);
    });

    it('should reject preferences update if unauthenticated', async () => {
      const res = await request(app)
        .put('/api/auth/preferences')
        .send({
          selectedTechnologies: [taxonomyContext.nodeTech._id.toString()],
        });

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });
});
