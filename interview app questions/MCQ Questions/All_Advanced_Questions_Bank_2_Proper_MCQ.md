# All Advanced Questions Bank 2 — Proper MCQ

> **Format:** The original concepts are preserved, but compound/definition questions have been converted into proper MCQs. Each option is a real statement/definition, not just a concept name.
> **Total MCQs:** 142

---

## 1. What is a cluster in Node.js?

- **A.** A group of Node.js processes that can use multiple CPU cores
- **B.** It is a single React component used to share state between pages.
- **C.** It is a MongoDB collection that stores requests from multiple users.
- **D.** It is a browser feature that creates one tab for every CPU core.

**Answer:** A. A group of Node.js processes that can use multiple CPU cores

**Explanation:** A Node.js cluster lets an application run multiple Node.js worker processes, usually one per CPU core. These workers can share the same server port and help use multi-core CPUs. It improves throughput and availability, but each worker has its own memory.

---

## 2. Explain some of the cluster methods in Node.js.

- **A.** It is a single React component used to share state between pages.
- **B.** Methods include fork(), disconnect(), isPrimary/isMaster, and workers
- **C.** It is a MongoDB collection that stores requests from multiple users.
- **D.** It is a browser feature that creates one tab for every CPU core.

**Answer:** B. Methods include fork(), disconnect(), isPrimary/isMaster, and workers

**Explanation:** Cluster provides methods and properties to create and manage workers, such as fork(), worker events, disconnect(), and isPrimary/isMaster. The primary process manages workers while workers handle application requests. This is useful when you want multiple Node.js processes for better CPU utilization.

---

## 3. How do you manage sessions in Node.js?

- **A.** It stores the user's complete session only inside React state.
- **B.** It replaces HTTP cookies by putting session data in CSS variables.
- **C.** Use sessions with cookies and session middleware such as express-session
- **D.** It requires every request to create a new database connection and user.

**Answer:** C. Use sessions with cookies and session middleware such as express-session

**Explanation:** Sessions keep user-specific data across multiple HTTP requests. In Express, middleware such as express-session creates a session and usually stores a session ID in a cookie, while the actual session data can be stored in memory or a database/Redis in production. This is commonly used for login state.

---

## 4. Explain the package needed for file uploading in Node.js.

- **A.** It is middleware mainly used for JSON validation and JWT creation.
- **B.** It is a React library for previewing images before an upload.
- **C.** It is a Node module used only for creating database indexes.
- **D.** Multer is commonly used for multipart/form-data file uploads

**Answer:** D. Multer is commonly used for multipart/form-data file uploads

**Explanation:** Multer is a common Express middleware for handling multipart/form-data, which is the format normally used for file uploads. It can receive files from forms, validate limits, and place them in memory or on disk. In production, uploaded files should also be validated and stored securely.

---

## 5. How do you read command-line arguments in Node.js?

- **A.** Use process.argv to read command-line arguments
- **B.** It reads arguments from the browser's window object.
- **C.** It reads arguments from CSS custom properties.
- **D.** It reads command-line values from MongoDB instead of the Node process.

**Answer:** A. Use process.argv to read command-line arguments

**Explanation:** Node.js exposes command-line arguments through process.argv. It is an array containing the Node executable, script path, and any arguments supplied by the user. For example, `node app.js dev` lets the program read `dev` from process.argv.

---

## 6. Explain the `util` module in Node.js.

- **A.** It is primarily a React routing package for navigating between pages.
- **B.** A Node.js utility module with helper functions such as promisify and callbackify
- **C.** It is a database driver that stores utility functions in MongoDB.
- **D.** It is a CSS framework for reusable utility classes.

**Answer:** B. A Node.js utility module with helper functions such as promisify and callbackify

**Explanation:** The util module provides useful Node.js helper functions. Common examples include promisify(), which converts callback-style functions into Promise-based functions, and callbackify(), which does the reverse. It also contains other utility helpers used in Node applications.

---

## 7. How do you handle environment variables in Node.js?

- **A.** It is a browser-only object that safely exposes server secrets to users.
- **B.** It stores environment values permanently inside the JavaScript bundle.
- **C.** Use process.env to access environment variables
- **D.** It is a React state object that changes automatically when deployment changes.

**Answer:** C. Use process.env to access environment variables

**Explanation:** Environment variables are accessed through process.env. They are commonly used for values that change between environments, such as PORT, database URLs, API keys, and secrets. Sensitive values should normally be kept outside source code, for example in deployment secrets or a .env file during development.

---

## 8. What is the DNS module in Node.js?

- **A.** It is mainly responsible for parsing HTML and rendering React components.
- **B.** It provides APIs for uploading files directly into MongoDB collections.
- **C.** It is a CSS module used to map domain names to component styles.
- **D.** A Node.js module used for DNS lookups and name resolution

**Answer:** D. A Node.js module used for DNS lookups and name resolution

**Explanation:** The DNS module provides APIs for resolving domain names and DNS records. For example, Node can resolve a hostname to an IP address. It is useful when an application needs lower-level control over DNS lookups.

---

## 9. What are child processes in Node.js?

- **A.** Separate programs created from the main Node.js process
- **B.** It is a lightweight React child component running inside the same render tree.
- **C.** It is a MongoDB document created automatically for each HTTP request.
- **D.** It is a browser tab that shares the exact same operating-system process.

**Answer:** A. Separate programs created from the main Node.js process

**Explanation:** Child processes are separate OS processes created by the main Node.js process. APIs such as spawn(), exec(), execFile(), and fork() allow Node to run external commands or other Node programs. They are useful for CPU-heavy or external work that should not block the main event loop.

---

## 10. How do you validate data in Node.js?

- **A.** It means trusting client input and correcting it only after database insertion.
- **B.** Validate and sanitize input using schemas/libraries before processing it
- **C.** It means validating only the CSS and HTML structure of a page.
- **D.** It means checking data only when an administrator manually reviews it.

**Answer:** B. Validate and sanitize input using schemas/libraries before processing it

**Explanation:** Validation checks whether incoming data has the expected type, format, and values before the application uses or stores it. Libraries such as Joi, Zod, or express-validator can make schema validation easier. Validation should happen at the API boundary because user input cannot be trusted.

---

## 11. What is the role of the `net` module in Node.js?

- **A.** It provides only high-level React routing and browser navigation APIs.
- **B.** It is used only for reading and writing MongoDB documents.
- **C.** It provides networking APIs such as TCP and IPC sockets
- **D.** It is a CSS networking utility that runs only during page rendering.

**Answer:** C. It provides networking APIs such as TCP and IPC sockets

**Explanation:** The net module provides low-level networking APIs, especially TCP servers and clients. It is useful when you need direct socket-level communication rather than normal HTTP. Node's HTTP module is built on top of lower-level networking functionality.

---

## 12. What is tracing in Node.js?

- **A.** It means deleting old logs so an application uses less disk space.
- **B.** It means changing CSS styles while a request is running.
- **C.** It means storing database schemas without recording execution activity.
- **D.** Tracing records execution/activity to help diagnose performance and behavior

**Answer:** D. Tracing records execution/activity to help diagnose performance and behavior

**Explanation:** Tracing means collecting information about what the application is doing and how long operations take. It helps developers find slow requests, bottlenecks, and the path of work through different services. In larger systems, tracing is often combined with logs and metrics.

---

## 13. What is the Reactor Pattern in Node.js?

- **A.** An event-driven pattern where events trigger callbacks/handlers for asynchronous work
- **B.** It means blocking the application until every I/O operation finishes.
- **C.** It is a React component pattern for rendering reusable UI cards.
- **D.** It is a database normalization pattern for splitting collections.

**Answer:** A. An event-driven pattern where events trigger callbacks/handlers for asynchronous work

**Explanation:** The Reactor Pattern is a core idea behind Node.js's event-driven architecture. Instead of waiting for an I/O operation to finish, Node registers a callback and continues doing other work. When the operation completes, the event loop invokes the appropriate handler.

---

## 14. What are global objects in Node.js?

- **A.** They are objects that must always be imported from MongoDB before use.
- **B.** Built-in objects available globally, such as process, console, Buffer, and setTimeout
- **C.** They are browser DOM objects that are automatically available in every Node process.
- **D.** They are user-created variables that become global only after a React render.

**Answer:** B. Built-in objects available globally, such as process, console, Buffer, and setTimeout

**Explanation:** Global objects are values available throughout a Node.js application without importing them in the usual way. Examples include process, console, Buffer, setTimeout(), and global. They provide access to runtime, timing, logging, and system functionality.

---

## 15. What is the Test Pyramid in Node.js?

- **A.** It recommends mostly end-to-end tests because unit tests are unreliable.
- **B.** It means testing only the database and skipping application logic.
- **C.** A testing strategy with many unit tests, fewer integration tests, and fewer end-to-end tests
- **D.** It recommends equal numbers of unit, integration, and end-to-end tests.

**Answer:** C. A testing strategy with many unit tests, fewer integration tests, and fewer end-to-end tests

**Explanation:** The Test Pyramid recommends having many fast unit tests, fewer integration tests, and a smaller number of end-to-end tests. Unit tests verify small pieces of logic, integration tests verify components working together, and E2E tests verify complete user flows. This balances confidence with test speed and maintenance cost.

---

## 16. What is the Buffer class in Node.js?

- **A.** It is a React state container used to store component props.
- **B.** It is a CSS object used to temporarily hold layout measurements.
- **C.** It is a MongoDB collection optimized for binary documents.
- **D.** A class for working with raw binary data in Node.js

**Answer:** D. A class for working with raw binary data in Node.js

**Explanation:** Buffer is Node.js's class for working with raw binary data. It is commonly used for files, network packets, streams, and other data that is not simple text. For example, when reading a file as binary data, Node may provide it as a Buffer.

---

## 17. What is the difference between `fork()` and `spawn()` methods in Node.js?

- **A.** fork() starts a Node.js child with IPC; spawn() starts a general child process with streams
- **B.** It is a lightweight React child component running inside the same render tree.
- **C.** It is a MongoDB document created automatically for each HTTP request.
- **D.** It is a browser tab that shares the exact same operating-system process.

**Answer:** A. fork() starts a Node.js child with IPC; spawn() starts a general child process with streams

**Explanation:** spawn() is a general child-process API and is useful when you want to stream a command's input/output. fork() is specifically for starting another Node.js module and provides an IPC channel for communication between parent and child. So fork is convenient for Node-to-Node process communication.

---

## 18. Give some examples of async functions.

- **A.** An async function must block the Node.js event loop until every operation completes.
- **B.** Examples include async functions using await, Promise-based APIs, and async callbacks
- **C.** An async function can return only plain strings and cannot work with Promises.
- **D.** Async code means every callback runs synchronously before the next line.

**Answer:** B. Examples include async functions using await, Promise-based APIs, and async callbacks

**Explanation:** Examples include an async function using await, a callback passed to an asynchronous API, and functions that return Promises. Async code lets Node continue other work instead of waiting synchronously for I/O. `async/await` is mainly a cleaner syntax for working with Promises.

