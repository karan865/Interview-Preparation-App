# Node.js Advanced Interview Questions 1–20 — PDF Answers + English + Hindi

> **Important:** The **“My PDF Answer — Verbatim Transcription”** section follows the handwritten/scanned PDF as closely as readable. The source contains informal wording and some grammar mistakes, so those have not been silently corrected.
>
> The English and Hindi sections are simple interview-friendly explanations based on the PDF answer.
>
> **Source:** Uploaded handwritten PDF, Node.js Advanced Questions section, Questions 1–20.

---

## 1. What is a cluster in Node.js?

### My PDF Answer — Verbatim Transcription

A cluster in Node.js is a way to run multiple instances of your Node.js app (called workers) to take advantage of multicore CPUs.

By default, Node.js runs in a single-threaded way using only one CPU core, even on a machine having many cores.

The cluster module helps you create child processes (workers) that all share the same server port, improving performance and handling of the same time.

### Why use cluster?

- to improve scalability of your Server.
- to make better use of multi-core processors.
- to handle more requests simultaneously.

### One Line Answer

A cluster in Node.js allows you to run multiple processes of your app to fully use all CPU cores and handle more traffic efficiently.

### Simple Explanation — English

A Node.js cluster allows us to run multiple worker processes of the same application so we can use multiple CPU cores.

Normally, one Node.js process mainly uses one CPU core. With the `cluster` module, a primary process can create multiple workers, and those workers can listen on the same server port.

For example:

```text
                 Primary Process
                  /    |    \
                 ↓     ↓     ↓
             Worker 1 Worker 2 Worker 3
                 ↓       ↓       ↓
                    Same Port
```

The main benefits are better CPU utilization, scalability, and the ability to handle more requests. It is especially useful for CPU utilization across multiple cores; it does not make one JavaScript execution thread itself multi-threaded.

### Simple Explanation — Hindi

Node.js cluster ka use application ke multiple worker processes run karne ke liye kiya jata hai, taaki multiple CPU cores ka better use ho sake.

Normally ek Node.js process mainly ek CPU core use karta hai. `cluster` module ke through primary process multiple workers create kar sakta hai, aur workers same server port par listen kar sakte hain.

```text
             Primary Process
              /    |    \
             ↓     ↓     ↓
          Worker1 Worker2 Worker3
             ↓      ↓      ↓
              Same Server Port
```

Iska main benefit scalability, better CPU utilization aur zyada requests handle karna hai.

## 2. Explain some of the cluster methods in Node.js.

### My PDF Answer — Verbatim Transcription

Some important cluster methods in Node.js are:

### 1) `fork()`

It creates a new worker process from the master.

### 2) `isMaster`

The `isMaster` returns true if the current process is master, else false.

### 3) `workers`

It returns the list of the current workers.

### 4) `process`

It returns the global child process.

### 5) `send()`

It sends a message from the worker to the master or vice versa.

### 6) `kill()`

It is used to kill the current worker.

### Simple Explanation — English

The cluster API provides methods and properties to create and manage worker processes.

Important ones are:

- `fork()` — creates a new worker process.
- `isMaster` — used in the PDF to identify the master process. In modern Node.js, `isPrimary` is the preferred name.
- `workers` — provides access to the workers managed by the primary process.
- `send()` — sends messages between processes when IPC is available.
- `kill()` — terminates a worker process.

A simple flow is:

```text
Primary Process
      ↓ fork()
   Worker
      ↕ send()
   IPC Message
      ↕
Primary Process
```

In an interview, I would also mention that modern Node.js documentation uses the terms `primary` and `isPrimary` rather than `master` and `isMaster`.

### Simple Explanation — Hindi

Cluster API workers ko create aur manage karne ke liye methods aur properties provide karta hai.

