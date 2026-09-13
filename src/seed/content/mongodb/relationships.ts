import { SeedQuestion } from '../types';

export const relationshipsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "One-to-One (1:1) Relationships: Embedding vs Separate Collections",
    "question": "When should a One-to-One (1:1) relationship be modeled as an embedded subdocument versus a separate referenced collection?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "one-to-one",
      "embedding",
      "referencing"
    ],
    "interviewAnswer": "In MongoDB, 1:1 relationships should almost always be embedded within the parent document (e.g. user and userProfile) to achieve atomic updates and zero-join reads. The only exceptions for referencing are: 1) Sensitive security data (e.g. isolating password hashes or KYC documents with separate database permissions); 2) Infrequently accessed massive payloads (e.g. user bio/resume) to keep the primary document small in the WiredTiger cache.",
    "answer": "Embedding is the natural default for 1:1 relationships in document databases. Keeping the related entity in the same document guarantees single-seek reads and eliminates $lookup operations.\n\nExceptions warranting a separate collection for 1:1:\n- Cache Efficiency: If the parent document is read 100,000 times/sec (e.g. basic user session), keeping rarely read large subdocuments (e.g. 50KB user medical history) in a separate collection preserves RAM.\n- Field-Level Security & Role-Based Access: Storing high-privilege credentials or billing details in a separate collection allows strict collection-level RBAC rules in MongoDB.",
    "explanation": "Remember: In MongoDB, data that is accessed together should be stored together.",
    "importantPoints": [
      "Embedding is the default for 1:1 relationships for atomic writes and fast reads.",
      "Separate collections are used when child fields contain sensitive data requiring separate access roles.",
      "Separation prevents infrequently accessed large payloads from bloating the primary working set."
    ],
    "commonMistakes": [
      "Automatically creating separate collections for every 1:1 entity due to relational habits.",
      "Embedding massive, rarely read 1:1 documents into hot, high-frequency collections."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "1:1 Embedded Relationship",
        "code": "const userDoc = {\n  _id: ObjectId(\"64a11...\"),\n  username: \"jdoe\",\n  email: \"jdoe@example.com\",\n  profile: {\n    bio: \"Software Engineer\",\n    theme: \"dark\",\n    notificationsEnabled: true\n  }\n};"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "One-to-Many (1:N) Modeling: 1-to-Few vs 1-to-Many vs 1-to-Squillions",
    "question": "How do you categorize and model One-to-Many (1:N) relationships based on cardinality?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "one-to-many",
      "cardinality",
      "data-modeling"
    ],
    "interviewAnswer": "MongoDB categorizes 1:N into 3 distinct cardinalities: 1) One-to-Few (dozens of children, e.g. user addresses) -> Embed as an array of subdocuments; 2) One-to-Many (hundreds to thousands of children, e.g. parts in a machine) -> Reference by storing an array of child IDs in parent or parentId in child; 3) One-to-Squillions (tens of thousands to millions, e.g. IoT logs or social followers) -> Reference by strictly storing the parentId in each child document (Inverted Reference).",
    "answer": "Cardinality dictates the physical storage pattern:\n- One-to-Few: Array of embedded subdocuments. Bounded, safe from 16MB limit, fetched in one read.\n- One-to-Many: Referenced. Can use Two-Way referencing or an array of child references in the parent if bounded under ~1,000 items.\n- One-to-Squillions: Never store an array in the parent document. Each child document stores `parentId: ObjectId(\"...\")`. Fetching children is performed using `db.logs.find({ parentId: id }).sort({ timestamp: -1 }).limit(50)` supported by an index on `{ parentId: 1, timestamp: -1 }`.",
    "explanation": "Storing millions of references in an array will crash the parent document once it reaches 16MB.",
    "importantPoints": [
      "1-to-Few: Embed as an array of subdocuments.",
      "1-to-Many: Reference using foreign key arrays or child collections.",
      "1-to-Squillions: Must store parentId in child; never embed array in parent.",
      "Always calculate the maximum potential growth rate before embedding arrays."
    ],
    "commonMistakes": [
      "Embedding unbounded arrays that grow without limit until the document crashes at 16MB.",
      "Normalizing 1-to-Few relationships and forcing slow $lookups for simple 2-item arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "One-to-Squillions: Inverted Parent Reference",
        "code": "// Parent Collection: Device\nconst device = {\n  _id: ObjectId(\"64d99...\"),\n  model: \"WeatherStation-Pro\",\n  location: \"Tower 4\"\n};\n\n// Child Collection: Logs (Millions of documents, child points to parent)\nconst sensorLog = {\n  _id: ObjectId(\"64d9a...\"),\n  deviceId: ObjectId(\"64d99...\"), // Inverted reference\n  temperature: 24.2,\n  humidity: 61.5,\n  timestamp: ISODate(\"2026-09-10T00:30:00Z\")\n};"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Many-to-Many (M:N) Relationships: Array of References vs Junction Collections",
    "question": "How should Many-to-Many (M:N) relationships be modeled in MongoDB, and when is a Junction Collection necessary?",
    "difficulty": "medium",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "many-to-many",
      "junction-collection",
      "referencing"
    ],
    "interviewAnswer": "In MongoDB, standard M:N relationships (e.g. Authors and Books) store an array of foreign keys directly in one or both documents (e.g. book.authorIds: [id1, id2]). A separate Junction Collection (like in SQL) is ONLY necessary when the relationship itself has significant descriptive metadata (e.g. date joined, role, permissions, grade) or when both sides have massive, unbounded cardinality.",
    "answer": "1. Array of References (Preferred & Idiomatic):\nStore `studentIds: [id1, id2]` in Course, or `courseIds: [id1, id2]` in Student. In MongoDB, querying `db.courses.find({ studentIds: studentId })` uses a standard multikey index with extreme speed, completely bypassing the need for a join table.\n\n2. Junction Collection (Edge Collection):\nUsed when the relationship itself is an entity. Example: `Enrollment` containing `{ studentId, courseId, semester: \"Fall 2026\", grade: \"A\", enrolledAt: ISODate() }`. Also required if both sides could have hundreds of thousands of associations.",
    "explanation": "Unlike relational databases where multi-value arrays are prohibited by 1NF, MongoDB's native arrays and multikey indexes make arrays of references the default, high-performance approach.",
    "importantPoints": [
      "Arrays of foreign keys replace junction tables for standard M:N relationships.",
      "Multikey indexes make array-of-reference queries fast and single-seek.",
      "Junction collections are reserved for relationships carrying metadata (e.g. timestamps, status, permissions).",
      "Avoid two-way unbounded arrays to prevent simultaneous 16MB blowups."
    ],
    "commonMistakes": [
      "Creating empty junction tables with only two foreign key fields out of SQL habit.",
      "Allowing both sides of a two-way M:N relationship to grow unbounded."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "M:N Array of References vs Junction Document",
        "code": "// Idiomatic M:N: Books store array of Author IDs\nconst book = {\n  _id: ObjectId(\"64e...\"),\n  title: \"Modern Distributed Systems\",\n  authorIds: [ ObjectId(\"64a...\"), ObjectId(\"64b...\") ]\n};\n\n// Junction Document: When relationship carries its own state\nconst enrollment = {\n  _id: ObjectId(\"64f...\"),\n  studentId: ObjectId(\"64a...\"),\n  courseId: ObjectId(\"64c...\"),\n  registeredDate: ISODate(\"2026-08-15\"),\n  letterGrade: \"A+\",\n  creditsEarned: 4\n};"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Manual References vs DBRefs in MongoDB",
    "question": "What is the difference between Manual References and DBRefs in MongoDB, and why are DBRefs discouraged?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "dbref",
      "manual-references",
      "best-practices"
    ],
    "interviewAnswer": "Manual References store the target document's _id directly (e.g. authorId: ObjectId(\"...\")). DBRefs are formalized subdocuments containing $ref (collection name), $id (document id), and optional $db (database name). DBRefs are strongly discouraged in modern MongoDB because manual references are simpler, consume less storage, and work seamlessly with $lookup aggregation.",
    "answer": "1. Manual Reference:\n`{ authorId: ObjectId(\"64a...\") }`.\nApplication code or `$lookup` knows which collection to query. Lean, fast, idiomatic.\n\n2. DBRef:\n`{ author: { \"$ref\": \"authors\", \"$id\": ObjectId(\"64a...\"), \"$db\": \"appDb\" } }`.\nIntroduced in early MongoDB to allow referencing documents across different collections dynamically.\n\nWhy DBRefs are deprecated/discouraged:\n- Official MongoDB documentation explicitly recommends manual references over DBRefs.\n- `$lookup` cannot easily join DBRefs without complex expressions.\n- Consumes extra storage and wire bandwidth.\n- Cross-database references break sharding and transaction boundaries.",
    "explanation": "Modern drivers and ODM frameworks (like Mongoose) use manual references with schema-level model declarations (`ref: \"Author\"`).",
    "importantPoints": [
      "Manual references store just the _id field; DBRefs store $ref, $id, and $db.",
      "Official MongoDB guidelines deprecate DBRefs in favor of manual references.",
      "Manual references are fully compatible with $lookup aggregation pipelines.",
      "DBRefs add unnecessary complexity and storage overhead."
    ],
    "commonMistakes": [
      "Using DBRefs in new projects assuming they provide relational foreign key enforcement.",
      "Attempting to run standard $lookup on DBRef subdocuments without custom pipeline handling."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Manual Reference vs DBRef",
        "code": "// RECOMMENDED: Manual Reference\nconst postWithManualRef = {\n  _id: ObjectId(\"64a1...\"),\n  title: \"Understanding Indexes\",\n  authorId: ObjectId(\"64f9...\") // Clean, indexed, $lookup-ready\n};\n\n// DISCOURAGED: DBRef Subdocument\nconst postWithDBRef = {\n  _id: ObjectId(\"64a2...\"),\n  title: \"Legacy Document\",\n  author: {\n    $ref: \"authors\",\n    $id: ObjectId(\"64f9...\"),\n    $db: \"production\"\n  }\n};"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Referential Integrity: Handling Cascading Deletes and Orphans",
    "question": "How do you enforce referential integrity and cascading deletes in MongoDB without database-level foreign keys?",
    "difficulty": "medium",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "referential-integrity",
      "cascading-deletes",
      "orphans"
    ],
    "interviewAnswer": "MongoDB does not enforce foreign keys or cascading deletes at the database engine level. Referential integrity must be managed via: 1) Application logic wrapped in multi-document transactions (e.g. delete parent and all children within a single transaction); 2) ODM middleware hooks (e.g. Mongoose pre/post deleteOne hooks); 3) Asynchronous background jobs or Change Streams that detect deleted parents and clean up orphan documents.",
    "answer": "Without engine foreign key constraints, deleting an `author` leaves dangling `authorId` references in `books`.\n\nTechniques to maintain integrity:\n1. Multi-Document Transactions: Atomically delete parent and matching child documents:\n```javascript\nconst session = client.startSession();\nawait session.withTransaction(async () => {\n  await db.users.deleteOne({ _id: userId }, { session });\n  await db.orders.deleteMany({ customerId: userId }, { session });\n});\n```\n2. Change Streams: An event handler listens to `users.watch()` for `\"delete\"` operations and issues bulk deletes to child collections asynchronously.\n3. Soft Deletes: Marking the parent `isDeleted: true` naturally cascades without deleting records.",
    "explanation": "In many document designs, embedding eliminates the cascade problem entirely: deleting the parent document automatically deletes all embedded children in a single atomic operation.",
    "importantPoints": [
      "MongoDB does not have native ON DELETE CASCADE foreign key constraints.",
      "Embedding child data solves cascading deletion automatically.",
      "Use multi-document transactions when atomic multi-collection deletes are mandatory.",
      "Change streams provide asynchronous eventual consistency for child cleanup."
    ],
    "commonMistakes": [
      "Assuming MongoDB will automatically prevent deleting a referenced parent document.",
      "Deleting parent records without cleaning up child collections, causing orphaned data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Atomic Cascading Delete using Multi-Document Transaction",
        "code": "async function deleteAccountCascade(userId) {\n  const session = client.startSession();\n  try {\n    await session.withTransaction(async () => {\n      // 1. Delete user profile\n      await db.users.deleteOne({ _id: userId }, { session });\n      // 2. Cascade delete all user sessions\n      await db.sessions.deleteMany({ userId }, { session });\n      // 3. Reassign or delete user workspaces\n      await db.workspaces.deleteMany({ ownerId: userId }, { session });\n    });\n  } finally {\n    await session.endSession();\n  }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Populate in Mongoose: Mechanics and Performance Cost",
    "question": "How does Mongoose populate() work under the hood, and what performance trade-offs does it introduce?",
    "difficulty": "medium",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "mongoose",
      "populate",
      "performance"
    ],
    "interviewAnswer": "Mongoose populate() does NOT execute a database-level join; it executes multiple separate find() queries behind the scenes (e.g. fetching 100 orders, extracting all unique customerIds, and issuing db.customers.find({ _id: { $in: [...] } })). While convenient, deep or unconstrained populate calls introduce network latency and high Node.js memory consumption compared to native $lookup.",
    "answer": "Mongoose collects IDs and makes secondary round-trips. For high-throughput endpoints, native aggregation with `$lookup` or denormalization (Extended Reference Pattern) is substantially faster and avoids building heavy Mongoose document instances in memory.",
    "explanation": "Mongoose collects IDs and makes secondary round-trips. For high-throughput endpoints, native aggregation with `$lookup` or denormalization (Extended Reference Pattern) is substantially faster and avoids building heavy Mongoose document instances in memory.",
    "importantPoints": [
      "Populate issues additional find() queries from Node.js; it is not a database join.",
      "Introduces extra network round trips and deserialization overhead.",
      "Prefer $lookup or denormalization for latency-critical API routes."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Populate in Mongoose: Mechanics and Performance Cost",
        "code": "// Relationship pattern: Populate in Mongoose: Mechanics and Performance Cost\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Circular References in Document Schemas",
    "question": "What issues arise when documents maintain circular references to each other, and how do you resolve them?",
    "difficulty": "medium",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "circular-references",
      "serialization",
      "deadlocks"
    ],
    "interviewAnswer": "Circular references (e.g. Department points to Manager, and Manager points to Department) cause infinite loops during JSON serialization, complicate transactional updates (risking deadlocks), and complicate cascade deletes. Resolve by breaking the loop: make the reference strictly one-way, or store an embedded reference in one direction only.",
    "answer": "If Department stores `managerId`, Manager does not need to store `departmentId` if Manager already belongs to the department. Or maintain the primary link on Department and query managers dynamically.",
    "explanation": "If Department stores `managerId`, Manager does not need to store `departmentId` if Manager already belongs to the department. Or maintain the primary link on Department and query managers dynamically.",
    "importantPoints": [
      "Circular references crash JSON serializers with circular structure errors.",
      "Increases write deadlock probability in multi-document transactions.",
      "Enforce strict single-direction ownership."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Circular References in Document Schemas",
        "code": "// Relationship pattern: Circular References in Document Schemas\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Cross-Collection Joins with Sharded Collections",
    "question": "What are the restrictions on using $lookup when one or both collections are sharded?",
    "difficulty": "hard",
    "questionType": "Sharding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "sharding",
      "lookup",
      "distributed-joins"
    ],
    "interviewAnswer": "In modern MongoDB (5.1+), the \"from\" collection in a $lookup can be sharded. However, if the joined collection is sharded, MongoDB cannot execute a local join on the primary shard; mongos or the primary shard must broadcast and coordinate data across shards, incurring heavy network data movement (scatter-gather join).",
    "answer": "For optimal performance in sharded clusters, co-locate related documents on the same shard by using the same shard key (e.g. tenantId), or embed related data to avoid distributed cross-shard joins.",
    "explanation": "For optimal performance in sharded clusters, co-locate related documents on the same shard by using the same shard key (e.g. tenantId), or embed related data to avoid distributed cross-shard joins.",
    "importantPoints": [
      "Supported in MongoDB 5.1+, but incurs heavy network coordination.",
      "Scatter-gather joins across shards severely degrade throughput.",
      "Co-locate data using shared shard keys or embed directly."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Cross-Collection Joins with Sharded Collections",
        "code": "// Relationship pattern: Cross-Collection Joins with Sharded Collections\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Bi-Directional vs Uni-Directional Relationships",
    "question": "What criteria dictate whether a relationship should be bi-directional or uni-directional?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "unidirectional",
      "bidirectional",
      "data-modeling"
    ],
    "interviewAnswer": "Keep relationships uni-directional unless the application frequently navigates the relationship in both directions with strict O(1) latency requirements. Uni-directional links require updating only a single document during writes. Bi-directional links introduce double-write overhead, consistency drift risks, and transaction requirements.",
    "answer": "Always favor uni-directional relationships (e.g. Order points to User). The User side can always query its orders via `db.orders.find({ userId })` using an index on `userId`. Maintaining `orders: [id1, id2]` on User adds zero value and creates unbounded array bugs.",
    "explanation": "Always favor uni-directional relationships (e.g. Order points to User). The User side can always query its orders via `db.orders.find({ userId })` using an index on `userId`. Maintaining `orders: [id1, id2]` on User adds zero value and creates unbounded array bugs.",
    "importantPoints": [
      "Uni-directional relationships require single-document writes.",
      "Bi-directional references risk synchronization bugs.",
      "Use indexed queries on the child to replace bi-directional parent arrays."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Bi-Directional vs Uni-Directional Relationships",
        "code": "// Relationship pattern: Bi-Directional vs Uni-Directional Relationships\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Handling Orphaned References with Event-Driven Cleanup",
    "question": "How can message queues or event buses maintain relationship cleanup across distributed microservices?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "event-driven",
      "microservices",
      "orphans",
      "kafka"
    ],
    "interviewAnswer": "In a microservices architecture where Users and Orders live in separate databases or services, MongoDB cannot perform foreign key checks or cross-service transactions. When a User is deleted, the User Service emits a UserDeleted event to a message broker (Kafka/RabbitMQ); the Order Service consumes this event and archives or cleans up all associated orders asynchronously.",
    "answer": "This decouples services, ensures eventual consistency, and prevents long-running distributed transactions from blocking the user-facing deletion endpoint.",
    "explanation": "This decouples services, ensures eventual consistency, and prevents long-running distributed transactions from blocking the user-facing deletion endpoint.",
    "importantPoints": [
      "Microservices cannot share MongoDB transactions.",
      "Publish domain events (UserDeleted) to Kafka/RabbitMQ.",
      "Subscribing services clean up local references asynchronously."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling Orphaned References with Event-Driven Cleanup",
        "code": "// Relationship pattern: Handling Orphaned References with Event-Driven Cleanup\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Denormalizing Immutable Data in Relationships",
    "question": "Why is denormalizing relationship data considered safe and optimal when the referenced entity is immutable?",
    "difficulty": "easy",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "immutability",
      "denormalization",
      "orders"
    ],
    "interviewAnswer": "When referenced data never changes (immutable, e.g. a completed transaction, a snapshot of shipping address at order time, or historical flight telemetry), the primary drawback of denormalization—update anomalies and data inconsistency—is completely eliminated. You get all the performance benefits of zero-join reads with zero maintenance cost.",
    "answer": "An order should never reference a mutable address document. If the user moves next year, past shipping slips must not change. Copying the address directly into the order document is both faster and legally correct.",
    "explanation": "An order should never reference a mutable address document. If the user moves next year, past shipping slips must not change. Copying the address directly into the order document is both faster and legally correct.",
    "importantPoints": [
      "Immutable data has zero risk of update anomalies.",
      "Denormalization gives zero-join read speed.",
      "Mandatory for financial ledgers, audit logs, and invoicing."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Denormalizing Immutable Data in Relationships",
        "code": "// Relationship pattern: Denormalizing Immutable Data in Relationships\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Self-Referencing Relationships for Category Trees",
    "question": "How do you design a self-referencing relationship for multi-level product categories?",
    "difficulty": "medium",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "self-referencing",
      "categories",
      "trees"
    ],
    "interviewAnswer": "Model each category document with a parentId field referencing another document in the exact same categories collection: { _id: \"shoes\", parentId: \"apparel\" }. Combined with an ancestors array: { ancestors: [\"root\", \"fashion\", \"apparel\"] }, it enables both immediate parent queries and single-seek subtree searches.",
    "answer": "Using `parentId: null` designates root categories. Indexed on `{ parentId: 1 }` and `{ ancestors: 1 }`, this self-referencing structure satisfies all UI navigation patterns.",
    "explanation": "Using `parentId: null` designates root categories. Indexed on `{ parentId: 1 }` and `{ ancestors: 1 }`, this self-referencing structure satisfies all UI navigation patterns.",
    "importantPoints": [
      "Self-references use the same collection namespace.",
      "Combine with ancestors array for fast tree traversal.",
      "Roots have parentId: null."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Self-Referencing Relationships for Category Trees",
        "code": "// Relationship pattern: Self-Referencing Relationships for Category Trees\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Resolving Many-to-Many Relationships with Multi-Collection Aggregation",
    "question": "How do you query a many-to-many relationship using $lookup across three collections?",
    "difficulty": "hard",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "many-to-many",
      "lookup",
      "three-way-join"
    ],
    "interviewAnswer": "When using an explicit junction collection (e.g. Students, Courses, Enrollments), chain two $lookup stages in the aggregation pipeline: the first $lookup joins Enrollments matching the Student, and the second $lookup joins Courses using the courseId array from the unwound enrollments.",
    "answer": "Example:\n`db.students.aggregate([\n  { $match: { _id: studentId } },\n  { $lookup: { from: \"enrollments\", localField: \"_id\", foreignField: \"studentId\", as: \"enrollments\" } },\n  { $unwind: \"$enrollments\" },\n  { $lookup: { from: \"courses\", localField: \"enrollments.courseId\", foreignField: \"_id\", as: \"course\" } },\n  { $unwind: \"$course\" }\n]);`",
    "explanation": "Example:\n`db.students.aggregate([\n  { $match: { _id: studentId } },\n  { $lookup: { from: \"enrollments\", localField: \"_id\", foreignField: \"studentId\", as: \"enrollments\" } },\n  { $unwind: \"$enrollments\" },\n  { $lookup: { from: \"courses\", localField: \"enrollments.courseId\", foreignField: \"_id\", as: \"course\" } },\n  { $unwind: \"$course\" }\n]);`",
    "importantPoints": [
      "Chain multiple $lookup stages sequentially.",
      "Unwind junction records between joins.",
      "Highlight why arrays of references are preferred in MongoDB to avoid 3-way joins."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Resolving Many-to-Many Relationships with Multi-Collection Aggregation",
        "code": "// Relationship pattern: Resolving Many-to-Many Relationships with Multi-Collection Aggregation\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Embedded vs Referenced Comments in a Blogging Platform",
    "question": "How does expected comment volume dictate whether comments are embedded in the Post or stored in a separate collection?",
    "difficulty": "medium",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "comments",
      "cardinality",
      "pagination"
    ],
    "interviewAnswer": "If posts have a known small bound of comments (e.g. internal company wiki, max 20 comments), embedding comments directly inside the Post document is optimal. For public blogs or viral platforms where comments can reach tens of thousands, comments MUST be stored in a separate collection with a postId reference to avoid the 16MB document limit and enable cursor pagination.",
    "answer": "Embedding 10,000 comments into a Post forces every visitor reading the first paragraph to download 5MB of comment text over the wire. Separating comments into their own collection allows clean pagination: `db.comments.find({ postId }).sort({ createdAt: -1 }).limit(20)`.",
    "explanation": "Embedding 10,000 comments into a Post forces every visitor reading the first paragraph to download 5MB of comment text over the wire. Separating comments into their own collection allows clean pagination: `db.comments.find({ postId }).sort({ createdAt: -1 }).limit(20)`.",
    "importantPoints": [
      "Embed only when comment volume is strictly bounded (< 50).",
      "Separate collection required for viral or public comment threads.",
      "Prevents 16MB breach and enables pagination."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Embedded vs Referenced Comments in a Blogging Platform",
        "code": "// Relationship pattern: Embedded vs Referenced Comments in a Blogging Platform\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Extended Reference Pattern with Periodic Synchronization",
    "question": "When using the Extended Reference Pattern on mutable fields, how do you handle data synchronization?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "extended-reference",
      "synchronization",
      "eventual-consistency"
    ],
    "interviewAnswer": "When denormalized fields are mutable (e.g. user profile photo updated, but embedded in 100 recent forum posts), synchronize using: 1) A dual-write transaction if immediate consistency is required; 2) An asynchronous worker triggered by a Change Stream or queue (e.g. updating forum posts in batches of 500); 3) Lazy synchronization (updating the embedded snapshot only when the forum post is next edited).",
    "answer": "In 99% of social applications, eventual consistency is completely acceptable: updating the avatar in the background over 2-3 seconds preserves blazing fast response times for the user.",
    "explanation": "In 99% of social applications, eventual consistency is completely acceptable: updating the avatar in the background over 2-3 seconds preserves blazing fast response times for the user.",
    "importantPoints": [
      "Choose between immediate transactional updates vs eventual consistency.",
      "Change streams trigger background batch synchronization.",
      "Avoid blocking user requests with mass cascade updates."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Extended Reference Pattern with Periodic Synchronization",
        "code": "// Relationship pattern: Extended Reference Pattern with Periodic Synchronization\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Referencing Documents Across Different MongoDB Databases",
    "question": "Can MongoDB relationships and $lookup span across different databases on the same cluster?",
    "difficulty": "medium",
    "questionType": "Feature",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "cross-database",
      "lookup",
      "multi-db"
    ],
    "interviewAnswer": "Prior to MongoDB 5.1, $lookup could only join collections within the SAME database. Starting in MongoDB 5.1, $lookup supports cross-database joins on the same MongoDB instance or cluster by specifying the database namespace or using pipeline syntax. However, cross-database joins cannot span separate physical clusters.",
    "answer": "While technically possible in modern versions, crossing database boundaries is generally discouraged because it entangles database backup, sharding, and security boundaries. Keep related collections in the same database whenever possible.",
    "explanation": "While technically possible in modern versions, crossing database boundaries is generally discouraged because it entangles database backup, sharding, and security boundaries. Keep related collections in the same database whenever possible.",
    "importantPoints": [
      "Supported in MongoDB 5.1+ within the same cluster.",
      "Cannot join across physically distinct MongoDB server instances.",
      "Best practice is keeping related domain entities in the same database."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Referencing Documents Across Different MongoDB Databases",
        "code": "// Relationship pattern: Referencing Documents Across Different MongoDB Databases\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Polymorphic Relationships: Referencing Multiple Types with a Discriminator",
    "question": "How do you model a relationship where a child can point to multiple distinct parent types (e.g. a Comment on a Post OR a Video)?",
    "difficulty": "medium",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "polymorphic",
      "discriminator",
      "comments"
    ],
    "interviewAnswer": "Store both the parentId and a parentType discriminator field in the child document: { commentText: \"Great!\", parentId: ObjectId(\"...\"), parentType: \"VIDEO\" }. To query comments for a video, filter { parentId: videoId, parentType: \"VIDEO\" } backed by a compound index { parentId: 1, parentType: 1 }.",
    "answer": "This allows a single comments collection to serve posts, videos, images, and products seamlessly without separate junction tables for each media type.",
    "explanation": "This allows a single comments collection to serve posts, videos, images, and products seamlessly without separate junction tables for each media type.",
    "importantPoints": [
      "Store parentId alongside parentType discriminator string.",
      "Compound index { parentId: 1, parentType: 1 } covers all lookups.",
      "Avoids duplicating comment schemas across different domain entities."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Polymorphic Relationships: Referencing Multiple Types with a Discriminator",
        "code": "// Relationship pattern: Polymorphic Relationships: Referencing Multiple Types with a Discriminator\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Impact of Sharding on One-to-Many Relationships",
    "question": "How does shard key selection impact how One-to-Many child documents are routed and queried?",
    "difficulty": "hard",
    "questionType": "Sharding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "sharding",
      "shard-key",
      "co-location"
    ],
    "interviewAnswer": "If the child collection is sharded on parentId (e.g. orders sharded on customerId), all orders belonging to the same customer are co-located on the same shard as the customer document. This ensures that parent-child queries hit exactly one shard (targeted query) instead of scattering across the entire cluster.",
    "answer": "If `orders` is sharded on `_id` instead of `customerId`, fetching a customer's orders forces mongos to query every shard in the cluster. Sharding child collections on the parent ID provides optimal query locality.",
    "explanation": "If `orders` is sharded on `_id` instead of `customerId`, fetching a customer's orders forces mongos to query every shard in the cluster. Sharding child collections on the parent ID provides optimal query locality.",
    "importantPoints": [
      "Sharding on parent ID co-locates child data on the same shard.",
      "Avoids scatter-gather cluster queries.",
      "Essential strategy for multi-tenant and customer-centric architectures."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Impact of Sharding on One-to-Many Relationships",
        "code": "// Relationship pattern: Impact of Sharding on One-to-Many Relationships\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Using Indexes on Array of References (Multikey Indexes)",
    "question": "What happens under the hood when you index an array of foreign keys in MongoDB?",
    "difficulty": "medium",
    "questionType": "Indexing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "multikey-index",
      "foreign-keys",
      "arrays"
    ],
    "interviewAnswer": "MongoDB creates a Multikey Index. In a multikey index, the B-tree creates a separate index entry for EVERY individual ObjectId in the array pointing back to the same parent document. A query find({ authorIds: authorId }) performs a direct B-tree search (IXSCAN) with O(log N) efficiency.",
    "answer": "The storage engine treats each array element as an independent pointer. However, remember the constraint: a compound index can contain at most ONE multikey (array) field.",
    "explanation": "The storage engine treats each array element as an independent pointer. However, remember the constraint: a compound index can contain at most ONE multikey (array) field.",
    "importantPoints": [
      "Creates individual B-tree entries for each array element.",
      "Enables fast O(log N) lookups of parent documents containing foreign keys.",
      "Compound indexes cannot include more than one array field."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Using Indexes on Array of References (Multikey Indexes)",
        "code": "// Relationship pattern: Using Indexes on Array of References (Multikey Indexes)\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Soft References: Weak Relationships via String Slugs or External IDs",
    "question": "When should relationships be referenced by domain business keys (slugs/codes) rather than internal ObjectIds?",
    "difficulty": "easy",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "business-keys",
      "slugs",
      "loose-coupling"
    ],
    "interviewAnswer": "Use human-readable business keys (e.g. countryCode: \"US\", currency: \"USD\", or tenantSlug: \"acme-corp\") when the referenced entity is standard, global, or managed externally. This enables human-readable documents, simplifies debugging, and allows querying without joining reference collections.",
    "answer": "Storing `countryCode: \"US\"` allows immediate display and filtering on \"US\" without looking up a country collection. Only use ObjectIds when referential entities are dynamic and internal to your application.",
    "explanation": "Storing `countryCode: \"US\"` allows immediate display and filtering on \"US\" without looking up a country collection. Only use ObjectIds when referential entities are dynamic and internal to your application.",
    "importantPoints": [
      "Business keys provide human-readable document context.",
      "Eliminates lookups for static reference data (currencies, countries).",
      "Reduces coupling between independent domain services."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Soft References: Weak Relationships via String Slugs or External IDs",
        "code": "// Relationship pattern: Soft References: Weak Relationships via String Slugs or External IDs\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Designing Social Network Follower Graphs (Relationships at Scale)",
    "question": "How should a social network follower relationship be modeled to support 100M+ users with extreme asymmetry?",
    "difficulty": "hard",
    "questionType": "System Design",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "social-graph",
      "followers",
      "outliers",
      "scale"
    ],
    "interviewAnswer": "A dedicated followers collection storing { userId, followerId, createdAt } with compound unique indexes on { userId: 1, followerId: 1 } and { followerId: 1, userId: 1 }. For normal users, recent follower counts can be cached with the Computed Pattern; for massive celebrities, use the Outlier Pattern to route timeline fan-outs via message queues (Hybrid Push/Pull).",
    "answer": "Never store `followers: [id1, id2, ...]` in the user document. A celebrity with 50M followers would exceed the 16MB limit by 500x. The separate relationship collection scales infinitely and shards cleanly on `userId`.",
    "explanation": "Never store `followers: [id1, id2, ...]` in the user document. A celebrity with 50M followers would exceed the 16MB limit by 500x. The separate relationship collection scales infinitely and shards cleanly on `userId`.",
    "importantPoints": [
      "Separate collection scales to billions of edges.",
      "Two compound indexes support \"Who follows user X?\" and \"Who is user X following?\".",
      "Avoids array size limits entirely."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Designing Social Network Follower Graphs (Relationships at Scale)",
        "code": "// Relationship pattern: Designing Social Network Follower Graphs (Relationships at Scale)\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Relationship Modeling in CQRS Architectures",
    "question": "How does CQRS (Command Query Responsibility Segregation) influence MongoDB relationship modeling?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "cqrs",
      "read-models",
      "write-models"
    ],
    "interviewAnswer": "In CQRS, the Write Model (Command) uses normalized, atomic structures (referencing, fine-grained documents) to maximize transaction speed and prevent write lock contention. The Read Model (Query) uses completely denormalized, embedded documents pre-assembled by background workers for instantaneous single-document reads without joins.",
    "answer": "MongoDB often acts as the high-performance Read Model in CQRS systems, consuming events from an event store and persisting fully baked view documents tailored to specific UI screens.",
    "explanation": "MongoDB often acts as the high-performance Read Model in CQRS systems, consuming events from an event store and persisting fully baked view documents tailored to specific UI screens.",
    "importantPoints": [
      "Write models favor normalized, lean documents.",
      "Read models favor fully denormalized, pre-joined documents.",
      "Decouples write validation from high-speed read requirements."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Relationship Modeling in CQRS Architectures",
        "code": "// Relationship pattern: Relationship Modeling in CQRS Architectures\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Atomic Array Updates for Embedded 1:N Relationships",
    "question": "How do $push, $pull, and positional operators manage embedded 1:N items atomically?",
    "difficulty": "medium",
    "questionType": "CRUD",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "atomic-updates",
      "push",
      "pull",
      "positional-operator"
    ],
    "interviewAnswer": "MongoDB provides atomic array operators: $push adds child subdocuments; $pull removes subdocuments matching a filter; the positional operator ($) or arrayFilters ($[elem]) updates specific child elements in-place. Because these execute on a single document, the entire relationship mutation is strictly ACID-atomic without transactions.",
    "answer": "Example: Updating an item quantity inside an embedded order:\n`db.orders.updateOne({ _id: orderId, \"items.itemId\": 101 }, { $set: { \"items.$.qty\": 5 } })`.\nGuarantees immediate consistency in a single operation.",
    "explanation": "Example: Updating an item quantity inside an embedded order:\n`db.orders.updateOne({ _id: orderId, \"items.itemId\": 101 }, { $set: { \"items.$.qty\": 5 } })`.\nGuarantees immediate consistency in a single operation.",
    "importantPoints": [
      "$push and $pull add/remove embedded items atomically.",
      "Positional operator ($) updates matching array elements.",
      "Single-document ACID atomicity eliminates multi-document transaction overhead."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Atomic Array Updates for Embedded 1:N Relationships",
        "code": "// Relationship pattern: Atomic Array Updates for Embedded 1:N Relationships\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Data Locality and the Principle of Proximity",
    "question": "What is the Principle of Proximity in document relationship design?",
    "difficulty": "easy",
    "questionType": "Philosophy",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "data-locality",
      "hardware-efficiency",
      "philosophy"
    ],
    "interviewAnswer": "The Principle of Proximity states that data used together in the same business transaction or user screen should be physically stored together in the same disk sector and RAM page. Embedding achieves maximum proximity, minimizing disk head movements, memory page allocations, and network latency.",
    "answer": "In relational databases, assembling an invoice requires reading from 6 different disk tables. In MongoDB, reading a single embedded invoice document streams all lines, customer snapshots, and taxes in one sequential read operation.",
    "explanation": "In relational databases, assembling an invoice requires reading from 6 different disk tables. In MongoDB, reading a single embedded invoice document streams all lines, customer snapshots, and taxes in one sequential read operation.",
    "importantPoints": [
      "Physical co-location reduces CPU cache misses and disk seeks.",
      "Aligns physical storage directly with application access patterns.",
      "The foundational performance advantage of document databases."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Data Locality and the Principle of Proximity",
        "code": "// Relationship pattern: Data Locality and the Principle of Proximity\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "relationships",
    "title": "Auditing Relationship Health: Detecting Dangling Foreign Keys",
    "question": "How can you detect and report orphaned foreign key references across MongoDB collections?",
    "difficulty": "medium",
    "questionType": "Maintenance",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "relationships",
      "orphans",
      "lookup",
      "data-cleaning"
    ],
    "interviewAnswer": "Run an aggregation pipeline using a left outer $lookup against the parent collection, followed by a $match where the joined array is empty ($size: 0 or { parent: null }), identifying child documents whose parent no longer exists.",
    "answer": "Example:\n`db.orders.aggregate([\n  { $lookup: { from: \"users\", localField: \"userId\", foreignField: \"_id\", as: \"user\" } },\n  { $match: { \"user.0\": { $exists: false } } },\n  { $project: { _id: 1, userId: 1 } }\n]);`\nOutputs all orphaned orders whose user was deleted.",
    "explanation": "Example:\n`db.orders.aggregate([\n  { $lookup: { from: \"users\", localField: \"userId\", foreignField: \"_id\", as: \"user\" } },\n  { $match: { \"user.0\": { $exists: false } } },\n  { $project: { _id: 1, userId: 1 } }\n]);`\nOutputs all orphaned orders whose user was deleted.",
    "importantPoints": [
      "Left outer $lookup finds missing foreign key references.",
      "Filter for empty array to isolate orphans.",
      "Useful for periodic data hygiene audits."
    ],
    "commonMistakes": [
      "Over-normalizing or failing to handle orphan data."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Auditing Relationship Health: Detecting Dangling Foreign Keys",
        "code": "// Relationship pattern: Auditing Relationship Health: Detecting Dangling Foreign Keys\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
