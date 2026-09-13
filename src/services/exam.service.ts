import mongoose, { Types } from 'mongoose';
import { Technology } from '../models/Technology';
import { Topic } from '../models/Topic';
import { Question, IQuestion } from '../models/Question';
import {
  ExamAttempt,
  IExamAttempt,
  PerformanceCategory,
  ExamDifficulty,
  IExamAnalysis,
  IDifficultyPerformance,
  ITechnologyPerformance,
  IWeakTopic,
  IExamRecommendation,
} from '../models/ExamAttempt';

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function shuffleQuestionOptions(mcq: {
  enabled: boolean;
  options: { id: string; text: string }[];
  correctOption: string;
}) {
  const originalCorrectOption = mcq.options.find((o) => o.id === mcq.correctOption);
  const originalCorrectText = originalCorrectOption ? originalCorrectOption.text : mcq.options[0]?.text;
  const shuffledTexts = shuffleArray(mcq.options.map((o) => o.text));
  const optionLetters: ('A' | 'B' | 'C' | 'D')[] = ['A', 'B', 'C', 'D'];

  const newOptions = shuffledTexts.slice(0, 4).map((text, idx) => ({
    id: optionLetters[idx],
    text,
  }));

  const newCorrectOption = newOptions.find((o) => o.text === originalCorrectText)?.id || 'A';

  return {
    options: newOptions,
    correctOption: newCorrectOption,
  };
}

export function calculatePerformanceCategory(percentage: number): PerformanceCategory {
  if (percentage >= 80) return 'Excellent';
  if (percentage >= 60) return 'Good';
  if (percentage >= 40) return 'Needs Practice';
  return 'Needs Revision';
}

