# Node.js Interview Questions 1–50 — Answers
## 3-Year MERN Stack Developer | English + Hindi

> Format: Simple interview-ready explanation in English, followed by simple Hindi explanation and an example where useful.

---

## 1. What is Node.js, and why is it used for backend development?

### Simple Explanation — English
Node.js is a JavaScript runtime that allows us to run JavaScript outside the browser, mainly on the server.

It is built on Chrome's V8 JavaScript engine. Node.js is popular for backend development because it uses non-blocking and asynchronous I/O, so it can handle many requests efficiently without waiting for one request to finish before starting another.

It is especially useful for APIs, real-time applications, chat applications, streaming applications, and applications that perform many I/O operations.

### Simple Explanation — Hindi
Node.js ek JavaScript runtime hai jo hume JavaScript ko browser ke bahar, mainly server par run karne deta hai.

Ye Chrome ke V8 engine par based hai. Node.js ka main benefit hai ki ye non-blocking aur asynchronous I/O use karta hai. Isliye ek request ke wait karte hue server doosri requests ko bhi handle kar sakta hai.

### Example
For a MERN application, React frontend can call a Node.js/Express API:

```text
React → Node.js/Express API → MongoDB → Response → React
```

---

## 2. How is Node.js different from JavaScript running in a browser?

### Simple Explanation — English
JavaScript is the language, while Node.js is a runtime environment for executing JavaScript outside the browser.

Browser JavaScript mainly works with browser APIs such as the DOM, `window`, and `document`. Node.js does not provide the browser DOM. Instead, Node.js provides server-side APIs such as `fs`, `http`, `path`, and `process`.

Node.js is commonly used for backend servers, APIs, file handling, and command-line applications.

### Simple Explanation — Hindi
JavaScript ek programming language hai, jabki Node.js ek runtime environment hai jo JavaScript ko browser ke bahar run karta hai.

Browser mein hume `window`, `document`, DOM jaise APIs milte hain. Node.js mein DOM nahi hota. Uski jagah `fs`, `http`, `path`, `process` jaise server-side modules milte hain.

### Example
```js
// Browser
document.getElementById("title");

// Node.js
const fs = require("fs");
fs.readFile("data.txt", "utf8", console.log);
```

---

## 3. What are the main features of Node.js?

### Simple Explanation — English
Important features of Node.js include:

- Event-driven architecture
- Non-blocking I/O
- Asynchronous programming
- Single JavaScript execution thread
- V8 JavaScript engine
- Large npm ecosystem
- Built-in modules for HTTP, files, streams, paths, etc.
- Easy integration with databases and APIs

These features make Node.js suitable for I/O-heavy applications.

### Simple Explanation — Hindi
Node.js ke important features hain:

- Event-driven architecture
- Non-blocking I/O
- Asynchronous programming
- Single JavaScript execution thread
- V8 engine
- Large npm ecosystem
- Built-in modules
- APIs aur databases ke saath easy integration

### Example
A Node.js server can receive a request, start a database operation, and continue handling other work while waiting for the database response.

---

## 4. Why is Node.js called single-threaded?

### Simple Explanation — English
Node.js runs JavaScript code on a single main thread. This means one JavaScript operation is executed at a time on that thread.

However, saying "Node.js is only one thread" is not completely accurate. Node.js uses the Event Loop and can also use the operating system and libuv's thread pool for certain asynchronous operations.

The important point is that normal JavaScript execution happens on the main thread.

### Simple Explanation — Hindi
Node.js mein JavaScript code normally ek main thread par execute hota hai. Matlab ek time par us main thread par ek JavaScript operation execute hota hai.

Lekin iska matlab ye nahi hai ki Node.js ke paas sirf ek hi thread hota hai. Async operations ke liye Node.js libuv aur operating system ki capabilities ka use karta hai.

### Example
```js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 1000);

console.log("End");
```

Main JavaScript thread Event Loop ke through asynchronous work ko coordinate karta hai.

---

## 5. How can Node.js handle thousands of requests if JavaScript runs on a single thread?

### Simple Explanation — English
Node.js uses an Event Loop and non-blocking I/O.

Suppose a request needs data from MongoDB. Node.js does not block the JavaScript thread while waiting for the database. It starts the operation and can handle other requests. When the database result is ready, the callback or Promise continuation is processed.

This is why Node.js can efficiently handle many I/O-bound requests.

### Simple Explanation — Hindi
Node.js Event Loop aur non-blocking I/O ka use karta hai.

Agar kisi request ko database se data chahiye, to Node.js database response ka wait karke main thread ko block nahi karta. Wo doosre requests handle karta rehta hai. Database response aane ke baad us request ka remaining code execute hota hai.

