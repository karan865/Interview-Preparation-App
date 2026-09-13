import { SeedQuestion } from '../types';

export const javascriptAdvancedQuestions: SeedQuestion[] = [
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "A JavaScript application consumes more memory over time and eventually crashes. How would you investigate a possible memory leak?",
    "answer": "1) Take Heap Snapshots in Chrome DevTools Memory tab at intervals and use \"Comparison\" view to identify objects retained between snapshots. 2) Record an Allocation Instrumentation on Timeline to see real-time object allocations. 3) Inspect the \"Retainers\" tree to find the GC Root retaining memory (e.g. uncleared timers, detached DOM nodes, global window listeners, closures). 4) In Node.js, take snapshots via v8.writeHeapSnapshot() or inspect process.memoryUsage().",
    "explanation": "Heap snapshots + comparison view reveal retained objects that GC cannot collect.",
    "interviewAnswer": "1) Take Heap Snapshots in Chrome DevTools Memory tab at intervals and use \"Comparison\" view to identify objects retained between snapshots. 2) Record an Allocation Instrumentation on Timeline to see real-time object allocations. 3) Inspect the \"Retainers\" tree to find the GC Root retaining memory (e.g. uncleared timers, detached DOM nodes, global window listeners, closures). 4) In Node.js, take snapshots via v8.writeHeapSnapshot() or inspect process.memoryUsage(). Heap snapshots + comparison view reveal retained objects that GC cannot collect.",
    "importantPoints": [
      "1) Take Heap Snapshots in Chrome DevTools Memory tab at intervals and use \"Comparison\" view to identify objects retained between snapshots. 2) Record an Allocation Instrumentation on Timeline to see real-time object allocations. 3) Inspect the \"Retainers\" tree to find the GC Root retaining memory (e.g. uncleared timers, detached DOM nodes, global window listeners, closures). 4) In Node.js, take snapshots via v8.writeHeapSnapshot() or inspect process.memoryUsage().",
      "Heap snapshots + comparison view reveal retained objects that GC cannot collect."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Logical / Scenario-Based",
    "isImportant": true,
    "tags": [
      "javascript",
      "memory-leaks",
      "debugging",
      "devtools",
      "production-scenario"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "How does the V8 Garbage Collector Mark-and-Sweep algorithm work, and what are GC Roots?",
    "answer": "V8 uses a Generational Mark-and-Sweep algorithm. GC Roots (global objects, currently active Call Stack local variables, active timers, DOM tree) are identified. In the Mark phase, the engine traverses reference pointers from GC Roots, marking all reachable objects. In the Sweep phase, memory occupied by unmarked (unreachable) objects is reclaimed. Generational GC splits heap into Young (Scavenger semi-spaces) and Old Generation.",
    "explanation": "Objects unreachable from any GC Root are reclaimed, safely resolving circular references.",
    "interviewAnswer": "V8 uses a Generational Mark-and-Sweep algorithm. GC Roots (global objects, currently active Call Stack local variables, active timers, DOM tree) are identified. In the Mark phase, the engine traverses reference pointers from GC Roots, marking all reachable objects. In the Sweep phase, memory occupied by unmarked (unreachable) objects is reclaimed. Generational GC splits heap into Young (Scavenger semi-spaces) and Old Generation. Objects unreachable from any GC Root are reclaimed, safely resolving circular references.",
    "importantPoints": [
      "V8 uses a Generational Mark-and-Sweep algorithm. GC Roots (global objects, currently active Call Stack local variables, active timers, DOM tree) are identified. In the Mark phase, the engine traverses reference pointers from GC Roots, marking all reachable objects. In the Sweep phase, memory occupied by unmarked (unreachable) objects is reclaimed. Generational GC splits heap into Young (Scavenger semi-spaces) and Old Generation.",
      "Objects unreachable from any GC Root are reclaimed, safely resolving circular references."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "v8",
      "garbage-collection",
      "mark-and-sweep",
      "gc-roots"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What are Detached DOM Nodes, and how do they cause insidious memory leaks in JavaScript applications?",
    "answer": "A Detached DOM Node occurs when a DOM element is removed from the active document tree (e.g. element.remove()), but a JavaScript variable, array, cache, or event listener closure still retains a reference to that element or its children. Because JavaScript holds a reference, the browser cannot free the DOM node and its entire subtree from memory.",
    "explanation": "Removed from DOM tree but retained in JS heap = detached DOM tree memory leak.",
    "interviewAnswer": "A Detached DOM Node occurs when a DOM element is removed from the active document tree (e.g. element.remove()), but a JavaScript variable, array, cache, or event listener closure still retains a reference to that element or its children. Because JavaScript holds a reference, the browser cannot free the DOM node and its entire subtree from memory. Removed from DOM tree but retained in JS heap = detached DOM tree memory leak.",
    "importantPoints": [
      "A Detached DOM Node occurs when a DOM element is removed from the active document tree (e.g. element.remove()), but a JavaScript variable, array, cache, or event listener closure still retains a reference to that element or its children. Because JavaScript holds a reference, the browser cannot free the DOM node and its entire subtree from memory.",
      "Removed from DOM tree but retained in JS heap = detached DOM tree memory leak."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "memory-leaks",
      "dom",
      "detached-nodes",
      "garbage-collection"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "How do WeakMap and WeakSet prevent memory leaks compared to Map and Set?",
    "answer": "Map and Set hold STRONG references to keys and values, preventing garbage collection even if no other references exist. WeakMap and WeakSet hold WEAK references to object keys. If an object stored as a WeakMap key has no other strong references, the Garbage Collector reclaims the object and automatically discards its WeakMap entry. WeakMap keys must be objects and are not iterable.",
    "explanation": "Weak references allow garbage collection of keys when outside references are dropped.",
    "interviewAnswer": "Map and Set hold STRONG references to keys and values, preventing garbage collection even if no other references exist. WeakMap and WeakSet hold WEAK references to object keys. If an object stored as a WeakMap key has no other strong references, the Garbage Collector reclaims the object and automatically discards its WeakMap entry. WeakMap keys must be objects and are not iterable. Weak references allow garbage collection of keys when outside references are dropped.",
    "importantPoints": [
      "Map and Set hold STRONG references to keys and values, preventing garbage collection even if no other references exist. WeakMap and WeakSet hold WEAK references to object keys. If an object stored as a WeakMap key has no other strong references, the Garbage Collector reclaims the object and automatically discards its WeakMap entry. WeakMap keys must be objects and are not iterable.",
      "Weak references allow garbage collection of keys when outside references are dropped."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "weakmap",
      "weakset",
      "memory-leaks",
      "garbage-collection"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What are WeakRef and FinalizationRegistry introduced in ES2021, and what are their use cases and caveats?",
    "answer": "WeakRef creates a weak reference to an object without preventing GC: const ref = new WeakRef(target); ref.deref() returns the object or undefined if collected. FinalizationRegistry registers a cleanup callback executed after an object is garbage-collected. Caveats: GC timing is non-deterministic; they should only be used for secondary caches and resource metrics, never for core app logic.",
    "explanation": "Provides weak reference dereferencing and post-mortem cleanup hooks.",
    "interviewAnswer": "WeakRef creates a weak reference to an object without preventing GC: const ref = new WeakRef(target); ref.deref() returns the object or undefined if collected. FinalizationRegistry registers a cleanup callback executed after an object is garbage-collected. Caveats: GC timing is non-deterministic; they should only be used for secondary caches and resource metrics, never for core app logic. Provides weak reference dereferencing and post-mortem cleanup hooks.",
    "importantPoints": [
      "WeakRef creates a weak reference to an object without preventing GC: const ref = new WeakRef(target); ref.deref() returns the object or undefined if collected. FinalizationRegistry registers a cleanup callback executed after an object is garbage-collected. Caveats: GC timing is non-deterministic; they should only be used for secondary caches and resource metrics, never for core app logic.",
      "Provides weak reference dereferencing and post-mortem cleanup hooks."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "weakref",
      "finalization-registry",
      "es2021",
      "gc"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "How does the JavaScript Prototype Chain work, and what is the difference between `__proto__` and `prototype`?",
    "answer": "Every JavaScript object has an internal [[Prototype]] link pointing to another object (or null). When accessing a property, the engine searches the object; if absent, it traverses up the prototype chain until found or reaching null (Object.prototype.[[Prototype]] is null). `prototype` is a property on constructor functions used to set [[Prototype]] for new instances. `__proto__` is an accessor property on Object.prototype exposing [[Prototype]].",
    "explanation": "Constructor functions have .prototype; object instances have .__proto__ pointing to it.",
    "interviewAnswer": "Every JavaScript object has an internal [[Prototype]] link pointing to another object (or null). When accessing a property, the engine searches the object; if absent, it traverses up the prototype chain until found or reaching null (Object.prototype.[[Prototype]] is null). `prototype` is a property on constructor functions used to set [[Prototype]] for new instances. `__proto__` is an accessor property on Object.prototype exposing [[Prototype]]. Constructor functions have .prototype; object instances have .__proto__ pointing to it.",
    "importantPoints": [
      "Every JavaScript object has an internal [[Prototype]] link pointing to another object (or null). When accessing a property, the engine searches the object; if absent, it traverses up the prototype chain until found or reaching null (Object.prototype.[[Prototype]] is null). `prototype` is a property on constructor functions used to set [[Prototype]] for new instances. `__proto__` is an accessor property on Object.prototype exposing [[Prototype]].",
      "Constructor functions have .prototype; object instances have .__proto__ pointing to it."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "prototypes",
      "prototype-chain",
      "__proto__",
      "inheritance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: function Person() {} const p = new Person(); console.log(p.__proto__ === Person.prototype); console.log(Person.__proto__ === Function.prototype);?",
    "answer": "Outputs true, then true. p was instantiated by Person, so its [[Prototype]] is Person.prototype. Person is a constructor function instantiated by Function, so its [[Prototype]] is Function.prototype.",
    "explanation": "Instances link to Constructor.prototype; functions link to Function.prototype.",
    "interviewAnswer": "Outputs true, then true. p was instantiated by Person, so its [[Prototype]] is Person.prototype. Person is a constructor function instantiated by Function, so its [[Prototype]] is Function.prototype. Instances link to Constructor.prototype; functions link to Function.prototype.",
    "importantPoints": [
      "Outputs true, then true. p was instantiated by Person, so its [[Prototype]] is Person.prototype. Person is a constructor function instantiated by Function, so its [[Prototype]] is Function.prototype.",
      "Instances link to Constructor.prototype; functions link to Function.prototype."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "prototypes",
      "output-prediction",
      "prototype-chain"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: Object.prototype.__proto__ and why?",
    "answer": "Outputs null. Object.prototype is the ultimate root of the prototype inheritance chain in JavaScript; its [[Prototype]] internal slot points strictly to null to terminate prototype chain lookups.",
    "explanation": "Object.prototype is the top of the prototype chain; its prototype is null.",
    "interviewAnswer": "Outputs null. Object.prototype is the ultimate root of the prototype inheritance chain in JavaScript; its [[Prototype]] internal slot points strictly to null to terminate prototype chain lookups. Object.prototype is the top of the prototype chain; its prototype is null.",
    "importantPoints": [
      "Outputs null. Object.prototype is the ultimate root of the prototype inheritance chain in JavaScript; its [[Prototype]] internal slot points strictly to null to terminate prototype chain lookups.",
      "Object.prototype is the top of the prototype chain; its prototype is null."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "prototypes",
      "output-prediction",
      "object-prototype",
      "null"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "How does Object.create(proto) work, and how do you create an object with NO prototype (pure dictionary)?",
    "answer": "Object.create(proto) creates a new empty object with its [[Prototype]] set directly to proto. Passing null: const dict = Object.create(null) creates a completely bare dictionary with NO prototype chain (no toString, hasOwnProperty, or constructor). This prevents prototype pollution and prototype key collisions.",
    "explanation": "Object.create(null) creates pure dictionary objects free of inherited Object.prototype properties.",
    "interviewAnswer": "Object.create(proto) creates a new empty object with its [[Prototype]] set directly to proto. Passing null: const dict = Object.create(null) creates a completely bare dictionary with NO prototype chain (no toString, hasOwnProperty, or constructor). This prevents prototype pollution and prototype key collisions. Object.create(null) creates pure dictionary objects free of inherited Object.prototype properties.",
    "importantPoints": [
      "Object.create(proto) creates a new empty object with its [[Prototype]] set directly to proto. Passing null: const dict = Object.create(null) creates a completely bare dictionary with NO prototype chain (no toString, hasOwnProperty, or constructor). This prevents prototype pollution and prototype key collisions.",
      "Object.create(null) creates pure dictionary objects free of inherited Object.prototype properties."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "prototypes",
      "object-create",
      "prototype-pollution",
      "dictionary"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is Prototype Pollution, and how can an attacker exploit it to cause security vulnerabilities?",
    "answer": "Prototype Pollution is a vulnerability where an attacker injects properties into Object.prototype (often via recursive object merge or JSON clone utilities like _.merge({ __proto__: { isAdmin: true } })). Because all objects inherit from Object.prototype, every object in the application now possesses the injected property, leading to privilege escalation or remote code execution.",
    "explanation": "Polluting Object.prototype poisons all objects in the runtime with rogue properties.",
    "interviewAnswer": "Prototype Pollution is a vulnerability where an attacker injects properties into Object.prototype (often via recursive object merge or JSON clone utilities like _.merge({ __proto__: { isAdmin: true } })). Because all objects inherit from Object.prototype, every object in the application now possesses the injected property, leading to privilege escalation or remote code execution. Polluting Object.prototype poisons all objects in the runtime with rogue properties.",
    "importantPoints": [
      "Prototype Pollution is a vulnerability where an attacker injects properties into Object.prototype (often via recursive object merge or JSON clone utilities like _.merge({ __proto__: { isAdmin: true } })). Because all objects inherit from Object.prototype, every object in the application now possesses the injected property, leading to privilege escalation or remote code execution.",
      "Polluting Object.prototype poisons all objects in the runtime with rogue properties."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "javascript",
      "security",
      "prototype-pollution",
      "vulnerability"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "How do ES6 Classes differ from traditional ES5 Prototypal Constructor Functions under the hood?",
    "answer": "1) Class declarations are NOT hoisted (temporal dead zone). 2) Class constructors MUST be invoked with `new` (calling Class() without new throws TypeError). 3) Class methods are non-enumerable by default. 4) Class bodies always execute in strict mode. 5) Classes have static inheritance (SubClass.__proto__ === SuperClass).",
    "explanation": "Classes provide syntactic sugar with strict mode enforcement, non-enumerable methods, and static inheritance.",
    "interviewAnswer": "1) Class declarations are NOT hoisted (temporal dead zone). 2) Class constructors MUST be invoked with `new` (calling Class() without new throws TypeError). 3) Class methods are non-enumerable by default. 4) Class bodies always execute in strict mode. 5) Classes have static inheritance (SubClass.__proto__ === SuperClass). Classes provide syntactic sugar with strict mode enforcement, non-enumerable methods, and static inheritance.",
    "importantPoints": [
      "1) Class declarations are NOT hoisted (temporal dead zone). 2) Class constructors MUST be invoked with `new` (calling Class() without new throws TypeError). 3) Class methods are non-enumerable by default. 4) Class bodies always execute in strict mode. 5) Classes have static inheritance (SubClass.__proto__ === SuperClass).",
      "Classes provide syntactic sugar with strict mode enforcement, non-enumerable methods, and static inheritance."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "classes",
      "prototypes",
      "es6",
      "differences"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What are Private Class Fields and Methods (#field) in modern JavaScript, and how do they achieve true encapsulation?",
    "answer": "Private fields and methods are prefixed with `#` (e.g. `#secret`). They are hard-private at the engine bytecode level: they cannot be accessed, inspected, or modified from outside the class, not even via Object.getOwnPropertyNames(), Symbols, or proxy traps. Attempting to access #field from outside throws a SyntaxError at parse time.",
    "explanation": "Private # fields provide true hardware-level encapsulation, unlike _private naming conventions.",
    "interviewAnswer": "Private fields and methods are prefixed with `#` (e.g. `#secret`). They are hard-private at the engine bytecode level: they cannot be accessed, inspected, or modified from outside the class, not even via Object.getOwnPropertyNames(), Symbols, or proxy traps. Attempting to access #field from outside throws a SyntaxError at parse time. Private # fields provide true hardware-level encapsulation, unlike _private naming conventions.",
    "importantPoints": [
      "Private fields and methods are prefixed with `#` (e.g. `#secret`). They are hard-private at the engine bytecode level: they cannot be accessed, inspected, or modified from outside the class, not even via Object.getOwnPropertyNames(), Symbols, or proxy traps. Attempting to access #field from outside throws a SyntaxError at parse time.",
      "Private # fields provide true hardware-level encapsulation, unlike _private naming conventions."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "classes",
      "private-fields",
      "encapsulation",
      "es2022"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: class A { #x = 10; getX() { return this.#x; } } const a = new A(); console.log(a.getX(), a[\"#x\"]);?",
    "answer": "Outputs 10, undefined. a.getX() accesses the private field internally, returning 10. a[\"#x\"] evaluates as a normal string property lookup for \"#x\" on the object, which does not exist and evaluates to undefined.",
    "explanation": "Private # fields cannot be accessed via bracket string notation.",
    "interviewAnswer": "Outputs 10, undefined. a.getX() accesses the private field internally, returning 10. a[\"#x\"] evaluates as a normal string property lookup for \"#x\" on the object, which does not exist and evaluates to undefined. Private # fields cannot be accessed via bracket string notation.",
    "importantPoints": [
      "Outputs 10, undefined. a.getX() accesses the private field internally, returning 10. a[\"#x\"] evaluates as a normal string property lookup for \"#x\" on the object, which does not exist and evaluates to undefined.",
      "Private # fields cannot be accessed via bracket string notation."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "classes",
      "output-prediction",
      "private-fields"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the static initialization block (`static { ... }`) in ES2022 classes?",
    "answer": "Static initialization blocks allow executing multi-statement initialization logic for static class properties when the class is defined. They have access to private static fields, allowing sharing of private fields with functions declared outside the class scope without exposing them publicly.",
    "explanation": "Enables complex static setup and controlled privileged access to private members.",
    "interviewAnswer": "Static initialization blocks allow executing multi-statement initialization logic for static class properties when the class is defined. They have access to private static fields, allowing sharing of private fields with functions declared outside the class scope without exposing them publicly. Enables complex static setup and controlled privileged access to private members.",
    "importantPoints": [
      "Static initialization blocks allow executing multi-statement initialization logic for static class properties when the class is defined. They have access to private static fields, allowing sharing of private fields with functions declared outside the class scope without exposing them publicly.",
      "Enables complex static setup and controlled privileged access to private members."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "classes",
      "static-blocks",
      "es2022"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "How does `super()` work in subclass constructors, and why MUST it be called before accessing `this`?",
    "answer": "In derived classes (`class B extends A`), the subclass instance is actually constructed by the superclass constructor. Until `super()` is executed, `this` is uninitialized in the subclass execution context. Accessing `this` before `super()` throws a ReferenceError.",
    "explanation": "In derived classes, super() initializes `this`; accessing `this` beforehand throws ReferenceError.",
    "interviewAnswer": "In derived classes (`class B extends A`), the subclass instance is actually constructed by the superclass constructor. Until `super()` is executed, `this` is uninitialized in the subclass execution context. Accessing `this` before `super()` throws a ReferenceError. In derived classes, super() initializes `this`; accessing `this` beforehand throws ReferenceError.",
    "importantPoints": [
      "In derived classes (`class B extends A`), the subclass instance is actually constructed by the superclass constructor. Until `super()` is executed, `this` is uninitialized in the subclass execution context. Accessing `this` before `super()` throws a ReferenceError.",
      "In derived classes, super() initializes `this`; accessing `this` beforehand throws ReferenceError."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "classes",
      "super",
      "inheritance",
      "reference-error"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: class A { constructor() { this.x = 1; } } class B extends A { constructor() { console.log(this.x); super(); } } new B();?",
    "answer": "Throws ReferenceError: Must call super constructor in derived class before accessing 'this'.",
    "explanation": "Accessing this before super() in a derived constructor throws ReferenceError.",
    "interviewAnswer": "Throws ReferenceError: Must call super constructor in derived class before accessing 'this'. Accessing this before super() in a derived constructor throws ReferenceError.",
    "importantPoints": [
      "Throws ReferenceError: Must call super constructor in derived class before accessing 'this'.",
      "Accessing this before super() in a derived constructor throws ReferenceError."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "classes",
      "output-prediction",
      "super",
      "reference-error"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "How does the JavaScript Proxy object work, and what are Traps and the Reflect API?",
    "answer": "A Proxy wraps a target object and intercepts fundamental operations (property lookup, assignment, enumeration, function invocation) using handler methods called \"Traps\" (e.g. get, set, has, deleteProperty). The Reflect API provides matching static methods that perform the default internal behaviors (e.g. Reflect.get(target, prop, receiver)), ensuring clean delegation.",
    "explanation": "Proxy intercepts operations; Reflect executes the default underlying engine behavior.",
    "interviewAnswer": "A Proxy wraps a target object and intercepts fundamental operations (property lookup, assignment, enumeration, function invocation) using handler methods called \"Traps\" (e.g. get, set, has, deleteProperty). The Reflect API provides matching static methods that perform the default internal behaviors (e.g. Reflect.get(target, prop, receiver)), ensuring clean delegation. Proxy intercepts operations; Reflect executes the default underlying engine behavior.",
    "importantPoints": [
      "A Proxy wraps a target object and intercepts fundamental operations (property lookup, assignment, enumeration, function invocation) using handler methods called \"Traps\" (e.g. get, set, has, deleteProperty). The Reflect API provides matching static methods that perform the default internal behaviors (e.g. Reflect.get(target, prop, receiver)), ensuring clean delegation.",
      "Proxy intercepts operations; Reflect executes the default underlying engine behavior."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "proxy",
      "reflect",
      "metaprogramming"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "Implement a reactive state observable using Proxy that detects property mutations.",
    "answer": "function reactive(obj, onChange) { return new Proxy(obj, { set(target, prop, val, receiver) { const oldVal = target[prop]; const res = Reflect.set(target, prop, val, receiver); if (oldVal !== val) onChange(prop, val, oldVal); return res; } }); }",
    "explanation": "Intercepts property assignments via the set trap and notifies listeners (core of Vue 3 reactivity).",
    "interviewAnswer": "function reactive(obj, onChange) { return new Proxy(obj, { set(target, prop, val, receiver) { const oldVal = target[prop]; const res = Reflect.set(target, prop, val, receiver); if (oldVal !== val) onChange(prop, val, oldVal); return res; } }); } Intercepts property assignments via the set trap and notifies listeners (core of Vue 3 reactivity).",
    "importantPoints": [
      "function reactive(obj, onChange) { return new Proxy(obj, { set(target, prop, val, receiver) { const oldVal = target[prop]; const res = Reflect.set(target, prop, val, receiver); if (oldVal !== val) onChange(prop, val, oldVal); return res; } }); }",
      "Intercepts property assignments via the set trap and notifies listeners (core of Vue 3 reactivity)."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "proxy",
      "reactivity",
      "coding",
      "vue"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the purpose of the `receiver` argument in Proxy get and set traps, and why is `Reflect.get(target, prop, receiver)` crucial?",
    "answer": "The `receiver` argument represents the object on which the operation was originally initiated (usually the proxy itself or a prototype inheriting from it). Passing `receiver` into `Reflect.get/set` ensures that getter and setter methods on the target object evaluate with `this` bound correctly to the proxy/receiver rather than the underlying target.",
    "explanation": "Pass receiver to Reflect to maintain correct `this` binding inside getters/setters.",
    "interviewAnswer": "The `receiver` argument represents the object on which the operation was originally initiated (usually the proxy itself or a prototype inheriting from it). Passing `receiver` into `Reflect.get/set` ensures that getter and setter methods on the target object evaluate with `this` bound correctly to the proxy/receiver rather than the underlying target. Pass receiver to Reflect to maintain correct `this` binding inside getters/setters.",
    "importantPoints": [
      "The `receiver` argument represents the object on which the operation was originally initiated (usually the proxy itself or a prototype inheriting from it). Passing `receiver` into `Reflect.get/set` ensures that getter and setter methods on the target object evaluate with `this` bound correctly to the proxy/receiver rather than the underlying target.",
      "Pass receiver to Reflect to maintain correct `this` binding inside getters/setters."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "proxy",
      "reflect",
      "receiver",
      "this-binding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is a Revocable Proxy created via Proxy.revocable(), and when would you use it?",
    "answer": "Proxy.revocable(target, handler) returns { proxy, revoke }. Calling revoke() immediately disables the proxy. Any subsequent operations on the proxy throw a TypeError. Used to provide temporary, revocable access to sensitive objects or APIs that can be shut off permanently once an operation finishes.",
    "explanation": "Revocable proxies allow instant, irreversible revocation of access to protected objects.",
    "interviewAnswer": "Proxy.revocable(target, handler) returns { proxy, revoke }. Calling revoke() immediately disables the proxy. Any subsequent operations on the proxy throw a TypeError. Used to provide temporary, revocable access to sensitive objects or APIs that can be shut off permanently once an operation finishes. Revocable proxies allow instant, irreversible revocation of access to protected objects.",
    "importantPoints": [
      "Proxy.revocable(target, handler) returns { proxy, revoke }. Calling revoke() immediately disables the proxy. Any subsequent operations on the proxy throw a TypeError. Used to provide temporary, revocable access to sensitive objects or APIs that can be shut off permanently once an operation finishes.",
      "Revocable proxies allow instant, irreversible revocation of access to protected objects."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "proxy",
      "revocable-proxy",
      "security"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: const { proxy, revoke } = Proxy.revocable({ a: 1 }, {}); console.log(proxy.a); revoke(); console.log(proxy.a);?",
    "answer": "Outputs 1, then throws TypeError: Cannot perform 'get' on a proxy that has been revoked.",
    "explanation": "Accessing any property on a revoked proxy throws TypeError.",
    "interviewAnswer": "Outputs 1, then throws TypeError: Cannot perform 'get' on a proxy that has been revoked. Accessing any property on a revoked proxy throws TypeError.",
    "importantPoints": [
      "Outputs 1, then throws TypeError: Cannot perform 'get' on a proxy that has been revoked.",
      "Accessing any property on a revoked proxy throws TypeError."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "proxy",
      "output-prediction",
      "revocable"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What are Symbols in JavaScript, and what are the two primary characteristics that make them unique?",
    "answer": "Symbol is a primitive data type introduced in ES6. 1) Every symbol returned by Symbol(\"desc\") is completely unique and guaranteed not to equal any other symbol. 2) Symbols are hidden from Object.keys(), Object.getOwnPropertyNames(), and for...in loops (accessible only via Object.getOwnPropertySymbols(obj) or Reflect.ownKeys(obj)).",
    "explanation": "Symbols create collision-free object property keys and define language protocols.",
    "interviewAnswer": "Symbol is a primitive data type introduced in ES6. 1) Every symbol returned by Symbol(\"desc\") is completely unique and guaranteed not to equal any other symbol. 2) Symbols are hidden from Object.keys(), Object.getOwnPropertyNames(), and for...in loops (accessible only via Object.getOwnPropertySymbols(obj) or Reflect.ownKeys(obj)). Symbols create collision-free object property keys and define language protocols.",
    "importantPoints": [
      "Symbol is a primitive data type introduced in ES6. 1) Every symbol returned by Symbol(\"desc\") is completely unique and guaranteed not to equal any other symbol. 2) Symbols are hidden from Object.keys(), Object.getOwnPropertyNames(), and for...in loops (accessible only via Object.getOwnPropertySymbols(obj) or Reflect.ownKeys(obj)).",
      "Symbols create collision-free object property keys and define language protocols."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "symbols",
      "primitives",
      "unique-keys"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the Global Symbol Registry, and how do Symbol.for(key) and Symbol.keyFor(sym) work?",
    "answer": "Symbol.for(key) searches the runtime-wide Global Symbol Registry. If a symbol with `key` exists, it returns it; otherwise, it creates and registers a new global symbol. Symbol.keyFor(sym) looks up the string key of a global symbol. Unlike Symbol(), symbols created with Symbol.for() share identity across iframes, service workers, and modules.",
    "explanation": "Symbol.for creates shared global symbols across execution realms.",
    "interviewAnswer": "Symbol.for(key) searches the runtime-wide Global Symbol Registry. If a symbol with `key` exists, it returns it; otherwise, it creates and registers a new global symbol. Symbol.keyFor(sym) looks up the string key of a global symbol. Unlike Symbol(), symbols created with Symbol.for() share identity across iframes, service workers, and modules. Symbol.for creates shared global symbols across execution realms.",
    "importantPoints": [
      "Symbol.for(key) searches the runtime-wide Global Symbol Registry. If a symbol with `key` exists, it returns it; otherwise, it creates and registers a new global symbol. Symbol.keyFor(sym) looks up the string key of a global symbol. Unlike Symbol(), symbols created with Symbol.for() share identity across iframes, service workers, and modules.",
      "Symbol.for creates shared global symbols across execution realms."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "symbols",
      "symbol-for",
      "global-registry"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: console.log(Symbol(\"a\") === Symbol(\"a\")); console.log(Symbol.for(\"b\") === Symbol.for(\"b\"));?",
    "answer": "Outputs false, then true. Symbol(\"a\") produces unique independent symbols each time. Symbol.for(\"b\") retrieves the identical shared symbol from the global symbol registry.",
    "explanation": "Symbol() is always unique; Symbol.for() shares identity by registry key.",
    "interviewAnswer": "Outputs false, then true. Symbol(\"a\") produces unique independent symbols each time. Symbol.for(\"b\") retrieves the identical shared symbol from the global symbol registry. Symbol() is always unique; Symbol.for() shares identity by registry key.",
    "importantPoints": [
      "Outputs false, then true. Symbol(\"a\") produces unique independent symbols each time. Symbol.for(\"b\") retrieves the identical shared symbol from the global symbol registry.",
      "Symbol() is always unique; Symbol.for() shares identity by registry key."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "symbols",
      "output-prediction",
      "symbol-for"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "How does Symbol.iterator make an object iterable with for...of loops and the spread operator?",
    "answer": "An object is iterable if it implements a method keyed by [Symbol.iterator]. This method must return an Iterator object with a .next() method that returns { value, done }. Constructs like for...of, [...spread], and Array.from() look for [Symbol.iterator] to step through values until done is true.",
    "explanation": "Implementing [Symbol.iterator]() allows custom objects to participate in for...of and spread.",
    "interviewAnswer": "An object is iterable if it implements a method keyed by [Symbol.iterator]. This method must return an Iterator object with a .next() method that returns { value, done }. Constructs like for...of, [...spread], and Array.from() look for [Symbol.iterator] to step through values until done is true. Implementing [Symbol.iterator]() allows custom objects to participate in for...of and spread.",
    "importantPoints": [
      "An object is iterable if it implements a method keyed by [Symbol.iterator]. This method must return an Iterator object with a .next() method that returns { value, done }. Constructs like for...of, [...spread], and Array.from() look for [Symbol.iterator] to step through values until done is true.",
      "Implementing [Symbol.iterator]() allows custom objects to participate in for...of and spread."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "symbols",
      "symbol-iterator",
      "iterable",
      "protocols"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "Implement an iterable range object using Symbol.iterator: range(1, 4) produces 1, 2, 3, 4 with for...of.",
    "answer": "function range(start, end) { return { [Symbol.iterator]() { let cur = start; return { next() { if (cur <= end) return { value: cur++, done: false }; return { value: undefined, done: true }; } }; } }; }",
    "explanation": "Returns an iterator object conforming to the Iterator protocol.",
    "interviewAnswer": "function range(start, end) { return { [Symbol.iterator]() { let cur = start; return { next() { if (cur <= end) return { value: cur++, done: false }; return { value: undefined, done: true }; } }; } }; } Returns an iterator object conforming to the Iterator protocol.",
    "importantPoints": [
      "function range(start, end) { return { [Symbol.iterator]() { let cur = start; return { next() { if (cur <= end) return { value: cur++, done: false }; return { value: undefined, done: true }; } }; } }; }",
      "Returns an iterator object conforming to the Iterator protocol."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "symbols",
      "symbol-iterator",
      "range",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is Symbol.toPrimitive, and how does it control object type coercion for \"number\", \"string\", and \"default\" hints?",
    "answer": "Symbol.toPrimitive is a well-known symbol method on objects that overrides type coercion. It accepts a hint (\"number\", \"string\", or \"default\"). When adding (+), subtracting (-), or converting to string (`${obj}`), the engine calls [Symbol.toPrimitive](hint), bypassing default valueOf() and toString() methods.",
    "explanation": "Provides total custom control over object-to-primitive type conversion.",
    "interviewAnswer": "Symbol.toPrimitive is a well-known symbol method on objects that overrides type coercion. It accepts a hint (\"number\", \"string\", or \"default\"). When adding (+), subtracting (-), or converting to string (`${obj}`), the engine calls [Symbol.toPrimitive](hint), bypassing default valueOf() and toString() methods. Provides total custom control over object-to-primitive type conversion.",
    "importantPoints": [
      "Symbol.toPrimitive is a well-known symbol method on objects that overrides type coercion. It accepts a hint (\"number\", \"string\", or \"default\"). When adding (+), subtracting (-), or converting to string (`${obj}`), the engine calls [Symbol.toPrimitive](hint), bypassing default valueOf() and toString() methods.",
      "Provides total custom control over object-to-primitive type conversion."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "symbols",
      "symbol-toPrimitive",
      "coercion"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: const obj = { [Symbol.toPrimitive](hint) { return hint === \"number\" ? 10 : \"text\"; } }; console.log(+obj, `${obj}`, obj + \"\");?",
    "answer": "Outputs 10, \"text\", \"text\". `+obj` passes hint \"number\", returning 10. `${obj}` passes hint \"string\", returning \"text\". `obj + \"\"` passes hint \"default\", which returns \"text\" concatenated with \"\" = \"text\".",
    "explanation": "Demonstrates hint values: number, string, and default.",
    "interviewAnswer": "Outputs 10, \"text\", \"text\". `+obj` passes hint \"number\", returning 10. `${obj}` passes hint \"string\", returning \"text\". `obj + \"\"` passes hint \"default\", which returns \"text\" concatenated with \"\" = \"text\". Demonstrates hint values: number, string, and default.",
    "importantPoints": [
      "Outputs 10, \"text\", \"text\". `+obj` passes hint \"number\", returning 10. `${obj}` passes hint \"string\", returning \"text\". `obj + \"\"` passes hint \"default\", which returns \"text\" concatenated with \"\" = \"text\".",
      "Demonstrates hint values: number, string, and default."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "symbols",
      "output-prediction",
      "symbol-toPrimitive"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "How do Generator functions (function*) work, and how does two-way communication via generator.next(value) work?",
    "answer": "Generators can pause execution via `yield` and resume when `.next()` is called. In two-way communication, passing an argument to `.next(val)` replaces the `yield` expression inside the generator with `val`, allowing the caller to inject data directly back into the paused generator body.",
    "explanation": "yield passes data OUT; generator.next(val) injects data IN.",
    "interviewAnswer": "Generators can pause execution via `yield` and resume when `.next()` is called. In two-way communication, passing an argument to `.next(val)` replaces the `yield` expression inside the generator with `val`, allowing the caller to inject data directly back into the paused generator body. yield passes data OUT; generator.next(val) injects data IN.",
    "importantPoints": [
      "Generators can pause execution via `yield` and resume when `.next()` is called. In two-way communication, passing an argument to `.next(val)` replaces the `yield` expression inside the generator with `val`, allowing the caller to inject data directly back into the paused generator body.",
      "yield passes data OUT; generator.next(val) injects data IN."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "generators",
      "yield",
      "next",
      "two-way-communication"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: function* g() { const x = yield 1; console.log(x); yield 2; } const it = g(); console.log(it.next().value); console.log(it.next(100).value);?",
    "answer": "Outputs 1, 100, 2. The first .next() runs up to yield 1, returning value 1. The second .next(100) resumes the generator, replacing `yield 1` with 100. x becomes 100 and logs 100. The generator pauses at yield 2, returning value 2.",
    "explanation": "Value passed to next() becomes the resolved value of the paused yield expression.",
    "interviewAnswer": "Outputs 1, 100, 2. The first .next() runs up to yield 1, returning value 1. The second .next(100) resumes the generator, replacing `yield 1` with 100. x becomes 100 and logs 100. The generator pauses at yield 2, returning value 2. Value passed to next() becomes the resolved value of the paused yield expression.",
    "importantPoints": [
      "Outputs 1, 100, 2. The first .next() runs up to yield 1, returning value 1. The second .next(100) resumes the generator, replacing `yield 1` with 100. x becomes 100 and logs 100. The generator pauses at yield 2, returning value 2.",
      "Value passed to next() becomes the resolved value of the paused yield expression."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "generators",
      "output-prediction",
      "yield",
      "two-way"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What does the `yield*` operator do in Generator functions?",
    "answer": "The `yield*` operator delegates iteration to another iterable or generator. It steps through each item of the delegated generator and yields them directly to the outer caller. When the delegated generator returns a final value, `yield*` evaluates to that returned value.",
    "explanation": "Delegates iteration to another iterable or generator, flattening nested generator sequences.",
    "interviewAnswer": "The `yield*` operator delegates iteration to another iterable or generator. It steps through each item of the delegated generator and yields them directly to the outer caller. When the delegated generator returns a final value, `yield*` evaluates to that returned value. Delegates iteration to another iterable or generator, flattening nested generator sequences.",
    "importantPoints": [
      "The `yield*` operator delegates iteration to another iterable or generator. It steps through each item of the delegated generator and yields them directly to the outer caller. When the delegated generator returns a final value, `yield*` evaluates to that returned value.",
      "Delegates iteration to another iterable or generator, flattening nested generator sequences."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "generators",
      "yield-star",
      "delegation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: function* a() { yield 1; yield* [2, 3]; yield 4; } console.log([...a()]);?",
    "answer": "Outputs [1, 2, 3, 4]. yield* [2, 3] delegates to the array iterable, yielding 2 and 3 sequentially before advancing to yield 4.",
    "explanation": "yield* spreads iteration through any iterable.",
    "interviewAnswer": "Outputs [1, 2, 3, 4]. yield* [2, 3] delegates to the array iterable, yielding 2 and 3 sequentially before advancing to yield 4. yield* spreads iteration through any iterable.",
    "importantPoints": [
      "Outputs [1, 2, 3, 4]. yield* [2, 3] delegates to the array iterable, yielding 2 and 3 sequentially before advancing to yield 4.",
      "yield* spreads iteration through any iterable."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "generators",
      "output-prediction",
      "yield-star"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "How does V8 optimize JavaScript execution using Hidden Classes (Shapes) and Inline Caching (IC)?",
    "answer": "V8 assigns an internal \"Hidden Class\" (or Shape) to objects based on their property layout and insertion order. When a function repeatedly accesses object properties with identical shapes, V8 uses Inline Caching (IC) to cache the memory offset of the property directly in machine code, bypassing dictionary lookups. Adding properties in different orders creates divergent shapes and degrades performance.",
    "explanation": "Hidden Classes + Inline Caching provide C-like memory offset speed for dynamic JS objects.",
    "interviewAnswer": "V8 assigns an internal \"Hidden Class\" (or Shape) to objects based on their property layout and insertion order. When a function repeatedly accesses object properties with identical shapes, V8 uses Inline Caching (IC) to cache the memory offset of the property directly in machine code, bypassing dictionary lookups. Adding properties in different orders creates divergent shapes and degrades performance. Hidden Classes + Inline Caching provide C-like memory offset speed for dynamic JS objects.",
    "importantPoints": [
      "V8 assigns an internal \"Hidden Class\" (or Shape) to objects based on their property layout and insertion order. When a function repeatedly accesses object properties with identical shapes, V8 uses Inline Caching (IC) to cache the memory offset of the property directly in machine code, bypassing dictionary lookups. Adding properties in different orders creates divergent shapes and degrades performance.",
      "Hidden Classes + Inline Caching provide C-like memory offset speed for dynamic JS objects."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "javascript",
      "v8",
      "hidden-classes",
      "inline-cache",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What causes Deoptimization (deopt) in V8, and how do Monomorphic, Polymorphic, and Megamorphic call sites differ?",
    "answer": "When a function is called with objects of the same shape (Monomorphic, 1 shape), V8 JIT compiles highly optimized machine code. If called with 2-4 different shapes, it becomes Polymorphic (slower). If called with 5+ shapes, it becomes Megamorphic and falls back to slow generic dictionary lookups. Changing property types or shapes causes V8 to \"deoptimize\" back to interpreted bytecode.",
    "explanation": "Monomorphic = fast optimized inline cache; Megamorphic = slow generic lookup.",
    "interviewAnswer": "When a function is called with objects of the same shape (Monomorphic, 1 shape), V8 JIT compiles highly optimized machine code. If called with 2-4 different shapes, it becomes Polymorphic (slower). If called with 5+ shapes, it becomes Megamorphic and falls back to slow generic dictionary lookups. Changing property types or shapes causes V8 to \"deoptimize\" back to interpreted bytecode. Monomorphic = fast optimized inline cache; Megamorphic = slow generic lookup.",
    "importantPoints": [
      "When a function is called with objects of the same shape (Monomorphic, 1 shape), V8 JIT compiles highly optimized machine code. If called with 2-4 different shapes, it becomes Polymorphic (slower). If called with 5+ shapes, it becomes Megamorphic and falls back to slow generic dictionary lookups. Changing property types or shapes causes V8 to \"deoptimize\" back to interpreted bytecode.",
      "Monomorphic = fast optimized inline cache; Megamorphic = slow generic lookup."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "javascript",
      "v8",
      "deopt",
      "monomorphic",
      "megamorphic",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "Why should you avoid `delete obj.prop` in performance-critical JavaScript algorithms?",
    "answer": "Using `delete obj.prop` alters the hidden class (shape) of the object, turning it into a slow dictionary-mode (hash table) object and destroying inline caches for functions accessing that object. In performance-critical code, set `obj.prop = null` or `undefined` instead, or use a Map.",
    "explanation": "delete forces V8 into slow dictionary mode; reassign to null/undefined instead.",
    "interviewAnswer": "Using `delete obj.prop` alters the hidden class (shape) of the object, turning it into a slow dictionary-mode (hash table) object and destroying inline caches for functions accessing that object. In performance-critical code, set `obj.prop = null` or `undefined` instead, or use a Map. delete forces V8 into slow dictionary mode; reassign to null/undefined instead.",
    "importantPoints": [
      "Using `delete obj.prop` alters the hidden class (shape) of the object, turning it into a slow dictionary-mode (hash table) object and destroying inline caches for functions accessing that object. In performance-critical code, set `obj.prop = null` or `undefined` instead, or use a Map.",
      "delete forces V8 into slow dictionary mode; reassign to null/undefined instead."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "javascript",
      "v8",
      "delete",
      "hidden-classes",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the difference between Object.freeze(), Object.seal(), and Object.preventExtensions()?",
    "answer": "1) Object.preventExtensions(): Cannot add new properties; can delete and modify existing properties. 2) Object.seal(): Cannot add or delete properties; existing properties can be modified (if writable: true). 3) Object.freeze(): Cannot add, delete, or modify properties (all properties made non-writable and non-configurable). All three are shallow by default.",
    "explanation": "preventExtensions = no adds; seal = no adds/deletes; freeze = immutable (no adds/deletes/edits).",
    "interviewAnswer": "1) Object.preventExtensions(): Cannot add new properties; can delete and modify existing properties. 2) Object.seal(): Cannot add or delete properties; existing properties can be modified (if writable: true). 3) Object.freeze(): Cannot add, delete, or modify properties (all properties made non-writable and non-configurable). All three are shallow by default. preventExtensions = no adds; seal = no adds/deletes; freeze = immutable (no adds/deletes/edits).",
    "importantPoints": [
      "1) Object.preventExtensions(): Cannot add new properties; can delete and modify existing properties. 2) Object.seal(): Cannot add or delete properties; existing properties can be modified (if writable: true). 3) Object.freeze(): Cannot add, delete, or modify properties (all properties made non-writable and non-configurable). All three are shallow by default.",
      "preventExtensions = no adds; seal = no adds/deletes; freeze = immutable (no adds/deletes/edits)."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects",
      "freeze",
      "seal",
      "preventExtensions"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "Implement a deepFreeze function in JavaScript that recursively freezes nested objects.",
    "answer": "function deepFreeze(obj) { Object.keys(obj).forEach(prop => { if (typeof obj[prop] === \"object\" && obj[prop] !== null && !Object.isFrozen(obj[prop])) deepFreeze(obj[prop]); }); return Object.freeze(obj); }",
    "explanation": "Standard Object.freeze is shallow; deepFreeze recursively freezes all nested object properties.",
    "interviewAnswer": "function deepFreeze(obj) { Object.keys(obj).forEach(prop => { if (typeof obj[prop] === \"object\" && obj[prop] !== null && !Object.isFrozen(obj[prop])) deepFreeze(obj[prop]); }); return Object.freeze(obj); } Standard Object.freeze is shallow; deepFreeze recursively freezes all nested object properties.",
    "importantPoints": [
      "function deepFreeze(obj) { Object.keys(obj).forEach(prop => { if (typeof obj[prop] === \"object\" && obj[prop] !== null && !Object.isFrozen(obj[prop])) deepFreeze(obj[prop]); }); return Object.freeze(obj); }",
      "Standard Object.freeze is shallow; deepFreeze recursively freezes all nested object properties."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects",
      "deepFreeze",
      "immutability",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: \"use strict\"; const obj = Object.freeze({ a: 1 }); obj.a = 2; console.log(obj.a);?",
    "answer": "In strict mode (\"use strict\"), attempting to mutate a frozen object throws TypeError: Cannot assign to read only property 'a'. In non-strict mode, it fails silently and logs 1.",
    "explanation": "Strict mode throws TypeError on frozen mutations; non-strict mode fails silently.",
    "interviewAnswer": "In strict mode (\"use strict\"), attempting to mutate a frozen object throws TypeError: Cannot assign to read only property 'a'. In non-strict mode, it fails silently and logs 1. Strict mode throws TypeError on frozen mutations; non-strict mode fails silently.",
    "importantPoints": [
      "In strict mode (\"use strict\"), attempting to mutate a frozen object throws TypeError: Cannot assign to read only property 'a'. In non-strict mode, it fails silently and logs 1.",
      "Strict mode throws TypeError on frozen mutations; non-strict mode fails silently."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects",
      "output-prediction",
      "freeze",
      "strict-mode"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is Tail Call Optimization (TCO) in ECMAScript, and why is it not widely implemented across JS engines?",
    "answer": "Tail Call Optimization (ES2015 spec) allows recursive function calls in tail position (return fn()) to reuse the current stack frame, preventing stack overflow with infinite recursion. It is only supported in Safari (JavaScriptCore) and was rejected by Chrome (V8) and Firefox due to difficulty debugging stack traces and memory overhead in error frames.",
    "explanation": "Only Safari implemented TCO; V8 avoided it due to developer stack-trace readability concerns.",
    "interviewAnswer": "Tail Call Optimization (ES2015 spec) allows recursive function calls in tail position (return fn()) to reuse the current stack frame, preventing stack overflow with infinite recursion. It is only supported in Safari (JavaScriptCore) and was rejected by Chrome (V8) and Firefox due to difficulty debugging stack traces and memory overhead in error frames. Only Safari implemented TCO; V8 avoided it due to developer stack-trace readability concerns.",
    "importantPoints": [
      "Tail Call Optimization (ES2015 spec) allows recursive function calls in tail position (return fn()) to reuse the current stack frame, preventing stack overflow with infinite recursion. It is only supported in Safari (JavaScriptCore) and was rejected by Chrome (V8) and Firefox due to difficulty debugging stack traces and memory overhead in error frames.",
      "Only Safari implemented TCO; V8 avoided it due to developer stack-trace readability concerns."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "tco",
      "recursion",
      "v8",
      "call-stack"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "How does the ArrayBuffer and TypedArray architecture enable low-level binary data manipulation in JavaScript?",
    "answer": "An ArrayBuffer represents a fixed-length raw binary data buffer in memory. Because JavaScript cannot access ArrayBuffer bytes directly, TypedArrays (Uint8Array, Int32Array, Float64Array) and DataView provide structured \"views\" over the buffer. This enables zero-copy binary protocols, WebGL shaders, WebSockets binary streams, and WASM memory sharing.",
    "explanation": "ArrayBuffer = raw memory buffer; TypedArray/DataView = typed reading/writing lens.",
    "interviewAnswer": "An ArrayBuffer represents a fixed-length raw binary data buffer in memory. Because JavaScript cannot access ArrayBuffer bytes directly, TypedArrays (Uint8Array, Int32Array, Float64Array) and DataView provide structured \"views\" over the buffer. This enables zero-copy binary protocols, WebGL shaders, WebSockets binary streams, and WASM memory sharing. ArrayBuffer = raw memory buffer; TypedArray/DataView = typed reading/writing lens.",
    "importantPoints": [
      "An ArrayBuffer represents a fixed-length raw binary data buffer in memory. Because JavaScript cannot access ArrayBuffer bytes directly, TypedArrays (Uint8Array, Int32Array, Float64Array) and DataView provide structured \"views\" over the buffer. This enables zero-copy binary protocols, WebGL shaders, WebSockets binary streams, and WASM memory sharing.",
      "ArrayBuffer = raw memory buffer; TypedArray/DataView = typed reading/writing lens."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "binary",
      "arraybuffer",
      "typedarray",
      "dataview"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the difference between TypedArray views and DataView when reading multi-byte binary numbers?",
    "answer": "TypedArrays (e.g. Uint16Array) read and write values using the host CPU native endianness (almost always Little-Endian on x86/ARM). DataView allows explicit endianness control on every read/write method (e.g. view.getUint16(0, false) for Big-Endian / Network byte order), essential for network protocol parsing.",
    "explanation": "TypedArray uses host endianness; DataView supports explicit Big-Endian and Little-Endian flags.",
    "interviewAnswer": "TypedArrays (e.g. Uint16Array) read and write values using the host CPU native endianness (almost always Little-Endian on x86/ARM). DataView allows explicit endianness control on every read/write method (e.g. view.getUint16(0, false) for Big-Endian / Network byte order), essential for network protocol parsing. TypedArray uses host endianness; DataView supports explicit Big-Endian and Little-Endian flags.",
    "importantPoints": [
      "TypedArrays (e.g. Uint16Array) read and write values using the host CPU native endianness (almost always Little-Endian on x86/ARM). DataView allows explicit endianness control on every read/write method (e.g. view.getUint16(0, false) for Big-Endian / Network byte order), essential for network protocol parsing.",
      "TypedArray uses host endianness; DataView supports explicit Big-Endian and Little-Endian flags."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "binary",
      "dataview",
      "typedarray",
      "endianness"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is SharedArrayBuffer, and how do Atomics prevent race conditions across multi-threaded Web Workers?",
    "answer": "SharedArrayBuffer allows multiple Web Workers and the main thread to share the exact same physical memory buffer simultaneously. Because concurrent reads/writes cause data race conditions, the Atomics object provides atomic operations (Atomics.add, Atomics.load, Atomics.compareExchange) and thread synchronization (Atomics.wait, Atomics.notify).",
    "explanation": "SharedArrayBuffer enables shared memory; Atomics provides thread-safe synchronization locks.",
    "interviewAnswer": "SharedArrayBuffer allows multiple Web Workers and the main thread to share the exact same physical memory buffer simultaneously. Because concurrent reads/writes cause data race conditions, the Atomics object provides atomic operations (Atomics.add, Atomics.load, Atomics.compareExchange) and thread synchronization (Atomics.wait, Atomics.notify). SharedArrayBuffer enables shared memory; Atomics provides thread-safe synchronization locks.",
    "importantPoints": [
      "SharedArrayBuffer allows multiple Web Workers and the main thread to share the exact same physical memory buffer simultaneously. Because concurrent reads/writes cause data race conditions, the Atomics object provides atomic operations (Atomics.add, Atomics.load, Atomics.compareExchange) and thread synchronization (Atomics.wait, Atomics.notify).",
      "SharedArrayBuffer enables shared memory; Atomics provides thread-safe synchronization locks."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "sharedarraybuffer",
      "atomics",
      "multithreading",
      "concurrency"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "Why was SharedArrayBuffer disabled in browsers following Spectre, and what headers are required to enable it today?",
    "answer": "SharedArrayBuffer provided high-precision timers used by the Spectre side-channel attack to infer CPU cache contents across origins. To re-enable it today, websites must achieve Cross-Origin Isolation by sending two HTTP headers: Cross-Origin-Opener-Policy: same-origin and Cross-Origin-Embedder-Policy: require-corp.",
    "explanation": "Requires COOP and COEP HTTP headers to isolate memory against Spectre side-channel attacks.",
    "interviewAnswer": "SharedArrayBuffer provided high-precision timers used by the Spectre side-channel attack to infer CPU cache contents across origins. To re-enable it today, websites must achieve Cross-Origin Isolation by sending two HTTP headers: Cross-Origin-Opener-Policy: same-origin and Cross-Origin-Embedder-Policy: require-corp. Requires COOP and COEP HTTP headers to isolate memory against Spectre side-channel attacks.",
    "importantPoints": [
      "SharedArrayBuffer provided high-precision timers used by the Spectre side-channel attack to infer CPU cache contents across origins. To re-enable it today, websites must achieve Cross-Origin Isolation by sending two HTTP headers: Cross-Origin-Opener-Policy: same-origin and Cross-Origin-Embedder-Policy: require-corp.",
      "Requires COOP and COEP HTTP headers to isolate memory against Spectre side-channel attacks."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "security",
      "spectre",
      "sharedarraybuffer",
      "coop",
      "coep"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: function F() {} F.prototype.x = 1; const a = new F(); F.prototype = { x: 2 }; const b = new F(); console.log(a.x, b.x);?",
    "answer": "Outputs 1, 2. When `a` was constructed, its [[Prototype]] was bound to the original prototype object ({ x: 1 }). Reassigning F.prototype creates a new object for future instances (`b`), but does not change the [[Prototype]] reference of already existing instances (`a`).",
    "explanation": "Reassigning a constructor's prototype property affects only future instances.",
    "interviewAnswer": "Outputs 1, 2. When `a` was constructed, its [[Prototype]] was bound to the original prototype object ({ x: 1 }). Reassigning F.prototype creates a new object for future instances (`b`), but does not change the [[Prototype]] reference of already existing instances (`a`). Reassigning a constructor's prototype property affects only future instances.",
    "importantPoints": [
      "Outputs 1, 2. When `a` was constructed, its [[Prototype]] was bound to the original prototype object ({ x: 1 }). Reassigning F.prototype creates a new object for future instances (`b`), but does not change the [[Prototype]] reference of already existing instances (`a`).",
      "Reassigning a constructor's prototype property affects only future instances."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "prototypes",
      "output-prediction",
      "prototype-reassignment"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the difference between instanceof and Array.isArray() when checking arrays across iframes?",
    "answer": "`instanceof` checks if Array.prototype exists anywhere on the object prototype chain. Across iframes, each iframe has its own global execution realm with its own distinct Array constructor (iframe.contentWindow.Array !== window.Array), causing arr instanceof Array to fail (false). Array.isArray(arr) reliably checks the internal [[Class]] / engine array brand across realms.",
    "explanation": "instanceof fails across iframe realms; Array.isArray works reliably across all realms.",
    "interviewAnswer": "`instanceof` checks if Array.prototype exists anywhere on the object prototype chain. Across iframes, each iframe has its own global execution realm with its own distinct Array constructor (iframe.contentWindow.Array !== window.Array), causing arr instanceof Array to fail (false). Array.isArray(arr) reliably checks the internal [[Class]] / engine array brand across realms. instanceof fails across iframe realms; Array.isArray works reliably across all realms.",
    "importantPoints": [
      "`instanceof` checks if Array.prototype exists anywhere on the object prototype chain. Across iframes, each iframe has its own global execution realm with its own distinct Array constructor (iframe.contentWindow.Array !== window.Array), causing arr instanceof Array to fail (false). Array.isArray(arr) reliably checks the internal [[Class]] / engine array brand across realms.",
      "instanceof fails across iframe realms; Array.isArray works reliably across all realms."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "instanceof",
      "array-isarray",
      "iframes",
      "cross-realm"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: class Base {} class Derived extends Base {} const d = new Derived(); console.log(d instanceof Base, d instanceof Derived, d instanceof Object);?",
    "answer": "Outputs true, true, true. Because Derived extends Base, Derived.prototype inherits from Base.prototype, which inherits from Object.prototype. instanceof returns true for all ancestors in the chain.",
    "explanation": "instanceof traverses the entire prototype chain.",
    "interviewAnswer": "Outputs true, true, true. Because Derived extends Base, Derived.prototype inherits from Base.prototype, which inherits from Object.prototype. instanceof returns true for all ancestors in the chain. instanceof traverses the entire prototype chain.",
    "importantPoints": [
      "Outputs true, true, true. Because Derived extends Base, Derived.prototype inherits from Base.prototype, which inherits from Object.prototype. instanceof returns true for all ancestors in the chain.",
      "instanceof traverses the entire prototype chain."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "classes",
      "output-prediction",
      "instanceof",
      "inheritance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "How does the Symbol.hasInstance method allow customizing the behavior of the `instanceof` operator?",
    "answer": "When `obj instanceof Class` is evaluated, JavaScript calls `Class[Symbol.hasInstance](obj)`. By defining a custom static `[Symbol.hasInstance](instance)` method on a class or constructor function, you can dynamically control whether an instance is considered an instance of that class.",
    "explanation": "Overrides the instanceof operator logic for custom type verification.",
    "interviewAnswer": "When `obj instanceof Class` is evaluated, JavaScript calls `Class[Symbol.hasInstance](obj)`. By defining a custom static `[Symbol.hasInstance](instance)` method on a class or constructor function, you can dynamically control whether an instance is considered an instance of that class. Overrides the instanceof operator logic for custom type verification.",
    "importantPoints": [
      "When `obj instanceof Class` is evaluated, JavaScript calls `Class[Symbol.hasInstance](obj)`. By defining a custom static `[Symbol.hasInstance](instance)` method on a class or constructor function, you can dynamically control whether an instance is considered an instance of that class.",
      "Overrides the instanceof operator logic for custom type verification."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "symbols",
      "symbol-hasInstance",
      "instanceof",
      "metaprogramming"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: class Even { static [Symbol.hasInstance](num) { return typeof num === \"number\" && num % 2 === 0; } } console.log(4 instanceof Even, 5 instanceof Even);?",
    "answer": "Outputs true, false. The static [Symbol.hasInstance] method intercepts instanceof, returning true for even numbers and false otherwise.",
    "explanation": "Demonstrates custom instanceof interception using Symbol.hasInstance.",
    "interviewAnswer": "Outputs true, false. The static [Symbol.hasInstance] method intercepts instanceof, returning true for even numbers and false otherwise. Demonstrates custom instanceof interception using Symbol.hasInstance.",
    "importantPoints": [
      "Outputs true, false. The static [Symbol.hasInstance] method intercepts instanceof, returning true for even numbers and false otherwise.",
      "Demonstrates custom instanceof interception using Symbol.hasInstance."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "symbols",
      "output-prediction",
      "symbol-hasInstance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "How do you create an Infinite Generator, and why does it not crash the browser with an Out-of-Memory error?",
    "answer": "function* idGen() { let id = 1; while (true) yield id++; } It does not crash because generators are lazy: execution pauses at each yield statement. Memory and CPU are only consumed when .next() is explicitly invoked by the consumer to pull the next value.",
    "explanation": "Generators evaluate lazily on-demand, enabling infinite sequences without infinite memory.",
    "interviewAnswer": "function* idGen() { let id = 1; while (true) yield id++; } It does not crash because generators are lazy: execution pauses at each yield statement. Memory and CPU are only consumed when .next() is explicitly invoked by the consumer to pull the next value. Generators evaluate lazily on-demand, enabling infinite sequences without infinite memory.",
    "importantPoints": [
      "function* idGen() { let id = 1; while (true) yield id++; } It does not crash because generators are lazy: execution pauses at each yield statement. Memory and CPU are only consumed when .next() is explicitly invoked by the consumer to pull the next value.",
      "Generators evaluate lazily on-demand, enabling infinite sequences without infinite memory."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "generators",
      "infinite-sequences",
      "lazy-evaluation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: function* fib() { let [a, b] = [0, 1]; while (true) { yield a; [a, b] = [b, a + b]; } } const f = fib(); console.log(f.next().value, f.next().value, f.next().value, f.next().value);?",
    "answer": "Outputs 0, 1, 1, 2. Generates the first four Fibonacci numbers lazily via yield.",
    "explanation": "Infinite Fibonacci generator evaluating on each next() call.",
    "interviewAnswer": "Outputs 0, 1, 1, 2. Generates the first four Fibonacci numbers lazily via yield. Infinite Fibonacci generator evaluating on each next() call.",
    "importantPoints": [
      "Outputs 0, 1, 1, 2. Generates the first four Fibonacci numbers lazily via yield.",
      "Infinite Fibonacci generator evaluating on each next() call."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "generators",
      "output-prediction",
      "fibonacci"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the difference between Reflect.has(obj, prop) and the `in` operator?",
    "answer": "Reflect.has(obj, prop) is a function equivalent of the `prop in obj` operator. While they perform identical checks (returning true if the property exists on obj or its prototype chain), Reflect.has is a first-class function that can be passed as a callback or used inside Proxy traps.",
    "explanation": "Reflect.has(target, prop) is the functional mirror of `prop in target`.",
    "interviewAnswer": "Reflect.has(obj, prop) is a function equivalent of the `prop in obj` operator. While they perform identical checks (returning true if the property exists on obj or its prototype chain), Reflect.has is a first-class function that can be passed as a callback or used inside Proxy traps. Reflect.has(target, prop) is the functional mirror of `prop in target`.",
    "importantPoints": [
      "Reflect.has(obj, prop) is a function equivalent of the `prop in obj` operator. While they perform identical checks (returning true if the property exists on obj or its prototype chain), Reflect.has is a first-class function that can be passed as a callback or used inside Proxy traps.",
      "Reflect.has(target, prop) is the functional mirror of `prop in target`."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "reflect",
      "in-operator",
      "metaprogramming"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: const target = { a: 1 }; const p = new Proxy(target, { has(t, k) { if (k === \"secret\") return false; return Reflect.has(t, k); } }); console.log(\"a\" in p, \"secret\" in p);?",
    "answer": "Outputs true, false. The Proxy `has` trap intercepts the `in` operator, masking the presence of \"secret\".",
    "explanation": "Proxy `has` trap intercepts `key in object` checks.",
    "interviewAnswer": "Outputs true, false. The Proxy `has` trap intercepts the `in` operator, masking the presence of \"secret\". Proxy `has` trap intercepts `key in object` checks.",
    "importantPoints": [
      "Outputs true, false. The Proxy `has` trap intercepts the `in` operator, masking the presence of \"secret\".",
      "Proxy `has` trap intercepts `key in object` checks."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "proxy",
      "output-prediction",
      "has-trap"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What are Property Getter and Setter traps in Proxies, and how do they differ from Object.defineProperty accessors?",
    "answer": "Object.defineProperty getters and setters must be attached to specific named properties upfront. A Proxy `get` or `set` trap intercepts property lookups dynamically for ANY property accessed on the object, even properties that do not exist yet. This enables dynamic mock objects, ORM record models, and RPC client stubs.",
    "explanation": "Proxies intercept lookups dynamically for all arbitrary properties, existing or future.",
    "interviewAnswer": "Object.defineProperty getters and setters must be attached to specific named properties upfront. A Proxy `get` or `set` trap intercepts property lookups dynamically for ANY property accessed on the object, even properties that do not exist yet. This enables dynamic mock objects, ORM record models, and RPC client stubs. Proxies intercept lookups dynamically for all arbitrary properties, existing or future.",
    "importantPoints": [
      "Object.defineProperty getters and setters must be attached to specific named properties upfront. A Proxy `get` or `set` trap intercepts property lookups dynamically for ANY property accessed on the object, even properties that do not exist yet. This enables dynamic mock objects, ORM record models, and RPC client stubs.",
      "Proxies intercept lookups dynamically for all arbitrary properties, existing or future."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "proxy",
      "getters-setters",
      "object-defineProperty"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "Implement a Safe Object Navigation Proxy that returns undefined instead of throwing TypeError for deep non-existent properties.",
    "answer": "function safe(target) { return new Proxy(target, { get(t, p) { if (p in t) { const v = t[p]; return typeof v === \"object\" && v !== null ? safe(v) : v; } return undefined; } }); }",
    "explanation": "Recursively wraps nested objects in proxies to gracefully handle undefined property chains.",
    "interviewAnswer": "function safe(target) { return new Proxy(target, { get(t, p) { if (p in t) { const v = t[p]; return typeof v === \"object\" && v !== null ? safe(v) : v; } return undefined; } }); } Recursively wraps nested objects in proxies to gracefully handle undefined property chains.",
    "importantPoints": [
      "function safe(target) { return new Proxy(target, { get(t, p) { if (p in t) { const v = t[p]; return typeof v === \"object\" && v !== null ? safe(v) : v; } return undefined; } }); }",
      "Recursively wraps nested objects in proxies to gracefully handle undefined property chains."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "javascript",
      "proxy",
      "safe-navigation",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: class Counter { #count = 0; inc() { this.#count++; } get count() { return this.#count; } } const c = new Counter(); c.inc(); console.log(c.count);?",
    "answer": "Outputs 1. The private field #count is modified by inc() and accessed publicly via the getter count.",
    "explanation": "Private class fields are cleanly exposed via getters.",
    "interviewAnswer": "Outputs 1. The private field #count is modified by inc() and accessed publicly via the getter count. Private class fields are cleanly exposed via getters.",
    "importantPoints": [
      "Outputs 1. The private field #count is modified by inc() and accessed publicly via the getter count.",
      "Private class fields are cleanly exposed via getters."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "classes",
      "output-prediction",
      "private-fields",
      "getters"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "How does the V8 Engine optimize memory using String Deduplication and Sliced Strings?",
    "answer": "V8 stores strings in specialized internal formats: 1) Internalized Strings (atomized): identical string literals share a single memory address. 2) Sliced Strings: substring operations (str.slice()) avoid copying characters by creating a pointer to the original parent string with an offset and length. If a tiny slice references a 50MB string, the entire 50MB string is retained in RAM (sliced string leak).",
    "explanation": "Sliced strings avoid copying but can leak large parent strings if kept alive.",
    "interviewAnswer": "V8 stores strings in specialized internal formats: 1) Internalized Strings (atomized): identical string literals share a single memory address. 2) Sliced Strings: substring operations (str.slice()) avoid copying characters by creating a pointer to the original parent string with an offset and length. If a tiny slice references a 50MB string, the entire 50MB string is retained in RAM (sliced string leak). Sliced strings avoid copying but can leak large parent strings if kept alive.",
    "importantPoints": [
      "V8 stores strings in specialized internal formats: 1) Internalized Strings (atomized): identical string literals share a single memory address. 2) Sliced Strings: substring operations (str.slice()) avoid copying characters by creating a pointer to the original parent string with an offset and length. If a tiny slice references a 50MB string, the entire 50MB string is retained in RAM (sliced string leak).",
      "Sliced strings avoid copying but can leak large parent strings if kept alive."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "javascript",
      "v8",
      "strings",
      "sliced-strings",
      "memory-leaks",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "How do you fix a memory leak caused by a Sliced String retaining a large parent string in V8?",
    "answer": "Force V8 to allocate a new independent string by flattening it: const clean = (str.slice(0, 10) + \"\"); or in modern V8: const clean = str.slice(0, 10).slice(); Or pass it through a buffer/JSON transform if necessary, ensuring the large parent string can be garbage collected.",
    "explanation": "Concatenating with empty string or creating a fresh string breaks the parent retention link.",
    "interviewAnswer": "Force V8 to allocate a new independent string by flattening it: const clean = (str.slice(0, 10) + \"\"); or in modern V8: const clean = str.slice(0, 10).slice(); Or pass it through a buffer/JSON transform if necessary, ensuring the large parent string can be garbage collected. Concatenating with empty string or creating a fresh string breaks the parent retention link.",
    "importantPoints": [
      "Force V8 to allocate a new independent string by flattening it: const clean = (str.slice(0, 10) + \"\"); or in modern V8: const clean = str.slice(0, 10).slice(); Or pass it through a buffer/JSON transform if necessary, ensuring the large parent string can be garbage collected.",
      "Concatenating with empty string or creating a fresh string breaks the parent retention link."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "javascript",
      "v8",
      "memory-leaks",
      "sliced-strings",
      "debugging"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: const map = new WeakMap(); let key = { id: 1 }; map.set(key, \"data\"); key = null; console.log(map.has(key));?",
    "answer": "Outputs false. key was reassigned to null, so passing null to map.has(null) returns false (and WeakMap requires object keys). The original object has no remaining references and is eligible for garbage collection.",
    "explanation": "WeakMap entries are automatically collected when key references are cleared.",
    "interviewAnswer": "Outputs false. key was reassigned to null, so passing null to map.has(null) returns false (and WeakMap requires object keys). The original object has no remaining references and is eligible for garbage collection. WeakMap entries are automatically collected when key references are cleared.",
    "importantPoints": [
      "Outputs false. key was reassigned to null, so passing null to map.has(null) returns false (and WeakMap requires object keys). The original object has no remaining references and is eligible for garbage collection.",
      "WeakMap entries are automatically collected when key references are cleared."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "weakmap",
      "output-prediction",
      "garbage-collection"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the difference between Object.hasOwn() and Object.prototype.hasOwnProperty() in modern JavaScript?",
    "answer": "Object.hasOwn(obj, prop) (ES2022) is a static method that safely checks own properties without relying on Object.prototype. Object.prototype.hasOwnProperty fails if the object has no prototype (Object.create(null)) or if hasOwnProperty has been shadowed/overridden on the object itself.",
    "explanation": "Object.hasOwn is null-prototype safe and cannot be shadowed.",
    "interviewAnswer": "Object.hasOwn(obj, prop) (ES2022) is a static method that safely checks own properties without relying on Object.prototype. Object.prototype.hasOwnProperty fails if the object has no prototype (Object.create(null)) or if hasOwnProperty has been shadowed/overridden on the object itself. Object.hasOwn is null-prototype safe and cannot be shadowed.",
    "importantPoints": [
      "Object.hasOwn(obj, prop) (ES2022) is a static method that safely checks own properties without relying on Object.prototype. Object.prototype.hasOwnProperty fails if the object has no prototype (Object.create(null)) or if hasOwnProperty has been shadowed/overridden on the object itself.",
      "Object.hasOwn is null-prototype safe and cannot be shadowed."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects",
      "hasOwn",
      "hasOwnProperty",
      "es2022"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "advanced-javascript",
    "question": "What is the output of: const obj = Object.create(null); try { console.log(obj.hasOwnProperty(\"a\")); } catch(e) { console.log(\"Caught:\", e.name); } console.log(Object.hasOwn(obj, \"a\"));?",
    "answer": "Outputs \"Caught: TypeError\", then false. obj has no prototype, so calling obj.hasOwnProperty throws TypeError (not a function). Object.hasOwn(obj, \"a\") executes safely and returns false.",
    "explanation": "Object.create(null) has no hasOwnProperty method; Object.hasOwn handles it safely.",
    "interviewAnswer": "Outputs \"Caught: TypeError\", then false. obj has no prototype, so calling obj.hasOwnProperty throws TypeError (not a function). Object.hasOwn(obj, \"a\") executes safely and returns false. Object.create(null) has no hasOwnProperty method; Object.hasOwn handles it safely.",
    "importantPoints": [
      "Outputs \"Caught: TypeError\", then false. obj has no prototype, so calling obj.hasOwnProperty throws TypeError (not a function). Object.hasOwn(obj, \"a\") executes safely and returns false.",
      "Object.create(null) has no hasOwnProperty method; Object.hasOwn handles it safely."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects",
      "output-prediction",
      "hasOwn",
      "object-create"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
