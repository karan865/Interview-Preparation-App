import { SeedQuestion } from '../types';

export const javascriptEventLoopQuestions: SeedQuestion[] = [
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the JavaScript Event Loop, and what fundamental architectural problem does it solve?",
    "answer": "The Event Loop is a continuous runtime coordination loop that monitors the Call Stack and task queues. Because the JavaScript engine is single-threaded and executes one stack frame at a time, the Event Loop enables non-blocking asynchronous concurrency by waiting until the Call Stack is empty, draining all pending microtasks, and then dequeuing macrotasks one by one.",
    "explanation": "Coordinates the Call Stack, Microtask Queue, and Task Queue (Macrotasks) without blocking the thread.",
    "interviewAnswer": "The Event Loop is a continuous runtime coordination loop that monitors the Call Stack and task queues. Because the JavaScript engine is single-threaded and executes one stack frame at a time, the Event Loop enables non-blocking asynchronous concurrency by waiting until the Call Stack is empty, draining all pending microtasks, and then dequeuing macrotasks one by one. Coordinates the Call Stack, Microtask Queue, and Task Queue (Macrotasks) without blocking the thread.",
    "importantPoints": [
      "The Event Loop is a continuous runtime coordination loop that monitors the Call Stack and task queues. Because the JavaScript engine is single-threaded and executes one stack frame at a time, the Event Loop enables non-blocking asynchronous concurrency by waiting until the Call Stack is empty, draining all pending microtasks, and then dequeuing macrotasks one by one.",
      "Coordinates the Call Stack, Microtask Queue, and Task Queue (Macrotasks) without blocking the thread."
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
      "event-loop",
      "concurrency",
      "call-stack",
      "runtime"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the precise difference between a Macrotask and a Microtask in the browser Event Loop?",
    "answer": "Microtasks (Promise.then, queueMicrotask, MutationObserver) have immediate priority over Macrotasks. When a task completes, the Event Loop drains the ENTIRE Microtask Queue to exhaustion before continuing. Macrotasks (setTimeout, setInterval, setImmediate, I/O, UI events) execute one task per event loop cycle, after which the browser may render before picking the next macrotask.",
    "explanation": "Microtask queue drains completely on every turn; Macrotask queue executes one task per turn.",
    "interviewAnswer": "Microtasks (Promise.then, queueMicrotask, MutationObserver) have immediate priority over Macrotasks. When a task completes, the Event Loop drains the ENTIRE Microtask Queue to exhaustion before continuing. Macrotasks (setTimeout, setInterval, setImmediate, I/O, UI events) execute one task per event loop cycle, after which the browser may render before picking the next macrotask. Microtask queue drains completely on every turn; Macrotask queue executes one task per turn.",
    "importantPoints": [
      "Microtasks (Promise.then, queueMicrotask, MutationObserver) have immediate priority over Macrotasks. When a task completes, the Event Loop drains the ENTIRE Microtask Queue to exhaustion before continuing. Macrotasks (setTimeout, setInterval, setImmediate, I/O, UI events) execute one task per event loop cycle, after which the browser may render before picking the next macrotask.",
      "Microtask queue drains completely on every turn; Macrotask queue executes one task per turn."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "microtasks",
      "macrotasks",
      "priorities"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What are the exact step-by-step phases of a single tick of the Browser Event Loop?",
    "answer": "1) Select and run the oldest task from the Macrotask Queue (or run initial script). 2) Perform Microtask Checkpoint: execute all queued microtasks until the Microtask Queue is completely empty (including any microtasks queued while draining). 3) Run requestAnimationFrame callbacks. 4) Render pipeline: calculate layout, styles, and paint pixels to screen (if frame deadline reached). 5) Idle phase: execute requestIdleCallback if spare time remains. 6) Loop to step 1.",
    "explanation": "Specifies order: Macrotask -> Microtask Checkpoint -> rAF -> Paint -> Idle -> Next Macrotask.",
    "interviewAnswer": "1) Select and run the oldest task from the Macrotask Queue (or run initial script). 2) Perform Microtask Checkpoint: execute all queued microtasks until the Microtask Queue is completely empty (including any microtasks queued while draining). 3) Run requestAnimationFrame callbacks. 4) Render pipeline: calculate layout, styles, and paint pixels to screen (if frame deadline reached). 5) Idle phase: execute requestIdleCallback if spare time remains. 6) Loop to step 1. Specifies order: Macrotask -> Microtask Checkpoint -> rAF -> Paint -> Idle -> Next Macrotask.",
    "importantPoints": [
      "1) Select and run the oldest task from the Macrotask Queue (or run initial script). 2) Perform Microtask Checkpoint: execute all queued microtasks until the Microtask Queue is completely empty (including any microtasks queued while draining). 3) Run requestAnimationFrame callbacks. 4) Render pipeline: calculate layout, styles, and paint pixels to screen (if frame deadline reached). 5) Idle phase: execute requestIdleCallback if spare time remains. 6) Loop to step 1.",
      "Specifies order: Macrotask -> Microtask Checkpoint -> rAF -> Paint -> Idle -> Next Macrotask."
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
      "event-loop",
      "browser-phases",
      "rendering",
      "spec"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "How do the Event Loop phases in Node.js differ from the Browser Event Loop?",
    "answer": "Node.js is powered by libuv and executes in distinct phase stages: 1) Timers (setTimeout, setInterval), 2) Pending Callbacks (I/O errors), 3) Idle/Prepare (internal), 4) Poll (retrieve new I/O events), 5) Check (setImmediate), 6) Close Callbacks (socket.on(\"close\")). Between EVERY phase, Node.js drains process.nextTickQueue first, then the Promise Microtask Queue.",
    "explanation": "Node.js event loop has 6 distinct libuv phases, whereas the browser alternates macrotask, microtask checkpoint, and render.",
    "interviewAnswer": "Node.js is powered by libuv and executes in distinct phase stages: 1) Timers (setTimeout, setInterval), 2) Pending Callbacks (I/O errors), 3) Idle/Prepare (internal), 4) Poll (retrieve new I/O events), 5) Check (setImmediate), 6) Close Callbacks (socket.on(\"close\")). Between EVERY phase, Node.js drains process.nextTickQueue first, then the Promise Microtask Queue. Node.js event loop has 6 distinct libuv phases, whereas the browser alternates macrotask, microtask checkpoint, and render.",
    "importantPoints": [
      "Node.js is powered by libuv and executes in distinct phase stages: 1) Timers (setTimeout, setInterval), 2) Pending Callbacks (I/O errors), 3) Idle/Prepare (internal), 4) Poll (retrieve new I/O events), 5) Check (setImmediate), 6) Close Callbacks (socket.on(\"close\")). Between EVERY phase, Node.js drains process.nextTickQueue first, then the Promise Microtask Queue.",
      "Node.js event loop has 6 distinct libuv phases, whereas the browser alternates macrotask, microtask checkpoint, and render."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "node",
      "libuv",
      "event-loop",
      "phases"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is process.nextTick in Node.js, and how does its priority compare to Promises and queueMicrotask?",
    "answer": "process.nextTick schedules a callback on the nextTickQueue in Node.js. It is NOT part of libuv; it is handled directly by Node.js core. The nextTickQueue executes immediately after the currently running operation completes and BEFORE the Promise microtask queue. Therefore, process.nextTick runs strictly before Promise.then() and queueMicrotask() in Node.js.",
    "explanation": "Priority in Node: Synchronous -> process.nextTick -> Promise/queueMicrotask -> Libuv Macrotasks.",
    "interviewAnswer": "process.nextTick schedules a callback on the nextTickQueue in Node.js. It is NOT part of libuv; it is handled directly by Node.js core. The nextTickQueue executes immediately after the currently running operation completes and BEFORE the Promise microtask queue. Therefore, process.nextTick runs strictly before Promise.then() and queueMicrotask() in Node.js. Priority in Node: Synchronous -> process.nextTick -> Promise/queueMicrotask -> Libuv Macrotasks.",
    "importantPoints": [
      "process.nextTick schedules a callback on the nextTickQueue in Node.js. It is NOT part of libuv; it is handled directly by Node.js core. The nextTickQueue executes immediately after the currently running operation completes and BEFORE the Promise microtask queue. Therefore, process.nextTick runs strictly before Promise.then() and queueMicrotask() in Node.js.",
      "Priority in Node: Synchronous -> process.nextTick -> Promise/queueMicrotask -> Libuv Macrotasks."
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
      "node",
      "process-nextTick",
      "microtasks",
      "priority"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: console.log(1); process.nextTick(() => console.log(2)); Promise.resolve().then(() => console.log(3)); setTimeout(() => console.log(4), 0); console.log(5); in Node.js?",
    "answer": "Outputs 1, 5, 2, 3, 4. Synchronous logs: 1, 5. Next, Node.js drains process.nextTickQueue: 2. Then Node.js drains the Promise microtask queue: 3. Finally, the timer phase of libuv runs the macrotask: 4.",
    "explanation": "Demonstrates nextTick priority over standard microtasks and macrotasks in Node.js.",
    "interviewAnswer": "Outputs 1, 5, 2, 3, 4. Synchronous logs: 1, 5. Next, Node.js drains process.nextTickQueue: 2. Then Node.js drains the Promise microtask queue: 3. Finally, the timer phase of libuv runs the macrotask: 4. Demonstrates nextTick priority over standard microtasks and macrotasks in Node.js.",
    "importantPoints": [
      "Outputs 1, 5, 2, 3, 4. Synchronous logs: 1, 5. Next, Node.js drains process.nextTickQueue: 2. Then Node.js drains the Promise microtask queue: 3. Finally, the timer phase of libuv runs the macrotask: 4.",
      "Demonstrates nextTick priority over standard microtasks and macrotasks in Node.js."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "node",
      "output-prediction",
      "process-nextTick",
      "event-loop"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the difference between setImmediate() and setTimeout(fn, 0) in Node.js?",
    "answer": "setTimeout(fn, 0) runs in the Timers phase of the libuv event loop. setImmediate(fn) runs in the Check phase (right after the Poll phase). When called within an I/O cycle (e.g. fs.readFile callback), setImmediate ALWAYS executes before setTimeout(fn, 0). When called in the main module scope, their execution order is non-deterministic depending on process performance and timer clock resolution.",
    "explanation": "setImmediate runs in Check phase; inside I/O callbacks, setImmediate always beats setTimeout.",
    "interviewAnswer": "setTimeout(fn, 0) runs in the Timers phase of the libuv event loop. setImmediate(fn) runs in the Check phase (right after the Poll phase). When called within an I/O cycle (e.g. fs.readFile callback), setImmediate ALWAYS executes before setTimeout(fn, 0). When called in the main module scope, their execution order is non-deterministic depending on process performance and timer clock resolution. setImmediate runs in Check phase; inside I/O callbacks, setImmediate always beats setTimeout.",
    "importantPoints": [
      "setTimeout(fn, 0) runs in the Timers phase of the libuv event loop. setImmediate(fn) runs in the Check phase (right after the Poll phase). When called within an I/O cycle (e.g. fs.readFile callback), setImmediate ALWAYS executes before setTimeout(fn, 0). When called in the main module scope, their execution order is non-deterministic depending on process performance and timer clock resolution.",
      "setImmediate runs in Check phase; inside I/O callbacks, setImmediate always beats setTimeout."
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
      "node",
      "setImmediate",
      "setTimeout",
      "libuv"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: const fs = require(\"fs\"); fs.readFile(__filename, () => { setTimeout(() => console.log(\"timeout\"), 0); setImmediate(() => console.log(\"immediate\")); }); and why?",
    "answer": "Always outputs \"immediate\" then \"timeout\". Inside an I/O callback, the event loop is in the Poll phase. Moving forward, the next phase is the Check phase, where setImmediate executes immediately. The Timers phase requires looping around to the beginning of the next tick, so setTimeout runs after setImmediate.",
    "explanation": "Poll phase advances directly to Check phase in libuv, guaranteeing setImmediate executes first.",
    "interviewAnswer": "Always outputs \"immediate\" then \"timeout\". Inside an I/O callback, the event loop is in the Poll phase. Moving forward, the next phase is the Check phase, where setImmediate executes immediately. The Timers phase requires looping around to the beginning of the next tick, so setTimeout runs after setImmediate. Poll phase advances directly to Check phase in libuv, guaranteeing setImmediate executes first.",
    "importantPoints": [
      "Always outputs \"immediate\" then \"timeout\". Inside an I/O callback, the event loop is in the Poll phase. Moving forward, the next phase is the Check phase, where setImmediate executes immediately. The Timers phase requires looping around to the beginning of the next tick, so setTimeout runs after setImmediate.",
      "Poll phase advances directly to Check phase in libuv, guaranteeing setImmediate executes first."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "node",
      "output-prediction",
      "setImmediate",
      "fs"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: console.log(\"A\"); setTimeout(() => console.log(\"B\"), 0); Promise.resolve().then(() => console.log(\"C\")).then(() => console.log(\"D\")); console.log(\"E\");?",
    "answer": "Outputs A, E, C, D, B. Synchronous code logs A and E. Microtask queue runs first .then() logging C, which queues second .then() into the active microtask queue. Microtask queue drains to completion, logging D. Finally, macrotask queue runs setTimeout callback, logging B.",
    "explanation": "Microtask queue drains completely before any macrotask can execute.",
    "interviewAnswer": "Outputs A, E, C, D, B. Synchronous code logs A and E. Microtask queue runs first .then() logging C, which queues second .then() into the active microtask queue. Microtask queue drains to completion, logging D. Finally, macrotask queue runs setTimeout callback, logging B. Microtask queue drains completely before any macrotask can execute.",
    "importantPoints": [
      "Outputs A, E, C, D, B. Synchronous code logs A and E. Microtask queue runs first .then() logging C, which queues second .then() into the active microtask queue. Microtask queue drains to completion, logging D. Finally, macrotask queue runs setTimeout callback, logging B.",
      "Microtask queue drains completely before any macrotask can execute."
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
      "event-loop",
      "output-prediction",
      "microtasks",
      "macrotasks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What happens if a microtask continuously schedules another microtask recursively?",
    "answer": "It causes Microtask Starvation. Because the Event Loop is mandated by the spec to drain the microtask queue to exhaustion before executing any macrotasks or updating rendering, an infinite microtask loop blocks the event loop completely. The browser freezes, drops all frames, and ignores user input without throwing a Call Stack overflow.",
    "explanation": "Microtask starvation locks the event loop without blowing the call stack.",
    "interviewAnswer": "It causes Microtask Starvation. Because the Event Loop is mandated by the spec to drain the microtask queue to exhaustion before executing any macrotasks or updating rendering, an infinite microtask loop blocks the event loop completely. The browser freezes, drops all frames, and ignores user input without throwing a Call Stack overflow. Microtask starvation locks the event loop without blowing the call stack.",
    "importantPoints": [
      "It causes Microtask Starvation. Because the Event Loop is mandated by the spec to drain the microtask queue to exhaustion before executing any macrotasks or updating rendering, an infinite microtask loop blocks the event loop completely. The browser freezes, drops all frames, and ignores user input without throwing a Call Stack overflow.",
      "Microtask starvation locks the event loop without blowing the call stack."
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
      "event-loop",
      "starvation",
      "microtasks",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: setTimeout(() => console.log(\"T1\"), 0); Promise.resolve().then(() => { console.log(\"P1\"); setTimeout(() => console.log(\"T2\"), 0); }); setTimeout(() => console.log(\"T3\"), 0);?",
    "answer": "Outputs P1, T1, T3, T2. Synchronous code enqueues T1, P1 (microtask), and T3. Microtask queue drains first: logs P1 and enqueues T2 at the back of the macrotask queue. Macrotask queue is now [T1, T3, T2]. They execute in FIFO order: T1, T3, T2.",
    "explanation": "T1 and T3 were already in the macrotask queue ahead of T2.",
    "interviewAnswer": "Outputs P1, T1, T3, T2. Synchronous code enqueues T1, P1 (microtask), and T3. Microtask queue drains first: logs P1 and enqueues T2 at the back of the macrotask queue. Macrotask queue is now [T1, T3, T2]. They execute in FIFO order: T1, T3, T2. T1 and T3 were already in the macrotask queue ahead of T2.",
    "importantPoints": [
      "Outputs P1, T1, T3, T2. Synchronous code enqueues T1, P1 (microtask), and T3. Microtask queue drains first: logs P1 and enqueues T2 at the back of the macrotask queue. Macrotask queue is now [T1, T3, T2]. They execute in FIFO order: T1, T3, T2.",
      "T1 and T3 were already in the macrotask queue ahead of T2."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "queue-order",
      "timers"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "How does UI rendering fit into the Event Loop cycle, and why do DOM mutations inside a microtask not cause visual flickering?",
    "answer": "The browser rendering pipeline (style calculation, layout, and paint) occurs AFTER the microtask checkpoint and BEFORE the next macrotask. When DOM mutations occur inside a synchronous function or microtask, the browser batches those DOM tree changes in memory. Rendering only paints after all microtasks finish, guaranteeing the user only sees the final aggregated DOM state.",
    "explanation": "Rendering happens after microtasks drain; multiple microtask DOM mutations are painted as a single atomic frame.",
    "interviewAnswer": "The browser rendering pipeline (style calculation, layout, and paint) occurs AFTER the microtask checkpoint and BEFORE the next macrotask. When DOM mutations occur inside a synchronous function or microtask, the browser batches those DOM tree changes in memory. Rendering only paints after all microtasks finish, guaranteeing the user only sees the final aggregated DOM state. Rendering happens after microtasks drain; multiple microtask DOM mutations are painted as a single atomic frame.",
    "importantPoints": [
      "The browser rendering pipeline (style calculation, layout, and paint) occurs AFTER the microtask checkpoint and BEFORE the next macrotask. When DOM mutations occur inside a synchronous function or microtask, the browser batches those DOM tree changes in memory. Rendering only paints after all microtasks finish, guaranteeing the user only sees the final aggregated DOM state.",
      "Rendering happens after microtasks drain; multiple microtask DOM mutations are painted as a single atomic frame."
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
      "event-loop",
      "rendering",
      "dom",
      "paint"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: async function foo() { console.log(\"foo start\"); await bar(); console.log(\"foo end\"); } async function bar() { console.log(\"bar\"); } console.log(\"script start\"); foo(); console.log(\"script end\");?",
    "answer": "Outputs: \"script start\", \"foo start\", \"bar\", \"script end\", \"foo end\". Synchronous execution logs \"script start\", enters foo() logging \"foo start\", calls bar() logging \"bar\". await pauses foo() and queues continuation as a microtask. \"script end\" logs synchronously. Microtask queue drains and logs \"foo end\".",
    "explanation": "Code before await is synchronous; continuation after await runs as a microtask.",
    "interviewAnswer": "Outputs: \"script start\", \"foo start\", \"bar\", \"script end\", \"foo end\". Synchronous execution logs \"script start\", enters foo() logging \"foo start\", calls bar() logging \"bar\". await pauses foo() and queues continuation as a microtask. \"script end\" logs synchronously. Microtask queue drains and logs \"foo end\". Code before await is synchronous; continuation after await runs as a microtask.",
    "importantPoints": [
      "Outputs: \"script start\", \"foo start\", \"bar\", \"script end\", \"foo end\". Synchronous execution logs \"script start\", enters foo() logging \"foo start\", calls bar() logging \"bar\". await pauses foo() and queues continuation as a microtask. \"script end\" logs synchronously. Microtask queue drains and logs \"foo end\".",
      "Code before await is synchronous; continuation after await runs as a microtask."
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
      "event-loop",
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
    "topicSlug": "event-loop",
    "question": "What is the output of: const p = new Promise(r => { console.log(1); r(); console.log(2); }); p.then(() => console.log(3)); console.log(4);?",
    "answer": "Outputs 1, 2, 4, 3. The Promise executor is synchronous: logs 1, resolves, and logs 2. 4 logs synchronously. Then the .then() microtask callback executes, logging 3.",
    "explanation": "Executor is synchronous; calling resolve does not exit the executor immediately.",
    "interviewAnswer": "Outputs 1, 2, 4, 3. The Promise executor is synchronous: logs 1, resolves, and logs 2. 4 logs synchronously. Then the .then() microtask callback executes, logging 3. Executor is synchronous; calling resolve does not exit the executor immediately.",
    "importantPoints": [
      "Outputs 1, 2, 4, 3. The Promise executor is synchronous: logs 1, resolves, and logs 2. 4 logs synchronously. Then the .then() microtask callback executes, logging 3.",
      "Executor is synchronous; calling resolve does not exit the executor immediately."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "executor",
      "synchronous"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "Why can recursive setTimeout(fn, 0) NOT starve the browser event loop, whereas recursive Promise.resolve().then(fn) DOES?",
    "answer": "Each setTimeout callback is an individual Macrotask. The Event Loop executes ONE macrotask, then drains microtasks, updates the display (paints), and processes user input before picking the next macrotask. In contrast, the microtask queue is drained completely in the CURRENT tick without yielding to rendering or input, starving the event loop.",
    "explanation": "Macrotasks yield to browser rendering and input processing between tasks; microtasks do not yield.",
    "interviewAnswer": "Each setTimeout callback is an individual Macrotask. The Event Loop executes ONE macrotask, then drains microtasks, updates the display (paints), and processes user input before picking the next macrotask. In contrast, the microtask queue is drained completely in the CURRENT tick without yielding to rendering or input, starving the event loop. Macrotasks yield to browser rendering and input processing between tasks; microtasks do not yield.",
    "importantPoints": [
      "Each setTimeout callback is an individual Macrotask. The Event Loop executes ONE macrotask, then drains microtasks, updates the display (paints), and processes user input before picking the next macrotask. In contrast, the microtask queue is drained completely in the CURRENT tick without yielding to rendering or input, starving the event loop.",
      "Macrotasks yield to browser rendering and input processing between tasks; microtasks do not yield."
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
      "event-loop",
      "starvation",
      "timers",
      "rendering"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: queueMicrotask(() => console.log(\"QM1\")); Promise.resolve().then(() => console.log(\"PR1\")); queueMicrotask(() => console.log(\"QM2\"));?",
    "answer": "Outputs QM1, PR1, QM2. Both queueMicrotask and Promise.then enqueue callbacks into the same unified Microtask Queue. They execute in strict FIFO order according to when they were scheduled.",
    "explanation": "queueMicrotask and Promise.then share the same underlying microtask queue.",
    "interviewAnswer": "Outputs QM1, PR1, QM2. Both queueMicrotask and Promise.then enqueue callbacks into the same unified Microtask Queue. They execute in strict FIFO order according to when they were scheduled. queueMicrotask and Promise.then share the same underlying microtask queue.",
    "importantPoints": [
      "Outputs QM1, PR1, QM2. Both queueMicrotask and Promise.then enqueue callbacks into the same unified Microtask Queue. They execute in strict FIFO order according to when they were scheduled.",
      "queueMicrotask and Promise.then share the same underlying microtask queue."
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
      "event-loop",
      "output-prediction",
      "queueMicrotask",
      "microtasks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "How does requestAnimationFrame fit into the Event Loop compared to microtasks and setTimeout?",
    "answer": "requestAnimationFrame callbacks run during the browser \"Update Rendering\" phase of the event loop, strictly BEFORE style calculation, layout, and paint, but AFTER the current macrotask and microtask checkpoint have completed. setTimeout runs in the macrotask queue independently of display refresh timing.",
    "explanation": "Order: Macrotask -> Microtasks -> requestAnimationFrame -> Layout/Paint -> Next Macrotask.",
    "interviewAnswer": "requestAnimationFrame callbacks run during the browser \"Update Rendering\" phase of the event loop, strictly BEFORE style calculation, layout, and paint, but AFTER the current macrotask and microtask checkpoint have completed. setTimeout runs in the macrotask queue independently of display refresh timing. Order: Macrotask -> Microtasks -> requestAnimationFrame -> Layout/Paint -> Next Macrotask.",
    "importantPoints": [
      "requestAnimationFrame callbacks run during the browser \"Update Rendering\" phase of the event loop, strictly BEFORE style calculation, layout, and paint, but AFTER the current macrotask and microtask checkpoint have completed. setTimeout runs in the macrotask queue independently of display refresh timing.",
      "Order: Macrotask -> Microtasks -> requestAnimationFrame -> Layout/Paint -> Next Macrotask."
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
      "event-loop",
      "raf",
      "rendering",
      "spec"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: console.log(\"Start\"); setTimeout(() => console.log(\"Timer\"), 0); requestAnimationFrame(() => console.log(\"rAF\")); Promise.resolve().then(() => console.log(\"Promise\")); console.log(\"End\");?",
    "answer": "Outputs: Start, End, Promise, then rAF or Timer depending on frame timing, but Promise ALWAYS precedes both rAF and Timer. Synchronous logs run first (Start, End). Microtasks drain immediately (Promise). In modern browsers, rAF usually runs before Timer if a frame is being prepared.",
    "explanation": "Microtasks (Promise) strictly precede both rAF and Macrotasks.",
    "interviewAnswer": "Outputs: Start, End, Promise, then rAF or Timer depending on frame timing, but Promise ALWAYS precedes both rAF and Timer. Synchronous logs run first (Start, End). Microtasks drain immediately (Promise). In modern browsers, rAF usually runs before Timer if a frame is being prepared. Microtasks (Promise) strictly precede both rAF and Macrotasks.",
    "importantPoints": [
      "Outputs: Start, End, Promise, then rAF or Timer depending on frame timing, but Promise ALWAYS precedes both rAF and Timer. Synchronous logs run first (Start, End). Microtasks drain immediately (Promise). In modern browsers, rAF usually runs before Timer if a frame is being prepared.",
      "Microtasks (Promise) strictly precede both rAF and Macrotasks."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "raf",
      "microtasks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is a \"Long Task\" according to the W3C Performance specification, and why is 50ms the critical threshold?",
    "answer": "A Long Task is any continuous JavaScript execution on the main thread that takes longer than 50 milliseconds. The 50ms threshold is derived from the RAIL model: users perceive UI response within 100ms as instantaneous. Reserving 50ms for JavaScript execution allows the browser remaining 50ms to process touch events and render a visual response without lag.",
    "explanation": "Tasks >50ms block the event loop, causing dropped frames and high Interaction to Next Paint (INP).",
    "interviewAnswer": "A Long Task is any continuous JavaScript execution on the main thread that takes longer than 50 milliseconds. The 50ms threshold is derived from the RAIL model: users perceive UI response within 100ms as instantaneous. Reserving 50ms for JavaScript execution allows the browser remaining 50ms to process touch events and render a visual response without lag. Tasks >50ms block the event loop, causing dropped frames and high Interaction to Next Paint (INP).",
    "importantPoints": [
      "A Long Task is any continuous JavaScript execution on the main thread that takes longer than 50 milliseconds. The 50ms threshold is derived from the RAIL model: users perceive UI response within 100ms as instantaneous. Reserving 50ms for JavaScript execution allows the browser remaining 50ms to process touch events and render a visual response without lag.",
      "Tasks >50ms block the event loop, causing dropped frames and high Interaction to Next Paint (INP)."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "long-tasks",
      "performance",
      "rail",
      "inp"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: let a = 0; const b = async () => { a = a + await 10; console.log(\"2:\", a); }; b(); a++; console.log(\"1:\", a);?",
    "answer": "Outputs \"1: 1\", then \"2: 10\". In `a = a + await 10`, the left-hand operand `a` is evaluated BEFORE `await 10` is evaluated. At that point, `a` is 0. The await pauses execution. Synchronously, `a++` increments `a` to 1, logging \"1: 1\". When the microtask resumes, it computes `0 + 10 = 10` and assigns 10 to `a`, logging \"2: 10\".",
    "explanation": "Operand evaluation in expressions: the left-hand `a` (0) is captured before the `await` suspends.",
    "interviewAnswer": "Outputs \"1: 1\", then \"2: 10\". In `a = a + await 10`, the left-hand operand `a` is evaluated BEFORE `await 10` is evaluated. At that point, `a` is 0. The await pauses execution. Synchronously, `a++` increments `a` to 1, logging \"1: 1\". When the microtask resumes, it computes `0 + 10 = 10` and assigns 10 to `a`, logging \"2: 10\". Operand evaluation in expressions: the left-hand `a` (0) is captured before the `await` suspends.",
    "importantPoints": [
      "Outputs \"1: 1\", then \"2: 10\". In `a = a + await 10`, the left-hand operand `a` is evaluated BEFORE `await 10` is evaluated. At that point, `a` is 0. The await pauses execution. Synchronously, `a++` increments `a` to 1, logging \"1: 1\". When the microtask resumes, it computes `0 + 10 = 10` and assigns 10 to `a`, logging \"2: 10\".",
      "Operand evaluation in expressions: the left-hand `a` (0) is captured before the `await` suspends."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "async-await",
      "evaluation-order"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "How does the Event Loop handle DOM event dispatch when an event is triggered programmatically via element.click() vs user click?",
    "answer": "When triggered programmatically via el.click(), the event listeners execute SYNCHRONOUSLY as nested frames on the active Call Stack. When triggered by a real user interaction, the browser places the click event into the Macrotask Queue, and each listener runs with a microtask checkpoint between them if bubbling.",
    "explanation": "Programmatic click() runs synchronously on current stack; real user clicks are queued as macrotasks.",
    "interviewAnswer": "When triggered programmatically via el.click(), the event listeners execute SYNCHRONOUSLY as nested frames on the active Call Stack. When triggered by a real user interaction, the browser places the click event into the Macrotask Queue, and each listener runs with a microtask checkpoint between them if bubbling. Programmatic click() runs synchronously on current stack; real user clicks are queued as macrotasks.",
    "importantPoints": [
      "When triggered programmatically via el.click(), the event listeners execute SYNCHRONOUSLY as nested frames on the active Call Stack. When triggered by a real user interaction, the browser places the click event into the Macrotask Queue, and each listener runs with a microtask checkpoint between them if bubbling.",
      "Programmatic click() runs synchronously on current stack; real user clicks are queued as macrotasks."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "dom",
      "events",
      "dispatch"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: btn.addEventListener(\"click\", () => { Promise.resolve().then(() => console.log(\"M1\")); console.log(\"L1\"); }); btn.addEventListener(\"click\", () => { Promise.resolve().then(() => console.log(\"M2\")); console.log(\"L2\"); }); when the user clicks the button?",
    "answer": "Outputs L1, M1, L2, M2. For user events, the Call Stack clears between the two event listener callbacks. Because the stack clears after listener 1, the Event Loop performs a microtask checkpoint, running M1 before invoking listener 2 (L2), followed by M2.",
    "explanation": "User clicks clear the call stack between listeners, draining microtasks after each listener.",
    "interviewAnswer": "Outputs L1, M1, L2, M2. For user events, the Call Stack clears between the two event listener callbacks. Because the stack clears after listener 1, the Event Loop performs a microtask checkpoint, running M1 before invoking listener 2 (L2), followed by M2. User clicks clear the call stack between listeners, draining microtasks after each listener.",
    "importantPoints": [
      "Outputs L1, M1, L2, M2. For user events, the Call Stack clears between the two event listener callbacks. Because the stack clears after listener 1, the Event Loop performs a microtask checkpoint, running M1 before invoking listener 2 (L2), followed by M2.",
      "User clicks clear the call stack between listeners, draining microtasks after each listener."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "dom-events",
      "microtask-checkpoint"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of the previous button listener example when triggered programmatically with btn.click()?",
    "answer": "Outputs L1, L2, M1, M2. btn.click() is synchronous, so both listener functions are pushed onto the Call Stack before btn.click() returns. Because the Call Stack is not empty between the two listeners, microtasks cannot run until both listeners and btn.click() complete.",
    "explanation": "Programmatic click keeps the stack occupied, delaying microtasks until all listeners finish.",
    "interviewAnswer": "Outputs L1, L2, M1, M2. btn.click() is synchronous, so both listener functions are pushed onto the Call Stack before btn.click() returns. Because the Call Stack is not empty between the two listeners, microtasks cannot run until both listeners and btn.click() complete. Programmatic click keeps the stack occupied, delaying microtasks until all listeners finish.",
    "importantPoints": [
      "Outputs L1, L2, M1, M2. btn.click() is synchronous, so both listener functions are pushed onto the Call Stack before btn.click() returns. Because the Call Stack is not empty between the two listeners, microtasks cannot run until both listeners and btn.click() complete.",
      "Programmatic click keeps the stack occupied, delaying microtasks until all listeners finish."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "programmatic-click",
      "gotcha"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: async function fn() { console.log(1); await null; console.log(2); } fn(); console.log(3);?",
    "answer": "Outputs 1, 3, 2. fn() logs 1 synchronously. await null coerces null to Promise.resolve(null) and suspends fn(), enqueuing its continuation as a microtask. 3 logs synchronously. Microtask queue drains, logging 2.",
    "explanation": "await always suspends and queues continuation into the microtask queue.",
    "interviewAnswer": "Outputs 1, 3, 2. fn() logs 1 synchronously. await null coerces null to Promise.resolve(null) and suspends fn(), enqueuing its continuation as a microtask. 3 logs synchronously. Microtask queue drains, logging 2. await always suspends and queues continuation into the microtask queue.",
    "importantPoints": [
      "Outputs 1, 3, 2. fn() logs 1 synchronously. await null coerces null to Promise.resolve(null) and suspends fn(), enqueuing its continuation as a microtask. 3 logs synchronously. Microtask queue drains, logging 2.",
      "await always suspends and queues continuation into the microtask queue."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "async-await"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "How does the browser event loop coordinate multiple tabs or windows from the same origin vs different origins?",
    "answer": "Different origins run in completely independent OS processes with independent Event Loops (Process-per-site). Same-origin tabs opened via window.open() may share the same OS rendering process and event loop (unless Cross-Origin-Opener-Policy or site isolation separates them). If they share an event loop, heavy calculation in one tab freezes the other.",
    "explanation": "Window.open same-origin contexts can share an event loop; rel=\"noopener\" forces process isolation.",
    "interviewAnswer": "Different origins run in completely independent OS processes with independent Event Loops (Process-per-site). Same-origin tabs opened via window.open() may share the same OS rendering process and event loop (unless Cross-Origin-Opener-Policy or site isolation separates them). If they share an event loop, heavy calculation in one tab freezes the other. Window.open same-origin contexts can share an event loop; rel=\"noopener\" forces process isolation.",
    "importantPoints": [
      "Different origins run in completely independent OS processes with independent Event Loops (Process-per-site). Same-origin tabs opened via window.open() may share the same OS rendering process and event loop (unless Cross-Origin-Opener-Policy or site isolation separates them). If they share an event loop, heavy calculation in one tab freezes the other.",
      "Window.open same-origin contexts can share an event loop; rel=\"noopener\" forces process isolation."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "javascript",
      "event-loop",
      "browser-architecture",
      "process-isolation",
      "site-isolation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: Promise.resolve().then(() => console.log(1)); setTimeout(() => console.log(2), 0); Promise.resolve().then(() => console.log(3));?",
    "answer": "Outputs 1, 3, 2. Both Promise .then() callbacks are placed into the microtask queue during the initial synchronous turn. The microtask queue drains completely (1, 3) before the timer macrotask (2) can execute.",
    "explanation": "All pending microtasks drain before the next macrotask.",
    "interviewAnswer": "Outputs 1, 3, 2. Both Promise .then() callbacks are placed into the microtask queue during the initial synchronous turn. The microtask queue drains completely (1, 3) before the timer macrotask (2) can execute. All pending microtasks drain before the next macrotask.",
    "importantPoints": [
      "Outputs 1, 3, 2. Both Promise .then() callbacks are placed into the microtask queue during the initial synchronous turn. The microtask queue drains completely (1, 3) before the timer macrotask (2) can execute.",
      "All pending microtasks drain before the next macrotask."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "microtasks",
      "macrotasks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "How does the Task Attribution API help diagnose which user interaction triggered a Long Task in the Event Loop?",
    "answer": "The Task Attribution API (part of Long Tasks API) provides containerType, containerName, and containerId in PerformanceLongTaskTiming entries. It links long tasks back to specific scripts, iframes, or event listener origins, allowing developers to identify which component or third-party script monopolized the main thread.",
    "explanation": "Provides attribution metadata pointing to the exact source of main thread freezes.",
    "interviewAnswer": "The Task Attribution API (part of Long Tasks API) provides containerType, containerName, and containerId in PerformanceLongTaskTiming entries. It links long tasks back to specific scripts, iframes, or event listener origins, allowing developers to identify which component or third-party script monopolized the main thread. Provides attribution metadata pointing to the exact source of main thread freezes.",
    "importantPoints": [
      "The Task Attribution API (part of Long Tasks API) provides containerType, containerName, and containerId in PerformanceLongTaskTiming entries. It links long tasks back to specific scripts, iframes, or event listener origins, allowing developers to identify which component or third-party script monopolized the main thread.",
      "Provides attribution metadata pointing to the exact source of main thread freezes."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "javascript",
      "event-loop",
      "long-tasks",
      "task-attribution",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); } and how does it relate to the Event Loop?",
    "answer": "Outputs 3, 3, 3. The for loop executes synchronously on the call stack, incrementing i to 3. The three timer callbacks are placed in the macrotask queue. Only after the loop finishes and the stack clears does the Event Loop run the callbacks, which all reference the closed-over var i whose value is 3.",
    "explanation": "Synchronous loop completes before macrotask queue executes callbacks.",
    "interviewAnswer": "Outputs 3, 3, 3. The for loop executes synchronously on the call stack, incrementing i to 3. The three timer callbacks are placed in the macrotask queue. Only after the loop finishes and the stack clears does the Event Loop run the callbacks, which all reference the closed-over var i whose value is 3. Synchronous loop completes before macrotask queue executes callbacks.",
    "importantPoints": [
      "Outputs 3, 3, 3. The for loop executes synchronously on the call stack, incrementing i to 3. The three timer callbacks are placed in the macrotask queue. Only after the loop finishes and the stack clears does the Event Loop run the callbacks, which all reference the closed-over var i whose value is 3.",
      "Synchronous loop completes before macrotask queue executes callbacks."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "closures",
      "timers",
      "var"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of the same loop using let: for (let i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); } and why?",
    "answer": "Outputs 0, 1, 2. With let, a new lexical binding of i is created for each loop iteration. When the macrotask queue callbacks execute on future event loop ticks, each closure references its own distinct block-scoped copy of i.",
    "explanation": "let creates a fresh per-iteration lexical environment captured by the callback closure.",
    "interviewAnswer": "Outputs 0, 1, 2. With let, a new lexical binding of i is created for each loop iteration. When the macrotask queue callbacks execute on future event loop ticks, each closure references its own distinct block-scoped copy of i. let creates a fresh per-iteration lexical environment captured by the callback closure.",
    "importantPoints": [
      "Outputs 0, 1, 2. With let, a new lexical binding of i is created for each loop iteration. When the macrotask queue callbacks execute on future event loop ticks, each closure references its own distinct block-scoped copy of i.",
      "let creates a fresh per-iteration lexical environment captured by the callback closure."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "let",
      "scoping"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: console.log(\"1\"); (async () => { console.log(\"2\"); await null; console.log(\"3\"); })(); console.log(\"4\");?",
    "answer": "Outputs 1, 2, 4, 3. 1 logs. The IIFE executes synchronously up to await, logging 2. await null yields to microtask queue. 4 logs synchronously. Microtask queue drains, logging 3.",
    "explanation": "Async IIFE runs synchronously until the first await keyword.",
    "interviewAnswer": "Outputs 1, 2, 4, 3. 1 logs. The IIFE executes synchronously up to await, logging 2. await null yields to microtask queue. 4 logs synchronously. Microtask queue drains, logging 3. Async IIFE runs synchronously until the first await keyword.",
    "importantPoints": [
      "Outputs 1, 2, 4, 3. 1 logs. The IIFE executes synchronously up to await, logging 2. await null yields to microtask queue. 4 logs synchronously. Microtask queue drains, logging 3.",
      "Async IIFE runs synchronously until the first await keyword."
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
      "event-loop",
      "output-prediction",
      "async-iife"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "How does libuv implement the thread pool in Node.js, and which asynchronous operations use it vs OS non-blocking sockets?",
    "answer": "libuv maintains a default pool of 4 background worker threads (UV_THREADPOOL_SIZE). File system operations (fs.*), DNS lookups (dns.lookup), crypto methods (pbkdf2, randomBytes), and compression (zlib) use the thread pool because OS kernels lack asynchronous file APIs. Network operations (http, net) use kernel non-blocking sockets (epoll, kqueue) and do NOT consume thread pool threads.",
    "explanation": "Network I/O uses OS epoll/kqueue (0 threads); file I/O and crypto use libuv thread pool (4 threads).",
    "interviewAnswer": "libuv maintains a default pool of 4 background worker threads (UV_THREADPOOL_SIZE). File system operations (fs.*), DNS lookups (dns.lookup), crypto methods (pbkdf2, randomBytes), and compression (zlib) use the thread pool because OS kernels lack asynchronous file APIs. Network operations (http, net) use kernel non-blocking sockets (epoll, kqueue) and do NOT consume thread pool threads. Network I/O uses OS epoll/kqueue (0 threads); file I/O and crypto use libuv thread pool (4 threads).",
    "importantPoints": [
      "libuv maintains a default pool of 4 background worker threads (UV_THREADPOOL_SIZE). File system operations (fs.*), DNS lookups (dns.lookup), crypto methods (pbkdf2, randomBytes), and compression (zlib) use the thread pool because OS kernels lack asynchronous file APIs. Network operations (http, net) use kernel non-blocking sockets (epoll, kqueue) and do NOT consume thread pool threads.",
      "Network I/O uses OS epoll/kqueue (0 threads); file I/O and crypto use libuv thread pool (4 threads)."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "javascript",
      "node",
      "libuv",
      "threadpool",
      "architecture"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: Promise.resolve().then(() => { console.log(1); queueMicrotask(() => console.log(2)); }).then(() => console.log(3));?",
    "answer": "Outputs 1, 3, 2 or 1, 2, 3? Let us trace: Handler 1 logs 1, queues microtask 2 to the microtask queue. Then Handler 1 finishes and resolves, queueing Handler 2 (logging 3) behind 2! Therefore: 1, 2, 3.",
    "explanation": "queueMicrotask queues callback 2 first; returning from Handler 1 queues the chained .then callback 3 second.",
    "interviewAnswer": "Outputs 1, 3, 2 or 1, 2, 3? Let us trace: Handler 1 logs 1, queues microtask 2 to the microtask queue. Then Handler 1 finishes and resolves, queueing Handler 2 (logging 3) behind 2! Therefore: 1, 2, 3. queueMicrotask queues callback 2 first; returning from Handler 1 queues the chained .then callback 3 second.",
    "importantPoints": [
      "Outputs 1, 3, 2 or 1, 2, 3? Let us trace: Handler 1 logs 1, queues microtask 2 to the microtask queue. Then Handler 1 finishes and resolves, queueing Handler 2 (logging 3) behind 2! Therefore: 1, 2, 3.",
      "queueMicrotask queues callback 2 first; returning from Handler 1 queues the chained .then callback 3 second."
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
      "event-loop",
      "output-prediction",
      "queueMicrotask",
      "chaining"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "How does the Event Loop handle web animation frame callbacks when a display runs at 120Hz (ProMotion)?",
    "answer": "At 120Hz, the screen refreshes every 8.33 milliseconds (instead of 16.67ms at 60Hz). The browser triggers requestAnimationFrame callbacks at approximately 120 times per second, halving the time budget per frame to ~8ms. JavaScript execution must complete within ~6ms to prevent dropped frames and visual stutter.",
    "explanation": "120Hz displays tighten the per-frame event loop rendering budget to ~8.33ms.",
    "interviewAnswer": "At 120Hz, the screen refreshes every 8.33 milliseconds (instead of 16.67ms at 60Hz). The browser triggers requestAnimationFrame callbacks at approximately 120 times per second, halving the time budget per frame to ~8ms. JavaScript execution must complete within ~6ms to prevent dropped frames and visual stutter. 120Hz displays tighten the per-frame event loop rendering budget to ~8.33ms.",
    "importantPoints": [
      "At 120Hz, the screen refreshes every 8.33 milliseconds (instead of 16.67ms at 60Hz). The browser triggers requestAnimationFrame callbacks at approximately 120 times per second, halving the time budget per frame to ~8ms. JavaScript execution must complete within ~6ms to prevent dropped frames and visual stutter.",
      "120Hz displays tighten the per-frame event loop rendering budget to ~8.33ms."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "javascript",
      "event-loop",
      "raf",
      "120hz",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: setTimeout(() => console.log(\"A\"), 0); setInterval(() => { console.log(\"B\"); clearInterval(this); }, 0);?",
    "answer": "Outputs A then B (or in same macrotask sequence). Both are registered with delay 0ms. setTimeout is queued first, followed by setInterval. When the macrotask queue processes them, A logs, then B logs and clears itself.",
    "explanation": "Timers with identical delays execute in order of registration in the macrotask queue.",
    "interviewAnswer": "Outputs A then B (or in same macrotask sequence). Both are registered with delay 0ms. setTimeout is queued first, followed by setInterval. When the macrotask queue processes them, A logs, then B logs and clears itself. Timers with identical delays execute in order of registration in the macrotask queue.",
    "importantPoints": [
      "Outputs A then B (or in same macrotask sequence). Both are registered with delay 0ms. setTimeout is queued first, followed by setInterval. When the macrotask queue processes them, A logs, then B logs and clears itself.",
      "Timers with identical delays execute in order of registration in the macrotask queue."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "timers",
      "setInterval"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "How does cooperative multitasking using scheduler.postTask() improve priority scheduling in the Event Loop?",
    "answer": "scheduler.postTask(callback, { priority }) is a modern Web API allowing developers to schedule tasks into the browser event loop with explicit priorities: 1) \"user-blocking\" (high priority, e.g. input response), 2) \"user-visible\" (default), and 3) \"background\" (low priority, e.g. analytics). It gives fine-grained control over macrotask scheduling.",
    "explanation": "Standardized browser prioritization API replacing crude setTimeout(0) hacks.",
    "interviewAnswer": "scheduler.postTask(callback, { priority }) is a modern Web API allowing developers to schedule tasks into the browser event loop with explicit priorities: 1) \"user-blocking\" (high priority, e.g. input response), 2) \"user-visible\" (default), and 3) \"background\" (low priority, e.g. analytics). It gives fine-grained control over macrotask scheduling. Standardized browser prioritization API replacing crude setTimeout(0) hacks.",
    "importantPoints": [
      "scheduler.postTask(callback, { priority }) is a modern Web API allowing developers to schedule tasks into the browser event loop with explicit priorities: 1) \"user-blocking\" (high priority, e.g. input response), 2) \"user-visible\" (default), and 3) \"background\" (low priority, e.g. analytics). It gives fine-grained control over macrotask scheduling.",
      "Standardized browser prioritization API replacing crude setTimeout(0) hacks."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "scheduler-postTask",
      "priorities",
      "browser"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: async function m() { console.log(1); await Promise.reject(\"Err\").catch(e => console.log(e)); console.log(2); } m(); console.log(3);?",
    "answer": "Outputs 1, 3, \"Err\", 2. 1 logs. await pauses m(). 3 logs synchronously. The rejected promise is caught by .catch() in the microtask queue, logging \"Err\". Because .catch() handled the error, m() resumes in the next microtask, logging 2.",
    "explanation": "Handled promise rejections resolve normally, allowing execution after await to continue.",
    "interviewAnswer": "Outputs 1, 3, \"Err\", 2. 1 logs. await pauses m(). 3 logs synchronously. The rejected promise is caught by .catch() in the microtask queue, logging \"Err\". Because .catch() handled the error, m() resumes in the next microtask, logging 2. Handled promise rejections resolve normally, allowing execution after await to continue.",
    "importantPoints": [
      "Outputs 1, 3, \"Err\", 2. 1 logs. await pauses m(). 3 logs synchronously. The rejected promise is caught by .catch() in the microtask queue, logging \"Err\". Because .catch() handled the error, m() resumes in the next microtask, logging 2.",
      "Handled promise rejections resolve normally, allowing execution after await to continue."
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
      "event-loop",
      "output-prediction",
      "async-await",
      "catch"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "Why does Node.js process.exit() immediately stop the Event Loop, and how do you perform graceful shutdowns?",
    "answer": "process.exit() causes Node.js to terminate the process immediately: active timers, pending callbacks, open sockets, and microtasks are instantly aborted. For graceful shutdowns: 1) stop accepting new requests (server.close()), 2) close active database connections, 3) wait for in-flight requests to complete with a timeout guard, and 4) call process.exit(0) only when clean.",
    "explanation": "process.exit() forces immediate termination; graceful shutdown drains pending I/O cleanly.",
    "interviewAnswer": "process.exit() causes Node.js to terminate the process immediately: active timers, pending callbacks, open sockets, and microtasks are instantly aborted. For graceful shutdowns: 1) stop accepting new requests (server.close()), 2) close active database connections, 3) wait for in-flight requests to complete with a timeout guard, and 4) call process.exit(0) only when clean. process.exit() forces immediate termination; graceful shutdown drains pending I/O cleanly.",
    "importantPoints": [
      "process.exit() causes Node.js to terminate the process immediately: active timers, pending callbacks, open sockets, and microtasks are instantly aborted. For graceful shutdowns: 1) stop accepting new requests (server.close()), 2) close active database connections, 3) wait for in-flight requests to complete with a timeout guard, and 4) call process.exit(0) only when clean.",
      "process.exit() forces immediate termination; graceful shutdown drains pending I/O cleanly."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "javascript",
      "node",
      "graceful-shutdown",
      "process-exit",
      "event-loop"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: console.log(1); setTimeout(() => console.log(2), 50); setTimeout(() => console.log(3), 10); const start = Date.now(); while (Date.now() - start < 100) {} console.log(4);?",
    "answer": "Outputs 1, 4, 3, 2. 1 logs. Both timers are registered (50ms and 10ms). The synchronous while loop blocks the call stack for 100ms, during which BOTH timers expire. 4 logs synchronously. When the stack clears, the 10ms timer (3) is ahead of the 50ms timer (2) in the macrotask queue, logging 3 then 2.",
    "explanation": "Timers expiring while main thread is blocked execute in order of scheduled expiration timestamps.",
    "interviewAnswer": "Outputs 1, 4, 3, 2. 1 logs. Both timers are registered (50ms and 10ms). The synchronous while loop blocks the call stack for 100ms, during which BOTH timers expire. 4 logs synchronously. When the stack clears, the 10ms timer (3) is ahead of the 50ms timer (2) in the macrotask queue, logging 3 then 2. Timers expiring while main thread is blocked execute in order of scheduled expiration timestamps.",
    "importantPoints": [
      "Outputs 1, 4, 3, 2. 1 logs. Both timers are registered (50ms and 10ms). The synchronous while loop blocks the call stack for 100ms, during which BOTH timers expire. 4 logs synchronously. When the stack clears, the 10ms timer (3) is ahead of the 50ms timer (2) in the macrotask queue, logging 3 then 2.",
      "Timers expiring while main thread is blocked execute in order of scheduled expiration timestamps."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "blocking",
      "timer-ordering"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What role does the Host Environment play in executing the Microtask Checkpoint?",
    "answer": "The ECMAScript specification defines Jobs and the Job Queue (microtasks), but leaves the Event Loop and task scheduling to the Host Environment (HTML spec for browsers, libuv for Node.js). The host must trigger the \"Clean up after running script\" algorithm, which performs the Microtask Checkpoint whenever the JavaScript execution context stack becomes empty.",
    "explanation": "ECMAScript specifies Job Queues; HTML5 and libuv specify the Event Loop driving them.",
    "interviewAnswer": "The ECMAScript specification defines Jobs and the Job Queue (microtasks), but leaves the Event Loop and task scheduling to the Host Environment (HTML spec for browsers, libuv for Node.js). The host must trigger the \"Clean up after running script\" algorithm, which performs the Microtask Checkpoint whenever the JavaScript execution context stack becomes empty. ECMAScript specifies Job Queues; HTML5 and libuv specify the Event Loop driving them.",
    "importantPoints": [
      "The ECMAScript specification defines Jobs and the Job Queue (microtasks), but leaves the Event Loop and task scheduling to the Host Environment (HTML spec for browsers, libuv for Node.js). The host must trigger the \"Clean up after running script\" algorithm, which performs the Microtask Checkpoint whenever the JavaScript execution context stack becomes empty.",
      "ECMAScript specifies Job Queues; HTML5 and libuv specify the Event Loop driving them."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "event-loop",
      "ecmascript-spec",
      "host-environment"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: Promise.resolve().then(() => console.log(1)); queueMicrotask(() => { console.log(2); Promise.resolve().then(() => console.log(3)); }); Promise.resolve().then(() => console.log(4));?",
    "answer": "Outputs 1, 2, 4, 3. Microtask queue initially has [1, 2, 4]. 1 logs. 2 logs and appends 3 to the end of the microtask queue: [4, 3]. 4 logs. 3 logs.",
    "explanation": "Newly scheduled microtasks append to the end of the currently draining microtask queue.",
    "interviewAnswer": "Outputs 1, 2, 4, 3. Microtask queue initially has [1, 2, 4]. 1 logs. 2 logs and appends 3 to the end of the microtask queue: [4, 3]. 4 logs. 3 logs. Newly scheduled microtasks append to the end of the currently draining microtask queue.",
    "importantPoints": [
      "Outputs 1, 2, 4, 3. Microtask queue initially has [1, 2, 4]. 1 logs. 2 logs and appends 3 to the end of the microtask queue: [4, 3]. 4 logs. 3 logs.",
      "Newly scheduled microtasks append to the end of the currently draining microtask queue."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "microtask-queue",
      "ordering"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "How does the MutationObserver microtask batching prevent layout thrashing in complex DOM updates?",
    "answer": "If a script performs 500 DOM attribute modifications in a loop, standard events would fire 500 synchronous callbacks. MutationObserver batches all 500 mutations into a single array passed to ONE microtask callback at the end of the script, allowing the browser to recalculate styles and layout once before painting.",
    "explanation": "Batching DOM mutations into a single microtask prevents 500 redundant layout reflows.",
    "interviewAnswer": "If a script performs 500 DOM attribute modifications in a loop, standard events would fire 500 synchronous callbacks. MutationObserver batches all 500 mutations into a single array passed to ONE microtask callback at the end of the script, allowing the browser to recalculate styles and layout once before painting. Batching DOM mutations into a single microtask prevents 500 redundant layout reflows.",
    "importantPoints": [
      "If a script performs 500 DOM attribute modifications in a loop, standard events would fire 500 synchronous callbacks. MutationObserver batches all 500 mutations into a single array passed to ONE microtask callback at the end of the script, allowing the browser to recalculate styles and layout once before painting.",
      "Batching DOM mutations into a single microtask prevents 500 redundant layout reflows."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "mutation-observer",
      "layout-thrashing",
      "batching"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: async function x() { console.log(\"A\"); await y(); console.log(\"B\"); } async function y() { console.log(\"C\"); await z(); console.log(\"D\"); } async function z() { console.log(\"E\"); } x(); console.log(\"F\");?",
    "answer": "Outputs A, C, E, F, D, B. x() logs A, calls y() which logs C, calls z() which logs E. await z() pauses y() and queues D. x() pauses at await y(). F logs synchronously. In microtask queue: D logs, which resolves y(), allowing x() to resume and log B.",
    "explanation": "Nested awaits unwind through successive microtask turns in reverse call depth.",
    "interviewAnswer": "Outputs A, C, E, F, D, B. x() logs A, calls y() which logs C, calls z() which logs E. await z() pauses y() and queues D. x() pauses at await y(). F logs synchronously. In microtask queue: D logs, which resolves y(), allowing x() to resume and log B. Nested awaits unwind through successive microtask turns in reverse call depth.",
    "importantPoints": [
      "Outputs A, C, E, F, D, B. x() logs A, calls y() which logs C, calls z() which logs E. await z() pauses y() and queues D. x() pauses at await y(). F logs synchronously. In microtask queue: D logs, which resolves y(), allowing x() to resume and log B.",
      "Nested awaits unwind through successive microtask turns in reverse call depth."
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
      "event-loop",
      "output-prediction",
      "nested-await",
      "microtasks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "Why are microtasks executed before requestAnimationFrame in the browser event loop?",
    "answer": "Microtasks are intended to settle asynchronous state transitions immediately following a script. Because rendering and animations must display the updated application state, the browser specification mandates running the microtask checkpoint before requestAnimationFrame and paint, guaranteeing components have rendered their latest state.",
    "explanation": "Ensures state updates are settled before the browser computes visual layout and paints.",
    "interviewAnswer": "Microtasks are intended to settle asynchronous state transitions immediately following a script. Because rendering and animations must display the updated application state, the browser specification mandates running the microtask checkpoint before requestAnimationFrame and paint, guaranteeing components have rendered their latest state. Ensures state updates are settled before the browser computes visual layout and paints.",
    "importantPoints": [
      "Microtasks are intended to settle asynchronous state transitions immediately following a script. Because rendering and animations must display the updated application state, the browser specification mandates running the microtask checkpoint before requestAnimationFrame and paint, guaranteeing components have rendered their latest state.",
      "Ensures state updates are settled before the browser computes visual layout and paints."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "event-loop",
      "microtasks",
      "raf",
      "spec"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: console.log(1); setTimeout(() => console.log(2), 0); Promise.all([Promise.resolve(3), Promise.resolve(4)]).then(res => console.log(res)); console.log(5);?",
    "answer": "Outputs 1, 5, [3, 4], 2. 1 and 5 log synchronously. Promise.all resolves in the microtask queue, logging [3, 4]. Finally, the macrotask queue executes setTimeout, logging 2.",
    "explanation": "Promise.all handlers run as microtasks ahead of timers.",
    "interviewAnswer": "Outputs 1, 5, [3, 4], 2. 1 and 5 log synchronously. Promise.all resolves in the microtask queue, logging [3, 4]. Finally, the macrotask queue executes setTimeout, logging 2. Promise.all handlers run as microtasks ahead of timers.",
    "importantPoints": [
      "Outputs 1, 5, [3, 4], 2. 1 and 5 log synchronously. Promise.all resolves in the microtask queue, logging [3, 4]. Finally, the macrotask queue executes setTimeout, logging 2.",
      "Promise.all handlers run as microtasks ahead of timers."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "promise-all",
      "timers"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "How does Node.js unref() and ref() methods on timers and sockets influence the Event Loop lifecycle?",
    "answer": "By default, active timers or sockets keep the Node.js Event Loop alive (refed). Calling timer.unref() instructs libuv not to keep the process running if this timer is the only remaining work in the event loop. Calling timer.ref() restores the keep-alive behavior.",
    "explanation": "unref() allows Node.js to exit gracefully without waiting for background polling timers.",
    "interviewAnswer": "By default, active timers or sockets keep the Node.js Event Loop alive (refed). Calling timer.unref() instructs libuv not to keep the process running if this timer is the only remaining work in the event loop. Calling timer.ref() restores the keep-alive behavior. unref() allows Node.js to exit gracefully without waiting for background polling timers.",
    "importantPoints": [
      "By default, active timers or sockets keep the Node.js Event Loop alive (refed). Calling timer.unref() instructs libuv not to keep the process running if this timer is the only remaining work in the event loop. Calling timer.ref() restores the keep-alive behavior.",
      "unref() allows Node.js to exit gracefully without waiting for background polling timers."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "node",
      "unref",
      "ref",
      "event-loop"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: async function one() { console.log(1); } async function two() { console.log(2); await one(); console.log(3); } two(); console.log(4);?",
    "answer": "Outputs 2, 1, 4, 3. two() runs synchronously, logging 2. one() runs synchronously, logging 1 and returning a resolved promise. await pauses two() and queues 3 in the microtask queue. 4 logs synchronously. Microtask queue drains, logging 3.",
    "explanation": "Async function bodies run synchronously until the first pause at await.",
    "interviewAnswer": "Outputs 2, 1, 4, 3. two() runs synchronously, logging 2. one() runs synchronously, logging 1 and returning a resolved promise. await pauses two() and queues 3 in the microtask queue. 4 logs synchronously. Microtask queue drains, logging 3. Async function bodies run synchronously until the first pause at await.",
    "importantPoints": [
      "Outputs 2, 1, 4, 3. two() runs synchronously, logging 2. one() runs synchronously, logging 1 and returning a resolved promise. await pauses two() and queues 3 in the microtask queue. 4 logs synchronously. Microtask queue drains, logging 3.",
      "Async function bodies run synchronously until the first pause at await."
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
      "event-loop",
      "output-prediction",
      "async-await"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "How does the Event Loop handle Web Worker message passing compared to DOM events?",
    "answer": "Messages received from Web Workers via worker.onmessage are delivered as Macrotasks. When worker.postMessage sends data, the browser background thread serializes data and posts a task to the parent thread macrotask queue, executing when the main thread call stack and microtasks are clear.",
    "explanation": "Worker onmessage callbacks are queued as macrotasks in the main thread event loop.",
    "interviewAnswer": "Messages received from Web Workers via worker.onmessage are delivered as Macrotasks. When worker.postMessage sends data, the browser background thread serializes data and posts a task to the parent thread macrotask queue, executing when the main thread call stack and microtasks are clear. Worker onmessage callbacks are queued as macrotasks in the main thread event loop.",
    "importantPoints": [
      "Messages received from Web Workers via worker.onmessage are delivered as Macrotasks. When worker.postMessage sends data, the browser background thread serializes data and posts a task to the parent thread macrotask queue, executing when the main thread call stack and microtasks are clear.",
      "Worker onmessage callbacks are queued as macrotasks in the main thread event loop."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "event-loop",
      "web-workers",
      "macrotasks",
      "postMessage"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: console.log(\"A\"); queueMicrotask(() => { console.log(\"B\"); queueMicrotask(() => console.log(\"C\")); }); console.log(\"D\");?",
    "answer": "Outputs A, D, B, C. A and D log synchronously. The first microtask logs B and queues C into the active microtask queue. The microtask loop continues draining until empty, logging C before any other task can start.",
    "explanation": "Draining the microtask queue processes all recursively queued microtasks.",
    "interviewAnswer": "Outputs A, D, B, C. A and D log synchronously. The first microtask logs B and queues C into the active microtask queue. The microtask loop continues draining until empty, logging C before any other task can start. Draining the microtask queue processes all recursively queued microtasks.",
    "importantPoints": [
      "Outputs A, D, B, C. A and D log synchronously. The first microtask logs B and queues C into the active microtask queue. The microtask loop continues draining until empty, logging C before any other task can start.",
      "Draining the microtask queue processes all recursively queued microtasks."
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
      "event-loop",
      "output-prediction",
      "queueMicrotask",
      "recursion"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the difference between synchronous XMLHttpRequest and asynchronous Fetch in relation to the Event Loop?",
    "answer": "Synchronous XHR (xhr.open(..., false)) locks the Call Stack and freezes the entire Event Loop, preventing user input, scrolling, timers, and rendering until the network request completes. Asynchronous fetch offloads network I/O to background OS threads, popping off the call stack immediately and delivering the response via the microtask queue.",
    "explanation": "Synchronous XHR blocks the event loop thread; asynchronous fetch yields to the event loop.",
    "interviewAnswer": "Synchronous XHR (xhr.open(..., false)) locks the Call Stack and freezes the entire Event Loop, preventing user input, scrolling, timers, and rendering until the network request completes. Asynchronous fetch offloads network I/O to background OS threads, popping off the call stack immediately and delivering the response via the microtask queue. Synchronous XHR blocks the event loop thread; asynchronous fetch yields to the event loop.",
    "importantPoints": [
      "Synchronous XHR (xhr.open(..., false)) locks the Call Stack and freezes the entire Event Loop, preventing user input, scrolling, timers, and rendering until the network request completes. Asynchronous fetch offloads network I/O to background OS threads, popping off the call stack immediately and delivering the response via the microtask queue.",
      "Synchronous XHR blocks the event loop thread; asynchronous fetch yields to the event loop."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "event-loop",
      "xhr",
      "fetch",
      "blocking"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: const p = Promise.resolve(); p.then(() => console.log(1)); p.then(() => console.log(2)); setTimeout(() => console.log(3), 0);?",
    "answer": "Outputs 1, 2, 3. Microtasks attached to the resolved promise p are queued and executed in FIFO order (1 then 2) before the setTimeout macrotask (3).",
    "explanation": "Multiple listeners on a resolved promise execute in attachment order during microtask drain.",
    "interviewAnswer": "Outputs 1, 2, 3. Microtasks attached to the resolved promise p are queued and executed in FIFO order (1 then 2) before the setTimeout macrotask (3). Multiple listeners on a resolved promise execute in attachment order during microtask drain.",
    "importantPoints": [
      "Outputs 1, 2, 3. Microtasks attached to the resolved promise p are queued and executed in FIFO order (1 then 2) before the setTimeout macrotask (3).",
      "Multiple listeners on a resolved promise execute in attachment order during microtask drain."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "microtasks",
      "fifo"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "How does Interaction to Next Paint (INP) measure Event Loop responsiveness?",
    "answer": "INP measures user interaction latency across three phases: 1) Input Delay (waiting for the Event Loop to finish active long tasks and pick up the event), 2) Processing Time (running event listener JavaScript), and 3) Presentation Delay (waiting for style calculation, layout, and compositing before painting the next frame).",
    "explanation": "INP is dominated by Input Delay when the Event Loop is blocked by Long Tasks.",
    "interviewAnswer": "INP measures user interaction latency across three phases: 1) Input Delay (waiting for the Event Loop to finish active long tasks and pick up the event), 2) Processing Time (running event listener JavaScript), and 3) Presentation Delay (waiting for style calculation, layout, and compositing before painting the next frame). INP is dominated by Input Delay when the Event Loop is blocked by Long Tasks.",
    "importantPoints": [
      "INP measures user interaction latency across three phases: 1) Input Delay (waiting for the Event Loop to finish active long tasks and pick up the event), 2) Processing Time (running event listener JavaScript), and 3) Presentation Delay (waiting for style calculation, layout, and compositing before painting the next frame).",
      "INP is dominated by Input Delay when the Event Loop is blocked by Long Tasks."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "inp",
      "core-web-vitals",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: async function fn() { return 10; } fn().then(v => console.log(v)); console.log(20);?",
    "answer": "Outputs 20 then 10. Calling fn() synchronously returns a fulfilled Promise with value 10. The .then() callback is placed into the microtask queue. 20 logs synchronously. The microtask queue drains and logs 10.",
    "explanation": "Even pre-resolved or immediately returned async values invoke .then() asynchronously.",
    "interviewAnswer": "Outputs 20 then 10. Calling fn() synchronously returns a fulfilled Promise with value 10. The .then() callback is placed into the microtask queue. 20 logs synchronously. The microtask queue drains and logs 10. Even pre-resolved or immediately returned async values invoke .then() asynchronously.",
    "importantPoints": [
      "Outputs 20 then 10. Calling fn() synchronously returns a fulfilled Promise with value 10. The .then() callback is placed into the microtask queue. 20 logs synchronously. The microtask queue drains and logs 10.",
      "Even pre-resolved or immediately returned async values invoke .then() asynchronously."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
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
    "topicSlug": "event-loop",
    "question": "How do you break up a long-running synchronous computation to prevent event loop blocking without external libraries?",
    "answer": "Wrap iterations in a chunk processor that records start time with performance.now(). When elapsed time exceeds ~10ms, pause and schedule the next iteration using setTimeout(step, 0) or await new Promise(r => setTimeout(r, 0)). This yields the call stack back to the Event Loop, allowing input processing and UI repaints.",
    "explanation": "Cooperative time-slicing via setTimeout yields control to the event loop every 10ms.",
    "interviewAnswer": "Wrap iterations in a chunk processor that records start time with performance.now(). When elapsed time exceeds ~10ms, pause and schedule the next iteration using setTimeout(step, 0) or await new Promise(r => setTimeout(r, 0)). This yields the call stack back to the Event Loop, allowing input processing and UI repaints. Cooperative time-slicing via setTimeout yields control to the event loop every 10ms.",
    "importantPoints": [
      "Wrap iterations in a chunk processor that records start time with performance.now(). When elapsed time exceeds ~10ms, pause and schedule the next iteration using setTimeout(step, 0) or await new Promise(r => setTimeout(r, 0)). This yields the call stack back to the Event Loop, allowing input processing and UI repaints.",
      "Cooperative time-slicing via setTimeout yields control to the event loop every 10ms."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "time-slicing",
      "coding",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "What is the output of: console.log(\"A\"); Promise.resolve().then(() => console.log(\"B\")); setTimeout(() => console.log(\"C\"), 0); Promise.resolve().then(() => console.log(\"D\")); console.log(\"E\");?",
    "answer": "Outputs A, E, B, D, C. Synchronous code logs A and E. Microtasks B and D execute in FIFO order during the microtask checkpoint. Macrotask C executes last.",
    "explanation": "Classic event loop execution order: Sync -> All Microtasks -> Oldest Macrotask.",
    "interviewAnswer": "Outputs A, E, B, D, C. Synchronous code logs A and E. Microtasks B and D execute in FIFO order during the microtask checkpoint. Macrotask C executes last. Classic event loop execution order: Sync -> All Microtasks -> Oldest Macrotask.",
    "importantPoints": [
      "Outputs A, E, B, D, C. Synchronous code logs A and E. Microtasks B and D execute in FIFO order during the microtask checkpoint. Macrotask C executes last.",
      "Classic event loop execution order: Sync -> All Microtasks -> Oldest Macrotask."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "event-loop",
      "output-prediction",
      "fundamentals"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "event-loop",
    "question": "How does the Event Loop handle WebAssembly (WASM) execution compared to JavaScript execution?",
    "answer": "WebAssembly executes synchronously on the exact same Call Stack and thread as JavaScript. Compiling or instantiating WebAssembly asynchronously (WebAssembly.instantiateStreaming) runs compilation in the background and returns a Promise, but executing an exported WASM function blocks the Call Stack and Event Loop just like standard synchronous JS.",
    "explanation": "WASM function calls run synchronously on the main thread call stack; heavy WASM must run in a Worker.",
    "interviewAnswer": "WebAssembly executes synchronously on the exact same Call Stack and thread as JavaScript. Compiling or instantiating WebAssembly asynchronously (WebAssembly.instantiateStreaming) runs compilation in the background and returns a Promise, but executing an exported WASM function blocks the Call Stack and Event Loop just like standard synchronous JS. WASM function calls run synchronously on the main thread call stack; heavy WASM must run in a Worker.",
    "importantPoints": [
      "WebAssembly executes synchronously on the exact same Call Stack and thread as JavaScript. Compiling or instantiating WebAssembly asynchronously (WebAssembly.instantiateStreaming) runs compilation in the background and returns a Promise, but executing an exported WASM function blocks the Call Stack and Event Loop just like standard synchronous JS.",
      "WASM function calls run synchronously on the main thread call stack; heavy WASM must run in a Worker."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "event-loop",
      "webassembly",
      "wasm",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