### Example
```js
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
```

Database ke wait ke dauran Node.js doosre I/O work ko handle kar sakta hai.

---

## 6. What is non-blocking I/O in Node.js?

### Simple Explanation — English
Non-blocking I/O means Node.js does not stop the main JavaScript thread while waiting for an I/O operation such as a file read, database operation, or network request.

Instead, Node.js starts the operation and continues doing other work. When the operation finishes, the result is handled asynchronously.

### Simple Explanation — Hindi
Non-blocking I/O ka matlab hai ki file, database ya network operation complete hone ka wait karte hue Node.js main thread ko stop nahi karta.

Operation start hota hai aur Node.js doosra kaam karta rehta hai. Complete hone par result ko asynchronously handle kiya jata hai.

### Example
```js
fs.readFile("data.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("This can execute before the file is read");
```

---

## 7. What is event-driven architecture in Node.js?

### Simple Explanation — English
In an event-driven architecture, different parts of the application react to events.

Node.js uses EventEmitter and the Event Loop heavily for this model. Instead of continuously checking whether something happened, code can register a listener and execute when the event occurs.

### Simple Explanation — Hindi
Event-driven architecture mein application events ke basis par kaam karta hai.

Hum kisi event ke liye listener register kar sakte hain. Jab event occur hota hai, us event ka handler execute hota hai.

### Example
```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("userCreated", (user) => {
  console.log("Send welcome email to", user.name);
});

emitter.emit("userCreated", { name: "Rahul" });
```

---

## 8. What is the role of the V8 engine in Node.js?

### Simple Explanation — English
V8 is Google's open-source JavaScript engine. It is used by Chrome and Node.js.

Its job is to execute JavaScript code. V8 converts JavaScript into machine-level instructions and uses techniques such as JIT compilation to improve execution performance.

Node.js adds server-side APIs and runtime features around the V8 engine.

### Simple Explanation — Hindi
V8 Google ka JavaScript engine hai. Chrome aur Node.js dono V8 ka use karte hain.

V8 JavaScript code ko execute karta hai aur performance improve karne ke liye JIT compilation jaise techniques use karta hai.

Node.js V8 ke upar server-side features provide karta hai.

### Example
```text
JavaScript code
      ↓
     V8
      ↓
Machine-level execution
```

---

## 9. What is libuv, and why is it important in Node.js?

### Simple Explanation — English
libuv is a library used by Node.js for asynchronous I/O and the Event Loop infrastructure.

It helps Node.js handle operations such as network I/O and provides a thread pool for certain operations that should not block the main JavaScript thread.

So, V8 executes JavaScript, while libuv is an important part of Node.js's asynchronous runtime.

### Simple Explanation — Hindi
libuv Node.js ke asynchronous I/O aur Event Loop infrastructure ka important part hai.

Ye Node.js ko asynchronous operations handle karne mein help karta hai aur kuch operations ke liye thread pool provide karta hai.

Simple way mein:

- V8 → JavaScript execute karta hai
- libuv → async I/O aur Event Loop infrastructure mein help karta hai

---

## 10. What is the difference between synchronous and asynchronous operations in Node.js?

### Simple Explanation — English
A synchronous operation blocks execution until it finishes.

An asynchronous operation starts the work and allows the application to continue. Its result is handled later using a callback, Promise, or `async/await`.

### Simple Explanation — Hindi
Synchronous operation mein current execution tab tak wait karta hai jab tak operation complete na ho jaye.

Asynchronous operation mein operation start hota hai aur application doosra kaam kar sakti hai. Result baad mein callback, Promise ya `async/await` se handle hota hai.

### Example
```js
// Synchronous
const data = fs.readFileSync("data.txt");

// Asynchronous
fs.readFile("data.txt", (err, data) => {
  console.log(data);
});
```

Server code mein unnecessary synchronous operations avoid karna important hai.

---

## 11. What are blocking operations in Node.js, and why should they be avoided?

### Simple Explanation — English
A blocking operation keeps the main JavaScript thread busy and prevents it from handling other JavaScript work.

This can be a serious problem in a Node.js server because one expensive synchronous operation can delay many incoming requests.

### Simple Explanation — Hindi
Blocking operation main JavaScript thread ko busy rakhta hai aur is dauran doosre JavaScript tasks properly execute nahi ho pate.

Server mein ye problem create kar sakta hai because ek heavy operation bahut saare users ke requests ko delay kar sakta hai.

### Example
```js
const data = fs.readFileSync("very-large-file.txt");
```

