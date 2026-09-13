import { z } from 'zod';

export const createTechnologySchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Technology name is required'),
    slug: z.string().optional(),
    description: z.string().optional(),
    category: z.enum(['frontend', 'backend', 'database', 'devops', 'other']).default('other'),
    icon: z.string().optional(),
    order: z.number().optional().default(0),
    isActive: z.boolean().optional().default(true),
  }),
});

export const updateTechnologySchema = z.object({
  body: createTechnologySchema.shape.body.partial(),
});

export const createTopicSchema = z.object({
  body: z.object({
    technologyId: z.string().min(1, 'Technology ID is required'),
    name: z.string().min(1, 'Topic name is required'),
    slug: z.string().optional(),
    description: z.string().optional(),
    order: z.number().optional().default(0),
    isActive: z.boolean().optional().default(true),
  }),
});

export const updateTopicSchema = z.object({
  body: createTopicSchema.shape.body.partial(),
});

export const createPreparationLevelSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Preparation level name is required'),
    slug: z.string().optional(),
    description: z.string().optional(),
    order: z.number().optional().default(0),
  }),
});

export const updatePreparationLevelSchema = z.object({
  body: createPreparationLevelSchema.shape.body.partial(),
});

export const bulkImportQuestionsSchema = z.object({
  body: z.object({
    questions: z.array(z.record(z.any())).min(1, 'At least one question is required for import'),
  }),
});

export const adminQueryQuestionsSchema = z.object({
  query: z.object({
    status: z.enum(['draft', 'published', 'archived', 'all']).optional(),
    technology: z.string().optional(),
    topic: z.string().optional(),
    level: z.string().optional(),
    difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
    questionType: z.string().optional(),
    source: z.string().optional(),
    search: z.string().optional(),
    page: z.string().optional(),
    limit: z.string().optional(),
  }),
});
