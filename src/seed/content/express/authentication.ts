import { SeedQuestion } from '../types';

export const authenticationQuestions: SeedQuestion[] = [
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Scenario: Authentication Works on Some Routes but Not Others",
    "question": "Authentication works on some routes but not others. How would you debug it?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "debugging",
      "middleware-ordering",
      "jwt",
      "sub-routers"
    ],
    "interviewAnswer": "I would investigate 5 common architectural causes: 1) Middleware Ordering: The authentication middleware was mounted AFTER some route definitions, leaving earlier routes unprotected; 2) Sub-Router Scope: The auth middleware was mounted via router.use() inside one router file (e.g. userRouter) but omitted in another (orderRouter); 3) CORS Preflight Mismatch: Browsers send OPTIONS requests without Authorization headers; if auth middleware runs on OPTIONS, preflights fail with 401; 4) Path Prefix Mismatches: Route paths having trailing slashes or sub-paths that bypass the app.use(\"/api\", auth) mount prefix; 5) Header Extraction Inconsistency: Some endpoints expecting cookies while others expect Authorization: Bearer headers.",
    "answer": "Debugging Checklist for Inconsistent Route Authentication:\n\n1. Check Registration Order:\nIn Express, middleware executes in strict top-to-bottom order. If `app.use(\"/api/orders\", orderRoutes)` is defined BEFORE `app.use(authMiddleware)`, the orders routes bypass authentication completely.\n\n2. Inspect Sub-Router Mounting:\nCheck if the route is mounted on a router that lacks `router.use(authenticate)`. If routers are split into separate files, ensure the auth guard is applied at the mount point in `app.js`: `app.use(\"/api/private\", authenticate, privateRoutes)`.\n\n3. OPTIONS Preflight Requests:\nIf public routes work in Postman but fail in the browser, check CORS. The browser sends an OPTIONS request before POST/PUT without auth tokens. If auth middleware intercepts OPTIONS, it returns 401, breaking the request in browsers.\n\n4. Cookie vs Header Extraction:\nEnsure auth middleware inspects both: `const token = req.headers.authorization?.split(\" \")[1] || req.cookies?.token;`.\n\n5. Case-Sensitivity & Trailing Slashes:\nIf route uses `/api/users/` with strict routing enabled, it might bypass `/api/users` middleware.",
    "explanation": "Tracing the route in Postman vs browser immediately distinguishes CORS/cookie issues from Express middleware ordering issues.",
    "importantPoints": [
      "Check if routes were declared before app.use(authMiddleware).",
      "Verify auth middleware is attached to all sub-router mount paths.",
      "Ensure CORS OPTIONS preflight requests are not blocked by auth middleware.",
      "Inspect token extraction logic (Authorization header vs cookies).",
      "Compare behavior in Postman vs browser to isolate CORS/cookies."
    ],
    "commonMistakes": [
      "Defining a route before mounting the authentication middleware.",
      "Blocking OPTIONS preflight requests with 401 Unauthorized."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Centralized and Consistent Auth Guard Mounting",
        "code": "// Flawed: Declared before auth middleware!\napp.use('/api/orders', orderRoutes); // UNPROTECTED!\n\napp.use(authMiddleware);\napp.use('/api/users', userRoutes); // Protected\n\n// CORRECT: Guard mounted at router mount point\napp.use('/api/public', publicRoutes); // Public (login, register)\napp.use('/api/protected', authMiddleware, protectedRoutes); // Everything here is 100% protected!"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "JWT Authentication Flow: Access Token vs Refresh Token Rotation",
    "question": "How do you design a secure JWT authentication flow with short-lived access tokens and refresh token rotation in Express?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "jwt",
      "refresh-token",
      "token-rotation",
      "security"
    ],
    "interviewAnswer": "Issue a short-lived Access Token (15m expiry) stored in memory or client state, and a long-lived Refresh Token (7d expiry) stored in an HttpOnly, Secure, SameSite=Strict cookie. On protected requests, verify the access token via middleware. When expired, the client calls /api/auth/refresh. The server verifies the refresh token, validates it against a whitelist in Redis, invalidates the old refresh token, and issues a new access token and new refresh token (Refresh Token Rotation). If a reused refresh token is detected, invalidate all tokens for that user immediately (Breach Detection).",
    "answer": "Architecture Breakdown:\n\n1. Login (`POST /api/auth/login`):\n- Validate credentials (bcrypt).\n- Generate `accessToken` (expiresIn: \"15m\").\n- Generate `refreshToken` (UUID or JWT, expiresIn: \"7d\"). Store hash in Redis with family ID.\n- Send `accessToken` in JSON body, and set `refreshToken` in `res.cookie(\"refreshToken\", token, { httpOnly: true, secure: true, sameSite: \"strict\" })`.\n\n2. Auth Middleware (`authenticate.js`):\n- Extracts Bearer token from `Authorization` header.\n- Verifies with `jwt.verify(token, ACCESS_SECRET)`.\n- Attaches `req.user = payload` and calls `next()`.\n\n3. Token Rotation (`POST /api/auth/refresh`):\n- Reads `req.cookies.refreshToken`.\n- Checks Redis: If token already used (reuse detection), delete all sessions for user (possible theft).\n- If valid, issue new pair and rotate cookie.",
    "explanation": "Short access token lifespans minimize damage if intercepted, while refresh token rotation detects stolen tokens.",
    "importantPoints": [
      "Short-lived access token (15m) in Authorization header.",
      "Long-lived refresh token in HttpOnly, Secure, SameSite cookie.",
      "Rotate refresh token on every refresh call.",
      "Detect refresh token reuse to trigger automatic session revocation."
    ],
    "commonMistakes": [
      "Storing JWTs in localStorage where they are vulnerable to XSS theft.",
      "Using eternal JWTs without expiration or revocation mechanisms."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "JWT Authentication Middleware",
        "code": "const jwt = require('jsonwebtoken');\n\nconst authenticate = (req, res, next) => {\n  const authHeader = req.headers.authorization;\n  if (!authHeader || !authHeader.startsWith('Bearer ')) {\n    return res.status(401).json({ error: 'Access token required' });\n  }\n\n  const token = authHeader.split(' ')[1];\n  try {\n    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);\n    req.user = decoded; // Attach user payload\n    next();\n  } catch (err) {\n    if (err.name === 'TokenExpiredError') {\n      return res.status(401).json({ error: 'Token expired', code: 'TOKEN_EXPIRED' });\n    }\n    return res.status(401).json({ error: 'Invalid token' });\n  }\n};"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Session-Based Authentication vs JWT in Express",
    "question": "What are the architectural trade-offs between Session-based auth (express-session) and Stateless JWT authentication in Express?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "sessions",
      "jwt",
      "trade-offs",
      "stateful"
    ],
    "interviewAnswer": "Session-based auth is stateful: server stores session data in Redis/database and sends a small session ID cookie; revoking a session (logout, ban, password reset) is instant (delete from Redis), but requires database lookup on every request. JWT is stateless: token carries claims signed by a secret; no database lookup is required on reads, but tokens cannot be easily revoked before expiration without maintaining a blacklist in Redis (reintroducing state).",
    "answer": "Trade-off Summary:\n- Revocation: Sessions win (instant revocation). JWTs are difficult to invalidate immediately.\n- Performance & Scaling: JWTs win for microservices (no DB lookup per request). Sessions require Redis queries.\n- Payload Size: Sessions send tiny cookie IDs (~32 bytes). JWTs carry claims, signatures, and can reach several kilobytes.\n- Best Practice: Modern architectures use hybrid models: stateless access tokens (15m) paired with stateful refresh tokens in Redis.",
    "explanation": "Choose sessions for traditional monolithic web apps; choose JWTs for mobile apps and distributed microservices.",
    "importantPoints": [
      "Sessions are stateful and allow instant revocation.",
      "JWTs are stateless and allow zero-lookup verification.",
      "JWT revocation requires token blacklists or short lifespans.",
      "Use HttpOnly cookies for web browsers regardless of mechanism."
    ],
    "commonMistakes": [
      "Using JWTs simply because they are trendy, then building a stateful Redis lookup on every request to check blacklists (defeating the purpose of JWTs).",
      "Using express-session with MemoryStore in production."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Configuring express-session with Redis Store",
        "code": "const session = require('express-session');\nconst RedisStore = require('connect-redis').default;\nconst { createClient } = require('redis');\n\nconst redisClient = createClient({ url: process.env.REDIS_URL });\nredisClient.connect().catch(console.error);\n\napp.use(session({\n  store: new RedisStore({ client: redisClient }),\n  secret: process.env.SESSION_SECRET,\n  resave: false,\n  saveUninitialized: false,\n  cookie: {\n    secure: process.env.NODE_ENV === 'production',\n    httpOnly: true,\n    maxAge: 1000 * 60 * 60 * 24 // 1 day\n  }\n}));"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Password Hashing with bcrypt in Express Applications",
    "question": "How should passwords be hashed using bcrypt, and what is the optimal salt rounds value?",
    "difficulty": "easy",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "bcrypt",
      "password-hashing",
      "salt-rounds"
    ],
    "interviewAnswer": "Hash passwords asynchronously using bcrypt.hash(password, 12). bcrypt automatically generates a random salt and incorporates work factor rounds. In 2026, 10-12 salt rounds is optimal (taking ~100-250ms per hash on server hardware), balancing brute-force resistance against server CPU utilization. Verify with bcrypt.compare(plain, hash).",
    "answer": "Never use synchronous `bcrypt.hashSync` on web servers; it blocks the single-threaded event loop for 250ms, freezing all concurrent requests.",
    "explanation": "Never use synchronous `bcrypt.hashSync` on web servers; it blocks the single-threaded event loop for 250ms, freezing all concurrent requests.",
    "importantPoints": [
      "Always use asynchronous bcrypt.hash and bcrypt.compare.",
      "10-12 salt rounds is the recommended baseline.",
      "Synchronous bcrypt calls freeze the Node event loop."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Password Hashing with bcrypt in Express Applications",
        "code": "// Express Authentication: Password Hashing with bcrypt in Express Applications\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "JWT Revocation Strategies: Blacklisting vs Whitelisting in Redis",
    "question": "How do Token Blacklisting and Token Whitelisting in Redis implement JWT revocation?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "jwt-revocation",
      "redis",
      "blacklisting",
      "whitelisting"
    ],
    "interviewAnswer": "Blacklisting stores revoked token signatures/jti in Redis with a TTL matching remaining token lifespan; middleware checks redis.exists(token.jti). Whitelisting stores currently active refresh token IDs in Redis; if a token is not in the whitelist, it is rejected. Whitelisting is more secure because wiping the Redis key instantly revokes all user access.",
    "answer": "Blacklisting has lower memory overhead (only tracks logged-out tokens), whereas whitelisting provides total visibility over active sessions.",
    "explanation": "Blacklisting has lower memory overhead (only tracks logged-out tokens), whereas whitelisting provides total visibility over active sessions.",
    "importantPoints": [
      "Blacklist stores revoked token IDs with TTL.",
      "Whitelist stores active tokens; removal revokes access instantly.",
      "Both provide revocation mechanisms for otherwise stateless JWTs."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "JWT Revocation Strategies: Blacklisting vs Whitelisting in Redis",
        "code": "// Express Authentication: JWT Revocation Strategies: Blacklisting vs Whitelisting in Redis\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "OAuth 2.0 and OpenID Connect (OIDC) Flow in Express",
    "question": "How does an Express server implement the OAuth 2.0 Authorization Code Flow with PKCE?",
    "difficulty": "hard",
    "questionType": "Protocol",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "oauth2",
      "oidc",
      "pkce",
      "google-auth"
    ],
    "interviewAnswer": "1) Express redirects user to Identity Provider (Google/GitHub) with client_id, redirect_uri, scope, state (anti-CSRF), and code_challenge (PKCE); 2) User consents; provider redirects back to /auth/callback with code and state; 3) Express validates state, exchanges code + code_verifier for access/ID tokens via secure back-channel POST; 4) Express extracts user profile, issues local session/JWT, and redirects to app.",
    "answer": "Libraries like `passport-oauth2` or `openid-client` encapsulate this exchange cleanly.",
    "explanation": "Libraries like `passport-oauth2` or `openid-client` encapsulate this exchange cleanly.",
    "importantPoints": [
      "Authorization Code Flow keeps secrets secure on backend.",
      "state parameter prevents CSRF attacks.",
      "PKCE prevents authorization code interception attacks."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "OAuth 2.0 and OpenID Connect (OIDC) Flow in Express",
        "code": "// Express Authentication: OAuth 2.0 and OpenID Connect (OIDC) Flow in Express\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Preventing Timing Attacks on Password and Token Comparisons",
    "question": "What is a Timing Attack, and how does crypto.timingSafeEqual prevent it in Express authentication?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "timing-attacks",
      "crypto",
      "timingSafeEqual"
    ],
    "interviewAnswer": "Standard string equality (token === secret) evaluates character by character and returns false on the first mismatch, allowing attackers to measure microscopic response time differences to deduce valid tokens letter by letter. crypto.timingSafeEqual(bufA, bufB) executes in constant time regardless of where mismatches occur, neutralizing timing attacks.",
    "answer": "Always use `crypto.timingSafeEqual` when verifying API keys, HMAC webhook signatures, or custom tokens.",
    "explanation": "Always use `crypto.timingSafeEqual` when verifying API keys, HMAC webhook signatures, or custom tokens.",
    "importantPoints": [
      "Standard === returns early on character mismatch.",
      "Timing differences leak secret characters.",
      "crypto.timingSafeEqual runs in constant time."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Preventing Timing Attacks on Password and Token Comparisons",
        "code": "// Express Authentication: Preventing Timing Attacks on Password and Token Comparisons\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Multi-Factor Authentication (MFA / TOTP) Verification in Express",
    "question": "How do you implement Time-based One-Time Password (TOTP / Google Authenticator) in Express?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "mfa",
      "totp",
      "speakeasy",
      "authenticator"
    ],
    "interviewAnswer": "1) Setup: Generate a base32 secret using speakeasy.generateSecret(), generate QR code URL (qrcode), and save secret encrypted in database; 2) Verification: User inputs 6-digit code; middleware verifies using speakeasy.totp.verify({ secret, encoding: \"base32\", token, window: 1 }). If valid, upgrade session to MFA_VERIFIED.",
    "answer": "Setting `window: 1` accommodates clock skew (30 seconds before and after) between client phone and server.",
    "explanation": "Setting `window: 1` accommodates clock skew (30 seconds before and after) between client phone and server.",
    "importantPoints": [
      "Uses speakeasy/otplib for RFC 6238 TOTP.",
      "QR code shares secret key with authenticator app.",
      "window: 1 accommodates minor clock drift."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Multi-Factor Authentication (MFA / TOTP) Verification in Express",
        "code": "// Express Authentication: Multi-Factor Authentication (MFA / TOTP) Verification in Express\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "API Key Authentication for Service-to-Service Communication",
    "question": "How should API Key authentication be designed for high-performance machine-to-machine endpoints?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "api-key",
      "m2m",
      "crypto",
      "hashing"
    ],
    "interviewAnswer": "Generate high-entropy random keys (e.g. prefix sk_live_ followed by 32 random bytes). Store only the SHA-256 hash of the API key in the database (never plaintext). When requests arrive with X-API-Key: hash the incoming key with SHA-256 and query the database for the matching hash. Cache verified keys in Redis with short TTL.",
    "answer": "Prefixing keys with identifiable prefixes (`sk_live_`) allows secret scanning tools (GitHub secret scanner) to detect accidentally committed keys.",
    "explanation": "Prefixing keys with identifiable prefixes (`sk_live_`) allows secret scanning tools (GitHub secret scanner) to detect accidentally committed keys.",
    "importantPoints": [
      "Never store API keys in plaintext (store SHA-256 hash).",
      "Prefix keys (sk_live_) for secret scanning.",
      "Cache authenticated keys in Redis for high throughput."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "API Key Authentication for Service-to-Service Communication",
        "code": "// Express Authentication: API Key Authentication for Service-to-Service Communication\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Magic Link (Passwordless) Authentication Workflow",
    "question": "How does Magic Link authentication work, and what security measures are required?",
    "difficulty": "medium",
    "questionType": "Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "magic-link",
      "passwordless",
      "crypto"
    ],
    "interviewAnswer": "1) User requests login with email; 2) Server generates high-entropy random token (crypto.randomBytes(32).toString(\"hex\")), hashes it, stores hash in database with 15-minute expiry and used=false flag; 3) Server emails link: /auth/magic-link?token=rawToken; 4) User clicks link; server hashes token, finds matching unused record, marks used=true, and issues session/JWT.",
    "answer": "Tokens must be strictly single-use and expire within 10-15 minutes.",
    "explanation": "Tokens must be strictly single-use and expire within 10-15 minutes.",
    "importantPoints": [
      "Cryptographic random token emailed to verified inbox.",
      "Tokens must be single-use and expire in 10-15 minutes.",
      "Store SHA-256 hash in database to protect against DB leaks."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Magic Link (Passwordless) Authentication Workflow",
        "code": "// Express Authentication: Magic Link (Passwordless) Authentication Workflow\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Handling Account Lockout on Consecutive Failed Logins",
    "question": "How do you implement account lockout to mitigate automated brute-force credential attacks?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "account-lockout",
      "brute-force",
      "security"
    ],
    "interviewAnswer": "Track failedLoginAttempts and lockUntil timestamp in user record or Redis. On each failed password check, increment failedLoginAttempts. If count >= 5, set lockUntil = Date.now() + 15 * 60 * 1000 (15 minutes). The login handler checks if (user.isLocked) return res.status(423).json({ error: \"Account locked. Try again later\" }). Reset count to 0 upon successful login.",
    "answer": "Combine account lockout with IP rate limiting to prevent attackers from locking out legitimate users deliberately (Denial of Account attack).",
    "explanation": "Combine account lockout with IP rate limiting to prevent attackers from locking out legitimate users deliberately (Denial of Account attack).",
    "importantPoints": [
      "Locks account after 5 consecutive failures.",
      "Unlocks automatically after 15-30 minutes.",
      "Combine with IP rate limiting to prevent denial-of-service lockout."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling Account Lockout on Consecutive Failed Logins",
        "code": "// Express Authentication: Handling Account Lockout on Consecutive Failed Logins\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "JWT Secret Management and Zero-Downtime Secret Rotation",
    "question": "How do you rotate JWT signing secrets in production without logging out all existing users?",
    "difficulty": "hard",
    "questionType": "Key Management",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "jwt",
      "secret-rotation",
      "key-rotation"
    ],
    "interviewAnswer": "Maintain an array of active secrets: JWT_SECRETS=[\"newSecret2026\", \"oldSecret2025\"]. Sign newly issued tokens using the primary secret (JWT_SECRETS[0]). In verification middleware, verify against the primary secret; if it throws JsonWebTokenError, attempt verification with fallback secondary secrets. After 15 minutes (or token lifetime), remove the old secret.",
    "answer": "Using JWKS (JSON Web Key Set) and asymmetric RSA/ECDSA keys allows dynamic key rotation via public key endpoints.",
    "explanation": "Using JWKS (JSON Web Key Set) and asymmetric RSA/ECDSA keys allows dynamic key rotation via public key endpoints.",
    "importantPoints": [
      "Sign with latest secret; verify against current and previous secrets.",
      "Allows existing tokens to expire naturally without abrupt logout.",
      "Asymmetric JWKS is preferred for enterprise architectures."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "JWT Secret Management and Zero-Downtime Secret Rotation",
        "code": "// Express Authentication: JWT Secret Management and Zero-Downtime Secret Rotation\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Secure Cookie Flags: HttpOnly, Secure, SameSite, and Domain",
    "question": "What is the precise security function of each cookie flag when setting authentication cookies in Express?",
    "difficulty": "easy",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "cookies",
      "httpOnly",
      "sameSite",
      "secure"
    ],
    "interviewAnswer": "1) httpOnly: Blocks document.cookie access from JavaScript, neutralizing XSS token theft; 2) secure: Ensures cookie is transmitted strictly over encrypted HTTPS connections; 3) sameSite: \"strict\" blocks cookie transmission on all cross-site requests (neutralizing CSRF); \"lax\" allows top-level navigation; 4) domain / path: Restricts cookie scope to specific subdomains and URL paths.",
    "answer": "Missing any of these flags leaves the cookie vulnerable to XSS theft, MITM interception, or CSRF attacks.",
    "explanation": "Missing any of these flags leaves the cookie vulnerable to XSS theft, MITM interception, or CSRF attacks.",
    "importantPoints": [
      "httpOnly prevents XSS theft.",
      "secure mandates HTTPS.",
      "sameSite prevents CSRF.",
      "path/domain restricts scope."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Secure Cookie Flags: HttpOnly, Secure, SameSite, and Domain",
        "code": "// Express Authentication: Secure Cookie Flags: HttpOnly, Secure, SameSite, and Domain\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Preventing Session Fixation Attacks in Express",
    "question": "What is a Session Fixation attack, and how do you protect against it using req.session.regenerate()?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "session-fixation",
      "regenerate",
      "security"
    ],
    "interviewAnswer": "Session Fixation occurs when an attacker tricks a victim into authenticating using a known session ID pre-assigned by the attacker. If the server does not rotate the session ID upon login, the attacker uses the fixed ID to access the victim's account. Protect against it by always calling req.session.regenerate((err) => { ... }) immediately upon successful authentication to issue a new session ID.",
    "answer": "Regenerating the session discards the anonymous session ID and assigns a pristine ID upon privilege elevation.",
    "explanation": "Regenerating the session discards the anonymous session ID and assigns a pristine ID upon privilege elevation.",
    "importantPoints": [
      "Attacker forces victim to use pre-known session ID.",
      "Always call req.session.regenerate() upon login.",
      "Assigns fresh random session ID upon privilege elevation."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Preventing Session Fixation Attacks in Express",
        "code": "// Express Authentication: Preventing Session Fixation Attacks in Express\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Asymmetric JWT Signing (RS256) vs Symmetric Signing (HS256)",
    "question": "Why is asymmetric RS256 signing preferred over symmetric HS256 in microservices architectures?",
    "difficulty": "hard",
    "questionType": "Cryptography",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "jwt",
      "rs256",
      "hs256",
      "asymmetric"
    ],
    "interviewAnswer": "HS256 uses a single shared secret for both signing and verification. If 20 microservices need to verify tokens, the secret must be distributed to all 20, creating huge leak risks. RS256 uses a private key (held strictly by the Auth Service to sign tokens) and a public key (distributed to all other services to verify tokens). Other microservices can verify tokens without the ability to forge them.",
    "answer": "If a read-only microservice is compromised, the attacker cannot forge new JWTs because they only possess the public verification key.",
    "explanation": "If a read-only microservice is compromised, the attacker cannot forge new JWTs because they only possess the public verification key.",
    "importantPoints": [
      "HS256 uses shared secret for sign and verify.",
      "RS256 uses private key to sign, public key to verify.",
      "Prevents compromised consumer services from forging tokens."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Asymmetric JWT Signing (RS256) vs Symmetric Signing (HS256)",
        "code": "// Express Authentication: Asymmetric JWT Signing (RS256) vs Symmetric Signing (HS256)\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Handling Expired JWTs: 401 Unauthorized vs Token-Expired Error Code",
    "question": "Why should expired tokens return a distinct error code in the 401 response payload?",
    "difficulty": "easy",
    "questionType": "API Design",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "jwt",
      "token-expired",
      "refresh-token"
    ],
    "interviewAnswer": "Returning a generic 401 Unauthorized does not tell the frontend whether the token is invalid/tampered or simply expired. Including a specific error code: res.status(401).json({ error: \"Token expired\", code: \"TOKEN_EXPIRED\" }) allows the frontend HTTP client (Axios interceptor) to catch the code, pause pending requests, call /api/auth/refresh, and replay the original request transparently.",
    "answer": "Without a distinct code, the frontend must force a full logout on every 401.",
    "explanation": "Without a distinct code, the frontend must force a full logout on every 401.",
    "importantPoints": [
      "Include code: \"TOKEN_EXPIRED\" in 401 payload.",
      "Enables frontend Axios interceptors to trigger refresh flow.",
      "Prevents unexpected logouts when tokens expire naturally."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling Expired JWTs: 401 Unauthorized vs Token-Expired Error Code",
        "code": "// Express Authentication: Handling Expired JWTs: 401 Unauthorized vs Token-Expired Error Code\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Detecting and Preventing Credential Stuffing Attacks",
    "question": "How can an Express authentication system defend against credential stuffing attacks?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "credential-stuffing",
      "hashing",
      "defense"
    ],
    "interviewAnswer": "1) Enforce strict IP and global rate limiting on /login; 2) Check submitted passwords against HaveIBeenPwned breach database API (using k-Anonymity model) during registration; 3) Implement CAPTCHA challenges (Cloudflare Turnstile) when failure thresholds are exceeded; 4) Trigger device/location anomaly alerts when logins originate from unexpected countries.",
    "answer": "Credential stuffing uses billions of leaked username/password pairs from third-party breaches to automate logins on your API.",
    "explanation": "Credential stuffing uses billions of leaked username/password pairs from third-party breaches to automate logins on your API.",
    "importantPoints": [
      "Enforce rate limiting on auth routes.",
      "Check HaveIBeenPwned k-Anonymity API.",
      "Challenge burst traffic with CAPTCHA."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Detecting and Preventing Credential Stuffing Attacks",
        "code": "// Express Authentication: Detecting and Preventing Credential Stuffing Attacks\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Single Sign-On (SSO) with SAML 2.0 in Express",
    "question": "How is enterprise SAML 2.0 Single Sign-On (SSO) integrated into Express using passport-saml?",
    "difficulty": "hard",
    "questionType": "Enterprise",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "saml",
      "sso",
      "enterprise",
      "passport"
    ],
    "interviewAnswer": "passport-saml configures: 1) entryPoint (Okta/Azure AD login URL); 2) issuer (Express entity ID); 3) cert (Identity Provider public certificate); 4) callbackUrl (/login/callback). Express redirects user to IdP; IdP authenticates user and POSTs signed SAML XML assertion to callbackUrl. Passport verifies XML signature against IdP cert and extracts user email and roles.",
    "answer": "SAML is the enterprise standard for B2B corporate authentication.",
    "explanation": "SAML is the enterprise standard for B2B corporate authentication.",
    "importantPoints": [
      "Uses passport-saml for enterprise IdP integration (Okta, Azure AD).",
      "Verifies XML signature using IdP public certificate.",
      "B2B enterprise requirement for Okta/Active Directory integration."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Single Sign-On (SSO) with SAML 2.0 in Express",
        "code": "// Express Authentication: Single Sign-On (SSO) with SAML 2.0 in Express\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Token-Binding / Device Fingerprinting in Auth Tokens",
    "question": "How can authentication tokens be bound to a client fingerprint to prevent stolen token reuse?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "token-binding",
      "device-fingerprint",
      "security"
    ],
    "interviewAnswer": "During login, hash client traits: SHA256(User-Agent + Accept-Language + Client-IP-Subnet) and embed this fingerprint in the token payload or Redis session. In authentication middleware, recompute the fingerprint from the incoming request. If fingerprints mismatch, reject with 401 and revoke token family (signals token was stolen and used from a different machine).",
    "answer": "Even if an attacker steals an access token via network sniffing, they cannot use it from a different machine or browser.",
    "explanation": "Even if an attacker steals an access token via network sniffing, they cannot use it from a different machine or browser.",
    "importantPoints": [
      "Embeds client fingerprint hash inside token.",
      "Verifies fingerprint matches on every request.",
      "Detects and blocks stolen tokens used across different machines."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Token-Binding / Device Fingerprinting in Auth Tokens",
        "code": "// Express Authentication: Token-Binding / Device Fingerprinting in Auth Tokens\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Handling User Password Changes and Universal Logout",
    "question": "When a user updates their password, how do you invalidate all existing active sessions across all devices?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "password-reset",
      "universal-logout",
      "session-invalidation"
    ],
    "interviewAnswer": "1) Store a passwordVersion integer or tokenValidAfter timestamp in the User database record; 2) When password is changed, increment passwordVersion; 3) Embed passwordVersion in JWT payload; 4) In auth middleware, compare token.passwordVersion === user.passwordVersion; if token version is older, reject with 401; 5) Delete all user refresh tokens and active sessions in Redis.",
    "answer": "This immediately invalidates all active sessions across all mobile phones, tablets, and desktop browsers.",
    "explanation": "This immediately invalidates all active sessions across all mobile phones, tablets, and desktop browsers.",
    "importantPoints": [
      "Increment passwordVersion or update tokenValidAfter timestamp.",
      "Auth middleware rejects tokens with older version numbers.",
      "Wipe all refresh tokens from Redis on password change."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling User Password Changes and Universal Logout",
        "code": "// Express Authentication: Handling User Password Changes and Universal Logout\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Audit Trails for Authentication Events",
    "question": "Which authentication events must be logged for security compliance (SOC 2 / ISO 27001)?",
    "difficulty": "medium",
    "questionType": "Compliance",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "compliance",
      "audit-trail",
      "soc2"
    ],
    "interviewAnswer": "Log: 1) Successful logins (userId, IP, user-agent, timestamp); 2) Failed login attempts (email, IP, failure reason); 3) Password resets and changes; 4) MFA enrollment and verification failures; 5) Session terminations and logouts. Never log raw passwords or session secrets.",
    "answer": "Required by SOC 2, HIPAA, and PCI-DSS compliance frameworks.",
    "explanation": "Required by SOC 2, HIPAA, and PCI-DSS compliance frameworks.",
    "importantPoints": [
      "Log successful and failed logins with IP and timestamp.",
      "Log password and MFA changes.",
      "Never log raw credentials or tokens."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Audit Trails for Authentication Events",
        "code": "// Express Authentication: Audit Trails for Authentication Events\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "CSRF Defense in Pure API / Mobile Backends",
    "question": "Why are pure REST APIs using Authorization: Bearer headers immune to traditional browser CSRF attacks?",
    "difficulty": "easy",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "csrf",
      "bearer-token",
      "cors"
    ],
    "interviewAnswer": "CSRF relies on browsers automatically attaching ambient credentials (cookies and HTTP Basic Auth) to cross-origin requests. When an API uses Authorization: Bearer headers, browsers NEVER automatically attach the custom header on cross-origin requests. Setting a custom header requires JavaScript (fetch/Axios), which is strictly subject to CORS preflight checks.",
    "answer": "Only cookie-based authentication requires CSRF tokens; pure Bearer token APIs are inherently CSRF-immune.",
    "explanation": "Only cookie-based authentication requires CSRF tokens; pure Bearer token APIs are inherently CSRF-immune.",
    "importantPoints": [
      "CSRF exploits ambient cookie attachment.",
      "Browsers do not attach Authorization headers cross-origin.",
      "Custom headers trigger mandatory CORS preflight checks."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "CSRF Defense in Pure API / Mobile Backends",
        "code": "// Express Authentication: CSRF Defense in Pure API / Mobile Backends\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "WebAuthn / Passkeys Authentication in Express",
    "question": "How do Passkeys (FIDO2 / WebAuthn) replace passwords in modern Express authentication pipelines?",
    "difficulty": "hard",
    "questionType": "Modern Standards",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "webauthn",
      "passkeys",
      "fido2",
      "biometrics"
    ],
    "interviewAnswer": "Using @simplewebauthn/server: 1) Registration: Express issues challenge options (generateRegistrationOptions); client signs with device hardware (TouchID/FaceID) and sends attestation; Express verifies and stores public key; 2) Login: Express issues authentication challenge (generateAuthenticationOptions); client signs challenge with private key; Express verifies signature against stored public key.",
    "answer": "Completely eliminates passwords, phishing, and credential stuffing attacks.",
    "explanation": "Completely eliminates passwords, phishing, and credential stuffing attacks.",
    "importantPoints": [
      "Replaces passwords with public-key cryptography (FaceID/TouchID).",
      "Uses @simplewebauthn/server to generate and verify challenges.",
      "Phishing-resistant authentication standard."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "WebAuthn / Passkeys Authentication in Express",
        "code": "// Express Authentication: WebAuthn / Passkeys Authentication in Express\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Summary: The Pillars of Secure Express Authentication",
    "question": "What are the 5 core pillars of production-grade Express authentication architecture?",
    "difficulty": "easy",
    "questionType": "Summary",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "summary",
      "best-practices",
      "security"
    ],
    "interviewAnswer": "1) Strong password hashing (bcrypt, salt rounds 12); 2) Short-lived access tokens with HttpOnly refresh token rotation; 3) Secure cookie attributes (HttpOnly, Secure, SameSite=Strict); 4) Rate limiting and lockout protection against brute force; 5) Revocation mechanisms (Redis whitelist/versioning) and audit logging.",
    "answer": "A secure authentication system defends against credential stuffing, token theft, XSS, and CSRF simultaneously.",
    "explanation": "A secure authentication system defends against credential stuffing, token theft, XSS, and CSRF simultaneously.",
    "importantPoints": [
      "Strong hashing + salt.",
      "Short token lifespans with rotation.",
      "HttpOnly secure cookies.",
      "Rate limiting and brute force defense.",
      "Instant revocation mechanisms."
    ],
    "commonMistakes": [
      "Storing tokens in localStorage or omitting HttpOnly flags."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Summary: The Pillars of Secure Express Authentication",
        "code": "// Express Authentication: Summary: The Pillars of Secure Express Authentication\nconst jwt = require('jsonwebtoken');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Passport.js Architecture and Session Serialization",
    "question": "How does Passport.js middleware work under the hood with passport.initialize() and passport.session()?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "passport",
      "session",
      "serializeUser",
      "deserializeUser"
    ],
    "interviewAnswer": "passport.initialize() attaches Passport state and helper methods (req.login, req.logout) to the request. passport.session() reads session data and invokes passport.deserializeUser() on every request to populate req.user.",
    "answer": "Passport.js request lifecycle:\n\n1. passport.initialize() mounts helper functions onto req.\n2. passport.session() hooks into express-session to read req.session.passport.user.\n3. passport.deserializeUser() loads the complete user entity and attaches it to req.user.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "app.use(session({ secret: 'sec', resave: false, saveUninitialized: false }));\napp.use(passport.initialize());\napp.use(passport.session());"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Refresh Token Rotation with Reuse Detection in Express",
    "question": "How do you implement Refresh Token Rotation with Reuse Detection in Express?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "jwt",
      "refresh-token",
      "token-rotation",
      "reuse-detection"
    ],
    "interviewAnswer": "Refresh token rotation issues a new refresh token with each refresh request while invalidating the old one. If an invalidated refresh token is ever submitted, reuse detection revokes the entire token family, indicating a potential token compromise.",
    "answer": "Token Rotation & Family Reuse Detection:\n\n1. Store refresh tokens with family ID and used flag.\n2. Upon refresh, mark current token used = true and issue a new token with same family ID.\n3. If a token marked used = true is received, delete all tokens in that family immediately and force re-login.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "if (record.isUsed) {\n  await TokenModel.deleteMany({ family: record.family });\n  return res.status(401).json({ error: 'Breach detected: session terminated' });\n}"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Multi-Tenant Authentication and Workspace Resolution in Express",
    "question": "How do you implement Multi-Tenant Authentication in Express where users authenticate against specific tenant workspaces?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "multi-tenant",
      "tenant-resolution",
      "subdomains"
    ],
    "interviewAnswer": "Extract tenant context via subdomain, custom header (X-Tenant-ID), or token claim. Authentication middleware validates both user credentials and their active membership within that specific tenant workspace.",
    "answer": "Multi-Tenant Auth Pipeline:\n\n1. Resolve tenant context from req.subdomains or headers.\n2. Verify JWT signature.\n3. Check membership mapping (User <-> Tenant) to ensure authorization within the target tenant workspace.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "app.use('/api', resolveTenant, authenticateToken, authenticateTenantUser);"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Mutual TLS (mTLS) Authentication for Express Services",
    "question": "How does mutual TLS (mTLS) authentication work for high-security Express microservice-to-microservice communication?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "mtls",
      "tls",
      "certificates",
      "microservices"
    ],
    "interviewAnswer": "In mTLS, both server and client present TLS certificates. The Express HTTPS server validates client certificates against a trusted Certificate Authority (CA) before accepting the HTTP connection.",
    "answer": "Mutual TLS Configuration in Express:\n\n1. Configure https.createServer with requestCert: true and rejectUnauthorized: true.\n2. Pass internal Certificate Authority (CA) certs to validate incoming client certificates.\n3. Inspect req.socket.getPeerCertificate() in middleware to extract caller identity.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const options = { key, cert, ca: [trustedCa], requestCert: true, rejectUnauthorized: true };\nhttps.createServer(options, app).listen(8443);"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Handling Expired JWTs with Axios Interceptor and Express Refresh Route",
    "question": "How do you handle expired JWT tokens gracefully on the client without forcing immediate re-login using an Axios interceptor and Express refresh endpoint?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "jwt",
      "axios-interceptor",
      "silent-refresh"
    ],
    "interviewAnswer": "Express returns 401 with a specific error code like TOKEN_EXPIRED. An Axios response interceptor intercepts the 401, calls POST /auth/refresh, updates the default Authorization header, and retries the original request seamlessly.",
    "answer": "Silent Token Refresh Workflow:\n\n1. Express error handler detects TokenExpiredError and sends { code: 'TOKEN_EXPIRED' }.\n2. Frontend interceptor checks error code and pauses pending requests.\n3. Interceptor invokes refresh endpoint, acquires new access token, updates headers, and retries original requests.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "if (err.name === 'TokenExpiredError') {\n  return res.status(401).json({ code: 'TOKEN_EXPIRED', message: 'Token expired' });\n}"
      }
    ]
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authentication",
    "title": "Social Login (OAuth2) with Decoupled SPAs and Mobile Apps",
    "question": "How do you implement social login (OAuth2 Google/GitHub) in an Express API that serves a decoupled SPA or mobile app?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authentication",
      "oauth2",
      "google-login",
      "spa",
      "mobile-auth"
    ],
    "interviewAnswer": "Clients authenticate via provider native SDKs and send ID tokens to an Express endpoint (e.g. POST /auth/google). Express validates token signatures directly with the provider (e.g. Google auth library), provisions or finds the user, and returns application JWTs.",
    "answer": "Decoupled Social Login:\n\n1. SPA/Mobile app acquires idToken via Google/Apple SDK.\n2. Express receives idToken at POST /api/auth/google.\n3. Server verifies token with google-auth-library.\n4. Server looks up or creates user in MongoDB/Postgres and issues first-party JWT access/refresh tokens.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const ticket = await client.verifyIdToken({ idToken, audience: CLIENT_ID });\nconst payload = ticket.getPayload();"
      }
    ]
  }
];
