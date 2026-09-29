# Advanced Interview Questions — PDF Pages 20–37
## PDF Answer + Proper Interview Answer in English + Proper Interview Answer in Hindi

> **Important format**
>
> - **My PDF Answer — DO NOT CHANGE:** This section preserves the answer from the PDF/source as previously transcribed.
> - **Proper Interview Answer — English:** A detailed, interview-ready explanation that follows the PDF answer and expands the concepts. It is intentionally not a 1–2 line definition.
> - **Proper Interview Answer — Hindi:** The same interview explanation in simple Hindi/Hinglish.
> - **Example:** Practical code/examples are included wherever they help explain the concept.
>
> The PDF answer is kept separate from the expanded interview answer so your original study material is not modified.

---

# 1. What is the difference between Shallow Copy and Deep Copy?

## My PDF Answer — DO NOT CHANGE

### Shallow Copy

Example:

```js
let originalObj = {
  name: "Ajay",
  address: {
    city: "Delhi"
  }
};

let shallowCopy = { ...originalObj };

originalObj.address.city = "Mumbai";

console.log(shallowCopy.address.city);
```

The object can be copied, but the nested object/reference is still shared.

In shallow copy, only the first/top level is copied. If there is a nested object, both objects can still refer to the same nested object.

**Why?**

Because the reference is passed/copied for nested objects.

### Deep Copy

Example:

```js
let originalObj = {
  name: "Ajay",
  address: {
    city: "Delhi"
  }
};

let deepCopy = JSON.parse(JSON.stringify(originalObj));

originalObj.address.city = "Mumbai";

console.log(deepCopy.address.city);
```

Here the nested object is also copied, so changing the parent/original object does not change the copied nested object.

The notes explain that deep copy creates a new reference rather than sharing the same nested reference.

## Proper Interview Answer — English

A **shallow copy** and a **deep copy** are two ways of copying objects in JavaScript. The main difference is how they handle **nested objects and references**.

In a shallow copy, JavaScript creates a new object for the first/top level, but if the object contains another object or array, the nested value's **reference is copied**, not the nested object itself. Therefore, both the original and copied objects can point to the same nested object.

For example:

```js
const user = {
  name: "Ajay",
  address: {
    city: "Delhi"
  }
};

const copy = { ...user };

copy.address.city = "Mumbai";

console.log(user.address.city); // Mumbai
```

Here, changing `copy.address.city` also changes `user.address.city` because both objects share the same `address` reference.

A deep copy creates an independent copy of the nested data as well. Therefore, modifying the nested object in the copy does not modify the original.

A simple example is:

```js
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
```

Older code often uses `JSON.parse(JSON.stringify(obj))`, but that approach has limitations with values such as functions, `undefined`, `Date`, `Map`, `Set`, and circular references. `structuredClone()` is generally a better choice when the data types it supports are appropriate.

**Interview summary:**  
Shallow copy creates a new outer object but can share nested references. Deep copy creates independent nested data as well.

## Proper Interview Answer — Hindi

**Shallow Copy** aur **Deep Copy** JavaScript mein object copy karne ke do methods hain. Main difference ye hai ki nested object ko kaise copy kiya jata hai.

Shallow copy mein top-level object ka naya object create hota hai, lekin agar uske andar koi nested object ya array hai, to uska **reference copy** hota hai. Isliye original aur copied object same nested object ko point kar sakte hain.

Example:

```js
const user = {
  name: "Ajay",
  address: {
    city: "Delhi"
  }
};

const copy = { ...user };

copy.address.city = "Mumbai";

console.log(user.address.city); // Mumbai
```

Yahan `copy.address` aur `user.address` same nested object ko refer kar rahe hain. Isliye copy mein change karne par original bhi change ho gaya.

Deep copy mein nested objects ka bhi separate copy create hota hai.

```js
const user = {
  name: "Ajay",
  address: {
    city: "Delhi"
  }
};

const copy = structuredClone(user);

copy.address.city = "Mumbai";

console.log(user.address.city); // Delhi
```

Ab original aur copied object independent hain.

**Interview mein short summary:**  
Shallow copy mein outer object new hota hai, lekin nested references share ho sakte hain. Deep copy mein nested data bhi independently copy hota hai.

---

# 2. What is the Event Loop?

## My PDF Answer — DO NOT CHANGE

The event loop manages asynchronous operations.

It manages/decides when asynchronous code runs.

## Proper Interview Answer — English

The **Event Loop** is one of the most important concepts in JavaScript and Node.js. It allows JavaScript to handle asynchronous operations without blocking the main execution thread.

JavaScript code is executed using a **Call Stack**. When a synchronous function is called, it is pushed onto the call stack. When it finishes, it is removed from the stack.

For asynchronous operations such as timers, network requests, file-system operations, or API calls, the JavaScript runtime delegates the work to the appropriate runtime APIs. Node.js can use its underlying runtime and system mechanisms, including **libuv**, to handle asynchronous I/O.

