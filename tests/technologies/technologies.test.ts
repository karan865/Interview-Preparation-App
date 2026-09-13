import request from 'supertest';
import app from '../../src/app';
import { setupTestDB, clearTestDB, teardownTestDB } from '../setup/testDb';
import { createTestTaxonomy, TestTaxonomyContext } from '../setup/testData';
import { Technology } from '../../src/models/Technology';

describe('Technologies API (/api/technologies)', () => {
  let taxonomyContext: TestTaxonomyContext;

  beforeAll(async () => {
    await setupTestDB();
  });

  afterAll(async () => {
    await teardownTestDB();
  });

  beforeEach(async () => {
    await clearTestDB();
    taxonomyContext = await createTestTaxonomy();

    // Create an inactive technology to test filtering
    await Technology.create({
      name: 'Deprecated Framework',
      slug: 'deprecated-framework',
      category: 'frontend',
      order: 99,
      isActive: false,
    });
  });

  describe('GET /api/technologies', () => {
    it('should return only active technologies by default, ordered by order and name', async () => {
      const res = await request(app).get('/api/technologies');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data).toHaveLength(2);

      const slugs = res.body.data.map((t: any) => t.slug);
      expect(slugs).toContain('react');
      expect(slugs).toContain('nodejs');
      expect(slugs).not.toContain('deprecated-framework');

      // Verify order
      expect(res.body.data[0].order).toBeLessThanOrEqual(res.body.data[1].order);
    });

    it('should filter technologies by category', async () => {
      const frontendRes = await request(app).get('/api/technologies?category=frontend');
      expect(frontendRes.status).toBe(200);
      expect(frontendRes.body.data).toHaveLength(1);
      expect(frontendRes.body.data[0].slug).toBe('react');

      const backendRes = await request(app).get('/api/technologies?category=backend');
      expect(backendRes.status).toBe(200);
      expect(backendRes.body.data).toHaveLength(1);
      expect(backendRes.body.data[0].slug).toBe('nodejs');
    });
  });

  describe('GET /api/technologies/:idOrSlug', () => {
    it('should fetch a technology by its slug', async () => {
      const res = await request(app).get('/api/technologies/react');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.slug).toBe('react');
      expect(res.body.data.name).toBe('React');
    });

    it('should fetch a technology by its ObjectId', async () => {
      const id = taxonomyContext.nodeTech._id.toString();
      const res = await request(app).get(`/api/technologies/${id}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data._id).toBe(id);
      expect(res.body.data.slug).toBe('nodejs');
    });

    it('should return 404 for an unknown technology slug', async () => {
      const res = await request(app).get('/api/technologies/non-existent-slug');

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/technology not found/i);
    });

    it('should return 404 for a valid ObjectId that does not exist in database', async () => {
      const nonExistentId = '507f1f77bcf86cd799439011';
      const res = await request(app).get(`/api/technologies/${nonExistentId}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/technology not found/i);
    });
  });
});