---

## 19. How is JavaScript different from Node.js?

- **A.** Node.js is the programming language, while JavaScript is only a package manager.
- **B.** JavaScript and Node.js are two different databases with different query languages.
- **C.** JavaScript is the language; Node.js is a runtime that executes JavaScript outside the browser
- **D.** JavaScript can run only on servers, while Node.js runs only inside browsers.

**Answer:** C. JavaScript is the language; Node.js is a runtime that executes JavaScript outside the browser

**Explanation:** JavaScript is the programming language, while Node.js is a runtime that provides an environment for executing JavaScript outside the browser. Node adds APIs for files, networking, processes, streams, and servers. JavaScript itself does not inherently provide all of these Node-specific APIs.

---

## 20. What are security implementations within Node.js?

- **A.** It means trusting client input and correcting it only after database insertion.
- **B.** It means validating only the CSS and HTML structure of a page.
- **C.** It means checking data only when an administrator manually reviews it.
- **D.** Use validation, secure headers, authentication, safe dependencies, rate limiting, and input sanitization

**Answer:** D. Use validation, secure headers, authentication, safe dependencies, rate limiting, and input sanitization

**Explanation:** Node.js security includes validating and sanitizing input, using HTTPS, secure headers, authentication/authorization, rate limiting, safe password hashing, dependency updates, and secret management. The key idea is to never trust client input. Security should be applied at multiple layers rather than relying on one package.

---

## 21. What are the states used in a Promise object in Node.js?

- **A.** Pending, fulfilled, and rejected
- **B.** The states are created, compiled, and rendered.
- **C.** The states are open, closed, and locked.
- **D.** A Promise can move freely between fulfilled and rejected states forever.

**Answer:** A. Pending, fulfilled, and rejected

**Explanation:** A Promise has three states: pending, fulfilled, and rejected. It starts as pending and eventually becomes fulfilled when the operation succeeds or rejected when it fails. Once settled, a Promise does not change to another state.

---

## 22. Explain the function of exit code in Node.js.

- **A.** It is the HTTP status code returned to a browser by an Express route.
- **B.** It is the numeric status returned when a Node.js process exits
- **C.** It is the React component status stored in props.
- **D.** It is a MongoDB document ID returned after an insert.

**Answer:** B. It is the numeric status returned when a Node.js process exits

**Explanation:** An exit code is a numeric value returned when a Node.js process finishes. Conventionally, `0` means successful completion and a non-zero code indicates an error or abnormal termination. Operating systems, scripts, and process managers can use this value to detect success or failure.

---

## 23. What causes server latency and prevents scalability in Node.js?

- **A.** Latency is mainly caused by adding more asynchronous I/O and using efficient indexes.
- **B.** Scalability problems disappear automatically when every operation is synchronous.
- **C.** Blocking CPU work, slow I/O, poor queries, and event-loop blocking can cause latency
- **D.** CSS comments and HTML whitespace are normally the main server bottlenecks.

**Answer:** C. Blocking CPU work, slow I/O, poor queries, and event-loop blocking can cause latency

**Explanation:** Latency can come from blocking CPU work, slow database queries, network delays, too much synchronous code, memory pressure, or inefficient application logic. Because Node's main JavaScript thread handles the event loop, blocking it can delay many requests. Profiling, caching, efficient queries, and moving CPU-heavy work to workers can help.

---

## 24. What is a control function in Node.js?

- **A.** It is a function whose only purpose is to create a CSS selector.
- **B.** It is a MongoDB function that automatically creates indexes.
- **C.** It is a React Hook that permanently controls browser navigation.
- **D.** A function that controls or coordinates what happens next, often through a callback

**Answer:** D. A function that controls or coordinates what happens next, often through a callback

**Explanation:** A control function is generally a function that controls what happens next in a flow, often by invoking a callback or calling next(). In Express middleware, `next()` passes control to the next middleware. The exact meaning depends on the context in which the term is used.

---

## 25. When do you need modularization in Node.js?

- **A.** When code is growing, reusable, or hard to maintain as one large file
- **B.** It is primarily a React routing package for navigating between pages.
- **C.** It is a database driver that stores utility functions in MongoDB.
- **D.** It is a CSS framework for reusable utility classes.

**Answer:** A. When code is growing, reusable, or hard to maintain as one large file

**Explanation:** Modularization becomes useful when an application grows and one file starts doing too many jobs. Splitting routes, controllers, services, utilities, and data access into modules makes code easier to test, reuse, and maintain. Good modules usually have a clear responsibility.

---

## 26. Explain how blocking is prevented in Node.js.

- **A.** Blocking is prevented by converting every operation into synchronous code.
- **B.** By using non-blocking asynchronous I/O and keeping heavy work off the event loop
- **C.** Node.js prevents blocking by stopping other requests until the current one finishes.
- **D.** Blocking is solved only by increasing the browser's CSS bundle size.

**Answer:** B. By using non-blocking asynchronous I/O and keeping heavy work off the event loop

**Explanation:** Node prevents blocking mainly through asynchronous, non-blocking I/O. Instead of waiting for file, database, or network operations, Node registers the operation and continues handling other work. CPU-heavy synchronous code is still capable of blocking the event loop, so it should be avoided or moved elsewhere.

---

## 27. How many layers are there in a Node.js application architecture?

- **A.** A typical layered design puts all business rules directly inside database queries.
- **B.** Every Node.js application must have exactly one layer and cannot be separated.
- **C.** Commonly described in layers such as presentation/API, business logic, and data/access layers
- **D.** The API layer should contain every database query, UI rule, and deployment script.

**Answer:** C. Commonly described in layers such as presentation/API, business logic, and data/access layers

**Explanation:** A common Node.js architecture can be separated into presentation/API, business logic, and data-access layers. The API layer handles requests and responses, the business layer contains application rules, and the data layer communicates with databases or external services. The exact number of layers can vary by project.

---

## 28. Name the input arguments for an asynchronous queue.

- **A.** A queue needs only a CSS class and does not need a task or worker.
- **B.** Every queue implementation has exactly the same arguments regardless of library.
- **C.** A queue works by executing every job synchronously in the request thread.
- **D.** The queue, worker/task handler, and callback/result-related arguments depend on the queue implementation

**Answer:** D. The queue, worker/task handler, and callback/result-related arguments depend on the queue implementation

**Explanation:** The exact arguments depend on the asynchronous queue implementation, but a queue normally needs a task/job and a way to process it, often through a worker or callback. A result or error is then returned when processing finishes. Queues are useful for controlling concurrency and handling background work.

---

## 29. Does Node.js application buffer data?

- **A.** Yes, Node.js can buffer data, especially with streams and Buffer objects
- **B.** It is a React state container used to store component props.
- **C.** It is a CSS object used to temporarily hold layout measurements.
- **D.** It is a MongoDB collection optimized for binary documents.

**Answer:** A. Yes, Node.js can buffer data, especially with streams and Buffer objects

**Explanation:** Yes. Node.js can buffer data using Buffer objects and stream buffering. Streams may temporarily hold chunks of data when the producer and consumer operate at different speeds. Proper stream handling helps process large data without loading everything into memory at once.

---

## 30. Is it possible to run external processes with Node.js?

- **A.** It is a lightweight React child component running inside the same render tree.
- **B.** Yes, using child_process methods such as spawn(), exec(), or fork()
- **C.** It is a MongoDB document created automatically for each HTTP request.
- **D.** It is a browser tab that shares the exact same operating-system process.

**Answer:** B. Yes, using child_process methods such as spawn(), exec(), or fork()

**Explanation:** Yes. Node can run external processes with child_process APIs such as spawn(), exec(), execFile(), and fork(). This is useful for calling system commands, running scripts, or separating expensive work. Input to external commands must be handled carefully to avoid command-injection vulnerabilities.

---

## 31. Is it possible to avoid callback hell and how?

- **A.** It means a single callback with no asynchronous operations at all.
- **B.** It is a React lifecycle used to prevent nested components.
- **C.** Use Promises, async/await, named functions, or modular control-flow patterns
- **D.** It is a database indexing problem caused by too many collections.

**Answer:** C. Use Promises, async/await, named functions, or modular control-flow patterns

**Explanation:** Callback hell can be reduced by using Promises, async/await, named functions, and separating logic into smaller functions. `async/await` is often easiest to read because asynchronous code looks more like normal sequential code. Good error handling also becomes easier to structure.

---

## 32. What is the function of the `fs` module?

- **A.** It is a React module for managing component state.
- **B.** It is a browser API for changing CSS styles.
- **C.** It is a MongoDB package for creating database schemas.
- **D.** It provides APIs for working with files and the file system

**Answer:** D. It provides APIs for working with files and the file system

**Explanation:** The fs module provides file-system operations such as reading, writing, updating, deleting, renaming files, and working with directories. It provides both callback and Promise-based APIs. For large files, streams from fs are often better than reading the entire file into memory.

---

## 33. Define the `os` module in Node.js.

- **A.** It provides operating-system information such as CPU, memory, and platform details
- **B.** It is mainly used to create HTTP routes and send JSON responses.
- **C.** It is a React Hook for detecting the browser operating system.
- **D.** It is a CSS parser that returns viewport information only.

**Answer:** A. It provides operating-system information such as CPU, memory, and platform details

**Explanation:** The os module provides information about the operating system. It can provide CPU information, memory information, platform, architecture, home directory, and other system details. It is useful when application behavior depends on the host environment.

---

## 34. What is a Transform Stream in Node.js?

- **A.** It stores the complete input in memory before any output can be produced.
- **B.** A stream that transforms data while it passes through, such as compression
- **C.** It is a React component used to transform JSX into HTML.
- **D.** It is a MongoDB collection that transforms documents automatically.

**Answer:** B. A stream that transforms data while it passes through, such as compression

**Explanation:** A Transform Stream is a stream that receives data, changes or processes it, and outputs the transformed data. Compression and encryption pipelines are common examples. Because it works with chunks, it can process large data without keeping the entire input in memory.

---

## 35. How does Node.js handle concurrency if it is single-threaded?

- **A.** Blocking is prevented by converting every operation into synchronous code.
- **B.** Node.js prevents blocking by stopping other requests until the current one finishes.
- **C.** It uses the event loop and non-blocking I/O, while the OS/libuv handles many operations concurrently
- **D.** Blocking is solved only by increasing the browser's CSS bundle size.

**Answer:** C. It uses the event loop and non-blocking I/O, while the OS/libuv handles many operations concurrently

**Explanation:** Node.js is single-threaded for JavaScript execution, but it can handle many concurrent operations through the event loop, non-blocking I/O, libuv, and operating-system facilities. Some operations are handled by a thread pool or other system mechanisms. This is why one Node process can serve many simultaneous I/O-heavy requests.

---

## 36. What is the meaning of HTTP status code 500?

- **A.** It means the request was successfully created with HTTP 201.
- **B.** It means the client is authenticated and authorized with HTTP 200.
- **C.** It means the resource was permanently redirected with HTTP 301.
- **D.** It means an internal server error occurred

