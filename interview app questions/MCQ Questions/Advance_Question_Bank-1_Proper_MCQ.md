# Advance Question Bank 1 — Proper MCQ

> **Format:** Compound questions have been split into focused interview MCQs where needed. Every option is a complete statement/answer, not just a concept name. Detailed explanations are included for interview preparation.
> **Total MCQs:** 166

---

## 1. What does `map()` do in JavaScript?

- **A.** `map()` creates a new array by transforming each element with a callback.
- **B.** It removes elements that fail a condition from the array.
- **C.** It combines all elements into one accumulated value.
- **D.** It only runs a callback for side effects and returns no new array.

**Answer:** A. `map()` creates a new array by transforming each element with a callback.

**Explanation:** It is useful when you want one output value for each input element.

---

## 2. What does `filter()` do in JavaScript?

- **A.** It transforms every element into a new value for a new array.
- **B.** `filter()` creates a new array containing only elements that pass a condition.
- **C.** It combines all elements into one result.
- **D.** It sorts the original array in ascending order automatically.

**Answer:** B. `filter()` creates a new array containing only elements that pass a condition.

**Explanation:** It is commonly used when you want to keep matching items and remove the rest.

---

## 3. What does `reduce()` do in JavaScript?

- **A.** It creates a new array by transforming every element.
- **B.** It keeps only elements that pass a condition.
- **C.** `reduce()` processes array elements and combines them into a single accumulated result.
- **D.** It only executes a callback and ignores its returned values.

**Answer:** C. `reduce()` processes array elements and combines them into a single accumulated result.

**Explanation:** It is useful for totals, grouping, building objects, and other accumulator-based operations.

---

## 4. What does `forEach()` do in JavaScript?

- **A.** It creates a new array from each callback result.
- **B.** It combines the array into a single accumulated value.
- **C.** It removes elements that do not match a condition.
- **D.** `forEach()` runs a callback for each array element and is mainly used for side effects.

**Answer:** D. `forEach()` runs a callback for each array element and is mainly used for side effects.

**Explanation:** Unlike `map()`, it does not create a new transformed array from the callback result.

---

## 5. What does `sort()` do in JavaScript?

- **A.** `sort()` orders the elements of an array and mutates the original array.
- **B.** It creates a new array without changing the original order.
- **C.** It combines array values into one result.
- **D.** It removes elements based on a callback condition.

**Answer:** A. `sort()` orders the elements of an array and mutates the original array.

**Explanation:** A compare function can be supplied to define numeric or custom ordering.

---

## 6. What is a higher-order function in JavaScript?

- **A.** It is a function that can only accept numbers.
- **B.** A higher-order function accepts a function as an argument, returns a function, or does both.
- **C.** It is a function that must always return a string.
- **D.** It is a React component that cannot receive callbacks.

**Answer:** B. A higher-order function accepts a function as an argument, returns a function, or does both.

**Explanation:** Array methods such as `map()` and `filter()` are common examples because they accept callback functions.

---

## 7. What is hoisting in JavaScript?

- **A.** It permanently deletes declarations before execution.
- **B.** It converts JavaScript code into HTML before runtime.
- **C.** Moving declarations to the top of their scope conceptually
- **D.** It means every function runs asynchronously.

**Answer:** C. Moving declarations to the top of their scope conceptually

**Explanation:** Hoisting is JavaScript's behavior of processing declarations before the code executes. Function declarations can generally be called before their definition, while `var` is hoisted with an initial value of `undefined`. `let` and `const` are also hoisted internally but stay in the Temporal Dead Zone until their declaration is reached.

---

## 8. What is the Event Loop in JavaScript?

- **A.** It replaces the JavaScript engine completely.
- **B.** It is responsible only for rendering CSS animations.
- **C.** It makes every asynchronous operation run synchronously.
- **D.** The Event Loop coordinates synchronous execution with queued asynchronous callbacks and microtasks.

**Answer:** D. The Event Loop coordinates synchronous execution with queued asynchronous callbacks and microtasks.

**Explanation:** It lets JavaScript handle asynchronous work without blocking the main execution thread.

---

## 9. How does the Event Loop help Node.js handle asynchronous operations?

- **A.** It allows Node.js to process callbacks for completed asynchronous I/O while continuing to handle other work.
- **B.** It replaces the JavaScript engine completely.
- **C.** It is responsible only for rendering CSS animations.
- **D.** It makes every asynchronous operation run synchronously.

**Answer:** A. It allows Node.js to process callbacks for completed asynchronous I/O while continuing to handle other work.

**Explanation:** This event-driven model is a major reason Node.js can handle many concurrent I/O-bound operations.

---

## 10. Promises or `setTimeout` — which one executes first and why?

- **A.** It is a CSS rule for delayed animations.
- **B.** Promise callbacks usually execute first because they are microtasks
- **C.** It represents only synchronous function calls.
- **D.** It can have unlimited state changes after it is settled.

**Answer:** B. Promise callbacks usually execute first because they are microtasks

**Explanation:** Promise callbacks are microtasks, while `setTimeout()` callbacks are timer tasks/macrotasks. After the current synchronous code finishes, JavaScript normally drains the microtask queue before moving to the next task such as a timer. Therefore, a resolved Promise callback usually runs before a zero-delay `setTimeout()`.

---

## 11. What is a Pure Component?

- **A.** It is a component that cannot receive props.
- **B.** It is a component that only contains CSS.
- **C.** A component that avoids re-rendering when its inputs/props/state have not meaningfully changed
- **D.** It is a component with no rendered output.

**Answer:** C. A component that avoids re-rendering when its inputs/props/state have not meaningfully changed

**Explanation:** A pure component is designed to render the same output when its relevant inputs have not changed. In class components, `PureComponent` performs shallow comparison of props and state. In function components, `React.memo()` provides a similar optimization for props.

---

## 12. What is the `this` keyword in JavaScript?

- **A.** It always refers to the global object.
- **B.** It always refers to the parent function.
- **C.** It is available only inside loops.
- **D.** It refers to the current execution context/object depending on how the function is called

**Answer:** D. It refers to the current execution context/object depending on how the function is called

**Explanation:** `this` depends on how a regular function is called, not simply where it is written. For an object method it can refer to that object; with `new` it refers to the new instance; with `call/apply/bind` it can be explicitly controlled. Arrow functions do not have their own `this` and inherit it from the surrounding scope.

---

## 13. What is a closure in JavaScript?

- **A.** A function that remembers variables from its outer lexical scope
- **B.** It is a function that cannot access outer variables.
- **C.** It means a browser tab has been closed.
- **D.** It is a special React component.

**Answer:** A. A function that remembers variables from its outer lexical scope

**Explanation:** A closure happens when a function keeps access to variables from its outer lexical scope even after the outer function has finished executing. This is useful for private data, callbacks, factories, and maintaining state between calls. Closures are a very common interview topic because they explain how JavaScript scope works.

---

## 14. How do you pass data from a child component to a parent component?

- **A.** The child directly changes the parent's local variable.
- **B.** Pass a callback function from parent to child and call it with the data
- **C.** CSS automatically sends the value to the parent.
- **D.** useEffect is required for every parent-child update.

**Answer:** B. Pass a callback function from parent to child and call it with the data

**Explanation:** The parent creates a callback function and passes it to the child as a prop. The child calls that callback with the required data, and the parent receives the value. React data normally flows down through props, so this callback pattern is the common way to send information upward.

---

## 15. What is `useState()` used for in React?

- **A.** It is mainly used to define CSS classes.
- **B.** It can store state but its setter never causes rendering.
- **C.** `useState()` manages local component state and schedules a re-render when its setter updates the state.
- **D.** It is available only in class components.

**Answer:** C. `useState()` manages local component state and schedules a re-render when its setter updates the state.

**Explanation:** It is a straightforward choice for simple values or state with simple update logic.

---

## 16. When is `useReducer()` useful in React?

- **A.** It is intended only for styling components.
- **B.** It removes the need for state entirely.
- **C.** It is mainly used to create HTTP routes.
- **D.** `useReducer()` is useful when state has complex update logic or many related state transitions.

**Answer:** D. `useReducer()` is useful when state has complex update logic or many related state transitions.

**Explanation:** Actions describe what happened and the reducer determines the next state, making complex transitions easier to organize.

---

## 17. What is a dev dependency?

- **A.** A dev dependency is mainly needed for development, testing, linting, or building rather than application runtime.
- **B.** It is required by end users for every production request.
- **C.** It is used only as a database table.
- **D.** It must always be bundled into the browser runtime.

**Answer:** A. A dev dependency is mainly needed for development, testing, linting, or building rather than application runtime.

**Explanation:** Examples include testing and linting tools.

---

## 18. What is a normal/runtime dependency?

- **A.** It is used only for local linting and testing.
- **B.** A normal dependency is a package the application needs while it runs.
- **C.** It is never needed after installation.
- **D.** It is used only to configure Git hooks.

**Answer:** B. A normal dependency is a package the application needs while it runs.

**Explanation:** Libraries used directly by the running application are normally listed under `dependencies`.

---

## 19. What is `package.json`?

- **A.** It records only the exact installed dependency tree.
- **B.** It stores compiled JavaScript output only.
- **C.** `package.json` describes project metadata, scripts, and dependency requirements.
- **D.** It is generated solely from the npm cache.

**Answer:** C. `package.json` describes project metadata, scripts, and dependency requirements.

**Explanation:** It tells npm what the project needs and how common project commands can be run.

---

## 20. What is `package-lock.json`?

- **A.** It is the main file for project scripts and metadata.
- **B.** It stores application source code.
- **C.** It replaces the need for package.json.
- **D.** `package-lock.json` records the exact dependency tree and resolved versions installed by npm.

**Answer:** D. `package-lock.json` records the exact dependency tree and resolved versions installed by npm.

**Explanation:** It helps keep installations reproducible across machines and CI environments.

---

## 21. What is ESLint?

- **A.** A tool that finds and reports JavaScript/TypeScript code problems and style issues
- **B.** It is a database engine.
- **C.** It is a browser.
- **D.** It is a CSS framework.

**Answer:** A. A tool that finds and reports JavaScript/TypeScript code problems and style issues

**Explanation:** ESLint is a static analysis/linting tool for JavaScript and TypeScript. It checks code for possible bugs, bad patterns, and project style rules before the code runs. It can also work with plugins and auto-fix many formatting or rule violations.

---

## 22. What is Canvas in web development?

- **A.** It represents shapes as normal DOM elements by default.
- **B.** Canvas is a pixel-based drawing surface that is commonly controlled through JavaScript.
- **C.** It is primarily a database visualization format.
- **D.** It can only display text and cannot draw graphics.

