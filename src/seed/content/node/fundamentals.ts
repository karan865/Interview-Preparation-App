import { SeedQuestion } from '../types';

export const nodeFundamentalsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is Node.js, and how does its architectural design differ from traditional web servers like Apache?",
    "answer": "Node.js is an open-source, cross-platform JavaScript runtime built on Google Chrome V8 engine. Unlike traditional thread-per-request servers like Apache (which allocate a 1-2MB OS thread stack per connection and block on I/O), Node.js uses an event-driven, non-blocking I/O model powered by libuv on a single execution thread, allowing tens of thousands of concurrent connections with minimal memory.",
    "explanation": "Apache blocks threads waiting for I/O, hitting thread limits under load; Node.js handles I/O asynchronously via kernel event notifications (epoll/kqueue).",
    "interviewAnswer": "Node.js is an open-source, cross-platform JavaScript runtime built on Google Chrome V8 engine. Unlike traditional thread-per-request servers like Apache (which allocate a 1-2MB OS thread stack per connection and block on I/O), Node.js uses an event-driven, non-blocking I/O model powered by libuv on a single execution thread, allowing tens of thousands of concurrent connections with minimal memory. Apache blocks threads waiting for I/O, hitting thread limits under load; Node.js handles I/O asynchronously via kernel event notifications (epoll/kqueue).",
    "importantPoints": [
      "Node.js is an open-source, cross-platform JavaScript runtime built on Google Chrome V8 engine. Unlike traditional thread-per-request servers like Apache (which allocate a 1-2MB OS thread stack per connection and block on I/O), Node.js uses an event-driven, non-blocking I/O model powered by libuv on a single execution thread, allowing tens of thousands of concurrent connections with minimal memory.",
      "Apache blocks threads waiting for I/O, hitting thread limits under load; Node.js handles I/O asynchronously via kernel event notifications (epoll/kqueue)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "architecture",
      "v8",
      "libuv",
      "fundamentals"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the role of the Google V8 engine inside Node.js, and what parts of Node.js are NOT provided by V8?",
    "answer": "V8 compiles and executes JavaScript code into machine code, manages the Call Stack, and handles the Memory Heap and Garbage Collection. V8 has NO implementation for file system access, network sockets, timers, or the event loop. Node.js provides these through C++ bindings to libuv, OpenSSL, c-ares, and zlib, exposing them to JavaScript via the Node.js standard library.",
    "explanation": "V8 = JS engine (compiler, memory, stack); Node.js runtime = V8 + libuv + C++ bindings + core standard library.",
    "interviewAnswer": "V8 compiles and executes JavaScript code into machine code, manages the Call Stack, and handles the Memory Heap and Garbage Collection. V8 has NO implementation for file system access, network sockets, timers, or the event loop. Node.js provides these through C++ bindings to libuv, OpenSSL, c-ares, and zlib, exposing them to JavaScript via the Node.js standard library. V8 = JS engine (compiler, memory, stack); Node.js runtime = V8 + libuv + C++ bindings + core standard library.",
    "importantPoints": [
      "V8 compiles and executes JavaScript code into machine code, manages the Call Stack, and handles the Memory Heap and Garbage Collection. V8 has NO implementation for file system access, network sockets, timers, or the event loop. Node.js provides these through C++ bindings to libuv, OpenSSL, c-ares, and zlib, exposing them to JavaScript via the Node.js standard library.",
      "V8 = JS engine (compiler, memory, stack); Node.js runtime = V8 + libuv + C++ bindings + core standard library."
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
      "v8",
      "internals",
      "runtime"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is libuv, and what core platform capabilities does it supply to Node.js?",
    "answer": "libuv is a multi-platform C library that provides Node.js with: 1) The cross-platform Event Loop, 2) Asynchronous non-blocking network I/O (epoll on Linux, kqueue on macOS, IOCP on Windows), 3) A thread pool for file system operations, DNS lookups, and crypto, 4) Child process management, and 5) High-resolution timers and IPC primitives.",
    "explanation": "libuv abstracts operating system asynchronous I/O differences and provides the worker thread pool.",
    "interviewAnswer": "libuv is a multi-platform C library that provides Node.js with: 1) The cross-platform Event Loop, 2) Asynchronous non-blocking network I/O (epoll on Linux, kqueue on macOS, IOCP on Windows), 3) A thread pool for file system operations, DNS lookups, and crypto, 4) Child process management, and 5) High-resolution timers and IPC primitives. libuv abstracts operating system asynchronous I/O differences and provides the worker thread pool.",
    "importantPoints": [
      "libuv is a multi-platform C library that provides Node.js with: 1) The cross-platform Event Loop, 2) Asynchronous non-blocking network I/O (epoll on Linux, kqueue on macOS, IOCP on Windows), 3) A thread pool for file system operations, DNS lookups, and crypto, 4) Child process management, and 5) High-resolution timers and IPC primitives.",
      "libuv abstracts operating system asynchronous I/O differences and provides the worker thread pool."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "libuv",
      "event-loop",
      "async-io"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "If Node.js is single-threaded, how does it perform operations like file access and cryptography concurrently?",
    "answer": "Node.js is single-threaded only for JavaScript execution. When an asynchronous file I/O, DNS resolution, or crypto operation is invoked, libuv offloads the operation to its background Worker Thread Pool (default 4 threads). When the thread finishes, it queues the callback into the event loop task queue to be executed on the main thread.",
    "explanation": "Single-threaded JS on the main thread; multi-threaded libuv thread pool in the background.",
    "interviewAnswer": "Node.js is single-threaded only for JavaScript execution. When an asynchronous file I/O, DNS resolution, or crypto operation is invoked, libuv offloads the operation to its background Worker Thread Pool (default 4 threads). When the thread finishes, it queues the callback into the event loop task queue to be executed on the main thread. Single-threaded JS on the main thread; multi-threaded libuv thread pool in the background.",
    "importantPoints": [
      "Node.js is single-threaded only for JavaScript execution. When an asynchronous file I/O, DNS resolution, or crypto operation is invoked, libuv offloads the operation to its background Worker Thread Pool (default 4 threads). When the thread finishes, it queues the callback into the event loop task queue to be executed on the main thread.",
      "Single-threaded JS on the main thread; multi-threaded libuv thread pool in the background."
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
      "thread-pool",
      "concurrency",
      "libuv"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the purpose of the UV_THREADPOOL_SIZE environment variable, and what are its limits?",
    "answer": "UV_THREADPOOL_SIZE configures the number of threads in the libuv worker thread pool (default is 4, maximum is 1024). It must be set before any asynchronous thread pool operations are initiated (via process.env or startup command UV_THREADPOOL_SIZE=16 node app.js). Increasing it prevents thread starvation when running concurrent crypto, compression, or fs operations.",
    "explanation": "Default is 4; essential to increase in I/O and crypto-heavy services with high concurrency.",
    "interviewAnswer": "UV_THREADPOOL_SIZE configures the number of threads in the libuv worker thread pool (default is 4, maximum is 1024). It must be set before any asynchronous thread pool operations are initiated (via process.env or startup command UV_THREADPOOL_SIZE=16 node app.js). Increasing it prevents thread starvation when running concurrent crypto, compression, or fs operations. Default is 4; essential to increase in I/O and crypto-heavy services with high concurrency.",
    "importantPoints": [
      "UV_THREADPOOL_SIZE configures the number of threads in the libuv worker thread pool (default is 4, maximum is 1024). It must be set before any asynchronous thread pool operations are initiated (via process.env or startup command UV_THREADPOOL_SIZE=16 node app.js). Increasing it prevents thread starvation when running concurrent crypto, compression, or fs operations.",
      "Default is 4; essential to increase in I/O and crypto-heavy services with high concurrency."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "nodejs",
      "uv_threadpool_size",
      "thread-pool",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the difference between CPU-bound tasks and I/O-bound tasks in Node.js, and why is Node.js well-suited for one but not the other by default?",
    "answer": "I/O-bound tasks (database queries, network requests, file reading) spend most time waiting for external data; Node.js handles them brilliantly because it yields the thread while waiting. CPU-bound tasks (cryptographic hashing, video encoding, complex math, heavy JSON parsing) execute continuously on the main thread, blocking the event loop and freezing all other incoming requests.",
    "explanation": "Node.js is optimized for high-throughput I/O-bound microservices; CPU-bound tasks require Worker Threads or child processes.",
    "interviewAnswer": "I/O-bound tasks (database queries, network requests, file reading) spend most time waiting for external data; Node.js handles them brilliantly because it yields the thread while waiting. CPU-bound tasks (cryptographic hashing, video encoding, complex math, heavy JSON parsing) execute continuously on the main thread, blocking the event loop and freezing all other incoming requests. Node.js is optimized for high-throughput I/O-bound microservices; CPU-bound tasks require Worker Threads or child processes.",
    "importantPoints": [
      "I/O-bound tasks (database queries, network requests, file reading) spend most time waiting for external data; Node.js handles them brilliantly because it yields the thread while waiting. CPU-bound tasks (cryptographic hashing, video encoding, complex math, heavy JSON parsing) execute continuously on the main thread, blocking the event loop and freezing all other incoming requests.",
      "Node.js is optimized for high-throughput I/O-bound microservices; CPU-bound tasks require Worker Threads or child processes."
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
      "cpu-bound",
      "io-bound",
      "event-loop",
      "concurrency"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "One endpoint performs CPU-heavy work and suddenly unrelated endpoints become slow or unresponsive. Why?",
    "answer": "Because Node.js processes incoming requests on a single-threaded Call Stack. When a CPU-heavy endpoint (e.g. image manipulation or sorting a 1,000,000-item array) occupies the Call Stack, the Event Loop cannot advance to process other incoming HTTP sockets, timers, or I/O callbacks. All unrelated endpoints queue up behind the long task, causing latency spikes across the entire service.",
    "explanation": "Main thread CPU blockage starves the event loop, freezing all concurrent requests sharing the process.",
    "interviewAnswer": "Because Node.js processes incoming requests on a single-threaded Call Stack. When a CPU-heavy endpoint (e.g. image manipulation or sorting a 1,000,000-item array) occupies the Call Stack, the Event Loop cannot advance to process other incoming HTTP sockets, timers, or I/O callbacks. All unrelated endpoints queue up behind the long task, causing latency spikes across the entire service. Main thread CPU blockage starves the event loop, freezing all concurrent requests sharing the process.",
    "importantPoints": [
      "Because Node.js processes incoming requests on a single-threaded Call Stack. When a CPU-heavy endpoint (e.g. image manipulation or sorting a 1,000,000-item array) occupies the Call Stack, the Event Loop cannot advance to process other incoming HTTP sockets, timers, or I/O callbacks. All unrelated endpoints queue up behind the long task, causing latency spikes across the entire service.",
      "Main thread CPU blockage starves the event loop, freezing all concurrent requests sharing the process."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Logical / Scenario-Based",
    "isImportant": true,
    "tags": [
      "nodejs",
      "cpu-bound",
      "event-loop",
      "starvation",
      "production-scenario"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the Node.js `process` global object, and what are its most critical properties and methods?",
    "answer": "The `process` object is a global EventEmitter that provides information about and control over the current Node.js runtime process. Key properties: process.env (environment variables), process.argv (CLI arguments), process.pid (process ID), process.platform/arch. Key methods: process.exit(), process.cwd(), process.memoryUsage(), process.uptime(), process.nextTick(), and event hooks (uncaughtException, unhandledRejection, SIGTERM, SIGINT).",
    "explanation": "Global gateway for runtime telemetry, system interaction, and process lifecycle events.",
    "interviewAnswer": "The `process` object is a global EventEmitter that provides information about and control over the current Node.js runtime process. Key properties: process.env (environment variables), process.argv (CLI arguments), process.pid (process ID), process.platform/arch. Key methods: process.exit(), process.cwd(), process.memoryUsage(), process.uptime(), process.nextTick(), and event hooks (uncaughtException, unhandledRejection, SIGTERM, SIGINT). Global gateway for runtime telemetry, system interaction, and process lifecycle events.",
    "importantPoints": [
      "The `process` object is a global EventEmitter that provides information about and control over the current Node.js runtime process. Key properties: process.env (environment variables), process.argv (CLI arguments), process.pid (process ID), process.platform/arch. Key methods: process.exit(), process.cwd(), process.memoryUsage(), process.uptime(), process.nextTick(), and event hooks (uncaughtException, unhandledRejection, SIGTERM, SIGINT).",
      "Global gateway for runtime telemetry, system interaction, and process lifecycle events."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "process",
      "globals",
      "runtime"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "How does process.memoryUsage() work, and what do rss, heapTotal, heapUsed, and external represent?",
    "answer": "1) rss (Resident Set Size): Total physical RAM allocated to the process (includes V8 heap, C++ bindings, buffers). 2) heapTotal: Total memory allocated for the V8 JavaScript heap. 3) heapUsed: Actual memory currently consumed by active JS objects. 4) external: Memory allocated outside V8 by C++ bindings (e.g. Buffer instances allocated via libuv/malloc). 5) arrayBuffers: Memory allocated for ArrayBuffers and SharedArrayBuffers.",
    "explanation": "rss is total process memory; heapUsed is live JS objects; external/arrayBuffers are off-heap Buffers.",
    "interviewAnswer": "1) rss (Resident Set Size): Total physical RAM allocated to the process (includes V8 heap, C++ bindings, buffers). 2) heapTotal: Total memory allocated for the V8 JavaScript heap. 3) heapUsed: Actual memory currently consumed by active JS objects. 4) external: Memory allocated outside V8 by C++ bindings (e.g. Buffer instances allocated via libuv/malloc). 5) arrayBuffers: Memory allocated for ArrayBuffers and SharedArrayBuffers. rss is total process memory; heapUsed is live JS objects; external/arrayBuffers are off-heap Buffers.",
    "importantPoints": [
      "1) rss (Resident Set Size): Total physical RAM allocated to the process (includes V8 heap, C++ bindings, buffers). 2) heapTotal: Total memory allocated for the V8 JavaScript heap. 3) heapUsed: Actual memory currently consumed by active JS objects. 4) external: Memory allocated outside V8 by C++ bindings (e.g. Buffer instances allocated via libuv/malloc). 5) arrayBuffers: Memory allocated for ArrayBuffers and SharedArrayBuffers.",
      "rss is total process memory; heapUsed is live JS objects; external/arrayBuffers are off-heap Buffers."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "nodejs",
      "memory",
      "process-memoryUsage",
      "heap",
      "rss"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is process.hrtime.bigint(), and why should it be used instead of Date.now() for latency benchmarking?",
    "answer": "process.hrtime.bigint() returns the current high-resolution real time in nanoseconds as a BigInt. Unlike Date.now() (which has low millisecond precision and can jump or drift with NTP system clock adjustments), hrtime is monotonic (always moves forward) and measures sub-millisecond execution times with extreme precision.",
    "explanation": "Monotonic timer with nanosecond precision unaffected by system clock synchronization adjustments.",
    "interviewAnswer": "process.hrtime.bigint() returns the current high-resolution real time in nanoseconds as a BigInt. Unlike Date.now() (which has low millisecond precision and can jump or drift with NTP system clock adjustments), hrtime is monotonic (always moves forward) and measures sub-millisecond execution times with extreme precision. Monotonic timer with nanosecond precision unaffected by system clock synchronization adjustments.",
    "importantPoints": [
      "process.hrtime.bigint() returns the current high-resolution real time in nanoseconds as a BigInt. Unlike Date.now() (which has low millisecond precision and can jump or drift with NTP system clock adjustments), hrtime is monotonic (always moves forward) and measures sub-millisecond execution times with extreme precision.",
      "Monotonic timer with nanosecond precision unaffected by system clock synchronization adjustments."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "nodejs",
      "benchmarking",
      "hrtime",
      "performance",
      "latency"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the difference between global and window in JavaScript, and what is globalThis in modern Node.js?",
    "answer": "`window` is the global object in browser environments. `global` is the top-level global object in Node.js (hosting setTimeout, Buffer, process, etc.). `globalThis` (ES2020) is the standardized universal global object across all JavaScript runtimes (browsers, Node.js, Deno, Web Workers), eliminating environment-checking boilerplate.",
    "explanation": "globalThis provides standard cross-environment access to the top-level execution scope.",
    "interviewAnswer": "`window` is the global object in browser environments. `global` is the top-level global object in Node.js (hosting setTimeout, Buffer, process, etc.). `globalThis` (ES2020) is the standardized universal global object across all JavaScript runtimes (browsers, Node.js, Deno, Web Workers), eliminating environment-checking boilerplate. globalThis provides standard cross-environment access to the top-level execution scope.",
    "importantPoints": [
      "`window` is the global object in browser environments. `global` is the top-level global object in Node.js (hosting setTimeout, Buffer, process, etc.). `globalThis` (ES2020) is the standardized universal global object across all JavaScript runtimes (browsers, Node.js, Deno, Web Workers), eliminating environment-checking boilerplate.",
      "globalThis provides standard cross-environment access to the top-level execution scope."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "global",
      "globalThis",
      "es2020"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "Why are top-level variables declared with `var` or `const` in a Node.js file NOT added to `global`?",
    "answer": "In Node.js, every file is wrapped in an invisible CommonJS Module Wrapper function: (function(exports, require, module, __filename, __dirname) { ... }). Because file contents run inside a local function scope, top-level variable declarations are local to that module function and never pollute the `global` object.",
    "explanation": "The module wrapper function encloses all file-level declarations within local closure scope.",
    "interviewAnswer": "In Node.js, every file is wrapped in an invisible CommonJS Module Wrapper function: (function(exports, require, module, __filename, __dirname) { ... }). Because file contents run inside a local function scope, top-level variable declarations are local to that module function and never pollute the `global` object. The module wrapper function encloses all file-level declarations within local closure scope.",
    "importantPoints": [
      "In Node.js, every file is wrapped in an invisible CommonJS Module Wrapper function: (function(exports, require, module, __filename, __dirname) { ... }). Because file contents run inside a local function scope, top-level variable declarations are local to that module function and never pollute the `global` object.",
      "The module wrapper function encloses all file-level declarations within local closure scope."
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
      "module-wrapper",
      "global",
      "scope"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the exact signature and purpose of the CommonJS Module Wrapper function in Node.js?",
    "answer": "Signature: `(function (exports, require, module, __filename, __dirname) { /* file code */ });`. Purpose: It provides module-level scope isolation, injects the `require` function, `module` object, `exports` shortcut, and absolute path variables `__filename` and `__dirname` into every module without using globals.",
    "explanation": "Node.js compiles file code into this wrapper string before passing it to V8 vm.runInThisContext.",
    "interviewAnswer": "Signature: `(function (exports, require, module, __filename, __dirname) { /* file code */ });`. Purpose: It provides module-level scope isolation, injects the `require` function, `module` object, `exports` shortcut, and absolute path variables `__filename` and `__dirname` into every module without using globals. Node.js compiles file code into this wrapper string before passing it to V8 vm.runInThisContext.",
    "importantPoints": [
      "Signature: `(function (exports, require, module, __filename, __dirname) { /* file code */ });`. Purpose: It provides module-level scope isolation, injects the `require` function, `module` object, `exports` shortcut, and absolute path variables `__filename` and `__dirname` into every module without using globals.",
      "Node.js compiles file code into this wrapper string before passing it to V8 vm.runInThisContext."
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
      "commonjs",
      "module-wrapper",
      "internals"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the output of: console.log(__dirname === path.dirname(__filename)); in a CommonJS module?",
    "answer": "Outputs true. `__filename` is the resolved absolute file path of the current module, and `__dirname` is the absolute directory path containing that file, exactly matching path.dirname(__filename).",
    "explanation": "__dirname and __filename provide absolute filesystem coordinates for the current file.",
    "interviewAnswer": "Outputs true. `__filename` is the resolved absolute file path of the current module, and `__dirname` is the absolute directory path containing that file, exactly matching path.dirname(__filename). __dirname and __filename provide absolute filesystem coordinates for the current file.",
    "importantPoints": [
      "Outputs true. `__filename` is the resolved absolute file path of the current module, and `__dirname` is the absolute directory path containing that file, exactly matching path.dirname(__filename).",
      "__dirname and __filename provide absolute filesystem coordinates for the current file."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "nodejs",
      "output-prediction",
      "__dirname",
      "__filename"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "Why are `__dirname` and `__filename` NOT available in ECMAScript Modules (ESM) in Node.js, and how do you replicate them?",
    "answer": "In ESM, the CommonJS wrapper function is not used, so `__dirname` and `__filename` do not exist. To replicate them in ESM: `import { fileURLToPath } from \"url\"; import path from \"path\"; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename);`. Or in Node 20.11+: `import.meta.dirname` and `import.meta.filename`.",
    "explanation": "import.meta.url is the standard ESM file URL; Node 20.11+ adds import.meta.dirname.",
    "interviewAnswer": "In ESM, the CommonJS wrapper function is not used, so `__dirname` and `__filename` do not exist. To replicate them in ESM: `import { fileURLToPath } from \"url\"; import path from \"path\"; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename);`. Or in Node 20.11+: `import.meta.dirname` and `import.meta.filename`. import.meta.url is the standard ESM file URL; Node 20.11+ adds import.meta.dirname.",
    "importantPoints": [
      "In ESM, the CommonJS wrapper function is not used, so `__dirname` and `__filename` do not exist. To replicate them in ESM: `import { fileURLToPath } from \"url\"; import path from \"path\"; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename);`. Or in Node 20.11+: `import.meta.dirname` and `import.meta.filename`.",
      "import.meta.url is the standard ESM file URL; Node 20.11+ adds import.meta.dirname."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "esm",
      "__dirname",
      "import-meta",
      "esmodules"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "How does Node.js handle command-line arguments via process.argv, and what do the first two elements always contain?",
    "answer": "`process.argv` is an array of strings. `process.argv[0]` is always the absolute path to the `node` binary executable. `process.argv[1]` is the absolute path to the JavaScript script being executed. Any user-provided command-line arguments begin at index 2 (`process.argv.slice(2)`).",
    "explanation": "0 = node executable path, 1 = script file path, 2..N = user command arguments.",
    "interviewAnswer": "`process.argv` is an array of strings. `process.argv[0]` is always the absolute path to the `node` binary executable. `process.argv[1]` is the absolute path to the JavaScript script being executed. Any user-provided command-line arguments begin at index 2 (`process.argv.slice(2)`). 0 = node executable path, 1 = script file path, 2..N = user command arguments.",
    "importantPoints": [
      "`process.argv` is an array of strings. `process.argv[0]` is always the absolute path to the `node` binary executable. `process.argv[1]` is the absolute path to the JavaScript script being executed. Any user-provided command-line arguments begin at index 2 (`process.argv.slice(2)`).",
      "0 = node executable path, 1 = script file path, 2..N = user command arguments."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "process-argv",
      "cli",
      "fundamentals"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the output of running: `node app.js --port 8080 prod` when logging `process.argv.slice(2)`?",
    "answer": "Outputs `[\"--port\", \"8080\", \"prod\"]`. `process.argv.slice(2)` strips the node executable and script path, returning only the positional arguments and flags passed by the user.",
    "explanation": "Demonstrates parsing CLI arguments from process.argv.",
    "interviewAnswer": "Outputs `[\"--port\", \"8080\", \"prod\"]`. `process.argv.slice(2)` strips the node executable and script path, returning only the positional arguments and flags passed by the user. Demonstrates parsing CLI arguments from process.argv.",
    "importantPoints": [
      "Outputs `[\"--port\", \"8080\", \"prod\"]`. `process.argv.slice(2)` strips the node executable and script path, returning only the positional arguments and flags passed by the user.",
      "Demonstrates parsing CLI arguments from process.argv."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "nodejs",
      "output-prediction",
      "process-argv"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the difference between process.cwd() and __dirname in Node.js?",
    "answer": "`__dirname` is the absolute directory of the currently executing source code file (static location). `process.cwd()` is the Current Working Directory of the terminal from which the Node process was launched. If you run `node /src/app.js` from `/home/user`, `process.cwd()` is `/home/user`, while `__dirname` is `/src`.",
    "explanation": "__dirname points to the file location; process.cwd() points to where the process was started.",
    "interviewAnswer": "`__dirname` is the absolute directory of the currently executing source code file (static location). `process.cwd()` is the Current Working Directory of the terminal from which the Node process was launched. If you run `node /src/app.js` from `/home/user`, `process.cwd()` is `/home/user`, while `__dirname` is `/src`. __dirname points to the file location; process.cwd() points to where the process was started.",
    "importantPoints": [
      "`__dirname` is the absolute directory of the currently executing source code file (static location). `process.cwd()` is the Current Working Directory of the terminal from which the Node process was launched. If you run `node /src/app.js` from `/home/user`, `process.cwd()` is `/home/user`, while `__dirname` is `/src`.",
      "__dirname points to the file location; process.cwd() points to where the process was started."
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
      "process-cwd",
      "__dirname",
      "path-resolution"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "How does process.nextTick() work, and why does it have higher priority than microtasks and macrotasks?",
    "answer": "process.nextTick(fn) places `fn` onto the internal `nextTickQueue`. It executes immediately after the current synchronous call stack completes and BEFORE the event loop yields to Promise microtasks or any libuv macrotask phase. It is designed to allow developers to emit events or execute callbacks synchronously after constructors return but before I/O continues.",
    "explanation": "nextTick queue drains ahead of Promise microtask queue and all libuv phases.",
    "interviewAnswer": "process.nextTick(fn) places `fn` onto the internal `nextTickQueue`. It executes immediately after the current synchronous call stack completes and BEFORE the event loop yields to Promise microtasks or any libuv macrotask phase. It is designed to allow developers to emit events or execute callbacks synchronously after constructors return but before I/O continues. nextTick queue drains ahead of Promise microtask queue and all libuv phases.",
    "importantPoints": [
      "process.nextTick(fn) places `fn` onto the internal `nextTickQueue`. It executes immediately after the current synchronous call stack completes and BEFORE the event loop yields to Promise microtasks or any libuv macrotask phase. It is designed to allow developers to emit events or execute callbacks synchronously after constructors return but before I/O continues.",
      "nextTick queue drains ahead of Promise microtask queue and all libuv phases."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "process-nextTick",
      "microtasks",
      "event-loop"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the output of: console.log(1); process.nextTick(() => console.log(2)); Promise.resolve().then(() => console.log(3)); console.log(4); in Node.js?",
    "answer": "Outputs 1, 4, 2, 3. 1 and 4 log synchronously. When the call stack clears, Node.js checks the nextTickQueue first, executing 2. Then it checks the Promise microtask queue, executing 3.",
    "explanation": "process.nextTick executes before Promise.then microtasks in Node.js.",
    "interviewAnswer": "Outputs 1, 4, 2, 3. 1 and 4 log synchronously. When the call stack clears, Node.js checks the nextTickQueue first, executing 2. Then it checks the Promise microtask queue, executing 3. process.nextTick executes before Promise.then microtasks in Node.js.",
    "importantPoints": [
      "Outputs 1, 4, 2, 3. 1 and 4 log synchronously. When the call stack clears, Node.js checks the nextTickQueue first, executing 2. Then it checks the Promise microtask queue, executing 3.",
      "process.nextTick executes before Promise.then microtasks in Node.js."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "nodejs",
      "output-prediction",
      "process-nextTick",
      "promises"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the purpose of the Node.js `EventEmitter` class, and how does it implement the Publish-Subscribe pattern?",
    "answer": "The `EventEmitter` class (from the `events` module) facilitates event-driven programming. Objects inherit from EventEmitter to emit named events via `emitter.emit(event, ...args)` and register observer callbacks via `emitter.on(event, listener)` or `emitter.once(event, listener)`. Crucially, listeners are executed SYNCHRONOUSLY by default in the order of registration.",
    "explanation": "Core backbone of Node.js streams, HTTP servers, sockets, and processes; listeners run synchronously.",
    "interviewAnswer": "The `EventEmitter` class (from the `events` module) facilitates event-driven programming. Objects inherit from EventEmitter to emit named events via `emitter.emit(event, ...args)` and register observer callbacks via `emitter.on(event, listener)` or `emitter.once(event, listener)`. Crucially, listeners are executed SYNCHRONOUSLY by default in the order of registration. Core backbone of Node.js streams, HTTP servers, sockets, and processes; listeners run synchronously.",
    "importantPoints": [
      "The `EventEmitter` class (from the `events` module) facilitates event-driven programming. Objects inherit from EventEmitter to emit named events via `emitter.emit(event, ...args)` and register observer callbacks via `emitter.on(event, listener)` or `emitter.once(event, listener)`. Crucially, listeners are executed SYNCHRONOUSLY by default in the order of registration.",
      "Core backbone of Node.js streams, HTTP servers, sockets, and processes; listeners run synchronously."
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
      "eventemitter",
      "events",
      "pub-sub"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What happens if an `error` event is emitted on an EventEmitter instance with NO registered error listener?",
    "answer": "If an EventEmitter emits `\"error\"` and has no listeners registered for `\"error\"`, Node.js treats it as an unhandled exception: it prints the stack trace and crashes the entire process with an unhandled error exit code.",
    "explanation": "Always register at least one error listener on EventEmitters to prevent fatal process crashes.",
    "interviewAnswer": "If an EventEmitter emits `\"error\"` and has no listeners registered for `\"error\"`, Node.js treats it as an unhandled exception: it prints the stack trace and crashes the entire process with an unhandled error exit code. Always register at least one error listener on EventEmitters to prevent fatal process crashes.",
    "importantPoints": [
      "If an EventEmitter emits `\"error\"` and has no listeners registered for `\"error\"`, Node.js treats it as an unhandled exception: it prints the stack trace and crashes the entire process with an unhandled error exit code.",
      "Always register at least one error listener on EventEmitters to prevent fatal process crashes."
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
      "eventemitter",
      "error-handling",
      "crash"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the default limit for max listeners on an EventEmitter, why does it exist, and how do you adjust it?",
    "answer": "The default limit is 10 listeners per event. It is a memory leak warning threshold designed to help developers identify forgotten event listener attachments (e.g. adding a listener inside a recurring function). If exceeded, Node.js prints a `MaxListenersExceededWarning`. You adjust it via `emitter.setMaxListeners(n)` or `EventEmitter.defaultMaxListeners = n`.",
    "explanation": "A memory leak guard, not a hard limit; prevents unbounded listener accumulation.",
    "interviewAnswer": "The default limit is 10 listeners per event. It is a memory leak warning threshold designed to help developers identify forgotten event listener attachments (e.g. adding a listener inside a recurring function). If exceeded, Node.js prints a `MaxListenersExceededWarning`. You adjust it via `emitter.setMaxListeners(n)` or `EventEmitter.defaultMaxListeners = n`. A memory leak guard, not a hard limit; prevents unbounded listener accumulation.",
    "importantPoints": [
      "The default limit is 10 listeners per event. It is a memory leak warning threshold designed to help developers identify forgotten event listener attachments (e.g. adding a listener inside a recurring function). If exceeded, Node.js prints a `MaxListenersExceededWarning`. You adjust it via `emitter.setMaxListeners(n)` or `EventEmitter.defaultMaxListeners = n`.",
      "A memory leak guard, not a hard limit; prevents unbounded listener accumulation."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "eventemitter",
      "max-listeners",
      "memory-leaks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the output of: const E = require(\"events\"); const em = new E(); em.on(\"e\", () => console.log(\"A\")); console.log(\"B\"); em.emit(\"e\"); console.log(\"C\");?",
    "answer": "Outputs B, A, C. Event listeners registered on an EventEmitter are executed SYNCHRONOUSLY when emit() is called. \"B\" logs, emit(\"e\") runs listener \"A\" synchronously on the spot, and then \"C\" logs.",
    "explanation": "EventEmitter.emit() executes all listeners synchronously on the current call stack.",
    "interviewAnswer": "Outputs B, A, C. Event listeners registered on an EventEmitter are executed SYNCHRONOUSLY when emit() is called. \"B\" logs, emit(\"e\") runs listener \"A\" synchronously on the spot, and then \"C\" logs. EventEmitter.emit() executes all listeners synchronously on the current call stack.",
    "importantPoints": [
      "Outputs B, A, C. Event listeners registered on an EventEmitter are executed SYNCHRONOUSLY when emit() is called. \"B\" logs, emit(\"e\") runs listener \"A\" synchronously on the spot, and then \"C\" logs.",
      "EventEmitter.emit() executes all listeners synchronously on the current call stack."
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
      "eventemitter",
      "synchronous"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "How do you convert an EventEmitter event into a Promise in modern Node.js using events.once()?",
    "answer": "`const { once } = require(\"events\"); const [result] = await once(emitter, \"eventName\");`. `events.once()` returns a Promise that resolves as soon as the emitter emits the specified event, resolving with an array of the arguments passed to emit(). If the emitter emits \"error\" beforehand, the promise automatically rejects.",
    "explanation": "events.once() bridges EventEmitters to async/await syntax with automatic error rejection handling.",
    "interviewAnswer": "`const { once } = require(\"events\"); const [result] = await once(emitter, \"eventName\");`. `events.once()` returns a Promise that resolves as soon as the emitter emits the specified event, resolving with an array of the arguments passed to emit(). If the emitter emits \"error\" beforehand, the promise automatically rejects. events.once() bridges EventEmitters to async/await syntax with automatic error rejection handling.",
    "importantPoints": [
      "`const { once } = require(\"events\"); const [result] = await once(emitter, \"eventName\");`. `events.once()` returns a Promise that resolves as soon as the emitter emits the specified event, resolving with an array of the arguments passed to emit(). If the emitter emits \"error\" beforehand, the promise automatically rejects.",
      "events.once() bridges EventEmitters to async/await syntax with automatic error rejection handling."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "nodejs",
      "eventemitter",
      "events-once",
      "promises",
      "es2020"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the difference between require(\"events\").EventEmitter and DOM EventTarget in modern Node.js?",
    "answer": "`EventEmitter` is the legacy, synchronous Node.js event system. In Node 16+, Node.js also implements the browser-compatible `EventTarget` and `Event` classes. Unlike EventEmitter, EventTarget supports the DOM Event standard (event bubbling, stopPropagation, capture phases) and accepts `AbortSignal` in its listener options dictionary.",
    "explanation": "EventTarget matches browser W3C standards; EventEmitter is Node-specific synchronous architecture.",
    "interviewAnswer": "`EventEmitter` is the legacy, synchronous Node.js event system. In Node 16+, Node.js also implements the browser-compatible `EventTarget` and `Event` classes. Unlike EventEmitter, EventTarget supports the DOM Event standard (event bubbling, stopPropagation, capture phases) and accepts `AbortSignal` in its listener options dictionary. EventTarget matches browser W3C standards; EventEmitter is Node-specific synchronous architecture.",
    "importantPoints": [
      "`EventEmitter` is the legacy, synchronous Node.js event system. In Node 16+, Node.js also implements the browser-compatible `EventTarget` and `Event` classes. Unlike EventEmitter, EventTarget supports the DOM Event standard (event bubbling, stopPropagation, capture phases) and accepts `AbortSignal` in its listener options dictionary.",
      "EventTarget matches browser W3C standards; EventEmitter is Node-specific synchronous architecture."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "eventtarget",
      "eventemitter",
      "web-standards"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the purpose of the Node.js `timers/promises` module, and how does `setTimeout` work with async/await?",
    "answer": "`import { setTimeout } from \"timers/promises\"; await setTimeout(1000, \"result\");`. It provides Promise-based versions of timer functions natively, eliminating the need to write `new Promise(r => setTimeout(r, 1000))`. It also natively supports cancellation by accepting `{ signal: abortSignal }`.",
    "explanation": "Native promise-wrapped timers with AbortSignal cancellation support.",
    "interviewAnswer": "`import { setTimeout } from \"timers/promises\"; await setTimeout(1000, \"result\");`. It provides Promise-based versions of timer functions natively, eliminating the need to write `new Promise(r => setTimeout(r, 1000))`. It also natively supports cancellation by accepting `{ signal: abortSignal }`. Native promise-wrapped timers with AbortSignal cancellation support.",
    "importantPoints": [
      "`import { setTimeout } from \"timers/promises\"; await setTimeout(1000, \"result\");`. It provides Promise-based versions of timer functions natively, eliminating the need to write `new Promise(r => setTimeout(r, 1000))`. It also natively supports cancellation by accepting `{ signal: abortSignal }`.",
      "Native promise-wrapped timers with AbortSignal cancellation support."
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
      "timers-promises",
      "async-await",
      "setTimeout"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the difference between setImmediate() and setTimeout(fn, 0) in the Node.js Event Loop?",
    "answer": "`setTimeout(fn, 0)` is handled in the Timers phase of the event loop. `setImmediate(fn)` is handled in the Check phase (immediately following the Poll I/O phase). Within an I/O callback (e.g. fs.readFile), `setImmediate` is guaranteed to execute before `setTimeout(fn, 0)`. In the main module scope, their execution order is non-deterministic.",
    "explanation": "setImmediate runs in Check phase; within I/O callbacks, it always executes before setTimeout.",
    "interviewAnswer": "`setTimeout(fn, 0)` is handled in the Timers phase of the event loop. `setImmediate(fn)` is handled in the Check phase (immediately following the Poll I/O phase). Within an I/O callback (e.g. fs.readFile), `setImmediate` is guaranteed to execute before `setTimeout(fn, 0)`. In the main module scope, their execution order is non-deterministic. setImmediate runs in Check phase; within I/O callbacks, it always executes before setTimeout.",
    "importantPoints": [
      "`setTimeout(fn, 0)` is handled in the Timers phase of the event loop. `setImmediate(fn)` is handled in the Check phase (immediately following the Poll I/O phase). Within an I/O callback (e.g. fs.readFile), `setImmediate` is guaranteed to execute before `setTimeout(fn, 0)`. In the main module scope, their execution order is non-deterministic.",
      "setImmediate runs in Check phase; within I/O callbacks, it always executes before setTimeout."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "setImmediate",
      "setTimeout",
      "event-loop"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is timer.unref() in Node.js, and when would you use it?",
    "answer": "`timer.unref()` instructs the Node.js event loop not to keep the process alive solely for this timer. If no other active handles (requests, open sockets, I/O) remain in the event loop, the Node.js process will terminate cleanly without waiting for the timer to fire. Use it for background cleanup tasks, cache eviction, or heartbeat intervals.",
    "explanation": "Allows the Node.js process to exit gracefully even if repeating timers are registered.",
    "interviewAnswer": "`timer.unref()` instructs the Node.js event loop not to keep the process alive solely for this timer. If no other active handles (requests, open sockets, I/O) remain in the event loop, the Node.js process will terminate cleanly without waiting for the timer to fire. Use it for background cleanup tasks, cache eviction, or heartbeat intervals. Allows the Node.js process to exit gracefully even if repeating timers are registered.",
    "importantPoints": [
      "`timer.unref()` instructs the Node.js event loop not to keep the process alive solely for this timer. If no other active handles (requests, open sockets, I/O) remain in the event loop, the Node.js process will terminate cleanly without waiting for the timer to fire. Use it for background cleanup tasks, cache eviction, or heartbeat intervals.",
      "Allows the Node.js process to exit gracefully even if repeating timers are registered."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "timers",
      "unref",
      "graceful-shutdown"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the output of: const t = setInterval(() => console.log(\"tick\"), 1000); t.unref(); console.log(\"Done\"); in a standalone script?",
    "answer": "Outputs \"Done\", and the process immediately exits. Because `t.unref()` marks the interval timer as non-referencing, once the synchronous script completes and the Call Stack is empty, Node.js sees no referenced work and terminates without waiting 1000ms.",
    "explanation": "An unrefed timer does not prevent process exit when no other active work exists.",
    "interviewAnswer": "Outputs \"Done\", and the process immediately exits. Because `t.unref()` marks the interval timer as non-referencing, once the synchronous script completes and the Call Stack is empty, Node.js sees no referenced work and terminates without waiting 1000ms. An unrefed timer does not prevent process exit when no other active work exists.",
    "importantPoints": [
      "Outputs \"Done\", and the process immediately exits. Because `t.unref()` marks the interval timer as non-referencing, once the synchronous script completes and the Call Stack is empty, Node.js sees no referenced work and terminates without waiting 1000ms.",
      "An unrefed timer does not prevent process exit when no other active work exists."
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
      "unref",
      "process-exit"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "How does Node.js achieve cross-platform consistency for file paths across Windows and POSIX systems?",
    "answer": "Via the `path` core module. Windows uses backslashes `\\` while POSIX (Linux/macOS) uses forward slashes `/`. Using `path.join(\"dir\", \"file.js\")` or `path.resolve()` normalizes separators based on the host OS. `path.posix` forces POSIX style and `path.win32` forces Windows style when cross-platform URL/path conversion is required.",
    "explanation": "Always use path.join/resolve rather than manual string concatenation with / or \\.",
    "interviewAnswer": "Via the `path` core module. Windows uses backslashes `\\` while POSIX (Linux/macOS) uses forward slashes `/`. Using `path.join(\"dir\", \"file.js\")` or `path.resolve()` normalizes separators based on the host OS. `path.posix` forces POSIX style and `path.win32` forces Windows style when cross-platform URL/path conversion is required. Always use path.join/resolve rather than manual string concatenation with / or \\.",
    "importantPoints": [
      "Via the `path` core module. Windows uses backslashes `\\` while POSIX (Linux/macOS) uses forward slashes `/`. Using `path.join(\"dir\", \"file.js\")` or `path.resolve()` normalizes separators based on the host OS. `path.posix` forces POSIX style and `path.win32` forces Windows style when cross-platform URL/path conversion is required.",
      "Always use path.join/resolve rather than manual string concatenation with / or \\."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "path",
      "cross-platform",
      "windows-posix"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the difference between path.resolve() and path.join() in Node.js?",
    "answer": "`path.join()` concatenates path segments using the platform-specific delimiter and normalizes the resulting path. `path.resolve()` resolves a sequence of paths into an **absolute path**, processing arguments from right to left as if running `cd` commands. If no absolute root is given, it prepends `process.cwd()`.",
    "explanation": "path.join concatenates; path.resolve always yields an absolute path anchored to root or process.cwd().",
    "interviewAnswer": "`path.join()` concatenates path segments using the platform-specific delimiter and normalizes the resulting path. `path.resolve()` resolves a sequence of paths into an **absolute path**, processing arguments from right to left as if running `cd` commands. If no absolute root is given, it prepends `process.cwd()`. path.join concatenates; path.resolve always yields an absolute path anchored to root or process.cwd().",
    "importantPoints": [
      "`path.join()` concatenates path segments using the platform-specific delimiter and normalizes the resulting path. `path.resolve()` resolves a sequence of paths into an **absolute path**, processing arguments from right to left as if running `cd` commands. If no absolute root is given, it prepends `process.cwd()`.",
      "path.join concatenates; path.resolve always yields an absolute path anchored to root or process.cwd()."
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
      "path",
      "path-resolve",
      "path-join"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the output of: path.join(\"/a\", \"/b\", \"c\") vs path.resolve(\"/a\", \"/b\", \"c\") on POSIX?",
    "answer": "`path.join(\"/a\", \"/b\", \"c\")` produces `\"/a/b/c\"`. `path.resolve(\"/a\", \"/b\", \"c\")` sees `\"/b\"` as an absolute path root, discards `\"/a\"`, and produces `\"/b/c\"`.",
    "explanation": "path.resolve treats leading slashes as root definitions, resetting previous segments.",
    "interviewAnswer": "`path.join(\"/a\", \"/b\", \"c\")` produces `\"/a/b/c\"`. `path.resolve(\"/a\", \"/b\", \"c\")` sees `\"/b\"` as an absolute path root, discards `\"/a\"`, and produces `\"/b/c\"`. path.resolve treats leading slashes as root definitions, resetting previous segments.",
    "importantPoints": [
      "`path.join(\"/a\", \"/b\", \"c\")` produces `\"/a/b/c\"`. `path.resolve(\"/a\", \"/b\", \"c\")` sees `\"/b\"` as an absolute path root, discards `\"/a\"`, and produces `\"/b/c\"`.",
      "path.resolve treats leading slashes as root definitions, resetting previous segments."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "nodejs",
      "output-prediction",
      "path",
      "path-resolve"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the Node.js REPL, and what does the underscore `_` special variable represent inside it?",
    "answer": "The REPL (Read-Eval-Print Loop) is the interactive Node.js command-line shell entered by typing `node`. The special variable `_` holds the result of the most recently evaluated expression in the REPL session.",
    "explanation": "Interactive interactive shell; _ stores the last return value.",
    "interviewAnswer": "The REPL (Read-Eval-Print Loop) is the interactive Node.js command-line shell entered by typing `node`. The special variable `_` holds the result of the most recently evaluated expression in the REPL session. Interactive interactive shell; _ stores the last return value.",
    "importantPoints": [
      "The REPL (Read-Eval-Print Loop) is the interactive Node.js command-line shell entered by typing `node`. The special variable `_` holds the result of the most recently evaluated expression in the REPL session.",
      "Interactive interactive shell; _ stores the last return value."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "repl",
      "cli",
      "fundamentals"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "How does Node.js core module resolution work when calling require(\"module_name\")?",
    "answer": "1) Node checks if \"module_name\" is a built-in Core Module (e.g. fs, http, path); if so, it loads it immediately from binary cache. 2) If it starts with `./`, `../`, or `/`, it resolves relative to file path. 3) Otherwise, it searches `node_modules` in the current directory, then parent directory, walking up to the drive root. 4) Inside target folder, it inspects `package.json` \"exports\" or \"main\", falling back to index.js.",
    "explanation": "Resolution: Core modules -> Local path -> node_modules hierarchy -> package.json entry.",
    "interviewAnswer": "1) Node checks if \"module_name\" is a built-in Core Module (e.g. fs, http, path); if so, it loads it immediately from binary cache. 2) If it starts with `./`, `../`, or `/`, it resolves relative to file path. 3) Otherwise, it searches `node_modules` in the current directory, then parent directory, walking up to the drive root. 4) Inside target folder, it inspects `package.json` \"exports\" or \"main\", falling back to index.js. Resolution: Core modules -> Local path -> node_modules hierarchy -> package.json entry.",
    "importantPoints": [
      "1) Node checks if \"module_name\" is a built-in Core Module (e.g. fs, http, path); if so, it loads it immediately from binary cache. 2) If it starts with `./`, `../`, or `/`, it resolves relative to file path. 3) Otherwise, it searches `node_modules` in the current directory, then parent directory, walking up to the drive root. 4) Inside target folder, it inspects `package.json` \"exports\" or \"main\", falling back to index.js.",
      "Resolution: Core modules -> Local path -> node_modules hierarchy -> package.json entry."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "module-resolution",
      "require",
      "node_modules"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the `node:` protocol prefix in import statements (e.g. import fs from \"node:fs\")?",
    "answer": "Introduced in Node 14.18+, the `node:` prefix explicitly specifies that the module is a built-in Node.js core module. It improves import speed by bypassing `node_modules` lookups entirely and prevents security attacks where a malicious third-party npm package is published with the same name as a core module.",
    "explanation": "Best practice: guarantees loading the core module without third-party namespace collisions.",
    "interviewAnswer": "Introduced in Node 14.18+, the `node:` prefix explicitly specifies that the module is a built-in Node.js core module. It improves import speed by bypassing `node_modules` lookups entirely and prevents security attacks where a malicious third-party npm package is published with the same name as a core module. Best practice: guarantees loading the core module without third-party namespace collisions.",
    "importantPoints": [
      "Introduced in Node 14.18+, the `node:` prefix explicitly specifies that the module is a built-in Node.js core module. It improves import speed by bypassing `node_modules` lookups entirely and prevents security attacks where a malicious third-party npm package is published with the same name as a core module.",
      "Best practice: guarantees loading the core module without third-party namespace collisions."
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
      "node-protocol",
      "core-modules",
      "security"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the purpose of the Node.js `util.promisify()` utility, and what custom symbol customizes its behavior?",
    "answer": "`util.promisify(fn)` takes a function expecting an error-first callback `(err, value) => void` and returns a version that returns a Promise. The behavior can be customized by attaching a function to `fn[util.promisify.custom]`, which is useful when functions do not follow standard error-first signatures.",
    "explanation": "Converts legacy callback APIs to Promises; customized via util.promisify.custom symbol.",
    "interviewAnswer": "`util.promisify(fn)` takes a function expecting an error-first callback `(err, value) => void` and returns a version that returns a Promise. The behavior can be customized by attaching a function to `fn[util.promisify.custom]`, which is useful when functions do not follow standard error-first signatures. Converts legacy callback APIs to Promises; customized via util.promisify.custom symbol.",
    "importantPoints": [
      "`util.promisify(fn)` takes a function expecting an error-first callback `(err, value) => void` and returns a version that returns a Promise. The behavior can be customized by attaching a function to `fn[util.promisify.custom]`, which is useful when functions do not follow standard error-first signatures.",
      "Converts legacy callback APIs to Promises; customized via util.promisify.custom symbol."
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
      "util-promisify",
      "promises",
      "callbacks"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the purpose of the Node.js `diagnostics_channel` module?",
    "answer": "`diagnostics_channel` provides a lightweight, synchronous pub/sub channel for telemetry and APM tracing inside Node.js. Libraries (e.g. database drivers, HTTP clients) publish diagnostic events through named channels with zero overhead when no subscribers are attached, allowing APM agents (Datadog, OpenTelemetry) to track performance without monkey-patching.",
    "explanation": "Native observability standard replacing brittle monkey-patching of core methods.",
    "interviewAnswer": "`diagnostics_channel` provides a lightweight, synchronous pub/sub channel for telemetry and APM tracing inside Node.js. Libraries (e.g. database drivers, HTTP clients) publish diagnostic events through named channels with zero overhead when no subscribers are attached, allowing APM agents (Datadog, OpenTelemetry) to track performance without monkey-patching. Native observability standard replacing brittle monkey-patching of core methods.",
    "importantPoints": [
      "`diagnostics_channel` provides a lightweight, synchronous pub/sub channel for telemetry and APM tracing inside Node.js. Libraries (e.g. database drivers, HTTP clients) publish diagnostic events through named channels with zero overhead when no subscribers are attached, allowing APM agents (Datadog, OpenTelemetry) to track performance without monkey-patching.",
      "Native observability standard replacing brittle monkey-patching of core methods."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "nodejs",
      "diagnostics_channel",
      "telemetry",
      "observability",
      "apm"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What are the security implications of using `eval()` or `vm.runInContext()` with untrusted user input in Node.js?",
    "answer": "`eval()` executes code with full access to local scope and global process object. `vm.runInContext()` executes code in a sandboxed context, but is NOT a secure sandbox against malicious code: an attacker can access the outer realm via constructor references (e.g. `this.constructor.constructor(\"return process\")()`) to escape the sandbox and access the host file system and network.",
    "explanation": "The vm module is explicitly NOT a security sandbox; use isolated child processes or WASM for untrusted code.",
    "interviewAnswer": "`eval()` executes code with full access to local scope and global process object. `vm.runInContext()` executes code in a sandboxed context, but is NOT a secure sandbox against malicious code: an attacker can access the outer realm via constructor references (e.g. `this.constructor.constructor(\"return process\")()`) to escape the sandbox and access the host file system and network. The vm module is explicitly NOT a security sandbox; use isolated child processes or WASM for untrusted code.",
    "importantPoints": [
      "`eval()` executes code with full access to local scope and global process object. `vm.runInContext()` executes code in a sandboxed context, but is NOT a secure sandbox against malicious code: an attacker can access the outer realm via constructor references (e.g. `this.constructor.constructor(\"return process\")()`) to escape the sandbox and access the host file system and network.",
      "The vm module is explicitly NOT a security sandbox; use isolated child processes or WASM for untrusted code."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "security",
      "vm",
      "eval",
      "sandbox-escape"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "nodejs-fundamentals",
    "question": "What is the purpose of the Node.js `--watch` flag introduced in Node 18+?",
    "answer": "`node --watch app.js` provides native file-watching and automatic process restart when imported files are modified. It eliminates the need for external development dependencies like `nodemon` or `ts-node-dev` for basic development hot-reloading.",
    "explanation": "Native built-in replacement for nodemon in modern Node.js versions.",
    "interviewAnswer": "`node --watch app.js` provides native file-watching and automatic process restart when imported files are modified. It eliminates the need for external development dependencies like `nodemon` or `ts-node-dev` for basic development hot-reloading. Native built-in replacement for nodemon in modern Node.js versions.",
    "importantPoints": [
      "`node --watch app.js` provides native file-watching and automatic process restart when imported files are modified. It eliminates the need for external development dependencies like `nodemon` or `ts-node-dev` for basic development hot-reloading.",
      "Native built-in replacement for nodemon in modern Node.js versions."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "node-watch",
      "cli",
      "developer-experience"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