export function calculateExamAnalysis(params: {
  evaluatedQuestions: Array<{
    questionId: any;
    question: string;
    selectedOption?: string;
    correctOption?: string;
    isCorrect: boolean;
    difficulty: 'easy' | 'medium' | 'hard';
    technologyName: string;
    technologySlug?: string;
    topicName: string;
    topicId?: string;
  }>;
  totalQuestions: number;
  authoritativeScore: number;
  authoritativePercentage: number;
  authoritativeCategory: PerformanceCategory;
}): IExamAnalysis {
  const { evaluatedQuestions, totalQuestions, authoritativeScore, authoritativePercentage, authoritativeCategory } = params;

  // 1. Overall counts
  const correct = evaluatedQuestions.filter((q) => q.isCorrect).length;
  const evaluatedUnanswered = evaluatedQuestions.filter((q) => !q.selectedOption || q.selectedOption.trim() === '').length;
  const missingFromList = Math.max(0, totalQuestions - evaluatedQuestions.length);
  const unanswered = evaluatedUnanswered + missingFromList;
  const incorrect = Math.max(0, totalQuestions - correct - unanswered);

  // 2. Difficulty Breakdown (omit difficulty if 0 questions in that difficulty)
  const difficultyLevels: ('easy' | 'medium' | 'hard')[] = ['easy', 'medium', 'hard'];
  const difficultyBreakdown: IDifficultyPerformance[] = [];

  for (const diff of difficultyLevels) {
    const subset = evaluatedQuestions.filter((q) => q.difficulty === diff);
    if (subset.length === 0) continue; // Do not show difficulty row if 0 questions
    const diffCorrect = subset.filter((q) => q.isCorrect).length;
    const diffTotal = subset.length;
    const diffPct = Math.round((diffCorrect / diffTotal) * 100);
    difficultyBreakdown.push({
      difficulty: diff,
      correct: diffCorrect,
      total: diffTotal,
      percentage: diffPct,
    });
  }

  // 3. Technology Breakdown
  const techMap = new Map<string, { technologyName: string; technologySlug: string; correct: number; total: number }>();
  for (const q of evaluatedQuestions) {
    const key = q.technologyName || 'General';
    const entry = techMap.get(key) || {
      technologyName: key,
      technologySlug: q.technologySlug || key.toLowerCase().replace(/[^a-z0-9]/g, ''),
      correct: 0,
      total: 0,
    };
    entry.total += 1;
    if (q.isCorrect) {
      entry.correct += 1;
    }
    techMap.set(key, entry);
  }

  const technologyBreakdown: ITechnologyPerformance[] = Array.from(techMap.values()).map((t) => ({
    technologyName: t.technologyName,
    technologySlug: t.technologySlug,
    correct: t.correct,
    total: t.total,
    percentage: Math.round((t.correct / t.total) * 100),
  }));

  // 4. Topic-wise & Weak Areas
  // A topic is considered a weak area when:
  // - accuracy < 60% OR more than 50% of attempted questions in that topic were incorrect
  // Rank weak topics by:
  // 1. Lowest accuracy (ascending)
  // 2. Number of incorrect answers (descending)
  // 3. Number of questions attempted (descending)
  // Maximum 3 weak areas returned
  const topicMap = new Map<string, {
    topicId?: string;
    topicName: string;
    technologyName: string;
    technologySlug?: string;
    correct: number;
    total: number;
    incorrect: number;
  }>();

  for (const q of evaluatedQuestions) {
    const key = `${q.technologyName}:::${q.topicName}`;
    const entry = topicMap.get(key) || {
      topicId: q.topicId,
      topicName: q.topicName,
      technologyName: q.technologyName,
      technologySlug: q.technologySlug,
      correct: 0,
      total: 0,
      incorrect: 0,
    };
    entry.total += 1;
    if (q.isCorrect) {
      entry.correct += 1;
    } else {
      entry.incorrect += 1;
    }
    topicMap.set(key, entry);
  }

  const eligibleTopics = Array.from(topicMap.values()).map((t) => {
    const accuracy = Math.round((t.correct / t.total) * 100);
    return {
      topicId: t.topicId,
      topicName: t.topicName,
      technologyName: t.technologyName,
      technologySlug: t.technologySlug,
      correct: t.correct,
      total: t.total,
      incorrect: t.incorrect,
      accuracy,
    };
  });

  const weakTopics = eligibleTopics.filter((t) => {
    return t.accuracy < 60 || (t.incorrect > t.total / 2);
  });

  weakTopics.sort((a, b) => {
    // 1. Lowest accuracy first
    if (a.accuracy !== b.accuracy) {
      return a.accuracy - b.accuracy;
    }
    // 2. Highest number of incorrect answers
    if (a.incorrect !== b.incorrect) {
      return b.incorrect - a.incorrect;
    }
    // 3. Highest number of questions attempted
    return b.total - a.total;
  });

  const topWeakTopics = weakTopics.slice(0, 3);

  // 5. Recommended Action
  const recommendation: IExamRecommendation = topWeakTopics.length > 0
    ? {
        type: 'review_weak',
        message: 'Review your weak areas before taking another test.',
        buttonText: 'Review Weak Areas',
      }
    : {
        type: 'take_another',
        message: "Great performance! You're ready for another challenge.",
        buttonText: 'Take Another Test',
      };

  return {
    overall: {
      totalQuestions,
      correct: authoritativeScore,
      incorrect,
      unanswered,
      percentage: authoritativePercentage,
      performanceCategory: authoritativeCategory,
    },
    difficulty: difficultyBreakdown,
    technologies: technologyBreakdown,
    weakTopics: topWeakTopics,
    recommendation,
  };
}

export class ExamService {
  /**
   * Get all active technologies with their count of eligible MCQs
   */
  static async getAvailableSubjects() {
    const technologies = await Technology.find({ isActive: { $ne: false } }).sort({ order: 1, name: 1 });

    const subjectStats = await Promise.all(
      technologies.map(async (tech) => {
        const mcqCount = await Question.countDocuments({
          technologyId: tech._id,
          status: 'published',
          'mcq.enabled': true,
        });

        return {
          _id: tech._id,
          name: tech.name,
          slug: tech.slug,
          category: tech.category,
          icon: tech.icon,
          totalMcqs: mcqCount,
          requiredQuestions: 25,
          isAvailable: mcqCount >= 25,
        };
      })
    );

    return subjectStats;
  }

