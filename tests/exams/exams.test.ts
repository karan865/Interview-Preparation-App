import request from 'supertest';
import app from '../../src/app';
import { setupTestDB, clearTestDB, teardownTestDB } from '../setup/testDb';
import { createTestUsers, TestAuthContext } from '../setup/testData';
import { Technology } from '../../src/models/Technology';
import { Topic } from '../../src/models/Topic';
import { Question } from '../../src/models/Question';
import { ExamAttempt } from '../../src/models/ExamAttempt';
import { shuffleQuestionOptions, calculatePerformanceCategory } from '../../src/services/exam.service';

describe('Interview Exam Mode API (/api/exams)', () => {
  let authContext: TestAuthContext;
  let reactTechId: any;
  let nodeTechId: any;
  let expressTechId: any;
  let mongoTechId: any;
  let sqlTechId: any;

  beforeAll(async () => {
    await setupTestDB();
  });

  afterAll(async () => {
    await teardownTestDB();
  });

  beforeEach(async () => {
    await clearTestDB();
    authContext = await createTestUsers();

    // 1. Create Technologies
    const [react, node, express, mongo, sql] = await Promise.all([
      Technology.create({ name: 'React', slug: 'react', category: 'frontend', order: 1, isActive: true }),
      Technology.create({ name: 'Node.js', slug: 'nodejs', category: 'backend', order: 2, isActive: true }),
      Technology.create({ name: 'Express.js', slug: 'express', category: 'backend', order: 3, isActive: true }),
      Technology.create({ name: 'MongoDB', slug: 'mongodb', category: 'database', order: 4, isActive: true }),
      Technology.create({ name: 'SQL', slug: 'sql', category: 'database', order: 5, isActive: true }),
    ]);

    reactTechId = react._id;
    nodeTechId = node._id;
    expressTechId = express._id;
    mongoTechId = mongo._id;
    sqlTechId = sql._id;

    // 2. Create Topics
    const [reactTopic, nodeTopic, expressTopic, mongoTopic, sqlTopic] = await Promise.all([
      Topic.create({ name: 'React Fundamentals', slug: 'react-fundamentals', technologyId: reactTechId, order: 1 }),
      Topic.create({ name: 'Node Core', slug: 'node-core', technologyId: nodeTechId, order: 1 }),
      Topic.create({ name: 'Express Middleware', slug: 'express-middleware', technologyId: expressTechId, order: 1 }),
      Topic.create({ name: 'MongoDB Indexing', slug: 'mongo-indexing', technologyId: mongoTechId, order: 1 }),
      Topic.create({ name: 'SQL Queries', slug: 'sql-queries', technologyId: sqlTechId, order: 1 }),
    ]);

    // Helper to generate N MCQ questions for a tech
    const createMCQs = async (techId: any, topicId: any, count: number, prefix: string) => {
      const docs = [];
      for (let i = 1; i <= count; i++) {
        docs.push({
          question: `${prefix} Question ${i}: What is feature ${i}?`,
          title: `${prefix} Question ${i}`,
          technologyId: techId,
          topicId: topicId,
          difficulty: i % 3 === 0 ? 'hard' : (i % 2 === 0 ? 'easy' : 'medium'),
          questionType: 'Conceptual',
          answer: `The correct answer for ${prefix} ${i}`,
          explanation: `Detailed explanation for ${prefix} ${i}`,
          status: 'published',
          isImportant: i <= 10,
          mcq: {
            enabled: true,
            options: [
              { id: 'A', text: `Option A for ${prefix} ${i}` },
              { id: 'B', text: `Option B for ${prefix} ${i} (Correct)` },
              { id: 'C', text: `Option C for ${prefix} ${i}` },
              { id: 'D', text: `Option D for ${prefix} ${i}` },
            ],
            correctOption: 'B',
          },
        });
      }
      await Question.insertMany(docs);
    };

    // Populate 30 React, 30 Node.js, 30 Express, 30 MongoDB, and 5 SQL questions (to test insufficient pool)
    await Promise.all([
      createMCQs(reactTechId, reactTopic._id, 30, 'React'),
      createMCQs(nodeTechId, nodeTopic._id, 30, 'Node'),
      createMCQs(expressTechId, expressTopic._id, 30, 'Express'),
      createMCQs(mongoTechId, mongoTopic._id, 30, 'MongoDB'),
      createMCQs(sqlTechId, sqlTopic._id, 5, 'SQL'),
    ]);
  });

  describe('GET /api/exams/subjects', () => {
    it('should list all active subjects with accurate MCQ counts and availability status', async () => {
      const res = await request(app).get('/api/exams/subjects');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);

      const react = res.body.data.find((s: any) => s.slug === 'react');
      expect(react).toBeDefined();
      expect(react.totalMcqs).toBe(30);
      expect(react.isAvailable).toBe(true);
      expect(react.requiredQuestions).toBe(25);

      const sql = res.body.data.find((s: any) => s.slug === 'sql');
      expect(sql).toBeDefined();
      expect(sql.totalMcqs).toBe(5);
      expect(sql.isAvailable).toBe(false);
    });
  });

  describe('Subject Exams (GET /api/exams/subject/:technologySlug)', () => {
    it('1. Subject exam returns only selected technology questions', async () => {
      const res = await request(app).get('/api/exams/subject/react');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.examType).toBe('subject');
      expect(res.body.data.technologySlug).toBe('react');

      const questions = res.body.data.questions;
      expect(questions).toHaveLength(25);

      for (const q of questions) {
        expect(q.technologyId.toString()).toBe(reactTechId.toString());
        expect(q.technologySlug).toBe('react');
      }
    });

    it('2. React exam NEVER contains Node.js, MongoDB, or Express questions', async () => {
      const res = await request(app).get('/api/exams/subject/react');
      expect(res.status).toBe(200);

      const questions = res.body.data.questions;
      for (const q of questions) {
        expect(q.technologySlug).not.toBe('nodejs');
        expect(q.technologySlug).not.toBe('express');
        expect(q.technologySlug).not.toBe('mongodb');
        expect(q.technologySlug).not.toBe('sql');
      }
    });

    it('3. Node.js exam NEVER contains React questions', async () => {
      const res = await request(app).get('/api/exams/subject/nodejs');
      expect(res.status).toBe(200);

      const questions = res.body.data.questions;
      expect(questions).toHaveLength(25);

      for (const q of questions) {
        expect(q.technologyId.toString()).toBe(nodeTechId.toString());
        expect(q.technologySlug).toBe('nodejs');
        expect(q.question).not.toContain('React');
      }
    });

    it('5. Every exam contains EXACTLY 25 questions when 25 eligible questions exist', async () => {
      const res = await request(app).get('/api/exams/subject/express');
      expect(res.status).toBe(200);
      expect(res.body.data.totalQuestions).toBe(25);
      expect(res.body.data.questions).toHaveLength(25);
    });

    it('6. Every question contains EXACTLY 4 options (A, B, C, D)', async () => {
      const res = await request(app).get('/api/exams/subject/react');
      expect(res.status).toBe(200);

      const questions = res.body.data.questions;
      for (const q of questions) {
        expect(q.options).toHaveLength(4);
        const optionIds = q.options.map((o: any) => o.id).sort();
        expect(optionIds).toEqual(['A', 'B', 'C', 'D']);
        expect(['A', 'B', 'C', 'D']).toContain(q.correctOption);
      }
    });

    it('7. No duplicate question appears within one exam', async () => {
      const res = await request(app).get('/api/exams/subject/react');
      expect(res.status).toBe(200);

      const questionIds = res.body.data.questions.map((q: any) => q._id.toString());
      const uniqueIds = new Set(questionIds);
      expect(uniqueIds.size).toBe(25);
    });

    it('Gracefully rejects subject with fewer than 25 questions with clear error message', async () => {
      const res = await request(app).get('/api/exams/subject/sql');

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.message).toContain('Insufficient questions for SQL');
      expect(res.body.data.isAvailable).toBe(false);
      expect(res.body.data.availableQuestions).toBe(5);
    });

    it('Returns 404 for unknown technology slug', async () => {
      const res = await request(app).get('/api/exams/subject/nonexistent-tech');
      expect(res.status).toBe(404);
      expect(res.body.success).toBe(false);
    });
  });

  describe('MERN Stack & All-Subjects Mixed Exam (GET /api/exams/mern)', () => {
    it('4. Full Stack / MERN exam dynamically draws exactly 25 questions across active technologies with MCQs', async () => {
      const res = await request(app).get('/api/exams/mern');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.examType).toBe('mern');

      const questions = res.body.data.questions;
      expect(questions).toHaveLength(25);

      // Verify questions are distributed across available technologies
      const slugs = new Set(questions.map((q: any) => q.technologySlug));
      expect(slugs.size).toBeGreaterThanOrEqual(4);
    });

    it('Mixed exam distributes questions evenly across available subjects with randomized order', async () => {
      const res = await request(app).get('/api/exams/mern');
      expect(res.status).toBe(200);

      const questions = res.body.data.questions;
      expect(questions).toHaveLength(25);

      // Verify they are not strictly grouped by technology in sequential blocks
      const first6Slugs = questions.slice(0, 6).map((q: any) => q.technologySlug);
      const allSame = first6Slugs.every((s: string) => s === first6Slugs[0]);
      expect(allSame).toBe(false); // Shuffled order
    });
  });

  describe('Randomization & Option Integrity Unit Verification', () => {
    it('8. Correct answer is preserved after option randomization', () => {
      const originalMcq = {
        enabled: true,
        options: [
          { id: 'A', text: 'Option Alpha' },
          { id: 'B', text: 'Option Beta (Target Correct)' },
          { id: 'C', text: 'Option Gamma' },
          { id: 'D', text: 'Option Delta' },
        ],
        correctOption: 'B',
      };

      for (let i = 0; i < 20; i++) {
        const { options, correctOption } = shuffleQuestionOptions(originalMcq);
        expect(options).toHaveLength(4);

        // Find the option corresponding to the assigned correctOption ID
        const resolvedOption = options.find((o) => o.id === correctOption);
        expect(resolvedOption).toBeDefined();
        // The text MUST always be 'Option Beta (Target Correct)'
        expect(resolvedOption!.text).toBe('Option Beta (Target Correct)');
      }
    });
  });

  describe('Performance Category Calculation Unit Verification', () => {
    it('Categorizes performance scores correctly without pass/fail labeling', () => {
      expect(calculatePerformanceCategory(100)).toBe('Excellent');
      expect(calculatePerformanceCategory(80)).toBe('Excellent');
      expect(calculatePerformanceCategory(79)).toBe('Good');
      expect(calculatePerformanceCategory(60)).toBe('Good');
      expect(calculatePerformanceCategory(59)).toBe('Needs Practice');
      expect(calculatePerformanceCategory(40)).toBe('Needs Practice');
      expect(calculatePerformanceCategory(39)).toBe('Needs Revision');
      expect(calculatePerformanceCategory(0)).toBe('Needs Revision');
    });
  });

  describe('Exam Submission & Scoring (POST /api/exams/attempts)', () => {
    it('9 & 11. Guest user can submit exam, calculates score (20/25 = 80%) without authentication', async () => {
      const examRes = await request(app).get('/api/exams/subject/react');
      const questions = examRes.body.data.questions;

      // Prepare submission: answer 20 correctly, 3 wrong, 2 unanswered
      const answers = questions.map((q: any, idx: number) => {
        if (idx < 20) {
          return { questionId: q._id, selectedOption: q.correctOption, correctOption: q.correctOption, isCorrect: true };
        } else if (idx < 23) {
          // wrong answer
          const wrongOpt = q.options.find((o: any) => o.id !== q.correctOption)?.id || 'A';
          return { questionId: q._id, selectedOption: wrongOpt, correctOption: q.correctOption, isCorrect: false };
        } else {
          // 10. Unanswered question
          return { questionId: q._id, selectedOption: '', correctOption: q.correctOption, isCorrect: false };
        }
      });

      const correctCount = 20;
      const totalQuestions = 25;
      const percentage = Math.round((correctCount / totalQuestions) * 100); // 80%

      const submitPayload = {
        examType: 'subject',
        technologySlug: 'react',
        technologyName: 'React',
        score: correctCount,
        totalQuestions,
        correctAnswers: correctCount,
        wrongAnswers: 5,
        percentage,
        performanceCategory: calculatePerformanceCategory(percentage),
        questions: answers,
      };

      // Guest submission (no auth header)
      const res = await request(app)
        .post('/api/exams/attempts')
        .send(submitPayload);

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.score).toBe(20);
      expect(res.body.data.percentage).toBe(80);
      expect(res.body.data.performanceCategory).toBe('Excellent');
      expect(res.body.data.isGuest).toBe(true);
    });

    it('12. Authenticated user submission persists attempt to database and can be retrieved', async () => {
      const submitPayload = {
        examType: 'mern',
        technologyName: 'MERN Stack',
        score: 22,
        totalQuestions: 25,
        correctAnswers: 22,
        wrongAnswers: 3,
        percentage: 88,
        performanceCategory: 'Excellent',
        questions: [
          { questionId: reactTechId, selectedOption: 'A', correctOption: 'A', isCorrect: true },
        ],
      };

      const res = await request(app)
        .post('/api/exams/attempts')
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send(submitPayload);

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.userId).toBe(authContext.regularUser._id.toString());

      // Check GET /api/exams/attempts
      const historyRes = await request(app)
        .get('/api/exams/attempts')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(historyRes.status).toBe(200);
      expect(historyRes.body.success).toBe(true);
      expect(historyRes.body.data).toHaveLength(1);
      expect(historyRes.body.data[0].score).toBe(22);
      expect(historyRes.body.data[0].percentage).toBe(88);
    });

    it('GET /api/exams/attempts rejects unauthenticated requests with 401', async () => {
      const res = await request(app).get('/api/exams/attempts');
      expect(res.status).toBe(401);
    });
  });

  describe('Practice Mode vs Exam Mode Specifications', () => {
    it('1. GET subject exam in practice mode (default or explicit) exposes correctOption and explanation', async () => {
      const resDefault = await request(app).get('/api/exams/subject/react');
      expect(resDefault.status).toBe(200);
      expect(resDefault.body.data.mode).toBe('practice');
      expect(resDefault.body.data.questions[0].correctOption).toBeDefined();
      expect(resDefault.body.data.questions[0].explanation).toBeDefined();

      const resExplicit = await request(app).get('/api/exams/subject/react?mode=practice');
      expect(resExplicit.status).toBe(200);
      expect(resExplicit.body.data.mode).toBe('practice');
      expect(resExplicit.body.data.questions[0].correctOption).toBeDefined();
      expect(resExplicit.body.data.questions[0].explanation).toBeDefined();
    });

    it('2. GET subject exam in exam mode NEVER exposes correctOption or explanation before submission', async () => {
      const res = await request(app).get('/api/exams/subject/react?mode=exam');
      expect(res.status).toBe(200);
      expect(res.body.data.mode).toBe('exam');

      for (const q of res.body.data.questions) {
        expect(q.correctOption).toBeUndefined();
        expect(q.explanation).toBeUndefined();
        expect(q.options).toHaveLength(4);
      }
    });

    it('3. GET MERN exam in exam mode NEVER exposes correctOption or explanation', async () => {
      const res = await request(app).get('/api/exams/mern?mode=exam');
      expect(res.status).toBe(200);
      expect(res.body.data.mode).toBe('exam');

      for (const q of res.body.data.questions) {
        expect(q.correctOption).toBeUndefined();
        expect(q.explanation).toBeUndefined();
      }
    });

    it('4. Rejects invalid mode parameter in GET request with 400', async () => {
      const res1 = await request(app).get('/api/exams/subject/react?mode=invalid_mode');
      expect(res1.status).toBe(400);
      expect(res1.body.success).toBe(false);

      const res2 = await request(app).get('/api/exams/mern?mode=hack_mode');
      expect(res2.status).toBe(400);
      expect(res2.body.success).toBe(false);
    });

    it('5. POST /api/exams/attempts accepts practice mode and persists mode', async () => {
      const res = await request(app)
        .post('/api/exams/attempts')
        .send({
          examType: 'subject',
          mode: 'practice',
          technologySlug: 'react',
          questions: [],
        });

      expect(res.status).toBe(201);
      expect(res.body.data.mode).toBe('practice');
    });

    it('6. POST /api/exams/attempts accepts exam mode and persists mode', async () => {
      const res = await request(app)
        .post('/api/exams/attempts')
        .send({
          examType: 'subject',
          mode: 'exam',
          technologySlug: 'react',
          questions: [],
        });

      expect(res.status).toBe(201);
      expect(res.body.data.mode).toBe('exam');
    });

    it('7. POST /api/exams/attempts rejects invalid mode with 400', async () => {
      const res = await request(app)
        .post('/api/exams/attempts')
        .send({
          examType: 'subject',
          mode: 'super_speed_mode',
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
    });

    it('8. Server evaluates Exam Mode submission authoritatively using DB questions and returns reviewItems with explanations', async () => {
      // 1. Fetch exam mode payload (no answers exposed)
      const examRes = await request(app).get('/api/exams/subject/react?mode=exam');
      const questions = examRes.body.data.questions;
      expect(questions[0].correctOption).toBeUndefined();

      // Submit answers with the shuffled options given to client
      // Let's answer 10 questions with option 'A' and others with empty
      const answersPayload = questions.map((q: any, idx: number) => ({
        questionId: q._id,
        selectedOption: idx < 10 ? 'A' : '',
        options: q.options,
      }));

      const submitRes = await request(app)
        .post('/api/exams/attempts')
        .send({
          examType: 'subject',
          mode: 'exam',
          technologySlug: 'react',
          questions: answersPayload,
        });

      expect(submitRes.status).toBe(201);
      expect(submitRes.body.success).toBe(true);
      const data = submitRes.body.data;
      expect(data.mode).toBe('exam');
      expect(typeof data.score).toBe('number');
      expect(data.totalQuestions).toBe(25);
      expect(data.correctAnswers + data.wrongAnswers).toBe(25);
      expect(data.percentage).toBe(Math.round((data.score / 25) * 100));

      // After submission, review items are returned WITH correctOption and explanation
      expect(data.reviewItems).toHaveLength(25);
      expect(data.reviewItems[0].correctOption).toBeDefined();
      expect(['A', 'B', 'C', 'D']).toContain(data.reviewItems[0].correctOption);
      expect(data.reviewItems[0].explanation).toBeDefined();
    });
  });

  describe('Exam Difficulty Selection (Task 24)', () => {
    it('1. GET /api/exams/subject/:slug accepts easy, medium, hard, mixed and defaults to mixed', async () => {
      // Default (mixed)
      const resMixed = await request(app).get('/api/exams/subject/react');
      expect(resMixed.status).toBe(200);
      expect(resMixed.body.data.difficulty).toBe('mixed');
      expect(resMixed.body.data.questions).toHaveLength(25);

      // Unique questions check
      const mixedIds = new Set(resMixed.body.data.questions.map((q: any) => q._id));
      expect(mixedIds.size).toBe(25);

      // Explicit hard
      const resHard = await request(app).get('/api/exams/subject/react?difficulty=hard');
      expect(resHard.status).toBe(200);
      expect(resHard.body.data.difficulty).toBe('hard');
      expect(resHard.body.data.questions).toHaveLength(25);

      // Explicit medium
      const resMed = await request(app).get('/api/exams/subject/react?difficulty=medium');
      expect(resMed.status).toBe(200);
      expect(resMed.body.data.difficulty).toBe('medium');
      expect(resMed.body.data.questions).toHaveLength(25);

      // Explicit easy
      const resEasy = await request(app).get('/api/exams/subject/react?difficulty=easy');
      expect(resEasy.status).toBe(200);
      expect(resEasy.body.data.difficulty).toBe('easy');
      expect(resEasy.body.data.questions).toHaveLength(25);
    });

    it('2. Fallback behavior: When target difficulty has < 25 questions, all available are used and remaining slots filled without duplicates', async () => {
      // In setup, React has 30 questions, of which 10 are hard (30 / 3 = 10)
      const res = await request(app).get('/api/exams/subject/react?difficulty=hard');
      expect(res.status).toBe(200);
      const questions = res.body.data.questions;
      expect(questions).toHaveLength(25);

      // No duplicates
      const ids = new Set(questions.map((q: any) => q._id));
      expect(ids.size).toBe(25);

      // All 10 hard questions should be present
      const hardCount = questions.filter((q: any) => q.difficulty === 'hard').length;
      expect(hardCount).toBe(10);
      // Remaining 15 filled from other difficulties
      expect(questions.length - hardCount).toBe(15);
    });

    it('3. GET /api/exams/mern supports difficulty filtering across all subjects', async () => {
      for (const diff of ['easy', 'medium', 'hard', 'mixed']) {
        const res = await request(app).get(`/api/exams/mern?difficulty=${diff}`);
        expect(res.status).toBe(200);
        expect(res.body.data.difficulty).toBe(diff);
        expect(res.body.data.questions).toHaveLength(25);

        // No duplicates
        const ids = new Set(res.body.data.questions.map((q: any) => q._id));
        expect(ids.size).toBe(25);

        // Multiple technologies represented
        const techSlugs = new Set(res.body.data.questions.map((q: any) => q.technologySlug));
        expect(techSlugs.size).toBeGreaterThanOrEqual(3);
      }
    });

    it('4. Rejects invalid difficulty parameter in GET endpoints with 400', async () => {
      const resSubject = await request(app).get('/api/exams/subject/react?difficulty=impossible');
      expect(resSubject.status).toBe(400);
      expect(resSubject.body.success).toBe(false);
      expect(resSubject.body.message).toContain('Invalid difficulty');

      const resMern = await request(app).get('/api/exams/mern?difficulty=extreme');
      expect(resMern.status).toBe(400);
      expect(resMern.body.success).toBe(false);
      expect(resMern.body.message).toContain('Invalid difficulty');
    });

    it('5. POST /api/exams/attempts persists difficulty and validates difficulty values', async () => {
      // Valid difficulty
      const resValid = await request(app)
        .post('/api/exams/attempts')
        .send({
          examType: 'subject',
          mode: 'exam',
          difficulty: 'hard',
          technologySlug: 'react',
          questions: [],
        });
      expect(resValid.status).toBe(201);
      expect(resValid.body.data.difficulty).toBe('hard');

      // Default difficulty when omitted
      const resDefault = await request(app)
        .post('/api/exams/attempts')
        .send({
          examType: 'mern',
          mode: 'practice',
          questions: [],
        });
      expect(resDefault.status).toBe(201);
      expect(resDefault.body.data.difficulty).toBe('mixed');

      // Invalid difficulty rejected with 400
      const resInvalid = await request(app)
        .post('/api/exams/attempts')
        .send({
          examType: 'subject',
          difficulty: 'nightmare',
          questions: [],
        });
      expect(resInvalid.status).toBe(400);
      expect(resInvalid.body.success).toBe(false);
    });

    it('6. Practice Mode and Exam Mode integrity is preserved with difficulty parameter', async () => {
      // Practice + Hard -> correctOption and explanation exposed
      const resPractice = await request(app).get('/api/exams/subject/react?mode=practice&difficulty=hard');
      expect(resPractice.status).toBe(200);
      expect(resPractice.body.data.difficulty).toBe('hard');
      expect(resPractice.body.data.mode).toBe('practice');
      expect(resPractice.body.data.questions[0].correctOption).toBeDefined();
      expect(resPractice.body.data.questions[0].explanation).toBeDefined();

      // Exam + Hard -> correctOption and explanation strictly omitted
      const resExam = await request(app).get('/api/exams/subject/react?mode=exam&difficulty=hard');
      expect(resExam.status).toBe(200);
      expect(resExam.body.data.difficulty).toBe('hard');
      expect(resExam.body.data.mode).toBe('exam');
      for (const q of resExam.body.data.questions) {
        expect(q.correctOption).toBeUndefined();
        expect(q.explanation).toBeUndefined();
      }
    });
  });

  describe('Exam Performance Analysis & Weak-Area Insights (Task 25)', () => {
    it('1. POST /api/exams/attempts calculates overall performance analysis (correct, incorrect, unanswered)', async () => {
      // Fetch 25 questions from react exam
      const examRes = await request(app).get('/api/exams/subject/react?mode=practice');
      const questions = examRes.body.data.questions;
      expect(questions).toHaveLength(25);

      // Answer 15 correctly, 5 incorrectly, leave 5 unanswered
      const answers = questions.map((q: any, idx: number) => {
        if (idx < 15) {
          return { questionId: q._id, selectedOption: q.correctOption, options: q.options };
        } else if (idx < 20) {
          // wrong option
          const wrongOpt = q.options.find((o: any) => o.id !== q.correctOption)?.id || 'D';
          return { questionId: q._id, selectedOption: wrongOpt, options: q.options };
        } else {
          // unanswered
          return { questionId: q._id, selectedOption: '', options: q.options };
        }
      });

      const submitRes = await request(app)
        .post('/api/exams/attempts')
        .send({
          examType: 'subject',
          technologySlug: 'react',
          technologyName: 'React',
          totalQuestions: 25,
          questions: answers,
        });

      expect(submitRes.status).toBe(201);
      const analysis = submitRes.body.data.analysis;
      expect(analysis).toBeDefined();
      expect(analysis.overall).toBeDefined();
      expect(analysis.overall.totalQuestions).toBe(25);
      expect(analysis.overall.correct).toBe(15);
      expect(analysis.overall.incorrect).toBe(5);
      expect(analysis.overall.unanswered).toBe(5);
      expect(analysis.overall.percentage).toBe(60);
      expect(analysis.overall.performanceCategory).toBe('Good');
    });

    it('2. Calculates difficulty performance breakdown and omits difficulties with 0 questions', async () => {
      // Fetch a medium-only exam
      const examRes = await request(app).get('/api/exams/subject/react?difficulty=medium&mode=practice');
      const questions = examRes.body.data.questions;

      const answers = questions.map((q: any, idx: number) => ({
        questionId: q._id,
        selectedOption: idx % 2 === 0 ? q.correctOption : 'D',
        options: q.options,
      }));

      const submitRes = await request(app)
        .post('/api/exams/attempts')
        .send({
          examType: 'subject',
          technologySlug: 'react',
          difficulty: 'medium',
          totalQuestions: 25,
          questions: answers,
        });

      expect(submitRes.status).toBe(201);
      const analysis = submitRes.body.data.analysis;
      expect(analysis.difficulty).toBeDefined();
      expect(Array.isArray(analysis.difficulty)).toBe(true);
      expect(analysis.difficulty.length).toBeGreaterThanOrEqual(1);

      // Each difficulty item has correct, total, percentage
      for (const d of analysis.difficulty) {
        expect(['easy', 'medium', 'hard']).toContain(d.difficulty);
        expect(typeof d.correct).toBe('number');
        expect(typeof d.total).toBe('number');
        expect(d.total).toBeGreaterThan(0);
        expect(d.percentage).toBe(Math.round((d.correct / d.total) * 100));
      }
    });

    it('3. Calculates technology-wise performance across All-Subjects exam', async () => {
      const examRes = await request(app).get('/api/exams/mern?mode=practice');
      const questions = examRes.body.data.questions;

      const answers = questions.map((q: any, idx: number) => ({
        questionId: q._id,
        selectedOption: idx % 3 === 0 ? q.correctOption : 'D',
        options: q.options,
      }));

      const submitRes = await request(app)
        .post('/api/exams/attempts')
        .send({
          examType: 'mern',
          totalQuestions: 25,
          questions: answers,
        });

      expect(submitRes.status).toBe(201);
      const analysis = submitRes.body.data.analysis;
      expect(analysis.technologies).toBeDefined();
      expect(Array.isArray(analysis.technologies)).toBe(true);
      expect(analysis.technologies.length).toBeGreaterThanOrEqual(3);

      for (const t of analysis.technologies) {
        expect(typeof t.technologyName).toBe('string');
        expect(typeof t.correct).toBe('number');
        expect(typeof t.total).toBe('number');
        expect(t.total).toBeGreaterThan(0);
        expect(t.percentage).toBe(Math.round((t.correct / t.total) * 100));
      }
    });

    it('4. Identifies and ranks weak topics (accuracy < 60% or > 50% incorrect, max 3)', async () => {
      const examRes = await request(app).get('/api/exams/subject/react?mode=practice');
      const questions = examRes.body.data.questions;

      // Make all questions wrong to generate weak topics
      const answers = questions.map((q: any) => ({
        questionId: q._id,
        selectedOption: 'D', // deliberately wrong
        options: q.options,
      }));

      const submitRes = await request(app)
        .post('/api/exams/attempts')
        .send({
          examType: 'subject',
          technologySlug: 'react',
          totalQuestions: 25,
          questions: answers,
        });

      expect(submitRes.status).toBe(201);
      const analysis = submitRes.body.data.analysis;
      expect(analysis.weakTopics).toBeDefined();
      expect(Array.isArray(analysis.weakTopics)).toBe(true);
      // Max 3 weak areas
      expect(analysis.weakTopics.length).toBeLessThanOrEqual(3);
      expect(analysis.weakTopics.length).toBeGreaterThan(0);

      // Weak topics must have accuracy < 60 or > 50% incorrect
      for (const w of analysis.weakTopics) {
        expect(w.accuracy).toBeLessThan(60);
        expect(typeof w.topicName).toBe('string');
        expect(typeof w.technologyName).toBe('string');
      }

      // Recommendation should be 'review_weak'
      expect(analysis.recommendation).toBeDefined();
      expect(analysis.recommendation.type).toBe('review_weak');
      expect(analysis.recommendation.buttonText).toBe('Review Weak Areas');
    });

    it('5. Handles edge case: Perfect score generates 0 weak topics and take_another recommendation', async () => {
      const examRes = await request(app).get('/api/exams/subject/react?mode=practice');
      const questions = examRes.body.data.questions;

      // 100% correct
      const answers = questions.map((q: any) => ({
        questionId: q._id,
        selectedOption: q.correctOption,
        options: q.options,
      }));

      const submitRes = await request(app)
        .post('/api/exams/attempts')
        .send({
          examType: 'subject',
          technologySlug: 'react',
          totalQuestions: 25,
          questions: answers,
        });

      expect(submitRes.status).toBe(201);
      const analysis = submitRes.body.data.analysis;
      expect(analysis.overall.correct).toBe(25);
      expect(analysis.overall.percentage).toBe(100);
      expect(analysis.weakTopics).toHaveLength(0);
      expect(analysis.recommendation.type).toBe('take_another');
      expect(analysis.recommendation.buttonText).toBe('Take Another Test');
    });

    it('6. Authenticated user attempt persists analysis in database and can be retrieved', async () => {
      const examRes = await request(app).get('/api/exams/subject/react?mode=practice');
      const questions = examRes.body.data.questions;

      const answers = questions.map((q: any, idx: number) => {
        const wrongOpt = q.options.find((o: any) => o.id !== q.correctOption)?.id || 'A';
        return {
          questionId: q._id,
          selectedOption: idx < 20 ? q.correctOption : wrongOpt,
          options: q.options,
        };
      });

      const submitRes = await request(app)
        .post('/api/exams/attempts')
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({
          userId: authContext.regularUser._id.toString(),
          examType: 'subject',
          technologySlug: 'react',
          totalQuestions: 25,
          questions: answers,
        });

      expect(submitRes.status).toBe(201);
      expect(submitRes.body.data.analysis).toBeDefined();
      expect(submitRes.body.data.analysis.overall.correct).toBe(20);

      // Check retrieved attempt from GET /api/exams/attempts
      const getRes = await request(app)
        .get('/api/exams/attempts')
        .set('Authorization', `Bearer ${authContext.userToken}`);

      expect(getRes.status).toBe(200);
      const attempts = getRes.body.data;
      expect(attempts.length).toBeGreaterThanOrEqual(1);
      const latest = attempts[0];
      expect(latest.analysis).toBeDefined();
      expect(latest.analysis.overall.correct).toBe(20);
    });
  });
});