- `fork()` → new worker process create karta hai.
- `isMaster` → PDF mein master process identify karne ke liye diya gaya hai; modern Node.js mein `isPrimary` preferred naam hai.
- `workers` → current workers ka access deta hai.
- `send()` → IPC ke through processes ke beech message bhejne ke liye use hota hai.
- `kill()` → worker process ko terminate karta hai.

```text
Primary
  ↓ fork()
Worker
  ↕ send()
IPC Message
  ↕
Primary
```

Interview mein main ye bhi mention karunga ki modern Node.js mein `master` ke badle `primary` aur `isMaster` ke badle `isPrimary` terminology use hoti hai.

## 3. How do you manage sessions in Node.js?

### My PDF Answer — Verbatim Transcription

Session management in Node.js is important for tracking user data across multiple requests (like login state).

### What's a session in Node.js?

A session is a way to store user data on the server side between HTTP requests. It's typically used to track whether a user is logged in, their preferences, cart data etc.

→ In Node.js (with express), sessions are managed using `express-session` middleware, which stores session data on the server and assigns a session ID to cookies.

### Simple Explanation — English

Session management allows a server to remember information about a user across multiple HTTP requests.

In Express, `express-session` can create a session. The server stores the session data, while the client normally receives a session ID in a cookie.

The basic flow is:

```text
Login
  ↓
Create Session
  ↓
Store Session Data
  ↓
Send Session ID Cookie
  ↓
Next Request + Cookie
  ↓
Find Session Data
  ↓
Authenticate User
```

For example, after login, the session can store the user's ID. On later requests, the session ID helps the server identify that user.

In production, session storage should generally be shared or externalized when multiple application instances are running, rather than relying only on one process's memory.

### Simple Explanation — Hindi

Session management ka purpose hai multiple HTTP requests ke beech server ko user ki information ya login state remember karwana.

Express mein `express-session` use karke session create kiya ja sakta hai. Server session data store karta hai aur client ko generally session ID cookie ke through milti hai.

```text
Login
  ↓
Session Create
  ↓
Session Data Store
  ↓
Session ID Cookie
  ↓
Next Request
  ↓
Session Find
  ↓
User Identify
```

Example: login ke baad session mein user ID store ho sakti hai. Agli request mein session ID ke basis par server user ko identify karta hai.

Multiple server instances wale production setup mein session storage ko shared/external rakhna useful hota hai.

## 4. Explain the package needed for file uploading in Node.js.

### My PDF Answer — Verbatim Transcription

The package used for file uploading in Node.js is **Multer**.

Multer can be used to upload files to the server using `req.file` and `req.files`. There are other modules in the market but Multer is very popular when you are uploading files.

### Simple Explanation — English

Multer is a Node.js middleware commonly used to handle file uploads, especially `multipart/form-data` requests.

It integrates with Express and makes uploaded files available through properties such as `req.file` for a single file or `req.files` for multiple files, depending on the configuration.

For example:

```js
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("photo"), (req, res) => {
  console.log(req.file);
  res.send("Uploaded");
});
```

In a real application, I would also validate file size, file type, filename handling, and storage permissions instead of accepting arbitrary uploads.

### Simple Explanation — Hindi

Multer Node.js mein file uploads handle karne ke liye commonly used middleware hai, especially `multipart/form-data` requests ke liye.

Single file ke case mein `req.file` aur multiple files ke case mein configuration ke according `req.files` use kiya ja sakta hai.

```js
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("photo"), (req, res) => {
  console.log(req.file);
  res.send("Uploaded");
});
```

Production mein file size, file type, filename aur storage permissions ko validate karna bhi important hai.

## 5. How do you read command-line arguments in Node.js?

### My PDF Answer — Verbatim Transcription

In Node.js, command-line arguments are accessed using `process.argv`. These arguments start from index 2.

### Simple Explanation — English

Node.js provides command-line arguments through the `process.argv` array.

The first entries represent the Node executable and the script path, so user-provided arguments normally start at index `2`.

For example, if I run:

```bash
node app.js admin 25
```

I can read the arguments like this:

```js
console.log(process.argv[2]); // admin
console.log(process.argv[3]); // 25
```

So `process.argv` is useful when we want to pass simple configuration or input directly from the command line.

### Simple Explanation — Hindi

Node.js mein command-line arguments `process.argv` array se read kiye jate hain.

Normally user ke arguments index `2` se start hote hain, kyunki pehle entries Node executable aur script path ko represent karti hain.

Example:

```bash
node app.js admin 25
```

```js
console.log(process.argv[2]); // admin
console.log(process.argv[3]); // 25
```

Iska use command line se simple input ya configuration pass karne ke liye kiya ja sakta hai.

## 6. Explain the `util` module in Node.js.

### My PDF Answer — Verbatim Transcription

The util module in Node.js provides access to various utility functions. There are various utility modules available in the Node.js modules library.

- **OS module:** operating system based utility module for Node.js are provided by the `os` module.
- **Path Module:** the path module in Node.js is used for transforming and handling various file paths.
- **DNS Module:** DNS module enable us to use the underlying operating system's resolution functionalities. The actual DNS lookup is also performed by the DNS modules.
- **Net module:** Net module in Node.js is used for the creation of both client and server. Similar to DNS, this module also provides an async network wrapper.

### Simple Explanation — English

The `util` module is a built-in Node.js module that provides utility functions for common programming tasks.

It contains helpers for things such as formatting, inspection, callback utilities, and other runtime-related operations.

The PDF also mentions related core modules:

- `os` — operating-system information.
- `path` — file and directory path handling.
- `dns` — DNS lookup and resolution.
- `net` — low-level network communication.

For example, `path.join()` can safely build a path without manually handling path separators.

### Simple Explanation — Hindi

`util` Node.js ka built-in module hai jo common programming tasks ke liye utility functions provide karta hai.

Iske alawa PDF mein related core modules bhi diye gaye hain:

- `os` → operating system ki information.
- `path` → file aur directory paths handle karna.
- `dns` → DNS lookup aur resolution.
- `net` → low-level network communication.

Example: `path.join()` ka use file paths ko safely combine karne ke liye kiya ja sakta hai.

## 7. How do you handle environment variables in Node.js?

### My PDF Answer — Verbatim Transcription

We can handle environment variable in Node.js. We can specify environment configuration as well as key in the `.env` file to access the variable in the application.

We can use the `process.env` variable name syntax.

To use it we have to install the dotenv package using the below command:

```bash
npm install dotenv
```

### Simple Explanation — English

Environment variables are used to keep configuration outside the application source code.

A common approach is to put local configuration in a `.env` file and load it with the `dotenv` package. The application can then read values through `process.env`.

Example:

```env
PORT=3000
DB_HOST=localhost
```

```js
require("dotenv").config();

console.log(process.env.PORT);
console.log(process.env.DB_HOST);
```

The important point is that secrets such as database passwords or API keys should not be hard-coded or committed to source control. In production, environment variables are often supplied by the deployment platform or secret manager.

### Simple Explanation — Hindi

Environment variables ka use configuration ko source code se bahar rakhne ke liye kiya jata hai.

`.env` file mein values rakh kar `dotenv` package se load kar sakte hain aur application mein `process.env` se access kar sakte hain.

```env
PORT=3000
DB_HOST=localhost
```

```js
require("dotenv").config();
console.log(process.env.PORT);
```

Database passwords aur API keys ko source code mein hard-code nahi karna chahiye aur `.env` ko normally source control mein commit nahi karna chahiye.

## 8. What is the DNS module in Node.js?

### My PDF Answer — Verbatim Transcription

The DNS module in Node.js provides functions to perform DNS (Domain Name System) lookup and resolve domain names, just like how browsers convert domain names (e.g. `google.com`) into IP addresses.

→ It's part of Node.js's built-in core module, so no installation is needed.

### When to use it

- you want to resolve domain names to IP addresses.
- you need to check DNS records, CNAMEs, etc.
- you're building a tool that needs network-level info.

