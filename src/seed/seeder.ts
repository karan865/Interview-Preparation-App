import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';
import { connectDB, disconnectDB } from '../config/database';
import { env } from '../config/env';
import { PreparationLevel } from '../models/PreparationLevel';
import { Technology } from '../models/Technology';
import { Topic } from '../models/Topic';
import { User } from '../models/User';
import { Question } from '../models/Question';
import { UserQuestionProgress } from '../models/UserQuestionProgress';
import {
  seedPreparationLevels,
  seedTechnologies,
  seedTopics,
} from './seedData';
import { allSeedQuestions } from './content';
import { createDuplicateKey, normalizeWhitespace } from '../utils/questionNormalizer';
import { seedOrUpdateMCQs } from './seedMcqs';

export interface SeederOptions {
  reset?: boolean;
  disconnect?: boolean;
}

export const runSeeder = async (options: SeederOptions | boolean = true) => {
  const opts: SeederOptions =
    typeof options === 'boolean'
      ? { disconnect: options, reset: false }
      : { disconnect: true, reset: false, ...options };

  try {
    if (mongoose.connection.readyState !== 1) {
      await connectDB();
    }

    let deletedTechCount = 0;
    let deletedTopicCount = 0;
    let deletedQuestionCount = 0;

    // 1. If reset mode: remove existing interview content only (preserve users)
    if (opts.reset) {
      deletedQuestionCount = await Question.countDocuments();
      deletedTopicCount = await Topic.countDocuments();
      deletedTechCount = await Technology.countDocuments();

      await Promise.all([
        Question.deleteMany({}),
        Topic.deleteMany({}),
        Technology.deleteMany({}),
        UserQuestionProgress.deleteMany({}), // Remove orphaned progress from old deleted questions
      ]);
    }

    // 2. Sync / Seed Preparation Levels (Preserve existing if already populated)
    const existingLevelsCount = await PreparationLevel.countDocuments();
    let createdLevels;
    if (existingLevelsCount === 0) {
      createdLevels = await PreparationLevel.insertMany(seedPreparationLevels);
    } else {
      createdLevels = await PreparationLevel.find();
    }
    const levelMap = new Map(createdLevels.map((l) => [l.slug, l._id]));

    // 3. Seed Interview Technologies
    const createdTechnologies = await Technology.insertMany(seedTechnologies);
    const techMap = new Map(createdTechnologies.map((t) => [t.slug, t._id]));

    // 4. Seed Topics
    const topicsToInsert = seedTopics
      .filter((t) => techMap.has(t.technologySlug))
      .map((t) => ({
        technologyId: techMap.get(t.technologySlug)!,
        name: t.name,
        slug: t.slug,
        description: t.description,
        order: t.order,
        isActive: true,
      }));
    const createdTopics = await Topic.insertMany(topicsToInsert);
    const topicMap = new Map(
      createdTopics.map((t) => [`${t.technologyId.toString()}_${t.slug}`, t._id])
    );

    // 5. Ensure Default Admin User exists (DO NOT delete or modify regular users)
    const existingAdmin = await User.findOne({ email: env.ADMIN_EMAIL.toLowerCase() });
    if (!existingAdmin) {
      const salt = await bcrypt.genSalt(10);
      const adminPasswordHash = await bcrypt.hash(env.ADMIN_PASSWORD, salt);
      const reactId = techMap.get('react');
      const nodejsId = techMap.get('nodejs');
      const intermediateLevelId = levelMap.get('intermediate');

      await User.create({
        name: env.ADMIN_NAME,
        email: env.ADMIN_EMAIL.toLowerCase(),
        passwordHash: adminPasswordHash,
        role: 'admin',
        selectedTechnologies: [reactId, nodejsId].filter(Boolean),
        selectedPreparationLevel: intermediateLevelId,
      });
    }

    // 6. Seed Public Canonical Interview Questions with Duplicate Prevention & Normalization
    let insertedQuestionCount = 0;
    const seenQuestionKeys = new Set<string>();
    const statsByTech: Record<string, { name: string; topicsCount: number; questionsCount: number }> = {};

    for (const tech of createdTechnologies) {
      const techTopics = createdTopics.filter((t) => t.technologyId.toString() === tech._id.toString());
      statsByTech[tech.slug] = {
        name: tech.name,
        topicsCount: techTopics.length,
        questionsCount: 0,
      };
    }

    for (const q of allSeedQuestions) {
      const technologyId = techMap.get(q.technologySlug);
      if (!technologyId) {
        console.warn(`[Seeder] Skipping question: technology slug "${q.technologySlug}" not found.`);
        continue;
      }

      const resolvedTopicSlug = (q.technologySlug === 'react' && q.topicSlug === 'events-forms') ? 'forms' : q.topicSlug;
      const topicId = topicMap.get(`${technologyId.toString()}_${resolvedTopicSlug}`);
      if (!topicId) {
        console.warn(`[Seeder] Skipping question: topic slug "${q.topicSlug}" not found under "${q.technologySlug}".`);
        continue;
      }

      // Duplicate prevention: check normalized question text within the technology
      const normalizedQuestion = normalizeWhitespace(q.question);
      const dupKey = `${technologyId.toString()}_${createDuplicateKey(normalizedQuestion)}`;
      if (seenQuestionKeys.has(dupKey)) {
        console.warn(`[Seeder] Skipping duplicate question in "${q.technologySlug}": "${normalizedQuestion}"`);
        continue;
      }
      seenQuestionKeys.add(dupKey);

      // Resolve preparation levels
      const levelSlugs = q.preparationLevels || q.preparationLevelSlugs || ['junior'];
      let preparationLevels = levelSlugs
        .map((s) => levelMap.get(s))
        .filter((id): id is any => Boolean(id));

      if (preparationLevels.length === 0 && levelMap.has('junior')) {
        preparationLevels = [levelMap.get('junior')!];
      }

      await Question.create({
        question: normalizedQuestion,
        title: q.title ? normalizeWhitespace(q.title) : undefined,
        technologyId,
        topicId,
        preparationLevels,
        difficulty: q.difficulty,
        questionType: q.questionType,
        answer: normalizeWhitespace(q.answer),
        explanation: q.explanation ? normalizeWhitespace(q.explanation) : undefined,
        analogy: q.analogy ? normalizeWhitespace(q.analogy) : undefined,
        importantPoints: q.importantPoints || [],
        codeExamples: q.codeExamples || [],
        comparisons: q.comparisons || [],
        interviewAnswer: q.interviewAnswer ? normalizeWhitespace(q.interviewAnswer) : undefined,
        interviewTips: Array.isArray(q.interviewTips) ? q.interviewTips : (q.interviewTips ? [q.interviewTips] : []),
        commonMistakes: q.commonMistakes || [],
        followUpQuestions: q.followUpQuestions || [],
        tags: q.tags || [],
        isImportant: q.isImportant ?? false,
        mcq: q.mcq ? { enabled: q.mcq.enabled, options: q.mcq.options, correctOption: q.mcq.correctOption } : undefined,
        source: q.source || 'ai-generated',
        sourceReference: q.sourceReference || 'Curated interview preparation content',
        status: q.status || 'published',
      });

      insertedQuestionCount++;
      if (statsByTech[q.technologySlug]) {
        statsByTech[q.technologySlug].questionsCount++;
      }
    }

    // 7. Output formatted summary table
    console.log(`\n==================================================`);
    console.log(`INTERVIEW PREPARATION CONTENT SUMMARY`);
    console.log(`==================================================`);
    console.log(`Technology   | Topics | Questions`);
    console.log(`-------------+--------+----------`);
    for (const slug of Object.keys(statsByTech)) {
      const item = statsByTech[slug];
      const techPadded = item.name.padEnd(12, ' ');
      const topicsPadded = String(item.topicsCount).padStart(6, ' ');
      const questionsPadded = String(item.questionsCount).padStart(9, ' ');
      console.log(`${techPadded} | ${topicsPadded} | ${questionsPadded}`);
    }
    console.log(`-------------+--------+----------`);
    console.log(`Total        |    100 | ${String(insertedQuestionCount).padStart(9, ' ')}`);
    console.log(`==================================================\n`);

    // 6.5. Seed / update curated Interview MCQs
    const mcqStats = await seedOrUpdateMCQs();
    console.log(`[Seeder] Seeded/Updated ${mcqStats.created + mcqStats.updated} MCQs (${mcqStats.created} created, ${mcqStats.updated} updated).`);

    if (opts.reset) {
      console.log(`[Seeder] Reset successfully executed. Deleted ${deletedTechCount} techs, ${deletedTopicCount} topics, ${deletedQuestionCount} questions.`);
    } else {
      console.log(`[Seeder] Seeded ${createdTechnologies.length} technologies, ${createdTopics.length} topics, and ${insertedQuestionCount} canonical questions.`);
    }
  } catch (err: any) {
    console.error('[Seeder] Seeding failed with error:', err);
    throw err;
  } finally {
    if (opts.disconnect) {
      await disconnectDB();
    }
  }
};

// Execute directly if invoked via CLI
if (require.main === module) {
  const isReset = process.argv.includes('--reset');
  runSeeder({ reset: isReset, disconnect: true })
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
