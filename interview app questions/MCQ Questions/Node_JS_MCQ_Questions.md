# Node.js MCQ Questions — Interview Preparation
## 140 Multiple Choice Questions with Answers & Explanations

> Based on Node.js Interview Questions 1–140 for MERN Stack Developer

---

## 1. What is Node.js?

- **A.** A CSS framework for styling web pages.
- **B.** A JavaScript runtime that allows running JavaScript outside the browser, mainly on the server.
- **C.** A database management system similar to MongoDB.
- **D.** A frontend library used for building user interfaces.

**Answer:** B. A JavaScript runtime that allows running JavaScript outside the browser, mainly on the server.

**Explanation:** Node.js is built on Chrome's V8 JavaScript engine and uses non-blocking, asynchronous I/O. It is popular for APIs, real-time apps, chat apps, and streaming applications.

---

## 2. How is Node.js different from JavaScript running in a browser?

- **A.** Node.js provides browser APIs like `window` and `document`.
- **B.** Browser JavaScript provides server-side modules like `fs` and `http`.
- **C.** Node.js provides server-side APIs like `fs`, `http`, and `path` instead of browser DOM APIs.
- **D.** There is no difference; both provide exactly the same APIs.

**Answer:** C. Node.js provides server-side APIs like `fs`, `http`, and `path` instead of browser DOM APIs.

**Explanation:** Browser JavaScript works with DOM, `window`, and `document`. Node.js does not have the DOM; it provides server-side modules like `fs`, `http`, `path`, and `process` for backend tasks.

---

## 3. Which of the following is NOT a main feature of Node.js?

- **A.** Event-driven architecture and non-blocking I/O.
- **B.** Built-in DOM manipulation support.
- **C.** Large npm ecosystem and built-in modules for HTTP, files, and streams.
- **D.** V8 JavaScript engine and asynchronous programming.

**Answer:** B. Built-in DOM manipulation support.

**Explanation:** Node.js does not have DOM manipulation — that's a browser feature. Node.js features include event-driven architecture, non-blocking I/O, V8 engine, npm ecosystem, and built-in server-side modules.

---

## 4. Why is Node.js called single-threaded?

- **A.** Node.js can only handle one request at a time and blocks all others.
- **B.** Node.js runs JavaScript code on a single main thread, but uses the Event Loop and libuv thread pool for async operations.
- **C.** Node.js creates a new thread for every incoming request.
- **D.** Node.js does not support any form of multithreading.

**Answer:** B. Node.js runs JavaScript code on a single main thread, but uses the Event Loop and libuv thread pool for async operations.

**Explanation:** Normal JavaScript execution happens on the main thread. However, Node.js is not strictly "one thread" — it uses the Event Loop and libuv's thread pool for certain asynchronous operations like file I/O and DNS lookups.

---

## 5. How can Node.js handle thousands of requests on a single thread?

- **A.** It creates a new thread for each request behind the scenes.
- **B.** It uses the Event Loop and non-blocking I/O so it doesn't wait for one request to finish before handling another.
- **C.** It queues all requests and processes them one by one synchronously.
- **D.** It compresses all requests into a single operation.

**Answer:** B. It uses the Event Loop and non-blocking I/O so it doesn't wait for one request to finish before handling another.

**Explanation:** When a request needs database or file data, Node.js starts the operation asynchronously and handles other requests while waiting. When the result is ready, the callback/Promise continuation is processed.

---

## 6. What does non-blocking I/O mean in Node.js?

- **A.** Node.js stops the main thread while waiting for file or network operations.
- **B.** Node.js does not stop the main thread while waiting for I/O; it continues other work and handles the result asynchronously.
- **C.** Node.js blocks all I/O operations by default.
- **D.** Non-blocking I/O means Node.js cannot perform file operations.

**Answer:** B. Node.js does not stop the main thread while waiting for I/O; it continues other work and handles the result asynchronously.

**Explanation:** Non-blocking I/O means the main JavaScript thread is free to handle other tasks while a file read, database query, or network request is in progress. The result is handled via callbacks, Promises, or async/await.

---

## 7. What is event-driven architecture in Node.js?

- **A.** A system where code continuously polls for changes in an infinite loop.
- **B.** A model where code registers listeners for events and executes handlers when those events occur.
- **C.** A system where all code runs synchronously in sequence.
- **D.** A system that requires manual thread management.

**Answer:** B. A model where code registers listeners for events and executes handlers when those events occur.

**Explanation:** Node.js uses EventEmitter and the Event Loop for this model. Instead of continuously checking whether something happened, code registers a listener and executes when the event occurs.

---

## 8. What is the role of the V8 engine in Node.js?

- **A.** V8 manages the database connections in Node.js.
- **B.** V8 is Google's JavaScript engine that compiles and executes JavaScript code using techniques like JIT compilation.
- **C.** V8 is a CSS rendering engine used by Node.js.
- **D.** V8 is responsible for managing HTTP requests only.

**Answer:** B. V8 is Google's JavaScript engine that compiles and executes JavaScript code using techniques like JIT compilation.

**Explanation:** V8 converts JavaScript into machine-level instructions and uses JIT (Just-In-Time) compilation for performance. Node.js adds server-side APIs and runtime features around the V8 engine.

---

## 9. What is libuv in Node.js?

- **A.** A JavaScript testing framework.
- **B.** A library that provides the Event Loop infrastructure and asynchronous I/O capabilities, including a thread pool.
- **C.** A CSS preprocessor used by Node.js.
- **D.** A frontend rendering library.

**Answer:** B. A library that provides the Event Loop infrastructure and asynchronous I/O capabilities, including a thread pool.

**Explanation:** libuv helps Node.js handle asynchronous operations and provides a thread pool for operations that should not block the main JavaScript thread. V8 executes JavaScript; libuv handles async I/O infrastructure.

---

## 10. What is the difference between synchronous and asynchronous operations in Node.js?

- **A.** Synchronous operations are faster than asynchronous ones.
- **B.** Synchronous operations block execution until complete; asynchronous operations start work and allow the app to continue.
- **C.** Asynchronous operations always run on a separate server.
- **D.** There is no difference in Node.js.

**Answer:** B. Synchronous operations block execution until complete; asynchronous operations start work and allow the app to continue.

**Explanation:** A synchronous operation blocks the thread until it finishes. An asynchronous operation starts work and lets the application continue — the result is handled later via callback, Promise, or async/await.

---

## 11. Why should blocking operations be avoided in Node.js?

- **A.** Blocking operations use less memory.
- **B.** A blocking operation keeps the main thread busy, preventing it from handling other requests and causing delays.
- **C.** Blocking operations are faster than non-blocking ones.
- **D.** Node.js does not support blocking operations at all.

**Answer:** B. A blocking operation keeps the main thread busy, preventing it from handling other requests and causing delays.

**Explanation:** Since Node.js runs JavaScript on a single main thread, one expensive synchronous operation can delay many incoming requests. This is why asynchronous I/O is preferred for server-side code.

---

## 12. When is Node.js NOT an ideal choice?

- **A.** For REST APIs and real-time applications.
- **B.** For CPU-heavy synchronous computations that block the main thread for extended periods.
- **C.** For chat applications and streaming services.
- **D.** For microservices with many concurrent I/O connections.

**Answer:** B. For CPU-heavy synchronous computations that block the main thread for extended periods.

**Explanation:** Node.js excels at I/O-heavy applications like APIs, real-time apps, and streaming. For heavy CPU work, consider Worker Threads, separate processes, or background job services to avoid blocking the main thread.

---

## 13. What is the Node.js Event Loop?

- **A.** A mechanism that creates a new thread for every callback.
- **B.** A mechanism that coordinates asynchronous callbacks so Node.js can handle many I/O operations without blocking.
- **C.** A loop that runs synchronous code repeatedly.
- **D.** A debugging tool built into Node.js.

**Answer:** B. A mechanism that coordinates asynchronous callbacks so Node.js can handle many I/O operations without blocking.

**Explanation:** The Event Loop allows Node.js to handle asynchronous operations while JavaScript execution remains on the main thread. When async work completes, the Event Loop schedules callbacks for execution.

---

## 14. Which of the following is a phase of the Node.js Event Loop?

- **A.** Rendering phase
- **B.** Poll phase
- **C.** DOM update phase
- **D.** CSS parsing phase

**Answer:** B. Poll phase

**Explanation:** The Event Loop phases include Timers, Pending callbacks, Idle/Prepare, Poll, Check, and Close callbacks. The Poll phase retrieves new I/O events and executes I/O-related callbacks.

---

## 15. What are the commonly discussed Event Loop phases?

- **A.** Parse, Compile, Execute, Render
- **B.** Timers, Pending callbacks, Idle/Prepare, Poll, Check, Close callbacks
- **C.** Request, Process, Response, Cleanup
- **D.** Read, Write, Transform, Close

**Answer:** B. Timers, Pending callbacks, Idle/Prepare, Poll, Check, Close callbacks

**Explanation:** Different types of callbacks are handled in different phases. Timers handle `setTimeout`/`setInterval`, Check handles `setImmediate`, and Close handles cleanup callbacks.

---

## 16. What is the relationship between the call stack, callback queue, and Event Loop?

- **A.** The call stack and callback queue are the same thing.
- **B.** The call stack tracks executing functions; queues hold ready callbacks; the Event Loop coordinates when queued work enters the call stack.
- **C.** The Event Loop replaces the call stack entirely.
- **D.** The callback queue directly executes JavaScript without the call stack.

**Answer:** B. The call stack tracks executing functions; queues hold ready callbacks; the Event Loop coordinates when queued work enters the call stack.

**Explanation:** The call stack keeps track of currently executing functions. Callback queues hold callbacks ready to be processed. The Event Loop checks when the call stack is empty and moves queued callbacks into execution.

---

## 17. What is the difference between microtasks and macrotasks in Node.js?

- **A.** Microtasks and macrotasks are identical in priority.
- **B.** Microtasks (like Promise callbacks) are processed with higher priority before the Event Loop moves to macrotask phases (like timers).
- **C.** Macrotasks always execute before microtasks.
- **D.** Microtasks can only be created using `setTimeout`.

