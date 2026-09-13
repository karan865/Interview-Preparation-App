import { SeedQuestion } from '../types';

export const authorizationQuestions: SeedQuestion[] = [
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Role-Based Access Control (RBAC) Middleware Implementation",
    "question": "How do you design a clean, reusable Role-Based Access Control (RBAC) middleware in Express?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "rbac",
      "roles",
      "middleware",
      "security"
    ],
    "interviewAnswer": "Create a higher-order middleware authorize(...allowedRoles) that checks whether the authenticated user (req.user) possesses one of the allowed roles. If req.user is missing, return 401 Unauthorized; if req.user.role is not included in allowedRoles, return 403 Forbidden with a clear error; otherwise, call next().",
    "answer": "Implementation:\n```javascript\nfunction authorize(...allowedRoles) {\n  return (req, res, next) => {\n    if (!req.user) {\n      return res.status(401).json({ error: \"Authentication required\" });\n    }\n    if (!allowedRoles.includes(req.user.role)) {\n      return res.status(403).json({\n        error: \"Forbidden: Insufficient permissions\",\n        required: allowedRoles,\n        current: req.user.role\n      });\n    }\n    next();\n  };\n}\n\n// Usage:\nrouter.delete(\"/users/:id\", authenticate, authorize(\"ADMIN\", \"SUPERADMIN\"), deleteUser);\n```",
    "explanation": "Always distinguish 401 (unauthenticated) from 403 (authenticated, but forbidden).",
    "importantPoints": [
      "Higher-order function returns configured middleware.",
      "Differentiates 401 Unauthorized from 403 Forbidden.",
      "Supports multiple permitted roles: authorize(\"ADMIN\", \"MANAGER\").",
      "Mounts directly in route chains after authenticate."
    ],
    "commonMistakes": [
      "Returning 401 when an authenticated user lacks permissions (should be 403 Forbidden).",
      "Forgetting to run the authentication middleware before the authorization guard."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "RBAC Route Guard Implementation",
        "code": "const authorize = (...roles) => (req, res, next) => {\n  if (!req.user || !roles.includes(req.user.role)) {\n    return res.status(403).json({ error: 'Access denied' });\n  }\n  next();\n};\n\napp.post('/api/admin/deploy', authenticate, authorize('ADMIN'), handleDeploy);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Resource Ownership Verification: Preventing IDOR Vulnerabilities",
    "question": "What is an Insecure Direct Object Reference (IDOR) vulnerability in Express routes, and how is resource ownership verified?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "idor",
      "resource-ownership",
      "security"
    ],
    "interviewAnswer": "IDOR occurs when an endpoint (e.g. GET /api/invoices/:invoiceId) relies solely on the user being logged in, without checking whether the requested invoice actually belongs to that authenticated user. An attacker simply increments :invoiceId to view other users' private data. Mitigate by verifying ownership in database queries (Invoice.findOne({ _id: req.params.invoiceId, userId: req.user.id })) or in dedicated ownership middleware before controllers execute.",
    "answer": "Checking `userId` inside the database filter guarantees that users cannot read or modify documents belonging to other users even if they guess the ID.",
    "importantPoints": [
      "IDOR allows users to access unauthorized records by manipulating route IDs.",
      "Always scope database queries to req.user.id: { _id, userId: req.user.id }.",
      "Return 404 or 403 if the user does not own the requested resource.",
      "Never rely on frontend UI hiding buttons to enforce authorization."
    ],
    "commonMistakes": [
      "Assuming that because a user is authenticated, they are authorized to access any record ID in req.params.",
      "Checking role === \"USER\" but failing to verify document ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Preventing IDOR with Ownership Scoping",
        "code": "// VULNERABLE TO IDOR:\napp.get('/invoices/:id', authenticate, async (req, res) => {\n  const invoice = await Invoice.findById(req.params.id); // Any user can view any invoice!\n  res.json(invoice);\n});\n\n// SECURE: Enforces Resource Ownership\napp.get('/invoices/:id', authenticate, async (req, res) => {\n  const invoice = await Invoice.findOne({\n    _id: req.params.id,\n    userId: req.user.id // Must belong to requesting user!\n  });\n  if (!invoice) {\n    return res.status(404).json({ error: 'Invoice not found' });\n  }\n  res.json(invoice);\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Attribute-Based Access Control (ABAC) vs RBAC in Express",
    "question": "When does a system outgrow RBAC, and how is Attribute-Based Access Control (ABAC) implemented using CASL?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "abac",
      "casl",
      "permissions",
      "fine-grained"
    ],
    "interviewAnswer": "RBAC fails when permissions depend on dynamic context (e.g. \"A doctor can edit medical records ONLY IF they are the assigned doctor AND the patient is currently admitted\"). ABAC evaluates attributes of the subject (user), action (edit), resource (medical record), and environment (time, department). In Express, libraries like CASL define abilities: can(\"update\", \"Article\", { authorId: user.id, isPublished: false }).",
    "answer": "ABAC scales to complex enterprise authorization models without creating hundreds of specialized static roles.",
    "importantPoints": [
      "RBAC assigns static roles; ABAC evaluates dynamic attributes and context.",
      "CASL is the industry standard isomorphic authorization library for Node.js.",
      "Supports fine-grained conditional rules: can(\"read\", \"Report\", { department: user.dept })."
    ],
    "commonMistakes": [
      "Creating dozens of explosive static roles (e.g. \"Doctor_Author_Admitted\") instead of adopting ABAC.",
      "Hardcoding permission rules directly into controller business logic."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "ABAC Permissions with CASL in Express",
        "code": "const { AbilityBuilder, createMongoAbility } = require('@casl/ability');\n\nfunction defineAbilityFor(user) {\n  const { can, cannot, build } = new AbilityBuilder(createMongoAbility);\n\n  if (user.role === 'admin') {\n    can('manage', 'all');\n  } else {\n    can('read', 'Article');\n    can('update', 'Article', { authorId: user.id }); // Ownership rule\n    cannot('delete', 'Article', { isLocked: true });\n  }\n  return build();\n}\n\n// Middleware:\nconst checkPermission = (action, subject) => (req, res, next) => {\n  const ability = defineAbilityFor(req.user);\n  if (!ability.can(action, subject)) {\n    return res.status(403).json({ error: 'Permission denied' });\n  }\n  next();\n};"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Permission Bitmasks for High-Performance Authorization",
    "question": "How do binary bitmasks implement blazing-fast permission checks in high-throughput Express APIs?",
    "difficulty": "hard",
    "questionType": "Performance",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "bitmask",
      "binary-permissions",
      "performance"
    ],
    "interviewAnswer": "Assign powers of two to permissions: READ=1, WRITE=2, DELETE=4, ADMIN=8. A user's permissions are stored as a single integer (e.g. 7 = 1|2|4 = Read, Write, Delete). Checking permission is a single CPU bitwise operation: (user.permissions & DELETE) !== 0. It executes in nanoseconds and stores 30+ permissions in a single integer column.",
    "answer": "Bitmask checks require zero array lookups and consume minimal database storage.",
    "explanation": "Bitmask checks require zero array lookups and consume minimal database storage.",
    "importantPoints": [
      "Bitwise AND ((perms & READ) === READ) checks access instantly.",
      "Stores dozens of permissions in one integer.",
      "Highest throughput authorization mechanism in Node.js."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Permission Bitmasks for High-Performance Authorization",
        "code": "// Express Authorization: Permission Bitmasks for High-Performance Authorization\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Tenant Isolation in Multi-Tenant Express Architectures",
    "question": "How do authorization guards guarantee that Tenant A cannot access Tenant B's data in shared databases?",
    "difficulty": "hard",
    "questionType": "Multi-Tenancy",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "multi-tenancy",
      "tenant-isolation",
      "data-leakage"
    ],
    "interviewAnswer": "Extract tenantId from authenticated req.user (embedded in signed JWT) rather than trusting client headers or route params. In all database queries, append tenantId: req.user.tenantId as an unbypassable filter. Or use Mongoose plugin / Prisma middleware that injects tenantId automatically into every query filter.",
    "answer": "Never allow clients to specify `tenantId` in request bodies or headers without verifying it matches their authenticated JWT claims.",
    "explanation": "Never allow clients to specify `tenantId` in request bodies or headers without verifying it matches their authenticated JWT claims.",
    "importantPoints": [
      "Derive tenantId strictly from authenticated token.",
      "Inject tenantId filter into 100% of database queries.",
      "Prevent multi-tenant data cross-contamination."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Tenant Isolation in Multi-Tenant Express Architectures",
        "code": "// Express Authorization: Tenant Isolation in Multi-Tenant Express Architectures\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Scope-Based Authorization in OAuth2 / JWT (e.g. read:orders, write:orders)",
    "question": "How do OAuth2 scopes authorize specific API actions, and how is requireScope() middleware implemented?",
    "difficulty": "medium",
    "questionType": "OAuth2",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "scopes",
      "oauth2",
      "jwt-scopes"
    ],
    "interviewAnswer": "Tokens contain a scope string or array: scope: \"read:orders write:orders\". The requireScope(\"write:orders\") middleware verifies req.user.scopes.includes(requiredScope). If missing, respond with 403 Forbidden and include WWW-Authenticate: Bearer error=\"insufficient_scope\", scope=\"write:orders\".",
    "answer": "Standard in public third-party API developer platforms (GitHub, Stripe, Auth0).",
    "explanation": "Standard in public third-party API developer platforms (GitHub, Stripe, Auth0).",
    "importantPoints": [
      "Tokens carry fine-grained scope strings.",
      "requireScope guard checks required permissions.",
      "Sets WWW-Authenticate: Bearer error=\"insufficient_scope\"."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Scope-Based Authorization in OAuth2 / JWT (e.g. read:orders, write:orders)",
        "code": "// Express Authorization: Scope-Based Authorization in OAuth2 / JWT (e.g. read:orders, write:orders)\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Hierarchical Role Inheritance (Role Trees)",
    "question": "How do you design an RBAC system with hierarchical role inheritance (e.g. SUPERADMIN inherits ADMIN, ADMIN inherits USER)?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "role-hierarchy",
      "inheritance",
      "rbac"
    ],
    "interviewAnswer": "Define a role hierarchy map: const roles = { USER: 1, MODERATOR: 2, ADMIN: 3, SUPERADMIN: 4 }. The middleware authorize(minRole) checks if (roles[req.user.role] >= roles[minRole]). Or use a graph where higher roles map to arrays of inherited roles, simplifying permission checks without repeating roles on every endpoint.",
    "answer": "Role hierarchy prevents having to write `authorize(\"ADMIN\", \"SUPERADMIN\", \"SYSTEM_OWNER\")` on every single route.",
    "explanation": "Role hierarchy prevents having to write `authorize(\"ADMIN\", \"SUPERADMIN\", \"SYSTEM_OWNER\")` on every single route.",
    "importantPoints": [
      "Higher roles automatically inherit lower role permissions.",
      "Modeled via numeric ranks or role permission graphs.",
      "Reduces route guard boilerplate."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Hierarchical Role Inheritance (Role Trees)",
        "code": "// Express Authorization: Hierarchical Role Inheritance (Role Trees)\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Fine-Grained Field-Level Authorization",
    "question": "How can authorization rules restrict which specific fields a user can read or update on an entity?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "field-level-auth",
      "mass-assignment",
      "projections"
    ],
    "interviewAnswer": "Use schema projection whitelists based on role: if (req.user.role !== \"ADMIN\") req.body = lodash.pick(req.body, [\"name\", \"email\"]); else req.body = lodash.pick(req.body, [\"name\", \"email\", \"role\", \"isVip\"]). Similarly, for responses, strip sensitive fields using role-aware serializers.",
    "answer": "Prevents regular users from modifying admin-only columns during profile updates.",
    "explanation": "Prevents regular users from modifying admin-only columns during profile updates.",
    "importantPoints": [
      "Restricts writable fields per role.",
      "Restricts readable fields in response serialization.",
      "Prevents unauthorized field tampering."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Fine-Grained Field-Level Authorization",
        "code": "// Express Authorization: Fine-Grained Field-Level Authorization\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Delegated Authorization and Impersonation (Admin Ghost Login)",
    "question": "How can customer support admins impersonate users safely, and how is it tracked in authorization middleware?",
    "difficulty": "hard",
    "questionType": "Enterprise",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "impersonation",
      "audit-trail",
      "support-admin"
    ],
    "interviewAnswer": "Issue an impersonation token containing req.user (target user) and req.impersonator (admin user ID and reason). Authorization middleware allows regular user actions while logging every mutation with both IDs: actorId: req.impersonator.id, subjectId: req.user.id. Block dangerous actions (e.g. changing account password) during impersonation.",
    "answer": "Guarantees complete forensic accountability so support agents cannot abuse impersonation undetected.",
    "explanation": "Guarantees complete forensic accountability so support agents cannot abuse impersonation undetected.",
    "importantPoints": [
      "Tracks both real actor ID and impersonated target ID.",
      "Restricts high-risk actions (password reset, payout change).",
      "Creates immutable audit log for compliance."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Delegated Authorization and Impersonation (Admin Ghost Login)",
        "code": "// Express Authorization: Delegated Authorization and Impersonation (Admin Ghost Login)\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Dynamic Policy Engines: Integrating Open Policy Agent (OPA) with Express",
    "question": "How can Open Policy Agent (OPA) externalize authorization logic from an Express codebase?",
    "difficulty": "hard",
    "questionType": "Enterprise",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "opa",
      "open-policy-agent",
      "rego"
    ],
    "interviewAnswer": "Middleware sends an authorization query to local OPA daemon via HTTP: { input: { user: req.user, action: req.method, path: req.path } }. OPA evaluates declarative policies written in Rego and returns { allow: true/false }. This decouples authorization rules completely from application code, enabling central policy updates across microservices.",
    "answer": "Standard in high-compliance banking and cloud-native Kubernetes environments.",
    "explanation": "Standard in high-compliance banking and cloud-native Kubernetes environments.",
    "importantPoints": [
      "Externalizes authorization into centralized Rego policies.",
      "Decouples security policy from Express application releases.",
      "Industry standard for cloud-native zero-trust architectures."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Dynamic Policy Engines: Integrating Open Policy Agent (OPA) with Express",
        "code": "// Express Authorization: Dynamic Policy Engines: Integrating Open Policy Agent (OPA) with Express\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Time-Bound and Revocable Delegation Tokens",
    "question": "How do you design temporary delegation tokens (e.g. granting a technician access to a resource for 2 hours)?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "delegation",
      "time-bound",
      "temporary-access"
    ],
    "interviewAnswer": "Issue a signed token containing { granterId, delegateeId, resourceId, permissions: [\"READ\"], exp: Date.now() + 7200 }. Authorization middleware checks that the token is valid, unexpired, and specifically matches the requested resource. Cache token in Redis to allow granters to revoke access immediately before expiration.",
    "answer": "Essential for vendor access, document sharing, and support contractor workflows.",
    "explanation": "Essential for vendor access, document sharing, and support contractor workflows.",
    "importantPoints": [
      "Carries short expiration timestamp and explicit resource ID.",
      "Revocable via Redis before expiration.",
      "Enforces least-privilege temporary access."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Time-Bound and Revocable Delegation Tokens",
        "code": "// Express Authorization: Time-Bound and Revocable Delegation Tokens\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Handling 403 Forbidden vs 404 Not Found for Unauthorized Resources",
    "question": "Why should unauthorized resource requests sometimes return 404 Not Found instead of 403 Forbidden?",
    "difficulty": "medium",
    "questionType": "Security Strategy",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "403-vs-404",
      "information-leakage",
      "stealth"
    ],
    "interviewAnswer": "Returning 403 Forbidden confirms to an attacker that the secret resource ID actually exists (information disclosure). For sensitive assets (e.g. /projects/:secretProjectId or /documents/:confidentialId), returning 404 Not Found conceals the existence of the resource entirely, preventing enumeration attacks.",
    "answer": "GitHub does this: accessing a private repository you don't have access to returns 404, not 403.",
    "explanation": "GitHub does this: accessing a private repository you don't have access to returns 404, not 403.",
    "importantPoints": [
      "403 confirms the resource exists, leaking metadata.",
      "404 hides resource existence from unauthorized attackers.",
      "Prevents resource enumeration and discovery."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling 403 Forbidden vs 404 Not Found for Unauthorized Resources",
        "code": "// Express Authorization: Handling 403 Forbidden vs 404 Not Found for Unauthorized Resources\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "API Gateway Authorization vs Microservice Internal Authorization",
    "question": "What authorization checks should occur at the API Gateway versus inside downstream Express microservices?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "api-gateway",
      "microservices",
      "defense-in-depth"
    ],
    "interviewAnswer": "The API Gateway performs Coarse-Grained authorization: verifying JWT signatures, checking rate limits, and validating general role scopes (e.g. has \"USER\" role). The downstream Express microservice performs Fine-Grained authorization: checking resource ownership, business domain rules, and entity-specific attribute access.",
    "answer": "Defense-in-depth ensures that even if internal traffic bypasses the gateway, services remain protected.",
    "explanation": "Defense-in-depth ensures that even if internal traffic bypasses the gateway, services remain protected.",
    "importantPoints": [
      "Gateway handles coarse-grained role/scope validation.",
      "Microservices handle fine-grained ownership and domain rules.",
      "Provides defense-in-depth."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "API Gateway Authorization vs Microservice Internal Authorization",
        "code": "// Express Authorization: API Gateway Authorization vs Microservice Internal Authorization\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Feature-Level Authorization Middleware",
    "question": "How do you restrict routes based on SaaS subscription tiers (e.g. Free vs Pro vs Enterprise)?",
    "difficulty": "medium",
    "questionType": "SaaS",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "saas-tiers",
      "subscription",
      "feature-gating"
    ],
    "interviewAnswer": "Create requireSubscription(\"ANALYTICS_EXPORT\"): inspects req.user.tenant.plan. If the plan does not include the required feature entitlement, return 403 Forbidden with { code: \"UPGRADE_REQUIRED\", upgradeUrl: \"/billing/upgrade\" }. Downstream controllers only execute for paying subscribers.",
    "answer": "Centralizing subscription entitlement checks in middleware keeps billing logic decoupled from business domain controllers.",
    "explanation": "Centralizing subscription entitlement checks in middleware keeps billing logic decoupled from business domain controllers.",
    "importantPoints": [
      "Gates routes based on tenant subscription plan.",
      "Returns actionable upgrade prompts in 403 response.",
      "Decouples feature gating from controller code."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Feature-Level Authorization Middleware",
        "code": "// Express Authorization: Feature-Level Authorization Middleware\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Contextual Authorization: IP-Restricted Role Enforcement",
    "question": "How do you enforce that SuperAdmin actions can only be authorized when executed from specific company network IPs?",
    "difficulty": "medium",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "ip-restriction",
      "contextual-auth",
      "admin"
    ],
    "interviewAnswer": "In the authorize(\"SUPERADMIN\") middleware, verify: if (req.user.role === \"SUPERADMIN\" && !companyIpList.includes(req.ip)) return res.status(403).json({ error: \"Superadmin actions restricted to corporate network\" }). Even if superadmin credentials are stolen, attackers outside the corporate VPN cannot execute high-privilege operations.",
    "answer": "Provides contextual authorization beyond simple credentials.",
    "explanation": "Provides contextual authorization beyond simple credentials.",
    "importantPoints": [
      "Evaluates client IP alongside user credentials.",
      "Restricts high-privilege roles to corporate VPNs.",
      "Blocks credential-stuffing against admin accounts."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Contextual Authorization: IP-Restricted Role Enforcement",
        "code": "// Express Authorization: Contextual Authorization: IP-Restricted Role Enforcement\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Rate-Limited Authorization Challenges (Step-Up Authentication)",
    "question": "How does Step-Up Authentication enforce re-authentication before sensitive mutations (e.g. changing bank payout)?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "step-up-auth",
      "re-authentication",
      "sudo-mode"
    ],
    "interviewAnswer": "Require a fresh authentication marker: check req.user.authTime. If (Date.now() - req.user.authTime > 5 * 60 * 1000), return 403 with { code: \"REAUTH_REQUIRED\" }. The client prompts the user to re-enter their password or biometrics (like GitHub Sudo Mode), receives a fresh short-lived sudo token, and retries the sensitive action.",
    "answer": "Prevents unauthorized actions if a user leaves their laptop unlocked in a coffee shop.",
    "explanation": "Prevents unauthorized actions if a user leaves their laptop unlocked in a coffee shop.",
    "importantPoints": [
      "Enforces re-entry of password/biometrics for high-risk actions.",
      "Checks recent authentication timestamp (sudo mode).",
      "Prevents physical device hijacking."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Rate-Limited Authorization Challenges (Step-Up Authentication)",
        "code": "// Express Authorization: Rate-Limited Authorization Challenges (Step-Up Authentication)\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Authorizing File Downloads with Pre-Signed URLs",
    "question": "Why should Express offload large authorized file downloads to Cloud Object Storage (S3) via Pre-Signed URLs?",
    "difficulty": "medium",
    "questionType": "Cloud Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "s3",
      "presigned-urls",
      "performance"
    ],
    "interviewAnswer": "Instead of streaming gigabytes through Express (saturating Node server bandwidth), Express checks user authorization: if (canAccess(req.user, fileId)), it generates an AWS S3 Pre-Signed GET URL with a 5-minute expiry and redirects the client (res.redirect(presignedUrl)). The browser downloads the file directly from S3 CDN, while Express enforces authorization with zero bandwidth cost.",
    "answer": "Express handles authorization in 5ms, and S3 handles multi-gigabyte data transfer.",
    "explanation": "Express handles authorization in 5ms, and S3 handles multi-gigabyte data transfer.",
    "importantPoints": [
      "Express verifies authorization in milliseconds.",
      "Issues short-lived S3 Pre-Signed URL.",
      "Eliminates file download bandwidth and CPU from Node server."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Authorizing File Downloads with Pre-Signed URLs",
        "code": "// Express Authorization: Authorizing File Downloads with Pre-Signed URLs\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Preventing Mass Assignment via Request Whitelisting Middleware",
    "question": "How does parameter whitelisting middleware prevent unauthorized privilege escalation?",
    "difficulty": "easy",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "mass-assignment",
      "whitelisting",
      "security"
    ],
    "interviewAnswer": "A filterRequestBody([\"title\", \"description\"]) middleware deletes unapproved fields from req.body before handlers execute. If a user submits { role: \"ADMIN\", title: \"Test\" }, the role field is discarded, preventing unauthorized privilege escalation when saving to the database.",
    "answer": "Never pass unfiltered `req.body` to ORM update methods.",
    "explanation": "Never pass unfiltered `req.body` to ORM update methods.",
    "importantPoints": [
      "Whitelists permitted editable fields.",
      "Discards unapproved privilege fields.",
      "Prevents mass assignment attacks."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Preventing Mass Assignment via Request Whitelisting Middleware",
        "code": "// Express Authorization: Preventing Mass Assignment via Request Whitelisting Middleware\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Decoupling Permission Checking with Domain Guard Functions",
    "question": "Why should permission checking be isolated in pure domain guard functions rather than embedded in controllers?",
    "difficulty": "easy",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "domain-guards",
      "clean-code",
      "unit-testing"
    ],
    "interviewAnswer": "Pure domain guard functions (canEditOrder(user, order): boolean) are decoupled from Express req and res objects. They can be unit tested with simple mock objects in milliseconds, reused across WebSocket handlers, background workers, and CLI scripts, and keep controllers thin and readable.",
    "answer": "Controllers should simply call `if (!canEditOrder(req.user, order)) throw new ForbiddenError()`.",
    "explanation": "Controllers should simply call `if (!canEditOrder(req.user, order)) throw new ForbiddenError()`.",
    "importantPoints": [
      "Pure functions decoupled from req/res.",
      "Easily unit tested without mocking Express.",
      "Reused across background workers and API routes."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Decoupling Permission Checking with Domain Guard Functions",
        "code": "// Express Authorization: Decoupling Permission Checking with Domain Guard Functions\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Auditing and Logging Authorization Denials",
    "question": "Why must authorization failures (403) be logged with detailed context for security monitoring?",
    "difficulty": "easy",
    "questionType": "Observability",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "security-logging",
      "audit",
      "intrusion-detection"
    ],
    "interviewAnswer": "Authorization failures indicate users attempting actions outside their granted permissions—often signs of compromised accounts, malicious penetration testing, or broken frontend logic. Logging userId, role, requestedUrl, action, and client IP alerts security operations centers (SOC) to potential internal or external attacks.",
    "answer": "Regularly monitor spikes in 403 Forbidden errors in APM dashboards.",
    "explanation": "Regularly monitor spikes in 403 Forbidden errors in APM dashboards.",
    "importantPoints": [
      "Tracks unauthorized access attempts.",
      "Provides intrusion detection metrics.",
      "Identifies broken frontend permission sync."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Auditing and Logging Authorization Denials",
        "code": "// Express Authorization: Auditing and Logging Authorization Denials\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "WebSocket Authorization Handshakes in Express Apps",
    "question": "How should authorization be enforced for WebSocket connections (ws / socket.io) sharing an Express server?",
    "difficulty": "medium",
    "questionType": "WebSockets",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "websockets",
      "socket-io",
      "handshake"
    ],
    "interviewAnswer": "Enforce authorization during the initial HTTP upgrade handshake: verify JWT or session cookie passed in handshake headers/query. If unauthorized, reject the handshake immediately before the TCP connection upgrades to WebSocket. Once connected, scope message handlers to the verified user identity.",
    "answer": "Rejecting invalid connections at the HTTP upgrade handshake prevents unauthorized clients from consuming persistent socket memory.",
    "explanation": "Rejecting invalid connections at the HTTP upgrade handshake prevents unauthorized clients from consuming persistent socket memory.",
    "importantPoints": [
      "Authenticate during initial HTTP upgrade handshake.",
      "Rejects unauthorized sockets before connection opens.",
      "Attaches user identity to socket instance."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "WebSocket Authorization Handshakes in Express Apps",
        "code": "// Express Authorization: WebSocket Authorization Handshakes in Express Apps\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Dynamic Role Assignment and Privilege Demotion Gotchas",
    "question": "Why can caching user roles in stateless JWTs cause delayed privilege revocation, and how is this solved?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "jwt-caching",
      "role-revocation",
      "staleness"
    ],
    "interviewAnswer": "If a user's role is demoted from ADMIN to USER in the database, but their active JWT still contains role: \"ADMIN\", they retain admin privileges until the token expires (up to 15 minutes). Solutions: 1) Keep access token lifespans ultra-short (5 minutes); 2) Maintain a fast Redis cache of user roles checked during high-risk authorization guards; 3) Publish role change events that revoke active token families.",
    "answer": "High-risk operations (e.g. deleting users, billing updates) should verify current role against Redis or database rather than relying blindly on JWT claims.",
    "explanation": "High-risk operations (e.g. deleting users, billing updates) should verify current role against Redis or database rather than relying blindly on JWT claims.",
    "importantPoints": [
      "Stateless tokens contain stale role claims.",
      "Short token lifespans reduce vulnerability window.",
      "Check live Redis role for high-risk operations."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Dynamic Role Assignment and Privilege Demotion Gotchas",
        "code": "// Express Authorization: Dynamic Role Assignment and Privilege Demotion Gotchas\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Authorization for Micro Frontends (MFE)",
    "question": "How do backend Express APIs enforce authorization consistently across independent Micro Frontends?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "micro-frontends",
      "api-contracts"
    ],
    "interviewAnswer": "Micro Frontends should not invent independent permission rules; they should receive permitted actions from a central permissions endpoint: GET /api/auth/me/permissions. Express enforces the authoritative rules on every backend request, while frontends simply toggle UI elements based on the returned permission array.",
    "answer": "The backend is always the single source of truth; frontend permission checks are strictly cosmetic.",
    "explanation": "The backend is always the single source of truth; frontend permission checks are strictly cosmetic.",
    "importantPoints": [
      "Backend is authoritative source of truth.",
      "Expose GET /me/permissions for frontend UI toggles.",
      "Never trust client-side permission claims."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Authorization for Micro Frontends (MFE)",
        "code": "// Express Authorization: Authorization for Micro Frontends (MFE)\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Summary: The Principles of Secure Authorization Architecture",
    "question": "What are the core design principles of an impenetrable Express authorization layer?",
    "difficulty": "easy",
    "questionType": "Summary",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "summary",
      "principles",
      "least-privilege"
    ],
    "interviewAnswer": "1) Principle of Least Privilege (grant minimal required access); 2) Never trust client input (always verify ownership against req.user.id); 3) Distinguish 401 Unauthorized from 403 Forbidden; 4) Defense-in-depth (gateway validation + microservice ownership validation); 5) Strict input whitelisting to eliminate mass assignment.",
    "answer": "Robust authorization prevents unauthorized data leakage, IDOR vulnerabilities, and privilege escalation.",
    "explanation": "Robust authorization prevents unauthorized data leakage, IDOR vulnerabilities, and privilege escalation.",
    "importantPoints": [
      "Enforce Least Privilege.",
      "Always check resource ownership (prevent IDOR).",
      "Differentiate 401 and 403.",
      "Enforce defense-in-depth across layers."
    ],
    "commonMistakes": [
      "Confusing 401 and 403 or failing to verify resource ownership."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Summary: The Principles of Secure Authorization Architecture",
        "code": "// Express Authorization: Summary: The Principles of Secure Authorization Architecture\nconst checkAccess = (req, res, next) => { next(); };"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "expressjs",
    "topicSlug": "authorization",
    "title": "Relationship-Based Access Control (ReBAC / Zanzibar) in Express",
    "question": "How do you implement Relationship-Based Access Control (ReBAC) inspired by Google Zanzibar in an Express application?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "expressjs",
      "authorization",
      "rebac",
      "zanzibar",
      "graph-authorization"
    ],
    "interviewAnswer": "ReBAC models authorization as graph relationship tuples (user, relation, object). In Express, authorization middleware queries a relationship engine (like OpenFGA or Ory Keto) to evaluate dynamic sharing and hierarchical access.",
    "answer": "ReBAC in Express:\n\n1. Models relationships such as user:123 is viewer of document:456.\n2. ReBAC middleware runs fga.check({ tuple_key: { user, relation, object } }).\n3. Decouples complex multi-tenant sharing logic from Express route handlers into high-performance graph checks.",
    "codeExamples": [
      {
        "language": "typescript",
        "title": "Example 1",
        "code": "const { allowed } = await fga.check({ tuple_key: { user: `user:${req.user.id}`, relation, object: `doc:${req.params.id}` } });\nif (!allowed) return res.status(403).json({ error: 'Access denied' });"
      }
    ]
  }
];
