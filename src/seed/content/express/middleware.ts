import { SeedQuestion } from '../types';

export const middlewareQuestions: SeedQuestion[] = [
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Scenario: Middleware A Executes but Middleware B Never Executes",
    "question": "Middleware A executes but middleware B never executes. What could be wrong?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "next",
      "middleware-ordering",
      "debugging",
      "lifecycle"
    ],
    "interviewAnswer": "There are 6 common reasons why middleware B never executes after A: 1) Middleware A omitted next(), so the request pipeline stalls; 2) Middleware A terminated the response early (e.g. return res.status(401).json(...)) without calling next(); 3) Middleware A passed an error to next(err), causing Express to bypass all remaining normal middleware and jump straight to error-handling middleware; 4) Middleware A called next(\"route\"), skipping remaining handlers in the current route stack; 5) Middleware B was mounted on a path that does not match the incoming request; 6) Middleware B was registered AFTER the route handler that sent the response.",
    "answer": "Systematic Debugging Checklist when Middleware B fails to run:\n\n1. Check next() Invocation in Middleware A:\nEnsure Middleware A calls `next()` on all execution branches. If an `if/else` branch forgets `next()`, any request entering that branch hangs indefinitely.\n\n2. Response Sent Early:\nIf Middleware A sends a response (`res.send()`, `res.redirect()`, `res.json()`), the request-response cycle is complete. Downstream middleware will not execute.\n\n3. Error Passed to next():\nIf Middleware A executes `next(error)` or catches an asynchronous error, Express skips all subsequent standard middleware (including Middleware B) and routes immediately to 4-parameter error middleware `(err, req, res, next)`.\n\n4. Conditional next(\"route\"):\nIf Middleware A calls `next(\"route\")`, Express skips all remaining handlers on the current route.\n\n5. Registration Order:\nRemember that Express executes middleware strictly in the order of `app.use()` and route declarations. If Middleware B was registered below a route handler that terminates the response, it will never be reached.",
    "explanation": "Express middleware execution is purely sequential; tracing the exact order of next() calls and branch logic quickly isolates the failure.",
    "importantPoints": [
      "Ensure next() is called on every conditional branch in Middleware A.",
      "Sending a response early terminates the pipeline.",
      "Passing an error to next(err) skips standard middleware to error handlers.",
      "next(\"route\") skips remaining middleware in the current route block.",
      "Verify registration order: middleware must be registered before the terminal handler."
    ],
    "commonMistakes": [
      "Forgetting next() inside an asynchronous callback or catch block in Middleware A.",
      "Registering middleware B below the route definition."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Common Bug: Missing next() in Conditional Branch",
        "code": "// BROKEN: If user is not admin, next() is never called!\nconst middlewareA = (req, res, next) => {\n  if (req.user && req.user.isAdmin) {\n    req.role = 'admin';\n    next();\n  }\n  // Missing else branch! Non-admin requests hang here, middleware B never runs!\n};\n\n// FIXED:\nconst middlewareAFixed = (req, res, next) => {\n  if (req.user && req.user.isAdmin) {\n    req.role = 'admin';\n  } else {\n    req.role = 'guest';\n  }\n  next(); // Always advances!\n};"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "The 5 Types of Express Middleware",
    "question": "What are the 5 distinct categories of middleware in Express, and how do they differ?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "application-middleware",
      "router-middleware",
      "error-middleware"
    ],
    "interviewAnswer": "Express defines 5 types of middleware: 1) Application-level middleware (bound to app object via app.use or app.METHOD); 2) Router-level middleware (bound to an express.Router instance via router.use); 3) Error-handling middleware (takes 4 arguments: (err, req, res, next)); 4) Built-in middleware (express.json, express.static, express.urlencoded); 5) Third-party middleware (helmet, cors, morgan, compression).",
    "answer": "Middleware Categories Breakdown:\n\n1. Application-Level: Executes globally for all or prefixed routes (`app.use(logger)`).\n2. Router-Level: Scoped strictly to routes on that specific router (`router.use(verifyToken)`).\n3. Error-Handling: Always defined with exactly 4 parameters `(err, req, res, next)`. Express checks `fn.length === 4` to identify error handlers.\n4. Built-in: Included with the Express package (`express.static`, `express.json`, `express.urlencoded`, `express.raw`, `express.text`).\n5. Third-Party: Installed from npm to add standard capabilities (`cookie-parser`, `csurf`, `multer`).",
    "explanation": "All 5 types share the same fundamental mechanism: accepting incoming request streams and passing control via next().",
    "importantPoints": [
      "Application-level runs across the global app.",
      "Router-level is isolated to a specific express.Router.",
      "Error-handling middleware requires exactly 4 arguments.",
      "Built-in middleware parses bodies and serves static assets.",
      "Third-party middleware adds ecosystem plugins."
    ],
    "commonMistakes": [
      "Declaring an error middleware with only 3 arguments, causing Express to treat it as regular middleware.",
      "Mounting router-level middleware after defining router routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Examples of the 5 Middleware Types",
        "code": "// 1. Built-in\napp.use(express.json());\n\n// 2. Third-party\nconst cors = require('cors');\napp.use(cors());\n\n// 3. Application-level\napp.use((req, res, next) => {\n  req.requestTime = Date.now();\n  next();\n});\n\n// 4. Router-level\nconst router = express.Router();\nrouter.use((req, res, next) => {\n  console.log('Router-level check');\n  next();\n});\n\n// 5. Error-handling (Must have 4 parameters)\napp.use((err, req, res, next) => {\n  res.status(500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Middleware Ordering Rules and Best Practices",
    "question": "What rules govern middleware registration order in Express, and how should a production pipeline be structured?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "middleware-ordering",
      "pipeline",
      "architecture"
    ],
    "interviewAnswer": "Express evaluates middleware in exact linear declaration order. The golden rule is: 1) Security headers & proxies (Helmet, trust proxy); 2) Cross-origin & rate limiting (CORS, express-rate-limit); 3) Request logging & tracking (Morgan, correlationId); 4) Body parsers (express.json, urlencoded); 5) Authentication & sessions; 6) Public routes; 7) Protected routes with authorization guards; 8) 404 Catch-all handler; 9) Centralized 4-argument Error-handling middleware at the very end.",
    "answer": "Standard Production Middleware Stack Ordering:\n\n1. `app.set(\"trust proxy\", ...)`\n2. `app.use(helmet())` (Security headers before anything else)\n3. `app.use(cors())` (CORS preflights must be answered before auth/body parsers)\n4. `app.use(rateLimiter)` (Drop abusive traffic before parsing heavy bodies)\n5. `app.use(correlationIdMiddleware)` (Tag request for distributed tracing)\n6. `app.use(morgan(\"combined\"))` (Log requests with correlation ID)\n7. `app.use(express.json({ limit: \"1mb\" }))` (Parse payload)\n8. `app.use(cookieParser())`\n9. Public routes (`/api/auth/login`, `/health`)\n10. `app.use(authGuard)` (Verify JWT / session)\n11. Protected domain routers (`/api/users`, `/api/orders`)\n12. Catch-all 404 handler (`app.use((req, res) => res.status(404)...)`)\n13. Global Error Handler (`app.use((err, req, res, next) => ...)`).",
    "explanation": "Placing body parsers above rate-limiters or CORS wastes CPU parsing requests that should be rejected immediately.",
    "importantPoints": [
      "Registration order is execution order.",
      "Place CORS and security headers at the top of the stack.",
      "Place rate limiters before heavy body parsers.",
      "Place error-handling middleware at the absolute bottom of the stack.",
      "404 catch-all must precede error-handling middleware."
    ],
    "commonMistakes": [
      "Placing error middleware before routes, meaning it never catches route errors.",
      "Placing body-parser below route definitions, causing req.body to be undefined.",
      "Placing CORS below authentication, causing preflight OPTIONS requests to fail with 401."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Correct Production Middleware Order",
        "code": "// 1. Security & Network\napp.use(helmet());\napp.use(cors());\napp.use(limiter);\n\n// 2. Parsers\napp.use(express.json({ limit: '500kb' }));\n\n// 3. Domain Routes\napp.use('/api/public', publicRoutes);\napp.use('/api/private', authenticate, privateRoutes);\n\n// 4. Fallthrough 404\napp.use((req, res, next) => {\n  res.status(404).json({ error: 'Endpoint Not Found' });\n});\n\n// 5. Centralized Error Handler (LAST)\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Configurable / Higher-Order Middleware Factory Functions",
    "question": "How do you design a configurable middleware factory function that accepts custom options?",
    "difficulty": "medium",
    "questionType": "Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "factory-pattern",
      "higher-order-functions",
      "closures"
    ],
    "interviewAnswer": "A middleware factory is a higher-order function that accepts configuration options and returns a standard (req, res, next) middleware function, leveraging JavaScript closures. This pattern allows the same middleware logic to be reused with different settings (e.g. rateLimit({ max: 100 }), authorizeRoles([\"ADMIN\", \"SUPERADMIN\"]), or validate(schema)).",
    "answer": "Pattern Implementation:\n```javascript\nfunction requireRole(allowedRoles) {\n  return function (req, res, next) {\n    if (!req.user || !allowedRoles.includes(req.user.role)) {\n      return res.status(403).json({ error: \"Forbidden: Insufficient privileges\" });\n    }\n    next();\n  };\n}\n\n// Usage on routes:\nrouter.delete(\"/users/:id\", authenticate, requireRole([\"ADMIN\"]), deleteUser);\nrouter.get(\"/reports\", authenticate, requireRole([\"ADMIN\", \"MANAGER\"]), getReports);\n```",
    "explanation": "The outer function executes once at application startup when registering the route; the inner returned function executes on every matching HTTP request.",
    "importantPoints": [
      "Outer function takes configuration parameters.",
      "Inner function returns standard (req, res, next) middleware.",
      "Leverages closures to retain configuration in memory.",
      "Enables DRY, composable authorization, validation, and rate limiting."
    ],
    "commonMistakes": [
      "Invoking the middleware without calling the factory: app.use(requireRole) instead of app.use(requireRole([\"ADMIN\"])).",
      "Re-computing expensive initialization logic inside the inner request handler."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Configurable Header Injection Middleware",
        "code": "function setCustomHeader(headerName, headerValue) {\n  return (req, res, next) => {\n    res.setHeader(headerName, headerValue);\n    next();\n  };\n}\n\n// Reused with different configurations:\napp.use(setCustomHeader('X-API-Version', '1.4.2'));\napp.use(setCustomHeader('X-Server-Node', process.env.NODE_ID || 'primary'));"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Async Middleware Error Handling in Express 4 vs Express 5",
    "question": "Why do async middleware functions in Express 4 fail to catch rejected Promises, and how is this resolved?",
    "difficulty": "hard",
    "questionType": "Error Handling",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "async-await",
      "promises",
      "unhandledRejection",
      "express-5"
    ],
    "interviewAnswer": "Express 4 was written before Promises existed; it expects synchronous execution or explicit next(err) callbacks. If an async middleware rejects or throws, the rejection escapes the synchronous try/catch in Express 4 and triggers an unhandledRejection, hanging the request or crashing the process. In Express 4, you must wrap async handlers in a helper (fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)) or use express-async-errors. Express 5 natively catches rejected Promises.",
    "answer": "The Async Wrapper Utility in Express 4:\n```javascript\nconst asyncHandler = (fn) => (req, res, next) => {\n  Promise.resolve(fn(req, res, next)).catch(next);\n};\n\n// Usage:\napp.get(\"/data\", asyncHandler(async (req, res) => {\n  const data = await fetchDataFromDb(); // If this throws, catch(next) forwards it!\n  res.json(data);\n}));\n```\nWithout this wrapper in Express 4, any error thrown inside an async handler will leave the HTTP client hanging until timeout.",
    "explanation": "Express 5 rewrote its internal router dispatch to check if the returned value is a Promise (`isPromise(result)`), automatically chaining `.catch(next)`.",
    "importantPoints": [
      "Express 4 does not catch rejected Promises natively.",
      "Unhandled async errors in Express 4 trigger unhandledRejection.",
      "Use the asyncHandler helper or express-async-errors in Express 4.",
      "Express 5 natively catches rejected Promises without wrappers."
    ],
    "commonMistakes": [
      "Assuming try/catch blocks outside the async function can catch internal rejections.",
      "Writing raw async (req, res, next) in Express 4 without try/catch or wrapper."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Universal Async Handler Wrapper for Express 4",
        "code": "const asyncHandler = fn => (req, res, next) => {\n  Promise.resolve(fn(req, res, next)).catch(next);\n};\n\napp.get('/users/:id', asyncHandler(async (req, res) => {\n  const user = await User.findById(req.params.id);\n  if (!user) {\n    const error = new Error('User not found');\n    error.status = 404;\n    throw error; // Automatically forwarded to error middleware!\n  }\n  res.json(user);\n}));"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Sharing Data Between Middleware via req and res.locals",
    "question": "How should data be passed between upstream middleware and downstream route handlers?",
    "difficulty": "easy",
    "questionType": "Best Practices",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "res-locals",
      "req-decoration",
      "data-passing"
    ],
    "interviewAnswer": "Use req decoration (e.g. req.user = user) for data scoped to business logic within request handlers, and res.locals (e.g. res.locals.user = user) for data that should also be accessible to template view engines during rendering. Both are strictly scoped to the current request-response cycle and automatically garbage collected upon response completion.",
    "answer": "Never use global variables or module-level variables to share state across middleware, as concurrent requests will overwrite each other's data.",
    "explanation": "Never use global variables or module-level variables to share state across middleware, as concurrent requests will overwrite each other's data.",
    "importantPoints": [
      "req.user is standard for authenticated user context.",
      "res.locals is available in template engines (EJS, Pug).",
      "Both are strictly request-scoped and thread-safe."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Sharing Data Between Middleware via req and res.locals",
        "code": "// Express Middleware: Sharing Data Between Middleware via req and res.locals\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "The next(\"router\") Directive in Router-Level Middleware",
    "question": "What does calling next(\"router\") do inside router-level middleware?",
    "difficulty": "medium",
    "questionType": "Routing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "next-router",
      "sub-routers"
    ],
    "interviewAnswer": "Calling next(\"router\") aborts processing of the current express.Router instance entirely and passes control to the next middleware or router mounted on the parent application. It is useful for tenant-level or feature-flag routing where a sub-router should be completely bypassed.",
    "answer": "If `/api` mounts `v1Router` and `v2Router`, calling `next(\"router\")` inside `v1Router` skips all remaining v1 routes and falls through to `v2Router`.",
    "explanation": "If `/api` mounts `v1Router` and `v2Router`, calling `next(\"router\")` inside `v1Router` skips all remaining v1 routes and falls through to `v2Router`.",
    "importantPoints": [
      "Bypasses all remaining routes in current router instance.",
      "Passes control back to parent application stack.",
      "Only valid in express.Router middleware."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The next(\"router\") Directive in Router-Level Middleware",
        "code": "// Express Middleware: The next(\"router\") Directive in Router-Level Middleware\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Morgan Request Logger: Formats and Production Streaming",
    "question": "How should Morgan request logging be configured in development versus production?",
    "difficulty": "easy",
    "questionType": "Logging",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "morgan",
      "logging",
      "production",
      "winston"
    ],
    "interviewAnswer": "In development, use morgan(\"dev\") for concise, colored terminal output. In production, use morgan(\"combined\") for Apache/Nginx standardized logs or stream JSON logs directly into a structured logging library (like Winston or Pino), skipping health check endpoints to reduce log noise.",
    "answer": "Stream Morgan logs to a transport:\n`app.use(morgan(\"combined\", { stream: { write: msg => logger.info(msg.trim()) }, skip: req => req.path === \"/health\" }));`",
    "explanation": "Stream Morgan logs to a transport:\n`app.use(morgan(\"combined\", { stream: { write: msg => logger.info(msg.trim()) }, skip: req => req.path === \"/health\" }));`",
    "importantPoints": [
      "morgan(\"dev\") provides colorized console output.",
      "morgan(\"combined\") outputs standardized production log lines.",
      "Filter out health check pings using the skip option."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Morgan Request Logger: Formats and Production Streaming",
        "code": "// Express Middleware: Morgan Request Logger: Formats and Production Streaming\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "CORS Middleware: Origin Whitelisting and Preflight Caching",
    "question": "How do you configure the cors() middleware for multiple dynamic allowed origins and preflight caching?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "cors",
      "security",
      "preflight",
      "maxAge"
    ],
    "interviewAnswer": "Pass a dynamic origin function: origin: (origin, callback) => { if (!origin || allowedOrigins.includes(origin)) callback(null, true); else callback(new Error(\"CORS policy violation\")); }. Set maxAge (e.g. 86400) to instruct browsers to cache OPTIONS preflight responses, reducing preflight request overhead.",
    "answer": "Setting `credentials: true` requires an explicit origin (not `*`); otherwise, browsers reject responses with cookies or authorization headers.",
    "explanation": "Setting `credentials: true` requires an explicit origin (not `*`); otherwise, browsers reject responses with cookies or authorization headers.",
    "importantPoints": [
      "Dynamic origin callback allows multi-domain whitelists.",
      "maxAge sets Access-Control-Max-Age for preflight caching.",
      "credentials: true requires explicit origin header."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "CORS Middleware: Origin Whitelisting and Preflight Caching",
        "code": "// Express Middleware: CORS Middleware: Origin Whitelisting and Preflight Caching\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Helmet Middleware: Default Protections and CSP Configuration",
    "question": "What essential security headers does Helmet configure by default, and how is Content Security Policy (CSP) adjusted?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "helmet",
      "security-headers",
      "csp",
      "hsts"
    ],
    "interviewAnswer": "Helmet sets: 1) Strict-Transport-Security (HSTS); 2) X-Content-Type-Options: nosniff; 3) X-Frame-Options: SAMEORIGIN (clickjacking protection); 4) X-XSS-Protection; 5) Content-Security-Policy (CSP). Adjust CSP via helmet({ contentSecurityPolicy: { directives: { defaultSrc: [\"'self'\"], scriptSrc: [\"'self'\", \"trusted.cdn.com\"] } } }).",
    "answer": "Default CSP may block inline scripts or third-party CDNs; configure specific directives according to frontend requirements.",
    "explanation": "Default CSP may block inline scripts or third-party CDNs; configure specific directives according to frontend requirements.",
    "importantPoints": [
      "Sets 11+ HTTP security headers out of the box.",
      "Prevents clickjacking, MIME-type sniffing, and cross-site scripting.",
      "CSP directives must be tuned for frontend CDNs."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Helmet Middleware: Default Protections and CSP Configuration",
        "code": "// Express Middleware: Helmet Middleware: Default Protections and CSP Configuration\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Rate Limiting with express-rate-limit and RedisStore",
    "question": "Why should express-rate-limit use a Redis store instead of the default MemoryStore in production clusters?",
    "difficulty": "medium",
    "questionType": "Scalability",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "rate-limiting",
      "redis",
      "dos",
      "clustering"
    ],
    "interviewAnswer": "The default MemoryStore tracks request counts in the local Node.js process RAM. In production with multiple clustered processes or Kubernetes pods, each container maintains its own memory, allowing clients to send N * limit requests across pods. Using rate-limit-redis shares a centralized counter in Redis, guaranteeing uniform global rate limiting.",
    "answer": "MemoryStore also leaks memory over time if IP traffic is highly distributed. Redis handles TTL expiration natively.",
    "explanation": "MemoryStore also leaks memory over time if IP traffic is highly distributed. Redis handles TTL expiration natively.",
    "importantPoints": [
      "MemoryStore does not share state across cluster workers or pods.",
      "rate-limit-redis provides centralized atomic counters.",
      "Enforces uniform limits across auto-scaled container deployments."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Rate Limiting with express-rate-limit and RedisStore",
        "code": "// Express Middleware: Rate Limiting with express-rate-limit and RedisStore\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Body Parser: Raw Body Capture for Webhooks (Stripe / GitHub)",
    "question": "How do you capture the unparsed raw Buffer of a request body for cryptographic signature verification in Stripe or GitHub webhooks?",
    "difficulty": "hard",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "raw-body",
      "webhooks",
      "stripe",
      "cryptography"
    ],
    "interviewAnswer": "Use express.json({ verify: (req, res, buf) => { req.rawBody = buf; } }) or mount express.raw({ type: \"application/json\" }) specifically on the webhook route before express.json() parses it. Cryptographic signatures (HMAC-SHA256) verify the raw byte stream; verifying against JSON.stringify(req.body) fails due to whitespace differences.",
    "answer": "Re-serializing `req.body` alters spacing and key ordering, breaking cryptographic signature checks. Accessing the raw `buf` is mandatory.",
    "explanation": "Re-serializing `req.body` alters spacing and key ordering, breaking cryptographic signature checks. Accessing the raw `buf` is mandatory.",
    "importantPoints": [
      "verify callback in express.json captures raw Buffer.",
      "Cryptographic webhook validation requires exact raw bytes.",
      "Re-serializing parsed JSON breaks HMAC signature verification."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Body Parser: Raw Body Capture for Webhooks (Stripe / GitHub)",
        "code": "// Express Middleware: Body Parser: Raw Body Capture for Webhooks (Stripe / GitHub)\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Preventing Parameter Pollution with hpp Middleware",
    "question": "What is HTTP Parameter Pollution (HPP), and how does the hpp middleware mitigate it?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "hpp",
      "parameter-pollution",
      "security"
    ],
    "interviewAnswer": "HTTP Parameter Pollution occurs when an attacker submits multiple query parameters with the same name (?role=user&role=admin). Express parses this as an array: req.query.role = [\"user\", \"admin\"]. If code assumes it is a string (req.query.role.toUpperCase()), it crashes; or if passed to SQL/NoSQL, it injects unintended criteria. The hpp() middleware forces parameters to be single strings, storing duplicates in req.queryPolluted.",
    "answer": "Configure a whitelist for legitimate array parameters: `app.use(hpp({ whitelist: [\"filter\", \"tags\"] }));`.",
    "explanation": "Configure a whitelist for legitimate array parameters: `app.use(hpp({ whitelist: [\"filter\", \"tags\"] }));`.",
    "importantPoints": [
      "Duplicate query keys parse as arrays in Express.",
      "Can crash handlers expecting strings or inject filters.",
      "hpp middleware converts duplicate keys into single scalar values."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Preventing Parameter Pollution with hpp Middleware",
        "code": "// Express Middleware: Preventing Parameter Pollution with hpp Middleware\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Request Correlation ID (X-Request-Id) Middleware",
    "question": "How do you implement correlation ID middleware to track requests across distributed microservices?",
    "difficulty": "medium",
    "questionType": "Observability",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "correlation-id",
      "tracing",
      "logging"
    ],
    "interviewAnswer": "Inspect incoming req.headers[\"x-request-id\"]. If present, reuse it; if missing, generate a new UUID (crypto.randomUUID()). Attach it to req.id, set it in the response header (res.setHeader(\"X-Request-Id\", req.id)), and include req.id in all application logs (Pino/Winston) and downstream HTTP client headers.",
    "answer": "This allows engineers to trace a single user click across 10 microservices in centralized log platforms (Datadog/Elasticsearch).",
    "explanation": "This allows engineers to trace a single user click across 10 microservices in centralized log platforms (Datadog/Elasticsearch).",
    "importantPoints": [
      "Reuses incoming X-Request-Id or generates a UUID.",
      "Sets X-Request-Id on response header.",
      "Attached to all logger entries for distributed traceability."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Request Correlation ID (X-Request-Id) Middleware",
        "code": "// Express Middleware: Request Correlation ID (X-Request-Id) Middleware\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Response Time Tracking with response-time Middleware",
    "question": "How does the response-time middleware measure request duration, and what header does it set?",
    "difficulty": "easy",
    "questionType": "Performance",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "response-time",
      "metrics",
      "x-response-time"
    ],
    "interviewAnswer": "response-time records process.hrtime() at middleware execution and listens to the res \"finish\" or \"header\" event. It calculates the elapsed time in milliseconds and automatically sets the X-Response-Time: 12.45ms header, or passes the duration to a metrics callback (StatsD/Prometheus).",
    "answer": "Syntax: `app.use(responseTime((req, res, time) => { metrics.histogram(\"api_response_time\", time); }));`.",
    "explanation": "Syntax: `app.use(responseTime((req, res, time) => { metrics.histogram(\"api_response_time\", time); }));`.",
    "importantPoints": [
      "Measures latency using high-resolution timers (process.hrtime).",
      "Sets X-Response-Time header automatically.",
      "Supports custom metric collection callbacks."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Response Time Tracking with response-time Middleware",
        "code": "// Express Middleware: Response Time Tracking with response-time Middleware\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Cookie Parser Middleware and Signed Cookies",
    "question": "How does cookie-parser parse cookies, and how do Signed Cookies detect client-side tampering?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "cookie-parser",
      "signed-cookies",
      "hmac"
    ],
    "interviewAnswer": "cookie-parser(secret) populates req.cookies with plain cookies. When signed with a secret, cookies are stored in req.signedCookies. Express appends an HMAC-SHA256 signature to the cookie value (s:value.signature). If a client modifies the cookie value in browser dev tools, the signature check fails, and req.signedCookies[name] is set to false.",
    "answer": "Signed cookies prove data authenticity (the client has not modified the value), but do NOT encrypt it (data is still visible in base64).",
    "explanation": "Signed cookies prove data authenticity (the client has not modified the value), but do NOT encrypt it (data is still visible in base64).",
    "importantPoints": [
      "populates req.cookies (plain) and req.signedCookies (HMAC verified).",
      "Detects client tampering using HMAC-SHA256 secret.",
      "Does not encrypt data; value remains readable."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Cookie Parser Middleware and Signed Cookies",
        "code": "// Express Middleware: Cookie Parser Middleware and Signed Cookies\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Timeout Middleware: Preventing Hanging Sockets",
    "question": "How do you enforce a hard timeout on Express requests using connect-timeout?",
    "difficulty": "medium",
    "questionType": "Reliability",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "timeout",
      "connect-timeout",
      "dos"
    ],
    "interviewAnswer": "Mount timeout(\"10s\") at the top of the stack. If handlers do not send a response within 10s, it emits a timeout event and marks req.timedout = true. Downstream handlers must check if (req.timedout) return; before attempting to send a response to avoid ERR_HTTP_HEADERS_SENT.",
    "answer": "Combine with an error middleware checking `if (err.timeout) res.status(503).json({ error: \"Service unavailable: request timed out\" });`.",
    "explanation": "Combine with an error middleware checking `if (err.timeout) res.status(503).json({ error: \"Service unavailable: request timed out\" });`.",
    "importantPoints": [
      "connect-timeout sets maximum execution duration.",
      "Marks req.timedout = true when timer expires.",
      "Returns 503 Service Unavailable on timeout."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Timeout Middleware: Preventing Hanging Sockets",
        "code": "// Express Middleware: Timeout Middleware: Preventing Hanging Sockets\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Conditional Middleware Execution with express-unless",
    "question": "How can you apply a middleware globally while excluding specific routes (like /login or /health)?",
    "difficulty": "easy",
    "questionType": "Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "express-unless",
      "conditional-middleware"
    ],
    "interviewAnswer": "Wrap the middleware with express-unless: authMiddleware.unless = require(\"express-unless\"); app.use(authMiddleware.unless({ path: [\"/api/login\", \"/api/register\", \"/health\"] })). Alternatively, implement an inline condition: if ([\"/login\"].includes(req.path)) return next(); else authMiddleware(req, res, next).",
    "answer": "Keeps app.use clean without creating separate router splits for unauthenticated paths.",
    "explanation": "Keeps app.use clean without creating separate router splits for unauthenticated paths.",
    "importantPoints": [
      "express-unless bypasses middleware based on URL regex or path.",
      "Alternative to splitting into public and private routers.",
      "Supports HTTP method filtering (e.g. bypass GET, protect POST)."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Conditional Middleware Execution with express-unless",
        "code": "// Express Middleware: Conditional Middleware Execution with express-unless\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Overwriting vs Mutating Native Request Properties",
    "question": "Why is directly mutating native req properties (like req.url or req.method) dangerous in custom middleware?",
    "difficulty": "hard",
    "questionType": "Internals",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "req-mutation",
      "req-url",
      "side-effects"
    ],
    "interviewAnswer": "Mutating req.url or req.method alters Express's internal router matching mid-flight, potentially causing routes to be bypassed or matched incorrectly. If URL rewriting is necessary (e.g. removing prefixes), mutate req.url before the router runs, and be aware that req.originalUrl remains unchanged.",
    "answer": "Always store custom application metadata on dedicated custom properties (e.g. `req.appContext` or `req.auth`) rather than overwriting standard Node/Express properties.",
    "explanation": "Always store custom application metadata on dedicated custom properties (e.g. `req.appContext` or `req.auth`) rather than overwriting standard Node/Express properties.",
    "importantPoints": [
      "Mutating req.url alters subsequent router layer matching.",
      "req.originalUrl preserves initial URL.",
      "Store custom data on custom properties (req.user, req.context)."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Overwriting vs Mutating Native Request Properties",
        "code": "// Express Middleware: Overwriting vs Mutating Native Request Properties\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Idempotency Middleware: Handling Safe Retries with Idempotency-Key",
    "question": "How do you implement an Idempotency-Key middleware for financial or mutation endpoints in Express?",
    "difficulty": "hard",
    "questionType": "System Design",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "idempotency-key",
      "payments",
      "redis",
      "caching"
    ],
    "interviewAnswer": "Extract req.headers[\"idempotency-key\"]. Query Redis: if key exists, return the cached HTTP status and response payload immediately without executing the handler. If not found, acquire a distributed lock in Redis for the key, intercept res.json/res.send using monkey-patching to cache the final response in Redis with a 24h TTL, and call next().",
    "answer": "This guarantees that network retries from clients (e.g. Stripe checkout or mobile payment retries) never double-charge the user.",
    "explanation": "This guarantees that network retries from clients (e.g. Stripe checkout or mobile payment retries) never double-charge the user.",
    "importantPoints": [
      "Inspects client Idempotency-Key header.",
      "Caches completed responses in Redis.",
      "Returns identical cached response on duplicate keys without re-executing."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Idempotency Middleware: Handling Safe Retries with Idempotency-Key",
        "code": "// Express Middleware: Idempotency Middleware: Handling Safe Retries with Idempotency-Key\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Interception and Response Transformation Middleware",
    "question": "How can a middleware intercept and transform outgoing response bodies before they are sent to the client?",
    "difficulty": "hard",
    "questionType": "Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "response-interception",
      "monkey-patching",
      "res-send"
    ],
    "interviewAnswer": "Monkey-patch res.send or res.json inside middleware: save the original method (const originalSend = res.send), override res.send = function (body) { ... modify body ... return originalSend.call(this, modifiedBody); }, and call next(). This is how compression, logging, and response-envelope libraries operate.",
    "answer": "Ensure you invoke `originalSend.apply(res, arguments)` with the correct `this` context to prevent breaking Node stream internals.",
    "explanation": "Ensure you invoke `originalSend.apply(res, arguments)` with the correct `this` context to prevent breaking Node stream internals.",
    "importantPoints": [
      "Overrides res.send or res.json before calling next().",
      "Applies transformations (e.g. adding timestamp, envelope wrapping).",
      "Must invoke original method with correct this context."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Interception and Response Transformation Middleware",
        "code": "// Express Middleware: Interception and Response Transformation Middleware\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Maintenance Mode Middleware",
    "question": "How do you implement an application-wide Maintenance Mode toggle via middleware?",
    "difficulty": "easy",
    "questionType": "Operations",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "maintenance-mode",
      "status-503",
      "feature-flags"
    ],
    "interviewAnswer": "Mount a top-level middleware that checks a flag (from Redis, environment, or database): if (isMaintenanceActive && req.path !== \"/health\") return res.status(503).set(\"Retry-After\", \"300\").json({ error: \"Service under maintenance\" }); else next().",
    "answer": "The `Retry-After` header informs search engines and mobile clients when to attempt reconnection, preventing SEO penalties.",
    "explanation": "The `Retry-After` header informs search engines and mobile clients when to attempt reconnection, preventing SEO penalties.",
    "importantPoints": [
      "Returns 503 Service Unavailable.",
      "Sets Retry-After header for search engines.",
      "Excludes health check endpoints to keep container orchestrators alive."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Maintenance Mode Middleware",
        "code": "// Express Middleware: Maintenance Mode Middleware\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Middleware Error Propagation: Synchronous Throw vs next(err)",
    "question": "How does error propagation differ between synchronous throws and asynchronous rejections in Express 4 middleware?",
    "difficulty": "medium",
    "questionType": "Error Handling",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "error-propagation",
      "synchronous-throw",
      "next-err"
    ],
    "interviewAnswer": "In Express 4, a synchronous throw new Error() inside a synchronous middleware is caught by Express's internal try/catch and automatically forwarded to error middleware. In asynchronous callbacks, setTimeout, or unhandled Promise rejections, synchronous try/catch cannot catch the error; you MUST explicitly call next(err).",
    "answer": "This is the most common pitfall in Express 4: throwing inside an async function bypasses Express and causes unhandledRejection.",
    "explanation": "This is the most common pitfall in Express 4: throwing inside an async function bypasses Express and causes unhandledRejection.",
    "importantPoints": [
      "Synchronous throws are caught by Express 4 internal try/catch.",
      "Asynchronous throws require explicit next(err) in Express 4.",
      "Express 5 catches both seamlessly."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Middleware Error Propagation: Synchronous Throw vs next(err)",
        "code": "// Express Middleware: Middleware Error Propagation: Synchronous Throw vs next(err)\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "IP Blacklisting and Whitelisting Middleware",
    "question": "How do you build a firewall middleware that blocks or allows requests based on client IP addresses?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "ip-filtering",
      "firewall",
      "cidr"
    ],
    "interviewAnswer": "Extract client IP using req.ip (ensuring trust proxy is configured). Compare against a whitelist or blacklist of IP strings or CIDR blocks using a library like ip-range-check. If blocked, terminate immediately with res.status(403).json({ error: \"Forbidden: IP not authorized\" }); otherwise, call next().",
    "answer": "Commonly applied to internal administrative endpoints (`/admin`, `/metrics`) to restrict access to company VPN IPs.",
    "explanation": "Commonly applied to internal administrative endpoints (`/admin`, `/metrics`) to restrict access to company VPN IPs.",
    "importantPoints": [
      "Relies on req.ip with trust proxy enabled.",
      "Supports CIDR subnets (e.g. 10.0.0.0/8).",
      "Responds with 403 Forbidden before routing to controllers."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "IP Blacklisting and Whitelisting Middleware",
        "code": "// Express Middleware: IP Blacklisting and Whitelisting Middleware\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Handling Client Disconnects During Long-Running Middleware",
    "question": "How can middleware detect if the client aborted the connection (e.g. closed the browser tab) mid-flight?",
    "difficulty": "hard",
    "questionType": "Reliability",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "client-disconnect",
      "socket-close",
      "cancellation"
    ],
    "interviewAnswer": "Listen to the req \"close\" event: req.on(\"close\", () => { isAborted = true; cancelDatabaseQuery(); }). If the client closes the connection, abort downstream processing or cancel open database cursors to save CPU and database resources.",
    "answer": "In Node.js, `req.destroyed` indicates whether the client closed the socket. Checking `if (req.destroyed) return;` prevents executing expensive processing for abandoned requests.",
    "explanation": "In Node.js, `req.destroyed` indicates whether the client closed the socket. Checking `if (req.destroyed) return;` prevents executing expensive processing for abandoned requests.",
    "importantPoints": [
      "Listen to req.on(\"close\") for client disconnects.",
      "Check req.destroyed before executing expensive operations.",
      "Prevents wasting server CPU on abandoned HTTP requests."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling Client Disconnects During Long-Running Middleware",
        "code": "// Express Middleware: Handling Client Disconnects During Long-Running Middleware\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Feature Flag Middleware (e.g. LaunchDarkly / Unleash)",
    "question": "How does feature flag middleware conditionally enable endpoints or route variations for specific users?",
    "difficulty": "medium",
    "questionType": "Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "feature-flags",
      "canary-releases"
    ],
    "interviewAnswer": "Create a middleware checkFeatureFlag(\"new-checkout\"): it evaluates the flag for req.user against a feature flag client. If enabled, it calls next(); if disabled, it returns 404 or 403, or routes to a legacy handler. This enables canary releases and percentage-based rollouts in Express.",
    "answer": "Allows deploying code to production dark and enabling endpoints gradually without redeploying.",
    "explanation": "Allows deploying code to production dark and enabling endpoints gradually without redeploying.",
    "importantPoints": [
      "Evaluates flags per request context (userId, tenantId).",
      "Conditionally gates endpoints or diverts to legacy routers.",
      "Enables canary testing and instant rollback."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Feature Flag Middleware (e.g. LaunchDarkly / Unleash)",
        "code": "// Express Middleware: Feature Flag Middleware (e.g. LaunchDarkly / Unleash)\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Testing Express Middleware in Pure Isolation",
    "question": "How do you unit test an Express middleware function without starting an HTTP server or using Supertest?",
    "difficulty": "medium",
    "questionType": "Testing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "unit-testing",
      "mocks",
      "jest"
    ],
    "interviewAnswer": "Pass mock objects for req, res, and next into the middleware function: const req = { headers: {} }; const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }; const next = jest.fn(); middleware(req, res, next);. Assert that next() was called, or assert that res.status and res.json were called with expected arguments.",
    "answer": "Unit testing middleware with mocks (or node-mocks-http) executes in microseconds without spinning up TCP sockets.",
    "explanation": "Unit testing middleware with mocks (or node-mocks-http) executes in microseconds without spinning up TCP sockets.",
    "importantPoints": [
      "Pass mock req, res, and next into middleware(req, res, next).",
      "Use jest.fn() to spy on next() and res methods.",
      "Blazing-fast execution without network overhead."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Testing Express Middleware in Pure Isolation",
        "code": "// Express Middleware: Testing Express Middleware in Pure Isolation\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Subresource Integrity (SRI) and Static Asset Middleware",
    "question": "How can static asset serving middleware inject Subresource Integrity (SRI) hashes into HTML templates?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "sri",
      "security",
      "static-assets"
    ],
    "interviewAnswer": "During build time, compute SHA-384 hashes of static JS and CSS files. A middleware populates res.locals.sri = manifest, allowing HTML templates to render <script src=\"...\" integrity=\"sha384-...\" crossorigin=\"anonymous\">. If a CDN file is tampered with, the browser refuses execution.",
    "answer": "SRI guarantees that third-party CDNs cannot inject malicious JavaScript into your users' browsers.",
    "explanation": "SRI guarantees that third-party CDNs cannot inject malicious JavaScript into your users' browsers.",
    "importantPoints": [
      "Computes cryptographic hashes of static script/style assets.",
      "Injected into script tags via integrity attribute.",
      "Protects against compromised CDN supply chain attacks."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Subresource Integrity (SRI) and Static Asset Middleware",
        "code": "// Express Middleware: Subresource Integrity (SRI) and Static Asset Middleware\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Slowloris Protection Middleware",
    "question": "How can Express middleware protect against Slowloris denial-of-service attacks?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "slowloris",
      "dos",
      "timeouts",
      "keep-alive"
    ],
    "interviewAnswer": "Slowloris attacks open thousands of HTTP connections and send headers extremely slowly, exhausting the server's socket connection pool. While reverse proxies (Nginx/Cloudflare) should absorb Slowloris, inside Node you can configure server.headersTimeout (e.g. 20s) and server.requestTimeout (e.g. 30s) on the underlying http.Server to terminate slow connections.",
    "answer": "In Node 18+, `headersTimeout` and `requestTimeout` are built into `http.Server` to drop slow-sending sockets automatically.",
    "explanation": "In Node 18+, `headersTimeout` and `requestTimeout` are built into `http.Server` to drop slow-sending sockets automatically.",
    "importantPoints": [
      "Slowloris holds sockets open by trickling headers slowly.",
      "Configure server.headersTimeout and requestTimeout on http.Server.",
      "Best mitigated at the edge reverse proxy layer."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Slowloris Protection Middleware",
        "code": "// Express Middleware: Slowloris Protection Middleware\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Summary: The Power and Responsibility of Express Middleware",
    "question": "Why is the middleware pattern the foundational core of Express, and what are its main design rules?",
    "difficulty": "easy",
    "questionType": "Summary",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "summary",
      "design-rules",
      "pipeline"
    ],
    "interviewAnswer": "Express is essentially a routing and middleware web framework. Everything in Express—from body parsing and session management to authentication and controllers—is a middleware function. The core design rules are: 1) Always end the request or call next(); 2) Place middleware in deliberate logical order; 3) Keep middleware single-purpose and composable; 4) Centralize error handling in 4-argument error middleware.",
    "answer": "Mastering the middleware chain gives you complete control over every byte entering and leaving your Node.js backend.",
    "explanation": "Mastering the middleware chain gives you complete control over every byte entering and leaving your Node.js backend.",
    "importantPoints": [
      "Everything in Express is a middleware function.",
      "Always terminate response or call next().",
      "Keep middleware composable, testable, and strictly ordered."
    ],
    "commonMistakes": [
      "Forgetting next() or registering middleware out of order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Summary: The Power and Responsibility of Express Middleware",
        "code": "// Express Middleware: Summary: The Power and Responsibility of Express Middleware\napp.use((req, res, next) => {\n  next();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Error-Handling Middleware Signature: Why 4 Parameters are Mandatory",
    "question": "Why MUST an Express error-handling middleware function declare exactly 4 parameters (err, req, res, next)?",
    "difficulty": "medium",
    "questionType": "Internals",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "error-middleware",
      "fn-length",
      "arity"
    ],
    "interviewAnswer": "Express inspects function arity using fn.length. A standard middleware has length 2 or 3 (req, res, next). Express identifies error-handling middleware strictly by checking fn.length === 4. If you omit the next parameter and define (err, req, res), fn.length is 3, causing Express to treat it as regular middleware, failing to catch errors and passing err as req!",
    "answer": "Even if your error handler does not call `next`, the `next` parameter MUST be declared in the function signature: `(err, req, res, next)`. Without 4 parameters, Express will never invoke it during next(err) execution.",
    "explanation": "Even if your error handler does not call `next`, the `next` parameter MUST be declared in the function signature: `(err, req, res, next)`. Without 4 parameters, Express will never invoke it during next(err) execution.",
    "importantPoints": [
      "Express checks fn.length === 4 to detect error handlers.",
      "Declaring (err, req, res) fails because arity is 3.",
      "Always declare all 4 parameters even if next is unused."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Error-Handling Middleware Signature: Why 4 Parameters are Mandatory",
        "code": "// Middleware: Error-Handling Middleware Signature: Why 4 Parameters are Mandatory\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "CSRF Protection: csurf Deprecation and Double Submit Cookie Pattern",
    "question": "Why was the csurf package deprecated, and how do modern Express applications protect against Cross-Site Request Forgery (CSRF)?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "csrf",
      "csurf",
      "double-submit-cookie",
      "sameSite"
    ],
    "interviewAnswer": "csurf was deprecated due to security vulnerabilities and lack of maintenance. Modern Express APIs protect against CSRF using: 1) SameSite: \"strict\" or \"lax\" cookies which browsers block from being sent in cross-site contexts; 2) The Double Submit Cookie pattern (e.g. csrf-csrf package); 3) Requiring custom headers (e.g. X-Requested-With or Authorization: Bearer) which browsers cannot send cross-origin without CORS preflight approval.",
    "answer": "SameSite cookies provide automatic first-line defense against CSRF in modern browsers without needing session-backed token storage.",
    "explanation": "SameSite cookies provide automatic first-line defense against CSRF in modern browsers without needing session-backed token storage.",
    "importantPoints": [
      "SameSite cookie attributes provide strong native CSRF defense.",
      "Use csrf-csrf for stateful or stateless Double Submit tokens.",
      "Custom headers (X-CSRF-Token) prevent cross-origin form attacks."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "CSRF Protection: csurf Deprecation and Double Submit Cookie Pattern",
        "code": "// Middleware: CSRF Protection: csurf Deprecation and Double Submit Cookie Pattern\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Passport.js Middleware: passport.initialize() and passport.session()",
    "question": "What do passport.initialize() and passport.session() do in an Express middleware stack?",
    "difficulty": "medium",
    "questionType": "Authentication",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "passport",
      "sessions",
      "authentication"
    ],
    "interviewAnswer": "passport.initialize() initializes Passport authentication hooks on req (adding req.login, req.logout, req.isAuthenticated). passport.session() acts as a middleware that deserializes user session data from req.session using passport.deserializeUser() and populates req.user. passport.session() MUST be mounted AFTER express-session.",
    "answer": "If `passport.session()` is registered before `express-session`, sessions will not be loaded and `req.user` will remain undefined.",
    "explanation": "If `passport.session()` is registered before `express-session`, sessions will not be loaded and `req.user` will remain undefined.",
    "importantPoints": [
      "passport.initialize() attaches auth helper methods to req.",
      "passport.session() deserializes user object onto req.user.",
      "Must be mounted after express-session middleware."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Passport.js Middleware: passport.initialize() and passport.session()",
        "code": "// Middleware: Passport.js Middleware: passport.initialize() and passport.session()\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "MemoryStore Warning in express-session: Production Risks",
    "question": "Why does express-session warn: \"MemoryStore is not designed for a production environment\"?",
    "difficulty": "medium",
    "questionType": "Storage",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "express-session",
      "memoryStore",
      "redis",
      "production"
    ],
    "interviewAnswer": "Default MemoryStore stores sessions in local process RAM. Problems: 1) Leaks memory because it never purges expired sessions proactively; 2) Does not share session state across multi-core cluster processes or multiple server instances; 3) All user logins are wiped whenever the server restarts. Production must use an external session store like connect-redis or connect-mongo.",
    "answer": "In auto-scaled cloud environments, users would be logged out on every deploy and request routing change without a shared Redis session store.",
    "explanation": "In auto-scaled cloud environments, users would be logged out on every deploy and request routing change without a shared Redis session store.",
    "importantPoints": [
      "MemoryStore leaks memory and wipes on restart.",
      "Fails in clustered or multi-instance deployments.",
      "Production must use connect-redis or connect-mongo."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "MemoryStore Warning in express-session: Production Risks",
        "code": "// Middleware: MemoryStore Warning in express-session: Production Risks\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Sensitive Data Redaction in Logging Middleware",
    "question": "How should request logging middleware sanitize and redact sensitive fields (passwords, credit cards, tokens)?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "logging",
      "pino",
      "redaction",
      "security"
    ],
    "interviewAnswer": "Use a structured logging library like Pino with built-in redaction paths: pinoHttp({ redact: [\"req.headers.authorization\", \"req.headers.cookie\", \"req.body.password\", \"req.body.creditCard\"] }). This automatically replaces sensitive fields with \"[Redacted]\" before writing to stdout, preventing credential leakage into log monitoring services (Datadog/Elasticsearch).",
    "answer": "Never log raw `req.body` directly to the console in production; logs are frequently shared across development teams and stored in third-party log collectors.",
    "explanation": "Never log raw `req.body` directly to the console in production; logs are frequently shared across development teams and stored in third-party log collectors.",
    "importantPoints": [
      "Redact Authorization headers, cookies, and passwords.",
      "Pino supports path-based redaction arrays.",
      "Prevents compliance violations (PCI-DSS, GDPR, HIPAA)."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Sensitive Data Redaction in Logging Middleware",
        "code": "// Middleware: Sensitive Data Redaction in Logging Middleware\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Rate Limiting by User ID or API Key instead of IP",
    "question": "Why is rate limiting by IP address flawed in mobile and corporate environments, and how do you key by User ID?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "rate-limiting",
      "keyGenerator",
      "api-key",
      "multi-tenant"
    ],
    "interviewAnswer": "IP rate limiting penalizes corporate offices or university campuses where thousands of distinct users share a single NAT IP, while failing against distributed botnets that rotate IPs. Configure keyGenerator: (req) => req.user?.id || req.headers[\"x-api-key\"] || req.ip. This throttles per authenticated user or API token while falling back to IP only for anonymous traffic.",
    "answer": "Keying by authenticated user or tenant ID provides fair, targeted rate limiting that cannot be bypassed by IP hopping.",
    "explanation": "Keying by authenticated user or tenant ID provides fair, targeted rate limiting that cannot be bypassed by IP hopping.",
    "importantPoints": [
      "Corporate NATs share single IP for thousands of users.",
      "keyGenerator parameter customizes rate limit identity.",
      "Rate limit by userId or API key for authenticated endpoints."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Rate Limiting by User ID or API Key instead of IP",
        "code": "// Middleware: Rate Limiting by User ID or API Key instead of IP\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Asynchronous Resource Cleanup via res.on(\"finish\")",
    "question": "How can middleware track request metrics and cleanup resources after the response is completed using the \"finish\" event?",
    "difficulty": "medium",
    "questionType": "Observability",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "res-finish",
      "cleanup",
      "metrics"
    ],
    "interviewAnswer": "Attach an event listener to the response object: res.on(\"finish\", () => { const duration = Date.now() - start; logRequestMetrics(req.method, req.path, res.statusCode, duration); }). The \"finish\" event fires when the last byte of the response body has been handed off to the operating system TCP stack.",
    "answer": "Unlike middleware that runs before the response, \"finish\" allows capturing the actual final HTTP status code (`res.statusCode`) set by downstream controllers.",
    "explanation": "Unlike middleware that runs before the response, \"finish\" allows capturing the actual final HTTP status code (`res.statusCode`) set by downstream controllers.",
    "importantPoints": [
      "finish event fires when response headers and body are fully transmitted.",
      "Captures accurate final status code and response duration.",
      "Used by Morgan and OpenTelemetry tracing."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Asynchronous Resource Cleanup via res.on(\"finish\")",
        "code": "// Middleware: Asynchronous Resource Cleanup via res.on(\"finish\")\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Dynamic Middleware Chains: Composing Middleware with Compose / Waterfall",
    "question": "How do you compose an array of middleware functions dynamically into a single reusable middleware?",
    "difficulty": "hard",
    "questionType": "Functional Programming",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "compose",
      "functional-programming",
      "waterfall"
    ],
    "interviewAnswer": "Use a compose utility or express-compose: function compose(middlewareArray) { return (req, res, next) => { let index = -1; function dispatch(i) { if (i <= index) return Promise.reject(\"next() called multiple times\"); index = i; const fn = middlewareArray[i] || next; if (!fn) return; try { fn(req, res, (err) => err ? next(err) : dispatch(i + 1)); } catch (err) { next(err); } } dispatch(0); }; }.",
    "answer": "This allows packaging an entire pipeline (e.g. auth + rateLimit + validation) into a single reusable middleware identifier.",
    "explanation": "This allows packaging an entire pipeline (e.g. auth + rateLimit + validation) into a single reusable middleware identifier.",
    "importantPoints": [
      "Combines multiple middleware functions into one.",
      "Executes pipeline sequentially via internal dispatch recursion.",
      "Simplifies complex route definitions."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Dynamic Middleware Chains: Composing Middleware with Compose / Waterfall",
        "code": "// Middleware: Dynamic Middleware Chains: Composing Middleware with Compose / Waterfall\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "The method-override Middleware: Supporting PUT and DELETE in HTML Forms",
    "question": "What is method-override middleware, and why is it necessary for HTML5 forms?",
    "difficulty": "easy",
    "questionType": "Compatibility",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "method-override",
      "html-forms",
      "put-delete"
    ],
    "interviewAnswer": "Standard HTML5 <form> elements only support GET and POST methods. method-override inspects a hidden form field (e.g. <input type=\"hidden\" name=\"_method\" value=\"DELETE\">) or header (X-HTTP-Method-Override) and rewrites req.method to PUT or DELETE, allowing Express to route form submissions to router.put() and router.delete() handlers.",
    "answer": "Syntax: `app.use(methodOverride(\"_method\"))`. It bridges REST conventions with HTML form limitations.",
    "explanation": "Syntax: `app.use(methodOverride(\"_method\"))`. It bridges REST conventions with HTML form limitations.",
    "importantPoints": [
      "HTML forms natively only support GET and POST.",
      "Rewrites req.method based on query or hidden field.",
      "Enables RESTful routing for server-rendered applications."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The method-override Middleware: Supporting PUT and DELETE in HTML Forms",
        "code": "// Middleware: The method-override Middleware: Supporting PUT and DELETE in HTML Forms\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Flash Messages Middleware with connect-flash",
    "question": "How do Flash Messages work in Express server-rendered web applications?",
    "difficulty": "easy",
    "questionType": "State Management",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "connect-flash",
      "sessions",
      "server-rendering"
    ],
    "interviewAnswer": "Flash messages are temporary notification strings (e.g. \"Password successfully reset\") stored in req.session. When rendered, they are immediately cleared from the session so they are only displayed once on the subsequent redirect page. connect-flash attaches req.flash(type, msg) to manage this lifecycle.",
    "answer": "Heavily used in Post-Redirect-Get (PRG) patterns in MVC web applications.",
    "explanation": "Heavily used in Post-Redirect-Get (PRG) patterns in MVC web applications.",
    "importantPoints": [
      "Stores temporary notifications in session.",
      "Clears messages immediately after first read.",
      "Essential for Post-Redirect-Get (PRG) flow."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Flash Messages Middleware with connect-flash",
        "code": "// Middleware: Flash Messages Middleware with connect-flash\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Bot and Web Scraper Detection Middleware",
    "question": "How can custom middleware identify and filter malicious web scrapers and crawlers?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "bot-detection",
      "user-agent",
      "security"
    ],
    "interviewAnswer": "Inspect req.get(\"user-agent\") against a regex of known scraper tools (curl, python-requests, Puppeteer, Scrapy). Check for missing standard browser headers (Accept-Language, Sec-Ch-Ua). If a scraper is detected without authorized API keys, return 403 Forbidden or challenge with a CAPTCHA.",
    "answer": "Useful for protecting proprietary pricing catalogs and preventing automated scrapers from overwhelming server capacity.",
    "explanation": "Useful for protecting proprietary pricing catalogs and preventing automated scrapers from overwhelming server capacity.",
    "importantPoints": [
      "Inspects User-Agent string and browser fingerprint headers.",
      "Blocks automated HTTP libraries without API keys.",
      "Protects data and reduces server load."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Bot and Web Scraper Detection Middleware",
        "code": "// Middleware: Bot and Web Scraper Detection Middleware\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "GeoIP Lookup Middleware: Enriching Requests with Geolocation",
    "question": "How does GeoIP middleware enrich incoming requests with geographic country and city data?",
    "difficulty": "medium",
    "questionType": "Enrichment",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "geoip",
      "maxmind",
      "geolocation"
    ],
    "interviewAnswer": "Using a library like geoip-lite or MaxMind GeoIP2, the middleware inspects req.ip, looks up the IP in an in-memory binary database, and attaches geographic data to req: req.geo = { country: \"US\", city: \"New York\", timezone: \"America/New_York\" }. Downstream handlers use this for localized pricing, compliance (GDPR), and fraud detection.",
    "answer": "In cloud environments, Cloudflare and AWS CloudFront can inject headers (`CF-IPCountry`), which middleware can read directly with zero CPU overhead.",
    "explanation": "In cloud environments, Cloudflare and AWS CloudFront can inject headers (`CF-IPCountry`), which middleware can read directly with zero CPU overhead.",
    "importantPoints": [
      "Resolves client IP to country, city, and coordinates.",
      "Enriches req object for downstream routing and pricing.",
      "Can read reverse proxy headers like CF-IPCountry."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "GeoIP Lookup Middleware: Enriching Requests with Geolocation",
        "code": "// Middleware: GeoIP Lookup Middleware: Enriching Requests with Geolocation\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Preventing Clickjacking with X-Frame-Options Middleware",
    "question": "How does X-Frame-Options middleware prevent Clickjacking attacks?",
    "difficulty": "easy",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "x-frame-options",
      "clickjacking",
      "security"
    ],
    "interviewAnswer": "Clickjacking embeds a target website inside an invisible <iframe> on a malicious site, tricking users into clicking buttons. Setting X-Frame-Options: DENY (disallows all framing) or SAMEORIGIN (allows framing only by the same origin) instructs browsers to refuse rendering the page inside an iframe, neutralizing clickjacking completely.",
    "answer": "Included automatically by Helmet or configured manually via `res.setHeader(\"X-Frame-Options\", \"DENY\")`.",
    "explanation": "Included automatically by Helmet or configured manually via `res.setHeader(\"X-Frame-Options\", \"DENY\")`.",
    "importantPoints": [
      "Prevents embedding site inside malicious iframes.",
      "DENY blocks all iframes; SAMEORIGIN allows same-domain framing.",
      "Standard clickjacking mitigation."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Preventing Clickjacking with X-Frame-Options Middleware",
        "code": "// Middleware: Preventing Clickjacking with X-Frame-Options Middleware\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "HTTP Caching Middleware: Stale-While-Revalidate Implementation",
    "question": "How do you configure Cache-Control middleware for stale-while-revalidate caching behavior?",
    "difficulty": "hard",
    "questionType": "HTTP Caching",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "cache-control",
      "stale-while-revalidate",
      "cdn"
    ],
    "interviewAnswer": "Set res.setHeader(\"Cache-Control\", \"public, max-age=60, stale-while-revalidate=300\"). This instructs browsers and CDNs to serve the cached copy for 60s. For the next 300s, if requested, the CDN serves the stale cache instantly while asynchronously fetching a fresh version from Express in the background, yielding near-zero latency for users.",
    "answer": "Modern CDNs (Varnish, Fastly, Cloudflare) support stale-while-revalidate to eliminate cache stampedes on viral endpoints.",
    "explanation": "Modern CDNs (Varnish, Fastly, Cloudflare) support stale-while-revalidate to eliminate cache stampedes on viral endpoints.",
    "importantPoints": [
      "max-age defines fresh cache duration.",
      "stale-while-revalidate allows serving stale copy while refreshing.",
      "Eliminates cache stampedes on high-traffic routes."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "HTTP Caching Middleware: Stale-While-Revalidate Implementation",
        "code": "// Middleware: HTTP Caching Middleware: Stale-While-Revalidate Implementation\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Validating Content-Length to Prevent Buffer Overflow",
    "question": "Why should middleware reject requests with mismatched or absent Content-Length headers on mutation methods?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "content-length",
      "request-smuggling",
      "security"
    ],
    "interviewAnswer": "Mismatched Content-Length headers can indicate HTTP Request Smuggling attacks where an attacker smuggles a hidden secondary request inside a pipelined connection. Validating Content-Length against actual received bytes ensures the complete body was received and prevents socket desynchronization between reverse proxies and Express.",
    "answer": "Built-in `express.json()` handles this verification automatically, rejecting mismatches with a 400 Bad Request.",
    "explanation": "Built-in `express.json()` handles this verification automatically, rejecting mismatches with a 400 Bad Request.",
    "importantPoints": [
      "Protects against HTTP Request Smuggling.",
      "Ensures proxy and server agree on request boundaries.",
      "Rejects mismatched payloads automatically in body-parser."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Validating Content-Length to Prevent Buffer Overflow",
        "code": "// Middleware: Validating Content-Length to Prevent Buffer Overflow\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Conditional Gzip Compression by Content Type",
    "question": "How do you customize compression middleware to compress JSON and text while skipping binary formats?",
    "difficulty": "easy",
    "questionType": "Performance",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "compression",
      "filter",
      "performance"
    ],
    "interviewAnswer": "Pass a custom filter function to compression: compression({ filter: (req, res) => { if (req.headers[\"x-no-compression\"]) return false; return compression.filter(req, res); } }). It automatically checks standard compressible types (JSON, HTML, text, SVG) and skips already-compressed assets (JPEG, PNG, MP4, zip) to save CPU.",
    "answer": "Compressing JPEG or MP4 files wastes CPU because they are already compressed and can actually increase file size.",
    "explanation": "Compressing JPEG or MP4 files wastes CPU because they are already compressed and can actually increase file size.",
    "importantPoints": [
      "compression.filter checks MIME types automatically.",
      "Skips binary formats like JPEG, PNG, and MP4.",
      "Supports custom bypass headers."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Conditional Gzip Compression by Content Type",
        "code": "// Middleware: Conditional Gzip Compression by Content Type\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Tenant Resolution Middleware in Multi-Tenant Express Architectures",
    "question": "How does multi-tenant middleware resolve tenant context from subdomains or headers?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "multi-tenancy",
      "tenant-resolution",
      "subdomains"
    ],
    "interviewAnswer": "Extract the tenant identifier from req.subdomains[0] or req.headers[\"x-tenant-id\"]. Validate the tenant against cache/database. If valid, attach tenant details and tenant-specific database connection pool to req.tenant and call next(). If invalid, return 404/403 immediately before route handlers run.",
    "answer": "Downstream controllers can then query `req.tenant.db.collection(\"orders\")`, guaranteeing complete tenant data isolation.",
    "explanation": "Downstream controllers can then query `req.tenant.db.collection(\"orders\")`, guaranteeing complete tenant data isolation.",
    "importantPoints": [
      "Extracts tenant slug from subdomain or header.",
      "Attaches tenant database connection to req.tenant.",
      "Guarantees multi-tenant isolation at middleware layer."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Tenant Resolution Middleware in Multi-Tenant Express Architectures",
        "code": "// Middleware: Tenant Resolution Middleware in Multi-Tenant Express Architectures\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Middleware Execution Timing Profiler",
    "question": "How can you write a middleware profiler that measures the exact execution time of every individual middleware in the stack?",
    "difficulty": "hard",
    "questionType": "Diagnostics",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "profiler",
      "performance",
      "latency-tracking"
    ],
    "interviewAnswer": "Wrap each middleware in a profiling function: function profile(name, fn) { return (req, res, next) => { const start = process.hrtime.bigint(); fn(req, res, (err) => { const elapsedMs = Number(process.hrtime.bigint() - start) / 1e6; if (elapsedMs > 50) console.warn(`Middleware ${name} slow: ${elapsedMs}ms`); next(err); }); }; }.",
    "answer": "This immediately identifies which specific middleware (e.g. slow database auth or DNS lookup) is causing API latency spikes.",
    "explanation": "This immediately identifies which specific middleware (e.g. slow database auth or DNS lookup) is causing API latency spikes.",
    "importantPoints": [
      "Measures duration between handler entry and next() callback.",
      "Pinpoints slow middleware in the pipeline.",
      "Uses process.hrtime.bigint() for microsecond precision."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Middleware Execution Timing Profiler",
        "code": "// Middleware: Middleware Execution Timing Profiler\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Graceful Error Recovery Middleware (Self-Healing Fallbacks)",
    "question": "How can middleware implement graceful degradation (fallback responses) when an upstream service fails?",
    "difficulty": "hard",
    "questionType": "Resilience",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "graceful-degradation",
      "circuit-breaker",
      "fallbacks"
    ],
    "interviewAnswer": "Catch upstream service failures (e.g. third-party recommendation engine failure) in middleware or controller catch blocks. Instead of returning a 500 error, return a cached fallback response or empty list ({ recommendations: [] }), allowing the primary web page to render successfully without breaking the user experience.",
    "answer": "Combined with circuit breakers (like Opossum), this prevents cascading service failures.",
    "explanation": "Combined with circuit breakers (like Opossum), this prevents cascading service failures.",
    "importantPoints": [
      "Catches non-critical service errors.",
      "Returns default or cached fallback data instead of 500.",
      "Prevents third-party outages from crashing the application."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Graceful Error Recovery Middleware (Self-Healing Fallbacks)",
        "code": "// Middleware: Graceful Error Recovery Middleware (Self-Healing Fallbacks)\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "middleware",
    "title": "Summary: Writing Production-Grade Express Middleware",
    "question": "What are the 5 commandments of writing robust, maintainable Express middleware?",
    "difficulty": "medium",
    "questionType": "Summary",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "middleware",
      "best-practices",
      "commandments"
    ],
    "interviewAnswer": "1) Always call next() or send a response; 2) Handle errors asynchronously using next(err); 3) Store state on req or res.locals, never globally; 4) Never send headers twice (use return res.json()); 5) Keep middleware single-responsibility, testable, and configurable via factory functions.",
    "answer": "Adhering to these five rules prevents 99% of common Express production outages, memory leaks, and hanging sockets.",
    "explanation": "Adhering to these five rules prevents 99% of common Express production outages, memory leaks, and hanging sockets.",
    "importantPoints": [
      "Always advance pipeline or terminate response.",
      "Use next(err) for error delegation.",
      "Scope state to request lifecycle.",
      "Guard responses with return statements.",
      "Keep functions pure and configurable."
    ],
    "commonMistakes": [
      "Forgetting next() or failing to declare 4 parameters on error handlers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Summary: Writing Production-Grade Express Middleware",
        "code": "// Middleware: Summary: Writing Production-Grade Express Middleware\napp.use((req, res, next) => { next(); });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
