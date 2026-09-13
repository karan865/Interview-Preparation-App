import { SeedQuestion } from '../types';

export const tsNarrowingTypeGuardsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "An API response can have several distinct shapes. How would you model it safely in TypeScript?",
    "title": "An API response can have several distinct shapes. How would you model it safely in TypeScript?",
    "answer": "Model the response as a Discriminated Union (Tagged Union) sharing a common literal property (e.g. 'status' or 'kind') so TypeScript narrows the payload automatically in conditional branches.",
    "explanation": "Instead of making all possible fields optional on a single giant interface (which allows impossible combinations like having error messages and data simultaneously), define separate interfaces for each state: `SuccessResponse`, `ErrorResponse`, `LoadingResponse`. Each shares a common literal discriminator key like `status: 'success' | 'error' | 'loading'`. When you check `if (res.status === 'success')`, TypeScript's Control Flow Analysis narrows the object, guaranteeing access to `res.data` and making `res.error` inaccessible.",
    "interviewAnswer": "Model the response as a Discriminated Union (Tagged Union) sharing a common literal property (e.g. 'status' or 'kind') so TypeScript narrows the payload automatically in conditional branches. Instead of making all possible fields optional on a single giant interface (which allows impossible combinations like having error messages and data simultaneously), define separate interfaces for each state: `SuccessResponse`, `ErrorResponse`, `LoadingResponse`. Each shares a common literal discriminator key like `status: 'success' | 'error' | 'loading'`. When you check `if (res.status === 'success')`, TypeScript's Control Flow Analysis narrows the object, guaranteeing access to `res.data` and making `res.error` inaccessible.",
    "importantPoints": [
      "Use Discriminated Unions (one common literal key across all union members)",
      "Eliminates illegal state representations (e.g., both data and error present)",
      "Control flow analysis narrows properties automatically inside if/switch blocks",
      "Combine with 'never' exhaustiveness checks in default switch cases"
    ],
    "commonMistakes": [
      "Using a non-literal general string like `status: string`, which prevents discrimination",
      "Creating a single optional mega-interface `{ data?: User; error?: string }`"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Scenario",
    "tags": [
      "typescript",
      "narrowing",
      "discriminated-unions",
      "api-modeling",
      "architecture"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type ApiResponse<T> =\n  | { status: 'success'; data: T; timestamp: number }\n  | { status: 'error'; error: string; code: number }\n  | { status: 'loading' };\n\nfunction handleResponse<T>(res: ApiResponse<T>) {\n  switch (res.status) {\n    case 'success':\n      console.log('Data:', res.data); // Narrowed! Only data exists here\n      break;\n    case 'error':\n      console.error('Error:', res.error); // Narrowed!\n      break;\n    case 'loading':\n      console.log('Loading...');\n      break;\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "What are User-Defined Type Guards (Type Predicates) and how do they work?",
    "title": "What are User-Defined Type Guards (Type Predicates) and how do they work?",
    "answer": "A user-defined type guard is a function whose return type is a Type Predicate (`arg is Type`), instructing the compiler to narrow the argument's type if the function returns true.",
    "explanation": "When built-in type guards (typeof, instanceof) are insufficient (e.g. verifying an unknown API response has specific nested object fields), a custom function can perform runtime validation. Typing its return as `val is User` signals to TypeScript that inside any `if (isUser(val))` block, `val` is safely treated as `User`.",
    "interviewAnswer": "A user-defined type guard is a function whose return type is a Type Predicate (`arg is Type`), instructing the compiler to narrow the argument's type if the function returns true. When built-in type guards (typeof, instanceof) are insufficient (e.g. verifying an unknown API response has specific nested object fields), a custom function can perform runtime validation. Typing its return as `val is User` signals to TypeScript that inside any `if (isUser(val))` block, `val` is safely treated as `User`.",
    "importantPoints": [
      "Syntax: `parameterName is TargetType` as return type",
      "Executes runtime boolean logic and tells compiler when type is confirmed",
      "Indispensable for validating `unknown` payloads without unsafe type assertions",
      "If the runtime check is buggy, the compiler trustingly propagates the error (must write accurate guards)"
    ],
    "commonMistakes": [
      "Returning a plain `boolean` instead of `x is TargetType`, failing to trigger compiler narrowing",
      "Writing an inaccurate guard that returns true when properties are actually missing"
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
      "type-guards",
      "type-predicates",
      "narrowing",
      "runtime-checks"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "interface Admin {\n  name: string;\n  role: 'admin';\n  permissions: string[];\n}\n\nfunction isAdmin(user: unknown): user is Admin {\n  return (\n    typeof user === 'object' &&\n    user !== null &&\n    (user as Admin).role === 'admin' &&\n    Array.isArray((user as Admin).permissions)\n  );\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How do Assertion Functions work using the 'asserts' keyword?",
    "title": "How do Assertion Functions work using the 'asserts' keyword?",
    "answer": "Assertion functions use `asserts condition` or `asserts val is Type` to throw an error if validation fails, narrowing the variable's type for all subsequent lines.",
    "explanation": "Introduced in TypeScript 3.7, assertion functions mirror Node's `assert` or invariant libraries. Unlike type predicates (which require an `if` block), assertion functions narrow types in the remaining execution scope of the caller because they throw if the condition is false.",
    "interviewAnswer": "Assertion functions use `asserts condition` or `asserts val is Type` to throw an error if validation fails, narrowing the variable's type for all subsequent lines. Introduced in TypeScript 3.7, assertion functions mirror Node's `assert` or invariant libraries. Unlike type predicates (which require an `if` block), assertion functions narrow types in the remaining execution scope of the caller because they throw if the condition is false.",
    "importantPoints": [
      "Syntax: `function assertNonNull<T>(val: T): asserts val is NonNullable<T>`",
      "Narrows types linearly without nesting inside `if` statements",
      "Throws an error if the assertion fails at runtime",
      "Must be declared using function declarations or explicit function expressions"
    ],
    "commonMistakes": [
      "Using an arrow function without explicit assertion type annotations",
      "Failing to actually throw an error inside the assertion function"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding",
    "tags": [
      "typescript",
      "narrowing",
      "asserts",
      "assertion-functions",
      "invariants"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function assertIsString(val: unknown): asserts val is string {\n  if (typeof val !== 'string') {\n    throw new TypeError(`Expected string, received ${typeof val}`);\n  }\n}\n\nfunction processValue(val: unknown) {\n  assertIsString(val);\n  // From here downward, val is guaranteed to be string:\n  console.log(val.toUpperCase());\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How does the 'in' operator narrow types in TypeScript?",
    "title": "How does the 'in' operator narrow types in TypeScript?",
    "answer": "The 'in' operator narrows a union of object types by checking if a specific property name exists on the value at runtime.",
    "explanation": "JavaScript's `'prop' in obj` evaluates to true if the property exists on the object or its prototype chain. TypeScript uses this expression to eliminate union members that do not declare the specified property.",
    "interviewAnswer": "The 'in' operator narrows a union of object types by checking if a specific property name exists on the value at runtime. JavaScript's `'prop' in obj` evaluates to true if the property exists on the object or its prototype chain. TypeScript uses this expression to eliminate union members that do not declare the specified property.",
    "importantPoints": [
      "JavaScript runtime operator utilized by TypeScript CFA",
      "Narrows unions by discriminating on unique property names",
      "Safe to use on object types without type casting",
      "Supports negative narrowing in the else branch"
    ],
    "commonMistakes": [
      "Using 'in' on primitives (number, string, boolean), which throws a runtime TypeError"
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
      "narrowing",
      "in-operator",
      "control-flow"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Fish = { swim: () => void };\ntype Bird = { fly: () => void };\n\nfunction move(animal: Fish | Bird) {\n  if ('swim' in animal) {\n    animal.swim(); // Narrowed to Fish!\n  } else {\n    animal.fly();  // Narrowed to Bird!\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How does TypeScript perform exhaustive checking using the 'never' type in switch statements?",
    "title": "How does TypeScript perform exhaustive checking using the 'never' type in switch statements?",
    "answer": "Assigning the unhandled value to a variable typed as 'never' in the default case causes a compile-time error if any union member was missed.",
    "explanation": "When switching over a discriminated union, TypeScript eliminates each handled case. If all cases are handled, the variable inside the `default` branch has type `never`. By assigning it to `const _exhaustive: never = val;`, the compiler will refuse to build if someone adds a new member to the union (e.g. `'archived'`) without adding a corresponding case.",
    "interviewAnswer": "Assigning the unhandled value to a variable typed as 'never' in the default case causes a compile-time error if any union member was missed. When switching over a discriminated union, TypeScript eliminates each handled case. If all cases are handled, the variable inside the `default` branch has type `never`. By assigning it to `const _exhaustive: never = val;`, the compiler will refuse to build if someone adds a new member to the union (e.g. `'archived'`) without adding a corresponding case.",
    "importantPoints": [
      "Guarantees all union cases are explicitly handled at compile time",
      "Fails compilation immediately if a new union variant is added to the domain",
      "Emits standard fallback runtime error if unexpected data slips in",
      "Essential pattern for state machines and Redux action reducers"
    ],
    "commonMistakes": [
      "Omitting the assignment to `never`, leaving unhandled cases silent until runtime crashes occur"
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
      "narrowing",
      "never",
      "exhaustive-check",
      "discriminated-unions"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Shape = \n  | { kind: 'circle'; radius: number }\n  | { kind: 'square'; size: number }\n  | { kind: 'triangle'; base: number; height: number };\n\nfunction getArea(shape: Shape): number {\n  switch (shape.kind) {\n    case 'circle': return Math.PI * shape.radius ** 2;\n    case 'square': return shape.size * shape.size;\n    case 'triangle': return 0.5 * shape.base * shape.height;\n    default: {\n      const _exhaustiveCheck: never = shape;\n      throw new Error(`Unhandled shape: ${JSON.stringify(_exhaustiveCheck)}`);\n    }\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How does typeof narrowing distinguish between null and object?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How does typeof narrowing distinguish between null and object?: How does this work in TypeScript and",
    "answer": "Understanding How does typeof narrowing distinguish between null and object? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does typeof narrowing distinguish between null and object? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How does typeof narrowing distinguish between null and object? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does typeof narrowing distinguish between null and object? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How does typeof narrowing distinguish between null and object?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How does instanceof narrowing work and why does it fail with plain JSON objects?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How does instanceof narrowing work and why does it fail with plain JSON objects?: How does this work",
    "answer": "Understanding How does instanceof narrowing work and why does it fail with plain JSON objects? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does instanceof narrowing work and why does it fail with plain JSON objects? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How does instanceof narrowing work and why does it fail with plain JSON objects? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does instanceof narrowing work and why does it fail with plain JSON objects? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How does instanceof narrowing work and why does it fail with plain JSON objects?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "What is Control Flow Analysis (CFA) and how does it track variable assignments across branches?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "What is Control Flow Analysis (CFA) and how does it track variable assignments across branches?: How",
    "answer": "Understanding What is Control Flow Analysis (CFA) and how does it track variable assignments across branches? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of What is Control Flow Analysis (CFA) and how does it track variable assignments across branches? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding What is Control Flow Analysis (CFA) and how does it track variable assignments across branches? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of What is Control Flow Analysis (CFA) and how does it track variable assignments across branches? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for What is Control Flow Analysis (CFA) and how does it track variable assignments across branches?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How does truthiness narrowing work with empty strings, zero, and null?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How does truthiness narrowing work with empty strings, zero, and null?: How does this work in TypeSc",
    "answer": "Understanding How does truthiness narrowing work with empty strings, zero, and null? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does truthiness narrowing work with empty strings, zero, and null? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How does truthiness narrowing work with empty strings, zero, and null? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does truthiness narrowing work with empty strings, zero, and null? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How does truthiness narrowing work with empty strings, zero, and null?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How to narrow an array of mixed types using `Array.prototype.filter` and a type guard?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How to narrow an array of mixed types using `Array.prototype.filter` and a type guard?: How does thi",
    "answer": "Understanding How to narrow an array of mixed types using `Array.prototype.filter` and a type guard? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow an array of mixed types using `Array.prototype.filter` and a type guard? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How to narrow an array of mixed types using `Array.prototype.filter` and a type guard? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow an array of mixed types using `Array.prototype.filter` and a type guard? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How to narrow an array of mixed types using `Array.prototype.filter` and a type guard?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "Why does calling a function sometimes reset narrowed type assumptions (aliasing and mutation)?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "Why does calling a function sometimes reset narrowed type assumptions (aliasing and mutation)?: How ",
    "answer": "Understanding Why does calling a function sometimes reset narrowed type assumptions (aliasing and mutation)? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of Why does calling a function sometimes reset narrowed type assumptions (aliasing and mutation)? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding Why does calling a function sometimes reset narrowed type assumptions (aliasing and mutation)? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of Why does calling a function sometimes reset narrowed type assumptions (aliasing and mutation)? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for Why does calling a function sometimes reset narrowed type assumptions (aliasing and mutation)?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How to narrow a generic type parameter inside a function body?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How to narrow a generic type parameter inside a function body?: How does this work in TypeScript and",
    "answer": "Understanding How to narrow a generic type parameter inside a function body? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow a generic type parameter inside a function body? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How to narrow a generic type parameter inside a function body? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow a generic type parameter inside a function body? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How to narrow a generic type parameter inside a function body?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding",
    "tags": [
      "typescript",
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "What is equality narrowing (`===`, `!==`, `==`, `!=`) in TypeScript?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "What is equality narrowing (`===`, `!==`, `==`, `!=`) in TypeScript?: How does this work in TypeScri",
    "answer": "Understanding What is equality narrowing (`===`, `!==`, `==`, `!=`) in TypeScript? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of What is equality narrowing (`===`, `!==`, `==`, `!=`) in TypeScript? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding What is equality narrowing (`===`, `!==`, `==`, `!=`) in TypeScript? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of What is equality narrowing (`===`, `!==`, `==`, `!=`) in TypeScript? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for What is equality narrowing (`===`, `!==`, `==`, `!=`) in TypeScript?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How does TypeScript narrow optional chaining expressions `obj?.prop`?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How does TypeScript narrow optional chaining expressions `obj?.prop`?: How does this work in TypeScr",
    "answer": "Understanding How does TypeScript narrow optional chaining expressions `obj?.prop`? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does TypeScript narrow optional chaining expressions `obj?.prop`? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How does TypeScript narrow optional chaining expressions `obj?.prop`? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does TypeScript narrow optional chaining expressions `obj?.prop`? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How does TypeScript narrow optional chaining expressions `obj?.prop`?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How to type check unknown error objects in try/catch blocks using custom error guards?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How to type check unknown error objects in try/catch blocks using custom error guards?: How does thi",
    "answer": "Understanding How to type check unknown error objects in try/catch blocks using custom error guards? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to type check unknown error objects in try/catch blocks using custom error guards? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How to type check unknown error objects in try/catch blocks using custom error guards? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to type check unknown error objects in try/catch blocks using custom error guards? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How to type check unknown error objects in try/catch blocks using custom error guards?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "What are the limitations of custom type predicates and how can they produce false type safety?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "What are the limitations of custom type predicates and how can they produce false type safety?: How ",
    "answer": "Understanding What are the limitations of custom type predicates and how can they produce false type safety? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of What are the limitations of custom type predicates and how can they produce false type safety? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding What are the limitations of custom type predicates and how can they produce false type safety? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of What are the limitations of custom type predicates and how can they produce false type safety? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for What are the limitations of custom type predicates and how can they produce false type safety?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Trade-off",
    "tags": [
      "typescript",
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How does discriminated union narrowing work with nested object properties?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How does discriminated union narrowing work with nested object properties?: How does this work in Ty",
    "answer": "Understanding How does discriminated union narrowing work with nested object properties? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does discriminated union narrowing work with nested object properties? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How does discriminated union narrowing work with nested object properties? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does discriminated union narrowing work with nested object properties? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How does discriminated union narrowing work with nested object properties?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How to narrow types using schema validation libraries like Zod or Valibot?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How to narrow types using schema validation libraries like Zod or Valibot?: How does this work in Ty",
    "answer": "Understanding How to narrow types using schema validation libraries like Zod or Valibot? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow types using schema validation libraries like Zod or Valibot? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How to narrow types using schema validation libraries like Zod or Valibot? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow types using schema validation libraries like Zod or Valibot? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How to narrow types using schema validation libraries like Zod or Valibot?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "What causes 'This condition will always return false since the types have no overlap'?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "What causes 'This condition will always return false since the types have no overlap'?: How does thi",
    "answer": "Understanding What causes 'This condition will always return false since the types have no overlap'? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of What causes 'This condition will always return false since the types have no overlap'? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding What causes 'This condition will always return false since the types have no overlap'? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of What causes 'This condition will always return false since the types have no overlap'? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for What causes 'This condition will always return false since the types have no overlap'?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How does the non-null assertion operator `!` interact with control flow analysis?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How does the non-null assertion operator `!` interact with control flow analysis?: How does this wor",
    "answer": "Understanding How does the non-null assertion operator `!` interact with control flow analysis? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does the non-null assertion operator `!` interact with control flow analysis? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How does the non-null assertion operator `!` interact with control flow analysis? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does the non-null assertion operator `!` interact with control flow analysis? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How does the non-null assertion operator `!` interact with control flow analysis?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How to narrow unions of primitive types (string | number | boolean)?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How to narrow unions of primitive types (string | number | boolean)?: How does this work in TypeScri",
    "answer": "Understanding How to narrow unions of primitive types (string | number | boolean)? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow unions of primitive types (string | number | boolean)? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How to narrow unions of primitive types (string | number | boolean)? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow unions of primitive types (string | number | boolean)? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How to narrow unions of primitive types (string | number | boolean)?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How does TypeScript narrow types when destructuring discriminated unions?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How does TypeScript narrow types when destructuring discriminated unions?: How does this work in Typ",
    "answer": "Understanding How does TypeScript narrow types when destructuring discriminated unions? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does TypeScript narrow types when destructuring discriminated unions? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How does TypeScript narrow types when destructuring discriminated unions? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does TypeScript narrow types when destructuring discriminated unions? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How does TypeScript narrow types when destructuring discriminated unions?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "What is the difference between narrowing with `typeof x === 'object'` and `x !== null`?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "What is the difference between narrowing with `typeof x === 'object'` and `x !== null`?: How does th",
    "answer": "Understanding What is the difference between narrowing with `typeof x === 'object'` and `x !== null`? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of What is the difference between narrowing with `typeof x === 'object'` and `x !== null`? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding What is the difference between narrowing with `typeof x === 'object'` and `x !== null`? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of What is the difference between narrowing with `typeof x === 'object'` and `x !== null`? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for What is the difference between narrowing with `typeof x === 'object'` and `x !== null`?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How to narrow custom domain entities in a microservices architecture using branded strings?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How to narrow custom domain entities in a microservices architecture using branded strings?: How doe",
    "answer": "Understanding How to narrow custom domain entities in a microservices architecture using branded strings? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow custom domain entities in a microservices architecture using branded strings? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How to narrow custom domain entities in a microservices architecture using branded strings? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow custom domain entities in a microservices architecture using branded strings? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How to narrow custom domain entities in a microservices architecture using branded strings?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How to write a type guard for checking if an object implements an interface?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How to write a type guard for checking if an object implements an interface?: How does this work in ",
    "answer": "Understanding How to write a type guard for checking if an object implements an interface? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to write a type guard for checking if an object implements an interface? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How to write a type guard for checking if an object implements an interface? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to write a type guard for checking if an object implements an interface? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How to write a type guard for checking if an object implements an interface?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How does TypeScript 4.4+ preserve type narrowing across constant boolean flag variables?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How does TypeScript 4.4+ preserve type narrowing across constant boolean flag variables?: How does t",
    "answer": "Understanding How does TypeScript 4.4+ preserve type narrowing across constant boolean flag variables? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does TypeScript 4.4+ preserve type narrowing across constant boolean flag variables? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How does TypeScript 4.4+ preserve type narrowing across constant boolean flag variables? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does TypeScript 4.4+ preserve type narrowing across constant boolean flag variables? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How does TypeScript 4.4+ preserve type narrowing across constant boolean flag variables?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How to narrow Record types with unknown values into strict typed dictionaries?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How to narrow Record types with unknown values into strict typed dictionaries?: How does this work i",
    "answer": "Understanding How to narrow Record types with unknown values into strict typed dictionaries? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow Record types with unknown values into strict typed dictionaries? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How to narrow Record types with unknown values into strict typed dictionaries? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow Record types with unknown values into strict typed dictionaries? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How to narrow Record types with unknown values into strict typed dictionaries?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "Why can't `instanceof` be used to narrow TypeScript interfaces?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "Why can't `instanceof` be used to narrow TypeScript interfaces?: How does this work in TypeScript an",
    "answer": "Understanding Why can't `instanceof` be used to narrow TypeScript interfaces? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of Why can't `instanceof` be used to narrow TypeScript interfaces? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding Why can't `instanceof` be used to narrow TypeScript interfaces? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of Why can't `instanceof` be used to narrow TypeScript interfaces? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for Why can't `instanceof` be used to narrow TypeScript interfaces?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How to narrow polymorphic event types in WebSocket message listeners?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How to narrow polymorphic event types in WebSocket message listeners?: How does this work in TypeScr",
    "answer": "Understanding How to narrow polymorphic event types in WebSocket message listeners? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow polymorphic event types in WebSocket message listeners? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How to narrow polymorphic event types in WebSocket message listeners? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow polymorphic event types in WebSocket message listeners? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How to narrow polymorphic event types in WebSocket message listeners?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How does CFA handle early returns, breaks, and throws to eliminate branches?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How does CFA handle early returns, breaks, and throws to eliminate branches?: How does this work in ",
    "answer": "Understanding How does CFA handle early returns, breaks, and throws to eliminate branches? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does CFA handle early returns, breaks, and throws to eliminate branches? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How does CFA handle early returns, breaks, and throws to eliminate branches? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does CFA handle early returns, breaks, and throws to eliminate branches? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How does CFA handle early returns, breaks, and throws to eliminate branches?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How to narrow tuple types when inspecting their length property?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How to narrow tuple types when inspecting their length property?: How does this work in TypeScript a",
    "answer": "Understanding How to narrow tuple types when inspecting their length property? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow tuple types when inspecting their length property? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How to narrow tuple types when inspecting their length property? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow tuple types when inspecting their length property? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How to narrow tuple types when inspecting their length property?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How to type a safe `isDefined` filter guard that eliminates null and undefined from arrays?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How to type a safe `isDefined` filter guard that eliminates null and undefined from arrays?: How doe",
    "answer": "Understanding How to type a safe `isDefined` filter guard that eliminates null and undefined from arrays? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to type a safe `isDefined` filter guard that eliminates null and undefined from arrays? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How to type a safe `isDefined` filter guard that eliminates null and undefined from arrays? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to type a safe `isDefined` filter guard that eliminates null and undefined from arrays? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How to type a safe `isDefined` filter guard that eliminates null and undefined from arrays?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "What is the difference between an assertion function and a type predicate in error handling?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "What is the difference between an assertion function and a type predicate in error handling?: How do",
    "answer": "Understanding What is the difference between an assertion function and a type predicate in error handling? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of What is the difference between an assertion function and a type predicate in error handling? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding What is the difference between an assertion function and a type predicate in error handling? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of What is the difference between an assertion function and a type predicate in error handling? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for What is the difference between an assertion function and a type predicate in error handling?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How does TypeScript narrow recursive tree structures during traversal?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How does TypeScript narrow recursive tree structures during traversal?: How does this work in TypeSc",
    "answer": "Understanding How does TypeScript narrow recursive tree structures during traversal? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does TypeScript narrow recursive tree structures during traversal? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How does TypeScript narrow recursive tree structures during traversal? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How does TypeScript narrow recursive tree structures during traversal? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How does TypeScript narrow recursive tree structures during traversal?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How to narrow function parameters typed as unions of callback signatures?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How to narrow function parameters typed as unions of callback signatures?: How does this work in Typ",
    "answer": "Understanding How to narrow function parameters typed as unions of callback signatures? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow function parameters typed as unions of callback signatures? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How to narrow function parameters typed as unions of callback signatures? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow function parameters typed as unions of callback signatures? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How to narrow function parameters typed as unions of callback signatures?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "Why does checking `Array.isArray()` correctly narrow `unknown` to `any[]` or `unknown[]`?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "Why does checking `Array.isArray()` correctly narrow `unknown` to `any[]` or `unknown[]`?: How does ",
    "answer": "Understanding Why does checking `Array.isArray()` correctly narrow `unknown` to `any[]` or `unknown[]`? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of Why does checking `Array.isArray()` correctly narrow `unknown` to `any[]` or `unknown[]`? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding Why does checking `Array.isArray()` correctly narrow `unknown` to `any[]` or `unknown[]`? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of Why does checking `Array.isArray()` correctly narrow `unknown` to `any[]` or `unknown[]`? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for Why does checking `Array.isArray()` correctly narrow `unknown` to `any[]` or `unknown[]`?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How to narrow a union of class instances that share a common inheritance root?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How to narrow a union of class instances that share a common inheritance root?: How does this work i",
    "answer": "Understanding How to narrow a union of class instances that share a common inheritance root? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow a union of class instances that share a common inheritance root? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How to narrow a union of class instances that share a common inheritance root? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to narrow a union of class instances that share a common inheritance root? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How to narrow a union of class instances that share a common inheritance root?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "What are the common pitfalls when narrowing types inside async Promise chains?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "What are the common pitfalls when narrowing types inside async Promise chains?: How does this work i",
    "answer": "Understanding What are the common pitfalls when narrowing types inside async Promise chains? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of What are the common pitfalls when narrowing types inside async Promise chains? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding What are the common pitfalls when narrowing types inside async Promise chains? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of What are the common pitfalls when narrowing types inside async Promise chains? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for What are the common pitfalls when narrowing types inside async Promise chains?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How to design an extensible Discriminated Union pattern that allows third-party plugin extensions?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How to design an extensible Discriminated Union pattern that allows third-party plugin extensions?: ",
    "answer": "Understanding How to design an extensible Discriminated Union pattern that allows third-party plugin extensions? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to design an extensible Discriminated Union pattern that allows third-party plugin extensions? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How to design an extensible Discriminated Union pattern that allows third-party plugin extensions? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to design an extensible Discriminated Union pattern that allows third-party plugin extensions? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How to design an extensible Discriminated Union pattern that allows third-party plugin extensions?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How to write a custom type guard for validating FormData or URLSearchParams entries?: How does this work in TypeScript and how do you implement it reliably?",
    "title": "How to write a custom type guard for validating FormData or URLSearchParams entries?: How does this ",
    "answer": "Understanding How to write a custom type guard for validating FormData or URLSearchParams entries? is essential for safe runtime type validation and control flow analysis in TypeScript.",
    "explanation": "Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to write a custom type guard for validating FormData or URLSearchParams entries? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "interviewAnswer": "Understanding How to write a custom type guard for validating FormData or URLSearchParams entries? is essential for safe runtime type validation and control flow analysis in TypeScript. Type narrowing and type guards bridge runtime JavaScript values with compile-time TypeScript guarantees. Proper implementation of How to write a custom type guard for validating FormData or URLSearchParams entries? eliminates runtime TypeError exceptions, ensures exhaustive branching, and enables clean API data consumption.",
    "importantPoints": [
      "Enables reliable runtime-to-compile-time type narrowing for How to write a custom type guard for validating FormData or URLSearchParams entries?",
      "Prevents unhandled runtime null/undefined crashes",
      "Leverages TypeScript Control Flow Analysis (CFA) effectively",
      "Replaces unsafe type assertions with proven validation logic"
    ],
    "commonMistakes": [
      "Writing buggy type predicates that claim an object has properties it lacks at runtime",
      "Using brute-force type casting instead of proper narrowing"
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
      "narrowing",
      "type-guards",
      "cfa",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "function isString(val: unknown): val is string {\n  return typeof val === 'string';\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