**Answer:** B. Canvas is a pixel-based drawing surface that is commonly controlled through JavaScript.

**Explanation:** It is useful for games, dynamic graphics, and many-pixel drawing where individual shapes do not need to be DOM elements.

---

## 23. What is SVG in web development?

- **A.** It is a pixel-only drawing buffer with no individual elements.
- **B.** It is available only on the server.
- **C.** SVG is a vector-based, element-oriented graphics format whose shapes can be individually styled and manipulated.
- **D.** It cannot scale without losing quality.

**Answer:** C. SVG is a vector-based, element-oriented graphics format whose shapes can be individually styled and manipulated.

**Explanation:** It is especially useful for scalable icons, diagrams, and charts.

---

## 24. What is CSS specificity?

- **A.** It measures website loading speed.
- **B.** It determines image dimensions.
- **C.** It counts the number of HTML pages.
- **D.** The rule used to decide which CSS selector wins when multiple rules apply

**Answer:** D. The rule used to decide which CSS selector wins when multiple rules apply

**Explanation:** CSS specificity decides which matching selector has higher priority when multiple rules target the same element. IDs generally have higher specificity than classes/attributes/pseudo-classes, which are higher than element selectors. If specificity is equal, later rules normally win; `!important` changes the priority rules and should be used carefully.

---

## 25. What is a Promise in JavaScript?

- **A.** A Promise represents the eventual result or failure of an asynchronous operation.
- **B.** It is a CSS rule for delayed animations.
- **C.** It represents only synchronous function calls.
- **D.** It can have unlimited state changes after it is settled.

**Answer:** A. A Promise represents the eventual result or failure of an asynchronous operation.

**Explanation:** It can be pending, fulfilled, or rejected and can be handled with methods such as `.then()` and `.catch()`.

---

## 26. What is `async/await` in JavaScript?

- **A.** It removes the need for Promises completely.
- **B.** `async/await` is syntax built on top of Promises that makes asynchronous code easier to read.
- **C.** It makes asynchronous operations execute synchronously on the whole application.
- **D.** It can be used only with CSS animations.

**Answer:** B. `async/await` is syntax built on top of Promises that makes asynchronous code easier to read.

**Explanation:** An `async` function returns a Promise, and `await` pauses that function until a Promise settles.

---

## 27. What is a prototype in JavaScript?

- **A.** It is a CSS file used by objects.
- **B.** It is a database table inherited by queries.
- **C.** An object from which another object can inherit properties and methods
- **D.** It is a React route definition.

**Answer:** C. An object from which another object can inherit properties and methods

**Explanation:** A prototype is an object that another object can use as a fallback source for properties and methods. JavaScript looks up a missing property through the prototype chain. This is the basis of prototypal inheritance and is used behind JavaScript classes as well.

---

## 28. What is memoization in JavaScript?

- **A.** It deletes previous function results.
- **B.** It forces every function to run twice.
- **C.** It converts JavaScript into JSON.
- **D.** Caching a function's result so repeated inputs can be faster

**Answer:** D. Caching a function's result so repeated inputs can be faster

**Explanation:** Memoization stores a previous result so the same expensive calculation does not need to be repeated for the same inputs. It can improve performance when a function is expensive and receives repeated inputs. The trade-off is extra memory and cache-management complexity.

---

## 29. What is event bubbling in JavaScript?

- **A.** An event moves from the target element upward through its ancestors
- **B.** Events can move only downward and never upward.
- **C.** The browser immediately deletes the event.
- **D.** It is a CSS animation.

**Answer:** A. An event moves from the target element upward through its ancestors

**Explanation:** Event bubbling means an event that occurs on a nested element can propagate upward through its parent elements. For example, clicking a button inside a div can trigger handlers on both the button and the div. Event delegation uses this behavior by placing one handler on a parent.

---

## 30. What is an Error Boundary in React?

- **A.** It catches every API error automatically.
- **B.** A React component that catches rendering errors in its child component tree
- **C.** It is used mainly for database queries.
- **D.** It is a CSS layout boundary.

**Answer:** B. A React component that catches rendering errors in its child component tree

**Explanation:** An Error Boundary is a React component that catches certain rendering/lifecycle errors in its child tree and displays fallback UI instead of crashing that part of the interface. Traditional Error Boundaries use class-based APIs. They do not automatically catch every kind of error, such as all event-handler or asynchronous errors.

---

## 31. What does `every()` do in JavaScript?

- **A.** It returns true when at least one element passes.
- **B.** It returns a new filtered array.
- **C.** `every()` returns `true` only when all elements pass the supplied test.
- **D.** It sorts the original array.

**Answer:** C. `every()` returns `true` only when all elements pass the supplied test.

**Explanation:** It is useful for checking whether an entire array satisfies a condition.

---

## 32. What does `some()` do in JavaScript?

- **A.** It returns true only when every element passes.
- **B.** It always returns a new array.
- **C.** It sorts the array before checking values.
- **D.** `some()` returns `true` when at least one element passes the supplied test.

**Answer:** D. `some()` returns `true` when at least one element passes the supplied test.

**Explanation:** It is useful for checking whether an array contains at least one item matching a condition.

---

## 33. What are the new features introduced in ES6?

- **A.** let/const, arrow functions, classes, modules, promises, destructuring, spread/rest, etc.
- **B.** It introduced only HTML tags.
- **C.** It introduced only CSS variables.
- **D.** It introduced only database features.

**Answer:** A. let/const, arrow functions, classes, modules, promises, destructuring, spread/rest, etc.

**Explanation:** ES6, also called ECMAScript 2015, introduced major features such as `let`, `const`, arrow functions, classes, template literals, destructuring, modules, default parameters, spread/rest syntax, Promises, Maps, Sets, and more. These features made modern JavaScript easier to structure and write.

---

## 34. What is currying in JavaScript?

- **A.** It sorts an array automatically.
- **B.** Converting a function with multiple arguments into a sequence of single-argument functions
- **C.** It creates a class from an object.
- **D.** It removes closures from functions.

**Answer:** B. Converting a function with multiple arguments into a sequence of single-argument functions

**Explanation:** Currying converts a function that takes multiple arguments into a sequence of functions that each take one argument. For example, `add(2, 3)` can become `add(2)(3)`. It is useful for creating reusable partially configured functions and is related to functional programming.

---

## 35. What is the `<iframe>` tag in HTML?

- **A.** It creates a database table.
- **B.** It defines a CSS custom property.
- **C.** It embeds another webpage or document inside the current page
- **D.** It starts a JavaScript loop.

**Answer:** C. It embeds another webpage or document inside the current page

**Explanation:** `iframe` embeds another HTML document or webpage inside the current page. It is commonly used for things like embedded videos, maps, or external widgets. Security controls such as `sandbox` and appropriate headers should be considered when embedding untrusted content.

## MongoDB Interview Questions

---

## 36. What are some of the advantages of MongoDB?

- **A.** It requires a fixed table for every field.
- **B.** It stores only plain text.
- **C.** It cannot scale horizontally.
- **D.** Flexible document structure, easy scaling, and good support for JSON-like data

**Answer:** D. Flexible document structure, easy scaling, and good support for JSON-like data

**Explanation:** MongoDB is a document-oriented database that stores data in BSON documents, which are similar to JSON objects. Its flexible structure can be useful when data changes often or naturally fits documents. It also supports indexes, aggregation, replication, and horizontal scaling.

---

## 37. When should you use MongoDB?

- **A.** When flexible document data and easy horizontal scaling are useful
- **B.** Only for CSS-based applications.
- **C.** Only for static images.
- **D.** Only for operating-system files.

**Answer:** A. When flexible document data and easy horizontal scaling are useful

**Explanation:** MongoDB is a good choice when the application benefits from flexible document structures, fast development with JSON-like data, or horizontal scaling. It is especially convenient for many content, catalog, event, and rapidly changing-schema applications. The best database still depends on the application's consistency, query, and relational requirements.

---

## 38. What are the data types in MongoDB?

- **A.** MongoDB supports only strings.
- **B.** String, Number, Boolean, Date, ObjectId, Array, Object, Null, etc.
- **C.** MongoDB supports only numbers and booleans.
- **D.** MongoDB uses only HTML-specific types.

**Answer:** B. String, Number, Boolean, Date, ObjectId, Array, Object, Null, etc.

**Explanation:** MongoDB supports types such as string, double, integer, decimal, boolean, date, timestamp, ObjectId, array, embedded document, binary data, regular expression, and null. MongoDB stores these using BSON rather than plain JSON. Understanding ObjectId and embedded documents is especially useful in interviews.

---

## 39. How do you perform queries in MongoDB?

- **A.** MongoDB queries are written using CSS selectors only.
- **B.** `console.log()` is the MongoDB query API.
- **C.** Use MongoDB query methods such as `find()`, `findOne()`, and filter objects
- **D.** HTML forms are the only way to query MongoDB.

**Answer:** C. Use MongoDB query methods such as `find()`, `findOne()`, and filter objects

**Explanation:** Queries use filter objects and methods such as `find()`, `findOne()`, and aggregation pipelines. For example, `{ age: { $gt: 18 } }` can find users older than 18. Indexes should be designed for frequently used queries to improve performance.

---

## 40. How do you delete a document in MongoDB?

- **A.** It is a group of MongoDB collections.
- **B.** It is the entire MongoDB server.
- **C.** It can contain only flat string values.
- **D.** Use `deleteOne()` or `deleteMany()`

**Answer:** D. Use `deleteOne()` or `deleteMany()`

**Explanation:** `deleteOne()` removes one matching document, while `deleteMany()` removes all matching documents. A filter should normally be supplied so you delete only the intended records. In production, destructive operations should be handled carefully and validated.

---

## 41. How do you update a document in MongoDB?

- **A.** Use `updateOne()`, `updateMany()`, or related update methods
- **B.** It is a group of MongoDB collections.
- **C.** It is the entire MongoDB server.
- **D.** It can contain only flat string values.

**Answer:** A. Use `updateOne()`, `updateMany()`, or related update methods

**Explanation:** `updateOne()` changes the first matching document, while `updateMany()` changes all matching documents. Operators such as `$set`, `$inc`, `$push`, and `$unset` are commonly used. The filter determines which documents are affected.

---

## 42. How do you add data in MongoDB?

- **A.** Use an HTML helper such as `addHTML()`.
- **B.** Use `insertOne()` or `insertMany()`
- **C.** Use `console.log()` to insert documents.
- **D.** MongoDB requires dropping a collection before every insert.

**Answer:** B. Use `insertOne()` or `insertMany()`