When the asynchronous operation finishes, its callback is placed into an appropriate **queue**. The Event Loop checks whether the call stack is empty and whether queued work is ready to execute. It then moves eligible callbacks into the call stack.

A simplified flow is:

```text
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
```

There are also different kinds of queues. In browsers, Promise callbacks are handled through the **microtask queue**, while timer callbacks are tasks. In Node.js, there are additional event-loop phases and mechanisms such as the `process.nextTick()` queue.

For example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

Output:

```text
Start
End
Promise
Timer
```

Why?

1. `Start` runs synchronously.
2. `setTimeout()` schedules a timer callback.
3. Promise `.then()` schedules a microtask.
4. `End` runs synchronously.
5. The current synchronous code finishes.
6. The microtask runs before the timer callback.
7. The timer callback runs afterward.

**Interview summary:**  
The Event Loop coordinates the Call Stack, asynchronous runtime work, and callback/task queues so JavaScript can perform asynchronous operations without blocking the main execution flow.

## Proper Interview Answer — Hindi

**Event Loop** JavaScript aur Node.js ka bahut important concept hai. Ye asynchronous operations ko manage karta hai aur JavaScript ko non-blocking behavior provide karne mein help karta hai.

JavaScript synchronous code ko **Call Stack** mein execute karta hai. Jab function call hota hai to wo stack mein push hota hai aur complete hone ke baad pop ho jata hai.

Agar koi asynchronous operation hai, jaise timer, network request, file operation ya API call, to runtime us operation ko handle karta hai. Node.js mein asynchronous I/O ko manage karne mein **libuv** important role play karta hai.

Jab asynchronous operation complete hota hai, uska callback appropriate **queue** mein wait karta hai. Event Loop check karta hai ki Call Stack free hai ya nahi. Jab stack available hota hai, eligible callback ko execution ke liye Call Stack mein bheja jata hai.

Simple flow:

```text
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
```

Promise callbacks **microtask queue** mein jate hain, jabki `setTimeout()` jaise timers task/timer processing mein aate hain. Node.js mein `process.nextTick()` ka apna special queue behavior bhi hota hai.

Example:

```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```

Output:

```text
Start
End
Promise
Timer
```

Reason:

- Pehle synchronous code chalega.
- `Promise.then()` microtask schedule karega.
- `setTimeout()` timer callback schedule karega.
- Current code complete hone ke baad microtask pehle execute hoga.
- Uske baad timer callback execute hoga.

**Interview summary:**  
Event Loop Call Stack, asynchronous operations aur queues ko coordinate karta hai, jisse JavaScript asynchronous kaam ko non-blocking way mein handle kar pata hai.

---

# 3. What is the difference between `useState()` and `useReducer()`?

## My PDF Answer — DO NOT CHANGE

useState() -> use for Primitive type = number, string, Boolean
    -> manage one or two State Variable
    -> use for local component state

useReducer() -> use for object and arrays
    -> manage multiple states (loading, error, data)
    -> use for global state management.

## Proper Interview Answer — English

Both `useState()` and `useReducer()` are React Hooks used to manage component state, but they are useful in different situations.

`useState()` is usually the simpler choice when the state is straightforward. It works well for values such as numbers, strings, booleans, or a small amount of local state.

Example:

```jsx
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Increment
</button>
```

`useReducer()` is useful when state transitions become more complex or when several related state values are updated through defined actions.

Example:

```jsx
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
```

Then:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

The important interview point is that `useReducer()` does **not automatically make state global**. It manages state locally unless combined with something such as Context or another state-management architecture.

**When I would choose `useState`:**

- Simple local state.
- Small number of state variables.
- Straightforward updates.

**When I would choose `useReducer`:**

- Multiple related state values.
- Complex state transitions.
- Many different actions update the same state.
- Reducer logic needs to be predictable and centralized.

## Proper Interview Answer — Hindi

`useState()` aur `useReducer()` dono React Hooks hain jo state manage karne ke liye use hote hain, lekin dono ka use-case different ho sakta hai.

`useState()` simple state ke liye best fit hota hai, jaise number, string, boolean ya simple local state.

```jsx
const [count, setCount] = useState(0);
```

Jab state complex ho jaye aur multiple related values ko actions ke through update karna ho, tab `useReducer()` useful hota hai.

Example:

```jsx
const initialState = {
  loading: false,
  data: null,
  error: null
};
```

Reducer:

```jsx
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
```

Important interview point: `useReducer()` khud se global state nahi banata. Global state ke liye Context ya kisi state-management architecture ke saath use kiya ja sakta hai.

**Simple difference:**

- `useState` → simple/local state.
- `useReducer` → complex state aur multiple state transitions.

---

# 4. What are prototypes in JavaScript?

## My PDF Answer — DO NOT CHANGE

In JS, every object has an internal link to another object called its prototype.

This prototype is used for inheritance. If we try to access a property or method on an object and it is not found, JavaScript looks for it in the prototype chain.

Example:

```js
let users = {
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },

  getAge: function () {
    const age = new Date().getFullYear() - this.birth;
    return age;
  }
};
```

