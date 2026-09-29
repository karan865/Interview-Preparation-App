# Node.js Advanced Interview Questions 21–40 — PDF Answers + English + Hindi

> **Important:** The **“My PDF Answer — Verbatim Transcription”** section follows the handwritten/scanned PDF as closely as readable. The source contains informal wording and grammar mistakes, so these have not been silently corrected.
>
> The English and Hindi sections below are updated as concise, speakable interview answers. The PDF answer section is preserved separately and is not modified.
>
> **Source:** Uploaded handwritten PDF, Node.js Advanced Questions section, Questions 21–40.

> **Interview-prep note:** The **My PDF Answer — Verbatim Transcription** sections are preserved from the uploaded document. Only the English/Hindi explanation sections were updated for interview speaking practice, with examples and diagrams where useful.

---

## 21. What are the states used in a Promise object in Node.js?

### My PDF Answer — Verbatim Transcription

In Node.js (and Javascript), a Promise represents an operation that will complete in the future and it can be in any of these states:

### 1. Pending

- Initial state.
- The operation is still ongoing.

```js
const promise = new Promise((resolve, reject) => {
});
```

### 2. Fulfilled (Resolved)

- The operation completed successfully.
- The `resolve()` function was called.

```js
const promise = Promise.resolve("Success");
```

### 3. Rejected

- The operation failed.
- The `reject()` function was called.

```js
const promise = Promise.reject("Error");
```

### Interview Answer — English

A Promise represents the result of an asynchronous operation. It starts as **pending** and can settle only once, becoming either **fulfilled** or **rejected**. After it is settled, its state cannot change again.

A simple flow is:

```text
Pending
  ├── success → Fulfilled
  └── failure → Rejected
```

Example:

```js
const promise = fetchData();

promise
  .then(data => console.log(data))
  .catch(err => console.log(err));
```

In an interview, I would mention that Promises make asynchronous code easier to compose and handle than deeply nested callbacks.

### Interview Answer — Hindi

Interview mein main bolunga ki Promise asynchronous operation ka future result represent karta hai. Ye **pending** se start hota hai aur sirf ek baar **fulfilled** ya **rejected** hota hai.

```text
Pending
  ├── success → Fulfilled
  └── failure → Rejected
```

Example mein `.then()` successful result aur `.catch()` error handle karta hai. Promise settle hone ke baad uski state change nahi hoti.

---

## 22. Explain the function of exit code in Node.js.

### My PDF Answer — Verbatim Transcription

Exit code in Node.js - the exit code is a number that indicates why a Node.js process ended. It helps identify whether the process exited successfully or due to an error.

In Node.js the exit code tells whether the process ended successful (`0`) or with an error (`1` or other non-zero codes), helping in debugging and automation scripts.

### Interview Answer — English

An exit code is a numeric result returned when a Node.js process terminates. `0` normally means successful completion, while a non-zero value indicates an error or abnormal termination.

It is especially useful in automation because a shell script or CI/CD system can decide whether the previous command succeeded.

Example:

```js
process.exit(0); // success
process.exit(1); // failure
```

For production systems, the exact non-zero code can be used to distinguish different failure conditions when the application defines them.

### Interview Answer — Hindi

Exit code ek numeric result hota hai jo process ke terminate hone par batata hai ki process successful tha ya fail hua. Normally `0` success ko represent karta hai aur non-zero value error ya abnormal termination ko.

```js
process.exit(0);
process.exit(1);
```

Ye shell scripts, CI/CD pipelines aur monitoring mein useful hai kyunki automation exit code dekhkar success ya failure decide kar sakta hai.

---

## 23. What causes server latency and prevents scalability in Node.js?

### My PDF Answer — Verbatim Transcription

Blocking operations, heavy CPU tasks and poor async handling can cause latency and make a Node.js server less scalable.

### How to improve scalability:

- use non-blocking I/O (e.g. `fs.readFile` instead of `fs.readFileSync`)
- offload CPU-heavy tasks to worker threads or background workers
- use caching (e.g. Redis)
- optimize DB queries and use connection pooling
- use load balancers and clustering

### Interview Answer — English

Latency increases when a request spends too much time waiting for I/O, the event loop is blocked by CPU-heavy or synchronous work, or the database is slow. Scalability suffers when one process cannot handle more concurrent work efficiently.