  /**
   * Generate a 25-question subject exam for a specific technology
   */
  static async generateSubjectExam(
    technologySlug: string,
    mode: 'practice' | 'exam' = 'practice',
    difficulty: ExamDifficulty = 'mixed'
  ) {
    const tech = await Technology.findOne({
      slug: { $regex: new RegExp(`^(${technologySlug}|${technologySlug}js|${technologySlug.replace(/js$/, '')})$`, 'i') },
      isActive: { $ne: false },
    });

    if (!tech) {
      throw new Error(`Technology '${technologySlug}' not found.`);
    }

    const eligibleQuestions = await Question.find({
      technologyId: tech._id,
      status: 'published',
      'mcq.enabled': true,
    }).lean();

    if (eligibleQuestions.length < 25) {
      return {
        isAvailable: false,
        error: `Insufficient questions for ${tech.name} exam. Available: ${eligibleQuestions.length}/25 required questions.`,
        availableQuestions: eligibleQuestions.length,
        requiredQuestions: 25,
      };
    }

    let selected25: any[] = [];

    if (difficulty === 'mixed') {
      // Balanced distribution: ~8 Easy, 9 Medium, 8 Hard
      const easyPool = shuffleArray(eligibleQuestions.filter((q) => q.difficulty === 'easy'));
      const medPool = shuffleArray(eligibleQuestions.filter((q) => q.difficulty === 'medium'));
      const hardPool = shuffleArray(eligibleQuestions.filter((q) => q.difficulty === 'hard'));

      const pickedEasy = easyPool.slice(0, 8);
      const pickedMed = medPool.slice(0, 9);
      const pickedHard = hardPool.slice(0, 8);

      selected25 = [...pickedEasy, ...pickedMed, ...pickedHard];

      if (selected25.length < 25) {
        const selectedIds = new Set(selected25.map((q) => q._id.toString()));
        const remainingPool = shuffleArray(
          eligibleQuestions.filter((q) => !selectedIds.has(q._id.toString()))
        );
        const needed = 25 - selected25.length;
        selected25.push(...remainingPool.slice(0, needed));
      }
    } else {
      // easy, medium, or hard
      const targetPool = shuffleArray(eligibleQuestions.filter((q) => q.difficulty === difficulty));
      if (targetPool.length >= 25) {
        selected25 = targetPool.slice(0, 25);
      } else {
        // Graceful fallback: take all available of target difficulty, fill remainder without duplicates
        selected25 = [...targetPool];
        const selectedIds = new Set(selected25.map((q) => q._id.toString()));
        const diffRank: Record<string, number> =
          difficulty === 'hard'
            ? { medium: 1, easy: 2 }
            : difficulty === 'easy'
            ? { medium: 1, hard: 2 }
            : { hard: 1, easy: 2 };
        const remainingPool = shuffleArray(
          eligibleQuestions.filter((q) => !selectedIds.has(q._id.toString()))
        ).sort((a, b) => (diffRank[a.difficulty] || 3) - (diffRank[b.difficulty] || 3));

        const needed = 25 - selected25.length;
        selected25.push(...remainingPool.slice(0, needed));
      }
    }

    // Thoroughly randomize final question order
    selected25 = shuffleArray(selected25);

    // Shuffle options for each question while preserving correct answer
    const formattedQuestions = selected25.map((q, index) => {
      const { options, correctOption } = shuffleQuestionOptions(q.mcq!);
      const baseQ: any = {
        _id: q._id,
        questionIndex: index + 1,
        question: q.question,
        title: q.title || q.question,
        difficulty: q.difficulty,
        questionType: q.questionType,
        technologyId: tech._id,
        technologySlug: tech.slug,
        technologyName: tech.name,
        options,
      };

      // Security: Only expose correctOption and explanation in Practice Mode
      if (mode === 'practice') {
        baseQ.correctOption = correctOption;
        baseQ.explanation = q.explanation || q.answer;
      }

      return baseQ;
    });

    return {
      isAvailable: true,
      examType: 'subject',
      mode,
      difficulty,
      technologyId: tech._id,
      technologySlug: tech.slug,
      technologyName: tech.name,
      title: `${tech.name} Interview Test`,
      totalQuestions: 25,
      questions: formattedQuestions,
    };
  }

