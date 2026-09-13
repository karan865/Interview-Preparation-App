import { SeedQuestion } from '../types';
import { tsBasicsQuestions } from './basics';
import { tsTypesQuestions } from './types';
import { tsInterfacesTypeAliasesQuestions } from './interfacesTypeAliases';
import { tsFunctionsQuestions } from './functions';
import { tsGenericsQuestions } from './generics';
import { tsUtilityTypesQuestions } from './utilityTypes';
import { tsNarrowingTypeGuardsQuestions } from './narrowingTypeGuards';
import { tsClassesQuestions } from './classes';
import { tsModulesQuestions } from './modules';
import { tsAdvancedTypescriptQuestions } from './advancedTypescript';

export {
  tsBasicsQuestions,
  tsTypesQuestions,
  tsInterfacesTypeAliasesQuestions,
  tsFunctionsQuestions,
  tsGenericsQuestions,
  tsUtilityTypesQuestions,
  tsNarrowingTypeGuardsQuestions,
  tsClassesQuestions,
  tsModulesQuestions,
  tsAdvancedTypescriptQuestions,
};

export const typescriptQuestions: SeedQuestion[] = [
  ...tsBasicsQuestions,                  // 30
  ...tsTypesQuestions,                   // 45
  ...tsInterfacesTypeAliasesQuestions,   // 40
  ...tsFunctionsQuestions,               // 30
  ...tsGenericsQuestions,                // 55
  ...tsUtilityTypesQuestions,            // 40
  ...tsNarrowingTypeGuardsQuestions,     // 40
  ...tsClassesQuestions,                 // 25
  ...tsModulesQuestions,                 // 25
  ...tsAdvancedTypescriptQuestions,      // 70
];
