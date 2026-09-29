# Node.js Interview Questions 101–140 — Answers
## 3-Year MERN Stack Developer | English + Hindi

> Format: Simple interview-ready explanation in English, followed by simple Hindi explanation and practical examples where useful.

---

# Part 10 — Performance, Scaling & Production

## 101. What is a memory leak in Node.js?

### Simple Explanation — English
A memory leak happens when an application keeps references to objects that it no longer needs, so the garbage collector cannot free that memory.

If this continues, memory usage can keep increasing and eventually cause slow performance or an out-of-memory crash.

Common causes include:
- Global objects growing continuously
- Event listeners not being removed
- Timers that keep running unnecessarily
- Large caches without limits
- Closures retaining unnecessary data

### Simple Explanation — Hindi
Memory leak tab hota hai jab application unnecessary objects ko reference karke rakhti hai, isliye garbage collector unki memory free nahi kar pata.

Agar ye continuously hota rahe to memory usage badhta rahega aur application slow ya crash ho sakti hai.

### Example
```js
const cache = [];

setInterval(() => {
  cache.push(new Array(100000).fill("data"));
}, 1000);
```

Yahan cache continuously grow kar raha hai aur purana data release nahi ho raha.

---

## 102. How can you detect and debug memory leaks?

### Simple Explanation — English
First, monitor memory usage over time. If memory keeps increasing after the application performs similar work, investigate further.

Useful approaches include:
- Node.js heap snapshots
- Chrome DevTools
- Node.js inspector
- Garbage-collection metrics
- Monitoring tools
- Looking for growing arrays, Maps, caches, listeners, and timers

A useful approach is to compare heap snapshots before and after repeated operations.

### Simple Explanation — Hindi
Memory leak detect karne ke liye memory usage ko time ke saath monitor karna chahiye.

Agar same type ka workload repeat hone ke baad memory continuously increase ho rahi hai, to investigation karni chahiye.

Heap snapshots aur Node.js inspector se check kar sakte hain ki kaunse objects memory mein unnecessarily retain ho rahe hain.

### Example
```text
Take Heap Snapshot 1
        ↓
Perform repeated operation
        ↓
Take Heap Snapshot 2
        ↓
Compare retained objects
```

---

## 103. What causes high CPU usage in a Node.js application?

### Simple Explanation — English
High CPU usage can happen because of:
- CPU-heavy calculations
- Large synchronous loops
- Complex JSON processing
- Expensive regular expressions
- Image/video processing
- Inefficient algorithms
- Too much application-level computation

Since normal JavaScript execution runs on the main thread, CPU-heavy work can also make the Event Loop slow.

### Simple Explanation — Hindi
High CPU usage ke common reasons hain:
- Heavy calculations
- Large loops
- Complex JSON processing
- Expensive regex
- Image/video processing
- Inefficient algorithms

Agar main thread par CPU-heavy work run ho raha hai, to Event Loop bhi delay ho sakta hai.

### Example
```js
app.get("/calculate", (req, res) => {
  let result = 0;

  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }

  res.json({ result });
});
```

Aisa code other requests ko delay kar sakta hai.

---

## 104. What is the difference between cluster and worker_threads?

### Simple Explanation — English
Both can help use multiple CPU cores, but they work differently.

**Cluster** creates multiple Node.js processes. Each process has its own memory and V8 instance.

**Worker Threads** create additional JavaScript execution threads inside the same Node.js process. They are useful for CPU-intensive JavaScript work.

### Simple Explanation — Hindi
Cluster multiple Node.js processes create karta hai. Har process ka apna memory space hota hai.

Worker Threads same Node.js process ke andar additional JavaScript threads provide karte hain.

Simple difference:

```text
Cluster
→ Multiple processes
→ Separate memory

Worker Threads
→ Multiple JS threads
→ Same process architecture
```

