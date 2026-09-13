import { SeedQuestion } from '../types';

export const indexesQuestions: SeedQuestion[] = [
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Scenario: Index Exists But Query Remains Slow",
    "question": "An index exists but the query remains slow. What would you check?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "slow-query",
      "explain",
      "scenario"
    ],
    "interviewAnswer": "I would run explain(\"executionStats\") and inspect: 1) stage (COLLSCAN vs IXSCAN); 2) totalDocsExamined vs nReturned (high ratio indicates poor selectivity or missing covering index); 3) Compound index prefix rules (query omitted leading index fields); 4) ESR rule violation (equality before sort before range); 5) In-memory sort (SORT stage with usedDisk: false); 6) Unanchored regex or non-sargable expressions; 7) Collation mismatches.",
    "answer": "To diagnose why a query is slow despite an index: 1) Run `explain(\"executionStats\")`: Verify if `winningPlan.inputStage.stage` is actually `IXSCAN` or if it fell back to `COLLSCAN`. 2) Inspect `totalDocsExamined` vs `nReturned`: If `totalDocsExamined` is 100,000 but `nReturned` is 10, the index is not selective, forcing 100,000 disk lookups to filter secondary conditions. 3) Check Leftmost Prefix: If the index is `{ a: 1, b: 1 }` and the query filters on `{ b: 2 }`, the index cannot be used for direct seeking. 4) ESR Rule: Ensure index order follows Equality -> Sort -> Range. 5) Memory Sort: Check if an in-memory `SORT` stage occurred because the index order didn't match the `sort()` clause. 6) Collation Mismatch: If the index was built with a specific collation and the query omits it, MongoDB ignores the index.",
    "explanation": "A common production gotcha is \"Index Intersection\": MongoDB uses two single-field indexes instead of a compound index, spending massive CPU intersecting index bitmaps.",
    "importantPoints": [
      "Check winningPlan stage: IXSCAN vs COLLSCAN.",
      "Examine totalDocsExamined vs nReturned ratio (ideal ratio is ~1.0).",
      "Verify Leftmost Prefix rule on compound indexes.",
      "Check ESR rule (Equality, Sort, Range).",
      "Verify query collation matches index collation exactly."
    ],
    "commonMistakes": [
      "Assuming the presence of an index guarantees the optimizer will use it.",
      "Ignoring high totalDocsExamined when IXSCAN is present.",
      "Filtering with case-insensitive regex on an indexed field."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Diagnosing Slow Query with explain(\"executionStats\")",
        "code": "const explanation = db.orders.find({\n  status: \"ACTIVE\",\n  createdAt: { $gte: ISODate(\"2026-01-01\") }\n}).sort({ totalAmount: -1 }).explain(\"executionStats\");\n\nprint(\"Execution Stage: \" + explanation.executionStats.executionStages.stage);\nprint(\"Docs Examined: \" + explanation.executionStats.totalDocsExamined);\nprint(\"Docs Returned: \" + explanation.executionStats.nReturned);\nprint(\"Execution Time MS: \" + explanation.executionStats.executionTimeMillis);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Scenario: Millions of Writes Per Day and Index Strategy",
    "question": "A collection receives millions of writes per day. How would you think about indexes?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "write-heavy",
      "performance",
      "trade-offs",
      "scenario"
    ],
    "interviewAnswer": "In high-write collections, every additional index degrades write throughput, inflates WiredTiger cache eviction pressure, and causes write amplification. I would: 1) Keep indexes strictly minimal (3-5 max); 2) Consolidate single-column indexes into compound indexes; 3) Use Partial Indexes to index only active records; 4) Audit and drop unused indexes via $indexStats; 5) Avoid indexing large arrays (multikey); 6) Use Time Series or Capped collections if applicable.",
    "answer": "In write-intensive systems (e.g. logging, analytics, financial ledgers): 1) Write Penalty: Every `insertOne` or `updateOne` modifying indexed keys must synchronously update every corresponding B-Tree index leaf page. Having 10 indexes means 1 insert requires 11 writes. 2) Memory Contention: Index B-Trees must remain pinned in WiredTiger cache. Bloated indexes displace active data pages from RAM, forcing disk I/O. 3) Compound Consolidation: If queries search `{ tenantId }` and `{ tenantId, createdAt }`, drop the single `{ tenantId }` index because the compound index prefix satisfies both. 4) Partial Indexes: Index only `WHERE status = \"PENDING\"` so 99% of completed historical records incur zero index write overhead.",
    "explanation": "Monitoring `$indexStats` in production reveals indexes that have zero reads (`accesses.ops == 0`). Dropping them yields an immediate 20-40% boost in write throughput.",
    "importantPoints": [
      "Every index incurs a direct write penalty on insert, update, and delete.",
      "Indexes compete for WiredTiger RAM cache with active data pages.",
      "Consolidate redundant indexes using compound index prefixing.",
      "Use Partial Indexes to index only active/hot subsets of documents.",
      "Drop unused indexes identified by $indexStats."
    ],
    "commonMistakes": [
      "Creating a new index for every single ad-hoc query without auditing existing indexes.",
      "Indexing high-churn array fields, creating massive multikey write amplification.",
      "Failing to monitor index memory footprint relative to total available RAM."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Auditing Unused Indexes via $indexStats",
        "code": "// Find indexes with 0 access operations:\ndb.events.aggregate([\n  { $indexStats: {} },\n  {\n    $project: {\n      name: 1,\n      key: 1,\n      ops: \"$accesses.ops\",\n      since: \"$accesses.since\"\n    }\n  },\n  { $sort: { ops: 1 } }\n]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "The ESR (Equality, Sort, Range) Rule for Compound Indexes",
    "question": "Explain the ESR (Equality, Sort, Range) rule in MongoDB compound index design with concrete query examples.",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "esr-rule",
      "compound-index",
      "query-optimization"
    ],
    "interviewAnswer": "The ESR Rule dictates the optimal ordering of keys in a compound index: Equality fields first, Sort fields second, and Range/inequality fields last. This order ensures that the index seeks directly to equality matches, returns rows pre-sorted without an in-memory sort, and bounds the scan on the range filter.",
    "answer": "Given a query: `db.orders.find({ status: \"PAID\", orderDate: { $gte: ISODate(\"2026-01-01\") } }).sort({ amount: -1 })`. 1) Equality (E): `status` -> put first `{ status: 1 }`. 2) Sort (S): `amount` -> put second `{ amount: -1 }`. 3) Range (R): `orderDate` -> put last `{ orderDate: 1 }`. Optimal compound index: `{ status: 1, amount: -1, orderDate: 1 }`. If you put Range before Sort (`{ status: 1, orderDate: 1, amount: -1 }`), MongoDB cannot use the index for sorting, forcing a memory-intensive `SORT` stage (which aborts if it exceeds 100MB RAM).",
    "explanation": "Why does S precede R? Once an index scans past a range condition (`orderDate > ...`), the remaining index entries are dispersed across multiple B-Tree branches, destroying the ordering required for `sort()`. Putting Sort before Range allows the B-Tree to stream pre-sorted records while filtering range boundaries.",
    "importantPoints": [
      "Order: Equality keys -> Sort keys -> Range keys.",
      "Putting Range before Sort forces a blocking in-memory SORT stage.",
      "Blocking in-memory sorts fail if result exceeds 100MB (allowDiskUse needed).",
      "ESR guarantees index seek + index sort + minimal doc examination."
    ],
    "commonMistakes": [
      "Placing range fields (like dates or prices) before sort fields in compound indexes.",
      "Assuming Sort direction in compound index doesn't matter (it must match or be exact inverse of query sort).",
      "Relying on allowDiskUse: true for OLTP sorting instead of fixing the index."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Applying ESR Rule",
        "code": "// Query pattern:\n// db.users.find({ country: \"US\", age: { $gte: 21 } }).sort({ score: -1 });\n\n// WRONG INDEX (Violates ESR: Range before Sort forces in-memory SORT stage!):\n// db.users.createIndex({ country: 1, age: 1, score: -1 });\n\n// CORRECT INDEX (ESR: Equality -> Sort -> Range):\ndb.users.createIndex({ country: 1, score: -1, age: 1 });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Multikey Indexes: Mechanics and Restrictions",
    "question": "What is a Multikey Index in MongoDB, how does it index array fields, and what restrictions apply to compound multikey indexes?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "multikey-index",
      "arrays",
      "restrictions"
    ],
    "interviewAnswer": "A Multikey Index is automatically created when an index references an array field; MongoDB creates an index entry for every individual element in the array. Restriction: A compound multikey index CANNOT index more than one array field per document (it would cause an exponential cartesian product of index entries).",
    "answer": "If you create an index on `tags`: `db.articles.createIndex({ tags: 1 })`, inserting `{ tags: [\"mongodb\", \"nosql\", \"database\"] }` generates 3 separate B-Tree index keys for that single document. Compound Restriction: You cannot create an index on `{ tags: 1, categories: 1 }` if documents have arrays for BOTH `tags` and `categories`. MongoDB prevents this because indexing M tags and N categories would generate M * N index keys per document, causing index explosion.",
    "explanation": "However, a compound multikey index CAN have one array field and one scalar field (e.g. `{ userId: 1, tags: 1 }`), which generates only 1 entry per tag for that user.",
    "importantPoints": [
      "Automatically created when an index key references an array.",
      "Generates one B-Tree index key per array element.",
      "Restriction: Cannot compound-index two array fields in the same index.",
      "Permitted: Compound index with one array field and multiple scalar fields."
    ],
    "commonMistakes": [
      "Attempting to index two array fields in a single compound index (fails with error).",
      "Indexing unbounded arrays, causing massive write amplification and index bloat."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Multikey Index Demonstration",
        "code": "// Valid: Compound multikey index (one array, one scalar):\ndb.users.createIndex({ organizationId: 1, roles: 1 });\n\n// FAILS at insert time if both fields contain arrays:\n// db.orders.createIndex({ tags: 1, lineItems: 1 });\n// Error: Cannot index parallel arrays [tags] [lineItems]"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Covering Queries (Covered by Index)",
    "question": "What is a Covered Query in MongoDB, and what conditions must be satisfied for a query to be covered?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "covered-query",
      "performance",
      "optimization"
    ],
    "interviewAnswer": "A Covered Query is satisfied entirely by the B-Tree index keys without reading any documents from the collection data files (totalDocsExamined: 0). Conditions: 1) All fields in the query filter must be in the index; 2) All fields in projection must be in the index; 3) The _id field must be explicitly excluded (_id: 0) unless it is part of the index.",
    "answer": "Covered queries deliver peak performance because WiredTiger skips reading document pages from disk or cache entirely. If you have an index `{ username: 1, email: 1 }`: `db.users.find({ username: \"alex\" }, { username: 1, email: 1, _id: 0 })` is fully covered. In `explain()`, `totalDocsExamined` will be 0 and `totalKeysExamined` will match `nReturned`. If you omit `_id: 0`, MongoDB must fetch the document to get `_id`, breaking the covering optimization.",
    "explanation": "A multikey index (index on an array) CANNOT cover a query because array indexes cannot guarantee exact array ordering without inspecting document boundaries.",
    "importantPoints": [
      "totalDocsExamined is 0 in explain executionStats.",
      "All filtered and projected fields must be in the index.",
      "_id must be explicitly excluded ({ _id: 0 }) unless part of the index key.",
      "Multikey indexes cannot cover queries."
    ],
    "commonMistakes": [
      "Forgetting to add _id: 0 in projection, destroying the covered query optimization.",
      "Expecting a multikey array index to cover a query."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Fully Covered Query Example",
        "code": "// Compound index:\ndb.members.createIndex({ clubId: 1, membershipTier: 1, joinedDate: 1 });\n\n// COVERED QUERY (totalDocsExamined = 0):\ndb.members.find(\n  { clubId: \"CLUB-99\", membershipTier: \"VIP\" },\n  { membershipTier: 1, joinedDate: 1, _id: 0 } // _id explicitly excluded!\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Partial Indexes vs Sparse Indexes",
    "question": "Why are Partial Indexes preferred over Sparse Indexes in modern MongoDB?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "partial-index",
      "sparse-index",
      "trade-offs"
    ],
    "interviewAnswer": "Sparse indexes only check if a field exists ($exists: true). Partial indexes support expressive filter expressions ($gt, $eq, $exists, $type), allowing conditional indexing on specific values (e.g. index where status = \"ACTIVE\" or rating >= 4).",
    "answer": "Sparse indexes were introduced first to omit documents lacking the indexed field. Partial Indexes (`partialFilterExpression`) generalize this: `createIndex({ email: 1 }, { partialFilterExpression: { isVerified: true } })`. Partial indexes consume less RAM, provide fine-grained control, and supersede sparse indexes.",
    "explanation": "Sparse indexes were introduced first to omit documents lacking the indexed field. Partial Indexes (`partialFilterExpression`) generalize this: `createIndex({ email: 1 }, { partialFilterExpression: { isVerified: true } })`. Partial indexes consume less RAM, provide fine-grained control, and supersede sparse indexes.",
    "importantPoints": [
      "Sparse indexes check only field existence.",
      "Partial indexes support comparison operators ($gt, $eq, $exists).",
      "Partial indexes save massive RAM and write overhead."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Partial Indexes vs Sparse Indexes",
        "code": "// Demonstration for: Partial Indexes vs Sparse Indexes\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Compound Index Prefix Matching Rules",
    "question": "If an index is { a: 1, b: 1, c: 1 }, which query filter combinations can use this index for seeks?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "compound-index",
      "prefix-rule"
    ],
    "interviewAnswer": "Queries filtering on (a), (a, b), and (a, b, c) can use the index. Queries filtering only on (b), (c), or (b, c) CANNOT perform an index seek because the leading index prefix (a) is missing.",
    "answer": "Compound indexes adhere to the Leftmost Prefix rule. For `{ a: 1, b: 1, c: 1 }`, the prefixes are: `[a]` and `[a, b]`. Queries on `b` alone cannot navigate the B-Tree root. If queries frequently search `b` alone, a separate index on `b` is required.",
    "explanation": "Compound indexes adhere to the Leftmost Prefix rule. For `{ a: 1, b: 1, c: 1 }`, the prefixes are: `[a]` and `[a, b]`. Queries on `b` alone cannot navigate the B-Tree root. If queries frequently search `b` alone, a separate index on `b` is required.",
    "importantPoints": [
      "Must include leading prefix: (a) or (a, b).",
      "Cannot seek on (b) or (c) without (a).",
      "Reduces need for redundant single-column indexes on leading column."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Compound Index Prefix Matching Rules",
        "code": "// Demonstration for: Compound Index Prefix Matching Rules\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Unique Indexes and Handling of Null/Missing Values",
    "question": "How do UNIQUE indexes handle documents where the indexed field is missing or null?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "unique-index",
      "null-handling",
      "sparse-index"
    ],
    "interviewAnswer": "A unique index treats missing fields as null. Therefore, you can insert only ONE document with a missing/null field! A second insert with a missing field fails with an E11000 duplicate key error. Use a Partial Unique Index to resolve this.",
    "answer": "If you create `createIndex({ ssn: 1 }, { unique: true })`, inserting user 1 with no SSN succeeds (stores null). Inserting user 2 with no SSN fails with duplicate key error. Solution: Create a partial unique index `{ unique: true, partialFilterExpression: { ssn: { $type: \"string\" } } }` so un-supplied SSNs are excluded from the index.",
    "explanation": "If you create `createIndex({ ssn: 1 }, { unique: true })`, inserting user 1 with no SSN succeeds (stores null). Inserting user 2 with no SSN fails with duplicate key error. Solution: Create a partial unique index `{ unique: true, partialFilterExpression: { ssn: { $type: \"string\" } } }` so un-supplied SSNs are excluded from the index.",
    "importantPoints": [
      "Unique indexes treat missing fields as null.",
      "Allows only 1 document with null/missing value by default.",
      "Partial unique indexes allow multiple nulls by indexing only existing values."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Unique Indexes and Handling of Null/Missing Values",
        "code": "// Demonstration for: Unique Indexes and Handling of Null/Missing Values\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Wildcard Indexes ($**) for Dynamic and Polymorphic Schemas",
    "question": "What are Wildcard Indexes in MongoDB 4.2+, and when should you use them?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "wildcard-index",
      "dynamic-schema"
    ],
    "interviewAnswer": "A Wildcard Index ($**) indexes all fields within a document or subdocument (e.g. createIndex({ \"customAttributes.$**\": 1 })). It is designed for arbitrary, dynamic user-defined attributes where predicting field names in advance is impossible.",
    "answer": "In e-commerce product catalogs with thousands of dynamic attributes (`attributes.screenSize`, `attributes.voltage`, `attributes.fabric`), creating individual indexes for each attribute is impossible. A Wildcard Index indexes all paths under `attributes`, allowing queries on any arbitrary sub-property to use index seeks.",
    "explanation": "In e-commerce product catalogs with thousands of dynamic attributes (`attributes.screenSize`, `attributes.voltage`, `attributes.fabric`), creating individual indexes for each attribute is impossible. A Wildcard Index indexes all paths under `attributes`, allowing queries on any arbitrary sub-property to use index seeks.",
    "importantPoints": [
      "Indexes all scalar fields within a dynamic subdocument tree.",
      "Syntax: createIndex({ \"metadata.$**\": 1 }).",
      "Ideal for user-defined custom attributes and polymorphic schemas."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Wildcard Indexes ($**) for Dynamic and Polymorphic Schemas",
        "code": "// Demonstration for: Wildcard Indexes ($**) for Dynamic and Polymorphic Schemas\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Hidden Indexes: Zero-Risk Index Dropping",
    "question": "What is a Hidden Index, and how does it prevent production outages during index refactoring?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "hidden-indexes",
      "maintenance",
      "safety"
    ],
    "interviewAnswer": "A hidden index is invisible to the query optimizer (ignored by find/aggregate), but continues to be maintained on writes. It allows testing the performance impact of dropping an index without actually dropping it, enabling instant rollback if queries degrade.",
    "answer": "`db.orders.hideIndex(\"idx_status\")`. If a hidden index was secretly needed by a production query, you can immediately unhide it with `db.orders.unhideIndex(\"idx_status\")` in 1 millisecond. If you had dropped it, rebuilding the index on 20M documents could take an hour and take down the database.",
    "explanation": "`db.orders.hideIndex(\"idx_status\")`. If a hidden index was secretly needed by a production query, you can immediately unhide it with `db.orders.unhideIndex(\"idx_status\")` in 1 millisecond. If you had dropped it, rebuilding the index on 20M documents could take an hour and take down the database.",
    "importantPoints": [
      "Hidden from query optimizer; maintained on writes.",
      "Reversible in milliseconds without rebuilding B-Tree.",
      "Safe intermediate step prior to permanent index deletion."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Hidden Indexes: Zero-Risk Index Dropping",
        "code": "// Demonstration for: Hidden Indexes: Zero-Risk Index Dropping\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Hybrid Index Builds in MongoDB 4.2+",
    "question": "How do Hybrid Index builds in MongoDB 4.2+ avoid blocking collection reads and writes?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "index-builds",
      "concurrency",
      "wiredtiger"
    ],
    "interviewAnswer": "In MongoDB 4.2+, all index builds use a Hybrid build process that acquires only a brief intent lock at the start and end. During the bulk build, concurrent reads and writes are fully permitted; write operations are intercepted and merged into a side-table buffer.",
    "answer": "Legacy MongoDB had \"foreground\" (exclusive lock) and \"background\" index builds. Modern MongoDB uses Hybrid builds: 1) Brief lock to register index build; 2) Scans collection and writes B-Tree while client writes continue uninterrupted into a side buffer; 3) Drains side buffer into index; 4) Brief lock to commit index to catalog.",
    "explanation": "Legacy MongoDB had \"foreground\" (exclusive lock) and \"background\" index builds. Modern MongoDB uses Hybrid builds: 1) Brief lock to register index build; 2) Scans collection and writes B-Tree while client writes continue uninterrupted into a side buffer; 3) Drains side buffer into index; 4) Brief lock to commit index to catalog.",
    "importantPoints": [
      "Permits concurrent reads and writes throughout the build.",
      "Replaces legacy background and foreground build modes.",
      "Buffers concurrent writes and drains them before committing."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Hybrid Index Builds in MongoDB 4.2+",
        "code": "// Demonstration for: Hybrid Index Builds in MongoDB 4.2+\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Index Intersection vs Compound Indexes",
    "question": "Why is a Compound Index on { a: 1, b: 1 } superior to Index Intersection of separate indexes on { a: 1 } and { b: 1 }?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "index-intersection",
      "compound-index",
      "performance"
    ],
    "interviewAnswer": "Index Intersection must scan two independent B-Trees, load two separate sets of RecordIDs into memory, and compute a bitwise intersection before fetching documents. A compound index navigates directly to the exact (a, b) key in a single B-Tree seek, consuming far less CPU and memory.",
    "answer": "While MongoDB can intersect two single-field indexes using an `AND_SORTED` or `AND_HASH` stage, this is a fallback mechanism. A compound index satisfies the query in a single traversal and can also satisfy sorting and covering projections, which index intersection cannot do.",
    "explanation": "While MongoDB can intersect two single-field indexes using an `AND_SORTED` or `AND_HASH` stage, this is a fallback mechanism. A compound index satisfies the query in a single traversal and can also satisfy sorting and covering projections, which index intersection cannot do.",
    "importantPoints": [
      "Compound index seeks directly in 1 B-Tree pass.",
      "Index intersection scans 2 trees and computes in-memory intersection.",
      "Compound indexes support sorting and covered queries; intersection does not."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Index Intersection vs Compound Indexes",
        "code": "// Demonstration for: Index Intersection vs Compound Indexes\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "TTL Index on Array of Dates",
    "question": "What happens if a TTL index is created on an array field containing multiple dates?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "ttl",
      "multikey-index",
      "expiration"
    ],
    "interviewAnswer": "If a document contains an array of dates, MongoDB expires the document based on the LOWEST (earliest) date in the array.",
    "answer": "In a document `{ eventDates: [ Date(\"2026-01-01\"), Date(\"2026-05-01\") ] }` with a TTL index on `eventDates`, the document expires when the earliest date (Jan 1) plus `expireAfterSeconds` is reached.",
    "explanation": "In a document `{ eventDates: [ Date(\"2026-01-01\"), Date(\"2026-05-01\") ] }` with a TTL index on `eventDates`, the document expires when the earliest date (Jan 1) plus `expireAfterSeconds` is reached.",
    "importantPoints": [
      "Expires based on earliest date in array.",
      "Multikey TTL indexes expire documents once first date passes."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "TTL Index on Array of Dates",
        "code": "// Demonstration for: TTL Index on Array of Dates\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Collated Indexes and Collation Matching Rules",
    "question": "Why will a query fail to use an index if the query and index collations do not match exactly?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "collation",
      "case-insensitive"
    ],
    "interviewAnswer": "B-Tree leaf pages are sorted physically according to the collation rules (locale, strength, caseLevel). A query with a different collation (or default binary collation) requires different sorting logic and cannot navigate the pre-sorted B-Tree, forcing a COLLSCAN.",
    "answer": "If an index is created with `{ collation: { locale: \"fr\", strength: 1 } }`, it stores strings sorted according to French accent-insensitive rules. A query omitting collation uses default binary comparison (comparing ASCII bytes). Because binary sorting does not match French sorting, the index cannot be used.",
    "explanation": "If an index is created with `{ collation: { locale: \"fr\", strength: 1 } }`, it stores strings sorted according to French accent-insensitive rules. A query omitting collation uses default binary comparison (comparing ASCII bytes). Because binary sorting does not match French sorting, the index cannot be used.",
    "importantPoints": [
      "B-Tree physically ordered by specified collation rules.",
      "Query collation must match index collation exactly.",
      "Mismatched collation triggers full collection scan."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Collated Indexes and Collation Matching Rules",
        "code": "// Demonstration for: Collated Indexes and Collation Matching Rules\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "2dsphere Indexes and GeoJSON Object Support",
    "question": "What spatial structures does a 2dsphere index support, and how does it calculate distance on Earth's surface?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "2dsphere",
      "geospatial",
      "wgs84"
    ],
    "interviewAnswer": "A 2dsphere index supports GeoJSON objects (Point, LineString, Polygon, MultiPoint, MultiPolygon) and legacy coordinate pairs. It calculates distances using spherical geometry on a WGS84 Earth ellipsoid.",
    "answer": "Created with `db.places.createIndex({ location: \"2dsphere\" })`. Unlike legacy `2d` flat planar indexes that assume a flat grid, `2dsphere` accounts for the curvature of the Earth, providing accurate spherical geodesic calculations for flight routes and delivery radiuses.",
    "explanation": "Created with `db.places.createIndex({ location: \"2dsphere\" })`. Unlike legacy `2d` flat planar indexes that assume a flat grid, `2dsphere` accounts for the curvature of the Earth, providing accurate spherical geodesic calculations for flight routes and delivery radiuses.",
    "importantPoints": [
      "Supports GeoJSON geometries (Point, LineString, Polygon).",
      "Calculates distance on WGS84 Earth sphere.",
      "Replaces legacy 2d flat index for spherical calculations."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "2dsphere Indexes and GeoJSON Object Support",
        "code": "// Demonstration for: 2dsphere Indexes and GeoJSON Object Support\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Index Key Length Limit and WiredTiger Page Boundaries",
    "question": "Is there a maximum key length limit for indexed fields in modern MongoDB versions?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "key-limit",
      "wiredtiger"
    ],
    "interviewAnswer": "Starting in MongoDB 4.2, the legacy 1,024-byte index key limit was removed. WiredTiger handles arbitrary-length index keys, but very wide keys (> 1KB) bloat index B-Trees, reduce page fan-out, and degrade cache efficiency.",
    "answer": "In older versions (3.x), inserting a document with an indexed field > 1024 bytes threw an indexing error. In MongoDB 4.2+, wide keys are accepted. However, indexing wide strings (e.g. 2KB URLs) wastes RAM; applications should hash long strings (SHA-256) and index the hash instead.",
    "explanation": "In older versions (3.x), inserting a document with an indexed field > 1024 bytes threw an indexing error. In MongoDB 4.2+, wide keys are accepted. However, indexing wide strings (e.g. 2KB URLs) wastes RAM; applications should hash long strings (SHA-256) and index the hash instead.",
    "importantPoints": [
      "Legacy 1024-byte limit removed in MongoDB 4.2+.",
      "Wide index keys reduce B-Tree page fan-out and bloat cache.",
      "Hash long string keys before indexing to preserve cache density."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Index Key Length Limit and WiredTiger Page Boundaries",
        "code": "// Demonstration for: Index Key Length Limit and WiredTiger Page Boundaries\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Text Search Score and Sorting ($meta: \"textScore\")",
    "question": "How do you sort text search results by relevance score in MongoDB?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "text-index",
      "relevance-score"
    ],
    "interviewAnswer": "Project the text score using { score: { $meta: \"textScore\" } } and sort by { score: { $meta: \"textScore\" } } descending.",
    "answer": "`db.articles.find({ $text: { $search: \"kubernetes docker\" } }, { score: { $meta: \"textScore\" } }).sort({ score: { $meta: \"textScore\" } })`. Documents with higher term frequencies and matching title weights appear first.",
    "explanation": "`db.articles.find({ $text: { $search: \"kubernetes docker\" } }, { score: { $meta: \"textScore\" } }).sort({ score: { $meta: \"textScore\" } })`. Documents with higher term frequencies and matching title weights appear first.",
    "importantPoints": [
      "Calculates document relevance based on keyword frequency and weight.",
      "Project and sort using $meta: \"textScore\"."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Text Search Score and Sorting ($meta: \"textScore\")",
        "code": "// Demonstration for: Text Search Score and Sorting ($meta: \"textScore\")\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Text Index Field Weights",
    "question": "How do you assign custom importance weights to different fields in a compound text index?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "text-index",
      "weights"
    ],
    "interviewAnswer": "Specify weights option during index creation: db.articles.createIndex({ title: \"text\", content: \"text\" }, { weights: { title: 10, content: 1 } }). Matches in title will score 10x higher than matches in content.",
    "answer": "By configuring `weights`, words matching the `title` field contribute 10 points to the `$meta: \"textScore\"`, while matches in `content` contribute 1 point, ensuring headline matches rank above body matches.",
    "explanation": "By configuring `weights`, words matching the `title` field contribute 10 points to the `$meta: \"textScore\"`, while matches in `content` contribute 1 point, ensuring headline matches rank above body matches.",
    "importantPoints": [
      "Assigns relative significance to different text fields.",
      "Higher weights inflate $meta: textScore.",
      "Default weight is 1."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Text Index Field Weights",
        "code": "// Demonstration for: Text Index Field Weights\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Index Usage in Regex Queries (Left-Anchored Prefix)",
    "question": "Why does db.users.find({ email: /^admin@/ }) use an index seek, while db.users.find({ email: /admin@/ }) does not?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "regex",
      "sargable"
    ],
    "interviewAnswer": "The caret (^) anchors the search to the start of the string, allowing MongoDB to perform a B-Tree index range seek from \"admin@\" to the next lexicographical boundary. Without the caret, the engine cannot seek and must inspect every index entry.",
    "answer": "In B-Tree indexes, keys are sorted alphabetically. A left-anchored prefix (`/^admin@/`) has a known start point (\"admin@\"). An unanchored regex (`/admin@/`) could appear anywhere in the string, forcing an exhaustive scan.",
    "explanation": "In B-Tree indexes, keys are sorted alphabetically. A left-anchored prefix (`/^admin@/`) has a known start point (\"admin@\"). An unanchored regex (`/admin@/`) could appear anywhere in the string, forcing an exhaustive scan.",
    "importantPoints": [
      "Left-anchored (^string) regex uses B-Tree range seek.",
      "Unanchored (/string/) forces full index/collection scan.",
      "Case-insensitive flag disables range seek unless collation is used."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Index Usage in Regex Queries (Left-Anchored Prefix)",
        "code": "// Demonstration for: Index Usage in Regex Queries (Left-Anchored Prefix)\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Index Prefix Compression in WiredTiger",
    "question": "How does WiredTiger index prefix compression reduce memory consumption?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "compression",
      "prefix-compression",
      "wiredtiger"
    ],
    "interviewAnswer": "WiredTiger compresses sorted index keys by storing common prefixes once per page and storing only the differing suffix for adjacent keys. This reduces index RAM footprint by 50-70% and increases B-Tree leaf page fan-out.",
    "answer": "Enabled by default (`prefixCompression: true`). In an index on `(tenantId, createdAt)`, thousands of adjacent keys share the exact same `tenantId`. Storing only the unique timestamp delta allows 3x more index entries to fit in an 8KB memory page.",
    "explanation": "Enabled by default (`prefixCompression: true`). In an index on `(tenantId, createdAt)`, thousands of adjacent keys share the exact same `tenantId`. Storing only the unique timestamp delta allows 3x more index entries to fit in an 8KB memory page.",
    "importantPoints": [
      "Enabled by default in WiredTiger.",
      "Eliminates redundant leading prefixes on adjacent index keys.",
      "Shrinks index memory footprint and increases cache residency."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Index Prefix Compression in WiredTiger",
        "code": "// Demonstration for: Index Prefix Compression in WiredTiger\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Rebuilding Indexes (reIndex) and Production Lock Impact",
    "question": "Why should db.collection.reIndex() be avoided on production replica sets?",
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "reindex",
      "locks",
      "production-safety"
    ],
    "interviewAnswer": "reIndex() acquires an exclusive lock on the database, completely blocking all read and write traffic for the duration of the rebuild. In replica sets, it does not replicate to secondaries. In production, drop and recreate indexes online using hybrid builds instead.",
    "answer": "`db.collection.reIndex()` is a legacy command that holds an exclusive database write lock, causing application downtime. In modern MongoDB, rebuilding is unnecessary because WiredTiger manages page splits dynamically, or indexes should be dropped and recreated concurrently.",
    "explanation": "`db.collection.reIndex()` is a legacy command that holds an exclusive database write lock, causing application downtime. In modern MongoDB, rebuilding is unnecessary because WiredTiger manages page splits dynamically, or indexes should be dropped and recreated concurrently.",
    "importantPoints": [
      "Acquires exclusive write lock, halting production traffic.",
      "Does not replicate to secondaries.",
      "Deprecated in modern production workflows."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Rebuilding Indexes (reIndex) and Production Lock Impact",
        "code": "// Demonstration for: Rebuilding Indexes (reIndex) and Production Lock Impact\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Indexing Array of Subdocuments (Specific Field vs Whole Subdocument)",
    "question": "Compare indexing \"items.sku\" versus indexing \"items\" on an array of subdocuments.",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "multikey-index",
      "subdocuments"
    ],
    "interviewAnswer": "Indexing \"items.sku\" indexes only the scalar SKU string for each element, which is compact and fast. Indexing \"items\" indexes the entire BSON subdocument, which is huge, sensitive to key ordering, and cannot accelerate queries filtering only on SKU.",
    "answer": "Always index specific nested fields (`\"items.sku\": 1`). Indexing the entire array field (`items: 1`) treats subdocuments as raw BSON blobs, requiring exact byte-for-byte subdocument equality matches and wasting massive index storage.",
    "explanation": "Always index specific nested fields (`\"items.sku\": 1`). Indexing the entire array field (`items: 1`) treats subdocuments as raw BSON blobs, requiring exact byte-for-byte subdocument equality matches and wasting massive index storage.",
    "importantPoints": [
      "Always index specific attributes: \"items.sku\": 1.",
      "Indexing whole subdocument array bloats index size and requires exact key order matching."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Indexing Array of Subdocuments (Specific Field vs Whole Subdocument)",
        "code": "// Demonstration for: Indexing Array of Subdocuments (Specific Field vs Whole Subdocument)\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Sort Without Index (In-Memory Sort 100MB RAM Limit)",
    "question": "What runtime error occurs when a query sorts on an un-indexed field, and what threshold triggers it?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "sort",
      "memory-limit",
      "allowdiskuse"
    ],
    "interviewAnswer": "If an in-memory sort exceeds 100MB of RAM (32MB in older versions), MongoDB aborts the query with: \"Sort exceeded memory limit of 104857600 bytes, but did not allow sorting on disk\". The solution is indexing the sort field or adding allowDiskUse: true.",
    "answer": "When no index matches the `sort()` clause, MongoDB buffers matching documents in memory to sort them. If the buffered data crosses 100MB, the query crashes. Forcing `allowDiskUse: true` spills to disk but is slow; the professional fix is creating an index that matches the sort.",
    "explanation": "When no index matches the `sort()` clause, MongoDB buffers matching documents in memory to sort them. If the buffered data crosses 100MB, the query crashes. Forcing `allowDiskUse: true` spills to disk but is slow; the professional fix is creating an index that matches the sort.",
    "importantPoints": [
      "In-memory sort limited to 100MB of RAM.",
      "Crashes with error if threshold is crossed without index.",
      "Resolved by indexing sort field (ESR rule) or temporary allowDiskUse."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Sort Without Index (In-Memory Sort 100MB RAM Limit)",
        "code": "// Demonstration for: Sort Without Index (In-Memory Sort 100MB RAM Limit)\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Index Filter and Plan Cache Flushing",
    "question": "What is an Index Filter in MongoDB, and how does it override the query optimizer?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "index-filters",
      "plan-cache",
      "optimizer"
    ],
    "interviewAnswer": "An Index Filter restricts the optimizer to evaluating only a specified whitelist of indexes for queries matching a specific shape (planCacheSetFilter). Unlike query hints in application code, Index Filters are configured on the database server without code changes.",
    "answer": "If the optimizer repeatedly chooses a bad index plan for a query shape, DBAs can apply an Index Filter: `planCacheSetFilter` forces the engine to consider only index X and index Y. Applying or removing an index filter immediately flushes the plan cache for that query shape.",
    "explanation": "If the optimizer repeatedly chooses a bad index plan for a query shape, DBAs can apply an Index Filter: `planCacheSetFilter` forces the engine to consider only index X and index Y. Applying or removing an index filter immediately flushes the plan cache for that query shape.",
    "importantPoints": [
      "Overrides optimizer index evaluation at server level.",
      "Requires zero application code modifications.",
      "Flushes plan cache for target query shape."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Index Filter and Plan Cache Flushing",
        "code": "// Demonstration for: Index Filter and Plan Cache Flushing\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Single-Field Index Descending vs Ascending Sorting",
    "question": "Does the sort direction (-1 vs 1) matter when creating a single-field index?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "single-field",
      "sort-direction"
    ],
    "interviewAnswer": "No! For single-field indexes, sort direction does NOT matter because MongoDB can traverse a single-field B-Tree in either forward or reverse direction with identical efficiency. Direction ONLY matters in compound indexes with multiple fields.",
    "answer": "An index on `{ createdAt: 1 }` supports `sort({ createdAt: 1 })` and `sort({ createdAt: -1 })` equally well. In compound indexes, however, mixed directions (e.g. `{ category: 1, score: -1 }`) require matching directions or exact inverse (`{ category: -1, score: 1 }`).",
    "explanation": "An index on `{ createdAt: 1 }` supports `sort({ createdAt: 1 })` and `sort({ createdAt: -1 })` equally well. In compound indexes, however, mixed directions (e.g. `{ category: 1, score: -1 }`) require matching directions or exact inverse (`{ category: -1, score: 1 }`).",
    "importantPoints": [
      "Single-field index can be scanned in either direction.",
      "Direction matters only in compound multi-field indexes."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Single-Field Index Descending vs Ascending Sorting",
        "code": "// Demonstration for: Single-Field Index Descending vs Ascending Sorting\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Sparse Indexes: Missing Field Queries Hazard",
    "question": "Why will `db.users.find({ email: { $exists: false } })` NEVER use a sparse index on email?",
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "sparse-indexes",
      "query-plan",
      "pitfalls"
    ],
    "interviewAnswer": "By definition, a sparse index omits documents that lack the indexed field. Therefore, searching for documents where the field does not exist ($exists: false) cannot use the index because those documents are not in the index! MongoDB forces a full collection scan.",
    "answer": "Sparse indexes only contain entries for documents that possess the field. When querying for documents missing that field, the index has zero knowledge of them. The query optimizer recognizes this and falls back to a COLLSCAN.",
    "explanation": "Sparse indexes only contain entries for documents that possess the field. When querying for documents missing that field, the index has zero knowledge of them. The query optimizer recognizes this and falls back to a COLLSCAN.",
    "importantPoints": [
      "Sparse indexes omit documents lacking the field.",
      "Cannot be used for $exists: false or { field: null } queries.",
      "Forces full collection scan."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Sparse Indexes: Missing Field Queries Hazard",
        "code": "// Demonstration for: Sparse Indexes: Missing Field Queries Hazard\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Unique Compound Indexes",
    "question": "How does a UNIQUE constraint operate on a compound index across multiple fields?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "unique-index",
      "compound-index"
    ],
    "interviewAnswer": "A unique compound index enforces uniqueness on the COMBINATION of the indexed fields, not each field individually. Two documents can have the same value for field A as long as their values for field B differ.",
    "answer": "`db.members.createIndex({ organizationId: 1, email: 1 }, { unique: true })`. User \"alex@example.com\" can exist in Organization 1 and Organization 2, but cannot be added twice to Organization 1.",
    "explanation": "`db.members.createIndex({ organizationId: 1, email: 1 }, { unique: true })`. User \"alex@example.com\" can exist in Organization 1 and Organization 2, but cannot be added twice to Organization 1.",
    "importantPoints": [
      "Enforces uniqueness on composite tuple (A + B).",
      "Allows duplicate values across individual fields.",
      "Standard for multi-tenant unique constraints."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Unique Compound Indexes",
        "code": "// Demonstration for: Unique Compound Indexes\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Drop Index Syntax and Precautions",
    "question": "How do you safely drop an index by name in MongoDB, and what index can never be dropped?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "drop-index",
      "safety"
    ],
    "interviewAnswer": "Use db.collection.dropIndex(\"index_name\"). The default primary key index on _id (_id_) can NEVER be dropped.",
    "answer": "`db.orders.dropIndex(\"status_1_createdAt_-1\")`. In replica sets, dropping an index on the primary propagates to secondaries via the oplog. The `_id_` index is fundamental to document addressing and cannot be dropped.",
    "explanation": "`db.orders.dropIndex(\"status_1_createdAt_-1\")`. In replica sets, dropping an index on the primary propagates to secondaries via the oplog. The `_id_` index is fundamental to document addressing and cannot be dropped.",
    "importantPoints": [
      "dropIndex(\"index_name\") removes secondary index.",
      "_id_ index is immutable and cannot be dropped.",
      "Propagates to replica set secondaries."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Drop Index Syntax and Precautions",
        "code": "// Demonstration for: Drop Index Syntax and Precautions\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Index Name Length and Renaming",
    "question": "Can you rename an index in MongoDB without dropping and recreating it?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "naming",
      "rebuild"
    ],
    "interviewAnswer": "No, MongoDB does not support renaming existing indexes. To rename an index, you must build the new index with the desired name and then drop the old index.",
    "answer": "Index names default to concatenating field names and directions (`status_1_date_-1`). Custom names can be assigned via `{ name: \"idx_orders_status\" }` at creation time. Renaming requires creating the new index first (to avoid downtime) and then dropping the old one.",
    "explanation": "Index names default to concatenating field names and directions (`status_1_date_-1`). Custom names can be assigned via `{ name: \"idx_orders_status\" }` at creation time. Renaming requires creating the new index first (to avoid downtime) and then dropping the old one.",
    "importantPoints": [
      "Indexes cannot be renamed in place.",
      "Create new index before dropping old index for zero downtime."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Index Name Length and Renaming",
        "code": "// Demonstration for: Index Name Length and Renaming\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Impact of Shard Key on Secondary Indexes",
    "question": "Why must unique secondary indexes in a sharded cluster contain the Shard Key?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "sharding",
      "unique-index",
      "shard-key"
    ],
    "interviewAnswer": "Because shards are independent replica sets, a shard can only enforce uniqueness within its own local data partition. To enforce global uniqueness without cross-shard distributed locking on every write, the unique index must contain the shard key (or be on the shard key itself).",
    "answer": "If collection is sharded by `tenantId`, a unique index on `{ email: 1 }` fails to create because Shard 1 cannot verify if Shard 2 has that email without an expensive cross-cluster distributed lock. A unique compound index on `{ tenantId: 1, email: 1 }` succeeds because all documents for a tenant reside on the same shard.",
    "explanation": "If collection is sharded by `tenantId`, a unique index on `{ email: 1 }` fails to create because Shard 1 cannot verify if Shard 2 has that email without an expensive cross-cluster distributed lock. A unique compound index on `{ tenantId: 1, email: 1 }` succeeds because all documents for a tenant reside on the same shard.",
    "importantPoints": [
      "Shards enforce uniqueness locally on their own partition.",
      "Unique secondary indexes must be prefixed with or include the Shard Key.",
      "Prevents cross-shard distributed locking bottlenecks."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Impact of Shard Key on Secondary Indexes",
        "code": "// Demonstration for: Impact of Shard Key on Secondary Indexes\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Indexing Embedded Subdocument Fields with Dot Notation",
    "question": "How does indexing an embedded subdocument field (e.g. address.city) work in MongoDB?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "dot-notation",
      "subdocuments"
    ],
    "interviewAnswer": "Create an index targeting the dotted path: db.users.createIndex({ \"address.city\": 1 }). It creates a standard B-Tree index on that scalar nested string, enabling direct seeks for queries like find({ \"address.city\": \"London\" }).",
    "answer": "Targeting specific nested fields via dot notation creates a lightweight index. Unlike indexing the whole `{ address: 1 }` object, indexing `\"address.city\"` evaluates only the city string, remaining small, efficient, and immune to key ordering differences in the surrounding address subdocument.",
    "explanation": "Targeting specific nested fields via dot notation creates a lightweight index. Unlike indexing the whole `{ address: 1 }` object, indexing `\"address.city\"` evaluates only the city string, remaining small, efficient, and immune to key ordering differences in the surrounding address subdocument.",
    "importantPoints": [
      "Target dotted string: db.users.createIndex({ \"address.city\": 1 }).",
      "Indexes only the scalar child value, keeping B-Tree compact.",
      "Immune to key ordering variations in the parent subdocument."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Indexing Embedded Subdocument Fields with Dot Notation",
        "code": "// Demonstration for: Indexing Embedded Subdocument Fields with Dot Notation\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Indexing Entire Subdocuments vs Dotted Fields",
    "question": "Why is creating an index on an entire subdocument ({ address: 1 }) almost always an anti-pattern?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "subdocuments",
      "anti-pattern"
    ],
    "interviewAnswer": "An index on { address: 1 } indexes the raw binary subdocument blob in exact key order. It CANNOT be used by queries that filter on a specific field (find({ \"address.city\": \"Paris\" })), and only works for exact byte-for-byte subdocument equality matches with matching key order.",
    "answer": "If you index `{ address: 1 }`, the B-Tree stores `{ street: \"123 Main\", city: \"Paris\" }`. If a query asks for `find({ \"address.city\": \"Paris\" })`, MongoDB cannot use the index and performs a full collection scan! Always index the individual dotted paths instead.",
    "explanation": "If you index `{ address: 1 }`, the B-Tree stores `{ street: \"123 Main\", city: \"Paris\" }`. If a query asks for `find({ \"address.city\": \"Paris\" })`, MongoDB cannot use the index and performs a full collection scan! Always index the individual dotted paths instead.",
    "importantPoints": [
      "Whole subdocument index requires exact byte-for-byte equality matches.",
      "Cannot be used by queries filtering on nested child properties.",
      "Always index specific dotted fields instead."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Indexing Entire Subdocuments vs Dotted Fields",
        "code": "// Demonstration for: Indexing Entire Subdocuments vs Dotted Fields\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Why a Single-Field Index on a Boolean is an Anti-Pattern",
    "question": "Why is creating a single-field index on a boolean column (e.g. { isActive: 1 }) generally useless?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "boolean",
      "cardinality",
      "selectivity"
    ],
    "interviewAnswer": "A boolean field has extremely low cardinality (only 2 distinct values: true and false). An index on isActive has poor selectivity; matching ~50% of the collection forces the query optimizer to choose a full collection scan instead of thousands of random index seeks. Use a Partial Index instead.",
    "answer": "An index is effective when it prunes the search space down to < 5-10% of rows. If 50% of users are active, scanning the index and doing 500,000 random document lookups is slower than a sequential collection scan. If queries filter `isActive: true`, build a Partial Index or place `isActive` as a secondary key in a compound index.",
    "explanation": "An index is effective when it prunes the search space down to < 5-10% of rows. If 50% of users are active, scanning the index and doing 500,000 random document lookups is slower than a sequential collection scan. If queries filter `isActive: true`, build a Partial Index or place `isActive` as a secondary key in a compound index.",
    "importantPoints": [
      "Boolean fields have minimal cardinality (2 values).",
      "Low selectivity causes optimizer to bypass the index.",
      "Use Partial Indexes or include in compound indexes instead."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Why a Single-Field Index on a Boolean is an Anti-Pattern",
        "code": "// Demonstration for: Why a Single-Field Index on a Boolean is an Anti-Pattern\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Compound Index Direction with 3 Columns",
    "question": "For an index on { a: 1, b: -1, c: 1 }, which sort clauses can be satisfied without an in-memory sort?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "compound-index",
      "sort-direction"
    ],
    "interviewAnswer": "It can satisfy sorts matching the exact direction ({ a: 1, b: -1, c: 1 }) OR the exact inverse direction ({ a: -1, b: 1, c: -1 }). Any other combination (e.g. { a: 1, b: 1, c: 1 }) CANNOT use the index for sorting and requires an in-memory sort.",
    "answer": "Because B-Trees are linked bidirectionally, an index can be traversed forward or backward. Scanning forward satisfies `{ a: 1, b: -1, c: 1 }`. Scanning in reverse satisfies the inverted signs: `{ a: -1, b: 1, c: -1 }`. Mixed permutations that do not match forward or inverted traversal cannot use the B-Tree for ordering.",
    "explanation": "Because B-Trees are linked bidirectionally, an index can be traversed forward or backward. Scanning forward satisfies `{ a: 1, b: -1, c: 1 }`. Scanning in reverse satisfies the inverted signs: `{ a: -1, b: 1, c: -1 }`. Mixed permutations that do not match forward or inverted traversal cannot use the B-Tree for ordering.",
    "importantPoints": [
      "Supports exact forward direction: { a: 1, b: -1, c: 1 }.",
      "Supports exact inverse direction: { a: -1, b: 1, c: -1 }.",
      "Other combinations trigger an in-memory SORT stage."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Compound Index Direction with 3 Columns",
        "code": "// Demonstration for: Compound Index Direction with 3 Columns\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Wildcard Index Path Exclusion (wildcardProjection)",
    "question": "How do you create a Wildcard Index that indexes all fields EXCEPT specific sensitive attributes like passwords?",
    "difficulty": "hard",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "wildcard-index",
      "wildcardprojection"
    ],
    "interviewAnswer": "Use the wildcardProjection option in createIndex: db.records.createIndex({ \"$**\": 1 }, { wildcardProjection: { \"password\": 0, \"secretToken\": 0 } });",
    "answer": "Wildcard indexes can index an entire collection (`\"$**\": 1`). To avoid bloating the index with large binary fields or sensitive security tokens, `wildcardProjection` specifies an inclusion or exclusion list. Specifying exclusions omits those keys from the B-Tree index entirely.",
    "explanation": "Wildcard indexes can index an entire collection (`\"$**\": 1`). To avoid bloating the index with large binary fields or sensitive security tokens, `wildcardProjection` specifies an inclusion or exclusion list. Specifying exclusions omits those keys from the B-Tree index entirely.",
    "importantPoints": [
      "wildcardProjection controls which paths under $** are indexed.",
      "Can exclude sensitive or high-bloat fields.",
      "Reduces index storage and memory consumption."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Wildcard Index Path Exclusion (wildcardProjection)",
        "code": "// Demonstration for: Wildcard Index Path Exclusion (wildcardProjection)\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Using hint() to Override the Query Optimizer",
    "question": "How and when should the hint() method be used in MongoDB queries?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "hint",
      "optimizer",
      "override"
    ],
    "interviewAnswer": "hint() forces MongoDB to use a specific index (e.g. find().hint({ status: 1, date: -1 })). It is used to test performance during debugging or as an emergency production fix when the optimizer selects a suboptimal plan due to plan cache corruption.",
    "answer": "The query optimizer selects winning plans based on empirical trial runs. Occasionally, a plan cache regression causes it to choose a slow index. Adding `.hint(\"index_name\")` bypasses the plan cache and forces the designated index. Warning: hint() is brittle; if the index is dropped or schema changes, the query fails.",
    "explanation": "The query optimizer selects winning plans based on empirical trial runs. Occasionally, a plan cache regression causes it to choose a slow index. Adding `.hint(\"index_name\")` bypasses the plan cache and forces the designated index. Warning: hint() is brittle; if the index is dropped or schema changes, the query fails.",
    "importantPoints": [
      "Forces optimizer to use designated index: .hint({ key: 1 }).",
      "Passing .hint({ $natural: 1 }) forces a forward collection scan.",
      "Brittle: Fails if the index is renamed or dropped."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Using hint() to Override the Query Optimizer",
        "code": "// Demonstration for: Using hint() to Override the Query Optimizer\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Working Set Sizing and Index Memory Footprint",
    "question": "What is the \"Working Set\" in MongoDB, and what happens when the working set exceeds available RAM?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "working-set",
      "memory",
      "page-faults"
    ],
    "interviewAnswer": "The Working Set consists of the active data and index pages frequently accessed by client queries. When the working set exceeds available WiredTiger RAM, the database experiences high page-fault rates, thrashing disk I/O to read cold pages and causing latency spikes.",
    "answer": "A healthy MongoDB cluster keeps all active indexes plus hot data pages in memory. Total index size across all collections can be checked via `db.stats().indexSize`. If `indexSize` alone exceeds WiredTiger cache, every single index seek requires a physical disk read, causing query latency to surge from 1ms to 50ms+.",
    "explanation": "A healthy MongoDB cluster keeps all active indexes plus hot data pages in memory. Total index size across all collections can be checked via `db.stats().indexSize`. If `indexSize` alone exceeds WiredTiger cache, every single index seek requires a physical disk read, causing query latency to surge from 1ms to 50ms+.",
    "importantPoints": [
      "Working Set = Hot data pages + Active index pages.",
      "Total index size should comfortably fit within WiredTiger cache.",
      "Check indexSize via db.stats()."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Working Set Sizing and Index Memory Footprint",
        "code": "// Demonstration for: Working Set Sizing and Index Memory Footprint\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Text Index Language Overrides per Document",
    "question": "How do you index multi-lingual documents where each document specifies its own language for text search stemming?",
    "difficulty": "hard",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "text-index",
      "language-override",
      "i18n"
    ],
    "interviewAnswer": "Create the text index with language_override: db.quotes.createIndex({ content: \"text\" }, { language_override: \"lang\" }); Each document can store its language code (e.g. lang: \"french\", lang: \"spanish\") to apply appropriate word stemming.",
    "answer": "By default, text indexes use English stemming rules. By specifying `language_override: \"docLanguage\"`, MongoDB inspects the `docLanguage` field of each incoming document and applies the correct language stemmer (French, German, Spanish) during indexing and search.",
    "explanation": "By default, text indexes use English stemming rules. By specifying `language_override: \"docLanguage\"`, MongoDB inspects the `docLanguage` field of each incoming document and applies the correct language stemmer (French, German, Spanish) during indexing and search.",
    "importantPoints": [
      "Enables multi-lingual stemming in a single text index.",
      "Documents specify language in the override field.",
      "Default language is English unless overridden."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Text Index Language Overrides per Document",
        "code": "// Demonstration for: Text Index Language Overrides per Document\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "2d Flat Planar vs 2dsphere Index Differences",
    "question": "When is a legacy 2d index used instead of a 2dsphere index?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "2d",
      "2dsphere",
      "geospatial"
    ],
    "interviewAnswer": "A 2d index is for flat Euclidean 2D planar coordinates (like video game maps, warehouse grid floors, or chessboards). A 2dsphere index is for spherical Earth geometries (GeoJSON) accounting for Earth curvature.",
    "answer": "If you are building an indoor warehouse robot routing system with flat Cartesian (x, y) coordinates from (0, 0) to (1000, 1000), a `2d` index is mathematically correct. For real-world geographic coordinates (latitude and longitude on Earth), `2dsphere` is mandatory.",
    "explanation": "If you are building an indoor warehouse robot routing system with flat Cartesian (x, y) coordinates from (0, 0) to (1000, 1000), a `2d` index is mathematically correct. For real-world geographic coordinates (latitude and longitude on Earth), `2dsphere` is mandatory.",
    "importantPoints": [
      "2d: Flat Euclidean planar grid (game maps, indoor layouts).",
      "2dsphere: Spherical Earth calculations (WGS84 ellipsoid).",
      "GeoJSON objects require 2dsphere."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "2d Flat Planar vs 2dsphere Index Differences",
        "code": "// Demonstration for: 2d Flat Planar vs 2dsphere Index Differences\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Index Selectivity and the totalKeysExamined Metric",
    "question": "What does a high ratio of totalKeysExamined to nReturned indicate in an explain plan?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "explain",
      "selectivity",
      "totalkeysexamined"
    ],
    "interviewAnswer": "It indicates poor index selectivity. The database had to scan hundreds or thousands of index keys to find a few matching documents. The index is too broad and should be redesigned into a composite index including secondary filter fields.",
    "answer": "If `totalKeysExamined = 50,000` and `nReturned = 5`, MongoDB scanned 50,000 B-Tree keys only to discard 99.99% of them during range evaluation. A tighter compound index matching the query predicates reduces `totalKeysExamined` to 5.",
    "explanation": "If `totalKeysExamined = 50,000` and `nReturned = 5`, MongoDB scanned 50,000 B-Tree keys only to discard 99.99% of them during range evaluation. A tighter compound index matching the query predicates reduces `totalKeysExamined` to 5.",
    "importantPoints": [
      "Ideal totalKeysExamined / nReturned ratio is ~1.0.",
      "High ratio indicates index is scanning non-matching ranges.",
      "Requires compound index with higher selectivity."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Index Selectivity and the totalKeysExamined Metric",
        "code": "// Demonstration for: Index Selectivity and the totalKeysExamined Metric\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Index Usage in Aggregation Pipelines ($match and $sort)",
    "question": "When can an aggregation pipeline use indexes, and what pipeline stages prevent index usage?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "aggregation",
      "pipeline",
      "optimization"
    ],
    "interviewAnswer": "An aggregation pipeline can use indexes ONLY if the $match and/or $sort stages appear at the VERY BEGINNING of the pipeline. Once a stage modifies or reshapes documents (like $project, $group, $unwind), subsequent stages CANNOT use indexes and must perform in-memory scans.",
    "answer": "Indexes operate on physical collection storage. If stage 1 is `$project` or `$unwind`, the output is an in-memory document stream, not physical collection rows. Therefore, a subsequent `$match` or `$sort` cannot use collection B-Tree indexes. Rule: Always place `$match` and `$sort` as the first stages.",
    "explanation": "Indexes operate on physical collection storage. If stage 1 is `$project` or `$unwind`, the output is an in-memory document stream, not physical collection rows. Therefore, a subsequent `$match` or `$sort` cannot use collection B-Tree indexes. Rule: Always place `$match` and `$sort` as the first stages.",
    "importantPoints": [
      "$match and $sort can use indexes only at the start of the pipeline.",
      "Transformative stages ($project, $group, $unwind) break index usage.",
      "Always filter ($match) as early as possible."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Index Usage in Aggregation Pipelines ($match and $sort)",
        "code": "// Demonstration for: Index Usage in Aggregation Pipelines ($match and $sort)\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Clustered Indexes on _id in MongoDB 5.3+",
    "question": "How do you create a Clustered Collection in MongoDB, and what are the performance benefits?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "clustered-index",
      "performance",
      "mongodb-5-3"
    ],
    "interviewAnswer": "Create with clusteredIndex option: db.createCollection(\"logs\", { clusteredIndex: { key: { _id: 1 }, unique: true } }). It physically orders documents in the _id B-Tree leaf pages, reducing collection storage size, improving bulk insert throughput, and accelerating _id range queries.",
    "answer": "Standard collections store documents in unordered data files and maintain a separate index on `_id`. A clustered collection stores the entire document directly inside the `_id` index leaf blocks. This eliminates secondary pointer traversals, reduces disk space, and speeds up range queries on `_id`.",
    "explanation": "Standard collections store documents in unordered data files and maintain a separate index on `_id`. A clustered collection stores the entire document directly inside the `_id` index leaf blocks. This eliminates secondary pointer traversals, reduces disk space, and speeds up range queries on `_id`.",
    "importantPoints": [
      "Documents stored directly in index leaf pages.",
      "Requires unique: true on clustered key.",
      "Reduces disk space and speeds up sequential writes."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Clustered Indexes on _id in MongoDB 5.3+",
        "code": "// Demonstration for: Clustered Indexes on _id in MongoDB 5.3+\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Checking Index Usage Statistics with $indexStats",
    "question": "How do you use $indexStats to detect which indexes are never used in production?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "indexstats",
      "monitoring",
      "maintenance"
    ],
    "interviewAnswer": "db.collection.aggregate([{ $indexStats: {} }]). It returns every index on the collection along with accesses.ops (count of query operations that used the index) and accesses.since (timestamp when tracking started).",
    "answer": "`db.orders.aggregate([{ $indexStats: {} }, { $project: { name: 1, \"accesses.ops\": 1, \"accesses.since\": 1 } }])`. Any index where `accesses.ops === 0` across weeks of production traffic is dead weight and should be dropped.",
    "explanation": "`db.orders.aggregate([{ $indexStats: {} }, { $project: { name: 1, \"accesses.ops\": 1, \"accesses.since\": 1 } }])`. Any index where `accesses.ops === 0` across weeks of production traffic is dead weight and should be dropped.",
    "importantPoints": [
      "$indexStats returns usage metrics per index.",
      "accesses.ops tracks total query seeks using the index.",
      "Essential tool for identifying and purging unused indexes."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Checking Index Usage Statistics with $indexStats",
        "code": "// Demonstration for: Checking Index Usage Statistics with $indexStats\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Partial Index with $type and $gt Conditions",
    "question": "Write a partial index definition that indexes only documents where rating is a number and greater than 4.",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "partial-index",
      "syntax"
    ],
    "interviewAnswer": "db.reviews.createIndex({ rating: 1, author: 1 }, { partialFilterExpression: { rating: { $type: \"number\", $gt: 4 } } });",
    "answer": "`partialFilterExpression` accepts comparison operators (`$gt, $gte, $lt, $lte, $eq`), `$exists`, and `$type`. Queries that query `rating: { $gt: 4 }` use this compact index, skipping all low-rated reviews.",
    "explanation": "`partialFilterExpression` accepts comparison operators (`$gt, $gte, $lt, $lte, $eq`), `$exists`, and `$type`. Queries that query `rating: { $gt: 4 }` use this compact index, skipping all low-rated reviews.",
    "importantPoints": [
      "Restricts index to rating > 4 and numeric type.",
      "Query filter must be a subset of the partial filter expression.",
      "Saves massive index RAM on low-value data."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Partial Index with $type and $gt Conditions",
        "code": "// Demonstration for: Partial Index with $type and $gt Conditions\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Descending vs Ascending Index Sorting on Single Field",
    "question": "Why does MongoDB documentation say createIndex({ date: -1 }) is identical in query capability to createIndex({ date: 1 })?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "single-field",
      "sorting"
    ],
    "interviewAnswer": "Because a B-Tree index has bidirectional pointers linking adjacent leaf blocks. MongoDB can traverse a single-field index forward (ascending) or backward (descending) with identical performance.",
    "answer": "Traversing a single-field B-Tree from lowest to highest produces ascending results; traversing from highest to lowest produces descending results. Single-field sort direction is completely interchangeable.",
    "explanation": "Traversing a single-field B-Tree from lowest to highest produces ascending results; traversing from highest to lowest produces descending results. Single-field sort direction is completely interchangeable.",
    "importantPoints": [
      "B-Trees are doubly linked at leaf nodes.",
      "Single-field indexes support both ASC and DESC scans equally."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Descending vs Ascending Index Sorting on Single Field",
        "code": "// Demonstration for: Descending vs Ascending Index Sorting on Single Field\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Indexing Decimal128 Fields for Numeric Sorting",
    "question": "How does MongoDB index and sort mixed numeric types (Int32, Int64, Double, Decimal128)?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "numeric-types",
      "bson-types",
      "sorting"
    ],
    "interviewAnswer": "MongoDB treats all BSON numeric types (Int32, Int64, Double, Decimal128) as a single comparable numeric type family. An index on a numeric field sorts them together in mathematical numeric order, regardless of underlying BSON type.",
    "answer": "Unlike string comparisons where types must match, MongoDB numeric sorting is mathematically accurate across types: `NumberInt(1) < NumberDouble(1.5) < NumberDecimal(\"2.0\") < NumberLong(3)`. An index on `price` indexes and sorts all numeric variants seamlessly.",
    "explanation": "Unlike string comparisons where types must match, MongoDB numeric sorting is mathematically accurate across types: `NumberInt(1) < NumberDouble(1.5) < NumberDecimal(\"2.0\") < NumberLong(3)`. An index on `price` indexes and sorts all numeric variants seamlessly.",
    "importantPoints": [
      "All numeric BSON types are compared mathematically.",
      "Index on numeric field seamlessly sorts across Int, Long, Double, Decimal128."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Indexing Decimal128 Fields for Numeric Sorting",
        "code": "// Demonstration for: Indexing Decimal128 Fields for Numeric Sorting\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Compound Index with Array and Scalar Fields",
    "question": "If you create an index on { category: 1, tags: 1 } where tags is an array, how does MongoDB index the combinations?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "multikey-index",
      "compound-index"
    ],
    "interviewAnswer": "For each element in the tags array, MongoDB pairs the scalar category value with that specific tag element in the index. If a document has 3 tags, it creates 3 compound index entries: (category, tag1), (category, tag2), (category, tag3).",
    "answer": "This is a valid compound multikey index. Because `category` is a scalar and only `tags` is an array, the number of index keys equals the length of the `tags` array. Queries filtering `{ category: \"tech\", tags: \"mongodb\" }` seek directly to that exact compound entry.",
    "explanation": "This is a valid compound multikey index. Because `category` is a scalar and only `tags` is an array, the number of index keys equals the length of the `tags` array. Queries filtering `{ category: \"tech\", tags: \"mongodb\" }` seek directly to that exact compound entry.",
    "importantPoints": [
      "Allowed: One array field combined with scalar fields.",
      "Generates 1 compound index key per array element.",
      "Enables fast multi-attribute array lookups."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Compound Index with Array and Scalar Fields",
        "code": "// Demonstration for: Compound Index with Array and Scalar Fields\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Dropping Redundant Indexes to Boost Write Performance",
    "question": "If an index on { tenantId: 1, userId: 1 } exists, is a separate index on { tenantId: 1 } redundant?",
    "difficulty": "easy",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "redundant-indexes",
      "optimization"
    ],
    "interviewAnswer": "Yes, 100% redundant! The compound index { tenantId: 1, userId: 1 } has tenantId as its leftmost prefix. Any query filtering on tenantId alone can use the compound index. The single-field index should be dropped immediately to save RAM and write overhead.",
    "answer": "Because compound indexes support prefix queries, `{ tenantId: 1, userId: 1 }` completely satisfies queries searching `{ tenantId }`. Keeping both indexes forces MongoDB to update two separate B-Trees on every insert, doubling write cost for zero benefit.",
    "explanation": "Because compound indexes support prefix queries, `{ tenantId: 1, userId: 1 }` completely satisfies queries searching `{ tenantId }`. Keeping both indexes forces MongoDB to update two separate B-Trees on every insert, doubling write cost for zero benefit.",
    "importantPoints": [
      "Leading prefix renders single-field index redundant.",
      "Drop redundant indexes to recover write throughput and memory.",
      "Always audit indexes for overlapping prefixes."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Dropping Redundant Indexes to Boost Write Performance",
        "code": "// Demonstration for: Dropping Redundant Indexes to Boost Write Performance\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Impact of Index Builds on Secondary Replication Lag",
    "question": "How do index builds on the primary affect replica set secondaries in modern MongoDB?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "replication",
      "oplog",
      "replica-lag"
    ],
    "interviewAnswer": "In MongoDB 4.2+, index builds replicate via the oplog and run simultaneously on secondaries as hybrid builds. However, on secondaries with weaker hardware or high read traffic, the CPU and I/O load of building the index can cause replication lag.",
    "answer": "Index builds coordinate across the replica set: the primary starts the build, records start markers in the oplog, and secondaries build the index concurrently. Secondaries commit the index build once the primary commits it. If secondaries lag, use rolling index builds (taking one secondary offline at a time to build standalone) on massive collections.",
    "explanation": "Index builds coordinate across the replica set: the primary starts the build, records start markers in the oplog, and secondaries build the index concurrently. Secondaries commit the index build once the primary commits it. If secondaries lag, use rolling index builds (taking one secondary offline at a time to build standalone) on massive collections.",
    "importantPoints": [
      "Hybrid index builds replicate and execute concurrently on secondaries.",
      "Can cause replication lag on under-provisioned secondaries.",
      "Rolling index build pattern used for multi-terabyte collections."
    ],
    "commonMistakes": [
      "Neglecting index prefixes or misunderstanding ESR ordering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Impact of Index Builds on Secondary Replication Lag",
        "code": "// Demonstration for: Impact of Index Builds on Secondary Replication Lag\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "indexes",
    "title": "Unique Partial Indexes: Enforcing Uniqueness for Soft-Deleted Schemas",
    "question": "How can you enforce uniqueness on a field (such as email) while allowing multiple soft-deleted records with the same email using a Unique Partial Index?",
    "difficulty": "hard",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "indexes",
      "unique-index",
      "partial-index",
      "soft-delete"
    ],
    "interviewAnswer": "In schemas with soft deletion (e.g., deletedAt: null or isDeleted: false), a standard unique index rejects recreating an account with a previously deleted email. A Unique Partial Index ({ email: 1 }, { unique: true, partialFilterExpression: { deletedAt: null } }) enforces uniqueness ONLY among active documents where deletedAt is null, effortlessly allowing any number of historical deleted records.",
    "answer": "By combining { unique: true } with partialFilterExpression, MongoDB evaluates uniqueness constraints strictly on the subset of documents satisfying the filter expression. For soft deletes, configuring partialFilterExpression ensures that only active records occupy the unique index B-Tree, preventing duplicate key errors when re-registering an account previously soft-deleted.",
    "explanation": "Before partial indexes were introduced in MongoDB 3.2, developers had to append timestamps to emails upon deletion or maintain separate active/archive collections. Unique partial indexes solve this cleanly at the database engine level.",
    "importantPoints": [
      "Enforces uniqueness strictly on active/non-deleted documents.",
      "Allows unlimited soft-deleted documents with the same unique field value.",
      "Saves B-tree memory by excluding soft-deleted documents from the unique index.",
      "Queries must include deletedAt: null to benefit from the partial index."
    ],
    "commonMistakes": [
      "Using a standard unique index with soft deletes, which throws E11000 duplicate key error when restoring or re-registering.",
      "Writing queries without the partialFilterExpression predicate, triggering a COLLSCAN."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Creating a Unique Partial Index for Soft-Deleted Records",
        "code": "// Create unique partial index on email for active users only:\ndb.users.createIndex(\n  { email: 1 },\n  {\n    unique: true,\n    partialFilterExpression: { deletedAt: null }\n  }\n);\n\n// Query utilizing the partial unique index:\ndb.users.find({ email: \"alice@example.com\", deletedAt: null });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
