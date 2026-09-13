import { CuratedMCQ } from './mcqSeedData';

export const typescriptMCQs: CuratedMCQ[] = [
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is the key functional difference between the `unknown` type and the `any` type in TypeScript?",
    "answer": "`unknown` is type-safe because operations on it require explicit type checking or narrowing, whereas `any` disables all type checks.",
    "explanation": "Both `unknown` and `any` can accept any assigned value. However, `any` allows calling arbitrary methods and properties without validation, while `unknown` strictly forces you to perform type checks (e.g. `typeof`, `instanceof`) before accessing members.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "unknown can only hold primitive values, while any can hold objects"
        },
        {
          "id": "B",
          "text": "unknown forces type narrowing before performing operations, whereas any bypasses all type checking"
        },
        {
          "id": "C",
          "text": "any is checked at runtime, whereas unknown is purely a compile-time concept"
        },
        {
          "id": "D",
          "text": "unknown is an alias for undefined, whereas any represents null"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "interfaces-type-aliases",
    "question": "Which capability is unique to `interface` declarations compared to `type` aliases in TypeScript?",
    "answer": "Interfaces support declaration merging, allowing multiple interfaces with the same name to merge their property definitions.",
    "explanation": "Declaration merging allows multiple `interface` definitions with the same name in the same scope to combine their member declarations. `type` aliases cannot be declared more than once with the same identifier.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Interfaces can define union and tuple types"
        },
        {
          "id": "B",
          "text": "Interfaces support declaration merging across multiple definitions"
        },
        {
          "id": "C",
          "text": "Interfaces can be used with conditional types and the infer keyword"
        },
        {
          "id": "D",
          "text": "Interfaces compile into JavaScript classes at runtime"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is the primary role of the `never` type in TypeScript exhaustiveness checks?",
    "answer": "It represents values that never occur, ensuring at compile-time that all cases of a union have been handled in switch or if statements.",
    "explanation": "Assigning an unhandled switch case to a `never` variable triggers a compile-time error if a new variant is added to a union type without an accompanying branch handling it.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It represents null or undefined in optional function parameters"
        },
        {
          "id": "B",
          "text": "It verifies at compile-time that all union cases have been exhaustively handled"
        },
        {
          "id": "C",
          "text": "It indicates asynchronous functions that do not return a Promise"
        },
        {
          "id": "D",
          "text": "It suppresses TypeScript compiler warnings on external third-party modules"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What does the `keyof` operator produce when applied to an object type `T`?",
    "answer": "A string or numeric literal union representing all known public property keys of type `T`.",
    "explanation": "`keyof T` extracts a union of literal string or numeric keys present on `T`. For example, `keyof { id: number; name: string }` yields `\"id\" | \"name\"`.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "An array of strings containing property names at runtime"
        },
        {
          "id": "B",
          "text": "A union of string, number, or symbol literal types representing the keys of T"
        },
        {
          "id": "C",
          "text": "A boolean indicating whether a given property exists on T"
        },
        {
          "id": "D",
          "text": "The type of the values associated with the properties of T"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "How does the `typeof` type operator differ when used in a TypeScript type context versus an expression context?",
    "answer": "In a type context, it extracts the TypeScript static type of a variable or property rather than producing a runtime string.",
    "explanation": "In JavaScript expressions, `typeof x` returns strings like `\"string\"` or `\"object\"`. In TypeScript type positions, `typeof x` references the static compile-time type of `x`.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "In a type context, it converts JSON schemas directly into interfaces"
        },
        {
          "id": "B",
          "text": "In a type context, it refers to the static compile-time type of a variable or value"
        },
        {
          "id": "C",
          "text": "In an expression context, it executes the constructor of the variable"
        },
        {
          "id": "D",
          "text": "It has identical behavior in both contexts and always returns a string"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "utility-types",
    "question": "What does the utility type `Record<K, T>` construct?",
    "answer": "An object type whose property keys are of type `K` and whose property values are of type `T`.",
    "explanation": "`Record<K, T>` is implemented as `{ [P in K]: T }`. For example, `Record<\"admin\" | \"user\", boolean>` requires an object with `admin` and `user` keys assigned to boolean values.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "An immutable JavaScript Map instance"
        },
        {
          "id": "B",
          "text": "An object type with keys of type K and values of type T"
        },
        {
          "id": "C",
          "text": "A database table representation for SQL queries"
        },
        {
          "id": "D",
          "text": "An array where each element is a tuple of [K, T]"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "utility-types",
    "question": "What is the difference between `Pick<T, K>` and `Omit<T, K>`?",
    "answer": "`Pick` selects only properties listed in `K`, whereas `Omit` removes properties listed in `K` from type `T`.",
    "explanation": "`Pick<User, \"id\" | \"name\">` produces `{ id: string; name: string }`. Conversely, `Omit<User, \"password\">` constructs a type with all original properties of `User` except `password`.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Pick is used for interfaces while Omit is used exclusively for classes"
        },
        {
          "id": "B",
          "text": "Pick retains specified keys, while Omit excludes specified keys from T"
        },
        {
          "id": "C",
          "text": "Pick works at runtime whereas Omit is checked at compile time"
        },
        {
          "id": "D",
          "text": "Pick makes fields optional while Omit removes them from memory"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "utility-types",
    "question": "What transformation does `Partial<T>` perform on a type `T`?",
    "answer": "It marks all properties of type `T` as optional (`?`).",
    "explanation": "`Partial<T>` maps each property `P in keyof T` to `T[P]?`, enabling objects that provide any subset of `T`'s properties.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It strips all undefined and null values from T"
        },
        {
          "id": "B",
          "text": "It makes all properties of T optional"
        },
        {
          "id": "C",
          "text": "It creates a shallow copy of T at runtime"
        },
        {
          "id": "D",
          "text": "It enforces that at least one property of T must be present"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "What is a \"Discriminated Union\" (tagged union) in TypeScript?",
    "answer": "A union of object types where each type shares a common literal property used by the compiler for narrowing.",
    "explanation": "In a discriminated union, each member type has a common discriminator key (e.g. `kind: \"circle\" | \"square\"`). Switching on this tag automatically narrows the object to the exact member type.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "A union type restricted to primitive boolean and number types"
        },
        {
          "id": "B",
          "text": "A union of types containing a common discriminant literal property for pattern matching and narrowing"
        },
        {
          "id": "C",
          "text": "A type that rejects null and undefined values automatically"
        },
        {
          "id": "D",
          "text": "A merged interface that discards private fields"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "narrowing-type-guards",
    "question": "How do you define a custom User-Defined Type Guard function in TypeScript?",
    "answer": "By annotating the return type with a type predicate in the form `parameterName is Type`.",
    "explanation": "A function like `function isFish(pet: Pet): pet is Fish` returns a boolean. If it evaluates to true, TypeScript narrows `pet` to `Fish` in subsequent code blocks.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "By adding @typeguard JSDoc comments above the function definition"
        },
        {
          "id": "B",
          "text": "By returning a type predicate signature like `param is Type` from a boolean-returning function"
        },
        {
          "id": "C",
          "text": "By casting the return value using the `as` operator inside the function"
        },
        {
          "id": "D",
          "text": "By wrapping the function call inside a try/catch block"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What does a `const` assertion (`as const`) do in TypeScript?",
    "answer": "It assigns the most specific literal types to expressions and marks all properties deeply as `readonly`.",
    "explanation": "Applying `as const` prevents type widening (e.g., `\"GET\"` is typed as literal `\"GET\"` rather than `string`) and makes arrays and object properties deeply read-only.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It transforms variables into ES6 const declarations in emitted JavaScript"
        },
        {
          "id": "B",
          "text": "It locks down literal types and makes array/object properties deeply readonly"
        },
        {
          "id": "C",
          "text": "It freezes the object at runtime using Object.freeze()"
        },
        {
          "id": "D",
          "text": "It enforces constant time complexity for function algorithms"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "generics",
    "question": "How do you constrain a generic type parameter `T` to have a specific property in TypeScript?",
    "answer": "By using the `extends` keyword, such as `<T extends { id: string }>`",
    "explanation": "Generic constraints using `extends` specify that type arguments must be assignable to the constraint type, ensuring safety when accessing required properties.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "<T implements { id: string }>"
        },
        {
          "id": "B",
          "text": "<T extends { id: string }>"
        },
        {
          "id": "C",
          "text": "<T : { id: string }>"
        },
        {
          "id": "D",
          "text": "<T where id is string>"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "utility-types",
    "question": "What is the function of the `infer` keyword in TypeScript conditional types?",
    "answer": "It introduces a type variable within a conditional type check to deduce and capture an extracted sub-type.",
    "explanation": "`infer` allows pattern-matching on types. For example, `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;` deduces and extracts the return type `R` of a function.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It causes TypeScript to infer types using artificial intelligence"
        },
        {
          "id": "B",
          "text": "It declares a type variable to be deduced within the true branch of a conditional type"
        },
        {
          "id": "C",
          "text": "It dynamically casts unverified JSON payloads at runtime"
        },
        {
          "id": "D",
          "text": "It prevents the compiler from performing dead-code elimination"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is the purpose of the `satisfies` operator introduced in TypeScript 4.9?",
    "answer": "It validates that an expression matches a type without widening or altering the expression's inferred literal type.",
    "explanation": "Unlike type annotations (`const x: Type = ...`) which widen types, `satisfies Type` ensures conformity with `Type` while retaining the exact inferred shape and literal types of the value.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It enforces unit tests to pass before compiling TypeScript files"
        },
        {
          "id": "B",
          "text": "It checks compatibility with a type while preserving the value's specific inferred type"
        },
        {
          "id": "C",
          "text": "It forces interface inheritance without method implementation"
        },
        {
          "id": "D",
          "text": "It suppresses null pointer exceptions in async promises"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "utility-types",
    "question": "What does `NonNullable<T>` do in TypeScript?",
    "answer": "It constructs a type by excluding `null` and `undefined` from type `T`.",
    "explanation": "`NonNullable<string | number | null | undefined>` results in `string | number`, stripping all nullable variations.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It prevents empty strings and the number 0 from being assigned"
        },
        {
          "id": "B",
          "text": "It strips null and undefined from the type T"
        },
        {
          "id": "C",
          "text": "It generates runtime null-pointer assertion checks"
        },
        {
          "id": "D",
          "text": "It converts optional properties into required non-empty arrays"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "utility-types",
    "question": "What is the operational difference between `Exclude<T, U>` and `Omit<T, K>`?",
    "answer": "`Exclude` works on union types to remove matching union members, while `Omit` works on object types to remove property keys.",
    "explanation": "`Exclude<\"a\" | \"b\" | \"c\", \"a\">` operates on unions and yields `\"b\" | \"c\"`. `Omit<{ a: 1; b: 2 }, \"a\">` operates on object types and yields `{ b: 2 }`.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Exclude works on object interfaces, while Omit works on array elements"
        },
        {
          "id": "B",
          "text": "Exclude removes members from a union type, whereas Omit removes keys from an object type"
        },
        {
          "id": "C",
          "text": "Exclude is evaluated at runtime, whereas Omit is purely compile-time"
        },
        {
          "id": "D",
          "text": "They are exact aliases for the same underlying generic type"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is a TypeScript Tuple type?",
    "answer": "An array with a fixed number of elements whose types are known at specific index positions.",
    "explanation": "A tuple type like `[string, number]` specifies that index 0 must be a `string` and index 1 must be a `number`, preserving element order and count.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "An immutable key-value dictionary object"
        },
        {
          "id": "B",
          "text": "An array with a fixed number of elements and specific types at each position"
        },
        {
          "id": "C",
          "text": "A function that returns multiple Promise instances simultaneously"
        },
        {
          "id": "D",
          "text": "A database row cache mechanism in TypeScript"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What happens when `strictNullChecks` is enabled in `tsconfig.json`?",
    "answer": "`null` and `undefined` are not assignable to other types unless explicitly included in a union type.",
    "explanation": "Without `strictNullChecks`, `null` and `undefined` can be assigned to any type (e.g. `string` or `number`), which frequently leads to runtime null pointer crashes.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "The compiler removes all null and undefined values from compiled JavaScript"
        },
        {
          "id": "B",
          "text": "null and undefined become separate types and cannot be assigned to other types without explicit union types"
        },
        {
          "id": "C",
          "text": "All variables automatically default to empty strings"
        },
        {
          "id": "D",
          "text": "Optional chaining (?.) is disallowed across the entire codebase"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is the difference between `const enum` and a regular `enum` in TypeScript?",
    "answer": "`const enum` declarations are completely inlined at compile time and generate no runtime JavaScript object code.",
    "explanation": "Regular enums emit runtime JavaScript objects with bidirectional key-value mappings. `const enum` expressions are replaced directly with their literal values during compilation, reducing bundle size.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "const enums can only contain boolean values"
        },
        {
          "id": "B",
          "text": "const enums are inlined at compile-time and emit zero JavaScript code, whereas regular enums emit runtime objects"
        },
        {
          "id": "C",
          "text": "regular enums cannot be exported across modules"
        },
        {
          "id": "D",
          "text": "const enums support reverse lookups from values to names at runtime"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is an Index Signature in TypeScript?",
    "answer": "A syntax allowing objects to define arbitrary keys of a specified type with matching value types, e.g. `{ [key: string]: number }`.",
    "explanation": "Index signatures describe objects where property names are not known in advance, such as dictionaries or lookup tables.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "A digital signature cryptographic key generated by TypeScript"
        },
        {
          "id": "B",
          "text": "A declaration of dynamic keys and their corresponding value types on an object"
        },
        {
          "id": "C",
          "text": "A decorator used on class method parameters"
        },
        {
          "id": "D",
          "text": "A database B-Tree index definition in TypeScript ORMs"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How does TypeScript implement Function Overloading?",
    "answer": "By providing multiple overload signatures followed by a single implementation signature compatible with all overloads.",
    "explanation": "TypeScript uses overload headers for type-checking callers, but only a single implementation body is emitted in JavaScript. The implementation signature must be broad enough to handle all overloads.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "By defining multiple JavaScript functions with the same name in runtime scope"
        },
        {
          "id": "B",
          "text": "By specifying multiple overload type signatures followed by one unified implementation function"
        },
        {
          "id": "C",
          "text": "By using ES6 default parameter syntax exclusively"
        },
        {
          "id": "D",
          "text": "Through Java-style virtual method dispatch at runtime"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What does the `readonly` modifier on array types (e.g. `readonly number[]` or `ReadonlyArray<number>`) guarantee?",
    "answer": "It prevents mutating operations like `push`, `pop`, `splice`, or index assignments from being called on the array.",
    "explanation": "Readonly arrays omit mutating methods from their type signature, ensuring immutability at compile time.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It enforces that the array size must always remain zero"
        },
        {
          "id": "B",
          "text": "It disables mutating methods like push, pop, and direct index assignments on the array"
        },
        {
          "id": "C",
          "text": "It freezes the underlying array in memory via WebAssembly"
        },
        {
          "id": "D",
          "text": "It allows reading array values only within asynchronous worker threads"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "typescript-basics",
    "question": "What is the purpose of Ambient Declarations using the `declare` keyword in `.d.ts` files?",
    "answer": "To describe the shape of existing JavaScript code or global variables without generating emitted JavaScript output.",
    "explanation": "`declare` informs the compiler about types that exist in the global environment (e.g. from script tags or external C libraries) without generating runtime JavaScript.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "To initialize global database connection pools at startup"
        },
        {
          "id": "B",
          "text": "To inform the compiler about existing types or globals without emitting JavaScript code"
        },
        {
          "id": "C",
          "text": "To declare CSS stylesheet bindings for React components"
        },
        {
          "id": "D",
          "text": "To enforce microsecond execution limits on background tasks"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "types",
    "question": "What is the difference between Type Widening and Type Narrowing in TypeScript?",
    "answer": "Widening generalizes specific literals to broader primitive types; narrowing refines broad types to specific subtypes through control flow.",
    "explanation": "Widening turns `let x = \"hello\"` into `string`. Narrowing uses checks like `if (typeof x === \"string\")` to refine broad types (like `string | number`) into a specific branch type.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Widening increases memory allocation; narrowing frees memory"
        },
        {
          "id": "B",
          "text": "Widening expands literal values to broader primitive types, while narrowing refines types using conditions"
        },
        {
          "id": "C",
          "text": "Widening is applied to arrays; narrowing is applied to object dictionaries"
        },
        {
          "id": "D",
          "text": "Widening occurs at runtime; narrowing occurs during bundling"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "generics",
    "question": "What does a Mapped Type do in TypeScript?",
    "answer": "It creates a new type by iterating over property keys of an existing type, transforming property names or value types.",
    "explanation": "Mapped types use syntax like `{ [P in keyof T]: ... }` to iterate over keys, applying modifiers like `readonly` or making properties optional.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It creates an ES6 Map instance at runtime"
        },
        {
          "id": "B",
          "text": "It transforms keys and value types by iterating over a union of property keys"
        },
        {
          "id": "C",
          "text": "It maps GPS geographical coordinates to object models"
        },
        {
          "id": "D",
          "text": "It generates REST API route handlers automatically"
        }
      ],
      "correctOption": "B"
    }
  }
];

