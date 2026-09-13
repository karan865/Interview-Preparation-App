import { SeedQuestion } from '../types';
import { mongodbFundamentalsQuestions } from './fundamentals';
import { documentsCollectionsQuestions } from './documentsCollections';
import { crudQuestions } from './crud';
import { queryOperatorsQuestions } from './queryOperators';
import { indexesQuestions } from './indexes';
import { aggregationQuestions } from './aggregation';
import { schemaDesignQuestions } from './schemaDesign';
import { relationshipsQuestions } from './relationships';
import { transactionsQuestions } from './transactions';
import { performanceQuestions } from './performance';

export {
  mongodbFundamentalsQuestions,
  documentsCollectionsQuestions,
  crudQuestions,
  queryOperatorsQuestions,
  indexesQuestions,
  aggregationQuestions,
  schemaDesignQuestions,
  relationshipsQuestions,
  transactionsQuestions,
  performanceQuestions
};

export const mongodbQuestions: SeedQuestion[] = [
  ...mongodbFundamentalsQuestions,
  ...documentsCollectionsQuestions,
  ...crudQuestions,
  ...queryOperatorsQuestions,
  ...indexesQuestions,
  ...aggregationQuestions,
  ...schemaDesignQuestions,
  ...relationshipsQuestions,
  ...transactionsQuestions,
  ...performanceQuestions
];