**Answer:** B. Microtasks (like Promise callbacks) are processed with higher priority before the Event Loop moves to macrotask phases (like timers).

**Explanation:** Promise callbacks are microtasks and are processed before macrotask-style work like timers and `setImmediate`. `process.nextTick()` has even stronger scheduling priority than Promise microtasks.

---

## 18. What is the difference between `process.nextTick()` and `setImmediate()`?

- **A.** They are exactly the same and interchangeable.
- **B.** `process.nextTick()` runs before the Event Loop continues to later phases; `setImmediate()` runs in the check phase.
- **C.** `setImmediate()` has higher priority than `process.nextTick()`.
- **D.** `process.nextTick()` only works in the browser.

**Answer:** B. `process.nextTick()` runs before the Event Loop continues to later phases; `setImmediate()` runs in the check phase.

**Explanation:** `process.nextTick()` callbacks run before the Event Loop moves forward; `setImmediate()` is scheduled for the check phase. Excessive `process.nextTick()` use can starve I/O operations.

---

## 19. What is the difference between `setTimeout()` and `setImmediate()`?

- **A.** `setTimeout()` always runs before `setImmediate()`.
- **B.** `setTimeout(fn, 0)` schedules after a minimum delay; `setImmediate()` runs in the check phase; their order is context-dependent.
- **C.** `setImmediate()` is deprecated and should not be used.
- **D.** Both are synchronous functions.

**Answer:** B. `setTimeout(fn, 0)` schedules after a minimum delay; `setImmediate()` runs in the check phase; their order is context-dependent.

**Explanation:** Inside an I/O callback, `setImmediate()` commonly executes before a zero-delay `setTimeout()`. At the top level, their order is not guaranteed.

---

## 20. What is the typical execution order: `process.nextTick()`, Promises, `setTimeout()`, `setImmediate()`?

- **A.** setTimeout → setImmediate → Promise → nextTick
- **B.** Synchronous code → process.nextTick → Promise microtasks → then Event Loop phases (timers, setImmediate)
- **C.** Promise → setTimeout → nextTick → setImmediate
- **D.** All execute at the same time in parallel.

**Answer:** B. Synchronous code → process.nextTick → Promise microtasks → then Event Loop phases (timers, setImmediate)

**Explanation:** Current synchronous code finishes first, then `process.nextTick()` callbacks, then Promise microtasks, then the Event Loop continues with its phases for timers and `setImmediate()`.

---

## 21. Why can `process.nextTick()` be dangerous if used excessively?

- **A.** It causes memory leaks in the V8 engine.
- **B.** It can starve the Event Loop by continuously running before other phases, delaying I/O, timers, and other work.
- **C.** It automatically crashes the Node.js process after 100 calls.
- **D.** It disables the garbage collector.

**Answer:** B. It can starve the Event Loop by continuously running before other phases, delaying I/O, timers, and other work.

**Explanation:** Since `process.nextTick()` callbacks are processed before the Event Loop continues, continuously scheduling more can prevent I/O, timers, and other work from being handled — this is called Event Loop starvation.

---

## 22. What happens when you execute a CPU-heavy operation inside a Node.js request handler?

- **A.** Node.js automatically moves it to a worker thread.
- **B.** The main JavaScript thread gets blocked, causing other users' requests to become slow or delayed.
- **C.** CPU-heavy operations are ignored by Node.js.
- **D.** The operation is automatically split into chunks.

**Answer:** B. The main JavaScript thread gets blocked, causing other users' requests to become slow or delayed.

**Explanation:** A CPU-heavy synchronous operation blocks the main thread, preventing the Event Loop from processing other callbacks. For CPU-heavy work, consider Worker Threads, separate processes, or background job services.

---

## 23. How does Node.js handle asynchronous I/O operations?

- **A.** By creating a new process for each operation.
- **B.** It starts the operation asynchronously, continues other work, and processes the result via callback/Promise when ready.
- **C.** It pauses all other operations until the I/O completes.
- **D.** It sends all I/O operations to the browser.

**Answer:** B. It starts the operation asynchronously, continues other work, and processes the result via callback/Promise when ready.

**Explanation:** Node.js does not wait synchronously for I/O. The underlying runtime, OS, or libuv mechanisms handle the operation, and when it's ready, the associated callback is scheduled for execution.

---

## 24. What is the Node.js thread pool used for?

- **A.** Running all JavaScript code on multiple threads.
- **B.** Handling certain operations like file I/O, DNS lookups, and crypto that should not block the main thread.
- **C.** Creating new HTTP servers automatically.
- **D.** Managing frontend rendering operations.

**Answer:** B. Handling certain operations like file I/O, DNS lookups, and crypto that should not block the main thread.

**Explanation:** The libuv-managed thread pool handles operations like file-system operations, DNS lookups, and cryptographic operations. Normal JavaScript execution still happens on the main thread.

---

## 25. Which operations typically use the libuv thread pool?

- **A.** All HTTP network requests.
- **B.** Some file-system operations, `dns.lookup()`, certain crypto and compression operations.
- **C.** DOM rendering operations.
- **D.** Only `console.log()` statements.

**Answer:** B. Some file-system operations, `dns.lookup()`, certain crypto and compression operations.

**Explanation:** Network sockets generally rely on the OS's async networking facilities. The thread pool is mainly used for file I/O, DNS lookups, crypto, and compression operations.

---

## 26. What is a callback in Node.js?

- **A.** A function that runs before the main code.
- **B.** A function passed as an argument to be executed later, usually after an asynchronous operation completes.
- **C.** A variable that stores the result of an operation.
- **D.** A built-in Node.js module.

**Answer:** B. A function passed as an argument to be executed later, usually after an asynchronous operation completes.

**Explanation:** Callbacks were one of the original patterns for asynchronous programming in Node.js. Example: `fs.readFile("data.txt", (err, data) => { ... })` — the arrow function is the callback.

---

## 27. What is callback hell?

- **A.** When callbacks execute too fast.
- **B.** Deeply nested asynchronous callbacks that make code difficult to read, maintain, and handle errors in.
- **C.** When a callback returns `null`.
- **D.** A Node.js module for error handling.

**Answer:** B. Deeply nested asynchronous callbacks that make code difficult to read, maintain, and handle errors in.

**Explanation:** Callback hell occurs when multiple async operations are nested inside each other. It can be avoided using Promises, `async/await`, and breaking code into small reusable functions.

---

## 28. What is the error-first callback pattern?

- **A.** The callback always throws an error first.
- **B.** The first argument of the callback is the error (null if success), and the second is the result.
- **C.** Errors are passed as the last argument.
- **D.** The callback only handles errors, never success.

**Answer:** B. The first argument of the callback is the error (null if success), and the second is the result.

**Explanation:** This is a standard Node.js convention: `callback(error, result)`. If `error` is not null, the operation failed. This pattern ensures consistent error checking across Node.js APIs.

---

## 29. What is a Promise in JavaScript?

- **A.** A synchronous function that returns immediately.
- **B.** An object representing the eventual result of an asynchronous operation, which can be Pending, Fulfilled, or Rejected.
- **C.** A callback that runs only once.
- **D.** A Node.js-specific data structure for storing arrays.

**Answer:** B. An object representing the eventual result of an asynchronous operation, which can be Pending, Fulfilled, or Rejected.

**Explanation:** Promises provide a structured way to handle asynchronous operations using `.then()`, `.catch()`, `.finally()`, or `async/await`. They replaced deeply nested callbacks for cleaner async code.

---

## 30. What are the three states of a Promise?

- **A.** Start, Run, Stop
- **B.** Pending, Fulfilled, Rejected
- **C.** Open, Closed, Error
- **D.** Active, Inactive, Terminated

**Answer:** B. Pending, Fulfilled, Rejected

**Explanation:** A Promise starts as Pending. It becomes Fulfilled when the operation succeeds, or Rejected when it fails. Once settled (fulfilled or rejected), it does not change to another state.

---

## 31. What advantage do Promises have over callbacks?

- **A.** Promises are always faster than callbacks.
- **B.** Promises provide structured chaining, better error handling, and work naturally with `async/await`.
- **C.** Callbacks cannot be used with Node.js.
- **D.** Promises run on separate threads.

**Answer:** B. Promises provide structured chaining, better error handling, and work naturally with `async/await`.

**Explanation:** Promises allow chaining `.then()` calls instead of nesting callbacks. They also provide `.catch()` for centralized error handling and integrate smoothly with `async/await` syntax.

---

## 32. What does `async/await` do in JavaScript?

- **A.** It makes synchronous code run asynchronously.
- **B.** It provides syntax that makes Promise-based asynchronous code easier to read; `await` pauses the async function until the Promise settles.
- **C.** It blocks the entire Node.js process until the operation finishes.
- **D.** It replaces the Event Loop in Node.js.

**Answer:** B. It provides syntax that makes Promise-based asynchronous code easier to read; `await` pauses the async function until the Promise settles.

**Explanation:** An `async` function returns a Promise. `await` pauses that function until the Promise resolves, but does NOT block the entire Node.js process — other requests can still be handled.

---

## 33. What is the difference between `Promise.all()` and `Promise.allSettled()`?

- **A.** They are identical in behavior.
- **B.** `Promise.all()` rejects if any Promise rejects; `Promise.allSettled()` waits for all and gives the status of each.
- **C.** `Promise.allSettled()` rejects if any Promise rejects.
- **D.** `Promise.all()` only accepts two Promises.

**Answer:** B. `Promise.all()` rejects if any Promise rejects; `Promise.allSettled()` waits for all and gives the status of each.

**Explanation:** Use `Promise.all()` when all operations must succeed. Use `Promise.allSettled()` when you want results from every operation regardless of individual failures.

---

## 34. What is the difference between `Promise.race()` and `Promise.any()`?

- **A.** `Promise.race()` settles with the first fulfilled or rejected Promise; `Promise.any()` waits for the first fulfilled one.
- **B.** They are exactly the same.
- **C.** `Promise.any()` settles with the first rejected Promise.
- **D.** `Promise.race()` waits for all Promises to finish.

