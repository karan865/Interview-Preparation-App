import { Request, Response, NextFunction } from 'express';
import { Technology } from '../models/Technology';
import { Topic } from '../models/Topic';
import { PreparationLevel } from '../models/PreparationLevel';
import { QuestionService } from '../services/question.service';
import { ImportService } from '../services/import.service';
import { ContentStatsService } from '../services/contentStats.service';
import { sendSuccess } from '../utils/apiResponse';
import { ApiError } from '../utils/apiError';
import { slugify } from '../utils/slugify';

export class AdminController {
  // --- Technology ---
  static async createTechnology(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, slug, description, category, icon, order, isActive } = req.body;
      const finalSlug = slug ? slugify(slug) : slugify(name);

      const existing = await Technology.findOne({ slug: finalSlug });
      if (existing) {
        throw ApiError.conflict('A technology with this name or slug already exists');
      }

      const tech = await Technology.create({
        name,
        slug: finalSlug,
        description,
        category,
        icon,
        order,
        isActive,
      });

      return sendSuccess({ res, statusCode: 201, data: tech });
    } catch (error) {
      next(error);
    }
  }

  static async updateTechnology(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updates = { ...req.body };
      if (updates.name && !updates.slug) {
        updates.slug = slugify(updates.name);
      }

      const tech = await Technology.findByIdAndUpdate(id, { $set: updates }, { new: true });
      if (!tech) {
        throw ApiError.notFound('Technology not found');
      }

      return sendSuccess({ res, data: tech });
    } catch (error) {
      next(error);
    }
  }

  static async deleteTechnology(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const tech = await Technology.findByIdAndDelete(id);
      if (!tech) {
        throw ApiError.notFound('Technology not found');
      }
      return sendSuccess({ res, data: { message: 'Technology deleted successfully' } });
    } catch (error) {
      next(error);
    }
  }

  // --- Topic ---
  static async createTopic(req: Request, res: Response, next: NextFunction) {
    try {
      const { technologyId, name, slug, description, order, isActive } = req.body;
      const finalSlug = slug ? slugify(slug) : slugify(name);

      const existing = await Topic.findOne({ technologyId, slug: finalSlug });
      if (existing) {
        throw ApiError.conflict('A topic with this slug already exists under this technology');
      }

      const topic = await Topic.create({
        technologyId,
        name,
        slug: finalSlug,
        description,
        order,
        isActive,
      });

      return sendSuccess({ res, statusCode: 201, data: topic });
    } catch (error) {
      next(error);
    }
  }

  static async updateTopic(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updates = { ...req.body };
      if (updates.name && !updates.slug) {
        updates.slug = slugify(updates.name);
      }

      const topic = await Topic.findByIdAndUpdate(id, { $set: updates }, { new: true });
      if (!topic) {
        throw ApiError.notFound('Topic not found');
      }

      return sendSuccess({ res, data: topic });
    } catch (error) {
      next(error);
    }
  }

  static async deleteTopic(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const topic = await Topic.findByIdAndDelete(id);
      if (!topic) {
        throw ApiError.notFound('Topic not found');
      }
      return sendSuccess({ res, data: { message: 'Topic deleted successfully' } });
    } catch (error) {
      next(error);
    }
  }

  // --- Preparation Level ---
  static async createPreparationLevel(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, slug, description, order } = req.body;
      const finalSlug = slug ? slugify(slug) : slugify(name);

      const existing = await PreparationLevel.findOne({ slug: finalSlug });
      if (existing) {
        throw ApiError.conflict('A preparation level with this slug already exists');
      }

      const level = await PreparationLevel.create({
        name,
        slug: finalSlug,
        description,
        order,
      });

      return sendSuccess({ res, statusCode: 201, data: level });
    } catch (error) {
      next(error);
    }
  }

  static async updatePreparationLevel(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const updates = { ...req.body };
      if (updates.name && !updates.slug) {
        updates.slug = slugify(updates.name);
      }

      const level = await PreparationLevel.findByIdAndUpdate(id, { $set: updates }, { new: true });
      if (!level) {
        throw ApiError.notFound('Preparation level not found');
      }

      return sendSuccess({ res, data: level });
    } catch (error) {
      next(error);
    }
  }

  // --- Question CRUD ---
  static async createQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const question = await QuestionService.createQuestion(req.body);
      return sendSuccess({ res, statusCode: 201, data: question });
    } catch (error) {
      next(error);
    }
  }

  static async updateQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const question = await QuestionService.updateQuestion(id, req.body);
      return sendSuccess({ res, data: question });
    } catch (error) {
      next(error);
    }
  }

  static async deleteQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const result = await QuestionService.deleteQuestion(id);
      return sendSuccess({ res, data: result });
    } catch (error) {
      next(error);
    }
  }

  static async publishQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const question = await QuestionService.setQuestionStatus(id, 'published');
      return sendSuccess({ res, data: question });
    } catch (error) {
      next(error);
    }
  }

  static async archiveQuestion(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const question = await QuestionService.setQuestionStatus(id, 'archived');
      return sendSuccess({ res, data: question });
    } catch (error) {
      next(error);
    }
  }

  // --- Question Query & Review ---
  static async getQuestions(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await QuestionService.getQuestions(req.query, undefined, true);
      return res.status(200).json({
        success: true,
        ...result,
      });
    } catch (error) {
      next(error);
    }
  }

  // --- Bulk Import & Preview ---
  static async previewImport(req: Request, res: Response, next: NextFunction) {
    try {
      const { questions } = req.body;
      const result = await ImportService.previewImport(questions || []);
      return sendSuccess({
        res,
        statusCode: 200,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  static async bulkImport(req: Request, res: Response, next: NextFunction) {
    try {
      const { questions } = req.body;
      const result = await ImportService.importQuestions(questions || []);
      return sendSuccess({
        res,
        statusCode: 200,
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }

  // --- Content Statistics & Gaps ---
  static async getContentStats(req: Request, res: Response, next: NextFunction) {
    try {
      const stats = await ContentStatsService.getContentStats();
      return sendSuccess({
        res,
        data: stats,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getContentGaps(req: Request, res: Response, next: NextFunction) {
    try {
      const gaps = await ContentStatsService.getContentGaps();
      return sendSuccess({
        res,
        data: gaps,
      });
    } catch (error) {
      next(error);
    }
  }
}
