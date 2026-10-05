# All Advanced Questions Bank 3 — Proper MCQ

> **Format:** Compound source questions have been split into separate concept-focused MCQs where useful. Options are written as actual definitions/behaviors, not just concept names.
> **Total MCQs:** 98

---

## 1. What is Shallow Copy?

- **A.** It creates a new outer object but nested objects can still be shared by reference.
- **B.** It recursively creates completely independent copies of every nested value.
- **C.** It converts an object into a JSON string.
- **D.** It permanently freezes the original object.

**Answer:** A. It creates a new outer object but nested objects can still be shared by reference.

**Explanation:** A shallow copy creates a new top-level object, but nested objects or arrays can still point to the same references. Examples include object spread and Object.assign for ordinary objects.

---

## 2. What is Deep Copy?

- **A.** It copies only the first level of an object.
- **B.** It creates independent copies of nested objects and arrays as well.
- **C.** It only copies primitive values.
- **D.** It copies an object's prototype but not its properties.

**Answer:** B. It creates independent copies of nested objects and arrays as well.

**Explanation:** A deep copy recursively copies nested data so changes in the copied nested object do not normally affect the original. `structuredClone()` is a modern option for many supported data types.

---

## 3. What is the Event Loop?

- **A.** A mechanism that permanently stores JavaScript variables.
- **B.** A mechanism that coordinates the call stack and asynchronous task queues.
- **C.** A database query processor.
- **D.** A React component lifecycle.

**Answer:** B. A mechanism that coordinates the call stack and asynchronous task queues.

**Explanation:** The Event Loop coordinates synchronous JavaScript execution with asynchronous callbacks. When the call stack is empty, queued work can be processed. Promise microtasks are handled before the next regular task.

---

## 4. What is useState() mainly used for?

- **A.** Managing component state directly with a state value and setter.
- **B.** Creating MongoDB collections.
- **C.** Running Node.js worker processes.
- **D.** Creating HTTP routes.

**Answer:** A. Managing component state directly with a state value and setter.

**Explanation:** useState is convenient for simple or independent pieces of component state. Updating the state schedules a React render.

---

## 5. When is useReducer() useful in React?

- **A.** When state transitions are simple and unrelated.
- **B.** When complex state has multiple related actions or transitions.
- **C.** Only when using class components.
- **D.** Only for API authentication.

**Answer:** B. When complex state has multiple related actions or transitions.

**Explanation:** useReducer is useful when state logic becomes complex or several actions update related state. A reducer receives the current state and an action and returns the next state.

---

## 6. What are prototypes in JavaScript?

- **A.** A mechanism through which objects can inherit properties and methods.
- **B.** A React-specific state container.
- **C.** A MongoDB indexing system.
- **D.** A CSS inheritance rule.

**Answer:** A. A mechanism through which objects can inherit properties and methods.

**Explanation:** JavaScript objects can inherit through a prototype chain. If a property is not found directly on an object, JavaScript can look for it on its prototype and continue up the chain.

---

## 7. What is the purpose of Node.js clusters?

- **A.** To create multiple database collections.
- **B.** To run multiple Node.js worker processes so CPU cores can be used more effectively.
- **C.** To convert JavaScript into TypeScript.
- **D.** To make browser JavaScript multi-threaded.

**Answer:** B. To run multiple Node.js worker processes so CPU cores can be used more effectively.

**Explanation:** The cluster approach can run multiple Node.js processes that share incoming workload. Each worker has its own memory and can use another CPU core.

---

## 8. What are Worker Threads in Node.js?

- **A.** They allow CPU-heavy JavaScript work to run in separate threads within a Node.js process.
- **B.** They are only browser CSS workers.
- **C.** They are MongoDB background collections.
- **D.** They create a new HTTP server for every request.

**Answer:** A. They allow CPU-heavy JavaScript work to run in separate threads within a Node.js process.

**Explanation:** Worker Threads are useful for CPU-intensive work because the computation can run away from the main JavaScript thread. Threads can communicate using messages and transferable/shared data mechanisms.

---

## 9. What is a Child Process in Node.js?

- **A.** A separate operating-system process started by a Node.js application.
- **B.** A React child component.
- **C.** A MongoDB child document.
- **D.** A browser Web Worker.

**Answer:** A. A separate operating-system process started by a Node.js application.

**Explanation:** The `child_process` module can start external commands or other Node.js processes. APIs include `spawn`, `exec`, `execFile`, and `fork`, each suited to different use cases.

---

## 10. What is a Web Worker?

- **A.** A browser background thread that can run JavaScript without blocking the main UI thread.
- **B.** A Node.js database process.
- **C.** A React reducer.
- **D.** A CSS rendering engine.

**Answer:** A. A browser background thread that can run JavaScript without blocking the main UI thread.

**Explanation:** Web Workers run JavaScript in a background thread in the browser. They are useful for CPU-heavy calculations while keeping the UI responsive. They communicate with the main thread through messages.

---

## 11. What are React Portals?

- **A.** They render React content into another DOM node while keeping it in the React component tree.
- **B.** They convert React components into database tables.
- **C.** They disable event handling.
- **D.** They are used only for CSS animations.

**Answer:** A. They render React content into another DOM node while keeping it in the React component tree.

**Explanation:** Portals are useful for modals, dialogs, tooltips, and dropdowns that need to escape a parent's DOM constraints. The content can be mounted into another DOM container while remaining part of the React tree.

---

## 12. What is a Side Effect in React?

- **A.** An operation that interacts with something outside the component's pure rendering calculation.
- **B.** A JSX variable declaration.
- **C.** A CSS selector.
- **D.** A React key.

**Answer:** A. An operation that interacts with something outside the component's pure rendering calculation.

**Explanation:** API calls, timers, subscriptions, browser APIs, and external-system synchronization are common side effects. React's useEffect is often used to synchronize with external systems.