For server-side request handling, an asynchronous API or streaming approach is generally preferable.

---

## 12. When is Node.js a good choice, and when is it not a good choice?

### Simple Explanation — English
Node.js is a good choice when the application performs a lot of I/O operations, such as:

- REST APIs
- Real-time applications
- Chat applications
- Streaming
- Microservices
- Applications with many concurrent connections

Node.js may require additional design for CPU-heavy work because long CPU-bound JavaScript can block the main thread.

### Simple Explanation — Hindi
Node.js I/O-heavy applications ke liye bahut useful hai, jaise REST APIs, chat applications, real-time apps, streaming aur microservices.

Agar application mein bahut heavy CPU calculations hain, to main thread block ho sakta hai. Aise cases mein Worker Threads ya separate services/processes consider kiye ja sakte hain.

---

## 13. What is the Node.js Event Loop?

### Simple Explanation — English
The Event Loop is a mechanism that allows Node.js to handle asynchronous operations while JavaScript execution remains on the main thread.

When asynchronous work completes, the Event Loop helps schedule the related callbacks or continuations for execution.

This is a core reason Node.js can handle many I/O operations without creating one JavaScript thread per request.

### Simple Explanation — Hindi
Event Loop Node.js ka important mechanism hai jo asynchronous operations ko handle karne mein help karta hai.

Jab asynchronous operation complete hota hai, uska callback ya Promise continuation appropriate time par execute hota hai.

### Simple Flow
```text
Request
  ↓
Start async operation
  ↓
Node.js continues other work
  ↓
Operation completes
  ↓
Callback/Promise continuation
  ↓
Response
```

---

## 14. How does the Node.js Event Loop work internally?

### Simple Explanation — English
At a high level, Node.js runs JavaScript on the main thread and uses the Event Loop to coordinate asynchronous callbacks and I/O.

The Event Loop has different phases, including timers, pending callbacks, poll, check, and close callbacks. Microtasks such as Promise callbacks are processed according to Node.js's scheduling rules between pieces of work.

For interviews, the important idea is: Node.js does not create a separate JavaScript thread for every request. It uses the Event Loop to coordinate asynchronous work.

### Simple Explanation — Hindi
High level par Node.js main JavaScript thread par code run karta hai aur Event Loop asynchronous callbacks aur I/O ko coordinate karta hai.

Event Loop ke multiple phases hote hain, jaise timers, poll, check aur close callbacks.

Interview mein main point ye hai ki har request ke liye alag JavaScript thread create nahi hota. Event Loop asynchronous work ko coordinate karta hai.

---

## 15. What are the different phases of the Node.js Event Loop?

### Simple Explanation — English
The commonly discussed Event Loop phases are:

1. Timers
2. Pending callbacks
3. Idle, prepare
4. Poll
5. Check
6. Close callbacks

Different types of callbacks are handled in different phases.

The exact internal behavior can be more detailed, but for interviews you should understand the purpose of the major phases rather than memorizing implementation details.

### Simple Explanation — Hindi
Node.js Event Loop ke commonly discussed phases hain:

1. Timers
2. Pending callbacks
3. Idle, prepare
4. Poll
5. Check
6. Close callbacks

Har phase mein particular type ke callbacks process hote hain.

---

## 16. What is the difference between the call stack, callback queue, and Event Loop?

### Simple Explanation — English
The **call stack** keeps track of currently executing JavaScript functions.

The **callback queues** hold callbacks that are ready to be processed according to the relevant scheduling mechanism.

The **Event Loop** coordinates when queued asynchronous work can be moved into JavaScript execution.

### Simple Explanation — Hindi
**Call Stack** mein currently execute ho rahe JavaScript functions hote hain.

**Queues** mein asynchronous callbacks ya scheduled work wait kar sakte hain.

**Event Loop** check karta hai ki JavaScript execution ke liye queued work kab process kiya ja sakta hai.

### Simple Flow
```text
JavaScript
   ↓
Call Stack
   ↓
Async operation
   ↓
Queue / scheduling
   ↓
Event Loop
   ↓
Call Stack
```

---

## 17. What is the difference between microtasks and macrotasks in Node.js?

### Simple Explanation — English
Microtasks are high-priority asynchronous callbacks that are processed before moving on to other event-loop work in the relevant execution cycle.

Examples include Promise callbacks. Node.js also has the special `process.nextTick()` queue, which has even stronger scheduling priority.

Macrotask-style work includes timers and `setImmediate()` callbacks.

### Simple Explanation — Hindi
Microtasks asynchronous work ki high-priority category hai. Promise callbacks iska common example hain.

