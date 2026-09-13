import { SeedQuestion } from '../types';

export const mongodbFundamentalsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Document Data Model vs Relational Model",
    "question": "How does the Document Data Model in MongoDB differ from the Relational Model in SQL databases?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "mongodb",
      "fundamentals",
      "document-model",
      "nosql",
      "comparison"
    ],
    "interviewAnswer": "MongoDB stores data as semi-structured, hierarchical BSON documents in collections, allowing nested objects and arrays that map directly to application code. Relational databases store data in flat two-dimensional tables with fixed schemas and foreign keys, requiring SQL JOINs at read time.",
    "answer": "The MongoDB document data model represents data as rich, self-describing BSON documents. Related data that is accessed together is frequently embedded in a single document, providing high-performance single-read operations without expensive relational joins. SQL databases normalize data across separate tables to prevent redundancy, using foreign key constraints and joins.",
    "explanation": "While SQL requires DDL schema migrations (ALTER TABLE) to add fields, MongoDB supports a polymorphic schema where documents within the same collection can have distinct fields or evolving shapes.",
    "importantPoints": [
      "Documents map naturally to application objects and JSON.",
      "Embedding related data minimizes multi-table relational joins.",
      "Polymorphic schema allows document structures to evolve without downtime.",
      "Provides ACID transactions at single-document level (default) and across multiple documents."
    ],
    "commonMistakes": [
      "Designing MongoDB collections exactly like normalized SQL 3NF tables with foreign keys everywhere.",
      "Assuming MongoDB has no schema validation capabilities (it supports JSON Schema via $jsonSchema).",
      "Over-embedding unbounded arrays, which violates the 16MB document size limit."
    ],
    "codeExamples": [
      {
        "language": "json",
        "title": "Sample MongoDB BSON Document",
        "code": "{\n  \"_id\": { \"$oid\": \"65e21f92a1b2c3d4e5f67890\" },\n  \"username\": \"alex_dev\",\n  \"profile\": {\n    \"firstName\": \"Alex\",\n    \"avatarUrl\": \"https://cdn.example.com/avatar.png\"\n  },\n  \"roles\": [\"admin\", \"developer\"],\n  \"createdAt\": { \"$date\": \"2026-01-15T10:00:00Z\" }\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "BSON vs JSON: Binary Serialization and Type System",
    "question": "What is BSON in MongoDB, and what architectural advantages does it provide over standard JSON?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "bson",
      "json",
      "serialization",
      "data-types"
    ],
    "interviewAnswer": "BSON (Binary JSON) is a binary-encoded serialization format used by MongoDB. Compared to JSON, BSON adds rich data types (such as Date, ObjectId, Decimal128, Binary, Int32, Int64) and includes byte length prefixes for fields, enabling fast sequential traversal without parsing entire strings.",
    "answer": "Standard JSON supports only 6 primitive types: String, Number, Boolean, Null, Array, and Object. It lacks precision for 64-bit integers, exact financial decimals, binary buffers, and timestamps. BSON solves this by encoding explicit type bytes and length headers. Because each element records its byte size, the WiredTiger storage engine can jump over unprojected fields during sequential scans without decoding string tokens.",
    "explanation": "BSON trades a slight increase in storage overhead (due to field name repetition and length prefixes) for massive gains in traversal speed, numeric precision, and native binary handling.",
    "importantPoints": [
      "BSON provides native support for Date, ObjectId, Int32, Int64, Decimal128, and BinData.",
      "Length prefixes allow fast scanning and field skipping without full document parsing.",
      "Ensures numeric precision (distinguishing 32-bit int, 64-bit int, and floating point).",
      "Directly consumed and produced by MongoDB drivers across all languages."
    ],
    "commonMistakes": [
      "Assuming JSON and BSON are completely interchangeable without type converters.",
      "Using standard floating point Number for financial transactions instead of BSON Decimal128.",
      "Thinking BSON is human-readable on disk (it is a binary format; Compass or mongosh converts it to Extended JSON for display)."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "BSON Extended JSON Types in mongosh",
        "code": "db.orders.insertOne({\n  orderId: NumberLong(\"987654321012345\"),      // 64-bit Integer\n  totalAmount: NumberDecimal(\"199.99\"),         // High-precision 128-bit Decimal\n  createdAt: new Date(),                        // ISODate timestamp\n  payload: new BinData(0, \"aGVsbG8=\")           // Raw binary buffer\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "WiredTiger Storage Engine: Architecture and In-Memory Cache",
    "question": "How does the WiredTiger storage engine operate in MongoDB, and how is its internal cache configured?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "wiredtiger",
      "storage-engine",
      "cache",
      "memory"
    ],
    "interviewAnswer": "WiredTiger is MongoDB's default storage engine. It provides document-level concurrency control, transparent data/index compression (Snappy/zlib), checkpoints, and Write-Ahead Logging. Its internal memory cache defaults to 50% of (RAM - 1GB) or 256MB, leaving the remaining memory for the OS filesystem cache and query execution.",
    "answer": "WiredTiger manages in-memory data pages and persistent disk storage: 1) Cache Management: The WiredTiger cache holds uncompressed clean and dirty data pages. The default size is `0.5 * (Total RAM - 1GB)`. 2) Concurrency: Employs lock-free algorithms and optimistic concurrency control, providing document-level write locking rather than collection-level locks. 3) Compression: Compresses collections (default Snappy; optional zlib or zstd) and indexes (prefix compression), reducing storage footprint by 60-80%. 4) Eviction: Background eviction server threads flush dirty pages to disk when cache pressure crosses thresholds (typically 80% full).",
    "explanation": "A common production mistake is running another memory-hungry process (e.g. Node.js or Redis) on the same host without adjusting `storage.wiredTiger.engineConfig.cacheSizeGB`. If MongoDB and Node.js compete for RAM, the OS OOM killer terminates mongod.",
    "importantPoints": [
      "Document-level concurrency control (no collection-level write lock).",
      "Internal cache default: 50% of (RAM - 1GB).",
      "Leaves remaining RAM to OS filesystem page cache for compressed disk I/O buffering.",
      "Supports Snappy, zlib, and zstd block compression."
    ],
    "commonMistakes": [
      "Assuming MongoDB is using too much memory when observing total process RAM (WiredTiger cache + OS cache + connection buffers).",
      "Configuring WiredTiger cache to 90% of total host RAM, starving the OS file cache and causing disk thrashing.",
      "Disabling compression without measuring I/O throughput."
    ],
    "codeExamples": [
      {
        "language": "yaml",
        "title": "WiredTiger Configuration in mongod.conf",
        "code": "storage:\n  dbPath: /var/lib/mongodb\n  journal:\n    enabled: true\n  wiredTiger:\n    engineConfig:\n      cacheSizeGB: 4 # Explicitly allocate 4GB on an 8GB server\n      journalCompressor: snappy\n    collectionConfig:\n      blockCompressor: snappy\n    indexConfig:\n      prefixCompression: true"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Write Concern: Levels and Durability Guarantees",
    "question": "What is Write Concern in MongoDB, and what are the trade-offs between w: 1, w: \"majority\", and j: true?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "write-concern",
      "durability",
      "replication",
      "acid"
    ],
    "interviewAnswer": "Write Concern describes the level of acknowledgment requested from MongoDB before a write operation returns successfully. w: 1 acknowledges write to the Primary only; w: \"majority\" acknowledges write after replication to a majority of voting replica set nodes; j: true ensures the write has been written to the on-disk journal before acknowledgment.",
    "answer": "Write concern controls durability vs latency: 1) `w: 1`: Returns acknowledgment as soon as the standalone or primary node applies the write in memory. Fastest, but if the primary crashes before replicating, data can be rolled back. 2) `w: \"majority\"`: Acknowledges only after the write has been applied to more than 50% of voting replica set members. Guaranteed immune to rollbacks upon failover. 3) `j: true` (Journaling): Mandates that the write is flushed to the on-disk journal file, guaranteeing durability against sudden power failure. 4) `wtimeout`: Sets a timeout in milliseconds to prevent write operations from blocking indefinitely if replica nodes are unreachable.",
    "explanation": "Since MongoDB 5.0, `w: \"majority\"` is the default write concern for all operations. Previously, `w: 1` was default, which led to rare data loss scenarios during unexpected network partitions and primary step-downs.",
    "importantPoints": [
      "w: 1 acknowledges on Primary only (vulnerable to rollbacks on crash).",
      "w: \"majority\" is default in MongoDB 5.0+ (immune to primary election rollbacks).",
      "j: true mandates on-disk journal write before acknowledgment.",
      "Always configure wtimeout when using majority to avoid hanging connections."
    ],
    "commonMistakes": [
      "Using w: \"majority\" without setting wtimeout, causing client requests to freeze if secondaries drop offline.",
      "Using w: 0 (unacknowledged writes) in business applications to gain speed while risking silent write failures.",
      "Thinking w: \"majority\" writes directly to disk on all nodes (it writes to memory on majority nodes; use j: true for disk guarantees)."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Configuring Explicit Write Concern",
        "code": "// Write requiring majority replication + on-disk journal + 5s timeout:\ndb.payments.insertOne(\n  {\n    transactionId: \"TXN-9021\",\n    amount: 450.00,\n    status: \"CONFIRMED\"\n  },\n  {\n    writeConcern: {\n      w: \"majority\",\n      j: true,\n      wtimeout: 5000\n    }\n  }\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Read Concern: local, majority, linearizable, and snapshot",
    "question": "Compare the Read Concern levels in MongoDB: local, available, majority, linearizable, and snapshot.",
    "difficulty": "hard",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "read-concern",
      "consistency",
      "replication",
      "acid"
    ],
    "interviewAnswer": "Read Concern controls the consistency and isolation of data read from replica sets. local returns the node's most recent data without verifying majority acknowledgment. majority returns data committed by a majority of nodes (guaranteed immune to rollbacks). linearizable waits for all concurrent writes to be acknowledged before reading (prevents stale reads). snapshot reads from a point-in-time snapshot, used in multi-document transactions.",
    "answer": "Read concern levels dictate data freshness and isolation: 1) `local`: Default for reads against primary/secondaries. Returns data in memory; does not verify if data has been replicated. Vulnerable to reading data that gets rolled back if primary steps down. 2) `available`: Similar to local, but does not check shard boundary metadata (fastest for un-sharded secondaries). 3) `majority`: Reads data that has been written to a majority of nodes. Immune to failover rollbacks. 4) `linearizable`: Primary confirms with a quorum of nodes that it is still the legitimate primary before returning read results, guaranteeing strict real-time serializability. 5) `snapshot`: Synchronized with multi-document transactions, providing point-in-time read view across shards.",
    "explanation": "Combining `writeConcern: { w: \"majority\" }` with `readConcern: { level: \"majority\" }` guarantees causal consistency across distributed client sessions.",
    "importantPoints": [
      "local: Returns local node data immediately; can be rolled back.",
      "majority: Returns data acknowledged by majority; immune to failover rollback.",
      "linearizable: Highest consistency; avoids stale reads even during network partition split-brain.",
      "snapshot: Point-in-time isolation used inside multi-document transactions."
    ],
    "commonMistakes": [
      "Assuming reading from Primary is always 100% linearizable without readConcern: \"linearizable\".",
      "Using readConcern: \"majority\" without enabling WiredTiger checkpoint storage on secondaries.",
      "Confusing Read Concern (isolation level) with Read Preference (which physical node to query)."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Executing a Query with Majority Read Concern",
        "code": "db.accounts.find({ accountId: \"ACC-101\" })\n  .readConcern(\"majority\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Replica Set Architecture: Primary, Secondary, and Arbiter Nodes",
    "question": "How do MongoDB Replica Sets achieve high availability, and what is the role and risk of Arbiter nodes?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "replica-set",
      "high-availability",
      "arbiter",
      "failover"
    ],
    "interviewAnswer": "A replica set consists of one Primary (receives all writes) and multiple Secondaries (replicate oplog asynchronously). An Arbiter participates in elections to break ties but holds no data. Arbiters save hardware costs but cannot step up to Primary and can cause issues with majority write concerns if nodes fail.",
    "answer": "Replica sets provide automated failover and data redundancy. When a primary crashes, remaining nodes elect a new primary via Raft-like consensus. Arbiters vote in elections but store zero data. However, MongoDB officially discourages Arbiters in modern production because they complicate `w: \"majority\"` acknowledgments and priority elections.",
    "explanation": "Replica sets provide automated failover and data redundancy. When a primary crashes, remaining nodes elect a new primary via Raft-like consensus. Arbiters vote in elections but store zero data. However, MongoDB officially discourages Arbiters in modern production because they complicate `w: \"majority\"` acknowledgments and priority elections.",
    "importantPoints": [
      "Primary receives all writes; Secondaries replicate via Oplog.",
      "Automated failover takes 2-5 seconds.",
      "Arbiters vote but hold no data; discouraged in modern deployments."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Replica Set Architecture: Primary, Secondary, and Arbiter Nodes",
        "code": "// Example demonstration for: Replica Set Architecture: Primary, Secondary, and Arbiter Nodes\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "The Oplog (Operations Log) Mechanics",
    "question": "What is the MongoDB Oplog, where is it stored, and how does secondary replication operate?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "oplog",
      "replication",
      "idempotent"
    ],
    "interviewAnswer": "The Oplog (operations log) is a capped collection (local.oplog.rs) storing an idempotent record of all modifications made to the primary. Secondaries continuously tail the oplog and replay operations asynchronously to stay synchronized with the primary.",
    "answer": "Every write modifying data appends an idempotent operation to `local.oplog.rs`. Even if an update incremented a field (`$inc: { score: 1 }`), the oplog records the deterministic post-image state (`$set: { score: 42 }`). This idempotency ensures that reapplying oplog entries multiple times produces the exact same state.",
    "explanation": "Every write modifying data appends an idempotent operation to `local.oplog.rs`. Even if an update incremented a field (`$inc: { score: 1 }`), the oplog records the deterministic post-image state (`$set: { score: 42 }`). This idempotency ensures that reapplying oplog entries multiple times produces the exact same state.",
    "importantPoints": [
      "Stored in local.oplog.rs as a capped collection.",
      "Idempotent operations ensure deterministic replication.",
      "Oplog window must be large enough to cover secondary maintenance windows."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The Oplog (Operations Log) Mechanics",
        "code": "// Example demonstration for: The Oplog (Operations Log) Mechanics\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Single Document Atomicity in MongoDB",
    "question": "Why are single-document modifications always atomic in MongoDB without requiring transactions?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "atomicity",
      "acid",
      "single-document"
    ],
    "interviewAnswer": "MongoDB guarantees complete ACID atomicity for all operations affecting a single document. Modifying embedded arrays, subdocuments, and multiple fields within one document using update operators ($set, $inc, $push) is serialized and executes as an indivisible atomic unit.",
    "answer": "Single-document atomicity eliminates the need for expensive multi-document transactions in 90% of use cases. If an order document embeds line items, shipping address, and payment status, updating the order and modifying line items simultaneously succeeds or fails atomically in one write lock.",
    "explanation": "Single-document atomicity eliminates the need for expensive multi-document transactions in 90% of use cases. If an order document embeds line items, shipping address, and payment status, updating the order and modifying line items simultaneously succeeds or fails atomically in one write lock.",
    "importantPoints": [
      "Single-document writes are 100% atomic and isolated.",
      "No explicit transaction syntax needed for single-document updates.",
      "Core reason why embedding related data is favored in document modeling."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Single Document Atomicity in MongoDB",
        "code": "// Example demonstration for: Single Document Atomicity in MongoDB\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "CAP Theorem Classification for MongoDB",
    "question": "Where does MongoDB fit in the CAP theorem (Consistency, Availability, Partition Tolerance)?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "cap-theorem",
      "distributed-systems",
      "consistency"
    ],
    "interviewAnswer": "MongoDB is fundamentally a CP (Consistency and Partition Tolerance) system by default. In a network partition, the partition without a majority primary refuses writes to preserve strict data consistency.",
    "answer": "Under the CAP theorem, during a network partition, MongoDB chooses Consistency over Availability. If a primary cannot reach a majority of nodes, it steps down to secondary and rejects writes. However, by tuning Read Preferences (`secondaryPreferred`) and Write Concerns (`w: 1`), MongoDB can be tuned towards AP-like eventual consistency.",
    "explanation": "Under the CAP theorem, during a network partition, MongoDB chooses Consistency over Availability. If a primary cannot reach a majority of nodes, it steps down to secondary and rejects writes. However, by tuning Read Preferences (`secondaryPreferred`) and Write Concerns (`w: 1`), MongoDB can be tuned towards AP-like eventual consistency.",
    "importantPoints": [
      "Classified as CP (Consistency and Partition Tolerance) by default.",
      "Minority partition rejects writes to prevent split-brain.",
      "Tunable consistency via read and write concerns."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "CAP Theorem Classification for MongoDB",
        "code": "// Example demonstration for: CAP Theorem Classification for MongoDB\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Capped Collections: Use Cases and Restrictions",
    "question": "What is a Capped Collection in MongoDB, what are its operational restrictions, and when should it be used?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "capped-collection",
      "fifo",
      "logging"
    ],
    "interviewAnswer": "A Capped Collection is a fixed-size circular collection that automatically overwrites the oldest documents when its allocated byte quota is reached (FIFO order). It guarantees insertion order preservation and high-speed throughput, but documents cannot be deleted and cannot grow in size.",
    "answer": "Capped collections are ideal for audit logs, high-throughput IoT telemetry, and cache buffers: `db.createCollection(\"logs\", { capped: true, size: 5242880, max: 5000 })`. Restrictions: 1) Cannot delete documents manually (`deleteOne/deleteMany` fail); 2) Updates cannot increase document byte size; 3) Cannot be sharded.",
    "explanation": "Capped collections are ideal for audit logs, high-throughput IoT telemetry, and cache buffers: `db.createCollection(\"logs\", { capped: true, size: 5242880, max: 5000 })`. Restrictions: 1) Cannot delete documents manually (`deleteOne/deleteMany` fail); 2) Updates cannot increase document byte size; 3) Cannot be sharded.",
    "importantPoints": [
      "Fixed-size circular FIFO buffer.",
      "Automatically purges oldest documents when size limit is reached.",
      "Documents cannot be explicitly deleted; updates cannot cause document growth."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Capped Collections: Use Cases and Restrictions",
        "code": "// Example demonstration for: Capped Collections: Use Cases and Restrictions\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Tailable Cursors on Capped Collections",
    "question": "How do Tailable Cursors work on Capped Collections, and how do they enable event streaming?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "tailable-cursor",
      "capped-collection",
      "streaming"
    ],
    "interviewAnswer": "A tailable cursor does not close when the query reaches the end of the collection; it remains open and blocks, waiting for new documents to be inserted (similar to tail -f in Linux). It is the mechanism behind MongoDB Change Streams and oplog replication.",
    "answer": "When querying a capped collection with cursor option `cursor.tailable({ awaitData: true })`, the connection remains open. When another process inserts a document, the tailable cursor emits the new document immediately without requiring client polling.",
    "explanation": "When querying a capped collection with cursor option `cursor.tailable({ awaitData: true })`, the connection remains open. When another process inserts a document, the tailable cursor emits the new document immediately without requiring client polling.",
    "importantPoints": [
      "Works exclusively on Capped Collections.",
      "Keeps cursor open waiting for incoming inserts (tail -f behavior).",
      "Underpins MongoDB replica set oplog streaming."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Tailable Cursors on Capped Collections",
        "code": "// Example demonstration for: Tailable Cursors on Capped Collections\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Change Streams: Reactive Real-Time Event Architecture",
    "question": "What are MongoDB Change Streams, and how do they differ from database polling or triggers?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "change-streams",
      "real-time",
      "events",
      "oplog"
    ],
    "interviewAnswer": "Change Streams allow applications to access real-time data changes across collections, databases, or entire clusters without polling. They leverage the Oplog and resume tokens to deliver resilient, ordered event streaming that survives network disconnects.",
    "answer": "Unlike SQL database triggers that execute inside the transactional write path and add latency, Change Streams read the Oplog asynchronously. Clients listen with `collection.watch()` and receive insert, update, and delete event notifications. Each event includes a `resumeToken`, allowing workers to reconnect after crashes without missing events.",
    "explanation": "Unlike SQL database triggers that execute inside the transactional write path and add latency, Change Streams read the Oplog asynchronously. Clients listen with `collection.watch()` and receive insert, update, and delete event notifications. Each event includes a `resumeToken`, allowing workers to reconnect after crashes without missing events.",
    "importantPoints": [
      "Listens to Oplog changes in real time via watch().",
      "Zero impact on transactional write latency.",
      "Resume tokens ensure fault-tolerant event processing."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Change Streams: Reactive Real-Time Event Architecture",
        "code": "// Example demonstration for: Change Streams: Reactive Real-Time Event Architecture\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Schema Validation using $jsonSchema",
    "question": "How do you enforce structural data types and required fields in MongoDB collections using $jsonSchema?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-validation",
      "json-schema",
      "data-integrity"
    ],
    "interviewAnswer": "Pass a validator document containing $jsonSchema to db.createCollection() or collMod, defining required fields, data types, minimum/maximum values, and regex patterns.",
    "answer": "MongoDB allows enforcing schema validation at the database layer: `db.createCollection(\"users\", { validator: { $jsonSchema: { bsonType: \"object\", required: [\"email\", \"age\"], properties: { email: { bsonType: \"string\", pattern: \"^.+@.+$\" }, age: { bsonType: \"int\", minimum: 18 } } } } })`. It rejects non-conforming writes with validation errors.",
    "explanation": "MongoDB allows enforcing schema validation at the database layer: `db.createCollection(\"users\", { validator: { $jsonSchema: { bsonType: \"object\", required: [\"email\", \"age\"], properties: { email: { bsonType: \"string\", pattern: \"^.+@.+$\" }, age: { bsonType: \"int\", minimum: 18 } } } } })`. It rejects non-conforming writes with validation errors.",
    "importantPoints": [
      "Enforces schema rules at the database engine level.",
      "Supports JSON Schema draft 4 standard.",
      "validationAction can be \"error\" (rejects write) or \"warn\" (logs violation)."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Schema Validation using $jsonSchema",
        "code": "// Example demonstration for: Schema Validation using $jsonSchema\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Time Series Collections in MongoDB 5.0+",
    "question": "How do native Time Series collections optimize storage and queries for IoT and metric data?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "time-series",
      "iot",
      "compression",
      "optimization"
    ],
    "interviewAnswer": "Time Series collections automatically bucket incoming metric measurements by time and metadata into internal columnar compressed documents, reducing storage by up to 90% and speeding up time-range queries by orders of magnitude.",
    "answer": "Created via `db.createCollection(\"sensors\", { timeseries: { timeField: \"timestamp\", metaField: \"metadata\", granularity: \"seconds\" } })`. Instead of storing each metric as an independent document, MongoDB organizes measurements into compressed column buckets behind the scenes, eliminating index overhead and reducing disk footprint.",
    "explanation": "Created via `db.createCollection(\"sensors\", { timeseries: { timeField: \"timestamp\", metaField: \"metadata\", granularity: \"seconds\" } })`. Instead of storing each metric as an independent document, MongoDB organizes measurements into compressed column buckets behind the scenes, eliminating index overhead and reducing disk footprint.",
    "importantPoints": [
      "Automatic columnar bucketing of chronological metrics.",
      "Up to 90% storage compression compared to standard collections.",
      "Requires specifying timeField, metaField, and granularity."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Time Series Collections in MongoDB 5.0+",
        "code": "// Example demonstration for: Time Series Collections in MongoDB 5.0+\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "GridFS: Storing Files Exceeding 16MB",
    "question": "What is GridFS, and how does it store files larger than the 16MB BSON document limit?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "gridfs",
      "large-files",
      "storage"
    ],
    "interviewAnswer": "GridFS is MongoDB's specification for storing files exceeding 16MB. It divides files into 255KB chunks stored in a fs.chunks collection, and tracks file metadata (filename, uploadDate, hash) in a fs.files collection.",
    "answer": "When storing a 500MB video, GridFS chunks the binary data into ~2,000 distinct 255KB documents in `fs.chunks` and records the parent file details in `fs.files`. Driver APIs allow streaming files in and out chunk by chunk without loading the entire 500MB payload into application memory.",
    "explanation": "When storing a 500MB video, GridFS chunks the binary data into ~2,000 distinct 255KB documents in `fs.chunks` and records the parent file details in `fs.files`. Driver APIs allow streaming files in and out chunk by chunk without loading the entire 500MB payload into application memory.",
    "importantPoints": [
      "Splits files into 255KB chunks.",
      "Uses two collections: fs.files (metadata) and fs.chunks (binary data).",
      "Supports streaming access for files of arbitrary gigabyte sizes."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "GridFS: Storing Files Exceeding 16MB",
        "code": "// Example demonstration for: GridFS: Storing Files Exceeding 16MB\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Sharding Architecture: mongos, Config Servers, and Shard Nodes",
    "question": "Explain the three core components of a MongoDB Sharded Cluster.",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "sharding",
      "mongos",
      "config-servers",
      "horizontal-scaling"
    ],
    "interviewAnswer": "1) Shard Nodes: Replica sets holding subsets of partitioned data. 2) Config Database: Replica set storing cluster metadata and routing tables. 3) mongos Routers: Stateless query routers that direct client operations to the appropriate shard nodes based on the shard key.",
    "answer": "A sharded cluster enables horizontal scaling: clients connect to `mongos`, which acts as an intelligent query router. `mongos` caches routing chunks from the Config Server replica set. When a query contains the shard key, mongos routes the query directly to that specific shard (targeted query). If the shard key is missing, mongos broadcasts the query to all shards (scatter-gather query).",
    "explanation": "A sharded cluster enables horizontal scaling: clients connect to `mongos`, which acts as an intelligent query router. `mongos` caches routing chunks from the Config Server replica set. When a query contains the shard key, mongos routes the query directly to that specific shard (targeted query). If the shard key is missing, mongos broadcasts the query to all shards (scatter-gather query).",
    "importantPoints": [
      "mongos: Stateless query router.",
      "Config Servers: Store routing metadata and chunk boundaries.",
      "Shards: Physical replica sets storing data chunks.",
      "Targeted query (with shard key) vs Scatter-Gather query (without shard key)."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Sharding Architecture: mongos, Config Servers, and Shard Nodes",
        "code": "// Example demonstration for: Sharding Architecture: mongos, Config Servers, and Shard Nodes\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Shard Key Selection Criteria and Anti-Patterns",
    "question": "What makes an optimal Shard Key, and what are the dangers of monotonic (auto-incrementing) shard keys?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "sharding",
      "shard-key",
      "jumbo-chunks",
      "hotspot"
    ],
    "interviewAnswer": "An optimal shard key has high cardinality, high frequency distribution across queries, and low correlation with monotonic sequences. Monotonically increasing shard keys (like timestamps or auto-increment IDs) cause all inserts to route to a single right-most shard, creating an insert bottleneck. Use Hashed Sharding to distribute monotonic keys evenly.",
    "answer": "Selecting a shard key is immutable in older MongoDB versions (and complex in modern versions). 1) High cardinality: A boolean key allows only 2 chunks, making sharding useless. 2) Monotonic hot-spot: Sharding by `createdAt` sends 100% of inserts to the latest shard. 3) Hashed Sharding: `sh.shardCollection(\"db.orders\", { orderId: \"hashed\" })` hashes keys to distribute sequential writes uniformly across all nodes.",
    "explanation": "Selecting a shard key is immutable in older MongoDB versions (and complex in modern versions). 1) High cardinality: A boolean key allows only 2 chunks, making sharding useless. 2) Monotonic hot-spot: Sharding by `createdAt` sends 100% of inserts to the latest shard. 3) Hashed Sharding: `sh.shardCollection(\"db.orders\", { orderId: \"hashed\" })` hashes keys to distribute sequential writes uniformly across all nodes.",
    "importantPoints": [
      "High cardinality ensures fine-grained chunk distribution.",
      "Avoid monotonically increasing keys without hashing to prevent insert hot-spots.",
      "Choose keys frequently present in primary query predicates to enable targeted routing."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Shard Key Selection Criteria and Anti-Patterns",
        "code": "// Example demonstration for: Shard Key Selection Criteria and Anti-Patterns\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Connection Pool Management and Sizing",
    "question": "How should maxPoolSize and connection pooling be configured in MongoDB Node.js/Java drivers?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "connection-pooling",
      "driver",
      "maxpoolsize"
    ],
    "interviewAnswer": "maxPoolSize configures the maximum concurrent TCP sockets maintained by the driver (default 100). Oversizing the pool causes excessive thread context switching and WiredTiger ticket exhaustion on the database server. Sizing should reflect available CPU cores and expected concurrent operations (typically 50-100 per application instance).",
    "answer": "Each MongoDB connection consumes 1MB+ of RAM on the server plus WiredTiger execution slots (tickets). If 20 containerized API pods each configure `maxPoolSize: 500`, the server faces 10,000 idle/active connections, leading to memory starvation. Maintain a lean pool (e.g. 50) and configure `waitQueueTimeoutMS` to handle spikes.",
    "explanation": "Each MongoDB connection consumes 1MB+ of RAM on the server plus WiredTiger execution slots (tickets). If 20 containerized API pods each configure `maxPoolSize: 500`, the server faces 10,000 idle/active connections, leading to memory starvation. Maintain a lean pool (e.g. 50) and configure `waitQueueTimeoutMS` to handle spikes.",
    "importantPoints": [
      "Default maxPoolSize is 100.",
      "Too many connections exhaust server memory and WiredTiger concurrent tickets.",
      "Share a single MongoClient instance across the entire application lifecycle."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Connection Pool Management and Sizing",
        "code": "// Example demonstration for: Connection Pool Management and Sizing\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Collation: Language-Aware String Matching and Sorting",
    "question": "What is MongoDB Collation, and how does it support case-insensitive and accent-insensitive queries?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "collation",
      "case-insensitive",
      "sorting",
      "internationalization"
    ],
    "interviewAnswer": "Collation allows specifying language-specific rules for string comparison and sorting. Configuring collation strength to 1 (primary strength) makes string queries and indexes both case-insensitive and accent-insensitive without regex.",
    "answer": "Using `find({ name: /^john$/i })` forces a full collection scan because regex invalidates standard B-Trees. By configuring Collation `{ locale: \"en\", strength: 2 }` (ignores case), queries match \"John\", \"john\", and \"JOHN\" using an index built with that exact collation.",
    "explanation": "Using `find({ name: /^john$/i })` forces a full collection scan because regex invalidates standard B-Trees. By configuring Collation `{ locale: \"en\", strength: 2 }` (ignores case), queries match \"John\", \"john\", and \"JOHN\" using an index built with that exact collation.",
    "importantPoints": [
      "Configures language rules for comparison and sorting.",
      "strength 1: Case and accent insensitive.",
      "strength 2: Case insensitive, accent sensitive.",
      "Index must match the exact collation of the query to be used."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Collation: Language-Aware String Matching and Sorting",
        "code": "// Example demonstration for: Collation: Language-Aware String Matching and Sorting\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "MongoDB Write-Ahead Logging: Journal vs Checkpoint",
    "question": "What is the relationship between the WiredTiger Journal and Checkpoints in crash recovery?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "journal",
      "checkpoint",
      "crash-recovery",
      "wiredtiger"
    ],
    "interviewAnswer": "Checkpoints flush all in-memory dirty pages to data files on disk every 60 seconds. The Journal records all write deltas sequentially between checkpoints. On crash recovery, MongoDB restores the latest valid checkpoint snapshot and replays journal records generated after that checkpoint.",
    "answer": "Writing dirty pages directly to table files on disk for every insert would cause crippling random I/O. Instead, WiredTiger appends write modifications to a sequential journal file (flushed every 100ms or on `j: true`). Every 60 seconds (or 2GB of data), a checkpoint writes a consistent snapshot to disk. Recovery = Checkpoint + Replay post-checkpoint Journal.",
    "explanation": "Writing dirty pages directly to table files on disk for every insert would cause crippling random I/O. Instead, WiredTiger appends write modifications to a sequential journal file (flushed every 100ms or on `j: true`). Every 60 seconds (or 2GB of data), a checkpoint writes a consistent snapshot to disk. Recovery = Checkpoint + Replay post-checkpoint Journal.",
    "importantPoints": [
      "Checkpoints occur every 60 seconds by default.",
      "Journal flushed every 100ms sequentially.",
      "Crash recovery re-applies journal entries on top of the last checkpoint."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "MongoDB Write-Ahead Logging: Journal vs Checkpoint",
        "code": "// Example demonstration for: MongoDB Write-Ahead Logging: Journal vs Checkpoint\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "In-Place Updates vs Document Relocation",
    "question": "What happens physically inside WiredTiger when an update increases the size of a document?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "wiredtiger",
      "document-relocation",
      "internals"
    ],
    "interviewAnswer": "In WiredTiger, documents are never updated in place on physical disk blocks. WiredTiger uses copy-on-write / append-only memory pages. When a document grows, the new version is created in cache and written to a newly allocated disk block during checkpointing; the old disk block is freed for reuse.",
    "answer": "In the legacy MMAPv1 engine, document growth required moving the document to the end of the file and updating all index pointers (padding factor). WiredTiger eliminated this: pages are written to new locations during checkpoints, and B-Tree indexes use logical RecordIDs rather than physical file offsets, eliminating index update cascades on document growth.",
    "explanation": "In the legacy MMAPv1 engine, document growth required moving the document to the end of the file and updating all index pointers (padding factor). WiredTiger eliminated this: pages are written to new locations during checkpoints, and B-Tree indexes use logical RecordIDs rather than physical file offsets, eliminating index update cascades on document growth.",
    "importantPoints": [
      "WiredTiger allocates new page space during checkpoints.",
      "RecordIDs insulate indexes from physical document movement.",
      "Eliminated legacy MMAPv1 padding factor fragmentation."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "In-Place Updates vs Document Relocation",
        "code": "// Example demonstration for: In-Place Updates vs Document Relocation\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Hidden and Secondary Collections in MongoDB System Catalog",
    "question": "What are system collections like system.profile and system.views in MongoDB?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "system-collections",
      "profiler",
      "views"
    ],
    "interviewAnswer": "system.profile records slow queries and operational diagnostics when database profiling is enabled. system.views stores the aggregation pipeline definitions for read-only virtual views.",
    "answer": "MongoDB stores internal database state in reserved system collections: `system.profile` is a capped collection capturing queries exceeding `slowms` thresholds. `system.views` records view definitions created via `db.createView()`. Direct modification of system collections is restricted.",
    "explanation": "MongoDB stores internal database state in reserved system collections: `system.profile` is a capped collection capturing queries exceeding `slowms` thresholds. `system.views` records view definitions created via `db.createView()`. Direct modification of system collections is restricted.",
    "importantPoints": [
      "system.profile stores database profiler diagnostic data.",
      "system.views stores virtual view pipeline queries.",
      "Protected collections managed by the database server."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Hidden and Secondary Collections in MongoDB System Catalog",
        "code": "// Example demonstration for: Hidden and Secondary Collections in MongoDB System Catalog\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "TTL (Time-To-Live) Collections and Background Purging",
    "question": "How do TTL indexes work in MongoDB, and what is the latency of document expiration?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "ttl",
      "expiration",
      "indexes",
      "background-thread"
    ],
    "interviewAnswer": "A TTL index on a Date field automatically deletes documents after a specified number of seconds. A background thread runs once every 60 seconds to purge expired documents; therefore, deletion is not instantaneous and can lag by up to 60+ seconds under load.",
    "answer": "TTL indexes are created with `db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })`. The background thread compares the indexed Date field with current time. Documents with `Date + expireAfterSeconds < NOW()` are deleted. Restrictions: Cannot be compound; indexed field must contain a BSON Date.",
    "explanation": "TTL indexes are created with `db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })`. The background thread compares the indexed Date field with current time. Documents with `Date + expireAfterSeconds < NOW()` are deleted. Restrictions: Cannot be compound; indexed field must contain a BSON Date.",
    "importantPoints": [
      "Automatically purges expired documents based on a Date field.",
      "Runs as a low-priority background thread once every 60 seconds.",
      "Field must be a valid BSON Date (not epoch integer or string)."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "TTL (Time-To-Live) Collections and Background Purging",
        "code": "// Example demonstration for: TTL (Time-To-Live) Collections and Background Purging\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Database Profiling Levels (0, 1, 2)",
    "question": "What are the MongoDB Database Profiler levels, and how do you profile slow queries in production?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "profiler",
      "slow-query",
      "diagnostics"
    ],
    "interviewAnswer": "Level 0 turns off profiling. Level 1 logs operations exceeding slowms (default 100ms) to system.profile. Level 2 captures ALL operations regardless of duration. In production, use Level 1 with an appropriate slowms threshold (e.g. 50-100ms) to identify bottlenecks without logging overhead.",
    "answer": "Configure profiling dynamically: `db.setProfilingLevel(1, { slowms: 100 })`. Captured queries can be inspected in `db.system.profile.find({ millis: { $gt: 100 } }).sort({ ts: -1 })`. Profiler level 2 logs 100% of queries, causing severe disk write overhead, and should never be used on high-volume production clusters.",
    "explanation": "Configure profiling dynamically: `db.setProfilingLevel(1, { slowms: 100 })`. Captured queries can be inspected in `db.system.profile.find({ millis: { $gt: 100 } }).sort({ ts: -1 })`. Profiler level 2 logs 100% of queries, causing severe disk write overhead, and should never be used on high-volume production clusters.",
    "importantPoints": [
      "Level 0: Off; Level 1: Logs operations > slowms; Level 2: Logs everything.",
      "Production standard is Level 1 with slowms tuned to SLA.",
      "Inspect slow queries via db.system.profile collection."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Database Profiling Levels (0, 1, 2)",
        "code": "// Example demonstration for: Database Profiling Levels (0, 1, 2)\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Cursor Batching and getMore Wire Protocol Commands",
    "question": "How does MongoDB cursor batching work, and what role does the getMore command play in network efficiency?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "cursor",
      "getmore",
      "networking",
      "batching"
    ],
    "interviewAnswer": "When a query matches 10,000 documents, MongoDB does not stream all 10,000 over the socket at once. It returns an initial batch (default 101 docs or 1MB). As the application iterates past the batch, the driver sends a getMore command with the cursor ID to fetch subsequent 4MB batches.",
    "answer": "Cursor batching prevents memory exhaustion on both database and client: 1) Initial find request returns cursor ID + initial batch; 2) Application cursor streams local batch; 3) When local buffer drains, driver issues `getMore(cursorId, batchSize)`; 4) Continues until cursor is exhausted. If left open without iteration, cursors time out after 10 minutes.",
    "explanation": "Cursor batching prevents memory exhaustion on both database and client: 1) Initial find request returns cursor ID + initial batch; 2) Application cursor streams local batch; 3) When local buffer drains, driver issues `getMore(cursorId, batchSize)`; 4) Continues until cursor is exhausted. If left open without iteration, cursors time out after 10 minutes.",
    "importantPoints": [
      "Initial batch is 101 documents or 1MB.",
      "Subsequent batches are 4MB via getMore command.",
      "Prevents driver and network memory bloat on large result sets."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Cursor Batching and getMore Wire Protocol Commands",
        "code": "// Example demonstration for: Cursor Batching and getMore Wire Protocol Commands\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Arbiters in Replica Sets: Why MongoDB Discourages Them",
    "question": "Why does MongoDB officially recommend against using Arbiter nodes in production replica sets?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "arbiters",
      "replica-set",
      "w-majority"
    ],
    "interviewAnswer": "Arbiters participate in elections but hold no data. When an arbiter is used in a 3-node set (Primary, Secondary, Arbiter), if the Secondary goes down, the Primary can never satisfy w: \"majority\" write concerns because majority requires 2 data-bearing nodes. The cluster becomes read-only for majority writes.",
    "answer": "A common mistake is thinking Arbiter + Primary = Majority for writes. In MongoDB, `w: \"majority\"` calculates majority based on voting DATA-BEARING members. If a secondary fails in a P-S-A replica set, the primary can vote with the arbiter to remain Primary, but every `w: \"majority\"` write blocks and times out! A 3-node data-bearing replica set (P-S-S) avoids this flaw.",
    "explanation": "A common mistake is thinking Arbiter + Primary = Majority for writes. In MongoDB, `w: \"majority\"` calculates majority based on voting DATA-BEARING members. If a secondary fails in a P-S-A replica set, the primary can vote with the arbiter to remain Primary, but every `w: \"majority\"` write blocks and times out! A 3-node data-bearing replica set (P-S-S) avoids this flaw.",
    "importantPoints": [
      "Arbiters cannot satisfy data-bearing write concerns.",
      "Failure of secondary in P-S-A set freezes all w: \"majority\" writes.",
      "Production standard is minimum 3 data-bearing nodes (P-S-S)."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Arbiters in Replica Sets: Why MongoDB Discourages Them",
        "code": "// Example demonstration for: Arbiters in Replica Sets: Why MongoDB Discourages Them\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Cursor Isolation and Snapshot Reads",
    "question": "Can a MongoDB cursor return duplicate documents or miss documents if concurrent writes occur during iteration?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "cursor-isolation",
      "concurrent-writes",
      "snapshot"
    ],
    "interviewAnswer": "Yes! By default, standard cursors are not snapshot-isolated. If a concurrent write updates an un-indexed document causing it to grow and move to a later position in the collection scan, a iterating cursor may encounter and return that same document twice.",
    "answer": "Without snapshot read concerns, cursor reads reflect changes dynamically as they traverse pages. If an update shifts a document ahead of the cursor scan pointer, the document is returned twice. Using `readConcern: \"snapshot\"` or running queries inside a multi-document transaction guarantees an isolated point-in-time view.",
    "explanation": "Without snapshot read concerns, cursor reads reflect changes dynamically as they traverse pages. If an update shifts a document ahead of the cursor scan pointer, the document is returned twice. Using `readConcern: \"snapshot\"` or running queries inside a multi-document transaction guarantees an isolated point-in-time view.",
    "importantPoints": [
      "Standard cursors can see concurrent updates during iteration.",
      "Can produce duplicate documents during index or table scans under write pressure.",
      "Prevented using readConcern: \"snapshot\" or transaction sessions."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Cursor Isolation and Snapshot Reads",
        "code": "// Example demonstration for: Cursor Isolation and Snapshot Reads\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Clustered Collections in MongoDB 5.3+",
    "question": "What are Clustered Collections in MongoDB 5.3+, and how do they differ from standard collections?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "clustered-collections",
      "clustered-index",
      "performance"
    ],
    "interviewAnswer": "In a Clustered Collection, documents are stored physically ordered by the clustered index key (similar to clustered indexes in MySQL InnoDB or SQL Server). This eliminates the separate primary key index lookup and improves range query and bulk insert performance.",
    "answer": "Standard MongoDB collections store documents in unordered heap blocks, with `_id` being a separate secondary index pointing to RecordIDs. A Clustered Collection stores documents directly inside the leaf nodes of the clustered index B-Tree on `_id`. This reduces disk space, eliminates secondary pointer lookups, and accelerates ordered range queries.",
    "explanation": "Standard MongoDB collections store documents in unordered heap blocks, with `_id` being a separate secondary index pointing to RecordIDs. A Clustered Collection stores documents directly inside the leaf nodes of the clustered index B-Tree on `_id`. This reduces disk space, eliminates secondary pointer lookups, and accelerates ordered range queries.",
    "importantPoints": [
      "Documents physically sorted in index leaf pages by clustered key.",
      "Eliminates separate _id index storage overhead.",
      "Ideal for time-series, sequential IDs, and high-volume append workloads."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Clustered Collections in MongoDB 5.3+",
        "code": "// Example demonstration for: Clustered Collections in MongoDB 5.3+\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "MongoDB Serverless vs Dedicated Provisioning",
    "question": "What are the architectural trade-offs of MongoDB Atlas Serverless versus dedicated M-tier clusters?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "atlas",
      "serverless",
      "cloud-architecture"
    ],
    "interviewAnswer": "Atlas Serverless automatically scales compute and storage on demand with pay-per-read/write units, ideal for bursty or unpredictable workloads. Dedicated clusters provide predictable monthly costs, dedicated RAM/CPU, VPC peering, and custom WiredTiger cache tuning.",
    "answer": "Serverless instances eliminate cluster provisioning and idle resource waste, charging per Read Processing Unit (RPU) and Write Processing Unit (WPU). However, for steady high-volume production traffic (millions of ops/day), dedicated provisioned clusters are significantly more cost-effective and allow fine-tuning of connection pools and memory.",
    "explanation": "Serverless instances eliminate cluster provisioning and idle resource waste, charging per Read Processing Unit (RPU) and Write Processing Unit (WPU). However, for steady high-volume production traffic (millions of ops/day), dedicated provisioned clusters are significantly more cost-effective and allow fine-tuning of connection pools and memory.",
    "importantPoints": [
      "Serverless: Auto-scaling, pay-per-operation, ideal for unpredictable traffic.",
      "Dedicated: Predictable pricing, private VPC networking, dedicated WiredTiger RAM.",
      "Dedicated is cheaper for sustained 24/7 high-throughput workloads."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "MongoDB Serverless vs Dedicated Provisioning",
        "code": "// Example demonstration for: MongoDB Serverless vs Dedicated Provisioning\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "mongodb-fundamentals",
    "title": "Read Preference vs Read Concern Distinction",
    "question": "Clearly explain the operational difference between Read Preference and Read Concern.",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "read-preference",
      "read-concern",
      "architecture"
    ],
    "interviewAnswer": "Read Preference determines WHERE the query is sent (e.g. Primary, Secondary, Nearest). Read Concern determines WHAT data is returned (e.g. local uncommitted, majority committed, or snapshot isolated).",
    "answer": "Developers often confuse these two routing dimensions: 1) Read Preference routes network traffic: `secondaryPreferred` offloads read operations to read replicas. 2) Read Concern controls consistency guarantees: `majority` dictates that the node (whether primary or secondary) returns only data acknowledged by a majority of cluster members.",
    "explanation": "Developers often confuse these two routing dimensions: 1) Read Preference routes network traffic: `secondaryPreferred` offloads read operations to read replicas. 2) Read Concern controls consistency guarantees: `majority` dictates that the node (whether primary or secondary) returns only data acknowledged by a majority of cluster members.",
    "importantPoints": [
      "Read Preference: Spatial routing (WHICH node receives the read).",
      "Read Concern: Temporal consistency (HOW DURABLE the returned data must be).",
      "Can be combined: e.g. readPreference: \"secondary\" with readConcern: \"majority\"."
    ],
    "commonMistakes": [
      "Confusing logical schema concepts with storage engine internals."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Read Preference vs Read Concern Distinction",
        "code": "// Example demonstration for: Read Preference vs Read Concern Distinction\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
