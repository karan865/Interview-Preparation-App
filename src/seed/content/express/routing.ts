import { SeedQuestion } from '../types';

export const routingQuestions: SeedQuestion[] = [
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "The express.Router: Modular Sub-Routing Architecture",
    "question": "How does express.Router create isolated, modular route handlers, and how are routers mounted?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "expressjs",
      "routing",
      "express-router",
      "modular",
      "sub-routers"
    ],
    "interviewAnswer": "express.Router creates a mini-application capable of handling middleware and routing. It operates as an isolated routing system that is mounted onto the main app using app.use(prefix, router). This enables modular project structures where user routes, order routes, and product routes live in separate files with their own middleware.",
    "answer": "Instead of attaching 50 routes directly to `app`, routers group related endpoints:\n```javascript\n// routes/users.js\nconst router = express.Router();\nrouter.get(\"/\", listUsers);\nrouter.post(\"/\", createUser);\nmodule.exports = router;\n\n// app.js\napp.use(\"/api/v1/users\", userRoutes);\n```\nAll routes inside `users.js` are automatically prefixed with `/api/v1/users`.",
    "explanation": "Routers can also be nested inside other routers, enabling hierarchical API versioning.",
    "importantPoints": [
      "express.Router is an isolated mini-instance of middleware and routes.",
      "Mounted onto parent apps or routers via app.use(prefix, router).",
      "Encapsulates routing logic for specific domains into dedicated files.",
      "Supports route-level middleware specific to that router."
    ],
    "commonMistakes": [
      "Prefixing the mount path twice (e.g. router.get(\"/users\") mounted on app.use(\"/users\") results in /users/users).",
      "Forgetting to export module.exports = router."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Modular Router Mounting",
        "code": "// routes/products.js\nconst express = require('express');\nconst router = express.Router();\n\nrouter.get('/', (req, res) => res.json([]));\nrouter.get('/:id', (req, res) => res.json({ id: req.params.id }));\n\nmodule.exports = router;\n\n// app.js\nconst productRouter = require('./routes/products');\napp.use('/api/products', productRouter);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Param Pre-Conditioning with router.param()",
    "question": "What is router.param(), and how does it implement DRY validation and pre-fetching for route parameters?",
    "difficulty": "medium",
    "questionType": "Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "expressjs",
      "routing",
      "router-param",
      "dry",
      "validation"
    ],
    "interviewAnswer": "router.param(name, callback) triggers a callback whenever a route parameter (e.g. :userId) is present in the request path. It allows validating parameter formats (e.g. checking if it is a valid ObjectId) and pre-fetching the entity from the database once, attaching it to req.user before passing control to downstream route handlers.",
    "answer": "Without `router.param`, every endpoint (`GET /:id`, `PUT /:id`, `DELETE /:id`) repeats `const user = await db.findById(req.params.id)`. With `router.param(\"id\", async (req, res, next, id) => { ... })`, the pre-fetch logic is centralized in one place.",
    "explanation": "router.param callbacks run once per request-response cycle for each named parameter, even if multiple handlers match.",
    "importantPoints": [
      "Intercepts and validates route parameters before handlers execute.",
      "Enables DRY database pre-fetching, attaching objects to req.",
      "Receives (req, res, next, id) signature.",
      "Invoked only once per request even across matching route chains."
    ],
    "commonMistakes": [
      "Forgetting to call next() inside router.param, causing requests to hang.",
      "Not returning 404 immediately inside router.param when the entity does not exist."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Pre-fetching Entities with router.param()",
        "code": "router.param('userId', async (req, res, next, id) => {\n  try {\n    const user = await User.findById(id);\n    if (!user) {\n      return res.status(404).json({ error: 'User not found' });\n    }\n    req.userEntity = user; // Attach to request\n    next();\n  } catch (err) {\n    next(err);\n  }\n});\n\n// Handlers now have immediate access to req.userEntity:\nrouter.get('/:userId', (req, res) => res.json(req.userEntity));\nrouter.delete('/:userId', async (req, res) => {\n  await req.userEntity.deleteOne();\n  res.status(204).send();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "The mergeParams Option in Nested Routers",
    "question": "Why is mergeParams: true required when mounting nested sub-routers with parent path parameters?",
    "difficulty": "hard",
    "questionType": "Routing Internals",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "mergeParams",
      "nested-routers",
      "params"
    ],
    "interviewAnswer": "By default, child routers cannot access path parameters defined in their parent mount path (e.g. :userId in app.use(\"/users/:userId/posts\", postRouter)). Specifying express.Router({ mergeParams: true }) instructs the child router to preserve and merge req.params from parent routers, allowing postRouter to access req.params.userId.",
    "answer": "In REST hierarchies, resources are often nested (e.g. `/organizations/:orgId/teams/:teamId/members`).\n\nIf you mount a child router without `mergeParams: true`:\n`req.params` inside the child will only contain `{ teamId }`, while `orgId` is completely undefined.\n\nEnabling `{ mergeParams: true }` merges parent and child parameters seamlessly.",
    "explanation": "If parent and child parameter names collide, the child parameter takes precedence.",
    "importantPoints": [
      "Child routers isolate req.params by default.",
      "express.Router({ mergeParams: true }) exposes parent path parameters to the child.",
      "Mandatory for clean REST hierarchical sub-routing.",
      "Collision resolution favors child router parameter values."
    ],
    "commonMistakes": [
      "Wondering why req.params.userId is undefined inside a sub-router because mergeParams: true was omitted.",
      "Using flat route paths to avoid nested routers instead of using mergeParams."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Nested Routers with mergeParams",
        "code": "// routes/posts.js (Child Router)\nconst postRouter = express.Router({ mergeParams: true });\n\n// Can access :userId from parent mount path!\npostRouter.get('/', (req, res) => {\n  res.json({ userId: req.params.userId, posts: [] });\n});\n\n// app.js (Parent)\nconst postRouter = require('./routes/posts');\napp.use('/users/:userId/posts', postRouter);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Route Chaining with app.route() / router.route()",
    "question": "How does app.route() prevent redundant path declarations and improve readability for RESTful endpoints?",
    "difficulty": "easy",
    "questionType": "Syntax",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "expressjs",
      "routing",
      "app-route",
      "chaining",
      "clean-code"
    ],
    "interviewAnswer": "app.route(path) creates an instance of a single route for which you can chain multiple HTTP verbs (GET, POST, PUT, DELETE). It eliminates typing the same URL path repeatedly, reduces typo risks, and groups all operations for a specific resource path in one clean block.",
    "answer": "Without `app.route()`:\n```javascript\napp.get(\"/items\", getItems);\napp.post(\"/items\", createItem);\napp.delete(\"/items\", deleteAllItems);\n```\nWith `app.route()`:\n```javascript\napp.route(\"/items\")\n  .get(getItems)\n  .post(createItem)\n  .delete(deleteAllItems);\n```",
    "explanation": "Middlewares can also be chained to specific verbs or across the entire route definition.",
    "importantPoints": [
      "Chains multiple HTTP verbs to the same URL path.",
      "Eliminates duplicate path string declarations.",
      "Improves codebase organization and adheres to DRY principles."
    ],
    "commonMistakes": [
      "Forgetting that app.route() creates a single route and cannot mount child routers.",
      "Accidentally omitting the period when chaining methods."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Chaining HTTP Verbs with router.route()",
        "code": "router.route('/articles/:id')\n  .all((req, res, next) => {\n    // Middleware executed for ANY HTTP method targeting this path\n    console.log('Article access requested');\n    next();\n  })\n  .get((req, res) => res.json({ article: req.params.id }))\n  .put((req, res) => res.json({ updated: req.params.id }))\n  .delete((req, res) => res.status(204).send());"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Path-to-RegExp and Route Matching Patterns (Wildcards & RegEx)",
    "question": "How does Express utilize path-to-regexp to match route paths using strings, string patterns, and regular expressions?",
    "difficulty": "medium",
    "questionType": "Routing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "path-to-regexp",
      "regex-routes",
      "wildcards"
    ],
    "interviewAnswer": "Express uses the path-to-regexp library to compile route path strings into regular expressions. It supports: 1) Exact strings (\"/about\"); 2) String patterns with wildcards (\"ab?cd\", \"ab+cd\", \"ab*cd\"); 3) Regular expressions (/.*fly$/ matches dragonfly, butterfly); 4) Custom regex inside parameters (\"/users/:id(\\\\d+)\").",
    "answer": "Route Pattern Matching Examples:\n- `\"/users/:id(\\d+)\"`: Matches only when `id` consists entirely of numbers (e.g. `/users/42` matches; `/users/alex` does not match).\n- `\"/files/*\"`: Captures wildcard paths into `req.params[0]`.\n- `/.json$/`: Matches any request ending in `.json`.",
    "explanation": "In Express 5, route matching syntax is stricter: raw wildcards `*` require named parameters like `/*path`.",
    "importantPoints": [
      "Compiles path strings to RegExp via path-to-regexp.",
      "Supports regex constraints on route parameters: :id(\\d+).",
      "Wildcards and regular expression routes allow dynamic URL routing.",
      "Express 5 enforces stricter parameter syntax."
    ],
    "commonMistakes": [
      "Using un-escaped backslashes inside string regex patterns (e.g. \"\\d+\" instead of \"\\\\d+\").",
      "Over-relying on complex regex routes instead of clear REST parameter conventions."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Regex and Constrained Route Matching",
        "code": "// Numeric-only ID route:\napp.get('/orders/:id(\\\\d+)', (req, res) => {\n  res.send(`Order ID: ${req.params.id}`);\n});\n\n// Matches anything containing \"book\":\napp.get(/.*book.*/, (req, res) => {\n  res.send('Book route matched!');\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "app.all() vs app.use() for Route Matching",
    "question": "What is the functional difference between app.all(path, handler) and app.use(path, handler)?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "app-all",
      "app-use",
      "middleware"
    ],
    "interviewAnswer": "app.use(path) matches any request whose path STARTS with the specified prefix, regardless of method (prefix matching). app.all(path) matches only EXACT path matches (or pattern matches) for ALL HTTP methods (GET, POST, PUT, etc.).",
    "answer": "`app.use(\"/users\", ...)` matches `/users`, `/users/123`, `/users/settings`. `app.all(\"/users\", ...)` matches only `/users` exactly.",
    "explanation": "`app.use(\"/users\", ...)` matches `/users`, `/users/123`, `/users/settings`. `app.all(\"/users\", ...)` matches only `/users` exactly.",
    "importantPoints": [
      "app.use performs prefix matching.",
      "app.all requires exact route matching for all HTTP verbs.",
      "app.all does not match sub-paths unless wildcards are used."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "app.all() vs app.use() for Route Matching",
        "code": "// Express Routing: app.all() vs app.use() for Route Matching\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Route Execution Order and Specificity Precedence",
    "question": "How does Express resolve route precedence when multiple routes could match the same URL?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "precedence",
      "route-order",
      "lexical-order"
    ],
    "interviewAnswer": "Express evaluates routes in strict lexical declaration order (top to bottom). The FIRST route that matches the incoming URL path and method executes. Therefore, specific static routes (e.g. /users/me or /users/export) must ALWAYS be defined BEFORE parameterized routes (e.g. /users/:id); otherwise, \"me\" is captured as an :id parameter.",
    "answer": "Placing `app.get(\"/users/:id\")` above `app.get(\"/users/me\")` means `/users/me` will never execute because `:id` matches the literal string \"me\".",
    "explanation": "Placing `app.get(\"/users/:id\")` above `app.get(\"/users/me\")` means `/users/me` will never execute because `:id` matches the literal string \"me\".",
    "importantPoints": [
      "Routes execute in strict top-to-bottom order.",
      "Static specific routes must precede parameterized routes.",
      "Place generic 404 catch-alls at the absolute end."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Route Execution Order and Specificity Precedence",
        "code": "// Express Routing: Route Execution Order and Specificity Precedence\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Optional Route Parameters Syntax",
    "question": "How do you declare optional route parameters in Express routes?",
    "difficulty": "easy",
    "questionType": "Syntax",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "optional-parameters",
      "params"
    ],
    "interviewAnswer": "Append a question mark (?) after the parameter name: /users/:userId?/books/:bookId?. If the user accesses /users/books/10, req.params.userId will be undefined, while req.params.bookId is \"10\".",
    "answer": "In Express 5 / path-to-regexp v6+, optional parameters syntax uses `{/:param}` or custom parameter blocks.",
    "explanation": "In Express 5 / path-to-regexp v6+, optional parameters syntax uses `{/:param}` or custom parameter blocks.",
    "importantPoints": [
      "? suffix declares optional parameters in Express 4.",
      "req.params property is undefined if omitted in the URL.",
      "Express 5 uses updated parameter group syntax."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Optional Route Parameters Syntax",
        "code": "// Express Routing: Optional Route Parameters Syntax\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Passing Multiple Middleware Handlers to a Single Route",
    "question": "How can multiple middleware handlers be passed to a single route method?",
    "difficulty": "easy",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "middleware-chaining",
      "route-middleware"
    ],
    "interviewAnswer": "Route methods accept variable arguments or arrays of functions: app.get(path, mw1, mw2, mw3, handler) or app.get(path, [mw1, mw2], handler). Handlers execute sequentially as long as each calls next().",
    "answer": "This allows composing authentication, validation, and authorization guards directly on specific sensitive routes without applying them globally.",
    "explanation": "This allows composing authentication, validation, and authorization guards directly on specific sensitive routes without applying them globally.",
    "importantPoints": [
      "Accepts comma-separated functions or arrays of functions.",
      "Executes sequentially via next().",
      "Ideal for attaching specific guards to individual routes."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Passing Multiple Middleware Handlers to a Single Route",
        "code": "// Express Routing: Passing Multiple Middleware Handlers to a Single Route\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Dynamic Routing and Parameter Extraction (req.params)",
    "question": "How does Express extract named route segments into the req.params object?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "req-params",
      "dynamic-routes"
    ],
    "interviewAnswer": "When a route path defines colon prefixes (e.g. /flights/:from-:to or /users/:id), Express extracts the matching URL substrings and populates req.params as string key-value pairs (e.g. { from: \"JFK\", to: \"LAX\", id: \"101\" }).",
    "answer": "All values in `req.params` are strings by default; developers must cast them to numbers or ObjectIds if needed.",
    "explanation": "All values in `req.params` are strings by default; developers must cast them to numbers or ObjectIds if needed.",
    "importantPoints": [
      "Colon prefix designates named parameter.",
      "Supports hyphen and dot delimiters: /:from-:to, /:name.:format.",
      "Values are strings by default."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Dynamic Routing and Parameter Extraction (req.params)",
        "code": "// Express Routing: Dynamic Routing and Parameter Extraction (req.params)\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "The res.redirect() Status Codes and Loop Detection",
    "question": "What HTTP status codes does res.redirect() use, and how do redirect loops occur?",
    "difficulty": "medium",
    "questionType": "Response",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "redirect",
      "302",
      "301",
      "redirect-loops"
    ],
    "interviewAnswer": "res.redirect() defaults to status 302 Found (temporary redirect). A custom status can be passed as the first argument: res.redirect(301, \"/new-path\") (permanent redirect). Redirect loops occur when Route A redirects to Route B, and Route B (or middleware) redirects back to Route A (e.g. unauthenticated redirect loops).",
    "answer": "Browsers cache 301 redirects aggressively; use 302 during development to prevent persistent browser caching issues.",
    "explanation": "Browsers cache 301 redirects aggressively; use 302 during development to prevent persistent browser caching issues.",
    "importantPoints": [
      "Defaults to 302 Found.",
      "301 Moved Permanently is aggressively cached by browsers.",
      "Redirect loops trigger ERR_TOO_MANY_REDIRECTS in browsers."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The res.redirect() Status Codes and Loop Detection",
        "code": "// Express Routing: The res.redirect() Status Codes and Loop Detection\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Handling 405 Method Not Allowed Cleanly in Express",
    "question": "Why does Express return 404 instead of 405 Method Not Allowed by default, and how do you implement 405 responses?",
    "difficulty": "medium",
    "questionType": "REST API",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "405-method-not-allowed",
      "http-methods",
      "rest-standards"
    ],
    "interviewAnswer": "By default, Express simply skips non-matching methods and falls through to the final 404 handler. To conform to strict HTTP/REST standards, use router.route(\"/path\").all((req, res) => res.status(405).set(\"Allow\", \"GET, POST\").json({ error: \"Method Not Allowed\" })) at the end of the route definition.",
    "answer": "RFC 7231 specifies that a 405 response MUST include an `Allow` header listing the permitted methods for that resource.",
    "explanation": "RFC 7231 specifies that a 405 response MUST include an `Allow` header listing the permitted methods for that resource.",
    "importantPoints": [
      "Express returns 404 by default for unhandled verbs.",
      "405 Method Not Allowed requires an Allow header.",
      "Implemented via router.route().all() fallback handler."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling 405 Method Not Allowed Cleanly in Express",
        "code": "// Express Routing: Handling 405 Method Not Allowed Cleanly in Express\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Mounting Multiple Routers on the Same Base Path",
    "question": "What happens when multiple router instances are mounted on the exact same base path?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "multiple-routers",
      "middleware-stack"
    ],
    "interviewAnswer": "Express chains them sequentially in the layer stack. If app.use(\"/api\", authRouter) and app.use(\"/api\", publicRouter) are mounted, incoming requests test authRouter routes first; if no route matches or next() is called, execution flows into publicRouter.",
    "answer": "This allows organizing large APIs into multiple logical files (e.g. auth.routes.js, billing.routes.js) while sharing the same base `/api` path.",
    "explanation": "This allows organizing large APIs into multiple logical files (e.g. auth.routes.js, billing.routes.js) while sharing the same base `/api` path.",
    "importantPoints": [
      "Routers on the same path execute in mounting order.",
      "Allows splitting large API namespaces into multiple files.",
      "Requests fall through from router 1 to router 2 if unmatched."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Mounting Multiple Routers on the Same Base Path",
        "code": "// Express Routing: Mounting Multiple Routers on the Same Base Path\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Route-Level Error Handling vs Global Error Handling",
    "question": "Can individual routers encapsulate their own private error-handling middleware?",
    "difficulty": "medium",
    "questionType": "Error Handling",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "error-middleware",
      "sub-routers",
      "encapsulation"
    ],
    "interviewAnswer": "Yes. An error-handling middleware (4 parameters: err, req, res, next) can be mounted at the end of a specific express.Router. Any next(err) called within that router will be caught by the router-level error handler first. Calling next(err) inside that handler propagates the error up to the global application error handler.",
    "answer": "This enables domain-specific error handling (e.g. formatting Stripe errors inside a billing router) without polluting the global error handler.",
    "explanation": "This enables domain-specific error handling (e.g. formatting Stripe errors inside a billing router) without polluting the global error handler.",
    "importantPoints": [
      "Routers can mount private 4-argument error middleware.",
      "Handles router-specific errors locally.",
      "Can re-throw via next(err) to global error handler."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Route-Level Error Handling vs Global Error Handling",
        "code": "// Express Routing: Route-Level Error Handling vs Global Error Handling\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Custom Route Matching with Regular Expression Lookaheads",
    "question": "How can you enforce file extension routing (e.g. .html or .json) using regular expression routes?",
    "difficulty": "hard",
    "questionType": "Routing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "regex",
      "extensions",
      "lookaheads"
    ],
    "interviewAnswer": "Define a regex route like /\\/(.*)\\.(json|xml)$/. Express captures the filename in req.params[0] and the extension in req.params[1], allowing you to serve negotiated formats or reject invalid formats directly at the routing layer.",
    "answer": "Useful for building legacy APIs that supported format suffixes (`/users/10.json` vs `/users/10.xml`).",
    "explanation": "Useful for building legacy APIs that supported format suffixes (`/users/10.json` vs `/users/10.xml`).",
    "importantPoints": [
      "Capturing groups map to numeric indices in req.params.",
      "Matches format extensions dynamically.",
      "Replaced by Accept headers in modern REST APIs."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Custom Route Matching with Regular Expression Lookaheads",
        "code": "// Express Routing: Custom Route Matching with Regular Expression Lookaheads\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Route Parameter Sanitization: Preventing Prototype Pollution via Params",
    "question": "How can malicious route parameter inputs cause prototype pollution or injection vulnerabilities if unvalidated?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "prototype-pollution",
      "params",
      "security"
    ],
    "interviewAnswer": "If application code blindly assigns req.params (e.g. req.params.field) or query objects into internal objects using lodash.set or Object.assign without validating against __proto__, constructor, or prototype, attackers can poison the JavaScript Object prototype, altering application behavior globally.",
    "answer": "Always validate and sanitize route parameters using strict schemas (like Zod) before using them in database queries or object mutations.",
    "explanation": "Always validate and sanitize route parameters using strict schemas (like Zod) before using them in database queries or object mutations.",
    "importantPoints": [
      "Never trust raw req.params in object merge operations.",
      "Block __proto__ and constructor keys.",
      "Use schema validation libraries to coerce and sanitize parameters."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Route Parameter Sanitization: Preventing Prototype Pollution via Params",
        "code": "// Express Routing: Route Parameter Sanitization: Preventing Prototype Pollution via Params\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "The res.format() Method for Content Negotiation",
    "question": "How does res.format() implement automatic content negotiation based on the client Accept header?",
    "difficulty": "medium",
    "questionType": "Content Negotiation",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "content-negotiation",
      "res-format",
      "accept-header"
    ],
    "interviewAnswer": "res.format() checks the request Accept header and executes the corresponding callback: res.format({ \"text/html\": () => res.render(\"user\"), \"application/json\": () => res.json(user), \"default\": () => res.status(406).send(\"Not Acceptable\") }). If no format matches and no default is provided, it responds with 406 Not Acceptable.",
    "answer": "Content negotiation allows a single route endpoint to serve both an HTML web page for browser visits and JSON data for API consumers.",
    "explanation": "Content negotiation allows a single route endpoint to serve both an HTML web page for browser visits and JSON data for API consumers.",
    "importantPoints": [
      "Inspects client Accept header.",
      "Executes matched MIME type callback.",
      "Returns 406 Not Acceptable if no format matches."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The res.format() Method for Content Negotiation",
        "code": "// Express Routing: The res.format() Method for Content Negotiation\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Using router.use() vs app.use() Scoping Rules",
    "question": "What is the scoping difference between router.use() and app.use()?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "scoping",
      "router-use",
      "middleware"
    ],
    "interviewAnswer": "app.use() applies middleware globally across the entire application (or all routes under its mount prefix). router.use() scopes middleware strictly to the routes registered on that specific router instance, executing only when a route within that router matches.",
    "answer": "This allows attaching authentication middleware to a `protectedRouter` via `protectedRouter.use(authMiddleware)` without affecting public routes.",
    "explanation": "This allows attaching authentication middleware to a `protectedRouter` via `protectedRouter.use(authMiddleware)` without affecting public routes.",
    "importantPoints": [
      "router.use() is strictly scoped to routes within that router.",
      "app.use() executes globally or for all sub-apps.",
      "Enables modular middleware isolation."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Using router.use() vs app.use() Scoping Rules",
        "code": "// Express Routing: Using router.use() vs app.use() Scoping Rules\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Circular Router Dependencies in Complex Codebases",
    "question": "How do circular require/import statements between router files cause runtime errors, and how are they avoided?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "circular-dependencies",
      "modules",
      "architecture"
    ],
    "interviewAnswer": "When Router A requires Router B, and Router B requires Router A (common when nesting routes across modules), Node returns an empty object {} for the incomplete module, causing \"TypeError: router.use() requires a middleware function but got a Object\". Avoid this by separating route definitions from router mounting in a centralized router index file.",
    "answer": "Create a dedicated `routes/index.js` that imports all individual route modules and mounts them onto the main Express app, preventing horizontal cross-requires.",
    "explanation": "Create a dedicated `routes/index.js` that imports all individual route modules and mounts them onto the main Express app, preventing horizontal cross-requires.",
    "importantPoints": [
      "Circular requires return empty objects {}, crashing router mounting.",
      "Centralize router mounting in a single index aggregator.",
      "Keep routers decoupled from sibling routers."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Circular Router Dependencies in Complex Codebases",
        "code": "// Express Routing: Circular Router Dependencies in Complex Codebases\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Testing Express Routes in Isolation with Supertest",
    "question": "How does Supertest execute HTTP tests against an Express application without binding to a physical network port?",
    "difficulty": "easy",
    "questionType": "Testing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "testing",
      "supertest",
      "integration-tests"
    ],
    "interviewAnswer": "Supertest passes the Express app directly into http.createServer(app) and leverages Node's internal stream handling or ephemeral ports, firing HTTP requests in-memory without calling app.listen() on a fixed port. This enables blazing-fast parallel test execution with zero port collision.",
    "answer": "Syntax:\n```javascript\nconst request = require(\"supertest\");\nconst app = createApp();\nconst res = await request(app).get(\"/api/health\");\nexpect(res.status).toBe(200);\n```",
    "explanation": "Syntax:\n```javascript\nconst request = require(\"supertest\");\nconst app = createApp();\nconst res = await request(app).get(\"/api/health\");\nexpect(res.status).toBe(200);\n```",
    "importantPoints": [
      "Executes tests in-memory without fixed port binding.",
      "Prevents EADDRINUSE errors during parallel testing.",
      "Simulates complete request/response lifecycle accurately."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Testing Express Routes in Isolation with Supertest",
        "code": "// Express Routing: Testing Express Routes in Isolation with Supertest\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Case-Insensitive Route Parameters",
    "question": "How can you handle route parameters in a case-insensitive manner without affecting URL casing?",
    "difficulty": "easy",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "case-insensitive",
      "normalization"
    ],
    "interviewAnswer": "Normalize the parameter explicitly inside middleware or router.param(): req.params.username = req.params.username.toLowerCase(). This preserves standard URL matching while ensuring database queries search for consistent lowercase keys.",
    "answer": "Avoid relying on database-level regex lookups which bypass indexes; normalizing route params in middleware maintains B-tree index efficiency.",
    "explanation": "Avoid relying on database-level regex lookups which bypass indexes; normalizing route params in middleware maintains B-tree index efficiency.",
    "importantPoints": [
      "Normalize parameters in middleware: req.params.id.toLowerCase().",
      "Maintains B-tree index efficiency in database queries.",
      "Prevents duplicate records with varying letter casing."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Case-Insensitive Route Parameters",
        "code": "// Express Routing: Case-Insensitive Route Parameters\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Trailing Slash Redirection Patterns",
    "question": "How do you enforce canonical URL redirection for trailing slashes across all Express routes?",
    "difficulty": "medium",
    "questionType": "SEO",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "trailing-slash",
      "seo",
      "canonical"
    ],
    "interviewAnswer": "Mount a top-level middleware that inspects req.path: if req.path.length > 1 and req.path.endsWith(\"/\"), issue a 301 permanent redirect to the sliced path without the trailing slash (req.path.slice(0, -1) + query string). This avoids duplicate content penalties in search engines.",
    "answer": "Example:\n`app.use((req, res, next) => { if (req.path.length > 1 && req.path.endsWith(\"/\")) { res.redirect(301, req.path.slice(0, -1) + (req.url.slice(req.path.length))); } else next(); });`",
    "explanation": "Example:\n`app.use((req, res, next) => { if (req.path.length > 1 && req.path.endsWith(\"/\")) { res.redirect(301, req.path.slice(0, -1) + (req.url.slice(req.path.length))); } else next(); });`",
    "importantPoints": [
      "Enforces canonical URL structure for SEO.",
      "Uses 301 Moved Permanently.",
      "Must preserve query strings during redirection."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Trailing Slash Redirection Patterns",
        "code": "// Express Routing: Trailing Slash Redirection Patterns\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Wildcard Route Handling in Express 4 vs Express 5",
    "question": "How did wildcard route definitions change between Express 4 and Express 5?",
    "difficulty": "hard",
    "questionType": "Breaking Changes",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "wildcards",
      "express-5",
      "path-to-regexp"
    ],
    "interviewAnswer": "In Express 4, app.get(\"*\", handler) or app.get(\"/files/*\", handler) worked seamlessly. In Express 5 (using path-to-regexp v6+), raw wildcards without parameter names throw a TypeError: \"Unexpected *\". You must specify a named parameter wildcard: app.get(\"/files/*splat\", handler) or app.get(\"/*path\", handler).",
    "answer": "Captured wildcard paths are accessed via `req.params.splat` or `req.params.path` instead of numeric array indices `req.params[0]`.",
    "explanation": "Captured wildcard paths are accessed via `req.params.splat` or `req.params.path` instead of numeric array indices `req.params[0]`.",
    "importantPoints": [
      "Express 5 requires named wildcard parameters (/*path).",
      "Raw * throws syntax errors in updated path-to-regexp.",
      "Access captured wildcard via named param instead of req.params[0]."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Wildcard Route Handling in Express 4 vs Express 5",
        "code": "// Express Routing: Wildcard Route Handling in Express 4 vs Express 5\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Route Parameter Type Casting and Coercion",
    "question": "Why are all req.params strings by default, and how should type coercion be implemented?",
    "difficulty": "easy",
    "questionType": "Data Quality",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "type-coercion",
      "params",
      "validation"
    ],
    "interviewAnswer": "HTTP URLs are plain text streams; therefore, the router parser populates all req.params values as string primitives. Using req.params.id in numeric comparisons (id === 123) will fail. Coerce and validate using Number(req.params.id) or schema validators (Zod/Joi) that support automatic coercion (z.coerce.number()).",
    "answer": "Never assume `req.params.page` is a number; passing raw string params into database queries can cause MongoDB type mismatch bugs or SQL errors.",
    "explanation": "Never assume `req.params.page` is a number; passing raw string params into database queries can cause MongoDB type mismatch bugs or SQL errors.",
    "importantPoints": [
      "All route params are strings by default.",
      "Use schema libraries with coercion (z.coerce.number()).",
      "Prevent strict equality (===) bugs between strings and numbers."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Route Parameter Type Casting and Coercion",
        "code": "// Express Routing: Route Parameter Type Casting and Coercion\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Defining Global Route Prefixes in Express APIs",
    "question": "How do you establish a clean global prefix (like /api/v1) for all application routes?",
    "difficulty": "easy",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "global-prefix",
      "api-versioning"
    ],
    "interviewAnswer": "Create a root apiRouter, attach all sub-routers (users, orders, products) to apiRouter, and mount apiRouter onto the main app once: app.use(\"/api/v1\", apiRouter). This allows changing the global version prefix in exactly one line of code.",
    "answer": "This prevents hardcoding `/api/v1` in dozens of individual route files and makes branching for `/api/v2` trivial.",
    "explanation": "This prevents hardcoding `/api/v1` in dozens of individual route files and makes branching for `/api/v2` trivial.",
    "importantPoints": [
      "Mount all feature routers onto a root API router.",
      "Mount root API router to app with version prefix: app.use(\"/api/v1\", apiRouter).",
      "Enables easy version upgrades without touching route files."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Defining Global Route Prefixes in Express APIs",
        "code": "// Express Routing: Defining Global Route Prefixes in Express APIs\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Preventing Re-entrancy and Multiple Handler Matches with next()",
    "question": "What occurs when next() is invoked after a response has already been sent inside a route handler?",
    "difficulty": "medium",
    "questionType": "Debugging",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "next",
      "headers-sent",
      "re-entrancy"
    ],
    "interviewAnswer": "If next() is invoked after sending a response, execution proceeds to the next matching route or middleware. When that subsequent handler attempts to send headers or a response (res.json), Node throws Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client. Always use return res.json() to terminate execution immediately.",
    "answer": "Always guard handler exits with `return` statements: `return res.status(400).json(...)`.",
    "explanation": "Always guard handler exits with `return` statements: `return res.status(400).json(...)`.",
    "importantPoints": [
      "Calling next() after res.send causes ERR_HTTP_HEADERS_SENT.",
      "Always use return res.json() to prevent further execution.",
      "Common beginner bug in conditional branching."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Preventing Re-entrancy and Multiple Handler Matches with next()",
        "code": "// Express Routing: Preventing Re-entrancy and Multiple Handler Matches with next()\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "The req.baseUrl Property in Mounted Routers",
    "question": "What is the purpose of req.baseUrl, and how does it differ from req.path and req.originalUrl?",
    "difficulty": "medium",
    "questionType": "Routing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "req-baseUrl",
      "req-path",
      "originalUrl"
    ],
    "interviewAnswer": "When a router is mounted via app.use(\"/api/v1/users\", userRouter), inside the userRouter: req.baseUrl is \"/api/v1/users\" (the mount path); req.path is the remaining path within the router (e.g. \"/profile\"); req.originalUrl is the full unmodified URL string (\"/api/v1/users/profile?tab=active\").",
    "answer": "`req.baseUrl` is essential for middleware that needs to know where the current sub-router was mounted without hardcoding paths.",
    "explanation": "`req.baseUrl` is essential for middleware that needs to know where the current sub-router was mounted without hardcoding paths.",
    "importantPoints": [
      "req.baseUrl contains the mounted base URL.",
      "req.path contains the router-relative path.",
      "req.originalUrl preserves the full raw URL with query string."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The req.baseUrl Property in Mounted Routers",
        "code": "// Express Routing: The req.baseUrl Property in Mounted Routers\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Dynamic Route Registration and Reloading at Runtime",
    "question": "Can routes be added or removed dynamically at runtime in an active Express server?",
    "difficulty": "hard",
    "questionType": "Internals",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "dynamic-routes",
      "hot-reload",
      "router-stack"
    ],
    "interviewAnswer": "Yes, because an Express router maintains an internal array of layers in router.stack. Routes can be registered dynamically by calling router.get() at runtime, or an entire router can be swapped hot by wrapping it in a middleware: app.use((req, res, next) => dynamicRouter(req, res, next)). However, mutating router.stack directly is unrecommended due to internal API instability.",
    "answer": "Hot reloading routes in development without restarting Node is achieved by clearing `require.cache` and re-instantiating the router inside a middleware wrapper.",
    "explanation": "Hot reloading routes in development without restarting Node is achieved by clearing `require.cache` and re-instantiating the router inside a middleware wrapper.",
    "importantPoints": [
      "router.stack stores registered layer objects.",
      "Swapping routers inside middleware enables hot route reloading.",
      "Avoid direct manual mutations of router.stack."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Dynamic Route Registration and Reloading at Runtime",
        "code": "// Express Routing: Dynamic Route Registration and Reloading at Runtime\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Routing Best Practices: Controller-Service-Route Separation",
    "question": "How should route definitions, controller handlers, and business logic services be separated in professional Express codebases?",
    "difficulty": "easy",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "mvc",
      "controller",
      "service-layer",
      "separation-of-concerns"
    ],
    "interviewAnswer": "1) Routes (*.routes.js): Define only URL paths, HTTP verbs, and middleware chains; 2) Controllers (*.controller.js): Extract req.params/body, invoke service functions, and format HTTP responses; 3) Services (*.service.js): Contain pure business logic and database queries, completely independent of Express req and res objects.",
    "answer": "Keeping services decoupled from Express allows reusing business logic in CLI scripts, background workers, or migrating to other frameworks effortlessly.",
    "explanation": "Keeping services decoupled from Express allows reusing business logic in CLI scripts, background workers, or migrating to other frameworks effortlessly.",
    "importantPoints": [
      "Routes handle URL and middleware mapping.",
      "Controllers handle HTTP req/res coordination.",
      "Services handle pure business logic without Express dependencies."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Routing Best Practices: Controller-Service-Route Separation",
        "code": "// Express Routing: Routing Best Practices: Controller-Service-Route Separation\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "routing",
    "title": "Conclusion on Express Routing Mechanics",
    "question": "What is the core architectural principle that governs route resolution in Express?",
    "difficulty": "easy",
    "questionType": "Summary",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "routing",
      "summary",
      "architecture",
      "linear-pipeline"
    ],
    "interviewAnswer": "Express routing is a linear pipeline of regex-matched layers evaluated in strict registration order. There is no route weight, specificity score, or automatic tree sorting (unlike trie-based routers like Fastify). The first matching layer wins, and next() transfers control down the stack.",
    "answer": "Understanding this linear model is the key to mastering middleware ordering, route precedence, and error propagation in Express.",
    "explanation": "Understanding this linear model is the key to mastering middleware ordering, route precedence, and error propagation in Express.",
    "importantPoints": [
      "Linear pipeline evaluated in registration order.",
      "No automatic route weight or trie-based sorting.",
      "First match wins; next() advances to subsequent matches."
    ],
    "commonMistakes": [
      "Placing parameterized routes before static routes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Conclusion on Express Routing Mechanics",
        "code": "// Express Routing: Conclusion on Express Routing Mechanics\nconst express = require('express');\nconst router = express.Router();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