**Answer:** A. `Promise.race()` settles with the first fulfilled or rejected Promise; `Promise.any()` waits for the first fulfilled one.

**Explanation:** `Promise.race()` resolves/rejects with whichever Promise settles first. `Promise.any()` waits for the first successful one and only rejects if ALL input Promises reject.

---

## 35. How do you properly handle errors with `async/await`?

- **A.** Errors are handled automatically without any code.
- **B.** Use `try/catch` blocks around awaited operations; in Express, pass errors to error-handling middleware with `next(error)`.
- **C.** Use `if/else` statements after every `await`.
- **D.** Errors in `async/await` cannot be caught.

**Answer:** B. Use `try/catch` blocks around awaited operations; in Express, pass errors to error-handling middleware with `next(error)`.

**Explanation:** Wrapping `await` calls in `try/catch` catches rejected Promises. In Express, calling `next(error)` sends errors to centralized error-handling middleware for consistent responses.

---

## 36. What happens if an async function throws an error?

- **A.** The Node.js process crashes immediately.
- **B.** The returned Promise becomes rejected, which can be caught with `try/catch` or `.catch()`.
- **C.** The error is silently ignored.
- **D.** The function returns `undefined`.

**Answer:** B. The returned Promise becomes rejected, which can be caught with `try/catch` or `.catch()`.

**Explanation:** An `async` function always returns a Promise. If an error is thrown inside it, the Promise rejects. The rejection can be handled with `try/catch` around `await` or with `.catch()`.

---

## 37. What are modules in Node.js?

- **A.** Global variables shared across all files.
- **B.** Reusable pieces of code that can expose functionality to other parts of an application.
- **C.** HTML templates used for rendering.
- **D.** CSS stylesheets imported into Node.js.

**Answer:** B. Reusable pieces of code that can expose functionality to other parts of an application.

**Explanation:** Node.js provides built-in modules (`fs`, `http`, `path`, `crypto`) and supports custom modules. Third-party modules can be installed through npm.

---

## 38. What is the difference between CommonJS and ES Modules?

- **A.** CommonJS uses `import/export`; ES Modules use `require/module.exports`.
- **B.** CommonJS uses `require()` and `module.exports`; ES Modules use `import` and `export`.
- **C.** They are the same module system with different names.
- **D.** ES Modules only work in browsers, not in Node.js.

**Answer:** B. CommonJS uses `require()` and `module.exports`; ES Modules use `import` and `export`.

**Explanation:** CommonJS is the traditional Node.js module system. ES Modules is the standard JavaScript module system. Modern Node.js supports both, depending on project configuration.

---

## 39. What is the difference between `require()` and `import`?

- **A.** `require()` is ES Modules; `import` is CommonJS.
- **B.** `require()` belongs to CommonJS; `import` belongs to ES Modules — they differ in semantics and loading behavior.
- **C.** Both are identical and interchangeable.
- **D.** `import` can only be used in the browser.

**Answer:** B. `require()` belongs to CommonJS; `import` belongs to ES Modules — they differ in semantics and loading behavior.

**Explanation:** It's best to follow one consistent module style in a project. `require()` is synchronous CommonJS loading; `import` is the standard ES Module syntax.

---

## 40. What is module caching in Node.js?

- **A.** Node.js never caches modules.
- **B.** When a CommonJS module is loaded with `require()`, Node.js caches it and returns the cached version on subsequent requires.
- **C.** Module caching means modules are stored on disk as temporary files.
- **D.** Module caching only works with ES Modules.

**Answer:** B. When a CommonJS module is loaded with `require()`, Node.js caches it and returns the cached version on subsequent requires.

**Explanation:** This improves efficiency and means module-level state is shared across imports. If you `require("./config")` twice, you get the same cached module instance.

---

## 41. What happens when you require the same module multiple times?

- **A.** The module code executes every time.
- **B.** Node.js returns the same cached module instance; the module code does not re-execute.
- **C.** An error is thrown for duplicate requires.
- **D.** Each require creates a completely new module with separate state.

**Answer:** B. Node.js returns the same cached module instance; the module code does not re-execute.

**Explanation:** After the first `require()`, the module is cached. Later calls return the cached instance. This is important when a module contains state — multiple files will share the same state.

---

## 42. What is `package.json`?

- **A.** A file that stores database credentials.
- **B.** The main configuration file for a Node.js project containing project name, version, scripts, dependencies, and metadata.
- **C.** A CSS configuration file.
- **D.** A file used only for testing.

**Answer:** B. The main configuration file for a Node.js project containing project name, version, scripts, dependencies, and metadata.

**Explanation:** `package.json` defines the project's dependencies, scripts (like `start` and `dev`), entry points, version, and other configuration. It's essential for every Node.js project.

---

## 43. What is the difference between `dependencies` and `devDependencies`?

- **A.** They are the same and interchangeable.
- **B.** `dependencies` are needed at runtime; `devDependencies` are only needed during development, testing, or building.
- **C.** `devDependencies` are always installed in production.
- **D.** `dependencies` are only for frontend packages.

**Answer:** B. `dependencies` are needed at runtime; `devDependencies` are only needed during development, testing, or building.

**Explanation:** Example: `express` goes in `dependencies` (needed at runtime); `nodemon` or `jest` go in `devDependencies` (development/testing tools).

---

## 44. What is the purpose of `package-lock.json`?

- **A.** It prevents anyone from modifying `package.json`.
- **B.** It records the exact resolved versions of installed packages for consistent dependency installation across environments.
- **C.** It is a backup of `package.json`.
- **D.** It stores environment variables.

**Answer:** B. It records the exact resolved versions of installed packages for consistent dependency installation across environments.

**Explanation:** The lock file ensures that dev, CI, and production environments install the same dependency tree, improving reproducibility and preventing unexpected version differences.

---

## 45. What is the difference between `npm install` and `npm ci`?

- **A.** They are exactly the same command.
- **B.** `npm install` can update the lock file; `npm ci` does a clean install using the lock file exactly, ideal for CI/CD.
- **C.** `npm ci` installs only dev dependencies.
- **D.** `npm install` only works on Linux.

**Answer:** B. `npm install` can update the lock file; `npm ci` does a clean install using the lock file exactly, ideal for CI/CD.

**Explanation:** `npm ci` removes `node_modules` first and installs exactly what the lock file specifies. It's faster and more reliable for CI/CD pipelines where reproducibility is critical.

---

## 46. In semantic versioning `^2.4.1`, what does the `^` (caret) allow?

- **A.** Only exact version 2.4.1.
- **B.** Compatible minor and patch updates within major version 2 (e.g., 2.5.0, 2.4.3 are okay, but 3.0.0 is not).
- **C.** Any version including major updates.
- **D.** Only patch updates (2.4.x).

**Answer:** B. Compatible minor and patch updates within major version 2 (e.g., 2.5.0, 2.4.3 are okay, but 3.0.0 is not).

**Explanation:** Semantic versioning: MAJOR.MINOR.PATCH. `^` allows minor and patch updates within the same major version. `~` is more restrictive — generally only patch updates.

---

## 47. What is the Node.js `fs` module?

- **A.** A framework for building frontend UIs.
- **B.** A built-in module for working with the file system — reading, writing, updating, and deleting files.
- **C.** A module for handling CSS files.
- **D.** A third-party database driver.

**Answer:** B. A built-in module for working with the file system — reading, writing, updating, and deleting files.

**Explanation:** The `fs` module provides both synchronous and asynchronous APIs for file operations like `readFile`, `writeFile`, `unlink`, `mkdir`, and working with file metadata.

---

## 48. What is the difference between `fs.readFile()` and `fs.readFileSync()`?

- **A.** Both are asynchronous.
- **B.** `fs.readFile()` is asynchronous (non-blocking); `fs.readFileSync()` is synchronous (blocks the thread until complete).
- **C.** `fs.readFileSync()` is faster because it's non-blocking.
- **D.** `fs.readFile()` can only read JSON files.

**Answer:** B. `fs.readFile()` is asynchronous (non-blocking); `fs.readFileSync()` is synchronous (blocks the thread until complete).

**Explanation:** For server request handling, asynchronous APIs are preferred because they don't block the main thread. Sync versions are acceptable during startup or CLI tools.

---

## 49. What is a Buffer in Node.js?

- **A.** A type of JavaScript array.
- **B.** An object used to work with raw binary data like files, images, network packets, and video.
- **C.** A string encoding format.
- **D.** A caching mechanism for HTTP responses.

**Answer:** B. An object used to work with raw binary data like files, images, network packets, and video.

**Explanation:** Buffers represent bytes rather than normal JavaScript text. They are essential for handling binary data in file systems, streams, networking, and other low-level operations.

---

## 50. Why are Buffers needed in Node.js?

- **A.** JavaScript strings can handle all types of data efficiently.
- **B.** Servers often need to handle raw binary data (images, files, video) which JavaScript strings are not designed for.
- **C.** Buffers are only used for logging.
- **D.** Buffers replace the `fs` module entirely.

**Answer:** B. Servers often need to handle raw binary data (images, files, video) which JavaScript strings are not designed for.

**Explanation:** JavaScript strings are designed for text, but backend applications need to handle raw binary data. Buffers provide an efficient way to store and process bytes directly.

---

## 51. What are Streams in Node.js?

- **A.** A way to load complete files into memory at once.
- **B.** A way to process data piece by piece (in chunks) instead of loading everything into memory at once.
- **C.** A type of database connection.
- **D.** A frontend rendering technique.

**Answer:** B. A way to process data piece by piece (in chunks) instead of loading everything into memory at once.

**Explanation:** Streams are especially useful for large files, videos, network data, and continuous data. They keep memory usage controlled by processing data in small chunks.

---

## 52. What are the four types of Streams in Node.js?

- **A.** Input, Output, Error, Log
- **B.** Readable, Writable, Duplex, Transform
- **C.** Get, Post, Put, Delete
- **D.** Open, Close, Read, Write

**Answer:** B. Readable, Writable, Duplex, Transform

