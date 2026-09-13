import { Request, Response } from 'express';
import { ExamService } from '../services/exam.service';

export class ExamController {
  /**
   * GET /api/exams/subjects
   * List all active technologies with their available MCQ counts
   */
  static async getSubjects(req: Request, res: Response): Promise<void> {
    try {
      const subjects = await ExamService.getAvailableSubjects();
      res.status(200).json({
        success: true,
        data: subjects,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to fetch exam subjects',
      });
    }
  }

  /**
   * GET /api/exams/subject/:technologySlug
   * Generate a 25-question subject exam
   */
  static async getSubjectExam(req: Request, res: Response): Promise<void> {
    try {
      const { technologySlug } = req.params;
      const rawMode = req.query.mode as string | undefined;
      if (rawMode && !['practice', 'exam'].includes(rawMode)) {
        res.status(400).json({
          success: false,
          message: "Invalid mode. Must be 'practice' or 'exam'.",
        });
        return;
      }
      const rawDifficulty = req.query.difficulty as string | undefined;
      if (rawDifficulty && !['easy', 'medium', 'hard', 'mixed'].includes(rawDifficulty)) {
        res.status(400).json({
          success: false,
          message: "Invalid difficulty. Must be 'easy', 'medium', 'hard', or 'mixed'.",
        });
        return;
      }
      const mode = rawMode === 'exam' ? 'exam' : 'practice';
      const difficulty = (rawDifficulty as any) || 'mixed';
      const exam = await ExamService.generateSubjectExam(technologySlug, mode, difficulty);

      if (!exam.isAvailable) {
        res.status(400).json({
          success: false,
          message: exam.error,
          data: exam,
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: exam,
      });
    } catch (error: any) {
      const status = error.message && error.message.includes('not found') ? 404 : 500;
      res.status(status).json({
        success: false,
        message: error.message || 'Failed to generate subject exam',
      });
    }
  }

  /**
   * GET /api/exams/mern
   * Generate a 25-question mixed MERN stack exam
   */
  static async getMernExam(req: Request, res: Response): Promise<void> {
    try {
      const rawMode = req.query.mode as string | undefined;
      if (rawMode && !['practice', 'exam'].includes(rawMode)) {
        res.status(400).json({
          success: false,
          message: "Invalid mode. Must be 'practice' or 'exam'.",
        });
        return;
      }
      const rawDifficulty = req.query.difficulty as string | undefined;
      if (rawDifficulty && !['easy', 'medium', 'hard', 'mixed'].includes(rawDifficulty)) {
        res.status(400).json({
          success: false,
          message: "Invalid difficulty. Must be 'easy', 'medium', 'hard', or 'mixed'.",
        });
        return;
      }
      const mode = rawMode === 'exam' ? 'exam' : 'practice';
      const difficulty = (rawDifficulty as any) || 'mixed';
      const exam = await ExamService.generateMernExam(mode, difficulty);

      if (!exam.isAvailable) {
        res.status(400).json({
          success: false,
          message: exam.error,
          data: exam,
        });
        return;
      }

      res.status(200).json({
        success: true,
        data: exam,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to generate MERN stack exam',
      });
    }
  }

  /**
   * POST /api/exams/attempts
   * Record a completed exam attempt (works for authenticated and guest users)
   */
  static async recordAttempt(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).user?._id;
      const attemptData = req.body;

      if (!attemptData || !attemptData.examType) {
        res.status(400).json({
          success: false,
          message: 'Invalid attempt data. examType is required.',
        });
        return;
      }

      if (attemptData.mode && !['practice', 'exam'].includes(attemptData.mode)) {
        res.status(400).json({
          success: false,
          message: "Invalid mode. Must be 'practice' or 'exam'.",
        });
        return;
      }

      if (attemptData.difficulty && !['easy', 'medium', 'hard', 'mixed'].includes(attemptData.difficulty)) {
        res.status(400).json({
          success: false,
          message: "Invalid difficulty. Must be 'easy', 'medium', 'hard', or 'mixed'.",
        });
        return;
      }

      const result = await ExamService.recordAttempt({
        ...attemptData,
        userId: userId ? userId.toString() : undefined,
      });

      res.status(201).json({
        success: true,
        data: result,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to save exam attempt',
      });
    }
  }

  /**
   * GET /api/exams/attempts
   * Get past attempts for authenticated user
   */
  static async getUserAttempts(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).user?._id;
      if (!userId) {
        res.status(401).json({
          success: false,
          message: 'Authentication required to view attempt history',
        });
        return;
      }

      const attempts = await ExamService.getUserAttempts(userId.toString());
      res.status(200).json({
        success: true,
        data: attempts,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: error.message || 'Failed to fetch exam attempts',
      });
    }
  }
}
