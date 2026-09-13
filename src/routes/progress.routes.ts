import { Router } from 'express';
import { ProgressController } from '../controllers/progress.controller';
import { requireAuth } from '../middleware/auth.middleware';
import { validate } from '../middleware/validate';
import { updateProgressSchema, questionIdParamSchema } from '../validators/progress.validator';

const router = Router();

router.post('/:questionId', requireAuth, validate(updateProgressSchema), ProgressController.updateProgress);
router.delete('/:questionId', requireAuth, validate(questionIdParamSchema), ProgressController.resetProgress);

export default router;
