import mongoose from 'mongoose';
import { Technology, ITechnology } from '../models/Technology';
import { Question } from '../models/Question';
import { shuffleArray, shuffleQuestionOptions } from './exam.service';

export interface DailyChallengeOptions {
  technologies?: string[] | string;
  learningCount?: number;
  testCount?: number;
  excludeIds?: string[] | string;
}

export interface RetryTestOptions {
  technologies?: string[] | string;
  count?: number;
  excludeIds?: string[] | string;
}

export class DailyChallengeService {
  /**
   * Helper to normalize array or comma-separated string inputs
   */
  private static parseList(input?: string[] | string): string[] {
    if (!input) return [];
    if (Array.isArray(input)) return input.map((s) => String(s).trim()).filter(Boolean);
    return String(input)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
  }

  /**
   * Resolve target active technologies based on provided slugs/IDs or default to all active
   */
  private static async resolveTechnologies(techInputs: string[]): Promise<ITechnology[]> {
    if (techInputs.length > 0) {
      const objectIdQueries = techInputs.filter((t) => mongoose.Types.ObjectId.isValid(t));
      const slugQueries = techInputs.filter((t) => !mongoose.Types.ObjectId.isValid(t)).map((s) => s.toLowerCase());

      const techs = await Technology.find({
        isActive: true,
        $or: [
          ...(objectIdQueries.length > 0 ? [{ _id: { $in: objectIdQueries } }] : []),
          ...(slugQueries.length > 0 ? [{ slug: { $in: slugQueries } }] : []),
        ],
      })
        .sort({ order: 1 })
        .lean();

      if (techs.length > 0) {
        return techs as unknown as ITechnology[];
      }
    }

    // Default: all active technologies
    const allActive = await Technology.find({ isActive: true }).sort({ order: 1 }).lean();
    return allActive as unknown as ITechnology[];
  }

  /**
   * Generates a balanced set of learning questions and test MCQs for the Daily Challenge
   */
  static async getDailyChallengeQuestions(options: DailyChallengeOptions) {
    const rawLearningCount = Number(options.learningCount);
    const learningCount = [10, 20, 30].includes(rawLearningCount) ? rawLearningCount : 20;

    const rawTestCount = Number(options.testCount);
    const testCount = [10, 20, 30].includes(rawTestCount) ? rawTestCount : 10;

    const requestedTechs = this.parseList(options.technologies);
    const excludedIds = new Set(this.parseList(options.excludeIds));

    const targetTechnologies = await this.resolveTechnologies(requestedTechs);
    const targetTechIds = targetTechnologies.map((t) => t._id);
    const techMap = new Map<string, ITechnology>();
    targetTechnologies.forEach((t) => techMap.set(t._id.toString(), t));

    // 1. Fetch published learning questions
    const allLearningCandidates = await Question.find({
      status: 'published',
      technologyId: { $in: targetTechIds },
    })
      .populate('technologyId', 'name slug')
      .populate('topicId', 'name slug')
      .lean();

    // Group learning questions by technology
    const learningByTech = new Map<string, any[]>();
    targetTechIds.forEach((id) => learningByTech.set(id.toString(), []));

    for (const q of allLearningCandidates) {
      const tId = q.technologyId?._id?.toString() || (q.technologyId as any)?.toString();
      if (tId && learningByTech.has(tId)) {
        learningByTech.get(tId)!.push(q);
      }
    }

    // Evenly distribute learning questions across selected technologies
    const selectedLearning: any[] = [];
    const selectedLearningIds = new Set<string>();
    const techCount = targetTechnologies.length;
    const baseLearningQuota = Math.floor(learningCount / techCount);
    let remainderLearning = learningCount % techCount;

    // Distribute base quota per tech
    for (const tech of targetTechnologies) {
      const tId = tech._id.toString();
      const techPool = learningByTech.get(tId) || [];
      const quota = baseLearningQuota + (remainderLearning > 0 ? 1 : 0);
      if (remainderLearning > 0) remainderLearning--;

      // Prioritize non-recently excluded questions
      const freshPool = techPool.filter((q) => !excludedIds.has(q._id.toString()));
      const availablePool = freshPool.length >= quota ? freshPool : techPool;
      const shuffled = shuffleArray(availablePool);

      for (const q of shuffled) {
        if (selectedLearning.length >= learningCount) break;
        if (!selectedLearningIds.has(q._id.toString())) {
          selectedLearningIds.add(q._id.toString());
          selectedLearning.push(q);
          if (selectedLearning.filter((item) => (item.technologyId?._id?.toString() || item.technologyId?.toString()) === tId).length >= quota) {
            break;
          }
        }
      }
    }

    // Backfill if quota couldn't be satisfied per technology
    if (selectedLearning.length < learningCount) {
      const remainingPool = shuffleArray(
        allLearningCandidates.filter((q) => !selectedLearningIds.has(q._id.toString()))
      );
      for (const q of remainingPool) {
        if (selectedLearning.length >= learningCount) break;
        selectedLearningIds.add(q._id.toString());
        selectedLearning.push(q);
      }
    }

    // 2. Fetch MCQ questions for the Daily Test
    const allMcqCandidates = await Question.find({
      status: 'published',
      'mcq.enabled': true,
      technologyId: { $in: targetTechIds },
    })
      .populate('technologyId', 'name slug')
      .populate('topicId', 'name slug')
      .lean();

    // Group MCQs by technology
    const mcqByTech = new Map<string, any[]>();
    targetTechIds.forEach((id) => mcqByTech.set(id.toString(), []));

    for (const q of allMcqCandidates) {
      const tId = q.technologyId?._id?.toString() || (q.technologyId as any)?.toString();
      if (tId && mcqByTech.has(tId)) {
        mcqByTech.get(tId)!.push(q);
      }
    }

    const selectedTest: any[] = [];
    const selectedTestIds = new Set<string>();
    const baseTestQuota = Math.floor(testCount / techCount);
    let remainderTest = testCount % techCount;

    for (const tech of targetTechnologies) {
      const tId = tech._id.toString();
      const techPool = mcqByTech.get(tId) || [];
      const quota = baseTestQuota + (remainderTest > 0 ? 1 : 0);
      if (remainderTest > 0) remainderTest--;

      // Prefer MCQs that correlate with today's learning questions or are fresh
      const learningMatches = techPool.filter((q) => selectedLearningIds.has(q._id.toString()));
      const otherTechPool = techPool.filter((q) => !selectedLearningIds.has(q._id.toString()));
      const combinedPool = [...shuffleArray(learningMatches), ...shuffleArray(otherTechPool)];

      let pickedFromTech = 0;
      for (const q of combinedPool) {
        if (selectedTest.length >= testCount || pickedFromTech >= quota) break;
        if (!selectedTestIds.has(q._id.toString())) {
          selectedTestIds.add(q._id.toString());
          selectedTest.push(q);
          pickedFromTech++;
        }
      }
    }

    // Backfill MCQs if some technologies had fewer questions
    if (selectedTest.length < testCount) {
      const remainingMcqs = shuffleArray(
        allMcqCandidates.filter((q) => !selectedTestIds.has(q._id.toString()))
      );
      for (const q of remainingMcqs) {
        if (selectedTest.length >= testCount) break;
        selectedTestIds.add(q._id.toString());
        selectedTest.push(q);
      }
    }

    // Format and randomize options for the test MCQs
    const formattedTestQuestions = selectedTest.map((q, idx) => {
      const shuffled = shuffleQuestionOptions(q.mcq!);
      const techName = (q.technologyId as any)?.name || 'General';
      const techSlug = (q.technologyId as any)?.slug || 'general';
      const topicName = (q.topicId as any)?.name || 'General';

      return {
        _id: q._id.toString(),
        questionIndex: idx + 1,
        question: q.question,
        title: q.title || q.question,
        difficulty: q.difficulty || 'medium',
        options: shuffled.options,
        correctOption: shuffled.correctOption,
        explanation: (q.mcq as any)?.explanation || q.explanation || '',
        technologyId: (q.technologyId as any)?._id?.toString() || (q.technologyId as any)?.toString(),
        technologyName: techName,
        technologySlug: techSlug,
        topicId: (q.topicId as any)?._id?.toString() || (q.topicId as any)?.toString(),
        topicName: topicName,
      };
    });

    return {
      technologies: targetTechnologies.map((t) => ({
        id: t._id.toString(),
        name: t.name,
        slug: t.slug,
      })),
      learningCount: selectedLearning.length,
      testCount: formattedTestQuestions.length,
      learningQuestions: selectedLearning,
      testQuestions: formattedTestQuestions,
    };
  }