**Answer:** D. It means an internal server error occurred

**Explanation:** HTTP 500 means Internal Server Error. It indicates that the server encountered an unexpected problem while processing the request. The client usually cannot fix the problem directly; the server logs should be checked to find the cause.

---

## 37. What is a Node Inspector?

- **A.** A debugging tool/interface for inspecting and debugging Node.js applications
- **B.** It is a package manager used to install Node dependencies.
- **C.** It is a database used to store application logs.
- **D.** It is a CSS tool that changes production styles automatically.

**Answer:** A. A debugging tool/interface for inspecting and debugging Node.js applications

**Explanation:** Node Inspector is a debugging interface for Node.js applications. It works with debugging tools such as Chrome DevTools to inspect variables, set breakpoints, step through code, and examine call stacks. It is useful for finding runtime and logic problems.

---

## 38. When are we required to use the cluster module in Node.js?

- **A.** It is a single React component used to share state between pages.
- **B.** When the app needs to use multiple CPU cores or handle more traffic with multiple processes
- **C.** It is a MongoDB collection that stores requests from multiple users.
- **D.** It is a browser feature that creates one tab for every CPU core.

**Answer:** B. When the app needs to use multiple CPU cores or handle more traffic with multiple processes

**Explanation:** The cluster module is useful when a Node.js server needs to use multiple CPU cores or handle more traffic through multiple processes. Each worker runs independently, so one worker failing does not necessarily stop the others. For many modern deployments, process managers or containers may provide similar scaling.

---

## 39. How does Node.js use cryptography?

- **A.** Security is achieved mainly by disabling validation and trusting authenticated clients.
- **B.** Passwords should be stored as plain text so they can be recovered easily.
- **C.** Through the built-in crypto module for hashing, encryption, signing, and secure random values
- **D.** HTTPS is unnecessary when an application already uses JSON APIs.

**Answer:** C. Through the built-in crypto module for hashing, encryption, signing, and secure random values

**Explanation:** Node's crypto module provides cryptographic functionality such as hashing, encryption/decryption, digital signatures, secure random bytes, and key operations. It is useful for security-related tasks, but cryptographic primitives should be used correctly rather than custom-built.

---

## 40. How do you include an HTTP server in a Node.js module?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It works only in the browser and is not part of the Node.js/React application model.
- **C.** It requires all work to run synchronously and blocks other operations until completion.
- **D.** Use Node's http module and createServer(), then export or use the server/module as needed

**Answer:** D. Use Node's http module and createServer(), then export or use the server/module as needed

**Explanation:** Node can create an HTTP server using the built-in `http` module and `http.createServer()`. The server receives a request and response object, and `listen()` starts it on a port. This is the foundation behind many Node web frameworks.

---

## 41. What is the purpose of `EventEmitter`?

- **A.** It allows objects to emit named events and listeners to respond to them
- **B.** It is a file-system API used to read and write files.
- **C.** It is a database table that stores event records permanently.
- **D.** It is a React component used only to render DOM events.

**Answer:** A. It allows objects to emit named events and listeners to respond to them

**Explanation:** EventEmitter provides a pattern for publishing and listening for events. An object can emit a named event, and one or more listeners can respond to it. Many Node APIs use this pattern, including streams and servers.

---

## 42. Explain the child process module in Node.js.

- **A.** It is a lightweight React child component running inside the same render tree.
- **B.** It provides APIs such as spawn(), exec(), execFile(), and fork() to run child processes
- **C.** It is a MongoDB document created automatically for each HTTP request.
- **D.** It is a browser tab that shares the exact same operating-system process.

**Answer:** B. It provides APIs such as spawn(), exec(), execFile(), and fork() to run child processes

**Explanation:** The child_process module lets Node create and control separate processes. `spawn()` is good for streaming output, `exec()` is convenient for shell commands, `execFile()` runs an executable, and `fork()` starts another Node module with IPC. Choosing the right method depends on how you need to communicate with the process.

---

## 43. Explain event-driven programming in Node.js.

- **A.** It means polling continuously with blocking loops instead of responding to events.
- **B.** It is a database schema pattern unrelated to asynchronous operations.
- **C.** Programs respond to emitted events by running registered handlers
- **D.** It disables callbacks and requires every request to be synchronous.

**Answer:** C. Programs respond to emitted events by running registered handlers

**Explanation:** Event-driven programming means code responds to events rather than constantly checking whether something happened. Node registers handlers for events such as requests, connections, or completed operations. This model fits I/O-heavy applications well.

---

## 44. What is callback hell in Node.js?

- **A.** It means a single callback with no asynchronous operations at all.
- **B.** It is a React lifecycle used to prevent nested components.
- **C.** It is a database indexing problem caused by too many collections.
- **D.** A deeply nested chain of callbacks that becomes difficult to read and maintain

**Answer:** D. A deeply nested chain of callbacks that becomes difficult to read and maintain

**Explanation:** Callback hell is deeply nested asynchronous callbacks that make code difficult to read, maintain, and handle errors in. It often happens when several dependent async operations are nested inside one another. Promises, async/await, and better function structure help avoid it.

---

## 45. What are common performance bottlenecks in Node.js applications and how can they be handled?

- **A.** Common issues include blocking CPU work, slow I/O, poor DB queries, and excessive memory use; use profiling, caching, async I/O, and optimization
- **B.** Blocking is prevented by converting every operation into synchronous code.
- **C.** Node.js prevents blocking by stopping other requests until the current one finishes.
- **D.** Blocking is solved only by increasing the browser's CSS bundle size.

**Answer:** A. Common issues include blocking CPU work, slow I/O, poor DB queries, and excessive memory use; use profiling, caching, async I/O, and optimization

**Explanation:** Common bottlenecks include blocking the event loop, slow database queries, excessive network calls, memory leaks, large payloads, and inefficient algorithms. Profiling helps identify the real bottleneck before optimizing. Caching, indexes, pagination, streams, and worker threads can then be used where appropriate.

---

## 46. Explain microservices architecture in Node.js development.

- **A.** Microservices require every feature to run inside one indivisible process.
- **B.** An application is split into small independent services that communicate through APIs/events
- **C.** Microservices remove the need for network communication between services.
- **D.** Microservices always reduce operational complexity compared with a monolith.

**Answer:** B. An application is split into small independent services that communicate through APIs/events

**Explanation:** Microservices split a large application into smaller independently deployable services. Each service normally owns a specific business capability and communicates through APIs or messaging. This can improve independent scaling and deployment, but it also adds network, monitoring, and operational complexity.

---

## 47. Explain GraphQL and compare it with RESTful APIs in Node.js.

- **A.** GraphQL and REST require exactly the same endpoint and response structure.
- **B.** REST cannot use HTTP methods such as GET or POST.
- **C.** GraphQL lets clients request needed fields; REST uses resource-based endpoints and HTTP methods
- **D.** GraphQL is a CSS technology and cannot request data from a server.

**Answer:** C. GraphQL lets clients request needed fields; REST uses resource-based endpoints and HTTP methods

**Explanation:** REST exposes resources through endpoints and standard HTTP methods, while GraphQL provides a query language where the client requests the fields it needs. GraphQL can reduce over-fetching but adds schema and query complexity. REST is often simpler and works naturally with HTTP caching and standard semantics.

---

## 48. How do you deploy a Node.js application in a containerized environment using Docker?

- **A.** Docker deployment means copying source files into a browser without creating an image.
- **B.** A Docker container requires every environment variable to be hard-coded into source files.
- **C.** Containers eliminate the need for ports, startup commands, or runtime configuration.
- **D.** Create a Dockerfile, build an image, run the container, configure environment/ports, and deploy it

**Answer:** D. Create a Dockerfile, build an image, run the container, configure environment/ports, and deploy it

**Explanation:** A typical Docker deployment creates a Dockerfile, installs dependencies, copies the application, exposes the required port, and defines the startup command. The image is built and then run as a container with environment-specific configuration. Docker makes the runtime environment more consistent across machines.

---

## 49. How do you handle long-running tasks in a Node.js application without blocking the event loop?

- **A.** Use worker threads, child processes, queues, or external workers for CPU-heavy/long tasks
- **B.** It is a lightweight React child component running inside the same render tree.
- **C.** It is a MongoDB document created automatically for each HTTP request.
- **D.** It is a browser tab that shares the exact same operating-system process.

**Answer:** A. Use worker threads, child processes, queues, or external workers for CPU-heavy/long tasks

**Explanation:** Long-running or CPU-heavy tasks should not execute directly in the main event loop. They can be moved to worker_threads, child processes, background job queues, or external workers. This keeps request handling responsive while the heavy task runs separately.

---

## 50. What are security vulnerabilities in Node.js applications and how can they be mitigated?

- **A.** It means trusting client input and correcting it only after database insertion.
- **B.** Risks include XSS, injection, weak auth, dependency vulnerabilities, and DoS; mitigate with validation, secure headers, auth, updates, and rate limits
- **C.** It means validating only the CSS and HTML structure of a page.
- **D.** It means checking data only when an administrator manually reviews it.

**Answer:** B. Risks include XSS, injection, weak auth, dependency vulnerabilities, and DoS; mitigate with validation, secure headers, auth, updates, and rate limits

**Explanation:** Common vulnerabilities include injection, XSS, broken authentication, insecure dependencies, weak authorization, sensitive-data exposure, and denial-of-service risks. Mitigation includes input validation, secure headers, HTTPS, safe password hashing, dependency updates, rate limiting, and least-privilege access.

---

## 51. Explain Continuous Integration and Continuous Deployment (CI/CD) in Node.js development.

- **A.** CI/CD means manually copying files to production after every code change.
- **B.** CI/CD is only a database backup process and does not involve builds or tests.
- **C.** CI automatically builds/tests changes; CD automates delivery/deployment
- **D.** CI/CD replaces version control and makes Git unnecessary.

**Answer:** C. CI automatically builds/tests changes; CD automates delivery/deployment

**Explanation:** CI automatically runs checks such as linting, tests, and builds whenever code changes. CD automates delivering or deploying validated builds to environments. Together they reduce manual deployment mistakes and make releases more repeatable.

---

## 52. How would you design and implement a robust error-handling strategy in a large-scale Node.js application?

- **A.** The safest strategy is to expose full stack traces and secrets to every client.
- **B.** Errors should be ignored so successful requests are not affected.
- **C.** Each route should invent unrelated error formats without centralized handling.
- **D.** Use centralized error middleware, consistent error types/responses, logging, monitoring, and safe handling of async errors

**Answer:** D. Use centralized error middleware, consistent error types/responses, logging, monitoring, and safe handling of async errors

**Explanation:** A robust strategy usually has centralized error handling, consistent error types, safe client responses, structured logging, monitoring, and proper handling of async errors. Internal stack traces and secrets should not be exposed to users. Expected operational errors and unexpected programming errors should be treated appropriately.

---

## 53. How does error handling differ in synchronous and asynchronous code in Node.js?