### Simple Explanation — English

The Node.js `dns` module is a built-in core module used to resolve domain names and work with DNS information.

For example, we can resolve a hostname such as `example.com` to an IP address.

```js
const dns = require("node:dns");

dns.lookup("example.com", (err, address) => {
  if (err) throw err;
  console.log(address);
});
```

It is useful when an application needs network-level DNS information or needs to perform DNS lookups without installing a separate package.

### Simple Explanation — Hindi

Node.js ka `dns` module built-in core module hai jo domain names ko resolve karne aur DNS information ke saath kaam karne ke liye use hota hai.

Example:

```js
const dns = require("node:dns");

dns.lookup("example.com", (err, address) => {
  if (err) throw err;
  console.log(address);
});
```

Agar application ko DNS lookup ya network-level DNS information chahiye, to is module ka use kiya ja sakta hai.

## 9. What are child processes in Node.js?

### My PDF Answer — Verbatim Transcription

Usually, Node.js allows single-threaded, non-blocking performance but running a single thread on a CPU cannot handle increasing workload hence the child process module can be used to spawn child processes.

The child processes can be used to spawn child processes using a built-in messaging system.

### Simple Explanation — English

A child process is a separate operating-system process created from a Node.js application.

Node.js provides the `child_process` module with APIs such as `spawn()`, `exec()`, and `fork()`.

Child processes are useful when we need to run an external command, execute another program, or isolate work from the main Node.js process.

For example:

```text
Main Node.js Process
        |
        | spawn()
        ↓
 External Process
        |
        ↓
 stdout / stderr
```

Because the child is a separate process, it has its own memory space and can communicate with the parent through supported IPC mechanisms.

### Simple Explanation — Hindi

Child process ek separate operating-system process hota hai jo Node.js application se create kiya ja sakta hai.

Node.js ka `child_process` module `spawn()`, `exec()` aur `fork()` jaise APIs provide karta hai.

Iska use external command run karne ya main Node.js process se alag work execute karne ke liye hota hai.

```text
Main Node.js Process
        |
      spawn()
        ↓
  Child Process
        |
   stdout/stderr
```

Child process ka apna memory space hota hai aur required case mein parent process ke saath IPC ke through communicate kar sakta hai.

## 10. How do you validate data in Node.js?

### My PDF Answer — Verbatim Transcription

Validation in Node.js can be easily done by using the express module. This module is popular for data validation. There are other modules available in the market like `Joi`, `express-validator` etc but `express-validator` is widely used and popular among them.

### Simple Explanation — English

Data validation means checking whether incoming data has the expected type, format, required fields, and allowed values before the application uses it.

In an Express application, libraries such as `express-validator` or `Joi` can be used.

For example, for a registration API, I might validate:

```text
Request
  ↓
Validate email
  ↓
Validate password
  ↓
Validate required fields
  ↓
If valid → Controller
If invalid → 400 response
```

Validation should happen before business logic, and important validation must be performed on the server even if the frontend already validates the same data.

### Simple Explanation — Hindi

Data validation ka matlab incoming data ko process karne se pehle check karna hai ki uska type, format, required fields aur values expected hain ya nahi.

Express mein `express-validator` ya `Joi` jaise libraries use ki ja sakti hain.

```text
Request
  ↓
Email Validate
  ↓
Password Validate
  ↓
Required Fields
  ↓
Valid → Controller
Invalid → 400 Response
```

Frontend validation ke baad bhi server-side validation zaroori hai, kyunki client-side validation ko bypass kiya ja sakta hai.

## 11. What is the role of the `net` module in Node.js?

### My PDF Answer — Verbatim Transcription

The net module helps Node.js talk over the internet using something called TCP (Transmission Control Protocol) like a phone call between two computers.

- It is used to build:
  - server (like a node app that listens for connections)
  - clients (like an app that connects to that server)

But it's low level - meaning it gives you more control over the connection (not like HTTP where everything is nicely structured).

