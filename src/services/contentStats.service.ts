import { Question } from '../models/Question';
import { Technology } from '../models/Technology';
import { Topic } from '../models/Topic';
import { PreparationLevel } from '../models/PreparationLevel';

export class ContentStatsService {
  /**
   * Generates comprehensive content statistics across status, technology, level,
   * difficulty, source, and questionType.
   */
  static async getContentStats(): Promise<any> {
    const [
      totalQuestions,
      statusCounts,
      difficultyCounts,
      sourceCounts,
      questionTypeCounts,
      technologies,
      preparationLevels,
      techAgg,
      levelAgg,
    ] = await Promise.all([
      Question.countDocuments(),
      Question.aggregate([
        { $group: { _id: '$status', count: { $sum: 1 } } },
      ]),
      Question.aggregate([
        { $group: { _id: '$difficulty', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ]),
      Question.aggregate([
        { $group: { _id: '$source', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ]),
      Question.aggregate([
        { $group: { _id: '$questionType', count: { $sum: 1 } } },
        { $sort: { count: -1 } },
      ]),
      Technology.find({ isActive: true }).sort({ order: 1, name: 1 }).lean(),
      PreparationLevel.find().sort({ order: 1 }).lean(),
      Question.aggregate([
        {
          $group: {
            _id: {
              technologyId: '$technologyId',
              status: '$status',
            },
            count: { $sum: 1 },
          },
        },
      ]),
      Question.aggregate([
        { $unwind: '$preparationLevels' },
        {
          $group: {
            _id: '$preparationLevels',
            count: { $sum: 1 },
          },
        },
      ]),
    ]);

    let published = 0;
    let draft = 0;
    let archived = 0;

    statusCounts.forEach((s) => {
      if (s._id === 'published') published = s.count;
      else if (s._id === 'draft') draft = s.count;
      else if (s._id === 'archived') archived = s.count;
    });

    // Build technology breakdown
    const techMap = new Map<string, { total: number; published: number; draft: number; archived: number }>();
    techAgg.forEach((item) => {
      const techIdStr = item._id.technologyId?.toString();
      if (!techIdStr) return;
      if (!techMap.has(techIdStr)) {
        techMap.set(techIdStr, { total: 0, published: 0, draft: 0, archived: 0 });
      }
      const entry = techMap.get(techIdStr)!;
      entry.total += item.count;
      if (item._id.status === 'published') entry.published = item.count;
      if (item._id.status === 'draft') entry.draft = item.count;
      if (item._id.status === 'archived') entry.archived = item.count;
    });

    const byTechnology = technologies.map((t) => {
      const stats = techMap.get(t._id.toString()) || { total: 0, published: 0, draft: 0, archived: 0 };
      return {
        technologyId: t._id,
        name: t.name,
        slug: t.slug,
        category: t.category,
        total: stats.total,
        published: stats.published,
        draft: stats.draft,
        archived: stats.archived,
      };
    });

    // Build preparation level breakdown
    const levelCountMap = new Map(levelAgg.map((l) => [l._id.toString(), l.count]));
    const byPreparationLevel = preparationLevels.map((lvl) => ({
      levelId: lvl._id,
      name: lvl.name,
      slug: lvl.slug,
      order: lvl.order,
      count: levelCountMap.get(lvl._id.toString()) || 0,
    }));

    return {
      totalQuestions,
      published,
      draft,
      archived,
      byTechnology,
      byPreparationLevel,
      byDifficulty: difficultyCounts.map((d) => ({ difficulty: d._id || 'unspecified', count: d.count })),
      bySource: sourceCounts.map((s) => ({ source: s._id || 'unspecified', count: s.count })),
      byQuestionType: questionTypeCounts.map((q) => ({ questionType: q._id || 'unspecified', count: q.count })),
    };
  }

  /**
   * Content Gap Analysis:
   * Maps content across Technology -> Topic -> Preparation Level to transparently spotlight
   * underrepresented or empty preparation levels.
   */
  static async getContentGaps(): Promise<any> {
    const [technologies, topics, levels, questionDist] = await Promise.all([
      Technology.find({ isActive: true }).sort({ order: 1, name: 1 }).lean(),
      Topic.find({ isActive: true }).sort({ order: 1, name: 1 }).lean(),
      PreparationLevel.find().sort({ order: 1 }).lean(),
      Question.aggregate([
        { $unwind: '$preparationLevels' },
        {
          $group: {
            _id: {
              technologyId: '$technologyId',
              topicId: '$topicId',
              levelId: '$preparationLevels',
            },
            count: { $sum: 1 },
          },
        },
      ]),
    ]);

    // Fast lookup for distribution
    const distMap = new Map<string, number>();
    questionDist.forEach((item) => {
      const key = `${item._id.technologyId?.toString()}_${item._id.topicId?.toString()}_${item._id.levelId?.toString()}`;
      distMap.set(key, item.count);
    });

    // Group topics by technology
    const topicsByTech = new Map<string, any[]>();
    topics.forEach((top) => {
      const techIdStr = top.technologyId.toString();
      if (!topicsByTech.has(techIdStr)) {
        topicsByTech.set(techIdStr, []);
      }
      topicsByTech.get(techIdStr)!.push(top);
    });

    const result = technologies.map((tech) => {
      const techIdStr = tech._id.toString();
      const techTopics = topicsByTech.get(techIdStr) || [];

      const topicsAnalysis = techTopics.map((topic) => {
        const topicIdStr = topic._id.toString();
        const byLevel: Record<string, number> = {};
        const gaps: string[] = [];
        let totalInTopic = 0;

        levels.forEach((lvl) => {
          const key = `${techIdStr}_${topicIdStr}_${lvl._id.toString()}`;
          const count = distMap.get(key) || 0;
          byLevel[lvl.slug] = count;
          totalInTopic += count;

          // Flag as gap if count is 0 or low (< 2 questions)
          if (count < 2) {
            gaps.push(lvl.slug);
          }
        });

        return {
          topicId: topic._id,
          topic: topic.name,
          slug: topic.slug,
          totalQuestions: totalInTopic,
          byLevel,
          gaps,
        };
      });

      return {
        technologyId: tech._id,
        technology: tech.name,
        slug: tech.slug,
        category: tech.category,
        topicsCount: techTopics.length,
        topics: topicsAnalysis,
      };
    });

    return {
      totalTechnologies: technologies.length,
      totalTopics: topics.length,
      preparationLevels: levels.map((l) => l.slug),
      technologies: result,
    };
  }
}