### Interview Point
For CPU-heavy JavaScript calculations, Worker Threads are often a natural option. For process-level isolation and scaling across cores, multiple processes can be useful.

---

## 105. When would you use Worker Threads?

### Simple Explanation — English
I would use Worker Threads when I have CPU-intensive JavaScript work that should not block the main Event Loop.

Examples:
- Large calculations
- CPU-heavy data processing
- Some image processing
- Encryption/computation workloads
- Parsing or transforming large data sets

They are not needed for normal database queries or typical network I/O.

### Simple Explanation — Hindi
Worker Threads tab use karunga jab CPU-heavy JavaScript work main Event Loop ko block kar raha ho.

Examples:
- Heavy calculations
- Large data processing
- CPU-heavy image processing
- Computation-heavy tasks

Normal database ya network I/O ke liye Worker Thread generally required nahi hota.

### Example
```text
HTTP Request
    ↓
Main Thread
    ↓
Worker Thread
    ↓
Heavy Calculation
    ↓
Result
    ↓
Main Thread
    ↓
Response
```

---

## 106. When would you use child processes?

### Simple Explanation — English
Child processes are useful when an application needs to execute another process or command separately from the main Node.js process.

They can be useful for:
- Running system commands
- Executing external programs
- Process isolation
- Running workloads that are better separated from the main application

The choice between child processes, Worker Threads, queues, and separate services depends on the workload.

### Simple Explanation — Hindi
Child process tab useful hota hai jab Node.js application ko kisi separate process ya external command ko execute karna ho.

Examples:
- System commands
- External programs
- Separate process isolation

### Example
```js
const { exec } = require("child_process");

exec("node --version", (error, stdout) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(stdout);
});
```

External commands ko execute karte waqt user input ko blindly shell command mein pass nahi karna chahiye.

---

## 107. How can Node.js use multiple CPU cores?

### Simple Explanation — English
A single Node.js JavaScript execution thread does not automatically use all CPU cores for one piece of JavaScript work.

To use multiple cores, we can run multiple Node.js processes using approaches such as:
- Cluster
- A process manager such as PM2
- Containers/orchestration
- Multiple service instances behind a load balancer

Worker Threads can also run CPU-heavy JavaScript work across threads.

### Simple Explanation — Hindi
Ek Node.js JavaScript thread automatically machine ke saare CPU cores use nahi karta.

Multiple CPU cores use karne ke liye:
- Multiple Node.js processes
- Cluster
- PM2
- Multiple containers/instances
- Worker Threads for CPU-heavy work

use kiye ja sakte hain.

### Example
```text
CPU Core 1 → Node Process 1
CPU Core 2 → Node Process 2
CPU Core 3 → Node Process 3
CPU Core 4 → Node Process 4
```

---

## 108. How would you scale a Node.js application when traffic increases?

### Simple Explanation — English
First, I would identify the bottleneck using metrics and profiling.

For horizontal scaling, I can run multiple application instances behind a load balancer.

Other important considerations include:
- Database scaling and indexes
- Caching
- Connection pooling
- Stateless application design
- Rate limiting
- Background job queues
- CDN for static assets
- Monitoring

### Simple Explanation — Hindi
Traffic increase hone par main pehle bottleneck identify karunga.

Horizontal scaling mein multiple Node.js instances run karke load balancer ke through traffic distribute kar sakte hain.

Saath mein database, caching, queues, connection pooling aur monitoring ko bhi scale karna important hai.

### Example
```text
             Load Balancer
             /     |     \
            /      |      \
      Node App  Node App  Node App
          \        |        /
             Database
```

---

## 109. What is graceful shutdown in Node.js?

### Simple Explanation — English
Graceful shutdown means stopping a Node.js application in a controlled way.

Before exiting, the application can:
- Stop accepting new requests
- Allow active requests to finish
- Close database connections
- Close message-queue connections
- Close servers and other resources
- Exit after a timeout if something does not finish

This helps avoid dropping requests or leaving resources in an inconsistent state.

