import { Request, Response, NextFunction } from 'express';
import { QuestionService } from '../services/question.service';
import { ApiError } from '../utils/apiError';

export class SearchController {
  static async search(req: Request, res: Response, next: NextFunction) {
    try {
      const q = req.query.q as string;
      if (!q || !q.trim()) {
        throw ApiError.badRequest("Search query parameter 'q' is required");
      }

      const userId = req.user ? req.user._id.toString() : undefined;
      const isAdmin = req.user?.role === 'admin';

      const result = await QuestionService.getQuestions(
        {
          search: q,
          page: req.query.page as string,
          limit: req.query.limit as string,
          technology: req.query.technology as string,
          topic: req.query.topic as string,
          level: req.query.level as string,
          difficulty: req.query.difficulty as string,
        },
        userId,
        isAdmin
      );

      return res.status(200).json({
        success: true,
        query: q,
        ...result,
      });
    } catch (error) {
      next(error);
    }
  }
}
