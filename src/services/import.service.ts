import mongoose, { Types } from 'mongoose';
import { Question } from '../models/Question';
import { Technology } from '../models/Technology';
import { Topic } from '../models/Topic';
import { PreparationLevel } from '../models/PreparationLevel';
import { slugify } from '../utils/slugify';
import {
  normalizeQuestionPayload,
  createDuplicateKey,
  normalizeWhitespace,
} from '../utils/questionNormalizer';

export interface ImportErrorItem {
  index: number;
  field: string;
  message: string;
  question?: string;
}

export interface ImportResult {
  inserted: number;
  skipped: number;
  errors: ImportErrorItem[];
}

export interface ImportPreviewResult {
  total: number;
  valid: number;
  duplicates: number;
  errors: number;
  newTechnologies: string[];
  newTopics: string[];
  errorDetails: ImportErrorItem[];
  questions: any[];
}

export class ImportService {
  /**
   * Validates a single question item according to the canonical specification.
   */
  static validateQuestionItem(
    q: any,
    index: number
  ): { isValid: boolean; errors: ImportErrorItem[] } {
    const errors: ImportErrorItem[] = [];

    if (!q || typeof q !== 'object') {
      errors.push({
        index,
        field: 'root',
        message: 'Question item must be a valid JSON object',
      });
      return { isValid: false, errors };
    }

    // Required fields: technology, topic, question, answer
    const questionText = q.question || q.title || '';
    if (!questionText || typeof questionText !== 'string' || !questionText.trim()) {
      errors.push({
        index,
        field: 'question',
        message: 'Question text is required and must be at least 3 characters',
        question: 'Unknown',
      });
    } else if (questionText.trim().length < 3) {
      errors.push({
        index,
        field: 'question',
        message: 'Question text must be at least 3 characters',
        question: questionText.trim(),
      });
    }

    if (!q.technology || typeof q.technology !== 'string' || !q.technology.trim()) {
      errors.push({
        index,
        field: 'technology',
        message: 'Technology name or ID is required',
        question: questionText || 'Unknown',
      });
    }

    if (!q.topic || typeof q.topic !== 'string' || !q.topic.trim()) {
      errors.push({
        index,
        field: 'topic',
        message: 'Topic name or ID is required',
        question: questionText || 'Unknown',
      });
    }

    if (q.answer === undefined || q.answer === null || String(q.answer).trim() === '') {
      errors.push({
        index,
        field: 'answer',
        message: 'Answer is required',
        question: questionText || 'Unknown',
      });
    }

    // Optional field types validation
    if (q.difficulty !== undefined && q.difficulty !== null) {
      const diff = String(q.difficulty).toLowerCase().trim();
      if (!['easy', 'medium', 'hard'].includes(diff)) {
        errors.push({
          index,
          field: 'difficulty',
          message: `Invalid difficulty '${q.difficulty}'. Must be 'easy', 'medium', or 'hard'`,
          question: questionText || 'Unknown',
        });
      }
    }

    if (q.status !== undefined && q.status !== null) {
      const st = String(q.status).toLowerCase().trim();
      if (!['draft', 'published', 'archived'].includes(st)) {
        errors.push({
          index,
          field: 'status',
          message: `Invalid status '${q.status}'. Must be 'draft', 'published', or 'archived'`,
          question: questionText || 'Unknown',
        });
      }
    }

    if (q.source !== undefined && q.source !== null) {
      const src = String(q.source).toLowerCase().trim();
      const validSources = ['personal-notes', 'manually-added', 'web-research', 'ai-generated', 'imported', 'curated'];
      if (!validSources.includes(src)) {
        errors.push({
          index,
          field: 'source',
          message: `Invalid source '${q.source}'. Must be one of: ${validSources.join(', ')}`,
          question: questionText || 'Unknown',
        });
      }
    }

    if (q.preparationLevels !== undefined && !Array.isArray(q.preparationLevels)) {
      errors.push({
        index,
        field: 'preparationLevels',
        message: 'preparationLevels must be an array of level names or IDs',
        question: questionText || 'Unknown',
      });
    }

    if (q.tags !== undefined && !Array.isArray(q.tags)) {
      errors.push({
        index,
        field: 'tags',
        message: 'tags must be an array of strings',
        question: questionText || 'Unknown',
      });
    }

    if (q.codeExamples !== undefined) {
      if (!Array.isArray(q.codeExamples)) {
        errors.push({
          index,
          field: 'codeExamples',
          message: 'codeExamples must be an array of code objects',
          question: questionText || 'Unknown',
        });
      } else {
        q.codeExamples.forEach((ce: any, cIdx: number) => {
          if (!ce || typeof ce !== 'object' || !ce.code || typeof ce.code !== 'string' || !ce.code.trim()) {
            errors.push({
              index,
              field: `codeExamples[${cIdx}].code`,
              message: 'Code snippet is required in codeExamples item',
              question: questionText || 'Unknown',
            });
          }
        });
      }
    }

    if (q.steps !== undefined) {
      if (!Array.isArray(q.steps)) {
        errors.push({
          index,
          field: 'steps',
          message: 'steps must be an array of step objects',
          question: questionText || 'Unknown',
        });
      } else {
        q.steps.forEach((st: any, sIdx: number) => {
          if (!st || typeof st !== 'object' || !st.title || typeof st.title !== 'string' || !st.title.trim()) {
            errors.push({
              index,
              field: `steps[${sIdx}].title`,
              message: 'Step title is required in steps item',
              question: questionText || 'Unknown',
            });
          }
        });
      }
    }

    if (q.comparisons !== undefined && !Array.isArray(q.comparisons)) {
      errors.push({
        index,
        field: 'comparisons',
        message: 'comparisons must be an array of comparison objects',
        question: questionText || 'Unknown',
      });
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  /**
   * Dry-Run Import Preview:
   * Validates questions, detects duplicates, resolves entities, and previews results
   * WITHOUT making any changes to MongoDB.
   */
  static async previewImport(rawQuestions: any[]): Promise<ImportPreviewResult> {
    const errorDetails: ImportErrorItem[] = [];
    const previewQuestions: any[] = [];
    let duplicates = 0;
    let valid = 0;

    const newTechnologiesSet = new Set<string>();
    const newTopicsSet = new Set<string>();

    // Pre-cache known DB technologies, topics, and levels
    const [allTechs, allTopics, allLevels] = await Promise.all([
      Technology.find().lean(),
      Topic.find().lean(),
      PreparationLevel.find().lean(),
    ]);

    const techSlugMap = new Map(allTechs.map((t) => [t.slug.toLowerCase(), t]));
    const techNameMap = new Map(allTechs.map((t) => [t.name.toLowerCase(), t]));
    const techIdMap = new Map(allTechs.map((t) => [t._id.toString(), t]));

    const topicMap = new Map(allTopics.map((t) => [`${t.technologyId.toString()}_${t.slug.toLowerCase()}`, t]));
    const topicNameMap = new Map(allTopics.map((t) => [`${t.technologyId.toString()}_${t.name.toLowerCase()}`, t]));

    // Preload existing questions duplicate keys from DB
    const existingQuestions = await Question.find({}, 'technologyId question title').lean();
    const existingDbKeys = new Set<string>();
    existingQuestions.forEach((q) => {
      const techIdStr = q.technologyId?.toString();
      if (techIdStr) {
        existingDbKeys.add(`${techIdStr}_${createDuplicateKey(q.question || q.title)}`);
      }
    });

    const batchKeys = new Set<string>();

    for (let i = 0; i < rawQuestions.length; i++) {
      const raw = rawQuestions[i];
      const validation = this.validateQuestionItem(raw, i);

      if (!validation.isValid) {
        errorDetails.push(...validation.errors);
        continue;
      }

      const normalized = normalizeQuestionPayload(raw);

      // Resolve technology
      const techKey = normalized.technology.toLowerCase();
      let techDoc = techIdMap.get(normalized.technology) || techSlugMap.get(slugify(techKey)) || techNameMap.get(techKey);
      let techIdStr: string;

      if (!techDoc) {
        newTechnologiesSet.add(normalized.technology);
        techIdStr = `temp_tech_${slugify(normalized.technology)}`;
      } else {
        techIdStr = techDoc._id.toString();
      }

      // Resolve topic
      const topicKey = normalized.topic.toLowerCase();
      let topicDoc = topicMap.get(`${techIdStr}_${slugify(topicKey)}`) || topicNameMap.get(`${techIdStr}_${topicKey}`);

      if (!topicDoc) {
        newTopicsSet.add(`${normalized.technology} > ${normalized.topic}`);
      }

      // Check Duplicate
      const dupKey = `${techIdStr}_${createDuplicateKey(normalized.question)}`;
      if (existingDbKeys.has(dupKey) || batchKeys.has(dupKey)) {
        duplicates++;
        continue;
      }

      batchKeys.add(dupKey);
      valid++;
      previewQuestions.push({
        index: i,
        technology: normalized.technology,
        topic: normalized.topic,
        question: normalized.question,
        difficulty: normalized.difficulty,
        questionType: normalized.questionType,
        isImportant: normalized.isImportant,
        status: normalized.status,
        source: normalized.source,
        hasCodeExamples: normalized.codeExamples.length > 0,
        hasComparisons: normalized.comparisons.length > 0,
        hasSteps: normalized.steps.length > 0,
      });
    }

    return {
      total: rawQuestions.length,
      valid,
      duplicates,
      errors: errorDetails.length,
      newTechnologies: Array.from(newTechnologiesSet),
      newTopics: Array.from(newTopicsSet),
      errorDetails,
      questions: previewQuestions,
    };
  }

  /**
   * Resilient Bulk Import:
   * Normalizes content, validates per item, inserts valid questions, skips duplicates,
   * and reports errors without allowing one bad question to break the entire import.
   */
  static async importQuestions(rawQuestions: any[]): Promise<ImportResult> {
    let inserted = 0;
    let skipped = 0;
    const errors: ImportErrorItem[] = [];

    // Cache lookup maps
    const techCache = new Map<string, Types.ObjectId>();
    const topicCache = new Map<string, Types.ObjectId>();
    const levelCache = new Map<string, Types.ObjectId>();

    // Preload preparation levels
    const allLevels = await PreparationLevel.find().lean();
    allLevels.forEach((lvl) => {
      levelCache.set(lvl.slug.toLowerCase(), lvl._id as Types.ObjectId);
      levelCache.set(lvl.name.toLowerCase(), lvl._id as Types.ObjectId);
    });

    // Cache existing questions duplicate keys
    const existingQuestions = await Question.find({}, 'technologyId question title').lean();
    const existingKeys = new Set<string>();
    existingQuestions.forEach((q) => {
      const techIdStr = q.technologyId?.toString();
      if (techIdStr) {
        existingKeys.add(`${techIdStr}_${createDuplicateKey(q.question || q.title)}`);
      }
    });

    const batchKeys = new Set<string>();

    for (let i = 0; i < rawQuestions.length; i++) {
      const raw = rawQuestions[i];
      const validation = this.validateQuestionItem(raw, i);

      if (!validation.isValid) {
        errors.push(...validation.errors);
        continue;
      }

      const normalized = normalizeQuestionPayload(raw);

      try {
        // 1. Resolve or create Technology
        const techKey = normalized.technology.toLowerCase();
        let technologyId = techCache.get(techKey);

        if (!technologyId) {
          let techDoc: any = null;
          if (mongoose.Types.ObjectId.isValid(normalized.technology)) {
            techDoc = await Technology.findById(normalized.technology);
          } else {
            techDoc = await Technology.findOne({
              $or: [
                { slug: slugify(normalized.technology) },
                { name: new RegExp(`^${normalized.technology.trim()}$`, 'i') },
              ],
            });
          }

          if (!techDoc) {
            techDoc = await Technology.create({
              name: normalized.technology,
              slug: slugify(normalized.technology),
              category: 'other',
              order: 99,
            });
          }

          technologyId = techDoc._id as Types.ObjectId;
          techCache.set(techKey, technologyId);
        }

        // 2. Resolve or create Topic under that Technology
        const topicKey = `${technologyId.toString()}_${normalized.topic.toLowerCase()}`;
        let topicId = topicCache.get(topicKey);

        if (!topicId) {
          let topicDoc: any = null;
          if (mongoose.Types.ObjectId.isValid(normalized.topic)) {
            topicDoc = await Topic.findById(normalized.topic);
          } else {
            topicDoc = await Topic.findOne({
              technologyId,
              $or: [
                { slug: slugify(normalized.topic) },
                { name: new RegExp(`^${normalized.topic.trim()}$`, 'i') },
              ],
            });
          }

          if (!topicDoc) {
            topicDoc = await Topic.create({
              technologyId,
              name: normalized.topic,
              slug: slugify(normalized.topic),
            });
          }

          topicId = topicDoc._id as Types.ObjectId;
          topicCache.set(topicKey, topicId);
        }

        // 3. Resolve Preparation Levels
        const resolvedLevelIds: Types.ObjectId[] = [];
        if (Array.isArray(normalized.preparationLevels)) {
          for (const lvlName of normalized.preparationLevels) {
            const key = String(lvlName).trim().toLowerCase();
            let lvlId = levelCache.get(key);

            if (!lvlId && mongoose.Types.ObjectId.isValid(lvlName)) {
              lvlId = new Types.ObjectId(lvlName);
            }

            if (!lvlId) {
              let lvlDoc = await PreparationLevel.findOne({
                $or: [{ slug: slugify(key) }, { name: new RegExp(`^${key}$`, 'i') }],
              });

              if (!lvlDoc) {
                lvlDoc = await PreparationLevel.create({
                  name: normalizeWhitespace(lvlName),
                  slug: slugify(lvlName),
                  order: 10,
                });
              }

              lvlId = lvlDoc._id as Types.ObjectId;
              levelCache.set(key, lvlId);
            }

            if (lvlId && !resolvedLevelIds.some((id) => id.equals(lvlId!))) {
              resolvedLevelIds.push(lvlId);
            }
          }
        }

        // 4. Robust Duplicate Detection (Both DB and intra-batch)
        const dupKey = `${technologyId.toString()}_${createDuplicateKey(normalized.question)}`;
        if (existingKeys.has(dupKey) || batchKeys.has(dupKey)) {
          skipped++;
          continue;
        }

        batchKeys.add(dupKey);
        existingKeys.add(dupKey);

        // 5. Insert Valid Normalized Question
        await Question.create({
          question: normalized.question,
          title: normalized.title,
          technologyId,
          topicId,
          preparationLevels: resolvedLevelIds,
          difficulty: normalized.difficulty,
          questionType: normalized.questionType,
          answer: normalized.answer,
          explanation: normalized.explanation,
          analogy: normalized.analogy,
          importantPoints: normalized.importantPoints,
          codeExamples: normalized.codeExamples,
          comparisons: normalized.comparisons,
          examples: normalized.examples,
          steps: normalized.steps,
          interviewAnswer: normalized.interviewAnswer,
          interviewTips: normalized.interviewTips,
          commonMistakes: normalized.commonMistakes,
          followUpQuestions: normalized.followUpQuestions,
          tags: normalized.tags,
          isImportant: normalized.isImportant,
          source: normalized.source,
          sourceReference: normalized.sourceReference,
          status: normalized.status,
        });

        inserted++;
      } catch (err: any) {
        errors.push({
          index: i,
          field: 'database',
          message: err.message || 'Database insertion error',
          question: normalized.question,
        });
      }
    }

    return {
      inserted,
      skipped,
      errors,
    };
  }
}
