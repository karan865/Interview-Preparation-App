import { SeedQuestion } from '../types';

export const javascriptFunctionsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What are the four rules of \"this\" binding in JavaScript, ordered from lowest to highest precedence?",
    "answer": "1) Default Binding: standalone function invocation; points to global window (or undefined in strict mode). 2) Implicit Binding: invoked as an object method (obj.fn()); points to obj. 3) Explicit Binding: invoked via call(), apply(), or bind(); points to the explicitly provided context. 4) \"new\" Binding: invoked as a constructor (new Fn()); points to the newly instantiated object.",
    "explanation": "Arrow functions do not follow these rules; they capture \"this\" lexically from their enclosing scope.",
    "interviewAnswer": "1) Default Binding: standalone function invocation; points to global window (or undefined in strict mode). 2) Implicit Binding: invoked as an object method (obj.fn()); points to obj. 3) Explicit Binding: invoked via call(), apply(), or bind(); points to the explicitly provided context. 4) \"new\" Binding: invoked as a constructor (new Fn()); points to the newly instantiated object. Arrow functions do not follow these rules; they capture \"this\" lexically from their enclosing scope.",
    "importantPoints": [
      "1) Default Binding: standalone function invocation; points to global window (or undefined in strict mode). 2) Implicit Binding: invoked as an object method (obj.fn()); points to obj. 3) Explicit Binding: invoked via call(), apply(), or bind(); points to the explicitly provided context. 4) \"new\" Binding: invoked as a constructor (new Fn()); points to the newly instantiated object.",
      "Arrow functions do not follow these rules; they capture \"this\" lexically from their enclosing scope."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "functions",
      "this",
      "binding-rules",
      "precedence"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "Why do Arrow Functions NOT have their own \"this\" keyword, and how do they resolve \"this\" references?",
    "answer": "Arrow functions are designed with lexical \"this\": they do not bind their own this, arguments, super, or new.target. When this is used inside an arrow function, JavaScript resolves it exactly like any other variable by looking up the lexical scope chain to the nearest enclosing non-arrow function or global context.",
    "explanation": "Calling call(), apply(), or bind() on an arrow function has NO effect on its this binding.",
    "interviewAnswer": "Arrow functions are designed with lexical \"this\": they do not bind their own this, arguments, super, or new.target. When this is used inside an arrow function, JavaScript resolves it exactly like any other variable by looking up the lexical scope chain to the nearest enclosing non-arrow function or global context. Calling call(), apply(), or bind() on an arrow function has NO effect on its this binding.",
    "importantPoints": [
      "Arrow functions are designed with lexical \"this\": they do not bind their own this, arguments, super, or new.target. When this is used inside an arrow function, JavaScript resolves it exactly like any other variable by looking up the lexical scope chain to the nearest enclosing non-arrow function or global context.",
      "Calling call(), apply(), or bind() on an arrow function has NO effect on its this binding."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "functions",
      "arrow-functions",
      "lexical-this"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the difference between call(), apply(), and bind() in JavaScript?",
    "answer": "1) call(thisArg, arg1, arg2, ...): explicitly invokes the function immediately with thisArg and comma-separated arguments. 2) apply(thisArg, [argsArray]): explicitly invokes the function immediately with thisArg and an array of arguments. 3) bind(thisArg, arg1, ...): does NOT invoke the function immediately; it returns a brand new function with its this context permanently bound to thisArg.",
    "explanation": "A function bound with bind() cannot have its this context overridden by subsequent calls to call() or apply().",
    "interviewAnswer": "1) call(thisArg, arg1, arg2, ...): explicitly invokes the function immediately with thisArg and comma-separated arguments. 2) apply(thisArg, [argsArray]): explicitly invokes the function immediately with thisArg and an array of arguments. 3) bind(thisArg, arg1, ...): does NOT invoke the function immediately; it returns a brand new function with its this context permanently bound to thisArg. A function bound with bind() cannot have its this context overridden by subsequent calls to call() or apply().",
    "importantPoints": [
      "1) call(thisArg, arg1, arg2, ...): explicitly invokes the function immediately with thisArg and comma-separated arguments. 2) apply(thisArg, [argsArray]): explicitly invokes the function immediately with thisArg and an array of arguments. 3) bind(thisArg, arg1, ...): does NOT invoke the function immediately; it returns a brand new function with its this context permanently bound to thisArg.",
      "A function bound with bind() cannot have its this context overridden by subsequent calls to call() or apply()."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "isImportant": true,
    "tags": [
      "javascript",
      "functions",
      "call-apply-bind",
      "this"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: const obj = { name: \"Alice\", getName: () => this.name }; console.log(obj.getName()); in a browser environment?",
    "answer": "Outputs undefined (or window.name if set). Because getName is an arrow function, its this is resolved lexically from the scope where obj is defined (the global window), NOT the obj object. Object literal curly braces {} do NOT create a lexical scope.",
    "explanation": "Arrow functions should not be used as methods on object literals when they need to reference the object via this.",
    "interviewAnswer": "Outputs undefined (or window.name if set). Because getName is an arrow function, its this is resolved lexically from the scope where obj is defined (the global window), NOT the obj object. Object literal curly braces {} do NOT create a lexical scope. Arrow functions should not be used as methods on object literals when they need to reference the object via this.",
    "importantPoints": [
      "Outputs undefined (or window.name if set). Because getName is an arrow function, its this is resolved lexically from the scope where obj is defined (the global window), NOT the obj object. Object literal curly braces {} do NOT create a lexical scope.",
      "Arrow functions should not be used as methods on object literals when they need to reference the object via this."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "functions",
      "arrow-functions",
      "this",
      "gotcha"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: const obj = { name: \"Alice\", greet() { console.log(this.name); } }; const greetFn = obj.greet; greetFn(); in non-strict mode vs strict mode?",
    "answer": "In non-strict mode, it outputs undefined (greetFn() is a standalone function invocation, so default binding sets this to window, where window.name is empty/undefined). In strict mode, it throws TypeError: Cannot read properties of undefined (reading 'name') because default binding leaves this as undefined.",
    "explanation": "Extracting a method from an object loses its implicit this binding—a notorious issue in React event handlers.",
    "interviewAnswer": "In non-strict mode, it outputs undefined (greetFn() is a standalone function invocation, so default binding sets this to window, where window.name is empty/undefined). In strict mode, it throws TypeError: Cannot read properties of undefined (reading 'name') because default binding leaves this as undefined. Extracting a method from an object loses its implicit this binding—a notorious issue in React event handlers.",
    "importantPoints": [
      "In non-strict mode, it outputs undefined (greetFn() is a standalone function invocation, so default binding sets this to window, where window.name is empty/undefined). In strict mode, it throws TypeError: Cannot read properties of undefined (reading 'name') because default binding leaves this as undefined.",
      "Extracting a method from an object loses its implicit this binding—a notorious issue in React event handlers."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "functions",
      "this",
      "lost-binding",
      "strict-mode"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "How do you implement a custom polyfill for Function.prototype.bind in JavaScript?",
    "answer": "Function.prototype.myBind = function(context, ...outerArgs) { const fn = this; if (typeof fn !== \"function\") throw new TypeError(\"Not callable\"); return function(...innerArgs) { return fn.apply(this instanceof fn ? this : context, [...outerArgs, ...innerArgs]); }; };.",
    "explanation": "A complete polyfill also accounts for when the bound function is invoked with the new keyword.",
    "interviewAnswer": "Function.prototype.myBind = function(context, ...outerArgs) { const fn = this; if (typeof fn !== \"function\") throw new TypeError(\"Not callable\"); return function(...innerArgs) { return fn.apply(this instanceof fn ? this : context, [...outerArgs, ...innerArgs]); }; };. A complete polyfill also accounts for when the bound function is invoked with the new keyword.",
    "importantPoints": [
      "Function.prototype.myBind = function(context, ...outerArgs) { const fn = this; if (typeof fn !== \"function\") throw new TypeError(\"Not callable\"); return function(...innerArgs) { return fn.apply(this instanceof fn ? this : context, [...outerArgs, ...innerArgs]); }; };.",
      "A complete polyfill also accounts for when the bound function is invoked with the new keyword."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "functions",
      "polyfill",
      "bind",
      "prototype"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is Currying in JavaScript, and how do you write a generic curry(fn) function that handles arbitrary arguments?",
    "answer": "Currying transforms a function with multiple arguments f(a, b, c) into a sequence of unary functions f(a)(b)(c). Implementation: function curry(fn) { return function curried(...args) { if (args.length >= fn.length) return fn.apply(this, args); return function(...moreArgs) { return curried.apply(this, [...args, ...moreArgs]); }; }; }.",
    "explanation": "Uses fn.length (the function arity) to determine when all required arguments have been received.",
    "interviewAnswer": "Currying transforms a function with multiple arguments f(a, b, c) into a sequence of unary functions f(a)(b)(c). Implementation: function curry(fn) { return function curried(...args) { if (args.length >= fn.length) return fn.apply(this, args); return function(...moreArgs) { return curried.apply(this, [...args, ...moreArgs]); }; }; }. Uses fn.length (the function arity) to determine when all required arguments have been received.",
    "importantPoints": [
      "Currying transforms a function with multiple arguments f(a, b, c) into a sequence of unary functions f(a)(b)(c). Implementation: function curry(fn) { return function curried(...args) { if (args.length >= fn.length) return fn.apply(this, args); return function(...moreArgs) { return curried.apply(this, [...args, ...moreArgs]); }; }; }.",
      "Uses fn.length (the function arity) to determine when all required arguments have been received."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "functions",
      "currying",
      "arity",
      "functional-programming"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the difference between Function.length and arguments.length?",
    "answer": "Function.length is the number of formal parameters declared in the function definition (excluding rest parameters and parameters with default values). arguments.length is the actual number of arguments passed into the function by the caller at runtime.",
    "explanation": "curry functions rely on fn.length to know when enough arguments have been accumulated.",
    "interviewAnswer": "Function.length is the number of formal parameters declared in the function definition (excluding rest parameters and parameters with default values). arguments.length is the actual number of arguments passed into the function by the caller at runtime. curry functions rely on fn.length to know when enough arguments have been accumulated.",
    "importantPoints": [
      "Function.length is the number of formal parameters declared in the function definition (excluding rest parameters and parameters with default values). arguments.length is the actual number of arguments passed into the function by the caller at runtime.",
      "curry functions rely on fn.length to know when enough arguments have been accumulated."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "function-length",
      "arguments-length",
      "arity"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "Can Arrow Functions be used as Constructors with the \"new\" keyword? What happens if you try?",
    "answer": "No. Arrow functions do not have an internal [[Construct]] method or a prototype property (ArrowFn.prototype is undefined). Invoking new on an arrow function immediately throws a TypeError: \"MyArrowFn is not a constructor\".",
    "explanation": "Arrow functions are strictly callable, not constructible.",
    "interviewAnswer": "No. Arrow functions do not have an internal [[Construct]] method or a prototype property (ArrowFn.prototype is undefined). Invoking new on an arrow function immediately throws a TypeError: \"MyArrowFn is not a constructor\". Arrow functions are strictly callable, not constructible.",
    "importantPoints": [
      "No. Arrow functions do not have an internal [[Construct]] method or a prototype property (ArrowFn.prototype is undefined). Invoking new on an arrow function immediately throws a TypeError: \"MyArrowFn is not a constructor\".",
      "Arrow functions are strictly callable, not constructible."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "arrow-functions",
      "constructors",
      "typeerror"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: function greet() { return this.name; } const person = { name: \"Bob\" }; const bound = greet.bind(person); const reBound = bound.bind({ name: \"Charlie\" }); console.log(reBound());?",
    "answer": "Outputs \"Bob\". Once a function has been bound using Function.prototype.bind(), its this context is permanently fixed to the first bound target. Subsequent calls to bind(), call(), or apply() cannot override the initial this binding.",
    "explanation": "Hard binding created by bind() cannot be superseded except by the new operator.",
    "interviewAnswer": "Outputs \"Bob\". Once a function has been bound using Function.prototype.bind(), its this context is permanently fixed to the first bound target. Subsequent calls to bind(), call(), or apply() cannot override the initial this binding. Hard binding created by bind() cannot be superseded except by the new operator.",
    "importantPoints": [
      "Outputs \"Bob\". Once a function has been bound using Function.prototype.bind(), its this context is permanently fixed to the first bound target. Subsequent calls to bind(), call(), or apply() cannot override the initial this binding.",
      "Hard binding created by bind() cannot be superseded except by the new operator."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "bind",
      "hard-binding",
      "this"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: const obj = { count: 10, doSomething() { setTimeout(function() { console.log(this.count); }, 100); } }; obj.doSomething(); in non-strict mode?",
    "answer": "Outputs undefined. setTimeout executes its callback as a standalone function invocation on the global window. Inside the callback function, this points to window (where window.count is undefined), losing the obj context.",
    "explanation": "Fix by replacing function() with an arrow function () => console.log(this.count) or binding this.",
    "interviewAnswer": "Outputs undefined. setTimeout executes its callback as a standalone function invocation on the global window. Inside the callback function, this points to window (where window.count is undefined), losing the obj context. Fix by replacing function() with an arrow function () => console.log(this.count) or binding this.",
    "importantPoints": [
      "Outputs undefined. setTimeout executes its callback as a standalone function invocation on the global window. Inside the callback function, this points to window (where window.count is undefined), losing the obj context.",
      "Fix by replacing function() with an arrow function () => console.log(this.count) or binding this."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "this",
      "settimeout",
      "callbacks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is a Pure Function, and why are pure functions fundamental to predictable software and React state management?",
    "answer": "A pure function has two characteristics: 1) Deterministic: given the exact same input arguments, it always returns the exact same result. 2) No Side Effects: it does not mutate external state, modify argument objects, perform I/O, or alter global variables.",
    "explanation": "Pure functions are easily testable, cacheable (memoizable), and prevent non-deterministic bugs in concurrent systems.",
    "interviewAnswer": "A pure function has two characteristics: 1) Deterministic: given the exact same input arguments, it always returns the exact same result. 2) No Side Effects: it does not mutate external state, modify argument objects, perform I/O, or alter global variables. Pure functions are easily testable, cacheable (memoizable), and prevent non-deterministic bugs in concurrent systems.",
    "importantPoints": [
      "A pure function has two characteristics: 1) Deterministic: given the exact same input arguments, it always returns the exact same result. 2) No Side Effects: it does not mutate external state, modify argument objects, perform I/O, or alter global variables.",
      "Pure functions are easily testable, cacheable (memoizable), and prevent non-deterministic bugs in concurrent systems."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "pure-functions",
      "functional-programming"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is a Higher-Order Function (HOF) in JavaScript? Give three built-in examples.",
    "answer": "A Higher-Order Function is a function that does at least one of the following: 1) Takes one or more functions as arguments, or 2) Returns a function as its result. Built-in examples on Array.prototype include map(), filter(), reduce(), find(), and sort().",
    "explanation": "Functions in JavaScript are First-Class Citizens, meaning they can be passed and returned like any other value.",
    "interviewAnswer": "A Higher-Order Function is a function that does at least one of the following: 1) Takes one or more functions as arguments, or 2) Returns a function as its result. Built-in examples on Array.prototype include map(), filter(), reduce(), find(), and sort(). Functions in JavaScript are First-Class Citizens, meaning they can be passed and returned like any other value.",
    "importantPoints": [
      "A Higher-Order Function is a function that does at least one of the following: 1) Takes one or more functions as arguments, or 2) Returns a function as its result. Built-in examples on Array.prototype include map(), filter(), reduce(), find(), and sort().",
      "Functions in JavaScript are First-Class Citizens, meaning they can be passed and returned like any other value."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "higher-order-functions",
      "first-class-citizens"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "How does the \"arguments\" object differ from Rest Parameters (...args) in modern JavaScript?",
    "answer": "1) arguments is an array-like object (has length and indexes, but lacks map, filter, etc.) and is NOT available in arrow functions. 2) Rest parameters (...args) is a real JavaScript Array instance with all Array.prototype methods, works in arrow functions, and allows capturing only trailing parameters (fn(a, b, ...rest)).",
    "explanation": "Rest parameters are standard in modern ES6; the arguments object is largely legacy.",
    "interviewAnswer": "1) arguments is an array-like object (has length and indexes, but lacks map, filter, etc.) and is NOT available in arrow functions. 2) Rest parameters (...args) is a real JavaScript Array instance with all Array.prototype methods, works in arrow functions, and allows capturing only trailing parameters (fn(a, b, ...rest)). Rest parameters are standard in modern ES6; the arguments object is largely legacy.",
    "importantPoints": [
      "1) arguments is an array-like object (has length and indexes, but lacks map, filter, etc.) and is NOT available in arrow functions. 2) Rest parameters (...args) is a real JavaScript Array instance with all Array.prototype methods, works in arrow functions, and allows capturing only trailing parameters (fn(a, b, ...rest)).",
      "Rest parameters are standard in modern ES6; the arguments object is largely legacy."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "isImportant": true,
    "tags": [
      "javascript",
      "functions",
      "arguments-object",
      "rest-parameters",
      "es6"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is Method Borrowing in JavaScript, and how does it work with Array.prototype.slice.call()?",
    "answer": "Method Borrowing allows an object to use a method from another object without inheriting it, using call() or apply() to supply its own context. A classic example was borrowing array methods on the arguments object: const argsArray = Array.prototype.slice.call(arguments); which executed slice using arguments as its this context.",
    "explanation": "Modern code replaces Array.prototype.slice.call(arguments) with Array.from(arguments) or [...arguments].",
    "interviewAnswer": "Method Borrowing allows an object to use a method from another object without inheriting it, using call() or apply() to supply its own context. A classic example was borrowing array methods on the arguments object: const argsArray = Array.prototype.slice.call(arguments); which executed slice using arguments as its this context. Modern code replaces Array.prototype.slice.call(arguments) with Array.from(arguments) or [...arguments].",
    "importantPoints": [
      "Method Borrowing allows an object to use a method from another object without inheriting it, using call() or apply() to supply its own context. A classic example was borrowing array methods on the arguments object: const argsArray = Array.prototype.slice.call(arguments); which executed slice using arguments as its this context.",
      "Modern code replaces Array.prototype.slice.call(arguments) with Array.from(arguments) or [...arguments]."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "method-borrowing",
      "call-apply",
      "arguments"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: function Foo() { this.x = 10; return { x: 20 }; } const f = new Foo(); console.log(f.x);?",
    "answer": "Outputs 20. When a constructor function is invoked with new, if it explicitly returns an OBJECT ({ x: 20 }), that returned object overwrites the newly created instance. If the constructor returns a primitive (e.g. return 100;), the return value is ignored and the new instance this is returned.",
    "explanation": "Crucial internal rule of the \"new\" operator in JavaScript.",
    "interviewAnswer": "Outputs 20. When a constructor function is invoked with new, if it explicitly returns an OBJECT ({ x: 20 }), that returned object overwrites the newly created instance. If the constructor returns a primitive (e.g. return 100;), the return value is ignored and the new instance this is returned. Crucial internal rule of the \"new\" operator in JavaScript.",
    "importantPoints": [
      "Outputs 20. When a constructor function is invoked with new, if it explicitly returns an OBJECT ({ x: 20 }), that returned object overwrites the newly created instance. If the constructor returns a primitive (e.g. return 100;), the return value is ignored and the new instance this is returned.",
      "Crucial internal rule of the \"new\" operator in JavaScript."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "functions",
      "new-operator",
      "constructors",
      "return-override"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: function Bar() { this.x = 10; return 100; } const b = new Bar(); console.log(b.x);?",
    "answer": "Outputs 10. When a constructor function returns a primitive (like number 100, string, or boolean), the JavaScript engine discards the return value and returns the newly instantiated instance this.",
    "explanation": "Only returning an Object or function overrides the instance created by new.",
    "interviewAnswer": "Outputs 10. When a constructor function returns a primitive (like number 100, string, or boolean), the JavaScript engine discards the return value and returns the newly instantiated instance this. Only returning an Object or function overrides the instance created by new.",
    "importantPoints": [
      "Outputs 10. When a constructor function returns a primitive (like number 100, string, or boolean), the JavaScript engine discards the return value and returns the newly instantiated instance this.",
      "Only returning an Object or function overrides the instance created by new."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "new-operator",
      "constructors",
      "primitives"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "How does Function Composition work in JavaScript, and how do you write a pipe(...fns) utility function?",
    "answer": "Function composition combines multiple functions where the output of each function is passed as the input to the next. A left-to-right pipe function is implemented with Array.prototype.reduce: const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);. (Right-to-left composition uses reduceRight).",
    "explanation": "A core architectural building block of functional pipelines (Redux middleware, RxJS).",
    "interviewAnswer": "Function composition combines multiple functions where the output of each function is passed as the input to the next. A left-to-right pipe function is implemented with Array.prototype.reduce: const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);. (Right-to-left composition uses reduceRight). A core architectural building block of functional pipelines (Redux middleware, RxJS).",
    "importantPoints": [
      "Function composition combines multiple functions where the output of each function is passed as the input to the next. A left-to-right pipe function is implemented with Array.prototype.reduce: const pipe = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);. (Right-to-left composition uses reduceRight).",
      "A core architectural building block of functional pipelines (Redux middleware, RxJS)."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "composition",
      "pipe",
      "reduce"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is Partial Application, and how does it differ from Currying?",
    "answer": "Partial application fixes a specific number of arguments of a multi-argument function, returning a new function that takes the REMAINING arguments all at once (e.g. f(a, b, c) -> f_applied(b, c)). Currying strictly transforms a function into a sequence of single-argument unary functions: f(a)(b)(c).",
    "explanation": "Function.prototype.bind(null, arg1, arg2) is a built-in form of partial application.",
    "interviewAnswer": "Partial application fixes a specific number of arguments of a multi-argument function, returning a new function that takes the REMAINING arguments all at once (e.g. f(a, b, c) -> f_applied(b, c)). Currying strictly transforms a function into a sequence of single-argument unary functions: f(a)(b)(c). Function.prototype.bind(null, arg1, arg2) is a built-in form of partial application.",
    "importantPoints": [
      "Partial application fixes a specific number of arguments of a multi-argument function, returning a new function that takes the REMAINING arguments all at once (e.g. f(a, b, c) -> f_applied(b, c)). Currying strictly transforms a function into a sequence of single-argument unary functions: f(a)(b)(c).",
      "Function.prototype.bind(null, arg1, arg2) is a built-in form of partial application."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Comparison",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "partial-application",
      "currying",
      "functional-programming"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: const person = { name: \"Alice\", show() { console.log(this.name); } }; setTimeout(person.show.bind(person), 10);?",
    "answer": "Outputs \"Alice\". Passing person.show.bind(person) returns a bound function whose this is permanently locked to person, preventing setTimeout from resetting this to window.",
    "explanation": "Standard technique for binding methods passed as callbacks before arrow functions became widespread.",
    "interviewAnswer": "Outputs \"Alice\". Passing person.show.bind(person) returns a bound function whose this is permanently locked to person, preventing setTimeout from resetting this to window. Standard technique for binding methods passed as callbacks before arrow functions became widespread.",
    "importantPoints": [
      "Outputs \"Alice\". Passing person.show.bind(person) returns a bound function whose this is permanently locked to person, preventing setTimeout from resetting this to window.",
      "Standard technique for binding methods passed as callbacks before arrow functions became widespread."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "bind",
      "settimeout",
      "this"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: function test(a, b = 2, c) { console.log(test.length); } test(1);?",
    "answer": "Outputs 1. Function.length counts the number of formal parameters up to the FIRST parameter with a default value. Because parameter b has a default value (b = 2), parameters from b onwards are excluded from length.",
    "explanation": "Another subtle ECMAScript specification detail tested in advanced interviews.",
    "interviewAnswer": "Outputs 1. Function.length counts the number of formal parameters up to the FIRST parameter with a default value. Because parameter b has a default value (b = 2), parameters from b onwards are excluded from length. Another subtle ECMAScript specification detail tested in advanced interviews.",
    "importantPoints": [
      "Outputs 1. Function.length counts the number of formal parameters up to the FIRST parameter with a default value. Because parameter b has a default value (b = 2), parameters from b onwards are excluded from length.",
      "Another subtle ECMAScript specification detail tested in advanced interviews."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "function-length",
      "default-parameters"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: const add = (a = 1, b = a + 2) => a + b; console.log(add()); console.log(add(5));?",
    "answer": "add() outputs 4: a defaults to 1; b evaluates to 1 + 2 = 3; 1 + 3 = 4. add(5) outputs 12: a is 5; b evaluates to 5 + 2 = 7; 5 + 7 = 12.",
    "explanation": "Default parameters can refer to previous parameters declared to their left in the parameter list.",
    "interviewAnswer": "add() outputs 4: a defaults to 1; b evaluates to 1 + 2 = 3; 1 + 3 = 4. add(5) outputs 12: a is 5; b evaluates to 5 + 2 = 7; 5 + 7 = 12. Default parameters can refer to previous parameters declared to their left in the parameter list.",
    "importantPoints": [
      "add() outputs 4: a defaults to 1; b evaluates to 1 + 2 = 3; 1 + 3 = 4. add(5) outputs 12: a is 5; b evaluates to 5 + 2 = 7; 5 + 7 = 12.",
      "Default parameters can refer to previous parameters declared to their left in the parameter list."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "default-parameters",
      "expressions"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What happens if a default parameter refers to a parameter declared to its right: function test(a = b, b = 1) {} test();?",
    "answer": "Throws a ReferenceError: Cannot access 'b' before initialization. Parameters are evaluated from left to right in their own intermediate scope; trying to read b before it is initialized violates the Temporal Dead Zone.",
    "explanation": "Parameters have a TDZ identical to let and const variables.",
    "interviewAnswer": "Throws a ReferenceError: Cannot access 'b' before initialization. Parameters are evaluated from left to right in their own intermediate scope; trying to read b before it is initialized violates the Temporal Dead Zone. Parameters have a TDZ identical to let and const variables.",
    "importantPoints": [
      "Throws a ReferenceError: Cannot access 'b' before initialization. Parameters are evaluated from left to right in their own intermediate scope; trying to read b before it is initialized violates the Temporal Dead Zone.",
      "Parameters have a TDZ identical to let and const variables."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "default-parameters",
      "tdz",
      "referenceerror"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: function fn() { return () => { return () => { console.log(this.id); }; }; } fn.call({ id: \"level1\" })()();?",
    "answer": "Outputs \"level1\". Both nested arrow functions inherit this lexically. The outermost regular function fn was called with { id: \"level1\" }, so all inner arrow functions permanently resolve this to that object.",
    "explanation": "Arrow functions chain lexical this resolution up through arbitrary levels of nesting.",
    "interviewAnswer": "Outputs \"level1\". Both nested arrow functions inherit this lexically. The outermost regular function fn was called with { id: \"level1\" }, so all inner arrow functions permanently resolve this to that object. Arrow functions chain lexical this resolution up through arbitrary levels of nesting.",
    "importantPoints": [
      "Outputs \"level1\". Both nested arrow functions inherit this lexically. The outermost regular function fn was called with { id: \"level1\" }, so all inner arrow functions permanently resolve this to that object.",
      "Arrow functions chain lexical this resolution up through arbitrary levels of nesting."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "arrow-functions",
      "lexical-this",
      "nesting"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "Why does using an arrow function as an object method inside a class constructor behave differently than on an object literal?",
    "answer": "In a class: class Foo { name = \"Alice\"; getName = () => this.name; }, the arrow function is created during INSTANCE construction, where the lexical this is the newly created instance. On an object literal: const obj = { getName: () => this.name }, the literal does not have an execution context, so this is the outer global window.",
    "explanation": "Class fields with arrow functions create autobound methods per instance.",
    "interviewAnswer": "In a class: class Foo { name = \"Alice\"; getName = () => this.name; }, the arrow function is created during INSTANCE construction, where the lexical this is the newly created instance. On an object literal: const obj = { getName: () => this.name }, the literal does not have an execution context, so this is the outer global window. Class fields with arrow functions create autobound methods per instance.",
    "importantPoints": [
      "In a class: class Foo { name = \"Alice\"; getName = () => this.name; }, the arrow function is created during INSTANCE construction, where the lexical this is the newly created instance. On an object literal: const obj = { getName: () => this.name }, the literal does not have an execution context, so this is the outer global window.",
      "Class fields with arrow functions create autobound methods per instance."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "functions",
      "classes",
      "arrow-functions",
      "class-fields"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the performance trade-off of defining methods as arrow function class fields versus prototype methods in ES6 classes?",
    "answer": "Arrow function class fields (handleClick = () => {}) create a unique function instance in memory for EVERY instantiated object. Prototype methods (handleClick() {}) exist once on the prototype object and are shared across all instances. Arrow fields auto-bind this, but for 10,000 instances, they allocate 10,000 extra function closures in heap memory.",
    "explanation": "Trade-off between automatic binding convenience and memory consumption.",
    "interviewAnswer": "Arrow function class fields (handleClick = () => {}) create a unique function instance in memory for EVERY instantiated object. Prototype methods (handleClick() {}) exist once on the prototype object and are shared across all instances. Arrow fields auto-bind this, but for 10,000 instances, they allocate 10,000 extra function closures in heap memory. Trade-off between automatic binding convenience and memory consumption.",
    "importantPoints": [
      "Arrow function class fields (handleClick = () => {}) create a unique function instance in memory for EVERY instantiated object. Prototype methods (handleClick() {}) exist once on the prototype object and are shared across all instances. Arrow fields auto-bind this, but for 10,000 instances, they allocate 10,000 extra function closures in heap memory.",
      "Trade-off between automatic binding convenience and memory consumption."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "javascript",
      "functions",
      "classes",
      "arrow-functions",
      "memory-performance",
      "prototypes"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: const obj = { a: 1 }; function test(x) { x.a = 2; } test(Object.assign({}, obj)); console.log(obj.a);?",
    "answer": "Outputs 1. Object.assign({}, obj) creates a shallow clone of obj. Mutating the clone x.a = 2 does not affect the original object obj.a.",
    "explanation": "Shallow copying prevents top-level property mutations.",
    "interviewAnswer": "Outputs 1. Object.assign({}, obj) creates a shallow clone of obj. Mutating the clone x.a = 2 does not affect the original object obj.a. Shallow copying prevents top-level property mutations.",
    "importantPoints": [
      "Outputs 1. Object.assign({}, obj) creates a shallow clone of obj. Mutating the clone x.a = 2 does not affect the original object obj.a.",
      "Shallow copying prevents top-level property mutations."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "object-assign",
      "cloning"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: function a() { return 1; } var a; console.log(typeof a);?",
    "answer": "Outputs \"function\". Function declarations are hoisted completely with their definitions. The uninitialized var a declaration is ignored because identifier a already exists in the execution environment.",
    "explanation": "Uninitialized var declarations never overwrite existing hoisted functions.",
    "interviewAnswer": "Outputs \"function\". Function declarations are hoisted completely with their definitions. The uninitialized var a declaration is ignored because identifier a already exists in the execution environment. Uninitialized var declarations never overwrite existing hoisted functions.",
    "importantPoints": [
      "Outputs \"function\". Function declarations are hoisted completely with their definitions. The uninitialized var a declaration is ignored because identifier a already exists in the execution environment.",
      "Uninitialized var declarations never overwrite existing hoisted functions."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "hoisting",
      "typeof"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: function a() { return 1; } var a = 2; console.log(typeof a);?",
    "answer": "Outputs \"number\". The function declaration a is hoisted during creation phase, but the runtime execution phase reaches a = 2, which reassigns the identifier to a number.",
    "explanation": "Assignments during execution phase overwrite earlier hoisted function references.",
    "interviewAnswer": "Outputs \"number\". The function declaration a is hoisted during creation phase, but the runtime execution phase reaches a = 2, which reassigns the identifier to a number. Assignments during execution phase overwrite earlier hoisted function references.",
    "importantPoints": [
      "Outputs \"number\". The function declaration a is hoisted during creation phase, but the runtime execution phase reaches a = 2, which reassigns the identifier to a number.",
      "Assignments during execution phase overwrite earlier hoisted function references."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "hoisting",
      "reassignment"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the new.target meta-property in JavaScript functions, and how can it enforce that a function is called with \"new\"?",
    "answer": "new.target references the constructor function that was invoked with new. If a function is called normally without new (e.g. Foo()), new.target evaluates to undefined. Inside Foo: if (!new.target) return new Foo(); guarantees that callers always receive a new instance even if they forget the new keyword.",
    "explanation": "Standard ES6 meta-property replacing older instanceof checks.",
    "interviewAnswer": "new.target references the constructor function that was invoked with new. If a function is called normally without new (e.g. Foo()), new.target evaluates to undefined. Inside Foo: if (!new.target) return new Foo(); guarantees that callers always receive a new instance even if they forget the new keyword. Standard ES6 meta-property replacing older instanceof checks.",
    "importantPoints": [
      "new.target references the constructor function that was invoked with new. If a function is called normally without new (e.g. Foo()), new.target evaluates to undefined. Inside Foo: if (!new.target) return new Foo(); guarantees that callers always receive a new instance even if they forget the new keyword.",
      "Standard ES6 meta-property replacing older instanceof checks."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "new-target",
      "constructors"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: const multiply = (a) => (b) => a * b; const double = multiply(2); console.log(double(5));?",
    "answer": "Outputs 10. multiply is a curried arrow function. Calling multiply(2) returns an inner arrow function that retains a = 2 in its closure. Calling double(5) evaluates 2 * 5 = 10.",
    "explanation": "Modern concise arrow function currying syntax.",
    "interviewAnswer": "Outputs 10. multiply is a curried arrow function. Calling multiply(2) returns an inner arrow function that retains a = 2 in its closure. Calling double(5) evaluates 2 * 5 = 10. Modern concise arrow function currying syntax.",
    "importantPoints": [
      "Outputs 10. multiply is a curried arrow function. Calling multiply(2) returns an inner arrow function that retains a = 2 in its closure. Calling double(5) evaluates 2 * 5 = 10.",
      "Modern concise arrow function currying syntax."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "currying",
      "arrow-functions"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: const numbers = [1, 2, 3]; const result = numbers.map(function(num) { return num * this.factor; }, { factor: 10 }); console.log(result);?",
    "answer": "Outputs [10, 20, 30]. Array.prototype methods like map, filter, and forEach accept an optional second parameter thisArg. If provided, the callback function binds its this to that object (provided the callback is a regular function, not an arrow function).",
    "explanation": "Frequently overlooked feature of array iteration methods.",
    "interviewAnswer": "Outputs [10, 20, 30]. Array.prototype methods like map, filter, and forEach accept an optional second parameter thisArg. If provided, the callback function binds its this to that object (provided the callback is a regular function, not an arrow function). Frequently overlooked feature of array iteration methods.",
    "importantPoints": [
      "Outputs [10, 20, 30]. Array.prototype methods like map, filter, and forEach accept an optional second parameter thisArg. If provided, the callback function binds its this to that object (provided the callback is a regular function, not an arrow function).",
      "Frequently overlooked feature of array iteration methods."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "array-methods",
      "this-arg",
      "map"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is an anonymous function in JavaScript, and what is the primary disadvantage of anonymous functions when debugging stack traces?",
    "answer": "An anonymous function is a function created without a name identifier: const fn = function() {}. Its primary disadvantage is that in error stack traces and profiler flame charts, it appears as \"(anonymous function)\" rather than a clear descriptive name, making stack traces and crash reports harder to debug.",
    "explanation": "Named function expressions (const fn = function parseData() {}) provide descriptive stack traces.",
    "interviewAnswer": "An anonymous function is a function created without a name identifier: const fn = function() {}. Its primary disadvantage is that in error stack traces and profiler flame charts, it appears as \"(anonymous function)\" rather than a clear descriptive name, making stack traces and crash reports harder to debug. Named function expressions (const fn = function parseData() {}) provide descriptive stack traces.",
    "importantPoints": [
      "An anonymous function is a function created without a name identifier: const fn = function() {}. Its primary disadvantage is that in error stack traces and profiler flame charts, it appears as \"(anonymous function)\" rather than a clear descriptive name, making stack traces and crash reports harder to debug.",
      "Named function expressions (const fn = function parseData() {}) provide descriptive stack traces."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "anonymous-functions",
      "debugging",
      "stack-traces"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: function showArgs() { console.log(Array.isArray(arguments)); } showArgs(1, 2);?",
    "answer": "Outputs false. arguments is an \"array-like\" object ({ 0: 1, 1: 2, length: 2 }), but its prototype is Object.prototype, not Array.prototype. Array.isArray(arguments) is false.",
    "explanation": "To convert it to an array, use Array.from(arguments) or [...arguments].",
    "interviewAnswer": "Outputs false. arguments is an \"array-like\" object ({ 0: 1, 1: 2, length: 2 }), but its prototype is Object.prototype, not Array.prototype. Array.isArray(arguments) is false. To convert it to an array, use Array.from(arguments) or [...arguments].",
    "importantPoints": [
      "Outputs false. arguments is an \"array-like\" object ({ 0: 1, 1: 2, length: 2 }), but its prototype is Object.prototype, not Array.prototype. Array.isArray(arguments) is false.",
      "To convert it to an array, use Array.from(arguments) or [...arguments]."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "arguments",
      "array-isarray"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "How can you prevent infinite recursion Call Stack Overflow (Maximum call stack size exceeded) in deeply recursive functions?",
    "answer": "1) Convert the recursion to an iterative loop using an explicit stack/queue data structure. 2) Use Trampolining (functions returning thunks that a while loop executes sequentially on the heap without growing the call stack). 3) Break work across event loop ticks using setTimeout or setImmediate.",
    "explanation": "JavaScript call stacks are limited to ~10,000 frames in V8.",
    "interviewAnswer": "1) Convert the recursion to an iterative loop using an explicit stack/queue data structure. 2) Use Trampolining (functions returning thunks that a while loop executes sequentially on the heap without growing the call stack). 3) Break work across event loop ticks using setTimeout or setImmediate. JavaScript call stacks are limited to ~10,000 frames in V8.",
    "importantPoints": [
      "1) Convert the recursion to an iterative loop using an explicit stack/queue data structure. 2) Use Trampolining (functions returning thunks that a while loop executes sequentially on the heap without growing the call stack). 3) Break work across event loop ticks using setTimeout or setImmediate.",
      "JavaScript call stacks are limited to ~10,000 frames in V8."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "javascript",
      "functions",
      "recursion",
      "call-stack",
      "trampoline"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is a Trampoline in JavaScript functional programming?",
    "answer": "A trampoline is a utility function that takes a recursive function and executes it iteratively in a loop: const trampoline = fn => (...args) => { let result = fn(...args); while (typeof result === \"function\") result = result(); return result; };. The recursive function returns a thunk (a wrapper function) instead of calling itself directly, keeping the call stack depth at 1.",
    "explanation": "Allows arbitrarily deep recursion without stack overflow.",
    "interviewAnswer": "A trampoline is a utility function that takes a recursive function and executes it iteratively in a loop: const trampoline = fn => (...args) => { let result = fn(...args); while (typeof result === \"function\") result = result(); return result; };. The recursive function returns a thunk (a wrapper function) instead of calling itself directly, keeping the call stack depth at 1. Allows arbitrarily deep recursion without stack overflow.",
    "importantPoints": [
      "A trampoline is a utility function that takes a recursive function and executes it iteratively in a loop: const trampoline = fn => (...args) => { let result = fn(...args); while (typeof result === \"function\") result = result(); return result; };. The recursive function returns a thunk (a wrapper function) instead of calling itself directly, keeping the call stack depth at 1.",
      "Allows arbitrarily deep recursion without stack overflow."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "trampoline",
      "tail-call",
      "recursion"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: function greet(name) { name = \"Bob\"; console.log(arguments[0]); } greet(\"Alice\"); in non-strict mode vs strict mode?",
    "answer": "In non-strict mode, it outputs \"Bob\" because the arguments object shares two-way sync with non-rest, non-default parameters. In strict mode (\"use strict\"), it outputs \"Alice\" because strict mode decouples the arguments object from parameter mutations.",
    "explanation": "Another subtle safety improvement of Strict Mode.",
    "interviewAnswer": "In non-strict mode, it outputs \"Bob\" because the arguments object shares two-way sync with non-rest, non-default parameters. In strict mode (\"use strict\"), it outputs \"Alice\" because strict mode decouples the arguments object from parameter mutations. Another subtle safety improvement of Strict Mode.",
    "importantPoints": [
      "In non-strict mode, it outputs \"Bob\" because the arguments object shares two-way sync with non-rest, non-default parameters. In strict mode (\"use strict\"), it outputs \"Alice\" because strict mode decouples the arguments object from parameter mutations.",
      "Another subtle safety improvement of Strict Mode."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "arguments",
      "strict-mode",
      "two-way-binding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: const obj = { a: 1, b: function() { return this.a; } }; const copy = { a: 2, b: obj.b }; console.log(copy.b());?",
    "answer": "Outputs 2. When copy.b() is invoked, the call site is copy, so implicit binding assigns this to copy, reading copy.a (2).",
    "explanation": "The call-site determines implicit this binding.",
    "interviewAnswer": "Outputs 2. When copy.b() is invoked, the call site is copy, so implicit binding assigns this to copy, reading copy.a (2). The call-site determines implicit this binding.",
    "importantPoints": [
      "Outputs 2. When copy.b() is invoked, the call site is copy, so implicit binding assigns this to copy, reading copy.a (2).",
      "The call-site determines implicit this binding."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "this",
      "implicit-binding",
      "call-site"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: const person = { name: \"Alice\", sayHi: () => { console.log(this.name); } }; person.sayHi.call({ name: \"Bob\" }); in browser?",
    "answer": "Outputs undefined (or window.name). Arrow functions ignore explicit binding via call(), apply(), and bind(); their this remains bound to the enclosing lexical scope (window) where person was created.",
    "explanation": "Explicit binding methods cannot override arrow function lexical this.",
    "interviewAnswer": "Outputs undefined (or window.name). Arrow functions ignore explicit binding via call(), apply(), and bind(); their this remains bound to the enclosing lexical scope (window) where person was created. Explicit binding methods cannot override arrow function lexical this.",
    "importantPoints": [
      "Outputs undefined (or window.name). Arrow functions ignore explicit binding via call(), apply(), and bind(); their this remains bound to the enclosing lexical scope (window) where person was created.",
      "Explicit binding methods cannot override arrow function lexical this."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "arrow-functions",
      "call",
      "this"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "How do you check if a function was invoked as a constructor (with \"new\") in pre-ES6 code before new.target existed?",
    "answer": "Using instanceof: if (!(this instanceof MyConstructor)) { return new MyConstructor(...arguments); }. If called with new, this is an instance of MyConstructor. If called normally, this is window or undefined.",
    "explanation": "Used by libraries like jQuery to allow calling $() with or without new.",
    "interviewAnswer": "Using instanceof: if (!(this instanceof MyConstructor)) { return new MyConstructor(...arguments); }. If called with new, this is an instance of MyConstructor. If called normally, this is window or undefined. Used by libraries like jQuery to allow calling $() with or without new.",
    "importantPoints": [
      "Using instanceof: if (!(this instanceof MyConstructor)) { return new MyConstructor(...arguments); }. If called with new, this is an instance of MyConstructor. If called normally, this is window or undefined.",
      "Used by libraries like jQuery to allow calling $() with or without new."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "constructors",
      "instanceof",
      "pre-es6"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: function foo() { return this; } console.log(foo() === window); in browser non-strict mode vs strict mode?",
    "answer": "In non-strict mode, it outputs true (default binding sets this to the global window). In strict mode, it outputs false (default binding sets this to undefined; undefined === window is false).",
    "explanation": "Default binding behavior in strict mode.",
    "interviewAnswer": "In non-strict mode, it outputs true (default binding sets this to the global window). In strict mode, it outputs false (default binding sets this to undefined; undefined === window is false). Default binding behavior in strict mode.",
    "importantPoints": [
      "In non-strict mode, it outputs true (default binding sets this to the global window). In strict mode, it outputs false (default binding sets this to undefined; undefined === window is false).",
      "Default binding behavior in strict mode."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "this",
      "default-binding",
      "strict-mode"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "Can an arrow function have duplicate named parameters in non-strict mode (e.g. const fn = (a, a) => {})?",
    "answer": "No. Arrow functions strictly forbid duplicate parameter names and throw a compile-time SyntaxError: \"Duplicate parameter name not allowed in this context\", regardless of whether strict mode is enabled.",
    "explanation": "Arrow functions enforce strict modern syntax rules universally.",
    "interviewAnswer": "No. Arrow functions strictly forbid duplicate parameter names and throw a compile-time SyntaxError: \"Duplicate parameter name not allowed in this context\", regardless of whether strict mode is enabled. Arrow functions enforce strict modern syntax rules universally.",
    "importantPoints": [
      "No. Arrow functions strictly forbid duplicate parameter names and throw a compile-time SyntaxError: \"Duplicate parameter name not allowed in this context\", regardless of whether strict mode is enabled.",
      "Arrow functions enforce strict modern syntax rules universally."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "arrow-functions",
      "syntaxerror",
      "parameters"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: const obj = { val: 100, getVal: function() { const inner = () => this.val; return inner(); } }; console.log(obj.getVal());?",
    "answer": "Outputs 100. inner is an arrow function defined inside the regular function getVal. Its lexical this resolves to getVal's this, which is obj (implicit binding).",
    "explanation": "Standard idiomatic use of arrow functions for preserving this inside methods.",
    "interviewAnswer": "Outputs 100. inner is an arrow function defined inside the regular function getVal. Its lexical this resolves to getVal's this, which is obj (implicit binding). Standard idiomatic use of arrow functions for preserving this inside methods.",
    "importantPoints": [
      "Outputs 100. inner is an arrow function defined inside the regular function getVal. Its lexical this resolves to getVal's this, which is obj (implicit binding).",
      "Standard idiomatic use of arrow functions for preserving this inside methods."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "arrow-functions",
      "lexical-this"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: function show(a, b) { console.log(arguments[0], arguments[1]); arguments[0] = 99; console.log(a); } show(1, 2); in non-strict mode?",
    "answer": "Outputs \"1 2\", followed by \"99\". In non-strict mode, modifying the arguments object indices directly updates the corresponding named parameter variables.",
    "explanation": "Demonstrates the legacy parameter-arguments linkage.",
    "interviewAnswer": "Outputs \"1 2\", followed by \"99\". In non-strict mode, modifying the arguments object indices directly updates the corresponding named parameter variables. Demonstrates the legacy parameter-arguments linkage.",
    "importantPoints": [
      "Outputs \"1 2\", followed by \"99\". In non-strict mode, modifying the arguments object indices directly updates the corresponding named parameter variables.",
      "Demonstrates the legacy parameter-arguments linkage."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "arguments",
      "mutations"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the difference between a function expression with an identifier (Named Function Expression) and a standard function expression?",
    "answer": "A Named Function Expression: const fn = function myName() { ... } gives the function an internal name myName. The name myName is accessible ONLY inside the function body itself (useful for recursion or self-referencing), and is omitted from the outer scope while providing clean names in stack traces.",
    "explanation": "const fn = function() {} has no name in older engines, though modern engines infer \"fn\".",
    "interviewAnswer": "A Named Function Expression: const fn = function myName() { ... } gives the function an internal name myName. The name myName is accessible ONLY inside the function body itself (useful for recursion or self-referencing), and is omitted from the outer scope while providing clean names in stack traces. const fn = function() {} has no name in older engines, though modern engines infer \"fn\".",
    "importantPoints": [
      "A Named Function Expression: const fn = function myName() { ... } gives the function an internal name myName. The name myName is accessible ONLY inside the function body itself (useful for recursion or self-referencing), and is omitted from the outer scope while providing clean names in stack traces.",
      "const fn = function() {} has no name in older engines, though modern engines infer \"fn\"."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "named-function-expressions",
      "recursion"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: var f = function bar() { return typeof bar; }; console.log(typeof bar); console.log(f());?",
    "answer": "Outputs \"undefined\", then \"function\". The identifier bar is scoped exclusively to the internal function body and does not exist in the outer scope (where typeof bar is \"undefined\"). Inside the function, bar exists and is of type \"function\".",
    "explanation": "Named function expressions keep their name isolated from enclosing scope.",
    "interviewAnswer": "Outputs \"undefined\", then \"function\". The identifier bar is scoped exclusively to the internal function body and does not exist in the outer scope (where typeof bar is \"undefined\"). Inside the function, bar exists and is of type \"function\". Named function expressions keep their name isolated from enclosing scope.",
    "importantPoints": [
      "Outputs \"undefined\", then \"function\". The identifier bar is scoped exclusively to the internal function body and does not exist in the outer scope (where typeof bar is \"undefined\"). Inside the function, bar exists and is of type \"function\".",
      "Named function expressions keep their name isolated from enclosing scope."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "named-function-expressions",
      "scoping"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "How does the spread operator work in function calls (...args) versus Function.prototype.apply?",
    "answer": "fn(...args) and fn.apply(null, args) both unpack an array of values as individual arguments to a function. The spread operator (...) is cleaner syntax, does not require passing a dummy null this context, works with any iterable (including Set and Map), and can be combined with other arguments (fn(1, ...args, 2)).",
    "explanation": "ES6 spread syntax completely replaced Function.prototype.apply for argument spreading.",
    "interviewAnswer": "fn(...args) and fn.apply(null, args) both unpack an array of values as individual arguments to a function. The spread operator (...) is cleaner syntax, does not require passing a dummy null this context, works with any iterable (including Set and Map), and can be combined with other arguments (fn(1, ...args, 2)). ES6 spread syntax completely replaced Function.prototype.apply for argument spreading.",
    "importantPoints": [
      "fn(...args) and fn.apply(null, args) both unpack an array of values as individual arguments to a function. The spread operator (...) is cleaner syntax, does not require passing a dummy null this context, works with any iterable (including Set and Map), and can be combined with other arguments (fn(1, ...args, 2)).",
      "ES6 spread syntax completely replaced Function.prototype.apply for argument spreading."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "spread-operator",
      "apply",
      "es6"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: function test() { return arguments.slice(1); } test(1, 2, 3);?",
    "answer": "Throws TypeError: arguments.slice is not a function. arguments does not inherit from Array.prototype and lacks the slice method.",
    "explanation": "Must use Array.prototype.slice.call(arguments, 1) or Array.from(arguments).slice(1).",
    "interviewAnswer": "Throws TypeError: arguments.slice is not a function. arguments does not inherit from Array.prototype and lacks the slice method. Must use Array.prototype.slice.call(arguments, 1) or Array.from(arguments).slice(1).",
    "importantPoints": [
      "Throws TypeError: arguments.slice is not a function. arguments does not inherit from Array.prototype and lacks the slice method.",
      "Must use Array.prototype.slice.call(arguments, 1) or Array.from(arguments).slice(1)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "arguments",
      "slice",
      "typeerror"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "What is the output of: const obj = { count: 0, inc: () => ++this.count }; obj.inc(); console.log(obj.count); in browser non-strict mode?",
    "answer": "Outputs 0. The arrow function inc resolves this to the global window, incrementing window.count (which creates NaN if undefined). obj.count remains 0.",
    "explanation": "A common bug when converting traditional methods to arrow functions blindly.",
    "interviewAnswer": "Outputs 0. The arrow function inc resolves this to the global window, incrementing window.count (which creates NaN if undefined). obj.count remains 0. A common bug when converting traditional methods to arrow functions blindly.",
    "importantPoints": [
      "Outputs 0. The arrow function inc resolves this to the global window, incrementing window.count (which creates NaN if undefined). obj.count remains 0.",
      "A common bug when converting traditional methods to arrow functions blindly."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "arrow-functions",
      "this",
      "mutations"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "functions",
    "question": "Why should you avoid using arguments.callee in modern JavaScript?",
    "answer": "arguments.callee refers to the currently executing function, historically used for anonymous recursion. It is strictly forbidden in Strict Mode (throws TypeError) because it prevents compiler inlining, tail-call optimizations, and breaks encapsulation.",
    "explanation": "Use named function expressions instead of arguments.callee.",
    "interviewAnswer": "arguments.callee refers to the currently executing function, historically used for anonymous recursion. It is strictly forbidden in Strict Mode (throws TypeError) because it prevents compiler inlining, tail-call optimizations, and breaks encapsulation. Use named function expressions instead of arguments.callee.",
    "importantPoints": [
      "arguments.callee refers to the currently executing function, historically used for anonymous recursion. It is strictly forbidden in Strict Mode (throws TypeError) because it prevents compiler inlining, tail-call optimizations, and breaks encapsulation.",
      "Use named function expressions instead of arguments.callee."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "functions",
      "arguments-callee",
      "strict-mode",
      "deprecated"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
