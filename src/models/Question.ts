import mongoose, { Document, Schema, Types } from 'mongoose';
import { QUESTION_TYPES, ALL_QUESTION_TYPES, QuestionType } from '../constants/questionTypes';

export { QUESTION_TYPES, ALL_QUESTION_TYPES, QuestionType };
export type QuestionDifficulty = 'easy' | 'medium' | 'hard';
export type QuestionStatus = 'draft' | 'published' | 'archived';

export interface ICodeExample {
  language: string;
  title?: string;
  code: string;
  explanation?: string;
}

export interface IStep {
  stepNumber?: number;
  title: string;
  description?: string;
}

export interface IMCQOption {
  id: string; // 'A' | 'B' | 'C' | 'D'
  text: string;
}

export interface IMCQ {
  enabled: boolean;
  options: IMCQOption[];
  correctOption: string;
}

export interface IQuestion extends Document {
  question: string;
  title?: string;
  technologyId: Types.ObjectId;
  topicId: Types.ObjectId;
  preparationLevels: Types.ObjectId[];
  difficulty: QuestionDifficulty;
  questionType: string;
  answer: string;
  explanation?: string;
  analogy?: string;
  importantPoints: string[];
  codeExamples: ICodeExample[];
  comparisons: any[];
  examples: string[];
  steps: IStep[];
  interviewAnswer?: string;
  interviewTips: string[];
  commonMistakes: string[];
  followUpQuestions: string[];
  relatedQuestions: Types.ObjectId[];
  tags: string[];
  isImportant: boolean;
  mcq?: IMCQ;
  source: string;
  sourceReference?: string;
  status: QuestionStatus;
  createdAt: Date;
  updatedAt: Date;
}

const MCQOptionSchema = new Schema<IMCQOption>(
  {
    id: { type: String, required: true },
    text: { type: String, required: true },
  },
  { _id: false }
);

const MCQSchema = new Schema<IMCQ>(
  {
    enabled: { type: Boolean, default: false, index: true },
    options: { type: [MCQOptionSchema], default: [] },
    correctOption: { type: String, default: '' },
  },
  { _id: false }
);

const CodeExampleSchema = new Schema<ICodeExample>(
  {
    language: { type: String, default: 'javascript' },
    title: { type: String, default: '' },
    code: { type: String, required: true },
    explanation: { type: String, default: '' },
  },
  { _id: false }
);

const StepSchema = new Schema<IStep>(
  {
    stepNumber: { type: Number },
    title: { type: String, required: true },
    description: { type: String, default: '' },
  },
  { _id: false }
);

const QuestionSchema = new Schema<IQuestion>(
  {
    question: {
      type: String,
      required: [true, 'Question text is required'],
      trim: true,
    },
    title: {
      type: String,
      trim: true,
    },
    technologyId: {
      type: Schema.Types.ObjectId,
      ref: 'Technology',
      required: [true, 'Technology is required'],
      index: true,
    },
    topicId: {
      type: Schema.Types.ObjectId,
      ref: 'Topic',
      required: [true, 'Topic is required'],
      index: true,
    },
    preparationLevels: [
      {
        type: Schema.Types.ObjectId,
        ref: 'PreparationLevel',
        index: true,
      },
    ],
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      default: 'medium',
      index: true,
    },
    questionType: {
      type: String,
      default: 'Conceptual',
      trim: true,
      index: true,
    },
    answer: {
      type: String,
      required: [true, 'Answer is required'],
      trim: true,
    },
    explanation: {
      type: String,
      default: '',
      trim: true,
    },
    analogy: {
      type: String,
      default: '',
      trim: true,
    },
    importantPoints: {
      type: [String],
      default: [],
    },
    codeExamples: {
      type: [CodeExampleSchema],
      default: [],
    },
    comparisons: [Schema.Types.Mixed],
    examples: {
      type: [String],
      default: [],
    },
    steps: {
      type: [StepSchema],
      default: [],
    },
    interviewAnswer: {
      type: String,
      default: '',
      trim: true,
    },
    interviewTips: {
      type: [String],
      default: [],
    },
    commonMistakes: {
      type: [String],
      default: [],
    },
    followUpQuestions: {
      type: [String],
      default: [],
    },
    relatedQuestions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Question',
      },
    ],
    tags: {
      type: [String],
      default: [],
      index: true,
    },
    isImportant: {
      type: Boolean,
      default: false,
      index: true,
    },
    source: {
      type: String,
      enum: ['ai-generated', 'curated', 'web-research', 'manually-added', 'imported', 'personal-notes'],
      default: 'ai-generated',
      index: true,
    },
    sourceReference: {
      type: String,
      default: '',
      trim: true,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'published',
      index: true,
    },
    mcq: {
      type: MCQSchema,
      default: () => ({ enabled: false, options: [], correctOption: '' }),
    },
  },
  {
    timestamps: true,
  }
);

// If title is not set, default to question
QuestionSchema.pre<IQuestion>('save', function (next) {
  if (!this.title && this.question) {
    this.title = this.question;
  }
  next();
});

// Compound Indexes for fast queries
QuestionSchema.index({ technologyId: 1, status: 1 });
QuestionSchema.index({ technologyId: 1, topicId: 1, status: 1 });
QuestionSchema.index({ technologyId: 1, preparationLevels: 1, status: 1 });
QuestionSchema.index({ status: 1, isImportant: 1 });
QuestionSchema.index({ 'mcq.enabled': 1, technologyId: 1, status: 1 });

// Full-text search index
QuestionSchema.index(
  {
    question: 'text',
    title: 'text',
    answer: 'text',
    explanation: 'text',
    tags: 'text',
  },
  {
    weights: {
      question: 10,
      title: 8,
      tags: 5,
      answer: 3,
      explanation: 1,
    },
    name: 'QuestionTextIndex',
  }
);

export const Question = mongoose.model<IQuestion>('Question', QuestionSchema);