---

## 13. What are React Web Workers?

- **A.** Using browser Web Workers with a React application to move heavy computation away from the main UI thread.
- **B.** A special React database.
- **C.** A replacement for JSX.
- **D.** A React state hook.

**Answer:** A. Using browser Web Workers with a React application to move heavy computation away from the main UI thread.

**Explanation:** React does not have a separate built-in worker runtime. The term usually means integrating the browser Web Worker API with React for CPU-heavy work such as parsing or image processing.

---

## 14. What is Express Session?

- **A.** It stores session information on the server and usually gives the client a session identifier.
- **B.** It stores passwords directly in the browser.
- **C.** It permanently stores JWT payloads in MongoDB.
- **D.** It is only an Express routing method.

**Answer:** A. It stores session information on the server and usually gives the client a session identifier.

**Explanation:** Express session authentication commonly stores server-side session state and sends a session ID through a cookie. The server uses that ID to retrieve the session.

---

## 15. What is the main difference between Token and Session Authentication?

- **A.** Sessions normally keep authentication state server-side, while token authentication commonly validates a credential sent with requests.
- **B.** Tokens always require MongoDB while sessions never use cookies.
- **C.** Sessions cannot expire.
- **D.** Tokens can only be used by browsers.

**Answer:** A. Sessions normally keep authentication state server-side, while token authentication commonly validates a credential sent with requests.

**Explanation:** Session authentication uses a server-side session record and a session identifier. Token authentication commonly sends an access token with requests and the server validates it. Both can expire and both can be secured in different ways.

---

## 16. What does Object.create() do?

- **A.** It creates a new object whose prototype is the object supplied to Object.create().
- **B.** It deep-copies every JavaScript object.
- **C.** It freezes an object.
- **D.** It converts an object to JSON.

**Answer:** A. It creates a new object whose prototype is the object supplied to Object.create().

**Explanation:** Object.create(proto) creates an object with the supplied prototype. It is useful when you need explicit control over the prototype chain without calling a constructor.

---

## 17. What is Encoding?

- **A.** Changing data into another representation for transport or compatibility without providing secrecy.
- **B.** Using a secret key to hide data.
- **C.** Deleting data permanently.
- **D.** Hashing a password with a salt.

**Answer:** A. Changing data into another representation for transport or compatibility without providing secrecy.

**Explanation:** Encoding changes representation, such as Base64 encoding. It is not a security mechanism because the encoded value can generally be reversed without a secret key.

---

## 18. What is Encryption?

- **A.** Transforming plaintext into protected ciphertext using a cryptographic key.
- **B.** Changing text to uppercase.
- **C.** Compressing a file without any security purpose.
- **D.** Converting JSON into JSX.

**Answer:** A. Transforming plaintext into protected ciphertext using a cryptographic key.

**Explanation:** Encryption protects confidentiality by transforming plaintext into ciphertext using cryptographic algorithms and keys. Decryption reverses the process when the required key is available.

---

## 19. What does a 2xx HTTP status code generally mean?

- **A.** The request was successfully processed.
- **B.** The server is redirecting the request.
- **C.** The client made an invalid request.
- **D.** The server failed to process the request.

**Answer:** A. The request was successfully processed.

**Explanation:** 2xx status codes indicate success. Examples include 200 OK and 201 Created.

---

## 20. What does a 4xx HTTP status code generally indicate?

- **A.** A client-side/request problem such as invalid input or missing authorization.
- **B.** Successful server processing.
- **C.** A server-side crash only.
- **D.** A browser rendering problem.

**Answer:** A. A client-side/request problem such as invalid input or missing authorization.

**Explanation:** 4xx codes indicate that the request cannot be fulfilled because of something related to the client/request. Common examples include 400, 401, 403, and 404.

---

## 21. What does a 5xx HTTP status code generally indicate?

- **A.** A server-side failure while processing a valid request.
- **B.** A successful request.
- **C.** A permanent client redirect.
- **D.** A React state update.

**Answer:** A. A server-side failure while processing a valid request.

**Explanation:** 5xx codes represent server-side errors. For example, 500 means Internal Server Error.

---

## 22. What is Exception Handling in JavaScript?

- **A.** Handling runtime errors using mechanisms such as try/catch, throw, and finally.
- **B.** Ignoring all rejected promises.
- **C.** Deleting errors from memory.
- **D.** Only logging successful operations.

**Answer:** A. Handling runtime errors using mechanisms such as try/catch, throw, and finally.

**Explanation:** Exception handling lets applications respond to unexpected conditions. JavaScript provides try/catch/finally and throw, and asynchronous promise errors can be handled with catch or try/catch around await.

---

## 23. What is an Access Token?

- **A.** A credential used to access protected APIs or resources for a limited period.
- **B.** A password stored permanently in the browser.
- **C.** A MongoDB collection ID only.
- **D.** A CSS authentication class.

**Answer:** A. A credential used to access protected APIs or resources for a limited period.

**Explanation:** Access tokens are normally short-lived credentials presented to APIs. They should be protected carefully because anyone possessing a valid token may be able to use its granted permissions.

---

## 24. What is a Refresh Token?

- **A.** A longer-lived credential used to obtain a new access token.
- **B.** A token that can only be used for CSS refresh.
- **C.** A database index.
- **D.** A browser cache key.

**Answer:** A. A longer-lived credential used to obtain a new access token.

**Explanation:** Refresh tokens are generally longer-lived and more sensitive than access tokens. They can be used to obtain new access tokens and should be stored and rotated securely.

---

## 25. What is Redis Pub/Sub?

- **A.** A messaging pattern where publishers send messages to channels and subscribers receive messages from those channels.
- **B.** A MongoDB join operation.
- **C.** A password hashing system.
- **D.** A React event handler.

**Answer:** A. A messaging pattern where publishers send messages to channels and subscribers receive messages from those channels.