**Explanation:** Readable reads data, Writable writes data, Duplex can read and write, and Transform reads data, transforms it, and produces output.

---

## 53. What is the difference between a Buffer and a Stream?

- **A.** They are the same thing.
- **B.** A Buffer holds bytes in memory; a Stream processes data progressively over time in chunks.
- **C.** A Stream holds all data in memory; a Buffer processes chunks.
- **D.** Buffers are for text; Streams are for numbers.

**Answer:** B. A Buffer holds bytes in memory; a Stream processes data progressively over time in chunks.

**Explanation:** For small data, a Buffer is fine. For large files, Streams prevent loading the entire file into memory at once, reducing memory pressure.

---

## 54. Why should you use Streams when handling large files?

- **A.** Streams are slower but use more memory.
- **B.** Streams process the file in chunks, keeping memory usage controlled instead of loading the entire file at once.
- **C.** Streams automatically compress files.
- **D.** Large files cannot be read without Streams.

**Answer:** B. Streams process the file in chunks, keeping memory usage controlled instead of loading the entire file at once.

**Explanation:** Loading a 2 GB file into memory uses 2 GB of RAM. Streams process it in small chunks, keeping memory usage predictable and manageable.

---

## 55. What is backpressure in Node.js Streams?

- **A.** When the stream runs out of data to read.
- **B.** When data is produced faster than the consumer can process it, requiring flow control to prevent overwhelming.
- **C.** When a stream has no listeners.
- **D.** When the file system is full.

**Answer:** B. When data is produced faster than the consumer can process it, requiring flow control to prevent overwhelming.

**Explanation:** Backpressure is a flow control mechanism. If a readable stream produces data faster than the writable stream can consume it, the stream signals to slow down production.

---

## 56. What does `.pipe()` do in Node.js?

- **A.** Creates a new file.
- **B.** Connects a readable stream to a writable stream, transferring data and handling flow control including backpressure.
- **C.** Converts a string to a Buffer.
- **D.** Closes a database connection.

**Answer:** B. Connects a readable stream to a writable stream, transferring data and handling flow control including backpressure.

**Explanation:** `.pipe()` simplifies data transfer between streams: `readableStream.pipe(writableStream)`. It handles data flow, backpressure, and cleanup automatically.

---

## 57. What is EventEmitter in Node.js?

- **A.** A database model.
- **B.** A Node.js class used to create, emit, and listen to custom events.
- **C.** A CSS animation library.
- **D.** A function that sends HTTP requests.

**Answer:** B. A Node.js class used to create, emit, and listen to custom events.

**Explanation:** EventEmitter allows objects to emit named events and register listener functions. Many Node.js APIs use event-driven patterns internally.

---

## 58. How do you create and listen to custom events in Node.js?

- **A.** Use `addEventListener()` like in the browser DOM.
- **B.** Create an EventEmitter instance, register a listener with `.on()`, and trigger with `.emit()`.
- **C.** Use `document.dispatchEvent()`.
- **D.** Custom events are not supported in Node.js.

**Answer:** B. Create an EventEmitter instance, register a listener with `.on()`, and trigger with `.emit()`.

**Explanation:** `emitter.on("eventName", handler)` registers a listener. `emitter.emit("eventName", data)` triggers the event and calls all registered handlers.

---

## 59. What is the difference between `.on()` and `.once()` in EventEmitter?

- **A.** `.on()` runs only once; `.once()` runs every time.
- **B.** `.on()` runs every time the event fires; `.once()` runs only the first time and is then automatically removed.
- **C.** Both run the listener exactly once.
- **D.** `.once()` is not a valid EventEmitter method.

**Answer:** B. `.on()` runs every time the event fires; `.once()` runs only the first time and is then automatically removed.

**Explanation:** Use `.on()` for recurring events (like incoming messages) and `.once()` for one-time events (like initial connection setup).

---

## 60. What happens if an EventEmitter has too many listeners?

- **A.** Node.js automatically removes old listeners.
- **B.** Node.js shows a `MaxListenersExceededWarning` which may indicate a memory leak from listeners being added repeatedly.
- **C.** The EventEmitter stops working completely.
- **D.** Node.js crashes immediately.

**Answer:** B. Node.js shows a `MaxListenersExceededWarning` which may indicate a memory leak from listeners being added repeatedly.

**Explanation:** The warning doesn't crash the app but signals that listeners may be accumulating. The fix is to find why listeners are added repeatedly, not just increase the limit.

---

## 61. How do you create a basic HTTP server in Node.js?

- **A.** Using the `express` command-line tool only.
- **B.** Using the built-in `http` module: `http.createServer((req, res) => { ... })`.
- **C.** By importing jQuery.
- **D.** Using `fs.createServer()`.

**Answer:** B. Using the built-in `http` module: `http.createServer((req, res) => { ... })`.

**Explanation:** The built-in `http` module allows creating HTTP servers without any external packages. You handle incoming requests and send responses using the `req` and `res` objects.

---

## 62. What is the difference between Node's `http` module and Express.js?

- **A.** They are the same thing.
- **B.** `http` is low-level and built-in; Express.js is a framework built on top that adds routing, middleware, and request/response helpers.
- **C.** Express.js does not use the `http` module at all.
- **D.** The `http` module is a third-party package.

**Answer:** B. `http` is low-level and built-in; Express.js is a framework built on top that adds routing, middleware, and request/response helpers.

**Explanation:** Express.js simplifies building APIs by providing structured routing, middleware pipeline, body parsing, error handling, and many other features over the raw `http` module.

---

## 63. How does Node.js handle incoming HTTP requests?

- **A.** It creates a new process for each request.
- **B.** The server receives a request with method, URL, headers, and body; processes it; and sends a response with status code and body.
- **C.** Requests are stored in a database before processing.
- **D.** Node.js can only handle GET requests.

**Answer:** B. The server receives a request with method, URL, headers, and body; processes it; and sends a response with status code and body.

**Explanation:** Node.js provides `req` (request) and `res` (response) objects. The application processes the request data and sends back an appropriate HTTP response.

---

## 64. What is Express.js?

- **A.** A database management system.
- **B.** A lightweight web framework for Node.js that simplifies routing, middleware, API handling, and request/response management.
- **C.** A CSS framework.
- **D.** A frontend JavaScript library.

**Answer:** B. A lightweight web framework for Node.js that simplifies routing, middleware, API handling, and request/response management.

**Explanation:** Express.js is the most popular Node.js web framework. It provides structured routing (`app.get`, `app.post`), middleware support, and convenient response helpers.

---

## 65. What is middleware in Express.js?

- **A.** A database query.
- **B.** A function that runs during the request-response lifecycle, receiving `(req, res, next)` — used for authentication, logging, validation, etc.
- **C.** A frontend component.
- **D.** A Node.js built-in module.

**Answer:** B. A function that runs during the request-response lifecycle, receiving `(req, res, next)` — used for authentication, logging, validation, etc.

**Explanation:** Middleware can inspect/modify requests, perform auth checks, log requests, validate data, or pass control to the next middleware using `next()`.

---

## 66. How does the Express middleware pipeline work?

- **A.** Middleware runs in random order.
- **B.** Middleware executes in registration order; each can end the request, modify req/res, call `next()`, or pass an error.
- **C.** Only one middleware can be registered per application.
- **D.** Middleware runs after the response is sent.

**Answer:** B. Middleware executes in registration order; each can end the request, modify req/res, call `next()`, or pass an error.

**Explanation:** Express processes middleware sequentially. If a middleware doesn't call `next()` and doesn't send a response, the request hangs. Error middleware is invoked with `next(error)`.

---

## 67. What is the difference between application-level and router-level middleware?

- **A.** There is no difference.
- **B.** Application-level middleware is bound to the `app` object; router-level middleware is bound to an Express `Router` instance for modular route handling.
- **C.** Router-level middleware runs before application-level middleware.
- **D.** Application-level middleware only handles errors.

**Answer:** B. Application-level middleware is bound to the `app` object; router-level middleware is bound to an Express `Router` instance for modular route handling.

**Explanation:** Application-level uses `app.use()` / `app.get()`. Router-level uses `router.use()` / `router.get()`. Router-level middleware helps organize routes into separate modules.

---

## 68. What is the difference between `app.use()` and `app.get()`?

- **A.** They are identical.
- **B.** `app.use()` matches all HTTP methods and can mount middleware/sub-apps; `app.get()` only matches GET requests on a specific path.
- **C.** `app.get()` works for all HTTP methods.
- **D.** `app.use()` only works with POST requests.

**Answer:** B. `app.use()` matches all HTTP methods and can mount middleware/sub-apps; `app.get()` only matches GET requests on a specific path.

**Explanation:** `app.use()` is versatile — it matches all methods and is used for middleware. `app.get()`, `app.post()`, etc. are for specific HTTP method + path combinations.

---

## 69. How do you create routes in Express.js?

- **A.** By writing SQL queries.
- **B.** Using `app.get()`, `app.post()`, `app.put()`, `app.delete()` or Express Router for organized routing.
- **C.** By modifying `package.json`.
- **D.** Routes are created automatically by Express.

**Answer:** B. Using `app.get()`, `app.post()`, `app.put()`, `app.delete()` or Express Router for organized routing.

**Explanation:** Express provides HTTP method functions for defining routes. For large apps, `express.Router()` helps organize routes into separate modules.

---

## 70. What is the difference between route parameters and query parameters?

- **A.** They are the same thing.
- **B.** Route parameters are part of the URL path (`/users/:id`); query parameters are appended after `?` (`/users?role=admin`).
- **C.** Query parameters are more secure than route parameters.
- **D.** Route parameters can only be numbers.

**Answer:** B. Route parameters are part of the URL path (`/users/:id`); query parameters are appended after `?` (`/users?role=admin`).

**Explanation:** Route params are accessed via `req.params.id` and identify specific resources. Query params are accessed via `req.query.role` and are used for filtering, sorting, pagination.

---

## 71. How do you handle request body data in Express?

