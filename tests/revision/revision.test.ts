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
import { Question } from '../../src/models/Question';

describe('Revision Algorithm API (/api/revision)', () => {
  let authContext: TestAuthContext;
  let taxonomyContext: TestTaxonomyContext;

  const weakQuestionIds: string[] = [];
  const reviewQuestionIds: string[] = [];
  const knownQuestionIds: string[] = [];
  let knownImportantQId: string;
  const unpracticedImportantIds: string[] = [];
  const unpracticedNormalIds: string[] = [];

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

    weakQuestionIds.length = 0;
    reviewQuestionIds.length = 0;
    knownQuestionIds.length = 0;
    unpracticedImportantIds.length = 0;
    unpracticedNormalIds.length = 0;

    // 1. Create 5 Weak Questions (3 React, 2 Node)
    for (let i = 1; i <= 5; i++) {
      const isReact = i <= 3;
      const q = await createSampleQuestion({
        question: `Weak Question ${i}`,
        title: `Weak Question ${i}`,
        technologyId: isReact ? taxonomyContext.reactTech._id : taxonomyContext.nodeTech._id,
        topicId: isReact ? taxonomyContext.hooksTopic._id : taxonomyContext.eventLoopTopic._id,
        preparationLevels: [isReact ? taxonomyContext.foundationLevel._id : taxonomyContext.advancedLevel._id],
        isImportant: false,
        status: 'published',
      });
      weakQuestionIds.push(q._id.toString());
      await UserQuestionProgress.create({
        userId: authContext.regularUser._id,
        questionId: q._id,
        status: 'weak',
        reviewCount: 2,
      });
    }

    // 2. Create 4 Review Questions (2 React, 2 Node)
    for (let i = 1; i <= 4; i++) {
      const isReact = i <= 2;
      const q = await createSampleQuestion({
        question: `Review Question ${i}`,
        title: `Review Question ${i}`,
        technologyId: isReact ? taxonomyContext.reactTech._id : taxonomyContext.nodeTech._id,
        topicId: isReact ? taxonomyContext.hooksTopic._id : taxonomyContext.eventLoopTopic._id,
        preparationLevels: [isReact ? taxonomyContext.foundationLevel._id : taxonomyContext.advancedLevel._id],
        isImportant: false,
        status: 'published',
      });
      reviewQuestionIds.push(q._id.toString());
      await UserQuestionProgress.create({
        userId: authContext.regularUser._id,
        questionId: q._id,
        status: 'review',
        reviewCount: 1,
      });
    }

    // 3. Create 3 Known Questions (one is marked isImportant)
    for (let i = 1; i <= 3; i++) {
      const isImp = i === 1;
      const q = await createSampleQuestion({
        question: `Known Question ${i}`,
        title: `Known Question ${i}`,
        technologyId: taxonomyContext.reactTech._id,
        topicId: taxonomyContext.hooksTopic._id,
        preparationLevels: [taxonomyContext.foundationLevel._id],
        isImportant: isImp,
        status: 'published',
      });
      knownQuestionIds.push(q._id.toString());
      if (isImp) knownImportantQId = q._id.toString();
      await UserQuestionProgress.create({
        userId: authContext.regularUser._id,
        questionId: q._id,
        status: 'known',
        reviewCount: 5,
      });
    }

    // 4. Create 3 Unpracticed Important Questions
    for (let i = 1; i <= 3; i++) {
      const q = await createSampleQuestion({
        question: `Unpracticed Important ${i}`,
        title: `Unpracticed Important ${i}`,
        technologyId: taxonomyContext.reactTech._id,
        topicId: taxonomyContext.hooksTopic._id,
        preparationLevels: [taxonomyContext.foundationLevel._id],
        isImportant: true,
        status: 'published',
      });
      unpracticedImportantIds.push(q._id.toString());
    }

    // 5. Create 5 Unpracticed Normal Questions
    for (let i = 1; i <= 5; i++) {
      const q = await createSampleQuestion({
        question: `Unpracticed Normal ${i}`,
        title: `Unpracticed Normal ${i}`,
        technologyId: taxonomyContext.nodeTech._id,
        topicId: taxonomyContext.eventLoopTopic._id,
        preparationLevels: [taxonomyContext.advancedLevel._id],
        isImportant: false,
        status: 'published',
      });
      unpracticedNormalIds.push(q._id.toString());
    }
  });

  describe('GET /api/revision/weak', () => {
    it('should return only questions marked as weak by the user', async () => {
      const res = await request(app)
        .get('/api/revision/weak')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.questions).toHaveLength(5);
      expect(res.body.questions.every((q: any) => q.userProgress.status === 'weak')).toBe(true);
    });

    it('should filter weak questions by technology', async () => {
      const res = await request(app)
        .get('/api/revision/weak?technology=nodejs')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(2);
      expect(res.body.questions.every((q: any) => q.technologyId.slug === 'nodejs')).toBe(true);
    });

    it('should paginate weak questions', async () => {
      const res = await request(app)
        .get('/api/revision/weak?page=1&limit=2')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(2);
      expect(res.body.pagination.total).toBe(5);
      expect(res.body.pagination.totalPages).toBe(3);
    });
  });

  describe('GET /api/revision/quick', () => {
    it('should return the expected priority distribution (40% weak, 30% review, 20% important, 10% unpracticed) for limit=10', async () => {
      const res = await request(app)
        .get('/api/revision/quick?limit=10')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.count).toBe(10);
      expect(res.body.data.questions).toHaveLength(10);

      const returnedQuestions = res.body.data.questions;
      const returnedIds = returnedQuestions.map((q: any) => q._id.toString());

      // 1. Verify NO DUPLICATES
      const uniqueIds = new Set(returnedIds);
      expect(uniqueIds.size).toBe(10);

      // 2. Verify 4 Weak questions (40% of 10 = 4)
      const weakReturned = returnedQuestions.filter((q: any) => weakQuestionIds.includes(q._id.toString()));
      expect(weakReturned.length).toBe(4);

      // 3. Verify 3 Review questions (30% of 10 = 3)
      const reviewReturned = returnedQuestions.filter((q: any) => reviewQuestionIds.includes(q._id.toString()));
      expect(reviewReturned.length).toBe(3);

      // 4. Verify 2 Important unmastered questions (20% of 10 = 2)
      const importantReturned = returnedQuestions.filter((q: any) => unpracticedImportantIds.includes(q._id.toString()));
      expect(importantReturned.length).toBe(2);

      // 5. Verify Known questions are NOT included in important phase
      expect(returnedIds).not.toContain(knownImportantQId);

      // 6. Verify remaining 1 question is from unpracticed/general pool (10% of 10 = 1)
      const unpracticedGeneral = returnedQuestions.filter((q: any) => unpracticedNormalIds.includes(q._id.toString()));
      expect(unpracticedGeneral.length).toBe(1);
    });

    it('should filter quick revision questions by technology', async () => {
      const res = await request(app)
        .get('/api/revision/quick?technology=nodejs&limit=10')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.questions.every((q: any) => q.technologyId.slug === 'nodejs')).toBe(true);
    });

    it('should filter quick revision questions by preparation level', async () => {
      const res = await request(app)
        .get('/api/revision/quick?preparationLevel=foundation&limit=10')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.questions.every((q: any) => q.preparationLevels.some((l: any) => l.slug === 'foundation'))).toBe(true);
    });

    it('should respect custom limit', async () => {
      const res = await request(app)
        .get('/api/revision/quick?limit=5')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.count).toBe(5);
      expect(res.body.data.questions).toHaveLength(5);
    });
  });

  describe('GET /api/revision/interview-prep', () => {
    it('should strictly follow priority order: 1. weak, 2. review, 3. important, 4. unpracticed', async () => {
      // Request limit=12
      // Available: 5 weak, 4 review, 3 unpracticed important, 5 unpracticed normal
      // Phase 1: 5 weak questions
      // Phase 2: 4 review questions
      // Phase 3: 3 important questions
      // Total so far = 12, satisfying limit!
      const res = await request(app)
        .get('/api/revision/interview-prep?limit=12')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.count).toBe(12);
      expect(res.body.data.questions).toHaveLength(12);

      const returnedQuestions = res.body.data.questions;
      const returnedIds = returnedQuestions.map((q: any) => q._id.toString());

      // Verify no duplicates
      expect(new Set(returnedIds).size).toBe(12);

      // First 5 questions must be the weak questions
      const first5Ids = returnedIds.slice(0, 5);
      expect(first5Ids.every((id: string) => weakQuestionIds.includes(id))).toBe(true);

      // Next 4 questions (indices 5-8) must be the review questions
      const next4Ids = returnedIds.slice(5, 9);
      expect(next4Ids.every((id: string) => reviewQuestionIds.includes(id))).toBe(true);

      // Next 3 questions (indices 9-11) must be important questions
      const next3Ids = returnedIds.slice(9, 12);
      expect(next3Ids.every((id: string) => unpracticedImportantIds.includes(id) || id === knownImportantQId)).toBe(true);
    });

    it('should filter interview prep by technology and preparation level', async () => {
      const res = await request(app)
        .get('/api/revision/interview-prep?technologies=react&preparationLevel=foundation&limit=10')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.questions.every((q: any) => q.technologyId.slug === 'react')).toBe(true);
      expect(res.body.data.questions.every((q: any) => q.preparationLevels.some((l: any) => l.slug === 'foundation'))).toBe(true);
    });

    it('should accept comma-separated technology slugs in interview prep', async () => {
      const res = await request(app)
        .get('/api/revision/interview-prep?technologies=react,nodejs&limit=10')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.count).toBe(10);
    });

    it('should reject unauthenticated request with 401', async () => {
      const res = await request(app).get('/api/revision/interview-prep');

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });
});
