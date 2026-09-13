import { Router } from 'express';
import { AdminController } from '../controllers/admin.controller';
import { requireAuth } from '../middleware/auth.middleware';
import { requireAdmin } from '../middleware/admin.middleware';
import { validate } from '../middleware/validate';
import {
  createTechnologySchema,
  updateTechnologySchema,
  createTopicSchema,
  updateTopicSchema,
  createPreparationLevelSchema,
  updatePreparationLevelSchema,
  bulkImportQuestionsSchema,
  adminQueryQuestionsSchema,
} from '../validators/admin.validator';
import { createQuestionSchema, updateQuestionSchema } from '../validators/question.validator';

const router = Router();

// Apply auth and admin check to all admin routes
router.use(requireAuth, requireAdmin);

// Technology management
router.post('/technologies', validate(createTechnologySchema), AdminController.createTechnology);
router.put('/technologies/:id', validate(updateTechnologySchema), AdminController.updateTechnology);
router.delete('/technologies/:id', AdminController.deleteTechnology);

// Topic management
router.post('/topics', validate(createTopicSchema), AdminController.createTopic);
router.put('/topics/:id', validate(updateTopicSchema), AdminController.updateTopic);
router.delete('/topics/:id', AdminController.deleteTopic);

// Preparation Level management
router.post('/preparation-levels', validate(createPreparationLevelSchema), AdminController.createPreparationLevel);
router.put('/preparation-levels/:id', validate(updatePreparationLevelSchema), AdminController.updatePreparationLevel);

// Question Query & Review
router.get('/questions', validate(adminQueryQuestionsSchema), AdminController.getQuestions);

// Question CRUD & Status Lifecyle
router.post('/questions', validate(createQuestionSchema), AdminController.createQuestion);
router.put('/questions/:id', validate(updateQuestionSchema), AdminController.updateQuestion);
router.delete('/questions/:id', AdminController.deleteQuestion);
router.patch('/questions/:id/publish', AdminController.publishQuestion);
router.patch('/questions/:id/archive', AdminController.archiveQuestion);

// Bulk Question Import & Dry-Run Preview
router.post('/questions/import/preview', validate(bulkImportQuestionsSchema), AdminController.previewImport);
router.post('/questions/import', validate(bulkImportQuestionsSchema), AdminController.bulkImport);

// Content Statistics & Gap Detection
router.get('/content/stats', AdminController.getContentStats);
router.get('/content/gaps', AdminController.getContentGaps);

export default router;
