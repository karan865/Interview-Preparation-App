import mongoose, { Document, Schema, Types } from 'mongoose';

export type ExamType = 'subject' | 'mern';
export type ExamMode = 'practice' | 'exam';
export type ExamDifficulty = 'easy' | 'medium' | 'hard' | 'mixed';
export type PerformanceCategory = 'Excellent' | 'Good' | 'Needs Practice' | 'Needs Revision';

export interface IExamAttemptQuestion {
  questionId: Types.ObjectId;
  selectedOption?: string; // 'A' | 'B' | 'C' | 'D'
  correctOption: string;   // 'A' | 'B' | 'C' | 'D'
  isCorrect: boolean;
}

export interface IDifficultyPerformance {
  difficulty: 'easy' | 'medium' | 'hard';
  correct: number;
  total: number;
  percentage: number;
}

export interface ITechnologyPerformance {
  technologyName: string;
  technologySlug?: string;
  correct: number;
  total: number;
  percentage: number;
}

export interface IWeakTopic {
  topicId?: string;
  topicName: string;
  technologyName: string;
  technologySlug?: string;
  correct: number;
  total: number;
  incorrect: number;
  accuracy: number;
}

export interface IExamRecommendation {
  type: 'review_weak' | 'take_another';
  message: string;
  buttonText: string;
}

export interface IExamAnalysis {
  overall: {
    totalQuestions: number;
    correct: number;
    incorrect: number;
    unanswered: number;
    percentage: number;
    performanceCategory: PerformanceCategory;
  };
  difficulty: IDifficultyPerformance[];
  technologies: ITechnologyPerformance[];
  weakTopics: IWeakTopic[];
  recommendation: IExamRecommendation;
}

export interface IExamAttempt extends Document {
  userId?: Types.ObjectId;
  examType: ExamType;
  mode: ExamMode;
  difficulty: ExamDifficulty;
  technologyId?: Types.ObjectId;
  technologySlug?: string;
  technologyName?: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  percentage: number;
  performanceCategory: PerformanceCategory;
  questions: IExamAttemptQuestion[];
  analysis?: IExamAnalysis;
  startedAt?: Date;
  completedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ExamAttemptQuestionSchema = new Schema<IExamAttemptQuestion>(
  {
    questionId: {
      type: Schema.Types.ObjectId,
      ref: 'Question',
      required: true,
    },
    selectedOption: {
      type: String,
      default: '',
    },
    correctOption: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
    },
  },
  { _id: false }
);

const ExamAttemptSchema = new Schema<IExamAttempt>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      index: true,
      required: false,
    },
    examType: {
      type: String,
      enum: ['subject', 'mern'],
      required: true,
      index: true,
    },
    mode: {
      type: String,
      enum: ['practice', 'exam'],
      default: 'practice',
      index: true,
    },
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard', 'mixed'],
      default: 'mixed',
      index: true,
    },
    technologyId: {
      type: Schema.Types.ObjectId,
      ref: 'Technology',
      required: false,
      index: true,
    },
    technologySlug: {
      type: String,
      trim: true,
      index: true,
    },
    technologyName: {
      type: String,
      trim: true,
    },
    score: {
      type: Number,
      required: true,
    },
    totalQuestions: {
      type: Number,
      required: true,
      default: 25,
    },
    correctAnswers: {
      type: Number,
      required: true,
    },
    wrongAnswers: {
      type: Number,
      required: true,
    },
    percentage: {
      type: Number,
      required: true,
    },
    performanceCategory: {
      type: String,
      enum: ['Excellent', 'Good', 'Needs Practice', 'Needs Revision'],
      required: true,
    },
    questions: {
      type: [ExamAttemptQuestionSchema],
      required: true,
      default: [],
    },
    analysis: {
      type: Schema.Types.Mixed,
      default: null,
    },
    startedAt: {
      type: Date,
      default: Date.now,
    },
    completedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

ExamAttemptSchema.index({ userId: 1, createdAt: -1 });

export const ExamAttempt = mongoose.model<IExamAttempt>('ExamAttempt', ExamAttemptSchema);