### Simple Explanation — Hindi
Graceful shutdown ka matlab application ko suddenly kill karne ke bajay controlled way mein shut down karna.

Application:
1. New requests accept karna stop kare
2. Existing requests ko finish hone de
3. Database connection close kare
4. Other resources close kare
5. Required timeout ke baad exit kare

### Example
```js
process.on("SIGTERM", async () => {
  console.log("Shutdown started");

  await server.close();

  await mongoose.connection.close();

  process.exit(0);
});
```

Real implementations should also handle errors and shutdown timeouts.

---

## 110. How would you make a Node.js API production-ready?

### Simple Explanation — English
I would consider:

- Environment-based configuration
- Input validation
- Authentication and authorization
- Centralized error handling
- Secure headers
- Rate limiting
- Logging and monitoring
- Database indexes
- Pagination
- Proper timeouts
- Graceful shutdown
- Health checks
- Dependency/security updates
- HTTPS through the deployment architecture
- Proper secret management

### Simple Explanation — Hindi
Production-ready API ke liye sirf routes banana enough nahi hai.

Main check karunga:

```text
Validation
Authentication
Authorization
Error handling
Security
Rate limiting
Logging
Monitoring
Database performance
Timeouts
Graceful shutdown
Health checks
Secrets
```

---

# Part 11 — Logical / Scenario-Based Questions

## 111. You have an API receiving 10,000 requests per second. How would you make your Node.js server handle this load?

### Simple Explanation — English
I would not immediately add more servers. First, I would measure where the bottleneck is.

I would check:
- CPU
- Memory
- Event Loop latency
- Database latency
- External API latency
- Request/response size
- Connection pool limits

If the application is stateless, I can horizontally scale multiple Node.js instances behind a load balancer.

Then I would optimize the actual bottlenecks using caching, database indexes, pagination, connection pooling, and background processing where appropriate.

### Simple Explanation — Hindi
10,000 requests/sec dekh kar directly servers increase nahi karunga.

Pehle bottleneck identify karunga:

```text
CPU?
Memory?
Event Loop?
Database?
External API?
Connection pool?
```

Phir multiple Node.js instances ko load balancer ke behind run karke horizontally scale kar sakte hain.

---

## 112. Your Node.js API suddenly becomes very slow even though CPU usage is low. How would you investigate the problem?

### Simple Explanation — English
Low CPU does not mean the application is healthy.

I would check:
- Database response time
- External API latency
- Connection pool exhaustion
- Network latency
- Event Loop delay
- Locks/contention
- Slow queries
- Waiting on I/O

I would add or inspect request timing and distributed tracing to find where the request is spending time.

### Simple Explanation — Hindi
CPU low hone ke baad bhi API slow ho sakti hai.

Main check karunga:

```text
Database slow?
External API slow?
Connection pool full?
Network issue?
Event Loop delay?
Slow query?
```

Request ko different stages mein measure karke actual waiting point identify karunga.

---

## 113. Your API takes 5 seconds because it performs a CPU-heavy calculation. How would you prevent this calculation from blocking other requests?

### Simple Explanation — English
I would avoid running the heavy calculation synchronously on the main Event Loop.

Depending on the requirement, I could use:
- Worker Threads
- Background job queues
- Separate worker processes
- A dedicated service

If the result does not need to be immediate, a background job is often a better architecture.

### Simple Explanation — Hindi
Heavy calculation ko main Event Loop par directly run nahi karunga.

Requirement ke according:
- Worker Thread
- Background job
- Separate process
- Separate service

use kar sakte hain.

Agar result immediately required nahi hai, background job better option ho sakta hai.

---

## 114. You need to process a 2 GB file in Node.js. Would you use readFile() or Streams, and why?

### Simple Explanation — English
I would normally use Streams.

`readFile()` attempts to load the whole file into memory, while a readable Stream processes it in chunks.