export const htmlMCQs: CuratedMCQ[] = [
  {
    "technologySlug": "html",
    "topicSlug": "html-fundamentals",
    "question": "What is the purpose of the `<!DOCTYPE html>` declaration at the beginning of an HTML document?",
    "answer": "It tells the browser to render the page in standard HTML5 mode rather than Quirks Mode.",
    "explanation": "Without `<!DOCTYPE html>`, browsers enter Quirks Mode to emulate legacy rendering bugs from Internet Explorer and Netscape, causing inconsistent CSS styling.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It loads the HTML5 JavaScript runtime into browser memory"
        },
        {
          "id": "B",
          "text": "It instructs the browser to parse the document in standard mode rather than Quirks Mode"
        },
        {
          "id": "C",
          "text": "It enables strict Content Security Policy protections automatically"
        },
        {
          "id": "D",
          "text": "It downloads external CSS stylesheets asynchronously"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "semantic-html",
    "question": "Which of the following describes the semantic difference between `<section>` and `<article>` elements?",
    "answer": "An `<article>` represents a self-contained, independently distributable composition, while a `<section>` groups related content thematically.",
    "explanation": "An `<article>` makes sense on its own (e.g. blog post, news item). A `<section>` represents a thematic grouping within a page or article, typically accompanied by a heading.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "<article> is for printed documents, while <section> is for mobile screens"
        },
        {
          "id": "B",
          "text": "<article> is a self-contained, syndicatable unit, while <section> is a thematic grouping of content"
        },
        {
          "id": "C",
          "text": "<section> must contain a form, while <article> cannot have headings"
        },
        {
          "id": "D",
          "text": "There is no semantic difference; they are exact style synonyms"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "html5-features",
    "question": "What is the difference between the `async` and `defer` attributes on script tags?",
    "answer": "`defer` scripts execute in source order after HTML parsing finishes; `async` scripts execute immediately once downloaded, pausing parsing.",
    "explanation": "Both download asynchronously without blocking HTML parsing. However, `async` executes as soon as download completes (unpredictable order), whereas `defer` maintains document order and executes right before `DOMContentLoaded`.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "async is for external scripts; defer can only be used on inline scripts"
        },
        {
          "id": "B",
          "text": "defer executes in DOM order after parsing completes, whereas async executes immediately upon download"
        },
        {
          "id": "C",
          "text": "defer loads scripts in a Web Worker background thread"
        },
        {
          "id": "D",
          "text": "async prevents HTTP cache hits, forcing full script reloads"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "responsive-design",
    "question": "What is the purpose of `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">`?",
    "answer": "It configures the viewport width to match the device screen width and sets initial zoom, preventing mobile browsers from zooming out.",
    "explanation": "Without this viewport meta tag, mobile browsers assume a desktop page width (typically 980px) and scale it down, causing tiny text and broken responsive media queries.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It locks the screen orientation into portrait mode"
        },
        {
          "id": "B",
          "text": "It sets the viewport width to the device screen width and establishes 1:1 CSS pixel scaling"
        },
        {
          "id": "C",
          "text": "It compresses high-resolution images for cellular data savings"
        },
        {
          "id": "D",
          "text": "It disables pinch-to-zoom accessibility features globally"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "accessibility",
    "question": "Why is associating an HTML `<label>` with an `<input>` using the `for` attribute important for accessibility?",
    "answer": "It creates a programmatic link so screen readers announce the label when the input is focused, and clicking the label focuses the input.",
    "explanation": "Clicking the associated `<label>` transfers focus to the corresponding `<input>`, expanding the clickable hit area and providing essential accessible context for screen readers.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It prevents CSS styling from cascading onto the form element"
        },
        {
          "id": "B",
          "text": "It creates an accessible association for screen readers and increases the tap target area"
        },
        {
          "id": "C",
          "text": "It enables automatic regex input sanitization by the browser engine"
        },
        {
          "id": "D",
          "text": "It encrypts form field data before sending to backend servers"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "browser-apis",
    "question": "What is the key storage lifecycle difference between `localStorage` and `sessionStorage`?",
    "answer": "`localStorage` persists data across browser restarts until cleared; `sessionStorage` is cleared when the tab/window is closed.",
    "explanation": "`localStorage` has no expiration date and survives tab and browser restarts. `sessionStorage` is scoped to the specific browser tab session and wiped once closed.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "sessionStorage data is sent to the server on every HTTP request; localStorage is not"
        },
        {
          "id": "B",
          "text": "localStorage persists until explicitly cleared, whereas sessionStorage is purged when the tab is closed"
        },
        {
          "id": "C",
          "text": "localStorage is limited to 4KB, whereas sessionStorage can hold up to 50MB"
        },
        {
          "id": "D",
          "text": "sessionStorage is encrypted at rest using AES-256"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "html5-features",
    "question": "What is a Web Worker in HTML5?",
    "answer": "A JavaScript script running in a background thread separate from the main browser UI thread.",
    "explanation": "Web Workers execute compute-heavy scripts in background threads without interfering with user interface responsiveness, animations, or input handling.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "A server-side Node.js cluster thread for web crawling"
        },
        {
          "id": "B",
          "text": "A background thread that runs JavaScript without blocking the main browser UI thread"
        },
        {
          "id": "C",
          "text": "A CSS preprocessor running in the browser engine"
        },
        {
          "id": "D",
          "text": "A browser plugin that manages offline caching"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "media",
    "question": "What is the primary architectural difference between HTML `<canvas>` and `<svg>`?",
    "answer": "Canvas is raster/pixel-based drawn via JavaScript immediate-mode, while SVG is vector-based retained-mode DOM elements.",
    "explanation": "`<canvas>` manipulates raw pixels on a bitmap (better for games, fast rendering). `<svg>` uses XML-based vector shapes that scale crisply at any resolution and support CSS styling and event listeners on individual nodes.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "SVG is drawn with WebGL, while Canvas is drawn with CSS"
        },
        {
          "id": "B",
          "text": "Canvas is pixel-based (immediate mode), while SVG is vector-based (retained mode DOM elements)"
        },
        {
          "id": "C",
          "text": "Canvas elements scale losslessly, while SVG pixelates when zoomed"
        },
        {
          "id": "D",
          "text": "Canvas cannot be scripted with JavaScript"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "accessibility",
    "question": "What does the `aria-live` attribute do in accessible web applications?",
    "answer": "It announces dynamic DOM content changes to assistive technologies (screen readers) without moving focus.",
    "explanation": "`aria-live=\"polite\"` or `aria-live=\"assertive\"` notifies screen reader users of asynchronous changes (such as chat messages, toast alerts, or score updates) as they happen.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It streams live video via WebRTC to assistive devices"
        },
        {
          "id": "B",
          "text": "It informs screen readers to announce dynamic content updates without requiring user focus"
        },
        {
          "id": "C",
          "text": "It automatically refreshes the webpage every 5 seconds"
        },
        {
          "id": "D",
          "text": "It connects the user microphone to speech recognition APIs"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "html5-features",
    "question": "What is the purpose of the `data-*` attribute in HTML elements?",
    "answer": "To store custom private data on HTML elements accessible via JavaScript `dataset` and CSS attribute selectors.",
    "explanation": "Attributes prefixed with `data-` (e.g. `data-user-id=\"42\"`) allow storing metadata on elements without impacting rendering. They are accessible in JS via `element.dataset.userId`.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "To bind SQL database schemas to frontend tables"
        },
        {
          "id": "B",
          "text": "To embed custom extra data on elements accessible via JavaScript dataset and CSS selectors"
        },
        {
          "id": "C",
          "text": "To encrypt sensitive user tokens in page source code"
        },
        {
          "id": "D",
          "text": "To trigger automated HTML schema validation"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "html5-features",
    "question": "Which HTML elements natively implement an interactive disclosure widget without requiring JavaScript?",
    "answer": "`<details>` and `<summary>`",
    "explanation": "The `<details>` element generates a collapsible disclosure toggle. The `<summary>` element acts as the clickable label that expands and collapses the details content natively.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "<dialog> and <modal>"
        },
        {
          "id": "B",
          "text": "<details> and <summary>"
        },
        {
          "id": "C",
          "text": "<accordion> and <tab>"
        },
        {
          "id": "D",
          "text": "<dropdown> and <menu>"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "dom-browser",
    "question": "In DOM event propagation, what are the two main phases in order before target execution?",
    "answer": "Capturing (Trickling) phase down the DOM tree, followed by Bubbling phase up the DOM tree.",
    "explanation": "Events travel down from the window/document to the target during the capturing phase, fire on the target, and then bubble back up the ancestor hierarchy.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Rendering phase followed by Reflow phase"
        },
        {
          "id": "B",
          "text": "Capturing phase downwards, followed by Bubbling phase upwards"
        },
        {
          "id": "C",
          "text": "Compilation phase followed by Execution phase"
        },
        {
          "id": "D",
          "text": "Dispatch phase followed by Serialization phase"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "performance",
    "question": "What is the performance difference between `<link rel=\"preload\">` and `<link rel=\"prefetch\">`?",
    "answer": "`preload` requests critical resources needed for the current page immediately; `prefetch` downloads resources for future navigations during idle time.",
    "explanation": "`preload` prioritizes high-importance assets (e.g. fonts, hero images) needed right now. `prefetch` is a low-priority hint to fetch assets that the user is likely to need on subsequent pages.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "preload is for images only; prefetch is for JavaScript files"
        },
        {
          "id": "B",
          "text": "preload fetches critical current-page assets urgently; prefetch fetches future-page assets during idle time"
        },
        {
          "id": "C",
          "text": "preload stores files on disk; prefetch stores files in GPU memory"
        },
        {
          "id": "D",
          "text": "They are identical and treated as duplicates by modern browser engines"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "security",
    "question": "What is the security purpose of the `sandbox` attribute on an `<iframe>` element?",
    "answer": "It restricts scripts, form submissions, popups, and same-origin access inside the embedded frame.",
    "explanation": "An empty `sandbox` attribute applies maximum restrictions. Specific capabilities can be selectively re-enabled using tokens like `allow-scripts` or `allow-same-origin`.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It encrypts video playback inside the frame with DRM"
        },
        {
          "id": "B",
          "text": "It isolates the frame content, restricting scripts, popups, and cross-site access"
        },
        {
          "id": "C",
          "text": "It compresses the iframe HTML to reduce network bandwidth"
        },
        {
          "id": "D",
          "text": "It blocks search engine spiders from indexing the iframe URL"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "security",
    "question": "What does a Content Security Policy (CSP) `<meta>` tag protect against?",
    "answer": "Cross-Site Scripting (XSS) and data injection attacks by restricting allowed origins for scripts, styles, and media.",
    "explanation": "CSP specifies authorized domains from which executable scripts, stylesheets, and images can be loaded and executed, preventing attackers from injecting malicious scripts.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "DDoS attacks on web hosting infrastructure"
        },
        {
          "id": "B",
          "text": "Cross-Site Scripting (XSS) and code injection by whitelisting trusted resource sources"
        },
        {
          "id": "C",
          "text": "SQL injection attacks against backend database engines"
        },
        {
          "id": "D",
          "text": "SSL certificate spoofing and TLS downgrade attacks"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "html-fundamentals",
    "question": "Which of the following elements is a \"void\" (self-closing) element in HTML5 and cannot have closing tags or child content?",
    "answer": "`<img>`",
    "explanation": "Void elements (like `<img>`, `<input>`, `<br>`, `<meta>`, `<link>`) cannot have closing tags or contain any inner HTML content.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "<span>"
        },
        {
          "id": "B",
          "text": "<img>"
        },
        {
          "id": "C",
          "text": "<button>"
        },
        {
          "id": "D",
          "text": "<textarea>"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "html-fundamentals",
    "question": "Why should `<meta charset=\"utf-8\">` be placed within the first 1024 bytes of an HTML document?",
    "answer": "Browsers look within the initial 1024 bytes to determine character encoding before executing encoding-dependent decoding.",
    "explanation": "Specifying the character set early prevents security vulnerabilities and encoding switching glitches when the browser parses non-ASCII text.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "HTML validator tools will reject the document otherwise"
        },
        {
          "id": "B",
          "text": "Browsers inspect the initial 1024 bytes to establish character decoding before parsing content"
        },
        {
          "id": "C",
          "text": "It enables TLS 1.3 encryption across network packets"
        },
        {
          "id": "D",
          "text": "It is required to support CSS Flexbox rendering"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "seo-basics",
    "question": "What is the purpose of Open Graph `<meta>` tags (e.g. `og:title`, `og:image`)?",
    "answer": "To control how webpage links appear when shared on social media platforms like Twitter, LinkedIn, and Facebook.",
    "explanation": "Open Graph protocol metadata formats the preview card title, description, thumbnail image, and URL when shared across social networks.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "To configure Google AdSense monetization slots"
        },
        {
          "id": "B",
          "text": "To customize rich link preview cards when shared on social platforms"
        },
        {
          "id": "C",
          "text": "To accelerate 3D rendering in WebGL scenes"
        },
        {
          "id": "D",
          "text": "To verify domain ownership with email servers"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "forms",
    "question": "When submitting a form containing binary file uploads (`<input type=\"file\">`), which `enctype` must be used?",
    "answer": "`multipart/form-data`",
    "explanation": "The default `application/x-www-form-urlencoded` encodes data as key-value text pairs. `multipart/form-data` formats data in MIME message segments capable of transferring binary file contents.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "text/plain"
        },
        {
          "id": "B",
          "text": "multipart/form-data"
        },
        {
          "id": "C",
          "text": "application/json"
        },
        {
          "id": "D",
          "text": "application/octet-stream"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "html5-features",
    "question": "What is the purpose of the `<template>` element in HTML5?",
    "answer": "To hold client-side content that is parsed but not rendered until instantiated via JavaScript cloneNode().",
    "explanation": "Content inside `<template>` is inert (scripts do not run, images do not load, DOM is invisible) until cloned and inserted into the active document with JavaScript.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "To render server-side Handlebars templates in native browser engines"
        },
        {
          "id": "B",
          "text": "To store inert client-side DOM templates that can be cloned and stamped dynamically"
        },
        {
          "id": "C",
          "text": "To pre-compile JSX into HTML before bundle delivery"
        },
        {
          "id": "D",
          "text": "To establish common styling across web components"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "media",
    "question": "Why should responsive web images use the `<picture>` element with multiple `<source>` tags?",
    "answer": "To serve different image resolutions, formats (AVIF/WebP/JPEG), or art directions based on media queries and browser support.",
    "explanation": "The `<picture>` wrapper allows modern formats like AVIF to be offered to compatible browsers, falling back automatically to WebP or JPEG for older browsers.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "To combine video audio tracks with still photos"
        },
        {
          "id": "B",
          "text": "To serve optimal formats and art directions based on device screen characteristics and codec support"
        },
        {
          "id": "C",
          "text": "To apply CSS filters without GPU performance penalties"
        },
        {
          "id": "D",
          "text": "To prevent users from right-clicking and saving photos"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "accessibility",
    "question": "Why should buttons always be implemented using the native `<button>` element rather than `<div onclick=\"...\">`?",
    "answer": "`<button>` provides native keyboard accessibility (Tab, Enter, Space), screen reader role announcements, and disabled state handling.",
    "explanation": "Re-implementing `<button>` with a `<div>` requires manual `tabindex=\"0\"`, `role=\"button\"`, Enter/Space key listener bindings, and ARIA disabled management.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "<div> elements cannot have CSS background colors"
        },
        {
          "id": "B",
          "text": "<button> provides native keyboard focus, screen reader semantics, and Enter/Space activation"
        },
        {
          "id": "C",
          "text": "Modern browser JavaScript engines disable click events on divs"
        },
        {
          "id": "D",
          "text": "<button> elements execute faster in WebAssembly"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "html5-features",
    "question": "What is Shadow DOM in the context of Web Components?",
    "answer": "A scoped DOM sub-tree attached to an element that encapsulates styles and markup from the main document.",
    "explanation": "Shadow DOM isolates internal HTML and CSS styles from leaking out or being affected by external stylesheets, enabling truly modular component architectures.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "A dark-mode rendering feature in the browser engine"
        },
        {
          "id": "B",
          "text": "An encapsulated DOM tree with scoped styling isolated from the document DOM"
        },
        {
          "id": "C",
          "text": "A hidden cache where browsers store downloaded fonts"
        },
        {
          "id": "D",
          "text": "A virtual DOM implementation used by modern browser rendering pipelines"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "forms",
    "question": "What happens when an HTML5 `<input type=\"email\" required>` form field fails validation upon submission?",
    "answer": "The browser cancels form submission and displays a localized validation tooltip prompting the user to correct the input.",
    "explanation": "HTML5 constraint validation checks inputs natively before firing the form's submit event, blocking submission and focusing the offending element with a native tooltip.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "The form submits null to the server"
        },
        {
          "id": "B",
          "text": "The browser blocks submission and displays a native constraint validation tooltip"
        },
        {
          "id": "C",
          "text": "A JavaScript runtime exception is thrown into the browser console"
        },
        {
          "id": "D",
          "text": "The browser converts the form method to HTTP GET"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "html",
    "topicSlug": "html5-features",
    "question": "What attribute must be added to an element to make it draggable using the native HTML5 Drag and Drop API?",
    "answer": "`draggable=\"true\"`",
    "explanation": "Adding `draggable=\"true\"` allows users to pick up and drag DOM elements, triggering `dragstart`, `dragover`, and `drop` events.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "moveable=\"true\""
        },
        {
          "id": "B",
          "text": "draggable=\"true\""
        },
        {
          "id": "C",
          "text": "dropzone=\"copy\""
        },
        {
          "id": "D",
          "text": "data-drag=\"enabled\""
        }
      ],
      "correctOption": "B"
    }
  }
];

