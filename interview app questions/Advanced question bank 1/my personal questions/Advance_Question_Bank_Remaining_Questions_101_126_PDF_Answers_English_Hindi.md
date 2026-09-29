# Remaining Interview Questions — 101–126

> **Source:** Questions 101–126 from `Advance_Question_Bank.md`. The question list is preserved in source order.
>
> **PDF Answer rule:** The **My PDF Answer — Verbatim Transcription** section preserves the corresponding handwritten PDF answer as closely as readable. It does not silently correct the PDF. Where the PDF does not contain an answer for the exact question, that is stated explicitly.
>
> **Format:** My PDF Answer → Simple Explanation (English) → Simple Explanation (Hindi)

## 101. Explain garbage collection in Node.js.

### My PDF Answer — Verbatim Transcription

Garbage Collection in Node.js automatically removes unused data
to free up memory.

-> the v8 engine handles this using the Mark and Sweep method.

-> to keep memory usage low.
1) avoid global variables,
2) use Streams for big files.
3) monitor memory with process.memoryUsage() .

### Simple Explanation — English

Garbage collection automatically removes objects that are no longer reachable so memory can be reused. Node.js uses the V8 JavaScript engine, which performs automatic garbage collection.

In practice, developers should still avoid accidental memory retention—for example, long-lived references, unbounded caches, timers, or listeners that are never cleaned up. The PDF also recommends avoiding unnecessary global variables, using streams for large files, and monitoring memory usage.

### Simple Explanation — Hindi

Garbage collection ka kaam un data/objects ko memory se clean karna hai jo ab use nahi ho rahe aur reachable nahi hain. Node.js mein V8 engine automatic garbage collection handle karta hai.

Developer ko phir bhi unnecessary global variables, continuously growing cache, timers aur listeners ko properly manage karna chahiye. Large files ke liye streams aur memory monitor karna bhi useful hai.

---

## 102. What is cluster mode, and how does it help a Node.js application?

### My PDF Answer — Verbatim Transcription

cluster mode allows a Node.js app to run multiple processes
(workers) using all CPU cores instead of just one.
This improves performance and handles more requests efficiently.

How it helps

1) Better performance - Uses multiple CPU cores for faster
   processing.
2) Handle more traffic - Distributes requests across workers.
3) prevent crashes - if one workers fails, other keep
   running.

### Simple Explanation — English

Cluster mode lets a Node.js application run multiple worker processes so it can make better use of multiple CPU cores. Incoming work can be distributed across workers.

This can increase throughput and provide some process-level fault isolation. It is different from `worker_threads`, which use threads inside a Node.js process.

### Simple Explanation — Hindi

Cluster mode ek Node.js application ke multiple worker processes run karne deta hai, jisse multiple CPU cores ka better use ho sakta hai. Requests workers ke across distribute ki ja sakti hain.

Isse performance aur throughput improve ho sakta hai, aur agar ek worker fail ho jaye to baaki workers continue kar sakte hain.

---

## 103. How do you monitor a Node.js application in production?

### My PDF Answer — Verbatim Transcription

monitoring helps tracks performance, detect issues and
optimize resource usage. here are the keys to monitor a node app.

1) Use node.js Built-in tools
• process.memoryUsage() -> check memory usage.
• process.cpuUsage() -> track CPU load.
• console.log() & console.timeEnd() -> measure execution time.

2) use Monitoring tools.
• PM2 -> process manager with built in monitoring.

3) monitor API & Response times
• Express middleware like morgan logs HTTP request.

4) Setup Alerts & Crash Handling
... Set up Slack and email alerts for high memory or cpu usage.

### Simple Explanation — English

Production monitoring means tracking application health, performance, errors, resource usage, and request latency.

The PDF suggests using Node.js metrics such as `process.memoryUsage()` and `process.cpuUsage()`, timing code when useful, PM2 monitoring, HTTP request logging such as Morgan, and alerts for abnormal CPU or memory usage.

In a real production system, centralized logs, metrics, tracing, and error monitoring can be added as the application grows.

### Simple Explanation — Hindi

Production monitoring mein memory, CPU, API response time, errors aur application health track karte hain.

