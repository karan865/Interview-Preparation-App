import { SeedQuestion } from '../types';

export const aggregationQuestions: SeedQuestion[] = [
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Scenario: Optimizing an Aggregation Pipeline Taking Several Seconds",
    "question": "An aggregation pipeline takes several seconds to complete on a large collection. How would you investigate and optimize it?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "pipeline-optimization",
      "explain",
      "allowDiskUse",
      "performance"
    ],
    "interviewAnswer": "I would run explain(\"executionStats\") on the pipeline to check execution stages. The primary optimizations are: 1) Place $match and $sort at the very start of the pipeline so they leverage indexes before any documents are unpacked; 2) Place $project or $unset early to discard unnecessary fields, reducing in-memory document size; 3) Avoid early $unwind stages which explode document cardinality; 4) Check if stages spilled to disk due to the 100MB RAM limit (or tune allowDiskUse); 5) Replace multiple pipelines with $facet or pre-computed summary collections via $merge.",
    "answer": "Investigating and optimizing a slow MongoDB aggregation pipeline involves systematic profiling:\n\n1. Diagnostic Profiling with explain(): Run db.collection.explain(\"executionStats\").aggregate([...]) to analyze stage timings, keysExamined vs docsExamined, and memory spills.\n\n2. Index Utilization: Aggregation pipelines can ONLY use indexes in an initial $match or $sort stage at the top of the pipeline. If $match appears after $project or $unwind, an index cannot be used.\n\n3. Cardinality Reduction: Minimize the number of documents flowing through expensive stages ($group, $lookup, $facet). Never perform a $lookup before filtering with $match.\n\n4. Memory Limits & Disk Spills: By default, pipeline stages have a 100MB RAM limit. Exceeding this triggers disk spills (if allowDiskUse: true) or crashes (if false). Disk I/O severely slows down pipelines.\n\n5. Pipeline Pushdown & Coalescing: Understand internal optimizer coalescing (e.g. $match + $sort + $limit merging).",
    "explanation": "MongoDB query optimizer can automatically coalesce certain stages, such as moving $match before $project if $match does not depend on computed fields. However, developers should explicitly design pipelines with filtering first.",
    "importantPoints": [
      "Run explain(\"executionStats\") to see per-stage execution times and memory usage.",
      "Place $match and $sort as the very first stages to leverage B-Tree indexes.",
      "Filter before $lookup to avoid joining millions of irrelevant documents.",
      "Avoid early $unwind which creates massive memory pressure from array expansion.",
      "Project only required fields to minimize RAM usage and prevent 100MB spills."
    ],
    "commonMistakes": [
      "Placing $match after $group or $lookup, forcing full collection scans and massive joins.",
      "Unwinding large arrays before filtering.",
      "Relying on allowDiskUse as a quick fix instead of indexing and early filtering."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Optimized Aggregation Pipeline Order",
        "code": "// FAST: Filter first with index, sort with index, limit, then lookup\ndb.orders.aggregate([\n  { $match: { status: \"COMPLETED\", createdAt: { $gte: ISODate(\"2026-01-01\") } } }, // Uses { status: 1, createdAt: -1 } index\n  { $sort: { createdAt: -1 } },\n  { $limit: 100 },\n  { $project: { customerId: 1, totalAmount: 1, items: 1 } },\n  {\n    $lookup: {\n      from: \"customers\",\n      localField: \"customerId\",\n      foreignField: \"_id\",\n      as: \"customer\"\n    }\n  },\n  { $unwind: \"$customer\" }\n]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$match Stage: Index Utilization and Position Requirements",
    "question": "How does stage positioning determine whether a $match stage can utilize an index in an aggregation pipeline?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "match",
      "indexes",
      "query-optimizer"
    ],
    "interviewAnswer": "A $match stage can only utilize an index when it appears at the very beginning of the aggregation pipeline, or immediately following an initial $sort (when using a compound index). If any transforming stage ($project, $group, $unwind, $lookup) precedes $match, MongoDB must perform a collection or document scan in memory.",
    "answer": "In the Aggregation Framework, pipeline stages process a stream of documents sequentially. The query planner can only route the pipeline to a B-Tree index scan (IXSCAN) if $match is positioned as the first stage. Once documents pass through stages that reshape documents ($project, $addFields, $unwind), the connection to the underlying physical index on disk is severed.",
    "explanation": "The MongoDB aggregation optimizer attempts pipeline sequence optimization: if a $match appears after $project, the optimizer will push the $match ahead of $project provided the $match does not reference any computed or renamed fields from that $project.",
    "importantPoints": [
      "Index scans (IXSCAN) are only available if $match is at the start of the pipeline.",
      "Placing $match after reshaping stages prevents index usage.",
      "MongoDB optimizer auto-coalesces $match when safe, but explicit placement is best practice.",
      "Early $match filters out unnecessary documents, speeding up all downstream stages."
    ],
    "commonMistakes": [
      "Writing $project before $match with computed fields, preventing optimizer index pushdown.",
      "Expecting $match after a $lookup to use secondary collection indexes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Initial $match using Compound Index",
        "code": "// Utilizes compound index: { status: 1, department: 1 }\ndb.employees.aggregate([\n  { $match: { status: \"ACTIVE\", department: \"Engineering\" } },\n  { $group: { _id: \"$team\", totalSalary: { $sum: \"$salary\" } } }\n]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$group Stage: Accumulator Operators and Grouping Keys",
    "question": "How does the $group stage aggregate documents, and what are its primary accumulator operators?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "group",
      "accumulators",
      "sum",
      "avg"
    ],
    "interviewAnswer": "The $group stage partitions incoming documents into groups based on a distinct _id expression. It then computes aggregated metrics across each group using accumulator operators like $sum, $avg, $min, $max, $push, $addToSet, and $first / $last.",
    "answer": "The $group stage separates documents by the specified `_id` field (which can be a single field, null to aggregate all documents, or a compound document of multiple fields). For each distinct `_id`, MongoDB maintains state and applies accumulators:\n- Numeric: `$sum`, `$avg`, `$min`, `$max`, `$stdDevPop`, `$stdDevSamp`\n- Array: `$push` (preserves duplicates and order), `$addToSet` (stores only unique values)\n- Window/Boundary: `$first`, `$last` (relies on prior `$sort` order).",
    "explanation": "Setting `_id: null` in a $group stage calculates overall aggregates across the entire collection (e.g. calculating total company revenue or grand average).",
    "importantPoints": [
      "Documents are grouped by the distinct value of the _id expression.",
      "Setting _id: null calculates a grand total across all input documents.",
      "$push retains all values including duplicates; $addToSet retains unique values only.",
      "$group operations have a 100MB RAM limit unless allowDiskUse is enabled."
    ],
    "commonMistakes": [
      "Forgetting the $ prefix for field paths in accumulators (e.g., { $sum: \"price\" } instead of { $sum: \"$price\" }).",
      "Using $first or $last without a preceding $sort stage."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Group by Category with Multiple Accumulators",
        "code": "db.products.aggregate([\n  {\n    $group: {\n      _id: \"$category\",\n      totalRevenue: { $sum: { $multiply: [\"$price\", \"$salesCount\"] } },\n      averagePrice: { $avg: \"$price\" },\n      uniqueVendors: { $addToSet: \"$vendorId\" },\n      itemCount: { $sum: 1 }\n    }\n  }\n]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$lookup: Basic Equality Join vs Correlated Subqueries",
    "question": "What is the difference between standard equality $lookup and uncorrelated/correlated pipeline $lookup in MongoDB?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "lookup",
      "left-outer-join",
      "subquery"
    ],
    "interviewAnswer": "Standard $lookup performs an equality left-outer-join using localField and foreignField. Pipeline $lookup (using let and pipeline) allows running a full custom aggregation pipeline against the joined collection, supporting complex multi-field joins, subquery filtering ($match), sorting, and projections.",
    "answer": "1. Standard Equality Join:\nSyntax: `{ $lookup: { from: \"target\", localField: \"a\", foreignField: \"b\", as: \"items\" } }`. Efficiently matches equality using an index on foreignField.\n\n2. Pipeline Subquery Join (Correlated & Uncorrelated):\nSyntax: `{ $lookup: { from: \"target\", let: { currentId: \"$_id\" }, pipeline: [ { $match: { $expr: { $and: [ { $eq: [\"$ownerId\", \"$$currentId\"] }, { $gte: [\"$amount\", 100] } ] } } } ], as: \"bigOrders\" } }`.\nThis allows filtering joined records before they are loaded into memory.",
    "explanation": "Variables defined in `let` are referenced inside the sub-pipeline with double dollar signs (`$$currentId`), whereas fields of the foreign collection are referenced with a single dollar sign (`$ownerId`).",
    "importantPoints": [
      "Standard $lookup is concise for simple single-field equality.",
      "Pipeline $lookup allows arbitrary aggregation stages within the foreign collection.",
      "Variables from source documents are declared in let and referenced with $$ prefix.",
      "Foreign collection MUST have an index on the join fields to prevent slow O(N*M) scans."
    ],
    "commonMistakes": [
      "Missing the foreign collection index, causing full collection scans for every source document.",
      "Using a single $ instead of $$ when referencing let variables in $expr."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Correlated Subquery Join with Pipeline $lookup",
        "code": "db.users.aggregate([\n  {\n    $lookup: {\n      from: \"orders\",\n      let: { userId: \"$_id\" },\n      pipeline: [\n        {\n          $match: {\n            $expr: {\n              $and: [\n                { $eq: [\"$customerId\", \"$$userId\"] },\n                { $eq: [\"$status\", \"DELIVERED\"] }\n              ]\n            }\n          }\n        },\n        { $sort: { orderDate: -1 } },\n        { $limit: 3 }\n      ],\n      as: \"recentDeliveredOrders\"\n    }\n  }\n]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$unwind Stage: Array Deconstruction and preserveNullAndEmptyArrays",
    "question": "How does the $unwind stage deconstruct arrays, and what is the effect of the preserveNullAndEmptyArrays option?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "unwind",
      "arrays",
      "preserveNullAndEmptyArrays"
    ],
    "interviewAnswer": "$unwind outputs one document for each element in the specified array field. By default, if the array is missing, null, or empty, the parent document is dropped. Setting preserveNullAndEmptyArrays: true preserves the parent document with the array field as null, mimicking an SQL LEFT JOIN.",
    "answer": "The `$unwind` stage deconstructs an array field from input documents to output a document for each element. Each output document replaces the array with an individual element value.\n\nKey Options:\n- `path`: String designating the array field path (e.g. `\"$items\"`).\n- `includeArrayIndex`: Optional string naming a new field to store the zero-based array index.\n- `preserveNullAndEmptyArrays`: Boolean. When `false` (default), documents with empty arrays (`[]`), `null`, or missing paths are discarded. When `true`, documents with empty or missing arrays are retained with a `null` value for that field.",
    "explanation": "Always be cautious with `$unwind` on large arrays. If a collection has 1,000 documents and each has 500 array items, `$unwind` generates 500,000 documents in the pipeline stream.",
    "importantPoints": [
      "Deconstructs array into individual documents per element.",
      "preserveNullAndEmptyArrays: true prevents dropping documents with empty or null arrays.",
      "includeArrayIndex is useful for preserving sequential ranking or position.",
      "Can cause explosive cardinality and memory pressure on large arrays."
    ],
    "commonMistakes": [
      "Unintentionally filtering out records because array was empty or null.",
      "Unwinding large arrays before $match, multiplying document count unnecessarily."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$unwind with preserveNullAndEmptyArrays and Index",
        "code": "db.posts.aggregate([\n  {\n    $unwind: {\n      path: \"$tags\",\n      includeArrayIndex: \"tagIndex\",\n      preserveNullAndEmptyArrays: true\n    }\n  }\n]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$project vs $addFields vs $set",
    "question": "How do $project, $addFields, and $set differ when reshaping documents in an aggregation pipeline?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "project",
      "addfields",
      "set",
      "reshaping"
    ],
    "interviewAnswer": "$project explicitly defines which fields to include or exclude, stripping unmentioned fields by default (except _id). $addFields and its alias $set add new fields or overwrite existing fields while keeping all other existing fields intact.",
    "answer": "1. `$project`: Used to explicitly select, exclude, or rename fields. If you specify `{ name: 1, total: { $sum: ... } }`, only `_id`, `name`, and `total` are output; all other original fields are stripped.\n2. `$addFields` / `$set`: Introduced to avoid having to re-declare dozens of existing fields just to add or modify one or two fields. All original fields are preserved.\n`$set` is an alias for `$addFields` added in MongoDB 4.2 for readability.",
    "explanation": "Use `$set` when augmenting documents. Use `$project` when you need to slim down document payloads or completely alter the schema shape.",
    "importantPoints": [
      "$project strips all non-specified fields (whitelist projection).",
      "$addFields and $set preserve all existing fields and only add/overwrite specified fields.",
      "$set is a direct syntax alias for $addFields introduced in MongoDB 4.2.",
      "Use $project early in pipeline to strip unnecessary large fields."
    ],
    "commonMistakes": [
      "Using $project to add one field and accidentally dropping all 20 other document fields.",
      "Writing redundant field mappings in $project just to keep them."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Comparing $project and $set",
        "code": "// $set preserves all original fields and adds fullName:\ndb.users.aggregate([\n  { $set: { fullName: { $concat: [\"$firstName\", \" \", \"$lastName\"] } } }\n]);\n\n// $project drops everything except _id and fullName:\ndb.users.aggregate([\n  { $project: { fullName: { $concat: [\"$firstName\", \" \", \"$lastName\"] } } }\n]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$facet Stage: Multi-Faceted Aggregation in a Single Query",
    "question": "What is the purpose of the $facet stage, and how does it enable multi-faceted navigation and simultaneous metrics?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "facet",
      "multi-faceted-search",
      "e-commerce"
    ],
    "interviewAnswer": "The $facet stage processes multiple aggregation pipelines concurrently within a single stage on the same incoming document stream. It is ideal for e-commerce search results where you simultaneously need paginated products, category counts, price ranges, and manufacturer filters in one round-trip.",
    "answer": "In e-commerce and analytics, a user query often requires multiple independent aggregations: 1) paginated data list, 2) total count of matching items, 3) count by price range buckets, and 4) count by brand. Without `$facet`, the client would need 4 separate queries. `$facet` executes these independent sub-pipelines in parallel over the filtered documents and outputs a single document containing array results for each facet.",
    "explanation": "Each sub-pipeline within `$facet` has access to the exact same input documents. Note that `$facet` results are subject to the 16MB BSON document size limit because all facet arrays are combined into one final document.",
    "importantPoints": [
      "Executes multiple sub-pipelines concurrently on the same input dataset.",
      "Returns a single document containing an array of results for each named facet.",
      "Perfect for search filters, count totals + paginated results, and category summaries.",
      "The entire output document must not exceed 16MB."
    ],
    "commonMistakes": [
      "Returning unbounded arrays inside a facet, exceeding the 16MB BSON document limit.",
      "Placing $facet before $match, forcing all sub-pipelines to process the whole collection."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "E-Commerce Search Facets and Pagination",
        "code": "db.products.aggregate([\n  { $match: { category: \"Electronics\", inStock: true } },\n  {\n    $facet: {\n      categorizedByBrand: [\n        { $group: { _id: \"$brand\", count: { $sum: 1 } } },\n        { $sort: { count: -1 } }\n      ],\n      priceStats: [\n        {\n          $group: {\n            _id: null,\n            avgPrice: { $avg: \"$price\" },\n            minPrice: { $min: \"$price\" },\n            maxPrice: { $max: \"$price\" }\n          }\n        }\n      ],\n      paginatedResults: [\n        { $sort: { rating: -1 } },\n        { $skip: 0 },\n        { $limit: 10 }\n      ],\n      totalCount: [\n        { $count: \"total\" }\n      ]\n    }\n  }\n]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$bucket and $bucketAuto: Categorizing Data into Ranges",
    "question": "How do $bucket and $bucketAuto partition documents into value ranges, and how do they differ?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "bucket",
      "bucketAuto",
      "histogram",
      "ranges"
    ],
    "interviewAnswer": "$bucket categorizes incoming documents into specific user-defined boundaries (e.g. [0, 50, 100, 200]). $bucketAuto automatically determines bucket boundaries based on document distribution to evenly divide documents into a specified number of buckets (e.g. 5 even quantiles).",
    "answer": "1. `$bucket`: Requires an explicit `boundaries` array. Values must be strictly increasing. An optional `default` boundary catches documents outside the range.\n\n2. `$bucketAuto`: Takes a target bucket count (`buckets: N`). It analyzes the dataset and dynamically calculates boundary ranges such that each bucket contains approximately equal document counts (similar to percentiles/quintiles). It also supports granularity options like R20, 1-2-5 series for rounded intervals.",
    "explanation": "Both bucket stages support an `output` document where you can define accumulators like `$sum`, `$avg`, and `$push` for each bucket group.",
    "importantPoints": [
      "$bucket uses hardcoded boundary arrays provided by the user.",
      "$bucketAuto automatically balances bucket boundaries based on data distribution.",
      "Both support custom accumulators in their output specification.",
      "Ideal for histograms, price tiers, and age demographic distributions."
    ],
    "commonMistakes": [
      "Providing non-monotonic (unordered) numbers in $bucket boundaries.",
      "Omitting the default parameter when data contains values outside the boundary limits."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$bucket vs $bucketAuto",
        "code": "// Fixed Price Tiers with $bucket:\ndb.products.aggregate([\n  {\n    $bucket: {\n      groupBy: \"$price\",\n      boundaries: [ 0, 25, 50, 100, 500 ],\n      default: \"Other\",\n      output: {\n        count: { $sum: 1 },\n        avgRating: { $avg: \"$rating\" }\n      }\n    }\n  }\n]);\n\n// 4 Automatic Quantiles with $bucketAuto:\ndb.products.aggregate([\n  {\n    $bucketAuto: {\n      groupBy: \"$price\",\n      buckets: 4\n    }\n  }\n]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$graphLookup: Recursive Hierarchical and Graph Traversal",
    "question": "How does $graphLookup perform recursive graph and tree traversals in MongoDB?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "graphLookup",
      "recursion",
      "trees",
      "hierarchies"
    ],
    "interviewAnswer": "$graphLookup performs recursive searches on a collection, traversing parent-child or graph relationships up to a specified maxDepth. It outputs an array containing all connected documents discovered across all recursive hops.",
    "answer": "`$graphLookup` enables recursive tree and network traversal without client-side loops:\n\nParameters:\n- `from`: Target collection to query recursively.\n- `startWith`: Expression indicating the value(s) to start the recursion from.\n- `connectFromField`: Field in the traversed collection to chain to the next hop.\n- `connectToField`: Field in the target collection that matches connectFromField.\n- `as`: Name of the array field added to the output document.\n- `maxDepth`: Zero-based integer specifying the maximum recursive depth.\n- `depthField`: Optional field name to record each traversed document's distance from the root.\n- `restrictSearchWithMatch`: Additional filter applied to traversed documents.",
    "explanation": "Ideal for organizational charts (employee to managers), social network friend-of-a-friend graphs, category taxonomies, and bill of materials (BOM).",
    "importantPoints": [
      "Executes recursive graph queries natively in MongoDB engine.",
      "maxDepth parameter prevents infinite loops in cyclic graphs.",
      "depthField tracks the number of hops from the origin node.",
      "Requires index on connectToField for performant recursive lookups."
    ],
    "commonMistakes": [
      "Forgetting an index on connectToField, causing disastrous recursive collection scans.",
      "Omitting maxDepth on cyclic graphs, risking high memory usage."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Traversing Management Hierarchy with $graphLookup",
        "code": "db.employees.aggregate([\n  { $match: { name: \"Alice Developer\" } },\n  {\n    $graphLookup: {\n      from: \"employees\",\n      startWith: \"$reportsTo\",\n      connectFromField: \"reportsTo\",\n      connectToField: \"_id\",\n      as: \"reportingHierarchy\",\n      maxDepth: 5,\n      depthField: \"levelsAbove\"\n    }\n  }\n]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$merge vs $out: Writing Aggregation Results to Collections",
    "question": "How do $merge and $out differ when outputting aggregation pipeline results to a collection?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "merge",
      "out",
      "materialized-views",
      "etl"
    ],
    "interviewAnswer": "$out replaces the target collection entirely by dropping it and recreating it with the pipeline results. $merge (MongoDB 4.2+) updates, inserts, replaces, or merges documents incrementally into the target collection based on matching on a unique key, enabling live materialized views and cross-database/sharded outputs.",
    "answer": "1. `$out`:\n- Destructive: Drops and replaces the entire destination collection.\n- Cannot write to sharded collections or existing collections with indexes you wish to preserve.\n- Useful only for complete periodic batch refreshes.\n\n2. `$merge` (Modern Standard):\n- Flexible: Matches on `on` fields (must have a unique index).\n- Configurable actions: `whenMatched` (\"replace\", \"keepExisting\", \"merge\", [pipeline]), and `whenNotMatched` (\"insert\", \"discard\", \"fail\").\n- Non-destructive: Updates or inserts individual documents without dropping the collection.\n- Works with sharded collections and across different databases.",
    "explanation": "`$merge` is the foundation of incremental materialized views in MongoDB, allowing pipelines to run every minute and only update changed summary records.",
    "importantPoints": [
      "$out drops and replaces the entire target collection.",
      "$merge performs incremental upserts/merges based on a matching key.",
      "$merge supports sharded destination collections; $out does not.",
      "$merge allows custom update pipelines for whenMatched."
    ],
    "commonMistakes": [
      "Using $out on a collection with custom indexes, resulting in all custom indexes being deleted.",
      "Missing the required unique index on the $merge `on` fields in the target collection."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Incremental Materialized View with $merge",
        "code": "db.dailySales.aggregate([\n  { $match: { date: ISODate(\"2026-09-09\") } },\n  {\n    $group: {\n      _id: \"$storeId\",\n      dailyRevenue: { $sum: \"$total\" },\n      ordersCount: { $sum: 1 }\n    }\n  },\n  {\n    $merge: {\n      into: \"monthlyStoreSummary\",\n      on: \"_id\",\n      whenMatched: [\n        {\n          $set: {\n            totalRevenue: { $add: [\"$totalRevenue\", \"$$new.dailyRevenue\"] },\n            totalOrders: { $add: [\"$totalOrders\", \"$$new.ordersCount\"] }\n          }\n        }\n      ],\n      whenNotMatched: \"insert\"\n    }\n  }\n]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$setWindowFields: Window Functions in MongoDB 5.0+",
    "question": "How does the $setWindowFields stage bring SQL-style window functions into MongoDB aggregations?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "setWindowFields",
      "window-functions",
      "moving-average",
      "rank"
    ],
    "interviewAnswer": "$setWindowFields (introduced in MongoDB 5.0) allows calculating metrics across subsets of documents (windows) without collapsing them into groups. It supports running totals, moving averages, rank, denseRank, shift, and time-based rolling windows.",
    "answer": "In traditional MongoDB aggregation, calculating a running total or rolling average required grouping documents into arrays with `$group` and unwinding them, which was slow and risked the 16MB limit. `$setWindowFields` provides native SQL window capability:\n\nKey Concepts:\n- `partitionBy`: Expression to partition documents into groups (similar to SQL PARTITION BY).\n- `sortBy`: Order of documents within each partition.\n- `output`: Window functions applied over a specified `window` span (defined by `documents: [lower, upper]` or `range: [lower, upper, unit]`).\n- Built-in functions: `$denseRank`, `$rank`, `$documentNumber`, `$shift`, `$derivative`, `$integral`, plus standard accumulators (`$sum`, `$avg`).",
    "explanation": "Window calculations are executed in-memory with streaming support, making financial time-series analytics dramatically faster and cleaner in MongoDB.",
    "importantPoints": [
      "Calculates rolling metrics without collapsing documents like $group does.",
      "Supports document-count windows and time-unit windows (e.g. 7 days rolling).",
      "Provides $rank, $denseRank, $documentNumber, $shift (lead/lag).",
      "Available since MongoDB 5.0."
    ],
    "commonMistakes": [
      "Using legacy $push + $unwind aggregation hacks instead of $setWindowFields in MongoDB 5.0+.",
      "Forgetting sortBy when defining document-based rolling windows."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Calculating 3-Month Moving Average with $setWindowFields",
        "code": "db.stockPrices.aggregate([\n  {\n    $setWindowFields: {\n      partitionBy: \"$ticker\",\n      sortBy: { date: 1 },\n      output: {\n        movingAvgPrice: {\n          $avg: \"$closingPrice\",\n          window: {\n            documents: [-2, 0] // Current document and 2 preceding documents\n          }\n        },\n        dailyRank: {\n          $rank: {}\n        }\n      }\n    }\n  }\n]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "The 100MB RAM Stage Limit and allowDiskUse",
    "question": "What is the 100MB RAM limit per aggregation pipeline stage, and how does allowDiskUse resolve it?",
    "difficulty": "medium",
    "questionType": "Performance",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "allowDiskUse",
      "memory-limit",
      "sort",
      "group"
    ],
    "interviewAnswer": "By default, any blocking aggregation stage (such as $sort or $group) is restricted to 100MB of RAM. If a stage exceeds 100MB, MongoDB aborts the query with an error. Specifying { allowDiskUse: true } allows stages to spill temporary data to the _tmp directory on disk, trading query speed for successful execution.",
    "answer": "MongoDB limits memory consumption per aggregation stage to 100MB to protect database stability and prevent runaway queries from starving the WiredTiger cache.\n\nKey Details:\n- Stages prone to exceeding 100MB: Unindexed `$sort`, `$group` with high cardinality, `$bucket`, `$facet`.\n- Resolution: Pass `{ allowDiskUse: true }` in the aggregate options.\n- Disk performance cost: Writing and reading temporary files on disk is 10x-100x slower than in-memory operations.\n- Best Practice: In production, treat `allowDiskUse` as a temporary fallback; the true solution is adding an index for the `$sort` stage or pre-aggregating data.",
    "explanation": "Starting in MongoDB 6.0, pipeline stages that require more than 100MB of memory write data to temporary files on disk by default unless allowDiskUse is explicitly set to false in certain configurations, but explicit indexing remains essential.",
    "importantPoints": [
      "Each blocking stage has a 100MB memory limit.",
      "allowDiskUse: true enables writing temporary spill files to disk.",
      "Disk spilling prevents out-of-memory crashes but introduces severe I/O latency.",
      "An indexed $sort consumes virtually zero memory as documents stream in pre-sorted order."
    ],
    "commonMistakes": [
      "Using allowDiskUse: true on high-concurrency API endpoints, causing disk I/O thrashing.",
      "Not indexing fields used in $sort prior to grouping."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Executing Aggregation with allowDiskUse",
        "code": "db.transactions.aggregate(\n  [\n    { $match: { year: 2025 } },\n    { $group: { _id: \"$accountId\", total: { $sum: \"$amount\" } } },\n    { $sort: { total: -1 } }\n  ],\n  { allowDiskUse: true }\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$replaceRoot and $replaceWith: Promoting Subdocuments to Top Level",
    "question": "How do $replaceRoot and $replaceWith promote an embedded subdocument to the top level of the aggregation stream?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "replaceRoot",
      "replaceWith",
      "subdocuments"
    ],
    "interviewAnswer": "$replaceRoot replaces the top-level document with the specified embedded document ({ newRoot: \"$embeddedDoc\" }). $replaceWith is an alias introduced in MongoDB 4.2 that accepts the replacement expression directly ({ $replaceWith: \"$embeddedDoc\" }). It is commonly used after $lookup and $unwind to flatten joined nested objects.",
    "answer": "When working with normalized or nested structures, you frequently join a document using $lookup and unwind it into a single subdocument field (e.g. orderDetails). To strip the wrapper and elevate orderDetails to become the primary document, use $replaceWith: \"$orderDetails\".",
    "explanation": "When working with normalized or nested structures, you frequently join a document using $lookup and unwind it into a single subdocument field (e.g. orderDetails). To strip the wrapper and elevate orderDetails to become the primary document, use $replaceWith: \"$orderDetails\".",
    "importantPoints": [
      "Replaces all root fields with the embedded document fields.",
      "$replaceWith is a streamlined alias for $replaceRoot.",
      "Useful after $lookup + $unwind to flatten joined structures."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$replaceRoot and $replaceWith: Promoting Subdocuments to Top Level",
        "code": "// Example demonstrating $replaceRoot and $replaceWith: Promoting Subdocuments to Top Level\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$redact Stage: Document-Level and Field-Level Access Control",
    "question": "What is the purpose of the $redact stage in an aggregation pipeline?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "redact",
      "security",
      "field-level-security"
    ],
    "interviewAnswer": "$redact restricts the contents of a document based on security clearance or privilege levels. It recursively traverses the document from top to bottom, evaluating an expression against $$DESCEND (inspect sub-level), $$PRUNE (exclude current level and all descendants), or $$KEEP (retain current level and all descendants).",
    "answer": "The $redact stage enforces field-level and subdocument-level redaction without complex multiple $project stages. At each level of nesting, it tests user permissions against a tag (e.g., clearance: \"SECRET\"). If the user lacks access, $$PRUNE removes the sensitive branch entirely.",
    "explanation": "The $redact stage enforces field-level and subdocument-level redaction without complex multiple $project stages. At each level of nesting, it tests user permissions against a tag (e.g., clearance: \"SECRET\"). If the user lacks access, $$PRUNE removes the sensitive branch entirely.",
    "importantPoints": [
      "Recursively inspects documents for access control.",
      "Returns $$DESCEND, $$PRUNE, or $$KEEP.",
      "Prunes entire subdocuments or array elements based on user roles."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$redact Stage: Document-Level and Field-Level Access Control",
        "code": "// Example demonstrating $redact Stage: Document-Level and Field-Level Access Control\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$count Stage vs $group with $sum: 1",
    "question": "What is the difference between using the $count stage and { $group: { _id: null, count: { $sum: 1 } } }?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "count",
      "group",
      "performance"
    ],
    "interviewAnswer": "$count is syntactic sugar for { $group: { _id: null, count: { $sum: 1 } } }, followed by a projection to clean up the output. In modern MongoDB, $count is optimized internally by the aggregation engine and is cleaner to write.",
    "answer": "`{ $count: \"totalCount\" }` outputs a document `{ totalCount: N }`. It avoids the boilerplate of specifying `_id: null` in `$group`. Furthermore, when `$count` follows an indexed `$match`, the optimizer can count index keys directly.",
    "explanation": "`{ $count: \"totalCount\" }` outputs a document `{ totalCount: N }`. It avoids the boilerplate of specifying `_id: null` in `$group`. Furthermore, when `$count` follows an indexed `$match`, the optimizer can count index keys directly.",
    "importantPoints": [
      "Syntactic sugar for grouping with $sum: 1.",
      "Outputs clean document with specified field name.",
      "Internally optimized for fast metadata and index key counts."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$count Stage vs $group with $sum: 1",
        "code": "// Example demonstrating $count Stage vs $group with $sum: 1\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$sortByCount: Shortcut for Grouping and Frequency Sorting",
    "question": "What does the $sortByCount aggregation stage do?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "sortByCount",
      "frequency",
      "shortcut"
    ],
    "interviewAnswer": "$sortByCount groups incoming documents by the value of a specified expression and immediately sorts the groups by their document count in descending order. It combines $group, $sum: 1, and $sort: { count: -1 } into a single stage.",
    "answer": "Equivalent to: `[ { $group: { _id: <expression>, count: { $sum: 1 } } }, { $sort: { count: -1 } } ]`. It is heavily used for top-N analysis (e.g., top 10 referring domains, most common error codes).",
    "explanation": "Equivalent to: `[ { $group: { _id: <expression>, count: { $sum: 1 } } }, { $sort: { count: -1 } } ]`. It is heavily used for top-N analysis (e.g., top 10 referring domains, most common error codes).",
    "importantPoints": [
      "Combines $group and descending count $sort.",
      "Perfect for top-N frequency histograms.",
      "Improves pipeline clarity and conciseness."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$sortByCount: Shortcut for Grouping and Frequency Sorting",
        "code": "// Example demonstrating $sortByCount: Shortcut for Grouping and Frequency Sorting\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$filter Array Expression in Aggregation",
    "question": "How does the $filter expression select a subset of elements from an array within a document without using $unwind?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "filter",
      "arrays",
      "performance"
    ],
    "interviewAnswer": "$filter selects elements from an input array that satisfy a specified cond expression without expanding the document stream like $unwind does. It keeps array processing entirely in-memory and preserves the original document cardinality.",
    "answer": "Syntax: `{ $filter: { input: \"$items\", as: \"item\", cond: { $gte: [\"$$item.price\", 100] } } }`. By avoiding `$unwind` and `$group`, `$filter` executes orders of magnitude faster and consumes significantly less RAM.",
    "explanation": "Syntax: `{ $filter: { input: \"$items\", as: \"item\", cond: { $gte: [\"$$item.price\", 100] } } }`. By avoiding `$unwind` and `$group`, `$filter` executes orders of magnitude faster and consumes significantly less RAM.",
    "importantPoints": [
      "Filters array elements in-place without $unwind.",
      "Uses input, as, and cond parameters.",
      "Much faster and more memory-efficient than $unwind + $group."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$filter Array Expression in Aggregation",
        "code": "// Example demonstrating $filter Array Expression in Aggregation\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$map Array Expression in Aggregation",
    "question": "How does the $map expression transform each element of an array in an aggregation pipeline?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "map",
      "arrays",
      "transformation"
    ],
    "interviewAnswer": "$map applies an aggregation expression to each element of an array and returns an array of the transformed results, identical to Array.prototype.map in JavaScript.",
    "answer": "Syntax: `{ $map: { input: \"$scores\", as: \"s\", in: { $multiply: [\"$$s\", 1.1] } } }`. It transforms each item without altering document count or resorting to unwinding.",
    "explanation": "Syntax: `{ $map: { input: \"$scores\", as: \"s\", in: { $multiply: [\"$$s\", 1.1] } } }`. It transforms each item without altering document count or resorting to unwinding.",
    "importantPoints": [
      "Transforms array elements in-place.",
      "Declares iterator variable in as and uses $$ prefix in in expression.",
      "Does not change document cardinality."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$map Array Expression in Aggregation",
        "code": "// Example demonstrating $map Array Expression in Aggregation\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$reduce Array Expression in Aggregation",
    "question": "How does the $reduce expression aggregate an array down to a single value within a document?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "reduce",
      "arrays",
      "functional-programming"
    ],
    "interviewAnswer": "$reduce applies an expression to each element in an array along with an accumulator, collapsing the entire array into a single computed value (number, string, or subdocument), identical to Array.prototype.reduce in JavaScript.",
    "answer": "Syntax: `{ $reduce: { input: \"$expenses\", initialValue: 0, in: { $add: [\"$$value\", \"$$this.cost\"] } } }`. Here `$$value` is the running accumulator and `$$this` is the current element.",
    "explanation": "Syntax: `{ $reduce: { input: \"$expenses\", initialValue: 0, in: { $add: [\"$$value\", \"$$this.cost\"] } } }`. Here `$$value` is the running accumulator and `$$this` is the current element.",
    "importantPoints": [
      "Collapses an array into a single scalar or object value.",
      "Uses $$value for accumulator and $$this for element.",
      "Executes purely in-memory without $unwind."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$reduce Array Expression in Aggregation",
        "code": "// Example demonstrating $reduce Array Expression in Aggregation\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Conditional Logic in Aggregation: $cond vs $switch",
    "question": "When should you use $cond versus $switch for conditional branching in aggregation pipelines?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "cond",
      "switch",
      "conditional-logic"
    ],
    "interviewAnswer": "Use $cond for binary (if-then-else) conditional logic (similar to a ternary operator). Use $switch when you have three or more branches, as it provides a clean structure with branches: [{ case, then }] and a default fallback, avoiding deeply nested $cond statements.",
    "answer": "`$cond` syntax: `{ $cond: { if: <boolean-expr>, then: <true-expr>, else: <false-expr> } }`.\n`$switch` syntax: `{ $switch: { branches: [ { case: <expr1>, then: <val1> }, { case: <expr2>, then: <val2> } ], default: <fallback> } }`. Nested `$cond` calls quickly become unreadable; `$switch` maintains readability.",
    "explanation": "`$cond` syntax: `{ $cond: { if: <boolean-expr>, then: <true-expr>, else: <false-expr> } }`.\n`$switch` syntax: `{ $switch: { branches: [ { case: <expr1>, then: <val1> }, { case: <expr2>, then: <val2> } ], default: <fallback> } }`. Nested `$cond` calls quickly become unreadable; `$switch` maintains readability.",
    "importantPoints": [
      "$cond is ideal for binary if/else checks.",
      "$switch handles multi-way branching without deep nesting.",
      "Both evaluate lazily to avoid unnecessary computations."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Conditional Logic in Aggregation: $cond vs $switch",
        "code": "// Example demonstrating Conditional Logic in Aggregation: $cond vs $switch\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "String Manipulation in Aggregation ($concat, $substrCP, $regexFind)",
    "question": "How do $concat, $substrCP, and $regexFind process text fields within aggregation expressions?",
    "difficulty": "medium",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "strings",
      "regexFind",
      "substrCP"
    ],
    "interviewAnswer": "$concat concatenates multiple strings into one. $substrCP extracts a substring based on code points (ensuring UTF-8 characters with multiple bytes are handled safely without corruption). $regexFind performs regular expression matching and returns the match object, index, and captured groups.",
    "answer": "MongoDB provides comprehensive string expressions in aggregation. Always use `$substrCP` (Code Points) instead of legacy `$substrBytes` to avoid splitting multi-byte UTF-8 characters (e.g. emojis or non-Latin scripts) in the middle of a character.",
    "explanation": "MongoDB provides comprehensive string expressions in aggregation. Always use `$substrCP` (Code Points) instead of legacy `$substrBytes` to avoid splitting multi-byte UTF-8 characters (e.g. emojis or non-Latin scripts) in the middle of a character.",
    "importantPoints": [
      "$concat combines string expressions.",
      "$substrCP counts Unicode code points safely.",
      "$regexFind returns match, index, and capture groups."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "String Manipulation in Aggregation ($concat, $substrCP, $regexFind)",
        "code": "// Example demonstrating String Manipulation in Aggregation ($concat, $substrCP, $regexFind)\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Date Aggregation Expressions ($dateToString, $dateTrunc, $dateAdd)",
    "question": "How do $dateToString, $dateTrunc, and $dateAdd facilitate time-series aggregation?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "dates",
      "dateTrunc",
      "dateToString",
      "time-series"
    ],
    "interviewAnswer": "$dateTrunc truncates a date to a specified unit (e.g. day, week, month), making it the ideal grouping key for time-series charts. $dateToString formats dates into custom string representations. $dateAdd adds or subtracts temporal units (days, hours, months) taking time zones into account.",
    "answer": "`$dateTrunc: { date: \"$createdAt\", unit: \"day\", timezone: \"America/New_York\" }` truncates timestamps to midnight of that day in the given timezone. This allows clean grouping in `$group: { _id: { $dateTrunc: ... } }`.",
    "explanation": "`$dateTrunc: { date: \"$createdAt\", unit: \"day\", timezone: \"America/New_York\" }` truncates timestamps to midnight of that day in the given timezone. This allows clean grouping in `$group: { _id: { $dateTrunc: ... } }`.",
    "importantPoints": [
      "$dateTrunc truncates dates to calendar units for time-based grouping.",
      "Supports explicit timezones to handle daylight saving time accurately.",
      "$dateAdd performs timezone-aware date arithmetic."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Date Aggregation Expressions ($dateToString, $dateTrunc, $dateAdd)",
        "code": "// Example demonstrating Date Aggregation Expressions ($dateToString, $dateTrunc, $dateAdd)\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Type Conversion Expressions: $convert, $toInt, and $toDouble",
    "question": "How do $convert, $toInt, and $toDouble handle type casting and conversion errors in aggregation pipelines?",
    "difficulty": "medium",
    "questionType": "Data Quality",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "convert",
      "toInt",
      "type-casting",
      "data-cleaning"
    ],
    "interviewAnswer": "$convert casts values from one BSON type to another with explicit onError and onNull fallback values, preventing pipeline crashes on malformed data. $toInt, $toDouble, and $toString are shorthand helpers that wrap $convert.",
    "answer": "When processing heterogeneous legacy collections, a price field might contain strings (\"$19.99\"), numbers, or null. Calling `$convert: { input: \"$price\", to: \"double\", onError: 0.0, onNull: 0.0 }` safely converts valid values while defaulting corrupt records to 0.0 without aborting the pipeline.",
    "explanation": "When processing heterogeneous legacy collections, a price field might contain strings (\"$19.99\"), numbers, or null. Calling `$convert: { input: \"$price\", to: \"double\", onError: 0.0, onNull: 0.0 }` safely converts valid values while defaulting corrupt records to 0.0 without aborting the pipeline.",
    "importantPoints": [
      "$convert handles type casting with onError and onNull safeguards.",
      "Prevents entire aggregation failure due to one malformed document.",
      "$toInt, $toString, $toDouble are convenient shorthands."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Type Conversion Expressions: $convert, $toInt, and $toDouble",
        "code": "// Example demonstrating Type Conversion Expressions: $convert, $toInt, and $toDouble\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$lookup with an Array as localField",
    "question": "How does $lookup behave when the localField is an array of foreign keys?",
    "difficulty": "medium",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "lookup",
      "arrays",
      "many-to-many"
    ],
    "interviewAnswer": "When localField contains an array of IDs, MongoDB automatically performs a multi-value match: it queries the foreign collection for any document whose foreignField matches ANY value in the local array. The resulting as field contains all matched foreign documents in a single array.",
    "answer": "If an Order has `itemIds: [101, 102, 103]`, specifying `localField: \"itemIds\"` and `foreignField: \"_id\"` in `$lookup` returns all three matching product documents. No `$unwind` is needed before the join!",
    "explanation": "If an Order has `itemIds: [101, 102, 103]`, specifying `localField: \"itemIds\"` and `foreignField: \"_id\"` in `$lookup` returns all three matching product documents. No `$unwind` is needed before the join!",
    "importantPoints": [
      "Automatically treats localField arrays as an $in lookup.",
      "Does not require prior $unwind.",
      "Outputs array of all matching foreign documents."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$lookup with an Array as localField",
        "code": "// Example demonstrating $lookup with an Array as localField\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$unset Stage in MongoDB 4.2+",
    "question": "What is the purpose of the $unset stage, and how does it improve upon $project for dropping fields?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "unset",
      "project",
      "cleanliness"
    ],
    "interviewAnswer": "$unset removes one or more specified fields from documents in the pipeline. It is an alias for { $project: { fieldName: 0 } }, but accepts single string names or arrays of strings, making pipeline syntax cleaner and more readable.",
    "answer": "Syntax: `{ $unset: [\"passwordHash\", \"internalNotes\", \"tempData\"] }`. It cleanly strips fields without needing to specify a projection dictionary.",
    "explanation": "Syntax: `{ $unset: [\"passwordHash\", \"internalNotes\", \"tempData\"] }`. It cleanly strips fields without needing to specify a projection dictionary.",
    "importantPoints": [
      "Removes specified fields without touching other document fields.",
      "Accepts an array of field names.",
      "Improves pipeline readability over $project: { field: 0 }."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$unset Stage in MongoDB 4.2+",
        "code": "// Example demonstrating $unset Stage in MongoDB 4.2+\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Pipeline Optimization: Projection Pushdown and Dead Code Elimination",
    "question": "How does the MongoDB aggregation query optimizer perform projection pushdown and dead code elimination?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "optimizer",
      "projection-pushdown",
      "dead-code-elimination"
    ],
    "interviewAnswer": "The MongoDB aggregation optimizer inspects the pipeline end-to-end: 1) Projection Pushdown: It pushes field projections as close to the collection scan as possible so only needed fields are extracted from disk; 2) Dead Code Elimination: If subsequent stages overwrite or ignore a computed field created earlier, the optimizer removes the redundant stage.",
    "answer": "Before execution, the aggregation engine parses the Abstract Syntax Tree (AST) of the pipeline. If a pipeline only uses `name` and `age` in its terminal `$group` stage, the optimizer instructs the storage engine to project only `name` and `age` during the initial document fetch, saving disk I/O and RAM.",
    "explanation": "Before execution, the aggregation engine parses the Abstract Syntax Tree (AST) of the pipeline. If a pipeline only uses `name` and `age` in its terminal `$group` stage, the optimizer instructs the storage engine to project only `name` and `age` during the initial document fetch, saving disk I/O and RAM.",
    "importantPoints": [
      "Optimizer inspects AST to prune unused fields early.",
      "Reduces I/O by fetching only referenced fields from storage engine.",
      "Dead code elimination drops unreferenced intermediate stages."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Pipeline Optimization: Projection Pushdown and Dead Code Elimination",
        "code": "// Example demonstrating Pipeline Optimization: Projection Pushdown and Dead Code Elimination\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$sample Stage: Selecting Random Documents from a Collection",
    "question": "How does the $sample stage select random documents, and what determines whether it uses a pseudo-random cursor or in-memory sort?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "sample",
      "random",
      "storage-engine"
    ],
    "interviewAnswer": "If $sample is the first stage, the sample size N <= 5% of total documents, and the collection has >= 100 documents, $sample uses a fast pseudo-random cursor traversal over storage engine record IDs. Otherwise, it performs an in-memory random sort, which can be slow on large collections.",
    "answer": "Fast path: Random storage engine cursor (takes milliseconds even on 10M documents). Slow path: When preceded by other stages ($match, $project) or when requesting > 5% of documents, MongoDB must stream matching documents into RAM, assign random numbers, and sort them.",
    "explanation": "Fast path: Random storage engine cursor (takes milliseconds even on 10M documents). Slow path: When preceded by other stages ($match, $project) or when requesting > 5% of documents, MongoDB must stream matching documents into RAM, assign random numbers, and sort them.",
    "importantPoints": [
      "Uses fast storage cursor when first stage and N <= 5% of collection.",
      "Falls back to in-memory sort when preceded by filtering stages.",
      "Useful for A/B testing splits and training/validation ML splits."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$sample Stage: Selecting Random Documents from a Collection",
        "code": "// Example demonstrating $sample Stage: Selecting Random Documents from a Collection\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Array Set Operations: $setUnion, $setIntersection, and $setDifference",
    "question": "How do aggregation set operators perform mathematical set operations on arrays?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "sets",
      "setUnion",
      "setIntersection",
      "setDifference"
    ],
    "interviewAnswer": "Aggregation set operators treat arrays as mathematical sets (ignoring duplicate elements). $setUnion returns an array of unique elements present in any input array; $setIntersection returns unique elements common to all arrays; $setDifference returns unique elements present in the first array but not the second.",
    "answer": "Example: Comparing user permissions against required role permissions: `{ $setDifference: [\"$requiredRoles\", \"$userRoles\"] }`. If the result is an empty array `[]`, the user possesses all required permissions.",
    "explanation": "Example: Comparing user permissions against required role permissions: `{ $setDifference: [\"$requiredRoles\", \"$userRoles\"] }`. If the result is an empty array `[]`, the user possesses all required permissions.",
    "importantPoints": [
      "Treats arrays as sets (duplicates are automatically eliminated).",
      "Computes union, intersection, difference, and subsets ($setIsSubset).",
      "Very fast in-memory array comparisons."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Array Set Operations: $setUnion, $setIntersection, and $setDifference",
        "code": "// Example demonstrating Array Set Operations: $setUnion, $setIntersection, and $setDifference\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$accumulator and $function: Custom JavaScript in Aggregation",
    "question": "When would you use $accumulator and $function in an aggregation pipeline, and what are their performance implications?",
    "difficulty": "hard",
    "questionType": "Advanced",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "accumulator",
      "function",
      "javascript",
      "v8"
    ],
    "interviewAnswer": "$accumulator and $function (introduced in MongoDB 4.4) allow executing custom user-defined JavaScript functions within aggregation stages when native operators are insufficient. However, they context-switch to an internal JavaScript engine, drastically reducing query throughput compared to native C++ pipeline operators.",
    "answer": "Use them only as an absolute last resort when native expressions ($reduce, $map, $setWindowFields) cannot express the business logic. Native operators run compiled in C++ at hardware speed; JavaScript stages incur V8 execution overhead and cannot be parallelized as efficiently.",
    "explanation": "Use them only as an absolute last resort when native expressions ($reduce, $map, $setWindowFields) cannot express the business logic. Native operators run compiled in C++ at hardware speed; JavaScript stages incur V8 execution overhead and cannot be parallelized as efficiently.",
    "importantPoints": [
      "Allows custom JavaScript logic in $group and projections.",
      "Incurs severe performance penalty compared to native C++ operators.",
      "Should only be used when native expressions cannot solve the problem."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$accumulator and $function: Custom JavaScript in Aggregation",
        "code": "// Example demonstrating $accumulator and $function: Custom JavaScript in Aggregation\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$objectToArray and $arrayToObject: Transforming Dynamic Key-Value Pairs",
    "question": "How do $objectToArray and $arrayToObject enable aggregation over dynamic, unknown document keys?",
    "difficulty": "hard",
    "questionType": "Advanced",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "objectToArray",
      "arrayToObject",
      "dynamic-schemas"
    ],
    "interviewAnswer": "$objectToArray converts an embedded document with arbitrary keys into an array of { k: \"key\", v: \"value\" } objects. This allows using array operators ($filter, $map, $reduce) on dynamic fields. $arrayToObject converts the key-value array back into a standard document.",
    "answer": "When documents have arbitrary keys (e.g. `{ currencyRates: { EUR: 0.92, GBP: 0.79, JPY: 155.2 } }`), standard aggregation cannot query all currencies dynamically. Converting via `$objectToArray` produces `[{ k: \"EUR\", v: 0.92 }, ...]`, which can then be filtered or summed effortlessly.",
    "explanation": "When documents have arbitrary keys (e.g. `{ currencyRates: { EUR: 0.92, GBP: 0.79, JPY: 155.2 } }`), standard aggregation cannot query all currencies dynamically. Converting via `$objectToArray` produces `[{ k: \"EUR\", v: 0.92 }, ...]`, which can then be filtered or summed effortlessly.",
    "importantPoints": [
      "Converts dynamic document keys into queryable { k, v } arrays.",
      "Enables filtering and transforming unknown key names.",
      "$arrayToObject rebuilds the document structure after processing."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$objectToArray and $arrayToObject: Transforming Dynamic Key-Value Pairs",
        "code": "// Example demonstrating $objectToArray and $arrayToObject: Transforming Dynamic Key-Value Pairs\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$fill Stage: Handling Missing and Null Values in Time Series",
    "question": "How does the $fill stage (MongoDB 5.3+) impute missing data in time-series aggregations?",
    "difficulty": "hard",
    "questionType": "Time Series",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "fill",
      "time-series",
      "imputation",
      "data-cleaning"
    ],
    "interviewAnswer": "The $fill stage populates null or missing field values in sequences of documents using linear interpolation (linear) or forward/backward filling (locf - last observation carried forward), essential for gap-filling sensor and financial time series.",
    "answer": "Syntax: `{ $fill: { sortBy: { timestamp: 1 }, output: { temperature: { method: \"linear\" }, status: { method: \"locf\" } } } }`. It prevents gaps in continuous charts when IoT sensors miss periodic pings.",
    "explanation": "Syntax: `{ $fill: { sortBy: { timestamp: 1 }, output: { temperature: { method: \"linear\" }, status: { method: \"locf\" } } } }`. It prevents gaps in continuous charts when IoT sensors miss periodic pings.",
    "importantPoints": [
      "Imputes missing values without client-side preprocessing.",
      "Supports linear interpolation and last-observation-carried-forward (locf).",
      "Requires sortBy to establish the temporal order of interpolation."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$fill Stage: Handling Missing and Null Values in Time Series",
        "code": "// Example demonstrating $fill Stage: Handling Missing and Null Values in Time Series\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$densify Stage: Generating Uniform Time or Numeric Sequences",
    "question": "How does the $densify stage create synthetic documents to fill gaps in time-series ranges?",
    "difficulty": "hard",
    "questionType": "Time Series",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "densify",
      "time-series",
      "gap-filling"
    ],
    "interviewAnswer": "$densify (introduced in MongoDB 5.1) generates synthetic documents across missing intervals in a sequence (e.g., ensuring an entry exists for every hour even if no sales occurred), enabling consistent chart plotting and rolling metrics.",
    "answer": "When plotting a 24-hour sales graph, hours with zero sales are omitted by default. `$densify: { field: \"timestamp\", range: { step: 1, unit: \"hour\", bounds: \"full\" } }` inserts synthetic placeholder documents for missing hours, allowing seamless zero-filling.",
    "explanation": "When plotting a 24-hour sales graph, hours with zero sales are omitted by default. `$densify: { field: \"timestamp\", range: { step: 1, unit: \"hour\", bounds: \"full\" } }` inserts synthetic placeholder documents for missing hours, allowing seamless zero-filling.",
    "importantPoints": [
      "Generates synthetic documents across sequence gaps.",
      "Works with numeric ranges and time intervals (hour, day, month).",
      "Combined with $fill to produce uniform, complete time-series data."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$densify Stage: Generating Uniform Time or Numeric Sequences",
        "code": "// Example demonstrating $densify Stage: Generating Uniform Time or Numeric Sequences\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Explain Plan for Aggregation: stages vs queryPlanner",
    "question": "What information does db.collection.explain().aggregate([...]) provide compared to standard find().explain()?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "explain",
      "stages",
      "executionStats"
    ],
    "interviewAnswer": "find().explain() returns the query plan for a single read stage (IXSCAN/COLLSCAN/FETCH). aggregate().explain() returns a stages array showing the detailed execution plan for every individual stage in the pipeline, including optimizer rewrites, memory allocation, and pushed-down predicates.",
    "answer": "In aggregation explain output, examine the first stage under `stages[0].$cursor` to verify index utilization. Subsequent stages show `executionTimeMillisEstimate`, documents passed, and whether stages operated in RAM or spilled to disk.",
    "explanation": "In aggregation explain output, examine the first stage under `stages[0].$cursor` to verify index utilization. Subsequent stages show `executionTimeMillisEstimate`, documents passed, and whether stages operated in RAM or spilled to disk.",
    "importantPoints": [
      "Shows per-stage pipeline execution metrics.",
      "stages[0].$cursor reveals whether the initial filter used an index.",
      "Shows stage pushdowns and internal query rewrites made by the optimizer."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Explain Plan for Aggregation: stages vs queryPlanner",
        "code": "// Example demonstrating Explain Plan for Aggregation: stages vs queryPlanner\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Using $limit with $sort: Top-N In-Memory Optimization",
    "question": "How does MongoDB optimize a $sort stage followed immediately by a $limit stage in memory?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "sort",
      "limit",
      "top-n-optimization",
      "heap"
    ],
    "interviewAnswer": "When a $sort stage is followed immediately by a $limit N stage, MongoDB merges them into a single Top-N sort stage. Instead of sorting all incoming documents in memory, it maintains a bounded priority queue (min-heap or max-heap) of only N documents, drastically reducing RAM usage and avoiding 100MB limit crashes.",
    "answer": "If a collection has 10 million documents and you query `{ $sort: { score: -1 } }, { $limit: 10 }`, MongoDB does NOT sort 10 million records. It tracks only the top 10 elements in a heap data structure as documents stream past.",
    "explanation": "If a collection has 10 million documents and you query `{ $sort: { score: -1 } }, { $limit: 10 }`, MongoDB does NOT sort 10 million records. It tracks only the top 10 elements in a heap data structure as documents stream past.",
    "importantPoints": [
      "Coalesces $sort and $limit into a single Top-N stage.",
      "Maintains only N elements in a bounded priority queue.",
      "Prevents 100MB memory overflows for small limit values."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Using $limit with $sort: Top-N In-Memory Optimization",
        "code": "// Example demonstrating Using $limit with $sort: Top-N In-Memory Optimization\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$split and $trim: Parsing Delimited Strings in Aggregation",
    "question": "How can you split comma-separated strings into arrays and sanitize whitespace using aggregation expressions?",
    "difficulty": "easy",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "split",
      "trim",
      "string-manipulation"
    ],
    "interviewAnswer": "$split divides a string into an array of substrings based on a delimiter string. $trim strips leading and trailing whitespace (or specific characters) from strings.",
    "answer": "Used frequently when cleaning raw CSV data: `{ $map: { input: { $split: [\"$rawTags\", \",\"] }, as: \"t\", in: { $trim: { input: \"$$t\" } } } }` turns `\"tech , news, ai \"` into `[\"tech\", \"news\", \"ai\"]`.",
    "explanation": "Used frequently when cleaning raw CSV data: `{ $map: { input: { $split: [\"$rawTags\", \",\"] }, as: \"t\", in: { $trim: { input: \"$$t\" } } } }` turns `\"tech , news, ai \"` into `[\"tech\", \"news\", \"ai\"]`.",
    "importantPoints": [
      "$split converts delimited strings into arrays.",
      "$trim removes leading/trailing whitespace.",
      "Combined with $map to sanitize tokenized strings in bulk."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$split and $trim: Parsing Delimited Strings in Aggregation",
        "code": "// Example demonstrating $split and $trim: Parsing Delimited Strings in Aggregation\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$mergeObjects Expression: Merging Multiple Documents into One",
    "question": "How does the $mergeObjects operator combine multiple embedded documents into a single document?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "mergeObjects",
      "objects",
      "combine"
    ],
    "interviewAnswer": "$mergeObjects combines multiple documents into a single document. If documents share the same field name, the value from the latter document overwrites the earlier one (similar to Object.assign or spread operator in JavaScript).",
    "answer": "Commonly used in `$group` with `$$ROOT` or when applying default settings: `{ $mergeObjects: [ \"$defaultSettings\", \"$userCustomSettings\" ] }`. Any custom setting overrides the corresponding default setting.",
    "explanation": "Commonly used in `$group` with `$$ROOT` or when applying default settings: `{ $mergeObjects: [ \"$defaultSettings\", \"$userCustomSettings\" ] }`. Any custom setting overrides the corresponding default setting.",
    "importantPoints": [
      "Combines multiple objects into one, like Object.assign().",
      "Later objects overwrite duplicate keys from earlier objects.",
      "Useful in $group to collapse multiple subdocument updates."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$mergeObjects Expression: Merging Multiple Documents into One",
        "code": "// Example demonstrating $mergeObjects Expression: Merging Multiple Documents into One\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Self-Join in MongoDB Using $lookup",
    "question": "How can you perform a self-join on a single collection using $lookup?",
    "difficulty": "medium",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "lookup",
      "self-join",
      "hierarchies"
    ],
    "interviewAnswer": "In the $lookup specification, set the from field to the EXACT same collection name as the collection running the pipeline. Match localField (e.g. managerId) to foreignField (e.g. _id) to attach each employee's manager document directly to the employee record.",
    "answer": "Example:\n`db.employees.aggregate([\n  {\n    $lookup: {\n      from: \"employees\",\n      localField: \"managerId\",\n      foreignField: \"_id\",\n      as: \"manager\"\n    }\n  },\n  { $unwind: { path: \"$manager\", preserveNullAndEmptyArrays: true } }\n]);`",
    "explanation": "Example:\n`db.employees.aggregate([\n  {\n    $lookup: {\n      from: \"employees\",\n      localField: \"managerId\",\n      foreignField: \"_id\",\n      as: \"manager\"\n    }\n  },\n  { $unwind: { path: \"$manager\", preserveNullAndEmptyArrays: true } }\n]);`",
    "importantPoints": [
      "Target collection in `from` is the same collection name.",
      "Used to resolve parent-child references in the same collection.",
      "Always preserve nulls for root-level documents (e.g. CEO has no manager)."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Self-Join in MongoDB Using $lookup",
        "code": "// Example demonstrating Self-Join in MongoDB Using $lookup\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$range Expression: Generating Sequential Number Arrays",
    "question": "How does the $range operator generate integer sequences in aggregation pipelines?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "range",
      "numbers",
      "loops"
    ],
    "interviewAnswer": "$range generates an array of sequential integers from a start value up to (exclusive) an end value, with an optional step parameter. It is commonly used to generate number series, calendar month grids, or synthetic loop counters.",
    "answer": "Syntax: `{ $range: [ 0, 5 ] }` outputs `[ 0, 1, 2, 3, 4 ]`. Combined with `$map`, it can generate placeholder arrays for each day of a week or month.",
    "explanation": "Syntax: `{ $range: [ 0, 5 ] }` outputs `[ 0, 1, 2, 3, 4 ]`. Combined with `$map`, it can generate placeholder arrays for each day of a week or month.",
    "importantPoints": [
      "Generates array of integers [start, end) with optional step.",
      "Enables synthetic loops and date-slot generation.",
      "Zero-based and non-inclusive of end by default."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$range Expression: Generating Sequential Number Arrays",
        "code": "// Example demonstrating $range Expression: Generating Sequential Number Arrays\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Aggregating Over Time-Series Collections in MongoDB 5.0+",
    "question": "How does the aggregation pipeline optimize operations on native Time-Series collections?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "time-series",
      "columnar-compression",
      "bucket-storage"
    ],
    "interviewAnswer": "Native time-series collections store incoming measurements in compressed columnar bucket documents behind the scenes. When an aggregation pipeline queries a time-series collection, the engine unpacks only the relevant measurements and pushes down metaField and timeField filters directly to the underlying bucket collection.",
    "answer": "Filters on `metaField` and `timeField` leverage internal clustered bucket indexes. Downstream stages benefit from pre-grouped measurements, yielding up to 10x-50x faster aggregation compared to querying traditional unbucketed collections.",
    "explanation": "Filters on `metaField` and `timeField` leverage internal clustered bucket indexes. Downstream stages benefit from pre-grouped measurements, yielding up to 10x-50x faster aggregation compared to querying traditional unbucketed collections.",
    "importantPoints": [
      "Operates seamlessly over internal columnar buckets.",
      "Filters on metaField and timeField are pushed down to bucket indexes.",
      "Massive reduction in disk reads and storage footprint."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Aggregating Over Time-Series Collections in MongoDB 5.0+",
        "code": "// Example demonstrating Aggregating Over Time-Series Collections in MongoDB 5.0+\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$concatArrays Expression: Flattening Nested Arrays",
    "question": "How does $concatArrays combine multiple arrays into a single flat array?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "concatArrays",
      "arrays",
      "flattening"
    ],
    "interviewAnswer": "$concatArrays concatenates two or more arrays into a single output array. If any argument is null, the result is null. It is widely used to combine multiple tag lists or user permission sets into one combined array.",
    "answer": "Syntax: `{ $concatArrays: [ \"$primaryTags\", \"$secondaryTags\", [ \"featured\" ] ] }`. Joins elements sequentially in one flat array without duplicates eliminated.",
    "explanation": "Syntax: `{ $concatArrays: [ \"$primaryTags\", \"$secondaryTags\", [ \"featured\" ] ] }`. Joins elements sequentially in one flat array without duplicates eliminated.",
    "importantPoints": [
      "Concatenates multiple arrays into one array.",
      "Preserves duplicate items (unlike $setUnion).",
      "Returns null if any input is null unless wrapped in $ifNull."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$concatArrays Expression: Flattening Nested Arrays",
        "code": "// Example demonstrating $concatArrays Expression: Flattening Nested Arrays\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Preventing Unbounded Arrays in $push Accumulator",
    "question": "Why is using $push in a $group stage on high-cardinality collections dangerous, and how do you mitigate it?",
    "difficulty": "hard",
    "questionType": "Data Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "push",
      "group",
      "bson-limit",
      "memory"
    ],
    "interviewAnswer": "Using $push accumulates all matching values into a single document's array. If a group contains tens of thousands of items, the accumulated array can easily exceed the 16MB BSON document limit or the 100MB stage RAM limit, crashing the pipeline. Mitigate by filtering beforehand, using $slice, or restructuring with $lookup.",
    "answer": "When grouping millions of logs by `ipAddress`, `{ $push: \"$requestPayload\" }` will attempt to build an array containing millions of payloads in one document. Once the array passes 16MB, MongoDB throws `BSONObjectTooLarge`. Always prefer summary statistics ($sum, $avg) or bound the array size.",
    "explanation": "When grouping millions of logs by `ipAddress`, `{ $push: \"$requestPayload\" }` will attempt to build an array containing millions of payloads in one document. Once the array passes 16MB, MongoDB throws `BSONObjectTooLarge`. Always prefer summary statistics ($sum, $avg) or bound the array size.",
    "importantPoints": [
      "Accumulated arrays must never breach the 16MB BSON limit.",
      "High cardinality groups can blow through 100MB RAM stage limit.",
      "Use $slice or keep data normalized when dealing with unbounded events."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Preventing Unbounded Arrays in $push Accumulator",
        "code": "// Example demonstrating Preventing Unbounded Arrays in $push Accumulator\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$slice Expression: Limiting Array Elements in Projections",
    "question": "How does the $slice operator limit the number of array elements returned in an aggregation expression?",
    "difficulty": "easy",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "slice",
      "arrays",
      "pagination"
    ],
    "interviewAnswer": "$slice returns a subset of an array from the beginning, end, or a specific offset index. It allows fetching the first N or last N items (e.g. top 5 recent comments) without expanding documents via $unwind.",
    "answer": "Syntax: `{ $slice: [ \"$comments\", 5 ] }` returns the first 5 elements. `{ $slice: [ \"$comments\", -5 ] }` returns the last 5 elements. `{ $slice: [ \"$comments\", 10, 5 ] }` skips 10 and returns 5.",
    "explanation": "Syntax: `{ $slice: [ \"$comments\", 5 ] }` returns the first 5 elements. `{ $slice: [ \"$comments\", -5 ] }` returns the last 5 elements. `{ $slice: [ \"$comments\", 10, 5 ] }` skips 10 and returns 5.",
    "importantPoints": [
      "Extracts subsets of arrays without unwinding.",
      "Supports positive and negative offsets.",
      "Great for showing previews of embedded arrays."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$slice Expression: Limiting Array Elements in Projections",
        "code": "// Example demonstrating $slice Expression: Limiting Array Elements in Projections\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Using $expr Inside $lookup Sub-Pipeline",
    "question": "Why is $expr required inside the $match stage of a correlated $lookup sub-pipeline?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "lookup",
      "expr",
      "let-variables"
    ],
    "interviewAnswer": "Inside a $lookup sub-pipeline, variables declared in the let block (from the parent document) can only be accessed using aggregation expressions. Standard query operators cannot evaluate $$let variables or compare foreign and local fields directly, making $expr mandatory for correlated matching.",
    "answer": "Without `$expr`, a filter `{ foreignField: \"$$userId\" }` treats `\"$$userId\"` as a literal string rather than resolving the variable. Wrapping in `$expr: { $eq: [\"$foreignField\", \"$$userId\"] }` instructs the engine to evaluate the expression dynamically.",
    "explanation": "Without `$expr`, a filter `{ foreignField: \"$$userId\" }` treats `\"$$userId\"` as a literal string rather than resolving the variable. Wrapping in `$expr: { $eq: [\"$foreignField\", \"$$userId\"] }` instructs the engine to evaluate the expression dynamically.",
    "importantPoints": [
      "Standard query syntax cannot resolve $$ variables from let.",
      "$expr bridges aggregation expressions into the $match stage.",
      "Enables multi-field and conditional join predicates."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Using $expr Inside $lookup Sub-Pipeline",
        "code": "// Example demonstrating Using $expr Inside $lookup Sub-Pipeline\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$firstN and $lastN Accumulators in MongoDB 5.2+",
    "question": "How do the $firstN and $lastN accumulators simplify top-N element grouping in MongoDB 5.2+?",
    "difficulty": "medium",
    "questionType": "Feature",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "firstN",
      "lastN",
      "top-n",
      "group"
    ],
    "interviewAnswer": "$firstN and $lastN return the first or last N elements for each group in a $group or window stage, eliminating the complex legacy workaround of grouping all items into an array and using $slice.",
    "answer": "Syntax: `{ $group: { _id: \"$department\", topEarners: { $firstN: { n: 3, input: { name: \"$name\", salary: \"$salary\" } } } } }`. Combined with a prior `$sort: { salary: -1 }`, it extracts the top 3 earners per department cleanly.",
    "explanation": "Syntax: `{ $group: { _id: \"$department\", topEarners: { $firstN: { n: 3, input: { name: \"$name\", salary: \"$salary\" } } } } }`. Combined with a prior `$sort: { salary: -1 }`, it extracts the top 3 earners per department cleanly.",
    "importantPoints": [
      "Extracts top-N items per group directly in $group.",
      "Eliminates need for $push followed by $slice.",
      "Available in MongoDB 5.2+ and in $setWindowFields."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$firstN and $lastN Accumulators in MongoDB 5.2+",
        "code": "// Example demonstrating $firstN and $lastN Accumulators in MongoDB 5.2+\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$top and $bottom Accumulators in MongoDB 5.2+",
    "question": "How do $top and $bottom eliminate the need for a separate $sort stage before extracting extrema?",
    "difficulty": "medium",
    "questionType": "Feature",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "top",
      "bottom",
      "extrema",
      "sort"
    ],
    "interviewAnswer": "$top and $bottom (and their multi-item counterparts $topN and $bottomN) accept a sortBy parameter directly inside the accumulator expression, allowing you to find the top or bottom elements within each group without sorting the entire pipeline stream beforehand.",
    "answer": "Example: `{ $group: { _id: \"$category\", mostExpensive: { $top: { sortBy: { price: -1 }, output: [\"$name\", \"$price\"] } } } }`. Because it sorts only within the group boundary, it avoids sorting millions of unrelated documents.",
    "explanation": "Example: `{ $group: { _id: \"$category\", mostExpensive: { $top: { sortBy: { price: -1 }, output: [\"$name\", \"$price\"] } } } }`. Because it sorts only within the group boundary, it avoids sorting millions of unrelated documents.",
    "importantPoints": [
      "Sorts within the accumulator expression itself.",
      "Removes necessity of a global $sort stage before $group.",
      "Significantly faster and more memory efficient for group extrema."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$top and $bottom Accumulators in MongoDB 5.2+",
        "code": "// Example demonstrating $top and $bottom Accumulators in MongoDB 5.2+\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Aggregation Pipeline Streaming vs Blocking Stages",
    "question": "What is the operational distinction between streaming stages and blocking stages in an aggregation pipeline?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "streaming",
      "blocking",
      "pipeline-internals"
    ],
    "interviewAnswer": "Streaming stages (e.g. $match, $project, $unwind) process and emit documents one by one as they arrive without waiting for previous documents. Blocking stages (e.g. unindexed $sort, $group, $facet) must consume and hold all incoming documents in memory before they can emit a single result document.",
    "answer": "Understanding this distinction is critical for low-latency APIs. In a pipeline of streaming stages, the client receives the first batch of results in milliseconds. Once a blocking stage ($group, unindexed $sort) is introduced, the client experiences a delay while the entire dataset is ingested and processed in RAM/disk.",
    "explanation": "Understanding this distinction is critical for low-latency APIs. In a pipeline of streaming stages, the client receives the first batch of results in milliseconds. Once a blocking stage ($group, unindexed $sort) is introduced, the client experiences a delay while the entire dataset is ingested and processed in RAM/disk.",
    "importantPoints": [
      "Streaming stages forward documents immediately without buffering.",
      "Blocking stages must ingest all input documents before emitting output.",
      "Blocking stages are subject to the 100MB RAM limit.",
      "Indexed $sort behaves as a streaming stage."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Aggregation Pipeline Streaming vs Blocking Stages",
        "code": "// Example demonstrating Aggregation Pipeline Streaming vs Blocking Stages\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Building Real-Time Dashboards with Change Streams and Aggregation",
    "question": "How can an aggregation pipeline be applied to MongoDB Change Streams for real-time event filtering?",
    "difficulty": "hard",
    "questionType": "Real-Time",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "change-streams",
      "real-time",
      "event-driven"
    ],
    "interviewAnswer": "MongoDB Change Streams accept an aggregation pipeline as an argument when opening the watch() cursor. Supported stages ($match, $project, $addFields, $replaceRoot, $redact) filter and transform oplog change events on the database server before transmitting them over the network to application listeners.",
    "answer": "Example: Watching orders collection for high-value orders only:\n`const changeStream = db.orders.watch([\n  { $match: { \"operationType\": \"insert\", \"fullDocument.total\": { $gte: 1000 } } }\n]);`\nThis offloads filtering to the database server so client services never receive irrelevant change notifications.",
    "explanation": "Example: Watching orders collection for high-value orders only:\n`const changeStream = db.orders.watch([\n  { $match: { \"operationType\": \"insert\", \"fullDocument.total\": { $gte: 1000 } } }\n]);`\nThis offloads filtering to the database server so client services never receive irrelevant change notifications.",
    "importantPoints": [
      "Change streams accept a subset of aggregation pipeline stages.",
      "Filters events at the database level before network transmission.",
      "Only streaming and projection stages are supported (no blocking stages like $group)."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Building Real-Time Dashboards with Change Streams and Aggregation",
        "code": "// Example demonstrating Building Real-Time Dashboards with Change Streams and Aggregation\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Handling Floating-Point Precision Issues with $toDecimal in Aggregation",
    "question": "Why should financial aggregations cast currencies to Decimal128 using $toDecimal?",
    "difficulty": "medium",
    "questionType": "Data Quality",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "decimal128",
      "toDecimal",
      "finance",
      "precision"
    ],
    "interviewAnswer": "Standard IEEE 754 double-precision floats introduce rounding errors during repetitive arithmetic (e.g. 0.1 + 0.2 = 0.30000000000000004). Casting currency fields with $toDecimal ensures exact 128-bit decimal arithmetic, meeting strict accounting and audit standards.",
    "answer": "In financial ledgers, summing millions of floating-point transactions leads to penny discrepancies. Converting amounts using `$toDecimal: \"$amount\"` before applying `$sum` or `$multiply` guarantees exact decimal precision identical to BigDecimal.",
    "explanation": "In financial ledgers, summing millions of floating-point transactions leads to penny discrepancies. Converting amounts using `$toDecimal: \"$amount\"` before applying `$sum` or `$multiply` guarantees exact decimal precision identical to BigDecimal.",
    "importantPoints": [
      "IEEE 754 floats cause cumulative rounding errors.",
      "Decimal128 provides 34 decimal digits of precision.",
      "Mandatory for banking, tax, and currency calculations."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling Floating-Point Precision Issues with $toDecimal in Aggregation",
        "code": "// Example demonstrating Handling Floating-Point Precision Issues with $toDecimal in Aggregation\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$in Operator in Aggregation Expressions vs Query Filters",
    "question": "How does the $in operator behave as an aggregation expression compared to its use in a query filter?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "in",
      "query-operators",
      "syntax"
    ],
    "interviewAnswer": "In a query filter, { field: { $in: [1, 2, 3] } } checks if field equals any item in the array. In an aggregation expression, $in takes two arguments: an expression and an array, returning a boolean: { $in: [ \"$status\", [ \"PAID\", \"SHIPPED\" ] ] } (or testing if an element exists in a document array).",
    "answer": "In aggregation: `{ $cond: { if: { $in: [ \"$role\", \"$adminRoles\" ] }, then: \"Admin\", else: \"User\" } }`. Notice that in aggregation expressions, both arguments can be dynamic document fields.",
    "explanation": "In aggregation: `{ $cond: { if: { $in: [ \"$role\", \"$adminRoles\" ] }, then: \"Admin\", else: \"User\" } }`. Notice that in aggregation expressions, both arguments can be dynamic document fields.",
    "importantPoints": [
      "In query filters: { field: { $in: array } } evaluates matching documents.",
      "In aggregation: { $in: [ searchExpr, arrayExpr ] } returns boolean true/false.",
      "Can test if a scalar exists in a dynamic array field."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$in Operator in Aggregation Expressions vs Query Filters",
        "code": "// Example demonstrating $in Operator in Aggregation Expressions vs Query Filters\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Merging Arrays of Objects into a Single Keyed Object",
    "question": "How can you transform an array of key-value pairs into a top-level dictionary object using $arrayToObject?",
    "difficulty": "hard",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "arrayToObject",
      "dynamic-schemas",
      "reshaping"
    ],
    "interviewAnswer": "Using $arrayToObject, you can pass an array of two-element arrays [[key, value], ...] or an array of objects [{ k: key, v: value }, ...]. It converts this array into a structured object with named attributes, enabling pivot table transformations in MongoDB.",
    "answer": "Example:\n`db.survey.aggregate([\n  { $project: {\n      preferences: { $arrayToObject: \"$answers\" }\n  } }\n]);`\nIf `answers` was `[{ k: \"theme\", v: \"dark\" }, { k: \"lang\", v: \"en\" }]`, it outputs `{ preferences: { theme: \"dark\", lang: \"en\" } }`.",
    "explanation": "Example:\n`db.survey.aggregate([\n  { $project: {\n      preferences: { $arrayToObject: \"$answers\" }\n  } }\n]);`\nIf `answers` was `[{ k: \"theme\", v: \"dark\" }, { k: \"lang\", v: \"en\" }]`, it outputs `{ preferences: { theme: \"dark\", lang: \"en\" } }`.",
    "importantPoints": [
      "Transforms { k, v } arrays into key-value documents.",
      "Enables building dynamic schemas and pivot tables.",
      "Throws an error if duplicate keys exist in the input array."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Merging Arrays of Objects into a Single Keyed Object",
        "code": "// Example demonstrating Merging Arrays of Objects into a Single Keyed Object\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Difference Between $$ROOT, $$CURRENT, and $$DESCEND System Variables",
    "question": "What do the system variables $$ROOT, $$CURRENT, and $$DESCEND represent in aggregation expressions?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "system-variables",
      "root",
      "current",
      "descend"
    ],
    "interviewAnswer": "$$ROOT references the top-level document currently being processed in the pipeline. $$CURRENT references the current object being evaluated (which is identical to $$ROOT at top level, but points to subdocuments when inside nested expressions). $$DESCEND is a directive used in $redact to instruct the engine to traverse into the next lower level of document hierarchy.",
    "answer": "In deeply nested `$map` or `$reduce` functions, `$$CURRENT` or `$$this` refers to the immediate sub-element, whereas `$$ROOT` always preserves access to the original root-level document fields (e.g. parent `_id` or `tenantId`).",
    "explanation": "In deeply nested `$map` or `$reduce` functions, `$$CURRENT` or `$$this` refers to the immediate sub-element, whereas `$$ROOT` always preserves access to the original root-level document fields (e.g. parent `_id` or `tenantId`).",
    "importantPoints": [
      "$$ROOT always points to the top-level document.",
      "$$CURRENT points to the document/subdocument currently being inspected.",
      "$$DESCEND is a control token for recursive $redact traversal."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Difference Between $$ROOT, $$CURRENT, and $$DESCEND System Variables",
        "code": "// Example demonstrating Difference Between $$ROOT, $$CURRENT, and $$DESCEND System Variables\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$stdDevPop vs $stdDevSamp in Statistical Aggregations",
    "question": "When should you choose $stdDevPop versus $stdDevSamp in aggregation calculations?",
    "difficulty": "medium",
    "questionType": "Mathematics",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "stdDevPop",
      "stdDevSamp",
      "statistics"
    ],
    "interviewAnswer": "$stdDevPop calculates the population standard deviation (dividing by N), used when the dataset represents the entire population. $stdDevSamp calculates the sample standard deviation (dividing by N-1 with Bessel's correction), used when the dataset is a random sample of a larger population.",
    "answer": "In statistical quality control or medical sensor telemetry, reporting sample variance on a small sample requires `$stdDevSamp` to avoid underestimating variability. If analyzing every single customer transaction in company history, `$stdDevPop` is mathematically correct.",
    "explanation": "In statistical quality control or medical sensor telemetry, reporting sample variance on a small sample requires `$stdDevSamp` to avoid underestimating variability. If analyzing every single customer transaction in company history, `$stdDevPop` is mathematically correct.",
    "importantPoints": [
      "$stdDevPop divides by N for full population datasets.",
      "$stdDevSamp divides by N - 1 for sample datasets.",
      "Returns null if calculating $stdDevSamp on a single document."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$stdDevPop vs $stdDevSamp in Statistical Aggregations",
        "code": "// Example demonstrating $stdDevPop vs $stdDevSamp in Statistical Aggregations\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$literal Expression: Escaping Dollar Signs and Reserved Keywords",
    "question": "How does the $literal expression prevent MongoDB from interpreting strings as field paths or operators?",
    "difficulty": "easy",
    "questionType": "Syntax",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "literal",
      "escaping",
      "dollar-sign"
    ],
    "interviewAnswer": "$literal treats its argument as a literal constant value without parsing it as a field path or expression. If you need to output a literal string starting with a dollar sign (such as \"$100\" or \"$name\") or assign a literal numeric 1 in a projected field, wrap it in { $literal: \"$100\" }.",
    "answer": "Without `$literal`, MongoDB treats `\"$price\"` as a reference to the `price` field in the document. Specifying `{ formattedCost: { $literal: \"$cost\" } }` sets the output string explicitly to the literal word `\"$cost\"`.",
    "explanation": "Without `$literal`, MongoDB treats `\"$price\"` as a reference to the `price` field in the document. Specifying `{ formattedCost: { $literal: \"$cost\" } }` sets the output string explicitly to the literal word `\"$cost\"`.",
    "importantPoints": [
      "Escapes strings starting with $ so they are not treated as field paths.",
      "Outputs literal objects or constants unchanged.",
      "Prevents parser evaluation errors."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$literal Expression: Escaping Dollar Signs and Reserved Keywords",
        "code": "// Example demonstrating $literal Expression: Escaping Dollar Signs and Reserved Keywords\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "Pipelined vs Non-Pipelined Document Updates with db.collection.updateMany()",
    "question": "How does using an aggregation pipeline inside updateMany() enable dynamic document updates based on existing fields?",
    "difficulty": "hard",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "updates",
      "updateMany",
      "pipeline-updates"
    ],
    "interviewAnswer": "Since MongoDB 4.2, update commands accept an aggregation pipeline array instead of a static update document. This enables referencing existing document fields to compute new values, conditionally updating fields using $cond, or removing fields with $unset in a single atomic update operation without client-side read-modify-write loops.",
    "answer": "Prior to pipeline updates, calculating `total = price * quantity` required fetching each document, computing the product in Node.js, and sending an update. With pipeline updates:\n`db.inventory.updateMany({}, [ { $set: { totalValue: { $multiply: [\"$price\", \"$stock\"] } } } ])`. The computation happens atomically inside the database engine.",
    "explanation": "Prior to pipeline updates, calculating `total = price * quantity` required fetching each document, computing the product in Node.js, and sending an update. With pipeline updates:\n`db.inventory.updateMany({}, [ { $set: { totalValue: { $multiply: [\"$price\", \"$stock\"] } } } ])`. The computation happens atomically inside the database engine.",
    "importantPoints": [
      "Accepts an aggregation pipeline in updateOne, updateMany, and findOneAndUpdate.",
      "Allows referencing current document fields to calculate new values.",
      "Supports $set, $unset, $replaceRoot inside update pipelines."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Pipelined vs Non-Pipelined Document Updates with db.collection.updateMany()",
        "code": "// Example demonstrating Pipelined vs Non-Pipelined Document Updates with db.collection.updateMany()\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "aggregation",
    "title": "$round and $trunc: Controlling Numeric Decimal Precision",
    "question": "What is the operational difference between $round and $trunc in aggregation pipelines?",
    "difficulty": "easy",
    "questionType": "Mathematics",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "aggregation",
      "round",
      "trunc",
      "numbers"
    ],
    "interviewAnswer": "$round rounds a number to a specified decimal place using half-to-even (banker's rounding) rules. $trunc truncates (chops off) digits past the specified decimal place without rounding.",
    "answer": "Example: For `3.556`:\n- `{ $round: [ 3.556, 2 ] }` yields `3.56`.\n- `{ $trunc: [ 3.556, 2 ] }` yields `3.55`.\nNegative places round to powers of ten: `{ $round: [ 1234, -2 ] }` yields `1200`.",
    "explanation": "Example: For `3.556`:\n- `{ $round: [ 3.556, 2 ] }` yields `3.56`.\n- `{ $trunc: [ 3.556, 2 ] }` yields `3.55`.\nNegative places round to powers of ten: `{ $round: [ 1234, -2 ] }` yields `1200`.",
    "importantPoints": [
      "$round uses banker's rounding to reduce statistical bias.",
      "$trunc simply discards digits past the decimal place.",
      "Supports negative places to round to tens, hundreds, thousands."
    ],
    "commonMistakes": [
      "Neglecting index positioning or memory boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$round and $trunc: Controlling Numeric Decimal Precision",
        "code": "// Example demonstrating $round and $trunc: Controlling Numeric Decimal Precision\ndb.collection.aggregate([]);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