### Simple Explanation — English

The Node.js `net` module provides low-level networking functionality based on TCP.

It can be used to create TCP servers and clients. Unlike HTTP, it does not automatically provide the higher-level request/response structure of HTTP, so the developer has more direct control over the connection.

A basic flow is:

```text
TCP Client
    ↓
TCP Connection
    ↓
Node.js net Server
    ↓
Data Events
```

It is useful for custom TCP protocols, socket-based applications, or cases where HTTP is not the required abstraction.

### Simple Explanation — Hindi

Node.js ka `net` module low-level TCP networking provide karta hai.

Isse TCP server aur client create kiye ja sakte hain. HTTP ke unlike, `net` higher-level request/response structure automatically provide nahi karta, isliye connection par zyada direct control milta hai.

```text
TCP Client
    ↓
TCP Connection
    ↓
Node.js net Server
    ↓
Data Events
```

Custom TCP protocols ya socket-based applications mein iska use ho sakta hai.

## 12. What is tracing in Node.js?

### My PDF Answer — Verbatim Transcription

Tracing in Node.js refers to tracking how data flows and how the application behaves internally - the tracing of what happens inside your app when it runs.

It helps developers:

- monitor performance
- debug issues
- understand delays, errors or memory usage

Tracking in Node.js is a way to monitor and record how your app runs, helping you find performance issues and debug complex behaviours.

### Simple Explanation — English

Tracing means collecting information about what an application is doing while it is running.

It helps us follow execution or request flow and understand performance problems, delays, errors, or other runtime behavior.

For example:

```text
Request
  ↓
Controller
  ↓
Database Call
  ↓
Response
```

With tracing, we can measure how long each important step takes and use that information to locate a bottleneck.

So, in an interview, I would describe tracing as a way to observe runtime behavior and follow a request or operation through the system.

### Simple Explanation — Hindi

Tracing ka matlab application ke runtime behavior ko track aur record karna hai.

Isse request flow, delays, errors aur performance problems ko samajhne mein help milti hai.

```text
Request
  ↓
Controller
  ↓
Database Call
  ↓
Response
```

Tracing se hum identify kar sakte hain ki request ke kis step mein zyada time lag raha hai aur bottleneck kahan hai.

Interview mein simple words mein: tracing runtime mein application ke behavior aur request flow ko observe karne ka process hai.

## 13. What is the Reactor Pattern in Node.js?

### My PDF Answer — Verbatim Transcription

The Reactor pattern allows Node.js to react to events (like file reads, API requests or database calls) asynchronously, using an event loop instead of blocking the program.

### How it works (step-by-step)

1. User sends a request (e.g. to read a file).
2. Node.js registers a callback for the operation.
3. The operation is passed to the OS/libuv.
4. Once done, Node.js gets back by calling the callback.
5. Meanwhile, it can continue handling other tasks.

### Simple Explanation — English

The Reactor Pattern is a core idea behind Node.js's event-driven, non-blocking approach.

The application registers an operation and its callback instead of blocking the main execution while waiting for I/O.

The flow is:

```text
Request
  ↓
Register I/O operation + callback
  ↓
OS / libuv handles I/O
  ↓
Node.js is free to handle other work
  ↓
I/O completes
  ↓
Callback is scheduled
  ↓
Callback executes
```

For example, while a file or network operation is waiting, Node.js can continue processing other requests. This is one reason Node.js can efficiently handle many I/O-bound operations.

### Simple Explanation — Hindi

Reactor Pattern Node.js ke event-driven aur non-blocking approach ko explain karta hai.

Node.js I/O operation ke liye callback register karta hai aur operation complete hone tak main execution ko unnecessarily block nahi karta.

```text
Request
  ↓
I/O + Callback Register
  ↓
OS / libuv
  ↓
Other Work Continue
  ↓
I/O Complete
  ↓
Callback Schedule
  ↓
Callback Execute
```

