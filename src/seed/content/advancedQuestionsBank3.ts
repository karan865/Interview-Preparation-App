import { SeedQuestion } from '../../types/seed.types';

export const advancedQuestionsBank3Questions: SeedQuestion[] = [
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: `1. What is the difference between Shallow Copy and Deep Copy?`,
    slug: '1-what-is-the-difference-between-shallow-copy-and-deep-copy',
    answer: `### Shallow Copy

Example:

\`\`\`js
let originalObj = {
  name: "Ajay",
  address: {
    city: "Delhi"
  }
};

let shallowCopy = { ...originalObj };

originalObj.address.city = "Mumbai";

console.log(shallowCopy.address.city);
\`\`\`

The object can be copied, but the nested object/reference is still shared.

In shallow copy, only the first/top level is copied. If there is a nested object, both objects can still refer to the same nested object.

**Why?**

Because the reference is passed/copied for nested objects.

### Deep Copy

Example:

\`\`\`js
let originalObj = {
  name: "Ajay",
  address: {
    city: "Delhi"
  }
};

let deepCopy = JSON.parse(JSON.stringify(originalObj));

originalObj.address.city = "Mumbai";

console.log(deepCopy.address.city);
\`\`\`

Here the nested object is also copied, so changing the parent/original object does not change the copied nested object.

The notes explain that deep copy creates a new reference rather than sharing the same nested reference.`,
    explanation: `A **shallow copy** and a **deep copy** are two ways of copying objects in JavaScript. The main difference is how they handle **nested objects and references**.

In a shallow copy, JavaScript creates a new object for the first/top level, but if the object contains another object or array, the nested value's **reference is copied**, not the nested object itself. Therefore, both the original and copied objects can point to the same nested object.

For example:

\`\`\`js
const user = {
  name: "Ajay",
  address: {
    city: "Delhi"
  }
};

const copy = { ...user };

copy.address.city = "Mumbai";

console.log(user.address.city); // Mumbai
\`\`\`

Here, changing \`copy.address.city\` also changes \`user.address.city\` because both objects share the same \`address\` reference.

A deep copy creates an independent copy of the nested data as well. Therefore, modifying the nested object in the copy does not modify the original.

A simple example is:

\`\`\`js
const user = {
  name: "Ajay",
  address: {
    city: "Delhi"
  }
};

const copy = structuredClone(user);

copy.address.city = "Mumbai";

console.log(user.address.city); // Delhi
console.log(copy.address.city); // Mumbai
\`\`\`

Older code often uses \`JSON.parse(JSON.stringify(obj))\`, but that approach has limitations with values such as functions, \`undefined\`, \`Date\`, \`Map\`, \`Set\`, and circular references. \`structuredClone()\` is generally a better choice when the data types it supports are appropriate.

**Interview summary:**  
Shallow copy creates a new outer object but can share nested references. Deep copy creates independent nested data as well.`,
    explanationHindi: `**Shallow Copy** aur **Deep Copy** JavaScript mein object copy karne ke do methods hain. Main difference ye hai ki nested object ko kaise copy kiya jata hai.

Shallow copy mein top-level object ka naya object create hota hai, lekin agar uske andar koi nested object ya array hai, to uska **reference copy** hota hai. Isliye original aur copied object same nested object ko point kar sakte hain.

Example:

\`\`\`js
const user = {
  name: "Ajay",
  address: {
    city: "Delhi"
  }
};

const copy = { ...user };

copy.address.city = "Mumbai";

console.log(user.address.city); // Mumbai
\`\`\`

Yahan \`copy.address\` aur \`user.address\` same nested object ko refer kar rahe hain. Isliye copy mein change karne par original bhi change ho gaya.

Deep copy mein nested objects ka bhi separate copy create hota hai.

\`\`\`js
const user = {
  name: "Ajay",
  address: {
    city: "Delhi"
  }
};

const copy = structuredClone(user);

copy.address.city = "Mumbai";

console.log(user.address.city); // Delhi
\`\`\`

Ab original aur copied object independent hain.

**Interview mein short summary:**  
Shallow copy mein outer object new hota hai, lekin nested references share ho sakte hain. Deep copy mein nested data bhi independently copy hota hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 1,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: `2. What is the Event Loop?`,
    slug: '2-what-is-the-event-loop',
    answer: `The event loop manages asynchronous operations.

It manages/decides when asynchronous code runs.`,
    explanation: `The **Event Loop** is one of the most important concepts in JavaScript and Node.js. It allows JavaScript to handle asynchronous operations without blocking the main execution thread.

JavaScript code is executed using a **Call Stack**. When a synchronous function is called, it is pushed onto the call stack. When it finishes, it is removed from the stack.

For asynchronous operations such as timers, network requests, file-system operations, or API calls, the JavaScript runtime delegates the work to the appropriate runtime APIs. Node.js can use its underlying runtime and system mechanisms, including **libuv**, to handle asynchronous I/O.

When the asynchronous operation finishes, its callback is placed into an appropriate **queue**. The Event Loop checks whether the call stack is empty and whether queued work is ready to execute. It then moves eligible callbacks into the call stack.

A simplified flow is:

\`\`\`text
JavaScript Code
      |
      v
  Call Stack
      |
      | asynchronous operation
      v
Runtime / Node.js APIs
      |
      v
Callback / Task Queue
      |
      v
  Event Loop
      |
      | when Call Stack is free
      v
  Call Stack
\`\`\`

There are also different kinds of queues. In browsers, Promise callbacks are handled through the **microtask queue**, while timer callbacks are tasks. In Node.js, there are additional event-loop phases and mechanisms such as the \`process.nextTick()\` queue.

For example:

\`\`\`js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
\`\`\`

Output:

\`\`\`text
Start
End
Promise
Timer
\`\`\`

Why?

1. \`Start\` runs synchronously.
2. \`setTimeout()\` schedules a timer callback.
3. Promise \`.then()\` schedules a microtask.
4. \`End\` runs synchronously.
5. The current synchronous code finishes.
6. The microtask runs before the timer callback.
7. The timer callback runs afterward.

**Interview summary:**  
The Event Loop coordinates the Call Stack, asynchronous runtime work, and callback/task queues so JavaScript can perform asynchronous operations without blocking the main execution flow.`,
    explanationHindi: `**Event Loop** JavaScript aur Node.js ka bahut important concept hai. Ye asynchronous operations ko manage karta hai aur JavaScript ko non-blocking behavior provide karne mein help karta hai.

JavaScript synchronous code ko **Call Stack** mein execute karta hai. Jab function call hota hai to wo stack mein push hota hai aur complete hone ke baad pop ho jata hai.

Agar koi asynchronous operation hai, jaise timer, network request, file operation ya API call, to runtime us operation ko handle karta hai. Node.js mein asynchronous I/O ko manage karne mein **libuv** important role play karta hai.

Jab asynchronous operation complete hota hai, uska callback appropriate **queue** mein wait karta hai. Event Loop check karta hai ki Call Stack free hai ya nahi. Jab stack available hota hai, eligible callback ko execution ke liye Call Stack mein bheja jata hai.

Simple flow:

\`\`\`text
JavaScript
    ↓
Call Stack
    ↓
Async Operation
    ↓
Node.js Runtime / APIs
    ↓
Callback Queue
    ↓
Event Loop
    ↓
Call Stack
\`\`\`

Promise callbacks **microtask queue** mein jate hain, jabki \`setTimeout()\` jaise timers task/timer processing mein aate hain. Node.js mein \`process.nextTick()\` ka apna special queue behavior bhi hota hai.

Example:

\`\`\`js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
\`\`\`

Output:

\`\`\`text
Start
End
Promise
Timer
\`\`\`

Reason:

- Pehle synchronous code chalega.
- \`Promise.then()\` microtask schedule karega.
- \`setTimeout()\` timer callback schedule karega.
- Current code complete hone ke baad microtask pehle execute hoga.
- Uske baad timer callback execute hoga.

**Interview summary:**  
Event Loop Call Stack, asynchronous operations aur queues ko coordinate karta hai, jisse JavaScript asynchronous kaam ko non-blocking way mein handle kar pata hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 2,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: `3. What is the difference between \`useState()\` and \`useReducer()\`?`,
    slug: '3-what-is-the-difference-between-usestate-and-usereducer',
    answer: `useState() -> use for Primitive type = number, string, Boolean
    -> manage one or two State Variable
    -> use for local component state

useReducer() -> use for object and arrays
    -> manage multiple states (loading, error, data)
    -> use for global state management.`,
    explanation: `Both \`useState()\` and \`useReducer()\` are React Hooks used to manage component state, but they are useful in different situations.

\`useState()\` is usually the simpler choice when the state is straightforward. It works well for values such as numbers, strings, booleans, or a small amount of local state.

Example:

\`\`\`jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Increment
</button>
\`\`\`

\`useReducer()\` is useful when state transitions become more complex or when several related state values are updated through defined actions.

Example:

\`\`\`jsx
const initialState = {
  loading: false,
  data: null,
  error: null
};

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };

    case "SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: null
      };

    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.payload
      };

    default:
      return state;
  }
}
\`\`\`

Then:

\`\`\`jsx
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

The important interview point is that \`useReducer()\` does **not automatically make state global**. It manages state locally unless combined with something such as Context or another state-management architecture.

**When I would choose \`useState\`:**

- Simple local state.
- Small number of state variables.
- Straightforward updates.

**When I would choose \`useReducer\`:**

- Multiple related state values.
- Complex state transitions.
- Many different actions update the same state.
- Reducer logic needs to be predictable and centralized.`,
    explanationHindi: `\`useState()\` aur \`useReducer()\` dono React Hooks hain jo state manage karne ke liye use hote hain, lekin dono ka use-case different ho sakta hai.

\`useState()\` simple state ke liye best fit hota hai, jaise number, string, boolean ya simple local state.

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

Jab state complex ho jaye aur multiple related values ko actions ke through update karna ho, tab \`useReducer()\` useful hota hai.

Example:

\`\`\`jsx
const initialState = {
  loading: false,
  data: null,
  error: null
};
\`\`\`

Reducer:

\`\`\`jsx
function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };

    case "SUCCESS":
      return {
        loading: false,
        data: action.payload,
        error: null
      };

    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.payload
      };

    default:
      return state;
  }
}
\`\`\`

Important interview point: \`useReducer()\` khud se global state nahi banata. Global state ke liye Context ya kisi state-management architecture ke saath use kiya ja sakta hai.

**Simple difference:**

- \`useState\` → simple/local state.
- \`useReducer\` → complex state aur multiple state transitions.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 3,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: `4. What are prototypes in JavaScript?`,
    slug: '4-what-are-prototypes-in-javascript',
    answer: `In JS, every object has an internal link to another object called its prototype.

This prototype is used for inheritance. If we try to access a property or method on an object and it is not found, JavaScript looks for it in the prototype chain.

Example:

\`\`\`js
let users = {
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },

  getAge: function () {
    const age = new Date().getFullYear() - this.birth;
    return age;
  }
};
\`\`\`

The notes then show a student/object using methods from \`users\`, indicating that the methods are inherited through the prototype relationship.

They also note that the property/method can be inherited automatically.`,
    explanation: `A **prototype** is an object from which another object can inherit properties and methods. JavaScript uses **prototype-based inheritance** rather than the traditional class-based inheritance model used by languages such as Java or C++.

When you access a property on an object, JavaScript first checks the object itself. If the property is not found, JavaScript looks at the object's prototype. If it is still not found, it continues up the **prototype chain** until it finds the property or reaches \`null\`.

Example:

\`\`\`js
const user = {
  greet() {
    console.log("Hello");
  }
};

const student = Object.create(user);

student.greet();
\`\`\`

Here, \`student\` does not have its own \`greet()\` method. JavaScript finds \`greet()\` through its prototype.

The prototype chain can be visualized as:

\`\`\`text
student
   ↓
user
   ↓
Object.prototype
   ↓
null
\`\`\`

Constructor functions and classes also use prototypes. For example:

\`\`\`js
function User(name) {
  this.name = name;
}

User.prototype.sayHello = function () {
  console.log(\`Hello \${this.name}\`);
};

const u1 = new User("Ajay");

u1.sayHello();
\`\`\`

The \`sayHello()\` function is stored on \`User.prototype\`, so instances can share the same method instead of every instance getting a separate function copy.

**Interview summary:**  
Prototype is the mechanism JavaScript uses for inheritance. When a property is not found on an object, JavaScript searches the prototype chain.`,
    explanationHindi: `JavaScript mein **prototype** ek object hota hai jisse doosra object properties aur methods inherit kar sakta hai. JavaScript **prototype-based inheritance** use karta hai.

Jab hum kisi object ki property access karte hain, JavaScript pehle object ke andar property search karta hai. Agar property nahi milti, to JavaScript uske prototype mein search karta hai. Phir prototype ke prototype mein search karta hai. Is process ko **prototype chain** kehte hain.

Example:

\`\`\`js
const user = {
  greet() {
    console.log("Hello");
  }
};

const student = Object.create(user);

student.greet();
\`\`\`

\`student\` ke paas directly \`greet()\` nahi hai, lekin uska prototype \`user\` hai. Isliye \`student.greet()\` kaam karta hai.

Prototype chain roughly:

\`\`\`text
student
   ↓
user
   ↓
Object.prototype
   ↓
null
\`\`\`

Constructor function ke example mein:

\`\`\`js
function User(name) {
  this.name = name;
}

User.prototype.sayHello = function () {
  console.log(\`Hello \${this.name}\`);
};
\`\`\`

Yahan \`sayHello()\` prototype par hai aur multiple objects us method ko share kar sakte hain.

**Interview summary:**  
Prototype JavaScript mein inheritance ka mechanism hai. Property object mein nahi milne par JavaScript prototype chain mein search karta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 4,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: `5. What are clusters in Node.js?`,
    slug: '5-what-are-clusters-in-nodejs',
    answer: `In Node.js, clusters are used to take advantage of multi-core processors by running multiple worker processes that share the same server port.

By default, a Node.js application runs in a single thread, which means it can only use one CPU core at a time.

If your server has 4 or 8 cores, the rest remain unused. That's where the cluster module comes in.

### Key points about clusters in Node.js

1. **Master process** → responsible for managing workers.
2. **Worker process** → actual child processes that run the server code.
3. Workers share the same port.
4. If one worker crashes, others can continue serving requests.
5. You can scale apps horizontally with a load balancer.

### Use Case

Clusters are useful for scaling Node.js servers to handle more requests by utilizing all CPU cores.

The notes also mention that clusters are not meant for CPU-heavy tasks; worker threads are better for that kind of work.`,
    explanation: `The **Cluster module** in Node.js is used to create multiple Node.js processes so an application can take advantage of multiple CPU cores.

Node.js executes JavaScript on a single main thread within each process. If a machine has multiple CPU cores, running only one Node.js process may leave other cores underutilized for that application. Clustering allows multiple worker processes to run the same server application.

A typical architecture is:

\`\`\`text
             Primary Process
              /    |    \
             /     |     \
        Worker 1 Worker 2 Worker 3
             \      |      /
              Shared Server Port
\`\`\`

Example:

\`\`\`js
const cluster = require("node:cluster");
const http = require("node:http");
const os = require("node:os");

if (cluster.isPrimary) {
  const workers = os.cpus().length;

  for (let i = 0; i < workers; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.end(\`Handled by worker \${process.pid}\`);
  }).listen(3000);
}
\`\`\`

The primary process creates workers. Each worker runs its own Node.js process and can handle requests.

**Why use clustering?**

- Better utilization of multiple CPU cores.
- More request-handling capacity.
- Process-level isolation.
- A worker failure does not necessarily stop every other worker.

However, clustering is not the same as worker threads. **Cluster = multiple processes. Worker Threads = multiple threads within a process.** For CPU-heavy JavaScript calculations, worker threads can be more appropriate.`,
    explanationHindi: `Node.js ka **Cluster module** multiple worker processes create karne ke liye use hota hai, taaki application multiple CPU cores ka better use kar sake.

Ek Node.js process ke andar JavaScript ka main execution single thread par hota hai. Agar server mein multiple CPU cores hain, to cluster multiple Node.js processes run kar sakta hai.

Architecture:

\`\`\`text
             Primary Process
              /    |    \
         Worker1 Worker2 Worker3
              \    |    /
             Server Port
\`\`\`

Example:

\`\`\`js
const cluster = require("node:cluster");
const http = require("node:http");
const os = require("node:os");

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.end(\`Worker: \${process.pid}\`);
  }).listen(3000);
}
\`\`\`

Primary process workers create karta hai aur workers actual server code run karte hain.

Benefits:

- Multiple CPU cores ka use.
- High traffic handle karne mein help.
- Process-level isolation.
- Ek worker fail hone par doosre workers continue kar sakte hain.

Important difference:

**Cluster → multiple processes.**  
**Worker Threads → ek process ke andar multiple threads.**

CPU-heavy JavaScript calculation ke liye worker threads often more suitable hote hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 5,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: `6. What are Worker Threads and Processes in Node.js?`,
    slug: '6-what-are-worker-threads-and-processes-in-nodejs',
    answer: `The notes explain worker threads and processes using CPU cores and the event loop.

A Node.js process has an event loop. Worker threads can be used for CPU-intensive work in parallel without blocking the event loop using multiple threads inside a process.

The notes show:

- CPU cores
- main Node.js process
- event loop
- worker thread pool
- worker threads
- asynchronous code

The notes explain that worker threads are useful when CPU-intensive tasks need to run in parallel without blocking the event loop.`,
    explanation: `Node.js provides different ways to perform work outside the main JavaScript execution flow. Two important concepts are **Worker Threads** and **Child Processes**.

A **Worker Thread** runs JavaScript in another thread within the same Node.js process. It is especially useful for CPU-intensive work such as large calculations, parsing, image processing, or other computational tasks that could otherwise keep the main event loop busy.

Example:

\`\`\`js
// main.js
const { Worker } = require("node:worker_threads");

const worker = new Worker("./worker.js");

worker.on("message", result => {
  console.log("Result:", result);
});
\`\`\`

Worker:

\`\`\`js
// worker.js
const { parentPort } = require("node:worker_threads");

let result = 0;

for (let i = 0; i < 1e8; i++) {
  result += i;
}

parentPort.postMessage(result);
\`\`\`

The main thread can continue handling other work while the worker performs the CPU-heavy calculation.

A **process**, on the other hand, has its own memory space. Node.js can create child processes using the \`child_process\` module.

Main differences:

| Worker Thread | Child Process |
|---|---|
| Runs in another thread | Runs as another process |
| Shares process resources in controlled ways | Has separate memory space |
| Good for CPU-intensive JS work | Good for running separate programs/scripts |
| Communication can use worker messaging | Communication can use IPC |

**Interview summary:**  
Worker threads are useful for CPU-heavy JavaScript work without blocking the event loop. Child processes are useful when you need a separate process or want to run external programs/scripts.`,
    explanationHindi: `Node.js mein main event loop ko block kiye bina heavy work karne ke liye **Worker Threads** aur **Child Processes** important concepts hain.

**Worker Thread** same Node.js process ke andar separate thread par JavaScript run karta hai. Ye CPU-intensive tasks ke liye useful hai, jaise heavy calculation, data processing, image processing etc.

Example:

\`\`\`js
const { Worker } = require("node:worker_threads");

const worker = new Worker("./worker.js");

worker.on("message", result => {
  console.log(result);
});
\`\`\`

Worker background thread mein calculation karega aur main thread doosre requests handle kar sakta hai.

**Child Process** separate process hota hai aur uski apni memory space hoti hai. Iska use external commands, scripts ya separate Node.js programs run karne ke liye bhi kiya ja sakta hai.

Main difference:

- Worker Thread → same process ke andar separate thread.
- Child Process → separate process aur separate memory space.

**Interview summary:**  
CPU-heavy JavaScript work ke liye Worker Threads useful hain, jabki external program/script ya isolated process ke liye Child Process useful hota hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 6,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: `7. What is a Child Process in Node.js?`,
    slug: '7-what-is-a-child-process-in-nodejs',
    answer: `A child process in Node.js allows us to run other programs or scripts from our application.

They run in separate processes with their own memory and communicate with the parent via IPC.

Node can use one program to start another process so that the other process has separate memory.

Example:

\`\`\`js
const cp = require("child_process");

const output = cp.execSync("node test.js");

console.log("output:", output);
\`\`\`

The notes also show:

\`\`\`text
test.js
console.log("this is test file")
\`\`\`

### Methods

- \`spawn()\` → create a child process to run any command, such as Node, Python, shell command.
- \`fork()\` → create a child process to run a Node.js script, with built-in communication.`,
    explanation: `The **Child Process module** allows a Node.js application to create and control separate operating-system processes.

It is useful when we want to execute another command, script, or Node.js program without doing that work directly inside the main process.

Node.js provides methods such as:

### \`exec()\`

Runs a command in a shell and collects the output.

\`\`\`js
const { exec } = require("node:child_process");

exec("node test.js", (error, stdout, stderr) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(stdout);
});
\`\`\`

### \`spawn()\`

Starts a process and provides streams for its input/output. It is useful when output can be large or continuous.

\`\`\`js
const { spawn } = require("node:child_process");

const child = spawn("node", ["test.js"]);

child.stdout.on("data", data => {
  console.log(data.toString());
});
\`\`\`

### \`fork()\`

Specifically starts another Node.js module and provides an IPC communication channel.

\`\`\`js
const { fork } = require("node:child_process");

const child = fork("./worker.js");

child.send({ message: "Hello" });
\`\`\`

**Interview summary:**  
Child processes provide process-level isolation and allow Node.js to execute commands, scripts, or other programs independently of the main process.`,
    explanationHindi: `Node.js ka **Child Process module** application ko separate operating-system process create aur control karne deta hai.

Iska use external commands, scripts ya another Node.js program run karne ke liye hota hai.

Important methods:

- \`exec()\` → shell command run karta hai aur output collect karta hai.
- \`spawn()\` → process start karta hai aur streams ke through output handle kar sakta hai.
- \`fork()\` → another Node.js module ko child process mein run karta hai aur IPC communication provide karta hai.

Example:

\`\`\`js
const { exec } = require("node:child_process");

exec("node test.js", (error, stdout) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(stdout);
});
\`\`\`

**Interview summary:**  
Child Process separate process create karke external commands, scripts ya Node.js programs run karne deta hai. Isse main process se process-level isolation milta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 7,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: `8. What is a Web Worker?`,
    slug: '8-what-is-a-web-worker',
    answer: `A web worker is a feature in browser/client-side JS that allows you to run JavaScript code in the background on a separate thread, without the main/UI thread.`,
    explanation: `A **Web Worker** is a browser feature that allows JavaScript to run in a background thread instead of the browser's main UI thread.

Normally, JavaScript that handles the UI runs on the main thread. If we perform a very heavy calculation there, the browser UI can become slow or unresponsive.

A Web Worker can move that calculation to a background thread.

Main file:

\`\`\`js
const worker = new Worker("worker.js");

worker.postMessage(100000000);

worker.onmessage = event => {
  console.log("Result:", event.data);
};
\`\`\`

Worker:

\`\`\`js
self.onmessage = event => {
  const n = event.data;

  let result = 0;

  for (let i = 0; i < n; i++) {
    result += i;
  }

  self.postMessage(result);
};
\`\`\`

The worker communicates with the main thread using \`postMessage()\` and message events.

Important interview point: a Web Worker does not directly manipulate the DOM like normal main-thread JavaScript. It is mainly useful for background computation.`,
    explanationHindi: `**Web Worker** browser ka feature hai jo JavaScript ko main/UI thread ke alawa background thread mein run karne deta hai.

Agar main thread par heavy calculation chalegi, to UI freeze ya slow ho sakti hai. Web Worker heavy calculation ko background mein execute kar sakta hai.

Main thread:

\`\`\`js
const worker = new Worker("worker.js");

worker.postMessage(100000000);

worker.onmessage = event => {
  console.log(event.data);
};
\`\`\`

Worker:

\`\`\`js
self.onmessage = event => {
  let result = 0;

  for (let i = 0; i < event.data; i++) {
    result += i;
  }

  self.postMessage(result);
};
\`\`\`

Worker aur main thread \`postMessage()\` ke through communicate karte hain.

Important: Web Worker normally directly DOM manipulate nahi karta. Ye mainly background computation ke liye use hota hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 8,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: `9. What are React Portals?`,
    slug: '9-what-are-react-portals',
    answer: `A React portal is a way to render a component's HTML outside its parent element in the DOM, while still keeping it part of the same React tree.

The notes explain that portals are useful when you want to render something outside the normal parent DOM location.`,
    explanation: `A **React Portal** allows a component to render its UI into a different DOM node outside its normal parent DOM hierarchy.

Normally:

\`\`\`text
App
 └── Parent
      └── Modal
\`\`\`

With a portal, the Modal can visually/render-wise be placed directly under another DOM node such as \`#modal-root\`, while it still belongs to the same React component tree.

Example:

\`\`\`jsx
import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById("modal-root")
  );
}
\`\`\`

HTML:

\`\`\`html
<div id="root"></div>
<div id="modal-root"></div>
\`\`\`

Portals are commonly useful for:

- Modals.
- Dialog boxes.
- Tooltips.
- Dropdowns.
- Toast/notification containers.

One important interview point is that although the DOM node is rendered somewhere else, React still considers the component part of the same React tree. React event propagation also follows the React tree, not simply the physical DOM placement.`,
    explanationHindi: `**React Portal** ka use component ke UI ko normal parent DOM ke bahar kisi doosre DOM node mein render karne ke liye hota hai.

Example:

\`\`\`jsx
import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById("modal-root")
  );
}
\`\`\`

HTML:

\`\`\`html
<div id="root"></div>
<div id="modal-root"></div>
\`\`\`

Portals commonly use hote hain:

- Modal.
- Dialog.
- Tooltip.
- Dropdown.
- Toast.

Important interview point: DOM mein component ki location alag ho sakti hai, lekin React tree mein wo original component relationship ka part rehta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 9,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: `10. What are Side Effects in React?`,
    slug: '10-what-are-side-effects-in-react',
    answer: `Side effects in React are operations that are not related only to rendering UI.

Examples mentioned in the notes:

- HTTP requests (\`get/post/put/delete\`)
- storing data in browser storage
- working with timer functions

The notes explain that React components should be pure functions when possible, meaning same input gives same output.

Side effects need special handling and \`useEffect()\` is used to handle them.

If code talks to the outside world, such as an API, browser storage, timers, or subscriptions, it is a side effect and should be placed in an effect.`,
    explanation: `A **side effect** is an operation that happens as a result of rendering or component behavior but is not simply calculating JSX from props and state.

React rendering should ideally be predictable and free from external side effects. Examples of side effects include:

- API/network requests.
- Starting or stopping timers.
- Updating browser storage.
- Subscribing to events.
- Connecting to external systems.
- Synchronizing React state with something outside React.

For example:

\`\`\`jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return <div>{users.length} users</div>;
}
\`\`\`

The API request is a side effect. \`useEffect()\` tells React that this work should happen after rendering rather than as part of the pure render calculation.

Cleanup is important for subscriptions and timers:

\`\`\`jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(id);
  };
}, []);
\`\`\`

Without cleanup, the timer could continue running after the component is removed.

**Interview summary:**  
Side effects are operations that interact with systems outside React's pure rendering process. \`useEffect()\` is commonly used to synchronize a component with those external systems.`,
    explanationHindi: `React mein **side effect** aisa operation hai jo sirf JSX calculate karne tak limited nahi hota aur kisi external system ke saath interaction karta hai.

Examples:

- API request.
- Timer.
- Browser storage.
- Event subscription.
- External connection.

Example:

\`\`\`jsx
useEffect(() => {
  fetch("/api/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);
\`\`\`

Yahan API request side effect hai.

Timer ke case mein cleanup bhi important hai:

\`\`\`jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(id);
  };
}, []);
\`\`\`

Cleanup se component unmount hone ke baad timer continue nahi karta.

**Interview summary:**  
Side effect React ke pure rendering ke bahar ka external work hai. \`useEffect()\` ka use component ko external systems ke saath synchronize karne ke liye commonly kiya jata hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 10,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: `11. What are React Web Workers?`,
    slug: '11-what-are-react-web-workers',
    answer: `A React Web Worker is just a normal web worker used inside a React app to run heavy logic (math, data processing, crypto etc.) outside the main UI thread.

The notes explain that React + background worker can be used for heavy tasks because the worker runs in the background.`,
    explanation: `A **React Web Worker** is not a separate React feature. It means using the browser's Web Worker API inside a React application.

The purpose is to move CPU-intensive browser-side work away from the main UI thread.

For example, imagine a React application that processes a very large dataset:

\`\`\`text
React UI Thread
      |
      | sends data
      v
Web Worker
      |
      | heavy calculation
      v
Result
      |
      v
React UI
\`\`\`

A simple React integration can look like:

\`\`\`jsx
import { useEffect, useState } from "react";

function App() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const worker = new Worker(
      new URL("./worker.js", import.meta.url)
    );

    worker.onmessage = event => {
      setResult(event.data);
    };

    worker.postMessage(100000000);

    return () => {
      worker.terminate();
    };
  }, []);

  return <div>{result}</div>;
}
\`\`\`

The worker can perform the expensive calculation and send the result back using \`postMessage()\`.

**Interview point:** React still runs the UI on the main browser thread. The Web Worker is used beside React to move heavy computation away from that thread.`,
    explanationHindi: `**React Web Worker** React ka separate feature nahi hai. Iska matlab hai React application ke andar browser ka Web Worker API use karna.

Iska main purpose heavy CPU work ko main UI thread se bahar run karna hai.

Flow:

\`\`\`text
React UI
   ↓
Web Worker ko data
   ↓
Heavy calculation
   ↓
Result
   ↓
React UI
\`\`\`

Example:

\`\`\`jsx
useEffect(() => {
  const worker = new Worker(
    new URL("./worker.js", import.meta.url)
  );

  worker.onmessage = event => {
    setResult(event.data);
  };

  worker.postMessage(100000000);

  return () => {
    worker.terminate();
  };
}, []);
\`\`\`

Worker heavy calculation karega aur \`postMessage()\` ke through result React ko bhej sakta hai.

Important interview point: React UI main thread par run hoti hai; Web Worker heavy calculation ko background thread mein move karta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 11,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: `12. What is Express Session? Explain Token vs Session Authentication.`,
    slug: '12-what-is-express-session-explain-token-vs-session-authentication',
    answer: `## Session Authentication — Stateful Authentication

Flow shown in the notes:

\`\`\`text
User
  ↓
Login request
  ↓
Server
  ↓
Check email/password
  ↓
Generate session ID with user details
  ↓
Response containing session ID
\`\`\`

The user then sends the session ID with requests and the server checks the session.

The notes explain:

- when the user logs in, the database email/password is checked.
- a session ID is generated for the user.
- the session stores user details.
- when the user makes another request, the user ID/session ID is checked.
- when the user logs out, the session data is removed.

The notes mention that the session ID can be stored in a database or memory database such as Redis.

### Drawback mentioned

If session data is stored in memory, restarting the server can remove the session data and users may be logged out.

---

## JWT / Token Authentication — Stateless

Flow shown in the notes:

\`\`\`text
User
  ↓
Login
  ↓
Server checks email/password
  ↓
Generate token with id, name, secret key
  ↓
Send token to user
  ↓
User stores token and sends it with every request
  ↓
Server verifies token using secret key
\`\`\`

The notes mention:

### Pros

- memory efficient
- stateless
- long-term auth can be supported

### Cons

- less secure compared with the approach described in the notes.`,
    explanation: `**Session authentication** and **token authentication** are two common ways to maintain authentication after a user logs in.

### Session-based authentication

HTTP is stateless, so the server does not automatically remember previous requests. With sessions, the server creates a session after successful login.

Typical flow:

\`\`\`text
Client
  |
  | username/password
  v
Server
  |
  | validate credentials
  v
Create Session
  |
  | session ID
  v
Client Cookie
\`\`\`

For later requests:

\`\`\`text
Client
  |
  | session cookie
  v
Server
  |
  | lookup session
  v
Authenticated User
\`\`\`

In Express, a common implementation is \`express-session\`:

\`\`\`js
const session = require("express-session");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
\`\`\`

The session data can be stored in a dedicated session store such as Redis rather than relying on process memory.

### Token/JWT authentication

With token authentication, after login the server creates a signed token. The client sends the token with later requests.

Typical flow:

\`\`\`text
Login
  ↓
Validate credentials
  ↓
Create signed token
  ↓
Client stores token
  ↓
Client sends token
  ↓
Server verifies token
  ↓
Request allowed
\`\`\`

Example concept:

\`\`\`http
Authorization: Bearer <token>
\`\`\`

### Main differences

| Session | Token/JWT |
|---|---|
| Server maintains session state | Server can verify token without storing a session record for every token |
| Session ID commonly stored in cookie | Token may be sent in an Authorization header or cookie |
| Requires session-store strategy for multiple servers | Can simplify horizontal scaling, but token lifecycle/revocation still needs design |
| Logout can invalidate the server-side session | Immediate revocation needs additional strategy |

Security depends on implementation. Neither approach is automatically secure or insecure. HTTPS, secure cookie configuration, CSRF considerations, token storage, expiration, rotation, and proper credential handling all matter.`,
    explanationHindi: `**Session authentication** aur **Token/JWT authentication** login ke baad user ko authenticated maintain karne ke do common methods hain.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 12,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: `13. What is \`Object.create()\`?`,
    slug: '13-what-is-objectcreate',
    answer: `\`Object.create()\` makes a new object with another object as its prototype, so it can reuse the prototype's properties and methods.

Example:

\`\`\`js
const animal = {
  eat: true,

  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal);

console.log(dog.eat); // true
dog.walk();           // "Animal walks"
\`\`\`

The notes explain that:

\`\`\`js
const dog = Object.create(animal);
\`\`\`

means the dog's prototype is \`animal\`.

The dog can use properties/methods from the animal prototype.

The notes also show that if the dog has its own method/property, it can use that as well.`,
    explanation: `\`Object.create()\` creates a new object and explicitly sets another object as its prototype.

Example:

\`\`\`js
const animal = {
  eat: true,

  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal);

console.log(dog.eat);
dog.walk();
\`\`\`

\`dog\` does not directly contain \`eat\` or \`walk\`. JavaScript looks at its prototype, which is \`animal\`, and finds those properties there.

If we add a property directly to \`dog\`:

\`\`\`js
dog.name = "Tommy";
\`\`\`

then \`name\` belongs directly to \`dog\`, while \`eat\` and \`walk\` are inherited.

This is useful when you want explicit prototype-based inheritance without calling a constructor.

**Important interview point:** \`Object.create()\` does not clone the source object. It creates a new object whose prototype is the supplied object.`,
    explanationHindi: `\`Object.create()\` ek new object create karta hai aur supplied object ko uska prototype set karta hai.

\`\`\`js
const animal = {
  eat: true,

  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal);

dog.walk();
\`\`\`

\`dog\` ke andar directly \`walk()\` nahi hai. JavaScript uske prototype \`animal\` mein search karta hai aur method mil jata hai.

Agar:

\`\`\`js
dog.name = "Tommy";
\`\`\`

to \`name\` directly \`dog\` ki property hogi, jabki \`eat\` aur \`walk\` prototype se inherited honge.

Important: \`Object.create()\` source object ka copy/clone nahi banata. Ye new object banakar supplied object ko prototype bana deta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 13,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: `14. What is the difference between Encoding/Decoding and Encryption/Decryption?`,
    slug: '14-what-is-the-difference-between-encodingdecoding-and-encryptiondecryption',
    answer: `### Encoding / Decoding

Used to convert data into a different format for transmission, not for security.

### Encryption / Decryption

Makes data unreadable without the correct key.

Without the key, you cannot easily decrypt it.

Goal is confidentiality and security.`,
    explanation: `**Encoding** and **encryption** may both make data look different, but their purposes are completely different.

### Encoding

Encoding converts data into another representation or format so it can be safely transmitted, stored, or interpreted by another system.

It does **not** provide confidentiality.

Example: Base64.

\`\`\`js
const encoded = Buffer
  .from("Hello")
  .toString("base64");

console.log(encoded);
\`\`\`

Base64 can be decoded by anyone who has the encoded value. It is not encryption.

### Decoding

Decoding converts the encoded representation back to the original data.

### Encryption

Encryption is a security mechanism. It transforms plaintext into ciphertext using an algorithm and a key.

Only someone with the appropriate key/cryptographic information should be able to recover the original plaintext.

Conceptually:

\`\`\`text
Plaintext
   ↓
Encryption + Key
   ↓
Ciphertext
   ↓
Decryption + Key
   ↓
Plaintext
\`\`\`

For example, HTTPS/TLS uses cryptographic mechanisms to protect communication in transit.

**Interview summary:**

- Encoding → changes representation; not security.
- Decoding → reverses encoding.
- Encryption → protects confidentiality.
- Decryption → recovers protected plaintext using the required cryptographic key.`,
    explanationHindi: `**Encoding** aur **Encryption** dono data ko different form mein dikha sakte hain, lekin purpose completely different hota hai.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 14,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: `15. Explain the HTTP Status Code Categories.`,
    slug: '15-explain-the-http-status-code-categories',
    answer: `The notes divide HTTP status codes into five categories:

1. **100 — Informational**
   - Request received / continuing process.

2. **200 — Success**
   - Request was successful.

3. **300 — Redirection**
   - Further action is needed, for example redirect.

4. **400 — Client Error**
   - Problem with the client/request.

5. **500 — Server Error**
   - Problem with the server.`,
    explanation: `HTTP status codes are three-digit codes returned by a server to describe the result of an HTTP request.

They are divided into five major categories.

### 1xx — Informational

These indicate that the request has been received and processing can continue.

Examples:

- \`100 Continue\`

### 2xx — Success

These indicate that the request was successfully processed.

Common examples:

- \`200 OK\` → request succeeded.
- \`201 Created\` → a new resource was created.
- \`204 No Content\` → request succeeded but there is no response body.

Example:

\`\`\`http
GET /users
HTTP/1.1 200 OK
\`\`\`

### 3xx — Redirection

These indicate that the client needs to follow a different location or that the requested resource has another representation/location.

Examples:

- \`301 Moved Permanently\`
- \`302 Found\`
- \`304 Not Modified\`

### 4xx — Client Errors

These indicate that there is a problem with the request from the client side.

Common examples:

- \`400 Bad Request\` → request is invalid.
- \`401 Unauthorized\` → authentication is required or invalid.
- \`403 Forbidden\` → server understood the request but refuses access.
- \`404 Not Found\` → resource was not found.
- \`429 Too Many Requests\` → rate limit exceeded.

### 5xx — Server Errors

These indicate that the server failed to successfully handle a valid request.

Examples:

- \`500 Internal Server Error\`
- \`502 Bad Gateway\`
- \`503 Service Unavailable\`
- \`504 Gateway Timeout\`

### Interview example

If a client requests:

\`\`\`http
GET /api/users/123
\`\`\`

and the user exists:

\`\`\`http
200 OK
\`\`\`

If the user does not exist:

\`\`\`http
404 Not Found
\`\`\`

If the server crashes while processing:

\`\`\`http
500 Internal Server Error
\`\`\`

**Interview summary:**

\`\`\`text
1xx → Informational
2xx → Success
3xx → Redirection
4xx → Client error
5xx → Server error
\`\`\``,
    explanationHindi: `HTTP status code three-digit number hota hai jo server client ko batata hai ki request ka result kya raha.

Five major categories hoti hain:`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 15,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-2',
    question: `16. What is Exception Handling in JavaScript?`,
    slug: '16-what-is-exception-handling-in-javascript',
    answer: `Exception handling ka matlab hai error hone par program ko crash hone se bachana aur us error ko handle karna (manage karna).

Exception handling in JavaScript is the process of handling runtime errors to prevent the program from crashing completely.

Example:

\`\`\`js
try {
  console.log("Hello");
  throw new Error("Something went wrong");
} catch (error) {
  console.log("Error:", error.message);
} finally {
  console.log("Done");
}
\`\`\``,
    explanation: `Exception handling means catching and handling runtime errors so the application can fail safely. In JavaScript we commonly use try, catch, and finally. try contains risky code, catch handles the error, and finally is useful for cleanup. In async code, rejected Promises can also be handled with catch or try/catch around await.`,
    explanationHindi: `Exception handling ka matlab runtime error ko safely handle karna hai, taaki program unexpected error par crash na ho. try mein risky code, catch mein error handling aur finally mein cleanup hota hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 1,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-2',
    question: `17. What are the Types of Tokens?`,
    slug: '17-what-are-the-types-of-tokens',
    answer: `Types of token:

1) Access token
- Short-lived token (usually few minutes to hours).
- Client ko resource/API access karne ki permission deta hai.
- Example: API request mein Authorization + Bearer token.

2) Refresh token
- Long-lived token (days/weeks).
- Access token expire hone par naya access token generate karne ke liye use hota hai.
- Usually stored securely (e.g. HttpOnly cookies).