export const cssMCQs: CuratedMCQ[] = [
  {
    "technologySlug": "css",
    "topicSlug": "box-model",
    "question": "What is the calculation difference between `box-sizing: content-box` and `box-sizing: border-box`?",
    "answer": "`content-box` applies width/height strictly to content; `border-box` includes padding and border within the specified width/height.",
    "explanation": "With `content-box`, an element of `width: 100px; padding: 10px; border: 5px solid;` renders with an actual width of `130px`. With `border-box`, the total width remains exactly `100px`.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "content-box includes margins in width; border-box does not"
        },
        {
          "id": "B",
          "text": "border-box incorporates padding and border within the declared width/height, while content-box adds them on top"
        },
        {
          "id": "C",
          "text": "border-box disables box shadows; content-box allows them"
        },
        {
          "id": "D",
          "text": "They behave identically in modern browsers"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "specificity",
    "question": "How is CSS Specificity prioritized among ID selectors, class selectors, element selectors, and inline styles?",
    "answer": "Inline styles > ID selectors > Class/Attribute/Pseudo-class selectors > Element/Pseudo-element selectors.",
    "explanation": "Specificity is represented as a 4-part vector `(inline, ID, class, element)`. An ID selector (`#header`) overrides any number of chained class selectors (`.nav.item.active`).",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Element > Class > ID > Inline"
        },
        {
          "id": "B",
          "text": "Inline styles > ID selectors > Class selectors > Element selectors"
        },
        {
          "id": "C",
          "text": "ID selectors > Inline styles > Element selectors > Class selectors"
        },
        {
          "id": "D",
          "text": "Latest declaration in source code always overrides specificity"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "flexbox",
    "question": "In Flexbox with `flex-direction: row`, what axes do `justify-content` and `align-items` control?",
    "answer": "`justify-content` controls alignment along the main horizontal axis; `align-items` controls alignment along the cross vertical axis.",
    "explanation": "The main axis follows `flex-direction`. In `row` mode, the main axis is horizontal (`justify-content`) and the cross axis is vertical (`align-items`).",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "justify-content aligns items vertically; align-items aligns items horizontally"
        },
        {
          "id": "B",
          "text": "justify-content aligns along the main axis; align-items aligns along the cross axis"
        },
        {
          "id": "C",
          "text": "justify-content applies to flex items; align-items applies only to grid containers"
        },
        {
          "id": "D",
          "text": "Both control the vertical axis simultaneously"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "grid",
    "question": "What does `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))` achieve in CSS Grid?",
    "answer": "A responsive grid that automatically creates columns at least 200px wide, wrapping and stretching to fit the container without media queries.",
    "explanation": "`auto-fit` creates as many columns as will fit into the container. `minmax(200px, 1fr)` ensures columns never shrink below 200px and expand proportionally to fill extra space.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It fixes the grid strictly to 200px regardless of screen size"
        },
        {
          "id": "B",
          "text": "It creates a fluid responsive grid layout without requiring media queries"
        },
        {
          "id": "C",
          "text": "It generates exactly 1 column on mobile and 200 columns on desktop"
        },
        {
          "id": "D",
          "text": "It limits the grid to a maximum of 200 rows"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "positioning",
    "question": "What is an element with `position: absolute` positioned relative to?",
    "answer": "Its closest ancestor that has a `position` other than `static` (or the initial containing block).",
    "explanation": "An absolutely positioned element searches up the DOM tree for the nearest ancestor with `position: relative`, `absolute`, `fixed`, or `sticky`. If none exists, it positions relative to the viewport/page.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Its direct parent element regardless of that parent's position property"
        },
        {
          "id": "B",
          "text": "Its nearest ancestor with a position other than static"
        },
        {
          "id": "C",
          "text": "The browser window viewport at all times"
        },
        {
          "id": "D",
          "text": "The previous sibling element in source order"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "positioning",
    "question": "Why might an element with `position: sticky; top: 0;` fail to stick while scrolling?",
    "answer": "An ancestor has `overflow: hidden`, `overflow: auto`, or the parent element has the same height as the sticky element.",
    "explanation": "Sticky positioning requires an ancestor scroll container and depends on having vertical room within its parent container. An ancestor with `overflow: hidden` clips the scrolling context.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Sticky positioning only works inside tables"
        },
        {
          "id": "B",
          "text": "An ancestor element has overflow hidden/auto or the parent has insufficient height"
        },
        {
          "id": "C",
          "text": "Sticky positioning requires JavaScript scroll event listeners to be active"
        },
        {
          "id": "D",
          "text": "top: 0 is invalid and must be written as top: 0px"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "css-fundamentals",
    "question": "What is the architectural difference between `rem` and `em` units in CSS?",
    "answer": "`rem` is relative to the root element (`<html>`) font size; `em` is relative to the font size of the element itself (or its parent).",
    "explanation": "`1rem` is consistently based on `html` font size (default 16px). `em` compounds when nested inside containers with custom font sizes.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "rem is for mobile screens; em is for desktop screens"
        },
        {
          "id": "B",
          "text": "rem scales relative to the root html font-size; em scales relative to the current element font-size"
        },
        {
          "id": "C",
          "text": "em is an absolute unit equal to millimeters; rem is relative"
        },
        {
          "id": "D",
          "text": "rem is calculated at compile time; em is evaluated at runtime"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "modern-css",
    "question": "How do CSS Custom Properties (Variables, e.g. `--main-color: #3b82f6;`) differ from preprocessor variables (Sass `$color`)?",
    "answer": "CSS custom properties are dynamic in the browser DOM, cascade down elements, and can be read/updated live via JavaScript.",
    "explanation": "Sass variables are compiled into static values at build time. Native CSS variables participate in the CSS Cascade and can be altered dynamically via media queries or JavaScript.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Sass variables are faster because they run on the GPU"
        },
        {
          "id": "B",
          "text": "CSS custom properties cascade in the DOM and can be updated dynamically at runtime via JavaScript"
        },
        {
          "id": "C",
          "text": "CSS variables can only store color hexadecimal values"
        },
        {
          "id": "D",
          "text": "Sass variables support the var() fallback syntax, native CSS variables do not"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "positioning",
    "question": "What triggers a new Stacking Context in CSS?",
    "answer": "Properties such as `opacity < 1`, `transform`, `filter`, or `position: relative/absolute` with a numeric `z-index`.",
    "explanation": "Stacking contexts isolate child `z-index` values. A child element with `z-index: 9999` cannot appear in front of an element outside a parent stacking context with a lower stacking level.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Setting margin: 0 auto on a centered container"
        },
        {
          "id": "B",
          "text": "Properties like opacity < 1, transform, filter, or positioned elements with z-index"
        },
        {
          "id": "C",
          "text": "Applying display: inline-block on span elements"
        },
        {
          "id": "D",
          "text": "Adding a CSS class that starts with an underscore"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "css-fundamentals",
    "question": "What is the visual and layout difference between `display: none`, `visibility: hidden`, and `opacity: 0`?",
    "answer": "`display: none` removes the element from document layout; `visibility: hidden` and `opacity: 0` hide it visually while preserving layout space.",
    "explanation": "`display: none` causes reflow (space collapses). `visibility: hidden` retains box layout but disables click events. `opacity: 0` retains layout and can still receive click interactions unless `pointer-events: none` is added.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "They are completely identical in visual appearance and DOM layout impact"
        },
        {
          "id": "B",
          "text": "display: none removes layout space; visibility: hidden and opacity: 0 preserve layout geometry"
        },
        {
          "id": "C",
          "text": "visibility: hidden triggers a full DOM garbage collection cycle"
        },
        {
          "id": "D",
          "text": "opacity: 0 removes the element from the accessibility tree, while display: none does not"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "selectors",
    "question": "What is the difference between `:nth-child(2)` and `:nth-of-type(2)`?",
    "answer": "`:nth-child(2)` selects the element if it is the 2nd child of its parent; `:nth-of-type(2)` selects the 2nd sibling of that specific HTML element tag.",
    "explanation": "`p:nth-child(2)` matches only if the second child of the parent is a `<p>`. `p:nth-of-type(2)` matches the second `<p>` among siblings, regardless of preceding `<h1>` or `<div>` tags.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": ":nth-child is for lists only; :nth-of-type is for table rows"
        },
        {
          "id": "B",
          "text": ":nth-child counts all sibling nodes; :nth-of-type counts only siblings of the matching element type"
        },
        {
          "id": "C",
          "text": ":nth-child is 0-indexed; :nth-of-type is 1-indexed"
        },
        {
          "id": "D",
          "text": ":nth-of-type has higher CSS specificity than :nth-child"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "selectors",
    "question": "Which required CSS property must be provided for pseudo-elements `::before` and `::after` to render?",
    "answer": "`content`",
    "explanation": "Without `content: \"\"` (or specified text), pseudo-elements `::before` and `::after` will not be generated or rendered by the browser layout engine.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "display: block"
        },
        {
          "id": "B",
          "text": "content"
        },
        {
          "id": "C",
          "text": "position: absolute"
        },
        {
          "id": "D",
          "text": "z-index"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "modern-css",
    "question": "What does `clamp(1rem, 2.5vw, 2rem)` evaluate to in responsive CSS?",
    "answer": "A fluid value proportional to viewport width (2.5vw), constrained between a minimum of 1rem and a maximum of 2rem.",
    "explanation": "`clamp(MIN, VAL, MAX)` provides fluid typography and spacing without media queries: it uses `VAL` as long as it stays between `MIN` and `MAX`.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "A random value generated between 1rem and 2rem"
        },
        {
          "id": "B",
          "text": "A fluid value of 2.5vw that never shrinks below 1rem or exceeds 2rem"
        },
        {
          "id": "C",
          "text": "An average calculation of the three parameter units"
        },
        {
          "id": "D",
          "text": "A CSS animation duration constraint"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "box-model",
    "question": "What is \"Margin Collapsing\" in CSS?",
    "answer": "When vertical margins of adjacent block elements combine into a single margin equal to the largest individual margin.",
    "explanation": "Vertical top and bottom margins collapse between adjacent in-flow block elements, or between a parent and its first/last child if there are no borders or paddings separating them.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "When flexbox items run out of horizontal space"
        },
        {
          "id": "B",
          "text": "When vertical margins of adjacent block elements merge into a single margin"
        },
        {
          "id": "C",
          "text": "When negative margins clip elements outside the viewport"
        },
        {
          "id": "D",
          "text": "When padding forces borders to collapse to zero width"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "performance",
    "question": "What is the purpose of the `will-change` CSS property?",
    "answer": "To hint to the browser which properties will animate, enabling GPU optimizations and layer promotion in advance.",
    "explanation": "`will-change: transform` informs the rendering engine to promote an element to its own compositor layer ahead of time, avoiding expensive repaint operations during animations.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "To schedule future CSS stylesheet downloads"
        },
        {
          "id": "B",
          "text": "To inform the browser of imminent property changes so it can optimize compositing and GPU layers"
        },
        {
          "id": "C",
          "text": "To trigger JavaScript change events when CSS variables update"
        },
        {
          "id": "D",
          "text": "To prevent users from modifying styles via browser DevTools"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "css-fundamentals",
    "question": "Which CSS declaration combination correctly truncates single-line text with an ellipsis (`...`)?",
    "answer": "`white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`",
    "explanation": "All three properties are required: `white-space: nowrap` prevents wrapping to a second line, `overflow: hidden` clips overflow, and `text-overflow: ellipsis` renders the ellipsis indicator.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "text-truncate: true; max-lines: 1;"
        },
        {
          "id": "B",
          "text": "white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
        },
        {
          "id": "C",
          "text": "display: flex; text-overflow: clip;"
        },
        {
          "id": "D",
          "text": "line-clamp: 1; word-break: break-all;"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "animations-transitions",
    "question": "Which CSS properties are most performant to animate because they can be handled directly by the GPU compositor without triggering reflow or repaint?",
    "answer": "`transform` and `opacity`",
    "explanation": "Modifying `transform` or `opacity` bypasses both Layout (reflow) and Paint stages of the browser rendering pipeline, achieving smooth 60fps animations on the compositor thread.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "width and height"
        },
        {
          "id": "B",
          "text": "transform and opacity"
        },
        {
          "id": "C",
          "text": "top and left"
        },
        {
          "id": "D",
          "text": "margin and padding"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "modern-css",
    "question": "What do CSS Cascade Layers (`@layer`) allow developers to control?",
    "answer": "The precedence order of style declarations independently of selector specificity.",
    "explanation": "Rules declared in a higher layer override rules in lower layers, regardless of the specificity of selectors inside those layers. This solves specificity conflicts when integrating component libraries.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "3D z-axis depth in WebGL canvas layers"
        },
        {
          "id": "B",
          "text": "Precedence ordering of stylesheet rules independently of selector specificity"
        },
        {
          "id": "C",
          "text": "Cache layers for browser service workers"
        },
        {
          "id": "D",
          "text": "Photoshop PSD layer imports in modern CSS"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "grid",
    "question": "What is CSS Subgrid (`grid-template-columns: subgrid`) used for?",
    "answer": "To allow a child grid item to participate in and align with the column/row tracks of its parent grid.",
    "explanation": "Without subgrid, a nested grid creates independent tracks. `subgrid` inherits the parent grid's sizing and alignment, allowing card headers, bodies, and footers across different cards to align perfectly.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "To nest flexbox containers inside table rows"
        },
        {
          "id": "B",
          "text": "To allow a child grid container to adopt the track sizing and alignment of its parent grid"
        },
        {
          "id": "C",
          "text": "To compress large grid datasets for low-memory devices"
        },
        {
          "id": "D",
          "text": "To split an image into multiple CSS sprites"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "flexbox",
    "question": "What is the default value of the `flex` shorthand property in CSS (`flex: 0 1 auto`)?",
    "answer": "`flex-grow: 0`, `flex-shrink: 1`, `flex-basis: auto`",
    "explanation": "By default, flex items will not grow (`0`), can shrink if space is constrained (`1`), and determine their initial size based on content or dimensions (`auto`).",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "flex-grow: 1, flex-shrink: 0, flex-basis: 0%"
        },
        {
          "id": "B",
          "text": "flex-grow: 0, flex-shrink: 1, flex-basis: auto"
        },
        {
          "id": "C",
          "text": "flex-grow: 1, flex-shrink: 1, flex-basis: 100%"
        },
        {
          "id": "D",
          "text": "flex-grow: 0, flex-shrink: 0, flex-basis: none"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "responsive-design",
    "question": "What is the difference between `min-width` and `max-width` media queries in responsive strategy?",
    "answer": "`min-width` is used in Mobile-First strategies (scaling up for larger screens); `max-width` is used in Desktop-First strategies (scaling down).",
    "explanation": "Mobile-first styling writes base CSS for small screens and uses `@media (min-width: 768px)` to enhance for tablets and desktops, which reduces unnecessary CSS overrides on mobile.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "min-width is for height; max-width is for width"
        },
        {
          "id": "B",
          "text": "min-width facilitates mobile-first progressive enhancement; max-width facilitates desktop-first graceful degradation"
        },
        {
          "id": "C",
          "text": "max-width cannot be used with Flexbox"
        },
        {
          "id": "D",
          "text": "They are interchangeable and produce identical CSS bundles"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "selectors",
    "question": "What does the `:focus-visible` pseudo-class do compared to `:focus`?",
    "answer": "It applies focus styling only when the browser determines focus should be visible (e.g. keyboard Tab navigation, not mouse clicks).",
    "explanation": "`:focus-visible` preserves accessibility outlines for keyboard users while preventing distracting focus rings from appearing when mouse users click on buttons.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It hides focused inputs on mobile screens"
        },
        {
          "id": "B",
          "text": "It displays focus outlines selectively (such as keyboard navigation) while avoiding them on mouse clicks"
        },
        {
          "id": "C",
          "text": "It forces inputs to stay in focus permanently"
        },
        {
          "id": "D",
          "text": "It changes focus colors based on ambient light sensors"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "modern-css",
    "question": "What is the purpose of the `dvh` (dynamic viewport height) unit in modern mobile CSS?",
    "answer": "It dynamically recalculates viewport height as mobile browser UI chrome (address bar / navigation bar) expands and collapses.",
    "explanation": "`100vh` on mobile often causes content to be cut off behind browser navigation bars. `100dvh` adapts dynamically as mobile browser URL bars appear and disappear during scrolling.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It represents device pixel density (DPI)"
        },
        {
          "id": "B",
          "text": "It dynamically adjusts viewport height to account for expanding/collapsing mobile browser address bars"
        },
        {
          "id": "C",
          "text": "It measures viewport width divided by device height"
        },
        {
          "id": "D",
          "text": "It calculates dark mode contrast ratios"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "box-model",
    "question": "What establishes a new Block Formatting Context (BFC) in CSS?",
    "answer": "Applying `display: flow-root`, `overflow: hidden/auto`, `position: absolute`, or `display: flex/grid`.",
    "explanation": "A BFC contains internal floats, prevents external margins from collapsing into it, and prevents elements from wrapping around preceding floated elements.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Applying text-align: center on paragraph tags"
        },
        {
          "id": "B",
          "text": "Setting display: flow-root, overflow other than visible, or position: absolute/fixed"
        },
        {
          "id": "C",
          "text": "Adding an HTML5 header element"
        },
        {
          "id": "D",
          "text": "Using CSS variables inside margin values"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "css",
    "topicSlug": "modern-css",
    "question": "What does the `aspect-ratio` CSS property do (e.g. `aspect-ratio: 16 / 9;`)?",
    "answer": "It defines a preferred aspect ratio for the box, allowing automatic height calculation when width is specified.",
    "explanation": "`aspect-ratio: 16 / 9` prevents layout shifts (Cumulative Layout Shift - CLS) for responsive video and image containers before media has loaded.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It limits the maximum file size of background images"
        },
        {
          "id": "B",
          "text": "It maintains a fixed ratio between width and height, preventing layout shift"
        },
        {
          "id": "C",
          "text": "It forces display orientation to landscape mode"
        },
        {
          "id": "D",
          "text": "It compresses WebGL texture dimensions"
        }
      ],
      "correctOption": "B"
    }
  }
];