**Explanation:** `insertOne()` adds a single document and `insertMany()` adds multiple documents. MongoDB assigns an `_id` automatically if one is not supplied. Data should still be validated before insertion, even though MongoDB has a flexible schema.

---

## 43. What are some features of MongoDB?

- **A.** It is only a file-storage system.
- **B.** It is mainly a frontend rendering engine.
- **C.** Document database, flexible schema, indexing, aggregation, replication, and sharding
- **D.** It only processes CSS.

**Answer:** C. Document database, flexible schema, indexing, aggregation, replication, and sharding

**Explanation:** MongoDB provides document storage, flexible schemas, indexes, aggregation pipelines, replication, sharding, transactions, and a rich query language. These features make it useful for both simple and large-scale applications. Its document model can reduce the need for joins in some data designs.

---

## 44. What is replication in MongoDB?

- **A.** It distributes different portions of data across shards.
- **B.** It removes duplicate documents from a collection.
- **C.** It is mainly used to rename MongoDB collections.
- **D.** Replication keeps copies of data on multiple MongoDB servers to improve availability and failover.

**Answer:** D. Replication keeps copies of data on multiple MongoDB servers to improve availability and failover.

**Explanation:** A replica set provides redundancy so another member can take over if the primary fails.

---

## 45. What is sharding in MongoDB?

- **A.** Sharding distributes data across multiple servers so large datasets and workloads can scale horizontally.
- **B.** It keeps identical copies of all data on every server.
- **C.** It is mainly a backup-only mechanism.
- **D.** It prevents MongoDB from distributing workload across servers.

**Answer:** A. Sharding distributes data across multiple servers so large datasets and workloads can scale horizontally.

**Explanation:** It is mainly about distributing data and load, whereas replication is mainly about redundancy and availability.

---

## 46. What is MongoDB Shell?

- **A.** It is a browser developer tool.
- **B.** A command-line tool for interacting with MongoDB
- **C.** It is a CSS editor.
- **D.** It is a React component.

**Answer:** B. A command-line tool for interacting with MongoDB

**Explanation:** MongoDB Shell, commonly called `mongosh`, is a command-line environment for interacting with MongoDB. You can connect to a server, run queries, inspect collections, and perform administrative tasks. It is useful for development, debugging, and database operations.

---

## 47. What is a Document in MongoDB?

- **A.** It is a group of MongoDB collections.
- **B.** It is the entire MongoDB server.
- **C.** A document is a single MongoDB record represented as a BSON document.
- **D.** It can contain only flat string values.

**Answer:** C. A document is a single MongoDB record represented as a BSON document.

**Explanation:** It is similar to a row conceptually, but its structure can contain nested objects and arrays.

---

## 48. What is a Collection in MongoDB?

- **A.** It is one BSON record only.
- **B.** It is the entire database server.
- **C.** It is a single property inside a document.
- **D.** A collection is a group of related MongoDB documents.

**Answer:** D. A collection is a group of related MongoDB documents.

**Explanation:** It is roughly comparable to a table in a relational database, although MongoDB documents can have flexible structures.

---

## 49. What is WebSocket?

- **A.** WebSocket is a protocol that provides a persistent two-way communication channel between a client and server.
- **B.** It is a one-way protocol where only the server can send data.
- **C.** It requires a new HTTP request for every message.
- **D.** It is primarily a database query language.

**Answer:** A. WebSocket is a protocol that provides a persistent two-way communication channel between a client and server.

**Explanation:** It is useful when the server and client need to exchange real-time messages without repeated HTTP polling.

---

## 50. What is Socket.IO?

- **A.** It is exactly the same protocol as raw WebSocket.
- **B.** Socket.IO is a higher-level real-time communication library that provides an event-based API plus features such as reconnection and rooms.
- **C.** It is a CSS library for socket-shaped UI elements.
- **D.** It provides only static file storage.

**Answer:** B. Socket.IO is a higher-level real-time communication library that provides an event-based API plus features such as reconnection and rooms.

**Explanation:** It can use WebSocket when available but is not simply the same thing as the WebSocket protocol.

---

## 51. How do you update a component every second?

- **A.** Reload the browser every second.
- **B.** Use CSS animation to change React state.
- **C.** Use `setInterval()` with proper cleanup, usually inside `useEffect()`
- **D.** Create a new component every second without cleanup.

**Answer:** C. Use `setInterval()` with proper cleanup, usually inside `useEffect()`

**Explanation:** In React, use `setInterval()` inside `useEffect()` when you need a repeated update. Return a cleanup function that calls `clearInterval()` so the timer does not continue after the component unmounts. Without cleanup, you can create duplicate timers and memory/performance problems.

---

## 52. What is `useRef()` in React?

- **A.** It is mainly a CSS feature.
- **B.** It is a database-only feature.
- **C.** It requires all work to be synchronous.
- **D.** `useRef()` stores a mutable value that persists between renders without causing a re-render when changed.

**Answer:** D. `useRef()` stores a mutable value that persists between renders without causing a re-render when changed.

**Explanation:** It is commonly used for DOM references, timers, previous values, and other mutable instance-like data.

---

## 53. What is the main difference between `useState()` and `useRef()`?

- **A.** Updating state schedules a React re-render, while changing `ref.current` does not.
- **B.** It is mainly used to define CSS classes.
- **C.** It can store state but its setter never causes rendering.
- **D.** It is available only in class components.

**Answer:** A. Updating state schedules a React re-render, while changing `ref.current` does not.

**Explanation:** Use state when the value affects rendered UI; use a ref when you need persistent mutable data without triggering rendering.

---

## 54. What is Jest?

- **A.** It is a database.
- **B.** A JavaScript testing framework
- **C.** It is a CSS preprocessor.
- **D.** It is a browser.

**Answer:** B. A JavaScript testing framework

**Explanation:** Jest is a JavaScript testing framework used for unit and integration-style tests. It provides test runners, assertions, mocks, spies, and coverage support. It is commonly used with React, Node.js, and other JavaScript projects.

---

## 55. Is React a server-side library or a client-side library?

- **A.** It is mainly a CSS feature.
- **B.** It is a database-only feature.
- **C.** React is primarily a client-side UI library, though it can be used with server-side rendering
- **D.** It requires all work to be synchronous.

**Answer:** C. React is primarily a client-side UI library, though it can be used with server-side rendering

**Explanation:** React is primarily a UI library used to build client-side interfaces, but React applications can also use server-side rendering, static generation, and Server Components through supporting frameworks and tooling. React itself is not a traditional backend framework like Express.

---

## 56. What are React Server Components (RSC)?

- **A.** They run only as CSS rules.
- **B.** They replace HTML completely.
- **C.** They are used only to store cookies.
- **D.** Components that can render on the server and reduce client-side JavaScript for supported React frameworks

**Answer:** D. Components that can render on the server and reduce client-side JavaScript for supported React frameworks

**Explanation:** React Server Components allow supported frameworks to render some components on the server and keep them out of the client JavaScript bundle. This can reduce client-side JavaScript and allow server-side access to data sources. Interactive components that need browser APIs or state generally remain client components.

---

## 57. What is `if-else` in JavaScript?

- **A.** `if-else` is a statement used to execute different blocks depending on a condition.
- **B.** It is an expression that always returns one of two values.
- **C.** It can be used only inside JSX.
- **D.** It cannot contain multiple statements.

**Answer:** A. `if-else` is a statement used to execute different blocks depending on a condition.

**Explanation:** It is convenient for larger or multi-step conditional logic.

---

## 58. What is the ternary operator in JavaScript?

- **A.** It is a statement that must contain multiple blocks.
- **B.** The ternary operator is a compact conditional expression written as `condition ? value1 : value2`.
- **C.** It can be used only in CSS.
- **D.** It always executes both branches.

**Answer:** B. The ternary operator is a compact conditional expression written as `condition ? value1 : value2`.

**Explanation:** It is especially useful when choosing between two values, including inside JSX.

---

## 59. What is a shallow copy in JavaScript?

- **A.** It recursively clones every nested object.
- **B.** It guarantees that no nested references are shared.
- **C.** A shallow copy creates a new outer object or array while nested objects remain shared references.
- **D.** It converts the object into JSON text automatically.

**Answer:** C. A shallow copy creates a new outer object or array while nested objects remain shared references.

**Explanation:** Changing a nested object through one copy can therefore affect the other copy.

---

## 60. What is a deep copy in JavaScript?

- **A.** It copies only the outer object and shares all nested references.
- **B.** It never copies nested objects.
- **C.** It only works for primitive strings.
- **D.** A deep copy creates independent copies of nested data so nested references are not shared.

**Answer:** D. A deep copy creates independent copies of nested data so nested references are not shared.

**Explanation:** It is useful when you need a fully independent object structure, although the copying method must support the data types involved.

---

## 61. What is a callback function in JavaScript?

- **A.** A callback is a function passed to another function so it can be called later or when an operation completes.
- **B.** It is a function that can never be passed to another function.
- **C.** It always runs immediately before the current function.
- **D.** It is a CSS event handler.

**Answer:** A. A callback is a function passed to another function so it can be called later or when an operation completes.

**Explanation:** Callbacks are a basic pattern for handling asynchronous or event-driven work.

---

## 62. What role does a Promise play in asynchronous JavaScript?

- **A.** It is a CSS rule for delayed animations.
- **B.** A Promise represents the eventual success or failure of an asynchronous operation.
- **C.** It represents only synchronous function calls.
- **D.** It can have unlimited state changes after it is settled.

**Answer:** B. A Promise represents the eventual success or failure of an asynchronous operation.

**Explanation:** A Promise provides a structured way to represent a future result and handle success or failure. It can be chained with `.then()`, `.catch()`, and `.finally()`.

---

## 63. What is `async/await`?

- **A.** It removes the need for Promises completely.
- **B.** It makes asynchronous operations execute synchronously on the whole application.
- **C.** `async/await` provides readable syntax for working with Promise-based asynchronous operations.
- **D.** It can be used only with CSS animations.

**Answer:** C. `async/await` provides readable syntax for working with Promise-based asynchronous operations.

**Explanation:** It makes sequential asynchronous code look more like normal synchronous code while remaining asynchronous.

---

## 64. What does `document.getElementById()` return?

- **A.** It returns a NodeList containing every matching element.
- **B.** It accepts any CSS selector rather than an ID.
- **C.** It always returns an array.
- **D.** It returns the element with the specified `id`, or `null` when no matching element exists.

**Answer:** D. It returns the element with the specified `id`, or `null` when no matching element exists.

**Explanation:** It is intended for looking up one element by its ID.

---

## 65. What does `document.querySelectorAll()` return?

