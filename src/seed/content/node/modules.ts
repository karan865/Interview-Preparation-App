import { SeedQuestion } from '../types';

export const nodeModulesQuestions: SeedQuestion[] = [
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What are the primary differences between CommonJS (CJS) and ECMAScript Modules (ESM) in Node.js?",
    "answer": "1) Loading: CJS is synchronous and loads at runtime via require(); ESM is asynchronous and static, loading via import/export. 2) Structure: CJS can call require() conditionally inside if-blocks; ESM top-level imports are static and hoisted. 3) Scope: CJS has module wrapper with __dirname and __filename; ESM uses import.meta.url. 4) Execution: ESM supports Top-Level Await; CJS does not.",
    "explanation": "CJS is dynamic and synchronous; ESM is static, asynchronous, and browser-standardized.",
    "interviewAnswer": "1) Loading: CJS is synchronous and loads at runtime via require(); ESM is asynchronous and static, loading via import/export. 2) Structure: CJS can call require() conditionally inside if-blocks; ESM top-level imports are static and hoisted. 3) Scope: CJS has module wrapper with __dirname and __filename; ESM uses import.meta.url. 4) Execution: ESM supports Top-Level Await; CJS does not. CJS is dynamic and synchronous; ESM is static, asynchronous, and browser-standardized.",
    "importantPoints": [
      "1) Loading: CJS is synchronous and loads at runtime via require(); ESM is asynchronous and static, loading via import/export. 2) Structure: CJS can call require() conditionally inside if-blocks; ESM top-level imports are static and hoisted. 3) Scope: CJS has module wrapper with __dirname and __filename; ESM uses import.meta.url. 4) Execution: ESM supports Top-Level Await; CJS does not.",
      "CJS is dynamic and synchronous; ESM is static, asynchronous, and browser-standardized."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "nodejs",
      "modules",
      "commonjs",
      "esm",
      "differences"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "How does Node.js determine whether a file should be treated as CommonJS or ECMAScript Module?",
    "answer": "1) File extension: `.mjs` is always ESM; `.cjs` is always CommonJS. 2) For `.js` files: Node checks the nearest `package.json`. If `\"type\": \"module\"` is specified, `.js` is treated as ESM; if `\"type\": \"commonjs\"` or omitted, it defaults to CommonJS. 3) Command-line flag `--input-type=module`.",
    "explanation": "Extension overrides (.mjs / .cjs); package.json \"type\" governs .js files.",
    "interviewAnswer": "1) File extension: `.mjs` is always ESM; `.cjs` is always CommonJS. 2) For `.js` files: Node checks the nearest `package.json`. If `\"type\": \"module\"` is specified, `.js` is treated as ESM; if `\"type\": \"commonjs\"` or omitted, it defaults to CommonJS. 3) Command-line flag `--input-type=module`. Extension overrides (.mjs / .cjs); package.json \"type\" governs .js files.",
    "importantPoints": [
      "1) File extension: `.mjs` is always ESM; `.cjs` is always CommonJS. 2) For `.js` files: Node checks the nearest `package.json`. If `\"type\": \"module\"` is specified, `.js` is treated as ESM; if `\"type\": \"commonjs\"` or omitted, it defaults to CommonJS. 3) Command-line flag `--input-type=module`.",
      "Extension overrides (.mjs / .cjs); package.json \"type\" governs .js files."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "modules",
      "esm",
      "commonjs",
      "package-json"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "Can you require() an ECMAScript Module inside a CommonJS file in Node.js?",
    "answer": "Historically, calling require() on an ESM module threw ERR_REQUIRE_ESM. In Node 22+, synchronous require(esm) is supported behind a flag or by default if the ESM module contains no Top-Level Await. For full backward compatibility across all Node versions, CommonJS modules must load ESM modules asynchronously using dynamic `import(\"esm-module\")`.",
    "explanation": "Dynamic import() returns a Promise and works from CommonJS into ESM; sync require(esm) requires Node 22+.",
    "interviewAnswer": "Historically, calling require() on an ESM module threw ERR_REQUIRE_ESM. In Node 22+, synchronous require(esm) is supported behind a flag or by default if the ESM module contains no Top-Level Await. For full backward compatibility across all Node versions, CommonJS modules must load ESM modules asynchronously using dynamic `import(\"esm-module\")`. Dynamic import() returns a Promise and works from CommonJS into ESM; sync require(esm) requires Node 22+.",
    "importantPoints": [
      "Historically, calling require() on an ESM module threw ERR_REQUIRE_ESM. In Node 22+, synchronous require(esm) is supported behind a flag or by default if the ESM module contains no Top-Level Await. For full backward compatibility across all Node versions, CommonJS modules must load ESM modules asynchronously using dynamic `import(\"esm-module\")`.",
      "Dynamic import() returns a Promise and works from CommonJS into ESM; sync require(esm) requires Node 22+."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "modules",
      "require-esm",
      "dynamic-import"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "Can you import a CommonJS module into an ECMAScript Module (ESM) file?",
    "answer": "Yes. ESM can import CommonJS modules using default import: `import pkg from \"./cjs-module.js\"`. The exported `module.exports` object becomes the default export `pkg`. Named imports (`import { foo } from \"./cjs-module.js\"`) are supported for static properties via Node.js CJS-module-lexer heuristic analysis.",
    "explanation": "Default import always works; named imports work if static property analysis detects them.",
    "interviewAnswer": "Yes. ESM can import CommonJS modules using default import: `import pkg from \"./cjs-module.js\"`. The exported `module.exports` object becomes the default export `pkg`. Named imports (`import { foo } from \"./cjs-module.js\"`) are supported for static properties via Node.js CJS-module-lexer heuristic analysis. Default import always works; named imports work if static property analysis detects them.",
    "importantPoints": [
      "Yes. ESM can import CommonJS modules using default import: `import pkg from \"./cjs-module.js\"`. The exported `module.exports` object becomes the default export `pkg`. Named imports (`import { foo } from \"./cjs-module.js\"`) are supported for static properties via Node.js CJS-module-lexer heuristic analysis.",
      "Default import always works; named imports work if static property analysis detects them."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "modules",
      "esm-import-cjs",
      "interop"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "How does module caching work in CommonJS via require.cache?",
    "answer": "When a module is loaded via `require()`, Node compiles and executes it once, storing its `module.exports` object in `require.cache[resolvedPath]`. Any subsequent `require()` calls to the same file return the cached export object instantly without re-executing the file code.",
    "explanation": "Modules are singletons by default in CommonJS; mutations to require.cache can force reload.",
    "interviewAnswer": "When a module is loaded via `require()`, Node compiles and executes it once, storing its `module.exports` object in `require.cache[resolvedPath]`. Any subsequent `require()` calls to the same file return the cached export object instantly without re-executing the file code. Modules are singletons by default in CommonJS; mutations to require.cache can force reload.",
    "importantPoints": [
      "When a module is loaded via `require()`, Node compiles and executes it once, storing its `module.exports` object in `require.cache[resolvedPath]`. Any subsequent `require()` calls to the same file return the cached export object instantly without re-executing the file code.",
      "Modules are singletons by default in CommonJS; mutations to require.cache can force reload."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "modules",
      "require-cache",
      "singletons"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is the output of: // a.js: let count = 0; module.exports = { inc: () => ++count, get: () => count }; // main.js: const a1 = require(\"./a\"); const a2 = require(\"./a\"); a1.inc(); console.log(a2.get());?",
    "answer": "Outputs 1. Because of `require.cache`, both `a1` and `a2` reference the exact same cached object instance in memory. Calling `a1.inc()` mutates the internal state, which is reflected when calling `a2.get()`.",
    "explanation": "Demonstrates CommonJS module caching and singleton behavior.",
    "interviewAnswer": "Outputs 1. Because of `require.cache`, both `a1` and `a2` reference the exact same cached object instance in memory. Calling `a1.inc()` mutates the internal state, which is reflected when calling `a2.get()`. Demonstrates CommonJS module caching and singleton behavior.",
    "importantPoints": [
      "Outputs 1. Because of `require.cache`, both `a1` and `a2` reference the exact same cached object instance in memory. Calling `a1.inc()` mutates the internal state, which is reflected when calling `a2.get()`.",
      "Demonstrates CommonJS module caching and singleton behavior."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "nodejs",
      "output-prediction",
      "require-cache",
      "singletons"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "How do you delete a module from require.cache to force re-execution on next require()?",
    "answer": "`const resolved = require.resolve(\"./myModule\"); delete require.cache[resolved];`. On the next `require(\"./myModule\")`, Node will re-read the file from disk and execute its code again.",
    "explanation": "Deleting from require.cache forces a fresh module execution (used in hot-reloading tools).",
    "interviewAnswer": "`const resolved = require.resolve(\"./myModule\"); delete require.cache[resolved];`. On the next `require(\"./myModule\")`, Node will re-read the file from disk and execute its code again. Deleting from require.cache forces a fresh module execution (used in hot-reloading tools).",
    "importantPoints": [
      "`const resolved = require.resolve(\"./myModule\"); delete require.cache[resolved];`. On the next `require(\"./myModule\")`, Node will re-read the file from disk and execute its code again.",
      "Deleting from require.cache forces a fresh module execution (used in hot-reloading tools)."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "nodejs",
      "require-cache",
      "hot-reloading",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is the difference between exports and module.exports in CommonJS, and what common pitfall occurs when reassigning exports?",
    "answer": "`module.exports` is the actual object returned by `require()`. `exports` is simply a variable reference initially pointing to the same object (`exports = module.exports`). If you attach properties (`exports.foo = 1`), `module.exports` is mutated. But if you reassign `exports = function() {}`, you break the reference; `require()` will still return the original empty `module.exports` object.",
    "explanation": "Never reassign `exports = ...`; always assign `module.exports = ...` when exporting a single value.",
    "interviewAnswer": "`module.exports` is the actual object returned by `require()`. `exports` is simply a variable reference initially pointing to the same object (`exports = module.exports`). If you attach properties (`exports.foo = 1`), `module.exports` is mutated. But if you reassign `exports = function() {}`, you break the reference; `require()` will still return the original empty `module.exports` object. Never reassign `exports = ...`; always assign `module.exports = ...` when exporting a single value.",
    "importantPoints": [
      "`module.exports` is the actual object returned by `require()`. `exports` is simply a variable reference initially pointing to the same object (`exports = module.exports`). If you attach properties (`exports.foo = 1`), `module.exports` is mutated. But if you reassign `exports = function() {}`, you break the reference; `require()` will still return the original empty `module.exports` object.",
      "Never reassign `exports = ...`; always assign `module.exports = ...` when exporting a single value."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "commonjs",
      "exports",
      "module-exports",
      "gotcha"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is the output of: // b.js: exports = function() { return 42; }; // app.js: const b = require(\"./b\"); console.log(typeof b);?",
    "answer": "Outputs \"object\". Reassigning `exports = function...` broke the reference to `module.exports`. `require(\"./b\")` returns the default empty object `{}` stored in `module.exports`, whose type is \"object\".",
    "explanation": "Classic Node.js interview gotcha on broken exports reference.",
    "interviewAnswer": "Outputs \"object\". Reassigning `exports = function...` broke the reference to `module.exports`. `require(\"./b\")` returns the default empty object `{}` stored in `module.exports`, whose type is \"object\". Classic Node.js interview gotcha on broken exports reference.",
    "importantPoints": [
      "Outputs \"object\". Reassigning `exports = function...` broke the reference to `module.exports`. `require(\"./b\")` returns the default empty object `{}` stored in `module.exports`, whose type is \"object\".",
      "Classic Node.js interview gotcha on broken exports reference."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "nodejs",
      "output-prediction",
      "exports",
      "module-exports"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "How does Node.js handle Circular Dependencies in CommonJS, and what value is returned?",
    "answer": "Node.js prevents infinite loops by returning whatever incomplete (in-progress) `module.exports` object has been created so far when a circular require is encountered. If Module A requires Module B before finishing its exports, Module B receives a partial object from A.",
    "explanation": "Returns an incomplete partial copy of the module exports to break the cycle.",
    "interviewAnswer": "Node.js prevents infinite loops by returning whatever incomplete (in-progress) `module.exports` object has been created so far when a circular require is encountered. If Module A requires Module B before finishing its exports, Module B receives a partial object from A. Returns an incomplete partial copy of the module exports to break the cycle.",
    "importantPoints": [
      "Node.js prevents infinite loops by returning whatever incomplete (in-progress) `module.exports` object has been created so far when a circular require is encountered. If Module A requires Module B before finishing its exports, Module B receives a partial object from A.",
      "Returns an incomplete partial copy of the module exports to break the cycle."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "circular-dependencies",
      "commonjs",
      "architecture"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "How does Circular Dependency handling differ in ECMAScript Modules (ESM) compared to CommonJS?",
    "answer": "In ESM, imports are Live Bindings (references) rather than copied values. Modules are parsed and hoisted before execution. In circular ESM imports, access to variables before they are initialized will result in a `ReferenceError: Cannot access variable before initialization` (Temporal Dead Zone), rather than returning an incomplete object.",
    "explanation": "ESM uses live reference bindings; accessing uninitialized cyclic bindings triggers TDZ ReferenceError.",
    "interviewAnswer": "In ESM, imports are Live Bindings (references) rather than copied values. Modules are parsed and hoisted before execution. In circular ESM imports, access to variables before they are initialized will result in a `ReferenceError: Cannot access variable before initialization` (Temporal Dead Zone), rather than returning an incomplete object. ESM uses live reference bindings; accessing uninitialized cyclic bindings triggers TDZ ReferenceError.",
    "importantPoints": [
      "In ESM, imports are Live Bindings (references) rather than copied values. Modules are parsed and hoisted before execution. In circular ESM imports, access to variables before they are initialized will result in a `ReferenceError: Cannot access variable before initialization` (Temporal Dead Zone), rather than returning an incomplete object.",
      "ESM uses live reference bindings; accessing uninitialized cyclic bindings triggers TDZ ReferenceError."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "esm",
      "circular-dependencies",
      "live-bindings",
      "tdz"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What are \"Live Bindings\" in ES Modules, and how do they differ from CommonJS value copying?",
    "answer": "In CommonJS, requiring a primitive exports a snapshot copy of its value at that moment. In ESM, imported variables are live read-only references to the exporter internal state. If the exporting module mutates the variable internally, the importing module observes the updated value in real-time.",
    "explanation": "ESM imports reflect live mutations made by the exporting module; CJS imports are immutable snapshots.",
    "interviewAnswer": "In CommonJS, requiring a primitive exports a snapshot copy of its value at that moment. In ESM, imported variables are live read-only references to the exporter internal state. If the exporting module mutates the variable internally, the importing module observes the updated value in real-time. ESM imports reflect live mutations made by the exporting module; CJS imports are immutable snapshots.",
    "importantPoints": [
      "In CommonJS, requiring a primitive exports a snapshot copy of its value at that moment. In ESM, imported variables are live read-only references to the exporter internal state. If the exporting module mutates the variable internally, the importing module observes the updated value in real-time.",
      "ESM imports reflect live mutations made by the exporting module; CJS imports are immutable snapshots."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "esm",
      "live-bindings",
      "commonjs"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is the output of: // m.js (ESM): export let x = 1; export function inc() { x++; } // main.js: import { x, inc } from \"./m.js\"; inc(); console.log(x);?",
    "answer": "Outputs 2. Because ESM imports are live bindings, when `inc()` increments `x` inside `m.js`, the imported `x` in `main.js` immediately reflects the new value 2.",
    "explanation": "Demonstrates ESM live binding semantics.",
    "interviewAnswer": "Outputs 2. Because ESM imports are live bindings, when `inc()` increments `x` inside `m.js`, the imported `x` in `main.js` immediately reflects the new value 2. Demonstrates ESM live binding semantics.",
    "importantPoints": [
      "Outputs 2. Because ESM imports are live bindings, when `inc()` increments `x` inside `m.js`, the imported `x` in `main.js` immediately reflects the new value 2.",
      "Demonstrates ESM live binding semantics."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "nodejs",
      "output-prediction",
      "esm",
      "live-bindings"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is Dynamic Import `import(specifier)`, and when should you use it over static top-level imports?",
    "answer": "`import(specifier)` is a function-like expression that returns a Promise resolving to the module namespace object. Use it: 1) To load heavy modules on-demand (lazy-loading), 2) To conditionally load modules based on environment or user flags, 3) To compute module specifiers dynamically, and 4) To import ESM modules inside CommonJS files.",
    "explanation": "Dynamic import returns a Promise; enables code-splitting, lazy-loading, and CJS-to-ESM bridges.",
    "interviewAnswer": "`import(specifier)` is a function-like expression that returns a Promise resolving to the module namespace object. Use it: 1) To load heavy modules on-demand (lazy-loading), 2) To conditionally load modules based on environment or user flags, 3) To compute module specifiers dynamically, and 4) To import ESM modules inside CommonJS files. Dynamic import returns a Promise; enables code-splitting, lazy-loading, and CJS-to-ESM bridges.",
    "importantPoints": [
      "`import(specifier)` is a function-like expression that returns a Promise resolving to the module namespace object. Use it: 1) To load heavy modules on-demand (lazy-loading), 2) To conditionally load modules based on environment or user flags, 3) To compute module specifiers dynamically, and 4) To import ESM modules inside CommonJS files.",
      "Dynamic import returns a Promise; enables code-splitting, lazy-loading, and CJS-to-ESM bridges."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "dynamic-import",
      "esm",
      "lazy-loading"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is Top-Level Await, and what happens when an imported module uses Top-Level Await?",
    "answer": "Top-Level Await allows using `await` outside of async functions at the root of an ES module. When an imported module uses top-level await, the importing module pauses execution until the imported module promise resolves. It blocks module graph evaluation while waiting, but does NOT block the main thread event loop from handling other I/O.",
    "explanation": "Pauses module graph execution until resolved; supported in ESM only, not CommonJS.",
    "interviewAnswer": "Top-Level Await allows using `await` outside of async functions at the root of an ES module. When an imported module uses top-level await, the importing module pauses execution until the imported module promise resolves. It blocks module graph evaluation while waiting, but does NOT block the main thread event loop from handling other I/O. Pauses module graph execution until resolved; supported in ESM only, not CommonJS.",
    "importantPoints": [
      "Top-Level Await allows using `await` outside of async functions at the root of an ES module. When an imported module uses top-level await, the importing module pauses execution until the imported module promise resolves. It blocks module graph evaluation while waiting, but does NOT block the main thread event loop from handling other I/O.",
      "Pauses module graph execution until resolved; supported in ESM only, not CommonJS."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "top-level-await",
      "esm",
      "module-graph"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is the package.json `\"exports\"` field, and why is it preferred over `\"main\"` in modern Node.js packages?",
    "answer": "The `\"exports\"` field provides modern encapsulation and conditional exports. It: 1) Restricts public API access (submodules not declared in \"exports\" cannot be required by consumers), 2) Supports conditional resolution for ESM vs CJS (`\"import\": \"./esm.js\", \"require\": \"./cjs.js\"`), and 3) Supports subpath patterns (`\"./features/*\": \"./dist/features/*.js\"`).",
    "explanation": "Provides encapsulation, prevents deep internal private requires, and handles dual CJS/ESM publishing.",
    "interviewAnswer": "The `\"exports\"` field provides modern encapsulation and conditional exports. It: 1) Restricts public API access (submodules not declared in \"exports\" cannot be required by consumers), 2) Supports conditional resolution for ESM vs CJS (`\"import\": \"./esm.js\", \"require\": \"./cjs.js\"`), and 3) Supports subpath patterns (`\"./features/*\": \"./dist/features/*.js\"`). Provides encapsulation, prevents deep internal private requires, and handles dual CJS/ESM publishing.",
    "importantPoints": [
      "The `\"exports\"` field provides modern encapsulation and conditional exports. It: 1) Restricts public API access (submodules not declared in \"exports\" cannot be required by consumers), 2) Supports conditional resolution for ESM vs CJS (`\"import\": \"./esm.js\", \"require\": \"./cjs.js\"`), and 3) Supports subpath patterns (`\"./features/*\": \"./dist/features/*.js\"`).",
      "Provides encapsulation, prevents deep internal private requires, and handles dual CJS/ESM publishing."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "nodejs",
      "package-json",
      "exports-field",
      "packaging"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "How do you create a Dual CommonJS / ESM package that works seamlessly with both require() and import?",
    "answer": "In `package.json`: define conditional exports: `\"exports\": { \"import\": { \"types\": \"./dist/esm/index.d.ts\", \"default\": \"./dist/esm/index.js\" }, \"require\": { \"types\": \"./dist/cjs/index.d.ts\", \"default\": \"./dist/cjs/index.js\" } }`. Provide dual compiled bundles (ESM via rollup/tsc, CJS via tsc) and specify `\"types\"` first.",
    "explanation": "Standard conditional exports pattern for modern library authors supporting both CJS and ESM.",
    "interviewAnswer": "In `package.json`: define conditional exports: `\"exports\": { \"import\": { \"types\": \"./dist/esm/index.d.ts\", \"default\": \"./dist/esm/index.js\" }, \"require\": { \"types\": \"./dist/cjs/index.d.ts\", \"default\": \"./dist/cjs/index.js\" } }`. Provide dual compiled bundles (ESM via rollup/tsc, CJS via tsc) and specify `\"types\"` first. Standard conditional exports pattern for modern library authors supporting both CJS and ESM.",
    "importantPoints": [
      "In `package.json`: define conditional exports: `\"exports\": { \"import\": { \"types\": \"./dist/esm/index.d.ts\", \"default\": \"./dist/esm/index.js\" }, \"require\": { \"types\": \"./dist/cjs/index.d.ts\", \"default\": \"./dist/cjs/index.js\" } }`. Provide dual compiled bundles (ESM via rollup/tsc, CJS via tsc) and specify `\"types\"` first.",
      "Standard conditional exports pattern for modern library authors supporting both CJS and ESM."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "nodejs",
      "dual-package",
      "packaging",
      "esm",
      "commonjs"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is the \"Dual Package Hazard\" in Node.js?",
    "answer": "The Dual Package Hazard occurs when an application loads both the CommonJS version and ESM version of the same package (e.g. App imports ESM, but a third-party CJS dependency requires CJS). Because Node.js evaluates CJS and ESM module graphs separately, two independent instances of singletons, state stores, or class prototypes exist in memory, breaking `instanceof` checks and syncing.",
    "explanation": "Two separate module instances of a singleton library live concurrently in memory.",
    "interviewAnswer": "The Dual Package Hazard occurs when an application loads both the CommonJS version and ESM version of the same package (e.g. App imports ESM, but a third-party CJS dependency requires CJS). Because Node.js evaluates CJS and ESM module graphs separately, two independent instances of singletons, state stores, or class prototypes exist in memory, breaking `instanceof` checks and syncing. Two separate module instances of a singleton library live concurrently in memory.",
    "importantPoints": [
      "The Dual Package Hazard occurs when an application loads both the CommonJS version and ESM version of the same package (e.g. App imports ESM, but a third-party CJS dependency requires CJS). Because Node.js evaluates CJS and ESM module graphs separately, two independent instances of singletons, state stores, or class prototypes exist in memory, breaking `instanceof` checks and syncing.",
      "Two separate module instances of a singleton library live concurrently in memory."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "nodejs",
      "dual-package-hazard",
      "architecture",
      "singletons"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What are Import Maps in modern Node.js, and how do they customize module specifier resolution?",
    "answer": "Import Maps allow developers to control how module specifiers are mapped to URLs or file paths, eliminating hardcoded relative paths (`../../../utils`) or redirecting external package names to local overrides without symlinking.",
    "explanation": "Standardized mechanism to remap module specifiers dynamically.",
    "interviewAnswer": "Import Maps allow developers to control how module specifiers are mapped to URLs or file paths, eliminating hardcoded relative paths (`../../../utils`) or redirecting external package names to local overrides without symlinking. Standardized mechanism to remap module specifiers dynamically.",
    "importantPoints": [
      "Import Maps allow developers to control how module specifiers are mapped to URLs or file paths, eliminating hardcoded relative paths (`../../../utils`) or redirecting external package names to local overrides without symlinking.",
      "Standardized mechanism to remap module specifiers dynamically."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "import-maps",
      "esm",
      "packaging"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is the package.json `\"type\": \"module\"` setting, and what happens to `.cjs` and `.mjs` files under it?",
    "answer": "Setting `\"type\": \"module\"` instructs Node.js to treat all `.js` files within that package scope as ECMAScript Modules. Files ending in `.cjs` are always treated as CommonJS regardless of the `\"type\"` field, and `.mjs` files are always ESM.",
    "explanation": "Explicit file extensions (.cjs / .mjs) always override package.json \"type\".",
    "interviewAnswer": "Setting `\"type\": \"module\"` instructs Node.js to treat all `.js` files within that package scope as ECMAScript Modules. Files ending in `.cjs` are always treated as CommonJS regardless of the `\"type\"` field, and `.mjs` files are always ESM. Explicit file extensions (.cjs / .mjs) always override package.json \"type\".",
    "importantPoints": [
      "Setting `\"type\": \"module\"` instructs Node.js to treat all `.js` files within that package scope as ECMAScript Modules. Files ending in `.cjs` are always treated as CommonJS regardless of the `\"type\"` field, and `.mjs` files are always ESM.",
      "Explicit file extensions (.cjs / .mjs) always override package.json \"type\"."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "package-json",
      "esm",
      "cjs"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "How does require.resolve() work, and what is the difference between require.resolve() and require()?",
    "answer": "`require()` locates, reads, parses, compiles, and executes a module, returning its `module.exports`. `require.resolve()` only performs the resolution algorithm to locate the absolute path to the file on disk without executing or loading the file into memory. It throws MODULE_NOT_FOUND if the file does not exist.",
    "explanation": "require.resolve verifies presence and finds absolute path without executing module code.",
    "interviewAnswer": "`require()` locates, reads, parses, compiles, and executes a module, returning its `module.exports`. `require.resolve()` only performs the resolution algorithm to locate the absolute path to the file on disk without executing or loading the file into memory. It throws MODULE_NOT_FOUND if the file does not exist. require.resolve verifies presence and finds absolute path without executing module code.",
    "importantPoints": [
      "`require()` locates, reads, parses, compiles, and executes a module, returning its `module.exports`. `require.resolve()` only performs the resolution algorithm to locate the absolute path to the file on disk without executing or loading the file into memory. It throws MODULE_NOT_FOUND if the file does not exist.",
      "require.resolve verifies presence and finds absolute path without executing module code."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "require-resolve",
      "modules",
      "path"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What are Custom Loaders in Node.js ECMAScript Modules (via `module.register()`), and what can they do?",
    "answer": "Custom Loaders (Node 18.19+ / 20+) allow developers to hook into the ESM resolution and evaluation pipeline. By defining `resolve`, `load`, and `initialize` hooks, loaders can transpile TypeScript on the fly (e.g. ts-node/esm), load HTTPS URLs directly, mock dependencies during testing, or intercept source code before execution.",
    "explanation": "Provides customizable hooks into the ESM import pipeline replacing experimental loader flags.",
    "interviewAnswer": "Custom Loaders (Node 18.19+ / 20+) allow developers to hook into the ESM resolution and evaluation pipeline. By defining `resolve`, `load`, and `initialize` hooks, loaders can transpile TypeScript on the fly (e.g. ts-node/esm), load HTTPS URLs directly, mock dependencies during testing, or intercept source code before execution. Provides customizable hooks into the ESM import pipeline replacing experimental loader flags.",
    "importantPoints": [
      "Custom Loaders (Node 18.19+ / 20+) allow developers to hook into the ESM resolution and evaluation pipeline. By defining `resolve`, `load`, and `initialize` hooks, loaders can transpile TypeScript on the fly (e.g. ts-node/esm), load HTTPS URLs directly, mock dependencies during testing, or intercept source code before execution.",
      "Provides customizable hooks into the ESM import pipeline replacing experimental loader flags."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "nodejs",
      "esm-loaders",
      "module-register",
      "tooling"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is the purpose of the NODE_PATH environment variable in Node.js, and why is it deprecated in modern development?",
    "answer": "NODE_PATH specified colon-separated paths for Node.js to search for modules if not found in local `node_modules`. It is deprecated because it creates non-reproducible environments: an application might run on one machine but break in production where NODE_PATH is unset. Use package.json \"exports\" or relative paths instead.",
    "explanation": "Deprecated because it causes environment-specific non-reproducible dependency resolution.",
    "interviewAnswer": "NODE_PATH specified colon-separated paths for Node.js to search for modules if not found in local `node_modules`. It is deprecated because it creates non-reproducible environments: an application might run on one machine but break in production where NODE_PATH is unset. Use package.json \"exports\" or relative paths instead. Deprecated because it causes environment-specific non-reproducible dependency resolution.",
    "importantPoints": [
      "NODE_PATH specified colon-separated paths for Node.js to search for modules if not found in local `node_modules`. It is deprecated because it creates non-reproducible environments: an application might run on one machine but break in production where NODE_PATH is unset. Use package.json \"exports\" or relative paths instead.",
      "Deprecated because it causes environment-specific non-reproducible dependency resolution."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "node-path",
      "environment",
      "resolution"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is the difference between named exports and default exports in ESM, and how do they transpile to CommonJS?",
    "answer": "Named exports (`export const a = 1`) export specific symbols. Default export (`export default function() {}`) exports a primary entity. When transpiled to CommonJS (by Babel/TS), default export becomes `exports.default = ...` and named exports become `exports.a = ...`. CommonJS consumers must write `require(\"./file\").default` to access default exports.",
    "explanation": "CJS transpilers store default export in .default property, requiring .default when requiring.",
    "interviewAnswer": "Named exports (`export const a = 1`) export specific symbols. Default export (`export default function() {}`) exports a primary entity. When transpiled to CommonJS (by Babel/TS), default export becomes `exports.default = ...` and named exports become `exports.a = ...`. CommonJS consumers must write `require(\"./file\").default` to access default exports. CJS transpilers store default export in .default property, requiring .default when requiring.",
    "importantPoints": [
      "Named exports (`export const a = 1`) export specific symbols. Default export (`export default function() {}`) exports a primary entity. When transpiled to CommonJS (by Babel/TS), default export becomes `exports.default = ...` and named exports become `exports.a = ...`. CommonJS consumers must write `require(\"./file\").default` to access default exports.",
      "CJS transpilers store default export in .default property, requiring .default when requiring."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "esm",
      "default-export",
      "transpilation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is JSON module import in modern Node.js, and what syntax assertion/attribute is required?",
    "answer": "In modern Node.js ESM, importing JSON requires an Import Attribute (formerly import assertions): `import data from \"./data.json\" with { type: \"json\" };`. The `with { type: \"json\" }` attribute is required for security to prevent MIME-type confusion attacks where a server executes malicious JS disguised as JSON.",
    "explanation": "Import attributes enforce strict MIME validation preventing code injection.",
    "interviewAnswer": "In modern Node.js ESM, importing JSON requires an Import Attribute (formerly import assertions): `import data from \"./data.json\" with { type: \"json\" };`. The `with { type: \"json\" }` attribute is required for security to prevent MIME-type confusion attacks where a server executes malicious JS disguised as JSON. Import attributes enforce strict MIME validation preventing code injection.",
    "importantPoints": [
      "In modern Node.js ESM, importing JSON requires an Import Attribute (formerly import assertions): `import data from \"./data.json\" with { type: \"json\" };`. The `with { type: \"json\" }` attribute is required for security to prevent MIME-type confusion attacks where a server executes malicious JS disguised as JSON.",
      "Import attributes enforce strict MIME validation preventing code injection."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "import-attributes",
      "json-modules",
      "es2025",
      "security"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is the output of: // c.js: module.exports.foo = 1; module.exports = { bar: 2 }; // app.js: const c = require(\"./c\"); console.log(c.foo, c.bar);?",
    "answer": "Outputs undefined, 2. `module.exports.foo = 1` was overwritten when `module.exports` was reassigned to `{ bar: 2 }`. The exported object only contains `bar: 2`.",
    "explanation": "Reassigning module.exports replaces all previously assigned properties.",
    "interviewAnswer": "Outputs undefined, 2. `module.exports.foo = 1` was overwritten when `module.exports` was reassigned to `{ bar: 2 }`. The exported object only contains `bar: 2`. Reassigning module.exports replaces all previously assigned properties.",
    "importantPoints": [
      "Outputs undefined, 2. `module.exports.foo = 1` was overwritten when `module.exports` was reassigned to `{ bar: 2 }`. The exported object only contains `bar: 2`.",
      "Reassigning module.exports replaces all previously assigned properties."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "nodejs",
      "output-prediction",
      "commonjs",
      "module-exports"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "How does package.json subpath imports (`\"#internal/*\"`) work in modern Node.js?",
    "answer": "The `\"imports\"` field in `package.json` defines internal private aliases accessible only within the package itself (starting with `#`, e.g. `import db from \"#db\"` mapped to `./src/db/connection.js`). Unlike `\"exports\"`, which defines public APIs for external consumers, `\"imports\"` allows private internal aliases without messy `../../` relative paths.",
    "explanation": "Private internal aliasing starting with # supported natively by Node.js without bundlers.",
    "interviewAnswer": "The `\"imports\"` field in `package.json` defines internal private aliases accessible only within the package itself (starting with `#`, e.g. `import db from \"#db\"` mapped to `./src/db/connection.js`). Unlike `\"exports\"`, which defines public APIs for external consumers, `\"imports\"` allows private internal aliases without messy `../../` relative paths. Private internal aliasing starting with # supported natively by Node.js without bundlers.",
    "importantPoints": [
      "The `\"imports\"` field in `package.json` defines internal private aliases accessible only within the package itself (starting with `#`, e.g. `import db from \"#db\"` mapped to `./src/db/connection.js`). Unlike `\"exports\"`, which defines public APIs for external consumers, `\"imports\"` allows private internal aliases without messy `../../` relative paths.",
      "Private internal aliasing starting with # supported natively by Node.js without bundlers."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "subpath-imports",
      "package-json",
      "architecture"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "Why does ESM in Node.js require explicit file extensions (e.g. import \"./file.js\") whereas CommonJS does not?",
    "answer": "CommonJS automatically probed the filesystem for `.js`, `.json`, and `/index.js`, causing dozens of synchronous stat() system calls for every require. ESM conforms strictly to web browser standards where network URL probing is unacceptably slow, requiring exact file extensions to keep resolution deterministic and fast.",
    "explanation": "Probing filesystem without extensions causes hundreds of slow stat() calls; ESM enforces explicit filenames.",
    "interviewAnswer": "CommonJS automatically probed the filesystem for `.js`, `.json`, and `/index.js`, causing dozens of synchronous stat() system calls for every require. ESM conforms strictly to web browser standards where network URL probing is unacceptably slow, requiring exact file extensions to keep resolution deterministic and fast. Probing filesystem without extensions causes hundreds of slow stat() calls; ESM enforces explicit filenames.",
    "importantPoints": [
      "CommonJS automatically probed the filesystem for `.js`, `.json`, and `/index.js`, causing dozens of synchronous stat() system calls for every require. ESM conforms strictly to web browser standards where network URL probing is unacceptably slow, requiring exact file extensions to keep resolution deterministic and fast.",
      "Probing filesystem without extensions causes hundreds of slow stat() calls; ESM enforces explicit filenames."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "esm",
      "extensions",
      "performance",
      "web-standards"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is module monkey-patching in CommonJS, and why does ESM intentionally prevent it?",
    "answer": "In CommonJS, `require()` returns mutable objects, allowing libraries to \"monkey-patch\" methods (e.g. `const fs = require(\"fs\"); fs.readFile = customFn;`). In ESM, exported namespace objects are sealed and immutable: properties cannot be modified, deleted, or reassigned, preventing unpredictable runtime side-effects.",
    "explanation": "ESM namespace objects are frozen by specification, preventing dangerous monkey-patching.",
    "interviewAnswer": "In CommonJS, `require()` returns mutable objects, allowing libraries to \"monkey-patch\" methods (e.g. `const fs = require(\"fs\"); fs.readFile = customFn;`). In ESM, exported namespace objects are sealed and immutable: properties cannot be modified, deleted, or reassigned, preventing unpredictable runtime side-effects. ESM namespace objects are frozen by specification, preventing dangerous monkey-patching.",
    "importantPoints": [
      "In CommonJS, `require()` returns mutable objects, allowing libraries to \"monkey-patch\" methods (e.g. `const fs = require(\"fs\"); fs.readFile = customFn;`). In ESM, exported namespace objects are sealed and immutable: properties cannot be modified, deleted, or reassigned, preventing unpredictable runtime side-effects.",
      "ESM namespace objects are frozen by specification, preventing dangerous monkey-patching."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "monkey-patching",
      "esm",
      "immutability",
      "security"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is the output of: import * as math from \"./math.js\"; math.add = () => 0; in an ES module?",
    "answer": "Throws TypeError: Cannot assign to read only property 'add' of object '[object Module]'. Module namespace objects in ESM are sealed and immutable.",
    "explanation": "ESM namespace objects are read-only.",
    "interviewAnswer": "Throws TypeError: Cannot assign to read only property 'add' of object '[object Module]'. Module namespace objects in ESM are sealed and immutable. ESM namespace objects are read-only.",
    "importantPoints": [
      "Throws TypeError: Cannot assign to read only property 'add' of object '[object Module]'. Module namespace objects in ESM are sealed and immutable.",
      "ESM namespace objects are read-only."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "nodejs",
      "output-prediction",
      "esm",
      "namespace"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "How does require.main differ from module in a CommonJS application?",
    "answer": "`module` represents the currently executing file. `require.main` represents the entry point module loaded when the Node.js process launched. Comparing `if (require.main === module)` determines if the file was run directly from the CLI (`node app.js`) or imported by another module (`require(\"./app\")`), ideal for CLI utilities.",
    "explanation": "require.main === module detects if the current file is the CLI entrypoint.",
    "interviewAnswer": "`module` represents the currently executing file. `require.main` represents the entry point module loaded when the Node.js process launched. Comparing `if (require.main === module)` determines if the file was run directly from the CLI (`node app.js`) or imported by another module (`require(\"./app\")`), ideal for CLI utilities. require.main === module detects if the current file is the CLI entrypoint.",
    "importantPoints": [
      "`module` represents the currently executing file. `require.main` represents the entry point module loaded when the Node.js process launched. Comparing `if (require.main === module)` determines if the file was run directly from the CLI (`node app.js`) or imported by another module (`require(\"./app\")`), ideal for CLI utilities.",
      "require.main === module detects if the current file is the CLI entrypoint."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "require-main",
      "cli",
      "entrypoint"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "How do you check if a file is the main entrypoint in ECMAScript Modules (ESM)?",
    "answer": "In ESM: `import { fileURLToPath } from \"url\"; if (process.argv[1] === fileURLToPath(import.meta.url)) { /* run directly */ }`. Node 20+ also supports comparing `import.meta.filename === process.argv[1]`.",
    "explanation": "Compares process.argv[1] against import.meta.filename or fileURLToPath(import.meta.url).",
    "interviewAnswer": "In ESM: `import { fileURLToPath } from \"url\"; if (process.argv[1] === fileURLToPath(import.meta.url)) { /* run directly */ }`. Node 20+ also supports comparing `import.meta.filename === process.argv[1]`. Compares process.argv[1] against import.meta.filename or fileURLToPath(import.meta.url).",
    "importantPoints": [
      "In ESM: `import { fileURLToPath } from \"url\"; if (process.argv[1] === fileURLToPath(import.meta.url)) { /* run directly */ }`. Node 20+ also supports comparing `import.meta.filename === process.argv[1]`.",
      "Compares process.argv[1] against import.meta.filename or fileURLToPath(import.meta.url)."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "nodejs",
      "esm",
      "entrypoint",
      "cli"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is the purpose of the Built-in Test Runner in Node.js (`node:test`)?",
    "answer": "Node.js (18+) includes a native test runner: `import test, { describe, it } from \"node:test\"; import assert from \"node:assert\";`. Running `node --test` runs unit tests with zero third-party dependencies (no Jest, Mocha, or Vitest required), supporting mocking, coverage (`--experimental-test-coverage`), and async suites.",
    "explanation": "Zero-dependency native test runner built directly into the Node.js core runtime.",
    "interviewAnswer": "Node.js (18+) includes a native test runner: `import test, { describe, it } from \"node:test\"; import assert from \"node:assert\";`. Running `node --test` runs unit tests with zero third-party dependencies (no Jest, Mocha, or Vitest required), supporting mocking, coverage (`--experimental-test-coverage`), and async suites. Zero-dependency native test runner built directly into the Node.js core runtime.",
    "importantPoints": [
      "Node.js (18+) includes a native test runner: `import test, { describe, it } from \"node:test\"; import assert from \"node:assert\";`. Running `node --test` runs unit tests with zero third-party dependencies (no Jest, Mocha, or Vitest required), supporting mocking, coverage (`--experimental-test-coverage`), and async suites.",
      "Zero-dependency native test runner built directly into the Node.js core runtime."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "node-test",
      "testing",
      "tooling"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What happens when you require() a directory that contains an index.js vs package.json?",
    "answer": "Node first checks if the directory contains a `package.json`. If found and it specifies a `\"main\"` field, Node loads that main file. If no `package.json` exists or `\"main\"` is omitted, it falls back to looking for `index.js`, `index.json`, or `index.node`.",
    "explanation": "Folder resolution: package.json main -> index.js fallback.",
    "interviewAnswer": "Node first checks if the directory contains a `package.json`. If found and it specifies a `\"main\"` field, Node loads that main file. If no `package.json` exists or `\"main\"` is omitted, it falls back to looking for `index.js`, `index.json`, or `index.node`. Folder resolution: package.json main -> index.js fallback.",
    "importantPoints": [
      "Node first checks if the directory contains a `package.json`. If found and it specifies a `\"main\"` field, Node loads that main file. If no `package.json` exists or `\"main\"` is omitted, it falls back to looking for `index.js`, `index.json`, or `index.node`.",
      "Folder resolution: package.json main -> index.js fallback."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "directory-resolution",
      "index-js",
      "package-json"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "modules",
    "question": "What is the difference between a Bare Import, a Relative Import, and an Absolute Import in Node.js?",
    "answer": "1) Bare import (`import \"lodash\"`): Resolved via core modules or `node_modules` directory lookup. 2) Relative import (`import \"./utils.js\"` or `\"../config.js\"`): Resolved relative to the current file path. 3) Absolute import (`import \"/opt/app/db.js\"` or `file:///...`): Resolved directly from root filesystem.",
    "explanation": "Bare = node_modules/core; Relative = ./ or ../; Absolute = leading slash or file URL.",
    "interviewAnswer": "1) Bare import (`import \"lodash\"`): Resolved via core modules or `node_modules` directory lookup. 2) Relative import (`import \"./utils.js\"` or `\"../config.js\"`): Resolved relative to the current file path. 3) Absolute import (`import \"/opt/app/db.js\"` or `file:///...`): Resolved directly from root filesystem. Bare = node_modules/core; Relative = ./ or ../; Absolute = leading slash or file URL.",
    "importantPoints": [
      "1) Bare import (`import \"lodash\"`): Resolved via core modules or `node_modules` directory lookup. 2) Relative import (`import \"./utils.js\"` or `\"../config.js\"`): Resolved relative to the current file path. 3) Absolute import (`import \"/opt/app/db.js\"` or `file:///...`): Resolved directly from root filesystem.",
      "Bare = node_modules/core; Relative = ./ or ../; Absolute = leading slash or file URL."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "import-types",
      "resolution",
      "fundamentals"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
