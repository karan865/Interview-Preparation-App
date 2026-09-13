import { SeedQuestion } from '../types';

export const expressFundamentalsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Scenario: API Works Locally but Fails Behind a Reverse Proxy",
    "question": "An API works locally but fails behind a reverse proxy. What could cause this?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "reverse-proxy",
      "trust-proxy",
      "nginx",
      "headers",
      "cookies"
    ],
    "interviewAnswer": "The primary root cause is usually missing app.set(\"trust proxy\", true) or improper proxy header forwarding. When behind a reverse proxy: 1) req.ip and rate-limiters see the proxy's internal IP instead of the client's IP, causing rate limits to block all users; 2) Secure cookies (secure: true) are rejected because Express sees an internal HTTP connection from the proxy instead of HTTPS; 3) req.protocol reports \"http\" causing incorrect URL generation; 4) Redirect loops occur if the app tries to redirect HTTP to HTTPS based on req.secure.",
    "answer": "When Express is deployed behind a reverse proxy:\n\n1. Trust Proxy Configuration:\nBy default, Express does not trust incoming `X-Forwarded-*` headers to prevent IP spoofing. You must explicitly configure:\n`app.set(\"trust proxy\", true);` // Or specify specific proxy subnet / hop count: app.set(\"trust proxy\", 1)\n\n2. Secure Cookies & HTTPS Offloading:\nIf your reverse proxy terminates SSL (HTTPS) and talks to Node via HTTP, `req.secure` is `false`. A cookie marked `{ secure: true }` will not be transmitted. With `trust proxy` enabled, Express reads `X-Forwarded-Proto` and sets `req.secure = true`.\n\n3. Client IP & Rate Limiting:\nWithout `trust proxy`, `req.ip` returns the reverse proxy's local IP (e.g. `10.0.0.1` or `127.0.0.1`). Any IP-based rate limiting library (like `express-rate-limit`) treats all global users as one single IP, throttling the entire website.\n\n4. Port & Host Header Mismatches:\nEnsure Nginx forwards `Host`, `X-Real-IP`, `X-Forwarded-For`, and `X-Forwarded-Proto`.",
    "explanation": "Setting app.set(\"trust proxy\", true) tells Express to parse X-Forwarded-For and X-Forwarded-Proto headers injected by reverse proxies.",
    "importantPoints": [
      "Enable app.set(\"trust proxy\", true) or configure hop count/CIDR.",
      "Reverse proxies terminate SSL; Express must trust X-Forwarded-Proto for secure cookies and req.secure.",
      "Prevents rate-limiters from treating the reverse proxy IP as a single shared user.",
      "Ensure the proxy config includes proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for."
    ],
    "commonMistakes": [
      "Setting secure: true on cookies behind an SSL-terminating proxy without app.set(\"trust proxy\", 1).",
      "Using app.set(\"trust proxy\", true) in public environments without a reverse proxy, allowing clients to spoof X-Forwarded-For."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Configuring Reverse Proxy Trust in Express",
        "code": "const express = require('express');\nconst app = express();\n\n// Trust the first hop (e.g. Nginx, AWS ALB, Heroku, Cloudflare):\napp.set('trust proxy', 1);\n\napp.get('/client-info', (req, res) => {\n  res.json({\n    clientIp: req.ip,           // Correct client IP from X-Forwarded-For\n    protocol: req.protocol,     // \"https\" via X-Forwarded-Proto\n    secure: req.secure          // true if forwarded proto is https\n  });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Express Request-Response Lifecycle Overview",
    "question": "How does an incoming HTTP request flow through the Express request-response lifecycle from TCP connection to response completion?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "lifecycle",
      "middleware-pipeline",
      "event-loop"
    ],
    "interviewAnswer": "The incoming HTTP request is parsed by Node's native http server, creating IncomingMessage (req) and ServerResponse (res) instances. Express wraps these with prototype methods and routes them sequentially through its internal Router layer stack. Each middleware or route handler can modify req/res, terminate the cycle with res.send/res.json, or invoke next() to pass control to the next handler. If next(err) is called, Express skips straight to error-handling middleware.",
    "answer": "The Express lifecycle is a sequential chain:\n1. Incoming TCP connection is received by `http.Server` and parsed into `req` and `res`.\n2. Express delegates the request to `app.handle(req, res)`.\n3. The router walks through the layer stack in exact registration order (`app.use`, `app.METHOD`).\n4. Each middleware either: a) Ends the cycle by sending a response (`res.json()`); b) Calls `next()` to advance to the next layer; c) Calls `next(err)` to skip to error handlers.\n5. If no route or middleware sends a response and the layer stack exhausts, Express outputs a default 404 response.",
    "explanation": "Because Express relies on callbacks or next(), forgetting to call next() or send a response causes the request to hang until the client times out.",
    "importantPoints": [
      "Layer stack processes middleware and routes in declaration order.",
      "Handlers must either terminate the cycle or call next().",
      "next(err) bypasses standard layers and jumps to error middleware.",
      "Unmatched requests fall through to Express default 404 handler."
    ],
    "commonMistakes": [
      "Failing to call next() or send a response, causing requests to hang.",
      "Sending a response and still calling next(), resulting in ERR_HTTP_HEADERS_SENT."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Visualizing Request Lifecycle Order",
        "code": "const express = require('express');\nconst app = express();\n\n// Layer 1: Logging middleware\napp.use((req, res, next) => {\n  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);\n  next(); // Advance to Layer 2\n});\n\n// Layer 2: Route handler (terminates cycle)\napp.get('/health', (req, res) => {\n  res.status(200).json({ status: 'ok' }); // Response sent, cycle ended\n});\n\n// Layer 3: Catch-all 404\napp.use((req, res) => {\n  res.status(404).json({ error: 'Not Found' });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Express Application Factory Pattern vs Singleton Pattern",
    "question": "Why is the Application Factory pattern preferred over exporting an instantiated Express singleton in production applications?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "application-factory",
      "testing",
      "architecture"
    ],
    "interviewAnswer": "Exporting an application factory function (e.g. createApp(config)) creates a fresh, isolated Express application instance per invocation. This eliminates shared state between integration tests (Supertest), allows injecting mock databases or configuration options easily, and prevents port-binding side effects during test runs.",
    "answer": "1. Singleton Anti-Pattern (`module.exports = app`):\n- When running tests with Jest or Mocha, every test file shares the exact same application state.\n- Database connections or route registrations can bleed across tests.\n- The server often calls `app.listen(PORT)` inside the same file, causing `EADDRINUSE` errors in tests.\n\n2. Application Factory Pattern (`export function createApp(options) { ... return app; }`):\n- Each test receives a pristine app instance.\n- Configuration (database URI, JWT secrets, loggers) is passed in dynamically.\n- Separation of concerns: `app.js` builds the pipeline; `server.js` starts `app.listen()`.",
    "explanation": "Separating app definition from app.listen() is a fundamental best practice for automated API testing.",
    "importantPoints": [
      "Factory functions create isolated Express instances for integration tests.",
      "Prevents EADDRINUSE errors when running test suites in parallel.",
      "Enables dependency injection for databases, loggers, and config.",
      "Separates pipeline configuration from network socket listening."
    ],
    "commonMistakes": [
      "Calling app.listen() directly in the file that defines routes, breaking test imports.",
      "Relying on global state across tests instead of fresh app instances."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Application Factory Pattern",
        "code": "// app.js (Factory)\nfunction createApp(config = {}) {\n  const app = express();\n  app.use(express.json());\n  // Mount routes with injected dependencies...\n  return app;\n}\nmodule.exports = { createApp };\n\n// server.js (Server Startup)\nconst { createApp } = require('./app');\nconst app = createApp();\nconst PORT = process.env.PORT || 3000;\napp.listen(PORT, () => console.log(`Server running on ${PORT}`));"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Express 4 vs Express 5: Key Changes and Breaking Differences",
    "question": "What are the major architectural differences and improvements introduced in Express 5 compared to Express 4?",
    "difficulty": "hard",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "express-5",
      "async-await",
      "router",
      "breaking-changes"
    ],
    "interviewAnswer": "The biggest improvement in Express 5 is native support for async/await: route handlers and middleware returning rejected Promises automatically forward the error to error-handling middleware without requiring try/catch or express-async-errors wrappers. Other key changes include: removal of deprecated methods (res.send(status, body), app.param(fn)), updated path-to-regexp parser, and query parser updates.",
    "answer": "Key Differences in Express 5:\n\n1. Native Async Error Handling: In Express 4, an unhandled Promise rejection inside an async handler hangs or crashes Node.js unless caught with try/catch or `express-async-errors`. Express 5 catches rejected Promises natively and routes them to `next(err)`.\n\n2. Path-to-RegExp v0.1 -> Modern: Express 5 updates route matching syntax. Wildcard `*` requires a parameter name like `/*path`, and regular expressions must follow strict syntax.\n\n3. Method Removals:\n- `res.send(200, \"OK\")` is removed (use `res.status(200).send(\"OK\")`).\n- `res.json(200, data)` is removed (use `res.status(200).json(data)`).\n- `app.del()` is removed (use `app.delete()`).\n- `req.param(name)` is removed in favor of `req.params`, `req.query`, or `req.body`.\n\n4. req.query: Parsed using `qs` or simple mode with stricter type behavior.",
    "explanation": "Native async error handling is the most requested feature in Express history and removes substantial boilerplate in modern codebases.",
    "importantPoints": [
      "Express 5 natively catches rejected Promises in async middleware and route handlers.",
      "Eliminates need for express-async-errors or manual try/catch wrappers.",
      "Removes legacy method signatures like res.send(status, body).",
      "Uses updated path-to-regexp with stricter route parameter patterns."
    ],
    "commonMistakes": [
      "Assuming Express 4 catches rejected Promises automatically (it does not).",
      "Using legacy Express 3/4 res.send(statusCode, body) signatures in Express 5."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Native Async Handlers in Express 5",
        "code": "// Express 5: Native Promise rejection forwarding!\napp.get('/users/:id', async (req, res) => {\n  // If findById throws or rejects, Express 5 automatically invokes error middleware!\n  const user = await db.users.findById(req.params.id);\n  if (!user) throw new NotFoundError('User not found');\n  res.json(user);\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Under the Hood: How Express Wraps Node.js Native HTTP Modules",
    "question": "How does Express extend Node.js native http.IncomingMessage and http.ServerResponse prototypes?",
    "difficulty": "hard",
    "questionType": "Internals",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "internals",
      "prototype",
      "http",
      "node"
    ],
    "interviewAnswer": "Express does not replace Node’s native HTTP objects; it inherits from them. Express defines express.request (inheriting from http.IncomingMessage.prototype) and express.response (inheriting from http.ServerResponse.prototype). When a request arrives, Express sets req.__proto__ = express.request and res.__proto__ = express.response, enriching them with helper methods like res.json(), req.get(), res.status(), and req.is().",
    "answer": "Internals of Prototype Extension:\n1. Express initializes `express.request` with `Object.create(http.IncomingMessage.prototype)`.\n2. Express initializes `express.response` with `Object.create(http.ServerResponse.prototype)`.\n3. Custom helpers (`res.cookie`, `res.redirect`, `req.param`, `res.format`) are attached to these prototypes.\n4. In `app.handle(req, res)`: Express sets the prototype chain of the raw Node stream objects so that all Express methods become available with zero wrapper allocation overhead.",
    "explanation": "Because it uses prototype inheritance, any native Node HTTP method (e.g. res.write, res.end, req.on(\"data\")) remains completely functional in Express.",
    "importantPoints": [
      "Express subclasses native http.IncomingMessage and http.ServerResponse.",
      "Enriches req and res via prototype assignment at connection time.",
      "Native Node stream methods (write, end, pipe) remain available.",
      "Avoids the performance overhead of wrapping objects in new class instances."
    ],
    "commonMistakes": [
      "Believing Express req/res are completely separate classes disconnected from Node native streams.",
      "Overwriting standard prototype methods like res.send without invoking the original function."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Native Prototype Inheritance in Express",
        "code": "const express = require('express');\nconst http = require('http');\n\nconst app = express();\n\n// You can pass the Express app callback directly to native http.createServer:\nconst server = http.createServer(app);\n\napp.get('/', (req, res) => {\n  // Using Express helper:\n  res.status(200);\n  // Using native Node HTTP stream method directly:\n  res.write('Hello from raw Node stream! ');\n  res.end('Goodbye!');\n});\n\nserver.listen(3000);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "The express() Application Object and its Built-in Settings",
    "question": "What are the primary configuration settings available on the Express application object via app.set() and app.enable()?",
    "difficulty": "medium",
    "questionType": "Configuration",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "app-settings",
      "configuration",
      "etag",
      "env"
    ],
    "interviewAnswer": "The Express application object provides key settings via app.set(name, val): 1) \"env\" (environment mode); 2) \"trust proxy\" (reverse proxy header support); 3) \"etag\" (ETag generation algorithm); 4) \"json spaces\" (pretty-printing JSON); 5) \"case sensitive routing\" and \"strict routing\"; 6) \"view engine\" and \"views\" (template rendering configuration).",
    "answer": "Settings like `app.enable(\"case sensitive routing\")` force `/users` and `/Users` to be treated as different routes. `app.set(\"etag\", \"strong\")` configures HTTP caching behavior.",
    "explanation": "Settings like `app.enable(\"case sensitive routing\")` force `/users` and `/Users` to be treated as different routes. `app.set(\"etag\", \"strong\")` configures HTTP caching behavior.",
    "importantPoints": [
      "app.set and app.enable configure framework behavior.",
      "etag settings control automatic caching headers.",
      "case sensitive and strict routing enforce URL path rules."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The express() Application Object and its Built-in Settings",
        "code": "// Express Fundamentals: The express() Application Object and its Built-in Settings\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Graceful Shutdown in an Express Application",
    "question": "How do you implement graceful shutdown in an Express application when receiving SIGTERM or SIGINT signals?",
    "difficulty": "hard",
    "questionType": "Operations",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "graceful-shutdown",
      "sigterm",
      "kubernetes",
      "production"
    ],
    "interviewAnswer": "When receiving SIGTERM/SIGINT, listen on process.on(\"SIGTERM\"), call server.close() to stop accepting new connections, allow in-flight HTTP requests to finish (with a fallback timeout like 10-30s), close database connections (MongoDB/PostgreSQL), and exit with process.exit(0). This prevents dropped client requests during container deployments.",
    "answer": "Without graceful shutdown, Kubernetes or Docker terminates the process abruptly with SIGKILL, instantly dropping active HTTP requests mid-stream. Tracking active connections and closing databases cleanly prevents data corruption.",
    "explanation": "Without graceful shutdown, Kubernetes or Docker terminates the process abruptly with SIGKILL, instantly dropping active HTTP requests mid-stream. Tracking active connections and closing databases cleanly prevents data corruption.",
    "importantPoints": [
      "Listen for SIGTERM and SIGINT process signals.",
      "server.close() finishes pending requests and stops accepting new ones.",
      "Close database and Redis connection pools before exit.",
      "Use a forced timeout fallback to prevent hanging shutdown."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Graceful Shutdown in an Express Application",
        "code": "// Express Fundamentals: Graceful Shutdown in an Express Application\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Environment Modes: process.env.NODE_ENV and Express Optimizations",
    "question": "How does setting NODE_ENV=production alter the internal behavior and performance of Express?",
    "difficulty": "medium",
    "questionType": "Performance",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "node-env",
      "production",
      "caching",
      "performance"
    ],
    "interviewAnswer": "Setting NODE_ENV=production triggers internal optimizations in Express: 1) View templates are cached in memory instead of re-read from disk on every render; 2) CSS/template error pages omit full stack traces; 3) Internal router caching is enabled, significantly increasing requests per second.",
    "answer": "In development, Express reads templates from disk on every request for hot reloading and outputs verbose error stacks. In production, caching improves throughput by up to 3x.",
    "explanation": "In development, Express reads templates from disk on every request for hot reloading and outputs verbose error stacks. In production, caching improves throughput by up to 3x.",
    "importantPoints": [
      "Enables in-memory view template caching.",
      "Hides internal stack traces in default error pages.",
      "Improves request throughput significantly."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Environment Modes: process.env.NODE_ENV and Express Optimizations",
        "code": "// Express Fundamentals: Environment Modes: process.env.NODE_ENV and Express Optimizations\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Memory Leaks in Express: Global Middleware and Event Listeners",
    "question": "What are common sources of memory leaks in long-running Express applications?",
    "difficulty": "hard",
    "questionType": "Debugging",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "memory-leaks",
      "closures",
      "event-listeners"
    ],
    "interviewAnswer": "Common memory leak sources include: 1) Adding event listeners on req or res without removing them (e.g. req.on(\"close\")); 2) Appending data to global variables or in-memory arrays on every request without bounds; 3) Creating closures that capture large request payloads or res objects; 4) Unbounded caching inside middleware without LRU eviction.",
    "answer": "Because req and res hold references to TCP sockets and buffers, capturing them in a global array or persistent closure retains the entire HTTP request in memory indefinitely.",
    "explanation": "Because req and res hold references to TCP sockets and buffers, capturing them in a global array or persistent closure retains the entire HTTP request in memory indefinitely.",
    "importantPoints": [
      "Unbounded in-memory arrays or caches cause memory bloat.",
      "Uncleaned event listeners on req/res cause socket leaks.",
      "Use LRU caches (like lru-cache) instead of plain JavaScript objects."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Memory Leaks in Express: Global Middleware and Event Listeners",
        "code": "// Express Fundamentals: Memory Leaks in Express: Global Middleware and Event Listeners\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Serving Static Files with express.static",
    "question": "How does express.static() serve static assets, and how should cache headers be configured?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "static-files",
      "express-static",
      "caching",
      "maxAge"
    ],
    "interviewAnswer": "express.static(root, [options]) is a built-in middleware based on serve-static that streams files from a disk directory. In production, configure options like maxAge (e.g. \"1d\" or 86400000) to set Cache-Control headers, etag: true, and immutable: true for versioned assets.",
    "answer": "Syntax: `app.use(\"/static\", express.static(path.join(__dirname, \"public\"), { maxAge: \"7d\", etag: true }))`. It handles 304 Not Modified negotiations automatically.",
    "explanation": "Syntax: `app.use(\"/static\", express.static(path.join(__dirname, \"public\"), { maxAge: \"7d\", etag: true }))`. It handles 304 Not Modified negotiations automatically.",
    "importantPoints": [
      "Built-in middleware for static asset streaming.",
      "maxAge sets Cache-Control max-age header.",
      "Supports ETag and Last-Modified conditional requests automatically."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Serving Static Files with express.static",
        "code": "// Express Fundamentals: Serving Static Files with express.static\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Cluster Mode vs Single Process in Express",
    "question": "Why should multi-core production servers run Express using Node.js cluster mode or a process manager like PM2?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "clustering",
      "pm2",
      "multi-core",
      "scalability"
    ],
    "interviewAnswer": "Node.js is single-threaded by default, utilizing only 1 CPU core. On an 8-core server, a single Express process leaves 87.5% of CPU capacity idle. Running in Cluster Mode or using PM2 forks multiple worker processes sharing the same TCP port, scaling throughput linearly with available CPU cores.",
    "answer": "PM2 manages clustering automatically (`pm2 start server.js -i max`). When clustering, Express applications must be stateless (sessions in Redis, not in-memory memoryStore).",
    "explanation": "PM2 manages clustering automatically (`pm2 start server.js -i max`). When clustering, Express applications must be stateless (sessions in Redis, not in-memory memoryStore).",
    "importantPoints": [
      "Single process utilizes only 1 CPU core.",
      "Clustering forks worker processes to utilize all server cores.",
      "Requires stateless app architecture (shared Redis store for sessions)."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Cluster Mode vs Single Process in Express",
        "code": "// Express Fundamentals: Cluster Mode vs Single Process in Express\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "The express.json() and express.urlencoded() Parsers",
    "question": "How do express.json() and express.urlencoded() parse request payloads, and what is the limit option?",
    "difficulty": "easy",
    "questionType": "Middleware",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "express-json",
      "body-parser",
      "payload-limit"
    ],
    "interviewAnswer": "express.json() parses incoming JSON bodies (based on Content-Type: application/json). express.urlencoded() parses URL-encoded form submissions. Both buffer stream chunks and populate req.body. The limit option (e.g. limit: \"1mb\") enforces a maximum payload size, throwing a 413 Payload Too Large error to prevent denial-of-service memory exhaustion.",
    "answer": "By default, limit is \"100kb\". Setting a reasonable limit protects the server from clients sending 100MB JSON strings to crash the Node process.",
    "explanation": "By default, limit is \"100kb\". Setting a reasonable limit protects the server from clients sending 100MB JSON strings to crash the Node process.",
    "importantPoints": [
      "Populates req.body from incoming request stream.",
      "limit option protects against memory exhaustion (DoS).",
      "Throws 413 Payload Too Large if limit is exceeded."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The express.json() and express.urlencoded() Parsers",
        "code": "// Express Fundamentals: The express.json() and express.urlencoded() Parsers\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Handling URL Trailing Slashes with strict routing",
    "question": "How does the strict routing setting affect URL path matching in Express?",
    "difficulty": "medium",
    "questionType": "Routing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "strict-routing",
      "trailing-slash"
    ],
    "interviewAnswer": "By default, Express treats /users and /users/ identically. Enabling app.set(\"strict routing\", true) forces Express to differentiate them: a route defined for /users will NOT match a request to /users/. This is useful for strict SEO URL canonicalization.",
    "answer": "When combined with redirect middleware, strict routing ensures search engines index only one canonical URL version.",
    "explanation": "When combined with redirect middleware, strict routing ensures search engines index only one canonical URL version.",
    "importantPoints": [
      "Disabled by default (/users equals /users/).",
      "When enabled, /users and /users/ are distinct routes.",
      "Useful for SEO and strict REST URL contracts."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling URL Trailing Slashes with strict routing",
        "code": "// Express Fundamentals: Handling URL Trailing Slashes with strict routing\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Sub-Applications with app.use(mountPath, subApp)",
    "question": "How do Express sub-applications enable modular architecture, and how do they inherit settings?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "sub-apps",
      "modular",
      "mountpath"
    ],
    "interviewAnswer": "An Express application instance can be mounted inside another Express app via app.use(\"/api\", subApp). Sub-apps have their own middleware pipelines, view settings, and routers, but inherit settings from the parent app unless explicitly overridden. The subApp.mountpath property exposes the path on which it was mounted.",
    "answer": "Sub-applications are ideal for large microservices or admin portals (`app.use(\"/admin\", adminApp)`) where the admin panel needs separate templates and authentication pipelines.",
    "explanation": "Sub-applications are ideal for large microservices or admin portals (`app.use(\"/admin\", adminApp)`) where the admin panel needs separate templates and authentication pipelines.",
    "importantPoints": [
      "Mounts an entire Express app inside a parent app.",
      "subApp.mountpath contains the mount pattern.",
      "Provides isolated middleware stacks for large modules."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Sub-Applications with app.use(mountPath, subApp)",
        "code": "// Express Fundamentals: Sub-Applications with app.use(mountPath, subApp)\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Customizing the Express ETag Header Generation",
    "question": "How does Express calculate ETag headers by default, and how can you customize or disable them?",
    "difficulty": "medium",
    "questionType": "Performance",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "etag",
      "http-caching",
      "304-not-modified"
    ],
    "interviewAnswer": "By default, Express generates weak ETags (W/\"...\") by hashing the response body using CRC32. You can customize it via app.set(\"etag\", \"strong\") for MD5 hashes, pass a custom hashing function, or disable ETags completely via app.set(\"etag\", false) to save CPU cycles when an external reverse proxy (Cloudflare/Nginx) handles caching.",
    "answer": "ETags allow clients to send `If-None-Match` headers. If the hash matches, Express returns `304 Not Modified` with zero body transfer.",
    "explanation": "ETags allow clients to send `If-None-Match` headers. If the hash matches, Express returns `304 Not Modified` with zero body transfer.",
    "importantPoints": [
      "Weak ETags generated via CRC32 by default.",
      "app.set(\"etag\", false) disables ETag generation.",
      "Enables 304 Not Modified response negotiation."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Customizing the Express ETag Header Generation",
        "code": "// Express Fundamentals: Customizing the Express ETag Header Generation\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Disabling the X-Powered-By Header",
    "question": "Why and how should you disable the X-Powered-By: Express response header?",
    "difficulty": "easy",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "x-powered-by",
      "security",
      "fingerprinting"
    ],
    "interviewAnswer": "The X-Powered-By: Express header advertises to attackers that the server is running Express, making it easier to search for framework-specific vulnerabilities. Disable it using app.disable(\"x-powered-by\") or by applying the Helmet middleware (which removes it automatically).",
    "answer": "Syntax: `app.disable(\"x-powered-by\");`. Obscuring server technology is a basic security hardening best practice against automated scanners.",
    "explanation": "Syntax: `app.disable(\"x-powered-by\");`. Obscuring server technology is a basic security hardening best practice against automated scanners.",
    "importantPoints": [
      "Advertises server framework to potential attackers.",
      "Disabled via app.disable(\"x-powered-by\").",
      "Helmet automatically disables it."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Disabling the X-Powered-By Header",
        "code": "// Express Fundamentals: Disabling the X-Powered-By Header\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Handling HTTP OPTIONS Preflight Requests",
    "question": "How does Express handle HTTP OPTIONS requests, and why are they sent by browsers?",
    "difficulty": "medium",
    "questionType": "Networking",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "options",
      "cors",
      "preflight"
    ],
    "interviewAnswer": "Browsers send HTTP OPTIONS preflight requests before cross-origin non-simple requests (e.g. requests with Authorization headers, PUT/DELETE methods, or application/json). Express handles them via the cors() middleware or app.options(\"*\", cors()), returning allowed headers, methods, and origins with status 204 or 200.",
    "answer": "If your Express server does not handle OPTIONS, the browser blocks the subsequent POST/PUT request and throws a CORS error in the client console.",
    "explanation": "If your Express server does not handle OPTIONS, the browser blocks the subsequent POST/PUT request and throws a CORS error in the client console.",
    "importantPoints": [
      "Preflight sent automatically by browsers for non-simple cross-origin requests.",
      "cors() middleware handles OPTIONS automatically.",
      "Must return allowed methods, headers, and credentials."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling HTTP OPTIONS Preflight Requests",
        "code": "// Express Fundamentals: Handling HTTP OPTIONS Preflight Requests\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Streaming File Downloads with res.download vs res.sendFile",
    "question": "What is the operational difference between res.sendFile() and res.download()?",
    "difficulty": "easy",
    "questionType": "Response",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "sendFile",
      "download",
      "content-disposition"
    ],
    "interviewAnswer": "res.sendFile() streams a file directly with its natural MIME type for browser display (e.g. rendering an image or PDF in tab). res.download() sets the Content-Disposition: attachment header, forcing the browser to prompt a \"Save As\" download dialog with an optional custom filename.",
    "answer": "Both methods use `send` library under the hood, supporting chunked streaming and HTTP range requests for resumable downloads.",
    "explanation": "Both methods use `send` library under the hood, supporting chunked streaming and HTTP range requests for resumable downloads.",
    "importantPoints": [
      "res.sendFile displays file in browser if supported.",
      "res.download sets Content-Disposition: attachment.",
      "Both stream data without buffering full file in RAM."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Streaming File Downloads with res.download vs res.sendFile",
        "code": "// Express Fundamentals: Streaming File Downloads with res.download vs res.sendFile\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Node.js Unhandled Rejections and Express Process Termination",
    "question": "Why do unhandled Promise rejections crash Node.js processes in modern Node versions, and how should Express handle them?",
    "difficulty": "hard",
    "questionType": "Reliability",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "unhandledRejection",
      "crash",
      "process-lifecycle"
    ],
    "interviewAnswer": "Starting in Node.js 16+, unhandled Promise rejections terminate the Node process with non-zero exit code. In Express 4, if an async route throws without try/catch, it triggers unhandledRejection. You must register process.on(\"unhandledRejection\", (err) => { ... gracefulShutdown(); }) and use an async error wrapper in Express 4.",
    "answer": "Process handlers should log the critical error, finish open requests, and restart the process via a process manager (PM2/Kubernetes).",
    "explanation": "Process handlers should log the critical error, finish open requests, and restart the process via a process manager (PM2/Kubernetes).",
    "importantPoints": [
      "Node.js terminates on unhandledRejection.",
      "Express 4 does not catch async errors by default.",
      "Implement global process unhandledRejection listener."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Node.js Unhandled Rejections and Express Process Termination",
        "code": "// Express Fundamentals: Node.js Unhandled Rejections and Express Process Termination\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Using app.path() to Get Canonical Mount Path",
    "question": "What does app.path() return in nested Express application structures?",
    "difficulty": "medium",
    "questionType": "Routing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "app-path",
      "nested-apps"
    ],
    "interviewAnswer": "app.path() returns the canonical mounted URL path of the application as a string, resolving through all parent applications. For example, if app B is mounted at /blog on app A, and app A is mounted at /admin, calling appB.path() returns \"/admin/blog\".",
    "answer": "Useful for building dynamic links, routing breadcrumbs, and self-referencing API endpoints.",
    "explanation": "Useful for building dynamic links, routing breadcrumbs, and self-referencing API endpoints.",
    "importantPoints": [
      "Returns full canonical mounted path.",
      "Resolves through all parent application layers.",
      "Returns empty string for top-level root app."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Using app.path() to Get Canonical Mount Path",
        "code": "// Express Fundamentals: Using app.path() to Get Canonical Mount Path\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "The Role of next(\"route\") in Skipping Route Handlers",
    "question": "What does calling next(\"route\") accomplish inside an Express route handler?",
    "difficulty": "medium",
    "questionType": "Routing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "next-route",
      "skip-handlers"
    ],
    "interviewAnswer": "Calling next(\"route\") bypasses all remaining middleware functions in the current route stack and passes control directly to the NEXT matching route handler for the same URL. It is used for conditional routing (e.g. bypassing normal processing for admin users).",
    "answer": "Note: `next(\"route\")` only works in handlers mounted using `app.METHOD()` or `router.METHOD()`. It does NOT work inside middleware mounted via `app.use()`.",
    "explanation": "Note: `next(\"route\")` only works in handlers mounted using `app.METHOD()` or `router.METHOD()`. It does NOT work inside middleware mounted via `app.use()`.",
    "importantPoints": [
      "Skips remaining handlers in the current route.",
      "Jumps to the next matching route block.",
      "Only works in app.VERB or router.VERB handlers."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The Role of next(\"route\") in Skipping Route Handlers",
        "code": "// Express Fundamentals: The Role of next(\"route\") in Skipping Route Handlers\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Preventing Event Loop Blocking in CPU-Intensive Express Handlers",
    "question": "How should CPU-intensive operations (image processing, cryptography) be handled to prevent freezing an Express API?",
    "difficulty": "hard",
    "questionType": "Performance",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "event-loop",
      "worker-threads",
      "offloading"
    ],
    "interviewAnswer": "Because Node.js runs on a single event loop thread, synchronous CPU-intensive work (e.g. PBKDF2 hashing, video transcoding, PDF generation) blocks all incoming HTTP requests for all users. Offload CPU-heavy tasks to: 1) Node.js Worker Threads (worker_threads); 2) Child processes (child_process.fork); 3) Asynchronous background job queues (BullMQ/Redis).",
    "answer": "Express should respond immediately with `202 Accepted` and a job ID, while a background worker processes the heavy job asynchronously.",
    "explanation": "Express should respond immediately with `202 Accepted` and a job ID, while a background worker processes the heavy job asynchronously.",
    "importantPoints": [
      "CPU work freezes the event loop for all concurrent requests.",
      "Offload to Worker Threads or external job queues (BullMQ).",
      "Return 202 Accepted with polling/webhook pattern."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Preventing Event Loop Blocking in CPU-Intensive Express Handlers",
        "code": "// Express Fundamentals: Preventing Event Loop Blocking in CPU-Intensive Express Handlers\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Handling Multipart Form Data and File Uploads",
    "question": "Why can express.json() not parse multipart/form-data, and how does multer handle file uploads?",
    "difficulty": "easy",
    "questionType": "Middleware",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "multer",
      "multipart",
      "file-uploads"
    ],
    "interviewAnswer": "express.json() only parses text/json payloads. File uploads are transmitted as multipart/form-data with binary boundary markers. Middleware like Multer parses the multipart stream, streams uploaded files directly to disk or memory (Buffer), and populates req.file / req.files alongside req.body.",
    "answer": "Always configure Multer file size limits (`limits: { fileSize: 5 * 1024 * 1024 }`) and fileFilter to prevent disk exhaustion attacks.",
    "explanation": "Always configure Multer file size limits (`limits: { fileSize: 5 * 1024 * 1024 }`) and fileFilter to prevent disk exhaustion attacks.",
    "importantPoints": [
      "multipart/form-data requires specialized stream parser (Multer).",
      "Populates req.file or req.files with uploaded metadata.",
      "Always enforce file size and MIME type limits."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling Multipart Form Data and File Uploads",
        "code": "// Express Fundamentals: Handling Multipart Form Data and File Uploads\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Compression Middleware: express-compression and Bandwidth Savings",
    "question": "How does the compression middleware reduce response latency, and when should it be bypassed?",
    "difficulty": "medium",
    "questionType": "Performance",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "compression",
      "gzip",
      "brotli",
      "bandwidth"
    ],
    "interviewAnswer": "The compression() middleware inspects Accept-Encoding headers and compresses outgoing response bodies using Gzip or Brotli. It reduces JSON payload size by 70-85%, speeding up mobile data transfers. Bypass compression for small payloads (< 1KB) or when a reverse proxy (Cloudflare/Nginx) already performs edge compression.",
    "answer": "Syntax: `app.use(compression({ threshold: 1024 }))`. Compressing payloads under 1KB wastes CPU without reducing packet counts.",
    "explanation": "Syntax: `app.use(compression({ threshold: 1024 }))`. Compressing payloads under 1KB wastes CPU without reducing packet counts.",
    "importantPoints": [
      "Compresses responses with Gzip or Brotli.",
      "Reduces JSON payload size by up to 80%.",
      "Configure threshold to avoid compressing tiny responses."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Compression Middleware: express-compression and Bandwidth Savings",
        "code": "// Express Fundamentals: Compression Middleware: express-compression and Bandwidth Savings\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "URL Decoding and Parameter Normalization in Express",
    "question": "How does Express handle URL-encoded characters in route parameters and query strings?",
    "difficulty": "easy",
    "questionType": "Routing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "url-decoding",
      "params",
      "query"
    ],
    "interviewAnswer": "Express automatically decodes percent-encoded characters (e.g. %20 to space, %40 to @) in route parameters (req.params) and query values (req.query) using decodeURIComponent. If a client sends a malformed URL with invalid encoding (e.g. %99), Express throws a URIError (400 Bad Request).",
    "answer": "You do not need to call `decodeURIComponent(req.params.id)` manually in your route handlers; Express already provides the decoded string.",
    "explanation": "You do not need to call `decodeURIComponent(req.params.id)` manually in your route handlers; Express already provides the decoded string.",
    "importantPoints": [
      "Route parameters and query strings are auto-decoded.",
      "Throws URIError on invalid percent-encoding.",
      "Do not double-decode in application handlers."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "URL Decoding and Parameter Normalization in Express",
        "code": "// Express Fundamentals: URL Decoding and Parameter Normalization in Express\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Configuring Express for HTTP/2 and HTTPS",
    "question": "How do you run an Express application over HTTPS and HTTP/2 natively in Node.js?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "https",
      "http2",
      "ssl-tls",
      "certificates"
    ],
    "interviewAnswer": "Load SSL certificates using fs.readFileSync, and pass the Express app callback into https.createServer({ key, cert }, app).listen(443). For HTTP/2, use Node's native http2 module via http2.createSecureServer({ key, cert }, app).listen(443). In cloud environments, SSL is typically terminated at the load balancer (ALB/Cloudflare).",
    "answer": "Running HTTPS directly in Express is useful for local development and compliance, while production usually terminates SSL at the reverse proxy.",
    "explanation": "Running HTTPS directly in Express is useful for local development and compliance, while production usually terminates SSL at the reverse proxy.",
    "importantPoints": [
      "https.createServer passes Express app as request listener.",
      "Requires private key and certificate files.",
      "Production commonly terminates TLS at edge reverse proxy."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Configuring Express for HTTP/2 and HTTPS",
        "code": "// Express Fundamentals: Configuring Express for HTTP/2 and HTTPS\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "The case sensitive routing Setting",
    "question": "When should case sensitive routing be enabled, and what are its trade-offs?",
    "difficulty": "easy",
    "questionType": "Configuration",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "case-sensitive-routing",
      "url-paths"
    ],
    "interviewAnswer": "Enabled via app.set(\"case sensitive routing\", true). When enabled, /api/Users and /api/users route to completely different handlers. Disabled by default because URLs are generally treated as case-insensitive in web standards to prevent user 404 errors.",
    "answer": "Keep it disabled unless integrating with legacy systems or strict REST specifications that differentiate uppercase identifiers in paths.",
    "explanation": "Keep it disabled unless integrating with legacy systems or strict REST specifications that differentiate uppercase identifiers in paths.",
    "importantPoints": [
      "Disabled by default.",
      "Differentiates uppercase and lowercase URL paths.",
      "Can cause unexpected 404s if clients vary letter casing."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The case sensitive routing Setting",
        "code": "// Express Fundamentals: The case sensitive routing Setting\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Customizing the JSON Replacer and Spaces in res.json()",
    "question": "How can you format JSON output or filter sensitive fields globally using json replacer and json spaces?",
    "difficulty": "medium",
    "questionType": "Configuration",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "json-replacer",
      "json-spaces",
      "serialization"
    ],
    "interviewAnswer": "app.set(\"json spaces\", 2) formats outgoing JSON with 2-space indentation (useful for dev readability). app.set(\"json replacer\", (key, value) => ...) applies a global JSON replacer function to every res.json() call, allowing automatic stripping of internal fields (like passwordHash or __v).",
    "answer": "In production, leave `json spaces` disabled (default: 0) to minimize network bytes.",
    "explanation": "In production, leave `json spaces` disabled (default: 0) to minimize network bytes.",
    "importantPoints": [
      "json spaces enables pretty-printed JSON output.",
      "json replacer filters or transforms keys globally.",
      "Disable json spaces in production to conserve bandwidth."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Customizing the JSON Replacer and Spaces in res.json()",
        "code": "// Express Fundamentals: Customizing the JSON Replacer and Spaces in res.json()\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Auditing Express Application Health via /health and Readiness Probes",
    "question": "What is the architectural difference between a Liveness probe and a Readiness probe in an Express API?",
    "difficulty": "medium",
    "questionType": "Operations",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "health-check",
      "liveness",
      "readiness",
      "kubernetes"
    ],
    "interviewAnswer": "A Liveness probe (/health/live) checks if the Express process is running and responsive; if it fails, the container orchestrator restarts the pod. A Readiness probe (/health/ready) checks if the application can accept traffic (e.g. database connected, cache warm); if it fails, traffic is stopped from routing to the container without restarting it.",
    "answer": "Do not check database connectivity inside the Liveness probe. If the database experiences a 5-second hiccup, all Express pods will crash and restart in an infinite loop.",
    "explanation": "Do not check database connectivity inside the Liveness probe. If the database experiences a 5-second hiccup, all Express pods will crash and restart in an infinite loop.",
    "importantPoints": [
      "Liveness checks process responsiveness (restarts on failure).",
      "Readiness checks database and dependency availability (pauses traffic).",
      "Never check external DBs in liveness probes."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Auditing Express Application Health via /health and Readiness Probes",
        "code": "// Express Fundamentals: Auditing Express Application Health via /health and Readiness Probes\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "express-fundamentals",
    "title": "Express Architectural Summary: Strengths and Trade-offs",
    "question": "What architectural trade-offs make Express both the most popular Node framework and prone to architectural drift?",
    "difficulty": "easy",
    "questionType": "Philosophy",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "fundamentals",
      "philosophy",
      "trade-offs",
      "architecture"
    ],
    "interviewAnswer": "Strengths: Extreme minimalism, zero opinionation, vast npm middleware ecosystem, and lightweight memory footprint. Trade-offs: Lacks built-in conventions for directory structure, validation, or dependency injection (unlike NestJS), which can lead to disorganized \"spaghetti\" codebases without strict team standards.",
    "answer": "Express is a micro-framework: it provides routing and middleware, leaving architecture, ORMs, and design patterns entirely to the developer.",
    "explanation": "Express is a micro-framework: it provides routing and middleware, leaving architecture, ORMs, and design patterns entirely to the developer.",
    "importantPoints": [
      "Minimalist and flexible with zero architectural enforcement.",
      "Vast ecosystem of composable middleware.",
      "Requires strong conventions in large teams to avoid architectural drift."
    ],
    "commonMistakes": [
      "Misunderstanding middleware order or reverse proxy headers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Express Architectural Summary: Strengths and Trade-offs",
        "code": "// Express Fundamentals: Express Architectural Summary: Strengths and Trade-offs\nconst express = require('express');\nconst app = express();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
