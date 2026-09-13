import { SeedQuestion } from '../types';

export const indexesQuestions: SeedQuestion[] = [
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Scenario: Index Exists But Database Performs Full Table Scan",
    "question": "An index exists but the database still performs a full table scan. Why could this happen?",
    "difficulty": "medium",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "full-table-scan",
      "optimizer",
      "query-plan",
      "scenario"
    ],
    "interviewAnswer": "The database performs a full table scan despite an index when: 1) Low selectivity (e.g. searching a value that matches 40%+ of rows where sequential I/O is cheaper than random lookups); 2) The column is wrapped in a function (e.g. WHERE UPPER(col) = 'X'); 3) Implicit type conversion prevents index use; 4) Leading wildcard in LIKE ('%search'); 5) Outdated optimizer statistics; 6) The table is tiny and fits in a single page.",
    "answer": "A query optimizer chooses an execution plan based on estimated I/O cost, not merely index presence. Key causes for skipping an index: 1) Low selectivity: If the query matches a high percentage of table rows (typically > 15-25%), sequential multi-block reads during a table scan are cheaper than millions of random single-block index-to-table lookups. 2) Non-sargable expressions: Wrapping the column in an expression (`WHERE YEAR(created_at) = 2026`) invalidates standard B-Trees. 3) Implicit type coercion: Comparing a VARCHAR column against an integer literal (`WHERE phone = 123456`) causes the engine to cast the column, preventing index seek. 4) Leading wildcard: `LIKE '%test'` cannot leverage B-Tree order. 5) Stale statistics: Outdated catalog histograms mislead the optimizer regarding row distribution. 6) Trivial table size: If a table has only 50 rows, reading the entire page is faster than traversing an index tree.",
    "explanation": "Understanding the optimizer cost model is paramount. When an index lookup requires fetching non-covered columns from table heap pages, each row match incurs a random I/O seek. If too many rows match, the cost of random I/O exceeds the cost of a high-speed sequential scan.",
    "importantPoints": [
      "Low selectivity makes full table scans faster than random index lookups.",
      "Expressions and functions on indexed columns prevent index seek (non-sargable).",
      "Implicit type casting on the column invalidates the index.",
      "Leading wildcards (LIKE '%...') cannot use B-Tree root navigation.",
      "Stale statistics or tiny tables cause full table scans intentionally."
    ],
    "commonMistakes": [
      "Assuming that the existence of an index forces the database to use it.",
      "Wrapping indexed columns in functions like DATE() or LOWER() and wondering why queries slow down.",
      "Passing numeric IDs into string columns, triggering silent implicit conversion."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Non-Sargable vs Sargable Index Queries",
        "code": "-- Index exists on created_at:\n-- NON-SARGABLE (Forces Full Table Scan):\nSELECT * FROM orders WHERE DATE(created_at) = '2026-01-01';\n\n-- SARGABLE (Uses Index Range Scan):\nSELECT * FROM orders \nWHERE created_at >= '2026-01-01 00:00:00' \n  AND created_at <  '2026-01-02 00:00:00';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Scenario: Database Contains Too Many Indexes (Write Penalty)",
    "question": "Your database contains too many indexes. Can indexes hurt performance? Explain the specific penalties.",
    "difficulty": "medium",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "write-penalty",
      "trade-offs",
      "performance",
      "scenario"
    ],
    "interviewAnswer": "Yes, excessive indexes significantly degrade performance. Every INSERT, UPDATE, and DELETE must maintain every relevant index, causing write amplification and page splits. Indexes also consume valuable RAM in the buffer pool, crowd out cached table pages, slow down database backups/restores, and can confuse the query optimizer into choosing suboptimal execution plans.",
    "answer": "While indexes accelerate read queries, every additional index imposes direct costs: 1) Write Amplification: Every INSERT requires inserting into the table plus every secondary index. An UPDATE to an indexed column requires updating both the old and new index leaf nodes. 2) Page Splits and I/O: Modifying B-Trees causes leaf page splits, leading to fragmentation and random disk I/O. 3) Memory Contention: Index pages compete with hot table pages for space in the database buffer pool / shared buffers. 4) Optimizer Degradation: Having too many overlapping indexes increases query compilation time and increases the risk of selecting a suboptimal index plan.",
    "explanation": "A healthy database balances read acceleration with write overhead. Redundant indexes (e.g. index on (A) when an index on (A, B) already exists) provide zero read benefit while doubling write maintenance costs.",
    "importantPoints": [
      "Write penalty: Every write operation must update multiple secondary indexes.",
      "Buffer pool pressure: Unused index pages displace cached data pages.",
      "Storage overhead and slower backups, restores, and replica catching.",
      "Duplicate and overlapping indexes should be audited and purged."
    ],
    "commonMistakes": [
      "Adding a new index for every single query without checking existing composite indexes.",
      "Creating an index on low-cardinality boolean or status flags that match 50% of the table.",
      "Never auditing or dropping unused indexes in production."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Detecting Unused Indexes in PostgreSQL",
        "code": "-- Identify secondary indexes with zero scans in PostgreSQL:\nSELECT \n  schemaname || '.' || relname AS table_name,\n  indexrelname AS index_name,\n  idx_scan AS number_of_scans,\n  pg_size_pretty(pg_relation_size(indexrelid)) AS index_size\nFROM pg_stat_user_indexes\nWHERE idx_scan = 0 \n  AND indexrelname NOT LIKE '%_pkey'\nORDER BY pg_relation_size(indexrelid) DESC;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Clustered vs Non-Clustered Indexes",
    "question": "What is the architectural difference between a Clustered Index and a Non-Clustered (Secondary) Index?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "clustered-index",
      "non-clustered-index",
      "b-tree",
      "internals"
    ],
    "interviewAnswer": "A Clustered Index dictates the physical storage order of table data on disk; its leaf nodes ARE the actual data rows. Therefore, a table can have only ONE clustered index. A Non-Clustered (secondary) index is a separate B-Tree structure whose leaf nodes contain index keys and row pointers (such as the clustered key or heap tuple ID) to locate the full row.",
    "answer": "In relational storage engines: 1) Clustered Index (Index-Organized Table): The physical rows are stored directly in the leaf pages of the B-Tree. Searching by clustered key requires zero secondary lookups. Because physical rows can only be ordered in one way, there can only be one clustered index per table. In MySQL InnoDB and SQL Server, the PRIMARY KEY creates the clustered index by default. 2) Non-Clustered Index: A separate B-Tree structure where leaf nodes store the indexed columns along with a \"bookmark\" or pointer back to the base row (e.g. the Clustered Key in MySQL InnoDB, or a Row ID/Heap TID in PostgreSQL/Heap tables). If a query needs non-indexed columns, the engine must perform a secondary lookup (bookmark lookup) to fetch the full row.",
    "explanation": "In PostgreSQL, all indexes are technically non-clustered because PostgreSQL stores tables as un-ordered Heaps, and leaf nodes contain Tuple IDs (TIDs = page number + offset). MySQL InnoDB strictly requires a clustered index; if no PRIMARY KEY is declared, InnoDB selects the first NOT NULL UNIQUE key or generates a hidden 6-byte row ID.",
    "importantPoints": [
      "Clustered: Physical data rows reside in the index leaf pages. Exactly 1 per table.",
      "Non-Clustered: Separate B-Tree containing index columns + pointers to base rows.",
      "Secondary index lookups require a secondary seek to the clustered index or heap.",
      "Covering indexes eliminate the secondary lookup penalty."
    ],
    "commonMistakes": [
      "Believing a table can have multiple clustered indexes.",
      "Assuming PostgreSQL clusters tables automatically like MySQL InnoDB.",
      "Choosing wide, random strings (like UUIDv4) as clustered keys, causing severe page splits on write."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Clustered Key in SQL Server and MySQL",
        "code": "-- SQL Server: Explicit clustered index\nCREATE TABLE sales_records (\n  sale_id BIGINT IDENTITY(1,1),\n  sale_date DATE NOT NULL,\n  amount DECIMAL(10,2),\n  -- Store rows physically sorted by sale_date rather than ID:\n  CONSTRAINT pk_sales PRIMARY KEY NONCLUSTERED (sale_id)\n);\nCREATE CLUSTERED INDEX idx_clustered_sales_date ON sales_records(sale_date);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "B-Tree Index Architecture and Traversal",
    "question": "Explain the internal architecture of a B-Tree (B+ Tree) index and how an equality or range lookup is traversed.",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "b-tree",
      "internals",
      "page-structure",
      "traversal"
    ],
    "interviewAnswer": "Relational databases use B+ Trees (balanced trees where all data resides at the leaf level). A B+ Tree consists of a Root page, Intermediate branch pages, and Leaf pages connected via a doubly linked list. Traversing an equality search starts at the root, follows child pointers down log(N) levels to the target leaf page, and binary searches the page. Range scans find the start key and then scan horizontally across linked leaf pages without revisiting upper levels.",
    "answer": "A B+ Tree index is a self-balancing search tree organized into fixed-size disk pages (typically 8KB or 16KB): 1) Root and Branch pages contain navigation keys and pointers to lower-level child pages. 2) Leaf pages contain the actual indexed keys, visibility metadata, and pointers to the table row (Heap TID or Clustered Key). All leaf pages reside at the exact same depth. 3) Leaf nodes are linked bidirectionally in a doubly linked list. 4) For an equality search (`WHERE id = 500`), traversal requires only 3 to 4 page reads (depth of tree), even for billions of rows. 5) For range queries (`WHERE id BETWEEN 500 AND 600`), the engine navigates to key 500 and then follows sibling leaf pointers horizontally, achieving blazing-fast sequential scanning.",
    "explanation": "Because B+ Trees have huge branching factors (fan-out of 100 to 1,000+ keys per page), the tree height rarely exceeds 3 or 4 levels. This ensures that any single row lookup requires at most 3 to 4 page reads, almost all of which are cached in RAM.",
    "importantPoints": [
      "Self-balancing: All leaf pages are at identical depth (height 3-4 for millions of rows).",
      "High fan-out minimizes tree depth and I/O seeks.",
      "Leaf pages are linked bidirectionally for ultra-fast range queries.",
      "Upper branch pages remain permanently pinned in buffer cache memory."
    ],
    "commonMistakes": [
      "Confusing standard binary search trees (height O(log2 N)) with B+ Trees (fan-out in hundreds).",
      "Thinking range queries re-traverse the tree root for every single matching value."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Inspecting Index Depth in PostgreSQL",
        "code": "-- Using PostgreSQL pgstattuple extension to inspect B-Tree depth:\nCREATE EXTENSION IF NOT EXISTS pgstattuple;\n\nSELECT \n  tree_level,        -- Height of the tree (e.g. 2 or 3)\n  root_blkno,        -- Root block number\n  leaf_pages,        -- Count of leaf pages\n  record_count       -- Total indexed entries\nFROM pg_stat_btree('idx_users_email');"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Composite Indexes and the Leftmost Prefix Rule",
    "question": "How do Composite (Multi-Column) Indexes work, and what is the \"Leftmost Prefix Rule\"?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "composite-index",
      "leftmost-prefix",
      "query-plan"
    ],
    "interviewAnswer": "A composite index orders data first by the first column, then by the second, and so on. The Leftmost Prefix Rule states that the index can only be used by queries that filter on the leading (leftmost) column(s). If an index is on (A, B, C), queries filtering on (A), (A, B), or (A, B, C) can use the index, but queries filtering on only (B) or (C) cannot perform an index range seek.",
    "answer": "Think of a composite index like a printed telephone directory sorted by (Last_Name, First_Name). You can easily find everyone named \"Smith\", or \"Smith, John\". However, if you are looking for someone named \"John\" without knowing their last name, the alphabetical ordering is useless; you would have to scan the entire book. Similarly, an index on `(status, created_at, user_id)` allows index seeks for queries filtering on `status`, or `status AND created_at`, but not `created_at` alone.",
    "explanation": "Column ordering in composite indexes is critical: 1) Equality columns should generally precede range columns. Once a range comparison (`<, >, BETWEEN`) is applied to a column in a composite index, the database cannot use subsequent index columns for index seeks.",
    "importantPoints": [
      "Index on (A, B, C) supports filters on (A), (A, B), and (A, B, C).",
      "Cannot perform an index seek on (B) or (C) alone without leading column A.",
      "Place equality filter columns before range filter columns in index definitions.",
      "Avoid creating separate single-column indexes when one composite index satisfies all queries."
    ],
    "commonMistakes": [
      "Creating an index on (A, B) and expecting it to optimize `WHERE B = 10`.",
      "Placing a range-filtered column (e.g., date) before an equality column in a composite index.",
      "Creating redundant single-column indexes on column A when an index on (A, B) already exists."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Composite Index Column Ordering Demonstration",
        "code": "-- Given index:\nCREATE INDEX idx_orders_status_date ON orders(status, order_date);\n\n-- USES INDEX SEEK (Leading column present):\nSELECT * FROM orders WHERE status = 'COMPLETED';\nSELECT * FROM orders WHERE status = 'COMPLETED' AND order_date >= '2026-01-01';\n\n-- CANNOT USE INDEX SEEK (Skips leading column; forces full scan or index skip scan):\nSELECT * FROM orders WHERE order_date >= '2026-01-01';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Covering Indexes and Index-Only Scans",
    "question": "What is a Covering Index, what is an Index-Only Scan, and how does the INCLUDE clause work?",
    "difficulty": "hard",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "covering-index",
      "index-only-scan",
      "include-clause"
    ],
    "interviewAnswer": "A covering index contains all columns requested by a query (both in WHERE, JOIN, and SELECT clauses). When an index covers a query, the engine performs an Index-Only Scan, satisfying the query entirely from the B-Tree leaf pages without touching the table heap, eliminating costly random I/O lookups.",
    "answer": "In a standard index seek, once matching rows are found in the B-Tree, the engine must perform a \"Bookmark Lookup\" or \"Heap Fetch\" to retrieve other columns projected in SELECT. A Covering Index includes all columns required by the query. Modern databases (PostgreSQL, SQL Server) support the `INCLUDE` clause (`CREATE INDEX idx ON t (a) INCLUDE (b, c);`). This appends columns `b` and `c` exclusively to the leaf pages of the index without sorting by them, keeping the tree shallow while covering the query.",
    "explanation": "Using `INCLUDE` avoids widening the non-leaf navigation pages of the B-Tree, preserving high fan-out and shallow tree height. In PostgreSQL, index-only scans still consult the table's Visibility Map to ensure rows are visible to the current transaction without reading heap pages.",
    "importantPoints": [
      "Index-Only Scan: Zero table heap fetches; satisfied entirely within index leaf pages.",
      "Eliminates random disk I/O from bookmark / heap lookups.",
      "INCLUDE clause adds payload columns to leaf pages without ordering by them.",
      "Keeps B-Tree root and branch pages compact and cache-efficient."
    ],
    "commonMistakes": [
      "Adding every column to the primary index key instead of using the INCLUDE clause.",
      "Forgetting that in PostgreSQL, un-vacuumed tables require heap checks during index-only scans due to stale visibility maps.",
      "Assuming SELECT * can benefit from index-only scans without indexing the entire table."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Creating a Covering Index with INCLUDE",
        "code": "-- Query frequently executed:\n-- SELECT email, first_name, last_name FROM users WHERE tenant_id = 42 AND status = 'ACTIVE';\n\n-- Standard composite index forces heap lookup for first_name and last_name:\n-- CREATE INDEX idx_users_tenant ON users(tenant_id, status);\n\n-- Covering Index with INCLUDE satisfies query with Index-Only Scan:\nCREATE INDEX idx_users_tenant_covering \nON users (tenant_id, status) \nINCLUDE (email, first_name, last_name);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Partial and Filtered Indexes",
    "question": "What is a Partial (Filtered) Index, and what are its performance and storage advantages?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "partial-index",
      "filtered-index",
      "storage-optimization"
    ],
    "interviewAnswer": "A partial index (filtered index in SQL Server) indexes only a subset of rows that satisfy a WHERE predicate. It is dramatically smaller than a full index, fits entirely in cache, speeds up lookups for specific states (like unresolved orders), and reduces write maintenance overhead for all excluded rows.",
    "answer": "In many applications, 99% of data is cold or inactive (e.g. processed orders, read notifications, archived records), while queries focus on the 1% active data (`WHERE status = 'PENDING'`). A standard index covers all 50 million rows. A partial index `CREATE INDEX idx ON orders(created_at) WHERE status = 'PENDING';` indexes only the 5,000 pending orders. It consumes negligible disk space, remains memory-resident, and inserts/updates to completed orders incur zero index maintenance overhead.",
    "explanation": "Supported in PostgreSQL, SQLite, and SQL Server (as Filtered Indexes). MySQL InnoDB does not support true partial indexes (workarounds involve generated columns with NULLs or partitioning).",
    "importantPoints": [
      "Indexes only rows matching the WHERE clause.",
      "Massive reduction in index size and buffer cache footprint.",
      "Zero write penalty for rows not matching the index predicate.",
      "Enforces conditional uniqueness (e.g. unique active session per user)."
    ],
    "commonMistakes": [
      "Writing queries whose WHERE clause does not strictly subsume the partial index condition, causing the optimizer to bypass the partial index.",
      "Indexing 95% of a table with a partial index where savings are negligible.",
      "Trying to use partial indexes with dynamic parameters where the optimizer cannot verify predicate containment at plan compilation."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Partial Index for Job Queues",
        "code": "-- In a tasks table of 20 million completed tasks:\nCREATE INDEX idx_unprocessed_tasks \nON background_tasks (priority, scheduled_at) \nWHERE status = 'QUEUED';\n\n-- Query that matches the partial index plan:\nSELECT * FROM background_tasks \nWHERE status = 'QUEUED' \nORDER BY priority DESC, scheduled_at ASC \nLIMIT 10;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Expression / Functional Indexes",
    "question": "What is an Expression (Functional) Index, and how does it solve the non-sargable query problem?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "functional-index",
      "expressions",
      "sargable"
    ],
    "interviewAnswer": "An expression index indexes the computed result of a function or expression rather than the raw column value. It allows queries that evaluate that exact expression (like LOWER(email) or DATE(created_at)) to perform index seeks rather than full table scans.",
    "answer": "When a query applies a function to an indexed column (e.g. `WHERE LOWER(email) = 'user@example.com'`), standard B-Trees cannot be used because they store raw emails. An expression index pre-evaluates and stores the transformed values: `CREATE INDEX idx_users_lower_email ON users(LOWER(email));`. When a query contains `LOWER(email)`, the optimizer recognizes the matching expression and uses the index directly.",
    "explanation": "Functional indexes require that the function used is deterministic (immutable in PostgreSQL), meaning it always produces the same output for the same input. Functions like `NOW()` or random generators are forbidden in index definitions.",
    "importantPoints": [
      "Indexes the result of a deterministic function or expression.",
      "Enables index seeks on queries with functions in WHERE/ORDER BY.",
      "Function must be deterministic / immutable.",
      "In MySQL, implemented via functional key parts or indexed virtual generated columns."
    ],
    "commonMistakes": [
      "Using a non-deterministic function (e.g. CURRENT_DATE) in an index definition.",
      "Creating an index on LOWER(email) and querying with email = LOWER('...'), which doesn't match the index signature."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Case-Insensitive Expression Index in PostgreSQL",
        "code": "-- Create functional index:\nCREATE INDEX idx_users_lower_email ON users (LOWER(email));\n\n-- Query that utilizes the functional index:\nEXPLAIN ANALYZE\nSELECT user_id, email \nFROM users \nWHERE LOWER(email) = 'test@example.com';"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "GIN and GiST Indexes in PostgreSQL",
    "question": "What are GIN and GiST indexes in PostgreSQL, and for what data types are they designed?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "gin",
      "gist",
      "postgresql",
      "jsonb",
      "full-text"
    ],
    "interviewAnswer": "GIN (Generalized Inverted Index) maps elements (like JSONB keys, array elements, or text tokens) to row IDs; it is ideal for containment lookups (@>, ?, full-text search). GiST (Generalized Search Tree) is a balanced tree for complex multidimensional geometric data, range types, and nearest-neighbor (KNN) spatial queries.",
    "answer": "GIN indexes are inverted indexes: each distinct key/token points to a list of matching row locations. They are optimal when a single column contains multiple composite values (JSONB documents, integer arrays, full-text vectors). GiST is an extensible tree template used for PostGIS geometries, IP address ranges, and date ranges.",
    "explanation": "GIN indexes are inverted indexes: each distinct key/token points to a list of matching row locations. They are optimal when a single column contains multiple composite values (JSONB documents, integer arrays, full-text vectors). GiST is an extensible tree template used for PostGIS geometries, IP address ranges, and date ranges.",
    "importantPoints": [
      "GIN is optimal for JSONB, arrays, and tsvector full-text search.",
      "GiST is optimal for geometric polygons, coordinates, and range types.",
      "GIN has higher write overhead; GiST has lossy leaf nodes in some configurations."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "GIN and GiST Indexes in PostgreSQL",
        "code": "-- Demonstration for: GIN and GiST Indexes in PostgreSQL\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "BRIN (Block Range Index) for Massive Time-Series Data",
    "question": "What is a BRIN index, and why is it ideal for multi-terabyte append-only tables?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "brin",
      "postgresql",
      "big-data",
      "time-series"
    ],
    "interviewAnswer": "BRIN stores summary metadata (min and max values) for physical block ranges (e.g. 128 disk pages) rather than indexing individual rows. For naturally ordered sequential data (like timestamps or auto-increment IDs), BRIN uses less than 1% of the space of a B-Tree while providing comparable scan speeds.",
    "answer": "On a 500GB append-only logging table, a B-Tree index might consume 100GB of RAM. A BRIN index records only the minimum and maximum timestamp for each block range of pages, taking merely tens of megabytes. During queries, BRIN skips entire page ranges that cannot contain the target range, saving massive memory and write overhead.",
    "explanation": "On a 500GB append-only logging table, a B-Tree index might consume 100GB of RAM. A BRIN index records only the minimum and maximum timestamp for each block range of pages, taking merely tens of megabytes. During queries, BRIN skips entire page ranges that cannot contain the target range, saving massive memory and write overhead.",
    "importantPoints": [
      "Requires physical correlation with disk ordering (sequential timestamps/IDs).",
      "Tiny memory footprint (< 1% of B-Tree size).",
      "Negligible write maintenance penalty on inserts."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "BRIN (Block Range Index) for Massive Time-Series Data",
        "code": "-- Demonstration for: BRIN (Block Range Index) for Massive Time-Series Data\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Hash Indexes: Use Cases and Limitations",
    "question": "How do Hash indexes work in relational databases, and what are their major limitations compared to B-Trees?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "hash-index",
      "b-tree",
      "limitations"
    ],
    "interviewAnswer": "Hash indexes use an in-memory hash table offering O(1) equality lookups (=, IN). However, they cannot support range queries (<, >, BETWEEN), prefix matching, or ORDER BY sorting, making versatile B-Trees the standard default.",
    "answer": "Hash indexes apply a hash function to index keys to locate buckets. While equality lookups are constant time O(1), hash structures destroy ordering: you cannot perform range searches, prefix lookups, or index-based sorting. In MySQL, they exist primarily in the MEMORY engine. PostgreSQL supports crash-safe WAL-logged Hash indexes since version 10, but B-Trees remain dominant.",
    "explanation": "Hash indexes apply a hash function to index keys to locate buckets. While equality lookups are constant time O(1), hash structures destroy ordering: you cannot perform range searches, prefix lookups, or index-based sorting. In MySQL, they exist primarily in the MEMORY engine. PostgreSQL supports crash-safe WAL-logged Hash indexes since version 10, but B-Trees remain dominant.",
    "importantPoints": [
      "O(1) equality lookups.",
      "Cannot support range queries (<, >), LIKE prefixes, or ORDER BY.",
      "B-Trees are preferred for 99% of production workloads."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Hash Indexes: Use Cases and Limitations",
        "code": "-- Demonstration for: Hash Indexes: Use Cases and Limitations\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Index Selectivity and Cardinality",
    "question": "What is the relationship between column cardinality, selectivity, and an index's effectiveness?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "selectivity",
      "cardinality",
      "optimizer"
    ],
    "interviewAnswer": "Cardinality is the number of unique values in a column. Selectivity is the ratio of distinct values to total rows (Cardinality / Total Rows). High selectivity (approaching 1.0, like email or ID) makes an index extremely effective. Low selectivity (like boolean status matching 50% of rows) often causes the optimizer to bypass the index.",
    "answer": "If an index has high selectivity, each index seek prunes the search space to a tiny fraction of rows. If selectivity is poor (e.g. a column with only 2 distinct values across 10 million rows), reading matching rows via index lookups requires millions of random disk reads, which is much slower than a sequential full table scan.",
    "explanation": "If an index has high selectivity, each index seek prunes the search space to a tiny fraction of rows. If selectivity is poor (e.g. a column with only 2 distinct values across 10 million rows), reading matching rows via index lookups requires millions of random disk reads, which is much slower than a sequential full table scan.",
    "importantPoints": [
      "Selectivity = Distinct Values / Total Rows.",
      "High selectivity makes indexes fast and desirable.",
      "Low selectivity columns should rarely be indexed as the leading column."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Selectivity and Cardinality",
        "code": "-- Demonstration for: Index Selectivity and Cardinality\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Creating Indexes Concurrently in Production",
    "question": "Why should you use CREATE INDEX CONCURRENTLY in PostgreSQL production environments?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "concurrent-index",
      "postgresql",
      "locks",
      "migrations"
    ],
    "interviewAnswer": "Standard CREATE INDEX acquires a SHARE lock on the table, blocking all concurrent INSERT, UPDATE, and DELETE operations until the build finishes. CREATE INDEX CONCURRENTLY builds the index without blocking writes, running in two passes to guarantee consistency.",
    "answer": "Building an index on a 100M-row table can take 30 minutes. A standard build freezes all write transactions, causing application outages. `CONCURRENTLY` builds the index in the background without blocking writes. If it encounters a deadlock or error, the index is left in an INVALID state and must be dropped and recreated.",
    "explanation": "Building an index on a 100M-row table can take 30 minutes. A standard build freezes all write transactions, causing application outages. `CONCURRENTLY` builds the index in the background without blocking writes. If it encounters a deadlock or error, the index is left in an INVALID state and must be dropped and recreated.",
    "importantPoints": [
      "Does not block INSERT/UPDATE/DELETE.",
      "Requires two passes over the table, taking longer overall.",
      "Can leave an INVALID index if aborted; must be manually dropped."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Creating Indexes Concurrently in Production",
        "code": "-- Demonstration for: Creating Indexes Concurrently in Production\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Index Fragmentation, Page Splits, and FILLFACTOR",
    "question": "What causes B-Tree index fragmentation and page splits, and how does FILLFACTOR help mitigate them?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "fragmentation",
      "page-splits",
      "fillfactor",
      "internals"
    ],
    "interviewAnswer": "When a row is inserted into an already-full B-Tree leaf page, the engine must perform a Page Split, splitting the page 50/50 and allocating a new page out of order on disk. Setting a lower FILLFACTOR (e.g. 80-90% instead of 100%) reserves empty headroom in each page for future updates and inserts, reducing page splits.",
    "answer": "Random inserts (e.g. UUID keys) insert data arbitrarily throughout the B-Tree. When a target page is 100% full, the database splits it into two half-filled pages. This causes physical disk fragmentation, halves cache efficiency, and increases tree depth. Configuring FILLFACTOR reserves space on leaf pages, allowing in-place row growth without immediate page splits.",
    "explanation": "Random inserts (e.g. UUID keys) insert data arbitrarily throughout the B-Tree. When a target page is 100% full, the database splits it into two half-filled pages. This causes physical disk fragmentation, halves cache efficiency, and increases tree depth. Configuring FILLFACTOR reserves space on leaf pages, allowing in-place row growth without immediate page splits.",
    "importantPoints": [
      "Random writes force 50/50 page splits.",
      "Page splits cause disk fragmentation and wasted buffer memory.",
      "Lower FILLFACTOR leaves headroom for in-place modifications."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Fragmentation, Page Splits, and FILLFACTOR",
        "code": "-- Demonstration for: Index Fragmentation, Page Splits, and FILLFACTOR\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "UUID as Primary Key and Index Performance Degradation",
    "question": "Why does using random UUIDv4 as a clustered primary key degrade database write performance on large tables?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "uuid",
      "clustered-index",
      "page-splits",
      "uuidv7"
    ],
    "interviewAnswer": "Random UUIDv4 values have no sequential order. Inserts hit completely random locations in the clustered B-Tree. Once the table exceeds available RAM, every single insert requires reading a random page from disk, splitting the page, and writing it back, causing catastrophic I/O bottlenecks. Sequential UUIDs (UUIDv7) solve this.",
    "answer": "Auto-incrementing BIGINTs append to the right-most leaf page of the B-Tree in memory, making writes sequential and highly efficient. Random UUIDv4 scatters inserts uniformly across all leaf pages. Once the index no longer fits in the buffer pool, cache hit ratio collapses and the database becomes entirely I/O-bound due to random disk reads and page splits. The solution is using time-ordered UUIDv7.",
    "explanation": "Auto-incrementing BIGINTs append to the right-most leaf page of the B-Tree in memory, making writes sequential and highly efficient. Random UUIDv4 scatters inserts uniformly across all leaf pages. Once the index no longer fits in the buffer pool, cache hit ratio collapses and the database becomes entirely I/O-bound due to random disk reads and page splits. The solution is using time-ordered UUIDv7.",
    "importantPoints": [
      "UUIDv4 causes random I/O and continuous page splits.",
      "Destroys buffer pool caching efficiency on multi-million row tables.",
      "UUIDv7 provides timestamp-ordered 128-bit UUIDs that append cleanly like BIGINT."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "UUID as Primary Key and Index Performance Degradation",
        "code": "-- Demonstration for: UUID as Primary Key and Index Performance Degradation\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Index Skip Scan (Loose Index Scan)",
    "question": "What is an Index Skip Scan, and how does it allow queries to use a composite index when the leading column is omitted?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "skip-scan",
      "loose-index-scan",
      "composite-index"
    ],
    "interviewAnswer": "An Index Skip Scan (Loose Index Scan) treats a composite index on (A, B) as multiple separate sub-indexes—one for each distinct value of column A. It jumps directly to the matching B values for each unique A, allowing the index to be used even when the query does not filter on A.",
    "answer": "Supported in Oracle, MySQL 8.0+, and SQLite. If column A has low cardinality (e.g. gender with 2 distinct values), and a query filters `WHERE B = 123`, the optimizer performs two targeted seeks: one for `gender = 'M' AND B = 123` and one for `gender = 'F' AND B = 123`. This avoids a full table scan while using the composite index.",
    "explanation": "Supported in Oracle, MySQL 8.0+, and SQLite. If column A has low cardinality (e.g. gender with 2 distinct values), and a query filters `WHERE B = 123`, the optimizer performs two targeted seeks: one for `gender = 'M' AND B = 123` and one for `gender = 'F' AND B = 123`. This avoids a full table scan while using the composite index.",
    "importantPoints": [
      "Allows using composite index without leading column if leading cardinality is low.",
      "Acts as multiple sub-index seeks.",
      "Supported in MySQL 8 and Oracle."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Skip Scan (Loose Index Scan)",
        "code": "-- Demonstration for: Index Skip Scan (Loose Index Scan)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Invisible and Unusable Indexes",
    "question": "What is an Invisible (or Unusable) index, and how is it used during database maintenance and refactoring?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "invisible-index",
      "mysql",
      "oracle",
      "maintenance"
    ],
    "interviewAnswer": "An invisible index is still maintained by write operations (INSERT/UPDATE/DELETE), but is ignored by the query optimizer for SELECT queries. It allows database administrators to safely test the performance impact of dropping an index without actually dropping it.",
    "answer": "Dropping a large index is dangerous: if an unexpected production query relies on it, CPU usage can spike to 100%. Marking an index `INVISIBLE` (MySQL 8, Oracle) hides it from the optimizer. If performance degrades, you can instantly flip it back to `VISIBLE` without rebuilding the index. If no queries degrade after weeks, the index can be safely dropped.",
    "explanation": "Dropping a large index is dangerous: if an unexpected production query relies on it, CPU usage can spike to 100%. Marking an index `INVISIBLE` (MySQL 8, Oracle) hides it from the optimizer. If performance degrades, you can instantly flip it back to `VISIBLE` without rebuilding the index. If no queries degrade after weeks, the index can be safely dropped.",
    "importantPoints": [
      "Maintained on writes, ignored by optimizer reads.",
      "Zero-risk test before permanent index dropping.",
      "Reversible in milliseconds without rebuilding."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Invisible and Unusable Indexes",
        "code": "-- Demonstration for: Invisible and Unusable Indexes\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Bitmap Index vs B-Tree Index in OLAP vs OLTP",
    "question": "How does a Bitmap Index work, why is it common in OLAP data warehouses, and why is it dangerous in OLTP databases?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "bitmap-index",
      "olap",
      "oltp",
      "concurrency"
    ],
    "interviewAnswer": "A Bitmap Index uses bit arrays (strings of 0s and 1s) for each distinct column value. Multiple conditions can be evaluated using lightning-fast bitwise AND/OR operations. However, updating a single row in an OLTP database locks the entire bitmap segment, freezing all concurrent writes and causing massive concurrency deadlocks.",
    "answer": "Bitmap indexes are ideal for low-cardinality columns (e.g. marital_status, country) in analytical data warehouses. Combining filters (`status = 'PAID' AND region = 'WEST'`) is executed via CPU bitwise AND operations. However, because each bit represents a physical row, locking a row during an UPDATE locks the entire bit vector, making concurrent OLTP writes impossible.",
    "explanation": "Bitmap indexes are ideal for low-cardinality columns (e.g. marital_status, country) in analytical data warehouses. Combining filters (`status = 'PAID' AND region = 'WEST'`) is executed via CPU bitwise AND operations. However, because each bit represents a physical row, locking a row during an UPDATE locks the entire bit vector, making concurrent OLTP writes impossible.",
    "importantPoints": [
      "Ultra-compact storage and fast bitwise boolean operations.",
      "Ideal for read-heavy OLAP star schemas.",
      "Unusable in OLTP due to bitmap segment locking on updates."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Bitmap Index vs B-Tree Index in OLAP vs OLTP",
        "code": "-- Demonstration for: Bitmap Index vs B-Tree Index in OLAP vs OLTP\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Reverse Key Indexes to Eliminate Right-Leaf Contention",
    "question": "What is a Reverse Key Index, and how does it prevent hot-spot concurrency contention on sequential primary keys?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "reverse-key-index",
      "concurrency",
      "buffer-busy-waits"
    ],
    "interviewAnswer": "A Reverse Key Index reverses the bytes of the indexed value before storing it (e.g. 1001 becomes 1001, 1002 becomes 2001). This distributes monotonically increasing sequence inserts across all leaf blocks of the B-Tree, eliminating hot-spot write contention on the right-most leaf page.",
    "answer": "In high-concurrency OLTP systems with sequential IDs, every concurrent INSERT tries to lock the single right-most leaf page of the B-Tree (known as right-leaf contention or buffer busy waits). By reversing the byte order, consecutive IDs are scattered across completely different leaf pages. The trade-off: range queries (`BETWEEN 1000 AND 2000`) cannot use the index.",
    "explanation": "In high-concurrency OLTP systems with sequential IDs, every concurrent INSERT tries to lock the single right-most leaf page of the B-Tree (known as right-leaf contention or buffer busy waits). By reversing the byte order, consecutive IDs are scattered across completely different leaf pages. The trade-off: range queries (`BETWEEN 1000 AND 2000`) cannot use the index.",
    "importantPoints": [
      "Reverses byte order of indexed keys.",
      "Distributes insert load evenly across B-Tree leaf blocks.",
      "Eliminates right-leaf lock contention.",
      "Disables range scans entirely."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Reverse Key Indexes to Eliminate Right-Leaf Contention",
        "code": "-- Demonstration for: Reverse Key Indexes to Eliminate Right-Leaf Contention\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Index Merge Optimization (Bitmap Index Scan in PostgreSQL)",
    "question": "What is the Index Merge optimization (or Bitmap Index Scan in Postgres), and when does the database use it?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "index-merge",
      "bitmap-index-scan",
      "query-plan"
    ],
    "interviewAnswer": "When a query has multiple conditions connected by AND/OR on separate single-column indexes, the database scans each index independently, converts matching row locations into in-memory bitmaps, performs bitwise AND/OR on the bitmaps, and visits the table heap only for the intersecting rows.",
    "answer": "If you have separate indexes on `status` and `customer_id`, and run `WHERE status = 'ACTIVE' OR customer_id = 5`, neither single index can satisfy the query alone. The engine performs an Index Merge (PostgreSQL Bitmap Index Scan): it generates a bitmap of matching pages/rows from index 1, another from index 2, computes the union/intersection in memory, and reads the table.",
    "explanation": "If you have separate indexes on `status` and `customer_id`, and run `WHERE status = 'ACTIVE' OR customer_id = 5`, neither single index can satisfy the query alone. The engine performs an Index Merge (PostgreSQL Bitmap Index Scan): it generates a bitmap of matching pages/rows from index 1, another from index 2, computes the union/intersection in memory, and reads the table.",
    "importantPoints": [
      "Combines multiple independent single-column indexes.",
      "Uses in-memory bitmaps for union (OR) and intersection (AND).",
      "A single composite index is usually faster than Index Merge."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Merge Optimization (Bitmap Index Scan in PostgreSQL)",
        "code": "-- Demonstration for: Index Merge Optimization (Bitmap Index Scan in PostgreSQL)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Descending Indexes and Mixed-Direction Sorting",
    "question": "When is an explicit DESC index required, and why cannot an ASC index always be scanned backward?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "descending-index",
      "order-by",
      "sorting"
    ],
    "interviewAnswer": "For single-column ordering, an ASC index can be scanned backward just as easily as forward. However, for multi-column queries with mixed sorting directions (e.g. ORDER BY category ASC, created_at DESC), an index ordered (category ASC, created_at DESC) is required to avoid an explicit filesort.",
    "answer": "Because B-Tree leaf pages are linked bidirectionally, scanning an `(A ASC)` index in descending order is trivial. But when a query orders by `(A ASC, B DESC)`, navigating adjacent leaf pages cannot satisfy the mixed directions simultaneously. The index must be declared with matching directions `(A ASC, B DESC)` to deliver pre-sorted results without an in-memory Sort.",
    "explanation": "Because B-Tree leaf pages are linked bidirectionally, scanning an `(A ASC)` index in descending order is trivial. But when a query orders by `(A ASC, B DESC)`, navigating adjacent leaf pages cannot satisfy the mixed directions simultaneously. The index must be declared with matching directions `(A ASC, B DESC)` to deliver pre-sorted results without an in-memory Sort.",
    "importantPoints": [
      "Bidirectional links allow single-column indexes to be scanned in either direction.",
      "Mixed multi-column sorting (ASC + DESC) requires matching index directions.",
      "Prevents expensive Sort / filesort operations in query plans."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Descending Indexes and Mixed-Direction Sorting",
        "code": "-- Demonstration for: Descending Indexes and Mixed-Direction Sorting\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Prefix Indexes on Long Text Columns",
    "question": "What is a Prefix Index, and what are the trade-offs of indexing only the first N characters of a string column?",
    "difficulty": "medium",
    "questionType": "Trade-off",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "prefix-index",
      "varchar",
      "storage"
    ],
    "interviewAnswer": "A prefix index indexes only the first N characters of a string column (e.g. VARCHAR(255) indexed as col(20)). It drastically reduces index size and B-Tree depth, but cannot be used for Index-Only Scans or ORDER BY operations and can increase collision checks if N is too short.",
    "answer": "Indexing full URLs or descriptions bloats index size and reduces leaf page fan-out. In MySQL, `CREATE INDEX idx ON articles(url(30));` indexes the first 30 characters. The trade-off: the database cannot use the prefix index to satisfy sorting (`ORDER BY url`) or index-only scans, and if many strings share the same 30-character prefix, filtering efficiency drops.",
    "explanation": "Indexing full URLs or descriptions bloats index size and reduces leaf page fan-out. In MySQL, `CREATE INDEX idx ON articles(url(30));` indexes the first 30 characters. The trade-off: the database cannot use the prefix index to satisfy sorting (`ORDER BY url`) or index-only scans, and if many strings share the same 30-character prefix, filtering efficiency drops.",
    "importantPoints": [
      "Saves massive index storage on wide string columns.",
      "Cannot be used for Index-Only Scans or ORDER BY.",
      "Must choose a prefix length that retains 95%+ selectivity."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Prefix Indexes on Long Text Columns",
        "code": "-- Demonstration for: Prefix Indexes on Long Text Columns\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Why Primary Keys Should Be Immutable and Narrow",
    "question": "Why is it an architectural best practice to ensure clustered primary keys are narrow, static, and monotonically increasing?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "primary-key",
      "clustered-index",
      "best-practices"
    ],
    "interviewAnswer": "Because secondary indexes store the clustered primary key in their leaf nodes, wide primary keys bloat every secondary index. Mutable keys force updating every secondary index whenever the PK changes. Monotonically increasing keys ensure sequential inserts that eliminate random B-Tree page splits.",
    "answer": "In clustered engines (MySQL InnoDB, SQL Server), the clustered key is the bookmark duplicated across every single secondary index. If the primary key is a 64-byte compound string, every secondary index balloons in size. If the key is updated, all secondary indexes must be modified. If the key is sequential (BIGINT), writes append to the right edge of the tree without random page splits.",
    "explanation": "In clustered engines (MySQL InnoDB, SQL Server), the clustered key is the bookmark duplicated across every single secondary index. If the primary key is a 64-byte compound string, every secondary index balloons in size. If the key is updated, all secondary indexes must be modified. If the key is sequential (BIGINT), writes append to the right edge of the tree without random page splits.",
    "importantPoints": [
      "Narrow keys keep all secondary indexes small in memory.",
      "Monotonic keys eliminate B-Tree page splits and fragmentation.",
      "Immutable keys avoid cascading secondary index updates."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Why Primary Keys Should Be Immutable and Narrow",
        "code": "-- Demonstration for: Why Primary Keys Should Be Immutable and Narrow\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Spatial Indexes (R-Tree / PostGIS GiST)",
    "question": "How do spatial indexes (R-Tree / GiST) work for geographic coordinates and bounding box queries?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "spatial-index",
      "r-tree",
      "postgis",
      "gis"
    ],
    "interviewAnswer": "Standard B-Trees only sort 1D scalar data. Spatial indexes use R-Trees (or GiST in Postgres) which group 2D geometries into hierarchical Minimum Bounding Boxes (MBR). Search queries check bounding box overlaps to prune non-matching geographic regions hierarchically.",
    "answer": "Finding \"restaurants within 5km of my coordinates\" cannot be solved efficiently with separate B-Trees on latitude and longitude. An R-Tree groups spatial objects into hierarchically nested rectangles. A search bounding box tests intersection at top-level boxes and drills down only into overlapping sub-rectangles, delivering sub-millisecond proximity queries.",
    "explanation": "Finding \"restaurants within 5km of my coordinates\" cannot be solved efficiently with separate B-Trees on latitude and longitude. An R-Tree groups spatial objects into hierarchically nested rectangles. A search bounding box tests intersection at top-level boxes and drills down only into overlapping sub-rectangles, delivering sub-millisecond proximity queries.",
    "importantPoints": [
      "Indexes 2D/3D geometries using Minimum Bounding Rectangles (MBR).",
      "Prunes non-overlapping regions hierarchically.",
      "Powers PostGIS ST_DWithin and ST_Contains queries."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Spatial Indexes (R-Tree / PostGIS GiST)",
        "code": "-- Demonstration for: Spatial Indexes (R-Tree / PostGIS GiST)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Index Fill Factor and UPDATE Amplification (HOT in PostgreSQL)",
    "question": "What is Heap-Only Tuple (HOT) optimization in PostgreSQL, and how does FILLFACTOR enable it?",
    "difficulty": "hard",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "postgresql",
      "hot-updates",
      "fillfactor",
      "performance"
    ],
    "interviewAnswer": "HOT (Heap-Only Tuples) allows PostgreSQL to update a row without modifying any of its indexes if the updated columns are not indexed and the new row fits on the same data page. Setting a lower table FILLFACTOR reserves page space, guaranteeing updates remain in-page HOT updates and avoiding index write amplification.",
    "answer": "In Postgres, standard updates insert a new tuple version and update every single index pointer. With HOT, if none of the updated columns are indexed and free space exists on the current heap page, Postgres chains the new tuple version directly on that page. Existing indexes point to the root tuple, avoiding any index modification. This eliminates index bloat and vacuuming pressure.",
    "explanation": "In Postgres, standard updates insert a new tuple version and update every single index pointer. With HOT, if none of the updated columns are indexed and free space exists on the current heap page, Postgres chains the new tuple version directly on that page. Existing indexes point to the root tuple, avoiding any index modification. This eliminates index bloat and vacuuming pressure.",
    "importantPoints": [
      "Eliminates index updates when non-indexed columns change.",
      "Requires free space on the original heap page.",
      "Enabled by configuring table FILLFACTOR (e.g. 80-90%)."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Fill Factor and UPDATE Amplification (HOT in PostgreSQL)",
        "code": "-- Demonstration for: Index Fill Factor and UPDATE Amplification (HOT in PostgreSQL)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Index Bloat and REINDEX Maintenance",
    "question": "What is index bloat, how does it occur, and how do you resolve it without downtime?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "index-bloat",
      "reindex",
      "maintenance"
    ],
    "interviewAnswer": "Index bloat occurs when deleted or updated row pointers leave dead space across B-Tree leaf pages that cannot be recycled effectively, causing the index to balloon in size and waste buffer cache. It is resolved using REINDEX CONCURRENTLY (PostgreSQL) or ALTER INDEX ... REBUILD ONLINE (SQL Server/Oracle).",
    "answer": "Frequent updates and deletes cause index pages to become sparsely populated. A bloated index occupies multiple times more memory than necessary, causing cache eviction and increased disk reads. Running `REINDEX TABLE CONCURRENTLY` in PostgreSQL builds a fresh, dense index structure in the background and swaps it atomically without locking out reads or writes.",
    "explanation": "Frequent updates and deletes cause index pages to become sparsely populated. A bloated index occupies multiple times more memory than necessary, causing cache eviction and increased disk reads. Running `REINDEX TABLE CONCURRENTLY` in PostgreSQL builds a fresh, dense index structure in the background and swaps it atomically without locking out reads or writes.",
    "importantPoints": [
      "Dead leaf entries cause memory waste and slow scans.",
      "Resolved via REINDEX CONCURRENTLY or online index rebuilds.",
      "Does not block production reads or writes when run concurrently."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Bloat and REINDEX Maintenance",
        "code": "-- Demonstration for: Index Bloat and REINDEX Maintenance\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Impact of NULL Values on Indexes Across Databases",
    "question": "How are NULL values indexed in PostgreSQL, MySQL, and Oracle?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "null-handling",
      "oracle",
      "postgresql",
      "mysql"
    ],
    "interviewAnswer": "PostgreSQL and MySQL index NULL values in B-Trees, allowing IS NULL queries to use index seeks. Oracle does NOT store rows where all indexed columns are NULL in standard B-Trees, meaning WHERE col IS NULL cannot use an index in Oracle unless a constant or composite key is added.",
    "answer": "In PostgreSQL and MySQL InnoDB, NULLs are stored at the beginning (or end) of the B-Tree leaf pages, making `WHERE col IS NULL` a standard sargable index seek. In Oracle, if every column in the index key is NULL, the row is omitted from the index entirely, forcing full table scans for `IS NULL` queries unless a compound index with a non-null literal is created.",
    "explanation": "In PostgreSQL and MySQL InnoDB, NULLs are stored at the beginning (or end) of the B-Tree leaf pages, making `WHERE col IS NULL` a standard sargable index seek. In Oracle, if every column in the index key is NULL, the row is omitted from the index entirely, forcing full table scans for `IS NULL` queries unless a compound index with a non-null literal is created.",
    "importantPoints": [
      "PostgreSQL & MySQL: NULLs are indexed and support index seeks for IS NULL.",
      "Oracle: Omits fully NULL keys from B-Trees.",
      "PostgreSQL allows NULLS FIRST or NULLS LAST sorting in index definitions."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Impact of NULL Values on Indexes Across Databases",
        "code": "-- Demonstration for: Impact of NULL Values on Indexes Across Databases\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Clustering an Existing Table in PostgreSQL (CLUSTER Command)",
    "question": "How does the CLUSTER command work in PostgreSQL, and what are its drawbacks compared to MySQL InnoDB?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "cluster",
      "postgresql",
      "heap-table",
      "maintenance"
    ],
    "interviewAnswer": "PostgreSQL's CLUSTER command physically re-orders heap table pages on disk to match a specified B-Tree index. However, this is a one-time static operation: future inserts and updates are written to un-ordered heap locations. It also locks the table exclusively (blocking all reads and writes) during execution.",
    "answer": "Unlike MySQL InnoDB where clustering is continuous and dynamic, PostgreSQL tables are un-ordered heaps. Running `CLUSTER employees USING idx_emp_dept;` rewrites the table in index order, accelerating subsequent range scans. However, subsequent DML immediately re-introduces disorder, and the command acquires an `AccessExclusiveLock`, blocking all access.",
    "explanation": "Unlike MySQL InnoDB where clustering is continuous and dynamic, PostgreSQL tables are un-ordered heaps. Running `CLUSTER employees USING idx_emp_dept;` rewrites the table in index order, accelerating subsequent range scans. However, subsequent DML immediately re-introduces disorder, and the command acquires an `AccessExclusiveLock`, blocking all access.",
    "importantPoints": [
      "One-time physical reordering of heap data.",
      "Future writes do not preserve cluster ordering.",
      "Requires exclusive lock blocking all production traffic."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Clustering an Existing Table in PostgreSQL (CLUSTER Command)",
        "code": "-- Demonstration for: Clustering an Existing Table in PostgreSQL (CLUSTER Command)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Composite Index Column Order: Equality Before Range",
    "question": "Why should equality-filtered columns always precede range-filtered columns in a composite index?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "composite-index",
      "range-scan",
      "sargable"
    ],
    "interviewAnswer": "A B-Tree can navigate precisely on multiple columns as long as they are equality matches. The moment a column is evaluated with a range condition (<, >, BETWEEN), all subsequent columns in the index cannot be used for index navigation and can only serve as secondary filters.",
    "answer": "Given query `WHERE tenant_id = 1 AND created_at > '2026-01-01' AND status = 'ACTIVE'`: If the index is `(created_at, tenant_id, status)`, the engine scans all rows matching `created_at > ...` and inspects `tenant_id` manually. If the index is `(tenant_id, status, created_at)`, the engine seeks directly to the exact point for `tenant_id` and `status`, and only scans the exact date range, reading far fewer pages.",
    "explanation": "Given query `WHERE tenant_id = 1 AND created_at > '2026-01-01' AND status = 'ACTIVE'`: If the index is `(created_at, tenant_id, status)`, the engine scans all rows matching `created_at > ...` and inspects `tenant_id` manually. If the index is `(tenant_id, status, created_at)`, the engine seeks directly to the exact point for `tenant_id` and `status`, and only scans the exact date range, reading far fewer pages.",
    "importantPoints": [
      "Equality columns provide exact seek points.",
      "Range comparisons terminate index seek traversal.",
      "Rule: Equality columns first, range columns last."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Composite Index Column Order: Equality Before Range",
        "code": "-- Demonstration for: Composite Index Column Order: Equality Before Range\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Index Statistics: Histograms and Density Vectors",
    "question": "How do database optimizers use Histograms and Statistics to decide whether to use an index?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "statistics",
      "histograms",
      "optimizer",
      "cardinality-estimation"
    ],
    "interviewAnswer": "The database maintains statistical histograms (like equi-depth or frequency histograms) and density vectors in the data catalog. When compiling a query, the optimizer inspects these histograms to estimate how many rows match the filter. If the estimated row count exceeds the tipping point, it chooses a table scan over an index seek.",
    "answer": "A query optimizer cannot execute queries to check row counts; it estimates cardinality via catalog statistics (`pg_statistic`, `sys.stats`). Histograms divide column values into buckets, recording frequencies and boundary values. For non-uniform skewed data, histograms prevent the optimizer from assuming uniform distribution and picking the wrong plan.",
    "explanation": "A query optimizer cannot execute queries to check row counts; it estimates cardinality via catalog statistics (`pg_statistic`, `sys.stats`). Histograms divide column values into buckets, recording frequencies and boundary values. For non-uniform skewed data, histograms prevent the optimizer from assuming uniform distribution and picking the wrong plan.",
    "importantPoints": [
      "Histograms track non-uniform data skew.",
      "Density vector measures average duplicate probability.",
      "Stale statistics cause catastrophic plan regressions."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Statistics: Histograms and Density Vectors",
        "code": "-- Demonstration for: Index Statistics: Histograms and Density Vectors\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "The Tipping Point in Query Optimization",
    "question": "What is the \"Tipping Point\" in query optimization, and what factors determine it?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "tipping-point",
      "optimizer",
      "cost-model"
    ],
    "interviewAnswer": "The tipping point is the threshold percentage of table rows at which the optimizer decides that a full table scan is cheaper than an index seek followed by bookmark/heap lookups. It typically ranges between 10% and 30% of total table rows.",
    "answer": "An index seek followed by a heap fetch incurs random single-page I/O for each row. A full table scan reads consecutive pages using high-speed sequential multi-block I/O. As matching rows increase past the tipping point (typically 15-25%), the cumulative overhead of random I/O exceeds scanning the whole table. For covering indexes, the tipping point is much higher (often 80-100%).",
    "explanation": "An index seek followed by a heap fetch incurs random single-page I/O for each row. A full table scan reads consecutive pages using high-speed sequential multi-block I/O. As matching rows increase past the tipping point (typically 15-25%), the cumulative overhead of random I/O exceeds scanning the whole table. For covering indexes, the tipping point is much higher (often 80-100%).",
    "importantPoints": [
      "Tipping point: Threshold where full table scan becomes cheaper than index lookup.",
      "Driven by the cost difference between random I/O and sequential I/O.",
      "Covering indexes bypass the tipping point because no heap lookups are needed."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "The Tipping Point in Query Optimization",
        "code": "-- Demonstration for: The Tipping Point in Query Optimization\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Indexing JSONB Attributes in PostgreSQL",
    "question": "How do you index specific JSONB attributes in PostgreSQL using B-Tree vs GIN indexes?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "jsonb",
      "postgresql",
      "gin",
      "functional-index"
    ],
    "interviewAnswer": "Use a B-Tree expression index for exact path lookups (CREATE INDEX ON t (((data->>'user_id')::int))), which is compact and fast. Use a GIN index (CREATE INDEX ON t USING gin (data)) when querying arbitrary nested keys, arrays, or using the JSONB containment operator (@>).",
    "answer": "For specific high-volume fields within JSONB documents, extracting the field into a B-Tree functional index (`CREATE INDEX idx ON events (((payload->>'user_id')::bigint));`) provides optimal speed and minimal storage. If queries search arbitrary variable keys or check tag arrays, a GIN index (`jsonb_path_ops`) indexes all key-value paths simultaneously.",
    "explanation": "For specific high-volume fields within JSONB documents, extracting the field into a B-Tree functional index (`CREATE INDEX idx ON events (((payload->>'user_id')::bigint));`) provides optimal speed and minimal storage. If queries search arbitrary variable keys or check tag arrays, a GIN index (`jsonb_path_ops`) indexes all key-value paths simultaneously.",
    "importantPoints": [
      "B-Tree functional index: Best for specific extracted scalar JSON fields.",
      "GIN index: Best for arbitrary keys, nested JSON, and containment queries (@>)."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Indexing JSONB Attributes in PostgreSQL",
        "code": "-- Demonstration for: Indexing JSONB Attributes in PostgreSQL\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Text Search: B-Tree vs Full-Text Search Indexes",
    "question": "Why can't B-Trees efficiently support substring searches (WHERE col LIKE '%keyword%'), and how do Full-Text Search indexes solve this?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "full-text",
      "like-query",
      "gin",
      "inverted-index"
    ],
    "interviewAnswer": "B-Trees are sorted alphabetically from left to right; a leading wildcard (%keyword) removes the prefix anchor, forcing a scan of the entire tree. Full-Text Search creates an inverted index of lexemes/tokens, allowing direct lookups of words appearing anywhere inside the text.",
    "answer": "Because B-Tree navigation requires a known leading character (`LIKE 'prefix%'`), searching for internal substrings requires evaluating every single row. Full-text search (PostgreSQL `tsvector` with GIN, or MySQL FULLTEXT) parses text into normalized word stems (tokens) and stores an inverted map of token -> matching document IDs, enabling instantaneous word matching.",
    "explanation": "Because B-Tree navigation requires a known leading character (`LIKE 'prefix%'`), searching for internal substrings requires evaluating every single row. Full-text search (PostgreSQL `tsvector` with GIN, or MySQL FULLTEXT) parses text into normalized word stems (tokens) and stores an inverted map of token -> matching document IDs, enabling instantaneous word matching.",
    "importantPoints": [
      "B-Trees only support leading prefix searches (col LIKE 'abc%').",
      "Leading wildcards (%abc) force full scans.",
      "Inverted full-text indexes map words to row locations for sub-millisecond search."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Text Search: B-Tree vs Full-Text Search Indexes",
        "code": "-- Demonstration for: Text Search: B-Tree vs Full-Text Search Indexes\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Trigram (pg_trgm) Indexes for Arbitrary Substring Search",
    "question": "How does PostgreSQL pg_trgm (trigram) index accelerate wildcard queries like LIKE '%keyword%'?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "trigram",
      "pg_trgm",
      "like-query",
      "fuzzy-search"
    ],
    "interviewAnswer": "pg_trgm breaks strings into 3-character slices (trigrams). A GIN or GiST index over these trigrams allows PostgreSQL to match queries with leading wildcards (LIKE '%pattern%') and perform fuzzy regex/Levenshtein matching using index seeks.",
    "answer": "Standard indexes fail on `LIKE '%search%'`. The `pg_trgm` extension breaks strings like \"apple\" into trigrams: \"  a\", \" ap\", \"app\", \"ppl\", \"ple\", \"le \". A GIN index on these trigrams finds all rows sharing the trigrams of the search term, converting arbitrary substring searches and ILIKE patterns into efficient index scans.",
    "explanation": "Standard indexes fail on `LIKE '%search%'`. The `pg_trgm` extension breaks strings like \"apple\" into trigrams: \"  a\", \" ap\", \"app\", \"ppl\", \"ple\", \"le \". A GIN index on these trigrams finds all rows sharing the trigrams of the search term, converting arbitrary substring searches and ILIKE patterns into efficient index scans.",
    "importantPoints": [
      "Breaks text into 3-character tuples.",
      "Enables index-accelerated LIKE '%search%' and regex matching.",
      "Supports fuzzy similarity matching (% operator)."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Trigram (pg_trgm) Indexes for Arbitrary Substring Search",
        "code": "-- Demonstration for: Trigram (pg_trgm) Indexes for Arbitrary Substring Search\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Virtual / Generated Columns Indexing",
    "question": "How do Generated (Virtual vs Stored) columns interact with secondary indexes in MySQL and PostgreSQL?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "generated-columns",
      "virtual-columns",
      "mysql"
    ],
    "interviewAnswer": "In MySQL, Virtual generated columns are calculated on read and take zero table storage, yet they CAN be indexed! The index physically stores the materialized calculated value in its B-Tree, providing high read performance without wasting table disk space.",
    "answer": "MySQL allows creating secondary indexes directly on `VIRTUAL` generated columns. While the base table row stores no data for that column, the secondary index stores the pre-calculated value in its leaf nodes. When a query filters on the virtual column, the engine uses the index without calculating the expression at runtime.",
    "explanation": "MySQL allows creating secondary indexes directly on `VIRTUAL` generated columns. While the base table row stores no data for that column, the secondary index stores the pre-calculated value in its leaf nodes. When a query filters on the virtual column, the engine uses the index without calculating the expression at runtime.",
    "importantPoints": [
      "Virtual columns consume zero base table storage.",
      "Indexes on virtual columns physically store computed values in the B-Tree.",
      "Enables indexing of complex JSON expressions in MySQL."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Virtual / Generated Columns Indexing",
        "code": "-- Demonstration for: Virtual / Generated Columns Indexing\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Index Leaf Page Reorganization and B-Tree Depth Invariance",
    "question": "Does deleting 90% of rows from a table reduce the height (depth) of a B-Tree index automatically?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "b-tree",
      "index-depth",
      "vacuum",
      "internals"
    ],
    "interviewAnswer": "Rarely. In most RDBMS engines, deleting rows marks leaf slots as dead, but empty pages are rarely deallocated from the top-level tree structure or returned to the operating system. The tree height almost never shrinks automatically; a REINDEX or VACUUM FULL is required.",
    "answer": "B-Tree engines are designed for fast concurrent inserts and lookups. Merging and freeing branch pages during mass deletes is complex and risks locking contention. Consequently, massive row deletions leave sparse, bloated index pages. The B-Tree depth remains inflated until an offline or concurrent REINDEX rebuilds the tree from scratch.",
    "explanation": "B-Tree engines are designed for fast concurrent inserts and lookups. Merging and freeing branch pages during mass deletes is complex and risks locking contention. Consequently, massive row deletions leave sparse, bloated index pages. The B-Tree depth remains inflated until an offline or concurrent REINDEX rebuilds the tree from scratch.",
    "importantPoints": [
      "Deletes leave dead space rather than collapsing branch pages.",
      "Tree height rarely shrinks without an explicit rebuild.",
      "Requires REINDEX or table reorganization to reclaim disk space."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Leaf Page Reorganization and B-Tree Depth Invariance",
        "code": "-- Demonstration for: Index Leaf Page Reorganization and B-Tree Depth Invariance\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Index Compression (Key Compression / Prefix Compression)",
    "question": "What is Index Key Compression, and how does it reduce memory consumption for repetitive composite index keys?",
    "difficulty": "hard",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "compression",
      "prefix-compression",
      "storage"
    ],
    "interviewAnswer": "Index key compression eliminates redundant prefixes across adjacent keys on the same leaf page. For composite indexes where the leading column has many duplicate values (e.g. status or tenant_id), compression stores the common prefix once per page, drastically reducing index size and increasing page fan-out.",
    "answer": "Because B-Tree leaf pages store keys in sorted order, adjacent entries frequently share identical leading column values. Prefix compression strips duplicate prefixes, storing only the delta/suffix for each row. This allows 3x-5x more keys to fit onto each 8KB index page, reducing I/O seeks and memory requirements.",
    "explanation": "Because B-Tree leaf pages store keys in sorted order, adjacent entries frequently share identical leading column values. Prefix compression strips duplicate prefixes, storing only the delta/suffix for each row. This allows 3x-5x more keys to fit onto each 8KB index page, reducing I/O seeks and memory requirements.",
    "importantPoints": [
      "Eliminates repeated key prefixes on sorted leaf pages.",
      "Increases page fan-out and reduces tree depth.",
      "Supported in Oracle, SQL Server, and modern storage engines."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Compression (Key Compression / Prefix Compression)",
        "code": "-- Demonstration for: Index Compression (Key Compression / Prefix Compression)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Index Condition Pushdown (ICP)",
    "question": "What is Index Condition Pushdown (ICP), and how does it reduce the number of table accesses in MySQL and MariaDB?",
    "difficulty": "hard",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "icp",
      "mysql",
      "query-plan",
      "storage-engine"
    ],
    "interviewAnswer": "Index Condition Pushdown pushes WHERE conditions down into the storage engine layer so the engine evaluates conditions on available index columns BEFORE reading the full table row from disk, avoiding unnecessary row reads and engine-server context switches.",
    "answer": "Historically in MySQL, if an index on (zipcode, last_name, address) was queried with `WHERE zipcode = '12345' AND last_name LIKE '%son'`, the storage engine could only seek on `zipcode` and passed every matching row back to the MySQL server layer to evaluate the `last_name` filter. With ICP, the storage engine inspects `last_name` directly inside the index leaf page, discarding non-matches without reading the table row.",
    "explanation": "Historically in MySQL, if an index on (zipcode, last_name, address) was queried with `WHERE zipcode = '12345' AND last_name LIKE '%son'`, the storage engine could only seek on `zipcode` and passed every matching row back to the MySQL server layer to evaluate the `last_name` filter. With ICP, the storage engine inspects `last_name` directly inside the index leaf page, discarding non-matches without reading the table row.",
    "importantPoints": [
      "Pushes secondary filters into storage engine layer.",
      "Discards non-matching rows before reading table heap pages.",
      "Visible in EXPLAIN output as \"Using index condition\"."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Condition Pushdown (ICP)",
        "code": "-- Demonstration for: Index Condition Pushdown (ICP)\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Partial Covering Indexes: Combining Predicates and Projections",
    "question": "How do you design an optimal index for a query that filters on status and dates while projecting IDs and amounts?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "covering-index",
      "query-optimization"
    ],
    "interviewAnswer": "Put equality filter columns first, followed by range filter columns, and append projected columns using INCLUDE: CREATE INDEX idx ON orders (status, order_date) INCLUDE (order_id, customer_id, total_amount) WHERE status IN ('PAID', 'SHIPPED');",
    "answer": "Designing the ideal index follows a strict formula: 1) Equality predicates in the key definition (`status`); 2) Range/inequality predicates in the key definition (`order_date`); 3) Projections in the `INCLUDE` clause (`total_amount`); 4) Partial filter (`WHERE is_deleted = false`) if applicable. This guarantees an Index-Only Scan with zero heap lookups and minimal tree width.",
    "explanation": "Designing the ideal index follows a strict formula: 1) Equality predicates in the key definition (`status`); 2) Range/inequality predicates in the key definition (`order_date`); 3) Projections in the `INCLUDE` clause (`total_amount`); 4) Partial filter (`WHERE is_deleted = false`) if applicable. This guarantees an Index-Only Scan with zero heap lookups and minimal tree width.",
    "importantPoints": [
      "Order: Equality keys -> Range keys -> Included payload columns.",
      "Enables single-seek Index-Only Scan.",
      "Avoids widening branch pages."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Partial Covering Indexes: Combining Predicates and Projections",
        "code": "-- Demonstration for: Partial Covering Indexes: Combining Predicates and Projections\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Unique Index Enforcement Under NULL Values in MySQL vs Postgres",
    "question": "Why does a UNIQUE index in MySQL allow duplicate (NULL, NULL) values, and how can strict unique null handling be enforced?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "unique-index",
      "null-handling",
      "mysql",
      "postgresql"
    ],
    "interviewAnswer": "SQL standards dictate that NULL represents an unknown value, so NULL != NULL. Thus, UNIQUE indexes in MySQL and standard PostgreSQL treat every NULL as distinct, allowing multiple rows with NULL. In PostgreSQL 15+, you can enforce UNIQUE NULLS NOT DISTINCT.",
    "answer": "If a table has a UNIQUE index on `phone_number`, multiple users can register with `NULL`. If business rules dictate that only ONE user can have a NULL phone number (or NULL should be treated as unique), MySQL requires generating a fallback value or using a trigger. PostgreSQL 15 introduced `CREATE UNIQUE INDEX ... NULLS NOT DISTINCT` to treat NULLs as equal values.",
    "explanation": "If a table has a UNIQUE index on `phone_number`, multiple users can register with `NULL`. If business rules dictate that only ONE user can have a NULL phone number (or NULL should be treated as unique), MySQL requires generating a fallback value or using a trigger. PostgreSQL 15 introduced `CREATE UNIQUE INDEX ... NULLS NOT DISTINCT` to treat NULLs as equal values.",
    "importantPoints": [
      "Default SQL behavior: Multiple NULLs are permitted in UNIQUE indexes.",
      "PostgreSQL 15+ provides NULLS NOT DISTINCT.",
      "In SQL Server, UNIQUE indexes treat NULL as a single distinct value by default."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Unique Index Enforcement Under NULL Values in MySQL vs Postgres",
        "code": "-- Demonstration for: Unique Index Enforcement Under NULL Values in MySQL vs Postgres\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Drop Unused Indexes: Performance and Safety Protocols",
    "question": "What is the safe operational protocol for identifying and dropping unused indexes in a live production system?",
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "monitoring",
      "drop-index",
      "production-safety"
    ],
    "interviewAnswer": "1) Monitor index usage via system catalog stats (pg_stat_user_indexes) over at least 30-90 days to account for monthly/quarterly batch jobs; 2) Exclude primary keys, foreign keys, and unique constraints; 3) Mark index INVISIBLE (if supported) to test without dropping; 4) Drop concurrently during off-peak hours.",
    "answer": "Never drop an index based on 24 hours of metrics; end-of-month financial reports or quarterly tax queries might depend on it. Always check `idx_scan = 0` across a multi-month window. Before dropping, verify that the index does not enforce foreign keys or unique constraints. Use `ALTER INDEX ... INVISIBLE` as an intermediate safety step before executing `DROP INDEX CONCURRENTLY`.",
    "explanation": "Never drop an index based on 24 hours of metrics; end-of-month financial reports or quarterly tax queries might depend on it. Always check `idx_scan = 0` across a multi-month window. Before dropping, verify that the index does not enforce foreign keys or unique constraints. Use `ALTER INDEX ... INVISIBLE` as an intermediate safety step before executing `DROP INDEX CONCURRENTLY`.",
    "importantPoints": [
      "Monitor stats over 30-90 days to catch monthly batch jobs.",
      "Verify index is not backing a UNIQUE or FK constraint.",
      "Use INVISIBLE feature as a rollback safety net."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Drop Unused Indexes: Performance and Safety Protocols",
        "code": "-- Demonstration for: Drop Unused Indexes: Performance and Safety Protocols\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Index Range Scan vs Index Full Scan vs Index Fast Full Scan",
    "question": "Compare Index Range Scan, Index Full Scan, and Index Fast Full Scan in database execution plans.",
    "difficulty": "hard",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "execution-plan",
      "range-scan",
      "full-scan",
      "fast-full-scan"
    ],
    "interviewAnswer": "Index Range Scan accesses a bounded slice of the index leaf pages. Index Full Scan navigates from root to leftmost leaf and reads all leaf pages in logical sorted order (preserving ORDER BY). Index Fast Full Scan reads all index pages using multi-block sequential I/O directly from disk (like a table scan), ignoring sort order.",
    "answer": "1) Index Range Scan: Traverses tree to start key and follows leaf pointers until end key is reached. 2) Index Full Scan: Reads every leaf block in logical B-Tree order using single-block reads, producing ordered output suitable for eliminating an ORDER BY sort. 3) Index Fast Full Scan (Oracle/SQL Server): Reads the entire index segment using multi-block reads in physical disk order. It does not produce sorted output, but scans the entire index much faster than an Index Full Scan.",
    "explanation": "1) Index Range Scan: Traverses tree to start key and follows leaf pointers until end key is reached. 2) Index Full Scan: Reads every leaf block in logical B-Tree order using single-block reads, producing ordered output suitable for eliminating an ORDER BY sort. 3) Index Fast Full Scan (Oracle/SQL Server): Reads the entire index segment using multi-block reads in physical disk order. It does not produce sorted output, but scans the entire index much faster than an Index Full Scan.",
    "importantPoints": [
      "Range scan reads bounded slice.",
      "Full scan reads leaf chain in sorted order (single-block reads).",
      "Fast full scan reads index pages in disk order using multi-block I/O."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Range Scan vs Index Full Scan vs Index Fast Full Scan",
        "code": "-- Demonstration for: Index Range Scan vs Index Full Scan vs Index Fast Full Scan\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Index Seek vs Index Scan Terminology",
    "question": "What is the difference between an Index Seek and an Index Scan in query execution plans?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "index-seek",
      "index-scan",
      "execution-plan"
    ],
    "interviewAnswer": "An Index Seek navigates the B-Tree from root to leaf to locate specific target rows using search arguments. An Index Scan reads through all or large ranges of index pages sequentially without drilling down from the root for each value.",
    "answer": "In SQL Server and relational query plans: `Index Seek` means the optimizer used the B-Tree navigation properties to jump directly to the target record(s) in O(log N) page reads. `Index Scan` means the engine traversed the index pages sequentially from start to end because the query could not provide a leading search key.",
    "explanation": "In SQL Server and relational query plans: `Index Seek` means the optimizer used the B-Tree navigation properties to jump directly to the target record(s) in O(log N) page reads. `Index Scan` means the engine traversed the index pages sequentially from start to end because the query could not provide a leading search key.",
    "importantPoints": [
      "Index Seek: Direct root-to-leaf navigation (O(log N)).",
      "Index Scan: Sequential traversal across index leaf pages.",
      "Index Seek is significantly faster for selective lookups."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Seek vs Index Scan Terminology",
        "code": "-- Demonstration for: Index Seek vs Index Scan Terminology\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Composite Key Cardinality Ordering Myth",
    "question": "Why is the rule of thumb \"place the column with highest cardinality first in a composite index\" often wrong?",
    "difficulty": "hard",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "composite-index",
      "cardinality",
      "myths"
    ],
    "interviewAnswer": "Query access patterns matter far more than cardinality. If a query filters by tenant_id (low cardinality, e.g. 100 tenants) and created_at (high cardinality), placing tenant_id first allows ALL queries for that tenant to use the index. Placing created_at first would prevent filtering by tenant alone.",
    "answer": "The old textbook rule \"highest cardinality first\" ignores query workloads. In multi-tenant systems, `tenant_id` has low cardinality relative to the table, but putting `tenant_id` first isolates queries to a single tenant partition. Furthermore, equality columns MUST precede range columns regardless of cardinality.",
    "explanation": "The old textbook rule \"highest cardinality first\" ignores query workloads. In multi-tenant systems, `tenant_id` has low cardinality relative to the table, but putting `tenant_id` first isolates queries to a single tenant partition. Furthermore, equality columns MUST precede range columns regardless of cardinality.",
    "importantPoints": [
      "Access patterns and query predicates dictate column ordering, not raw cardinality.",
      "Equality columns must always precede range columns.",
      "Leading low-cardinality partition columns (tenant_id) enable multi-tenant pruning."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Composite Key Cardinality Ordering Myth",
        "code": "-- Demonstration for: Composite Key Cardinality Ordering Myth\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Index Bloat in Append-Only vs Heavy-Update Workloads",
    "question": "Why do heavy UPDATE workloads bloat B-Tree indexes much faster than append-only workloads?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "index-bloat",
      "updates",
      "mvcc"
    ],
    "interviewAnswer": "In MVCC architectures (like PostgreSQL), an UPDATE to an indexed column cannot update the B-Tree in place; it must insert a brand-new index entry for the new version and leave the old index entry pointing to the dead tuple until VACUUM runs, rapidly fragmenting index pages.",
    "answer": "Append-only workloads write sequentially to the end of index leaf blocks with high fill density. In contrast, heavy updates scatter modifications across random pages, creating dead tuples and forcing page splits. In PostgreSQL, updating an indexed column completely disables Heap-Only Tuple (HOT) optimizations, causing explosive index growth.",
    "explanation": "Append-only workloads write sequentially to the end of index leaf blocks with high fill density. In contrast, heavy updates scatter modifications across random pages, creating dead tuples and forcing page splits. In PostgreSQL, updating an indexed column completely disables Heap-Only Tuple (HOT) optimizations, causing explosive index growth.",
    "importantPoints": [
      "Updates to indexed columns insert new B-Tree entries.",
      "Prevents Heap-Only Tuple (HOT) optimizations.",
      "Requires aggressive autovacuum tuning to manage bloat."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Bloat in Append-Only vs Heavy-Update Workloads",
        "code": "-- Demonstration for: Index Bloat in Append-Only vs Heavy-Update Workloads\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Covering Index with Foreign Keys to Accelerate JOINs",
    "question": "How does a covering index on a foreign key accelerate parent-child JOIN queries?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "covering-index",
      "joins",
      "foreign-key"
    ],
    "interviewAnswer": "By indexing the foreign key column and INCLUDING the child table's projected attributes, the query optimizer can execute the JOIN using an Index-Only Scan on the child table without performing heap lookups.",
    "answer": "When joining `orders` and `order_items`, creating `INDEX idx_items_order ON order_items (order_id) INCLUDE (product_id, quantity, unit_price)` allows the join engine to fetch all required order line item details directly from the index leaf pages, cutting I/O latency in half for order detail lookups.",
    "explanation": "When joining `orders` and `order_items`, creating `INDEX idx_items_order ON order_items (order_id) INCLUDE (product_id, quantity, unit_price)` allows the join engine to fetch all required order line item details directly from the index leaf pages, cutting I/O latency in half for order detail lookups.",
    "importantPoints": [
      "Combines join predicate seek with index payload projection.",
      "Eliminates child table heap access during nested loops or hash joins."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Covering Index with Foreign Keys to Accelerate JOINs",
        "code": "-- Demonstration for: Covering Index with Foreign Keys to Accelerate JOINs\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Index Overhead on Bulk INSERT Operations",
    "question": "How do multiple secondary indexes affect the throughput of bulk INSERT operations, and what is the standard ETL mitigation?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "bulk-insert",
      "etl",
      "write-performance"
    ],
    "interviewAnswer": "Each inserted row must be written to every secondary index, converting sequential disk writes into random B-Tree insertions and slowing bulk loads by 5x-20x. Standard mitigation: Drop all secondary indexes before bulk loading and recreate them concurrently after loading.",
    "answer": "Maintaining 10 secondary indexes during a 50M-row insert forces 500 million random leaf page lookups and splits. Rebuilding indexes in bulk after loading sorts data once in memory using external merge sort and builds dense, balanced B-Trees sequentially, which is up to 10 times faster than per-row maintenance.",
    "explanation": "Maintaining 10 secondary indexes during a 50M-row insert forces 500 million random leaf page lookups and splits. Rebuilding indexes in bulk after loading sorts data once in memory using external merge sort and builds dense, balanced B-Trees sequentially, which is up to 10 times faster than per-row maintenance.",
    "importantPoints": [
      "Secondary indexes degrade bulk insert throughput exponentially.",
      "Dropping indexes before ETL and rebuilding them afterward is dramatically faster.",
      "Rebuilt indexes achieve 100% density with zero initial fragmentation."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Overhead on Bulk INSERT Operations",
        "code": "-- Demonstration for: Index Overhead on Bulk INSERT Operations\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Bitmap Index Inverted Representation",
    "question": "How does an inverted bitmap index represent row IDs internally in storage?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "bitmap-index",
      "internals",
      "bit-vector"
    ],
    "interviewAnswer": "For each distinct value in the indexed column, the index creates a bit vector where the Nth bit corresponds to the Nth physical row in the table. A bit is set to 1 if the row possesses that value, and 0 otherwise.",
    "answer": "If a table has 1 million rows and a column `gender` has 2 values, the index contains two bit vectors, each 1 million bits (125 KB) long. Finding `gender = 'F'` simply reads the second bit vector. Combining conditions across multiple bitmap indexes uses hardware-accelerated bitwise SIMD instructions.",
    "explanation": "If a table has 1 million rows and a column `gender` has 2 values, the index contains two bit vectors, each 1 million bits (125 KB) long. Finding `gender = 'F'` simply reads the second bit vector. Combining conditions across multiple bitmap indexes uses hardware-accelerated bitwise SIMD instructions.",
    "importantPoints": [
      "Bit position directly maps to physical row number.",
      "Extremely compact storage for low cardinality.",
      "Bitwise AND/OR operations run at hardware bus speeds."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Bitmap Index Inverted Representation",
        "code": "-- Demonstration for: Bitmap Index Inverted Representation\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Index Scans in EXPLAIN Plans: Filter vs Index Condition",
    "question": "In an EXPLAIN execution plan, what is the difference between an \"Index Condition\" (Access Predicate) and a \"Filter\"?",
    "difficulty": "hard",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "explain",
      "access-predicate",
      "filter",
      "query-plan"
    ],
    "interviewAnswer": "An Index Condition (Access Predicate) is used to navigate the B-Tree directly, defining the start and stop boundaries of the search. A Filter predicate cannot be used to navigate the tree; it is evaluated row-by-row on candidate records after they have already been fetched.",
    "answer": "In query plans: `Access: id BETWEEN 10 AND 50` defines the exact B-Tree seek range. `Filter: status = 'ACTIVE'` indicates that the engine inspected every row in the range and discarded those not matching status. High numbers of filtered rows indicate that the index does not efficiently narrow the search space and could benefit from composite redesign.",
    "explanation": "In query plans: `Access: id BETWEEN 10 AND 50` defines the exact B-Tree seek range. `Filter: status = 'ACTIVE'` indicates that the engine inspected every row in the range and discarded those not matching status. High numbers of filtered rows indicate that the index does not efficiently narrow the search space and could benefit from composite redesign.",
    "importantPoints": [
      "Access / Index Condition: Sets B-Tree navigation seek bounds.",
      "Filter: Row-by-row test applied after reading pages.",
      "A wide gap between rows read and rows returned indicates poor index selectivity."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Index Scans in EXPLAIN Plans: Filter vs Index Condition",
        "code": "-- Demonstration for: Index Scans in EXPLAIN Plans: Filter vs Index Condition\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "sql",
    "topicSlug": "indexes",
    "title": "Zone Maps and Storage Clustered Indexes in Columnar Databases",
    "question": "How do Zone Maps in columnar databases (Snowflake, Redshift, ClickHouse) replace traditional B-Tree indexes?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "indexes",
      "columnar",
      "zone-maps",
      "data-warehouse",
      "snowflake"
    ],
    "interviewAnswer": "Columnar data warehouses do not use B-Tree indexes because storing billions of pointer entries consumes too much space. Instead, they use Zone Maps (Data Skipping / Min-Max pruning), storing min and max values per compressed columnar block to skip irrelevant micro-partitions entirely.",
    "answer": "In analytical databases, data is organized into immutable compressed blocks of 50k-100k rows. Zone maps record the minimum and maximum values of every column within each block. When a query filters `WHERE date = '2026-05-01'`, the query planner compares the filter against the zone map and skips reading 99% of compressed blocks without needing individual row pointers.",
    "explanation": "In analytical databases, data is organized into immutable compressed blocks of 50k-100k rows. Zone maps record the minimum and maximum values of every column within each block. When a query filters `WHERE date = '2026-05-01'`, the query planner compares the filter against the zone map and skips reading 99% of compressed blocks without needing individual row pointers.",
    "importantPoints": [
      "Columnar databases avoid row-level B-Tree pointers.",
      "Zone maps store min/max statistics per data block.",
      "Enables multi-terabyte data skipping with minimal metadata overhead."
    ],
    "commonMistakes": [
      "Overlooking I/O cost models or confusing logical vs physical structures."
    ],
    "codeExamples": [
      {
        "language": "sql",
        "title": "Zone Maps and Storage Clustered Indexes in Columnar Databases",
        "code": "-- Demonstration for: Zone Maps and Storage Clustered Indexes in Columnar Databases\nSELECT 1;"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