3) ID Token (JWT-spec, OpenID Connect)
- Mainly identity verification ke liye.
- User ke information (claims) contain karta hai: username, email, role etc.
- Example: ID token after Google/Facebook login.`,
    explanation: `The three common token types are access token, refresh token, and ID token. An access token is used to access protected APIs. A refresh token is used to get a new access token after expiry. An ID token contains identity information about the user and is commonly used with OpenID Connect.`,
    explanationHindi: `Access token protected API ke liye hota hai. Refresh token expire hue access token ka naya token lene ke liye hota hai. ID token user ki identity information deta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 2,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-2',
    question: `18. What is Pub/Sub in Redis?`,
    slug: '18-what-is-pubsub-in-redis',
    answer: `Redis Pub/Sub (Publishers / Subscribers)

Redis Pub/Sub ek real-time messaging pattern hai, jahan publishers messages ko channels par send karte hain aur subscribers active message ko un channels par receive karte hain jinhe they are subscribed to, without knowing each other.`,
    explanation: `Redis Pub/Sub is a messaging system. A publisher sends a message to a channel and subscribers listening to that channel receive it. It is useful for real-time notifications and communication between services. Normal Pub/Sub is not a durable queue, so missed messages are not stored for disconnected subscribers.`,
    explanationHindi: `Redis Pub/Sub mein publisher channel par message bhejta hai aur subscribers us channel ke messages receive karte hain. Ye real-time notification aur service communication ke liye useful hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 3,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-2',
    question: `19. What is the Difference Between Authentication and Authorization?`,
    slug: '19-what-is-the-difference-between-authentication-and-authorization',
    answer: `Authentication & Authorization ka difference:

Authentication verifies the user's identity.
Authorization means what actions the authenticated user is allowed to access.`,
    explanation: `Authentication answers 'Who are you?' and verifies identity. Authorization answers 'What are you allowed to do?' and checks permissions. Login is authentication; deciding whether the logged-in user can access an admin route is authorization.`,
    explanationHindi: `Authentication mein user ki identity verify hoti hai. Authorization mein check hota hai ki authenticated user ko kya access ya action allowed hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 4,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-2',
    question: `20. What is WebRTC?`,
    slug: '20-what-is-webrtc',
    answer: `WebRTC (Web Real-Time Communication) ek technology hai jo peer-to-peer audio, video and data sharing directly by browsers & devices, without requiring an intermediate server for media transmission.

Use Cases:
- Video / voice calling (Google Meet)
- File sharing (chat apps)
- Online gaming
- Live streaming / broadcasting`,
    explanation: `WebRTC is a technology for real-time audio, video, and data communication between browsers or devices. It is commonly used for video calls, voice calls, and real-time communication. Signaling is still needed to establish the connection, and STUN/TURN can help when direct connection is not possible.`,
    explanationHindi: `WebRTC browser/device ke beech real-time audio, video aur data communication ke liye use hota hai. Video call, voice call aur live communication iske examples hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 5,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-2',
    question: `21. What is DevOps?`,
    slug: '21-what-is-devops',
    answer: `DevOps = Development + Operations = fast and automated software delivery.

