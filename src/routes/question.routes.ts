import { Router } from 'express';
import { QuestionController } from '../controllers/question.controller';
import { DailyChallengeController } from '../controllers/dailyChallenge.controller';
import { optionalAuth, requireAuth } from '../middleware/auth.middleware';
import { validate } from '../middleware/validate';
import { queryQuestionsSchema } from '../validators/question.validator';
import { questionIdParamSchema } from '../validators/progress.validator';

const router = Router();

router.get('/', optionalAuth, validate(queryQuestionsSchema), QuestionController.getQuestions);
router.get('/saved', requireAuth, QuestionController.getSavedQuestions);

// Daily Challenge public endpoints (must precede /:id)
router.get('/daily-challenge/retry-test', optionalAuth, DailyChallengeController.getRetryTest);
router.get('/daily-challenge', optionalAuth, DailyChallengeController.getDailyChallenge);

router.get('/:id', optionalAuth, QuestionController.getQuestionById);

router.post('/:questionId/save', requireAuth, validate(questionIdParamSchema), QuestionController.saveQuestion);
router.delete('/:questionId/save', requireAuth, validate(questionIdParamSchema), QuestionController.unsaveQuestion);

export default router;