A useful interview flow is:

```text
Request
  ↓
Node.js / Event Loop
  ├── blocked CPU work → latency
  ├── slow DB → latency
  └── efficient async I/O → continue other requests
```

Example: replace `fs.readFileSync()` with an asynchronous API, cache frequently requested data, optimize DB queries, and move CPU-heavy work to workers/background jobs.

### Interview Answer — Hindi

Interview mein main kahunga ki latency tab badhti hai jab event loop block ho, CPU-heavy work main process mein ho, database slow ho ya I/O inefficient ho.

```text
Request
  ↓
Event Loop
  ├── CPU/blocking work → delay
  ├── slow DB → delay
  └── async I/O → other work can continue
```

Solutions mein non-blocking I/O, DB optimization, connection pooling, caching, background workers aur load balancing include hain.

---

## 24. What is a control function in Node.js?

### My PDF Answer — Verbatim Transcription

A control function in Node.js is a function that helps manage the order and logic of executing asynchronous tasks, like callbacks, promises or middleware.

A control function in Node.js helps manage the flow of asynchronous tasks, deciding whether to continue, retry or handle errors - especially in callbacks or middleware.

### Interview Answer — English

In practice, the term **control function** refers to a function that controls the flow of asynchronous or middleware execution. It can decide whether processing continues, stops, retries, or moves to error handling.

For example, in Express middleware:

```js
app.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized");
  }

  next();
});
```

Here, `next()` transfers control to the next middleware. This is why control-flow functions are important in callbacks, middleware chains, and asynchronous workflows.

### Interview Answer — Hindi

Control function asynchronous ya middleware execution ka flow control karta hai. Ye decide kar sakta hai ki processing continue karni hai, stop karni hai, error handle karna hai ya retry karna hai.

Express example mein `next()` control ko next middleware tak bhejta hai:

```js
app.use((req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send("Unauthorized");
  }
  next();
});
```

Isliye callbacks, middleware aur async workflows mein control functions important hain.

---

## 25. When do you need modularization in Node.js?

### My PDF Answer — Verbatim Transcription

You use modularization in Node.js when your codebase becomes large or repetitive and you want to organize it into smaller, reusable and maintainable files or modules.

### What is modularization?

Modularization means breaking your code into separate, logical modules, each handling a specific task like routes, database logic or utilities.

### You should use modularization when:

- codebase is growing
- you need reusability
- working in teams → developers can work on different modules independently
- separation of concerns → helps separate handlers, database logic, config etc.

In Node.js modularization is used to break a large codebase into smaller reusable files to improve readability and maintainability.

### Interview Answer — English

I use modularization when the application becomes large enough that keeping routes, business logic, database code, configuration, and utilities in one place becomes difficult to maintain.

A common structure is:

```text
src/
 ├── routes/
 ├── controllers/
 ├── services/
 ├── models/
 ├── middleware/
 └── utils/
```

For example, a user controller should handle request-level logic, while a user service can contain reusable business logic. This improves separation of concerns, testing, reuse, and team development.

### Interview Answer — Hindi

Modularization tab use karte hain jab project bada ho raha ho aur routes, controllers, services, database logic aur utilities ko separate rakhna useful ho.

```text
src/
 ├── routes/
 ├── controllers/
 ├── services/
 ├── models/
 └── utils/
```

Isse code reusable, testable aur maintainable hota hai. Team mein different developers bhi different modules par independently kaam kar sakte hain.

---

## 26. Explain how blocking is prevented in Node.js.

### My PDF Answer — Verbatim Transcription

Node.js prevents blocking using a non-blocking event loop and asynchronous APIs, allowing it to handle many operations concurrently without waiting.

### Interview Answer — English

Node.js prevents blocking mainly through its event-driven, non-blocking I/O model. When Node starts an I/O operation, it does not keep the JavaScript thread waiting for the result. The operation is handled asynchronously, and its callback or Promise continuation runs when the result is ready.

```text
Request
  ↓
Start async I/O
  ↓
Event Loop continues other work
  ↓
I/O completes
  ↓
Callback / Promise continuation
```

For example, `fs.readFile()` is preferable to `fs.readFileSync()` inside a request handler because the synchronous version can block the event loop.