The notes then show a student/object using methods from `users`, indicating that the methods are inherited through the prototype relationship.

They also note that the property/method can be inherited automatically.

## Proper Interview Answer — English

A **prototype** is an object from which another object can inherit properties and methods. JavaScript uses **prototype-based inheritance** rather than the traditional class-based inheritance model used by languages such as Java or C++.

When you access a property on an object, JavaScript first checks the object itself. If the property is not found, JavaScript looks at the object's prototype. If it is still not found, it continues up the **prototype chain** until it finds the property or reaches `null`.

Example:

```js
const user = {
  greet() {
    console.log("Hello");
  }
};

const student = Object.create(user);

student.greet();
```

Here, `student` does not have its own `greet()` method. JavaScript finds `greet()` through its prototype.

The prototype chain can be visualized as:

```text
student
   ↓
user
   ↓
Object.prototype
   ↓
null
```

Constructor functions and classes also use prototypes. For example:

```js
function User(name) {
  this.name = name;
}

User.prototype.sayHello = function () {
  console.log(`Hello ${this.name}`);
};

const u1 = new User("Ajay");

u1.sayHello();
```

The `sayHello()` function is stored on `User.prototype`, so instances can share the same method instead of every instance getting a separate function copy.

**Interview summary:**  
Prototype is the mechanism JavaScript uses for inheritance. When a property is not found on an object, JavaScript searches the prototype chain.

## Proper Interview Answer — Hindi

JavaScript mein **prototype** ek object hota hai jisse doosra object properties aur methods inherit kar sakta hai. JavaScript **prototype-based inheritance** use karta hai.

Jab hum kisi object ki property access karte hain, JavaScript pehle object ke andar property search karta hai. Agar property nahi milti, to JavaScript uske prototype mein search karta hai. Phir prototype ke prototype mein search karta hai. Is process ko **prototype chain** kehte hain.

Example:

```js
const user = {
  greet() {
    console.log("Hello");
  }
};

const student = Object.create(user);

student.greet();
```

`student` ke paas directly `greet()` nahi hai, lekin uska prototype `user` hai. Isliye `student.greet()` kaam karta hai.

Prototype chain roughly:

```text
student
   ↓
user
   ↓
Object.prototype
   ↓
null
```

Constructor function ke example mein:

```js
function User(name) {
  this.name = name;
}

User.prototype.sayHello = function () {
  console.log(`Hello ${this.name}`);
};
```

Yahan `sayHello()` prototype par hai aur multiple objects us method ko share kar sakte hain.

**Interview summary:**  
Prototype JavaScript mein inheritance ka mechanism hai. Property object mein nahi milne par JavaScript prototype chain mein search karta hai.

---

# 5. What are clusters in Node.js?

## My PDF Answer — DO NOT CHANGE

In Node.js, clusters are used to take advantage of multi-core processors by running multiple worker processes that share the same server port.

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

The notes also mention that clusters are not meant for CPU-heavy tasks; worker threads are better for that kind of work.

## Proper Interview Answer — English

The **Cluster module** in Node.js is used to create multiple Node.js processes so an application can take advantage of multiple CPU cores.

Node.js executes JavaScript on a single main thread within each process. If a machine has multiple CPU cores, running only one Node.js process may leave other cores underutilized for that application. Clustering allows multiple worker processes to run the same server application.

A typical architecture is:

```text
             Primary Process
              /    |    \
             /     |     \
        Worker 1 Worker 2 Worker 3
             \      |      /
              Shared Server Port
```

Example:

```js
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
    res.end(`Handled by worker ${process.pid}`);
  }).listen(3000);
}
```

The primary process creates workers. Each worker runs its own Node.js process and can handle requests.

**Why use clustering?**

- Better utilization of multiple CPU cores.
- More request-handling capacity.
- Process-level isolation.
- A worker failure does not necessarily stop every other worker.

However, clustering is not the same as worker threads. **Cluster = multiple processes. Worker Threads = multiple threads within a process.** For CPU-heavy JavaScript calculations, worker threads can be more appropriate.

## Proper Interview Answer — Hindi

Node.js ka **Cluster module** multiple worker processes create karne ke liye use hota hai, taaki application multiple CPU cores ka better use kar sake.

Ek Node.js process ke andar JavaScript ka main execution single thread par hota hai. Agar server mein multiple CPU cores hain, to cluster multiple Node.js processes run kar sakta hai.

Architecture:

```text
             Primary Process
              /    |    \
         Worker1 Worker2 Worker3
              \    |    /
             Server Port
```

Example:

```js
const cluster = require("node:cluster");
const http = require("node:http");
const os = require("node:os");

if (cluster.isPrimary) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
} else {
  http.createServer((req, res) => {
    res.end(`Worker: ${process.pid}`);
  }).listen(3000);
}
```

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

---

# 6. What are Worker Threads and Processes in Node.js?

## My PDF Answer — DO NOT CHANGE

The notes explain worker threads and processes using CPU cores and the event loop.

