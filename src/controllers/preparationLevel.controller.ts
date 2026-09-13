import { Request, Response, NextFunction } from 'express';
import { PreparationLevel } from '../models/PreparationLevel';
import { Question } from '../models/Question';
import { sendSuccess } from '../utils/apiResponse';

export class PreparationLevelController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const levels = await PreparationLevel.find().sort({ order: 1 }).lean();

      // Aggregate published question count per preparation level
      const counts = await Question.aggregate([
        { $match: { status: 'published' } },
        { $unwind: '$preparationLevels' },
        { $group: { _id: '$preparationLevels', count: { $sum: 1 } } },
      ]);

      const countMap = new Map<string, number>();
      counts.forEach((c: any) => {
        if (c._id) {
          countMap.set(c._id.toString(), c.count);
        }
      });

      const enriched = levels.map((lvl: any) => ({
        ...lvl,
        questionCount: countMap.get(lvl._id.toString()) || 0,
      }));

      return sendSuccess({ res, data: enriched });
    } catch (error) {
      next(error);
    }
  }
}
