import { SeedQuestion } from './types';
import { htmlQuestions } from './html.questions';
import { cssQuestions } from './css.questions';
import { gitQuestions } from './git.questions';
import { javascriptQuestions } from './javascript.questions';
import { typescriptQuestions } from './typescript.questions';
import { reactQuestions } from './react.questions';
import { nodeQuestions } from './node.questions';
import { expressQuestions } from './express.questions';
import { mongodbQuestions } from './mongodb.questions';
import { sqlQuestions } from './sql.questions';
import { advancedQuestionsBank1Questions } from './advancedQuestionsBank1';
import { advancedQuestionsBank2Questions } from './advancedQuestionsBank2';
import { advancedQuestionsBank3Questions } from './advancedQuestionsBank3';

export * from './types';
export * from './html.questions';
export * from './css.questions';
export * from './git.questions';
export * from './javascript.questions';
export * from './typescript.questions';
export * from './react.questions';
export * from './node.questions';
export * from './express.questions';
export * from './mongodb.questions';
export * from './sql.questions';
export * from './advancedQuestionsBank1';
export * from './advancedQuestionsBank2';
export * from './advancedQuestionsBank3';

export const allSeedQuestions: SeedQuestion[] = [
  ...advancedQuestionsBank1Questions,
  ...advancedQuestionsBank2Questions,
  ...advancedQuestionsBank3Questions,
];
