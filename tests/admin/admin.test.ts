import request from 'supertest';
import app from '../../src/app';
import { setupTestDB, clearTestDB, teardownTestDB } from '../setup/testDb';
import {
  createTestUsers,
  createTestTaxonomy,
  createSampleQuestion,
  TestAuthContext,
  TestTaxonomyContext,
} from '../setup/testData';
import { Question } from '../../src/models/Question';

describe('Admin API (/api/admin)', () => {
  let authContext: TestAuthContext;
  let taxonomyContext: TestTaxonomyContext;
  let publishedQ: any;
  let draftQ: any;

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

    publishedQ = await createSampleQuestion({
      question: 'Published Question for Admin Tests',
      title: 'Published Admin Q',
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      status: 'published',
    });

    draftQ = await createSampleQuestion({
      question: 'Draft Question for Admin Tests',
      title: 'Draft Admin Q',
      technologyId: taxonomyContext.nodeTech._id,
      topicId: taxonomyContext.eventLoopTopic._id,
      status: 'draft',
    });
  });

  describe('Authorization Controls', () => {
    it('should return 401 for unauthenticated requests to admin endpoints', async () => {
      const res = await request(app).get('/api/admin/questions');

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
    });

    it('should return 403 Forbidden when a normal user tries to access admin endpoints', async () => {
      const res = await request(app)
        .get('/api/admin/questions')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(403);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/administrator privileges required/i);
    });
  });

  describe('GET /api/admin/questions', () => {
    it('should allow admin to list questions and see both draft and published questions', async () => {
      const res = await request(app)
        .get('/api/admin/questions?status=all')
        .set('Authorization', `Bearer ${authContext.adminToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.questions).toHaveLength(2);
    });

    it('should filter admin questions by status=draft', async () => {
      const res = await request(app)
        .get('/api/admin/questions?status=draft')
        .set('Authorization', `Bearer ${authContext.adminToken}`);

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(1);
      expect(res.body.questions[0].status).toBe('draft');
    });

    it('should filter admin questions by status=published', async () => {
      const res = await request(app)
        .get('/api/admin/questions?status=published')
        .set('Authorization', `Bearer ${authContext.adminToken}`);

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(1);
      expect(res.body.questions[0].status).toBe('published');
    });
  });

  describe('POST /api/admin/questions', () => {
    it('should allow admin to create a new question', async () => {
      const newQuestionPayload = {
        question: 'What is SSR in Next.js?',
        title: 'SSR in Next.js',
        technologyId: taxonomyContext.reactTech._id.toString(),
        topicId: taxonomyContext.hooksTopic._id.toString(),
        preparationLevels: [taxonomyContext.intermediateLevel._id.toString()],
        difficulty: 'medium',
        questionType: 'Conceptual',
        answer: 'Server-Side Rendering pre-renders HTML on each request.',
        tags: ['ssr', 'nextjs'],
        status: 'draft',
      };

      const res = await request(app)
        .post('/api/admin/questions')
        .set('Authorization', `Bearer ${authContext.adminToken}`)
        .send(newQuestionPayload);

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.question).toBe('What is SSR in Next.js?');
      expect(res.body.data.status).toBe('draft');

      const inDb = await Question.findById(res.body.data._id);
      expect(inDb).not.toBeNull();
    });
  });

  describe('PUT /api/admin/questions/:id', () => {
    it('should allow admin to update an existing question', async () => {
      const res = await request(app)
        .put(`/api/admin/questions/${draftQ._id}`)
        .set('Authorization', `Bearer ${authContext.adminToken}`)
        .send({
          title: 'Updated Draft Title',
          difficulty: 'hard',
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.title).toBe('Updated Draft Title');
      expect(res.body.data.difficulty).toBe('hard');
    });

    it('should return 404 if updating non-existent question ID', async () => {
      const nonExistentId = '507f1f77bcf86cd799439011';
      const res = await request(app)
        .put(`/api/admin/questions/${nonExistentId}`)
        .set('Authorization', `Bearer ${authContext.adminToken}`)
        .send({
          title: 'Updated Title',
        });

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
    });
  });

  describe('PATCH /api/admin/questions/:id/publish', () => {
    it('should transition question status to published', async () => {
      const res = await request(app)
        .patch(`/api/admin/questions/${draftQ._id}/publish`)
        .set('Authorization', `Bearer ${authContext.adminToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.status).toBe('published');

      const updated = await Question.findById(draftQ._id);
      expect(updated?.status).toBe('published');
    });
  });

  describe('PATCH /api/admin/questions/:id/archive', () => {
    it('should transition question status to archived', async () => {
      const res = await request(app)
        .patch(`/api/admin/questions/${publishedQ._id}/archive`)
        .set('Authorization', `Bearer ${authContext.adminToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.status).toBe('archived');

      const updated = await Question.findById(publishedQ._id);
      expect(updated?.status).toBe('archived');
    });
  });

  describe('DELETE /api/admin/questions/:id', () => {
    it('should delete question from database and return success message', async () => {
      const res = await request(app)
        .delete(`/api/admin/questions/${publishedQ._id}`)
        .set('Authorization', `Bearer ${authContext.adminToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.message).toMatch(/deleted successfully/i);

      const deleted = await Question.findById(publishedQ._id);
      expect(deleted).toBeNull();
    });

    it('should return 404 when deleting already deleted or non-existent question', async () => {
      const nonExistentId = '507f1f77bcf86cd799439011';
      const res = await request(app)
        .delete(`/api/admin/questions/${nonExistentId}`)
        .set('Authorization', `Bearer ${authContext.adminToken}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
    });
  });
});
