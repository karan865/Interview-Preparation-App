import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { Topic } from '../models/Topic';
import { Technology } from '../models/Technology';
import { Question } from '../models/Question';
import { sendSuccess } from '../utils/apiResponse';
import { ApiError } from '../utils/apiError';

export class TopicController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { technology } = req.query;
      const filter: any = { isActive: true };

      if (technology) {
        if (mongoose.Types.ObjectId.isValid(String(technology))) {
          filter.technologyId = technology;
        } else {
          const techDoc = await Technology.findOne({ slug: String(technology).toLowerCase() });
          if (techDoc) {
            filter.technologyId = techDoc._id;
          } else {
            return sendSuccess({ res, data: [] });
          }
        }
      }

      const topics = await Topic.find(filter)
        .populate('technologyId', 'name slug category')
        .sort({ order: 1, name: 1 })
        .lean();

      // Aggregate published question count per topic
      const counts = await Question.aggregate([
        { $match: { status: 'published' } },
        { $group: { _id: '$topicId', count: { $sum: 1 } } },
      ]);
      const countMap = new Map<string, number>();
      counts.forEach((c: any) => {
        if (c._id) {
          countMap.set(c._id.toString(), c.count);
        }
      });

      const enriched = topics.map((topic: any) => ({
        ...topic,
        questionCount: countMap.get(topic._id.toString()) || 0,
      }));

      return sendSuccess({ res, data: enriched });
    } catch (error) {
      next(error);
    }
  }

  static async getByIdOrSlug(req: Request, res: Response, next: NextFunction) {
    try {
      const { idOrSlug } = req.params;
      let topic: any = null;

      if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
        topic = await Topic.findById(idOrSlug).populate('technologyId', 'name slug category');
      } else {
        topic = await Topic.findOne({ slug: idOrSlug.toLowerCase() }).populate(
          'technologyId',
          'name slug category'
        );
      }

      if (!topic) {
        throw ApiError.notFound('Topic not found');
      }

      return sendSuccess({ res, data: topic });
    } catch (error) {
      next(error);
    }
  }
}