### Interview Answer — Hindi

Node.js non-blocking event loop aur asynchronous APIs ki wajah se I/O wait ke time JavaScript thread ko unnecessarily block nahi karta.

```text
Request
  ↓
Async I/O start
  ↓
Event Loop doosra kaam karta hai
  ↓
I/O complete
  ↓
Callback / Promise continuation
```

Example: request handler mein `fs.readFile()` use karna generally `fs.readFileSync()` se better hai, kyunki synchronous operation event loop ko block kar sakta hai.

---

## 27. How many layers are there in a Node.js application architecture?

### My PDF Answer — Verbatim Transcription

Node.js architecture usually has 4 layers: Presentation, Business Logic, Data Access and Database - each separating concerns for better maintainability.

### Presentation Layer

Handles HTTP requests (routes/controllers).

### Business Logic Layer

Contains business logic.

### Integration/Data Layer

Manages database or external service interactions.

### Interview Answer — English

The PDF uses four conceptual layers: Presentation, Business Logic, Data Access/Integration, and Database.

```text
Client
  ↓
Presentation
  ↓
Business Logic
  ↓
Data Access / Integration
  ↓
Database
```

For example, an Express route receives the request, a service applies the business rule, a repository/data-access layer queries MongoDB or MySQL, and the database stores the data. The main benefit is separation of responsibilities, which makes the application easier to test and maintain.

### Interview Answer — Hindi

PDF ke according architecture ko four conceptual layers mein samjha sakte hain:

```text
Client
  ↓
Presentation
  ↓
Business Logic
  ↓
Data Access / Integration
  ↓
Database
```

Presentation request handle karta hai, business layer rules handle karti hai, data-access layer database/external services se baat karti hai aur database data store karta hai. Is separation se code maintain karna easy hota hai.

---

## 28. Name the input arguments for an asynchronous queue.

### My PDF Answer — Verbatim Transcription

The main input arguments for an async queue are a worker function that processes tasks and a concurrency limit that controls parallel execution.

```js
async.queue(worker, concurrency)
```

### Interview Answer — English

The queue signature shown in the PDF is:

```js
async.queue(worker, concurrency)
```

The **worker** receives and processes each queued task. The **concurrency** value limits how many tasks the queue processes at the same time.

For example, if concurrency is `3`, at most three tasks are processed simultaneously. This is useful when calling an external API or processing jobs because it prevents the application from starting an uncontrolled number of operations at once.

### Interview Answer — Hindi

Async queue ka format PDF mein:

```js
async.queue(worker, concurrency)
```

`worker` har task ko process karta hai aur `concurrency` batata hai ki ek time par kitne tasks parallel chal sakte hain.

Example: concurrency `3` hai to maximum 3 tasks ek saath process honge. Ye external APIs ya background jobs ko uncontrolled parallel execution se bachane mein useful hai.

---

## 29. Does Node.js application buffer data?

### My PDF Answer — Verbatim Transcription

Yes, Node.js does buffer data, especially during file I/O, network operations, or streams. It uses Buffer class to temporarily store chunks of binary data.

### What is a Buffer?

In Node.js, a Buffer is a built-in class used to handle binary data stored directly in memory.

For example:

- when reading a file with `fs.read()`
- receiving chunks of data from a network socket
- streaming large files

### Interview Answer — English

Yes. Node.js uses buffers when working with binary data and stream-based I/O. A `Buffer` is a memory area that stores raw bytes.

For example:

```js
const fs = require("node:fs");

fs.readFile("photo.jpg", (err, data) => {
  console.log(data); // Buffer
});
```

Streams also process data in chunks instead of necessarily loading an entire large file into memory. This is important for large files, network sockets, uploads, and downloads.

### Interview Answer — Hindi

Haan. Node.js streams, files aur network data ke saath kaam karte time buffering use karta hai. `Buffer` raw binary bytes ko memory mein temporarily store karta hai.

Example:

```js
fs.readFile("photo.jpg", (err, data) => {
  console.log(data); // Buffer
});
```

Large files ke case mein streams data ko chunks mein process kar sakte hain, jisse poora file ek saath memory mein load karna zaroori nahi hota.

---

## 30. Is it possible to run external processes with Node.js?

### My PDF Answer — Verbatim Transcription