- **A.** Body data is available by default without any middleware.
- **B.** Use body-parsing middleware like `express.json()` to parse JSON bodies, then access data via `req.body`.
- **C.** Use `req.params` for body data.
- **D.** Body data can only be handled with a database.

**Answer:** B. Use body-parsing middleware like `express.json()` to parse JSON bodies, then access data via `req.body`.

**Explanation:** Express requires middleware to parse incoming request bodies. `express.json()` parses JSON bodies; `express.urlencoded()` parses URL-encoded form data.

---

## 72. What is the purpose of `express.json()`?

- **A.** It converts responses to JSON.
- **B.** It is middleware that parses incoming JSON request bodies and makes data available on `req.body`.
- **C.** It validates JSON schema.
- **D.** It creates JSON files on disk.

**Answer:** B. It is middleware that parses incoming JSON request bodies and makes data available on `req.body`.

**Explanation:** Without `express.json()`, `req.body` would be undefined for JSON requests. This middleware parses the raw JSON string and converts it to a JavaScript object.

---

## 73. How do you create custom middleware in Express?

- **A.** By modifying the Express source code.
- **B.** Write a function with `(req, res, next)` parameters and register it with `app.use()`.
- **C.** Custom middleware is not possible in Express.
- **D.** By creating a new npm package.

**Answer:** B. Write a function with `(req, res, next)` parameters and register it with `app.use()`.

**Explanation:** Example: `const logger = (req, res, next) => { console.log(req.method, req.url); next(); }; app.use(logger);` — this logs every request.

---

## 74. How does error-handling middleware work in Express?

- **A.** Error middleware has the same signature as normal middleware.
- **B.** Error-handling middleware has four parameters `(err, req, res, next)` and is triggered when `next(error)` is called.
- **C.** Express doesn't support error-handling middleware.
- **D.** Error middleware must be registered before all routes.

**Answer:** B. Error-handling middleware has four parameters `(err, req, res, next)` and is triggered when `next(error)` is called.

**Explanation:** Express identifies error middleware by the four-parameter signature. It should be registered AFTER routes so it catches errors from all preceding handlers.

---

## 75. What is the correct order of middleware execution in Express?

- **A.** Error middleware runs first, then routes, then body parsers.
- **B.** Body parsers and global middleware first, then routes, then error-handling middleware last.
- **C.** Routes first, then middleware.
- **D.** The order doesn't matter in Express.

**Answer:** B. Body parsers and global middleware first, then routes, then error-handling middleware last.

**Explanation:** Express processes middleware in registration order. Typically: CORS, body parsers, auth middleware → routes → error-handling middleware at the end.

---

## 76. How would you organize a large Express.js project?

- **A.** Put everything in one single file.
- **B.** Separate into folders: routes, controllers, services, models, middleware, validators, config, and utils.
- **C.** Use only one route file.
- **D.** Organization doesn't matter in Express.

**Answer:** B. Separate into folders: routes, controllers, services, models, middleware, validators, config, and utils.

**Explanation:** A well-organized project separates concerns: routes define endpoints, controllers handle request logic, services contain business logic, models define data structures, etc.

---

## 77. What makes an API RESTful?

- **A.** Using only POST requests.
- **B.** Following REST principles: resource-based URLs, proper HTTP methods (GET/POST/PUT/DELETE), stateless communication, and standard status codes.
- **C.** Using WebSockets for all communication.
- **D.** Having only one endpoint.

**Answer:** B. Following REST principles: resource-based URLs, proper HTTP methods (GET/POST/PUT/DELETE), stateless communication, and standard status codes.

**Explanation:** REST APIs use meaningful resource URLs (like `/users/:id`), proper HTTP verbs, standard status codes, and stateless design where each request contains all needed information.

---

## 78. What is the difference between GET, POST, PUT, PATCH, and DELETE?

- **A.** They are all the same HTTP method.
- **B.** GET retrieves data; POST creates; PUT replaces entirely; PATCH updates partially; DELETE removes a resource.
- **C.** GET creates data; POST retrieves data.
- **D.** PATCH and PUT are identical.

**Answer:** B. GET retrieves data; POST creates; PUT replaces entirely; PATCH updates partially; DELETE removes a resource.

**Explanation:** Each HTTP method has a specific semantic meaning: GET for reading, POST for creating, PUT for full replacement, PATCH for partial update, and DELETE for removing resources.

---

## 79. What is the difference between PUT and PATCH?

- **A.** They are exactly the same.
- **B.** PUT replaces the entire resource; PATCH updates only the specified fields.
- **C.** PATCH replaces the entire resource; PUT updates partially.
- **D.** Neither can update data.

**Answer:** B. PUT replaces the entire resource; PATCH updates only the specified fields.

**Explanation:** PUT sends the complete updated resource (missing fields may be removed). PATCH sends only the fields that need to change, leaving other fields untouched.

---

## 80. Which HTTP status code indicates "resource created successfully"?

- **A.** 200
- **B.** 201
- **C.** 404
- **D.** 500

**Answer:** B. 201

**Explanation:** Common status codes: 200 (OK), 201 (Created), 204 (No Content), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Internal Server Error).

---

## 81. How do you design a clean REST API?

- **A.** Use verb-based URLs like `/getUsers` and `/deleteUser`.
- **B.** Use noun-based resource URLs, proper HTTP methods, versioning, consistent error responses, and pagination.
- **C.** Put all logic in a single endpoint.
- **D.** Use only status code 200 for everything.

**Answer:** B. Use noun-based resource URLs, proper HTTP methods, versioning, consistent error responses, and pagination.

**Explanation:** Good REST API design: `/api/v1/users` (not `/getUsers`), proper HTTP methods, meaningful status codes, consistent error format, and support for pagination/filtering.

---

## 82. How do you validate incoming API data?

- **A.** Trust all incoming data without validation.
- **B.** Use validation libraries like Joi, Zod, or express-validator to check data types, required fields, and formats before processing.
- **C.** Validate data only in the frontend.
- **D.** Use `console.log()` to check the data.

**Answer:** B. Use validation libraries like Joi, Zod, or express-validator to check data types, required fields, and formats before processing.

**Explanation:** Never trust client input. Validate data types, required fields, string lengths, email formats, etc. using validation libraries. This prevents bad data from reaching your database.

---

## 83. Where should validation be performed in a Node.js application?

- **A.** Only in the frontend.
- **B.** In the backend always (in middleware/validators), and optionally also in the frontend for better UX.
- **C.** Only in the database.
- **D.** Validation is not needed.

**Answer:** B. In the backend always (in middleware/validators), and optionally also in the frontend for better UX.

**Explanation:** Backend validation is mandatory because frontend validation can be bypassed. Frontend validation improves user experience but should never be the only validation layer.

---

## 84. How do you handle API errors consistently?

- **A.** Return different error formats from every endpoint.
- **B.** Use centralized error-handling middleware with a consistent error response format containing status code, message, and error details.
- **C.** Ignore errors and return empty responses.
- **D.** Log errors but never send them to the client.

**Answer:** B. Use centralized error-handling middleware with a consistent error response format containing status code, message, and error details.

**Explanation:** A consistent error format like `{ success: false, status: 400, message: "..." }` helps frontend developers handle errors predictably across all endpoints.

---

## 85. How do you implement centralized error handling in Express?

- **A.** Add try/catch in every route without any shared middleware.
- **B.** Create error-handling middleware `(err, req, res, next)` registered after all routes, and use `next(error)` in route handlers.
- **C.** Use `process.exit()` on every error.
- **D.** Centralized error handling is not possible in Express.

**Answer:** B. Create error-handling middleware `(err, req, res, next)` registered after all routes, and use `next(error)` in route handlers.

**Explanation:** Custom error classes, `next(error)` in route handlers, and a centralized error middleware at the end of the middleware chain provide consistent error handling.

---

## 86. How do you implement API pagination?

- **A.** Return all records in every response.
- **B.** Accept `page` and `limit` query parameters, use `skip` and `limit` in database queries, and return total count with the data.
- **C.** Use cookies to track pagination.
- **D.** Pagination only works with SQL databases.

**Answer:** B. Accept `page` and `limit` query parameters, use `skip` and `limit` in database queries, and return total count with the data.

**Explanation:** Example: `GET /users?page=2&limit=20` → skip 20, limit 20. Return metadata like `{ data: [...], total: 150, page: 2, totalPages: 8 }` for the frontend.

---

## 87. What is the difference between authentication and authorization?

- **A.** They are the same thing.
- **B.** Authentication verifies WHO you are (identity); authorization determines WHAT you can access (permissions).
- **C.** Authorization happens before authentication.
- **D.** Authentication manages database connections.

**Answer:** B. Authentication verifies WHO you are (identity); authorization determines WHAT you can access (permissions).

**Explanation:** Authentication = "Are you logged in?" (login, JWT verification). Authorization = "Do you have permission?" (admin vs. user roles, resource access control).

---

## 88. How does JWT authentication work?

- **A.** JWT stores the password in the token.
- **B.** User logs in → server creates a signed JWT → client sends JWT with requests → server verifies the token signature and extracts user info.
- **C.** JWT requires a database lookup for every request.
- **D.** JWT is a database technology.

**Answer:** B. User logs in → server creates a signed JWT → client sends JWT with requests → server verifies the token signature and extracts user info.

**Explanation:** JWT (JSON Web Token) contains encoded user data and is signed with a secret key. The server verifies the signature without needing a database lookup for every request.

---

## 89. What is the difference between access tokens and refresh tokens?

- **A.** They are identical tokens.
- **B.** Access tokens are short-lived for API authorization; refresh tokens are long-lived to get new access tokens without re-login.
- **C.** Refresh tokens are sent with every API request.
- **D.** Access tokens never expire.

**Answer:** B. Access tokens are short-lived for API authorization; refresh tokens are long-lived to get new access tokens without re-login.

**Explanation:** Access tokens expire quickly (e.g., 15 minutes) for security. When expired, the refresh token (stored securely) is used to get a new access token without making the user log in again.

---

## 90. Where should you store JWT tokens on the frontend?

