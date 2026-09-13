import { Router } from 'express';
import { RevisionController } from '../controllers/revision.controller';
import { requireAuth } from '../middleware/auth.middleware';
import { validate } from '../middleware/validate';
import { revisionFilterSchema, interviewPrepFilterSchema } from '../validators/progress.validator';

const router = Router();

router.get('/weak', requireAuth, validate(revisionFilterSchema), RevisionController.getWeakQuestions);
router.get('/quick', requireAuth, validate(revisionFilterSchema), RevisionController.getQuickRevision);
router.get(
  '/interview-prep',
  requireAuth,
  validate(interviewPrepFilterSchema),
  RevisionController.getInterviewPrep
);

export default router;
