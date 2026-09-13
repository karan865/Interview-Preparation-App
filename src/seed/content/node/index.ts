import { SeedQuestion } from '../types';
import { nodeFundamentalsQuestions } from './fundamentals';
import { nodeModulesQuestions } from './modules';
import { nodeNpmPackagesQuestions } from './npmPackages';
import { nodeFileSystemQuestions } from './fileSystem';
import { nodeEventLoopQuestions } from './eventLoop';
import { nodeStreamsQuestions } from './streams';
import { nodeBuffersQuestions } from './buffers';
import { nodeHttpQuestions } from './http';
import { nodeErrorHandlingQuestions } from './errorHandling';
import { nodePerformanceQuestions } from './performance';
import { nodeAdvancedProductionQuestions } from './advancedProduction';

export {
  nodeFundamentalsQuestions,
  nodeModulesQuestions,
  nodeNpmPackagesQuestions,
  nodeFileSystemQuestions,
  nodeEventLoopQuestions,
  nodeStreamsQuestions,
  nodeBuffersQuestions,
  nodeHttpQuestions,
  nodeErrorHandlingQuestions,
  nodePerformanceQuestions,
  nodeAdvancedProductionQuestions,
};

export const nodeQuestions: SeedQuestion[] = [
  ...nodeFundamentalsQuestions,        // 40
  ...nodeModulesQuestions,             // 35
  ...nodeNpmPackagesQuestions,         // 25
  ...nodeFileSystemQuestions,          // 30
  ...nodeEventLoopQuestions,           // 65
  ...nodeStreamsQuestions,             // 55
  ...nodeBuffersQuestions,             // 30
  ...nodeHttpQuestions,                // 50
  ...nodeErrorHandlingQuestions,       // 40
  ...nodePerformanceQuestions,         // 60
  ...nodeAdvancedProductionQuestions,  // 70
];