A Node.js process has an event loop. Worker threads can be used for CPU-intensive work in parallel without blocking the event loop using multiple threads inside a process.

The notes show:

- CPU cores
- main Node.js process
- event loop
- worker thread pool
- worker threads
- asynchronous code

The notes explain that worker threads are useful when CPU-intensive tasks need to run in parallel without blocking the event loop.

## Proper Interview Answer — English

Node.js provides different ways to perform work outside the main JavaScript execution flow. Two important concepts are **Worker Threads** and **Child Processes**.

A **Worker Thread** runs JavaScript in another thread within the same Node.js process. It is especially useful for CPU-intensive work such as large calculations, parsing, image processing, or other computational tasks that could otherwise keep the main event loop busy.

Example:

```js
// main.js
const { Worker } = require("node:worker_threads");

const worker = new Worker("./worker.js");

worker.on("message", result => {
  console.log("Result:", result);
});
```

Worker:

```js
// worker.js
const { parentPort } = require("node:worker_threads");

let result = 0;

for (let i = 0; i < 1e8; i++) {
  result += i;
}

parentPort.postMessage(result);
```

The main thread can continue handling other work while the worker performs the CPU-heavy calculation.

A **process**, on the other hand, has its own memory space. Node.js can create child processes using the `child_process` module.

Main differences:

| Worker Thread | Child Process |
|---|---|
| Runs in another thread | Runs as another process |
| Shares process resources in controlled ways | Has separate memory space |
| Good for CPU-intensive JS work | Good for running separate programs/scripts |
| Communication can use worker messaging | Communication can use IPC |

**Interview summary:**  
Worker threads are useful for CPU-heavy JavaScript work without blocking the event loop. Child processes are useful when you need a separate process or want to run external programs/scripts.

## Proper Interview Answer — Hindi

Node.js mein main event loop ko block kiye bina heavy work karne ke liye **Worker Threads** aur **Child Processes** important concepts hain.

**Worker Thread** same Node.js process ke andar separate thread par JavaScript run karta hai. Ye CPU-intensive tasks ke liye useful hai, jaise heavy calculation, data processing, image processing etc.

Example:

```js
const { Worker } = require("node:worker_threads");

const worker = new Worker("./worker.js");

worker.on("message", result => {
  console.log(result);
});
```

Worker background thread mein calculation karega aur main thread doosre requests handle kar sakta hai.

**Child Process** separate process hota hai aur uski apni memory space hoti hai. Iska use external commands, scripts ya separate Node.js programs run karne ke liye bhi kiya ja sakta hai.

Main difference:

- Worker Thread → same process ke andar separate thread.
- Child Process → separate process aur separate memory space.

**Interview summary:**  
CPU-heavy JavaScript work ke liye Worker Threads useful hain, jabki external program/script ya isolated process ke liye Child Process useful hota hai.

---

# 7. What is a Child Process in Node.js?

## My PDF Answer — DO NOT CHANGE

A child process in Node.js allows us to run other programs or scripts from our application.

They run in separate processes with their own memory and communicate with the parent via IPC.

Node can use one program to start another process so that the other process has separate memory.

Example:

```js
const cp = require("child_process");

const output = cp.execSync("node test.js");

console.log("output:", output);
```

The notes also show:

```text
test.js
console.log("this is test file")
```

### Methods

- `spawn()` → create a child process to run any command, such as Node, Python, shell command.
- `fork()` → create a child process to run a Node.js script, with built-in communication.

## Proper Interview Answer — English

The **Child Process module** allows a Node.js application to create and control separate operating-system processes.

It is useful when we want to execute another command, script, or Node.js program without doing that work directly inside the main process.

Node.js provides methods such as:

### `exec()`

Runs a command in a shell and collects the output.

```js
const { exec } = require("node:child_process");

exec("node test.js", (error, stdout, stderr) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(stdout);
});
```

### `spawn()`

Starts a process and provides streams for its input/output. It is useful when output can be large or continuous.

```js
const { spawn } = require("node:child_process");

const child = spawn("node", ["test.js"]);

child.stdout.on("data", data => {
  console.log(data.toString());
});
```

### `fork()`

Specifically starts another Node.js module and provides an IPC communication channel.

```js
const { fork } = require("node:child_process");

const child = fork("./worker.js");

child.send({ message: "Hello" });
```

**Interview summary:**  
Child processes provide process-level isolation and allow Node.js to execute commands, scripts, or other programs independently of the main process.

## Proper Interview Answer — Hindi

Node.js ka **Child Process module** application ko separate operating-system process create aur control karne deta hai.

Iska use external commands, scripts ya another Node.js program run karne ke liye hota hai.

Important methods:

- `exec()` → shell command run karta hai aur output collect karta hai.
- `spawn()` → process start karta hai aur streams ke through output handle kar sakta hai.
- `fork()` → another Node.js module ko child process mein run karta hai aur IPC communication provide karta hai.

Example:

```js
const { exec } = require("node:child_process");

exec("node test.js", (error, stdout) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(stdout);
});
```

