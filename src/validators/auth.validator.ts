import { z } from 'zod';

export const registerSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Name must be at least 2 characters long').max(100),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    role: z.enum(['user', 'admin']).optional(),
    selectedTechnologies: z.array(z.string()).optional(),
    selectedPreparationLevel: z.string().optional(),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
  }),
});

export const updatePreferencesSchema = z.object({
  body: z.object({
    selectedTechnologies: z.array(z.string()).optional(),
    selectedPreparationLevel: z.string().optional(),
  }),
});
