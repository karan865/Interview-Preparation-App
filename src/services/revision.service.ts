import mongoose, { Types } from 'mongoose';
import { Question } from '../models/Question';
import { UserQuestionProgress } from '../models/UserQuestionProgress';
import { Technology } from '../models/Technology';
import { Topic } from '../models/Topic';
import { PreparationLevel } from '../models/PreparationLevel';
import { getPaginationParams, buildPaginatedData } from '../utils/pagination';

export class RevisionService {
  private static async resolveFilterIds(params: {
    technology?: string;
    topic?: string;
    preparationLevel?: string;
  }) {
    let technologyId: Types.ObjectId | null = null;
    let topicId: Types.ObjectId | null = null;
    let preparationLevelId: Types.ObjectId | null = null;

    if (params.technology) {
      if (mongoose.Types.ObjectId.isValid(params.technology)) {
        technologyId = new Types.ObjectId(params.technology);
      } else {
        const tech = await Technology.findOne({ slug: params.technology.toLowerCase() });
        if (tech) technologyId = tech._id as Types.ObjectId;
      }
    }

    if (params.topic) {
      if (mongoose.Types.ObjectId.isValid(params.topic)) {
        topicId = new Types.ObjectId(params.topic);
      } else {
        const query: any = { slug: params.topic.toLowerCase() };
        if (technologyId) query.technologyId = technologyId;
        const topic = await Topic.findOne(query);
        if (topic) topicId = topic._id as Types.ObjectId;
      }
    }

    if (params.preparationLevel) {
      if (mongoose.Types.ObjectId.isValid(params.preparationLevel)) {
        preparationLevelId = new Types.ObjectId(params.preparationLevel);
      } else {
        const lvl = await PreparationLevel.findOne({ slug: params.preparationLevel.toLowerCase() });
        if (lvl) preparationLevelId = lvl._id as Types.ObjectId;
      }
    }

    return { technologyId, topicId, preparationLevelId };
  }