PDF mein `process.memoryUsage()`, `process.cpuUsage()`, `console.timeEnd()`, PM2 monitoring, Morgan request logs aur high CPU/memory ke liye alerts suggest kiye gaye hain.

Large production system mein centralized logging, metrics aur error monitoring bhi useful hote hain.

---

## 104. What are lexical environments in JavaScript?

### My PDF Answer — Verbatim Transcription

A lexical environment in js is like a Storage Space where
variable and functions are kept. Each function or block
gets its own Storage when it runs, and it can access
variable from its outer (parent) function.

Key points
• Every function gets its own memory Space (lexical environment)
• inner functions can access outer variables, but not the
  other way around.
• this is the reason why closures work in js.

### Simple Explanation — English

A lexical environment is the execution-time structure JavaScript uses to keep track of variables and their relationships within a scope.

A function can access variables from its outer lexical environments. This scope relationship is what allows closures to remember outer variables.

### Simple Explanation — Hindi

Lexical environment ek conceptual storage structure hai jahan current scope ke variables aur functions track hote hain. Inner function apne outer scope ke variables ko access kar sakta hai.

Isi scope relationship ki wajah se closures kaam karte hain.

---

## 105. Explain prototypal inheritance in JavaScript.

### My PDF Answer — Verbatim Transcription

in js, prototypal inheritance allows objects to inherit
properties and methods from other objects. Every object
has a hidden link to a prototype , which it can to access
Shared properties.

### Simple Explanation — English

Prototypal inheritance means an object can access properties and methods through its prototype chain. If JavaScript does not find a property directly on the object, it can continue looking up the chain.

This is JavaScript's underlying inheritance model and is also used by ES6 classes internally.

### Simple Explanation — Hindi

Prototypal inheritance mein object apne prototype se properties aur methods access kar sakta hai. Agar property directly object mein na mile, to JavaScript prototype chain mein search karta hai.

JavaScript ka inheritance model prototype based hai, aur ES6 classes bhi internally isi mechanism par based hain.

---

## 106. How does `Object.create()` work?

### My PDF Answer — Verbatim Transcription

Object.create() create a new object and sets its prototype to
an existing object. this allow the new object to inherit
properties and methods without copying them.

eg ->
const person = {
    greet: function() {
        console.log("Hello abc " + this.name);
    }
}

const Student = Object.create(person);
Student.name = "Alice";
Student.greet(); -> Hello abc, Alice

### Simple Explanation — English

`Object.create(proto)` creates a new object whose prototype is the object you provide. The new object does not copy the prototype's properties; it can access inherited properties through the prototype chain.

This is useful when you want explicit prototype-based object creation.

### Simple Explanation — Hindi

`Object.create(proto)` ek naya object banata hai aur diye gaye object ko uska prototype set karta hai. Properties copy nahi hoti; new object prototype chain ke through unhe access kar sakta hai.

Iska use direct prototype-based inheritance create karne ke liye kiya ja sakta hai.

---

## 107. What are getter and setter functions in JavaScript?

### My PDF Answer — Verbatim Transcription

in js, getter (get) and setter (set) functions allow you to control
how properties of any Object are accessed and modified.

• get -> Retrieves a property value
• set -> updates a property value with custom logic.

### Simple Explanation — English

A getter runs when a property is read, while a setter runs when a property is assigned. They let you add custom logic around reading or changing a property while keeping property-like syntax.

For example, a setter can validate a value before storing it.

### Simple Explanation — Hindi

Getter property read hone par custom logic run karta hai aur setter property assign hone par. Isse property access ke around validation ya custom processing add kar sakte hain aur syntax property jaisa hi rehta hai.

---

## 108. Explain `Object.freeze()`, `Object.seal()`, and `Object.assign()`.

### My PDF Answer — Verbatim Transcription

Object.freeze()
• object.freeze() makes an object immutable - you cannot
  add, modify or delete properties.

Object.seal() -> allows modification of existing properties
                  but preventing adding or deleting properties.

object.assign() -> copies properties from one or more objects
                   to a target object.
• used for cloning or merging objects.
• only perform a shallow copy.

