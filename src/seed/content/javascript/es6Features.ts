import { SeedQuestion } from '../types';

export const javascriptEs6FeaturesQuestions: SeedQuestion[] = [
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "How does Destructuring assignment work with default values and property renaming simultaneously?",
    "answer": "You can combine renaming and default values: const { originalProp: newName = \"defaultValue\" } = obj;. The colon : specifies the new variable name, and the equals = provides a fallback default value if originalProp is undefined.",
    "explanation": "If originalProp is null, the default value is NOT used because null is not undefined.",
    "interviewAnswer": "You can combine renaming and default values: const { originalProp: newName = \"defaultValue\" } = obj;. The colon : specifies the new variable name, and the equals = provides a fallback default value if originalProp is undefined. If originalProp is null, the default value is NOT used because null is not undefined.",
    "importantPoints": [
      "You can combine renaming and default values: const { originalProp: newName = \"defaultValue\" } = obj;. The colon : specifies the new variable name, and the equals = provides a fallback default value if originalProp is undefined.",
      "If originalProp is null, the default value is NOT used because null is not undefined."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "es6-features",
      "destructuring",
      "renaming",
      "defaults"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const { a = 10, b = 20 } = { a: null, b: undefined }; console.log(a, b);?",
    "answer": "Outputs \"null 20\". Destructuring default values are triggered ONLY when the target property is strictly undefined. Because a is explicitly null, the default value 10 is ignored and a receives null. b is undefined, so default value 20 is applied.",
    "explanation": "A classic destructuring gotcha testing understanding of undefined vs null.",
    "interviewAnswer": "Outputs \"null 20\". Destructuring default values are triggered ONLY when the target property is strictly undefined. Because a is explicitly null, the default value 10 is ignored and a receives null. b is undefined, so default value 20 is applied. A classic destructuring gotcha testing understanding of undefined vs null.",
    "importantPoints": [
      "Outputs \"null 20\". Destructuring default values are triggered ONLY when the target property is strictly undefined. Because a is explicitly null, the default value 10 is ignored and a receives null. b is undefined, so default value 20 is applied.",
      "A classic destructuring gotcha testing understanding of undefined vs null."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "es6-features",
      "destructuring",
      "null-vs-undefined",
      "gotcha"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What are Tagged Template Literals, and how are they used in libraries like styled-components or SQL sanitizers?",
    "answer": "A tagged template literal attaches a tag function to a template literal: myTag`Hello ${name}!`. The tag function receives: 1) An array of static string literals as the first argument, and 2) The evaluated expression values as subsequent arguments. Libraries use this to parse CSS strings, escape HTML to prevent XSS, or parameterize SQL queries to prevent SQL injection.",
    "explanation": "The strings array also has a .raw property containing raw escape sequences.",
    "interviewAnswer": "A tagged template literal attaches a tag function to a template literal: myTag`Hello ${name}!`. The tag function receives: 1) An array of static string literals as the first argument, and 2) The evaluated expression values as subsequent arguments. Libraries use this to parse CSS strings, escape HTML to prevent XSS, or parameterize SQL queries to prevent SQL injection. The strings array also has a .raw property containing raw escape sequences.",
    "importantPoints": [
      "A tagged template literal attaches a tag function to a template literal: myTag`Hello ${name}!`. The tag function receives: 1) An array of static string literals as the first argument, and 2) The evaluated expression values as subsequent arguments. Libraries use this to parse CSS strings, escape HTML to prevent XSS, or parameterize SQL queries to prevent SQL injection.",
      "The strings array also has a .raw property containing raw escape sequences."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "es6-features",
      "tagged-templates",
      "security",
      "styled-components"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: function tag(strings, ...values) { return strings[0] + values[0].toUpperCase() + strings[1]; } const name = \"alice\"; console.log(tag`Hello ${name}!`);?",
    "answer": "Outputs \"Hello ALICE!\". strings contains [\"Hello \", \"!\"], and values contains [\"alice\"]. The tag function modifies the expression and concatenates the pieces.",
    "explanation": "Direct demonstration of tagged template parsing.",
    "interviewAnswer": "Outputs \"Hello ALICE!\". strings contains [\"Hello \", \"!\"], and values contains [\"alice\"]. The tag function modifies the expression and concatenates the pieces. Direct demonstration of tagged template parsing.",
    "importantPoints": [
      "Outputs \"Hello ALICE!\". strings contains [\"Hello \", \"!\"], and values contains [\"alice\"]. The tag function modifies the expression and concatenates the pieces.",
      "Direct demonstration of tagged template parsing."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "tagged-templates",
      "string-interpolation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What are the key differences between Map and plain Object in JavaScript?",
    "answer": "1) Key Types: Map accepts ANY data type as key (objects, functions, primitives); Object keys can only be strings or symbols. 2) Key Ordering: Map guarantees strict insertion order iteration; Object sorts numeric keys first. 3) Size: Map has a native .size property (O(1)); Object requires Object.keys(obj).length (O(n)). 4) Performance: Map is optimized for frequent additions and removals.",
    "explanation": "Map also has no default prototype keys, making it safe from prototype collisions.",
    "interviewAnswer": "1) Key Types: Map accepts ANY data type as key (objects, functions, primitives); Object keys can only be strings or symbols. 2) Key Ordering: Map guarantees strict insertion order iteration; Object sorts numeric keys first. 3) Size: Map has a native .size property (O(1)); Object requires Object.keys(obj).length (O(n)). 4) Performance: Map is optimized for frequent additions and removals. Map also has no default prototype keys, making it safe from prototype collisions.",
    "importantPoints": [
      "1) Key Types: Map accepts ANY data type as key (objects, functions, primitives); Object keys can only be strings or symbols. 2) Key Ordering: Map guarantees strict insertion order iteration; Object sorts numeric keys first. 3) Size: Map has a native .size property (O(1)); Object requires Object.keys(obj).length (O(n)). 4) Performance: Map is optimized for frequent additions and removals.",
      "Map also has no default prototype keys, making it safe from prototype collisions."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Comparison",
    "isImportant": true,
    "tags": [
      "javascript",
      "es6-features",
      "map-vs-object",
      "collections",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the difference between WeakMap and Map in JavaScript, and what are the primary use cases for WeakMap?",
    "answer": "WeakMap holds \"weak\" references to its keys, meaning if a key object has no other references in memory, it can be garbage collected even while stored in the WeakMap. WeakMap keys MUST be objects (or non-registered symbols in ES2023), and WeakMap is NOT iterable (no size, keys(), or entries()). Primary use cases: storing private data for DOM elements or class instances, and memoization caches without memory leaks.",
    "explanation": "When a DOM element is removed from the DOM and discarded, its corresponding WeakMap entry is automatically freed.",
    "interviewAnswer": "WeakMap holds \"weak\" references to its keys, meaning if a key object has no other references in memory, it can be garbage collected even while stored in the WeakMap. WeakMap keys MUST be objects (or non-registered symbols in ES2023), and WeakMap is NOT iterable (no size, keys(), or entries()). Primary use cases: storing private data for DOM elements or class instances, and memoization caches without memory leaks. When a DOM element is removed from the DOM and discarded, its corresponding WeakMap entry is automatically freed.",
    "importantPoints": [
      "WeakMap holds \"weak\" references to its keys, meaning if a key object has no other references in memory, it can be garbage collected even while stored in the WeakMap. WeakMap keys MUST be objects (or non-registered symbols in ES2023), and WeakMap is NOT iterable (no size, keys(), or entries()). Primary use cases: storing private data for DOM elements or class instances, and memoization caches without memory leaks.",
      "When a DOM element is removed from the DOM and discarded, its corresponding WeakMap entry is automatically freed."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "javascript",
      "es6-features",
      "weakmap",
      "garbage-collection",
      "memory-leaks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the difference between Set and WeakSet in JavaScript?",
    "answer": "Set stores unique values of any type and keeps strong references to them (preventing garbage collection), supporting iteration (size, forEach, values()). WeakSet stores unique OBJECTS only, holds weak references to them (allowing objects to be garbage collected when unreferenced elsewhere), and is NOT iterable.",
    "explanation": "WeakSet is commonly used for tagging/tracking object instances (e.g. marking visited nodes in a graph).",
    "interviewAnswer": "Set stores unique values of any type and keeps strong references to them (preventing garbage collection), supporting iteration (size, forEach, values()). WeakSet stores unique OBJECTS only, holds weak references to them (allowing objects to be garbage collected when unreferenced elsewhere), and is NOT iterable. WeakSet is commonly used for tagging/tracking object instances (e.g. marking visited nodes in a graph).",
    "importantPoints": [
      "Set stores unique values of any type and keeps strong references to them (preventing garbage collection), supporting iteration (size, forEach, values()). WeakSet stores unique OBJECTS only, holds weak references to them (allowing objects to be garbage collected when unreferenced elsewhere), and is NOT iterable.",
      "WeakSet is commonly used for tagging/tracking object instances (e.g. marking visited nodes in a graph)."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Comparison",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "weakset",
      "set",
      "garbage-collection"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const set = new Set([1, 1, 2, 3, 3, 4]); console.log(set.size); console.log([...set]);?",
    "answer": "set.size outputs 4, and [...set] outputs [1, 2, 3, 4]. A Set automatically eliminates duplicate values based on SameValueZero equality comparison.",
    "explanation": "Standard technique for creating a unique set of values.",
    "interviewAnswer": "set.size outputs 4, and [...set] outputs [1, 2, 3, 4]. A Set automatically eliminates duplicate values based on SameValueZero equality comparison. Standard technique for creating a unique set of values.",
    "importantPoints": [
      "set.size outputs 4, and [...set] outputs [1, 2, 3, 4]. A Set automatically eliminates duplicate values based on SameValueZero equality comparison.",
      "Standard technique for creating a unique set of values."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "set",
      "deduplication",
      "size"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const map = new Map(); const key1 = {}; const key2 = {}; map.set(key1, 100); map.set(key2, 200); console.log(map.get(key1), map.get({}));?",
    "answer": "Outputs 100, then undefined. key1 and key2 are distinct object references, so map stores them separately. map.get({}) evaluates a brand new empty object reference in memory, which does not match key1 or key2, returning undefined.",
    "explanation": "Map uses SameValueZero comparison on key references.",
    "interviewAnswer": "Outputs 100, then undefined. key1 and key2 are distinct object references, so map stores them separately. map.get({}) evaluates a brand new empty object reference in memory, which does not match key1 or key2, returning undefined. Map uses SameValueZero comparison on key references.",
    "importantPoints": [
      "Outputs 100, then undefined. key1 and key2 are distinct object references, so map stores them separately. map.get({}) evaluates a brand new empty object reference in memory, which does not match key1 or key2, returning undefined.",
      "Map uses SameValueZero comparison on key references."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "map",
      "object-keys",
      "reference-equality"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "How does Optional Chaining (?.) short-circuit evaluation when accessing deeply nested properties?",
    "answer": "If the operand before ?. is null or undefined, the expression immediately short-circuits and evaluates to undefined without evaluating any subsequent properties or function calls: user?.address?.city or user?.getProfile?.(). It prevents \"TypeError: Cannot read properties of undefined\".",
    "explanation": "Short-circuiting stops the entire chained expression immediately.",
    "interviewAnswer": "If the operand before ?. is null or undefined, the expression immediately short-circuits and evaluates to undefined without evaluating any subsequent properties or function calls: user?.address?.city or user?.getProfile?.(). It prevents \"TypeError: Cannot read properties of undefined\". Short-circuiting stops the entire chained expression immediately.",
    "importantPoints": [
      "If the operand before ?. is null or undefined, the expression immediately short-circuits and evaluates to undefined without evaluating any subsequent properties or function calls: user?.address?.city or user?.getProfile?.(). It prevents \"TypeError: Cannot read properties of undefined\".",
      "Short-circuiting stops the entire chained expression immediately."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "es6-features",
      "optional-chaining",
      "short-circuiting"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const obj = { fn: null }; console.log(obj.fn?.()); console.log(obj.missing?.());?",
    "answer": "Both output undefined without throwing errors. In obj.fn?.(), obj.fn is null, so optional invocation ?.() short-circuits to undefined without attempting to call null. In obj.missing?.(), missing is undefined, so it short-circuits to undefined.",
    "explanation": "Prevents \"is not a function\" crashes for optional callbacks.",
    "interviewAnswer": "Both output undefined without throwing errors. In obj.fn?.(), obj.fn is null, so optional invocation ?.() short-circuits to undefined without attempting to call null. In obj.missing?.(), missing is undefined, so it short-circuits to undefined. Prevents \"is not a function\" crashes for optional callbacks.",
    "importantPoints": [
      "Both output undefined without throwing errors. In obj.fn?.(), obj.fn is null, so optional invocation ?.() short-circuits to undefined without attempting to call null. In obj.missing?.(), missing is undefined, so it short-circuits to undefined.",
      "Prevents \"is not a function\" crashes for optional callbacks."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "optional-chaining",
      "function-calls"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const [a, , b] = [1, 2, 3, 4]; console.log(a, b);?",
    "answer": "Outputs \"1 3\". An empty comma in array destructuring skips that specific index position in the array.",
    "explanation": "Useful for selecting specific tuple return elements without allocating unused variables.",
    "interviewAnswer": "Outputs \"1 3\". An empty comma in array destructuring skips that specific index position in the array. Useful for selecting specific tuple return elements without allocating unused variables.",
    "importantPoints": [
      "Outputs \"1 3\". An empty comma in array destructuring skips that specific index position in the array.",
      "Useful for selecting specific tuple return elements without allocating unused variables."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "destructuring",
      "array-skipping"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "How can you swap two variables in a single line using array destructuring without a temporary third variable?",
    "answer": "[a, b] = [b, a]; creates a temporary array on the right-hand side and destructures its elements into a and b in a single expression.",
    "explanation": "Clean, idiomatic ES6 replacement for temp variable swapping.",
    "interviewAnswer": "[a, b] = [b, a]; creates a temporary array on the right-hand side and destructures its elements into a and b in a single expression. Clean, idiomatic ES6 replacement for temp variable swapping.",
    "importantPoints": [
      "[a, b] = [b, a]; creates a temporary array on the right-hand side and destructures its elements into a and b in a single expression.",
      "Clean, idiomatic ES6 replacement for temp variable swapping."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "destructuring",
      "variable-swapping"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const { a, ...rest } = { a: 1, b: 2, c: 3 }; console.log(rest);?",
    "answer": "Outputs { b: 2, c: 3 }. Rest property syntax (...rest) collects all remaining own enumerable properties into a newly allocated object, excluding property a.",
    "explanation": "Commonly used in React to omit specific props before passing rest to HTML elements.",
    "interviewAnswer": "Outputs { b: 2, c: 3 }. Rest property syntax (...rest) collects all remaining own enumerable properties into a newly allocated object, excluding property a. Commonly used in React to omit specific props before passing rest to HTML elements.",
    "importantPoints": [
      "Outputs { b: 2, c: 3 }. Rest property syntax (...rest) collects all remaining own enumerable properties into a newly allocated object, excluding property a.",
      "Commonly used in React to omit specific props before passing rest to HTML elements."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "rest-properties",
      "destructuring",
      "objects"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const [first, ...rest] = [10]; console.log(first, rest);?",
    "answer": "Outputs 10, then []. first receives the single element 10; rest collects any remaining elements, and since there are none, it evaluates to an empty array [].",
    "explanation": "Array rest destructuring always produces an array, even if empty.",
    "interviewAnswer": "Outputs 10, then []. first receives the single element 10; rest collects any remaining elements, and since there are none, it evaluates to an empty array []. Array rest destructuring always produces an array, even if empty.",
    "importantPoints": [
      "Outputs 10, then []. first receives the single element 10; rest collects any remaining elements, and since there are none, it evaluates to an empty array [].",
      "Array rest destructuring always produces an array, even if empty."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "rest-elements",
      "destructuring",
      "arrays"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the difference between for...of on a Map directly versus Map.keys() and Map.values()?",
    "answer": "1) for (const [key, val] of map): iterates over [key, value] entry pairs (equivalent to map.entries()). 2) for (const key of map.keys()): iterates exclusively over keys. 3) for (const val of map.values()): iterates exclusively over values.",
    "explanation": "Map is an iterable that yields [key, value] tuples by default.",
    "interviewAnswer": "1) for (const [key, val] of map): iterates over [key, value] entry pairs (equivalent to map.entries()). 2) for (const key of map.keys()): iterates exclusively over keys. 3) for (const val of map.values()): iterates exclusively over values. Map is an iterable that yields [key, value] tuples by default.",
    "importantPoints": [
      "1) for (const [key, val] of map): iterates over [key, value] entry pairs (equivalent to map.entries()). 2) for (const key of map.keys()): iterates exclusively over keys. 3) for (const val of map.values()): iterates exclusively over values.",
      "Map is an iterable that yields [key, value] tuples by default."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "map",
      "iteration",
      "for-of"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const key = \"prop\"; const obj = { [key + \"_test\"]: 123 }; console.log(obj.prop_test);?",
    "answer": "Outputs 123. Computed Property Names (ES6) allow using square brackets inside object literals to evaluate any JavaScript expression dynamically as a property key.",
    "explanation": "Eliminated the need to create the object first before assigning via obj[computedKey] = value.",
    "interviewAnswer": "Outputs 123. Computed Property Names (ES6) allow using square brackets inside object literals to evaluate any JavaScript expression dynamically as a property key. Eliminated the need to create the object first before assigning via obj[computedKey] = value.",
    "importantPoints": [
      "Outputs 123. Computed Property Names (ES6) allow using square brackets inside object literals to evaluate any JavaScript expression dynamically as a property key.",
      "Eliminated the need to create the object first before assigning via obj[computedKey] = value."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "computed-properties",
      "object-literals"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "How does Method Shorthand definition syntax in object literals differ from traditional function property assignments regarding super?",
    "answer": "Method shorthand ({ greet() {} }) assigns an internal [[HomeObject]] property pointing to the containing object, enabling the use of the super keyword (e.g. super.greet()). Traditional function expressions ({ greet: function() {} }) do NOT bind a [[HomeObject]] and cannot use super.",
    "explanation": "Method shorthand is also slightly more concise and readable.",
    "interviewAnswer": "Method shorthand ({ greet() {} }) assigns an internal [[HomeObject]] property pointing to the containing object, enabling the use of the super keyword (e.g. super.greet()). Traditional function expressions ({ greet: function() {} }) do NOT bind a [[HomeObject]] and cannot use super. Method shorthand is also slightly more concise and readable.",
    "importantPoints": [
      "Method shorthand ({ greet() {} }) assigns an internal [[HomeObject]] property pointing to the containing object, enabling the use of the super keyword (e.g. super.greet()). Traditional function expressions ({ greet: function() {} }) do NOT bind a [[HomeObject]] and cannot use super.",
      "Method shorthand is also slightly more concise and readable."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "method-shorthand",
      "super",
      "home-object"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const obj = { a: 1, b: 2 }; const { a, b, c = a + b } = obj; console.log(c);?",
    "answer": "Outputs 3. Destructuring evaluations happen sequentially; default values can reference earlier destructured identifiers.",
    "explanation": "Demonstrates expressive power of destructuring default expressions.",
    "interviewAnswer": "Outputs 3. Destructuring evaluations happen sequentially; default values can reference earlier destructured identifiers. Demonstrates expressive power of destructuring default expressions.",
    "importantPoints": [
      "Outputs 3. Destructuring evaluations happen sequentially; default values can reference earlier destructured identifiers.",
      "Demonstrates expressive power of destructuring default expressions."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "destructuring",
      "defaults",
      "expressions"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What happens if you attempt to destructure from null or undefined: const { a } = null;?",
    "answer": "Throws a TypeError: \"Cannot destructure property 'a' of 'null' as it is null\" (or undefined). You cannot destructure properties from null or undefined because they cannot be converted to objects.",
    "explanation": "To defend against this, provide an empty object fallback: const { a } = maybeNullObj || {};.",
    "interviewAnswer": "Throws a TypeError: \"Cannot destructure property 'a' of 'null' as it is null\" (or undefined). You cannot destructure properties from null or undefined because they cannot be converted to objects. To defend against this, provide an empty object fallback: const { a } = maybeNullObj || {};.",
    "importantPoints": [
      "Throws a TypeError: \"Cannot destructure property 'a' of 'null' as it is null\" (or undefined). You cannot destructure properties from null or undefined because they cannot be converted to objects.",
      "To defend against this, provide an empty object fallback: const { a } = maybeNullObj || {};."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "destructuring",
      "typeerror",
      "defensive-programming"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const str = \"hello\"; console.log([...str]); and console.log(Array.from(str));?",
    "answer": "Both output [\"h\", \"e\", \"l\", \"l\", \"o\"]. String primitives implement the iterable protocol (Symbol.iterator), enabling them to be spread into arrays or converted with Array.from.",
    "explanation": "Unlike str.split(\"\"), the spread operator correctly handles 32-bit Unicode surrogate pairs (emojis).",
    "interviewAnswer": "Both output [\"h\", \"e\", \"l\", \"l\", \"o\"]. String primitives implement the iterable protocol (Symbol.iterator), enabling them to be spread into arrays or converted with Array.from. Unlike str.split(\"\"), the spread operator correctly handles 32-bit Unicode surrogate pairs (emojis).",
    "importantPoints": [
      "Both output [\"h\", \"e\", \"l\", \"l\", \"o\"]. String primitives implement the iterable protocol (Symbol.iterator), enabling them to be spread into arrays or converted with Array.from.",
      "Unlike str.split(\"\"), the spread operator correctly handles 32-bit Unicode surrogate pairs (emojis)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "strings",
      "spread-operator",
      "unicode"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const emojiStr = \"👍\"; console.log(emojiStr.split(\"\").length); console.log([...emojiStr].length);?",
    "answer": "emojiStr.split(\"\").length outputs 2 (splits into two 16-bit UTF-16 surrogate halves). [...emojiStr].length outputs 1 (spread uses Unicode code point iteration, correctly recognizing the single emoji character).",
    "explanation": "Crucial for internationalization and accurate string length calculations.",
    "interviewAnswer": "emojiStr.split(\"\").length outputs 2 (splits into two 16-bit UTF-16 surrogate halves). [...emojiStr].length outputs 1 (spread uses Unicode code point iteration, correctly recognizing the single emoji character). Crucial for internationalization and accurate string length calculations.",
    "importantPoints": [
      "emojiStr.split(\"\").length outputs 2 (splits into two 16-bit UTF-16 surrogate halves). [...emojiStr].length outputs 1 (spread uses Unicode code point iteration, correctly recognizing the single emoji character).",
      "Crucial for internationalization and accurate string length calculations."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "es6-features",
      "unicode",
      "emojis",
      "surrogate-pairs",
      "spread"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What are the Set operations introduced in modern ECMAScript (ES2024)?",
    "answer": "ES2024 introduces native Set composition methods: 1) setA.union(setB): elements in either set. 2) setA.intersection(setB): elements in both sets. 3) setA.difference(setB): elements in A but not B. 4) setA.symmetricDifference(setB): elements in A or B, but not both. 5) setA.isSubsetOf(setB) and setA.isSupersetOf(setB).",
    "explanation": "Eliminates custom loop or filter boilerplate for mathematical set operations.",
    "interviewAnswer": "ES2024 introduces native Set composition methods: 1) setA.union(setB): elements in either set. 2) setA.intersection(setB): elements in both sets. 3) setA.difference(setB): elements in A but not B. 4) setA.symmetricDifference(setB): elements in A or B, but not both. 5) setA.isSubsetOf(setB) and setA.isSupersetOf(setB). Eliminates custom loop or filter boilerplate for mathematical set operations.",
    "importantPoints": [
      "ES2024 introduces native Set composition methods: 1) setA.union(setB): elements in either set. 2) setA.intersection(setB): elements in both sets. 3) setA.difference(setB): elements in A but not B. 4) setA.symmetricDifference(setB): elements in A or B, but not both. 5) setA.isSubsetOf(setB) and setA.isSupersetOf(setB).",
      "Eliminates custom loop or filter boilerplate for mathematical set operations."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "set-methods",
      "es2024",
      "math-sets"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "How do you perform an in-place array destructuring with rest to separate the head and tail of an array?",
    "answer": "const [head, ...tail] = [1, 2, 3, 4]; assigns head = 1 and tail = [2, 3, 4].",
    "explanation": "Functional pattern common in Lisp and Haskell recursion.",
    "interviewAnswer": "const [head, ...tail] = [1, 2, 3, 4]; assigns head = 1 and tail = [2, 3, 4]. Functional pattern common in Lisp and Haskell recursion.",
    "importantPoints": [
      "const [head, ...tail] = [1, 2, 3, 4]; assigns head = 1 and tail = [2, 3, 4].",
      "Functional pattern common in Lisp and Haskell recursion."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "destructuring",
      "head-tail"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const obj = { x: 1, y: 2 }; const { x: a, y: b } = obj; console.log(typeof x); console.log(a);?",
    "answer": "typeof x outputs \"undefined\" (x was not defined as a variable in scope; it was only the source key). a outputs 1 (the renamed variable created in scope).",
    "explanation": "A common point of confusion when reading destructuring renaming syntax.",
    "interviewAnswer": "typeof x outputs \"undefined\" (x was not defined as a variable in scope; it was only the source key). a outputs 1 (the renamed variable created in scope). A common point of confusion when reading destructuring renaming syntax.",
    "importantPoints": [
      "typeof x outputs \"undefined\" (x was not defined as a variable in scope; it was only the source key). a outputs 1 (the renamed variable created in scope).",
      "A common point of confusion when reading destructuring renaming syntax."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "destructuring",
      "renaming"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the difference between Named Exports and Default Exports in ES6 Modules?",
    "answer": "Named exports (export const a = 1; export { b };) allow exporting multiple values per file; importers must use the exact matching names inside curly braces (import { a, b } from \"./mod\"). Default export (export default fn;) allows one primary value per module, which the importer can name arbitrarily without braces (import myCustomName from \"./mod\").",
    "explanation": "Named exports provide better tooling support, refactoring auto-renaming, and tree-shaking.",
    "interviewAnswer": "Named exports (export const a = 1; export { b };) allow exporting multiple values per file; importers must use the exact matching names inside curly braces (import { a, b } from \"./mod\"). Default export (export default fn;) allows one primary value per module, which the importer can name arbitrarily without braces (import myCustomName from \"./mod\"). Named exports provide better tooling support, refactoring auto-renaming, and tree-shaking.",
    "importantPoints": [
      "Named exports (export const a = 1; export { b };) allow exporting multiple values per file; importers must use the exact matching names inside curly braces (import { a, b } from \"./mod\"). Default export (export default fn;) allows one primary value per module, which the importer can name arbitrarily without braces (import myCustomName from \"./mod\").",
      "Named exports provide better tooling support, refactoring auto-renaming, and tree-shaking."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "modules",
      "named-exports",
      "default-exports"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is dynamic import() in JavaScript, and what data structure does it return?",
    "answer": "import(\"module-path.js\") dynamically loads an ES module on demand at runtime. It returns a Promise that resolves to the module namespace object containing all its exports (e.g. const module = await import(\"./math.js\"); module.add(1, 2);).",
    "explanation": "Enables code-splitting and lazy-loading in modern bundlers (Webpack, Vite, Rollup).",
    "interviewAnswer": "import(\"module-path.js\") dynamically loads an ES module on demand at runtime. It returns a Promise that resolves to the module namespace object containing all its exports (e.g. const module = await import(\"./math.js\"); module.add(1, 2);). Enables code-splitting and lazy-loading in modern bundlers (Webpack, Vite, Rollup).",
    "importantPoints": [
      "import(\"module-path.js\") dynamically loads an ES module on demand at runtime. It returns a Promise that resolves to the module namespace object containing all its exports (e.g. const module = await import(\"./math.js\"); module.add(1, 2);).",
      "Enables code-splitting and lazy-loading in modern bundlers (Webpack, Vite, Rollup)."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "es6-features",
      "dynamic-import",
      "code-splitting",
      "promises"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const map = new Map(); map.set(\"a\", 1).set(\"b\", 2).set(\"c\", 3); console.log([...map.keys()]); console.log([...map.values()]);?",
    "answer": "map.keys() gives [\"a\", \"b\", \"c\"], and map.values() gives [1, 2, 3]. Map methods (set) return the Map instance itself, enabling method chaining.",
    "explanation": "Fluent API chaining pattern on Map instances.",
    "interviewAnswer": "map.keys() gives [\"a\", \"b\", \"c\"], and map.values() gives [1, 2, 3]. Map methods (set) return the Map instance itself, enabling method chaining. Fluent API chaining pattern on Map instances.",
    "importantPoints": [
      "map.keys() gives [\"a\", \"b\", \"c\"], and map.values() gives [1, 2, 3]. Map methods (set) return the Map instance itself, enabling method chaining.",
      "Fluent API chaining pattern on Map instances."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "map",
      "method-chaining",
      "iterators"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the purpose of the String.prototype.raw tag in template literals?",
    "answer": "String.raw`Hello\nWorld` treats backslashes as raw literal characters without interpreting escape sequences, producing \"Hello\\nWorld\" (6 characters + backslash + n) rather than a newline character.",
    "explanation": "Useful for regular expression strings and Windows file system paths.",
    "interviewAnswer": "String.raw`Hello\nWorld` treats backslashes as raw literal characters without interpreting escape sequences, producing \"Hello\\nWorld\" (6 characters + backslash + n) rather than a newline character. Useful for regular expression strings and Windows file system paths.",
    "importantPoints": [
      "String.raw`Hello\nWorld` treats backslashes as raw literal characters without interpreting escape sequences, producing \"Hello\\nWorld\" (6 characters + backslash + n) rather than a newline character.",
      "Useful for regular expression strings and Windows file system paths."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "string-raw",
      "template-literals",
      "escaping"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const user = { profile: { name: \"Alice\" } }; const { profile: { name, age = 30 } } = user; console.log(name, age); console.log(typeof profile);?",
    "answer": "name outputs \"Alice\", age outputs 30, and typeof profile outputs \"undefined\". In nested destructuring, only the leaf nodes (name, age) are created as variables in scope; intermediate objects like profile are not declared as variables.",
    "explanation": "Nested destructuring extracts only the specified target variables.",
    "interviewAnswer": "name outputs \"Alice\", age outputs 30, and typeof profile outputs \"undefined\". In nested destructuring, only the leaf nodes (name, age) are created as variables in scope; intermediate objects like profile are not declared as variables. Nested destructuring extracts only the specified target variables.",
    "importantPoints": [
      "name outputs \"Alice\", age outputs 30, and typeof profile outputs \"undefined\". In nested destructuring, only the leaf nodes (name, age) are created as variables in scope; intermediate objects like profile are not declared as variables.",
      "Nested destructuring extracts only the specified target variables."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "nested-destructuring",
      "scoping"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const set = new Set(); set.add({}); set.add({}); console.log(set.size);?",
    "answer": "Outputs 2. Each object literal {} creates a distinct object instance in memory with a unique reference. Set compares items by reference, so both empty objects are retained.",
    "explanation": "Adding identical object literals to a Set does not deduplicate them.",
    "interviewAnswer": "Outputs 2. Each object literal {} creates a distinct object instance in memory with a unique reference. Set compares items by reference, so both empty objects are retained. Adding identical object literals to a Set does not deduplicate them.",
    "importantPoints": [
      "Outputs 2. Each object literal {} creates a distinct object instance in memory with a unique reference. Set compares items by reference, so both empty objects are retained.",
      "Adding identical object literals to a Set does not deduplicate them."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "set",
      "reference-equality",
      "objects"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "How does Object.freeze() interact with ES6 Map and Set collections?",
    "answer": "Object.freeze(map) freezes the Map object wrapper itself (preventing adding new properties to the map instance), but DOES NOT freeze the internal Map collection entries. map.set(\"key\", \"val\") and map.delete() continue to function normally.",
    "explanation": "Object.freeze only freezes own property descriptors, not internal collection backing stores.",
    "interviewAnswer": "Object.freeze(map) freezes the Map object wrapper itself (preventing adding new properties to the map instance), but DOES NOT freeze the internal Map collection entries. map.set(\"key\", \"val\") and map.delete() continue to function normally. Object.freeze only freezes own property descriptors, not internal collection backing stores.",
    "importantPoints": [
      "Object.freeze(map) freezes the Map object wrapper itself (preventing adding new properties to the map instance), but DOES NOT freeze the internal Map collection entries. map.set(\"key\", \"val\") and map.delete() continue to function normally.",
      "Object.freeze only freezes own property descriptors, not internal collection backing stores."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "object-freeze",
      "map",
      "immutability-limits"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const a = [1, 2]; const b = [3, 4]; const c = [...a, ...b]; a[0] = 99; console.log(c);?",
    "answer": "Outputs [1, 2, 3, 4]. The spread operator copied primitive numbers by value into a new array. Mutating the original array a has no effect on array c.",
    "explanation": "Demonstrates value copying for primitive array elements.",
    "interviewAnswer": "Outputs [1, 2, 3, 4]. The spread operator copied primitive numbers by value into a new array. Mutating the original array a has no effect on array c. Demonstrates value copying for primitive array elements.",
    "importantPoints": [
      "Outputs [1, 2, 3, 4]. The spread operator copied primitive numbers by value into a new array. Mutating the original array a has no effect on array c.",
      "Demonstrates value copying for primitive array elements."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "spread-operator",
      "arrays",
      "immutability"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const a = [{ x: 1 }]; const b = [...a]; b[0].x = 99; console.log(a[0].x);?",
    "answer": "Outputs 99! The spread operator performs a SHALLOW copy; the nested object reference is copied, so both a[0] and b[0] point to the exact same object in memory.",
    "explanation": "Spreading arrays of objects does not protect nested objects from mutation.",
    "interviewAnswer": "Outputs 99! The spread operator performs a SHALLOW copy; the nested object reference is copied, so both a[0] and b[0] point to the exact same object in memory. Spreading arrays of objects does not protect nested objects from mutation.",
    "importantPoints": [
      "Outputs 99! The spread operator performs a SHALLOW copy; the nested object reference is copied, so both a[0] and b[0] point to the exact same object in memory.",
      "Spreading arrays of objects does not protect nested objects from mutation."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "spread-operator",
      "shallow-copy",
      "objects"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the difference between Array.prototype.includes() and Set.prototype.has() in time complexity?",
    "answer": "arr.includes(item) performs an O(n) linear scan through the array elements. set.has(item) uses an internal hash table lookup to check membership in O(1) constant time.",
    "explanation": "For large datasets (10,000+ items), converting to a Set yields massive performance gains.",
    "interviewAnswer": "arr.includes(item) performs an O(n) linear scan through the array elements. set.has(item) uses an internal hash table lookup to check membership in O(1) constant time. For large datasets (10,000+ items), converting to a Set yields massive performance gains.",
    "importantPoints": [
      "arr.includes(item) performs an O(n) linear scan through the array elements. set.has(item) uses an internal hash table lookup to check membership in O(1) constant time.",
      "For large datasets (10,000+ items), converting to a Set yields massive performance gains."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "javascript",
      "es6-features",
      "set-has",
      "array-includes",
      "time-complexity"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const obj = { [Symbol(\"id\")]: 1, name: \"Alice\" }; console.log(JSON.stringify(obj));?",
    "answer": "Outputs '{\"name\":\"Alice\"}'. JSON.stringify completely ignores Symbol-keyed properties and non-enumerable properties.",
    "explanation": "Symbols cannot be serialized directly into JSON.",
    "interviewAnswer": "Outputs '{\"name\":\"Alice\"}'. JSON.stringify completely ignores Symbol-keyed properties and non-enumerable properties. Symbols cannot be serialized directly into JSON.",
    "importantPoints": [
      "Outputs '{\"name\":\"Alice\"}'. JSON.stringify completely ignores Symbol-keyed properties and non-enumerable properties.",
      "Symbols cannot be serialized directly into JSON."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "symbols",
      "json-stringify",
      "serialization"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const { length } = \"hello\"; console.log(length);?",
    "answer": "Outputs 5. Strings are autoboxed to String wrapper objects during property access; destructuring extracts the length property directly.",
    "explanation": "Any object or autoboxable primitive with properties can be destructured.",
    "interviewAnswer": "Outputs 5. Strings are autoboxed to String wrapper objects during property access; destructuring extracts the length property directly. Any object or autoboxable primitive with properties can be destructured.",
    "importantPoints": [
      "Outputs 5. Strings are autoboxed to String wrapper objects during property access; destructuring extracts the length property directly.",
      "Any object or autoboxable primitive with properties can be destructured."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "destructuring",
      "strings",
      "autoboxing"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const fn = ({ x = 1, y = 2 } = {}) => x + y; console.log(fn()); console.log(fn({ x: 5 }));?",
    "answer": "fn() outputs 3 (the outer default = {} prevents TypeError when no arguments are passed, and inner defaults x = 1, y = 2 apply; 1 + 2 = 3). fn({ x: 5 }) outputs 7 (x is 5, y takes default 2; 5 + 2 = 7).",
    "explanation": "The double-default destructuring pattern for optional configuration options.",
    "interviewAnswer": "fn() outputs 3 (the outer default = {} prevents TypeError when no arguments are passed, and inner defaults x = 1, y = 2 apply; 1 + 2 = 3). fn({ x: 5 }) outputs 7 (x is 5, y takes default 2; 5 + 2 = 7). The double-default destructuring pattern for optional configuration options.",
    "importantPoints": [
      "fn() outputs 3 (the outer default = {} prevents TypeError when no arguments are passed, and inner defaults x = 1, y = 2 apply; 1 + 2 = 3). fn({ x: 5 }) outputs 7 (x is 5, y takes default 2; 5 + 2 = 7).",
      "The double-default destructuring pattern for optional configuration options."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "destructuring",
      "default-parameters",
      "patterns"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the difference between Promise.withResolvers() in ES2024 and traditional new Promise((resolve, reject) => {})?",
    "answer": "Promise.withResolvers() returns an object containing { promise, resolve, reject }. It exposes the resolve and reject functions directly in outer scope without nesting code inside the Promise constructor callback or manually assigning them to external let variables.",
    "explanation": "Greatly simplifies deferred promise patterns and event stream controllers.",
    "interviewAnswer": "Promise.withResolvers() returns an object containing { promise, resolve, reject }. It exposes the resolve and reject functions directly in outer scope without nesting code inside the Promise constructor callback or manually assigning them to external let variables. Greatly simplifies deferred promise patterns and event stream controllers.",
    "importantPoints": [
      "Promise.withResolvers() returns an object containing { promise, resolve, reject }. It exposes the resolve and reject functions directly in outer scope without nesting code inside the Promise constructor callback or manually assigning them to external let variables.",
      "Greatly simplifies deferred promise patterns and event stream controllers."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "promise-withresolvers",
      "es2024",
      "promises"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const map = new Map(); map.set(\"1\", \"string\"); map.set(1, \"number\"); console.log(map.get(1)); console.log(map.get(\"1\")); console.log(map.size);?",
    "answer": "map.get(1) outputs \"number\", map.get(\"1\") outputs \"string\", and map.size is 2. Unlike plain objects which coerce all keys to strings, Map treats number 1 and string \"1\" as completely distinct keys.",
    "explanation": "Key type fidelity is a major feature of Map.",
    "interviewAnswer": "map.get(1) outputs \"number\", map.get(\"1\") outputs \"string\", and map.size is 2. Unlike plain objects which coerce all keys to strings, Map treats number 1 and string \"1\" as completely distinct keys. Key type fidelity is a major feature of Map.",
    "importantPoints": [
      "map.get(1) outputs \"number\", map.get(\"1\") outputs \"string\", and map.size is 2. Unlike plain objects which coerce all keys to strings, Map treats number 1 and string \"1\" as completely distinct keys.",
      "Key type fidelity is a major feature of Map."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "map",
      "key-types",
      "type-preservation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const entries = [[\"a\", 1], [\"b\", 2]]; const map = new Map(entries); console.log(map.get(\"a\"));?",
    "answer": "Outputs 1. The Map constructor accepts any iterable yielding [key, value] pairs (such as a 2D array or another Map).",
    "explanation": "Standard way to initialize a Map from array data.",
    "interviewAnswer": "Outputs 1. The Map constructor accepts any iterable yielding [key, value] pairs (such as a 2D array or another Map). Standard way to initialize a Map from array data.",
    "importantPoints": [
      "Outputs 1. The Map constructor accepts any iterable yielding [key, value] pairs (such as a 2D array or another Map).",
      "Standard way to initialize a Map from array data."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "map",
      "initialization"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const a = { x: 1 }; const b = { x: 2 }; const obj = {}; obj[a] = \"first\"; obj[b] = \"second\"; console.log(obj[a]);?",
    "answer": "Outputs \"second\"! Plain object keys must be strings. When a is used as a key, it is coerced via toString() to \"[object Object]\". When b is used as a key, it is also coerced to \"[object Object]\", overwriting the previous value.",
    "explanation": "Classic interview trap highlighting why Map should be used when keys are objects.",
    "interviewAnswer": "Outputs \"second\"! Plain object keys must be strings. When a is used as a key, it is coerced via toString() to \"[object Object]\". When b is used as a key, it is also coerced to \"[object Object]\", overwriting the previous value. Classic interview trap highlighting why Map should be used when keys are objects.",
    "importantPoints": [
      "Outputs \"second\"! Plain object keys must be strings. When a is used as a key, it is coerced via toString() to \"[object Object]\". When b is used as a key, it is also coerced to \"[object Object]\", overwriting the previous value.",
      "Classic interview trap highlighting why Map should be used when keys are objects."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "es6-features",
      "object-coercion",
      "object-keys",
      "map-vs-object"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const re = /abc/d; const match = re.exec(\"123abc456\"); console.log(match.indices[0]);?",
    "answer": "Outputs [3, 6]. The /d RegExp flag (RegExp Match Indices in ES2022) populates a .indices array containing the exact start and end character positions of each match.",
    "explanation": "Useful for code editors and syntax highlighters finding exact substring ranges.",
    "interviewAnswer": "Outputs [3, 6]. The /d RegExp flag (RegExp Match Indices in ES2022) populates a .indices array containing the exact start and end character positions of each match. Useful for code editors and syntax highlighters finding exact substring ranges.",
    "importantPoints": [
      "Outputs [3, 6]. The /d RegExp flag (RegExp Match Indices in ES2022) populates a .indices array containing the exact start and end character positions of each match.",
      "Useful for code editors and syntax highlighters finding exact substring ranges."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "regexp",
      "match-indices",
      "es2022"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const x = undefined ?? 42; const y = null ?? 42; const z = false ?? 42; console.log(x, y, z);?",
    "answer": "Outputs \"42 42 false\". ?? only falls back if the left operand is null or undefined; false is preserved as-is.",
    "explanation": "Demonstrates proper fallback semantics of nullish coalescing.",
    "interviewAnswer": "Outputs \"42 42 false\". ?? only falls back if the left operand is null or undefined; false is preserved as-is. Demonstrates proper fallback semantics of nullish coalescing.",
    "importantPoints": [
      "Outputs \"42 42 false\". ?? only falls back if the left operand is null or undefined; false is preserved as-is.",
      "Demonstrates proper fallback semantics of nullish coalescing."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "nullish-coalescing",
      "boolean"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "es6-features",
    "question": "What is the output of: const arr = [10, 20, 30]; console.log(arr.findLast(x => x > 15)); console.log(arr.findLastIndex(x => x > 15));?",
    "answer": "1) findLast outputs 30 (the last element that matches). 2) findLastIndex outputs 2 (the index of the last element that matches).",
    "explanation": "ES2023 methods that search from the end of an array without reversing the array first.",
    "interviewAnswer": "1) findLast outputs 30 (the last element that matches). 2) findLastIndex outputs 2 (the index of the last element that matches). ES2023 methods that search from the end of an array without reversing the array first.",
    "importantPoints": [
      "1) findLast outputs 30 (the last element that matches). 2) findLastIndex outputs 2 (the index of the last element that matches).",
      "ES2023 methods that search from the end of an array without reversing the array first."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "es6-features",
      "findlast",
      "findlastindex",
      "es2023"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