- **A.** It returns a NodeList containing all elements that match a CSS selector.
- **B.** It returns only the first matching element.
- **C.** It accepts only element IDs.
- **D.** It returns a single DOM element rather than a collection.

**Answer:** A. It returns a NodeList containing all elements that match a CSS selector.

**Explanation:** It can select by classes, attributes, nested selectors, and many other CSS selector patterns.

---

## 66. What is `setInterval()`?

- **A.** It runs the callback only once.
- **B.** It repeatedly runs a function after a fixed time interval until stopped
- **C.** It guarantees exact real-time execution.
- **D.** It cannot be cancelled.

**Answer:** B. It repeatedly runs a function after a fixed time interval until stopped

**Explanation:** `setInterval()` repeatedly schedules a callback after a specified interval until it is cancelled with `clearInterval()`. It is useful for polling, clocks, or periodic updates. The callback duration can affect actual timing, so it should not be treated as a precise real-time scheduler.

---

## 67. What does single-threaded execution mean in JavaScript?

- **A.** It means every asynchronous operation is impossible.
- **B.** It means JavaScript automatically creates a thread for every function.
- **C.** It means one main JavaScript execution thread runs one piece of JavaScript at a time.
- **D.** It means multiple JavaScript instructions execute simultaneously on one call stack.

**Answer:** C. It means one main JavaScript execution thread runs one piece of JavaScript at a time.

**Explanation:** Asynchronous APIs can still allow other work to progress without making the main JavaScript execution itself multi-threaded.

---

## 68. What does multi-threaded execution mean?

- **A.** It means only one thread can ever execute work.
- **B.** It prevents parallel CPU work.
- **C.** It is another name for synchronous execution.
- **D.** It means work can run on multiple threads, allowing suitable tasks to execute in parallel.

**Answer:** D. It means work can run on multiple threads, allowing suitable tasks to execute in parallel.

**Explanation:** Browsers provide Web Workers and Node.js provides `worker_threads` for explicit JavaScript work on separate threads.

---

## 69. What is the DOM?

- **A.** The DOM is an object representation of the webpage document and its elements.
- **B.** It represents only browser networking features.
- **C.** It contains HTTP headers rather than page elements.
- **D.** It is a database representation of application data.

**Answer:** A. The DOM is an object representation of the webpage document and its elements.

**Explanation:** JavaScript can use DOM APIs to read, create, update, and remove elements.

---

## 70. What is the BOM?

- **A.** It represents only HTML elements.
- **B.** The Browser Object Model represents browser features such as `window`, `location`, `history`, and `navigator`.
- **C.** It is a React state-management system.
- **D.** It is a CSS rule hierarchy.

**Answer:** B. The Browser Object Model represents browser features such as `window`, `location`, `history`, and `navigator`.

**Explanation:** BOM APIs are focused on the browser environment rather than the HTML document itself.

---

## 71. What is HTTP?

- **A.** It automatically encrypts all traffic with TLS.
- **B.** It is used only for image requests.
- **C.** HTTP is the protocol used for transferring web requests and responses without transport encryption by itself.
- **D.** It is unrelated to client-server communication.

**Answer:** C. HTTP is the protocol used for transferring web requests and responses without transport encryption by itself.

**Explanation:** Sensitive traffic should generally use HTTPS instead of plain HTTP.

---

## 72. What is HTTPS?

- **A.** It is HTTP without any transport security.
- **B.** It provides no server authentication.
- **C.** It is a database protocol.
- **D.** HTTPS is HTTP carried over TLS, providing transport encryption, integrity protection, and server authentication.

**Answer:** D. HTTPS is HTTP carried over TLS, providing transport encryption, integrity protection, and server authentication.

**Explanation:** It helps protect credentials, tokens, and other sensitive data sent between client and server.

---

## 73. HTML, CSS, and JavaScript — which one loads first in the browser?

- **A.** HTML is parsed first to build the document; CSS and JS are then processed according to their placement/loading rules
- **B.** JavaScript always finishes first regardless of loading attributes.
- **C.** CSS always finishes last.
- **D.** All resources must finish at exactly the same moment.

**Answer:** A. HTML is parsed first to build the document; CSS and JS are then processed according to their placement/loading rules

**Explanation:** The browser starts by parsing HTML because it needs the document structure. While parsing HTML, it discovers CSS and JavaScript resources and processes them according to their placement and attributes such as `defer` and `async`. So there is no universal rule that CSS or JavaScript always finishes first.

---

## 74. What are functions in JavaScript?

- **A.** Functions are only HTML tags.
- **B.** Reusable blocks of code that can accept inputs and return results
- **C.** Functions are database tables.
- **D.** Functions are CSS selectors.

**Answer:** B. Reusable blocks of code that can accept inputs and return results

**Explanation:** A function is a reusable block of JavaScript code that can receive parameters and optionally return a value. Functions can be declared, assigned to variables, passed as arguments, returned from other functions, and used as methods. This makes them fundamental to JavaScript's functional patterns.

---

## 75. Why do we need state instead of normal variables in React?

- **A.** Changing a normal variable automatically triggers React rendering.
- **B.** React state cannot be changed after initialization.
- **C.** State changes tell React to re-render the component with the new value
- **D.** State is used only for CSS values.

**Answer:** C. State changes tell React to re-render the component with the new value

**Explanation:** A normal variable changing does not tell React that the UI needs to be updated. React state is tracked by React, and its setter schedules a render with the new state. This allows the rendered UI to stay synchronized with application data.

---

## 76. What is the cascading/cascade rule in CSS?

- **A.** The last HTML tag always wins.
- **B.** Only class names decide every conflict.
- **C.** CSS never resolves competing declarations.
- **D.** The browser decides the winning style using origin, importance, specificity, and source order

**Answer:** D. The browser decides the winning style using origin, importance, specificity, and source order

**Explanation:** The CSS cascade is the process used to resolve competing style declarations. Browser/user/author origin, importance, specificity, and source order all influence the final value. Knowing the cascade helps debug why a seemingly correct CSS rule is not being applied.

---

## 77. What is a React application?

- **A.** A React application builds UI from components and uses React's rendering/state model to update the interface.
- **B.** It must manipulate every DOM node manually.
- **C.** It cannot use state or components.
- **D.** It is primarily a database framework.

**Answer:** A. A React application builds UI from components and uses React's rendering/state model to update the interface.

**Explanation:** React provides structure for component-based UI development and manages updates through its rendering system.

---

## 78. What is a plain JavaScript web application?

- **A.** It must use React reconciliation for DOM changes.
- **B.** A plain JavaScript application can use browser APIs directly to create and update DOM elements.
- **C.** It cannot call browser APIs.
- **D.** It requires JSX for every UI element.

**Answer:** B. A plain JavaScript application can use browser APIs directly to create and update DOM elements.

**Explanation:** It does not require React's component and reconciliation abstractions.

---

## 79. What is declarative programming?

- **A.** It lists every DOM mutation step explicitly.
- **B.** It means CSS-only programming.
- **C.** Declarative programming describes the desired result rather than listing every step required to produce it.
- **D.** It cannot use functions or expressions.

**Answer:** C. Declarative programming describes the desired result rather than listing every step required to produce it.

**Explanation:** React's UI model is largely declarative because you describe what the UI should look like for a given state.

---

## 80. What is imperative programming?

- **A.** It describes only the desired final UI with no steps.
- **B.** It is limited to CSS.
- **C.** It prevents direct DOM manipulation.
- **D.** Imperative programming describes the steps the program should execute to reach a result.

**Answer:** D. Imperative programming describes the steps the program should execute to reach a result.

**Explanation:** Direct DOM manipulation is a common example because code explicitly tells the browser what to change.

---

## 81. What is a CSS pseudo-class?

- **A.** A pseudo-class targets an element based on a state or condition, such as `:hover` or `:focus`.
- **B.** It represents a virtual piece such as `::before`.
- **C.** It is a JavaScript function.
- **D.** It adds a database field to an element.

**Answer:** A. A pseudo-class targets an element based on a state or condition, such as `:hover` or `:focus`.

**Explanation:** It lets you style states without adding extra classes to the HTML.

---

## 82. What is a CSS pseudo-element?

- **A.** It targets only states such as `:hover`.
- **B.** A pseudo-element targets a virtual part of an element, such as `::before` or `::after`.
- **C.** It is a React component.
- **D.** It is a browser storage object.

**Answer:** B. A pseudo-element targets a virtual part of an element, such as `::before` or `::after`.

**Explanation:** It can create or style generated content without adding a separate HTML element.

---

## 83. What is the reconciliation process in React?

- **A.** React deletes and rebuilds the whole DOM on every render.
- **B.** It only compiles CSS.
- **C.** React compares the new virtual tree with the previous one and updates necessary DOM parts
- **D.** It is a database backup process.

**Answer:** C. React compares the new virtual tree with the previous one and updates necessary DOM parts

**Explanation:** Reconciliation is how React compares the new rendered element tree with the previous one to determine what needs updating. React uses keys and its reconciliation algorithm to preserve or replace elements appropriately. The goal is to update the DOM efficiently rather than rebuild everything.

---

## 84. How do you lift state up in React?

- **A.** Move shared state into CSS.
- **B.** Delete the child component.
- **C.** Keep separate duplicated state in every child.
- **D.** Move shared state to the nearest common parent and pass data/handlers through props

**Answer:** D. Move shared state to the nearest common parent and pass data/handlers through props

**Explanation:** Lifting state up means moving state from child components into their nearest common parent when multiple children need the same data. The parent then passes values and callback handlers down as props. This creates a single source of truth for that shared state.

---

## 85. Explain React Fragments.

- **A.** Fragments group elements without adding an extra DOM element
- **B.** A Fragment always adds a `<div>` to the DOM.
- **C.** A Fragment creates a database.
- **D.** A Fragment opens a browser window.

**Answer:** A. Fragments group elements without adding an extra DOM element

**Explanation:** A Fragment lets a component return multiple sibling elements without adding an unnecessary wrapper to the DOM. You can write `<>...</>` or use `<React.Fragment>`. Fragments are useful when an extra `<div>` would affect layout or markup structure.

---

## 86. What does `useCallback()` do?

- **A.** It memoizes the result of a calculation rather than a function.
- **B.** `useCallback()` memoizes a function reference until its dependencies change.
- **C.** It automatically prevents every child re-render.
- **D.** It replaces `useState()`.

**Answer:** B. `useCallback()` memoizes a function reference until its dependencies change.

**Explanation:** It can help when a callback is passed to a memoized child and unnecessary function identity changes are causing renders.

---

## 87. What does `useMemo()` do?

