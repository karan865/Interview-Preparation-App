import { QuestionType, QUESTION_TYPES } from '../../constants/questionTypes';

export { QuestionType, QUESTION_TYPES };

export interface SeedQuestion {
  technologySlug: string;
  topicSlug: string;
  question: string;
  title?: string;
  answer: string;
  explanation?: string;
  analogy?: string;
  importantPoints?: string[];
  codeExamples?: {
    language: string;
    title?: string;
    code: string;
    explanation?: string;
  }[];
  comparisons?: any[];
  examples?: string[];
  steps?: {
    stepNumber?: number;
    title: string;
    description?: string;
  }[];
  interviewAnswer?: string;
  interviewTips?: string[] | string;
  commonMistakes?: string[];
  followUpQuestions?: string[];
  tags?: string[];
  isImportant?: boolean;
  mcq?: {
    enabled: boolean;
    options: { id: string; text: string }[];
    correctOption: string;
  };
  difficulty: 'easy' | 'medium' | 'hard';
  questionType: string;
  preparationLevels?: ('junior' | 'intermediate' | 'advanced')[];
  preparationLevelSlugs?: ('junior' | 'intermediate' | 'advanced')[];
  source?: string;
  sourceReference?: string;
  status?: 'draft' | 'published' | 'archived';
}
