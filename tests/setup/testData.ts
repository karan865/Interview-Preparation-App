import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User, IUser } from '../../src/models/User';
import { Technology, ITechnology } from '../../src/models/Technology';
import { Topic, ITopic } from '../../src/models/Topic';
import { PreparationLevel, IPreparationLevel } from '../../src/models/PreparationLevel';
import { Question } from '../../src/models/Question';
import { env } from '../../src/config/env';

export interface TestAuthContext {
  adminUser: IUser;
  adminToken: string;
  regularUser: IUser;
  userToken: string;
  secondUser: IUser;
  secondUserToken: string;
}

export interface TestTaxonomyContext {
  reactTech: ITechnology;
  nodeTech: ITechnology;
  hooksTopic: ITopic;
  eventLoopTopic: ITopic;
  intermediateLevel: IPreparationLevel;
  advancedLevel: IPreparationLevel;
  foundationLevel: IPreparationLevel;
}

export const createTestUsers = async (): Promise<TestAuthContext> => {
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash('TestPassword123!', salt);

  const adminUser = await User.create({
    name: 'Admin Test User',
    email: 'admin.test@example.com',
    passwordHash,
    role: 'admin',
  });

  const regularUser = await User.create({
    name: 'Regular Test User',
    email: 'user.test@example.com',
    passwordHash,
    role: 'user',
  });

  const secondUser = await User.create({
    name: 'Second Test User',
    email: 'second.user@example.com',
    passwordHash,
    role: 'user',
  });

  const adminToken = jwt.sign({ id: adminUser._id.toString(), role: 'admin' }, env.JWT_SECRET, {
    expiresIn: '1d',
  });

  const userToken = jwt.sign({ id: regularUser._id.toString(), role: 'user' }, env.JWT_SECRET, {
    expiresIn: '1d',
  });

  const secondUserToken = jwt.sign({ id: secondUser._id.toString(), role: 'user' }, env.JWT_SECRET, {
    expiresIn: '1d',
  });

  return {
    adminUser,
    adminToken,
    regularUser,
    userToken,
    secondUser,
    secondUserToken,
  };
};

export const createTestTaxonomy = async (): Promise<TestTaxonomyContext> => {
  const foundationLevel = await PreparationLevel.create({
    name: 'Foundation',
    slug: 'foundation',
    order: 1,
  });

  const intermediateLevel = await PreparationLevel.create({
    name: 'Intermediate',
    slug: 'intermediate',
    order: 3,
  });

  const advancedLevel = await PreparationLevel.create({
    name: 'Advanced',
    slug: 'advanced',
    order: 4,
  });

  const reactTech = await Technology.create({
    name: 'React',
    slug: 'react',
    category: 'frontend',
    order: 1,
    isActive: true,
  });

  const nodeTech = await Technology.create({
    name: 'Node.js',
    slug: 'nodejs',
    category: 'backend',
    order: 2,
    isActive: true,
  });

  const hooksTopic = await Topic.create({
    technologyId: reactTech._id,
    name: 'Hooks',
    slug: 'hooks',
    order: 1,
    isActive: true,
  });

  const eventLoopTopic = await Topic.create({
    technologyId: nodeTech._id,
    name: 'Event Loop',
    slug: 'event-loop',
    order: 1,
    isActive: true,
  });

  return {
    reactTech,
    nodeTech,
    hooksTopic,
    eventLoopTopic,
    foundationLevel,
    intermediateLevel,
    advancedLevel,
  };
};

export const createSampleQuestion = async (overrides: Record<string, any> = {}) => {
  const defaultPayload = {
    question: 'What is useMemo in React?',
    title: 'What is useMemo in React?',
    difficulty: 'medium',
    questionType: 'Conceptual',
    answer: 'useMemo memoizes calculation results between renders.',
    tags: ['react', 'hooks'],
    isImportant: false,
    source: 'personal-notes',
    status: 'published',
  };

  return Question.create({
    ...defaultPayload,
    ...overrides,
  });
};

export const generateExpiredToken = (userId: string, role = 'user'): string => {
  return jwt.sign({ id: userId, role }, env.JWT_SECRET, { expiresIn: -10 });
};

export const generateInvalidSecretToken = (userId: string, role = 'user'): string => {
  return jwt.sign({ id: userId, role }, 'completely_wrong_secret_key_12345');
};
