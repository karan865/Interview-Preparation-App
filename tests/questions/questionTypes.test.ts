import request from 'supertest';
import app from '../../src/app';
import { setupTestDB, clearTestDB, teardownTestDB } from '../setup/testDb';
import { Question } from '../../src/models/Question';
import { Technology } from '../../src/models/Technology';
import { Topic } from '../../src/models/Topic';
import { PreparationLevel } from '../../src/models/PreparationLevel';
import { QUESTION_TYPES, ALL_QUESTION_TYPES, normalizeQuestionType } from '../../src/constants/questionTypes';

describe('Canonical Question Categories & Normalization API', () => {
  let tech: any;
  let topic: any;
  let level: any;

  beforeAll(async () => {
    await setupTestDB();
  });

  afterAll(async () => {
    await teardownTestDB();
  });

  beforeEach(async () => {
    await clearTestDB();

    tech = await Technology.create({
      name: 'Full Stack Node',
      slug: 'full-stack-node',
      category: 'backend',
      order: 1,
    });

    topic = await Topic.create({
      technologyId: tech._id,
      name: 'Diagnostics & Architecture',
      slug: 'diagnostics-architecture',
      order: 1,
    });

    level = await PreparationLevel.create({
      name: 'Advanced',
      slug: 'advanced',
      order: 4,
    });
  });

  describe('Canonical Types & Normalizer Unit Verification', () => {
    it('should have all 10 canonical question types defined', () => {
      expect(ALL_QUESTION_TYPES).toHaveLength(10);
      expect(ALL_QUESTION_TYPES).toContain('Conceptual');
      expect(ALL_QUESTION_TYPES).toContain('Output / Code Prediction');
      expect(ALL_QUESTION_TYPES).toContain('Coding / Implementation');
      expect(ALL_QUESTION_TYPES).toContain('Logical / Scenario-Based');
      expect(ALL_QUESTION_TYPES).toContain('Troubleshooting / Debugging');
      expect(ALL_QUESTION_TYPES).toContain('Performance / Optimization');
      expect(ALL_QUESTION_TYPES).toContain('Production / Real-World');
      expect(ALL_QUESTION_TYPES).toContain('Architecture / Design Thinking');
      expect(ALL_QUESTION_TYPES).toContain('Trade-off / Decision Making');
      expect(ALL_QUESTION_TYPES).toContain('Cross-Technology Scenario');
    });

    it('should map common aliases into canonical question types', () => {
      expect(normalizeQuestionType('output')).toBe(QUESTION_TYPES.OUTPUT_PREDICTION);
      expect(normalizeQuestionType('coding')).toBe(QUESTION_TYPES.CODING_IMPLEMENTATION);
      expect(normalizeQuestionType('scenario')).toBe(QUESTION_TYPES.LOGICAL_SCENARIO);
      expect(normalizeQuestionType('scenario based')).toBe(QUESTION_TYPES.LOGICAL_SCENARIO);
      expect(normalizeQuestionType('troubleshooting')).toBe(QUESTION_TYPES.TROUBLESHOOTING);
      expect(normalizeQuestionType('debugging')).toBe(QUESTION_TYPES.TROUBLESHOOTING);
      expect(normalizeQuestionType('performance')).toBe(QUESTION_TYPES.PERFORMANCE_OPTIMIZATION);
      expect(normalizeQuestionType('production')).toBe(QUESTION_TYPES.PRODUCTION_REAL_WORLD);
      expect(normalizeQuestionType('real-world')).toBe(QUESTION_TYPES.PRODUCTION_REAL_WORLD);
      expect(normalizeQuestionType('architecture')).toBe(QUESTION_TYPES.ARCHITECTURE_DESIGN);
      expect(normalizeQuestionType('system design')).toBe(QUESTION_TYPES.ARCHITECTURE_DESIGN);
      expect(normalizeQuestionType('trade-off')).toBe(QUESTION_TYPES.TRADEOFF_DECISION);
      expect(normalizeQuestionType('comparison')).toBe(QUESTION_TYPES.TRADEOFF_DECISION);
      expect(normalizeQuestionType('cross-technology')).toBe(QUESTION_TYPES.CROSS_TECHNOLOGY);
      expect(normalizeQuestionType('cross-tech')).toBe(QUESTION_TYPES.CROSS_TECHNOLOGY);
      expect(normalizeQuestionType(null)).toBe(QUESTION_TYPES.CONCEPTUAL);
      expect(normalizeQuestionType('')).toBe(QUESTION_TYPES.CONCEPTUAL);
    });
  });

  describe('API Persistence & Query Filtering', () => {
    it('should create and retrieve a question with steps and followUpQuestions', async () => {
      const q = await Question.create({
        question: 'API response time increases from 50ms to 4000ms under 5,000 concurrent users. How would you investigate?',
        title: 'Diagnosing API Latency Spike',
        technologyId: tech._id,
        topicId: topic._id,
        preparationLevels: [level._id],
        difficulty: 'hard',
        questionType: QUESTION_TYPES.PERFORMANCE_OPTIMIZATION,
        answer: 'Profile event loop latency, database query times, and external microservice dependencies.',
        steps: [
          { stepNumber: 1, title: 'Inspect APM Metrics', description: 'Check p95 and p99 response times.' },
          { stepNumber: 2, title: 'Isolate Event Loop', description: 'Use perf or clinic.js to see if CPU is saturated.' },
        ],
        followUpQuestions: [
          'What if CPU usage remains below 20%?',
          'How would you verify connection pool exhaustion in MongoDB?',
        ],
        status: 'published',
      });

      const res = await request(app).get(`/api/questions/${q._id}`);
      expect(res.status).toBe(200);
      expect(res.body.data.questionType).toBe(QUESTION_TYPES.PERFORMANCE_OPTIMIZATION);
      expect(res.body.data.steps).toHaveLength(2);
      expect(res.body.data.followUpQuestions).toHaveLength(2);
      expect(res.body.data.followUpQuestions[0]).toBe('What if CPU usage remains below 20%?');
    });

    it('should filter questions by canonical questionType', async () => {
      await Question.create({
        question: 'A React dashboard re-renders 30 cards unnecessarily. Walk through root-cause isolation.',
        technologyId: tech._id,
        topicId: topic._id,
        preparationLevels: [level._id],
        difficulty: 'hard',
        questionType: QUESTION_TYPES.LOGICAL_SCENARIO,
        answer: 'Use React Profiler to verify commit times and identify which state change triggered re-renders.',
        status: 'published',
      });

      const resCanonical = await request(app).get(`/api/questions?questionType=${encodeURIComponent(QUESTION_TYPES.LOGICAL_SCENARIO)}`);
      expect(resCanonical.status).toBe(200);
      expect(resCanonical.body.questions.length).toBeGreaterThanOrEqual(1);
      expect(resCanonical.body.questions[0].questionType).toBe(QUESTION_TYPES.LOGICAL_SCENARIO);

      const resAlias = await request(app).get('/api/questions?questionType=Scenario');
      expect(resAlias.status).toBe(200);
      expect(resAlias.body.questions.length).toBeGreaterThanOrEqual(1);
      expect(resAlias.body.questions[0].questionType).toBe(QUESTION_TYPES.LOGICAL_SCENARIO);
    });

    it('should filter questions by Cross-Technology Scenario', async () => {
      await Question.create({
        question: 'Walk through determining whether a search lag is React rendering, network latency, Express middleware, or MongoDB query execution.',
        technologyId: tech._id,
        topicId: topic._id,
        preparationLevels: [level._id],
        difficulty: 'hard',
        questionType: QUESTION_TYPES.CROSS_TECHNOLOGY,
        answer: 'Measure each boundary using Chrome DevTools Performance tab, Network tab timing breakdown, server-timing headers, and database explain executionStats.',
        status: 'published',
      });

      const res = await request(app).get(`/api/questions?questionType=${encodeURIComponent(QUESTION_TYPES.CROSS_TECHNOLOGY)}`);
      expect(res.status).toBe(200);
      expect(res.body.questions.length).toBeGreaterThanOrEqual(1);
      expect(res.body.questions[0].questionType).toBe(QUESTION_TYPES.CROSS_TECHNOLOGY);
    });
  });
});
