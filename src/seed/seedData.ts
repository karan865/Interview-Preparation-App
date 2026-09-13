import { TechnologyCategory } from '../models/Technology';

export interface SeedTechnology {
  name: string;
  slug: string;
  category: TechnologyCategory;
  description: string;
  order: number;
}

export interface SeedTopic {
  technologySlug: string;
  name: string;
  slug: string;
  description: string;
  order: number;
}

export interface SeedPreparationLevel {
  name: string;
  slug: string;
  description: string;
  order: number;
}

export const seedPreparationLevels: SeedPreparationLevel[] = [
  {
    name: 'Foundation',
    slug: 'foundation',
    description: 'Core programming concepts, syntax, and foundational understanding',
    order: 1,
  },
  {
    name: 'Junior',
    slug: 'junior',
    description: 'Day-to-day practical implementations, standard APIs, and common patterns',
    order: 2,
  },
  {
    name: 'Intermediate',
    slug: 'intermediate',
    description: 'Component architecture, state management, asynchronous patterns, and API design',
    order: 3,
  },
  {
    name: 'Advanced',
    slug: 'advanced',
    description: 'Performance optimization, internal engine mechanics, security, and complex debugging',
    order: 4,
  },
  {
    name: 'Expert',
    slug: 'expert',
    description: 'System design, scalability, distributed architecture, and reliability engineering',
    order: 5,
  },
];

export const seedTechnologies: SeedTechnology[] = [
  {
    name: 'JavaScript',
    slug: 'javascript',
    category: 'frontend',
    description: 'Core ECMAScript language mechanics, scoping, event loop, asynchronous programming, prototypes, and modern ES6+ features.',
    order: 1,
  },
  {
    name: 'TypeScript',
    slug: 'typescript',
    category: 'frontend',
    description: 'Static type system, interfaces, generic programming, utility types, type narrowing, and modern compiler configurations.',
    order: 2,
  },
  {
    name: 'React',
    slug: 'react',
    category: 'frontend',
    description: 'Component-based UI library covering rendering, hooks, state management, performance, and modern application patterns.',
    order: 3,
  },
  {
    name: 'HTML',
    slug: 'html',
    category: 'frontend',
    description: 'Semantic document markup, accessibility (a11y), forms, browser APIs, and modern HTML5 platform standards.',
    order: 4,
  },
  {
    name: 'CSS',
    slug: 'css',
    category: 'frontend',
    description: 'Styling and layout architecture covering Box Model, Flexbox, Grid, animations, specificity, and responsive design.',
    order: 5,
  },
  {
    name: 'Node.js',
    slug: 'nodejs',
    category: 'backend',
    description: 'Server-side JavaScript runtime covering libuv event loop, streams, buffers, file systems, and scalable network architectures.',
    order: 6,
  },
  {
    name: 'Express.js',
    slug: 'expressjs',
    category: 'backend',
    description: 'Fast, minimalist web framework for Node.js covering middleware pipelines, routing, authentication, API security, and error handling.',
    order: 7,
  },
  {
    name: 'MongoDB',
    slug: 'mongodb',
    category: 'database',
    description: 'Document-oriented NoSQL database covering CRUD, compound indexing, Aggregation Framework, data modeling, and transaction management.',
    order: 8,
  },
  {
    name: 'SQL',
    slug: 'sql',
    category: 'database',
    description: 'Relational database management covering query optimization, joins, constraints, indexes, ACID transactions, and schema normalization.',
    order: 9,
  },
  {
    name: 'Git',
    slug: 'git',
    category: 'other',
    description: 'Distributed version control system covering branching workflows, merging, rebasing, stash management, and collaborative git practices.',
    order: 10,
  },
];