eg -> const obj1 = { a:1, b:2 }
const obj2 = { b:3, c:4 }

const merged = object.assign({}, obj1, obj2);
console.log(merged); -> {a:1,b:3,c:4}

### Simple Explanation — English

`Object.freeze()` prevents adding, removing, or changing an object's own properties through normal mutation.

`Object.seal()` prevents adding and deleting properties, but existing writable properties can still be changed.

`Object.assign()` copies enumerable own properties from source objects into a target object. It performs a shallow copy, so nested object references are still shared.

### Simple Explanation — Hindi

`Object.freeze()` object ko normally add, delete ya modify hone se rokta hai.

`Object.seal()` new properties add ya delete hone nahi deta, lekin existing writable properties ko change kiya ja sakta hai.

`Object.assign()` ek ya multiple objects ki properties target object mein copy karta hai. Ye shallow copy karta hai, isliye nested objects ke references shared reh sakte hain.

---

## 109. What is the difference between `setTimeout()` and `setInterval()`?

### My PDF Answer — Verbatim Transcription

SetTimeout() -> Runs a function once after a delay.

• setInterval() -> Runs a function repeatedly at fixed intervals.

-> use setTimeout() for delayed execution.
-> use setInterval() for repeated tasks.

### Simple Explanation — English

`setTimeout()` schedules a function to run once after the specified delay.

`setInterval()` schedules repeated executions at a specified interval until the interval is cleared.

In React, both should be cleaned up when necessary, especially when they are created inside Effects.

### Simple Explanation — Hindi

`setTimeout()` function ko delay ke baad ek baar run karta hai.

`setInterval()` function ko fixed interval par repeatedly run karta hai jab tak `clearInterval()` se stop na karein.

React mein Effect ke andar timer create kiya ho to cleanup zaroor dena chahiye.

---

## 110. Explain function composition in JavaScript.

### My PDF Answer — Verbatim Transcription

function Composition in js is a process of combining multiple
functions into a single function, where the output of one
function become the input of the next. this technique
allows for cleaner , more modular and reusable code.

eg ->
const add = (x) => x+2;
const multiply = (x) => x*3;

const result = multiply(add(4)); -> (4+2)*3 = 18
console.log(result);

### Simple Explanation — English

Function composition means combining functions so the output of one function becomes the input of another.

For example, if `add` returns `x + 2` and `multiply` returns `x * 3`, composing them lets you calculate `multiply(add(4))`. This style can make transformations modular and reusable.

### Simple Explanation — Hindi

Function composition mein ek function ka output doosre function ka input ban jata hai. Multiple small functions ko combine karke larger operation banaya ja sakta hai.

Isse code modular aur reusable ban sakta hai.

---

## 111. What is debouncing and throttling?

### My PDF Answer — Verbatim Transcription

Debouncing -> Debouncing ensures that a function is
executed only after a specific delay Since the
last time it was called.

-> this is useful for handling rapid events
like keypress or window resizing.

eg -> Search input field - prevent sending API
requests on every keystroke , instead, wait until
the user stop typing.

Throttling -> throttling ensures that a function is executed
at most once specified interval, regardless of how
many times it is triggered.

-> this is useful for events that fire continuously,
like scrolling or resize.

eg -> Button click on API polling -> prevent excessive API calls
actions.

Scroll event: limit the number of times an event fires
while scrolling.

### Simple Explanation — English

Debouncing delays execution until the rapid activity has stopped for the specified delay. It is useful for search inputs where you want to wait until the user pauses typing.

Throttling limits how often a function can execute during continuous activity. It is useful for high-frequency events such as scroll and resize.

The choice depends on the desired behavior: debounce waits for a pause; throttle controls the frequency while activity continues.

### Simple Explanation — Hindi

Debouncing mein function tab execute hota hai jab user ki rapid activity kuch time ke liye ruk jaye. Search input iska common example hai.

Throttling mein continuous activity ke dauran function ko controlled interval par execute karte hain. Scroll aur resize common examples hain.

Simple difference: debounce = pause ka wait; throttle = execution frequency limit.

---

## 112. How does JavaScript handle memory management and garbage collection?

### My PDF Answer — Verbatim Transcription