Node.js mein `process.nextTick()` ki apni special queue hoti hai jo bahut high priority par process hoti hai.

Timers aur `setImmediate()` jaise callbacks doosre Event Loop phases mein process hote hain.

### Example
```js
console.log("1");

Promise.resolve().then(() => console.log("2"));

setTimeout(() => console.log("3"), 0);

console.log("4");
```

Typical output:

```text
1
4
2
3
```

---

## 18. What is the difference between process.nextTick() and setImmediate()?

### Simple Explanation — English
Both schedule asynchronous callbacks, but they are scheduled differently.

`process.nextTick()` callbacks are processed using Node.js's next-tick queue and run before the Event Loop continues to later phases.

`setImmediate()` schedules a callback for the Event Loop's check phase.

Because `process.nextTick()` can repeatedly run before the Event Loop moves forward, excessive use can starve I/O.

### Simple Explanation — Hindi
`process.nextTick()` callback ko Node.js ki next-tick queue mein schedule karta hai.

`setImmediate()` callback ko Event Loop ke check phase ke liye schedule karta hai.

`process.nextTick()` ko excessively use karne se Event Loop ke doosre work ko delay kiya ja sakta hai.

### Example
```js
process.nextTick(() => {
  console.log("nextTick");
});

setImmediate(() => {
  console.log("setImmediate");
});
```

Exact ordering can depend on where the code is executed, especially when timers/I/O are involved.

---

## 19. What is the difference between setTimeout() and setImmediate()?

### Simple Explanation — English
`setTimeout(callback, delay)` schedules a callback after at least the specified delay has elapsed.

`setImmediate(callback)` schedules a callback for the Event Loop's check phase.

Their ordering is context-dependent. Inside an I/O callback, `setImmediate()` is commonly executed before a zero-delay `setTimeout()`.

### Simple Explanation — Hindi
`setTimeout()` minimum delay ke baad callback schedule karta hai.

`setImmediate()` Event Loop ke check phase mein callback schedule karta hai.

Dono ka exact execution order context par depend kar sakta hai.

### Example
```js
setTimeout(() => console.log("timeout"), 0);

setImmediate(() => console.log("immediate"));
```

Top-level code par output ko fixed order maan kar nahi chalna chahiye.

---

## 20. In what order do process.nextTick(), Promises, setTimeout(), and setImmediate() execute?

### Simple Explanation — English
A simplified interview model is:

1. Current synchronous JavaScript finishes.
2. `process.nextTick()` callbacks are processed.
3. Promise microtasks are processed.
4. Event Loop phases continue, where timers and `setImmediate()` are handled according to their phase and context.

However, the exact ordering of timers and `setImmediate()` can depend on where they are scheduled.

### Simple Explanation — Hindi
Simplified model mein:

1. Pehle current synchronous code complete hota hai.
2. `process.nextTick()` callbacks process hote hain.
3. Promise microtasks process hote hain.
4. Uske baad Event Loop apne phases ke according timers, `setImmediate()` etc. process karta hai.

`setTimeout(0)` aur `setImmediate()` ka exact order har context mein same nahi hota.

---

## 21. Why can process.nextTick() be dangerous if used excessively?

### Simple Explanation — English
`process.nextTick()` callbacks are processed before the Event Loop continues to later phases.

If code continuously schedules more `process.nextTick()` callbacks, the Event Loop may spend too much time processing them and delay I/O, timers, and other work.

This is called starvation of the Event Loop.

### Simple Explanation — Hindi
`process.nextTick()` ki priority high hoti hai. Agar hum continuously naye `nextTick()` callbacks schedule karte rahein, to Event Loop doosre kaam jaise I/O aur timers ko delay kar sakta hai.

Isse Event Loop starvation ho sakta hai.

### Example
```js
function loop() {
  process.nextTick(loop);
}

loop();
```

Aise code se Event Loop effectively doosre work ko process karne ka chance nahi paa sakta.

---

## 22. What happens when you execute a CPU-heavy operation inside a Node.js request handler?

### Simple Explanation — English
A CPU-heavy synchronous operation can block the main JavaScript thread.

While it is running, the Event Loop cannot process other JavaScript callbacks normally. As a result, other users' requests may become slow even if their operations are simple.

For CPU-heavy work, consider Worker Threads, separate processes, background jobs, or another service depending on the use case.

### Simple Explanation — Hindi
Agar request handler ke andar heavy CPU calculation synchronous way mein run hoti hai, to main JavaScript thread block ho sakta hai.

Is dauran doosre users ke requests bhi delay ho sakte hain.

