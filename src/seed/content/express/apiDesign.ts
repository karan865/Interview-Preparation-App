import { SeedQuestion } from '../types';

export const apiDesignQuestions: SeedQuestion[] = [
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Scenario: Designing Pagination, Filtering, and Sorting for a Large API",
    "question": "How would you design pagination, filtering and sorting for a large API?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "pagination",
      "filtering",
      "sorting",
      "cursor-pagination"
    ],
    "interviewAnswer": "For a large API: 1) Pagination: Use cursor-based (keyset) pagination (?cursor=eyJpZCI6MTIzfQ&limit=50) over offset pagination to guarantee O(1) database index seeks and prevent page drift; 2) Filtering: Use explicit query parameters with operator prefixes (e.g., ?status=active&created_at[gte]=2026-01-01), validating inputs against an allowlist schema; 3) Sorting: Accept comma-delimited fields with prefix notation (?sort=-createdAt,priority), strictly mapped to existing composite database indexes.",
    "answer": "Designing Enterprise-Grade Pagination, Filtering, and Sorting:\n\n1. Cursor-Based Pagination:\nAvoid OFFSET which requires database engines to scan and discard thousands of rows. Instead, encode the sort key into an opaque cursor.\n\n2. Robust Filtering:\n- Map validated query params to database filters using an allowlist schema.\n- Never pass raw req.query into ORM/ODM to prevent injection.\n- Standardize range queries: ?price[gte]=100&price[lte]=500.\n\n3. Dynamic Sorting:\n- Accept ?sort=-createdAt,priority (leading - means descending).\n- Allow only indexed attributes to protect database performance.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "app.get('/orders', validateQuery(OrderQuerySchema), async (req, res) => {\n  const { cursor, limit = 20, sort = '-createdAt', status } = req.query;\n  const { results, nextCursor } = await orderService.list({ cursor, limit, sort, status });\n  res.json({ data: results, pagination: { nextCursor, limit } });\n});"
      }
    ],
    "importantPoints": [
      "Cap maximum limit to prevent unbounded DB queries",
      "Use base64-encoded cursors to encapsulate internal DB schema",
      "Enforce compound indexes matching sort and filter criteria"
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Scenario: Investigating API Response Time Degradation Under Heavy Traffic",
    "question": "API response time increases under heavy traffic. What would you investigate?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "performance",
      "event-loop",
      "bottleneck",
      "debugging"
    ],
    "interviewAnswer": "I would follow a structured 5-layer diagnosis: 1) Event Loop Lag: Check Node.js event loop delay metrics to identify CPU-blocking synchronous operations (JSON parsing, regex, crypto); 2) Database Bottlenecks: Inspect slow queries, missing indexes, and connection pool exhaustion; 3) Memory & GC Pauses: Check for heap growth and frequent full Garbage Collection pauses; 4) Downstream Latency: Profile slow external HTTP/microservice calls lacking timeouts or circuit breakers; 5) Resource Saturation: Check CPU, memory, network bandwidth, and file descriptor limits on the host.",
    "answer": "Step-by-Step Investigation Workflow:\n\n1. Node.js Event Loop Lag:\n- High event loop lag (>50-100ms) means synchronous code is blocking all concurrent requests.\n- Investigate JSON serialization of huge payloads, catastrophic regex backtracking, or synchronous crypto/file ops.\n- Instrument with perf_hooks.monitorEventLoopDelay().\n\n2. Database Pool & Query Performance:\n- Check DB connection pool utilization (pool.activeConnections / pool.max). When pool exhausts, requests queue up.\n- Review slow query logs. Missing composite indexes under concurrency cause CPU spikes.\n\n3. Garbage Collection & Memory Leaks:\n- Frequent GC pauses freeze process execution for hundreds of milliseconds.\n- Monitor process.memoryUsage().heapUsed across worker processes.\n\n4. Downstream Dependencies:\n- Are external APIs or microservices hanging? Without explicit client timeouts, Express request handlers wait indefinitely, consuming sockets and memory.\n\n5. Network & Reverse Proxy (Nginx / ALB):\n- Verify keepalive connections between reverse proxy and Node.js.\n- Check for socket exhaustion (TIME_WAIT sockets).",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "import { monitorEventLoopDelay } from 'perf_hooks';\nconst h = monitorEventLoopDelay({ resolution: 20 });\nh.enable();\nsetInterval(() => {\n  console.log(`Event Loop Lag p99: ${h.percentile(99) / 1e6}ms`);\n  h.reset();\n}, 5000);"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Offset vs Keyset (Cursor-Based) Pagination in High-Volume APIs",
    "question": "What are the key trade-offs between Offset-based and Keyset (Cursor-based) pagination in Express APIs?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "pagination",
      "offset",
      "keyset",
      "cursor"
    ],
    "interviewAnswer": "Offset pagination (OFFSET 100000 LIMIT 20) requires the database to scan and discard 100,000 rows (O(N) cost) and suffers from page-drift when rows are inserted or deleted. Keyset pagination (WHERE id < last_id LIMIT 20) executes an indexed seek (O(log N) cost) and remains consistent during concurrent writes, but cannot jump to an arbitrary page number.",
    "answer": "Detailed Comparison:\n\n1. Offset Pagination (?page=5&limit=20):\n- Pros: Easy to jump to arbitrary pages, easy to calculate total page count.\n- Cons: Performance degrades exponentially as offset increases; phantom reads / duplicates occur if new items are inserted on page 1 while user navigates to page 2.\n\n2. Keyset / Cursor Pagination (?cursor=eyJpZCI6OTk5fQ&limit=20):\n- Pros: Constant O(1) seek time using B-tree indexes; zero duplicate or skipped items during concurrent writes; ideal for infinite scrolling.\n- Cons: Cannot jump to arbitrary page 10; requires sequential traversal.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const query = cursor ? { createdAt: { $lt: cursor.date } } : {};\nconst items = await Post.find(query).sort({ createdAt: -1 }).limit(limit);"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "API Versioning Strategies in Express",
    "question": "What are the common API versioning strategies in Express, and how do you implement URI vs Header versioning?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "versioning",
      "uri-versioning",
      "header-versioning"
    ],
    "interviewAnswer": "The three primary versioning strategies are: 1) URI Path (/api/v1/users), 2) Custom Header (X-API-Version: 2 or Accept: application/vnd.company.v2+json), and 3) Query Parameter (/users?v=2). URI versioning is the most explicit, cache-friendly, and popular across public REST APIs.",
    "answer": "Implementing API Versioning in Express:\n\n1. URI Path Versioning:\n```typescript\nimport v1Router from './routes/v1';\nimport v2Router from './routes/v2';\n\napp.use('/api/v1', v1Router);\napp.use('/api/v2', v2Router);\n```\n\n2. Header / Content Negotiation Versioning:\n```typescript\napp.use('/api/users', (req, res, next) => {\n  const version = req.headers['x-api-version'] || '1';\n  if (version === '2') return v2UsersRouter(req, res, next);\n  return v1UsersRouter(req, res, next);\n});\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "app.use('/api/v1', v1Router);\napp.use('/api/v2', v2Router);"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "RESTful Resource Naming and URI Hierarchy Conventions",
    "question": "What are the core RESTful resource naming conventions and URI hierarchy guidelines for an Express API?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "rest",
      "resource-naming",
      "conventions"
    ],
    "interviewAnswer": "Use plural nouns for collections (/users), IDs for specific entities (/users/:id), and nested sub-resources for owned relationships (/users/:id/orders). Never use verbs in URIs (/getUsers is anti-REST); rely on HTTP methods (GET, POST, PUT, PATCH, DELETE) to express intent.",
    "answer": "RESTful URI Best Practices:\n\n1. Plural Nouns: /api/v1/articles instead of /api/v1/article.\n2. Sub-Resources: Max 2 levels of nesting (e.g. /authors/:authorId/books). Deeper nesting should be flattened.\n3. Avoid Verbs: Use POST /orders instead of /createOrder; DELETE /users/:id instead of /deleteUser.\n4. Actions on Resources: For operations that do not map naturally to CRUD, use verb-like sub-endpoints (e.g. POST /orders/:id/cancel).\n5. Hyphens for Readability: Use kebab-case for multi-word paths (/order-items).",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "app.get('/api/v1/users', listUsers);\napp.post('/api/v1/users', createUser);\napp.get('/api/v1/users/:id', getUser);\napp.patch('/api/v1/users/:id', updateUser);\napp.delete('/api/v1/users/:id', deleteUser);"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "HTTP Method Semantics: PUT vs PATCH in Express",
    "question": "What is the semantic and architectural difference between PUT and PATCH in Express REST APIs?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "http-methods",
      "put",
      "patch",
      "idempotency"
    ],
    "interviewAnswer": "PUT performs complete resource replacement and is idempotent (sending it 10 times results in the same state). Any omitted fields in PUT are replaced or nullified. PATCH performs partial updates, applying changes only to specified fields, and may or may not be idempotent.",
    "answer": "Deep Dive into PUT vs PATCH:\n\n1. PUT (Idempotent Replacement):\n- Expects the complete resource payload.\n- Replaces the existing entity entirely.\n- If the resource doesn't exist, PUT can create it (returning 201 Created).\n\n2. PATCH (Partial Update):\n- Only updates the fields supplied in req.body.\n- Unmentioned fields remain untouched.\n- Express implementation typically uses MongoDB $set or SQL partial update.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "app.put('/users/:id', replaceUser); // Complete replacement\napp.patch('/users/:id', partialUpdateUser); // Partial delta"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Idempotency-Key Pattern in Express Payment Endpoints",
    "question": "How do you implement the Idempotency-Key pattern using Redis in Express mutation and payment endpoints?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "idempotency",
      "redis",
      "payments",
      "transactions"
    ],
    "interviewAnswer": "Clients send a unique Idempotency-Key: <UUID> header on mutation requests (e.g. charge payment). Express checks Redis for this key: if found with a cached response, it immediately returns the cached response; if in-progress, it returns 409 Conflict; if new, it acquires a lock, processes the charge, caches the response with TTL, and returns it.",
    "answer": "Implementing Idempotency in Express:\n\n1. Middleware Flow:\n- Read req.headers['idempotency-key'].\n- Query Redis for key.\n- If cached, return stored status and payload directly.\n- If processing, return 409 Conflict.\n- If empty, write placeholder status processing with atomic SET NX EX 60.\n\n2. Capture Response via monkey-patching res.send / res.json to store completed result in Redis.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "app.post('/api/charges', idempotencyMiddleware, processChargeHandler);"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "RFC 7807 Problem Details Standard in Express Error Responses",
    "question": "Why should an Express API adhere to the RFC 7807 Problem Details standard, and how is it structured?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "rfc-7807",
      "error-format",
      "standards"
    ],
    "interviewAnswer": "RFC 7807 defines a standardized machine-readable JSON format (application/problem+json) for HTTP API errors, featuring type, title, status, detail, and instance. It eliminates inconsistent error shapes across endpoints and microservices.",
    "answer": "RFC 7807 Structure and Implementation:\n\n1. Standard Fields:\n- type: URI identifying the error category.\n- title: Short human-readable summary of problem.\n- status: HTTP status code matching HTTP header.\n- detail: Human-readable explanation specific to this occurrence.\n- instance: URI of the specific request that generated the error.\n\n2. Express Error Handler returns Content-Type: application/problem+json.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "res.status(400).type('application/problem+json').json({\n  type: 'https://api.io/errors/out-of-stock',\n  title: 'Out of Stock',\n  status: 400,\n  detail: 'Item 42 is currently unavailable.',\n  instance: req.originalUrl\n});"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Batch and Bulk API Operations Design in Express",
    "question": "How do you design bulk and batch mutation endpoints in Express for high efficiency without overwhelming system resources?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "batch-operations",
      "bulk-mutation",
      "throughput"
    ],
    "interviewAnswer": "Design dedicated batch endpoints like POST /api/v1/orders/batch accepting an array of operations. Use database bulk operations (e.g., MongoDB bulkWrite or SQL multi-row INSERT), set reasonable size limits (e.g., max 100 items), and return individual success/error statuses for each item (HTTP 207 Multi-Status).",
    "answer": "Bulk Operations Architecture:\n\n1. Enforce Batch Caps:\nValidate req.body.items array length (e.g., min 1, max 100) to prevent memory exhaustion.\n\n2. Atomic vs Partial Execution:\n- Atomic: Wrap in a database transaction (all-or-nothing).\n- Partial: Execute bulk write with { ordered: false } and return HTTP 207 Multi-Status with itemized outcomes.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const result = await Product.bulkWrite(ops, { ordered: false });\nres.json({ updated: result.modifiedCount });"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Soft Delete vs Hard Delete API Semantics in Express",
    "question": "How should soft deletion be implemented in Express REST APIs so that deleted resources behave correctly according to HTTP specifications?",
    "difficulty": "medium",
    "questionType": "Implementation",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "soft-delete",
      "rest-semantics",
      "http-delete"
    ],
    "interviewAnswer": "A soft delete sets a timestamp (deletedAt: Date) instead of removing the row from the database. When a client performs DELETE /users/:id, Express updates deletedAt and returns 204 No Content. Subsequent GET requests must exclude soft-deleted items and return 404 Not Found unless explicitly requested via administrative filters (?includeDeleted=true).",
    "answer": "Soft Deletion API Semantics:\n\n1. DELETE Endpoint returns 204 No Content after setting deletedAt = new Date().\n2. Query Filtering: Add query middleware to auto-inject { deletedAt: null } into find queries.\n3. Restore Endpoint: POST /api/users/:id/restore resets deletedAt to null.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "app.delete('/users/:id', async (req, res) => {\n  const user = await User.findByIdAndUpdate(req.params.id, { deletedAt: new Date() });\n  if (!user) return res.sendStatus(404);\n  res.sendStatus(204);\n});"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Content Negotiation with res.format() in Express",
    "question": "How does Express support Content Negotiation using the Accept header and res.format()?",
    "difficulty": "easy",
    "questionType": "Implementation",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "content-negotiation",
      "res-format",
      "accept-header"
    ],
    "interviewAnswer": "res.format() checks the client's Accept HTTP header and executes the corresponding callback for json, html, text, or csv. If none match, Express automatically returns 406 Not Acceptable.",
    "answer": "Content Negotiation with res.format():\n\nExpress inspects req.headers.accept and invokes the matching handler:\n```typescript\nres.format({\n  'application/json': () => res.json(data),\n  'text/csv': () => res.type('text/csv').send(csvData),\n  default: () => res.sendStatus(406)\n});\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "res.format({\n  'application/json': () => res.json(data),\n  'text/csv': () => res.type('text/csv').send(csvData),\n  default: () => res.sendStatus(406)\n});"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Streaming Large File Downloads in Express with res.attachment()",
    "question": "How do you stream multi-gigabyte file downloads in Express without exhausting Node.js heap memory?",
    "difficulty": "medium",
    "questionType": "Implementation",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "streaming",
      "res-attachment",
      "pipeline",
      "memory"
    ],
    "interviewAnswer": "Never load the entire file into a buffer via fs.readFile. Instead, set res.attachment(filename) to send appropriate Content-Disposition headers and stream the data using stream.pipeline(readStream, res, callback) which respects backpressure and prevents memory spikes.",
    "answer": "Streaming File Downloads:\n\n1. Use res.attachment('export.csv') to set Content-Disposition.\n2. Stream file contents via pipeline(readStream, res, err => ...).\n3. Respects backpressure and consumes fixed ~64KB memory regardless of file size.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "res.attachment('export.csv');\nfs.createReadStream(path).pipe(res);"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Reliable Webhook Delivery Architecture in Express",
    "question": "How should an Express-based webhook delivery system be architected to ensure reliable delivery, retries, and security for consumer servers?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "webhooks",
      "hmac-signature",
      "retries",
      "exponential-backoff"
    ],
    "interviewAnswer": "A webhook delivery architecture requires: 1) HMAC-SHA256 signature in X-Signature-SHA256 computed over the raw payload and shared secret; 2) Asynchronous delivery via background message queues (BullMQ/Redis); 3) Exponential backoff retries; 4) Event timestamp and unique ID (X-Event-ID) for consumer deduplication.",
    "answer": "Webhook Delivery Best Practices:\n\n1. Signing: Use crypto.createHmac('sha256', secret).update(body).digest('hex').\n2. Queueing: Push outbound delivery to BullMQ queue so API endpoints return immediately.\n3. Retries: Retry failed responses (5xx, timeouts) up to 5 times over 24 hours.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const signature = crypto.createHmac('sha256', secret).update(body).digest('hex');\nawait axios.post(targetUrl, body, { headers: { 'X-Signature-256': signature } });"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Asynchronous Long-Running Operations Pattern (HTTP 202 Accepted)",
    "question": "How do you design Express endpoints for long-running operations (like PDF generation or data imports) that take longer than HTTP timeouts allow?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "http-202",
      "async-jobs",
      "polling",
      "worker-queue"
    ],
    "interviewAnswer": "Return HTTP 202 Accepted immediately with a status URL (Location: /api/jobs/:jobId). The long-running task is pushed to a background worker queue. The client polls GET /api/jobs/:jobId until the status reaches completed, at which point the final result or download URL is returned.",
    "answer": "HTTP 202 Pattern:\n\n1. Initiation: POST /api/reports returns 202 Accepted with Location header.\n2. Background Processing: BullMQ worker handles generation.\n3. Polling: Client polls /api/jobs/:id to inspect progress and download link upon completion.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "res.status(202).location(`/api/jobs/${job.id}`).json({ status: 'processing', jobId: job.id });"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "HTTP Caching Headers: ETag, Cache-Control, and 304 Not Modified",
    "question": "How do ETag and Cache-Control headers work in Express to optimize client and proxy caching?",
    "difficulty": "medium",
    "questionType": "Implementation",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "caching",
      "etag",
      "cache-control",
      "304-not-modified"
    ],
    "interviewAnswer": "Express automatically generates ETags (hash of response body) by default. When the client sends If-None-Match: <etag>, Express compares it and sends 304 Not Modified with an empty body if unchanged, saving bandwidth. Cache-Control specifies caching directives (max-age, public, private).",
    "answer": "Caching Headers in Express:\n\n1. Built-in ETag Support generates weak ETags automatically.\n2. Cache-Control directives: Set res.set('Cache-Control', 'public, max-age=3600') for cacheable public assets.\n3. 304 Not Modified returns immediately without payload when client cache is valid.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "res.set('Cache-Control', 'public, max-age=300');\nres.json(data); // Express generates ETag automatically"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "API Deprecation and Sunset Policies with RFC 8594 Headers",
    "question": "How do you signal API endpoint deprecation and upcoming retirement in Express using RFC 8594 standard headers?",
    "difficulty": "medium",
    "questionType": "Implementation",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "deprecation",
      "sunset-header",
      "rfc-8594",
      "api-lifecycle"
    ],
    "interviewAnswer": "Use standard headers: Deprecation: true, Sunset: <HTTP-date> (exact date/time endpoint will be turned off), and Link: <url>; rel=\"sunset\" linking to migration documentation.",
    "answer": "RFC 8594 Deprecation Headers in Express:\n\nMiddleware sets Deprecation: true and Sunset header with the target retirement date, informing API consumers and automated SDK tools ahead of breaking decommissioning.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "res.set('Deprecation', 'true');\nres.set('Sunset', new Date('2027-01-01').toUTCString());\nres.set('Link', '<https://api.io/migration>; rel=\"deprecation\"');"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Rate Limiting Response Headers Standards",
    "question": "What headers should an Express API return when communicating rate limit status to API clients?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "rate-limiting",
      "headers",
      "http-429"
    ],
    "interviewAnswer": "Return standard headers: RateLimit-Limit (total allowed per window), RateLimit-Remaining (remaining requests), and RateLimit-Reset (seconds until window resets). On 429 Too Many Requests, always include Retry-After.",
    "answer": "Standard Rate Limiting Headers:\n\n1. RateLimit-Limit: Total requests permitted.\n2. RateLimit-Remaining: Balance remaining in active window.\n3. RateLimit-Reset: Seconds remaining until reset.\n4. Retry-After: Seconds client must wait before retrying upon 429.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "res.set({\n  'RateLimit-Limit': '100',\n  'RateLimit-Remaining': '0',\n  'RateLimit-Reset': '45',\n  'Retry-After': '45'\n}).status(429).json({ error: 'Rate limit exceeded' });"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Kubernetes Liveness vs Readiness Probes in Express",
    "question": "What is the architectural difference between Kubernetes Liveness and Readiness probes, and how should they be implemented in Express?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "kubernetes",
      "liveness",
      "readiness",
      "health-checks"
    ],
    "interviewAnswer": "Liveness (/health/live) checks if the Node process is running; if it fails, Kubernetes restarts the pod. Readiness (/health/ready) checks if external dependencies (MongoDB, Redis) are ready to accept traffic; if it fails, Kubernetes stops routing incoming network traffic to this pod without restarting it.",
    "answer": "Kubernetes Health Probes:\n\n1. Liveness: Checks process responsiveness (event loop). Never check databases here to avoid cascading reboot loops.\n2. Readiness: Checks database and cache connection status before routing traffic.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "app.get('/health/live', (req, res) => res.sendStatus(200));\napp.get('/health/ready', async (req, res) => {\n  const isConnected = mongoose.connection.readyState === 1;\n  res.sendStatus(isConnected ? 200 : 503);\n});"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Response Compression in Express: Gzip vs Brotli",
    "question": "How do you configure response compression in Express, and what are the trade-offs between Gzip and Brotli?",
    "difficulty": "medium",
    "questionType": "Implementation",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "compression",
      "brotli",
      "gzip",
      "performance"
    ],
    "interviewAnswer": "Using the compression middleware, Express compresses response bodies matching Accept-Encoding: gzip, br. Brotli yields 15-25% smaller payloads than Gzip, but requires HTTPS and is slightly more CPU-intensive. Payloads under 1KB should bypass compression.",
    "answer": "Configuring Compression Middleware:\n\nSet threshold: 1024 to skip small payloads where header overhead exceeds size reduction. In production, offload compression to Nginx or CDN when possible.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "import compression from 'compression';\napp.use(compression({ threshold: 1024 }));"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "HATEOAS and Hypermedia Controls in REST APIs",
    "question": "What is HATEOAS, and how can hypermedia controls be modeled in Express API responses?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "hateoas",
      "hypermedia",
      "rest-levels"
    ],
    "interviewAnswer": "HATEOAS (Hypermedia As The Engine Of Application State) includes a _links object in responses describing valid state transitions (self, cancel, pay), enabling dynamic API navigation.",
    "answer": "HATEOAS implementation in Express returns URLs for subsequent actions along with the resource data.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "res.json({ id: order.id, _links: { self: { href: `/orders/${order.id}` }, cancel: { href: `/orders/${order.id}/cancel` } } });"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Designing Flat vs Deeply Nested REST Endpoints",
    "question": "When should REST endpoints be nested versus kept flat, and what are the best practices for Express routing hierarchy?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "nested-routes",
      "flat-routes",
      "url-design"
    ],
    "interviewAnswer": "Nested endpoints (/departments/:id/employees) are appropriate for dependent sub-resources. Once entities have global IDs, keep endpoints flat (/employees/:id) to prevent brittle, deeply nested URLs. Use query parameters for filtering.",
    "answer": "Flat vs Nested Routing:\n\n1. Nest creation: POST /articles/:articleId/comments.\n2. Flatten detail/mutation: GET /comments/:commentId, DELETE /comments/:commentId.\n3. Avoid URLs deeper than 2 resource segments.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "// Nest creation\napp.post('/articles/:articleId/comments', addComment);\n// Flatten detail and updates\napp.get('/comments/:commentId', getComment);\napp.delete('/comments/:commentId', deleteComment);"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Automated OpenAPI / Swagger Generation in Express (tsoa vs swagger-ui-express)",
    "question": "How do you automate OpenAPI (Swagger) documentation generation from TypeScript Express code to avoid manual drift?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "openapi",
      "swagger",
      "tsoa",
      "documentation"
    ],
    "interviewAnswer": "Manual Swagger specs drift. Code-first generators like tsoa use TypeScript decorators and compiler AST to generate OpenAPI 3.0 specifications and Express route handlers at build time, keeping documentation and runtime validation synchronized.",
    "answer": "Automated OpenAPI with tsoa:\n\n1. Annotate TypeScript controller classes with @Route, @Get, @Post decorators.\n2. Compile tsoa to produce swagger.json.\n3. Serve swagger.json via swagger-ui-express.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Backend for Frontend (BFF) Pattern using Express",
    "question": "What is the Backend for Frontend (BFF) pattern, and how is Express utilized to orchestrate downstream microservices?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "bff",
      "microservices",
      "api-gateway",
      "orchestration"
    ],
    "interviewAnswer": "A BFF is an Express service tailored to a specific client platform (e.g. Mobile vs Web). It aggregates downstream microservices in parallel, filters unnecessary fields, and formats data directly to match UI component requirements.",
    "answer": "BFF Orchestration:\n\n1. Consolidates multiple microservice calls into a single client request.\n2. Executes downstream calls concurrently with Promise.all.\n3. Handles client-specific auth tokens and transforms responses.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const [user, orders] = await Promise.all([fetchUser(id), fetchOrders(id)]);\nres.json({ user, orders });"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Streaming Massive JSON Responses with JSONStream",
    "question": "How do you stream a million database records as a JSON array in Express without hitting the V8 string length limit or exhausting RAM?",
    "difficulty": "hard",
    "questionType": "Implementation",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "streaming",
      "jsonstream",
      "memory-limits",
      "large-payloads"
    ],
    "interviewAnswer": "Standard res.json() buffers all records into memory, hitting V8's string limits. Using a database cursor piped through JSONStream.stringify('[', ',', ']') streams records chunk-by-chunk directly into the HTTP response stream with minimal memory footprint.",
    "answer": "Streaming Massive JSON Records:\n\nPipe Mongoose cursor or PostgreSQL stream into JSONStream.stringify('[', ',', ']') and forward directly to res.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const cursor = Model.find().cursor();\ncursor.pipe(JSONStream.stringify()).pipe(res);"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Distributed Tracing and Correlation ID Propagation (W3C Trace Context)",
    "question": "How do you implement distributed tracing and request correlation ID propagation in an Express API using W3C Trace Context?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "distributed-tracing",
      "traceparent",
      "w3c",
      "correlation-id"
    ],
    "interviewAnswer": "Read incoming traceparent headers (00-{traceId}-{spanId}-{flags}) or generate new ones. Store the trace ID in AsyncLocalStorage or req, set response headers, and forward traceparent to all outbound HTTP requests.",
    "answer": "Trace Context Propagation in Express:\n\n1. Intercept or generate traceparent.\n2. Attach to req.traceparent and res.setHeader('traceparent', ...).\n3. Inject traceparent into downstream HTTP clients (Axios/fetch).",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "res.setHeader('traceparent', req.traceparent);\n// Forward traceparent to downstream Axios client"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "GraphQL vs REST API Trade-offs in Express",
    "question": "What are the architectural trade-offs when choosing between GraphQL and REST in an Express application?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "graphql",
      "rest",
      "trade-offs"
    ],
    "interviewAnswer": "REST offers universal HTTP caching, simple status codes, and standard tooling. GraphQL eliminates over-fetching and allows clients to request exact fields in one request, but complicates caching, introduces N+1 query risks, and makes rate limiting query-complexity-dependent.",
    "answer": "Trade-offs:\n\n1. REST: Native HTTP caching (ETags, CDN), clear endpoint contracts.\n2. GraphQL: Flexible queries, single endpoint, requires DataLoader to prevent N+1 queries.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "// REST: Native HTTP verbs and status codes\napp.get('/users/:id', getUser);\n// GraphQL: Single endpoint, internal schema execution\napp.use('/graphql', createHandler({ schema }));"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Designing Partial Response Field Selection (?fields=id,name)",
    "question": "How do you implement partial response field selection (sparse fieldsets) in an Express API to optimize network payload size?",
    "difficulty": "medium",
    "questionType": "Implementation",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "sparse-fieldsets",
      "payload-optimization",
      "projection"
    ],
    "interviewAnswer": "Accept ?fields=name,email. Validate requested fields against an allowlist, then pass the projection directly to the database query (Model.find({}, projection)) so unneeded fields are never retrieved or serialized.",
    "answer": "Sparse Fieldsets Implementation:\n\nParse ?fields query parameter, validate against allowlist, and pass projection string to database query.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const projection = req.query.fields ? (req.query.fields as string).replace(/,/g, ' ') : '';\nconst users = await User.find().select(projection);"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Managing Breaking API Changes Without Disabling Mobile Clients",
    "question": "How do you manage breaking changes in an Express API when mobile app clients cannot be forced to update immediately?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "breaking-changes",
      "mobile-clients",
      "backward-compatibility"
    ],
    "interviewAnswer": "Mobile apps cannot be synchronously deployed with backends. Best practices include: 1) Additive changes only on existing versions; 2) Versioned routes (/v1 and /v2) running concurrently; 3) Compatibility adapters transforming modern domain models back to v1 shapes; 4) Minimum version enforcement prompts.",
    "answer": "Managing Breaking Changes:\n\n1. Keep existing endpoints functional by adding optional fields rather than mutating existing types.\n2. Run legacy and modern routers side by side.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "app.use('/api/v1', legacyAdapterRouter);\napp.use('/api/v2', currentV2Router);"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Circuit Breaker Pattern in Express API Gateway Services",
    "question": "How does a Circuit Breaker protect an Express API gateway from cascading failures when calling downstream microservices?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "circuit-breaker",
      "opossum",
      "resilience"
    ],
    "interviewAnswer": "A Circuit Breaker has three states: Closed (normal), Open (fails immediately without calling downstream service when error threshold is crossed), and Half-Open (tests downstream recovery). Libraries like Opossum wrap outgoing HTTP calls, preventing thread pool and socket starvation in Express when a downstream service hangs.",
    "answer": "Circuit Breakers with Opossum:\n\nWrap axios calls in Opossum. If downstream error rate exceeds 50%, circuit opens and immediately returns fallback responses without waiting for network timeouts.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const breaker = new CircuitBreaker(callService, { timeout: 3000, resetTimeout: 10000 });\nbreaker.fallback(() => ({ error: 'Service down' }));"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "api-design",
    "title": "Production Readiness Checklist for Express REST APIs",
    "question": "What are the essential architectural components of a production-ready Express REST API?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "api-design",
      "production-readiness",
      "architecture",
      "checklist"
    ],
    "interviewAnswer": "A production-grade Express API requires: 1) Security: Helmet headers, CORS, rate limiting, and input validation; 2) Observability: Structured logging (Pino), Prometheus metrics, and distributed tracing; 3) Reliability: Graceful shutdown (SIGTERM), health probes (/health/live, /health/ready), timeouts, and unhandled rejection guards; 4) Performance: Gzip/Brotli compression, database connection pooling, and Redis caching.",
    "answer": "Production Readiness Pillars:\n\n1. Security: Helmet, CORS, rate limits, schema validation.\n2. Resilience: Graceful shutdown, connect-timeout, body byte limits.\n3. Observability: Correlation IDs, structured JSON logging, Prometheus metrics.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "process.on('SIGTERM', async () => {\n  server.close(async () => {\n    await mongoose.connection.close();\n    process.exit(0);\n  });\n});"
      }
    ]
  }
];