- **A.** It memoizes a function reference rather than a calculated value.
- **B.** It prevents all component renders.
- **C.** `useMemo()` memoizes the result of a calculation until its dependencies change.
- **D.** It replaces `useEffect()`.

**Answer:** C. `useMemo()` memoizes the result of a calculation until its dependencies change.

**Explanation:** It can avoid repeating an expensive calculation when the relevant inputs have not changed.

---

## 88. What is `React.lazy()`?

- **A.** It loads every component before the application starts.
- **B.** It disables code splitting.
- **C.** It is used only for CSS files.
- **D.** `React.lazy()` lets a component be loaded dynamically, commonly for code splitting.

**Answer:** D. `React.lazy()` lets a component be loaded dynamically, commonly for code splitting.

**Explanation:** It can reduce the amount of JavaScript needed for the initial load.

---

## 89. What is React Suspense?

- **A.** Suspense lets React display fallback UI while supported asynchronous content, such as a lazy component, is loading.
- **B.** It forces lazy components to load synchronously.
- **C.** It is only a database loading mechanism.
- **D.** It removes the need for fallback UI.

**Answer:** A. Suspense lets React display fallback UI while supported asynchronous content, such as a lazy component, is loading.

**Explanation:** A common pattern is `<Suspense fallback={...}>` around lazily loaded components.

---

## 90. What are portals in React, and when should they be used?

- **A.** It is mainly a CSS feature.
- **B.** Portals render children into another DOM node, useful for modals, tooltips, etc.
- **C.** It is a database-only feature.
- **D.** It requires all work to be synchronous.

**Answer:** B. Portals render children into another DOM node, useful for modals, tooltips, etc.

**Explanation:** A portal renders React children into a DOM node outside the component's normal DOM hierarchy. It is useful for modals, dropdowns, tooltips, and overlays that need to escape parent overflow or stacking contexts. Events and React context still work through the React tree.

---

## 91. What is `forwardRef` in React?

- **A.** It is mainly a CSS feature.
- **B.** It is a database-only feature.
- **C.** It lets a component pass a ref through to a child DOM element or component
- **D.** It requires all work to be synchronous.

**Answer:** C. It lets a component pass a ref through to a child DOM element or component

**Explanation:** `forwardRef` lets a parent pass a ref through a custom component to a child DOM node or exposed component. It is useful for reusable inputs where the parent needs to focus or measure the actual input. It bridges React's component abstraction with imperative DOM access.

---

## 92. What is `useRef()` compared with `createRef()`?

- **A.** It is a Hook intended only for function components.
- **B.** It causes a new ref to be discarded after every class render.
- **C.** It is a CSS API.
- **D.** `useRef()` is a hook that keeps the same ref object across renders in a function component.

**Answer:** D. `useRef()` is a hook that keeps the same ref object across renders in a function component.

**Explanation:** It is normally the preferred ref API for function components.

---

## 93. What is `createRef()`?

- **A.** `createRef()` creates a ref object commonly used with class components.
- **B.** It is a Hook intended only for function components.
- **C.** It causes a new ref to be discarded after every class render.
- **D.** It is a CSS API.

**Answer:** A. `createRef()` creates a ref object commonly used with class components.

**Explanation:** In function components, `useRef()` is generally used instead because it persists across renders.

---

## 94. How would you handle Error Boundaries in React?

- **A.** It is mainly a CSS feature.
- **B.** Create an Error Boundary around risky UI and show fallback UI when rendering errors occur
- **C.** It is a database-only feature.
- **D.** It requires all work to be synchronous.

**Answer:** B. Create an Error Boundary around risky UI and show fallback UI when rendering errors occur

**Explanation:** Use an Error Boundary around parts of the UI where a rendering failure should show a fallback instead of breaking the whole page. A boundary can log the error and render a recovery message. It does not automatically catch every event-handler, async, or server-side error.

---

## 95. How would you optimize a large-scale React application?

- **A.** It must manipulate every DOM node manually.
- **B.** It cannot use state or components.
- **C.** Use code splitting, memoization where useful, virtualization, efficient state management, caching, and profiling
- **D.** It is primarily a database framework.

**Answer:** C. Use code splitting, memoization where useful, virtualization, efficient state management, caching, and profiling

**Explanation:** Large React apps benefit from code splitting, lazy loading, efficient state placement, virtualization for large lists, caching, memoization when justified, and performance profiling. Avoid unnecessary global state and unnecessary renders. Measure first so optimization targets the real bottleneck.

---

## 96. How does React Fiber work?

- **A.** Fiber is a database engine.
- **B.** Fiber only handles CSS.
- **C.** Fiber replaces JavaScript.
- **D.** Fiber is React's rendering architecture that breaks work into units and schedules updates efficiently

**Answer:** D. Fiber is React's rendering architecture that breaks work into units and schedules updates efficiently

**Explanation:** React Fiber is the internal reconciliation/rendering architecture that represents work as units called fibers. It allows React to prioritize and schedule rendering work rather than treating a render as one indivisible operation. This architecture supports features such as concurrent rendering.

---

## 97. What are Web Workers?

- **A.** Web Workers run JavaScript in a background thread separate from the main UI thread.
- **B.** Workers always run on the main UI thread.
- **C.** Workers can directly manipulate the DOM from their background thread.
- **D.** Workers are used only for HTTP routing.

**Answer:** A. Web Workers run JavaScript in a background thread separate from the main UI thread.

**Explanation:** They are useful for CPU-heavy work that would otherwise make the UI less responsive.

---

## 98. How can React communicate with a Web Worker?

- **A.** It is mainly a CSS feature.
- **B.** React can communicate with a worker using message APIs such as `postMessage()` and message events.
- **C.** It is a database-only feature.
- **D.** It requires all work to be synchronous.

**Answer:** B. React can communicate with a worker using message APIs such as `postMessage()` and message events.

**Explanation:** The worker cannot directly manipulate the DOM, so results are sent back to the main thread.

---

## 99. What is hydration in React?

- **A.** Hydration deletes server-rendered HTML.
- **B.** Hydration encrypts database records.
- **C.** Hydration attaches React behavior to server-rendered HTML
- **D.** Hydration compresses images.

**Answer:** C. Hydration attaches React behavior to server-rendered HTML

**Explanation:** Hydration is the process of attaching React's event handlers and behavior to HTML that was already rendered on the server. The browser receives useful HTML first, then React makes it interactive. The server HTML and client-rendered structure need to match closely to avoid hydration problems.

---

## 100. How does code splitting improve performance?

- **A.** It downloads the entire app bundle before any route loads.
- **B.** It disables browser caching.
- **C.** It removes client-side routing.
- **D.** It loads only needed JavaScript chunks instead of the entire app at once

**Answer:** D. It loads only needed JavaScript chunks instead of the entire app at once

**Explanation:** Code splitting breaks a large JavaScript bundle into smaller chunks that can be loaded when needed. A user does not have to download code for every route or feature during the initial page load. This can improve initial load performance and reduce unnecessary network work.

---

## 101. What is React Profiler?

- **A.** A tool for measuring React rendering performance and identifying expensive updates
- **B.** It is a CSS editor.
- **C.** It is only a database monitor.
- **D.** It is a deployment server.

**Answer:** A. A tool for measuring React rendering performance and identifying expensive updates

**Explanation:** React Profiler helps measure component render performance, including which components rendered and how much time was spent. It can be used through React DevTools or profiling APIs. The goal is to identify expensive renders before deciding what to optimize.

---

## 102. Explain lazy loading images in React.

- **A.** It loads every image twice.
- **B.** Load images when they are near/needed instead of loading all images immediately
- **C.** It never loads images.
- **D.** It converts images into CSS.

**Answer:** B. Load images when they are near/needed instead of loading all images immediately

**Explanation:** Lazy loading images means delaying image loading until an image is close to being visible or actually needed. Native `loading="lazy"`, Intersection Observer, or framework image components can help. It reduces initial network usage, especially on pages containing many images.

---

## 103. How do you optimize re-rendering in React?

- **A.** It is mainly a CSS feature.
- **B.** It is a database-only feature.
- **C.** Keep state local when possible, use stable props, memoization when useful, and avoid unnecessary updates
- **D.** It requires all work to be synchronous.

**Answer:** C. Keep state local when possible, use stable props, memoization when useful, and avoid unnecessary updates

**Explanation:** Keep state as local as possible, avoid creating unnecessary new props, use stable keys, and memoize components or values only when useful. Large lists can use virtualization, and expensive calculations can be memoized. Profiling helps identify which components are actually causing unnecessary work.

---

## 104. How do you handle memory leaks in a React application?

- **A.** It must manipulate every DOM node manually.
- **B.** It cannot use state or components.
- **C.** It is primarily a database framework.
- **D.** Clean up subscriptions, timers, listeners, and async effects when components unmount

**Answer:** D. Clean up subscriptions, timers, listeners, and async effects when components unmount

**Explanation:** Memory leaks can happen when timers, event listeners, subscriptions, sockets, or async resources remain active after a component is no longer needed. React effects should return cleanup functions for resources they create. Proper cleanup prevents duplicate listeners, timers, and retained references.

---

## 105. Explain tree shaking in React.

- **A.** Build tools remove unused exported code from the final bundle when supported
- **B.** It removes the entire DOM tree at runtime.
- **C.** It is a React Hook.
- **D.** It only compresses images.

**Answer:** A. Build tools remove unused exported code from the final bundle when supported

**Explanation:** Tree shaking is a build-time optimization where unused exports are removed from the production bundle when the module system and tooling support static analysis. It can reduce JavaScript size and improve load performance. It works best with ES module imports/exports and properly configured build tools.

---

## 106. How do you prevent unnecessary API calls in React?

- **A.** Call the API on every render.
- **B.** Use correct effect dependencies, caching, debouncing where needed, and avoid duplicate requests
- **C.** Use an infinite interval for every request.
- **D.** Disable all component state.

**Answer:** B. Use correct effect dependencies, caching, debouncing where needed, and avoid duplicate requests

**Explanation:** Avoid placing API calls in effects that run unnecessarily, use correct dependencies, and cache server data where appropriate. Debounce search requests and cancel/ignore outdated requests when needed. In development, React Strict Mode can expose effects that are not written to tolerate repeated execution.

---

## 107. How do you preload assets in React?

- **A.** A Set allows duplicate values by design.
- **B.** A Set requires every key to be a string.
- **C.** Use appropriate browser preload hints or framework features for critical assets
- **D.** A Set stores only key-value pairs.

**Answer:** C. Use appropriate browser preload hints or framework features for critical assets

**Explanation:** Critical assets can be preloaded using browser hints such as `<link rel="preload">` or framework-specific mechanisms. Preloading should be reserved for resources the browser will definitely need soon. Over-preloading can waste bandwidth and actually hurt performance.

