import { SeedQuestion } from './types';

export const nodeQuestions: SeedQuestion[] = [
  {
    technologySlug: 'nodejs',
    topicSlug: 'nodejs-fundamentals',
    question: `1. What is a memory leak in Node.js?`,
    slug: '1-what-is-a-memory-leak-in-nodejs',
    answer: `A memory leak happens when an application keeps references to objects that it no longer needs, so the garbage collector cannot free that memory.

If this continues, memory usage can keep increasing and eventually cause slow performance or an out-of-memory crash.

Common causes include:
- Global objects growing continuously
- Event listeners not being removed
- Timers that keep running unnecessarily
- Large caches without limits
- Closures retaining unnecessary data

**Example:**
\`\`\`js
const cache = [];

setInterval(() => {
  cache.push(new Array(100000).fill("data"));
}, 1000);
\`\`\`

Yahan cache continuously grow kar raha hai aur purana data release nahi ho raha.

---`,
    explanation: `A memory leak happens when an application keeps references to objects that it no longer needs, so the garbage collector cannot free that memory.

If this continues, memory usage can keep increasing and eventually cause slow performance or an out-of-memory crash.

Common causes include:
- Global objects growing continuously
- Event listeners not being removed
- Timers that keep running unnecessarily
- Large caches without limits
- Closures retaining unnecessary data

**Example:**
\`\`\`js
const cache = [];

setInterval(() => {
  cache.push(new Array(100000).fill("data"));
}, 1000);
\`\`\`

Yahan cache continuously grow kar raha hai aur purana data release nahi ho raha.

---`,
    explanationHindi: `Memory leak tab hota hai jab application unnecessary objects ko reference karke rakhti hai, isliye garbage collector unki memory free nahi kar pata.

Agar ye continuously hota rahe to memory usage badhta rahega aur application slow ya crash ho sakti hai.

**Example:**
\`\`\`js
const cache = [];

setInterval(() => {
  cache.push(new Array(100000).fill("data"));
}, 1000);
\`\`\`

Yahan cache continuously grow kar raha hai aur purana data release nahi ho raha.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 1,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'nodejs-fundamentals',
    question: `2. How can you detect and debug memory leaks?`,
    slug: '2-how-can-you-detect-and-debug-memory-leaks',
    answer: `First, monitor memory usage over time. If memory keeps increasing after the application performs similar work, investigate further.

Useful approaches include:
- Node.js heap snapshots
- Chrome DevTools
- Node.js inspector
- Garbage-collection metrics
- Monitoring tools
- Looking for growing arrays, Maps, caches, listeners, and timers

A useful approach is to compare heap snapshots before and after repeated operations.

**Example:**
\`\`\`text
Take Heap Snapshot 1
        ↓
Perform repeated operation
        ↓
Take Heap Snapshot 2
        ↓
Compare retained objects
\`\`\`

---`,
    explanation: `First, monitor memory usage over time. If memory keeps increasing after the application performs similar work, investigate further.

Useful approaches include:
- Node.js heap snapshots
- Chrome DevTools
- Node.js inspector
- Garbage-collection metrics
- Monitoring tools
- Looking for growing arrays, Maps, caches, listeners, and timers

A useful approach is to compare heap snapshots before and after repeated operations.

**Example:**
\`\`\`text
Take Heap Snapshot 1
        ↓
Perform repeated operation
        ↓
Take Heap Snapshot 2
        ↓
Compare retained objects
\`\`\`

---`,
    explanationHindi: `Memory leak detect karne ke liye memory usage ko time ke saath monitor karna chahiye.

Agar same type ka workload repeat hone ke baad memory continuously increase ho rahi hai, to investigation karni chahiye.

Heap snapshots aur Node.js inspector se check kar sakte hain ki kaunse objects memory mein unnecessarily retain ho rahe hain.

**Example:**
\`\`\`text
Take Heap Snapshot 1
        ↓
Perform repeated operation
        ↓
Take Heap Snapshot 2
        ↓
Compare retained objects
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 2,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'nodejs-fundamentals',
    question: `3. What causes high CPU usage in a Node.js application?`,
    slug: '3-what-causes-high-cpu-usage-in-a-nodejs-application',
    answer: `High CPU usage can happen because of:
- CPU-heavy calculations
- Large synchronous loops
- Complex JSON processing
- Expensive regular expressions
- Image/video processing
- Inefficient algorithms
- Too much application-level computation

Since normal JavaScript execution runs on the main thread, CPU-heavy work can also make the Event Loop slow.

**Example:**
\`\`\`js
app.get("/calculate", (req, res) => {
  let result = 0;

  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }

  res.json({ result });
});
\`\`\`

Aisa code other requests ko delay kar sakta hai.

---`,
    explanation: `High CPU usage can happen because of:
- CPU-heavy calculations
- Large synchronous loops
- Complex JSON processing
- Expensive regular expressions
- Image/video processing
- Inefficient algorithms
- Too much application-level computation

Since normal JavaScript execution runs on the main thread, CPU-heavy work can also make the Event Loop slow.

**Example:**
\`\`\`js
app.get("/calculate", (req, res) => {
  let result = 0;

  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }

  res.json({ result });
});
\`\`\`

Aisa code other requests ko delay kar sakta hai.

---`,
    explanationHindi: `High CPU usage ke common reasons hain:
- Heavy calculations
- Large loops
- Complex JSON processing
- Expensive regex
- Image/video processing
- Inefficient algorithms

Agar main thread par CPU-heavy work run ho raha hai, to Event Loop bhi delay ho sakta hai.

**Example:**
\`\`\`js
app.get("/calculate", (req, res) => {
  let result = 0;

  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }

  res.json({ result });
});
\`\`\`

Aisa code other requests ko delay kar sakta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 3,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'nodejs-fundamentals',
    question: `4. What is the difference between cluster and worker_threads?`,
    slug: '4-what-is-the-difference-between-cluster-and-worker-threads',
    answer: `Both can help use multiple CPU cores, but they work differently.

**Cluster** creates multiple Node.js processes. Each process has its own memory and V8 instance.

**Worker Threads** create additional JavaScript execution threads inside the same Node.js process. They are useful for CPU-intensive JavaScript work.`,
    explanation: `Both can help use multiple CPU cores, but they work differently.

**Cluster** creates multiple Node.js processes. Each process has its own memory and V8 instance.

**Worker Threads** create additional JavaScript execution threads inside the same Node.js process. They are useful for CPU-intensive JavaScript work.`,
    explanationHindi: `Cluster multiple Node.js processes create karta hai. Har process ka apna memory space hota hai.

Worker Threads same Node.js process ke andar additional JavaScript threads provide karte hain.

Simple difference:

\`\`\`text
Cluster
→ Multiple processes
→ Separate memory

Worker Threads
→ Multiple JS threads
→ Same process architecture
\`\`\`

#`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 4,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'nodejs-fundamentals',
    question: `5. When would you use Worker Threads?`,
    slug: '5-when-would-you-use-worker-threads',
    answer: `I would use Worker Threads when I have CPU-intensive JavaScript work that should not block the main Event Loop.

Examples:
- Large calculations
- CPU-heavy data processing
- Some image processing
- Encryption/computation workloads
- Parsing or transforming large data sets

They are not needed for normal database queries or typical network I/O.

**Example:**
\`\`\`text
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
\`\`\`

---`,
    explanation: `I would use Worker Threads when I have CPU-intensive JavaScript work that should not block the main Event Loop.

Examples:
- Large calculations
- CPU-heavy data processing
- Some image processing
- Encryption/computation workloads
- Parsing or transforming large data sets

They are not needed for normal database queries or typical network I/O.

**Example:**
\`\`\`text
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
\`\`\`

---`,
    explanationHindi: `Worker Threads tab use karunga jab CPU-heavy JavaScript work main Event Loop ko block kar raha ho.

Examples:
- Heavy calculations
- Large data processing
- CPU-heavy image processing
- Computation-heavy tasks

Normal database ya network I/O ke liye Worker Thread generally required nahi hota.

**Example:**
\`\`\`text
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
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 5,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'nodejs-fundamentals',
    question: `6. When would you use child processes?`,
    slug: '6-when-would-you-use-child-processes',
    answer: `Child processes are useful when an application needs to execute another process or command separately from the main Node.js process.

They can be useful for:
- Running system commands
- Executing external programs
- Process isolation
- Running workloads that are better separated from the main application

The choice between child processes, Worker Threads, queues, and separate services depends on the workload.

**Example:**
\`\`\`js
const { exec } = require("child_process");

exec("node --version", (error, stdout) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(stdout);
});
\`\`\`

External commands ko execute karte waqt user input ko blindly shell command mein pass nahi karna chahiye.

---`,
    explanation: `Child processes are useful when an application needs to execute another process or command separately from the main Node.js process.

They can be useful for:
- Running system commands
- Executing external programs
- Process isolation
- Running workloads that are better separated from the main application

The choice between child processes, Worker Threads, queues, and separate services depends on the workload.

**Example:**
\`\`\`js
const { exec } = require("child_process");

exec("node --version", (error, stdout) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(stdout);
});
\`\`\`

External commands ko execute karte waqt user input ko blindly shell command mein pass nahi karna chahiye.

---`,
    explanationHindi: `Child process tab useful hota hai jab Node.js application ko kisi separate process ya external command ko execute karna ho.

Examples:
- System commands
- External programs
- Separate process isolation

**Example:**
\`\`\`js
const { exec } = require("child_process");

exec("node --version", (error, stdout) => {
  if (error) {
    console.error(error);
    return;
  }

  console.log(stdout);
});
\`\`\`

External commands ko execute karte waqt user input ko blindly shell command mein pass nahi karna chahiye.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 6,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'nodejs-fundamentals',
    question: `7. How can Node.js use multiple CPU cores?`,
    slug: '7-how-can-nodejs-use-multiple-cpu-cores',
    answer: `A single Node.js JavaScript execution thread does not automatically use all CPU cores for one piece of JavaScript work.

To use multiple cores, we can run multiple Node.js processes using approaches such as:
- Cluster
- A process manager such as PM2
- Containers/orchestration
- Multiple service instances behind a load balancer

Worker Threads can also run CPU-heavy JavaScript work across threads.

**Example:**
\`\`\`text
CPU Core 1 → Node Process 1
CPU Core 2 → Node Process 2
CPU Core 3 → Node Process 3
CPU Core 4 → Node Process 4
\`\`\`

---`,
    explanation: `A single Node.js JavaScript execution thread does not automatically use all CPU cores for one piece of JavaScript work.

To use multiple cores, we can run multiple Node.js processes using approaches such as:
- Cluster
- A process manager such as PM2
- Containers/orchestration
- Multiple service instances behind a load balancer

Worker Threads can also run CPU-heavy JavaScript work across threads.

**Example:**
\`\`\`text
CPU Core 1 → Node Process 1
CPU Core 2 → Node Process 2
CPU Core 3 → Node Process 3
CPU Core 4 → Node Process 4
\`\`\`

---`,
    explanationHindi: `Ek Node.js JavaScript thread automatically machine ke saare CPU cores use nahi karta.

Multiple CPU cores use karne ke liye:
- Multiple Node.js processes
- Cluster
- PM2
- Multiple containers/instances
- Worker Threads for CPU-heavy work

use kiye ja sakte hain.

**Example:**
\`\`\`text
CPU Core 1 → Node Process 1
CPU Core 2 → Node Process 2
CPU Core 3 → Node Process 3
CPU Core 4 → Node Process 4
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 7,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'nodejs-fundamentals',
    question: `8. How would you scale a Node.js application when traffic increases?`,
    slug: '8-how-would-you-scale-a-nodejs-application-when-traffic-increases',
    answer: `First, I would identify the bottleneck using metrics and profiling.

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

**Example:**
\`\`\`text
             Load Balancer
             /     |     \
            /      |      \
      Node App  Node App  Node App
          \        |        /
             Database
\`\`\`

---`,
    explanation: `First, I would identify the bottleneck using metrics and profiling.

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

**Example:**
\`\`\`text
             Load Balancer
             /     |     \
            /      |      \
      Node App  Node App  Node App
          \        |        /
             Database
\`\`\`

---`,
    explanationHindi: `Traffic increase hone par main pehle bottleneck identify karunga.

Horizontal scaling mein multiple Node.js instances run karke load balancer ke through traffic distribute kar sakte hain.

Saath mein database, caching, queues, connection pooling aur monitoring ko bhi scale karna important hai.

**Example:**
\`\`\`text
             Load Balancer
             /     |     \
            /      |      \
      Node App  Node App  Node App
          \        |        /
             Database
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 8,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'nodejs-fundamentals',
    question: `9. What is graceful shutdown in Node.js?`,
    slug: '9-what-is-graceful-shutdown-in-nodejs',
    answer: `Graceful shutdown means stopping a Node.js application in a controlled way.

Before exiting, the application can:
- Stop accepting new requests
- Allow active requests to finish
- Close database connections
- Close message-queue connections
- Close servers and other resources
- Exit after a timeout if something does not finish

This helps avoid dropping requests or leaving resources in an inconsistent state.

**Example:**
\`\`\`js
process.on("SIGTERM", async () => {
  console.log("Shutdown started");

  await server.close();

  await mongoose.connection.close();

  process.exit(0);
});
\`\`\`

Real implementations should also handle errors and shutdown timeouts.

---`,
    explanation: `Graceful shutdown means stopping a Node.js application in a controlled way.

Before exiting, the application can:
- Stop accepting new requests
- Allow active requests to finish
- Close database connections
- Close message-queue connections
- Close servers and other resources
- Exit after a timeout if something does not finish

This helps avoid dropping requests or leaving resources in an inconsistent state.

**Example:**
\`\`\`js
process.on("SIGTERM", async () => {
  console.log("Shutdown started");

  await server.close();

  await mongoose.connection.close();

  process.exit(0);
});
\`\`\`

Real implementations should also handle errors and shutdown timeouts.

---`,
    explanationHindi: `Graceful shutdown ka matlab application ko suddenly kill karne ke bajay controlled way mein shut down karna.

Application:
1. New requests accept karna stop kare
2. Existing requests ko finish hone de
3. Database connection close kare
4. Other resources close kare
5. Required timeout ke baad exit kare

**Example:**
\`\`\`js
process.on("SIGTERM", async () => {
  console.log("Shutdown started");

  await server.close();

  await mongoose.connection.close();

  process.exit(0);
});
\`\`\`

Real implementations should also handle errors and shutdown timeouts.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 9,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'nodejs-fundamentals',
    question: `10. How would you make a Node.js API production-ready?`,
    slug: '10-how-would-you-make-a-nodejs-api-production-ready',
    answer: `I would consider:

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
- Proper secret management`,
    explanation: `I would consider:

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
- Proper secret management`,
    explanationHindi: `Production-ready API ke liye sirf routes banana enough nahi hai.

Main check karunga:

\`\`\`text
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
\`\`\`

---

# Part 11 — Logical / Scenario-Based Questions`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 10,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'nodejs-fundamentals',
    question: `11. You have an API receiving 10,000 requests per second. How would you make your Node.js server handle this load?`,
    slug: '11-you-have-an-api-receiving-10000-requests-per-second-how-would-you-make-your-nodejs-server-handle-this-load',
    answer: `I would not immediately add more servers. First, I would measure where the bottleneck is.

I would check:
- CPU
- Memory
- Event Loop latency
- Database latency
- External API latency
- Request/response size
- Connection pool limits

If the application is stateless, I can horizontally scale multiple Node.js instances behind a load balancer.

Then I would optimize the actual bottlenecks using caching, database indexes, pagination, connection pooling, and background processing where appropriate.`,
    explanation: `I would not immediately add more servers. First, I would measure where the bottleneck is.

I would check:
- CPU
- Memory
- Event Loop latency
- Database latency
- External API latency
- Request/response size
- Connection pool limits

If the application is stateless, I can horizontally scale multiple Node.js instances behind a load balancer.

Then I would optimize the actual bottlenecks using caching, database indexes, pagination, connection pooling, and background processing where appropriate.`,
    explanationHindi: `10,000 requests/sec dekh kar directly servers increase nahi karunga.

Pehle bottleneck identify karunga:

\`\`\`text
CPU?
Memory?
Event Loop?
Database?
External API?
Connection pool?
\`\`\`

Phir multiple Node.js instances ko load balancer ke behind run karke horizontally scale kar sakte hain.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 11,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'nodejs-fundamentals',
    question: `12. Your Node.js API suddenly becomes very slow even though CPU usage is low. How would you investigate the problem?`,
    slug: '12-your-nodejs-api-suddenly-becomes-very-slow-even-though-cpu-usage-is-low-how-would-you-investigate-the-problem',
    answer: `Low CPU does not mean the application is healthy.

I would check:
- Database response time
- External API latency
- Connection pool exhaustion
- Network latency
- Event Loop delay
- Locks/contention
- Slow queries
- Waiting on I/O

I would add or inspect request timing and distributed tracing to find where the request is spending time.`,
    explanation: `Low CPU does not mean the application is healthy.

I would check:
- Database response time
- External API latency
- Connection pool exhaustion
- Network latency
- Event Loop delay
- Locks/contention
- Slow queries
- Waiting on I/O

I would add or inspect request timing and distributed tracing to find where the request is spending time.`,
    explanationHindi: `CPU low hone ke baad bhi API slow ho sakti hai.

Main check karunga:

\`\`\`text
Database slow?
External API slow?
Connection pool full?
Network issue?
Event Loop delay?
Slow query?
\`\`\`

Request ko different stages mein measure karke actual waiting point identify karunga.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 12,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'nodejs-fundamentals',
    question: `13. Your API takes 5 seconds because it performs a CPU-heavy calculation. How would you prevent this calculation from blocking other requests?`,
    slug: '13-your-api-takes-5-seconds-because-it-performs-a-cpu-heavy-calculation-how-would-you-prevent-this-calculation-from-blocking-other-requests',
    answer: `I would avoid running the heavy calculation synchronously on the main Event Loop.

Depending on the requirement, I could use:
- Worker Threads
- Background job queues
- Separate worker processes
- A dedicated service

If the result does not need to be immediate, a background job is often a better architecture.`,
    explanation: `I would avoid running the heavy calculation synchronously on the main Event Loop.

Depending on the requirement, I could use:
- Worker Threads
- Background job queues
- Separate worker processes
- A dedicated service

If the result does not need to be immediate, a background job is often a better architecture.`,
    explanationHindi: `Heavy calculation ko main Event Loop par directly run nahi karunga.

Requirement ke according:
- Worker Thread
- Background job
- Separate process
- Separate service

use kar sakte hain.

Agar result immediately required nahi hai, background job better option ho sakta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 13,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'modules',
    question: `14. You need to process a 2 GB file in Node.js. Would you use readFile() or Streams, and why?`,
    slug: '14-you-need-to-process-a-2-gb-file-in-nodejs-would-you-use-readfile-or-streams-and-why',
    answer: `I would normally use Streams.

\`readFile()\` attempts to load the whole file into memory, while a readable Stream processes it in chunks.

For a 2 GB file, streaming reduces memory pressure and is much more appropriate.

**Example:**
\`\`\`js
fs.createReadStream("large-file.zip")
  .pipe(fs.createWriteStream("copy.zip"));
\`\`\`

---`,
    explanation: `I would normally use Streams.

\`readFile()\` attempts to load the whole file into memory, while a readable Stream processes it in chunks.

For a 2 GB file, streaming reduces memory pressure and is much more appropriate.

**Example:**
\`\`\`js
fs.createReadStream("large-file.zip")
  .pipe(fs.createWriteStream("copy.zip"));
\`\`\`

---`,
    explanationHindi: `2 GB file ke liye main Stream use karunga.

\`readFile()\` complete file ko memory mein load karne ki koshish karta hai.

Stream file ko chunks mein process karta hai, isliye memory usage controlled rehta hai.

**Example:**
\`\`\`js
fs.createReadStream("large-file.zip")
  .pipe(fs.createWriteStream("copy.zip"));
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 1,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'modules',
    question: `15. A user uploads a 1 GB video file and your server runs out of memory. What could be wrong and how would you fix it?`,
    slug: '15-a-user-uploads-a-1-gb-video-file-and-your-server-runs-out-of-memory-what-could-be-wrong-and-how-would-you-fix-it',
    answer: `A likely problem is that the application is buffering the entire upload in memory.

I would use streaming or streaming-compatible upload handling, apply appropriate request-size limits, and avoid creating unnecessary copies of the file in memory.

If possible, large files can also be uploaded directly to object storage using pre-signed upload URLs.

**Example:**
\`\`\`text
Client
  ↓
Streaming Upload
  ↓
Object Storage
\`\`\`

Instead of:

\`\`\`text
Client
  ↓
Node memory: 1 GB
  ↓
Storage
\`\`\`

---`,
    explanation: `A likely problem is that the application is buffering the entire upload in memory.

I would use streaming or streaming-compatible upload handling, apply appropriate request-size limits, and avoid creating unnecessary copies of the file in memory.

If possible, large files can also be uploaded directly to object storage using pre-signed upload URLs.

**Example:**
\`\`\`text
Client
  ↓
Streaming Upload
  ↓
Object Storage
\`\`\`

Instead of:

\`\`\`text
Client
  ↓
Node memory: 1 GB
  ↓
Storage
\`\`\`

---`,
    explanationHindi: `Likely problem ye ho sakti hai ki application poori 1 GB file ko memory mein load kar rahi hai.

Main:
- Streaming use karunga
- Request-size limits set karunga
- Unnecessary copies avoid karunga
- Large uploads ke liye object storage direct upload consider karunga

**Example:**
\`\`\`text
Client
  ↓
Streaming Upload
  ↓
Object Storage
\`\`\`

Instead of:

\`\`\`text
Client
  ↓
Node memory: 1 GB
  ↓
Storage
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 2,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'modules',
    question: `16. Two API requests modify the same resource at almost the same time. How would you handle the race condition?`,
    slug: '16-two-api-requests-modify-the-same-resource-at-almost-the-same-time-how-would-you-handle-the-race-condition',
    answer: `The solution depends on the business requirement.

Possible approaches include:
- Database transactions
- Atomic database updates
- Optimistic concurrency using a version field
- Pessimistic locking where supported
- Unique constraints
- Idempotency keys for duplicate operations

I would choose based on whether the operation is an update, payment, inventory change, or another type of transaction.`,
    explanation: `The solution depends on the business requirement.

Possible approaches include:
- Database transactions
- Atomic database updates
- Optimistic concurrency using a version field
- Pessimistic locking where supported
- Unique constraints
- Idempotency keys for duplicate operations

I would choose based on whether the operation is an update, payment, inventory change, or another type of transaction.`,
    explanationHindi: `Race condition ka solution business case par depend karega.

Options:
- Database transaction
- Atomic update
- Version field
- Locking
- Unique constraint
- Idempotency key

For example, inventory update ke liye atomic database operation useful ho sakta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 3,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'modules',
    question: `17. Your API calls three independent external APIs. How would you make the requests efficiently?`,
    slug: '17-your-api-calls-three-independent-external-apis-how-would-you-make-the-requests-efficiently',
    answer: `If the three operations are independent, I would usually run them concurrently instead of waiting for one to finish before starting the next.

\`Promise.all()\` can be used when all results are required and one failure should fail the combined operation.

**Example:**
\`\`\`js
const [users, orders, products] = await Promise.all([
  getUsers(),
  getOrders(),
  getProducts()
]);
\`\`\`

This can reduce total waiting time compared with sequential calls.

---`,
    explanation: `If the three operations are independent, I would usually run them concurrently instead of waiting for one to finish before starting the next.

\`Promise.all()\` can be used when all results are required and one failure should fail the combined operation.

**Example:**
\`\`\`js
const [users, orders, products] = await Promise.all([
  getUsers(),
  getOrders(),
  getProducts()
]);
\`\`\`

This can reduce total waiting time compared with sequential calls.

---`,
    explanationHindi: `Agar teen APIs ek doosre par depend nahi karti hain, to unhe sequentially call karne ke bajay concurrently call karna better hai.

**Example:**
\`\`\`js
const [users, orders, products] = await Promise.all([
  getUsers(),
  getOrders(),
  getProducts()
]);
\`\`\`

This can reduce total waiting time compared with sequential calls.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 4,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'modules',
    question: `18. You have five independent database/API calls, but one fails. Should the other four fail too?`,
    slug: '18-you-have-five-independent-databaseapi-calls-but-one-fails-should-the-other-four-fail-too',
    answer: `Not necessarily.

If all five results are required to construct a valid response, \`Promise.all()\` may be appropriate.

If each operation is independent, \`Promise.allSettled()\` or separate error handling may be better so one failure does not unnecessarily discard successful results.

The decision depends on the business requirement.`,
    explanation: `Not necessarily.

If all five results are required to construct a valid response, \`Promise.all()\` may be appropriate.

If each operation is independent, \`Promise.allSettled()\` or separate error handling may be better so one failure does not unnecessarily discard successful results.

The decision depends on the business requirement.`,
    explanationHindi: `Har situation mein baaki four calls ko fail karna zaroori nahi hai.

Agar all five results mandatory hain, \`Promise.all()\` use kar sakte hain.

Agar operations independent hain, \`Promise.allSettled()\` use karke har operation ka result separately handle kar sakte hain.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 5,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'modules',
    question: `19. An external API sometimes takes 30 seconds to respond. How would you prevent it from making your Node.js API slow?`,
    slug: '19-an-external-api-sometimes-takes-30-seconds-to-respond-how-would-you-prevent-it-from-making-your-nodejs-api-slow',
    answer: `I would not allow an external dependency to wait indefinitely.

I would use:
- Request timeout
- Abort/cancellation where supported
- Retries with limits
- Exponential backoff where appropriate
- Circuit breaker patterns for unreliable dependencies
- Caching when appropriate
- Background processing if the result does not need to be immediate`,
    explanation: `I would not allow an external dependency to wait indefinitely.

I would use:
- Request timeout
- Abort/cancellation where supported
- Retries with limits
- Exponential backoff where appropriate
- Circuit breaker patterns for unreliable dependencies
- Caching when appropriate
- Background processing if the result does not need to be immediate`,
    explanationHindi: `External API ko 30 seconds tak blindly wait nahi karna chahiye.

Main:
- Timeout
- Request cancellation
- Limited retries
- Backoff
- Circuit breaker
- Cache
- Background job

jaise approaches use kar sakta hoon.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 6,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'modules',
    question: `20. Your API depends on another service that is currently down. How would you make your application handle this gracefully?`,
    slug: '20-your-api-depends-on-another-service-that-is-currently-down-how-would-you-make-your-application-handle-this-gracefully',
    answer: `I would avoid allowing the failure to cascade through the entire application.

Depending on the feature, I could:
- Return a meaningful fallback response
- Fail fast
- Use cached data
- Queue the operation for later
- Use a circuit breaker
- Return a clear temporary-service error

The important point is to define the expected behavior when the dependency is unavailable.`,
    explanation: `I would avoid allowing the failure to cascade through the entire application.

Depending on the feature, I could:
- Return a meaningful fallback response
- Fail fast
- Use cached data
- Queue the operation for later
- Use a circuit breaker
- Return a clear temporary-service error

The important point is to define the expected behavior when the dependency is unavailable.`,
    explanationHindi: `Agar dependent service down hai, to uski failure ko poori application mein spread nahi hone dena chahiye.

Feature ke according:
- Cached data
- Fallback response
- Queue
- Circuit breaker
- Clear error

use kiya ja sakta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 7,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'modules',
    question: `21. A user clicks the Submit button five times and five identical API requests are created. How would you prevent duplicate operations?`,
    slug: '21-a-user-clicks-the-submit-button-five-times-and-five-identical-api-requests-are-created-how-would-you-prevent-duplicate-operations',
    answer: `I would handle this at both client and server levels.

Frontend can disable the button while submitting, but the backend should also protect important operations.

For critical operations, use an idempotency key or a unique business constraint so repeated requests do not create duplicate results.

**Example:**
\`\`\`text
Request 1 → idempotency-key: abc123
Request 2 → idempotency-key: abc123
Request 3 → idempotency-key: abc123

Backend → Same operation already processed
\`\`\`

---`,
    explanation: `I would handle this at both client and server levels.

Frontend can disable the button while submitting, but the backend should also protect important operations.

For critical operations, use an idempotency key or a unique business constraint so repeated requests do not create duplicate results.

**Example:**
\`\`\`text
Request 1 → idempotency-key: abc123
Request 2 → idempotency-key: abc123
Request 3 → idempotency-key: abc123

Backend → Same operation already processed
\`\`\`

---`,
    explanationHindi: `Frontend par submit button ko request ke time disable kar sakte hain, lekin backend protection bhi important hai.

Critical operations ke liye idempotency key ya unique database constraint use kar sakte hain.

**Example:**
\`\`\`text
Request 1 → idempotency-key: abc123
Request 2 → idempotency-key: abc123
Request 3 → idempotency-key: abc123

Backend → Same operation already processed
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 8,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'modules',
    question: `22. Your Node.js API crashes whenever a particular endpoint receives a large amount of data. How would you debug it?`,
    slug: '22-your-nodejs-api-crashes-whenever-a-particular-endpoint-receives-a-large-amount-of-data-how-would-you-debug-it',
    answer: `I would reproduce the issue with controlled payload sizes and inspect:

- Memory usage
- Request body limits
- Stream handling
- JSON parsing
- CPU usage
- Heap snapshots
- Error logs
- Stack traces

I would also check whether the endpoint creates large temporary objects or copies the payload multiple times.`,
    explanation: `I would reproduce the issue with controlled payload sizes and inspect:

- Memory usage
- Request body limits
- Stream handling
- JSON parsing
- CPU usage
- Heap snapshots
- Error logs
- Stack traces

I would also check whether the endpoint creates large temporary objects or copies the payload multiple times.`,
    explanationHindi: `Main payload size gradually increase karke issue reproduce karunga.

Check karunga:

\`\`\`text
Memory
Request limit
JSON parsing
Streams
CPU
Heap snapshot
Logs
Stack trace
\`\`\`

Possible hai ki application complete large payload ko memory mein multiple times copy kar rahi ho.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 9,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'modules',
    question: `23. Your server memory keeps increasing over time and eventually crashes. How would you find the memory leak?`,
    slug: '23-your-server-memory-keeps-increasing-over-time-and-eventually-crashes-how-would-you-find-the-memory-leak',
    answer: `I would first confirm whether memory is actually being retained instead of temporarily increasing and then being garbage-collected.

Then I would:
1. Monitor heap usage.
2. Take heap snapshots at different times.
3. Compare retained objects.
4. Inspect caches, global variables, listeners, timers, and closures.
5. Reproduce the suspected operation repeatedly.
6. Fix the reference that is retaining unnecessary data.
7. Monitor again after the fix.`,
    explanation: `I would first confirm whether memory is actually being retained instead of temporarily increasing and then being garbage-collected.

Then I would:
1. Monitor heap usage.
2. Take heap snapshots at different times.
3. Compare retained objects.
4. Inspect caches, global variables, listeners, timers, and closures.
5. Reproduce the suspected operation repeatedly.
6. Fix the reference that is retaining unnecessary data.
7. Monitor again after the fix.`,
    explanationHindi: `Pehle confirm karunga ki memory actually leak ho rahi hai ya normal garbage collection ke baad release ho rahi hai.

Phir heap snapshots compare karke dekhenge ki kaunse objects unnecessarily retained hain.

Caches, listeners, timers, globals aur closures specially check karunga.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 10,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'modules',
    question: `24. Your application works perfectly locally but becomes slow in production. What would you check first?`,
    slug: '24-your-application-works-perfectly-locally-but-becomes-slow-in-production-what-would-you-check-first',
    answer: `I would compare the environments rather than immediately changing application code.

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

Then I would use production metrics and traces to identify the actual bottleneck.`,
    explanation: `I would compare the environments rather than immediately changing application code.

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

Then I would use production metrics and traces to identify the actual bottleneck.`,
    explanationHindi: `Local aur production environment ko compare karunga.

Check karunga:

\`\`\`text
Traffic
Database size
Indexes
Network
External APIs
CPU/Memory
Connection pool
Caching
Infrastructure
\`\`\`

Production metrics se actual bottleneck identify karna important hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 11,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'modules',
    question: `25. An API endpoint performs a large synchronous loop. What problem can this cause in Node.js?`,
    slug: '25-an-api-endpoint-performs-a-large-synchronous-loop-what-problem-can-this-cause-in-nodejs',
    answer: `A large synchronous loop can block the main JavaScript thread.

While the loop runs, the Event Loop cannot process other JavaScript callbacks normally. This can increase response times for unrelated requests.

For CPU-heavy work, move the work to Worker Threads, background jobs, or another process/service when appropriate.`,
    explanation: `A large synchronous loop can block the main JavaScript thread.

While the loop runs, the Event Loop cannot process other JavaScript callbacks normally. This can increase response times for unrelated requests.

For CPU-heavy work, move the work to Worker Threads, background jobs, or another process/service when appropriate.`,
    explanationHindi: `Large synchronous loop main JavaScript thread ko block kar sakta hai.

Is dauran doosre users ke requests bhi delay ho sakte hain.

Heavy CPU work ko Worker Thread, background job ya separate service mein move karna better ho sakta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 12,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'modules',
    question: `26. You need to generate a large PDF/report for a user. Would you generate it directly inside the request handler?`,
    slug: '26-you-need-to-generate-a-large-pdfreport-for-a-user-would-you-generate-it-directly-inside-the-request-handler',
    answer: `If generation is fast and small, doing it during the request may be acceptable.

If the report takes a long time or consumes significant CPU/memory, I would use a background job.

A common architecture is:

\`\`\`text
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
\`\`\``,
    explanation: `If generation is fast and small, doing it during the request may be acceptable.

If the report takes a long time or consumes significant CPU/memory, I would use a background job.

A common architecture is:

\`\`\`text
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
\`\`\``,
    explanationHindi: `Agar PDF small hai aur quickly generate ho jati hai, request ke andar generate kar sakte hain.

Agar report heavy hai, to background job better hai.

Client ko job ID dekar baad mein status ya download URL provide kar sakte hain.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 13,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'npm-packages',
    question: `27. A request starts a long-running task that takes several minutes. How would you design this API?`,
    slug: '27-a-request-starts-a-long-running-task-that-takes-several-minutes-how-would-you-design-this-api',
    answer: `I would usually avoid keeping the HTTP request open for several minutes.

Instead:

1. Accept the request.
2. Create a background job.
3. Return a job ID, often with \`202 Accepted\`.
4. Process the job asynchronously.
5. Let the client poll for status or receive a notification/webhook.
6. Provide the result when ready.`,
    explanation: `I would usually avoid keeping the HTTP request open for several minutes.

Instead:

1. Accept the request.
2. Create a background job.
3. Return a job ID, often with \`202 Accepted\`.
4. Process the job asynchronously.
5. Let the client poll for status or receive a notification/webhook.
6. Provide the result when ready.`,
    explanationHindi: `Several-minute task ke liye HTTP request ko continuously open rakhna generally ideal nahi hai.

Better flow:

\`\`\`text
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
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 1,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'npm-packages',
    question: `28. You need to process 100,000 records from a database. How would you prevent the Node.js process from running out of memory?`,
    slug: '28-you-need-to-process-100000-records-from-a-database-how-would-you-prevent-the-nodejs-process-from-running-out-of-memory',
    answer: `I would avoid loading all 100,000 records into memory at once.

Depending on the database and operation, I could use:
- Cursor-based processing
- Database streams
- Batching/chunking
- Pagination
- Bulk operations where appropriate

**Example:**
\`\`\`text
100,000 records
      ↓
Batch 1 → 1,000
Batch 2 → 1,000
Batch 3 → 1,000
...
\`\`\`

Isse memory usage controlled rehta hai.

---`,
    explanation: `I would avoid loading all 100,000 records into memory at once.

Depending on the database and operation, I could use:
- Cursor-based processing
- Database streams
- Batching/chunking
- Pagination
- Bulk operations where appropriate

**Example:**
\`\`\`text
100,000 records
      ↓
Batch 1 → 1,000
Batch 2 → 1,000
Batch 3 → 1,000
...
\`\`\`

Isse memory usage controlled rehta hai.

---`,
    explanationHindi: `100,000 records ko ek saath memory mein load nahi karunga.

Instead:
- Cursor
- Batch processing
- Chunking
- Pagination
- Database streaming

use kar sakte hain.

**Example:**
\`\`\`text
100,000 records
      ↓
Batch 1 → 1,000
Batch 2 → 1,000
Batch 3 → 1,000
...
\`\`\`

Isse memory usage controlled rehta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 2,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'npm-packages',
    question: `29. An API endpoint returns 100,000 database records and becomes extremely slow. How would you optimize it?`,
    slug: '29-an-api-endpoint-returns-100000-database-records-and-becomes-extremely-slow-how-would-you-optimize-it',
    answer: `First, I would ask whether the client really needs 100,000 records.

Usually I would:
- Add pagination
- Return only required fields
- Add appropriate indexes
- Optimize the database query
- Use filtering/search on the server
- Consider cursor pagination for large datasets
- Compress responses where appropriate
- Cache suitable results`,
    explanation: `First, I would ask whether the client really needs 100,000 records.

Usually I would:
- Add pagination
- Return only required fields
- Add appropriate indexes
- Optimize the database query
- Use filtering/search on the server
- Consider cursor pagination for large datasets
- Compress responses where appropriate
- Cache suitable results`,
    explanationHindi: `Sabse pehle check karunga ki frontend ko actually 100,000 records ki zarurat hai ya nahi.

Usually:
- Pagination
- Projection/selected fields
- Database indexes
- Query optimization
- Server-side filtering
- Cursor pagination

use karunga.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 3,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'npm-packages',
    question: `30. You have a Node.js application running on a server with 8 CPU cores. How would you utilize the available CPU cores?`,
    slug: '30-you-have-a-nodejs-application-running-on-a-server-with-8-cpu-cores-how-would-you-utilize-the-available-cpu-cores',
    answer: `For handling more concurrent server traffic, I could run multiple Node.js processes and distribute traffic across them.

A process manager, container orchestration platform, or cluster-based approach can be used.

For CPU-heavy individual tasks, Worker Threads can use additional CPU cores.

**Example:**
\`\`\`text
8 CPU cores
 ↓
Multiple Node.js processes
 ↓
Load distributed
\`\`\`

---`,
    explanation: `For handling more concurrent server traffic, I could run multiple Node.js processes and distribute traffic across them.

A process manager, container orchestration platform, or cluster-based approach can be used.

For CPU-heavy individual tasks, Worker Threads can use additional CPU cores.

**Example:**
\`\`\`text
8 CPU cores
 ↓
Multiple Node.js processes
 ↓
Load distributed
\`\`\`

---`,
    explanationHindi: `8 CPU cores hone par multiple Node.js processes run karke traffic distribute kar sakte hain.

CPU-heavy individual tasks ke liye Worker Threads use kiye ja sakte hain.

**Example:**
\`\`\`text
8 CPU cores
 ↓
Multiple Node.js processes
 ↓
Load distributed
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 4,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'npm-packages',
    question: `31. Your Node.js application needs image processing, which is CPU-intensive. Would you use the main thread, Worker Threads, or another process? Why?`,
    slug: '31-your-nodejs-application-needs-image-processing-which-is-cpu-intensive-would-you-use-the-main-thread-worker-threads-or-another-process-why',
    answer: `I would avoid doing heavy image processing synchronously on the main Event Loop.

For moderate CPU-heavy JavaScript processing, Worker Threads can be appropriate.

For larger workloads, a background job system, separate worker process, or dedicated image-processing service may be more suitable.

The choice depends on processing time, throughput, isolation requirements, and the library being used.`,
    explanation: `I would avoid doing heavy image processing synchronously on the main Event Loop.

For moderate CPU-heavy JavaScript processing, Worker Threads can be appropriate.

For larger workloads, a background job system, separate worker process, or dedicated image-processing service may be more suitable.

The choice depends on processing time, throughput, isolation requirements, and the library being used.`,
    explanationHindi: `CPU-intensive image processing ko main Event Loop par directly run nahi karunga.

Small/moderate CPU-heavy work ke liye Worker Threads useful ho sakte hain.

Large production workload ke liye background worker ya dedicated image-processing service better architecture ho sakta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 5,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'npm-packages',
    question: `32. Your Express application has 50 routes and many middleware functions. How would you organize the project so it remains maintainable?`,
    slug: '32-your-express-application-has-50-routes-and-many-middleware-functions-how-would-you-organize-the-project-so-it-remains-maintainable',
    answer: `I would separate routes from business logic and infrastructure code.

A possible structure:

\`\`\`text
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
\`\`\`

I would also group related routes into routers such as users, auth, products, and orders.`,
    explanation: `I would separate routes from business logic and infrastructure code.

A possible structure:

\`\`\`text
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
\`\`\`

I would also group related routes into routers such as users, auth, products, and orders.`,
    explanationHindi: `50 routes hone par sab kuch ek file mein nahi rakhna chahiye.

Related modules ke according organize karunga:

\`\`\`text
auth
users
products
orders
\`\`\`

Aur controllers, services, middleware aur validators ko separate rakhunga.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 6,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'npm-packages',
    question: `33. Five different routes contain almost the same authentication logic. How would you avoid duplicating the code?`,
    slug: '33-five-different-routes-contain-almost-the-same-authentication-logic-how-would-you-avoid-duplicating-the-code',
    answer: `I would extract the repeated authentication logic into reusable Express middleware.

Then protected routes can use the same middleware.

**Example:**
\`\`\`js
const authMiddleware = async (req, res, next) => {
  // verify token
  // attach user
  next();
};

app.get("/profile", authMiddleware, getProfile);
app.get("/orders", authMiddleware, getOrders);
app.get("/settings", authMiddleware, getSettings);
\`\`\`

This avoids duplication and keeps authentication behavior consistent.

---`,
    explanation: `I would extract the repeated authentication logic into reusable Express middleware.

Then protected routes can use the same middleware.

**Example:**
\`\`\`js
const authMiddleware = async (req, res, next) => {
  // verify token
  // attach user
  next();
};

app.get("/profile", authMiddleware, getProfile);
app.get("/orders", authMiddleware, getOrders);
app.get("/settings", authMiddleware, getSettings);
\`\`\`

This avoids duplication and keeps authentication behavior consistent.

---`,
    explanationHindi: `Repeated authentication logic ko ek reusable middleware mein move karunga.

**Example:**
\`\`\`js
const authMiddleware = async (req, res, next) => {
  // verify token
  // attach user
  next();
};

app.get("/profile", authMiddleware, getProfile);
app.get("/orders", authMiddleware, getOrders);
app.get("/settings", authMiddleware, getSettings);
\`\`\`

This avoids duplication and keeps authentication behavior consistent.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 7,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'npm-packages',
    question: `34. Your API has different types of errors from different services. How would you return consistent error responses to the frontend?`,
    slug: '34-your-api-has-different-types-of-errors-from-different-services-how-would-you-return-consistent-error-responses-to-the-frontend',
    answer: `I would create a centralized error-handling layer.

Different errors can be converted into a common API format containing fields such as:

\`\`\`json
{
  "success": false,
  "message": "Something went wrong",
  "code": "SOME_ERROR",
  "details": {}
}
\`\`\`

Internal details should not be exposed to clients unnecessarily.`,
    explanation: `I would create a centralized error-handling layer.

Different errors can be converted into a common API format containing fields such as:

\`\`\`json
{
  "success": false,
  "message": "Something went wrong",
  "code": "SOME_ERROR",
  "details": {}
}
\`\`\`

Internal details should not be exposed to clients unnecessarily.`,
    explanationHindi: `Different services ke errors ko centralized error handler mein convert kar sakte hain.

Frontend ko consistent structure milega, chahe error database se aaye, validation se aaye, ya external API se.

Sensitive internal stack traces client ko directly nahi bhejne chahiye.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 8,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'npm-packages',
    question: `35. A database query takes 8 seconds, but the Node.js server itself is fast. How would you identify and solve the actual bottleneck?`,
    slug: '35-a-database-query-takes-8-seconds-but-the-nodejs-server-itself-is-fast-how-would-you-identify-and-solve-the-actual-bottleneck',
    answer: `I would focus on the database instead of trying to optimize Node.js unnecessarily.

I would inspect:
- Query execution plan
- Indexes
- Number of documents/rows scanned
- Joins/populations
- Sorting
- Returned data size
- Database server resources

Then I would optimize the query or indexes and measure again.`,
    explanation: `I would focus on the database instead of trying to optimize Node.js unnecessarily.

I would inspect:
- Query execution plan
- Indexes
- Number of documents/rows scanned
- Joins/populations
- Sorting
- Returned data size
- Database server resources

Then I would optimize the query or indexes and measure again.`,
    explanationHindi: `Agar Node.js fast hai aur database query 8 seconds le rahi hai, to bottleneck database hai.

Main check karunga:
- Query plan
- Indexes
- Data scanned
- Joins/populate
- Sorting
- Database resources

Then query/index optimize karke performance dobara measure karunga.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 9,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'npm-packages',
    question: `36. Your API receives a very large request body. How would you protect the server from excessively large payloads?`,
    slug: '36-your-api-receives-a-very-large-request-body-how-would-you-protect-the-server-from-excessively-large-payloads',
    answer: `I would configure request-body size limits and reject payloads that exceed the allowed size.

I would also validate input and use streaming for large file uploads instead of buffering everything in memory.

**Example:**
\`\`\`js
app.use(express.json({
  limit: "1mb"
}));
\`\`\`

The exact limit should be based on the application's actual requirements.

---`,
    explanation: `I would configure request-body size limits and reject payloads that exceed the allowed size.

I would also validate input and use streaming for large file uploads instead of buffering everything in memory.

**Example:**
\`\`\`js
app.use(express.json({
  limit: "1mb"
}));
\`\`\`

The exact limit should be based on the application's actual requirements.

---`,
    explanationHindi: `Large request body se server ko protect karne ke liye body-size limit set karunga.

Agar file upload hai, to streaming use karna better hai.

**Example:**
\`\`\`js
app.use(express.json({
  limit: "1mb"
}));
\`\`\`

The exact limit should be based on the application's actual requirements.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 10,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'npm-packages',
    question: `37. An attacker sends thousands of requests to your login API. How would you protect the endpoint?`,
    slug: '37-an-attacker-sends-thousands-of-requests-to-your-login-api-how-would-you-protect-the-endpoint',
    answer: `I would add rate limiting and monitoring specifically around authentication endpoints.

Other protections can include:
- Login attempt throttling
- Increasing delays after repeated failures
- Account protection
- MFA
- IP/device signals where appropriate
- Monitoring and alerting

I would also avoid revealing whether an email address exists through overly specific error messages.`,
    explanation: `I would add rate limiting and monitoring specifically around authentication endpoints.

Other protections can include:
- Login attempt throttling
- Increasing delays after repeated failures
- Account protection
- MFA
- IP/device signals where appropriate
- Monitoring and alerting

I would also avoid revealing whether an email address exists through overly specific error messages.`,
    explanationHindi: `Login endpoint brute-force ke liye common target hota hai.

Main:
- Rate limiting
- Login throttling
- Temporary delays
- MFA
- Monitoring
- Alerts

use karunga.

Error messages bhi carefully design karunga taaki attacker ko unnecessary account information na mile.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 11,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'npm-packages',
    question: `38. Your JWT access token expires while the user is using the application. How would you handle token refresh?`,
    slug: '38-your-jwt-access-token-expires-while-the-user-is-using-the-application-how-would-you-handle-token-refresh',
    answer: `A common design uses a short-lived access token and a longer-lived refresh token.

When the access token expires, the client can call a refresh endpoint. The server validates the refresh token and issues a new access token.

Refresh tokens should be protected carefully and may be rotated or revoked depending on the security design.`,
    explanation: `A common design uses a short-lived access token and a longer-lived refresh token.

When the access token expires, the client can call a refresh endpoint. The server validates the refresh token and issues a new access token.

Refresh tokens should be protected carefully and may be rotated or revoked depending on the security design.`,
    explanationHindi: `Common approach mein short-lived access token aur longer-lived refresh token hota hai.

Access token expire hone par client refresh endpoint call karta hai. Server refresh token verify karke new access token issue karta hai.

Refresh token ko carefully secure karna important hai.

#`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 12,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'npm-packages',
    question: `39. Your API works from Postman but fails from the React frontend because of CORS. How would you debug and fix it?`,
    slug: '39-your-api-works-from-postman-but-fails-from-the-react-frontend-because-of-cors-how-would-you-debug-and-fix-it',
    answer: `Postman does not enforce browser same-origin restrictions in the same way a browser does, so a request working in Postman does not prove that browser CORS configuration is correct.

I would inspect the browser Network and Console tabs and check:
- Request Origin
- \`Access-Control-Allow-Origin\`
- Preflight OPTIONS request
- Allowed methods
- Allowed headers
- Credentials configuration

Then I would configure the Express CORS middleware for the actual frontend origin.

**Example:**
\`\`\`js
app.use(cors({
  origin: "https://myfrontend.com",
  credentials: true
}));
\`\`\`

---`,
    explanation: `Postman does not enforce browser same-origin restrictions in the same way a browser does, so a request working in Postman does not prove that browser CORS configuration is correct.

I would inspect the browser Network and Console tabs and check:
- Request Origin
- \`Access-Control-Allow-Origin\`
- Preflight OPTIONS request
- Allowed methods
- Allowed headers
- Credentials configuration

Then I would configure the Express CORS middleware for the actual frontend origin.

**Example:**
\`\`\`js
app.use(cors({
  origin: "https://myfrontend.com",
  credentials: true
}));
\`\`\`

---`,
    explanationHindi: `Postman aur browser ka behavior CORS ke case mein same nahi hota.

Main browser DevTools mein check karunga:

\`\`\`text
Origin
OPTIONS request
Allowed origin
Allowed methods
Allowed headers
Credentials
\`\`\`

Then backend par correct frontend origin allow karunga.

**Example:**
\`\`\`js
app.use(cors({
  origin: "https://myfrontend.com",
  credentials: true
}));
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 13,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'file-system',
    question: `40. Your Node.js server needs to restart during deployment without dropping active requests. How would you design graceful shutdown?`,
    slug: '40-your-nodejs-server-needs-to-restart-during-deployment-without-dropping-active-requests-how-would-you-design-graceful-shutdown',
    answer: `I would use graceful shutdown.

When the process receives a termination signal:

1. Stop accepting new traffic.
2. Allow existing requests to finish.
3. Stop background work safely.
4. Close database and other connections.
5. Exit after a reasonable timeout if something is stuck.

In production, the load balancer or process manager should also be configured so traffic is removed from the instance before it terminates.

**Example:**
\`\`\`js
process.on("SIGTERM", async () => {
  console.log("SIGTERM received");

  server.close(async () => {
    await mongoose.connection.close();
    process.exit(0);
  });
});
\`\`\`

Production implementation mein shutdown timeout aur error handling bhi add karni chahiye.`,
    explanation: `I would use graceful shutdown.

When the process receives a termination signal:

1. Stop accepting new traffic.
2. Allow existing requests to finish.
3. Stop background work safely.
4. Close database and other connections.
5. Exit after a reasonable timeout if something is stuck.

In production, the load balancer or process manager should also be configured so traffic is removed from the instance before it terminates.

**Example:**
\`\`\`js
process.on("SIGTERM", async () => {
  console.log("SIGTERM received");

  server.close(async () => {
    await mongoose.connection.close();
    process.exit(0);
  });
});
\`\`\`

Production implementation mein shutdown timeout aur error handling bhi add karni chahiye.`,
    explanationHindi: `Deployment ke time server ko suddenly kill nahi karna chahiye.

Graceful shutdown mein:

\`\`\`text
Deployment signal
      ↓
Stop new traffic
      ↓
Finish active requests
      ↓
Close DB/resources
      ↓
Exit safely
\`\`\`

Load balancer ko bhi ensure karna chahiye ki terminating instance ko new traffic na mile.

**Example:**
\`\`\`js
process.on("SIGTERM", async () => {
  console.log("SIGTERM received");

  server.close(async () => {
    await mongoose.connection.close();
    process.exit(0);
  });
});
\`\`\`

Production implementation mein shutdown timeout aur error handling bhi add karni chahiye.`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 1,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'file-system',
    question: `41. What is Node.js, and why is it used for backend development?`,
    slug: '41-what-is-nodejs-and-why-is-it-used-for-backend-development',
    answer: `Node.js is a JavaScript runtime that allows us to run JavaScript outside the browser, mainly on the server.

It is built on Chrome's V8 JavaScript engine. Node.js is popular for backend development because it uses non-blocking and asynchronous I/O, so it can handle many requests efficiently without waiting for one request to finish before starting another.

It is especially useful for APIs, real-time applications, chat applications, streaming applications, and applications that perform many I/O operations.

**Example:**
For a MERN application, React frontend can call a Node.js/Express API:

\`\`\`text
React → Node.js/Express API → MongoDB → Response → React
\`\`\`

---`,
    explanation: `Node.js is a JavaScript runtime that allows us to run JavaScript outside the browser, mainly on the server.

It is built on Chrome's V8 JavaScript engine. Node.js is popular for backend development because it uses non-blocking and asynchronous I/O, so it can handle many requests efficiently without waiting for one request to finish before starting another.

It is especially useful for APIs, real-time applications, chat applications, streaming applications, and applications that perform many I/O operations.

**Example:**
For a MERN application, React frontend can call a Node.js/Express API:

\`\`\`text
React → Node.js/Express API → MongoDB → Response → React
\`\`\`

---`,
    explanationHindi: `Node.js ek JavaScript runtime hai jo hume JavaScript ko browser ke bahar, mainly server par run karne deta hai.

Ye Chrome ke V8 engine par based hai. Node.js ka main benefit hai ki ye non-blocking aur asynchronous I/O use karta hai. Isliye ek request ke wait karte hue server doosri requests ko bhi handle kar sakta hai.

**Example:**
For a MERN application, React frontend can call a Node.js/Express API:

\`\`\`text
React → Node.js/Express API → MongoDB → Response → React
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 2,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'file-system',
    question: `42. How is Node.js different from JavaScript running in a browser?`,
    slug: '42-how-is-nodejs-different-from-javascript-running-in-a-browser',
    answer: `JavaScript is the language, while Node.js is a runtime environment for executing JavaScript outside the browser.

Browser JavaScript mainly works with browser APIs such as the DOM, \`window\`, and \`document\`. Node.js does not provide the browser DOM. Instead, Node.js provides server-side APIs such as \`fs\`, \`http\`, \`path\`, and \`process\`.

Node.js is commonly used for backend servers, APIs, file handling, and command-line applications.

**Example:**
\`\`\`js
// Browser
document.getElementById("title");

// Node.js
const fs = require("fs");
fs.readFile("data.txt", "utf8", console.log);
\`\`\`

---`,
    explanation: `JavaScript is the language, while Node.js is a runtime environment for executing JavaScript outside the browser.

Browser JavaScript mainly works with browser APIs such as the DOM, \`window\`, and \`document\`. Node.js does not provide the browser DOM. Instead, Node.js provides server-side APIs such as \`fs\`, \`http\`, \`path\`, and \`process\`.

Node.js is commonly used for backend servers, APIs, file handling, and command-line applications.

**Example:**
\`\`\`js
// Browser
document.getElementById("title");

// Node.js
const fs = require("fs");
fs.readFile("data.txt", "utf8", console.log);
\`\`\`

---`,
    explanationHindi: `JavaScript ek programming language hai, jabki Node.js ek runtime environment hai jo JavaScript ko browser ke bahar run karta hai.

Browser mein hume \`window\`, \`document\`, DOM jaise APIs milte hain. Node.js mein DOM nahi hota. Uski jagah \`fs\`, \`http\`, \`path\`, \`process\` jaise server-side modules milte hain.

**Example:**
\`\`\`js
// Browser
document.getElementById("title");

// Node.js
const fs = require("fs");
fs.readFile("data.txt", "utf8", console.log);
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 3,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'file-system',
    question: `43. What are the main features of Node.js?`,
    slug: '43-what-are-the-main-features-of-nodejs',
    answer: `Important features of Node.js include:

- Event-driven architecture
- Non-blocking I/O
- Asynchronous programming
- Single JavaScript execution thread
- V8 JavaScript engine
- Large npm ecosystem
- Built-in modules for HTTP, files, streams, paths, etc.
- Easy integration with databases and APIs

These features make Node.js suitable for I/O-heavy applications.

**Example:**
A Node.js server can receive a request, start a database operation, and continue handling other work while waiting for the database response.

---`,
    explanation: `Important features of Node.js include:

- Event-driven architecture
- Non-blocking I/O
- Asynchronous programming
- Single JavaScript execution thread
- V8 JavaScript engine
- Large npm ecosystem
- Built-in modules for HTTP, files, streams, paths, etc.
- Easy integration with databases and APIs

These features make Node.js suitable for I/O-heavy applications.

**Example:**
A Node.js server can receive a request, start a database operation, and continue handling other work while waiting for the database response.

---`,
    explanationHindi: `Node.js ke important features hain:

- Event-driven architecture
- Non-blocking I/O
- Asynchronous programming
- Single JavaScript execution thread
- V8 engine
- Large npm ecosystem
- Built-in modules
- APIs aur databases ke saath easy integration

**Example:**
A Node.js server can receive a request, start a database operation, and continue handling other work while waiting for the database response.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 4,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'file-system',
    question: `44. Why is Node.js called single-threaded?`,
    slug: '44-why-is-nodejs-called-single-threaded',
    answer: `Node.js runs JavaScript code on a single main thread. This means one JavaScript operation is executed at a time on that thread.

However, saying "Node.js is only one thread" is not completely accurate. Node.js uses the Event Loop and can also use the operating system and libuv's thread pool for certain asynchronous operations.

The important point is that normal JavaScript execution happens on the main thread.

**Example:**
\`\`\`js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 1000);

console.log("End");
\`\`\`

Main JavaScript thread Event Loop ke through asynchronous work ko coordinate karta hai.

---`,
    explanation: `Node.js runs JavaScript code on a single main thread. This means one JavaScript operation is executed at a time on that thread.

However, saying "Node.js is only one thread" is not completely accurate. Node.js uses the Event Loop and can also use the operating system and libuv's thread pool for certain asynchronous operations.

The important point is that normal JavaScript execution happens on the main thread.

**Example:**
\`\`\`js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 1000);

console.log("End");
\`\`\`

Main JavaScript thread Event Loop ke through asynchronous work ko coordinate karta hai.

---`,
    explanationHindi: `Node.js mein JavaScript code normally ek main thread par execute hota hai. Matlab ek time par us main thread par ek JavaScript operation execute hota hai.

Lekin iska matlab ye nahi hai ki Node.js ke paas sirf ek hi thread hota hai. Async operations ke liye Node.js libuv aur operating system ki capabilities ka use karta hai.

**Example:**
\`\`\`js
console.log("Start");

setTimeout(() => {
  console.log("Timer");
}, 1000);

console.log("End");
\`\`\`

Main JavaScript thread Event Loop ke through asynchronous work ko coordinate karta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 5,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'file-system',
    question: `45. How can Node.js handle thousands of requests if JavaScript runs on a single thread?`,
    slug: '45-how-can-nodejs-handle-thousands-of-requests-if-javascript-runs-on-a-single-thread',
    answer: `Node.js uses an Event Loop and non-blocking I/O.

Suppose a request needs data from MongoDB. Node.js does not block the JavaScript thread while waiting for the database. It starts the operation and can handle other requests. When the database result is ready, the callback or Promise continuation is processed.

This is why Node.js can efficiently handle many I/O-bound requests.

**Example:**
\`\`\`js
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
\`\`\`

Database ke wait ke dauran Node.js doosre I/O work ko handle kar sakta hai.

---`,
    explanation: `Node.js uses an Event Loop and non-blocking I/O.

Suppose a request needs data from MongoDB. Node.js does not block the JavaScript thread while waiting for the database. It starts the operation and can handle other requests. When the database result is ready, the callback or Promise continuation is processed.

This is why Node.js can efficiently handle many I/O-bound requests.

**Example:**
\`\`\`js
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
\`\`\`

Database ke wait ke dauran Node.js doosre I/O work ko handle kar sakta hai.

---`,
    explanationHindi: `Node.js Event Loop aur non-blocking I/O ka use karta hai.

Agar kisi request ko database se data chahiye, to Node.js database response ka wait karke main thread ko block nahi karta. Wo doosre requests handle karta rehta hai. Database response aane ke baad us request ka remaining code execute hota hai.

**Example:**
\`\`\`js
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});
\`\`\`

Database ke wait ke dauran Node.js doosre I/O work ko handle kar sakta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 6,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'file-system',
    question: `46. What is non-blocking I/O in Node.js?`,
    slug: '46-what-is-non-blocking-io-in-nodejs',
    answer: `Non-blocking I/O means Node.js does not stop the main JavaScript thread while waiting for an I/O operation such as a file read, database operation, or network request.

Instead, Node.js starts the operation and continues doing other work. When the operation finishes, the result is handled asynchronously.

**Example:**
\`\`\`js
fs.readFile("data.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("This can execute before the file is read");
\`\`\`

---`,
    explanation: `Non-blocking I/O means Node.js does not stop the main JavaScript thread while waiting for an I/O operation such as a file read, database operation, or network request.

Instead, Node.js starts the operation and continues doing other work. When the operation finishes, the result is handled asynchronously.

**Example:**
\`\`\`js
fs.readFile("data.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("This can execute before the file is read");
\`\`\`

---`,
    explanationHindi: `Non-blocking I/O ka matlab hai ki file, database ya network operation complete hone ka wait karte hue Node.js main thread ko stop nahi karta.

Operation start hota hai aur Node.js doosra kaam karta rehta hai. Complete hone par result ko asynchronously handle kiya jata hai.

**Example:**
\`\`\`js
fs.readFile("data.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("This can execute before the file is read");
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 7,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'file-system',
    question: `47. What is event-driven architecture in Node.js?`,
    slug: '47-what-is-event-driven-architecture-in-nodejs',
    answer: `In an event-driven architecture, different parts of the application react to events.

Node.js uses EventEmitter and the Event Loop heavily for this model. Instead of continuously checking whether something happened, code can register a listener and execute when the event occurs.

**Example:**
\`\`\`js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("userCreated", (user) => {
  console.log("Send welcome email to", user.name);
});

emitter.emit("userCreated", { name: "Rahul" });
\`\`\`

---`,
    explanation: `In an event-driven architecture, different parts of the application react to events.

Node.js uses EventEmitter and the Event Loop heavily for this model. Instead of continuously checking whether something happened, code can register a listener and execute when the event occurs.

**Example:**
\`\`\`js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("userCreated", (user) => {
  console.log("Send welcome email to", user.name);
});

emitter.emit("userCreated", { name: "Rahul" });
\`\`\`

---`,
    explanationHindi: `Event-driven architecture mein application events ke basis par kaam karta hai.

Hum kisi event ke liye listener register kar sakte hain. Jab event occur hota hai, us event ka handler execute hota hai.

**Example:**
\`\`\`js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("userCreated", (user) => {
  console.log("Send welcome email to", user.name);
});

emitter.emit("userCreated", { name: "Rahul" });
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 8,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'file-system',
    question: `48. What is the role of the V8 engine in Node.js?`,
    slug: '48-what-is-the-role-of-the-v8-engine-in-nodejs',
    answer: `V8 is Google's open-source JavaScript engine. It is used by Chrome and Node.js.

Its job is to execute JavaScript code. V8 converts JavaScript into machine-level instructions and uses techniques such as JIT compilation to improve execution performance.

Node.js adds server-side APIs and runtime features around the V8 engine.

**Example:**
\`\`\`text
JavaScript code
      ↓
     V8
      ↓
Machine-level execution
\`\`\`

---`,
    explanation: `V8 is Google's open-source JavaScript engine. It is used by Chrome and Node.js.

Its job is to execute JavaScript code. V8 converts JavaScript into machine-level instructions and uses techniques such as JIT compilation to improve execution performance.

Node.js adds server-side APIs and runtime features around the V8 engine.

**Example:**
\`\`\`text
JavaScript code
      ↓
     V8
      ↓
Machine-level execution
\`\`\`

---`,
    explanationHindi: `V8 Google ka JavaScript engine hai. Chrome aur Node.js dono V8 ka use karte hain.

V8 JavaScript code ko execute karta hai aur performance improve karne ke liye JIT compilation jaise techniques use karta hai.

Node.js V8 ke upar server-side features provide karta hai.

**Example:**
\`\`\`text
JavaScript code
      ↓
     V8
      ↓
Machine-level execution
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 9,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'file-system',
    question: `49. What is libuv, and why is it important in Node.js?`,
    slug: '49-what-is-libuv-and-why-is-it-important-in-nodejs',
    answer: `libuv is a library used by Node.js for asynchronous I/O and the Event Loop infrastructure.

It helps Node.js handle operations such as network I/O and provides a thread pool for certain operations that should not block the main JavaScript thread.

So, V8 executes JavaScript, while libuv is an important part of Node.js's asynchronous runtime.`,
    explanation: `libuv is a library used by Node.js for asynchronous I/O and the Event Loop infrastructure.

It helps Node.js handle operations such as network I/O and provides a thread pool for certain operations that should not block the main JavaScript thread.

So, V8 executes JavaScript, while libuv is an important part of Node.js's asynchronous runtime.`,
    explanationHindi: `libuv Node.js ke asynchronous I/O aur Event Loop infrastructure ka important part hai.

Ye Node.js ko asynchronous operations handle karne mein help karta hai aur kuch operations ke liye thread pool provide karta hai.

Simple way mein:

- V8 → JavaScript execute karta hai
- libuv → async I/O aur Event Loop infrastructure mein help karta hai

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 10,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'file-system',
    question: `50. What is the difference between synchronous and asynchronous operations in Node.js?`,
    slug: '50-what-is-the-difference-between-synchronous-and-asynchronous-operations-in-nodejs',
    answer: `A synchronous operation blocks execution until it finishes.

An asynchronous operation starts the work and allows the application to continue. Its result is handled later using a callback, Promise, or \`async/await\`.

**Example:**
\`\`\`js
// Synchronous
const data = fs.readFileSync("data.txt");

// Asynchronous
fs.readFile("data.txt", (err, data) => {
  console.log(data);
});
\`\`\`

Server code mein unnecessary synchronous operations avoid karna important hai.

---`,
    explanation: `A synchronous operation blocks execution until it finishes.

An asynchronous operation starts the work and allows the application to continue. Its result is handled later using a callback, Promise, or \`async/await\`.

**Example:**
\`\`\`js
// Synchronous
const data = fs.readFileSync("data.txt");

// Asynchronous
fs.readFile("data.txt", (err, data) => {
  console.log(data);
});
\`\`\`

Server code mein unnecessary synchronous operations avoid karna important hai.

---`,
    explanationHindi: `Synchronous operation mein current execution tab tak wait karta hai jab tak operation complete na ho jaye.

Asynchronous operation mein operation start hota hai aur application doosra kaam kar sakti hai. Result baad mein callback, Promise ya \`async/await\` se handle hota hai.

**Example:**
\`\`\`js
// Synchronous
const data = fs.readFileSync("data.txt");

// Asynchronous
fs.readFile("data.txt", (err, data) => {
  console.log(data);
});
\`\`\`

Server code mein unnecessary synchronous operations avoid karna important hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 11,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'file-system',
    question: `51. What are blocking operations in Node.js, and why should they be avoided?`,
    slug: '51-what-are-blocking-operations-in-nodejs-and-why-should-they-be-avoided',
    answer: `A blocking operation keeps the main JavaScript thread busy and prevents it from handling other JavaScript work.

This can be a serious problem in a Node.js server because one expensive synchronous operation can delay many incoming requests.

**Example:**
\`\`\`js
const data = fs.readFileSync("very-large-file.txt");
\`\`\`

For server-side request handling, an asynchronous API or streaming approach is generally preferable.

---`,
    explanation: `A blocking operation keeps the main JavaScript thread busy and prevents it from handling other JavaScript work.

This can be a serious problem in a Node.js server because one expensive synchronous operation can delay many incoming requests.

**Example:**
\`\`\`js
const data = fs.readFileSync("very-large-file.txt");
\`\`\`

For server-side request handling, an asynchronous API or streaming approach is generally preferable.

---`,
    explanationHindi: `Blocking operation main JavaScript thread ko busy rakhta hai aur is dauran doosre JavaScript tasks properly execute nahi ho pate.

Server mein ye problem create kar sakta hai because ek heavy operation bahut saare users ke requests ko delay kar sakta hai.

**Example:**
\`\`\`js
const data = fs.readFileSync("very-large-file.txt");
\`\`\`

For server-side request handling, an asynchronous API or streaming approach is generally preferable.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 12,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'file-system',
    question: `52. When is Node.js a good choice, and when is it not a good choice?`,
    slug: '52-when-is-nodejs-a-good-choice-and-when-is-it-not-a-good-choice',
    answer: `Node.js is a good choice when the application performs a lot of I/O operations, such as:

- REST APIs
- Real-time applications
- Chat applications
- Streaming
- Microservices
- Applications with many concurrent connections

Node.js may require additional design for CPU-heavy work because long CPU-bound JavaScript can block the main thread.`,
    explanation: `Node.js is a good choice when the application performs a lot of I/O operations, such as:

- REST APIs
- Real-time applications
- Chat applications
- Streaming
- Microservices
- Applications with many concurrent connections

Node.js may require additional design for CPU-heavy work because long CPU-bound JavaScript can block the main thread.`,
    explanationHindi: `Node.js I/O-heavy applications ke liye bahut useful hai, jaise REST APIs, chat applications, real-time apps, streaming aur microservices.

Agar application mein bahut heavy CPU calculations hain, to main thread block ho sakta hai. Aise cases mein Worker Threads ya separate services/processes consider kiye ja sakte hain.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 13,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'event-loop',
    question: `53. What is the Node.js Event Loop?`,
    slug: '53-what-is-the-nodejs-event-loop',
    answer: `The Event Loop is a mechanism that allows Node.js to handle asynchronous operations while JavaScript execution remains on the main thread.

When asynchronous work completes, the Event Loop helps schedule the related callbacks or continuations for execution.

This is a core reason Node.js can handle many I/O operations without creating one JavaScript thread per request.`,
    explanation: `The Event Loop is a mechanism that allows Node.js to handle asynchronous operations while JavaScript execution remains on the main thread.

When asynchronous work completes, the Event Loop helps schedule the related callbacks or continuations for execution.

This is a core reason Node.js can handle many I/O operations without creating one JavaScript thread per request.`,
    explanationHindi: `Event Loop Node.js ka important mechanism hai jo asynchronous operations ko handle karne mein help karta hai.

Jab asynchronous operation complete hota hai, uska callback ya Promise continuation appropriate time par execute hota hai.

#`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 1,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'event-loop',
    question: `54. How does the Node.js Event Loop work internally?`,
    slug: '54-how-does-the-nodejs-event-loop-work-internally',
    answer: `At a high level, Node.js runs JavaScript on the main thread and uses the Event Loop to coordinate asynchronous callbacks and I/O.

The Event Loop has different phases, including timers, pending callbacks, poll, check, and close callbacks. Microtasks such as Promise callbacks are processed according to Node.js's scheduling rules between pieces of work.

For interviews, the important idea is: Node.js does not create a separate JavaScript thread for every request. It uses the Event Loop to coordinate asynchronous work.`,
    explanation: `At a high level, Node.js runs JavaScript on the main thread and uses the Event Loop to coordinate asynchronous callbacks and I/O.

The Event Loop has different phases, including timers, pending callbacks, poll, check, and close callbacks. Microtasks such as Promise callbacks are processed according to Node.js's scheduling rules between pieces of work.

For interviews, the important idea is: Node.js does not create a separate JavaScript thread for every request. It uses the Event Loop to coordinate asynchronous work.`,
    explanationHindi: `High level par Node.js main JavaScript thread par code run karta hai aur Event Loop asynchronous callbacks aur I/O ko coordinate karta hai.

Event Loop ke multiple phases hote hain, jaise timers, poll, check aur close callbacks.

Interview mein main point ye hai ki har request ke liye alag JavaScript thread create nahi hota. Event Loop asynchronous work ko coordinate karta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 2,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'event-loop',
    question: `55. What are the different phases of the Node.js Event Loop?`,
    slug: '55-what-are-the-different-phases-of-the-nodejs-event-loop',
    answer: `The commonly discussed Event Loop phases are:

1. Timers
2. Pending callbacks
3. Idle, prepare
4. Poll
5. Check
6. Close callbacks

Different types of callbacks are handled in different phases.

The exact internal behavior can be more detailed, but for interviews you should understand the purpose of the major phases rather than memorizing implementation details.`,
    explanation: `The commonly discussed Event Loop phases are:

1. Timers
2. Pending callbacks
3. Idle, prepare
4. Poll
5. Check
6. Close callbacks

Different types of callbacks are handled in different phases.

The exact internal behavior can be more detailed, but for interviews you should understand the purpose of the major phases rather than memorizing implementation details.`,
    explanationHindi: `Node.js Event Loop ke commonly discussed phases hain:

1. Timers
2. Pending callbacks
3. Idle, prepare
4. Poll
5. Check
6. Close callbacks

Har phase mein particular type ke callbacks process hote hain.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 3,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'event-loop',
    question: `56. What is the difference between the call stack, callback queue, and Event Loop?`,
    slug: '56-what-is-the-difference-between-the-call-stack-callback-queue-and-event-loop',
    answer: `The **call stack** keeps track of currently executing JavaScript functions.

The **callback queues** hold callbacks that are ready to be processed according to the relevant scheduling mechanism.

The **Event Loop** coordinates when queued asynchronous work can be moved into JavaScript execution.`,
    explanation: `The **call stack** keeps track of currently executing JavaScript functions.

The **callback queues** hold callbacks that are ready to be processed according to the relevant scheduling mechanism.

The **Event Loop** coordinates when queued asynchronous work can be moved into JavaScript execution.`,
    explanationHindi: `**Call Stack** mein currently execute ho rahe JavaScript functions hote hain.

**Queues** mein asynchronous callbacks ya scheduled work wait kar sakte hain.

**Event Loop** check karta hai ki JavaScript execution ke liye queued work kab process kiya ja sakta hai.

#`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 4,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'event-loop',
    question: `57. What is the difference between microtasks and macrotasks in Node.js?`,
    slug: '57-what-is-the-difference-between-microtasks-and-macrotasks-in-nodejs',
    answer: `Microtasks are high-priority asynchronous callbacks that are processed before moving on to other event-loop work in the relevant execution cycle.

Examples include Promise callbacks. Node.js also has the special \`process.nextTick()\` queue, which has even stronger scheduling priority.

Macrotask-style work includes timers and \`setImmediate()\` callbacks.

**Example:**
\`\`\`js
console.log("1");

Promise.resolve().then(() => console.log("2"));

setTimeout(() => console.log("3"), 0);

console.log("4");
\`\`\`

Typical output:

\`\`\`text
1
4
2
3
\`\`\`

---`,
    explanation: `Microtasks are high-priority asynchronous callbacks that are processed before moving on to other event-loop work in the relevant execution cycle.

Examples include Promise callbacks. Node.js also has the special \`process.nextTick()\` queue, which has even stronger scheduling priority.

Macrotask-style work includes timers and \`setImmediate()\` callbacks.

**Example:**
\`\`\`js
console.log("1");

Promise.resolve().then(() => console.log("2"));

setTimeout(() => console.log("3"), 0);

console.log("4");
\`\`\`

Typical output:

\`\`\`text
1
4
2
3
\`\`\`

---`,
    explanationHindi: `Microtasks asynchronous work ki high-priority category hai. Promise callbacks iska common example hain.

Node.js mein \`process.nextTick()\` ki apni special queue hoti hai jo bahut high priority par process hoti hai.

Timers aur \`setImmediate()\` jaise callbacks doosre Event Loop phases mein process hote hain.

**Example:**
\`\`\`js
console.log("1");

Promise.resolve().then(() => console.log("2"));

setTimeout(() => console.log("3"), 0);

console.log("4");
\`\`\`

Typical output:

\`\`\`text
1
4
2
3
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 5,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'event-loop',
    question: `58. What is the difference between process.nextTick() and setImmediate()?`,
    slug: '58-what-is-the-difference-between-processnexttick-and-setimmediate',
    answer: `Both schedule asynchronous callbacks, but they are scheduled differently.

\`process.nextTick()\` callbacks are processed using Node.js's next-tick queue and run before the Event Loop continues to later phases.

\`setImmediate()\` schedules a callback for the Event Loop's check phase.

Because \`process.nextTick()\` can repeatedly run before the Event Loop moves forward, excessive use can starve I/O.

**Example:**
\`\`\`js
process.nextTick(() => {
  console.log("nextTick");
});

setImmediate(() => {
  console.log("setImmediate");
});
\`\`\`

Exact ordering can depend on where the code is executed, especially when timers/I/O are involved.

---`,
    explanation: `Both schedule asynchronous callbacks, but they are scheduled differently.

\`process.nextTick()\` callbacks are processed using Node.js's next-tick queue and run before the Event Loop continues to later phases.

\`setImmediate()\` schedules a callback for the Event Loop's check phase.

Because \`process.nextTick()\` can repeatedly run before the Event Loop moves forward, excessive use can starve I/O.

**Example:**
\`\`\`js
process.nextTick(() => {
  console.log("nextTick");
});

setImmediate(() => {
  console.log("setImmediate");
});
\`\`\`

Exact ordering can depend on where the code is executed, especially when timers/I/O are involved.

---`,
    explanationHindi: `\`process.nextTick()\` callback ko Node.js ki next-tick queue mein schedule karta hai.

\`setImmediate()\` callback ko Event Loop ke check phase ke liye schedule karta hai.

\`process.nextTick()\` ko excessively use karne se Event Loop ke doosre work ko delay kiya ja sakta hai.

**Example:**
\`\`\`js
process.nextTick(() => {
  console.log("nextTick");
});

setImmediate(() => {
  console.log("setImmediate");
});
\`\`\`

Exact ordering can depend on where the code is executed, especially when timers/I/O are involved.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 6,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'event-loop',
    question: `59. What is the difference between setTimeout() and setImmediate()?`,
    slug: '59-what-is-the-difference-between-settimeout-and-setimmediate',
    answer: `\`setTimeout(callback, delay)\` schedules a callback after at least the specified delay has elapsed.

\`setImmediate(callback)\` schedules a callback for the Event Loop's check phase.

Their ordering is context-dependent. Inside an I/O callback, \`setImmediate()\` is commonly executed before a zero-delay \`setTimeout()\`.

**Example:**
\`\`\`js
setTimeout(() => console.log("timeout"), 0);

setImmediate(() => console.log("immediate"));
\`\`\`

Top-level code par output ko fixed order maan kar nahi chalna chahiye.

---`,
    explanation: `\`setTimeout(callback, delay)\` schedules a callback after at least the specified delay has elapsed.

\`setImmediate(callback)\` schedules a callback for the Event Loop's check phase.

Their ordering is context-dependent. Inside an I/O callback, \`setImmediate()\` is commonly executed before a zero-delay \`setTimeout()\`.

**Example:**
\`\`\`js
setTimeout(() => console.log("timeout"), 0);

setImmediate(() => console.log("immediate"));
\`\`\`

Top-level code par output ko fixed order maan kar nahi chalna chahiye.

---`,
    explanationHindi: `\`setTimeout()\` minimum delay ke baad callback schedule karta hai.

\`setImmediate()\` Event Loop ke check phase mein callback schedule karta hai.

Dono ka exact execution order context par depend kar sakta hai.

**Example:**
\`\`\`js
setTimeout(() => console.log("timeout"), 0);

setImmediate(() => console.log("immediate"));
\`\`\`

Top-level code par output ko fixed order maan kar nahi chalna chahiye.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 7,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'event-loop',
    question: `60. In what order do process.nextTick(), Promises, setTimeout(), and setImmediate() execute?`,
    slug: '60-in-what-order-do-processnexttick-promises-settimeout-and-setimmediate-execute',
    answer: `A simplified interview model is:

1. Current synchronous JavaScript finishes.
2. \`process.nextTick()\` callbacks are processed.
3. Promise microtasks are processed.
4. Event Loop phases continue, where timers and \`setImmediate()\` are handled according to their phase and context.

However, the exact ordering of timers and \`setImmediate()\` can depend on where they are scheduled.`,
    explanation: `A simplified interview model is:

1. Current synchronous JavaScript finishes.
2. \`process.nextTick()\` callbacks are processed.
3. Promise microtasks are processed.
4. Event Loop phases continue, where timers and \`setImmediate()\` are handled according to their phase and context.

However, the exact ordering of timers and \`setImmediate()\` can depend on where they are scheduled.`,
    explanationHindi: `Simplified model mein:

1. Pehle current synchronous code complete hota hai.
2. \`process.nextTick()\` callbacks process hote hain.
3. Promise microtasks process hote hain.
4. Uske baad Event Loop apne phases ke according timers, \`setImmediate()\` etc. process karta hai.

\`setTimeout(0)\` aur \`setImmediate()\` ka exact order har context mein same nahi hota.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 8,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'event-loop',
    question: `61. Why can process.nextTick() be dangerous if used excessively?`,
    slug: '61-why-can-processnexttick-be-dangerous-if-used-excessively',
    answer: `\`process.nextTick()\` callbacks are processed before the Event Loop continues to later phases.

If code continuously schedules more \`process.nextTick()\` callbacks, the Event Loop may spend too much time processing them and delay I/O, timers, and other work.

This is called starvation of the Event Loop.

**Example:**
\`\`\`js
function loop() {
  process.nextTick(loop);
}

loop();
\`\`\`

Aise code se Event Loop effectively doosre work ko process karne ka chance nahi paa sakta.

---`,
    explanation: `\`process.nextTick()\` callbacks are processed before the Event Loop continues to later phases.

If code continuously schedules more \`process.nextTick()\` callbacks, the Event Loop may spend too much time processing them and delay I/O, timers, and other work.

This is called starvation of the Event Loop.

**Example:**
\`\`\`js
function loop() {
  process.nextTick(loop);
}

loop();
\`\`\`

Aise code se Event Loop effectively doosre work ko process karne ka chance nahi paa sakta.

---`,
    explanationHindi: `\`process.nextTick()\` ki priority high hoti hai. Agar hum continuously naye \`nextTick()\` callbacks schedule karte rahein, to Event Loop doosre kaam jaise I/O aur timers ko delay kar sakta hai.

Isse Event Loop starvation ho sakta hai.

**Example:**
\`\`\`js
function loop() {
  process.nextTick(loop);
}

loop();
\`\`\`

Aise code se Event Loop effectively doosre work ko process karne ka chance nahi paa sakta.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 9,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'event-loop',
    question: `62. What happens when you execute a CPU-heavy operation inside a Node.js request handler?`,
    slug: '62-what-happens-when-you-execute-a-cpu-heavy-operation-inside-a-nodejs-request-handler',
    answer: `A CPU-heavy synchronous operation can block the main JavaScript thread.

While it is running, the Event Loop cannot process other JavaScript callbacks normally. As a result, other users' requests may become slow even if their operations are simple.

For CPU-heavy work, consider Worker Threads, separate processes, background jobs, or another service depending on the use case.

**Example:**
\`\`\`js
app.get("/calculate", (req, res) => {
  const result = heavyCalculation();
  res.json({ result });
});
\`\`\`

Agar \`heavyCalculation()\` bahut time leta hai, to ye server ke baaki requests ko affect kar sakta hai.

---`,
    explanation: `A CPU-heavy synchronous operation can block the main JavaScript thread.

While it is running, the Event Loop cannot process other JavaScript callbacks normally. As a result, other users' requests may become slow even if their operations are simple.

For CPU-heavy work, consider Worker Threads, separate processes, background jobs, or another service depending on the use case.

**Example:**
\`\`\`js
app.get("/calculate", (req, res) => {
  const result = heavyCalculation();
  res.json({ result });
});
\`\`\`

Agar \`heavyCalculation()\` bahut time leta hai, to ye server ke baaki requests ko affect kar sakta hai.

---`,
    explanationHindi: `Agar request handler ke andar heavy CPU calculation synchronous way mein run hoti hai, to main JavaScript thread block ho sakta hai.

Is dauran doosre users ke requests bhi delay ho sakte hain.

**Example:**
\`\`\`js
app.get("/calculate", (req, res) => {
  const result = heavyCalculation();
  res.json({ result });
});
\`\`\`

Agar \`heavyCalculation()\` bahut time leta hai, to ye server ke baaki requests ko affect kar sakta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 10,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'event-loop',
    question: `63. How does Node.js handle asynchronous I/O operations?`,
    slug: '63-how-does-nodejs-handle-asynchronous-io-operations',
    answer: `Node.js starts an asynchronous I/O operation and does not wait synchronously for it to finish.

The underlying runtime, operating system, or libuv mechanisms handle the operation. When it is ready, the associated callback or Promise continuation is scheduled so JavaScript can process the result.

**Example:**
\`\`\`js
fs.readFile("users.json", "utf8")
  .then(data => {
    console.log(data);
  });
\`\`\`

The JavaScript thread does not synchronously wait for the entire file operation.

---`,
    explanation: `Node.js starts an asynchronous I/O operation and does not wait synchronously for it to finish.

The underlying runtime, operating system, or libuv mechanisms handle the operation. When it is ready, the associated callback or Promise continuation is scheduled so JavaScript can process the result.

**Example:**
\`\`\`js
fs.readFile("users.json", "utf8")
  .then(data => {
    console.log(data);
  });
\`\`\`

The JavaScript thread does not synchronously wait for the entire file operation.

---`,
    explanationHindi: `Node.js asynchronous I/O operation start karta hai aur uske complete hone tak main JavaScript execution ko unnecessarily block nahi karta.

Underlying runtime/OS/libuv operation ko handle karte hain. Complete hone ke baad callback ya Promise continuation execute hoti hai.

**Example:**
\`\`\`js
fs.readFile("users.json", "utf8")
  .then(data => {
    console.log(data);
  });
\`\`\`

The JavaScript thread does not synchronously wait for the entire file operation.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 11,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'event-loop',
    question: `64. What is the Node.js thread pool?`,
    slug: '64-what-is-the-nodejs-thread-pool',
    answer: `Node.js uses a libuv-managed thread pool for certain operations that should not be performed directly on the main JavaScript thread.

Common examples can include some file-system operations, DNS operations, and cryptographic operations.

The thread pool allows these operations to happen without blocking JavaScript execution.`,
    explanation: `Node.js uses a libuv-managed thread pool for certain operations that should not be performed directly on the main JavaScript thread.

Common examples can include some file-system operations, DNS operations, and cryptographic operations.

The thread pool allows these operations to happen without blocking JavaScript execution.`,
    explanationHindi: `Node.js/libuv kuch operations ke liye thread pool use karta hai, taaki main JavaScript thread unnecessarily block na ho.

File-system operations, kuch DNS operations aur cryptographic operations thread pool ka use kar sakte hain.

#`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 12,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'event-loop',
    question: `65. Which operations use the libuv thread pool?`,
    slug: '65-which-operations-use-the-libuv-thread-pool',
    answer: `The exact list depends on Node.js and the underlying platform, but common examples include:

- Some file-system operations
- DNS operations such as \`dns.lookup()\`
- Certain crypto operations
- Some compression operations

Network sockets generally rely heavily on the operating system's asynchronous networking facilities rather than simply putting every network request into the libuv thread pool.`,
    explanation: `The exact list depends on Node.js and the underlying platform, but common examples include:

- Some file-system operations
- DNS operations such as \`dns.lookup()\`
- Certain crypto operations
- Some compression operations

Network sockets generally rely heavily on the operating system's asynchronous networking facilities rather than simply putting every network request into the libuv thread pool.`,
    explanationHindi: `Common examples jahan libuv thread pool use ho sakta hai:

- Kuch file-system operations
- \`dns.lookup()\`
- Kuch crypto operations
- Kuch compression operations

Important point: har network request thread pool mein simply execute nahi hoti. Networking ke liye Node.js operating system ke async mechanisms ka bhi use karta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 13,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'streams',
    question: `66. What is a callback in Node.js?`,
    slug: '66-what-is-a-callback-in-nodejs',
    answer: `A callback is a function passed to another function so that it can be executed later, usually after an asynchronous operation completes.

Callbacks were one of the original common patterns for asynchronous Node.js programming.

**Example:**
\`\`\`js
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
\`\`\`

Yahan \`(err, data) => {}\` callback hai.

---`,
    explanation: `A callback is a function passed to another function so that it can be executed later, usually after an asynchronous operation completes.

Callbacks were one of the original common patterns for asynchronous Node.js programming.

**Example:**
\`\`\`js
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
\`\`\`

Yahan \`(err, data) => {}\` callback hai.

---`,
    explanationHindi: `Callback ek function hota hai jo doosre function ko argument ke roop mein diya jata hai aur baad mein execute hota hai, usually asynchronous operation complete hone ke baad.

**Example:**
\`\`\`js
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
\`\`\`

Yahan \`(err, data) => {}\` callback hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 1,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'streams',
    question: `67. What is callback hell, and how can you avoid it?`,
    slug: '67-what-is-callback-hell-and-how-can-you-avoid-it',
    answer: `Callback hell happens when many asynchronous operations are nested inside each other, making the code difficult to read, maintain, and handle errors in.

It can be reduced by using:

- Promises
- \`async/await\`
- Small reusable functions
- Proper error handling

**Example:**
Instead of:

\`\`\`js
getUser(id, (err, user) => {
  getOrders(user, (err, orders) => {
    getPayment(orders, (err, payment) => {
      // ...
    });
  });
});
\`\`\`

Use:

\`\`\`js
const user = await getUser(id);
const orders = await getOrders(user);
const payment = await getPayment(orders);
\`\`\`

---`,
    explanation: `Callback hell happens when many asynchronous operations are nested inside each other, making the code difficult to read, maintain, and handle errors in.

It can be reduced by using:

- Promises
- \`async/await\`
- Small reusable functions
- Proper error handling

**Example:**
Instead of:

\`\`\`js
getUser(id, (err, user) => {
  getOrders(user, (err, orders) => {
    getPayment(orders, (err, payment) => {
      // ...
    });
  });
});
\`\`\`

Use:

\`\`\`js
const user = await getUser(id);
const orders = await getOrders(user);
const payment = await getPayment(orders);
\`\`\`

---`,
    explanationHindi: `Jab multiple asynchronous operations ek doosre ke andar deeply nested callbacks mein likhe jate hain, to code difficult ho jata hai. Isse callback hell kaha jata hai.

Promises aur \`async/await\` use karke code ko cleaner banaya ja sakta hai.

**Example:**
Instead of:

\`\`\`js
getUser(id, (err, user) => {
  getOrders(user, (err, orders) => {
    getPayment(orders, (err, payment) => {
      // ...
    });
  });
});
\`\`\`

Use:

\`\`\`js
const user = await getUser(id);
const orders = await getOrders(user);
const payment = await getPayment(orders);
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 2,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'streams',
    question: `68. What is an error-first callback pattern?`,
    slug: '68-what-is-an-error-first-callback-pattern',
    answer: `The error-first callback pattern is a common Node.js convention where the first argument is the error and the second argument contains the successful result.

Usually:

\`\`\`js
callback(error, result)
\`\`\`

If \`error\` is not null, the operation failed.

**Example:**
\`\`\`js
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    return console.error(err);
  }

  console.log(data);
});
\`\`\`

---`,
    explanation: `The error-first callback pattern is a common Node.js convention where the first argument is the error and the second argument contains the successful result.

Usually:

\`\`\`js
callback(error, result)
\`\`\`

If \`error\` is not null, the operation failed.

**Example:**
\`\`\`js
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    return console.error(err);
  }

  console.log(data);
});
\`\`\`

---`,
    explanationHindi: `Error-first callback Node.js ka common pattern hai jisme callback ka first argument error hota hai aur second argument successful result.

\`\`\`js
callback(error, result)
\`\`\`

**Example:**
\`\`\`js
fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    return console.error(err);
  }

  console.log(data);
});
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 3,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'streams',
    question: `69. What is a Promise?`,
    slug: '69-what-is-a-promise',
    answer: `A Promise represents the eventual result of an asynchronous operation.

A Promise can be:

- Pending
- Fulfilled
- Rejected

We can handle a Promise using \`.then()\`, \`.catch()\`, \`.finally()\`, or \`async/await\`.

**Example:**
\`\`\`js
const promise = fetchUser();

promise
  .then(user => console.log(user))
  .catch(error => console.error(error));
\`\`\`

---`,
    explanation: `A Promise represents the eventual result of an asynchronous operation.

A Promise can be:

- Pending
- Fulfilled
- Rejected

We can handle a Promise using \`.then()\`, \`.catch()\`, \`.finally()\`, or \`async/await\`.

**Example:**
\`\`\`js
const promise = fetchUser();

promise
  .then(user => console.log(user))
  .catch(error => console.error(error));
\`\`\`

---`,
    explanationHindi: `Promise asynchronous operation ke future result ko represent karta hai.

Iski three main states hoti hain:

- Pending
- Fulfilled
- Rejected

**Example:**
\`\`\`js
const promise = fetchUser();

promise
  .then(user => console.log(user))
  .catch(error => console.error(error));
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 4,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'streams',
    question: `70. What are the different states of a Promise?`,
    slug: '70-what-are-the-different-states-of-a-promise',
    answer: `A Promise has three main states:

1. **Pending** — operation is still running.
2. **Fulfilled** — operation completed successfully.
3. **Rejected** — operation failed.

Once a Promise becomes fulfilled or rejected, it is settled and does not change to another state.

**Example:**
\`\`\`text
Pending
   ↓
Fulfilled

or

Pending
   ↓
Rejected
\`\`\`

---`,
    explanation: `A Promise has three main states:

1. **Pending** — operation is still running.
2. **Fulfilled** — operation completed successfully.
3. **Rejected** — operation failed.

Once a Promise becomes fulfilled or rejected, it is settled and does not change to another state.

**Example:**
\`\`\`text
Pending
   ↓
Fulfilled

or

Pending
   ↓
Rejected
\`\`\`

---`,
    explanationHindi: `Promise ki three main states hoti hain:

1. **Pending** — operation abhi complete nahi hua.
2. **Fulfilled** — operation successfully complete ho gaya.
3. **Rejected** — operation fail ho gaya.

**Example:**
\`\`\`text
Pending
   ↓
Fulfilled

or

Pending
   ↓
Rejected
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 5,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'streams',
    question: `71. What is the difference between callbacks and Promises?`,
    slug: '71-what-is-the-difference-between-callbacks-and-promises',
    answer: `Callbacks use a function that is called when an operation finishes.

Promises represent the future result and provide a more structured way to chain asynchronous operations and handle errors.

Promises also work naturally with \`async/await\`, which often makes asynchronous code easier to read.

**Example:**
Callback:

\`\`\`js
getUser(id, (err, user) => {
  // ...
});
\`\`\`

Promise:

\`\`\`js
const user = await getUser(id);
\`\`\`

---`,
    explanation: `Callbacks use a function that is called when an operation finishes.

Promises represent the future result and provide a more structured way to chain asynchronous operations and handle errors.

Promises also work naturally with \`async/await\`, which often makes asynchronous code easier to read.

**Example:**
Callback:

\`\`\`js
getUser(id, (err, user) => {
  // ...
});
\`\`\`

Promise:

\`\`\`js
const user = await getUser(id);
\`\`\`

---`,
    explanationHindi: `Callback mein hum ek function pass karte hain jo operation complete hone par call hota hai.

Promise future result ko represent karta hai aur chaining aur error handling ko more structured banata hai.

**Example:**
Callback:

\`\`\`js
getUser(id, (err, user) => {
  // ...
});
\`\`\`

Promise:

\`\`\`js
const user = await getUser(id);
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 6,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'streams',
    question: `72. What is async/await, and how does it work with Promises?`,
    slug: '72-what-is-asyncawait-and-how-does-it-work-with-promises',
    answer: `\`async/await\` is syntax that makes Promise-based asynchronous code easier to read.

An \`async\` function always returns a Promise. \`await\` pauses that async function until the Promise settles, but it does not mean the entire Node.js process is synchronously blocked.

**Example:**
\`\`\`js
async function getUserData() {
  const user = await User.findById(id);
  return user;
}
\`\`\`

---`,
    explanation: `\`async/await\` is syntax that makes Promise-based asynchronous code easier to read.

An \`async\` function always returns a Promise. \`await\` pauses that async function until the Promise settles, but it does not mean the entire Node.js process is synchronously blocked.

**Example:**
\`\`\`js
async function getUserData() {
  const user = await User.findById(id);
  return user;
}
\`\`\`

---`,
    explanationHindi: `\`async/await\` Promises ke saath asynchronous code ko simple aur readable banata hai.

\`async\` function Promise return karta hai. \`await\` us particular async function ki execution ko Promise settle hone tak pause karta hai. Ye poore Node.js process ko block nahi karta.

**Example:**
\`\`\`js
async function getUserData() {
  const user = await User.findById(id);
  return user;
}
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 7,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'streams',
    question: `73. What is the difference between Promise.all() and Promise.allSettled()?`,
    slug: '73-what-is-the-difference-between-promiseall-and-promiseallsettled',
    answer: `\`Promise.all()\` is useful when all operations must succeed. If one Promise rejects, the combined Promise rejects.

\`Promise.allSettled()\` waits for every Promise and gives the result of each operation, whether it fulfilled or rejected.

**Example:**
\`\`\`js
const results = await Promise.all([
  getUser(),
  getOrders(),
  getProfile()
]);
\`\`\`

If all three are required, \`Promise.all()\` is appropriate.

\`\`\`js
const results = await Promise.allSettled([
  sendEmail(),
  sendNotification(),
  logActivity()
]);
\`\`\`

Here, we may want to know the result of every operation.

---`,
    explanation: `\`Promise.all()\` is useful when all operations must succeed. If one Promise rejects, the combined Promise rejects.

\`Promise.allSettled()\` waits for every Promise and gives the result of each operation, whether it fulfilled or rejected.

**Example:**
\`\`\`js
const results = await Promise.all([
  getUser(),
  getOrders(),
  getProfile()
]);
\`\`\`

If all three are required, \`Promise.all()\` is appropriate.

\`\`\`js
const results = await Promise.allSettled([
  sendEmail(),
  sendNotification(),
  logActivity()
]);
\`\`\`

Here, we may want to know the result of every operation.

---`,
    explanationHindi: `\`Promise.all()\` tab use karte hain jab hume multiple operations ke successful results chahiye. Ek reject hone par combined Promise reject ho jata hai.

\`Promise.allSettled()\` sabhi Promises ke complete hone ka wait karta hai aur har operation ka status deta hai.

**Example:**
\`\`\`js
const results = await Promise.all([
  getUser(),
  getOrders(),
  getProfile()
]);
\`\`\`

If all three are required, \`Promise.all()\` is appropriate.

\`\`\`js
const results = await Promise.allSettled([
  sendEmail(),
  sendNotification(),
  logActivity()
]);
\`\`\`

Here, we may want to know the result of every operation.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 8,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'streams',
    question: `74. What is the difference between Promise.race() and Promise.any()?`,
    slug: '74-what-is-the-difference-between-promiserace-and-promiseany',
    answer: `\`Promise.race()\` settles as soon as the first Promise settles, whether it fulfills or rejects.

\`Promise.any()\` waits for the first Promise that fulfills. It rejects only when all input Promises reject.

**Example:**
\`\`\`js
const result = await Promise.race([
  api1(),
  api2()
]);
\`\`\`

This can be useful when the first completed result determines what you want.

---`,
    explanation: `\`Promise.race()\` settles as soon as the first Promise settles, whether it fulfills or rejects.

\`Promise.any()\` waits for the first Promise that fulfills. It rejects only when all input Promises reject.

**Example:**
\`\`\`js
const result = await Promise.race([
  api1(),
  api2()
]);
\`\`\`

This can be useful when the first completed result determines what you want.

---`,
    explanationHindi: `\`Promise.race()\` mein jo Promise sabse pehle settle hota hai, uska result milta hai—chahe success ho ya failure.

\`Promise.any()\` mein hume first successful Promise chahiye. Agar sabhi fail ho jayein, tab \`Promise.any()\` reject hota hai.

**Example:**
\`\`\`js
const result = await Promise.race([
  api1(),
  api2()
]);
\`\`\`

This can be useful when the first completed result determines what you want.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 9,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'streams',
    question: `75. How do you properly handle errors with async/await?`,
    slug: '75-how-do-you-properly-handle-errors-with-asyncawait',
    answer: `A common approach is to use \`try/catch\` around awaited operations.

In Express, application-wide error-handling middleware can then handle errors consistently.

**Example:**
\`\`\`js
app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});
\`\`\`

---`,
    explanation: `A common approach is to use \`try/catch\` around awaited operations.

In Express, application-wide error-handling middleware can then handle errors consistently.

**Example:**
\`\`\`js
app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});
\`\`\`

---`,
    explanationHindi: `\`async/await\` ke saath errors handle karne ke liye commonly \`try/catch\` use karte hain.

Express application mein centralized error middleware ke through errors ko consistent response mein convert kiya ja sakta hai.

**Example:**
\`\`\`js
app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 10,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'streams',
    question: `76. What happens if an async function throws an error?`,
    slug: '76-what-happens-if-an-async-function-throws-an-error',
    answer: `An \`async\` function returns a Promise. If an error is thrown inside it, the returned Promise becomes rejected.

The rejection can be handled with \`try/catch\` around \`await\` or with \`.catch()\`.

**Example:**
\`\`\`js
async function getData() {
  throw new Error("Something went wrong");
}

try {
  await getData();
} catch (error) {
  console.log(error.message);
}
\`\`\`

---`,
    explanation: `An \`async\` function returns a Promise. If an error is thrown inside it, the returned Promise becomes rejected.

The rejection can be handled with \`try/catch\` around \`await\` or with \`.catch()\`.

**Example:**
\`\`\`js
async function getData() {
  throw new Error("Something went wrong");
}

try {
  await getData();
} catch (error) {
  console.log(error.message);
}
\`\`\`

---`,
    explanationHindi: `\`async\` function Promise return karta hai. Agar function ke andar error throw hota hai, to returned Promise reject ho jata hai.

Us error ko \`try/catch\` ya \`.catch()\` se handle kar sakte hain.

**Example:**
\`\`\`js
async function getData() {
  throw new Error("Something went wrong");
}

try {
  await getData();
} catch (error) {
  console.log(error.message);
}
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 11,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'streams',
    question: `77. What are modules in Node.js?`,
    slug: '77-what-are-modules-in-nodejs',
    answer: `A module is a reusable piece of code that can expose functionality to other parts of an application.

Node.js provides built-in modules such as \`fs\`, \`http\`, \`path\`, and \`crypto\`. We can also create our own modules and install third-party modules through npm.

**Example:**
\`\`\`js
// math.js
module.exports.add = (a, b) => a + b;

// app.js
const { add } = require("./math");
console.log(add(2, 3));
\`\`\`

---`,
    explanation: `A module is a reusable piece of code that can expose functionality to other parts of an application.

Node.js provides built-in modules such as \`fs\`, \`http\`, \`path\`, and \`crypto\`. We can also create our own modules and install third-party modules through npm.

**Example:**
\`\`\`js
// math.js
module.exports.add = (a, b) => a + b;

// app.js
const { add } = require("./math");
console.log(add(2, 3));
\`\`\`

---`,
    explanationHindi: `Module reusable code ka ek part hota hai jise application ke doosre parts mein use kiya ja sakta hai.

Node.js mein built-in modules bhi hote hain aur hum custom modules bhi create kar sakte hain.

**Example:**
\`\`\`js
// math.js
module.exports.add = (a, b) => a + b;

// app.js
const { add } = require("./math");
console.log(add(2, 3));
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 12,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'streams',
    question: `78. What is the difference between CommonJS and ES Modules?`,
    slug: '78-what-is-the-difference-between-commonjs-and-es-modules',
    answer: `CommonJS is the traditional Node.js module system and commonly uses \`require()\` and \`module.exports\`.

ES Modules is the standard JavaScript module system and uses \`import\` and \`export\`.`,
    explanation: `CommonJS is the traditional Node.js module system and commonly uses \`require()\` and \`module.exports\`.

ES Modules is the standard JavaScript module system and uses \`import\` and \`export\`.`,
    explanationHindi: `CommonJS mein generally:

\`\`\`js
const express = require("express");
module.exports = something;
\`\`\`

ES Modules mein:

\`\`\`js
import express from "express";
export default something;
\`\`\`

Modern Node.js supports both, depending on project configuration.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 13,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'buffers',
    question: `79. What is the difference between require() and import?`,
    slug: '79-what-is-the-difference-between-require-and-import',
    answer: `\`require()\` belongs to the CommonJS module system.

\`import\` belongs to ES Modules.

They differ in module semantics, configuration, and loading behavior. In a project, it is usually better to follow one consistent module style rather than mixing them unnecessarily.`,
    explanation: `\`require()\` belongs to the CommonJS module system.

\`import\` belongs to ES Modules.

They differ in module semantics, configuration, and loading behavior. In a project, it is usually better to follow one consistent module style rather than mixing them unnecessarily.`,
    explanationHindi: `\`require()\` CommonJS ka part hai aur \`import\` ES Modules ka.

Example:

\`\`\`js
const express = require("express");
\`\`\`

versus:

\`\`\`js
import express from "express";
\`\`\`

Project ke configuration ke according appropriate module system use karna chahiye.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 1,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'buffers',
    question: `80. What is module caching in Node.js?`,
    slug: '80-what-is-module-caching-in-nodejs',
    answer: `When a CommonJS module is loaded with \`require()\`, Node.js caches the loaded module.

If the same module is required again, Node.js can return the cached module instead of executing the module file from the beginning again.

This improves efficiency and also means module-level state can be shared across imports.

**Example:**
\`\`\`js
const config1 = require("./config");
const config2 = require("./config");

console.log(config1 === config2);
\`\`\`

For the same resolved CommonJS module, this is generally \`true\`.

---`,
    explanation: `When a CommonJS module is loaded with \`require()\`, Node.js caches the loaded module.

If the same module is required again, Node.js can return the cached module instead of executing the module file from the beginning again.

This improves efficiency and also means module-level state can be shared across imports.

**Example:**
\`\`\`js
const config1 = require("./config");
const config2 = require("./config");

console.log(config1 === config2);
\`\`\`

For the same resolved CommonJS module, this is generally \`true\`.

---`,
    explanationHindi: `CommonJS mein jab ek module \`require()\` se load hota hai, Node.js usse cache karta hai.

Agar wahi module dobara require kiya jaye, Node.js cached version return kar sakta hai.

**Example:**
\`\`\`js
const config1 = require("./config");
const config2 = require("./config");

console.log(config1 === config2);
\`\`\`

For the same resolved CommonJS module, this is generally \`true\`.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 2,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'buffers',
    question: `81. What happens when you require the same module multiple times?`,
    slug: '81-what-happens-when-you-require-the-same-module-multiple-times',
    answer: `For CommonJS modules, Node.js caches the module after the first load.

Later \`require()\` calls normally return the same cached module instance rather than executing the module code again.

This is important when a module contains state.

**Example:**
\`\`\`js
// counter.js
let count = 0;

module.exports = () => ++count;
\`\`\`

If multiple files require the same module, they normally interact with the same cached module instance.

---`,
    explanation: `For CommonJS modules, Node.js caches the module after the first load.

Later \`require()\` calls normally return the same cached module instance rather than executing the module code again.

This is important when a module contains state.

**Example:**
\`\`\`js
// counter.js
let count = 0;

module.exports = () => ++count;
\`\`\`

If multiple files require the same module, they normally interact with the same cached module instance.

---`,
    explanationHindi: `CommonJS mein pehli baar module load hone ke baad wo cache ho jata hai.

Uske baad same module ko require karne par generally cached instance milta hai.

**Example:**
\`\`\`js
// counter.js
let count = 0;

module.exports = () => ++count;
\`\`\`

If multiple files require the same module, they normally interact with the same cached module instance.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 3,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'buffers',
    question: `82. What is package.json, and what information does it contain?`,
    slug: '82-what-is-packagejson-and-what-information-does-it-contain',
    answer: `\`package.json\` is the main configuration file for a Node.js project.

It can contain:

- Project name
- Version
- Scripts
- Dependencies
- Dev dependencies
- Entry points
- Module configuration
- Package metadata

**Example:**
\`\`\`json
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
\`\`\`

---`,
    explanation: `\`package.json\` is the main configuration file for a Node.js project.

It can contain:

- Project name
- Version
- Scripts
- Dependencies
- Dev dependencies
- Entry points
- Module configuration
- Package metadata

**Example:**
\`\`\`json
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
\`\`\`

---`,
    explanationHindi: `\`package.json\` Node.js project ki important configuration file hoti hai.

Ismein project ki dependencies, scripts, version, name aur other configuration information hoti hai.

**Example:**
\`\`\`json
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
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 4,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'buffers',
    question: `83. What is the difference between dependencies and devDependencies?`,
    slug: '83-what-is-the-difference-between-dependencies-and-devdependencies',
    answer: `\`dependencies\` contain packages required by the application at runtime.

\`devDependencies\` contain packages mainly required during development, testing, linting, or building.

**Example:**
\`\`\`json
{
  "dependencies": {
    "express": "..."
  },
  "devDependencies": {
    "nodemon": "..."
  }
}
\`\`\`

Express is required by the application; nodemon is commonly a development tool.

---`,
    explanation: `\`dependencies\` contain packages required by the application at runtime.

\`devDependencies\` contain packages mainly required during development, testing, linting, or building.

**Example:**
\`\`\`json
{
  "dependencies": {
    "express": "..."
  },
  "devDependencies": {
    "nodemon": "..."
  }
}
\`\`\`

Express is required by the application; nodemon is commonly a development tool.

---`,
    explanationHindi: `\`dependencies\` mein wo packages hote hain jo application ko run karne ke liye required hain.

\`devDependencies\` mein development tools hote hain, jaise testing tools, linters, development servers, etc.

**Example:**
\`\`\`json
{
  "dependencies": {
    "express": "..."
  },
  "devDependencies": {
    "nodemon": "..."
  }
}
\`\`\`

Express is required by the application; nodemon is commonly a development tool.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 5,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'buffers',
    question: `84. What is the purpose of package-lock.json?`,
    slug: '84-what-is-the-purpose-of-package-lockjson',
    answer: `\`package-lock.json\` records the resolved versions of installed packages and their dependency tree.

It helps different environments install a consistent dependency tree and improves reproducibility.

**Example:**
If your \`package.json\` allows a range of versions, the lock file records the specific resolved versions used for that installation.

---`,
    explanation: `\`package-lock.json\` records the resolved versions of installed packages and their dependency tree.

It helps different environments install a consistent dependency tree and improves reproducibility.

**Example:**
If your \`package.json\` allows a range of versions, the lock file records the specific resolved versions used for that installation.

---`,
    explanationHindi: `\`package-lock.json\` installed packages ke exact resolved versions aur dependency tree ko record karta hai.

Isse development, CI, aur production environments mein dependency installation more consistent ho sakta hai.

**Example:**
If your \`package.json\` allows a range of versions, the lock file records the specific resolved versions used for that installation.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 6,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'buffers',
    question: `85. What is the difference between npm install and npm ci?`,
    slug: '85-what-is-the-difference-between-npm-install-and-npm-ci',
    answer: `\`npm install\` installs dependencies based on the project configuration and can update the lock file when necessary.

\`npm ci\` is intended for clean, reproducible installations, especially in CI/CD environments. It uses the lock file and expects it to be consistent with \`package.json\`.

\`npm ci\` typically removes the existing \`node_modules\` before installing.

**Example:**
\`\`\`bash
# Local development
npm install

# CI/CD
npm ci
\`\`\`

---`,
    explanation: `\`npm install\` installs dependencies based on the project configuration and can update the lock file when necessary.

\`npm ci\` is intended for clean, reproducible installations, especially in CI/CD environments. It uses the lock file and expects it to be consistent with \`package.json\`.

\`npm ci\` typically removes the existing \`node_modules\` before installing.

**Example:**
\`\`\`bash
# Local development
npm install

# CI/CD
npm ci
\`\`\`

---`,
    explanationHindi: `\`npm install\` normal dependency installation ke liye use hota hai aur required situation mein lock file update bhi kar sakta hai.

\`npm ci\` mainly CI/CD aur clean installation ke liye use hota hai. Ye lock file ke exact dependency versions ko follow karta hai.

**Example:**
\`\`\`bash
# Local development
npm install

# CI/CD
npm ci
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 7,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'buffers',
    question: `86. What is semantic versioning, and how do ^, ~, and exact versions work?`,
    slug: '86-what-is-semantic-versioning-and-how-do-and-exact-versions-work',
    answer: `Semantic Versioning generally follows:

\`\`\`text
MAJOR.MINOR.PATCH
\`\`\`

For example:

\`\`\`text
2.4.1
\`\`\`

- MAJOR → breaking changes
- MINOR → backward-compatible features
- PATCH → backward-compatible bug fixes

Common version ranges:

- \`2.4.1\` → exact version
- \`^2.4.1\` → allows compatible minor/patch updates within major version 2
- \`~2.4.1\` → generally allows patch-level updates within the 2.4 minor line`,
    explanation: `Semantic Versioning generally follows:

\`\`\`text
MAJOR.MINOR.PATCH
\`\`\`

For example:

\`\`\`text
2.4.1
\`\`\`

- MAJOR → breaking changes
- MINOR → backward-compatible features
- PATCH → backward-compatible bug fixes

Common version ranges:

- \`2.4.1\` → exact version
- \`^2.4.1\` → allows compatible minor/patch updates within major version 2
- \`~2.4.1\` → generally allows patch-level updates within the 2.4 minor line`,
    explanationHindi: `Semantic versioning ka format hota hai:

\`\`\`text
MAJOR.MINOR.PATCH
\`\`\`

Example:

\`\`\`text
2.4.1
\`\`\`

- Major → breaking changes
- Minor → new backward-compatible features
- Patch → bug fixes

\`^\` aur \`~\` version range define karte hain.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 8,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'buffers',
    question: `87. What is the Node.js fs module?`,
    slug: '87-what-is-the-nodejs-fs-module',
    answer: `The \`fs\` module provides APIs for working with the file system.

It can be used to:

- Read files
- Write files
- Update files
- Delete files
- Create directories
- Work with file metadata

It provides both synchronous and asynchronous APIs.

**Example:**
\`\`\`js
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
\`\`\`

---`,
    explanation: `The \`fs\` module provides APIs for working with the file system.

It can be used to:

- Read files
- Write files
- Update files
- Delete files
- Create directories
- Work with file metadata

It provides both synchronous and asynchronous APIs.

**Example:**
\`\`\`js
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
\`\`\`

---`,
    explanationHindi: `\`fs\` Node.js ka built-in File System module hai.

Isse hum files ko read, write, update, delete aur directories ke saath kaam kar sakte hain.

**Example:**
\`\`\`js
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 9,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'buffers',
    question: `88. What is the difference between fs.readFile() and fs.readFileSync()?`,
    slug: '88-what-is-the-difference-between-fsreadfile-and-fsreadfilesync',
    answer: `\`fs.readFile()\` is asynchronous. It starts the file operation and lets the Event Loop continue handling other work.

\`fs.readFileSync()\` is synchronous. It blocks the JavaScript thread until the file operation completes.

For request-handling code in a server, asynchronous APIs are generally preferred.

**Example:**
\`\`\`js
// Async
fs.readFile("data.txt", "utf8", callback);

// Sync
const data = fs.readFileSync("data.txt", "utf8");
\`\`\`

---`,
    explanation: `\`fs.readFile()\` is asynchronous. It starts the file operation and lets the Event Loop continue handling other work.

\`fs.readFileSync()\` is synchronous. It blocks the JavaScript thread until the file operation completes.

For request-handling code in a server, asynchronous APIs are generally preferred.

**Example:**
\`\`\`js
// Async
fs.readFile("data.txt", "utf8", callback);

// Sync
const data = fs.readFileSync("data.txt", "utf8");
\`\`\`

---`,
    explanationHindi: `\`fs.readFile()\` asynchronous hai, isliye file read hone ke wait mein main JavaScript execution unnecessarily block nahi hota.

\`fs.readFileSync()\` synchronous hai aur operation complete hone tak execution block karta hai.

**Example:**
\`\`\`js
// Async
fs.readFile("data.txt", "utf8", callback);

// Sync
const data = fs.readFileSync("data.txt", "utf8");
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 10,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'buffers',
    question: `89. What is a Buffer in Node.js?`,
    slug: '89-what-is-a-buffer-in-nodejs',
    answer: `A Buffer is a Node.js object used to work with raw binary data.

Buffers are useful when working with data such as:

- Files
- Network packets
- Images
- Audio
- Video
- Binary protocols

A Buffer represents bytes rather than normal JavaScript text.

**Example:**
\`\`\`js
const buffer = Buffer.from("Hello");

console.log(buffer);
console.log(buffer.toString());
\`\`\`

---`,
    explanation: `A Buffer is a Node.js object used to work with raw binary data.

Buffers are useful when working with data such as:

- Files
- Network packets
- Images
- Audio
- Video
- Binary protocols

A Buffer represents bytes rather than normal JavaScript text.

**Example:**
\`\`\`js
const buffer = Buffer.from("Hello");

console.log(buffer);
console.log(buffer.toString());
\`\`\`

---`,
    explanationHindi: `Buffer Node.js mein raw binary data ke saath kaam karne ke liye use hota hai.

Images, files, audio, video aur network data jaise binary data ko handle karte waqt Buffer useful hota hai.

**Example:**
\`\`\`js
const buffer = Buffer.from("Hello");

console.log(buffer);
console.log(buffer.toString());
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 11,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'buffers',
    question: `90. Why are Buffers needed in Node.js?`,
    slug: '90-why-are-buffers-needed-in-nodejs',
    answer: `JavaScript strings are designed for text, but servers often need to handle raw binary data.

Buffers provide an efficient way to store and process bytes directly. Node.js uses them extensively in file systems, streams, networking, and other low-level operations.

**Example:**
When a user uploads an image:

\`\`\`text
Image
  ↓
Binary data
  ↓
Buffer / Stream
  ↓
Storage
\`\`\`

For large files, Streams can be preferable to keeping the entire file in memory at once.`,
    explanation: `JavaScript strings are designed for text, but servers often need to handle raw binary data.

Buffers provide an efficient way to store and process bytes directly. Node.js uses them extensively in file systems, streams, networking, and other low-level operations.

**Example:**
When a user uploads an image:

\`\`\`text
Image
  ↓
Binary data
  ↓
Buffer / Stream
  ↓
Storage
\`\`\`

For large files, Streams can be preferable to keeping the entire file in memory at once.`,
    explanationHindi: `JavaScript strings mainly text ke liye hoti hain, lekin backend applications ko raw binary data bhi handle karna padta hai.

Buffer bytes ko directly represent aur process karne ka way provide karta hai.

**Example:**
When a user uploads an image:

\`\`\`text
Image
  ↓
Binary data
  ↓
Buffer / Stream
  ↓
Storage
\`\`\`

For large files, Streams can be preferable to keeping the entire file in memory at once.`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 12,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'buffers',
    question: `91. What are Streams in Node.js?`,
    slug: '91-what-are-streams-in-nodejs',
    answer: `Streams are a way to process data piece by piece instead of loading the complete data into memory at once.

They are especially useful for large files, videos, network data, and other continuous data.

**Example:**
\`\`\`js
const fs = require("fs");

const stream = fs.createReadStream("large-video.mp4");

stream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.length);
});
\`\`\`

---`,
    explanation: `Streams are a way to process data piece by piece instead of loading the complete data into memory at once.

They are especially useful for large files, videos, network data, and other continuous data.

**Example:**
\`\`\`js
const fs = require("fs");

const stream = fs.createReadStream("large-video.mp4");

stream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.length);
});
\`\`\`

---`,
    explanationHindi: `Streams data ko ek saath complete memory mein load karne ke bajay piece by piece process karne ka way hai.

Large files, videos, network data aur continuous data ke liye Streams bahut useful hain.

**Example:**
\`\`\`js
const fs = require("fs");

const stream = fs.createReadStream("large-video.mp4");

stream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.length);
});
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 13,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'http',
    question: `92. What are the different types of Streams?`,
    slug: '92-what-are-the-different-types-of-streams',
    answer: `Node.js mainly has four types of Streams:

1. **Readable** — data can be read from it.
2. **Writable** — data can be written to it.
3. **Duplex** — can both read and write.
4. **Transform** — can read data, transform it, and produce output.

**Example:**
\`\`\`text
Readable → Read data
Writable → Write data
Duplex   → Read + Write
Transform → Read + Transform + Write
\`\`\`

---`,
    explanation: `Node.js mainly has four types of Streams:

1. **Readable** — data can be read from it.
2. **Writable** — data can be written to it.
3. **Duplex** — can both read and write.
4. **Transform** — can read data, transform it, and produce output.

**Example:**
\`\`\`text
Readable → Read data
Writable → Write data
Duplex   → Read + Write
Transform → Read + Transform + Write
\`\`\`

---`,
    explanationHindi: `Node.js mein mainly four types ke Streams hote hain:

1. **Readable** — data read karne ke liye.
2. **Writable** — data write karne ke liye.
3. **Duplex** — read aur write dono.
4. **Transform** — data read karke transform karke output deta hai.

**Example:**
\`\`\`text
Readable → Read data
Writable → Write data
Duplex   → Read + Write
Transform → Read + Transform + Write
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 1,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'http',
    question: `93. What is the difference between a Buffer and a Stream?`,
    slug: '93-what-is-the-difference-between-a-buffer-and-a-stream',
    answer: `A Buffer holds a collection of bytes in memory.

A Stream provides a way to process data progressively over time.

For a small piece of binary data, a Buffer can be appropriate. For a large file, using a Stream can prevent the entire file from being loaded into memory.`,
    explanation: `A Buffer holds a collection of bytes in memory.

A Stream provides a way to process data progressively over time.

For a small piece of binary data, a Buffer can be appropriate. For a large file, using a Stream can prevent the entire file from being loaded into memory.`,
    explanationHindi: `Buffer bytes ko memory mein hold karta hai.

Stream data ko gradually process karta hai.

Small data ke liye Buffer useful ho sakta hai, while large files ke liye Stream better approach ho sakta hai because complete file ko memory mein load nahi karna padta.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 2,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'http',
    question: `94. Why should you use Streams when handling large files?`,
    slug: '94-why-should-you-use-streams-when-handling-large-files',
    answer: `If you load a very large file completely into memory, memory usage can become very high.

Streams allow the application to process the file in smaller chunks. This reduces memory pressure and is better for large files.

**Example:**
\`\`\`js
const fs = require("fs");

const input = fs.createReadStream("large.txt");
const output = fs.createWriteStream("copy.txt");

input.pipe(output);
\`\`\`

---`,
    explanation: `If you load a very large file completely into memory, memory usage can become very high.

Streams allow the application to process the file in smaller chunks. This reduces memory pressure and is better for large files.

**Example:**
\`\`\`js
const fs = require("fs");

const input = fs.createReadStream("large.txt");
const output = fs.createWriteStream("copy.txt");

input.pipe(output);
\`\`\`

---`,
    explanationHindi: `Agar hum 2 GB file ko ek saath memory mein load karenge, to bahut zyada memory use ho sakti hai.

Streams file ko chunks mein process karta hai, isliye memory usage comparatively controlled rehta hai.

**Example:**
\`\`\`js
const fs = require("fs");

const input = fs.createReadStream("large.txt");
const output = fs.createWriteStream("copy.txt");

input.pipe(output);
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 3,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'http',
    question: `95. What is backpressure in Node.js Streams?`,
    slug: '95-what-is-backpressure-in-nodejs-streams',
    answer: `Backpressure happens when data is being produced faster than the destination can consume it.

A Stream mechanism can signal that the writable side is full or cannot currently accept more data. Proper Stream handling prevents the producer from overwhelming the consumer.

**Example:**
\`\`\`text
Fast Producer
     ↓
  Too much data
     ↓
Slow Consumer
     ↓
Backpressure
\`\`\`

---`,
    explanation: `Backpressure happens when data is being produced faster than the destination can consume it.

A Stream mechanism can signal that the writable side is full or cannot currently accept more data. Proper Stream handling prevents the producer from overwhelming the consumer.

**Example:**
\`\`\`text
Fast Producer
     ↓
  Too much data
     ↓
Slow Consumer
     ↓
Backpressure
\`\`\`

---`,
    explanationHindi: `Backpressure tab hota hai jab data producer bahut fast data generate kar raha ho aur consumer utni speed se data process nahi kar pa raha ho.

Streams backpressure handling provide karte hain taaki consumer overload na ho.

**Example:**
\`\`\`text
Fast Producer
     ↓
  Too much data
     ↓
Slow Consumer
     ↓
Backpressure
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 4,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'http',
    question: `96. How does .pipe() work in Node.js?`,
    slug: '96-how-does-pipe-work-in-nodejs',
    answer: `\`.pipe()\` connects a readable stream to a writable stream.

It transfers data from the readable stream to the writable stream and handles much of the flow control for you, including backpressure.

**Example:**
\`\`\`js
const fs = require("fs");

fs.createReadStream("input.txt")
  .pipe(fs.createWriteStream("output.txt"));
\`\`\`

---`,
    explanation: `\`.pipe()\` connects a readable stream to a writable stream.

It transfers data from the readable stream to the writable stream and handles much of the flow control for you, including backpressure.

**Example:**
\`\`\`js
const fs = require("fs");

fs.createReadStream("input.txt")
  .pipe(fs.createWriteStream("output.txt"));
\`\`\`

---`,
    explanationHindi: `\`.pipe()\` ek Readable Stream ko Writable Stream se connect karta hai.

Readable se data automatically Writable mein flow hota hai aur Stream flow control bhi manage karne mein help karta hai.

**Example:**
\`\`\`js
const fs = require("fs");

fs.createReadStream("input.txt")
  .pipe(fs.createWriteStream("output.txt"));
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 5,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'http',
    question: `97. What is EventEmitter in Node.js?`,
    slug: '97-what-is-eventemitter-in-nodejs',
    answer: `\`EventEmitter\` is a Node.js class used to create and handle custom events.

An object can emit an event, and other parts of the application can listen for that event.

Node.js itself uses event-driven patterns in many APIs.

**Example:**
\`\`\`js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", (user) => {
  console.log(user.name, "logged in");
});

emitter.emit("login", { name: "Rahul" });
\`\`\`

---`,
    explanation: `\`EventEmitter\` is a Node.js class used to create and handle custom events.

An object can emit an event, and other parts of the application can listen for that event.

Node.js itself uses event-driven patterns in many APIs.

**Example:**
\`\`\`js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", (user) => {
  console.log(user.name, "logged in");
});

emitter.emit("login", { name: "Rahul" });
\`\`\`

---`,
    explanationHindi: `\`EventEmitter\` Node.js ka class hai jiska use custom events create aur handle karne ke liye hota hai.

Ek part event emit kar sakta hai aur doosra part us event ko listen kar sakta hai.

**Example:**
\`\`\`js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", (user) => {
  console.log(user.name, "logged in");
});

emitter.emit("login", { name: "Rahul" });
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 6,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'http',
    question: `98. How do you create and listen to custom events?`,
    slug: '98-how-do-you-create-and-listen-to-custom-events',
    answer: `Create an \`EventEmitter\` instance, register a listener using \`.on()\`, and trigger the event using \`.emit()\`.

**Example:**
\`\`\`js
const EventEmitter = require("events");

const events = new EventEmitter();

events.on("orderCreated", (order) => {
  console.log("Order created:", order.id);
});

events.emit("orderCreated", { id: 101 });
\`\`\`

---`,
    explanation: `Create an \`EventEmitter\` instance, register a listener using \`.on()\`, and trigger the event using \`.emit()\`.

**Example:**
\`\`\`js
const EventEmitter = require("events");

const events = new EventEmitter();

events.on("orderCreated", (order) => {
  console.log("Order created:", order.id);
});

events.emit("orderCreated", { id: 101 });
\`\`\`

---`,
    explanationHindi: `Pehle \`EventEmitter\` ka instance create karte hain. Phir \`.on()\` se event listener register karte hain aur \`.emit()\` se event trigger karte hain.

**Example:**
\`\`\`js
const EventEmitter = require("events");

const events = new EventEmitter();

events.on("orderCreated", (order) => {
  console.log("Order created:", order.id);
});

events.emit("orderCreated", { id: 101 });
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 7,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'http',
    question: `99. What is the difference between on() and once() in EventEmitter?`,
    slug: '99-what-is-the-difference-between-on-and-once-in-eventemitter',
    answer: `\`.on()\` registers a listener that can execute every time the event is emitted.

\`.once()\` registers a listener that executes only the first time the event is emitted and is then automatically removed.

**Example:**
\`\`\`js
emitter.on("message", () => {
  console.log("Runs every time");
});

emitter.once("connected", () => {
  console.log("Runs only once");
});
\`\`\`

---`,
    explanation: `\`.on()\` registers a listener that can execute every time the event is emitted.

\`.once()\` registers a listener that executes only the first time the event is emitted and is then automatically removed.

**Example:**
\`\`\`js
emitter.on("message", () => {
  console.log("Runs every time");
});

emitter.once("connected", () => {
  console.log("Runs only once");
});
\`\`\`

---`,
    explanationHindi: `\`.on()\` listener ko har event emission par execute karta hai.

\`.once()\` listener sirf first time event emit hone par execute hota hai aur uske baad remove ho jata hai.

**Example:**
\`\`\`js
emitter.on("message", () => {
  console.log("Runs every time");
});

emitter.once("connected", () => {
  console.log("Runs only once");
});
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 8,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'http',
    question: `100. What happens if an EventEmitter has too many listeners?`,
    slug: '100-what-happens-if-an-eventemitter-has-too-many-listeners',
    answer: `Node.js has a default warning threshold for listeners on an EventEmitter. Adding many listeners to the same event can produce a \`MaxListenersExceededWarning\`.

The warning does not automatically mean the application has crashed. It can indicate that listeners are being added repeatedly and may point to a memory leak.

The correct solution is to find why listeners are accumulating rather than simply increasing the limit.`,
    explanation: `Node.js has a default warning threshold for listeners on an EventEmitter. Adding many listeners to the same event can produce a \`MaxListenersExceededWarning\`.

The warning does not automatically mean the application has crashed. It can indicate that listeners are being added repeatedly and may point to a memory leak.

The correct solution is to find why listeners are accumulating rather than simply increasing the limit.`,
    explanationHindi: `Agar same EventEmitter par bahut saare listeners add ho rahe hain, Node.js warning de sakta hai.

Ye warning possible memory leak ka signal ho sakti hai, especially agar listeners repeatedly add ho rahe hain aur remove nahi ho rahe.

Sirf listener limit badhana solution nahi hai. Pehle check karna chahiye ki listeners repeatedly add kyun ho rahe hain.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 9,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'http',
    question: `101. How can you create a basic HTTP server using Node.js?`,
    slug: '101-how-can-you-create-a-basic-http-server-using-nodejs',
    answer: `Node.js provides the built-in \`http\` module for creating HTTP servers.

We can create a server, inspect the incoming request, and send a response.

**Example:**
\`\`\`js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({
    message: "Hello World"
  }));
});

server.listen(3000);
\`\`\`

---`,
    explanation: `Node.js provides the built-in \`http\` module for creating HTTP servers.

We can create a server, inspect the incoming request, and send a response.

**Example:**
\`\`\`js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({
    message: "Hello World"
  }));
});

server.listen(3000);
\`\`\`

---`,
    explanationHindi: `Node.js ka built-in \`http\` module basic HTTP server create karne ke liye use hota hai.

**Example:**
\`\`\`js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({
    message: "Hello World"
  }));
});

server.listen(3000);
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 10,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'http',
    question: `102. What is the difference between Node's http module and Express.js?`,
    slug: '102-what-is-the-difference-between-nodes-http-module-and-expressjs',
    answer: `The \`http\` module is built into Node.js and provides lower-level functionality for creating HTTP servers.

Express.js is a framework built around Node.js HTTP capabilities. It provides convenient features such as routing, middleware, request handling, response helpers, and error handling patterns.

**Example:**
Without Express:
\`\`\`js
http.createServer(...)
\`\`\`

With Express:
\`\`\`js
app.get("/users", handler);
\`\`\`

Express large APIs ko organize karna easier bana deta hai.

---`,
    explanation: `The \`http\` module is built into Node.js and provides lower-level functionality for creating HTTP servers.

Express.js is a framework built around Node.js HTTP capabilities. It provides convenient features such as routing, middleware, request handling, response helpers, and error handling patterns.

**Example:**
Without Express:
\`\`\`js
http.createServer(...)
\`\`\`

With Express:
\`\`\`js
app.get("/users", handler);
\`\`\`

Express large APIs ko organize karna easier bana deta hai.

---`,
    explanationHindi: `\`http\` Node.js ka built-in low-level module hai.

Express.js Node.js ke upar ek framework hai jo routing, middleware, request/response handling aur error handling ko easier banata hai.

**Example:**
Without Express:
\`\`\`js
http.createServer(...)
\`\`\`

With Express:
\`\`\`js
app.get("/users", handler);
\`\`\`

Express large APIs ko organize karna easier bana deta hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 11,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'http',
    question: `103. How does Node.js handle incoming HTTP requests and responses?`,
    slug: '103-how-does-nodejs-handle-incoming-http-requests-and-responses',
    answer: `An HTTP server receives a request containing information such as the method, URL, headers, and body.

Node.js provides request and response objects. The application processes the request and eventually sends a response with a status code, headers, and body.

**Example:**
\`\`\`js
const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);

  res.statusCode = 200;
  res.end("OK");
});
\`\`\`

---`,
    explanation: `An HTTP server receives a request containing information such as the method, URL, headers, and body.

Node.js provides request and response objects. The application processes the request and eventually sends a response with a status code, headers, and body.

**Example:**
\`\`\`js
const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);

  res.statusCode = 200;
  res.end("OK");
});
\`\`\`

---`,
    explanationHindi: `Jab HTTP request server par aati hai, usmein method, URL, headers aur body jaise data hote hain.

Node.js request aur response objects provide karta hai. Server request process karke status code, headers aur response body send karta hai.

**Example:**
\`\`\`js
const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);

  res.statusCode = 200;
  res.end("OK");
});
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 12,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'http',
    question: `104. What is Express.js, and why is it commonly used with Node.js?`,
    slug: '104-what-is-expressjs-and-why-is-it-commonly-used-with-nodejs',
    answer: `Express.js is a lightweight web framework for Node.js.

It simplifies backend development by providing routing, middleware, request/response helpers, and a structured way to build APIs.

**Example:**
\`\`\`js
const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.json({ message: "Users API" });
});

app.listen(3000);
\`\`\`

---`,
    explanation: `Express.js is a lightweight web framework for Node.js.

It simplifies backend development by providing routing, middleware, request/response helpers, and a structured way to build APIs.

**Example:**
\`\`\`js
const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.json({ message: "Users API" });
});

app.listen(3000);
\`\`\`

---`,
    explanationHindi: `Express.js Node.js ke liye ek lightweight web framework hai.

Ye routing, middleware, API handling aur request/response management ko easy banata hai.

**Example:**
\`\`\`js
const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.json({ message: "Users API" });
});

app.listen(3000);
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 13,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'error-handling',
    question: `105. What is middleware in Express.js?`,
    slug: '105-what-is-middleware-in-expressjs',
    answer: `Middleware is a function that runs during the request-response lifecycle.

It can inspect or modify the request, modify the response, perform authentication, logging, validation, or pass control to the next middleware.

Middleware normally receives:

\`\`\`js
(req, res, next)
\`\`\`

**Example:**
\`\`\`js
const auth = (req, res, next) => {
  console.log("Checking authentication");
  next();
};

app.use(auth);
\`\`\`

---`,
    explanation: `Middleware is a function that runs during the request-response lifecycle.

It can inspect or modify the request, modify the response, perform authentication, logging, validation, or pass control to the next middleware.

Middleware normally receives:

\`\`\`js
(req, res, next)
\`\`\`

**Example:**
\`\`\`js
const auth = (req, res, next) => {
  console.log("Checking authentication");
  next();
};

app.use(auth);
\`\`\`

---`,
    explanationHindi: `Express middleware ek function hota hai jo request aur response ke beech execute hota hai.

Iska use authentication, logging, validation, request modification aur other common logic ke liye hota hai.

**Example:**
\`\`\`js
const auth = (req, res, next) => {
  console.log("Checking authentication");
  next();
};

app.use(auth);
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 1,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'error-handling',
    question: `106. How does the Express middleware pipeline work?`,
    slug: '106-how-does-the-express-middleware-pipeline-work',
    answer: `Express processes middleware in the order in which it is registered.

A middleware can:

- End the request
- Modify request/response
- Call \`next()\` to continue
- Pass an error to \`next(error)\`

If middleware does not call \`next()\` and does not send a response, the request may remain hanging.

**Example:**
\`\`\`js
app.use(logger);
app.use(auth);
app.use(validate);

app.get("/users", controller);
\`\`\`

Execution generally:
\`\`\`text
logger → auth → validate → controller
\`\`\`

---`,
    explanation: `Express processes middleware in the order in which it is registered.

A middleware can:

- End the request
- Modify request/response
- Call \`next()\` to continue
- Pass an error to \`next(error)\`

If middleware does not call \`next()\` and does not send a response, the request may remain hanging.

**Example:**
\`\`\`js
app.use(logger);
app.use(auth);
app.use(validate);

app.get("/users", controller);
\`\`\`

Execution generally:
\`\`\`text
logger → auth → validate → controller
\`\`\`

---`,
    explanationHindi: `Express middleware ko registration ke order mein execute karta hai.

Middleware response send kar sakta hai, request modify kar sakta hai, ya \`next()\` call karke next middleware ko control de sakta hai.

**Example:**
\`\`\`js
app.use(logger);
app.use(auth);
app.use(validate);

app.get("/users", controller);
\`\`\`

Execution generally:
\`\`\`text
logger → auth → validate → controller
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 2,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'error-handling',
    question: `107. What is the difference between application-level and router-level middleware?`,
    slug: '107-what-is-the-difference-between-application-level-and-router-level-middleware',
    answer: `Application-level middleware is attached to the main Express application using \`app.use()\` or similar methods.

Router-level middleware is attached to a specific Express Router. It is useful when middleware should apply only to a group of related routes.

**Example:**
\`\`\`js
app.use(globalLogger);

const userRouter = express.Router();

userRouter.use(auth);

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
\`\`\`

Yahan \`auth\` sirf user router ke routes par apply ho sakta hai.

---`,
    explanation: `Application-level middleware is attached to the main Express application using \`app.use()\` or similar methods.

Router-level middleware is attached to a specific Express Router. It is useful when middleware should apply only to a group of related routes.

**Example:**
\`\`\`js
app.use(globalLogger);

const userRouter = express.Router();

userRouter.use(auth);

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
\`\`\`

Yahan \`auth\` sirf user router ke routes par apply ho sakta hai.

---`,
    explanationHindi: `Application-level middleware poori Express application ya broad route scope par apply kiya ja sakta hai.

Router-level middleware kisi particular router ya routes ke group par apply hota hai.

**Example:**
\`\`\`js
app.use(globalLogger);

const userRouter = express.Router();

userRouter.use(auth);

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
\`\`\`

Yahan \`auth\` sirf user router ke routes par apply ho sakta hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 3,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'error-handling',
    question: `108. What is the difference between app.use() and app.get()?`,
    slug: '108-what-is-the-difference-between-appuse-and-appget',
    answer: `\`app.use()\` is mainly used to register middleware or mount routers. It can apply to multiple HTTP methods depending on how it is configured.

\`app.get()\` specifically handles GET requests for a route.

**Example:**
\`\`\`js
app.use(express.json());

app.get("/users", (req, res) => {
  res.json([]);
});
\`\`\`

---`,
    explanation: `\`app.use()\` is mainly used to register middleware or mount routers. It can apply to multiple HTTP methods depending on how it is configured.

\`app.get()\` specifically handles GET requests for a route.

**Example:**
\`\`\`js
app.use(express.json());

app.get("/users", (req, res) => {
  res.json([]);
});
\`\`\`

---`,
    explanationHindi: `\`app.use()\` middleware ya router mount karne ke liye commonly use hota hai.

\`app.get()\` specifically GET request ke route handler ke liye use hota hai.

**Example:**
\`\`\`js
app.use(express.json());

app.get("/users", (req, res) => {
  res.json([]);
});
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 4,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'error-handling',
    question: `109. How do you create routes in Express.js?`,
    slug: '109-how-do-you-create-routes-in-expressjs',
    answer: `Express provides methods such as \`get()\`, \`post()\`, \`put()\`, \`patch()\`, and \`delete()\` to define routes.

Routes can also be organized using \`express.Router()\`.

**Example:**
\`\`\`js
app.get("/users", getUsers);
app.post("/users", createUser);
app.patch("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);
\`\`\`

---`,
    explanation: `Express provides methods such as \`get()\`, \`post()\`, \`put()\`, \`patch()\`, and \`delete()\` to define routes.

Routes can also be organized using \`express.Router()\`.

**Example:**
\`\`\`js
app.get("/users", getUsers);
app.post("/users", createUser);
app.patch("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);
\`\`\`

---`,
    explanationHindi: `Express mein HTTP methods ke according routes create karte hain:

\`\`\`js
app.get()
app.post()
app.put()
app.patch()
app.delete()
\`\`\`

Large applications mein \`express.Router()\` use karke routes ko separate files mein organize karna better hota hai.

**Example:**
\`\`\`js
app.get("/users", getUsers);
app.post("/users", createUser);
app.patch("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 5,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'error-handling',
    question: `110. What is route parameter vs query parameter?`,
    slug: '110-what-is-route-parameter-vs-query-parameter',
    answer: `A route parameter is part of the URL path and usually identifies a specific resource.

A query parameter is added after \`?\` and is commonly used for filtering, sorting, searching, or pagination.

**Example:**
\`\`\`text
/users/123
\`\`\`

Here \`123\` can be a route parameter.

\`\`\`text
/users?page=2&limit=20
\`\`\`

Here \`page\` and \`limit\` are query parameters.

Express:
\`\`\`js
req.params.id
req.query.page
\`\`\`

---`,
    explanation: `A route parameter is part of the URL path and usually identifies a specific resource.

A query parameter is added after \`?\` and is commonly used for filtering, sorting, searching, or pagination.

**Example:**
\`\`\`text
/users/123
\`\`\`

Here \`123\` can be a route parameter.

\`\`\`text
/users?page=2&limit=20
\`\`\`

Here \`page\` and \`limit\` are query parameters.

Express:
\`\`\`js
req.params.id
req.query.page
\`\`\`

---`,
    explanationHindi: `Route parameter URL ka part hota hai aur usually specific resource identify karta hai.

Query parameter \`?\` ke baad aata hai aur filtering, search, sorting, pagination ke liye commonly use hota hai.

**Example:**
\`\`\`text
/users/123
\`\`\`

Here \`123\` can be a route parameter.

\`\`\`text
/users?page=2&limit=20
\`\`\`

Here \`page\` and \`limit\` are query parameters.

Express:
\`\`\`js
req.params.id
req.query.page
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 6,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'error-handling',
    question: `111. How do you handle request body data in Express?`,
    slug: '111-how-do-you-handle-request-body-data-in-express',
    answer: `For JSON request bodies, Express provides the \`express.json()\` middleware.

It parses JSON payloads and makes the parsed data available through \`req.body\`.

**Example:**
\`\`\`js
app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
\`\`\`

Request:
\`\`\`json
{
  "name": "Rahul",
  "age": 25
}
\`\`\`

---`,
    explanation: `For JSON request bodies, Express provides the \`express.json()\` middleware.

It parses JSON payloads and makes the parsed data available through \`req.body\`.

**Example:**
\`\`\`js
app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
\`\`\`

Request:
\`\`\`json
{
  "name": "Rahul",
  "age": 25
}
\`\`\`

---`,
    explanationHindi: `JSON request body ko read karne ke liye Express mein \`express.json()\` middleware use karte hain.

Iske baad request data \`req.body\` mein milta hai.

**Example:**
\`\`\`js
app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
\`\`\`

Request:
\`\`\`json
{
  "name": "Rahul",
  "age": 25
}
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 7,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'error-handling',
    question: `112. What is the purpose of express.json()?`,
    slug: '112-what-is-the-purpose-of-expressjson',
    answer: `\`express.json()\` is built-in Express middleware that parses incoming requests containing JSON payloads.

After parsing, the data is available through \`req.body\`.

**Example:**
\`\`\`js
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  res.json({ email });
});
\`\`\`

Without the appropriate body-parsing middleware, \`req.body\` may not contain the expected parsed JSON data.

---`,
    explanation: `\`express.json()\` is built-in Express middleware that parses incoming requests containing JSON payloads.

After parsing, the data is available through \`req.body\`.

**Example:**
\`\`\`js
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  res.json({ email });
});
\`\`\`

Without the appropriate body-parsing middleware, \`req.body\` may not contain the expected parsed JSON data.

---`,
    explanationHindi: `\`express.json()\` incoming JSON request body ko parse karta hai aur parsed data ko \`req.body\` mein available karta hai.

**Example:**
\`\`\`js
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  res.json({ email });
});
\`\`\`

Without the appropriate body-parsing middleware, \`req.body\` may not contain the expected parsed JSON data.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 8,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'error-handling',
    question: `113. How do you create custom middleware in Express?`,
    slug: '113-how-do-you-create-custom-middleware-in-express',
    answer: `A custom middleware is simply a function that receives \`req\`, \`res\`, and \`next\`.

It can perform some logic and call \`next()\` to continue.

**Example:**
\`\`\`js
const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

app.use(logger);
\`\`\`

---`,
    explanation: `A custom middleware is simply a function that receives \`req\`, \`res\`, and \`next\`.

It can perform some logic and call \`next()\` to continue.

**Example:**
\`\`\`js
const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

app.use(logger);
\`\`\`

---`,
    explanationHindi: `Custom middleware ek function hota hai jo normally \`req\`, \`res\`, aur \`next\` receive karta hai.

Logic perform karne ke baad \`next()\` call karke next middleware/controller ko control diya jata hai.

**Example:**
\`\`\`js
const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

app.use(logger);
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 9,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'error-handling',
    question: `114. How does error-handling middleware work in Express?`,
    slug: '114-how-does-error-handling-middleware-work-in-express',
    answer: `Express error-handling middleware has four parameters:

\`\`\`js
(err, req, res, next)
\`\`\`

When a middleware or route passes an error to \`next(error)\`, Express can route it to the error handler.

A centralized error handler helps keep API error responses consistent.

**Example:**
\`\`\`js
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: "Internal server error"
  });
});
\`\`\`

---`,
    explanation: `Express error-handling middleware has four parameters:

\`\`\`js
(err, req, res, next)
\`\`\`

When a middleware or route passes an error to \`next(error)\`, Express can route it to the error handler.

A centralized error handler helps keep API error responses consistent.

**Example:**
\`\`\`js
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: "Internal server error"
  });
});
\`\`\`

---`,
    explanationHindi: `Express ka error-handling middleware four parameters leta hai:

\`\`\`js
(err, req, res, next)
\`\`\`

Agar route ya middleware \`next(error)\` call karta hai, to error centralized error handler tak ja sakta hai.

**Example:**
\`\`\`js
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: "Internal server error"
  });
});
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 10,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'error-handling',
    question: `115. What is the correct order of middleware execution in Express?`,
    slug: '115-what-is-the-correct-order-of-middleware-execution-in-express',
    answer: `Express generally executes middleware in the order it is registered.

A common API structure can be:

\`\`\`text
Request
 ↓
Security / CORS
 ↓
Body parser
 ↓
Logger
 ↓
Authentication
 ↓
Validation
 ↓
Controller
 ↓
Error handler
\`\`\`

The exact order depends on the application's requirements.

**Example:**
\`\`\`js
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/users", auth, userRoutes);

app.use(errorHandler);
\`\`\`

Error handler ko generally routes/middleware ke baad register kiya jata hai.

---`,
    explanation: `Express generally executes middleware in the order it is registered.

A common API structure can be:

\`\`\`text
Request
 ↓
Security / CORS
 ↓
Body parser
 ↓
Logger
 ↓
Authentication
 ↓
Validation
 ↓
Controller
 ↓
Error handler
\`\`\`

The exact order depends on the application's requirements.

**Example:**
\`\`\`js
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/users", auth, userRoutes);

app.use(errorHandler);
\`\`\`

Error handler ko generally routes/middleware ke baad register kiya jata hai.

---`,
    explanationHindi: `Express middleware registration ke order mein execute hota hai.

Isliye middleware ka order important hai.

**Example:**
\`\`\`js
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/users", auth, userRoutes);

app.use(errorHandler);
\`\`\`

Error handler ko generally routes/middleware ke baad register kiya jata hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 11,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'error-handling',
    question: `116. How would you organize a large Express.js project?`,
    slug: '116-how-would-you-organize-a-large-expressjs-project',
    answer: `For a large application, I would separate responsibilities instead of keeping everything inside route files.

A common structure is:

\`\`\`text
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
\`\`\`

Routes define endpoints, controllers handle HTTP-level logic, services contain business logic, and models handle database-related concerns.`,
    explanation: `For a large application, I would separate responsibilities instead of keeping everything inside route files.

A common structure is:

\`\`\`text
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
\`\`\`

Routes define endpoints, controllers handle HTTP-level logic, services contain business logic, and models handle database-related concerns.`,
    explanationHindi: `Large Express project mein saara code ek hi route file mein nahi rakhna chahiye.

Responsibilities separate karna better hai:

\`\`\`text
routes → endpoints
controllers → request/response handling
services → business logic
models → database
middleware → common request logic
validators → validation
config → configuration
\`\`\`

Isse project maintain aur test karna easier hota hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 12,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'error-handling',
    question: `117. What makes an API RESTful?`,
    slug: '117-what-makes-an-api-restful',
    answer: `A RESTful API generally models resources and uses standard HTTP methods and status codes.

For example:

\`\`\`text
GET    /users
GET    /users/123
POST   /users
PATCH  /users/123
DELETE /users/123
\`\`\`

A REST API should use predictable resource-oriented URLs, appropriate HTTP methods, meaningful status codes, and stateless request handling.`,
    explanation: `A RESTful API generally models resources and uses standard HTTP methods and status codes.

For example:

\`\`\`text
GET    /users
GET    /users/123
POST   /users
PATCH  /users/123
DELETE /users/123
\`\`\`

A REST API should use predictable resource-oriented URLs, appropriate HTTP methods, meaningful status codes, and stateless request handling.`,
    explanationHindi: `RESTful API mein resources ko clearly represent kiya jata hai aur standard HTTP methods use kiye jate hain.

Example:

\`\`\`text
GET    /users
POST   /users
PATCH  /users/123
DELETE /users/123
\`\`\`

API predictable aur consistent honi chahiye.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 13,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'performance',
    question: `118. What is the difference between GET, POST, PUT, PATCH, and DELETE?`,
    slug: '118-what-is-the-difference-between-get-post-put-patch-and-delete',
    answer: `- **GET** → retrieve data
- **POST** → create a resource or perform a non-idempotent operation
- **PUT** → replace/update a resource representation
- **PATCH** → partially update a resource
- **DELETE** → remove a resource

**Example:**
\`\`\`text
GET    /users/10
POST   /users
PUT    /users/10
PATCH  /users/10
DELETE /users/10
\`\`\`

---`,
    explanation: `- **GET** → retrieve data
- **POST** → create a resource or perform a non-idempotent operation
- **PUT** → replace/update a resource representation
- **PATCH** → partially update a resource
- **DELETE** → remove a resource

**Example:**
\`\`\`text
GET    /users/10
POST   /users
PUT    /users/10
PATCH  /users/10
DELETE /users/10
\`\`\`

---`,
    explanationHindi: `- **GET** → data lene ke liye
- **POST** → new resource create karne ke liye
- **PUT** → resource ko replace/update karne ke liye
- **PATCH** → resource ke kuch fields update karne ke liye
- **DELETE** → resource delete karne ke liye

**Example:**
\`\`\`text
GET    /users/10
POST   /users
PUT    /users/10
PATCH  /users/10
DELETE /users/10
\`\`\`

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 1,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'performance',
    question: `119. What is the difference between PUT and PATCH?`,
    slug: '119-what-is-the-difference-between-put-and-patch',
    answer: `\`PUT\` is generally used when the client sends a complete replacement representation of a resource.

\`PATCH\` is used for a partial modification.

In real applications, the exact API contract matters, but this is the common distinction.

**Example:**
Existing user:
\`\`\`json
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "age": 25
}
\`\`\`

PATCH:
\`\`\`json
{
  "age": 26
}
\`\`\`

Yahan sirf \`age\` update karna partial update hai.

---`,
    explanation: `\`PUT\` is generally used when the client sends a complete replacement representation of a resource.

\`PATCH\` is used for a partial modification.

In real applications, the exact API contract matters, but this is the common distinction.

**Example:**
Existing user:
\`\`\`json
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "age": 25
}
\`\`\`

PATCH:
\`\`\`json
{
  "age": 26
}
\`\`\`

Yahan sirf \`age\` update karna partial update hai.

---`,
    explanationHindi: `\`PUT\` generally complete resource representation ko replace/update karne ke liye use hota hai.

\`PATCH\` sirf required fields ko partially update karne ke liye use hota hai.

**Example:**
Existing user:
\`\`\`json
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "age": 25
}
\`\`\`

PATCH:
\`\`\`json
{
  "age": 26
}
\`\`\`

Yahan sirf \`age\` update karna partial update hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 2,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'performance',
    question: `120. What HTTP status codes do you commonly use in a REST API?`,
    slug: '120-what-http-status-codes-do-you-commonly-use-in-a-rest-api',
    answer: `Common status codes include:

- \`200 OK\` — successful request
- \`201 Created\` — resource created
- \`204 No Content\` — successful request with no response body
- \`400 Bad Request\` — invalid request
- \`401 Unauthorized\` — authentication is required or invalid
- \`403 Forbidden\` — authenticated but not allowed
- \`404 Not Found\` — resource not found
- \`409 Conflict\` — request conflicts with current resource state
- \`422 Unprocessable Content\` — request is syntactically valid but validation/business rules reject it
- \`500 Internal Server Error\` — unexpected server-side failure`,
    explanation: `Common status codes include:

- \`200 OK\` — successful request
- \`201 Created\` — resource created
- \`204 No Content\` — successful request with no response body
- \`400 Bad Request\` — invalid request
- \`401 Unauthorized\` — authentication is required or invalid
- \`403 Forbidden\` — authenticated but not allowed
- \`404 Not Found\` — resource not found
- \`409 Conflict\` — request conflicts with current resource state
- \`422 Unprocessable Content\` — request is syntactically valid but validation/business rules reject it
- \`500 Internal Server Error\` — unexpected server-side failure`,
    explanationHindi: `API mein commonly:

\`\`\`text
200 → success
201 → resource created
204 → success, no body
400 → invalid request
401 → authentication problem
403 → permission problem
404 → resource nahi mila
409 → conflict
422 → validation/business rule failure
500 → server error
\`\`\`

Correct status code frontend ko response samajhne mein help karta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 3,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'performance',
    question: `121. How do you design a clean REST API?`,
    slug: '121-how-do-you-design-a-clean-rest-api',
    answer: `A clean REST API should have:

- Clear resource-based URLs
- Consistent HTTP methods
- Meaningful status codes
- Consistent response format
- Validation
- Authentication/authorization where needed
- Pagination for large collections
- Proper error handling
- API versioning when appropriate

**Example:**
Instead of:
\`\`\`text
GET /getAllUsers
\`\`\`

A resource-oriented style can be:
\`\`\`text
GET /users
\`\`\`

---`,
    explanation: `A clean REST API should have:

- Clear resource-based URLs
- Consistent HTTP methods
- Meaningful status codes
- Consistent response format
- Validation
- Authentication/authorization where needed
- Pagination for large collections
- Proper error handling
- API versioning when appropriate

**Example:**
Instead of:
\`\`\`text
GET /getAllUsers
\`\`\`

A resource-oriented style can be:
\`\`\`text
GET /users
\`\`\`

---`,
    explanationHindi: `Clean REST API ke liye:

- Clear URLs
- Correct HTTP methods
- Meaningful status codes
- Consistent response format
- Validation
- Authentication/authorization
- Pagination
- Centralized error handling

use karna important hai.

**Example:**
Instead of:
\`\`\`text
GET /getAllUsers
\`\`\`

A resource-oriented style can be:
\`\`\`text
GET /users
\`\`\`

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 4,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'performance',
    question: `122. How do you validate incoming API data?`,
    slug: '122-how-do-you-validate-incoming-api-data',
    answer: `Input validation means checking whether incoming data matches the expected rules before processing it.

Validation can check:

- Required fields
- Data types
- String length
- Email format
- Numeric ranges
- Allowed values
- Business rules

Libraries such as Zod, Joi, or express-validator can be used.

**Example:**
\`\`\`js
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18)
});
\`\`\`

---`,
    explanation: `Input validation means checking whether incoming data matches the expected rules before processing it.

Validation can check:

- Required fields
- Data types
- String length
- Email format
- Numeric ranges
- Allowed values
- Business rules

Libraries such as Zod, Joi, or express-validator can be used.

**Example:**
\`\`\`js
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18)
});
\`\`\`

---`,
    explanationHindi: `API mein incoming data ko process karne se pehle validate karna chahiye.

For example:

\`\`\`text
email → valid format?
age → number?
password → minimum length?
name → required?
\`\`\`

Validation library ya custom validation use ki ja sakti hai.

**Example:**
\`\`\`js
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18)
});
\`\`\`

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 5,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'performance',
    question: `123. Where should validation be performed in a Node.js application?`,
    slug: '123-where-should-validation-be-performed-in-a-nodejs-application',
    answer: `Validation should happen before business logic processes untrusted input.

A common structure is:

\`\`\`text
Request
 ↓
Authentication
 ↓
Validation
 ↓
Controller
 ↓
Service
 ↓
Database
\`\`\`

Business rules can also be enforced in the service/database layer where appropriate. Client-side validation alone is not enough because clients cannot be trusted.`,
    explanation: `Validation should happen before business logic processes untrusted input.

A common structure is:

\`\`\`text
Request
 ↓
Authentication
 ↓
Validation
 ↓
Controller
 ↓
Service
 ↓
Database
\`\`\`

Business rules can also be enforced in the service/database layer where appropriate. Client-side validation alone is not enough because clients cannot be trusted.`,
    explanationHindi: `Validation ko business logic aur database operation se pehle perform karna chahiye.

Common flow:

\`\`\`text
Request
 ↓
Auth
 ↓
Validation
 ↓
Controller
 ↓
Service
 ↓
Database
\`\`\`

Sirf frontend validation par depend nahi karna chahiye because frontend input trusted nahi hota.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 6,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'performance',
    question: `124. How do you handle API errors consistently?`,
    slug: '124-how-do-you-handle-api-errors-consistently',
    answer: `I would use a centralized error-handling approach.

Instead of every controller manually creating different error responses, errors can be passed to a common error handler. The API can then return a consistent structure.

**Example:**
\`\`\`json
{
  "success": false,
  "message": "User not found",
  "code": "USER_NOT_FOUND"
}
\`\`\`

The exact response structure should remain consistent across the API.

---`,
    explanation: `I would use a centralized error-handling approach.

Instead of every controller manually creating different error responses, errors can be passed to a common error handler. The API can then return a consistent structure.

**Example:**
\`\`\`json
{
  "success": false,
  "message": "User not found",
  "code": "USER_NOT_FOUND"
}
\`\`\`

The exact response structure should remain consistent across the API.

---`,
    explanationHindi: `API errors ko consistent rakhne ke liye centralized error handling use karna better hai.

Har controller mein alag-alag error response banane ke bajay common error handler use kar sakte hain.

**Example:**
\`\`\`json
{
  "success": false,
  "message": "User not found",
  "code": "USER_NOT_FOUND"
}
\`\`\`

The exact response structure should remain consistent across the API.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 7,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'performance',
    question: `125. How would you implement centralized error handling in Express?`,
    slug: '125-how-would-you-implement-centralized-error-handling-in-express',
    answer: `I would create an error-handling middleware and make controllers pass errors to it.

A custom error class can also be used for known application errors.

**Example:**
\`\`\`js
app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      throw new Error("User not found");
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message
  });
});
\`\`\`

In a production application, I would distinguish operational/client errors from unexpected internal errors.

---`,
    explanation: `I would create an error-handling middleware and make controllers pass errors to it.

A custom error class can also be used for known application errors.

**Example:**
\`\`\`js
app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      throw new Error("User not found");
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message
  });
});
\`\`\`

In a production application, I would distinguish operational/client errors from unexpected internal errors.

---`,
    explanationHindi: `Main centralized error middleware create karunga aur controllers se errors ko \`next(error)\` ke through us middleware tak bhejunga.

Known application errors ke liye custom error class bhi use kar sakte hain.

**Example:**
\`\`\`js
app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      throw new Error("User not found");
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message
  });
});
\`\`\`

In a production application, I would distinguish operational/client errors from unexpected internal errors.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 8,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'performance',
    question: `126. How do you handle API pagination in Node.js?`,
    slug: '126-how-do-you-handle-api-pagination-in-nodejs',
    answer: `Pagination prevents the API from returning an unnecessarily large dataset in one response.

A common approach is to accept \`page\` and \`limit\`, calculate the offset, and query only the required records.

For very large or frequently changing datasets, cursor-based pagination can be preferable.

**Example:**
\`\`\`js
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 20;

const skip = (page - 1) * limit;

const users = await User.find()
  .skip(skip)
  .limit(limit);
\`\`\`

For very large collections, cursor-based pagination can provide better performance than large offsets.

---`,
    explanation: `Pagination prevents the API from returning an unnecessarily large dataset in one response.

A common approach is to accept \`page\` and \`limit\`, calculate the offset, and query only the required records.

For very large or frequently changing datasets, cursor-based pagination can be preferable.

**Example:**
\`\`\`js
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 20;

const skip = (page - 1) * limit;

const users = await User.find()
  .skip(skip)
  .limit(limit);
\`\`\`

For very large collections, cursor-based pagination can provide better performance than large offsets.

---`,
    explanationHindi: `Pagination ka use large data ko ek hi response mein return karne se bachne ke liye hota hai.

Common approach:

\`\`\`text
page = 2
limit = 20
\`\`\`

Then the API returns only those 20 records.

**Example:**
\`\`\`js
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 20;

const skip = (page - 1) * limit;

const users = await User.find()
  .skip(skip)
  .limit(limit);
\`\`\`

For very large collections, cursor-based pagination can provide better performance than large offsets.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 9,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'performance',
    question: `127. What is authentication vs authorization?`,
    slug: '127-what-is-authentication-vs-authorization',
    answer: `**Authentication** answers: "Who are you?"

**Authorization** answers: "What are you allowed to do?"

For example, logging in with email/password authenticates a user. Checking whether that user can delete another user's account is authorization.

**Example:**
\`\`\`text
Login
 ↓
Authentication
 ↓
User identified
 ↓
Can user access admin route?
 ↓
Authorization
\`\`\`

---`,
    explanation: `**Authentication** answers: "Who are you?"

**Authorization** answers: "What are you allowed to do?"

For example, logging in with email/password authenticates a user. Checking whether that user can delete another user's account is authorization.

**Example:**
\`\`\`text
Login
 ↓
Authentication
 ↓
User identified
 ↓
Can user access admin route?
 ↓
Authorization
\`\`\`

---`,
    explanationHindi: `**Authentication** ka matlab hai user ki identity verify karna.

**Authorization** ka matlab hai verify karna ki authenticated user ko kya permission hai.

**Example:**
\`\`\`text
Login
 ↓
Authentication
 ↓
User identified
 ↓
Can user access admin route?
 ↓
Authorization
\`\`\`

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 10,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'performance',
    question: `128. How does JWT authentication work?`,
    slug: '128-how-does-jwt-authentication-work',
    answer: `JWT-based authentication commonly works like this:

1. User sends login credentials.
2. Server verifies the credentials.
3. Server creates a signed access token.
4. Client sends the token with later requests.
5. Server verifies the token and identifies the user.

JWTs are signed so the server can detect whether the token was modified.

**Example:**
\`\`\`text
Login
 ↓
Credentials verified
 ↓
JWT created
 ↓
Client stores/sends token
 ↓
Authorization middleware verifies JWT
 ↓
Protected route
\`\`\`

---`,
    explanation: `JWT-based authentication commonly works like this:

1. User sends login credentials.
2. Server verifies the credentials.
3. Server creates a signed access token.
4. Client sends the token with later requests.
5. Server verifies the token and identifies the user.

JWTs are signed so the server can detect whether the token was modified.

**Example:**
\`\`\`text
Login
 ↓
Credentials verified
 ↓
JWT created
 ↓
Client stores/sends token
 ↓
Authorization middleware verifies JWT
 ↓
Protected route
\`\`\`

---`,
    explanationHindi: `JWT authentication mein:

1. User login karta hai.
2. Server credentials verify karta hai.
3. Server signed JWT generate karta hai.
4. Client future requests mein token send karta hai.
5. Server token verify karke user ko identify karta hai.

**Example:**
\`\`\`text
Login
 ↓
Credentials verified
 ↓
JWT created
 ↓
Client stores/sends token
 ↓
Authorization middleware verifies JWT
 ↓
Protected route
\`\`\`

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 11,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'performance',
    question: `129. What is the difference between access tokens and refresh tokens?`,
    slug: '129-what-is-the-difference-between-access-tokens-and-refresh-tokens',
    answer: `An access token is normally short-lived and is sent with API requests to access protected resources.

A refresh token is used to obtain a new access token when the access token expires. Refresh tokens are generally longer-lived and should be handled more carefully.

**Example:**
\`\`\`text
Login
 ↓
Access Token + Refresh Token
 ↓
API requests use Access Token
 ↓
Access Token expires
 ↓
Refresh Token
 ↓
New Access Token
\`\`\`

---`,
    explanation: `An access token is normally short-lived and is sent with API requests to access protected resources.

A refresh token is used to obtain a new access token when the access token expires. Refresh tokens are generally longer-lived and should be handled more carefully.

**Example:**
\`\`\`text
Login
 ↓
Access Token + Refresh Token
 ↓
API requests use Access Token
 ↓
Access Token expires
 ↓
Refresh Token
 ↓
New Access Token
\`\`\`

---`,
    explanationHindi: `Access token usually short-lived hota hai aur protected API requests ke liye use hota hai.

Refresh token ka use new access token lene ke liye hota hai jab access token expire ho jata hai.

**Example:**
\`\`\`text
Login
 ↓
Access Token + Refresh Token
 ↓
API requests use Access Token
 ↓
Access Token expires
 ↓
Refresh Token
 ↓
New Access Token
\`\`\`

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 12,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'performance',
    question: `130. Where should you store JWT tokens on the frontend?`,
    slug: '130-where-should-you-store-jwt-tokens-on-the-frontend',
    answer: `There is no single answer for every architecture, but for browser-based applications, storing sensitive long-lived tokens in \`localStorage\` exposes them to JavaScript and therefore increases the impact of an XSS vulnerability.

A common secure approach is to keep sensitive authentication tokens in \`HttpOnly\`, \`Secure\` cookies where appropriate, with suitable CSRF protections.

The final design depends on the application's architecture and threat model.`,
    explanation: `There is no single answer for every architecture, but for browser-based applications, storing sensitive long-lived tokens in \`localStorage\` exposes them to JavaScript and therefore increases the impact of an XSS vulnerability.

A common secure approach is to keep sensitive authentication tokens in \`HttpOnly\`, \`Secure\` cookies where appropriate, with suitable CSRF protections.

The final design depends on the application's architecture and threat model.`,
    explanationHindi: `JWT ko browser mein store karne ka choice security architecture par depend karta hai.

\`localStorage\` mein token JavaScript se accessible hota hai, isliye XSS hone par token theft ka risk ho sakta hai.

Common approach mein sensitive tokens ko \`HttpOnly\` aur \`Secure\` cookies mein rakhna consider kiya jata hai, aur cookie-based authentication ke saath CSRF protection bhi properly handle karna hota hai.

#`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 13,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'advanced-production',
    question: `131. What is the difference between cookies and localStorage for authentication?`,
    slug: '131-what-is-the-difference-between-cookies-and-localstorage-for-authentication',
    answer: `Cookies are automatically included in matching HTTP requests by the browser. \`HttpOnly\` cookies cannot be read directly by client-side JavaScript, which can reduce token exposure to XSS.

\`localStorage\` is accessible to JavaScript, so malicious JavaScript running in the page can potentially read stored tokens.

Cookies introduce their own considerations, especially CSRF, so secure cookie attributes and appropriate CSRF defenses are important.`,
    explanation: `Cookies are automatically included in matching HTTP requests by the browser. \`HttpOnly\` cookies cannot be read directly by client-side JavaScript, which can reduce token exposure to XSS.

\`localStorage\` is accessible to JavaScript, so malicious JavaScript running in the page can potentially read stored tokens.

Cookies introduce their own considerations, especially CSRF, so secure cookie attributes and appropriate CSRF defenses are important.`,
    explanationHindi: `Cookies browser ke matching requests ke saath automatically send ho sakti hain. \`HttpOnly\` cookie ko client-side JavaScript directly read nahi kar sakta.

\`localStorage\` JavaScript se directly accessible hota hai, isliye XSS attack ke case mein stored token expose ho sakta hai.

Cookie use karte waqt CSRF protection aur secure cookie settings ka dhyan rakhna chahiye.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 1,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'advanced-production',
    question: `132. What is CORS, and why does it happen?`,
    slug: '132-what-is-cors-and-why-does-it-happen',
    answer: `CORS stands for Cross-Origin Resource Sharing.

Browsers enforce the same-origin policy. When a frontend from one origin tries to access a resource from another origin, the server needs to provide appropriate CORS headers to allow the browser to make the request.

**Example:**
\`\`\`text
Frontend:
http://localhost:5173

Backend:
http://localhost:5000
\`\`\`

Ye different origins hain, so CORS configuration may be required.

---`,
    explanation: `CORS stands for Cross-Origin Resource Sharing.

Browsers enforce the same-origin policy. When a frontend from one origin tries to access a resource from another origin, the server needs to provide appropriate CORS headers to allow the browser to make the request.

**Example:**
\`\`\`text
Frontend:
http://localhost:5173

Backend:
http://localhost:5000
\`\`\`

Ye different origins hain, so CORS configuration may be required.

---`,
    explanationHindi: `CORS ka full form Cross-Origin Resource Sharing hai.

Browser security ke according different origins ke beech requests restricted ho sakti hain.

Agar React frontend aur Node.js API different origins par hain, server ko appropriate CORS headers provide karne pad sakte hain.

**Example:**
\`\`\`text
Frontend:
http://localhost:5173

Backend:
http://localhost:5000
\`\`\`

Ye different origins hain, so CORS configuration may be required.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 2,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'advanced-production',
    question: `133. How do you configure CORS securely in Express?`,
    slug: '133-how-do-you-configure-cors-securely-in-express',
    answer: `I would avoid allowing every origin blindly in production.

Instead, I would configure the allowed frontend origins and only enable credentials when required.

**Example:**
\`\`\`js
const cors = require("cors");

app.use(cors({
  origin: ["https://example.com"],
  credentials: true
}));
\`\`\`

The allowed origin list should match the actual application architecture.

---`,
    explanation: `I would avoid allowing every origin blindly in production.

Instead, I would configure the allowed frontend origins and only enable credentials when required.

**Example:**
\`\`\`js
const cors = require("cors");

app.use(cors({
  origin: ["https://example.com"],
  credentials: true
}));
\`\`\`

The allowed origin list should match the actual application architecture.

---`,
    explanationHindi: `Production mein blindly:

\`\`\`js
origin: "*"
\`\`\`

allow karna avoid karna chahiye, especially when credentials/cookies are involved.

Specific trusted origins configure karna better hai.

**Example:**
\`\`\`js
const cors = require("cors");

app.use(cors({
  origin: ["https://example.com"],
  credentials: true
}));
\`\`\`

The allowed origin list should match the actual application architecture.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 3,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'advanced-production',
    question: `134. What is the purpose of Helmet in Express?`,
    slug: '134-what-is-the-purpose-of-helmet-in-express',
    answer: `Helmet is a collection of Express middleware that helps set various HTTP security-related headers.

These headers can reduce exposure to certain common web security risks by giving browsers safer instructions.

Helmet is not a complete security solution. Input validation, authentication, authorization, rate limiting, dependency security, and secure application design are still required.

**Example:**
\`\`\`js
const helmet = require("helmet");

app.use(helmet());
\`\`\`

---`,
    explanation: `Helmet is a collection of Express middleware that helps set various HTTP security-related headers.

These headers can reduce exposure to certain common web security risks by giving browsers safer instructions.

Helmet is not a complete security solution. Input validation, authentication, authorization, rate limiting, dependency security, and secure application design are still required.

**Example:**
\`\`\`js
const helmet = require("helmet");

app.use(helmet());
\`\`\`

---`,
    explanationHindi: `Helmet Express application mein different security-related HTTP headers set karne mein help karta hai.

Ye security improve karta hai, lekin sirf Helmet se application fully secure nahi ho jati.

Input validation, authentication, authorization, rate limiting aur other security practices bhi required hain.

**Example:**
\`\`\`js
const helmet = require("helmet");

app.use(helmet());
\`\`\`

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 4,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'advanced-production',
    question: `135. How do you protect a Node.js API from brute-force attacks?`,
    slug: '135-how-do-you-protect-a-nodejs-api-from-brute-force-attacks',
    answer: `Common protections include:

- Rate limiting
- Login attempt limits
- Temporary account/IP throttling
- Strong password policies
- Multi-factor authentication where appropriate
- Monitoring and alerting
- Avoiding overly detailed authentication error messages

For sensitive endpoints such as login and password reset, rate limiting is particularly important.

**Example:**
\`\`\`text
User
 ↓
5 failed login attempts
 ↓
Rate limit / temporary delay
 ↓
Further attempts slowed or blocked
\`\`\`

---`,
    explanation: `Common protections include:

- Rate limiting
- Login attempt limits
- Temporary account/IP throttling
- Strong password policies
- Multi-factor authentication where appropriate
- Monitoring and alerting
- Avoiding overly detailed authentication error messages

For sensitive endpoints such as login and password reset, rate limiting is particularly important.

**Example:**
\`\`\`text
User
 ↓
5 failed login attempts
 ↓
Rate limit / temporary delay
 ↓
Further attempts slowed or blocked
\`\`\`

---`,
    explanationHindi: `Brute-force attacks se bachne ke liye:

- Rate limiting
- Login attempt limits
- Temporary blocking/throttling
- Strong passwords
- MFA where appropriate
- Monitoring

use kiya ja sakta hai.

**Example:**
\`\`\`text
User
 ↓
5 failed login attempts
 ↓
Rate limit / temporary delay
 ↓
Further attempts slowed or blocked
\`\`\`

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 5,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'advanced-production',
    question: `136. How do you prevent SQL/NoSQL injection in a Node.js application?`,
    slug: '136-how-do-you-prevent-sqlnosql-injection-in-a-nodejs-application',
    answer: `Never directly trust user input when constructing database queries.

Use:

- Parameterized queries for SQL
- Safe query APIs/ODM patterns
- Strict input validation
- Allow-lists where appropriate
- Proper authorization
- Avoid unsafe dynamic query construction

For MongoDB/Mongoose, do not blindly merge user-provided objects into query operators or update objects.

**Example:**
Avoid blindly doing:
\`\`\`js
User.find(req.body);
\`\`\`

Instead, explicitly select expected fields:

\`\`\`js
User.find({
  email: req.body.email
});
\`\`\`

---`,
    explanation: `Never directly trust user input when constructing database queries.

Use:

- Parameterized queries for SQL
- Safe query APIs/ODM patterns
- Strict input validation
- Allow-lists where appropriate
- Proper authorization
- Avoid unsafe dynamic query construction

For MongoDB/Mongoose, do not blindly merge user-provided objects into query operators or update objects.

**Example:**
Avoid blindly doing:
\`\`\`js
User.find(req.body);
\`\`\`

Instead, explicitly select expected fields:

\`\`\`js
User.find({
  email: req.body.email
});
\`\`\`

---`,
    explanationHindi: `User input ko directly database query mein trust nahi karna chahiye.

SQL mein parameterized queries use karni chahiye. MongoDB mein safe query patterns, validation aur controlled fields use karne chahiye.

**Example:**
Avoid blindly doing:
\`\`\`js
User.find(req.body);
\`\`\`

Instead, explicitly select expected fields:

\`\`\`js
User.find({
  email: req.body.email
});
\`\`\`

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 6,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'advanced-production',
    question: `137. How do you securely store passwords?`,
    slug: '137-how-do-you-securely-store-passwords',
    answer: `Passwords should never be stored as plain text.

They should be hashed using a password-hashing algorithm designed for passwords, such as Argon2 or bcrypt. A unique salt should be used as part of the password-hashing process.

When logging in, hash verification compares the supplied password against the stored hash.

**Example:**
\`\`\`js
const hash = await bcrypt.hash(password, 12);

const isValid = await bcrypt.compare(password, hash);
\`\`\`

Database mein actual password nahi, hash store hota hai.

---`,
    explanation: `Passwords should never be stored as plain text.

They should be hashed using a password-hashing algorithm designed for passwords, such as Argon2 or bcrypt. A unique salt should be used as part of the password-hashing process.

When logging in, hash verification compares the supplied password against the stored hash.

**Example:**
\`\`\`js
const hash = await bcrypt.hash(password, 12);

const isValid = await bcrypt.compare(password, hash);
\`\`\`

Database mein actual password nahi, hash store hota hai.

---`,
    explanationHindi: `Password ko kabhi plain text mein database mein store nahi karna chahiye.

Password hashing algorithm jaise Argon2 ya bcrypt ka use karna chahiye.

**Example:**
\`\`\`js
const hash = await bcrypt.hash(password, 12);

const isValid = await bcrypt.compare(password, hash);
\`\`\`

Database mein actual password nahi, hash store hota hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 7,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'advanced-production',
    question: `138. Why should sensitive information not be stored directly in package.json, source code, or Git?`,
    slug: '138-why-should-sensitive-information-not-be-stored-directly-in-packagejson-source-code-or-git',
    answer: `API keys, database passwords, JWT secrets, and other secrets should not be hard-coded in source code or committed to Git.

Once a secret is committed, it can remain in Git history even after the visible line is removed.

Use environment variables or a proper secrets-management system instead.

**Example:**
Avoid:
\`\`\`js
const DB_PASSWORD = "mySecret123";
\`\`\`

Prefer:
\`\`\`js
const dbPassword = process.env.DB_PASSWORD;
\`\`\`

Production mein proper secrets manager bhi use kiya ja sakta hai.

---`,
    explanation: `API keys, database passwords, JWT secrets, and other secrets should not be hard-coded in source code or committed to Git.

Once a secret is committed, it can remain in Git history even after the visible line is removed.

Use environment variables or a proper secrets-management system instead.

**Example:**
Avoid:
\`\`\`js
const DB_PASSWORD = "mySecret123";
\`\`\`

Prefer:
\`\`\`js
const dbPassword = process.env.DB_PASSWORD;
\`\`\`

Production mein proper secrets manager bhi use kiya ja sakta hai.

---`,
    explanationHindi: `API keys, database passwords, JWT secrets jaise sensitive data source code ya Git repository mein directly store nahi karna chahiye.

Git history mein secret commit hone ke baad delete karne par bhi old history mein reh sakta hai.

**Example:**
Avoid:
\`\`\`js
const DB_PASSWORD = "mySecret123";
\`\`\`

Prefer:
\`\`\`js
const dbPassword = process.env.DB_PASSWORD;
\`\`\`

Production mein proper secrets manager bhi use kiya ja sakta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 8,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'advanced-production',
    question: `139. How do you improve the performance of a Node.js API?`,
    slug: '139-how-do-you-improve-the-performance-of-a-nodejs-api',
    answer: `I would first measure the bottleneck instead of blindly adding optimizations.

Common areas to check:

- Slow database queries
- Missing database indexes
- Excessive API calls
- Large response payloads
- Blocking CPU work
- Unnecessary serialization
- Memory usage
- External API latency
- Caching opportunities
- Pagination
- Connection pooling`,
    explanation: `I would first measure the bottleneck instead of blindly adding optimizations.

Common areas to check:

- Slow database queries
- Missing database indexes
- Excessive API calls
- Large response payloads
- Blocking CPU work
- Unnecessary serialization
- Memory usage
- External API latency
- Caching opportunities
- Pagination
- Connection pooling`,
    explanationHindi: `API performance improve karne se pehle bottleneck identify karna chahiye.

Main check karunga:

\`\`\`text
Database slow?
CPU blocking?
External API slow?
Response too large?
Missing indexes?
Repeated queries?
Memory issue?
\`\`\`

Phir actual bottleneck ke according optimization karunga.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 9,
  },
  {
    technologySlug: 'nodejs',
    topicSlug: 'advanced-production',
    question: `140. How do you identify why a Node.js API is slow?`,
    slug: '140-how-do-you-identify-why-a-nodejs-api-is-slow',
    answer: `I would break the request into parts and measure each one.

For example:

\`\`\`text
Request
 ↓
Middleware time
 ↓
Database query
 ↓
External API
 ↓
Business logic
 ↓
Serialization
 ↓
Response
\`\`\`

Then I would use logs, metrics, tracing, database query analysis, Node.js profiling, and monitoring tools to find the slow section.

The key interview point is: **measure first, then optimize the actual bottleneck.**

**Example:**
If total API time is 5 seconds:

\`\`\`text
DB query       → 4.2 sec
Business logic → 0.1 sec
Response       → 0.2 sec
\`\`\`

To main pehle database bottleneck investigate karunga, Node.js code ko blindly optimize nahi karunga.`,
    explanation: `I would break the request into parts and measure each one.

For example:

\`\`\`text
Request
 ↓
Middleware time
 ↓
Database query
 ↓
External API
 ↓
Business logic
 ↓
Serialization
 ↓
Response
\`\`\`

Then I would use logs, metrics, tracing, database query analysis, Node.js profiling, and monitoring tools to find the slow section.

The key interview point is: **measure first, then optimize the actual bottleneck.**

**Example:**
If total API time is 5 seconds:

\`\`\`text
DB query       → 4.2 sec
Business logic → 0.1 sec
Response       → 0.2 sec
\`\`\`

To main pehle database bottleneck investigate karunga, Node.js code ko blindly optimize nahi karunga.`,
    explanationHindi: `API slow hone par directly code optimize nahi karna chahiye.

Request ke different parts ka time measure karna chahiye:

\`\`\`text
Middleware
 ↓
Database
 ↓
External API
 ↓
Business Logic
 ↓
Response
\`\`\`

Logs, metrics, tracing aur database analysis se bottleneck identify karke targeted optimization karni chahiye.

**Example:**
If total API time is 5 seconds:

\`\`\`text
DB query       → 4.2 sec
Business logic → 0.1 sec
Response       → 0.2 sec
\`\`\`

To main pehle database bottleneck investigate karunga, Node.js code ko blindly optimize nahi karunga.`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["nodejs"],
    order: 10,
  },
];
