import { SeedQuestion } from '../types';

export const transactionsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Scenario: Consistent Updates - When to Use a Multi-Document Transaction",
    "question": "Two related updates need to remain consistent across multiple documents. When would you use a transaction versus single-document atomicity?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "acid",
      "atomicity",
      "multi-document-transactions",
      "consistency"
    ],
    "interviewAnswer": "First, I evaluate whether the schema can be modeled to store the related entities within a SINGLE document (e.g. embedding order items or maintaining account balances in one document), because single-document operations are 100% ACID atomic by default without transaction overhead. If the entities must reside in separate documents or collections (e.g. transferring money between two independent bank accounts, or updating an inventory ledger alongside an order), I use a Multi-Document ACID Transaction with withTransaction() to guarantee all-or-nothing atomicity.",
    "answer": "Evaluating consistency requirements in MongoDB:\n\n1. Single-Document Atomicity First (The Idiomatic Way):\nIn MongoDB, any modification to a single document is strictly atomic—even if modifying 50 fields, arrays, and subdocuments. If you can model the relationship within one document, you get ACID guarantees with zero transaction overhead, no locks, and maximum throughput.\n\n2. When Multi-Document Transactions Are Mandatory:\n- Financial balance transfers: Debiting Account A and crediting Account B.\n- Cross-collection state changes: Creating an Order record while atomically decrementing SKU inventory across separate collections.\n- Multi-tenant data migration: Moving entities between tenants or users.\n\n3. Operational Overhead of Transactions:\n- Multi-document transactions consume WiredTiger cache space, hold write locks on modified documents, enforce a 60-second execution time limit, and produce larger oplog entries. Use them when business logic truly requires cross-document atomicity.",
    "explanation": "Multi-document transactions were introduced for replica sets in MongoDB 4.0 and sharded clusters in 4.2.",
    "importantPoints": [
      "Single-document operations are always ACID atomic without transactions.",
      "Always consider embedding before resorting to multi-document transactions.",
      "Use multi-document transactions when separate documents must maintain strict invariants (e.g. banking transfers).",
      "Transactions incur latency, hold locks, and have a 60-second default timeout.",
      "Use the withTransaction() driver API to handle TransientTransactionError retries automatically."
    ],
    "commonMistakes": [
      "Wrapping every single MongoDB write in a transaction out of SQL habit, causing severe lock contention.",
      "Allowing long-running queries or network calls inside a transaction block, causing 60-second timeouts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Bank Transfer Using Multi-Document Transaction",
        "code": "const session = client.startSession();\ntry {\n  await session.withTransaction(async () => {\n    // 1. Debit from Account A\n    const debitResult = await db.accounts.updateOne(\n      { _id: fromAccountId, balance: { $gte: amount } },\n      { $inc: { balance: -amount } },\n      { session }\n    );\n    if (debitResult.matchedCount === 0) {\n      throw new Error(\"Insufficient funds\");\n    }\n\n    // 2. Credit to Account B\n    await db.accounts.updateOne(\n      { _id: toAccountId },\n      { $inc: { balance: amount } },\n      { session }\n    );\n  });\n} finally {\n  await session.endSession();\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "ACID Properties in MongoDB: Single Document vs Multi-Document",
    "question": "How does MongoDB implement Atomicity, Consistency, Isolation, and Durability (ACID) at both single-document and multi-document levels?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "acid",
      "atomicity",
      "isolation",
      "durability"
    ],
    "interviewAnswer": "1) Atomicity: Guaranteed per-document by default; multi-document operations achieve all-or-nothing atomicity via multi-document transactions. 2) Consistency: Maintained via schema validation rules, unique indexes, and snapshot isolation. 3) Isolation: Read Uncommitted or Local by default; Snapshot Isolation in transactions guarantees readers see a consistent point-in-time snapshot without dirty reads. 4) Durability: Controlled via write concern { w: \"majority\", j: true }, ensuring committed data is safely flushed to the on-disk journal and replicated across majority nodes.",
    "answer": "Detailed ACID Breakdown:\n- Atomicity: Single-document updates never partially apply. Multi-document transactions abort completely if any operation fails.\n- Consistency: Document-level invariants ($jsonSchema, unique indexes) are checked. Transactions abort if constraints are violated.\n- Isolation: Transactions use Snapshot Isolation. Readers outside the transaction do not see uncommitted writes (no dirty reads).\n- Durability: Write Concern (`w: \"majority\"`) combined with Journaling (`j: true`) ensures committed transactions survive unexpected node crashes or primary failovers.",
    "explanation": "Prior to MongoDB 4.0, MongoDB was widely critiqued for lacking multi-document transactions. Modern MongoDB provides fully verified Jepsen-tested distributed ACID transactions.",
    "importantPoints": [
      "Single-document writes are always atomic and isolated.",
      "Multi-document transactions provide full Snapshot Isolation.",
      "Durability requires write concern majority with journaling.",
      "No dirty reads: uncommitted writes are never visible outside the transaction."
    ],
    "commonMistakes": [
      "Using writeConcern: 1 with transactions, leaving data vulnerable to rollback on primary failover.",
      "Assuming single-document updates require a transaction session."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Starting a Transaction with Majority Write Concern",
        "code": "const session = client.startSession({\n  defaultTransactionOptions: {\n    readConcern: { level: \"snapshot\" },\n    writeConcern: { w: \"majority\" }\n  }\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "The withTransaction() Helper and TransientTransactionError Retries",
    "question": "Why does MongoDB recommend using the withTransaction() driver helper instead of manual commitTransaction/abortTransaction calls?",
    "difficulty": "medium",
    "questionType": "Best Practices",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "withTransaction",
      "transient-error",
      "retry-logic"
    ],
    "interviewAnswer": "withTransaction() automatically handles transient errors (such as network hiccups, primary failovers, and write conflicts) by re-executing the entire transaction callback when a TransientTransactionError label is received, and retrying the commit when an UnknownTransactionCommitResult label is returned. Writing this retry logic manually requires complex, error-prone boilerplate.",
    "answer": "In distributed systems, transactions can encounter temporary write conflicts or network disconnects. When this occurs, MongoDB attaches error labels:\n- `TransientTransactionError`: Indicates the entire transaction aborted due to a conflict or failover; it is safe to retry from the beginning.\n- `UnknownTransactionCommitResult`: Indicates the commit command was sent, but the client lost connection before receiving the ack; it is safe to retry just the commit.\n\nThe driver's `withTransaction()` method encapsulates both retry loops automatically, retrying for up to 120 seconds.",
    "explanation": "Because withTransaction() may re-run its callback multiple times during conflicts, the callback function MUST be idempotent and contain no non-idempotent external side effects (e.g. sending an email).",
    "importantPoints": [
      "withTransaction() automatically retries on TransientTransactionError.",
      "Automatically retries commits on UnknownTransactionCommitResult.",
      "Transaction callback must be idempotent since it may execute more than once.",
      "Eliminates dozens of lines of manual retry boilerplate."
    ],
    "commonMistakes": [
      "Sending external emails or charging credit cards inside the withTransaction callback (it may run multiple times).",
      "Using manual commitTransaction without error label handling in production."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Idiomatic withTransaction Usage in Node.js",
        "code": "const session = client.startSession();\ntry {\n  await session.withTransaction(\n    async () => {\n      await db.inventory.updateOne({ sku: \"A1\" }, { $inc: { qty: -1 } }, { session });\n      await db.orders.insertOne({ sku: \"A1\", status: \"CONFIRMED\" }, { session });\n    },\n    {\n      readPreference: \"primary\",\n      readConcern: { level: \"local\" },\n      writeConcern: { w: \"majority\" }\n    }\n  );\n} finally {\n  await session.endSession();\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Transaction Lifetime Limits and the 60-Second Timeout",
    "question": "What is the transactionLifetimeLimitSeconds setting, and why does MongoDB enforce a hard time limit on transactions?",
    "difficulty": "medium",
    "questionType": "Configuration",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "timeout",
      "transactionLifetimeLimitSeconds",
      "wiredtiger"
    ],
    "interviewAnswer": "By default, MongoDB terminates any transaction that runs longer than 60 seconds (transactionLifetimeLimitSeconds = 60). This limit exists because active transactions hold WiredTiger cache snapshots and locks, preventing the storage engine from evicting old cache versions and pinning the replication oplog, which can starve server RAM.",
    "answer": "Why long transactions are dangerous in document databases:\n1. WiredTiger Cache Pinning: To provide Snapshot Isolation, WiredTiger must retain all older versions of modified documents in memory. If a transaction runs for 10 minutes, memory consumption explodes.\n2. Oplog Truncation Prevention: The primary cannot truncate its oplog buffer while an uncommitted transaction holds old timestamps, risking disk exhaustion.\n3. Lock Holding: Write locks on updated documents remain blocked, stalling concurrent updates.\n\nBest Practice: Keep transactions micro-second fast (under 100ms). Never make HTTP calls or wait for user input inside a transaction.",
    "explanation": "While the limit can be adjusted via `setParameter: { transactionLifetimeLimitSeconds: 120 }`, increasing it is an anti-pattern that threatens database stability.",
    "importantPoints": [
      "Default limit is 60 seconds; transactions exceeding this are aborted automatically.",
      "Active transactions pin cache snapshots and prevent WiredTiger eviction.",
      "Write locks are held until transaction commits or aborts.",
      "Never perform external network I/O or heavy aggregations inside transactions."
    ],
    "commonMistakes": [
      "Awaiting external payment gateway API calls inside a MongoDB transaction.",
      "Executing massive unindexed queries or ETL batch loops within a single transaction."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Checking and Setting Transaction Lifetime Limit",
        "code": "// Check current limit (run on admin database):\ndb.adminCommand({ getParameter: 1, transactionLifetimeLimitSeconds: 1 });\n\n// Adjust to 90 seconds (use with extreme caution):\ndb.adminCommand({ setParameter: 1, transactionLifetimeLimitSeconds: 90 });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Write Conflicts and Lock Contention in Concurrent Transactions",
    "question": "What causes a Write Conflict error (WriteConflictException) during concurrent transactions, and how is it resolved?",
    "difficulty": "hard",
    "questionType": "Concurrency",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "write-conflicts",
      "concurrency",
      "locking"
    ],
    "interviewAnswer": "A write conflict occurs when two concurrent transactions attempt to modify the same document simultaneously under WiredTiger's optimistic concurrency control. The transaction that acquires the write lock first proceeds; the second transaction encounters a WriteConflict and is aborted with a TransientTransactionError. The application resolves this by immediately retrying the aborted transaction using withTransaction().",
    "answer": "WiredTiger uses optimistic concurrency for transactions: transactions do not acquire shared read locks on documents, allowing high read throughput. However, document modification requires an exclusive write lock.\n\nIf Transaction A and Transaction B both read Document X at timestamp T1:\n- Transaction A updates Document X and prepares to commit.\n- Transaction B attempts to update Document X. Because Document X has been modified since T1, WiredTiger detects a conflicting version write.\n- Transaction B is terminated with a WriteConflict.\n\nResolution:\n1. Wrap in `withTransaction()` which automatically retries with exponential backoff.\n2. Design schemas to partition write hotspots (e.g. avoid single global counter documents).",
    "explanation": "Write conflicts are normal and expected in optimistic concurrency systems; handling them gracefully via retry loops is part of standard application architecture.",
    "importantPoints": [
      "Occurs when concurrent transactions modify the same document.",
      "WiredTiger terminates the second transaction to preserve snapshot isolation.",
      "Throws TransientTransactionError, signaling an automatic retry.",
      "Mitigate by distributing writes across multiple documents instead of a single hotspot."
    ],
    "commonMistakes": [
      "Crashing application processes when a write conflict occurs instead of retrying.",
      "Creating hot counter documents updated by hundreds of concurrent transactions."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling Write Conflicts Gracefully",
        "code": "// withTransaction automatically catches write conflicts and retries:\nawait session.withTransaction(async () => {\n  const item = await db.products.findOne({ _id: productId }, { session });\n  if (item.stock > 0) {\n    await db.products.updateOne({ _id: productId }, { $inc: { stock: -1 } }, { session });\n  }\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Read Concern Snapshot: Point-in-Time Consistency",
    "question": "How does Read Concern \"snapshot\" guarantee consistent multi-document reads in transactions?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "readConcern",
      "snapshot",
      "isolation"
    ],
    "interviewAnswer": "Read Concern \"snapshot\" ensures all reads within a transaction observe data from a single synchronized point-in-time snapshot of the database. It eliminates non-repeatable reads and phantom reads, guaranteeing that even if concurrent writes are committing outside the transaction, the transaction sees a perfectly frozen view of data.",
    "answer": "Available exclusively inside multi-document transactions (and since MongoDB 5.0 in find/aggregate outside transactions if enabled). WiredTiger uses internal timestamp history to reconstruct past states.",
    "explanation": "Available exclusively inside multi-document transactions (and since MongoDB 5.0 in find/aggregate outside transactions if enabled). WiredTiger uses internal timestamp history to reconstruct past states.",
    "importantPoints": [
      "Provides point-in-time snapshot isolation.",
      "Guarantees repeatable reads across multiple collections.",
      "Mandatory for transactions requiring zero phantom reads."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Read Concern Snapshot: Point-in-Time Consistency",
        "code": "// Transaction example: Read Concern Snapshot: Point-in-Time Consistency\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Write Concern in Transactions (w: majority vs w: 1)",
    "question": "Why MUST transactions commit with Write Concern \"majority\" in production environments?",
    "difficulty": "medium",
    "questionType": "Data Safety",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "writeConcern",
      "majority",
      "durability"
    ],
    "interviewAnswer": "If a transaction commits with w: 1, MongoDB acknowledges success once written to the primary node's memory/journal. If the primary crashes immediately before replicating to secondaries, an election promotes a secondary that never received the transaction, rolling back the entire committed transaction. Using w: \"majority\" guarantees the commit is replicated to a quorum before acknowledgment, preventing rollback.",
    "answer": "Financial transactions should never use `w: 1`. Always configure `writeConcern: { w: \"majority\" }` to ensure complete durability across replica set failovers.",
    "explanation": "Financial transactions should never use `w: 1`. Always configure `writeConcern: { w: \"majority\" }` to ensure complete durability across replica set failovers.",
    "importantPoints": [
      "w: 1 risks rollback if primary fails after acknowledgment.",
      "w: \"majority\" guarantees replication to a majority of replica set nodes.",
      "Essential for financial and mission-critical transactional consistency."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Write Concern in Transactions (w: majority vs w: 1)",
        "code": "// Transaction example: Write Concern in Transactions (w: majority vs w: 1)\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Distributed Transactions Across Sharded Clusters (Two-Phase Commit)",
    "question": "How does MongoDB execute distributed transactions across multiple shards using Two-Phase Commit (2PC)?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "sharding",
      "distributed-transactions",
      "two-phase-commit",
      "mongos"
    ],
    "interviewAnswer": "In sharded clusters (MongoDB 4.2+), when a transaction touches multiple shards, the mongos query router designates one participating shard as the Transaction Coordinator. The coordinator orchestrates a distributed Two-Phase Commit (Prepare phase and Commit phase) across all participant shards, ensuring atomicity across the entire distributed cluster.",
    "answer": "Phase 1 (Prepare): Coordinator instructs participant shards to prepare their writes and confirm they can commit. Phase 2 (Commit): Once all shards respond \"prepared\", coordinator writes a commit decision to its internal log and instructs all shards to commit.",
    "explanation": "Phase 1 (Prepare): Coordinator instructs participant shards to prepare their writes and confirm they can commit. Phase 2 (Commit): Once all shards respond \"prepared\", coordinator writes a commit decision to its internal log and instructs all shards to commit.",
    "importantPoints": [
      "Orchestrated by a Transaction Coordinator shard.",
      "Uses 2PC protocol to guarantee distributed atomicity.",
      "Incurs cross-network coordination latency; keep transactions within single shards when possible."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Distributed Transactions Across Sharded Clusters (Two-Phase Commit)",
        "code": "// Transaction example: Distributed Transactions Across Sharded Clusters (Two-Phase Commit)\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Idempotency and Retryable Writes vs Multi-Document Transactions",
    "question": "When should Retryable Writes be used instead of a full Multi-Document Transaction?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "retryable-writes",
      "idempotency",
      "performance"
    ],
    "interviewAnswer": "Retryable Writes (enabled by default: retryWrites=true) automatically retry single-document insert, update, or delete operations if a network error occurs, using internal transaction IDs (lsid and txnNumber) to guarantee the write is executed exactly once without duplication. Use retryable writes for single-document operations; reserve multi-document transactions only for cross-document consistency.",
    "answer": "If you only need to increment a balance or insert an order atomically, a single-document update with `retryWrites=true` is infinitely faster, cheaper, and more scalable than opening a multi-document transaction.",
    "explanation": "If you only need to increment a balance or insert an order atomically, a single-document update with `retryWrites=true` is infinitely faster, cheaper, and more scalable than opening a multi-document transaction.",
    "importantPoints": [
      "Retryable writes handle network drops for single-document writes automatically.",
      "Guarantees exactly-once write semantics without transactions.",
      "Zero locking or cache pinning overhead."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Idempotency and Retryable Writes vs Multi-Document Transactions",
        "code": "// Transaction example: Idempotency and Retryable Writes vs Multi-Document Transactions\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Transaction Size Limitations: The 16MB Oplog Entry Limit",
    "question": "What is the maximum data size a multi-document transaction can modify in MongoDB?",
    "difficulty": "hard",
    "questionType": "Limits",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "limits",
      "oplog",
      "16mb-limit"
    ],
    "interviewAnswer": "In MongoDB, all writes within a multi-document transaction are committed into a single oplog entry on the primary. Therefore, the total cumulative changes produced by a transaction cannot exceed the 16MB BSON document size limit. Attempting to modify thousands of large documents in one transaction triggers a TransactionExceededLifetimeLimit or BSONTooLarge error.",
    "answer": "Transactions are not meant for bulk data loading or batch ETL migrations. If you need to update 100,000 documents, execute them in smaller batches (e.g. 500 documents per transaction) or use bulkWrite without transactions.",
    "explanation": "Transactions are not meant for bulk data loading or batch ETL migrations. If you need to update 100,000 documents, execute them in smaller batches (e.g. 500 documents per transaction) or use bulkWrite without transactions.",
    "importantPoints": [
      "All transaction changes are bundled into a single 16MB oplog entry.",
      "Cannot be used for massive batch migrations.",
      "Batch large multi-document operations into smaller chunks."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Transaction Size Limitations: The 16MB Oplog Entry Limit",
        "code": "// Transaction example: Transaction Size Limitations: The 16MB Oplog Entry Limit\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "DDL Operations Restrictions Inside Transactions",
    "question": "Which DDL operations are prohibited inside multi-document transactions?",
    "difficulty": "medium",
    "questionType": "Rules",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "ddl",
      "createIndex",
      "dropCollection"
    ],
    "interviewAnswer": "Inside transactions, you cannot perform operations that acquire exclusive metadata catalog locks, such as: creating or dropping collections (prior to MongoDB 4.4), creating or dropping indexes (createIndex), dropping databases, or running administrative commands. (MongoDB 4.4+ allows implicit and explicit collection creation in transactions, but index creation remains strictly prohibited).",
    "answer": "Always create required indexes and collections during application deployment before running transactional application code.",
    "explanation": "Always create required indexes and collections during application deployment before running transactional application code.",
    "importantPoints": [
      "createIndex and dropIndex are forbidden inside transactions.",
      "Administrative commands (collMod, dropDatabase) are rejected.",
      "Catalog locks would freeze concurrent database operations."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "DDL Operations Restrictions Inside Transactions",
        "code": "// Transaction example: DDL Operations Restrictions Inside Transactions\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Session Management: Proper Lifecycle and Cleanup of Client Sessions",
    "question": "Why is it critical to explicitly call session.endSession() in a finally block?",
    "difficulty": "easy",
    "questionType": "Best Practices",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "sessions",
      "endSession",
      "resource-leak"
    ],
    "interviewAnswer": "Every client session allocates server-side resources, tracks logical session IDs (lsid), and pins transaction state on the cluster. Failing to call session.endSession() in a finally block leaks server-side sessions until the 30-minute server timeout, consuming server memory and connection pool slots.",
    "answer": "Always wrap session usage in a `try...finally` block: `try { ... } finally { await session.endSession(); }`. This guarantees session release even if unhandled exceptions or network timeouts occur.",
    "explanation": "Always wrap session usage in a `try...finally` block: `try { ... } finally { await session.endSession(); }`. This guarantees session release even if unhandled exceptions or network timeouts occur.",
    "importantPoints": [
      "Releases server-side session memory and locks.",
      "Must always be executed in a finally block.",
      "Prevents session leaks in high-concurrency applications."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Session Management: Proper Lifecycle and Cleanup of Client Sessions",
        "code": "// Transaction example: Session Management: Proper Lifecycle and Cleanup of Client Sessions\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Optimistic Concurrency Control (OCC) vs Pessimistic Locking",
    "question": "Why did MongoDB choose Optimistic Concurrency Control over Pessimistic Two-Phase Locking for transactions?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "occ",
      "pessimistic-locking",
      "concurrency"
    ],
    "interviewAnswer": "Pessimistic locking locks records on read, preventing any other transaction from reading or writing, which cripples read throughput and causes deadlocks in web-scale systems. Optimistic Concurrency Control (OCC) allows all transactions to read and compute concurrently without locks; it checks for conflicting writes only at commit time. This yields massive throughput for read-heavy and low-contention workloads.",
    "answer": "Under OCC, 99.9% of transactions commit instantly with zero lock wait. In the rare event of a conflict, the conflicting transaction simply retries.",
    "explanation": "Under OCC, 99.9% of transactions commit instantly with zero lock wait. In the rare event of a conflict, the conflicting transaction simply retries.",
    "importantPoints": [
      "Reads never block other readers or writers.",
      "Conflicts are checked at write/commit time.",
      "Maximizes throughput for distributed cloud architectures."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Optimistic Concurrency Control (OCC) vs Pessimistic Locking",
        "code": "// Transaction example: Optimistic Concurrency Control (OCC) vs Pessimistic Locking\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Deadlocks in Multi-Document Transactions",
    "question": "How do deadlocks occur in MongoDB transactions, and how does the server resolve them?",
    "difficulty": "hard",
    "questionType": "Concurrency",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "deadlocks",
      "lock-graph",
      "write-conflicts"
    ],
    "interviewAnswer": "A deadlock occurs when Transaction 1 updates Document A and requests Document B, while Transaction 2 updates Document B and requests Document A. MongoDB detects the circular dependency using internal lock-wait graphs and immediately terminates one of the transactions with a LockTimeout or WriteConflict error, releasing its locks and allowing the other transaction to proceed.",
    "answer": "To prevent deadlocks in application design: always access and update documents in a consistent global order (e.g. sorting document IDs before acquiring locks in the transaction).",
    "explanation": "To prevent deadlocks in application design: always access and update documents in a consistent global order (e.g. sorting document IDs before acquiring locks in the transaction).",
    "importantPoints": [
      "Occurs when transactions wait circularly on documents.",
      "WiredTiger detects deadlocks and kills one transaction.",
      "Prevent by ordering updates deterministically (e.g. sort by _id)."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Deadlocks in Multi-Document Transactions",
        "code": "// Transaction example: Deadlocks in Multi-Document Transactions\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Causal Consistency Sessions in MongoDB",
    "question": "What is a Causal Consistency session, and how does it guarantee \"Read Your Own Writes\" without transactions?",
    "difficulty": "hard",
    "questionType": "Distributed Systems",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "causal-consistency",
      "read-your-own-writes",
      "replication"
    ],
    "interviewAnswer": "A Causal Consistency session (client.startSession({ causalConsistency: true })) guarantees that operations within the session are causally related: an application reading from a delayed secondary is guaranteed to see its own prior writes (Read-Your-Own-Writes, Monotonic Reads, Monotonic Writes, and Writes-Follow-Reads), achieving consistency across replicas without expensive multi-document transactions.",
    "answer": "It embeds logical cluster times (operationTime) in read requests. The secondary waits until its local replication oplog catches up to that cluster time before returning results.",
    "explanation": "It embeds logical cluster times (operationTime) in read requests. The secondary waits until its local replication oplog catches up to that cluster time before returning results.",
    "importantPoints": [
      "Guarantees read-your-own-writes on secondaries.",
      "Does not require heavy multi-document transactions.",
      "Leverages Lamport logical cluster timestamps across replica sets."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Causal Consistency Sessions in MongoDB",
        "code": "// Transaction example: Causal Consistency Sessions in MongoDB\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Read Concern \"local\" vs \"available\" vs \"majority\" in Transactions",
    "question": "What are the behavioral differences between Read Concern \"local\", \"available\", and \"majority\"?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "readConcern",
      "local",
      "majority",
      "available"
    ],
    "interviewAnswer": "1) \"local\": Returns the node's most recent data without checking if it has been committed to a majority of nodes; fast, but can be rolled back if the primary crashes. 2) \"available\": Same as local on replica sets, but on sharded clusters it does not filter orphaned documents (chunks moving between shards). 3) \"majority\": Returns data acknowledged by a majority of nodes, guaranteeing it can never be rolled back.",
    "answer": "For transactions, \"snapshot\" is standard, but understanding read concerns is crucial when configuring external consistency boundaries.",
    "explanation": "For transactions, \"snapshot\" is standard, but understanding read concerns is crucial when configuring external consistency boundaries.",
    "importantPoints": [
      "local returns latest primary data; can roll back.",
      "available does not filter sharded orphan documents.",
      "majority returns durable data that will never roll back."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Read Concern \"local\" vs \"available\" vs \"majority\" in Transactions",
        "code": "// Transaction example: Read Concern \"local\" vs \"available\" vs \"majority\" in Transactions\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Transactions with Sharded Collections: The Shard Key Requirement",
    "question": "Why must queries inside sharded transactions include the shard key?",
    "difficulty": "hard",
    "questionType": "Sharding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "sharding",
      "shard-key",
      "scatter-gather"
    ],
    "interviewAnswer": "If a write query inside a transaction does not specify the shard key, the query router (mongos) cannot determine which shard owns the document, resulting in an error. Supplying the shard key routes the write directly to the target shard, minimizing multi-shard coordinator overhead.",
    "answer": "In sharded transactions, any update or delete operation targeting a sharded collection MUST include the shard key in the query filter or document specification.",
    "explanation": "In sharded transactions, any update or delete operation targeting a sharded collection MUST include the shard key in the query filter or document specification.",
    "importantPoints": [
      "Writes in sharded transactions must include the shard key.",
      "Enables mongos to target the exact participant shard.",
      "Prevents illegal broadcast writes in transactional contexts."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Transactions with Sharded Collections: The Shard Key Requirement",
        "code": "// Transaction example: Transactions with Sharded Collections: The Shard Key Requirement\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Two-Phase Commit in Application Code vs Native Transactions",
    "question": "When is a Two-Phase Commit pattern implemented in application code (Saga Pattern) preferred over native MongoDB transactions?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "saga-pattern",
      "two-phase-commit",
      "microservices"
    ],
    "interviewAnswer": "The Saga Pattern (choreographed or orchestrated compensating transactions) is preferred when business workflows span multiple independent microservices, external payment gateways (Stripe/PayPal), or take minutes/hours to complete (e.g. flight booking with seat reservation). Native MongoDB transactions are strictly designed for microsecond-speed database operations within a single MongoDB cluster.",
    "answer": "You cannot hold an open MongoDB database transaction while a user enters their 3D-Secure SMS code for a credit card. A Saga uses state machines and compensating rollback transactions.",
    "explanation": "You cannot hold an open MongoDB database transaction while a user enters their 3D-Secure SMS code for a credit card. A Saga uses state machines and compensating rollback transactions.",
    "importantPoints": [
      "Sagas handle long-running workflows spanning multiple services.",
      "Native transactions are limited to 60 seconds and single clusters.",
      "Sagas use compensating actions (e.g. refunding payment if booking fails)."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Two-Phase Commit in Application Code vs Native Transactions",
        "code": "// Transaction example: Two-Phase Commit in Application Code vs Native Transactions\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Monitoring Active Transactions with $currentOp",
    "question": "How do you inspect running transactions and diagnose blocked transactions using $currentOp?",
    "difficulty": "medium",
    "questionType": "Diagnostics",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "currentOp",
      "diagnostics",
      "monitoring"
    ],
    "interviewAnswer": "Execute db.adminCommand({ currentOp: 1, \"active\": true, \"transaction.timeOpenMicros\": { $exists: true } }). This outputs all currently active transactions, their duration, client IP, session ID, locks held, and whether they are waiting for locks or in a prepared state.",
    "answer": "If CPU spikes or writes freeze, `$currentOp` reveals rogue transactions holding write locks on hot documents for tens of seconds.",
    "explanation": "If CPU spikes or writes freeze, `$currentOp` reveals rogue transactions holding write locks on hot documents for tens of seconds.",
    "importantPoints": [
      "Exposes all active transactional sessions.",
      "Shows timeOpenMicros, locks held, and client IP.",
      "Essential for diagnosing production lock freezes."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Monitoring Active Transactions with $currentOp",
        "code": "// Transaction example: Monitoring Active Transactions with $currentOp\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Aborting Hanging Transactions with db.killOp()",
    "question": "How can an administrator terminate a stuck or runaway transaction in MongoDB?",
    "difficulty": "medium",
    "questionType": "Operations",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "killOp",
      "abort",
      "operations"
    ],
    "interviewAnswer": "Find the transaction's opid using db.currentOp(), and execute db.killOp(opid). Alternatively, in modern MongoDB, you can abort the session directly using db.adminCommand({ abortTransaction: 1, lsid: { id: sessionId } }), which releases all locks and triggers rollback immediately.",
    "answer": "Terminating the session rolls back any uncommitted writes in WiredTiger and releases document-level locks so blocked concurrent queries can proceed.",
    "explanation": "Terminating the session rolls back any uncommitted writes in WiredTiger and releases document-level locks so blocked concurrent queries can proceed.",
    "importantPoints": [
      "killOp(opid) terminates the active transaction operation.",
      "abortTransaction command aborts via logical session ID (lsid).",
      "Immediately rolls back changes and unblocks waiting queries."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Aborting Hanging Transactions with db.killOp()",
        "code": "// Transaction example: Aborting Hanging Transactions with db.killOp()\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Transaction Performance Impact on WiredTiger Cache Size",
    "question": "How do high volumes of concurrent transactions impact WiredTiger cache evictions?",
    "difficulty": "hard",
    "questionType": "Storage Engine",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "wiredtiger",
      "cache-eviction",
      "memory-pressure"
    ],
    "interviewAnswer": "Each active transaction pins a snapshot of data. To maintain snapshot isolation for concurrent readers, WiredTiger cannot evict modified pages from memory until the oldest transaction commits or aborts. If transactions run frequently or slowly, the cache fills with multi-version concurrency control (MVCC) delta chains, causing cache starvation and triggering aggressive application thread throttling.",
    "answer": "When WiredTiger cache reaches 95% utilization due to pinned transaction snapshots, MongoDB forces application write threads to perform disk flushes (server stalling).",
    "explanation": "When WiredTiger cache reaches 95% utilization due to pinned transaction snapshots, MongoDB forces application write threads to perform disk flushes (server stalling).",
    "importantPoints": [
      "Pins MVCC document versions in RAM.",
      "Prevents background cache eviction threads from reclaiming memory.",
      "Can lead to cache starvation and thread stalling."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Transaction Performance Impact on WiredTiger Cache Size",
        "code": "// Transaction example: Transaction Performance Impact on WiredTiger Cache Size\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Atomic Upserts: Concurrency and E11000 Duplicate Key Handling",
    "question": "Why can concurrent findAndModify / updateOne with upsert: true fail with an E11000 Duplicate Key Error without transactions?",
    "difficulty": "hard",
    "questionType": "Concurrency",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "upsert",
      "duplicate-key",
      "race-conditions",
      "e11000"
    ],
    "interviewAnswer": "When two concurrent queries issue an upsert for the same non-existent unique key simultaneously, both may find no matching document at the exact same moment. Both then attempt to insert a new document; the first succeeds, and the second fails with an E11000 duplicate key error. To resolve this: catch E11000 and retry the update, or wrap the upsert in a unique index with retry logic.",
    "answer": "Upsert is atomic per document, but two threads can interleave between the predicate check and the insert phase. The standard pattern is catching E11000 and executing a normal update.",
    "explanation": "Upsert is atomic per document, but two threads can interleave between the predicate check and the insert phase. The standard pattern is catching E11000 and executing a normal update.",
    "importantPoints": [
      "Concurrent upserts on non-existent unique keys can both attempt insert.",
      "Second insert throws E11000 duplicate key error.",
      "Application must catch E11000 and retry as an update."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Atomic Upserts: Concurrency and E11000 Duplicate Key Handling",
        "code": "// Transaction example: Atomic Upserts: Concurrency and E11000 Duplicate Key Handling\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Transactions in Serverless and Stateless Environments (AWS Lambda)",
    "question": "What precautions must be taken when executing MongoDB transactions inside ephemeral serverless functions?",
    "difficulty": "medium",
    "questionType": "Cloud Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "serverless",
      "lambda",
      "connection-pooling"
    ],
    "interviewAnswer": "In serverless functions, timeouts can freeze or terminate the container while a transaction is mid-flight, leaving locks held on the database until transactionLifetimeLimitSeconds expires. Precautions include: 1) Reuse MongoClient connections across invocations; 2) Keep transactions ultra-short (< 500ms); 3) Ensure lambda execution timeout is comfortably higher than transaction timeout; 4) Always call session.endSession() in a finally block.",
    "answer": "If AWS Lambda freezes a container that holds an open transaction, the database locks will remain blocked for 60 seconds. Always handle abrupt timeouts gracefully.",
    "explanation": "If AWS Lambda freezes a container that holds an open transaction, the database locks will remain blocked for 60 seconds. Always handle abrupt timeouts gracefully.",
    "importantPoints": [
      "Container freeze can leave open transactions and locks on the database.",
      "Keep transaction duration tiny.",
      "Always end sessions in finally blocks."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Transactions in Serverless and Stateless Environments (AWS Lambda)",
        "code": "// Transaction example: Transactions in Serverless and Stateless Environments (AWS Lambda)\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Testing Transactions with In-Memory / Test Databases",
    "question": "Why do MongoDB multi-document transactions fail in single-node standalone test instances, and how is this solved?",
    "difficulty": "easy",
    "questionType": "Testing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "testing",
      "replica-set",
      "mongodb-memory-server"
    ],
    "interviewAnswer": "Multi-document transactions require an oplog, which only exists on a Replica Set (even a single-node replica set). Running transactions against a standalone mongod instance throws an error: \"Transaction numbers are only allowed on a replica set member or mongos\". The solution is starting the test instance or mongodb-memory-server with the --replSet flag.",
    "answer": "In Jest or Mocha tests, configure `MongoMemoryReplSet` from `mongodb-memory-server` instead of a standalone `MongoMemoryServer`.",
    "explanation": "In Jest or Mocha tests, configure `MongoMemoryReplSet` from `mongodb-memory-server` instead of a standalone `MongoMemoryServer`.",
    "importantPoints": [
      "Transactions strictly require an active replica set oplog.",
      "Standalone mongod cannot execute transactions.",
      "Use single-node replica set for local development and CI testing."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Testing Transactions with In-Memory / Test Databases",
        "code": "// Transaction example: Testing Transactions with In-Memory / Test Databases\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "transactions",
    "title": "Summary: When NOT to Use Multi-Document Transactions",
    "question": "What are the classic anti-patterns where multi-document transactions should be avoided in MongoDB?",
    "difficulty": "medium",
    "questionType": "Best Practices",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "transactions",
      "anti-patterns",
      "when-not-to-use",
      "performance"
    ],
    "interviewAnswer": "Avoid transactions for: 1) Batch data ingestion or bulk ETL jobs (use bulkWrite); 2) High-throughput single-entity mutations (use single-document atomic updates like $inc, $set); 3) Long-running workflows involving user input or third-party APIs (use Saga pattern); 4) Workloads that can be solved cleanly by embedding child entities.",
    "answer": "Reaching for transactions as the default tool turns MongoDB into a slow relational database. Embrace document modeling and single-document atomicity first.",
    "explanation": "Reaching for transactions as the default tool turns MongoDB into a slow relational database. Embrace document modeling and single-document atomicity first.",
    "importantPoints": [
      "Do not use for bulk ETL or data migrations.",
      "Do not use when single-document atomic operators suffice.",
      "Do not use across long-running or user-facing pauses."
    ],
    "commonMistakes": [
      "Omitting retry logic or letting transactions exceed 60 seconds."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Summary: When NOT to Use Multi-Document Transactions",
        "code": "// Transaction example: Summary: When NOT to Use Multi-Document Transactions\nconst session = client.startSession();\nsession.endSession();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
