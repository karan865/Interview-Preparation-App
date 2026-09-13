import { z } from 'zod';

export const updateProgressSchema = z.object({
  body: z.object({
    status: z.enum(['known', 'review', 'weak']),
  }),
  params: z.object({
    questionId: z.string().min(1, 'Question ID parameter is required'),
  }),
});

export const questionIdParamSchema = z.object({
  params: z.object({
    questionId: z.string().min(1, 'Question ID parameter is required'),
  }),
});

export const revisionFilterSchema = z.object({
  query: z.object({
    technology: z.string().optional(),
    topic: z.string().optional(),
    preparationLevel: z.string().optional(),
    limit: z.string().optional(),
    page: z.string().optional(),
  }),
});

export const interviewPrepFilterSchema = z.object({
  query: z.object({
    technologies: z.union([z.string(), z.array(z.string())]).optional(),
    preparationLevel: z.string().optional(),
    limit: z.string().optional(),
  }),
});
