import { SeedQuestion } from '../types';

export const queryOptimizationQuestions: SeedQuestion[] = [
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Scenario: Query Running in 100ms Now Takes 10 Seconds",
    "question": "A query that used to run in 100ms now takes 10 seconds. How would you investigate and resolve this issue step by step?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "troubleshooting",
      "explain-analyze",
      "statistics",
      "scenario"
    ],
    "interviewAnswer": "I would follow a structured 5-step diagnostic workflow: 1) Run EXPLAIN (ANALYZE, BUFFERS) to inspect actual execution time and find the bottleneck node; 2) Check for Stale Optimizer Statistics (causing bad cardinality estimates and plan regressions) and run ANALYZE; 3) Check for lock contention / blocking sessions; 4) Check for table/index bloat or missing indexes due to data volume growth; 5) Check server-level resource saturation (CPU, disk I/O, buffer pool hit ratio).",
    "answer": "Step 1: Reproduce and analyze the query plan with `EXPLAIN (ANALYZE, BUFFERS, TIMING)` in PostgreSQL or `EXPLAIN ANALYZE` in MySQL 8. Compare the estimated rows versus actual rows. If estimated is 10 rows but actual is 1,000,000, the optimizer statistics are stale, causing the optimizer to pick a catastrophic Nested Loop join instead of a Hash Join. Step 2: Check for active lock waits: query `pg_stat_activity` / `information_schema.innodb_lock_waits` to verify if the query is actually executing or simply blocked waiting for an exclusive row/table lock. Step 3: Check parameter sniffing: in stored procedures, parameter sniffing can freeze a plan compiled for rare values. Step 4: Run `ANALYZE table_name;` to update distribution histograms. Step 5: Check hardware metrics: buffer pool eviction, high IOPS wait states, or high vacuum/checkpoint activity.",
    "explanation": "Sudden performance regressions on unchanged SQL queries are almost always caused by: 1) Plan flip due to stale statistics or crossing a cost threshold; 2) Locking/concurrency blocks; 3) Buffer pool thrashing where data was evicted from RAM to disk.",
    "importantPoints": [
      "Step 1: Run EXPLAIN (ANALYZE, BUFFERS) to identify the slow execution node.",
      "Step 2: Check estimated vs actual rows to detect stale statistics.",
      "Step 3: Check active locks to rule out transaction blocking.",
      "Step 4: Check parameter sniffing if using prepared statements/stored procedures.",
      "Step 5: Run ANALYZE to refresh catalog statistics."
    ],
    "commonMistakes": [
      "Assuming the query text is broken and rewriting it before inspecting EXPLAIN ANALYZE.",
      "Confusing query execution time with time spent waiting on database locks.",
      "Neglecting to check buffer cache hit ratios."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Investigating Query Regression in PostgreSQL",
        "code": "-- 1. Detailed execution plan with buffer cache metrics:\nEXPLAIN (ANALYZE, BUFFERS, TIMING, VERBOSE)\nSELECT o.order_id, c.customer_name, SUM(i.quantity * i.price)\nFROM orders o\nJOIN customers c ON o.customer_id = c.customer_id\nJOIN order_items i ON o.order_id = i.order_id\nWHERE o.created_at >= NOW() - INTERVAL '7 days'\nGROUP BY o.order_id, c.customer_name;\n\n-- 2. Update statistics immediately if estimated rows differ drastically:\nANALYZE orders;\nANALYZE order_items;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Scenario: Table with 50 Million Rows and Slow Search Query",
    "question": "A table contains 50 million rows and a frequently used search query is slow. What would you do to diagnose and optimize it?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "large-scale",
      "indexing",
      "partitioning",
      "scenario"
    ],
    "interviewAnswer": "1) Analyze EXPLAIN plan to see if it performs a full table scan or high-cost bookmark lookup; 2) Design an optimal Composite Covering Index (equality columns first, range columns next, INCLUDE projected columns) to achieve an Index-Only Scan; 3) If querying recent data, use a Partial Index (WHERE created_at > ...); 4) Partition the table (e.g. by month or tenant_id) to enable partition pruning; 5) Implement cursor-based pagination rather than high-offset LIMIT.",
    "answer": "At 50 million rows, any disk I/O seek is penalized. Step 1: Examine the query predicates. If it searches `WHERE tenant_id = 5 AND status = 'ACTIVE' ORDER BY created_at DESC LIMIT 20`, create a composite index on `(tenant_id, status, created_at DESC)`. This eliminates full table scans and avoids an in-memory Sort. Step 2: Ensure the query is covered to eliminate 50M-row heap fetches. Step 3: If 90% of searches target the current year, implement Table Partitioning (by range of `created_at`). Queries filtering on recent dates will prune 95% of partitions, reading only 2M rows. Step 4: For complex multi-attribute or free-text search, offload search to an inverted index (Postgres GIN or Elasticsearch).",
    "explanation": "At 50M rows, the table rarely fits in RAM. Optimizations must focus on eliminating random disk reads: covering indexes and partition pruning are the two most effective techniques.",
    "importantPoints": [
      "Create covering indexes to eliminate heap/bookmark lookups.",
      "Ensure index matches filter predicates and ORDER BY direction to avoid filesorts.",
      "Implement range or list table partitioning for partition pruning.",
      "Use partial indexes if queries focus on active/unprocessed records."
    ],
    "commonMistakes": [
      "Creating multiple single-column indexes instead of one composite index matching the exact query pattern.",
      "Using LIMIT 100 OFFSET 1000000 on a 50M-row table (forces scanning 1,000,100 rows).",
      "Ignoring partition pruning opportunities."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Optimizing 50M-Row Query via Covering Index",
        "code": "-- Slow query scanning 50M rows:\n-- SELECT order_id, order_date, total_amount FROM orders WHERE customer_id = 999 AND status = 'COMPLETED' ORDER BY order_date DESC LIMIT 10;\n\n-- Optimal covering index:\nCREATE INDEX idx_orders_customer_status_covering \nON orders (customer_id, status, order_date DESC) \nINCLUDE (total_amount, order_id);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Scenario: Proving SQL is the Bottleneck for a Slow API",
    "question": "An API is slow because of a database query. How would you prove that SQL is actually the bottleneck?",
    "difficulty": "medium",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "apm",
      "profiling",
      "troubleshooting",
      "scenario"
    ],
    "interviewAnswer": "I would instrument the request lifecycle using Distributed Tracing / APM tools (e.g. OpenTelemetry, Datadog, New Relic) to break down total latency into: Network latency, Database execution time, Application CPU/processing time, and Serialization time. On the database side, I would correlate slow query logs and pg_stat_statements to compare the exact SQL execution duration against total API response time.",
    "answer": "To definitively prove the bottleneck: 1) APM Distributed Traces: Measure database span duration vs total request duration. If the HTTP request took 3,000ms, and the database query span took 2,850ms, SQL is proven to be the culprit. If the DB span took 15ms, the bottleneck is application serialization, N+1 query loops, or external API calls. 2) Database Slow Query Logs: Inspect `pg_stat_statements` (PostgreSQL) or `slow_query_log` (MySQL) to check the server-side `mean_exec_time`. 3) Network Round-Trip Check: If the DB executes in 5ms, but the app receives data in 500ms, check payload size (transferring 50MB of JSON) or network latency between app server and DB host.",
    "explanation": "A frequent trap is an \"N+1 query problem\": each individual SQL query runs in 1ms (never showing up in slow query logs), but the ORM executes 2,000 individual queries sequentially, causing a 2-second API latency entirely composed of network round-trips.",
    "importantPoints": [
      "Use APM traces (OpenTelemetry, Datadog) to isolate DB span duration.",
      "Check database server-side execution time via pg_stat_statements.",
      "Watch out for ORM N+1 queries: fast individual queries causing massive cumulative network round-trips.",
      "Verify payload transfer size (large JSON/BLOB fetches)."
    ],
    "commonMistakes": [
      "Blaming the database without measuring server-side query execution time.",
      "Missing N+1 query loops because individual queries run under the slow query threshold.",
      "Ignoring JSON serialization and garbage collection pauses in the application layer."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Querying pg_stat_statements for Slow Queries",
        "code": "-- Find the top 5 most time-consuming queries in PostgreSQL:\nSELECT \n  ROUND(total_exec_time::numeric, 2) AS total_time_ms,\n  calls,\n  ROUND(mean_exec_time::numeric, 2) AS avg_time_ms,\n  ROUND((100 * total_exec_time / SUM(total_exec_time) OVER())::numeric, 2) AS pct_total_time,\n  SUBSTRING(query, 1, 100) AS query_preview\nFROM pg_stat_statements\nORDER BY total_exec_time DESC\nLIMIT 5;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Scenario: Optimizing Pagination for Very Large Tables",
    "question": "How would you optimize pagination for a very large table?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "pagination",
      "keyset-pagination",
      "offset",
      "scenario"
    ],
    "interviewAnswer": "Replace traditional OFFSET pagination (LIMIT 20 OFFSET 5000000) with Keyset Pagination (Cursor-based pagination): WHERE (created_at, id) < (:last_created_at, :last_id) ORDER BY created_at DESC, id DESC LIMIT 20. If random page jumping is required, use Deferred Joins to seek only primary keys first.",
    "answer": "1) The Offset Problem: `LIMIT 20 OFFSET 5000000` forces the database to read 5,000,020 rows from disk, sort them, and discard the first 5 million rows, causing exponential slowdown on deep pages. 2) Keyset (Cursor) Pagination: Instead of counting offsets, pass the last seen values from the previous page: `WHERE id > :last_seen_id ORDER BY id ASC LIMIT 20`. With a B-Tree index on `id`, the engine navigates directly to `:last_seen_id` in O(log N) and reads exactly 20 rows, maintaining constant sub-millisecond latency whether on page 1 or page 500,000. 3) Deferred Join: If UI requires jumping to page N, seek the primary keys first via a covering index, then join back to the table for full rows.",
    "explanation": "Keyset pagination is immune to offset degradation and is also safe against the \"page drift\" anomaly where rows inserted between page requests cause duplicate or skipped items in offset pagination.",
    "importantPoints": [
      "OFFSET N reads and discards N rows, causing O(N) degradation on deep pages.",
      "Keyset pagination uses WHERE key > last_seen_key, executing in O(log N) constant time.",
      "Keyset pagination eliminates page drift when new rows are concurrently inserted.",
      "Deferred Joins accelerate deep OFFSET lookups when random page jumping is mandatory."
    ],
    "commonMistakes": [
      "Using LIMIT/OFFSET for infinite scroll feeds on massive tables.",
      "Using Keyset pagination without tie-breaker columns (e.g. non-unique dates cause missed rows without appending ID).",
      "Allowing clients to request arbitrary high offsets (e.g. page 500,000) without business justification."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Keyset Pagination vs Deferred Join",
        "code": "-- Approach 1: Keyset / Cursor Pagination (Optimal for Feeds/APIs)\nSELECT id, title, created_at, author\nFROM articles\nWHERE (created_at, id) < ('2026-03-01 12:00:00', 482910)\nORDER BY created_at DESC, id DESC\nLIMIT 20;\n\n-- Approach 2: Deferred Join (When arbitrary page jump is mandatory)\nSELECT a.*\nFROM articles a\nJOIN (\n  -- Covering index scan seeks only IDs, avoiding heap lookups for discarded rows:\n  SELECT id FROM articles ORDER BY created_at DESC LIMIT 20 OFFSET 500000\n) AS paged ON a.id = paged.id;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "EXPLAIN vs EXPLAIN ANALYZE: Reading Query Plans",
    "question": "What is the difference between EXPLAIN and EXPLAIN ANALYZE, and what key metrics should you look for in a query plan?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "explain",
      "explain-analyze",
      "query-plan"
    ],
    "interviewAnswer": "EXPLAIN generates the estimated execution plan based on catalog statistics without actually running the query. EXPLAIN ANALYZE actually executes the query, returning the real execution plan alongside actual runtime, actual row counts, loop iterations, and memory/buffer usage.",
    "answer": "When tuning queries: 1) `EXPLAIN` shows the optimizer's planned path (cost estimates, expected row counts, planned operators like Hash Join, Index Scan, or Seq Scan). Safe to run on write statements because nothing executes. 2) `EXPLAIN ANALYZE` executes the SQL. Crucial: Running `EXPLAIN ANALYZE DELETE ...` WILL delete data! 3) Key metrics to inspect: Rows discrepancy (Estimated vs Actual rows; a 10x+ gap indicates stale statistics); Node execution time (which operator consumed 90% of total time); Buffer hits vs reads (Shared Hit indicates RAM cache, Read indicates disk I/O); Sort / Hash method (did it spill to disk?).",
    "explanation": "Never run `EXPLAIN ANALYZE` on destructive DDL or DML statements in production without wrapping them in a transaction that is rolled back (`BEGIN; EXPLAIN ANALYZE DELETE ...; ROLLBACK;`).",
    "importantPoints": [
      "EXPLAIN estimates; does not execute query.",
      "EXPLAIN ANALYZE executes query and measures actual time and row counts.",
      "Compare estimated vs actual rows to detect stale statistics.",
      "Look for disk spills in Sorts and Hash Joins.",
      "Wrap DML EXPLAIN ANALYZE in a transaction and rollback."
    ],
    "commonMistakes": [
      "Running EXPLAIN ANALYZE on a DELETE or UPDATE in production and accidentally modifying real data.",
      "Relying only on EXPLAIN cost numbers without measuring actual runtime.",
      "Ignoring disk spill warnings in Sort and Hash operations."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Running EXPLAIN ANALYZE with Buffers in PostgreSQL",
        "code": "EXPLAIN (ANALYZE, BUFFERS, COSTS, TIMING)\nSELECT u.user_id, COUNT(o.order_id)\nFROM users u\nLEFT JOIN orders o ON u.user_id = o.user_id\nWHERE u.created_at >= '2026-01-01'\nGROUP BY u.user_id;\n\n-- Output indicators to check:\n-- \"actual time=0.045..12.345 rows=500 loops=1\"\n-- \"Buffers: shared hit=42 read=12\" -> read > 0 means physical disk I/O\n-- \"Sort Method: external merge  Disk: 4096kB\" -> Spilled to disk!"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Sargable Predicates and Query Performance",
    "question": "What is a Sargable (Search Argument Able) predicate, and how do non-sargable expressions destroy query performance?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "sargable",
      "indexes",
      "performance"
    ],
    "interviewAnswer": "A sargable predicate allows the database engine to use an index range seek directly. Non-sargable predicates apply functions, calculations, or wildcards to the indexed column (e.g. WHERE col + 1 = 10 or WHERE UPPER(name) = 'X'), forcing the engine to evaluate the expression row-by-row in a full table scan.",
    "answer": "Sargable queries isolate the indexed column on one side of the operator: `WHERE col = 10 - 1` is sargable; `WHERE col + 1 = 10` is non-sargable. Non-sargable queries defeat B-Tree ordering because the stored index keys do not match the transformed expression values.",
    "explanation": "Sargable queries isolate the indexed column on one side of the operator: `WHERE col = 10 - 1` is sargable; `WHERE col + 1 = 10` is non-sargable. Non-sargable queries defeat B-Tree ordering because the stored index keys do not match the transformed expression values.",
    "importantPoints": [
      "Isolate the indexed column without functions or arithmetic.",
      "Rewrite functions: WHERE created_at >= '2026-01-01' instead of WHERE YEAR(created_at) = 2026.",
      "Non-sargable queries force full table scans."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Sargable Predicates and Query Performance",
        "code": "-- Demonstration for: Sargable Predicates and Query Performance\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Table Partitioning: Range, List, and Hash Partitioning",
    "question": "Compare Range, List, and Hash table partitioning and explain how Partition Pruning accelerates queries.",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "partitioning",
      "partition-pruning",
      "big-data"
    ],
    "interviewAnswer": "Range partitioning divides data by intervals (e.g. sales by month). List partitioning divides data by explicit discrete values (e.g. region IN ('EU', 'US')). Hash partitioning divides data uniformly using a modulus hash across N partitions. Partition Pruning skips reading irrelevant partitions at query execution time.",
    "answer": "When a 1-billion row table is partitioned into monthly segments, a query `WHERE created_at >= '2026-01-01' AND created_at < '2026-02-01'` enables Partition Pruning: the optimizer reads only the single January 2026 partition, skipping the other 99% of table segments entirely.",
    "explanation": "When a 1-billion row table is partitioned into monthly segments, a query `WHERE created_at >= '2026-01-01' AND created_at < '2026-02-01'` enables Partition Pruning: the optimizer reads only the single January 2026 partition, skipping the other 99% of table segments entirely.",
    "importantPoints": [
      "Range: Continuous chronological or numeric slices.",
      "List: Discrete enumerated keys (regions, status).",
      "Hash: Even distribution across N buckets to prevent hot spots.",
      "Partition Pruning eliminates disk I/O on non-matching partitions."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Table Partitioning: Range, List, and Hash Partitioning",
        "code": "-- Demonstration for: Table Partitioning: Range, List, and Hash Partitioning\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Work_mem and Memory Tuning for Sort and Hash Operations",
    "question": "What is the impact of work_mem (PostgreSQL) or sort_buffer_size (MySQL) on query performance?",
    "difficulty": "hard",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "work-mem",
      "sort-buffer",
      "memory-tuning"
    ],
    "interviewAnswer": "work_mem allocates private memory per sort or hash operation per query. If a sort/hash exceeds this threshold, it spills to temporary disk files, degrading performance by 10x-100x. However, setting work_mem too high can cause out-of-memory (OOM) crashes under high concurrency.",
    "answer": "In EXPLAIN ANALYZE, `Sort Method: external merge Disk` indicates that available work_mem was exceeded. Increasing work_mem for specific memory-heavy reporting sessions (`SET work_mem = '256MB';`) allows operations to complete entirely in RAM without affecting global server settings.",
    "explanation": "In EXPLAIN ANALYZE, `Sort Method: external merge Disk` indicates that available work_mem was exceeded. Increasing work_mem for specific memory-heavy reporting sessions (`SET work_mem = '256MB';`) allows operations to complete entirely in RAM without affecting global server settings.",
    "importantPoints": [
      "Allocated per sort/hash node, not per connection.",
      "Spilling to disk causes severe latency degradation.",
      "Can be set locally per transaction or session for heavy reporting queries."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Work_mem and Memory Tuning for Sort and Hash Operations",
        "code": "-- Demonstration for: Work_mem and Memory Tuning for Sort and Hash Operations\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Connection Pooling: PgBouncer and HikariCP Architecture",
    "question": "Why is external connection pooling critical for relational databases, and what problems does it solve?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "connection-pooling",
      "pgbouncer",
      "hikaricp"
    ],
    "interviewAnswer": "Each direct database connection allocates dedicated server memory (often 5-10MB per backend process) and incurs TCP handshake and authentication costs. A connection pooler (like PgBouncer or HikariCP) multiplexes thousands of application client requests over a small, warm pool of database connections (e.g. 50-100), preventing thread starvation and memory exhaustion.",
    "answer": "PostgreSQL uses a process-per-connection model. Spawning 5,000 concurrent direct connections consumes 50GB of RAM just for connection overhead, causing CPU context-switching thrashing. PgBouncer in transaction-pooling mode allows 10,000 app clients to share 50 backend Postgres processes, keeping database CPU at 95% efficiency.",
    "explanation": "PostgreSQL uses a process-per-connection model. Spawning 5,000 concurrent direct connections consumes 50GB of RAM just for connection overhead, causing CPU context-switching thrashing. PgBouncer in transaction-pooling mode allows 10,000 app clients to share 50 backend Postgres processes, keeping database CPU at 95% efficiency.",
    "importantPoints": [
      "Prevents process/thread starvation and memory exhaustion.",
      "Transaction pooling multiplexes client sessions over small connection pools.",
      "Eliminates TCP handshake and auth latency per request."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Connection Pooling: PgBouncer and HikariCP Architecture",
        "code": "-- Demonstration for: Connection Pooling: PgBouncer and HikariCP Architecture\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Parallel Query Execution in Modern Relational Engines",
    "question": "How does Parallel Query Execution work in PostgreSQL and SQL Server, and what causes queries to fail to parallelize?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "parallel-query",
      "worker-processes",
      "cpu-scaling"
    ],
    "interviewAnswer": "The optimizer divides a table scan or join among multiple background worker processes, each processing a subset of pages, and merges the results via a Gather node. Queries fail to parallelize if tables are too small, if queries call non-parallel-safe functions, or if server worker limits are reached.",
    "answer": "Parallel query utilizes multi-core hardware for large analytical scans. The leader process spawns worker threads (e.g. `max_parallel_workers_per_gather`). Each worker scans distinct block chunks and performs local filtering/partial aggregation. A `Gather` or `Gather Merge` node combines worker streams. Parallelism is blocked by user-defined functions marked `PARALLEL UNSAFE` or transactions in serialized isolation.",
    "explanation": "Parallel query utilizes multi-core hardware for large analytical scans. The leader process spawns worker threads (e.g. `max_parallel_workers_per_gather`). Each worker scans distinct block chunks and performs local filtering/partial aggregation. A `Gather` or `Gather Merge` node combines worker streams. Parallelism is blocked by user-defined functions marked `PARALLEL UNSAFE` or transactions in serialized isolation.",
    "importantPoints": [
      "Uses multiple CPU cores for single-query scans and aggregations.",
      "Blocked by non-parallel-safe functions or low table row counts.",
      "Configured via max_parallel_workers settings."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Parallel Query Execution in Modern Relational Engines",
        "code": "-- Demonstration for: Parallel Query Execution in Modern Relational Engines\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Parameter Sniffing in Stored Procedures and Prepared Statements",
    "question": "What is Parameter Sniffing, and how can it cause catastrophic plan regressions?",
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "parameter-sniffing",
      "stored-procedures",
      "plan-cache"
    ],
    "interviewAnswer": "Parameter sniffing occurs when the optimizer compiles and caches an execution plan based on the specific parameter values passed on the very first execution. If that first execution used an atypical, highly selective parameter, the cached plan will be terrible for typical parameters, causing massive slowdowns.",
    "answer": "If a procedure queries `WHERE status = @val`, and the first invocation uses `status = 'FAILED'` (which matches 10 rows), the engine caches an Index Seek plan. Later, when invoked with `status = 'COMPLETED'` (matching 5,000,000 rows), the engine reuses the cached Index Seek plan instead of a Table Scan, forcing 5 million random I/O lookups. Solutions include `OPTIMIZE FOR UNKNOWN` or local variable copying.",
    "explanation": "If a procedure queries `WHERE status = @val`, and the first invocation uses `status = 'FAILED'` (which matches 10 rows), the engine caches an Index Seek plan. Later, when invoked with `status = 'COMPLETED'` (matching 5,000,000 rows), the engine reuses the cached Index Seek plan instead of a Table Scan, forcing 5 million random I/O lookups. Solutions include `OPTIMIZE FOR UNKNOWN` or local variable copying.",
    "importantPoints": [
      "Plan cached based on first execution parameter values.",
      "Atypical parameters compile plans disastrous for normal queries.",
      "Resolved by query hints (RECOMPILE, OPTIMIZE FOR) or local variable decoupling."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Parameter Sniffing in Stored Procedures and Prepared Statements",
        "code": "-- Demonstration for: Parameter Sniffing in Stored Procedures and Prepared Statements\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Vacuum and Autovacuum Tuning in PostgreSQL",
    "question": "Why is aggressive autovacuum tuning essential for preventing performance degradation in PostgreSQL?",
    "difficulty": "hard",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "autovacuum",
      "bloat",
      "postgresql",
      "maintenance"
    ],
    "interviewAnswer": "PostgreSQL MVCC leaves dead tuples on disk after every UPDATE and DELETE. If autovacuum runs too slowly, tables and indexes bloat, buffer cache hit ratios collapse, and full table scans slow down dramatically. Aggressive autovacuum settings ensure dead rows are reclaimed and statistics updated continuously.",
    "answer": "Default PostgreSQL autovacuum settings are conservative to avoid overloading small servers. In high-write production systems, autovacuum must be tuned aggressively: lower `autovacuum_vacuum_scale_factor` (e.g. from 0.2 to 0.05), increase `autovacuum_vacuum_cost_limit`, and increase worker counts to prevent table bloat and transaction ID wraparound.",
    "explanation": "Default PostgreSQL autovacuum settings are conservative to avoid overloading small servers. In high-write production systems, autovacuum must be tuned aggressively: lower `autovacuum_vacuum_scale_factor` (e.g. from 0.2 to 0.05), increase `autovacuum_vacuum_cost_limit`, and increase worker counts to prevent table bloat and transaction ID wraparound.",
    "importantPoints": [
      "Reclaims dead tuple space and updates catalog histograms.",
      "Default settings are often too passive for high-throughput OLTP.",
      "Tune autovacuum_vacuum_scale_factor to trigger vacuuming earlier."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Vacuum and Autovacuum Tuning in PostgreSQL",
        "code": "-- Demonstration for: Vacuum and Autovacuum Tuning in PostgreSQL\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Optimizing IN Lists with Thousands of Values",
    "question": "Why is `WHERE id IN (1, 2, ..., 10000)` slow, and how should large parameter lists be optimized?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "in-clause",
      "temporary-tables",
      "array-matching"
    ],
    "interviewAnswer": "Massive IN lists bloat the SQL query string, cause high query parsing and compilation overhead, defeat prepared statement plan caching, and can overwhelm optimizer memory. Optimize by passing an array (WHERE id = ANY(:array)), using a temporary table, or joining a staging table.",
    "answer": "Parsing a 10,000-element IN list requires building a massive AST in the parser. In PostgreSQL, rewrite as `WHERE id = ANY($1::int[])`, which compiles as a single parameterized query and executes via an efficient scalar hash lookup. In MySQL and SQL Server, bulk insert the IDs into a temporary table and INNER JOIN it.",
    "explanation": "Parsing a 10,000-element IN list requires building a massive AST in the parser. In PostgreSQL, rewrite as `WHERE id = ANY($1::int[])`, which compiles as a single parameterized query and executes via an efficient scalar hash lookup. In MySQL and SQL Server, bulk insert the IDs into a temporary table and INNER JOIN it.",
    "importantPoints": [
      "Huge IN lists degrade parsing and disable plan caching.",
      "PostgreSQL: Use WHERE id = ANY(array_param).",
      "SQL Server / MySQL: Join against a temporary table."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Optimizing IN Lists with Thousands of Values",
        "code": "-- Demonstration for: Optimizing IN Lists with Thousands of Values\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Join Order and the Optimizer Search Space",
    "question": "How does the query optimizer choose Join Order, and what happens when queries join 15+ tables?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "join-order",
      "genetic-algorithm",
      "optimizer"
    ],
    "interviewAnswer": "For N tables, there are N! possible join permutations. When joining more tables than the exhaustive search threshold (e.g. 8-12 tables), exploring all combinations becomes too slow. The optimizer switches to heuristic or genetic algorithms (GEQO in Postgres), which may miss the optimal join order.",
    "answer": "For small joins, optimizers use dynamic programming to evaluate all permutations. For complex queries with 12+ tables, exhaustive search would take minutes. PostgreSQL switches to Genetic Query Optimization (GEQO), which uses probabilistic heuristics. If GEQO picks a bad plan, developers can structure queries with CTEs or adjust `join_collapse_limit`.",
    "explanation": "For small joins, optimizers use dynamic programming to evaluate all permutations. For complex queries with 12+ tables, exhaustive search would take minutes. PostgreSQL switches to Genetic Query Optimization (GEQO), which uses probabilistic heuristics. If GEQO picks a bad plan, developers can structure queries with CTEs or adjust `join_collapse_limit`.",
    "importantPoints": [
      "N! permutations make exhaustive search impossible for large joins.",
      "Switches to genetic algorithms (GEQO) past thresholds.",
      "Can be guided using CTEs or join hints."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Join Order and the Optimizer Search Space",
        "code": "-- Demonstration for: Join Order and the Optimizer Search Space\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Optimizing COUNT(*) on Multi-Million Row Tables",
    "question": "Why is `SELECT COUNT(*) FROM large_table` slow in PostgreSQL and MySQL InnoDB, and how can it be optimized?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "count",
      "mvcc",
      "metadata-stats"
    ],
    "interviewAnswer": "Because MVCC requires checking row visibility for each transaction, neither PostgreSQL nor MySQL InnoDB can simply read a static count header; they must scan an index or table. To optimize: use catalog row estimates for dashboards, or maintain a real-time counter table updated via triggers.",
    "answer": "In PostgreSQL, running `COUNT(*)` on a 50M-row table scans the entire table or smallest index. For UI pagination or dashboards where an approximate count suffices, reading catalog statistics (`SELECT reltuples FROM pg_class WHERE relname = 'large_table'`) executes in 0.1ms. If exact counts are mandatory, maintain an aggregate counter table.",
    "explanation": "In PostgreSQL, running `COUNT(*)` on a 50M-row table scans the entire table or smallest index. For UI pagination or dashboards where an approximate count suffices, reading catalog statistics (`SELECT reltuples FROM pg_class WHERE relname = 'large_table'`) executes in 0.1ms. If exact counts are mandatory, maintain an aggregate counter table.",
    "importantPoints": [
      "MVCC requires verifying row visibility, preventing static O(1) row counts.",
      "pg_class reltuples provides instant approximate counts for dashboards.",
      "Counter tables updated via triggers deliver instant exact counts."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Optimizing COUNT(*) on Multi-Million Row Tables",
        "code": "-- Demonstration for: Optimizing COUNT(*) on Multi-Million Row Tables\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Implicit Type Conversion Invalidating Indexes",
    "question": "Demonstrate how implicit type conversion causes index invalidation in SQL queries.",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "type-conversion",
      "sargable",
      "data-types"
    ],
    "interviewAnswer": "If a VARCHAR column is queried with an unquoted integer literal (WHERE phone_number = 12345), database type precedence rules cast the column to an integer: WHERE CAST(phone_number AS INT) = 12345. Because the function is applied to the column, the index cannot be used, forcing a full table scan.",
    "answer": "SQL type precedence rules dictate that when comparing a string to a number, the string is converted to a number. If `phone_number` is indexed VARCHAR, `WHERE phone_number = 123` applies conversion to every row in the table, destroying the index seek. Passing quotes `WHERE phone_number = '123'` preserves the index seek.",
    "explanation": "SQL type precedence rules dictate that when comparing a string to a number, the string is converted to a number. If `phone_number` is indexed VARCHAR, `WHERE phone_number = 123` applies conversion to every row in the table, destroying the index seek. Passing quotes `WHERE phone_number = '123'` preserves the index seek.",
    "importantPoints": [
      "String converted to number under SQL precedence rules.",
      "Converts column instead of literal, preventing index seek.",
      "Always match application parameter data types to table column types."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Implicit Type Conversion Invalidating Indexes",
        "code": "-- Demonstration for: Implicit Type Conversion Invalidating Indexes\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Index Skip Scans vs Full Scans for High-Cardinality Sorts",
    "question": "How do you optimize a query that filters on tenant_id and sorts by created_at DESC with a composite index?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "composite-index",
      "order-by"
    ],
    "interviewAnswer": "Create a composite index on (tenant_id, created_at DESC). The engine seeks directly to tenant_id and streams rows along the pre-sorted created_at index chain, eliminating an in-memory Sort node.",
    "answer": "Without `(tenant_id, created_at DESC)`, the engine must collect all matching tenant rows into work_mem and execute an explicit Sort operation. With the composite index, the output from the index seek is already ordered, allowing instant streaming directly to the client.",
    "explanation": "Without `(tenant_id, created_at DESC)`, the engine must collect all matching tenant rows into work_mem and execute an explicit Sort operation. With the composite index, the output from the index seek is already ordered, allowing instant streaming directly to the client.",
    "importantPoints": [
      "Combines equality filter with sort ordering.",
      "Completely eliminates the Sort / filesort operator.",
      "Significantly reduces query execution latency."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Skip Scans vs Full Scans for High-Cardinality Sorts",
        "code": "-- Demonstration for: Index Skip Scans vs Full Scans for High-Cardinality Sorts\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Optimizing OR Predicates: UNION ALL vs Index Merge",
    "question": "Why are queries with OR conditions often slow, and how can rewriting with UNION ALL improve performance?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "or-clause",
      "union-all",
      "index-merge"
    ],
    "interviewAnswer": "Engines often struggle to optimize WHERE col_a = 1 OR col_b = 2 effectively, resorting to full table scans. Rewriting the query as two separate SELECT statements joined by UNION ALL allows each branch to perform an optimal, independent index seek.",
    "answer": "While modern optimizers attempt Index Merge for OR conditions, it incurs bitmap combination overhead. Rewriting `SELECT * FROM users WHERE email = 'x' OR phone = 'y'` as `SELECT * FROM users WHERE email = 'x' UNION ALL SELECT * FROM users WHERE phone = 'y' AND email != 'x'` guarantees two independent single-seek index operations.",
    "explanation": "While modern optimizers attempt Index Merge for OR conditions, it incurs bitmap combination overhead. Rewriting `SELECT * FROM users WHERE email = 'x' OR phone = 'y'` as `SELECT * FROM users WHERE email = 'x' UNION ALL SELECT * FROM users WHERE phone = 'y' AND email != 'x'` guarantees two independent single-seek index operations.",
    "importantPoints": [
      "OR conditions frequently cause optimizer de-optimization.",
      "UNION ALL allows independent index seeks for each condition branch.",
      "Add guard to second branch to prevent duplicate rows."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Optimizing OR Predicates: UNION ALL vs Index Merge",
        "code": "-- Demonstration for: Optimizing OR Predicates: UNION ALL vs Index Merge\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Cost-Based Optimizer: CPU Cost vs I/O Cost",
    "question": "How does a Cost-Based Optimizer (CBO) balance random page cost, sequential page cost, and CPU cost?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "cbo",
      "cost-model",
      "postgresql",
      "random-page-cost"
    ],
    "interviewAnswer": "The CBO calculates total query cost as: Total Cost = (Page Reads * Page Cost) + (Rows Evaluated * CPU Cost). On SSDs/NVMe, random_page_cost (default 4.0 in Postgres) should be lowered to 1.1 - 1.2 to reflect near-zero SSD seek latency, encouraging the optimizer to pick fast index scans over table scans.",
    "answer": "Historically, spinning HDDs made random single-page I/O 4x more expensive than sequential reads (`random_page_cost = 4.0`). Modern NVMe SSDs have zero mechanical seek penalty. Keeping the default 4.0 cost setting fools the optimizer into thinking index seeks are dangerously expensive, causing it to choose slow full table scans unnecessarily.",
    "explanation": "Historically, spinning HDDs made random single-page I/O 4x more expensive than sequential reads (`random_page_cost = 4.0`). Modern NVMe SSDs have zero mechanical seek penalty. Keeping the default 4.0 cost setting fools the optimizer into thinking index seeks are dangerously expensive, causing it to choose slow full table scans unnecessarily.",
    "importantPoints": [
      "Cost model balances disk I/O vs CPU evaluation cycles.",
      "Default random_page_cost (4.0) is calibrated for legacy spinning hard drives.",
      "Tuning random_page_cost to 1.1-1.2 on SSDs encourages optimal index utilization."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Cost-Based Optimizer: CPU Cost vs I/O Cost",
        "code": "-- Demonstration for: Cost-Based Optimizer: CPU Cost vs I/O Cost\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Deferred Joins for Deep Pagination with Sorting",
    "question": "Explain how a Deferred Join optimizes pagination queries containing ORDER BY on un-indexed columns.",
    "difficulty": "hard",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "deferred-join",
      "pagination",
      "subqueries"
    ],
    "interviewAnswer": "A deferred join first queries only the primary keys using a covering index for the target page slice, and then joins those 20 specific primary keys back to the base table to retrieve full rows, minimizing buffer pool memory and row copying overhead.",
    "answer": "In deep pagination (`LIMIT 20 OFFSET 50000`), a standard query reads all columns (including wide text fields) for 50,020 rows into memory before discarding the first 50,000. A deferred join reads only the narrow primary key column in the inner subquery, transferring minimal bytes into buffer memory before fetching the final 20 full rows.",
    "explanation": "In deep pagination (`LIMIT 20 OFFSET 50000`), a standard query reads all columns (including wide text fields) for 50,020 rows into memory before discarding the first 50,000. A deferred join reads only the narrow primary key column in the inner subquery, transferring minimal bytes into buffer memory before fetching the final 20 full rows.",
    "importantPoints": [
      "Paginates on narrow primary key IDs first.",
      "Joins back to fetch wide table columns only for the final page slice.",
      "Dramatically reduces buffer memory copying overhead."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Deferred Joins for Deep Pagination with Sorting",
        "code": "-- Demonstration for: Deferred Joins for Deep Pagination with Sorting\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Optimizer Hints: Pros, Cons, and Best Practices",
    "question": "What are Optimizer Hints, and why are they considered a double-edged sword in production databases?",
    "difficulty": "medium",
    "questionType": "Trade-off",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "optimizer-hints",
      "best-practices",
      "trade-offs"
    ],
    "interviewAnswer": "Optimizer hints (e.g. /*+ INDEX(t idx) */ or WITH (NOLOCK)) force the optimizer to use specific access paths or joins. While they provide immediate workarounds for optimizer blunders, they become \"ticking time bombs\" as data grows and schema changes, preventing the optimizer from adapting to new indexes or data distributions.",
    "answer": "Hints bypass the dynamic intelligence of the Cost-Based Optimizer. Forcing an index seek today might be optimal for 10,000 rows, but when the table reaches 10,000,000 rows, that forced index seek could bring the database down. Best practice: treat hints as temporary production patches; fix underlying causes (stale statistics, query refactoring, index design) instead.",
    "explanation": "Hints bypass the dynamic intelligence of the Cost-Based Optimizer. Forcing an index seek today might be optimal for 10,000 rows, but when the table reaches 10,000,000 rows, that forced index seek could bring the database down. Best practice: treat hints as temporary production patches; fix underlying causes (stale statistics, query refactoring, index design) instead.",
    "importantPoints": [
      "Overrides the Cost-Based Optimizer decision tree.",
      "Quick hotfix for immediate production emergencies.",
      "Brittle: Fails to adapt as data volume and distribution evolve over time."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Optimizer Hints: Pros, Cons, and Best Practices",
        "code": "-- Demonstration for: Optimizer Hints: Pros, Cons, and Best Practices\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Lock Contention and High Concurrency Query Latency",
    "question": "How do you determine if a slow query is caused by slow execution versus waiting for database locks?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "lock-contention",
      "wait-events",
      "diagnostics"
    ],
    "interviewAnswer": "Inspect database wait events: in PostgreSQL, check pg_stat_activity for wait_event_type = 'Lock'; in MySQL, inspect performance_schema.data_lock_waits; in SQL Server, check sys.dm_os_waiting_tasks (LCK_M_* wait types). If wait_event_type is Lock, the query is blocked by another session.",
    "answer": "When a query has 0% CPU consumption and zero disk I/O, yet takes 10 seconds to finish, it is blocked waiting for a lock. Querying `pg_stat_activity` reveals the blocking PID (`pg_blocking_pids(pid)`). Terminating the blocking idle transaction immediately unblocks the waiting query.",
    "explanation": "When a query has 0% CPU consumption and zero disk I/O, yet takes 10 seconds to finish, it is blocked waiting for a lock. Querying `pg_stat_activity` reveals the blocking PID (`pg_blocking_pids(pid)`). Terminating the blocking idle transaction immediately unblocks the waiting query.",
    "importantPoints": [
      "Wait events distinguish CPU/disk execution from lock waiting.",
      "pg_blocking_pids identifies the root blocker session.",
      "Zero CPU + long elapsed time strongly indicates lock waiting."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Lock Contention and High Concurrency Query Latency",
        "code": "-- Demonstration for: Lock Contention and High Concurrency Query Latency\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Bitmap Heap Scan and Recheck Cond in PostgreSQL",
    "question": "What is a Bitmap Heap Scan in PostgreSQL, and why does EXPLAIN show \"Recheck Cond\"?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "bitmap-scan",
      "postgresql",
      "recheck-cond",
      "query-plan"
    ],
    "interviewAnswer": "A Bitmap Index Scan creates an in-memory bitmap of pages containing matching rows. The Bitmap Heap Scan reads those pages in physical disk order. If the bitmap exceeds work_mem, it becomes \"lossy\" (recording only page numbers, not row offsets), requiring a \"Recheck Cond\" to re-validate individual rows on each page.",
    "answer": "To avoid random I/O from jumping back and forth across table blocks, PostgreSQL builds an in-memory bitmap of target disk pages and reads them sequentially. If `work_mem` is insufficient to store exact tuple pointers for millions of matches, Postgres downgrades to a lossy page-level bitmap, re-evaluating the WHERE condition (`Recheck Cond`) for every row on those pages.",
    "explanation": "To avoid random I/O from jumping back and forth across table blocks, PostgreSQL builds an in-memory bitmap of target disk pages and reads them sequentially. If `work_mem` is insufficient to store exact tuple pointers for millions of matches, Postgres downgrades to a lossy page-level bitmap, re-evaluating the WHERE condition (`Recheck Cond`) for every row on those pages.",
    "importantPoints": [
      "Converts random index reads into sequential physical page reads.",
      "Combines multiple indexes via bitwise AND/OR bitmaps.",
      "Recheck Cond re-validates rows when memory constraints force lossy page bitmaps."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Bitmap Heap Scan and Recheck Cond in PostgreSQL",
        "code": "-- Demonstration for: Bitmap Heap Scan and Recheck Cond in PostgreSQL\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Hash Join vs Nested Loop vs Merge Join Execution Costs",
    "question": "Compare the memory, CPU, and sorting trade-offs of Nested Loop, Hash Join, and Merge Join operators.",
    "difficulty": "hard",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "nested-loop",
      "hash-join",
      "merge-join",
      "execution-plan"
    ],
    "interviewAnswer": "Nested Loop is optimal for small outer tables joining to an indexed inner table O(N log M). Hash Join builds an in-memory hash table of the smaller relation and probes it with the larger, ideal for large un-indexed joins. Merge Join requires both inputs to be sorted on the join key and zips them in linear O(N + M) time with minimal memory.",
    "answer": "1) Nested Loop: For each outer row, seeks matching inner rows via index. Excellent for small datasets, terrible if inner table is un-indexed (O(N*M)). 2) Hash Join: Builds in-memory hash table of left table in RAM. Probes with right table. Extremely fast for large datasets, but memory-intensive; spills to disk if work_mem is exceeded. 3) Merge Join: Reads two pre-sorted inputs concurrently like merging sorted lists. Very low memory, predictable performance, ideal if inputs are already sorted by B-Tree indexes.",
    "explanation": "1) Nested Loop: For each outer row, seeks matching inner rows via index. Excellent for small datasets, terrible if inner table is un-indexed (O(N*M)). 2) Hash Join: Builds in-memory hash table of left table in RAM. Probes with right table. Extremely fast for large datasets, but memory-intensive; spills to disk if work_mem is exceeded. 3) Merge Join: Reads two pre-sorted inputs concurrently like merging sorted lists. Very low memory, predictable performance, ideal if inputs are already sorted by B-Tree indexes.",
    "importantPoints": [
      "Nested Loop: Best for small sets with indexed inner table.",
      "Hash Join: Best for large un-sorted datasets; consumes memory.",
      "Merge Join: Best for pre-sorted inputs; O(N+M) linear streaming."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Hash Join vs Nested Loop vs Merge Join Execution Costs",
        "code": "-- Demonstration for: Hash Join vs Nested Loop vs Merge Join Execution Costs\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Optimizing GROUP BY via Loose Index Scan (Skip Scan)",
    "question": "How does a Loose Index Scan optimize `SELECT DISTINCT category_id FROM large_products`?",
    "difficulty": "hard",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "distinct",
      "skip-scan",
      "loose-index-scan"
    ],
    "interviewAnswer": "Instead of scanning all 50 million rows to collect distinct categories, a Loose Index Scan reads the first key from the B-Tree, jumps directly to the next higher distinct key, and repeats, reading only N keys (where N is the number of distinct categories) in milliseconds.",
    "answer": "In MySQL and Oracle, loose index scans optimize `SELECT DISTINCT col` by using B-Tree navigation to hop across distinct value boundaries. In PostgreSQL (which lacks native skip scans), the identical optimization is achieved using a Recursive CTE that jumps from one `MAX(col)` to the next.",
    "explanation": "In MySQL and Oracle, loose index scans optimize `SELECT DISTINCT col` by using B-Tree navigation to hop across distinct value boundaries. In PostgreSQL (which lacks native skip scans), the identical optimization is achieved using a Recursive CTE that jumps from one `MAX(col)` to the next.",
    "importantPoints": [
      "Jumps across B-Tree distinct value boundaries.",
      "Reads N pages where N = count of unique values.",
      "Avoids reading millions of duplicate index rows."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Optimizing GROUP BY via Loose Index Scan (Skip Scan)",
        "code": "-- Demonstration for: Optimizing GROUP BY via Loose Index Scan (Skip Scan)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Common Table Expressions: Optimization Barrier Myth in Modern Postgres",
    "question": "Is a CTE still an optimization barrier in PostgreSQL 12 and newer versions?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "cte",
      "postgresql",
      "inlining",
      "optimization-barrier"
    ],
    "interviewAnswer": "No! Starting in PostgreSQL 12, non-recursive CTEs are inlined by default into the outer query, allowing predicate pushdown and index scans just like derived subqueries. You can still force materialization by adding the MATERIALIZED keyword.",
    "answer": "In PostgreSQL 11 and older, writing `WITH cte AS (...)` forced Postgres to calculate and write the CTE into an isolated temporary memory buffer, preventing the outer query's WHERE filters from being pushed down. Since Postgres 12, CTEs are inlined unless declared `WITH cte AS MATERIALIZED (...)`.",
    "explanation": "In PostgreSQL 11 and older, writing `WITH cte AS (...)` forced Postgres to calculate and write the CTE into an isolated temporary memory buffer, preventing the outer query's WHERE filters from being pushed down. Since Postgres 12, CTEs are inlined unless declared `WITH cte AS MATERIALIZED (...)`.",
    "importantPoints": [
      "Postgres 12+ inlines CTEs automatically.",
      "Allows outer predicates to be pushed down into CTE expressions.",
      "Can explicitly declare AS MATERIALIZED to preserve isolated caching."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Common Table Expressions: Optimization Barrier Myth in Modern Postgres",
        "code": "-- Demonstration for: Common Table Expressions: Optimization Barrier Myth in Modern Postgres\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Impact of SELECT * on Network, Memory, and Index-Only Scans",
    "question": "Why does using `SELECT *` in production applications degrade database and API performance?",
    "difficulty": "easy",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "select-star",
      "index-only-scan",
      "best-practices"
    ],
    "interviewAnswer": "SELECT * prevents Index-Only Scans by forcing heap lookups for non-indexed columns, increases network payload size, inflates application JSON serialization time and memory, and risks breaking client code when new columns are added.",
    "answer": "1) Disables Index-Only Scans: Even if an index covers `(user_id, status)`, `SELECT *` forces the engine to read the full row from disk to get other columns. 2) Network and RAM: Transferring 50 columns across 10,000 rows transfers megabytes of data instead of kilobytes. 3) Memory Pressure: Inflates buffer cache and client heap allocation.",
    "explanation": "1) Disables Index-Only Scans: Even if an index covers `(user_id, status)`, `SELECT *` forces the engine to read the full row from disk to get other columns. 2) Network and RAM: Transferring 50 columns across 10,000 rows transfers megabytes of data instead of kilobytes. 3) Memory Pressure: Inflates buffer cache and client heap allocation.",
    "importantPoints": [
      "Forces heap fetches, disabling Index-Only Scans.",
      "Increases network I/O and client deserialization latency.",
      "Always specify explicit projected columns in production queries."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Impact of SELECT * on Network, Memory, and Index-Only Scans",
        "code": "-- Demonstration for: Impact of SELECT * on Network, Memory, and Index-Only Scans\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Optimizing EXISTS vs COUNT(*) > 0",
    "question": "Why should you always use `WHERE EXISTS (...)` instead of `WHERE (SELECT COUNT(*) ...) > 0`?",
    "difficulty": "easy",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "exists",
      "count",
      "short-circuit"
    ],
    "interviewAnswer": "COUNT(*) must scan and tally every single matching row across the entire table before returning a number. EXISTS short-circuits and halts execution the exact millisecond it encounters the FIRST matching row, making it orders of magnitude faster.",
    "answer": "If a user has 100,000 orders, `SELECT COUNT(*) FROM orders WHERE user_id = 5` counts all 100,000 rows. `SELECT EXISTS (SELECT 1 FROM orders WHERE user_id = 5)` finds row #1 and immediately returns TRUE without reading the remaining 99,999 rows.",
    "explanation": "If a user has 100,000 orders, `SELECT COUNT(*) FROM orders WHERE user_id = 5` counts all 100,000 rows. `SELECT EXISTS (SELECT 1 FROM orders WHERE user_id = 5)` finds row #1 and immediately returns TRUE without reading the remaining 99,999 rows.",
    "importantPoints": [
      "EXISTS short-circuits on first match.",
      "COUNT(*) scans the entire partition/table.",
      "Massive performance difference on high-cardinality relations."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Optimizing EXISTS vs COUNT(*) > 0",
        "code": "-- Demonstration for: Optimizing EXISTS vs COUNT(*) > 0\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Shared Buffers and Cache Hit Ratio Monitoring",
    "question": "How do you calculate the Buffer Cache Hit Ratio in PostgreSQL, and what threshold indicates healthy memory sizing?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "cache-hit-ratio",
      "shared-buffers",
      "monitoring"
    ],
    "interviewAnswer": "Buffer Cache Hit Ratio = (shared_blks_hit * 100.0) / (shared_blks_hit + shared_blks_read). In healthy OLTP production systems, the hit ratio should consistently exceed 99%. A ratio below 95% indicates buffer pool memory starvation and heavy disk I/O.",
    "answer": "Database RAM cache (shared_buffers in Postgres, innodb_buffer_pool_size in MySQL) caches hot pages. Querying `pg_stat_database` provides cumulative block hits vs disk reads. If cache hit ratio drops below 99%, active working sets no longer fit in RAM, forcing queries to fetch pages from physical disk.",
    "explanation": "Database RAM cache (shared_buffers in Postgres, innodb_buffer_pool_size in MySQL) caches hot pages. Querying `pg_stat_database` provides cumulative block hits vs disk reads. If cache hit ratio drops below 99%, active working sets no longer fit in RAM, forcing queries to fetch pages from physical disk.",
    "importantPoints": [
      "Formula: Hits / (Hits + Reads) * 100.",
      "Healthy OLTP systems target 99%+ cache hit ratio.",
      "Low hit ratio indicates buffer pool sizing bottlenecks or un-indexed scans."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Shared Buffers and Cache Hit Ratio Monitoring",
        "code": "-- Demonstration for: Shared Buffers and Cache Hit Ratio Monitoring\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Temporary Tables vs Common Table Expressions Performance",
    "question": "When should you replace a complex multi-stage CTE with a physical Temporary Table?",
    "difficulty": "hard",
    "questionType": "Trade-off",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "temp-tables",
      "cte",
      "statistics",
      "cardinality"
    ],
    "interviewAnswer": "Use a physical temporary table when intermediate results are reused multiple times, when intermediate cardinality estimates break down in deep CTE chains, or when intermediate results need secondary indexes to accelerate subsequent joins.",
    "answer": "When a query has 5 nested CTE stages, the optimizer must estimate intermediate row counts without real table statistics, frequently miscalculating by orders of magnitude and choosing terrible join plans. Writing intermediate results to a temporary table (`CREATE TEMP TABLE ...`) allows running `ANALYZE temp_table` and creating indexes on it.",
    "explanation": "When a query has 5 nested CTE stages, the optimizer must estimate intermediate row counts without real table statistics, frequently miscalculating by orders of magnitude and choosing terrible join plans. Writing intermediate results to a temporary table (`CREATE TEMP TABLE ...`) allows running `ANALYZE temp_table` and creating indexes on it.",
    "importantPoints": [
      "Temporary tables have real statistics and histograms.",
      "Enable adding indexes to intermediate pipeline results.",
      "Prevents optimizer plan breakdown in complex multi-step analytics."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Temporary Tables vs Common Table Expressions Performance",
        "code": "-- Demonstration for: Temporary Tables vs Common Table Expressions Performance\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Cursor-Based vs Window-Function-Based Deduplication Performance",
    "question": "Compare performance: deleting duplicate rows using a self-join vs ROW_NUMBER() in a CTE.",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "deduplication",
      "window-functions",
      "delete"
    ],
    "interviewAnswer": "Deduplicating with ROW_NUMBER() in a CTE performs a single table scan and sort O(N log N). Deduplicating via naive self-joins (DELETE t1 FROM t t1 JOIN t t2 WHERE t1.id > t2.id AND t1.email = t2.email) can degenerate into an O(N^2) quadratic nested loop scan, taking hours on large tables.",
    "answer": "Window functions assign row numbers based on duplicates in a single linear/sorted pass. The CTE identifies rows with `rn > 1` and deletes them directly. Self-joins require cross-referencing candidate duplicate rows repeatedly, resulting in severe locking and quadratic I/O complexity.",
    "explanation": "Window functions assign row numbers based on duplicates in a single linear/sorted pass. The CTE identifies rows with `rn > 1` and deletes them directly. Self-joins require cross-referencing candidate duplicate rows repeatedly, resulting in severe locking and quadratic I/O complexity.",
    "importantPoints": [
      "Window function CTE deduplication runs in O(N log N) single pass.",
      "Self-join deduplication can trigger quadratic O(N^2) nested loop scans.",
      "Much faster and cleaner on multi-million row tables."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Cursor-Based vs Window-Function-Based Deduplication Performance",
        "code": "-- Demonstration for: Cursor-Based vs Window-Function-Based Deduplication Performance\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Vacuum Full vs pg_repack for Zero-Downtime Table De-bloating",
    "question": "Why is VACUUM FULL avoided in 24/7 production systems, and how does pg_repack solve table bloat without downtime?",
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "vacuum-full",
      "pg-repack",
      "table-bloat",
      "locks"
    ],
    "interviewAnswer": "VACUUM FULL acquires an AccessExclusiveLock on the table, blocking all concurrent SELECT, INSERT, UPDATE, and DELETE operations for hours while it rewrites the table. pg_repack creates an auxiliary table, copies data, captures concurrent writes via triggers, and swaps tables atomically with minimal locking.",
    "answer": "VACUUM FULL is an offline maintenance command that completely halts application traffic. `pg_repack` is an open-source extension that rebuilds bloated tables and indexes online. It builds a copy of the table, syncs live updates using a log table and triggers, swaps the physical files using a brief lock, and drops the old bloated table seamlessly.",
    "explanation": "VACUUM FULL is an offline maintenance command that completely halts application traffic. `pg_repack` is an open-source extension that rebuilds bloated tables and indexes online. It builds a copy of the table, syncs live updates using a log table and triggers, swaps the physical files using a brief lock, and drops the old bloated table seamlessly.",
    "importantPoints": [
      "VACUUM FULL takes exclusive locks, causing complete application downtime.",
      "pg_repack rebuilds tables online without blocking reads or writes.",
      "Industry standard for reclaiming gigabytes of dead space in live databases."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Vacuum Full vs pg_repack for Zero-Downtime Table De-bloating",
        "code": "-- Demonstration for: Vacuum Full vs pg_repack for Zero-Downtime Table De-bloating\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Database Sharding vs Read Replicas for Scale",
    "question": "When is adding Read Replicas insufficient, forcing an architecture to adopt Horizontal Sharding?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "sharding",
      "read-replicas",
      "horizontal-scaling"
    ],
    "interviewAnswer": "Read replicas scale READ throughput by distributing SELECT queries, but every replica must execute 100% of write transactions. When WRITE throughput exceeds single-node capacity, or when total data storage exceeds single-server limits (e.g. 10TB+), horizontal sharding is mandatory to partition writes across multiple primary nodes.",
    "answer": "Read replicas duplicate the entire database. If an application writes 20,000 transactions/sec, adding 10 replicas does not help because every replica must process all 20,000 writes to stay in sync. Sharding splits the data (e.g. by user_id) so each shard handles 1/Nth of the write traffic and storage, providing horizontal write scalability.",
    "explanation": "Read replicas duplicate the entire database. If an application writes 20,000 transactions/sec, adding 10 replicas does not help because every replica must process all 20,000 writes to stay in sync. Sharding splits the data (e.g. by user_id) so each shard handles 1/Nth of the write traffic and storage, providing horizontal write scalability.",
    "importantPoints": [
      "Replicas scale read throughput only.",
      "All replicas must execute all write operations.",
      "Sharding partitions write throughput and storage across multiple primary nodes."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Database Sharding vs Read Replicas for Scale",
        "code": "-- Demonstration for: Database Sharding vs Read Replicas for Scale\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Query Plan Regressions Caused by Data Growth Tipping Points",
    "question": "Why can a query suddenly flip from an Index Scan to a Sequential Scan after a table grows past a certain size?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "tipping-point",
      "plan-flip",
      "cost-model"
    ],
    "interviewAnswer": "As table size grows, the cost difference between random I/O (index lookups) and sequential I/O (table scans) shifts. If the table exceeds RAM, index lookups incur real disk seeks. Once the optimizer estimates that matching rows exceed the tipping point (typically ~15-20% of rows), it flips to a sequential scan.",
    "answer": "When a table had 100k rows, it fit entirely in RAM, so random index lookups had zero disk penalty. At 10M rows, the table is mostly on disk. The optimizer calculates that reading 500,000 rows via index lookups requires 500,000 random disk seeks. A sequential multi-block scan reads the entire table in contiguous chunks faster than 500,000 random seeks, causing the plan flip.",
    "explanation": "When a table had 100k rows, it fit entirely in RAM, so random index lookups had zero disk penalty. At 10M rows, the table is mostly on disk. The optimizer calculates that reading 500,000 rows via index lookups requires 500,000 random disk seeks. A sequential multi-block scan reads the entire table in contiguous chunks faster than 500,000 random seeks, causing the plan flip.",
    "importantPoints": [
      "Table exceeding buffer pool RAM changes real I/O costs.",
      "Cost model accounts for random seek latency vs sequential scan speed.",
      "Solved by creating covering indexes to avoid heap fetches."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Query Plan Regressions Caused by Data Growth Tipping Points",
        "code": "-- Demonstration for: Query Plan Regressions Caused by Data Growth Tipping Points\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Statement-Level Caching vs Result Set Caching",
    "question": "Why did MySQL 8 completely remove the legacy Query Cache?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "query-cache",
      "mysql",
      "scalability"
    ],
    "interviewAnswer": "MySQL's legacy Query Cache stored raw query strings and their result sets. It was guarded by a single global mutex lock. Any modification (INSERT/UPDATE/DELETE) to a table invalidated ALL cached queries for that table, causing severe lock contention and scalability bottlenecks on multi-core servers.",
    "answer": "The Query Cache was designed in the single-core era for mostly static websites. In modern multi-threaded OLTP systems, the global query cache mutex serialized query execution. High-throughput writes continuously purged the cache, turning the cache into a performance net-negative. Modern architectures use application-level caching (Redis) instead.",
    "explanation": "The Query Cache was designed in the single-core era for mostly static websites. In modern multi-threaded OLTP systems, the global query cache mutex serialized query execution. High-throughput writes continuously purged the cache, turning the cache into a performance net-negative. Modern architectures use application-level caching (Redis) instead.",
    "importantPoints": [
      "Global mutex lock killed multi-core concurrency.",
      "Any write invalidated all cached queries for that table.",
      "Removed entirely in MySQL 8.0 in favor of client-side/Redis caching."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Statement-Level Caching vs Result Set Caching",
        "code": "-- Demonstration for: Statement-Level Caching vs Result Set Caching\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Optimizing Wildcard Searches with Trigram Indexes",
    "question": "How do you optimize `WHERE username ILIKE '%john%'` on a table with 20 million users?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "pg_trgm",
      "like-query",
      "postgresql",
      "indexes"
    ],
    "interviewAnswer": "Use PostgreSQL's pg_trgm extension: CREATE EXTENSION pg_trgm; CREATE INDEX idx_users_username_trgm ON users USING gin (username gin_trgm_ops); This converts leading wildcard searches into an index scan.",
    "answer": "Standard B-Trees cannot search substrings with leading wildcards (`%john%`). The `pg_trgm` extension breaks strings into 3-character sequences and indexes them in a Generalized Inverted Index (GIN). When querying `ILIKE '%john%'`, PostgreSQL searches the trigram index directly, reducing execution time from 5,000ms full table scan to 5ms index scan.",
    "explanation": "Standard B-Trees cannot search substrings with leading wildcards (`%john%`). The `pg_trgm` extension breaks strings into 3-character sequences and indexes them in a Generalized Inverted Index (GIN). When querying `ILIKE '%john%'`, PostgreSQL searches the trigram index directly, reducing execution time from 5,000ms full table scan to 5ms index scan.",
    "importantPoints": [
      "B-Tree cannot use leading wildcard LIKE '%...'.",
      "pg_trgm indexes 3-character letter combinations.",
      "Reduces substring search from seconds to milliseconds."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Optimizing Wildcard Searches with Trigram Indexes",
        "code": "-- Demonstration for: Optimizing Wildcard Searches with Trigram Indexes\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Optimizing Bulk UPSERT Performance (ON CONFLICT / ON DUPLICATE KEY)",
    "question": "How do you optimize bulk UPSERT throughput when inserting 100,000 rows in PostgreSQL and MySQL?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "upsert",
      "on-conflict",
      "batching"
    ],
    "interviewAnswer": "Batch rows into chunks of 1,000-5,000 using multi-row INSERT ... ON CONFLICT (id) DO UPDATE. Avoid executing individual single-row UPSERT statements in loops.",
    "answer": "Executing single-row upserts incurs 100,000 network round-trips and transaction flushes. Batching 2,000 rows per statement: `INSERT INTO metrics (id, val) VALUES (...), (...) ON CONFLICT (id) DO UPDATE SET val = EXCLUDED.val;` allows the database to sort conflict keys in memory and execute the entire batch in a single atomic transaction.",
    "explanation": "Executing single-row upserts incurs 100,000 network round-trips and transaction flushes. Batching 2,000 rows per statement: `INSERT INTO metrics (id, val) VALUES (...), (...) ON CONFLICT (id) DO UPDATE SET val = EXCLUDED.val;` allows the database to sort conflict keys in memory and execute the entire batch in a single atomic transaction.",
    "importantPoints": [
      "Batch multi-row inserts in chunks of 1,000-5,000.",
      "Reduces network round-trips and WAL commit overhead.",
      "Sort input data by primary key to prevent deadlocks during bulk upserts."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Optimizing Bulk UPSERT Performance (ON CONFLICT / ON DUPLICATE KEY)",
        "code": "-- Demonstration for: Optimizing Bulk UPSERT Performance (ON CONFLICT / ON DUPLICATE KEY)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "EXPLAIN Plan Cost Units Meaning",
    "question": "What do the numbers in `cost=0.42..8.45` represent in a PostgreSQL EXPLAIN plan?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "explain",
      "cost-units",
      "postgresql"
    ],
    "interviewAnswer": "The first number (0.42) is the Startup Cost (cost to fetch the first row). The second number (8.45) is the Total Estimated Cost (cost to return all rows). The numbers are arbitrary cost units relative to 1.0 (the cost of reading one sequential disk page).",
    "answer": "Cost numbers do not represent milliseconds; they represent arbitrary cost units standardized against `seq_page_cost = 1.0`. A startup cost of 0.0 means rows can be streamed immediately (like an index scan or limit). A high startup cost (e.g. 500.0) means the engine must complete prior work (like sorting or building a hash table) before producing the first row.",
    "explanation": "Cost numbers do not represent milliseconds; they represent arbitrary cost units standardized against `seq_page_cost = 1.0`. A startup cost of 0.0 means rows can be streamed immediately (like an index scan or limit). A high startup cost (e.g. 500.0) means the engine must complete prior work (like sorting or building a hash table) before producing the first row.",
    "importantPoints": [
      "First number: Startup cost (latency to first row).",
      "Second number: Total cost (latency to complete all rows).",
      "Calibrated against 1.0 (cost of 1 sequential page read)."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "EXPLAIN Plan Cost Units Meaning",
        "code": "-- Demonstration for: EXPLAIN Plan Cost Units Meaning\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Foreign Key Verification Overhead on High-Speed INSERTs",
    "question": "How can foreign key constraints impact write throughput on high-velocity insert streams, and how do you optimize it?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "foreign-keys",
      "insert-overhead",
      "iot"
    ],
    "interviewAnswer": "Every inserted row must verify that the referenced foreign key exists in the parent table, requiring an index seek on the parent table and taking shared locks. In ultra-high-velocity streams (e.g. IoT metrics), ensure the parent primary key index fits in RAM, or partition by foreign key.",
    "answer": "In write-intensive logging tables ingesting 50k events/sec, checking foreign keys to a parent `devices` table forces 50k parent index reads per second. If the parent index is not memory-resident, inserts choke on disk I/O. Solutions: Ensure parent PK index is pinned in buffer pool, or validate foreign keys asynchronously during batch ETL.",
    "explanation": "In write-intensive logging tables ingesting 50k events/sec, checking foreign keys to a parent `devices` table forces 50k parent index reads per second. If the parent index is not memory-resident, inserts choke on disk I/O. Solutions: Ensure parent PK index is pinned in buffer pool, or validate foreign keys asynchronously during batch ETL.",
    "importantPoints": [
      "Each insert incurs a foreign key validation index lookup.",
      "Parent index must remain resident in buffer pool memory.",
      "Batch staging tables can bypass FK checks during initial ingestion."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Foreign Key Verification Overhead on High-Speed INSERTs",
        "code": "-- Demonstration for: Foreign Key Verification Overhead on High-Speed INSERTs\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "CTE vs Subquery Inlining and Memory Spills",
    "question": "How do you force PostgreSQL to materialize an expensive CTE that is evaluated multiple times?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "cte",
      "materialized",
      "postgresql"
    ],
    "interviewAnswer": "Add the MATERIALIZED keyword: WITH cte AS MATERIALIZED (SELECT ...) SELECT ... FROM cte c1 JOIN cte c2 ... This tells PostgreSQL to execute the CTE once, cache the intermediate results, and share them across all references.",
    "answer": "Because PostgreSQL 12+ inlines CTEs by default, if a query references `my_expensive_cte` three times in the outer query, the optimizer might execute the expensive calculation three separate times. Specifying `WITH my_expensive_cte AS MATERIALIZED (...)` acts as an optimization barrier, ensuring single calculation and in-memory caching.",
    "explanation": "Because PostgreSQL 12+ inlines CTEs by default, if a query references `my_expensive_cte` three times in the outer query, the optimizer might execute the expensive calculation three separate times. Specifying `WITH my_expensive_cte AS MATERIALIZED (...)` acts as an optimization barrier, ensuring single calculation and in-memory caching.",
    "importantPoints": [
      "WITH ... AS MATERIALIZED forces single evaluation and caching.",
      "WITH ... AS NOT MATERIALIZED forces inlining.",
      "Prevents redundant execution when CTE is joined multiple times."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "CTE vs Subquery Inlining and Memory Spills",
        "code": "-- Demonstration for: CTE vs Subquery Inlining and Memory Spills\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Preventing Table Scans on Soft-Deleted Queries",
    "question": "How do you optimize queries that always filter `WHERE is_deleted = false` on a table where 95% of rows are active?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "soft-delete",
      "indexes",
      "partial-index"
    ],
    "interviewAnswer": "If 95% of rows are active, an index on is_deleted has terrible selectivity and will be ignored. Instead, include is_deleted as a secondary column in composite indexes, or create partial indexes that omit deleted rows.",
    "answer": "Indexing a boolean column where 95% of rows are `false` is useless alone. To optimize: 1) Append `is_deleted` to the end of composite indexes `(customer_id, is_deleted)`; or 2) Invert the model and create partial indexes `WHERE is_deleted = false` on primary search keys, keeping indexes compact.",
    "explanation": "Indexing a boolean column where 95% of rows are `false` is useless alone. To optimize: 1) Append `is_deleted` to the end of composite indexes `(customer_id, is_deleted)`; or 2) Invert the model and create partial indexes `WHERE is_deleted = false` on primary search keys, keeping indexes compact.",
    "importantPoints": [
      "Single-column index on low-cardinality boolean is ignored.",
      "Incorporate into composite indexes.",
      "Use partial indexes to index only active rows."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Preventing Table Scans on Soft-Deleted Queries",
        "code": "-- Demonstration for: Preventing Table Scans on Soft-Deleted Queries\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Index Scans with High Filter Discard Ratios",
    "question": "What does it indicate when an execution plan shows \"Index Scan using idx_date: rows=10,000,000 filtered=9,990,000\"?",
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "filter-discard",
      "composite-index",
      "query-plan"
    ],
    "interviewAnswer": "It indicates that the index used (idx_date) is too broad and lacks the secondary filter columns. The engine read 10 million index entries from disk only to discard 99.9% of them in memory. The solution is creating a Composite Index including both the date and the filtered column.",
    "answer": "A high discard count in `Filter:` indicates wasted I/O. The database navigated to the date range, but then had to load and inspect 10 million rows to evaluate a second filter (e.g. `status = 'ACTIVE'`). A composite index on `(status, date)` allows the engine to seek directly to active rows within that date, reading only the 10,000 matching rows.",
    "explanation": "A high discard count in `Filter:` indicates wasted I/O. The database navigated to the date range, but then had to load and inspect 10 million rows to evaluate a second filter (e.g. `status = 'ACTIVE'`). A composite index on `(status, date)` allows the engine to seek directly to active rows within that date, reading only the 10,000 matching rows.",
    "importantPoints": [
      "High filter discards signal that secondary columns belong in a composite index.",
      "Dramatically reduces wasted page reads and buffer thrashing.",
      "Transforms row filtering into direct index seeks."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Scans with High Filter Discard Ratios",
        "code": "-- Demonstration for: Index Scans with High Filter Discard Ratios\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Lock Wait Queues and Head-of-Line Blocking",
    "question": "What is Head-of-Line Blocking in database lock queues, and how does it bring down high-concurrency systems?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "head-of-line-blocking",
      "locks",
      "concurrency"
    ],
    "interviewAnswer": "Head-of-Line blocking occurs when an exclusive lock request (like ALTER TABLE or LOCK TABLE) waits in queue behind an active long-running read. Because exclusive locks have priority to prevent starvation, all subsequent fast reads queue behind the waiting lock request, halting all traffic to that table.",
    "answer": "In relational locking queues: Session 1 runs a slow 60-second SELECT. Session 2 runs `ALTER TABLE ... ADD COLUMN`, requesting an exclusive lock. Session 2 waits for Session 1. Next, 500 incoming 1ms user SELECT requests queue BEHIND Session 2. Within seconds, the connection pool is exhausted and the web application crashes.",
    "explanation": "In relational locking queues: Session 1 runs a slow 60-second SELECT. Session 2 runs `ALTER TABLE ... ADD COLUMN`, requesting an exclusive lock. Session 2 waits for Session 1. Next, 500 incoming 1ms user SELECT requests queue BEHIND Session 2. Within seconds, the connection pool is exhausted and the web application crashes.",
    "importantPoints": [
      "Exclusive lock requests queue behind active readers.",
      "Subsequent fast reads queue behind the waiting exclusive lock.",
      "Resolved by setting lock_timeout on DDL migrations."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Lock Wait Queues and Head-of-Line Blocking",
        "code": "-- Demonstration for: Lock Wait Queues and Head-of-Line Blocking\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Partition Pruning vs Full Partition Scans",
    "question": "How do you verify in an EXPLAIN plan that Partition Pruning is functioning correctly?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "partition-pruning",
      "explain",
      "query-plan"
    ],
    "interviewAnswer": "In PostgreSQL, look at the Append / MergeAppend node: \"Partitions: 1 of 48\" or check that only matching partition tables (e.g. orders_2026_01) appear in the plan. If all 48 partitions appear, partition pruning failed.",
    "answer": "Partition pruning must be verified in execution plans. If a query filters on a non-sargable expression (e.g. `WHERE DATE(order_date) = ...`), the optimizer cannot prune partitions at compile time, forcing a sequential scan of every single historical partition. Ensuring sargable filter predicates restores partition pruning.",
    "explanation": "Partition pruning must be verified in execution plans. If a query filters on a non-sargable expression (e.g. `WHERE DATE(order_date) = ...`), the optimizer cannot prune partitions at compile time, forcing a sequential scan of every single historical partition. Ensuring sargable filter predicates restores partition pruning.",
    "importantPoints": [
      "Check Partitions scanned count in EXPLAIN output.",
      "Functions on partition keys break compile-time pruning.",
      "Sargable predicates guarantee single-partition scans."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Partition Pruning vs Full Partition Scans",
        "code": "-- Demonstration for: Partition Pruning vs Full Partition Scans\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Optimizing Aggregations over Un-Indexed Foreign Keys",
    "question": "Why does `SELECT user_id, COUNT(*) FROM orders GROUP BY user_id` take minutes without an index, and what index accelerates it?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "group-by",
      "covering-index",
      "index-only-scan"
    ],
    "interviewAnswer": "Without an index, the database must scan all table pages from disk and build a massive in-memory hash table or sort the table. Creating an index on (user_id) allows the engine to perform an Index-Only Scan using Stream Aggregate, streaming pre-grouped counts with zero heap reads.",
    "answer": "An index on `(user_id)` stores values pre-sorted in B-Tree leaf pages. The database reads only the narrow index leaf blocks using Stream Aggregate: as it streams through, it tallies counts until `user_id` changes, requiring zero temporary disk memory and minimal I/O.",
    "explanation": "An index on `(user_id)` stores values pre-sorted in B-Tree leaf pages. The database reads only the narrow index leaf blocks using Stream Aggregate: as it streams through, it tallies counts until `user_id` changes, requiring zero temporary disk memory and minimal I/O.",
    "importantPoints": [
      "Unindexed GROUP BY forces full table scan + hash spill.",
      "Index on GROUP BY key enables instant Stream Aggregate.",
      "Index-Only Scan eliminates table heap reads entirely."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Optimizing Aggregations over Un-Indexed Foreign Keys",
        "code": "-- Demonstration for: Optimizing Aggregations over Un-Indexed Foreign Keys\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Scenario: A JOIN Unexpectedly Creates Millions of Rows",
    "question": "A JOIN unexpectedly creates millions of rows instead of the expected thousands. How would you debug and fix it?",
    "difficulty": "medium",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "joins",
      "cartesian-product",
      "debugging",
      "scenario"
    ],
    "interviewAnswer": "This occurs when one or both joined tables contain duplicate keys on the join condition (e.g. many-to-many relationship instead of 1-to-many), creating an unexpected combinatorial cross product. Debug by running SELECT join_key, COUNT(*) FROM table GROUP BY join_key HAVING COUNT(*) > 1 on both tables.",
    "answer": "If joining Table A to Table B on `user_id` produces 10 million rows from a 10,000-row table, there are multiple rows with the same `user_id` in both tables. If User 1 has 500 rows in Table A and 500 rows in Table B, joining them produces 500 * 500 = 250,000 rows for that user alone! Fix: Deduplicate or pre-aggregate one of the tables in a CTE before joining.",
    "explanation": "If joining Table A to Table B on `user_id` produces 10 million rows from a 10,000-row table, there are multiple rows with the same `user_id` in both tables. If User 1 has 500 rows in Table A and 500 rows in Table B, joining them produces 500 * 500 = 250,000 rows for that user alone! Fix: Deduplicate or pre-aggregate one of the tables in a CTE before joining.",
    "importantPoints": [
      "Caused by non-unique join keys producing combinatorial row multiplications (M * N).",
      "Debug via GROUP BY join_key HAVING COUNT(*) > 1 on both sides.",
      "Resolve by pre-aggregating or deduplicating child tables prior to join."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Scenario: A JOIN Unexpectedly Creates Millions of Rows",
        "code": "-- Demonstration for: Scenario: A JOIN Unexpectedly Creates Millions of Rows\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Batching Large UPDATE and DELETE Statements",
    "question": "Why should massive UPDATE or DELETE operations on millions of rows always be batched in chunks?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "batching",
      "delete",
      "locks",
      "replication-lag"
    ],
    "interviewAnswer": "A single multi-million row update or delete holds exclusive locks for minutes, bloats the transaction log/WAL, triggers lock escalation to a full table lock in SQL Server, and causes severe replication lag on standby read replicas. Batching in chunks of 1,000-5,000 with sleeps decouples locking and allows replicas to keep up.",
    "answer": "Deleting 10 million rows in one statement requires logging all 10 million changes in a single transaction. If the server crashes at row 9,999,999, the rollback takes hours. In addition, read replicas cannot serve reads until the multi-gigabyte transaction replays. A looping batch script deleting 5,000 rows per transaction with a 100ms pause keeps production responsive and eliminates lock contention.",
    "explanation": "Deleting 10 million rows in one statement requires logging all 10 million changes in a single transaction. If the server crashes at row 9,999,999, the rollback takes hours. In addition, read replicas cannot serve reads until the multi-gigabyte transaction replays. A looping batch script deleting 5,000 rows per transaction with a 100ms pause keeps production responsive and eliminates lock contention.",
    "importantPoints": [
      "Avoids table lock escalation and long-held exclusive row locks.",
      "Prevents replication lag and disk log exhaustion.",
      "Ensures fast rollbacks and allows concurrent production traffic to interleave."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Batching Large UPDATE and DELETE Statements",
        "code": "-- Demonstration for: Batching Large UPDATE and DELETE Statements\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "PostgreSQL JIT (Just-In-Time) Compilation Overhead",
    "question": "When can PostgreSQL JIT (Just-In-Time) compilation hurt OLTP query performance, and how do you disable it?",
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "jit",
      "postgresql",
      "oltp-performance"
    ],
    "interviewAnswer": "JIT compilation compiles SQL expressions and tuple deforming into native machine code using LLVM. While beneficial for long analytical queries (taking 10+ seconds), the compilation phase adds 5ms-20ms of CPU latency. For sub-millisecond OLTP queries, JIT compilation can make queries 10x slower. Disable via SET jit = off;.",
    "answer": "In PostgreSQL 11+, JIT compilation activates when estimated query cost exceeds `jit_above_cost` (default 100,000). For queries that should execute in 2ms, spending 15ms compiling LLVM IR is a massive performance regression. In pure OLTP workloads, disabling JIT globally (`jit = off` in `postgresql.conf`) reduces CPU utilization and eliminates latency spikes.",
    "explanation": "In PostgreSQL 11+, JIT compilation activates when estimated query cost exceeds `jit_above_cost` (default 100,000). For queries that should execute in 2ms, spending 15ms compiling LLVM IR is a massive performance regression. In pure OLTP workloads, disabling JIT globally (`jit = off` in `postgresql.conf`) reduces CPU utilization and eliminates latency spikes.",
    "importantPoints": [
      "JIT compiles expressions via LLVM to machine code.",
      "Compilation adds 5-20ms CPU overhead per query.",
      "Great for big analytical queries; harmful for fast OLTP workloads."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "PostgreSQL JIT (Just-In-Time) Compilation Overhead",
        "code": "-- Demonstration for: PostgreSQL JIT (Just-In-Time) Compilation Overhead\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Row-Level Security (RLS) Performance Impact",
    "question": "How does PostgreSQL Row-Level Security (RLS) impact query execution plans and performance in multi-tenant architectures?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "rls",
      "row-level-security",
      "multi-tenant"
    ],
    "interviewAnswer": "RLS policies rewrite queries to append security filter conditions (e.g. tenant_id = current_setting(...)) to every table access. If the tenant_id column lacks an optimal composite index, RLS can force full table scans across all tenant data and prevent certain join reorderings.",
    "answer": "Row-Level Security enforces tenant isolation transparently at the database layer. However, the optimizer must inject the RLS policy predicate into every query plan node. If policies use complex subqueries or non-indexed expressions, every single SELECT/UPDATE slows down. Ensuring composite indexes lead with `tenant_id` keeps RLS execution instantaneous.",
    "explanation": "Row-Level Security enforces tenant isolation transparently at the database layer. However, the optimizer must inject the RLS policy predicate into every query plan node. If policies use complex subqueries or non-indexed expressions, every single SELECT/UPDATE slows down. Ensuring composite indexes lead with `tenant_id` keeps RLS execution instantaneous.",
    "importantPoints": [
      "RLS injects security filters into every query plan dynamically.",
      "Requires composite indexes leading with the security attribute (tenant_id).",
      "Complex RLS subqueries can prevent query optimizer join flattening."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Row-Level Security (RLS) Performance Impact",
        "code": "-- Demonstration for: Row-Level Security (RLS) Performance Impact\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "query-optimization",
    "title": "Index Merge Intersect vs Single Composite Index Cost Comparison",
    "question": "Why is a single composite index on (A, B) almost always faster than an Index Merge Intersect between separate index A and index B?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "query-optimization",
      "index-merge",
      "composite-index",
      "cost-comparison"
    ],
    "interviewAnswer": "Index Merge Intersect must scan two separate B-Trees, allocate memory for two bitmap structures, compute the bitwise AND intersection, and then fetch heap pages. A composite index on (A, B) navigates directly to the exact (A, B) tuple in a single B-Tree seek, performing zero bitmap calculations and reading far fewer pages.",
    "answer": "An Index Merge requires traversing two distinct physical indexes and allocating bitmap memory proportional to table size. A composite index `(A, B)` combines both attributes into a single sorted tree, allowing the optimizer to seek directly to the exact slice where `A = x AND B = y` in 3 to 4 page reads, with zero CPU bitmap overhead.",
    "explanation": "An Index Merge requires traversing two distinct physical indexes and allocating bitmap memory proportional to table size. A composite index `(A, B)` combines both attributes into a single sorted tree, allowing the optimizer to seek directly to the exact slice where `A = x AND B = y` in 3 to 4 page reads, with zero CPU bitmap overhead.",
    "importantPoints": [
      "Index Merge scans 2 separate indexes and allocates bitmap memory.",
      "Composite index achieves direct seek in a single B-Tree traversal.",
      "Composite index eliminates bitmap conversion and bitwise logic CPU overhead."
    ],
    "commonMistakes": [
      "Neglecting execution plan metrics or jumping to premature code rewrites."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Merge Intersect vs Single Composite Index Cost Comparison",
        "code": "-- Demonstration for: Index Merge Intersect vs Single Composite Index Cost Comparison\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