---

## 108. How does `useDeferredValue()` improve performance?

- **A.** It makes every update synchronous.
- **B.** It disables rendering.
- **C.** It changes only CSS.
- **D.** It lets less urgent UI updates be deferred so urgent interactions stay responsive

**Answer:** D. It lets less urgent UI updates be deferred so urgent interactions stay responsive

**Explanation:** `useDeferredValue()` lets React treat a derived value as lower priority so urgent interactions can remain responsive. For example, typing into a search box can stay fast while a large result list updates later. It does not make the expensive work disappear; it changes its priority.

---

## 109. How do you implement a Progressive Web App (PWA) in React?

- **A.** Add a web app manifest, service worker, HTTPS, and appropriate caching/offline behavior
- **B.** A PWA requires only HTML comments.
- **C.** A PWA should disable HTTPS.
- **D.** A PWA replaces the browser with a database.

**Answer:** A. Add a web app manifest, service worker, HTTPS, and appropriate caching/offline behavior

**Explanation:** A React PWA normally needs a web app manifest, HTTPS, a service worker, appropriate caching, and an installable/responsive UI. The service worker can support offline behavior and caching strategies. A PWA is a web application with enhanced browser/device capabilities, not simply a React app with a manifest.

---

## 110. How do you handle errors in Express.js?

- **A.** Ignore errors so requests continue silently.
- **B.** Use error-handling middleware and pass errors with `next(error)`
- **C.** Use CSS to catch server errors.
- **D.** Restart the browser whenever a route fails.

**Answer:** B. Use error-handling middleware and pass errors with `next(error)`

**Explanation:** Express error handling is commonly done with error middleware having four parameters: `(err, req, res, next)`. Route/middleware code can call `next(error)` to pass the error to that handler. Centralized handling keeps API error responses consistent and prevents duplicate error logic.

---

## 111. How do you connect MongoDB to Express.js?

- **A.** Connect MongoDB using CSS.
- **B.** Use browser localStorage as a MongoDB server.
- **C.** Use a MongoDB driver or ODM such as Mongoose and connect from the Node.js server
- **D.** Use only HTML to establish the database connection.

**Answer:** C. Use a MongoDB driver or ODM such as Mongoose and connect from the Node.js server

**Explanation:** The Node/Express server can connect to MongoDB using the official MongoDB driver or an ODM such as Mongoose. The connection is usually created during application startup and reused rather than opening a new database connection for every request. Connection strings and credentials should be kept in environment variables.

---

## 112. How does JWT authentication work in Node.js?

- **A.** JWT stores passwords as plain text.
- **B.** JWT is a CSS mechanism.
- **C.** JWT removes the need for authentication.
- **D.** Server signs a token after login; client sends it with requests and server verifies it

**Answer:** D. Server signs a token after login; client sends it with requests and server verifies it

**Explanation:** After successful login, the server can sign a JWT containing claims such as a user ID and expiration. The client sends the token with later requests, and the server verifies its signature and claims before allowing protected operations. JWTs are signed tokens, not encrypted password storage.

---

## 113. What is `bcryptjs`, and how does it improve security?

- **A.** It hashes passwords so passwords are not stored directly
- **B.** It stores passwords in plain text.
- **C.** It encrypts CSS styles.
- **D.** It replaces all JWT authentication.

**Answer:** A. It hashes passwords so passwords are not stored directly

**Explanation:** `bcryptjs` provides password hashing using bcrypt. A password is hashed with a salt and the resulting hash is stored instead of the original password. During login, the submitted password is compared with the stored hash; the original password cannot simply be recovered from the hash.

---

## 114. How do you handle file uploads in Node.js?

- **A.** Use CSS to process multipart data.
- **B.** Use multipart/form-data handling middleware such as Multer and validate/store files safely
- **C.** Use `console.log()` as the file upload protocol.
- **D.** Accept every filename and path without validation.

**Answer:** B. Use multipart/form-data handling middleware such as Multer and validate/store files safely

**Explanation:** File uploads are commonly sent as `multipart/form-data` and handled by middleware such as Multer. A secure implementation checks file size/type, generates safe filenames, stores files in an appropriate location, and avoids trusting user-provided paths. Cloud object storage is also common in production.

---

## 115. What are Cookies?

- **A.** Cookies are never included in HTTP requests.
- **B.** Cookies can store unlimited amounts of browser data.
- **C.** Cookies are small browser values that can be automatically sent with matching HTTP requests.
- **D.** Cookies are available only to CSS.

**Answer:** C. Cookies are small browser values that can be automatically sent with matching HTTP requests.

**Explanation:** They can be configured with security attributes such as `HttpOnly`, `Secure`, and `SameSite`.

---

## 116. What is `localStorage`?

- **A.** localStorage is automatically attached to every HTTP request.
- **B.** It can be accessed only from a Node.js server.
- **C.** It automatically encrypts all stored values.
- **D.** `localStorage` stores data in the browser and is accessed through JavaScript; it is not automatically sent with HTTP requests.

**Answer:** D. `localStorage` stores data in the browser and is accessed through JavaScript; it is not automatically sent with HTTP requests.

**Explanation:** It is useful for certain client-side data, but sensitive authentication data requires careful security design.

---

## 117. What is PM2, and why is it used in production?

- **A.** A Node.js process manager used for running, restarting, and monitoring apps
- **B.** PM2 is a database.
- **C.** PM2 is a React hook.
- **D.** PM2 is a CSS framework.

**Answer:** A. A Node.js process manager used for running, restarting, and monitoring apps

**Explanation:** PM2 is a Node.js process manager used to keep applications running, restart them after crashes, manage multiple instances, and provide basic monitoring/log management. It can also support cluster mode and startup configuration. In modern deployments, containers and cloud process managers can provide similar capabilities.

---

## 118. What is Helmet.js, and how does it improve security?

- **A.** Helmet hashes passwords.
- **B.** It sets useful HTTP security headers in Express applications
- **C.** Helmet replaces MongoDB.
- **D.** Helmet is a UI component library.

**Answer:** B. It sets useful HTTP security headers in Express applications

**Explanation:** Helmet.js is Express middleware that sets or helps configure several HTTP security headers. These headers can reduce risks such as certain XSS, clickjacking, and MIME-sniffing attacks. Helmet is a security layer, not a replacement for authentication, validation, or HTTPS.

---

## 119. How do you implement OAuth authentication in Express.js?

- **A.** Store passwords in URLs.
- **B.** Disable HTTPS during OAuth.
- **C.** Use an OAuth provider flow to authenticate users and securely handle callback/tokens
- **D.** Use only a CSS login form.

**Answer:** C. Use an OAuth provider flow to authenticate users and securely handle callback/tokens

**Explanation:** OAuth lets an application delegate authentication/authorization to a provider such as Google or another identity service. The typical flow redirects the user to the provider, receives an authorization response/callback, exchanges it securely when required, and creates a local session/token. HTTPS and correct redirect URI validation are important.

---

## 120. What is rate limiting, and how do you implement it?

- **A.** It allows unlimited requests.
- **B.** It is a database index.
- **C.** It is React state management.
- **D.** It limits requests from clients; middleware such as express-rate-limit can implement it

**Answer:** D. It limits requests from clients; middleware such as express-rate-limit can implement it

**Explanation:** Rate limiting restricts how many requests a client can make in a given period. It helps protect login endpoints, APIs, and other resources from brute-force attacks and abuse. Express middleware such as `express-rate-limit` can implement basic rate limiting, often backed by shared storage in distributed systems.

---

## 121. How do you optimize API performance in Express.js?

- **A.** Use caching, efficient queries, compression, pagination, indexes, and avoid unnecessary work
- **B.** Add more blocking code.
- **C.** Always return the largest possible payload.
- **D.** Disable database indexes.

**Answer:** A. Use caching, efficient queries, compression, pagination, indexes, and avoid unnecessary work

**Explanation:** API performance can be improved with database indexes and efficient queries, pagination, caching, compression, connection reuse, smaller payloads, and avoiding unnecessary processing. The right optimization depends on the bottleneck. Profiling and monitoring should guide the changes.

---

## 122. How does caching work in Node.js?

- **A.** Caching permanently deletes old data.
- **B.** Frequently used data is stored temporarily so future requests can be served faster
- **C.** Caching changes only CSS.
- **D.** Caching prevents every future API call forever.

**Answer:** B. Frequently used data is stored temporarily so future requests can be served faster

**Explanation:** Caching stores frequently requested data temporarily so later requests can avoid expensive computation or database/network work. A cache has a key, value, and usually an expiration/invalidation strategy. Good cache design must consider stale data and memory usage.

---

## 123. How do you secure Express applications?

- **A.** Trust every request by default.
- **B.** Store passwords in plain text.
- **C.** Validate input, use HTTPS, secure headers, authentication, authorization, rate limiting, and safe dependencies
- **D.** Disable input validation.

**Answer:** C. Validate input, use HTTPS, secure headers, authentication, authorization, rate limiting, and safe dependencies

**Explanation:** Secure Express applications use HTTPS, input validation, authentication, authorization, secure headers, rate limiting, safe cookies, dependency updates, secret management, and safe error responses. Database queries and file operations should also validate untrusted input. Security is a layered process.

---

## 124. How do you handle real-time events in Express.js?

- **A.** Use only HTML for live events.
- **B.** Use CSS animations as the server communication layer.
- **C.** Use localStorage as a real-time transport.
- **D.** Use WebSockets/Socket.IO or similar real-time communication tools

**Answer:** D. Use WebSockets/Socket.IO or similar real-time communication tools

**Explanation:** Express itself is primarily request/response based, so real-time communication is usually added with WebSockets, Socket.IO, Server-Sent Events, or another real-time technology. The server can emit events to connected clients when something changes. This is useful for chat, live notifications, tracking, and collaborative features.

---

## 125. What is the purpose of `process.nextTick()` in Node.js?

- **A.** It schedules a callback to run after the current operation, before the event loop continues to later phases
- **B.** It stops Node.js completely.
- **C.** It creates a worker thread.
- **D.** It waits for one hour before executing.

**Answer:** A. It schedules a callback to run after the current operation, before the event loop continues to later phases

**Explanation:** `process.nextTick()` queues a callback to run after the current operation completes but before the event loop proceeds to later phases. It is useful for deferring work while still running it very soon. Excessive recursive use can starve the event loop, so it should be used carefully.

---

## 126. How do you handle memory leaks in a Node.js application?

- **A.** Ignore memory usage.
- **B.** Remove unused references/listeners, clean timers, manage resources, and monitor memory
- **C.** Create more global references.
- **D.** Restart after every request as the main fix.

