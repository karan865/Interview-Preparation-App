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
import { UserQuestionProgress } from '../../src/models/UserQuestionProgress';

describe('Bookmark / Save Questions API', () => {
  let authContext: TestAuthContext;
  let taxonomyContext: TestTaxonomyContext;
  let question1: any;
  let question2: any;

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

    question1 = await createSampleQuestion({
      question: 'Question 1 for saving',
      title: 'Question 1',
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      status: 'published',
    });

    question2 = await createSampleQuestion({
      question: 'Question 2 for saving',
      title: 'Question 2',
      technologyId: taxonomyContext.nodeTech._id,
      topicId: taxonomyContext.eventLoopTopic._id,
      status: 'published',
    });
  });

  describe('POST /api/questions/:questionId/save', () => {
    it('should save a question for authenticated user', async () => {
      const res = await request(app)
        .post(`/api/questions/${question1._id}/save`)
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.isSaved).toBe(true);
      expect(res.body.data.questionId).toBe(question1._id.toString());

      const progress = await UserQuestionProgress.findOne({
        userId: authContext.regularUser._id,
        questionId: question1._id,
      });
      expect(progress).not.toBeNull();
      expect(progress?.isSaved).toBe(true);
    });

    it('should be idempotent when saving the same question twice', async () => {
      // First save
      await request(app)
        .post(`/api/questions/${question1._id}/save`)
        .set('Authorization', `Bearer ${authContext.userToken}`);

      // Second save
      const res = await request(app)
        .post(`/api/questions/${question1._id}/save`)
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.isSaved).toBe(true);

      const count = await UserQuestionProgress.countDocuments({
        userId: authContext.regularUser._id,
        questionId: question1._id,
      });
      expect(count).toBe(1);
    });

    it('should reject unauthenticated save request with 401', async () => {
      const res = await request(app).post(`/api/questions/${question1._id}/save`);

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
    });

    it('should reject invalid question ID with 400', async () => {
      const res = await request(app)
        .post('/api/questions/invalid-id/save')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
    });
  });

  describe('DELETE /api/questions/:questionId/save', () => {
    it('should unsave a previously saved question', async () => {
      // Save it first
      await request(app)
        .post(`/api/questions/${question1._id}/save`)
        .set('Authorization', `Bearer ${authContext.userToken}`);

      // Now unsave
      const res = await request(app)
        .delete(`/api/questions/${question1._id}/save`)
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.isSaved).toBe(false);

      const progress = await UserQuestionProgress.findOne({
        userId: authContext.regularUser._id,
        questionId: question1._id,
      });
      expect(progress?.isSaved).toBe(false);
    });

    it('should be idempotent when unsaving an already unsaved question', async () => {
      const res = await request(app)
        .delete(`/api/questions/${question1._id}/save`)
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.isSaved).toBe(false);
    });

    it('should reject unauthenticated unsave request with 401', async () => {
      const res = await request(app).delete(`/api/questions/${question1._id}/save`);

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });

  describe('GET /api/questions/saved', () => {
    it('should return all saved questions for the authenticated user', async () => {
      // Save both questions for user 1
      await request(app)
        .post(`/api/questions/${question1._id}/save`)
        .set('Authorization', `Bearer ${authContext.userToken}`);

      await request(app)
        .post(`/api/questions/${question2._id}/save`)
        .set('Authorization', `Bearer ${authContext.userToken}`);

      const res = await request(app)
        .get('/api/questions/saved')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.questions).toHaveLength(2);
      expect(res.body.pagination.total).toBe(2);
      expect(res.body.questions.every((q: any) => q.userProgress.isSaved === true)).toBe(true);
    });

    it('should paginate saved questions', async () => {
      await request(app)
        .post(`/api/questions/${question1._id}/save`)
        .set('Authorization', `Bearer ${authContext.userToken}`);

      await request(app)
        .post(`/api/questions/${question2._id}/save`)
        .set('Authorization', `Bearer ${authContext.userToken}`);

      const res = await request(app)
        .get('/api/questions/saved?page=1&limit=1')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(1);
      expect(res.body.pagination.total).toBe(2);
      expect(res.body.pagination.totalPages).toBe(2);
    });

    it('should isolate saved questions per user (user A cannot see user B saved questions)', async () => {
      // Save question1 for user 1
      await request(app)
        .post(`/api/questions/${question1._id}/save`)
        .set('Authorization', `Bearer ${authContext.userToken}`);

      // Request saved questions for secondUser
      const res = await request(app)
        .get('/api/questions/saved')
        .set('Authorization', `Bearer ${authContext.secondUserToken}`);

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(0);
      expect(res.body.pagination.total).toBe(0);
    });

    it('should reject unauthenticated access to saved questions with 401', async () => {
      const res = await request(app).get('/api/questions/saved');

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });
});