- **A.** Synchronous code can use try/catch directly; async code uses callbacks, Promise catch, or try/catch with await
- **B.** The safest strategy is to expose full stack traces and secrets to every client.
- **C.** Errors should be ignored so successful requests are not affected.
- **D.** Each route should invent unrelated error formats without centralized handling.

**Answer:** A. Synchronous code can use try/catch directly; async code uses callbacks, Promise catch, or try/catch with await

**Explanation:** Synchronous code can normally use try/catch around the operation. Callback APIs commonly use error-first callbacks, while Promises use `.catch()` and async/await uses try/catch around awaited operations. The important point is to handle errors at the correct asynchronous boundary.

---

## 54. How do you debug a Node.js application?

- **A.** It is a package manager used to install Node dependencies.
- **B.** Use logs, breakpoints, Node Inspector/DevTools, stack traces, and profiling tools
- **C.** It is a database used to store application logs.
- **D.** It is a CSS tool that changes production styles automatically.

**Answer:** B. Use logs, breakpoints, Node Inspector/DevTools, stack traces, and profiling tools

**Explanation:** Debugging can use console/logging, stack traces, breakpoints, Node Inspector/DevTools, tests, and profiling tools. Start by reproducing the issue, inspect the failing path, identify the root cause, and verify the fix. Logs and monitoring are especially important in production.

---

## 55. What is the role of the `process` object in Node.js? Give examples of its usage.

- **A.** It reads arguments from the browser's window object.
- **B.** It reads arguments from CSS custom properties.
- **C.** It provides process information/control such as env, argv, pid, exit(), and signals
- **D.** It reads command-line values from MongoDB instead of the Node process.

**Answer:** C. It provides process information/control such as env, argv, pid, exit(), and signals

**Explanation:** The process object represents the current Node.js process. Common uses include reading `process.env`, `process.argv`, `process.pid`, handling signals, and exiting with `process.exit()`. It is also useful for inspecting runtime information.

---

## 56. What is session management in Express.js? How can it be implemented?

- **A.** It stores the user's complete session only inside React state.
- **B.** It replaces HTTP cookies by putting session data in CSS variables.
- **C.** It requires every request to create a new database connection and user.
- **D.** It stores user session data and identifies the session using a cookie; Express can use express-session

**Answer:** D. It stores user session data and identifies the session using a cookie; Express can use express-session

**Explanation:** Express session management keeps track of a user between requests. A session ID is commonly stored in a cookie while session data is stored server-side, often in Redis or another shared store for production. Cookie settings such as secure, httpOnly, and sameSite are important for security.

---

## 57. Explain the concept of middleware chaining in Express.js.

- **A.** Multiple middleware functions run in order and pass control using next()
- **B.** Middleware executes in random order and never needs to pass control.
- **C.** Only one middleware can be registered for an Express request.
- **D.** Middleware chaining is used only for styling HTML responses.

**Answer:** A. Multiple middleware functions run in order and pass control using next()

**Explanation:** Middleware chaining means multiple middleware functions execute in sequence for a request. Each middleware can modify the request/response, finish the response, or call `next()` to continue. Order matters because later middleware only runs when control reaches it.

---

## 58. What are the advantages of using a templating engine like EJS or Handlebars in Express.js?

- **A.** A template engine is used only to create database indexes.
- **B.** They generate HTML dynamically from data and are useful for server-rendered pages
- **C.** A template engine replaces the Node.js runtime completely.
- **D.** A template engine is a React state-management library.

**Answer:** B. They generate HTML dynamically from data and are useful for server-rendered pages

**Explanation:** Templating engines such as EJS or Handlebars let the server generate HTML using dynamic data. They are useful for server-rendered pages, emails, or simple web applications. They reduce repetitive HTML by allowing templates and reusable layouts/partials.

---

## 59. How do you deploy a Node.js application to a production server?

- **A.** It is a browser-only object that safely exposes server secrets to users.
- **B.** It stores environment values permanently inside the JavaScript bundle.
- **C.** Build/test the app, configure environment and process manager, use HTTPS/reverse proxy, and deploy the Node.js server
- **D.** It is a React state object that changes automatically when deployment changes.

**Answer:** C. Build/test the app, configure environment and process manager, use HTTPS/reverse proxy, and deploy the Node.js server

**Explanation:** Production deployment normally includes installing dependencies, setting production environment variables, building if needed, running the server with a process manager/container, configuring HTTPS/reverse proxy, and monitoring it. Tools such as PM2, Docker, or cloud platforms can help keep the application running.

---

## 60. Explain the purpose of the `express.static()` middleware in Express.js.

- **A.** It is middleware that performs database joins before returning API responses.
- **B.** It creates JWT tokens for every file request.
- **C.** It stores static files in React state instead of serving them from a directory.
- **D.** It serves static files such as HTML, CSS, JavaScript, and images from a directory

**Answer:** D. It serves static files such as HTML, CSS, JavaScript, and images from a directory

**Explanation:** `express.static()` serves static assets directly from a directory. For example, an Express app can expose an `uploads` or `public` folder so browsers can request images, CSS, or JavaScript files. It is different from an API route because it serves files rather than executing custom route logic.

---

## 61. What are route parameters in Express.js? How do you access them?

- **A.** They are dynamic URL values such as /users/:id, accessed through req.params
- **B.** They are query-string values after the ? and are accessed through req.query only.
- **C.** They are browser cookies and are available only through req.cookies.
- **D.** They are database indexes automatically created from the URL.

**Answer:** A. They are dynamic URL values such as /users/:id, accessed through req.params

**Explanation:** Route parameters are dynamic values in a URL, such as `/users/:id`. Express makes them available through `req.params`, so `/users/25` gives `req.params.id` as `25`. They are useful when a resource is identified by a URL value.

---

## 62. How do you handle sessions and cookies in an Express.js application?

- **A.** It stores the user's complete session only inside React state.
- **B.** Use cookies plus session middleware such as express-session, with secure cookie settings
- **C.** It replaces HTTP cookies by putting session data in CSS variables.
- **D.** It requires every request to create a new database connection and user.

**Answer:** B. Use cookies plus session middleware such as express-session, with secure cookie settings

**Explanation:** Sessions store server-side user state while cookies store small values in the browser and can be sent with requests. Express can use session middleware to combine a session ID cookie with server-side session data. Secure cookie settings are important to reduce attacks such as session theft.

---

## 63. How do you create a basic HTTP server in Node.js?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It works only in the browser and is not part of the Node.js/React application model.
- **C.** Use http.createServer() with a request handler and call listen() on a port
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** C. Use http.createServer() with a request handler and call listen() on a port

**Explanation:** A basic server can be created with `http.createServer((req, res) => { ... })` and started with `server.listen(port)`. The request object contains information about the incoming request and the response object is used to send data back. Express builds higher-level routing and middleware on top of these concepts.

---

## 64. What is the `fs` module in Node.js?

- **A.** It is a React module for managing component state.
- **B.** It is a browser API for changing CSS styles.
- **C.** It is a MongoDB package for creating database schemas.
- **D.** A Node.js module for reading, writing, updating, and managing files and directories

**Answer:** D. A Node.js module for reading, writing, updating, and managing files and directories

**Explanation:** The fs module is Node's file-system API. It supports reading and writing files, creating/removing directories, renaming files, checking metadata, and more. Promise-based fs APIs are convenient with async/await.

---

## 65. What is event-loop starvation and how can it be prevented?

- **A.** When long/blocking work prevents other callbacks from getting CPU time
- **B.** It is a lightweight React child component running inside the same render tree.
- **C.** It is a MongoDB document created automatically for each HTTP request.
- **D.** It is a browser tab that shares the exact same operating-system process.

**Answer:** A. When long/blocking work prevents other callbacks from getting CPU time

**Explanation:** Event-loop starvation occurs when one callback or a sequence of heavy tasks keeps taking CPU time and prevents other callbacks from getting a chance to run. Avoid large synchronous loops, use asynchronous APIs, and move CPU-heavy work to worker threads or child processes.

---

## 66. What are the differences between `process.nextTick()` and `setImmediate()`?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** nextTick() runs before the event loop continues to later phases; setImmediate() runs in the check phase
- **C.** It works only in the browser and is not part of the Node.js/React application model.
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** B. nextTick() runs before the event loop continues to later phases; setImmediate() runs in the check phase

**Explanation:** `process.nextTick()` schedules a callback to run after the current operation and before the event loop continues to later phases. `setImmediate()` schedules work for the check phase of the event loop. The difference matters when ordering asynchronous callbacks.

---

## 67. Can you explain how to handle security in a Node.js application?

- **A.** Security is achieved mainly by disabling validation and trusting authenticated clients.
- **B.** Passwords should be stored as plain text so they can be recovered easily.
- **C.** Validate input, use HTTPS, secure headers, authentication, authorization, safe dependencies, rate limiting, and secrets management
- **D.** HTTPS is unnecessary when an application already uses JSON APIs.

**Answer:** C. Validate input, use HTTPS, secure headers, authentication, authorization, safe dependencies, rate limiting, and secrets management

**Explanation:** Node security requires multiple layers: validate input, authenticate and authorize users, use HTTPS, secure cookies/headers, limit requests, protect secrets, update dependencies, and log suspicious activity. No single package makes an application secure by itself.

---

## 68. Can you explain the difference between CommonJS and ES modules?

- **A.** CommonJS uses import/export while ES Modules use require/module.exports.
- **B.** Both systems require exactly the same syntax in every Node.js configuration.
- **C.** Neither module system supports exporting values from a file.
- **D.** CommonJS uses require/module.exports; ES modules use import/export

**Answer:** D. CommonJS uses require/module.exports; ES modules use import/export

**Explanation:** CommonJS uses `require()` and `module.exports`, while ES Modules use `import` and `export`. ES Modules are the standard JavaScript module system and support static analysis well. Node.js supports both, depending on project configuration and file/module type.

---

## 69. What is the difference between `app.route()` and `express.Router()` in Express.js?

- **A.** app.route() groups handlers for one route; express.Router() creates modular route handlers
- **B.** app.route() creates an entire application-wide router, while Router() can only define one handler.
- **C.** express.Router() is only for CSS, while app.route() is only for MongoDB.
- **D.** Both APIs are identical and cannot be used for different route organization needs.

**Answer:** A. app.route() groups handlers for one route; express.Router() creates modular route handlers

**Explanation:** `app.route()` groups HTTP handlers for one route path, such as GET and POST for `/users`. `express.Router()` creates a modular mini-router that can contain many related routes and middleware. Routers are especially useful for organizing larger Express applications.

---

## 70. How do you serve static files from an Express.js application?

- **A.** It is middleware that performs database joins before returning API responses.
- **B.** Use express.static() middleware with the directory containing the files
- **C.** It creates JWT tokens for every file request.
- **D.** It stores static files in React state instead of serving them from a directory.

**Answer:** B. Use express.static() middleware with the directory containing the files

