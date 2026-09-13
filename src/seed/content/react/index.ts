import { SeedQuestion } from '../types';
import { reactFundamentalsQuestions } from './fundamentals';
import { reactComponentsQuestions } from './components';
import { reactPropsStateQuestions } from './propsState';
import { reactHooksQuestions } from './hooks';
import { reactRenderingQuestions } from './rendering';
import { reactPerformanceQuestions } from './performance';
import { reactFormsQuestions } from './forms';
import { reactContextQuestions } from './context';
import { reactStateManagementQuestions } from './stateManagement';
import { reactAdvancedQuestions } from './advanced';

export {
  reactFundamentalsQuestions,
  reactComponentsQuestions,
  reactPropsStateQuestions,
  reactHooksQuestions,
  reactRenderingQuestions,
  reactPerformanceQuestions,
  reactFormsQuestions,
  reactContextQuestions,
  reactStateManagementQuestions,
  reactAdvancedQuestions,
};

export const reactQuestions: SeedQuestion[] = [
  ...reactFundamentalsQuestions,
  ...reactComponentsQuestions,
  ...reactPropsStateQuestions,
  ...reactHooksQuestions,
  ...reactRenderingQuestions,
  ...reactPerformanceQuestions,
  ...reactFormsQuestions,
  ...reactContextQuestions,
  ...reactStateManagementQuestions,
  ...reactAdvancedQuestions,
];