**Interview summary:**  
Child Process separate process create karke external commands, scripts ya Node.js programs run karne deta hai. Isse main process se process-level isolation milta hai.

---

# 8. What is a Web Worker?

## My PDF Answer — DO NOT CHANGE

A web worker is a feature in browser/client-side JS that allows you to run JavaScript code in the background on a separate thread, without the main/UI thread.

## Proper Interview Answer — English

A **Web Worker** is a browser feature that allows JavaScript to run in a background thread instead of the browser's main UI thread.

Normally, JavaScript that handles the UI runs on the main thread. If we perform a very heavy calculation there, the browser UI can become slow or unresponsive.

A Web Worker can move that calculation to a background thread.

Main file:

```js
const worker = new Worker("worker.js");

worker.postMessage(100000000);

worker.onmessage = event => {
  console.log("Result:", event.data);
};
```

Worker:

```js
self.onmessage = event => {
  const n = event.data;

  let result = 0;

  for (let i = 0; i < n; i++) {
    result += i;
  }

  self.postMessage(result);
};
```

The worker communicates with the main thread using `postMessage()` and message events.

Important interview point: a Web Worker does not directly manipulate the DOM like normal main-thread JavaScript. It is mainly useful for background computation.

## Proper Interview Answer — Hindi

**Web Worker** browser ka feature hai jo JavaScript ko main/UI thread ke alawa background thread mein run karne deta hai.

Agar main thread par heavy calculation chalegi, to UI freeze ya slow ho sakti hai. Web Worker heavy calculation ko background mein execute kar sakta hai.

Main thread:

```js
const worker = new Worker("worker.js");

worker.postMessage(100000000);

worker.onmessage = event => {
  console.log(event.data);
};
```

Worker:

```js
self.onmessage = event => {
  let result = 0;

  for (let i = 0; i < event.data; i++) {
    result += i;
  }

  self.postMessage(result);
};
```

Worker aur main thread `postMessage()` ke through communicate karte hain.

Important: Web Worker normally directly DOM manipulate nahi karta. Ye mainly background computation ke liye use hota hai.

---

# 9. What are React Portals?

## My PDF Answer — DO NOT CHANGE

A React portal is a way to render a component's HTML outside its parent element in the DOM, while still keeping it part of the same React tree.

The notes explain that portals are useful when you want to render something outside the normal parent DOM location.

## Proper Interview Answer — English

A **React Portal** allows a component to render its UI into a different DOM node outside its normal parent DOM hierarchy.

Normally:

```text
App
 └── Parent
      └── Modal
```

With a portal, the Modal can visually/render-wise be placed directly under another DOM node such as `#modal-root`, while it still belongs to the same React component tree.

Example:

```jsx
import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById("modal-root")
  );
}
```

HTML:

```html
<div id="root"></div>
<div id="modal-root"></div>
```

Portals are commonly useful for:

- Modals.
- Dialog boxes.
- Tooltips.
- Dropdowns.
- Toast/notification containers.

One important interview point is that although the DOM node is rendered somewhere else, React still considers the component part of the same React tree. React event propagation also follows the React tree, not simply the physical DOM placement.

## Proper Interview Answer — Hindi

**React Portal** ka use component ke UI ko normal parent DOM ke bahar kisi doosre DOM node mein render karne ke liye hota hai.

Example:

```jsx
import { createPortal } from "react-dom";

function Modal({ children }) {
  return createPortal(
    <div className="modal">
      {children}
    </div>,
    document.getElementById("modal-root")
  );
}
```

HTML:

```html
<div id="root"></div>
<div id="modal-root"></div>
```

Portals commonly use hote hain:

- Modal.
- Dialog.
- Tooltip.
- Dropdown.
- Toast.

Important interview point: DOM mein component ki location alag ho sakti hai, lekin React tree mein wo original component relationship ka part rehta hai.

---

# 10. What are Side Effects in React?

## My PDF Answer — DO NOT CHANGE

Side effects in React are operations that are not related only to rendering UI.

Examples mentioned in the notes:

- HTTP requests (`get/post/put/delete`)
- storing data in browser storage
- working with timer functions

The notes explain that React components should be pure functions when possible, meaning same input gives same output.

Side effects need special handling and `useEffect()` is used to handle them.

If code talks to the outside world, such as an API, browser storage, timers, or subscriptions, it is a side effect and should be placed in an effect.

## Proper Interview Answer — English

A **side effect** is an operation that happens as a result of rendering or component behavior but is not simply calculating JSX from props and state.

React rendering should ideally be predictable and free from external side effects. Examples of side effects include:

- API/network requests.
- Starting or stopping timers.
- Updating browser storage.
- Subscribing to events.
- Connecting to external systems.
- Synchronizing React state with something outside React.

For example:

```jsx
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
```

The API request is a side effect. `useEffect()` tells React that this work should happen after rendering rather than as part of the pure render calculation.