### Example
```js
app.get("/calculate", (req, res) => {
  const result = heavyCalculation();
  res.json({ result });
});
```

Agar `heavyCalculation()` bahut time leta hai, to ye server ke baaki requests ko affect kar sakta hai.

---

## 23. How does Node.js handle asynchronous I/O operations?

### Simple Explanation — English
Node.js starts an asynchronous I/O operation and does not wait synchronously for it to finish.

The underlying runtime, operating system, or libuv mechanisms handle the operation. When it is ready, the associated callback or Promise continuation is scheduled so JavaScript can process the result.

### Simple Explanation — Hindi
Node.js asynchronous I/O operation start karta hai aur uske complete hone tak main JavaScript execution ko unnecessarily block nahi karta.

Underlying runtime/OS/libuv operation ko handle karte hain. Complete hone ke baad callback ya Promise continuation execute hoti hai.

### Example
```js
fs.readFile("users.json", "utf8")
  .then(data => {
    console.log(data);
  });
```

The JavaScript thread does not synchronously wait for the entire file operation.

---

## 24. What is the Node.js thread pool?

### Simple Explanation — English
Node.js uses a libuv-managed thread pool for certain operations that should not be performed directly on the main JavaScript thread.

Common examples can include some file-system operations, DNS operations, and cryptographic operations.

The thread pool allows these operations to happen without blocking JavaScript execution.

### Simple Explanation — Hindi
Node.js/libuv kuch operations ke liye thread pool use karta hai, taaki main JavaScript thread unnecessarily block na ho.

File-system operations, kuch DNS operations aur cryptographic operations thread pool ka use kar sakte hain.

### Important Interview Point
The thread pool is not the same thing as saying Node.js runs all JavaScript on multiple threads. Normal JavaScript execution still happens on the main thread.

---

## 25. Which operations use the libuv thread pool?

### Simple Explanation — English
The exact list depends on Node.js and the underlying platform, but common examples include:

- Some file-system operations
- DNS operations such as `dns.lookup()`
- Certain crypto operations
- Some compression operations

Network sockets generally rely heavily on the operating system's asynchronous networking facilities rather than simply putting every network request into the libuv thread pool.

### Simple Explanation — Hindi
Common examples jahan libuv thread pool use ho sakta hai:

- Kuch file-system operations
- `dns.lookup()`
- Kuch crypto operations
- Kuch compression operations

Important point: har network request thread pool mein simply execute nahi hoti. Networking ke liye Node.js operating system ke async mechanisms ka bhi use karta hai.

---

## 26. What is a callback in Node.js?

### Simple Explanation — English
A callback is a function passed to another function so that it can be executed later, usually after an asynchronous operation completes.

Callbacks were one of the original common patterns for asynchronous Node.js programming.

### Simple Explanation — Hindi
Callback ek function hota hai jo doosre function ko argument ke roop mein diya jata hai aur baad mein execute hota hai, usually asynchronous operation complete hone ke baad.

### Example
```js
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
```

Yahan `(err, data) => {}` callback hai.

---

## 27. What is callback hell, and how can you avoid it?

### Simple Explanation — English
Callback hell happens when many asynchronous operations are nested inside each other, making the code difficult to read, maintain, and handle errors in.

It can be reduced by using:

- Promises
- `async/await`
- Small reusable functions
- Proper error handling

### Simple Explanation — Hindi
Jab multiple asynchronous operations ek doosre ke andar deeply nested callbacks mein likhe jate hain, to code difficult ho jata hai. Isse callback hell kaha jata hai.

Promises aur `async/await` use karke code ko cleaner banaya ja sakta hai.

### Example
Instead of:

```js
getUser(id, (err, user) => {
  getOrders(user, (err, orders) => {
    getPayment(orders, (err, payment) => {
      // ...
    });
  });
});
```

Use:

```js
const user = await getUser(id);
const orders = await getOrders(user);
const payment = await getPayment(orders);
```

---

## 28. What is an error-first callback pattern?

### Simple Explanation — English
The error-first callback pattern is a common Node.js convention where the first argument is the error and the second argument contains the successful result.

Usually:

```js
callback(error, result)
```

If `error` is not null, the operation failed.

### Simple Explanation — Hindi
Error-first callback Node.js ka common pattern hai jisme callback ka first argument error hota hai aur second argument successful result.

```js
callback(error, result)
```

### Example
```js
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    return console.error(err);
  }

  console.log(data);
});
```

---

## 29. What is a Promise?

### Simple Explanation — English
A Promise represents the eventual result of an asynchronous operation.

A Promise can be:

- Pending
- Fulfilled
- Rejected