Example: file ya network operation wait kar raha ho, tab Node.js doosri requests handle kar sakta hai. Isi wajah se I/O-bound applications mein Node.js efficient ho sakta hai.

## 14. What are global objects in Node.js?

### My PDF Answer — Verbatim Transcription

Global objects in Node.js are built-in objects that are available anywhere in your code - you don't need to import or require them.

They are like helper tools or variables that Node.js gives you by default.

Examples:

- `__dirname`
- `__filename`
- `global`
- `process`
- `console`
- `setTimeout`, `setInterval`
- `Buffer`
- `require()`

### Simple Explanation — English

Node.js provides several globally available objects, functions, and APIs that can be used without explicitly importing them in every file.

Examples include:

- `process` — information and control related to the current Node.js process.
- `console` — logging.
- `Buffer` — binary data handling.
- `setTimeout()` and `setInterval()` — timers.
- `__dirname` and `__filename` — available in CommonJS modules.
- `require()` — CommonJS module loading.

One important interview point is that not every item in the PDF is a literal property of the global object in exactly the same sense; some are globally available Node.js/CommonJS APIs or module-specific values.

### Simple Explanation — Hindi

Node.js kuch globally available objects aur APIs provide karta hai jinko har file mein manually import karne ki zarurat nahi hoti.

Examples:

- `process` → current Node.js process ki information/control.
- `console` → logging.
- `Buffer` → binary data.
- `setTimeout()` / `setInterval()` → timers.
- `__dirname` / `__filename` → CommonJS modules mein available.
- `require()` → CommonJS modules load karne ke liye.

Interview mein ye distinction batana useful hai ki PDF ke saare examples literally same type ke global object nahi hain; kuch globally available APIs hain aur kuch CommonJS/module-specific values hain.

## 15. What is the Test Pyramid in Node.js?

### My PDF Answer — Verbatim Transcription

The test pyramid is a concept in software testing that suggests how to structure different types of tests in your application.

It helps you create efficient, fast and reliable test suites - especially useful in Node.js or any backend system.

A test pyramid shows that you should write more low-level tests (like unit or base tests), and fewer high-level tests (like UI or integration tests), forming a pyramid shape.

### Simple Explanation — English

The Test Pyramid is a strategy for organizing automated tests.

It recommends having many fast, low-level tests and fewer expensive, high-level tests.

A typical structure is:

```text
        /\
       /  \       E2E Tests
      /----\
     /      \     Integration Tests
    /--------\
   /          \   Unit Tests
  /____________\
```

For a Node.js backend, unit tests can cover individual functions and business logic, integration tests can check interactions with databases or APIs, and end-to-end tests can verify complete user flows.

The goal is to keep the majority of tests fast and maintainable while still covering important system behavior.

### Simple Explanation — Hindi

Test Pyramid automated testing ko organize karne ka strategy hai.

Iska idea hai ki zyada fast, low-level tests hon aur comparatively kam high-level expensive tests hon.

```text
        /\
       /  \       E2E
      /----\
     /      \     Integration
    /--------\
   /          \   Unit Tests
  /____________\
```

Node.js backend mein unit tests individual functions/business logic test kar sakte hain, integration tests database ya APIs ke saath interaction test karte hain, aur E2E tests complete user flow test karte hain.

Goal hai testing ko fast, reliable aur maintainable rakhna.

## 16. What is the Buffer class in Node.js?

### My PDF Answer — Verbatim Transcription

In Node.js, the Buffer class is used to handle binary data (raw bytes), especially when you are dealing with:

- files
- streams
- images
- TCP/UDP packets

