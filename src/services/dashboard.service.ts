import { Types } from 'mongoose';
import { Question } from '../models/Question';
import { UserQuestionProgress } from '../models/UserQuestionProgress';
import { Technology } from '../models/Technology';

export class DashboardService {
  static async getDashboardMetrics(userId: string): Promise<any> {
    const userObjId = new Types.ObjectId(userId);

    // 1. Total published questions
    const totalQuestions = await Question.countDocuments({ status: 'published' });

    // 2. User progress counts
    const [progressStats, savedCount] = await Promise.all([
      UserQuestionProgress.aggregate([
        { $match: { userId: userObjId } },
        {
          $group: {
            _id: '$status',
            count: { $sum: 1 },
          },
        },
      ]),
      UserQuestionProgress.countDocuments({ userId: userObjId, isSaved: true }),
    ]);

    let completedQuestions = 0;
    let weakQuestions = 0;
    let reviewQuestions = 0;

    progressStats.forEach((stat) => {
      if (stat._id === 'known') completedQuestions = stat.count;
      if (stat._id === 'weak') weakQuestions = stat.count;
      if (stat._id === 'review') reviewQuestions = stat.count;
    });

    // 3. Technology Progress Breakdown
    const technologies = await Technology.find({ isActive: true })
      .sort({ order: 1, name: 1 })
      .lean();

    const techQuestionCounts = await Question.aggregate([
      { $match: { status: 'published' } },
      { $group: { _id: '$technologyId', total: { $sum: 1 } } },
    ]);
    const techTotalMap = new Map(techQuestionCounts.map((t) => [t._id.toString(), t.total]));

    const userTechProgress = await UserQuestionProgress.aggregate([
      { $match: { userId: userObjId, status: { $in: ['known', 'weak', 'review'] } } },
      {
        $lookup: {
          from: 'questions',
          localField: 'questionId',
          foreignField: '_id',
          as: 'question',
        },
      },
      { $unwind: '$question' },
      {
        $group: {
          _id: {
            technologyId: '$question.technologyId',
            status: '$status',
          },
          count: { $sum: 1 },
        },
      },
    ]);

    const progressByTech = new Map<string, { known: number; weak: number; review: number }>();
    userTechProgress.forEach((item) => {
      const techId = item._id.technologyId?.toString();
      if (!techId) return;
      if (!progressByTech.has(techId)) {
        progressByTech.set(techId, { known: 0, weak: 0, review: 0 });
      }
      const p = progressByTech.get(techId)!;
      if (item._id.status === 'known') p.known = item.count;
      if (item._id.status === 'weak') p.weak = item.count;
      if (item._id.status === 'review') p.review = item.count;
    });

    const technologyProgress = technologies.map((t) => {
      const p = progressByTech.get(t._id.toString()) || { known: 0, weak: 0, review: 0 };
      const total = techTotalMap.get(t._id.toString()) || 0;
      return {
        technologyId: t._id,
        name: t.name,
        slug: t.slug,
        category: t.category,
        icon: t.icon,
        totalQuestions: total,
        known: p.known,
        weak: p.weak,
        review: p.review,
        completionPercentage: total > 0 ? Math.round((p.known / total) * 100) : 0,
      };
    });

    // 4. Weak Topics Analysis
    const weakTopicAgg = await UserQuestionProgress.aggregate([
      { $match: { userId: userObjId, status: 'weak' } },
      {
        $lookup: {
          from: 'questions',
          localField: 'questionId',
          foreignField: '_id',
          as: 'question',
        },
      },
      { $unwind: '$question' },
      {
        $group: {
          _id: {
            topicId: '$question.topicId',
            technologyId: '$question.technologyId',
          },
          weakCount: { $sum: 1 },
        },
      },
      { $sort: { weakCount: -1 } },
      { $limit: 8 },
      {
        $lookup: {
          from: 'topics',
          localField: '_id.topicId',
          foreignField: '_id',
          as: 'topic',
        },
      },
      { $unwind: '$topic' },
      {
        $lookup: {
          from: 'technologies',
          localField: '_id.technologyId',
          foreignField: '_id',
          as: 'technology',
        },
      },
      { $unwind: '$technology' },
      {
        $project: {
          _id: 0,
          topicId: '$topic._id',
          topicName: '$topic.name',
          topicSlug: '$topic.slug',
          technologyName: '$technology.name',
          technologySlug: '$technology.slug',
          weakCount: 1,
        },
      },
    ]);

    // 5. Recent Questions Practiced
    const recentProgress = await UserQuestionProgress.find({
      userId: userObjId,
      lastReviewedAt: { $ne: null },
    })
      .sort({ lastReviewedAt: -1 })
      .limit(5)
      .populate({
        path: 'questionId',
        select: 'question title technologyId topicId difficulty isImportant',
        populate: [
          { path: 'technologyId', select: 'name slug' },
          { path: 'topicId', select: 'name slug' },
        ],
      })
      .lean();

    const recentQuestions = recentProgress
      .filter((p) => p.questionId)
      .map((p) => {
        const q: any = p.questionId;
        return {
          questionId: q._id,
          question: q.question || q.title,
          technology: q.technologyId?.name,
          topic: q.topicId?.name,
          status: p.status,
          isSaved: p.isSaved,
          difficulty: q.difficulty,
          isImportant: q.isImportant,
          lastReviewedAt: p.lastReviewedAt,
        };
      });

    return {
      totalQuestions,
      completedQuestions,
      savedQuestions: savedCount,
      weakQuestions,
      reviewQuestions,
      overallProgressPercentage:
        totalQuestions > 0 ? Math.round((completedQuestions / totalQuestions) * 100) : 0,
      technologyProgress,
      weakTopics: weakTopicAgg,
      recentQuestions,
    };
  }
}