1) memory lifecycle in js

JS memory management follows three main steps.

1) Allocation - memory is allocated when variable , object or
   functions are created.
2) Usage - the program uses allocated memory for execution
3) Dellocation (Garbage Collection) - when memory is no
   longer needed, it is automatically freed.

2) Javascript common cause of memory leaks.

i) Unintentional Global Variables
-> Global variable stay in memory throughout the program
   execution.

Pro -> avoid global variable & use let,const to declare variable.

2) Detached DOM element -> remove event listeners when
   elements are deleted.

### Simple Explanation — English

JavaScript memory management can be viewed as allocation, usage, and deallocation.

When variables and objects are created, memory is allocated. The program uses that memory during execution. Garbage collection later reclaims memory that is no longer reachable.

The PDF highlights accidental global variables and detached DOM elements as memory-leak risks. In practice, long-lived references, timers, listeners, caches, and closures can also keep objects reachable.

### Simple Explanation — Hindi

JavaScript memory lifecycle ko simple way mein allocation, usage aur deallocation samajh sakte hain.

Variables aur objects create hone par memory allocate hoti hai. Program use karta hai, aur jab data reachable nahi rehta to garbage collector memory reclaim kar sakta hai.

PDF mein accidental global variables aur detached DOM elements ko memory leak ke common reasons bataya gaya hai.

---

## 113. How could you optimize a large JavaScript application?

### My PDF Answer — Verbatim Transcription

1) code Splitting & lazy loading -> use webpack/vite to
   split code & load Components dynamically.

2) Reduce Dom manipulation -> use Virtual DOM (React/Vue)

3) Optimize memory usage -> use weakmaps , Remove event
   listeners and avoid memory leaks.

4) Optimize API calls -> use debouncing , throttling &
   caching (GraphQL , Redux , localStorage).

5) Compress Assets -> Use webp / AVIF for image &
   defer / async scripts.

6) Optimize loops & functions -> use map , foreach and
   memoization (useMemo , useCallback).

7) Use Service Workers -> cache assets & enable offline Support.

8) minify & Compress Code -> use Terser / UglifyJS & enable
   Gzip / Brotli Compression.

9) monitor performance -> use chrome DevTools (performance ,
   memory , lighthouse).

### Simple Explanation — English

For a large JavaScript application, I would reduce the amount of code loaded initially, reduce unnecessary DOM work, control memory usage, optimize API traffic, compress assets, and measure performance.

The PDF recommends code splitting/lazy loading, reducing DOM manipulation, debouncing/throttling/caching, modern image formats, service workers, minification/compression, and Chrome DevTools monitoring. Which techniques are useful depends on the actual bottleneck.

### Simple Explanation — Hindi

Large JavaScript application optimize karne ke liye initial code load kam karna, unnecessary DOM work reduce karna, memory usage control karna, API calls optimize karna aur assets compress karna useful hai.

PDF mein code splitting, lazy loading, DOM optimization, debounce/throttle, caching, WebP/AVIF, service workers, minification/compression aur Chrome DevTools monitoring suggest kiya gaya hai.

---

## 114. What are Web Workers, and how do they improve performance?

### My PDF Answer — Verbatim Transcription

web workers allow js to run background tasks without
blocking the main thread (UI). They help improve performance
by offloading heavy computations.

-> How web workers improve performance

