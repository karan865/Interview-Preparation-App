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

describe('Dashboard API (/api/dashboard)', () => {
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

    // 1. Create 4 React Questions (Hooks)
    const reactQ1 = await createSampleQuestion({
      question: 'React Question 1',
      title: 'React Q1',
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      status: 'published',
    });
    const reactQ2 = await createSampleQuestion({
      question: 'React Question 2',
      title: 'React Q2',
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      status: 'published',
    });
    const reactQ3 = await createSampleQuestion({
      question: 'React Question 3',
      title: 'React Q3',
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      status: 'published',
    });
    const reactQ4 = await createSampleQuestion({
      question: 'React Question 4',
      title: 'React Q4',
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      status: 'published',
    });

    // 2. Create 2 Node.js Questions (Event Loop)
    const nodeQ1 = await createSampleQuestion({
      question: 'Node Question 1',
      title: 'Node Q1',
      technologyId: taxonomyContext.nodeTech._id,
      topicId: taxonomyContext.eventLoopTopic._id,
      status: 'published',
    });
    const nodeQ2 = await createSampleQuestion({
      question: 'Node Question 2',
      title: 'Node Q2',
      technologyId: taxonomyContext.nodeTech._id,
      topicId: taxonomyContext.eventLoopTopic._id,
      status: 'published',
    });

    // Total published questions = 6 (4 React + 2 Node)

    // 3. User Progress:
    // reactQ1: known (completed)
    // reactQ2: known (completed)
    // reactQ3: weak + isSaved
    // reactQ4: review
    // nodeQ1: known (completed) + isSaved
    // nodeQ2: unpracticed
    const now = new Date();
    await UserQuestionProgress.create({
      userId: authContext.regularUser._id,
      questionId: reactQ1._id,
      status: 'known',
      isSaved: false,
      lastReviewedAt: new Date(now.getTime() - 5000),
    });

    await UserQuestionProgress.create({
      userId: authContext.regularUser._id,
      questionId: reactQ2._id,
      status: 'known',
      isSaved: false,
      lastReviewedAt: new Date(now.getTime() - 4000),
    });

    await UserQuestionProgress.create({
      userId: authContext.regularUser._id,
      questionId: reactQ3._id,
      status: 'weak',
      isSaved: true,
      lastReviewedAt: new Date(now.getTime() - 3000),
    });

    await UserQuestionProgress.create({
      userId: authContext.regularUser._id,
      questionId: reactQ4._id,
      status: 'review',
      isSaved: false,
      lastReviewedAt: new Date(now.getTime() - 2000),
    });

    await UserQuestionProgress.create({
      userId: authContext.regularUser._id,
      questionId: nodeQ1._id,
      status: 'known',
      isSaved: true,
      lastReviewedAt: new Date(now.getTime() - 1000),
    });
  });

  describe('GET /api/dashboard', () => {
    it('should compute exact metric counts, percentages, and breakdowns from known test data', async () => {
      const res = await request(app)
        .get('/api/dashboard')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);

      const data = res.body.data;

      // 1. Total Published Questions = 6
      expect(data.totalQuestions).toBe(6);

      // 2. Completed Questions (known) = 3 (reactQ1, reactQ2, nodeQ1)
      expect(data.completedQuestions).toBe(3);

      // 3. Saved Questions = 2 (reactQ3, nodeQ1)
      expect(data.savedQuestions).toBe(2);

      // 4. Weak Questions = 1 (reactQ3)
      expect(data.weakQuestions).toBe(1);

      // 5. Review Questions = 1 (reactQ4)
      expect(data.reviewQuestions).toBe(1);

      // 6. Overall Progress Percentage = Math.round((3 / 6) * 100) = 50%
      expect(data.overallProgressPercentage).toBe(50);

      // 7. Technology Progress Breakdown
      expect(Array.isArray(data.technologyProgress)).toBe(true);
      const reactProgress = data.technologyProgress.find((t: any) => t.slug === 'react');
      expect(reactProgress).toBeDefined();
      expect(reactProgress.totalQuestions).toBe(4);
      expect(reactProgress.known).toBe(2);
      expect(reactProgress.weak).toBe(1);
      expect(reactProgress.review).toBe(1);
      // React completion percentage = Math.round((2 / 4) * 100) = 50%
      expect(reactProgress.completionPercentage).toBe(50);

      const nodeProgress = data.technologyProgress.find((t: any) => t.slug === 'nodejs');
      expect(nodeProgress).toBeDefined();
      expect(nodeProgress.totalQuestions).toBe(2);
      expect(nodeProgress.known).toBe(1);
      expect(nodeProgress.weak).toBe(0);
      expect(nodeProgress.review).toBe(0);
      // Node completion percentage = Math.round((1 / 2) * 100) = 50%
      expect(nodeProgress.completionPercentage).toBe(50);

      // 8. Weak Topics Analysis
      expect(Array.isArray(data.weakTopics)).toBe(true);
      expect(data.weakTopics.length).toBe(1);
      expect(data.weakTopics[0].topicSlug).toBe('hooks');
      expect(data.weakTopics[0].weakCount).toBe(1);

      // 9. Recent Questions Practiced (up to 5, sorted by lastReviewedAt desc)
      expect(Array.isArray(data.recentQuestions)).toBe(true);
      expect(data.recentQuestions.length).toBe(5);
      // Most recent should be nodeQ1
      expect(data.recentQuestions[0].title || data.recentQuestions[0].question).toBe('Node Question 1');
    });

    it('should reject unauthenticated request with 401', async () => {
      const res = await request(app).get('/api/dashboard');

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
    });

    it('should return 0 percentage and counts for user with no progress', async () => {
      const res = await request(app)
        .get('/api/dashboard')
        .set('Authorization', `Bearer ${authContext.secondUserToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.totalQuestions).toBe(6);
      expect(res.body.data.completedQuestions).toBe(0);
      expect(res.body.data.savedQuestions).toBe(0);
      expect(res.body.data.weakQuestions).toBe(0);
      expect(res.body.data.reviewQuestions).toBe(0);
      expect(res.body.data.overallProgressPercentage).toBe(0);
      expect(res.body.data.weakTopics).toEqual([]);
      expect(res.body.data.recentQuestions).toEqual([]);
    });
  });
});