**Explanation:** Redis Pub/Sub provides lightweight real-time messaging. A subscriber listening to a channel receives messages published to that channel. Traditional Pub/Sub does not provide durable message storage for offline subscribers.

---

## 26. What is Authentication?

- **A.** Verifying the identity of a user or system.
- **B.** Checking whether a user can access a specific admin feature.
- **C.** Encrypting every database field.
- **D.** Creating a React component.

**Answer:** A. Verifying the identity of a user or system.

**Explanation:** Authentication answers 'Who are you?'. Login credentials, tokens, or other identity mechanisms are used to establish who the requester is.

---

## 27. What is Authorization?

- **A.** Determining what an authenticated user is allowed to access or perform.
- **B.** Checking the user's password only.
- **C.** Creating a session ID.
- **D.** Encoding a response.

**Answer:** A. Determining what an authenticated user is allowed to access or perform.

**Explanation:** Authorization answers 'What are you allowed to do?'. For example, a user may be authenticated but still not have permission to delete another user's account.

---

## 28. What is WebRTC?

- **A.** A browser technology for real-time peer-to-peer audio, video, and data communication.
- **B.** A database query language.
- **C.** A CSS framework.
- **D.** A Node.js package manager.

**Answer:** A. A browser technology for real-time peer-to-peer audio, video, and data communication.

**Explanation:** WebRTC enables real-time peer communication in browsers. Applications commonly use a separate signaling mechanism to exchange connection information before the peers establish communication.

---

## 29. What is DevOps?

- **A.** A set of practices that combines development and operations to automate and improve software delivery.
- **B.** A JavaScript data type.
- **C.** A React rendering mode.
- **D.** A MongoDB storage engine.

**Answer:** A. A set of practices that combines development and operations to automate and improve software delivery.

**Explanation:** DevOps commonly involves CI/CD, automation, testing, deployment, infrastructure, monitoring, and collaboration between development and operations teams.

---

## 30. What is Git?

- **A.** A distributed version control system used to track source-code changes.
- **B.** A cloud-only issue tracker.
- **C.** A JavaScript runtime.
- **D.** A database.

**Answer:** A. A distributed version control system used to track source-code changes.

**Explanation:** Git tracks code history using commits, branches, merges, and other version-control concepts. It can work locally without GitHub.

---

## 31. What is GitHub?

- **A.** A platform for hosting Git repositories and collaborating through features such as pull requests and issues.
- **B.** A replacement for Git itself.
- **C.** A JavaScript compiler.
- **D.** A database engine.

**Answer:** A. A platform for hosting Git repositories and collaborating through features such as pull requests and issues.

**Explanation:** GitHub hosts Git repositories and provides collaboration, code review, issues, Actions, permissions, and other development workflows.

---

## 32. What is Jira?

- **A.** A project and issue management tool commonly used for planning, tracking, and team workflows.
- **B.** A JavaScript engine.
- **C.** A database query language.
- **D.** A CSS framework.

**Answer:** A. A project and issue management tool commonly used for planning, tracking, and team workflows.

**Explanation:** Jira is commonly used for issue tracking, sprint planning, workflows, and project management.

---

## 33. Can MongoDB perform a join-like operation?

- **A.** Yes, using aggregation stages such as $lookup, and Mongoose can also use populate().
- **B.** No, MongoDB can never combine related data.
- **C.** Only through CSS.
- **D.** Only through SQL joins.

**Answer:** A. Yes, using aggregation stages such as $lookup, and Mongoose can also use populate().

**Explanation:** MongoDB's `$lookup` performs a join-like operation in an aggregation pipeline. Mongoose's `populate()` can fetch referenced documents at the ODM level.

---

## 34. What is Material UI?

- **A.** A React component library that provides ready-made UI components and follows Material Design principles.
- **B.** A MongoDB query engine.
- **C.** A Node.js process manager.
- **D.** A browser JavaScript engine.

**Answer:** A. A React component library that provides ready-made UI components and follows Material Design principles.

**Explanation:** Material UI provides reusable React components such as buttons, dialogs, inputs, and tables. It is useful when a project wants a ready-made design system.

---

## 35. What is shadcn/ui?

- **A.** A collection of customizable components whose source is added to the project, commonly using Radix primitives and Tailwind CSS.
- **B.** A database driver.
- **C.** A Node.js runtime.
- **D.** A browser storage API.

**Answer:** A. A collection of customizable components whose source is added to the project, commonly using Radix primitives and Tailwind CSS.

**Explanation:** shadcn/ui takes an ownership-oriented approach: components are added to the codebase so developers can customize them directly. It commonly works with Tailwind CSS and Radix primitives.

---

## 36. What are Server Actions in Next.js?

- **A.** Server-side functions that can be invoked through Next.js's supported action mechanism, often for mutations.
- **B.** Browser-only CSS functions.
- **C.** MongoDB aggregation stages.
- **D.** React class lifecycle methods.

**Answer:** A. Server-side functions that can be invoked through Next.js's supported action mechanism, often for mutations.

**Explanation:** Server Actions let supported Next.js applications keep certain mutation logic on the server. They can be useful for form submissions and server-side operations while keeping sensitive logic off the client.

---

## 37. What is Pagination?

- **A.** Returning a large dataset in smaller pages instead of sending every record in one response.
- **B.** Deleting old database records.
- **C.** Loading all records into browser memory.
- **D.** Converting JSON to HTML.

**Answer:** A. Returning a large dataset in smaller pages instead of sending every record in one response.

**Explanation:** Pagination limits the amount of data returned per request. Offset/limit pagination is simple, while cursor-based pagination is often more efficient for large or changing datasets.

---

## 38. What is the MongoDB Aggregation Framework?

- **A.** A pipeline system that processes documents through stages such as $match, $group, $project, and $sort.
- **B.** A React state-management library.
- **C.** A Node.js process manager.
- **D.** A CSS layout engine.