• Run JS in the background - keeps the UI responsive
• handle cpu-intensive tasks - Avoid UI lag (eg - large
  calculation , data processing.
• multithread - Uses separate thread
               for parallel execution.
• non-blocking execution

When to use web workers in React
• Heavy Computation
• large API responses
• Background tasks.

### Simple Explanation — English

Web Workers run JavaScript in a worker thread instead of the main UI thread. This is useful for CPU-heavy work that would otherwise make the interface unresponsive.

A React component can communicate with a worker using messages, then update React state when the worker returns the result.

### Simple Explanation — Hindi

Web Workers JavaScript ko background worker thread par run karte hain, isliye heavy CPU work main UI thread ko block nahi karta.

Large calculations, data processing aur other CPU-intensive tasks ke liye useful hain. React component worker ko message bhej sakta hai aur result aane par state update kar sakta hai.

---

## 115. What is Cross-Site Scripting (XSS), and how do you prevent it?

### My PDF Answer — Verbatim Transcription

Cross-site Scripting (XSS) is a Security vulnerability
where attackers inject malicious Scripts into web pages
viewed by users.

-> this can steal data , hijack session or manipulation page Content.

### Simple Explanation — English

XSS happens when untrusted input is treated as executable HTML or JavaScript in a user's browser.

To reduce XSS risk, applications should safely escape/render untrusted content, validate input where appropriate, avoid unsafe HTML injection, and use browser security controls such as Content Security Policy where suitable. Frameworks such as React escape normal text output by default, but deliberately using unsafe HTML APIs still requires care.

### Simple Explanation — Hindi

XSS tab hota hai jab untrusted user input browser mein executable HTML/JavaScript ke roop mein render ho jata hai.

Risk reduce karne ke liye untrusted content ko safely render karna, unsafe HTML injection avoid karna, input validation aur suitable Content Security Policy use karna important hai. React normal text output ko escape karta hai, lekin unsafe HTML APIs use karte waqt extra care chahiye.

---

## 116. Explain the difference between the Spread and Rest operators.

### My PDF Answer — Verbatim Transcription

both 1) Spread operator (...)

• Expands an iterable (array , object , string) into individual
  element.

• Used in function calls , array merging and object cloning.

eg -> const arr = [1,2,3]
console.log (...arr) -> 1,2,3  expanding an array

-> copying & merging arrays.
const nums = [1,2,3]
const newNums = [...nums,4,5]
console.log(newNums) -> [1,2,3,4,5]

2) Rest operator (...)

• collects multiple arguments into a Single array.

• Used in function parameters and destructuring.

eg -> function sum (...numbers) {
    return numbers.reduce((a,b) => a+b,0);
}

console.log(sum(1,2,3,4)); -> output - 10

### Simple Explanation — English

The spread syntax expands an iterable or object into individual values/properties. It is useful for combining arrays, copying objects, and passing individual arguments.

The rest syntax collects multiple remaining values into one array or object. It is commonly used in function parameters and destructuring.

The syntax is the same `...`; the context tells you whether it is expanding or collecting.

### Simple Explanation — Hindi

Spread aur rest dono `...` syntax use karte hain, lekin kaam opposite hota hai.

Spread values ko expand karta hai, jaise arrays merge karna ya object copy karna.

Rest multiple values ko collect karke ek array/object mein rakhta hai, jaise function parameters ya destructuring mein.

Simple difference: spread = expand, rest = collect.

---

## 117. What is destructuring, and how does it work?

### My PDF Answer — Verbatim Transcription

No written prose answer is provided under the `Ans ->` line in the PDF. The PDF immediately shows these examples under the destructuring section:

3) Destructuring array

const [first, second, ...rest] = [10,20,30,40,50]

console.log(rest); -> [30,40,50]

C) Destructure objects

const user = { name:'Alice', age:25, country:'usa' };

const { name, ...details } = user;

console.log(details);

-> { age:25, country:'usa' }

### Simple Explanation — English

Destructuring is a JavaScript syntax for extracting values from arrays or properties from objects into variables.

For arrays, values are assigned by position. For objects, values are matched by property name. Rest syntax can collect the remaining values or properties, as shown in the PDF examples.

### Simple Explanation — Hindi

Destructuring JavaScript ka syntax hai jisse array ke values ya object ki properties ko directly variables mein extract kar sakte hain.

Array destructuring position ke basis par hoti hai. Object destructuring property name ke basis par hoti hai. `...rest` remaining values/properties ko collect kar sakta hai.

---

## 118. Explain default parameters in JavaScript.

### My PDF Answer — Verbatim Transcription

function greet (name = "Guest") {
    console.log (`Hello, ${name}`);
}

greet();        -> Hello guest

greet("abc");   -> hello abc.

### Simple Explanation — English

A default parameter gives a function parameter a value to use when the caller does not provide a value, or passes `undefined`.

In the PDF example, `name` becomes `"Guest"` when `greet()` is called without an argument. When `"abc"` is passed, that value is used instead.