export const sqlMCQs: CuratedMCQ[] = [
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "question": "What do the four letters in the ACID database transaction model stand for?",
    "answer": "Atomicity, Consistency, Isolation, Durability",
    "explanation": "Atomicity (all or nothing), Consistency (state transitions obey constraints), Isolation (concurrent transactions execute without interference), Durability (committed data survives system crashes).",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Authentication, Concurrency, Indexing, Data-integrity"
        },
        {
          "id": "B",
          "text": "Atomicity, Consistency, Isolation, Durability"
        },
        {
          "id": "C",
          "text": "Asynchronous, Clustered, Indexed, Distributed"
        },
        {
          "id": "D",
          "text": "Availability, Consistency, Ingestion, Distribution"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "joins",
    "question": "What is the operational difference between an `INNER JOIN` and a `LEFT JOIN` in SQL?",
    "answer": "`INNER JOIN` returns only rows that have matching values in both tables; `LEFT JOIN` returns all rows from the left table and matched rows from the right table (with NULLs for non-matches).",
    "explanation": "If a row in Table A has no corresponding match in Table B, `INNER JOIN` excludes it from results. `LEFT JOIN` retains the Table A row and fills Table B columns with `NULL`.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "INNER JOIN operates on primary keys; LEFT JOIN operates on foreign keys"
        },
        {
          "id": "B",
          "text": "INNER JOIN returns only matching rows; LEFT JOIN returns all left-table rows with NULLs for unmatched right-table rows"
        },
        {
          "id": "C",
          "text": "LEFT JOIN is faster because it bypasses table indexes"
        },
        {
          "id": "D",
          "text": "INNER JOIN cannot be combined with WHERE clauses"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What is the difference between the `WHERE` clause and the `HAVING` clause in an SQL query?",
    "answer": "`WHERE` filters rows before aggregation; `HAVING` filters grouped rows after aggregate functions (`COUNT`, `SUM`, etc.) are computed.",
    "explanation": "You cannot use aggregate functions directly in a `WHERE` clause (e.g. `WHERE COUNT(*) > 5` is invalid). You must use `HAVING COUNT(*) > 5` in combination with `GROUP BY`.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "WHERE is for numeric data; HAVING is for strings"
        },
        {
          "id": "B",
          "text": "WHERE filters individual rows before aggregation; HAVING filters groups after aggregation"
        },
        {
          "id": "C",
          "text": "HAVING is only available in NoSQL databases"
        },
        {
          "id": "D",
          "text": "WHERE executes after ORDER BY; HAVING executes before"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "question": "What is the fundamental difference between a Clustered Index and a Non-Clustered Index?",
    "answer": "A clustered index determines the physical order of data rows on disk (only one per table); a non-clustered index is a separate lookup structure with pointers to table rows.",
    "explanation": "Because table rows can only be physically stored on disk in one order, a table can have only one clustered index (usually the Primary Key). Non-clustered indexes contain index keys and row pointers (RID or clustered key).",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Clustered indexes are in-memory; non-clustered indexes are stored on disk"
        },
        {
          "id": "B",
          "text": "A clustered index physically sorts table rows on disk; non-clustered indexes are separate lookup structures pointing to rows"
        },
        {
          "id": "C",
          "text": "A table can have up to 256 clustered indexes"
        },
        {
          "id": "D",
          "text": "Non-clustered indexes cannot be used for range queries"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "normalization",
    "question": "What is the requirement for a database table to be in Third Normal Form (3NF)?",
    "answer": "It must be in Second Normal Form (2NF) and have no transitive functional dependencies (non-key attributes depend only on the primary key).",
    "explanation": "3NF ensures that non-primary key columns do not depend on other non-primary key columns (\"every non-key attribute must provide a fact about the key, the whole key, and nothing but the key\").",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It must contain at least three foreign key relationships"
        },
        {
          "id": "B",
          "text": "It must be in 2NF with no transitive dependencies between non-key columns"
        },
        {
          "id": "C",
          "text": "All table columns must allow NULL values"
        },
        {
          "id": "D",
          "text": "Table data must be replicated across three physical server nodes"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "question": "In SQL transaction isolation levels, what is a \"Dirty Read\"?",
    "answer": "When a transaction reads uncommitted data modified by another concurrent transaction that could still be rolled back.",
    "explanation": "Under `READ UNCOMMITTED`, Transaction A can read changes made by Transaction B. If Transaction B subsequently issues a `ROLLBACK`, Transaction A has acted upon invalid, phantom data.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Reading corrupted disk blocks caused by power failure"
        },
        {
          "id": "B",
          "text": "A transaction reading uncommitted data written by another transaction that may be rolled back"
        },
        {
          "id": "C",
          "text": "Reading records without primary key indexes"
        },
        {
          "id": "D",
          "text": "A slow query that consumes more than 100MB of RAM"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "question": "What is the strictest SQL transaction isolation level that prevents dirty reads, non-repeatable reads, and phantom reads?",
    "answer": "`SERIALIZABLE`",
    "explanation": "`SERIALIZABLE` completely isolates concurrent transactions, guaranteeing outcomes equivalent to executing transactions sequentially one after another, eliminating all concurrency anomalies.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "READ COMMITTED"
        },
        {
          "id": "B",
          "text": "SERIALIZABLE"
        },
        {
          "id": "C",
          "text": "REPEATABLE READ"
        },
        {
          "id": "D",
          "text": "SNAPSHOT ISOLATION"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "select-filtering",
    "question": "What is the operational performance difference between `UNION` and `UNION ALL` in SQL?",
    "answer": "`UNION` performs an expensive deduplication and sorting step to return unique rows; `UNION ALL` simply concatenates result sets without deduplication.",
    "explanation": "`UNION ALL` is significantly faster because the database engine does not have to sort and remove duplicate rows across the combined result sets.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "UNION ALL removes duplicates; UNION keeps duplicates"
        },
        {
          "id": "B",
          "text": "UNION performs deduplication sorting, while UNION ALL concatenates all rows without sorting"
        },
        {
          "id": "C",
          "text": "UNION ALL can only combine two tables maximum"
        },
        {
          "id": "D",
          "text": "UNION operates in memory; UNION ALL writes temporary files to disk"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "subqueries",
    "question": "What is a Common Table Expression (CTE) in SQL, declared using `WITH cte_name AS (...)`?",
    "answer": "A temporary named result set defined within the execution scope of a single SELECT, INSERT, UPDATE, or DELETE statement.",
    "explanation": "CTEs improve query readability compared to nested subqueries and support recursive queries (e.g. organizational hierarchy or graph traversals).",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "A permanent table saved in the database schema"
        },
        {
          "id": "B",
          "text": "A temporary named result set scoped to a single query execution"
        },
        {
          "id": "C",
          "text": "An encrypted connection pool mechanism"
        },
        {
          "id": "D",
          "text": "A stored procedure compiled into native assembly"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "functions",
    "question": "What is the purpose of Window Functions like `ROW_NUMBER() OVER (PARTITION BY department_id ORDER BY salary DESC)`?",
    "answer": "To calculate running totals, rankings, or aggregates across related row partitions without collapsing individual rows into a single group.",
    "explanation": "Unlike `GROUP BY` which aggregates and collapses rows, Window Functions compute values across a partition of rows while retaining individual row identity and detail.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "To render GUI modal windows in database administrative consoles"
        },
        {
          "id": "B",
          "text": "To compute rankings or aggregate metrics across a partition of rows while preserving individual row outputs"
        },
        {
          "id": "C",
          "text": "To paginate web results using client-side WebSockets"
        },
        {
          "id": "D",
          "text": "To restrict table access based on operating system user logins"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "crud",
    "question": "What is the difference between `DELETE FROM users;` and `TRUNCATE TABLE users;`?",
    "answer": "`DELETE` deletes rows one by one logging each removal (can be rolled back, fires triggers); `TRUNCATE` deallocates table data pages as a DDL operation (faster, resets identity).",
    "explanation": "`TRUNCATE` is a DDL command that quickly releases data storage pages without scanning individual rows. `DELETE` is a DML command that logs each deleted row and activates `ON DELETE` triggers.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "DELETE drops the table schema; TRUNCATE preserves the table"
        },
        {
          "id": "B",
          "text": "DELETE logs individual row deletions and fires triggers; TRUNCATE deallocates data pages directly and is much faster"
        },
        {
          "id": "C",
          "text": "TRUNCATE allows WHERE clauses, whereas DELETE removes all rows unconditionally"
        },
        {
          "id": "D",
          "text": "DELETE cannot be rolled back in a transaction"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "question": "What is the Leftmost Prefix Rule for composite (multi-column) indexes on `(last_name, first_name)`?",
    "answer": "The index can only be used by queries that filter by `last_name` (the leading column); filtering only by `first_name` cannot use the index.",
    "explanation": "A B-Tree composite index is sorted primarily by column 1, then column 2. Just like a phone book sorted by Last Name then First Name, searching only by First Name requires scanning the entire book.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Queries must list column names in alphabetical order"
        },
        {
          "id": "B",
          "text": "The index accelerates queries filtering by the leading column(s), but cannot satisfy queries filtering only trailing columns"
        },
        {
          "id": "C",
          "text": "Leftmost columns can only contain numeric data types"
        },
        {
          "id": "D",
          "text": "The index is stored only on the leftmost disk partition"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "question": "What does `SELECT ... FOR UPDATE` do in a database transaction?",
    "answer": "It places an exclusive row-level lock on the retrieved rows, preventing concurrent transactions from updating or deleting them until commit/rollback.",
    "explanation": "`FOR UPDATE` implements pessimistic concurrency control, ensuring that another transaction cannot modify or lock the selected records before the current transaction finishes its updates.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It automatically modifies row data without needing an UPDATE statement"
        },
        {
          "id": "B",
          "text": "It acquires exclusive row locks on selected records until the transaction completes"
        },
        {
          "id": "C",
          "text": "It converts the query into a background batch job"
        },
        {
          "id": "D",
          "text": "It disables read replicas for the entire database"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "question": "What behavior does the `ON DELETE CASCADE` foreign key constraint enforce?",
    "answer": "When a referenced row in the parent table is deleted, all matching child rows in the referencing table are automatically deleted.",
    "explanation": "`CASCADE` maintains referential integrity by automatically cleaning up dependent child records whenever the corresponding parent entity is removed.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It prevents the parent row from being deleted if child rows exist"
        },
        {
          "id": "B",
          "text": "It automatically deletes dependent child rows when the parent row is deleted"
        },
        {
          "id": "C",
          "text": "It sets the foreign key values in child rows to NULL"
        },
        {
          "id": "D",
          "text": "It backs up deleted rows into an archive table"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "performance",
    "question": "What is the \"N+1 Query Problem\" frequently encountered when using ORMs with relational databases?",
    "answer": "Executing 1 initial query to fetch N parent records, followed by N separate queries to fetch related child records for each parent.",
    "explanation": "Fetching 100 blog posts in 1 query, and then executing 100 individual queries to fetch each post's author results in 101 database round trips. Mitigation: use `JOIN` or eager loading (`include`).",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Running an algorithm with O(N+1) time complexity"
        },
        {
          "id": "B",
          "text": "Fetching parent entities in 1 query followed by N individual round-trip queries for each child association"
        },
        {
          "id": "C",
          "text": "Having N+1 primary keys on a partitioned table"
        },
        {
          "id": "D",
          "text": "A database connection leak where N+1 threads exhaust the pool"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "performance",
    "question": "What does the SQL `EXPLAIN` (or `EXPLAIN ANALYZE`) command display?",
    "answer": "The query execution plan chosen by the query optimizer, including index scans, sequential scans, joins, and estimated costs.",
    "explanation": "`EXPLAIN` reveals how the database engine executes a query—whether it uses indexes, performs table scans, and how many rows it expects to process.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "A human-readable English summary of table comments"
        },
        {
          "id": "B",
          "text": "The execution plan detailing how the database optimizer parses and executes the query"
        },
        {
          "id": "C",
          "text": "The syntax errors found in an invalid SQL string"
        },
        {
          "id": "D",
          "text": "A diff comparing current table schema against previous migrations"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "question": "What is a Database Deadlock?",
    "answer": "A situation where two or more transactions each hold a lock that the other needs, causing all transactions to wait indefinitely.",
    "explanation": "Transaction 1 holds Lock A and waits for Lock B. Transaction 2 holds Lock B and waits for Lock A. Modern database engines detect deadlock cycles and automatically abort one transaction.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "A disk failure where database files become read-only"
        },
        {
          "id": "B",
          "text": "A circular dependency where two transactions each wait for locks held by the other, freezing progress"
        },
        {
          "id": "C",
          "text": "An abandoned user session that never logs out"
        },
        {
          "id": "D",
          "text": "A slow query exceeding connection pool timeout limits"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "performance",
    "question": "What is the architectural difference between a Standard View and a Materialized View in SQL databases?",
    "answer": "A standard view is a saved query executed on the fly; a materialized view physically caches and persists the query results on disk.",
    "explanation": "Standard views do not store data—they run the underlying query when accessed. Materialized views persist the computed dataset on disk for lightning-fast reads, requiring periodic refreshing.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Standard views are stored in RAM; materialized views are encrypted"
        },
        {
          "id": "B",
          "text": "Standard views execute the query dynamically on demand; materialized views store computed results physically on disk"
        },
        {
          "id": "C",
          "text": "Materialized views cannot contain aggregate functions"
        },
        {
          "id": "D",
          "text": "Standard views can only be queried by database administrators"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "constraints",
    "question": "What is the difference between a `PRIMARY KEY` and a `UNIQUE` constraint in SQL?",
    "answer": "A table can have only one Primary Key and it strictly forbids NULL values; a table can have multiple UNIQUE constraints and they typically permit NULLs.",
    "explanation": "A Primary Key uniquely identifies each row and cannot be NULL. Tables can have many `UNIQUE` constraints (e.g. `email`, `username`) to prevent duplicates while allowing optional values.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "UNIQUE constraints automatically create clustered indexes, while Primary Keys do not"
        },
        {
          "id": "B",
          "text": "Only one Primary Key is permitted per table and it rejects NULLs; multiple UNIQUE constraints are allowed and permit NULLs"
        },
        {
          "id": "C",
          "text": "Primary Keys only support integer data types"
        },
        {
          "id": "D",
          "text": "UNIQUE constraints are evaluated at application level, not database level"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "performance",
    "question": "Why does using a wildcard at the start of a LIKE pattern (e.g. WHERE name LIKE '%smith') prevent the use of standard B-Tree indexes?",
    "answer": "B-Tree indexes sort strings from left to right; a leading wildcard prevents the engine from navigating the sorted tree prefix.",
    "explanation": "B-Tree indexes look up matching prefixes (like a dictionary). LIKE 'smith%' can use the index, but LIKE '%smith' requires scanning every record because the starting characters are unknown.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "SQL forbids string searches inside indexed columns"
        },
        {
          "id": "B",
          "text": "B-Tree indexes rely on leftmost prefix sorting; a leading wildcard requires a full table scan"
        },
        {
          "id": "C",
          "text": "The % symbol triggers regex execution which always runs in CPU user mode"
        },
        {
          "id": "D",
          "text": "B-Tree indexes only store hash codes of exact strings"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "architecture",
    "question": "What is Database Sharding in scalable systems architecture?",
    "answer": "Horizontally partitioning data across multiple independent database server nodes by a designated shard key.",
    "explanation": "Sharding splits large tables across separate physical database instances (e.g. users 1-1M on DB 1, users 1M-2M on DB 2), distributing storage and write throughput beyond a single server's limits.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Compressing database backup files into encrypted ZIP archives"
        },
        {
          "id": "B",
          "text": "Horizontally distributing data partitions across multiple database servers based on a shard key"
        },
        {
          "id": "C",
          "text": "Creating read-only mirrors of the transaction log"
        },
        {
          "id": "D",
          "text": "Converting relational tables into MongoDB JSON documents"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "architecture",
    "question": "What is Database Connection Pooling, and why is it essential for backend applications?",
    "answer": "It maintains a cache of active database connections reused across incoming requests, avoiding the high overhead of establishing TCP/TLS handshakes on every query.",
    "explanation": "Opening a new database connection involves TCP handshakes, TLS negotiation, authentication, and backend process/thread allocation. A pool recycles open connections, reducing latency.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It aggregates multiple SELECT queries into a single HTTP packet"
        },
        {
          "id": "B",
          "text": "It retains and reuses a cache of established database connections, minimizing connection overhead"
        },
        {
          "id": "C",
          "text": "It backs up transaction logs to cloud storage every minute"
        },
        {
          "id": "D",
          "text": "It prevents SQL injection vulnerabilities automatically"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "question": "What is the operational difference between Optimistic Concurrency Control (OCC) and Pessimistic Concurrency Control?",
    "answer": "OCC allows concurrent reads/writes and validates conflicts at commit time (e.g. version numbers); Pessimistic locks rows immediately upon reading to prevent conflicts.",
    "explanation": "OCC checks `WHERE version = :current_version` when updating, aborting or retrying if someone else modified the record. Pessimistic control uses database locks (`FOR UPDATE`), which blocks other transactions.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "OCC is for read-only databases; Pessimistic is for write-heavy databases"
        },
        {
          "id": "B",
          "text": "OCC checks for version conflicts at commit time without holding locks; Pessimistic acquires locks upfront to block concurrent access"
        },
        {
          "id": "C",
          "text": "OCC requires distributed Redis instances"
        },
        {
          "id": "D",
          "text": "Pessimistic locking cannot cause deadlocks"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "joins",
    "question": "What does a `CROSS JOIN` between two tables of 10 rows and 20 rows produce?",
    "answer": "A Cartesian product containing 200 rows (10 × 20).",
    "explanation": "A `CROSS JOIN` matches every row in the first table with every row in the second table without any filtering condition, yielding `count(TableA) * count(TableB)` rows.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "30 rows (10 + 20)"
        },
        {
          "id": "B",
          "text": "200 rows (10 × 20)"
        },
        {
          "id": "C",
          "text": "10 rows (the minimum count)"
        },
        {
          "id": "D",
          "text": "0 rows unless a WHERE clause is provided"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "sql",
    "topicSlug": "crud",
    "question": "What is an \"Upsert\" operation in SQL, and how is it standardized in modern SQL (PostgreSQL / SQLite / MySQL)?",
    "answer": "An operation that inserts a row or updates it if a unique key conflict occurs (`INSERT ... ON CONFLICT DO UPDATE` or `ON DUPLICATE KEY UPDATE`).",
    "explanation": "Upsert avoids race conditions where a client checks if a record exists and then inserts it. The database handles insertion and update atomically in a single statement.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "A statement that reverses the order of table columns"
        },
        {
          "id": "B",
          "text": "An atomic operation that inserts a row or updates existing data if a unique constraint conflict occurs"
        },
        {
          "id": "C",
          "text": "A command that drops unreferenced foreign key records"
        },
        {
          "id": "D",
          "text": "A query that exports database tables to CSV format"
        }
      ],
      "correctOption": "B"
    }
  }
];

