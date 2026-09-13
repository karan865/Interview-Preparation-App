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
import { UserQuestionProgress } from '../../src/models/UserQuestionProgress';

describe('Questions API (/api/questions)', () => {
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

    // Seed diverse questions
    // 1. Published React Hook Easy
    await createSampleQuestion({
      question: 'What is useState in React?',
      title: 'useState Hook',
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      preparationLevels: [taxonomyContext.foundationLevel._id],
      difficulty: 'easy',
      questionType: 'Conceptual',
      isImportant: true,
      status: 'published',
    });

    // 2. Published React Hook Medium
    await createSampleQuestion({
      question: 'How does useEffect handle dependencies?',
      title: 'useEffect Dependencies',
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      preparationLevels: [taxonomyContext.intermediateLevel._id],
      difficulty: 'medium',
      questionType: 'Scenario',
      isImportant: false,
      status: 'published',
    });

    // 3. Published Node.js Event Loop Hard
    await createSampleQuestion({
      question: 'Explain the phases of the Node.js Event Loop',
      title: 'Event Loop Phases',
      technologyId: taxonomyContext.nodeTech._id,
      topicId: taxonomyContext.eventLoopTopic._id,
      preparationLevels: [taxonomyContext.advancedLevel._id],
      difficulty: 'hard',
      questionType: 'Architecture',
      isImportant: true,
      status: 'published',
    });

    // 4. Draft Question (should NOT be visible to public)
    await createSampleQuestion({
      question: 'Work in progress draft question',
      title: 'Draft Question',
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      status: 'draft',
    });

    // 5. Archived Question (should NOT be visible to public)
    await createSampleQuestion({
      question: 'Old deprecated archived question',
      title: 'Archived Question',
      technologyId: taxonomyContext.nodeTech._id,
      topicId: taxonomyContext.eventLoopTopic._id,
      status: 'archived',
    });
  });

  describe('GET /api/questions', () => {
    it('should return only published questions for public unauthenticated requests', async () => {
      const res = await request(app).get('/api/questions');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.questions).toHaveLength(3);

      const statuses = res.body.questions.map((q: any) => q.status);
      expect(statuses.every((s: string) => s === 'published')).toBe(true);

      expect(res.body.pagination.total).toBe(3);
    });

    it('should filter questions by technology slug', async () => {
      const res = await request(app).get('/api/questions?technology=react');

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(2);
      expect(res.body.questions.every((q: any) => q.technologyId.slug === 'react')).toBe(true);
    });

    it('should filter questions by technology ObjectId', async () => {
      const nodeTechId = taxonomyContext.nodeTech._id.toString();
      const res = await request(app).get(`/api/questions?technology=${nodeTechId}`);

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(1);
      expect(res.body.questions[0].title).toBe('Event Loop Phases');
    });

    it('should filter questions by topic slug', async () => {
      const res = await request(app).get('/api/questions?topic=event-loop');

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(1);
      expect(res.body.questions[0].topicId.slug).toBe('event-loop');
    });

    it('should filter questions by preparation level slug', async () => {
      const res = await request(app).get('/api/questions?level=foundation');

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(1);
      expect(res.body.questions[0].title).toBe('useState Hook');
    });

    it('should filter questions by difficulty', async () => {
      const res = await request(app).get('/api/questions?difficulty=hard');

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(1);
      expect(res.body.questions[0].difficulty).toBe('hard');
    });

    it('should filter questions by questionType', async () => {
      const res = await request(app).get('/api/questions?questionType=Scenario');

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(1);
      expect(res.body.questions[0].questionType).toBe('Scenario');
    });

    it('should filter questions by isImportant flag', async () => {
      const res = await request(app).get('/api/questions?isImportant=true');

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(2);
      expect(res.body.questions.every((q: any) => q.isImportant === true)).toBe(true);
    });

    it('should paginate results properly with limit and page', async () => {
      const res = await request(app).get('/api/questions?page=1&limit=2');

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(2);
      expect(res.body.pagination.page).toBe(1);
      expect(res.body.pagination.limit).toBe(2);
      expect(res.body.pagination.total).toBe(3);
      expect(res.body.pagination.totalPages).toBe(2);

      const page2Res = await request(app).get('/api/questions?page=2&limit=2');
      expect(page2Res.status).toBe(200);
      expect(page2Res.body.questions).toHaveLength(1);
    });

    it('should handle empty result sets gracefully when no questions match filters', async () => {
      const res = await request(app).get('/api/questions?difficulty=hard&technology=react');

      expect(res.status).toBe(200);
      expect(res.body.questions).toEqual([]);
      expect(res.body.pagination.total).toBe(0);
    });

    it('should fallback gracefully on invalid/negative pagination numbers', async () => {
      const res = await request(app).get('/api/questions?page=-5&limit=abc');

      expect(res.status).toBe(200);
      expect(res.body.pagination.page).toBe(1);
      expect(res.body.pagination.limit).toBe(20); // default limit in pagination util is 20
    });

    it('should enrich questions with userProgress when authenticated with optionalAuth', async () => {
      // Find one question and create progress for regularUser
      const question = await Question.findOne({ title: 'useState Hook' });
      await UserQuestionProgress.create({
        userId: authContext.regularUser._id,
        questionId: question?._id,
        status: 'known',
        isSaved: true,
        reviewCount: 3,
      });

      const res = await request(app)
        .get('/api/questions')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      const useStateQ = res.body.questions.find((q: any) => q.title === 'useState Hook');
      expect(useStateQ).toBeDefined();
      expect(useStateQ.userProgress).toBeDefined();
      expect(useStateQ.userProgress.status).toBe('known');
      expect(useStateQ.userProgress.isSaved).toBe(true);
      expect(useStateQ.userProgress.reviewCount).toBe(3);

      const otherQ = res.body.questions.find((q: any) => q.title !== 'useState Hook');
      expect(otherQ.userProgress.status).toBeNull();
      expect(otherQ.userProgress.isSaved).toBe(false);
    });
  });

  describe('GET /api/questions/:id', () => {
    it('should return a published question by ID with populated fields', async () => {
      const question = await Question.findOne({ title: 'Event Loop Phases' });
      const res = await request(app).get(`/api/questions/${question?._id}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.title).toBe('Event Loop Phases');
      expect(res.body.data.technologyId.slug).toBe('nodejs');
      expect(res.body.data.topicId.slug).toBe('event-loop');
      expect(res.body.data.preparationLevels[0].slug).toBe('advanced');
    });

    it('should return 404 for draft questions when requested by public non-admin', async () => {
      const draft = await Question.findOne({ status: 'draft' });
      const res = await request(app).get(`/api/questions/${draft?._id}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/question not found/i);
    });

    it('should return 404 for archived questions when requested by public non-admin', async () => {
      const archived = await Question.findOne({ status: 'archived' });
      const res = await request(app).get(`/api/questions/${archived?._id}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/question not found/i);
    });

    it('should return 400 for malformed question ID', async () => {
      const res = await request(app).get('/api/questions/not-a-valid-object-id');

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/invalid question id/i);
    });

    it('should return 404 for valid ObjectId that does not exist', async () => {
      const nonExistentId = '507f1f77bcf86cd799439011';
      const res = await request(app).get(`/api/questions/${nonExistentId}`);

      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/question not found/i);
    });
  });
});