- **A.** In the URL as a query parameter.
- **B.** HttpOnly cookies are generally more secure than localStorage because they are not accessible via JavaScript (preventing XSS theft).
- **C.** In `window.title`.
- **D.** In a hidden HTML element.

**Answer:** B. HttpOnly cookies are generally more secure than localStorage because they are not accessible via JavaScript (preventing XSS theft).

**Explanation:** localStorage is accessible via JavaScript, making it vulnerable to XSS attacks. HttpOnly cookies cannot be accessed by client-side scripts, providing better security for tokens.

---

## 91. What is the difference between cookies and localStorage for authentication?

- **A.** They are identical in security.
- **B.** Cookies are sent automatically with requests and can be HttpOnly (not accessible by JS); localStorage is accessible by JavaScript and must be manually attached to requests.
- **C.** localStorage is more secure than HttpOnly cookies.
- **D.** Cookies cannot store authentication data.

**Answer:** B. Cookies are sent automatically with requests and can be HttpOnly (not accessible by JS); localStorage is accessible by JavaScript and must be manually attached to requests.

**Explanation:** HttpOnly cookies provide protection against XSS token theft. Cookies are auto-sent with requests. localStorage requires manual token attachment via headers and is vulnerable to XSS.

---

## 92. What is CORS, and why does it happen?

- **A.** CORS is a database technology.
- **B.** CORS (Cross-Origin Resource Sharing) is a browser security mechanism that blocks requests from a different origin unless the server explicitly allows it.
- **C.** CORS only affects Node.js servers, not browsers.
- **D.** CORS is a type of encryption.

**Answer:** B. CORS (Cross-Origin Resource Sharing) is a browser security mechanism that blocks requests from a different origin unless the server explicitly allows it.

**Explanation:** When React (localhost:3000) calls a Node.js API (localhost:5000), the browser blocks the request unless the server sends proper CORS headers allowing that origin.

---

## 93. How do you configure CORS securely in Express?

- **A.** Always allow all origins with `origin: '*'` in production.
- **B.** Use the `cors` middleware and specify allowed origins, methods, credentials, and headers explicitly.
- **C.** CORS cannot be configured in Express.
- **D.** Disable CORS by removing all security headers.

**Answer:** B. Use the `cors` middleware and specify allowed origins, methods, credentials, and headers explicitly.

**Explanation:** In production, specify exact allowed origins instead of `*`. Configure allowed methods, headers, and credentials. Example: `cors({ origin: 'https://yourapp.com', credentials: true })`.

---

## 94. What is the purpose of Helmet in Express?

- **A.** It adds CSS styles to responses.
- **B.** It sets various HTTP security headers to protect against common web vulnerabilities like XSS, clickjacking, and MIME sniffing.
- **C.** It compresses response data.
- **D.** It handles authentication.

**Answer:** B. It sets various HTTP security headers to protect against common web vulnerabilities like XSS, clickjacking, and MIME sniffing.

**Explanation:** Helmet middleware adds headers like Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, etc. Simple to use: `app.use(helmet())`.

---

## 95. How do you protect a Node.js API from brute-force attacks?

- **A.** Use stronger variable names.
- **B.** Use rate limiting (e.g., `express-rate-limit`) to restrict the number of requests from a single IP within a time window.
- **C.** Make the API slower for everyone.
- **D.** Remove the login endpoint.

**Answer:** B. Use rate limiting (e.g., `express-rate-limit`) to restrict the number of requests from a single IP within a time window.

**Explanation:** Rate limiting blocks excessive requests from the same IP. Additional measures include account lockout after failed attempts, CAPTCHA, and progressive delays.

---

## 96. How do you prevent NoSQL injection in a Node.js application?

- **A.** NoSQL databases are immune to injection.
- **B.** Validate and sanitize all user input; use parameterized queries; never pass raw user input directly into database queries.
- **C.** Use `eval()` to process user input safely.
- **D.** Disable all query features in the database.

**Answer:** B. Validate and sanitize all user input; use parameterized queries; never pass raw user input directly into database queries.

**Explanation:** Even MongoDB can be vulnerable to injection. Validate input types (expect string, not object), use libraries like `mongo-sanitize`, and never construct queries from raw user input.

---

## 97. How do you securely store passwords?

- **A.** Store passwords in plain text for easy comparison.
- **B.** Hash passwords with a strong algorithm like bcrypt before storing; never store plain-text passwords.
- **C.** Encrypt passwords with a reversible algorithm.
- **D.** Store passwords in `package.json`.

**Answer:** B. Hash passwords with a strong algorithm like bcrypt before storing; never store plain-text passwords.

**Explanation:** Bcrypt includes salting (preventing rainbow table attacks) and is computationally expensive (making brute-force harder). Use `bcrypt.hash()` before saving and `bcrypt.compare()` during login.

---

## 98. Why should sensitive information not be stored in source code or Git?

- **A.** It makes the code longer.
- **B.** If the repository is leaked or shared, secrets like API keys, database URLs, and passwords become exposed to attackers.
- **C.** Git cannot store string values.
- **D.** Sensitive information slows down Node.js.

**Answer:** B. If the repository is leaked or shared, secrets like API keys, database URLs, and passwords become exposed to attackers.

**Explanation:** Store secrets in environment variables or secret management services. Use `.env` files locally (never committed to Git) and `.gitignore` to exclude them.

---

## 99. How do you improve the performance of a Node.js API?

- **A.** Add more `console.log()` statements.
- **B.** Use caching (Redis), database query optimization, pagination, compression, connection pooling, and avoid blocking the main thread.
- **C.** Remove all error handling.
- **D.** Use synchronous code everywhere for simplicity.

**Answer:** B. Use caching (Redis), database query optimization, pagination, compression, connection pooling, and avoid blocking the main thread.

**Explanation:** Key strategies: cache frequently accessed data, optimize database queries with indexes, paginate large datasets, compress responses with gzip, and use async operations.

---

## 100. How do you identify why a Node.js API is slow?

- **A.** Guess randomly and change code.
- **B.** Use profiling tools, logging, monitoring, and tracing to find bottlenecks in database queries, external API calls, or CPU-heavy operations.
- **C.** Restart the server repeatedly.
- **D.** Slow APIs cannot be debugged.

**Answer:** B. Use profiling tools, logging, monitoring, and tracing to find bottlenecks in database queries, external API calls, or CPU-heavy operations.

**Explanation:** Add request timing logs, use Node.js profiler, monitor database query times, check for blocking operations, and use APM tools to identify slow endpoints.

---

## 101. What is a memory leak in Node.js?

- **A.** When Node.js runs out of disk space.
- **B.** When an application keeps references to objects it no longer needs, preventing garbage collection and causing memory to grow continuously.
- **C.** When the V8 engine crashes.
- **D.** When too many npm packages are installed.

**Answer:** B. When an application keeps references to objects it no longer needs, preventing garbage collection and causing memory to grow continuously.

**Explanation:** Common causes: global objects growing continuously, event listeners not removed, timers running unnecessarily, large caches without limits, and closures retaining unneeded data.

---

## 102. How can you detect and debug memory leaks in Node.js?

- **A.** Memory leaks cannot be detected.
- **B.** Monitor memory usage over time, use heap snapshots, Node.js `--inspect` flag with Chrome DevTools, and tools like `clinic.js`.
- **C.** Just increase server RAM.
- **D.** Remove all variables from the code.

**Answer:** B. Monitor memory usage over time, use heap snapshots, Node.js `--inspect` flag with Chrome DevTools, and tools like `clinic.js`.

**Explanation:** Compare heap snapshots taken at different times to identify objects that keep growing. `process.memoryUsage()` shows current memory stats. Chrome DevTools helps visualize heap allocations.

---

## 103. What causes high CPU usage in a Node.js application?

- **A.** Too many `require()` statements.
- **B.** CPU-heavy synchronous operations like large loops, complex calculations, JSON parsing of huge objects, or regex on large strings.
- **C.** Using too many environment variables.
- **D.** Installing Express.js.

**Answer:** B. CPU-heavy synchronous operations like large loops, complex calculations, JSON parsing of huge objects, or regex on large strings.

**Explanation:** Since Node.js runs JavaScript on a single thread, CPU-intensive synchronous work blocks the Event Loop. Use Worker Threads or child processes for heavy computation.

---

## 104. What is the difference between `cluster` and `worker_threads`?

- **A.** They are the same module.
- **B.** `cluster` creates separate Node.js processes sharing a server port; `worker_threads` create threads within the same process for CPU-heavy work.
- **C.** `worker_threads` create separate processes.
- **D.** `cluster` is for frontend use only.

**Answer:** B. `cluster` creates separate Node.js processes sharing a server port; `worker_threads` create threads within the same process for CPU-heavy work.

**Explanation:** Cluster is for scaling HTTP servers across CPU cores. Worker Threads are for offloading CPU-intensive computations without blocking the main thread, sharing memory within the process.

---

## 105. When would you use Worker Threads?

- **A.** For simple database queries.
- **B.** For CPU-heavy calculations like image processing, encryption, data transformations that would block the main Event Loop.
- **C.** For serving static files.
- **D.** Worker Threads should always be used for every operation.

**Answer:** B. For CPU-heavy calculations like image processing, encryption, data transformations that would block the main Event Loop.

**Explanation:** Worker Threads allow JavaScript to run in separate threads for CPU-bound work. They are not needed for normal async I/O operations which are already non-blocking.

---

## 106. When would you use child processes?

- **A.** For all database operations.
- **B.** When you need to run external commands, scripts, or completely separate Node.js programs that need their own memory and process space.
- **C.** Child processes are deprecated.
- **D.** For frontend rendering.

**Answer:** B. When you need to run external commands, scripts, or completely separate Node.js programs that need their own memory and process space.

**Explanation:** Child processes (`child_process` module) can run shell commands, external scripts, or separate Node.js programs. They have their own memory space, unlike Worker Threads which share memory.

---

## 107. How can Node.js use multiple CPU cores?

- **A.** Node.js automatically uses all CPU cores.
- **B.** Use the `cluster` module to fork multiple worker processes, or use a process manager like PM2 with cluster mode.
- **C.** Install more RAM.
- **D.** Multiple cores are not supported in Node.js.