export const gitMCQs: CuratedMCQ[] = [
  {
    "technologySlug": "git",
    "topicSlug": "rebasing",
    "question": "What is the fundamental difference between `git merge` and `git rebase`?",
    "answer": "`git merge` creates a new merge commit preserving branch history; `git rebase` replays commits on top of another base tip for a linear history.",
    "explanation": "`git merge` retains the exact chronological branch topologies. `git rebase` rewrites commit history by transplanting branch commits onto the tip of the target branch, producing a clean linear graph.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "git rebase deletes uncommitted files, while git merge stashes them"
        },
        {
          "id": "B",
          "text": "git merge creates a merge commit preserving history; git rebase replays commits to produce a clean linear history"
        },
        {
          "id": "C",
          "text": "git merge is for remote repositories; git rebase is only for local directories"
        },
        {
          "id": "D",
          "text": "git rebase cannot be aborted once started"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "commits",
    "question": "What are the differences between `git reset --soft`, `--mixed`, and `--hard`?",
    "answer": "`--soft` keeps changes in the Staging area; `--mixed` keeps changes in the Working directory (unstaged); `--hard` completely discards changes.",
    "explanation": "`git reset HEAD~1 --soft` moves HEAD back but leaves modifications staged in the index. `--mixed` (default) unstages them into working files. `--hard` resets HEAD, index, and working tree, destroying uncommitted edits.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "--soft creates a backup branch; --hard deletes the entire repository"
        },
        {
          "id": "B",
          "text": "--soft keeps changes staged; --mixed keeps changes unstaged in working directory; --hard wipes all changes"
        },
        {
          "id": "C",
          "text": "--hard only affects remote branches; --soft only affects local branches"
        },
        {
          "id": "D",
          "text": "They are identical flags with varying verbosity logs"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "commits",
    "question": "What does `git cherry-pick <commit-hash>` do?",
    "answer": "It applies the changes introduced by a specific existing commit from another branch onto the current active branch.",
    "explanation": "`git cherry-pick` extracts a specific commit patch and commits it onto your current HEAD without needing to merge the entire source branch.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It deletes selected commits from repository history permanently"
        },
        {
          "id": "B",
          "text": "It applies the patch of a specific commit onto the current branch as a new commit"
        },
        {
          "id": "C",
          "text": "It compares two branches and lists file differences"
        },
        {
          "id": "D",
          "text": "It creates a lightweight tag on the oldest commit in the repository"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "branches",
    "question": "What does a \"Detached HEAD\" state in Git mean?",
    "answer": "The HEAD pointer is pointing directly to a specific commit hash rather than to a named branch reference.",
    "explanation": "When in detached HEAD, any new commits created will not belong to any branch. If you switch branches without creating a new branch name, those commits may eventually be garbage collected by Git.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "The local repository has lost connection to the remote origin"
        },
        {
          "id": "B",
          "text": "HEAD points directly to a commit hash instead of a named branch pointer"
        },
        {
          "id": "C",
          "text": "The git binary executable is corrupted on disk"
        },
        {
          "id": "D",
          "text": "A merge conflict occurred that cannot be resolved"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "stashing",
    "question": "What is the operational difference between `git stash pop` and `git stash apply`?",
    "answer": "`git stash pop` applies the most recent stashed state and removes it from the stash list; `git stash apply` applies it but leaves it in the stash.",
    "explanation": "`pop` is equivalent to running `git stash apply` followed by `git stash drop`. `apply` allows you to test applying the stash without losing the stash record.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "git stash apply discards working directory changes; pop preserves them"
        },
        {
          "id": "B",
          "text": "git stash pop applies and deletes the stash entry; git stash apply applies the stash while retaining it"
        },
        {
          "id": "C",
          "text": "git stash pop is only compatible with Git version 1.0"
        },
        {
          "id": "D",
          "text": "git stash apply automatically creates a new remote branch"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "remote-repositories",
    "question": "What is the difference between `git fetch` and `git pull`?",
    "answer": "`git fetch` downloads remote commits and updates remote-tracking branches without modifying local files; `git pull` fetches and merges into the active branch.",
    "explanation": "`git pull` is essentially `git fetch` followed immediately by `git merge FETCH_HEAD`. `git fetch` allows reviewing remote changes before incorporating them.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "git fetch uploads code; git pull downloads code"
        },
        {
          "id": "B",
          "text": "git fetch downloads commits to remote-tracking branches without merging; git pull fetches and merges into current branch"
        },
        {
          "id": "C",
          "text": "git pull operates via SSH; git fetch operates exclusively via HTTPS"
        },
        {
          "id": "D",
          "text": "git fetch creates a local tag for every remote commit"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "git-fundamentals",
    "question": "What four primary object types are stored inside the Git internal object database (`.git/objects`)?",
    "answer": "Blobs, Trees, Commits, and Annotated Tags",
    "explanation": "Blobs store raw file contents. Trees represent directory structures and file names. Commits point to a top-level tree, parent commit(s), and author metadata. Tags point to specific commit objects with annotation text.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Files, Folders, Branches, and Pull Requests"
        },
        {
          "id": "B",
          "text": "Blobs, Trees, Commits, and Annotated Tags"
        },
        {
          "id": "C",
          "text": "Diffs, Patches, Merges, and Stashes"
        },
        {
          "id": "D",
          "text": "Indexes, Tables, Schemas, and Views"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "commits",
    "question": "If a file is already tracked in Git and then added to `.gitignore`, why does Git continue tracking changes to that file?",
    "answer": "`.gitignore` only prevents untracked files from being added to the index; already tracked files must be removed using `git rm --cached`.",
    "explanation": "To stop tracking an already committed file without deleting it from your local working directory, you must run `git rm --cached <file>` and commit the change.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Because .gitignore only applies to production deployments"
        },
        {
          "id": "B",
          "text": ".gitignore only ignores untracked files; tracked files must be explicitly removed from the index with git rm --cached"
        },
        {
          "id": "C",
          "text": "The .gitignore file syntax requires regular expressions to ignore tracked files"
        },
        {
          "id": "D",
          "text": "Git requires restarting your computer to reload .gitignore"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "conflict-resolution",
    "question": "What is a \"Fast-Forward\" merge in Git?",
    "answer": "When the target branch tip has no divergent commits from the merged branch, Git simply moves the branch pointer forward without creating a merge commit.",
    "explanation": "If `main` has not moved since `feature` was branched, merging `feature` into `main` simply advances `main`'s pointer to `feature`'s tip with zero merge conflicts.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "A merge performed at 2x clock speed on multi-core CPUs"
        },
        {
          "id": "B",
          "text": "Advancing the branch pointer directly to the incoming commit because no divergence exists"
        },
        {
          "id": "C",
          "text": "A merge that discards incoming conflicts automatically"
        },
        {
          "id": "D",
          "text": "A merge triggered via GitHub Actions webhooks"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "commits",
    "question": "Why is `git revert <commit-hash>` preferred over `git reset` on public shared branches?",
    "answer": "`git revert` creates a new commit that inverts the changes, safely preserving commit history without requiring a dangerous force-push.",
    "explanation": "`git reset` rewrites history by deleting commits from branch tips, which breaks cloned repositories of team members. `git revert` is an append-only operation that safely undoes changes.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "git revert runs faster because it does not check file integrity"
        },
        {
          "id": "B",
          "text": "git revert appends a new inverse commit preserving history, avoiding destructive force-pushes"
        },
        {
          "id": "C",
          "text": "git reset cannot be executed on branches named main or master"
        },
        {
          "id": "D",
          "text": "git revert automatically closes pull requests"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "git-best-practices",
    "question": "What does the `git bisect` command do?",
    "answer": "It uses binary search through commit history to locate the exact commit that introduced a regression or bug.",
    "explanation": "By telling Git a known \"good\" commit and a known \"bad\" commit, `git bisect` checks out middle commits automatically so you can test and pinpoint the breaking change in logarithmic time.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It splits a Git repository into two smaller repositories"
        },
        {
          "id": "B",
          "text": "It performs binary search through commit history to find the commit that introduced a bug"
        },
        {
          "id": "C",
          "text": "It checks out two branches side by side for visual comparison"
        },
        {
          "id": "D",
          "text": "It splits large binary files into 50MB chunks for GitHub uploads"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "git-best-practices",
    "question": "What is `git reflog` and how can it save lost commits after an accidental `git reset --hard`?",
    "answer": "It records every update to the HEAD pointer in your local repository, allowing you to find the SHA-1 of deleted commits and recover them.",
    "explanation": "Even when branches or commits appear deleted by a hard reset, their SHA-1 hashes remain in the reflog for typically 30 to 90 days before garbage collection runs.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "A remote log stored on GitHub servers tracking user logins"
        },
        {
          "id": "B",
          "text": "A local history log of all HEAD pointer movements, allowing recovery of disconnected commits"
        },
        {
          "id": "C",
          "text": "A tool that reformats commit messages to adhere to Conventional Commits"
        },
        {
          "id": "D",
          "text": "A cryptographic verification ledger for signed commits"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "git-best-practices",
    "question": "What are Git Hooks?",
    "answer": "Scripts triggered automatically when specific lifecycle events occur, such as `pre-commit`, `commit-msg`, or `pre-push`.",
    "explanation": "Git hooks located in `.git/hooks/` execute custom shell scripts to run linters, unit tests, or validate commit message formats before commits or pushes are accepted.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "React hooks for managing Git repository state in web browsers"
        },
        {
          "id": "B",
          "text": "Custom scripts that execute automatically during key lifecycle actions like committing or pushing"
        },
        {
          "id": "C",
          "text": "Webhooks that notify third-party Slack bots when code merges"
        },
        {
          "id": "D",
          "text": "Hardware security keys used for SSH authentication"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "branches",
    "question": "What is the difference between `git branch -d <branch>` and `git branch -D <branch>`?",
    "answer": "`-d` safely deletes the branch only if it is already merged into upstream; `-D` force-deletes the branch regardless of merge status.",
    "explanation": "`-d` stands for `--delete` and checks merge status to prevent accidental code loss. `-D` is shorthand for `--delete --force`.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "-d deletes local branches; -D deletes remote branches on GitHub"
        },
        {
          "id": "B",
          "text": "-d deletes only if merged upstream; -D forces deletion even if unmerged changes exist"
        },
        {
          "id": "C",
          "text": "-D deletes all branches except the active one"
        },
        {
          "id": "D",
          "text": "-d preserves branch tags; -D deletes associated tags"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "commits",
    "question": "What is the difference between a Lightweight Tag and an Annotated Tag in Git?",
    "answer": "A lightweight tag is just a pointer to a commit; an annotated tag is a full Git object containing tagger name, email, date, and a message.",
    "explanation": "Annotated tags (`git tag -a v1.0.0 -m \"Release 1.0.0\"`) are stored as full objects with GPG signing support, recommended for public releases.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Lightweight tags are for branches; annotated tags are for pull requests"
        },
        {
          "id": "B",
          "text": "A lightweight tag is a simple commit pointer; an annotated tag stores metadata, message, and tagger info"
        },
        {
          "id": "C",
          "text": "Annotated tags cannot be pushed to remote repositories"
        },
        {
          "id": "D",
          "text": "Lightweight tags expire automatically after 30 days"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "rebasing",
    "question": "What is \"Squash Merging\" and why is it frequently used when merging feature PRs into `main`?",
    "answer": "It condenses all commits from a feature branch into a single clean commit on the target branch.",
    "explanation": "Squash merging eliminates intermediate work-in-progress commits (e.g. \"fix typo\", \"WIP\"), keeping the `main` branch history concise and easy to revert if regressions occur.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It compresses repository files using GZIP compression algorithms"
        },
        {
          "id": "B",
          "text": "It combines all feature branch commits into one single commit on the destination branch"
        },
        {
          "id": "C",
          "text": "It deletes the author attribution of incoming commits"
        },
        {
          "id": "D",
          "text": "It forces unit tests to execute prior to branch merging"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "git-fundamentals",
    "question": "What does `git clean -fd` do in a Git repository?",
    "answer": "Forcefully removes untracked files and directories from the working tree.",
    "explanation": "`-f` forces removal (preventing accidental deletion), and `-d` includes untracked directories as well as files.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Formats all source code files using Prettier"
        },
        {
          "id": "B",
          "text": "Forcefully deletes untracked files and directories from the local working tree"
        },
        {
          "id": "C",
          "text": "Deletes branches that have been merged on remote origin"
        },
        {
          "id": "D",
          "text": "Empties the git commit message template"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "commits",
    "question": "What is the difference between `git diff` and `git diff --staged` (or `--cached`)?",
    "answer": "`git diff` compares working directory changes against the staging area; `git diff --staged` compares staged changes against the latest commit (HEAD).",
    "explanation": "Running `git diff` shows unstaged edits you have not yet added with `git add`. `git diff --staged` shows exactly what will be included in the next commit.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "git diff is for text files; git diff --staged is for binary files"
        },
        {
          "id": "B",
          "text": "git diff shows unstaged working changes; git diff --staged shows changes staged in the index ready to commit"
        },
        {
          "id": "C",
          "text": "git diff --staged compares local files against the remote server"
        },
        {
          "id": "D",
          "text": "They produce identical outputs at all times"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "remote-repositories",
    "question": "Why is `git push --force-with-lease` safer than standard `git push --force`?",
    "answer": "It checks whether the remote branch has received new commits from other teammates before overwriting, aborting if the remote tip has moved.",
    "explanation": "`--force` blindly overwrites the remote branch. `--force-with-lease` only overwrites if no one else has pushed new commits since your last fetch, preventing accidental destruction of coworkers' work.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It rents cloud storage servers on demand"
        },
        {
          "id": "B",
          "text": "It verifies that no concurrent commits were pushed by teammates before overwriting remote history"
        },
        {
          "id": "C",
          "text": "It creates a backup fork on your personal GitHub profile"
        },
        {
          "id": "D",
          "text": "It encrypts SSH private keys during transmission"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "git-fundamentals",
    "question": "What are the \"Three Trees\" architecture that Git uses to manage file states?",
    "answer": "The Working Directory, the Index (Staging Area), and the HEAD (last committed state).",
    "explanation": "Files start modified in the Working Directory, move into the Index (Staging Area) via `git add`, and are committed to HEAD via `git commit`.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "Master, Main, and Development branches"
        },
        {
          "id": "B",
          "text": "The Working Directory, the Index (Staging Area), and the HEAD commit state"
        },
        {
          "id": "C",
          "text": "Local, Staging, and Production servers"
        },
        {
          "id": "D",
          "text": "Binary, Text, and Symlink trees"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "branches",
    "question": "What modern Git command replaced `git checkout <branch>` to eliminate command overloading?",
    "answer": "`git switch <branch>`",
    "explanation": "Historically, `git checkout` was overloaded: it could switch branches and also discard working file modifications. Git 2.23 introduced `git switch` (for branches) and `git restore` (for files).",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "git change <branch>"
        },
        {
          "id": "B",
          "text": "git switch <branch>"
        },
        {
          "id": "C",
          "text": "git jump <branch>"
        },
        {
          "id": "D",
          "text": "git goto <branch>"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "commits",
    "question": "What is the purpose of `git commit --amend`?",
    "answer": "To modify the most recent commit by staging new changes or altering the commit message without creating a new commit.",
    "explanation": "`--amend` combines staged changes with the previous commit and allows updating the commit message, replacing the latest commit with a new SHA-1.",
    "difficulty": "easy",
    "questionType": "Practical",
    "isImportant": true,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "To delete the previous three commits"
        },
        {
          "id": "B",
          "text": "To incorporate staged changes into the most recent commit or update its commit message"
        },
        {
          "id": "C",
          "text": "To convert a private commit into an open-source commit"
        },
        {
          "id": "D",
          "text": "To sign commits with a GPG hardware dongle"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "remote-repositories",
    "question": "What does the command `git remote prune origin` do?",
    "answer": "It removes stale local references to remote-tracking branches that have been deleted on the remote server (`origin`).",
    "explanation": "When branches are deleted on GitHub, your local `origin/branch-name` pointers remain until pruned using `git remote prune origin` or `git fetch -p`.",
    "difficulty": "medium",
    "questionType": "Practical",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "It deletes all remote repositories on GitHub"
        },
        {
          "id": "B",
          "text": "It cleans up local remote-tracking branches that no longer exist on the remote server"
        },
        {
          "id": "C",
          "text": "It truncates commit history older than one year"
        },
        {
          "id": "D",
          "text": "It removes uncommitted local stashes"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "git-best-practices",
    "question": "What is a Git Submodule in multi-repository workflows?",
    "answer": "A record that embeds an external Git repository at a specific commit inside a subdirectory of a parent repository.",
    "explanation": "Submodules allow retaining a separate repository as a subfolder within a parent project, pinning it to an exact commit hash.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "A secondary branch that receives automatic pull request updates"
        },
        {
          "id": "B",
          "text": "A tool to keep an external Git repository as a subdirectory of another repository pinned to a specific commit"
        },
        {
          "id": "C",
          "text": "A compressed ZIP archive stored in Git LFS"
        },
        {
          "id": "D",
          "text": "A plugin that integrates Git into VS Code"
        }
      ],
      "correctOption": "B"
    }
  },
  {
    "technologySlug": "git",
    "topicSlug": "git-fundamentals",
    "question": "What hash algorithm did Git originally use to uniquely identify commit objects, trees, and blobs?",
    "answer": "SHA-1 (160-bit hash)",
    "explanation": "Git historically used 40-character hexadecimal SHA-1 hashes to uniquely address all repository objects (with modern Git migrating toward SHA-256).",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "mcq": {
      "enabled": true,
      "options": [
        {
          "id": "A",
          "text": "MD5"
        },
        {
          "id": "B",
          "text": "SHA-1"
        },
        {
          "id": "C",
          "text": "AES-256"
        },
        {
          "id": "D",
          "text": "Bcrypt"
        }
      ],
      "correctOption": "B"
    }
  }
];

export const additionalCuratedMCQs: CuratedMCQ[] = [
  ...typescriptMCQs,
  ...htmlMCQs,
  ...cssMCQs,
  ...sqlMCQs,
  ...gitMCQs,
];