**Explanation:** Use `express.static()` with a directory path to expose static files. For example, `app.use(express.static('public'))` can make files inside `public` available through the browser. In production, a CDN or reverse proxy may also be used for static assets.

---

## 71. How do you use a template engine with Express.js?

- **A.** A template engine is used only to create database indexes.
- **B.** A template engine replaces the Node.js runtime completely.
- **C.** Configure an engine such as EJS/Handlebars, set the views directory, and render templates with res.render()
- **D.** A template engine is a React state-management library.

**Answer:** C. Configure an engine such as EJS/Handlebars, set the views directory, and render templates with res.render()

**Explanation:** Choose a template engine, configure it with `app.set('view engine', 'ejs')` or similar settings, store templates in the views directory, and render them with `res.render()`. Data can be passed from the route to the template. This is useful when the server needs to generate HTML dynamically.

---

## 72. Describe the difference between React class components and functional components with hooks in terms of performance and readability.

- **A.** Custom hooks are CSS classes that cannot call other React hooks.
- **B.** A custom hook must directly manipulate the DOM and cannot return values.
- **C.** Custom hooks are MongoDB procedures rather than reusable React logic.
- **D.** Functional components use hooks and are generally simpler; modern React performance depends more on rendering patterns than component type

**Answer:** D. Functional components use hooks and are generally simpler; modern React performance depends more on rendering patterns than component type

**Explanation:** Functional components with hooks are generally easier to read and reuse than class components. Modern React performance is not simply about class versus function; it depends on rendering behavior, state placement, memoization, and component design. Hooks also make reusable stateful logic easier through custom hooks.

---

## 73. What are some strategies for managing application state in large-scale React applications?

- **A.** Use local state, Context, Redux or other state libraries, server-state tools, and clear state ownership
- **B.** Context and Redux are the same library with identical APIs and responsibilities.
- **C.** Context is a database, while Redux is only a CSS framework.
- **D.** Redux cannot manage shared application state.

**Answer:** A. Use local state, Context, Redux or other state libraries, server-state tools, and clear state ownership

**Explanation:** Large applications usually combine several approaches: local useState/useReducer for local state, Context for some shared state, Redux or another store for complex client state, and tools such as React Query/TanStack Query for server state. The goal is to keep state close to where it is used and avoid unnecessary global state.

---

## 74. What is lazy loading in React?

- **A.** It means loading the entire application bundle before the first page is shown.
- **B.** Loading components or resources only when needed, often with React.lazy() and code splitting
- **C.** It permanently deletes components that are not currently visible.
- **D.** It disables JavaScript until the user closes the browser.

**Answer:** B. Loading components or resources only when needed, often with React.lazy() and code splitting

**Explanation:** Lazy loading means delaying the loading of a component or resource until it is needed. React commonly uses `React.lazy()` with `Suspense` for component code splitting. This reduces the initial JavaScript bundle and can improve initial load performance.

---

## 75. How would you integrate React with a backend server, such as Node.js or Django?

- **A.** It means trusting client input and correcting it only after database insertion.
- **B.** It means validating only the CSS and HTML structure of a page.
- **C.** Call backend APIs from React using fetch/Axios and handle loading, data, and error states
- **D.** It means checking data only when an administrator manually reviews it.

**Answer:** C. Call backend APIs from React using fetch/Axios and handle loading, data, and error states

**Explanation:** React communicates with a backend through HTTP APIs such as REST or GraphQL. `fetch()` or Axios can send requests, while the backend handles authentication, validation, database operations, and responses. React should not contain database credentials; it should communicate through the server.

---

## 76. What are common patterns for managing side effects in React?

- **A.** It should contain every piece of application logic and replace normal rendering.
- **B.** It is only a CSS optimization and has no relationship with external systems.
- **C.** It runs only once in every situation regardless of its dependencies.
- **D.** Use useEffect and custom hooks for effects such as fetching data, subscriptions, timers, and DOM work

**Answer:** D. Use useEffect and custom hooks for effects such as fetching data, subscriptions, timers, and DOM work

**Explanation:** Side effects include API calls, subscriptions, timers, DOM interactions, and integrations with external systems. `useEffect` is commonly used for effects that synchronize with external systems, while custom hooks can package reusable effect logic. Cleanup functions should remove subscriptions and timers when needed.

---

## 77. Explain the role of Redux middleware and provide examples of popular middleware.

- **A.** Middleware can intercept/modify dispatched actions; common examples include Redux Thunk and Saga
- **B.** Middleware runs only after reducers finish and cannot inspect dispatched actions.
- **C.** Middleware replaces the Redux store and makes reducers unnecessary.
- **D.** Middleware is responsible only for rendering HTML and CSS.

**Answer:** A. Middleware can intercept/modify dispatched actions; common examples include Redux Thunk and Saga

**Explanation:** Redux middleware sits between dispatching an action and the reducer. It can log actions, handle asynchronous operations, or transform actions. Redux Thunk is a common middleware that lets action creators return functions so they can perform async work and dispatch actions later.

---

## 78. Describe the difference between Server-Side Rendering (SSR), Client-Side Rendering (CSR), and Static Site Generation (SSG) in the context of React.

- **A.** CSR renders the complete page on the server, SSR renders only in the browser, and SSG creates pages after every request.
- **B.** SSR renders on the server, CSR renders in the browser, and SSG generates pages ahead of time
- **C.** SSR, CSR, and SSG all mean exactly the same rendering strategy.
- **D.** SSG means the browser receives no HTML at all.

**Answer:** B. SSR renders on the server, CSR renders in the browser, and SSG generates pages ahead of time

**Explanation:** SSR renders HTML on the server for each request or route generation, CSR sends JavaScript and renders mainly in the browser, and SSG generates HTML ahead of time. SSR/SSG can improve initial content visibility and SEO, while CSR can provide a highly interactive client experience. Frameworks such as Next.js support combinations of these approaches.

---

## 79. What are some techniques for optimizing the rendering performance of React applications?

- **A.** It means loading the entire application bundle before the first page is shown.
- **B.** It permanently deletes components that are not currently visible.
- **C.** Use memoization, code splitting, virtualization, stable props, efficient state, and profiling
- **D.** It disables JavaScript until the user closes the browser.

**Answer:** C. Use memoization, code splitting, virtualization, stable props, efficient state, and profiling

**Explanation:** Useful techniques include code splitting, lazy loading, React.memo where appropriate, useMemo/useCallback when they solve a real re-render problem, virtualization for large lists, efficient state placement, and profiling. The key is to measure expensive renders instead of blindly adding memoization.

---

## 80. How do you handle internationalization (i18n) in React applications?

- **A.** It means hard-coding one language and asking CSS to translate the text.
- **B.** It stores every translation as an image so the application cannot modify it.
- **C.** It only changes colors and fonts and has no relation to locale or language.
- **D.** Use i18n libraries, translation files, locale detection, formatting, and language switching

**Answer:** D. Use i18n libraries, translation files, locale detection, formatting, and language switching

**Explanation:** Internationalization usually involves translation resources, locale detection, pluralization, date/number formatting, and a language-switching mechanism. Libraries such as i18next can help manage this. User-visible text should come from translation resources rather than being hard-coded everywhere.

---

## 81. What are the advantages and disadvantages of using TypeScript with React?

- **A.** TypeScript adds static typing and better tooling; it can add setup and type-maintenance overhead
- **B.** TypeScript removes JavaScript from the application and guarantees that no runtime error can occur.
- **C.** TypeScript is used only for CSS and cannot type React props or state.
- **D.** TypeScript makes runtime validation of untrusted API data unnecessary.

**Answer:** A. TypeScript adds static typing and better tooling; it can add setup and type-maintenance overhead

**Explanation:** TypeScript gives React applications static types, better editor support, safer refactoring, and clearer component/API contracts. The trade-offs are extra type definitions, a learning curve, and build/type-checking complexity. It catches many mistakes at development time, but it does not eliminate runtime errors.

---

## 82. Describe the difference between React Context and Redux for managing global state.

- **A.** Context and Redux are the same library with identical APIs and responsibilities.
- **B.** Context is simple built-in shared state; Redux offers structured centralized state and tooling for larger/complex apps
- **C.** Context is a database, while Redux is only a CSS framework.
- **D.** Redux cannot manage shared application state.

**Answer:** B. Context is simple built-in shared state; Redux offers structured centralized state and tooling for larger/complex apps

**Explanation:** Context is built into React and is good for relatively simple shared values such as theme, locale, or authentication information. Redux provides a more structured global state model with actions, reducers, middleware, and developer tools. The choice depends on application complexity rather than one being universally better.

---

## 83. What is the difference between pure and regular components?

- **A.** A pure component always re-renders even when all relevant inputs are unchanged.
- **B.** A pure component cannot receive props or render children.
- **C.** A pure component avoids rendering when relevant inputs are unchanged; a regular component may render whenever its parent renders
- **D.** Pure components are database objects rather than React components.

**Answer:** C. A pure component avoids rendering when relevant inputs are unchanged; a regular component may render whenever its parent renders

**Explanation:** A pure component tries to avoid unnecessary renders when its relevant props/state have not changed. A regular component can render whenever its parent renders. Pure rendering is useful for optimization, but it depends on stable and correctly compared inputs.

---

## 84. What are some best practices for structuring and organizing React code in a large-scale application?

- **A.** It means trusting client input and correcting it only after database insertion.
- **B.** It means validating only the CSS and HTML structure of a page.
- **C.** It means checking data only when an administrator manually reviews it.
- **D.** Use feature-based folders, reusable components, hooks, clear naming, separation of concerns, and consistent conventions

**Answer:** D. Use feature-based folders, reusable components, hooks, clear naming, separation of concerns, and consistent conventions

**Explanation:** Large React projects benefit from feature-based organization, reusable components, custom hooks, clear API/service layers, consistent naming, and separation between UI and business logic. Avoid creating huge components that handle fetching, state, validation, and presentation all at once.

---

## 85. Describe the Flux architecture pattern and its relationship with Redux.

- **A.** Flux uses unidirectional data flow; Redux follows similar ideas with a centralized store, actions, and reducers
- **B.** Flux uses bidirectional data flow, while Redux avoids actions and reducers completely.
- **C.** Flux and Redux are database engines used for storing application data.
- **D.** Redux is a CSS architecture with no relationship to state management.

**Answer:** A. Flux uses unidirectional data flow; Redux follows similar ideas with a centralized store, actions, and reducers

**Explanation:** Flux introduced a unidirectional data-flow idea: actions lead to updates in a store, and the view reads from the store. Redux follows similar principles with actions, a centralized store, and reducers. Redux simplifies the original Flux ideas and provides predictable state transitions.

---

## 86. What is the purpose of the `shouldComponentUpdate` method? When should you use it?

- **A.** It always forces a component to re-render even when shouldComponentUpdate returns false.
- **B.** It lets a class component decide whether it should re-render; use it for performance optimization when appropriate
- **C.** It is a hook used only in function components.
- **D.** It is used to create HTTP routes instead of controlling rendering.

**Answer:** B. It lets a class component decide whether it should re-render; use it for performance optimization when appropriate

