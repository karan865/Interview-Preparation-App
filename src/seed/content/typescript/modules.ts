import { SeedQuestion } from '../types';

export const tsModulesQuestions: SeedQuestion[] = [
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "What is the difference between 'import type' and standard 'import' in TypeScript?",
    "title": "What is the difference between 'import type' and standard 'import' in TypeScript?",
    "answer": "'import type' explicitly imports ONLY type definitions; the entire import statement is 100% guaranteed to be erased from compiled JavaScript, preventing circular runtime side-effects.",
    "explanation": "When bundling TypeScript with Babel or esbuild using 'isolatedModules', the bundler cannot tell whether `import { User } from './models'` is importing a class (value) or an interface (type). Using `import type { User } from './models'` explicitly informs the bundler that this import must be erased completely, avoiding accidental runtime module loading or bundling unused code.",
    "interviewAnswer": "'import type' explicitly imports ONLY type definitions; the entire import statement is 100% guaranteed to be erased from compiled JavaScript, preventing circular runtime side-effects. When bundling TypeScript with Babel or esbuild using 'isolatedModules', the bundler cannot tell whether `import { User } from './models'` is importing a class (value) or an interface (type). Using `import type { User } from './models'` explicitly informs the bundler that this import must be erased completely, avoiding accidental runtime module loading or bundling unused code.",
    "importantPoints": [
      "Guarantees 100% type erasure from compiled JS output",
      "Prevents accidental side-effect execution of imported modules",
      "Required by isolated transpilers (esbuild, Babel, SWC)",
      "Supports inline type imports: `import { realFn, type MyType } from './mod'`"
    ],
    "commonMistakes": [
      "Using standard import for types in circular dependency chains, causing runtime initialization errors"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "typescript",
      "modules",
      "import-type",
      "type-erasure",
      "bundlers"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Explicit type-only import (Erased completely in JS output):\nimport type { UserProfile } from './types';\n\n// Inline type-only import:\nimport { fetchUsers, type UserQuery } from './api';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "What are Declaration Files (.d.ts) and how do ambient modules work?",
    "title": "What are Declaration Files (.d.ts) and how do ambient modules work?",
    "answer": "Declaration files (.d.ts) contain only type metadata with zero executable code, describing the shape of JavaScript libraries to the TypeScript compiler.",
    "explanation": "When consuming legacy JavaScript packages or writing libraries, .d.ts files provide type definitions without runtime overhead. Using `declare module 'some-lib'` (ambient module declaration) tells the compiler: 'Trust that this module exists at runtime and has these exported types'. The DefinitelyTyped repo publishes thousands of these as `@types/*`.",
    "interviewAnswer": "Declaration files (.d.ts) contain only type metadata with zero executable code, describing the shape of JavaScript libraries to the TypeScript compiler. When consuming legacy JavaScript packages or writing libraries, .d.ts files provide type definitions without runtime overhead. Using `declare module 'some-lib'` (ambient module declaration) tells the compiler: 'Trust that this module exists at runtime and has these exported types'. The DefinitelyTyped repo publishes thousands of these as `@types/*`.",
    "importantPoints": [
      ".d.ts files contain declarations only (no executable JavaScript code)",
      "Emitted via 'declaration: true' in tsconfig.json for library publishing",
      "Ambient declarations (`declare`) describe code running outside TypeScript's compilation",
      "@types packages provide community-maintained .d.ts definitions"
    ],
    "commonMistakes": [
      "Adding executable runtime code inside a .d.ts file (ignored or rejected)",
      "Creating .d.ts files when regular .ts files would be automatically compiled"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "typescript",
      "modules",
      "declaration-files",
      "dts",
      "ambient"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// types/global.d.ts\ndeclare module 'untyped-library' {\n  export function doAction(options: { debug: boolean }): void;\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "What is 'moduleResolution' in tsconfig.json and how do 'node16', 'nodenext', and 'bundler' differ?",
    "title": "What is 'moduleResolution' in tsconfig.json and how do 'node16', 'nodenext', and 'bundler' differ?",
    "answer": "'moduleResolution' defines how TypeScript locates files on disk; 'node16'/'nodenext' enforce exact Node.js ESM/CJS rules (requiring .js extensions), while 'bundler' mirrors modern Vite/Webpack resolution.",
    "explanation": "Legacy 'node' resolution mirrors older Node.js CommonJS lookups. 'NodeNext' strictly follows Node.js package.json 'exports' field, requiring explicit `.js` extensions on relative ESM imports (even in `.ts` files!). 'bundler' (introduced in TS 5.0) models modern bundlers that resolve extensionless imports and package exports without enforcing Node's strict ESM runtime file extension rules.",
    "interviewAnswer": "'moduleResolution' defines how TypeScript locates files on disk; 'node16'/'nodenext' enforce exact Node.js ESM/CJS rules (requiring .js extensions), while 'bundler' mirrors modern Vite/Webpack resolution. Legacy 'node' resolution mirrors older Node.js CommonJS lookups. 'NodeNext' strictly follows Node.js package.json 'exports' field, requiring explicit `.js` extensions on relative ESM imports (even in `.ts` files!). 'bundler' (introduced in TS 5.0) models modern bundlers that resolve extensionless imports and package exports without enforcing Node's strict ESM runtime file extension rules.",
    "importantPoints": [
      "node: Legacy CommonJS resolution (deprecated for modern apps)",
      "nodenext / node16: Strict Node.js ESM compliance; requires '.js' extension in imports",
      "bundler: Tailored for Vite, Webpack, esbuild; supports extensionless imports and exports maps",
      "Mismatching moduleResolution causes 'Cannot find module' errors"
    ],
    "commonMistakes": [
      "Using moduleResolution: 'node' in a modern ESM project, missing package.json 'exports' maps",
      "Forgetting '.js' extensions when writing NodeNext modules"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "tags": [
      "typescript",
      "modules",
      "moduleResolution",
      "nodenext",
      "bundler",
      "tsconfig"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json for Vite / frontend:\n{\n  \"compilerOptions\": {\n    \"module\": \"ESNext\",\n    \"moduleResolution\": \"bundler\"\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "What are the roles of 'esModuleInterop' and 'allowSyntheticDefaultImports' in tsconfig?",
    "title": "What are the roles of 'esModuleInterop' and 'allowSyntheticDefaultImports' in tsconfig?",
    "answer": "'esModuleInterop' emits helper functions enabling default imports from CommonJS modules; 'allowSyntheticDefaultImports' enables type-checking for default imports without emitting helper code.",
    "explanation": "CommonJS modules export objects via `module.exports = { ... }`. By default, ECMAScript requires importing CommonJS namespaces as `import * as React from 'react'`. Enabling `esModuleInterop: true` instructs TypeScript to emit wrapper code at runtime so you can write `import React from 'react'`, matching standard developer expectations.",
    "interviewAnswer": "'esModuleInterop' emits helper functions enabling default imports from CommonJS modules; 'allowSyntheticDefaultImports' enables type-checking for default imports without emitting helper code. CommonJS modules export objects via `module.exports = { ... }`. By default, ECMAScript requires importing CommonJS namespaces as `import * as React from 'react'`. Enabling `esModuleInterop: true` instructs TypeScript to emit wrapper code at runtime so you can write `import React from 'react'`, matching standard developer expectations.",
    "importantPoints": [
      "Enables `import express from 'express'` instead of `import * as express from 'express'`",
      "Bridges the impedance mismatch between CommonJS and ES Module specifications",
      "esModuleInterop automatically turns on allowSyntheticDefaultImports",
      "Standard recommendation for almost all modern TypeScript projects"
    ],
    "commonMistakes": [
      "Disabling esModuleInterop and encountering compile errors on third-party libraries"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "typescript",
      "modules",
      "esModuleInterop",
      "commonjs",
      "esm"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// With esModuleInterop: true\nimport express from 'express'; // Clean default import!\n\n// Without esModuleInterop:\n// import * as express from 'express';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "What are Namespaces in TypeScript and why are ES Modules preferred in modern code?",
    "title": "What are Namespaces in TypeScript and why are ES Modules preferred in modern code?",
    "answer": "Namespaces are TypeScript's legacy pre-ES6 internal module system; ES Modules are the official JavaScript standard offering tree-shaking, static analysis, and universal support.",
    "explanation": "Before ES2015 defined `import` and `export`, TypeScript introduced `namespace` (originally called `module`) to prevent global scope pollution in single-file script tags. Namespaces output IIFEs attached to global objects. Modern applications should exclusively use ES Modules, reserving namespaces only for ambient type definitions.",
    "interviewAnswer": "Namespaces are TypeScript's legacy pre-ES6 internal module system; ES Modules are the official JavaScript standard offering tree-shaking, static analysis, and universal support. Before ES2015 defined `import` and `export`, TypeScript introduced `namespace` (originally called `module`) to prevent global scope pollution in single-file script tags. Namespaces output IIFEs attached to global objects. Modern applications should exclusively use ES Modules, reserving namespaces only for ambient type definitions.",
    "importantPoints": [
      "Namespaces emit global IIFE objects in JavaScript",
      "ES Modules are standard ECMAScript supported across runtimes and bundlers",
      "ES Modules enable dead-code elimination (tree-shaking); namespaces cannot be tree-shaken easily",
      "Namespaces are only used today inside `.d.ts` declaration merging files"
    ],
    "commonMistakes": [
      "Using `namespace` in modern application code instead of standard file-based ES Modules"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Trade-off",
    "tags": [
      "typescript",
      "modules",
      "namespaces",
      "es-modules",
      "legacy"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Legacy Namespace (Avoid in new app code):\nnamespace Utility {\n  export const log = (msg: string) => console.log(msg);\n}\n\n// Modern ES Module (Recommended):\nexport const log = (msg: string) => console.log(msg);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "How does Path Mapping with baseUrl and paths work in tsconfig.json?: How is this configured, resolved, and managed in TypeScript?",
    "title": "How does Path Mapping with baseUrl and paths work in tsconfig.json?: How is this configured, resolve",
    "answer": "Mastering How does Path Mapping with baseUrl and paths work in tsconfig.json? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, How does Path Mapping with baseUrl and paths work in tsconfig.json? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering How does Path Mapping with baseUrl and paths work in tsconfig.json? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, How does Path Mapping with baseUrl and paths work in tsconfig.json? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for How does Path Mapping with baseUrl and paths work in tsconfig.json?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "Why doesn't tsconfig path mapping rewrite import paths in emitted JavaScript files?: How is this configured, resolved, and managed in TypeScript?",
    "title": "Why doesn't tsconfig path mapping rewrite import paths in emitted JavaScript files?: How is this con",
    "answer": "Mastering Why doesn't tsconfig path mapping rewrite import paths in emitted JavaScript files? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, Why doesn't tsconfig path mapping rewrite import paths in emitted JavaScript files? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering Why doesn't tsconfig path mapping rewrite import paths in emitted JavaScript files? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, Why doesn't tsconfig path mapping rewrite import paths in emitted JavaScript files? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for Why doesn't tsconfig path mapping rewrite import paths in emitted JavaScript files?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "How to use tsc-alias or tsconfig-paths to resolve path aliases at runtime in Node.js?: How is this configured, resolved, and managed in TypeScript?",
    "title": "How to use tsc-alias or tsconfig-paths to resolve path aliases at runtime in Node.js?: How is this c",
    "answer": "Mastering How to use tsc-alias or tsconfig-paths to resolve path aliases at runtime in Node.js? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, How to use tsc-alias or tsconfig-paths to resolve path aliases at runtime in Node.js? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering How to use tsc-alias or tsconfig-paths to resolve path aliases at runtime in Node.js? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, How to use tsc-alias or tsconfig-paths to resolve path aliases at runtime in Node.js? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for How to use tsc-alias or tsconfig-paths to resolve path aliases at runtime in Node.js?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Production",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "What is the difference between global script files and module files in TypeScript?: How is this configured, resolved, and managed in TypeScript?",
    "title": "What is the difference between global script files and module files in TypeScript?: How is this conf",
    "answer": "Mastering What is the difference between global script files and module files in TypeScript? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, What is the difference between global script files and module files in TypeScript? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering What is the difference between global script files and module files in TypeScript? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, What is the difference between global script files and module files in TypeScript? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for What is the difference between global script files and module files in TypeScript?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "How does the presence of an `export {}` statement transform a global script into a module?: How is this configured, resolved, and managed in TypeScript?",
    "title": "How does the presence of an `export {}` statement transform a global script into a module?: How is t",
    "answer": "Mastering How does the presence of an `export {}` statement transform a global script into a module? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, How does the presence of an `export {}` statement transform a global script into a module? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering How does the presence of an `export {}` statement transform a global script into a module? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, How does the presence of an `export {}` statement transform a global script into a module? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for How does the presence of an `export {}` statement transform a global script into a module?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "How to type declare global variables like `declare const __DEV__: boolean`?: How is this configured, resolved, and managed in TypeScript?",
    "title": "How to type declare global variables like `declare const __DEV__: boolean`?: How is this configured,",
    "answer": "Mastering How to type declare global variables like `declare const __DEV__: boolean`? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, How to type declare global variables like `declare const __DEV__: boolean`? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering How to type declare global variables like `declare const __DEV__: boolean`? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, How to type declare global variables like `declare const __DEV__: boolean`? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for How to type declare global variables like `declare const __DEV__: boolean`?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "How to type non-code asset imports (images, CSS, SVGs) using ambient module declarations?: How is this configured, resolved, and managed in TypeScript?",
    "title": "How to type non-code asset imports (images, CSS, SVGs) using ambient module declarations?: How is th",
    "answer": "Mastering How to type non-code asset imports (images, CSS, SVGs) using ambient module declarations? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, How to type non-code asset imports (images, CSS, SVGs) using ambient module declarations? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering How to type non-code asset imports (images, CSS, SVGs) using ambient module declarations? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, How to type non-code asset imports (images, CSS, SVGs) using ambient module declarations? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for How to type non-code asset imports (images, CSS, SVGs) using ambient module declarations?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "What is Triple-Slash Directives (`/// <reference path=\"...\" />`) and when are they still used?: How is this configured, resolved, and managed in TypeScript?",
    "title": "What is Triple-Slash Directives (`/// <reference path=\"...\" />`) and when are they still used?: How ",
    "answer": "Mastering What is Triple-Slash Directives (`/// <reference path=\"...\" />`) and when are they still used? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, What is Triple-Slash Directives (`/// <reference path=\"...\" />`) and when are they still used? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering What is Triple-Slash Directives (`/// <reference path=\"...\" />`) and when are they still used? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, What is Triple-Slash Directives (`/// <reference path=\"...\" />`) and when are they still used? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for What is Triple-Slash Directives (`/// <reference path=\"...\" />`) and when are they still used?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "How does the package.json 'types' or 'typings' field specify entry points for library typings?: How is this configured, resolved, and managed in TypeScript?",
    "title": "How does the package.json 'types' or 'typings' field specify entry points for library typings?: How ",
    "answer": "Mastering How does the package.json 'types' or 'typings' field specify entry points for library typings? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, How does the package.json 'types' or 'typings' field specify entry points for library typings? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering How does the package.json 'types' or 'typings' field specify entry points for library typings? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, How does the package.json 'types' or 'typings' field specify entry points for library typings? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for How does the package.json 'types' or 'typings' field specify entry points for library typings?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "How does package.json 'exports' field support dual publishing of CommonJS and ESM with types?: How is this configured, resolved, and managed in TypeScript?",
    "title": "How does package.json 'exports' field support dual publishing of CommonJS and ESM with types?: How i",
    "answer": "Mastering How does package.json 'exports' field support dual publishing of CommonJS and ESM with types? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, How does package.json 'exports' field support dual publishing of CommonJS and ESM with types? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering How does package.json 'exports' field support dual publishing of CommonJS and ESM with types? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, How does package.json 'exports' field support dual publishing of CommonJS and ESM with types? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for How does package.json 'exports' field support dual publishing of CommonJS and ESM with types?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "What causes 'Cannot find module or its corresponding type declarations' and how to fix it?: How is this configured, resolved, and managed in TypeScript?",
    "title": "What causes 'Cannot find module or its corresponding type declarations' and how to fix it?: How is t",
    "answer": "Mastering What causes 'Cannot find module or its corresponding type declarations' and how to fix it? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, What causes 'Cannot find module or its corresponding type declarations' and how to fix it? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering What causes 'Cannot find module or its corresponding type declarations' and how to fix it? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, What causes 'Cannot find module or its corresponding type declarations' and how to fix it? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for What causes 'Cannot find module or its corresponding type declarations' and how to fix it?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Troubleshooting",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "How to declare global augmentation using `declare global` inside an ES module?: How is this configured, resolved, and managed in TypeScript?",
    "title": "How to declare global augmentation using `declare global` inside an ES module?: How is this configur",
    "answer": "Mastering How to declare global augmentation using `declare global` inside an ES module? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, How to declare global augmentation using `declare global` inside an ES module? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering How to declare global augmentation using `declare global` inside an ES module? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, How to declare global augmentation using `declare global` inside an ES module? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for How to declare global augmentation using `declare global` inside an ES module?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "What is Wildcard Module Declaration and how is it used for file loaders?: How is this configured, resolved, and managed in TypeScript?",
    "title": "What is Wildcard Module Declaration and how is it used for file loaders?: How is this configured, re",
    "answer": "Mastering What is Wildcard Module Declaration and how is it used for file loaders? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, What is Wildcard Module Declaration and how is it used for file loaders? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering What is Wildcard Module Declaration and how is it used for file loaders? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, What is Wildcard Module Declaration and how is it used for file loaders? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for What is Wildcard Module Declaration and how is it used for file loaders?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "How does Dynamic Import (`import()`) infer the type of dynamically loaded modules?: How is this configured, resolved, and managed in TypeScript?",
    "title": "How does Dynamic Import (`import()`) infer the type of dynamically loaded modules?: How is this conf",
    "answer": "Mastering How does Dynamic Import (`import()`) infer the type of dynamically loaded modules? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, How does Dynamic Import (`import()`) infer the type of dynamically loaded modules? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering How does Dynamic Import (`import()`) infer the type of dynamically loaded modules? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, How does Dynamic Import (`import()`) infer the type of dynamically loaded modules? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for How does Dynamic Import (`import()`) infer the type of dynamically loaded modules?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "What is the difference between `export default` and named `export` in terms of type safety and refactoring?: How is this configured, resolved, and managed in TypeScript?",
    "title": "What is the difference between `export default` and named `export` in terms of type safety and refac",
    "answer": "Mastering What is the difference between `export default` and named `export` in terms of type safety and refactoring? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, What is the difference between `export default` and named `export` in terms of type safety and refactoring? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering What is the difference between `export default` and named `export` in terms of type safety and refactoring? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, What is the difference between `export default` and named `export` in terms of type safety and refactoring? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for What is the difference between `export default` and named `export` in terms of type safety and refactoring?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Trade-off",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "How to publish a TypeScript npm package with bundled .d.ts declaration files?: How is this configured, resolved, and managed in TypeScript?",
    "title": "How to publish a TypeScript npm package with bundled .d.ts declaration files?: How is this configure",
    "answer": "Mastering How to publish a TypeScript npm package with bundled .d.ts declaration files? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, How to publish a TypeScript npm package with bundled .d.ts declaration files? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering How to publish a TypeScript npm package with bundled .d.ts declaration files? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, How to publish a TypeScript npm package with bundled .d.ts declaration files? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for How to publish a TypeScript npm package with bundled .d.ts declaration files?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Production",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "What is Declaration Maps (`declarationMap: true`) and how does it enable Go to Definition in IDEs?: How is this configured, resolved, and managed in TypeScript?",
    "title": "What is Declaration Maps (`declarationMap: true`) and how does it enable Go to Definition in IDEs?: ",
    "answer": "Mastering What is Declaration Maps (`declarationMap: true`) and how does it enable Go to Definition in IDEs? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, What is Declaration Maps (`declarationMap: true`) and how does it enable Go to Definition in IDEs? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering What is Declaration Maps (`declarationMap: true`) and how does it enable Go to Definition in IDEs? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, What is Declaration Maps (`declarationMap: true`) and how does it enable Go to Definition in IDEs? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for What is Declaration Maps (`declarationMap: true`) and how does it enable Go to Definition in IDEs?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "How to avoid circular module dependencies and their impact on runtime type initialization?: How is this configured, resolved, and managed in TypeScript?",
    "title": "How to avoid circular module dependencies and their impact on runtime type initialization?: How is t",
    "answer": "Mastering How to avoid circular module dependencies and their impact on runtime type initialization? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, How to avoid circular module dependencies and their impact on runtime type initialization? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering How to avoid circular module dependencies and their impact on runtime type initialization? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, How to avoid circular module dependencies and their impact on runtime type initialization? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for How to avoid circular module dependencies and their impact on runtime type initialization?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "What is the difference between `typeRoots` and `types` compiler options in tsconfig?: How is this configured, resolved, and managed in TypeScript?",
    "title": "What is the difference between `typeRoots` and `types` compiler options in tsconfig?: How is this co",
    "answer": "Mastering What is the difference between `typeRoots` and `types` compiler options in tsconfig? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, What is the difference between `typeRoots` and `types` compiler options in tsconfig? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering What is the difference between `typeRoots` and `types` compiler options in tsconfig? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, What is the difference between `typeRoots` and `types` compiler options in tsconfig? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for What is the difference between `typeRoots` and `types` compiler options in tsconfig?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Comparison",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "modules",
    "question": "How does TypeScript resolve types for scoped npm packages (e.g. `@types/lodash`)?: How is this configured, resolved, and managed in TypeScript?",
    "title": "How does TypeScript resolve types for scoped npm packages (e.g. `@types/lodash`)?: How is this confi",
    "answer": "Mastering How does TypeScript resolve types for scoped npm packages (e.g. `@types/lodash`)? is essential for module boundaries, packaging, and clean dependency management.",
    "explanation": "In TypeScript architecture, How does TypeScript resolve types for scoped npm packages (e.g. `@types/lodash`)? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "interviewAnswer": "Mastering How does TypeScript resolve types for scoped npm packages (e.g. `@types/lodash`)? is essential for module boundaries, packaging, and clean dependency management. In TypeScript architecture, How does TypeScript resolve types for scoped npm packages (e.g. `@types/lodash`)? governs how files, third-party libraries, and ambient types are discovered and compiled. Proper module configuration prevents runtime module loading failures, enables efficient tree-shaking, and ensures frictionless multi-package development.",
    "importantPoints": [
      "Governs module resolution and declaration mapping for How does TypeScript resolve types for scoped npm packages (e.g. `@types/lodash`)?",
      "Prevents import resolution errors between CJS and ESM runtimes",
      "Enables clean ambient declarations and global type augmentations",
      "Optimizes bundler interoperability and library packaging"
    ],
    "commonMistakes": [
      "Assuming tsconfig paths rewrite import paths in emitted JavaScript files without bundler support",
      "Accidental global scope leaks due to missing import/export statements"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "typescript",
      "modules",
      "imports",
      "resolution",
      "declaration-files"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import type { Config } from './config';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
