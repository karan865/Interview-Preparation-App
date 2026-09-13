import { slugify } from './slugify';
import { normalizeQuestionType } from '../constants/questionTypes';

export { normalizeQuestionType };

/**
 * Trims text and collapses multiple consecutive whitespace characters into a single space.
 */
export const normalizeWhitespace = (text?: string | null): string => {
  if (!text) return '';
  return text.toString().replace(/\s+/g, ' ').trim();
};

/**
 * Generates a deterministic duplicate detection key for a question.
 * - Trims and lowercases text
 * - Collapses multiple spaces
 * - Strips trailing punctuation ('?', '!', '.', etc.)
 *
 * Example: "What is useMemo in React?" and "what is useMemo in react?"
 * both map to: "what is usememo in react"
 */
export const createDuplicateKey = (text?: string | null): string => {
  if (!text) return '';
  return normalizeWhitespace(text)
    .toLowerCase()
    .replace(/[?!.:;]+$/, '') // Remove trailing punctuation
    .trim();
};

/**
 * Normalizes an array of tags:
 * - Trims whitespace
 * - Lowercases and slugifies
 * - Deduplicates
 * - Filters out empty strings
 */
export const normalizeTags = (tags?: any): string[] => {
  if (!Array.isArray(tags)) return [];
  const normalizedSet = new Set<string>();

  for (const tag of tags) {
    if (typeof tag === 'string' && tag.trim()) {
      const slug = slugify(tag.trim());
      if (slug) {
        normalizedSet.add(slug);
      }
    }
  }

  return Array.from(normalizedSet);
};

export const normalizeDifficulty = (difficulty?: string | null): 'easy' | 'medium' | 'hard' => {
  const d = (difficulty || '').toString().toLowerCase().trim();
  if (d === 'easy' || d === 'medium' || d === 'hard') {
    return d;
  }
  return 'medium';
};

export const normalizeStatus = (status?: string | null): 'draft' | 'published' | 'archived' => {
  const s = (status || '').toString().toLowerCase().trim();
  if (s === 'draft' || s === 'published' || s === 'archived') {
    return s;
  }
  return 'published';
};

export const normalizeSource = (source?: string | null): string => {
  const s = (source || '').toString().toLowerCase().trim();
  const validSources = ['personal-notes', 'manually-added', 'web-research', 'ai-generated', 'imported', 'curated'];
  if (validSources.includes(s)) {
    return s;
  }
  return 'imported';
};

/**
 * Normalizes a raw question payload without modifying its underlying meaning or answer content.
 */
export const normalizeQuestionPayload = (raw: any): any => {
  const questionText = normalizeWhitespace(raw.question || raw.title || '');
  const titleText = normalizeWhitespace(raw.title || questionText);

  return {
    ...raw,
    technology: normalizeWhitespace(raw.technology),
    topic: normalizeWhitespace(raw.topic),
    question: questionText,
    title: titleText,
    answer: typeof raw.answer === 'string' ? raw.answer.trim() : '',
    explanation: typeof raw.explanation === 'string' ? raw.explanation.trim() : '',
    analogy: typeof raw.analogy === 'string' ? raw.analogy.trim() : '',
    difficulty: normalizeDifficulty(raw.difficulty),
    questionType: normalizeQuestionType(raw.questionType),
    source: normalizeSource(raw.source),
    sourceReference: normalizeWhitespace(raw.sourceReference),
    status: normalizeStatus(raw.status),
    tags: normalizeTags(raw.tags),
    importantPoints: Array.isArray(raw.importantPoints)
      ? raw.importantPoints.map((p: any) => normalizeWhitespace(p)).filter(Boolean)
      : [],
    examples: Array.isArray(raw.examples)
      ? raw.examples.map((e: any) => normalizeWhitespace(e)).filter(Boolean)
      : [],
    interviewAnswer: typeof raw.interviewAnswer === 'string' ? raw.interviewAnswer.trim() : '',
    interviewTips: Array.isArray(raw.interviewTips)
      ? raw.interviewTips.map((t: any) => normalizeWhitespace(t)).filter(Boolean)
      : [],
    commonMistakes: Array.isArray(raw.commonMistakes)
      ? raw.commonMistakes.map((m: any) => normalizeWhitespace(m)).filter(Boolean)
      : [],
    followUpQuestions: Array.isArray(raw.followUpQuestions)
      ? raw.followUpQuestions.map((f: any) => normalizeWhitespace(f)).filter(Boolean)
      : [],
    isImportant: Boolean(raw.isImportant),
    codeExamples: Array.isArray(raw.codeExamples)
      ? raw.codeExamples.map((ce: any) => ({
          language: normalizeWhitespace(ce.language) || 'javascript',
          title: normalizeWhitespace(ce.title),
          code: typeof ce.code === 'string' ? ce.code.trim() : '',
          explanation: normalizeWhitespace(ce.explanation),
        }))
      : [],
    steps: Array.isArray(raw.steps)
      ? raw.steps.map((st: any, idx: number) => ({
          stepNumber: typeof st.stepNumber === 'number' ? st.stepNumber : idx + 1,
          title: normalizeWhitespace(st.title),
          description: normalizeWhitespace(st.description),
        }))
      : [],
    comparisons: Array.isArray(raw.comparisons) ? raw.comparisons : [],
  };
};