  /**
   * Generate a 25-question mixed exam across ALL available subjects with MCQs
   * Dynamically distributes questions evenly across all active technologies
   */
  static async generateMernExam(
    mode: 'practice' | 'exam' = 'practice',
    difficulty: ExamDifficulty = 'mixed'
  ) {
    // Find all technologies
    const allTechs = await Technology.find().lean();
    const techMap = new Map(allTechs.map((t) => [t._id.toString(), t]));

    // Query all published MCQ questions
    const mcqQuestions = await Question.find({ status: 'published', 'mcq.enabled': true }).lean();

    if (mcqQuestions.length < 25) {
      return {
        isAvailable: false,
        error: `Insufficient total MCQs available (${mcqQuestions.length}/25).`,
        requiredQuestions: 25,
      };
    }

    // Group questions by technology
    const poolByTech = new Map<string, any[]>();
    for (const q of mcqQuestions) {
      const techIdStr = q.technologyId?.toString();
      if (!techIdStr) continue;
      if (!poolByTech.has(techIdStr)) {
        poolByTech.set(techIdStr, []);
      }
      poolByTech.get(techIdStr)!.push(q);
    }

    const availableTechIds = Array.from(poolByTech.keys());
    const techCount = availableTechIds.length;
    const selectedQuestions: any[] = [];
    const selectedIds = new Set<string>();

    if (difficulty === 'mixed') {
      // Balanced difficulty mix (~8 easy, 9 medium, 8 hard) across subjects
      const baseQuotaPerTech = Math.floor(25 / techCount);
      let remainder = 25 % techCount;
      const shuffledTechs = shuffleArray(availableTechIds);

      // Pass 1: Try to pick balanced difficulties from each technology
      for (const techId of shuffledTechs) {
        const tech = techMap.get(techId);
        const techQuestions = poolByTech.get(techId) || [];
        const quota = baseQuotaPerTech + (remainder > 0 ? 1 : 0);
        if (remainder > 0) remainder--;

        const easy = shuffleArray(techQuestions.filter((q) => q.difficulty === 'easy'));
        const med = shuffleArray(techQuestions.filter((q) => q.difficulty === 'medium'));
        const hard = shuffleArray(techQuestions.filter((q) => q.difficulty === 'hard'));

        const techPicks: any[] = [];
        const pools = [med, easy, hard];
        let poolIdx = 0;

        while (techPicks.length < quota) {
          let pickedOne = false;
          for (let p = 0; p < pools.length; p++) {
            const currentPool = pools[(poolIdx + p) % pools.length];
            const q = currentPool.find((item) => !selectedIds.has(item._id.toString()));
            if (q) {
              techPicks.push(q);
              selectedIds.add(q._id.toString());
              poolIdx = (poolIdx + p + 1) % pools.length;
              pickedOne = true;
              break;
            }
          }
          if (!pickedOne) break;
        }

        for (const q of techPicks) {
          selectedQuestions.push({
            ...q,
            technologyName: tech?.name || 'General',
            technologySlug: tech?.slug || 'general',
          });
        }
      }
    } else {
      // easy, medium, or hard
      const baseQuotaPerTech = Math.floor(25 / techCount);
      let remainder = 25 % techCount;
      const shuffledTechs = shuffleArray(availableTechIds);

      for (const techId of shuffledTechs) {
        const tech = techMap.get(techId);
        const techQuestions = poolByTech.get(techId) || [];
        const quota = baseQuotaPerTech + (remainder > 0 ? 1 : 0);
        if (remainder > 0) remainder--;

        const targetMatching = shuffleArray(
          techQuestions.filter((q) => q.difficulty === difficulty)
        );

        const picked = targetMatching.slice(0, quota);
        for (const q of picked) {
          selectedIds.add(q._id.toString());
          selectedQuestions.push({
            ...q,
            technologyName: tech?.name || 'General',
            technologySlug: tech?.slug || 'general',
          });
        }
      }

      // If we still need more questions of the target difficulty, pick from any tech having spare matching questions
      if (selectedQuestions.length < 25) {
        const remainingTarget = shuffleArray(
          mcqQuestions.filter(
            (q) => q.difficulty === difficulty && !selectedIds.has(q._id.toString())
          )
        );
        for (const q of remainingTarget) {
          if (selectedQuestions.length >= 25) break;
          selectedIds.add(q._id.toString());
          const tech = techMap.get(q.technologyId?.toString());
          selectedQuestions.push({
            ...q,
            technologyName: tech?.name || 'General',
            technologySlug: tech?.slug || 'general',
          });
        }
      }
    }

    // Graceful fallback: If selected questions < 25, fill remaining from any available published MCQs
    if (selectedQuestions.length < 25) {
      const remainingPool = shuffleArray(
        mcqQuestions.filter((q) => !selectedIds.has(q._id.toString()))
      );
      const needed = 25 - selectedQuestions.length;
      for (let i = 0; i < needed && i < remainingPool.length; i++) {
        const q = remainingPool[i];
        selectedIds.add(q._id.toString());
        const tech = techMap.get(q.technologyId?.toString());
        selectedQuestions.push({
          ...q,
          technologyName: tech?.name || 'General',
          technologySlug: tech?.slug || 'general',
        });
      }
    }

    // Thoroughly randomize question sequence across all subjects
    const finalQuestions = shuffleArray(selectedQuestions.slice(0, 25));

    const formattedQuestions = finalQuestions.map((q, index) => {
      const { options, correctOption } = shuffleQuestionOptions(q.mcq!);
      const baseQ: any = {
        _id: q._id,
        questionIndex: index + 1,
        question: q.question,
        title: q.title || q.question,
        difficulty: q.difficulty,
        questionType: q.questionType,
        technologyId: q.technologyId,
        technologySlug: q.technologySlug,
        technologyName: q.technologyName,
        options,
      };

      // Security: Only expose correctOption and explanation in Practice Mode
      if (mode === 'practice') {
        baseQ.correctOption = correctOption;
        baseQ.explanation = q.explanation || q.answer;
      }

      return baseQ;
    });

    const includedTechNames = Array.from(new Set(formattedQuestions.map((q) => q.technologyName)));

    return {
      isAvailable: true,
      examType: 'mern',
      mode,
      difficulty,
      title: 'Full Stack & All-Subjects Test',
      technologies: includedTechNames,
      totalQuestions: 25,
      questions: formattedQuestions,
    };
  }

