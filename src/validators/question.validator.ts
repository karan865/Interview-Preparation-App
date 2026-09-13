import { z } from 'zod';

const codeExampleSchema = z.object({
  language: z.string().default('javascript'),
  title: z.string().optional(),
  code: z.string().min(1, 'Code snippet is required'),
  explanation: z.string().optional(),
});

const stepSchema = z.object({
  stepNumber: z.number().optional(),
  title: z.string().min(1, 'Step title is required'),
  description: z.string().optional(),
});

export const createQuestionSchema = z.object({
  body: z.object({
    question: z.string().min(3, 'Question must be at least 3 characters long'),
    title: z.string().optional(),
    technologyId: z.string().min(1, 'Technology ID is required'),
    topicId: z.string().min(1, 'Topic ID is required'),
    preparationLevels: z.array(z.string()).default([]),
    difficulty: z.enum(['easy', 'medium', 'hard']).default('medium'),
    questionType: z.string().default('Conceptual'),
    answer: z.string().min(1, 'Answer is required'),
    explanation: z.string().optional(),
    analogy: z.string().optional(),
    importantPoints: z.array(z.string()).optional().default([]),
    codeExamples: z.array(codeExampleSchema).optional().default([]),
    comparisons: z.array(z.record(z.any())).optional().default([]),
    examples: z.array(z.string()).optional().default([]),
    steps: z.array(stepSchema).optional().default([]),
    interviewAnswer: z.string().optional(),
    interviewTips: z.array(z.string()).optional().default([]),
    commonMistakes: z.array(z.string()).optional().default([]),
    followUpQuestions: z.array(z.string()).optional().default([]),
    relatedQuestions: z.array(z.string()).optional().default([]),
    tags: z.array(z.string()).optional().default([]),
    isImportant: z.boolean().optional().default(false),
    source: z
      .enum(['personal-notes', 'manually-added', 'web-research', 'ai-generated', 'imported', 'curated'])
      .optional()
      .default('ai-generated'),
    sourceReference: z.string().optional(),
    status: z.enum(['draft', 'published', 'archived']).optional().default('published'),
  }),
});

export const updateQuestionSchema = z.object({
  body: createQuestionSchema.shape.body.partial(),
});

export const queryQuestionsSchema = z.object({
  query: z.object({
    technology: z.string().optional(),
    topic: z.string().optional(),
    level: z.string().optional(),
    difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
    questionType: z.string().optional(),
    isImportant: z.string().optional(),
    status: z.enum(['draft', 'published', 'archived']).optional(),
    search: z.string().optional(),
    page: z.string().optional(),
    limit: z.string().optional(),
  }),
});
