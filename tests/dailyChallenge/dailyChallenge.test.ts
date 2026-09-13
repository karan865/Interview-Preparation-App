import request from 'supertest';
import app from '../../src/app';
import { setupTestDB, clearTestDB, teardownTestDB } from '../setup/testDb';
import { Technology } from '../../src/models/Technology';
import { Topic } from '../../src/models/Topic';
import { Question } from '../../src/models/Question';

describe('Daily Challenge API (/api/questions/daily-challenge)', () => {
  let reactTechId: any;
  let nodeTechId: any;
  let mongoTechId: any;

  beforeAll(async () => {
    await setupTestDB();
  });

  afterAll(async () => {
    await teardownTestDB();
  });

  beforeEach(async () => {
    await clearTestDB();

    // 1. Create Technologies
    const [react, node, mongo] = await Promise.all([
      Technology.create({ name: 'React', slug: 'react', category: 'frontend', order: 1, isActive: true }),
      Technology.create({ name: 'Node.js', slug: 'nodejs', category: 'backend', order: 2, isActive: true }),
      Technology.create({ name: 'MongoDB', slug: 'mongodb', category: 'database', order: 3, isActive: true }),
    ]);

    reactTechId = react._id;
    nodeTechId = node._id;
    mongoTechId = mongo._id;

    // 2. Create Topics
    const [reactTopic, nodeTopic, mongoTopic] = await Promise.all([
      Topic.create({ name: 'React Hooks', slug: 'react-hooks', technologyId: reactTechId, order: 1 }),
      Topic.create({ name: 'Node Core', slug: 'node-core', technologyId: nodeTechId, order: 1 }),
      Topic.create({ name: 'Mongo Aggregation', slug: 'mongo-agg', technologyId: mongoTechId, order: 1 }),
    ]);

    // 3. Helper to seed questions with and without MCQ
    const createQuestions = async (techId: any, topicId: any, count: number, prefix: string) => {
      const docs = [];
      for (let i = 1; i <= count; i++) {
        docs.push({
          question: `${prefix} Question ${i}: Explain concept ${i}`,
          title: `${prefix} Question ${i}`,
          technologyId: techId,
          topicId: topicId,
          difficulty: i % 2 === 0 ? 'easy' : 'medium',
          questionType: 'Conceptual',
          answer: `This is the comprehensive educational answer for ${prefix} ${i}`,
          explanation: `Detailed explanation for ${prefix} ${i}`,
          status: 'published',
          source: 'curated',
          mcq: {
            enabled: true,
            options: [
              { id: 'A', text: `${prefix} Correct Answer ${i}` },
              { id: 'B', text: `${prefix} Wrong Answer 1` },
              { id: 'C', text: `${prefix} Wrong Answer 2` },
              { id: 'D', text: `${prefix} Wrong Answer 3` },
            ],
            correctOption: 'A',
          },
        });
      }
      return Question.insertMany(docs);
    };

    // Seed 15 questions per tech
    await Promise.all([
      createQuestions(reactTechId, reactTopic._id, 15, 'React'),
      createQuestions(nodeTechId, nodeTopic._id, 15, 'Node'),
      createQuestions(mongoTechId, mongoTopic._id, 15, 'Mongo'),
    ]);
  });

  it('1. GET /api/questions/daily-challenge returns default 20 learning and 10 test questions without auth', async () => {
    const res = await request(app).get('/api/questions/daily-challenge');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toBeDefined();

    const data = res.body.data;
    expect(data.learningCount).toBe(20);
    expect(data.testCount).toBe(10);
    expect(data.learningQuestions).toHaveLength(20);
    expect(data.testQuestions).toHaveLength(10);

    // Each test question should have 4 options and valid correctOption
    const firstTestQ = data.testQuestions[0];
    expect(firstTestQ.options).toHaveLength(4);
    expect(['A', 'B', 'C', 'D']).toContain(firstTestQ.correctOption);
    expect(firstTestQ.explanation).toBeDefined();
  });

  it('2. GET /api/questions/daily-challenge honors configured question counts', async () => {
    const res = await request(app)
      .get('/api/questions/daily-challenge')
      .query({ learningCount: 10, testCount: 10 });

    expect(res.status).toBe(200);
    expect(res.body.data.learningCount).toBe(10);
    expect(res.body.data.testCount).toBe(10);
    expect(res.body.data.learningQuestions).toHaveLength(10);
    expect(res.body.data.testQuestions).toHaveLength(10);
  });

  it('3. GET /api/questions/daily-challenge filters questions by selected technologies', async () => {
    const res = await request(app)
      .get('/api/questions/daily-challenge')
      .query({ technologies: 'react,nodejs', learningCount: 10, testCount: 10 });

    expect(res.status).toBe(200);
    const data = res.body.data;
    expect(data.technologies).toHaveLength(2);

    const allowedTechNames = ['React', 'Node.js'];
    for (const q of data.learningQuestions) {
      expect(allowedTechNames).toContain(q.technologyId.name);
    }
    for (const q of data.testQuestions) {
      expect(allowedTechNames).toContain(q.technologyName);
    }
  });

  it('4. GET /api/questions/daily-challenge/retry-test returns fresh test questions and honors count', async () => {
    const initialRes = await request(app)
      .get('/api/questions/daily-challenge')
      .query({ technologies: 'react', testCount: 10 });

    const usedIds = initialRes.body.data.testQuestions.map((q: any) => q._id);

    const retryRes = await request(app)
      .get('/api/questions/daily-challenge/retry-test')
      .query({ technologies: 'react', count: 10, excludeIds: usedIds.join(',') });

    expect(retryRes.status).toBe(200);
    expect(retryRes.body.success).toBe(true);
    expect(retryRes.body.data.testQuestions).toHaveLength(10);

    // Verify questions have valid options and fields
    const retryQ = retryRes.body.data.testQuestions[0];
    expect(retryQ.options).toHaveLength(4);
    expect(['A', 'B', 'C', 'D']).toContain(retryQ.correctOption);
  });
});
