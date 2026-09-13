import { Router } from 'express';
import { ExamController } from '../controllers/exam.controller';
import { optionalAuth, requireAuth } from '../middleware/auth.middleware';

const router = Router();

// List available subjects and their MCQ question counts
router.get('/subjects', optionalAuth, ExamController.getSubjects);

// Generate 25-question subject exam
router.get('/subject/:technologySlug', optionalAuth, ExamController.getSubjectExam);

// Generate 25-question mixed MERN exam
router.get('/mern', optionalAuth, ExamController.getMernExam);

// Record completed attempt (guest-compatible with optionalAuth)
router.post('/attempts', optionalAuth, ExamController.recordAttempt);

// Get attempt history (requires auth)
router.get('/attempts', requireAuth, ExamController.getUserAttempts);

export default router;
