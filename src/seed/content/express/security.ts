import { SeedQuestion } from '../types';

export const securityQuestions: SeedQuestion[] = [
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Scenario: Protecting an Express Endpoint Being Abused with Thousands of Requests",
    "question": "One endpoint is being abused with thousands of requests. How would you protect it?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "rate-limiting",
      "abuse-prevention",
      "redis",
      "cloudflare"
    ],
    "interviewAnswer": "I would execute an immediate 4-tier mitigation: 1) Edge Defense: Block or challenge abusive traffic immediately at Cloudflare/WAF using IP rate limiting or managed challenges (Turnstile); 2) Endpoint-Specific Rate Limiting: Apply a strict Redis-backed sliding window rate limiter directly to the abused route in Express (e.g., 5 requests per minute for login/reset endpoints); 3) Proof of Work / CAPTCHA: Require verification tokens (hCaptcha/Cloudflare Turnstile) before processing the payload; 4) Behavioral Throttling & Account Locking: If abusing authenticated accounts or specific keys, revoke or temporarily lock the abusive API keys/user IDs.",
    "answer": "Step-by-Step Incident Response & Protection:\n\n1. Immediate Route-Level Rate Limiting:\nMount strict rate limiting on the targeted endpoint using Redis:\n```typescript\nimport rateLimit from 'express-rate-limit';\nimport RedisStore from 'rate-limit-redis';\n\nconst strictAbuseLimiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 10, // Max 10 requests per 15 min per IP\n  standardHeaders: true,\n  legacyHeaders: false,\n  store: new RedisStore({ sendCommand: (...args) => redisClient.sendCommand(args) }),\n  message: { error: 'Too many requests on this endpoint. Please try again later.' }\n});\n\napp.post('/api/abused-endpoint', strictAbuseLimiter, handler);\n```\n\n2. Key-Based / User-Based Throttling:\nIf the abuser rotates IPs through botnets, IP rate limiting fails. Switch keyGenerator to `req.user.id` or a fingerprint (e.g. `req.body.email`):\n```typescript\nkeyGenerator: (req) => req.body.email || req.ip\n```\n\n3. Proof-of-Work / Turnstile Challenge:\nValidate a client challenge token from Cloudflare Turnstile or reCAPTCHA v3 before executing any business logic.\n\n4. WAF / Reverse Proxy Rules:\nOffload filtering to Cloudflare or AWS WAF so malicious requests never reach the Node.js event loop.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const limiter = rateLimit({ windowMs: 60 * 1000, max: 5, store: new RedisStore({ client: redis }) });\napp.post('/api/auth/reset-password', limiter, resetHandler);"
      }
    ],
    "importantPoints": [
      "Rate-limit sensitive endpoints (login, register, reset, payment) individually",
      "Use distributed Redis store rather than in-memory store",
      "Block abusive patterns at the edge reverse proxy / WAF"
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Helmet.js HTTP Security Headers Suite",
    "question": "What security headers does Helmet.js configure in Express, and what specific vulnerabilities do they prevent?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "helmet",
      "headers",
      "csp",
      "hsts"
    ],
    "interviewAnswer": "Helmet sets essential HTTP response headers by default: 1) Content-Security-Policy (XSS prevention); 2) Strict-Transport-Security (HSTS forces HTTPS); 3) X-Content-Type-Options: nosniff (stops MIME-type sniffing); 4) X-Frame-Options: SAMEORIGIN (clickjacking defense); 5) X-DNS-Prefetch-Control; 6) Referrer-Policy; 7) Removes X-Powered-By header.",
    "answer": "Key Helmet Headers & Vulnerabilities Mitigated:\n\n```typescript\nimport helmet from 'helmet';\napp.use(helmet());\n```\n\n- `Strict-Transport-Security` (HSTS): Prevents SSL-stripping and man-in-the-middle attacks by telling browsers to communicate only over HTTPS.\n- `X-Content-Type-Options: nosniff`: Prevents browsers from executing scripts disguised as images or text.\n- `X-Frame-Options: SAMEORIGIN`: Disallows embedding the app in an iframe, preventing clickjacking attacks.\n- `Content-Security-Policy`: Dictates approved sources of scripts, images, styles, and web workers.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "import helmet from 'helmet';\napp.use(helmet());"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "CORS Security and Origin Reflection Vulnerabilities",
    "question": "How should CORS be securely configured in Express, and why is reflecting the Origin header dangerous?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "cors",
      "origin-reflection",
      "preflight"
    ],
    "interviewAnswer": "Reflecting `req.headers.origin` directly into `Access-Control-Allow-Origin: req.headers.origin` with `credentials: true` completely bypasses the Same-Origin Policy, allowing any malicious website to read authenticated user data. CORS must validate origins against a strict whitelist array.",
    "answer": "Secure CORS Configuration:\n\n```typescript\nimport cors from 'cors';\n\nconst whitelist = ['https://app.example.com', 'https://admin.example.com'];\n\napp.use(cors({\n  origin: (origin, callback) => {\n    // Allow requests with no origin (mobile apps, server-to-server curl)\n    if (!origin || whitelist.includes(origin)) {\n      callback(null, true);\n    } else {\n      callback(new Error('Blocked by CORS policy'));\n    }\n  },\n  credentials: true,\n  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],\n  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],\n  maxAge: 86400 // Cache preflight OPTIONS responses for 24h\n}));\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const corsOptions = { origin: ['https://myapp.com'], credentials: true };\napp.use(cors(corsOptions));"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Cross-Site Scripting (XSS) Prevention in Express",
    "question": "How do you protect an Express application against Stored and Reflected Cross-Site Scripting (XSS) attacks?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "xss",
      "sanitization",
      "dompurify",
      "content-security-policy"
    ],
    "interviewAnswer": "XSS prevention requires defense-in-depth: 1) Strict Content-Security-Policy (CSP) blocking inline scripts; 2) Input sanitization using libraries like sanitize-html or DOMPurify before storing rich user content; 3) Proper context-aware output encoding in template engines (EJS/Pug escape HTML by default with <%= %>); 4) Setting httpOnly on authentication cookies so JavaScript cannot read session tokens.",
    "answer": "XSS Defense Mechanisms in Express:\n\n1. Cookie Defense: `httpOnly: true` prevents theft via `document.cookie`.\n2. Input Sanitization: Never trust raw HTML from `req.body`. Use `sanitize-html`:\n```typescript\nimport sanitizeHtml from 'sanitize-html';\nreq.body.bio = sanitizeHtml(req.body.bio, { allowedTags: ['b', 'i', 'em', 'strong', 'a'] });\n```\n3. Output Encoding: Never use `<%- rawContent %>` in EJS unless the content is strictly sanitized.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "import sanitizeHtml from 'sanitize-html';\nconst cleanHtml = sanitizeHtml(dirtyInput, { allowedTags: [] });"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Cross-Site Request Forgery (CSRF) Mitigation Strategies",
    "question": "What is Cross-Site Request Forgery (CSRF), and how do SameSite cookies and the Double Submit Cookie pattern protect Express apps?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "csrf",
      "samesite-cookies",
      "csurf",
      "double-submit"
    ],
    "interviewAnswer": "CSRF tricks a logged-in user's browser into executing unwanted actions on an authenticated site because browsers automatically attach cookies on cross-origin requests. Defense: 1) Modern browsers: Set `SameSite: Lax` or `Strict` on cookies; 2) Double Submit Cookie pattern / csurf: Client sends a CSRF token in an HTTP header (`X-CSRF-Token`) matching an encrypted cookie.",
    "answer": "CSRF Mitigation in Express:\n\n1. SameSite Cookie Attribute:\n```typescript\nres.cookie('session_id', token, {\n  httpOnly: true,\n  secure: true,\n  sameSite: 'lax' // Blocks cookies on cross-site state-changing POST/PUT/DELETE requests\n});\n```\n\n2. Double Submit Cookie / Synchronizer Token:\nFor high-security operations, verify `req.headers['x-csrf-token'] === req.cookies['csrf-token']`.\n\nNote: APIs using Authorization: Bearer <JWT> headers are naturally immune to CSRF because browsers do not automatically attach headers on cross-site requests.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "res.cookie('token', jwt, { httpOnly: true, secure: true, sameSite: 'lax' });"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "SQL and NoSQL Injection Prevention in Express",
    "question": "How do attackers perform NoSQL and SQL injection in Express applications, and how do you prevent them?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "sql-injection",
      "nosql-injection",
      "mongoose",
      "mongo-sanitize"
    ],
    "interviewAnswer": "In NoSQL (MongoDB), attackers send objects like `{\"username\": \"admin\", \"password\": {\"$gt\": \"\"}}` to bypass authentication. Prevent it using `express-mongo-sanitize` (which strips keys beginning with `$`) and strict schema validation with Zod. In SQL, always use parameterized queries or ORMs (Prisma, TypeORM) and never concatenate strings into SQL queries.",
    "answer": "NoSQL and SQL Injection Defense:\n\n1. express-mongo-sanitize:\n```typescript\nimport mongoSanitize from 'express-mongo-sanitize';\napp.use(mongoSanitize()); // Strips all keys containing $ or .\n```\n\n2. Schema Validation:\nEnsure `req.body.password` is strictly typed as a string using Zod (`z.string()`).\n\n3. Parameterized SQL:\n```typescript\n// VULNERABLE: await db.query(`SELECT * FROM users WHERE id = '${req.params.id}'`);\n// SECURE: await db.query('SELECT * FROM users WHERE id = $1', [req.params.id]);\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "import mongoSanitize from 'express-mongo-sanitize';\napp.use(mongoSanitize());"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Rate Limiting Algorithms in Redis (Token Bucket vs Sliding Window)",
    "question": "What are the trade-offs between Token Bucket and Sliding Window rate limiting algorithms in Express with Redis?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "rate-limiting",
      "token-bucket",
      "sliding-window",
      "redis"
    ],
    "interviewAnswer": "Fixed Window has a boundary burst problem (a client can send 2x the limit across window edges). Sliding Window Log (Redis sorted sets `ZADD`/`ZREMRANGEBYSCORE`) guarantees perfect precision by counting timestamps in the preceding period, but consumes higher memory. Sliding Window Counter / Token Bucket offers smooth rate control and burst handling with low O(1) Redis memory overhead.",
    "answer": "Redis Rate Limiting Comparison:\n\n1. Fixed Window: Simple `INCR` + `EXPIRE`. Flaw: Traffic spike at minute boundary.\n2. Sliding Window Log: Stores request timestamps in Redis Sorted Sets (`ZREMRANGEBYSCORE key 0 (now - window)`). Flaw: High memory for high traffic.\n3. Sliding Window Counter: Approximates sliding window using previous window count and current window count with linear interpolation. Minimal memory, highly accurate.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const limiter = rateLimit({ windowMs: 60000, max: 100, store: new RedisStore({ sendCommand: (...args) => redis.sendCommand(args) }) });"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "DDoS and Slowloris Attack Mitigation in Express",
    "question": "How do Slowloris attacks exploit Node.js/Express, and how do you configure timeouts to mitigate them?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "ddos",
      "slowloris",
      "timeouts",
      "server-config"
    ],
    "interviewAnswer": "Slowloris opens many connections and sends HTTP headers extremely slowly (e.g. 1 byte every 10 seconds), keeping sockets open until the Node.js server exhausts its file descriptors and refuses legitimate connections. Mitigate by setting `server.headersTimeout`, `server.requestTimeout`, `server.keepAliveTimeout`, and placing Express behind Nginx or AWS ALB.",
    "answer": "Mitigating Slowloris Attacks:\n\n1. Configure Native HTTP Server Timeouts:\n```typescript\nconst server = app.listen(3000);\nserver.headersTimeout = 10000; // 10s to complete HTTP headers\nserver.requestTimeout = 30000; // 30s to complete entire request body\nserver.keepAliveTimeout = 5000; // 5s idle keepalive socket timeout\n```\n\n2. Reverse Proxy Shielding:\nReverse proxies like Nginx buffer slow headers and slow bodies before dispatching complete requests to Node.js.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const server = app.listen(port);\nserver.headersTimeout = 10000;\nserver.requestTimeout = 30000;"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Server-Side Request Forgery (SSRF) Defense in Express",
    "question": "What is an SSRF attack, and how do you validate user-provided URLs when Express makes outbound HTTP requests?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "ssrf",
      "outbound-requests",
      "dns-rebinding",
      "ip-validation"
    ],
    "interviewAnswer": "SSRF occurs when an attacker tricks the server into making HTTP requests to internal, private resources (e.g. `http://169.254.169.254/latest/meta-data/` on AWS or `http://localhost:6379`). To defend: 1) Resolve hostname via DNS and check that the resolved IP does not belong to private/loopback ranges (`127.0.0.0/8`, `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`, `169.254.0.0/16`); 2) Whitelist allowed schemes (`http:`, `https:`); 3) Prevent DNS rebinding by pinning the validated IP.",
    "answer": "SSRF Defense in Outbound Requests:\n\n```typescript\nimport dns from 'dns/promises';\nimport ipRangeCheck from 'ip-range-check';\n\nconst PRIVATE_IP_RANGES = ['127.0.0.0/8', '10.0.0.0/8', '172.16.0.0/12', '192.168.0.0/16', '169.254.0.0/16'];\n\nexport async function validateSafeUrl(urlString: string): Promise<string> {\n  const parsed = new URL(urlString);\n  if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('Invalid protocol');\n\n  const lookup = await dns.lookup(parsed.hostname);\n  if (ipRangeCheck(lookup.address, PRIVATE_IP_RANGES)) {\n    throw new Error('Access to private/internal network addresses is prohibited');\n  }\n  return urlString;\n}\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "if (isPrivateIp(resolvedIp)) throw new Error('SSRF attempt blocked');"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "HTTP Parameter Pollution (HPP) Attacks and Mitigation",
    "question": "What is HTTP Parameter Pollution (HPP), and how does the hpp middleware protect Express?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "hpp",
      "parameter-pollution",
      "req-query"
    ],
    "interviewAnswer": "When a request sends duplicate query parameters like `?role=user&role=admin`, Express parses `req.query.role` into an array: `['user', 'admin']`. If code expects a string (`if (req.query.role === 'admin')` or type validation crashes), security vulnerabilities or unhandled exceptions occur. The `hpp` middleware sanitizes `req.query` and `req.body`, keeping only the last parameter value as a string.",
    "answer": "HTTP Parameter Pollution Defense:\n\n```typescript\nimport hpp from 'hpp';\n\n// Put after body-parser / express.json()\napp.use(hpp({\n  whitelist: ['filter', 'tags'] // Allow specific parameters to remain arrays if intended\n}));\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "import hpp from 'hpp';\napp.use(hpp({ whitelist: ['tags'] }));"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Secure Cookie Flags Configuration Guide",
    "question": "What is the exact security role of each cookie option (httpOnly, secure, sameSite, domain, maxAge) in Express?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "expressjs",
      "security",
      "cookies",
      "httpOnly",
      "secure",
      "sameSite"
    ],
    "interviewAnswer": "1) `httpOnly: true` prevents client JavaScript (`document.cookie`) from accessing the cookie, blocking token theft via XSS; 2) `secure: true` guarantees transmission only over HTTPS; 3) `sameSite: 'strict'` or `'lax'` prevents browser from attaching cookie on cross-site requests, mitigating CSRF; 4) `domain` restricts cookie to specific host; 5) `maxAge` or `expires` sets session lifespan.",
    "answer": "Recommended Production Cookie Configuration:\n\n```typescript\nres.cookie('sessionId', token, {\n  httpOnly: true,\n  secure: process.env.NODE_ENV === 'production',\n  sameSite: 'lax',\n  maxAge: 24 * 60 * 60 * 1000, // 24 hours\n  path: '/'\n});\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "res.cookie('token', jwt, { httpOnly: true, secure: true, sameSite: 'lax' });"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Path Traversal and Directory Traversal Defense",
    "question": "How do attackers execute Directory Traversal attacks in Express, and how do you sanitize user-supplied file paths?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "path-traversal",
      "dot-dot-slash",
      "fs",
      "path-resolve"
    ],
    "interviewAnswer": "Attackers pass sequences like `../../../../etc/passwd` to endpoints that read files from disk. To prevent traversal: 1) Resolve the absolute path using `path.resolve(BASE_DIR, userPath)`; 2) Verify that the resolved path starts with `BASE_DIR + path.sep`; 3) Never pass unsanitized input to `res.sendFile()` or `fs.readFile()`.",
    "answer": "Safe Path Verification Pattern:\n\n```typescript\nimport path from 'path';\nimport fs from 'fs';\n\nconst SAFE_BASE_DIR = path.resolve(__dirname, 'public/uploads');\n\napp.get('/files/:filename', (req, res) => {\n  const safePath = path.resolve(SAFE_BASE_DIR, req.params.filename);\n\n  // Check that resolved path resides strictly within the safe directory\n  if (!safePath.startsWith(SAFE_BASE_DIR + path.sep)) {\n    return res.status(403).json({ error: 'Access denied: Directory traversal detected' });\n  }\n\n  if (!fs.existsSync(safePath)) return res.status(404).json({ error: 'File not found' });\n  res.sendFile(safePath);\n});\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const safePath = path.resolve(BASE, filename);\nif (!safePath.startsWith(BASE)) return res.status(403).send('Forbidden');"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Mass Assignment and Over-Posting Vulnerabilities in Express",
    "question": "What is a Mass Assignment vulnerability in Express, and how do Whitelist DTOs eliminate it?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "mass-assignment",
      "dto",
      "whitelisting",
      "privilege-escalation"
    ],
    "interviewAnswer": "Mass Assignment occurs when an application passes raw `req.body` directly into database create or update operations (`User.create(req.body)`). An attacker injects hidden fields like `{ \"role\": \"admin\", \"isVerified\": true }`, escalating privileges. Eliminate it by validating and parsing input with a strict whitelist schema (Zod/Joi) that strips unexpected fields.",
    "answer": "Preventing Mass Assignment:\n\n1. Vulnerable Code:\n```typescript\n// DANGEROUS: Attacker sends { role: 'admin' } along with name\napp.post('/register', async (req, res) => {\n  const user = await User.create(req.body);\n});\n```\n\n2. Secure Whitelist Pattern with Zod:\n```typescript\nconst RegisterSchema = z.object({\n  email: z.string().email(),\n  password: z.string().min(8),\n  name: z.string()\n}).strict(); // Disallow extra properties\n\napp.post('/register', async (req, res) => {\n  const validated = RegisterSchema.parse(req.body);\n  const user = await User.create({ ...validated, role: 'user' }); // Explicit defaults\n  res.json(user);\n});\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "// BAD: User.create(req.body)\n// GOOD: User.create(validatedWhitelistData)"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Prototype Pollution Defense in Express",
    "question": "What is Prototype Pollution, and how does it compromise Express applications?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "prototype-pollution",
      "vulnerability",
      "object-assign"
    ],
    "interviewAnswer": "Prototype pollution occurs when unvalidated user input modifies `Object.prototype` via `__proto__` or `constructor.prototype` keys during recursive object merges or JSON parsing. Polluting the prototype can lead to remote code execution (RCE), bypass authentication checks (`if (req.user.isAdmin)` evaluates to true if `Object.prototype.isAdmin = true`), or crash the process (DoS).",
    "answer": "Mitigating Prototype Pollution in Express:\n\n1. Use `Object.create(null)` for map dictionaries so they have no prototype.\n2. In deep merge utilities, strip `__proto__`, `constructor`, and `prototype` keys:\n```typescript\nfunction safeMerge(target: any, source: any) {\n  for (const key of Object.keys(source)) {\n    if (key === '__proto__' || key === 'constructor' || key === 'prototype') continue;\n    if (typeof source[key] === 'object' && source[key] !== null) {\n      target[key] = target[key] || {};\n      safeMerge(target[key], source[key]);\n    } else {\n      target[key] = source[key];\n    }\n  }\n  return target;\n}\n```\n3. Freeze Object prototype in critical environments: `Object.freeze(Object.prototype)`.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "if (key === '__proto__' || key === 'constructor') continue;"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Content Security Policy (CSP) with Nonces in Express",
    "question": "How do you implement a dynamic Content Security Policy (CSP) with cryptographic nonces in Express?",
    "difficulty": "hard",
    "questionType": "Implementation",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "csp",
      "nonces",
      "helmet",
      "xss"
    ],
    "interviewAnswer": "A CSP nonce is a cryptographically random, one-time string generated per request using `crypto.randomBytes(16).toString('base64')`. Express injects the nonce into the `script-src 'nonce-{value}'` CSP header and into the rendered HTML `<script nonce=\"{value}\">`. Browsers execute only scripts matching the per-request nonce, completely neutralizing inline XSS injection.",
    "answer": "Dynamic CSP Nonce Implementation:\n\n```typescript\nimport crypto from 'crypto';\nimport helmet from 'helmet';\n\napp.use((req, res, next) => {\n  res.locals.cspNonce = crypto.randomBytes(16).toString('base64');\n  next();\n});\n\napp.use((req, res, next) => {\n  helmet.contentSecurityPolicy({\n    directives: {\n      defaultSrc: [\"'self'\"],\n      scriptSrc: [\"'self'\", `'nonce-${res.locals.cspNonce}'`],\n      styleSrc: [\"'self'\", `'nonce-${res.locals.cspNonce}'`]\n    }\n  })(req, res, next);\n});\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "res.locals.cspNonce = crypto.randomBytes(16).toString('base64');\n// <script nonce=\"<%= cspNonce %>\"></script>"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Secure File Upload Handling and Magic Bytes Inspection",
    "question": "Why is verifying file extensions and MIME types insufficient for file uploads in Express, and how do you inspect Magic Bytes?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "file-upload",
      "magic-bytes",
      "file-type",
      "malware"
    ],
    "interviewAnswer": "File extensions (`.png`) and client-sent `Content-Type` headers are easily spoofed by attackers to upload executable scripts (like `.php` or Node scripts). Real validation requires inspecting the file's 'Magic Bytes' (first few binary bytes of the file buffer) using libraries like `file-type` to detect the true binary signature before saving to disk.",
    "answer": "Inspecting Magic Bytes with file-type:\n\n```typescript\nimport multer from 'multer';\nimport { fileTypeFromBuffer } from 'file-type';\n\nconst upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 2 * 1024 * 1024 } });\n\napp.post('/upload-avatar', upload.single('avatar'), async (req, res) => {\n  if (!req.file) return res.status(400).json({ error: 'No file provided' });\n\n  const fileInfo = await fileTypeFromBuffer(req.file.buffer);\n  const allowedMimes = ['image/jpeg', 'image/png', 'image/webp'];\n\n  if (!fileInfo || !allowedMimes.includes(fileInfo.mime)) {\n    return res.status(400).json({ error: 'Invalid file format: True file signature does not match image' });\n  }\n\n  // Store with random UUID filename and extension determined by fileInfo.ext\n  res.json({ message: 'File accepted', verifiedMime: fileInfo.mime });\n});\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const type = await fileTypeFromBuffer(req.file.buffer);\nif (!type || !['image/jpeg', 'image/png'].includes(type.mime)) throw new Error('Fake file detected');"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "HTTP Request Smuggling Mitigation in Express Behind Proxies",
    "question": "What is HTTP Request Smuggling, and how do you protect an Express backend behind a reverse proxy?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "request-smuggling",
      "reverse-proxy",
      "http-parsing"
    ],
    "interviewAnswer": "HTTP Request Smuggling occurs when the front-end reverse proxy and the back-end Express server interpret ambiguous HTTP request boundaries differently (specifically conflicting `Content-Length` and `Transfer-Encoding: chunked` headers). An attacker smuggles a hidden request inside another request, bypassing frontend security controls or poisoning the web socket queue.",
    "answer": "Mitigating Request Smuggling:\n\n1. Upgrade Node.js: Node.js's built-in `llhttp` parser strictly rejects ambiguous requests containing both `Content-Length` and `Transfer-Encoding`.\n2. Standardize on HTTP/2: End-to-end HTTP/2 or HTTP/2 from proxy to client eliminates smuggling because HTTP/2 uses binary framing with explicit length fields.\n3. Reverse Proxy Hardening: Configure Nginx / Cloudflare to normalize and sanitize headers before passing requests to Node.js (`proxy_http_version 1.1; proxy_set_header Connection \"\";`).",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "// Node.js llhttp parser automatically drops malformed chunked requests"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Secrets Management Best Practices for Express Applications",
    "question": "How should secrets and API keys be managed in Express to prevent credentials leaking to version control or production logs?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "secrets-management",
      "dotenv",
      "vault",
      "env"
    ],
    "interviewAnswer": "Never commit `.env` files or credentials into git. In development, use `dotenv` with `.gitignore`. In production, inject secrets via environment variables from dedicated Secret Managers (AWS Secrets Manager, HashiCorp Vault, Doppler, Kubernetes Secrets). Validate presence and types of all required secrets at startup using Zod or `envalid` to fail fast.",
    "answer": "Fail-Fast Environment Validation:\n\n```typescript\nimport { z } from 'zod';\n\nconst envSchema = z.object({\n  PORT: z.coerce.number().default(3000),\n  NODE_ENV: z.enum(['development', 'production', 'test']),\n  MONGODB_URI: z.string().url(),\n  JWT_SECRET: z.string().min(32),\n  REDIS_URL: z.string().url()\n});\n\nexport const env = envSchema.parse(process.env);\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const env = envSchema.parse(process.env); // Crashes immediately on boot if any secret is missing"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Dependency Vulnerabilities and Supply Chain Security",
    "question": "How do you protect an Express project from malicious NPM packages and vulnerable transitive dependencies?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "npm-audit",
      "supply-chain",
      "snyk",
      "package-lock"
    ],
    "interviewAnswer": "1) Commit `package-lock.json` and run `npm ci` in CI/CD pipelines to guarantee deterministic builds; 2) Run `npm audit` or Snyk in automated CI checks to block deployments with high/critical vulnerabilities; 3) Use tools like Socket.dev or Dependabot to monitor for suspicious postinstall scripts and compromised maintainer accounts; 4) Minimize dependencies by utilizing native Node.js APIs.",
    "answer": "Supply Chain Security Practices:\n\n- `npm audit --audit-level=high`: Fails CI build if unpatched vulnerabilities exist.\n- `npm config set ignore-scripts true`: Disables arbitrary script execution during installation.\n- Dependabot / Renovate: Automatically submits PRs for security patches.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "npm audit --audit-level=high\nnpm ci --ignore-scripts"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Enforcing HTTPS and HSTS in Express",
    "question": "How do you enforce HTTPS redirects and configure Strict-Transport-Security (HSTS) in Express?",
    "difficulty": "easy",
    "questionType": "Implementation",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "expressjs",
      "security",
      "https",
      "hsts",
      "redirect",
      "trust-proxy"
    ],
    "interviewAnswer": "In Express behind a reverse proxy, inspect `req.secure` (with `app.set('trust proxy', 1)` enabled). If false, redirect HTTP traffic to HTTPS via 301 Permanent Redirect. Use Helmet's HSTS middleware to instruct browsers to strictly use HTTPS for all future visits.",
    "answer": "HTTPS Enforcement Middleware:\n\n```typescript\napp.set('trust proxy', 1);\n\napp.use((req, res, next) => {\n  if (process.env.NODE_ENV === 'production' && !req.secure) {\n    return res.redirect(301, `https://${req.headers.host}${req.url}`);\n  }\n  next();\n});\n\n// Helmet HSTS\napp.use(helmet.hsts({\n  maxAge: 31536000, // 1 year\n  includeSubDomains: true,\n  preload: true\n}));\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "if (process.env.NODE_ENV === 'production' && !req.secure) {\n  return res.redirect(301, `https://${req.headers.host}${req.url}`);\n}"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Clickjacking Defense using X-Frame-Options and frame-ancestors",
    "question": "How do you prevent Clickjacking attacks on Express applications?",
    "difficulty": "easy",
    "questionType": "Security",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "expressjs",
      "security",
      "clickjacking",
      "x-frame-options",
      "frame-ancestors"
    ],
    "interviewAnswer": "Clickjacking overlays transparent iframes over legitimate UI elements to trick users into unintended clicks. Prevent it using `X-Frame-Options: DENY` or `SAMEORIGIN`, and the modern CSP directive `frame-ancestors 'none'` or `frame-ancestors 'self'`, which completely prevents the application from being loaded inside an iframe.",
    "answer": "Clickjacking Prevention:\n\n```typescript\n// Traditional header\nres.setHeader('X-Frame-Options', 'DENY');\n\n// Modern CSP directive via Helmet\napp.use(helmet.contentSecurityPolicy({\n  directives: {\n    frameAncestors: [\"'none'\"]\n  }\n}));\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "app.use(helmet.frameguard({ action: 'deny' }));"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Securing WebSocket Connections on Express Servers",
    "question": "How do you secure WebSocket connections (ws / socket.io) sharing the same Express HTTP server?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "websockets",
      "socket-io",
      "ws",
      "authentication"
    ],
    "interviewAnswer": "WebSockets do not enforce the Same-Origin Policy during handshake. Security requires: 1) Origin verification during the `upgrade` HTTP event to reject untrusted domains; 2) Handshake authentication validating JWT tokens or session cookies in `server.on('upgrade')` before completing WebSocket establishment; 3) Rate limiting connection frequency and message payload sizes.",
    "answer": "Securing the WebSocket Upgrade Handshake:\n\n```typescript\nserver.on('upgrade', async (req, socket, head) => {\n  const origin = req.headers.origin;\n  if (origin !== 'https://app.example.com') {\n    socket.write('HTTP/1.1 403 Forbidden\\r\\n\\r\\n');\n    socket.destroy();\n    return;\n  }\n\n  const token = new URL(req.url!, 'http://localhost').searchParams.get('token');\n  try {\n    const user = jwt.verify(token!, process.env.JWT_SECRET!);\n    wss.handleUpgrade(req, socket, head, (ws) => {\n      wss.emit('connection', ws, req, user);\n    });\n  } catch (err) {\n    socket.write('HTTP/1.1 401 Unauthorized\\r\\n\\r\\n');\n    socket.destroy();\n  }\n});\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "if (req.headers.origin !== 'https://myapp.com') { socket.destroy(); return; }"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Information Disclosure Prevention: Disabling X-Powered-By",
    "question": "Why should you disable the X-Powered-By header in Express, and how is it done?",
    "difficulty": "easy",
    "questionType": "Security",
    "preparationLevels": [
      "junior"
    ],
    "tags": [
      "expressjs",
      "security",
      "x-powered-by",
      "fingerprinting",
      "information-disclosure"
    ],
    "interviewAnswer": "By default, Express adds `X-Powered-By: Express` to all HTTP responses. This advertises the server technology to attackers, facilitating targeted exploitation of known Express vulnerabilities. Disable it via `app.disable('x-powered-by')` or by loading `helmet()`.",
    "answer": "Disabling Fingerprinting Headers:\n\n```typescript\n// Direct configuration\napp.disable('x-powered-by');\n\n// Or automatically via Helmet\napp.use(helmet.hidePoweredBy());\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "app.disable('x-powered-by');"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Preventing Log Injection (CWE-117) in Express",
    "question": "What is Log Injection (CWE-117), and how do you prevent attackers from forging log entries?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "log-injection",
      "cwe-117",
      "sanitization"
    ],
    "interviewAnswer": "Log Injection occurs when unvalidated user input containing newline characters (`\\r`, `\\n`) is written directly to log files. An attacker crafts newlines to forge fake log entries (e.g., simulating successful admin logins or covering tracks). Prevent it by using structured JSON loggers (Pino/Winston) or sanitizing newlines (`input.replace(/[\\r\\n]/g, '')`).",
    "answer": "Preventing Log Injection:\n\n1. Use Structured JSON Logging: Pino automatically escapes newline characters inside JSON strings, preventing line breakage.\n2. If using text loggers, sanitize input before logging:\n```typescript\nfunction sanitizeLog(text: string): string {\n  return text.replace(/[\\r\\n]/g, '_');\n}\nlogger.info(`Failed login for user: ${sanitizeLog(req.body.username)}`);\n```",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const cleanUsername = username.replace(/[\\r\\n]/g, '_');"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "security",
    "title": "Production Express Security Hardening Checklist",
    "question": "What is the comprehensive security checklist for deploying an Express app to production?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "security",
      "hardening",
      "checklist",
      "production"
    ],
    "interviewAnswer": "The comprehensive Express security checklist includes: 1) Headers: Helmet enabled with CSP and HSTS; 2) CORS: Strict origin whitelist; 3) Rate Limiting: Redis-backed sliding window on sensitive routes; 4) Input: Zod schema validation and mongo-sanitize; 5) Auth: httpOnly secure sameSite cookies, short-lived JWTs; 6) Timeouts: headersTimeout, requestTimeout to mitigate Slowloris; 7) Visibility: Disabling X-Powered-By, generic error messages without stack traces; 8) Secrets: Validated at startup from secret managers.",
    "answer": "Production Security Hardening Checklist:\n\n1. Headers: app.use(helmet()), app.disable('x-powered-by').\n2. Traffic: HTTPS only, reverse proxy trust configured (app.set('trust proxy', 1)).\n3. Input Validation: Strict Zod schemas on body, params, query; mongoSanitize().\n4. Rate Limiting: express-rate-limit with Redis on auth and payment routes.\n5. Cookies: httpOnly, secure, sameSite: 'lax'/'strict'.\n6. Timeouts: server.headersTimeout = 10000, server.requestTimeout = 30000.\n7. Dependencies: Zero critical/high npm audit findings, npm ci --ignore-scripts.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "app.use(helmet());\napp.use(cors({ origin: ['https://app.io'] }));\napp.use(mongoSanitize());\napp.use(rateLimiter);"
      }
    ]
  }
];
