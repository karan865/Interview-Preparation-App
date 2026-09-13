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
import { Technology } from '../../src/models/Technology';
import { Topic } from '../../src/models/Topic';

describe('Bulk Import Pipeline API (/api/admin/questions/import)', () => {
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

    // Pre-create an existing question in DB to test duplicate detection
    await createSampleQuestion({
      question: 'Existing React Hook Question in Database',
      title: 'Existing React Hook Question in Database',
      technologyId: taxonomyContext.reactTech._id,
      topicId: taxonomyContext.hooksTopic._id,
      status: 'published',
    });
  });

  describe('POST /api/admin/questions/import/preview', () => {
    it('should validate valid questions, detect new tech and topics, without modifying database', async () => {
      const payload = {
        questions: [
          {
            technology: 'React',
            topic: 'Hooks',
            question: 'What is useCallback in React?',
            answer: 'useCallback returns a memoized version of the callback.',
            difficulty: 'medium',
            preparationLevels: ['Intermediate'],
            tags: ['react', 'hooks'],
          },
          {
            technology: 'Rust', // New technology!
            topic: 'Ownership', // New topic!
            question: 'What is borrow checker in Rust?',
            answer: 'The borrow checker ensures references do not outlive the data they point to.',
            difficulty: 'hard',
          },
        ],
      };

      const res = await request(app)
        .post('/api/admin/questions/import/preview')
        .set('Authorization', `Bearer ${authContext.adminToken}`)
        .send(payload);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);

      const preview = res.body.data;
      expect(preview.total).toBe(2);
      expect(preview.valid).toBe(2);
      expect(preview.errors).toBe(0);
      expect(preview.duplicates).toBe(0);
      expect(preview.newTechnologies).toContain('Rust');
      expect(preview.newTopics).toContain('Rust > Ownership');

      // CRITICAL: Verify that preview DOES NOT modify MongoDB!
      const totalInDb = await Question.countDocuments();
      expect(totalInDb).toBe(1); // Only the pre-existing question

      const rustInDb = await Technology.findOne({ slug: 'rust' });
      expect(rustInDb).toBeNull();
    });

    it('should report field errors for missing required fields and invalid nested formats', async () => {
      const payload = {
        questions: [
          {
            // Missing question text
            technology: 'React',
            topic: 'Hooks',
            answer: 'Some answer',
          },
          {
            // Missing technology
            topic: 'Hooks',
            question: 'Valid question text here',
            answer: 'Some answer',
          },
          {
            // Missing topic
            technology: 'React',
            question: 'Valid question text here 2',
            answer: 'Some answer',
          },
          {
            // Missing answer
            technology: 'React',
            topic: 'Hooks',
            question: 'Valid question text here 3',
          },
          {
            // Invalid difficulty and invalid nested codeExamples
            technology: 'React',
            topic: 'Hooks',
            question: 'Valid question text here 4',
            answer: 'Valid answer',
            difficulty: 'extreme', // Invalid
            codeExamples: [{ language: 'javascript' }], // Missing required code snippet
          },
          {
            // Invalid nested steps (missing required step title)
            technology: 'React',
            topic: 'Hooks',
            question: 'Valid question text here 5',
            answer: 'Valid answer',
            steps: [{ stepNumber: 1 }], // Missing title
          },
          {
            // Invalid comparisons (not an array)
            technology: 'React',
            topic: 'Hooks',
            question: 'Valid question text here 6',
            answer: 'Valid answer',
            comparisons: 'not an array',
          },
        ],
      };

      const res = await request(app)
        .post('/api/admin/questions/import/preview')
        .set('Authorization', `Bearer ${authContext.adminToken}`)
        .send(payload);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);

      const preview = res.body.data;
      expect(preview.valid).toBe(0);
      expect(preview.errors).toBeGreaterThanOrEqual(7);

      const errorFields = preview.errorDetails.map((e: any) => e.field);
      expect(errorFields).toContain('question');
      expect(errorFields).toContain('technology');
      expect(errorFields).toContain('topic');
      expect(errorFields).toContain('answer');
      expect(errorFields).toContain('difficulty');
      expect(errorFields).toContain('codeExamples[0].code');
      expect(errorFields).toContain('steps[0].title');
      expect(errorFields).toContain('comparisons');
    });

    it('should detect duplicates already in database AND duplicates inside the same batch', async () => {
      const payload = {
        questions: [
          // 1. Duplicate of existing question in DB
          {
            technology: 'React',
            topic: 'Hooks',
            question: 'Existing React Hook Question in Database',
            answer: 'Some answer',
          },
          // 2. New valid question
          {
            technology: 'React',
            topic: 'Hooks',
            question: 'Brand new batch question',
            answer: 'Some answer',
          },
          // 3. Exact duplicate of item 2 in the same batch
          {
            technology: 'React',
            topic: 'Hooks',
            question: 'Brand new batch question',
            answer: 'Some duplicate answer',
          },
        ],
      };

      const res = await request(app)
        .post('/api/admin/questions/import/preview')
        .set('Authorization', `Bearer ${authContext.adminToken}`)
        .send(payload);

      expect(res.status).toBe(200);
      const preview = res.body.data;
      expect(preview.total).toBe(3);
      expect(preview.valid).toBe(1);
      expect(preview.duplicates).toBe(2);
    });
  });

  describe('POST /api/admin/questions/import', () => {
    it('should resiliently import valid questions, skip duplicates, report errors without breaking batch', async () => {
      const payload = {
        questions: [
          // Item 0: Valid question under existing React > Hooks
          {
            technology: 'React',
            topic: 'Hooks',
            question: 'What is useRef in React?',
            answer: 'useRef returns a mutable ref object.',
            difficulty: 'easy',
            tags: ['react', 'hooks'],
          },
          // Item 1: Invalid item (missing answer)
          {
            technology: 'React',
            topic: 'Hooks',
            question: 'Question with missing answer',
          },
          // Item 2: Duplicate of pre-existing DB question
          {
            technology: 'React',
            topic: 'Hooks',
            question: 'Existing React Hook Question in Database',
            answer: 'Duplicate answer',
          },
          // Item 3: Valid question introducing a new technology & topic
          {
            technology: 'Docker',
            topic: 'Containers',
            question: 'What is the difference between an image and a container?',
            answer: 'An image is an immutable template; a container is a running instance of an image.',
            difficulty: 'medium',
            preparationLevels: ['Foundation'],
          },
          // Item 4: Duplicate of Item 0 within the same batch
          {
            technology: 'React',
            topic: 'Hooks',
            question: 'What is useRef in React?',
            answer: 'Duplicate within batch',
          },
        ],
      };

      const res = await request(app)
        .post('/api/admin/questions/import')
        .set('Authorization', `Bearer ${authContext.adminToken}`)
        .send(payload);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);

      const result = res.body.data;
      expect(result.inserted).toBe(2); // Item 0 and Item 3
      expect(result.skipped).toBe(2); // Item 2 and Item 4
      expect(result.errors).toHaveLength(1); // Item 1
      expect(result.errors[0].index).toBe(1);
      expect(result.errors[0].field).toBe('answer');

      // Verify that the new technology 'Docker' was automatically created
      const dockerTech = await Technology.findOne({ slug: 'docker' });
      expect(dockerTech).not.toBeNull();
      expect(dockerTech?.name).toBe('Docker');

      // Verify that the new topic 'Containers' was created under Docker
      const containerTopic = await Topic.findOne({ technologyId: dockerTech?._id, slug: 'containers' });
      expect(containerTopic).not.toBeNull();
      expect(containerTopic?.name).toBe('Containers');

      // Verify database total: 1 original + 2 newly inserted = 3
      const totalQuestionsInDb = await Question.countDocuments();
      expect(totalQuestionsInDb).toBe(3);
    });

    it('should reject unauthenticated import request with 401', async () => {
      const res = await request(app)
        .post('/api/admin/questions/import')
        .send({ questions: [] });

      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
    });

    it('should reject normal user import request with 403', async () => {
      const res = await request(app)
        .post('/api/admin/questions/import')
        .set('Authorization', `Bearer ${authContext.userToken}`)
        .send({ questions: [] });

      expect(res.status).toBe(403);
      expect(res.body.success).toBe(false);
    });
  });
});