  /**
   * Save an exam attempt (optional userId for guest mode)
   * Calculates score authoritatively from server-side question database
   */
  static async recordAttempt(data: {
    userId?: string;
    examType: 'subject' | 'mern';
    mode?: 'practice' | 'exam';
    difficulty?: ExamDifficulty;
    technologyId?: string;
    technologySlug?: string;
    technologyName?: string;
    score?: number;
    totalQuestions?: number;
    correctAnswers?: number;
    wrongAnswers?: number;
    percentage?: number;
    performanceCategory?: PerformanceCategory;
    questions: {
      questionId: string;
      selectedOption?: string;
      correctOption?: string;
      isCorrect?: boolean;
      options?: { id: string; text: string }[];
      question?: string;
      explanation?: string;
      technologyName?: string;
    }[];
    startedAt?: Date;
    completedAt?: Date;
  }) {
    const rawQuestions = data.questions || [];
    const questionIds = rawQuestions.map((q) => q.questionId).filter((id) => mongoose.Types.ObjectId.isValid(id));
    const dbQuestions = await Question.find({ _id: { $in: questionIds } })
      .populate('topicId', 'name slug')
      .populate('technologyId', 'name slug')
      .lean();
    const questionMap = new Map(dbQuestions.map((q) => [q._id.toString(), q]));

    // Authoritative evaluation
    const evaluatedQuestions = rawQuestions.map((q, idx) => {
      const dbQ: any = questionMap.get(q.questionId?.toString());
      let correctOption = q.correctOption || '';
      let isCorrect = Boolean(q.isCorrect);
      let explanation = q.explanation || dbQ?.explanation || dbQ?.answer || '';
      const questionText = q.question || dbQ?.question || '';

      if (dbQ?.mcq) {
        const originalCorrectOption = dbQ.mcq.options?.find((o: any) => o.id === dbQ.mcq?.correctOption);
        const originalCorrectText = originalCorrectOption ? originalCorrectOption.text : dbQ.mcq.options?.[0]?.text;

        if (q.options && q.options.length > 0) {
          const matched = q.options.find((o) => o.text === originalCorrectText);
          if (matched) {
            correctOption = matched.id;
          }
        } else if (!correctOption) {
          correctOption = dbQ.mcq.correctOption;
        }
      }

      if (correctOption) {
        isCorrect = Boolean(q.selectedOption && q.selectedOption === correctOption);
      }

      const techName = q.technologyName || dbQ?.technologyId?.name || data.technologyName || 'General';
      const techSlug = dbQ?.technologyId?.slug || data.technologySlug || techName.toLowerCase().replace(/[^a-z0-9]/g, '');
      const topicName = dbQ?.topicId?.name || 'General';
      const topicId = dbQ?.topicId?._id?.toString() || dbQ?.topicId?.toString() || undefined;
      const difficulty: 'easy' | 'medium' | 'hard' = dbQ?.difficulty || 'medium';

      return {
        questionId: q.questionId,
        questionIndex: idx + 1,
        question: questionText,
        options: q.options || (dbQ?.mcq ? dbQ.mcq.options : []),
        selectedOption: q.selectedOption || '',
        correctOption,
        isCorrect,
        explanation,
        technologyName: techName,
        technologySlug: techSlug,
        topicName,
        topicId,
        difficulty,
      };
    });

    const calculatedCorrect = evaluatedQuestions.filter((q) => q.isCorrect).length;
    const totalQuestions = data.totalQuestions || (evaluatedQuestions.length > 0 ? evaluatedQuestions.length : 25);
    const calculatedWrong = totalQuestions - calculatedCorrect;

    // Server is authoritative when full question list or mode='exam' is provided; preserves legacy client score if partial/mock data
    const isFullOrExam = data.mode === 'exam' || rawQuestions.length >= totalQuestions;
    const authoritativeScore = isFullOrExam
      ? calculatedCorrect
      : (typeof data.score === 'number' ? data.score : calculatedCorrect);
    const authoritativeCorrect = isFullOrExam
      ? calculatedCorrect
      : (typeof data.correctAnswers === 'number' ? data.correctAnswers : calculatedCorrect);
    const authoritativeWrong = isFullOrExam
      ? calculatedWrong
      : (typeof data.wrongAnswers === 'number' ? data.wrongAnswers : calculatedWrong);
    const calculatedPercentage = Math.round((authoritativeScore / totalQuestions) * 100);
    const authoritativePercentage = isFullOrExam
      ? calculatedPercentage
      : (typeof data.percentage === 'number' ? data.percentage : calculatedPercentage);
    const authoritativeCategory = calculatePerformanceCategory(authoritativePercentage);
    const examMode = data.mode === 'exam' ? 'exam' : 'practice';
    const examDifficulty: ExamDifficulty = ['easy', 'medium', 'hard', 'mixed'].includes(
      data.difficulty as any
    )
      ? (data.difficulty as ExamDifficulty)
      : 'mixed';

    // Calculate comprehensive exam analysis
    const analysis = calculateExamAnalysis({
      evaluatedQuestions,
      totalQuestions,
      authoritativeScore,
      authoritativePercentage,
      authoritativeCategory,
    });

    // If user is authenticated, persist to MongoDB
    if (data.userId && mongoose.Types.ObjectId.isValid(data.userId)) {
      const attempt = await ExamAttempt.create({
        userId: new mongoose.Types.ObjectId(data.userId),
        examType: data.examType,
        mode: examMode,
        difficulty: examDifficulty,
        technologyId: data.technologyId && mongoose.Types.ObjectId.isValid(data.technologyId)
          ? new mongoose.Types.ObjectId(data.technologyId)
          : undefined,
        technologySlug: data.technologySlug,
        technologyName: data.technologyName,
        score: authoritativeScore,
        totalQuestions,
        correctAnswers: authoritativeCorrect,
        wrongAnswers: authoritativeWrong,
        percentage: authoritativePercentage,
        performanceCategory: authoritativeCategory,
        questions: evaluatedQuestions.map((q) => ({
          questionId: new mongoose.Types.ObjectId(q.questionId),
          selectedOption: q.selectedOption || '',
          correctOption: q.correctOption,
          isCorrect: q.isCorrect,
        })),
        analysis,
        startedAt: data.startedAt || new Date(),
        completedAt: data.completedAt || new Date(),
      });

      const attemptObj = attempt.toObject();
      return {
        ...attemptObj,
        analysis,
        reviewItems: evaluatedQuestions,
      };
    }

    // For guest users, return the structured attempt without persisting to DB
    return {
      _id: new mongoose.Types.ObjectId(),
      examType: data.examType,
      mode: examMode,
      difficulty: examDifficulty,
      technologyId: data.technologyId,
      technologySlug: data.technologySlug,
      technologyName: data.technologyName,
      score: authoritativeScore,
      totalQuestions,
      correctAnswers: authoritativeCorrect,
      wrongAnswers: authoritativeWrong,
      percentage: authoritativePercentage,
      performanceCategory: authoritativeCategory,
      questions: evaluatedQuestions.map((q) => ({
        questionId: q.questionId,
        selectedOption: q.selectedOption || '',
        correctOption: q.correctOption,
        isCorrect: q.isCorrect,
      })),
      analysis,
      reviewItems: evaluatedQuestions,
      isGuest: true,
      completedAt: data.completedAt || new Date(),
    };
  }

  /**
   * Get attempt history for an authenticated user
   */
  static async getUserAttempts(userId: string) {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return [];
    }

    const attempts = await ExamAttempt.find({ userId: new mongoose.Types.ObjectId(userId) })
      .sort({ createdAt: -1 })
      .limit(50)
      .lean();

    return attempts;
  }
}