**Answer:** A. A pipeline system that processes documents through stages such as $match, $group, $project, and $sort.

**Explanation:** Aggregation processes and transforms MongoDB documents through stages. It is useful for filtering, grouping, calculations, sorting, joins, and reporting.

---

## 39. What are MongoDB Query Operators?

- **A.** Operators such as $gt, $lt, $in, and $or used to express query conditions.
- **B.** Only JavaScript arithmetic operators.
- **C.** Only CSS operators.
- **D.** React lifecycle methods.

**Answer:** A. Operators such as $gt, $lt, $in, and $or used to express query conditions.

**Explanation:** MongoDB query operators express conditions and logic. Examples include `$gt`, `$lt`, `$in`, `$and`, and `$or`. Update operators such as `$set` and `$inc` are used for modifications.

---

## 40. What are Template Engines in Node.js?

- **A.** Tools such as EJS, Pug, and Handlebars that generate HTML from templates and data.
- **B.** MongoDB indexing tools.
- **C.** React Hooks.
- **D.** Node.js worker threads.

**Answer:** A. Tools such as EJS, Pug, and Handlebars that generate HTML from templates and data.

**Explanation:** Template engines allow server-side HTML generation from templates and data. EJS, Pug, and Handlebars are common examples.

---

## 41. What is the V8 Engine?

- **A.** A JavaScript and WebAssembly engine used by Chrome and Node.js.
- **B.** A MongoDB storage engine.
- **C.** A React rendering library.
- **D.** A package manager.

**Answer:** A. A JavaScript and WebAssembly engine used by Chrome and Node.js.

**Explanation:** V8 executes JavaScript and WebAssembly. Chrome uses V8, and Node.js embeds V8 to run JavaScript outside the browser.

---

## 42. What is Event-Driven Programming?

- **A.** A programming style where code responds to events such as clicks, messages, or completed I/O.
- **B.** A database normalization method.
- **C.** A CSS inheritance system.
- **D.** A method for encrypting files.

**Answer:** A. A programming style where code responds to events such as clicks, messages, or completed I/O.

**Explanation:** Event-driven programming reacts to events instead of relying only on a fixed sequential flow. Node.js uses this style extensively for asynchronous I/O.

---

## 43. What is Event-Driven Architecture?

- **A.** A system architecture where components or services communicate and react through events.
- **B.** A React Hook rule.
- **C.** A database index type.
- **D.** A CSS animation technique.

**Answer:** A. A system architecture where components or services communicate and react through events.

**Explanation:** Event-driven architecture applies event-based communication at a larger system level. Services can publish events and other services can react to them, often through a broker.

---

## 44. What is a REST API?

- **A.** An HTTP-based API style that exposes resources and commonly uses methods such as GET, POST, PUT/PATCH, and DELETE.
- **B.** A database storage format.
- **C.** A React component.
- **D.** A JavaScript compiler.

**Answer:** A. An HTTP-based API style that exposes resources and commonly uses methods such as GET, POST, PUT/PATCH, and DELETE.

**Explanation:** REST APIs commonly model resources and use HTTP methods and status codes consistently. Requests are generally stateless from the server's perspective.

---

## 45. What is Non-Blocking I/O in Node.js?

- **A.** Starting I/O work asynchronously so the main JavaScript thread can continue processing other work.
- **B.** Waiting synchronously for every I/O operation.
- **C.** Disabling all network operations.
- **D.** Creating a new database for every request.

**Answer:** A. Starting I/O work asynchronously so the main JavaScript thread can continue processing other work.

**Explanation:** Node.js uses asynchronous APIs and libuv/OS facilities so many I/O operations can be in progress without blocking the main JavaScript execution path.

---

## 46. Why should large 2–3 GB files be uploaded using streams?

- **A.** Streams process data in chunks and avoid loading the entire file into memory.
- **B.** Streams always make files smaller.
- **C.** Streams remove the need for validation.
- **D.** Streams store files automatically in MongoDB.

**Answer:** A. Streams process data in chunks and avoid loading the entire file into memory.

**Explanation:** Streaming is memory-efficient because chunks are processed progressively. For very large production uploads, multipart or resumable uploads directly to object storage are often even better.

---

## 47. What is OAuth Authentication?

- **A.** A framework for delegated authorization that lets an application access resources without receiving the user's password.
- **B.** A password hashing algorithm.
- **C.** A database indexing method.
- **D.** A React Hook.

**Answer:** A. A framework for delegated authorization that lets an application access resources without receiving the user's password.

**Explanation:** OAuth is an authorization framework. Modern applications commonly use authorization code flow with PKCE for public clients. OAuth itself is about delegated access; OpenID Connect adds an identity layer.

---

## 48. How should multiple roles such as User, Vendor, and Admin be handled?

- **A.** Authenticate the user and enforce role/permission checks on protected backend routes or services.
- **B.** Hide all admin buttons in React and trust the client.
- **C.** Give every authenticated user every role.
- **D.** Store role checks only in CSS.

**Answer:** A. Authenticate the user and enforce role/permission checks on protected backend routes or services.

**Explanation:** Role-based access control should be enforced on the backend. The server verifies identity and then checks whether the user's role or permissions allow the requested action.

---

## 49. Which technology is commonly used for bidirectional real-time communication in Node.js?

- **A.** WebSocket or Socket.IO.
- **B.** CSS.
- **C.** MongoDB indexes.
- **D.** Git.

**Answer:** A. WebSocket or Socket.IO.

**Explanation:** WebSockets provide bidirectional real-time communication. Socket.IO adds higher-level features such as rooms, events, and reconnection handling.

---

## 50. What is the difference between Promise.all() and Promise.allSettled()?