export const seedTopics: SeedTopic[] = [
  // 1. JavaScript Topics
  { technologySlug: 'javascript', name: 'Fundamentals', slug: 'fundamentals', description: 'Data types, coercion, operators, and basic JS execution.', order: 1 },
  { technologySlug: 'javascript', name: 'Variables & Scope', slug: 'variables-scope', description: 'var, let, const, hoisting, lexical scope, and closures.', order: 2 },
  { technologySlug: 'javascript', name: 'Functions', slug: 'functions', description: 'Function declarations, expressions, arrow functions, this keyword, call/apply/bind.', order: 3 },
  { technologySlug: 'javascript', name: 'Objects & Arrays', slug: 'objects-arrays', description: 'Object methods, prototypes, shallow vs deep copying, and array manipulation.', order: 4 },
  { technologySlug: 'javascript', name: 'Asynchronous JavaScript', slug: 'asynchronous-javascript', description: 'Callbacks, asynchronous workflows, and timers.', order: 5 },
  { technologySlug: 'javascript', name: 'Promises & Async/Await', slug: 'promises-async-await', description: 'Promise states, chaining, combinators (all, allSettled, race), and async/await syntax.', order: 6 },
  { technologySlug: 'javascript', name: 'Event Loop', slug: 'event-loop', description: 'Call stack, microtasks vs macrotasks, and asynchronous execution order.', order: 7 },
  { technologySlug: 'javascript', name: 'DOM & Browser', slug: 'dom-browser', description: 'DOM traversal, event bubbling/capturing, delegation, and browser storage.', order: 8 },
  { technologySlug: 'javascript', name: 'ES6+ Features', slug: 'es6-features', description: 'Destructuring, spread/rest, template literals, optional chaining, and nullish coalescing.', order: 9 },
  { technologySlug: 'javascript', name: 'Advanced JavaScript', slug: 'advanced-javascript', description: 'Memory management, garbage collection, generators, and proxy/reflect.', order: 10 },

  // 2. TypeScript Topics
  { technologySlug: 'typescript', name: 'TypeScript Basics', slug: 'typescript-basics', description: 'Type annotations, compilation process, and basic configuration.', order: 1 },
  { technologySlug: 'typescript', name: 'Types', slug: 'types', description: 'Primitives, unions, intersections, literal types, and any vs unknown vs never.', order: 2 },
  { technologySlug: 'typescript', name: 'Interfaces & Type Aliases', slug: 'interfaces-type-aliases', description: 'Differences, declaration merging, extension syntax, and best practices.', order: 3 },
  { technologySlug: 'typescript', name: 'Functions', slug: 'functions', description: 'Function types, optional parameters, overloads, and rest parameters.', order: 4 },
  { technologySlug: 'typescript', name: 'Generics', slug: 'generics', description: 'Generic functions, classes, interfaces, and generic constraints.', order: 5 },
  { technologySlug: 'typescript', name: 'Utility Types', slug: 'utility-types', description: 'Partial, Required, Readonly, Pick, Omit, Record, and ReturnType.', order: 6 },
  { technologySlug: 'typescript', name: 'Narrowing & Type Guards', slug: 'narrowing-type-guards', description: 'typeof, instanceof, in operator, and custom user-defined type predicates.', order: 7 },
  { technologySlug: 'typescript', name: 'Classes', slug: 'classes', description: 'Access modifiers, abstract classes, parameter properties, and inheritance.', order: 8 },
  { technologySlug: 'typescript', name: 'Modules', slug: 'modules', description: 'Import/export, module resolution, namespaces, and ambient declarations (.d.ts).', order: 9 },
  { technologySlug: 'typescript', name: 'Advanced TypeScript', slug: 'advanced-typescript', description: 'Conditional types, mapped types, template literal types, and infer keyword.', order: 10 },

  // 3. React Topics
  { technologySlug: 'react', name: 'React Fundamentals', slug: 'react-fundamentals', description: 'Declarative UI, Virtual DOM, and basic React mental models.', order: 1 },
  { technologySlug: 'react', name: 'Components & JSX', slug: 'components-jsx', description: 'Functional components, JSX syntax rules, and component composition.', order: 2 },
  { technologySlug: 'react', name: 'Props & State', slug: 'props-state', description: 'Unidirectional data flow, immutable state updates, and prop passing.', order: 3 },
  { technologySlug: 'react', name: 'Forms', slug: 'forms', description: 'Synthetic events, controlled vs uncontrolled inputs, form validation, and submission handling.', order: 4 },
  { technologySlug: 'react', name: 'Hooks', slug: 'hooks', description: 'useState, useEffect, useRef, useMemo, useCallback, and custom hooks.', order: 5 },
  { technologySlug: 'react', name: 'Context API', slug: 'context-api', description: 'createContext, Provider, useContext, and prop drilling prevention.', order: 6 },
  { technologySlug: 'react', name: 'Rendering', slug: 'rendering', description: 'Reconciliation, Fiber engine, keys, and component render lifecycle.', order: 7 },
  { technologySlug: 'react', name: 'Performance', slug: 'performance', description: 'React.memo, useMemo, useCallback, code-splitting (lazy/Suspense), and virtualization.', order: 8 },
  { technologySlug: 'react', name: 'State Management', slug: 'state-management', description: 'Lifting state, Redux patterns, Zustand, and client vs server state.', order: 9 },
  { technologySlug: 'react', name: 'Advanced React', slug: 'advanced-react', description: 'Portals, error boundaries, HOCs, and React 19 compiler features.', order: 10 },

  // 4. HTML Topics
  { technologySlug: 'html', name: 'HTML Fundamentals', slug: 'html-fundamentals', description: 'Document structure, doctype, head/body tags, and attributes.', order: 1 },
  { technologySlug: 'html', name: 'Semantic HTML', slug: 'semantic-html', description: 'header, nav, main, article, section, footer, and semantic importance.', order: 2 },
  { technologySlug: 'html', name: 'Forms', slug: 'forms', description: 'Form elements, input types, attributes, validation, and submission.', order: 3 },
  { technologySlug: 'html', name: 'Accessibility', slug: 'accessibility', description: 'ARIA roles, alt text, focus management, and screen reader support.', order: 4 },
  { technologySlug: 'html', name: 'Tables & Lists', slug: 'tables-lists', description: 'Table tags (thead, tbody, tr, th, td) and ordered/unordered lists.', order: 5 },
  { technologySlug: 'html', name: 'Media', slug: 'media', description: 'img, video, audio, picture, and responsive image strategies (srcset).', order: 6 },
  { technologySlug: 'html', name: 'SEO Basics', slug: 'seo-basics', description: 'Meta tags, Open Graph, canonical tags, and structured heading hierarchy.', order: 7 },
  { technologySlug: 'html', name: 'Browser APIs', slug: 'browser-apis', description: 'Geolocation, Web Storage, Canvas, and History API.', order: 8 },
  { technologySlug: 'html', name: 'HTML5 Features', slug: 'html5-features', description: 'Semantic elements, microdata, web workers, and modern browser standards.', order: 9 },

  // 5. CSS Topics
  { technologySlug: 'css', name: 'CSS Fundamentals', slug: 'css-fundamentals', description: 'Syntax, inclusion methods, cascade, and CSS inheritance.', order: 1 },
  { technologySlug: 'css', name: 'Selectors', slug: 'selectors', description: 'Class, ID, attribute, combinators, pseudo-classes, and pseudo-elements.', order: 2 },
  { technologySlug: 'css', name: 'Box Model', slug: 'box-model', description: 'Content, padding, border, margin, and box-sizing (border-box).', order: 3 },
  { technologySlug: 'css', name: 'Flexbox', slug: 'flexbox', description: 'flex-direction, justify-content, align-items, flex-wrap, and flex-grow/shrink.', order: 4 },
  { technologySlug: 'css', name: 'Grid', slug: 'grid', description: 'grid-template-columns, fr units, grid-gap, repeat, and grid areas.', order: 5 },
  { technologySlug: 'css', name: 'Positioning', slug: 'positioning', description: 'static, relative, absolute, fixed, sticky, and z-index stacking contexts.', order: 6 },
  { technologySlug: 'css', name: 'Responsive Design', slug: 'responsive-design', description: 'Media queries, viewport units, mobile-first approach, and fluid typography.', order: 7 },
  { technologySlug: 'css', name: 'Animations & Transitions', slug: 'animations-transitions', description: 'transition properties, @keyframes, transform, and GPU acceleration.', order: 8 },
  { technologySlug: 'css', name: 'Specificity', slug: 'specificity', description: 'Specificity calculation, importance of !important, and CSS source order.', order: 9 },
  { technologySlug: 'css', name: 'Modern CSS', slug: 'modern-css', description: 'CSS custom properties (variables), clamp(), subgrid, and CSS nesting.', order: 10 },

  // 6. Node.js Topics
  { technologySlug: 'nodejs', name: 'Node.js Fundamentals', slug: 'nodejs-fundamentals', description: 'V8 engine, single-threaded architecture, and non-blocking I/O model.', order: 1 },
  { technologySlug: 'nodejs', name: 'Modules', slug: 'modules', description: 'CommonJS (require/exports) vs ES Modules (import/export).', order: 2 },
  { technologySlug: 'nodejs', name: 'npm & Packages', slug: 'npm-packages', description: 'package.json, semantic versioning, package-lock.json, and npm scripts.', order: 3 },
  { technologySlug: 'nodejs', name: 'File System', slug: 'file-system', description: 'fs module, synchronous vs asynchronous file methods, and path resolution.', order: 4 },
  { technologySlug: 'nodejs', name: 'Event Loop', slug: 'event-loop', description: 'Libuv phases: timers, pending callbacks, poll, check, close, and process.nextTick.', order: 5 },
  { technologySlug: 'nodejs', name: 'Streams', slug: 'streams', description: 'Readable, Writable, Duplex, Transform streams, piping, and backpressure.', order: 6 },
  { technologySlug: 'nodejs', name: 'Buffers', slug: 'buffers', description: 'Binary data allocation, buffer methods, and memory management.', order: 7 },
  { technologySlug: 'nodejs', name: 'HTTP', slug: 'http', description: 'http/https modules, creating servers, headers, and request/response streams.', order: 8 },
  { technologySlug: 'nodejs', name: 'Error Handling', slug: 'error-handling', description: 'Synchronous vs async errors, uncaughtException, and unhandledRejection.', order: 9 },
  { technologySlug: 'nodejs', name: 'Performance', slug: 'performance', description: 'Cluster module, worker threads, memory leaks, and CPU profiling.', order: 10 },
  { technologySlug: 'nodejs', name: 'Advanced / Production', slug: 'advanced-production', description: 'Clustering, worker threads, child processes, observability, graceful shutdown, and microservices.', order: 11 },

  // 7. Express.js Topics
  { technologySlug: 'expressjs', name: 'Express Fundamentals', slug: 'express-fundamentals', description: 'Application setup, listening, and basic request lifecycle.', order: 1 },
  { technologySlug: 'expressjs', name: 'Routing', slug: 'routing', description: 'Route methods, path parameters, query strings, and express.Router.', order: 2 },
  { technologySlug: 'expressjs', name: 'Middleware', slug: 'middleware', description: 'Application, router, third-party, and built-in middleware execution chain.', order: 3 },
  { technologySlug: 'expressjs', name: 'Request & Response', slug: 'request-response', description: 'req.body, req.params, req.query, res.json, res.status, and headers.', order: 4 },
  { technologySlug: 'expressjs', name: 'Error Handling', slug: 'error-handling', description: 'Error-handling middleware (err, req, res, next) and async error propagation.', order: 5 },
  { technologySlug: 'expressjs', name: 'Authentication', slug: 'authentication', description: 'Session-based auth, JWT access/refresh token rotation, and cookie handling.', order: 6 },
  { technologySlug: 'expressjs', name: 'Authorization', slug: 'authorization', description: 'Role-based access control (RBAC), permissions, and protected routes.', order: 7 },
  { technologySlug: 'expressjs', name: 'Validation', slug: 'validation', description: 'Input validation and schema parsing with libraries like Zod or Joi.', order: 8 },
  { technologySlug: 'expressjs', name: 'API Design', slug: 'api-design', description: 'REST conventions, status code usage, pagination, filtering, and versioning.', order: 9 },
  { technologySlug: 'expressjs', name: 'Security', slug: 'security', description: 'Helmet, CORS configuration, rate limiting, and SQL/NoSQL injection prevention.', order: 10 },

  // 8. MongoDB Topics
  { technologySlug: 'mongodb', name: 'MongoDB Fundamentals', slug: 'mongodb-fundamentals', description: 'NoSQL document model, BSON format, and MongoDB architecture.', order: 1 },
  { technologySlug: 'mongodb', name: 'Documents & Collections', slug: 'documents-collections', description: 'Collection structure, BSON data types, and ObjectId format.', order: 2 },
  { technologySlug: 'mongodb', name: 'CRUD', slug: 'crud', description: 'insertOne, insertMany, find, updateOne, updateMany, and delete operations.', order: 3 },
  { technologySlug: 'mongodb', name: 'Query Operators', slug: 'query-operators', description: 'Comparison ($eq, $gt, $in), logical ($and, $or), and array operators.', order: 4 },
  { technologySlug: 'mongodb', name: 'Indexes', slug: 'indexes', description: 'Single-field, compound indexes, ESR rule, unique indexes, and executionStats.', order: 5 },
  { technologySlug: 'mongodb', name: 'Aggregation', slug: 'aggregation', description: 'Aggregation pipeline: $match, $group, $lookup, $unwind, and $project.', order: 6 },
  { technologySlug: 'mongodb', name: 'Schema Design', slug: 'schema-design', description: 'Embedding vs referencing, 1:1, 1:N, and N:N data modeling patterns.', order: 7 },
  { technologySlug: 'mongodb', name: 'Relationships', slug: 'relationships', description: 'Mongoose population, manual references, and denormalization trade-offs.', order: 8 },
  { technologySlug: 'mongodb', name: 'Transactions', slug: 'transactions', description: 'Multi-document ACID transactions, sessions, and commit/abort protocols.', order: 9 },
  { technologySlug: 'mongodb', name: 'Performance', slug: 'performance', description: 'Explain plans, COLLSCAN vs IXSCAN, capped collections, and write concerns.', order: 10 },

  // 9. SQL Topics
  { technologySlug: 'sql', name: 'SQL Fundamentals', slug: 'sql-fundamentals', description: 'Relational databases, tables, rows, columns, and primary keys.', order: 1 },
  { technologySlug: 'sql', name: 'SELECT & Filtering', slug: 'select-filtering', description: 'SELECT, WHERE, ORDER BY, LIMIT, LIKE, and NULL handling.', order: 2 },
  { technologySlug: 'sql', name: 'Joins', slug: 'joins', description: 'INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN, and self joins.', order: 3 },
  { technologySlug: 'sql', name: 'Aggregations', slug: 'aggregations', description: 'COUNT, SUM, AVG, MIN, MAX, GROUP BY, and HAVING clause.', order: 4 },
  { technologySlug: 'sql', name: 'Subqueries', slug: 'subqueries', description: 'Correlated subqueries, EXISTS, IN, and Common Table Expressions (CTEs).', order: 5 },
  { technologySlug: 'sql', name: 'Constraints', slug: 'constraints', description: 'PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, and CHECK constraints.', order: 6 },
  { technologySlug: 'sql', name: 'Indexes', slug: 'indexes', description: 'B-Tree indexes, clustered vs non-clustered, and composite indexes.', order: 7 },
  { technologySlug: 'sql', name: 'Transactions', slug: 'transactions', description: 'ACID properties (Atomicity, Consistency, Isolation, Durability) and isolation levels.', order: 8 },
  { technologySlug: 'sql', name: 'Normalization', slug: 'normalization', description: 'Database normalization (1NF, 2NF, 3NF, BCNF) and denormalization.', order: 9 },
  { technologySlug: 'sql', name: 'Query Optimization', slug: 'query-optimization', description: 'EXPLAIN plans, avoiding full table scans, and index tuning.', order: 10 },

  // 10. Git Topics
  { technologySlug: 'git', name: 'Git Fundamentals', slug: 'git-fundamentals', description: 'Working directory, staging area, local repository, and remote repository.', order: 1 },
  { technologySlug: 'git', name: 'Commits', slug: 'commits', description: 'git add, git commit, commit messages, and inspecting commit history with git log.', order: 2 },
  { technologySlug: 'git', name: 'Branches', slug: 'branches', description: 'Creating, switching, deleting branches, and branching strategies (Git Flow, Trunk-based).', order: 3 },
  { technologySlug: 'git', name: 'Merging', slug: 'merging', description: 'Fast-forward merges, three-way merge commits, and merge flags.', order: 4 },
  { technologySlug: 'git', name: 'Rebasing', slug: 'rebasing', description: 'git rebase, interactive rebase (squashing), and merge vs rebase differences.', order: 5 },
  { technologySlug: 'git', name: 'Remote Repositories', slug: 'remote-repositories', description: 'git remote, git fetch, git pull, and git push.', order: 6 },
  { technologySlug: 'git', name: 'Conflict Resolution', slug: 'conflict-resolution', description: 'Identifying merge/rebase conflicts, resolving conflict markers, and continuing.', order: 7 },
  { technologySlug: 'git', name: 'Stashing', slug: 'stashing', description: 'git stash, pop, apply, drop, and saving WIP changes cleanly.', order: 8 },
  { technologySlug: 'git', name: 'Reset & Revert', slug: 'reset-revert', description: 'git reset (soft, mixed, hard) vs git revert for undoing changes.', order: 9 },
  { technologySlug: 'git', name: 'Git Best Practices', slug: 'git-best-practices', description: 'Atomic commits, conventional commit format, .gitignore rules, and tags.', order: 10 },
];


import { allSeedQuestions } from './content';

export { allSeedQuestions } from './content';
export const seedSampleQuestions = allSeedQuestions;