Yes, Node.js can run external system commands using the `child_process` module with methods like `exec`, `spawn`, and `fork`.

1) `exec()` → runs a command in a shell and buffers the output.

2) `spawn()` → launches a new process with a given command.

3) `fork()` → used to spawn new Node.js processes with communication with them.

### Interview Answer — English

Yes. Node.js provides the `child_process` module for this.

```text
Node.js Process
      |
      +── exec()   → shell command + buffered output
      +── spawn()  → process + streaming I/O
      +── fork()   → another Node.js process + IPC
```

For example, `spawn()` is useful when a command produces a large or continuous amount of output, while `fork()` is specifically designed for starting another Node.js module and communicating with it.

### Interview Answer — Hindi

Haan, `child_process` module se external processes run kar sakte hain.

```text
exec()  → shell command + buffered output
spawn() → process + streaming I/O
fork()  → Node.js process + IPC
```

`spawn()` large/continuous output ke liye useful hai, jabki `fork()` another Node.js module ko separate process mein run karke parent-child communication provide karta hai.

---

## 31. Is it possible to avoid callback hell and how?

### My PDF Answer — Verbatim Transcription

Yes, callback hell in Node.js can be avoided by using promises, async/await and clean modular code to keep your logic readable and maintainable.

### Interview Answer — English

Yes. Callback hell can be avoided by changing the structure of asynchronous code. Promises and `async/await` are the most common approaches, along with small reusable functions and clear error handling.

Instead of deeply nesting:

```js
getUser(id, user => {
  getOrders(user, orders => {
    getPayment(orders, payment => {
      // ...
    });
  });
});
```

we can write:

```js
const user = await getUser(id);
const orders = await getOrders(user);
const payment = await getPayment(orders);
```

This makes the flow easier to read, test, and maintain.

### Interview Answer — Hindi

Haan, callback hell ko Promises, `async/await`, reusable functions aur modular code se reduce kiya ja sakta hai.

Nested callbacks:

```text
callback
  └── callback
       └── callback
```

ki jagah:

```js
const user = await getUser(id);
const orders = await getOrders(user);
const payment = await getPayment(orders);
```

likhne se flow readable aur maintainable ho jata hai. Error handling bhi `try...catch` se clear ho jati hai.

---

## 32. What is the function of the `fs` module?

### My PDF Answer — Verbatim Transcription

The `fs` module is used to create and manipulate files. It also provides an API for interacting with the file system.

### Interview Answer — English

The `fs` module provides Node.js APIs for interacting with the file system. It supports files and directories and provides synchronous as well as asynchronous APIs.

Common operations include:

```js
fs.readFile()
fs.writeFile()
fs.rename()
fs.unlink()
fs.mkdir()
```

For server applications, asynchronous APIs are generally preferred for request-time file operations because synchronous file-system calls can block the event loop.

### Interview Answer — Hindi

`fs` module file system ke saath kaam karne ke APIs provide karta hai. Isse files/directories ko read, write, create, rename aur delete kiya ja sakta hai.

Common methods:

```js
fs.readFile()
fs.writeFile()
fs.rename()
fs.unlink()
fs.mkdir()
```

Synchronous aur asynchronous dono APIs available hain. Server request handling mein blocking avoid karne ke liye asynchronous APIs generally preferred hote hain.

---

## 33. Define the `os` module in Node.js.

### My PDF Answer — Verbatim Transcription

The `os` module in Node.js provides built-in method to interact with the operating system, allowing you to retrieve information like CPU, memory, hostname, platform, uptime and more.

### Interview Answer — English

The `os` module provides information and utilities related to the operating system.

For example:

```js
const os = require("node:os");

console.log(os.cpus().length);
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.platform());
console.log(os.hostname());
```

This information can be useful for diagnostics, monitoring, capacity checks, and deciding how many worker processes to create. It is not used to perform normal file or network I/O.

### Interview Answer — Hindi

`os` module operating system aur machine ki information provide karta hai.

```js
const os = require("node:os");

console.log(os.cpus().length);
console.log(os.freemem());
console.log(os.platform());
console.log(os.hostname());
```

Iska use diagnostics, monitoring, system information aur CPU-based worker configuration jaise cases mein kiya ja sakta hai.

---

## 34. What is a Transform Stream in Node.js?

