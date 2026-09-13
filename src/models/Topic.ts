import mongoose, { Document, Schema, Types } from 'mongoose';

export interface ITopic extends Document {
  technologyId: Types.ObjectId;
  name: string;
  slug: string;
  description?: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TopicSchema = new Schema<ITopic>(
  {
    technologyId: {
      type: Schema.Types.ObjectId,
      ref: 'Technology',
      required: [true, 'Technology reference is required'],
      index: true,
    },
    name: {
      type: String,
      required: [true, 'Topic name is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Topic slug is required'],
      trim: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
    order: {
      type: Number,
      default: 0,
      index: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// A technology cannot have two topics with the exact same slug
TopicSchema.index({ technologyId: 1, slug: 1 }, { unique: true });

export const Topic = mongoose.model<ITopic>('Topic', TopicSchema);
