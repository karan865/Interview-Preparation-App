import { SeedQuestion } from '../types';

export const javascriptVariablesScopeQuestions: SeedQuestion[] = [
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the Temporal Dead Zone (TDZ) in JavaScript, and what error occurs if you access a let or const variable before its declaration line?",
    "answer": "The Temporal Dead Zone (TDZ) is the time period between entering a scope and the actual line where a let or const variable is declared and initialized. Accessing the variable during this window throws a ReferenceError: \"Cannot access variable before initialization\".",
    "explanation": "Although let and const variables are hoisted during the Execution Context creation phase, they remain uninitialized in the TDZ, unlike var which is initialized with undefined.",
    "interviewAnswer": "The Temporal Dead Zone (TDZ) is the time period between entering a scope and the actual line where a let or const variable is declared and initialized. Accessing the variable during this window throws a ReferenceError: \"Cannot access variable before initialization\". Although let and const variables are hoisted during the Execution Context creation phase, they remain uninitialized in the TDZ, unlike var which is initialized with undefined.",
    "importantPoints": [
      "The Temporal Dead Zone (TDZ) is the time period between entering a scope and the actual line where a let or const variable is declared and initialized. Accessing the variable during this window throws a ReferenceError: \"Cannot access variable before initialization\".",
      "Although let and const variables are hoisted during the Execution Context creation phase, they remain uninitialized in the TDZ, unlike var which is initialized with undefined."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "variables-scope",
      "tdz",
      "hoisting",
      "let-const"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: console.log(a); var a = 10; vs console.log(b); let b = 20;?",
    "answer": "console.log(a) prints undefined because var declarations are hoisted and automatically initialized with undefined during the Creation Phase. console.log(b) throws a ReferenceError because let is in the Temporal Dead Zone until its declaration is reached at runtime.",
    "explanation": "Demonstrates the fundamental difference between var and let hoisting behavior.",
    "interviewAnswer": "console.log(a) prints undefined because var declarations are hoisted and automatically initialized with undefined during the Creation Phase. console.log(b) throws a ReferenceError because let is in the Temporal Dead Zone until its declaration is reached at runtime. Demonstrates the fundamental difference between var and let hoisting behavior.",
    "importantPoints": [
      "console.log(a) prints undefined because var declarations are hoisted and automatically initialized with undefined during the Creation Phase. console.log(b) throws a ReferenceError because let is in the Temporal Dead Zone until its declaration is reached at runtime.",
      "Demonstrates the fundamental difference between var and let hoisting behavior."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "variables-scope",
      "hoisting",
      "var-vs-let"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of this classic loop: for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 100); }, and what are the two distinct ways to fix it?",
    "answer": "Outputs \"3\", \"3\", \"3\" (each after 100ms). Because var is function-scoped (or globally scoped), a single variable i is shared across all loop iterations. When the setTimeout callbacks execute after the loop completes, i has incremented to 3. Fix 1: Change var to let: for (let i = 0; ...), which creates a fresh block-scoped binding of i for each iteration. Fix 2: Use an IIFE or helper closure to capture the current value: ((j) => setTimeout(() => console.log(j), 100))(i).",
    "explanation": "One of the most famous JavaScript interview questions testing closures and scoping.",
    "interviewAnswer": "Outputs \"3\", \"3\", \"3\" (each after 100ms). Because var is function-scoped (or globally scoped), a single variable i is shared across all loop iterations. When the setTimeout callbacks execute after the loop completes, i has incremented to 3. Fix 1: Change var to let: for (let i = 0; ...), which creates a fresh block-scoped binding of i for each iteration. Fix 2: Use an IIFE or helper closure to capture the current value: ((j) => setTimeout(() => console.log(j), 100))(i). One of the most famous JavaScript interview questions testing closures and scoping.",
    "importantPoints": [
      "Outputs \"3\", \"3\", \"3\" (each after 100ms). Because var is function-scoped (or globally scoped), a single variable i is shared across all loop iterations. When the setTimeout callbacks execute after the loop completes, i has incremented to 3. Fix 1: Change var to let: for (let i = 0; ...), which creates a fresh block-scoped binding of i for each iteration. Fix 2: Use an IIFE or helper closure to capture the current value: ((j) => setTimeout(() => console.log(j), 100))(i).",
      "One of the most famous JavaScript interview questions testing closures and scoping."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "variables-scope",
      "closures",
      "event-loop",
      "timers",
      "var-vs-let"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is a Closure in JavaScript, and what is the underlying Lexical Environment mechanism that powers it?",
    "answer": "A closure is the combination of a function bundled together with references to its surrounding state (lexical environment). In JavaScript, every execution context has an internal [[Environment]] reference pointing to the outer lexical environment where it was statically defined. Even after an outer function completes execution and pops off the call stack, inner functions retain access to those outer variables in heap memory.",
    "explanation": "Closures enable data privacy, encapsulation, factory functions, currying, and memoization.",
    "interviewAnswer": "A closure is the combination of a function bundled together with references to its surrounding state (lexical environment). In JavaScript, every execution context has an internal [[Environment]] reference pointing to the outer lexical environment where it was statically defined. Even after an outer function completes execution and pops off the call stack, inner functions retain access to those outer variables in heap memory. Closures enable data privacy, encapsulation, factory functions, currying, and memoization.",
    "importantPoints": [
      "A closure is the combination of a function bundled together with references to its surrounding state (lexical environment). In JavaScript, every execution context has an internal [[Environment]] reference pointing to the outer lexical environment where it was statically defined. Even after an outer function completes execution and pops off the call stack, inner functions retain access to those outer variables in heap memory.",
      "Closures enable data privacy, encapsulation, factory functions, currying, and memoization."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "variables-scope",
      "closures",
      "lexical-environment",
      "execution-context"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What are the two phases of JavaScript Execution Context evaluation?",
    "answer": "1) Creation Phase (Memory Allocation): The JavaScript engine sets up the Lexical Environment, allocates memory for variables and functions, hoists function declarations with their entire body, and hoists var declarations with undefined (leaving let/const uninitialized in TDZ). 2) Execution Phase: The engine executes code line-by-line, assigning values to variables and invoking functions.",
    "explanation": "Understanding these two phases explains all hoisting and scoping phenomena in JavaScript.",
    "interviewAnswer": "1) Creation Phase (Memory Allocation): The JavaScript engine sets up the Lexical Environment, allocates memory for variables and functions, hoists function declarations with their entire body, and hoists var declarations with undefined (leaving let/const uninitialized in TDZ). 2) Execution Phase: The engine executes code line-by-line, assigning values to variables and invoking functions. Understanding these two phases explains all hoisting and scoping phenomena in JavaScript.",
    "importantPoints": [
      "1) Creation Phase (Memory Allocation): The JavaScript engine sets up the Lexical Environment, allocates memory for variables and functions, hoists function declarations with their entire body, and hoists var declarations with undefined (leaving let/const uninitialized in TDZ). 2) Execution Phase: The engine executes code line-by-line, assigning values to variables and invoking functions.",
      "Understanding these two phases explains all hoisting and scoping phenomena in JavaScript."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "variables-scope",
      "execution-context",
      "creation-phase"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: function foo() { console.log(a); return; var a = 1; } foo();?",
    "answer": "Outputs undefined. The declaration var a is hoisted to the top of foo() function scope and initialized to undefined during the Creation Phase. Even though return precedes var a = 1, the declaration hoisting already occurred.",
    "explanation": "Hoisting operates during compile/creation phase regardless of unreachable return statements.",
    "interviewAnswer": "Outputs undefined. The declaration var a is hoisted to the top of foo() function scope and initialized to undefined during the Creation Phase. Even though return precedes var a = 1, the declaration hoisting already occurred. Hoisting operates during compile/creation phase regardless of unreachable return statements.",
    "importantPoints": [
      "Outputs undefined. The declaration var a is hoisted to the top of foo() function scope and initialized to undefined during the Creation Phase. Even though return precedes var a = 1, the declaration hoisting already occurred.",
      "Hoisting operates during compile/creation phase regardless of unreachable return statements."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "hoisting",
      "return"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What happens when a function declaration and a var variable share the exact same name in the same scope: console.log(typeof x); var x = 10; function x() {} console.log(typeof x);?",
    "answer": "1) First console.log prints \"function\". Function declarations are hoisted BEFORE variable declarations. The function declaration x completely sets up x as a function. 2) The second console.log prints \"number\" because the runtime execution reaches var x = 10 and reassigns x to the number 10.",
    "explanation": "Function declarations take precedence over var declarations during hoisting.",
    "interviewAnswer": "1) First console.log prints \"function\". Function declarations are hoisted BEFORE variable declarations. The function declaration x completely sets up x as a function. 2) The second console.log prints \"number\" because the runtime execution reaches var x = 10 and reassigns x to the number 10. Function declarations take precedence over var declarations during hoisting.",
    "importantPoints": [
      "1) First console.log prints \"function\". Function declarations are hoisted BEFORE variable declarations. The function declaration x completely sets up x as a function. 2) The second console.log prints \"number\" because the runtime execution reaches var x = 10 and reassigns x to the number 10.",
      "Function declarations take precedence over var declarations during hoisting."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "variables-scope",
      "hoisting-precedence",
      "functions-vs-var"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "How do block-scoped let and const variables prevent accidental variable leaking into the global window object compared to var?",
    "answer": "Variables declared with var at the global level are automatically attached as properties on the global object (window.myVar in browsers, global.myVar in Node). let and const at global scope are stored in the Global Lexical Scope record, NOT as properties on window (window.myLet is undefined), preventing accidental global pollution.",
    "explanation": "Global pollution often causes naming collisions between different scripts.",
    "interviewAnswer": "Variables declared with var at the global level are automatically attached as properties on the global object (window.myVar in browsers, global.myVar in Node). let and const at global scope are stored in the Global Lexical Scope record, NOT as properties on window (window.myLet is undefined), preventing accidental global pollution. Global pollution often causes naming collisions between different scripts.",
    "importantPoints": [
      "Variables declared with var at the global level are automatically attached as properties on the global object (window.myVar in browsers, global.myVar in Node). let and const at global scope are stored in the Global Lexical Scope record, NOT as properties on window (window.myLet is undefined), preventing accidental global pollution.",
      "Global pollution often causes naming collisions between different scripts."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "global-object",
      "window",
      "let-const"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: let x = 1; { console.log(x); let x = 2; }?",
    "answer": "Throws ReferenceError: \"Cannot access 'x' before initialization\". Inside the block {}, let x = 2 creates a new block-scoped identifier x, which shadows the outer x. Because let is hoisted within its block into the Temporal Dead Zone, accessing x before the declaration line triggers ReferenceError instead of reading the outer x = 1.",
    "explanation": "Proves conclusively that let is indeed hoisted within its block scope.",
    "interviewAnswer": "Throws ReferenceError: \"Cannot access 'x' before initialization\". Inside the block {}, let x = 2 creates a new block-scoped identifier x, which shadows the outer x. Because let is hoisted within its block into the Temporal Dead Zone, accessing x before the declaration line triggers ReferenceError instead of reading the outer x = 1. Proves conclusively that let is indeed hoisted within its block scope.",
    "importantPoints": [
      "Throws ReferenceError: \"Cannot access 'x' before initialization\". Inside the block {}, let x = 2 creates a new block-scoped identifier x, which shadows the outer x. Because let is hoisted within its block into the Temporal Dead Zone, accessing x before the declaration line triggers ReferenceError instead of reading the outer x = 1.",
      "Proves conclusively that let is indeed hoisted within its block scope."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "variables-scope",
      "tdz",
      "shadowing",
      "block-scope"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "How can you create a private counter using closures (Data Privacy / Encapsulation pattern)?",
    "answer": "function createCounter() { let count = 0; return { increment() { return ++count; }, decrement() { return --count; }, getCount() { return count; } }; }. The variable count is completely inaccessible from the outside scope and can only be read or modified through the returned methods.",
    "explanation": "Before private class fields (#field), closures were the primary mechanism for OOP data encapsulation in JavaScript.",
    "interviewAnswer": "function createCounter() { let count = 0; return { increment() { return ++count; }, decrement() { return --count; }, getCount() { return count; } }; }. The variable count is completely inaccessible from the outside scope and can only be read or modified through the returned methods. Before private class fields (#field), closures were the primary mechanism for OOP data encapsulation in JavaScript.",
    "importantPoints": [
      "function createCounter() { let count = 0; return { increment() { return ++count; }, decrement() { return --count; }, getCount() { return count; } }; }. The variable count is completely inaccessible from the outside scope and can only be read or modified through the returned methods.",
      "Before private class fields (#field), closures were the primary mechanism for OOP data encapsulation in JavaScript."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "closures",
      "encapsulation",
      "counter"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is Lexical Scope (Static Scope) and how does it differ from Dynamic Scope?",
    "answer": "In Lexical Scoping, variable scope is determined at AUTHOR TIME by the physical location of variables and blocks in the source code. A function resolves variables based on where it was DEFINED, not where it is CALLED. In Dynamic Scoping (not used by JavaScript variables), scope is determined by the call stack at runtime.",
    "explanation": "Only the \"this\" keyword in standard functions exhibits dynamic binding behavior in JavaScript.",
    "interviewAnswer": "In Lexical Scoping, variable scope is determined at AUTHOR TIME by the physical location of variables and blocks in the source code. A function resolves variables based on where it was DEFINED, not where it is CALLED. In Dynamic Scoping (not used by JavaScript variables), scope is determined by the call stack at runtime. Only the \"this\" keyword in standard functions exhibits dynamic binding behavior in JavaScript.",
    "importantPoints": [
      "In Lexical Scoping, variable scope is determined at AUTHOR TIME by the physical location of variables and blocks in the source code. A function resolves variables based on where it was DEFINED, not where it is CALLED. In Dynamic Scoping (not used by JavaScript variables), scope is determined by the call stack at runtime.",
      "Only the \"this\" keyword in standard functions exhibits dynamic binding behavior in JavaScript."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "lexical-scope",
      "static-scope"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: const x = 10; function foo() { console.log(x); } function bar() { const x = 20; foo(); } bar();?",
    "answer": "Outputs 10. Because JavaScript uses lexical scoping, foo() resolves x based on its enclosing lexical scope where foo was defined (the global scope, where x = 10). It does NOT resolve x from bar() where it was invoked.",
    "explanation": "Classic demonstration of lexical scope vs call-site dynamic scope.",
    "interviewAnswer": "Outputs 10. Because JavaScript uses lexical scoping, foo() resolves x based on its enclosing lexical scope where foo was defined (the global scope, where x = 10). It does NOT resolve x from bar() where it was invoked. Classic demonstration of lexical scope vs call-site dynamic scope.",
    "importantPoints": [
      "Outputs 10. Because JavaScript uses lexical scoping, foo() resolves x based on its enclosing lexical scope where foo was defined (the global scope, where x = 10). It does NOT resolve x from bar() where it was invoked.",
      "Classic demonstration of lexical scope vs call-site dynamic scope."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "lexical-scope",
      "call-stack"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is variable shadowing in JavaScript, and can an inner var shadow an outer let in the same block?",
    "answer": "Variable shadowing occurs when an inner scope declares a variable with the same name as an outer scope, temporarily masking access to the outer variable. An inner let can shadow an outer var or let. However, declaring var x inside a block where let x already exists in the same scope throws a SyntaxError: \"Identifier 'x' has already been declared\" (illegal shadowing).",
    "explanation": "var hoists to the enclosing function, conflicting with the block-scoped let.",
    "interviewAnswer": "Variable shadowing occurs when an inner scope declares a variable with the same name as an outer scope, temporarily masking access to the outer variable. An inner let can shadow an outer var or let. However, declaring var x inside a block where let x already exists in the same scope throws a SyntaxError: \"Identifier 'x' has already been declared\" (illegal shadowing). var hoists to the enclosing function, conflicting with the block-scoped let.",
    "importantPoints": [
      "Variable shadowing occurs when an inner scope declares a variable with the same name as an outer scope, temporarily masking access to the outer variable. An inner let can shadow an outer var or let. However, declaring var x inside a block where let x already exists in the same scope throws a SyntaxError: \"Identifier 'x' has already been declared\" (illegal shadowing).",
      "var hoists to the enclosing function, conflicting with the block-scoped let."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "shadowing",
      "syntaxerror"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: function test() { a = 10; } test(); console.log(a); in non-strict mode vs strict mode?",
    "answer": "In non-strict mode, it outputs 10. Assigning to an undeclared variable (a = 10) traverses the scope chain to the global scope and implicitly creates a global property window.a = 10. In strict mode (\"use strict\"), it throws ReferenceError: \"a is not defined\", preventing accidental global leakage.",
    "explanation": "A major historical source of bugs eliminated by Strict Mode and ES modules.",
    "interviewAnswer": "In non-strict mode, it outputs 10. Assigning to an undeclared variable (a = 10) traverses the scope chain to the global scope and implicitly creates a global property window.a = 10. In strict mode (\"use strict\"), it throws ReferenceError: \"a is not defined\", preventing accidental global leakage. A major historical source of bugs eliminated by Strict Mode and ES modules.",
    "importantPoints": [
      "In non-strict mode, it outputs 10. Assigning to an undeclared variable (a = 10) traverses the scope chain to the global scope and implicitly creates a global property window.a = 10. In strict mode (\"use strict\"), it throws ReferenceError: \"a is not defined\", preventing accidental global leakage.",
      "A major historical source of bugs eliminated by Strict Mode and ES modules."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "accidental-globals",
      "strict-mode"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "How can a closure cause a memory leak in a long-running JavaScript application?",
    "answer": "If an inner function captures an outer scope that holds a large data structure (e.g. large arrays, DOM references), the entire outer lexical environment remains referenced in heap memory as long as the inner function is reachable. If that inner function is attached to a global event listener, timer, or cache and never cleaned up, the large dataset cannot be garbage collected.",
    "explanation": "The V8 JavaScript engine optimizes closures by pruning unreferenced variables, but referenced ones retain their scope.",
    "interviewAnswer": "If an inner function captures an outer scope that holds a large data structure (e.g. large arrays, DOM references), the entire outer lexical environment remains referenced in heap memory as long as the inner function is reachable. If that inner function is attached to a global event listener, timer, or cache and never cleaned up, the large dataset cannot be garbage collected. The V8 JavaScript engine optimizes closures by pruning unreferenced variables, but referenced ones retain their scope.",
    "importantPoints": [
      "If an inner function captures an outer scope that holds a large data structure (e.g. large arrays, DOM references), the entire outer lexical environment remains referenced in heap memory as long as the inner function is reachable. If that inner function is attached to a global event listener, timer, or cache and never cleaned up, the large dataset cannot be garbage collected.",
      "The V8 JavaScript engine optimizes closures by pruning unreferenced variables, but referenced ones retain their scope."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "javascript",
      "variables-scope",
      "memory-leaks",
      "closures",
      "garbage-collection"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: (function() { var a = b = 3; })(); console.log(typeof a, typeof b); in non-strict mode?",
    "answer": "Outputs \"undefined number\". The expression var a = b = 3 is parsed as b = 3; var a = b;. In non-strict mode, b = 3 is an assignment to an undeclared variable that creates a GLOBAL variable b. var a is local to the IIFE. Outside the IIFE, a is undefined, but b is 3 (type number).",
    "explanation": "In strict mode, b = 3 throws ReferenceError: b is not defined.",
    "interviewAnswer": "Outputs \"undefined number\". The expression var a = b = 3 is parsed as b = 3; var a = b;. In non-strict mode, b = 3 is an assignment to an undeclared variable that creates a GLOBAL variable b. var a is local to the IIFE. Outside the IIFE, a is undefined, but b is 3 (type number). In strict mode, b = 3 throws ReferenceError: b is not defined.",
    "importantPoints": [
      "Outputs \"undefined number\". The expression var a = b = 3 is parsed as b = 3; var a = b;. In non-strict mode, b = 3 is an assignment to an undeclared variable that creates a GLOBAL variable b. var a is local to the IIFE. Outside the IIFE, a is undefined, but b is 3 (type number).",
      "In strict mode, b = 3 throws ReferenceError: b is not defined."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "accidental-globals",
      "iife",
      "gotcha"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "Why can const variables have their properties mutated when declared as objects or arrays (e.g. const arr = []; arr.push(1);)?",
    "answer": "const creates an immutable BINDING, not an immutable value. It guarantees that the variable identifier cannot be reassigned to a different memory address (arr = [2] throws TypeError). However, the underlying object or array value stored in the heap remains fully mutable unless frozen with Object.freeze().",
    "explanation": "const prevents reassignment; immutability requires Object.freeze() or immutable data structures.",
    "interviewAnswer": "const creates an immutable BINDING, not an immutable value. It guarantees that the variable identifier cannot be reassigned to a different memory address (arr = [2] throws TypeError). However, the underlying object or array value stored in the heap remains fully mutable unless frozen with Object.freeze(). const prevents reassignment; immutability requires Object.freeze() or immutable data structures.",
    "importantPoints": [
      "const creates an immutable BINDING, not an immutable value. It guarantees that the variable identifier cannot be reassigned to a different memory address (arr = [2] throws TypeError). However, the underlying object or array value stored in the heap remains fully mutable unless frozen with Object.freeze().",
      "const prevents reassignment; immutability requires Object.freeze() or immutable data structures."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "const",
      "immutability",
      "references"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is an Immediately Invoked Function Expression (IIFE) and what problem did it solve before ES6 block scoping and modules?",
    "answer": "An IIFE is a function that executes immediately upon definition: (function() { ... })();. Before ES6 (let/const and modules), JavaScript only had function scope. IIFEs were used to create a private scope, preventing variables from polluting the global namespace and enabling the Module Pattern.",
    "explanation": "Largely superseded by ES modules (import/export), but still used for top-level async execution and library encapsulation.",
    "interviewAnswer": "An IIFE is a function that executes immediately upon definition: (function() { ... })();. Before ES6 (let/const and modules), JavaScript only had function scope. IIFEs were used to create a private scope, preventing variables from polluting the global namespace and enabling the Module Pattern. Largely superseded by ES modules (import/export), but still used for top-level async execution and library encapsulation.",
    "importantPoints": [
      "An IIFE is a function that executes immediately upon definition: (function() { ... })();. Before ES6 (let/const and modules), JavaScript only had function scope. IIFEs were used to create a private scope, preventing variables from polluting the global namespace and enabling the Module Pattern.",
      "Largely superseded by ES modules (import/export), but still used for top-level async execution and library encapsulation."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "iife",
      "module-pattern",
      "scope"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: var x = 10; function foo() { var x; console.log(x); x = 20; } foo();?",
    "answer": "Outputs undefined. Inside foo, the local variable declaration var x is hoisted to the top of foo function scope and initialized to undefined, shadowing the outer x = 10. At the time of console.log(x), local x has not yet been assigned 20.",
    "explanation": "Standard variable shadowing with hoisting.",
    "interviewAnswer": "Outputs undefined. Inside foo, the local variable declaration var x is hoisted to the top of foo function scope and initialized to undefined, shadowing the outer x = 10. At the time of console.log(x), local x has not yet been assigned 20. Standard variable shadowing with hoisting.",
    "importantPoints": [
      "Outputs undefined. Inside foo, the local variable declaration var x is hoisted to the top of foo function scope and initialized to undefined, shadowing the outer x = 10. At the time of console.log(x), local x has not yet been assigned 20.",
      "Standard variable shadowing with hoisting."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "shadowing",
      "hoisting"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "Can function arguments be shadowed by local var declarations inside the function body: function foo(x) { var x; return x; } console.log(foo(5));?",
    "answer": "Outputs 5. Function parameters are initialized before function body execution. If a var declaration has no initializer (var x;), it does NOT overwrite the existing parameter value. If it had an assignment (var x = 10;), it would overwrite.",
    "explanation": "A bare var declaration without assignment is a no-op if the identifier already exists in scope.",
    "interviewAnswer": "Outputs 5. Function parameters are initialized before function body execution. If a var declaration has no initializer (var x;), it does NOT overwrite the existing parameter value. If it had an assignment (var x = 10;), it would overwrite. A bare var declaration without assignment is a no-op if the identifier already exists in scope.",
    "importantPoints": [
      "Outputs 5. Function parameters are initialized before function body execution. If a var declaration has no initializer (var x;), it does NOT overwrite the existing parameter value. If it had an assignment (var x = 10;), it would overwrite.",
      "A bare var declaration without assignment is a no-op if the identifier already exists in scope."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "parameters",
      "hoisting",
      "shadowing"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: function parent() { let count = 0; function child() { count++; return count; } return child; } const c1 = parent(); const c2 = parent(); console.log(c1(), c1(), c2());?",
    "answer": "Outputs 1, 2, 1. Each call to parent() creates a brand new, independent execution context and lexical environment with its own count variable in heap memory. c1 and c2 hold closures over two completely distinct count state cells.",
    "explanation": "Demonstrates closure state isolation across multiple factory invocations.",
    "interviewAnswer": "Outputs 1, 2, 1. Each call to parent() creates a brand new, independent execution context and lexical environment with its own count variable in heap memory. c1 and c2 hold closures over two completely distinct count state cells. Demonstrates closure state isolation across multiple factory invocations.",
    "importantPoints": [
      "Outputs 1, 2, 1. Each call to parent() creates a brand new, independent execution context and lexical environment with its own count variable in heap memory. c1 and c2 hold closures over two completely distinct count state cells.",
      "Demonstrates closure state isolation across multiple factory invocations."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "closures",
      "state-isolation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "How does the V8 engine optimize closures to avoid retaining entire lexical scopes when only one variable is used?",
    "answer": "V8 uses Context allocation optimization (Scope Analysis). It inspects which outer variables are actually referenced by inner closures. Only referenced variables are allocated into the heap-allocated Context object; unreferenced local variables are stored in the stack frame and discarded when the outer function returns.",
    "explanation": "Prevents unnecessary memory retention for unused local variables.",
    "interviewAnswer": "V8 uses Context allocation optimization (Scope Analysis). It inspects which outer variables are actually referenced by inner closures. Only referenced variables are allocated into the heap-allocated Context object; unreferenced local variables are stored in the stack frame and discarded when the outer function returns. Prevents unnecessary memory retention for unused local variables.",
    "importantPoints": [
      "V8 uses Context allocation optimization (Scope Analysis). It inspects which outer variables are actually referenced by inner closures. Only referenced variables are allocated into the heap-allocated Context object; unreferenced local variables are stored in the stack frame and discarded when the outer function returns.",
      "Prevents unnecessary memory retention for unused local variables."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "v8-internals",
      "closures",
      "optimization"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: let f; { let x = 100; f = () => x; } console.log(f());?",
    "answer": "Outputs 100. Even though block scope exited and x is no longer directly accessible, the arrow function f was assigned to an outer variable and preserves a closure reference to x, keeping it alive in memory.",
    "explanation": "Closures capture block-scoped variables just as effectively as function-scoped variables.",
    "interviewAnswer": "Outputs 100. Even though block scope exited and x is no longer directly accessible, the arrow function f was assigned to an outer variable and preserves a closure reference to x, keeping it alive in memory. Closures capture block-scoped variables just as effectively as function-scoped variables.",
    "importantPoints": [
      "Outputs 100. Even though block scope exited and x is no longer directly accessible, the arrow function f was assigned to an outer variable and preserves a closure reference to x, keeping it alive in memory.",
      "Closures capture block-scoped variables just as effectively as function-scoped variables."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "block-scope",
      "closures"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the difference between Function Declaration hoisting and Function Expression hoisting?",
    "answer": "Function Declarations (function foo() {}) are hoisted with both their identifier AND their full function body, making them callable anywhere in their enclosing scope before the declaration line. Function Expressions (var foo = function() {} or const foo = () => {}) hoist only the variable binding (with undefined for var, or TDZ for let/const); calling foo() before the assignment throws a TypeError or ReferenceError.",
    "explanation": "Calling a var function expression early throws \"TypeError: foo is not a function\" because foo is undefined.",
    "interviewAnswer": "Function Declarations (function foo() {}) are hoisted with both their identifier AND their full function body, making them callable anywhere in their enclosing scope before the declaration line. Function Expressions (var foo = function() {} or const foo = () => {}) hoist only the variable binding (with undefined for var, or TDZ for let/const); calling foo() before the assignment throws a TypeError or ReferenceError. Calling a var function expression early throws \"TypeError: foo is not a function\" because foo is undefined.",
    "importantPoints": [
      "Function Declarations (function foo() {}) are hoisted with both their identifier AND their full function body, making them callable anywhere in their enclosing scope before the declaration line. Function Expressions (var foo = function() {} or const foo = () => {}) hoist only the variable binding (with undefined for var, or TDZ for let/const); calling foo() before the assignment throws a TypeError or ReferenceError.",
      "Calling a var function expression early throws \"TypeError: foo is not a function\" because foo is undefined."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "variables-scope",
      "function-declarations",
      "function-expressions",
      "hoisting"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: console.log(foo()); function foo() { return \"hello\"; } and console.log(bar()); var bar = function() { return \"world\"; };?",
    "answer": "console.log(foo()) successfully prints \"hello\". console.log(bar()) throws TypeError: \"bar is not a function\". During creation phase, bar is initialized to undefined; attempting to invoke undefined() triggers a TypeError.",
    "explanation": "One of the most frequent errors in JavaScript interviews.",
    "interviewAnswer": "console.log(foo()) successfully prints \"hello\". console.log(bar()) throws TypeError: \"bar is not a function\". During creation phase, bar is initialized to undefined; attempting to invoke undefined() triggers a TypeError. One of the most frequent errors in JavaScript interviews.",
    "importantPoints": [
      "console.log(foo()) successfully prints \"hello\". console.log(bar()) throws TypeError: \"bar is not a function\". During creation phase, bar is initialized to undefined; attempting to invoke undefined() triggers a TypeError.",
      "One of the most frequent errors in JavaScript interviews."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "hoisting",
      "typeerror"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the Scope Chain and how does the engine traverse it when resolving an identifier?",
    "answer": "The Scope Chain is the hierarchical chain of Lexical Environments linked via outer environment references. When resolving a variable, the engine checks: 1) Current Lexical Environment, 2) Outer Lexical Environment, 3) Continues outwards until reaching the Global Environment, 4) If unresolvable, throws ReferenceError (in strict mode).",
    "explanation": "Scope lookup always travels outward/upward, never downward into child scopes.",
    "interviewAnswer": "The Scope Chain is the hierarchical chain of Lexical Environments linked via outer environment references. When resolving a variable, the engine checks: 1) Current Lexical Environment, 2) Outer Lexical Environment, 3) Continues outwards until reaching the Global Environment, 4) If unresolvable, throws ReferenceError (in strict mode). Scope lookup always travels outward/upward, never downward into child scopes.",
    "importantPoints": [
      "The Scope Chain is the hierarchical chain of Lexical Environments linked via outer environment references. When resolving a variable, the engine checks: 1) Current Lexical Environment, 2) Outer Lexical Environment, 3) Continues outwards until reaching the Global Environment, 4) If unresolvable, throws ReferenceError (in strict mode).",
      "Scope lookup always travels outward/upward, never downward into child scopes."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "scope-chain",
      "lexical-environment"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: for (let i = 0; i < 3; i++) { let i = \"inner\"; console.log(i); }?",
    "answer": "Outputs \"inner\", \"inner\", \"inner\". The i in let i = \"inner\" is inside the loop body block scope, which is a child scope of the for-loop header scope (for (let i = 0; ...)). The inner i shadows the loop iteration i without conflict.",
    "explanation": "The loop header and the loop body block are separate lexical scopes in ECMAScript specification.",
    "interviewAnswer": "Outputs \"inner\", \"inner\", \"inner\". The i in let i = \"inner\" is inside the loop body block scope, which is a child scope of the for-loop header scope (for (let i = 0; ...)). The inner i shadows the loop iteration i without conflict. The loop header and the loop body block are separate lexical scopes in ECMAScript specification.",
    "importantPoints": [
      "Outputs \"inner\", \"inner\", \"inner\". The i in let i = \"inner\" is inside the loop body block scope, which is a child scope of the for-loop header scope (for (let i = 0; ...)). The inner i shadows the loop iteration i without conflict.",
      "The loop header and the loop body block are separate lexical scopes in ECMAScript specification."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "for-loop",
      "block-scope",
      "shadowing"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What happens if you use the delete operator on a variable declared with var, let, or const: var a = 1; delete a; console.log(a);?",
    "answer": "The delete operator returns false (or throws SyntaxError in strict mode), and the variable is NOT deleted; console.log(a) prints 1. The delete operator is designed exclusively for object properties, not variable identifiers or function parameters.",
    "explanation": "delete window.a only works if a was created implicitly without var (e.g. a = 1).",
    "interviewAnswer": "The delete operator returns false (or throws SyntaxError in strict mode), and the variable is NOT deleted; console.log(a) prints 1. The delete operator is designed exclusively for object properties, not variable identifiers or function parameters. delete window.a only works if a was created implicitly without var (e.g. a = 1).",
    "importantPoints": [
      "The delete operator returns false (or throws SyntaxError in strict mode), and the variable is NOT deleted; console.log(a) prints 1. The delete operator is designed exclusively for object properties, not variable identifiers or function parameters.",
      "delete window.a only works if a was created implicitly without var (e.g. a = 1)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "delete-operator",
      "variables"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: var x = 1; if (function f() {}) { x += typeof f; } console.log(x);?",
    "answer": "Outputs \"1undefined\". A named function expression (function f() {}) inside an if condition is an expression, not a declaration. Its identifier f is ONLY accessible inside the function itself, not in the enclosing scope. Therefore, outside the function, typeof f evaluates to \"undefined\", and 1 + \"undefined\" is \"1undefined\".",
    "explanation": "Named function expression names are scoped strictly to the function body.",
    "interviewAnswer": "Outputs \"1undefined\". A named function expression (function f() {}) inside an if condition is an expression, not a declaration. Its identifier f is ONLY accessible inside the function itself, not in the enclosing scope. Therefore, outside the function, typeof f evaluates to \"undefined\", and 1 + \"undefined\" is \"1undefined\". Named function expression names are scoped strictly to the function body.",
    "importantPoints": [
      "Outputs \"1undefined\". A named function expression (function f() {}) inside an if condition is an expression, not a declaration. Its identifier f is ONLY accessible inside the function itself, not in the enclosing scope. Therefore, outside the function, typeof f evaluates to \"undefined\", and 1 + \"undefined\" is \"1undefined\".",
      "Named function expression names are scoped strictly to the function body."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "named-function-expressions",
      "scoping"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "How does memoization use closures to cache expensive function results?",
    "answer": "A memoization wrapper stores a cache object in its outer scope: function memoize(fn) { const cache = {}; return function(...args) { const key = JSON.stringify(args); if (key in cache) return cache[key]; return cache[key] = fn.apply(this, args); }; }. The inner function forms a closure over the cache, preserving computed results across invocations.",
    "explanation": "Drastically speeds up recursive algorithms like Fibonacci or heavy data calculations.",
    "interviewAnswer": "A memoization wrapper stores a cache object in its outer scope: function memoize(fn) { const cache = {}; return function(...args) { const key = JSON.stringify(args); if (key in cache) return cache[key]; return cache[key] = fn.apply(this, args); }; }. The inner function forms a closure over the cache, preserving computed results across invocations. Drastically speeds up recursive algorithms like Fibonacci or heavy data calculations.",
    "importantPoints": [
      "A memoization wrapper stores a cache object in its outer scope: function memoize(fn) { const cache = {}; return function(...args) { const key = JSON.stringify(args); if (key in cache) return cache[key]; return cache[key] = fn.apply(this, args); }; }. The inner function forms a closure over the cache, preserving computed results across invocations.",
      "Drastically speeds up recursive algorithms like Fibonacci or heavy data calculations."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "memoization",
      "closures",
      "caching"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: let a = 10; function outer() { let a = 20; return function inner() { console.log(a); }; } const fn = outer(); let b = 30; fn();?",
    "answer": "Outputs 20. The function inner() forms a closure over the lexical scope of outer(), where a is 20. The global variable a = 10 and b = 30 have no effect on inner's resolved scope.",
    "explanation": "Reinforces static lexical binding.",
    "interviewAnswer": "Outputs 20. The function inner() forms a closure over the lexical scope of outer(), where a is 20. The global variable a = 10 and b = 30 have no effect on inner's resolved scope. Reinforces static lexical binding.",
    "importantPoints": [
      "Outputs 20. The function inner() forms a closure over the lexical scope of outer(), where a is 20. The global variable a = 10 and b = 30 have no effect on inner's resolved scope.",
      "Reinforces static lexical binding."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "closures",
      "lexical-scoping"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "Why does ES6 disallow re-declaring let and const variables in the same block: let a = 1; let a = 2;?",
    "answer": "Re-declaring let or const in the same lexical scope throws an immediate compile-time SyntaxError: \"Identifier 'a' has already been declared\". This strictness was introduced in ES6 to eliminate accidental variable re-declaration bugs common with var.",
    "explanation": "var allowed silent re-declarations, leading to subtle bugs in large files.",
    "interviewAnswer": "Re-declaring let or const in the same lexical scope throws an immediate compile-time SyntaxError: \"Identifier 'a' has already been declared\". This strictness was introduced in ES6 to eliminate accidental variable re-declaration bugs common with var. var allowed silent re-declarations, leading to subtle bugs in large files.",
    "importantPoints": [
      "Re-declaring let or const in the same lexical scope throws an immediate compile-time SyntaxError: \"Identifier 'a' has already been declared\". This strictness was introduced in ES6 to eliminate accidental variable re-declaration bugs common with var.",
      "var allowed silent re-declarations, leading to subtle bugs in large files."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "let-const",
      "re-declaration",
      "syntaxerror"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: const arr = [10, 20, 30]; for (var i = 0; i < arr.length; i++) { (function(val) { setTimeout(() => console.log(val), 0); })(arr[i]); }?",
    "answer": "Outputs 10, 20, 30. The IIFE executes synchronously for each iteration, receiving arr[i] as an argument val. Because val is a local parameter of the IIFE, each timer callback closes over its own unique val parameter rather than the shared var i.",
    "explanation": "Classic pre-ES6 pattern for fixing loop closures with timers.",
    "interviewAnswer": "Outputs 10, 20, 30. The IIFE executes synchronously for each iteration, receiving arr[i] as an argument val. Because val is a local parameter of the IIFE, each timer callback closes over its own unique val parameter rather than the shared var i. Classic pre-ES6 pattern for fixing loop closures with timers.",
    "importantPoints": [
      "Outputs 10, 20, 30. The IIFE executes synchronously for each iteration, receiving arr[i] as an argument val. Because val is a local parameter of the IIFE, each timer callback closes over its own unique val parameter rather than the shared var i.",
      "Classic pre-ES6 pattern for fixing loop closures with timers."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "iife",
      "closures",
      "timers"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "How does the \"with\" statement affect variable scope and why is it strictly forbidden in Strict Mode?",
    "answer": "The \"with (obj)\" statement extends the scope chain by placing obj at the head of the scope chain. It makes variable resolution unpredictable (e.g. \"x\" could be a local variable or an object property), prevents JS engines from optimizing variable lookups at compile time, and introduces severe security and ambiguity bugs.",
    "explanation": "Throws a SyntaxError in Strict Mode and ES modules.",
    "interviewAnswer": "The \"with (obj)\" statement extends the scope chain by placing obj at the head of the scope chain. It makes variable resolution unpredictable (e.g. \"x\" could be a local variable or an object property), prevents JS engines from optimizing variable lookups at compile time, and introduces severe security and ambiguity bugs. Throws a SyntaxError in Strict Mode and ES modules.",
    "importantPoints": [
      "The \"with (obj)\" statement extends the scope chain by placing obj at the head of the scope chain. It makes variable resolution unpredictable (e.g. \"x\" could be a local variable or an object property), prevents JS engines from optimizing variable lookups at compile time, and introduces severe security and ambiguity bugs.",
      "Throws a SyntaxError in Strict Mode and ES modules."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "with-statement",
      "strict-mode",
      "deprecated"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: var x = 1; function f() { x = 10; return; function x() {} } f(); console.log(x);?",
    "answer": "Outputs 1. Inside f(), the function declaration function x() {} is hoisted to the top of f, creating a LOCAL variable x. The line x = 10 reassigns that LOCAL x, NOT the global x. Outside f, the global x remains 1.",
    "explanation": "Tricky hoisting interview question demonstrating that function declarations create local scope bindings.",
    "interviewAnswer": "Outputs 1. Inside f(), the function declaration function x() {} is hoisted to the top of f, creating a LOCAL variable x. The line x = 10 reassigns that LOCAL x, NOT the global x. Outside f, the global x remains 1. Tricky hoisting interview question demonstrating that function declarations create local scope bindings.",
    "importantPoints": [
      "Outputs 1. Inside f(), the function declaration function x() {} is hoisted to the top of f, creating a LOCAL variable x. The line x = 10 reassigns that LOCAL x, NOT the global x. Outside f, the global x remains 1.",
      "Tricky hoisting interview question demonstrating that function declarations create local scope bindings."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "variables-scope",
      "hoisting",
      "local-scope",
      "gotcha"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the difference between global scope and module scope in ES6 Modules (ESM)?",
    "answer": "In classic scripts, top-level variables declared with var are global and attach to window. In ES6 Modules (type=\"module\"), every file has its own isolated Module Scope: top-level variables are completely private to the module and are never attached to window unless explicitly exported and imported.",
    "explanation": "Eliminates the need for IIFEs and global namespace management libraries.",
    "interviewAnswer": "In classic scripts, top-level variables declared with var are global and attach to window. In ES6 Modules (type=\"module\"), every file has its own isolated Module Scope: top-level variables are completely private to the module and are never attached to window unless explicitly exported and imported. Eliminates the need for IIFEs and global namespace management libraries.",
    "importantPoints": [
      "In classic scripts, top-level variables declared with var are global and attach to window. In ES6 Modules (type=\"module\"), every file has its own isolated Module Scope: top-level variables are completely private to the module and are never attached to window unless explicitly exported and imported.",
      "Eliminates the need for IIFEs and global namespace management libraries."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "esm",
      "module-scope",
      "global-scope"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: try { throw new Error(); } catch (x) { var x = 1; var y = 2; console.log(x); } console.log(x); console.log(y);?",
    "answer": "1) Inside catch, console.log(x) outputs 1 (catch parameter x creates a block-scoped variable, which is updated to 1). 2) Outside catch, console.log(x) outputs undefined (the outer hoisted var x was shadowed). 3) console.log(y) outputs 2 (var y hoists to the enclosing function/global scope).",
    "explanation": "The catch clause parameter in JavaScript is one of the few places where block scoping existed prior to ES6.",
    "interviewAnswer": "1) Inside catch, console.log(x) outputs 1 (catch parameter x creates a block-scoped variable, which is updated to 1). 2) Outside catch, console.log(x) outputs undefined (the outer hoisted var x was shadowed). 3) console.log(y) outputs 2 (var y hoists to the enclosing function/global scope). The catch clause parameter in JavaScript is one of the few places where block scoping existed prior to ES6.",
    "importantPoints": [
      "1) Inside catch, console.log(x) outputs 1 (catch parameter x creates a block-scoped variable, which is updated to 1). 2) Outside catch, console.log(x) outputs undefined (the outer hoisted var x was shadowed). 3) console.log(y) outputs 2 (var y hoists to the enclosing function/global scope).",
      "The catch clause parameter in JavaScript is one of the few places where block scoping existed prior to ES6."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "catch-scope",
      "hoisting",
      "shadowing"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "How does garbage collection determine whether a closure variable can be safely collected?",
    "answer": "Garbage collectors use Mark-and-Sweep reachability. If a function is reachable from root references (e.g. global window, active event listeners, active timers, DOM nodes), its Lexical Environment and all variables captured in its closure remain marked as reachable and are preserved in heap memory. Once the function becomes unreachable, its captured environment is swept.",
    "explanation": "Removing the reference to the function frees the closure from memory.",
    "interviewAnswer": "Garbage collectors use Mark-and-Sweep reachability. If a function is reachable from root references (e.g. global window, active event listeners, active timers, DOM nodes), its Lexical Environment and all variables captured in its closure remain marked as reachable and are preserved in heap memory. Once the function becomes unreachable, its captured environment is swept. Removing the reference to the function frees the closure from memory.",
    "importantPoints": [
      "Garbage collectors use Mark-and-Sweep reachability. If a function is reachable from root references (e.g. global window, active event listeners, active timers, DOM nodes), its Lexical Environment and all variables captured in its closure remain marked as reachable and are preserved in heap memory. Once the function becomes unreachable, its captured environment is swept.",
      "Removing the reference to the function frees the closure from memory."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "garbage-collection",
      "reachability",
      "memory"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: function makeAdder(x) { return function(y) { return x + y; }; } const add5 = makeAdder(5); console.log(add5(3), add5(10));?",
    "answer": "Outputs 8, 15. The function add5 forms a closure retaining the argument x = 5 from when makeAdder was invoked. Passing y = 3 computes 5 + 3 = 8; passing y = 10 computes 5 + 10 = 15.",
    "explanation": "Classic example of function currying and factory patterns via closures.",
    "interviewAnswer": "Outputs 8, 15. The function add5 forms a closure retaining the argument x = 5 from when makeAdder was invoked. Passing y = 3 computes 5 + 3 = 8; passing y = 10 computes 5 + 10 = 15. Classic example of function currying and factory patterns via closures.",
    "importantPoints": [
      "Outputs 8, 15. The function add5 forms a closure retaining the argument x = 5 from when makeAdder was invoked. Passing y = 3 computes 5 + 3 = 8; passing y = 10 computes 5 + 10 = 15.",
      "Classic example of function currying and factory patterns via closures."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "currying",
      "factory-functions",
      "closures"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: let a = [1, 2]; function modify(b) { b.push(3); b = [4, 5]; } modify(a); console.log(a);?",
    "answer": "Outputs [1, 2, 3]. a and b initially reference the same array. b.push(3) mutates that array in place. The subsequent reassignment b = [4, 5] only reassigns the local parameter variable b, leaving the original variable a pointing to [1, 2, 3].",
    "explanation": "Demonstrates difference between mutating reference contents and reassigning parameter references.",
    "interviewAnswer": "Outputs [1, 2, 3]. a and b initially reference the same array. b.push(3) mutates that array in place. The subsequent reassignment b = [4, 5] only reassigns the local parameter variable b, leaving the original variable a pointing to [1, 2, 3]. Demonstrates difference between mutating reference contents and reassigning parameter references.",
    "importantPoints": [
      "Outputs [1, 2, 3]. a and b initially reference the same array. b.push(3) mutates that array in place. The subsequent reassignment b = [4, 5] only reassigns the local parameter variable b, leaving the original variable a pointing to [1, 2, 3].",
      "Demonstrates difference between mutating reference contents and reassigning parameter references."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
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
    "topicSlug": "variables-scope",
    "question": "What is the output of: function check() { return a; var a = 5; } console.log(check());?",
    "answer": "Outputs undefined. var a is hoisted to the top of check() with initial value undefined. At the return statement, a has not yet been assigned 5.",
    "explanation": "Hoisting sets var to undefined prior to line-by-line execution.",
    "interviewAnswer": "Outputs undefined. var a is hoisted to the top of check() with initial value undefined. At the return statement, a has not yet been assigned 5. Hoisting sets var to undefined prior to line-by-line execution.",
    "importantPoints": [
      "Outputs undefined. var a is hoisted to the top of check() with initial value undefined. At the return statement, a has not yet been assigned 5.",
      "Hoisting sets var to undefined prior to line-by-line execution."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "hoisting",
      "return-order"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "Why does accessing an undeclared variable with typeof not throw a ReferenceError: console.log(typeof undeclaredVar);?",
    "answer": "typeof has a special \"safe check\" behavior: if an undeclared variable is passed, it returns the string \"undefined\" without throwing a ReferenceError. However, if the variable was declared with let or const in the TDZ, typeof DOES throw a ReferenceError.",
    "explanation": "typeof undeclaredVar === \"undefined\" is an idiom for checking if global variables exist.",
    "interviewAnswer": "typeof has a special \"safe check\" behavior: if an undeclared variable is passed, it returns the string \"undefined\" without throwing a ReferenceError. However, if the variable was declared with let or const in the TDZ, typeof DOES throw a ReferenceError. typeof undeclaredVar === \"undefined\" is an idiom for checking if global variables exist.",
    "importantPoints": [
      "typeof has a special \"safe check\" behavior: if an undeclared variable is passed, it returns the string \"undefined\" without throwing a ReferenceError. However, if the variable was declared with let or const in the TDZ, typeof DOES throw a ReferenceError.",
      "typeof undeclaredVar === \"undefined\" is an idiom for checking if global variables exist."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "typeof",
      "tdz",
      "undeclared"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: console.log(typeof x); let x = 10;?",
    "answer": "Throws ReferenceError: Cannot access 'x' before initialization. Even typeof cannot access a let or const variable that resides in the Temporal Dead Zone.",
    "explanation": "Proves that the TDZ check supersedes typeof's traditional safe behavior for undeclared variables.",
    "interviewAnswer": "Throws ReferenceError: Cannot access 'x' before initialization. Even typeof cannot access a let or const variable that resides in the Temporal Dead Zone. Proves that the TDZ check supersedes typeof's traditional safe behavior for undeclared variables.",
    "importantPoints": [
      "Throws ReferenceError: Cannot access 'x' before initialization. Even typeof cannot access a let or const variable that resides in the Temporal Dead Zone.",
      "Proves that the TDZ check supersedes typeof's traditional safe behavior for undeclared variables."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "typeof",
      "tdz",
      "referenceerror"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "How does the Module Pattern use closures to emulate private and public members in JavaScript?",
    "answer": "An IIFE returns an object containing methods that expose public APIs while closing over internal local variables and helper functions: const myModule = (() => { let privateKey = \"secret\"; function privateMethod() {} return { publicMethod() { return privateKey; } }; })();. External callers cannot modify privateKey directly.",
    "explanation": "The cornerstone pattern of early scalable JavaScript application architectures.",
    "interviewAnswer": "An IIFE returns an object containing methods that expose public APIs while closing over internal local variables and helper functions: const myModule = (() => { let privateKey = \"secret\"; function privateMethod() {} return { publicMethod() { return privateKey; } }; })();. External callers cannot modify privateKey directly. The cornerstone pattern of early scalable JavaScript application architectures.",
    "importantPoints": [
      "An IIFE returns an object containing methods that expose public APIs while closing over internal local variables and helper functions: const myModule = (() => { let privateKey = \"secret\"; function privateMethod() {} return { publicMethod() { return privateKey; } }; })();. External callers cannot modify privateKey directly.",
      "The cornerstone pattern of early scalable JavaScript application architectures."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "module-pattern",
      "encapsulation",
      "closures"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: let x = 1; function test() { if (!x) { var x = 10; } return x; } console.log(test());?",
    "answer": "Outputs 10! The var x inside the if block is hoisted to the top of test(), initializing local x to undefined. Inside test(), !x evaluates to !undefined, which is true! The if block executes and assigns x = 10. The outer let x = 1 was shadowed entirely.",
    "explanation": "Classic hoisting trick question where hoisting alters conditional evaluation.",
    "interviewAnswer": "Outputs 10! The var x inside the if block is hoisted to the top of test(), initializing local x to undefined. Inside test(), !x evaluates to !undefined, which is true! The if block executes and assigns x = 10. The outer let x = 1 was shadowed entirely. Classic hoisting trick question where hoisting alters conditional evaluation.",
    "importantPoints": [
      "Outputs 10! The var x inside the if block is hoisted to the top of test(), initializing local x to undefined. Inside test(), !x evaluates to !undefined, which is true! The if block executes and assigns x = 10. The outer let x = 1 was shadowed entirely.",
      "Classic hoisting trick question where hoisting alters conditional evaluation."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "variables-scope",
      "hoisting",
      "shadowing",
      "conditionals"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: for (var i = 0; i < 3; i++) { setTimeout((function(i) { return function() { console.log(i); }; })(i), 0); }?",
    "answer": "Outputs 0, 1, 2. The inner function returned by the self-invoking function forms a closure over the specific parameter i passed during that iteration, preserving its individual value.",
    "explanation": "Curried closure pattern used before ES6 let.",
    "interviewAnswer": "Outputs 0, 1, 2. The inner function returned by the self-invoking function forms a closure over the specific parameter i passed during that iteration, preserving its individual value. Curried closure pattern used before ES6 let.",
    "importantPoints": [
      "Outputs 0, 1, 2. The inner function returned by the self-invoking function forms a closure over the specific parameter i passed during that iteration, preserving its individual value.",
      "Curried closure pattern used before ES6 let."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "closures",
      "timers",
      "iife"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the difference between Function Scope and Block Scope?",
    "answer": "Function Scope (var) means a variable is visible anywhere inside the declaring function, ignoring if, for, or while blocks. Block Scope (let, const) means the variable is strictly confined between the opening { and closing } braces of the nearest block.",
    "explanation": "Block scope prevents variables inside for loops or if checks from leaking into the parent function.",
    "interviewAnswer": "Function Scope (var) means a variable is visible anywhere inside the declaring function, ignoring if, for, or while blocks. Block Scope (let, const) means the variable is strictly confined between the opening { and closing } braces of the nearest block. Block scope prevents variables inside for loops or if checks from leaking into the parent function.",
    "importantPoints": [
      "Function Scope (var) means a variable is visible anywhere inside the declaring function, ignoring if, for, or while blocks. Block Scope (let, const) means the variable is strictly confined between the opening { and closing } braces of the nearest block.",
      "Block scope prevents variables inside for loops or if checks from leaking into the parent function."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "block-scope",
      "function-scope"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: { var a = 1; let b = 2; const c = 3; } console.log(a); console.log(b);?",
    "answer": "console.log(a) prints 1 (var ignores block boundaries and leaks out). console.log(b) throws ReferenceError: b is not defined (let is strictly block-scoped).",
    "explanation": "Direct demonstration of block scoping difference between var and let.",
    "interviewAnswer": "console.log(a) prints 1 (var ignores block boundaries and leaks out). console.log(b) throws ReferenceError: b is not defined (let is strictly block-scoped). Direct demonstration of block scoping difference between var and let.",
    "importantPoints": [
      "console.log(a) prints 1 (var ignores block boundaries and leaks out). console.log(b) throws ReferenceError: b is not defined (let is strictly block-scoped).",
      "Direct demonstration of block scoping difference between var and let."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "block-scope",
      "var-vs-let"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "Can an inner function modify an outer variable captured in a closure?",
    "answer": "Yes. Closures do not store static snapshot copies of variables; they hold live references to the variables in the outer environment. Modifying the variable inside the inner function directly updates the variable in the shared lexical environment.",
    "explanation": "Live bindings distinguish JavaScript closures from languages that capture variables by value.",
    "interviewAnswer": "Yes. Closures do not store static snapshot copies of variables; they hold live references to the variables in the outer environment. Modifying the variable inside the inner function directly updates the variable in the shared lexical environment. Live bindings distinguish JavaScript closures from languages that capture variables by value.",
    "importantPoints": [
      "Yes. Closures do not store static snapshot copies of variables; they hold live references to the variables in the outer environment. Modifying the variable inside the inner function directly updates the variable in the shared lexical environment.",
      "Live bindings distinguish JavaScript closures from languages that capture variables by value."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "closures",
      "live-bindings"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "variables-scope",
    "question": "What is the output of: function outer() { var n = 1; function inner() { n++; console.log(n); } return inner; } var f1 = outer(); f1(); f1();?",
    "answer": "Outputs 2, then 3. Because f1 retains a live closure over the variable n, repeated invocations of f1() mutate the same persistent counter variable in heap memory.",
    "explanation": "State persists across invocations because the lexical environment remains alive.",
    "interviewAnswer": "Outputs 2, then 3. Because f1 retains a live closure over the variable n, repeated invocations of f1() mutate the same persistent counter variable in heap memory. State persists across invocations because the lexical environment remains alive.",
    "importantPoints": [
      "Outputs 2, then 3. Because f1 retains a live closure over the variable n, repeated invocations of f1() mutate the same persistent counter variable in heap memory.",
      "State persists across invocations because the lexical environment remains alive."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "variables-scope",
      "closures",
      "state-persistence"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