For a 2 GB file, streaming reduces memory pressure and is much more appropriate.

### Simple Explanation — Hindi
2 GB file ke liye main Stream use karunga.

`readFile()` complete file ko memory mein load karne ki koshish karta hai.

Stream file ko chunks mein process karta hai, isliye memory usage controlled rehta hai.

### Example
```js
fs.createReadStream("large-file.zip")
  .pipe(fs.createWriteStream("copy.zip"));
```

---

## 115. A user uploads a 1 GB video file and your server runs out of memory. What could be wrong and how would you fix it?

### Simple Explanation — English
A likely problem is that the application is buffering the entire upload in memory.

I would use streaming or streaming-compatible upload handling, apply appropriate request-size limits, and avoid creating unnecessary copies of the file in memory.

If possible, large files can also be uploaded directly to object storage using pre-signed upload URLs.

### Simple Explanation — Hindi
Likely problem ye ho sakti hai ki application poori 1 GB file ko memory mein load kar rahi hai.

Main:
- Streaming use karunga
- Request-size limits set karunga
- Unnecessary copies avoid karunga
- Large uploads ke liye object storage direct upload consider karunga

### Example
```text
Client
  ↓
Streaming Upload
  ↓
Object Storage
```

Instead of:

```text
Client
  ↓
Node memory: 1 GB
  ↓
Storage
```

---

## 116. Two API requests modify the same resource at almost the same time. How would you handle the race condition?

### Simple Explanation — English
The solution depends on the business requirement.

Possible approaches include:
- Database transactions
- Atomic database updates
- Optimistic concurrency using a version field
- Pessimistic locking where supported
- Unique constraints
- Idempotency keys for duplicate operations

I would choose based on whether the operation is an update, payment, inventory change, or another type of transaction.

### Simple Explanation — Hindi
Race condition ka solution business case par depend karega.

Options:
- Database transaction
- Atomic update
- Version field
- Locking
- Unique constraint
- Idempotency key

For example, inventory update ke liye atomic database operation useful ho sakta hai.

---

## 117. Your API calls three independent external APIs. How would you make the requests efficiently?

### Simple Explanation — English
If the three operations are independent, I would usually run them concurrently instead of waiting for one to finish before starting the next.

`Promise.all()` can be used when all results are required and one failure should fail the combined operation.

### Simple Explanation — Hindi
Agar teen APIs ek doosre par depend nahi karti hain, to unhe sequentially call karne ke bajay concurrently call karna better hai.

### Example
```js
const [users, orders, products] = await Promise.all([
  getUsers(),
  getOrders(),
  getProducts()
]);
```

This can reduce total waiting time compared with sequential calls.

---

## 118. You have five independent database/API calls, but one fails. Should the other four fail too?

### Simple Explanation — English
Not necessarily.

If all five results are required to construct a valid response, `Promise.all()` may be appropriate.

If each operation is independent, `Promise.allSettled()` or separate error handling may be better so one failure does not unnecessarily discard successful results.

The decision depends on the business requirement.

### Simple Explanation — Hindi
Har situation mein baaki four calls ko fail karna zaroori nahi hai.

Agar all five results mandatory hain, `Promise.all()` use kar sakte hain.

Agar operations independent hain, `Promise.allSettled()` use karke har operation ka result separately handle kar sakte hain.

---

## 119. An external API sometimes takes 30 seconds to respond. How would you prevent it from making your Node.js API slow?

### Simple Explanation — English
I would not allow an external dependency to wait indefinitely.

I would use:
- Request timeout
- Abort/cancellation where supported
- Retries with limits
- Exponential backoff where appropriate
- Circuit breaker patterns for unreliable dependencies
- Caching when appropriate
- Background processing if the result does not need to be immediate

### Simple Explanation — Hindi
External API ko 30 seconds tak blindly wait nahi karna chahiye.

Main:
- Timeout
- Request cancellation
- Limited retries
- Backoff
- Circuit breaker
- Cache
- Background job