  /**
   * Retrieves a fresh set of test MCQs for a retry attempt
   */
  static async getRetryTestQuestions(options: RetryTestOptions) {
    const rawCount = Number(options.count);
    const count = [10, 20, 30].includes(rawCount) ? rawCount : 10;
    const requestedTechs = this.parseList(options.technologies);
    const excludedIds = new Set(this.parseList(options.excludeIds));

    const targetTechnologies = await this.resolveTechnologies(requestedTechs);
    const targetTechIds = targetTechnologies.map((t) => t._id);

    const allMcqs = await Question.find({
      status: 'published',
      'mcq.enabled': true,
      technologyId: { $in: targetTechIds },
    })
      .populate('technologyId', 'name slug')
      .populate('topicId', 'name slug')
      .lean();

    // Prefer questions not in the excluded list
    const freshMcqs = shuffleArray(allMcqs.filter((q) => !excludedIds.has(q._id.toString())));
    const previouslyUsedMcqs = shuffleArray(allMcqs.filter((q) => excludedIds.has(q._id.toString())));
    const pool = [...freshMcqs, ...previouslyUsedMcqs];

    const selected = pool.slice(0, count);

    const formattedTestQuestions = selected.map((q, idx) => {
      const shuffled = shuffleQuestionOptions(q.mcq!);
      const techName = (q.technologyId as any)?.name || 'General';
      const techSlug = (q.technologyId as any)?.slug || 'general';
      const topicName = (q.topicId as any)?.name || 'General';

      return {
        _id: q._id.toString(),
        questionIndex: idx + 1,
        question: q.question,
        title: q.title || q.question,
        difficulty: q.difficulty || 'medium',
        options: shuffled.options,
        correctOption: shuffled.correctOption,
        explanation: (q.mcq as any)?.explanation || q.explanation || '',
        technologyId: (q.technologyId as any)?._id?.toString() || (q.technologyId as any)?.toString(),
        technologyName: techName,
        technologySlug: techSlug,
        topicId: (q.topicId as any)?._id?.toString() || (q.topicId as any)?.toString(),
        topicName: topicName,
      };
    });

    return {
      count: formattedTestQuestions.length,
      testQuestions: formattedTestQuestions,
    };
  }
}