- **A.** Promise.all rejects when an input rejects; Promise.allSettled waits for all inputs and reports each result.
- **B.** Promise.allSettled stops at the first rejection.
- **C.** Both always return only successful results.
- **D.** Promise.all works with only one promise.

**Answer:** A. Promise.all rejects when an input rejects; Promise.allSettled waits for all inputs and reports each result.

**Explanation:** Promise.all is useful when every operation is required to succeed. Promise.allSettled is useful when you need the outcome of every operation even if some fail.

---

## 51. What is the Temporal Dead Zone (TDZ)?

- **A.** The period before a let, const, or class binding is initialized during which accessing it throws a ReferenceError.
- **B.** A browser cache period.
- **C.** A MongoDB transaction window.
- **D.** A React render phase.

**Answer:** A. The period before a let, const, or class binding is initialized during which accessing it throws a ReferenceError.

**Explanation:** The TDZ begins when the scope is entered and ends when the declaration is initialized. `let`, `const`, and class declarations are hoisted in a way that does not allow access before initialization.

---

## 52. What is req.params in Express?

- **A.** An object containing route parameters captured from the URL.
- **B.** An object containing only HTTP headers.
- **C.** An object containing database indexes.
- **D.** An object containing environment variables.

**Answer:** A. An object containing route parameters captured from the URL.

**Explanation:** For a route such as `/users/:id`, `req.params.id` contains the value captured from the URL.

---

## 53. What is req.query in Express?

- **A.** An object containing query-string parameters from the URL.
- **B.** The raw HTTP response body.
- **C.** The user's password.
- **D.** The server's process ID.

**Answer:** A. An object containing query-string parameters from the URL.

**Explanation:** For `/users?page=2`, Express exposes the query value through `req.query.page` after query parsing.

---

## 54. What is req.body in Express?

- **A.** The parsed body data sent by the client when suitable body-parsing middleware is configured.
- **B.** The route parameter object.
- **C.** The server's CPU usage.
- **D.** The response status code.

**Answer:** A. The parsed body data sent by the client when suitable body-parsing middleware is configured.

**Explanation:** req.body contains parsed request body data, such as JSON or form data, when the application has configured the relevant middleware.

---

## 55. What are common challenges in a React project?

- **A.** State management, unnecessary re-renders, bundle size, data fetching, accessibility, testing, and maintainability.
- **B.** React cannot render components.
- **C.** React cannot use APIs.
- **D.** React cannot work with TypeScript.

**Answer:** A. State management, unnecessary re-renders, bundle size, data fetching, accessibility, testing, and maintainability.

**Explanation:** Real projects can become difficult when state ownership, component boundaries, data fetching, performance, accessibility, testing, and dependencies are not designed carefully.

---

## 56. What is a Browser Polyfill?

- **A.** Code that provides an implementation for a web API missing from an older or unsupported browser.
- **B.** A React component library.
- **C.** A database migration.
- **D.** A Node.js process.

**Answer:** A. Code that provides an implementation for a web API missing from an older or unsupported browser.

**Explanation:** A polyfill supplies a missing runtime API. It differs from transpilation, which transforms syntax such as newer JavaScript syntax into code supported by older environments.

---

## 57. Which tool can profile React component rendering?

- **A.** React DevTools Profiler.
- **B.** MongoDB Compass only.
- **C.** Git only.
- **D.** npm install only.

**Answer:** A. React DevTools Profiler.

**Explanation:** React DevTools Profiler can show which components rendered and how much time rendering took. Browser Performance tools and Lighthouse can complement React-specific profiling.

---

## 58. Why must React Hooks be called at the top level?

- **A.** React relies on a consistent Hook call order between renders.
- **B.** Hooks only work inside CSS files.
- **C.** Hooks must be called only from event handlers.
- **D.** React stores Hook state by variable name.

**Answer:** A. React relies on a consistent Hook call order between renders.

**Explanation:** React associates Hook state with call order. Conditional or loop-based Hook calls can change that order between renders and break React's assumptions.

---

## 59. What does fetch() normally return?

- **A.** A Promise that resolves to a Response object.
- **B.** A MongoDB document directly.
- **C.** A React component.
- **D.** Always a plain string.

**Answer:** A. A Promise that resolves to a Response object.

**Explanation:** The Fetch API returns a Promise. After it resolves, the Response object provides status, headers, and methods such as `json()` to read the body.

---

## 60. What is the Node.js Event Loop?

- **A.** The mechanism that coordinates asynchronous callbacks and I/O around Node's main JavaScript execution thread.
- **B.** A database transaction manager.
- **C.** A React rendering component.
- **D.** A CSS layout algorithm.

**Answer:** A. The mechanism that coordinates asynchronous callbacks and I/O around Node's main JavaScript execution thread.

**Explanation:** Node's event loop processes asynchronous work through phases and callbacks. This allows I/O-heavy applications to handle many operations without creating a JavaScript thread for every request.

---

## 61. What is a key difference between a normal function and an arrow function?

- **A.** A normal function can have call-time this; an arrow function captures this lexically from its surrounding scope.
- **B.** Arrow functions always have their own dynamic this.
- **C.** Normal functions cannot be callbacks.
- **D.** Arrow functions can always be used as constructors.

**Answer:** A. A normal function can have call-time this; an arrow function captures this lexically from its surrounding scope.

**Explanation:** Arrow functions do not have their own `this`, `arguments`, or constructor behavior. Normal functions can have a dynamic `this` depending on how they are called.

---

## 62. What are Refs in React used for?

- **A.** Accessing DOM nodes or storing mutable values without causing a render for every ref update.
- **B.** Replacing all component state.
- **C.** Creating MongoDB indexes.
- **D.** Calling SQL joins.

**Answer:** A. Accessing DOM nodes or storing mutable values without causing a render for every ref update.

**Explanation:** Refs are useful for focus, DOM measurement, imperative APIs, and mutable values that should not trigger rendering. They should not replace normal UI state.

