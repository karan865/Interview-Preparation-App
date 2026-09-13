import { SeedQuestion } from '../types';
import { sqlFundamentalsQuestions } from './fundamentals';
import { sqlSelectFilteringQuestions } from './selectFiltering';
import { sqlJoinsQuestions } from './joins';
import { aggregationsQuestions } from './aggregations';
import { subqueriesQuestions } from './subqueries';
import { constraintsQuestions } from './constraints';
import { indexesQuestions } from './indexes';
import { transactionsQuestions } from './transactions';
import { normalizationQuestions } from './normalization';
import { queryOptimizationQuestions } from './queryOptimization';

export {
  sqlFundamentalsQuestions,
  sqlSelectFilteringQuestions,
  sqlJoinsQuestions,
  aggregationsQuestions,
  subqueriesQuestions,
  constraintsQuestions,
  indexesQuestions,
  transactionsQuestions,
  normalizationQuestions,
  queryOptimizationQuestions,
};

export const sqlQuestions: SeedQuestion[] = [
  ...sqlFundamentalsQuestions,
  ...sqlSelectFilteringQuestions,
  ...sqlJoinsQuestions,
  ...aggregationsQuestions,
  ...subqueriesQuestions,
  ...constraintsQuestions,
  ...indexesQuestions,
  ...transactionsQuestions,
  ...normalizationQuestions,
  ...queryOptimizationQuestions,
];