### Simple Explanation — Hindi

Default parameter function parameter ko default value deta hai jab caller value provide nahi karta ya `undefined` pass karta hai.

PDF ke example mein `greet()` par `name` ki value `"Guest"` hoti hai, aur `greet("abc")` par `"abc"` use hota hai.

---

## 119. What is `arguments`, and when would you use it?

### My PDF Answer — Verbatim Transcription

No corresponding answer for this question was found in the provided PDF scan.

### Simple Explanation — English

The provided PDF does not contain a written answer for this exact question. In JavaScript, the `arguments` object is an array-like object available inside traditional non-arrow functions that contains the arguments passed to that function.

For modern code, rest parameters such as `function sum(...args)` are usually clearer when you need to collect variable arguments.

### Simple Explanation — Hindi

Provided PDF mein is exact question ka written answer nahi mila. JavaScript mein `arguments` traditional non-arrow function ke andar passed arguments ka array-like object hota hai.

Modern code mein variable arguments collect karne ke liye `...args` rest parameter usually clearer hota hai.

---

## 120. Explain how Set and Map work in JavaScript.

### My PDF Answer — Verbatim Transcription

Set -> use set when you need unique value (eg . removing
duplicates)

map -> takes an array or Object then iterate every element of
that array & Object and return a new array.

### Simple Explanation — English

A JavaScript `Set` stores unique values, so it is useful when duplicates should not be stored.

A JavaScript `Map` is a key-value collection where keys can be values of many types. Note that the PDF's answer describes the array `.map()` method rather than the JavaScript `Map` collection. The `.map()` array method transforms each array item and returns a new array.

### Simple Explanation — Hindi

`Set` unique values store karta hai, isliye duplicates remove karne ke liye useful hai.

PDF mein `map` ka answer array `.map()` method ko describe karta hai, JavaScript `Map` collection ko nahi. Array `.map()` har element par function chala kar new array return karta hai. JavaScript `Map` alag key-value collection hai.

---

## 121. What are WeakMap and WeakSet, and when would you use them?

### My PDF Answer — Verbatim Transcription

A weakMap is Similar to a map , but

1) keys must be objects (not primitives)

2) if there are no other reference to the key , it gets
   garbage Collected.

3) It does not Support iteration methods (foreach, keys,
   values, entries)

-> Use weakMap , when you need temporary key-value Storage for
object , such as caching or private properties.

### Simple Explanation — English

A `WeakMap` stores key-value pairs where the keys must be objects. If an object key is no longer strongly referenced elsewhere, the garbage collector can reclaim it and the corresponding WeakMap entry does not keep the object alive.

The PDF answer does not separately explain `WeakSet`. A `WeakSet` stores objects as unique values and also does not provide normal iteration over all stored values. Both are useful when you want object-associated data without keeping those objects alive solely because of the collection.

### Simple Explanation — Hindi

`WeakMap` mein keys objects honi chahiye. Agar key object ko kahin aur strong reference nahi mil raha, to garbage collector use clean kar sakta hai aur WeakMap us object ko alive rakhne ke liye force nahi karta.

PDF mein `WeakSet` ko separately explain nahi kiya gaya. `WeakSet` objects ko unique values ke roop mein store karta hai aur normal iteration provide nahi karta. Caching ya temporary object-related data ke liye ye structures useful ho sakte hain.

---

## 122. What is the difference between ES6 classes and constructor functions?

### My PDF Answer — Verbatim Transcription

Before ES6 (ECMAScript 2015) , Constructor functions were
used to create Objects and handle inheritance , ES6 introduce
the class Syntax.
Which provides a more Structured and readable way to
define Object blueprint.

### Simple Explanation — English

Before ES6, constructor functions with prototypes were a common way to create objects and implement inheritance.

ES6 classes provide cleaner syntax for defining constructors and methods, but JavaScript classes still use the prototype-based inheritance model underneath.

### Simple Explanation — Hindi

ES6 se pehle constructor functions aur prototypes ka use objects aur inheritance ke liye common tha.

ES6 classes ne object blueprint, constructor aur methods define karne ke liye cleaner syntax diya. Lekin classes ke peeche JavaScript ka prototype-based inheritance model hi use hota hai.