---

## 63. What is forwardRef used for?

- **A.** It lets a component expose a ref to a child DOM node or ref target through the component boundary.
- **B.** It creates a server session.
- **C.** It forwards HTTP requests automatically.
- **D.** It creates a MongoDB reference.

**Answer:** A. It lets a component expose a ref to a child DOM node or ref target through the component boundary.

**Explanation:** forwardRef has traditionally been used when a parent needs to pass a ref through a custom component to a DOM node or another ref target.

---

## 64. What are HTTP Interceptors commonly used for?

- **A.** Running logic around HTTP requests/responses, such as attaching tokens or handling errors.
- **B.** Creating MongoDB collections.
- **C.** Rendering CSS.
- **D.** Compiling TypeScript.

**Answer:** A. Running logic around HTTP requests/responses, such as attaching tokens or handling errors.

**Explanation:** Axios and similar clients can use interceptors before requests and after responses. They are useful for auth headers, logging, centralized error handling, and token-refresh flows.

---

## 65. How does Node.js handle many requests concurrently?

- **A.** It uses an event loop and asynchronous I/O so many I/O operations can be in flight without a JavaScript thread per request.
- **B.** It creates a new JavaScript process for every request.
- **C.** It blocks until each request finishes.
- **D.** It stores each request in a separate database.

**Answer:** A. It uses an event loop and asynchronous I/O so many I/O operations can be in flight without a JavaScript thread per request.

**Explanation:** Node's concurrency model is based mainly on one main JavaScript thread plus asynchronous I/O. CPU-heavy synchronous work can still block that thread.

---

## 66. What is a major drawback of Node.js?

- **A.** CPU-heavy synchronous work can block the event loop and delay other requests.
- **B.** Node cannot handle HTTP requests.
- **C.** Node cannot use databases.
- **D.** Node cannot use asynchronous code.

**Answer:** A. CPU-heavy synchronous work can block the event loop and delay other requests.

**Explanation:** Node is strong for I/O-bound applications but CPU-heavy work on the main thread can block the event loop. Worker Threads, child processes, queues, or horizontal scaling can help.

---

## 67. What is Redux Thunk?

- **A.** Middleware that allows action creators to return functions for handling asynchronous or conditional dispatch logic.
- **B.** A database indexing engine.
- **C.** A React CSS library.
- **D.** A replacement for Redux reducers.

**Answer:** A. Middleware that allows action creators to return functions for handling asynchronous or conditional dispatch logic.

**Explanation:** Redux Thunk allows a function to be dispatched instead of only a plain action object. That function can perform async work and dispatch actions before or after the operation.

---

## 68. What is Redux Saga?

- **A.** A Redux middleware that uses generator-based effects to model complex asynchronous workflows.
- **B.** A browser storage API.
- **C.** A MongoDB aggregation stage.
- **D.** A CSS framework.

**Answer:** A. A Redux middleware that uses generator-based effects to model complex asynchronous workflows.

**Explanation:** Redux Saga uses generators and effects to coordinate complex side effects such as cancellation, retries, and multiple async operations. It is more structured but often more complex than Thunk.

---

## 69. Why is TypeScript important in large JavaScript projects?

- **A.** It provides static typing and tooling that can catch many mistakes before runtime and improve maintainability.
- **B.** It makes runtime validation unnecessary.
- **C.** It removes JavaScript from browsers.
- **D.** It automatically fixes every bug.

**Answer:** A. It provides static typing and tooling that can catch many mistakes before runtime and improve maintainability.

**Explanation:** TypeScript improves editor support, API clarity, refactoring, and compile-time error detection. It does not replace runtime validation for untrusted external data.

---

## 70. When should a Next.js Client Component be used?

- **A.** When the component needs client-side interactivity, state, effects, or browser APIs.
- **B.** Whenever a component reads static text.
- **C.** Only for database queries.
- **D.** Only for server environment variables.

**Answer:** A. When the component needs client-side interactivity, state, effects, or browser APIs.

**Explanation:** Client Components are needed for things such as event handlers, state, effects, and browser APIs. Server Components are preferable when client interactivity is not required.

---

## 71. When are Next.js Server Components useful?

- **A.** For server-side rendering/data access where client-side interactivity is not required.
- **B.** Only for browser localStorage.
- **C.** Only for click handlers.
- **D.** Only for CSS animations.

**Answer:** A. For server-side rendering/data access where client-side interactivity is not required.

**Explanation:** Server Components can fetch data on the server and avoid sending that component's JavaScript to the browser. This can reduce client-side JavaScript and keep server-only logic on the server.

---

## 72. What is the Node.js Runtime Environment?

- **A.** A runtime that uses V8 plus Node APIs to execute JavaScript outside the browser.
- **B.** Only the npm package registry.
- **C.** Only the Chrome browser.
- **D.** Only MongoDB.

**Answer:** A. A runtime that uses V8 plus Node APIs to execute JavaScript outside the browser.

**Explanation:** Node.js combines V8 with runtime APIs for files, networking, streams, processes, buffers, and other server-side capabilities.

---

## 73. What is a safe payment gateway integration flow?

- **A.** Create an order server-side, start the gateway payment, verify the result server-side, and update the order only after trusted verification.
- **B.** Trust any payment-success message sent by the browser.
- **C.** Store card details in plaintext.
- **D.** Mark every order paid before payment.

**Answer:** A. Create an order server-side, start the gateway payment, verify the result server-side, and update the order only after trusted verification.

**Explanation:** The backend should be the source of truth for payment status. Verify gateway responses or signed webhooks before marking an order as paid.

---

## 74. How is email commonly sent from a Node.js backend?

- **A.** Through SMTP or an email-provider API, often using a library such as Nodemailer.
- **B.** Through CSS.
- **C.** Through React state only.
- **D.** Through MongoDB queries.

