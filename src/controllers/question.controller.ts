import { Request, Response, NextFunction } from 'express';
import { QuestionService } from '../services/question.service';
import { ProgressService } from '../services/progress.service';
import { sendSuccess } from '../utils/apiResponse';

export class QuestionController {
  static async getQuestions(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user ? req.user._id.toString() : undefined;
      const isAdmin = req.user?.role === 'admin';

      const result = await QuestionService.getQuestions(req.query, userId, isAdmin);
      return res.status(200).json({
        success: true,
        ...result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getQuestionById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const userId = req.user ? req.user._id.toString() : undefined;
      const isAdmin = req.user?.role === 'admin';

      const question = await QuestionService.getQuestionById(id, userId, isAdmin);
      return sendSuccess({ res, data: question });
    } catch (error) {
      next(error);
    }
  }

  static async saveQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const { questionId } = req.params;
      const userId = req.user!._id.toString();

      const progress = await ProgressService.toggleSave(userId, questionId, true);
      return sendSuccess({
        res,
        data: {
          questionId: progress.questionId,
          isSaved: progress.isSaved,
          message: 'Question saved successfully',
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async unsaveQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const { questionId } = req.params;
      const userId = req.user!._id.toString();

      const progress = await ProgressService.toggleSave(userId, questionId, false);
      return sendSuccess({
        res,
        data: {
          questionId: progress.questionId,
          isSaved: progress.isSaved,
          message: 'Question removed from saved',
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async getSavedQuestions(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!._id.toString();
      const result = await ProgressService.getSavedQuestions(userId, req.query);
      return res.status(200).json({
        success: true,
        ...result,
      });
    } catch (error) {
      next(error);
    }
  }
}