---

## 123. What is `super()` in ES6 classes?

### My PDF Answer — Verbatim Transcription

Super() is a Special function used inside a Subclass to call the
constructor of its parent (superclass) , it is essential when extending
a class using extends.

### Simple Explanation — English

In a derived class, `super()` calls the parent class constructor and initializes the parent part of the object. In a derived constructor, it must be called before using `this` when the class requires an explicit constructor.

`super.method()` can also call a parent class method.

### Simple Explanation — Hindi

`super()` subclass ke constructor ke andar parent class ke constructor ko call karta hai. `extends` ke saath class inheritance use karte waqt ye important hai.

`super.method()` ke through parent class ka method bhi call kiya ja sakta hai.

---

## 124. What is `Promise.all()` in JavaScript?

### My PDF Answer — Verbatim Transcription

promise.all() is a method that takes an array of promises
and Returns a Single promises that :

1) Resolves when all the input promises have resolved.
2) Rejects immediately if any promises rejects.

### Simple Explanation — English

`Promise.all()` accepts an iterable of Promises and returns one Promise. It fulfills when all input Promises fulfill and gives an array of their results in the same order.

If any input Promise rejects, the returned Promise rejects with that rejection. Other operations that were already started are not automatically cancelled.

### Simple Explanation — Hindi

`Promise.all()` multiple Promises ko ek saath handle karne ke liye use hota hai. Jab sabhi Promises resolve ho jati hain, returned Promise resolve hota hai aur results same order mein milte hain.

Agar koi ek Promise reject ho jaye, returned Promise reject ho jata hai.

---

## 125. What is `Promise.race()` in JavaScript?

### My PDF Answer — Verbatim Transcription

promise.race() take an array of promises and Returns a
Single promise that.

• Resolves or Rejects as soon as the first promise settle (i.e either
  resolves or rejects)

• Ignore all other promises once the first one settles.

### Simple Explanation — English

`Promise.race()` returns a Promise that settles as soon as the first input Promise settles. The first settled Promise determines whether the returned Promise fulfills or rejects.

The other Promises continue running; `race()` does not automatically cancel them.

### Simple Explanation — Hindi

`Promise.race()` multiple Promises mein jo Promise sabse pehle settle hoti hai uske result ke basis par returned Promise settle ho jata hai.

Important point: baaki Promises automatically cancel nahi hoti; woh background mein continue kar sakti hain.

---

## 126. How do you handle errors with `async/await`?

### My PDF Answer — Verbatim Transcription

Error handling methods.

1) try...catch inside async function
2) .catch of function call
3) promise.all() + try...catch
4) promise.allSettled()
5) process.on ('unhandledRejection')

### Simple Explanation — English

With `async/await`, the most common pattern is `try...catch` around awaited operations. If an async function returns a Promise, the caller can also handle rejection with `.catch()`.

For multiple independent operations, `Promise.all()` can be wrapped in `try...catch`, while `Promise.allSettled()` is useful when you want the result of every operation even when some fail. Node.js also provides process-level handling for unhandled rejections, but application code should handle expected errors explicitly.

### Simple Explanation — Hindi

`async/await` ke saath error handle karne ka common way `try...catch` hai.

Async function ke returned Promise par `.catch()` bhi use kar sakte hain. Multiple promises ke liye `Promise.all()` ko `try...catch` ke andar use kar sakte hain. Agar har Promise ka result chahiye chahe fail ho ya success, to `Promise.allSettled()` useful hai. Expected application errors ko explicitly handle karna better hai.

---

## ✅ Remaining Questions Complete

**Questions covered:** 101–126
**Total:** 26 questions

**Important source notes:**
- The extracted question-bank file contains Question 117 on destructuring and Question 119 on `arguments`.
- In the PDF, the destructuring question's `Ans ->` line is blank, but destructuring examples appear immediately above it; those examples are preserved in the PDF-answer section.
- No corresponding written PDF answer for the `arguments` question was found in the supplied scan.
- The PDF uses some inconsistent question numbering in the later pages; this file follows the normalized question order in `Advance_Question_Bank.md`.