jaise approaches use kar sakta hoon.

---

## 120. Your API depends on another service that is currently down. How would you make your application handle this gracefully?

### Simple Explanation — English
I would avoid allowing the failure to cascade through the entire application.

Depending on the feature, I could:
- Return a meaningful fallback response
- Fail fast
- Use cached data
- Queue the operation for later
- Use a circuit breaker
- Return a clear temporary-service error

The important point is to define the expected behavior when the dependency is unavailable.

### Simple Explanation — Hindi
Agar dependent service down hai, to uski failure ko poori application mein spread nahi hone dena chahiye.

Feature ke according:
- Cached data
- Fallback response
- Queue
- Circuit breaker
- Clear error

use kiya ja sakta hai.

---

## 121. A user clicks the Submit button five times and five identical API requests are created. How would you prevent duplicate operations?

### Simple Explanation — English
I would handle this at both client and server levels.

Frontend can disable the button while submitting, but the backend should also protect important operations.

For critical operations, use an idempotency key or a unique business constraint so repeated requests do not create duplicate results.

### Simple Explanation — Hindi
Frontend par submit button ko request ke time disable kar sakte hain, lekin backend protection bhi important hai.

Critical operations ke liye idempotency key ya unique database constraint use kar sakte hain.

### Example
```text
Request 1 → idempotency-key: abc123
Request 2 → idempotency-key: abc123
Request 3 → idempotency-key: abc123

Backend → Same operation already processed
```

---

## 122. Your Node.js API crashes whenever a particular endpoint receives a large amount of data. How would you debug it?

### Simple Explanation — English
I would reproduce the issue with controlled payload sizes and inspect:

- Memory usage
- Request body limits
- Stream handling
- JSON parsing
- CPU usage
- Heap snapshots
- Error logs
- Stack traces

I would also check whether the endpoint creates large temporary objects or copies the payload multiple times.

### Simple Explanation — Hindi
Main payload size gradually increase karke issue reproduce karunga.

Check karunga:

```text
Memory
Request limit
JSON parsing
Streams
CPU
Heap snapshot
Logs
Stack trace
```

Possible hai ki application complete large payload ko memory mein multiple times copy kar rahi ho.

---

## 123. Your server memory keeps increasing over time and eventually crashes. How would you find the memory leak?

### Simple Explanation — English
I would first confirm whether memory is actually being retained instead of temporarily increasing and then being garbage-collected.

Then I would:
1. Monitor heap usage.
2. Take heap snapshots at different times.
3. Compare retained objects.
4. Inspect caches, global variables, listeners, timers, and closures.
5. Reproduce the suspected operation repeatedly.
6. Fix the reference that is retaining unnecessary data.
7. Monitor again after the fix.

### Simple Explanation — Hindi
Pehle confirm karunga ki memory actually leak ho rahi hai ya normal garbage collection ke baad release ho rahi hai.

Phir heap snapshots compare karke dekhenge ki kaunse objects unnecessarily retained hain.

Caches, listeners, timers, globals aur closures specially check karunga.

---

## 124. Your application works perfectly locally but becomes slow in production. What would you check first?

### Simple Explanation — English
I would compare the environments rather than immediately changing application code.

I would check:
- Production traffic
- Database size and indexes
- Network latency
- External services
- CPU/memory limits
- Environment configuration
- Logging overhead
- Connection pool settings
- Caching
- Infrastructure/load balancer behavior

Then I would use production metrics and traces to identify the actual bottleneck.

### Simple Explanation — Hindi
Local aur production environment ko compare karunga.

Check karunga:

```text
Traffic
Database size
Indexes
Network
External APIs
CPU/Memory
Connection pool
Caching
Infrastructure
```

Production metrics se actual bottleneck identify karna important hai.

---

## 125. An API endpoint performs a large synchronous loop. What problem can this cause in Node.js?

