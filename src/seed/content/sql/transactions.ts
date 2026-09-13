import { SeedQuestion } from '../types';

export const transactionsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Scenario: Two Users Update the Same Record Simultaneously",
    "question": "Two users update the same record simultaneously. What problems could occur, and how do database locking and isolation levels prevent them?",
    "difficulty": "medium",
    "questionType": "Scenario",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "concurrency",
      "race-conditions",
      "lost-update",
      "locking",
      "scenario"
    ],
    "interviewAnswer": "When two users update the same record concurrently, the classic \"Lost Update\" anomaly occurs: User B overwrites User A's changes without knowing they happened. Other anomalies include dirty reads and non-repeatable reads. Relational databases prevent this using row-level exclusive locks (X-locks), Pessimistic locking (SELECT ... FOR UPDATE), or Optimistic Concurrency Control (version columns).",
    "answer": "Without concurrency controls: 1) Lost Update: User 1 and User 2 both read account balance $100. User 1 deposits $50 (writes $150). User 2 withdraws $20 (writes $80). User 1's deposit is completely lost. 2) Under standard ACID transactions, when User 1 issues `UPDATE accounts SET balance = balance + 50 WHERE id = 1`, the database acquires an Exclusive Row Lock (X-lock) on row 1. When User 2 attempts to update row 1, their transaction blocks until User 1 commits or rolls back. In web applications with multi-step workflows, Optimistic Concurrency Control (`WHERE id = 1 AND version = 5`) ensures that if the record changed since reading, User 2's update fails gracefully.",
    "explanation": "Atomic database updates (`UPDATE t SET balance = balance + 50`) serialize naturally at the row lock level. However, multi-step application transactions (Read -> Modify in app memory -> Write back) require explicit concurrency control to avoid lost updates.",
    "importantPoints": [
      "Lost Update occurs when concurrent writes overwrite intermediate changes.",
      "Row-level exclusive locks (X-locks) serialize concurrent UPDATE statements automatically.",
      "Pessimistic locking uses SELECT ... FOR UPDATE to lock rows during reading.",
      "Optimistic locking uses a version or timestamp column in the WHERE clause.",
      "Higher isolation levels (Repeatable Read / Serializable) abort conflicting transactions."
    ],
    "commonMistakes": [
      "Reading a record in application memory, calculating a new value, and issuing a blind UPDATE without locking or version checks.",
      "Assuming Read Committed isolation prevents lost updates in multi-step application workflows (it does not).",
      "Holding database locks open while waiting for external third-party HTTP API responses."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Preventing Lost Updates: Pessimistic vs Optimistic",
        "code": "-- Approach 1: Pessimistic Locking (SELECT ... FOR UPDATE)\nBEGIN;\nSELECT balance FROM accounts WHERE account_id = 101 FOR UPDATE;\n-- Row 101 is now locked; concurrent transactions will wait here\nUPDATE accounts SET balance = balance - 50 WHERE account_id = 101;\nCOMMIT;\n\n-- Approach 2: Optimistic Locking (Application Version Check)\n-- Read version 4 in app: SELECT balance, version FROM accounts WHERE account_id = 101;\nUPDATE accounts \nSET balance = balance - 50, version = version + 1 \nWHERE account_id = 101 AND version = 4;\n-- If rows_affected == 0, abort and notify user of concurrent modification!"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "ACID Properties in Deep Technical Detail",
    "question": "Explain the ACID properties of relational transactions and the underlying database mechanisms that enforce each.",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "acid",
      "wal",
      "mvcc",
      "internals"
    ],
    "interviewAnswer": "ACID stands for Atomicity (all-or-nothing execution, enforced via Undo Logs / WAL), Consistency (valid state transitions, enforced via constraints and schema rules), Isolation (concurrent transactions do not interfere, enforced via MVCC and locks), and Durability (committed changes survive crashes, enforced via Redo Logs / WAL flushed to disk with fsync).",
    "answer": "1) Atomicity: All operations in a transaction succeed, or the entire transaction is rolled back. Enforced by Write-Ahead Logging (WAL) and Undo Logs (Rollback Segments). If a crash occurs mid-transaction, recovery rolls back uncommitted changes. 2) Consistency: The database transitions only between valid states satisfying all constraints (PK, FK, CHECK, triggers). If any constraint fails, the entire transaction is rejected. 3) Isolation: Intermediate uncommitted states of a transaction are invisible to concurrent transactions. Enforced via Multi-Version Concurrency Control (MVCC) and two-phase locking (2PL). 4) Durability: Once a transaction commits, its modifications are permanently recorded even if power cuts immediately. Enforced by flushing Redo Log / WAL buffers to non-volatile storage via `fsync()` before acknowledging the commit.",
    "explanation": "The common misconception is confusing Consistency in ACID (constraint preservation) with Consistency in CAP theorem (linearizability / all nodes seeing the same data simultaneously).",
    "importantPoints": [
      "Atomicity: Undo logs and WAL rollback aborts.",
      "Consistency: Schema constraints, invariants, and referential integrity.",
      "Isolation: MVCC snapshots and locking mechanisms.",
      "Durability: Redo log / WAL fsync to physical disk prior to commit acknowledgment."
    ],
    "commonMistakes": [
      "Confusing ACID Consistency (integrity rules) with CAP Consistency (distributed agreement).",
      "Thinking Durability means data is immediately written to table data files (it is written to the WAL first; data files are checkpointed later).",
      "Assuming transactions run isolated by default without checking the active isolation level."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Explicit Transaction Control",
        "code": "BEGIN TRANSACTION; -- or START TRANSACTION / BEGIN\n\nINSERT INTO orders (order_id, user_id, total) VALUES (1001, 5, 250.00);\nUPDATE accounts SET balance = balance - 250.00 WHERE user_id = 5;\n\n-- If an error occurs, ROLLBACK restores previous state:\n-- ROLLBACK;\n\n-- When both succeed, COMMIT guarantees Durability:\nCOMMIT;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Transaction Isolation Levels and Concurrency Anomalies",
    "question": "Compare the four ANSI SQL Isolation Levels and the specific concurrency anomalies each permits or prevents.",
    "difficulty": "hard",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "isolation-levels",
      "dirty-read",
      "phantom-read",
      "mvcc"
    ],
    "interviewAnswer": "1) Read Uncommitted permits Dirty Reads, Non-Repeatable Reads, and Phantom Reads. 2) Read Committed prevents Dirty Reads, but permits Non-Repeatable Reads and Phantom Reads. 3) Repeatable Read prevents Dirty Reads and Non-Repeatable Reads, and prevents Phantoms in MySQL InnoDB/Postgres MVCC. 4) Serializable prevents all anomalies including Write Skew, guaranteeing strict serial ordering.",
    "answer": "Concurrency anomalies defined by ANSI SQL: 1) Dirty Read: Transaction reads uncommitted data written by a concurrent transaction that might later roll back. 2) Non-Repeatable Read (Fuzzy Read): Transaction re-reads the same row and discovers values modified and committed by another transaction. 3) Phantom Read: Transaction re-runs a range query and discovers new rows inserted by a committed transaction. Isolation Levels: Read Uncommitted permits all three. Read Committed permits Non-Repeatable and Phantom Reads. Repeatable Read guarantees that any row read once remains identical throughout the transaction. Serializable isolates transactions completely as if executed sequentially.",
    "explanation": "In modern MVCC databases, Repeatable Read also prevents Phantom Reads: PostgreSQL uses snapshot isolation where the query snapshot is established at transaction start, making new concurrent inserts invisible. MySQL InnoDB prevents phantom reads in Repeatable Read using Next-Key Locks (gap locks).",
    "importantPoints": [
      "Read Uncommitted: Allows dirty reads (reading uncommitted writes).",
      "Read Committed: Default in PostgreSQL, Oracle, SQL Server. Reads committed snapshot per statement.",
      "Repeatable Read: Default in MySQL InnoDB. Reads snapshot created at transaction start.",
      "Serializable: Full serializability; detects conflicting read/write dependencies."
    ],
    "commonMistakes": [
      "Believing Read Committed prevents data from changing between two SELECT queries in the same transaction.",
      "Assuming Repeatable Read prevents Write Skew anomalies (only Serializable prevents Write Skew).",
      "Not knowing that MySQL defaults to Repeatable Read while Postgres/SQL Server default to Read Committed."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Setting Transaction Isolation Level",
        "code": "-- PostgreSQL / MySQL\nSET TRANSACTION ISOLATION LEVEL REPEATABLE READ;\nBEGIN;\n\nSELECT balance FROM accounts WHERE account_id = 1; -- Snapshot established\n-- Even if another transaction commits an update to account 1 now,\n-- re-running the exact same SELECT will return the identical balance:\nSELECT balance FROM accounts WHERE account_id = 1;\n\nCOMMIT;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Shared Locks vs Exclusive Locks vs Intent Locks",
    "question": "What are Shared Locks (S), Exclusive Locks (X), and Intent Locks (IS, IX) in relational database engines?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "locks",
      "shared-lock",
      "exclusive-lock",
      "intent-locks"
    ],
    "interviewAnswer": "Shared Locks (S) allow multiple concurrent transactions to read data simultaneously; no transaction can modify a row held under an S-lock. Exclusive Locks (X) grant exclusive write access to a single transaction, blocking all other reads and writes. Intent Locks (IS, IX) are placed at higher levels of the lock hierarchy (tables, pages) to signal that lower-level row locks exist, avoiding full table scans when checking lock compatibility.",
    "answer": "1) Shared Lock (S-Lock): Acquired during reads (in locking read models or `SELECT ... FOR SHARE`). Multiple S-locks can coexist on the same resource (compatible with other S-locks; incompatible with X-locks). 2) Exclusive Lock (X-Lock): Acquired during writes (`UPDATE, DELETE, INSERT, SELECT ... FOR UPDATE`). Only one transaction can hold an X-lock on a row, and it blocks all other S and X locks. 3) Intent Locks: When a transaction acquires an X-lock on a specific row, it must first place an Intent Exclusive (IX) lock on the parent table. When another transaction requests a Table Lock (e.g. `ALTER TABLE` or `LOCK TABLE ... EXCLUSIVE`), it checks the table's intent locks in O(1) time rather than inspecting millions of individual rows.",
    "explanation": "Intent locking enables Multi-Granularity Locking (MGL). Without intent locks, a transaction wanting to lock an entire table would have to inspect every single row in the table to ensure no active row locks exist.",
    "importantPoints": [
      "S-locks: Shared for reading; compatible with S; incompatible with X.",
      "X-locks: Exclusive for writing; incompatible with both S and X.",
      "IS and IX locks declare intent at table/page level before taking row locks.",
      "Allows O(1) verification of table-level lock compatibility."
    ],
    "commonMistakes": [
      "Thinking MVCC reads acquire S-locks in PostgreSQL (standard SELECT acquires zero row locks in MVCC).",
      "Attempting to acquire a table lock without understanding intent lock conflicts.",
      "Holding X-locks across long-running batch transactions."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Inspecting Active Locks in PostgreSQL",
        "code": "-- Query pg_locks to inspect lock modes:\nSELECT \n  l.pid,\n  l.locktype,\n  l.mode,              -- ExclusiveLock, RowShareLock, AccessShareLock, etc.\n  l.granted,           -- true = held; false = waiting\n  c.relname AS table_name\nFROM pg_locks l\nLEFT JOIN pg_class c ON l.relation = c.oid\nWHERE l.pid != pg_backend_pid();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Deadlocks: Detection, Prevention, and Resolution",
    "question": "What is a database Deadlock, how do database engines detect them, and how should applications handle them?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "deadlocks",
      "waits-for-graph",
      "concurrency",
      "retry-logic"
    ],
    "interviewAnswer": "A deadlock occurs when two or more transactions hold locks that the other transactions need, creating a circular dependency where neither can proceed. Database engines detect deadlocks using a background Waits-For Graph cycle detection algorithm, choosing one transaction as the \"deadlock victim\" and aborting it. Applications must handle deadlocks by catching the error and retrying with exponential backoff.",
    "answer": "Deadlock example: Transaction 1 locks Row A and requests Row B. Concurrently, Transaction 2 locks Row B and requests Row A. Neither transaction can proceed. 1) Detection: The database engine maintains a directed \"Waits-For Graph\" where nodes are transactions and edges represent lock wait requests. A background thread checks the graph periodically (e.g. `deadlock_timeout` in Postgres). When a cycle is detected, the engine aborts the transaction with the least accumulated work (the victim) and raises error code 40P01 (Postgres) or 1205 (MySQL). 2) Prevention: Always access resources in a consistent global order across all code paths (e.g., sort record IDs before locking them in bulk). 3) Application Handling: Wrap database transactions in automated retry blocks with jittered exponential backoff.",
    "explanation": "Deadlocks are normal in high-concurrency systems and are not database bugs. An application architecture is incomplete unless its data access layer includes automated transaction retry logic for transient deadlock exceptions.",
    "importantPoints": [
      "Circular lock dependency: T1 waits for T2, and T2 waits for T1.",
      "Waits-For Graph detects cycles and kills the lowest-cost victim transaction.",
      "Prevent deadlocks by sorting IDs and locking in uniform sequence across all endpoints.",
      "Applications must implement automated retry mechanisms with backoff."
    ],
    "commonMistakes": [
      "Treating deadlocks as fatal application bugs rather than expected transient concurrency collisions.",
      "Updating multiple records in arbitrary or random order across different service endpoints.",
      "Not catching deadlock error codes and failing user requests immediately."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Preventing Deadlocks via Consistent Ordering",
        "code": "-- WRONG: Updating IDs in random order across concurrent transactions causes deadlocks:\n-- Thread 1: UPDATE accounts WHERE id IN (10, 5); -> locks 10, waits for 5\n-- Thread 2: UPDATE accounts WHERE id IN (5, 10); -> locks 5, waits for 10 -> DEADLOCK!\n\n-- CORRECT: Always sort IDs before locking or updating:\n-- Both threads always execute:\nUPDATE accounts \nSET balance = balance + 10 \nWHERE id IN (5, 10) \nORDER BY id ASC; -- In MySQL, or sorted in application array before query"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "MVCC (Multi-Version Concurrency Control) Internals",
    "question": "How does MVCC allow readers and writers to avoid blocking each other in PostgreSQL and MySQL InnoDB?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "mvcc",
      "internals",
      "concurrency",
      "snapshots"
    ],
    "interviewAnswer": "MVCC implements non-blocking reads by maintaining multiple versions of each row. When a transaction writes, it does not overwrite the row; it creates a new version. Readers inspect row visibility headers (xmin/xmax in Postgres, undo logs in InnoDB) to view the snapshot version matching their transaction start time.",
    "answer": "The core maxim of MVCC is \"readers do not block writers, and writers do not block readers\". In PostgreSQL, every tuple header contains `xmin` (creating transaction ID) and `xmax` (deleting/updating transaction ID). In MySQL InnoDB, old row versions are reconstructed dynamically on the fly from Undo Logs. A SELECT query simply ignores row versions committed after its snapshot timestamp.",
    "explanation": "The core maxim of MVCC is \"readers do not block writers, and writers do not block readers\". In PostgreSQL, every tuple header contains `xmin` (creating transaction ID) and `xmax` (deleting/updating transaction ID). In MySQL InnoDB, old row versions are reconstructed dynamically on the fly from Undo Logs. A SELECT query simply ignores row versions committed after its snapshot timestamp.",
    "importantPoints": [
      "Readers never block writers; writers never block readers.",
      "Postgres stores row versions in table heap (cleaned by vacuum).",
      "InnoDB stores old row versions in Undo Log rollback segments."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "MVCC (Multi-Version Concurrency Control) Internals",
        "code": "-- Demonstration for: MVCC (Multi-Version Concurrency Control) Internals\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Write Skew Anomaly and Snapshot Isolation",
    "question": "What is the Write Skew anomaly, and why does Repeatable Read fail to prevent it?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "write-skew",
      "snapshot-isolation",
      "repeatable-read",
      "serializable"
    ],
    "interviewAnswer": "Write Skew occurs when two concurrent transactions read overlapping data, make disjoint writes based on those reads, and violate a global integrity constraint. Repeatable Read fails to detect it because neither transaction modifies a row that the other transaction wrote.",
    "answer": "Classic Doctor on Call example: Hospital rule requires at least one doctor on call. Doctors Alice and Bob are currently on call. Both simultaneously request leave. T1 checks: count on call is 2 -> updates Alice to off call. T2 checks: count on call is 2 -> updates Bob to off call. Both commit under Repeatable Read because their write sets did not overlap, leaving ZERO doctors on call! Only Serializable isolation detects this cross-row dependency and aborts one transaction.",
    "explanation": "Classic Doctor on Call example: Hospital rule requires at least one doctor on call. Doctors Alice and Bob are currently on call. Both simultaneously request leave. T1 checks: count on call is 2 -> updates Alice to off call. T2 checks: count on call is 2 -> updates Bob to off call. Both commit under Repeatable Read because their write sets did not overlap, leaving ZERO doctors on call! Only Serializable isolation detects this cross-row dependency and aborts one transaction.",
    "importantPoints": [
      "Write sets do not overlap, but their combined effect violates an invariant.",
      "Repeatable Read permits Write Skew.",
      "Prevented by SERIALIZABLE isolation or SELECT ... FOR UPDATE."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Write Skew Anomaly and Snapshot Isolation",
        "code": "-- Demonstration for: Write Skew Anomaly and Snapshot Isolation\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "SELECT ... FOR UPDATE vs SELECT ... FOR SHARE",
    "question": "What is the difference between SELECT ... FOR UPDATE and SELECT ... FOR SHARE?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "locking",
      "select-for-update",
      "for-share"
    ],
    "interviewAnswer": "FOR UPDATE acquires an Exclusive Lock (X-lock) on the selected rows, blocking all other transactions from reading with locks, updating, or deleting them. FOR SHARE acquires a Shared Lock (S-lock), allowing other transactions to read or acquire FOR SHARE, but blocking any transaction from updating or deleting the rows.",
    "answer": "`SELECT ... FOR UPDATE` is used when you intend to modify the rows in the same transaction (e.g. inventory checkout). `SELECT ... FOR SHARE` is used when you want to ensure that a referenced parent row cannot be modified or deleted by another transaction while you are performing child row operations, without blocking other readers.",
    "explanation": "`SELECT ... FOR UPDATE` is used when you intend to modify the rows in the same transaction (e.g. inventory checkout). `SELECT ... FOR SHARE` is used when you want to ensure that a referenced parent row cannot be modified or deleted by another transaction while you are performing child row operations, without blocking other readers.",
    "importantPoints": [
      "FOR UPDATE: Exclusive row lock; prepares for write.",
      "FOR SHARE: Shared row lock; guarantees row stability without blocking concurrent readers.",
      "Both lock rows until transaction COMMIT or ROLLBACK."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "SELECT ... FOR UPDATE vs SELECT ... FOR SHARE",
        "code": "-- Demonstration for: SELECT ... FOR UPDATE vs SELECT ... FOR SHARE\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "SKIP LOCKED and NOWAIT for Job Queues",
    "question": "How do SKIP LOCKED and NOWAIT clauses solve high-throughput worker queue contention in SQL?",
    "difficulty": "hard",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "skip-locked",
      "nowait",
      "job-queues",
      "concurrency"
    ],
    "interviewAnswer": "Standard SELECT ... FOR UPDATE blocks concurrent workers on locked rows. NOWAIT fails immediately with an error if a row is locked. SKIP LOCKED skips any currently locked rows and locks the next available unlocked row, allowing thousands of background workers to process a shared queue concurrently with zero lock contention.",
    "answer": "In job queues implemented in PostgreSQL or MySQL 8: `SELECT * FROM tasks WHERE status = 'PENDING' ORDER BY priority DESC LIMIT 1 FOR UPDATE SKIP LOCKED;`. If Worker 1 locks Task A, Worker 2 seamlessly skips Task A and grabs Task B without waiting or throwing errors. This transforms relational databases into highly scalable message queues.",
    "explanation": "In job queues implemented in PostgreSQL or MySQL 8: `SELECT * FROM tasks WHERE status = 'PENDING' ORDER BY priority DESC LIMIT 1 FOR UPDATE SKIP LOCKED;`. If Worker 1 locks Task A, Worker 2 seamlessly skips Task A and grabs Task B without waiting or throwing errors. This transforms relational databases into highly scalable message queues.",
    "importantPoints": [
      "SKIP LOCKED bypasses locked rows instantly.",
      "NOWAIT throws an immediate error instead of blocking.",
      "Eliminates queue worker contention without external Redis/RabbitMQ."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "SKIP LOCKED and NOWAIT for Job Queues",
        "code": "-- Demonstration for: SKIP LOCKED and NOWAIT for Job Queues\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Gap Locks and Next-Key Locks in MySQL InnoDB",
    "question": "What are Gap Locks and Next-Key Locks in MySQL InnoDB, and why do they exist?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "gap-locks",
      "next-key-locks",
      "innodb",
      "phantom-reads"
    ],
    "interviewAnswer": "A Gap Lock locks the empty space (gap) between index records. A Next-Key Lock is the combination of an index record lock and a gap lock on the gap preceding that record. InnoDB uses Next-Key Locking in Repeatable Read to prevent concurrent transactions from inserting new rows into ranges, preventing Phantom Reads.",
    "answer": "If an index has values 10 and 20, locking `WHERE id BETWEEN 10 AND 20` cannot prevent a phantom insert if only rows 10 and 20 are locked. InnoDB places a Gap Lock on the open interval `(10, 20)`. Any concurrent transaction attempting `INSERT INTO t (id) VALUES (15)` blocks until the lock is released. While this eliminates phantoms, it is a primary source of deadlocks in MySQL.",
    "explanation": "If an index has values 10 and 20, locking `WHERE id BETWEEN 10 AND 20` cannot prevent a phantom insert if only rows 10 and 20 are locked. InnoDB places a Gap Lock on the open interval `(10, 20)`. Any concurrent transaction attempting `INSERT INTO t (id) VALUES (15)` blocks until the lock is released. While this eliminates phantoms, it is a primary source of deadlocks in MySQL.",
    "importantPoints": [
      "Gap lock: Locks the gap between index records.",
      "Next-Key lock: Record lock + gap lock.",
      "Prevents phantom inserts in Repeatable Read in InnoDB.",
      "Major source of deadlocks during concurrent INSERTs."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Gap Locks and Next-Key Locks in MySQL InnoDB",
        "code": "-- Demonstration for: Gap Locks and Next-Key Locks in MySQL InnoDB\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Two-Phase Locking (2PL) Protocol",
    "question": "What is the Two-Phase Locking (2PL) protocol, and how does Strict 2PL differ from Basic 2PL?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "two-phase-locking",
      "2pl",
      "serializability"
    ],
    "interviewAnswer": "2PL is a concurrency control protocol with two phases: Growing Phase (locks are acquired, none released) and Shrinking Phase (locks are released, none acquired). Strict 2PL (used in commercial databases) holds all exclusive locks until transaction COMMIT or ROLLBACK to prevent cascading aborts.",
    "answer": "2PL mathematically guarantees serializability. In basic 2PL, a transaction can release locks before ending, but if it aborts, other transactions that read the unlocked dirty data must also abort (cascading rollback). Rigorous/Strict 2PL prevents this by holding all locks until final commit/rollback, ensuring strict isolation.",
    "explanation": "2PL mathematically guarantees serializability. In basic 2PL, a transaction can release locks before ending, but if it aborts, other transactions that read the unlocked dirty data must also abort (cascading rollback). Rigorous/Strict 2PL prevents this by holding all locks until final commit/rollback, ensuring strict isolation.",
    "importantPoints": [
      "Phase 1: Growing (acquires locks).",
      "Phase 2: Shrinking (releases locks).",
      "Strict 2PL retains locks until transaction end, eliminating cascading aborts."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Two-Phase Locking (2PL) Protocol",
        "code": "-- Demonstration for: Two-Phase Locking (2PL) Protocol\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Write-Ahead Logging (WAL) and the ARIES Recovery Algorithm",
    "question": "What is Write-Ahead Logging (WAL), and why must WAL records be flushed to disk before table data pages?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "wal",
      "redo-log",
      "aries",
      "crash-recovery"
    ],
    "interviewAnswer": "Write-Ahead Logging mandates that changes must be written and flushed to the sequential WAL/Redo log on non-volatile disk BEFORE modified data pages are written to table data files. This guarantees durability and allows the database to recover to a consistent state after sudden power loss using ARIES recovery.",
    "answer": "Modifying random 8KB data pages in place on disk is too slow for transactions. Instead, databases append compact delta descriptions (Redo/Undo records) to a sequential log file and flush it with `fsync()`. During crash recovery, the engine reads WAL: REDO reapplies all committed changes not yet flushed to data files; UNDO rolls back all uncommitted active transactions.",
    "explanation": "Modifying random 8KB data pages in place on disk is too slow for transactions. Instead, databases append compact delta descriptions (Redo/Undo records) to a sequential log file and flush it with `fsync()`. During crash recovery, the engine reads WAL: REDO reapplies all committed changes not yet flushed to data files; UNDO rolls back all uncommitted active transactions.",
    "importantPoints": [
      "Log before data: WAL flushed before dirty data pages.",
      "Sequential append I/O is 100x faster than random page writes.",
      "ARIES algorithm: Analysis -> REDO -> UNDO phases on crash recovery."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Write-Ahead Logging (WAL) and the ARIES Recovery Algorithm",
        "code": "-- Demonstration for: Write-Ahead Logging (WAL) and the ARIES Recovery Algorithm\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Checkpoints and WAL Truncation",
    "question": "What is a database Checkpoint, and how does it bound crash recovery time?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "checkpoint",
      "wal",
      "crash-recovery"
    ],
    "interviewAnswer": "A checkpoint flushes all dirty in-memory data pages to physical disk and writes a checkpoint record to the WAL. During crash recovery, the database only needs to replay WAL records generated AFTER the latest checkpoint, bounding recovery time and allowing old WAL segments to be recycled.",
    "answer": "Without checkpoints, WAL would grow infinitely and crash recovery would require replaying logs from database inception. The checkpoint process periodically flushes all modified buffer pages to disk and updates the catalog. Once completed, all WAL generated before the checkpoint can be safely truncated or archived.",
    "explanation": "Without checkpoints, WAL would grow infinitely and crash recovery would require replaying logs from database inception. The checkpoint process periodically flushes all modified buffer pages to disk and updates the catalog. Once completed, all WAL generated before the checkpoint can be safely truncated or archived.",
    "importantPoints": [
      "Flushes dirty buffer pool pages to disk.",
      "Advances the recovery start point in the WAL.",
      "Recycles disk space occupied by old WAL segments."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Checkpoints and WAL Truncation",
        "code": "-- Demonstration for: Checkpoints and WAL Truncation\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Savepoints and Partial Rollbacks",
    "question": "How do SAVEPOINTs allow partial transaction rollbacks without aborting the entire transaction?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "savepoint",
      "rollback-to-savepoint"
    ],
    "interviewAnswer": "SAVEPOINT savepoint_name marks a checkpoint within an open transaction. If a subsequent statement fails, ROLLBACK TO SAVEPOINT savepoint_name undoes only the operations executed after that savepoint, keeping preceding operations intact and uncommitted.",
    "answer": "When executing a batch of independent operations, you can set `SAVEPOINT my_savepoint;`. If an insert fails a constraint, executing `ROLLBACK TO SAVEPOINT my_savepoint` restores the transaction to that specific checkpoint, allowing subsequent statements to continue and commit without rolling back the entire transaction.",
    "explanation": "When executing a batch of independent operations, you can set `SAVEPOINT my_savepoint;`. If an insert fails a constraint, executing `ROLLBACK TO SAVEPOINT my_savepoint` restores the transaction to that specific checkpoint, allowing subsequent statements to continue and commit without rolling back the entire transaction.",
    "importantPoints": [
      "Enables fine-grained partial rollbacks.",
      "Avoids aborting long-running multi-step transactions.",
      "Does not release transaction-level locks held prior to the savepoint."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Savepoints and Partial Rollbacks",
        "code": "-- Demonstration for: Savepoints and Partial Rollbacks\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Autocommit Mode and Implicit vs Explicit Transactions",
    "question": "How does Autocommit mode work, and what are the performance dangers of running batch operations in autocommit?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "autocommit",
      "fsync",
      "batch-processing"
    ],
    "interviewAnswer": "In autocommit mode (default in most drivers), every single SQL statement is wrapped in its own implicit transaction that immediately issues an fsync flush upon completion. Running 10,000 INSERTs in autocommit forces 10,000 sequential disk flushes, slowing the batch down from 100ms to 30 seconds.",
    "answer": "Each commit requires flushing the WAL to disk using physical `fsync()`. In autocommit mode, inserting 1,000 rows executes 1,000 separate transactions and 1,000 disk syncs. Wrapping all 1,000 inserts inside an explicit `BEGIN ... COMMIT` block flushes to disk only once, increasing throughput by up to 100x.",
    "explanation": "Each commit requires flushing the WAL to disk using physical `fsync()`. In autocommit mode, inserting 1,000 rows executes 1,000 separate transactions and 1,000 disk syncs. Wrapping all 1,000 inserts inside an explicit `BEGIN ... COMMIT` block flushes to disk only once, increasing throughput by up to 100x.",
    "importantPoints": [
      "Autocommit flushes to disk on every single DML statement.",
      "Batch operations must be wrapped in explicit BEGIN ... COMMIT.",
      "Reduces disk fsync syscalls from N to 1."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Autocommit Mode and Implicit vs Explicit Transactions",
        "code": "-- Demonstration for: Autocommit Mode and Implicit vs Explicit Transactions\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Serializable Snapshot Isolation (SSI)",
    "question": "How does Serializable Snapshot Isolation (SSI) in PostgreSQL achieve serializability without traditional read locks?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "ssi",
      "serializable",
      "postgresql",
      "lock-free"
    ],
    "interviewAnswer": "SSI allows transactions to execute using standard lock-free snapshot isolation. It tracks read-write conflicts (rw-antidependencies) in an in-memory dependency graph (SIREAD locks). If a cycle of dependencies (a dangerous structure) is detected, it aborts one transaction with a serialization failure error.",
    "answer": "Traditional 2PL serializability requires shared read locks that block concurrent writers, severely hurting read throughput. PostgreSQL SSI uses SIREAD \"locks\", which are non-blocking memory markers. They track dependencies between transactions without blocking reads or writes. If a potential anomaly cycle appears, the engine raises error 40001 (serialization_failure), requiring an application retry.",
    "explanation": "Traditional 2PL serializability requires shared read locks that block concurrent writers, severely hurting read throughput. PostgreSQL SSI uses SIREAD \"locks\", which are non-blocking memory markers. They track dependencies between transactions without blocking reads or writes. If a potential anomaly cycle appears, the engine raises error 40001 (serialization_failure), requiring an application retry.",
    "importantPoints": [
      "Lock-free serializability: Readers never block writers.",
      "Uses non-blocking SIREAD markers to track conflict cycles.",
      "Aborts conflicting transactions with serialization_failure (error 40001)."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Serializable Snapshot Isolation (SSI)",
        "code": "-- Demonstration for: Serializable Snapshot Isolation (SSI)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Lock Escalation in SQL Server",
    "question": "What is Lock Escalation in SQL Server, and why does it occur during large UPDATE or DELETE operations?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "lock-escalation",
      "sql-server",
      "table-lock"
    ],
    "interviewAnswer": "Lock escalation is the process of converting many fine-grained locks (e.g. 5,000+ row locks) into a single coarse-grained table lock to prevent the database lock manager from exhausting system memory. It can suddenly block all concurrent access to the entire table.",
    "answer": "Maintaining hundreds of thousands of individual row locks consumes significant RAM. When a transaction in SQL Server acquires more than approximately 5,000 row locks on a single table, the engine escalates them to an exclusive table lock. This instantly freezes all other queries on that table. Mitigation: Batch large updates/deletes into chunks of 1,000 rows.",
    "explanation": "Maintaining hundreds of thousands of individual row locks consumes significant RAM. When a transaction in SQL Server acquires more than approximately 5,000 row locks on a single table, the engine escalates them to an exclusive table lock. This instantly freezes all other queries on that table. Mitigation: Batch large updates/deletes into chunks of 1,000 rows.",
    "importantPoints": [
      "Converts thousands of row locks into 1 table lock.",
      "Triggered around 5,000 locks to conserve lock manager RAM.",
      "Prevent by batching large DML operations into smaller chunks."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Lock Escalation in SQL Server",
        "code": "-- Demonstration for: Lock Escalation in SQL Server\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Long-Running Transactions: Production Hazards",
    "question": "Why are long-running active transactions hazardous in relational databases like PostgreSQL and MySQL?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "long-running-transactions",
      "vacuum",
      "undo-log",
      "table-bloat"
    ],
    "interviewAnswer": "Long-running transactions prevent VACUUM from cleaning dead rows in PostgreSQL (causing massive table/index bloat), prevent MySQL Undo Logs from being purged (causing disk fill-up), hold locks that block DDL migrations, and risk transaction ID wraparound.",
    "answer": "In MVCC, rows deleted or updated by other transactions cannot be physically purged as long as ANY active transaction started before that deletion. An open transaction (e.g. an uncommitted query left open in a developer's IDE) prevents autovacuum from cleaning dead tuples across the entire database, leading to explosive table bloat, disk exhaustion, and degraded query performance.",
    "explanation": "In MVCC, rows deleted or updated by other transactions cannot be physically purged as long as ANY active transaction started before that deletion. An open transaction (e.g. an uncommitted query left open in a developer's IDE) prevents autovacuum from cleaning dead tuples across the entire database, leading to explosive table bloat, disk exhaustion, and degraded query performance.",
    "importantPoints": [
      "Blocks autovacuum cleanup, causing system-wide table bloat.",
      "Prevents undo log purging in MySQL InnoDB.",
      "Blocks DDL schema migrations waiting for AccessExclusiveLock.",
      "Configure idle_in_transaction_session_timeout to auto-terminate orphaned sessions."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Long-Running Transactions: Production Hazards",
        "code": "-- Demonstration for: Long-Running Transactions: Production Hazards\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Two-Phase Commit (2PC) in Distributed Transactions",
    "question": "How does the Two-Phase Commit (2PC) protocol ensure atomicity across multiple distributed database nodes?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "two-phase-commit",
      "2pc",
      "distributed-transactions"
    ],
    "interviewAnswer": "2PC coordinates commits across distributed nodes via a Coordinator: 1) Prepare Phase: Coordinator asks all participant nodes to execute the transaction, write WAL, and vote YES (prepared) or NO. 2) Commit Phase: If all vote YES, coordinator logs commit and instructs all nodes to COMMIT. If any node votes NO or times out, coordinator orders all nodes to ROLLBACK.",
    "answer": "2PC guarantees all-or-nothing atomicity across independent databases. However, it is a blocking protocol: if the coordinator crashes during the commit phase after participants vote YES, participants must hold row locks indefinitely until the coordinator recovers, creating severe availability bottlenecks.",
    "explanation": "2PC guarantees all-or-nothing atomicity across independent databases. However, it is a blocking protocol: if the coordinator crashes during the commit phase after participants vote YES, participants must hold row locks indefinitely until the coordinator recovers, creating severe availability bottlenecks.",
    "importantPoints": [
      "Phase 1: Prepare (participants acquire locks, write WAL, vote).",
      "Phase 2: Commit / Rollback (all commit or all abort).",
      "Blocking protocol: Coordinator failure leaves participants in doubt."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Two-Phase Commit (2PC) in Distributed Transactions",
        "code": "-- Demonstration for: Two-Phase Commit (2PC) in Distributed Transactions\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Optimistic Concurrency Control (OCC) Architecture",
    "question": "Explain the three phases of Optimistic Concurrency Control (OCC) and when it outperforms Pessimistic Locking.",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "occ",
      "concurrency",
      "optimistic-locking"
    ],
    "interviewAnswer": "OCC consists of 1) Read Phase (reads data without locks, records version), 2) Validation Phase (checks if data was modified by another transaction), and 3) Write Phase (commits changes if valid, or aborts/retries if conflicts occurred). OCC outperforms pessimistic locking in read-heavy systems with low write contention.",
    "answer": "Pessimistic locking incurs lock acquisition overhead and blocks concurrent readers. In low-contention environments where conflicts are rare, OCC eliminates lock overhead entirely: applications read freely, and validate versions at commit time (`UPDATE ... WHERE version = @v`). If conflict rate is low (< 1%), OCC yields significantly higher throughput.",
    "explanation": "Pessimistic locking incurs lock acquisition overhead and blocks concurrent readers. In low-contention environments where conflicts are rare, OCC eliminates lock overhead entirely: applications read freely, and validate versions at commit time (`UPDATE ... WHERE version = @v`). If conflict rate is low (< 1%), OCC yields significantly higher throughput.",
    "importantPoints": [
      "Phases: Read -> Validate -> Write.",
      "Zero lock overhead during read phase.",
      "Superior throughput in low-conflict workloads; degrades under high contention."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Optimistic Concurrency Control (OCC) Architecture",
        "code": "-- Demonstration for: Optimistic Concurrency Control (OCC) Architecture\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Transaction ID Wraparound in PostgreSQL",
    "question": "What is Transaction ID (XID) wraparound in PostgreSQL, and how does the database prevent it?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "wraparound",
      "postgresql",
      "vacuum-freeze",
      "xid"
    ],
    "interviewAnswer": "PostgreSQL uses 32-bit transaction IDs (approx. 4 billion XIDs), comparing them modulo 2^31 to determine past vs future. If a database runs 2 billion transactions without freezing old rows, past transaction IDs wrap around and appear to be in the future, rendering all historical data invisible. Autovacuum prevents this by \"freezing\" old XIDs.",
    "answer": "Because XID is a 32-bit integer, transaction 2,000,000,001 would appear older than transaction 1. To prevent catastrophic data loss, `VACUUM FREEZE` replaces old `xmin` values with a special FrozenXID bit, marking rows as permanently in the past. If wraparound approaches within 10M transactions, Postgres enters emergency read-only mode to force vacuuming.",
    "explanation": "Because XID is a 32-bit integer, transaction 2,000,000,001 would appear older than transaction 1. To prevent catastrophic data loss, `VACUUM FREEZE` replaces old `xmin` values with a special FrozenXID bit, marking rows as permanently in the past. If wraparound approaches within 10M transactions, Postgres enters emergency read-only mode to force vacuuming.",
    "importantPoints": [
      "32-bit XID space requires modulo 2^31 comparison.",
      "VACUUM FREEZE converts old transaction IDs into permanently frozen rows.",
      "Database enters emergency read-only mode if wraparound limit is reached."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Transaction ID Wraparound in PostgreSQL",
        "code": "-- Demonstration for: Transaction ID Wraparound in PostgreSQL\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Dirty Reads: How They Occur and Impact Applications",
    "question": "Describe a concrete scenario where a Dirty Read causes incorrect financial transactions.",
    "difficulty": "easy",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "dirty-read",
      "isolation-levels",
      "read-uncommitted"
    ],
    "interviewAnswer": "A dirty read occurs when Transaction 2 reads uncommitted modifications made by Transaction 1. If Transaction 1 subsequently rolls back, Transaction 2 has acted upon data that never officially existed in the database.",
    "answer": "Scenario: User A transfers $500. Transaction 1 deducts $500 from Account A. Under READ UNCOMMITTED, Transaction 2 reads Account A balance ($0) and denies a critical bill payment due to insufficient funds. Immediately after, Transaction 1 fails due to network error and rolls back Account A back to $500. Transaction 2 acted on a phantom state.",
    "explanation": "Scenario: User A transfers $500. Transaction 1 deducts $500 from Account A. Under READ UNCOMMITTED, Transaction 2 reads Account A balance ($0) and denies a critical bill payment due to insufficient funds. Immediately after, Transaction 1 fails due to network error and rolls back Account A back to $500. Transaction 2 acted on a phantom state.",
    "importantPoints": [
      "Reading uncommitted data that later rolls back.",
      "Forbidden in Read Committed, Repeatable Read, and Serializable.",
      "Only permitted in Read Uncommitted."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Dirty Reads: How They Occur and Impact Applications",
        "code": "-- Demonstration for: Dirty Reads: How They Occur and Impact Applications\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Non-Repeatable Read (Fuzzy Read) Concrete Example",
    "question": "Give a concrete example of a Non-Repeatable Read anomaly occurring in an inventory system under Read Committed.",
    "difficulty": "easy",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "non-repeatable-read",
      "read-committed"
    ],
    "interviewAnswer": "A non-repeatable read occurs when a transaction reads the same row twice within its boundary and gets different values because another transaction updated and committed changes in between the two reads.",
    "answer": "Transaction 1 reads product stock: 1 item remaining. While T1 processes checkout logic, Transaction 2 updates stock to 0 and commits. Transaction 1 re-reads stock to confirm decrement and now finds 0 items. T1 saw two different values for the same row during a single transaction.",
    "explanation": "Transaction 1 reads product stock: 1 item remaining. While T1 processes checkout logic, Transaction 2 updates stock to 0 and commits. Transaction 1 re-reads stock to confirm decrement and now finds 0 items. T1 saw two different values for the same row during a single transaction.",
    "importantPoints": [
      "Re-reading the exact same row yields modified values.",
      "Occurs under Read Committed isolation.",
      "Prevented by Repeatable Read and Serializable."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Non-Repeatable Read (Fuzzy Read) Concrete Example",
        "code": "-- Demonstration for: Non-Repeatable Read (Fuzzy Read) Concrete Example\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Phantom Read Concrete Example",
    "question": "How does a Phantom Read differ from a Non-Repeatable Read? Provide an example.",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "phantom-read",
      "non-repeatable-read"
    ],
    "interviewAnswer": "A Non-Repeatable Read occurs when an existing row's values change. A Phantom Read occurs when a range query returns a completely new row (or missing row) that was inserted or deleted by another committed transaction.",
    "answer": "Transaction 1 runs `SELECT COUNT(*) FROM users WHERE age >= 21` and counts 50 users. Concurrently, Transaction 2 inserts a new 25-year-old user and commits. Transaction 1 re-executes the exact same query and now counts 51 users. The new user is a \"phantom\" row that appeared in the result set.",
    "explanation": "Transaction 1 runs `SELECT COUNT(*) FROM users WHERE age >= 21` and counts 50 users. Concurrently, Transaction 2 inserts a new 25-year-old user and commits. Transaction 1 re-executes the exact same query and now counts 51 users. The new user is a \"phantom\" row that appeared in the result set.",
    "importantPoints": [
      "Non-repeatable read affects existing rows.",
      "Phantom read affects range query row counts via new inserts/deletes.",
      "Prevented by Next-Key locks in InnoDB or Snapshot Isolation in Postgres."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Phantom Read Concrete Example",
        "code": "-- Demonstration for: Phantom Read Concrete Example\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Transaction Rollback Mechanisms (Undo Logs vs In-Place Shadowing)",
    "question": "How do relational database storage engines execute a ROLLBACK command internally?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "rollback",
      "undo-log",
      "internals"
    ],
    "interviewAnswer": "In engines with Undo Logs (MySQL InnoDB, Oracle), the engine reads the transaction's undo log records in reverse chronological order and applies compensatory inverse operations to revert data pages. In PostgreSQL MVCC, rollback is instantaneous: it simply marks the transaction aborted in the Commit Log (pg_xact).",
    "answer": "1) In MySQL InnoDB, rollback traverses the transaction's active Undo Chain, executing reverse modifications (converting INSERTs to DELETEs, restoring old values for UPDATEs), which takes time proportional to the work done. 2) In PostgreSQL, rows are written with the current XID in `xmin`. A ROLLBACK simply sets a 2-bit flag in `pg_xact` to ABORTED in a single I/O operation. Any subsequent query reading those rows sees the aborted XID and ignores them.",
    "explanation": "1) In MySQL InnoDB, rollback traverses the transaction's active Undo Chain, executing reverse modifications (converting INSERTs to DELETEs, restoring old values for UPDATEs), which takes time proportional to the work done. 2) In PostgreSQL, rows are written with the current XID in `xmin`. A ROLLBACK simply sets a 2-bit flag in `pg_xact` to ABORTED in a single I/O operation. Any subsequent query reading those rows sees the aborted XID and ignores them.",
    "importantPoints": [
      "InnoDB: Applies inverse undo logs sequentially.",
      "PostgreSQL: Instantaneous; marks transaction ABORTED in pg_xact.",
      "Dead rows left by aborted transactions are cleaned later by VACUUM."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Transaction Rollback Mechanisms (Undo Logs vs In-Place Shadowing)",
        "code": "-- Demonstration for: Transaction Rollback Mechanisms (Undo Logs vs In-Place Shadowing)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Row-Level Locking Overhead vs Table-Level Locking",
    "question": "What are the architectural trade-offs between Row-Level Locking and Table-Level Locking?",
    "difficulty": "medium",
    "questionType": "Trade-off",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "row-locks",
      "table-locks",
      "concurrency",
      "trade-offs"
    ],
    "interviewAnswer": "Row-level locking provides maximum concurrency (many transactions modify different rows of the same table simultaneously), but consumes significant memory for lock structures. Table-level locking requires virtually zero memory and eliminates deadlocks, but kills concurrency by serializing all table access.",
    "answer": "MyIsam historically used table-level locks, leading to complete write bottlenecks under concurrent web traffic. InnoDB and PostgreSQL use row-level locking, enabling thousands of concurrent queries. However, managing millions of row locks requires lock memory tracking (or lock escalation in SQL Server) and introduces potential deadlock conditions.",
    "explanation": "MyIsam historically used table-level locks, leading to complete write bottlenecks under concurrent web traffic. InnoDB and PostgreSQL use row-level locking, enabling thousands of concurrent queries. However, managing millions of row locks requires lock memory tracking (or lock escalation in SQL Server) and introduces potential deadlock conditions.",
    "importantPoints": [
      "Row locks: High concurrency, higher memory, potential deadlocks.",
      "Table locks: Zero lock memory, zero deadlocks, terrible write concurrency."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Row-Level Locking Overhead vs Table-Level Locking",
        "code": "-- Demonstration for: Row-Level Locking Overhead vs Table-Level Locking\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Lock Wait Timeout Configuration",
    "question": "Why is configuring lock_timeout and statement_timeout critical in web application connection pools?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "lock-timeout",
      "connection-pool",
      "production-safety"
    ],
    "interviewAnswer": "Without timeouts, a transaction waiting for a lock will block indefinitely. If multiple requests pile up, the entire application connection pool is exhausted within seconds, causing a total cascading outage across the web tier.",
    "answer": "In production systems, setting `lock_timeout = '2s'` and `statement_timeout = '5s'` ensures that if a migration or concurrent write holds a lock, waiting web requests fail fast rather than hanging indefinitely. This protects connection pool capacity and prevents server thread starvation.",
    "explanation": "In production systems, setting `lock_timeout = '2s'` and `statement_timeout = '5s'` ensures that if a migration or concurrent write holds a lock, waiting web requests fail fast rather than hanging indefinitely. This protects connection pool capacity and prevents server thread starvation.",
    "importantPoints": [
      "Prevents indefinite thread blocking on locked resources.",
      "Protects connection pool from cascading exhaustion.",
      "Fails fast so clients can retry or display meaningful errors."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Lock Wait Timeout Configuration",
        "code": "-- Demonstration for: Lock Wait Timeout Configuration\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "DDL Locks vs DML Locks (Metadata Locks in MySQL / AccessExclusive in Postgres)",
    "question": "How can a simple SELECT query block an ALTER TABLE migration and subsequent queries in PostgreSQL and MySQL?",
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "ddl-locks",
      "metadata-locks",
      "postgresql",
      "mysql"
    ],
    "interviewAnswer": "A long-running SELECT acquires an AccessShare / Metadata lock on the table. An ALTER TABLE requires an AccessExclusive lock and queues behind the SELECT. All subsequent SELECT queries then queue behind the ALTER TABLE, completely blocking all traffic to that table.",
    "answer": "In PostgreSQL, `SELECT` takes an `AccessShareLock`. When an `ALTER TABLE` is issued, it requests an `AccessExclusiveLock`. Because exclusive locks have queue priority to prevent starvation, the ALTER TABLE waits for the slow SELECT to finish. All new incoming SELECTs are blocked behind the waiting ALTER TABLE, causing an immediate connection pileup and site outage.",
    "explanation": "In PostgreSQL, `SELECT` takes an `AccessShareLock`. When an `ALTER TABLE` is issued, it requests an `AccessExclusiveLock`. Because exclusive locks have queue priority to prevent starvation, the ALTER TABLE waits for the slow SELECT to finish. All new incoming SELECTs are blocked behind the waiting ALTER TABLE, causing an immediate connection pileup and site outage.",
    "importantPoints": [
      "SELECT holds AccessShareLock / Metadata lock.",
      "ALTER TABLE requests AccessExclusiveLock and queues behind active SELECTs.",
      "Incoming reads queue behind the waiting DDL, causing a traffic blackout."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "DDL Locks vs DML Locks (Metadata Locks in MySQL / AccessExclusive in Postgres)",
        "code": "-- Demonstration for: DDL Locks vs DML Locks (Metadata Locks in MySQL / AccessExclusive in Postgres)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Distributed Saga Pattern vs Two-Phase Commit",
    "question": "When should microservice architectures use the Saga Pattern instead of distributed ACID two-phase commits?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "saga-pattern",
      "microservices",
      "distributed-systems"
    ],
    "interviewAnswer": "Sagas should be used across microservices because 2PC creates tight coupling, holds database locks across network boundaries, and violates service autonomy. A Saga breaks a business transaction into local transactions coordinated via events, using compensating transactions to undo steps if a failure occurs.",
    "answer": "In modern cloud architectures, services possess isolated databases (e.g. Order DB, Payment DB, Inventory DB). Running 2PC across them introduces blocking locks and high latency. Sagas provide eventual consistency: Step 1 reserves inventory, Step 2 charges card. If Step 2 fails, a compensating event restores inventory.",
    "explanation": "In modern cloud architectures, services possess isolated databases (e.g. Order DB, Payment DB, Inventory DB). Running 2PC across them introduces blocking locks and high latency. Sagas provide eventual consistency: Step 1 reserves inventory, Step 2 charges card. If Step 2 fails, a compensating event restores inventory.",
    "importantPoints": [
      "Avoids distributed database locks and 2PC coordinator bottlenecks.",
      "Coordinates local ACID transactions via events/orchestrators.",
      "Employs compensating transactions for rollbacks."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Distributed Saga Pattern vs Two-Phase Commit",
        "code": "-- Demonstration for: Distributed Saga Pattern vs Two-Phase Commit\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Read Committed: Statement-Level Read View",
    "question": "Why does Read Committed create a new snapshot for every single statement rather than per transaction?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "read-committed",
      "snapshot",
      "query-lifecycle"
    ],
    "interviewAnswer": "In Read Committed, each statement inside a multi-statement transaction sees data committed right up to the moment that specific statement began execution. This maximizes concurrency by reflecting the freshest data without requiring transaction-level consistency locks.",
    "answer": "If Transaction 1 runs `SELECT balance FROM accounts WHERE id = 1` (sees $100), then does some processing while Transaction 2 updates and commits balance = $150, a subsequent `SELECT balance FROM accounts WHERE id = 1` within Transaction 1 will see $150. A new Read View is generated for every query execution.",
    "explanation": "If Transaction 1 runs `SELECT balance FROM accounts WHERE id = 1` (sees $100), then does some processing while Transaction 2 updates and commits balance = $150, a subsequent `SELECT balance FROM accounts WHERE id = 1` within Transaction 1 will see $150. A new Read View is generated for every query execution.",
    "importantPoints": [
      "Fresh snapshot instantiated per statement.",
      "Reflects changes committed by other transactions mid-transaction.",
      "Maximizes concurrency at the expense of repeatability."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Read Committed: Statement-Level Read View",
        "code": "-- Demonstration for: Read Committed: Statement-Level Read View\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Advisory Locks in PostgreSQL",
    "question": "What are PostgreSQL Advisory Locks, and how are they used for application-level distributed locking?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "advisory-locks",
      "postgresql",
      "distributed-lock"
    ],
    "interviewAnswer": "Advisory locks are application-defined locks managed by PostgreSQL that have no association with table rows or schema objects. Applications use them via pg_advisory_lock(key) to implement distributed mutexes, leader election, or scheduled task deduplication without table locking.",
    "answer": "Instead of creating a fake table to lock rows, PostgreSQL provides 64-bit integer advisory locks: `SELECT pg_try_advisory_lock(12345);`. If true, the worker holds the exclusive lock across the cluster. When done, `SELECT pg_advisory_unlock(12345);` releases it. They can be session-scoped or transaction-scoped.",
    "explanation": "Instead of creating a fake table to lock rows, PostgreSQL provides 64-bit integer advisory locks: `SELECT pg_try_advisory_lock(12345);`. If true, the worker holds the exclusive lock across the cluster. When done, `SELECT pg_advisory_unlock(12345);` releases it. They can be session-scoped or transaction-scoped.",
    "importantPoints": [
      "Explicit application locks without table rows.",
      "Used for distributed cron task deduplication.",
      "Session-scoped or transaction-scoped."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Advisory Locks in PostgreSQL",
        "code": "-- Demonstration for: Advisory Locks in PostgreSQL\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Explicit Locking with LOCK TABLE: Modes and Risks",
    "question": "When is LOCK TABLE appropriate, and what are the catastrophic risks of using it in production OLTP?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "lock-table",
      "table-locks",
      "oltp-risks"
    ],
    "interviewAnswer": "LOCK TABLE is used during administrative batch maintenance or table truncation. Using it in production OLTP is catastrophic because it locks the entire table, blocking all concurrent transactions, causing connection pool exhaustion, and halting application throughput.",
    "answer": "Explicitly acquiring `LOCK TABLE users IN EXCLUSIVE MODE;` prevents any other session from reading with locks or writing to `users`. In high-volume systems handling 1,000 requests/sec, an exclusive table lock held for even 1 second creates a queue of 1,000 blocked database threads, causing downstream timeouts.",
    "explanation": "Explicitly acquiring `LOCK TABLE users IN EXCLUSIVE MODE;` prevents any other session from reading with locks or writing to `users`. In high-volume systems handling 1,000 requests/sec, an exclusive table lock held for even 1 second creates a queue of 1,000 blocked database threads, causing downstream timeouts.",
    "importantPoints": [
      "Locks entire relation across all sessions.",
      "Severe concurrency killer in OLTP systems.",
      "Should be restricted to offline maintenance windows."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Explicit Locking with LOCK TABLE: Modes and Risks",
        "code": "-- Demonstration for: Explicit Locking with LOCK TABLE: Modes and Risks\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Pessimistic Locking in High-Contention Ticketing Systems",
    "question": "How do you design a concert seat reservation system using SELECT ... FOR UPDATE to guarantee zero double-bookings?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "concurrency",
      "pessimistic-locking",
      "ticketing"
    ],
    "interviewAnswer": "In a single transaction, query the seat using SELECT status FROM seats WHERE seat_id = 42 FOR UPDATE. If status is AVAILABLE, update to RESERVED and commit. Concurrent requests for that seat will block until the first commits, then immediately read status = RESERVED and be rejected.",
    "answer": "Pessimistic locking guarantees that only one checkout thread can inspect and reserve a seat at any millisecond: `BEGIN; SELECT status FROM seats WHERE seat_id = :id FOR UPDATE; IF status == 'AVAILABLE' THEN UPDATE seats SET status = 'RESERVED', user_id = :uid; COMMIT; ELSE ROLLBACK;`",
    "explanation": "Pessimistic locking guarantees that only one checkout thread can inspect and reserve a seat at any millisecond: `BEGIN; SELECT status FROM seats WHERE seat_id = :id FOR UPDATE; IF status == 'AVAILABLE' THEN UPDATE seats SET status = 'RESERVED', user_id = :uid; COMMIT; ELSE ROLLBACK;`",
    "importantPoints": [
      "Serializes access at the exact row level.",
      "Completely eliminates double-booking race conditions.",
      "Keep transaction duration under 50ms to minimize lock wait queues."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Pessimistic Locking in High-Contention Ticketing Systems",
        "code": "-- Demonstration for: Pessimistic Locking in High-Contention Ticketing Systems\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Dirty Write Anomaly and Why All Commercial Engines Prevent It",
    "question": "What is a Dirty Write anomaly, and why do all relational engines prevent it even under Read Uncommitted?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "dirty-write",
      "concurrency",
      "internals"
    ],
    "interviewAnswer": "A Dirty Write occurs when Transaction 2 overwrites an uncommitted value written by Transaction 1. If Transaction 1 rolls back, it would revert Transaction 2's uncommitted write, breaking atomicity. Commercial databases prevent dirty writes at ALL isolation levels by requiring exclusive write locks.",
    "answer": "Even under READ UNCOMMITTED (which permits dirty reads), dirty writes are strictly forbidden. If Transaction 1 updates row X to 10, and Transaction 2 updates row X to 20 before T1 commits, rolling back T1 would make it impossible to know whether X should revert to its original value or keep 20. Thus, write locks are ALWAYS exclusive until transaction commit/rollback.",
    "explanation": "Even under READ UNCOMMITTED (which permits dirty reads), dirty writes are strictly forbidden. If Transaction 1 updates row X to 10, and Transaction 2 updates row X to 20 before T1 commits, rolling back T1 would make it impossible to know whether X should revert to its original value or keep 20. Thus, write locks are ALWAYS exclusive until transaction commit/rollback.",
    "importantPoints": [
      "Overwriting uncommitted writes.",
      "Breaks database recovery and rollback atomicity.",
      "Prevented unconditionally at all isolation levels in all ACID databases."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Dirty Write Anomaly and Why All Commercial Engines Prevent It",
        "code": "-- Demonstration for: Dirty Write Anomaly and Why All Commercial Engines Prevent It\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Transaction Log Bloat from Uncommitted Large Transactions",
    "question": "What happens to the database transaction log when a single transaction deletes 50 million rows in one statement?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "wal-bloat",
      "large-transactions",
      "batching"
    ],
    "interviewAnswer": "A single 50M-row delete generates massive amounts of WAL/undo records that cannot be truncated until the transaction commits. This exhausts disk space, inflates replication lag, risks running out of log file quota, and causes severe locking delays.",
    "answer": "Because relational engines must be able to rollback the entire 50M-row deletion if an error occurs, every single deleted row version and index deletion record must be written to the active transaction log without truncation. The database disk fills up, and replication replicas choke. Fix: Batch deletes in chunks of 5,000 with explicit commits.",
    "explanation": "Because relational engines must be able to rollback the entire 50M-row deletion if an error occurs, every single deleted row version and index deletion record must be written to the active transaction log without truncation. The database disk fills up, and replication replicas choke. Fix: Batch deletes in chunks of 5,000 with explicit commits.",
    "importantPoints": [
      "Generates gigabytes of WAL that cannot be recycled before commit.",
      "Risk of disk space exhaustion and replica lag.",
      "Always batch massive DML operations into smaller committed chunks."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Transaction Log Bloat from Uncommitted Large Transactions",
        "code": "-- Demonstration for: Transaction Log Bloat from Uncommitted Large Transactions\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Deferred Constraint Verification and Transaction Commit",
    "question": "What happens if a DEFERRABLE INITIALLY DEFERRED constraint is violated during transaction execution versus commit time?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "deferrable",
      "constraints",
      "commit"
    ],
    "interviewAnswer": "During transaction execution, the violation is permitted silently. At COMMIT time, the database validates all deferred constraints. If any constraint is violated, the COMMIT command fails and the entire transaction is rolled back.",
    "answer": "Deferred constraints allow temporary intermediate violations during complex data manipulations (e.g. swapping foreign keys). The database skips per-statement validation. When `COMMIT` is executed, the engine evaluates all deferred constraints across affected rows; if any constraint fails, the engine throws a constraint violation and aborts the transaction.",
    "explanation": "Deferred constraints allow temporary intermediate violations during complex data manipulations (e.g. swapping foreign keys). The database skips per-statement validation. When `COMMIT` is executed, the engine evaluates all deferred constraints across affected rows; if any constraint fails, the engine throws a constraint violation and aborts the transaction.",
    "importantPoints": [
      "Intermediate violations are tolerated mid-transaction.",
      "Validation is deferred to COMMIT.",
      "Failure at commit forces a full transaction rollback."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Deferred Constraint Verification and Transaction Commit",
        "code": "-- Demonstration for: Deferred Constraint Verification and Transaction Commit\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Optimistic Locking with Timestamp vs Integer Version",
    "question": "Why is an incrementing integer version column superior to a last_updated timestamp for optimistic locking?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "optimistic-locking",
      "versioning",
      "timestamps"
    ],
    "interviewAnswer": "System clocks have limited precision and can collide when multiple updates occur within the same millisecond. Clocks can also drift or jump backward due to NTP synchronization. An integer version (version = version + 1) is strictly monotonic and immune to clock jitter.",
    "answer": "Relying on `WHERE updated_at = :ts` is dangerous: two concurrent transactions executing on multi-core servers in the same millisecond can read the exact same timestamp and both succeed in overwriting data. An auto-incrementing integer version `SET version = version + 1 WHERE version = :old_v` guarantees strict atomic state transitions.",
    "explanation": "Relying on `WHERE updated_at = :ts` is dangerous: two concurrent transactions executing on multi-core servers in the same millisecond can read the exact same timestamp and both succeed in overwriting data. An auto-incrementing integer version `SET version = version + 1 WHERE version = :old_v` guarantees strict atomic state transitions.",
    "importantPoints": [
      "Timestamps suffer from clock precision collisions in high-speed systems.",
      "NTP adjustments can cause clock regressions.",
      "Integer versions guarantee deterministic monotonic increments."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Optimistic Locking with Timestamp vs Integer Version",
        "code": "-- Demonstration for: Optimistic Locking with Timestamp vs Integer Version\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Impact of Network Partitions on Distributed Transactions",
    "question": "What happens to a Two-Phase Commit transaction when a network partition disconnects a participant node during the commit phase?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "2pc",
      "network-partition",
      "distributed-systems"
    ],
    "interviewAnswer": "If a participant voted YES during the prepare phase and is partitioned before receiving the COMMIT/ROLLBACK decision, it enters an \"in-doubt\" state. It must hold its row locks indefinitely to preserve atomicity until network connectivity is restored, blocking concurrent access.",
    "answer": "This is the fatal flaw of 2PC: it is a blocking protocol. The partitioned participant cannot unilaterally decide to abort (the coordinator might have committed) nor can it unilaterally commit (the coordinator might have aborted). It remains frozen holding exclusive locks until the network partition heals or an administrator intervenes.",
    "explanation": "This is the fatal flaw of 2PC: it is a blocking protocol. The partitioned participant cannot unilaterally decide to abort (the coordinator might have committed) nor can it unilaterally commit (the coordinator might have aborted). It remains frozen holding exclusive locks until the network partition heals or an administrator intervenes.",
    "importantPoints": [
      "Participant enters in-doubt state.",
      "Must hold locks indefinitely to preserve consistency.",
      "Demonstrates why modern distributed systems favor Raft/Paxos-based consensus over 2PC."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Impact of Network Partitions on Distributed Transactions",
        "code": "-- Demonstration for: Impact of Network Partitions on Distributed Transactions\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Idempotent Transaction Execution in API Design",
    "question": "How do you design database transactions to support idempotent payment processing with idempotency keys?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "idempotency",
      "api-design",
      "payment-processing"
    ],
    "interviewAnswer": "Store an idempotency_key in a database table with a UNIQUE constraint. In a single transaction, attempt to insert the idempotency record. If a duplicate key violation occurs, return the cached result of the previous transaction without re-executing payment.",
    "answer": "When a mobile client retries a payment request due to network timeout, executing `INSERT INTO payments (idempotency_key, amount, ...) VALUES (...)` fails if `idempotency_key` is unique. By querying the existing payment record inside the transaction, the API returns the original receipt, guaranteeing that the card is charged exactly once.",
    "explanation": "When a mobile client retries a payment request due to network timeout, executing `INSERT INTO payments (idempotency_key, amount, ...) VALUES (...)` fails if `idempotency_key` is unique. By querying the existing payment record inside the transaction, the API returns the original receipt, guaranteeing that the card is charged exactly once.",
    "importantPoints": [
      "Unique constraint on idempotency_key prevents duplicate execution.",
      "Single transaction guarantees atomicity between idempotency record and business write.",
      "Safe against client network retries."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Idempotent Transaction Execution in API Design",
        "code": "-- Demonstration for: Idempotent Transaction Execution in API Design\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "transactions",
    "title": "Write Skew Prevention via Explicit FOR UPDATE",
    "question": "How can you prevent Write Skew in Repeatable Read without switching to full Serializable isolation?",
    "difficulty": "hard",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "transactions",
      "write-skew",
      "pessimistic-locking",
      "select-for-update"
    ],
    "interviewAnswer": "In the Doctor on Call scenario, lock all rows in the department using SELECT ... FOR UPDATE when checking who is on call. This acquires exclusive row locks on all doctors, forcing concurrent transactions to wait and serializing their updates.",
    "answer": "Write skew happens because concurrent transactions read data without locking it. By executing `SELECT id, is_on_call FROM doctors WHERE department_id = 1 FOR UPDATE;`, Transaction 1 locks all doctors in that department. Transaction 2 must wait until T1 commits, at which point T2 reads the updated count (1 doctor) and aborts its leave request.",
    "explanation": "Write skew happens because concurrent transactions read data without locking it. By executing `SELECT id, is_on_call FROM doctors WHERE department_id = 1 FOR UPDATE;`, Transaction 1 locks all doctors in that department. Transaction 2 must wait until T1 commits, at which point T2 reads the updated count (1 doctor) and aborts its leave request.",
    "importantPoints": [
      "Pessimistic locking eliminates write skew under Repeatable Read.",
      "Locks all rows contributing to the business invariant.",
      "Avoids full serialization aborts."
    ],
    "commonMistakes": [
      "Overlooking concurrency anomalies or forgetting lock duration."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Write Skew Prevention via Explicit FOR UPDATE",
        "code": "-- Demonstration for: Write Skew Prevention via Explicit FOR UPDATE\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
