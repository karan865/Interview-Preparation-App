/**
 * Canonical Question Categories for Technical Interview Preparation
 *
 * Designed to reflect real-world technical interviews:
 * 1. Conceptual
 * 2. Output / Code Prediction
 * 3. Coding / Implementation
 * 4. Logical / Scenario-Based
 * 5. Troubleshooting / Debugging
 * 6. Performance / Optimization
 * 7. Production / Real-World
 * 8. Architecture / Design Thinking
 * 9. Trade-off / Decision Making
 * 10. Cross-Technology Scenario
 */

export const QUESTION_TYPES = {
  CONCEPTUAL: 'Conceptual',
  OUTPUT_PREDICTION: 'Output / Code Prediction',
  CODING_IMPLEMENTATION: 'Coding / Implementation',
  LOGICAL_SCENARIO: 'Logical / Scenario-Based',
  TROUBLESHOOTING: 'Troubleshooting / Debugging',
  PERFORMANCE_OPTIMIZATION: 'Performance / Optimization',
  PRODUCTION_REAL_WORLD: 'Production / Real-World',
  ARCHITECTURE_DESIGN: 'Architecture / Design Thinking',
  TRADEOFF_DECISION: 'Trade-off / Decision Making',
  CROSS_TECHNOLOGY: 'Cross-Technology Scenario',
} as const;

export const ALL_QUESTION_TYPES = Object.values(QUESTION_TYPES) as readonly string[];

export type QuestionType = (typeof ALL_QUESTION_TYPES)[number];

/**
 * Normalizes input string into a canonical Question Type while preserving
 * custom/legacy strings if no direct alias match exists.
 */
export const normalizeQuestionType = (raw?: string | null): string => {
  if (!raw || typeof raw !== 'string') {
    return QUESTION_TYPES.CONCEPTUAL;
  }

  const clean = raw.trim();
  const lower = clean.toLowerCase();

  // 1. Exact match (case-insensitive) to canonical types
  for (const qt of ALL_QUESTION_TYPES) {
    if (qt.toLowerCase() === lower) {
      return qt;
    }
  }

  // 2. Map known aliases to canonical types
  if (lower === 'output' || lower === 'code prediction' || lower === 'output prediction' || lower === 'prediction') {
    return QUESTION_TYPES.OUTPUT_PREDICTION;
  }

  if (lower === 'coding' || lower === 'implementation' || lower === 'code' || lower === 'practical coding') {
    return QUESTION_TYPES.CODING_IMPLEMENTATION;
  }

  if (
    lower === 'scenario' ||
    lower === 'scenario based' ||
    lower === 'scenario-based' ||
    lower === 'logical' ||
    lower === 'logical scenario'
  ) {
    return QUESTION_TYPES.LOGICAL_SCENARIO;
  }

  if (lower === 'troubleshooting' || lower === 'debugging' || lower === 'troubleshoot' || lower === 'debug') {
    return QUESTION_TYPES.TROUBLESHOOTING;
  }

  if (lower === 'performance' || lower === 'optimization' || lower === 'optimize' || lower === 'perf') {
    return QUESTION_TYPES.PERFORMANCE_OPTIMIZATION;
  }

  if (lower === 'production' || lower === 'real-world' || lower === 'real world' || lower === 'prod') {
    return QUESTION_TYPES.PRODUCTION_REAL_WORLD;
  }

  if (
    lower === 'architecture' ||
    lower === 'design thinking' ||
    lower === 'system design' ||
    lower === 'design'
  ) {
    return QUESTION_TYPES.ARCHITECTURE_DESIGN;
  }

  if (
    lower === 'trade-off' ||
    lower === 'tradeoff' ||
    lower === 'decision making' ||
    lower === 'comparison' ||
    lower === 'compare'
  ) {
    return QUESTION_TYPES.TRADEOFF_DECISION;
  }

  if (
    lower === 'cross-technology' ||
    lower === 'cross technology' ||
    lower === 'cross-tech' ||
    lower === 'full-stack' ||
    lower === 'fullstack'
  ) {
    return QUESTION_TYPES.CROSS_TECHNOLOGY;
  }

  // 3. Preserve custom or existing value as-is
  return clean;
};
