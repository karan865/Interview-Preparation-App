import { Request, Response, NextFunction } from 'express';
import { ProgressService } from '../services/progress.service';
import { sendSuccess } from '../utils/apiResponse';

export class ProgressController {
  static async updateProgress(req: Request, res: Response, next: NextFunction) {
    try {
      const { questionId } = req.params;
      const { status } = req.body;
      const userId = req.user!._id.toString();

      const progress = await ProgressService.updateStatus(userId, questionId, status);
      return sendSuccess({
        res,
        data: {
          questionId: progress.questionId,
          status: progress.status,
          reviewCount: progress.reviewCount,
          lastReviewedAt: progress.lastReviewedAt,
        },
      });
    } catch (error) {
      next(error);
    }
  }

  static async resetProgress(req: Request, res: Response, next: NextFunction) {
    try {
      const { questionId } = req.params;
      const userId = req.user!._id.toString();

      const result = await ProgressService.resetProgress(userId, questionId);
      return sendSuccess({ res, data: result });
    } catch (error) {
      next(error);
    }
  }
}
