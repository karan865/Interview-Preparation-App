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

describe('User Question Progress API (/api/progress)', () => {
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
      question: 'Explain JavaScript Closures',
      title: 'Closures in JS',
      technologyId: taxonomyContext.nodeTech._id,
      topicId: taxonomyContext.eventLoopTopic._id,
      status: 'published',
    });
  });

  describe('POST /api/progress/:questionId', () => {
    it('should set status to known, increment reviewCount to 1, and set lastReviewedAt', async () => {
      const res = await request(app)
        .post(`/api/progress/${sampleQuestion._id}`)
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({ status: 'known' });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.status).toBe('known');
      expect(res.body.data.reviewCount).toBe(1);
      expect(res.body.data.lastReviewedAt).toBeDefined();

      const doc = await UserQuestionProgress.findOne({
        userId: authContext.regularUser._id,
        questionId: sampleQuestion._id,
      });
      expect(doc?.status).toBe('known');
      expect(doc?.reviewCount).toBe(1);
    });

    it('should set status to review and increment reviewCount', async () => {
      const res = await request(app)
        .post(`/api/progress/${sampleQuestion._id}`)
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({ status: 'review' });

      expect(res.status).toBe(200);
      expect(res.body.data.status).toBe('review');
      expect(res.body.data.reviewCount).toBe(1);
    });

    it('should set status to weak and increment reviewCount', async () => {
      const res = await request(app)
        .post(`/api/progress/${sampleQuestion._id}`)
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({ status: 'weak' });

      expect(res.status).toBe(200);
      expect(res.body.data.status).toBe('weak');
      expect(res.body.data.reviewCount).toBe(1);
    });

    it('should correctly increment reviewCount on repeated updates', async () => {
      // Step 1: Mark weak
      await request(app)
        .post(`/api/progress/${sampleQuestion._id}`)
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({ status: 'weak' });

      // Step 2: Mark review
      await request(app)
        .post(`/api/progress/${sampleQuestion._id}`)
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({ status: 'review' });

      // Step 3: Mark known
      const res = await request(app)
        .post(`/api/progress/${sampleQuestion._id}`)
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({ status: 'known' });

      expect(res.status).toBe(200);
      expect(res.body.data.status).toBe('known');
      expect(res.body.data.reviewCount).toBe(3);
    });

    it('should reject invalid status with 400 validation error', async () => {
      const res = await request(app)
        .post(`/api/progress/${sampleQuestion._id}`)
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({ status: 'mastered' }); // not in ['known', 'review', 'weak']

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toBe('Validation failed');
    });

    it('should reject invalid questionId with 400', async () => {
      const res = await request(app)
        .post('/api/progress/invalid-mongo-id')
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({ status: 'known' });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
    });

    it('should return 404 for non-existent question ID', async () => {
      const nonExistentId = '507f1f77bcf86cd799439011';
      const res = await request(app)
        .post(`/api/progress/${nonExistentId}`)
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({ status: 'known' });

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/question not found/i);
    });

    it('should isolate user progress (user 1 cannot modify user 2 progress)', async () => {
      // User 1 marks known
      await request(app)
        .post(`/api/progress/${sampleQuestion._id}`)
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({ status: 'known' });

      // User 2 marks weak
      await request(app)
        .post(`/api/progress/${sampleQuestion._id}`)
        .set('Authorization', `Bearer ${authContext.secondUserToken}`)
        .send({ status: 'weak' });

      // Verify User 1 progress remains known and count is 1
      const user1Progress = await UserQuestionProgress.findOne({
        userId: authContext.regularUser._id,
        questionId: sampleQuestion._id,
      });
      expect(user1Progress?.status).toBe('known');
      expect(user1Progress?.reviewCount).toBe(1);

      // Verify User 2 progress is weak and count is 1
      const user2Progress = await UserQuestionProgress.findOne({
        userId: authContext.secondUser._id,
        questionId: sampleQuestion._id,
      });
      expect(user2Progress?.status).toBe('weak');
      expect(user2Progress?.reviewCount).toBe(1);
    });

    it('should reject unauthenticated requests with 401', async () => {
      const res = await request(app)
        .post(`/api/progress/${sampleQuestion._id}`)
        .send({ status: 'known' });

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });

  describe('DELETE /api/progress/:questionId', () => {
    it('should reset (delete) progress for the question', async () => {
      // First create progress
      await request(app)
        .post(`/api/progress/${sampleQuestion._id}`)
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({ status: 'weak' });

      // Now reset progress
      const res = await request(app)
        .delete(`/api/progress/${sampleQuestion._id}`)
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);

      const doc = await UserQuestionProgress.findOne({
        userId: authContext.regularUser._id,
        questionId: sampleQuestion._id,
      });
      expect(doc).toBeNull();
    });

    it('should return a friendly response if no progress exists to reset', async () => {
      const res = await request(app)
        .delete(`/api/progress/${sampleQuestion._id}`)
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.message).toMatch(/no existing progress/i);
    });

    it('should reject unauthenticated reset requests with 401', async () => {
      const res = await request(app).delete(`/api/progress/${sampleQuestion._id}`);

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });
});
