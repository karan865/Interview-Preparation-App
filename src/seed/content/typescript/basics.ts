import { SeedQuestion } from '../types';

export const tsBasicsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is TypeScript and how does it relate to JavaScript?",
    "title": "What is TypeScript and how does it relate to JavaScript?",
    "answer": "TypeScript is a strongly typed, compile-to-JS superset of JavaScript that adds static typing, interfaces, and modern tooling without altering JS runtime behavior.",
    "explanation": "Every valid JavaScript program is valid TypeScript. TypeScript provides static type checking at compile time through the 'tsc' compiler, catching syntax and type errors before runtime. All types are completely erased during compilation, leaving clean, standard JavaScript that executes in any browser or Node.js environment.",
    "interviewAnswer": "TypeScript is a strongly typed, compile-to-JS superset of JavaScript that adds static typing, interfaces, and modern tooling without altering JS runtime behavior. Every valid JavaScript program is valid TypeScript. TypeScript provides static type checking at compile time through the 'tsc' compiler, catching syntax and type errors before runtime. All types are completely erased during compilation, leaving clean, standard JavaScript that executes in any browser or Node.js environment.",
    "importantPoints": [
      "Strict superset of JavaScript (JS + Static Typing)",
      "Types are erased during compilation (zero runtime overhead)",
      "Catches bugs at build time before code executes",
      "Enables rich IDE autocomplete, refactoring, and documentation"
    ],
    "commonMistakes": [
      "Expecting TypeScript types to validate runtime data at runtime",
      "Assuming TypeScript adds new runtime primitives or language semantics"
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
      "basics",
      "compiler",
      "javascript-superset"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// TypeScript code:\nlet message: string = \"Hello World\";\n// Compiled JavaScript output:\n// var message = \"Hello World\";"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "A project contains hundreds of 'any' types. How would you gradually improve type safety without rewriting the entire project?",
    "title": "A project contains hundreds of 'any' types. How would you gradually improve type safety without rewr",
    "answer": "Adopt an incremental migration strategy: enable tsconfig safety flags gradually, enforce ESLint rules against new 'any', replace 'any' with 'unknown', add Zod for I/O boundaries, and track type coverage.",
    "explanation": "Gradual migration path: 1. Keep 'noImplicitAny: false' globally, but enable it on newly created subdirectories or micro-packages. 2. Configure ESLint '@typescript-eslint/no-explicit-any': 'warn' (or error in git pre-commit hooks for modified files). 3. Use 'unknown' instead of 'any' for untyped values, requiring runtime narrowing. 4. Track progress using 'type-coverage' CLI in CI. 5. Type external boundaries first (API payloads, database models, shared library utilities) so types flow inward automatically via inference.",
    "interviewAnswer": "Adopt an incremental migration strategy: enable tsconfig safety flags gradually, enforce ESLint rules against new 'any', replace 'any' with 'unknown', add Zod for I/O boundaries, and track type coverage. Gradual migration path: 1. Keep 'noImplicitAny: false' globally, but enable it on newly created subdirectories or micro-packages. 2. Configure ESLint '@typescript-eslint/no-explicit-any': 'warn' (or error in git pre-commit hooks for modified files). 3. Use 'unknown' instead of 'any' for untyped values, requiring runtime narrowing. 4. Track progress using 'type-coverage' CLI in CI. 5. Type external boundaries first (API payloads, database models, shared library utilities) so types flow inward automatically via inference.",
    "importantPoints": [
      "Never attempt a big-bang rewrite for hundreds of 'any' types",
      "Use 'unknown' instead of 'any' to enforce explicit runtime type checks",
      "Type application boundaries (API network calls, DB schemas) first",
      "Track type coverage in CI pipelines to prevent regression"
    ],
    "commonMistakes": [
      "Turning on 'strict: true' overnight, generating 10,000 compile errors and blocking team delivery",
      "Replacing 'any' with complex unmaintainable type gymnastics"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Scenario",
    "tags": [
      "typescript",
      "any",
      "migration",
      "architecture",
      "gradual-typing",
      "best-practices"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Instead of 'any':\nfunction handleRawInput(input: unknown) {\n  if (typeof input === 'string') {\n    console.log(input.toUpperCase()); // Safe narrowing\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "Runtime API data does not match the TypeScript type. Why does TypeScript not protect against this?",
    "title": "Runtime API data does not match the TypeScript type. Why does TypeScript not protect against this?",
    "answer": "TypeScript types exist ONLY at compile time and are completely erased during compilation; TypeScript cannot validate or inspect runtime network payloads.",
    "explanation": "TypeScript performs static analysis at build time. When your backend returns JSON over HTTP, it enters the JavaScript runtime as raw text/objects. If an API contract changes or returns null instead of an expected string, TypeScript cannot prevent crashes because the compiled code has no type metadata. To enforce runtime safety, combine TypeScript with runtime schema validators like Zod, Valibot, or Yup.",
    "interviewAnswer": "TypeScript types exist ONLY at compile time and are completely erased during compilation; TypeScript cannot validate or inspect runtime network payloads. TypeScript performs static analysis at build time. When your backend returns JSON over HTTP, it enters the JavaScript runtime as raw text/objects. If an API contract changes or returns null instead of an expected string, TypeScript cannot prevent crashes because the compiled code has no type metadata. To enforce runtime safety, combine TypeScript with runtime schema validators like Zod, Valibot, or Yup.",
    "importantPoints": [
      "TypeScript types are erased at compile time (type erasure)",
      "Static typing guarantees type safety only within compile-time code",
      "External I/O (APIs, databases, localStorage, user input) requires runtime validation",
      "Use libraries like Zod to bridge compile-time types with runtime parsing"
    ],
    "commonMistakes": [
      "Writing 'const user = await res.json() as User;' and trusting user has all properties",
      "Blaming TypeScript for runtime type mismatches caused by unvalidated API contracts"
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
      "type-erasure",
      "runtime-validation",
      "zod",
      "api-safety",
      "troubleshooting"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "import { z } from 'zod';\n\nconst UserSchema = z.object({\n  id: z.string(),\n  email: z.string().email()\n});\n\ntype User = z.infer<typeof UserSchema>;\n\nasync function fetchUser(): Promise<User> {\n  const res = await fetch('/api/user');\n  const raw = await res.json();\n  return UserSchema.parse(raw); // Throws if runtime data violates schema\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is Type Erasure and what are its implications for compiled JavaScript?",
    "title": "What is Type Erasure and what are its implications for compiled JavaScript?",
    "answer": "Type Erasure is the compilation process where 'tsc' strips out all types, interfaces, and type annotations, outputting pure ECMAScript.",
    "explanation": "Because browsers and standard Node.js runtimes only understand JavaScript, TypeScript removes all type information during the emit stage. Interfaces, type aliases, generic type parameters, and type casts disappear completely. Only runtime language constructs (classes, enums, parameter properties, namespaces) produce JavaScript output.",
    "interviewAnswer": "Type Erasure is the compilation process where 'tsc' strips out all types, interfaces, and type annotations, outputting pure ECMAScript. Because browsers and standard Node.js runtimes only understand JavaScript, TypeScript removes all type information during the emit stage. Interfaces, type aliases, generic type parameters, and type casts disappear completely. Only runtime language constructs (classes, enums, parameter properties, namespaces) produce JavaScript output.",
    "importantPoints": [
      "All types, type annotations, and interfaces disappear in compiled JS",
      "Compiled output size does not increase due to extensive type definitions",
      "You cannot inspect types at runtime via typeof (e.g. typeof x === 'MyInterface' is invalid)",
      "Zero runtime performance penalty for complex TypeScript types"
    ],
    "commonMistakes": [
      "Trying to use an interface as a runtime value or class constructor",
      "Expecting 'instanceof InterfaceName' to work at runtime"
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
      "type-erasure",
      "compiler",
      "runtime-overhead"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// TypeScript\ninterface Config { port: number; }\nconst c: Config = { port: 3000 };\n\n// Compiled JavaScript:\nconst c = { port: 3000 };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is tsconfig.json and what are the essential compiler options for production?",
    "title": "What is tsconfig.json and what are the essential compiler options for production?",
    "answer": "tsconfig.json specifies root files and compiler flags; essential production flags include 'strict: true', 'noImplicitAny', 'strictNullChecks', 'target', and 'moduleResolution'.",
    "explanation": "tsconfig.json defines how 'tsc' compiles code. Key production flags: 1. `strict: true`: enables a suite of strict type checking rules (strictNullChecks, noImplicitAny, strictFunctionTypes). 2. `target`: ECMAScript version (e.g., 'ES2022'). 3. `moduleResolution`: 'NodeNext' or 'bundler' for accurate dependency resolution. 4. `skipLibCheck`: skips type-checking .d.ts files for faster build times.",
    "interviewAnswer": "tsconfig.json specifies root files and compiler flags; essential production flags include 'strict: true', 'noImplicitAny', 'strictNullChecks', 'target', and 'moduleResolution'. tsconfig.json defines how 'tsc' compiles code. Key production flags: 1. `strict: true`: enables a suite of strict type checking rules (strictNullChecks, noImplicitAny, strictFunctionTypes). 2. `target`: ECMAScript version (e.g., 'ES2022'). 3. `moduleResolution`: 'NodeNext' or 'bundler' for accurate dependency resolution. 4. `skipLibCheck`: skips type-checking .d.ts files for faster build times.",
    "importantPoints": [
      "Root configuration file for TypeScript compilation and tooling",
      "'strict: true' is the golden standard for production codebases",
      "'skipLibCheck: true' significantly accelerates compile times",
      "'noEmit: true' is standard when using Vite/Babel/esbuild for transpilation"
    ],
    "commonMistakes": [
      "Disabling strictNullChecks, allowing undefined/null errors to slip into production",
      "Mismatching target with the target Node.js or browser environment"
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
      "tsconfig",
      "compiler-options",
      "strict-mode",
      "production"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\",\n    \"module\": \"NodeNext\",\n    \"moduleResolution\": \"NodeNext\",\n    \"strict\": true,\n    \"noImplicitAny\": true,\n    \"strictNullChecks\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is the difference between Transpilation (Babel/SWC/esbuild) and Type Checking (tsc)?",
    "title": "What is the difference between Transpilation (Babel/SWC/esbuild) and Type Checking (tsc)?",
    "answer": "Babel/SWC/esbuild transpile TypeScript by simply stripping types via regex/AST without type checking; 'tsc' performs full semantic analysis and type validation.",
    "explanation": "Modern build pipelines separate transpilation from type checking for speed. esbuild and SWC transpile TypeScript files into JavaScript in milliseconds because they do not validate types; they only strip type syntax. 'tsc --noEmit' is run separately in CI/CD or background IDE processes to ensure semantic correctness.",
    "interviewAnswer": "Babel/SWC/esbuild transpile TypeScript by simply stripping types via regex/AST without type checking; 'tsc' performs full semantic analysis and type validation. Modern build pipelines separate transpilation from type checking for speed. esbuild and SWC transpile TypeScript files into JavaScript in milliseconds because they do not validate types; they only strip type syntax. 'tsc --noEmit' is run separately in CI/CD or background IDE processes to ensure semantic correctness.",
    "importantPoints": [
      "Babel/SWC/esbuild transpile 10x-50x faster by erasing types without checking",
      "tsc performs thorough static type analysis and emit",
      "Production best practice: esbuild/Vite for dev server and build, tsc --noEmit in CI",
      "Bundlers cannot catch type errors without a dedicated tsc check step"
    ],
    "commonMistakes": [
      "Assuming successful esbuild compilation means the code is type-safe",
      "Using tsc to bundle large applications when faster bundlers exist"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off",
    "tags": [
      "typescript",
      "tsc",
      "esbuild",
      "swc",
      "type-checking",
      "transpilation"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "# Fast build + strict type check workflow:\nnpm run build # vite / esbuild (fast type erasure)\nnpx tsc --noEmit # full type safety validation"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "Explain Type Inference in TypeScript and when to rely on it vs explicit annotations.",
    "title": "Explain Type Inference in TypeScript and when to rely on it vs explicit annotations.",
    "answer": "Type Inference is TypeScript's ability to automatically deduce types from variable initialization, return values, and default parameters without explicit annotations.",
    "explanation": "TypeScript infers types when a variable is initialized with a value (e.g., `let x = 3;` infers `number`). Best practice: Rely on inference for local variables and simple assignments to keep code concise; provide explicit annotations on function parameter types, public API boundaries, and complex object literals to catch errors at the definition site.",
    "interviewAnswer": "Type Inference is TypeScript's ability to automatically deduce types from variable initialization, return values, and default parameters without explicit annotations. TypeScript infers types when a variable is initialized with a value (e.g., `let x = 3;` infers `number`). Best practice: Rely on inference for local variables and simple assignments to keep code concise; provide explicit annotations on function parameter types, public API boundaries, and complex object literals to catch errors at the definition site.",
    "importantPoints": [
      "Inference deduces types automatically from assignment and return statements",
      "Reduces boilerplate code and avoids redundant annotations like `const name: string = 'Alex'`",
      "Always explicitly annotate function parameters (inference cannot guess input intent)",
      "Annotate return types on exported/public API functions to prevent accidental API breaks"
    ],
    "commonMistakes": [
      "Over-annotating obvious types: `let isReady: boolean = false;`",
      "Omitting parameter types, leading to implicit 'any'"
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
      "inference",
      "type-annotations",
      "clean-code"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Good: inferred cleanly as number\nlet count = 42;\n\n// Good: explicit annotations on function signature\nfunction calculateTax(amount: number, rate: number): number {\n  return amount * rate;\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is the difference between 'target' and 'module' compiler options in tsconfig.json?",
    "title": "What is the difference between 'target' and 'module' compiler options in tsconfig.json?",
    "answer": "'target' dictates the ECMAScript syntax version of emitted JS (e.g. ES2015, ES2022); 'module' dictates the module syntax system used for imports/exports (CommonJS, ESNext, NodeNext).",
    "explanation": "The 'target' option controls what language features are downleveled (e.g., converting arrow functions to regular functions or async/await to generators for older runtimes). The 'module' option controls how import/export statements are emitted (e.g., require() for CommonJS vs import for ESM).",
    "interviewAnswer": "'target' dictates the ECMAScript syntax version of emitted JS (e.g. ES2015, ES2022); 'module' dictates the module syntax system used for imports/exports (CommonJS, ESNext, NodeNext). The 'target' option controls what language features are downleveled (e.g., converting arrow functions to regular functions or async/await to generators for older runtimes). The 'module' option controls how import/export statements are emitted (e.g., require() for CommonJS vs import for ESM).",
    "importantPoints": [
      "target: controls JS syntax level downleveling (ES5, ES6, ES2022)",
      "module: controls module syntax (CommonJS, ESNext, NodeNext)",
      "Modern Node.js 18+ uses target: ES2022 and module: NodeNext",
      "Vite/browser projects use target: ES2022 and module: ESNext"
    ],
    "commonMistakes": [
      "Setting target too low (e.g. ES5), bloating bundle size with unnecessary polyfills",
      "Setting module to CommonJS in modern bundlers, breaking tree-shaking"
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
      "tsconfig",
      "target",
      "module",
      "downleveling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json\n{\n  \"compilerOptions\": {\n    \"target\": \"ES2022\", // Async/await, class fields preserved\n    \"module\": \"NodeNext\" // Native Node.js ESM resolution\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What does 'strictNullChecks' do and why is it essential?",
    "title": "What does 'strictNullChecks' do and why is it essential?",
    "answer": "With 'strictNullChecks: true', null and undefined are not assignable to other types unless explicitly included in a union type.",
    "explanation": "When strictNullChecks is false, `string` can be assigned `null` or `undefined`, leading to the infamous runtime error: 'Cannot read property of undefined'. With strictNullChecks enabled, `string` only accepts strings. If a value can be absent, you must type it explicitly as `string | null | undefined`, forcing developers to check for nullity before access.",
    "interviewAnswer": "With 'strictNullChecks: true', null and undefined are not assignable to other types unless explicitly included in a union type. When strictNullChecks is false, `string` can be assigned `null` or `undefined`, leading to the infamous runtime error: 'Cannot read property of undefined'. With strictNullChecks enabled, `string` only accepts strings. If a value can be absent, you must type it explicitly as `string | null | undefined`, forcing developers to check for nullity before access.",
    "importantPoints": [
      "Prevents Tony Hoare's 'Billion Dollar Mistake' (null pointer exceptions)",
      "null and undefined have distinct types separate from domain types",
      "Requires optional chaining `?.` or guard checks before property access",
      "Enabled automatically when 'strict: true' is set"
    ],
    "commonMistakes": [
      "Disabling strictNullChecks to suppress compiler errors during migration",
      "Using non-null assertions `!` carelessly to bypass strict checks"
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
      "strictNullChecks",
      "null",
      "undefined",
      "type-safety"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// With strictNullChecks: true\nlet name: string = \"Alice\";\n// name = null; // Error: Type 'null' is not assignable to type 'string'.\n\nlet optionalName: string | null = null; // OK"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is the Non-null Assertion Operator (!) and what are its risks?",
    "title": "What is the Non-null Assertion Operator (!) and what are its risks?",
    "answer": "The non-null assertion operator `!` tells the compiler to treat a value as non-null and non-undefined, bypassing type checking without adding runtime checks.",
    "explanation": "Appending `!` to an expression (e.g. `user!.name`) asserts to TypeScript: 'I know this value cannot be null or undefined here'. However, it is completely erased at compile time. If the value is actually null or undefined at runtime, your application will crash with a TypeError.",
    "interviewAnswer": "The non-null assertion operator `!` tells the compiler to treat a value as non-null and non-undefined, bypassing type checking without adding runtime checks. Appending `!` to an expression (e.g. `user!.name`) asserts to TypeScript: 'I know this value cannot be null or undefined here'. However, it is completely erased at compile time. If the value is actually null or undefined at runtime, your application will crash with a TypeError.",
    "importantPoints": [
      "Bypasses compile-time nullability checks",
      "Emits zero runtime safety checks (compiles away to nothing)",
      "Acceptable in test suites or right after an un-inferable guard assertion",
      "Dangerous in production code; prefer optional chaining `?.` or fallback `??`"
    ],
    "commonMistakes": [
      "Using `!` as a quick fix to quiet the compiler instead of handling null cases",
      "Assuming `!` provides runtime validation"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off",
    "tags": [
      "typescript",
      "non-null-assertion",
      "null-safety",
      "pitfalls"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// RISKY:\nconst el = document.getElementById('app')!;\nel.innerHTML = \"Hello\"; // Crashes at runtime if element missing!\n\n// SAFE:\nconst elSafe = document.getElementById('app');\nif (elSafe) elSafe.innerHTML = \"Hello\";"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is the role of source maps (.js.map) when debugging TypeScript in production or dev?: Explain its purpose, configuration, and best practices.",
    "title": "What is the role of source maps (.js.map) when debugging TypeScript in production or dev?: Explain i",
    "answer": "Understanding What is the role of source maps (.js.map) when debugging TypeScript in production or dev? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of What is the role of source maps (.js.map) when debugging TypeScript in production or dev? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding What is the role of source maps (.js.map) when debugging TypeScript in production or dev? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of What is the role of source maps (.js.map) when debugging TypeScript in production or dev? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding What is the role of source maps (.js.map) when debugging TypeScript in production or dev?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "How does the 'noImplicitAny' compiler flag improve codebase reliability?: Explain its purpose, configuration, and best practices.",
    "title": "How does the 'noImplicitAny' compiler flag improve codebase reliability?: Explain its purpose, confi",
    "answer": "Understanding How does the 'noImplicitAny' compiler flag improve codebase reliability? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of How does the 'noImplicitAny' compiler flag improve codebase reliability? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding How does the 'noImplicitAny' compiler flag improve codebase reliability? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of How does the 'noImplicitAny' compiler flag improve codebase reliability? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding How does the 'noImplicitAny' compiler flag improve codebase reliability?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is the difference between 'dependencies' and 'devDependencies' when using @types packages?: Explain its purpose, configuration, and best practices.",
    "title": "What is the difference between 'dependencies' and 'devDependencies' when using @types packages?: Exp",
    "answer": "Understanding What is the difference between 'dependencies' and 'devDependencies' when using @types packages? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of What is the difference between 'dependencies' and 'devDependencies' when using @types packages? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding What is the difference between 'dependencies' and 'devDependencies' when using @types packages? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of What is the difference between 'dependencies' and 'devDependencies' when using @types packages? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding What is the difference between 'dependencies' and 'devDependencies' when using @types packages?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "How does the TypeScript compiler handle JSX (preserve, react, react-jsx)?: Explain its purpose, configuration, and best practices.",
    "title": "How does the TypeScript compiler handle JSX (preserve, react, react-jsx)?: Explain its purpose, conf",
    "answer": "Understanding How does the TypeScript compiler handle JSX (preserve, react, react-jsx)? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of How does the TypeScript compiler handle JSX (preserve, react, react-jsx)? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding How does the TypeScript compiler handle JSX (preserve, react, react-jsx)? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of How does the TypeScript compiler handle JSX (preserve, react, react-jsx)? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding How does the TypeScript compiler handle JSX (preserve, react, react-jsx)?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is the purpose of the 'isolatedModules' compiler option in tsconfig?: Explain its purpose, configuration, and best practices.",
    "title": "What is the purpose of the 'isolatedModules' compiler option in tsconfig?: Explain its purpose, conf",
    "answer": "Understanding What is the purpose of the 'isolatedModules' compiler option in tsconfig? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of What is the purpose of the 'isolatedModules' compiler option in tsconfig? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding What is the purpose of the 'isolatedModules' compiler option in tsconfig? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of What is the purpose of the 'isolatedModules' compiler option in tsconfig? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding What is the purpose of the 'isolatedModules' compiler option in tsconfig?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "How to configure path aliases in tsconfig.json (baseUrl and paths) for clean imports?: Explain its purpose, configuration, and best practices.",
    "title": "How to configure path aliases in tsconfig.json (baseUrl and paths) for clean imports?: Explain its p",
    "answer": "Understanding How to configure path aliases in tsconfig.json (baseUrl and paths) for clean imports? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of How to configure path aliases in tsconfig.json (baseUrl and paths) for clean imports? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding How to configure path aliases in tsconfig.json (baseUrl and paths) for clean imports? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of How to configure path aliases in tsconfig.json (baseUrl and paths) for clean imports? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding How to configure path aliases in tsconfig.json (baseUrl and paths) for clean imports?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is the difference between 'tsc' and 'ts-node' for local development?: Explain its purpose, configuration, and best practices.",
    "title": "What is the difference between 'tsc' and 'ts-node' for local development?: Explain its purpose, conf",
    "answer": "Understanding What is the difference between 'tsc' and 'ts-node' for local development? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of What is the difference between 'tsc' and 'ts-node' for local development? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding What is the difference between 'tsc' and 'ts-node' for local development? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of What is the difference between 'tsc' and 'ts-node' for local development? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding What is the difference between 'tsc' and 'ts-node' for local development?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "tags": [
      "typescript",
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "Why is 'skipLibCheck: true' recommended for large enterprise codebases?: Explain its purpose, configuration, and best practices.",
    "title": "Why is 'skipLibCheck: true' recommended for large enterprise codebases?: Explain its purpose, config",
    "answer": "Understanding Why is 'skipLibCheck: true' recommended for large enterprise codebases? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of Why is 'skipLibCheck: true' recommended for large enterprise codebases? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding Why is 'skipLibCheck: true' recommended for large enterprise codebases? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of Why is 'skipLibCheck: true' recommended for large enterprise codebases? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding Why is 'skipLibCheck: true' recommended for large enterprise codebases?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance",
    "tags": [
      "typescript",
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "How does 'strictPropertyInitialization' work in TypeScript classes?: Explain its purpose, configuration, and best practices.",
    "title": "How does 'strictPropertyInitialization' work in TypeScript classes?: Explain its purpose, configurat",
    "answer": "Understanding How does 'strictPropertyInitialization' work in TypeScript classes? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of How does 'strictPropertyInitialization' work in TypeScript classes? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding How does 'strictPropertyInitialization' work in TypeScript classes? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of How does 'strictPropertyInitialization' work in TypeScript classes? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding How does 'strictPropertyInitialization' work in TypeScript classes?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What does 'exactOptionalPropertyTypes' do in modern TypeScript?: Explain its purpose, configuration, and best practices.",
    "title": "What does 'exactOptionalPropertyTypes' do in modern TypeScript?: Explain its purpose, configuration,",
    "answer": "Understanding What does 'exactOptionalPropertyTypes' do in modern TypeScript? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of What does 'exactOptionalPropertyTypes' do in modern TypeScript? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding What does 'exactOptionalPropertyTypes' do in modern TypeScript? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of What does 'exactOptionalPropertyTypes' do in modern TypeScript? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding What does 'exactOptionalPropertyTypes' do in modern TypeScript?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "How to use Project References and tsconfig.build.json for monorepo compilation?: Explain its purpose, configuration, and best practices.",
    "title": "How to use Project References and tsconfig.build.json for monorepo compilation?: Explain its purpose",
    "answer": "Understanding How to use Project References and tsconfig.build.json for monorepo compilation? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of How to use Project References and tsconfig.build.json for monorepo compilation? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding How to use Project References and tsconfig.build.json for monorepo compilation? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of How to use Project References and tsconfig.build.json for monorepo compilation? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding How to use Project References and tsconfig.build.json for monorepo compilation?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What are the common causes of slow 'tsc' build times and how to profile them using --extendedDiagnostics?: Explain its purpose, configuration, and best practices.",
    "title": "What are the common causes of slow 'tsc' build times and how to profile them using --extendedDiagnos",
    "answer": "Understanding What are the common causes of slow 'tsc' build times and how to profile them using --extendedDiagnostics? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of What are the common causes of slow 'tsc' build times and how to profile them using --extendedDiagnostics? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding What are the common causes of slow 'tsc' build times and how to profile them using --extendedDiagnostics? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of What are the common causes of slow 'tsc' build times and how to profile them using --extendedDiagnostics? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding What are the common causes of slow 'tsc' build times and how to profile them using --extendedDiagnostics?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance",
    "tags": [
      "typescript",
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is the difference between 'any' and omitting a type annotation in a JavaScript file with allowJs: true?: Explain its purpose, configuration, and best practices.",
    "title": "What is the difference between 'any' and omitting a type annotation in a JavaScript file with allowJ",
    "answer": "Understanding What is the difference between 'any' and omitting a type annotation in a JavaScript file with allowJs: true? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of What is the difference between 'any' and omitting a type annotation in a JavaScript file with allowJs: true? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding What is the difference between 'any' and omitting a type annotation in a JavaScript file with allowJs: true? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of What is the difference between 'any' and omitting a type annotation in a JavaScript file with allowJs: true? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding What is the difference between 'any' and omitting a type annotation in a JavaScript file with allowJs: true?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "How to type check JavaScript files using JSDoc and the checkJs flag?: Explain its purpose, configuration, and best practices.",
    "title": "How to type check JavaScript files using JSDoc and the checkJs flag?: Explain its purpose, configura",
    "answer": "Understanding How to type check JavaScript files using JSDoc and the checkJs flag? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of How to type check JavaScript files using JSDoc and the checkJs flag? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding How to type check JavaScript files using JSDoc and the checkJs flag? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of How to type check JavaScript files using JSDoc and the checkJs flag? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding How to type check JavaScript files using JSDoc and the checkJs flag?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is the emitDeclarationOnly flag and how is it used in multi-package build setups?: Explain its purpose, configuration, and best practices.",
    "title": "What is the emitDeclarationOnly flag and how is it used in multi-package build setups?: Explain its ",
    "answer": "Understanding What is the emitDeclarationOnly flag and how is it used in multi-package build setups? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of What is the emitDeclarationOnly flag and how is it used in multi-package build setups? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding What is the emitDeclarationOnly flag and how is it used in multi-package build setups? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of What is the emitDeclarationOnly flag and how is it used in multi-package build setups? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding What is the emitDeclarationOnly flag and how is it used in multi-package build setups?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "Why shouldn't you commit generated .d.ts or .js files to source control for applications?: Explain its purpose, configuration, and best practices.",
    "title": "Why shouldn't you commit generated .d.ts or .js files to source control for applications?: Explain i",
    "answer": "Understanding Why shouldn't you commit generated .d.ts or .js files to source control for applications? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of Why shouldn't you commit generated .d.ts or .js files to source control for applications? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding Why shouldn't you commit generated .d.ts or .js files to source control for applications? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of Why shouldn't you commit generated .d.ts or .js files to source control for applications? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding Why shouldn't you commit generated .d.ts or .js files to source control for applications?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "How to enforce strict type checking in pre-commit hooks using husky and lint-staged?: Explain its purpose, configuration, and best practices.",
    "title": "How to enforce strict type checking in pre-commit hooks using husky and lint-staged?: Explain its pu",
    "answer": "Understanding How to enforce strict type checking in pre-commit hooks using husky and lint-staged? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of How to enforce strict type checking in pre-commit hooks using husky and lint-staged? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding How to enforce strict type checking in pre-commit hooks using husky and lint-staged? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of How to enforce strict type checking in pre-commit hooks using husky and lint-staged? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding How to enforce strict type checking in pre-commit hooks using husky and lint-staged?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is lib in tsconfig.json and which standard libraries should be included for Node.js vs Browser?: Explain its purpose, configuration, and best practices.",
    "title": "What is lib in tsconfig.json and which standard libraries should be included for Node.js vs Browser?",
    "answer": "Understanding What is lib in tsconfig.json and which standard libraries should be included for Node.js vs Browser? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of What is lib in tsconfig.json and which standard libraries should be included for Node.js vs Browser? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding What is lib in tsconfig.json and which standard libraries should be included for Node.js vs Browser? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of What is lib in tsconfig.json and which standard libraries should be included for Node.js vs Browser? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding What is lib in tsconfig.json and which standard libraries should be included for Node.js vs Browser?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "How does TypeScript support top-level await and what compiler settings are required?: Explain its purpose, configuration, and best practices.",
    "title": "How does TypeScript support top-level await and what compiler settings are required?: Explain its pu",
    "answer": "Understanding How does TypeScript support top-level await and what compiler settings are required? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of How does TypeScript support top-level await and what compiler settings are required? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding How does TypeScript support top-level await and what compiler settings are required? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of How does TypeScript support top-level await and what compiler settings are required? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding How does TypeScript support top-level await and what compiler settings are required?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is the useUnknownInCatchVariables flag in TypeScript 4.4+ and why was it introduced?: Explain its purpose, configuration, and best practices.",
    "title": "What is the useUnknownInCatchVariables flag in TypeScript 4.4+ and why was it introduced?: Explain i",
    "answer": "Understanding What is the useUnknownInCatchVariables flag in TypeScript 4.4+ and why was it introduced? is essential for configuring reliable TypeScript build pipelines and developer workflows.",
    "explanation": "In TypeScript projects, proper configuration of What is the useUnknownInCatchVariables flag in TypeScript 4.4+ and why was it introduced? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "interviewAnswer": "Understanding What is the useUnknownInCatchVariables flag in TypeScript 4.4+ and why was it introduced? is essential for configuring reliable TypeScript build pipelines and developer workflows. In TypeScript projects, proper configuration of What is the useUnknownInCatchVariables flag in TypeScript 4.4+ and why was it introduced? directly impacts build performance, compile-time safety, and developer ergonomics. Mastering compiler options, build tool integrations, and project setup ensures teams maintain type guarantees across scaling codebases.",
    "importantPoints": [
      "Ensures correct compiler behavior regarding What is the useUnknownInCatchVariables flag in TypeScript 4.4+ and why was it introduced?",
      "Prevents build-time misconfigurations and bundle bloat",
      "Optimizes build performance and IDE response times",
      "Standardizes development setup across engineering teams"
    ],
    "commonMistakes": [
      "Misconfiguring tsconfig compiler options, causing runtime type errors",
      "Ignoring compiler diagnostics during project builds"
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
      "basics",
      "compiler",
      "tooling"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// tsconfig.json configuration example\n{\n  \"compilerOptions\": {\n    \"strict\": true,\n    \"skipLibCheck\": true\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