Cleanup is important for subscriptions and timers:

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(id);
  };
}, []);
```

Without cleanup, the timer could continue running after the component is removed.

**Interview summary:**  
Side effects are operations that interact with systems outside React's pure rendering process. `useEffect()` is commonly used to synchronize a component with those external systems.

## Proper Interview Answer — Hindi

React mein **side effect** aisa operation hai jo sirf JSX calculate karne tak limited nahi hota aur kisi external system ke saath interaction karta hai.

Examples:

- API request.
- Timer.
- Browser storage.
- Event subscription.
- External connection.

Example:

```jsx
useEffect(() => {
  fetch("/api/users")
    .then(res => res.json())
    .then(data => setUsers(data));
}, []);
```

Yahan API request side effect hai.

Timer ke case mein cleanup bhi important hai:

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("Running");
  }, 1000);

  return () => {
    clearInterval(id);
  };
}, []);
```

Cleanup se component unmount hone ke baad timer continue nahi karta.

**Interview summary:**  
Side effect React ke pure rendering ke bahar ka external work hai. `useEffect()` ka use component ko external systems ke saath synchronize karne ke liye commonly kiya jata hai.

---

# 11. What are React Web Workers?

## My PDF Answer — DO NOT CHANGE

A React Web Worker is just a normal web worker used inside a React app to run heavy logic (math, data processing, crypto etc.) outside the main UI thread.

The notes explain that React + background worker can be used for heavy tasks because the worker runs in the background.

## Proper Interview Answer — English

A **React Web Worker** is not a separate React feature. It means using the browser's Web Worker API inside a React application.

The purpose is to move CPU-intensive browser-side work away from the main UI thread.

For example, imagine a React application that processes a very large dataset:

```text
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
```

A simple React integration can look like:

```jsx
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
```

The worker can perform the expensive calculation and send the result back using `postMessage()`.

**Interview point:** React still runs the UI on the main browser thread. The Web Worker is used beside React to move heavy computation away from that thread.

## Proper Interview Answer — Hindi

**React Web Worker** React ka separate feature nahi hai. Iska matlab hai React application ke andar browser ka Web Worker API use karna.

Iska main purpose heavy CPU work ko main UI thread se bahar run karna hai.

Flow:

```text
React UI
   ↓
Web Worker ko data
   ↓
Heavy calculation
   ↓
Result
   ↓
React UI
```

Example:

```jsx
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
```

Worker heavy calculation karega aur `postMessage()` ke through result React ko bhej sakta hai.

Important interview point: React UI main thread par run hoti hai; Web Worker heavy calculation ko background thread mein move karta hai.

---

# 12. What is Express Session? Explain Token vs Session Authentication.

## My PDF Answer — DO NOT CHANGE

## Session Authentication — Stateful Authentication

Flow shown in the notes:

```text
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
```

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

```text
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
```

The notes mention:

### Pros

- memory efficient
- stateless
- long-term auth can be supported

### Cons

- less secure compared with the approach described in the notes.

## Proper Interview Answer — English

**Session authentication** and **token authentication** are two common ways to maintain authentication after a user logs in.

### Session-based authentication

HTTP is stateless, so the server does not automatically remember previous requests. With sessions, the server creates a session after successful login.

Typical flow:

```text
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
```

For later requests:

```text
Client
  |
  | session cookie
  v
Server
  |
  | lookup session
  v
Authenticated User
```

In Express, a common implementation is `express-session`:

```js
const session = require("express-session");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
```

The session data can be stored in a dedicated session store such as Redis rather than relying on process memory.

### Token/JWT authentication

With token authentication, after login the server creates a signed token. The client sends the token with later requests.

Typical flow:

```text
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
```

Example concept:

```http
Authorization: Bearer <token>
```

### Main differences

| Session | Token/JWT |
|---|---|
| Server maintains session state | Server can verify token without storing a session record for every token |
| Session ID commonly stored in cookie | Token may be sent in an Authorization header or cookie |
| Requires session-store strategy for multiple servers | Can simplify horizontal scaling, but token lifecycle/revocation still needs design |
| Logout can invalidate the server-side session | Immediate revocation needs additional strategy |

Security depends on implementation. Neither approach is automatically secure or insecure. HTTPS, secure cookie configuration, CSRF considerations, token storage, expiration, rotation, and proper credential handling all matter.

## Proper Interview Answer — Hindi

**Session authentication** aur **Token/JWT authentication** login ke baad user ko authenticated maintain karne ke do common methods hain.

### Session Authentication

HTTP stateless hota hai, isliye server automatically previous request ko remember nahi karta. Session approach mein login successful hone ke baad server session create karta hai.

Flow:

```text
Client
  ↓
Login
  ↓
Server credentials check
  ↓
Session create
  ↓
Session ID
  ↓
Client cookie
```

Next request mein client session cookie bhejta hai aur server session store se user information retrieve karta hai.

Express mein:

```js
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);
```

Production applications mein session data ke liye Redis jaise session store ka use kiya ja sakta hai.

### JWT/Token Authentication

JWT approach mein server successful login ke baad signed token generate karta hai.