**Answer:** B. Remove unused references/listeners, clean timers, manage resources, and monitor memory

**Explanation:** Node memory leaks often come from long-lived references, growing global collections, forgotten event listeners, timers, caches without limits, or resources that are never closed. Heap snapshots and memory profiling can help find retained objects. Fixing the reference/resource lifecycle is better than simply restarting the process repeatedly.

---

## 127. How do you optimize Node.js for high performance?

- **A.** Block the event loop for heavy work.
- **B.** Use synchronous I/O everywhere.
- **C.** Use async I/O, caching, efficient queries, clustering/workers when appropriate, and profiling
- **D.** Disable caching.

**Answer:** C. Use async I/O, caching, efficient queries, clustering/workers when appropriate, and profiling

**Explanation:** High-performance Node.js systems generally keep I/O asynchronous, avoid blocking the event loop, use efficient database queries/indexes, cache repeated work, stream large data, and move CPU-heavy work to workers. Load balancing and multiple processes can scale across CPU cores. Profiling should guide optimization.

---

## 128. What is load balancing, and how does it work in Node.js?

- **A.** It stores passwords.
- **B.** It compiles React code.
- **C.** It deletes incoming requests.
- **D.** It distributes incoming traffic across multiple server instances

**Answer:** D. It distributes incoming traffic across multiple server instances

**Explanation:** A load balancer receives incoming traffic and distributes it across multiple application instances. This allows horizontal scaling and can improve availability because traffic can be redirected if an instance fails. In production, load balancers can also handle TLS termination, health checks, and routing.

---

## 129. How do you scale a Node.js application?

- **A.** Run multiple instances, use load balancing, caching, queues, and scalable databases as needed
- **B.** Keep only one process forever.
- **C.** Disable networking.
- **D.** Put all work in one blocking function.

**Answer:** A. Run multiple instances, use load balancing, caching, queues, and scalable databases as needed

**Explanation:** Scaling can be vertical, by giving a server more resources, or horizontal, by running multiple instances. Node applications commonly use load balancing, clustering/containers, Redis or other shared caches, background queues, and scalable databases. Stateless application design makes horizontal scaling easier.

---

## 130. How does Redis caching improve performance?

- **A.** Redis replaces JavaScript.
- **B.** Redis keeps frequently needed data in fast memory, reducing repeated database work
- **C.** Redis stores only CSS.
- **D.** Redis makes every database query slower.

**Answer:** B. Redis keeps frequently needed data in fast memory, reducing repeated database work

**Explanation:** Redis stores frequently needed data in memory, making reads much faster than repeatedly querying a database in many use cases. A Node API can check Redis first and fall back to the database on a cache miss. TTLs and invalidation are important so stale data does not remain forever.

---

## 131. What are `worker_threads` in Node.js, and when should you use them?

- **A.** They are used only for CSS.
- **B.** They replace HTTP itself.
- **C.** They run JavaScript in separate threads and are useful for CPU-heavy work
- **D.** They are primarily a password storage feature.

**Answer:** C. They run JavaScript in separate threads and are useful for CPU-heavy work

**Explanation:** `worker_threads` allow JavaScript to run in separate threads inside the Node.js process. They are useful for CPU-heavy calculations such as image processing, encryption-heavy work, or data transformations that would otherwise block the event loop. They are not usually needed for normal asynchronous I/O.

---

## 132. How would you handle large file processing in Node.js?

- **A.** Always load the entire file into memory.
- **B.** Use CSS for file processing.
- **C.** Convert every file to HTML before processing.
- **D.** Use streams/chunks and avoid loading the entire file into memory

**Answer:** D. Use streams/chunks and avoid loading the entire file into memory

**Explanation:** Large files should normally be processed with streams so data is handled in chunks rather than loading the whole file into memory. Streams can also pipe data through transformations such as compression or uploads. This keeps memory usage predictable for large inputs.

---

## 133. Explain garbage collection in Node.js.

- **A.** The runtime automatically finds unreachable objects and frees their memory
- **B.** It is one BSON record only.
- **C.** It is the entire database server.
- **D.** It is a single property inside a document.

**Answer:** A. The runtime automatically finds unreachable objects and frees their memory

**Explanation:** Garbage collection automatically finds objects that are no longer reachable by the running program and reclaims their memory. Node.js uses the V8 JavaScript engine's garbage collector. Developers do not normally manually free objects, but they must avoid accidentally retaining references that prevent collection.

---

## 134. What is cluster mode, and how does it help a Node.js application?

- **A.** It creates one CSS file.
- **B.** It can run multiple Node.js processes to use multiple CPU cores and handle more traffic
- **C.** It disables networking.
- **D.** It stores MongoDB documents.

**Answer:** B. It can run multiple Node.js processes to use multiple CPU cores and handle more traffic

**Explanation:** Cluster mode runs multiple Node.js processes so an application can use more than one CPU core. The processes are independent and can share incoming server traffic through the cluster mechanism. Each worker has its own memory, so shared state must be externalized when necessary.

---

## 135. How do you monitor a Node.js application in production?

- **A.** Check source code once and never collect runtime data.
- **B.** Use CSS monitoring only.
- **C.** Use logs, metrics, health checks, tracing, and monitoring tools
- **D.** Disable logs and health checks.

**Answer:** C. Use logs, metrics, health checks, tracing, and monitoring tools

**Explanation:** Production monitoring combines structured logs, metrics, health checks, error tracking, tracing, CPU/memory monitoring, and alerts. Tools such as application monitoring platforms can show latency, error rates, throughput, and resource usage. The goal is to detect and diagnose problems before users are heavily affected.

---

## 136. What are lexical environments in JavaScript?

- **A.** They are browser windows.
- **B.** They are CSS rules.
- **C.** They are MongoDB collections.
- **D.** They store identifiers and their bindings for a scope, enabling lexical scoping

**Answer:** D. They store identifiers and their bindings for a scope, enabling lexical scoping

**Explanation:** A lexical environment is the internal structure that stores variable/function bindings for a particular scope and a reference to its outer environment. It is what allows JavaScript's lexical scoping and closures to work. Nested functions can access variables from their outer lexical environments.

---

## 137. Explain prototypal inheritance in JavaScript.

- **A.** Objects can inherit properties and methods through the prototype chain
- **B.** Objects cannot inherit properties or methods.
- **C.** It works only in CSS.
- **D.** It is SQL inheritance.

**Answer:** A. Objects can inherit properties and methods through the prototype chain

**Explanation:** Prototypal inheritance means an object can access properties and methods from another object through its prototype chain. If JavaScript does not find a property on the object itself, it checks the prototype and continues upward. ES6 classes provide syntax built on top of this prototype mechanism.

---

## 138. How does `Object.create()` work?

- **A.** It deletes an object.
- **B.** It creates a new object using the given object as its prototype
- **C.** It freezes every object automatically.
- **D.** It creates React state.

**Answer:** B. It creates a new object using the given object as its prototype

**Explanation:** `Object.create(proto)` creates a new object whose internal prototype points to `proto`. The new object can access properties/methods from that prototype through the prototype chain. It is useful when you want explicit control over an object's prototype.

---

## 139. What are getter and setter functions in JavaScript?

- **A.** A Set allows duplicate values by design.
- **B.** A Set requires every key to be a string.
- **C.** They define how a property is read and assigned
- **D.** A Set stores only key-value pairs.

**Answer:** C. They define how a property is read and assigned

**Explanation:** Getters and setters allow you to define custom behavior when a property is read or assigned. A getter can calculate/return a value, while a setter can validate or transform an assigned value. They are defined with `get` and `set` in object literals or classes.

---

## 140. What does `Object.freeze()` do?

- **A.** It allows adding and deleting top-level properties.
- **B.** It automatically deep-freezes every nested object.
- **C.** It copies the object into a new object.
- **D.** `Object.freeze()` prevents adding, removing, or changing properties of an object at the top level.

**Answer:** D. `Object.freeze()` prevents adding, removing, or changing properties of an object at the top level.

**Explanation:** It makes the object itself immutable at the top level, but nested objects are not automatically deeply frozen.

---

## 141. What does `Object.seal()` do?

- **A.** `Object.seal()` prevents adding or deleting properties but still allows existing writable properties to be changed.
- **B.** It allows new properties to be added freely.
- **C.** It prevents changing every existing property.
- **D.** It creates a deep copy.

**Answer:** A. `Object.seal()` prevents adding or deleting properties but still allows existing writable properties to be changed.

**Explanation:** It is less restrictive than `Object.freeze()`.

---

## 142. What does `Object.assign()` do?

- **A.** It deep-clones every nested object.
- **B.** `Object.assign()` copies enumerable own properties from source objects onto a target object and returns the target.
- **C.** It freezes the target object.
- **D.** It copies only inherited properties.

**Answer:** B. `Object.assign()` copies enumerable own properties from source objects onto a target object and returns the target.

**Explanation:** It is commonly used for shallow object copying or merging.

---

## 143. What does `setTimeout()` do?

- **A.** It repeats the callback forever until the page closes.
- **B.** It runs the callback before the current synchronous code finishes.
- **C.** `setTimeout()` schedules a callback to run once after at least the specified delay.
- **D.** It cannot be cancelled.

**Answer:** C. `setTimeout()` schedules a callback to run once after at least the specified delay.

**Explanation:** The delay is a minimum scheduling delay, not a guarantee of exact execution time.

---

## 144. What does `setInterval()` do?

- **A.** It runs the callback only once.
- **B.** It guarantees exact real-time execution.
- **C.** It cannot be cancelled.
- **D.** `setInterval()` repeatedly schedules a callback at an interval until it is cancelled.

**Answer:** D. `setInterval()` repeatedly schedules a callback at an interval until it is cancelled.

**Explanation:** Use `clearInterval()` to stop it and be careful about overlapping or long-running callbacks.

---

## 145. Explain function composition in JavaScript.

- **A.** It combines functions so the output of one becomes the input of another
- **B.** It means deleting functions after use.
- **C.** It means creating CSS selectors from functions.
- **D.** It means every function must have a class.

**Answer:** A. It combines functions so the output of one becomes the input of another

**Explanation:** Function composition combines smaller functions so the output of one becomes the input of another. For example, if `double()` returns 10 and `square()` receives 10, composition can create a function that performs both operations. It is common in functional programming and reusable data-processing pipelines.

---

## 146. What is debouncing in JavaScript?

- **A.** It runs the function at a fixed maximum frequency while events continue.
- **B.** Debouncing delays execution until a specified period has passed without another trigger.
- **C.** It executes immediately on every event.
- **D.** It is mainly used to store API responses.