Since strings (which don't work well with binary data) buffer deal with raw memory.

### Simple definition

A Buffer in Node.js is a temporary memory area that store binary data directly, useful when reading or writing files, images and big data.

### Why do we need Buffer?

Because JavaScript (by default) doesn't handle binary data well - it's built for string and numbers.

Node.js uses Buffers to work with:

- File system (reading images, videos etc)
- Network protocols (TCP sockets, HTTP requests)

### Simple Explanation — English

A Buffer is a Node.js object used to work with raw binary data, represented as bytes.

Buffers are useful when working with files, streams, images, network packets, and other byte-oriented data.

For example:

```js
const buffer = Buffer.from("Hello");
console.log(buffer);
console.log(buffer.toString());
```

The important idea is:

```text
String / File / Network Data
          ↓
        Bytes
          ↓
        Buffer
          ↓
   Read / Write / Transfer
```

Buffers are especially important in Node.js because many I/O and networking APIs work with binary data rather than only JavaScript strings.

### Simple Explanation — Hindi

Buffer Node.js ka object hai jo raw binary data, yani bytes, ke saath work karne ke liye use hota hai.

Ye files, streams, images aur network data handle karne mein useful hai.

```js
const buffer = Buffer.from("Hello");
console.log(buffer);
console.log(buffer.toString());
```

Basic idea:

```text
File / Network Data
       ↓
     Bytes
       ↓
     Buffer
       ↓
Read / Write / Transfer
```

Node.js mein Buffers important hain kyunki bahut se I/O aur networking operations binary data ke saath work karte hain.

## 17. What is the difference between `fork()` and `spawn()` methods in Node.js?

### My PDF Answer — Verbatim Transcription

`spawn()` is used to run any command or open process, while `fork()` is specially used to create a new Node.js process that can communicate with the parent using message.

- `spawn()` → to run any command or executable
- `fork()` → to run a separate Node.js script

### Simple Explanation — English

Both `spawn()` and `fork()` are APIs from Node.js's `child_process` module, but they serve different purposes.

- `spawn()` starts a process using a command or executable. It is suitable for general external processes and can stream stdout/stderr.
- `fork()` is specifically designed to start another Node.js script. It also sets up an IPC channel so the parent and child can exchange messages.

Example:

```text
spawn("python", ...)
        ↓
External Program

fork("worker.js")
        ↓
Node.js Child
        ↕
       IPC
```

So the simple interview difference is: `spawn()` is for running general commands/programs, while `fork()` is for starting another Node.js process with built-in IPC.

### Simple Explanation — Hindi

`spawn()` aur `fork()` dono `child_process` module ke methods hain, lekin unka purpose different hai.

- `spawn()` kisi command ya executable ko run karta hai aur external processes ke liye useful hai.
- `fork()` specially another Node.js script ko child process ke roop mein start karta hai aur built-in IPC communication provide karta hai.

```text
spawn()
  ↓
External Program

fork()
  ↓
Node.js Child
  ↕
 IPC
```

Interview mein simple difference: `spawn()` general command/program run karne ke liye hai, jabki `fork()` Node.js process ko IPC ke saath start karne ke liye hai.

## 18. Give some examples of async functions.

### My PDF Answer — Verbatim Transcription

Some examples of async functions are `setTimeout()`, `setInterval()` and process, network etc.

### Simple Explanation — English

Asynchronous operations are operations whose completion happens later, allowing the program to continue doing other work instead of waiting synchronously.

The PDF mentions `setTimeout()`, `setInterval()`, process-related work, and network operations.

For example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Later");
}, 1000);

console.log("End");
```

The output starts with:

```text
Start
End
Later
```

This demonstrates that the timer callback does not block the immediate synchronous execution.

In modern Node.js, I would describe these as asynchronous operations/APIs rather than calling every example an "async function," because `setTimeout()` and `setInterval()` themselves are timer functions, not `async function` declarations.

### Simple Explanation — Hindi

Asynchronous operation ka matlab hai ki operation ka result baad mein complete ho sakta hai aur program tab tak doosra work continue kar sakta hai.

PDF mein `setTimeout()`, `setInterval()`, process-related work aur network operations examples diye gaye hain.

```js
console.log("Start");

setTimeout(() => {
  console.log("Later");
}, 1000);

