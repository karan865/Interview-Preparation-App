import { SeedQuestion } from '../types';
import { javascriptFundamentalsQuestions } from './fundamentals';
import { javascriptVariablesScopeQuestions } from './variablesScope';
import { javascriptFunctionsQuestions } from './functions';
import { javascriptObjectsArraysQuestions } from './objectsArrays';
import { javascriptAsyncQuestions } from './asyncJs';
import { javascriptPromisesAsyncAwaitQuestions } from './promisesAsyncAwait';
import { javascriptEventLoopQuestions } from './eventLoop';
import { javascriptDomBrowserQuestions } from './domBrowser';
import { javascriptEs6FeaturesQuestions } from './es6Features';
import { javascriptAdvancedQuestions } from './advancedJs';

export {
  javascriptFundamentalsQuestions,
  javascriptVariablesScopeQuestions,
  javascriptFunctionsQuestions,
  javascriptObjectsArraysQuestions,
  javascriptAsyncQuestions,
  javascriptPromisesAsyncAwaitQuestions,
  javascriptEventLoopQuestions,
  javascriptDomBrowserQuestions,
  javascriptEs6FeaturesQuestions,
  javascriptAdvancedQuestions,
};

export const javascriptQuestions: SeedQuestion[] = [
  ...javascriptFundamentalsQuestions,
  ...javascriptVariablesScopeQuestions,
  ...javascriptFunctionsQuestions,
  ...javascriptObjectsArraysQuestions,
  ...javascriptAsyncQuestions,
  ...javascriptPromisesAsyncAwaitQuestions,
  ...javascriptEventLoopQuestions,
  ...javascriptDomBrowserQuestions,
  ...javascriptEs6FeaturesQuestions,
  ...javascriptAdvancedQuestions,
];
