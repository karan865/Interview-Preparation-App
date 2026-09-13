import mongoose, { Document, Schema } from 'mongoose';

export interface IPreparationLevel extends Document {
  name: string;
  slug: string;
  description?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const PreparationLevelSchema = new Schema<IPreparationLevel>(
  {
    name: {
      type: String,
      required: [true, 'Preparation level name is required'],
      trim: true,
      unique: true,
    },
    slug: {
      type: String,
      required: [true, 'Preparation level slug is required'],
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
    order: {
      type: Number,
      default: 0,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

export const PreparationLevel = mongoose.model<IPreparationLevel>(
  'PreparationLevel',
  PreparationLevelSchema
);
