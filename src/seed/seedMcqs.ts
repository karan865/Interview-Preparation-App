import mongoose from 'mongoose';
import { Technology } from '../models/Technology';
import { Topic } from '../models/Topic';
import { Question } from '../models/Question';
import { PreparationLevel } from '../models/PreparationLevel';
import {
  reactMCQs,
  nodeMCQs,
  expressMCQs,
  mongoMCQs,
  javascriptMCQs,
  CuratedMCQ,
} from './content/mcq/mcqSeedData';
import { additionalCuratedMCQs } from './content/mcq/additionalMcqData';
import { normalizeWhitespace } from '../utils/questionNormalizer';

export const allCuratedMCQs: CuratedMCQ[] = [
  ...reactMCQs,
  ...nodeMCQs,
  ...expressMCQs,
  ...mongoMCQs,
  ...javascriptMCQs,
  ...additionalCuratedMCQs,
];

export async function seedOrUpdateMCQs(): Promise<{ updated: number; created: number }> {
  let updated = 0;
  let created = 0;

  const technologies = await Technology.find();
  const techMap = new Map(technologies.map((t) => [t.slug, t._id]));

  const topics = await Topic.find();
  const levels = await PreparationLevel.find();
  const defaultLevel = levels.find((l) => l.slug === 'intermediate')?._id || levels[0]?._id;

  for (const mcqItem of allCuratedMCQs) {
    let techId = techMap.get(mcqItem.technologySlug);
    if (!techId && mcqItem.technologySlug === 'express') {
      techId = techMap.get('expressjs');
    }
    if (!techId && mcqItem.technologySlug === 'node') {
      techId = techMap.get('nodejs');
    }
    if (!techId) {
      console.warn(`[MCQ Seeder] Technology not found: ${mcqItem.technologySlug}`);
      continue;
    }

    // Find matching topic under this technology or fallback to first topic
    let topic = topics.find(
      (t) => t.technologyId.toString() === techId.toString() && (t.slug === mcqItem.topicSlug || t.slug.includes(mcqItem.topicSlug.split('-')[0]))
    );
    if (!topic) {
      topic = topics.find((t) => t.technologyId.toString() === techId.toString());
    }

    const normalizedQuestion = normalizeWhitespace(mcqItem.question);

    // Look for existing question with this text under this technology
    const existing = await Question.findOne({
      technologyId: techId,
      question: normalizedQuestion,
    });

    if (existing) {
      existing.mcq = mcqItem.mcq;
      if (!existing.explanation && mcqItem.explanation) {
        existing.explanation = mcqItem.explanation;
      }
      await existing.save();
      updated++;
    } else {
      await Question.create({
        question: normalizedQuestion,
        title: normalizedQuestion,
        technologyId: techId,
        topicId: topic ? topic._id : new mongoose.Types.ObjectId(),
        preparationLevels: defaultLevel ? [defaultLevel] : [],
        difficulty: mcqItem.difficulty,
        questionType: mcqItem.questionType,
        answer: mcqItem.answer,
        explanation: mcqItem.explanation,
        mcq: mcqItem.mcq,
        isImportant: mcqItem.isImportant,
        source: 'curated',
        status: 'published',
      });
      created++;
    }
  }

  return { updated, created };
}

if (require.main === module) {
  const { connectDB, disconnectDB } = require('../config/database');
  connectDB()
    .then(() => seedOrUpdateMCQs())
    .then((stats: any) => {
      console.log(`[MCQ Seeder CLI] Successfully updated: ${stats.updated}, created: ${stats.created}`);
      return disconnectDB();
    })
    .then(() => process.exit(0))
    .catch((err: any) => {
      console.error('[MCQ Seeder CLI] Error:', err);
      process.exit(1);
    });
}
