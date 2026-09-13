# Developer Interview Revision & Knowledge Base API

A production-ready, modular REST API designed specifically for developers to revise interview knowledge, retain practical engineering experience, and store personal notes, comparisons, implementation flows, and code examples.

Built with **Node.js**, **Express.js**, **TypeScript**, **MongoDB**, and **Mongoose**.

## 📚 Detailed Documentation in `/docs`
- **[Canonical Question JSON Format](./docs/CANONICAL_QUESTION_FORMAT.md)**
- **[Master Summary & Functionality Map](./docs/SUMMARY.md)**
- **[Backend Architecture & Technical Design](./docs/BACKEND_ARCHITECTURE.md)**
- **[Complete API Reference & Payloads](./docs/API_DOCUMENTATION.md)**
- **[Frontend & Mobile Integration Guide](./docs/FRONTEND_INTEGRATION_GUIDE.md)**

---

## 🌟 Core Product Idea

This is **not** a generic interview-question site. It is a structured **Interview Revision & Personal Knowledge Base System** that models how senior developers actually prepare:

```
Technology (React, Node.js, MongoDB, Docker, AWS...)
   ↓
Experience / Preparation Level (Foundation, Junior, Intermediate, Advanced, Expert)
   ↓
Topic (Hooks, Event Loop, Aggregation, Queues...)
   ↓
Question / Concept
   ↓
Answer & Rich Notes (Comparisons, Implementation Flows, Code Snippets, Interview Tips)
   ↓
User Revision Tracking (Known, Review, Weak, Saved)
```

### 💡 Rich Technical & Practical Questions
Standard interview databases flatten everything into plain text paragraphs. This backend supports rich, specialized question structures:
- **Comparison Tables**: Contrast tricky concepts side-by-side (e.g. `useState` vs `useRef`, SQL vs NoSQL).
- **Implementation Flows / Steps**: Multi-step workflows (e.g. JWT Refresh Token rotation flow, Docker multi-stage CI/CD).
- **Code Snippets**: Syntax-highlighted code blocks with language and explanations.
- **Interview Answers**: Exactly how to explain the concept concisely to an interviewer.
- **Interview Tips & Common Mistakes**: Key caveats and follow-up traps to avoid.
- **Source & Attribution**: Tagging content as `ai-generated`, `curated`, `web-research`, `manually-added`, or `imported`.

---

## 🛠 Tech Stack

- **Runtime**: Node.js (ES2022)
- **Language**: TypeScript 5 (Strict Mode)
- **Web Framework**: Express.js
- **Database & ODM**: MongoDB & Mongoose 8
- **Authentication**: JWT (`jsonwebtoken`) & password hashing (`bcryptjs`)
- **Validation**: Zod (Schema validation on body, params, and queries)
- **Security**: Helmet security headers, CORS origin handling
- **Testing**: Jest, Supertest, and `mongodb-memory-server`
- **Zero-Friction Dev DB**: Automatically connects to local MongoDB; if unreachable, gracefully spins up an embedded in-memory database.

---

## 📁 Project Structure