**Answer:** B. Use the `cluster` module to fork multiple worker processes, or use a process manager like PM2 with cluster mode.

**Explanation:** By default, Node.js uses one CPU core. The `cluster` module forks the process to utilize multiple cores. PM2 simplifies this with `pm2 start app.js -i max`.

---

## 108. How would you scale a Node.js application when traffic increases?

- **A.** Just add more `console.log()` statements.
- **B.** Use clustering, load balancers, horizontal scaling (multiple servers), caching, database optimization, and CDN for static assets.
- **C.** Delete unnecessary code.
- **D.** Scaling is not possible with Node.js.

**Answer:** B. Use clustering, load balancers, horizontal scaling (multiple servers), caching, database optimization, and CDN for static assets.

**Explanation:** Scaling strategies include: clustering for CPU utilization, load balancers to distribute traffic, Redis for caching, database read replicas, and CDN for static content.

---

## 109. What is graceful shutdown in Node.js?

- **A.** Immediately killing the process with `process.exit(1)`.
- **B.** Stopping the server from accepting new connections while allowing in-flight requests to complete before the process exits.
- **C.** Restarting the server every hour.
- **D.** Deleting all log files before stopping.

**Answer:** B. Stopping the server from accepting new connections while allowing in-flight requests to complete before the process exits.

**Explanation:** Graceful shutdown listens for SIGTERM/SIGINT signals, stops accepting new requests, waits for active requests to finish, closes database connections, then exits cleanly.

---

## 110. How would you make a Node.js API production-ready?

- **A.** Deploy the development server directly.
- **B.** Add logging, monitoring, error handling, security (Helmet, CORS, rate limiting), graceful shutdown, clustering, environment config, and health checks.
- **C.** Remove all error handling for faster performance.
- **D.** Only use `console.log()` for monitoring.

**Answer:** B. Add logging, monitoring, error handling, security (Helmet, CORS, rate limiting), graceful shutdown, clustering, environment config, and health checks.

**Explanation:** Production-ready includes: structured logging, APM monitoring, centralized error handling, security headers, rate limiting, graceful shutdown, health check endpoints, and proper environment configuration.

---

## 111. Your API receives 10,000 requests/second. How would you handle this?

- **A.** Use a single Node.js process.
- **B.** Use clustering/PM2, load balancers, caching (Redis), connection pooling, database optimization, and horizontal scaling.
- **C.** Add more `console.log()` to track requests.
- **D.** Ignore the extra requests.

**Answer:** B. Use clustering/PM2, load balancers, caching (Redis), connection pooling, database optimization, and horizontal scaling.

**Explanation:** High traffic requires multiple strategies: cluster mode for CPU utilization, load balancers for distribution, Redis caching to reduce DB load, and horizontal scaling across multiple servers.

---

## 112. Your API is suddenly slow but CPU usage is low. How would you investigate?

- **A.** Increase CPU cores.
- **B.** Check for slow database queries, external API latency, connection pool exhaustion, unresolved Promises, or network issues.
- **C.** Restart the server immediately.
- **D.** Low CPU means the API is fine.

**Answer:** B. Check for slow database queries, external API latency, connection pool exhaustion, unresolved Promises, or network issues.

**Explanation:** Low CPU with slow responses usually indicates I/O bottlenecks. Check database query times, external service response times, connection pool limits, and whether Promises are resolving.

---

## 113. Your API takes 5 seconds due to a CPU-heavy calculation. How would you fix it?

- **A.** Let all users wait 5 seconds.
- **B.** Move the CPU-heavy work to a Worker Thread, child process, or background job queue so it doesn't block other requests.
- **C.** Make the calculation faster by removing error handling.
- **D.** Add a 5-second timeout to all routes.

**Answer:** B. Move the CPU-heavy work to a Worker Thread, child process, or background job queue so it doesn't block other requests.

**Explanation:** CPU-heavy work on the main thread blocks all other requests. Worker Threads or child processes run the calculation separately, keeping the main thread free for other requests.

---

## 114. You need to process a 2 GB file. Would you use `readFile()` or Streams?

- **A.** `readFile()` because it's simpler.
- **B.** Streams, because `readFile()` would load the entire 2 GB into memory, while Streams process it in chunks with controlled memory usage.
- **C.** Neither — 2 GB files cannot be processed in Node.js.
- **D.** `readFile()` is more memory efficient.

**Answer:** B. Streams, because `readFile()` would load the entire 2 GB into memory, while Streams process it in chunks with controlled memory usage.

**Explanation:** `readFile()` loads the entire file into memory (2 GB of RAM). Streams process the file in small chunks (e.g., 64 KB at a time), keeping memory usage predictable and manageable.

---

## 115. A user uploads a 1 GB video and your server runs out of memory. What's wrong?

- **A.** The video is too high quality.
- **B.** The upload is being buffered entirely in memory instead of being streamed to disk or cloud storage in chunks.
- **C.** Node.js cannot handle video files.
- **D.** The user's internet is too fast.

**Answer:** B. The upload is being buffered entirely in memory instead of being streamed to disk or cloud storage in chunks.

**Explanation:** Use streaming upload libraries (like `multer` with disk storage or `busboy`) that pipe the upload data directly to storage instead of buffering the entire file in memory.

---

## 116. Two API requests modify the same resource simultaneously. How would you handle this?

- **A.** Let both succeed and hope for the best.
- **B.** Use database-level locking, optimistic concurrency (version fields), or atomic operations to prevent race conditions.
- **C.** Block one user from using the API.
- **D.** Race conditions cannot happen in Node.js.

**Answer:** B. Use database-level locking, optimistic concurrency (version fields), or atomic operations to prevent race conditions.

**Explanation:** Optimistic concurrency uses a version field — if the version changed between read and write, the update is rejected. MongoDB's atomic operators like `$inc` also prevent race conditions.

---

## 117. Your API calls three independent external APIs. How would you make the requests efficiently?

- **A.** Call them one after another sequentially.
- **B.** Use `Promise.all()` to call all three in parallel since they are independent.
- **C.** Call them using `readFile()`.
- **D.** Only call one API and ignore the others.

**Answer:** B. Use `Promise.all()` to call all three in parallel since they are independent.

**Explanation:** Since the three APIs are independent, calling them in parallel with `Promise.all([api1(), api2(), api3()])` is much faster than calling them sequentially (total time = slowest API, not sum of all).

---

## 118. You have five independent API calls but one fails. Should all five fail?

- **A.** Yes, always use `Promise.all()`.
- **B.** Use `Promise.allSettled()` if you want results from all operations regardless of individual failures.
- **C.** Ignore all errors.
- **D.** Retry all five immediately.

**Answer:** B. Use `Promise.allSettled()` if you want results from all operations regardless of individual failures.

**Explanation:** `Promise.all()` rejects if any Promise rejects. If you need results from successful operations even when some fail, use `Promise.allSettled()` which returns the status of each Promise.

---

## 119. An external API sometimes takes 30 seconds to respond. How would you prevent it from slowing your API?

- **A.** Wait patiently for the full 30 seconds.
- **B.** Set a timeout on the external API request (e.g., 5 seconds); implement circuit breakers; use caching for previously successful responses.
- **C.** Remove the external API call.
- **D.** Increase your server's RAM.

**Answer:** B. Set a timeout on the external API request (e.g., 5 seconds); implement circuit breakers; use caching for previously successful responses.

**Explanation:** Timeouts prevent your API from waiting indefinitely. Circuit breakers stop calling a failing service after repeated failures. Caching reduces dependency on external APIs.

---

## 120. Your API depends on a service that is currently down. How would you handle this?

- **A.** Let your API crash too.
- **B.** Implement circuit breakers, use cached/fallback responses, queue requests for retry, and return appropriate error messages.
- **C.** Wait until the service comes back.
- **D.** Delete the code that calls the service.

**Answer:** B. Implement circuit breakers, use cached/fallback responses, queue requests for retry, and return appropriate error messages.

**Explanation:** Circuit breakers stop hammering a dead service. Fallback responses (cached data or defaults) maintain partial functionality. Message queues can retry failed operations later.

---

## 121. A user clicks Submit five times and five duplicate API requests are created. How would you prevent this?

- **A.** Tell the user to click only once.
- **B.** Use idempotency keys, disable the button after click, debounce requests, and implement server-side duplicate detection.
- **C.** Remove the submit button.
- **D.** Accept all five requests.

**Answer:** B. Use idempotency keys, disable the button after click, debounce requests, and implement server-side duplicate detection.

**Explanation:** Frontend: disable button after click, show loading state. Backend: use idempotency keys (unique request IDs) to detect and reject duplicates, or use database unique constraints.

---

## 122. Your Node.js API crashes when a particular endpoint receives large data. How would you debug it?

- **A.** Remove that endpoint.
- **B.** Set body size limits (`express.json({ limit: '10mb' })`), add input validation, check for memory-intensive operations, and add error handling.
- **C.** Increase server RAM to infinity.
- **D.** Ignore the crashes.

**Answer:** B. Set body size limits (`express.json({ limit: '10mb' })`), add input validation, check for memory-intensive operations, and add error handling.

**Explanation:** Limit request body size to prevent abuse, validate input data, add try/catch for proper error handling, and monitor memory usage to find memory-intensive operations.

---

## 123. Your server memory keeps increasing over time. How would you find the memory leak?

- **A.** Memory always increases and that's normal.
- **B.** Take heap snapshots at intervals, compare them to find growing objects, check for unremoved event listeners, growing arrays/caches, and uncleared timers.
- **C.** Restart the server every 5 minutes.
- **D.** Remove all arrays from the code.

**Answer:** B. Take heap snapshots at intervals, compare them to find growing objects, check for unremoved event listeners, growing arrays/caches, and uncleared timers.

**Explanation:** Use `node --inspect` and Chrome DevTools to take heap snapshots. Compare snapshots to find objects that keep growing. Common culprits: global arrays, event listeners, and caches without eviction.

---

## 124. Your application works locally but is slow in production. What would you check?