**Answer:** B. Debouncing delays execution until a specified period has passed without another trigger.

**Explanation:** It is useful for search inputs or resize handlers where you want to wait until rapid activity stops.

---

## 147. What is throttling in JavaScript?

- **A.** It waits until all events stop before running once.
- **B.** It executes an unlimited number of calls immediately.
- **C.** Throttling limits how often a function can run during a period of repeated events.
- **D.** It permanently disables the event.

**Answer:** C. Throttling limits how often a function can run during a period of repeated events.

**Explanation:** It is useful for scroll, mousemove, or other high-frequency events where regular updates are enough.

---

## 148. How does JavaScript handle memory management and garbage collection?

- **A.** It is one BSON record only.
- **B.** It is the entire database server.
- **C.** It is a single property inside a document.
- **D.** JavaScript allocates memory automatically and garbage collection removes unreachable objects

**Answer:** D. JavaScript allocates memory automatically and garbage collection removes unreachable objects

**Explanation:** JavaScript automatically allocates memory for values and uses garbage collection to reclaim memory that is no longer reachable. Memory leaks still happen when code accidentally keeps references to objects that are no longer needed. Large caches, global arrays, listeners, and timers are common causes.

---

## 149. How could you optimize a large JavaScript application?

- **A.** Code splitting, lazy loading, caching, efficient algorithms, profiling, and reducing unnecessary work
- **B.** Add unnecessary synchronous work.
- **C.** Disable caching and code splitting.
- **D.** Load every feature before it is needed.

**Answer:** A. Code splitting, lazy loading, caching, efficient algorithms, profiling, and reducing unnecessary work

**Explanation:** Large applications can be optimized through code splitting, lazy loading, caching, efficient algorithms/data structures, image optimization, minimizing unnecessary work, and profiling. Bundle analysis can identify large dependencies. The best optimization is based on measured bottlenecks rather than assumptions.

---

## 150. What are Web Workers, and how do they improve performance?

- **A.** Workers always run on the main UI thread.
- **B.** They run JavaScript in background threads so heavy work does not block the main UI thread
- **C.** Workers can directly manipulate the DOM from their background thread.
- **D.** Workers are used only for HTTP routing.

**Answer:** B. They run JavaScript in background threads so heavy work does not block the main UI thread

**Explanation:** Web Workers run JavaScript away from the main browser thread, so CPU-heavy work does not freeze the UI. Communication happens through messages such as `postMessage()`. Workers cannot directly access the normal DOM, so results must be sent back to the main thread.

---

## 151. What is Cross-Site Scripting (XSS), and how do you prevent it?

- **A.** Trust all user-provided HTML.
- **B.** Disable output encoding.
- **C.** XSS injects malicious scripts; prevent it with output escaping, safe APIs, validation, CSP, and avoiding unsafe HTML
- **D.** Insert unsanitized input directly into the DOM.

**Answer:** C. XSS injects malicious scripts; prevent it with output escaping, safe APIs, validation, CSP, and avoiding unsafe HTML

**Explanation:** XSS occurs when attacker-controlled content is interpreted as executable script in another user's browser. Prevent it by escaping output, avoiding unsafe HTML injection, validating input, using safe DOM APIs, applying a strong Content Security Policy, and configuring cookies securely. React escapes normal JSX text by default, but unsafe HTML APIs still require care.

---

## 152. What is the Spread operator (`...`) in JavaScript?

- **A.** It collects remaining function arguments into an array.
- **B.** It always creates a deep copy.
- **C.** It can be used only with function parameters.
- **D.** Spread expands iterable or object values into individual elements/properties in a new expression.

**Answer:** D. Spread expands iterable or object values into individual elements/properties in a new expression.

**Explanation:** It is commonly used for copying or combining arrays and objects.

---

## 153. What is the Rest operator (`...`) in JavaScript?

- **A.** Rest collects remaining arguments or properties into a single array or object.
- **B.** It expands an array into individual values.
- **C.** It always clones nested objects.
- **D.** It can be used only in object literals.

**Answer:** A. Rest collects remaining arguments or properties into a single array or object.

**Explanation:** It is commonly used in function parameters and destructuring.

---

## 154. What is destructuring, and how does it work?

- **A.** It permanently deletes object properties.
- **B.** It extracts values from arrays/objects into variables using matching syntax
- **C.** It is a CSS selector syntax.
- **D.** It converts every value into a string.

**Answer:** B. It extracts values from arrays/objects into variables using matching syntax

**Explanation:** Destructuring extracts values from arrays or properties from objects into variables. For example, `const {name, age} = user` reads two properties, while `const [first, second] = arr` reads array positions. It makes code shorter and clearer when accessing known values.

---

## 155. Explain default parameters in JavaScript.

- **A.** They replace every function argument with `null`.
- **B.** They can be used only in CSS.
- **C.** They provide a default value when an argument is `undefined`
- **D.** They require every caller to pass a value.

**Answer:** C. They provide a default value when an argument is `undefined`

**Explanation:** Default parameters provide a fallback value when an argument is `undefined`. For example, `function greet(name = 'User')` uses `User` when no value or `undefined` is passed. Passing `null` does not trigger the default because `null` is a real value.

---

## 156. What is `arguments`, and when would you use it?

- **A.** It is a database collection.
- **B.** It is available only in arrow functions.
- **C.** It automatically stores every global variable.
- **D.** It is an array-like object containing arguments passed to a non-arrow function

**Answer:** D. It is an array-like object containing arguments passed to a non-arrow function

**Explanation:** `arguments` is an array-like object available inside traditional non-arrow functions and contains the arguments passed to that call. It can be useful in older code or when working with variable numbers of arguments. Modern JavaScript usually prefers rest parameters such as `(...args)` because they create a real array.

---

## 157. What is a Set in JavaScript?

- **A.** A Set is a collection that stores unique values.
- **B.** A Set allows duplicate values by design.
- **C.** A Set requires every key to be a string.
- **D.** A Set stores only key-value pairs.

**Answer:** A. A Set is a collection that stores unique values.

**Explanation:** It is useful when duplicate values should be removed or membership needs to be checked.

---

## 158. What is a Map in JavaScript?

- **A.** A Map allows only string keys.
- **B.** A Map is a key-value collection that allows keys of many types and preserves insertion order during iteration.
- **C.** A Map stores values without keys.
- **D.** A Map automatically removes duplicate keys and values separately.

**Answer:** B. A Map is a key-value collection that allows keys of many types and preserves insertion order during iteration.

**Explanation:** It is useful when you need flexible keys and explicit key-value storage.

---

## 159. What is a WeakMap in JavaScript?

- **A.** A Map allows only string keys.
- **B.** A Map stores values without keys.
- **C.** A WeakMap stores key-value pairs where keys must be objects and are weakly referenced.
- **D.** A Map automatically removes duplicate keys and values separately.

**Answer:** C. A WeakMap stores key-value pairs where keys must be objects and are weakly referenced.

**Explanation:** It is useful for associating metadata with objects without preventing those objects from being garbage-collected.

---

## 160. What is a WeakSet in JavaScript?

- **A.** A Set allows duplicate values by design.
- **B.** A Set requires every key to be a string.
- **C.** A Set stores only key-value pairs.
- **D.** A WeakSet stores object references weakly and does not keep those objects alive by itself.

**Answer:** D. A WeakSet stores object references weakly and does not keep those objects alive by itself.

**Explanation:** It is useful for tracking object membership when you do not need enumeration or primitive values.

---

## 161. What is an ES6 class in JavaScript?

- **A.** An ES6 class provides syntax for defining constructors and methods while using JavaScript's prototype-based inheritance underneath.
- **B.** Classes remove JavaScript's prototype system.
- **C.** Classes can be instantiated only without `new`.
- **D.** Classes are CSS constructs.

**Answer:** A. An ES6 class provides syntax for defining constructors and methods while using JavaScript's prototype-based inheritance underneath.

**Explanation:** Classes offer a familiar object-oriented syntax but do not change JavaScript's prototype model.

---

## 162. What is a constructor function in JavaScript?

- **A.** It can never be used with `new`.
- **B.** A constructor function is a regular function intended to create objects when called with `new`.
- **C.** It is a database constructor rather than a JavaScript function.
- **D.** Instances cannot inherit through its prototype.

**Answer:** B. A constructor function is a regular function intended to create objects when called with `new`.

**Explanation:** Instances created with `new` can inherit methods through the function's prototype.

---

## 163. What is `super()` in ES6 classes?

- **A.** Classes remove JavaScript's prototype system.
- **B.** Classes can be instantiated only without `new`.
- **C.** It calls the parent class constructor and is used in a derived class before using `this`
- **D.** Classes are CSS constructs.

**Answer:** C. It calls the parent class constructor and is used in a derived class before using `this`

**Explanation:** `super()` calls the constructor of the parent class when used inside a derived class constructor. A derived constructor must call `super()` before accessing `this`. It is also used as `super.method()` to call a parent class method.

---

## 164. What is `Promise.all()` in JavaScript?

- **A.** It is a CSS rule for delayed animations.
- **B.** It represents only synchronous function calls.
- **C.** It can have unlimited state changes after it is settled.
- **D.** It waits for all promises to fulfill and rejects if any promise rejects

**Answer:** D. It waits for all promises to fulfill and rejects if any promise rejects

**Explanation:** `Promise.all()` runs multiple Promises together and fulfills only when all of them fulfill. If any input Promise rejects, the combined Promise rejects immediately with that rejection. It is useful when several independent async operations are all required before continuing.

---

## 165. What is `Promise.race()` in JavaScript?

- **A.** It settles when the first input promise settles
- **B.** It is a CSS rule for delayed animations.
- **C.** It represents only synchronous function calls.
- **D.** It can have unlimited state changes after it is settled.

**Answer:** A. It settles when the first input promise settles

**Explanation:** `Promise.race()` settles as soon as the first input Promise settles, whether fulfilled or rejected. It is useful for timeout patterns and choosing the fastest result. It does not cancel the other Promises; they may continue running in the background.

---

## 166. How do you handle errors with `async/await`?

- **A.** It removes the need for Promises completely.
- **B.** Use `try/catch` around awaited operations and handle/rethrow the error as needed
- **C.** It makes asynchronous operations execute synchronously on the whole application.
- **D.** It can be used only with CSS animations.

**Answer:** B. Use `try/catch` around awaited operations and handle/rethrow the error as needed

**Explanation:** With async/await, wrap awaited operations in `try/catch` to handle rejected Promises. You can log the error, return a safe response, or rethrow it so a higher-level handler can deal with it. In Express, async route errors should also be passed to the application's error-handling middleware.

---