```
d:/1. programmins/2/
├── requests.http              # HTTP Client tests for all endpoints
├── .env.example               # Environment variables template
├── .env                       # Active environment configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies and npm scripts
├── jest.config.js             # Jest test configuration
├── src/
│   ├── app.ts                 # Express application & global middleware
│   ├── server.ts              # HTTP server bootstrap & DB listener
│   ├── config/
│   │   ├── env.ts             # Typed environment configuration
│   │   └── database.ts        # Mongoose connection with embedded fallback
│   ├── models/
│   │   ├── Technology.ts      # Categories (frontend, backend, database, devops)
│   │   ├── Topic.ts           # Sub-topics under technologies
│   │   ├── PreparationLevel.ts# Configurable levels (Foundation to Expert)
│   │   ├── Question.ts        # Flexible questions with rich note structures
│   │   ├── User.ts            # User accounts with roles (user, admin)
│   │   ├── UserQuestionProgress.ts # Revision state (known, review, weak, saved)
│   │   └── index.ts           # Barrel export
│   ├── middleware/
│   │   ├── auth.middleware.ts # requireAuth and optionalAuth
│   │   ├── admin.middleware.ts# Role-based admin access control
│   │   ├── validate.ts        # Zod validation middleware
│   │   └── error.middleware.ts# Centralized error handler
│   ├── validators/
│   │   ├── auth.validator.ts
│   │   ├── question.validator.ts
│   │   ├── progress.validator.ts
│   │   └── admin.validator.ts
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── question.service.ts
│   │   ├── progress.service.ts
│   │   ├── revision.service.ts# Smart algorithms: weak, quick, interview-prep
│   │   ├── dashboard.service.ts# User progress analytics & metrics
│   │   └── import.service.ts  # Bulk JSON import with duplicate detection
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── technology.controller.ts
│   │   ├── topic.controller.ts
│   │   ├── preparationLevel.controller.ts
│   │   ├── question.controller.ts
│   │   ├── progress.controller.ts
│   │   ├── revision.controller.ts
│   │   ├── dashboard.controller.ts
│   │   ├── search.controller.ts
│   │   └── admin.controller.ts
│   ├── routes/
│   │   ├── index.ts           # Root router
│   │   ├── auth.routes.ts
│   │   ├── technology.routes.ts
│   │   ├── topic.routes.ts
│   │   ├── preparationLevel.routes.ts
│   │   ├── question.routes.ts
│   │   ├── progress.routes.ts
│   │   ├── revision.routes.ts
│   │   ├── dashboard.routes.ts
│   │   ├── search.routes.ts
│   │   └── admin.routes.ts
│   ├── seed/
│   │   ├── seedData.ts        # General-purpose technical interview technologies, topics, and canonical questions
│   │   └── seeder.ts          # Database seeder and safe reset runner
│   ├── utils/
│   │   ├── apiResponse.ts     # Standardized JSON response envelope
│   │   ├── apiError.ts        # Operational error class
│   │   ├── pagination.ts      # Pagination helpers
│   │   └── slugify.ts         # URL-friendly slug generator
│   └── tests/
│       └── api.test.ts        # Complete automated integration tests
```

---

## 🚀 Getting Started

### 1. Installation
```bash
npm install
```

### 2. Environment Setup
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Configuration options:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://127.0.0.1:27017/interview_revision_db
JWT_SECRET=super_secret_interview_revision_jwt_key_change_in_production
JWT_EXPIRES_IN=7d
CORS_ORIGIN=*
ADMIN_NAME=Admin Developer
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=AdminPassword123!
```

> **Note on MongoDB**: If a local MongoDB daemon is not running on port 27017, the application automatically boots an in-memory MongoDB instance for zero-friction development and testing.

### 3. Seed Database & Safe Content Reset
To seed or reset interview content without deleting user accounts:
```bash
# Safely reset and re-seed public technical interview content
npm run seed:reset

# Standard non-destructive seed
npm run seed
```

Default credentials:
- **Admin**: `admin@example.com` / `AdminPassword123!`

### 4. Run Development Server
```bash
npm run dev
```
Server runs at `http://localhost:5000`.

### 5. Run Tests
```bash
npm test
```
Runs 22 comprehensive integration tests covering Auth, Questions, Filtering, Progress, Revision, Analytics, and Admin Bulk Import.

### 6. Production Build
```bash
npm run build
npm start
```

---

## 📖 API Reference

All successful responses follow the standard envelope:
```json
{
  "success": true,
  "data": { ... }
}
```
All errors return:
```json
{
  "success": false,
  "message": "Error message",
  "errors": [ ... ]
}
```

---

### 🔑 Authentication (`/api/auth`)

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register a new user | Public |
| `POST` | `/api/auth/login` | Login and receive JWT | Public |
| `GET` | `/api/auth/me` | Get current authenticated user profile | User |
| `PUT` | `/api/auth/preferences` | Update selected technologies & prep level | User |

---

### 🏷️ Technologies & Metadata (`/api/technologies`, `/api/topics`, `/api/preparation-levels`)

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/technologies` | List all active technologies (optional `?category=frontend`) |
| `GET` | `/api/technologies/:idOrSlug` | Get single technology by slug or ID |
| `GET` | `/api/topics` | List topics (optional `?technology=react`) |
| `GET` | `/api/topics/:idOrSlug` | Get single topic by slug or ID |
| `GET` | `/api/preparation-levels` | List preparation levels (Foundation to Expert) |

---

### ❓ Questions (`/api/questions`)

Supports pagination (`?page=1&limit=20`). When called with `Authorization: Bearer <token>`, questions automatically include the user's progress:

```json
"userProgress": {
  "status": "weak",
  "isSaved": true,
  "reviewCount": 3,
  "lastReviewedAt": "2026-09-08T18:00:00.000Z"
}
```

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/questions` | List questions with filters (`technology`, `level`, `topic`, `difficulty`, `questionType`, `isImportant`, `search`, `page`, `limit`) |
| `GET` | `/api/questions/:id` | Get question details with related questions and comparisons |
| `GET` | `/api/questions/saved` | Get all questions bookmarked by the user |
| `POST` | `/api/questions/:questionId/save` | Bookmark a question |
| `DELETE` | `/api/questions/:questionId/save` | Remove bookmark |

