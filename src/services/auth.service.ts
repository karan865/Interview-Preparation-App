import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, IUser } from '../models/User';
import { env } from '../config/env';
import { ApiError } from '../utils/apiError';

export class AuthService {
  static generateToken(user: IUser): string {
    return jwt.sign(
      {
        id: user._id.toString(),
        role: user.role,
      },
      env.JWT_SECRET,
      { expiresIn: env.JWT_EXPIRES_IN } as jwt.SignOptions
    );
  }

  static async register(userData: {
    name: string;
    email: string;
    password: string;
    role?: 'user' | 'admin';
    selectedTechnologies?: string[];
    selectedPreparationLevel?: string;
  }) {
    const existing = await User.findOne({ email: userData.email.toLowerCase().trim() });
    if (existing) {
      throw ApiError.conflict('An account with this email already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(userData.password, salt);

    const user = await User.create({
      name: userData.name.trim(),
      email: userData.email.toLowerCase().trim(),
      passwordHash,
      role: userData.role || 'user',
      selectedTechnologies: userData.selectedTechnologies || [],
      selectedPreparationLevel: userData.selectedPreparationLevel || undefined,
    });

    const token = this.generateToken(user);

    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        selectedTechnologies: user.selectedTechnologies,
        selectedPreparationLevel: user.selectedPreparationLevel,
      },
      token,
    };
  }

  static async login(credentials: { email: string; password: string }) {
    const user = await User.findOne({ email: credentials.email.toLowerCase().trim() }).select('+passwordHash');
    if (!user) {
      throw ApiError.unauthorized('Invalid email or password');
    }

    const isMatch = await user.comparePassword(credentials.password);
    if (!isMatch) {
      throw ApiError.unauthorized('Invalid email or password');
    }

    const token = this.generateToken(user);

    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        selectedTechnologies: user.selectedTechnologies,
        selectedPreparationLevel: user.selectedPreparationLevel,
      },
      token,
    };
  }

  static async getProfile(userId: string) {
    const user = await User.findById(userId)
      .populate('selectedTechnologies', 'name slug category icon')
      .populate('selectedPreparationLevel', 'name slug order');

    if (!user) {
      throw ApiError.notFound('User not found');
    }

    return user;
  }

  static async updatePreferences(
    userId: string,
    updates: { selectedTechnologies?: string[]; selectedPreparationLevel?: string }
  ) {
    const user = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          ...(updates.selectedTechnologies && { selectedTechnologies: updates.selectedTechnologies }),
          ...(updates.selectedPreparationLevel !== undefined && {
            selectedPreparationLevel: updates.selectedPreparationLevel || null,
          }),
        },
      },
      { new: true }
    )
      .populate('selectedTechnologies', 'name slug category icon')
      .populate('selectedPreparationLevel', 'name slug order');

    if (!user) {
      throw ApiError.notFound('User not found');
    }

    return user;
  }
}
