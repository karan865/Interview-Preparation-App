import mongoose, { Document, Schema, Types } from 'mongoose';

export type ProgressStatus = 'known' | 'review' | 'weak';

export interface IUserQuestionProgress extends Document {
  userId: Types.ObjectId;
  questionId: Types.ObjectId;
  status?: ProgressStatus;
  isSaved: boolean;
  reviewCount: number;
  lastReviewedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserQuestionProgressSchema = new Schema<IUserQuestionProgress>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User is required'],
      index: true,
    },
    questionId: {
      type: Schema.Types.ObjectId,
      ref: 'Question',
      required: [true, 'Question is required'],
      index: true,
    },
    status: {
      type: String,
      enum: ['known', 'review', 'weak'],
      default: null,
    },
    isSaved: {
      type: Boolean,
      default: false,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    lastReviewedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// A user can have only one progress record per question
UserQuestionProgressSchema.index({ userId: 1, questionId: 1 }, { unique: true });
UserQuestionProgressSchema.index({ userId: 1, status: 1 });
UserQuestionProgressSchema.index({ userId: 1, isSaved: 1 });

export const UserQuestionProgress = mongoose.model<IUserQuestionProgress>(
  'UserQuestionProgress',
  UserQuestionProgressSchema
);