We can handle a Promise using `.then()`, `.catch()`, `.finally()`, or `async/await`.

### Simple Explanation — Hindi
Promise asynchronous operation ke future result ko represent karta hai.

Iski three main states hoti hain:

- Pending
- Fulfilled
- Rejected

### Example
```js
const promise = fetchUser();

promise
  .then(user => console.log(user))
  .catch(error => console.error(error));
```

---

## 30. What are the different states of a Promise?

### Simple Explanation — English
A Promise has three main states:

1. **Pending** — operation is still running.
2. **Fulfilled** — operation completed successfully.
3. **Rejected** — operation failed.

Once a Promise becomes fulfilled or rejected, it is settled and does not change to another state.

### Simple Explanation — Hindi
Promise ki three main states hoti hain:

1. **Pending** — operation abhi complete nahi hua.
2. **Fulfilled** — operation successfully complete ho gaya.
3. **Rejected** — operation fail ho gaya.

### Example
```text
Pending
   ↓
Fulfilled

or

Pending
   ↓
Rejected
```

---

## 31. What is the difference between callbacks and Promises?

### Simple Explanation — English
Callbacks use a function that is called when an operation finishes.

Promises represent the future result and provide a more structured way to chain asynchronous operations and handle errors.

Promises also work naturally with `async/await`, which often makes asynchronous code easier to read.

### Simple Explanation — Hindi
Callback mein hum ek function pass karte hain jo operation complete hone par call hota hai.

Promise future result ko represent karta hai aur chaining aur error handling ko more structured banata hai.

### Example
Callback:

```js
getUser(id, (err, user) => {
  // ...
});
```

Promise:

```js
const user = await getUser(id);
```

---

## 32. What is async/await, and how does it work with Promises?

### Simple Explanation — English
`async/await` is syntax that makes Promise-based asynchronous code easier to read.

An `async` function always returns a Promise. `await` pauses that async function until the Promise settles, but it does not mean the entire Node.js process is synchronously blocked.

### Simple Explanation — Hindi
`async/await` Promises ke saath asynchronous code ko simple aur readable banata hai.

`async` function Promise return karta hai. `await` us particular async function ki execution ko Promise settle hone tak pause karta hai. Ye poore Node.js process ko block nahi karta.

### Example
```js
async function getUserData() {
  const user = await User.findById(id);
  return user;
}
```

---

## 33. What is the difference between Promise.all() and Promise.allSettled()?

### Simple Explanation — English
`Promise.all()` is useful when all operations must succeed. If one Promise rejects, the combined Promise rejects.

`Promise.allSettled()` waits for every Promise and gives the result of each operation, whether it fulfilled or rejected.

### Simple Explanation — Hindi
`Promise.all()` tab use karte hain jab hume multiple operations ke successful results chahiye. Ek reject hone par combined Promise reject ho jata hai.

`Promise.allSettled()` sabhi Promises ke complete hone ka wait karta hai aur har operation ka status deta hai.

### Example
```js
const results = await Promise.all([
  getUser(),
  getOrders(),
  getProfile()
]);
```

If all three are required, `Promise.all()` is appropriate.

```js
const results = await Promise.allSettled([
  sendEmail(),
  sendNotification(),
  logActivity()
]);
```

Here, we may want to know the result of every operation.

---

## 34. What is the difference between Promise.race() and Promise.any()?

### Simple Explanation — English
`Promise.race()` settles as soon as the first Promise settles, whether it fulfills or rejects.

`Promise.any()` waits for the first Promise that fulfills. It rejects only when all input Promises reject.

### Simple Explanation — Hindi
`Promise.race()` mein jo Promise sabse pehle settle hota hai, uska result milta hai—chahe success ho ya failure.

`Promise.any()` mein hume first successful Promise chahiye. Agar sabhi fail ho jayein, tab `Promise.any()` reject hota hai.

### Example
```js
const result = await Promise.race([
  api1(),
  api2()
]);
```

This can be useful when the first completed result determines what you want.

---

## 35. How do you properly handle errors with async/await?

### Simple Explanation — English
A common approach is to use `try/catch` around awaited operations.

In Express, application-wide error-handling middleware can then handle errors consistently.

### Simple Explanation — Hindi
`async/await` ke saath errors handle karne ke liye commonly `try/catch` use karte hain.

Express application mein centralized error middleware ke through errors ko consistent response mein convert kiya ja sakta hai.

### Example
```js
app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});
```

---

## 36. What happens if an async function throws an error?

### Simple Explanation — English
An `async` function returns a Promise. If an error is thrown inside it, the returned Promise becomes rejected.

The rejection can be handled with `try/catch` around `await` or with `.catch()`.