DevOps ek process hai jisme development team aur operations team work together to deliver software faster, with fewer errors and automation.

DevOps tools:
1) Version control → Git, GitHub, GitLab
2) CI/CD → GitHub Actions, GitLab CI, Jenkins
3) Containerization → Docker
4) Orchestration → Kubernetes
5) Cloud → AWS, Azure, GCP`,
    explanation: `DevOps is a combination of development, operations, automation, and collaboration practices. The goal is to deliver software faster and more reliably. Git, CI/CD, Docker, Kubernetes, and cloud platforms are common parts of a DevOps workflow.`,
    explanationHindi: `DevOps development aur operations ko collaboration aur automation ke saath combine karta hai. Iska goal software ko fast aur reliably deliver karna hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 6,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-2',
    question: `22. What are Git, GitHub and Jira?`,
    slug: '22-what-are-git-github-and-jira',
    answer: `Git → local version control system. Code changes, branches, commits, merge karne ke liye.

GitHub → Git repositories ko online host karne ke liye. Collaboration, Pull Request, code review etc.

Jira → project management aur issue tracking ke liye. Bugs, tasks, stories, sprint progress etc.`,
    explanation: `Git is a version-control system, GitHub is a platform for hosting and collaborating on Git repositories, and Jira is a project and issue-tracking tool. A common flow is Jira ticket, Git branch, commit, GitHub pull request, review, and merge.`,
    explanationHindi: `Git version control hai, GitHub repository hosting/collaboration platform hai aur Jira task, bug aur sprint tracking ke liye use hota hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 7,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-2',
    question: `23. Can We Perform Join Operation in MongoDB?`,
    slug: '23-can-we-perform-join-operation-in-mongodb',
    answer: `Yes, MongoDB mein join operation perform kar sakte hain.

MongoDB mein \`$lookup\` aggregation ke through join operation perform hota hai.

Mongoose mein \`populate()\` use karke related data fetch kar sakte hain.`,
    explanation: `Yes. MongoDB can combine related data using the $lookup aggregation stage. In Mongoose, populate() is commonly used to fetch referenced documents. MongoDB can also embed related data when that design is better for the access pattern.`,
    explanationHindi: `MongoDB mein $lookup se join-like operation aur Mongoose mein populate() se related document fetch kar sakte hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 8,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-2',
    question: `24. Material UI vs shadcn/ui`,
    slug: '24-material-ui-vs-shadcnui',
    answer: `MUI:
- Readymade React components based on Material Design.
- Faster for production apps.

shadcn/ui:
- Built with Tailwind CSS + Radix UI.
- Highly customizable and modern styling.

MUI = easy setup, shadcn = better design control.`,
    explanation: `MUI provides ready-made React components and follows Material Design. shadcn/ui gives more control over component code and styling and is built around Tailwind CSS and Radix primitives. MUI is convenient for fast consistent UI; shadcn/ui is useful when customization is important.`,
    explanationHindi: `MUI ready-made components aur fast development ke liye useful hai. shadcn/ui zyada customization aur design control deta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 9,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-2',
    question: `25. What are Server Actions in Next.js?`,
    slug: '25-what-are-server-actions-in-nextjs',
    answer: `Server Actions are server-side functions in Next.js that let us send code/data directly from the frontend to the backend without creating a separate API route.

Server Actions are server-side functions in Next.js that let us send code directly from the frontend without creating a separate API route.`,
    explanation: `Server Actions are server-side functions in Next.js that can be called from supported UI or form flows. They are useful for server-side mutations such as creating or updating data. Input validation and authorization are still required.`,
    explanationHindi: `Server Actions Next.js ke server-side functions hain jo form/data mutation jaise kaam ke liye use hote hain. Har small operation ke liye separate API route banana zaroori nahi hota.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 10,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-2',
    question: `26. What is Pagination in Node.js + React?`,
    slug: '26-what-is-pagination-in-nodejs-react',
    answer: `Pagination means large data ko pages mein divide karna, taaki performance better ho.

React page number bhejta hai → Node backend.
Backend \`skip\` use karke required data fetch karta hai.

- page → kaunsi page chahiye
- limit → ek page mein kitne records
- skip → pehle kitne records skip
- total page → total pages chahiye

Frontend mein page number/limit send hota hai aur backend data return karta hai.`,
    explanation: `Pagination divides a large result set into smaller pages. The frontend sends a page number, and the backend uses values such as page, limit, and skip to return only the required records. For very large datasets, cursor-based pagination can be better than large skip values.`,
    explanationHindi: `Pagination large data ko pages mein divide karta hai. page, limit aur skip se required records fetch kiye ja sakte hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 11,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-2',
    question: `27. What is the Aggregation Framework in MongoDB?`,
    slug: '27-what-is-the-aggregation-framework-in-mongodb',
    answer: `MongoDB aggregation framework kya karta hai?

MongoDB mein aggregation framework use karke data ko filter, group, calculate kar sakte hain. Jaise count, total, group.

Important stages:
- \`$match\` → data filter karta hai
- \`$group\` → data ko group karke count/sum/total nikalta hai
- \`$project\` → required fields select/reshape karta hai
- \`$lookup\` → dusre collection se data join karta hai

\`$match → $group → $project → $lookup\``,
    explanation: `MongoDB aggregation is a pipeline for filtering, grouping, calculating, and reshaping data. Common stages include $match, $group, $project, and $lookup. It is useful for reports, totals, dashboards, and analytics.`,
    explanationHindi: `Aggregation MongoDB ka data-processing pipeline hai. $match filter, $group calculation, $project output shape aur $lookup related data ke liye use hota hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 12,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-2',
    question: `28. What are MongoDB Operators?`,
    slug: '28-what-are-mongodb-operators',
    answer: `MongoDB operators are used to filter, compare, update and manipulate data.

1) Comparison operators:
- \`$eq\` → barabar (equal)
- \`$ne\` → barabar nahi
- \`$gt\` → greater than (zyada)
- \`$gte\` → greater than or equal
- \`$lt\` → less than (kam)
- \`$lte\` → less than or equal

2) Logical operators:
- \`$and\` → sab condition true
- \`$or\` → koi ek condition true
- \`$not\` → condition ka opposite
- \`$nor\` → sab false

3) Array operators:
- \`$in\` → list mein value hai ya nahi
- \`$nin\` → list mein value nahi hai
- \`$all\` → array mein specified values
- \`$size\` → array ka size

4) Element operators:
- \`$exists\` → field exist karta hai ya nahi
- \`$type\` → field ka data type check karta hai

5) Update operators:
- \`$set\` → field update/add
- \`$unset\` → field delete
- \`$inc\` → value increase/decrease
- \`$push\` → array mein add
- \`$pull\` → array se remove`,
    explanation: `MongoDB operators are expressions used for filtering and updating documents. Comparison operators compare values, logical operators combine conditions, array operators work with arrays, and update operators such as $set, $inc, $push, and $pull modify data.`,
    explanationHindi: `MongoDB operators data ko filter, compare aur update karne ke liye use hote hain. $eq, $gt, $and, $in, $set, $inc, $push jaise operators common hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 13,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-2',
    question: `29. What are Template Engines in Node.js?`,
    slug: '29-what-are-template-engines-in-nodejs',
    answer: `Template engines are used to create dynamic HTML pages using server-side data in Node.js.

Common engines are:
- EJS
- Pug
- Handlebars
- Mustache`,
    explanation: `A template engine combines a server-side template with data and produces dynamic HTML. EJS, Pug, Handlebars, and Mustache are common examples. They are mainly useful in server-rendered applications.`,
    explanationHindi: `Template engine server-side data ko HTML template ke saath combine karke dynamic HTML banata hai. EJS, Pug aur Handlebars examples hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 14,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-2',
    question: `30. What is the V8 Engine?`,
    slug: '30-what-is-the-v8-engine',
    answer: `V8 engine ek JavaScript engine hai jo JavaScript code ko machine code mein compile karke execute karta hai. Ye Chrome aur Node.js mein use hota hai.

V8 JavaScript code ko machine code mein convert karta hai.`,
    explanation: `V8 is Google's JavaScript engine. Chrome and Node.js use V8 to execute JavaScript. Node.js adds server-side APIs such as filesystem, networking, and process APIs around the engine.`,
    explanationHindi: `V8 JavaScript engine hai jo Chrome aur Node.js mein JavaScript execute karta hai. Node.js V8 ke upar server-side APIs provide karta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 15,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-3',
    question: `31. Event-Driven Programming vs Event-Driven Architecture`,
    slug: '31-event-driven-programming-vs-event-driven-architecture',
    answer: `Event-driven programming is a coding style where the program reacts to events like clicks, requests and messages.

Example:
- Button click in React
- API request handled in Node.js
- \`onclick\`, \`onchange\`

Event-Driven Architecture (EDA) is a system design approach where different services communicate by producing and consuming events.

Example:
Order placed → event published → payment service listens → notification service listens.

Tools: Kafka, RabbitMQ, AWS SNS/SQS.`,
    explanation: `Event-driven programming is a coding style where code reacts to events such as clicks or requests. Event-driven architecture is a system-level design where services communicate through events. Kafka and RabbitMQ are common technologies for this style of architecture.`,
    explanationHindi: `Event-driven programming code level par events handle karta hai. Event-driven architecture mein services events ke through communicate karti hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 1,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-3',
    question: `32. What is a REST API?`,
    slug: '32-what-is-a-rest-api',
    answer: `REST API is an architectural style that allows clients to communicate with services using HTTP methods to perform CRUD operations on resources.

