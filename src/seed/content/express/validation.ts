import { SeedQuestion } from '../types';

export const validationQuestions: SeedQuestion[] = [
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Schema-Based Request Validation with Zod Middleware",
    "question": "How do you design a reusable Express validation middleware using Zod to validate req.body, req.query, and req.params?",
    "difficulty": "medium",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "zod",
      "schema-validation",
      "typescript",
      "middleware"
    ],
    "interviewAnswer": "Create a higher-order middleware validate(schema) that accepts a Zod schema defining body, query, and params. In the middleware, execute schema.safeParse({ body: req.body, query: req.query, params: req.params }). If parsing fails, return a 400 Bad Request with formatted Zod issues. If successful, overwrite req with the sanitized/coerced data and call next().",
    "answer": "Reusable Zod Validation Middleware Pattern:\n```typescript\nimport { Request, Response, NextFunction } from \"express\";\nimport { AnyZodObject, ZodError } from \"zod\";\n\nexport const validate = (schema: AnyZodObject) =>\n  async (req: Request, res: Response, next: NextFunction) => {\n    try {\n      const parsed = await schema.parseAsync({\n        body: req.body,\n        query: req.query,\n        params: req.params,\n      });\n      // Overwrite with parsed & coerced values:\n      req.body = parsed.body;\n      req.query = parsed.query;\n      req.params = parsed.params;\n      return next();\n    } catch (error) {\n      if (error instanceof ZodError) {\n        return res.status(400).json({\n          success: false,\n          message: \"Validation error\",\n          errors: error.errors.map(e => ({ field: e.path.join(\".\"), message: e.message }))\n        });\n      }\n      return next(error);\n    }\n  };\n```",
    "explanation": "Zod safeParse or parseAsync strips unknown properties if strict mode is used and automatically coerces types (e.g. z.coerce.number() on query strings).",
    "importantPoints": [
      "Higher-order middleware encapsulates validation logic.",
      "Validates body, query, and params simultaneously.",
      "Formats ZodError into client-friendly error structures.",
      "Overwrites req with parsed, validated, and coerced values."
    ],
    "commonMistakes": [
      "Validating only req.body and neglecting query parameters and route params.",
      "Passing unvalidated user data directly to service functions."
    ],
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Applying Zod Validation to Express Routes",
        "code": "import { z } from 'zod';\n\nconst createUserSchema = z.object({\n  body: z.object({\n    email: z.string().email(),\n    password: z.string().min(8),\n    age: z.number().int().positive().optional()\n  })\n});\n\nrouter.post('/users', validate(createUserSchema), (req, res) => {\n  // req.body is guaranteed to match schema!\n  res.status(201).json({ status: 'created' });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "express-validator: Chain Validation and Sanitization",
    "question": "How does express-validator provide chainable validation and sanitization in Express route definitions?",
    "difficulty": "medium",
    "questionType": "Practical",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "expressjs",
      "validation",
      "express-validator",
      "sanitization",
      "chains"
    ],
    "interviewAnswer": "express-validator uses validator.js to provide chainable validators (body(\"email\").isEmail().normalizeEmail(), param(\"id\").isMongoId()). Handlers validate and sanitize input, and a final middleware checks validationResult(req). If validationResult(req).isEmpty() is false, it returns 400 with the error array; otherwise, it calls next().",
    "answer": "express-validator combines validation (checking validity) with sanitization (e.g. `trim()`, `escape()`, `normalizeEmail()`).\n\nExample:\n```javascript\nconst { body, validationResult } = require(\"express-validator\");\n\nrouter.post(\"/login\", [\n  body(\"email\").isEmail().normalizeEmail(),\n  body(\"password\").isLength({ min: 6 })\n], (req, res) => {\n  const errors = validationResult(req);\n  if (!errors.isEmpty()) {\n    return res.status(400).json({ errors: errors.array() });\n  }\n  // Proceed with login...\n});\n```",
    "explanation": "A common best practice is wrapping the validationResult check into a single reusable middleware to avoid repeating the if (!errors.isEmpty()) check on every route.",
    "importantPoints": [
      "Provides chainable validators for body, param, query, header.",
      "Performs sanitization: trim(), escape(), toInt().",
      "validationResult(req) aggregates validation errors.",
      "Centralize error formatting in a reusable middleware."
    ],
    "commonMistakes": [
      "Declaring validation chains but forgetting to check validationResult(req), allowing invalid requests to proceed.",
      "Confusing sanitization with authorization checks."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Reusable express-validator Guard",
        "code": "const { validationResult } = require('express-validator');\n\nconst validateResult = (req, res, next) => {\n  const errors = validationResult(req);\n  if (!errors.isEmpty()) {\n    return res.status(400).json({ success: false, errors: errors.array() });\n  }\n  next();\n};\n\n// Clean route definition:\nrouter.post('/register', [\n  body('email').isEmail(),\n  body('name').trim().notEmpty(),\n  validateResult\n], handleRegister);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Input Sanitization vs Validation: XSS and HTML Escaping",
    "question": "What is the operational distinction between input validation and input sanitization in an Express API?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "expressjs",
      "validation",
      "sanitization",
      "xss",
      "security"
    ],
    "interviewAnswer": "Validation rejects invalid data with an error (e.g. rejecting a request if email format is invalid or age < 18). Sanitization modifies and cleans incoming data to make it safe (e.g. trimming whitespace, stripping script tags, escaping HTML entities, lowercasing emails). Professional APIs use validation to enforce contracts and sanitization to prevent XSS and storage anomalies.",
    "answer": "Validation asks: \"Does this input conform to our strict schema contract?\" If not, reject with 400.\nSanitization asks: \"Can we safely clean or normalize this data?\" e.g., turning `\"  user@example.com  \"` into `\"user@example.com\"`.",
    "importantPoints": [
      "Validation rejects invalid payloads with 400 Bad Request.",
      "Sanitization cleans and normalizes data (trim, lowercase, HTML escape).",
      "Both must be performed before passing data to databases.",
      "Never sanitize passwords (it can alter characters user intended)."
    ],
    "commonMistakes": [
      "Sanitizing passwords (e.g. trimming or escaping characters user typed).",
      "Relying solely on sanitization instead of strict schema validation."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Validation vs Sanitization Example",
        "code": "// Validation: Rejects with 400 if condition fails\nif (!validator.isEmail(req.body.email)) {\n  return res.status(400).json({ error: 'Invalid email' });\n}\n\n// Sanitization: Cleans and normalizes valid input\nreq.body.email = validator.normalizeEmail(req.body.email.trim());\nreq.body.bio = validator.escape(req.body.bio.trim());"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Joi vs Zod for Express Request Validation",
    "question": "How do Joi and Zod compare for validating requests in modern Node.js and TypeScript Express applications?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "joi",
      "zod",
      "typescript"
    ],
    "interviewAnswer": "Joi is a mature, battle-tested validation library for JavaScript with rich validation rules. Zod is TypeScript-first, providing automatic static TypeScript type inference directly from validation schemas (z.infer<typeof schema>), eliminating duplicate interface definitions. For modern TypeScript codebases, Zod is widely favored.",
    "answer": "With Zod, defining a schema simultaneously gives you runtime validation and static compile-time types for `req.body`. Joi requires separate `@types/joi` and manual TypeScript interface declarations.",
    "explanation": "With Zod, defining a schema simultaneously gives you runtime validation and static compile-time types for `req.body`. Joi requires separate `@types/joi` and manual TypeScript interface declarations.",
    "importantPoints": [
      "Zod provides automatic TypeScript type inference.",
      "Joi is widely used in legacy JavaScript codebases.",
      "Zod has zero dependencies and smaller bundle size."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Joi vs Zod for Express Request Validation",
        "code": "// Express Validation: Joi vs Zod for Express Request Validation\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Query String Type Coercion Gotchas in Express",
    "question": "Why do boolean and numeric query parameters create bugs in Express if not coerced during validation?",
    "difficulty": "easy",
    "questionType": "Debugging",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "query-strings",
      "type-coercion",
      "boolean"
    ],
    "interviewAnswer": "All query parameters in req.query are strings (or arrays). In JavaScript, the non-empty string \"false\" is truthy (Boolean(\"false\") === true). If code checks if (req.query.isActive) { ... }, it evaluates to true even when the client passed ?isActive=false. Schema validation must explicitly coerce strings to real booleans and numbers.",
    "answer": "In Zod, use `z.coerce.boolean()` or custom transform: `z.enum([\"true\", \"false\"]).transform(v => v === \"true\")`.",
    "explanation": "In Zod, use `z.coerce.boolean()` or custom transform: `z.enum([\"true\", \"false\"]).transform(v => v === \"true\")`.",
    "importantPoints": [
      "All query parameters are strings by default.",
      "Boolean(\"false\") evaluates to true in JavaScript.",
      "Always use schema coercion for boolean and numeric query params."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Query String Type Coercion Gotchas in Express",
        "code": "// Express Validation: Query String Type Coercion Gotchas in Express\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Validating MongoDB ObjectIds in Route Parameters",
    "question": "How should you validate that a route parameter is a valid MongoDB ObjectId before querying the database?",
    "difficulty": "easy",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "mongodb",
      "objectid",
      "mongoose"
    ],
    "interviewAnswer": "Use mongoose.Types.ObjectId.isValid(req.params.id) or a Zod regex check: z.string().regex(/^[0-9a-fA-F]{24}$/, \"Invalid ObjectId\"). Reject invalid IDs with 400 Bad Request before hitting the database to prevent Mongoose CastError exceptions.",
    "answer": "Without validation, passing an invalid ID like `/users/abc` triggers an unhandled `CastError` in Mongoose that responds with 500 Internal Server Error instead of 400 Bad Request.",
    "explanation": "Without validation, passing an invalid ID like `/users/abc` triggers an unhandled `CastError` in Mongoose that responds with 500 Internal Server Error instead of 400 Bad Request.",
    "importantPoints": [
      "Validate 24-character hexadecimal ObjectId format.",
      "Prevents Mongoose CastError 500 crashes.",
      "Respond with 400 Bad Request for malformed IDs."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Validating MongoDB ObjectIds in Route Parameters",
        "code": "// Express Validation: Validating MongoDB ObjectIds in Route Parameters\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Strict Schema Validation: Stripping Unknown Request Fields",
    "question": "Why should validation schemas strip or reject unknown fields in req.body (Mass Assignment Prevention)?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "mass-assignment",
      "unknown-keys",
      "security"
    ],
    "interviewAnswer": "If validation schemas allow arbitrary extra keys, attackers can exploit Mass Assignment vulnerabilities by submitting fields like { role: \"admin\", isVerified: true, balance: 10000 }. If application code passes req.body directly to User.create(req.body), the attacker elevates their privileges. Schemas must strip or reject unknown properties.",
    "answer": "In Zod, use `.strict()` to reject unknown fields or let default `.parse()` strip unknown properties from the output object.",
    "explanation": "In Zod, use `.strict()` to reject unknown fields or let default `.parse()` strip unknown properties from the output object.",
    "importantPoints": [
      "Protects against Mass Assignment vulnerabilities.",
      "Strips un-declared fields before database insertion.",
      "Never pass raw unvalidated req.body directly to ORM create/update methods."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Strict Schema Validation: Stripping Unknown Request Fields",
        "code": "// Express Validation: Strict Schema Validation: Stripping Unknown Request Fields\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Validating Nested Arrays and Complex Object Payloads",
    "question": "How do validation schemas validate deeply nested arrays of objects (e.g. order items)?",
    "difficulty": "medium",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "nested-objects",
      "arrays",
      "schemas"
    ],
    "interviewAnswer": "In Zod, compose schemas: z.object({ items: z.array(z.object({ productId: z.string(), quantity: z.number().int().positive(), price: z.number().positive() })).nonempty() }). The schema validates every element in the array and reports specific path-indexed errors like \"items.2.quantity: Expected positive number\".",
    "answer": "Composing schemas enables validating complex enterprise payloads (e.g. bulk orders, invoice lines) with pinpoint error messages.",
    "explanation": "Composing schemas enables validating complex enterprise payloads (e.g. bulk orders, invoice lines) with pinpoint error messages.",
    "importantPoints": [
      "Compose nested z.object and z.array schemas.",
      "Enforce array constraints (.nonempty(), .min(1)).",
      "Provides indexed error paths (items.0.price)."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Validating Nested Arrays and Complex Object Payloads",
        "code": "// Express Validation: Validating Nested Arrays and Complex Object Payloads\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Handling File Upload Validation: Size, MIME Type, and Extensions",
    "question": "How should file uploads be validated in Express when using Multer?",
    "difficulty": "medium",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "multer",
      "file-uploads",
      "mime-types"
    ],
    "interviewAnswer": "Configure Multer with: 1) limits: { fileSize: 5 * 1024 * 1024 } to reject oversized files; 2) fileFilter: (req, file, cb) => { ... } to validate file.mimetype against an allowed whitelist (image/png, image/jpeg); 3) Use a magic-number detection library (like file-type) to inspect actual file bytes and prevent malicious files disguised with fake extensions.",
    "answer": "Attackers frequently rename `.exe` files to `.png`. Relying solely on `file.originalname` is insecure; always check `file.mimetype` and inspect file magic numbers.",
    "explanation": "Attackers frequently rename `.exe` files to `.png`. Relying solely on `file.originalname` is insecure; always check `file.mimetype` and inspect file magic numbers.",
    "importantPoints": [
      "Set limits.fileSize in Multer config.",
      "fileFilter checks allowed MIME types.",
      "Inspect binary magic bytes to prevent spoofed extensions."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling File Upload Validation: Size, MIME Type, and Extensions",
        "code": "// Express Validation: Handling File Upload Validation: Size, MIME Type, and Extensions\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Custom Validation Rules and Asynchronous Database Checks",
    "question": "How do you implement asynchronous custom validation rules (e.g. verifying email uniqueness in the database)?",
    "difficulty": "medium",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "async-validation",
      "custom-rules",
      "refine"
    ],
    "interviewAnswer": "In Zod, use .refine() or .superRefine() with an async function: z.string().email().refine(async (email) => { const exists = await User.exists({ email }); return !exists; }, { message: \"Email already in use\" }). In express-validator, use .custom(async (email) => { ... }).",
    "answer": "Async validation executes database checks during the validation pipeline before route handlers are entered.",
    "explanation": "Async validation executes database checks during the validation pipeline before route handlers are entered.",
    "importantPoints": [
      "Use async .refine() in Zod or .custom() in express-validator.",
      "Enables checking database uniqueness during validation phase.",
      "Returns custom error messages upon check failure."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Custom Validation Rules and Asynchronous Database Checks",
        "code": "// Express Validation: Custom Validation Rules and Asynchronous Database Checks\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Standardizing Validation Error Envelopes across APIs",
    "question": "How should validation error responses be formatted to provide consistent feedback to frontend clients?",
    "difficulty": "easy",
    "questionType": "API Design",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "error-envelope",
      "rfc7807",
      "consistency"
    ],
    "interviewAnswer": "Return status 400 Bad Request with a standardized envelope: { success: false, message: \"Validation Failed\", errors: [{ field: \"email\", message: \"Invalid email format\" }, { field: \"password\", message: \"Minimum 8 characters\" }] }. This consistency allows frontend form libraries (React Hook Form, Formik) to map server errors directly to input fields.",
    "answer": "Consistency prevents frontend client code from needing different parsing logic for different endpoints.",
    "explanation": "Consistency prevents frontend client code from needing different parsing logic for different endpoints.",
    "importantPoints": [
      "Return 400 Bad Request.",
      "Provide field-level error arrays with path and message.",
      "Enables frontend forms to highlight invalid fields directly."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Standardizing Validation Error Envelopes across APIs",
        "code": "// Express Validation: Standardizing Validation Error Envelopes across APIs\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Preventing NoSQL Injection via Validation and Sanitization",
    "question": "How does validating input types prevent NoSQL injection attacks in MongoDB/Mongoose?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "nosql-injection",
      "security",
      "mongo-sanitize"
    ],
    "interviewAnswer": "If an attacker submits JSON with query operators: { \"username\": \"admin\", \"password\": { \"$ne\": null } }, MongoDB evaluates $ne, authenticating without the password. Validating that password is strictly a string (z.string()) or using mongo-sanitize (which strips keys starting with $) completely eliminates NoSQL injection attacks.",
    "answer": "NoSQL injection exploits loose types in req.body. Enforcing strict schema types ensures query operators cannot enter query filters.",
    "explanation": "NoSQL injection exploits loose types in req.body. Enforcing strict schema types ensures query operators cannot enter query filters.",
    "importantPoints": [
      "Enforce strict primitive types (z.string()) to reject object injection.",
      "Use express-mongo-sanitize to strip $ and . operators.",
      "Never pass raw unvalidated req.body directly to database filters."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Preventing NoSQL Injection via Validation and Sanitization",
        "code": "// Express Validation: Preventing NoSQL Injection via Validation and Sanitization\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Conditional and Dependent Validation Rules",
    "question": "How do validation schemas handle conditional rules (e.g. passportNumber is required ONLY IF country is not US)?",
    "difficulty": "medium",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "conditional-validation",
      "zod",
      "superRefine"
    ],
    "interviewAnswer": "In Zod, use .superRefine((data, ctx) => { if (data.country !== \"US\" && !data.passportNumber) { ctx.addIssue({ code: z.ZodIssueCode.custom, message: \"Passport number required for international citizens\", path: [\"passportNumber\"] }); } }).",
    "answer": "Cross-field validation rules ensure interrelated fields are validated together accurately.",
    "explanation": "Cross-field validation rules ensure interrelated fields are validated together accurately.",
    "importantPoints": [
      "superRefine evaluates multiple fields together.",
      "ctx.addIssue attaches error to the specific dependent field.",
      "Essential for checkout and registration flows."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Conditional and Dependent Validation Rules",
        "code": "// Express Validation: Conditional and Dependent Validation Rules\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Date and Timestamp Validation Patterns",
    "question": "How should ISO 8601 timestamps and calendar dates be validated and parsed in request schemas?",
    "difficulty": "easy",
    "questionType": "Data Quality",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "dates",
      "iso8601",
      "coercion"
    ],
    "interviewAnswer": "Use z.string().datetime() for strict ISO 8601 strings (e.g. 2026-09-10T00:00:00Z) or z.coerce.date() to automatically parse valid date strings into JavaScript Date instances. Validate logical boundaries (e.g. birthDate must be in the past: .max(new Date())).",
    "answer": "Prevents invalid dates (`new Date(\"invalid\")` resulting in `NaN`) from entering database layers.",
    "explanation": "Prevents invalid dates (`new Date(\"invalid\")` resulting in `NaN`) from entering database layers.",
    "importantPoints": [
      "Validate ISO 8601 format with z.string().datetime().",
      "z.coerce.date() converts valid string into Date object.",
      "Enforce min/max logical date boundaries."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Date and Timestamp Validation Patterns",
        "code": "// Express Validation: Date and Timestamp Validation Patterns\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Numeric Range and Integer Validation",
    "question": "Why is it critical to distinguish integer validation from general number validation in pagination and IDs?",
    "difficulty": "easy",
    "questionType": "Data Quality",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "integers",
      "numbers",
      "pagination"
    ],
    "interviewAnswer": "If pagination parameters (page, limit) accept floating-point numbers (e.g. page=1.5 or limit=NaN), database queries may crash or behave unpredictably. Always enforce integer constraints: z.coerce.number().int().positive().min(1).max(100).",
    "answer": "Bounding limits (e.g. max 100) also prevents users from querying `limit=1000000` to overload server memory.",
    "explanation": "Bounding limits (e.g. max 100) also prevents users from querying `limit=1000000` to overload server memory.",
    "importantPoints": [
      "Enforce .int() for IDs and pagination numbers.",
      "Bound limit parameters with .max(100) to prevent DoS.",
      "Use .positive() to prevent negative offsets."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Numeric Range and Integer Validation",
        "code": "// Express Validation: Numeric Range and Integer Validation\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Validating Request Headers (Authorization, API Keys)",
    "question": "How can request headers be validated using schema validation middleware?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "headers",
      "authorization",
      "api-key"
    ],
    "interviewAnswer": "Include headers in the validation schema: z.object({ headers: z.object({ authorization: z.string().regex(/^Bearer /, \"Bearer token required\"), \"x-api-key\": z.string().uuid().optional() }).passthrough() }). Note: HTTP header keys are lowercased by Node.js.",
    "answer": "Using `.passthrough()` ensures standard HTTP headers (like user-agent and accept) are not stripped or rejected.",
    "explanation": "Using `.passthrough()` ensures standard HTTP headers (like user-agent and accept) are not stripped or rejected.",
    "importantPoints": [
      "Node.js lowercases all incoming header names.",
      "Use .passthrough() so standard headers are retained.",
      "Validate Authorization format (e.g. Bearer JWT)."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Validating Request Headers (Authorization, API Keys)",
        "code": "// Express Validation: Validating Request Headers (Authorization, API Keys)\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Enum Validation for Status and Category Fields",
    "question": "How does enum validation protect state machines and categorical database columns?",
    "difficulty": "easy",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "enums",
      "state-machine",
      "zod"
    ],
    "interviewAnswer": "Use z.enum([\"PENDING\", \"PROCESSING\", \"COMPLETED\", \"CANCELLED\"]) or TypeScript enum mappings. If a client submits status: \"DELETED\", the validator rejects the request immediately with allowed enum options, preventing invalid state transitions.",
    "answer": "Ensures database categorical fields remain strictly consistent with application domain models.",
    "explanation": "Ensures database categorical fields remain strictly consistent with application domain models.",
    "importantPoints": [
      "z.enum restricts input to a predefined list of string constants.",
      "Rejects invalid state transitions at the API perimeter.",
      "Synchronizes with TypeScript union types automatically."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Enum Validation for Status and Category Fields",
        "code": "// Express Validation: Enum Validation for Status and Category Fields\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Payload Size Limits: Express vs Reverse Proxy Validation",
    "question": "Why should payload size limits be enforced at BOTH the reverse proxy (Nginx) and Express layers?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "payload-limits",
      "nginx",
      "client_max_body_size",
      "dos"
    ],
    "interviewAnswer": "Nginx client_max_body_size terminates oversized uploads at the network edge before bytes reach the Node.js process, saving CPU and server bandwidth. Express express.json({ limit: \"1mb\" }) acts as defense-in-depth in case the proxy is misconfigured or bypassed internally.",
    "answer": "If only Express enforces the limit, Node.js must buffer multi-megabyte streams before rejecting them, which consumes event loop time and RAM.",
    "explanation": "If only Express enforces the limit, Node.js must buffer multi-megabyte streams before rejecting them, which consumes event loop time and RAM.",
    "importantPoints": [
      "Nginx client_max_body_size rejects large requests at the network perimeter.",
      "Express limit option provides defense-in-depth.",
      "Prevents memory exhaustion attacks on Node.js."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Payload Size Limits: Express vs Reverse Proxy Validation",
        "code": "// Express Validation: Payload Size Limits: Express vs Reverse Proxy Validation\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Sanitizing Output Responses to Prevent Information Disclosure",
    "question": "Why is response schema validation (or output serialization) as important as input validation?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "output-sanitization",
      "data-leakage",
      "serialization"
    ],
    "interviewAnswer": "Output serialization (e.g. UserResponseSchema.parse(user)) strips internal properties (passwordHash, resetTokens, internalNotes) before sending JSON to the client. This prevents accidental data leakage when developers return raw database documents (res.json(user)).",
    "answer": "In fast-paced teams, adding a new sensitive column to a user table can accidentally expose it to API consumers unless output schemas whitelist allowed fields.",
    "explanation": "In fast-paced teams, adding a new sensitive column to a user table can accidentally expose it to API consumers unless output schemas whitelist allowed fields.",
    "importantPoints": [
      "Strips internal/sensitive fields before sending responses.",
      "Prevents accidental data leakage of passwords and tokens.",
      "Enforces API response contracts across versions."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Sanitizing Output Responses to Prevent Information Disclosure",
        "code": "// Express Validation: Sanitizing Output Responses to Prevent Information Disclosure\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "validation",
    "title": "Summary: The Perimeter Defense Model in Express APIs",
    "question": "What is the Perimeter Defense principle in Express request validation architecture?",
    "difficulty": "easy",
    "questionType": "Summary",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "validation",
      "perimeter-defense",
      "architecture",
      "best-practices"
    ],
    "interviewAnswer": "The Perimeter Defense principle dictates that all incoming data (body, query, params, headers) must be strictly validated, coerced, and sanitized at the very entrance of the application (middleware perimeter) before reaching controllers or services. Downstream business logic can then trust that all variables are valid and correctly typed.",
    "answer": "Controllers and services should never have to ask \"Is this email valid?\"—the validation perimeter guarantees correctness.",
    "explanation": "Controllers and services should never have to ask \"Is this email valid?\"—the validation perimeter guarantees correctness.",
    "importantPoints": [
      "Validate at the API entrance before controllers execute.",
      "Services operate exclusively on trusted, validated data.",
      "Eliminates redundant defensive checks throughout business logic."
    ],
    "commonMistakes": [
      "Relying on client-side validation alone or forgetting query coercion."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Summary: The Perimeter Defense Model in Express APIs",
        "code": "// Express Validation: Summary: The Perimeter Defense Model in Express APIs\nconst { z } = require('zod');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
