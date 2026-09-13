import mongoose, { Types } from 'mongoose';
import { Question, IQuestion } from '../models/Question';
import { Technology } from '../models/Technology';
import { Topic } from '../models/Topic';
import { PreparationLevel } from '../models/PreparationLevel';
import { UserQuestionProgress } from '../models/UserQuestionProgress';
import { ApiError } from '../utils/apiError';
import { getPaginationParams, buildPaginatedData } from '../utils/pagination';

export interface QuestionFilterParams {
  technology?: string;
  topic?: string;
  level?: string;
  difficulty?: string;
  questionType?: string;
  isImportant?: string | boolean;
  status?: string;
  source?: string;
  search?: string;
  page?: string | number;
  limit?: string | number;
}

export class QuestionService {
  static async resolveIdOrSlug(model: any, idOrSlug: string, field = 'slug') {
    if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
      const doc = await model.findById(idOrSlug);
      if (doc) return doc._id;
    }
    const doc = await model.findOne({ [field]: idOrSlug.toLowerCase() });
    return doc ? doc._id : null;
  }

  static async getQuestions(
    params: QuestionFilterParams,
    userId?: string,
    isAdmin = false
  ): Promise<any> {
    const { page, limit, skip } = getPaginationParams({
      page: params.page,
      limit: params.limit,
    });

    const query: any = {};

    // Only admins can see drafts/archived by default; users only see published
    if (isAdmin && params.status) {
      if (params.status !== 'all') {
        query.status = params.status;
      }
    } else if (!isAdmin) {
      query.status = 'published';
    }

    // Source filter (e.g. personal-notes, ai-generated)
    if (params.source) {
      query.source = params.source;
    }

    // Technology filter by ID or slug
    if (params.technology) {
      const techId = await this.resolveIdOrSlug(Technology, params.technology);
      if (techId) {
        query.technologyId = techId;
      } else {
        return buildPaginatedData('questions', [], 0, page, limit);
      }
    }

    // Topic filter by ID or slug
    if (params.topic) {
      let topicId: any = null;
      if (mongoose.Types.ObjectId.isValid(params.topic)) {
        topicId = params.topic;
      } else {
        const topicQuery: any = { slug: params.topic.toLowerCase() };
        if (query.technologyId) {
          topicQuery.technologyId = query.technologyId;
        }
        const topic = await Topic.findOne(topicQuery);
        if (topic) topicId = topic._id;
      }

      if (topicId) {
        query.topicId = topicId;
      } else {
        return buildPaginatedData('questions', [], 0, page, limit);
      }
    }

    // Preparation level filter
    const levelParam = params.level || (params as any).preparationLevel;
    if (levelParam && levelParam !== 'all') {
      const levelSlug = levelParam.toLowerCase();
      let targetSlugs = [levelSlug];
      if (levelSlug === 'junior') {
        targetSlugs = ['junior', 'foundation'];
      } else if (levelSlug === 'advanced') {
        targetSlugs = ['advanced', 'expert'];
      }

      const orConditions: any[] = [{ slug: { $in: targetSlugs } }];
      if (mongoose.Types.ObjectId.isValid(levelParam)) {
        orConditions.push({ _id: levelParam });
      }

      const levelDocs = await PreparationLevel.find({ $or: orConditions });
      if (levelDocs.length > 0) {
        query.preparationLevels = { $in: levelDocs.map((d) => d._id) };
      } else {
        return buildPaginatedData('questions', [], 0, page, limit);
      }
    }

    // Difficulty
    if (params.difficulty) {
      query.difficulty = params.difficulty;
    }

    // Question Type (supports canonical full categories, short names, or aliases)
    if (params.questionType) {
      const clean = params.questionType.trim();
      const escaped = clean.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      query.questionType = {
        $regex: new RegExp(`(^|\\b|/\\s*)${escaped}(\\b|\\s*/|$)`, 'i'),
      };
    }

    // Is Important
    if (params.isImportant !== undefined) {
      query.isImportant = String(params.isImportant) === 'true';
    }

    // Text search query
    if (params.search && params.search.trim() !== '') {
      query.$text = { $search: params.search.trim() };
    }

    const [questions, total] = await Promise.all([
      Question.find(query)
        .populate('technologyId', 'name slug category icon')
        .populate('topicId', 'name slug')
        .populate('preparationLevels', 'name slug order')
        .sort(params.search ? { score: { $meta: 'textScore' } } : { isImportant: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Question.countDocuments(query),
    ]);

    // If a user is logged in, attach their progress state
    let enrichedQuestions = questions;
    if (userId && questions.length > 0) {
      const questionIds = questions.map((q) => q._id);
      const progresses = await UserQuestionProgress.find({
        userId: new Types.ObjectId(userId),
        questionId: { $in: questionIds },
      }).lean();

      const progressMap = new Map<string, any>();
      progresses.forEach((p) => {
        progressMap.set(p.questionId.toString(), {
          status: p.status,
          isSaved: p.isSaved,
          reviewCount: p.reviewCount,
          lastReviewedAt: p.lastReviewedAt,
        });
      });

      enrichedQuestions = questions.map((q) => ({
        ...q,
        userProgress: progressMap.get(q._id.toString()) || {
          status: null,
          isSaved: false,
          reviewCount: 0,
          lastReviewedAt: null,
        },
      }));
    }

    return buildPaginatedData('questions', enrichedQuestions, total, page, limit);
  }

  static async getQuestionById(
    id: string,
    userId?: string,
    isAdmin = false
  ): Promise<any> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw ApiError.badRequest('Invalid question ID format');
    }

    const question = await Question.findById(id)
      .populate('technologyId', 'name slug category icon')
      .populate('topicId', 'name slug description')
      .populate('preparationLevels', 'name slug order description')
      .populate('relatedQuestions', 'question title difficulty questionType isImportant')
      .lean();

    if (!question) {
      throw ApiError.notFound('Question not found');
    }

    if (!isAdmin && question.status !== 'published') {
      throw ApiError.notFound('Question not found');
    }

    if (userId) {
      const progress = await UserQuestionProgress.findOne({
        userId: new Types.ObjectId(userId),
        questionId: question._id,
      }).lean();

      return {
        ...question,
        userProgress: progress
          ? {
              status: progress.status,
              isSaved: progress.isSaved,
              reviewCount: progress.reviewCount,
              lastReviewedAt: progress.lastReviewedAt,
            }
          : {
              status: null,
              isSaved: false,
              reviewCount: 0,
              lastReviewedAt: null,
            },
      };
    }

    return question;
  }

  static async createQuestion(questionData: any) {
    const question = await Question.create(questionData);
    return question.populate([
      { path: 'technologyId', select: 'name slug category' },
      { path: 'topicId', select: 'name slug' },
      { path: 'preparationLevels', select: 'name slug order' },
    ]);
  }

  static async updateQuestion(id: string, updates: any) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw ApiError.badRequest('Invalid question ID format');
    }

    const question = await Question.findByIdAndUpdate(id, { $set: updates }, { new: true, runValidators: true })
      .populate('technologyId', 'name slug category')
      .populate('topicId', 'name slug')
      .populate('preparationLevels', 'name slug order');

    if (!question) {
      throw ApiError.notFound('Question not found');
    }

    return question;
  }

  static async deleteQuestion(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw ApiError.badRequest('Invalid question ID format');
    }

    const question = await Question.findByIdAndDelete(id);
    if (!question) {
      throw ApiError.notFound('Question not found');
    }

    // Also clean up associated user progress
    await UserQuestionProgress.deleteMany({ questionId: question._id });

    return { message: 'Question and associated progress deleted successfully' };
  }

  static async setQuestionStatus(id: string, status: 'draft' | 'published' | 'archived') {
    return this.updateQuestion(id, { status });
  }
}