  /**
   * Returns questions the user marked as 'weak'
   */
  static async getWeakQuestions(
    userId: string,
    filters: {
      technology?: string;
      topic?: string;
      preparationLevel?: string;
      page?: string | number;
      limit?: string | number;
    }
  ): Promise<any> {
    const { page, limit, skip } = getPaginationParams(filters);
    const { technologyId, topicId, preparationLevelId } = await this.resolveFilterIds(filters);

    // Find question IDs that user marked as weak
    const weakProgresses = await UserQuestionProgress.find({
      userId: new Types.ObjectId(userId),
      status: 'weak',
    }).lean();

    const weakQuestionIds = weakProgresses.map((p) => p.questionId);

    if (weakQuestionIds.length === 0) {
      return buildPaginatedData('questions', [], 0, page, limit);
    }

    const questionQuery: any = {
      _id: { $in: weakQuestionIds },
      status: 'published',
    };

    if (technologyId) questionQuery.technologyId = technologyId;
    if (topicId) questionQuery.topicId = topicId;
    if (preparationLevelId) questionQuery.preparationLevels = preparationLevelId;

    const [questions, total] = await Promise.all([
      Question.find(questionQuery)
        .populate('technologyId', 'name slug category icon')
        .populate('topicId', 'name slug')
        .populate('preparationLevels', 'name slug order')
        .sort({ updatedAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Question.countDocuments(questionQuery),
    ]);

    const progressMap = new Map(weakProgresses.map((p) => [p.questionId.toString(), p]));

    const enriched = questions.map((q) => {
      const p = progressMap.get(q._id.toString());
      return {
        ...q,
        userProgress: {
          status: 'weak',
          isSaved: p?.isSaved || false,
          reviewCount: p?.reviewCount || 0,
          lastReviewedAt: p?.lastReviewedAt || null,
        },
      };
    });

    return buildPaginatedData('questions', enriched, total, page, limit);
  }

  /**
   * Deterministic quick revision mixing weak, review, important, and unpracticed questions
   */
  static async getQuickRevisionQuestions(
    userId: string,
    params: {
      technology?: string;
      preparationLevel?: string;
      limit?: string | number;
    }
  ): Promise<any> {
    const limit = Math.min(Math.max(1, parseInt(String(params.limit || 10), 10) || 10), 50);
    const { technologyId, preparationLevelId } = await this.resolveFilterIds(params);

    const baseQuestionFilter: any = { status: 'published' };
    if (technologyId) baseQuestionFilter.technologyId = technologyId;
    if (preparationLevelId) baseQuestionFilter.preparationLevels = preparationLevelId;

    // Get user's progress records
    const userProgress = await UserQuestionProgress.find({
      userId: new Types.ObjectId(userId),
    }).lean();

    const weakIds: Types.ObjectId[] = [];
    const reviewIds: Types.ObjectId[] = [];
    const knownIds: Types.ObjectId[] = [];

    userProgress.forEach((p) => {
      if (p.status === 'weak') weakIds.push(p.questionId);
      else if (p.status === 'review') reviewIds.push(p.questionId);
      else if (p.status === 'known') knownIds.push(p.questionId);
    });

    const practicedIds = userProgress.map((p) => p.questionId);

    const targetWeakCount = Math.ceil(limit * 0.4); // 40%
    const targetReviewCount = Math.ceil(limit * 0.3); // 30%
    const targetImportantCount = Math.ceil(limit * 0.2); // 20%

    const selectedIds = new Set<string>();
    const resultQuestions: any[] = [];

    // Helper to fetch and add questions without duplicates
    const fetchAndAdd = async (query: any, count: number) => {
      if (count <= 0 || resultQuestions.length >= limit) return;
      const remainingNeed = limit - resultQuestions.length;
      const effectiveLimit = Math.min(count, remainingNeed);

      const mergedQuery = { ...baseQuestionFilter, ...query };
      const excludeSelected = Array.from(selectedIds).map((id) => new Types.ObjectId(id));

      if (query._id) {
        if (query._id.$in) {
          mergedQuery._id = {
            $in: query._id.$in.filter((id: any) => !selectedIds.has(id.toString())),
          };
        } else if (query._id.$nin) {
          mergedQuery._id = { $nin: [...query._id.$nin, ...excludeSelected] };
        }
      } else if (selectedIds.size > 0) {
        mergedQuery._id = { $nin: excludeSelected };
      }

      const docs = await Question.find(mergedQuery)
        .populate('technologyId', 'name slug category icon')
        .populate('topicId', 'name slug')
        .populate('preparationLevels', 'name slug order')
        .limit(effectiveLimit)
        .lean();

      docs.forEach((doc) => {
        selectedIds.add(doc._id.toString());
        resultQuestions.push(doc);
      });
    };

    // 1. Weak questions (up to 40%)
    if (weakIds.length > 0) {
      await fetchAndAdd({ _id: { $in: weakIds } }, targetWeakCount);
    }

    // 2. Review questions (up to 30%)
    if (reviewIds.length > 0) {
      await fetchAndAdd({ _id: { $in: reviewIds } }, targetReviewCount);
    }

    // 3. Important questions excluding already known (up to 20%)
    await fetchAndAdd({ isImportant: true, _id: { $nin: knownIds } }, targetImportantCount);

    // 4. Fill remaining with unpracticed questions (10% target)
    if (resultQuestions.length < limit) {
      await fetchAndAdd({ _id: { $nin: practicedIds } }, limit - resultQuestions.length);
    }

    // 5. Fallback to any remaining published questions if needed
    if (resultQuestions.length < limit) {
      await fetchAndAdd({}, limit - resultQuestions.length);
    }

    // Attach user progress
    const progressMap = new Map(userProgress.map((p) => [p.questionId.toString(), p]));
    const enriched = resultQuestions.map((q) => {
      const p = progressMap.get(q._id.toString());
      return {
        ...q,
        userProgress: {
          status: p?.status || null,
          isSaved: p?.isSaved || false,
          reviewCount: p?.reviewCount || 0,
          lastReviewedAt: p?.lastReviewedAt || null,
        },
      };
    });

    return {
      count: enriched.length,
      limit,
      questions: enriched,
    };
  }

  /**
   * "Interview Tomorrow" Rapid Revision
   * Prioritizes: 1. Weak, 2. Review, 3. Important, 4. Unpracticed
   */
  static async getInterviewPrepQuestions(
    userId: string,
    params: {
      technologies?: string[] | string;
      preparationLevel?: string;
      limit?: string | number;
    }
  ): Promise<any> {
    const limit = Math.min(Math.max(1, parseInt(String(params.limit || 20), 10) || 20), 100);

    // Resolve technology IDs
    let techArray: string[] = [];
    if (Array.isArray(params.technologies)) {
      techArray = params.technologies;
    } else if (typeof params.technologies === 'string') {
      techArray = params.technologies.split(',').map((t) => t.trim());
    }

    const techIds: Types.ObjectId[] = [];
    for (const item of techArray) {
      if (mongoose.Types.ObjectId.isValid(item)) {
        techIds.push(new Types.ObjectId(item));
      } else {
        const tech = await Technology.findOne({ slug: item.toLowerCase() });
        if (tech) techIds.push(tech._id as Types.ObjectId);
      }
    }

    // Resolve preparation level
    let levelId: Types.ObjectId | null = null;
    if (params.preparationLevel) {
      if (mongoose.Types.ObjectId.isValid(params.preparationLevel)) {
        levelId = new Types.ObjectId(params.preparationLevel);
      } else {
        const lvl = await PreparationLevel.findOne({ slug: params.preparationLevel.toLowerCase() });
        if (lvl) levelId = lvl._id as Types.ObjectId;
      }
    }

    const baseFilter: any = { status: 'published' };
    if (techIds.length > 0) baseFilter.technologyId = { $in: techIds };
    if (levelId) baseFilter.preparationLevels = levelId;

    // Load user progress
    const userProgress = await UserQuestionProgress.find({
      userId: new Types.ObjectId(userId),
    }).lean();

    const weakIds: Types.ObjectId[] = [];
    const reviewIds: Types.ObjectId[] = [];
    const practicedIds: Types.ObjectId[] = [];

    userProgress.forEach((p) => {
      practicedIds.push(p.questionId);
      if (p.status === 'weak') weakIds.push(p.questionId);
      if (p.status === 'review') reviewIds.push(p.questionId);
    });

    const selectedIds = new Set<string>();
    const resultQuestions: any[] = [];

    const fetchPhase = async (query: any) => {
      if (resultQuestions.length >= limit) return;
      const needed = limit - resultQuestions.length;

      const mergedQuery = { ...baseFilter, ...query };
      const excludeSelected = Array.from(selectedIds).map((id) => new Types.ObjectId(id));

      if (query._id) {
        if (query._id.$in) {
          mergedQuery._id = {
            $in: query._id.$in.filter((id: any) => !selectedIds.has(id.toString())),
          };
        } else if (query._id.$nin) {
          mergedQuery._id = { $nin: [...query._id.$nin, ...excludeSelected] };
        }
      } else if (selectedIds.size > 0) {
        mergedQuery._id = { $nin: excludeSelected };
      }

      const docs = await Question.find(mergedQuery)
        .populate('technologyId', 'name slug category icon')
        .populate('topicId', 'name slug')
        .populate('preparationLevels', 'name slug order')
        .limit(needed)
        .lean();

      docs.forEach((d) => {
        selectedIds.add(d._id.toString());
        resultQuestions.push(d);
      });
    };

    // Priority 1: Weak questions
    if (weakIds.length > 0) {
      await fetchPhase({ _id: { $in: weakIds } });
    }

    // Priority 2: Review questions
    if (reviewIds.length > 0) {
      await fetchPhase({ _id: { $in: reviewIds } });
    }

    // Priority 3: Important questions
    await fetchPhase({ isImportant: true });

    // Priority 4: Unpracticed questions
    await fetchPhase({ _id: { $nin: practicedIds } });

    // Fallback: Any remaining published matching the base filter
    if (resultQuestions.length < limit) {
      await fetchPhase({});
    }

    const progressMap = new Map(userProgress.map((p) => [p.questionId.toString(), p]));
    const enriched = resultQuestions.map((q) => {
      const p = progressMap.get(q._id.toString());
      return {
        ...q,
        userProgress: {
          status: p?.status || null,
          isSaved: p?.isSaved || false,
          reviewCount: p?.reviewCount || 0,
          lastReviewedAt: p?.lastReviewedAt || null,
        },
      };
    });

    return {
      count: enriched.length,
      limit,
      questions: enriched,
    };
  }
}