### Simple Explanation — English
A large synchronous loop can block the main JavaScript thread.

While the loop runs, the Event Loop cannot process other JavaScript callbacks normally. This can increase response times for unrelated requests.

For CPU-heavy work, move the work to Worker Threads, background jobs, or another process/service when appropriate.

### Simple Explanation — Hindi
Large synchronous loop main JavaScript thread ko block kar sakta hai.

Is dauran doosre users ke requests bhi delay ho sakte hain.

Heavy CPU work ko Worker Thread, background job ya separate service mein move karna better ho sakta hai.

---

## 126. You need to generate a large PDF/report for a user. Would you generate it directly inside the request handler?

### Simple Explanation — English
If generation is fast and small, doing it during the request may be acceptable.

If the report takes a long time or consumes significant CPU/memory, I would use a background job.

A common architecture is:

```text
Client
 ↓
POST /reports
 ↓
Create Job
 ↓
Queue
 ↓
Worker generates report
 ↓
Store report
 ↓
Notify client
```

### Simple Explanation — Hindi
Agar PDF small hai aur quickly generate ho jati hai, request ke andar generate kar sakte hain.

Agar report heavy hai, to background job better hai.

Client ko job ID dekar baad mein status ya download URL provide kar sakte hain.

---

## 127. A request starts a long-running task that takes several minutes. How would you design this API?

### Simple Explanation — English
I would usually avoid keeping the HTTP request open for several minutes.

Instead:

1. Accept the request.
2. Create a background job.
3. Return a job ID, often with `202 Accepted`.
4. Process the job asynchronously.
5. Let the client poll for status or receive a notification/webhook.
6. Provide the result when ready.

### Simple Explanation — Hindi
Several-minute task ke liye HTTP request ko continuously open rakhna generally ideal nahi hai.

Better flow:

```text
POST /task
 ↓
202 Accepted
 ↓
Job ID
 ↓
Background Worker
 ↓
Task complete
 ↓
Client checks status / gets notification
```

---

## 128. You need to process 100,000 records from a database. How would you prevent the Node.js process from running out of memory?

### Simple Explanation — English
I would avoid loading all 100,000 records into memory at once.

Depending on the database and operation, I could use:
- Cursor-based processing
- Database streams
- Batching/chunking
- Pagination
- Bulk operations where appropriate

### Simple Explanation — Hindi
100,000 records ko ek saath memory mein load nahi karunga.

Instead:
- Cursor
- Batch processing
- Chunking
- Pagination
- Database streaming

use kar sakte hain.

### Example
```text
100,000 records
      ↓
Batch 1 → 1,000
Batch 2 → 1,000
Batch 3 → 1,000
...
```

Isse memory usage controlled rehta hai.

---

## 129. An API endpoint returns 100,000 database records and becomes extremely slow. How would you optimize it?

### Simple Explanation — English
First, I would ask whether the client really needs 100,000 records.

Usually I would:
- Add pagination
- Return only required fields
- Add appropriate indexes
- Optimize the database query
- Use filtering/search on the server
- Consider cursor pagination for large datasets
- Compress responses where appropriate
- Cache suitable results

### Simple Explanation — Hindi
Sabse pehle check karunga ki frontend ko actually 100,000 records ki zarurat hai ya nahi.

Usually:
- Pagination
- Projection/selected fields
- Database indexes
- Query optimization
- Server-side filtering
- Cursor pagination

use karunga.

---

## 130. You have a Node.js application running on a server with 8 CPU cores. How would you utilize the available CPU cores?

### Simple Explanation — English
For handling more concurrent server traffic, I could run multiple Node.js processes and distribute traffic across them.

A process manager, container orchestration platform, or cluster-based approach can be used.

For CPU-heavy individual tasks, Worker Threads can use additional CPU cores.

### Simple Explanation — Hindi
8 CPU cores hone par multiple Node.js processes run karke traffic distribute kar sakte hain.