**Answer:** A. Through SMTP or an email-provider API, often using a library such as Nodemailer.

**Explanation:** Node.js can send mail through SMTP or provider APIs. Credentials should stay server-side, and production systems should consider retries, rate limits, templates, and delivery failures.

---

## 75. How can multiple images be uploaded in Express?

- **A.** Use multipart/form-data handling such as Multer, validate the files, and process or store them safely.
- **B.** Put all images in a URL query string.
- **C.** Disable file-size validation.
- **D.** Store every image permanently in React state.

**Answer:** A. Use multipart/form-data handling such as Multer, validate the files, and process or store them safely.

**Explanation:** Multer can parse multipart uploads and supports arrays or named fields. Production apps should validate file count, size, type, names, and storage location.

---

## 76. What is a secure forgot-password flow?

- **A.** Generate a short-lived reset token, send a reset link, verify it, set the new password, and invalidate the token.
- **B.** Email the user's existing password.
- **C.** Create a permanent reset token.
- **D.** Reset every user's password together.

**Answer:** A. Generate a short-lived reset token, send a reset link, verify it, set the new password, and invalidate the token.

**Explanation:** A secure reset process uses an unpredictable, expiring, usually single-use token. The server should not reveal unnecessary account-existence information and should invalidate the token after use.

---

## 77. What is Search Optimization in a Node.js backend?

- **A.** Improving search with suitable indexes, filtering, pagination, caching, and possibly a dedicated search engine.
- **B.** Only sorting React components.
- **C.** Only renaming API routes.
- **D.** Only increasing CSS specificity.

**Answer:** A. Improving search with suitable indexes, filtering, pagination, caching, and possibly a dedicated search engine.

**Explanation:** Search performance depends on data size and requirements. Database indexes and query design may be enough for simple search, while large or advanced search can use systems such as Elasticsearch/OpenSearch.

---

## 78. What is database Indexing?

- **A.** Creating an index on fields used by queries so the database can find matching documents more efficiently.
- **B.** Adding IDs to HTML elements.
- **C.** Installing npm packages.
- **D.** Encrypting every API response.

**Answer:** A. Creating an index on fields used by queries so the database can find matching documents more efficiently.

**Explanation:** Indexes can reduce the amount of data scanned for common query patterns. They consume storage and can add write overhead, so they should be designed from actual queries.

---

## 79. What is a Polyfill?

- **A.** Runtime code that implements a feature missing from the target environment.
- **B.** A password hashing algorithm.
- **C.** A React state hook.
- **D.** A MongoDB collection.

**Answer:** A. Runtime code that implements a feature missing from the target environment.

**Explanation:** A polyfill provides a missing runtime API. Transpilers transform syntax; polyfills provide APIs that the runtime itself may not support.

---

## 80. What is an important React security practice?

- **A.** Treat client input as untrusted, avoid unsafe HTML, protect authentication, use HTTPS, and enforce authorization on the backend.
- **B.** Put private API keys in React source code.
- **C.** Trust all values from localStorage.
- **D.** Use only frontend role checks for security.

**Answer:** A. Treat client input as untrusted, avoid unsafe HTML, protect authentication, use HTTPS, and enforce authorization on the backend.

**Explanation:** Frontend security requires safe rendering, secure authentication, dependency hygiene, and HTTPS. Most importantly, authorization must be enforced by the backend because client code can be modified by users.

---

## 81. What are Synthetic Events in React?

- **A.** React's event abstraction that provides a consistent event interface for React event handlers.
- **B.** MongoDB database events.
- **C.** CSS pseudo-elements.
- **D.** Node.js worker messages.

**Answer:** A. React's event abstraction that provides a consistent event interface for React event handlers.

**Explanation:** React provides an event system around browser events so application code can handle events consistently through React handlers.

---

## 82. What is one drawback of React?

- **A.** Large applications still require architecture decisions for state, data fetching, routing, testing, and performance.
- **B.** React cannot create reusable components.
- **C.** React cannot use APIs.
- **D.** React cannot work with TypeScript.

**Answer:** A. Large applications still require architecture decisions for state, data fetching, routing, testing, and performance.

**Explanation:** React is a UI library rather than a complete application architecture. Teams often need additional choices for routing, server state, forms, testing, and other concerns.

---

## 83. What is a Generator Function?

- **A.** A function declared with function* that can pause at yield and resume later.
- **B.** A function that can only run once.
- **C.** A MongoDB function.
- **D.** A CSS function.

**Answer:** A. A function declared with function* that can pause at yield and resume later.

**Explanation:** Generator functions return generator objects and can pause at `yield`. They are useful for custom iteration and patterns such as Redux Saga.

---

## 84. Why should stable keys be used instead of array indexes in React lists?

- **A.** Stable keys preserve item identity when list items are inserted, removed, or reordered.
- **B.** Indexes always cause faster rendering.
- **C.** React ignores keys.
- **D.** Keys are only used for CSS.

**Answer:** A. Stable keys preserve item identity when list items are inserted, removed, or reordered.

**Explanation:** React uses keys to identify list items across renders. Index keys can cause incorrect component identity and state when list order changes. Stable unique IDs are usually better.

---

## 85. What is Virtualization in React?

- **A.** Rendering only the visible portion of a large list instead of mounting every item at once.
- **B.** Rendering every item twice.
- **C.** Disabling React rendering.
- **D.** Replacing JavaScript with CSS.

**Answer:** A. Rendering only the visible portion of a large list instead of mounting every item at once.

**Explanation:** Virtualization reduces DOM size and rendering work for large lists by mounting only items near the visible viewport.

---

## 86. What is Webpack?

- **A.** A module bundler/build tool that processes application modules and assets into bundles.
- **B.** A database server.
- **C.** A browser engine.
- **D.** A React Hook.

**Answer:** A. A module bundler/build tool that processes application modules and assets into bundles.