### Simple Explanation — Hindi
`async` function Promise return karta hai. Agar function ke andar error throw hota hai, to returned Promise reject ho jata hai.

Us error ko `try/catch` ya `.catch()` se handle kar sakte hain.

### Example
```js
async function getData() {
  throw new Error("Something went wrong");
}

try {
  await getData();
} catch (error) {
  console.log(error.message);
}
```

---

## 37. What are modules in Node.js?

### Simple Explanation — English
A module is a reusable piece of code that can expose functionality to other parts of an application.

Node.js provides built-in modules such as `fs`, `http`, `path`, and `crypto`. We can also create our own modules and install third-party modules through npm.

### Simple Explanation — Hindi
Module reusable code ka ek part hota hai jise application ke doosre parts mein use kiya ja sakta hai.

Node.js mein built-in modules bhi hote hain aur hum custom modules bhi create kar sakte hain.

### Example
```js
// math.js
module.exports.add = (a, b) => a + b;

// app.js
const { add } = require("./math");
console.log(add(2, 3));
```

---

## 38. What is the difference between CommonJS and ES Modules?

### Simple Explanation — English
CommonJS is the traditional Node.js module system and commonly uses `require()` and `module.exports`.

ES Modules is the standard JavaScript module system and uses `import` and `export`.

### Simple Explanation — Hindi
CommonJS mein generally:

```js
const express = require("express");
module.exports = something;
```

ES Modules mein:

```js
import express from "express";
export default something;
```

Modern Node.js supports both, depending on project configuration.

---

## 39. What is the difference between require() and import?

### Simple Explanation — English
`require()` belongs to the CommonJS module system.

`import` belongs to ES Modules.

They differ in module semantics, configuration, and loading behavior. In a project, it is usually better to follow one consistent module style rather than mixing them unnecessarily.

### Simple Explanation — Hindi
`require()` CommonJS ka part hai aur `import` ES Modules ka.

Example:

```js
const express = require("express");
```

versus:

```js
import express from "express";
```

Project ke configuration ke according appropriate module system use karna chahiye.

---

## 40. What is module caching in Node.js?

### Simple Explanation — English
When a CommonJS module is loaded with `require()`, Node.js caches the loaded module.

If the same module is required again, Node.js can return the cached module instead of executing the module file from the beginning again.

This improves efficiency and also means module-level state can be shared across imports.

### Simple Explanation — Hindi
CommonJS mein jab ek module `require()` se load hota hai, Node.js usse cache karta hai.

Agar wahi module dobara require kiya jaye, Node.js cached version return kar sakta hai.

### Example
```js
const config1 = require("./config");
const config2 = require("./config");

console.log(config1 === config2);
```

For the same resolved CommonJS module, this is generally `true`.

---

## 41. What happens when you require the same module multiple times?

### Simple Explanation — English
For CommonJS modules, Node.js caches the module after the first load.

Later `require()` calls normally return the same cached module instance rather than executing the module code again.

This is important when a module contains state.

### Simple Explanation — Hindi
CommonJS mein pehli baar module load hone ke baad wo cache ho jata hai.

Uske baad same module ko require karne par generally cached instance milta hai.

### Example
```js
// counter.js
let count = 0;

module.exports = () => ++count;
```

If multiple files require the same module, they normally interact with the same cached module instance.

---

## 42. What is package.json, and what information does it contain?

### Simple Explanation — English
`package.json` is the main configuration file for a Node.js project.

It can contain:

- Project name
- Version
- Scripts
- Dependencies
- Dev dependencies
- Entry points
- Module configuration
- Package metadata

### Simple Explanation — Hindi
`package.json` Node.js project ki important configuration file hoti hai.

Ismein project ki dependencies, scripts, version, name aur other configuration information hoti hai.

### Example
```json
{
  "name": "my-api",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^5.0.0"
  }
}
```

---

## 43. What is the difference between dependencies and devDependencies?

### Simple Explanation — English
`dependencies` contain packages required by the application at runtime.

`devDependencies` contain packages mainly required during development, testing, linting, or building.

### Simple Explanation — Hindi
`dependencies` mein wo packages hote hain jo application ko run karne ke liye required hain.

`devDependencies` mein development tools hote hain, jaise testing tools, linters, development servers, etc.

### Example
```json
{
  "dependencies": {
    "express": "..."
  },
  "devDependencies": {
    "nodemon": "..."
  }
}
```

Express is required by the application; nodemon is commonly a development tool.

---

## 44. What is the purpose of package-lock.json?

### Simple Explanation — English
`package-lock.json` records the resolved versions of installed packages and their dependency tree.