### My PDF Answer — Verbatim Transcription

A Transform Stream is a type of duplex stream in Node.js that can modify or transform the data as it is read and written.

It acts as both:

- a readable stream (you can read from it)
- a writable stream (you can write to it)

and it processes the input data before passing it along.

### Interview Answer — English

A Transform Stream is a duplex stream where the output is derived from the input. Data enters the writable side, is transformed, and becomes available from the readable side.

```text
Input chunks
    ↓
Transform Stream
    ↓
Changed chunks
    ↓
Output
```

For example, a transform stream can modify text or compress data while it is flowing:

```js
input.pipe(transform).pipe(output);
```

This is memory-efficient for large data because the application can process chunks rather than loading everything at once.

### Interview Answer — Hindi

Transform Stream input data ko receive karta hai, usko transform karta hai aur output deta hai. Ye readable aur writable dono hota hai.

```text
Input chunks
    ↓
Transform Stream
    ↓
Changed chunks
    ↓
Output
```

Example ke liye text transform ya compression stream ke beech mein ki ja sakti hai. Streams chunks mein kaam karte hain, isliye large data ko efficiently process kiya ja sakta hai.

---

## 35. How does Node.js handle concurrency if it is single-threaded?

### My PDF Answer — Verbatim Transcription

Node.js uses an event-driven, non-blocking I/O model with a single-threaded event loop to handle multiple operations concurrently.

### Interview Answer — English

Node.js handles concurrency by keeping JavaScript execution on the main thread while using the event loop and asynchronous I/O mechanisms to coordinate many operations.

```text
JS Call Stack
     ↓
Event Loop
     ↓
Async I/O / Runtime
     ↓
Ready callbacks
     ↓
Call Stack
```

If a network request is waiting, Node.js can work on another request instead of waiting synchronously. The important interview distinction is that **concurrency does not mean JavaScript is executing multiple JavaScript statements simultaneously on the same main thread**. CPU-heavy JavaScript should be moved to worker threads or separate processes.

### Interview Answer — Hindi

Node.js JavaScript ko main thread par execute karta hai, lekin event loop aur asynchronous I/O ki help se multiple operations ko concurrently handle kar sakta hai.

```text
Call Stack
   ↓
Event Loop
   ↓
Async I/O / Runtime
   ↓
Ready callback
   ↓
Call Stack
```

Agar network request wait kar rahi hai, tab JavaScript thread doosre requests handle kar sakta hai. Important point: single-threaded JavaScript ka matlab ye nahi ki application sirf ek request handle kar sakti hai; I/O concurrency non-blocking model se possible hoti hai.

---

## 36. What is the meaning of HTTP status code 500?

### My PDF Answer — Verbatim Transcription

HTTP status code 500 indicates that the server is unable to process the request. This can be due to several reasons, such as an overloaded server or a network issue.

### Interview Answer — English

`500 Internal Server Error` means the server encountered an unexpected condition and could not complete the request. It is a **5xx server-side** status.

Example:

```js
app.get("/users", async (req, res) => {
  try {
    // database call
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
});
```

In production, the client response should avoid exposing stack traces or secrets. The detailed error should be logged securely on the server.

### Interview Answer — Hindi

`500 Internal Server Error` ek 5xx status code hai. Iska matlab server ko unexpected problem hui aur request successfully complete nahi ho saki.

Example:

```js
res.status(500).json({
  message: "Internal server error"
});
```

Client ko detailed stack trace ya secret information nahi deni chahiye. Actual error ko server-side logs mein securely record karna better hai.

---

## 37. What is a Node Inspector?

### My PDF Answer — Verbatim Transcription

A Node Inspector is a debugging tool that allows developers to inspect and debug the code of an application through a graphical user interface.

### Interview Answer — English

Node Inspector is the debugging interface built around Node.js's inspector capabilities. It lets a developer pause execution, inspect variables and call stacks, set breakpoints, and investigate runtime behavior.

A common way to start it is:

```bash
node --inspect app.js
```

The application can then be inspected using supported developer tools. In practice, VS Code debugging is also commonly used because it provides breakpoints, watches, call-stack inspection, and step-by-step execution.

### Interview Answer — Hindi

Node Inspector Node.js application ko debug karne ke liye use hota hai. Isse breakpoints, variables, call stack aur execution flow inspect kar sakte hain.

