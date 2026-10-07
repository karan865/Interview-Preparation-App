import { Router } from 'express';
import { ProgressController } from '../controllers/progress.controller';
import { requireAuth } from '../middleware/auth.middleware';
import { validate } from '../middleware/validate';
import { updateProgressSchema, questionIdParamSchema, toggleSaveSchema } from '../validators/progress.validator';

const router = Router();

router.get('/saved', requireAuth, ProgressController.getSavedQuestions);
router.post('/:questionId', requireAuth, validate(updateProgressSchema), ProgressController.updateProgress);
router.post('/:questionId/save', requireAuth, validate(toggleSaveSchema), ProgressController.toggleSave);
router.delete('/:questionId', requireAuth, validate(questionIdParamSchema), ProgressController.resetProgress);

export default router;