console.log("End");
```

Output:

```text
Start
End
Later
```

Yahan timer ka callback baad mein execute hota hai, lekin main synchronous code wait nahi karta.

Interview mein better wording hai: ye asynchronous operations/APIs hain; har example technically `async function` nahi hai.

## 19. How is JavaScript different from Node.js?

### My PDF Answer — Verbatim Transcription

JS is a programming language, where Node.js is an interpreter and environment for Javascript.

Node.js is used for performing non-blocking operations of any operating system. On the other hand, JS is used for comprehensive application development.

### Simple Explanation — English

JavaScript is the programming language, while Node.js is a runtime environment that allows JavaScript to execute outside the browser.

JavaScript itself defines the language features such as variables, functions, objects, classes, promises, and syntax.

Node.js provides a runtime around JavaScript with server-side capabilities such as:

- file-system access
- networking
- processes
- environment variables
- streams and buffers

For example:

```text
JavaScript
    ↓
Node.js Runtime
    ↓
File System / Network / Process / Server
```

So I would not describe Node.js simply as an interpreter. It is a JavaScript runtime built around the V8 engine with Node-specific APIs and the Node.js runtime environment.

### Simple Explanation — Hindi

JavaScript ek programming language hai, jabki Node.js ek runtime environment hai jo JavaScript ko browser ke bahar run karne deta hai.

JavaScript language features provide karta hai, jaise variables, functions, objects, classes aur promises.

Node.js additional server-side capabilities provide karta hai:

- file system
- networking
- processes
- environment variables
- streams aur buffers

```text
JavaScript
    ↓
Node.js Runtime
    ↓
File System / Network / Server
```

Isliye interview mein Node.js ko sirf interpreter kehna accurate nahi hai. Ye V8 engine ke around built JavaScript runtime hai.

## 20. What are security implementations within Node.js?

### My PDF Answer — Verbatim Transcription

The different types of security implementation used in Node.js include error handling, authentication, and authorization, encryption and logging and monitoring.

### Simple Explanation — English

Node.js application security should be implemented in multiple layers rather than relying on one mechanism.

Important areas include:

- Error handling — avoid exposing sensitive internal details in responses.
- Authentication — verify who the user is.
- Authorization — verify what the authenticated user is allowed to access.
- Encryption — protect sensitive data in transit or when encryption is actually required for stored data.
- Input validation and sanitization — reject unexpected or malicious input.
- Secure configuration and secrets management.
- Logging and monitoring — detect unusual behavior and investigate incidents.
- Dependency and security updates.

A simple security flow is:

```text
Input Validation
      ↓
Authentication
      ↓
Authorization
      ↓
Secure Data Handling
      ↓
Safe Error Handling
      ↓
Logging + Monitoring
```

The exact controls depend on the application's requirements, threat model, and deployment environment.

### Simple Explanation — Hindi

Node.js application security ek single feature se nahi, multiple layers se implement ki jati hai.

Important areas:

- Error handling → sensitive internal details expose na karna.
- Authentication → user ko verify karna.
- Authorization → user ko allowed access check karna.
- Encryption → sensitive data ko protect karna.
- Input validation/sanitization → unexpected ya malicious input reject karna.
- Secure configuration aur secrets management.
- Logging aur monitoring → unusual behavior detect karna.
- Dependencies ko updated aur secure rakhna.

```text
Input Validation
      ↓
Authentication
      ↓
Authorization
      ↓
Secure Data Handling
      ↓
Safe Error Handling
      ↓
Logging + Monitoring
```

Exact security controls application ki requirements, threat model aur deployment environment par depend karte hain.

## Source Note

Questions 1–20 and the **“My PDF Answer — Verbatim Transcription”** sections above are based on the handwritten Node.js Advanced Questions section of the uploaded PDF, specifically the pages containing Questions 1–20. fileciteturn9file0

The English and Hindi sections are simplified explanations for interview preparation. They are not presented as additional source-PDF answers.