---

### 📈 User Progress (`/api/progress`)

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/progress/:questionId` | Mark question status (`known`, `weak`, `review`). Increments review count and updates `lastReviewedAt`. | User |
| `DELETE` | `/api/progress/:questionId` | Reset progress for a question | User |

---

### 🎯 Smart Revision Suite (`/api/revision`)

Designed for practical interview revision:

#### 1. Revise Weak Questions (`GET /api/revision/weak`)
Returns questions the user specifically marked as `weak`.
- **Query Params**: `technology`, `topic`, `preparationLevel`, `page`, `limit`.

#### 2. Quick Revision (`GET /api/revision/quick`)
Returns a deterministic, balanced set of questions:
- **40%** Weak questions
- **30%** Review questions
- **20%** Important questions (`isImportant: true`) not yet mastered
- **10%** Questions not recently practiced
- **Query Params**: `technology`, `preparationLevel`, `limit` (default: 10).

#### 3. Rapid "Interview Tomorrow" Prep (`GET /api/revision/interview-prep`)
Powers a **"30-Minute Rapid Revision"** mobile screen before an interview.
- **Prioritization Logic**:
  1. Weak questions in the selected technologies
  2. Review questions
  3. High-yield Important questions
  4. Unpracticed questions
- **Query Params**: `technologies` (comma-separated or array), `preparationLevel`, `limit` (default: 20).

---

### 📊 Dashboard Analytics (`GET /api/dashboard`)

Returns complete revision metrics for the authenticated user:
```json
{
  "success": true,
  "data": {
    "totalQuestions": 45,
    "completedQuestions": 18,
    "savedQuestions": 6,
    "weakQuestions": 5,
    "reviewQuestions": 7,
    "overallProgressPercentage": 40,
    "technologyProgress": [
      {
        "technologyId": "...",
        "name": "React",
        "slug": "react",
        "category": "frontend",
        "totalQuestions": 12,
        "known": 6,
        "weak": 2,
        "review": 3,
        "completionPercentage": 50
      }
    ],
    "weakTopics": [
      {
        "topicId": "...",
        "topicName": "Hooks",
        "topicSlug": "hooks",
        "technologyName": "React",
        "weakCount": 2
      }
    ],
    "recentQuestions": [ ... ]
  }
}
```

---

### 🔍 Search (`GET /api/search?q=closure`)

Performs text search across `question`, `title`, `answer`, `explanation`, and `tags` using compound MongoDB text indexes.

---

### 🛡️ Admin & Bulk Question Import (`/api/admin`)

All admin routes require JWT with `role: "admin"`.

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/admin/technologies` | Create technology |
| `PUT` | `/api/admin/technologies/:id` | Update technology |
| `DELETE` | `/api/admin/technologies/:id` | Delete technology |
| `POST` | `/api/admin/topics` | Create topic |
| `PUT` | `/api/admin/topics/:id` | Update topic |
| `DELETE` | `/api/admin/topics/:id` | Delete topic |
| `POST` | `/api/admin/questions` | Create question |
| `PUT` | `/api/admin/questions/:id` | Update question |
| `DELETE` | `/api/admin/questions/:id` | Delete question |
| `PATCH` | `/api/admin/questions/:id/publish` | Publish question |
| `PATCH` | `/api/admin/questions/:id/archive` | Archive question |
| `POST` | `/api/admin/questions/import` | Bulk import questions from JSON |

#### Bulk Import Features (`POST /api/admin/questions/import`):
- **Automatic Name Resolution**: Automatically resolves `"technology": "React"` and `"topic": "Hooks"` into MongoDB ObjectIDs (creates them if they do not exist).
- **Duplicate Detection**: Prevents importing identical questions under the same technology.
- **Strict Validation**: Validates every question with Zod before insertion.
- **Detailed Summary**:
```json
{
  "success": true,
  "data": {
    "inserted": 25,
    "skipped": 2,
    "errors": []
  }
}
```

---

## 📱 Mobile App (React Native) Integration

This backend was architected from the ground up for clean consumption by a future React Native application:
1. **Lightweight Envelopes**: Consistent `{ success, data }` response contracts.
2. **Deterministic Endpoints**: Dedicated endpoints for "Quick Revision" and "Interview Tomorrow" eliminate complex client-side filtering logic on mobile devices.
3. **Optimistic Offline Sync Ready**: Progress state uses timestamped records (`lastReviewedAt`, `updatedAt`) to easily support future offline sync protocols.
