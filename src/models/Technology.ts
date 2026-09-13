import mongoose, { Document, Schema } from 'mongoose';

export type TechnologyCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'other';

export interface ITechnology extends Document {
  name: string;
  slug: string;
  description?: string;
  category: TechnologyCategory;
  icon?: string;
  order: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TechnologySchema = new Schema<ITechnology>(
  {
    name: {
      type: String,
      required: [true, 'Technology name is required'],
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: [true, 'Technology slug is required'],
      trim: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
    category: {
      type: String,
      enum: ['frontend', 'backend', 'database', 'devops', 'other'],
      default: 'other',
      index: true,
    },
    icon: {
      type: String,
      default: '',
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

export const Technology = mongoose.model<ITechnology>('Technology', TechnologySchema);
