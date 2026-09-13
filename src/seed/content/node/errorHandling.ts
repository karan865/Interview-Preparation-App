import { SeedQuestion } from '../types';

export const nodeErrorHandlingQuestions: SeedQuestion[] = [
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the fundamental difference between Operational Errors and Programmer Errors in Node.js?",
    "answer": "Operational Errors are expected runtime failures in a healthy application (e.g. database connection timeout, invalid user input, file not found ENOENT, socket reset ECONNRESET); they should be caught, handled gracefully, and reported. Programmer Errors are actual software bugs (e.g. TypeError reading undefined, syntax errors, passing wrong argument types); they are unexpected, leave the process in an undefined state, and should crash the process to restart clean.",
    "explanation": "Operational errors are expected and recoverable; programmer errors are bugs requiring process restart.",
    "interviewAnswer": "Operational Errors are expected runtime failures in a healthy application (e.g. database connection timeout, invalid user input, file not found ENOENT, socket reset ECONNRESET); they should be caught, handled gracefully, and reported. Programmer Errors are actual software bugs (e.g. TypeError reading undefined, syntax errors, passing wrong argument types); they are unexpected, leave the process in an undefined state, and should crash the process to restart clean. Operational errors are expected and recoverable; programmer errors are bugs requiring process restart.",
    "importantPoints": [
      "Operational Errors are expected runtime failures in a healthy application (e.g. database connection timeout, invalid user input, file not found ENOENT, socket reset ECONNRESET); they should be caught, handled gracefully, and reported. Programmer Errors are actual software bugs (e.g. TypeError reading undefined, syntax errors, passing wrong argument types); they are unexpected, leave the process in an undefined state, and should crash the process to restart clean.",
      "Operational errors are expected and recoverable; programmer errors are bugs requiring process restart."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "error-handling",
      "operational-errors",
      "programmer-errors",
      "architecture"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "Your Node.js service occasionally crashes because of an unhandled asynchronous error. How would you redesign error handling?",
    "answer": "1) Convert all callbacks to Promises/async-await and use express-async-errors or native async route error forwarding to a centralized error middleware. 2) Always register `error` listeners on every Stream and EventEmitter instance. 3) Log global failures via `process.on(\"unhandledRejection\")` and `process.on(\"uncaughtException\")`. 4) In `uncaughtException`, log the stack trace, flush logs, close server gracefully, and exit with code 1 (`process.exit(1)`) while letting a process manager (PM2/Kubernetes) spin up a fresh healthy pod.",
    "explanation": "Centralized async route handlers + EventEmitter error listeners + fail-fast crash-restart architecture.",
    "interviewAnswer": "1) Convert all callbacks to Promises/async-await and use express-async-errors or native async route error forwarding to a centralized error middleware. 2) Always register `error` listeners on every Stream and EventEmitter instance. 3) Log global failures via `process.on(\"unhandledRejection\")` and `process.on(\"uncaughtException\")`. 4) In `uncaughtException`, log the stack trace, flush logs, close server gracefully, and exit with code 1 (`process.exit(1)`) while letting a process manager (PM2/Kubernetes) spin up a fresh healthy pod. Centralized async route handlers + EventEmitter error listeners + fail-fast crash-restart architecture.",
    "importantPoints": [
      "1) Convert all callbacks to Promises/async-await and use express-async-errors or native async route error forwarding to a centralized error middleware. 2) Always register `error` listeners on every Stream and EventEmitter instance. 3) Log global failures via `process.on(\"unhandledRejection\")` and `process.on(\"uncaughtException\")`. 4) In `uncaughtException`, log the stack trace, flush logs, close server gracefully, and exit with code 1 (`process.exit(1)`) while letting a process manager (PM2/Kubernetes) spin up a fresh healthy pod.",
      "Centralized async route handlers + EventEmitter error listeners + fail-fast crash-restart architecture."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Logical / Scenario-Based",
    "isImportant": true,
    "tags": [
      "nodejs",
      "error-handling",
      "unhandled-error",
      "crash",
      "production-scenario"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "Why should a Node.js process ALWAYS exit (restart) after encountering an `uncaughtException`?",
    "answer": "By definition, an `uncaughtException` means a software bug occurred where the application did not anticipate it. The JavaScript runtime is now in an undefined, corrupted state: database connections may be dangling, memory may be leaked, locks may be held, and closures may have inconsistent state. Continuing execution will cause unpredictable silent bugs and data corruption. Crash and restart clean.",
    "explanation": "Uncaught exceptions leave the process in an unpredictable corrupted state; restart is mandatory.",
    "interviewAnswer": "By definition, an `uncaughtException` means a software bug occurred where the application did not anticipate it. The JavaScript runtime is now in an undefined, corrupted state: database connections may be dangling, memory may be leaked, locks may be held, and closures may have inconsistent state. Continuing execution will cause unpredictable silent bugs and data corruption. Crash and restart clean. Uncaught exceptions leave the process in an unpredictable corrupted state; restart is mandatory.",
    "importantPoints": [
      "By definition, an `uncaughtException` means a software bug occurred where the application did not anticipate it. The JavaScript runtime is now in an undefined, corrupted state: database connections may be dangling, memory may be leaked, locks may be held, and closures may have inconsistent state. Continuing execution will cause unpredictable silent bugs and data corruption. Crash and restart clean.",
      "Uncaught exceptions leave the process in an unpredictable corrupted state; restart is mandatory."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "uncaughtException",
      "process-exit",
      "fail-fast",
      "reliability"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "How does modern Node.js (v15+) handle `unhandledRejection` by default compared to older versions?",
    "answer": "In older versions (Node 12 and below), unhandled Promise rejections only logged a deprecation warning and allowed the process to continue running. In Node.js 15+, unhandled rejections terminate the process with a non-zero exit code (`--unhandled-rejections=throw`) by default, treating unhandled rejections as fatal crashes just like `uncaughtException`.",
    "explanation": "Modern Node.js crashes the process on unhandled promise rejections by default.",
    "interviewAnswer": "In older versions (Node 12 and below), unhandled Promise rejections only logged a deprecation warning and allowed the process to continue running. In Node.js 15+, unhandled rejections terminate the process with a non-zero exit code (`--unhandled-rejections=throw`) by default, treating unhandled rejections as fatal crashes just like `uncaughtException`. Modern Node.js crashes the process on unhandled promise rejections by default.",
    "importantPoints": [
      "In older versions (Node 12 and below), unhandled Promise rejections only logged a deprecation warning and allowed the process to continue running. In Node.js 15+, unhandled rejections terminate the process with a non-zero exit code (`--unhandled-rejections=throw`) by default, treating unhandled rejections as fatal crashes just like `uncaughtException`.",
      "Modern Node.js crashes the process on unhandled promise rejections by default."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "unhandledRejection",
      "promises",
      "error-handling",
      "node15"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is Error.captureStackTrace(), and how do you use it in custom Error classes?",
    "answer": "`Error.captureStackTrace(targetObject, constructorOpt)` is a V8-specific method that attaches a `.stack` property to `targetObject`. Passing `constructorOpt` omits the constructor function itself from the stack trace, keeping the trace clean and focused on where the custom error was actually instantiated.",
    "explanation": "Omits internal custom error constructor frames from the user-facing stack trace.",
    "interviewAnswer": "`Error.captureStackTrace(targetObject, constructorOpt)` is a V8-specific method that attaches a `.stack` property to `targetObject`. Passing `constructorOpt` omits the constructor function itself from the stack trace, keeping the trace clean and focused on where the custom error was actually instantiated. Omits internal custom error constructor frames from the user-facing stack trace.",
    "importantPoints": [
      "`Error.captureStackTrace(targetObject, constructorOpt)` is a V8-specific method that attaches a `.stack` property to `targetObject`. Passing `constructorOpt` omits the constructor function itself from the stack trace, keeping the trace clean and focused on where the custom error was actually instantiated.",
      "Omits internal custom error constructor frames from the user-facing stack trace."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "custom-errors",
      "captureStackTrace",
      "v8"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "Implement a production-grade Custom Application Error class in Node.js supporting HTTP status codes and operational flags.",
    "answer": "class AppError extends Error { constructor(message, statusCode = 500, isOperational = true) { super(message); this.statusCode = statusCode; this.status = `${statusCode}`.startsWith(\"4\") ? \"fail\" : \"error\"; this.isOperational = isOperational; Error.captureStackTrace(this, this.constructor); } }",
    "explanation": "Standard custom error class distinguishing operational client/server errors from bugs.",
    "interviewAnswer": "class AppError extends Error { constructor(message, statusCode = 500, isOperational = true) { super(message); this.statusCode = statusCode; this.status = `${statusCode}`.startsWith(\"4\") ? \"fail\" : \"error\"; this.isOperational = isOperational; Error.captureStackTrace(this, this.constructor); } } Standard custom error class distinguishing operational client/server errors from bugs.",
    "importantPoints": [
      "class AppError extends Error { constructor(message, statusCode = 500, isOperational = true) { super(message); this.statusCode = statusCode; this.status = `${statusCode}`.startsWith(\"4\") ? \"fail\" : \"error\"; this.isOperational = isOperational; Error.captureStackTrace(this, this.constructor); } }",
      "Standard custom error class distinguishing operational client/server errors from bugs."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "nodejs",
      "custom-error",
      "coding",
      "oop"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What are common Node.js System Error codes (ENOENT, EADDRINUSE, ECONNRESET, ETIMEDOUT, EACCES), and what does each mean?",
    "answer": "1) ENOENT: Error No Entity (file or directory does not exist). 2) EADDRINUSE: Address already in use (port is bound by another process). 3) ECONNRESET: Connection reset by peer (remote socket closed abruptly). 4) ETIMEDOUT: Operation or connection timed out. 5) EACCES: Permission denied (e.g. binding port <1024 without root).",
    "explanation": "Standard POSIX error codes emitted by libuv and Node.js network/filesystem layers.",
    "interviewAnswer": "1) ENOENT: Error No Entity (file or directory does not exist). 2) EADDRINUSE: Address already in use (port is bound by another process). 3) ECONNRESET: Connection reset by peer (remote socket closed abruptly). 4) ETIMEDOUT: Operation or connection timed out. 5) EACCES: Permission denied (e.g. binding port <1024 without root). Standard POSIX error codes emitted by libuv and Node.js network/filesystem layers.",
    "importantPoints": [
      "1) ENOENT: Error No Entity (file or directory does not exist). 2) EADDRINUSE: Address already in use (port is bound by another process). 3) ECONNRESET: Connection reset by peer (remote socket closed abruptly). 4) ETIMEDOUT: Operation or connection timed out. 5) EACCES: Permission denied (e.g. binding port <1024 without root).",
      "Standard POSIX error codes emitted by libuv and Node.js network/filesystem layers."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "system-errors",
      "enoent",
      "eaddrinuse",
      "econnreset"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "Why was the Node.js `domain` module deprecated, and what replaced it?",
    "answer": "The `domain` module was deprecated because it attempted to intercept asynchronous errors across execution boundaries using monkey-patched event emitters and timers, but routinely left application resources in an inconsistent, leaking state. It was replaced by `AsyncLocalStorage` (from `async_hooks`) for context propagation, and standard Promise/async-await error handling.",
    "explanation": "Domains proved impossible to make safe; replaced by AsyncLocalStorage and modern Promises.",
    "interviewAnswer": "The `domain` module was deprecated because it attempted to intercept asynchronous errors across execution boundaries using monkey-patched event emitters and timers, but routinely left application resources in an inconsistent, leaking state. It was replaced by `AsyncLocalStorage` (from `async_hooks`) for context propagation, and standard Promise/async-await error handling. Domains proved impossible to make safe; replaced by AsyncLocalStorage and modern Promises.",
    "importantPoints": [
      "The `domain` module was deprecated because it attempted to intercept asynchronous errors across execution boundaries using monkey-patched event emitters and timers, but routinely left application resources in an inconsistent, leaking state. It was replaced by `AsyncLocalStorage` (from `async_hooks`) for context propagation, and standard Promise/async-await error handling.",
      "Domains proved impossible to make safe; replaced by AsyncLocalStorage and modern Promises."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "domains",
      "async-local-storage",
      "history"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "How does AsyncLocalStorage allow propagating request IDs and correlation context across asynchronous call chains?",
    "answer": "`const { AsyncLocalStorage } = require(\"async_hooks\"); const asyncLocalStorage = new AsyncLocalStorage();`. Wrapping an execution in `asyncLocalStorage.run({ requestId: uuid() }, () => next())` allows any downstream function, database query, or logger anywhere in the async call hierarchy to access `asyncLocalStorage.getStore().requestId` without passing request objects as parameters.",
    "explanation": "Thread-local storage equivalent for Node.js async call trees; ideal for request correlation tracing.",
    "interviewAnswer": "`const { AsyncLocalStorage } = require(\"async_hooks\"); const asyncLocalStorage = new AsyncLocalStorage();`. Wrapping an execution in `asyncLocalStorage.run({ requestId: uuid() }, () => next())` allows any downstream function, database query, or logger anywhere in the async call hierarchy to access `asyncLocalStorage.getStore().requestId` without passing request objects as parameters. Thread-local storage equivalent for Node.js async call trees; ideal for request correlation tracing.",
    "importantPoints": [
      "`const { AsyncLocalStorage } = require(\"async_hooks\"); const asyncLocalStorage = new AsyncLocalStorage();`. Wrapping an execution in `asyncLocalStorage.run({ requestId: uuid() }, () => next())` allows any downstream function, database query, or logger anywhere in the async call hierarchy to access `asyncLocalStorage.getStore().requestId` without passing request objects as parameters.",
      "Thread-local storage equivalent for Node.js async call trees; ideal for request correlation tracing."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "nodejs",
      "async-local-storage",
      "async_hooks",
      "tracing",
      "observability"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the output of: try { setTimeout(() => { throw new Error(\"Boom\"); }, 0); } catch(err) { console.log(\"Caught:\", err); } console.log(\"After\");?",
    "answer": "Outputs \"After\", followed by an Uncaught Error crashing the process. The `try...catch` block finishes executing synchronously. When the timer callback runs later on a fresh event loop call stack, there is no surrounding `try...catch` frame, triggering `uncaughtException`.",
    "explanation": "try...catch cannot catch errors thrown on future ticks of the event loop.",
    "interviewAnswer": "Outputs \"After\", followed by an Uncaught Error crashing the process. The `try...catch` block finishes executing synchronously. When the timer callback runs later on a fresh event loop call stack, there is no surrounding `try...catch` frame, triggering `uncaughtException`. try...catch cannot catch errors thrown on future ticks of the event loop.",
    "importantPoints": [
      "Outputs \"After\", followed by an Uncaught Error crashing the process. The `try...catch` block finishes executing synchronously. When the timer callback runs later on a fresh event loop call stack, there is no surrounding `try...catch` frame, triggering `uncaughtException`.",
      "try...catch cannot catch errors thrown on future ticks of the event loop."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "nodejs",
      "output-prediction",
      "try-catch",
      "timers",
      "error-handling"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "How do you handle errors properly in traditional Node.js Stream pipelines?",
    "answer": "Using `stream.pipe()` does NOT forward errors: if `readStream` errors, `writeStream` remains open and leaks memory. Always use `stream.pipeline(readStream, transformStream, writeStream, (err) => { if (err) handleError(err); })` (or `stream/promises`). `pipeline` automatically closes and cleans up all streams in the pipeline if any stream emits an error.",
    "explanation": "pipe() does not forward errors; stream.pipeline properly tears down all streams on failure.",
    "interviewAnswer": "Using `stream.pipe()` does NOT forward errors: if `readStream` errors, `writeStream` remains open and leaks memory. Always use `stream.pipeline(readStream, transformStream, writeStream, (err) => { if (err) handleError(err); })` (or `stream/promises`). `pipeline` automatically closes and cleans up all streams in the pipeline if any stream emits an error. pipe() does not forward errors; stream.pipeline properly tears down all streams on failure.",
    "importantPoints": [
      "Using `stream.pipe()` does NOT forward errors: if `readStream` errors, `writeStream` remains open and leaks memory. Always use `stream.pipeline(readStream, transformStream, writeStream, (err) => { if (err) handleError(err); })` (or `stream/promises`). `pipeline` automatically closes and cleans up all streams in the pipeline if any stream emits an error.",
      "pipe() does not forward errors; stream.pipeline properly tears down all streams on failure."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "streams",
      "pipeline",
      "error-handling",
      "memory-leaks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the Error Cause feature introduced in ES2022 / Node 16.9+, and how does it improve error debugging?",
    "answer": "`throw new Error(\"Failed to process payment\", { cause: originalDbError });`. The `{ cause }` option chains an underlying lower-level error to a higher-level domain error without losing the original stack trace and error properties, accessible via `error.cause`.",
    "explanation": "Chains root cause errors preserving original stack traces across architectural layers.",
    "interviewAnswer": "`throw new Error(\"Failed to process payment\", { cause: originalDbError });`. The `{ cause }` option chains an underlying lower-level error to a higher-level domain error without losing the original stack trace and error properties, accessible via `error.cause`. Chains root cause errors preserving original stack traces across architectural layers.",
    "importantPoints": [
      "`throw new Error(\"Failed to process payment\", { cause: originalDbError });`. The `{ cause }` option chains an underlying lower-level error to a higher-level domain error without losing the original stack trace and error properties, accessible via `error.cause`.",
      "Chains root cause errors preserving original stack traces across architectural layers."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "error-cause",
      "es2022",
      "error-handling"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the difference between synchronous throw and asynchronous Promise rejection inside an async function?",
    "answer": "Inside an `async` function, both synchronous `throw new Error()` and `return Promise.reject(new Error())` produce the exact same outcome: the returned Promise transitions to the `rejected` state. Neither crashes the process synchronously; both must be handled via `.catch()` or `try...catch` on `await`.",
    "explanation": "async functions automatically convert synchronous throws into rejected Promises.",
    "interviewAnswer": "Inside an `async` function, both synchronous `throw new Error()` and `return Promise.reject(new Error())` produce the exact same outcome: the returned Promise transitions to the `rejected` state. Neither crashes the process synchronously; both must be handled via `.catch()` or `try...catch` on `await`. async functions automatically convert synchronous throws into rejected Promises.",
    "importantPoints": [
      "Inside an `async` function, both synchronous `throw new Error()` and `return Promise.reject(new Error())` produce the exact same outcome: the returned Promise transitions to the `rejected` state. Neither crashes the process synchronously; both must be handled via `.catch()` or `try...catch` on `await`.",
      "async functions automatically convert synchronous throws into rejected Promises."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "async-await",
      "throw",
      "promises",
      "error-handling"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the output of: async function fn() { throw new Error(\"A\"); } fn(); console.log(\"B\"); in Node.js?",
    "answer": "Outputs \"B\", followed by `UnhandledPromiseRejection: Error: A`. `fn()` returns a rejected Promise. \"B\" logs synchronously. Because no `.catch()` was attached to the returned promise, the unhandled rejection terminates the process.",
    "explanation": "Synchronous statement logs first; unhandled promise rejection triggers afterwards.",
    "interviewAnswer": "Outputs \"B\", followed by `UnhandledPromiseRejection: Error: A`. `fn()` returns a rejected Promise. \"B\" logs synchronously. Because no `.catch()` was attached to the returned promise, the unhandled rejection terminates the process. Synchronous statement logs first; unhandled promise rejection triggers afterwards.",
    "importantPoints": [
      "Outputs \"B\", followed by `UnhandledPromiseRejection: Error: A`. `fn()` returns a rejected Promise. \"B\" logs synchronously. Because no `.catch()` was attached to the returned promise, the unhandled rejection terminates the process.",
      "Synchronous statement logs first; unhandled promise rejection triggers afterwards."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "nodejs",
      "output-prediction",
      "async-await",
      "unhandled-rejection"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the \"Fail-Fast\" architectural principle in Node.js service design?",
    "answer": "Fail-Fast dictates that software should immediately throw or crash when an unexpected state or programmer bug occurs, rather than continuing execution with invalid data or masking errors with silent fallback defaults. In cloud environments (Kubernetes/Docker), letting unhealthy instances crash triggers immediate alerts and automated container restarts with fresh state.",
    "explanation": "Crash immediately on bugs to prevent data corruption; let orchestrators restart clean containers.",
    "interviewAnswer": "Fail-Fast dictates that software should immediately throw or crash when an unexpected state or programmer bug occurs, rather than continuing execution with invalid data or masking errors with silent fallback defaults. In cloud environments (Kubernetes/Docker), letting unhealthy instances crash triggers immediate alerts and automated container restarts with fresh state. Crash immediately on bugs to prevent data corruption; let orchestrators restart clean containers.",
    "importantPoints": [
      "Fail-Fast dictates that software should immediately throw or crash when an unexpected state or programmer bug occurs, rather than continuing execution with invalid data or masking errors with silent fallback defaults. In cloud environments (Kubernetes/Docker), letting unhealthy instances crash triggers immediate alerts and automated container restarts with fresh state.",
      "Crash immediately on bugs to prevent data corruption; let orchestrators restart clean containers."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "nodejs",
      "fail-fast",
      "architecture",
      "reliability",
      "kubernetes"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "How does Centralized Error Handling work in Express.js backend services?",
    "answer": "All asynchronous route errors are forwarded to `next(err)`. A specialized 4-parameter error middleware `(err, req, res, next) => { ... }` is registered as the last middleware in the pipeline. It logs the error with request ID correlation, inspects `err.statusCode` and `err.isOperational`, and sends a sanitized JSON response `{ status: \"error\", message }` without leaking stack traces.",
    "explanation": "Four-parameter middleware (err, req, res, next) handles all uncaught errors centrally.",
    "interviewAnswer": "All asynchronous route errors are forwarded to `next(err)`. A specialized 4-parameter error middleware `(err, req, res, next) => { ... }` is registered as the last middleware in the pipeline. It logs the error with request ID correlation, inspects `err.statusCode` and `err.isOperational`, and sends a sanitized JSON response `{ status: \"error\", message }` without leaking stack traces. Four-parameter middleware (err, req, res, next) handles all uncaught errors centrally.",
    "importantPoints": [
      "All asynchronous route errors are forwarded to `next(err)`. A specialized 4-parameter error middleware `(err, req, res, next) => { ... }` is registered as the last middleware in the pipeline. It logs the error with request ID correlation, inspects `err.statusCode` and `err.isOperational`, and sends a sanitized JSON response `{ status: \"error\", message }` without leaking stack traces.",
      "Four-parameter middleware (err, req, res, next) handles all uncaught errors centrally."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "express",
      "error-middleware",
      "architecture"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the danger of returning `error.stack` in HTTP responses in production environments?",
    "answer": "Exposing `error.stack` leaks internal server file paths, framework versions, database query structures, and third-party library names to attackers. This information reconnaissance allows malicious actors to target known CVE vulnerabilities and discover file structures. Always log stack traces internally and return a generic error message to clients.",
    "explanation": "Security vulnerability: leaks internal server file structure and library versions to attackers.",
    "interviewAnswer": "Exposing `error.stack` leaks internal server file paths, framework versions, database query structures, and third-party library names to attackers. This information reconnaissance allows malicious actors to target known CVE vulnerabilities and discover file structures. Always log stack traces internally and return a generic error message to clients. Security vulnerability: leaks internal server file structure and library versions to attackers.",
    "importantPoints": [
      "Exposing `error.stack` leaks internal server file paths, framework versions, database query structures, and third-party library names to attackers. This information reconnaissance allows malicious actors to target known CVE vulnerabilities and discover file structures. Always log stack traces internally and return a generic error message to clients.",
      "Security vulnerability: leaks internal server file structure and library versions to attackers."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Security",
    "isImportant": true,
    "tags": [
      "nodejs",
      "security",
      "stack-traces",
      "information-disclosure"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "How do you handle error events when using the `cluster` module in Node.js?",
    "answer": "Listen to worker failure events on the primary cluster: `cluster.on(\"exit\", (worker, code, signal) => { logger.error(`Worker ${worker.process.pid} died (${code || signal}). Restarting...`); cluster.fork(); });`. This ensures that if a worker crashes due to an uncaught exception, a replacement worker is spawned immediately to maintain service capacity.",
    "explanation": "Primary process listens for worker exit and forks replacement processes to maintain throughput.",
    "interviewAnswer": "Listen to worker failure events on the primary cluster: `cluster.on(\"exit\", (worker, code, signal) => { logger.error(`Worker ${worker.process.pid} died (${code || signal}). Restarting...`); cluster.fork(); });`. This ensures that if a worker crashes due to an uncaught exception, a replacement worker is spawned immediately to maintain service capacity. Primary process listens for worker exit and forks replacement processes to maintain throughput.",
    "importantPoints": [
      "Listen to worker failure events on the primary cluster: `cluster.on(\"exit\", (worker, code, signal) => { logger.error(`Worker ${worker.process.pid} died (${code || signal}). Restarting...`); cluster.fork(); });`. This ensures that if a worker crashes due to an uncaught exception, a replacement worker is spawned immediately to maintain service capacity.",
      "Primary process listens for worker exit and forks replacement processes to maintain throughput."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "nodejs",
      "cluster",
      "worker-crash",
      "high-availability"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the output of: process.on(\"uncaughtException\", (err) => { console.log(\"Intercepted:\", err.message); }); setTimeout(() => { throw new Error(\"Fatal\"); }, 0);?",
    "answer": "Outputs `\"Intercepted: Fatal\"`. The global `uncaughtException` listener intercepts the uncaught error from the timer callback, preventing Node.js from printing its default stack trace and exiting.",
    "explanation": "uncaughtException catches otherwise fatal exceptions on the main thread.",
    "interviewAnswer": "Outputs `\"Intercepted: Fatal\"`. The global `uncaughtException` listener intercepts the uncaught error from the timer callback, preventing Node.js from printing its default stack trace and exiting. uncaughtException catches otherwise fatal exceptions on the main thread.",
    "importantPoints": [
      "Outputs `\"Intercepted: Fatal\"`. The global `uncaughtException` listener intercepts the uncaught error from the timer callback, preventing Node.js from printing its default stack trace and exiting.",
      "uncaughtException catches otherwise fatal exceptions on the main thread."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "nodejs",
      "output-prediction",
      "uncaughtException"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the purpose of the `rejectionHandled` event on the process object?",
    "answer": "`rejectionHandled` fires when a Promise rejection was previously unhandled (triggering `unhandledRejection`), but a `.catch()` handler was attached to it later in a subsequent tick of the event loop. Used by APM tools to track late-handled promise errors.",
    "explanation": "Fires when a rejection handler is attached late to a previously unhandled promise.",
    "interviewAnswer": "`rejectionHandled` fires when a Promise rejection was previously unhandled (triggering `unhandledRejection`), but a `.catch()` handler was attached to it later in a subsequent tick of the event loop. Used by APM tools to track late-handled promise errors. Fires when a rejection handler is attached late to a previously unhandled promise.",
    "importantPoints": [
      "`rejectionHandled` fires when a Promise rejection was previously unhandled (triggering `unhandledRejection`), but a `.catch()` handler was attached to it later in a subsequent tick of the event loop. Used by APM tools to track late-handled promise errors.",
      "Fires when a rejection handler is attached late to a previously unhandled promise."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "rejectionHandled",
      "promises",
      "apm"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "How do you build a Circuit Breaker pattern in Node.js to protect services from failing downstream dependencies?",
    "answer": "A Circuit Breaker tracks failures to external dependencies across 3 states: 1) Closed (normal operations), 2) Open (failure threshold reached, e.g. 50% errors in 10s; calls fail-fast immediately without hitting the downstream service), 3) Half-Open (after a cooldown window, allow a trial request through). If the trial succeeds, reset to Closed; if it fails, return to Open. Common library: `opossum`.",
    "explanation": "Fails fast when downstream services are failing, preventing resource exhaustion and cascade outages.",
    "interviewAnswer": "A Circuit Breaker tracks failures to external dependencies across 3 states: 1) Closed (normal operations), 2) Open (failure threshold reached, e.g. 50% errors in 10s; calls fail-fast immediately without hitting the downstream service), 3) Half-Open (after a cooldown window, allow a trial request through). If the trial succeeds, reset to Closed; if it fails, return to Open. Common library: `opossum`. Fails fast when downstream services are failing, preventing resource exhaustion and cascade outages.",
    "importantPoints": [
      "A Circuit Breaker tracks failures to external dependencies across 3 states: 1) Closed (normal operations), 2) Open (failure threshold reached, e.g. 50% errors in 10s; calls fail-fast immediately without hitting the downstream service), 3) Half-Open (after a cooldown window, allow a trial request through). If the trial succeeds, reset to Closed; if it fails, return to Open. Common library: `opossum`.",
      "Fails fast when downstream services are failing, preventing resource exhaustion and cascade outages."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "nodejs",
      "circuit-breaker",
      "resilience",
      "microservices",
      "architecture"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "An external service becomes slow and causes your API to become slow. How would you protect your service?",
    "answer": "1) Enforce strict Request Timeouts on outgoing HTTP requests (e.g. 1-2s via AbortSignal.timeout). 2) Implement a Circuit Breaker to trip and fail-fast when the external service is degraded. 3) Cache previous successful external responses (Redis/in-memory). 4) Use asynchronous background queuing (BullMQ/RabbitMQ) for non-blocking processing. 5) Return degraded/cached fallbacks rather than stalling the request.",
    "explanation": "Strict timeouts + circuit breakers + caching fallbacks insulate your API from downstream latency.",
    "interviewAnswer": "1) Enforce strict Request Timeouts on outgoing HTTP requests (e.g. 1-2s via AbortSignal.timeout). 2) Implement a Circuit Breaker to trip and fail-fast when the external service is degraded. 3) Cache previous successful external responses (Redis/in-memory). 4) Use asynchronous background queuing (BullMQ/RabbitMQ) for non-blocking processing. 5) Return degraded/cached fallbacks rather than stalling the request. Strict timeouts + circuit breakers + caching fallbacks insulate your API from downstream latency.",
    "importantPoints": [
      "1) Enforce strict Request Timeouts on outgoing HTTP requests (e.g. 1-2s via AbortSignal.timeout). 2) Implement a Circuit Breaker to trip and fail-fast when the external service is degraded. 3) Cache previous successful external responses (Redis/in-memory). 4) Use asynchronous background queuing (BullMQ/RabbitMQ) for non-blocking processing. 5) Return degraded/cached fallbacks rather than stalling the request.",
      "Strict timeouts + circuit breakers + caching fallbacks insulate your API from downstream latency."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Logical / Scenario-Based",
    "isImportant": true,
    "tags": [
      "nodejs",
      "resilience",
      "timeouts",
      "circuit-breaker",
      "production-scenario"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the output of: const p = Promise.reject(\"Err\"); setTimeout(() => { p.catch(e => console.log(\"Caught:\", e)); }, 50); in Node.js 18+?",
    "answer": "Triggers an unhandledRejection error and process crash before the 50ms timer can fire. Because the catch handler is attached late (in a future macrotask), Node.js marks the rejection as unhandled at the end of the initial microtask turn and terminates.",
    "explanation": "Late catch attachment cannot prevent Node.js 15+ from treating initial unhandled rejection as fatal.",
    "interviewAnswer": "Triggers an unhandledRejection error and process crash before the 50ms timer can fire. Because the catch handler is attached late (in a future macrotask), Node.js marks the rejection as unhandled at the end of the initial microtask turn and terminates. Late catch attachment cannot prevent Node.js 15+ from treating initial unhandled rejection as fatal.",
    "importantPoints": [
      "Triggers an unhandledRejection error and process crash before the 50ms timer can fire. Because the catch handler is attached late (in a future macrotask), Node.js marks the rejection as unhandled at the end of the initial microtask turn and terminates.",
      "Late catch attachment cannot prevent Node.js 15+ from treating initial unhandled rejection as fatal."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "nodejs",
      "output-prediction",
      "unhandled-rejection",
      "late-catch"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the difference between an Error, a RangeError, and a TypeError in Node.js?",
    "answer": "`TypeError` is thrown when an operation is performed on a value of the wrong type (e.g. calling `null()` or accessing properties on undefined). `RangeError` is thrown when a numeric argument is out of allowed range (e.g. invalid array length, exceeding `MAX_LENGTH` on Buffer). `Error` is the generic base class.",
    "explanation": "TypeError = invalid type; RangeError = numeric value out of bounds; Error = generic base.",
    "interviewAnswer": "`TypeError` is thrown when an operation is performed on a value of the wrong type (e.g. calling `null()` or accessing properties on undefined). `RangeError` is thrown when a numeric argument is out of allowed range (e.g. invalid array length, exceeding `MAX_LENGTH` on Buffer). `Error` is the generic base class. TypeError = invalid type; RangeError = numeric value out of bounds; Error = generic base.",
    "importantPoints": [
      "`TypeError` is thrown when an operation is performed on a value of the wrong type (e.g. calling `null()` or accessing properties on undefined). `RangeError` is thrown when a numeric argument is out of allowed range (e.g. invalid array length, exceeding `MAX_LENGTH` on Buffer). `Error` is the generic base class.",
      "TypeError = invalid type; RangeError = numeric value out of bounds; Error = generic base."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "error-types",
      "typeerror",
      "rangeerror"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "How does the Node.js `assert` module facilitate defensive programming, and how does strict mode differ?",
    "answer": "`const assert = require(\"node:assert/strict\"); assert.equal(a, b);`. `assert` throws an `AssertionError` if an expression evaluates to falsy. Strict mode (`node:assert/strict`) uses `Object.is()` / `===` deep equality rather than legacy loose coercion (`==`), preventing subtle bugs.",
    "explanation": "Throws AssertionError if condition fails; strict mode avoids loose type coercion.",
    "interviewAnswer": "`const assert = require(\"node:assert/strict\"); assert.equal(a, b);`. `assert` throws an `AssertionError` if an expression evaluates to falsy. Strict mode (`node:assert/strict`) uses `Object.is()` / `===` deep equality rather than legacy loose coercion (`==`), preventing subtle bugs. Throws AssertionError if condition fails; strict mode avoids loose type coercion.",
    "importantPoints": [
      "`const assert = require(\"node:assert/strict\"); assert.equal(a, b);`. `assert` throws an `AssertionError` if an expression evaluates to falsy. Strict mode (`node:assert/strict`) uses `Object.is()` / `===` deep equality rather than legacy loose coercion (`==`), preventing subtle bugs.",
      "Throws AssertionError if condition fails; strict mode avoids loose type coercion."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "assert",
      "testing",
      "defensive-programming"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the purpose of the Node.js `--trace-warnings` and `--trace-deprecation` flags?",
    "answer": "By default, Node.js prints warnings (like memory leak or deprecation warnings) with only a short message. Running with `--trace-warnings` or `--trace-deprecation` prints full stack traces alongside warnings, allowing developers to pinpoint the exact file and line of code that triggered the warning.",
    "explanation": "Prints full stack traces for runtime warnings and deprecation notices for easier debugging.",
    "interviewAnswer": "By default, Node.js prints warnings (like memory leak or deprecation warnings) with only a short message. Running with `--trace-warnings` or `--trace-deprecation` prints full stack traces alongside warnings, allowing developers to pinpoint the exact file and line of code that triggered the warning. Prints full stack traces for runtime warnings and deprecation notices for easier debugging.",
    "importantPoints": [
      "By default, Node.js prints warnings (like memory leak or deprecation warnings) with only a short message. Running with `--trace-warnings` or `--trace-deprecation` prints full stack traces alongside warnings, allowing developers to pinpoint the exact file and line of code that triggered the warning.",
      "Prints full stack traces for runtime warnings and deprecation notices for easier debugging."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "nodejs",
      "cli",
      "trace-warnings",
      "debugging"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "How do you handle unhandled errors occurring inside Child Processes spawned via child_process.spawn()?",
    "answer": "Listen to the `\"error\"` event on the child process instance: `const child = spawn(...); child.on(\"error\", (err) => { console.error(\"Failed to start process:\", err); });`. Also listen to the child process `stderr` stream: `child.stderr.on(\"data\", chunk => ...)`, and capture non-zero exit codes via `child.on(\"exit\", (code) => ...)`.",
    "explanation": "Must listen to child.on(\"error\") for launch failures, stderr stream for output, and exit code.",
    "interviewAnswer": "Listen to the `\"error\"` event on the child process instance: `const child = spawn(...); child.on(\"error\", (err) => { console.error(\"Failed to start process:\", err); });`. Also listen to the child process `stderr` stream: `child.stderr.on(\"data\", chunk => ...)`, and capture non-zero exit codes via `child.on(\"exit\", (code) => ...)`. Must listen to child.on(\"error\") for launch failures, stderr stream for output, and exit code.",
    "importantPoints": [
      "Listen to the `\"error\"` event on the child process instance: `const child = spawn(...); child.on(\"error\", (err) => { console.error(\"Failed to start process:\", err); });`. Also listen to the child process `stderr` stream: `child.stderr.on(\"data\", chunk => ...)`, and capture non-zero exit codes via `child.on(\"exit\", (code) => ...)`.",
      "Must listen to child.on(\"error\") for launch failures, stderr stream for output, and exit code."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "child-process",
      "error-handling",
      "spawn"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the difference between error handling in async/await vs Promise `.then().catch()` chains?",
    "answer": "In `.then().catch()`, errors occurring in a `.then()` handler bypass subsequent `.then()` handlers and jump to the `.catch()`. In `async/await`, errors are handled using standard `try...catch` blocks. A major advantage of `async/await` is that a single `try...catch` seamlessly catches both synchronous exceptions and asynchronous rejections in one place.",
    "explanation": "try...catch unifies synchronous and asynchronous exception handling in async/await code.",
    "interviewAnswer": "In `.then().catch()`, errors occurring in a `.then()` handler bypass subsequent `.then()` handlers and jump to the `.catch()`. In `async/await`, errors are handled using standard `try...catch` blocks. A major advantage of `async/await` is that a single `try...catch` seamlessly catches both synchronous exceptions and asynchronous rejections in one place. try...catch unifies synchronous and asynchronous exception handling in async/await code.",
    "importantPoints": [
      "In `.then().catch()`, errors occurring in a `.then()` handler bypass subsequent `.then()` handlers and jump to the `.catch()`. In `async/await`, errors are handled using standard `try...catch` blocks. A major advantage of `async/await` is that a single `try...catch` seamlessly catches both synchronous exceptions and asynchronous rejections in one place.",
      "try...catch unifies synchronous and asynchronous exception handling in async/await code."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "async-await",
      "promises",
      "try-catch",
      "error-handling"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What happens if you return a rejected Promise inside a `catch` block without an outer handler?",
    "answer": "Returning `Promise.reject(err)` or `throw err` inside a `.catch()` block propagates the rejection down the chain. If there are no further `.catch()` handlers downstream or in the caller, it becomes an unhandled Promise rejection and crashes the process in modern Node.js.",
    "explanation": "Re-throwing or returning a rejected promise from a catch block requires downstream error handling.",
    "interviewAnswer": "Returning `Promise.reject(err)` or `throw err` inside a `.catch()` block propagates the rejection down the chain. If there are no further `.catch()` handlers downstream or in the caller, it becomes an unhandled Promise rejection and crashes the process in modern Node.js. Re-throwing or returning a rejected promise from a catch block requires downstream error handling.",
    "importantPoints": [
      "Returning `Promise.reject(err)` or `throw err` inside a `.catch()` block propagates the rejection down the chain. If there are no further `.catch()` handlers downstream or in the caller, it becomes an unhandled Promise rejection and crashes the process in modern Node.js.",
      "Re-throwing or returning a rejected promise from a catch block requires downstream error handling."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "promises",
      "catch",
      "error-propagation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "How does graceful degradation improve error resilience in high-volume microservices?",
    "answer": "Graceful degradation ensures that when non-critical components fail (e.g. recommendations service or personalized avatars), the system does NOT fail the entire request with a 500 Internal Server Error. Instead, it catches the error, logs it, and returns default static recommendations or cached fallbacks, keeping the primary user flow functioning.",
    "explanation": "Isolates partial failures to return fallback defaults instead of failing whole user requests.",
    "interviewAnswer": "Graceful degradation ensures that when non-critical components fail (e.g. recommendations service or personalized avatars), the system does NOT fail the entire request with a 500 Internal Server Error. Instead, it catches the error, logs it, and returns default static recommendations or cached fallbacks, keeping the primary user flow functioning. Isolates partial failures to return fallback defaults instead of failing whole user requests.",
    "importantPoints": [
      "Graceful degradation ensures that when non-critical components fail (e.g. recommendations service or personalized avatars), the system does NOT fail the entire request with a 500 Internal Server Error. Instead, it catches the error, logs it, and returns default static recommendations or cached fallbacks, keeping the primary user flow functioning.",
      "Isolates partial failures to return fallback defaults instead of failing whole user requests."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "nodejs",
      "graceful-degradation",
      "resilience",
      "microservices"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the output of: try { Promise.reject(\"Fail\"); } catch(e) { console.log(\"Caught:\", e); } console.log(\"End\");?",
    "answer": "Outputs \"End\", followed by an unhandledRejection crash. `try...catch` only catches synchronous exceptions or awaited expressions. Creating an un-awaited `Promise.reject()` does NOT throw synchronously, bypassing the catch block completely.",
    "explanation": "try...catch does not catch un-awaited Promise rejections.",
    "interviewAnswer": "Outputs \"End\", followed by an unhandledRejection crash. `try...catch` only catches synchronous exceptions or awaited expressions. Creating an un-awaited `Promise.reject()` does NOT throw synchronously, bypassing the catch block completely. try...catch does not catch un-awaited Promise rejections.",
    "importantPoints": [
      "Outputs \"End\", followed by an unhandledRejection crash. `try...catch` only catches synchronous exceptions or awaited expressions. Creating an un-awaited `Promise.reject()` does NOT throw synchronously, bypassing the catch block completely.",
      "try...catch does not catch un-awaited Promise rejections."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "nodejs",
      "output-prediction",
      "try-catch",
      "promises"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the purpose of the Node.js `--abort-on-uncaught-exception` CLI flag?",
    "answer": "It instructs the V8 engine to generate a core dump and terminate immediately when an uncaught exception occurs, allowing developers to inspect post-mortem memory state, local variables, and call stacks using tools like `gdb` or `lldb`.",
    "explanation": "Generates core dump upon uncaught exception for post-mortem C++ / V8 memory debugging.",
    "interviewAnswer": "It instructs the V8 engine to generate a core dump and terminate immediately when an uncaught exception occurs, allowing developers to inspect post-mortem memory state, local variables, and call stacks using tools like `gdb` or `lldb`. Generates core dump upon uncaught exception for post-mortem C++ / V8 memory debugging.",
    "importantPoints": [
      "It instructs the V8 engine to generate a core dump and terminate immediately when an uncaught exception occurs, allowing developers to inspect post-mortem memory state, local variables, and call stacks using tools like `gdb` or `lldb`.",
      "Generates core dump upon uncaught exception for post-mortem C++ / V8 memory debugging."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "nodejs",
      "post-mortem",
      "core-dump",
      "debugging"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "How do you handle errors inside Worker Threads in Node.js?",
    "answer": "Listen to the `\"error\"` event on the worker instance: `worker.on(\"error\", (err) => console.error(\"Worker crashed:\", err));`. Uncaught errors inside worker threads do NOT crash the parent process by default, but cause the worker to terminate with an exit event (`worker.on(\"exit\", code => ...)`).",
    "explanation": "Parent process intercepts worker errors via worker.on(\"error\"); unhandled worker errors do not crash parent.",
    "interviewAnswer": "Listen to the `\"error\"` event on the worker instance: `worker.on(\"error\", (err) => console.error(\"Worker crashed:\", err));`. Uncaught errors inside worker threads do NOT crash the parent process by default, but cause the worker to terminate with an exit event (`worker.on(\"exit\", code => ...)`). Parent process intercepts worker errors via worker.on(\"error\"); unhandled worker errors do not crash parent.",
    "importantPoints": [
      "Listen to the `\"error\"` event on the worker instance: `worker.on(\"error\", (err) => console.error(\"Worker crashed:\", err));`. Uncaught errors inside worker threads do NOT crash the parent process by default, but cause the worker to terminate with an exit event (`worker.on(\"exit\", code => ...)`).",
      "Parent process intercepts worker errors via worker.on(\"error\"); unhandled worker errors do not crash parent."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "worker-threads",
      "error-handling",
      "concurrency"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the difference between ECONNREFUSED and ECONNRESET in Node.js networking?",
    "answer": "`ECONNREFUSED` means no target process is listening on the requested host and port (or the server is down, or blocked by a firewall). `ECONNRESET` means a connection was established, but was abruptly closed or reset by the remote peer (e.g. server crash, socket timeout, or load balancer reset).",
    "explanation": "ECONNREFUSED = could not connect; ECONNRESET = connection was established then forcefully dropped.",
    "interviewAnswer": "`ECONNREFUSED` means no target process is listening on the requested host and port (or the server is down, or blocked by a firewall). `ECONNRESET` means a connection was established, but was abruptly closed or reset by the remote peer (e.g. server crash, socket timeout, or load balancer reset). ECONNREFUSED = could not connect; ECONNRESET = connection was established then forcefully dropped.",
    "importantPoints": [
      "`ECONNREFUSED` means no target process is listening on the requested host and port (or the server is down, or blocked by a firewall). `ECONNRESET` means a connection was established, but was abruptly closed or reset by the remote peer (e.g. server crash, socket timeout, or load balancer reset).",
      "ECONNREFUSED = could not connect; ECONNRESET = connection was established then forcefully dropped."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "networking",
      "econnrefused",
      "econnreset",
      "troubleshooting"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "How do you implement an Exponential Backoff retry wrapper with non-retryable error filtering in Node.js?",
    "answer": "`async function retry(fn, retries = 3, delay = 500) { try { return await fn(); } catch (err) { if (retries <= 0 || !isRetryable(err)) throw err; await new Promise(r => setTimeout(r, delay)); return retry(fn, retries - 1, delay * 2); } }`. Only retry transient network/operational errors (503, 429, ECONNRESET); never retry 400 Bad Request or 401 Unauthorized.",
    "explanation": "Retries transient network failures with doubling delay, immediately failing on 4xx validation errors.",
    "interviewAnswer": "`async function retry(fn, retries = 3, delay = 500) { try { return await fn(); } catch (err) { if (retries <= 0 || !isRetryable(err)) throw err; await new Promise(r => setTimeout(r, delay)); return retry(fn, retries - 1, delay * 2); } }`. Only retry transient network/operational errors (503, 429, ECONNRESET); never retry 400 Bad Request or 401 Unauthorized. Retries transient network failures with doubling delay, immediately failing on 4xx validation errors.",
    "importantPoints": [
      "`async function retry(fn, retries = 3, delay = 500) { try { return await fn(); } catch (err) { if (retries <= 0 || !isRetryable(err)) throw err; await new Promise(r => setTimeout(r, delay)); return retry(fn, retries - 1, delay * 2); } }`. Only retry transient network/operational errors (503, 429, ECONNRESET); never retry 400 Bad Request or 401 Unauthorized.",
      "Retries transient network failures with doubling delay, immediately failing on 4xx validation errors."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "nodejs",
      "exponential-backoff",
      "retry",
      "resilience",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the purpose of the Node.js `process.report` API for diagnostic error reporting?",
    "answer": "`process.report.writeReport()` generates a detailed diagnostic JSON report containing: JavaScript and native C++ call stacks, V8 heap statistics, resource limits, loaded shared libraries, and open libuv handles. Useful for capturing automatic diagnostic snapshots on fatal errors.",
    "explanation": "Generates detailed JSON diagnostic reports of process state, handles, and memory.",
    "interviewAnswer": "`process.report.writeReport()` generates a detailed diagnostic JSON report containing: JavaScript and native C++ call stacks, V8 heap statistics, resource limits, loaded shared libraries, and open libuv handles. Useful for capturing automatic diagnostic snapshots on fatal errors. Generates detailed JSON diagnostic reports of process state, handles, and memory.",
    "importantPoints": [
      "`process.report.writeReport()` generates a detailed diagnostic JSON report containing: JavaScript and native C++ call stacks, V8 heap statistics, resource limits, loaded shared libraries, and open libuv handles. Useful for capturing automatic diagnostic snapshots on fatal errors.",
      "Generates detailed JSON diagnostic reports of process state, handles, and memory."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "nodejs",
      "process-report",
      "diagnostics",
      "debugging"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "Why should error objects in Node.js always inherit from the built-in `Error` class rather than throwing plain strings or objects?",
    "answer": "Throwing plain strings or objects (`throw \"error\"`) lacks the `.stack` property containing the call stack trace, making it impossible to locate where the error originated. It also breaks standard `err instanceof Error` checks, error codes, and standardized error-handling middleware.",
    "explanation": "Plain strings lack stack traces and break standard error-checking pipelines.",
    "interviewAnswer": "Throwing plain strings or objects (`throw \"error\"`) lacks the `.stack` property containing the call stack trace, making it impossible to locate where the error originated. It also breaks standard `err instanceof Error` checks, error codes, and standardized error-handling middleware. Plain strings lack stack traces and break standard error-checking pipelines.",
    "importantPoints": [
      "Throwing plain strings or objects (`throw \"error\"`) lacks the `.stack` property containing the call stack trace, making it impossible to locate where the error originated. It also breaks standard `err instanceof Error` checks, error codes, and standardized error-handling middleware.",
      "Plain strings lack stack traces and break standard error-checking pipelines."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "error-class",
      "stack-trace",
      "best-practices"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the output of: function f() { try { throw new Error(\"A\"); } finally { return \"B\"; } } console.log(f());?",
    "answer": "Outputs `\"B\"`. A `return` statement inside a `finally` block suppresses and discards any thrown exception in the `try` block, returning the `finally` value instead.",
    "explanation": "A return statement inside finally silences thrown exceptions.",
    "interviewAnswer": "Outputs `\"B\"`. A `return` statement inside a `finally` block suppresses and discards any thrown exception in the `try` block, returning the `finally` value instead. A return statement inside finally silences thrown exceptions.",
    "importantPoints": [
      "Outputs `\"B\"`. A `return` statement inside a `finally` block suppresses and discards any thrown exception in the `try` block, returning the `finally` value instead.",
      "A return statement inside finally silences thrown exceptions."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "nodejs",
      "output-prediction",
      "try-finally",
      "error-suppression"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "How does Idempotency protect distributed Node.js systems when retrying network operations after a timeout?",
    "answer": "When an HTTP request times out, the client cannot know if the server failed before or after processing the request. If non-idempotent (e.g. charging a credit card), retrying risks charging twice. An Idempotency Key (sent via `Idempotency-Key: <uuid>`) allows the server to recognize duplicate requests and return the original cached response without re-processing.",
    "explanation": "Idempotency keys ensure retrying timed-out requests does not duplicate state changes or payments.",
    "interviewAnswer": "When an HTTP request times out, the client cannot know if the server failed before or after processing the request. If non-idempotent (e.g. charging a credit card), retrying risks charging twice. An Idempotency Key (sent via `Idempotency-Key: <uuid>`) allows the server to recognize duplicate requests and return the original cached response without re-processing. Idempotency keys ensure retrying timed-out requests does not duplicate state changes or payments.",
    "importantPoints": [
      "When an HTTP request times out, the client cannot know if the server failed before or after processing the request. If non-idempotent (e.g. charging a credit card), retrying risks charging twice. An Idempotency Key (sent via `Idempotency-Key: <uuid>`) allows the server to recognize duplicate requests and return the original cached response without re-processing.",
      "Idempotency keys ensure retrying timed-out requests does not duplicate state changes or payments."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "nodejs",
      "idempotency",
      "retries",
      "distributed-systems",
      "architecture"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "error-handling",
    "question": "What is the difference between synchronous and asynchronous stack traces in Node.js errors?",
    "answer": "In synchronous code, the stack trace directly reflects active Call Stack frames. In asynchronous code across timers or I/O, the original stack frame was popped off the stack before the callback ran. Modern V8 uses asynchronous stack walking to stitch together the asynchronous call chain, preserving the caller origin across `await` points.",
    "explanation": "V8 stitches async stack traces across await boundaries to preserve context.",
    "interviewAnswer": "In synchronous code, the stack trace directly reflects active Call Stack frames. In asynchronous code across timers or I/O, the original stack frame was popped off the stack before the callback ran. Modern V8 uses asynchronous stack walking to stitch together the asynchronous call chain, preserving the caller origin across `await` points. V8 stitches async stack traces across await boundaries to preserve context.",
    "importantPoints": [
      "In synchronous code, the stack trace directly reflects active Call Stack frames. In asynchronous code across timers or I/O, the original stack frame was popped off the stack before the callback ran. Modern V8 uses asynchronous stack walking to stitch together the asynchronous call chain, preserving the caller origin across `await` points.",
      "V8 stitches async stack traces across await boundaries to preserve context."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "stack-traces",
      "async-await",
      "v8"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