HTTP methods:
- GET
- POST
- PUT → used to replace entire resource
- PATCH → used to partially update resource
- DELETE`,
    explanation: `A REST API is a resource-oriented API style that uses HTTP methods such as GET, POST, PUT, PATCH, and DELETE. It commonly uses JSON and HTTP status codes and aims for consistent, stateless communication.`,
    explanationHindi: `REST API resource-oriented API style hai jo GET, POST, PUT, PATCH aur DELETE jaise HTTP methods use karta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 2,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-3',
    question: `33. What is Non-Blocking I/O and How Does Node.js Achieve It?`,
    slug: '33-what-is-non-blocking-io-and-how-does-nodejs-achieve-it',
    answer: `Non-blocking I/O allows a program to perform other tasks while waiting for I/O operations to complete, improving performance and scalability.

Node.js achieves non-blocking I/O using the event loop and async APIs (callbacks, promises, async/await).

1) Node.js ka event loop background mein I/O handle karta hai.
2) File, DB, network ka kaam background threads mein bhejta hai.
3) Jab kaam complete hota hai, callbacks queue mein aate hain.
4) Node.js event loop unko execute karta hai.

Streams are used for large files (2–3 GB), chunk-by-chunk upload to avoid loading the entire file into memory.`,
    explanation: `Non-blocking I/O means Node.js can continue other work while waiting for I/O such as a database or network operation. The event loop and Node's asynchronous runtime coordinate this work. CPU-heavy JavaScript can still block the main event loop.`,
    explanationHindi: `Non-blocking I/O mein Node.js I/O ka wait karte hue doosre kaam handle kar sakta hai. Event loop aur async APIs ismein important hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 3,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-3',
    question: `34. How Do You Upload Large Files (2–3 GB) in Node.js?`,
    slug: '34-how-do-you-upload-large-files-23-gb-in-nodejs',
    answer: `Large files are uploaded in Node.js using Streams & chunk-by-chunk uploads to avoid loading the entire file into memory.`,
    explanation: `For multi-gigabyte files, use streaming or chunked uploads instead of loading the whole file into memory. This keeps memory usage low. Multipart uploads also make it possible to retry individual chunks.`,
    explanationHindi: `Large files ko stream ya chunks mein upload karna chahiye, taaki poori file memory mein load na ho.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 4,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-3',
    question: `35. What is OAuth Authentication?`,
    slug: '35-what-is-oauth-authentication',
    answer: `OAuth allows users to authenticate using third-party providers like Google or GitHub without sharing their provider password with the application.

Steps:
1) User "Login with Google" karta hai.
2) App user ko Google login page par redirect karti hai.
3) User Google mein login karta hai + permission deta hai.
4) Google app ko authorization code/access token deta hai.
5) App token exchange/verify karke user information leta hai.
6) App apna session/token create karke user ko login kar deta hai.`,
    explanation: `OAuth is mainly an authorization framework. A common login flow redirects the user to a provider such as Google, receives an authorization code, exchanges it for tokens, and obtains verified identity information. OpenID Connect is commonly used when the goal is authentication.`,
    explanationHindi: `OAuth flow mein user Google/GitHub jaise provider par login karta hai aur app authorization result ke through user information/session banati hai. Provider ka password app ko nahi milta.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 5,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-3',
    question: `36. How Do You Handle Multiple Roles (User, Vendor, Admin)?`,
    slug: '36-how-do-you-handle-multiple-roles-user-vendor-admin',
    answer: `Multiple roles ko user ko role assign karke aur authorization mein role check karke handle karte hain.

Steps:
1) User login/signup karta hai.
2) User ke saath role store hota hai: user/vendor/admin.
3) Login ke baad authentication mein role stored hota hai.
4) Protected routes par role-check middleware lagta hai.
5) Allowed role hai → access; nahi hai → 403 Forbidden.`,
    explanation: `Multiple roles are usually handled with role-based access control. The user has a role such as user, vendor, or admin, and backend middleware checks that role before allowing protected actions. Frontend checks alone are not security.`,
    explanationHindi: `Multiple roles ko RBAC se handle kar sakte hain. User ka role user/vendor/admin ho sakta hai aur backend middleware permission check karta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 6,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-3',
    question: `37. How Do You Implement Real-Time Communication in Node.js?`,
    slug: '37-how-do-you-implement-real-time-communication-in-nodejs',
    answer: `Real-time communication means data/events client aur server ke beech very low delay ke saath exchange karna.

Node.js mein Socket.IO / WebSocket use kar sakte hain.

Use cases:
- Live tracking
- Chat
- Notifications
- Real-time applications`,
    explanation: `Node.js can provide real-time communication using WebSocket or Socket.IO. A persistent connection lets the server push events to clients. Chat, live tracking, and notifications are common examples.`,
    explanationHindi: `Node.js mein WebSocket ya Socket.IO se real-time communication implement kar sakte hain. Chat, live tracking aur notifications common examples hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 7,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-3',
    question: `38. What is the Difference Between Promise.all() and Promise.allSettled?`,
    slug: '38-what-is-the-difference-between-promiseall-and-promiseallsettled',
    answer: `Promise.all vs Promise.allSettled:

\`Promise.all\` mein agar koi ek promise reject ho jaye to complete result reject ho jata hai. Saare promises ka result same order mein return hota hai.

\`Promise.allSettled\` mein har promise ka result milta hai, chahe fulfilled ho ya rejected.

Result:
\`\`\`js
[
  { status: "fulfilled", value: ... },
  { status: "rejected", reason: ... }
]
\`\`\`

\`Promise.race\` → jo promise sabse pehle settle hota hai uska result deta hai.`,
    explanation: `Promise.all is useful when all operations are required; if one rejects, the returned Promise rejects. Promise.allSettled waits for every Promise and reports whether each fulfilled or rejected. Promise.race settles when the first Promise settles.`,
    explanationHindi: `Promise.all mein ek promise reject hone par overall result reject ho sakta hai. Promise.allSettled sabhi promises ka fulfilled/rejected status return karta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 8,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-3',
    question: `39. What is the Temporal Dead Zone (TDZ)?`,
    slug: '39-what-is-the-temporal-dead-zone-tdz',
    answer: `Temporal Dead Zone (TDZ) — variable declared but not usable.

\`let\` aur \`const\` ke case mein variable declaration se pehle access nahi kar sakte.

Variable scope mein exist karta hai, lekin initialize hone tak inaccessible hota hai.

Temporal Dead Zone is the period where a variable exists but cannot be accessed before its declaration.`,
    explanation: `The Temporal Dead Zone is the period between entering a block scope and reaching a let or const declaration. Accessing the variable during this period causes a ReferenceError.`,
    explanationHindi: `TDZ mein let/const variable declaration se pehle access nahi kiya ja sakta. Access karne par ReferenceError milta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 9,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-3',
    question: `40. What are the \`req\` Object Properties in Express?`,
    slug: '40-what-are-the-req-object-properties-in-express',
    answer: `Express \`req\` object mein incoming request ki information hoti hai.

- \`req.body\` → body data (POST/PUT/PATCH)
- \`req.headers\` → auth token, content-type, device info etc.
- \`req.method\` → GET, POST, PUT, DELETE
- \`req.path\` → actual request path
- \`req.ip\` → client IP address
- \`req.cookies\` → cookies
- \`req.user\` → authentication ke baad custom property (JWT verify ke baad)`,
    explanation: `Express's req object contains incoming request data. Common properties are req.body, req.params, req.query, req.headers, req.method, req.path, req.ip, and application-specific properties such as req.user added by authentication middleware.`,
    explanationHindi: `Express req object incoming request ki information rakhta hai, jaise body, params, query, headers, method aur user.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 10,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-3',
    question: `41. What are Common Challenges Faced in a React Project?`,
    slug: '41-what-are-common-challenges-faced-in-a-react-project',
    answer: `1) State management complexity
- Large app mein props se state handle karna mushkil ho jata hai.
- Context API / Redux toolkit use karte hain.

2) Performance issues
- Unnecessary re-renders ko control karna hota hai.
- \`useMemo\`, \`useCallback\` and proper \`key\` usage.

3) API integration
- API handling aur error handling.
- Centralized API service, loaders, error handling.

4) Authentication & Authorization
- Protected routes and role-based access.

5) Managing Side Effects
- Incorrect dependencies aur cleanup issues.
- Proper dependency arrays and cleanup functions.`,
    explanation: `Common React challenges include state management, unnecessary re-renders, API loading and error handling, authentication, and side effects. The solution depends on the project: use suitable state management, measure performance, centralize API handling, and keep authorization on the backend.`,
    explanationHindi: `React project mein state management, performance, API handling, authentication aur side effects common challenges hain. Inke liye suitable state management, profiling aur proper API/effect handling use karte hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 11,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-3',
    question: `42. What is a Browser Polyfill?`,
    slug: '42-what-is-a-browser-polyfill',
    answer: `Polyfills are JavaScript code that provides modern features to older browsers that do not support them natively.

Reason: React performance/compatibility.

Polyfill old browser mein unsupported modern feature provide karta hai.`,
    explanation: `A polyfill is code that provides a missing browser or JavaScript feature in an older environment. It is different from transpilation: transpilation changes syntax, while a polyfill provides runtime functionality.`,
    explanationHindi: `Polyfill old browser mein unsupported modern feature ka fallback provide karta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 12,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-3',
    question: `43. What Tools Can Be Used to Measure React Performance?`,
    slug: '43-what-tools-can-be-used-to-measure-react-performance',
    answer: `1) React DevTools Profiler → component render time/behavior dekhne ke liye.
2) Lighthouse (Chrome) → component/page performance.
3) WhyDidYouRender → unnecessary re-renders identify karne ke liye.
4) \`useMemo\` / \`useCallback\` → optimization ke liye.
5) \`React.memo()\` → unnecessary child re-render ko rokne ke liye.`,
    explanation: `React DevTools Profiler helps measure component rendering. Lighthouse measures broader page performance. Why Did You Render can help find unnecessary renders. React.memo, useMemo, and useCallback are optimization techniques, not measurement tools.`,
    explanationHindi: `React DevTools Profiler render performance measure karta hai, Lighthouse page performance dekhta hai aur Why Did You Render unnecessary re-renders identify karne mein help karta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 13,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-3',
    question: `44. Why Must React Hooks Be Called at the Top Level?`,
    slug: '44-why-must-react-hooks-be-called-at-the-top-level',
    answer: `Hooks must be called at the top level so that React can track them in the same order on every render.

React hooks ke order ko maintain karta hai. Agar hook ko condition, loop, nested function ke andar call kiya to order change ho sakta hai aur React ko pata nahi chalega ki kaunsa state/effect kis hook ka hai.`,
    explanation: `Hooks must be called at the top level because React relies on a consistent order of Hook calls between renders. Calling Hooks conditionally or inside loops can break that order and lead to incorrect state or effect association.`,
    explanationHindi: `Hooks ko top level par call karna chahiye kyunki React Hook calls ka order same rakhta hai. Condition ya loop ke andar Hook call karne se order change ho sakta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 14,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-3',
    question: `45. What Does an API Call Return?`,
    slug: '45-what-does-an-api-call-return',
    answer: `API call \`fetch()\` ya Axios se ek Promise return hota hai.

Promise resolve hone par HTTP Response milta hai jisme:
1) Status code
2) Response body (data)
3) Headers (metadata)

Status examples:
- 200 → OK
- 201 → Created
- 401 → Unauthorized
- 500 → Server error

Response body usually JSON hoti hai.`,
    explanation: `An API call returns an HTTP response containing a status code, headers, and usually a body. With fetch, the Response object gives status and headers, and methods such as json() read the body.`,
    explanationHindi: `API call se HTTP response milta hai jisme status code, headers aur response body hoti hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 15,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-4',
    question: `46. Explain the Event Loop in Node.js.`,
    slug: '46-explain-the-event-loop-in-nodejs',
    answer: `Event loop ke basic flow:

1) Synchronous code Call Stack mein run hota hai.
2) Async tasks background mein chale jate hain.
3) Jab async task complete hota hai, callback queue mein aata hai.
4) Jab Call Stack empty hota hai, Event Loop callback ko Call Stack mein execute karta hai.

Synchronous code Call Stack par chalta hai. Async tasks background mein (browser mein Web API, Node mein libuv & APIs) handle hote hain. Complete hone par callbacks queue mein aate hain aur Event Loop unhe Call Stack mein push karta hai jab stack empty hota hai.`,
    explanation: `The Node.js event loop coordinates synchronous JavaScript, asynchronous I/O, and queued callbacks. Synchronous code runs on the call stack. When asynchronous work completes, its callback or Promise continuation becomes eligible to run when the stack is available.`,
    explanationHindi: `Event Loop call stack aur asynchronous work ko coordinate karta hai. Async operation complete hone par callback/Promise continuation queue hoti hai aur stack available hone par execute hoti hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 1,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-4',
    question: `47. What is the Difference Between a Normal Function and an Arrow Function?`,
    slug: '47-what-is-the-difference-between-a-normal-function-and-an-arrow-function',
    answer: `1) \`this\`
Normal function ka apna \`this\` hota hai.
Arrow function \`this\` apne outer scope se inherit karta hai.

2) Syntax
Normal = verbose
Arrow = short & clean

3) call, apply, bind
Normal function mein use kar sakte hain.
Arrow function mein \`this\` ko change nahi kar sakte.

4) \`arguments\`
Normal function ka apna \`arguments\` object hota hai.
Arrow function ka apna \`arguments\` object nahi hota; rest parameter use kar sakte hain.

5) Constructor
Normal function ko \`new\` ke saath use kar sakte hain.
Arrow function ka apna \`this\`, \`arguments\` nahi hota aur ye constructor nahi hota.`,
    explanation: `Normal functions have their own this based on how they are called. Arrow functions do not create their own this and inherit it from the surrounding scope. Arrow functions also do not have their own arguments object and cannot be constructors.`,
    explanationHindi: `Normal function ka apna this hota hai jo call ke way par depend karta hai. Arrow function outer scope se this leta hai aur uska own arguments object nahi hota.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 2,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-4',
    question: `48. What are Refs and forwardRef in React?`,
    slug: '48-what-are-refs-and-forwardref-in-react',
    answer: `Refs allow direct access to DOM elements or React components without causing re-render.

Refs use karke DOM elements ko access kar sakte hain.

Ref ka use mutable values store karne ke liye bhi hota hai, jaise timer ID, previous value, media controls etc.

\`forwardRef\` parent se child component ko ref pass karne ke liye use hota hai.`,
    explanation: `Refs let React code access a DOM element or store a mutable value without causing a re-render. forwardRef was traditionally used to pass a ref through a component to a child DOM node.`,
    explanationHindi: `Refs DOM element ko directly access karne ya mutable value rakhne ke liye use hote hain bina re-render ke. forwardRef ref ko child tak pass karne ke liye use hota hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 3,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-4',
    question: `49. What are Interceptors?`,
    slug: '49-what-are-interceptors',
    answer: `Interceptors are functions that run before a request or after a response and automatically perform common work.

Common kaam:
- Auth token attach karna
- Logging
- Error handling