Flow:

```text
Login
  ↓
Credentials validate
  ↓
Token generate
  ↓
Client token rakhta hai
  ↓
Request ke saath token bhejta hai
  ↓
Server token verify karta hai
```

Example:

```http
Authorization: Bearer <token>
```

### Interview difference

- Session → server-side session state maintain hoti hai.
- JWT → server token verify kar sakta hai without maintaining a traditional session for every request.
- Session logout ko server-side invalidate karna comparatively straightforward hota hai.
- JWT mein immediate revocation ke liye additional strategy ki zarurat ho sakti hai.

Important: security sirf session ya JWT choose karne se decide nahi hoti. HTTPS, secure cookies, CSRF protection, token expiration, secret management aur proper storage bhi important hain.

---

# 13. What is `Object.create()`?

## My PDF Answer — DO NOT CHANGE

`Object.create()` makes a new object with another object as its prototype, so it can reuse the prototype's properties and methods.

Example:

```js
const animal = {
  eat: true,

  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal);

console.log(dog.eat); // true
dog.walk();           // "Animal walks"
```

The notes explain that:

```js
const dog = Object.create(animal);
```

means the dog's prototype is `animal`.

The dog can use properties/methods from the animal prototype.

The notes also show that if the dog has its own method/property, it can use that as well.

## Proper Interview Answer — English

`Object.create()` creates a new object and explicitly sets another object as its prototype.

Example:

```js
const animal = {
  eat: true,

  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal);

console.log(dog.eat);
dog.walk();
```

`dog` does not directly contain `eat` or `walk`. JavaScript looks at its prototype, which is `animal`, and finds those properties there.

If we add a property directly to `dog`:

```js
dog.name = "Tommy";
```

then `name` belongs directly to `dog`, while `eat` and `walk` are inherited.

This is useful when you want explicit prototype-based inheritance without calling a constructor.

**Important interview point:** `Object.create()` does not clone the source object. It creates a new object whose prototype is the supplied object.

## Proper Interview Answer — Hindi

`Object.create()` ek new object create karta hai aur supplied object ko uska prototype set karta hai.

```js
const animal = {
  eat: true,

  walk() {
    console.log("Animal walks");
  }
};

const dog = Object.create(animal);

dog.walk();
```

`dog` ke andar directly `walk()` nahi hai. JavaScript uske prototype `animal` mein search karta hai aur method mil jata hai.

Agar:

```js
dog.name = "Tommy";
```

to `name` directly `dog` ki property hogi, jabki `eat` aur `walk` prototype se inherited honge.

Important: `Object.create()` source object ka copy/clone nahi banata. Ye new object banakar supplied object ko prototype bana deta hai.

---

# 14. What is the difference between Encoding/Decoding and Encryption/Decryption?

## My PDF Answer — DO NOT CHANGE

### Encoding / Decoding

Used to convert data into a different format for transmission, not for security.

### Encryption / Decryption

Makes data unreadable without the correct key.

Without the key, you cannot easily decrypt it.

Goal is confidentiality and security.

## Proper Interview Answer — English

**Encoding** and **encryption** may both make data look different, but their purposes are completely different.

### Encoding

Encoding converts data into another representation or format so it can be safely transmitted, stored, or interpreted by another system.

It does **not** provide confidentiality.

Example: Base64.

```js
const encoded = Buffer
  .from("Hello")
  .toString("base64");

console.log(encoded);
```

Base64 can be decoded by anyone who has the encoded value. It is not encryption.

### Decoding

Decoding converts the encoded representation back to the original data.

### Encryption

Encryption is a security mechanism. It transforms plaintext into ciphertext using an algorithm and a key.

Only someone with the appropriate key/cryptographic information should be able to recover the original plaintext.

Conceptually:

```text
Plaintext
   ↓
Encryption + Key
   ↓
Ciphertext
   ↓
Decryption + Key
   ↓
Plaintext
```

For example, HTTPS/TLS uses cryptographic mechanisms to protect communication in transit.

**Interview summary:**

- Encoding → changes representation; not security.
- Decoding → reverses encoding.
- Encryption → protects confidentiality.
- Decryption → recovers protected plaintext using the required cryptographic key.

## Proper Interview Answer — Hindi

**Encoding** aur **Encryption** dono data ko different form mein dikha sakte hain, lekin purpose completely different hota hai.

### Encoding

Encoding data ko ek different format/representation mein convert karta hai taaki data transmit ya store karna easy ho.

Example: Base64.

```js
const encoded = Buffer
  .from("Hello")
  .toString("base64");
```

Base64 ko koi bhi decode kar sakta hai. Isliye Base64 security mechanism nahi hai.

### Decoding

Encoded data ko original form mein convert karna decoding hai.

### Encryption

Encryption security ke liye use hota hai. Data ko algorithm aur key ki help se ciphertext mein convert kiya jata hai.

Flow:

```text
Original Data
    ↓
Encryption + Key
    ↓
Encrypted Data
    ↓
Decryption + Key
    ↓
Original Data
```