CPU-heavy individual tasks ke liye Worker Threads use kiye ja sakte hain.

### Example
```text
8 CPU cores
 ↓
Multiple Node.js processes
 ↓
Load distributed
```

---

## 131. Your Node.js application needs image processing, which is CPU-intensive. Would you use the main thread, Worker Threads, or another process? Why?

### Simple Explanation — English
I would avoid doing heavy image processing synchronously on the main Event Loop.

For moderate CPU-heavy JavaScript processing, Worker Threads can be appropriate.

For larger workloads, a background job system, separate worker process, or dedicated image-processing service may be more suitable.

The choice depends on processing time, throughput, isolation requirements, and the library being used.

### Simple Explanation — Hindi
CPU-intensive image processing ko main Event Loop par directly run nahi karunga.

Small/moderate CPU-heavy work ke liye Worker Threads useful ho sakte hain.

Large production workload ke liye background worker ya dedicated image-processing service better architecture ho sakta hai.

---

## 132. Your Express application has 50 routes and many middleware functions. How would you organize the project so it remains maintainable?

### Simple Explanation — English
I would separate routes from business logic and infrastructure code.

A possible structure:

```text
src/
 ├── routes/
 ├── controllers/
 ├── services/
 ├── models/
 ├── middleware/
 ├── validators/
 ├── utils/
 ├── config/
 └── app.js
```

I would also group related routes into routers such as users, auth, products, and orders.

### Simple Explanation — Hindi
50 routes hone par sab kuch ek file mein nahi rakhna chahiye.

Related modules ke according organize karunga:

```text
auth
users
products
orders
```

Aur controllers, services, middleware aur validators ko separate rakhunga.

---

## 133. Five different routes contain almost the same authentication logic. How would you avoid duplicating the code?

### Simple Explanation — English
I would extract the repeated authentication logic into reusable Express middleware.

Then protected routes can use the same middleware.

### Simple Explanation — Hindi
Repeated authentication logic ko ek reusable middleware mein move karunga.

### Example
```js
const authMiddleware = async (req, res, next) => {
  // verify token
  // attach user
  next();
};

app.get("/profile", authMiddleware, getProfile);
app.get("/orders", authMiddleware, getOrders);
app.get("/settings", authMiddleware, getSettings);
```

This avoids duplication and keeps authentication behavior consistent.

---

## 134. Your API has different types of errors from different services. How would you return consistent error responses to the frontend?

### Simple Explanation — English
I would create a centralized error-handling layer.

Different errors can be converted into a common API format containing fields such as:

```json
{
  "success": false,
  "message": "Something went wrong",
  "code": "SOME_ERROR",
  "details": {}
}
```

Internal details should not be exposed to clients unnecessarily.

### Simple Explanation — Hindi
Different services ke errors ko centralized error handler mein convert kar sakte hain.

Frontend ko consistent structure milega, chahe error database se aaye, validation se aaye, ya external API se.

Sensitive internal stack traces client ko directly nahi bhejne chahiye.

---

## 135. A database query takes 8 seconds, but the Node.js server itself is fast. How would you identify and solve the actual bottleneck?

### Simple Explanation — English
I would focus on the database instead of trying to optimize Node.js unnecessarily.

I would inspect:
- Query execution plan
- Indexes
- Number of documents/rows scanned
- Joins/populations
- Sorting
- Returned data size
- Database server resources

Then I would optimize the query or indexes and measure again.

### Simple Explanation — Hindi
Agar Node.js fast hai aur database query 8 seconds le rahi hai, to bottleneck database hai.

Main check karunga:
- Query plan
- Indexes
- Data scanned
- Joins/populate
- Sorting
- Database resources

Then query/index optimize karke performance dobara measure karunga.

---

## 136. Your API receives a very large request body. How would you protect the server from excessively large payloads?

### Simple Explanation — English
I would configure request-body size limits and reject payloads that exceed the allowed size.

