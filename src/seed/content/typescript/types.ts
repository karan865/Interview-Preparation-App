import { SeedQuestion } from '../types';

export const tsTypesQuestions: SeedQuestion[] = [
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is the difference between 'any', 'unknown', and 'never' in TypeScript?",
    "title": "What is the difference between 'any', 'unknown', and 'never' in TypeScript?",
    "answer": "'any' turns off all type checking; 'unknown' is the type-safe counterpart requiring narrowing before usage; 'never' represents values that can never occur.",
    "explanation": "'any' is both a top and bottom type: anything can be assigned to it, and it can be assigned to anything without checks. 'unknown' is the top type: anything can be assigned to it, but you CANNOT call methods or pass it anywhere without first narrowing it via typeof/instanceof. 'never' is the bottom type: no value can ever be assigned to it (except never itself); it represents unreachable code paths or functions that always throw.",
    "interviewAnswer": "'any' turns off all type checking; 'unknown' is the type-safe counterpart requiring narrowing before usage; 'never' represents values that can never occur. 'any' is both a top and bottom type: anything can be assigned to it, and it can be assigned to anything without checks. 'unknown' is the top type: anything can be assigned to it, but you CANNOT call methods or pass it anywhere without first narrowing it via typeof/instanceof. 'never' is the bottom type: no value can ever be assigned to it (except never itself); it represents unreachable code paths or functions that always throw.",
    "importantPoints": [
      "any: disables type safety completely; avoid in production code",
      "unknown: safe top type; requires explicit type guards before access",
      "never: bottom type; used for exhaustive checks and impossible branches",
      "Assigning to never triggers compile errors if unhandled cases exist"
    ],
    "commonMistakes": [
      "Using 'any' to quickly fix a type error instead of properly typing with 'unknown'",
      "Confusing 'void' (returns nothing) with 'never' (never returns / throws)"
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
      "types",
      "any",
      "unknown",
      "never",
      "type-safety"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "let a: any = \"hello\"; a.foo(); // Compiles fine, crashes at runtime!\n\nlet u: unknown = \"hello\";\n// u.toUpperCase(); // Error: Object is of type 'unknown'.\nif (typeof u === 'string') u.toUpperCase(); // OK!\n\nfunction fail(msg: string): never {\n  throw new Error(msg);\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is the difference between 'void' and 'undefined' as return types?",
    "title": "What is the difference between 'void' and 'undefined' as return types?",
    "answer": "'void' indicates a function whose return value should not be observed or used; 'undefined' strictly requires the function to return the literal value undefined.",
    "explanation": "If a function is typed with return type `: void`, it can return a value (e.g. in callback positions), but caller code is warned against using the returned value. If a function is typed with return type `: undefined`, the function body must explicitly return `undefined` or have a bare `return;` statement.",
    "interviewAnswer": "'void' indicates a function whose return value should not be observed or used; 'undefined' strictly requires the function to return the literal value undefined. If a function is typed with return type `: void`, it can return a value (e.g. in callback positions), but caller code is warned against using the returned value. If a function is typed with return type `: undefined`, the function body must explicitly return `undefined` or have a bare `return;` statement.",
    "importantPoints": [
      "void: intended for side-effect functions with no meaningful return value",
      "undefined: explicit JavaScript primitive type requiring return undefined",
      "Callbacks returning void allow returning arbitrary values without compiler complaints",
      "Prevents accidental consumption of return values in event listeners"
    ],
    "commonMistakes": [
      "Typing a callback as `() => undefined` when `() => void` was intended, rejecting functions that return values"
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
      "types",
      "void",
      "undefined",
      "functions"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// void allows any return in callback contexts:\nconst doSomething: () => void = () => 42; // Allowed!\n\n// undefined strictly enforces returning undefined:\nfunction strictUndef(): undefined {\n  return undefined; // Must explicitly return undefined\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What are Union Types and Intersection Types, and how do they behave on objects?",
    "title": "What are Union Types and Intersection Types, and how do they behave on objects?",
    "answer": "Union (A | B) allows values of either type A or type B (accessing only common properties); Intersection (A & B) combines all properties from both types.",
    "explanation": "A Union `A | B` represents a value that is either an A or a B. Before narrowing, you can only access properties that exist in BOTH types. An Intersection `A & B` merges definitions, requiring the object to satisfy both types simultaneously and allowing access to all properties of both A and B.",
    "interviewAnswer": "Union (A | B) allows values of either type A or type B (accessing only common properties); Intersection (A & B) combines all properties from both types. A Union `A | B` represents a value that is either an A or a B. Before narrowing, you can only access properties that exist in BOTH types. An Intersection `A & B` merges definitions, requiring the object to satisfy both types simultaneously and allowing access to all properties of both A and B.",
    "importantPoints": [
      "Union (|): logical OR; only common properties are directly accessible without narrowing",
      "Intersection (&): logical AND; merges all properties from both types",
      "Intersections of primitive types with incompatible values (string & number) result in 'never'",
      "Unions are commonly paired with discriminants for safe branching"
    ],
    "commonMistakes": [
      "Attempting to access non-common properties on a union without a type guard",
      "Intersecting conflicting property types, creating an impossible 'never' property"
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
      "types",
      "union",
      "intersection",
      "composition"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Admin = { name: string; privileges: string[] };\ntype User = { name: string; email: string };\n\n// Union: only 'name' is common\nfunction printInfo(person: Admin | User) {\n  console.log(person.name); // OK\n  // console.log(person.email); // Error: Property 'email' does not exist on type 'Admin'\n}\n\n// Intersection: has name, privileges, AND email\ntype SuperUser = Admin & User;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What are Literal Types and how are they used in TypeScript?",
    "title": "What are Literal Types and how are they used in TypeScript?",
    "answer": "Literal Types represent exact, specific primitive values (e.g. \"active\", 404, true) rather than general categories like string or number.",
    "explanation": "In JavaScript, a variable declared with `const x = 'GET'` cannot change; TypeScript represents this as the string literal type `'GET'`. Combining literal types with unions creates finite enums that prevent typos and guide autocompletion without runtime overhead.",
    "interviewAnswer": "Literal Types represent exact, specific primitive values (e.g. \"active\", 404, true) rather than general categories like string or number. In JavaScript, a variable declared with `const x = 'GET'` cannot change; TypeScript represents this as the string literal type `'GET'`. Combining literal types with unions creates finite enums that prevent typos and guide autocompletion without runtime overhead.",
    "importantPoints": [
      "Represents exact specific values: string, number, or boolean literals",
      "Combined with unions to create lightweight string enums: 'success' | 'error' | 'loading'",
      "'const' declarations infer literal types by default, while 'let' widens to general primitives",
      "Used as discriminator keys in Discriminated Unions"
    ],
    "commonMistakes": [
      "Type widening: passing an object literal to a function expecting string literals without 'as const'"
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
      "types",
      "literal-types",
      "type-widening",
      "as-const"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';\nfunction request(url: string, method: HttpMethod) {}\n\nrequest('/users', 'GET'); // OK\n// request('/users', 'PATCH'); // Error: Argument of type '\"PATCH\"' not assignable."
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is Type Widening and how does 'as const' prevent it?",
    "title": "What is Type Widening and how does 'as const' prevent it?",
    "answer": "Type Widening occurs when TypeScript broadens specific literal types to general primitives (e.g. 'blue' -> string); 'as const' locks types to immutable readonly literals.",
    "explanation": "When you declare an object `const config = { method: 'GET' };`, TypeScript widens `config.method` to `string` because object properties are mutable. If passed to a function expecting `'GET' | 'POST'`, it fails. Appending `as const` (const assertion) instructs the compiler to infer deeply readonly literal types without widening.",
    "interviewAnswer": "Type Widening occurs when TypeScript broadens specific literal types to general primitives (e.g. 'blue' -> string); 'as const' locks types to immutable readonly literals. When you declare an object `const config = { method: 'GET' };`, TypeScript widens `config.method` to `string` because object properties are mutable. If passed to a function expecting `'GET' | 'POST'`, it fails. Appending `as const` (const assertion) instructs the compiler to infer deeply readonly literal types without widening.",
    "importantPoints": [
      "Mutable let and object properties widen literals to primitives",
      "Prevents passing object properties to literal union parameters",
      "'as const' converts all object properties to readonly literal types recursively",
      "Also converts arrays to fixed readonly tuples"
    ],
    "commonMistakes": [
      "Forgetting 'as const' when creating configuration objects passed to typed APIs",
      "Trying to mutate properties of an object marked with 'as const'"
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
      "as-const",
      "type-widening",
      "readonly",
      "literal-types"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Without 'as const': method is widened to string\nconst req1 = { method: 'GET' }; \n\n// With 'as const': method is exactly literal 'GET' and readonly\nconst req2 = { method: 'GET' } as const;\n\nfunction send(method: 'GET' | 'POST') {}\n// send(req1.method); // Error: string is not assignable to 'GET' | 'POST'\nsend(req2.method); // OK!"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What are Tuple Types and how do they differ from standard Arrays?",
    "title": "What are Tuple Types and how do they differ from standard Arrays?",
    "answer": "A Tuple is an array with a fixed number of elements where each element position has an exact, known type.",
    "explanation": "Standard arrays `number[]` can contain any count of numbers. A tuple `[string, number]` specifies that index 0 is always a string and index 1 is always a number. Tuples support optional elements `[string, number?]`, rest elements `[string, ...number[]]`, and labeled elements for documentation `[lat: number, lng: number]`.",
    "interviewAnswer": "A Tuple is an array with a fixed number of elements where each element position has an exact, known type. Standard arrays `number[]` can contain any count of numbers. A tuple `[string, number]` specifies that index 0 is always a string and index 1 is always a number. Tuples support optional elements `[string, number?]`, rest elements `[string, ...number[]]`, and labeled elements for documentation `[lat: number, lng: number]`.",
    "importantPoints": [
      "Fixed-length array with typed element positions",
      "React's useState hook returns a tuple `[state, setState]`",
      "Supports labeled elements: `[x: number, y: number]` for clear IDE hints",
      "Readonly tuples prevent push/pop mutations"
    ],
    "commonMistakes": [
      "Using array methods like .push() on non-readonly tuples without compiler warnings (use readonly tuples to prevent this)"
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
      "types",
      "tuples",
      "arrays",
      "use-state"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Labeled tuple type:\ntype Coordinates = [latitude: number, longitude: number];\nconst location: Coordinates = [37.7749, -122.4194];\n\n// React Hook style:\ntype UseToggle = [boolean, () => void];"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What are Enums in TypeScript, and what are the trade-offs between numeric, string, and const enums?",
    "title": "What are Enums in TypeScript, and what are the trade-offs between numeric, string, and const enums?",
    "answer": "Enums generate runtime objects and reverse mappings; numeric enums lack type safety, string enums are safer, and 'const enum' inlines values at compile time.",
    "explanation": "Numeric enums generate bi-directional lookup objects in JS but historically allowed invalid numbers to be assigned. String enums do not generate reverse mappings and are type-safe. `const enum` inlines the raw constant at compile time, leaving zero runtime JS object, but can break when consuming declaration files across isolated modules.",
    "interviewAnswer": "Enums generate runtime objects and reverse mappings; numeric enums lack type safety, string enums are safer, and 'const enum' inlines values at compile time. Numeric enums generate bi-directional lookup objects in JS but historically allowed invalid numbers to be assigned. String enums do not generate reverse mappings and are type-safe. `const enum` inlines the raw constant at compile time, leaving zero runtime JS object, but can break when consuming declaration files across isolated modules.",
    "importantPoints": [
      "Numeric enums have reverse mapping: Direction[0] === 'Up'",
      "String enums: Direction.Up === 'UP' (no reverse mapping)",
      "const enum: inlines literal values at compile time, eliminating JS object overhead",
      "Modern best practice often favors Union of String Literals over enums"
    ],
    "commonMistakes": [
      "Using numeric enums where arbitrary numbers are inadvertently accepted",
      "Using const enums in library code consumed with isolatedModules or Babel"
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
      "types",
      "enums",
      "const-enum",
      "union-vs-enum"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Numeric Enum (generates runtime reverse mapping object)\nenum Status { Pending, Approved }\n\n// Const Enum (inlines literal directly; 0 JS emitted)\nconst enum HttpCode { Ok = 200, NotFound = 404 }\nconst code = HttpCode.Ok; // compiles to: const code = 200;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "Why do modern TypeScript developers prefer Union of String Literals over Enums?",
    "title": "Why do modern TypeScript developers prefer Union of String Literals over Enums?",
    "answer": "String literal unions generate zero runtime JavaScript code, serialize cleanly to JSON, integrate seamlessly with external API strings, and avoid bundling overhead.",
    "explanation": "Enums introduce non-standard JavaScript runtime artifacts that cannot be tree-shaken as cleanly. A string literal union `'admin' | 'user'` exists purely in the type system. A raw API response `{ role: 'admin' }` satisfies the union directly without needing to import or cast to an Enum object.",
    "interviewAnswer": "String literal unions generate zero runtime JavaScript code, serialize cleanly to JSON, integrate seamlessly with external API strings, and avoid bundling overhead. Enums introduce non-standard JavaScript runtime artifacts that cannot be tree-shaken as cleanly. A string literal union `'admin' | 'user'` exists purely in the type system. A raw API response `{ role: 'admin' }` satisfies the union directly without needing to import or cast to an Enum object.",
    "importantPoints": [
      "Zero runtime code emitted (pure compile-time construct)",
      "Direct match with JSON payloads from APIs without mapping",
      "Simpler syntax and better tree-shaking support",
      "Works seamlessly across Babel, esbuild, and SWC without isolatedModules issues"
    ],
    "commonMistakes": [
      "Cannot iterate over keys at runtime without a companion array"
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
      "enums",
      "string-literals",
      "trade-offs",
      "modern-typescript"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Union of string literals (Zero runtime JS):\ntype Role = 'admin' | 'manager' | 'user';\n\n// Companion array for runtime iteration if needed:\nconst ROLES: readonly Role[] = ['admin', 'manager', 'user'];"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How does the 'keyof' type operator work and what does it produce?",
    "title": "How does the 'keyof' type operator work and what does it produce?",
    "answer": "'keyof T' takes an object type and produces a string or numeric literal union of its declared keys.",
    "explanation": "Given an interface `User { id: string; name: string; age: number; }`, `keyof User` produces the union `'id' | 'name' | 'age'`. It is fundamental for building type-safe property accessors, generic getter functions, and mapped types.",
    "interviewAnswer": "'keyof T' takes an object type and produces a string or numeric literal union of its declared keys. Given an interface `User { id: string; name: string; age: number; }`, `keyof User` produces the union `'id' | 'name' | 'age'`. It is fundamental for building type-safe property accessors, generic getter functions, and mapped types.",
    "importantPoints": [
      "Produces union of keys: keyof { a: number, b: string } -> 'a' | 'b'",
      "If an index signature exists `[k: string]: any`, keyof produces `string | number`",
      "Used with indexed access: `T[keyof T]` yields union of all value types",
      "Enables safe property lookups like `function getProp<T, K extends keyof T>(obj: T, key: K): T[K]`"
    ],
    "commonMistakes": [
      "Using keyof on an instantiated runtime object instead of `keyof typeof obj`"
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
      "types",
      "keyof",
      "generics",
      "indexed-access"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "interface Product {\n  id: string;\n  price: number;\n}\ntype ProductKeys = keyof Product; // 'id' | 'price'\n\nfunction getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {\n  return obj[key];\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How does the 'typeof' type operator differ from JavaScript's runtime typeof operator?",
    "title": "How does the 'typeof' type operator differ from JavaScript's runtime typeof operator?",
    "answer": "In a type context, 'typeof' queries the TypeScript type of an existing JavaScript variable or object; in an expression context, it returns a runtime type string.",
    "explanation": "JavaScript's `typeof` executes at runtime and returns a string like 'object', 'number', 'string'. TypeScript's `typeof` operates in type positions (e.g. `type Config = typeof defaultConfig;`) to extract the complete inferred static type from an instantiated JavaScript value.",
    "interviewAnswer": "In a type context, 'typeof' queries the TypeScript type of an existing JavaScript variable or object; in an expression context, it returns a runtime type string. JavaScript's `typeof` executes at runtime and returns a string like 'object', 'number', 'string'. TypeScript's `typeof` operates in type positions (e.g. `type Config = typeof defaultConfig;`) to extract the complete inferred static type from an instantiated JavaScript value.",
    "importantPoints": [
      "Type-level typeof: captures static type from value without duplicating definitions",
      "Runtime typeof: evaluates variable primitive type at runtime",
      "Commonly paired with keyof: `keyof typeof obj` extracts keys of runtime object",
      "Eliminates redundant type declarations for constants"
    ],
    "commonMistakes": [
      "Confusing the type context `typeof myVar` with runtime expression `if (typeof x === 'string')`"
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
      "types",
      "typeof",
      "type-query",
      "inference"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "const defaultSettings = {\n  theme: 'dark',\n  retries: 3,\n  debug: false\n};\n\n// Extracts type from runtime object:\ntype AppSettings = typeof defaultSettings;\n// type AppSettings = { theme: string; retries: number; debug: boolean; }"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is Indexed Access Type (Lookup Type) and how does T[K] work?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "What is Indexed Access Type (Lookup Type) and how does T[K] work?: How does this work in TypeScript'",
    "answer": "Mastering What is Indexed Access Type (Lookup Type) and how does T[K] work? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, What is Indexed Access Type (Lookup Type) and how does T[K] work? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering What is Indexed Access Type (Lookup Type) and how does T[K] work? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, What is Indexed Access Type (Lookup Type) and how does T[K] work? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for What is Indexed Access Type (Lookup Type) and how does T[K] work?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What are Template Literal Types and how can they model string patterns?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "What are Template Literal Types and how can they model string patterns?: How does this work in TypeS",
    "answer": "Mastering What are Template Literal Types and how can they model string patterns? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, What are Template Literal Types and how can they model string patterns? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering What are Template Literal Types and how can they model string patterns? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, What are Template Literal Types and how can they model string patterns? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for What are Template Literal Types and how can they model string patterns?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How does the 'never' type enforce exhaustive pattern matching in switch statements?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How does the 'never' type enforce exhaustive pattern matching in switch statements?: How does this w",
    "answer": "Mastering How does the 'never' type enforce exhaustive pattern matching in switch statements? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How does the 'never' type enforce exhaustive pattern matching in switch statements? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How does the 'never' type enforce exhaustive pattern matching in switch statements? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How does the 'never' type enforce exhaustive pattern matching in switch statements? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How does the 'never' type enforce exhaustive pattern matching in switch statements?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is the difference between 'object', 'Object', and '{}' in TypeScript?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "What is the difference between 'object', 'Object', and '{}' in TypeScript?: How does this work in Ty",
    "answer": "Mastering What is the difference between 'object', 'Object', and '{}' in TypeScript? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, What is the difference between 'object', 'Object', and '{}' in TypeScript? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering What is the difference between 'object', 'Object', and '{}' in TypeScript? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, What is the difference between 'object', 'Object', and '{}' in TypeScript? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for What is the difference between 'object', 'Object', and '{}' in TypeScript?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How does Structural Typing (Duck Typing) work and how does it compare to Nominal Typing?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How does Structural Typing (Duck Typing) work and how does it compare to Nominal Typing?: How does t",
    "answer": "Mastering How does Structural Typing (Duck Typing) work and how does it compare to Nominal Typing? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How does Structural Typing (Duck Typing) work and how does it compare to Nominal Typing? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How does Structural Typing (Duck Typing) work and how does it compare to Nominal Typing? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How does Structural Typing (Duck Typing) work and how does it compare to Nominal Typing? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How does Structural Typing (Duck Typing) work and how does it compare to Nominal Typing?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How to implement Nominal Typing or 'Type Branding' using unique symbols or phantom properties?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How to implement Nominal Typing or 'Type Branding' using unique symbols or phantom properties?: How ",
    "answer": "Mastering How to implement Nominal Typing or 'Type Branding' using unique symbols or phantom properties? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How to implement Nominal Typing or 'Type Branding' using unique symbols or phantom properties? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How to implement Nominal Typing or 'Type Branding' using unique symbols or phantom properties? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How to implement Nominal Typing or 'Type Branding' using unique symbols or phantom properties? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How to implement Nominal Typing or 'Type Branding' using unique symbols or phantom properties?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is Excess Property Checking and why does it only trigger on object literals?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "What is Excess Property Checking and why does it only trigger on object literals?: How does this wor",
    "answer": "Mastering What is Excess Property Checking and why does it only trigger on object literals? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, What is Excess Property Checking and why does it only trigger on object literals? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering What is Excess Property Checking and why does it only trigger on object literals? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, What is Excess Property Checking and why does it only trigger on object literals? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for What is Excess Property Checking and why does it only trigger on object literals?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How does the 'unknown' type interact with type intersections and unions?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How does the 'unknown' type interact with type intersections and unions?: How does this work in Type",
    "answer": "Mastering How does the 'unknown' type interact with type intersections and unions? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How does the 'unknown' type interact with type intersections and unions? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How does the 'unknown' type interact with type intersections and unions? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How does the 'unknown' type interact with type intersections and unions? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How does the 'unknown' type interact with type intersections and unions?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is the 'symbol' and 'unique symbol' type in TypeScript?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "What is the 'symbol' and 'unique symbol' type in TypeScript?: How does this work in TypeScript's typ",
    "answer": "Mastering What is the 'symbol' and 'unique symbol' type in TypeScript? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, What is the 'symbol' and 'unique symbol' type in TypeScript? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering What is the 'symbol' and 'unique symbol' type in TypeScript? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, What is the 'symbol' and 'unique symbol' type in TypeScript? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for What is the 'symbol' and 'unique symbol' type in TypeScript?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How does TypeScript model BigInt and what compiler targets support it?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How does TypeScript model BigInt and what compiler targets support it?: How does this work in TypeSc",
    "answer": "Mastering How does TypeScript model BigInt and what compiler targets support it? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How does TypeScript model BigInt and what compiler targets support it? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How does TypeScript model BigInt and what compiler targets support it? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How does TypeScript model BigInt and what compiler targets support it? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How does TypeScript model BigInt and what compiler targets support it?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "Why is 'any & T' evaluated to 'any' while 'unknown & T' is evaluated to 'T'?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "Why is 'any & T' evaluated to 'any' while 'unknown & T' is evaluated to 'T'?: How does this work in ",
    "answer": "Mastering Why is 'any & T' evaluated to 'any' while 'unknown & T' is evaluated to 'T'? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, Why is 'any & T' evaluated to 'any' while 'unknown & T' is evaluated to 'T'? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering Why is 'any & T' evaluated to 'any' while 'unknown & T' is evaluated to 'T'? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, Why is 'any & T' evaluated to 'any' while 'unknown & T' is evaluated to 'T'? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for Why is 'any & T' evaluated to 'any' while 'unknown & T' is evaluated to 'T'?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How to use Recursive Type Aliases to model deeply nested JSON data?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How to use Recursive Type Aliases to model deeply nested JSON data?: How does this work in TypeScrip",
    "answer": "Mastering How to use Recursive Type Aliases to model deeply nested JSON data? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How to use Recursive Type Aliases to model deeply nested JSON data? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How to use Recursive Type Aliases to model deeply nested JSON data? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How to use Recursive Type Aliases to model deeply nested JSON data? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How to use Recursive Type Aliases to model deeply nested JSON data?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is the difference between 'readonly string[]' and 'ReadonlyArray<string>'?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "What is the difference between 'readonly string[]' and 'ReadonlyArray<string>'?: How does this work ",
    "answer": "Mastering What is the difference between 'readonly string[]' and 'ReadonlyArray<string>'? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, What is the difference between 'readonly string[]' and 'ReadonlyArray<string>'? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering What is the difference between 'readonly string[]' and 'ReadonlyArray<string>'? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, What is the difference between 'readonly string[]' and 'ReadonlyArray<string>'? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for What is the difference between 'readonly string[]' and 'ReadonlyArray<string>'?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How to type dynamic object keys using Index Signatures vs Record<K, V>?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How to type dynamic object keys using Index Signatures vs Record<K, V>?: How does this work in TypeS",
    "answer": "Mastering How to type dynamic object keys using Index Signatures vs Record<K, V>? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How to type dynamic object keys using Index Signatures vs Record<K, V>? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How to type dynamic object keys using Index Signatures vs Record<K, V>? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How to type dynamic object keys using Index Signatures vs Record<K, V>? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How to type dynamic object keys using Index Signatures vs Record<K, V>?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What causes 'Index signature for type string is missing' error and how to fix it?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "What causes 'Index signature for type string is missing' error and how to fix it?: How does this wor",
    "answer": "Mastering What causes 'Index signature for type string is missing' error and how to fix it? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, What causes 'Index signature for type string is missing' error and how to fix it? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering What causes 'Index signature for type string is missing' error and how to fix it? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, What causes 'Index signature for type string is missing' error and how to fix it? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for What causes 'Index signature for type string is missing' error and how to fix it?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How do Discriminated Unions work and what makes a good discriminant property?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How do Discriminated Unions work and what makes a good discriminant property?: How does this work in",
    "answer": "Mastering How do Discriminated Unions work and what makes a good discriminant property? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How do Discriminated Unions work and what makes a good discriminant property? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How do Discriminated Unions work and what makes a good discriminant property? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How do Discriminated Unions work and what makes a good discriminant property? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How do Discriminated Unions work and what makes a good discriminant property?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How to type Redux or useReducer action types using Discriminated Unions?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How to type Redux or useReducer action types using Discriminated Unions?: How does this work in Type",
    "answer": "Mastering How to type Redux or useReducer action types using Discriminated Unions? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How to type Redux or useReducer action types using Discriminated Unions? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How to type Redux or useReducer action types using Discriminated Unions? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How to type Redux or useReducer action types using Discriminated Unions? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How to type Redux or useReducer action types using Discriminated Unions?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How does TypeScript check assignability between types with optional properties?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How does TypeScript check assignability between types with optional properties?: How does this work ",
    "answer": "Mastering How does TypeScript check assignability between types with optional properties? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How does TypeScript check assignability between types with optional properties? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How does TypeScript check assignability between types with optional properties? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How does TypeScript check assignability between types with optional properties? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How does TypeScript check assignability between types with optional properties?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is the difference between casting with 'as Type' vs angle bracket '<Type>' syntax in JSX files?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "What is the difference between casting with 'as Type' vs angle bracket '<Type>' syntax in JSX files?",
    "answer": "Mastering What is the difference between casting with 'as Type' vs angle bracket '<Type>' syntax in JSX files? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, What is the difference between casting with 'as Type' vs angle bracket '<Type>' syntax in JSX files? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering What is the difference between casting with 'as Type' vs angle bracket '<Type>' syntax in JSX files? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, What is the difference between casting with 'as Type' vs angle bracket '<Type>' syntax in JSX files? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for What is the difference between casting with 'as Type' vs angle bracket '<Type>' syntax in JSX files?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is a 'const assertion' on arrays and how does it create immutable literal tuples?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "What is a 'const assertion' on arrays and how does it create immutable literal tuples?: How does thi",
    "answer": "Mastering What is a 'const assertion' on arrays and how does it create immutable literal tuples? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, What is a 'const assertion' on arrays and how does it create immutable literal tuples? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering What is a 'const assertion' on arrays and how does it create immutable literal tuples? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, What is a 'const assertion' on arrays and how does it create immutable literal tuples? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for What is a 'const assertion' on arrays and how does it create immutable literal tuples?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How does type narrowing work on discriminated unions when the discriminant is a boolean?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How does type narrowing work on discriminated unions when the discriminant is a boolean?: How does t",
    "answer": "Mastering How does type narrowing work on discriminated unions when the discriminant is a boolean? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How does type narrowing work on discriminated unions when the discriminant is a boolean? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How does type narrowing work on discriminated unions when the discriminant is a boolean? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How does type narrowing work on discriminated unions when the discriminant is a boolean? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How does type narrowing work on discriminated unions when the discriminant is a boolean?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "Why can 'unknown' be assigned any value, but cannot be assigned TO any other type except 'any' and 'unknown'?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "Why can 'unknown' be assigned any value, but cannot be assigned TO any other type except 'any' and '",
    "answer": "Mastering Why can 'unknown' be assigned any value, but cannot be assigned TO any other type except 'any' and 'unknown'? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, Why can 'unknown' be assigned any value, but cannot be assigned TO any other type except 'any' and 'unknown'? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering Why can 'unknown' be assigned any value, but cannot be assigned TO any other type except 'any' and 'unknown'? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, Why can 'unknown' be assigned any value, but cannot be assigned TO any other type except 'any' and 'unknown'? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for Why can 'unknown' be assigned any value, but cannot be assigned TO any other type except 'any' and 'unknown'?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How to model an API response that can be { status: 'success', data: T } or { status: 'error', error: string }?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How to model an API response that can be { status: 'success', data: T } or { status: 'error', error:",
    "answer": "Mastering How to model an API response that can be { status: 'success', data: T } or { status: 'error', error: string }? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How to model an API response that can be { status: 'success', data: T } or { status: 'error', error: string }? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How to model an API response that can be { status: 'success', data: T } or { status: 'error', error: string }? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How to model an API response that can be { status: 'success', data: T } or { status: 'error', error: string }? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How to model an API response that can be { status: 'success', data: T } or { status: 'error', error: string }?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is type flattening / type normalization and how to write a Prettify helper type?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "What is type flattening / type normalization and how to write a Prettify helper type?: How does this",
    "answer": "Mastering What is type flattening / type normalization and how to write a Prettify helper type? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, What is type flattening / type normalization and how to write a Prettify helper type? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering What is type flattening / type normalization and how to write a Prettify helper type? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, What is type flattening / type normalization and how to write a Prettify helper type? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for What is type flattening / type normalization and how to write a Prettify helper type?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How does the 'satisfies' operator introduced in TypeScript 4.9 differ from 'as' type casting?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How does the 'satisfies' operator introduced in TypeScript 4.9 differ from 'as' type casting?: How d",
    "answer": "Mastering How does the 'satisfies' operator introduced in TypeScript 4.9 differ from 'as' type casting? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How does the 'satisfies' operator introduced in TypeScript 4.9 differ from 'as' type casting? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How does the 'satisfies' operator introduced in TypeScript 4.9 differ from 'as' type casting? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How does the 'satisfies' operator introduced in TypeScript 4.9 differ from 'as' type casting? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How does the 'satisfies' operator introduced in TypeScript 4.9 differ from 'as' type casting?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Comparison",
    "tags": [
      "typescript",
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "Why does 'satisfies' preserve literal types while validating conformance against an interface?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "Why does 'satisfies' preserve literal types while validating conformance against an interface?: How ",
    "answer": "Mastering Why does 'satisfies' preserve literal types while validating conformance against an interface? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, Why does 'satisfies' preserve literal types while validating conformance against an interface? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering Why does 'satisfies' preserve literal types while validating conformance against an interface? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, Why does 'satisfies' preserve literal types while validating conformance against an interface? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for Why does 'satisfies' preserve literal types while validating conformance against an interface?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is the difference between a subtype and an assignable type in TypeScript?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "What is the difference between a subtype and an assignable type in TypeScript?: How does this work i",
    "answer": "Mastering What is the difference between a subtype and an assignable type in TypeScript? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, What is the difference between a subtype and an assignable type in TypeScript? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering What is the difference between a subtype and an assignable type in TypeScript? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, What is the difference between a subtype and an assignable type in TypeScript? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for What is the difference between a subtype and an assignable type in TypeScript?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How to model strongly typed event names with template literal types like `on${Capitalize<Event>}`?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How to model strongly typed event names with template literal types like `on${Capitalize<Event>}`?: ",
    "answer": "Mastering How to model strongly typed event names with template literal types like `on${Capitalize<Event>}`? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How to model strongly typed event names with template literal types like `on${Capitalize<Event>}`? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How to model strongly typed event names with template literal types like `on${Capitalize<Event>}`? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How to model strongly typed event names with template literal types like `on${Capitalize<Event>}`? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How to model strongly typed event names with template literal types like `on${Capitalize<Event>}`?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What are numeric literal enums and how do they differ from string literal enums in memory?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "What are numeric literal enums and how do they differ from string literal enums in memory?: How does",
    "answer": "Mastering What are numeric literal enums and how do they differ from string literal enums in memory? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, What are numeric literal enums and how do they differ from string literal enums in memory? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering What are numeric literal enums and how do they differ from string literal enums in memory? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, What are numeric literal enums and how do they differ from string literal enums in memory? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for What are numeric literal enums and how do they differ from string literal enums in memory?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How to convert an array of strings into a union type using `typeof array[number]`?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How to convert an array of strings into a union type using `typeof array[number]`?: How does this wo",
    "answer": "Mastering How to convert an array of strings into a union type using `typeof array[number]`? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How to convert an array of strings into a union type using `typeof array[number]`? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How to convert an array of strings into a union type using `typeof array[number]`? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How to convert an array of strings into a union type using `typeof array[number]`? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How to convert an array of strings into a union type using `typeof array[number]`?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "Why does `keyof any` evaluate to `string | number | symbol`?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "Why does `keyof any` evaluate to `string | number | symbol`?: How does this work in TypeScript's typ",
    "answer": "Mastering Why does `keyof any` evaluate to `string | number | symbol`? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, Why does `keyof any` evaluate to `string | number | symbol`? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering Why does `keyof any` evaluate to `string | number | symbol`? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, Why does `keyof any` evaluate to `string | number | symbol`? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for Why does `keyof any` evaluate to `string | number | symbol`?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How does TypeScript resolve conflicts when intersecting two interfaces with identical keys of different types?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How does TypeScript resolve conflicts when intersecting two interfaces with identical keys of differ",
    "answer": "Mastering How does TypeScript resolve conflicts when intersecting two interfaces with identical keys of different types? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How does TypeScript resolve conflicts when intersecting two interfaces with identical keys of different types? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How does TypeScript resolve conflicts when intersecting two interfaces with identical keys of different types? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How does TypeScript resolve conflicts when intersecting two interfaces with identical keys of different types? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How does TypeScript resolve conflicts when intersecting two interfaces with identical keys of different types?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "tags": [
      "typescript",
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is the difference between `null` and `undefined` in strict TypeScript mode?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "What is the difference between `null` and `undefined` in strict TypeScript mode?: How does this work",
    "answer": "Mastering What is the difference between `null` and `undefined` in strict TypeScript mode? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, What is the difference between `null` and `undefined` in strict TypeScript mode? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering What is the difference between `null` and `undefined` in strict TypeScript mode? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, What is the difference between `null` and `undefined` in strict TypeScript mode? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for What is the difference between `null` and `undefined` in strict TypeScript mode?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How does TypeScript infer types from rest parameters in functions?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "How does TypeScript infer types from rest parameters in functions?: How does this work in TypeScript",
    "answer": "Mastering How does TypeScript infer types from rest parameters in functions? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, How does TypeScript infer types from rest parameters in functions? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering How does TypeScript infer types from rest parameters in functions? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, How does TypeScript infer types from rest parameters in functions? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for How does TypeScript infer types from rest parameters in functions?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is Subtyping and how does Width Subtyping work in TypeScript object structures?: How does this work in TypeScript's type system and what are the best practices?",
    "title": "What is Subtyping and how does Width Subtyping work in TypeScript object structures?: How does this ",
    "answer": "Mastering What is Subtyping and how does Width Subtyping work in TypeScript object structures? is fundamental to leveraging TypeScript's expressive static type checker.",
    "explanation": "In TypeScript, What is Subtyping and how does Width Subtyping work in TypeScript object structures? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "interviewAnswer": "Mastering What is Subtyping and how does Width Subtyping work in TypeScript object structures? is fundamental to leveraging TypeScript's expressive static type checker. In TypeScript, What is Subtyping and how does Width Subtyping work in TypeScript object structures? influences type assignability, subtyping, and compile-time correctness. Understanding type algebra (unions, intersections, narrowing, and widening) enables developers to model domain invariants precisely while preserving developer ergonomics.",
    "importantPoints": [
      "Governs type assignability and compile-time validation for What is Subtyping and how does Width Subtyping work in TypeScript object structures?",
      "Prevents invalid state representations in domain models",
      "Maximizes compiler inference without requiring repetitive manual typing",
      "Ensures type safety without introducing runtime overhead"
    ],
    "commonMistakes": [
      "Overusing 'any' or brute-force type assertions to bypass compiler errors",
      "Creating incompatible intersections that collapse into 'never'"
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
      "types",
      "type-system",
      "type-safety"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Type definition example\ntype Result<T> = { success: true; data: T } | { success: false; error: Error };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
