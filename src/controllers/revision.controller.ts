import { Request, Response, NextFunction } from 'express';
import { RevisionService } from '../services/revision.service';
import { sendSuccess } from '../utils/apiResponse';

export class RevisionController {
  static async getWeakQuestions(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!._id.toString();
      const result = await RevisionService.getWeakQuestions(userId, req.query);
      return res.status(200).json({
        success: true,
        ...result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getQuickRevision(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!._id.toString();
      const result = await RevisionService.getQuickRevisionQuestions(userId, req.query);
      return sendSuccess({ res, data: result });
    } catch (error) {
      next(error);
    }
  }

  static async getInterviewPrep(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user!._id.toString();
      const result = await RevisionService.getInterviewPrepQuestions(userId, req.query);
      return sendSuccess({ res, data: result });
    } catch (error) {
      next(error);
    }
  }
}
