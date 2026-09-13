import { SeedQuestion } from '../types';

export const javascriptFundamentalsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What are the primitive data types in JavaScript, and how do they differ fundamentally from objects in memory allocation?",
    "answer": "JavaScript has 7 primitive types: string, number, bigint, boolean, undefined, symbol, and null. Primitives are immutable and stored directly by value (typically on the call stack for simple primitives), while objects are mutable reference types stored on the heap with variable references holding pointers to the memory location.",
    "explanation": "When you copy a primitive (let b = a), an independent copy is created. When you copy an object (let obj2 = obj1), only the memory reference pointer is copied, so mutations to obj2 affect obj1.",
    "interviewAnswer": "JavaScript has 7 primitive types: string, number, bigint, boolean, undefined, symbol, and null. Primitives are immutable and stored directly by value (typically on the call stack for simple primitives), while objects are mutable reference types stored on the heap with variable references holding pointers to the memory location. When you copy a primitive (let b = a), an independent copy is created. When you copy an object (let obj2 = obj1), only the memory reference pointer is copied, so mutations to obj2 affect obj1.",
    "importantPoints": [
      "JavaScript has 7 primitive types: string, number, bigint, boolean, undefined, symbol, and null. Primitives are immutable and stored directly by value (typically on the call stack for simple primitives), while objects are mutable reference types stored on the heap with variable references holding pointers to the memory location.",
      "When you copy a primitive (let b = a), an independent copy is created. When you copy an object (let obj2 = obj1), only the memory reference pointer is copied, so mutations to obj2 affect obj1."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "fundamentals",
      "primitives",
      "memory"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "Why does typeof null return \"object\" in JavaScript, and how can you reliably check if a value is strictly null?",
    "answer": "typeof null === \"object\" is a historic bug from the original 1995 JavaScript implementation, where values were represented with type tags (the object type tag was 000, and the null pointer was represented as all zeros). To reliably check for null, use strict equality: value === null, or Object.prototype.toString.call(value) === \"[object Null]\".",
    "explanation": "Fixing typeof null was proposed for ECMAScript but rejected because it would break millions of existing websites relying on this legacy behavior.",
    "interviewAnswer": "typeof null === \"object\" is a historic bug from the original 1995 JavaScript implementation, where values were represented with type tags (the object type tag was 000, and the null pointer was represented as all zeros). To reliably check for null, use strict equality: value === null, or Object.prototype.toString.call(value) === \"[object Null]\". Fixing typeof null was proposed for ECMAScript but rejected because it would break millions of existing websites relying on this legacy behavior.",
    "importantPoints": [
      "typeof null === \"object\" is a historic bug from the original 1995 JavaScript implementation, where values were represented with type tags (the object type tag was 000, and the null pointer was represented as all zeros). To reliably check for null, use strict equality: value === null, or Object.prototype.toString.call(value) === \"[object Null]\".",
      "Fixing typeof null was proposed for ECMAScript but rejected because it would break millions of existing websites relying on this legacy behavior."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "fundamentals",
      "null",
      "typeof",
      "gotcha"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log(0.1 + 0.2 === 0.3), and how should floating-point numbers be accurately compared in JavaScript?",
    "answer": "The output is false. JavaScript numbers follow the IEEE 754 standard for 64-bit binary floating-point numbers, in which 0.1 and 0.2 cannot be represented with finite precision in base-2 binary. Their sum evaluates to 0.30000000000000004. To compare safely, check if the difference is smaller than Number.EPSILON: Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON.",
    "explanation": "Number.EPSILON represents the difference between 1 and the smallest floating point number greater than 1.",
    "interviewAnswer": "The output is false. JavaScript numbers follow the IEEE 754 standard for 64-bit binary floating-point numbers, in which 0.1 and 0.2 cannot be represented with finite precision in base-2 binary. Their sum evaluates to 0.30000000000000004. To compare safely, check if the difference is smaller than Number.EPSILON: Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON. Number.EPSILON represents the difference between 1 and the smallest floating point number greater than 1.",
    "importantPoints": [
      "The output is false. JavaScript numbers follow the IEEE 754 standard for 64-bit binary floating-point numbers, in which 0.1 and 0.2 cannot be represented with finite precision in base-2 binary. Their sum evaluates to 0.30000000000000004. To compare safely, check if the difference is smaller than Number.EPSILON: Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON.",
      "Number.EPSILON represents the difference between 1 and the smallest floating point number greater than 1."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "fundamentals",
      "floating-point",
      "number-epsilon"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log([] + []), console.log([] + {}), console.log({} + []), and console.log({} + {})?",
    "answer": "1) [] + [] outputs \"\" (empty string; both arrays convert to empty strings via toString()). 2) [] + {} outputs \"[object Object]\" (array converts to \"\", object converts to \"[object Object]\"). 3) In an expression context, ({} + []) outputs \"[object Object]\". If entered at the start of a statement in an interactive console, {} may be parsed as an empty block followed by +[], which outputs 0. 4) ({} + {}) outputs \"[object Object][object Object]\".",
    "explanation": "Binary + operator triggers ToPrimitive coercion using valueOf() and toString().",
    "interviewAnswer": "1) [] + [] outputs \"\" (empty string; both arrays convert to empty strings via toString()). 2) [] + {} outputs \"[object Object]\" (array converts to \"\", object converts to \"[object Object]\"). 3) In an expression context, ({} + []) outputs \"[object Object]\". If entered at the start of a statement in an interactive console, {} may be parsed as an empty block followed by +[], which outputs 0. 4) ({} + {}) outputs \"[object Object][object Object]\". Binary + operator triggers ToPrimitive coercion using valueOf() and toString().",
    "importantPoints": [
      "1) [] + [] outputs \"\" (empty string; both arrays convert to empty strings via toString()). 2) [] + {} outputs \"[object Object]\" (array converts to \"\", object converts to \"[object Object]\"). 3) In an expression context, ({} + []) outputs \"[object Object]\". If entered at the start of a statement in an interactive console, {} may be parsed as an empty block followed by +[], which outputs 0. 4) ({} + {}) outputs \"[object Object][object Object]\".",
      "Binary + operator triggers ToPrimitive coercion using valueOf() and toString()."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "fundamentals",
      "type-coercion",
      "addition-operator"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the difference between isNaN() and Number.isNaN() in JavaScript?",
    "answer": "isNaN(value) attempts to coerce the argument to a number first before checking (e.g. isNaN(\"hello\") === true because Number(\"hello\") is NaN). Number.isNaN(value) does NOT perform coercion; it strictly returns true ONLY if the value is of type number and is exactly NaN (e.g. Number.isNaN(\"hello\") === false, Number.isNaN(NaN) === true).",
    "explanation": "Number.isNaN is a robust ES6 method that prevents accidental false positives on non-numeric strings.",
    "interviewAnswer": "isNaN(value) attempts to coerce the argument to a number first before checking (e.g. isNaN(\"hello\") === true because Number(\"hello\") is NaN). Number.isNaN(value) does NOT perform coercion; it strictly returns true ONLY if the value is of type number and is exactly NaN (e.g. Number.isNaN(\"hello\") === false, Number.isNaN(NaN) === true). Number.isNaN is a robust ES6 method that prevents accidental false positives on non-numeric strings.",
    "importantPoints": [
      "isNaN(value) attempts to coerce the argument to a number first before checking (e.g. isNaN(\"hello\") === true because Number(\"hello\") is NaN). Number.isNaN(value) does NOT perform coercion; it strictly returns true ONLY if the value is of type number and is exactly NaN (e.g. Number.isNaN(\"hello\") === false, Number.isNaN(NaN) === true).",
      "Number.isNaN is a robust ES6 method that prevents accidental false positives on non-numeric strings."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "fundamentals",
      "isnan",
      "type-coercion"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log(NaN === NaN), and how can you test for NaN without any helper functions?",
    "answer": "NaN === NaN outputs false. According to the IEEE 754 specification, NaN is not equal to anything, including itself. You can test if a variable x is NaN without helper functions by checking: x !== x (it will evaluate to true ONLY when x is NaN).",
    "explanation": "Object.is(NaN, NaN) also evaluates to true, providing an alternative equality comparison.",
    "interviewAnswer": "NaN === NaN outputs false. According to the IEEE 754 specification, NaN is not equal to anything, including itself. You can test if a variable x is NaN without helper functions by checking: x !== x (it will evaluate to true ONLY when x is NaN). Object.is(NaN, NaN) also evaluates to true, providing an alternative equality comparison.",
    "importantPoints": [
      "NaN === NaN outputs false. According to the IEEE 754 specification, NaN is not equal to anything, including itself. You can test if a variable x is NaN without helper functions by checking: x !== x (it will evaluate to true ONLY when x is NaN).",
      "Object.is(NaN, NaN) also evaluates to true, providing an alternative equality comparison."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "nan",
      "equality"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What are the 8 falsy values in JavaScript?",
    "answer": "The 8 falsy values in JavaScript are: false, 0, -0, 0n (BigInt zero), \"\" (empty string), null, undefined, and NaN. Every other value in JavaScript—including empty arrays [], empty objects {}, and the string \"false\"—is truthy.",
    "explanation": "Understanding falsy values is critical when using logical short-circuiting or boolean coercions.",
    "interviewAnswer": "The 8 falsy values in JavaScript are: false, 0, -0, 0n (BigInt zero), \"\" (empty string), null, undefined, and NaN. Every other value in JavaScript—including empty arrays [], empty objects {}, and the string \"false\"—is truthy. Understanding falsy values is critical when using logical short-circuiting or boolean coercions.",
    "importantPoints": [
      "The 8 falsy values in JavaScript are: false, 0, -0, 0n (BigInt zero), \"\" (empty string), null, undefined, and NaN. Every other value in JavaScript—including empty arrays [], empty objects {}, and the string \"false\"—is truthy.",
      "Understanding falsy values is critical when using logical short-circuiting or boolean coercions."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "truthy-falsy",
      "boolean"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the difference between abstract equality (==) and strict equality (===)?",
    "answer": "Strict equality (===) compares both value and type without performing type coercion; if types differ, it returns false immediately. Abstract equality (==) applies the Abstract Equality Comparison Algorithm, attempting to coerce operands to common types (e.g. strings/booleans to numbers) before comparing.",
    "explanation": "Because type coercion rules for == are complex and unintuitive (e.g. \"\" == 0 is true, null == undefined is true, false == [] is true), === is almost universally preferred in modern engineering.",
    "interviewAnswer": "Strict equality (===) compares both value and type without performing type coercion; if types differ, it returns false immediately. Abstract equality (==) applies the Abstract Equality Comparison Algorithm, attempting to coerce operands to common types (e.g. strings/booleans to numbers) before comparing. Because type coercion rules for == are complex and unintuitive (e.g. \"\" == 0 is true, null == undefined is true, false == [] is true), === is almost universally preferred in modern engineering.",
    "importantPoints": [
      "Strict equality (===) compares both value and type without performing type coercion; if types differ, it returns false immediately. Abstract equality (==) applies the Abstract Equality Comparison Algorithm, attempting to coerce operands to common types (e.g. strings/booleans to numbers) before comparing.",
      "Because type coercion rules for == are complex and unintuitive (e.g. \"\" == 0 is true, null == undefined is true, false == [] is true), === is almost universally preferred in modern engineering."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "fundamentals",
      "equality",
      "strict-equality",
      "type-coercion"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "How does Object.is() differ from the strict equality (===) operator?",
    "answer": "Object.is() behaves identically to === with exactly two exceptions: 1) Object.is(NaN, NaN) is true, whereas NaN === NaN is false. 2) Object.is(+0, -0) is false, whereas +0 === -0 is true.",
    "explanation": "React relies on Object.is() for state change and hook dependency comparisons (bailouts).",
    "interviewAnswer": "Object.is() behaves identically to === with exactly two exceptions: 1) Object.is(NaN, NaN) is true, whereas NaN === NaN is false. 2) Object.is(+0, -0) is false, whereas +0 === -0 is true. React relies on Object.is() for state change and hook dependency comparisons (bailouts).",
    "importantPoints": [
      "Object.is() behaves identically to === with exactly two exceptions: 1) Object.is(NaN, NaN) is true, whereas NaN === NaN is false. 2) Object.is(+0, -0) is false, whereas +0 === -0 is true.",
      "React relies on Object.is() for state change and hook dependency comparisons (bailouts)."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "object-is",
      "equality"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log(1 < 2 < 3) and console.log(3 > 2 > 1)?",
    "answer": "1 < 2 < 3 evaluates to true: 1 < 2 evaluates to true, then true < 3 coerces true to 1, and 1 < 3 is true. 3 > 2 > 1 evaluates to FALSE: 3 > 2 evaluates to true, then true > 1 coerces true to 1, and 1 > 1 is false.",
    "explanation": "Relational operators are left-associative, causing the boolean result of the first comparison to be coerced into 1 or 0 for the second comparison.",
    "interviewAnswer": "1 < 2 < 3 evaluates to true: 1 < 2 evaluates to true, then true < 3 coerces true to 1, and 1 < 3 is true. 3 > 2 > 1 evaluates to FALSE: 3 > 2 evaluates to true, then true > 1 coerces true to 1, and 1 > 1 is false. Relational operators are left-associative, causing the boolean result of the first comparison to be coerced into 1 or 0 for the second comparison.",
    "importantPoints": [
      "1 < 2 < 3 evaluates to true: 1 < 2 evaluates to true, then true < 3 coerces true to 1, and 1 < 3 is true. 3 > 2 > 1 evaluates to FALSE: 3 > 2 evaluates to true, then true > 1 coerces true to 1, and 1 > 1 is false.",
      "Relational operators are left-associative, causing the boolean result of the first comparison to be coerced into 1 or 0 for the second comparison."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "operators",
      "type-coercion",
      "precedence"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the difference between null and undefined in JavaScript semantics and API design?",
    "answer": "undefined represents the unintentional or natural absence of a value (e.g. uninitialized variable, missing function argument, non-existent object property). null represents an intentional, explicit absence of any object value assigned programmatically by the developer.",
    "explanation": "null == undefined evaluates to true, but null === undefined is false.",
    "interviewAnswer": "undefined represents the unintentional or natural absence of a value (e.g. uninitialized variable, missing function argument, non-existent object property). null represents an intentional, explicit absence of any object value assigned programmatically by the developer. null == undefined evaluates to true, but null === undefined is false.",
    "importantPoints": [
      "undefined represents the unintentional or natural absence of a value (e.g. uninitialized variable, missing function argument, non-existent object property). null represents an intentional, explicit absence of any object value assigned programmatically by the developer.",
      "null == undefined evaluates to true, but null === undefined is false."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "null",
      "undefined",
      "semantics"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log(typeof (function() {})), console.log(typeof []), and console.log(typeof /abc/)?",
    "answer": "1) typeof (function() {}) is \"function\" (functions are callable objects given a specialized typeof string in ECMAScript). 2) typeof [] is \"object\" (arrays are objects; Array.isArray([]) checks specifically). 3) typeof /abc/ is \"object\" (regular expressions are objects).",
    "explanation": "Functions are the only subtype of Object that return a unique string from typeof.",
    "interviewAnswer": "1) typeof (function() {}) is \"function\" (functions are callable objects given a specialized typeof string in ECMAScript). 2) typeof [] is \"object\" (arrays are objects; Array.isArray([]) checks specifically). 3) typeof /abc/ is \"object\" (regular expressions are objects). Functions are the only subtype of Object that return a unique string from typeof.",
    "importantPoints": [
      "1) typeof (function() {}) is \"function\" (functions are callable objects given a specialized typeof string in ECMAScript). 2) typeof [] is \"object\" (arrays are objects; Array.isArray([]) checks specifically). 3) typeof /abc/ is \"object\" (regular expressions are objects).",
      "Functions are the only subtype of Object that return a unique string from typeof."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "typeof",
      "functions",
      "arrays"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the Nullish Coalescing Operator (??) and how does it differ from the Logical OR Operator (||)?",
    "answer": "The nullish coalescing operator (a ?? b) returns b ONLY if a is null or undefined. The logical OR operator (a || b) returns b if a is ANY falsy value (including 0, false, \"\", and NaN).",
    "explanation": "For example: const count = 0; count || 10 returns 10 (undesired fallback on valid zero), whereas count ?? 10 returns 0 (preserves valid zero).",
    "interviewAnswer": "The nullish coalescing operator (a ?? b) returns b ONLY if a is null or undefined. The logical OR operator (a || b) returns b if a is ANY falsy value (including 0, false, \"\", and NaN). For example: const count = 0; count || 10 returns 10 (undesired fallback on valid zero), whereas count ?? 10 returns 0 (preserves valid zero).",
    "importantPoints": [
      "The nullish coalescing operator (a ?? b) returns b ONLY if a is null or undefined. The logical OR operator (a || b) returns b if a is ANY falsy value (including 0, false, \"\", and NaN).",
      "For example: const count = 0; count || 10 returns 10 (undesired fallback on valid zero), whereas count ?? 10 returns 0 (preserves valid zero)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "fundamentals",
      "nullish-coalescing",
      "logical-or",
      "es6"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log(\"5\" - 3), console.log(\"5\" + 3), console.log(\"5\" * \"2\"), and console.log(\"5\" / \"2\")?",
    "answer": "1) \"5\" - 3 outputs 2 (subtraction only exists for numbers, so \"5\" is coerced to number 5). 2) \"5\" + 3 outputs \"53\" (+ with a string triggers string concatenation). 3) \"5\" * \"2\" outputs 10 (multiplication coerces both operands to numbers). 4) \"5\" / \"2\" outputs 2.5 (division coerces both to numbers).",
    "explanation": "The plus (+) operator is the only arithmetic operator overloaded for string concatenation.",
    "interviewAnswer": "1) \"5\" - 3 outputs 2 (subtraction only exists for numbers, so \"5\" is coerced to number 5). 2) \"5\" + 3 outputs \"53\" (+ with a string triggers string concatenation). 3) \"5\" * \"2\" outputs 10 (multiplication coerces both operands to numbers). 4) \"5\" / \"2\" outputs 2.5 (division coerces both to numbers). The plus (+) operator is the only arithmetic operator overloaded for string concatenation.",
    "importantPoints": [
      "1) \"5\" - 3 outputs 2 (subtraction only exists for numbers, so \"5\" is coerced to number 5). 2) \"5\" + 3 outputs \"53\" (+ with a string triggers string concatenation). 3) \"5\" * \"2\" outputs 10 (multiplication coerces both operands to numbers). 4) \"5\" / \"2\" outputs 2.5 (division coerces both to numbers).",
      "The plus (+) operator is the only arithmetic operator overloaded for string concatenation."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "type-coercion",
      "arithmetic-operators"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log(true + false), console.log(true + true), and console.log(1 + true)?",
    "answer": "1) true + false outputs 1 (true coerces to 1, false coerces to 0; 1 + 0 = 1). 2) true + true outputs 2 (1 + 1 = 2). 3) 1 + true outputs 2 (1 + 1 = 2).",
    "explanation": "In numeric contexts, boolean true is converted to 1 and false to 0.",
    "interviewAnswer": "1) true + false outputs 1 (true coerces to 1, false coerces to 0; 1 + 0 = 1). 2) true + true outputs 2 (1 + 1 = 2). 3) 1 + true outputs 2 (1 + 1 = 2). In numeric contexts, boolean true is converted to 1 and false to 0.",
    "importantPoints": [
      "1) true + false outputs 1 (true coerces to 1, false coerces to 0; 1 + 0 = 1). 2) true + true outputs 2 (1 + 1 = 2). 3) 1 + true outputs 2 (1 + 1 = 2).",
      "In numeric contexts, boolean true is converted to 1 and false to 0."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "boolean-coercion",
      "arithmetic"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the purpose of \"use strict\" (Strict Mode) in JavaScript, and what errors does it throw that sloppy mode silently ignores?",
    "answer": "Strict Mode eliminates silent errors by throwing exceptions when: 1) Assigning to undeclared variables (prevents accidental globals), 2) Assigning to non-writable properties, 3) Deleting non-deletable properties, 4) Using duplicate parameter names in functions, and 5) Disables \"with\" statement and fixes \"this\" being auto-boxed to window in functions (remains undefined).",
    "explanation": "ES6 classes and ES modules operate in strict mode automatically by default.",
    "interviewAnswer": "Strict Mode eliminates silent errors by throwing exceptions when: 1) Assigning to undeclared variables (prevents accidental globals), 2) Assigning to non-writable properties, 3) Deleting non-deletable properties, 4) Using duplicate parameter names in functions, and 5) Disables \"with\" statement and fixes \"this\" being auto-boxed to window in functions (remains undefined). ES6 classes and ES modules operate in strict mode automatically by default.",
    "importantPoints": [
      "Strict Mode eliminates silent errors by throwing exceptions when: 1) Assigning to undeclared variables (prevents accidental globals), 2) Assigning to non-writable properties, 3) Deleting non-deletable properties, 4) Using duplicate parameter names in functions, and 5) Disables \"with\" statement and fixes \"this\" being auto-boxed to window in functions (remains undefined).",
      "ES6 classes and ES modules operate in strict mode automatically by default."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "fundamentals",
      "strict-mode",
      "best-practices"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log(Number.MAX_SAFE_INTEGER), and what happens if you add 1 or 2 to it using standard Numbers?",
    "answer": "Number.MAX_SAFE_INTEGER is 9007199254740991 (2^53 - 1). Adding 1 gives 9007199254740992. Adding 2 also gives 9007199254740992 due to precision loss in 64-bit floating points. To perform exact calculations on integers larger than 2^53 - 1, use the BigInt primitive (e.g. 9007199254740991n + 2n === 9007199254740993n).",
    "explanation": "Numbers beyond 2^53 - 1 lose significant bits because 52 bits are dedicated to the mantissa.",
    "interviewAnswer": "Number.MAX_SAFE_INTEGER is 9007199254740991 (2^53 - 1). Adding 1 gives 9007199254740992. Adding 2 also gives 9007199254740992 due to precision loss in 64-bit floating points. To perform exact calculations on integers larger than 2^53 - 1, use the BigInt primitive (e.g. 9007199254740991n + 2n === 9007199254740993n). Numbers beyond 2^53 - 1 lose significant bits because 52 bits are dedicated to the mantissa.",
    "importantPoints": [
      "Number.MAX_SAFE_INTEGER is 9007199254740991 (2^53 - 1). Adding 1 gives 9007199254740992. Adding 2 also gives 9007199254740992 due to precision loss in 64-bit floating points. To perform exact calculations on integers larger than 2^53 - 1, use the BigInt primitive (e.g. 9007199254740991n + 2n === 9007199254740993n).",
      "Numbers beyond 2^53 - 1 lose significant bits because 52 bits are dedicated to the mantissa."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "max-safe-integer",
      "bigint",
      "precision"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "Can you mix BigInt and Number types in arithmetic operations (e.g. 10n + 5)?",
    "answer": "No, JavaScript throws a TypeError: \"Cannot mix BigInt and other types, use explicit conversions\". You must explicitly cast one of the operands: either BigInt(5) + 10n or Number(10n) + 5.",
    "explanation": "Implicit conversion between BigInt and Number was forbidden by design to prevent accidental precision loss.",
    "interviewAnswer": "No, JavaScript throws a TypeError: \"Cannot mix BigInt and other types, use explicit conversions\". You must explicitly cast one of the operands: either BigInt(5) + 10n or Number(10n) + 5. Implicit conversion between BigInt and Number was forbidden by design to prevent accidental precision loss.",
    "importantPoints": [
      "No, JavaScript throws a TypeError: \"Cannot mix BigInt and other types, use explicit conversions\". You must explicitly cast one of the operands: either BigInt(5) + 10n or Number(10n) + 5.",
      "Implicit conversion between BigInt and Number was forbidden by design to prevent accidental precision loss."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "bigint",
      "type-coercion"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is a Symbol in JavaScript and what is its primary use case as an object property key?",
    "answer": "A Symbol is a unique, immutable primitive data type (Symbol(\"desc\") !== Symbol(\"desc\")). Its primary use case is creating non-enumerable, collision-free object property keys that third-party code or libraries cannot accidentally overwrite, and defining well-known symbols (e.g. Symbol.iterator, Symbol.toPrimitive) to customize language behavior.",
    "explanation": "Symbol keys are skipped by for...in loops and Object.keys(), and can only be accessed via Object.getOwnPropertySymbols().",
    "interviewAnswer": "A Symbol is a unique, immutable primitive data type (Symbol(\"desc\") !== Symbol(\"desc\")). Its primary use case is creating non-enumerable, collision-free object property keys that third-party code or libraries cannot accidentally overwrite, and defining well-known symbols (e.g. Symbol.iterator, Symbol.toPrimitive) to customize language behavior. Symbol keys are skipped by for...in loops and Object.keys(), and can only be accessed via Object.getOwnPropertySymbols().",
    "importantPoints": [
      "A Symbol is a unique, immutable primitive data type (Symbol(\"desc\") !== Symbol(\"desc\")). Its primary use case is creating non-enumerable, collision-free object property keys that third-party code or libraries cannot accidentally overwrite, and defining well-known symbols (e.g. Symbol.iterator, Symbol.toPrimitive) to customize language behavior.",
      "Symbol keys are skipped by for...in loops and Object.keys(), and can only be accessed via Object.getOwnPropertySymbols()."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "symbols",
      "objects",
      "es6"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log(+\"\"), console.log(+false), console.log(+null), and console.log(+undefined)?",
    "answer": "1) +\"\" outputs 0 (empty string coerces to 0). 2) +false outputs 0. 3) +null outputs 0. 4) +undefined outputs NaN (undefined cannot be coerced into a valid number).",
    "explanation": "The unary plus (+) operator converts its operand to a number according to the ToNumber specification.",
    "interviewAnswer": "1) +\"\" outputs 0 (empty string coerces to 0). 2) +false outputs 0. 3) +null outputs 0. 4) +undefined outputs NaN (undefined cannot be coerced into a valid number). The unary plus (+) operator converts its operand to a number according to the ToNumber specification.",
    "importantPoints": [
      "1) +\"\" outputs 0 (empty string coerces to 0). 2) +false outputs 0. 3) +null outputs 0. 4) +undefined outputs NaN (undefined cannot be coerced into a valid number).",
      "The unary plus (+) operator converts its operand to a number according to the ToNumber specification."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "unary-plus",
      "type-coercion"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log(null > 0), console.log(null == 0), and console.log(null >= 0)?",
    "answer": "1) null > 0 outputs false (relational comparison converts null to number 0; 0 > 0 is false). 2) null == 0 outputs false (abstract equality rules define that null only equals undefined or null, without numeric conversion). 3) null >= 0 outputs true (the >= operator checks !(null < 0), and since 0 < 0 is false, !(false) is true).",
    "explanation": "Demonstrates the disconnect between relational comparison coercion (which converts null to 0) and equality check rules (which do not).",
    "interviewAnswer": "1) null > 0 outputs false (relational comparison converts null to number 0; 0 > 0 is false). 2) null == 0 outputs false (abstract equality rules define that null only equals undefined or null, without numeric conversion). 3) null >= 0 outputs true (the >= operator checks !(null < 0), and since 0 < 0 is false, !(false) is true). Demonstrates the disconnect between relational comparison coercion (which converts null to 0) and equality check rules (which do not).",
    "importantPoints": [
      "1) null > 0 outputs false (relational comparison converts null to number 0; 0 > 0 is false). 2) null == 0 outputs false (abstract equality rules define that null only equals undefined or null, without numeric conversion). 3) null >= 0 outputs true (the >= operator checks !(null < 0), and since 0 < 0 is false, !(false) is true).",
      "Demonstrates the disconnect between relational comparison coercion (which converts null to 0) and equality check rules (which do not)."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "fundamentals",
      "null-coercion",
      "relational-operators",
      "gotcha"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log(parseInt(\"08\")), console.log(parseInt(\"10px\")), and console.log(Number(\"10px\"))?",
    "answer": "1) parseInt(\"08\") outputs 8 (in modern ECMAScript, default radix is 10 unless leading 0x indicates hex). 2) parseInt(\"10px\") outputs 10 (parseInt parses characters from left to right until reaching a non-digit). 3) Number(\"10px\") outputs NaN (Number() converts the entire string strictly and fails if any character is non-numeric).",
    "explanation": "Always specify the radix explicitly in parseInt: parseInt(\"08\", 10) to avoid legacy engine ambiguities.",
    "interviewAnswer": "1) parseInt(\"08\") outputs 8 (in modern ECMAScript, default radix is 10 unless leading 0x indicates hex). 2) parseInt(\"10px\") outputs 10 (parseInt parses characters from left to right until reaching a non-digit). 3) Number(\"10px\") outputs NaN (Number() converts the entire string strictly and fails if any character is non-numeric). Always specify the radix explicitly in parseInt: parseInt(\"08\", 10) to avoid legacy engine ambiguities.",
    "importantPoints": [
      "1) parseInt(\"08\") outputs 8 (in modern ECMAScript, default radix is 10 unless leading 0x indicates hex). 2) parseInt(\"10px\") outputs 10 (parseInt parses characters from left to right until reaching a non-digit). 3) Number(\"10px\") outputs NaN (Number() converts the entire string strictly and fails if any character is non-numeric).",
      "Always specify the radix explicitly in parseInt: parseInt(\"08\", 10) to avoid legacy engine ambiguities."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "parseint",
      "number-conversion"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log(![]), console.log([] == ![]), and console.log([] == 0)?",
    "answer": "1) ![] outputs false (arrays are objects and therefore truthy; negating truthy gives false). 2) [] == ![] outputs true: ![] evaluates to false; then [] == false coerces false to 0; [] coerces to \"\" then 0; 0 == 0 is true! 3) [] == 0 outputs true (\"\" converts to 0; 0 == 0).",
    "explanation": "Classic JavaScript interview question demonstrating step-by-step type coercion.",
    "interviewAnswer": "1) ![] outputs false (arrays are objects and therefore truthy; negating truthy gives false). 2) [] == ![] outputs true: ![] evaluates to false; then [] == false coerces false to 0; [] coerces to \"\" then 0; 0 == 0 is true! 3) [] == 0 outputs true (\"\" converts to 0; 0 == 0). Classic JavaScript interview question demonstrating step-by-step type coercion.",
    "importantPoints": [
      "1) ![] outputs false (arrays are objects and therefore truthy; negating truthy gives false). 2) [] == ![] outputs true: ![] evaluates to false; then [] == false coerces false to 0; [] coerces to \"\" then 0; 0 == 0 is true! 3) [] == 0 outputs true (\"\" converts to 0; 0 == 0).",
      "Classic JavaScript interview question demonstrating step-by-step type coercion."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "fundamentals",
      "type-coercion",
      "equality",
      "gotcha"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the difference between pass-by-value and pass-by-reference in JavaScript argument passing?",
    "answer": "JavaScript is strictly pass-by-value for all types. However, for objects, the value passed is the memory reference itself (often called \"call-by-sharing\"). If you mutate an object property inside a function (obj.prop = 5), the caller sees the mutation. But if you reassign the entire parameter (obj = { newObj }), it does NOT reassign the caller reference.",
    "explanation": "Reassigning a parameter variable breaks the link to the original object reference.",
    "interviewAnswer": "JavaScript is strictly pass-by-value for all types. However, for objects, the value passed is the memory reference itself (often called \"call-by-sharing\"). If you mutate an object property inside a function (obj.prop = 5), the caller sees the mutation. But if you reassign the entire parameter (obj = { newObj }), it does NOT reassign the caller reference. Reassigning a parameter variable breaks the link to the original object reference.",
    "importantPoints": [
      "JavaScript is strictly pass-by-value for all types. However, for objects, the value passed is the memory reference itself (often called \"call-by-sharing\"). If you mutate an object property inside a function (obj.prop = 5), the caller sees the mutation. But if you reassign the entire parameter (obj = { newObj }), it does NOT reassign the caller reference.",
      "Reassigning a parameter variable breaks the link to the original object reference."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "pass-by-value",
      "references"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: function test(obj) { obj.name = \"Alice\"; obj = { name: \"Bob\" }; } let person = { name: \"Charlie\" }; test(person); console.log(person.name);?",
    "answer": "Outputs \"Alice\". The property mutation obj.name = \"Alice\" alters the underlying object shared by person. The subsequent reassignment obj = { name: \"Bob\" } only rebinds the local parameter variable obj to a new object, leaving the outer person variable pointing to the mutated original.",
    "explanation": "Clear demonstration that parameters are local variables holding copied references.",
    "interviewAnswer": "Outputs \"Alice\". The property mutation obj.name = \"Alice\" alters the underlying object shared by person. The subsequent reassignment obj = { name: \"Bob\" } only rebinds the local parameter variable obj to a new object, leaving the outer person variable pointing to the mutated original. Clear demonstration that parameters are local variables holding copied references.",
    "importantPoints": [
      "Outputs \"Alice\". The property mutation obj.name = \"Alice\" alters the underlying object shared by person. The subsequent reassignment obj = { name: \"Bob\" } only rebinds the local parameter variable obj to a new object, leaving the outer person variable pointing to the mutated original.",
      "Clear demonstration that parameters are local variables holding copied references."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "references",
      "mutations",
      "parameters"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log(typeof NaN)?",
    "answer": "typeof NaN outputs \"number\". Despite standing for \"Not-a-Number\", NaN is a special numeric value defined by the IEEE 754 floating-point specification to represent an invalid or undefined computational result (like Math.sqrt(-1)).",
    "explanation": "Because its type is number, typeof cannot be used to detect whether a value is NaN.",
    "interviewAnswer": "typeof NaN outputs \"number\". Despite standing for \"Not-a-Number\", NaN is a special numeric value defined by the IEEE 754 floating-point specification to represent an invalid or undefined computational result (like Math.sqrt(-1)). Because its type is number, typeof cannot be used to detect whether a value is NaN.",
    "importantPoints": [
      "typeof NaN outputs \"number\". Despite standing for \"Not-a-Number\", NaN is a special numeric value defined by the IEEE 754 floating-point specification to represent an invalid or undefined computational result (like Math.sqrt(-1)).",
      "Because its type is number, typeof cannot be used to detect whether a value is NaN."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "nan",
      "typeof"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the difference between Object.freeze() and Object.seal()?",
    "answer": "Object.seal(obj) prevents adding or deleting properties, but existing writable properties can still be modified. Object.freeze(obj) does everything seal does AND additionally makes all existing properties non-writable (writable: false), preventing value changes.",
    "explanation": "Both methods only perform shallow immutability; nested objects remain mutable unless recursively frozen.",
    "interviewAnswer": "Object.seal(obj) prevents adding or deleting properties, but existing writable properties can still be modified. Object.freeze(obj) does everything seal does AND additionally makes all existing properties non-writable (writable: false), preventing value changes. Both methods only perform shallow immutability; nested objects remain mutable unless recursively frozen.",
    "importantPoints": [
      "Object.seal(obj) prevents adding or deleting properties, but existing writable properties can still be modified. Object.freeze(obj) does everything seal does AND additionally makes all existing properties non-writable (writable: false), preventing value changes.",
      "Both methods only perform shallow immutability; nested objects remain mutable unless recursively frozen."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Comparison",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "object-freeze",
      "object-seal",
      "immutability"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: const a = Object.freeze({ x: 1, nested: { y: 2 } }); a.x = 10; a.nested.y = 20; console.log(a.x, a.nested.y); in non-strict mode?",
    "answer": "Outputs \"1 20\". a.x is frozen and remains 1 (mutation fails silently in non-strict mode, throws TypeError in strict mode). However, Object.freeze is shallow, so nested objects like a.nested are NOT frozen and allow mutation (a.nested.y becomes 20).",
    "explanation": "To achieve full immutability, a deepFreeze utility function must be implemented.",
    "interviewAnswer": "Outputs \"1 20\". a.x is frozen and remains 1 (mutation fails silently in non-strict mode, throws TypeError in strict mode). However, Object.freeze is shallow, so nested objects like a.nested are NOT frozen and allow mutation (a.nested.y becomes 20). To achieve full immutability, a deepFreeze utility function must be implemented.",
    "importantPoints": [
      "Outputs \"1 20\". a.x is frozen and remains 1 (mutation fails silently in non-strict mode, throws TypeError in strict mode). However, Object.freeze is shallow, so nested objects like a.nested are NOT frozen and allow mutation (a.nested.y becomes 20).",
      "To achieve full immutability, a deepFreeze utility function must be implemented."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "object-freeze",
      "shallow-freeze"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "How does the spread operator (...) behave with primitive values versus objects?",
    "answer": "Spreading an object creates a shallow clone of its own enumerable properties ({ ...obj }). Spreading a string into an array converts it into an array of individual characters ([...\"abc\"] -> [\"a\", \"b\", \"c\"]). Spreading null, undefined, or numbers into an object literal ({ ...null, ...123 }) silently yields an empty object without error.",
    "explanation": "Spreading null into an array ([...null]), however, throws a TypeError because null is not iterable.",
    "interviewAnswer": "Spreading an object creates a shallow clone of its own enumerable properties ({ ...obj }). Spreading a string into an array converts it into an array of individual characters ([...\"abc\"] -> [\"a\", \"b\", \"c\"]). Spreading null, undefined, or numbers into an object literal ({ ...null, ...123 }) silently yields an empty object without error. Spreading null into an array ([...null]), however, throws a TypeError because null is not iterable.",
    "importantPoints": [
      "Spreading an object creates a shallow clone of its own enumerable properties ({ ...obj }). Spreading a string into an array converts it into an array of individual characters ([...\"abc\"] -> [\"a\", \"b\", \"c\"]). Spreading null, undefined, or numbers into an object literal ({ ...null, ...123 }) silently yields an empty object without error.",
      "Spreading null into an array ([...null]), however, throws a TypeError because null is not iterable."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "spread-operator",
      "coercion"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log(new String(\"hello\") === \"hello\") and console.log(new String(\"hello\") == \"hello\")?",
    "answer": "new String(\"hello\") === \"hello\" outputs false (one is an Object wrapper, the other is a primitive string). new String(\"hello\") == \"hello\" outputs true (abstract equality coerces the String object wrapper to its primitive value via valueOf()).",
    "explanation": "Primitive wrappers (new String, new Number, new Boolean) should generally be avoided in modern code.",
    "interviewAnswer": "new String(\"hello\") === \"hello\" outputs false (one is an Object wrapper, the other is a primitive string). new String(\"hello\") == \"hello\" outputs true (abstract equality coerces the String object wrapper to its primitive value via valueOf()). Primitive wrappers (new String, new Number, new Boolean) should generally be avoided in modern code.",
    "importantPoints": [
      "new String(\"hello\") === \"hello\" outputs false (one is an Object wrapper, the other is a primitive string). new String(\"hello\") == \"hello\" outputs true (abstract equality coerces the String object wrapper to its primitive value via valueOf()).",
      "Primitive wrappers (new String, new Number, new Boolean) should generally be avoided in modern code."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "primitive-wrappers",
      "equality"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the difference between void 0 and undefined?",
    "answer": "void is an operator that evaluates any given expression and returns undefined (void 0 === undefined). Historically, void 0 was used because in older ECMAScript (ES3), undefined was a mutable global property that could be overwritten (window.undefined = true). void 0 is also 3 characters shorter for minifiers.",
    "explanation": "In modern ECMAScript, global undefined is read-only, but void 0 remains common in compiled output.",
    "interviewAnswer": "void is an operator that evaluates any given expression and returns undefined (void 0 === undefined). Historically, void 0 was used because in older ECMAScript (ES3), undefined was a mutable global property that could be overwritten (window.undefined = true). void 0 is also 3 characters shorter for minifiers. In modern ECMAScript, global undefined is read-only, but void 0 remains common in compiled output.",
    "importantPoints": [
      "void is an operator that evaluates any given expression and returns undefined (void 0 === undefined). Historically, void 0 was used because in older ECMAScript (ES3), undefined was a mutable global property that could be overwritten (window.undefined = true). void 0 is also 3 characters shorter for minifiers.",
      "In modern ECMAScript, global undefined is read-only, but void 0 remains common in compiled output."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "void-operator",
      "undefined"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log([1, 2] + [3, 4])?",
    "answer": "Outputs \"1,23,4\". Because the binary + operator is not defined for arrays, JavaScript coerces both operands to primitives by invoking their toString() method ([1, 2].toString() is \"1,2\", [3, 4].toString() is \"3,4\") and concatenates the strings.",
    "explanation": "To combine arrays into a single array, use [1, 2].concat([3, 4]) or [...[1, 2], ...[3, 4]].",
    "interviewAnswer": "Outputs \"1,23,4\". Because the binary + operator is not defined for arrays, JavaScript coerces both operands to primitives by invoking their toString() method ([1, 2].toString() is \"1,2\", [3, 4].toString() is \"3,4\") and concatenates the strings. To combine arrays into a single array, use [1, 2].concat([3, 4]) or [...[1, 2], ...[3, 4]].",
    "importantPoints": [
      "Outputs \"1,23,4\". Because the binary + operator is not defined for arrays, JavaScript coerces both operands to primitives by invoking their toString() method ([1, 2].toString() is \"1,2\", [3, 4].toString() is \"3,4\") and concatenates the strings.",
      "To combine arrays into a single array, use [1, 2].concat([3, 4]) or [...[1, 2], ...[3, 4]]."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "array-coercion",
      "addition-operator"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: console.log(typeof null === \"object\"), console.log(null instanceof Object)?",
    "answer": "1) typeof null === \"object\" outputs true. 2) null instanceof Object outputs FALSE. instanceof traverses the prototype chain of the left operand; since null is a primitive without any prototype chain, instanceof immediately returns false.",
    "explanation": "Proves that null is not an instance of the Object constructor despite the typeof return string.",
    "interviewAnswer": "1) typeof null === \"object\" outputs true. 2) null instanceof Object outputs FALSE. instanceof traverses the prototype chain of the left operand; since null is a primitive without any prototype chain, instanceof immediately returns false. Proves that null is not an instance of the Object constructor despite the typeof return string.",
    "importantPoints": [
      "1) typeof null === \"object\" outputs true. 2) null instanceof Object outputs FALSE. instanceof traverses the prototype chain of the left operand; since null is a primitive without any prototype chain, instanceof immediately returns false.",
      "Proves that null is not an instance of the Object constructor despite the typeof return string."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "null",
      "instanceof",
      "prototypes"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "What is the output of: const str = \"hello\"; str.toUpperCase(); console.log(str);?",
    "answer": "Outputs \"hello\". String primitives are immutable. Methods like toUpperCase() return a brand new string rather than modifying the existing string in place. Because the return value was not assigned back to str, str remains unchanged.",
    "explanation": "All string methods in JavaScript are pure and return new strings.",
    "interviewAnswer": "Outputs \"hello\". String primitives are immutable. Methods like toUpperCase() return a brand new string rather than modifying the existing string in place. Because the return value was not assigned back to str, str remains unchanged. All string methods in JavaScript are pure and return new strings.",
    "importantPoints": [
      "Outputs \"hello\". String primitives are immutable. Methods like toUpperCase() return a brand new string rather than modifying the existing string in place. Because the return value was not assigned back to str, str remains unchanged.",
      "All string methods in JavaScript are pure and return new strings."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "strings",
      "immutability"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "fundamentals",
    "question": "How does JavaScript handle division by zero (e.g. 5 / 0 and -5 / 0)?",
    "answer": "Unlike other languages that throw a divide-by-zero exception, JavaScript returns Infinity for positive numbers (5 / 0 === Infinity) and -Infinity for negative numbers (-5 / 0 === -Infinity). Dividing zero by zero (0 / 0) returns NaN.",
    "explanation": "Infinity and -Infinity are valid values of type number.",
    "interviewAnswer": "Unlike other languages that throw a divide-by-zero exception, JavaScript returns Infinity for positive numbers (5 / 0 === Infinity) and -Infinity for negative numbers (-5 / 0 === -Infinity). Dividing zero by zero (0 / 0) returns NaN. Infinity and -Infinity are valid values of type number.",
    "importantPoints": [
      "Unlike other languages that throw a divide-by-zero exception, JavaScript returns Infinity for positive numbers (5 / 0 === Infinity) and -Infinity for negative numbers (-5 / 0 === -Infinity). Dividing zero by zero (0 / 0) returns NaN.",
      "Infinity and -Infinity are valid values of type number."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "fundamentals",
      "division-by-zero",
      "infinity"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