**Explanation:** `shouldComponentUpdate` lets a class component decide whether React should continue with a re-render. It can improve performance when rendering is expensive, but incorrect logic can prevent required UI updates. In modern function components, React.memo and hooks are more common.

---

## 87. What are custom hooks in React?

- **A.** Custom hooks are CSS classes that cannot call other React hooks.
- **B.** A custom hook must directly manipulate the DOM and cannot return values.
- **C.** Reusable functions that use hooks to share stateful logic between components
- **D.** Custom hooks are MongoDB procedures rather than reusable React logic.

**Answer:** C. Reusable functions that use hooks to share stateful logic between components

**Explanation:** Custom hooks are JavaScript functions beginning with `use` that can call other React hooks. They let you reuse stateful behavior without duplicating it across components. For example, a `useFetch` hook can package loading, data, error, and request logic.

---

## 88. What is Axios and how do you use it in React?

- **A.** Axios is a React router that changes pages without making HTTP requests.
- **B.** Axios is a database that stores API responses permanently.
- **C.** Axios is a CSS framework for styling HTTP request forms.
- **D.** Axios is an HTTP client; use it to send requests such as axios.get() or axios.post() and handle the response

**Answer:** D. Axios is an HTTP client; use it to send requests such as axios.get() or axios.post() and handle the response

**Explanation:** Axios is a promise-based HTTP client. In React, you can call `axios.get()` or `axios.post()`, then update component state with the response and handle loading/error states. Interceptors can also be used for concerns such as attaching tokens or handling common errors.

---

## 89. Explain why and how to update the state of components using a callback.

- **A.** Use the functional state updater when the new state depends on previous state, e.g. setCount(c => c + 1)
- **B.** The safest approach is to mutate the current state object directly before calling the setter.
- **C.** A state update that depends on previous state should always use a hard-coded old value.
- **D.** React state can be updated by changing CSS instead of using the state setter.

**Answer:** A. Use the functional state updater when the new state depends on previous state, e.g. setCount(c => c + 1)

**Explanation:** When new state depends on the previous state, use the functional updater form, such as `setCount(prev => prev + 1)`. This is safer when React batches multiple updates. It ensures the calculation uses the latest state value provided by React.

---

## 90. What is React Material UI?

- **A.** Material UI is a MongoDB driver for storing Material Design components.
- **B.** A React UI component library based on Material Design with ready-made components
- **C.** Material UI is a Node.js runtime rather than a React UI library.
- **D.** Material UI is a testing framework that does not provide visual components.

**Answer:** B. A React UI component library based on Material Design with ready-made components

**Explanation:** Material UI is a popular React component library based on Google's Material Design principles. It provides ready-made components such as buttons, dialogs, tables, forms, and layouts. It speeds up UI development while still allowing customization through themes and styling.

---

## 91. What is `useMemo()` in React?

- **A.** useMemo forces a component to render only once for the lifetime of the application.
- **B.** useMemo is used only for HTTP requests and cannot return calculated values.
- **C.** It memoizes a calculated value and recomputes it when dependencies change
- **D.** useMemo replaces useState and is the standard way to update component state.

**Answer:** C. It memoizes a calculated value and recomputes it when dependencies change

**Explanation:** `useMemo()` memoizes the result of a calculation and recalculates it when its dependency values change. It can help when a computation is genuinely expensive or when a stable value prevents unnecessary child renders. It should not be added everywhere because memoization itself has a cost.

---

## 92. Does React `useState` hook update immediately?

- **A.** Calling a state setter changes the current render's state value synchronously in every case.
- **B.** State setters update the DOM directly without another React render.
- **C.** React never batches state updates.
- **D.** No. State updates are scheduled; React may batch them and apply them during rendering

**Answer:** D. No. State updates are scheduled; React may batch them and apply them during rendering

**Explanation:** No. React state updates are scheduled and may be batched, so reading the state immediately after calling its setter may still show the previous value in that render. The next render receives the updated state. Functional setters are useful when multiple updates depend on previous state.

---

## 93. When to use `useCallback`, `useMemo`, and `useEffect`?

- **A.** useCallback memoizes functions, useMemo memoizes values, and useEffect handles side effects
- **B.** It should contain every piece of application logic and replace normal rendering.
- **C.** It is only a CSS optimization and has no relationship with external systems.
- **D.** It runs only once in every situation regardless of its dependencies.

**Answer:** A. useCallback memoizes functions, useMemo memoizes values, and useEffect handles side effects

**Explanation:** `useCallback` memoizes a function reference, `useMemo` memoizes a calculated value, and `useEffect` performs synchronization/side effects after rendering. They solve different problems. Use them based on an actual dependency or performance need rather than using all three by default.

---

## 94. Explain the types of routers in React.

- **A.** React has only one router and it must always use hash-based URLs.
- **B.** Common options include BrowserRouter, HashRouter, MemoryRouter, and routers from React Router
- **C.** React routers are database tables used to store navigation history.
- **D.** Routing in React cannot handle browser URLs or nested routes.

**Answer:** B. Common options include BrowserRouter, HashRouter, MemoryRouter, and routers from React Router

**Explanation:** React Router commonly provides BrowserRouter for normal browser URLs, HashRouter for hash-based URLs, and MemoryRouter for environments without a normal browser history. Modern React Router also provides data routers such as createBrowserRouter. The choice depends on deployment and routing requirements.

---

## 95. What is Strict Mode in React?

- **A.** Strict Mode is a production database that stores application configuration.
- **B.** Strict Mode disables all development warnings and prevents effects from running.
- **C.** A development feature that helps detect potential problems and intentionally re-runs some logic in development
- **D.** Strict Mode is a CSS framework for enforcing strict styling rules.

**Answer:** C. A development feature that helps detect potential problems and intentionally re-runs some logic in development

**Explanation:** Strict Mode is a development-time feature that helps reveal unsafe patterns and side-effect problems. In development, React may intentionally invoke some logic more than once to expose code that is not resilient to repeated execution. It does not mean the production app necessarily behaves the same way.

---

## 96. What is conditional rendering in React?

- **A.** Conditional rendering means every component must render regardless of application state.
- **B.** It can be done only with CSS and not with JavaScript conditions.
- **C.** It means automatically calling every API whenever a condition changes.
- **D.** Rendering UI based on a condition using if/ternary/&& or similar logic

**Answer:** D. Rendering UI based on a condition using if/ternary/&& or similar logic

**Explanation:** Conditional rendering means showing different UI depending on a condition. Common approaches include `if`, ternary expressions, and `&&`. For example, a loading spinner can be rendered while data is loading and the actual content afterward.

---

## 97. How can you avoid binding in React?

- **A.** Use arrow functions, class fields, or bind methods when needed; function components with hooks avoid class method binding
- **B.** Class components always require bind() for every function, while function components require bind() too.
- **C.** Binding is a CSS operation and has no relationship with JavaScript this.
- **D.** Using arrow functions can never affect how this is handled in a class component.

**Answer:** A. Use arrow functions, class fields, or bind methods when needed; function components with hooks avoid class method binding

**Explanation:** In class components, binding can be avoided with arrow-function class fields or by using methods carefully. Function components do not need class-style `this` binding because event handlers are ordinary functions. Arrow functions are commonly used directly in JSX when appropriate.

---

## 98. How would you programmatically redirect after login?

- **A.** React has only one router and it must always use hash-based URLs.
- **B.** Use navigation tools such as useNavigate() or navigate after successful login
- **C.** React routers are database tables used to store navigation history.
- **D.** Routing in React cannot handle browser URLs or nested routes.

**Answer:** B. Use navigation tools such as useNavigate() or navigate after successful login

**Explanation:** After successful login, React Router can navigate programmatically using `useNavigate()` in modern React Router. The app typically stores authentication state/token securely and then redirects the user to the protected area. The redirect should happen only after authentication succeeds.

---

## 99. Do hooks cover all the functionality provided by the classes?

- **A.** Hooks provide a one-to-one replacement for every class API, including error boundaries.
- **B.** Hooks cannot manage state or effects and are only for styling.
- **C.** Hooks cover most class features, but not every class API maps one-to-one; error boundaries remain a notable class-based feature
- **D.** Class components are required whenever a component receives props.

**Answer:** C. Hooks cover most class features, but not every class API maps one-to-one; error boundaries remain a notable class-based feature

**Explanation:** Hooks cover most common class component functionality such as state, effects, refs, and lifecycle-like behavior. They do not map one-to-one to every class API, and error boundaries are a notable case where class-based APIs remain important in React. Hooks are mainly a different composition model.

---

## 100. How does the performance of using hooks differ in comparison with classes?

- **A.** Hooks are automatically slower than classes regardless of component design.
- **B.** Classes are guaranteed to be many times faster than hooks.
- **C.** Performance depends only on whether a component uses hooks, not on rendering behavior.
- **D.** Hooks generally have comparable performance; performance depends on rendering, state, and optimization rather than hooks alone

**Answer:** D. Hooks generally have comparable performance; performance depends on rendering, state, and optimization rather than hooks alone

**Explanation:** Hooks are not inherently slower than classes. Performance depends on how components render, how state is organized, and whether unnecessary work is performed. Good component design and profiling matter more than choosing hooks versus classes.

---

## 101. Does React Hooks work with static typing?

- **A.** Yes. Hooks work with TypeScript and other static typing systems
- **B.** TypeScript removes JavaScript from the application and guarantees that no runtime error can occur.
- **C.** TypeScript is used only for CSS and cannot type React props or state.
- **D.** TypeScript makes runtime validation of untrusted API data unnecessary.

**Answer:** A. Yes. Hooks work with TypeScript and other static typing systems

**Explanation:** Yes. Hooks work well with TypeScript and other static typing systems. You can type state, props, refs, reducer actions, and custom hook inputs/outputs. TypeScript can catch many incorrect values before the application runs.

---

## 102. What is the difference between `createElement` and `cloneElement`?

- **A.** createElement modifies an existing element, while cloneElement always creates a database record.
- **B.** createElement creates a React element; cloneElement creates a new element based on an existing one with changed props/children
- **C.** Both functions are React hooks that manage component state.
- **D.** cloneElement deletes an existing React element from the DOM.

**Answer:** B. createElement creates a React element; cloneElement creates a new element based on an existing one with changed props/children

**Explanation:** `createElement` creates a new React element from a type, props, and children. `cloneElement` takes an existing React element and creates another element with merged/overridden props or children. `cloneElement` is useful in some composition patterns but should not be overused.

---

## 103. What are PropTypes in React?

- **A.** It means trusting client input and correcting it only after database insertion.
- **B.** It means validating only the CSS and HTML structure of a page.
- **C.** PropTypes provide runtime checks/documentation for expected component props
- **D.** It means checking data only when an administrator manually reviews it.

**Answer:** C. PropTypes provide runtime checks/documentation for expected component props

**Explanation:** PropTypes provide runtime validation/documentation for component props. They can warn during development when a prop has the wrong type or is missing when required. TypeScript provides compile-time type checking, so many modern projects prefer TypeScript instead.

