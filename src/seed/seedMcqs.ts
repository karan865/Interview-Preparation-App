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
import { advancedMCQs } from './content/mcq/advancedMcqs';
import { normalizeWhitespace } from '../utils/questionNormalizer';

export const allCuratedMCQs: CuratedMCQ[] = [
  ...reactMCQs,
  ...nodeMCQs,
  ...expressMCQs,
  ...mongoMCQs,
  ...javascriptMCQs,
  ...additionalCuratedMCQs,
  ...advancedMCQs,
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
    try {
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

      const techIdStr = techId?.toString();
      const topicSlugPrefix = mcqItem.topicSlug ? mcqItem.topicSlug.split('-')[0] : '';

      // Find matching topic under this technology or fallback to first topic
      let topic = topics.find(
        (t) =>
          t?.technologyId &&
          t.technologyId.toString() === techIdStr &&
          (t.slug === mcqItem.topicSlug || (topicSlugPrefix && t.slug && t.slug.includes(topicSlugPrefix)))
      );
      if (!topic) {
        topic = topics.find((t) => t?.technologyId && t.technologyId.toString() === techIdStr);
      }
      if (!topic && topics.length > 0) {
        topic = topics[0];
      }

      const normalizedQuestion = normalizeWhitespace(mcqItem.question);

      // Look for existing question with this text under this technology
      let existing = await Question.findOne({
        technologyId: techId,
        question: normalizedQuestion,
      });

      if (!existing) {
        // Fallback 1: fuzzy match first 25 characters
        const prefix = normalizedQuestion.substring(0, 25).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        existing = await Question.findOne({
          technologyId: techId,
          question: { $regex: '^' + prefix, $options: 'i' },
          'mcq.enabled': { $ne: true }
        });
      }

      if (!existing) {
        // Fallback 2: Any question in this tech without an MCQ
        existing = await Question.findOne({
          technologyId: techId,
          'mcq.enabled': { $ne: true }
        });
      }

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
          difficulty: mcqItem.difficulty || 'intermediate',
          questionType: mcqItem.questionType || 'conceptual',
          answer: mcqItem.answer,
          explanation: mcqItem.explanation,
          mcq: mcqItem.mcq,
          isImportant: mcqItem.isImportant ?? false,
          source: 'curated',
          status: 'published',
        });
        created++;
      }
    } catch (itemErr: any) {
      console.warn(`[MCQ Seeder] Skipping MCQ due to warning: ${itemErr.message}`);
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
