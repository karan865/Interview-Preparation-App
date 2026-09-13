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

describe('Content Statistics & Gap Analysis API (/api/admin/content)', () => {
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

    // 1. Published, React, Hooks, Foundation, easy, personal-notes, Conceptual
    await createSampleQuestion({
      question: 'Content Stats Question 1',
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      preparationLevels: [taxonomyContext.foundationLevel._id],
      difficulty: 'easy',
      source: 'personal-notes',
      questionType: 'Conceptual',
      status: 'published',
    });

    // 2. Published, React, Hooks, Foundation, easy, web-research, Conceptual (giving Foundation 2 questions)
    await createSampleQuestion({
      question: 'Content Stats Question 2',
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      preparationLevels: [taxonomyContext.foundationLevel._id],
      difficulty: 'easy',
      source: 'web-research',
      questionType: 'Conceptual',
      status: 'published',
    });

    // 3. Draft, React, Hooks, Intermediate, medium, personal-notes, Scenario (giving Intermediate only 1 question -> gap!)
    await createSampleQuestion({
      question: 'Content Stats Question 3',
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      preparationLevels: [taxonomyContext.intermediateLevel._id],
      difficulty: 'medium',
      source: 'personal-notes',
      questionType: 'Scenario',
      status: 'draft',
    });

    // 4. Archived, Node, Event Loop, Advanced, hard, ai-generated, Architecture (giving Advanced 1 question -> gap!)
    await createSampleQuestion({
      question: 'Content Stats Question 4',
      technologyId: taxonomyContext.nodeTech._id,
      topicId: taxonomyContext.eventLoopTopic._id,
      preparationLevels: [taxonomyContext.advancedLevel._id],
      difficulty: 'hard',
      source: 'ai-generated',
      questionType: 'Architecture',
      status: 'archived',
    });
  });

  describe('GET /api/admin/content/stats', () => {
    it('should aggregate accurate counts across status, technology, level, difficulty, source, and questionType', async () => {
      const res = await request(app)
        .get('/api/admin/content/stats')
        .set('Authorization', `Bearer ${authContext.adminToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);

      const stats = res.body.data;

      // Status breakdown
      expect(stats.totalQuestions).toBe(4);
      expect(stats.published).toBe(2);
      expect(stats.draft).toBe(1);
      expect(stats.archived).toBe(1);

      // Technology breakdown
      const reactStat = stats.byTechnology.find((t: any) => t.slug === 'react');
      expect(reactStat.total).toBe(3);
      expect(reactStat.published).toBe(2);
      expect(reactStat.draft).toBe(1);
      expect(reactStat.archived).toBe(0);

      const nodeStat = stats.byTechnology.find((t: any) => t.slug === 'nodejs');
      expect(nodeStat.total).toBe(1);
      expect(nodeStat.published).toBe(0);
      expect(nodeStat.draft).toBe(0);
      expect(nodeStat.archived).toBe(1);

      // Preparation level breakdown
      const foundationStat = stats.byPreparationLevel.find((l: any) => l.slug === 'foundation');
      expect(foundationStat.count).toBe(2);

      const intermediateStat = stats.byPreparationLevel.find((l: any) => l.slug === 'intermediate');
      expect(intermediateStat.count).toBe(1);

      const advancedStat = stats.byPreparationLevel.find((l: any) => l.slug === 'advanced');
      expect(advancedStat.count).toBe(1);

      // Difficulty breakdown
      const easyDiff = stats.byDifficulty.find((d: any) => d.difficulty === 'easy');
      expect(easyDiff.count).toBe(2);

      // Source breakdown
      const notesSrc = stats.bySource.find((s: any) => s.source === 'personal-notes');
      expect(notesSrc.count).toBe(2);

      // QuestionType breakdown
      const conceptualType = stats.byQuestionType.find((q: any) => q.questionType === 'Conceptual');
      expect(conceptualType.count).toBe(2);
    });

    it('should reject normal user with 403', async () => {
      const res = await request(app)
        .get('/api/admin/content/stats')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(403);
      expect(res.body.success).toBe(false);
    });
  });

  describe('GET /api/admin/content/gaps', () => {
    it('should identify topics and preparation levels with insufficient coverage (< 2 questions)', async () => {
      const res = await request(app)
        .get('/api/admin/content/gaps')
        .set('Authorization', `Bearer ${authContext.adminToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);

      const data = res.body.data;
      expect(data.totalTechnologies).toBe(2);

      const reactAnalysis = data.technologies.find((t: any) => t.slug === 'react');
      expect(reactAnalysis).toBeDefined();

      const hooksTopicAnalysis = reactAnalysis.topics.find((tp: any) => tp.slug === 'hooks');
      expect(hooksTopicAnalysis).toBeDefined();

      // Foundation has 2 questions, so it should NOT be flagged as a gap
      expect(hooksTopicAnalysis.byLevel.foundation).toBe(2);
      expect(hooksTopicAnalysis.gaps).not.toContain('foundation');

      // Intermediate has only 1 question, so it SHOULD be flagged as a gap
      expect(hooksTopicAnalysis.byLevel.intermediate).toBe(1);
      expect(hooksTopicAnalysis.gaps).toContain('intermediate');

      // Advanced has 0 questions in React Hooks, so it SHOULD be flagged as a gap
      expect(hooksTopicAnalysis.byLevel.advanced).toBe(0);
      expect(hooksTopicAnalysis.gaps).toContain('advanced');
    });

    it('should reject unauthenticated request with 401', async () => {
      const res = await request(app).get('/api/admin/content/gaps');

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
    });
  });
});
