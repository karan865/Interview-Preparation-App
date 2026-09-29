import { SeedQuestion } from './types';

export const advancedQuestionsBank2Questions: SeedQuestion[] = [
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "1. What is a cluster in Node.js?",
    "answer": "A cluster in Node.js is a way to run multiple instances of your Node.js app (called workers) to take advantage of multicore CPUs.\n\nBy default, Node.js runs in a single-threaded way using only one CPU core, even on a machine having many cores.\n\nThe cluster module helps you create child processes (workers) that all share the same server port, improving performance and handling of the same time.\n\n### Why use cluster?\n\n- to improve scalability of your Server.\n- to make better use of multi-core processors.\n- to handle more requests simultaneously.\n\n### One Line Answer\n\nA cluster in Node.js allows you to run multiple processes of your app to fully use all CPU cores and handle more traffic efficiently.",
    "explanation": "A Node.js cluster allows us to run multiple worker processes of the same application so we can use multiple CPU cores.\n\nNormally, one Node.js process mainly uses one CPU core. With the `cluster` module, a primary process can create multiple workers, and those workers can listen on the same server port.\n\nFor example:\n\n```text\n                 Primary Process\n                  /    |    \\\n                 ↓     ↓     ↓\n             Worker 1 Worker 2 Worker 3\n                 ↓       ↓       ↓\n                    Same Port\n```\n\nThe main benefits are better CPU utilization, scalability, and the ability to handle more requests. It is especially useful for CPU utilization across multiple cores; it does not make one JavaScript execution thread itself multi-threaded.",
    "explanationHindi": "Node.js cluster ka use application ke multiple worker processes run karne ke liye kiya jata hai, taaki multiple CPU cores ka better use ho sake.\n\nNormally ek Node.js process mainly ek CPU core use karta hai. `cluster` module ke through primary process multiple workers create kar sakta hai, aur workers same server port par listen kar sakte hain.\n\n```text\n             Primary Process\n              /    |    \\\n             ↓     ↓     ↓\n          Worker1 Worker2 Worker3\n             ↓      ↓      ↓\n              Same Server Port\n```\n\nIska main benefit scalability, better CPU utilization aur zyada requests handle karna hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "2. Explain some of the cluster methods in Node.js.",
    "answer": "Some important cluster methods in Node.js are:\n\n### 1) `fork()`\n\nIt creates a new worker process from the master.\n\n### 2) `isMaster`\n\nThe `isMaster` returns true if the current process is master, else false.\n\n### 3) `workers`\n\nIt returns the list of the current workers.\n\n### 4) `process`\n\nIt returns the global child process.\n\n### 5) `send()`\n\nIt sends a message from the worker to the master or vice versa.\n\n### 6) `kill()`\n\nIt is used to kill the current worker.",
    "explanation": "The cluster API provides methods and properties to create and manage worker processes.\n\nImportant ones are:\n\n- `fork()` — creates a new worker process.\n- `isMaster` — used in the PDF to identify the master process. In modern Node.js, `isPrimary` is the preferred name.\n- `workers` — provides access to the workers managed by the primary process.\n- `send()` — sends messages between processes when IPC is available.\n- `kill()` — terminates a worker process.\n\nA simple flow is:\n\n```text\nPrimary Process\n      ↓ fork()\n   Worker\n      ↕ send()\n   IPC Message\n      ↕\nPrimary Process\n```\n\nIn an interview, I would also mention that modern Node.js documentation uses the terms `primary` and `isPrimary` rather than `master` and `isMaster`.",
    "explanationHindi": "Cluster API workers ko create aur manage karne ke liye methods aur properties provide karta hai.\n\n- `fork()` → new worker process create karta hai.\n- `isMaster` → PDF mein master process identify karne ke liye diya gaya hai; modern Node.js mein `isPrimary` preferred naam hai.\n- `workers` → current workers ka access deta hai.\n- `send()` → IPC ke through processes ke beech message bhejne ke liye use hota hai.\n- `kill()` → worker process ko terminate karta hai.\n\n```text\nPrimary\n  ↓ fork()\nWorker\n  ↕ send()\nIPC Message\n  ↕\nPrimary\n```\n\nInterview mein main ye bhi mention karunga ki modern Node.js mein `master` ke badle `primary` aur `isMaster` ke badle `isPrimary` terminology use hoti hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "3. How do you manage sessions in Node.js?",
    "answer": "Session management in Node.js is important for tracking user data across multiple requests (like login state).\n\n### What's a session in Node.js?\n\nA session is a way to store user data on the server side between HTTP requests. It's typically used to track whether a user is logged in, their preferences, cart data etc.\n\n→ In Node.js (with express), sessions are managed using `express-session` middleware, which stores session data on the server and assigns a session ID to cookies.",
    "explanation": "Session management allows a server to remember information about a user across multiple HTTP requests.\n\nIn Express, `express-session` can create a session. The server stores the session data, while the client normally receives a session ID in a cookie.\n\nThe basic flow is:\n\n```text\nLogin\n  ↓\nCreate Session\n  ↓\nStore Session Data\n  ↓\nSend Session ID Cookie\n  ↓\nNext Request + Cookie\n  ↓\nFind Session Data\n  ↓\nAuthenticate User\n```\n\nFor example, after login, the session can store the user's ID. On later requests, the session ID helps the server identify that user.\n\nIn production, session storage should generally be shared or externalized when multiple application instances are running, rather than relying only on one process's memory.",
    "explanationHindi": "Session management ka purpose hai multiple HTTP requests ke beech server ko user ki information ya login state remember karwana.\n\nExpress mein `express-session` use karke session create kiya ja sakta hai. Server session data store karta hai aur client ko generally session ID cookie ke through milti hai.\n\n```text\nLogin\n  ↓\nSession Create\n  ↓\nSession Data Store\n  ↓\nSession ID Cookie\n  ↓\nNext Request\n  ↓\nSession Find\n  ↓\nUser Identify\n```\n\nExample: login ke baad session mein user ID store ho sakti hai. Agli request mein session ID ke basis par server user ko identify karta hai.\n\nMultiple server instances wale production setup mein session storage ko shared/external rakhna useful hota hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "4. Explain the package needed for file uploading in Node.js.",
    "answer": "The package used for file uploading in Node.js is **Multer**.\n\nMulter can be used to upload files to the server using `req.file` and `req.files`. There are other modules in the market but Multer is very popular when you are uploading files.",
    "explanation": "Multer is a Node.js middleware commonly used to handle file uploads, especially `multipart/form-data` requests.\n\nIt integrates with Express and makes uploaded files available through properties such as `req.file` for a single file or `req.files` for multiple files, depending on the configuration.\n\nFor example:\n\n```js\nconst upload = multer({ dest: \"uploads/\" });\n\napp.post(\"/upload\", upload.single(\"photo\"), (req, res) => {\n  console.log(req.file);\n  res.send(\"Uploaded\");\n});\n```\n\nIn a real application, I would also validate file size, file type, filename handling, and storage permissions instead of accepting arbitrary uploads.",
    "explanationHindi": "Multer Node.js mein file uploads handle karne ke liye commonly used middleware hai, especially `multipart/form-data` requests ke liye.\n\nSingle file ke case mein `req.file` aur multiple files ke case mein configuration ke according `req.files` use kiya ja sakta hai.\n\n```js\nconst upload = multer({ dest: \"uploads/\" });\n\napp.post(\"/upload\", upload.single(\"photo\"), (req, res) => {\n  console.log(req.file);\n  res.send(\"Uploaded\");\n});\n```\n\nProduction mein file size, file type, filename aur storage permissions ko validate karna bhi important hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "5. How do you read command-line arguments in Node.js?",
    "answer": "In Node.js, command-line arguments are accessed using `process.argv`. These arguments start from index 2.",
    "explanation": "Node.js provides command-line arguments through the `process.argv` array.\n\nThe first entries represent the Node executable and the script path, so user-provided arguments normally start at index `2`.\n\nFor example, if I run:\n\n```bash\nnode app.js admin 25\n```\n\nI can read the arguments like this:\n\n```js\nconsole.log(process.argv[2]); // admin\nconsole.log(process.argv[3]); // 25\n```\n\nSo `process.argv` is useful when we want to pass simple configuration or input directly from the command line.",
    "explanationHindi": "Node.js mein command-line arguments `process.argv` array se read kiye jate hain.\n\nNormally user ke arguments index `2` se start hote hain, kyunki pehle entries Node executable aur script path ko represent karti hain.\n\nExample:\n\n```bash\nnode app.js admin 25\n```\n\n```js\nconsole.log(process.argv[2]); // admin\nconsole.log(process.argv[3]); // 25\n```\n\nIska use command line se simple input ya configuration pass karne ke liye kiya ja sakta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "6. Explain the `util` module in Node.js.",
    "answer": "The util module in Node.js provides access to various utility functions. There are various utility modules available in the Node.js modules library.\n\n- **OS module:** operating system based utility module for Node.js are provided by the `os` module.\n- **Path Module:** the path module in Node.js is used for transforming and handling various file paths.\n- **DNS Module:** DNS module enable us to use the underlying operating system's resolution functionalities. The actual DNS lookup is also performed by the DNS modules.\n- **Net module:** Net module in Node.js is used for the creation of both client and server. Similar to DNS, this module also provides an async network wrapper.",
    "explanation": "The `util` module is a built-in Node.js module that provides utility functions for common programming tasks.\n\nIt contains helpers for things such as formatting, inspection, callback utilities, and other runtime-related operations.\n\nThe PDF also mentions related core modules:\n\n- `os` — operating-system information.\n- `path` — file and directory path handling.\n- `dns` — DNS lookup and resolution.\n- `net` — low-level network communication.\n\nFor example, `path.join()` can safely build a path without manually handling path separators.",
    "explanationHindi": "`util` Node.js ka built-in module hai jo common programming tasks ke liye utility functions provide karta hai.\n\nIske alawa PDF mein related core modules bhi diye gaye hain:\n\n- `os` → operating system ki information.\n- `path` → file aur directory paths handle karna.\n- `dns` → DNS lookup aur resolution.\n- `net` → low-level network communication.\n\nExample: `path.join()` ka use file paths ko safely combine karne ke liye kiya ja sakta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "7. How do you handle environment variables in Node.js?",
    "answer": "We can handle environment variable in Node.js. We can specify environment configuration as well as key in the `.env` file to access the variable in the application.\n\nWe can use the `process.env` variable name syntax.\n\nTo use it we have to install the dotenv package using the below command:\n\n```bash\nnpm install dotenv\n```",
    "explanation": "Environment variables are used to keep configuration outside the application source code.\n\nA common approach is to put local configuration in a `.env` file and load it with the `dotenv` package. The application can then read values through `process.env`.\n\nExample:\n\n```env\nPORT=3000\nDB_HOST=localhost\n```\n\n```js\nrequire(\"dotenv\").config();\n\nconsole.log(process.env.PORT);\nconsole.log(process.env.DB_HOST);\n```\n\nThe important point is that secrets such as database passwords or API keys should not be hard-coded or committed to source control. In production, environment variables are often supplied by the deployment platform or secret manager.",
    "explanationHindi": "Environment variables ka use configuration ko source code se bahar rakhne ke liye kiya jata hai.\n\n`.env` file mein values rakh kar `dotenv` package se load kar sakte hain aur application mein `process.env` se access kar sakte hain.\n\n```env\nPORT=3000\nDB_HOST=localhost\n```\n\n```js\nrequire(\"dotenv\").config();\nconsole.log(process.env.PORT);\n```\n\nDatabase passwords aur API keys ko source code mein hard-code nahi karna chahiye aur `.env` ko normally source control mein commit nahi karna chahiye.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "8. What is the DNS module in Node.js?",
    "answer": "The DNS module in Node.js provides functions to perform DNS (Domain Name System) lookup and resolve domain names, just like how browsers convert domain names (e.g. `google.com`) into IP addresses.\n\n→ It's part of Node.js's built-in core module, so no installation is needed.\n\n### When to use it\n\n- you want to resolve domain names to IP addresses.\n- you need to check DNS records, CNAMEs, etc.\n- you're building a tool that needs network-level info.",
    "explanation": "The Node.js `dns` module is a built-in core module used to resolve domain names and work with DNS information.\n\nFor example, we can resolve a hostname such as `example.com` to an IP address.\n\n```js\nconst dns = require(\"node:dns\");\n\ndns.lookup(\"example.com\", (err, address) => {\n  if (err) throw err;\n  console.log(address);\n});\n```\n\nIt is useful when an application needs network-level DNS information or needs to perform DNS lookups without installing a separate package.",
    "explanationHindi": "Node.js ka `dns` module built-in core module hai jo domain names ko resolve karne aur DNS information ke saath kaam karne ke liye use hota hai.\n\nExample:\n\n```js\nconst dns = require(\"node:dns\");\n\ndns.lookup(\"example.com\", (err, address) => {\n  if (err) throw err;\n  console.log(address);\n});\n```\n\nAgar application ko DNS lookup ya network-level DNS information chahiye, to is module ka use kiya ja sakta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "9. What are child processes in Node.js?",
    "answer": "Usually, Node.js allows single-threaded, non-blocking performance but running a single thread on a CPU cannot handle increasing workload hence the child process module can be used to spawn child processes.\n\nThe child processes can be used to spawn child processes using a built-in messaging system.",
    "explanation": "A child process is a separate operating-system process created from a Node.js application.\n\nNode.js provides the `child_process` module with APIs such as `spawn()`, `exec()`, and `fork()`.\n\nChild processes are useful when we need to run an external command, execute another program, or isolate work from the main Node.js process.\n\nFor example:\n\n```text\nMain Node.js Process\n        |\n        | spawn()\n        ↓\n External Process\n        |\n        ↓\n stdout / stderr\n```\n\nBecause the child is a separate process, it has its own memory space and can communicate with the parent through supported IPC mechanisms.",
    "explanationHindi": "Child process ek separate operating-system process hota hai jo Node.js application se create kiya ja sakta hai.\n\nNode.js ka `child_process` module `spawn()`, `exec()` aur `fork()` jaise APIs provide karta hai.\n\nIska use external command run karne ya main Node.js process se alag work execute karne ke liye hota hai.\n\n```text\nMain Node.js Process\n        |\n      spawn()\n        ↓\n  Child Process\n        |\n   stdout/stderr\n```\n\nChild process ka apna memory space hota hai aur required case mein parent process ke saath IPC ke through communicate kar sakta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "10. How do you validate data in Node.js?",
    "answer": "Validation in Node.js can be easily done by using the express module. This module is popular for data validation. There are other modules available in the market like `Joi`, `express-validator` etc but `express-validator` is widely used and popular among them.",
    "explanation": "Data validation means checking whether incoming data has the expected type, format, required fields, and allowed values before the application uses it.\n\nIn an Express application, libraries such as `express-validator` or `Joi` can be used.\n\nFor example, for a registration API, I might validate:\n\n```text\nRequest\n  ↓\nValidate email\n  ↓\nValidate password\n  ↓\nValidate required fields\n  ↓\nIf valid → Controller\nIf invalid → 400 response\n```\n\nValidation should happen before business logic, and important validation must be performed on the server even if the frontend already validates the same data.",
    "explanationHindi": "Data validation ka matlab incoming data ko process karne se pehle check karna hai ki uska type, format, required fields aur values expected hain ya nahi.\n\nExpress mein `express-validator` ya `Joi` jaise libraries use ki ja sakti hain.\n\n```text\nRequest\n  ↓\nEmail Validate\n  ↓\nPassword Validate\n  ↓\nRequired Fields\n  ↓\nValid → Controller\nInvalid → 400 Response\n```\n\nFrontend validation ke baad bhi server-side validation zaroori hai, kyunki client-side validation ko bypass kiya ja sakta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "11. What is the role of the `net` module in Node.js?",
    "answer": "The net module helps Node.js talk over the internet using something called TCP (Transmission Control Protocol) like a phone call between two computers.\n\n- It is used to build:\n  - server (like a node app that listens for connections)\n  - clients (like an app that connects to that server)\n\nBut it's low level - meaning it gives you more control over the connection (not like HTTP where everything is nicely structured).",
    "explanation": "The Node.js `net` module provides low-level networking functionality based on TCP.\n\nIt can be used to create TCP servers and clients. Unlike HTTP, it does not automatically provide the higher-level request/response structure of HTTP, so the developer has more direct control over the connection.\n\nA basic flow is:\n\n```text\nTCP Client\n    ↓\nTCP Connection\n    ↓\nNode.js net Server\n    ↓\nData Events\n```\n\nIt is useful for custom TCP protocols, socket-based applications, or cases where HTTP is not the required abstraction.",
    "explanationHindi": "Node.js ka `net` module low-level TCP networking provide karta hai.\n\nIsse TCP server aur client create kiye ja sakte hain. HTTP ke unlike, `net` higher-level request/response structure automatically provide nahi karta, isliye connection par zyada direct control milta hai.\n\n```text\nTCP Client\n    ↓\nTCP Connection\n    ↓\nNode.js net Server\n    ↓\nData Events\n```\n\nCustom TCP protocols ya socket-based applications mein iska use ho sakta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "12. What is tracing in Node.js?",
    "answer": "Tracing in Node.js refers to tracking how data flows and how the application behaves internally - the tracing of what happens inside your app when it runs.\n\nIt helps developers:\n\n- monitor performance\n- debug issues\n- understand delays, errors or memory usage\n\nTracking in Node.js is a way to monitor and record how your app runs, helping you find performance issues and debug complex behaviours.",
    "explanation": "Tracing means collecting information about what an application is doing while it is running.\n\nIt helps us follow execution or request flow and understand performance problems, delays, errors, or other runtime behavior.\n\nFor example:\n\n```text\nRequest\n  ↓\nController\n  ↓\nDatabase Call\n  ↓\nResponse\n```\n\nWith tracing, we can measure how long each important step takes and use that information to locate a bottleneck.\n\nSo, in an interview, I would describe tracing as a way to observe runtime behavior and follow a request or operation through the system.",
    "explanationHindi": "Tracing ka matlab application ke runtime behavior ko track aur record karna hai.\n\nIsse request flow, delays, errors aur performance problems ko samajhne mein help milti hai.\n\n```text\nRequest\n  ↓\nController\n  ↓\nDatabase Call\n  ↓\nResponse\n```\n\nTracing se hum identify kar sakte hain ki request ke kis step mein zyada time lag raha hai aur bottleneck kahan hai.\n\nInterview mein simple words mein: tracing runtime mein application ke behavior aur request flow ko observe karne ka process hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "13. What is the Reactor Pattern in Node.js?",
    "answer": "The Reactor pattern allows Node.js to react to events (like file reads, API requests or database calls) asynchronously, using an event loop instead of blocking the program.\n\n### How it works (step-by-step)\n\n1. User sends a request (e.g. to read a file).\n2. Node.js registers a callback for the operation.\n3. The operation is passed to the OS/libuv.\n4. Once done, Node.js gets back by calling the callback.\n5. Meanwhile, it can continue handling other tasks.",
    "explanation": "The Reactor Pattern is a core idea behind Node.js's event-driven, non-blocking approach.\n\nThe application registers an operation and its callback instead of blocking the main execution while waiting for I/O.\n\nThe flow is:\n\n```text\nRequest\n  ↓\nRegister I/O operation + callback\n  ↓\nOS / libuv handles I/O\n  ↓\nNode.js is free to handle other work\n  ↓\nI/O completes\n  ↓\nCallback is scheduled\n  ↓\nCallback executes\n```\n\nFor example, while a file or network operation is waiting, Node.js can continue processing other requests. This is one reason Node.js can efficiently handle many I/O-bound operations.",
    "explanationHindi": "Reactor Pattern Node.js ke event-driven aur non-blocking approach ko explain karta hai.\n\nNode.js I/O operation ke liye callback register karta hai aur operation complete hone tak main execution ko unnecessarily block nahi karta.\n\n```text\nRequest\n  ↓\nI/O + Callback Register\n  ↓\nOS / libuv\n  ↓\nOther Work Continue\n  ↓\nI/O Complete\n  ↓\nCallback Schedule\n  ↓\nCallback Execute\n```\n\nExample: file ya network operation wait kar raha ho, tab Node.js doosri requests handle kar sakta hai. Isi wajah se I/O-bound applications mein Node.js efficient ho sakta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "14. What are global objects in Node.js?",
    "answer": "Global objects in Node.js are built-in objects that are available anywhere in your code - you don't need to import or require them.\n\nThey are like helper tools or variables that Node.js gives you by default.\n\nExamples:\n\n- `__dirname`\n- `__filename`\n- `global`\n- `process`\n- `console`\n- `setTimeout`, `setInterval`\n- `Buffer`\n- `require()`",
    "explanation": "Node.js provides several globally available objects, functions, and APIs that can be used without explicitly importing them in every file.\n\nExamples include:\n\n- `process` — information and control related to the current Node.js process.\n- `console` — logging.\n- `Buffer` — binary data handling.\n- `setTimeout()` and `setInterval()` — timers.\n- `__dirname` and `__filename` — available in CommonJS modules.\n- `require()` — CommonJS module loading.\n\nOne important interview point is that not every item in the PDF is a literal property of the global object in exactly the same sense; some are globally available Node.js/CommonJS APIs or module-specific values.",
    "explanationHindi": "Node.js kuch globally available objects aur APIs provide karta hai jinko har file mein manually import karne ki zarurat nahi hoti.\n\nExamples:\n\n- `process` → current Node.js process ki information/control.\n- `console` → logging.\n- `Buffer` → binary data.\n- `setTimeout()` / `setInterval()` → timers.\n- `__dirname` / `__filename` → CommonJS modules mein available.\n- `require()` → CommonJS modules load karne ke liye.\n\nInterview mein ye distinction batana useful hai ki PDF ke saare examples literally same type ke global object nahi hain; kuch globally available APIs hain aur kuch CommonJS/module-specific values hain.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "15. What is the Test Pyramid in Node.js?",
    "answer": "The test pyramid is a concept in software testing that suggests how to structure different types of tests in your application.\n\nIt helps you create efficient, fast and reliable test suites - especially useful in Node.js or any backend system.\n\nA test pyramid shows that you should write more low-level tests (like unit or base tests), and fewer high-level tests (like UI or integration tests), forming a pyramid shape.",
    "explanation": "The Test Pyramid is a strategy for organizing automated tests.\n\nIt recommends having many fast, low-level tests and fewer expensive, high-level tests.\n\nA typical structure is:\n\n```text\n        /\\\n       /  \\       E2E Tests\n      /----\\\n     /      \\     Integration Tests\n    /--------\\\n   /          \\   Unit Tests\n  /____________\\\n```\n\nFor a Node.js backend, unit tests can cover individual functions and business logic, integration tests can check interactions with databases or APIs, and end-to-end tests can verify complete user flows.\n\nThe goal is to keep the majority of tests fast and maintainable while still covering important system behavior.",
    "explanationHindi": "Test Pyramid automated testing ko organize karne ka strategy hai.\n\nIska idea hai ki zyada fast, low-level tests hon aur comparatively kam high-level expensive tests hon.\n\n```text\n        /\\\n       /  \\       E2E\n      /----\\\n     /      \\     Integration\n    /--------\\\n   /          \\   Unit Tests\n  /____________\\\n```\n\nNode.js backend mein unit tests individual functions/business logic test kar sakte hain, integration tests database ya APIs ke saath interaction test karte hain, aur E2E tests complete user flow test karte hain.\n\nGoal hai testing ko fast, reliable aur maintainable rakhna.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "16. What is the Buffer class in Node.js?",
    "answer": "In Node.js, the Buffer class is used to handle binary data (raw bytes), especially when you are dealing with:\n\n- files\n- streams\n- images\n- TCP/UDP packets\n\nSince strings (which don't work well with binary data) buffer deal with raw memory.\n\n### Simple definition\n\nA Buffer in Node.js is a temporary memory area that store binary data directly, useful when reading or writing files, images and big data.\n\n### Why do we need Buffer?\n\nBecause JavaScript (by default) doesn't handle binary data well - it's built for string and numbers.\n\nNode.js uses Buffers to work with:\n\n- File system (reading images, videos etc)\n- Network protocols (TCP sockets, HTTP requests)",
    "explanation": "A Buffer is a Node.js object used to work with raw binary data, represented as bytes.\n\nBuffers are useful when working with files, streams, images, network packets, and other byte-oriented data.\n\nFor example:\n\n```js\nconst buffer = Buffer.from(\"Hello\");\nconsole.log(buffer);\nconsole.log(buffer.toString());\n```\n\nThe important idea is:\n\n```text\nString / File / Network Data\n          ↓\n        Bytes\n          ↓\n        Buffer\n          ↓\n   Read / Write / Transfer\n```\n\nBuffers are especially important in Node.js because many I/O and networking APIs work with binary data rather than only JavaScript strings.",
    "explanationHindi": "Buffer Node.js ka object hai jo raw binary data, yani bytes, ke saath work karne ke liye use hota hai.\n\nYe files, streams, images aur network data handle karne mein useful hai.\n\n```js\nconst buffer = Buffer.from(\"Hello\");\nconsole.log(buffer);\nconsole.log(buffer.toString());\n```\n\nBasic idea:\n\n```text\nFile / Network Data\n       ↓\n     Bytes\n       ↓\n     Buffer\n       ↓\nRead / Write / Transfer\n```\n\nNode.js mein Buffers important hain kyunki bahut se I/O aur networking operations binary data ke saath work karte hain.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "17. What is the difference between `fork()` and `spawn()` methods in Node.js?",
    "answer": "`spawn()` is used to run any command or open process, while `fork()` is specially used to create a new Node.js process that can communicate with the parent using message.\n\n- `spawn()` → to run any command or executable\n- `fork()` → to run a separate Node.js script",
    "explanation": "Both `spawn()` and `fork()` are APIs from Node.js's `child_process` module, but they serve different purposes.\n\n- `spawn()` starts a process using a command or executable. It is suitable for general external processes and can stream stdout/stderr.\n- `fork()` is specifically designed to start another Node.js script. It also sets up an IPC channel so the parent and child can exchange messages.\n\nExample:\n\n```text\nspawn(\"python\", ...)\n        ↓\nExternal Program\n\nfork(\"worker.js\")\n        ↓\nNode.js Child\n        ↕\n       IPC\n```\n\nSo the simple interview difference is: `spawn()` is for running general commands/programs, while `fork()` is for starting another Node.js process with built-in IPC.",
    "explanationHindi": "`spawn()` aur `fork()` dono `child_process` module ke methods hain, lekin unka purpose different hai.\n\n- `spawn()` kisi command ya executable ko run karta hai aur external processes ke liye useful hai.\n- `fork()` specially another Node.js script ko child process ke roop mein start karta hai aur built-in IPC communication provide karta hai.\n\n```text\nspawn()\n  ↓\nExternal Program\n\nfork()\n  ↓\nNode.js Child\n  ↕\n IPC\n```\n\nInterview mein simple difference: `spawn()` general command/program run karne ke liye hai, jabki `fork()` Node.js process ko IPC ke saath start karne ke liye hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "18. Give some examples of async functions.",
    "answer": "Some examples of async functions are `setTimeout()`, `setInterval()` and process, network etc.",
    "explanation": "Asynchronous operations are operations whose completion happens later, allowing the program to continue doing other work instead of waiting synchronously.\n\nThe PDF mentions `setTimeout()`, `setInterval()`, process-related work, and network operations.\n\nFor example:\n\n```js\nconsole.log(\"Start\");\n\nsetTimeout(() => {\n  console.log(\"Later\");\n}, 1000);\n\nconsole.log(\"End\");\n```\n\nThe output starts with:\n\n```text\nStart\nEnd\nLater\n```\n\nThis demonstrates that the timer callback does not block the immediate synchronous execution.\n\nIn modern Node.js, I would describe these as asynchronous operations/APIs rather than calling every example an \"async function,\" because `setTimeout()` and `setInterval()` themselves are timer functions, not `async function` declarations.",
    "explanationHindi": "Asynchronous operation ka matlab hai ki operation ka result baad mein complete ho sakta hai aur program tab tak doosra work continue kar sakta hai.\n\nPDF mein `setTimeout()`, `setInterval()`, process-related work aur network operations examples diye gaye hain.\n\n```js\nconsole.log(\"Start\");\n\nsetTimeout(() => {\n  console.log(\"Later\");\n}, 1000);\n\nconsole.log(\"End\");\n```\n\nOutput:\n\n```text\nStart\nEnd\nLater\n```\n\nYahan timer ka callback baad mein execute hota hai, lekin main synchronous code wait nahi karta.\n\nInterview mein better wording hai: ye asynchronous operations/APIs hain; har example technically `async function` nahi hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "19. How is JavaScript different from Node.js?",
    "answer": "JS is a programming language, where Node.js is an interpreter and environment for Javascript.\n\nNode.js is used for performing non-blocking operations of any operating system. On the other hand, JS is used for comprehensive application development.",
    "explanation": "JavaScript is the programming language, while Node.js is a runtime environment that allows JavaScript to execute outside the browser.\n\nJavaScript itself defines the language features such as variables, functions, objects, classes, promises, and syntax.\n\nNode.js provides a runtime around JavaScript with server-side capabilities such as:\n\n- file-system access\n- networking\n- processes\n- environment variables\n- streams and buffers\n\nFor example:\n\n```text\nJavaScript\n    ↓\nNode.js Runtime\n    ↓\nFile System / Network / Process / Server\n```\n\nSo I would not describe Node.js simply as an interpreter. It is a JavaScript runtime built around the V8 engine with Node-specific APIs and the Node.js runtime environment.",
    "explanationHindi": "JavaScript ek programming language hai, jabki Node.js ek runtime environment hai jo JavaScript ko browser ke bahar run karne deta hai.\n\nJavaScript language features provide karta hai, jaise variables, functions, objects, classes aur promises.\n\nNode.js additional server-side capabilities provide karta hai:\n\n- file system\n- networking\n- processes\n- environment variables\n- streams aur buffers\n\n```text\nJavaScript\n    ↓\nNode.js Runtime\n    ↓\nFile System / Network / Server\n```\n\nIsliye interview mein Node.js ko sirf interpreter kehna accurate nahi hai. Ye V8 engine ke around built JavaScript runtime hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "20. What are security implementations within Node.js?",
    "answer": "The different types of security implementation used in Node.js include error handling, authentication, and authorization, encryption and logging and monitoring.",
    "explanation": "Node.js application security should be implemented in multiple layers rather than relying on one mechanism.\n\nImportant areas include:\n\n- Error handling — avoid exposing sensitive internal details in responses.\n- Authentication — verify who the user is.\n- Authorization — verify what the authenticated user is allowed to access.\n- Encryption — protect sensitive data in transit or when encryption is actually required for stored data.\n- Input validation and sanitization — reject unexpected or malicious input.\n- Secure configuration and secrets management.\n- Logging and monitoring — detect unusual behavior and investigate incidents.\n- Dependency and security updates.\n\nA simple security flow is:\n\n```text\nInput Validation\n      ↓\nAuthentication\n      ↓\nAuthorization\n      ↓\nSecure Data Handling\n      ↓\nSafe Error Handling\n      ↓\nLogging + Monitoring\n```\n\nThe exact controls depend on the application's requirements, threat model, and deployment environment.",
    "explanationHindi": "Node.js application security ek single feature se nahi, multiple layers se implement ki jati hai.\n\nImportant areas:\n\n- Error handling → sensitive internal details expose na karna.\n- Authentication → user ko verify karna.\n- Authorization → user ko allowed access check karna.\n- Encryption → sensitive data ko protect karna.\n- Input validation/sanitization → unexpected ya malicious input reject karna.\n- Secure configuration aur secrets management.\n- Logging aur monitoring → unusual behavior detect karna.\n- Dependencies ko updated aur secure rakhna.\n\n```text\nInput Validation\n      ↓\nAuthentication\n      ↓\nAuthorization\n      ↓\nSecure Data Handling\n      ↓\nSafe Error Handling\n      ↓\nLogging + Monitoring\n```\n\nExact security controls application ki requirements, threat model aur deployment environment par depend karte hain.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-1-20",
    "question": "Source Note",
    "answer": "No PDF answer provided.",
    "explanation": "",
    "explanationHindi": "",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "21. What are the states used in a Promise object in Node.js?",
    "answer": "In Node.js (and Javascript), a Promise represents an operation that will complete in the future and it can be in any of these states:\n\n### 1. Pending\n\n- Initial state.\n- The operation is still ongoing.\n\n```js\nconst promise = new Promise((resolve, reject) => {\n});\n```\n\n### 2. Fulfilled (Resolved)\n\n- The operation completed successfully.\n- The `resolve()` function was called.\n\n```js\nconst promise = Promise.resolve(\"Success\");\n```\n\n### 3. Rejected\n\n- The operation failed.\n- The `reject()` function was called.\n\n```js\nconst promise = Promise.reject(\"Error\");\n```",
    "explanation": "A Promise represents the result of an asynchronous operation. It starts as **pending** and can settle only once, becoming either **fulfilled** or **rejected**. After it is settled, its state cannot change again.\n\nA simple flow is:\n\n```text\nPending\n  ├── success → Fulfilled\n  └── failure → Rejected\n```\n\nExample:\n\n```js\nconst promise = fetchData();\n\npromise\n  .then(data => console.log(data))\n  .catch(err => console.log(err));\n```\n\nIn an interview, I would mention that Promises make asynchronous code easier to compose and handle than deeply nested callbacks.",
    "explanationHindi": "Interview mein main bolunga ki Promise asynchronous operation ka future result represent karta hai. Ye **pending** se start hota hai aur sirf ek baar **fulfilled** ya **rejected** hota hai.\n\n```text\nPending\n  ├── success → Fulfilled\n  └── failure → Rejected\n```\n\nExample mein `.then()` successful result aur `.catch()` error handle karta hai. Promise settle hone ke baad uski state change nahi hoti.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "22. Explain the function of exit code in Node.js.",
    "answer": "Exit code in Node.js - the exit code is a number that indicates why a Node.js process ended. It helps identify whether the process exited successfully or due to an error.\n\nIn Node.js the exit code tells whether the process ended successful (`0`) or with an error (`1` or other non-zero codes), helping in debugging and automation scripts.",
    "explanation": "An exit code is a numeric result returned when a Node.js process terminates. `0` normally means successful completion, while a non-zero value indicates an error or abnormal termination.\n\nIt is especially useful in automation because a shell script or CI/CD system can decide whether the previous command succeeded.\n\nExample:\n\n```js\nprocess.exit(0); // success\nprocess.exit(1); // failure\n```\n\nFor production systems, the exact non-zero code can be used to distinguish different failure conditions when the application defines them.",
    "explanationHindi": "Exit code ek numeric result hota hai jo process ke terminate hone par batata hai ki process successful tha ya fail hua. Normally `0` success ko represent karta hai aur non-zero value error ya abnormal termination ko.\n\n```js\nprocess.exit(0);\nprocess.exit(1);\n```\n\nYe shell scripts, CI/CD pipelines aur monitoring mein useful hai kyunki automation exit code dekhkar success ya failure decide kar sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "23. What causes server latency and prevents scalability in Node.js?",
    "answer": "Blocking operations, heavy CPU tasks and poor async handling can cause latency and make a Node.js server less scalable.\n\n### How to improve scalability:\n\n- use non-blocking I/O (e.g. `fs.readFile` instead of `fs.readFileSync`)\n- offload CPU-heavy tasks to worker threads or background workers\n- use caching (e.g. Redis)\n- optimize DB queries and use connection pooling\n- use load balancers and clustering",
    "explanation": "Latency increases when a request spends too much time waiting for I/O, the event loop is blocked by CPU-heavy or synchronous work, or the database is slow. Scalability suffers when one process cannot handle more concurrent work efficiently.\n\nA useful interview flow is:\n\n```text\nRequest\n  ↓\nNode.js / Event Loop\n  ├── blocked CPU work → latency\n  ├── slow DB → latency\n  └── efficient async I/O → continue other requests\n```\n\nExample: replace `fs.readFileSync()` with an asynchronous API, cache frequently requested data, optimize DB queries, and move CPU-heavy work to workers/background jobs.",
    "explanationHindi": "Interview mein main kahunga ki latency tab badhti hai jab event loop block ho, CPU-heavy work main process mein ho, database slow ho ya I/O inefficient ho.\n\n```text\nRequest\n  ↓\nEvent Loop\n  ├── CPU/blocking work → delay\n  ├── slow DB → delay\n  └── async I/O → other work can continue\n```\n\nSolutions mein non-blocking I/O, DB optimization, connection pooling, caching, background workers aur load balancing include hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "24. What is a control function in Node.js?",
    "answer": "A control function in Node.js is a function that helps manage the order and logic of executing asynchronous tasks, like callbacks, promises or middleware.\n\nA control function in Node.js helps manage the flow of asynchronous tasks, deciding whether to continue, retry or handle errors - especially in callbacks or middleware.",
    "explanation": "In practice, the term **control function** refers to a function that controls the flow of asynchronous or middleware execution. It can decide whether processing continues, stops, retries, or moves to error handling.\n\nFor example, in Express middleware:\n\n```js\napp.use((req, res, next) => {\n  if (!req.headers.authorization) {\n    return res.status(401).send(\"Unauthorized\");\n  }\n\n  next();\n});\n```\n\nHere, `next()` transfers control to the next middleware. This is why control-flow functions are important in callbacks, middleware chains, and asynchronous workflows.",
    "explanationHindi": "Control function asynchronous ya middleware execution ka flow control karta hai. Ye decide kar sakta hai ki processing continue karni hai, stop karni hai, error handle karna hai ya retry karna hai.\n\nExpress example mein `next()` control ko next middleware tak bhejta hai:\n\n```js\napp.use((req, res, next) => {\n  if (!req.headers.authorization) {\n    return res.status(401).send(\"Unauthorized\");\n  }\n  next();\n});\n```\n\nIsliye callbacks, middleware aur async workflows mein control functions important hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "25. When do you need modularization in Node.js?",
    "answer": "You use modularization in Node.js when your codebase becomes large or repetitive and you want to organize it into smaller, reusable and maintainable files or modules.\n\n### What is modularization?\n\nModularization means breaking your code into separate, logical modules, each handling a specific task like routes, database logic or utilities.\n\n### You should use modularization when:\n\n- codebase is growing\n- you need reusability\n- working in teams → developers can work on different modules independently\n- separation of concerns → helps separate handlers, database logic, config etc.\n\nIn Node.js modularization is used to break a large codebase into smaller reusable files to improve readability and maintainability.",
    "explanation": "I use modularization when the application becomes large enough that keeping routes, business logic, database code, configuration, and utilities in one place becomes difficult to maintain.\n\nA common structure is:\n\n```text\nsrc/\n ├── routes/\n ├── controllers/\n ├── services/\n ├── models/\n ├── middleware/\n └── utils/\n```\n\nFor example, a user controller should handle request-level logic, while a user service can contain reusable business logic. This improves separation of concerns, testing, reuse, and team development.",
    "explanationHindi": "Modularization tab use karte hain jab project bada ho raha ho aur routes, controllers, services, database logic aur utilities ko separate rakhna useful ho.\n\n```text\nsrc/\n ├── routes/\n ├── controllers/\n ├── services/\n ├── models/\n └── utils/\n```\n\nIsse code reusable, testable aur maintainable hota hai. Team mein different developers bhi different modules par independently kaam kar sakte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "26. Explain how blocking is prevented in Node.js.",
    "answer": "Node.js prevents blocking using a non-blocking event loop and asynchronous APIs, allowing it to handle many operations concurrently without waiting.",
    "explanation": "Node.js prevents blocking mainly through its event-driven, non-blocking I/O model. When Node starts an I/O operation, it does not keep the JavaScript thread waiting for the result. The operation is handled asynchronously, and its callback or Promise continuation runs when the result is ready.\n\n```text\nRequest\n  ↓\nStart async I/O\n  ↓\nEvent Loop continues other work\n  ↓\nI/O completes\n  ↓\nCallback / Promise continuation\n```\n\nFor example, `fs.readFile()` is preferable to `fs.readFileSync()` inside a request handler because the synchronous version can block the event loop.",
    "explanationHindi": "Node.js non-blocking event loop aur asynchronous APIs ki wajah se I/O wait ke time JavaScript thread ko unnecessarily block nahi karta.\n\n```text\nRequest\n  ↓\nAsync I/O start\n  ↓\nEvent Loop doosra kaam karta hai\n  ↓\nI/O complete\n  ↓\nCallback / Promise continuation\n```\n\nExample: request handler mein `fs.readFile()` use karna generally `fs.readFileSync()` se better hai, kyunki synchronous operation event loop ko block kar sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "27. How many layers are there in a Node.js application architecture?",
    "answer": "Node.js architecture usually has 4 layers: Presentation, Business Logic, Data Access and Database - each separating concerns for better maintainability.\n\n### Presentation Layer\n\nHandles HTTP requests (routes/controllers).\n\n### Business Logic Layer\n\nContains business logic.\n\n### Integration/Data Layer\n\nManages database or external service interactions.",
    "explanation": "The PDF uses four conceptual layers: Presentation, Business Logic, Data Access/Integration, and Database.\n\n```text\nClient\n  ↓\nPresentation\n  ↓\nBusiness Logic\n  ↓\nData Access / Integration\n  ↓\nDatabase\n```\n\nFor example, an Express route receives the request, a service applies the business rule, a repository/data-access layer queries MongoDB or MySQL, and the database stores the data. The main benefit is separation of responsibilities, which makes the application easier to test and maintain.",
    "explanationHindi": "PDF ke according architecture ko four conceptual layers mein samjha sakte hain:\n\n```text\nClient\n  ↓\nPresentation\n  ↓\nBusiness Logic\n  ↓\nData Access / Integration\n  ↓\nDatabase\n```\n\nPresentation request handle karta hai, business layer rules handle karti hai, data-access layer database/external services se baat karti hai aur database data store karta hai. Is separation se code maintain karna easy hota hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "28. Name the input arguments for an asynchronous queue.",
    "answer": "The main input arguments for an async queue are a worker function that processes tasks and a concurrency limit that controls parallel execution.\n\n```js\nasync.queue(worker, concurrency)\n```",
    "explanation": "The queue signature shown in the PDF is:\n\n```js\nasync.queue(worker, concurrency)\n```\n\nThe **worker** receives and processes each queued task. The **concurrency** value limits how many tasks the queue processes at the same time.\n\nFor example, if concurrency is `3`, at most three tasks are processed simultaneously. This is useful when calling an external API or processing jobs because it prevents the application from starting an uncontrolled number of operations at once.",
    "explanationHindi": "Async queue ka format PDF mein:\n\n```js\nasync.queue(worker, concurrency)\n```\n\n`worker` har task ko process karta hai aur `concurrency` batata hai ki ek time par kitne tasks parallel chal sakte hain.\n\nExample: concurrency `3` hai to maximum 3 tasks ek saath process honge. Ye external APIs ya background jobs ko uncontrolled parallel execution se bachane mein useful hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "29. Does Node.js application buffer data?",
    "answer": "Yes, Node.js does buffer data, especially during file I/O, network operations, or streams. It uses Buffer class to temporarily store chunks of binary data.\n\n### What is a Buffer?\n\nIn Node.js, a Buffer is a built-in class used to handle binary data stored directly in memory.\n\nFor example:\n\n- when reading a file with `fs.read()`\n- receiving chunks of data from a network socket\n- streaming large files",
    "explanation": "Yes. Node.js uses buffers when working with binary data and stream-based I/O. A `Buffer` is a memory area that stores raw bytes.\n\nFor example:\n\n```js\nconst fs = require(\"node:fs\");\n\nfs.readFile(\"photo.jpg\", (err, data) => {\n  console.log(data); // Buffer\n});\n```\n\nStreams also process data in chunks instead of necessarily loading an entire large file into memory. This is important for large files, network sockets, uploads, and downloads.",
    "explanationHindi": "Haan. Node.js streams, files aur network data ke saath kaam karte time buffering use karta hai. `Buffer` raw binary bytes ko memory mein temporarily store karta hai.\n\nExample:\n\n```js\nfs.readFile(\"photo.jpg\", (err, data) => {\n  console.log(data); // Buffer\n});\n```\n\nLarge files ke case mein streams data ko chunks mein process kar sakte hain, jisse poora file ek saath memory mein load karna zaroori nahi hota.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "30. Is it possible to run external processes with Node.js?",
    "answer": "Yes, Node.js can run external system commands using the `child_process` module with methods like `exec`, `spawn`, and `fork`.\n\n1) `exec()` → runs a command in a shell and buffers the output.\n\n2) `spawn()` → launches a new process with a given command.\n\n3) `fork()` → used to spawn new Node.js processes with communication with them.",
    "explanation": "Yes. Node.js provides the `child_process` module for this.\n\n```text\nNode.js Process\n      |\n      +── exec()   → shell command + buffered output\n      +── spawn()  → process + streaming I/O\n      +── fork()   → another Node.js process + IPC\n```\n\nFor example, `spawn()` is useful when a command produces a large or continuous amount of output, while `fork()` is specifically designed for starting another Node.js module and communicating with it.",
    "explanationHindi": "Haan, `child_process` module se external processes run kar sakte hain.\n\n```text\nexec()  → shell command + buffered output\nspawn() → process + streaming I/O\nfork()  → Node.js process + IPC\n```\n\n`spawn()` large/continuous output ke liye useful hai, jabki `fork()` another Node.js module ko separate process mein run karke parent-child communication provide karta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "31. Is it possible to avoid callback hell and how?",
    "answer": "Yes, callback hell in Node.js can be avoided by using promises, async/await and clean modular code to keep your logic readable and maintainable.",
    "explanation": "Yes. Callback hell can be avoided by changing the structure of asynchronous code. Promises and `async/await` are the most common approaches, along with small reusable functions and clear error handling.\n\nInstead of deeply nesting:\n\n```js\ngetUser(id, user => {\n  getOrders(user, orders => {\n    getPayment(orders, payment => {\n      // ...\n    });\n  });\n});\n```\n\nwe can write:\n\n```js\nconst user = await getUser(id);\nconst orders = await getOrders(user);\nconst payment = await getPayment(orders);\n```\n\nThis makes the flow easier to read, test, and maintain.",
    "explanationHindi": "Haan, callback hell ko Promises, `async/await`, reusable functions aur modular code se reduce kiya ja sakta hai.\n\nNested callbacks:\n\n```text\ncallback\n  └── callback\n       └── callback\n```\n\nki jagah:\n\n```js\nconst user = await getUser(id);\nconst orders = await getOrders(user);\nconst payment = await getPayment(orders);\n```\n\nlikhne se flow readable aur maintainable ho jata hai. Error handling bhi `try...catch` se clear ho jati hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "32. What is the function of the `fs` module?",
    "answer": "The `fs` module is used to create and manipulate files. It also provides an API for interacting with the file system.",
    "explanation": "The `fs` module provides Node.js APIs for interacting with the file system. It supports files and directories and provides synchronous as well as asynchronous APIs.\n\nCommon operations include:\n\n```js\nfs.readFile()\nfs.writeFile()\nfs.rename()\nfs.unlink()\nfs.mkdir()\n```\n\nFor server applications, asynchronous APIs are generally preferred for request-time file operations because synchronous file-system calls can block the event loop.",
    "explanationHindi": "`fs` module file system ke saath kaam karne ke APIs provide karta hai. Isse files/directories ko read, write, create, rename aur delete kiya ja sakta hai.\n\nCommon methods:\n\n```js\nfs.readFile()\nfs.writeFile()\nfs.rename()\nfs.unlink()\nfs.mkdir()\n```\n\nSynchronous aur asynchronous dono APIs available hain. Server request handling mein blocking avoid karne ke liye asynchronous APIs generally preferred hote hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "33. Define the `os` module in Node.js.",
    "answer": "The `os` module in Node.js provides built-in method to interact with the operating system, allowing you to retrieve information like CPU, memory, hostname, platform, uptime and more.",
    "explanation": "The `os` module provides information and utilities related to the operating system.\n\nFor example:\n\n```js\nconst os = require(\"node:os\");\n\nconsole.log(os.cpus().length);\nconsole.log(os.totalmem());\nconsole.log(os.freemem());\nconsole.log(os.platform());\nconsole.log(os.hostname());\n```\n\nThis information can be useful for diagnostics, monitoring, capacity checks, and deciding how many worker processes to create. It is not used to perform normal file or network I/O.",
    "explanationHindi": "`os` module operating system aur machine ki information provide karta hai.\n\n```js\nconst os = require(\"node:os\");\n\nconsole.log(os.cpus().length);\nconsole.log(os.freemem());\nconsole.log(os.platform());\nconsole.log(os.hostname());\n```\n\nIska use diagnostics, monitoring, system information aur CPU-based worker configuration jaise cases mein kiya ja sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "34. What is a Transform Stream in Node.js?",
    "answer": "A Transform Stream is a type of duplex stream in Node.js that can modify or transform the data as it is read and written.\n\nIt acts as both:\n\n- a readable stream (you can read from it)\n- a writable stream (you can write to it)\n\nand it processes the input data before passing it along.",
    "explanation": "A Transform Stream is a duplex stream where the output is derived from the input. Data enters the writable side, is transformed, and becomes available from the readable side.\n\n```text\nInput chunks\n    ↓\nTransform Stream\n    ↓\nChanged chunks\n    ↓\nOutput\n```\n\nFor example, a transform stream can modify text or compress data while it is flowing:\n\n```js\ninput.pipe(transform).pipe(output);\n```\n\nThis is memory-efficient for large data because the application can process chunks rather than loading everything at once.",
    "explanationHindi": "Transform Stream input data ko receive karta hai, usko transform karta hai aur output deta hai. Ye readable aur writable dono hota hai.\n\n```text\nInput chunks\n    ↓\nTransform Stream\n    ↓\nChanged chunks\n    ↓\nOutput\n```\n\nExample ke liye text transform ya compression stream ke beech mein ki ja sakti hai. Streams chunks mein kaam karte hain, isliye large data ko efficiently process kiya ja sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "35. How does Node.js handle concurrency if it is single-threaded?",
    "answer": "Node.js uses an event-driven, non-blocking I/O model with a single-threaded event loop to handle multiple operations concurrently.",
    "explanation": "Node.js handles concurrency by keeping JavaScript execution on the main thread while using the event loop and asynchronous I/O mechanisms to coordinate many operations.\n\n```text\nJS Call Stack\n     ↓\nEvent Loop\n     ↓\nAsync I/O / Runtime\n     ↓\nReady callbacks\n     ↓\nCall Stack\n```\n\nIf a network request is waiting, Node.js can work on another request instead of waiting synchronously. The important interview distinction is that **concurrency does not mean JavaScript is executing multiple JavaScript statements simultaneously on the same main thread**. CPU-heavy JavaScript should be moved to worker threads or separate processes.",
    "explanationHindi": "Node.js JavaScript ko main thread par execute karta hai, lekin event loop aur asynchronous I/O ki help se multiple operations ko concurrently handle kar sakta hai.\n\n```text\nCall Stack\n   ↓\nEvent Loop\n   ↓\nAsync I/O / Runtime\n   ↓\nReady callback\n   ↓\nCall Stack\n```\n\nAgar network request wait kar rahi hai, tab JavaScript thread doosre requests handle kar sakta hai. Important point: single-threaded JavaScript ka matlab ye nahi ki application sirf ek request handle kar sakti hai; I/O concurrency non-blocking model se possible hoti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "36. What is the meaning of HTTP status code 500?",
    "answer": "HTTP status code 500 indicates that the server is unable to process the request. This can be due to several reasons, such as an overloaded server or a network issue.",
    "explanation": "`500 Internal Server Error` means the server encountered an unexpected condition and could not complete the request. It is a **5xx server-side** status.\n\nExample:\n\n```js\napp.get(\"/users\", async (req, res) => {\n  try {\n    // database call\n  } catch (err) {\n    res.status(500).json({ message: \"Internal server error\" });\n  }\n});\n```\n\nIn production, the client response should avoid exposing stack traces or secrets. The detailed error should be logged securely on the server.",
    "explanationHindi": "`500 Internal Server Error` ek 5xx status code hai. Iska matlab server ko unexpected problem hui aur request successfully complete nahi ho saki.\n\nExample:\n\n```js\nres.status(500).json({\n  message: \"Internal server error\"\n});\n```\n\nClient ko detailed stack trace ya secret information nahi deni chahiye. Actual error ko server-side logs mein securely record karna better hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "37. What is a Node Inspector?",
    "answer": "A Node Inspector is a debugging tool that allows developers to inspect and debug the code of an application through a graphical user interface.",
    "explanation": "Node Inspector is the debugging interface built around Node.js's inspector capabilities. It lets a developer pause execution, inspect variables and call stacks, set breakpoints, and investigate runtime behavior.\n\nA common way to start it is:\n\n```bash\nnode --inspect app.js\n```\n\nThe application can then be inspected using supported developer tools. In practice, VS Code debugging is also commonly used because it provides breakpoints, watches, call-stack inspection, and step-by-step execution.",
    "explanationHindi": "Node Inspector Node.js application ko debug karne ke liye use hota hai. Isse breakpoints, variables, call stack aur execution flow inspect kar sakte hain.\n\nExample:\n\n```bash\nnode --inspect app.js\n```\n\nDay-to-day development mein VS Code ka debugger bhi use kiya ja sakta hai, jisme breakpoints, step-by-step execution aur variable inspection available hota hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "38. When are we required to use the cluster module in Node.js?",
    "answer": "Use the cluster module when you need parallelism on a multi-core CPU, want to improve performance for CPU-heavy tasks or increase your scalability by running multiple worker processes.\n\n### When we need to use:\n\n1. CPU-bound workloads\n2. Better performance on multi-core systems\n3. Handling high-traffic",
    "explanation": "The cluster module is useful when I want multiple Node.js **processes** to use multiple CPU cores and share the workload of a server.\n\n```text\nPrimary Process\n   ├── Worker 1\n   ├── Worker 2\n   └── Worker 3\n```\n\nEach worker is a separate process. Clustering can help with high-traffic server workloads and process-level isolation. For a CPU-heavy calculation inside JavaScript, I would also consider worker threads; cluster is primarily about multiple processes rather than threads.",
    "explanationHindi": "Cluster module multiple Node.js **processes** ko run karke multiple CPU cores ka better use karne mein help karta hai.\n\n```text\nPrimary\n ├── Worker 1\n ├── Worker 2\n └── Worker 3\n```\n\nYe high-traffic server workloads aur process-level parallelism ke liye useful ho sakta hai. CPU-heavy JavaScript calculation ke liye worker threads bhi consider karne chahiye, kyunki cluster ka main concept multiple processes hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "39. How does Node.js use cryptography?",
    "answer": "Node.js uses cryptography mainly for security purposes - hashing passwords, encrypting/decrypting data, creating digital signatures, verifying authenticity and generating secure random values.\n\nAll of this is done using the `crypto` core module, which wraps OpenSSL's cryptographic capabilities.",
    "explanation": "Node.js provides the built-in `crypto` module for cryptographic operations such as hashing, encryption/decryption, digital signatures, verification, and secure random values.\n\nExample:\n\n```js\nconst crypto = require(\"node:crypto\");\n\nconst hash = crypto\n  .createHash(\"sha256\")\n  .update(\"hello\")\n  .digest(\"hex\");\n\nconsole.log(hash);\n```\n\nAn important interview point is that hashing and encryption are different. Hashing is generally one-way, while encryption is designed to be reversible with the appropriate key. Passwords should use dedicated password-hashing algorithms rather than simply storing a general-purpose hash.",
    "explanationHindi": "Node.js ka built-in `crypto` module hashing, encryption/decryption, digital signatures, verification aur secure random values jaise cryptographic operations ke liye use hota hai.\n\nExample:\n\n```js\nconst hash = crypto\n  .createHash(\"sha256\")\n  .update(\"hello\")\n  .digest(\"hex\");\n```\n\nInterview mein hashing aur encryption ka difference bhi mention karna chahiye: hashing generally one-way hoti hai, encryption key ke through reversible hoti hai. Passwords ke liye dedicated password-hashing algorithms use karne chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "40. How do you include an HTTP server in a Node.js module?",
    "answer": "In Node.js, you include an HTTP server by using the built-in `http` module and either exporting the server object itself or exposing it from a module so it can be used elsewhere.",
    "explanation": "I can create the HTTP server with Node's built-in `http` module and export the server object from the module.\n\n```js\nconst http = require(\"node:http\");\n\nconst server = http.createServer((req, res) => {\n  res.end(\"Hello\");\n});\n\nmodule.exports = server;\n```\n\nAnother file can import it:\n\n```js\nconst server = require(\"./server\");\nserver.listen(3000);\n```\n\nThis separates server creation from the code that starts the server, which is useful for testing and application organization.",
    "explanationHindi": "Node.js ke built-in `http` module se server create karke usko module se export kar sakte hain.\n\n```js\nconst http = require(\"node:http\");\n\nconst server = http.createServer((req, res) => {\n  res.end(\"Hello\");\n});\n\nmodule.exports = server;\n```\n\nPhir doosri file mein import karke `server.listen(3000)` call kar sakte hain. Isse server creation aur startup ko separate rakhna easy hota hai aur testing bhi better ho sakti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-21-40",
    "question": "Source Note",
    "answer": "No PDF answer provided.",
    "explanation": "",
    "explanationHindi": "",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "41. What is the purpose of `EventEmitter`?",
    "answer": "EventEmitter in Node.js is like a messenger inside your program.\n\n- you can shout a message (emit an event)\n- other parts of your code can listen for that message (on an event)\n- when the message is heard, the listeners do something.\n\n### In short\n\nEventEmitter lets different parts of your code talk to each other by sending and receiving events, without being directly connected.",
    "explanation": "`EventEmitter` is a core Node.js pattern for event-based communication. One part of the program emits an event and other parts register listeners for that event.\n\n```js\nconst { EventEmitter } = require(\"node:events\");\n\nconst emitter = new EventEmitter();\n\nemitter.on(\"userCreated\", user => {\n  console.log(\"Send welcome email to\", user.email);\n});\n\nemitter.emit(\"userCreated\", { email: \"a@example.com\" });\n```\n\nThe important methods are `on()` for listening and `emit()` for triggering. Node.js itself uses event-driven APIs extensively, so understanding `EventEmitter` helps explain how many Node APIs communicate asynchronously.",
    "explanationHindi": "`EventEmitter` Node.js mein event-based communication ke liye use hota hai. Ek part event emit karta hai aur doosra part listener ke through us event par action leta hai.\n\n```js\nconst { EventEmitter } = require(\"node:events\");\nconst emitter = new EventEmitter();\n\nemitter.on(\"userCreated\", user => {\n  console.log(user.email);\n});\n\nemitter.emit(\"userCreated\", { email: \"a@example.com\" });\n```\n\n`on()` listener register karta hai aur `emit()` event trigger karta hai. Node.js ke kai APIs event-driven model par based hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "42. Explain the child process module in Node.js.",
    "answer": "The child-process module in Node.js is like having a helper to do work that you don't want your main program to do.\n\n- your Node app → main worker\n- child process → extra worker who can run commands, scripts or programs.\n- they work in separate process so if one is busy, the other can keep up.\n- you can send them work and get their back.\n\n### In short\n\nChild-process lets Node.js run other programs, so your app can multitask without slowing down.",
    "explanation": "The `child_process` module lets Node.js start and communicate with separate operating-system processes. This is useful when I need to run a shell command, another program, or another Node.js process without putting that work directly into the main process.\n\nThe main methods are:\n\n```text\nexec()  → command through a shell, buffered output\nspawn() → process with stream-based I/O\nfork()  → Node.js child process + IPC\n```\n\nFor example, `spawn()` is suitable when output is continuous, while `fork()` is useful when another Node.js module needs to communicate with the parent.",
    "explanationHindi": "`child_process` module separate operating-system processes run aur communicate karne deta hai. Iska use external commands, scripts ya another Node.js process ke liye hota hai.\n\n```text\nexec()  → shell command + buffered output\nspawn() → process + stream-based I/O\nfork()  → Node.js child + IPC\n```\n\nIsse main Node.js process ko har external task directly perform nahi karna padta. `spawn()` continuous output ke liye aur `fork()` Node.js child process communication ke liye useful hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "43. Explain event-driven programming in Node.js.",
    "answer": "In Node.js, event-driven programming means:\n\nDo this when that happens instead of running in a strict top to bottom sequence.\n\n### Event-driven programming in Node.js means your code waits for signals (events) and reacts when they happen.\n\n- Event → Something that happens (e.g. a user clicks a button, a file finishes loading, a request comes in).\n- Listener → your code that runs when the event happens.",
    "explanation": "Node.js is strongly event-driven: instead of writing all work as one blocking top-to-bottom sequence, the application registers handlers and reacts when events occur.\n\n```text\nEvent occurs\n    ↓\nEvent emitted / detected\n    ↓\nListener or handler\n    ↓\nApplication action\n```\n\nFor example, a server receives a request, a file read completes, or a custom event is emitted. The registered callback handles that event. This model works closely with Node's non-blocking I/O approach.",
    "explanationHindi": "Event-driven programming mein application fixed top-to-bottom flow ke bajay events ke occur hone par react karti hai.\n\n```text\nEvent\n  ↓\nListener / Handler\n  ↓\nAction\n```\n\nExample: request aayi, file read complete hui ya custom event emit hua, to corresponding handler execute hota hai. Node.js asynchronous programming mein is model ka heavily use karta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "44. What is callback hell in Node.js?",
    "answer": "Callback hell refers to the nested structure of callback functions, leading to code that is hard to read, understand and maintain.\n\nIt can be mitigated using techniques like modularizing, promises or async/await.",
    "explanation": "Callback hell is deeply nested asynchronous callback code that becomes difficult to read, debug, and maintain.\n\n```text\ncallback\n  └── callback\n       └── callback\n            └── callback\n```\n\nIt can be reduced with Promises, `async/await`, smaller functions, and modular code.\n\nFor example, instead of nesting several dependent database/API calls, I can write them sequentially with `await` and handle failures with `try...catch`. The goal is not to remove callbacks completely, but to keep asynchronous control flow readable.",
    "explanationHindi": "Callback hell tab hota hai jab asynchronous callbacks bahut deeply nested ho jate hain.\n\n```text\ncallback\n  └── callback\n       └── callback\n            └── callback\n```\n\nIsse code read, debug aur maintain karna difficult hota hai. Promises, `async/await`, small reusable functions aur modular code se is problem ko reduce kiya ja sakta hai. Goal callbacks ko completely remove karna nahi, balki control flow ko readable rakhna hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "45. What are common performance bottlenecks in Node.js applications and how can they be handled?",
    "answer": "### Summary table\n\n| Bottleneck | Fix |\n|---|---|\n| Blocking the event loop | worker threads, child processes, streams |\n| Slow DB queries | indexing, caching, pagination |\n| Synchronous code | async APIs |\n| Memory leaks | monitor & fix leaks |\n| Big JSON parsing | streaming parsers |\n| Too many requests | rate limiting, queues |\n| No caching | Redis, in-memory cache |\n| Bad error handling | proper try/catch, logging |",
    "explanation": "The main bottlenecks are blocking the event loop, slow database queries, synchronous operations, memory leaks, large JSON processing, excessive traffic, and missing caching.\n\nI would investigate them like this:\n\n```text\nSlow API\n  ├── CPU blocking → worker threads / processes\n  ├── slow DB → indexes / query optimization / pooling\n  ├── large data → streams\n  ├── repeated reads → cache\n  └── high traffic → rate limits / queues / scaling\n```\n\nI would also monitor CPU, memory, event-loop delay, database latency, and request latency rather than guessing where the bottleneck is.",
    "explanationHindi": "Common bottlenecks mein event-loop blocking, slow DB queries, synchronous operations, memory leaks, large JSON processing, too much traffic aur missing cache include hain.\n\n```text\nSlow API\n ├── CPU blocking → worker\n ├── slow DB → index / optimize\n ├── large data → stream\n ├── repeated data → cache\n └── high traffic → queue / scale\n```\n\nProduction mein CPU, memory, event-loop delay, DB latency aur request latency monitor karke actual bottleneck identify karna chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "46. Explain microservices architecture in Node.js development.",
    "answer": "Microservices architecture in Node.js is a way of building application by breaking them into small independent services that each do one thing well.\n\nInstead of having one big application (monolith) that handles everything, you have many smaller app that communicate with each other often over HTTP or messaging system.",
    "explanation": "Microservices architecture splits a large application into smaller services, with each service owning a specific business responsibility.\n\n```text\n                API Gateway\n             /      |                   ↓       ↓        ↓\n         Users    Orders   Notifications\n            \\       |        /\n             → HTTP / Messaging\n```\n\nEach service can be developed and deployed independently. Node.js is commonly used for API and I/O-heavy services. The trade-off is that a microservices system introduces network calls, distributed failure handling, service discovery, monitoring, and deployment complexity.",
    "explanationHindi": "Microservices architecture mein large application ko small independent services mein divide karte hain. Har service ek business responsibility handle karti hai.\n\n```text\n             API Gateway\n           /      |               Users   Orders   Notifications\n           \\      |       /\n            HTTP / Messaging\n```\n\nServices independently develop aur deploy ho sakti hain. Lekin distributed system mein network failures, monitoring, deployment aur service communication ki complexity badh jati hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "47. Explain GraphQL and compare it with RESTful APIs in Node.js.",
    "answer": "### When to Use\n\n### GraphQL's great when:\n\n- clients need flexibility in what data they get.\n- you want to reduce multiple API calls into one.\n- your app serves multiple clients (web, mobile etc) with different data needs.\n\n### REST is fine when:\n\n- your data needs are simple and stable.\n- you want to rely on standard HTTP features and caching.\n\n### GraphQL in Node.js\n\nLets clients ask exactly the data they need from one endpoint, while REST exposes multiple fixed endpoints. GraphQL reduces over-fetching and under-fetching but comes with more setup and learning overhead.",
    "explanation": "GraphQL is an API query language where the client describes the data it needs. REST normally exposes resource-oriented endpoints such as `/users` or `/orders`.\n\n```text\nREST:\nGET /users/1\nGET /users/1/orders\n\nGraphQL:\nPOST /graphql\nquery { user(id: 1) { name orders { id } } }\n```\n\nGraphQL can reduce over-fetching and under-fetching and can combine related data in one query. REST is often simpler when resource requirements are stable and standard HTTP semantics and caching are important. The choice depends on the application's API needs.",
    "explanationHindi": "GraphQL mein client exactly required fields request karta hai, jabki REST generally resource-based multiple endpoints expose karta hai.\n\n```text\nREST:\nGET /users/1\nGET /users/1/orders\n\nGraphQL:\nPOST /graphql\nquery { user(id: 1) { name orders { id } } }\n```\n\nGraphQL over-fetching aur under-fetching reduce kar sakta hai. REST simpler ho sakta hai jab data requirements stable hon aur standard HTTP behavior/caching important ho. Choice application ki requirements par depend karti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "48. How do you deploy a Node.js application in a containerized environment using Docker?",
    "answer": "### Why Docker for Node.js\n\n- **Isolation** → your app runs the same everywhere.\n- **Easy deployment** → package the app + dependencies into one image.\n- **Scalability** → works with Kubernetes, Docker Swarm etc.\n\n### Summary\n\n1. write your Node.js app\n2. create a Dockerfile\n3. build image → `docker build`\n4. run container → `docker run`\n5. push to registry & deploy to cloud/container orchestration",
    "explanation": "A typical Docker deployment is:\n\n```text\nNode.js App\n   ↓\nDockerfile\n   ↓\nDocker Image\n   ↓\nContainer\n   ↓\nRegistry\n   ↓\nCloud / Kubernetes / Server\n```\n\nExample Dockerfile:\n\n```dockerfile\nFROM node:22-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --omit=dev\nCOPY . .\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]\n```\n\nThen build and run:\n\n```bash\ndocker build -t my-node-app .\ndocker run -p 3000:3000 my-node-app\n```\n\nIn production I would also use environment variables/secrets, health checks, logging, and an appropriate deployment platform.",
    "explanationHindi": "Docker Node.js application aur dependencies ko container image mein package karta hai.\n\n```text\nApp → Dockerfile → Image → Container → Registry → Server/Cloud\n```\n\nExample:\n\n```dockerfile\nFROM node:22-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --omit=dev\nCOPY . .\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]\n```\n\nBuild/run:\n\n```bash\ndocker build -t my-node-app .\ndocker run -p 3000:3000 my-node-app\n```\n\nProduction mein environment variables, secrets, health checks aur logging bhi configure karne chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "49. How do you handle long-running tasks in a Node.js application without blocking the event loop?",
    "answer": "### Why this matters\n\nNode.js uses a single-threaded event loop.\n\nIf a long task (e.g. big files processing, complex calculation) blocks the loop:\n\n- your app stops responding to new requests.\n- everything feels \"frozen\".\n\n### Choose the right approach\n\n| Scenario | Best Solution |\n|---|---|\n| CPU-bound task (calculations, encoding) | worker threads, child processes |\n| Delayed/async tasks | job queue (Bull, RabbitMQ) |\n| Big files/data handling | streams |\n| One but very heavy jobs | external service/serverless |",
    "explanation": "The first step is to identify what kind of long-running task it is.\n\n```text\nLong task\n ├── CPU-heavy → Worker Threads / child processes\n ├── background job → Queue / worker\n ├── large data → Streams\n └── isolated heavy service → External service/serverless\n```\n\nFor example, generating a large report can be placed on a job queue. The API can immediately return a job ID, while a worker processes the report in the background. This keeps the request handler and event loop responsive.",
    "explanationHindi": "Long-running task ko main event loop par directly run nahi karna chahiye agar wo CPU ya I/O ko bahut der tak hold kare.\n\n```text\nLong task\n ├── CPU-heavy → Worker Thread / Process\n ├── background → Job Queue\n ├── large data → Stream\n └── very heavy → External service\n```\n\nExample: report generation ko queue mein daal sakte hain. API immediately job ID return karegi aur background worker report generate karega. Isse event loop responsive rahega.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "50. What are security vulnerabilities in Node.js applications and how can they be mitigated?",
    "answer": "Most Node.js vulnerabilities come from bad input handling, insecure dependencies and misconfigured apps. You fix them by validating inputs, keeping packages updated, using proper security middleware and protecting secrets.\n\n### 1) Injection attacks (SQL injection, NoSQL injection, command injection)\n\n**Problem:** Attacker sends malicious input that changes how your queries or commands run.\n\n**Mitigation:**\n\n- use parameterized queries/ORM.\n- validate and sanitize all inputs.\n\n### 2) Cross-site scripting (XSS)\n\n**Problem:** attacker injects malicious JavaScript into web pages viewed by others.\n\n**Mitigation:**\n\n- escape output (e.g. Helmet, XSS-clean).\n- use template engines that auto-escape.\n- content security policy (CSP) via Helmet.\n\n### 3) Cross-Site Request Forgery (CSRF)\n\n**Problem:** attacker tricks a logged-in user into making an unwanted request.\n\n**Mitigation:**\n\n- use CSRF tokens (csurf package).\n- SameSite cookies.\n\n### 4) Insecure Dependencies\n\n**Problem:** outdated npm packages with known vulnerabilities.\n\n**Mitigation:**\n\n- Run `npm audit` and `npm audit fix`.\n- use Dependabot or similar to monitor.\n- remove unused dependencies.\n\n### 5) Sensitive Data Exposure\n\n**Problem:** secrets (API keys, passwords) stored in code or leaked in responses.\n\n**Mitigation:**\n\n- store secrets in environment variables.\n- use secret managers.\n- never log sensitive data.\n\n### 6) Denial of Service (DoS)\n\n**Problem:** application overwhelmed by too many requests or heavy payloads.\n\n**Mitigation:**\n\n- rate limiting (`express-rate-limit`).\n- validate request size.\n- use reverse proxies like Nginx.",
    "explanation": "Common vulnerabilities include injection attacks, XSS, CSRF, vulnerable dependencies, exposed secrets, and denial-of-service conditions.\n\nA practical security checklist is:\n\n```text\nInput validation\n      ↓\nAuthentication + authorization\n      ↓\nSecure headers / HTTPS / cookies\n      ↓\nRate limiting\n      ↓\nDependency + secret management\n      ↓\nSafe error handling + logging\n```\n\nFor example, use parameterized database queries, validate input, keep packages updated, protect secrets with environment variables or a secret manager, configure secure cookies, and apply rate limiting where appropriate.",
    "explanationHindi": "Node.js security ko layered approach se handle karna chahiye: input validation, authentication/authorization, secure headers, HTTPS/cookies, rate limiting, dependency updates aur secret protection.\n\n```text\nValidation\n   ↓\nAuth + RBAC\n   ↓\nHTTPS + secure cookies\n   ↓\nRate limiting\n   ↓\nDependency / secret management\n```\n\nExample: SQL/NoSQL queries ke liye parameterized queries use karo, input validate karo, packages update rakho aur API keys source code mein hard-code mat karo.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "51. Explain Continuous Integration and Continuous Deployment (CI/CD) in Node.js development.",
    "answer": "CI/CD in Node.js means automating your testing and deployment process so code goes from developer → production fast, safely and reliably.\n\n### 1. What is CI/CD?\n\n- **Continuous Integration (CI)** → every time you push code, it's automatically tested, built and validated.\n- **Continuous Deployment (CD)** → after passing tests, code is automatically deployed to staging or production.\n\nThink of CI/CD as your automated assembly line for software - no more manual testing and uploading.",
    "explanation": "CI/CD creates an automated path from code change to validation and deployment.\n\n```text\ngit push\n   ↓\nInstall dependencies\n   ↓\nLint / Test\n   ↓\nBuild\n   ↓\nDeploy to staging\n   ↓\nChecks\n   ↓\nProduction\n```\n\n**CI** focuses on automatically validating changes. **CD** automates delivery/deployment after the required checks pass. Tools such as GitHub Actions, GitLab CI, or Jenkins can run these steps. The exact pipeline depends on the team's release process.",
    "explanationHindi": "CI/CD code changes ko automatically test, build aur deploy karne ka process hai.\n\n```text\ngit push\n  ↓\nInstall\n  ↓\nLint / Test\n  ↓\nBuild\n  ↓\nStaging\n  ↓\nChecks\n  ↓\nProduction\n```\n\nCI ka focus code validation par hota hai. CD validated code ko staging ya production tak automatically deliver/deploy kar sakta hai. GitHub Actions, GitLab CI ya Jenkins jaise tools se ye pipeline banayi ja sakti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "52. How would you design and implement a robust error-handling strategy in a large-scale Node.js application?",
    "answer": "To design a robust error handling strategy in a large-scale Node.js application:\n\n- **Centralized Error Handling** → implement a central error handling mechanism to catch and handle errors consistently across the application.\n- **Error Logging** → log errors with relevant details (e.g. stack trace, request context) for debugging and monitoring purposes.\n- **Graceful Shutdown** → gracefully handle unhandled exceptions and signals to ensure the application exits cleanly.\n- **Custom Error classes** → define custom error classes to represent different types of errors and handle them appropriately.\n- **Retry mechanisms** → implement retry mechanisms for transient errors to improve application resilience.",
    "explanation": "For a large application, I would centralize error handling and use custom error classes so the application can distinguish validation, authentication, database, and unexpected errors.\n\n```text\nController / Service\n       ↓\n  throw / next(error)\n       ↓\nCentral Error Handler\n   ├── log details\n   ├── choose status code\n   └── safe client response\n```\n\nFor temporary failures such as a transient network problem, retries can be used with sensible limits. On fatal process-level failures, the application should log the problem and perform a graceful shutdown so resources are released cleanly.",
    "explanationHindi": "Large application mein centralized error handling use karna chahiye.\n\n```text\nController / Service\n       ↓\nError\n       ↓\nCentral Error Handler\n   ├── Log\n   ├── Status code\n   └── Safe response\n```\n\nCustom error classes se validation, authentication, database aur unexpected errors ko differentiate kar sakte hain. Temporary failures ke liye limited retry useful ho sakta hai. Fatal failures mein graceful shutdown se resources safely release kiye ja sakte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "53. How does error handling differ in synchronous and asynchronous code in Node.js?",
    "answer": "### 1) Synchronous Code\n\n- Runs top to bottom, one step at a time.\n- Errors can be caught with a simple `try...catch`.\n\n```js\ntry {\n    // code\n} catch (err) {\n    // handle error\n}\n```\n\n### 2) Asynchronous Code (callback & promises)\n\nYou can't use `try...catch` directly - instead, errors are passed as the first argument to the callback.\n\nExample:\n\n```js\nfs.readFile('file.txt', 'utf8', (err, data) => {\n    if (err) {\n        console.log('Error:', err.message);\n        return;\n    }\n\n    console.log(data);\n});\n```\n\nPattern:\n\n```text\n(err, result) => { ... }\n```\n\nAlways check `err` first.\n\n### B) Promises\n\nHandle errors with `.catch()` or pass them to `.then()`'s second argument.\n\n```js\nfetchData()\n    .then(data => console.log(data))\n    .catch(err => console.log('Error:', err.message));\n```\n\n### C) Async/await\n\nYou can use `try...catch` because `await` makes async code look synchronous.\n\nExample:\n\n```js\nasync function run() {\n    try {\n        const data = await fetchData();\n        console.log(data);\n    } catch (err) {\n        console.log(err);\n    }\n}\n```",
    "explanation": "The mechanism depends on whether the operation is synchronous, callback-based, Promise-based, or `async/await`.\n\n```js\n// sync / async-await\ntry {\n  const data = await fetchData();\n} catch (err) {\n  console.error(err);\n}\n\n// callback\nfs.readFile(\"a.txt\", (err, data) => {\n  if (err) return console.error(err);\n});\n\n// Promise\nfetchData().catch(err => console.error(err));\n```\n\nA key interview point is that `try...catch` around a normal synchronous call does not automatically catch an error thrown later inside an unrelated asynchronous callback. The error must be handled using that API's error mechanism.",
    "explanationHindi": "Synchronous code mein `try...catch` directly error catch kar sakta hai. Async code mein handling API ke type par depend karti hai.\n\n```js\ntry {\n  const data = await fetchData();\n} catch (err) {\n  console.error(err);\n}\n```\n\nCallback mein first `err` argument check hota hai, Promise mein `.catch()` aur `async/await` mein `try...catch` use hota hai.\n\nImportant point: normal `try...catch` kisi future asynchronous callback ke error ko automatically catch nahi karta; us callback/Promise ke proper error mechanism ko use karna hota hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "54. How do you debug a Node.js application?",
    "answer": "Debugging in Node.js often starts with `console.log` but scales better with Node Inspector, VS Code breakpoints, and structured logging. Combine these with stack traces and profiling to solve both functional bugs and performance issues.\n\n### 1) Use `console.log` (quick & dirty)\n\nThe simplest way to debug - just log variable and flow.\n\n```js\nconsole.log('user object', user);\nconsole.log('Reached function X');\n```\n\n→ Not scalable - for large projects can get messy.\n\n### 2) Use the built-in Node.js Debugger\n\nNode has a built-in inspector.\n\n```bash\nnode inspect app.js\n```\n\nUse commands like:\n\n- `n` → next line\n- `c` → continue\n- `repl` → run code at breakpoint\n\n### 3) Use Breakpoints in VS Code\n\nIf you're using Visual Studio Code:\n\n- open your Node.js project.\n- click **Run & Debug** (sidebar).\n- add breakpoints by clicking next to line numbers.\n- press **F5** to start debugging.\n\n### 4) Use Node.js profiling tools\n\n- `--inspect` with Chrome DevTools → CPU & memory profiling.\n- Clinic.js → diagnose performance issues.\n- 0x → flamegraphs for bottlenecks.",
    "explanation": "I normally debug in stages: first reproduce the issue, then inspect logs and stack traces, then use breakpoints or the Node inspector for deeper investigation.\n\n```text\nReproduce\n   ↓\nLogs / Stack trace\n   ↓\nBreakpoint / Inspector\n   ↓\nInspect variables + call stack\n   ↓\nFix\n   ↓\nTest again\n```\n\nFor performance issues, CPU and memory profiling can identify bottlenecks. In VS Code, breakpoints and the Run & Debug panel make step-by-step debugging practical for day-to-day development.",
    "explanationHindi": "Debugging ke liye pehle issue reproduce karna chahiye, phir logs aur stack trace dekhna chahiye. Agar issue clear na ho to Node Inspector ya VS Code breakpoints use kar sakte hain.\n\n```text\nReproduce\n  ↓\nLogs / Stack trace\n  ↓\nBreakpoint / Inspector\n  ↓\nVariables + Call Stack\n  ↓\nFix + Test\n```\n\nPerformance issue mein CPU aur memory profiling useful hoti hai. VS Code mein breakpoints aur step-by-step debugging day-to-day development ke liye practical hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "55. What is the role of the `process` object in Node.js? Give examples of its usage.",
    "answer": "The process object in Node.js provides information and control over the Node.js process. It allows access to environment variables, command-line arguments, and provides methods for exiting the process or listening for signals.\n\n### eg -> accessing command-line arguments\n\n```js\nconsole.log(\"arguments\", process.argv);\n```",
    "explanation": "The `process` object represents the current Node.js process and provides information and control over it.\n\nCommon examples:\n\n```js\nconsole.log(process.argv);       // CLI arguments\nconsole.log(process.env.NODE_ENV); // environment\nconsole.log(process.pid);        // process ID\nconsole.log(process.cwd());      // current working directory\n```\n\nIt can also listen for operating-system signals and control process termination. Environment variables should contain configuration/secrets rather than hard-coded credentials in source code.",
    "explanationHindi": "`process` object current Node.js process ko represent karta hai.\n\n```js\nconsole.log(process.argv);          // CLI arguments\nconsole.log(process.env.NODE_ENV);  // environment\nconsole.log(process.pid);           // PID\nconsole.log(process.cwd());          // current directory\n```\n\nIsse process information, environment variables, command-line arguments, signals aur exit behavior access/control kiya ja sakta hai. Secrets ko source code mein hard-code nahi karna chahiye; environment/configuration mechanism use karna chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "56. What is session management in Express.js? How can it be implemented?",
    "answer": "Session management in Express.js is the way we store and track a user's data across multiple HTTP requests.\n\nSince HTTP is stateless, the server doesn't remember anything between requests - session help keep track of things like status, shopping cart data, preferences.\n\n### How it works\n\n1. User logs in/signs in → server creates a session ID.\n2. Session data is stored on the server (in memory, database or Redis).\n3. Session ID is sent to the user's browser in a cookie.\n4. On the next request, the browser sends the cookie → server uses the session ID to retrieve the stored.",
    "explanation": "Session management lets an Express application associate multiple HTTP requests with the same user.\n\n```text\nLogin\n  ↓\nCreate session\n  ↓\nStore session data\n  ↓\nSend session ID in cookie\n  ↓\nLater request sends cookie\n  ↓\nServer loads session\n```\n\nA common implementation is `express-session`. In production, session data should normally use an appropriate shared session store such as Redis instead of relying on process memory when the application runs across multiple instances.\n\n```js\napp.use(session({\n  secret: process.env.SESSION_SECRET,\n  resave: false,\n  saveUninitialized: false\n}));\n```",
    "explanationHindi": "Session management ka purpose multiple HTTP requests ko same user/session se associate karna hai.\n\n```text\nLogin\n ↓\nCreate Session\n ↓\nStore Session\n ↓\nSession ID → Cookie\n ↓\nNext Request\n ↓\nLoad Session\n```\n\nExpress mein `express-session` common implementation hai. Production mein multiple server instances hone par Redis jaise shared session store ka use kiya ja sakta hai.\n\n```js\napp.use(session({\n  secret: process.env.SESSION_SECRET,\n  resave: false,\n  saveUninitialized: false\n}));\n```\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "57. Explain the concept of middleware chaining in Express.js.",
    "answer": "Middleware chaining in Express.js involves using multiple middleware function sequentially in the request-response cycle. Each middleware function can perform a specific task, modify the request or response, and then pass control to the next middleware using the `next()` function.",
    "explanation": "Middleware chaining means multiple middleware functions process the same request in sequence.\n\n```text\nRequest\n  ↓\nLogger\n  ↓\nAuthentication\n  ↓\nValidation\n  ↓\nController\n  ↓\nResponse\n```\n\nA middleware can modify `req`/`res`, finish the response, or call `next()` to continue. Error-handling middleware uses the four-argument form:\n\n```js\napp.use((err, req, res, next) => {\n  res.status(500).json({ message: \"Internal error\" });\n});\n```\n\nThis makes cross-cutting concerns such as authentication, logging, and validation reusable.",
    "explanationHindi": "Middleware chaining mein same request ko multiple middleware sequence mein process karte hain.\n\n```text\nRequest\n ↓\nLogger\n ↓\nAuth\n ↓\nValidation\n ↓\nController\n ↓\nResponse\n```\n\nMiddleware `req`/`res` modify kar sakta hai, response end kar sakta hai ya `next()` se next middleware ko control de sakta hai.\n\nError middleware ka common form:\n\n```js\napp.use((err, req, res, next) => {\n  res.status(500).json({ message: \"Internal error\" });\n});\n```\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "58. What are the advantages of using a templating engine like EJS or Handlebars in Express.js?",
    "answer": "It makes building dynamic, reusable and organized web pages much easier.\n\n1. **Dynamic pages** → you can put data from Node.js directly into HTML.\n2. **Reusable code** → use headers/footers/partials instead of repeating HTML.\n3. **Cleaner structure** → keeps business logic and UI separate.\n4. **Easy to write** → simple syntax (like `<% %>`, `<%= %>`).\n5. **SEO friendly** → HTML is generated on the server, so search engines can read it.",
    "explanation": "A templating engine such as EJS or Handlebars lets the server generate HTML using application data. It is useful when the application needs server-rendered pages.\n\nFor example:\n\n```js\nres.render(\"profile\", {\n  name: \"John\",\n  age: 25\n});\n```\n\nThe template can contain reusable partials such as headers and footers. This reduces duplicated HTML and keeps presentation separate from application logic. Server-rendered HTML can also be useful for traditional SEO and initial page rendering.",
    "explanationHindi": "EJS/Handlebars jaise template engines server-side data ko HTML templates mein insert karne dete hain. Isse dynamic pages aur reusable partials banana easy hota hai.\n\nExample:\n\n```js\nres.render(\"profile\", {\n  name: \"John\",\n  age: 25\n});\n```\n\nHeaders, footers aur common UI partials reuse kiye ja sakte hain. Business logic aur presentation ko separate rakhna easy hota hai, aur server-rendered HTML traditional SEO use cases mein useful ho sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "59. How do you deploy a Node.js application to a production server?",
    "answer": "A Node.js application can be deployed to production servers using various deployment strategies such as manual deployment, continuous integration/continuous deployment (CI/CD), pipelines, containerization with Docker, and cloud platforms like AWS, Heroku as Azure.",
    "explanation": "A production deployment normally includes these steps:\n\n```text\nBuild / Test\n   ↓\nConfigure environment variables\n   ↓\nInstall production dependencies\n   ↓\nStart application\n   ↓\nReverse proxy / load balancer\n   ↓\nMonitoring + logs\n```\n\nThe PDF mentions manual deployment, CI/CD, Docker, and cloud platforms. In a real production setup, I would also consider process management or orchestration, HTTPS, health checks, graceful shutdown, logging, and a rollback strategy.",
    "explanationHindi": "Production deployment ka basic flow:\n\n```text\nBuild / Test\n   ↓\nEnvironment variables\n   ↓\nProduction dependencies\n   ↓\nStart application\n   ↓\nReverse proxy / Load balancer\n   ↓\nMonitoring / Logs\n```\n\nPDF mein manual deployment, CI/CD, Docker aur cloud platforms mention hain. Production mein HTTPS, health checks, graceful shutdown, monitoring aur rollback strategy bhi consider karni chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "60. Explain the purpose of the `express.static()` middleware in Express.js.",
    "answer": "The `express.static()` middleware in Express.js is used to serve static files such as images, CSS, JavaScript and other assets from a specified directory.\n\nExample:\n\n```js\napp.use(express.static('public'));\n```",
    "explanation": "`express.static()` is middleware for serving static assets directly from a directory.\n\n```js\napp.use(express.static(\"public\"));\n```\n\nIf `public/logo.png` exists, the client can request the corresponding static path and Express can serve the file without a custom route.\n\nA URL prefix can also be used:\n\n```js\napp.use(\"/static\", express.static(\"public\"));\n```\n\nIt is commonly used for images, CSS, browser JavaScript, fonts, and other assets that do not require dynamic server-side processing.",
    "explanationHindi": "`express.static()` static assets ko directory se directly serve karta hai.\n\n```js\napp.use(express.static(\"public\"));\n```\n\nAgar `public/logo.png` hai to Express usko static path se serve kar sakta hai. Prefix bhi de sakte hain:\n\n```js\napp.use(\"/static\", express.static(\"public\"));\n```\n\nYe images, CSS, browser JavaScript, fonts aur other static assets ke liye common hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-41-60",
    "question": "Source Note",
    "answer": "No PDF answer provided.",
    "explanation": "",
    "explanationHindi": "",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-61-71",
    "question": "61. What are route parameters in Express.js? How do you access them?",
    "answer": "Route parameters in Express.js are placeholders in the route definition that capture values from the URL. They are specified in the route path using colon syntax (`:`) and can be accessed in route handlers using `req.params`.\n\n```js\napp.get('/users/:userId', (req, res) => {\n    const userId = req.params.userId;\n    // use userId in the route handler\n});\n```",
    "explanation": "Route parameters are dynamic values captured from the URL path.\n\nFor example:\n\n```js\napp.get('/users/:userId', (req, res) => {\n  const userId = req.params.userId;\n  res.send(`User: ${userId}`);\n});\n```\n\nIf the request is `/users/123`, then `req.params.userId` is `\"123\"`.\n\nThe flow is:\n\n```text\n/users/123\n    ↓\n:userId = 123\n    ↓\nreq.params.userId\n```\n\nRoute parameters are useful when the resource identifier is part of the URL, such as a user ID, product ID, or order ID.",
    "explanationHindi": "Route parameters URL se dynamic value capture karne ke liye use hote hain.\n\nExample:\n\n```js\napp.get('/users/:userId', (req, res) => {\n  const userId = req.params.userId;\n});\n```\n\nAgar URL `/users/123` hai, to `req.params.userId` ki value `\"123\"` hogi.\n\n```text\n/users/123\n    ↓\n:userId = 123\n    ↓\nreq.params.userId\n```\n\nInka use user ID, product ID ya order ID jaise dynamic resources ke liye hota hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-61-71",
    "question": "62. How do you handle sessions and cookies in an Express.js application?",
    "answer": "Session and cookies in Express.js application can be handled using middleware like `express-session` and `cookie-parser`.\n\nExample:\n\n```js\nconst session = require('express-session');\nconst cookieParser = require('cookie-parser');\n\napp.use(cookieParser());\n\napp.use(session({\n    secret: 'secret-key',\n    resave: false,\n    saveUninitialized: true\n}));\n```",
    "explanation": "In Express.js, cookies and sessions are commonly handled using middleware such as `cookie-parser` and `express-session`.\n\nA session normally works like this:\n\n```text\nLogin\n  ↓\nCreate server-side session\n  ↓\nSend session ID in cookie\n  ↓\nBrowser sends cookie on later requests\n  ↓\nServer finds the session\n  ↓\nUser is identified\n```\n\nExample:\n\n```js\nconst session = require('express-session');\n\napp.use(session({\n  secret: process.env.SESSION_SECRET,\n  resave: false,\n  saveUninitialized: false\n}));\n```\n\nThe session ID is commonly stored in a cookie, while the actual session data is maintained by the server-side session store. In production, a shared session store is important when multiple application instances are running.",
    "explanationHindi": "Express.js mein cookies aur sessions ko handle karne ke liye `cookie-parser` aur `express-session` jaise middleware use kiye ja sakte hain.\n\nSession ka basic flow:\n\n```text\nLogin\n  ↓\nSession Create\n  ↓\nSession ID Cookie\n  ↓\nNext Request + Cookie\n  ↓\nServer Session Find\n  ↓\nUser Identify\n```\n\nExample:\n\n```js\napp.use(session({\n  secret: process.env.SESSION_SECRET,\n  resave: false,\n  saveUninitialized: false\n}));\n```\n\nSession ID commonly cookie mein hoti hai, jabki actual session data server-side store mein maintain hota hai. Multiple servers hone par shared session store useful hota hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-61-71",
    "question": "63. How do you create a basic HTTP server in Node.js?",
    "answer": "Node.js makes it simple to create an HTTP server using the built-in `http` module.\n\n```js\nconst http = require('http');\n\nconst server = http.createServer((req, res) => {\n    res.writeHead(200, {'Content-Type': 'text/plain'});\n    res.end('Hello world!');\n});\n\nserver.listen(3000, () => {\n    console.log('Server is running on port 3000');\n});\n```",
    "explanation": "Node.js provides a built-in `http` module for creating an HTTP server without Express.\n\nThe basic steps are:\n\n1. Import the `http` module.\n2. Create a server with `http.createServer()`.\n3. Handle the request and response.\n4. Start the server with `server.listen()`.\n\nExample:\n\n```js\nconst http = require('node:http');\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'text/plain' });\n  res.end('Hello world!');\n});\n\nserver.listen(3000, () => {\n  console.log('Server running on port 3000');\n});\n```\n\nFlow:\n\n```text\nClient Request\n      ↓\nhttp.createServer()\n      ↓\nRequest Handler\n      ↓\nHTTP Response\n```\n\nExpress is built on top of Node's HTTP capabilities and provides higher-level routing and middleware features.",
    "explanationHindi": "Node.js mein built-in `http` module ka use karke Express ke bina basic HTTP server create kar sakte hain.\n\nSteps:\n\n1. `http` module import karo.\n2. `http.createServer()` se server banao.\n3. Request aur response handle karo.\n4. `server.listen()` se port par server start karo.\n\n```text\nClient Request\n      ↓\nHTTP Server\n      ↓\nRequest Handler\n      ↓\nResponse\n```\n\nExpress Node.js ke HTTP capabilities ke upar higher-level routing aur middleware features provide karta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-61-71",
    "question": "64. What is the `fs` module in Node.js?",
    "answer": "The `fs` module provides tools to interact with the file system.\n\nSuch as reading, writing, deleting files and directories.",
    "explanation": "The Node.js `fs` module provides APIs for interacting with the file system.\n\nIt can be used to read, write, update, rename, and delete files and directories. Node.js provides both synchronous and asynchronous APIs, but asynchronous APIs are generally preferred in server applications so the event loop is not unnecessarily blocked.\n\nExample:\n\n```js\nconst fs = require('node:fs/promises');\n\nconst data = await fs.readFile('data.txt', 'utf8');\nconsole.log(data);\n```\n\nTypical flow:\n\n```text\nNode.js Application\n        ↓\n       fs\n        ↓\nFile System\n        ↓\nRead / Write / Update\n```",
    "explanationHindi": "Node.js ka `fs` module file system ke saath interact karne ke liye APIs provide karta hai.\n\nIsse files aur directories ko read, write, update, rename aur delete kiya ja sakta hai. Server applications mein generally asynchronous APIs prefer ki jati hain taaki event loop unnecessarily block na ho.\n\nExample:\n\n```js\nconst fs = require('node:fs/promises');\n\nconst data = await fs.readFile('data.txt', 'utf8');\nconsole.log(data);\n```\n\nFlow:\n\n```text\nNode.js App\n    ↓\n   fs\n    ↓\nFile System\n```",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-61-71",
    "question": "65. What is event-loop starvation and how can it be prevented?",
    "answer": "Event-loop starvation occurs when long-running tasks block the event loop, preventing it from handling other tasks.\n\nThis can make your application unresponsive.\n\n### How to prevent event-loop starvation:\n\n- **Use worker threads** → offload CPU-intensive tasks to separate threads.\n- **Asynchronous operations** → avoid blocking the event loop with synchronous methods.\n- **Split tasks into smaller chunks.**",
    "explanation": "Event-loop starvation happens when the Node.js event loop is kept busy for too long, so it cannot process other callbacks, timers, or incoming requests.\n\nA common cause is CPU-heavy synchronous code:\n\n```text\nRequest A\n   ↓\nCPU-heavy task\n   ↓\nEvent Loop blocked\n   ↓\nRequest B, C, D wait\n```\n\nTo prevent it:\n\n- Move CPU-intensive work to worker threads or another process.\n- Prefer asynchronous APIs instead of blocking synchronous APIs.\n- Break very large computations into smaller chunks when appropriate.\n- Avoid accidental infinite or very long loops in request handlers.\n\nThe key idea is to keep the main event loop free to process other work.",
    "explanationHindi": "Event-loop starvation tab hota hai jab Node.js event loop bahut der tak busy ya blocked rahta hai aur doosre callbacks aur requests process nahi kar pata.\n\nExample:\n\n```text\nRequest A\n   ↓\nCPU-heavy Task\n   ↓\nEvent Loop Blocked\n   ↓\nRequest B, C, D Wait\n```\n\nPrevent karne ke liye:\n\n- CPU-heavy work ko worker threads ya separate process mein bhejo.\n- Blocking synchronous APIs ki jagah asynchronous APIs use karo.\n- Large computation ko smaller chunks mein divide karo.\n- Long/infinite loops ko request handlers mein avoid karo.\n\nMain goal hai event loop ko free rakhna.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-61-71",
    "question": "66. What are the differences between `process.nextTick()` and `setImmediate()`?",
    "answer": "Both `process.nextTick()` and `setImmediate()` schedule callbacks.\n\n### `process.nextTick()`\n\nRuns right after the current function, before the event loop continues.\n\n**Super fast, high priority**\n\n→ Do it immediately after this step, before moving on.\n\n### `setImmediate()`\n\nRuns on the next event loop cycle, after I/O is done.\n\n**Slower, lower priority**\n\n→ Do it as soon as possible but after I/O finishes.",
    "explanation": "Both `process.nextTick()` and `setImmediate()` schedule a callback to run after the current synchronous work, but they are placed differently in Node's scheduling model.\n\n- `process.nextTick()` runs through the next-tick queue before the event loop continues to later phases. Excessive use can starve the event loop.\n- `setImmediate()` schedules a callback for the event loop's check phase.\n\nA simple mental model is:\n\n```text\nCurrent synchronous code\n        ↓\nnextTick callbacks\n        ↓\nEvent loop continues\n        ↓\nI/O / other phases\n        ↓\nsetImmediate in check phase\n```\n\nThe exact ordering can depend on where the calls are made, especially when comparing them inside versus outside an I/O callback. So I would avoid saying that `setImmediate()` is always simply \"slower.\"",
    "explanationHindi": "`process.nextTick()` aur `setImmediate()` dono callback ko later execute karne ke liye schedule karte hain, lekin unka scheduling mechanism different hai.\n\n- `process.nextTick()` next-tick queue mein callback schedule karta hai aur event loop ke later phases se pehle run ho sakta hai.\n- `setImmediate()` event loop ke check phase mein callback schedule karta hai.\n\n```text\nCurrent Code\n    ↓\nnextTick\n    ↓\nEvent Loop\n    ↓\nI/O / Other Phases\n    ↓\nsetImmediate\n```\n\nImportant point: exact execution order context par depend kar sakta hai, especially I/O callback ke andar aur bahar. Isliye `setImmediate()` ko simply \"always slower\" kehna accurate nahi hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-61-71",
    "question": "67. Can you explain how to handle security in a Node.js application?",
    "answer": "1) **Dependencies** → update often, use `npm audit`, Snyk/Dependabot.\n\n2) **Input validation** → validate & sanitize (`Joi`, `validator.js`).\n\n3) **Auth** → use JWT/Auth, hash passwords (`bcrypt`/`argon2`), apply RBAC.\n\n4) **HTTP headers** → use Helmet middleware.\n\n5) **HTTP & cookies** → enforce HTTPS (`httpOnly` + `secure` + `SameSite`).\n\n6) **Rate limiting** → prevent brute-force (`express-rate-limit`).\n\n7) **Error handling** → no sensitive info in errors, log securely.\n\n8) **Env security** → store secrets in env vars, not code.\n\n9) **Other** → enable CSRF protection where needed, update Node.js, use reverse proxy (Nginx).",
    "explanation": "Node.js security should be handled in multiple layers.\n\nThe PDF recommends:\n\n- Keep dependencies updated and audit them with tools such as `npm audit`.\n- Validate and sanitize input.\n- Use secure authentication, password hashing such as bcrypt/Argon2, and authorization/RBAC.\n- Use security headers such as Helmet.\n- Enforce HTTPS and secure cookie settings such as `httpOnly`, `secure`, and appropriate `SameSite`.\n- Add rate limiting to reduce brute-force and abuse.\n- Do not expose sensitive details in error responses.\n- Store secrets in environment variables or a secret manager rather than source code.\n- Use CSRF protection where the application architecture requires it.\n- Keep Node.js updated and use a reverse proxy where appropriate.\n\nA practical security flow is:\n\n```text\nInput Validation\n      ↓\nAuthentication\n      ↓\nAuthorization\n      ↓\nSecure HTTP / Cookies\n      ↓\nRate Limiting\n      ↓\nSafe Errors + Logging\n      ↓\nMonitoring + Updates\n```",
    "explanationHindi": "Node.js security ko multiple layers mein implement karna chahiye.\n\nPDF ke according important points:\n\n- Dependencies updated rakho aur `npm audit` jaise tools use karo.\n- Input validate aur sanitize karo.\n- Secure authentication, password hashing aur RBAC use karo.\n- Helmet jaise security headers use karo.\n- HTTPS aur secure cookie settings (`httpOnly`, `secure`, `SameSite`) use karo.\n- Brute-force attacks ko reduce karne ke liye rate limiting lagao.\n- Error responses mein sensitive information expose mat karo.\n- Secrets ko environment variables ya secret manager mein rakho.\n- Architecture ke according CSRF protection use karo.\n- Node.js updated rakho aur required cases mein reverse proxy use karo.\n\n```text\nValidation\n   ↓\nAuthentication\n   ↓\nAuthorization\n   ↓\nSecure HTTP/Cookies\n   ↓\nRate Limiting\n   ↓\nSafe Errors + Logging\n```",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-61-71",
    "question": "68. Can you explain the difference between CommonJS and ES modules?",
    "answer": "### CommonJS\n\nOld Node.js module system (`require`).\n\nSynchronous, Node-specific.\n\n### ES modules\n\nModern standard (`import/export`).\n\nAsync, works in browsers + Node.\n\nFuture-proof.",
    "explanation": "CommonJS and ES Modules are two module systems used in Node.js.\n\nCommonJS typically uses `require()` and `module.exports`:\n\n```js\nconst express = require('express');\nmodule.exports = router;\n```\n\nES Modules use `import` and `export`:\n\n```js\nimport express from 'express';\nexport default router;\n```\n\nThe main practical difference is the module syntax and how the module system is configured and loaded. ES Modules are the standardized JavaScript module system and are supported in modern Node.js and browsers.\n\nIn an interview, I would avoid saying that CommonJS is simply \"synchronous\" and ES Modules are simply \"asynchronous\"; the real differences are broader and include module resolution, loading semantics, interoperability, and configuration.",
    "explanationHindi": "CommonJS aur ES Modules Node.js mein use hone wale do module systems hain.\n\nCommonJS mein generally:\n\n```js\nconst express = require('express');\nmodule.exports = router;\n```\n\nuse hota hai.\n\nES Modules mein:\n\n```js\nimport express from 'express';\nexport default router;\n```\n\nuse hota hai.\n\nES Modules standardized JavaScript module system hai aur modern Node.js aur browsers mein supported hai.\n\nInterview mein sirf ye kehna ki CommonJS synchronous aur ES Modules asynchronous hain, complete explanation nahi hai. Module syntax, loading aur interoperability bhi important differences hain.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-61-71",
    "question": "69. What is the difference between `app.route()` and `express.Router()` in Express.js?",
    "answer": "Use `app.route()` when you want to handle different methods for one route.\n\nExample:\n\n```js\napp.route('/users')\n    .get((req, res) => {\n        res.send('get users');\n    })\n    .post((req, res) => {\n        // ...\n    })\n    .put((req, res) => {\n        // ...\n    });\n```\n\n### `express.Router()`\n\nUse Router() when you want to organize many related routes into modules.\n\n```js\nconst express = require('express');\n\nconst router = express.Router();\n\nrouter.get('/', (req, res) => {\n    res.send('get users');\n});\n\nrouter.post('/', (req, res) => {\n    res.send('create user');\n});\n\napp.use('/users', router);\n```",
    "explanation": "`app.route()` and `express.Router()` solve different organizational problems.\n\n`app.route()` is useful when several HTTP methods belong to the same route path:\n\n```js\napp.route('/users')\n  .get((req, res) => res.send('get users'))\n  .post((req, res) => res.send('create user'));\n```\n\n`express.Router()` creates a modular router that can group many related routes:\n\n```js\nconst router = express.Router();\n\nrouter.get('/', getUsers);\nrouter.post('/', createUser);\nrouter.get('/:id', getUser);\n\napp.use('/users', router);\n```\n\nSo the interview summary is:\n\n```text\napp.route()\n→ Multiple methods for one path\n\nexpress.Router()\n→ Group and modularize related routes\n```",
    "explanationHindi": "`app.route()` aur `express.Router()` ka use different organization purposes ke liye hota hai.\n\n`app.route()` same route path par multiple HTTP methods define karne ke liye useful hai:\n\n```js\napp.route('/users')\n  .get(...)\n  .post(...);\n```\n\n`express.Router()` related multiple routes ko separate modular router mein organize karta hai:\n\n```js\nconst router = express.Router();\n\nrouter.get('/', getUsers);\nrouter.post('/', createUser);\nrouter.get('/:id', getUser);\n\napp.use('/users', router);\n```\n\nSimple difference:\n\n```text\napp.route()\n→ Ek path ke multiple methods\n\nexpress.Router()\n→ Related routes ko module mein organize karna\n```",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-61-71",
    "question": "70. How do you serve static files from an Express.js application?",
    "answer": "Use `express.static('folder name')` to serve static files like images, CSS and JavaScript in an Express app.\n\nExample:\n\n```js\napp.use(express.static('public'));\n```\n\n→ serve files from `public` folder\n\nOr:\n\n```js\napp.use('/static', express.static('public'));\n```",
    "explanation": "Express provides the `express.static()` middleware for serving static files such as images, CSS, JavaScript, and other public assets.\n\nFor example:\n\n```js\napp.use(express.static('public'));\n```\n\nIf `public/logo.png` exists, the file can be requested directly through the corresponding URL.\n\nA URL prefix can also be added:\n\n```js\napp.use('/static', express.static('public'));\n```\n\nThen the public files are exposed under the `/static` path.\n\nThe important point is that `express.static()` maps a directory of files to URLs so Express can serve those assets directly.",
    "explanationHindi": "Express mein static files jaise images, CSS, JavaScript aur other assets serve karne ke liye `express.static()` middleware use hota hai.\n\nExample:\n\n```js\napp.use(express.static('public'));\n```\n\nAgar `public` folder mein `logo.png` hai, to usse URL ke through serve kiya ja sakta hai.\n\nPrefix bhi de sakte hain:\n\n```js\napp.use('/static', express.static('public'));\n```\n\nIsse files `/static` URL path ke under serve hongi.\n\nSimple words mein, `express.static()` folder ki files ko URLs ke through directly serve karta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-61-71",
    "question": "71. How do you use a template engine with Express.js?",
    "answer": "### Step 1 → Install a template engine (EJS/Pug etc.)\n\n```bash\nnpm install ejs\n```\n\n### Step 2 → Set it in Express with `app.set('view engine', ...)`\n\n```js\napp.set('view engine', 'ejs');\n```\n\n→ use EJS\n\n```js\napp.set('views', './views');\n```\n\n→ folder where templates live\n\n### Step 3 → Render in a route\n\n```js\napp.get('/', (req, res) => {\n    res.render('index', {name: 'John'});\n});\n```\n\n### Popular engines\n\nEJS, Pug, Handlebars, Mustache",
    "explanation": "To use a template engine with Express, I would follow four basic steps.\n\n1. Install the engine, for example EJS:\n\n```bash\nnpm install ejs\n```\n\n2. Configure Express:\n\n```js\napp.set('view engine', 'ejs');\napp.set('views', './views');\n```\n\n3. Create a template such as `views/index.ejs`.\n\n4. Render it from a route:\n\n```js\napp.get('/', (req, res) => {\n  res.render('index', { name: 'John' });\n});\n```\n\nThe flow is:\n\n```text\nRoute\n  ↓\nres.render()\n  ↓\nTemplate Engine\n  ↓\nHTML Generated\n  ↓\nResponse to Browser\n```\n\nCommon template engines mentioned in the PDF include EJS, Pug, Handlebars, and Mustache.",
    "explanationHindi": "Express ke saath template engine use karne ke liye basic steps hain:\n\n1. EJS/Pug jaise engine ko install karo.\n2. Express mein view engine configure karo.\n3. Views folder mein template banao.\n4. Route ke andar `res.render()` use karo.\n\nExample:\n\n```js\napp.set('view engine', 'ejs');\napp.set('views', './views');\n\napp.get('/', (req, res) => {\n  res.render('index', { name: 'John' });\n});\n```\n\nFlow:\n\n```text\nRoute\n  ↓\nres.render()\n  ↓\nTemplate Engine\n  ↓\nHTML\n  ↓\nBrowser\n```\n\nPDF mein EJS, Pug, Handlebars aur Mustache popular template engines ke examples diye gaye hain.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "nodejs-advanced-61-71",
    "question": "Source Note",
    "answer": "No PDF answer provided.",
    "explanation": "",
    "explanationHindi": "",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "nodejs"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "1. Describe the difference between React class components and functional components with hooks in terms of performance and readability.",
    "answer": "Functional components with hooks are more concise and readable compared to class components. They avoid the need for `this`, and use hooks like `useState` and `useEffect` and make logic reuse easier through custom hooks.\n\nIn terms of performance, they are slightly faster to initialize and easier to optimize using `React.memo`, `useMemo`, and `useCallback`.",
    "explanation": "Functional components with Hooks are generally easier to read and maintain than class components. They avoid class-specific patterns such as `this`, constructors, and lifecycle methods.\n\nHooks such as `useState` and `useEffect` let us manage state and side effects directly inside a function, while custom Hooks make reusable logic easier.\n\nFor performance, I would not say functional components are automatically faster. Both styles can perform well. When profiling shows unnecessary work, tools such as `React.memo`, `useMemo`, and `useCallback` can help.\n\n```text\nFunctional Component\n      ↓\nHooks\n      ↓\nState + Effects + Reusable Logic\n      ↓\nCleaner component structure\n```",
    "explanationHindi": "Hooks ke saath functional components generally class components se easier to read aur maintain hote hain. Inmein `this`, constructor aur class-based lifecycle methods ki need nahi hoti.\n\n`useState` aur `useEffect` se state aur side effects directly function ke andar manage kar sakte hain. Custom Hooks reusable logic ko easy banate hain.\n\nPerformance ke case mein functional components automatically faster nahi hote. Dono approaches achhi performance de sakte hain. Actual unnecessary work identify hone par `React.memo`, `useMemo` aur `useCallback` use kiye ja sakte hain.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "2. What are some strategies for managing application state in large-scale React applications?",
    "answer": "In large-scale React application, state can be managed by using a different strategy:\n\n1) Local State - use `useState` and `useReducer` for isolated component logic.\n\n2) Context API - for sharing global state like themes or auth across components.\n\n3) State management libraries - such as Redux, Zustand, or Recoil for more structured and scalable state handling.\n\n4) Server State - using tools like React Query, SWR, or RTK Query for managing data fetching, caching and syncing with the backend.\n\n5) Persistent State - using localStorage, sessionStorage, or libraries like Redux-persist for maintaining data across sessions.",
    "explanation": "In a large React application, I would first classify state by where it belongs instead of putting everything into one global store.\n\n- **Local state:** `useState` or `useReducer` for component-specific state.\n- **Shared state:** Context API for relatively simple shared values such as theme or auth information.\n- **Global/complex state:** Redux, Zustand, or Recoil when the application needs structured global updates.\n- **Server state:** React Query, SWR, or RTK Query for fetching, caching, and synchronizing backend data.\n- **Persistent state:** `localStorage`, `sessionStorage`, or Redux Persist when data needs to survive refreshes.\n\nThe important idea is to choose the smallest suitable state-management solution for each type of data.",
    "explanationHindi": "Large React application mein har state ko ek hi global store mein rakhna zaroori nahi hai. State ke type ke according approach choose karni chahiye.\n\n- Local state → `useState` / `useReducer`\n- Simple shared state → Context API\n- Complex global state → Redux, Zustand, Recoil\n- Server data → React Query, SWR, RTK Query\n- Persistent data → `localStorage`, `sessionStorage`, Redux Persist\n\nMain idea hai ki har state ke liye appropriate aur simple solution use kiya jaye.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "3. What is lazy loading in React?",
    "answer": "Lazy loading is a performance optimization technique where components or resources are loaded only when needed, rather than at the initial load.\n\nIn React, it reduces the initial bundle size, improving load time and user experience.\n\n* React.lazy() -> dynamically loads the component.\n\n* Suspense -> shows a fallback UI (like a spinner) while loading.\n\n### When to use Lazy Loading\n\n- Large components\n- Route-based code splitting (e.g React Router)\n- Rarely-used features and admin panels.\n\n### How to implement it\n\n```jsx\nimport React from 'react';\n\nconst LazyComponent = React.lazy(() => import('./MyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<div>Loading...</div>}>\n      <LazyComponent />\n    </Suspense>\n  );\n}\n```",
    "explanation": "Lazy loading means loading a component or resource only when it is actually needed instead of loading everything during the initial application startup.\n\nIn React, `React.lazy()` can dynamically import a component and `Suspense` provides fallback UI while the code is being loaded.\n\n```jsx\nconst AdminPanel = React.lazy(() => import('./AdminPanel'));\n\n<Suspense fallback={<div>Loading...</div>}>\n  <AdminPanel />\n</Suspense>\n```\n\nThe flow is:\n\n```text\nInitial Load\n    ↓\nLoad only required code\n    ↓\nUser opens feature\n    ↓\nLoad feature chunk\n    ↓\nRender component\n```\n\nIt is especially useful for route-based code splitting, large components, and rarely used features.",
    "explanationHindi": "Lazy loading ka matlab hai component ya resource ko initial load par sab kuch load karne ke bajay tab load karna jab uski actual need ho.\n\nReact mein `React.lazy()` component ko dynamically import kar sakta hai aur `Suspense` loading ke time fallback UI show karta hai.\n\n```text\nInitial Load\n    ↓\nRequired Code\n    ↓\nUser Feature Open\n    ↓\nFeature Load\n    ↓\nComponent Render\n```\n\nYe route-based code splitting, large components aur rarely-used features ke liye useful hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "4. How would you integrate React with a backend server, such as Node.js or Django?",
    "answer": "### 1) Frontend (React)\n\n- Use `fetch` or `axios` to make HTTP request to the backend.\n\nExample:\n\n```js\naxios.get('/api/users').then(res => console.log(res.data))\n```\n\n### 2) Backend (Node.js or Django)\n\n- Expose REST API or GraphQL endpoints.\n- Enable CORS to allow frontend communication.\n  - In Express.js: use `cors` middleware.\n  - In Django: use `django-cors-headers`.\n\n### 3) Proxy Setup (optional)\n\n- In React, add a proxy in `package.json`\n\n```json\n\"proxy\": \"http://localhost:5000\"\n```\n\n### Summary\n\nReact communicate with a backend like Node.js or Django via HTTP (`REST` or `GraphQL`) using `fetch/axios`, with proper API setup and CORS handling.",
    "explanation": "React frontend backend server se HTTP requests ke through communicate karta hai.\n\nTypical flow:\n\n```text\nReact UI\n   ↓ fetch / Axios\nREST or GraphQL API\n   ↓\nNode.js / Django\n   ↓\nDatabase / Business Logic\n   ↓\nJSON Response\n   ↓\nReact UI\n```\n\nFor example:\n\n```js\naxios.get('/api/users')\n  .then(res => console.log(res.data));\n```\n\nThe backend exposes REST or GraphQL endpoints. If frontend and backend are running on different origins, CORS must be configured correctly. During development, a proxy can simplify API calls.",
    "explanationHindi": "React frontend backend se HTTP requests ke through communicate karta hai.\n\n```text\nReact UI\n   ↓ fetch / Axios\nAPI\n   ↓\nNode.js / Django\n   ↓\nDatabase\n   ↓\nJSON Response\n   ↓\nReact UI\n```\n\n`fetch` ya Axios se REST/GraphQL API call kar sakte hain. Agar frontend aur backend different origins par run kar rahe hain, to CORS configure karna hota hai. Development mein proxy bhi use kiya ja sakta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "5. What are common patterns for managing side effects in React?",
    "answer": "Common patterns for managing Side effects in React:\n\n1. `useEffect` hook\n\n-> for running side effect like data fetching, subscriptions or timers.\n\neg -\n\n```jsx\nuseEffect(() => {\n    fetchData();\n}, []);\n```\n\n2) Custom Hooks\n\nEncapsulate and reuse side-effect logic (like `useFetch`, `useDebounce`).\n\n3) State management libraries\n\nLibraries like Redux with middleware (like Redux Thunk or Saga) help manage side effect in centralized way.\n\n4) React Query/SWR\n\nfor handling server-side effects like fetching, caching and syncing remote data.\n\n5) Cleanup functions\n\nused inside useEffect to handle component unmounting and avoid memory leaks.\n\n```jsx\nuseEffect(() => {\n    const timer = setInterval(...);\n    return () => clearInterval(timer);\n}, []);\n```",
    "explanation": "A side effect is work that happens outside React's pure rendering process, such as API calls, subscriptions, timers, or interacting with browser/external APIs.\n\nCommon patterns are:\n\n- `useEffect` for component-level effects.\n- Custom Hooks such as `useFetch` or `useDebounce` to reuse effect-related logic.\n- Redux middleware such as Thunk or Saga for centralized application workflows.\n- React Query/SWR for server-state fetching, caching, and synchronization.\n- Cleanup functions inside `useEffect` to remove timers, subscriptions, or listeners.\n\nExample:\n\n```jsx\nuseEffect(() => {\n  const timer = setInterval(refreshData, 5000);\n\n  return () => clearInterval(timer);\n}, []);\n```\n\nThe cleanup is important because it prevents work from continuing after the component no longer needs it.",
    "explanationHindi": "Side effect wo work hai jo normal React rendering ke bahar hota hai, jaise API call, timer, subscription ya browser API ke saath interaction.\n\nCommon approaches:\n\n- `useEffect` → component-level effects\n- Custom Hooks → reusable side-effect logic\n- Redux Thunk/Saga → centralized workflows\n- React Query/SWR → server data fetching, caching aur synchronization\n- Cleanup function → timer/subscription/listener ko remove karna\n\n```text\nEffect Start\n    ↓\nExternal Work\n    ↓\nCleanup\n```\n\nCleanup important hai taaki component ki need khatam hone ke baad old work continue na kare.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "6. Explain the role of Redux middleware and provide examples of popular middleware.",
    "answer": "Redux middleware sits b/w dispatching an action and the reducer, allowing you to intercept, modify or delay actions.\n\nIt is mainly used to handle asynchronous logic, logging or side effects.\n\nPopular examples are Redux Thunk, Saga, and logger.\n\nWhy it's useful?\n\nRedux on its own only handles synchronous (instant) updates.\n\nBut in real apps, you often need to:\n\n- fetch data from an API\n- wait for something\n- log actions\n\nExamples:\n\n1) Redux Thunk - lets you write async code (like fetching data) inside actions.\n\n2) Redux Logger - logs every action and state update in the console.\n\n3) Redux Saga - use generator for complex async operations.\n\n4) Redux Persist - Redux persist is a library that helps you save (persist) your Redux state to local storage.\n\n-> Even if the user refreshes the page, your app state the same.",
    "explanation": "Redux middleware runs between dispatching an action and the reducer processing it.\n\n```text\ndispatch(action)\n      ↓\n   Middleware\n      ↓\n    Reducer\n      ↓\n   New State\n```\n\nMiddleware can inspect actions, log them, perform asynchronous work, or dispatch additional actions.\n\nExamples:\n\n- **Redux Thunk** — useful for async logic such as API calls.\n- **Redux Logger** — logs actions and state changes.\n- **Redux Saga** — manages complex asynchronous workflows using generators.\n- **Redux Persist** — persists Redux state, commonly to browser storage.\n\nFor example, with Thunk, an action creator can perform an API request and dispatch success/failure actions after the response.",
    "explanationHindi": "Redux middleware action dispatch hone aur reducer tak pahunchne ke beech mein kaam karta hai.\n\n```text\ndispatch(action)\n      ↓\n Middleware\n      ↓\n  Reducer\n      ↓\n New State\n```\n\nYe actions ko inspect/log kar sakta hai aur async operations handle kar sakta hai.\n\n- Redux Thunk → API calls/async logic\n- Redux Logger → actions aur state logs\n- Redux Saga → complex async workflows\n- Redux Persist → Redux state ko persistent storage mein save karna",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "7. Describe the difference between Server-Side Rendering (SSR), Client-Side Rendering (CSR), and Static Site Generation (SSG) in the context of React.",
    "answer": "1) Client-Side Rendering (CSR)\n\n- React loads in the browser.\n- The initial HTML is almost empty; it loads the content after.\n- slower initial load, but faster navigation after that.\n- Common in Create React app.\n\neg -> A dashboard app with plain React where content loads after the spinner.\n\n2) Server-Side Rendering (SSR)\n\n- React components are rendered on the server, then sent as HTML to the browser.\n- Content is visible immediately, improves SEO and performance.\n- Good for dynamic pages.\n\neg -> An e-commerce product page that updates often, but needs to be SEO-friendly.\n\n3) Static Site Generation (SSG)\n\n- pages are built as static HTML at build time.\n- very fast and great for SEO.\n- Best for content that doesn't change often (blogs, marketing pages).\n- Also in Next.js.\n\neg -> A blog site where all articles are pre-rendered once when deployed.\n\n### One-Line Summary\n\n- CSR → Renders in the browser.\n- SSR → Renders on the server for each request.\n- SSG → Renders at build time into static files.",
    "explanation": "CSR, SSR, and SSG mainly differ in when the HTML for a page is generated.\n\n```text\nCSR → Browser generates the UI\nSSR → Server generates HTML for a request\nSSG → HTML is generated during build\n```\n\n- **CSR:** React runs mainly in the browser. It works well for highly interactive applications such as dashboards.\n- **SSR:** The server renders the page and sends HTML to the browser. This can improve initial content visibility and can help SEO for public pages.\n- **SSG:** Pages are generated ahead of time during the build and served as static files. This is useful for blogs and marketing pages whose content changes less frequently.\n\nThe choice depends on content freshness, SEO needs, performance goals, and application architecture.",
    "explanationHindi": "CSR, SSR aur SSG mein main difference ye hai ki page ka HTML kab generate hota hai.\n\n```text\nCSR → Browser mein render\nSSR → Server request ke time render\nSSG → Build time par generate\n```\n\n- CSR → dashboards aur highly interactive apps ke liye useful.\n- SSR → dynamic public pages aur SEO requirements ke liye useful.\n- SSG → blogs aur marketing pages jaise less-changing content ke liye useful.\n\nChoice application ke SEO, performance aur content-update requirements par depend karti hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "8. What are some techniques for optimizing the rendering performance of React applications?",
    "answer": "1) memoization - use memoization techniques like `useMemo` and `React.memo` to prevent unnecessary re-renders of component and expensive computation.\n\n2) Virtualization - implement virtualized list or grids using libraries like React Virtualized or React Window to render only the visible portion of large lists, reducing DOM nodes and improving performance.\n\n3) code splitting - split your code into smaller chunks using dynamic imports (e.g `React.lazy`) to load only the necessary code for each feature, improving initial load time and reducing time to interactive.\n\n4) optimizing CSS - minimize CSS file size, reduce CSS specificity and use techniques like CSS-in-JS or CSS modules to keep styles and avoid global styles that can affect rendering performance.",
    "explanation": "React rendering performance optimize karne ka main goal unnecessary renders, calculations, DOM nodes, and initial JavaScript ko reduce karna hai.\n\nUseful techniques include:\n\n1. **Memoization** — `React.memo` for component render skipping and `useMemo` for expensive calculations.\n2. **Virtualization** — render only visible rows in very large lists.\n3. **Code splitting** — load feature code only when needed with dynamic imports and `React.lazy`.\n4. **CSS optimization** — avoid unnecessary global styles and overly complex selectors.\n5. **Profiling** — use React DevTools Profiler before optimizing so the actual bottleneck is known.\n\nThe important interview point is that memoization should be used where it solves a measured performance problem, not everywhere.",
    "explanationHindi": "React performance optimize karne ka goal unnecessary renders, calculations aur DOM work ko reduce karna hai.\n\nTechniques:\n\n- `React.memo` aur `useMemo` → unnecessary rendering/calculation reduce karna\n- Virtualization → large list mein sirf visible items render karna\n- Code splitting → required code ko hi load karna\n- CSS optimization → unnecessary global styles aur complex selectors avoid karna\n- React Profiler → actual performance bottleneck identify karna\n\nMemoization ko har jagah use nahi karna chahiye; actual performance issue ke according use karna better hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "9. How do you handle internationalization (i18n) in React applications?",
    "answer": "Internationalization (i18n) is a process of making your app support multiple languages and locales.\n\n- use `i18next` library\n\n- use react-i18next.",
    "explanation": "Internationalization, or i18n, means designing the application so it can support multiple languages and regional formats.\n\nA common React approach is `i18next` with `react-i18next`.\n\nInstead of hardcoding:\n\n```jsx\n<h1>Welcome</h1>\n```\n\nwe can use a translation key:\n\n```jsx\n<h1>{t('welcome')}</h1>\n```\n\nThe translation files contain the language-specific values, and the application selects the appropriate locale.\n\ni18n can also cover locale-specific formatting such as dates, numbers, and currencies, depending on the library and application setup.",
    "explanationHindi": "Internationalization ka matlab application ko multiple languages aur locales ke liye ready banana hai.\n\nReact mein `i18next` aur `react-i18next` commonly use kiye ja sakte hain.\n\n```jsx\n<h1>{t('welcome')}</h1>\n```\n\nTranslation text alag language files mein rakha jata hai aur selected locale ke according correct text show hota hai.\n\ni18n mein language ke saath date, number aur currency formatting bhi handle ki ja sakti hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "10. What are the advantages and disadvantages of using TypeScript with React?",
    "answer": "### Advantages\n\n1) Type Safety - catches bugs during development, not at runtime.\n\n2) improved readability & maintenance - Easy to understand props, state and return type.\n\n3) Scalability - ideal for large codebase and teams; helps enforces Structure.\n\n### Disadvantages\n\n1) Steeper learning Curve - Developer unfamiliar with TS might find complex at first.\n\n### Summary\n\nTypeScript improves code quality, scalability and maintainability in React apps, but it comes with added complexity and setup overhead.",
    "explanation": "TypeScript adds static typing to a React application.\n\nAdvantages:\n\n- It catches many type-related errors during development.\n- Props, state, function parameters, and return values become clearer.\n- It provides better editor autocomplete and refactoring support.\n- It is useful for large codebases and teams because types provide structure.\n\nDisadvantages:\n\n- There is a learning curve for developers who are new to TypeScript.\n- Types and configuration add some development overhead.\n- Sometimes third-party libraries or complex types require additional understanding.\n\nSo TypeScript improves safety and maintainability, but it adds type-system complexity.",
    "explanationHindi": "TypeScript React application mein static typing provide karta hai.\n\nAdvantages:\n\n- Development ke time type-related errors identify karne mein help karta hai.\n- Props, state aur function parameters clear hote hain.\n- Editor autocomplete aur refactoring better ho sakta hai.\n- Large projects aur teams mein structure maintain karne mein help karta hai.\n\nDisadvantages:\n\n- Starting mein learning curve hota hai.\n- Extra types aur configuration likhne padte hain.\n- Complex types ya third-party libraries samajhne mein extra effort lag sakta hai.\n\nOverall, TypeScript safety aur maintainability improve karta hai, lekin additional complexity bhi laata hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "11. Describe the difference between React Context and Redux for managing global state.",
    "answer": "### React Context\n\n- Built-in part of React, no extra package needed.\n- Best for: State sharing simple state (e.g theme, user auth) across components.\n- Usage: Lightweight and easy to set up.\n\n**Limitation:**\n- Not optimized for frequent updates.\n- can cause unnecessary re-render in deeply nested tree.\n\n### Redux\n\n- External library - Requires installation (`redux`, `react-redux`).\n- Best for - complex and large-scale state management.\n- Usage - centralized store, clear state flow (actions → reducers → state).\n\n**Advantages:**\n- time-saving debugging.\n- middleware support (like Redux-Thunk, Redux-Saga).\n\n**Downside:**\n- more boilerplate than Context for simple case.\n\n### When to use\n\n- Context = simple, small, stable-ish global data.\n- Redux = complex app with large state, many logic or many interactions.",
    "explanation": "Context and Redux both help share state, but they solve different problems.\n\n**Context** is built into React and is useful for relatively simple shared values such as theme, locale, or authentication information.\n\n**Redux** is a dedicated state-management solution with a centralized store and explicit update flow:\n\n```text\nComponent\n   ↓ dispatch\n Action\n   ↓\n Reducer\n   ↓\nStore State\n   ↓\nComponents\n```\n\nRedux becomes useful when state logic is complex, many parts of the application interact with the same data, or middleware/debugging capabilities are valuable.\n\nContext is not automatically a replacement for Redux, and Redux is not required for every shared value.",
    "explanationHindi": "Context aur Redux dono shared state ke liye use ho sakte hain, lekin dono ka purpose same nahi hai.\n\nContext React ka built-in mechanism hai aur theme, locale ya auth information jaise relatively simple shared data ke liye useful hai.\n\nRedux dedicated state-management solution hai:\n\n```text\nComponent\n   ↓ dispatch\n Action\n   ↓\n Reducer\n   ↓\nStore\n   ↓\nComponents\n```\n\nComplex state logic, multiple interactions aur middleware/debugging ki need hone par Redux useful ho sakta hai. Har shared value ke liye Redux use karna zaroori nahi hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "12. What is the difference between pure and regular components?",
    "answer": "A regular component re-renders every time its parent re-renders.\n\nA pure component only re-renders if its props or state have actually changed.\n\n### Pure Component\n\n```jsx\nclass MyComponent extends React.PureComponent {\n    render() {\n        return <div>{this.props.name}</div>;\n    }\n}\n```\n\nFunctional Components use `useMemo`:\n\n```jsx\nconst MyComponent = React.memo((props) => {\n    return <div>{props.name}</div>;\n});\n```",
    "explanation": "A regular component may render when its parent renders, while a pure component can skip some renders when its props and state have not changed according to a shallow comparison.\n\nFor class components:\n\n```jsx\nclass MyComponent extends React.PureComponent {\n  render() {\n    return <div>{this.props.name}</div>;\n  }\n}\n```\n\nFor function components, `React.memo` provides similar memoized rendering behavior:\n\n```jsx\nconst MyComponent = React.memo(({ name }) => {\n  return <div>{name}</div>;\n});\n```\n\nThe optimization is based on comparison, so changing object/function references can still cause a render even when their contents look similar.",
    "explanationHindi": "Regular component parent ke render hone par render ho sakta hai. Pure component shallow comparison ke basis par unnecessary render ko skip kar sakta hai.\n\nClass component mein `React.PureComponent` aur functional component mein `React.memo` use kiya ja sakta hai.\n\n```text\nNew Props/State\n      ↓\nComparison\n      ↓\nChanged? → Render\nNot changed? → Skip\n```\n\nObject ya function references change hone par memoized component phir bhi render kar sakta hai, even if data similar dikhe.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "13. What are some best practices for structuring and organizing React code in a large-scale application?",
    "answer": "1) Use a feature-based folder structure.\n\n2) Keep components small and reusable.\n\n3) Use index files for exports.\n\n4) Separate logic from UI - keep API calls, hooks and state logic outside component using:\n   - custom hooks (e.g `useFetch`)\n   - context or Redux\n\n5) Use absolute imports.\n\n6) Code splitting and lazy loading.\n\n7) centralized state management.\n\n8) Documentation and comments\n   - keep README files for feature and comment complex logic.",
    "explanation": "For a large React application, I prefer a feature-based structure so related UI, hooks, API logic, and tests stay together.\n\nExample:\n\n```text\nsrc/\n  features/\n    users/\n      components/\n      hooks/\n      api/\n      pages/\n      tests/\n  shared/\n    components/\n    hooks/\n    utils/\n```\n\nOther practices include:\n\n- Keep components small and reusable.\n- Separate UI from API and business logic.\n- Use custom Hooks for reusable stateful logic.\n- Use centralized state only where needed.\n- Use lazy loading/code splitting for large features.\n- Prefer consistent import conventions.\n- Keep documentation for complex logic.\n\nThe goal is maintainability and clear ownership of each feature.",
    "explanationHindi": "Large React application mein feature-based folder structure useful hota hai, jahan related UI, hooks, API aur tests ek feature ke andar organized rahen.\n\n```text\nfeatures/\n  users/\n    components/\n    hooks/\n    api/\n    pages/\n    tests/\n```\n\nOther practices:\n\n- Components small aur reusable rakho.\n- UI aur API/business logic separate rakho.\n- Reusable logic ke liye custom Hooks use karo.\n- Zarurat ke according centralized state use karo.\n- Large features ke liye lazy loading/code splitting use karo.\n- Consistent imports aur documentation maintain karo.\n\nGoal hai code ko maintainable aur easy to understand rakhna.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "14. Describe the Flux architecture pattern and its relationship with Redux.",
    "answer": "Flux is an architectural pattern for managing State in React apps.\n\nIt enforces a unidirectional data flow using Actions, Dispatcher, Stores and Views (React components).\n\nThe flow is:\n\n`User → Action → Dispatcher → Store → View`\n\n### Flux\n\n- made by Facebook.\n- use multiple Stores to hold different parts of the app's state.\n- needs a dispatcher to send actions to the right store.\n- more code and a bit complex.\n\n### Redux\n\n- inspired by Flux, but simpler and cleaner.\n- uses just one Store to hold the app's state.\n- no dispatcher - uses reducers to update the State.\n- easier to debug and test.",
    "explanation": "Flux is an architectural pattern based on one-way data flow.\n\nClassic Flux flow:\n\n```text\nUser\n ↓\nAction\n ↓\nDispatcher\n ↓\nStore\n ↓\nView\n```\n\nFlux commonly uses multiple stores and a dispatcher.\n\nRedux was inspired by Flux but simplifies the model:\n\n```text\nAction\n  ↓\nReducer\n  ↓\nSingle Store\n  ↓\nView\n```\n\nRedux normally uses one centralized store and reducers calculate the next state. It does not use the separate dispatcher found in classic Flux.\n\nThe key interview point is that both encourage predictable one-way data flow, while Redux simplifies the architecture.",
    "explanationHindi": "Flux ek one-way data flow architecture pattern hai.\n\nClassic flow:\n\n```text\nUser\n ↓\nAction\n ↓\nDispatcher\n ↓\nStore\n ↓\nView\n```\n\nRedux Flux se inspired hai lekin architecture ko simpler banata hai:\n\n```text\nAction\n  ↓\nReducer\n  ↓\nStore\n  ↓\nView\n```\n\nRedux mein generally centralized store aur reducers use hote hain aur classic Flux jaisa separate Dispatcher nahi hota.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "15. What is the purpose of the `shouldComponentUpdate` method? When should you use it?",
    "answer": "The `shouldComponentUpdate` method is a lifecycle method in React that allows a component to control whether it should re-render or not.\n\nIt is invoked before rendering when new props or state are being received. By default, `shouldComponentUpdate` returns true, indicating that the component should re-render.",
    "explanation": "`shouldComponentUpdate` is a class-component lifecycle method that lets us decide whether React should continue rendering a component after receiving new props or state.\n\nConceptually:\n\n```text\nNew Props / State\n       ↓\nshouldComponentUpdate()\n       ↓\n true → continue render\n false → skip this component render\n```\n\nIt is mainly useful when profiling shows unnecessary renders in a class component.\n\nFor example:\n\n```js\nshouldComponentUpdate(nextProps) {\n  return nextProps.id !== this.props.id;\n}\n```\n\nIn modern functional components, similar optimization is often handled with `React.memo` and carefully designed props.",
    "explanationHindi": "`shouldComponentUpdate` class component ka lifecycle method hai jo decide karne mein help karta hai ki component ko render continue karna hai ya nahi.\n\n```text\nNew Props / State\n       ↓\nshouldComponentUpdate()\n       ↓\ntrue  → render\nfalse → skip\n```\n\nIska use mainly tab karna chahiye jab unnecessary renders identify ho aur class component ko optimize karna ho.\n\nModern functional components mein similar optimization ke liye `React.memo` use kiya ja sakta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "16. What are custom hooks in React?",
    "answer": "Custom hooks in React are reusable functions that let you share logic (like fetching data or managing forms) b/w components using built-in hooks like useState and useEffect.\n\n→ custom hooks are reusable function that encapsulate stateful logic using React hooks. They help make code cleaner, modern and DRY (Don't Repeat Yourself).\n\n### How to create one?\n\nJust define a function that starts with `use` and use any built-in hooks inside it.\n\n### Example\n\n```jsx\nimport { useState, useEffect } from 'react';\n\nfunction useFetch(url) {\n    const [data, setData] = useState(null);\n\n    useEffect(() => {\n        fetch(url)\n            .then(res => res.json())\n            .then(json => setData(json));\n    }, [url]);\n\n    return data;\n}\n\nexport default useFetch;\n```",
    "explanation": "A custom Hook is a reusable JavaScript function whose name starts with `use` and which can call other React Hooks.\n\nIt extracts repeated stateful logic from components without sharing the component's UI.\n\nFor example, a reusable data-fetching Hook can contain state, an effect, loading/error handling, and return the result:\n\n```text\nComponent A ─┐\nComponent B ─┼→ useFetch() → shared logic\nComponent C ─┘\n```\n\nThis keeps components focused on rendering while the custom Hook owns reusable behavior.",
    "explanationHindi": "Custom Hook ek reusable JavaScript function hota hai jiska naam generally `use` se start hota hai aur uske andar React Hooks use kiye ja sakte hain.\n\nYe repeated stateful logic ko component se bahar extract karta hai, UI ko share nahi karta.\n\n```text\nComponent A ─┐\nComponent B ─┼→ useFetch()\nComponent C ─┘\n```\n\nIsse component rendering par focus kar sakta hai aur reusable behavior custom Hook handle kar sakta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "17. What is Axios and how do you use it in React?",
    "answer": "Axios, which is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints.\n\nThis library is very useful to perform CRUD operations.",
    "explanation": "Axios is a JavaScript HTTP client commonly used to communicate with backend APIs.\n\nTypical React flow:\n\n```text\nReact Component\n      ↓\nAxios Request\n      ↓\nBackend API\n      ↓\nResponse\n      ↓\nUpdate React State\n```\n\nIt supports common CRUD operations:\n\n```text\nGET    → read\nPOST   → create\nPUT/PATCH → update\nDELETE → remove\n```\n\nFor example:\n\n```js\nconst response = await axios.get('/api/users');\nconsole.log(response.data);\n```\n\nAxios also provides features such as request configuration and interceptors, which can be useful in larger applications.",
    "explanationHindi": "Axios ek JavaScript HTTP client hai jo React application se backend APIs ke saath communicate karne ke liye use hota hai.\n\n```text\nReact Component\n      ↓\nAxios Request\n      ↓\nBackend API\n      ↓\nResponse\n      ↓\nReact State Update\n```\n\nCRUD operations:\n\n- GET → data read\n- POST → data create\n- PUT/PATCH → data update\n- DELETE → data remove\n\nAxios mein request configuration aur interceptors jaise features bhi hote hain jo larger applications mein useful ho sakte hain.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "18. Explain why and how to update the state of components using a callback.",
    "answer": "Why use a callback when updating state?\n\n- React state updates are asynchronous meaning they don't happen immediately. If you try to use the updated state right after calling `setState`, you might get the old state.\n\n- To safely use the latest state, use pass a callback function to setState.\n\n### How to update state using a callback\n\nFor ex - using `useState` in a functional component:\n\n```jsx\nconst [count, setCount] = useState(0);\n\nsetCount(prevCount => prevCount + 1);\n```\n\n→ using callback to get the latest state.",
    "explanation": "When the next state depends on the previous state, use the functional updater form.\n\nExample:\n\n```jsx\nconst [count, setCount] = useState(0);\n\nsetCount(prevCount => prevCount + 1);\n```\n\nHere React supplies the latest previous state value to the updater function.\n\nThis is important when multiple updates may be queued in the same event or when the current render's `count` value may be stale.\n\n```text\nPrevious State\n      ↓\nUpdater Function\n      ↓\nNext State\n```\n\nThe same idea exists in class components with the functional form of `setState`.",
    "explanationHindi": "Jab new state previous state par depend karti hai, tab functional updater use karna best hota hai.\n\n```jsx\nsetCount(prevCount => prevCount + 1);\n```\n\nReact updater function ko latest previous state value provide karta hai.\n\n```text\nPrevious State\n      ↓\nUpdater Function\n      ↓\nNext State\n```\n\nYe especially multiple queued updates ke case mein useful hai, kyunki current render ki value stale ho sakti hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "19. What is React Material UI?",
    "answer": "Material UI is a collection of ready-made beautiful and customizable UI components (like buttons, form, modals) that helps you build modern, responsive React apps faster.",
    "explanation": "Material UI, commonly called MUI, is a React component library that provides ready-made UI components.\n\nExamples include buttons, dialogs, forms, navigation components, tables, and layout components.\n\nInstead of creating every component from scratch, developers can customize MUI components and use them consistently across the application.\n\nTypical benefit:\n\n```text\nMUI Components\n      ↓\nCustomize Theme / Props\n      ↓\nBuild Consistent UI Faster\n```\n\nIt is useful when a project wants a ready-made design system and reusable React components.",
    "explanationHindi": "Material UI, commonly MUI, React ke liye ready-made UI component library hai.\n\nIsmein buttons, dialogs, forms, navigation, tables aur layout components milte hain.\n\nDeveloper in components ko customize karke consistent UI faster build kar sakta hai.\n\n```text\nMUI Components\n      ↓\nTheme / Props Customize\n      ↓\nConsistent UI\n```",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "20. What is `useMemo()` in React?",
    "answer": "`useMemo` in React is hook that memoizes (remembers) the result of a function to avoid unnecessary recalculation on every render.\n\n→ If you have a slow and expensive computation, `useMemo` helps optimize performance by re-running it only when its dependencies change, not on every render.\n\n### Syntax\n\n```jsx\nconst memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n```",
    "explanation": "`useMemo()` memoizes the result of a calculation between renders.\n\nExample:\n\n```jsx\nconst filteredUsers = useMemo(\n  () => users.filter(user => user.active),\n  [users]\n);\n```\n\nReact can reuse the previous calculated value when the dependencies have not changed.\n\n```text\nRender\n  ↓\nDependencies changed?\n  ├─ No  → reuse memoized value\n  └─ Yes → calculate again\n```\n\nIt is most useful for genuinely expensive calculations or when referential stability is important. It should not be added automatically to every calculation because memoization itself has a cost.",
    "explanationHindi": "`useMemo()` calculation ke result ko memoize/cache karta hai.\n\n```jsx\nconst filteredUsers = useMemo(\n  () => users.filter(user => user.active),\n  [users]\n);\n```\n\nAgar dependencies change nahi hui hain, React previous calculated value reuse kar sakta hai.\n\n```text\nRender\n  ↓\nDependencies Changed?\n  ├─ No  → Old memoized value\n  └─ Yes → Recalculate\n```\n\n`useMemo()` ko actual expensive calculation ya performance need hone par use karna better hai. Har calculation par use karna necessary nahi hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-1-20",
    "question": "Source Note",
    "answer": "No PDF answer provided.",
    "explanation": "",
    "explanationHindi": "",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "21. Does React `useState` hook update immediately?",
    "answer": "No, `useState` does not update immediately. It updates the state in the next render. If I log the state right after calling `setState`, it will still show the old values.",
    "explanation": "No. Calling a state setter such as `setCount()` does not immediately change the state value captured by the current render.\n\nReact schedules the update and then renders the component again with the new state.\n\nExample:\n\n```jsx\nconst [count, setCount] = useState(0);\n\nsetCount(1);\nconsole.log(count); // current render still has 0\n```\n\nThe important idea is:\n\n```text\nsetCount(1)\n    ↓\nUpdate scheduled\n    ↓\nNext render\n    ↓\ncount = 1\n```\n\nIf the next state depends on the previous state, use the functional updater form: `setCount(prev => prev + 1)`.",
    "explanationHindi": "Nahi. `setCount()` call karne ke turant baad current render ke andar state variable ki value change nahi hoti.\n\nReact update ko schedule karta hai aur next render mein new state value milti hai.\n\n```text\nsetCount(1)\n    ↓\nUpdate Schedule\n    ↓\nNext Render\n    ↓\ncount = 1\n```\n\nAgar new state previous state par depend karti hai, to `setCount(prev => prev + 1)` jaise functional updater ka use karna chahiye.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "22. When to use `useCallback`, `useMemo`, and `useEffect`?",
    "answer": "### (i) useCallback\n\n- Use it to memorize function so they don't get re-created on every render, especially when passing them as props to child component.\n\n### (ii) useMemo\n\n- use it to memorize expensive calculations so they are not re-computed on every render.\n\n### When to use\n\n- expensive calculations.\n- Avoid recalculation unless dependencies change.\n\n### (iii) useEffect\n\n- use it to handle side effects like data fetching, subscriptions or updating the DOM.\n\n### When to use\n\n- fetch API data\n- set up event listeners\n- update document title etc.",
    "explanation": "These three Hooks solve different problems:\n\n- **`useCallback`** memoizes a function reference. It is useful when function identity matters, such as passing a callback to a memoized child.\n- **`useMemo`** memoizes the result of an expensive calculation.\n- **`useEffect`** synchronizes the component with external systems such as APIs, subscriptions, timers, or browser APIs.\n\nExample:\n\n```text\nFunction reference → useCallback\nCalculated value   → useMemo\nExternal side effect → useEffect\n```\n\nI would not use `useCallback` or `useMemo` automatically. They are optimization tools and should be used when they solve an actual rendering or calculation problem.",
    "explanationHindi": "In teen Hooks ka purpose different hai:\n\n- `useCallback` → function reference memoize karta hai.\n- `useMemo` → expensive calculation ka result memoize karta hai.\n- `useEffect` → API, subscription, timer ya external system jaise side effects ke liye.\n\n```text\nFunction → useCallback\nValue    → useMemo\nEffect   → useEffect\n```\n\n`useMemo` aur `useCallback` ko har jagah use nahi karna chahiye. Actual performance need hone par use karna better hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "23. Explain the types of routers in React.",
    "answer": "1) **BrowserRouter**\n\n- User normal URL like `/home`\n- most commonly used in web apps.\n\n2) **HashRouter**\n\n- Add a `#` in the URL (like `/#/home`)\n- Useful if the server doesn't support routes.\n\n3) **MemoryRouter**\n\n- Doesn't show URL changes.\n- mostly used in testing or memory-based mobile apps.\n\n4) **StaticRouter**\n\n- Used in server-side rendering.\n- It doesn't handle navigating - just renders routes based on input.\n\n→ I usually use BrowserRouter in my projects because it's perfect for real web apps.",
    "explanation": "React Router provides different routers for different environments.\n\n- **BrowserRouter:** uses normal browser URLs such as `/home`; common for web applications.\n- **HashRouter:** stores the route after `#`, such as `/#/home`; useful when the server cannot be configured to serve client-side routes correctly.\n- **MemoryRouter:** keeps navigation history in memory; useful for tests and non-browser environments.\n- **StaticRouter:** useful for server-side rendering where the location is supplied as input rather than changed through browser navigation.\n\n```text\nWeb App → BrowserRouter\nStatic Hosting Constraints → HashRouter\nTests / Memory Environment → MemoryRouter\nSSR → StaticRouter\n```",
    "explanationHindi": "React Router mein environment ke according different routers use hote hain.\n\n- BrowserRouter → normal browser URLs\n- HashRouter → `#` ke baad routing\n- MemoryRouter → memory mein routing, testing ke liye useful\n- StaticRouter → server-side rendering ke liye\n\n```text\nWeb App → BrowserRouter\nServer Route Support Problem → HashRouter\nTesting → MemoryRouter\nSSR → StaticRouter\n```",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "24. What is Strict Mode in React?",
    "answer": "React StrictMode is a tool that helps you write better React code.\n\n1) Highlights potential problems in your app.\n2) Helps find unsafe code patterns.\n3) Runs some functions twice (in development only) to catch bugs.",
    "explanation": "Strict Mode is a development-time feature that helps detect potential problems in React code.\n\nIt can enable additional checks and intentionally re-run certain logic in development so that unsafe side effects or assumptions become visible.\n\nFor example, in development you may notice an effect setup/cleanup cycle happening more than once. This is intended as a development check and is not the same as React simply rendering twice in production.\n\nThe purpose is to make side effects resilient and reveal bugs earlier.",
    "explanationHindi": "Strict Mode React ka development-time feature hai jo potential problems identify karne mein help karta hai.\n\nDevelopment mein React kuch checks ke liye certain logic ko extra time run kar sakta hai, jisse unsafe side effects ya bugs jaldi identify ho saken.\n\nImportant point: development mein extra checks hona production mein same behavior hone ka matlab nahi hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "25. What is conditional rendering in React?",
    "answer": "Conditional rendering in React means showing different UI element based on certain conditions (like if-else & ternary operator).\n\neg →\n\n```jsx\nisLoggedIn ? <h1>Welcome Back</h1> : <h1>Please Login</h1>\n```\n\n```jsx\nconst isLoggedIn = true;\n```",
    "explanation": "Conditional rendering means deciding which UI React should render based on a condition.\n\nCommon patterns are:\n\n```jsx\n{isLoggedIn ? <Dashboard /> : <Login />}\n\n{isAdmin && <AdminPanel />}\n```\n\nFor more complex conditions, normal `if/else` logic can be used before returning JSX.\n\n```text\nCondition\n   ↓\ntrue  → UI A\nfalse → UI B\n```\n\nThis is one of the basic ways React applications display different UI states such as loading, authenticated, empty, or error states.",
    "explanationHindi": "Conditional rendering ka matlab condition ke according different UI render karna.\n\nExample:\n\n```jsx\n{isLoggedIn ? <Dashboard /> : <Login />}\n\n{isAdmin && <AdminPanel />}\n```\n\nComplex condition ke liye normal `if/else` bhi use kar sakte hain.\n\n```text\nCondition\n   ↓\ntrue  → UI A\nfalse → UI B\n```\n\nIska use login state, loading, empty state aur error state jaise cases mein hota hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "26. How can you avoid binding in React?",
    "answer": "To avoid binding in React (especially in class components) use one of these techniques.\n\n→ To avoid binding, use arrow function in class components, which automatically preserve the `this` context.\n\nIn functional components, there isn't an issue since hooks are used instead.",
    "explanation": "In older React class components, explicit binding was needed when a normal method was passed as an event handler because the `this` context could be lost.\n\nAn arrow function can avoid this problem because it uses lexical `this`.\n\n```jsx\nclass Button extends React.Component {\n  handleClick = () => {\n    console.log(this);\n  };\n\n  render() {\n    return <button onClick={this.handleClick}>Click</button>;\n  }\n}\n```\n\nFunctional components do not use class `this`, so this particular binding problem does not apply.\n\nThe key interview point is that modern functional components and Hooks largely remove the need for manual event-handler binding.",
    "explanationHindi": "Old React class components mein normal method ko event handler ke roop mein pass karne par `this` context ka issue aa sakta tha.\n\nArrow function lexical `this` use karti hai, isliye manual `.bind(this)` ki need nahi padti.\n\nFunctional components mein class wala `this` hota hi nahi, isliye ye binding problem normally nahi hoti.\n\nModern React mein functional components + Hooks ki wajah se manual binding ki requirement kaafi kam ho gayi hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "27. How would you programmatically redirect after login?",
    "answer": "In React Router v6, we use the `useNavigate()` hook to programmatically redirect users.\n\nWhen login is successful, call `navigate('/path')`, and it will redirect automatically.\n\nExample:\n\n```jsx\nimport { useEffect } from 'react';\nimport { useNavigate } from 'react-router-dom';\n\nfunction Login({ isLoggedIn }) {\n    const navigate = useNavigate();\n\n    useEffect(() => {\n        if (isLoggedIn) {\n            navigate('/dashboard');\n        }\n    }, [isLoggedIn, navigate]);\n\n    return <div>Login page</div>;\n}\n```",
    "explanation": "In React Router v6, `useNavigate()` is used for programmatic navigation.\n\nFor example, after a successful login:\n\n```jsx\nconst navigate = useNavigate();\n\nasync function handleLogin() {\n  const success = await login();\n  if (success) {\n    navigate('/dashboard');\n  }\n}\n```\n\nFlow:\n\n```text\nLogin Submit\n    ↓\nAPI Authentication\n    ↓\nSuccess\n    ↓\nnavigate('/dashboard')\n    ↓\nDashboard\n```\n\nIf the navigation should happen after a state change, `useEffect` can also call `navigate()` based on that state, as in the source PDF.",
    "explanationHindi": "React Router v6 mein JavaScript code ke through navigation karne ke liye `useNavigate()` use hota hai.\n\nLogin successful hone ke baad:\n\n```js\nnavigate('/dashboard');\n```\n\ncall karke user ko dashboard par bhej sakte hain.\n\n```text\nLogin\n ↓\nAuthentication Success\n ↓\nnavigate()\n ↓\nDashboard\n```\n\nAgar navigation kisi state change ke basis par karni ho to `useEffect` ke andar bhi `navigate()` use kiya ja sakta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "28. Do hooks cover all the functionality provided by the classes?",
    "answer": "Yes, hooks cover all functionalities provided by class components, like State, lifecycle methods and Context and even make some things easier (like code reuse via custom hooks).\n\n### Explanation (Simplified)\n\n- `useState` replaces `this.state` and `setState`.\n- `useEffect` replaces lifecycle methods like `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`.\n- `useContext` replaces Context usage.\n- Custom hooks let you reuse logic more easily than HOCs or render props in many cases.\n\nExtra → Hooks don't need `this` keyword, which makes the code cleaner and easier to read.",
    "explanation": "Hooks cover the main capabilities that class components traditionally provided for state, side effects, Context, and reusable logic.\n\nExamples:\n\n- `useState` → component state\n- `useEffect` → side effects that were often handled in lifecycle methods\n- `useContext` → read Context values\n- Custom Hooks → reuse stateful logic\n\n```text\nClass Component\n  ├─ State → useState\n  ├─ Lifecycle-related effects → useEffect\n  └─ Context → useContext\n```\n\nHowever, I would phrase this carefully: Hooks provide modern equivalents for these common capabilities, but they are not literally a one-to-one replacement for every class API.",
    "explanationHindi": "Hooks class components ke major use cases ko functional components mein provide karte hain.\n\n- `useState` → state\n- `useEffect` → side effects/lifecycle-related work\n- `useContext` → Context values\n- Custom Hooks → reusable logic\n\n```text\nState → useState\nEffects → useEffect\nContext → useContext\nReusable Logic → Custom Hook\n```\n\nInterview mein ye kehna better hai ki Hooks common class capabilities ke modern alternatives provide karte hain; har class API ka exact one-to-one replacement kehna zaroori nahi hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "29. How does the performance of using hooks differ in comparison with classes?",
    "answer": "Hooks have similar or better performance than classes in most cases.\n\nThey allow for cleaner, more optimized code, especially with tools like `useMemo`, `useCallback`, and React's concurrent rendering.\n\n→ With `useCallback`, you can memorize a function and prevent unnecessary re-render, which is harder with class component unless you use `shouldComponentUpdate` or define methods carefully.",
    "explanation": "Hooks are not automatically faster than class components. Both can perform well when the component is designed efficiently.\n\nHooks can make optimization convenient because functional components can use:\n\n- `React.memo` to skip renders when props are equal.\n- `useMemo` to cache expensive calculations.\n- `useCallback` to preserve callback identity when useful.\n\nClass components have comparable techniques such as `PureComponent` and `shouldComponentUpdate`.\n\nSo performance should be measured with profiling rather than assuming that Hooks alone make a component faster.",
    "explanationHindi": "Hooks automatically classes se faster nahi hote. Dono approaches achhi performance de sakte hain.\n\nFunctional components mein:\n\n- `React.memo` → unnecessary renders reduce\n- `useMemo` → expensive calculation cache\n- `useCallback` → callback reference stable rakhna\n\nClass components mein `PureComponent` aur `shouldComponentUpdate` jaise optimization methods hain.\n\nPerformance ke liye assumption ke bajay profiling se actual bottleneck identify karna better hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "30. Does React Hooks work with static typing?",
    "answer": "Yes, React Hooks work perfectly with static typing, especially using TypeScript.\n\nReact hooks like `useState`, `useEffect`, and `useRef` allow you to define types for state, props etc., which helps catch errors during development.",
    "explanation": "Yes. React Hooks work well with static typing, especially TypeScript.\n\nYou can type state, props, refs, event handlers, and values returned by custom Hooks.\n\nExample:\n\n```tsx\nconst [count, setCount] = useState<number>(0);\n\ntype User = {\n  id: number;\n  name: string;\n};\n\nconst [user, setUser] = useState<User | null>(null);\n```\n\nThis helps catch type mismatches during development and improves editor autocomplete and refactoring support.",
    "explanationHindi": "Haan, React Hooks TypeScript ke saath achhe se work karte hain.\n\nState, props, refs, event handlers aur custom Hook return values ko type kiya ja sakta hai.\n\n```tsx\nconst [count, setCount] = useState<number>(0);\n```\n\nIsse development ke time type errors jaldi identify hote hain aur editor autocomplete/refactoring bhi better hota hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "31. What is the difference between `createElement` and `cloneElement`?",
    "answer": "### 1) React.createElement\n\n**What it does**\n\n→ Creates a new React element from scratch.\n\n**When to use**\n\n→ when you want to create a brand-new component's element.\n\nExample:\n\n```jsx\nconst element = React.createElement('div', { className: 'box' }, 'Hello');\n```\n\nThis is equivalent to:\n\n```jsx\n<div className=\"box\">Hello</div>\n```\n\n### 2) React.cloneElement\n\n**What it does**\n\nTakes an existing React element and clones it, optionally adding or overriding props.\n\n**When do use**\n\nWhen you want to modify an already existing child element.\n\nExample:\n\n```jsx\nconst element = <Button disabled={false} />;\nconst cloned = React.cloneElement(element, { disabled: true });\n```",
    "explanation": "`React.createElement()` creates a new React element from a type, props, and children.\n\n```js\nReact.createElement('div', { className: 'box' }, 'Hello');\n```\n\nIt is conceptually what JSX is transformed into.\n\n`React.cloneElement()` starts with an existing React element and creates a new element while allowing props or children to be changed.\n\n```jsx\nconst element = <Button disabled={false} />;\nconst cloned = React.cloneElement(element, { disabled: true });\n```\n\nSimple difference:\n\n```text\ncreateElement → create from inputs\ncloneElement  → clone existing element + modify\n```",
    "explanationHindi": "`React.createElement()` inputs ke basis par ek naya React element create karta hai.\n\n```js\nReact.createElement('div', { className: 'box' }, 'Hello');\n```\n\n`React.cloneElement()` existing React element ko clone karta hai aur props/children modify karne ka option deta hai.\n\n```text\ncreateElement → new element\ncloneElement  → existing element ka clone\n```\n\nIsliye main difference hai new element create karna versus existing element ko clone karke modify karna.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "32. What are PropTypes in React?",
    "answer": "PropTypes is a type checking tool in React that ensure components receives the correct type of props.\n\nIt's mainly used for debugging and validation during development.\n\n### Why use PropTypes?\n\n- to catch bugs early by verifying prop types.\n- to make your code more readable and self-documenting.\n- to alert developers when a component receives invalid or missing props.\n\nExample:\n\n```jsx\nimport PropTypes from 'prop-types';\n\nfunction UserCard({ name, age }) {\n    return (\n        <>\n            <h2>{name}</h2>\n            <p>{age}</p>\n        </>\n    );\n}\n\nUserCard.propTypes = {\n    name: PropTypes.string.isRequired,\n    age: PropTypes.number\n};\n```\n\n→ name must be a string and is required.\n\n→ age is optional but must be a number if provided.",
    "explanation": "PropTypes is a runtime development-time validation mechanism for React props.\n\nFor example:\n\n```jsx\nUserCard.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number\n};\n```\n\nThis tells developers that `name` should be a required string and `age`, if provided, should be a number.\n\nPropTypes can catch incorrect prop usage during development. They do not replace TypeScript's compile-time/static type checking; they are a runtime validation approach.",
    "explanationHindi": "PropTypes React props ki runtime development-time validation ke liye use hota hai.\n\nExample:\n\n```jsx\nUserCard.propTypes = {\n  name: PropTypes.string.isRequired,\n  age: PropTypes.number\n};\n```\n\nYahan `name` required string hai aur `age` optional number hai.\n\nPropTypes development mein wrong prop usage detect karne mein help karta hai. Ye TypeScript ka replacement nahi hai; TypeScript static/compile-time type checking provide karta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "33. What are stateless and stateful components?",
    "answer": "### Stateless Component\n\nA stateless component is a function that takes props and return JSX.\n\nIt doesn't use `useState` and `this.state`.\n\n→ Just displays data from props.\n\n→ Doesn't track or modify any internal state.\n\n### Stateful Component\n\nA stateful component is one that uses state (like with `useState` or `this.state`) to manage data that can change during the component's lifecycle.",
    "explanation": "A stateless component is mainly responsible for rendering UI from props and does not maintain its own changing state.\n\nA stateful component manages changing data using React state, such as `useState` in a functional component or `this.state` in an older class component.\n\nExample:\n\n```text\nProps → Stateless Component → UI\n\nState + Props → Stateful Component → UI\n                  ↑\n              State changes\n```\n\nThe distinction is about whether the component owns changing state, not simply whether the component is a function or class.",
    "explanationHindi": "Stateless component mainly props se UI render karta hai aur apna changing state maintain nahi karta.\n\nStateful component changing data ko React state ke through manage karta hai, jaise `useState` ya old class component mein `this.state`.\n\n```text\nProps → Stateless → UI\n\nState + Props → Stateful → UI\n```\n\nImportant point: difference component ke state ownership ka hai, sirf function/class hone ka nahi.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "34. What are the benefits of using hooks in React?",
    "answer": "Hooks allow you to use State and other features in functional components, eliminating the need for classes. They simplify code by reducing reliance on lifecycle methods, improve code readability:\n\nand make it easier to reuse Stateful logic across Components.\n\nCommon hooks like `useState` and `useEffect` help manage State and Side effects.",
    "explanation": "Hooks provide several benefits in modern React:\n\n- Functional components can use state and other React features.\n- They reduce the need for class components and class lifecycle APIs.\n- Custom Hooks allow reusable stateful logic.\n- Related logic can stay together instead of being split across lifecycle methods.\n- Hooks remove the need for class `this`.\n\nFor example, data-fetching logic can be extracted into `useFetch()` and reused by multiple components.\n\n```text\nComponent A ─┐\nComponent B ─┼→ Custom Hook → Shared Stateful Logic\nComponent C ─┘\n```",
    "explanationHindi": "Hooks ke main benefits:\n\n- Functional components mein state aur React features use kar sakte hain.\n- Class components ki need kam hoti hai.\n- Custom Hooks se stateful logic reuse kar sakte hain.\n- Related logic ko ek jagah organize karna easier hota hai.\n- Class wala `this` use nahi karna padta.\n\n```text\nComponent A ─┐\nComponent B ─┼→ Custom Hook\nComponent C ─┘\n```\n\nIsse reusable logic cleaner aur DRY ban sakta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "35. What is the difference between `useEffect()` and `useLayoutEffect()` in React?",
    "answer": "`useEffect()` → Runs after the screen is updated (after the UI is shown).\n\nGood for API calls, logging, setting timers.\n\n```jsx\nuseEffect(() => {\n    console.log(\"page is visible now\");\n}, []);\n```\n\n`useLayoutEffect()` → Runs before the screen is updated (before the UI is shown).\n\nGood for measuring size of elements, fixing layout before user sees it.",
    "explanation": "The main difference is when the effect runs relative to browser painting.\n\n- **`useEffect`** is generally used for non-visual side effects such as API calls, subscriptions, logging, and timers. React runs it after the component has been committed, without blocking the normal paint in the common case.\n- **`useLayoutEffect`** runs synchronously after the DOM has been updated but before the browser paints the updated screen. It is useful when you must measure layout or make a visual DOM adjustment before the user sees it.\n\nExample:\n\n```text\nRender\n  ↓\nDOM Commit\n  ↓\nuseLayoutEffect\n  ↓\nBrowser Paint\n  ↓\nuseEffect\n```\n\nBecause `useLayoutEffect` can delay painting, it should be used only when the layout timing actually requires it.",
    "explanationHindi": "Main difference timing ka hai.\n\n- `useEffect` → normal side effects ke liye, jaise API calls, subscriptions, logging, timers.\n- `useLayoutEffect` → DOM update ke baad aur browser paint se pehle synchronously run hota hai; layout measure/fix karne ke liye useful hai.\n\n```text\nRender\n  ↓\nDOM Commit\n  ↓\nuseLayoutEffect\n  ↓\nBrowser Paint\n  ↓\nuseEffect\n```\n\n`useLayoutEffect` painting ko delay kar sakta hai, isliye sirf jab layout timing ki real need ho tab use karna chahiye.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "36. What does the dependency array of `useEffect` do?",
    "answer": "The array you pass as the second argument to `useEffect` tells React when to re-run the effect based on the values inside it.\n\n### 1) No dependency array\n\n```jsx\nuseEffect(() => {\n    // Runs after every render\n});\n```\n\n### 2) Empty array `[]`\n\n```jsx\nuseEffect(() => {\n    // Runs only once after the initial render\n}, []);\n```\n\n### 3) With dependencies\n\n```jsx\nuseEffect(() => {\n    // Runs on initial render\n    // And runs again whenever \"count\" or \"name\" changes\n}, [count, name]);\n```",
    "explanation": "The dependency array tells React which reactive values an effect depends on and when the effect should be re-synchronized.\n\n```jsx\nuseEffect(() => {\n  // effect\n});\n```\n\nNo array → runs after every render.\n\n```jsx\nuseEffect(() => {\n  // effect\n}, []);\n```\n\nEmpty array → runs after the initial commit and does not re-run because of changing dependencies.\n\n```jsx\nuseEffect(() => {\n  // effect\n}, [count, name]);\n```\n\nWith dependencies → runs after the initial commit and again when `count` or `name` changes.\n\nIf the effect returns a cleanup function, React runs cleanup before re-running the effect when dependencies change and when the component is removed.",
    "explanationHindi": "Dependency array `useEffect` ko batata hai ki effect kin reactive values par depend karta hai.\n\n- No array → har render ke baad effect\n- `[]` → initial commit ke baad run; dependency changes ki wajah se re-run nahi\n- `[count, name]` → initial run aur `count`/`name` change hone par re-run\n\nAgar cleanup function return kiya hai, to dependency change par next effect se pehle cleanup run hota hai aur component remove hone par bhi cleanup hota hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "37. Why does React recommend against mutating state?",
    "answer": "React recommends against mutating state directly because mutating state can break how React detects changes and manages re-renders, leading to bugs, inconsistent UI, or missed updates.\n\n### Why it's a problem\n\nReact relies on immutability to:\n\n1) Detect changes efficiently.\n2) Trigger re-render when needed.\n3) Preserve previous state for comparison and debugging (e.g. time-travel debugging).\n\nWhen you mutate state, React might not realize anything changed.\n\nExample → mutating vs updating state properly\n\n```jsx\nconst [items, setItems] = useState([1, 2, 3]);\n\n// BAD - mutates the array\nitems.push(4);\nsetItems(items);\n\n// CORRECT - creates a new array\nsetItems([...items, 4]);\n```",
    "explanation": "React recommends immutable state updates because React needs to determine when state has changed and because immutable updates make state transitions easier to reason about.\n\nBad:\n\n```jsx\nitems.push(4);\nsetItems(items);\n```\n\nHere the same array reference is reused.\n\nBetter:\n\n```jsx\nsetItems([...items, 4]);\n```\n\nNow a new array reference is created.\n\nThe flow is:\n\n```text\nOld State\n   ↓\nCreate New Value\n   ↓\nState Setter\n   ↓\nReact sees new state\n   ↓\nRequired render/update\n```\n\nImmutability also makes debugging, comparison, memoization, and predictable state transitions easier.",
    "explanationHindi": "React state ko directly mutate karne ke bajay new value create karna better hai.\n\nBad:\n\n```js\nitems.push(4);\nsetItems(items);\n```\n\nBetter:\n\n```js\nsetItems([...items, 4]);\n```\n\n```text\nOld State\n   ↓\nNew Value\n   ↓\nState Setter\n   ↓\nReact Update\n```\n\nImmutable updates se state changes predictable rehte hain aur comparison, debugging aur memoization easier ho sakte hain.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "38. What is reconciliation in React?",
    "answer": "Reconciliation in React is the process of comparing the new Virtual DOM with the previous Virtual DOM to determine what has changed. Based on this comparison, React efficiently updates only the parts of the actual DOM that need to change.\n\nThis process helps React achieve high performance because it avoids unnecessary DOM manipulations. React uses keys to track elements during reconciliation, especially in lists, to correctly identify which elements have changed, been added or removed.",
    "explanation": "Reconciliation is the process React uses to determine what needs to change after a new render.\n\nConceptually:\n\n```text\nPrevious Render\n      ↓\nNew Render\n      ↓\nCompare element structure\n      ↓\nDetermine required changes\n      ↓\nCommit updates to DOM\n```\n\nReact uses element type, position, and keys to preserve identity where appropriate. Keys are especially important in lists because they help React understand which item corresponds to which previous item.\n\nReconciliation does not mean React blindly rewrites the entire DOM; it calculates the updates needed for the committed UI.",
    "explanationHindi": "Reconciliation React ka process hai jisme new render ke baad determine kiya jata hai ki UI mein kya change hua.\n\n```text\nPrevious Render\n      ↓\nNew Render\n      ↓\nCompare\n      ↓\nRequired Changes\n      ↓\nDOM Commit\n```\n\nLists mein `key` important hoti hai kyunki React ko items ki identity track karne mein help karti hai.\n\nReact poora DOM blindly replace nahi karta; required UI updates determine karta hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "39. What is the purpose of the `useContext` hook in React?",
    "answer": "A `useContext` hook in React is used to access context values directly in a functional component without having to use the `Context.Consumer` wrapper.\n\nIt allows you to share data like theme, user info or language settings across the component tree without passing props manually to every component.",
    "explanation": "`useContext` lets a functional component read the current value of a React Context without manually passing that value through every intermediate component.\n\nExample:\n\n```jsx\nconst ThemeContext = createContext('light');\n\nfunction Button() {\n  const theme = useContext(ThemeContext);\n  return <button className={theme}>Save</button>;\n}\n```\n\nThe flow is:\n\n```text\nContext Provider\n      ↓\nComponent Tree\n      ↓\nuseContext()\n      ↓\nRead shared value\n```\n\nIt is useful for shared values such as theme, locale, or authenticated-user information. It should not automatically be treated as a replacement for every form of global state management.",
    "explanationHindi": "`useContext` functional component ko React Context ki current value directly read karne deta hai.\n\n```text\nContext Provider\n      ↓\nComponent Tree\n      ↓\nuseContext()\n      ↓\nShared Value\n```\n\nTheme, language/locale aur authenticated user information jaise shared data ke liye useful hai.\n\nIsse har intermediate component ko manually props pass karne ki need kam hoti hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "40. What happens if you attempt to update state directly in React?",
    "answer": "If you update the state directly (eg. `this.state.count = 5` or state value = 'new'), React will not re-render the component, and the change won't be reflected in the UI.\n\nThis is because updates on the state setter function (or change components) use `setState` to know when a state change has occurred and trigger a re-render.\n\n→ Correct → `this.state.count = 10`; // React updates and re-renders.\n\nDirectly modifying state breaks React's internal update process, can cause bugs and leads to an inconsistent UI - always use the appropriate state updater method to ensure proper rendering.",
    "explanation": "State should not be updated by directly changing the state variable.\n\nIn a functional component:\n\n```jsx\nconst [count, setCount] = useState(0);\n\nsetCount(10);\n```\n\nIn a class component, use `setState()` rather than assigning directly to `this.state`.\n\nThe flow is:\n\n```text\nState Setter\n    ↓\nReact schedules update\n    ↓\nComponent renders with new state\n    ↓\nUI updates\n```\n\nDirect mutation bypasses React's normal state-update mechanism and can lead to stale or inconsistent UI. The same immutable-update principle applies to objects and arrays stored in state.",
    "explanationHindi": "State ko directly modify nahi karna chahiye. Functional component mein `useState` se mila setter use karo:\n\n```jsx\nconst [count, setCount] = useState(0);\n\nsetCount(10);\n```\n\nClass component mein `this.state.count = 10` ki jagah `setState()` use karna chahiye.\n\n```text\nState Setter\n    ↓\nReact Update Schedule\n    ↓\nNew Render\n    ↓\nUI Update\n```\n\nDirect mutation React ke normal update process ko bypass kar sakti hai aur inconsistent UI create kar sakti hai.",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-21-40",
    "question": "Source Note",
    "answer": "No PDF answer provided.",
    "explanation": "",
    "explanationHindi": "",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "41. Do Hooks replace Higher-Order Components (HOCs) in React?",
    "answer": "hooks don't completely replace higher-order Components (HOCs) but they often make them unnecessary. hooks provide a simpler and more readable way to reuse logic across components - and more readable way to reuse logic across components - which was the main reason HOCs were used in the first place.\n\nInstead of wrapping components in layers of HOCs, hooks let you extract and share stateful logic with Custom Hooks, resulting in cleaner and more maintainable code.",
    "explanation": "Hooks do not completely replace Higher-Order Components (HOCs), but in modern React they often make HOCs unnecessary for sharing stateful logic.\n\nWith an HOC, a component is wrapped by another component that adds behavior. This can create multiple wrapper layers and make the component tree harder to follow.\n\nWith a Custom Hook, the reusable logic is extracted into a function and called directly inside the component.\n\nFor example, if multiple components need the same data-fetching logic, we can create `useFetch()` and reuse it without wrapping those components.\n\nSo in an interview, I would say: HOCs are still useful in some existing or advanced patterns, but Custom Hooks are usually simpler for sharing Hook-based stateful logic.",
    "explanationHindi": "Hooks HOCs ko completely replace nahi karte, lekin modern React mein reusable stateful logic ke liye Custom Hooks aksar simpler approach hote hain.\n\nHOC mein ek component ko doosre component se wrap kiya jata hai. Agar multiple HOCs ho jayein to component tree mein multiple wrapper layers aa sakti hain.\n\nCustom Hook mein common logic ko ek `use...` function mein extract karke directly components ke andar use karte hain.\n\nExample: agar multiple components ko same data-fetching logic chahiye, to `useFetch()` Custom Hook bana sakte hain.\n\nInterview mein main bolunga ki HOCs abhi bhi kuch existing ya advanced cases mein useful hain, lekin Hook-based logic reuse ke liye Custom Hooks generally cleaner hote hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "42. Which method would you use to handle events in React?",
    "answer": "In React, I would use event handler functions attached to JSX elements using camelCase props, such as `onClick`, `onChange` or `onSubmit`.\n\nThese event handlers are defined as methods in class components or functions in functional components.",
    "explanation": "In React, I handle events by passing a function to an event prop such as `onClick`, `onChange`, or `onSubmit`.\n\nFor example:\n```jsx\nfunction Login() {\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    // submit logic\n  };\n\n  return <form onSubmit={handleSubmit}>...</form>;\n}\n```\n\nThe important point is that we pass the function reference, not call it during render. React invokes the handler when the event happens.\n\nIn class components, the handler can be a class method, while functional components normally use functions. The event object is provided to the handler by React.",
    "explanationHindi": "React mein events handle karne ke liye JSX event props jaise `onClick`, `onChange` aur `onSubmit` ke saath handler function pass karte hain.\n\nExample:\n```jsx\nconst handleClick = () => {\n  console.log(\"clicked\");\n};\n\n<button onClick={handleClick}>Click</button>\n```\n\nImportant point ye hai ki render ke time function ko call nahi karna chahiye; function reference pass karna chahiye. Event hone par React handler ko call karta hai.\n\nFunctional component mein normal function use hota hai aur class component mein class method use ho sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "43. In which situation would you use refs in React?",
    "answer": "Refs in React are used when you need to directly access or interact with a DOM element or a child Component instance.\n\nThey are especially useful in situations where normal React data flow (state & props) is not sufficient.",
    "explanation": "Refs are useful when I need direct access to a DOM element or when I need to keep a mutable value without causing a re-render.\n\nA common example is focusing an input:\n```jsx\nconst inputRef = useRef(null);\n\nconst focusInput = () => {\n  inputRef.current?.focus();\n};\n\nreturn <input ref={inputRef} />;\n```\n\nRefs are also useful for measuring DOM elements, controlling media, integrating with third-party DOM libraries, or storing values such as timer IDs.\n\nI would not use a ref for normal application state. If a value affects what should be rendered, state is usually the correct choice because state updates trigger rendering.",
    "explanationHindi": "Refs tab use karte hain jab direct DOM element ke saath interact karna ho ya koi mutable value store karni ho bina render trigger kiye.\n\nExample mein input ko focus karne ke liye `useRef` use kar sakte hain:\n```jsx\nconst inputRef = useRef(null);\ninputRef.current?.focus();\n```\n\nRefs ka use element measure karne, media control karne, third-party DOM libraries ke saath integration ya timer ID store karne mein bhi ho sakta hai.\n\nAgar koi value UI ko change karti hai, to normally state use karni chahiye. Ref ko normal application state ka replacement nahi banana chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "44. Which method would you use to add attributes to components conditionally?",
    "answer": "To add attributes to components conditionally in React, I would use JS expressions inside JSX - typically using ternary operator, Logical AND (`&&`) or object spreading.\n\n### Common methods\n\n1) Ternary operator\n\n```jsx\n<input type=\"text\" disabled={isDisabled ? true : false} />\n```",
    "explanation": "React JSX supports normal JavaScript expressions, so component attributes can be changed conditionally.\n\nFor a boolean attribute:\n```jsx\n<input disabled={isDisabled} />\n```\n\nA ternary can be used when different values are needed:\n```jsx\n<input disabled={isDisabled ? true : false} />\n```\n\nFor multiple conditional props, an object can be built and spread:\n```jsx\nconst props = isAdmin ? { disabled: false, title: \"Admin\" } : {};\n<Component {...props} />\n```\n\nThe main idea is to calculate the prop value from the current state or props rather than manually changing the DOM.",
    "explanationHindi": "React JSX ke andar JavaScript expressions use kar sakte hain, isliye condition ke according component attributes set kiye ja sakte hain.\n\nBoolean attribute ke liye:\n```jsx\n<input disabled={isDisabled} />\n```\n\nAgar different values chahiye to ternary use kar sakte hain. Multiple conditional props ke liye object bana kar spread operator bhi use kar sakte hain.\n\nMain idea ye hai ki current state ya props ke basis par prop ki value decide karein, directly DOM ko manually modify na karein.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "45. What method would you use to check and improve slow app rendering in React?",
    "answer": "I use the React Profiler to find slow Components, then apply optimizations like memoization (`React.memo`, `useMemo`, `useCallback`), code-splitting, virtualization and cleanup of effects to improve performance.\n\n### Cleanup and Efficient Hooks\n\n- properly clean up effects inside `useEffect` to avoid memory leaks.\n\n### Code Splitting\n\n- use `React.lazy()` and `Suspense` to load Components only when needed.",
    "explanation": "I would first measure the problem using the React Profiler instead of immediately adding memoization.\n\nThe Profiler helps identify components that render frequently or take significant rendering time. After identifying the bottleneck, I would choose the appropriate optimization.\n\nPossible optimizations include:\n- `React.memo` to skip child renders when props are unchanged.\n- `useMemo` for expensive calculations.\n- `useCallback` when stable function references are useful.\n- `React.lazy()` and `Suspense` for code splitting.\n- Virtualization for very large lists.\n- Proper `useEffect` cleanup to avoid unnecessary subscriptions or timers.\n\nI would also check unnecessary state updates and component structure. The important interview point is: profile first, then optimize the actual bottleneck.",
    "explanationHindi": "Sabse pehle React Profiler se actual performance problem identify karunga, directly har jagah memoization nahi lagaunga.\n\nProfiler se pata chal sakta hai ki kaunse components frequently render ho rahe hain ya zyada rendering time le rahe hain. Uske baad problem ke according optimization choose karenge.\n\nPossible optimizations:\n- `React.memo` unnecessary child renders avoid karne ke liye.\n- `useMemo` expensive calculation ke liye.\n- `useCallback` stable function reference ke liye.\n- `React.lazy()` aur `Suspense` code splitting ke liye.\n- Large lists ke liye virtualization.\n- `useEffect` ka proper cleanup.\n\nInterview mein important point hai: pehle bottleneck measure karo, phir targeted optimization karo.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "46. In which situation would you use `useMemo()` in React?",
    "answer": "I use `useMemo()` when I want to optimize performance by memoizing expensive calculations or preventing unnecessary re-renders caused by object or array references.",
    "explanation": "I use `useMemo()` when a calculation is expensive and its inputs do not change frequently.\n\nExample:\n```jsx\nconst filteredUsers = useMemo(\n  () => users.filter(user => user.name.includes(search)),\n  [users, search]\n);\n```\n\nReact can reuse the previous calculated value when `users` and `search` have not changed.\n\nIt can also be useful when a memoized child needs a stable object or array reference. However, `useMemo` itself has a cost, so I would not use it for every calculation. I would use it when profiling or the computation/reference behavior gives a real performance reason.",
    "explanationHindi": "`useMemo()` expensive calculation ko memoize karne ke liye use karte hain.\n\nExample:\n```jsx\nconst filteredUsers = useMemo(\n  () => users.filter(user => user.name.includes(search)),\n  [users, search]\n);\n```\n\nAgar dependencies same hain to React previous calculated value reuse kar sakta hai.\n\nYe object ya array reference ko stable rakhne mein bhi useful ho sakta hai jab memoized child component ho. Lekin har value ke liye `useMemo` lagana zaroori nahi hai; actual performance reason hona chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "47. How would you avoid binding in React?",
    "answer": "I avoid binding by using arrow functions in class field or preferably by using functional components with hooks. This ensure methods have the correct context and improves performance by avoiding unnecessary re-render.",
    "explanation": "The class-component binding problem happens because JavaScript class methods do not automatically bind `this` to the component instance.\n\nOne approach is an arrow class field:\n```jsx\nhandleClick = () => {\n  console.log(this);\n};\n```\n\nAnother approach is calling `.bind(this)` in the constructor.\n\nIn modern React, functional components with Hooks avoid this class-specific `this` binding problem completely.\n\nI would not claim that simply avoiding `.bind()` automatically improves performance. The main benefit is simpler context handling and cleaner modern React code.",
    "explanationHindi": "Class component mein methods ka `this` automatically component instance se bind nahi hota, isliye `.bind(this)` ki problem aa sakti hai.\n\nEk approach arrow class field hai:\n```jsx\nhandleClick = () => {\n  console.log(this);\n};\n```\n\nDusra approach constructor mein `.bind(this)` karna hai.\n\nModern React mein functional components aur Hooks use karne par ye class-based `this` binding issue nahi hota.\n\nYahan main benefit cleaner code aur context handling hai; sirf `.bind()` avoid karne se automatically performance improve nahi hoti.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "48. Explain what MVC architecture is.",
    "answer": "MVC is a software design pattern that separates an application into three layers - Model (data and logic), View (UI) and Controller (handles user input and updates). It promotes organized code, better scalability and separation of concerns.",
    "explanation": "MVC means Model–View–Controller and separates responsibilities into three parts.\n\n- **Model:** manages application data and related business logic.\n- **View:** presents the user interface.\n- **Controller:** receives input and coordinates what should happen next.\n\nA simplified flow is:\n`User → View → Controller → Model → View`\n\nThe benefit is separation of concerns. For example, changing database-related logic should not require putting that logic directly inside the UI.\n\nMVC is an architecture pattern, so the exact implementation can differ between applications.",
    "explanationHindi": "MVC ka full form Model–View–Controller hai aur application ki responsibilities ko separate karta hai.\n\n- **Model:** data aur business logic handle karta hai.\n- **View:** UI display karta hai.\n- **Controller:** user input receive karke required action coordinate karta hai.\n\nBasic flow:\n`User → View → Controller → Model → View`\n\nIska main benefit separation of concerns hai, jisse data logic aur UI logic ko alag manage karna easier hota hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "49. Does React or Next.js follow the MVC architecture? Briefly explain.",
    "answer": "React does not follow the MVC architecture strictly - it's mainly focused on the View layer. However you can structure your app to follow MVC by Separating concerns manually.\n\nNext.js doesn't strictly follow MVC, but it supports an MVC-like structure.",
    "explanation": "React does not strictly implement the complete MVC architecture. React mainly focuses on the UI or View part.\n\nA React application can still be organized with separate layers for:\n- UI components,\n- application/business logic,\n- data/API access,\n- routing or controller-like coordination.\n\nNext.js also does not enforce strict MVC. It provides features for routing, rendering, server-side code, and data handling, and developers can organize these into an MVC-like structure if it fits the project.\n\nSo the important distinction is that MVC can be an organizational pattern we choose; React or Next.js does not automatically make the whole application MVC.",
    "explanationHindi": "React strict MVC architecture follow nahi karta. React mainly UI ya View layer par focus karta hai.\n\nApplication ko manually separate layers mein organize kiya ja sakta hai, jaise UI components, business logic, API/data layer aur routing/controller-like logic.\n\nNext.js bhi strict MVC enforce nahi karta. Uske features ko use karke project ko MVC-like structure mein organize kiya ja sakta hai.\n\nIsliye interview mein clear distinction rakhna chahiye: MVC ek architecture pattern hai, jabki React mainly UI library hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "50. Explain what the Shadow DOM is.",
    "answer": "The Shadow DOM is a browser feature that allows developers to create self-contained, encapsulated components, where the internal structure and styles are completely isolated from the rest of the page, enabling reusable, conflict-free UI elements.\n\neg -> for example, if I build a custom `<modal-box>` component using the Shadow DOM, its internal styles (like title, color: red) won't interfere with any `.title` class used elsewhere in the app.\n\nThis isolation makes components safer to reuse and avoid CSS or DOM conflicts.",
    "explanation": "Shadow DOM is a browser feature that creates an encapsulated DOM subtree for a component.\n\nFor example, a Web Component can have its own internal markup and styles:\n```html\n<my-card></my-card>\n```\n\nStyles inside its shadow tree are scoped differently from the document outside it. This helps prevent internal CSS and DOM structure from accidentally conflicting with unrelated page elements.\n\nShadow DOM is part of the Web Components platform. It is different from React's Virtual DOM: the Virtual DOM is a React rendering concept, while Shadow DOM is a browser platform feature for DOM encapsulation.",
    "explanationHindi": "Shadow DOM browser ka feature hai jo component ke andar ek encapsulated DOM subtree create karta hai.\n\nExample mein Web Component ka internal HTML aur CSS us component ke scope mein reh sakta hai, jisse outside page ke styles ke saath conflicts kam hote hain.\n\nImportant interview point: Shadow DOM aur React Virtual DOM same cheez nahi hain. Virtual DOM React ka rendering concept hai, jabki Shadow DOM browser ka Web Components feature hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "51. What are synthetic events in React?",
    "answer": "Synthetic Event in React are wrapper objects around the browser's native events that work consistently across all browsers.\n\nThey combine the behaviour of native event (like click, Submit, keydown, etc) with React's own optimizations for performance and compatibility.\n\n### Why use Synthetic Events\n\n- cross-browser compatibility - you don't need to worry about different event behaviour in different browsers.\n\neg →\n\n```jsx\nfunction MyButton() {\n    function handleClick(event) {\n        event.preventDefault();\n        console.log(\"Button clicked\");\n    }\n\n    return <button onClick={handleClick}>click me</button>\n}\n```",
    "explanation": "Synthetic Events are React's event-system objects that provide a consistent interface for handling browser events in React components.\n\nFor example:\n```jsx\nfunction MyButton() {\n  const handleClick = (event) => {\n    event.preventDefault();\n    console.log(\"Button clicked\");\n  };\n\n  return <button onClick={handleClick}>Click me</button>;\n}\n```\n\nThe handler receives an event object that provides methods and properties used for event handling.\n\nModern React no longer relies on the old pooled-event behavior used in earlier React versions, but the term SyntheticEvent still refers to React's normalized event interface.",
    "explanationHindi": "Synthetic Event React ke event system ka object/interface hai jo browser events ko React components mein consistent way se handle karne mein help karta hai.\n\nExample:\n```jsx\nconst handleClick = (event) => {\n  event.preventDefault();\n};\n```\n\nHandler ko event object milta hai jisme event handling ke methods aur properties hoti hain.\n\nEk useful interview point ye hai ki modern React mein purana event pooling behavior nahi hai, lekin `SyntheticEvent` term React ke normalized event interface ke liye ab bhi use hoti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "52. What are custom Hooks in React?",
    "answer": "Custom Hooks are reusable JavaScript functions in React that start with `use` and allow you to extract and share logic b/w components that use Hooks.\n\n### Why use Custom Hooks?\n\n- avoid repeating logic (like fetching data, handling forms etc)\n- keep components clean and readable.\n- promote code reusability and separation of concerns.\n\n### Example\n\n```jsx\nfunction useCounter(initialValue = 0) {\n    const [count, setCount] = React.useState(initialValue);\n\n    const increment = () => setCount(count + 1);\n    const decrement = () => setCount(count - 1);\n\n    return { count, increment, decrement };\n}\n```\n\n### Usage in a Component\n\n```jsx\nfunction Counter() {\n    const { count, increment, decrement } = useCounter();\n\n    return (\n        <>\n            <p>{count}</p>\n            <button onClick={increment}>+</button>\n            <button onClick={decrement}>-</button>\n        </>\n    );\n}\n```",
    "explanation": "A Custom Hook is a reusable JavaScript function whose name starts with `use` and that can call other React Hooks.\n\nFor example:\n```jsx\nfunction useCounter(initialValue = 0) {\n  const [count, setCount] = useState(initialValue);\n\n  const increment = () => setCount(c => c + 1);\n  const decrement = () => setCount(c => c - 1);\n\n  return { count, increment, decrement };\n}\n```\n\nA component can call `useCounter()` and receive the reusable state and functions.\n\nCustom Hooks do not share the same state instance between components. Instead, they share the logic for managing that state. This makes them useful for data fetching, forms, subscriptions, and other repeated behavior.",
    "explanationHindi": "Custom Hook ek reusable JavaScript function hota hai jiska naam `use` se start hota hai aur jiske andar React Hooks use kiye ja sakte hain.\n\nExample mein `useCounter()` state aur increment/decrement logic ko reusable bana raha hai.\n\nAgar do components same Custom Hook use karte hain, to wo automatically same state share nahi karte; har component ka Hook state instance alag hota hai. Shared state chahiye to Context ya state-management solution ki zarurat ho sakti hai.\n\nCustom Hooks data fetching, forms, subscriptions aur repeated logic ke liye useful hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "53. State the different side effects of a React component.",
    "answer": "In React, side effects are things that happen after a component renders like:\n\n- fetching data\n- changing the page title\n- setting a timer\n- adding event listeners\n\nWe usually handle side effects using the `useEffect()` hook.\n\n→ There are two types of Side effects:\n\n### 1) Side effects that doesn't need cleanup\n\nThese just run once or when something changes - nothing extra is needed after.\n\neg → fetching data, updating the document title.\n\n### 2) Side effects that need cleanup\n\nThese start something that needs to be stopped or cleaned up when component unmounts or updates.\n\neg → Timers, event listeners, subscriptions.\n\nReact cleans them up by using a return function inside `useEffect()`.",
    "explanation": "A side effect is work that is not part of calculating the JSX output itself. Common examples are data fetching, changing the document title, starting timers, adding event listeners, and subscriptions.\n\nIn functional components, `useEffect` is commonly used for effects that need to happen after rendering.\n\nThere are two useful categories:\n\n1. **No cleanup required:** for example, updating the document title.\n2. **Cleanup required:** timers, event listeners, and subscriptions.\n\nExample:\n```jsx\nuseEffect(() => {\n  const id = setInterval(refreshData, 5000);\n\n  return () => clearInterval(id);\n}, []);\n```\n\nThe cleanup function prevents the old resource from continuing after the effect is no longer needed.",
    "explanationHindi": "Side effect wo kaam hai jo component ke JSX output ko calculate karne se alag hota hai.\n\nExamples: API/data fetch, document title change, timer, event listener aur subscription.\n\nFunctional components mein `useEffect` commonly side effects ke liye use hota hai.\n\nDo common categories:\n1. **Cleanup nahi chahiye:** jaise document title update karna.\n2. **Cleanup chahiye:** timer, event listener, subscription.\n\nCleanup function return karke timer ya listener ko remove/stop kar sakte hain, taaki unwanted resource active na rahe.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "54. What do you understand by three dots (`...`) in React?",
    "answer": "The three dots (`...`) in React are the Spread and Rest operators used to pass props, copy objects or arrays and handle flexible data in a clean and reusable way.\n\n### 1) Spread operator\n\n→ to copy or pass props, array or object.\n\nExample:\n\n```jsx\nconst user = { name: \"abe\", age: 25 };\n\nconst newUser = { ...user, location: \"India\" };\n```\n\n→ passing all data of user.\n\n```jsx\nconst props = { id: 1, name: \"Book\" };\n\n<MyComponent {...props} />\n```\n\nSame as:\n\n```jsx\n<MyComponent id={1} name=\"Book\" />\n```\n\n### 2) Rest operator\n\n→ to collect remaining properties.\n\n```jsx\nconst { name, ...rest } = { name: \"abe\", age: 25, location: \"India\" };\n```\n\nThen:\n\n```text\nname = \"abe\"\nrest = { age: 25, location: \"India\" }\n```",
    "explanation": "The `...` syntax is used as either the **spread** operator or the **rest** operator depending on its position.\n\n**Spread** expands or copies values:\n```jsx\nconst newUser = { ...user, location: \"India\" };\n```\n\nIt can also pass all properties of an object as props:\n```jsx\n<MyComponent {...props} />\n```\n\n**Rest** collects the remaining values:\n```jsx\nconst { name, ...rest } = user;\n```\n\nHere, `name` is extracted and the remaining properties are placed into `rest`.\n\nSo I identify whether it is spread or rest by looking at what the syntax is doing in that particular expression.",
    "explanationHindi": "`...` ko context ke according **spread** ya **rest** operator kaha jata hai.\n\n**Spread** values ko expand/copy karta hai:\n```jsx\nconst newUser = { ...user, location: \"India\" };\n```\nYe component ko object ke saare props pass karne mein bhi useful hai.\n\n**Rest** remaining values ko collect karta hai:\n```jsx\nconst { name, ...rest } = user;\n```\n\nYahan `name` alag milta hai aur remaining properties `rest` mein aa jati hain.\n\nIsliye interview mein context dekhkar batana hai ki `...` spread hai ya rest.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "55. How do you reset a component's state in React?",
    "answer": "You can reset a React Component's state by using the state setter, changing the component's key or reinitializing it to the original value.\n\n### 1) Using the useState Setter function\n\n```jsx\nconst [count, setCount] = useState(0);\n\nconst reset = () => setCount(0);\n```\n\n→ Reset State to initial value.\n\n### 2) Using initial state variable\n\n```jsx\nconst initialForm = { name: '', email: '' };\n\nconst [form, setForm] = useState(initialForm);\n\nconst resetForm = () => setForm(initialForm);\n```",
    "explanation": "There are several ways to reset a component's state, depending on whether I want to restore values or completely remount the component.\n\nFor normal state:\n```jsx\nconst initialState = { name: \"\", email: \"\" };\nconst [form, setForm] = useState(initialState);\n\nconst resetForm = () => setForm(initialState);\n```\n\nFor multiple fields, keeping a clear initial-state value makes the reset logic easy to maintain.\n\nAnother option is changing the component's `key`. When the key changes, React treats it as a different component instance, so its local state is initialized again.\n\nI would normally use the setter for a normal reset and use a key reset when I intentionally need a fresh component instance.",
    "explanationHindi": "Component state reset karne ke liye normally state setter ko original/initial value par set karte hain.\n\nExample:\n```jsx\nconst initialForm = { name: \"\", email: \"\" };\nconst [form, setForm] = useState(initialForm);\n\nconst resetForm = () => setForm(initialForm);\n```\n\nMultiple fields ke liye initial state ko separate variable mein rakhna clean approach hai.\n\nAgar component ki `key` change karte hain, React use new component instance treat kar sakta hai, isliye local state dobara initialize hoti hai.\n\nNormal reset ke liye setter aur intentional fresh remount ke liye key-based reset use kiya ja sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "56. How does React handle Concurrent Mode and what benefits does it offer?",
    "answer": "Concurrent mode is a set of new rendering capabilities in React that allow it to interrupt and pause rendering work to make the UI more responsive and fluid.\n\nInstead of rendering everything synchronously (blocking), React can now split rendering into smaller chunks, work on them in the background and prioritize urgent updates (like user inputs).\n\n### Key Benefits of Concurrent Mode\n\n1) Improved UI Responsive\n\n2) Non-blocking Rendering → Heavy component (like large lists or charts)\n\n3) Better User Experience → you can show loading indicators, skeletons, or fallback while data is loading.\n\n→ don't freeze the UI. React can pause rendering and resume it later, preventing \"jank\".\n\n4) Automatic Batching\n\n### Improved UI Responsiveness\n\n→ React can interrupt slow rendering tasks and prioritize more urgent ones like typing, clicking or animations.\n\n### Summary\n\nReact's concurrent mode improve app performance by allowing rendering to be interruptible and non-blocking. It helps React prioritize urgent tasks like user input, resulting in smoother, more responsive apps - especially in complex or data heavy apps.",
    "explanation": "Concurrent rendering is a set of React rendering capabilities that makes rendering interruptible and allows React to prioritize updates.\n\nThe idea is that React does not always have to finish a large piece of lower-priority rendering before responding to more urgent work such as user input.\n\nConceptually:\n`Urgent update → higher priority`\n`Non-urgent rendering → can be interrupted/resumed`\n\nModern React uses features such as automatic batching, transitions, and Suspense as part of its concurrent rendering model.\n\nThe benefit is better responsiveness for complex interfaces. It does not mean JavaScript suddenly runs multiple React renders on separate threads; it is about how React schedules rendering work.",
    "explanationHindi": "Concurrent rendering ka idea ye hai ki React rendering work ko interruptible aur priority-based way mein handle kar sakta hai.\n\nAgar heavy UI rendering chal rahi ho aur user typing kare, to urgent update ko priority mil sakti hai aur lower-priority rendering ko baad mein continue kiya ja sakta hai.\n\nModern React mein automatic batching, transitions aur Suspense jaise features is rendering model ke saath work karte hain.\n\nBenefit better responsiveness hai. Iska matlab ye nahi ki React JavaScript ko multiple threads par simultaneously run kar raha hai; focus rendering scheduling par hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "57. What is `useImperativeHandle` and when would you use it?",
    "answer": "`useImperativeHandle()` is a React Hook that lets you expose specific functions or values from a child Component to its parent when using ref.\n\n### Syntax\n\n```jsx\nuseImperativeHandle(ref, () => ({\n    exposedMethod: () => { logic },\n}));\n```\n\n### When and why use it\n\n→ you need to expose custom methods or values from a child Component to a parent Component.\n\n→ you want to control what is exposed through ref instead of giving full access to the child's DOM or instance.\n\n### Summary\n\n`useImperativeHandle` is used in combination with `forwardRef` to expose specific methods or properties from a child component to a parent, allowing controlled interaction via ref, especially useful in custom UI components.",
    "explanation": "`useImperativeHandle` lets a child component customize what is exposed through a ref.\n\nA typical pattern is:\n```jsx\nuseImperativeHandle(ref, () => ({\n  focus() {\n    inputRef.current?.focus();\n  },\n  reset() {\n    // reset logic\n  }\n}));\n```\n\nThe parent can then call the exposed methods through its ref.\n\nThis is useful for imperative UI behavior such as exposing `focus`, `scrollTo`, `play`, or `reset`. It should be used carefully because normal React communication should usually happen through props and state.\n\nIt is used with ref forwarding so the parent can obtain the child's ref.",
    "explanationHindi": "`useImperativeHandle` child component ko control karne deta hai ki ref ke through parent ko kaunse methods ya values expose karne hain.\n\nExample mein child sirf `focus()` ya `reset()` expose kar sakta hai.\n\nParent ref ke through:\n```js\nref.current.focus();\n```\njaisa method call kar sakta hai.\n\nYe focus, scroll, media control ya reset jaise imperative UI actions ke liye useful hai. Normal data communication ke liye props/state preferred hote hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "58. What are Render Props and how do you use them?",
    "answer": "Render props is a pattern in React where a component receives a function as a prop that returns a React element. This allows for more flexible and reusable components.",
    "explanation": "Render Props is a pattern where a component receives a function as a prop and uses that function to determine what UI to render.\n\nFor example:\n```jsx\n<DataProvider render={(data) => <List data={data} />} />\n```\n\nThe reusable component can own some behavior or state, while the parent decides how that information should be displayed.\n\nThe pattern was common before Hooks became the preferred way to share many kinds of stateful logic. Custom Hooks often provide a simpler alternative for logic reuse, but Render Props can still appear in existing code or specialized components.",
    "explanationHindi": "Render Props ek pattern hai jisme component ko function prop milta hai aur component us function ko call karke decide karta hai ki UI kya render hoga.\n\nExample:\n```jsx\n<DataProvider render={(data) => <List data={data} />} />\n```\n\nReusable component behavior/state manage kar sakta hai, jabki parent decide karta hai ki data UI mein kaise show hoga.\n\nHooks ke aane ke baad many logic-reuse cases mein Custom Hooks simpler approach ban gaye hain, lekin Render Props existing ya specialized code mein ab bhi mil sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "59. What is middleware in React (specifically with Redux), and why is Redux Thunk used?",
    "answer": "Middleware in Redux refers to the code that sits b/w dispatching an action and reaching the reducer. It allows for more complex logic like asynchronous operations logging etc.\n\nRedux-Thunk is a middleware that allows you to write action creators that return a function (thunk) instead of an action. This is especially useful for handling asynchronous logic, such as making API calls, before dispatching actions to update the Redux store.",
    "explanation": "Redux middleware runs between the dispatch of an action and the point where the reducer processes it.\n\nA simplified flow is:\n`Component → dispatch(action) → middleware → reducer → store update → UI`\n\nMiddleware can inspect actions, log them, perform asynchronous work, or dispatch additional actions.\n\nRedux Thunk is middleware that allows an action creator to return a function:\n```js\nconst fetchUsers = () => async (dispatch) => {\n  dispatch({ type: \"users/loading\" });\n\n  const response = await fetch(\"/users\");\n  const users = await response.json();\n\n  dispatch({ type: \"users/success\", payload: users });\n};\n```\n\nThe thunk can perform the API call and dispatch normal actions for loading, success, or failure.",
    "explanationHindi": "Redux middleware action dispatch hone aur reducer tak pahunchne ke beech mein run karta hai.\n\nBasic flow:\n`Component → dispatch → middleware → reducer → store update → UI`\n\nMiddleware logging, async operations aur custom logic ke liye useful hai.\n\nRedux Thunk action creator ko function return karne deta hai. Ye function API call jaise async work kar sakta hai aur loading, success ya failure ke liye normal Redux actions dispatch kar sakta hai.\n\nIsliye Thunk ko asynchronous Redux logic handle karne ke liye commonly use kiya jata hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "60. How would you test React Components using React Testing Library (RTL)?",
    "answer": "(RTL) React Testing Library helps you test your components the same way a user would use them.\n\n→ It renders your component.\n\n→ lets you find elements on the screen (like button and text).\n\n→ Allow you to click buttons, type in input and\n\n→ checks if the right thing happen - like showing a message or updating the screen.\n\n- Instead of checking how the component works inside (like state or method), it checks what the user sees and does.",
    "explanation": "React Testing Library (RTL) focuses on testing a component from the user's point of view.\n\nA typical test flow is:\n1. Render the component.\n2. Find an element using accessible/user-oriented queries.\n3. Perform an interaction such as clicking or typing.\n4. Assert the expected UI result.\n\nFor example, a login test could render the form, type into the email field, click the submit button, and check whether a success message or validation message appears.\n\nThe key idea is to avoid testing private implementation details such as internal state variables or component methods when the user-visible behavior is what matters.",
    "explanationHindi": "React Testing Library component ko user ke point of view se test karne par focus karti hai.\n\nTypical flow:\n1. Component render karo.\n2. Accessible/user-oriented query se element find karo.\n3. Click ya typing jaisa interaction karo.\n4. Expected UI result assert karo.\n\nExample: login form render karke email input mein type karna, submit button click karna aur success ya validation message check karna.\n\nMain idea internal state ya private methods ko directly test karne ke bajay user-visible behavior test karna hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-41-60",
    "question": "Source Note",
    "answer": "No PDF answer provided.",
    "explanation": "",
    "explanationHindi": "",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-61-71",
    "question": "61. How do you update state in React?",
    "answer": "Ans -> step by step\n\n1) State and props change\n\nState and props change → Component gets re-rendered.\n\n2) Virtual DOM update\n\nReact creates a new Virtual DOM representation after the state/props update.\n\n3) Diffing Algorithm\n\nReact compares the new Virtual DOM with the previous one. This process is called “Reconciliation”.\n\n4) DOM Updates\n\nOnly the changed part of the React DOM is updated.",
    "explanation": "In React, state is normally updated through the setter returned by `useState`.\n\nExample:\n```jsx\nconst [count, setCount] = useState(0);\n\nsetCount(10);\n```\n\nThe important flow is:\n`State update → React schedules an update → component renders again → new UI is calculated → React reconciles it → required DOM changes are committed`.\n\nIf the next state depends on the previous state, I use the functional updater:\n```jsx\nsetCount(prevCount => prevCount + 1);\n```\n\nThis is especially important when multiple updates may be queued together. I do not directly mutate the state object because React state should be treated as immutable data.",
    "explanationHindi": "React mein state update karne ke liye normally `useState` se mila setter use karte hain.\n\nExample:\n```jsx\nconst [count, setCount] = useState(0);\nsetCount(10);\n```\n\nBasic flow:\n`State update → React update schedule karta hai → component re-render hota hai → new UI calculate hoti hai → reconciliation hoti hai → required DOM changes commit hote hain.`\n\nAgar next state previous state par depend karti hai to functional updater use karte hain:\n```jsx\nsetCount(prev => prev + 1);\n```\n\nState ko directly mutate nahi karna chahiye; state ko immutable treat karna better hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-61-71",
    "question": "62. What are Webpack and Browserify?",
    "answer": "Webpack is a modern module bundler used to bundle JavaScript applications.\n\n- Bundles JS, images and more code into optimized files.\n- Supports code splitting.\n- Supports loaders and plugins.\n- Uses a configuration file (`webpack.config.js`) to define how files should be processed.\n\nWebpack and Browserify are both bundlers, but modern Webpack supports loaders, plugins and code splitting.\n\n### Browserify\n\nBrowserify is an older bundler that allows you to use Node.js-style `require()` in the browser.\n\nKey features:\n\n- focuses mainly on bundling JS modules.\n- works well with Node's CommonJS (`require`) syntax.\n- supports plugins and transformations.",
    "explanation": "Webpack and Browserify are module bundlers. They process application modules and dependencies so the code can be used efficiently in a browser.\n\n**Webpack** is a feature-rich bundler that supports loaders, plugins, code splitting, asset handling, and configurable build pipelines. Its configuration is commonly defined through `webpack.config.js`.\n\n**Browserify** is an older bundler focused mainly on bringing Node.js/CommonJS-style `require()` modules into browser applications.\n\nSo if I compare them in an interview, I would say both solve module bundling, while Webpack provides a broader and more configurable build ecosystem.",
    "explanationHindi": "Webpack aur Browserify dono module bundlers hain. Ye application ke modules aur dependencies ko process karke browser ke liye usable bundles prepare karte hain.\n\n**Webpack** feature-rich bundler hai jisme loaders, plugins, code splitting aur asset handling jaise features hain.\n\n**Browserify** older bundler hai jo mainly Node.js/CommonJS style `require()` modules ko browser applications mein use karne ke liye popular tha.\n\nDono ka main purpose bundling hai, lekin Webpack ka build ecosystem zyada configurable hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-61-71",
    "question": "63. How does Node.js handle concurrency if it is single-threaded?",
    "answer": "Ans -> Node.js runs JavaScript on a single thread, but can still handle many requests at once because it uses an event loop backed by libuv threads.\n\nRequests are handled asynchronously. When an operation needs I/O or other work, Node.js can use the underlying system/libuv facilities instead of blocking the main thread.\n\nWhen the operation is complete, the callback is handled by the event loop, so the main thread does not stay stuck waiting.",
    "explanation": "Node.js runs JavaScript on a main thread, but it can still handle many concurrent I/O operations because of its event-driven, non-blocking architecture.\n\nA simplified flow is:\n`Request → async operation → Node/libuv/OS handles waiting → event loop continues → completion callback/promise is processed → response`\n\nFor example, while Node.js is waiting for a database or file operation, the JavaScript thread does not have to sit blocked doing nothing.\n\nlibuv also provides a thread pool for certain operations, while the operating system handles many network operations. So “single-threaded” describes JavaScript execution, not the entire runtime being limited to one thread.\n\nFor CPU-heavy JavaScript work, a single main thread can still become blocked; that is where worker threads or child processes can be considered.",
    "explanationHindi": "Node.js JavaScript ko main thread par execute karta hai, lekin asynchronous aur non-blocking I/O ki wajah se multiple requests ko concurrently handle kar sakta hai.\n\nFlow roughly:\n`Request → async operation → libuv/OS waiting handle karta hai → event loop continue karta hai → result ready hone par callback/promise process hota hai.`\n\nDatabase, file ya network operation ka wait karte waqt main JavaScript thread continuously block nahi hota.\n\nImportant point: single-threaded ka matlab JavaScript execution model hai; poora Node runtime sirf ek thread tak limited nahi hai. CPU-heavy JavaScript work main thread ko block kar sakta hai, jiske liye worker threads ya child processes use kiye ja sakte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-61-71",
    "question": "64. What is a Node Inspector?",
    "answer": "Node Inspector is a debugging tool that allows developers to inspect and debug the code of a Node.js application through a graphical user interface.",
    "explanation": "Node Inspector refers to Node.js debugging support that allows a running Node.js application to be inspected through debugging tools.\n\nIn practice, Node applications can be debugged using the V8 Inspector protocol and tools such as Chrome DevTools or the VS Code debugger.\n\nA debugger allows me to:\n- set breakpoints,\n- inspect variables,\n- step through code,\n- view call stacks,\n- and investigate runtime behavior.\n\nThis is useful when logs are not enough to understand why a particular line or request is behaving incorrectly.",
    "explanationHindi": "Node Inspector Node.js application ko running state mein debug aur inspect karne ke mechanism/tools ko refer karta hai.\n\nPractical development mein V8 Inspector protocol ke through Chrome DevTools ya VS Code debugger use karke Node application debug kar sakte hain.\n\nDebugger se:\n- breakpoints set kar sakte hain,\n- variables inspect kar sakte hain,\n- code step-by-step chala sakte hain,\n- call stack dekh sakte hain,\n- aur runtime behavior investigate kar sakte hain.\n\nIsse complex bugs ko logs ke comparison mein detail mein understand karna easier hota hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-61-71",
    "question": "65. Can we import a Buffer class without the Buffer module?",
    "answer": "Yes, we can use the Buffer class in Node.js without explicitly importing the Buffer module.\n\nThat is because `Buffer` is a global class in Node.js, available in all modules without requiring an explicit import.\n\nExample:\n\n```js\nconst buf = Buffer.from(\"Hello\");\n\nconsole.log(buf.toString());\n```",
    "explanation": "Yes. In Node.js, `Buffer` is available globally, so it can be used without an explicit import in common Node.js code.\n\nExample:\n```js\nconst buf = Buffer.from(\"Hello\");\nconsole.log(buf.toString());\n```\n\nA Buffer represents raw binary data. It is commonly used with files, streams, images, sockets, and other binary/network operations.\n\nThe important distinction is that Buffer is part of Node.js's runtime APIs, so it is not necessary to import it just to use the global `Buffer` class.",
    "explanationHindi": "Haan. Node.js mein `Buffer` globally available hota hai, isliye common Node.js code mein ise explicitly import karna zaroori nahi hota.\n\nExample:\n```js\nconst buf = Buffer.from(\"Hello\");\n```\n\nBuffer raw binary data represent karta hai. Iska use files, images, streams, sockets aur network data ke saath hota hai.\n\nInterview mein main mention karunga ki `Buffer` Node.js runtime ka globally available API hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-61-71",
    "question": "66. Which function is used to fire an event?",
    "answer": "Ans -> the `emit()` function is used to fire an event.",
    "explanation": "In Node.js's `EventEmitter`, the `emit()` method is used to fire or trigger an event.\n\nExample:\n```js\nconst EventEmitter = require(\"events\");\nconst emitter = new EventEmitter();\n\nemitter.on(\"message\", () => {\n  console.log(\"Message received\");\n});\n\nemitter.emit(\"message\");\n```\n\nHere, `on()` registers a listener and `emit()` triggers the event. When the event is emitted, the registered listeners for that event are called.\n\nThis pattern is commonly used for decoupled event-driven communication inside Node.js applications.",
    "explanationHindi": "Node.js ke `EventEmitter` mein `emit()` method event ko fire ya trigger karne ke liye use hota hai.\n\n`on()` se event listener register karte hain aur `emit()` se event trigger karte hain.\n\nExample:\n```js\nemitter.on(\"message\", handler);\nemitter.emit(\"message\");\n```\n\n`emit()` call hone par us event ke registered listeners execute ho sakte hain. Ye event-driven communication ke liye useful pattern hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-61-71",
    "question": "67. Can middleware functions execute code?",
    "answer": "Yes, the middleware function can execute code and they can modify the request and response objects.",
    "explanation": "Yes. Express middleware can execute arbitrary application code during the request-response cycle.\n\nMiddleware can:\n- inspect or modify `req` and `res`,\n- perform authentication or authorization,\n- validate input,\n- log requests,\n- handle or transform data,\n- and call `next()` to pass control forward.\n\nExample:\n```js\napp.use((req, res, next) => {\n  console.log(req.method, req.url);\n  next();\n});\n```\n\nIf middleware sends a response, it may finish the request without calling `next()`. Otherwise, it normally calls `next()` so the next middleware or route handler can continue.",
    "explanationHindi": "Haan. Express middleware request-response cycle ke during code execute kar sakta hai.\n\nMiddleware:\n- `req` aur `res` inspect/modify kar sakta hai,\n- authentication/authorization kar sakta hai,\n- validation aur logging kar sakta hai,\n- custom processing kar sakta hai,\n- aur `next()` se control next middleware ko de sakta hai.\n\nAgar middleware khud response send kar deta hai to request wahi finish ho sakti hai. Otherwise `next()` call karke next handler ko control diya jata hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-61-71",
    "question": "68. How will you delete a directory?",
    "answer": "```js\nfs.rmdir()\n```",
    "explanation": "The PDF answer mentions `fs.rmdir()`, which was used for removing directories in older Node.js code.\n\nFor modern Node.js code, `fs.rm()` is generally preferred:\n```js\nconst fs = require(\"fs/promises\");\n\nawait fs.rm(\"./my-folder\", { recursive: true, force: true });\n```\n\n`fs.rmdir()` historically removed directories and had restrictions such as requiring an empty directory in its traditional usage.\n\nSo for an interview, I would preserve the PDF answer as the source answer, but mention that current Node.js code generally uses `fs.rm()` for flexible directory removal.",
    "explanationHindi": "PDF answer mein `fs.rmdir()` diya gaya hai, jo older Node.js code mein directory remove karne ke liye use hota tha.\n\nModern Node.js mein generally `fs.rm()` preferred hai:\n```js\nawait fs.rm(\"./my-folder\", { recursive: true, force: true });\n```\n\nOld `fs.rmdir()` usage mein directory removal ke restrictions the, especially empty directory ke case mein.\n\nInterview mein source answer `fs.rmdir()` mention karke current practice ke liye `fs.rm()` bhi explain kar sakte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-61-71",
    "question": "69. What is an error-first callback?",
    "answer": "Error-first callbacks are a common Node.js pattern where the first argument of the callback is reserved for an error.\n\nExample:\n\n```js\nfunction callback(err, result) {\n    if (err) {\n        // handle the error\n    }\n\n    // use the result\n}\n```",
    "explanation": "An error-first callback is a common Node.js callback convention where the first argument represents an error.\n\nExample:\n```js\nfunction callback(err, data) {\n  if (err) {\n    console.error(err);\n    return;\n  }\n\n  console.log(data);\n}\n```\n\nThe usual flow is:\n`operation → callback(err, result)`\n\nIf the operation succeeds, the error argument is normally `null` or otherwise falsy and the result is available in the next argument. If it fails, the error is passed first.\n\nThis convention makes asynchronous error handling predictable in traditional callback-based Node.js APIs.",
    "explanationHindi": "Error-first callback Node.js ka common callback pattern hai jisme first parameter error ke liye reserved hota hai.\n\nExample:\n```js\nfunction callback(err, data) {\n  if (err) {\n    console.error(err);\n    return;\n  }\n  console.log(data);\n}\n```\n\nSuccessful case mein `err` generally `null` ya falsy hota hai aur result next parameter mein milta hai. Failure case mein first parameter mein error milta hai.\n\nYe traditional callback-based asynchronous Node.js APIs mein predictable error handling provide karta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-61-71",
    "question": "70. What are global objects in Node.js?",
    "answer": "They are similar to the `window` object in browsers, but in Node.js they belong to the global object.\n\nExamples:\n\n- `process` → information/control over the Node.js process.\n- `Buffer` → handles binary data.\n- `__dirname` → current directory name.\n- `__filename` → current file name.\n- `setTimeout`, `setInterval`, `setImmediate` → timers.",
    "explanation": "Node.js provides several global values and functions that are available without importing them explicitly.\n\nExamples from the source include:\n- `process` for information and control over the current Node.js process.\n- `Buffer` for handling binary data.\n- `setTimeout`, `setInterval`, and `setImmediate` for scheduling callbacks.\n- `__dirname` and `__filename` in CommonJS modules for module/file path information.\n\nOne useful interview distinction is that not every familiar Node.js value has exactly the same global scope semantics. For example, `__dirname` and `__filename` are CommonJS module variables provided to modules rather than browser-style globals.\n\nThese APIs reduce the need to manually pass common runtime information into every module.",
    "explanationHindi": "Node.js mein kuch global APIs aur module-provided values available hote hain.\n\nExamples:\n- `process` → current Node.js process ki information/control.\n- `Buffer` → binary data.\n- `setTimeout`, `setInterval`, `setImmediate` → timers.\n- `__dirname`, `__filename` → CommonJS module/file path information.\n\nImportant interview point: `__dirname` aur `__filename` ko browser ke `window` object jaisa simple global samajhna exact nahi hai; ye CommonJS modules ko provide kiye jaate hain.\n\nIn APIs ki wajah se common runtime information ko har file mein manually define karne ki zarurat nahi hoti.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-61-71",
    "question": "71. When does the child process occur?",
    "answer": "A child process in Node.js occurs when the program spawns a separate process using the `child_process` module to run commands, scripts, or programs outside the main event loop.\n\nChild processes can run separately, so if one is busy, the main Node.js process can continue handling other work.",
    "explanation": "A child process is created when a Node.js application starts a separate operating-system process through the `child_process` module.\n\nFor example:\n```js\nconst { exec } = require(\"child_process\");\n\nexec(\"node --version\", (error, stdout) => {\n  if (error) {\n    console.error(error);\n    return;\n  }\n\n  console.log(stdout);\n});\n```\n\nChild processes are useful for running external commands, scripts, or programs separately from the main Node.js process.\n\nBecause the child is a separate OS process, work done there does not use the exact same JavaScript execution context as the parent. This can help isolate external or CPU-heavy work, although the specific API (`exec`, `spawn`, or `fork`) should be chosen based on the task.",
    "explanationHindi": "Node.js mein child process tab create hota hai jab application `child_process` module ke through ek separate operating-system process start karti hai.\n\nExample mein `exec()` se external command run kar sakte hain.\n\nChild process ka use external commands, scripts ya separate programs run karne ke liye hota hai. Ye parent Node.js process se alag OS process hota hai.\n\nCommon APIs:\n- `exec()` → command execute karke output collect karna.\n- `spawn()` → long-running process ya streaming output ke liye.\n- `fork()` → Node.js child process ke saath IPC ke liye.\n\nIsliye child process main application ko separate work handle karne mein help karta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-2",
    "topicSlug": "react-advanced-61-71",
    "question": "Source Note",
    "answer": "No PDF answer provided.",
    "explanation": "",
    "explanationHindi": "",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react"
    ]
  }
];
