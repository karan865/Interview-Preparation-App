import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { Technology } from '../models/Technology';
import { Question } from '../models/Question';
import { sendSuccess } from '../utils/apiResponse';
import { ApiError } from '../utils/apiError';

export class TechnologyController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { category } = req.query;
      const filter: any = { isActive: true };
      if (category) {
        filter.category = category;
      }

      const technologies = await Technology.find(filter).sort({ order: 1, name: 1 }).lean();

      // Aggregate published question count per technology
      const counts = await Question.aggregate([
        { $match: { status: 'published' } },
        { $group: { _id: '$technologyId', count: { $sum: 1 } } },
      ]);
      const countMap = new Map<string, number>();
      counts.forEach((c: any) => {
        if (c._id) {
          countMap.set(c._id.toString(), c.count);
        }
      });

      const enriched = technologies.map((tech: any) => ({
        ...tech,
        questionCount: countMap.get(tech._id.toString()) || 0,
      }));

      return sendSuccess({ res, data: enriched });
    } catch (error) {
      next(error);
    }
  }

  static async getByIdOrSlug(req: Request, res: Response, next: NextFunction) {
    try {
      const { idOrSlug } = req.params;
      let technology: any = null;

      if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
        technology = await Technology.findById(idOrSlug);
      } else {
        technology = await Technology.findOne({ slug: idOrSlug.toLowerCase() });
      }

      if (!technology) {
        throw ApiError.notFound('Technology not found');
      }

      return sendSuccess({ res, data: technology });
    } catch (error) {
      next(error);
    }
  }
}
