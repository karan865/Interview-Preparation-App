import request from 'supertest';
import app from '../../src/app';
import { setupTestDB, clearTestDB, teardownTestDB } from '../setup/testDb';
import { createTestTaxonomy, TestTaxonomyContext } from '../setup/testData';
import { Topic } from '../../src/models/Topic';

describe('Topics API (/api/topics)', () => {
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

    // Create an inactive topic to verify filtering
    await Topic.create({
      technologyId: taxonomyContext.reactTech._id,
      name: 'Legacy Lifecycles',
      slug: 'legacy-lifecycles',
      order: 99,
      isActive: false,
    });
  });

  describe('GET /api/topics', () => {
    it('should return all active topics populated with technology info', async () => {
      const res = await request(app).get('/api/topics');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data).toHaveLength(2); // hooksTopic and eventLoopTopic

      const slugs = res.body.data.map((t: any) => t.slug);
      expect(slugs).toContain('hooks');
      expect(slugs).toContain('event-loop');
      expect(slugs).not.toContain('legacy-lifecycles');

      expect(res.body.data[0].technologyId).toHaveProperty('name');
      expect(res.body.data[0].technologyId).toHaveProperty('slug');
    });

    it('should filter topics by technology slug', async () => {
      const res = await request(app).get('/api/topics?technology=react');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveLength(1);
      expect(res.body.data[0].slug).toBe('hooks');
      expect(res.body.data[0].technologyId.slug).toBe('react');
    });

    it('should filter topics by technology ObjectId', async () => {
      const nodeTechId = taxonomyContext.nodeTech._id.toString();
      const res = await request(app).get(`/api/topics?technology=${nodeTechId}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveLength(1);
      expect(res.body.data[0].slug).toBe('event-loop');
    });

    it('should return an empty array if technology does not exist', async () => {
      const res = await request(app).get('/api/topics?technology=nonexistent-tech');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toEqual([]);
    });
  });

  describe('GET /api/topics/:idOrSlug', () => {
    it('should get a topic by its slug', async () => {
      const res = await request(app).get('/api/topics/hooks');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.slug).toBe('hooks');
      expect(res.body.data.name).toBe('Hooks');
      expect(res.body.data.technologyId.slug).toBe('react');
    });

    it('should get a topic by its ObjectId', async () => {
      const id = taxonomyContext.eventLoopTopic._id.toString();
      const res = await request(app).get(`/api/topics/${id}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data._id).toBe(id);
      expect(res.body.data.slug).toBe('event-loop');
    });

    it('should return 404 for non-existent topic slug', async () => {
      const res = await request(app).get('/api/topics/unknown-topic');

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/topic not found/i);
    });

    it('should return 404 for non-existent topic ObjectId', async () => {
      const nonExistentId = '507f1f77bcf86cd799439011';
      const res = await request(app).get(`/api/topics/${nonExistentId}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/topic not found/i);
    });
  });

  describe('GET /api/preparation-levels', () => {
    it('should return preparation levels correctly ordered by order ascending', async () => {
      const res = await request(app).get('/api/preparation-levels');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveLength(3);

      const orders = res.body.data.map((l: any) => l.order);
      expect(orders).toEqual([1, 3, 4]);
      expect(res.body.data[0].slug).toBe('foundation');
      expect(res.body.data[1].slug).toBe('intermediate');
      expect(res.body.data[2].slug).toBe('advanced');
    });
  });
});