**Interview summary:**

- Encoding → format change, security nahi.
- Decoding → encoding ko reverse karna.
- Encryption → confidentiality/security.
- Decryption → encrypted data ko recover karna.

---

# 15. Explain the HTTP Status Code Categories.

## My PDF Answer — DO NOT CHANGE

The notes divide HTTP status codes into five categories:

1. **100 — Informational**
   - Request received / continuing process.

2. **200 — Success**
   - Request was successful.

3. **300 — Redirection**
   - Further action is needed, for example redirect.

4. **400 — Client Error**
   - Problem with the client/request.

5. **500 — Server Error**
   - Problem with the server.

## Proper Interview Answer — English

HTTP status codes are three-digit codes returned by a server to describe the result of an HTTP request.

They are divided into five major categories.

### 1xx — Informational

These indicate that the request has been received and processing can continue.

Examples:

- `100 Continue`

### 2xx — Success

These indicate that the request was successfully processed.

Common examples:

- `200 OK` → request succeeded.
- `201 Created` → a new resource was created.
- `204 No Content` → request succeeded but there is no response body.

Example:

```http
GET /users
HTTP/1.1 200 OK
```

### 3xx — Redirection

These indicate that the client needs to follow a different location or that the requested resource has another representation/location.

Examples:

- `301 Moved Permanently`
- `302 Found`
- `304 Not Modified`

### 4xx — Client Errors

These indicate that there is a problem with the request from the client side.

Common examples:

- `400 Bad Request` → request is invalid.
- `401 Unauthorized` → authentication is required or invalid.
- `403 Forbidden` → server understood the request but refuses access.
- `404 Not Found` → resource was not found.
- `429 Too Many Requests` → rate limit exceeded.

### 5xx — Server Errors

These indicate that the server failed to successfully handle a valid request.

Examples:

- `500 Internal Server Error`
- `502 Bad Gateway`
- `503 Service Unavailable`
- `504 Gateway Timeout`

### Interview example

If a client requests:

```http
GET /api/users/123
```

and the user exists:

```http
200 OK
```

If the user does not exist:

```http
404 Not Found
```

If the server crashes while processing:

```http
500 Internal Server Error
```

**Interview summary:**

```text
1xx → Informational
2xx → Success
3xx → Redirection
4xx → Client error
5xx → Server error
```

## Proper Interview Answer — Hindi

HTTP status code three-digit number hota hai jo server client ko batata hai ki request ka result kya raha.

Five major categories hoti hain:

### 1xx — Informational

Request receive ho gayi hai aur processing continue ho sakti hai.

Example:

```text
100 Continue
```

### 2xx — Success

Request successfully process hui.

Examples:

```text
200 OK
201 Created
204 No Content
```

`200` normal successful response ke liye common hai aur `201` new resource create hone par use kiya ja sakta hai.

### 3xx — Redirection

Client ko another location/action follow karne ki zarurat ho sakti hai.

Examples:

```text
301 Moved Permanently
302 Found
304 Not Modified
```

### 4xx — Client Error

Request/client side se problem hai.

Examples:

```text
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
429 Too Many Requests
```

### 5xx — Server Error

Server request ko successfully process nahi kar paya.

Examples:

```text
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
504 Gateway Timeout
```

Example:

Agar:

```http
GET /api/users/123
```

par user mil gaya:

```text
200 OK
```

User nahi mila:

```text
404 Not Found
```

Server mein unexpected problem:

```text
500 Internal Server Error
```

**Interview summary:**

```text
1xx → Information
2xx → Success
3xx → Redirect
4xx → Client Error
5xx → Server Error
```

---

# Final Question List

1. What is the difference between Shallow Copy and Deep Copy?
2. What is the Event Loop?
3. What is the difference between `useState()` and `useReducer()`?
4. What are prototypes in JavaScript?
5. What are clusters in Node.js?
6. What are Worker Threads and Processes in Node.js?
7. What is a Child Process in Node.js?
8. What is a Web Worker?
9. What are React Portals?
10. What are Side Effects in React?
11. What are React Web Workers?
12. What is Express Session? Explain Token vs Session Authentication.
13. What is `Object.create()`?
14. What is the difference between Encoding/Decoding and Encryption/Decryption?
15. Explain the HTTP Status Code Categories.

---

# Interview Preparation Tip

For each question, try to answer in this order during an interview:

1. **Definition** — What is it?
2. **How it works** — Explain the internal flow/concept.
3. **Why it is used** — Give the practical reason.
4. **Example** — Give a small real-world or code example.
5. **Difference/edge case** — Mention an important distinction if relevant.
6. **Short conclusion** — Finish with one clear interview statement.

For example, for Event Loop, do not stop at “Event Loop handles asynchronous operations.” Explain the **Call Stack → runtime/Node.js APIs → queues → Event Loop → Call Stack** flow and then demonstrate it with `Promise` and `setTimeout`.

This structure makes the answer sound like an actual developer explaining the concept rather than reciting a definition.