---

## 104. What are stateless and stateful components?

- **A.** A stateless component must never receive props, while a stateful component cannot render UI.
- **B.** Both terms describe database storage models rather than component state.
- **C.** Stateful components are not allowed to use function components.
- **D.** Stateless components mainly receive data; stateful components manage state

**Answer:** D. Stateless components mainly receive data; stateful components manage state

**Explanation:** A stateless component traditionally does not manage its own state and mainly receives props. A stateful component manages state internally. With hooks, function components can be stateful, so the old class-vs-function distinction is less important today.

---

## 105. What are the benefits of using hooks in React?

- **A.** Hooks let function components use state, effects, refs, and reusable logic with simpler composition
- **B.** Custom hooks are CSS classes that cannot call other React hooks.
- **C.** A custom hook must directly manipulate the DOM and cannot return values.
- **D.** Custom hooks are MongoDB procedures rather than reusable React logic.

**Answer:** A. Hooks let function components use state, effects, refs, and reusable logic with simpler composition

**Explanation:** Hooks let function components use state, effects, refs, context, and other React features. They also make reusable stateful logic easier through custom hooks. This usually leads to simpler composition than many older class-based patterns.

---

## 106. What is the difference between `useEffect()` and `useLayoutEffect()` in React?

- **A.** It should contain every piece of application logic and replace normal rendering.
- **B.** useEffect runs after paint in normal use; useLayoutEffect runs synchronously after DOM updates before paint
- **C.** It is only a CSS optimization and has no relationship with external systems.
- **D.** It runs only once in every situation regardless of its dependencies.

**Answer:** B. useEffect runs after paint in normal use; useLayoutEffect runs synchronously after DOM updates before paint

**Explanation:** `useEffect` normally runs after React has updated the DOM and the browser can paint. `useLayoutEffect` runs synchronously after DOM mutations but before the browser paints, which makes it useful for layout measurements or preventing visible layout flicker. It should be used carefully because it can block painting.

---

## 107. What does the dependency array of `useEffect` do?

- **A.** It should contain every piece of application logic and replace normal rendering.
- **B.** It is only a CSS optimization and has no relationship with external systems.
- **C.** It controls when the effect re-runs by specifying values the effect depends on
- **D.** It runs only once in every situation regardless of its dependencies.

**Answer:** C. It controls when the effect re-runs by specifying values the effect depends on

**Explanation:** The dependency array tells React when an effect should run again. An empty array generally means the effect runs after the initial mount (with development Strict Mode nuances), while dependencies cause the effect to re-run when those values change. Missing dependencies can create stale values or bugs.

---

## 108. Why does React recommend against mutating state?

- **A.** It is a package manager used to install Node dependencies.
- **B.** It is a database used to store application logs.
- **C.** It is a CSS tool that changes production styles automatically.
- **D.** Direct mutation can make updates hard to detect and breaks predictable state management; create a new value instead

**Answer:** D. Direct mutation can make updates hard to detect and breaks predictable state management; create a new value instead

**Explanation:** React relies on detecting changes between values to decide what needs updating. Mutating an existing object/array can keep the same reference and make changes harder to detect, while creating a new value makes the update explicit. Immutable updates also make state reasoning and debugging easier.

---

## 109. What is reconciliation in React?

- **A.** React compares the new element tree with the previous one and updates the necessary UI
- **B.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **C.** It works only in the browser and is not part of the Node.js/React application model.
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** A. React compares the new element tree with the previous one and updates the necessary UI

**Explanation:** Reconciliation is React's process of comparing the newly returned element tree with the previous tree and determining what needs to change. React then updates the real DOM efficiently rather than rebuilding everything. Keys are important when reconciling lists.

---

## 110. What is the purpose of the `useContext` hook in React?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It reads shared context values without passing props through every level
- **C.** It works only in the browser and is not part of the Node.js/React application model.
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** B. It reads shared context values without passing props through every level

**Explanation:** useContext reads a value from a React Context without manually passing it through every intermediate component. It is useful for values shared across a subtree, such as theme, locale, or authentication information. Changing the context value can cause consuming components to re-render.

---

## 111. What happens if you attempt to update state directly in React?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It works only in the browser and is not part of the Node.js/React application model.
- **C.** Direct mutation does not reliably trigger a render; use the state setter instead
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** C. Direct mutation does not reliably trigger a render; use the state setter instead

**Explanation:** Directly changing a state variable does not tell React to schedule a render. For example, `count = count + 1` does not replace `setCount(count + 1)`. State should be updated through its setter or reducer so React can schedule the correct update.

---

## 112. Do Hooks replace Higher-Order Components (HOCs) in React?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It works only in the browser and is not part of the Node.js/React application model.
- **C.** It requires all work to run synchronously and blocks other operations until completion.
- **D.** Hooks can replace many HOC use cases, but HOCs are still useful for some patterns and libraries

**Answer:** D. Hooks can replace many HOC use cases, but HOCs are still useful for some patterns and libraries

**Explanation:** Hooks replace many common HOC use cases by allowing reusable logic to be composed directly. However, HOCs are still a valid pattern and can be useful when working with existing libraries or certain cross-cutting component transformations. They are not completely obsolete.

---

## 113. Which method would you use to handle events in React?

- **A.** Pass event handler functions such as onClick, onChange, etc. to React elements
- **B.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **C.** It works only in the browser and is not part of the Node.js/React application model.
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** A. Pass event handler functions such as onClick, onChange, etc. to React elements

**Explanation:** React handles events using props such as `onClick`, `onChange`, `onSubmit`, and `onMouseEnter`. You pass a function as the handler, for example `onClick={handleClick}`. React provides a consistent event interface around browser events.

---

## 114. In which situation would you use refs in React?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** When you need DOM access, focus, measurements, imperative APIs, or integrating non-React libraries
- **C.** It works only in the browser and is not part of the Node.js/React application model.
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** B. When you need DOM access, focus, measurements, imperative APIs, or integrating non-React libraries

**Explanation:** Refs are useful when you need direct access to a DOM node or an imperative value, such as focusing an input, measuring an element, controlling a video, or integrating a non-React library. Refs are not a replacement for normal state because changing a ref does not trigger a render.

---

## 115. Which method would you use to add attributes to components conditionally?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It works only in the browser and is not part of the Node.js/React application model.
- **C.** Use conditional JSX/props, such as `{condition ? value : otherValue}` or spread/attribute logic
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** C. Use conditional JSX/props, such as `{condition ? value : otherValue}` or spread/attribute logic

**Explanation:** Attributes can be added conditionally using JavaScript expressions in JSX, conditional objects, ternaries, or spread syntax. For example, a className or disabled prop can depend on a boolean. The goal is to keep the resulting props predictable and readable.

---

## 116. What method would you use to check and improve slow app rendering in React?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It works only in the browser and is not part of the Node.js/React application model.
- **C.** It requires all work to run synchronously and blocks other operations until completion.
- **D.** Use React DevTools Profiler and browser performance tools to find expensive renders

**Answer:** D. Use React DevTools Profiler and browser performance tools to find expensive renders

**Explanation:** React DevTools Profiler helps identify which components render, how often they render, and how long rendering takes. Browser performance tools can show scripting, layout, painting, and network costs. Profiling tells you where optimization is actually needed.

---

## 117. In which situation would you use `useMemo()` in React?

- **A.** When a calculation is expensive and its result can be reused based on dependencies
- **B.** useMemo forces a component to render only once for the lifetime of the application.
- **C.** useMemo is used only for HTTP requests and cannot return calculated values.
- **D.** useMemo replaces useState and is the standard way to update component state.

**Answer:** A. When a calculation is expensive and its result can be reused based on dependencies

**Explanation:** useMemo is useful when a calculation is expensive and its inputs do not change often, or when a stable calculated value helps prevent unnecessary child renders. It is not a general requirement for every calculation. Simple calculations often do not need memoization.

---

## 118. How would you avoid binding in React?

- **A.** Class components always require bind() for every function, while function components require bind() too.
- **B.** Use arrow functions or class fields; in function components, hooks remove the need for class method binding
- **C.** Binding is a CSS operation and has no relationship with JavaScript this.
- **D.** Using arrow functions can never affect how this is handled in a class component.

**Answer:** B. Use arrow functions or class fields; in function components, hooks remove the need for class method binding

**Explanation:** In function components there is no class `this`, so there is no need for `this.handleClick = this.handleClick.bind(this)`. You can define handlers as normal or arrow functions. In class components, arrow-function fields are one common way to keep the correct `this` context.

---

## 119. Explain what MVC architecture is.

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It works only in the browser and is not part of the Node.js/React application model.
- **C.** MVC separates Model, View, and Controller responsibilities
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** C. MVC separates Model, View, and Controller responsibilities

**Explanation:** MVC stands for Model, View, and Controller. The Model handles data/business representation, the View handles presentation, and the Controller coordinates requests and application logic. The exact implementation differs between frameworks.

---

## 120. Does React or Next.js follow the MVC architecture? Briefly explain.

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It works only in the browser and is not part of the Node.js/React application model.
- **C.** It requires all work to run synchronously and blocks other operations until completion.
- **D.** React itself is not MVC; Next.js provides a broader framework structure and does not strictly follow classic MVC

**Answer:** D. React itself is not MVC; Next.js provides a broader framework structure and does not strictly follow classic MVC

**Explanation:** React itself is a UI library and does not strictly implement classic MVC. Next.js is a full React framework with routing, server features, data fetching, and rendering strategies, but it also does not require a strict traditional MVC structure. Teams can organize application code using MVC-like separation if useful.

---

## 121. Explain what the Shadow DOM is.

- **A.** A browser feature that provides an encapsulated DOM/CSS tree for a component
- **B.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **C.** It works only in the browser and is not part of the Node.js/React application model.
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** A. A browser feature that provides an encapsulated DOM/CSS tree for a component

**Explanation:** Shadow DOM is a browser platform feature that creates an encapsulated DOM subtree with its own styling boundaries. It is commonly used by Web Components. It is different from React's virtual DOM, which is a rendering concept rather than a browser DOM isolation mechanism.

---

## 122. What are synthetic events in React?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** React's normalized event system that provides a consistent event interface across browsers
- **C.** It works only in the browser and is not part of the Node.js/React application model.
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** B. React's normalized event system that provides a consistent event interface across browsers

**Explanation:** Synthetic events are React's normalized event objects that provide a consistent API across browsers. They allow React event handlers such as `onClick` and `onChange` to work in a consistent way. Modern React has changed some internal event handling details, but the programming model remains similar.

---

## 123. What are custom Hooks in React?

- **A.** Custom hooks are CSS classes that cannot call other React hooks.
- **B.** A custom hook must directly manipulate the DOM and cannot return values.
- **C.** Reusable functions that use React hooks to share stateful logic
- **D.** Custom hooks are MongoDB procedures rather than reusable React logic.

**Answer:** C. Reusable functions that use React hooks to share stateful logic

