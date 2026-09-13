import { SeedQuestion } from '../types';

export const javascriptPromisesAsyncAwaitQuestions: SeedQuestion[] = [
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What are the three mutually exclusive states of a JavaScript Promise, and what does it mean that a Promise is \"settled\"?",
    "answer": "A Promise has three states: 1) Pending (initial state), 2) Fulfilled (operation completed successfully), and 3) Rejected (operation failed). A Promise is \"settled\" when it is either fulfilled or rejected. Once settled, its state becomes permanently immutable and cannot transition again.",
    "explanation": "Settled is not a state itself, but a term meaning either fulfilled or rejected.",
    "interviewAnswer": "A Promise has three states: 1) Pending (initial state), 2) Fulfilled (operation completed successfully), and 3) Rejected (operation failed). A Promise is \"settled\" when it is either fulfilled or rejected. Once settled, its state becomes permanently immutable and cannot transition again. Settled is not a state itself, but a term meaning either fulfilled or rejected.",
    "importantPoints": [
      "A Promise has three states: 1) Pending (initial state), 2) Fulfilled (operation completed successfully), and 3) Rejected (operation failed). A Promise is \"settled\" when it is either fulfilled or rejected. Once settled, its state becomes permanently immutable and cannot transition again.",
      "Settled is not a state itself, but a term meaning either fulfilled or rejected."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "promise-states",
      "fundamentals"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "How does Promise chaining work, and what determines the value and state of the promise returned by .then()?",
    "answer": "Every call to .then() returns a new Promise. If the handler returns a value, the new Promise resolves with that value. If the handler throws an error, the new Promise rejects with that error. If the handler returns another Promise, the new Promise adopts the state and settled value of that returned Promise.",
    "explanation": "Returning a value resolves; throwing an error rejects; returning a promise unwraps/flattens it.",
    "interviewAnswer": "Every call to .then() returns a new Promise. If the handler returns a value, the new Promise resolves with that value. If the handler throws an error, the new Promise rejects with that error. If the handler returns another Promise, the new Promise adopts the state and settled value of that returned Promise. Returning a value resolves; throwing an error rejects; returning a promise unwraps/flattens it.",
    "importantPoints": [
      "Every call to .then() returns a new Promise. If the handler returns a value, the new Promise resolves with that value. If the handler throws an error, the new Promise rejects with that error. If the handler returns another Promise, the new Promise adopts the state and settled value of that returned Promise.",
      "Returning a value resolves; throwing an error rejects; returning a promise unwraps/flattens it."
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
      "promises",
      "promise-chaining",
      "unwrapping"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "Several async operations must run concurrently, but one failure should not prevent others from completing. How would you approach this?",
    "answer": "Use Promise.allSettled(iterable). Unlike Promise.all (which short-circuits and rejects immediately on the first error), Promise.allSettled waits for all promises to settle and returns an array of objects describing each outcome: { status: \"fulfilled\", value } or { status: \"rejected\", reason }.",
    "explanation": "Promise.allSettled guarantees all promises complete regardless of individual rejections.",
    "interviewAnswer": "Use Promise.allSettled(iterable). Unlike Promise.all (which short-circuits and rejects immediately on the first error), Promise.allSettled waits for all promises to settle and returns an array of objects describing each outcome: { status: \"fulfilled\", value } or { status: \"rejected\", reason }. Promise.allSettled guarantees all promises complete regardless of individual rejections.",
    "importantPoints": [
      "Use Promise.allSettled(iterable). Unlike Promise.all (which short-circuits and rejects immediately on the first error), Promise.allSettled waits for all promises to settle and returns an array of objects describing each outcome: { status: \"fulfilled\", value } or { status: \"rejected\", reason }.",
      "Promise.allSettled guarantees all promises complete regardless of individual rejections."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Logical / Scenario-Based",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "allSettled",
      "concurrency",
      "production-scenario"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "Compare Promise.all, Promise.allSettled, Promise.race, and Promise.any: When do they resolve, reject, and short-circuit?",
    "answer": "1) Promise.all: Resolves when ALL fulfill; rejects immediately on FIRST rejection. 2) Promise.allSettled: Never short-circuits; resolves when ALL settle. 3) Promise.race: Settles as soon as the FIRST promise settles (fulfilled OR rejected). 4) Promise.any: Resolves as soon as the FIRST fulfills; rejects with AggregateError only if ALL reject.",
    "explanation": "all = all succeed; allSettled = all finish; race = first to settle; any = first to succeed.",
    "interviewAnswer": "1) Promise.all: Resolves when ALL fulfill; rejects immediately on FIRST rejection. 2) Promise.allSettled: Never short-circuits; resolves when ALL settle. 3) Promise.race: Settles as soon as the FIRST promise settles (fulfilled OR rejected). 4) Promise.any: Resolves as soon as the FIRST fulfills; rejects with AggregateError only if ALL reject. all = all succeed; allSettled = all finish; race = first to settle; any = first to succeed.",
    "importantPoints": [
      "1) Promise.all: Resolves when ALL fulfill; rejects immediately on FIRST rejection. 2) Promise.allSettled: Never short-circuits; resolves when ALL settle. 3) Promise.race: Settles as soon as the FIRST promise settles (fulfilled OR rejected). 4) Promise.any: Resolves as soon as the FIRST fulfills; rejects with AggregateError only if ALL reject.",
      "all = all succeed; allSettled = all finish; race = first to settle; any = first to succeed."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "combinators",
      "all",
      "race",
      "any",
      "allSettled"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: Promise.resolve(1).then(x => x + 1).then(x => { throw new Error(x); }).catch(err => err.message).then(x => console.log(x));?",
    "answer": "Outputs \"2\". 1 + 1 = 2. The second handler throws Error(\"2\"). The .catch() handler intercepts the error and returns err.message (\"2\"). Because .catch() returned normally, the chained .then() receives \"2\" and logs it.",
    "explanation": "A .catch() block that does not re-throw returns a fulfilled Promise, resuming the chain.",
    "interviewAnswer": "Outputs \"2\". 1 + 1 = 2. The second handler throws Error(\"2\"). The .catch() handler intercepts the error and returns err.message (\"2\"). Because .catch() returned normally, the chained .then() receives \"2\" and logs it. A .catch() block that does not re-throw returns a fulfilled Promise, resuming the chain.",
    "importantPoints": [
      "Outputs \"2\". 1 + 1 = 2. The second handler throws Error(\"2\"). The .catch() handler intercepts the error and returns err.message (\"2\"). Because .catch() returned normally, the chained .then() receives \"2\" and logs it.",
      "A .catch() block that does not re-throw returns a fulfilled Promise, resuming the chain."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "output-prediction",
      "error-handling",
      "chaining"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "Why does Promise.reject(err) bypass intermediate .then() callbacks, and how does error propagation work in Promise chains?",
    "answer": "When a Promise rejects, the engine skips all onFulfilled handlers down the chain until it encounters an onRejected handler (either second argument to .then(null, onRejected) or .catch(onRejected)). This mimics synchronous try...catch error bubbling down the call stack.",
    "explanation": "Rejection flows down the promise chain until intercepted by a catch handler.",
    "interviewAnswer": "When a Promise rejects, the engine skips all onFulfilled handlers down the chain until it encounters an onRejected handler (either second argument to .then(null, onRejected) or .catch(onRejected)). This mimics synchronous try...catch error bubbling down the call stack. Rejection flows down the promise chain until intercepted by a catch handler.",
    "importantPoints": [
      "When a Promise rejects, the engine skips all onFulfilled handlers down the chain until it encounters an onRejected handler (either second argument to .then(null, onRejected) or .catch(onRejected)). This mimics synchronous try...catch error bubbling down the call stack.",
      "Rejection flows down the promise chain until intercepted by a catch handler."
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
      "promises",
      "error-propagation",
      "catch"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: const p = Promise.resolve(\"A\"); p.then(v => { console.log(v); return \"B\"; }); p.then(v => console.log(v));?",
    "answer": "Outputs \"A\" then \"A\". Promises are immutable. Calling .then() multiple times on the same promise instance attaches multiple independent listeners to that promise. Neither listener mutates p, and both receive its settled value \"A\".",
    "explanation": "Branching promise handlers independently observe the same immutable resolved value.",
    "interviewAnswer": "Outputs \"A\" then \"A\". Promises are immutable. Calling .then() multiple times on the same promise instance attaches multiple independent listeners to that promise. Neither listener mutates p, and both receive its settled value \"A\". Branching promise handlers independently observe the same immutable resolved value.",
    "importantPoints": [
      "Outputs \"A\" then \"A\". Promises are immutable. Calling .then() multiple times on the same promise instance attaches multiple independent listeners to that promise. Neither listener mutates p, and both receive its settled value \"A\".",
      "Branching promise handlers independently observe the same immutable resolved value."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "output-prediction",
      "branching",
      "immutability"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the difference between sequential execution and parallel execution with async/await, and what is a common anti-pattern?",
    "answer": "Sequential: const a = await fetchA(); const b = await fetchB(); (takes timeA + timeB). Parallel: const [a, b] = await Promise.all([fetchA(), fetchB()]); (takes max(timeA, timeB)). The common anti-pattern is awaiting independent promises sequentially, unnecessarily serializing network latency.",
    "explanation": "Always kick off independent async operations concurrently with Promise.all.",
    "interviewAnswer": "Sequential: const a = await fetchA(); const b = await fetchB(); (takes timeA + timeB). Parallel: const [a, b] = await Promise.all([fetchA(), fetchB()]); (takes max(timeA, timeB)). The common anti-pattern is awaiting independent promises sequentially, unnecessarily serializing network latency. Always kick off independent async operations concurrently with Promise.all.",
    "importantPoints": [
      "Sequential: const a = await fetchA(); const b = await fetchB(); (takes timeA + timeB). Parallel: const [a, b] = await Promise.all([fetchA(), fetchB()]); (takes max(timeA, timeB)). The common anti-pattern is awaiting independent promises sequentially, unnecessarily serializing network latency.",
      "Always kick off independent async operations concurrently with Promise.all."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "javascript",
      "async-await",
      "parallelism",
      "performance",
      "anti-patterns"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: Promise.all([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]).catch(err => console.log(\"Caught:\", err));?",
    "answer": "Outputs \"Caught: 2\". Promise.all short-circuits on the first rejection, rejecting immediately with the reason 2. The results of the other promises are discarded.",
    "explanation": "Promise.all fails fast on the first encountered rejection.",
    "interviewAnswer": "Outputs \"Caught: 2\". Promise.all short-circuits on the first rejection, rejecting immediately with the reason 2. The results of the other promises are discarded. Promise.all fails fast on the first encountered rejection.",
    "importantPoints": [
      "Outputs \"Caught: 2\". Promise.all short-circuits on the first rejection, rejecting immediately with the reason 2. The results of the other promises are discarded.",
      "Promise.all fails fast on the first encountered rejection."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "output-prediction",
      "promise-all"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the AggregateError object in JavaScript, and when is it thrown?",
    "answer": "AggregateError is a built-in Error subclass that represents multiple errors wrapped into a single error object. It is thrown by Promise.any() when all input promises reject. Its .errors property contains an array of all individual rejection reasons.",
    "explanation": "Introduced in ES2021 specifically for Promise.any failure scenarios.",
    "interviewAnswer": "AggregateError is a built-in Error subclass that represents multiple errors wrapped into a single error object. It is thrown by Promise.any() when all input promises reject. Its .errors property contains an array of all individual rejection reasons. Introduced in ES2021 specifically for Promise.any failure scenarios.",
    "importantPoints": [
      "AggregateError is a built-in Error subclass that represents multiple errors wrapped into a single error object. It is thrown by Promise.any() when all input promises reject. Its .errors property contains an array of all individual rejection reasons.",
      "Introduced in ES2021 specifically for Promise.any failure scenarios."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "promises",
      "aggregate-error",
      "promise-any",
      "es2021"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: Promise.any([Promise.reject(\"E1\"), Promise.reject(\"E2\")]).catch(e => console.log(e instanceof AggregateError, e.errors));?",
    "answer": "Outputs true, followed by [\"E1\", \"E2\"]. When all promises passed to Promise.any reject, it rejects with an AggregateError whose errors property contains all rejection reasons.",
    "explanation": "Demonstrates Promise.any failure semantics with AggregateError.",
    "interviewAnswer": "Outputs true, followed by [\"E1\", \"E2\"]. When all promises passed to Promise.any reject, it rejects with an AggregateError whose errors property contains all rejection reasons. Demonstrates Promise.any failure semantics with AggregateError.",
    "importantPoints": [
      "Outputs true, followed by [\"E1\", \"E2\"]. When all promises passed to Promise.any reject, it rejects with an AggregateError whose errors property contains all rejection reasons.",
      "Demonstrates Promise.any failure semantics with AggregateError."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "promises",
      "output-prediction",
      "promise-any",
      "aggregate-error"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "How does the Promise executor function work, and why does throwing inside the executor reject the promise?",
    "answer": "The executor function (resolve, reject) => {} runs synchronously when new Promise() is constructed. The Promise implementation wraps the executor in an implicit try...catch. If an unhandled exception is thrown synchronously inside the executor, it is caught and converted into reject(error).",
    "explanation": "The executor runs synchronously immediately upon instantiation; thrown errors become rejections.",
    "interviewAnswer": "The executor function (resolve, reject) => {} runs synchronously when new Promise() is constructed. The Promise implementation wraps the executor in an implicit try...catch. If an unhandled exception is thrown synchronously inside the executor, it is caught and converted into reject(error). The executor runs synchronously immediately upon instantiation; thrown errors become rejections.",
    "importantPoints": [
      "The executor function (resolve, reject) => {} runs synchronously when new Promise() is constructed. The Promise implementation wraps the executor in an implicit try...catch. If an unhandled exception is thrown synchronously inside the executor, it is caught and converted into reject(error).",
      "The executor runs synchronously immediately upon instantiation; thrown errors become rejections."
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
      "promises",
      "executor",
      "synchronous"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: console.log(\"1\"); new Promise((resolve) => { console.log(\"2\"); resolve(\"3\"); }).then(v => console.log(v)); console.log(\"4\");?",
    "answer": "Outputs 1, 2, 4, 3. 1 logs. The Promise executor runs synchronously, logging 2 and resolving. 4 logs synchronously. Then the .then() microtask runs, logging 3.",
    "explanation": "Promise executor functions execute synchronously during construction, not in microtasks.",
    "interviewAnswer": "Outputs 1, 2, 4, 3. 1 logs. The Promise executor runs synchronously, logging 2 and resolving. 4 logs synchronously. Then the .then() microtask runs, logging 3. Promise executor functions execute synchronously during construction, not in microtasks.",
    "importantPoints": [
      "Outputs 1, 2, 4, 3. 1 logs. The Promise executor runs synchronously, logging 2 and resolving. 4 logs synchronously. Then the .then() microtask runs, logging 3.",
      "Promise executor functions execute synchronously during construction, not in microtasks."
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
      "promises",
      "output-prediction",
      "executor",
      "microtasks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is a \"Thenable\" in JavaScript, and how does Promise resolution handle Thenable objects?",
    "answer": "A Thenable is any object or function that defines a .then() method conforming to the Promises/A+ spec. When Promise.resolve(thenable) or resolve(thenable) is called, JavaScript unwraps it by invoking thenable.then(resolve, reject), adopting its eventual fulfillment or rejection.",
    "explanation": "Duck typing allows different Promise libraries (Bluebird, Q, native) to interoperate seamlessly.",
    "interviewAnswer": "A Thenable is any object or function that defines a .then() method conforming to the Promises/A+ spec. When Promise.resolve(thenable) or resolve(thenable) is called, JavaScript unwraps it by invoking thenable.then(resolve, reject), adopting its eventual fulfillment or rejection. Duck typing allows different Promise libraries (Bluebird, Q, native) to interoperate seamlessly.",
    "importantPoints": [
      "A Thenable is any object or function that defines a .then() method conforming to the Promises/A+ spec. When Promise.resolve(thenable) or resolve(thenable) is called, JavaScript unwraps it by invoking thenable.then(resolve, reject), adopting its eventual fulfillment or rejection.",
      "Duck typing allows different Promise libraries (Bluebird, Q, native) to interoperate seamlessly."
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
      "promises",
      "thenable",
      "promises-aplus"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: Promise.resolve({ then(resolve) { resolve(42); } }).then(v => console.log(v));?",
    "answer": "Outputs 42. JavaScript recognizes the thenable object, calls its then method, and unwraps the resolved value 42 to the outer Promise chain.",
    "explanation": "Demonstrates automatic unwrapping of Thenable objects.",
    "interviewAnswer": "Outputs 42. JavaScript recognizes the thenable object, calls its then method, and unwraps the resolved value 42 to the outer Promise chain. Demonstrates automatic unwrapping of Thenable objects.",
    "importantPoints": [
      "Outputs 42. JavaScript recognizes the thenable object, calls its then method, and unwraps the resolved value 42 to the outer Promise chain.",
      "Demonstrates automatic unwrapping of Thenable objects."
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
      "promises",
      "output-prediction",
      "thenable"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "How does Promise.prototype.finally() differ from .then() and .catch()?",
    "answer": ".finally(callback) executes when a Promise settles (fulfilled or rejected) with no arguments passed to callback. Crucially, .finally() transparently passes through the previous settled value or rejection reason to subsequent handlers, unless the finally callback returns a rejected promise or throws an error.",
    "explanation": "Used for cleanup (e.g. hiding loading spinners, closing handles) regardless of success or failure.",
    "interviewAnswer": ".finally(callback) executes when a Promise settles (fulfilled or rejected) with no arguments passed to callback. Crucially, .finally() transparently passes through the previous settled value or rejection reason to subsequent handlers, unless the finally callback returns a rejected promise or throws an error. Used for cleanup (e.g. hiding loading spinners, closing handles) regardless of success or failure.",
    "importantPoints": [
      ".finally(callback) executes when a Promise settles (fulfilled or rejected) with no arguments passed to callback. Crucially, .finally() transparently passes through the previous settled value or rejection reason to subsequent handlers, unless the finally callback returns a rejected promise or throws an error.",
      "Used for cleanup (e.g. hiding loading spinners, closing handles) regardless of success or failure."
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
      "promises",
      "finally",
      "cleanup"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: Promise.resolve(\"Success\").finally(() => \"Ignored\").then(v => console.log(v));?",
    "answer": "Outputs \"Success\". Values returned from a .finally() callback are ignored; the resolved value of the preceding promise passes through untouched.",
    "explanation": "finally preserves the incoming fulfillment value unless it throws or returns a rejected promise.",
    "interviewAnswer": "Outputs \"Success\". Values returned from a .finally() callback are ignored; the resolved value of the preceding promise passes through untouched. finally preserves the incoming fulfillment value unless it throws or returns a rejected promise.",
    "importantPoints": [
      "Outputs \"Success\". Values returned from a .finally() callback are ignored; the resolved value of the preceding promise passes through untouched.",
      "finally preserves the incoming fulfillment value unless it throws or returns a rejected promise."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "output-prediction",
      "finally"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What happens if a .finally() callback throws an error or returns a rejected promise?",
    "answer": "If a .finally() callback throws an error or returns a rejected promise, the original resolved value is discarded, and the chained promise rejects with the new error from finally.",
    "explanation": "Errors thrown inside finally override the original resolution.",
    "interviewAnswer": "If a .finally() callback throws an error or returns a rejected promise, the original resolved value is discarded, and the chained promise rejects with the new error from finally. Errors thrown inside finally override the original resolution.",
    "importantPoints": [
      "If a .finally() callback throws an error or returns a rejected promise, the original resolved value is discarded, and the chained promise rejects with the new error from finally.",
      "Errors thrown inside finally override the original resolution."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "promises",
      "finally",
      "error-handling"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is Top-Level Await in ES modules, and what are its benefits and constraints?",
    "answer": "Top-Level Await allows using the await keyword outside of async functions at the top level of an ES module (.mjs or type=\"module\"). It enables modules to asynchronously initialize resources (e.g. database connections, dynamic imports, WASM compilation) before dependent modules execute. It blocks module execution until the promise resolves.",
    "explanation": "Eliminates async init boilerplate; only supported in ES modules, not CommonJS.",
    "interviewAnswer": "Top-Level Await allows using the await keyword outside of async functions at the top level of an ES module (.mjs or type=\"module\"). It enables modules to asynchronously initialize resources (e.g. database connections, dynamic imports, WASM compilation) before dependent modules execute. It blocks module execution until the promise resolves. Eliminates async init boilerplate; only supported in ES modules, not CommonJS.",
    "importantPoints": [
      "Top-Level Await allows using the await keyword outside of async functions at the top level of an ES module (.mjs or type=\"module\"). It enables modules to asynchronously initialize resources (e.g. database connections, dynamic imports, WASM compilation) before dependent modules execute. It blocks module execution until the promise resolves.",
      "Eliminates async init boilerplate; only supported in ES modules, not CommonJS."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "esmodules",
      "top-level-await",
      "async-await"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "How does async/await syntactic sugar compile down to Generators and Promises under the hood?",
    "answer": "async/await is syntactic sugar over generator functions (* / yield) combined with an automatic promise runner (similar to the co library). Each await expression yields a Promise to the runner. When the promise resolves, the runner calls generator.next(value); if it rejects, the runner calls generator.throw(error).",
    "explanation": "Under the hood, Babel/TypeScript compiles async/await into generators and recursive promise helpers.",
    "interviewAnswer": "async/await is syntactic sugar over generator functions (* / yield) combined with an automatic promise runner (similar to the co library). Each await expression yields a Promise to the runner. When the promise resolves, the runner calls generator.next(value); if it rejects, the runner calls generator.throw(error). Under the hood, Babel/TypeScript compiles async/await into generators and recursive promise helpers.",
    "importantPoints": [
      "async/await is syntactic sugar over generator functions (* / yield) combined with an automatic promise runner (similar to the co library). Each await expression yields a Promise to the runner. When the promise resolves, the runner calls generator.next(value); if it rejects, the runner calls generator.throw(error).",
      "Under the hood, Babel/TypeScript compiles async/await into generators and recursive promise helpers."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "javascript",
      "async-await",
      "generators",
      "compiler",
      "internals"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "Implement a custom Promise.all polyfill in JavaScript.",
    "answer": "function promiseAll(promises) { return new Promise((resolve, reject) => { const results = []; let completed = 0; const items = Array.from(promises); if (items.length === 0) return resolve([]); items.forEach((p, i) => { Promise.resolve(p).then(val => { results[i] = val; completed++; if (completed === items.length) resolve(results); }, reject); }); }); }",
    "explanation": "Preserves input array ordering using results[i] = val and handles non-promise items via Promise.resolve.",
    "interviewAnswer": "function promiseAll(promises) { return new Promise((resolve, reject) => { const results = []; let completed = 0; const items = Array.from(promises); if (items.length === 0) return resolve([]); items.forEach((p, i) => { Promise.resolve(p).then(val => { results[i] = val; completed++; if (completed === items.length) resolve(results); }, reject); }); }); } Preserves input array ordering using results[i] = val and handles non-promise items via Promise.resolve.",
    "importantPoints": [
      "function promiseAll(promises) { return new Promise((resolve, reject) => { const results = []; let completed = 0; const items = Array.from(promises); if (items.length === 0) return resolve([]); items.forEach((p, i) => { Promise.resolve(p).then(val => { results[i] = val; completed++; if (completed === items.length) resolve(results); }, reject); }); }); }",
      "Preserves input array ordering using results[i] = val and handles non-promise items via Promise.resolve."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "promise-all",
      "polyfill",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "Implement a custom Promise.allSettled polyfill in JavaScript.",
    "answer": "function promiseAllSettled(promises) { return Promise.all(Array.from(promises).map(p => Promise.resolve(p).then(value => ({ status: \"fulfilled\", value }), reason => ({ status: \"rejected\", reason })))); }",
    "explanation": "Maps each promise to resolve with a status descriptor object, wrapping it all in Promise.all.",
    "interviewAnswer": "function promiseAllSettled(promises) { return Promise.all(Array.from(promises).map(p => Promise.resolve(p).then(value => ({ status: \"fulfilled\", value }), reason => ({ status: \"rejected\", reason })))); } Maps each promise to resolve with a status descriptor object, wrapping it all in Promise.all.",
    "importantPoints": [
      "function promiseAllSettled(promises) { return Promise.all(Array.from(promises).map(p => Promise.resolve(p).then(value => ({ status: \"fulfilled\", value }), reason => ({ status: \"rejected\", reason })))); }",
      "Maps each promise to resolve with a status descriptor object, wrapping it all in Promise.all."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "allSettled",
      "polyfill",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "Implement a custom Promise.race polyfill in JavaScript.",
    "answer": "function promiseRace(promises) { return new Promise((resolve, reject) => { for (const p of promises) { Promise.resolve(p).then(resolve, reject); } }); }",
    "explanation": "Attaches resolve and reject directly; whichever settles first determines the outcome.",
    "interviewAnswer": "function promiseRace(promises) { return new Promise((resolve, reject) => { for (const p of promises) { Promise.resolve(p).then(resolve, reject); } }); } Attaches resolve and reject directly; whichever settles first determines the outcome.",
    "importantPoints": [
      "function promiseRace(promises) { return new Promise((resolve, reject) => { for (const p of promises) { Promise.resolve(p).then(resolve, reject); } }); }",
      "Attaches resolve and reject directly; whichever settles first determines the outcome."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "promise-race",
      "polyfill",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: Promise.race([new Promise(r => setTimeout(() => r(1), 100)), new Promise((_, rj) => setTimeout(() => rj(\"Err\"), 50))]).catch(e => console.log(e));?",
    "answer": "Outputs \"Err\". The second promise rejects at 50ms, which is faster than the first promise resolving at 100ms. Promise.race settles with the earliest outcome.",
    "explanation": "Promise.race adopts the outcome of the fastest promise whether fulfilled or rejected.",
    "interviewAnswer": "Outputs \"Err\". The second promise rejects at 50ms, which is faster than the first promise resolving at 100ms. Promise.race settles with the earliest outcome. Promise.race adopts the outcome of the fastest promise whether fulfilled or rejected.",
    "importantPoints": [
      "Outputs \"Err\". The second promise rejects at 50ms, which is faster than the first promise resolving at 100ms. Promise.race settles with the earliest outcome.",
      "Promise.race adopts the outcome of the fastest promise whether fulfilled or rejected."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "output-prediction",
      "promise-race"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of Promise.race([]) vs Promise.all([])?",
    "answer": "Promise.all([]) resolves synchronously/immediately with an empty array []. Promise.race([]) remains pending FOREVER because there is no promise to settle first, causing a permanent pending promise.",
    "explanation": "Promise.race([]) with an empty iterable never resolves or rejects.",
    "interviewAnswer": "Promise.all([]) resolves synchronously/immediately with an empty array []. Promise.race([]) remains pending FOREVER because there is no promise to settle first, causing a permanent pending promise. Promise.race([]) with an empty iterable never resolves or rejects.",
    "importantPoints": [
      "Promise.all([]) resolves synchronously/immediately with an empty array []. Promise.race([]) remains pending FOREVER because there is no promise to settle first, causing a permanent pending promise.",
      "Promise.race([]) with an empty iterable never resolves or rejects."
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
      "promises",
      "output-prediction",
      "edge-case"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is Promise.withResolvers() introduced in ES2024, and what problem does it solve?",
    "answer": "Promise.withResolvers() is a standard method that returns an object containing { promise, resolve, reject }. It allows accessing the resolve and reject functions outside the Promise executor scope without manual let resolve; new Promise(r => resolve = r) boilerplate.",
    "explanation": "ES2024 standard simplifying deferred promise patterns and event listener binding.",
    "interviewAnswer": "Promise.withResolvers() is a standard method that returns an object containing { promise, resolve, reject }. It allows accessing the resolve and reject functions outside the Promise executor scope without manual let resolve; new Promise(r => resolve = r) boilerplate. ES2024 standard simplifying deferred promise patterns and event listener binding.",
    "importantPoints": [
      "Promise.withResolvers() is a standard method that returns an object containing { promise, resolve, reject }. It allows accessing the resolve and reject functions outside the Promise executor scope without manual let resolve; new Promise(r => resolve = r) boilerplate.",
      "ES2024 standard simplifying deferred promise patterns and event listener binding."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "withResolvers",
      "es2024"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: async function f() { try { return await Promise.reject(\"Fail\"); } catch(e) { return \"Caught: \" + e; } } f().then(v => console.log(v));?",
    "answer": "Outputs \"Caught: Fail\". Using await inside try...catch allows the catch block to intercept the rejection. The catch block returns \"Caught: Fail\", resolving the promise returned by f().",
    "explanation": "await unwraps rejected promises into catchable exceptions within try...catch blocks.",
    "interviewAnswer": "Outputs \"Caught: Fail\". Using await inside try...catch allows the catch block to intercept the rejection. The catch block returns \"Caught: Fail\", resolving the promise returned by f(). await unwraps rejected promises into catchable exceptions within try...catch blocks.",
    "importantPoints": [
      "Outputs \"Caught: Fail\". Using await inside try...catch allows the catch block to intercept the rejection. The catch block returns \"Caught: Fail\", resolving the promise returned by f().",
      "await unwraps rejected promises into catchable exceptions within try...catch blocks."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "async-await",
      "output-prediction",
      "try-catch"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the critical difference between `return promise` vs `return await promise` inside an async function try...catch block?",
    "answer": "If you write `return promise` inside try...catch, the rejected promise bypasses the local catch block because the function returns the pending promise immediately. If you write `return await promise`, the current function pauses to unwrap the promise; if it rejects, the local catch block intercepts it.",
    "explanation": "Always use `return await` if you need the local try...catch or finally block to handle the outcome.",
    "interviewAnswer": "If you write `return promise` inside try...catch, the rejected promise bypasses the local catch block because the function returns the pending promise immediately. If you write `return await promise`, the current function pauses to unwrap the promise; if it rejects, the local catch block intercepts it. Always use `return await` if you need the local try...catch or finally block to handle the outcome.",
    "importantPoints": [
      "If you write `return promise` inside try...catch, the rejected promise bypasses the local catch block because the function returns the pending promise immediately. If you write `return await promise`, the current function pauses to unwrap the promise; if it rejects, the local catch block intercepts it.",
      "Always use `return await` if you need the local try...catch or finally block to handle the outcome."
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
      "async-await",
      "return-await",
      "try-catch",
      "gotcha"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: async function a() { try { return Promise.reject(\"Err\"); } catch(e) { return \"Caught\"; } } a().catch(e => console.log(\"Outer:\", e));?",
    "answer": "Outputs \"Outer: Err\". Because Promise.reject was returned without await, the function returned the rejected promise directly, bypassing the local catch block.",
    "explanation": "Without await, the local catch block cannot catch the asynchronous rejection.",
    "interviewAnswer": "Outputs \"Outer: Err\". Because Promise.reject was returned without await, the function returned the rejected promise directly, bypassing the local catch block. Without await, the local catch block cannot catch the asynchronous rejection.",
    "importantPoints": [
      "Outputs \"Outer: Err\". Because Promise.reject was returned without await, the function returned the rejected promise directly, bypassing the local catch block.",
      "Without await, the local catch block cannot catch the asynchronous rejection."
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
      "async-await",
      "output-prediction",
      "return-await"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "How does Promise.resolve(x) handle x when x is already a native Promise versus when x is a plain primitive?",
    "answer": "If x is already a native Promise, Promise.resolve(x) returns x directly by reference (no new promise is created). If x is a primitive or plain object, Promise.resolve(x) wraps it in a new fulfilled Promise.",
    "explanation": "Promise.resolve is idempotent for native Promises: Promise.resolve(p) === p.",
    "interviewAnswer": "If x is already a native Promise, Promise.resolve(x) returns x directly by reference (no new promise is created). If x is a primitive or plain object, Promise.resolve(x) wraps it in a new fulfilled Promise. Promise.resolve is idempotent for native Promises: Promise.resolve(p) === p.",
    "importantPoints": [
      "If x is already a native Promise, Promise.resolve(x) returns x directly by reference (no new promise is created). If x is a primitive or plain object, Promise.resolve(x) wraps it in a new fulfilled Promise.",
      "Promise.resolve is idempotent for native Promises: Promise.resolve(p) === p."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "promises",
      "promise-resolve",
      "idempotency"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: const p = new Promise(r => r(1)); console.log(Promise.resolve(p) === p);?",
    "answer": "Outputs true. Promise.resolve returns native promise instances directly without wrapping them in new objects.",
    "explanation": "Demonstrates reference equality of Promise.resolve on native promises.",
    "interviewAnswer": "Outputs true. Promise.resolve returns native promise instances directly without wrapping them in new objects. Demonstrates reference equality of Promise.resolve on native promises.",
    "importantPoints": [
      "Outputs true. Promise.resolve returns native promise instances directly without wrapping them in new objects.",
      "Demonstrates reference equality of Promise.resolve on native promises."
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
      "promises",
      "output-prediction",
      "promise-resolve"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: async function f() { return 1; } console.log(f() instanceof Promise);?",
    "answer": "Outputs true. Every function declared with the async keyword automatically wraps its return value in a Promise.",
    "explanation": "Async functions always return Promises, even when returning raw primitives.",
    "interviewAnswer": "Outputs true. Every function declared with the async keyword automatically wraps its return value in a Promise. Async functions always return Promises, even when returning raw primitives.",
    "importantPoints": [
      "Outputs true. Every function declared with the async keyword automatically wraps its return value in a Promise.",
      "Async functions always return Promises, even when returning raw primitives."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "async-await",
      "output-prediction",
      "fundamentals"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "How do you run asynchronous tasks in parallel with a concurrency pool using Promise.all and chunking?",
    "answer": "async function pooledMap(arr, fn, poolSize = 3) { const results = []; const executing = new Set(); for (const item of arr) { const p = Promise.resolve().then(() => fn(item)); results.push(p); executing.add(p); const clean = () => executing.delete(p); p.then(clean).catch(clean); if (executing.size >= poolSize) await Promise.race(executing); } return Promise.all(results); }",
    "explanation": "Maintains an active executing Set, pausing with Promise.race when capacity is reached.",
    "interviewAnswer": "async function pooledMap(arr, fn, poolSize = 3) { const results = []; const executing = new Set(); for (const item of arr) { const p = Promise.resolve().then(() => fn(item)); results.push(p); executing.add(p); const clean = () => executing.delete(p); p.then(clean).catch(clean); if (executing.size >= poolSize) await Promise.race(executing); } return Promise.all(results); } Maintains an active executing Set, pausing with Promise.race when capacity is reached.",
    "importantPoints": [
      "async function pooledMap(arr, fn, poolSize = 3) { const results = []; const executing = new Set(); for (const item of arr) { const p = Promise.resolve().then(() => fn(item)); results.push(p); executing.add(p); const clean = () => executing.delete(p); p.then(clean).catch(clean); if (executing.size >= poolSize) await Promise.race(executing); } return Promise.all(results); }",
      "Maintains an active executing Set, pausing with Promise.race when capacity is reached."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "concurrency-pool",
      "coding",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: Promise.resolve().then(() => { console.log(1); }).then(() => { console.log(2); }); Promise.resolve().then(() => { console.log(3); }).then(() => { console.log(4); });?",
    "answer": "Outputs 1, 3, 2, 4. Both initial .then() callbacks are enqueued in the microtask queue: [1, 3]. 1 runs and schedules 2. 3 runs and schedules 4. Microtask queue drains 2 then 4.",
    "explanation": "Microtasks execute in interleaved order as chained promises resolve turn by turn.",
    "interviewAnswer": "Outputs 1, 3, 2, 4. Both initial .then() callbacks are enqueued in the microtask queue: [1, 3]. 1 runs and schedules 2. 3 runs and schedules 4. Microtask queue drains 2 then 4. Microtasks execute in interleaved order as chained promises resolve turn by turn.",
    "importantPoints": [
      "Outputs 1, 3, 2, 4. Both initial .then() callbacks are enqueued in the microtask queue: [1, 3]. 1 runs and schedules 2. 3 runs and schedules 4. Microtask queue drains 2 then 4.",
      "Microtasks execute in interleaved order as chained promises resolve turn by turn."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "output-prediction",
      "microtasks",
      "interleaving"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What happens when resolve() is called multiple times inside a Promise executor with different values?",
    "answer": "Only the very first resolve() or reject() call has any effect. Any subsequent calls to resolve() or reject() are completely ignored because a Promise can only settle once in its lifetime.",
    "explanation": "A Promise becomes settled upon the first resolution or rejection and remains immutable.",
    "interviewAnswer": "Only the very first resolve() or reject() call has any effect. Any subsequent calls to resolve() or reject() are completely ignored because a Promise can only settle once in its lifetime. A Promise becomes settled upon the first resolution or rejection and remains immutable.",
    "importantPoints": [
      "Only the very first resolve() or reject() call has any effect. Any subsequent calls to resolve() or reject() are completely ignored because a Promise can only settle once in its lifetime.",
      "A Promise becomes settled upon the first resolution or rejection and remains immutable."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "settlement",
      "immutability"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: new Promise((res, rej) => { res(1); rej(new Error(\"2\")); res(3); }).then(v => console.log(v)).catch(e => console.log(\"Catch:\", e.message));?",
    "answer": "Outputs 1. The first call res(1) settles the promise. The subsequent rej and res calls are silently ignored.",
    "explanation": "Subsequent settlement attempts on an already settled promise are no-ops.",
    "interviewAnswer": "Outputs 1. The first call res(1) settles the promise. The subsequent rej and res calls are silently ignored. Subsequent settlement attempts on an already settled promise are no-ops.",
    "importantPoints": [
      "Outputs 1. The first call res(1) settles the promise. The subsequent rej and res calls are silently ignored.",
      "Subsequent settlement attempts on an already settled promise are no-ops."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "output-prediction",
      "settlement"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "How does async/await interact with generators in modern JavaScript libraries (e.g. Redux-Saga)?",
    "answer": "Redux-Saga uses generator functions (function*) rather than async/await because generators yield plain description objects (Effects like call, put, take) instead of executing promises directly. This makes sagas purely declarative, trivial to unit-test without mocking network layers, and easy to cancel.",
    "explanation": "Generators yield declarative effect descriptions; the saga middleware handles async resolution.",
    "interviewAnswer": "Redux-Saga uses generator functions (function*) rather than async/await because generators yield plain description objects (Effects like call, put, take) instead of executing promises directly. This makes sagas purely declarative, trivial to unit-test without mocking network layers, and easy to cancel. Generators yield declarative effect descriptions; the saga middleware handles async resolution.",
    "importantPoints": [
      "Redux-Saga uses generator functions (function*) rather than async/await because generators yield plain description objects (Effects like call, put, take) instead of executing promises directly. This makes sagas purely declarative, trivial to unit-test without mocking network layers, and easy to cancel.",
      "Generators yield declarative effect descriptions; the saga middleware handles async resolution."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "javascript",
      "generators",
      "redux-saga",
      "async-await",
      "architecture"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is an unhandled rejection, and what is the difference between how browsers and modern Node.js handle it?",
    "answer": "An unhandled rejection occurs when a Promise rejects without a .catch() handler. Browsers dispatch an unhandledrejection event on window and log a console warning without stopping the tab. Node.js (v15+) logs the error and terminates the entire Node process with exit code 1 by default.",
    "explanation": "Node.js treats unhandled promise rejections as fatal crashes to prevent silent failures.",
    "interviewAnswer": "An unhandled rejection occurs when a Promise rejects without a .catch() handler. Browsers dispatch an unhandledrejection event on window and log a console warning without stopping the tab. Node.js (v15+) logs the error and terminates the entire Node process with exit code 1 by default. Node.js treats unhandled promise rejections as fatal crashes to prevent silent failures.",
    "importantPoints": [
      "An unhandled rejection occurs when a Promise rejects without a .catch() handler. Browsers dispatch an unhandledrejection event on window and log a console warning without stopping the tab. Node.js (v15+) logs the error and terminates the entire Node process with exit code 1 by default.",
      "Node.js treats unhandled promise rejections as fatal crashes to prevent silent failures."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "unhandled-rejection",
      "node",
      "browser"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: const p = Promise.reject(\"Fail\"); p.catch(e => \"Recovered\"); p.then(v => console.log(\"V:\", v)).catch(e => console.log(\"E:\", e));?",
    "answer": "Outputs \"E: Fail\". Calling p.catch(...) returns a NEW promise that resolves with \"Recovered\", but p itself remains rejected. The second chain attached directly to p still encounters the original rejection.",
    "explanation": "Chained methods return new promises; they do not mutate the receiver promise.",
    "interviewAnswer": "Outputs \"E: Fail\". Calling p.catch(...) returns a NEW promise that resolves with \"Recovered\", but p itself remains rejected. The second chain attached directly to p still encounters the original rejection. Chained methods return new promises; they do not mutate the receiver promise.",
    "importantPoints": [
      "Outputs \"E: Fail\". Calling p.catch(...) returns a NEW promise that resolves with \"Recovered\", but p itself remains rejected. The second chain attached directly to p still encounters the original rejection.",
      "Chained methods return new promises; they do not mutate the receiver promise."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "output-prediction",
      "immutability",
      "chaining"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "How do you implement an async waterfall function where each task passes its result to the next task in sequence?",
    "answer": "function waterfall(tasks, initialVal) { return tasks.reduce((chain, task) => chain.then(result => task(result)), Promise.resolve(initialVal)); }",
    "explanation": "Chains promises using reduce, passing the resolved output of task N into task N+1.",
    "interviewAnswer": "function waterfall(tasks, initialVal) { return tasks.reduce((chain, task) => chain.then(result => task(result)), Promise.resolve(initialVal)); } Chains promises using reduce, passing the resolved output of task N into task N+1.",
    "importantPoints": [
      "function waterfall(tasks, initialVal) { return tasks.reduce((chain, task) => chain.then(result => task(result)), Promise.resolve(initialVal)); }",
      "Chains promises using reduce, passing the resolved output of task N into task N+1."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "waterfall",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: async function f() { console.log(await 42); } f(); console.log(\"End\");?",
    "answer": "Outputs \"End\", then 42. Awaiting a non-promise primitive (await 42) wraps the value in Promise.resolve(42) and suspends execution, pushing resumption to the microtask queue. \"End\" logs first synchronously.",
    "explanation": "await non-promise values still yields to the microtask queue.",
    "interviewAnswer": "Outputs \"End\", then 42. Awaiting a non-promise primitive (await 42) wraps the value in Promise.resolve(42) and suspends execution, pushing resumption to the microtask queue. \"End\" logs first synchronously. await non-promise values still yields to the microtask queue.",
    "importantPoints": [
      "Outputs \"End\", then 42. Awaiting a non-promise primitive (await 42) wraps the value in Promise.resolve(42) and suspends execution, pushing resumption to the microtask queue. \"End\" logs first synchronously.",
      "await non-promise values still yields to the microtask queue."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "async-await",
      "output-prediction",
      "microtasks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "How does Promise.try() (proposed standard) simplify executing synchronous functions that might throw into Promises?",
    "answer": "Promise.try(fn) executes fn() and guarantees a Promise return. If fn() returns a value or Promise, it resolves with it; if fn() throws a synchronous error, it captures the error and returns a rejected Promise without requiring a manual try...catch block.",
    "explanation": "Unifies synchronous throws and asynchronous rejections into a single Promise pipeline.",
    "interviewAnswer": "Promise.try(fn) executes fn() and guarantees a Promise return. If fn() returns a value or Promise, it resolves with it; if fn() throws a synchronous error, it captures the error and returns a rejected Promise without requiring a manual try...catch block. Unifies synchronous throws and asynchronous rejections into a single Promise pipeline.",
    "importantPoints": [
      "Promise.try(fn) executes fn() and guarantees a Promise return. If fn() returns a value or Promise, it resolves with it; if fn() throws a synchronous error, it captures the error and returns a rejected Promise without requiring a manual try...catch block.",
      "Unifies synchronous throws and asynchronous rejections into a single Promise pipeline."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "promises",
      "promise-try",
      "ecmascript"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: Promise.resolve(1).then(() => { return; }).then(v => console.log(v));?",
    "answer": "Outputs undefined. A return statement with no argument in a .then() handler returns undefined, resolving the chained promise with undefined.",
    "explanation": "Empty return resolves with undefined.",
    "interviewAnswer": "Outputs undefined. A return statement with no argument in a .then() handler returns undefined, resolving the chained promise with undefined. Empty return resolves with undefined.",
    "importantPoints": [
      "Outputs undefined. A return statement with no argument in a .then() handler returns undefined, resolving the chained promise with undefined.",
      "Empty return resolves with undefined."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "promises",
      "output-prediction",
      "return"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "Why is `new Promise(async (resolve, reject) => { ... })` considered an anti-pattern?",
    "answer": "Passing an async function to the Promise constructor is an anti-pattern because: 1) The Promise executor is designed to be synchronous. 2) If an error is thrown inside the async executor after an await, the outer Promise constructor cannot catch it, creating an unhandled rejection. Use standard async functions instead of wrapping them in new Promise().",
    "explanation": "Async executors swallow rejections and introduce redundant promise wrapping.",
    "interviewAnswer": "Passing an async function to the Promise constructor is an anti-pattern because: 1) The Promise executor is designed to be synchronous. 2) If an error is thrown inside the async executor after an await, the outer Promise constructor cannot catch it, creating an unhandled rejection. Use standard async functions instead of wrapping them in new Promise(). Async executors swallow rejections and introduce redundant promise wrapping.",
    "importantPoints": [
      "Passing an async function to the Promise constructor is an anti-pattern because: 1) The Promise executor is designed to be synchronous. 2) If an error is thrown inside the async executor after an await, the outer Promise constructor cannot catch it, creating an unhandled rejection. Use standard async functions instead of wrapping them in new Promise().",
      "Async executors swallow rejections and introduce redundant promise wrapping."
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
      "promises",
      "anti-patterns",
      "async-await"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: async function fn() { try { throw 1; } catch(e) { throw 2; } finally { return 3; } } fn().then(v => console.log(\"Val:\", v));?",
    "answer": "Outputs \"Val: 3\". A return statement in a finally block overrides any thrown exception in try or catch blocks, causing the promise to resolve with 3.",
    "explanation": "finally return overrides any in-flight thrown exception.",
    "interviewAnswer": "Outputs \"Val: 3\". A return statement in a finally block overrides any thrown exception in try or catch blocks, causing the promise to resolve with 3. finally return overrides any in-flight thrown exception.",
    "importantPoints": [
      "Outputs \"Val: 3\". A return statement in a finally block overrides any thrown exception in try or catch blocks, causing the promise to resolve with 3.",
      "finally return overrides any in-flight thrown exception."
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
      "async-await",
      "output-prediction",
      "finally",
      "error-handling"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "How do you create an Async Disposable resource using Symbol.asyncDispose and the `await using` declaration (ECMAScript Explicit Resource Management)?",
    "answer": "In modern TypeScript / upcoming ECMAScript, define a [Symbol.asyncDispose]() async method on an object (e.g. database client). When declared with `await using client = new DbClient();`, the runtime automatically awaits client[Symbol.asyncDispose]() when execution exits the lexical block.",
    "explanation": "Explicit Resource Management standardizes deterministic async resource cleanup.",
    "interviewAnswer": "In modern TypeScript / upcoming ECMAScript, define a [Symbol.asyncDispose]() async method on an object (e.g. database client). When declared with `await using client = new DbClient();`, the runtime automatically awaits client[Symbol.asyncDispose]() when execution exits the lexical block. Explicit Resource Management standardizes deterministic async resource cleanup.",
    "importantPoints": [
      "In modern TypeScript / upcoming ECMAScript, define a [Symbol.asyncDispose]() async method on an object (e.g. database client). When declared with `await using client = new DbClient();`, the runtime automatically awaits client[Symbol.asyncDispose]() when execution exits the lexical block.",
      "Explicit Resource Management standardizes deterministic async resource cleanup."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "async",
      "symbol-asyncdispose",
      "explicit-resource-management",
      "esnext"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: Promise.resolve(Promise.resolve(\"Deep\")).then(v => console.log(v));?",
    "answer": "Outputs \"Deep\". Nested promises are recursively flattened/unwrapped by Promise resolution.",
    "explanation": "Promises cannot be nested inside promises; resolution unwraps all layers.",
    "interviewAnswer": "Outputs \"Deep\". Nested promises are recursively flattened/unwrapped by Promise resolution. Promises cannot be nested inside promises; resolution unwraps all layers.",
    "importantPoints": [
      "Outputs \"Deep\". Nested promises are recursively flattened/unwrapped by Promise resolution.",
      "Promises cannot be nested inside promises; resolution unwraps all layers."
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
      "promises",
      "output-prediction",
      "unwrapping"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "How do you write a test for an asynchronous function that rejects using Jest / Vitest?",
    "answer": "Either: 1) await expect(asyncFn()).rejects.toThrow(\"Expected error\"); or 2) try { await asyncFn(); fail(\"Should have thrown\"); } catch(e) { expect(e.message).toBe(\"Expected error\"); }",
    "explanation": "rejects matcher awaits the promise rejection and verifies error assertions.",
    "interviewAnswer": "Either: 1) await expect(asyncFn()).rejects.toThrow(\"Expected error\"); or 2) try { await asyncFn(); fail(\"Should have thrown\"); } catch(e) { expect(e.message).toBe(\"Expected error\"); } rejects matcher awaits the promise rejection and verifies error assertions.",
    "importantPoints": [
      "Either: 1) await expect(asyncFn()).rejects.toThrow(\"Expected error\"); or 2) try { await asyncFn(); fail(\"Should have thrown\"); } catch(e) { expect(e.message).toBe(\"Expected error\"); }",
      "rejects matcher awaits the promise rejection and verifies error assertions."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "testing",
      "jest",
      "async-await",
      "promises"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: let p = Promise.resolve(10); p.then(x => { p = Promise.resolve(x * 2); }); console.log(await p);?",
    "answer": "Outputs 10. The await p evaluates the original promise stored in p at that instant (which resolves to 10). By the time the .then() callback runs in the microtask queue to reassign p, await has already evaluated.",
    "explanation": "await evaluates the expression operand immediately before yielding to microtasks.",
    "interviewAnswer": "Outputs 10. The await p evaluates the original promise stored in p at that instant (which resolves to 10). By the time the .then() callback runs in the microtask queue to reassign p, await has already evaluated. await evaluates the expression operand immediately before yielding to microtasks.",
    "importantPoints": [
      "Outputs 10. The await p evaluates the original promise stored in p at that instant (which resolves to 10). By the time the .then() callback runs in the microtask queue to reassign p, await has already evaluated.",
      "await evaluates the expression operand immediately before yielding to microtasks."
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
      "async-await",
      "output-prediction",
      "evaluation-order"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "How do you implement an asynchronous debounce with cancellation support using Promises?",
    "answer": "function debouncePromise(fn, ms) { let timer; return function(...args) { clearTimeout(timer); return new Promise((resolve, reject) => { timer = setTimeout(async () => { try { resolve(await fn.apply(this, args)); } catch(e) { reject(e); } }, ms); }); }; }",
    "explanation": "Wraps debounce in a returned Promise, clearing previous pending timer on invocation.",
    "interviewAnswer": "function debouncePromise(fn, ms) { let timer; return function(...args) { clearTimeout(timer); return new Promise((resolve, reject) => { timer = setTimeout(async () => { try { resolve(await fn.apply(this, args)); } catch(e) { reject(e); } }, ms); }); }; } Wraps debounce in a returned Promise, clearing previous pending timer on invocation.",
    "importantPoints": [
      "function debouncePromise(fn, ms) { let timer; return function(...args) { clearTimeout(timer); return new Promise((resolve, reject) => { timer = setTimeout(async () => { try { resolve(await fn.apply(this, args)); } catch(e) { reject(e); } }, ms); }); }; }",
      "Wraps debounce in a returned Promise, clearing previous pending timer on invocation."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "debounce",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: async function t() { return Promise.resolve(Promise.reject(\"Err\")); } t().catch(e => console.log(\"Caught:\", e));?",
    "answer": "Outputs \"Caught: Err\". Returning an inner rejected promise from an async function causes the outer async function promise to reject with that same reason.",
    "explanation": "Async function return statements recursively unwrap promises.",
    "interviewAnswer": "Outputs \"Caught: Err\". Returning an inner rejected promise from an async function causes the outer async function promise to reject with that same reason. Async function return statements recursively unwrap promises.",
    "importantPoints": [
      "Outputs \"Caught: Err\". Returning an inner rejected promise from an async function causes the outer async function promise to reject with that same reason.",
      "Async function return statements recursively unwrap promises."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "async-await",
      "output-prediction",
      "error-handling"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: Promise.resolve(1).then().then(v => console.log(v));?",
    "answer": "Outputs 1. Passing a non-function (or nothing) to .then() causes Promise value pass-through; the value flows untouched to the next handler.",
    "explanation": "Empty or non-function handlers fall back to identity function x => x.",
    "interviewAnswer": "Outputs 1. Passing a non-function (or nothing) to .then() causes Promise value pass-through; the value flows untouched to the next handler. Empty or non-function handlers fall back to identity function x => x.",
    "importantPoints": [
      "Outputs 1. Passing a non-function (or nothing) to .then() causes Promise value pass-through; the value flows untouched to the next handler.",
      "Empty or non-function handlers fall back to identity function x => x."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "promises",
      "output-prediction",
      "pass-through"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "How does the V8 engine optimize Promise performance with zero-cost async stack traces?",
    "answer": "Older V8 engines had to synchronously capture stack traces when creating Promises, which incurred high memory overhead. Modern V8 uses asynchronous stack walking during promise suspension and resumption, stitching stack frames together on-demand only when an unhandled exception actually occurs.",
    "explanation": "Eliminates performance overhead for successful promise operations.",
    "interviewAnswer": "Older V8 engines had to synchronously capture stack traces when creating Promises, which incurred high memory overhead. Modern V8 uses asynchronous stack walking during promise suspension and resumption, stitching stack frames together on-demand only when an unhandled exception actually occurs. Eliminates performance overhead for successful promise operations.",
    "importantPoints": [
      "Older V8 engines had to synchronously capture stack traces when creating Promises, which incurred high memory overhead. Modern V8 uses asynchronous stack walking during promise suspension and resumption, stitching stack frames together on-demand only when an unhandled exception actually occurs.",
      "Eliminates performance overhead for successful promise operations."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "javascript",
      "v8",
      "promises",
      "stack-traces",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "What is the output of: async function main() { console.log(\"A\"); await null; console.log(\"B\"); } main(); console.log(\"C\");?",
    "answer": "Outputs \"A\", \"C\", \"B\". \"A\" logs synchronously. await null coerces null into Promise.resolve(null) and suspends main(), queuing resumption in the microtask queue. \"C\" logs synchronously. The microtask queue resumes main(), logging \"B\".",
    "explanation": "Awaiting any primitive always yields execution to the microtask queue.",
    "interviewAnswer": "Outputs \"A\", \"C\", \"B\". \"A\" logs synchronously. await null coerces null into Promise.resolve(null) and suspends main(), queuing resumption in the microtask queue. \"C\" logs synchronously. The microtask queue resumes main(), logging \"B\". Awaiting any primitive always yields execution to the microtask queue.",
    "importantPoints": [
      "Outputs \"A\", \"C\", \"B\". \"A\" logs synchronously. await null coerces null into Promise.resolve(null) and suspends main(), queuing resumption in the microtask queue. \"C\" logs synchronously. The microtask queue resumes main(), logging \"B\".",
      "Awaiting any primitive always yields execution to the microtask queue."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "async-await",
      "output-prediction",
      "microtasks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "promises-async-await",
    "question": "How does Promise.all behave when passed an empty iterable, and how does that compare to Promise.allSettled and Promise.any?",
    "answer": "Promise.all([]) and Promise.allSettled([]) both resolve immediately with an empty array []. In contrast, Promise.any([]) rejects immediately with an AggregateError (\"All promises were rejected\") because no promise can fulfill. Promise.race([]) remains pending forever.",
    "explanation": "Empty iterables: all -> resolve [], allSettled -> resolve [], any -> reject AggregateError, race -> forever pending.",
    "interviewAnswer": "Promise.all([]) and Promise.allSettled([]) both resolve immediately with an empty array []. In contrast, Promise.any([]) rejects immediately with an AggregateError (\"All promises were rejected\") because no promise can fulfill. Promise.race([]) remains pending forever. Empty iterables: all -> resolve [], allSettled -> resolve [], any -> reject AggregateError, race -> forever pending.",
    "importantPoints": [
      "Promise.all([]) and Promise.allSettled([]) both resolve immediately with an empty array []. In contrast, Promise.any([]) rejects immediately with an AggregateError (\"All promises were rejected\") because no promise can fulfill. Promise.race([]) remains pending forever.",
      "Empty iterables: all -> resolve [], allSettled -> resolve [], any -> reject AggregateError, race -> forever pending."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "promises",
      "combinators",
      "edge-case",
      "empty-iterable"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
