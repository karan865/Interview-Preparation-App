import mongoose, { Types } from 'mongoose';
import { UserQuestionProgress, ProgressStatus } from '../models/UserQuestionProgress';
import { Question } from '../models/Question';
import { ApiError } from '../utils/apiError';
import { getPaginationParams, buildPaginatedData } from '../utils/pagination';

export class ProgressService {
  static async updateStatus(userId: string, questionId: string, status: ProgressStatus) {
    if (!mongoose.Types.ObjectId.isValid(questionId)) {
      throw ApiError.badRequest('Invalid question ID format');
    }

    const question = await Question.findById(questionId);
    if (!question) {
      throw ApiError.notFound('Question not found');
    }

    const progress = await UserQuestionProgress.findOneAndUpdate(
      {
        userId: new Types.ObjectId(userId),
        questionId: new Types.ObjectId(questionId),
      },
      {
        $set: {
          status,
          lastReviewedAt: new Date(),
        },
        $inc: {
          reviewCount: 1,
        },
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    return progress;
  }

  static async toggleSave(userId: string, questionId: string, isSavedState?: boolean) {
    if (!mongoose.Types.ObjectId.isValid(questionId)) {
      throw ApiError.badRequest('Invalid question ID format');
    }

    const question = await Question.findById(questionId);
    if (!question) {
      throw ApiError.notFound('Question not found');
    }

    let shouldSave = isSavedState;
    if (shouldSave === undefined) {
      const existing = await UserQuestionProgress.findOne({
        userId: new Types.ObjectId(userId),
        questionId: new Types.ObjectId(questionId),
      });
      shouldSave = existing ? !existing.isSaved : true;
    }

    const progress = await UserQuestionProgress.findOneAndUpdate(
      {
        userId: new Types.ObjectId(userId),
        questionId: new Types.ObjectId(questionId),
      },
      {
        $set: { isSaved: shouldSave },
      },
      {
        new: true,
        upsert: true,
        setDefaultsOnInsert: true,
      }
    );

    return progress;
  }

  static async resetProgress(userId: string, questionId: string) {
    if (!mongoose.Types.ObjectId.isValid(questionId)) {
      throw ApiError.badRequest('Invalid question ID format');
    }

    const deleted = await UserQuestionProgress.findOneAndDelete({
      userId: new Types.ObjectId(userId),
      questionId: new Types.ObjectId(questionId),
    });

    if (!deleted) {
      return { message: 'No existing progress to reset for this question' };
    }

    return { message: 'Progress reset successfully for this question' };
  }

  static async getSavedQuestions(
    userId: string,
    queryParams: { page?: string; limit?: string }
  ): Promise<any> {
    const { page, limit, skip } = getPaginationParams(queryParams);

    const savedRecords = await UserQuestionProgress.find({
      userId: new Types.ObjectId(userId),
      isSaved: true,
    })
      .sort({ updatedAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await UserQuestionProgress.countDocuments({
      userId: new Types.ObjectId(userId),
      isSaved: true,
    });

    const questionIds = savedRecords.map((r) => r.questionId);
    const questions = await Question.find({
      _id: { $in: questionIds },
      status: 'published',
    })
      .populate('technologyId', 'name slug category icon')
      .populate('topicId', 'name slug')
      .populate('preparationLevels', 'name slug order')
      .lean();

    const progressMap = new Map(savedRecords.map((r) => [r.questionId.toString(), r]));

    const enriched = questions.map((q) => {
      const p = progressMap.get(q._id.toString());
      return {
        ...q,
        userProgress: {
          status: p?.status || null,
          isSaved: true,
          reviewCount: p?.reviewCount || 0,
          lastReviewedAt: p?.lastReviewedAt || null,
        },
      };
    });

    return buildPaginatedData('questions', enriched, total, page, limit);
  }
}
