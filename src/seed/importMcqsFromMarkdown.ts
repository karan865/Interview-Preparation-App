import fs from 'fs';
import path from 'path';
import mongoose from 'mongoose';
import { connectDB, disconnectDB } from '../config/database';
import { Technology } from '../models/Technology';
import { Topic } from '../models/Topic';
import { Question } from '../models/Question';
import { PreparationLevel } from '../models/PreparationLevel';
import { normalizeWhitespace } from '../utils/questionNormalizer';

const MCQ_DIR = 'd:\\1_programmins\\2\\backend\\interview app questions\\MCQ Questions';

const filesToProcess = [
  { file: 'Node_JS_MCQ_Questions.md', topicSlug: 'mcq-nodejs' },
  { file: 'React_JS_MCQ_Questions.md', topicSlug: 'mcq-react' },
  { file: 'Advance_Question_Bank-1_Proper_MCQ.md', topicSlug: 'mcq-advanced-1' },
  { file: 'All_Advanced_Questions_Bank_2_Proper_MCQ.md', topicSlug: 'mcq-advanced-2' },
  { file: 'All_Advanced_Questions_Bank_3_Proper_MCQ.md', topicSlug: 'mcq-advanced-3' },
];

function parseMarkdownMCQs(content: string) {
  const questions: any[] = [];
  const lines = content.split('\n');
  
  let currentQuestion: any = null;
  let explanationText = '';
  let inExplanation = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Match ## 1. Question Title
    const questionMatch = line.match(/^##\s+\d+\.\s+(.+)$/);
    if (questionMatch) {
      if (currentQuestion) {
        if (explanationText) {
          currentQuestion.explanation = explanationText.trim();
        }
        questions.push(currentQuestion);
      }
      currentQuestion = {
        question: questionMatch[1],
        options: [],
        correctOption: null,
        explanation: '',
      };
      explanationText = '';
      inExplanation = false;
      continue;
    }

    if (!currentQuestion) continue;

    // Match - **A.** Option Text
    const optionMatch = line.match(/^[*-]\s+\*\*([A-D])\.\*\*\s+(.+)$/);
    if (optionMatch && !inExplanation) {
      const optionId = optionMatch[1];
      const optionText = optionMatch[2];
      currentQuestion.options.push({ id: optionId, text: optionText });
      continue;
    }

    // Match **Answer:** B.
    const answerMatch = line.match(/^\*\*Answer:\*\*\s+([A-D])\./i);
    if (answerMatch && !inExplanation) {
      currentQuestion.correctOption = answerMatch[1].toUpperCase();
      continue;
    }

    // Match **Explanation:** text
    const explanationMatch = line.match(/^\*\*Explanation:\*\*\s*(.*)$/i);
    if (explanationMatch) {
      inExplanation = true;
      explanationText += explanationMatch[1] + '\n';
      continue;
    }

    if (inExplanation && line && !line.startsWith('---')) {
      explanationText += line + '\n';
    }
  }

  if (currentQuestion) {
    if (explanationText) {
      currentQuestion.explanation = explanationText.trim();
    }
    questions.push(currentQuestion);
  }

  return questions;
}

async function run() {
  await connectDB();
  console.log('Connected to DB');

  let tech = await Technology.findOne({ slug: 'mcq-questions' });
  if (!tech) {
    console.log('Technology "MCQ Questions" not found! Creating it...');
    tech = await Technology.create({
      name: 'MCQ Questions',
      slug: 'mcq-questions',
      category: 'other',
      description: 'A dedicated collection of all MCQ questions for practice.',
      order: 14,
    });
  }

  const levels = await PreparationLevel.find();
  const defaultLevel = levels.find((l) => l.slug === 'intermediate')?._id || levels[0]?._id;

  for (const item of filesToProcess) {
    const filePath = path.join(MCQ_DIR, item.file);
    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`);
      continue;
    }

    let topic = await Topic.findOne({ technologyId: tech._id, slug: item.topicSlug });
    if (!topic) {
      console.log(`Topic not found for slug: ${item.topicSlug}. Creating it...`);
      topic = await Topic.create({
        technologyId: tech._id,
        name: item.topicSlug,
        slug: item.topicSlug,
        description: 'MCQ Topic',
        order: 1,
        isActive: true
      });
    }

    console.log(`Processing file: ${item.file}`);
    const content = fs.readFileSync(filePath, 'utf-8');
    const parsedQuestions = parseMarkdownMCQs(content);
    console.log(`Found ${parsedQuestions.length} questions in ${item.file}`);

    let updated = 0;
    let created = 0;

    for (const q of parsedQuestions) {
      if (!q.question || q.options.length < 2 || !q.correctOption) {
        console.warn(`Skipping malformed question: ${q.question}`);
        continue;
      }

      const normalizedQuestion = normalizeWhitespace(q.question);
      let existing = await Question.findOne({
        technologyId: tech._id,
        question: normalizedQuestion,
      });

      const mcqObj = {
        enabled: true,
        options: q.options,
        correctOption: q.correctOption,
      };

      if (existing) {
        existing.mcq = mcqObj;
        existing.answer = q.options.find((o: any) => o.id === q.correctOption)?.text || q.correctOption;
        if (q.explanation) existing.explanation = q.explanation;
        await existing.save();
        updated++;
      } else {
        await Question.create({
          question: normalizedQuestion,
          title: normalizedQuestion,
          technologyId: tech._id,
          topicId: topic._id,
          preparationLevels: defaultLevel ? [defaultLevel] : [],
          difficulty: 'medium',
          questionType: 'conceptual',
          answer: q.options.find((o: any) => o.id === q.correctOption)?.text || q.correctOption,
          explanation: q.explanation,
          mcq: mcqObj,
          isImportant: false,
          source: 'curated',
          status: 'published',
        });
        created++;
      }
    }
    console.log(`=> Created: ${created}, Updated: ${updated}\n`);
  }

  await disconnectDB();
  console.log('Done!');
}

run().catch(console.error);