Request interceptor → request send hone se pehle.
Response interceptor → response aane ke baad.`,
    explanation: `Interceptors are hooks that run before requests or after responses. They are commonly used to add authentication headers, log requests, and handle common errors. Axios is a common example.`,
    explanationHindi: `Interceptor request se pehle ya response ke baad automatically logic run karta hai, jaise auth token add karna aur common error handling.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 4,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-4',
    question: `50. How Can Node.js Handle Multiple Requests? Explain the Concurrency Model.`,
    slug: '50-how-can-nodejs-handle-multiple-requests-explain-the-concurrency-model',
    answer: `Node.js uses an event-driven, non-blocking I/O model with an event loop to handle multiple concurrent requests efficiently.`,
    explanation: `Node.js handles many concurrent I/O requests through its event-driven, non-blocking model. While one request waits for I/O, Node.js can process other requests. CPU-heavy JavaScript can still block the main thread.`,
    explanationHindi: `Node.js event-driven non-blocking model se multiple I/O requests handle karta hai. Ek request ke wait ke time doosre requests process ho sakte hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 5,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-4',
    question: `51. What are the Drawbacks of Node.js?`,
    slug: '51-what-are-the-drawbacks-of-nodejs',
    answer: `Drawbacks of Node.js:
1) Single-threaded → CPU intensive tasks event loop ko block kar sakte hain.
2) Not good for heavy computation → image processing, complex calculations etc.
3) Async complexity → asynchronous code ko understand/debug karna difficult ho sakta hai.`,
    explanation: `Node.js is less suitable for CPU-heavy work on the main thread because it can block the event loop. Complex asynchronous flows can also be harder to debug, and npm dependencies require maintenance and security care.`,
    explanationHindi: `Node.js CPU-heavy work ke liye ideal nahi hai kyunki main event loop block ho sakta hai. Async code bhi kabhi-kabhi complex ho sakta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 6,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-4',
    question: `52. Redux Thunk vs Redux Saga`,
    slug: '52-redux-thunk-vs-redux-saga',
    answer: `Redux Thunk and Redux Saga dono asynchronous code aur side effects handle karne ke liye use hote hain.

Thunk → simple asynchronous tasks (basic API calls) ke liye use hota hai.

Redux Saga → complex asynchronous flow, jaise chaining, retry, cancel, parallel calls, handle karne ke liye use hota hai.`,
    explanation: `Redux Thunk is simple for straightforward asynchronous actions such as API calls. Redux Saga is more powerful for complex flows involving cancellation, retries, races, and coordination. The choice depends on application complexity.`,
    explanationHindi: `Thunk simple async API calls ke liye easy hai. Saga complex async workflows jaise retry, cancel aur race ke liye useful hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 7,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-4',
    question: `53. Why is TypeScript Important?`,
    slug: '53-why-is-typescript-important',
    answer: `1) Static typing → compile-time errors pakad leta hai.
2) Better code quality → bugs kam hote hain, code reliable hota hai.
3) Better readability → types se code samajhna easy hota hai.
4) Scalable apps → large projects manage karna easy hota hai.`,
    explanation: `TypeScript adds static typing to JavaScript. It catches many mistakes during development, improves autocomplete and refactoring, and makes large codebases easier to maintain. Runtime validation is still needed for external data.`,
    explanationHindi: `TypeScript static typing deta hai, compile-time errors pakadta hai aur large project mein code maintain karna easy banata hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 8,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-4',
    question: `54. When Do You Need Client and Server Components in Next.js?`,
    slug: '54-when-do-you-need-client-and-server-components-in-nextjs',
    answer: `Next.js uses both Server Component and Client Component for performance, security and modern web applications.

Dono ka role alag hota hai:

Server Component:
- Mainly performance, data fetching and rendering ke liye.

Client Component:
- State, hooks, buttons, click events, user interaction ke liye.
- \`useState\` aur \`useEffect\` Client Component mein use hote hain, Server Component mein nahi.`,
    explanation: `In Next.js, Server Components are useful for server-side data fetching and server-only logic. Client Components are needed for state, effects, browser APIs, and interactive event handlers. Keeping only interactive parts on the client can reduce client-side JavaScript.`,
    explanationHindi: `Server Components data fetching/server logic ke liye aur Client Components state, effects aur interactive UI ke liye use hote hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 9,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-4',
    question: `55. What is the Node.js Runtime Environment?`,
    slug: '55-what-is-the-nodejs-runtime-environment',
    answer: `Node.js JavaScript ko browser ke bahar run karne ke liye environment deta hai.

Browser mein JS chalane ke liye V8 engine + Web APIs (DOM, fetch, timers) hote hain.

Node.js mein ye browser ke bahar provide hote hain.

Node.js provide karta hai:
- V8 engine → JS execute karta hai
- libuv → I/O, event loop
- Node APIs → file system, network, process etc.`,
    explanation: `Node.js is a runtime environment that lets JavaScript run outside the browser. V8 executes JavaScript, while Node.js adds APIs for files, networking, processes, timers, streams, and other server-side tasks.`,
    explanationHindi: `Node.js browser ke bahar JavaScript run karne wala runtime hai. V8 JavaScript execute karta hai aur Node APIs filesystem, network aur process access deti hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 10,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-4',
    question: `56. Explain the Process of a Payment Gateway Integration.`,
    slug: '56-explain-the-process-of-a-payment-gateway-integration',
    answer: `Payment gateway flow:
1) User "Pay Now" button click karta hai.
2) Backend payment order create karta hai.
3) Backend order details frontend ko bhejta hai.
4) Frontend payment gateway UI open karta hai.
5) User payment complete karta hai.
6) Payment gateway payment status bhejta hai (success/fail).
7) Backend payment gateway response ko verify karta hai.
8) Backend payment status database mein update karta hai.

Payment gateway integration mein order backend par create hota hai, frontend par payment initiate hota hai aur order confirm karne se pehle backend par payment verify kiya jata hai.`,
    explanation: `A typical payment flow is: backend creates an order, frontend opens checkout, the user pays, the gateway returns a result or webhook, and the backend verifies the payment before marking the order as paid. Backend verification is important for security.`,
    explanationHindi: `Payment flow mein backend order create karta hai, frontend payment initiate karta hai aur backend gateway response/webhook verify karke order paid mark karta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 11,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-4',
    question: `57. How Does Email Sending Work in Node.js?`,
    slug: '57-how-does-email-sending-work-in-nodejs',
    answer: `Node.js mein emails SMTP server ke through bheje jate hain, usually Nodemailer use karke.

SMTP = Simple Mail Transfer Protocol. Ye protocol hai jo ek server se doosre mail server ko emails bhejne ke liye use hota hai.

Flow:
1) User form submit karta hai.
2) Frontend backend ko request bhejta hai.
3) Backend email service ko request deta hai.
4) Email content prepare hota hai: To, From, Subject, Text/HTML body.
5) SMTP server ko email send request jati hai.
6) SMTP authentication hoti hai.
7) Mail server recipient ko email deliver karta hai.
8) Backend success/failure response deta hai.`,
    explanation: `Node.js can send email through SMTP using libraries such as Nodemailer. The backend prepares the message and sends it through an SMTP or transactional email provider. SMTP credentials should stay on the server.`,
    explanationHindi: `Node.js mein Nodemailer aur SMTP provider se email bhej sakte hain. Email credentials server side rakhne chahiye.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 12,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-4',
    question: `58. How Do You Upload Multiple Images in Node.js?`,
    slug: '58-how-do-you-upload-multiple-images-in-nodejs',
    answer: `Multiple images ko \`multipart/form-data\` ke through bheja jata hai.

Browser/content ko normal JSON ki tarah nahi bhej sakte. Request ka Content-Type \`multipart/form-data\` hota hai.

Multer middleware multiple files parse kar sakta hai.

Example:
\`\`\`js
upload.array("images", 5)
\`\`\`

File type, size aur count validate karna chahiye.

Storage options:
- Local storage (development)
- Cloud storage (production), e.g. AWS S3/Cloudinary

Uploaded files ke URLs database mein store kiye ja sakte hain.`,
    explanation: `Multiple images are normally uploaded as multipart/form-data. Middleware such as Multer can parse multiple files. Validate file type, size, and count, then store files in local or cloud storage and save their URLs or metadata.`,
    explanationHindi: `Multiple images multipart/form-data ke through upload hoti hain. Multer se multiple files parse kar sakte hain aur storage mein save karke URLs database mein rakh sakte hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 13,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-4',
    question: `59. How Does a Forgot Password Flow Work?`,
    slug: '59-how-does-a-forgot-password-flow-work',
    answer: `Forgot password flow:
1) User "Forgot Password" select karta hai.
2) Email/username enter karta hai.
3) Backend check karta hai user exist karta hai ya nahi.
4) Password reset ke liye OTP/token generate hota hai.
5) Token database mein secure tarike se store hota hai.
6) User ko email/SMS mein reset link/OTP bheja jata hai.
7) User link open karta hai.
8) Token/OTP verify hota hai.
9) Valid hone par reset password page open hota hai.
10) User new password enter karta hai.
11) Confirm password enter karta hai.
12) \`/auth/reset-password\` API call hoti hai.
13) Backend password ko hash karta hai aur database mein update karta hai.
14) Reset token invalidate/delete kar diya jata hai.
15) Success response diya jata hai.

Optional: \`/auth/resend-reset-password\` se reset link/OTP resend kar sakte hain.`,
    explanation: `A forgot-password flow normally generates a short-lived, secure reset token, sends a reset link, verifies the token, lets the user set a new password, hashes it, and invalidates the token. Rate limiting and not revealing whether an account exists are important security measures.`,
    explanationHindi: `Forgot password mein reset token generate, email, verify aur new password set hota hai. Password hash karke save aur token invalidate karna chahiye.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 14,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-4',
    question: `60. What is Search Optimization in Node.js?`,
    slug: '60-what-is-search-optimization-in-nodejs',
    answer: `Search optimization in Node.js means improving the performance of search APIs by using proper indexing, optimized queries, caching and avoiding full data scans. Node.js itself does not perform search; it coordinates optimized queries with the database.

Main goals:
- Fast response time
- Low database load
- Scalability

Node.js middleware and APIs can implement search optimization, but the actual database optimization is handled by the database.`,
    explanation: `Search optimization means making database/search queries faster through good indexes, query design, pagination, caching where useful, and avoiding unnecessary full scans. Node.js coordinates the query; the database usually performs the actual search work.`,
    explanationHindi: `Search optimization mein proper indexes, optimized queries, pagination aur caching use karke search fast aur database load kam kiya jata hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 15,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-5',
    question: `61. What is Indexing in Node.js?`,
    slug: '61-what-is-indexing-in-nodejs',
    answer: `Indexing is a database concept that helps locate data faster by avoiding full collection scans.

Benefits:
- Database directly locate data
- Improves search speed
- Reduces server load
- Improves user experience

Indexing database ko table/collection mein data faster retrieve karne mein help karta hai.`,
    explanation: `Indexing is a database optimization technique. An index can make searches and sorting faster by helping the database locate records without scanning everything. Indexes use storage and add write overhead, so they should match real query patterns.`,
    explanationHindi: `Indexing database search ko fast karta hai aur full scan avoid karne mein help karta hai. Index storage aur write overhead bhi leta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 1,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-5',
    question: `62. What are Polyfills?`,
    slug: '62-what-are-polyfills',
    answer: `Polyfills allow modern JavaScript features to work in older browsers by providing a fallback implementation for missing features.

Example: old browser modern feature support nahi karta, polyfill us feature ka implementation provide karta hai.`,
    explanation: `Polyfills provide missing runtime features for older browsers or environments. They are compatibility code and are different from transpilers, which mainly transform source syntax.`,
    explanationHindi: `Polyfill unsupported runtime feature ka fallback implementation hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 2,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-5',
    question: `63. What Security Measures Should Be Taken While Making a React App?`,
    slug: '63-what-security-measures-should-be-taken-while-making-a-react-app',
    answer: `React apps ki security mein XSS prevent karna, proper authentication, sensitive data protect karna, HTTPS use karna, inputs validate karna, secure APIs aur backend-side authorization ensure karna important hai.`,
    explanation: `React security includes preventing unsafe HTML/XSS, validating input, using HTTPS, securing authentication, protecting sensitive data, and enforcing authorization on the backend. Private secrets should never be placed in frontend code.`,
    explanationHindi: `React security ke liye XSS prevention, input validation, HTTPS, secure authentication aur backend authorization important hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 3,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-5',
    question: `64. What are Synthetic Events in React?`,
    slug: '64-what-are-synthetic-events-in-react',
    answer: `Browser mein different events hote hain:
- click
- change
- keypress

React in browser events ko handle karta hai aur ek consistent event object provide karta hai.

Synthetic Event React ka wrapper/normalized event object hai jo browser ke native events ko wrap karta hai aur same behavior provide karne mein help karta hai across browsers.`,
    explanation: `Synthetic Events are React's normalized event objects. They provide a consistent interface for events such as click, change, and keyboard events across browsers.`,
    explanationHindi: `Synthetic Event React ka normalized event object hai jo browser events ko consistent way mein handle karne mein help karta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 4,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-5',
    question: `65. What are the Drawbacks of React?`,
    slug: '65-what-are-the-drawbacks-of-react',
    answer: `Drawbacks of React:
1) React is only a library, not a complete framework.
2) Too many ways to do the same thing → state management, no fixed approach.
3) Ecosystem is not standardized.
4) Major versions/features keep changing continuously.
5) Need optimization knowledge.
6) SEO issue without SSR → SPA ko search engines ke liye optimize karna difficult ho sakta hai (Next.js).`,
    explanation: `React is flexible but mainly focuses on the UI layer. Large projects may need additional tools for routing, state, data fetching, and server rendering. Teams also need conventions and performance optimization for large applications.`,
    explanationHindi: `React flexible hai lekin complete framework nahi hai. Large projects mein additional tools aur architecture ki zarurat ho sakti hai, aur performance/SEO par extra attention chahiye ho sakti hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 5,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-5',
    question: `66. What is a Generator Function in JavaScript?`,
    slug: '66-what-is-a-generator-function-in-javascript',
    answer: `A generator function ek special JavaScript function hai jo execution ko \`yield\` keyword par pause aur \`next()\` se resume kar sakta hai.

Flow:
Start → Pause → Resume → Pause → Resume → End

Generator function \`function*\` syntax se banta hai.

\`yield\` execution ko pause karta hai.
\`next()\` execution ko resume karta hai aur next value deta hai.

Generators tab useful hain jab hume data ko step-by-step generate karna ho bina sab kuch memory mein load kiye.`,
    explanation: `A generator function uses function* and yield to pause execution and next() to resume it. It is useful for lazy or step-by-step data generation and is also used in advanced async control-flow patterns such as Redux Saga.`,
    explanationHindi: `Generator function function* aur yield use karta hai. next() se execution resume hoti hai. Ye step-by-step ya lazy data generation ke liye useful hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 6,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-5',
    question: `67. Why Should We Not Use Index as a Key in React?`,
    slug: '67-why-should-we-not-use-index-as-a-key-in-react',
    answer: `Index ko key ke roop mein use nahi karna chahiye kyunki jab list change (add, remove, reorder) hoti hai to index change ho jata hai. React wrong elements ki identity map kar sakta hai, jiski wajah se wrong re-renders, state bugs aur performance issues ho sakte hain.`,
    explanation: `React keys should provide stable identity. Index keys can become wrong when a list is inserted, deleted, or reordered, which may cause component state to be reused for the wrong item. Stable IDs are preferred for dynamic lists.`,
    explanationHindi: `Dynamic list mein index ko key banana risky hai kyunki add/remove/reorder par index change ho sakta hai. Stable id ko key banana better hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 7,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-5',
    question: `68. What is Virtualization in React?`,
    slug: '68-what-is-virtualization-in-react',
    answer: `Virtualization (on-screen) ka matlab hai sirf wahi items render karna jo visible hain, poori list nahi.

Instead of rendering 10,000 DOM nodes, React maybe 20–40 visible rows render karta hai.

Benefits:
- Faster initial render
- Lower memory usage
- Better browser performance

Virtualization ke liye \`react-window\` jaise tools use kar sakte hain.`,
    explanation: `Virtualization renders only visible items from a very large list instead of creating DOM nodes for every item. This reduces memory and rendering work and can improve scrolling performance.`,
    explanationHindi: `Virtualization mein large list ke sirf visible items render kiye jate hain. Isse DOM nodes, memory aur rendering cost kam hoti hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 8,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-5',
    question: `69. What is Webpack?`,
    slug: '69-what-is-webpack',
    answer: `Webpack is a module bundler for JavaScript applications.

It takes multiple:
- JS files
- CSS
- Images
- Fonts
- Other assets

and bundles them into one or more optimized files that the browser can understand.`,
    explanation: `Webpack is a module bundler. It builds a dependency graph from JavaScript and other assets and produces browser-ready bundles. It can support optimizations such as code splitting, tree shaking, and minification.`,
    explanationHindi: `Webpack module bundler hai jo JavaScript aur other assets ka dependency graph banakar optimized browser bundles create karta hai.

---

# Final Question List

1. What is the difference between Shallow Copy and Deep Copy?
2. What is the Event Loop?
3. What is the difference between \`useState()\` and \`useReducer()\`?
4. What are prototypes in JavaScript?
5. What are clusters in Node.js?
6. What are Worker Threads and Processes in Node.js?
7. What is a Child Process in Node.js?
8. What is a Web Worker?
9. What are React Portals?
10. What are Side Effects in React?
11. What are React Web Workers?
12. What is Express Session? Explain Token vs Session Authentication.
13. What is \`Object.create()\`?
14. What is the difference between Encoding/Decoding and Encryption/Decryption?
15. Explain the HTTP Status Code Categories.
16. What is Exception Handling in JavaScript?
17. What are the Types of Tokens?
18. What is Pub/Sub in Redis?
19. What is the Difference Between Authentication and Authorization?
20. What is WebRTC?
21. What is DevOps?
22. What are Git, GitHub and Jira?
23. Can We Perform Join Operation in MongoDB?
24. Material UI vs shadcn/ui
25. What are Server Actions in Next.js?
26. What is Pagination in Node.js + React?
27. What is the Aggregation Framework in MongoDB?
28. What are MongoDB Operators?
29. What are Template Engines in Node.js?
30. What is the V8 Engine?
31. Event-Driven Programming vs Event-Driven Architecture
32. What is a REST API?
33. What is Non-Blocking I/O and How Does Node.js Achieve It?
34. How Do You Upload Large Files (2–3 GB) in Node.js?
35. What is OAuth Authentication?
36. How Do You Handle Multiple Roles (User, Vendor, Admin)?
37. How Do You Implement Real-Time Communication in Node.js?
38. What is the Difference Between Promise.all() and Promise.allSettled?
39. What is the Temporal Dead Zone (TDZ)?
40. What are the \`req\` Object Properties in Express?
41. What are Common Challenges Faced in a React Project?
42. What is a Browser Polyfill?
43. What Tools Can Be Used to Measure React Performance?
44. Why Must React Hooks Be Called at the Top Level?
45. What Does an API Call Return?
46. Explain the Event Loop in Node.js.
47. What is the Difference Between a Normal Function and an Arrow Function?
48. What are Refs and forwardRef in React?
49. What are Interceptors?
50. How Can Node.js Handle Multiple Requests? Explain the Concurrency Model.
51. What are the Drawbacks of Node.js?
52. Redux Thunk vs Redux Saga
53. Why is TypeScript Important?
54. When Do You Need Client and Server Components in Next.js?
55. What is the Node.js Runtime Environment?
56. Explain the Process of a Payment Gateway Integration.
57. How Does Email Sending Work in Node.js?
58. How Do You Upload Multiple Images in Node.js?
59. How Does a Forgot Password Flow Work?
60. What is Search Optimization in Node.js?
61. What is Indexing in Node.js?
62. What are Polyfills?
63. What Security Measures Should Be Taken While Making a React App?
64. What are Synthetic Events in React?
65. What are the Drawbacks of React?
66. What is a Generator Function in JavaScript?
67. Why Should We Not Use Index as a Key in React?
68. What is Virtualization in React?
69. What is Webpack?

---

# Interview Preparation Tip

For each question, try to answer in this order during an interview:

1. **Definition** — What is it?
2. **How it works** — Explain the internal flow/concept.
3. **Why it is used** — Give the practical reason.
4. **Example** — Give a small real-world or code example.
5. **Difference/edge case** — Mention an important distinction if relevant.
6. **Short conclusion** — Finish with one clear interview statement.

The important part is to keep the original PDF answer separate. The English and Hindi sections below it are expanded interview explanations and can be spoken in simple language.

---

# Additional Interview Questions`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 9,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-5',
    question: `70. What is the Difference Between Normal Reducer and useReducer in React?`,
    slug: '70-what-is-the-difference-between-normal-reducer-and-usereducer-in-react',
    answer: `No PDF answer provided.`,
    explanation: `A **normal reducer** is just a JavaScript function that takes the current state and an action and returns the next state. \`useReducer\` is a React Hook that uses a reducer function to manage component state.

A reducer can be written and tested separately, while \`useReducer\` connects that reducer with React component state.

\`\`\`js
function reducer(state, action) {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }
  return state;
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
\`\`\`

So, **reducer is the logic**, while **useReducer is the React Hook that uses that logic to manage state**.`,
    explanationHindi: `Normal reducer ek simple JavaScript function hota hai jo current state aur action leta hai aur new state return karta hai. \`useReducer\` React ka Hook hai jo reducer function ko component ke state management ke saath connect karta hai.

Simple words mein, **reducer logic hai aur useReducer React mein us logic ko use karke state manage karta hai**.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 10,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-5',
    question: `71. Where Can We Store an Access Token? Which Storage Is More Secure?`,
    slug: '71-where-can-we-store-an-access-token-which-storage-is-more-secure',
    answer: `No PDF answer provided.`,
    explanation: `An access token can be stored in different places, depending on the application architecture:

1. **Memory** — very safe from persistent browser storage attacks, but the token is lost when the page is refreshed.
2. **localStorage** — easy to use, but JavaScript can access it. If an XSS attack happens, the token can potentially be stolen.
3. **sessionStorage** — similar to localStorage, but data is removed when the tab/session ends. It is still accessible to JavaScript.
4. **HttpOnly Cookie** — JavaScript cannot directly read it. This is generally a safer choice for browser-based authentication.

For a web application, a common secure approach is to keep the **refresh token in a Secure, HttpOnly, SameSite cookie** and keep the short-lived access token in memory. The backend should also use HTTPS and proper CSRF protection where needed.`,
    explanationHindi: `Access token ko memory, localStorage, sessionStorage ya cookie mein store kiya ja sakta hai.

Browser application mein \`localStorage\` easy hai, lekin JavaScript usko read kar sakta hai. Isliye XSS attack hone par token leak ho sakta hai.

Generally safer approach hai ki sensitive refresh token ko **Secure + HttpOnly + SameSite cookie** mein rakha jaye. Short-lived access token ko memory mein rakhna bhi common approach hai.

Simple interview line: **Browser mein authentication ke liye HttpOnly Secure cookie approach generally localStorage se safer hoti hai.**`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 11,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-5',
    question: `72. How Does Encryption and Decryption Work in Node.js?`,
    slug: '72-how-does-encryption-and-decryption-work-in-nodejs',
    answer: `No PDF answer provided.`,
    explanation: `Encryption converts readable data into unreadable data using a key. Decryption converts that encrypted data back into the original data using the correct key.

Node.js provides the built-in **\`crypto\` module** for encryption and decryption.

The basic flow is:

1. Take the original data.
2. Generate or use a secure key and IV.
3. Encrypt the data.
4. Store or send the encrypted value.
5. Use the correct key and IV to decrypt it when required.

For passwords, we normally should **not use reversible encryption**. Passwords should be hashed using a password-hashing algorithm such as Argon2 or bcrypt.`,
    explanationHindi: `Encryption mein readable data ko unreadable form mein convert kiya jata hai. Decryption mein us encrypted data ko wapas original form mein convert kiya jata hai.

Node.js mein iske liye built-in **\`crypto\` module** available hai.

Important point: password ke liye encryption nahi, normally **hashing** use karni chahiye, jaise bcrypt ya Argon2, kyunki password ko original form mein wapas nahi nikalna chahiye.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 12,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-5',
    question: `73. What Is the Use of the $unwind Operator in MongoDB?`,
    slug: '73-what-is-the-use-of-the-unwind-operator-in-mongodb',
    answer: `No PDF answer provided.`,
    explanation: `\`$unwind\` is a MongoDB aggregation operator used to **break an array into separate documents**.

For example, if one document has:

\`\`\`js
{
  name: "Ajay",
  skills: ["React", "Node", "MongoDB"]
}
\`\`\`

After \`$unwind: "$skills"\`, MongoDB creates three pipeline documents, one for each skill.

It is very useful when we want to perform filtering, grouping, sorting, or other operations on individual array elements.`,
    explanationHindi: `\`$unwind\` MongoDB aggregation ka operator hai. Ye array ke elements ko alag-alag documents ki tarah pipeline mein process karne ke liye use hota hai.

Agar ek user ke paas 3 skills hain, to \`$unwind\` ke baad un 3 skills ko separately process kar sakte hain.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 13,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-5',
    question: `74. What Is the Use of the $group Operator in MongoDB?`,
    slug: '74-what-is-the-use-of-the-group-operator-in-mongodb',
    answer: `No PDF answer provided.`,
    explanation: `\`$group\` is a MongoDB aggregation operator used to **group documents based on a common value** and calculate results such as count, sum, average, minimum, or maximum.

For example, we can group orders by user and calculate the total amount spent by each user.

\`\`\`js
db.orders.aggregate([
  {
    $group: {
      _id: "$userId",
      totalAmount: { $sum: "$amount" }
    }
  }
]);
\`\`\`

Here, all orders having the same \`userId\` are grouped together.`,
    explanationHindi: `\`$group\` MongoDB aggregation mein documents ko kisi common field ke basis par group karne ke liye use hota hai.

Iske saath hum \`sum\`, \`count\`, \`average\`, \`min\`, \`max\` jaise calculations kar sakte hain.

Simple example: user-wise total order amount nikalna.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 14,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-5',
    question: `75. Explain Indexing in Detail with an Example.`,
    slug: '75-explain-indexing-in-detail-with-an-example',
    answer: `No PDF answer provided.`,
    explanation: `Indexing is used to make database queries faster. An index creates a data structure that helps MongoDB find matching documents without scanning the entire collection every time.

For example, if we frequently search users by email, we can create an index on \`email\`.

\`\`\`js
db.users.createIndex({ email: 1 });
\`\`\`

Now a query such as:

\`\`\`js
db.users.findOne({ email: "ajay@example.com" });
\`\`\`

can use the index instead of scanning every user document.

The disadvantage is that indexes consume extra storage and can make insert, update, and delete operations slightly more expensive because the index also needs to be updated.`,
    explanationHindi: `Indexing database query ko fast banane ke liye use hoti hai. Index ki help se MongoDB ko har document scan nahi karna padta.

Agar hum email se user ko baar-baar search karte hain, to email par index bana sakte hain.

\`\`\`js
db.users.createIndex({ email: 1 });
\`\`\`

Index ka benefit fast read hai, lekin extra storage lagti hai aur write operations par thoda overhead aa sakta hai.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 15,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-6',
    question: `76. How Do Refresh Tokens and Access Tokens Work?`,
    slug: '76-how-do-refresh-tokens-and-access-tokens-work',
    answer: `No PDF answer provided.`,
    explanation: `An **access token** is usually short-lived and is sent with API requests to access protected resources.

A **refresh token** usually has a longer lifetime. When the access token expires, the client sends the refresh token to a refresh endpoint. The server verifies it and issues a new access token.

A common flow is:

1. User logs in.
2. Server verifies the credentials.
3. Server issues an access token and refresh token.
4. Client uses the access token for API requests.
5. Access token expires after a short time.
6. Client sends the refresh token to the refresh endpoint.
7. Server validates the refresh token.
8. Server returns a new access token.
9. If the refresh token is invalid or expired, the user must log in again.