I would also validate input and use streaming for large file uploads instead of buffering everything in memory.

### Simple Explanation — Hindi
Large request body se server ko protect karne ke liye body-size limit set karunga.

Agar file upload hai, to streaming use karna better hai.

### Example
```js
app.use(express.json({
  limit: "1mb"
}));
```

The exact limit should be based on the application's actual requirements.

---

## 137. An attacker sends thousands of requests to your login API. How would you protect the endpoint?

### Simple Explanation — English
I would add rate limiting and monitoring specifically around authentication endpoints.

Other protections can include:
- Login attempt throttling
- Increasing delays after repeated failures
- Account protection
- MFA
- IP/device signals where appropriate
- Monitoring and alerting

I would also avoid revealing whether an email address exists through overly specific error messages.

### Simple Explanation — Hindi
Login endpoint brute-force ke liye common target hota hai.

Main:
- Rate limiting
- Login throttling
- Temporary delays
- MFA
- Monitoring
- Alerts

use karunga.

Error messages bhi carefully design karunga taaki attacker ko unnecessary account information na mile.

---

## 138. Your JWT access token expires while the user is using the application. How would you handle token refresh?

### Simple Explanation — English
A common design uses a short-lived access token and a longer-lived refresh token.

When the access token expires, the client can call a refresh endpoint. The server validates the refresh token and issues a new access token.

Refresh tokens should be protected carefully and may be rotated or revoked depending on the security design.

### Simple Explanation — Hindi
Common approach mein short-lived access token aur longer-lived refresh token hota hai.

Access token expire hone par client refresh endpoint call karta hai. Server refresh token verify karke new access token issue karta hai.

Refresh token ko carefully secure karna important hai.

### Flow
```text
Access Token expires
        ↓
Refresh Token
        ↓
/auth/refresh
        ↓
New Access Token
```

---

## 139. Your API works from Postman but fails from the React frontend because of CORS. How would you debug and fix it?

### Simple Explanation — English
Postman does not enforce browser same-origin restrictions in the same way a browser does, so a request working in Postman does not prove that browser CORS configuration is correct.

I would inspect the browser Network and Console tabs and check:
- Request Origin
- `Access-Control-Allow-Origin`
- Preflight OPTIONS request
- Allowed methods
- Allowed headers
- Credentials configuration

Then I would configure the Express CORS middleware for the actual frontend origin.

### Simple Explanation — Hindi
Postman aur browser ka behavior CORS ke case mein same nahi hota.

Main browser DevTools mein check karunga:

```text
Origin
OPTIONS request
Allowed origin
Allowed methods
Allowed headers
Credentials
```

Then backend par correct frontend origin allow karunga.

### Example
```js
app.use(cors({
  origin: "https://myfrontend.com",
  credentials: true
}));
```

---

## 140. Your Node.js server needs to restart during deployment without dropping active requests. How would you design graceful shutdown?

### Simple Explanation — English
I would use graceful shutdown.

When the process receives a termination signal:

1. Stop accepting new traffic.
2. Allow existing requests to finish.
3. Stop background work safely.
4. Close database and other connections.
5. Exit after a reasonable timeout if something is stuck.

In production, the load balancer or process manager should also be configured so traffic is removed from the instance before it terminates.

### Simple Explanation — Hindi
Deployment ke time server ko suddenly kill nahi karna chahiye.

Graceful shutdown mein:

```text
Deployment signal
      ↓
Stop new traffic
      ↓
Finish active requests
      ↓
Close DB/resources
      ↓
Exit safely
```

Load balancer ko bhi ensure karna chahiye ki terminating instance ko new traffic na mile.

### Example
```js
process.on("SIGTERM", async () => {
  console.log("SIGTERM received");

  server.close(async () => {
    await mongoose.connection.close();
    process.exit(0);
  });
});
```

Production implementation mein shutdown timeout aur error handling bhi add karni chahiye.
