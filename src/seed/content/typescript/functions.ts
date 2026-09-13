import { SeedQuestion } from '../types';

export const tsFunctionsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How do Function Overloads work in TypeScript and how does the implementation signature relate to overload signatures?",
    "title": "How do Function Overloads work in TypeScript and how does the implementation signature relate to ove",
    "answer": "Function overloads specify multiple callable type signatures followed by a single general implementation signature that is NOT directly callable.",
    "explanation": "You declare one or more overload signatures describing the allowed argument-return combinations. Immediately following them is the implementation signature, which must have parameter and return types broad enough to accommodate all overload signatures. Callers can ONLY invoke the overload signatures; the implementation signature is invisible from the outside.",
    "interviewAnswer": "Function overloads specify multiple callable type signatures followed by a single general implementation signature that is NOT directly callable. You declare one or more overload signatures describing the allowed argument-return combinations. Immediately following them is the implementation signature, which must have parameter and return types broad enough to accommodate all overload signatures. Callers can ONLY invoke the overload signatures; the implementation signature is invisible from the outside.",
    "importantPoints": [
      "Declare multiple overload signatures with distinct argument/return shapes",
      "Single implementation signature handles all cases internally",
      "Implementation signature cannot be called directly by consumers",
      "Alternative: Union types are often cleaner than overloads for simple variations"
    ],
    "commonMistakes": [
      "Attempting to call the function with types that match the implementation signature but not any overload signature",
      "Putting the most general overload signature first (TypeScript matches overloads in declared top-to-bottom order)"
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
      "functions",
      "overloads",
      "signatures"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Overload signatures (callable):\nfunction makeDate(timestamp: number): Date;\nfunction makeDate(m: number, d: number, y: number): Date;\n\n// Implementation signature (internal):\nfunction makeDate(mOrTimestamp: number, d?: number, y?: number): Date {\n  if (d !== undefined && y !== undefined) {\n    return new Date(y, mOrTimestamp, d);\n  }\n  return new Date(mOrTimestamp);\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How do you type the 'this' context inside a function in TypeScript?",
    "title": "How do you type the 'this' context inside a function in TypeScript?",
    "answer": "Declare a fake parameter named 'this' as the very first parameter of the function signature; TypeScript enforces the context and strips it from compiled JS.",
    "explanation": "JavaScript dynamically binds 'this'. In TypeScript, if a function relies on a specific 'this' context (e.g., in a DOM event handler or class method), you declare `function fn(this: SomeType, arg1: string)`. The compiler verifies that callers invoke the function with the correct context (via obj.fn() or fn.call(obj)), while emitting zero arguments in the compiled JavaScript output.",
    "interviewAnswer": "Declare a fake parameter named 'this' as the very first parameter of the function signature; TypeScript enforces the context and strips it from compiled JS. JavaScript dynamically binds 'this'. In TypeScript, if a function relies on a specific 'this' context (e.g., in a DOM event handler or class method), you declare `function fn(this: SomeType, arg1: string)`. The compiler verifies that callers invoke the function with the correct context (via obj.fn() or fn.call(obj)), while emitting zero arguments in the compiled JavaScript output.",
    "importantPoints": [
      "'this' must be the first parameter in the signature",
      "Completely erased at compile time (0 runtime argument overhead)",
      "Enabled strictly via 'noImplicitThis: true'",
      "Arrow functions do not bind 'this' and cannot have a 'this' parameter"
    ],
    "commonMistakes": [
      "Using an arrow function where dynamic 'this' binding is required",
      "Forgetting that 'this' is stripped at compile time"
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
      "functions",
      "this-parameter",
      "context",
      "noImplicitThis"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "interface Button {\n  id: string;\n  onClick(this: Button, event: MouseEvent): void;\n}\n\nconst btn: Button = {\n  id: 'submit-btn',\n  onClick(this: Button, event) {\n    console.log('Clicked button id:', this.id);\n  }\n};"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "What is the difference between optional parameters and default parameters in function signatures?",
    "title": "What is the difference between optional parameters and default parameters in function signatures?",
    "answer": "Optional parameters (`x?: number`) have type `number | undefined` and must follow required parameters; default parameters (`x = 10`) infer their type and emit fallback JS.",
    "explanation": "An optional parameter `x?: number` allows callers to omit the argument, receiving `undefined` inside the function. Default parameters `x = 10` automatically infer `number`, allow callers to omit or pass `undefined`, and emit JavaScript runtime fallback code (`x === void 0 ? 10 : x`).",
    "interviewAnswer": "Optional parameters (`x?: number`) have type `number | undefined` and must follow required parameters; default parameters (`x = 10`) infer their type and emit fallback JS. An optional parameter `x?: number` allows callers to omit the argument, receiving `undefined` inside the function. Default parameters `x = 10` automatically infer `number`, allow callers to omit or pass `undefined`, and emit JavaScript runtime fallback code (`x === void 0 ? 10 : x`).",
    "importantPoints": [
      "Optional parameters append `| undefined` to the type",
      "Default parameters emit runtime fallback assignments in compiled JS",
      "Both allow omitting the argument when calling",
      "Optional parameters cannot precede required parameters in the parameter list"
    ],
    "commonMistakes": [
      "Placing an optional parameter before a required parameter without defaults",
      "Assuming optional parameters provide a default value"
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
      "functions",
      "optional-parameters",
      "default-parameters"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Optional: arg is number | undefined\nfunction log(msg: string, code?: number) {}\n\n// Default: arg is number with runtime fallback\nfunction multiply(a: number, factor = 2) {\n  return a * factor;\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How does TypeScript check the return type of callback functions returning 'void'?",
    "title": "How does TypeScript check the return type of callback functions returning 'void'?",
    "answer": "A contextual return type of 'void' allows callback functions to return any value, but callers are prevented from using that returned value.",
    "explanation": "This design accommodates standard JavaScript patterns where callbacks (e.g. `Array.prototype.push`) return values that callers do not care about. If `[1, 2].forEach(n => list.push(n))` were rejected because push() returns a number instead of void, idiomatic JS code would break. TypeScript allows the return but treats it as unobservable.",
    "interviewAnswer": "A contextual return type of 'void' allows callback functions to return any value, but callers are prevented from using that returned value. This design accommodates standard JavaScript patterns where callbacks (e.g. `Array.prototype.push`) return values that callers do not care about. If `[1, 2].forEach(n => list.push(n))` were rejected because push() returns a number instead of void, idiomatic JS code would break. TypeScript allows the return but treats it as unobservable.",
    "importantPoints": [
      "Contextual 'void' return type does not force functions to return nothing",
      "Enables passing functions that return numbers/booleans into void callbacks (e.g. Array.prototype.forEach)",
      "Prevents consumers from reading or using the returned value",
      "If you want to strictly forbid any return, type the callback as `() => undefined`"
    ],
    "commonMistakes": [
      "Attempting to assign the result of a void-returning callback to a variable",
      "Assuming a void-returning callback cannot return anything at runtime"
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
      "functions",
      "void",
      "callbacks",
      "type-safety"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type VoidCallback = () => void;\n\n// Allowed: Array.push returns number, but callback returns void\nconst cb: VoidCallback = () => [1, 2].push(3);\n\n// const result = cb(); // Error: Type 'void' cannot be assigned to 'number'."
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How do you type rest parameters and spread arguments in TypeScript?",
    "title": "How do you type rest parameters and spread arguments in TypeScript?",
    "answer": "Type rest parameters as an array (`...args: number[]`) or a tuple (`...args: [string, number]`) to enforce variable or exact positional arguments.",
    "explanation": "Rest parameters collect trailing arguments into an array. Typing rest parameters as a tuple enforces specific positions and length. Spreading a tuple into a function call allows TypeScript to validate that all required positional arguments are provided.",
    "interviewAnswer": "Type rest parameters as an array (`...args: number[]`) or a tuple (`...args: [string, number]`) to enforce variable or exact positional arguments. Rest parameters collect trailing arguments into an array. Typing rest parameters as a tuple enforces specific positions and length. Spreading a tuple into a function call allows TypeScript to validate that all required positional arguments are provided.",
    "importantPoints": [
      "Type as array for unbounded arguments: `...items: string[]`",
      "Type as tuple for fixed argument lists: `...args: [id: string, age: number]`",
      "Spread arguments must be typed as tuples or arrays",
      "Const-asserted arrays spread cleanly into positional tuple parameters"
    ],
    "commonMistakes": [
      "Spreading a standard array `number[]` into a function expecting exact positional parameters without a tuple type"
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
      "functions",
      "rest-parameters",
      "spread",
      "tuples"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "// Exact positional rest parameters via tuple:\nfunction configureServer(...args: [host: string, port: number, isSsl?: boolean]) {\n  const [host, port, isSsl = false] = args;\n}\n\nconfigureServer('localhost', 8080); // OK\n// configureServer('localhost'); // Error: Expected at least 2 arguments"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "What is the difference between function declarations, function expressions, and arrow functions in TypeScript?: How does this work in TypeScript functions and what are the best practices?",
    "title": "What is the difference between function declarations, function expressions, and arrow functions in T",
    "answer": "Mastering What is the difference between function declarations, function expressions, and arrow functions in TypeScript? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of What is the difference between function declarations, function expressions, and arrow functions in TypeScript? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering What is the difference between function declarations, function expressions, and arrow functions in TypeScript? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of What is the difference between function declarations, function expressions, and arrow functions in TypeScript? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in What is the difference between function declarations, function expressions, and arrow functions in TypeScript?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How to define a generic function that preserves literal argument types?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How to define a generic function that preserves literal argument types?: How does this work in TypeS",
    "answer": "Mastering How to define a generic function that preserves literal argument types? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to define a generic function that preserves literal argument types? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How to define a generic function that preserves literal argument types? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to define a generic function that preserves literal argument types? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How to define a generic function that preserves literal argument types?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How does contextual typing infer parameter types in anonymous callbacks?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How does contextual typing infer parameter types in anonymous callbacks?: How does this work in Type",
    "answer": "Mastering How does contextual typing infer parameter types in anonymous callbacks? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How does contextual typing infer parameter types in anonymous callbacks? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How does contextual typing infer parameter types in anonymous callbacks? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How does contextual typing infer parameter types in anonymous callbacks? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How does contextual typing infer parameter types in anonymous callbacks?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How to type higher-order functions (functions that accept or return other functions)?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How to type higher-order functions (functions that accept or return other functions)?: How does this",
    "answer": "Mastering How to type higher-order functions (functions that accept or return other functions)? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type higher-order functions (functions that accept or return other functions)? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How to type higher-order functions (functions that accept or return other functions)? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type higher-order functions (functions that accept or return other functions)? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How to type higher-order functions (functions that accept or return other functions)?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "What is function parameter bivariance and how does 'strictFunctionTypes' enforce contravariance?: How does this work in TypeScript functions and what are the best practices?",
    "title": "What is function parameter bivariance and how does 'strictFunctionTypes' enforce contravariance?: Ho",
    "answer": "Mastering What is function parameter bivariance and how does 'strictFunctionTypes' enforce contravariance? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of What is function parameter bivariance and how does 'strictFunctionTypes' enforce contravariance? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering What is function parameter bivariance and how does 'strictFunctionTypes' enforce contravariance? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of What is function parameter bivariance and how does 'strictFunctionTypes' enforce contravariance? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in What is function parameter bivariance and how does 'strictFunctionTypes' enforce contravariance?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How to model curried functions with recursive generic types in TypeScript?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How to model curried functions with recursive generic types in TypeScript?: How does this work in Ty",
    "answer": "Mastering How to model curried functions with recursive generic types in TypeScript? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to model curried functions with recursive generic types in TypeScript? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How to model curried functions with recursive generic types in TypeScript? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to model curried functions with recursive generic types in TypeScript? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How to model curried functions with recursive generic types in TypeScript?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How to type a function that returns different types based on a boolean argument?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How to type a function that returns different types based on a boolean argument?: How does this work",
    "answer": "Mastering How to type a function that returns different types based on a boolean argument? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type a function that returns different types based on a boolean argument? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How to type a function that returns different types based on a boolean argument? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type a function that returns different types based on a boolean argument? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How to type a function that returns different types based on a boolean argument?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "Why can't arrow functions have function overload declarations like function statements?: How does this work in TypeScript functions and what are the best practices?",
    "title": "Why can't arrow functions have function overload declarations like function statements?: How does th",
    "answer": "Mastering Why can't arrow functions have function overload declarations like function statements? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of Why can't arrow functions have function overload declarations like function statements? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering Why can't arrow functions have function overload declarations like function statements? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of Why can't arrow functions have function overload declarations like function statements? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in Why can't arrow functions have function overload declarations like function statements?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How to type asynchronous functions returning Promises and handle rejection types?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How to type asynchronous functions returning Promises and handle rejection types?: How does this wor",
    "answer": "Mastering How to type asynchronous functions returning Promises and handle rejection types? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type asynchronous functions returning Promises and handle rejection types? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How to type asynchronous functions returning Promises and handle rejection types? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type asynchronous functions returning Promises and handle rejection types? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How to type asynchronous functions returning Promises and handle rejection types?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How to type generator functions (`function*`) using the Generator<T, TReturn, TNext> interface?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How to type generator functions (`function*`) using the Generator<T, TReturn, TNext> interface?: How",
    "answer": "Mastering How to type generator functions (`function*`) using the Generator<T, TReturn, TNext> interface? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type generator functions (`function*`) using the Generator<T, TReturn, TNext> interface? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How to type generator functions (`function*`) using the Generator<T, TReturn, TNext> interface? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type generator functions (`function*`) using the Generator<T, TReturn, TNext> interface? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How to type generator functions (`function*`) using the Generator<T, TReturn, TNext> interface?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "What is the difference between `(a: string) => void` and `new (a: string) => SomeClass`?: How does this work in TypeScript functions and what are the best practices?",
    "title": "What is the difference between `(a: string) => void` and `new (a: string) => SomeClass`?: How does t",
    "answer": "Mastering What is the difference between `(a: string) => void` and `new (a: string) => SomeClass`? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of What is the difference between `(a: string) => void` and `new (a: string) => SomeClass`? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering What is the difference between `(a: string) => void` and `new (a: string) => SomeClass`? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of What is the difference between `(a: string) => void` and `new (a: string) => SomeClass`? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in What is the difference between `(a: string) => void` and `new (a: string) => SomeClass`?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How to type debounce and throttle wrapper functions without losing parameter and return types?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How to type debounce and throttle wrapper functions without losing parameter and return types?: How ",
    "answer": "Mastering How to type debounce and throttle wrapper functions without losing parameter and return types? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type debounce and throttle wrapper functions without losing parameter and return types? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How to type debounce and throttle wrapper functions without losing parameter and return types? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type debounce and throttle wrapper functions without losing parameter and return types? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How to type debounce and throttle wrapper functions without losing parameter and return types?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How to type a function that accepts any number of arguments of differing types using tuples?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How to type a function that accepts any number of arguments of differing types using tuples?: How do",
    "answer": "Mastering How to type a function that accepts any number of arguments of differing types using tuples? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type a function that accepts any number of arguments of differing types using tuples? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How to type a function that accepts any number of arguments of differing types using tuples? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type a function that accepts any number of arguments of differing types using tuples? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How to type a function that accepts any number of arguments of differing types using tuples?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "What happens when an overloaded function implementation does not handle all declared cases?: How does this work in TypeScript functions and what are the best practices?",
    "title": "What happens when an overloaded function implementation does not handle all declared cases?: How doe",
    "answer": "Mastering What happens when an overloaded function implementation does not handle all declared cases? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of What happens when an overloaded function implementation does not handle all declared cases? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering What happens when an overloaded function implementation does not handle all declared cases? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of What happens when an overloaded function implementation does not handle all declared cases? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in What happens when an overloaded function implementation does not handle all declared cases?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How to use the `Parameters<T>` and `ReturnType<T>` utility types on functions?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How to use the `Parameters<T>` and `ReturnType<T>` utility types on functions?: How does this work i",
    "answer": "Mastering How to use the `Parameters<T>` and `ReturnType<T>` utility types on functions? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to use the `Parameters<T>` and `ReturnType<T>` utility types on functions? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How to use the `Parameters<T>` and `ReturnType<T>` utility types on functions? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to use the `Parameters<T>` and `ReturnType<T>` utility types on functions? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How to use the `Parameters<T>` and `ReturnType<T>` utility types on functions?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How to type recursive functions (e.g. tree traversal or deep clone)?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How to type recursive functions (e.g. tree traversal or deep clone)?: How does this work in TypeScri",
    "answer": "Mastering How to type recursive functions (e.g. tree traversal or deep clone)? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type recursive functions (e.g. tree traversal or deep clone)? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How to type recursive functions (e.g. tree traversal or deep clone)? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type recursive functions (e.g. tree traversal or deep clone)? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How to type recursive functions (e.g. tree traversal or deep clone)?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "Why does TypeScript disallow optional parameters after rest parameters?: How does this work in TypeScript functions and what are the best practices?",
    "title": "Why does TypeScript disallow optional parameters after rest parameters?: How does this work in TypeS",
    "answer": "Mastering Why does TypeScript disallow optional parameters after rest parameters? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of Why does TypeScript disallow optional parameters after rest parameters? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering Why does TypeScript disallow optional parameters after rest parameters? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of Why does TypeScript disallow optional parameters after rest parameters? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in Why does TypeScript disallow optional parameters after rest parameters?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How to type event handler callbacks with specific custom event details in DOM / Node.js?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How to type event handler callbacks with specific custom event details in DOM / Node.js?: How does t",
    "answer": "Mastering How to type event handler callbacks with specific custom event details in DOM / Node.js? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type event handler callbacks with specific custom event details in DOM / Node.js? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How to type event handler callbacks with specific custom event details in DOM / Node.js? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type event handler callbacks with specific custom event details in DOM / Node.js? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How to type event handler callbacks with specific custom event details in DOM / Node.js?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "What is the difference between `CallableFunction` and `Function` in TypeScript?: How does this work in TypeScript functions and what are the best practices?",
    "title": "What is the difference between `CallableFunction` and `Function` in TypeScript?: How does this work ",
    "answer": "Mastering What is the difference between `CallableFunction` and `Function` in TypeScript? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of What is the difference between `CallableFunction` and `Function` in TypeScript? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering What is the difference between `CallableFunction` and `Function` in TypeScript? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of What is the difference between `CallableFunction` and `Function` in TypeScript? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in What is the difference between `CallableFunction` and `Function` in TypeScript?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How to write a strongly typed pipe() function that chains functions with matching types?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How to write a strongly typed pipe() function that chains functions with matching types?: How does t",
    "answer": "Mastering How to write a strongly typed pipe() function that chains functions with matching types? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to write a strongly typed pipe() function that chains functions with matching types? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How to write a strongly typed pipe() function that chains functions with matching types? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to write a strongly typed pipe() function that chains functions with matching types? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How to write a strongly typed pipe() function that chains functions with matching types?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How to enforce that a function argument is a constructor using construct signatures?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How to enforce that a function argument is a constructor using construct signatures?: How does this ",
    "answer": "Mastering How to enforce that a function argument is a constructor using construct signatures? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to enforce that a function argument is a constructor using construct signatures? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How to enforce that a function argument is a constructor using construct signatures? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to enforce that a function argument is a constructor using construct signatures? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How to enforce that a function argument is a constructor using construct signatures?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "Why does returning an object literal inside an arrow function sometimes cause syntax confusion with function blocks?: How does this work in TypeScript functions and what are the best practices?",
    "title": "Why does returning an object literal inside an arrow function sometimes cause syntax confusion with ",
    "answer": "Mastering Why does returning an object literal inside an arrow function sometimes cause syntax confusion with function blocks? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of Why does returning an object literal inside an arrow function sometimes cause syntax confusion with function blocks? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering Why does returning an object literal inside an arrow function sometimes cause syntax confusion with function blocks? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of Why does returning an object literal inside an arrow function sometimes cause syntax confusion with function blocks? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in Why does returning an object literal inside an arrow function sometimes cause syntax confusion with function blocks?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How to enforce exhaustive checks inside functions using the never type?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How to enforce exhaustive checks inside functions using the never type?: How does this work in TypeS",
    "answer": "Mastering How to enforce exhaustive checks inside functions using the never type? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to enforce exhaustive checks inside functions using the never type? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How to enforce exhaustive checks inside functions using the never type? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to enforce exhaustive checks inside functions using the never type? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How to enforce exhaustive checks inside functions using the never type?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "How to type memoized functions with generic cache keys?: How does this work in TypeScript functions and what are the best practices?",
    "title": "How to type memoized functions with generic cache keys?: How does this work in TypeScript functions ",
    "answer": "Mastering How to type memoized functions with generic cache keys? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type memoized functions with generic cache keys? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering How to type memoized functions with generic cache keys? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of How to type memoized functions with generic cache keys? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in How to type memoized functions with generic cache keys?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "typescript",
    "topicSlug": "functions",
    "question": "What are the common pitfalls when typing Express route handlers and async middleware?: How does this work in TypeScript functions and what are the best practices?",
    "title": "What are the common pitfalls when typing Express route handlers and async middleware?: How does this",
    "answer": "Mastering What are the common pitfalls when typing Express route handlers and async middleware? ensures type-safe parameter validation, return type inference, and clean function composition.",
    "explanation": "In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of What are the common pitfalls when typing Express route handlers and async middleware? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "interviewAnswer": "Mastering What are the common pitfalls when typing Express route handlers and async middleware? ensures type-safe parameter validation, return type inference, and clean function composition. In TypeScript, function typing dictates API usability and prevents invalid invocation patterns. Proper application of What are the common pitfalls when typing Express route handlers and async middleware? ensures that function parameters, return values, overloads, and asynchronous workflows remain type-safe without compromising flexibility.",
    "importantPoints": [
      "Enforces static guarantees for parameters and returns in What are the common pitfalls when typing Express route handlers and async middleware?",
      "Preserves type inference across higher-order functions and callbacks",
      "Prevents subtle runtime bugs caused by mismatched argument shapes",
      "Maintains clean IDE autocompletion and hover documentation"
    ],
    "commonMistakes": [
      "Over-complicating function overloads when union types would suffice",
      "Losing type context inside asynchronous callback chains"
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
      "functions",
      "signatures",
      "composition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "typescript",
        "title": "TypeScript Example",
        "code": "type Handler<T, R> = (input: T) => Promise<R>;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
