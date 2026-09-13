import { SeedQuestion } from '../types';

export const performanceQuestions: SeedQuestion[] = [
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Scenario: Query Fast at 100k Documents but Slow at 20 Million",
    "question": "A MongoDB query was fast with 100,000 documents but became slow after the collection grew to 20 million. How would you investigate and fix it?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "query-optimization",
      "explain",
      "working-set",
      "collscan",
      "indexes"
    ],
    "interviewAnswer": "At 100,000 documents, the entire collection fits in WiredTiger RAM cache, making even unindexed scans (COLLSCAN) appear fast. At 20 million documents, the data exceeds RAM, forcing constant slow disk I/O. I would investigate by: 1) Running explain(\"executionStats\") to check if totalDocsExamined >> nReturned or if winningPlan is COLLSCAN; 2) Verifying if an existing index dropped out of RAM because totalIndexSize exceeds server memory; 3) Checking if the query has a non-selective regex or unindexed sort spilling to disk; 4) Creating a compound index adhering to the ESR (Equality, Sort, Range) rule; 5) Verifying that projection prunes large fields to return a Covered Query.",
    "answer": "Investigation Methodology for Data Scale Degradation:\n\n1. Run explain(\"executionStats\"):\nLook at three critical metrics:\n- `stage`: If `COLLSCAN`, an index was missing all along, but fast in RAM at 100k records.\n- `totalKeysExamined` vs `nReturned`: An ideal ratio is 1:1. If examining 500,000 keys to return 10 documents, the index selectivity is poor.\n- `totalDocsExamined`: If greater than 0 during an index scan, the query is fetching full documents from disk instead of being covered.\n\n2. Working Set & RAM Exhaustion:\nCheck `db.collection.stats()`. Compare `size` and `totalIndexSize` against host RAM. If indexes + active working set > physical RAM, WiredTiger is constantly page-faulting and swapping to disk.\n\n3. Sort Memory Limits:\nCheck if the query includes `.sort()`. At 100k rows, in-memory sort worked under the 32MB/100MB limit. At 20M rows, it spills to disk or aborts.\n\n4. Remediation:\n- Build compound index matching Equality -> Sort -> Range.\n- Switch from skip/limit pagination to cursor-based range pagination.",
    "explanation": "Small datasets hide bad schemas and missing indexes because the operating system page cache absorbs the latency. Scale exposes bad indexing instantly.",
    "importantPoints": [
      "Small datasets mask COLLSCANs because entire collection fits in RAM cache.",
      "Check totalKeysExamined vs nReturned in explain(\"executionStats\").",
      "Verify if totalIndexSize exceeds available WiredTiger RAM.",
      "Check if sort operations are spilling to disk.",
      "Build optimal compound indexes following ESR rule."
    ],
    "commonMistakes": [
      "Assuming that because a query was fast in staging with 10k mock rows, it is properly indexed for production.",
      "Adding more RAM instead of analyzing the explain plan and adding the missing index."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Diagnosing Slow Query at Scale",
        "code": "// 1. Profile query execution at scale:\nconst stats = db.orders.find({\n  status: \"ACTIVE\",\n  createdAt: { $gte: ISODate(\"2026-01-01\") }\n})\n.sort({ createdAt: -1 })\n.limit(20)\n.explain(\"executionStats\");\n\nconsole.log(\"Stage:\", stats.executionStats.executionStages.stage);\nconsole.log(\"Keys Examined:\", stats.executionStats.totalKeysExamined);\nconsole.log(\"Docs Examined:\", stats.executionStats.totalDocsExamined);\nconsole.log(\"Returned:\", stats.executionStats.nReturned);\nconsole.log(\"Time (ms):\", stats.executionStats.executionTimeMillis);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Scenario: Millions of Documents Pagination Strategy",
    "question": "Your API requires pagination over millions of documents. Which pagination approach would you choose and why?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "pagination",
      "skip-limit",
      "range-pagination",
      "cursor-based"
    ],
    "interviewAnswer": "I would strictly choose Keyset / Cursor-Based Pagination (Range-based using _id or timestamp) rather than offset pagination (skip() and limit()). The skip(N) method has O(N) time complexity because MongoDB must scan and discard N index entries before returning results, becoming unacceptably slow and memory-intensive on deep pages (e.g. skip(500000)). Cursor pagination queries { _id: { $gt: lastSeenId } } with limit(20), achieving O(1) constant time lookups regardless of whether the user is on page 1 or page 100,000.",
    "answer": "Detailed Comparison of Pagination Strategies:\n\n1. Offset Pagination (`.skip(N).limit(M)`):\n- Mechanism: To fulfill `skip(100000).limit(20)`, the storage engine must walk 100,020 index keys and discard 100,000 of them in memory.\n- Complexity: O(N) where N is page offset.\n- Failures at scale: High CPU, high disk I/O, slow response times on deep pages, and results shift if documents are inserted/deleted between pages.\n\n2. Range / Cursor-Based Pagination (`{ _id: { $gt: lastId } }.limit(M)`):\n- Mechanism: Directly seeks to the B-Tree leaf node for `lastId` and reads the next 20 entries.\n- Complexity: O(1) constant time regardless of page depth.\n- Advantages: Blazing fast response (< 2ms), zero wasted index key scans, and completely stable against concurrent insertions/deletions.\n- Best suited for: Infinite scroll, mobile apps, and high-throughput REST/GraphQL APIs.",
    "explanation": "If a product UI insists on numbered jump-to-page navigation for millions of records, calculate bucket ranges or limit maximum jump depth to 100 pages.",
    "importantPoints": [
      "skip(N) has O(N) complexity and degrades severely at scale.",
      "Cursor-based pagination has O(1) complexity and constant sub-millisecond response time.",
      "Cursor pagination is immune to duplicate or skipped items caused by concurrent writes.",
      "Requires client to pass back the cursor token (last seen _id or sort field value)."
    ],
    "commonMistakes": [
      "Using skip() and limit() for public APIs with millions of records, causing database outages when scrapers query page 10,000.",
      "Not indexing the cursor sort fields."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Keyset / Range-Based Pagination Implementation",
        "code": "// FAST: O(1) Keyset Pagination\nasync function getPaginatedOrders(lastSeenId, pageSize = 20) {\n  const query = {};\n  if (lastSeenId) {\n    query._id = { $lt: new ObjectId(lastSeenId) }; // Reverse chronological\n  }\n\n  return await db.orders.find(query)\n    .sort({ _id: -1 })\n    .limit(pageSize)\n    .toArray();\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Scenario: High CPU Usage Investigation and Resolution",
    "question": "MongoDB CPU usage is very high. How would you investigate?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "cpu-utilization",
      "currentOp",
      "profiling",
      "slowms",
      "troubleshooting"
    ],
    "interviewAnswer": "I would investigate in 4 systematic steps: 1) Run db.currentOp({ \"active\": true, \"secs_running\": { $gte: 3 } }) to identify runaway queries, unindexed aggregation pipelines, or massive map-reduce jobs consuming CPU; 2) Check the Slow Query Log and Database Profiler (system.profile) for queries with high keysExamined/nReturned ratios or COLLSCANs; 3) Check index utilization: queries performing in-memory sorting or massive regex scans spike CPU cores; 4) Check connection pool surges and thread thrashing. For immediate relief, I kill runaway operations using db.killOp(opid), and then deploy targeted indexes or rate-limit offending clients.",
    "answer": "High CPU Root Causes & Diagnostics:\n\n1. Missing Indexes & COLLSCANs: Scanning millions of documents to satisfy a high-throughput query forces CPU cores to evaluate filter predicates in a tight loop.\n2. In-Memory Sorting: Sorting unindexed results forces CPU-intensive quicksort algorithms in RAM.\n3. Aggregation Expressions: Heavy `$unwind`, regex matches (`$regex`), or JavaScript functions (`$where`, `$function`) consume CPU cycles.\n4. Database Profiler Setup:\n```javascript\n// Log queries slower than 100ms:\ndb.setProfilingLevel(1, { slowms: 100 });\n// Query the profile collection for CPU-heavy scans:\ndb.system.profile.find({ millis: { $gt: 100 } }).sort({ millis: -1 }).limit(10);\n```\n5. OS-Level Checks: Run `mongostat` and `mongotop` to see which collection is absorbing read/write lock time.",
    "explanation": "High CPU is rarely solved by adding more CPU cores; in 90% of production incidents, high CPU is caused by 1 or 2 unindexed queries that can be fixed with a single compound index.",
    "importantPoints": [
      "Use db.currentOp() to detect active queries pinning CPU cores.",
      "Inspect system.profile and slow query log for high millis and COLLSCAN stages.",
      "Unindexed sorts and regex scans are prime causes of CPU spikes.",
      "Run mongotop and mongostat to pinpoint hot collections in real time.",
      "Use db.killOp() for immediate incident relief."
    ],
    "commonMistakes": [
      "Immediately restarting the mongod server, which flushes the RAM cache and causes disk thrashing upon restart.",
      "Scaling CPU vertically without fixing missing indexes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Investigating CPU Spikes with currentOp and Profiler",
        "code": "// 1. Find operations running longer than 2 seconds:\ndb.currentOp({\n  active: true,\n  secs_running: { $gte: 2 },\n  op: { $in: [\"query\", \"command\"] }\n});\n\n// 2. Find top 5 slowest queries in profiler:\ndb.system.profile.find()\n  .sort({ millis: -1 })\n  .limit(5)\n  .projection({ ns: 1, millis: 1, execStats: 1, query: 1 });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Interpreting explain(\"executionStats\"): Key Performance Metrics",
    "question": "What specific metrics in explain(\"executionStats\") reveal query health and index efficiency?",
    "difficulty": "medium",
    "questionType": "Diagnostics",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "explain",
      "executionStats",
      "metrics",
      "query-planner"
    ],
    "interviewAnswer": "The 4 vital metrics are: 1) executionStages.stage (IXSCAN is healthy, COLLSCAN is a full table scan, SORT is unindexed in-memory sorting); 2) totalKeysExamined vs nReturned (ratio should be close to 1:1; ratios > 10 indicate poor index selectivity); 3) totalDocsExamined vs nReturned (if totalDocsExamined is 0, it is a 100% Covered Query); 4) executionTimeMillis (total query duration).",
    "answer": "Anatomy of executionStats:\n\n- `nReturned`: Number of documents matching query criteria returned to client.\n- `totalKeysExamined`: Number of B-tree index keys scanned. If 1,000,000 keys examined to return 5 docs, index is not selective.\n- `totalDocsExamined`: Number of actual documents fetched from disk/cache. If equal to `nReturned` during IXSCAN, index found exact matches. If 0, query is covered.\n- `executionStages.stage`: Look for `FETCH` (reading full document after index scan), `IXSCAN` (index scan), `COLLSCAN` (full scan), or `SORT` (blocking in-memory sort).",
    "explanation": "Always aim for index covered queries for latency-sensitive read paths.",
    "importantPoints": [
      "totalKeysExamined : nReturned ratio indicates index selectivity.",
      "totalDocsExamined = 0 means the query was completely covered by the index.",
      "COLLSCAN indicates a missing index.",
      "SORT stage indicates in-memory sorting without an index."
    ],
    "commonMistakes": [
      "Ignoring totalKeysExamined and looking only at executionTimeMillis on warm cache tests.",
      "Confusing queryPlanner mode (estimated) with executionStats mode (actual execution)."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Running and Inspecting executionStats",
        "code": "const exp = db.users.find({ age: { $gte: 30 } }).sort({ name: 1 }).explain(\"executionStats\");\nconst stats = exp.executionStats;\n\nconsole.log(\"Time (ms):\", stats.executionTimeMillis);\nconsole.log(\"Ratio:\", stats.totalKeysExamined / (stats.nReturned || 1));\nconsole.log(\"Root Stage:\", stats.executionStages.stage);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "WiredTiger Cache Architecture and Sizing (cacheSizeGB)",
    "question": "How does WiredTiger manage its RAM cache, and how should storage.wiredTiger.engineConfig.cacheSizeGB be configured?",
    "difficulty": "hard",
    "questionType": "Storage Engine",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "wiredtiger",
      "cacheSizeGB",
      "memory-management",
      "ram"
    ],
    "interviewAnswer": "By default, WiredTiger allocates 50% of (RAM - 1GB) or 256MB (whichever is larger) to its internal cache. The remaining 50% of RAM is intentionally left for the operating system filesystem cache (OS page cache), which holds compressed disk pages. WiredTiger uncompresses data inside its cache; reducing or expanding cacheSizeGB requires balancing uncompressed active working set in WiredTiger against compressed pages in the OS cache.",
    "answer": "Memory Architecture:\n1. WiredTiger Internal Cache: Holds uncompressed documents and B-tree index pages for immediate CPU processing.\n2. OS Filesystem Cache: Holds compressed WiredTiger data files. When WiredTiger reads from disk, it reads compressed blocks through OS page cache.\n\nConfiguration in `mongod.conf`:\n```yaml\nstorage:\n  wiredTiger:\n    engineConfig:\n      cacheSizeGB: 16\n```\n\nWhen running in Docker/Kubernetes containers: MongoDB may detect host RAM instead of container limits in older versions, causing OOM (Out Of Memory) container kills unless `cacheSizeGB` is explicitly configured to match container memory limits.",
    "explanation": "Never allocate 90% of host RAM to cacheSizeGB; without OS page cache, read/write I/O performance collapses.",
    "importantPoints": [
      "Default is 50% of (RAM - 1GB).",
      "Remaining RAM is used by OS page cache for compressed disk blocks.",
      "Must be explicitly configured in Docker/K8s to prevent OOM kills.",
      "WiredTiger holds uncompressed data; OS cache holds compressed data."
    ],
    "commonMistakes": [
      "Allocating 100% of server RAM to WiredTiger, causing Linux OOM killer to terminate mongod.",
      "Running in container environments without setting explicit memory limits in mongod.conf."
    ],
    "codeExamples": [
      {
        "language": "yaml",
        "title": "Configuring WiredTiger Cache Size in mongod.conf",
        "code": "storage:\n  dbPath: /var/lib/mongodb\n  wiredTiger:\n    engineConfig:\n      cacheSizeGB: 14 # Sized for 32GB server leaving 18GB for OS cache & connections"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Covered Queries: Zero Document I/O Operations",
    "question": "What is a Covered Query in MongoDB, and what conditions are required for a query to be covered?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "covered-query",
      "indexes",
      "projections"
    ],
    "interviewAnswer": "A covered query is a query that is satisfied 100% from the index without fetching any documents from disk or the WiredTiger cache. Conditions: 1) All fields in the query filter must be part of the index; 2) All fields in the projection must be part of the index; 3) The _id field must be explicitly excluded ({ _id: 0 }) unless _id is in the index; 4) No indexed field can be an array (multikey index).",
    "answer": "In explain output, a covered query shows `totalDocsExamined: 0` and stage `PROJECTION_COVERED`. Because it reads strictly from the index B-tree in RAM, it delivers sub-millisecond throughput.",
    "explanation": "In explain output, a covered query shows `totalDocsExamined: 0` and stage `PROJECTION_COVERED`. Because it reads strictly from the index B-tree in RAM, it delivers sub-millisecond throughput.",
    "importantPoints": [
      "totalDocsExamined is 0.",
      "Index satisfies both query filter and projection.",
      "Must explicitly exclude _id: 0 if not indexed.",
      "Cannot be covered by a multikey (array) index."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Covered Queries: Zero Document I/O Operations",
        "code": "// Performance optimization: Covered Queries: Zero Document I/O Operations\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Database Profiling Levels (setProfilingLevel) and slowms Thresholds",
    "question": "How do you configure and analyze the MongoDB Database Profiler to diagnose slow queries?",
    "difficulty": "easy",
    "questionType": "Diagnostics",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "profiler",
      "slowms",
      "system.profile"
    ],
    "interviewAnswer": "Configure using db.setProfilingLevel(level, options). Level 0 = off, Level 1 = logs operations slower than slowms (e.g. { slowms: 50 }), Level 2 = logs all operations. Slow operations are recorded in the system.profile capped collection, where they can be queried, sorted by millis, and inspected for missing indexes.",
    "answer": "In production, use Level 1 with a reasonable slowms (e.g. 100ms) or sampleRate to prevent profiler write overhead from impacting database throughput.",
    "explanation": "In production, use Level 1 with a reasonable slowms (e.g. 100ms) or sampleRate to prevent profiler write overhead from impacting database throughput.",
    "importantPoints": [
      "Level 1 logs operations exceeding slowms threshold.",
      "Records stored in capped system.profile collection.",
      "Incurs minimal overhead when configured with realistic thresholds."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Database Profiling Levels (setProfilingLevel) and slowms Thresholds",
        "code": "// Performance optimization: Database Profiling Levels (setProfilingLevel) and slowms Thresholds\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "mongostat and mongotop: Real-Time Cluster Health Monitoring",
    "question": "How do mongostat and mongotop provide real-time diagnostic visibility into cluster performance?",
    "difficulty": "medium",
    "questionType": "Tools",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "mongostat",
      "mongotop",
      "cli",
      "monitoring"
    ],
    "interviewAnswer": "mongostat provides a high-level real-time summary of operations per second (insert, query, update, delete), dirty cache %, flushed pages, connection counts, and replica lag. mongotop tracks the time the database spends reading and writing per collection, instantly identifying which specific collection is causing I/O bottlenecks.",
    "answer": "When a database freezes: run `mongostat 1` to see if operations are queuing or if dirty cache is at 20%, and run `mongotop 1` to find which collection is consuming 100% of read/write lock time.",
    "explanation": "When a database freezes: run `mongostat 1` to see if operations are queuing or if dirty cache is at 20%, and run `mongotop 1` to find which collection is consuming 100% of read/write lock time.",
    "importantPoints": [
      "mongostat reports ops/sec, cache dirty %, connections, and network bytes.",
      "mongotop breaks down read and write time by collection.",
      "Standard first-line CLI tools for live triage."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "mongostat and mongotop: Real-Time Cluster Health Monitoring",
        "code": "// Performance optimization: mongostat and mongotop: Real-Time Cluster Health Monitoring\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Bulk Write Operations: initializeOrderedBulkOp vs initializeUnorderedBulkOp",
    "question": "What is the performance difference between Ordered and Unordered bulk write operations?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "bulkWrite",
      "ordered",
      "unordered",
      "throughput"
    ],
    "interviewAnswer": "Ordered bulk writes execute sequentially; if an error occurs on operation 5, execution halts and remaining operations are not executed. Unordered bulk writes execute in arbitrary order, can be parallelized by MongoDB across shards and worker threads, and continue executing even if individual operations fail, achieving much higher throughput.",
    "answer": "Always use `{ ordered: false }` for massive ingestion pipelines or ETL imports to maximize write throughput across replica sets and shards.",
    "explanation": "Always use `{ ordered: false }` for massive ingestion pipelines or ETL imports to maximize write throughput across replica sets and shards.",
    "importantPoints": [
      "Ordered halts on the first error.",
      "Unordered continues processing remaining operations.",
      "Unordered allows parallel execution, maximizing throughput."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Bulk Write Operations: initializeOrderedBulkOp vs initializeUnorderedBulkOp",
        "code": "// Performance optimization: Bulk Write Operations: initializeOrderedBulkOp vs initializeUnorderedBulkOp\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Connection Pool Sizing and maxPoolSize Tuning",
    "question": "How does misconfiguring maxPoolSize cause connection storms and thread contention?",
    "difficulty": "medium",
    "questionType": "Connection Management",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "connection-pooling",
      "maxPoolSize",
      "concurrency"
    ],
    "interviewAnswer": "Default maxPoolSize is 100 per driver instance. In serverless or microservice environments with 100 container replicas, 100 * 100 = 10,000 open connections. Each connection consumes 1MB RAM and a thread on mongod. Beyond server CPU core capacity, excessive connections cause thread context switching and connection storms. Set maxPoolSize to 10-20 per process in containerized environments.",
    "answer": "Use connection pooling proxies (like MongoDB Atlas Serverless or proper client lifecycle reuse) to prevent connection spikes from crashing the database.",
    "explanation": "Use connection pooling proxies (like MongoDB Atlas Serverless or proper client lifecycle reuse) to prevent connection spikes from crashing the database.",
    "importantPoints": [
      "Each open connection consumes server RAM and thread resources.",
      "Too many connections cause CPU context switching bottlenecks.",
      "Scale pool size based on CPU cores, not arbitrary high numbers."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Connection Pool Sizing and maxPoolSize Tuning",
        "code": "// Performance optimization: Connection Pool Sizing and maxPoolSize Tuning\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Index Key Length Limits and Overhead",
    "question": "How does indexing large string fields impact B-tree memory footprint and write latency?",
    "difficulty": "medium",
    "questionType": "Indexing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "index-size",
      "btree",
      "memory-footprint"
    ],
    "interviewAnswer": "Indexing large strings (e.g. 500-character URLs or descriptions) balloons the B-tree index size, causing indexes to outgrow server RAM. Every write, update, and delete must update the large B-tree nodes, causing write amplification and cache eviction. Instead, index a cryptographic hash (SHA-256) of the long string, or use a prefix/hashed index.",
    "answer": "Hashing long strings to 32 bytes ensures index entries remain tiny, keeping the index entirely in RAM.",
    "explanation": "Hashing long strings to 32 bytes ensures index entries remain tiny, keeping the index entirely in RAM.",
    "importantPoints": [
      "Large index keys waste WiredTiger RAM cache.",
      "Slows down insert and update throughput.",
      "Use hashed values or prefixes for long strings."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Index Key Length Limits and Overhead",
        "code": "// Performance optimization: Index Key Length Limits and Overhead\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Impact of In-Memory Sorting on Query Latency",
    "question": "Why does an in-memory sort degrade query performance, and what is the 32MB sort limit in find()?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "in-memory-sort",
      "32mb-limit",
      "sort-index"
    ],
    "interviewAnswer": "Without an index matching the sort criteria, MongoDB must load all candidate documents into RAM and run an in-memory sort algorithm. Standard find() queries have a hard 32MB limit for in-memory sorts; if candidate documents exceed 32MB, MongoDB aborts the query with an error. Indexing the sort field enables streaming sorted results directly from the B-tree.",
    "answer": "An indexed sort streams results in O(1) time without consuming extra memory. An unindexed sort consumes CPU, buffers documents, and crashes if the dataset exceeds 32MB.",
    "explanation": "An indexed sort streams results in O(1) time without consuming extra memory. An unindexed sort consumes CPU, buffers documents, and crashes if the dataset exceeds 32MB.",
    "importantPoints": [
      "find() aborts if in-memory sort exceeds 32MB.",
      "In-memory sort causes high CPU and latency.",
      "Index the sort field to stream pre-sorted B-tree results."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Impact of In-Memory Sorting on Query Latency",
        "code": "// Performance optimization: Impact of In-Memory Sorting on Query Latency\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "WiredTiger Write Lock Granularity (Document-Level Locking)",
    "question": "How does WiredTiger document-level concurrency differ from legacy MMAPv1 database/collection locks?",
    "difficulty": "easy",
    "questionType": "Storage Engine",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "locking",
      "wiredtiger",
      "document-level-locking"
    ],
    "interviewAnswer": "Legacy MMAPv1 used coarse database-level or collection-level locks, meaning a single write locked the entire collection against concurrent reads and writes. WiredTiger implements true Document-Level Concurrency Control: two concurrent writes can modify different documents in the same collection simultaneously without any lock contention.",
    "answer": "Document-level locking enables modern MongoDB instances to scale write throughput across dozens of CPU cores on multi-core servers.",
    "explanation": "Document-level locking enables modern MongoDB instances to scale write throughput across dozens of CPU cores on multi-core servers.",
    "importantPoints": [
      "WiredTiger locks only the individual document being modified.",
      "Concurrent writes to different documents execute in parallel.",
      "Massive concurrency improvement over legacy collection locks."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "WiredTiger Write Lock Granularity (Document-Level Locking)",
        "code": "// Performance optimization: WiredTiger Write Lock Granularity (Document-Level Locking)\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Read Preference Optimization: primary vs secondaryPreferred vs nearest",
    "question": "How do Read Preferences route read traffic, and what are the staleness risks of reading from secondaries?",
    "difficulty": "medium",
    "questionType": "Replication",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "read-preference",
      "secondaries",
      "eventual-consistency"
    ],
    "interviewAnswer": "1) primary: Default, reads strictly from primary, guaranteed 100% up-to-date; 2) secondary: Offloads reads to secondaries, but risks reading stale data due to replication lag; 3) secondaryPreferred: Reads from secondary if available, primary as fallback; 4) nearest: Reads from the replica node with lowest network latency (ideal for geographically distributed clusters).",
    "answer": "Offloading analytical or reporting queries to secondaries protects primary write throughput, but applications must accept eventual consistency.",
    "explanation": "Offloading analytical or reporting queries to secondaries protects primary write throughput, but applications must accept eventual consistency.",
    "importantPoints": [
      "primary guarantees immediate consistency.",
      "secondary reads risk replication lag staleness.",
      "nearest minimizes network latency in multi-region clusters."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Read Preference Optimization: primary vs secondaryPreferred vs nearest",
        "code": "// Performance optimization: Read Preference Optimization: primary vs secondaryPreferred vs nearest\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Write Concern Latency: w: 1 vs w: majority vs j: true",
    "question": "How does tuning Write Concern balance write latency against durability guarantees?",
    "difficulty": "medium",
    "questionType": "Durability",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "write-concern",
      "durability",
      "latency",
      "journaling"
    ],
    "interviewAnswer": "w: 1 acknowledges once written to the primary's memory (fastest, ~1ms, but risks rollback on failover); w: \"majority\" acknowledges once written to a majority of replica nodes (moderate, ~10-20ms, prevents rollbacks); j: true acknowledges only after written to the on-disk journal (safest against power loss, but adds disk I/O wait).",
    "answer": "In high-throughput logging, `w: 1` yields maximum throughput. In financial systems, `w: \"majority\"` is non-negotiable.",
    "explanation": "In high-throughput logging, `w: 1` yields maximum throughput. In financial systems, `w: \"majority\"` is non-negotiable.",
    "importantPoints": [
      "w: 1 is fastest but vulnerable to failover rollback.",
      "w: \"majority\" prevents failover data loss.",
      "j: true waits for disk journal sync."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Write Concern Latency: w: 1 vs w: majority vs j: true",
        "code": "// Performance optimization: Write Concern Latency: w: 1 vs w: majority vs j: true\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "The Impact of Index Selectivity on Query Execution Time",
    "question": "Why is an index on a boolean field (e.g. { isActive: 1 }) almost always ineffective?",
    "difficulty": "easy",
    "questionType": "Indexing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "selectivity",
      "cardinality",
      "boolean-index"
    ],
    "interviewAnswer": "A boolean field has only two possible values (true/false), giving it extremely low selectivity. Scanning the index still requires inspecting ~50% of the entire collection. The query planner will often determine that a full collection scan (COLLSCAN) is faster than traversing millions of non-selective index pointers and fetching docs from disk.",
    "answer": "Indexes should be built on high-cardinality fields (IDs, emails, timestamps). If you must index a boolean, combine it into a compound index or use a partial index.",
    "explanation": "Indexes should be built on high-cardinality fields (IDs, emails, timestamps). If you must index a boolean, combine it into a compound index or use a partial index.",
    "importantPoints": [
      "Low selectivity indexes examine massive percentages of the B-tree.",
      "Query planner often abandons low-selectivity indexes for COLLSCAN.",
      "Use partial indexes instead of indexing low-cardinality booleans."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The Impact of Index Selectivity on Query Execution Time",
        "code": "// Performance optimization: The Impact of Index Selectivity on Query Execution Time\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Compaction and Defragmentation in WiredTiger (compact Command)",
    "question": "When and how should the compact command be run to reclaim disk space after large deletions?",
    "difficulty": "hard",
    "questionType": "Operations",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "compact",
      "defragmentation",
      "disk-space",
      "storage"
    ],
    "interviewAnswer": "When millions of documents are deleted from a collection, WiredTiger does not automatically shrink the file on the OS disk; it marks the space as reusable internally. The compact command rewrites the collection and its indexes to defragment storage and return free disk space to the OS. It blocks writes on the collection during execution, so it should be run on secondaries in rolling fashion.",
    "answer": "Check `db.collection.stats().freeStorage`. If freeStorage is hundreds of gigabytes, running `compact` will reclaim that disk space.",
    "explanation": "Check `db.collection.stats().freeStorage`. If freeStorage is hundreds of gigabytes, running `compact` will reclaim that disk space.",
    "importantPoints": [
      "Deletes do not automatically shrink disk files on the OS.",
      "compact defragments storage and reclaims disk space.",
      "Blocks writes; execute in rolling fashion on replica set secondaries."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Compaction and Defragmentation in WiredTiger (compact Command)",
        "code": "// Performance optimization: Compaction and Defragmentation in WiredTiger (compact Command)\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Diagnosing Replication Lag on Secondaries",
    "question": "What causes replication lag on replica set secondaries, and how do you diagnose it?",
    "difficulty": "hard",
    "questionType": "Replication",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "replication-lag",
      "rs.status",
      "oplog",
      "secondaries"
    ],
    "interviewAnswer": "Replication lag occurs when secondaries cannot apply oplog entries as fast as the primary produces them. Causes include: 1) Secondary server hardware has weaker CPU/disk I/O than primary; 2) Long-running unindexed read queries on secondaries blocking write threads; 3) Index builds occurring concurrently; 4) Network saturation between data centers. Diagnose using rs.status() or rs.printSecondaryReplicationInfo().",
    "answer": "Examine `optimeDate` in `rs.status()`. If a secondary lags beyond the primary's oplog window, it falls off the oplog and must be resynced from scratch (initial sync).",
    "explanation": "Examine `optimeDate` in `rs.status()`. If a secondary lags beyond the primary's oplog window, it falls off the oplog and must be resynced from scratch (initial sync).",
    "importantPoints": [
      "Check lag with rs.printSecondaryReplicationInfo().",
      "Caused by slow disks, unindexed reads on secondaries, or network saturation.",
      "Severe lag risks falling off the oplog window."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Diagnosing Replication Lag on Secondaries",
        "code": "// Performance optimization: Diagnosing Replication Lag on Secondaries\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Oplog Sizing: Sizing the Replication Buffer Appropriately",
    "question": "How do you determine the appropriate size for the replica set oplog (oplogSizeMB)?",
    "difficulty": "medium",
    "questionType": "Operations",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "oplog",
      "oplogSizeMB",
      "resync",
      "replication"
    ],
    "interviewAnswer": "The oplog size must be large enough to hold at least 24 to 72 hours of write operations during peak business days. If a secondary goes offline for 12 hours for maintenance, the primary's oplog must retain 12+ hours of history; otherwise, the secondary cannot catch up and requires a costly initial sync. Check with rs.printReplicationInfo().",
    "answer": "In modern MongoDB, oplog resize is dynamic: `db.adminCommand({ replSetResizeOplog: 1, size: 50000 })` modifies the oplog size without restarting the server.",
    "explanation": "In modern MongoDB, oplog resize is dynamic: `db.adminCommand({ replSetResizeOplog: 1, size: 50000 })` modifies the oplog size without restarting the server.",
    "importantPoints": [
      "Oplog must span maintenance windows (24-72 hours minimum).",
      "Check oplog window duration with rs.printReplicationInfo().",
      "Can be resized dynamically without downtime since MongoDB 3.6."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Oplog Sizing: Sizing the Replication Buffer Appropriately",
        "code": "// Performance optimization: Oplog Sizing: Sizing the Replication Buffer Appropriately\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Detecting Index Bloat and Unused Indexes",
    "question": "How do you identify and safely remove unused indexes using $indexStats?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "indexStats",
      "unused-indexes",
      "index-bloat"
    ],
    "interviewAnswer": "Run db.collection.aggregate([{ $indexStats: {} }]). Inspect the accesses.ops counter for each index. If an index has ops: 0 after weeks of production traffic, it is unused. Before dropping it, hide it using db.collection.hideIndex(\"index_name\") to verify no queries degrade; if performance remains stable, permanently drop it with dropIndex().",
    "answer": "Unused indexes consume RAM in the WiredTiger cache and slow down every insert and update. Auditing and dropping them is the easiest write performance win.",
    "explanation": "Unused indexes consume RAM in the WiredTiger cache and slow down every insert and update. Auditing and dropping them is the easiest write performance win.",
    "importantPoints": [
      "$indexStats shows how many times each index was queried.",
      "Hide index before dropping to test impact safely.",
      "Dropping unused indexes recovers RAM and accelerates writes."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Detecting Index Bloat and Unused Indexes",
        "code": "// Performance optimization: Detecting Index Bloat and Unused Indexes\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Projection Optimization: Impact of Excluding Large Payload Fields",
    "question": "How does excluding large fields in find() projections reduce network and CPU bottlenecks?",
    "difficulty": "easy",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "projection",
      "bandwidth",
      "deserialization"
    ],
    "interviewAnswer": "By default, find() fetches the entire document. If documents contain large arrays, PDF base64 strings, or rich text (e.g. 500KB each), fetching 100 documents transfers 50MB over the network and forces Node.js to deserialize 50MB of BSON. Projecting only needed fields ({ title: 1, price: 1 }) reduces network payload to 10KB, reducing API latency by 90%.",
    "answer": "Always project only the fields required for the UI view. This also allows the query optimizer to utilize projection pushdown in the storage engine.",
    "explanation": "Always project only the fields required for the UI view. This also allows the query optimizer to utilize projection pushdown in the storage engine.",
    "importantPoints": [
      "Reduces network wire transfer and serialization CPU.",
      "Keeps Node.js garbage collection overhead low.",
      "Enables storage engine projection pushdowns."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Projection Optimization: Impact of Excluding Large Payload Fields",
        "code": "// Performance optimization: Projection Optimization: Impact of Excluding Large Payload Fields\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Preventing Lock Contention on Shard Metadata with mongos",
    "question": "Why should applications route queries through mongos routers rather than connecting directly to shard replica sets?",
    "difficulty": "medium",
    "questionType": "Sharding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "mongos",
      "sharding",
      "routing",
      "architecture"
    ],
    "interviewAnswer": "mongos acts as the distributed query router. It caches cluster chunk distribution metadata from config servers. It parses incoming queries, inspects the shard key, and routes the query directly to the appropriate shard. Bypassing mongos risks reading orphaned chunks, corrupting sharded data, and violating transaction boundaries.",
    "answer": "Applications must always connect to a pool of `mongos` routers, balancing connections evenly across them.",
    "explanation": "Applications must always connect to a pool of `mongos` routers, balancing connections evenly across them.",
    "importantPoints": [
      "mongos routes queries based on cached chunk metadata.",
      "Prevents reading orphaned chunks moving between shards.",
      "Enables transparent horizontal scaling across shards."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Preventing Lock Contention on Shard Metadata with mongos",
        "code": "// Performance optimization: Preventing Lock Contention on Shard Metadata with mongos\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Using Hashed Indexes for Sharding Key Uniformity",
    "question": "How do Hashed Shard Keys prevent insert hot spotting compared to range-based shard keys?",
    "difficulty": "medium",
    "questionType": "Sharding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "sharding",
      "hashed-index",
      "hot-spotting",
      "load-balancing"
    ],
    "interviewAnswer": "If you shard on an auto-incrementing integer or timestamp using a range-based index, every new insert has a higher key than previous ones, sending 100% of inserts to the single highest shard (hot shard). A Hashed Shard Key hashes field values with MD5 before placement, distributing inserts evenly across all shards in the cluster.",
    "answer": "Trade-off: Hashed shard keys distribute writes perfectly, but scatter range queries across all shards. Use hashed sharding for random write-heavy collections.",
    "explanation": "Trade-off: Hashed shard keys distribute writes perfectly, but scatter range queries across all shards. Use hashed sharding for random write-heavy collections.",
    "importantPoints": [
      "Hashes keys to distribute writes evenly across all shards.",
      "Prevents single-shard bottlenecks on monotonic fields.",
      "Makes range queries scatter-gather."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Using Hashed Indexes for Sharding Key Uniformity",
        "code": "// Performance optimization: Using Hashed Indexes for Sharding Key Uniformity\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Optimizing $regex Queries: Left-Anchored vs Mid-String Scans",
    "question": "Why does /^prefix/ execute with index speed while /.*middle.*/ triggers a full index or collection scan?",
    "difficulty": "medium",
    "questionType": "Query Operators",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "regex",
      "b-tree",
      "left-anchored",
      "ixscan"
    ],
    "interviewAnswer": "B-tree indexes store string keys in alphabetical order. A left-anchored regex (/^john/) allows the B-tree to seek directly to the \"john\" prefix range (IXSCAN) in O(log N) time. A mid-string or trailing regex (/.*john.*/) could match any key anywhere in the index, forcing MongoDB to inspect every single key in the entire index.",
    "answer": "Never use unanchored wildcards on large collections. For arbitrary substring or fuzzy searching, use MongoDB Text Search or Atlas Search (Lucene inverted indexes).",
    "explanation": "Never use unanchored wildcards on large collections. For arbitrary substring or fuzzy searching, use MongoDB Text Search or Atlas Search (Lucene inverted indexes).",
    "importantPoints": [
      "Left-anchored /^prefix/ uses B-tree range scans.",
      "Mid-string regex scans every key in the index.",
      "Atlas Search is required for performant substring searching."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Optimizing $regex Queries: Left-Anchored vs Mid-String Scans",
        "code": "// Performance optimization: Optimizing $regex Queries: Left-Anchored vs Mid-String Scans\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Write Concern Acknowledgment vs Unacknowledged Writes (w: 0)",
    "question": "What are Unacknowledged Writes (w: 0), and why are they almost universally banned in modern systems?",
    "difficulty": "easy",
    "questionType": "Durability",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "writeConcern",
      "fire-and-forget",
      "data-loss"
    ],
    "interviewAnswer": "An unacknowledged write ({ w: 0 }) sends the write command over the socket and returns immediately without waiting for the server to acknowledge receipt or report errors (fire-and-forget). If the document violates a unique index, exceeds 16MB, or the server crashes, the client never receives an error. It trades complete data integrity for negligible network savings.",
    "answer": "In modern networks, TCP latency is low enough that `w: 1` or `w: \"majority\"` is always required. Never use `w: 0` in production.",
    "explanation": "In modern networks, TCP latency is low enough that `w: 1` or `w: \"majority\"` is always required. Never use `w: 0` in production.",
    "importantPoints": [
      "Fire-and-forget: client never receives errors.",
      "Fails silently on duplicate key or schema validation violations.",
      "Banned in financial and modern web architectures."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Write Concern Acknowledgment vs Unacknowledged Writes (w: 0)",
        "code": "// Performance optimization: Write Concern Acknowledgment vs Unacknowledged Writes (w: 0)\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Optimizing Sorting with Dual-Field Compound Indexes",
    "question": "How do index key directions (-1 vs 1) affect compound index sorting performance?",
    "difficulty": "medium",
    "questionType": "Indexing",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "compound-index",
      "sort-direction",
      "ascending",
      "descending"
    ],
    "interviewAnswer": "In a single-field index, MongoDB can traverse the index forwards or backwards with equal performance. In a multi-field compound index (e.g. { age: 1, score: -1 }), the index can only support sorts where the directions match the index or are the exact inverse ({ age: -1, score: 1 }). Attempting to sort by { age: 1, score: 1 } CANNOT use the index sort and triggers a slow in-memory sort.",
    "answer": "Always align compound index key directions with the exact sort combinations required by your application endpoints.",
    "explanation": "Always align compound index key directions with the exact sort combinations required by your application endpoints.",
    "importantPoints": [
      "Single-field indexes support ascending and descending equally.",
      "Compound indexes only support the indexed direction and its exact inverse.",
      "Mismatched directions trigger in-memory sorts."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Optimizing Sorting with Dual-Field Compound Indexes",
        "code": "// Performance optimization: Optimizing Sorting with Dual-Field Compound Indexes\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Detecting Memory Swapping and Virtual Memory Thrashing",
    "question": "What OS metrics indicate that MongoDB is thrashing due to insufficient physical RAM?",
    "difficulty": "hard",
    "questionType": "Infrastructure",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "swap",
      "vmstat",
      "page-faults",
      "memory-thrashing"
    ],
    "interviewAnswer": "Run vmstat 1 on the Linux host. Look at the si (swap in) and so (swap out) columns, and major page faults in mongostat. If si/so values are consistently non-zero, the OS kernel is swapping MongoDB memory pages to disk, causing latency to spike by 1,000x. The solution is disabling Linux swap or increasing physical RAM.",
    "answer": "MongoDB assumes it owns memory. Swap thrashing destroys WiredTiger cache eviction. Set `vm.swappiness = 1` in `/etc/sysctl.conf` to prevent the kernel from swapping aggressively.",
    "explanation": "MongoDB assumes it owns memory. Swap thrashing destroys WiredTiger cache eviction. Set `vm.swappiness = 1` in `/etc/sysctl.conf` to prevent the kernel from swapping aggressively.",
    "importantPoints": [
      "Non-zero si/so in vmstat indicates active swap thrashing.",
      "Swapping causes 1,000x latency degradation.",
      "Set vm.swappiness = 1 on MongoDB Linux hosts."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Detecting Memory Swapping and Virtual Memory Thrashing",
        "code": "// Performance optimization: Detecting Memory Swapping and Virtual Memory Thrashing\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Benchmarking and Load Testing MongoDB with YCSB",
    "question": "How do you benchmark MongoDB throughput and latency before deploying to production using YCSB?",
    "difficulty": "medium",
    "questionType": "Benchmarking",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "benchmarking",
      "ycsb",
      "load-testing"
    ],
    "interviewAnswer": "Yahoo! Cloud Serving Benchmark (YCSB) is the industry standard for evaluating database throughput and latency under various workloads (Workload A: 50% read / 50% write; Workload B: 95% read / 5% write). It identifies database saturation points, IOPS limits, and connection pool thresholds under simulated realistic traffic.",
    "answer": "Run YCSB against staging clusters with identical hardware and dataset sizes to baseline expected 99th percentile latency (p99).",
    "explanation": "Run YCSB against staging clusters with identical hardware and dataset sizes to baseline expected 99th percentile latency (p99).",
    "importantPoints": [
      "Industry standard tool for NoSQL database benchmarking.",
      "Tests latency percentiles (p50, p95, p99) under simulated concurrency.",
      "Validates disk IOPS and network throughput limits before go-live."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Benchmarking and Load Testing MongoDB with YCSB",
        "code": "// Performance optimization: Benchmarking and Load Testing MongoDB with YCSB\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Optimizing Document Updates with $inc and $mul vs Replacement",
    "question": "Why are atomic mathematical update operators far more performant than full document replacement?",
    "difficulty": "easy",
    "questionType": "CRUD",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "inc",
      "atomic-operators",
      "bandwidth",
      "wiredtiger"
    ],
    "interviewAnswer": "Full document replacement requires transferring the entire document back and forth over the network and rewriting all fields in WiredTiger. Using $inc: { counter: 1 } sends a 10-byte instruction over the wire and modifies only the targeted numeric bytes in memory, minimizing network serialization, oplog entry size, and replication lag.",
    "answer": "Atomic field operators also prevent race conditions where two simultaneous full replacements overwrite each other's changes (lost update problem).",
    "explanation": "Atomic field operators also prevent race conditions where two simultaneous full replacements overwrite each other's changes (lost update problem).",
    "importantPoints": [
      "Transfers minimal bytes across the network.",
      "Generates tiny oplog entries, reducing secondary lag.",
      "Modifies only targeted field bytes in the WiredTiger cache."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Optimizing Document Updates with $inc and $mul vs Replacement",
        "code": "// Performance optimization: Optimizing Document Updates with $inc and $mul vs Replacement\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "The Impact of Index Prefix Compression in WiredTiger",
    "question": "How does WiredTiger index prefix compression save RAM and disk storage?",
    "difficulty": "hard",
    "questionType": "Storage Engine",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "wiredtiger",
      "prefix-compression",
      "storage-savings"
    ],
    "interviewAnswer": "WiredTiger compresses repeated prefixes across sequential B-tree keys (e.g. if adjacent keys are \"order_2026_01\" and \"order_2026_02\", it stores only the distinct suffix). Prefix compression reduces index RAM and disk footprint by 50-70%, allowing significantly more index keys to fit inside server memory.",
    "answer": "Prefix compression is enabled by default for all collection indexes in WiredTiger, maximizing working set density.",
    "explanation": "Prefix compression is enabled by default for all collection indexes in WiredTiger, maximizing working set density.",
    "importantPoints": [
      "Compresses common prefixes across adjacent B-tree keys.",
      "Reduces index memory and disk footprint by up to 70%.",
      "Enabled by default in WiredTiger."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The Impact of Index Prefix Compression in WiredTiger",
        "code": "// Performance optimization: The Impact of Index Prefix Compression in WiredTiger\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Optimizing MongoDB on NVMe SSDs: Read-Ahead Settings",
    "question": "Why should the OS block device read-ahead setting be reduced to 0 or 16 for MongoDB on SSDs?",
    "difficulty": "hard",
    "questionType": "Infrastructure",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "read-ahead",
      "nvme",
      "ssd",
      "kernel-tuning"
    ],
    "interviewAnswer": "Linux default read-ahead (128-256 blocks) is optimized for spinning hard drives by reading ahead sequential blocks. On random access SSDs and NVMe storage, reading ahead blocks loads unneeded data into OS RAM, wasting I/O bandwidth and evicting useful pages. Setting blockdev --setra 0 or 16 tells the OS to read only the exact blocks requested by WiredTiger.",
    "answer": "Official MongoDB production deployment guides mandate setting read-ahead to 0 on SSD/NVMe volumes: `sudo blockdev --setra 0 /dev/nvme0n1`.",
    "explanation": "Official MongoDB production deployment guides mandate setting read-ahead to 0 on SSD/NVMe volumes: `sudo blockdev --setra 0 /dev/nvme0n1`.",
    "importantPoints": [
      "Default OS read-ahead loads unnecessary blocks on SSDs.",
      "Wastes I/O bandwidth and pollutes the OS page cache.",
      "Set read-ahead to 0 for random-read workloads on NVMe SSDs."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Optimizing MongoDB on NVMe SSDs: Read-Ahead Settings",
        "code": "// Performance optimization: Optimizing MongoDB on NVMe SSDs: Read-Ahead Settings\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Preventing Query Plan Cache Thrashing with Stable Query Shapes",
    "question": "How do dynamic query shapes or fluctuating query parameters degrade the Plan Cache?",
    "difficulty": "hard",
    "questionType": "Query Optimizer",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "plan-cache",
      "query-shape",
      "optimizer"
    ],
    "interviewAnswer": "MongoDB caches the winning query plan for each distinct \"query shape\" (combination of query fields, sort, and projection). If application code dynamically generates hundreds of slightly different query shapes (e.g. varying field orders or dynamic combinations of $or conditions), MongoDB must constantly run trial query runs to re-evaluate plans, thrashing the Plan Cache and spiking CPU.",
    "answer": "Standardize query filters and parameter order in application query builders to maintain high Plan Cache hit rates.",
    "explanation": "Standardize query filters and parameter order in application query builders to maintain high Plan Cache hit rates.",
    "importantPoints": [
      "Query planner caches winning plans per query shape.",
      "Dynamic query shapes force frequent optimizer trial runs.",
      "Standardize query builder output to keep plan cache hits high."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Preventing Query Plan Cache Thrashing with Stable Query Shapes",
        "code": "// Performance optimization: Preventing Query Plan Cache Thrashing with Stable Query Shapes\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Impact of Replica Set Heartbeats on Network Latency",
    "question": "How do replica set heartbeat intervals and election timeouts affect failover speed?",
    "difficulty": "medium",
    "questionType": "Replication",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "heartbeats",
      "electionTimeoutMillis",
      "failover"
    ],
    "interviewAnswer": "Replica set members ping each other every 2 seconds via heartbeats. If a member does not respond within electionTimeoutMillis (default 10,000ms = 10s), the remaining secondaries call an election and promote a new primary within seconds. Reducing electionTimeoutMillis detects dead primaries faster, but risks false-alarm elections during brief network spikes.",
    "answer": "Default settings provide the ideal compromise: automatic recovery in under 12 seconds without spurious elections.",
    "explanation": "Default settings provide the ideal compromise: automatic recovery in under 12 seconds without spurious elections.",
    "importantPoints": [
      "Heartbeats occur every 2 seconds.",
      "Default election timeout is 10 seconds.",
      "Fast failover minimizes application downtime."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Impact of Replica Set Heartbeats on Network Latency",
        "code": "// Performance optimization: Impact of Replica Set Heartbeats on Network Latency\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Optimizing Aggregation with $limit Pushdown",
    "question": "How does placing $limit immediately after $sort prevent aggregation memory bloat?",
    "difficulty": "easy",
    "questionType": "Aggregation Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "limit-pushdown",
      "sort-limit",
      "heap"
    ],
    "interviewAnswer": "When $sort is immediately followed by $limit N, MongoDB coalesces them into a single bounded Top-N sort stage. It tracks only N elements in a min/max heap in memory as documents stream in, rather than sorting the entire collection in RAM. This prevents 100MB stage limit crashes and reduces execution time from seconds to milliseconds.",
    "answer": "Always position `$limit` as early in the pipeline as logically possible.",
    "explanation": "Always position `$limit` as early in the pipeline as logically possible.",
    "importantPoints": [
      "Coalesces $sort and $limit into a Top-N heap stage.",
      "Stores only N elements in memory.",
      "Prevents 100MB stage memory overflow."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Optimizing Aggregation with $limit Pushdown",
        "code": "// Performance optimization: Optimizing Aggregation with $limit Pushdown\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "performance",
    "title": "Summary: The 5 Golden Rules of MongoDB Performance Optimization",
    "question": "What are the 5 essential golden rules for maintaining high performance in production MongoDB deployments?",
    "difficulty": "medium",
    "questionType": "Summary",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "performance",
      "golden-rules",
      "best-practices",
      "architecture"
    ],
    "interviewAnswer": "1) Ensure the working set and all active indexes fit entirely in RAM; 2) Follow the ESR (Equality, Sort, Range) rule for compound indexes; 3) Design schemas for application access patterns and avoid unbounded arrays; 4) Use cursor-based range pagination instead of skip/limit for large collections; 5) Monitor explain(\"executionStats\") to ensure totalKeysExamined : nReturned ratio approaches 1:1 and eliminate COLLSCANs.",
    "answer": "Adhering to these five principles guarantees sub-5ms read latencies, linear write scalability, and maximum hardware efficiency across any scale of MongoDB deployment.",
    "explanation": "Adhering to these five principles guarantees sub-5ms read latencies, linear write scalability, and maximum hardware efficiency across any scale of MongoDB deployment.",
    "importantPoints": [
      "Working set in RAM is the #1 performance factor.",
      "Follow ESR rule for compound indexes.",
      "Avoid unbounded arrays and 16MB document bloat.",
      "Use cursor pagination for deep datasets.",
      "Keep totalKeysExamined : nReturned ratio close to 1."
    ],
    "commonMistakes": [
      "Relying on full collection scans or unindexed sorts."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Summary: The 5 Golden Rules of MongoDB Performance Optimization",
        "code": "// Performance optimization: Summary: The 5 Golden Rules of MongoDB Performance Optimization\ndb.collection.find().explain(\"executionStats\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