**Explanation:** Custom hooks are reusable functions that encapsulate React hook logic. For example, `useOnlineStatus()` could subscribe to browser online/offline events and expose a boolean to multiple components. They share behavior, not the same state instance.

---

## 124. State the different side effects of a React component.

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It works only in the browser and is not part of the Node.js/React application model.
- **C.** It requires all work to run synchronously and blocks other operations until completion.
- **D.** Examples include data fetching, subscriptions, timers, DOM manipulation, and external API interactions

**Answer:** D. Examples include data fetching, subscriptions, timers, DOM manipulation, and external API interactions

**Explanation:** Side effects include fetching data, subscriptions, timers, manually changing DOM state, browser APIs, analytics, and external integrations. Effects should synchronize React with systems outside React. They should not be used simply because a component needs to calculate a value.

---

## 125. What do you understand by three dots (`...`) in React?

- **A.** It is the spread/rest syntax used to expand or collect values in arrays, objects, and function parameters
- **B.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **C.** It works only in the browser and is not part of the Node.js/React application model.
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** A. It is the spread/rest syntax used to expand or collect values in arrays, objects, and function parameters

**Explanation:** The `...` syntax is used as spread or rest. Spread expands values, such as copying object properties or array items; rest collects remaining values into an object, array, or function parameter. In React it is often used for props, such as `<Component {...props} />`.

---

## 126. How do you reset a component's state in React?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** Reset state by changing the component's key, or explicitly set state back to its initial value
- **C.** It works only in the browser and is not part of the Node.js/React application model.
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** B. Reset state by changing the component's key, or explicitly set state back to its initial value

**Explanation:** A component can reset state by explicitly setting it back to initial values. Another common React technique is changing the component's `key`, which causes React to treat it as a new component and recreate its state. The key approach is useful when an entire component subtree should reset.

---

## 127. How does React handle Concurrent Mode and what benefits does it offer?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It works only in the browser and is not part of the Node.js/React application model.
- **C.** Concurrent rendering lets React work on updates in an interruptible/prioritized way to keep UI responsive
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** C. Concurrent rendering lets React work on updates in an interruptible/prioritized way to keep UI responsive

**Explanation:** Concurrent rendering allows React to work on updates in a more interruptible and prioritized way. Less urgent rendering work can be paused so urgent interactions remain responsive. Modern React uses concurrent capabilities through features such as transitions and Suspense rather than treating every update equally.

---

## 128. What is `useImperativeHandle` and when would you use it?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It works only in the browser and is not part of the Node.js/React application model.
- **C.** It requires all work to run synchronously and blocks other operations until completion.
- **D.** It customizes what a forwarded ref exposes, useful for controlled imperative methods

**Answer:** D. It customizes what a forwarded ref exposes, useful for controlled imperative methods

**Explanation:** useImperativeHandle customizes what a parent receives through a forwarded ref. It is useful when a child should expose a small imperative API, such as `focus()` or `open()`, instead of exposing its entire DOM implementation. It should be used sparingly because declarative props are preferred when possible.

---

## 129. What are Render Props and how do you use them?

- **A.** A pattern where a component receives a function as a prop to decide what UI to render
- **B.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **C.** It works only in the browser and is not part of the Node.js/React application model.
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** A. A pattern where a component receives a function as a prop to decide what UI to render

**Explanation:** Render Props is a pattern where a component receives a function prop and calls it to decide what UI to render. The function can receive data from the component and return JSX. Hooks are now often a simpler way to share logic, but Render Props remains an important interview concept.

---

## 130. What is middleware in React (specifically with Redux), and why is Redux Thunk used?

- **A.** Middleware runs only after reducers finish and cannot inspect dispatched actions.
- **B.** Redux middleware intercepts actions; Redux Thunk lets action creators perform async logic and dispatch later
- **C.** Middleware replaces the Redux store and makes reducers unnecessary.
- **D.** Middleware is responsible only for rendering HTML and CSS.

**Answer:** B. Redux middleware intercepts actions; Redux Thunk lets action creators perform async logic and dispatch later

**Explanation:** Redux middleware can intercept actions before reducers receive them. Redux Thunk allows action creators to return functions, which can perform asynchronous work such as API requests and then dispatch success/failure actions. This keeps async Redux logic outside reducers.

---

## 131. How would you test React Components using React Testing Library (RTL)?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It works only in the browser and is not part of the Node.js/React application model.
- **C.** Render components, interact with them, and make assertions using RTL queries such as getByRole
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** C. Render components, interact with them, and make assertions using RTL queries such as getByRole

**Explanation:** React Testing Library tests components from the user's perspective. Render the component, find elements using queries such as getByRole, perform interactions with user-event, and assert the visible result. This encourages tests that focus on behavior instead of internal implementation details.

---

## 132. How do you update state in React?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It works only in the browser and is not part of the Node.js/React application model.
- **C.** It requires all work to run synchronously and blocks other operations until completion.
- **D.** Use the setter from useState or a reducer dispatch to update state

**Answer:** D. Use the setter from useState or a reducer dispatch to update state

**Explanation:** Use a state setter from useState, such as `setCount(newValue)`, or dispatch an action when using useReducer. If the new value depends on previous state, use the functional form such as `setCount(prev => prev + 1)`. Avoid directly mutating the state variable.

---

## 133. What are Webpack and Browserify?

- **A.** Webpack and Browserify bundle JavaScript/modules and dependencies for browser use
- **B.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **C.** It works only in the browser and is not part of the Node.js/React application model.
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** A. Webpack and Browserify bundle JavaScript/modules and dependencies for browser use

**Explanation:** Webpack and Browserify are module bundlers that package JavaScript modules and dependencies for browser applications. Webpack has a broad plugin/loader ecosystem, while Browserify historically focused on bringing CommonJS-style modules to browsers. Modern tools such as Vite and other bundlers are also common.

---

## 134. How does Node.js handle concurrency if it is single-threaded?

- **A.** Blocking is prevented by converting every operation into synchronous code.
- **B.** It uses the event loop and non-blocking I/O, while libuv/OS handle many operations concurrently
- **C.** Node.js prevents blocking by stopping other requests until the current one finishes.
- **D.** Blocking is solved only by increasing the browser's CSS bundle size.

**Answer:** B. It uses the event loop and non-blocking I/O, while libuv/OS handle many operations concurrently

**Explanation:** Node handles concurrency through the event loop and non-blocking I/O rather than creating a JavaScript thread for every request. libuv and the operating system handle many I/O operations, and a worker pool is used for certain tasks. This allows a single process to handle many simultaneous connections efficiently.

---

## 135. What is a Node Inspector?

- **A.** It is a package manager used to install Node dependencies.
- **B.** It is a database used to store application logs.
- **C.** A debugging tool for inspecting and debugging Node.js applications
- **D.** It is a CSS tool that changes production styles automatically.

**Answer:** C. A debugging tool for inspecting and debugging Node.js applications

**Explanation:** Node Inspector provides debugging support for Node.js. With DevTools you can set breakpoints, inspect variables, view call stacks, step through code, and profile execution. It is useful when logs alone are not enough to find a bug.

---

## 136. Can we import a Buffer class without the Buffer module?

- **A.** It is a React state container used to store component props.
- **B.** It is a CSS object used to temporarily hold layout measurements.
- **C.** It is a MongoDB collection optimized for binary documents.
- **D.** Yes. Buffer is globally available in Node.js, though importing it explicitly can be clearer in some module setups

**Answer:** D. Yes. Buffer is globally available in Node.js, though importing it explicitly can be clearer in some module setups

**Explanation:** Yes. In Node.js, Buffer is available globally, so code can use `Buffer` without an explicit import in typical setups. Explicit imports can still make dependencies clearer depending on the module style and project conventions.

---

## 137. Which function is used to fire an event?

- **A.** Use emitter.emit('eventName') to fire an event
- **B.** It is a file-system API used to read and write files.
- **C.** It is a database table that stores event records permanently.
- **D.** It is a React component used only to render DOM events.

**Answer:** A. Use emitter.emit('eventName') to fire an event

**Explanation:** For an EventEmitter, the standard way to fire an event is `emitter.emit('eventName', data)`. Listeners registered with `emitter.on()` or related methods receive the event. This is a common Node.js event-driven pattern.

---

## 138. Can middleware functions execute code?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** Yes. Middleware can execute code, modify req/res, end the response, or call next()
- **C.** It works only in the browser and is not part of the Node.js/React application model.
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** B. Yes. Middleware can execute code, modify req/res, end the response, or call next()

**Explanation:** Yes. Middleware can execute arbitrary JavaScript, read or modify request/response objects, perform authentication or logging, end the response, or call `next()` to continue. Middleware is one of the main building blocks of Express applications.

---

## 139. How will you delete a directory?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It works only in the browser and is not part of the Node.js/React application model.
- **C.** Use fs.rmdir/rm APIs or their promise versions; rm is preferred for modern Node.js
- **D.** It requires all work to run synchronously and blocks other operations until completion.

**Answer:** C. Use fs.rmdir/rm APIs or their promise versions; rm is preferred for modern Node.js

**Explanation:** Modern Node.js provides `fs.rm()` and `fs.rmSync()` for removing files/directories, including recursive removal when configured. Promise-based APIs are useful with async/await. The exact options depend on whether the directory contains content.

---

## 140. What is an error-first callback?

- **A.** It is mainly a database/storage mechanism rather than an application/runtime feature.
- **B.** It works only in the browser and is not part of the Node.js/React application model.
- **C.** It requires all work to run synchronously and blocks other operations until completion.
- **D.** A callback whose first argument is an error; conventionally null on success and an Error on failure

**Answer:** D. A callback whose first argument is an error; conventionally null on success and an Error on failure

**Explanation:** An error-first callback follows the convention `(err, result)`. If the operation fails, `err` contains an Error; if it succeeds, `err` is usually null and the result is provided. This convention was widely used throughout older Node.js callback APIs.

---

## 141. What are global objects in Node.js?

- **A.** Built-in globals such as process, console, Buffer, setTimeout, and global
- **B.** They are objects that must always be imported from MongoDB before use.
- **C.** They are browser DOM objects that are automatically available in every Node process.
- **D.** They are user-created variables that become global only after a React render.

**Answer:** A. Built-in globals such as process, console, Buffer, setTimeout, and global

**Explanation:** Node global objects include values such as process, console, Buffer, timers, and global. Some are available directly in the runtime without importing them. They provide common runtime and system functionality.

---

## 142. When does the child process occur?

- **A.** It is a lightweight React child component running inside the same render tree.
- **B.** It occurs when the main process creates/starts another process using child_process methods
- **C.** It is a MongoDB document created automatically for each HTTP request.
- **D.** It is a browser tab that shares the exact same operating-system process.

**Answer:** B. It occurs when the main process creates/starts another process using child_process methods

**Explanation:** A child process occurs when the Node.js application starts another OS process using APIs such as spawn(), exec(), execFile(), or fork(). The child runs separately from the parent process and can communicate through streams or IPC depending on how it was created.

---