- **A.** Assume the production server is broken.
- **B.** Check database latency, network configuration, environment variables, missing indexes, connection pool settings, and logging overhead.
- **C.** Copy your local machine to production.
- **D.** Run the development server in production.

**Answer:** B. Check database latency, network configuration, environment variables, missing indexes, connection pool settings, and logging overhead.

**Explanation:** Production differences: higher latency to database servers, different network configurations, missing environment variables, unoptimized queries without indexes, and excessive logging.

---

## 125. An API endpoint has a large synchronous loop. What problem can this cause?

- **A.** The loop will run faster.
- **B.** It blocks the main thread, preventing the Event Loop from handling other requests — all other users experience delays.
- **C.** It automatically becomes asynchronous.
- **D.** Node.js will skip the loop.

**Answer:** B. It blocks the main thread, preventing the Event Loop from handling other requests — all other users experience delays.

**Explanation:** A long synchronous loop keeps the main thread busy. The Event Loop cannot process other callbacks, so all other incoming requests queue up and experience delays.

---

## 126. You need to generate a large PDF/report for a user. Would you do it in the request handler?

- **A.** Yes, generate it directly in the request handler.
- **B.** No — offload it to a background job/worker, return a "processing" response, and notify the user or provide a download link when ready.
- **C.** PDFs cannot be generated in Node.js.
- **D.** Send the PDF data as plain text.

**Answer:** B. No — offload it to a background job/worker, return a "processing" response, and notify the user or provide a download link when ready.

**Explanation:** Large report generation can take minutes and block the main thread. Use a background job queue (like Bull/BullMQ), return status 202 (Accepted), and let the user download when complete.

---

## 127. A request starts a long-running task (several minutes). How would you design this API?

- **A.** Make the user wait for the full duration.
- **B.** Return 202 (Accepted) immediately, process the task in a background job, and provide a status endpoint or webhook for completion notification.
- **C.** Set a very long timeout.
- **D.** Break the connection after 30 seconds.

**Answer:** B. Return 202 (Accepted) immediately, process the task in a background job, and provide a status endpoint or webhook for completion notification.

**Explanation:** Long-running tasks should be processed asynchronously. Return a job ID immediately, let the user poll a status endpoint or receive a webhook/notification when the task finishes.

---

## 128. You need to process 100,000 database records. How would you prevent running out of memory?

- **A.** Load all 100,000 records into memory at once.
- **B.** Use database cursors or stream-based queries to process records in batches/chunks instead of loading all at once.
- **C.** Process them one by one with individual queries.
- **D.** Increase server RAM to handle all records.

**Answer:** B. Use database cursors or stream-based queries to process records in batches/chunks instead of loading all at once.

**Explanation:** Loading 100K records at once can consume huge amounts of memory. Use MongoDB cursors, batch processing (e.g., 1000 at a time), or stream-based queries to keep memory usage controlled.

---

## 129. An API endpoint returning 100,000 records is extremely slow. How would you optimize it?

- **A.** Return all records faster by removing error handling.
- **B.** Implement pagination, add database indexes, select only needed fields, cache results, and use response compression.
- **C.** Return empty arrays for performance.
- **D.** Remove the endpoint.

**Answer:** B. Implement pagination, add database indexes, select only needed fields, cache results, and use response compression.

**Explanation:** Never return 100K records at once. Use pagination (page/limit), add indexes for query fields, use `.select()` to return only needed fields, cache with Redis, and enable gzip compression.

---

## 130. Your application runs on a server with 8 CPU cores. How would you utilize them?

- **A.** Node.js automatically uses all 8 cores.
- **B.** Use the `cluster` module or PM2 cluster mode to fork 8 worker processes, one per core.
- **C.** You need 8 separate applications.
- **D.** Node.js cannot use multiple cores.

**Answer:** B. Use the `cluster` module or PM2 cluster mode to fork 8 worker processes, one per core.

**Explanation:** A single Node.js process uses one core. Use `cluster.fork()` in code or `pm2 start app.js -i 8` to run 8 worker processes, each on a different core, sharing the same port.

---

## 131. Your app needs CPU-intensive image processing. Which approach would you use?

- **A.** Process images on the main thread.
- **B.** Use Worker Threads or a separate child process to avoid blocking the main Event Loop.
- **C.** Use CSS to process images.
- **D.** Send images to the frontend for processing.

**Answer:** B. Use Worker Threads or a separate child process to avoid blocking the main Event Loop.

**Explanation:** Image processing is CPU-intensive and would block the main thread. Worker Threads run in parallel within the same process. Child processes provide full isolation for heavy workloads.

---

## 132. Your Express app has 50 routes and many middleware functions. How would you organize it?

- **A.** Put everything in `server.js`.
- **B.** Use Express Router to group routes by feature/module, separate middleware, controllers, services, and validators into dedicated files/folders.
- **C.** Create 50 separate Express applications.
- **D.** Organization is not important.

**Answer:** B. Use Express Router to group routes by feature/module, separate middleware, controllers, services, and validators into dedicated files/folders.

**Explanation:** Example structure: `routes/user.routes.js`, `controllers/user.controller.js`, `services/user.service.js`, `middleware/auth.js`. Each Router handles a group of related endpoints.

---

## 133. Five different routes contain the same authentication logic. How would you avoid duplication?

- **A.** Copy-paste the authentication code in each route.
- **B.** Create a reusable authentication middleware function and apply it to all five routes with `app.use()` or `router.use()`.
- **C.** Remove authentication from all routes.
- **D.** Write the auth logic in the frontend instead.

**Answer:** B. Create a reusable authentication middleware function and apply it to all five routes with `app.use()` or `router.use()`.

**Explanation:** Create `authMiddleware.js` with the authentication logic, then use it: `router.use(authMiddleware)` applies it to all routes in that router, or add it individually to specific routes.

---

## 134. Your API has different error types from different services. How would you return consistent errors?

- **A.** Return different error formats from each endpoint.
- **B.** Create custom error classes that extend `Error`, and use centralized error-handling middleware to format all errors consistently.
- **C.** Return status 200 for all errors.
- **D.** Don't return errors at all.

**Answer:** B. Create custom error classes that extend `Error`, and use centralized error-handling middleware to format all errors consistently.

**Explanation:** Custom error classes (e.g., `NotFoundError`, `ValidationError`) carry status codes and messages. Centralized error middleware catches all and returns a consistent format like `{ success: false, status, message }`.

---

## 135. A database query takes 8 seconds. How would you identify and solve the bottleneck?

- **A.** The server code must be the problem.
- **B.** Analyze the query with `.explain()`, add proper indexes, optimize the query, consider caching, and check database server resources.
- **C.** Remove the database query.
- **D.** Increase Node.js timeout.

**Answer:** B. Analyze the query with `.explain()`, add proper indexes, optimize the query, consider caching, and check database server resources.

**Explanation:** Use MongoDB's `.explain()` to see if the query is doing a collection scan vs. index scan. Add appropriate indexes, select only needed fields, and cache frequently accessed data.

---

## 136. Your API receives a very large request body. How would you protect the server?

- **A.** Accept any size payload.
- **B.** Set body size limits using `express.json({ limit: '1mb' })` and validate the incoming data structure.
- **C.** Remove the body parser entirely.
- **D.** Log the large body and continue processing.

**Answer:** B. Set body size limits using `express.json({ limit: '1mb' })` and validate the incoming data structure.

**Explanation:** Without body size limits, an attacker could send a huge payload to crash the server or consume all memory. Set appropriate limits and validate that the data matches expected formats.

---

## 137. An attacker sends thousands of requests to your login API. How would you protect it?

- **A.** Ignore the attack.
- **B.** Use rate limiting, account lockout after failed attempts, CAPTCHA, progressive delays, and IP blocking.
- **C.** Remove the login endpoint.
- **D.** Make the login process slower for everyone.

**Answer:** B. Use rate limiting, account lockout after failed attempts, CAPTCHA, progressive delays, and IP blocking.

**Explanation:** Rate limiting restricts requests per IP. Account lockout prevents unlimited password guessing. CAPTCHA blocks automated bots. Progressive delays slow down brute-force attempts.

---

## 138. Your JWT access token expires while the user is using the application. How would you handle token refresh?

- **A.** Force the user to log in again every time.
- **B.** Use a refresh token to automatically get a new access token; implement a refresh endpoint that validates the refresh token and issues new tokens.
- **C.** Set the access token to never expire.
- **D.** Store the password and re-authenticate silently.

**Answer:** B. Use a refresh token to automatically get a new access token; implement a refresh endpoint that validates the refresh token and issues new tokens.

**Explanation:** When the access token expires, the frontend calls a `/refresh-token` endpoint with the refresh token. If valid, the server issues a new access token transparently without user interaction.

---

## 139. Your API works from Postman but fails from the React frontend because of CORS. How would you fix it?

- **A.** It's a React bug, not a server issue.
- **B.** Configure the `cors` middleware on the server to allow the frontend's origin, credentials, and required headers/methods.
- **C.** Disable CORS in the browser.
- **D.** Switch to a different backend language.

**Answer:** B. Configure the `cors` middleware on the server to allow the frontend's origin, credentials, and required headers/methods.

**Explanation:** CORS is enforced by browsers, not Postman. Configure: `cors({ origin: 'http://localhost:3000', credentials: true })`. Ensure allowed methods and headers match what the frontend sends.

---

## 140. Your server needs to restart during deployment without dropping active requests. How would you implement graceful shutdown?

- **A.** Kill the process immediately with `process.exit(1)`.
- **B.** Listen for SIGTERM, stop accepting new connections, wait for in-flight requests to complete, close database connections, then exit.
- **C.** Restart without any special handling.
- **D.** Keep the old server running alongside the new one forever.

**Answer:** B. Listen for SIGTERM, stop accepting new connections, wait for in-flight requests to complete, close database connections, then exit.

**Explanation:** Graceful shutdown: `process.on('SIGTERM', () => { server.close(() => { mongoose.disconnect(); process.exit(0); }); })`. Set a timeout to force exit if requests don't complete within a reasonable time.

---
