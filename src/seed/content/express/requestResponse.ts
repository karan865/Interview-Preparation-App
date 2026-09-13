import { SeedQuestion } from '../types';

export const requestResponseQuestions: SeedQuestion[] = [
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "Scenario: Users Sometimes Receive Incorrect User Data in Concurrent Requests",
    "question": "Users sometimes receive incorrect user data. What would you investigate immediately?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "concurrency",
      "shared-state",
      "race-conditions",
      "memory-pollution"
    ],
    "interviewAnswer": "I would immediately audit for shared mutable state across requests. The most common cause in Node.js is storing user data in a module-level or global variable (e.g. let currentUser = null) inside controllers or middleware, or mutating a shared singleton service object. Under concurrent load, Request B overwrites the module variable while Request A is awaiting a database query; when Request A resumes, it reads Request B's user data and sends it to User A. The second critical check is improper HTTP caching headers (e.g. caching authenticated endpoints in a shared CDN proxy).",
    "answer": "Immediate Investigation Steps:\n\n1. Global / Module-Level Variable Audit:\nIn Node.js, modules are singletons cached in `require.cache`. If any controller has:\n```javascript\nlet userContext; // SHARED ACROSS ALL CONCURRENT REQUESTS!\napp.get(\"/me\", async (req, res) => {\n  userContext = await db.getUser(req.userId);\n  await doSomethingAsync();\n  res.json(userContext); // RACE CONDITION: userContext was overwritten by another request!\n});\n```\nAll state MUST be attached directly to `req` (e.g. `req.user`) or `res.locals`, which are unique per HTTP connection.\n\n2. CDN / Reverse Proxy Caching Headers:\nIf private `/api/user/profile` endpoints lack `Cache-Control: private, no-store, max-age=0`, a shared edge cache (Cloudflare, Nginx) caches User A's profile response and serves it to User B.\n\n3. Mongoose / ORM In-Memory Mutation:\nMutating shared reference objects or using static query holders can leak data between concurrent async operations.",
    "explanation": "Node’s single-threaded asynchronous nature makes shared variables catastrophically dangerous: async pauses (await) yield the thread to other concurrent requests.",
    "importantPoints": [
      "Never store request-specific state in module-level or global variables.",
      "Always store request data on req or res.locals (isolated per socket).",
      "Check Cache-Control headers on private endpoints (must be no-store).",
      "Audit async functions for shared object mutations during await intervals."
    ],
    "commonMistakes": [
      "Declaring let user or let result outside the route handler function in controller files.",
      "Caching authenticated user profile responses at the CDN edge."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Dangerous Race Condition vs Thread-Safe Request Storage",
        "code": "// DANGEROUS ANTI-PATTERN (Leaks user data across concurrent requests):\nlet currentUser; // Module singleton!\napp.get('/profile', async (req, res) => {\n  currentUser = await db.findUser(req.headers.token);\n  await delay(100); // During this await, another request overwrites currentUser!\n  res.json(currentUser);\n});\n\n// THREAD-SAFE IDIOMATIC PATTERN:\napp.get('/profile', async (req, res) => {\n  const user = await db.findUser(req.headers.token); // Scoped strictly to this call stack\n  await delay(100);\n  res.json(user); // Guaranteed to belong to the requesting client\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "res.send() vs res.json() vs res.end() Differences",
    "question": "What are the exact functional differences among res.send(), res.json(), and res.end() in Express?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "res-send",
      "res-json",
      "res-end"
    ],
    "interviewAnswer": "res.json() converts objects/arrays to JSON strings using JSON.stringify (applying json replacer/spaces settings) and explicitly sets Content-Type: application/json. res.send() is polymorphic: it inspects the argument type—if an object/array, it delegates to res.json(); if a string, it sets text/html; if a Buffer, it sets application/octet-stream; and automatically sets Content-Length and ETag. res.end() is Node's native stream method: it terminates the response immediately without setting Content-Type, Content-Length, or ETags.",
    "answer": "Key Differences:\n\n1. `res.json(data)`: Strictly for JSON. Always sets `Content-Type: application/json; charset=utf-8`. Formats formatting using `app.set(\"json spaces\")`.\n2. `res.send(data)`: Automatically determines MIME type and Content-Length. If passed `Buffer`, sends binary. If passed string, sends HTML/text. If passed object, calls `res.json()`.\n3. `res.end()`: Native Node `http.ServerResponse.prototype.end()`. Sends raw data without Express header processing; used primarily for empty responses (`res.status(204).end()`) or terminating custom streams.",
    "explanation": "In REST APIs, prefer res.json() for clarity and consistency.",
    "importantPoints": [
      "res.json explicitly sets application/json and formats JSON.",
      "res.send dynamically infers Content-Type and calculates Content-Length.",
      "res.end is the low-level Node stream termination method.",
      "res.end is ideal for 204 No Content responses."
    ],
    "commonMistakes": [
      "Calling res.send(number) in Express 4, which treated numbers as HTTP status codes (deprecated/removed in Express 5).",
      "Using res.end() with an object (throws TypeError; res.end requires Buffer or string)."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Comparing Response Terminations",
        "code": "// Preferred for REST APIs:\nres.status(200).json({ status: 'success' });\n\n// Polymorphic: Sends HTML string\nres.status(200).send('<h1>Welcome</h1>');\n\n// Low-level: 204 No Content with empty body\nres.status(204).end();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "Understanding and Resolving ERR_HTTP_HEADERS_SENT",
    "question": "What causes Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client, and how do you prevent it?",
    "difficulty": "medium",
    "questionType": "Debugging",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "headers-sent",
      "err-http-headers-sent",
      "debugging"
    ],
    "interviewAnswer": "This error occurs when application code attempts to send an HTTP status, header, or response body after the HTTP headers have already been committed and sent over the socket to the client. The root cause is almost always missing a return statement in conditional branching or callbacks (e.g. calling res.status(400).json(...) and then allowing code execution to reach a subsequent res.json(...) or next()).",
    "answer": "HTTP protocol rules dictate that headers can only be written ONCE per connection. Once the response stream starts, headers are locked.\n\nResolution:\nAlways prefix response termination calls with `return`:\n```javascript\nif (!user) {\n  return res.status(404).json({ error: \"Not found\" }); // RETURN is critical!\n}\nres.json(user);\n```",
    "explanation": "Check `res.headersSent` boolean if dynamic middleware needs to know whether headers have already been dispatched.",
    "importantPoints": [
      "HTTP headers can only be transmitted once per request.",
      "Caused by executing multiple res.send/res.json/res.redirect calls on the same request.",
      "Always prefix response calls with return in conditional branches.",
      "Inspect res.headersSent to verify status."
    ],
    "commonMistakes": [
      "Omitting return before res.status().json() inside an if block.",
      "Calling next() after sending a response."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Buggy Code vs Fixed Code for ERR_HTTP_HEADERS_SENT",
        "code": "// BUGGY:\napp.post('/login', (req, res) => {\n  if (!req.body.email) {\n    res.status(400).json({ error: 'Email required' }); // Execution continues!\n  }\n  res.json({ token: 'xyz' }); // CRASH: ERR_HTTP_HEADERS_SENT!\n});\n\n// FIXED:\napp.post('/login', (req, res) => {\n  if (!req.body.email) {\n    return res.status(400).json({ error: 'Email required' }); // Exits handler!\n  }\n  return res.json({ token: 'xyz' });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "req.ip vs req.ips: Resolving Client Addresses Across Proxy Chains",
    "question": "How do req.ip and req.ips differ when trust proxy is enabled?",
    "difficulty": "medium",
    "questionType": "Networking",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "req-ip",
      "req-ips",
      "trust-proxy"
    ],
    "interviewAnswer": "When trust proxy is enabled, req.ips returns an array of all IP addresses specified in the X-Forwarded-For header, ordered from client to the most recent proxy. req.ip contains the canonical remote client IP (the first trusted IP in the chain). When trust proxy is false, req.ips is empty [] and req.ip is the raw socket connection IP.",
    "answer": "Understanding `req.ips` allows inspecting intermediate proxies or Cloudflare edge nodes in multi-tier architectures.",
    "explanation": "Understanding `req.ips` allows inspecting intermediate proxies or Cloudflare edge nodes in multi-tier architectures.",
    "importantPoints": [
      "req.ips returns the full X-Forwarded-For array.",
      "req.ip is the verified client origin IP.",
      "Requires trust proxy to be enabled."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "req.ip vs req.ips: Resolving Client Addresses Across Proxy Chains",
        "code": "// Express Request & Response: req.ip vs req.ips: Resolving Client Addresses Across Proxy Chains\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "Setting and Clearing HTTP Cookies: res.cookie() vs res.clearCookie()",
    "question": "What security flags should be configured when setting cookies with res.cookie(), and how does res.clearCookie() operate?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "cookies",
      "httpOnly",
      "secure",
      "sameSite"
    ],
    "interviewAnswer": "res.cookie(name, val, options) sets Set-Cookie headers. Production security flags: httpOnly: true (blocks XSS theft), secure: true (transmits over HTTPS only), sameSite: \"lax\" or \"strict\" (prevents CSRF). res.clearCookie(name, options) expires the cookie by setting Max-Age=0, but MUST match the original path and domain options to clear successfully.",
    "answer": "If you set a cookie with `{ path: \"/api\" }`, calling `res.clearCookie(\"token\")` without `{ path: \"/api\" }` will fail to delete the cookie in browsers.",
    "explanation": "If you set a cookie with `{ path: \"/api\" }`, calling `res.clearCookie(\"token\")` without `{ path: \"/api\" }` will fail to delete the cookie in browsers.",
    "importantPoints": [
      "Always set httpOnly: true and secure: true for auth tokens.",
      "sameSite: \"strict\" or \"lax\" prevents CSRF.",
      "res.clearCookie must match original path and domain options."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Setting and Clearing HTTP Cookies: res.cookie() vs res.clearCookie()",
        "code": "// Express Request & Response: Setting and Clearing HTTP Cookies: res.cookie() vs res.clearCookie()\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "Streaming Large Responses with res.write() and Pipes",
    "question": "How do you stream massive database query results or CSV files without buffering everything in RAM?",
    "difficulty": "hard",
    "questionType": "Performance",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "streaming",
      "pipes",
      "backpressure",
      "memory"
    ],
    "interviewAnswer": "Pipe readable streams directly into res (which is a WritableStream): databaseCursor.pipe(transformStream).pipe(res). Set headers res.setHeader(\"Content-Type\", \"text/csv\") beforehand. Node handles backpressure automatically, keeping memory usage constant (< 50MB) even when streaming gigabytes of data.",
    "answer": "Never accumulate 1,000,000 database rows into a JavaScript array and call `res.json(rows)`; it will exhaust V8 heap memory and crash the server.",
    "explanation": "Never accumulate 1,000,000 database rows into a JavaScript array and call `res.json(rows)`; it will exhaust V8 heap memory and crash the server.",
    "importantPoints": [
      "res is a native Node WritableStream.",
      "Pipe streams to handle backpressure and stream chunk-by-chunk.",
      "Avoids out-of-memory heap crashes on massive exports."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Streaming Large Responses with res.write() and Pipes",
        "code": "// Express Request & Response: Streaming Large Responses with res.write() and Pipes\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The req.get() / req.header() Helper",
    "question": "How does req.get(headerName) simplify HTTP header lookups in Express?",
    "difficulty": "easy",
    "questionType": "Syntax",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "req-get",
      "headers",
      "case-insensitive"
    ],
    "interviewAnswer": "req.get(field) or req.header(field) performs a case-insensitive lookup of incoming request headers (e.g. req.get(\"Authorization\"), req.get(\"authorization\"), and req.get(\"AUTHORIZATION\") all return the same value). Special alias: req.get(\"referer\") matches both \"referer\" and \"referrer\".",
    "answer": "It eliminates the need to remember whether a client capitalized a header.",
    "explanation": "It eliminates the need to remember whether a client capitalized a header.",
    "importantPoints": [
      "Case-insensitive header retrieval.",
      "Special alias for referer/referrer.",
      "Returns undefined if header is not set."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The req.get() / req.header() Helper",
        "code": "// Express Request & Response: The req.get() / req.header() Helper\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The req.is() Content-Type Matching Helper",
    "question": "What does req.is(type) check, and how is it used for MIME type validation?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "req-is",
      "content-type",
      "mime"
    ],
    "interviewAnswer": "req.is(type) checks whether the incoming request's Content-Type matches the specified MIME type or shorthand. Returns the matched string if true (e.g. req.is(\"json\") returns \"json\"), false if it does not match, or null if the request has no body.",
    "answer": "Used to guard endpoints expecting specific formats: `if (!req.is(\"application/json\")) return res.status(415).send(\"Unsupported Media Type\");`.",
    "explanation": "Used to guard endpoints expecting specific formats: `if (!req.is(\"application/json\")) return res.status(415).send(\"Unsupported Media Type\");`.",
    "importantPoints": [
      "Inspects Content-Type header.",
      "Supports shorthands: req.is(\"html\"), req.is(\"json\"), req.is(\"image/*\").",
      "Returns null if request body is empty."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The req.is() Content-Type Matching Helper",
        "code": "// Express Request & Response: The req.is() Content-Type Matching Helper\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "Server-Sent Events (SSE) Implementation in Express",
    "question": "How do you implement Server-Sent Events (SSE) using res for real-time one-way data streaming?",
    "difficulty": "hard",
    "questionType": "Real-Time",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "sse",
      "server-sent-events",
      "streaming"
    ],
    "interviewAnswer": "Set headers: res.writeHead(200, { \"Content-Type\": \"text/event-stream\", \"Cache-Control\": \"no-cache\", \"Connection\": \"keep-alive\" }). Transmit data using res.write(`data: ${JSON.stringify(payload)}\\n\\n`). Clean up intervals/listeners when the client disconnects via req.on(\"close\", () => clearInterval(timer)).",
    "answer": "SSE is simpler and lighter than WebSockets for unilateral server-to-client updates (e.g. live notifications, stock tickers, AI text streaming).",
    "explanation": "SSE is simpler and lighter than WebSockets for unilateral server-to-client updates (e.g. live notifications, stock tickers, AI text streaming).",
    "importantPoints": [
      "Content-Type must be text/event-stream.",
      "Connection must be keep-alive with no-cache.",
      "Data formatted with data: ...\\n\\n protocol markers.",
      "Listen for req.on(\"close\") to clean up event listeners."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Server-Sent Events (SSE) Implementation in Express",
        "code": "// Express Request & Response: Server-Sent Events (SSE) Implementation in Express\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The req.fresh vs req.stale Properties for HTTP Caching",
    "question": "How do req.fresh and req.stale indicate whether client cache is still valid?",
    "difficulty": "medium",
    "questionType": "HTTP Caching",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "fresh",
      "stale",
      "304",
      "http-caching"
    ],
    "interviewAnswer": "req.fresh returns true if the client's cached copy is still fresh (by comparing request headers If-None-Match / If-Modified-Since against response headers ETag / Last-Modified). If req.fresh is true, Express can skip sending the body and respond with res.status(304).end(). req.stale is the logical inverse (!req.fresh).",
    "answer": "Express uses `fresh` under the hood in `res.send()` to automatically send 304 responses when ETags match.",
    "explanation": "Express uses `fresh` under the hood in `res.send()` to automatically send 304 responses when ETags match.",
    "importantPoints": [
      "req.fresh evaluates If-None-Match against ETag.",
      "If true, response body can be skipped (304 Not Modified).",
      "req.stale indicates client cache has expired."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The req.fresh vs req.stale Properties for HTTP Caching",
        "code": "// Express Request & Response: The req.fresh vs req.stale Properties for HTTP Caching\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The res.type() Helper for MIME Types",
    "question": "What does res.type() do, and how does it handle file extensions?",
    "difficulty": "easy",
    "questionType": "Syntax",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "res-type",
      "mime-type",
      "content-type"
    ],
    "interviewAnswer": "res.type(type) sets the Content-Type response header. It accepts full MIME types (res.type(\"application/json\")) or file extensions (res.type(\"png\") sets image/png; res.type(\"html\") sets text/html; res.type(\"txt\") sets text/plain).",
    "answer": "It looks up mappings via the mime-types database automatically.",
    "explanation": "It looks up mappings via the mime-types database automatically.",
    "importantPoints": [
      "Sets Content-Type header.",
      "Accepts file extensions (png, json, pdf).",
      "Handles character encoding defaults automatically."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The res.type() Helper for MIME Types",
        "code": "// Express Request & Response: The res.type() Helper for MIME Types\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "Customizing Response Headers with res.set() / res.header()",
    "question": "How do you set single or multiple response headers in Express?",
    "difficulty": "easy",
    "questionType": "Syntax",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "res-set",
      "headers",
      "custom-headers"
    ],
    "interviewAnswer": "Use res.set(field, [val]) for single headers: res.set(\"X-Custom-Header\", \"Value\"). Pass an object to set multiple headers at once: res.set({ \"X-Frame-Options\": \"DENY\", \"X-Service\": \"UserAuth\" }). res.header() is an exact alias for res.set().",
    "answer": "Header values are automatically converted to strings.",
    "explanation": "Header values are automatically converted to strings.",
    "importantPoints": [
      "res.set and res.header are aliases.",
      "Accepts single key/value or an object of multiple headers.",
      "Must be invoked before sending the response body."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Customizing Response Headers with res.set() / res.header()",
        "code": "// Express Request & Response: Customizing Response Headers with res.set() / res.header()\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "HTTP 204 No Content Responses: Best Practices",
    "question": "What are the rules for sending an HTTP 204 No Content response in Express?",
    "difficulty": "easy",
    "questionType": "REST API",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "204-no-content",
      "rest-standards"
    ],
    "interviewAnswer": "HTTP 204 indicates success with no response payload (standard for DELETE or PUT operations). You must terminate with res.status(204).send() or res.status(204).end(). Never send a body (res.status(204).json({}))—HTTP specifications forbid a message body in 204 responses.",
    "answer": "Some HTTP clients throw parser errors if a 204 response includes a Content-Length > 0 or a body.",
    "explanation": "Some HTTP clients throw parser errors if a 204 response includes a Content-Length > 0 or a body.",
    "importantPoints": [
      "Standard for DELETE or mutations returning no data.",
      "Must NOT include a response body.",
      "Terminate with res.status(204).send() or res.status(204).end()."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "HTTP 204 No Content Responses: Best Practices",
        "code": "// Express Request & Response: HTTP 204 No Content Responses: Best Practices\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The req.xhr Property (AJAX Detection)",
    "question": "How does Express identify AJAX requests via req.xhr, and why is it legacy?",
    "difficulty": "easy",
    "questionType": "History",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "req-xhr",
      "ajax",
      "headers"
    ],
    "interviewAnswer": "req.xhr returns true if the request header X-Requested-With equals \"XMLHttpRequest\" (standard in jQuery and older AJAX libraries). Modern fetch() and Axios do NOT send X-Requested-With by default; modern APIs should inspect the Accept header (req.accepts(\"json\")) instead of relying on req.xhr.",
    "answer": "Legacy applications used req.xhr to return JSON to AJAX callers and HTML to browser page loads.",
    "explanation": "Legacy applications used req.xhr to return JSON to AJAX callers and HTML to browser page loads.",
    "importantPoints": [
      "Checks for X-Requested-With: XMLHttpRequest header.",
      "Modern fetch() does not send this header by default.",
      "Use Accept header for modern content negotiation."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The req.xhr Property (AJAX Detection)",
        "code": "// Express Request & Response: The req.xhr Property (AJAX Detection)\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The res.attachment() Helper for File Downloads",
    "question": "What does res.attachment(filename) do without immediately sending the file?",
    "difficulty": "medium",
    "questionType": "Response",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "res-attachment",
      "content-disposition"
    ],
    "interviewAnswer": "res.attachment([filename]) sets the Content-Disposition header to \"attachment\" (and sets the filename if provided, plus sets Content-Type based on the extension), but does NOT send the response. This allows you to set the attachment headers first and then stream data dynamically using stream.pipe(res).",
    "answer": "In contrast, `res.download()` immediately streams a file from disk and finishes the request.",
    "explanation": "In contrast, `res.download()` immediately streams a file from disk and finishes the request.",
    "importantPoints": [
      "Sets Content-Disposition: attachment header.",
      "Does not send the response immediately.",
      "Ideal for streaming dynamically generated CSV/PDF files."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The res.attachment() Helper for File Downloads",
        "code": "// Express Request & Response: The res.attachment() Helper for File Downloads\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The req.subdomains Array Property",
    "question": "How does Express parse subdomains into req.subdomains, and how does subdomain offset work?",
    "difficulty": "medium",
    "questionType": "Routing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "subdomains",
      "multi-tenant",
      "app-settings"
    ],
    "interviewAnswer": "req.subdomains returns an array of subdomain strings in reverse order. For \"t1.api.example.com\", req.subdomains is [\"api\", \"t1\"]. The setting app.set(\"subdomain offset\", 2) (default) skips the domain and TLD (example.com). For three-part domains like \"example.co.uk\", set subdomain offset to 3 so \"co.uk\" is not treated as a subdomain.",
    "answer": "Heavily used in multi-tenant SaaS architectures where each customer accesses their workspace via `tenant.myapp.com`.",
    "explanation": "Heavily used in multi-tenant SaaS architectures where each customer accesses their workspace via `tenant.myapp.com`.",
    "importantPoints": [
      "Returns array of subdomains in reverse order.",
      "subdomain offset setting configures TLD depth.",
      "Essential for multi-tenant vanity domain routing."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The req.subdomains Array Property",
        "code": "// Express Request & Response: The req.subdomains Array Property\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The res.vary() Helper and HTTP Caching",
    "question": "Why and when should you invoke res.vary(headerName)?",
    "difficulty": "hard",
    "questionType": "HTTP Caching",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "vary-header",
      "caching",
      "cdn"
    ],
    "interviewAnswer": "res.vary(field) appends field to the Vary response header (e.g. Vary: Accept-Encoding, User-Agent, Origin). The Vary header tells caching proxies and CDNs that they must maintain separate cached copies of the response for different values of that request header, preventing serving Gzip-compressed responses to clients that do not support Gzip or serving mobile HTML to desktop users.",
    "answer": "Without `Vary: Accept-Encoding`, a CDN might serve compressed Brotli bytes to an old HTTP client that cannot decode it.",
    "explanation": "Without `Vary: Accept-Encoding`, a CDN might serve compressed Brotli bytes to an old HTTP client that cannot decode it.",
    "importantPoints": [
      "Adds fields to the Vary response header.",
      "Instructs CDNs to cache separate variants per header value.",
      "Mandatory when responses vary based on Accept, User-Agent, or Origin."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The res.vary() Helper and HTTP Caching",
        "code": "// Express Request & Response: The res.vary() Helper and HTTP Caching\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "Handling Partial Content (HTTP 206) and Byte Range Requests",
    "question": "How does Express support HTTP Range requests for video seeking and resumable downloads?",
    "difficulty": "hard",
    "questionType": "Media Streaming",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "range-requests",
      "http-206",
      "video-streaming"
    ],
    "interviewAnswer": "When clients request partial content (e.g. Range: bytes=0-1048575), res.sendFile() handles it automatically, returning HTTP 206 Partial Content, Content-Range, and the requested byte chunk. For manual media streaming, parse req.headers.range, create an fs.createReadStream with { start, end }, set Content-Range: bytes start-end/totalSize, and pipe to res.",
    "answer": "HTTP 206 is essential for HTML5 video and audio players to allow users to seek forward without downloading the entire video file first.",
    "explanation": "HTTP 206 is essential for HTML5 video and audio players to allow users to seek forward without downloading the entire video file first.",
    "importantPoints": [
      "res.sendFile handles byte range requests automatically.",
      "Returns HTTP 206 Partial Content with Content-Range header.",
      "Essential for audio and video media seeking."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling Partial Content (HTTP 206) and Byte Range Requests",
        "code": "// Express Request & Response: Handling Partial Content (HTTP 206) and Byte Range Requests\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The req.protocol and req.secure Mechanics",
    "question": "How does Express determine req.protocol and req.secure?",
    "difficulty": "easy",
    "questionType": "Networking",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "req-protocol",
      "req-secure",
      "https"
    ],
    "interviewAnswer": "If trust proxy is false, req.protocol checks the TLS status of the connection (returns \"https\" if TLS, otherwise \"http\") and req.secure is true only if TLS is active. If trust proxy is true, Express inspects the X-Forwarded-Proto header sent by the reverse proxy.",
    "answer": "Use `req.secure` to enforce HTTPS redirection in cloud environments.",
    "explanation": "Use `req.secure` to enforce HTTPS redirection in cloud environments.",
    "importantPoints": [
      "Checks TLS connection or X-Forwarded-Proto.",
      "req.secure is boolean shortcut for req.protocol === \"https\".",
      "Requires trust proxy behind reverse proxies."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The req.protocol and req.secure Mechanics",
        "code": "// Express Request & Response: The req.protocol and req.secure Mechanics\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The req.hostname vs req.host Properties",
    "question": "What is the difference between req.hostname and the deprecated req.host?",
    "difficulty": "easy",
    "questionType": "Syntax",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "hostname",
      "host-header"
    ],
    "interviewAnswer": "req.hostname returns the hostname from the Host (or X-Forwarded-Host if trust proxy is on) HTTP header WITHOUT port numbers (e.g. \"example.com\" even if accessed via \"example.com:3000\"). req.host is deprecated because it previously included port numbers in older Express versions.",
    "answer": "Always use `req.hostname` in modern Express applications.",
    "explanation": "Always use `req.hostname` in modern Express applications.",
    "importantPoints": [
      "Returns domain hostname without port.",
      "Respects X-Forwarded-Host when trust proxy is enabled.",
      "req.host is deprecated."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The req.hostname vs req.host Properties",
        "code": "// Express Request & Response: The req.hostname vs req.host Properties\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The req.route Property: Inspecting Current Matched Route Details",
    "question": "What information does req.route contain inside a route handler or middleware?",
    "difficulty": "medium",
    "questionType": "Internals",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "req-route",
      "metrics",
      "observability"
    ],
    "interviewAnswer": "req.route contains an object representing the currently matched Route instance, including: req.route.path (the raw route template string, e.g. \"/users/:id\"), req.route.methods (allowed methods), and the handler stack. It is heavily used in Prometheus/OpenTelemetry metrics to record endpoint latency grouped by route pattern (\"/users/:id\") rather than dynamic URLs (\"/users/12345\").",
    "answer": "Grouping metrics by `req.route.path` prevents high cardinality metric explosion in Datadog and Prometheus.",
    "explanation": "Grouping metrics by `req.route.path` prevents high cardinality metric explosion in Datadog and Prometheus.",
    "importantPoints": [
      "Contains raw route path pattern (/users/:id).",
      "Prevents high-cardinality metric explosion.",
      "Undefined in middleware mounted before route matching."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The req.route Property: Inspecting Current Matched Route Details",
        "code": "// Express Request & Response: The req.route Property: Inspecting Current Matched Route Details\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The res.append() Helper for Multi-Value Headers",
    "question": "When should you use res.append() instead of res.set()?",
    "difficulty": "medium",
    "questionType": "Response",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "res-append",
      "set-cookie",
      "headers"
    ],
    "interviewAnswer": "res.set() overwrites the existing header with the new value. res.append() appends the specified value to the existing header, turning it into an array of values if already set. It is essential for headers that can appear multiple times, such as Set-Cookie, Warning, or Link.",
    "answer": "Example: `res.append(\"Set-Cookie\", \"session=xyz; HttpOnly\"); res.append(\"Set-Cookie\", \"theme=dark\");` preserves both cookies.",
    "explanation": "Example: `res.append(\"Set-Cookie\", \"session=xyz; HttpOnly\"); res.append(\"Set-Cookie\", \"theme=dark\");` preserves both cookies.",
    "importantPoints": [
      "res.set overwrites; res.append adds to existing values.",
      "Essential for multi-value headers like Set-Cookie.",
      "Creates header arrays in HTTP responses."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The res.append() Helper for Multi-Value Headers",
        "code": "// Express Request & Response: The res.append() Helper for Multi-Value Headers\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "Handling Client Aborts with req.destroyed in Express Handlers",
    "question": "Why should long-running operations check req.destroyed before writing responses?",
    "difficulty": "medium",
    "questionType": "Reliability",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "req-destroyed",
      "socket-errors"
    ],
    "interviewAnswer": "If a client aborts the connection while the server is processing, the TCP socket is closed. If the handler finishes and attempts to call res.json(), Node throws Error: write ECONNRESET or ERR_STREAM_DESTROYED. Checking if (req.destroyed) return; prevents attempting writes to closed client sockets.",
    "answer": "Always guard long async handlers with checks against `req.destroyed` or `res.writableEnded`.",
    "explanation": "Always guard long async handlers with checks against `req.destroyed` or `res.writableEnded`.",
    "importantPoints": [
      "req.destroyed indicates client severed TCP connection.",
      "Prevents ECONNRESET errors on late writes.",
      "Guard long-running async tasks."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling Client Aborts with req.destroyed in Express Handlers",
        "code": "// Express Request & Response: Handling Client Aborts with req.destroyed in Express Handlers\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The res.locals Lifecycle and Memory Management",
    "question": "Does res.locals persist across different requests, and does it risk memory leaks?",
    "difficulty": "easy",
    "questionType": "Internals",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "res-locals",
      "lifecycle",
      "memory"
    ],
    "interviewAnswer": "No, res.locals is strictly bound to the specific ServerResponse instance created for that single HTTP request. It does not persist across requests and does not leak memory between clients. Once the response finishes and the socket closes, res.locals is garbage collected along with req and res.",
    "answer": "It is the recommended place to store request-scoped data like authenticated user IDs and render variables.",
    "explanation": "It is the recommended place to store request-scoped data like authenticated user IDs and render variables.",
    "importantPoints": [
      "Strictly request-scoped object.",
      "Garbage collected automatically upon response completion.",
      "Completely thread-safe and isolated per connection."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The res.locals Lifecycle and Memory Management",
        "code": "// Express Request & Response: The res.locals Lifecycle and Memory Management\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The req.accepts() Helper for Content Negotiation",
    "question": "How does req.accepts() determine the best MIME type supported by the client?",
    "difficulty": "easy",
    "questionType": "Content Negotiation",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "req-accepts",
      "content-negotiation"
    ],
    "interviewAnswer": "req.accepts(types) checks the request Accept header and returns the best match from the provided options array, or false if none are acceptable. For example, if Accept is \"text/html, application/json\", calling req.accepts([\"json\", \"html\"]) returns \"html\" based on client quality factors.",
    "answer": "Provides the programmatic foundation for building custom content-negotiation handlers.",
    "explanation": "Provides the programmatic foundation for building custom content-negotiation handlers.",
    "importantPoints": [
      "Evaluates client Accept header and quality factors (q-values).",
      "Returns best matching type or false.",
      "Supports array of extensions or MIME types."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The req.accepts() Helper for Content Negotiation",
        "code": "// Express Request & Response: The req.accepts() Helper for Content Negotiation\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "Sending Binary Buffers with res.send()",
    "question": "What happens when a Node.js Buffer is passed into res.send()?",
    "difficulty": "easy",
    "questionType": "Response",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "buffers",
      "binary-data",
      "res-send"
    ],
    "interviewAnswer": "When passed a Buffer, res.send(buf) sets Content-Type to application/octet-stream (unless previously specified via res.type()), sets Content-Length to buffer.length, and transmits the raw binary bytes over the socket.",
    "answer": "Useful for dynamically generated binary assets like generated QR codes, in-memory PDFs, or thumbnails.",
    "explanation": "Useful for dynamically generated binary assets like generated QR codes, in-memory PDFs, or thumbnails.",
    "importantPoints": [
      "Sets Content-Type: application/octet-stream by default.",
      "Calculates exact binary Content-Length.",
      "Streams raw bytes without string encoding."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Sending Binary Buffers with res.send()",
        "code": "// Express Request & Response: Sending Binary Buffers with res.send()\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "Preventing Response Buffering in Reverse Proxies with X-Accel-Buffering",
    "question": "Why is setting the X-Accel-Buffering: no header necessary when streaming data through Nginx?",
    "difficulty": "hard",
    "questionType": "Reverse Proxy",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "nginx",
      "x-accel-buffering",
      "streaming",
      "sse"
    ],
    "interviewAnswer": "By default, Nginx buffers upstream responses from Node.js in 4KB/8KB buffers before sending them to the client. In real-time streaming applications (SSE, LLM token streaming, progress bars), this buffering destroys real-time delivery: the client sees nothing for 10 seconds and then receives all tokens at once. Setting res.setHeader(\"X-Accel-Buffering\", \"no\") instructs Nginx to disable proxy buffering and stream chunks immediately.",
    "answer": "Mandatory header for Server-Sent Events (SSE) and live AI streaming behind Nginx.",
    "explanation": "Mandatory header for Server-Sent Events (SSE) and live AI streaming behind Nginx.",
    "importantPoints": [
      "Nginx buffers proxy responses by default.",
      "X-Accel-Buffering: no forces Nginx to flush chunks immediately.",
      "Essential for SSE and live chat token streaming."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Preventing Response Buffering in Reverse Proxies with X-Accel-Buffering",
        "code": "// Express Request & Response: Preventing Response Buffering in Reverse Proxies with X-Accel-Buffering\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The res.headersSent Boolean Guard",
    "question": "How can res.headersSent be used as a guard in dynamic middleware chains?",
    "difficulty": "medium",
    "questionType": "Debugging",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "headersSent",
      "defensive-programming"
    ],
    "interviewAnswer": "res.headersSent is a read-only boolean property that indicates whether HTTP headers have already been sent to the client. In error middleware or post-processing handlers, check if (res.headersSent) { return next(err); } to delegate to the default Express error handler rather than attempting to send a duplicate error response.",
    "answer": "Express documentation explicitly recommends checking `res.headersSent` inside custom error-handling middleware.",
    "explanation": "Express documentation explicitly recommends checking `res.headersSent` inside custom error-handling middleware.",
    "importantPoints": [
      "Boolean indicating whether headers have been flushed.",
      "Must check in error middleware before writing responses.",
      "Delegates to default handler if headers are already sent."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The res.headersSent Boolean Guard",
        "code": "// Express Request & Response: The res.headersSent Boolean Guard\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "The req.originalUrl vs req.url Difference in Sub-Apps",
    "question": "Why does req.url change inside mounted routers while req.originalUrl remains constant?",
    "difficulty": "medium",
    "questionType": "Internals",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "originalUrl",
      "req-url",
      "sub-apps"
    ],
    "interviewAnswer": "When a router is mounted at /users, Express strips the mount prefix from req.url so the router can match routes relative to root (e.g. /123 instead of /users/123). req.originalUrl preserves the complete, original request path (/users/123?tab=info) across the entire application lifecycle.",
    "answer": "Always use `req.originalUrl` when logging, generating audit trails, or computing redirect targets.",
    "explanation": "Always use `req.originalUrl` when logging, generating audit trails, or computing redirect targets.",
    "importantPoints": [
      "req.url is rewritten relative to the router mount path.",
      "req.originalUrl preserves full unmodified URL with query params.",
      "Use req.originalUrl for audit logging and redirects."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The req.originalUrl vs req.url Difference in Sub-Apps",
        "code": "// Express Request & Response: The req.originalUrl vs req.url Difference in Sub-Apps\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "request-response",
    "title": "Summary of the Request & Response Abstractions",
    "question": "How do Express Request and Response abstractions balance performance and developer ergonomics?",
    "difficulty": "easy",
    "questionType": "Summary",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "request-response",
      "summary",
      "architecture"
    ],
    "interviewAnswer": "Express extends native Node streams through prototype inheritance rather than wrapping them in heavy class wrappers, keeping per-request memory allocation near zero. It provides high-level helpers (res.json, req.params, res.cookie) for developer velocity while retaining full access to raw stream primitives (req.pipe, res.write) for high-performance streaming.",
    "answer": "This hybrid design is the foundation of Express's lightweight memory footprint and flexibility.",
    "explanation": "This hybrid design is the foundation of Express's lightweight memory footprint and flexibility.",
    "importantPoints": [
      "Zero-overhead prototype extension of Node native streams.",
      "High-level helpers for JSON, params, and cookies.",
      "Full access to raw stream pipes for high-throughput I/O."
    ],
    "commonMistakes": [
      "Sharing mutable state globally or sending headers twice."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Summary of the Request & Response Abstractions",
        "code": "// Express Request & Response: Summary of the Request & Response Abstractions\napp.get('/', (req, res) => {\n  res.json({ ok: true });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
