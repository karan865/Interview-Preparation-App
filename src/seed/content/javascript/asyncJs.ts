import { SeedQuestion } from '../types';

export const javascriptAsyncQuestions: SeedQuestion[] = [
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How does JavaScript achieve asynchronous execution despite running on a single-threaded call stack?",
    "answer": "JavaScript achieves asynchronous execution through the runtime environment (browser or Node.js). While the JS engine call stack executes code on a single thread, asynchronous operations (I/O, network requests, timers) are offloaded to host environment APIs (Web APIs in browsers, libuv in Node.js). Once complete, their callbacks are queued in task queues and processed via the Event Loop when the call stack clears.",
    "explanation": "The V8 engine contains the Call Stack and Memory Heap. The host environment provides background threads for Web APIs or libuv, queueing callbacks back to the single thread.",
    "interviewAnswer": "JavaScript achieves asynchronous execution through the runtime environment (browser or Node.js). While the JS engine call stack executes code on a single thread, asynchronous operations (I/O, network requests, timers) are offloaded to host environment APIs (Web APIs in browsers, libuv in Node.js). Once complete, their callbacks are queued in task queues and processed via the Event Loop when the call stack clears. The V8 engine contains the Call Stack and Memory Heap. The host environment provides background threads for Web APIs or libuv, queueing callbacks back to the single thread.",
    "importantPoints": [
      "JavaScript achieves asynchronous execution through the runtime environment (browser or Node.js). While the JS engine call stack executes code on a single thread, asynchronous operations (I/O, network requests, timers) are offloaded to host environment APIs (Web APIs in browsers, libuv in Node.js). Once complete, their callbacks are queued in task queues and processed via the Event Loop when the call stack clears.",
      "The V8 engine contains the Call Stack and Memory Heap. The host environment provides background threads for Web APIs or libuv, queueing callbacks back to the single thread."
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
      "async",
      "single-threaded",
      "web-apis",
      "runtime"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What was the callback pattern in JavaScript, and what specific architectural problems led to \"Callback Hell\"?",
    "answer": "The callback pattern passed a function as an argument to be invoked upon asynchronous completion. As apps grew, nesting dependent asynchronous callbacks created \"Callback Hell\" (or the Pyramid of Doom), which suffered from deep indentation, severely hindered code readability, complicated error propagation, and introduced Inversion of Control.",
    "explanation": "Callback hell forces manual error handling at every nested level and strips modular control from the caller.",
    "interviewAnswer": "The callback pattern passed a function as an argument to be invoked upon asynchronous completion. As apps grew, nesting dependent asynchronous callbacks created \"Callback Hell\" (or the Pyramid of Doom), which suffered from deep indentation, severely hindered code readability, complicated error propagation, and introduced Inversion of Control. Callback hell forces manual error handling at every nested level and strips modular control from the caller.",
    "importantPoints": [
      "The callback pattern passed a function as an argument to be invoked upon asynchronous completion. As apps grew, nesting dependent asynchronous callbacks created \"Callback Hell\" (or the Pyramid of Doom), which suffered from deep indentation, severely hindered code readability, complicated error propagation, and introduced Inversion of Control.",
      "Callback hell forces manual error handling at every nested level and strips modular control from the caller."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "callbacks",
      "callback-hell"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the \"Inversion of Control\" problem with asynchronous callbacks, and how do Promises solve it?",
    "answer": "Inversion of Control occurs when you pass a callback function to a third-party library, transferring complete control over when, how many times, or if at all your callback will be called. Promises solve this by inverting control back to the caller: the function returns an immutable Promise object that guarantees exactly one resolution or rejection.",
    "explanation": "Callbacks surrender execution control; Promises enforce trust guarantees (settled at most once, immutable result).",
    "interviewAnswer": "Inversion of Control occurs when you pass a callback function to a third-party library, transferring complete control over when, how many times, or if at all your callback will be called. Promises solve this by inverting control back to the caller: the function returns an immutable Promise object that guarantees exactly one resolution or rejection. Callbacks surrender execution control; Promises enforce trust guarantees (settled at most once, immutable result).",
    "importantPoints": [
      "Inversion of Control occurs when you pass a callback function to a third-party library, transferring complete control over when, how many times, or if at all your callback will be called. Promises solve this by inverting control back to the caller: the function returns an immutable Promise object that guarantees exactly one resolution or rejection.",
      "Callbacks surrender execution control; Promises enforce trust guarantees (settled at most once, immutable result)."
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
      "async",
      "callbacks",
      "inversion-of-control",
      "promises"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How does the Node.js \"Error-First Callback\" convention work, and what are its drawbacks?",
    "answer": "The Error-First callback convention requires callbacks to accept an error object as the first argument, followed by result data: callback(err, data). If an error occurred, err is an Error instance and data is undefined; if successful, err is null/undefined. Drawbacks include high boilerplate and the risk of forgotten early returns causing callbacks to execute twice.",
    "explanation": "Signature is (err, result) => void; standard in early Node.js APIs before util.promisify.",
    "interviewAnswer": "The Error-First callback convention requires callbacks to accept an error object as the first argument, followed by result data: callback(err, data). If an error occurred, err is an Error instance and data is undefined; if successful, err is null/undefined. Drawbacks include high boilerplate and the risk of forgotten early returns causing callbacks to execute twice. Signature is (err, result) => void; standard in early Node.js APIs before util.promisify.",
    "importantPoints": [
      "The Error-First callback convention requires callbacks to accept an error object as the first argument, followed by result data: callback(err, data). If an error occurred, err is an Error instance and data is undefined; if successful, err is null/undefined. Drawbacks include high boilerplate and the risk of forgotten early returns causing callbacks to execute twice.",
      "Signature is (err, result) => void; standard in early Node.js APIs before util.promisify."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "async",
      "node",
      "callbacks",
      "error-first"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What happens internally when setTimeout(fn, 1000) is called in a browser environment?",
    "answer": "When setTimeout(fn, 1000) is called, the JavaScript engine calls the browser Web API timer service. The browser registers a timer on a separate host thread with an expiration timestamp. The call stack pops setTimeout immediately. After 1000ms, the browser moves fn to the Macrotask Queue. When the Call Stack and microtasks are empty, the Event Loop pushes fn to the stack.",
    "explanation": "Timers are managed by the browser C++ host environment, not by the V8 call stack directly.",
    "interviewAnswer": "When setTimeout(fn, 1000) is called, the JavaScript engine calls the browser Web API timer service. The browser registers a timer on a separate host thread with an expiration timestamp. The call stack pops setTimeout immediately. After 1000ms, the browser moves fn to the Macrotask Queue. When the Call Stack and microtasks are empty, the Event Loop pushes fn to the stack. Timers are managed by the browser C++ host environment, not by the V8 call stack directly.",
    "importantPoints": [
      "When setTimeout(fn, 1000) is called, the JavaScript engine calls the browser Web API timer service. The browser registers a timer on a separate host thread with an expiration timestamp. The call stack pops setTimeout immediately. After 1000ms, the browser moves fn to the Macrotask Queue. When the Call Stack and microtasks are empty, the Event Loop pushes fn to the stack.",
      "Timers are managed by the browser C++ host environment, not by the V8 call stack directly."
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
      "async",
      "timers",
      "setTimeout",
      "web-apis"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the output of: console.log(1); setTimeout(() => console.log(2), 0); console.log(3); and why?",
    "answer": "Output is 1, 3, 2. Synchronous console.log(1) and console.log(3) execute immediately on the call stack. Even though the timer delay is 0ms, setTimeout is asynchronous and enqueues its callback into the Macrotask Queue. The Event Loop only processes macrotasks after the call stack is completely clear.",
    "explanation": "0ms delay specifies minimum delay before entering the queue, not immediate synchronous execution.",
    "interviewAnswer": "Output is 1, 3, 2. Synchronous console.log(1) and console.log(3) execute immediately on the call stack. Even though the timer delay is 0ms, setTimeout is asynchronous and enqueues its callback into the Macrotask Queue. The Event Loop only processes macrotasks after the call stack is completely clear. 0ms delay specifies minimum delay before entering the queue, not immediate synchronous execution.",
    "importantPoints": [
      "Output is 1, 3, 2. Synchronous console.log(1) and console.log(3) execute immediately on the call stack. Even though the timer delay is 0ms, setTimeout is asynchronous and enqueues its callback into the Macrotask Queue. The Event Loop only processes macrotasks after the call stack is completely clear.",
      "0ms delay specifies minimum delay before entering the queue, not immediate synchronous execution."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "output-prediction",
      "setTimeout",
      "event-loop"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "Why is setTimeout(fn, 0) not guaranteed to execute after strictly 0 milliseconds?",
    "answer": "1) The callback cannot execute until the main thread call stack and all pending microtasks are completely empty. 2) The HTML5 specification enforces a minimum timer nesting clamp of 4ms once nested 5 or more levels deep. 3) Background tabs or system battery saver profiles throttle timers to 1000ms+.",
    "explanation": "Delays in JavaScript timers represent lower bounds, not execution guarantees.",
    "interviewAnswer": "1) The callback cannot execute until the main thread call stack and all pending microtasks are completely empty. 2) The HTML5 specification enforces a minimum timer nesting clamp of 4ms once nested 5 or more levels deep. 3) Background tabs or system battery saver profiles throttle timers to 1000ms+. Delays in JavaScript timers represent lower bounds, not execution guarantees.",
    "importantPoints": [
      "1) The callback cannot execute until the main thread call stack and all pending microtasks are completely empty. 2) The HTML5 specification enforces a minimum timer nesting clamp of 4ms once nested 5 or more levels deep. 3) Background tabs or system battery saver profiles throttle timers to 1000ms+.",
      "Delays in JavaScript timers represent lower bounds, not execution guarantees."
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
      "async",
      "timers",
      "setTimeout",
      "clamping"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "A timer executes later than expected. How would you determine why?",
    "answer": "1) Record a performance profile in Chrome DevTools Performance panel to detect Long Tasks (>50ms) blocking the main thread. 2) Inspect the Microtask Queue for starvation loops (e.g. unbounded recursive Promise chains or queueMicrotask). 3) Check if the browser tab was backgrounded or minimized, which triggers browser throttling (1000ms clamp). 4) Calculate timer drift by comparing performance.now() at invocation against the scheduled timestamp.",
    "explanation": "Timers are macrotasks that cannot run while synchronous tasks or microtasks occupy the thread.",
    "interviewAnswer": "1) Record a performance profile in Chrome DevTools Performance panel to detect Long Tasks (>50ms) blocking the main thread. 2) Inspect the Microtask Queue for starvation loops (e.g. unbounded recursive Promise chains or queueMicrotask). 3) Check if the browser tab was backgrounded or minimized, which triggers browser throttling (1000ms clamp). 4) Calculate timer drift by comparing performance.now() at invocation against the scheduled timestamp. Timers are macrotasks that cannot run while synchronous tasks or microtasks occupy the thread.",
    "importantPoints": [
      "1) Record a performance profile in Chrome DevTools Performance panel to detect Long Tasks (>50ms) blocking the main thread. 2) Inspect the Microtask Queue for starvation loops (e.g. unbounded recursive Promise chains or queueMicrotask). 3) Check if the browser tab was backgrounded or minimized, which triggers browser throttling (1000ms clamp). 4) Calculate timer drift by comparing performance.now() at invocation against the scheduled timestamp.",
      "Timers are macrotasks that cannot run while synchronous tasks or microtasks occupy the thread."
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
      "async",
      "timers",
      "debugging",
      "performance",
      "production-scenario"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How does setInterval differ from recursive setTimeout, and why is recursive setTimeout preferred for async tasks?",
    "answer": "setInterval fires at fixed intervals regardless of how long the callback takes, which can cause task queuing and overlapping if execution exceeds the interval. Recursive setTimeout schedules the next timer only after the current callback finishes, guaranteeing a consistent rest interval between executions and preventing cascading runs.",
    "explanation": "Recursive setTimeout guarantees consistent gap time and avoids overlapping async operations.",
    "interviewAnswer": "setInterval fires at fixed intervals regardless of how long the callback takes, which can cause task queuing and overlapping if execution exceeds the interval. Recursive setTimeout schedules the next timer only after the current callback finishes, guaranteeing a consistent rest interval between executions and preventing cascading runs. Recursive setTimeout guarantees consistent gap time and avoids overlapping async operations.",
    "importantPoints": [
      "setInterval fires at fixed intervals regardless of how long the callback takes, which can cause task queuing and overlapping if execution exceeds the interval. Recursive setTimeout schedules the next timer only after the current callback finishes, guaranteeing a consistent rest interval between executions and preventing cascading runs.",
      "Recursive setTimeout guarantees consistent gap time and avoids overlapping async operations."
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
      "async",
      "timers",
      "setInterval",
      "setTimeout"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "A search box sends an API request for every keystroke. How would you improve it?",
    "answer": "1) Apply Debouncing with a 250-300ms delay so requests are dispatched only after the user stops typing. 2) Use AbortController to cancel pending in-flight requests when a new query is dispatched. 3) Enforce a minimum character threshold (e.g. query.length >= 2). 4) Maintain an in-memory cache of recent search results to return instant cached responses for repeated queries.",
    "explanation": "Debounce stops request flooding; AbortController prevents race conditions from out-of-order responses.",
    "interviewAnswer": "1) Apply Debouncing with a 250-300ms delay so requests are dispatched only after the user stops typing. 2) Use AbortController to cancel pending in-flight requests when a new query is dispatched. 3) Enforce a minimum character threshold (e.g. query.length >= 2). 4) Maintain an in-memory cache of recent search results to return instant cached responses for repeated queries. Debounce stops request flooding; AbortController prevents race conditions from out-of-order responses.",
    "importantPoints": [
      "1) Apply Debouncing with a 250-300ms delay so requests are dispatched only after the user stops typing. 2) Use AbortController to cancel pending in-flight requests when a new query is dispatched. 3) Enforce a minimum character threshold (e.g. query.length >= 2). 4) Maintain an in-memory cache of recent search results to return instant cached responses for repeated queries.",
      "Debounce stops request flooding; AbortController prevents race conditions from out-of-order responses."
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
      "async",
      "debounce",
      "networking",
      "search",
      "production-scenario"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "Implement a debounce function in JavaScript with leading and trailing options.",
    "answer": "function debounce(fn, delay, { leading = false, trailing = true } = {}) { let timer = null; let lastArgs = null; return function(...args) { const callNow = leading && !timer; lastArgs = args; clearTimeout(timer); timer = setTimeout(() => { if (trailing && (!leading || lastArgs)) fn.apply(this, lastArgs); timer = null; lastArgs = null; }, delay); if (callNow) fn.apply(this, args); }; }",
    "explanation": "Maintains timer ID and executes either on the leading edge, trailing edge, or both.",
    "interviewAnswer": "function debounce(fn, delay, { leading = false, trailing = true } = {}) { let timer = null; let lastArgs = null; return function(...args) { const callNow = leading && !timer; lastArgs = args; clearTimeout(timer); timer = setTimeout(() => { if (trailing && (!leading || lastArgs)) fn.apply(this, lastArgs); timer = null; lastArgs = null; }, delay); if (callNow) fn.apply(this, args); }; } Maintains timer ID and executes either on the leading edge, trailing edge, or both.",
    "importantPoints": [
      "function debounce(fn, delay, { leading = false, trailing = true } = {}) { let timer = null; let lastArgs = null; return function(...args) { const callNow = leading && !timer; lastArgs = args; clearTimeout(timer); timer = setTimeout(() => { if (trailing && (!leading || lastArgs)) fn.apply(this, lastArgs); timer = null; lastArgs = null; }, delay); if (callNow) fn.apply(this, args); }; }",
      "Maintains timer ID and executes either on the leading edge, trailing edge, or both."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "debounce",
      "coding",
      "closures"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "Implement a throttle function in JavaScript with trailing edge guarantee.",
    "answer": "function throttle(fn, limit) { let inThrottle = false; let lastArgs = null; let lastCtx = null; return function(...args) { if (!inThrottle) { fn.apply(this, args); inThrottle = true; setTimeout(() => { inThrottle = false; if (lastArgs) { fn.apply(lastCtx, lastArgs); lastArgs = null; lastCtx = null; } }, limit); } else { lastArgs = args; lastCtx = this; } }; }",
    "explanation": "Limits invocation rate to at most once per limit ms; trailing edge ensures latest state is executed.",
    "interviewAnswer": "function throttle(fn, limit) { let inThrottle = false; let lastArgs = null; let lastCtx = null; return function(...args) { if (!inThrottle) { fn.apply(this, args); inThrottle = true; setTimeout(() => { inThrottle = false; if (lastArgs) { fn.apply(lastCtx, lastArgs); lastArgs = null; lastCtx = null; } }, limit); } else { lastArgs = args; lastCtx = this; } }; } Limits invocation rate to at most once per limit ms; trailing edge ensures latest state is executed.",
    "importantPoints": [
      "function throttle(fn, limit) { let inThrottle = false; let lastArgs = null; let lastCtx = null; return function(...args) { if (!inThrottle) { fn.apply(this, args); inThrottle = true; setTimeout(() => { inThrottle = false; if (lastArgs) { fn.apply(lastCtx, lastArgs); lastArgs = null; lastCtx = null; } }, limit); } else { lastArgs = args; lastCtx = this; } }; }",
      "Limits invocation rate to at most once per limit ms; trailing edge ensures latest state is executed."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "throttle",
      "coding",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "Compare Debounce vs Throttle: When should you use each in production frontend systems?",
    "answer": "Debounce clusters rapid sequential events into a single execution, firing only after a period of inactivity (e.g. search inputs, auto-save drafts, window resize end). Throttle regulates execution at a fixed maximum frequency during continuous firing (e.g. scroll listeners, drag-and-drop mouse movements, game ticks).",
    "explanation": "Debounce runs when events STOP; Throttle runs AT MOST ONCE every interval during continuous activity.",
    "interviewAnswer": "Debounce clusters rapid sequential events into a single execution, firing only after a period of inactivity (e.g. search inputs, auto-save drafts, window resize end). Throttle regulates execution at a fixed maximum frequency during continuous firing (e.g. scroll listeners, drag-and-drop mouse movements, game ticks). Debounce runs when events STOP; Throttle runs AT MOST ONCE every interval during continuous activity.",
    "importantPoints": [
      "Debounce clusters rapid sequential events into a single execution, firing only after a period of inactivity (e.g. search inputs, auto-save drafts, window resize end). Throttle regulates execution at a fixed maximum frequency during continuous firing (e.g. scroll listeners, drag-and-drop mouse movements, game ticks).",
      "Debounce runs when events STOP; Throttle runs AT MOST ONCE every interval during continuous activity."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "debounce",
      "throttle",
      "tradeoffs"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "A user clicks a button five times rapidly and five API requests are created. How would you prevent this?",
    "answer": "1) In the UI, immediately disable the button upon the first click and display a loading spinner. 2) Guard the event handler with a boolean flag (if (isSubmitting) return;). 3) Generate a unique client-side Idempotency Key (UUID) and pass it in the request header so the backend ignores duplicate payment or transaction attempts. 4) Apply throttling or debouncing on the click handler.",
    "explanation": "Client-side UI disabling + state guard + backend Idempotency Key ensures end-to-end protection.",
    "interviewAnswer": "1) In the UI, immediately disable the button upon the first click and display a loading spinner. 2) Guard the event handler with a boolean flag (if (isSubmitting) return;). 3) Generate a unique client-side Idempotency Key (UUID) and pass it in the request header so the backend ignores duplicate payment or transaction attempts. 4) Apply throttling or debouncing on the click handler. Client-side UI disabling + state guard + backend Idempotency Key ensures end-to-end protection.",
    "importantPoints": [
      "1) In the UI, immediately disable the button upon the first click and display a loading spinner. 2) Guard the event handler with a boolean flag (if (isSubmitting) return;). 3) Generate a unique client-side Idempotency Key (UUID) and pass it in the request header so the backend ignores duplicate payment or transaction attempts. 4) Apply throttling or debouncing on the click handler.",
      "Client-side UI disabling + state guard + backend Idempotency Key ensures end-to-end protection."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Logical / Scenario-Based",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "ui",
      "idempotency",
      "networking",
      "production-scenario"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do you implement request cancellation in modern JavaScript using AbortController and AbortSignal?",
    "answer": "Create an instance with const controller = new AbortController(). Pass controller.signal to the fetch options: fetch(url, { signal: controller.signal }). To cancel the request, call controller.abort(). In the promise catch block, check if (err.name === \"AbortError\") to distinguish deliberate cancellation from genuine network errors.",
    "explanation": "AbortController is the Web standard for cancelling promises, fetch requests, and event listeners.",
    "interviewAnswer": "Create an instance with const controller = new AbortController(). Pass controller.signal to the fetch options: fetch(url, { signal: controller.signal }). To cancel the request, call controller.abort(). In the promise catch block, check if (err.name === \"AbortError\") to distinguish deliberate cancellation from genuine network errors. AbortController is the Web standard for cancelling promises, fetch requests, and event listeners.",
    "importantPoints": [
      "Create an instance with const controller = new AbortController(). Pass controller.signal to the fetch options: fetch(url, { signal: controller.signal }). To cancel the request, call controller.abort(). In the promise catch block, check if (err.name === \"AbortError\") to distinguish deliberate cancellation from genuine network errors.",
      "AbortController is the Web standard for cancelling promises, fetch requests, and event listeners."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "abort-controller",
      "fetch",
      "cancellation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the output of: const c = new AbortController(); fetch(url, { signal: c.signal }).catch(e => console.log(e.name)); c.abort();?",
    "answer": "Outputs \"AbortError\". Calling c.abort() aborts the signal, causing the fetch promise to reject immediately with a DOMException whose name property is strictly \"AbortError\".",
    "explanation": "Demonstrates standard abort rejection handling in Fetch API.",
    "interviewAnswer": "Outputs \"AbortError\". Calling c.abort() aborts the signal, causing the fetch promise to reject immediately with a DOMException whose name property is strictly \"AbortError\". Demonstrates standard abort rejection handling in Fetch API.",
    "importantPoints": [
      "Outputs \"AbortError\". Calling c.abort() aborts the signal, causing the fetch promise to reject immediately with a DOMException whose name property is strictly \"AbortError\".",
      "Demonstrates standard abort rejection handling in Fetch API."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "async",
      "output-prediction",
      "abort-controller",
      "fetch"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "An asynchronous request sometimes returns stale data. What could cause this?",
    "answer": "This is caused by Network Race Conditions (out-of-order response arrivals). If Request A is sent before Request B, but Request A takes 2 seconds while Request B takes 200ms, Request B resolves first, and Request A resolves later, overwriting the UI with stale data. Fix by: 1) Aborting previous requests via AbortController, 2) tracking an incrementing requestId token and discarding stale responses, or 3) using React Query/RTK Query.",
    "explanation": "Variable network latency means dispatch order does not guarantee response order.",
    "interviewAnswer": "This is caused by Network Race Conditions (out-of-order response arrivals). If Request A is sent before Request B, but Request A takes 2 seconds while Request B takes 200ms, Request B resolves first, and Request A resolves later, overwriting the UI with stale data. Fix by: 1) Aborting previous requests via AbortController, 2) tracking an incrementing requestId token and discarding stale responses, or 3) using React Query/RTK Query. Variable network latency means dispatch order does not guarantee response order.",
    "importantPoints": [
      "This is caused by Network Race Conditions (out-of-order response arrivals). If Request A is sent before Request B, but Request A takes 2 seconds while Request B takes 200ms, Request B resolves first, and Request A resolves later, overwriting the UI with stale data. Fix by: 1) Aborting previous requests via AbortController, 2) tracking an incrementing requestId token and discarding stale responses, or 3) using React Query/RTK Query.",
      "Variable network latency means dispatch order does not guarantee response order."
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
      "async",
      "race-conditions",
      "networking",
      "production-scenario"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do Short Polling, Long Polling, and WebSockets compare for real-time web applications?",
    "answer": "Short Polling repeatedly requests data at fixed intervals; simple, but wastes bandwidth on empty responses. Long Polling holds an HTTP request open on the server until data is ready, minimizing empty requests while maintaining HTTP infrastructure. WebSockets establish a single persistent, bidirectional TCP connection with minimal per-message overhead, ideal for high-frequency real-time apps.",
    "explanation": "Short polling = high overhead; Long polling = hanging HTTP; WebSockets = full-duplex socket.",
    "interviewAnswer": "Short Polling repeatedly requests data at fixed intervals; simple, but wastes bandwidth on empty responses. Long Polling holds an HTTP request open on the server until data is ready, minimizing empty requests while maintaining HTTP infrastructure. WebSockets establish a single persistent, bidirectional TCP connection with minimal per-message overhead, ideal for high-frequency real-time apps. Short polling = high overhead; Long polling = hanging HTTP; WebSockets = full-duplex socket.",
    "importantPoints": [
      "Short Polling repeatedly requests data at fixed intervals; simple, but wastes bandwidth on empty responses. Long Polling holds an HTTP request open on the server until data is ready, minimizing empty requests while maintaining HTTP infrastructure. WebSockets establish a single persistent, bidirectional TCP connection with minimal per-message overhead, ideal for high-frequency real-time apps.",
      "Short polling = high overhead; Long polling = hanging HTTP; WebSockets = full-duplex socket."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "polling",
      "websockets",
      "networking"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "Implement an asynchronous retry mechanism with Exponential Backoff and Jitter in JavaScript.",
    "answer": "async function retryWithBackoff(fn, retries = 3, delay = 500, factor = 2) { try { return await fn(); } catch (err) { if (retries <= 0) throw err; const jitter = Math.random() * 100; const nextDelay = delay * factor + jitter; await new Promise(r => setTimeout(r, delay)); return retryWithBackoff(fn, retries - 1, nextDelay, factor); } }",
    "explanation": "Jitter prevents the \"Thundering Herd\" problem where multiple clients retry at the exact same millisecond.",
    "interviewAnswer": "async function retryWithBackoff(fn, retries = 3, delay = 500, factor = 2) { try { return await fn(); } catch (err) { if (retries <= 0) throw err; const jitter = Math.random() * 100; const nextDelay = delay * factor + jitter; await new Promise(r => setTimeout(r, delay)); return retryWithBackoff(fn, retries - 1, nextDelay, factor); } } Jitter prevents the \"Thundering Herd\" problem where multiple clients retry at the exact same millisecond.",
    "importantPoints": [
      "async function retryWithBackoff(fn, retries = 3, delay = 500, factor = 2) { try { return await fn(); } catch (err) { if (retries <= 0) throw err; const jitter = Math.random() * 100; const nextDelay = delay * factor + jitter; await new Promise(r => setTimeout(r, delay)); return retryWithBackoff(fn, retries - 1, nextDelay, factor); } }",
      "Jitter prevents the \"Thundering Herd\" problem where multiple clients retry at the exact same millisecond."
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
      "async",
      "retry",
      "exponential-backoff",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do you limit concurrent asynchronous tasks (e.g. executing 50 tasks with maximum concurrency of 5)?",
    "answer": "Iterate through tasks, launching each as a promise. Maintain an \"executing\" Set of active promises. When executing.size reaches the limit, await Promise.race(executing) to pause until one task finishes and removes itself from the Set before launching the next task. Return Promise.all(allTasks).",
    "explanation": "Unbounded concurrency with Promise.all can exhaust file descriptors, memory, or API rate limits.",
    "interviewAnswer": "Iterate through tasks, launching each as a promise. Maintain an \"executing\" Set of active promises. When executing.size reaches the limit, await Promise.race(executing) to pause until one task finishes and removes itself from the Set before launching the next task. Return Promise.all(allTasks). Unbounded concurrency with Promise.all can exhaust file descriptors, memory, or API rate limits.",
    "importantPoints": [
      "Iterate through tasks, launching each as a promise. Maintain an \"executing\" Set of active promises. When executing.size reaches the limit, await Promise.race(executing) to pause until one task finishes and removes itself from the Set before launching the next task. Return Promise.all(allTasks).",
      "Unbounded concurrency with Promise.all can exhaust file descriptors, memory, or API rate limits."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "concurrency",
      "p-limit",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the \"Zalgo\" anti-pattern in asynchronous JavaScript, and why should an API never release Zalgo?",
    "answer": "Releasing Zalgo means designing an API that executes a callback synchronously under certain conditions (e.g. cache hit) and asynchronously under others (e.g. cache miss). This creates non-deterministic execution order, causing caller state mutations to occur before or after the callback unpredictably. Always use queueMicrotask() or setTimeout() to ensure callbacks are consistently asynchronous.",
    "explanation": "An API must be 100% synchronous or 100% asynchronous; mixing both introduces insidious bugs.",
    "interviewAnswer": "Releasing Zalgo means designing an API that executes a callback synchronously under certain conditions (e.g. cache hit) and asynchronously under others (e.g. cache miss). This creates non-deterministic execution order, causing caller state mutations to occur before or after the callback unpredictably. Always use queueMicrotask() or setTimeout() to ensure callbacks are consistently asynchronous. An API must be 100% synchronous or 100% asynchronous; mixing both introduces insidious bugs.",
    "importantPoints": [
      "Releasing Zalgo means designing an API that executes a callback synchronously under certain conditions (e.g. cache hit) and asynchronously under others (e.g. cache miss). This creates non-deterministic execution order, causing caller state mutations to occur before or after the callback unpredictably. Always use queueMicrotask() or setTimeout() to ensure callbacks are consistently asynchronous.",
      "An API must be 100% synchronous or 100% asynchronous; mixing both introduces insidious bugs."
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
      "async",
      "zalgo",
      "api-design",
      "best-practices"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the output of: let x = 0; function f(cb) { if(x===0) cb(); else setTimeout(cb, 0); } f(() => x = 10); console.log(x); and why?",
    "answer": "Outputs 10. Because x is 0, f calls cb() synchronously on the spot, updating x to 10 before console.log(x) runs. If f had called setTimeout, the output would have been 0. This demonstrates the hazard of Zalgo.",
    "explanation": "Synchronous execution of the callback mutates state before the caller continuation executes.",
    "interviewAnswer": "Outputs 10. Because x is 0, f calls cb() synchronously on the spot, updating x to 10 before console.log(x) runs. If f had called setTimeout, the output would have been 0. This demonstrates the hazard of Zalgo. Synchronous execution of the callback mutates state before the caller continuation executes.",
    "importantPoints": [
      "Outputs 10. Because x is 0, f calls cb() synchronously on the spot, updating x to 10 before console.log(x) runs. If f had called setTimeout, the output would have been 0. This demonstrates the hazard of Zalgo.",
      "Synchronous execution of the callback mutates state before the caller continuation executes."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "async",
      "output-prediction",
      "zalgo",
      "synchronous"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do Web Workers allow running CPU-heavy operations without blocking user interactions?",
    "answer": "Web Workers execute JavaScript code on background operating system threads separate from the main execution thread. Because the main thread handles DOM updates, CSS styling, and user input events, offloading CPU-intensive algorithms (e.g. image processing, encryption, large dataset parsing) to a Web Worker keeps the main UI thread running smoothly at 60 FPS.",
    "explanation": "Workers have their own event loop and call stack, communicating with the main thread via postMessage.",
    "interviewAnswer": "Web Workers execute JavaScript code on background operating system threads separate from the main execution thread. Because the main thread handles DOM updates, CSS styling, and user input events, offloading CPU-intensive algorithms (e.g. image processing, encryption, large dataset parsing) to a Web Worker keeps the main UI thread running smoothly at 60 FPS. Workers have their own event loop and call stack, communicating with the main thread via postMessage.",
    "importantPoints": [
      "Web Workers execute JavaScript code on background operating system threads separate from the main execution thread. Because the main thread handles DOM updates, CSS styling, and user input events, offloading CPU-intensive algorithms (e.g. image processing, encryption, large dataset parsing) to a Web Worker keeps the main UI thread running smoothly at 60 FPS.",
      "Workers have their own event loop and call stack, communicating with the main thread via postMessage."
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
      "async",
      "web-workers",
      "multithreading",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "A CPU-heavy calculation blocks user interactions. What solutions could you consider?",
    "answer": "1) Web Workers: Offload computation to a dedicated background OS thread. 2) Time-Slicing: Break the calculation into small chunks and yield control back to the event loop using await scheduler.yield() or requestIdleCallback(). 3) WebAssembly (WASM): Compile compute-heavy C++/Rust routines to WebAssembly for 2-10x execution speedups. 4) Server-side computation: Offload heavy processing to backend workers.",
    "explanation": "Tasks >50ms are Long Tasks; moving off-thread via Workers or time-slicing keeps the UI responsive.",
    "interviewAnswer": "1) Web Workers: Offload computation to a dedicated background OS thread. 2) Time-Slicing: Break the calculation into small chunks and yield control back to the event loop using await scheduler.yield() or requestIdleCallback(). 3) WebAssembly (WASM): Compile compute-heavy C++/Rust routines to WebAssembly for 2-10x execution speedups. 4) Server-side computation: Offload heavy processing to backend workers. Tasks >50ms are Long Tasks; moving off-thread via Workers or time-slicing keeps the UI responsive.",
    "importantPoints": [
      "1) Web Workers: Offload computation to a dedicated background OS thread. 2) Time-Slicing: Break the calculation into small chunks and yield control back to the event loop using await scheduler.yield() or requestIdleCallback(). 3) WebAssembly (WASM): Compile compute-heavy C++/Rust routines to WebAssembly for 2-10x execution speedups. 4) Server-side computation: Offload heavy processing to backend workers.",
      "Tasks >50ms are Long Tasks; moving off-thread via Workers or time-slicing keeps the UI responsive."
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
      "async",
      "performance",
      "web-workers",
      "production-scenario"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the Structured Clone Algorithm, and how do Transferable Objects optimize Web Worker communication?",
    "answer": "By default, postMessage uses the Structured Clone Algorithm to deep-copy objects between threads, which causes significant memory duplication and serialization latency for large datasets. Transferable Objects (ArrayBuffer, MessagePort, ImageBitmap) transfer underlying memory ownership by reference with zero copy overhead, immediately neutralizing (detaching) the buffer in the sender thread.",
    "explanation": "Transferables provide sub-millisecond zero-copy transfers of large binary memory buffers.",
    "interviewAnswer": "By default, postMessage uses the Structured Clone Algorithm to deep-copy objects between threads, which causes significant memory duplication and serialization latency for large datasets. Transferable Objects (ArrayBuffer, MessagePort, ImageBitmap) transfer underlying memory ownership by reference with zero copy overhead, immediately neutralizing (detaching) the buffer in the sender thread. Transferables provide sub-millisecond zero-copy transfers of large binary memory buffers.",
    "importantPoints": [
      "By default, postMessage uses the Structured Clone Algorithm to deep-copy objects between threads, which causes significant memory duplication and serialization latency for large datasets. Transferable Objects (ArrayBuffer, MessagePort, ImageBitmap) transfer underlying memory ownership by reference with zero copy overhead, immediately neutralizing (detaching) the buffer in the sender thread.",
      "Transferables provide sub-millisecond zero-copy transfers of large binary memory buffers."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "web-workers",
      "structured-clone",
      "transferables"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What capabilities are restricted inside Web Workers compared to the main thread window context?",
    "answer": "Web Workers cannot access: 1) the DOM (document, window), 2) localStorage or sessionStorage, and 3) UI-specific APIs. They DO have access to: fetch, WebSockets, IndexedDB, setTimeout/setInterval, Web Crypto, and self (WorkerGlobalScope).",
    "explanation": "No DOM access prevents race conditions on UI elements between multiple OS threads.",
    "interviewAnswer": "Web Workers cannot access: 1) the DOM (document, window), 2) localStorage or sessionStorage, and 3) UI-specific APIs. They DO have access to: fetch, WebSockets, IndexedDB, setTimeout/setInterval, Web Crypto, and self (WorkerGlobalScope). No DOM access prevents race conditions on UI elements between multiple OS threads.",
    "importantPoints": [
      "Web Workers cannot access: 1) the DOM (document, window), 2) localStorage or sessionStorage, and 3) UI-specific APIs. They DO have access to: fetch, WebSockets, IndexedDB, setTimeout/setInterval, Web Crypto, and self (WorkerGlobalScope).",
      "No DOM access prevents race conditions on UI elements between multiple OS threads."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "async",
      "web-workers",
      "restrictions",
      "scope"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How does postMessage enable cross-origin communication between iframes, and how do you secure it?",
    "answer": "window.postMessage(message, targetOrigin) dispatches an asynchronous message to another window context. To secure it: 1) Always specify an exact targetOrigin (e.g. \"https://app.com\") instead of wildcard \"*\". 2) In the receiving window, always validate event.origin against a whitelist before processing event.data to prevent XSS or unauthorized data manipulation.",
    "explanation": "Wildcard targetOrigin exposes confidential tokens to malicious iframes.",
    "interviewAnswer": "window.postMessage(message, targetOrigin) dispatches an asynchronous message to another window context. To secure it: 1) Always specify an exact targetOrigin (e.g. \"https://app.com\") instead of wildcard \"*\". 2) In the receiving window, always validate event.origin against a whitelist before processing event.data to prevent XSS or unauthorized data manipulation. Wildcard targetOrigin exposes confidential tokens to malicious iframes.",
    "importantPoints": [
      "window.postMessage(message, targetOrigin) dispatches an asynchronous message to another window context. To secure it: 1) Always specify an exact targetOrigin (e.g. \"https://app.com\") instead of wildcard \"*\". 2) In the receiving window, always validate event.origin against a whitelist before processing event.data to prevent XSS or unauthorized data manipulation.",
      "Wildcard targetOrigin exposes confidential tokens to malicious iframes."
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
      "async",
      "postmessage",
      "security",
      "iframes"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "Why does try...catch around setTimeout fail to catch errors thrown inside the timer callback?",
    "answer": "try...catch only catches synchronous exceptions occurring within its active Call Stack frame. When setTimeout is invoked, the timer is registered and try...catch finishes executing and is popped off the stack immediately. The timer callback executes on a completely new call stack in a future event loop tick, where the original try...catch block no longer exists.",
    "explanation": "try...catch is context-bound to the current synchronous stack frame; async callbacks run in new frames.",
    "interviewAnswer": "try...catch only catches synchronous exceptions occurring within its active Call Stack frame. When setTimeout is invoked, the timer is registered and try...catch finishes executing and is popped off the stack immediately. The timer callback executes on a completely new call stack in a future event loop tick, where the original try...catch block no longer exists. try...catch is context-bound to the current synchronous stack frame; async callbacks run in new frames.",
    "importantPoints": [
      "try...catch only catches synchronous exceptions occurring within its active Call Stack frame. When setTimeout is invoked, the timer is registered and try...catch finishes executing and is popped off the stack immediately. The timer callback executes on a completely new call stack in a future event loop tick, where the original try...catch block no longer exists.",
      "try...catch is context-bound to the current synchronous stack frame; async callbacks run in new frames."
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
      "async",
      "try-catch",
      "error-handling",
      "timers"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the output of: try { setTimeout(() => { throw new Error(\"Err\"); }, 0); } catch(e) { console.log(\"Caught\"); } console.log(\"Done\");?",
    "answer": "Outputs \"Done\", followed by an Uncaught Error. The synchronous script logs \"Done\" and exits the try/catch without error. Later, the macrotask runs, throws an exception with no surrounding try/catch on the stack, and triggers an uncaught exception in the runtime.",
    "explanation": "\"Caught\" is never printed because the catch block had already exited before the callback ran.",
    "interviewAnswer": "Outputs \"Done\", followed by an Uncaught Error. The synchronous script logs \"Done\" and exits the try/catch without error. Later, the macrotask runs, throws an exception with no surrounding try/catch on the stack, and triggers an uncaught exception in the runtime. \"Caught\" is never printed because the catch block had already exited before the callback ran.",
    "importantPoints": [
      "Outputs \"Done\", followed by an Uncaught Error. The synchronous script logs \"Done\" and exits the try/catch without error. Later, the macrotask runs, throws an exception with no surrounding try/catch on the stack, and triggers an uncaught exception in the runtime.",
      "\"Caught\" is never printed because the catch block had already exited before the callback ran."
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
      "async",
      "output-prediction",
      "try-catch",
      "timers"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do uncleared timers cause memory leaks in Single Page Applications (SPAs)?",
    "answer": "The browser maintains a root reference to active timers in its internal timer table. If a timer callback closes over component state, DOM elements, or large arrays, the JavaScript Garbage Collector cannot reclaim those objects. When SPAs mount and unmount views without calling clearTimeout/clearInterval, abandoned timers accumulate in memory, causing heap growth.",
    "explanation": "Active timer callbacks act as GC roots preserving their lexical scope closures.",
    "interviewAnswer": "The browser maintains a root reference to active timers in its internal timer table. If a timer callback closes over component state, DOM elements, or large arrays, the JavaScript Garbage Collector cannot reclaim those objects. When SPAs mount and unmount views without calling clearTimeout/clearInterval, abandoned timers accumulate in memory, causing heap growth. Active timer callbacks act as GC roots preserving their lexical scope closures.",
    "importantPoints": [
      "The browser maintains a root reference to active timers in its internal timer table. If a timer callback closes over component state, DOM elements, or large arrays, the JavaScript Garbage Collector cannot reclaim those objects. When SPAs mount and unmount views without calling clearTimeout/clearInterval, abandoned timers accumulate in memory, causing heap growth.",
      "Active timer callbacks act as GC roots preserving their lexical scope closures."
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
      "async",
      "memory-leaks",
      "timers",
      "spa",
      "garbage-collection"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How does queueMicrotask work, and how does its execution timing compare to setTimeout(fn, 0)?",
    "answer": "queueMicrotask(fn) enqueues a callback into the Microtask Queue, which executes immediately after the current synchronous script finishes and before the browser renders UI or processes macrotasks. setTimeout(fn, 0) enqueues into the Macrotask Queue, which executes after rendering and all microtasks are drained. queueMicrotask runs strictly before setTimeout(fn, 0).",
    "explanation": "Microtasks have higher priority than macrotasks and run prior to browser paint.",
    "interviewAnswer": "queueMicrotask(fn) enqueues a callback into the Microtask Queue, which executes immediately after the current synchronous script finishes and before the browser renders UI or processes macrotasks. setTimeout(fn, 0) enqueues into the Macrotask Queue, which executes after rendering and all microtasks are drained. queueMicrotask runs strictly before setTimeout(fn, 0). Microtasks have higher priority than macrotasks and run prior to browser paint.",
    "importantPoints": [
      "queueMicrotask(fn) enqueues a callback into the Microtask Queue, which executes immediately after the current synchronous script finishes and before the browser renders UI or processes macrotasks. setTimeout(fn, 0) enqueues into the Macrotask Queue, which executes after rendering and all microtasks are drained. queueMicrotask runs strictly before setTimeout(fn, 0).",
      "Microtasks have higher priority than macrotasks and run prior to browser paint."
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
      "async",
      "queueMicrotask",
      "microtasks",
      "setTimeout"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the output of: console.log(\"1\"); setTimeout(() => console.log(\"2\"), 0); queueMicrotask(() => console.log(\"3\")); console.log(\"4\");?",
    "answer": "Outputs 1, 4, 3, 2. 1 and 4 execute synchronously. When the synchronous code finishes, the Event Loop drains the Microtask Queue, logging 3. Only after the microtask queue is empty does the Event Loop process the Macrotask Queue, logging 2.",
    "explanation": "Synchronous -> Microtasks (queueMicrotask) -> Macrotasks (setTimeout).",
    "interviewAnswer": "Outputs 1, 4, 3, 2. 1 and 4 execute synchronously. When the synchronous code finishes, the Event Loop drains the Microtask Queue, logging 3. Only after the microtask queue is empty does the Event Loop process the Macrotask Queue, logging 2. Synchronous -> Microtasks (queueMicrotask) -> Macrotasks (setTimeout).",
    "importantPoints": [
      "Outputs 1, 4, 3, 2. 1 and 4 execute synchronously. When the synchronous code finishes, the Event Loop drains the Microtask Queue, logging 3. Only after the microtask queue is empty does the Event Loop process the Macrotask Queue, logging 2.",
      "Synchronous -> Microtasks (queueMicrotask) -> Macrotasks (setTimeout)."
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
      "async",
      "output-prediction",
      "queueMicrotask",
      "timers"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How does requestAnimationFrame (rAF) work, and why is it preferred over setTimeout for UI animations?",
    "answer": "requestAnimationFrame instructs the browser to run a callback immediately before the next screen repaint, synchronized with the display hardware refresh rate (60Hz, 120Hz). Unlike setTimeout, rAF eliminates visual tearing and stutter (jank), pauses automatically in background tabs to save battery, and guarantees animation updates occur in lockstep with VSync.",
    "explanation": "rAF aligns with the browser rendering pipeline; timers fire out of sync with display refreshes.",
    "interviewAnswer": "requestAnimationFrame instructs the browser to run a callback immediately before the next screen repaint, synchronized with the display hardware refresh rate (60Hz, 120Hz). Unlike setTimeout, rAF eliminates visual tearing and stutter (jank), pauses automatically in background tabs to save battery, and guarantees animation updates occur in lockstep with VSync. rAF aligns with the browser rendering pipeline; timers fire out of sync with display refreshes.",
    "importantPoints": [
      "requestAnimationFrame instructs the browser to run a callback immediately before the next screen repaint, synchronized with the display hardware refresh rate (60Hz, 120Hz). Unlike setTimeout, rAF eliminates visual tearing and stutter (jank), pauses automatically in background tabs to save battery, and guarantees animation updates occur in lockstep with VSync.",
      "rAF aligns with the browser rendering pipeline; timers fire out of sync with display refreshes."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "raf",
      "animations",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How does requestIdleCallback work, and what is the difference between it and requestAnimationFrame?",
    "answer": "requestAnimationFrame runs high-priority visual tasks right before the screen repaint. requestIdleCallback runs low-priority background tasks only when the browser main thread is idle at the end of a frame, receiving a deadline.timeRemaining() object to check how many milliseconds remain before the next frame begins.",
    "explanation": "rAF is for critical frame rendering; requestIdleCallback is for non-urgent background work (analytics, cache).",
    "interviewAnswer": "requestAnimationFrame runs high-priority visual tasks right before the screen repaint. requestIdleCallback runs low-priority background tasks only when the browser main thread is idle at the end of a frame, receiving a deadline.timeRemaining() object to check how many milliseconds remain before the next frame begins. rAF is for critical frame rendering; requestIdleCallback is for non-urgent background work (analytics, cache).",
    "importantPoints": [
      "requestAnimationFrame runs high-priority visual tasks right before the screen repaint. requestIdleCallback runs low-priority background tasks only when the browser main thread is idle at the end of a frame, receiving a deadline.timeRemaining() object to check how many milliseconds remain before the next frame begins.",
      "rAF is for critical frame rendering; requestIdleCallback is for non-urgent background work (analytics, cache)."
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
      "async",
      "requestIdleCallback",
      "raf",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "A JavaScript application freezes the browser while processing a large dataset (100,000 items). How would you diagnose and fix it?",
    "answer": "Diagnose: Open DevTools Performance tab, record the freeze, and identify the Long Task blocking the Main Thread. Fix: 1) Offload processing to a Web Worker so the main thread never blocks. 2) If DOM interaction is required, implement Time-Slicing: chunk the array (e.g. 1,000 items) and yield to the event loop using await scheduler.yield() or setTimeout(chunk, 0) every 12ms to maintain 60 FPS.",
    "explanation": "Synchronous loops >50ms starve the event loop, freezing user inputs and CSS animations.",
    "interviewAnswer": "Diagnose: Open DevTools Performance tab, record the freeze, and identify the Long Task blocking the Main Thread. Fix: 1) Offload processing to a Web Worker so the main thread never blocks. 2) If DOM interaction is required, implement Time-Slicing: chunk the array (e.g. 1,000 items) and yield to the event loop using await scheduler.yield() or setTimeout(chunk, 0) every 12ms to maintain 60 FPS. Synchronous loops >50ms starve the event loop, freezing user inputs and CSS animations.",
    "importantPoints": [
      "Diagnose: Open DevTools Performance tab, record the freeze, and identify the Long Task blocking the Main Thread. Fix: 1) Offload processing to a Web Worker so the main thread never blocks. 2) If DOM interaction is required, implement Time-Slicing: chunk the array (e.g. 1,000 items) and yield to the event loop using await scheduler.yield() or setTimeout(chunk, 0) every 12ms to maintain 60 FPS.",
      "Synchronous loops >50ms starve the event loop, freezing user inputs and CSS animations."
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
      "async",
      "performance",
      "time-slicing",
      "production-scenario"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "Implement a chunked asynchronous processor in JavaScript that processes a 100,000-item array without freezing the UI.",
    "answer": "async function processChunked(items, fn) { let i = 0; return new Promise(resolve => { function step() { const start = performance.now(); while (i < items.length && performance.now() - start < 12) { fn(items[i], i); i++; } if (i < items.length) setTimeout(step, 0); else resolve(); } step(); }); }",
    "explanation": "Keeps main thread execution under 12ms per chunk, reserving ~4.6ms for 60fps browser rendering.",
    "interviewAnswer": "async function processChunked(items, fn) { let i = 0; return new Promise(resolve => { function step() { const start = performance.now(); while (i < items.length && performance.now() - start < 12) { fn(items[i], i); i++; } if (i < items.length) setTimeout(step, 0); else resolve(); } step(); }); } Keeps main thread execution under 12ms per chunk, reserving ~4.6ms for 60fps browser rendering.",
    "importantPoints": [
      "async function processChunked(items, fn) { let i = 0; return new Promise(resolve => { function step() { const start = performance.now(); while (i < items.length && performance.now() - start < 12) { fn(items[i], i); i++; } if (i < items.length) setTimeout(step, 0); else resolve(); } step(); }); }",
      "Keeps main thread execution under 12ms per chunk, reserving ~4.6ms for 60fps browser rendering."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "chunking",
      "time-slicing",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is an Asynchronous FIFO Queue, and how do you implement one in JavaScript?",
    "answer": "An Async Queue executes asynchronous tasks sequentially one at a time in First-In, First-Out order. Enqueueing returns a Promise and adds the task to an internal list. When active execution finishes, it shifts the next task, awaits it, resolves the caller promise, and triggers the next task in a finally block.",
    "explanation": "Prevents concurrent race conditions when mutating shared files or database transactions.",
    "interviewAnswer": "An Async Queue executes asynchronous tasks sequentially one at a time in First-In, First-Out order. Enqueueing returns a Promise and adds the task to an internal list. When active execution finishes, it shifts the next task, awaits it, resolves the caller promise, and triggers the next task in a finally block. Prevents concurrent race conditions when mutating shared files or database transactions.",
    "importantPoints": [
      "An Async Queue executes asynchronous tasks sequentially one at a time in First-In, First-Out order. Enqueueing returns a Promise and adds the task to an internal list. When active execution finishes, it shifts the next task, awaits it, resolves the caller promise, and triggers the next task in a finally block.",
      "Prevents concurrent race conditions when mutating shared files or database transactions."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "queue",
      "data-structures",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the difference between Concurrency and Parallelism in JavaScript environments?",
    "answer": "Concurrency is dealing with multiple tasks by interleaving them on a single thread (cooperative multitasking via the Event Loop). Parallelism is executing multiple tasks simultaneously at the exact same physical instant on separate CPU cores (achieved via Web Workers in browsers or Worker Threads in Node.js).",
    "explanation": "JavaScript is single-threaded and concurrent by default; parallelism requires multi-threading (Workers).",
    "interviewAnswer": "Concurrency is dealing with multiple tasks by interleaving them on a single thread (cooperative multitasking via the Event Loop). Parallelism is executing multiple tasks simultaneously at the exact same physical instant on separate CPU cores (achieved via Web Workers in browsers or Worker Threads in Node.js). JavaScript is single-threaded and concurrent by default; parallelism requires multi-threading (Workers).",
    "importantPoints": [
      "Concurrency is dealing with multiple tasks by interleaving them on a single thread (cooperative multitasking via the Event Loop). Parallelism is executing multiple tasks simultaneously at the exact same physical instant on separate CPU cores (achieved via Web Workers in browsers or Worker Threads in Node.js).",
      "JavaScript is single-threaded and concurrent by default; parallelism requires multi-threading (Workers)."
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
      "async",
      "concurrency",
      "parallelism",
      "architecture"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the output of: let c = 0; async function inc() { const cur = c; await delay(10); c = cur + 1; } Promise.all([inc(), inc(), inc()]).then(() => console.log(c)); and why?",
    "answer": "Outputs 1. All three inc() calls run concurrently and read c as 0 before any of them finish awaiting the timer. When each timer resolves, they all write 0 + 1 = 1 to c, resulting in a lost update race condition on shared state.",
    "explanation": "Single-threaded JavaScript can still suffer from async race conditions when awaiting across state reads/writes.",
    "interviewAnswer": "Outputs 1. All three inc() calls run concurrently and read c as 0 before any of them finish awaiting the timer. When each timer resolves, they all write 0 + 1 = 1 to c, resulting in a lost update race condition on shared state. Single-threaded JavaScript can still suffer from async race conditions when awaiting across state reads/writes.",
    "importantPoints": [
      "Outputs 1. All three inc() calls run concurrently and read c as 0 before any of them finish awaiting the timer. When each timer resolves, they all write 0 + 1 = 1 to c, resulting in a lost update race condition on shared state.",
      "Single-threaded JavaScript can still suffer from async race conditions when awaiting across state reads/writes."
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
      "async",
      "output-prediction",
      "race-conditions",
      "concurrency"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How does navigator.sendBeacon() solve reliability issues with analytics requests on page unload?",
    "answer": "Browsers often cancel standard asynchronous fetch or XHR requests during page unload to speed up navigation. Synchronous XHR in unload blocks the user experience. navigator.sendBeacon(url, data) queues an asynchronous HTTP POST request directly with the browser background process, ensuring guaranteed transmission without delaying navigation.",
    "explanation": "Guaranteed delivery on tab close or navigation without freezing page unload.",
    "interviewAnswer": "Browsers often cancel standard asynchronous fetch or XHR requests during page unload to speed up navigation. Synchronous XHR in unload blocks the user experience. navigator.sendBeacon(url, data) queues an asynchronous HTTP POST request directly with the browser background process, ensuring guaranteed transmission without delaying navigation. Guaranteed delivery on tab close or navigation without freezing page unload.",
    "importantPoints": [
      "Browsers often cancel standard asynchronous fetch or XHR requests during page unload to speed up navigation. Synchronous XHR in unload blocks the user experience. navigator.sendBeacon(url, data) queues an asynchronous HTTP POST request directly with the browser background process, ensuring guaranteed transmission without delaying navigation.",
      "Guaranteed delivery on tab close or navigation without freezing page unload."
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
      "async",
      "sendbeacon",
      "analytics",
      "browser"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How does the BroadcastChannel API enable asynchronous communication across same-origin browser tabs?",
    "answer": "BroadcastChannel provides a simple pub/sub channel allowing tabs, windows, and workers of the same origin to communicate. One tab posts a message via channel.postMessage(data), and all other subscribed tabs receive it via channel.onmessage. It eliminates polling localStorage storage events.",
    "explanation": "Ideal for synchronizing auth logout, cart state, or dark mode across open browser tabs.",
    "interviewAnswer": "BroadcastChannel provides a simple pub/sub channel allowing tabs, windows, and workers of the same origin to communicate. One tab posts a message via channel.postMessage(data), and all other subscribed tabs receive it via channel.onmessage. It eliminates polling localStorage storage events. Ideal for synchronizing auth logout, cart state, or dark mode across open browser tabs.",
    "importantPoints": [
      "BroadcastChannel provides a simple pub/sub channel allowing tabs, windows, and workers of the same origin to communicate. One tab posts a message via channel.postMessage(data), and all other subscribed tabs receive it via channel.onmessage. It eliminates polling localStorage storage events.",
      "Ideal for synchronizing auth logout, cart state, or dark mode across open browser tabs."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "async",
      "broadcast-channel",
      "cross-tab",
      "browser"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How does MutationObserver work, and how does its callback scheduling differ from legacy MutationEvents?",
    "answer": "MutationEvents fired synchronously on every single DOM mutation, causing severe performance degradation. MutationObserver batches all DOM mutations occurring during a script execution and delivers them asynchronously as a Microtask at the end of the current JavaScript execution context, before the browser repaints.",
    "explanation": "Delivered as microtasks, ensuring style updates apply before paint without layout thrashing.",
    "interviewAnswer": "MutationEvents fired synchronously on every single DOM mutation, causing severe performance degradation. MutationObserver batches all DOM mutations occurring during a script execution and delivers them asynchronously as a Microtask at the end of the current JavaScript execution context, before the browser repaints. Delivered as microtasks, ensuring style updates apply before paint without layout thrashing.",
    "importantPoints": [
      "MutationEvents fired synchronously on every single DOM mutation, causing severe performance degradation. MutationObserver batches all DOM mutations occurring during a script execution and delivers them asynchronously as a Microtask at the end of the current JavaScript execution context, before the browser repaints.",
      "Delivered as microtasks, ensuring style updates apply before paint without layout thrashing."
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
      "async",
      "mutation-observer",
      "dom",
      "microtasks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the output of: div.setAttribute(\"a\", \"1\"); observer.observe(div); setTimeout(() => console.log(\"T\"), 0); div.setAttribute(\"a\", \"2\"); console.log(\"S\");?",
    "answer": "Outputs \"S\", followed by the Observer callback, followed by \"T\". Synchronous code logs \"S\". MutationObserver delivers its batched mutation record via the Microtask Queue, executing before the Macrotask Queue runs \"T\".",
    "explanation": "MutationObserver callbacks run as microtasks, which always take priority over macrotasks.",
    "interviewAnswer": "Outputs \"S\", followed by the Observer callback, followed by \"T\". Synchronous code logs \"S\". MutationObserver delivers its batched mutation record via the Microtask Queue, executing before the Macrotask Queue runs \"T\". MutationObserver callbacks run as microtasks, which always take priority over macrotasks.",
    "importantPoints": [
      "Outputs \"S\", followed by the Observer callback, followed by \"T\". Synchronous code logs \"S\". MutationObserver delivers its batched mutation record via the Microtask Queue, executing before the Macrotask Queue runs \"T\".",
      "MutationObserver callbacks run as microtasks, which always take priority over macrotasks."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "async",
      "output-prediction",
      "mutation-observer",
      "microtasks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "Why is IntersectionObserver vastly more performant than listening to window scroll events?",
    "answer": "Scroll event listeners execute on the main thread on every pixel movement and often call getBoundingClientRect(), which forces expensive synchronous layout reflows (layout thrashing). IntersectionObserver delegates visibility calculations directly to the browser compositor thread and fires asynchronously only when elements cross specified visibility thresholds.",
    "explanation": "Offloads visibility calculations off the main thread, preventing layout thrashing and scroll lag.",
    "interviewAnswer": "Scroll event listeners execute on the main thread on every pixel movement and often call getBoundingClientRect(), which forces expensive synchronous layout reflows (layout thrashing). IntersectionObserver delegates visibility calculations directly to the browser compositor thread and fires asynchronously only when elements cross specified visibility thresholds. Offloads visibility calculations off the main thread, preventing layout thrashing and scroll lag.",
    "importantPoints": [
      "Scroll event listeners execute on the main thread on every pixel movement and often call getBoundingClientRect(), which forces expensive synchronous layout reflows (layout thrashing). IntersectionObserver delegates visibility calculations directly to the browser compositor thread and fires asynchronously only when elements cross specified visibility thresholds.",
      "Offloads visibility calculations off the main thread, preventing layout thrashing and scroll lag."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "intersection-observer",
      "scroll",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What causes the browser warning \"ResizeObserver loop limit exceeded\"?",
    "answer": "This occurs when a ResizeObserver callback modifies DOM element styles in a way that triggers another resize notification in the same animation frame. The browser limits resize notifications within a single frame to prevent infinite layout cycles, deferring remaining notifications to the next frame. It is generally benign.",
    "explanation": "Built-in browser guard preventing infinite circular resize feedback loops.",
    "interviewAnswer": "This occurs when a ResizeObserver callback modifies DOM element styles in a way that triggers another resize notification in the same animation frame. The browser limits resize notifications within a single frame to prevent infinite layout cycles, deferring remaining notifications to the next frame. It is generally benign. Built-in browser guard preventing infinite circular resize feedback loops.",
    "importantPoints": [
      "This occurs when a ResizeObserver callback modifies DOM element styles in a way that triggers another resize notification in the same animation frame. The browser limits resize notifications within a single frame to prevent infinite layout cycles, deferring remaining notifications to the next frame. It is generally benign.",
      "Built-in browser guard preventing infinite circular resize feedback loops."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "javascript",
      "async",
      "resize-observer",
      "browser",
      "debugging"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do you create an asynchronous timeout wrapper for any arbitrary Promise?",
    "answer": "function withTimeout(promise, ms) { let timer; const timeout = new Promise((_, reject) => { timer = setTimeout(() => reject(new Error(\"Timeout\")), ms); }); return Promise.race([promise.finally(() => clearTimeout(timer)), timeout]); }",
    "explanation": "Races the target promise against a timer, clearing the timer via .finally() to avoid leaks.",
    "interviewAnswer": "function withTimeout(promise, ms) { let timer; const timeout = new Promise((_, reject) => { timer = setTimeout(() => reject(new Error(\"Timeout\")), ms); }); return Promise.race([promise.finally(() => clearTimeout(timer)), timeout]); } Races the target promise against a timer, clearing the timer via .finally() to avoid leaks.",
    "importantPoints": [
      "function withTimeout(promise, ms) { let timer; const timeout = new Promise((_, reject) => { timer = setTimeout(() => reject(new Error(\"Timeout\")), ms); }); return Promise.race([promise.finally(() => clearTimeout(timer)), timeout]); }",
      "Races the target promise against a timer, clearing the timer via .finally() to avoid leaks."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "promises",
      "timeout",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do Asynchronous Generators (async function*) work, and how does for await...of consume them?",
    "answer": "Async generators combine async functions with generator iterators, using both await and yield. Calling an async generator returns an AsyncIterable whose .next() method returns a Promise resolving to { value, done }. The for await...of loop automatically awaits each yielded promise before advancing to the next iteration.",
    "explanation": "Enables streaming asynchronous data (e.g. paginated APIs, file streams) piece by piece.",
    "interviewAnswer": "Async generators combine async functions with generator iterators, using both await and yield. Calling an async generator returns an AsyncIterable whose .next() method returns a Promise resolving to { value, done }. The for await...of loop automatically awaits each yielded promise before advancing to the next iteration. Enables streaming asynchronous data (e.g. paginated APIs, file streams) piece by piece.",
    "importantPoints": [
      "Async generators combine async functions with generator iterators, using both await and yield. Calling an async generator returns an AsyncIterable whose .next() method returns a Promise resolving to { value, done }. The for await...of loop automatically awaits each yielded promise before advancing to the next iteration.",
      "Enables streaming asynchronous data (e.g. paginated APIs, file streams) piece by piece."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "generators",
      "for-await-of",
      "es2018"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the output of: async function* g() { yield 1; yield 2; } const it = g(); it.next().then(v => console.log(v));?",
    "answer": "Outputs { value: 1, done: false }. In async generators, every call to .next() returns a Promise resolving to the standard iterator result object.",
    "explanation": "Async iterators wrap all yielded values into resolved Promises.",
    "interviewAnswer": "Outputs { value: 1, done: false }. In async generators, every call to .next() returns a Promise resolving to the standard iterator result object. Async iterators wrap all yielded values into resolved Promises.",
    "importantPoints": [
      "Outputs { value: 1, done: false }. In async generators, every call to .next() returns a Promise resolving to the standard iterator result object.",
      "Async iterators wrap all yielded values into resolved Promises."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "async",
      "output-prediction",
      "generators",
      "async-iterator"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is Backpressure in asynchronous data pipelines, and how is it handled in JavaScript?",
    "answer": "Backpressure occurs when a data producer emits data faster than an asynchronous consumer can process it, causing unconsumed chunks to buffer in memory and risk Out-Of-Memory crashes. Handled in push streams (Node.js) by pausing when write() returns false until the \"drain\" event fires, or inherently in pull streams using for await...of.",
    "explanation": "Flow control preventing fast producers from exhausting system RAM.",
    "interviewAnswer": "Backpressure occurs when a data producer emits data faster than an asynchronous consumer can process it, causing unconsumed chunks to buffer in memory and risk Out-Of-Memory crashes. Handled in push streams (Node.js) by pausing when write() returns false until the \"drain\" event fires, or inherently in pull streams using for await...of. Flow control preventing fast producers from exhausting system RAM.",
    "importantPoints": [
      "Backpressure occurs when a data producer emits data faster than an asynchronous consumer can process it, causing unconsumed chunks to buffer in memory and risk Out-Of-Memory crashes. Handled in push streams (Node.js) by pausing when write() returns false until the \"drain\" event fires, or inherently in pull streams using for await...of.",
      "Flow control preventing fast producers from exhausting system RAM."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "streams",
      "backpressure",
      "node"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do Server-Sent Events (SSE) compare to WebSockets for real-time data streaming?",
    "answer": "SSE is a unidirectional (server-to-client) streaming protocol over standard HTTP (text/event-stream) featuring native automatic reconnection and event IDs via EventSource. WebSockets provide a bidirectional full-duplex TCP connection. SSE is simpler for server-push use cases (AI chat streaming, notifications), while WebSockets are required for two-way interactions (chat, gaming).",
    "explanation": "ChatGPT token streaming uses SSE; multiplayer games use WebSockets.",
    "interviewAnswer": "SSE is a unidirectional (server-to-client) streaming protocol over standard HTTP (text/event-stream) featuring native automatic reconnection and event IDs via EventSource. WebSockets provide a bidirectional full-duplex TCP connection. SSE is simpler for server-push use cases (AI chat streaming, notifications), while WebSockets are required for two-way interactions (chat, gaming). ChatGPT token streaming uses SSE; multiplayer games use WebSockets.",
    "importantPoints": [
      "SSE is a unidirectional (server-to-client) streaming protocol over standard HTTP (text/event-stream) featuring native automatic reconnection and event IDs via EventSource. WebSockets provide a bidirectional full-duplex TCP connection. SSE is simpler for server-push use cases (AI chat streaming, notifications), while WebSockets are required for two-way interactions (chat, gaming).",
      "ChatGPT token streaming uses SSE; multiplayer games use WebSockets."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "sse",
      "websockets",
      "networking"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "Why does using Array.prototype.forEach with an async callback cause unexpected execution order?",
    "answer": "forEach is completely promise-unaware: it does not await the promises returned by async callbacks, nor does it return a promise itself. It fires all async callbacks concurrently without waiting, causing code following forEach to execute immediately before callbacks resolve. Use for...of for sequential execution or Promise.all(arr.map(...)) for concurrent execution.",
    "explanation": "forEach ignores Promise return values and returns undefined immediately.",
    "interviewAnswer": "forEach is completely promise-unaware: it does not await the promises returned by async callbacks, nor does it return a promise itself. It fires all async callbacks concurrently without waiting, causing code following forEach to execute immediately before callbacks resolve. Use for...of for sequential execution or Promise.all(arr.map(...)) for concurrent execution. forEach ignores Promise return values and returns undefined immediately.",
    "importantPoints": [
      "forEach is completely promise-unaware: it does not await the promises returned by async callbacks, nor does it return a promise itself. It fires all async callbacks concurrently without waiting, causing code following forEach to execute immediately before callbacks resolve. Use for...of for sequential execution or Promise.all(arr.map(...)) for concurrent execution.",
      "forEach ignores Promise return values and returns undefined immediately."
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
      "async",
      "forEach",
      "promises",
      "anti-patterns"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the output of: console.log(\"A\"); [10, 0].forEach(async d => { await delay(d); console.log(d); }); console.log(\"B\"); and why?",
    "answer": "Outputs \"A\", \"B\", 0, 10. \"A\" logs synchronously. forEach launches both async callbacks without awaiting, so \"B\" logs immediately after \"A\". The two timers run concurrently; the 0ms delay finishes before the 10ms delay, logging 0 then 10.",
    "explanation": "forEach does not await; code after forEach runs before async callbacks finish.",
    "interviewAnswer": "Outputs \"A\", \"B\", 0, 10. \"A\" logs synchronously. forEach launches both async callbacks without awaiting, so \"B\" logs immediately after \"A\". The two timers run concurrently; the 0ms delay finishes before the 10ms delay, logging 0 then 10. forEach does not await; code after forEach runs before async callbacks finish.",
    "importantPoints": [
      "Outputs \"A\", \"B\", 0, 10. \"A\" logs synchronously. forEach launches both async callbacks without awaiting, so \"B\" logs immediately after \"A\". The two timers run concurrently; the 0ms delay finishes before the 10ms delay, logging 0 then 10.",
      "forEach does not await; code after forEach runs before async callbacks finish."
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
      "async",
      "output-prediction",
      "forEach",
      "timers"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do you execute an array of asynchronous tasks sequentially using Array.prototype.reduce?",
    "answer": "function runSequential(tasks) { return tasks.reduce((chain, task) => chain.then(results => task().then(res => [...results, res])), Promise.resolve([])); }",
    "explanation": "Chains .then() handlers onto an accumulator promise starting from Promise.resolve([]).",
    "interviewAnswer": "function runSequential(tasks) { return tasks.reduce((chain, task) => chain.then(results => task().then(res => [...results, res])), Promise.resolve([])); } Chains .then() handlers onto an accumulator promise starting from Promise.resolve([]).",
    "importantPoints": [
      "function runSequential(tasks) { return tasks.reduce((chain, task) => chain.then(results => task().then(res => [...results, res])), Promise.resolve([])); }",
      "Chains .then() handlers onto an accumulator promise starting from Promise.resolve([])."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "reduce",
      "promises",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What causes \"Maximum call stack size exceeded\" in deep recursive asynchronous routines, and how does a Trampoline function solve it?",
    "answer": "Synchronous recursion accumulates stack frames until the engine stack limit (~10,000 frames) is exceeded. A Trampoline function eliminates stack growth by wrapping recursive steps in thunks (functions). The trampoline runs an iterative while loop, executing one thunk at a time on a flat call stack of depth 1.",
    "explanation": "Converts recursive execution into a flat iterative loop with constant O(1) stack depth.",
    "interviewAnswer": "Synchronous recursion accumulates stack frames until the engine stack limit (~10,000 frames) is exceeded. A Trampoline function eliminates stack growth by wrapping recursive steps in thunks (functions). The trampoline runs an iterative while loop, executing one thunk at a time on a flat call stack of depth 1. Converts recursive execution into a flat iterative loop with constant O(1) stack depth.",
    "importantPoints": [
      "Synchronous recursion accumulates stack frames until the engine stack limit (~10,000 frames) is exceeded. A Trampoline function eliminates stack growth by wrapping recursive steps in thunks (functions). The trampoline runs an iterative while loop, executing one thunk at a time on a flat call stack of depth 1.",
      "Converts recursive execution into a flat iterative loop with constant O(1) stack depth."
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
      "recursion",
      "trampoline",
      "call-stack"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do you monitor and benchmark Event Loop Delay (latency) in Node.js applications?",
    "answer": "In Node.js, use the native perf_hooks module via perf_hooks.monitorEventLoopDelay({ resolution: 20 }). It monitors libuv event loop lag at the C++ layer and provides histogram percentiles (p50, p90, p99, max) with zero performance overhead.",
    "explanation": "Event loop delay is the gold standard metric for single-threaded Node.js server health.",
    "interviewAnswer": "In Node.js, use the native perf_hooks module via perf_hooks.monitorEventLoopDelay({ resolution: 20 }). It monitors libuv event loop lag at the C++ layer and provides histogram percentiles (p50, p90, p99, max) with zero performance overhead. Event loop delay is the gold standard metric for single-threaded Node.js server health.",
    "importantPoints": [
      "In Node.js, use the native perf_hooks module via perf_hooks.monitorEventLoopDelay({ resolution: 20 }). It monitors libuv event loop lag at the C++ layer and provides histogram percentiles (p50, p90, p99, max) with zero performance overhead.",
      "Event loop delay is the gold standard metric for single-threaded Node.js server health."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "event-loop",
      "node",
      "monitoring",
      "perf_hooks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the output of: console.log(1); setTimeout(() => { console.log(2); setTimeout(() => console.log(3), 0); }, 0); setTimeout(() => console.log(4), 0); console.log(5);?",
    "answer": "Outputs 1, 5, 2, 4, 3. 1 and 5 log synchronously. Outer timers 2 and 4 enter the macrotask queue. When 2 executes, it queues inner timer 3 at the back of the queue. Timer 4 is already waiting ahead of 3, so 4 executes next, and 3 executes last.",
    "explanation": "Macrotasks execute in FIFO order; newly scheduled timers append to the rear of the queue.",
    "interviewAnswer": "Outputs 1, 5, 2, 4, 3. 1 and 5 log synchronously. Outer timers 2 and 4 enter the macrotask queue. When 2 executes, it queues inner timer 3 at the back of the queue. Timer 4 is already waiting ahead of 3, so 4 executes next, and 3 executes last. Macrotasks execute in FIFO order; newly scheduled timers append to the rear of the queue.",
    "importantPoints": [
      "Outputs 1, 5, 2, 4, 3. 1 and 5 log synchronously. Outer timers 2 and 4 enter the macrotask queue. When 2 executes, it queues inner timer 3 at the back of the queue. Timer 4 is already waiting ahead of 3, so 4 executes next, and 3 executes last.",
      "Macrotasks execute in FIFO order; newly scheduled timers append to the rear of the queue."
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
      "async",
      "output-prediction",
      "timers",
      "event-loop"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do you cancel an active requestAnimationFrame animation loop?",
    "answer": "Call cancelAnimationFrame(requestId). requestAnimationFrame returns a numeric ID representing the scheduled callback. Passing this ID to cancelAnimationFrame disarms the scheduled frame before the next repaint occurs. Always cancel loops in component unmount cleanups.",
    "explanation": "cancelAnimationFrame prevents memory leaks and zombie loops when UI components unmount.",
    "interviewAnswer": "Call cancelAnimationFrame(requestId). requestAnimationFrame returns a numeric ID representing the scheduled callback. Passing this ID to cancelAnimationFrame disarms the scheduled frame before the next repaint occurs. Always cancel loops in component unmount cleanups. cancelAnimationFrame prevents memory leaks and zombie loops when UI components unmount.",
    "importantPoints": [
      "Call cancelAnimationFrame(requestId). requestAnimationFrame returns a numeric ID representing the scheduled callback. Passing this ID to cancelAnimationFrame disarms the scheduled frame before the next repaint occurs. Always cancel loops in component unmount cleanups.",
      "cancelAnimationFrame prevents memory leaks and zombie loops when UI components unmount."
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
      "async",
      "raf",
      "cleanup",
      "animations"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do you remove multiple DOM event listeners simultaneously using AbortController?",
    "answer": "const controller = new AbortController(); const { signal } = controller; window.addEventListener(\"resize\", fn1, { signal }); window.addEventListener(\"scroll\", fn2, { signal }); controller.abort(); Calling controller.abort() automatically removes all event listeners bound to that signal in a single line.",
    "explanation": "Eliminates having to store and match exact function references for removeEventListener.",
    "interviewAnswer": "const controller = new AbortController(); const { signal } = controller; window.addEventListener(\"resize\", fn1, { signal }); window.addEventListener(\"scroll\", fn2, { signal }); controller.abort(); Calling controller.abort() automatically removes all event listeners bound to that signal in a single line. Eliminates having to store and match exact function references for removeEventListener.",
    "importantPoints": [
      "const controller = new AbortController(); const { signal } = controller; window.addEventListener(\"resize\", fn1, { signal }); window.addEventListener(\"scroll\", fn2, { signal }); controller.abort(); Calling controller.abort() automatically removes all event listeners bound to that signal in a single line.",
      "Eliminates having to store and match exact function references for removeEventListener."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "abort-controller",
      "dom",
      "events"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the output of: const c = new AbortController(); c.signal.addEventListener(\"abort\", () => console.log(\"Aborted\")); console.log(\"Before\"); c.abort(); console.log(\"After\");?",
    "answer": "Outputs \"Before\", \"Aborted\", \"After\". Calling controller.abort() synchronously dispatches the \"abort\" event on the signal, executing the event listener immediately before c.abort() returns.",
    "explanation": "AbortSignal abort event listeners fire synchronously upon calling abort().",
    "interviewAnswer": "Outputs \"Before\", \"Aborted\", \"After\". Calling controller.abort() synchronously dispatches the \"abort\" event on the signal, executing the event listener immediately before c.abort() returns. AbortSignal abort event listeners fire synchronously upon calling abort().",
    "importantPoints": [
      "Outputs \"Before\", \"Aborted\", \"After\". Calling controller.abort() synchronously dispatches the \"abort\" event on the signal, executing the event listener immediately before c.abort() returns.",
      "AbortSignal abort event listeners fire synchronously upon calling abort()."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "async",
      "output-prediction",
      "abort-controller",
      "events"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How does AbortSignal.timeout(ms) simplify request timeouts in modern JavaScript (ES2022+)?",
    "answer": "AbortSignal.timeout(ms) returns an AbortSignal that automatically aborts with a TimeoutError after ms milliseconds. It eliminates manual new AbortController() and setTimeout boilerplate: fetch(url, { signal: AbortSignal.timeout(5000) }).",
    "explanation": "Native one-line replacement for manual AbortController + setTimeout wiring.",
    "interviewAnswer": "AbortSignal.timeout(ms) returns an AbortSignal that automatically aborts with a TimeoutError after ms milliseconds. It eliminates manual new AbortController() and setTimeout boilerplate: fetch(url, { signal: AbortSignal.timeout(5000) }). Native one-line replacement for manual AbortController + setTimeout wiring.",
    "importantPoints": [
      "AbortSignal.timeout(ms) returns an AbortSignal that automatically aborts with a TimeoutError after ms milliseconds. It eliminates manual new AbortController() and setTimeout boilerplate: fetch(url, { signal: AbortSignal.timeout(5000) }).",
      "Native one-line replacement for manual AbortController + setTimeout wiring."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "abort-signal",
      "timeout",
      "es2022"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do you combine multiple AbortSignals into one using AbortSignal.any()?",
    "answer": "AbortSignal.any([signalA, signalB]) returns a composite signal that aborts as soon as ANY of the input signals aborts. This allows combining user cancellation (e.g. click cancel button) with an automated timeout (AbortSignal.timeout(5000)) on a single fetch operation.",
    "explanation": "Standardized in modern browsers and Node.js v20+ for multi-trigger cancellation.",
    "interviewAnswer": "AbortSignal.any([signalA, signalB]) returns a composite signal that aborts as soon as ANY of the input signals aborts. This allows combining user cancellation (e.g. click cancel button) with an automated timeout (AbortSignal.timeout(5000)) on a single fetch operation. Standardized in modern browsers and Node.js v20+ for multi-trigger cancellation.",
    "importantPoints": [
      "AbortSignal.any([signalA, signalB]) returns a composite signal that aborts as soon as ANY of the input signals aborts. This allows combining user cancellation (e.g. click cancel button) with an automated timeout (AbortSignal.timeout(5000)) on a single fetch operation.",
      "Standardized in modern browsers and Node.js v20+ for multi-trigger cancellation."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "async",
      "abort-signal",
      "es2023",
      "networking"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the output of: async function f() { throw new Error(\"Boom\"); } f().catch(e => console.log(\"Caught:\", e.message)); console.log(\"End\");?",
    "answer": "Outputs \"End\", followed by \"Caught: Boom\". Marking a function as async guarantees that any synchronous exception thrown inside it is converted into a rejected Promise. The .catch() callback executes as a microtask after the synchronous \"End\" logs.",
    "explanation": "async functions always return Promises; thrown errors are captured as Promise rejections.",
    "interviewAnswer": "Outputs \"End\", followed by \"Caught: Boom\". Marking a function as async guarantees that any synchronous exception thrown inside it is converted into a rejected Promise. The .catch() callback executes as a microtask after the synchronous \"End\" logs. async functions always return Promises; thrown errors are captured as Promise rejections.",
    "importantPoints": [
      "Outputs \"End\", followed by \"Caught: Boom\". Marking a function as async guarantees that any synchronous exception thrown inside it is converted into a rejected Promise. The .catch() callback executes as a microtask after the synchronous \"End\" logs.",
      "async functions always return Promises; thrown errors are captured as Promise rejections."
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
      "async",
      "output-prediction",
      "async-await",
      "error-handling"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do you implement an asynchronous polling function with timeout in JavaScript?",
    "answer": "async function pollUntil(fn, condition, interval = 1000, maxTime = 10000) { const end = Date.now() + maxTime; while (Date.now() < end) { const res = await fn(); if (condition(res)) return res; await new Promise(r => setTimeout(r, interval)); } throw new Error(\"Polling timeout\"); }",
    "explanation": "Repeatedly checks condition with pause between iterations, throwing on timeout.",
    "interviewAnswer": "async function pollUntil(fn, condition, interval = 1000, maxTime = 10000) { const end = Date.now() + maxTime; while (Date.now() < end) { const res = await fn(); if (condition(res)) return res; await new Promise(r => setTimeout(r, interval)); } throw new Error(\"Polling timeout\"); } Repeatedly checks condition with pause between iterations, throwing on timeout.",
    "importantPoints": [
      "async function pollUntil(fn, condition, interval = 1000, maxTime = 10000) { const end = Date.now() + maxTime; while (Date.now() < end) { const res = await fn(); if (condition(res)) return res; await new Promise(r => setTimeout(r, interval)); } throw new Error(\"Polling timeout\"); }",
      "Repeatedly checks condition with pause between iterations, throwing on timeout."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "polling",
      "coding",
      "architecture"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the output of: setTimeout(() => console.log(1), 0); Promise.resolve().then(() => { console.log(2); setTimeout(() => console.log(3), 0); }); console.log(4);?",
    "answer": "Outputs 4, 2, 1, 3. 4 logs synchronously. Microtasks run before macrotasks, so 2 logs next. Inside the microtask, timer 3 is queued in the macrotask queue behind timer 1. Timer 1 runs, then timer 3 runs.",
    "explanation": "Microtasks drain ahead of macrotasks; macrotasks execute in FIFO arrival order.",
    "interviewAnswer": "Outputs 4, 2, 1, 3. 4 logs synchronously. Microtasks run before macrotasks, so 2 logs next. Inside the microtask, timer 3 is queued in the macrotask queue behind timer 1. Timer 1 runs, then timer 3 runs. Microtasks drain ahead of macrotasks; macrotasks execute in FIFO arrival order.",
    "importantPoints": [
      "Outputs 4, 2, 1, 3. 4 logs synchronously. Microtasks run before macrotasks, so 2 logs next. Inside the microtask, timer 3 is queued in the macrotask queue behind timer 1. Timer 1 runs, then timer 3 runs.",
      "Microtasks drain ahead of macrotasks; macrotasks execute in FIFO arrival order."
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
      "async",
      "output-prediction",
      "timers",
      "microtasks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do you implement an asynchronous memoization function that caches in-flight Promises?",
    "answer": "function memoizeAsync(fn) { const cache = new Map(); return function(...args) { const key = JSON.stringify(args); if (cache.has(key)) return cache.get(key); const p = fn.apply(this, args).catch(err => { cache.delete(key); throw err; }); cache.set(key, p); return p; }; }",
    "explanation": "Caching the in-flight Promise prevents duplicate requests when concurrent calls occur simultaneously.",
    "interviewAnswer": "function memoizeAsync(fn) { const cache = new Map(); return function(...args) { const key = JSON.stringify(args); if (cache.has(key)) return cache.get(key); const p = fn.apply(this, args).catch(err => { cache.delete(key); throw err; }); cache.set(key, p); return p; }; } Caching the in-flight Promise prevents duplicate requests when concurrent calls occur simultaneously.",
    "importantPoints": [
      "function memoizeAsync(fn) { const cache = new Map(); return function(...args) { const key = JSON.stringify(args); if (cache.has(key)) return cache.get(key); const p = fn.apply(this, args).catch(err => { cache.delete(key); throw err; }); cache.set(key, p); return p; }; }",
      "Caching the in-flight Promise prevents duplicate requests when concurrent calls occur simultaneously."
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
      "async",
      "memoize",
      "caching",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How does the Fetch API handle HTTP error status codes like 404 and 500?",
    "answer": "The fetch() Promise does NOT reject on HTTP error status codes like 404 or 500. It only rejects on network failures (offline client, DNS lookup failure, CORS failure). To handle HTTP errors, you must manually inspect response.ok (true for status 200-299) and throw an Error.",
    "explanation": "fetch considers receiving an HTTP response a success; developers must check response.ok.",
    "interviewAnswer": "The fetch() Promise does NOT reject on HTTP error status codes like 404 or 500. It only rejects on network failures (offline client, DNS lookup failure, CORS failure). To handle HTTP errors, you must manually inspect response.ok (true for status 200-299) and throw an Error. fetch considers receiving an HTTP response a success; developers must check response.ok.",
    "importantPoints": [
      "The fetch() Promise does NOT reject on HTTP error status codes like 404 or 500. It only rejects on network failures (offline client, DNS lookup failure, CORS failure). To handle HTTP errors, you must manually inspect response.ok (true for status 200-299) and throw an Error.",
      "fetch considers receiving an HTTP response a success; developers must check response.ok."
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
      "async",
      "fetch",
      "error-handling",
      "networking"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the output of: let val = 1; queueMicrotask(() => val += 2); Promise.resolve().then(() => val *= 3).then(() => console.log(val)); val += 1; console.log(\"Sync:\", val);?",
    "answer": "Outputs \"Sync: 2\", then 12. Synchronously, val becomes 2. Microtask 1 (queueMicrotask) runs: val = 2 + 2 = 4. Microtask 2 (first .then) runs: val = 4 * 3 = 12. Microtask 3 (second .then) runs: logs 12.",
    "explanation": "Microtasks share the same FIFO queue and execute sequentially after synchronous code completes.",
    "interviewAnswer": "Outputs \"Sync: 2\", then 12. Synchronously, val becomes 2. Microtask 1 (queueMicrotask) runs: val = 2 + 2 = 4. Microtask 2 (first .then) runs: val = 4 * 3 = 12. Microtask 3 (second .then) runs: logs 12. Microtasks share the same FIFO queue and execute sequentially after synchronous code completes.",
    "importantPoints": [
      "Outputs \"Sync: 2\", then 12. Synchronously, val becomes 2. Microtask 1 (queueMicrotask) runs: val = 2 + 2 = 4. Microtask 2 (first .then) runs: val = 4 * 3 = 12. Microtask 3 (second .then) runs: logs 12.",
      "Microtasks share the same FIFO queue and execute sequentially after synchronous code completes."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "async",
      "output-prediction",
      "microtasks",
      "queueMicrotask"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How does try...finally guarantee cleanup in Async Generators when a consumer exits early with break?",
    "answer": "When a consumer exits a for await...of loop early using break, return, or an error, the runtime automatically invokes the generator iterator .return() method. This jumps execution directly into the generator try...finally block, guaranteeing that sockets, file handles, or database cursors are cleanly closed.",
    "explanation": "Automatic iterator .return() invocation ensures finally blocks always execute on early exit.",
    "interviewAnswer": "When a consumer exits a for await...of loop early using break, return, or an error, the runtime automatically invokes the generator iterator .return() method. This jumps execution directly into the generator try...finally block, guaranteeing that sockets, file handles, or database cursors are cleanly closed. Automatic iterator .return() invocation ensures finally blocks always execute on early exit.",
    "importantPoints": [
      "When a consumer exits a for await...of loop early using break, return, or an error, the runtime automatically invokes the generator iterator .return() method. This jumps execution directly into the generator try...finally block, guaranteeing that sockets, file handles, or database cursors are cleanly closed.",
      "Automatic iterator .return() invocation ensures finally blocks always execute on early exit."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "generators",
      "cleanup",
      "try-finally"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "What is the output of: async function a() { console.log(1); await b(); console.log(2); } async function b() { console.log(3); } console.log(4); a(); console.log(5);?",
    "answer": "Outputs 4, 1, 3, 5, 2. 4 logs synchronously. a() runs synchronously up to await: logs 1, then b() logs 3. await b() pauses a() and queues its continuation in the microtask queue. 5 logs synchronously. The microtask queue drains and logs 2.",
    "explanation": "Statements prior to the first await run synchronously on the call stack.",
    "interviewAnswer": "Outputs 4, 1, 3, 5, 2. 4 logs synchronously. a() runs synchronously up to await: logs 1, then b() logs 3. await b() pauses a() and queues its continuation in the microtask queue. 5 logs synchronously. The microtask queue drains and logs 2. Statements prior to the first await run synchronously on the call stack.",
    "importantPoints": [
      "Outputs 4, 1, 3, 5, 2. 4 logs synchronously. a() runs synchronously up to await: logs 1, then b() logs 3. await b() pauses a() and queues its continuation in the microtask queue. 5 logs synchronously. The microtask queue drains and logs 2.",
      "Statements prior to the first await run synchronously on the call stack."
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
      "async",
      "output-prediction",
      "async-await",
      "microtasks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "asynchronous-javascript",
    "question": "How do you implement an asynchronous batch loader (DataLoader pattern) to resolve N+1 query problems?",
    "answer": "function createLoader(batchFn) { let queue = []; let scheduled = false; return id => new Promise((resolve, reject) => { queue.push({ id, resolve, reject }); if (!scheduled) { scheduled = true; queueMicrotask(async () => { const batch = queue; queue = []; scheduled = false; const results = await batchFn(batch.map(b => b.id)); batch.forEach((b, i) => b.resolve(results[i])); }); } }); }",
    "explanation": "Coalesces individual operations made within the same event loop tick into a single batch query.",
    "interviewAnswer": "function createLoader(batchFn) { let queue = []; let scheduled = false; return id => new Promise((resolve, reject) => { queue.push({ id, resolve, reject }); if (!scheduled) { scheduled = true; queueMicrotask(async () => { const batch = queue; queue = []; scheduled = false; const results = await batchFn(batch.map(b => b.id)); batch.forEach((b, i) => b.resolve(results[i])); }); } }); } Coalesces individual operations made within the same event loop tick into a single batch query.",
    "importantPoints": [
      "function createLoader(batchFn) { let queue = []; let scheduled = false; return id => new Promise((resolve, reject) => { queue.push({ id, resolve, reject }); if (!scheduled) { scheduled = true; queueMicrotask(async () => { const batch = queue; queue = []; scheduled = false; const results = await batchFn(batch.map(b => b.id)); batch.forEach((b, i) => b.resolve(results[i])); }); } }); }",
      "Coalesces individual operations made within the same event loop tick into a single batch query."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "async",
      "dataloader",
      "batching",
      "performance",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