**Explanation:** Webpack can bundle JavaScript, CSS, images, and dependencies and can support code splitting, optimization, loaders, plugins, and source maps.

---

## 87. What is a reducer in Redux?

- **A.** A pure function that receives current state and an action and returns the next state.
- **B.** A database query.
- **C.** A React DOM node.
- **D.** A CSS rule.

**Answer:** A. A pure function that receives current state and an action and returns the next state.

**Explanation:** Redux reducers describe state transitions. They should be predictable and should not mutate the existing state directly.

---

## 88. What is useReducer in React?

- **A.** A Hook that manages component state through a reducer function and dispatched actions.
- **B.** A replacement for useEffect.
- **C.** A MongoDB aggregation stage.
- **D.** A Node.js cluster API.

**Answer:** A. A Hook that manages component state through a reducer function and dispatched actions.

**Explanation:** useReducer applies reducer-style state transitions locally inside a component. It is useful when state updates are complex or action-driven.

---

## 89. Where is an access token often stored for web authentication?

- **A.** A secure HttpOnly cookie can be a strong choice for session-style authentication, with appropriate CSRF protections.
- **B.** Always in a public JavaScript constant.
- **C.** Always in the URL.
- **D.** Inside React source code.

**Answer:** A. A secure HttpOnly cookie can be a strong choice for session-style authentication, with appropriate CSRF protections.

**Explanation:** Storage depends on architecture. HttpOnly Secure cookies reduce JavaScript access to the credential, which can help against token theft via XSS, but cookie-based auth requires appropriate CSRF protections and SameSite configuration.

---

## 90. What is encryption/decryption in Node.js commonly implemented with?

- **A.** Node's crypto module and secure cryptographic algorithms with proper key management.
- **B.** The fs module only.
- **C.** Base64 encoding only.
- **D.** console.log().

**Answer:** A. Node's crypto module and secure cryptographic algorithms with proper key management.

**Explanation:** Node's built-in `crypto` module provides cryptographic primitives. Secure application encryption also requires proper key handling, IV/nonce management, and authenticated encryption where appropriate.

---

## 91. What does $unwind do in MongoDB?

- **A.** It expands an array so each array element can become a separate pipeline document.
- **B.** It creates an index.
- **C.** It encrypts an array.
- **D.** It deletes every document.

**Answer:** A. It expands an array so each array element can become a separate pipeline document.

**Explanation:** For example, an array of three items can produce three pipeline documents after `$unwind`. This is useful when you need to process array elements individually.

---

## 92. What does $group do in MongoDB?

- **A.** It groups documents by a key and can calculate values such as count, sum, average, minimum, or maximum.
- **B.** It creates a React group component.
- **C.** It creates database users.
- **D.** It deletes duplicate collections.

**Answer:** A. It groups documents by a key and can calculate values such as count, sum, average, minimum, or maximum.

**Explanation:** The `$group` aggregation stage combines documents by a group key and supports accumulators such as `$sum`, `$avg`, `$min`, `$max`, and `$push`.

---

## 93. Why is explain() useful for MongoDB queries?

- **A.** It shows how MongoDB plans and executes a query, helping identify scans, index usage, and examined documents.
- **B.** It automatically rewrites every query.
- **C.** It deletes unused indexes.
- **D.** It encrypts the query.

**Answer:** A. It shows how MongoDB plans and executes a query, helping identify scans, index usage, and examined documents.

**Explanation:** MongoDB `explain()` provides query-plan and execution information. It helps determine whether an index is being used and whether too many documents are being examined.

---

## 94. What is a compound index in MongoDB?

- **A.** An index that contains multiple fields in a defined field order.
- **B.** An index that can contain only one field.
- **C.** An index stored in React.
- **D.** An index that always replaces the primary key.

**Answer:** A. An index that contains multiple fields in a defined field order.

**Explanation:** Compound indexes contain multiple fields and are designed around common query and sort patterns. Field order matters because it affects which query patterns can efficiently use the index.

---

## 95. What is a multikey index in MongoDB?

- **A.** An index type that supports indexing array fields.
- **B.** An index used only for passwords.
- **C.** An index for CSS classes.
- **D.** An index that can only contain strings.

**Answer:** A. An index type that supports indexing array fields.

**Explanation:** MongoDB can create multikey indexes for fields containing arrays, allowing queries to efficiently match array elements.

---

## 96. What is Normalization?

- **A.** Organizing related data to reduce unnecessary duplication and update anomalies.
- **B.** Encrypting every field.
- **C.** Deleting all relationships.
- **D.** Putting all data into one giant document.

**Answer:** A. Organizing related data to reduce unnecessary duplication and update anomalies.

**Explanation:** Normalization separates data into logical structures to reduce duplication and inconsistent updates. MongoDB may intentionally denormalize some data when read performance and access patterns justify it.

---

## 97. What is Infinite Currying?

- **A.** A function pattern where each call returns another function so more values can be supplied until a terminating call.
- **B.** A loop that must run forever.
- **C.** A MongoDB pipeline.
- **D.** A React rendering technique.

**Answer:** A. A function pattern where each call returns another function so more values can be supplied until a terminating call.

**Explanation:** Infinite currying commonly uses closures to accumulate values across calls, for example `sum(1)(2)(3)()` where the final empty call returns the accumulated result.

---

## 98. How should forms be validated in a full-stack application?

- **A.** Validate user input on the client for UX and validate it again on the server for security and correctness.
- **B.** Use CSS as the only validation layer.
- **C.** Trust browser validation completely.
- **D.** Never validate input on the server.

**Answer:** A. Validate user input on the client for UX and validate it again on the server for security and correctness.

**Explanation:** Client validation gives immediate feedback, but it can be bypassed. Server validation is mandatory for important data, security rules, types, ranges, formats, and business constraints.

---