Refresh tokens should be protected carefully and are commonly stored in Secure, HttpOnly cookies in browser applications.`,
    explanationHindi: `Access token short-lived token hota hai jo protected API ko access karne ke liye use hota hai.

Refresh token comparatively long-lived hota hai. Jab access token expire ho jata hai, client refresh token ke through new access token mangta hai.

Flow simple hai: **Login → Access + Refresh Token → API calls with Access Token → Access Token expire → Refresh Token se new Access Token → Refresh Token invalid hua to login again.**`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 1,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-6',
    question: `77. How Can We Improve Code Reusability in Node.js?`,
    slug: '77-how-can-we-improve-code-reusability-in-nodejs',
    answer: `No PDF answer provided.`,
    explanation: `Code reusability means writing code once and using it in multiple places instead of repeating the same logic.

In Node.js, we can improve reusability by using:

- Separate service functions.
- Utility/helper functions.
- Middleware.
- Controllers and services with clear responsibilities.
- Shared validation functions.
- Reusable database functions.
- Modules and packages.

For example, instead of writing the same email validation in five controllers, we can create one reusable validation function.`,
    explanationHindi: `Code reusability ka matlab hai same logic ko baar-baar likhne ke bajay ek reusable function, service, middleware ya module banana aur usko multiple places par use karna.

Node.js project mein controllers, services, utilities, middleware aur validators ko separate rakhne se code clean aur reusable hota hai.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 2,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-6',
    question: `78. What Is the Difference Between save() and create() in MongoDB/Mongoose?`,
    slug: '78-what-is-the-difference-between-save-and-create-in-mongodbmongoose',
    answer: `No PDF answer provided.`,
    explanation: `In Mongoose, both \`save()\` and \`create()\` can be used to insert documents, but their usage is different.

\`create()\` is convenient when we already have the data and want to create a document directly.

\`\`\`js
await User.create({ name: "Ajay", email: "ajay@example.com" });
\`\`\`

With \`save()\`, we first create a Mongoose document and then save it.

\`\`\`js
const user = new User({
  name: "Ajay",
  email: "ajay@example.com"
});

await user.save();
\`\`\`

\`save()\` is useful when we want to modify a document before saving it or when we are working with an existing document instance.`,
    explanationHindi: `Mongoose mein \`create()\` aur \`save()\` dono document insert karne ke liye use ho sakte hain.

\`create()\` mein hum directly data dekar document create kar dete hain.

\`save()\` mein pehle Mongoose document object banate hain, usme changes kar sakte hain, aur phir \`save()\` karte hain.

Simple difference: **create() direct creation ke liye convenient hai, save() document instance ke saath kaam karne ke liye useful hai.**`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 3,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-6',
    question: `79. What Is the Difference Between populate() and $lookup in MongoDB?`,
    slug: '79-what-is-the-difference-between-populate-and-lookup-in-mongodb',
    answer: `No PDF answer provided.`,
    explanation: `Both \`populate()\` and \`$lookup\` are used to get related data, but they work at different levels.

\`populate()\` is a **Mongoose feature**. It uses a referenced ObjectId and fetches the related document for us.

\`\`\`js
User.find().populate("company");
\`\`\`

\`$lookup\` is a **MongoDB aggregation stage**. It performs a join-like operation between collections.

\`\`\`js
{
  $lookup: {
    from: "companies",
    localField: "companyId",
    foreignField: "_id",
    as: "company"
  }
}
\`\`\`

So, \`populate()\` is Mongoose-level convenience, while \`$lookup\` is a MongoDB aggregation operation.`,
    explanationHindi: `\`populate()\` Mongoose ka feature hai jo referenced document ko automatically fetch karne mein help karta hai.

\`$lookup\` MongoDB aggregation ka stage hai jo do collections ke data ko join-like way mein combine karta hai.

Simple line: **populate Mongoose level par hota hai, \`$lookup\` MongoDB aggregation level par hota hai.**`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 4,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-6',
    question: `80. What Is Helmet.js and Why Is It Used?`,
    slug: '80-what-is-helmetjs-and-why-is-it-used',
    answer: `No PDF answer provided.`,
    explanation: `Helmet.js is a middleware package for Express applications that helps improve security by setting useful HTTP security headers.

It can help protect against some common web security problems by configuring headers such as Content Security Policy and other browser security controls.

\`\`\`js
const helmet = require("helmet");
app.use(helmet());
\`\`\`

Helmet does not make an application completely secure. We still need validation, authentication, authorization, rate limiting, secure cookies, HTTPS, and other security practices.`,
    explanationHindi: `Helmet.js Express application ki security improve karne ke liye use hone wala middleware hai. Ye useful HTTP security headers set karta hai.

\`\`\`js
const helmet = require("helmet");
app.use(helmet());
\`\`\`

Helmet security ka ek part hai. Sirf Helmet use karne se complete application secure nahi hoti.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 5,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-6',
    question: `81. What Are the Drawbacks of JavaScript, and Why Do We Use TypeScript?`,
    slug: '81-what-are-the-drawbacks-of-javascript-and-why-do-we-use-typescript',
    answer: `No PDF answer provided.`,
    explanation: `JavaScript is flexible and easy to start with, but large applications can face some problems because JavaScript is dynamically typed.

Common drawbacks include:

- Type-related errors can appear at runtime.
- Large codebases can become harder to maintain.
- Refactoring can be less safe.
- Some mistakes are found only when the code runs.
- It can be difficult to understand the expected shape of data in a large project.

TypeScript adds static typing and catches many mistakes during development before the application runs.`,
    explanationHindi: `JavaScript flexible hai, lekin large projects mein dynamic typing ki wajah se type-related problems aa sakti hain.

TypeScript JavaScript ke upar static typing provide karta hai. Isse development ke time par hi bahut saare errors catch ho jate hain.

Simple line: **JavaScript flexibility deta hai, aur TypeScript large codebase mein type safety aur better maintainability deta hai.**`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 6,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-6',
    question: `82. What Are the Benefits of Microservices?`,
    slug: '82-what-are-the-benefits-of-microservices',
    answer: `No PDF answer provided.`,
    explanation: `Microservices architecture divides a large application into smaller, independent services. Each service usually handles one business responsibility.

Benefits include:

- Services can be developed independently.
- Different services can be deployed separately.
- One service can be scaled without scaling the whole application.
- Teams can work on different services independently.
- A failure in one service can be isolated more easily.
- Different technologies can be used when there is a real need.

Microservices also add complexity, so they are not always the best choice for a small application.`,
    explanationHindi: `Microservices mein ek large application ko small independent services mein divide kiya jata hai.

Isse services ko independently develop, deploy aur scale kar sakte hain.

Example: ek e-commerce app mein Auth Service, Payment Service, Order Service aur Notification Service alag ho sakti hain.

Lekin microservices ke saath networking, monitoring, deployment aur data management ki complexity bhi badh jati hai.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 7,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-6',
    question: `83. Which Node.js Module Is Used for Encryption and Decryption?`,
    slug: '83-which-nodejs-module-is-used-for-encryption-and-decryption',
    answer: `No PDF answer provided.`,
    explanation: `Node.js provides the built-in **\`crypto\` module** for cryptographic operations, including encryption and decryption.

For example, it provides APIs such as \`createCipheriv()\` and \`createDecipheriv()\` for symmetric encryption algorithms.

\`\`\`js
const crypto = require("crypto");
\`\`\`

For passwords, we should normally use a dedicated password-hashing algorithm such as Argon2 or bcrypt instead of reversible encryption.`,
    explanationHindi: `Node.js mein encryption aur decryption ke liye built-in **\`crypto\` module** use karte hain.

\`\`\`js
const crypto = require("crypto");
\`\`\`

Password ke liye normally encryption nahi, hashing use karni chahiye, jaise bcrypt ya Argon2.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 8,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-6',
    question: `84. What Are the Advantages and Disadvantages of Redis?`,
    slug: '84-what-are-the-advantages-and-disadvantages-of-redis',
    answer: `No PDF answer provided.`,
    explanation: `Redis is an in-memory data store commonly used for caching, sessions, rate limiting, queues, Pub/Sub, and other fast data operations.

**Advantages:**

- Very fast because data is primarily kept in memory.
- Useful for caching.
- Supports data structures such as strings, lists, sets, hashes, and sorted sets.
- Supports Pub/Sub.
- Can be used for distributed locks and rate limiting.

**Disadvantages:**

- Memory is more expensive than disk storage.
- It can require extra infrastructure and monitoring.
- If persistence and recovery are not configured properly, data can be lost after failures.
- It is not always the right replacement for a primary database.`,
    explanationHindi: `Redis ek fast in-memory data store hai. Iska use caching, sessions, rate limiting, Pub/Sub aur queues ke liye common hai.

Iska biggest benefit speed hai. Disadvantage ye hai ki memory expensive hoti hai aur production mein proper persistence, backup aur monitoring ka dhyan rakhna padta hai.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 9,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-6',
    question: `85. How Can We Check Query Performance?`,
    slug: '85-how-can-we-check-query-performance',
    answer: `No PDF answer provided.`,
    explanation: `To check database query performance in MongoDB, we can use the **\`explain()\`** method.

It shows how MongoDB executes the query and provides information such as whether an index was used, how many documents were examined, and how many documents were returned.

\`\`\`js
db.users
  .find({ email: "ajay@example.com" })
  .explain("executionStats");
\`\`\`

Important values include \`executionTimeMillis\`, \`totalDocsExamined\`, and \`totalKeysExamined\`.

If a query examines many documents but returns very few, we should check whether a suitable index is missing.`,
    explanationHindi: `MongoDB query performance check karne ke liye \`explain()\` use kar sakte hain.

Ye batata hai ki query kaise execute hui, index use hua ya nahi, kitne documents examine hue aur query ko kitna time laga.

\`\`\`js
db.users.find({ email: "ajay@example.com" }).explain("executionStats");
\`\`\`

Important fields hain \`executionTimeMillis\`, \`totalDocsExamined\` aur \`totalKeysExamined\`.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 10,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-6',
    question: `86. What Are the Types of Indexes in MongoDB?`,
    slug: '86-what-are-the-types-of-indexes-in-mongodb',
    answer: `No PDF answer provided.`,
    explanation: `MongoDB supports different types of indexes for different query requirements.

Common types are:

1. **Single Field Index** — index on one field.
2. **Compound Index** — index on multiple fields.
3. **Multikey Index** — used for array fields.
4. **Text Index** — used for text search.
5. **Geospatial Index** — used for location-based queries.
6. **Hashed Index** — indexes a hashed value and is useful for some equality-based and sharding use cases.
7. **Unique Index** — prevents duplicate values for the indexed key.
8. **TTL Index** — automatically removes documents after a configured time.`,
    explanationHindi: `MongoDB mein different requirements ke liye different types ke indexes hote hain.

Common indexes hain **single field, compound, multikey, text, geospatial, hashed, unique aur TTL indexes**.

Example: email par unique index bana sakte hain, aur location queries ke liye geospatial index use kar sakte hain.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 11,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-6',
    question: `87. What Is Normalization?`,
    slug: '87-what-is-normalization',
    answer: `No PDF answer provided.`,
    explanation: `Normalization is a database design technique used to organize data and reduce unnecessary duplication.

For example, instead of storing the same customer information repeatedly in every order document, we can keep customer information in a separate collection/table and store a reference to that customer.

Benefits include:

- Less duplicate data.
- Better data consistency.
- Easier updates.
- Cleaner database design.

However, in MongoDB, some denormalization is also common when embedding related data improves read performance.`,
    explanationHindi: `Normalization database ko properly organize karne ka method hai jisme duplicate data ko reduce kiya jata hai.

Example: har order ke andar customer ka poora data repeat karne ke bajay customer ka separate record rakh sakte hain aur order mein uska ID store kar sakte hain.

Isse duplicate data kam hota hai aur update karna easy hota hai.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 12,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-6',
    question: `88. What Is Infinite Currying in JavaScript?`,
    slug: '88-what-is-infinite-currying-in-javascript',
    answer: `No PDF answer provided.`,
    explanation: `Currying means converting a function that takes multiple arguments into a sequence of functions that take one argument at a time.

**Infinite currying** means the function keeps returning another function, so we can continue passing values until we decide to stop.

A common example is summing values until an empty call is made.

\`\`\`js
function sum(a) {
  return function (b) {
    if (b === undefined) return a;
    return sum(a + b);
  };
}

console.log(sum(1)(2)(3)()); // 6
\`\`\``,
    explanationHindi: `Currying mein multiple arguments wale function ko multiple small function calls mein convert karte hain.

Infinite currying mein function baar-baar ek naya function return karta hai, isliye hum multiple values pass kar sakte hain. Kisi stopping condition par calculation finish hoti hai.

Example: \`sum(1)(2)(3)()\` ka result \`6\` ho sakta hai.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 13,
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-6',
    question: `89. How Do You Validate Forms?`,
    slug: '89-how-do-you-validate-forms',
    answer: `No PDF answer provided.`,
    explanation: `Form validation means checking user input before accepting or submitting it.

Validation can be done on both frontend and backend.

**Frontend validation** gives quick feedback to the user, for example checking required fields, email format, password length, or number ranges.

**Backend validation is mandatory** because frontend validation can be bypassed by a user or attacker.

In React, we can validate forms manually or use libraries such as React Hook Form with a schema validator such as Zod.

On the backend, we can use validation libraries or middleware and then sanitize/validate data before using it.`,
    explanationHindi: `Form validation ka matlab hai user ke input ko check karna before submit ya before database mein save karna.

Frontend validation user ko quick error message dikhane ke liye useful hai, lekin **backend validation compulsory hai**, kyunki frontend ko bypass kiya ja sakta hai.

React mein React Hook Form aur Zod jaise tools use kar sakte hain. Node.js backend mein bhi request body ko properly validate karna chahiye.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["advanced"],
    isImportant: true,
    tags: ["advanced"],
    order: 14,
  },
];