It helps different environments install a consistent dependency tree and improves reproducibility.

### Simple Explanation — Hindi
`package-lock.json` installed packages ke exact resolved versions aur dependency tree ko record karta hai.

Isse development, CI, aur production environments mein dependency installation more consistent ho sakta hai.

### Example
If your `package.json` allows a range of versions, the lock file records the specific resolved versions used for that installation.

---

## 45. What is the difference between npm install and npm ci?

### Simple Explanation — English
`npm install` installs dependencies based on the project configuration and can update the lock file when necessary.

`npm ci` is intended for clean, reproducible installations, especially in CI/CD environments. It uses the lock file and expects it to be consistent with `package.json`.

`npm ci` typically removes the existing `node_modules` before installing.

### Simple Explanation — Hindi
`npm install` normal dependency installation ke liye use hota hai aur required situation mein lock file update bhi kar sakta hai.

`npm ci` mainly CI/CD aur clean installation ke liye use hota hai. Ye lock file ke exact dependency versions ko follow karta hai.

### Example
```bash
# Local development
npm install

# CI/CD
npm ci
```

---

## 46. What is semantic versioning, and how do ^, ~, and exact versions work?

### Simple Explanation — English
Semantic Versioning generally follows:

```text
MAJOR.MINOR.PATCH
```

For example:

```text
2.4.1
```

- MAJOR → breaking changes
- MINOR → backward-compatible features
- PATCH → backward-compatible bug fixes

Common version ranges:

- `2.4.1` → exact version
- `^2.4.1` → allows compatible minor/patch updates within major version 2
- `~2.4.1` → generally allows patch-level updates within the 2.4 minor line

### Simple Explanation — Hindi
Semantic versioning ka format hota hai:

```text
MAJOR.MINOR.PATCH
```

Example:

```text
2.4.1
```

- Major → breaking changes
- Minor → new backward-compatible features
- Patch → bug fixes

`^` aur `~` version range define karte hain.

---

## 47. What is the Node.js fs module?

### Simple Explanation — English
The `fs` module provides APIs for working with the file system.

It can be used to:

- Read files
- Write files
- Update files
- Delete files
- Create directories
- Work with file metadata

It provides both synchronous and asynchronous APIs.

### Simple Explanation — Hindi
`fs` Node.js ka built-in File System module hai.

Isse hum files ko read, write, update, delete aur directories ke saath kaam kar sakte hain.

### Example
```js
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

## 48. What is the difference between fs.readFile() and fs.readFileSync()?

### Simple Explanation — English
`fs.readFile()` is asynchronous. It starts the file operation and lets the Event Loop continue handling other work.

`fs.readFileSync()` is synchronous. It blocks the JavaScript thread until the file operation completes.

For request-handling code in a server, asynchronous APIs are generally preferred.

### Simple Explanation — Hindi
`fs.readFile()` asynchronous hai, isliye file read hone ke wait mein main JavaScript execution unnecessarily block nahi hota.

`fs.readFileSync()` synchronous hai aur operation complete hone tak execution block karta hai.

### Example
```js
// Async
fs.readFile("data.txt", "utf8", callback);

// Sync
const data = fs.readFileSync("data.txt", "utf8");
```

---

## 49. What is a Buffer in Node.js?

### Simple Explanation — English
A Buffer is a Node.js object used to work with raw binary data.

Buffers are useful when working with data such as:

- Files
- Network packets
- Images
- Audio
- Video
- Binary protocols

A Buffer represents bytes rather than normal JavaScript text.

### Simple Explanation — Hindi
Buffer Node.js mein raw binary data ke saath kaam karne ke liye use hota hai.

Images, files, audio, video aur network data jaise binary data ko handle karte waqt Buffer useful hota hai.

### Example
```js
const buffer = Buffer.from("Hello");

console.log(buffer);
console.log(buffer.toString());
```

---

## 50. Why are Buffers needed in Node.js?

### Simple Explanation — English
JavaScript strings are designed for text, but servers often need to handle raw binary data.

Buffers provide an efficient way to store and process bytes directly. Node.js uses them extensively in file systems, streams, networking, and other low-level operations.

### Simple Explanation — Hindi
JavaScript strings mainly text ke liye hoti hain, lekin backend applications ko raw binary data bhi handle karna padta hai.

Buffer bytes ko directly represent aur process karne ka way provide karta hai.

### Example
When a user uploads an image:

```text
Image
  ↓
Binary data
  ↓
Buffer / Stream
  ↓
Storage
```

For large files, Streams can be preferable to keeping the entire file in memory at once.