Example:

```bash
node --inspect app.js
```

Day-to-day development mein VS Code ka debugger bhi use kiya ja sakta hai, jisme breakpoints, step-by-step execution aur variable inspection available hota hai.

---

## 38. When are we required to use the cluster module in Node.js?

### My PDF Answer — Verbatim Transcription

Use the cluster module when you need parallelism on a multi-core CPU, want to improve performance for CPU-heavy tasks or increase your scalability by running multiple worker processes.

### When we need to use:

1. CPU-bound workloads
2. Better performance on multi-core systems
3. Handling high-traffic

### Interview Answer — English

The cluster module is useful when I want multiple Node.js **processes** to use multiple CPU cores and share the workload of a server.

```text
Primary Process
   ├── Worker 1
   ├── Worker 2
   └── Worker 3
```

Each worker is a separate process. Clustering can help with high-traffic server workloads and process-level isolation. For a CPU-heavy calculation inside JavaScript, I would also consider worker threads; cluster is primarily about multiple processes rather than threads.

### Interview Answer — Hindi

Cluster module multiple Node.js **processes** ko run karke multiple CPU cores ka better use karne mein help karta hai.

```text
Primary
 ├── Worker 1
 ├── Worker 2
 └── Worker 3
```

Ye high-traffic server workloads aur process-level parallelism ke liye useful ho sakta hai. CPU-heavy JavaScript calculation ke liye worker threads bhi consider karne chahiye, kyunki cluster ka main concept multiple processes hai.

---

## 39. How does Node.js use cryptography?

### My PDF Answer — Verbatim Transcription

Node.js uses cryptography mainly for security purposes - hashing passwords, encrypting/decrypting data, creating digital signatures, verifying authenticity and generating secure random values.

All of this is done using the `crypto` core module, which wraps OpenSSL's cryptographic capabilities.

### Interview Answer — English

Node.js provides the built-in `crypto` module for cryptographic operations such as hashing, encryption/decryption, digital signatures, verification, and secure random values.

Example:

```js
const crypto = require("node:crypto");

const hash = crypto
  .createHash("sha256")
  .update("hello")
  .digest("hex");

console.log(hash);
```

An important interview point is that hashing and encryption are different. Hashing is generally one-way, while encryption is designed to be reversible with the appropriate key. Passwords should use dedicated password-hashing algorithms rather than simply storing a general-purpose hash.

### Interview Answer — Hindi

Node.js ka built-in `crypto` module hashing, encryption/decryption, digital signatures, verification aur secure random values jaise cryptographic operations ke liye use hota hai.

Example:

```js
const hash = crypto
  .createHash("sha256")
  .update("hello")
  .digest("hex");
```

Interview mein hashing aur encryption ka difference bhi mention karna chahiye: hashing generally one-way hoti hai, encryption key ke through reversible hoti hai. Passwords ke liye dedicated password-hashing algorithms use karne chahiye.

---

## 40. How do you include an HTTP server in a Node.js module?

### My PDF Answer — Verbatim Transcription

In Node.js, you include an HTTP server by using the built-in `http` module and either exporting the server object itself or exposing it from a module so it can be used elsewhere.

### Interview Answer — English

I can create the HTTP server with Node's built-in `http` module and export the server object from the module.

```js
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("Hello");
});

module.exports = server;
```

Another file can import it:

```js
const server = require("./server");
server.listen(3000);
```

This separates server creation from the code that starts the server, which is useful for testing and application organization.

### Interview Answer — Hindi

Node.js ke built-in `http` module se server create karke usko module se export kar sakte hain.

```js
const http = require("node:http");

const server = http.createServer((req, res) => {
  res.end("Hello");
});

module.exports = server;
```

Phir doosri file mein import karke `server.listen(3000)` call kar sakte hain. Isse server creation aur startup ko separate rakhna easy hota hai aur testing bhi better ho sakti hai.

---

## Source Note

Questions 21–40 and the **“My PDF Answer — Verbatim Transcription”** sections above are based on the handwritten/scanned Node.js Advanced Questions pages containing Questions 21–40. fileciteturn10file0

The English and Hindi sections are simplified explanations for interview preparation. They do not replace or silently correct the source-PDF answers.
