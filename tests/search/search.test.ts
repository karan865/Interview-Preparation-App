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

describe('Search API (/api/search)', () => {
  let authContext: TestAuthContext;
  let taxonomyContext: TestTaxonomyContext;

  beforeAll(async () => {
    await setupTestDB();
    await Question.createIndexes();
  });

  afterAll(async () => {
    await teardownTestDB();
  });

  beforeEach(async () => {
    await clearTestDB();
    await Question.createIndexes();
    authContext = await createTestUsers();
    taxonomyContext = await createTestTaxonomy();

    // 1. React Memoization Question
    await createSampleQuestion({
      question: 'How does memoization work with useMemo in React?',
      title: 'useMemo Optimization Guide',
      answer: 'useMemo avoids recomputing expensive calculations across renders.',
      tags: ['performance', 'memoization', 'hooks'],
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      preparationLevels: [taxonomyContext.intermediateLevel._id],
      status: 'published',
    });

    // 2. Node Event Loop Architecture Question
    await createSampleQuestion({
      question: 'Explain the microtask queue and timer phases in Node.js',
      title: 'Node Microtask Phases',
      answer: 'Microtasks like process.nextTick and Promise callbacks run between phases.',
      tags: ['eventloop', 'concurrency', 'asynchronous'],
      technologyId: taxonomyContext.nodeTech._id,
      topicId: taxonomyContext.eventLoopTopic._id,
      preparationLevels: [taxonomyContext.advancedLevel._id],
      status: 'published',
    });

    // 3. Draft Question (should NOT appear in search results)
    await createSampleQuestion({
      question: 'Draft memoization notes not yet ready for publication',
      title: 'Draft Memoization',
      answer: 'Draft text',
      tags: ['memoization'],
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      status: 'draft',
    });
  });

  describe('GET /api/search', () => {
    it('should find questions matching keywords in question text', async () => {
      const res = await request(app).get('/api/search?q=memoization');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.query).toBe('memoization');
      expect(res.body.questions).toHaveLength(1);
      expect(res.body.questions[0].title).toBe('useMemo Optimization Guide');
    });

    it('should find questions matching keywords in title', async () => {
      const res = await request(app).get('/api/search?q=Optimization');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.questions).toHaveLength(1);
      expect(res.body.questions[0].title).toBe('useMemo Optimization Guide');
    });

    it('should find questions matching tags', async () => {
      const res = await request(app).get('/api/search?q=concurrency');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.questions).toHaveLength(1);
      expect(res.body.questions[0].title).toBe('Node Microtask Phases');
    });

    it('should combine search query with optional technology filter', async () => {
      const res = await request(app).get('/api/search?q=memoization&technology=react');

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(1);
      expect(res.body.questions[0].technologyId.slug).toBe('react');

      const nonMatchingRes = await request(app).get('/api/search?q=memoization&technology=nodejs');
      expect(nonMatchingRes.status).toBe(200);
      expect(nonMatchingRes.body.questions).toHaveLength(0);
    });

    it('should combine search query with topic filter', async () => {
      const res = await request(app).get('/api/search?q=microtask&topic=event-loop');

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(1);
      expect(res.body.questions[0].topicId.slug).toBe('event-loop');
    });

    it('should combine search query with preparation level filter', async () => {
      const res = await request(app).get('/api/search?q=microtask&level=advanced');

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(1);

      const foundationRes = await request(app).get('/api/search?q=microtask&level=foundation');
      expect(foundationRes.status).toBe(200);
      expect(foundationRes.body.questions).toHaveLength(0);
    });

    it('should paginate search results', async () => {
      const res = await request(app).get('/api/search?q=phases&page=1&limit=1');

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(1);
      expect(res.body.pagination.page).toBe(1);
      expect(res.body.pagination.limit).toBe(1);
    });

    it('should return empty questions array when search query matches nothing', async () => {
      const res = await request(app).get('/api/search?q=quantum_cryptography_algorithm');

      expect(res.status).toBe(200);
      expect(res.body.questions).toHaveLength(0);
      expect(res.body.pagination.total).toBe(0);
    });

    it('should return 400 error if search query q is missing or empty', async () => {
      const res = await request(app).get('/api/search');

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toMatch(/parameter 'q' is required/i);

      const emptyRes = await request(app).get('/api/search?q=   ');
      expect(emptyRes.status).toBe(400);
      expect(emptyRes.body.success).toBe(false);
      expect(emptyRes.body.message).toMatch(/parameter 'q' is required/i);
    });
  });
});
