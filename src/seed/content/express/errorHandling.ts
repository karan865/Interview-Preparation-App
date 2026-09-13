import { SeedQuestion } from '../types';

export const errorHandlingQuestions: SeedQuestion[] = [
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Scenario: Express API Suddenly Starts Returning 500 Errors",
    "question": "An Express API suddenly starts returning 500 errors. How would you investigate?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "500-errors",
      "debugging",
      "production",
      "observability"
    ],
    "interviewAnswer": "I would systematically investigate in 5 steps: 1) Check application error logs (Datadog/CloudWatch) for unhandled exceptions, database connection timeouts, or null pointer errors; 2) Check if a recent deployment introduced breaking schema changes or missing environment variables; 3) Inspect the centralized error handler to verify what error is triggering the 500 status; 4) Check database connection pool saturation (e.g. exhausted MongoDB/PostgreSQL connections); 5) Check host server health (OOM kills, CPU throttling, disk space exhaustion).",
    "answer": "Root Cause Triage Checklist:\n\n1. Centralized Log Inspection:\nSearch logs for `Error:` or stack traces. Identify the exact file, line number, and error type (e.g. `MongooseServerSelectionError`, `TypeError: Cannot read properties of undefined`).\n\n2. Database & External Dependencies:\nA surge in 500s across all endpoints usually indicates a downstream outage: database connection pool exhausted, Redis unreachable, or third-party auth service timing out.\n\n3. Environment Variables & Secret Rotation:\nCheck if an API key, database password, or JWT secret expired or was rotated without updating the container environment.\n\n4. Inspect Centralized Error Middleware:\nVerify if operational errors (like 400 Bad Request or 404 Not Found) are accidentally falling through to the default 500 handler because custom error classes were not categorized correctly.\n\n5. Event Loop & Memory Saturation:\nCheck if the server ran out of memory or if event loop lag exceeded hundreds of milliseconds.",
    "explanation": "Differentiating between operational errors (4xx) and programmer/system errors (5xx) is the first step in diagnosing API reliability issues.",
    "importantPoints": [
      "Inspect application logs for stack traces and error types.",
      "Verify database and cache connectivity and connection pools.",
      "Check recent deployments, environment variable changes, and secret expirations.",
      "Audit the centralized error handler for unmapped operational errors.",
      "Inspect server CPU, memory, and disk health metrics."
    ],
    "commonMistakes": [
      "Restarting the server without inspecting logs, destroying ephemeral in-memory debugging data.",
      "Allowing client validation errors to trigger 500 Internal Server Errors."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Centralized Error Logging and Classification",
        "code": "// Centralized Error Handler with Structured Logging\napp.use((err, req, res, next) => {\n  // Log critical 500s with full stack trace and correlation ID\n  const isOperational = err.isOperational || false;\n  const statusCode = err.statusCode || 500;\n\n  if (statusCode >= 500) {\n    logger.error('CRITICAL UNHANDLED ERROR', {\n      requestId: req.id,\n      path: req.originalUrl,\n      error: err.message,\n      stack: err.stack\n    });\n  }\n\n  res.status(statusCode).json({\n    success: false,\n    message: isOperational ? err.message : 'Internal Server Error',\n    requestId: req.id\n  });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Scenario: Redesigning Inconsistent API Error Responses",
    "question": "Your API has inconsistent error responses. How would you redesign error handling?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "api-design",
      "rfc7807",
      "app-error",
      "consistency"
    ],
    "interviewAnswer": "I would redesign error handling with 3 core pillars: 1) A custom AppError class hierarchy categorizing errors by HTTP status code, operational flag, and error codes (e.g. ValidationError, UnauthorizedError, NotFoundError); 2) A standardized RFC 7807 Problem Details or unified JSON envelope { success: false, error: { code, message, details, requestId } }; 3) A single centralized 4-argument error-handling middleware at the very bottom of the Express pipeline that formats all errors uniformly, strips stack traces in production, and guarantees consistent responses.",
    "answer": "Redesign Strategy for Consistent Error Handling:\n\n1. Custom AppError Base Class:\n```javascript\nclass AppError extends Error {\n  constructor(message, statusCode, errorCode = \"INTERNAL_ERROR\", details = null) {\n    super(message);\n    this.statusCode = statusCode;\n    this.errorCode = errorCode;\n    this.details = details;\n    this.isOperational = true; // Distinguishes operational vs programming bugs\n    Error.captureStackTrace(this, this.constructor);\n  }\n}\n```\n\n2. Standardized JSON Envelope:\nEvery error response follows an identical contract:\n```json\n{\n  \"success\": false,\n  \"error\": {\n    \"code\": \"RESOURCE_NOT_FOUND\",\n    \"message\": \"User with ID 104 not found\",\n    \"details\": null,\n    \"requestId\": \"c9bf9e57-1685-4c89-bafb-ff5af830be8a\",\n    \"timestamp\": \"2026-09-10T00:00:00.000Z\"\n  }\n}\n```\n\n3. Centralized Handler Transformation:\nNormalizes Mongoose CastError, ZodError, JWT errors, and Multer errors into the standard AppError envelope before sending response.",
    "explanation": "Frontend applications can rely on a single error parser, drastically reducing client-side error-handling complexity.",
    "importantPoints": [
      "Create custom AppError class with statusCode, errorCode, and isOperational.",
      "Adopt a standard error envelope or RFC 7807 Problem Details.",
      "Centralize error formatting in a single final middleware.",
      "Normalize third-party errors (Mongoose, Zod, JWT) into standard envelope.",
      "Hide internal stack traces in production (NODE_ENV === \"production\")."
    ],
    "commonMistakes": [
      "Sending raw string errors in some routes (res.send(\"error\")) and objects in others (res.json({ err })).",
      "Exposing database column names or internal stack traces to public API consumers."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Universal Error Normalization Middleware",
        "code": "class AppError extends Error {\n  constructor(message, statusCode, code = 'ERROR', details = null) {\n    super(message);\n    this.statusCode = statusCode;\n    this.code = code;\n    this.details = details;\n    this.isOperational = true;\n  }\n}\n\nfunction globalErrorHandler(err, req, res, next) {\n  let error = err;\n\n  // Normalize Zod Validation Errors\n  if (err.name === 'ZodError') {\n    error = new AppError('Validation failed', 400, 'VALIDATION_ERROR', err.errors);\n  }\n  // Normalize JWT Errors\n  if (err.name === 'JsonWebTokenError') {\n    error = new AppError('Invalid token', 401, 'INVALID_TOKEN');\n  }\n\n  const statusCode = error.statusCode || 500;\n  res.status(statusCode).json({\n    success: false,\n    error: {\n      code: error.code || 'INTERNAL_SERVER_ERROR',\n      message: error.isOperational ? error.message : 'Something went wrong',\n      details: error.details,\n      requestId: req.id,\n      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })\n    }\n  });\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Operational Errors vs Programmer Errors",
    "question": "What is the distinction between Operational Errors and Programmer Errors in Node.js and Express, and how should they be handled differently?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "operational-errors",
      "programmer-errors",
      "reliability"
    ],
    "interviewAnswer": "Operational errors are runtime problems inherent in distributed systems that are expected and can be gracefully handled (e.g. invalid user input, resource not found, database connection timeout, socket drop). Programmer errors are bugs in application code that should never happen (e.g. TypeError: cannot read property of null, passing string where object expected, syntax error). Operational errors return 4xx/503 responses and continue running; programmer errors should log critical alerts and restart the process gracefully.",
    "answer": "Operational vs Programmer Breakdown:\n\n1. Operational Errors:\n- Characteristics: Predictable, unavoidable in production (e.g. network failure, invalid card details, rate limit hit).\n- Handling: Return appropriate HTTP status (400, 401, 404, 503) with friendly error message. Keep process running.\n\n2. Programmer Errors:\n- Characteristics: Bugs in code (syntax error, failed assertion, unhandled undefined).\n- Handling: The application state may be corrupted (e.g. memory leak, dangling lock). Log the stack trace at CRITICAL level, gracefully close the server, and let PM2 or Kubernetes restart a clean container.",
    "explanation": "Tagging custom error classes with this.isOperational = true enables the global error handler to make this decision automatically.",
    "importantPoints": [
      "Operational errors are expected runtime conditions (4xx, 503).",
      "Programmer errors are bugs in code (TypeErrors, syntax bugs).",
      "Programmer errors corrupt state and require graceful process restart.",
      "Tag custom errors with isOperational: true."
    ],
    "commonMistakes": [
      "Restarting the server on a 404 Not Found error.",
      "Silently catching programmer TypeErrors with empty catch blocks and leaving corrupted state in memory."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Distinguishing Error Types in Global Handler",
        "code": "app.use((err, req, res, next) => {\n  if (err.isOperational) {\n    // Expected operational error: return status cleanly\n    return res.status(err.statusCode).json({ error: err.message });\n  }\n\n  // UNEXPECTED PROGRAMMER BUG:\n  logger.fatal('PROGRAMMER ERROR DETECTED:', err);\n  // Send generic response and trigger graceful shutdown:\n  res.status(500).json({ error: 'Internal Server Error' });\n  gracefulShutdown(1);\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "The Default Express Error Handler",
    "question": "How does the default built-in Express error handler operate when no custom error middleware is defined?",
    "difficulty": "easy",
    "questionType": "Internals",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "default-handler",
      "internals"
    ],
    "interviewAnswer": "Express provides an internal default error handler mounted at the end of the middleware stack. It sends an HTML response containing the error stack in development (NODE_ENV !== \"production\") or generic status text in production, with status code err.status or err.statusCode (defaulting to 500). If headers have already been sent, it destroys the socket connection.",
    "answer": "In production, relying on the default handler exposes HTML pages to API clients and leaks stack traces unless NODE_ENV is set to production.",
    "explanation": "In production, relying on the default handler exposes HTML pages to API clients and leaks stack traces unless NODE_ENV is set to production.",
    "importantPoints": [
      "Built-in fallback handler at end of stack.",
      "Sends HTML error pages.",
      "Always replace with a custom JSON error handler for REST APIs."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The Default Express Error Handler",
        "code": "// Express Error Handling: The Default Express Error Handler\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Delegating to Default Error Handler when Headers are Already Sent",
    "question": "Why MUST custom error-handling middleware delegate to next(err) if res.headersSent is true?",
    "difficulty": "medium",
    "questionType": "Reliability",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "headersSent",
      "socket-closure"
    ],
    "interviewAnswer": "If an error occurs after HTTP response headers have already been flushed over the socket (e.g. during a chunked stream), your custom handler cannot write a new status code (res.status(500)). You must check if (res.headersSent) return next(err); which instructs Express's default error handler to terminate the socket connection safely.",
    "answer": "Attempting to call `res.status(500).json(...)` when `res.headersSent === true` triggers an unhandled `ERR_HTTP_HEADERS_SENT` crash.",
    "explanation": "Attempting to call `res.status(500).json(...)` when `res.headersSent === true` triggers an unhandled `ERR_HTTP_HEADERS_SENT` crash.",
    "importantPoints": [
      "Check if (res.headersSent) return next(err);.",
      "Headers cannot be modified once flushed.",
      "Default handler closes socket connection cleanly."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Delegating to Default Error Handler when Headers are Already Sent",
        "code": "// Express Error Handling: Delegating to Default Error Handler when Headers are Already Sent\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Handling Errors in Streaming Responses (Pipeline Utility)",
    "question": "How do you handle stream errors properly in Express using stream.pipeline()?",
    "difficulty": "hard",
    "questionType": "Streams",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "streams",
      "pipeline",
      "backpressure"
    ],
    "interviewAnswer": "Avoid raw stream.pipe(res) because errors on the readable stream do not automatically close the writable stream, leaking file descriptors. Use stream.pipeline(readStream, res, (err) => { if (err) next(err); }) or the promise-based pipeline(readable, res). pipeline guarantees proper cleanup and socket closure if reading fails.",
    "answer": "If reading a file from disk or S3 fails halfway through, `pipeline` destroys all streams and calls the error callback.",
    "explanation": "If reading a file from disk or S3 fails halfway through, `pipeline` destroys all streams and calls the error callback.",
    "importantPoints": [
      "stream.pipe does not clean up on error; pipeline does.",
      "pipeline closes all streams if any stream fails.",
      "Passes error to next(err) safely."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling Errors in Streaming Responses (Pipeline Utility)",
        "code": "// Express Error Handling: Handling Errors in Streaming Responses (Pipeline Utility)\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Catching Asynchronous Errors with express-async-errors",
    "question": "How does the express-async-errors npm package monkey-patch Express 4 to catch Promise rejections?",
    "difficulty": "medium",
    "questionType": "Internals",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "express-async-errors",
      "monkey-patching",
      "promises"
    ],
    "interviewAnswer": "express-async-errors monkey-patches express.Layer.prototype.handle_request. It intercepts any route handler or middleware execution, checks if the returned value is a Promise, and appends a .catch(next) handler. This enables writing clean async/await handlers in Express 4 without manual try/catch boilerplate.",
    "answer": "Require it once at the entry point: `require(\"express-async-errors\"); const express = require(\"express\");`. In Express 5, this is built-in natively.",
    "explanation": "Require it once at the entry point: `require(\"express-async-errors\"); const express = require(\"express\");`. In Express 5, this is built-in natively.",
    "importantPoints": [
      "Monkey-patches Layer.prototype.handle_request.",
      "Appends .catch(next) to returned Promises.",
      "Eliminates try/catch boilerplate in Express 4."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Catching Asynchronous Errors with express-async-errors",
        "code": "// Express Error Handling: Catching Asynchronous Errors with express-async-errors\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Process-Level Crash Prevention: uncaughtException vs unhandledRejection",
    "question": "What is the difference between uncaughtException and unhandledRejection, and how should a production Express app handle them?",
    "difficulty": "hard",
    "questionType": "Node.js Internals",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "uncaughtException",
      "unhandledRejection",
      "crash"
    ],
    "interviewAnswer": "uncaughtException occurs when a synchronous exception is never caught by any try/catch. unhandledRejection occurs when a Promise rejects without a .catch() handler. In production: log both with full stack traces, flush logs, execute a graceful shutdown, and exit (process.exit(1)) to allow container orchestrators (Kubernetes/PM2) to restart a clean process.",
    "answer": "Never keep a process running after an `uncaughtException`; the Node.js runtime state is indeterminate and memory/locks may be corrupted.",
    "explanation": "Never keep a process running after an `uncaughtException`; the Node.js runtime state is indeterminate and memory/locks may be corrupted.",
    "importantPoints": [
      "uncaughtException for synchronous errors; unhandledRejection for Promises.",
      "Indicates unhandled application bugs.",
      "Must log, shutdown cleanly, and restart process."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Process-Level Crash Prevention: uncaughtException vs unhandledRejection",
        "code": "// Express Error Handling: Process-Level Crash Prevention: uncaughtException vs unhandledRejection\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "HTTP Status Code Discipline: 400 vs 401 vs 403 vs 404 vs 422",
    "question": "What are the precise semantic differences among HTTP 400, 401, 403, 404, and 422 error codes?",
    "difficulty": "easy",
    "questionType": "REST API",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "http-status-codes",
      "401",
      "403",
      "422"
    ],
    "interviewAnswer": "400 Bad Request: Malformed syntax or invalid parameter; 401 Unauthorized: Authentication is missing or invalid (user is unauthenticated); 403 Forbidden: User is authenticated but lacks required permissions (authorization failure); 404 Not Found: Requested resource URI does not exist; 422 Unprocessable Entity: Syntax is valid JSON, but semantic validation rules failed.",
    "answer": "Never return 401 when a user is logged in but lacks admin rights; return 403 Forbidden. Never return 200 with an `{ error }` payload.",
    "explanation": "Never return 401 when a user is logged in but lacks admin rights; return 403 Forbidden. Never return 200 with an `{ error }` payload.",
    "importantPoints": [
      "401 = Missing or invalid credentials.",
      "403 = Valid credentials, insufficient privileges.",
      "422 = Valid syntax, semantic validation failure.",
      "400 = Malformed syntax or bad request."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "HTTP Status Code Discipline: 400 vs 401 vs 403 vs 404 vs 422",
        "code": "// Express Error Handling: HTTP Status Code Discipline: 400 vs 401 vs 403 vs 404 vs 422\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Hiding Stack Traces in Production Environments",
    "question": "Why is exposing stack traces in production error responses a severe security risk, and how do you prevent it?",
    "difficulty": "easy",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "stack-traces",
      "security",
      "information-disclosure"
    ],
    "interviewAnswer": "Stack traces expose internal file paths, server directory structure, database technology, third-party libraries, and internal variable names, aiding attackers in crafting targeted exploits. In the centralized error handler, check process.env.NODE_ENV === \"production\"; if true, omit the stack property entirely from the JSON response.",
    "answer": "Log the stack trace internally to your secure logging pipeline, but never transmit it over HTTP to the client.",
    "explanation": "Log the stack trace internally to your secure logging pipeline, but never transmit it over HTTP to the client.",
    "importantPoints": [
      "Stack traces expose internal paths and software versions.",
      "Information disclosure aids attacker reconnaissance.",
      "Condition stack output on NODE_ENV !== \"production\"."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Hiding Stack Traces in Production Environments",
        "code": "// Express Error Handling: Hiding Stack Traces in Production Environments\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "RFC 7807 Problem Details for HTTP APIs",
    "question": "What is the RFC 7807 Problem Details standard, and how is it implemented in Express error responses?",
    "difficulty": "medium",
    "questionType": "Standards",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "rfc7807",
      "problem-details",
      "rest-standards"
    ],
    "interviewAnswer": "RFC 7807 defines a standardized JSON structure for HTTP API errors: Content-Type: application/problem+json containing: type (URI identifying problem type), title (short human-readable summary), status (HTTP status code), detail (specific explanation), and instance (URI of the occurrence). It provides an industry-standard error schema across microservices.",
    "answer": "Syntax:\n`res.status(400).set(\"Content-Type\", \"application/problem+json\").json({ type: \"https://api.example.com/errors/invalid-email\", title: \"Invalid Email\", status: 400, detail: \"The provided email format is invalid\", instance: req.originalUrl });`",
    "explanation": "Syntax:\n`res.status(400).set(\"Content-Type\", \"application/problem+json\").json({ type: \"https://api.example.com/errors/invalid-email\", title: \"Invalid Email\", status: 400, detail: \"The provided email format is invalid\", instance: req.originalUrl });`",
    "importantPoints": [
      "RFC 7807 standardizes error payload structure.",
      "Uses Content-Type: application/problem+json.",
      "Includes type, title, status, detail, instance fields."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "RFC 7807 Problem Details for HTTP APIs",
        "code": "// Express Error Handling: RFC 7807 Problem Details for HTTP APIs\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Handling JSON Syntax Errors from express.json()",
    "question": "What happens when a client sends malformed JSON to express.json(), and how do you customize the error response?",
    "difficulty": "medium",
    "questionType": "Error Handling",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "malformed-json",
      "body-parser",
      "syntax-error"
    ],
    "interviewAnswer": "When a client submits malformed JSON (e.g. missing quote or trailing comma), express.json() throws a SyntaxError with status 400. In your centralized error handler, check if (err instanceof SyntaxError && err.status === 400 && \"body\" in err) and return a clean JSON error: { error: \"Malformed JSON payload in request body\" } instead of exposing internal body-parser stack traces.",
    "answer": "If not handled custom, Express sends its default error page which may look inconsistent with your REST envelope.",
    "explanation": "If not handled custom, Express sends its default error page which may look inconsistent with your REST envelope.",
    "importantPoints": [
      "express.json throws SyntaxError with status: 400.",
      "Inspect err.status === 400 and \"body\" in err.",
      "Return clean JSON error envelope."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling JSON Syntax Errors from express.json()",
        "code": "// Express Error Handling: Handling JSON Syntax Errors from express.json()\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Handling 413 Payload Too Large Errors",
    "question": "How do you catch and customize 413 Payload Too Large errors thrown by body parsers or Multer?",
    "difficulty": "easy",
    "questionType": "Error Handling",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "payload-too-large",
      "413",
      "limits"
    ],
    "interviewAnswer": "When a request body exceeds the configured limit (e.g. limit: \"1mb\"), body-parser throws an error with type: \"entity.too.large\" and status 413. Check err.type === \"entity.too.large\" in the error middleware and return { error: \"Request payload exceeds allowed limit of 1MB\" }.",
    "answer": "Similarly, Multer throws `LIMIT_FILE_SIZE` when file uploads exceed limits.",
    "explanation": "Similarly, Multer throws `LIMIT_FILE_SIZE` when file uploads exceed limits.",
    "importantPoints": [
      "Thrown when payload exceeds size limit.",
      "body-parser sets err.type = \"entity.too.large\".",
      "Multer sets err.code = \"LIMIT_FILE_SIZE\"."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling 413 Payload Too Large Errors",
        "code": "// Express Error Handling: Handling 413 Payload Too Large Errors\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Handling Mongoose Validation and CastError in Express Error Middleware",
    "question": "How should Mongoose ValidationError, CastError, and E11000 duplicate key errors be transformed in Express error middleware?",
    "difficulty": "medium",
    "questionType": "Integration",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "mongoose",
      "validation-error",
      "cast-error",
      "e11000"
    ],
    "interviewAnswer": "In the global error handler: 1) If err.name === \"ValidationError\", map err.errors into field-level error messages and return 400; 2) If err.name === \"CastError\", return 400 for invalid ID format; 3) If err.code === 11000, extract duplicate field name from err.keyValue and return 409 Conflict (\"Email already exists\").",
    "answer": "This prevents raw database internal exceptions from bubbling up as 500 Internal Server Errors.",
    "explanation": "This prevents raw database internal exceptions from bubbling up as 500 Internal Server Errors.",
    "importantPoints": [
      "ValidationError maps to 400 Bad Request with field errors.",
      "CastError maps to 400 Bad Request (invalid ObjectId).",
      "11000 maps to 409 Conflict (duplicate unique key)."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling Mongoose Validation and CastError in Express Error Middleware",
        "code": "// Express Error Handling: Handling Mongoose Validation and CastError in Express Error Middleware\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Circuit Breaker Pattern for External API Failures in Handlers",
    "question": "How does a Circuit Breaker (like Opossum) prevent failing downstream services from bringing down an Express server?",
    "difficulty": "hard",
    "questionType": "Resilience",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "circuit-breaker",
      "opossum",
      "resilience",
      "microservices"
    ],
    "interviewAnswer": "When an external service starts failing or timing out, concurrent requests pile up waiting for sockets, exhausting Node.js memory and thread resources. A circuit breaker tracks failures: when failures pass a threshold (e.g. 50%), it \"trips open\" and immediately fails fast without calling the external service, returning a cached fallback or 503 error until the service recovers.",
    "answer": "Three states: Closed (normal), Open (fail immediately), Half-Open (trial calls to test service recovery).",
    "explanation": "Three states: Closed (normal), Open (fail immediately), Half-Open (trial calls to test service recovery).",
    "importantPoints": [
      "Prevents cascading failures from external API outages.",
      "Fails fast when error threshold is breached.",
      "Protects Express server memory and socket pools."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Circuit Breaker Pattern for External API Failures in Handlers",
        "code": "// Express Error Handling: Circuit Breaker Pattern for External API Failures in Handlers\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Database Connection Loss Handling during Active Requests",
    "question": "How should Express handlers behave when the database connection drops mid-request?",
    "difficulty": "medium",
    "questionType": "Reliability",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "database-disconnect",
      "503",
      "retry"
    ],
    "interviewAnswer": "When a database connection drops, active query promises reject with connection error. Catch these in the global error handler: check for connection loss error codes (ECONNREFUSED, MongoNetworkError) and respond with 503 Service Unavailable with a Retry-After header, signaling clients or load balancers to retry.",
    "answer": "Simultaneously, database drivers (Mongoose/pg) execute automatic reconnection logic in the background.",
    "explanation": "Simultaneously, database drivers (Mongoose/pg) execute automatic reconnection logic in the background.",
    "importantPoints": [
      "Catch connection errors and respond with 503 Service Unavailable.",
      "Include Retry-After header.",
      "Do not crash process on transient network hiccups."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Database Connection Loss Handling during Active Requests",
        "code": "// Express Error Handling: Database Connection Loss Handling during Active Requests\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Custom Error Classes Hierarchy in TypeScript",
    "question": "How do you design a type-safe custom error hierarchy in TypeScript for an Express application?",
    "difficulty": "medium",
    "questionType": "TypeScript",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "typescript",
      "custom-errors",
      "inheritance"
    ],
    "interviewAnswer": "Create an abstract BaseError class extending Error with abstract statusCode: number and abstract serializeErrors(): { message: string, field?: string }[]. Concrete classes (BadRequestError, NotFoundError, UnauthorizedError) implement these properties. The global error handler checks if (err instanceof BaseError) return res.status(err.statusCode).json({ errors: err.serializeErrors() }).",
    "answer": "Using an abstract class guarantees compile-time enforcement: any new error class must provide a statusCode and serialization method.",
    "explanation": "Using an abstract class guarantees compile-time enforcement: any new error class must provide a statusCode and serialization method.",
    "importantPoints": [
      "Abstract BaseError defines contract for all custom errors.",
      "Enforces statusCode and serializeErrors() implementation.",
      "Global error handler safely handles any BaseError polymorphically."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Custom Error Classes Hierarchy in TypeScript",
        "code": "// Express Error Handling: Custom Error Classes Hierarchy in TypeScript\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Rate Limit Exhaustion: 429 Too Many Requests Error Handling",
    "question": "What headers must be included when returning an HTTP 429 Too Many Requests response?",
    "difficulty": "easy",
    "questionType": "Rate Limiting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "429",
      "rate-limit",
      "retry-after"
    ],
    "interviewAnswer": "When rate limits are exceeded, respond with HTTP 429 Too Many Requests and include standard rate limit headers: Retry-After (seconds until quota resets), RateLimit-Limit, RateLimit-Remaining (0), and RateLimit-Reset (epoch timestamp). This informs well-behaved clients and SDKs exactly how long to wait before retrying.",
    "answer": "express-rate-limit configures these headers automatically.",
    "explanation": "express-rate-limit configures these headers automatically.",
    "importantPoints": [
      "Returns HTTP 429 Too Many Requests.",
      "Retry-After header specifies wait duration.",
      "Enables client SDKs to back off deterministically."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Rate Limit Exhaustion: 429 Too Many Requests Error Handling",
        "code": "// Express Error Handling: Rate Limit Exhaustion: 429 Too Many Requests Error Handling\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Handling Errors in Asynchronous Event Emitters inside Handlers",
    "question": "Why do errors thrown inside EventEmitter callbacks bypass Express error middleware, and how do you handle them?",
    "difficulty": "hard",
    "questionType": "Event Loop",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "event-emitter",
      "unhandled-error"
    ],
    "interviewAnswer": "EventEmitters in Node.js emit events outside the Express middleware execution context. If an event emitter throws or emits \"error\" and no listener is attached (emitter.on(\"error\")), Node treats it as an uncaughtException and crashes the process. Always attach an explicit .on(\"error\", next) listener to any internal event emitter or stream created inside a route.",
    "answer": "Never create an `EventEmitter` without an `error` listener.",
    "explanation": "Never create an `EventEmitter` without an `error` listener.",
    "importantPoints": [
      "Unlistened EventEmitter error events crash Node.js.",
      "Always attach emitter.on(\"error\", next).",
      "Event loops decouple emitter execution from Express try/catch."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling Errors in Asynchronous Event Emitters inside Handlers",
        "code": "// Express Error Handling: Handling Errors in Asynchronous Event Emitters inside Handlers\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Sentry / Bugsnag Integration in Express Error Pipelines",
    "question": "Where should Sentry.Handlers.requestHandler() and Sentry.Handlers.errorHandler() be placed in the Express pipeline?",
    "difficulty": "medium",
    "questionType": "Observability",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "sentry",
      "bugsnag",
      "monitoring"
    ],
    "interviewAnswer": "Sentry.Handlers.requestHandler() must be the very FIRST middleware mounted on app (above all routes and parsers) to attach tracing and request context. Sentry.Handlers.errorHandler() must be mounted AFTER all routes, but BEFORE your custom centralized error-handling middleware so it can capture errors and attach Sentry error IDs before you send the JSON response.",
    "answer": "This placement ensures Sentry captures 100% of errors with full breadcrumbs while allowing your custom error handler to control the final JSON response.",
    "explanation": "This placement ensures Sentry captures 100% of errors with full breadcrumbs while allowing your custom error handler to control the final JSON response.",
    "importantPoints": [
      "requestHandler must be first middleware.",
      "errorHandler must precede custom error middleware.",
      "Injects Sentry event ID into response for user support."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Sentry / Bugsnag Integration in Express Error Pipelines",
        "code": "// Express Error Handling: Sentry / Bugsnag Integration in Express Error Pipelines\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Audit Logging of Sensitive Errors",
    "question": "Why should authentication failures and authorization denials be logged to a dedicated security audit log?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "audit-logging",
      "security",
      "siem"
    ],
    "interviewAnswer": "401 Unauthorized and 403 Forbidden errors indicate potential credential stuffing, brute force, or privilege escalation attacks. Logging these with client IP, username, timestamp, and requested resource to a dedicated security log (SIEM) enables real-time intrusion detection and automated IP blocking.",
    "answer": "Standard application logs focus on debugging; security audit logs focus on compliance and threat detection.",
    "explanation": "Standard application logs focus on debugging; security audit logs focus on compliance and threat detection.",
    "importantPoints": [
      "Track 401 and 403 errors in security SIEM logs.",
      "Includes IP, user ID, and target resource.",
      "Detects brute force attacks and privilege escalation attempts."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Audit Logging of Sensitive Errors",
        "code": "// Express Error Handling: Audit Logging of Sensitive Errors\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Preventing Memory Leaks during Error Handlers",
    "question": "How can error-handling middleware accidentally introduce memory leaks when handling rejected promises?",
    "difficulty": "hard",
    "questionType": "Memory Management",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "memory-leaks",
      "closures",
      "error-objects"
    ],
    "interviewAnswer": "If error middleware captures large context objects (e.g. req.body, massive database results) in global error reporting queues without bounds, or pushes error objects with full closure contexts into an unbounded array, memory accumulates until V8 heap exhaustion. Store only essential primitives (error message, status, stack trace string) in error logs.",
    "answer": "Error stack traces capture the call site and surrounding closure scope; avoid holding references to large request objects in memory.",
    "explanation": "Error stack traces capture the call site and surrounding closure scope; avoid holding references to large request objects in memory.",
    "importantPoints": [
      "Avoid caching raw req or full closures in error logs.",
      "Extract only primitive error properties (message, code, stack).",
      "Use bounded circular buffers or stream to stdout immediately."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Preventing Memory Leaks during Error Handlers",
        "code": "// Express Error Handling: Preventing Memory Leaks during Error Handlers\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Error-Handling in Microservices: Forwarding Downstream Status Codes",
    "question": "When an upstream microservice fails, should Express return the exact same status code received from downstream?",
    "difficulty": "medium",
    "questionType": "Microservices",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "microservices",
      "status-forwarding",
      "gateway"
    ],
    "interviewAnswer": "No! Blindly forwarding downstream status codes is an anti-pattern. If a downstream microservice returns 404 (its internal user was not found), returning 404 to the client implies the API gateway route does not exist. Instead, translate downstream errors: downstream 404 becomes 422 or custom error; downstream 500 becomes 502 Bad Gateway.",
    "answer": "The API Gateway must maintain its own clean contract with clients regardless of internal microservice topology.",
    "explanation": "The API Gateway must maintain its own clean contract with clients regardless of internal microservice topology.",
    "importantPoints": [
      "Do not blindly forward internal microservice status codes.",
      "Map downstream 500s to 502 Bad Gateway.",
      "Maintain clean external API contract boundaries."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Error-Handling in Microservices: Forwarding Downstream Status Codes",
        "code": "// Express Error Handling: Error-Handling in Microservices: Forwarding Downstream Status Codes\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Graceful Error Handling for Uncaught Worker Thread Errors",
    "question": "How do you handle errors thrown inside Node.js worker_threads when invoked from Express handlers?",
    "difficulty": "hard",
    "questionType": "Concurrency",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "worker-threads",
      "concurrency"
    ],
    "interviewAnswer": "Worker threads communicate via message passing. Listen to worker.on(\"error\", (err) => next(err)) and worker.on(\"exit\", (code) => { if (code !== 0) next(new Error(`Worker stopped with exit code ${code}`)); }). If an error occurs in the worker, forward it to next(err) so the HTTP client receives a proper error response instead of hanging.",
    "answer": "Failing to handle the worker `error` event will leave the calling Express request waiting indefinitely.",
    "explanation": "Failing to handle the worker `error` event will leave the calling Express request waiting indefinitely.",
    "importantPoints": [
      "Listen to worker.on(\"error\") and worker.on(\"exit\").",
      "Forward worker errors to next(err).",
      "Prevents hanging client requests on background crashes."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Graceful Error Handling for Uncaught Worker Thread Errors",
        "code": "// Express Error Handling: Graceful Error Handling for Uncaught Worker Thread Errors\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Summary: Building a Bulletproof Express Error Handling Architecture",
    "question": "What are the architectural layers of a bulletproof Express error-handling pipeline?",
    "difficulty": "easy",
    "questionType": "Summary",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "summary",
      "architecture",
      "best-practices"
    ],
    "interviewAnswer": "1) Route Layer: Throw typed AppErrors and use async wrappers (or Express 5); 2) Normalization Layer: Convert third-party errors (Zod, Mongoose, JWT) into standard AppErrors; 3) Centralized Error Middleware: Formats standard RFC 7807/JSON envelope, hides stack in production, logs to structured logger; 4) Process Fallbacks: uncaughtException and unhandledRejection listeners execute graceful shutdown.",
    "answer": "This layered defense guarantees zero hanging requests, zero leaked stack traces, and 100% consistent error responses.",
    "explanation": "This layered defense guarantees zero hanging requests, zero leaked stack traces, and 100% consistent error responses.",
    "importantPoints": [
      "Typed AppError hierarchy.",
      "Normalization of ORM and validation errors.",
      "Centralized 4-parameter error handler.",
      "Process-level uncaughtException safeguards."
    ],
    "commonMistakes": [
      "Forgetting 4 parameters on error middleware or leaking stack traces."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Summary: Building a Bulletproof Express Error Handling Architecture",
        "code": "// Express Error Handling: Summary: Building a Bulletproof Express Error Handling Architecture\napp.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Request Timeout Handling with connect-timeout Middleware",
    "question": "How do you handle timeouts in Express requests using the connect-timeout middleware to prevent hung requests?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "timeout",
      "connect-timeout",
      "res-headersSent"
    ],
    "interviewAnswer": "Using connect-timeout, Express attaches a timer to requests. If the handler exceeds the timeout, req.timedout becomes true and a 503 error is passed down. Handlers must verify if (req.timedout) return; before sending responses after long async operations.",
    "answer": "Handling request timeouts effectively:\n\n1. connect-timeout attaches a timer to incoming requests.\n2. When expired, it triggers next(err) with status 503.\n3. Handlers performing asynchronous operations must check req.timedout before writing to res to prevent ERR_HTTP_HEADERS_SENT.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "import timeout from 'connect-timeout';\napp.use(timeout('5s'));\napp.get('/data', async (req, res) => {\n  const data = await fetchLongData();\n  if (req.timedout) return;\n  res.json(data);\n});"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Error Boundary Pattern in Express Router Sub-Trees",
    "question": "What is an Error Boundary pattern in Express routing, and how can individual router sub-trees have isolated error handling?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "router",
      "error-boundary",
      "modular-architecture"
    ],
    "interviewAnswer": "Mounting 4-argument error middleware directly onto a sub-router encapsulates errors for that specific sub-tree, providing isolated error formatting and handling without polluting the global error handler.",
    "answer": "Error boundaries in sub-routers:\n\n1. You can attach router.use((err, req, res, next) => ...) to any express.Router() instance.\n2. Only errors originating from routes registered on that router will reach its error handler.\n3. Calling next(err) allows selective bubbling up to parent or application-level error handlers.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const apiRouter = express.Router();\napiRouter.get('/items', handler);\napiRouter.use((err, req, res, next) => {\n  res.status(err.status || 500).json({ error: err.message });\n});\napp.use('/api', apiRouter);"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Handling File Upload Errors with Multer in Express",
    "question": "How do you handle errors during file uploads with Multer (e.g. MulterError: LIMIT_FILE_SIZE or invalid mimetype)?",
    "difficulty": "medium",
    "questionType": "Implementation",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "multer",
      "file-upload",
      "LIMIT_FILE_SIZE"
    ],
    "interviewAnswer": "Multer errors instantiate MulterError with distinct codes like LIMIT_FILE_SIZE. You catch them either via inline callback wrappers or by checking err instanceof multer.MulterError in global error middleware.",
    "answer": "Catching Multer upload errors:\n\n1. Check err instanceof multer.MulterError in global error middleware.\n2. Map LIMIT_FILE_SIZE to 400 Bad Request or 413 Payload Too Large.\n3. Return clean JSON messages instead of raw crash reports.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "if (err instanceof multer.MulterError) {\n  return res.status(400).json({ error: err.code === 'LIMIT_FILE_SIZE' ? 'Max 5MB allowed' : err.message });\n}"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Sanitizing and Masking Sensitive Data in Error Logging",
    "question": "How do you mask or redact sensitive customer data (passwords, credit cards, PII) in error logs before sending them to logging services like Datadog or CloudWatch?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "logging",
      "pii-masking",
      "security",
      "winston"
    ],
    "interviewAnswer": "Loggers like Pino and Winston provide redaction configurations that recursively match keys like password, token, authorization, and creditCard, replacing them with [REDACTED] before serialization.",
    "answer": "Redacting sensitive PII in Express error logs:\n\n1. Use Pino or Winston redact options.\n2. In custom error middleware, serialize req.body and req.headers through an allowlist or denylist sanitizer function.\n3. Never log raw JWT authorization tokens, session cookies, or credit card numbers in error payloads.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const logger = pino({ redact: ['req.body.password', 'req.headers.authorization'] });"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "error-handling",
    "title": "Dangers of Throwing Inside Asynchronous Callbacks in Express",
    "question": "Why must you avoid throwing synchronous exceptions inside asynchronous callbacks in Express handlers?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "error-handling",
      "async-callbacks",
      "event-loop",
      "uncaughtException"
    ],
    "interviewAnswer": "Express cannot catch errors thrown inside asynchronous callbacks like setTimeout or event listeners because the route execution stack has already finished. The error triggers uncaughtException and crashes the Node.js process unless wrapped in try/catch and passed to next(err).",
    "answer": "Async callback exceptions:\n\n1. Express wraps route invocations in a try/catch during the current synchronous tick.\n2. When an asynchronous callback executes on a future tick, there is no Express try/catch on the stack.\n3. If an uncaught exception is thrown, Node fires process.on('uncaughtException') and shuts down.\n4. Always wrap async callback bodies in try/catch and invoke next(err).",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "// BAD: crashes process\nsetTimeout(() => { throw new Error('Dead'); }, 50);\n\n// GOOD:\nsetTimeout(() => { try { risky(); } catch (err) { next(err); } }, 50);"
      }
    ]
  }
];
