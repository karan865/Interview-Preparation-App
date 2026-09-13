import { SeedQuestion } from '../types';

export const queryOperatorsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $expr Operator: Comparing Fields Within the Same Document",
    "question": "How does the $expr operator allow field-to-field comparisons and aggregation expressions within standard find() queries?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "expr",
      "aggregation-expressions",
      "find"
    ],
    "interviewAnswer": "The $expr operator allows using aggregation expressions directly inside find() query filters, enabling direct comparisons between two fields in the same document (e.g. find documents where spent > budget). It can also leverage multikey and standard indexes under certain equality expressions.",
    "answer": "Standard MongoDB query operators compare a field to a constant value (`{ age: { $gt: 18 } }`). They cannot compare two fields within the same document. The `$expr` operator bridges the Aggregation Framework into standard `find()`: `db.accounts.find({ $expr: { $gt: [\"$totalSpent\", \"$budgetLimit\"] } })`. It supports all aggregation comparison, arithmetic, and conditional expressions.",
    "explanation": "Prior to `$expr` (introduced in MongoDB 3.6), developers were forced to use `$where`, which invokes a slow JavaScript engine V8 context for every document. `$expr` runs natively in C++, executing orders of magnitude faster.",
    "importantPoints": [
      "Enables comparing two fields within the same document.",
      "Allows aggregation expressions ($cond, $multiply, $gt) inside find() queries.",
      "Replaces slow, insecure $where JavaScript evaluations.",
      "Can utilize indexes for equality comparisons since MongoDB 4.4."
    ],
    "commonMistakes": [
      "Using slow $where functions when $expr solves the problem natively.",
      "Forgetting the \"$\" sign prefix before field names inside $expr (e.g. \"$spent\" vs \"spent\")."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Comparing Document Fields with $expr",
        "code": "// Find products where current stock is below the reorder threshold:\ndb.inventory.find({\n  $expr: {\n    $lt: [ \"$stockQuantity\", \"$reorderLevel\" ]\n  }\n});\n\n// Compare discounted price against original:\ndb.products.find({\n  $expr: {\n    $gt: [\n      { $multiply: [ \"$price\", 0.8 ] },\n      \"$cost\"\n    ]\n  }\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "$elemMatch: Query Filtering vs Projection Operator",
    "question": "What is the operational difference between using $elemMatch in a query filter versus in a projection specification?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "elemmatch",
      "projection",
      "arrays"
    ],
    "interviewAnswer": "In a query filter, $elemMatch selects documents where at least one array element satisfies all criteria. In projection, $elemMatch limits the returned array to only the FIRST element that matches the condition, omitting non-matching array elements from the result.",
    "answer": "1) Query Filter `$elemMatch`: Evaluates whether a document should be returned. `{ scores: { $elemMatch: { type: \"exam\", score: { $gte: 90 } } } }` returns documents that possess at least one exam score >= 90. 2) Projection `$elemMatch`: Modifies the shape of the returned document. `db.students.find({ _id: 1 }, { scores: { $elemMatch: { type: \"exam\" } } })` returns only the first matching score element in the array, stripping other scores to minimize bandwidth.",
    "explanation": "Remember that projection `$elemMatch` returns at most ONE matching array element. If you need multiple filtered array elements returned, use an aggregation pipeline with `$filter`.",
    "importantPoints": [
      "Filter $elemMatch determines which documents match the query.",
      "Projection $elemMatch limits returned array to the first matching element.",
      "Projection $elemMatch does not return multiple matching elements (use $filter for that).",
      "Both ensure conditions apply to the exact same array element."
    ],
    "commonMistakes": [
      "Expecting projection $elemMatch to return all matching array elements (it only returns the first).",
      "Omitting filter $elemMatch and accidentally matching criteria across disjoint array items."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$elemMatch in Filter and Projection",
        "code": "// Query AND project only the matching award element:\ndb.athletes.find(\n  {\n    awards: {\n      $elemMatch: { year: 2024, medal: \"GOLD\" }\n    }\n  },\n  {\n    name: 1,\n    awards: {\n      $elemMatch: { year: 2024, medal: \"GOLD\" }\n    }\n  }\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "Why the $where Operator is Considered an Anti-Pattern",
    "question": "Why is the $where operator dangerous in MongoDB, and what performance and security risks does it introduce?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "tags": [
      "mongodb",
      "query-operators",
      "where-operator",
      "security",
      "nosql-injection"
    ],
    "interviewAnswer": "$where executes arbitrary JavaScript in the database server V8 engine. It cannot use indexes (forces a full collection scan), serializes execution through a single JavaScript thread, causes severe CPU bottlenecks, and opens the database to NoSQL JavaScript injection attacks.",
    "answer": "The `$where` operator allows passing a JavaScript function to evaluate documents. 1) Performance: It cannot leverage B-Tree indexes, forcing a collection scan (COLLSCAN) where every BSON document is converted to a JavaScript object. 2) Concurrency: The internal JavaScript engine locks and blocks other operations. 3) Security: Concatenating untrusted user input into a `$where` string allows attackers to execute malicious server-side JS (NoSQL injection). Always replace `$where` with `$expr`.",
    "explanation": "MongoDB allows disabling server-side JavaScript entirely via `--noscripting` in `mongod.conf`, which disables `$where` and secures the database.",
    "importantPoints": [
      "Cannot use indexes; always forces a full collection scan.",
      "Converts BSON to JavaScript objects per row, creating severe CPU spikes.",
      "High risk of NoSQL JavaScript injection vulnerability.",
      "Replaced entirely in modern MongoDB by $expr.",
      "Can be disabled globally via noscripting: true."
    ],
    "commonMistakes": [
      "Passing user-supplied parameters into $where strings without sanitization.",
      "Using $where for basic field comparisons that $expr handles in native C++."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Dangerous $where vs Safe $expr",
        "code": "// INSECURE & SLOW ($where):\n// db.users.find({ $where: \"this.credits < this.debt\" });\n\n// SECURE & FAST ($expr runs in native C++):\ndb.users.find({\n  $expr: { $lt: [\"$credits\", \"$debt\"] }\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "Logical Query Operators: $and, $or, $nor, and Implicit AND",
    "question": "How do $and, $or, and $nor operate in MongoDB, and when is an explicit $and required instead of implicit comma-separated filters?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "and",
      "or",
      "nor",
      "logical-operators"
    ],
    "interviewAnswer": "MongoDB implicitly ANDs multiple comma-separated query fields ({ status: \"A\", age: { $gt: 25 } }). An explicit $and is required ONLY when specifying multiple conditions on the SAME field or operator (e.g. $or conditions), or when combining multiple $elemMatch clauses on the same array.",
    "answer": "1) Implicit AND: `{ status: \"ACTIVE\", priority: 1 }` matches documents where both conditions hold true. 2) Explicit `$and`: Required when repeating the same field key in a query, because JSON object keys cannot be duplicated: `{ $and: [ { price: { $ne: 1.99 } }, { price: { $exists: true } } ] }` or `{ $and: [ { $or: [...] }, { $or: [...] } ] }`. 3) `$or`: Evaluates an array of clauses; matches if ANY clause is true. Can utilize multiple single-column indexes via index union. 4) `$nor`: Matches documents that fail ALL specified clauses.",
    "explanation": "For `$or` queries, each clause can use its own index. For example, if clause 1 queries indexed `email` and clause 2 queries indexed `phone`, MongoDB scans both indexes and merges the results.",
    "importantPoints": [
      "Comma-separated fields are implicitly evaluated with AND.",
      "Explicit $and is required when evaluating identical keys or multiple $or blocks.",
      "$or enables index union across multiple independent single-field indexes.",
      "$nor matches documents that satisfy NONE of the specified conditions."
    ],
    "commonMistakes": [
      "Wrapping every standard query in an unnecessary $and array.",
      "Trying to specify duplicate keys in a single JSON object ({ price: { $gt: 10 }, price: { $lt: 20 } }) without using $and or combining operators ({ price: { $gt: 10, $lt: 20 } })."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Combining $or and $and Queries",
        "code": "// Match users who are either ADMIN or MANAGER, AND have verified their email:\ndb.users.find({\n  isVerified: true, // Implicit AND\n  $or: [\n    { role: \"ADMIN\" },\n    { role: \"MANAGER\" }\n  ]\n});\n\n// Explicit $and for multiple $or conditions:\ndb.events.find({\n  $and: [\n    { $or: [{ type: \"LOGIN\" }, { type: \"AUTH\" }] },\n    { $or: [{ severity: \"HIGH\" }, { urgent: true }] }\n  ]\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $all Operator vs $in Operator for Arrays",
    "question": "Explain the difference between the $all and $in operators when querying array fields in MongoDB.",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "all-operator",
      "in-operator",
      "arrays"
    ],
    "interviewAnswer": "$all requires the document array to contain ALL specified elements (set superset match). $in requires the document array to contain AT LEAST ONE of the specified elements (set intersection match).",
    "answer": "Given a collection with documents containing `skills: [\"js\", \"react\", \"node\"]`: 1) `{ skills: { $all: [\"react\", \"node\"] } }` matches because both elements exist in the array (regardless of order or other elements). 2) `{ skills: { $in: [\"react\", \"python\"] } }` matches because \"react\" is present, even though \"python\" is not.",
    "explanation": "`$all` is internally equivalent to an `$and` expression containing equality checks for each listed element: `{ $and: [ { skills: \"react\" }, { skills: \"node\" } ] }`. Both operators can leverage multikey B-Tree indexes.",
    "importantPoints": [
      "$all: Array must contain every listed element (AND semantics).",
      "$in: Array must contain at least one listed element (OR semantics).",
      "Element order inside the target array does not matter for $all.",
      "Both leverage multikey indexes."
    ],
    "commonMistakes": [
      "Using an array literal { skills: [\"react\", \"node\"] } expecting $all behavior (an array literal requires exact sequence and length match).",
      "Using $all with a single element where a scalar equality check is simpler."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$all vs $in Array Querying",
        "code": "// Requires candidate to know BOTH Docker AND Kubernetes:\ndb.candidates.find({\n  skills: { $all: [\"Docker\", \"Kubernetes\"] }\n});\n\n// Matches candidate who knows EITHER Python OR Go:\ndb.candidates.find({\n  skills: { $in: [\"Python\", \"Go\"] }\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "Geospatial Operators: $near vs $geoWithin",
    "question": "What is the difference between $near and $geoWithin in MongoDB geospatial queries?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "geospatial",
      "near",
      "geowithin",
      "2dsphere"
    ],
    "interviewAnswer": "$near returns documents sorted by distance from a point, and requires a 2dsphere or 2d geospatial index. $geoWithin selects documents enclosed within a bounding polygon or circle, does NOT sort by distance, and does not strictly require an index (though an index accelerates it).",
    "answer": "Use `$near` when you need \"nearest restaurants ordered by proximity\". Use `$geoWithin` when you need \"all delivery drivers currently inside delivery zone polygon\" without needing them sorted by distance.",
    "explanation": "Use `$near` when you need \"nearest restaurants ordered by proximity\". Use `$geoWithin` when you need \"all delivery drivers currently inside delivery zone polygon\" without needing them sorted by distance.",
    "importantPoints": [
      "$near sorts output automatically from closest to furthest.",
      "$near requires a 2dsphere index.",
      "$geoWithin checks polygon boundary enclosure without sorting."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Geospatial Operators: $near vs $geoWithin",
        "code": "// Demonstration for: Geospatial Operators: $near vs $geoWithin\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $size Operator and Exact Array Length Matching",
    "question": "How does the $size operator work, and why cannot it match ranges of array lengths ($gt, $lt)?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "size",
      "arrays",
      "limitations"
    ],
    "interviewAnswer": "$size matches documents where an array has an exact number of elements ($size: 5). It does NOT support range operators ($gt, $lt). To query arrays with length > 5, check for existence of the 5th index: { \"items.5\": { $exists: true } } or store a separate count field.",
    "answer": "`db.orders.find({ items: { $size: 3 } })` matches orders with exactly 3 items. MongoDB cannot index array length. If you need range queries on array lengths, maintain an indexed counter field (`itemCount`) using `$inc` during array updates.",
    "explanation": "`db.orders.find({ items: { $size: 3 } })` matches orders with exactly 3 items. MongoDB cannot index array length. If you need range queries on array lengths, maintain an indexed counter field (`itemCount`) using `$inc` during array updates.",
    "importantPoints": [
      "$size only accepts exact numbers, not range comparisons.",
      "Workaround for length > N: { \"array.N\": { $exists: true } }.",
      "Best practice: Maintain an indexed array size counter field."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $size Operator and Exact Array Length Matching",
        "code": "// Demonstration for: The $size Operator and Exact Array Length Matching\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $mod Operator for Modulo Division",
    "question": "How does the $mod operator work in MongoDB query filters?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "mod",
      "arithmetic"
    ],
    "interviewAnswer": "$mod performs modulo division on a numeric field and matches if the remainder equals a specified value: { field: { $mod: [divisor, remainder] } } (e.g. $mod: [2, 0] for even numbers).",
    "answer": "`db.users.find({ userNumber: { $mod: [10, 0] } })` matches documents where userNumber is divisible by 10 with remainder 0. Ideal for batch worker partitioning and sharding tests.",
    "explanation": "`db.users.find({ userNumber: { $mod: [10, 0] } })` matches documents where userNumber is divisible by 10 with remainder 0. Ideal for batch worker partitioning and sharding tests.",
    "importantPoints": [
      "Syntax: { field: { $mod: [divisor, remainder] } }.",
      "Useful for round-robin worker partitioning."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $mod Operator for Modulo Division",
        "code": "// Demonstration for: The $mod Operator for Modulo Division\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $text Operator for Full-Text Search",
    "question": "How does the $text operator operate, and what are its prerequisites in a collection?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "text",
      "full-text-search",
      "indexes"
    ],
    "interviewAnswer": "$text performs natural language full-text search across fields indexed with a text index. A collection can have at most ONE text index (which can cover multiple fields). It supports phrase search, negation (-word), and relevance scoring.",
    "answer": "`db.articles.find({ $text: { $search: \"mongodb database -legacy\" } }, { score: { $meta: \"textScore\" } }).sort({ score: { $meta: \"textScore\" } })`. Searches tokenized stemmed words, excluding words prefixed with minus.",
    "explanation": "`db.articles.find({ $text: { $search: \"mongodb database -legacy\" } }, { score: { $meta: \"textScore\" } }).sort({ score: { $meta: \"textScore\" } })`. Searches tokenized stemmed words, excluding words prefixed with minus.",
    "importantPoints": [
      "Requires a text index (max 1 text index per collection).",
      "Supports language stemming and stop words.",
      "$meta: \"textScore\" allows sorting by relevance."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $text Operator for Full-Text Search",
        "code": "// Demonstration for: The $text Operator for Full-Text Search\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $not Operator vs $ne Operator",
    "question": "How does the $not operator differ from $ne in logical negation?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "not",
      "ne",
      "negation"
    ],
    "interviewAnswer": "$ne is an equality comparison operator ({ age: { $ne: 20 } }). $not is a meta-operator that negates other operator expressions ({ price: { $not: { $gt: 100 } } }) and also matches documents that DO NOT contain the field.",
    "answer": "`{ price: { $not: { $gt: 100 } } }` matches documents where price <= 100 AND documents where the `price` field does not exist. `$not` cannot be applied to top-level regex operators without the `$regex` operator syntax.",
    "explanation": "`{ price: { $not: { $gt: 100 } } }` matches documents where price <= 100 AND documents where the `price` field does not exist. `$not` cannot be applied to top-level regex operators without the `$regex` operator syntax.",
    "importantPoints": [
      "$not negates other query operators.",
      "Matches documents lacking the specified field.",
      "$ne tests direct value inequality."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $not Operator vs $ne Operator",
        "code": "// Demonstration for: The $not Operator vs $ne Operator\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "Bitwise Query Operators ($bitsAllSet, $bitsAnySet)",
    "question": "What are MongoDB bitwise query operators and when are they used?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "bitwise",
      "bitmask",
      "flags"
    ],
    "interviewAnswer": "Bitwise operators ($bitsAllSet, $bitsAnySet, $bitsAllClear, $bitsAnyClear) test specific bit patterns or bitmasks inside numeric or binary fields, ideal for compact permission systems or hardware sensor bitflags.",
    "answer": "Instead of storing 30 boolean flags, store a 32-bit integer `permissions`. Querying `db.users.find({ permissions: { $bitsAllSet: [0, 3] } })` tests if bit positions 0 and 3 are set to 1.",
    "explanation": "Instead of storing 30 boolean flags, store a 32-bit integer `permissions`. Querying `db.users.find({ permissions: { $bitsAllSet: [0, 3] } })` tests if bit positions 0 and 3 are set to 1.",
    "importantPoints": [
      "Enables bitmask flag queries.",
      "Accepts bit position arrays or numeric bitmasks.",
      "Eliminates dozens of boolean fields."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Bitwise Query Operators ($bitsAllSet, $bitsAnySet)",
        "code": "// Demonstration for: Bitwise Query Operators ($bitsAllSet, $bitsAnySet)\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $geoIntersects Operator for Spatial Geometries",
    "question": "How does $geoIntersects differ from $geoWithin in geospatial analysis?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "geospatial",
      "geointersects",
      "2dsphere"
    ],
    "interviewAnswer": "$geoWithin checks if an entity is completely CONTAINED within a geometry. $geoIntersects selects geometries that intersect (overlap or cross) a specified GeoJSON geometry, including lines and polygons.",
    "answer": "If checking whether a delivery route (LineString) crosses a flood zone (Polygon), `$geoWithin` fails because the route is not fully enclosed. `$geoIntersects` matches because the line crosses the polygon boundary.",
    "explanation": "If checking whether a delivery route (LineString) crosses a flood zone (Polygon), `$geoWithin` fails because the route is not fully enclosed. `$geoIntersects` matches because the line crosses the polygon boundary.",
    "importantPoints": [
      "Matches spatial overlaps, crossings, and touching boundaries.",
      "Supports Point, LineString, Polygon, MultiPolygon.",
      "Requires 2dsphere index for performance."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $geoIntersects Operator for Spatial Geometries",
        "code": "// Demonstration for: The $geoIntersects Operator for Spatial Geometries\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "Evaluation Operators: $jsonSchema in Queries",
    "question": "Can the $jsonSchema operator be used inside standard find() queries?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "jsonschema",
      "data-validation"
    ],
    "interviewAnswer": "Yes! $jsonSchema can be used directly in find() queries to locate documents that conform or do NOT conform to a specific schema definition (e.g. find({ $jsonSchema: { ... } }) or find({ $nor: [{ $jsonSchema: ... }] })).",
    "answer": "Using `$jsonSchema` inside a query is the fastest way to audit legacy collections for schema drift: `db.users.find({ $nor: [{ $jsonSchema: mySchema }] })` immediately returns all dirty documents that violate the schema.",
    "explanation": "Using `$jsonSchema` inside a query is the fastest way to audit legacy collections for schema drift: `db.users.find({ $nor: [{ $jsonSchema: mySchema }] })` immediately returns all dirty documents that violate the schema.",
    "importantPoints": [
      "Enables querying for schema non-conforming documents.",
      "Audits data quality before adding schema validation rules.",
      "Leverages JSON Schema standard."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Evaluation Operators: $jsonSchema in Queries",
        "code": "// Demonstration for: Evaluation Operators: $jsonSchema in Queries\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "Querying Nested Array of Arrays",
    "question": "How does MongoDB query arrays nested inside other arrays (matrix structures)?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "nested-arrays",
      "arrays"
    ],
    "interviewAnswer": "MongoDB automatically flattens arrays when using dot notation. To match specific nested coordinates, query by index (matrix.0.1: 5) or use $elemMatch on the outer array matching the inner array.",
    "answer": "In `{ matrix: [[1, 2], [3, 4]] }`, querying `{ matrix: 2 }` matches because MongoDB traverses nested array elements recursively. Querying `{ \"matrix.1.0\": 3 }` targets specific row/column indices.",
    "explanation": "In `{ matrix: [[1, 2], [3, 4]] }`, querying `{ matrix: 2 }` matches because MongoDB traverses nested array elements recursively. Querying `{ \"matrix.1.0\": 3 }` targets specific row/column indices.",
    "importantPoints": [
      "MongoDB flattens nested arrays during value traversal.",
      "Index dot notation queries specific cell positions."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Querying Nested Array of Arrays",
        "code": "// Demonstration for: Querying Nested Array of Arrays\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $nin Operator Performance and Optimization",
    "question": "Why does the $nin (Not In) operator often result in poor query performance?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "nin",
      "indexes",
      "performance"
    ],
    "interviewAnswer": "$nin is a negative operator. It cannot seek a tight B-Tree index boundary, forcing the engine to scan almost all index keys or perform a full collection scan to verify non-membership.",
    "answer": "Like `NOT IN` in SQL, `{ status: { $nin: [\"CANCELLED\", \"FAILED\"] } }` requires evaluating most of the collection. To optimize, invert the query to positive matching whenever possible: `{ status: { $in: [\"PENDING\", \"ACTIVE\", \"COMPLETED\"] } }`, which enables direct index seeks.",
    "explanation": "Like `NOT IN` in SQL, `{ status: { $nin: [\"CANCELLED\", \"FAILED\"] } }` requires evaluating most of the collection. To optimize, invert the query to positive matching whenever possible: `{ status: { $in: [\"PENDING\", \"ACTIVE\", \"COMPLETED\"] } }`, which enables direct index seeks.",
    "importantPoints": [
      "$nin forces broad index or collection scans.",
      "Invert to positive $in operators whenever possible.",
      "Negative operators have poor selectivity."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $nin Operator Performance and Optimization",
        "code": "// Demonstration for: The $nin Operator Performance and Optimization\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "Combining Comparison Operators on the Same Field",
    "question": "How do you query a range on a single field using $gte and $lte without an explicit $and?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "comparison",
      "range-query"
    ],
    "interviewAnswer": "Combine operators in a single subdocument: db.products.find({ price: { $gte: 50, $lte: 100 } });",
    "answer": "MongoDB allows multiple operator keys on the same target field: `{ age: { $gte: 21, $lt: 65 } }`. The engine evaluates this as a range scan on the indexed `age` field.",
    "explanation": "MongoDB allows multiple operator keys on the same target field: `{ age: { $gte: 21, $lt: 65 } }`. The engine evaluates this as a range scan on the indexed `age` field.",
    "importantPoints": [
      "Combines multiple criteria on a single field.",
      "Executes as an index range scan between bounds."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Combining Comparison Operators on the Same Field",
        "code": "// Demonstration for: Combining Comparison Operators on the Same Field\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "Case-Insensitive Regex vs Collation Performance",
    "question": "Compare `db.users.find({ name: /^john$/i })` against `db.users.find({ name: \"john\" }).collation({ locale: \"en\", strength: 2 })`.",
    "difficulty": "hard",
    "questionType": "Performance",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "regex",
      "collation",
      "performance"
    ],
    "interviewAnswer": "The case-insensitive regex (/^john$/i) cannot use an index seek, forcing a full index scan of every key in the B-Tree. The Collation query uses a direct B-Tree index seek on a collation-aware index, executing 100x faster.",
    "answer": "The `i` flag in regex forces MongoDB to evaluate the regex engine on every entry. Creating an index with `{ collation: { locale: \"en\", strength: 2 } }` allows normal string equality to perform direct root-to-leaf B-Tree seeks in O(log N).",
    "explanation": "The `i` flag in regex forces MongoDB to evaluate the regex engine on every entry. Creating an index with `{ collation: { locale: \"en\", strength: 2 } }` allows normal string equality to perform direct root-to-leaf B-Tree seeks in O(log N).",
    "importantPoints": [
      "Regex \"i\" flag invalidates index seeks.",
      "Collation strength 2 enables full B-Tree index seeks.",
      "Collation is the professional standard for case-insensitive querying."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Case-Insensitive Regex vs Collation Performance",
        "code": "// Demonstration for: Case-Insensitive Regex vs Collation Performance\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $centerSphere Operator for Geospatial Radii",
    "question": "How do you query documents within a 10-kilometer radius of a coordinate using $geoWithin and $centerSphere?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "geospatial",
      "centersphere",
      "2dsphere"
    ],
    "interviewAnswer": "Convert distance to radians by dividing by Earth's radius (approx. 6378.1 km): db.places.find({ location: { $geoWithin: { $centerSphere: [ [lng, lat], 10 / 6378.1 ] } } });",
    "answer": "`$centerSphere` takes `[ [longitude, latitude], radius_in_radians ]`. Because Earth's equatorial radius is ~6,378.1 km (or 3,963.2 miles), dividing target distance by Earth's radius yields spherical radians.",
    "explanation": "`$centerSphere` takes `[ [longitude, latitude], radius_in_radians ]`. Because Earth's equatorial radius is ~6,378.1 km (or 3,963.2 miles), dividing target distance by Earth's radius yields spherical radians.",
    "importantPoints": [
      "Takes coordinate array [lng, lat] and radius in radians.",
      "Divide km by 6378.1 (or miles by 3963.2).",
      "Coordinate order is always [Longitude, Latitude] in GeoJSON."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $centerSphere Operator for Geospatial Radii",
        "code": "// Demonstration for: The $centerSphere Operator for Geospatial Radii\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "GeoJSON Coordinate Order Trap (Longitude vs Latitude)",
    "question": "What is the critical coordinate ordering rule in MongoDB GeoJSON, and what happens if latitude and longitude are reversed?",
    "difficulty": "easy",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "geospatial",
      "geojson",
      "coordinates",
      "pitfalls"
    ],
    "interviewAnswer": "GeoJSON strictly requires [Longitude, Latitude] order (X, Y). Reversing them to [Latitude, Longitude] causes invalid coordinates (latitude cannot exceed ±90°), throwing index errors or placing points in the wrong hemisphere.",
    "answer": "In everyday speech, people say \"Latitude, Longitude\". In GeoJSON and cartesian mapping, it is strictly `[Longitude (-180 to 180), Latitude (-90 to 90)]`. Putting latitude first triggers fatal `Point coordinate out of bounds` errors.",
    "explanation": "In everyday speech, people say \"Latitude, Longitude\". In GeoJSON and cartesian mapping, it is strictly `[Longitude (-180 to 180), Latitude (-90 to 90)]`. Putting latitude first triggers fatal `Point coordinate out of bounds` errors.",
    "importantPoints": [
      "GeoJSON order: [Longitude, Latitude].",
      "Longitude bounds: -180 to 180; Latitude bounds: -90 to 90.",
      "Reversing coordinates causes geospatial query failures."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "GeoJSON Coordinate Order Trap (Longitude vs Latitude)",
        "code": "// Demonstration for: GeoJSON Coordinate Order Trap (Longitude vs Latitude)\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $comment Operator for Query Tracing",
    "question": "What is the purpose of the $comment query operator, and how does it assist database administrators?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "comment",
      "profiling",
      "monitoring"
    ],
    "interviewAnswer": "The $comment operator attaches an arbitrary annotation or request trace ID to a query. This comment appears in database profiler logs, mongod system logs, and currentOp(), allowing DBAs to trace slow queries directly back to specific application API routes.",
    "answer": "`db.users.find({ status: \"ACTIVE\" }).comment(\"API_ROUTE: /api/v1/users/active; ReqID: \" + reqId)`. When queries appear in `system.profile` or slow logs, the comment identifies the exact microservice and endpoint that generated it.",
    "explanation": "`db.users.find({ status: \"ACTIVE\" }).comment(\"API_ROUTE: /api/v1/users/active; ReqID: \" + reqId)`. When queries appear in `system.profile` or slow logs, the comment identifies the exact microservice and endpoint that generated it.",
    "importantPoints": [
      "Attaches metadata annotations to queries.",
      "Appears in system.profile, slow logs, and currentOp().",
      "Essential for distributed tracing in microservices."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $comment Operator for Query Tracing",
        "code": "// Demonstration for: The $comment Operator for Query Tracing\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "Matching Array Elements by Index Position",
    "question": "How do you query documents where the second element of an array equals a specific value?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "arrays",
      "dot-notation"
    ],
    "interviewAnswer": "Use dot notation with zero-based index: db.scores.find({ \"history.1\": 100 }); matches documents where the second element of the history array is 100.",
    "answer": "MongoDB treats numeric keys in dot notation as zero-based array indices: `\"items.0\"` targets first element; `\"items.1\"` targets second element. Can be indexed with multikey indexes.",
    "explanation": "MongoDB treats numeric keys in dot notation as zero-based array indices: `\"items.0\"` targets first element; `\"items.1\"` targets second element. Can be indexed with multikey indexes.",
    "importantPoints": [
      "Dot notation with numeric string accesses zero-based array index.",
      "Enables targeting specific positional elements."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Matching Array Elements by Index Position",
        "code": "// Demonstration for: Matching Array Elements by Index Position\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $bitsAnyClear Operator in Bitmask Flagging",
    "question": "How does $bitsAnyClear differ from $bitsAllClear?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "bitwise",
      "bitsanyclear",
      "bitsallclear"
    ],
    "interviewAnswer": "$bitsAllClear matches if ALL specified bit positions are 0. $bitsAnyClear matches if AT LEAST ONE of the specified bit positions is 0.",
    "answer": "If checking whether a feature is disabled across multiple flags: `{ flags: { $bitsAnyClear: [1, 2] } }` matches if either bit 1 is 0 OR bit 2 is 0.",
    "explanation": "If checking whether a feature is disabled across multiple flags: `{ flags: { $bitsAnyClear: [1, 2] } }` matches if either bit 1 is 0 OR bit 2 is 0.",
    "importantPoints": [
      "$bitsAllClear: All specified bits must be 0.",
      "$bitsAnyClear: At least one specified bit must be 0."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $bitsAnyClear Operator in Bitmask Flagging",
        "code": "// Demonstration for: The $bitsAnyClear Operator in Bitmask Flagging\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "Querying by ObjectId String vs BSON ObjectId",
    "question": "Why does `db.users.find({ _id: \"65e21f92a1b2c3d4e5f67890\" })` return null when that document exists?",
    "difficulty": "easy",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "objectid",
      "bson-types",
      "pitfalls"
    ],
    "interviewAnswer": "Because \"65e21f...\" is a BSON String, while the document _id is stored as a 12-byte BSON ObjectId. MongoDB is strictly typed; a String never matches an ObjectId. You must wrap the hex string in ObjectId(\"...\").",
    "answer": "A ubiquitous junior bug: REST APIs receive string IDs from URL params. Passing the raw string directly into the query `{ _id: req.params.id }` fails because String != ObjectId. Drivers require converting with `new ObjectId(req.params.id)`.",
    "explanation": "A ubiquitous junior bug: REST APIs receive string IDs from URL params. Passing the raw string directly into the query `{ _id: req.params.id }` fails because String != ObjectId. Drivers require converting with `new ObjectId(req.params.id)`.",
    "importantPoints": [
      "String and ObjectId are distinct BSON types and never match.",
      "Must convert URL string IDs via ObjectId(str).",
      "Common source of API 404 bugs."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Querying by ObjectId String vs BSON ObjectId",
        "code": "// Demonstration for: Querying by ObjectId String vs BSON ObjectId\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $ne Operator with Null Values",
    "question": "What does { field: { $ne: null } } match in MongoDB?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "ne",
      "null-handling"
    ],
    "interviewAnswer": "{ field: { $ne: null } } matches documents where the field exists AND its value is not null. It excludes both documents with explicit null values AND documents where the field is missing.",
    "answer": "Because MongoDB treats missing fields as null in standard comparisons, `$ne: null` guarantees that the field exists and contains a non-null value, acting as a shorthand for `{ field: { $exists: true, $ne: null } }`.",
    "explanation": "Because MongoDB treats missing fields as null in standard comparisons, `$ne: null` guarantees that the field exists and contains a non-null value, acting as a shorthand for `{ field: { $exists: true, $ne: null } }`.",
    "importantPoints": [
      "Excludes explicit nulls AND missing fields.",
      "Ensures field presence and value validity."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $ne Operator with Null Values",
        "code": "// Demonstration for: The $ne Operator with Null Values\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $size Operator with Nested Subdocuments",
    "question": "Can $size be combined with subdocument matching on array elements?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "size",
      "elemmatch"
    ],
    "interviewAnswer": "No, $size cannot filter elements within an array; it only tests the overall length of the array itself. To match array size and subdocument conditions, combine $size with $elemMatch in the same query document.",
    "answer": "`db.orders.find({ items: { $size: 2 }, \"items.status\": \"PENDING\" })` tests that the array has 2 total elements, and at least one item has status PENDING.",
    "explanation": "`db.orders.find({ items: { $size: 2 }, \"items.status\": \"PENDING\" })` tests that the array has 2 total elements, and at least one item has status PENDING.",
    "importantPoints": [
      "$size evaluates total array length only.",
      "Combine with $elemMatch for content criteria."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $size Operator with Nested Subdocuments",
        "code": "// Demonstration for: The $size Operator with Nested Subdocuments\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "Querying Dates with ISO Strings vs Date Objects",
    "question": "What happens if an application queries a Date field using an ISO 8601 string literal?",
    "difficulty": "easy",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "date",
      "iso-string",
      "bson-types",
      "pitfalls"
    ],
    "interviewAnswer": "The query returns 0 rows. In BSON, a String is a completely different type from Date (ISODate). String comparisons against Date fields always return false.",
    "answer": "Passing `{ createdAt: { $gte: \"2026-01-01T00:00:00Z\" } }` fails because \"2026...\" is a BSON String. You must pass a native JavaScript `new Date(\"2026-01-01T00:00:00Z\")` or BSON Date object.",
    "explanation": "Passing `{ createdAt: { $gte: \"2026-01-01T00:00:00Z\" } }` fails because \"2026...\" is a BSON String. You must pass a native JavaScript `new Date(\"2026-01-01T00:00:00Z\")` or BSON Date object.",
    "importantPoints": [
      "BSON String != BSON Date.",
      "Always pass native Date objects in driver queries."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Querying Dates with ISO Strings vs Date Objects",
        "code": "// Demonstration for: Querying Dates with ISO Strings vs Date Objects\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $slice Operator Negative Offset Behavior",
    "question": "How does negative indexing work in projection with $slice: [offset, limit]?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "slice",
      "projection"
    ],
    "interviewAnswer": "A negative offset starts counting backward from the end of the array: { comments: { $slice: [-5, 3] } } starts at the 5th element from the end and returns 3 elements forward.",
    "answer": "`db.articles.find({}, { comments: { $slice: [-10, 5] } })` navigates 10 elements from the end of the array and projects 5 elements, allowing efficient pagination of recent comments.",
    "explanation": "`db.articles.find({}, { comments: { $slice: [-10, 5] } })` navigates 10 elements from the end of the array and projects 5 elements, allowing efficient pagination of recent comments.",
    "importantPoints": [
      "Negative offset counts from array end.",
      "Projects N items forward from that offset."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $slice Operator Negative Offset Behavior",
        "code": "// Demonstration for: The $slice Operator Negative Offset Behavior\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $geoWithin with $box Operator",
    "question": "How do you query GeoJSON points inside a rectangular bounding box using $box?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "geospatial",
      "box",
      "bounding-box"
    ],
    "interviewAnswer": "db.places.find({ location: { $geoWithin: { $box: [ [bottomLeftLng, bottomLeftLat], [topRightLng, topRightLat] ] } } });",
    "answer": "`$box` defines a 2D planar bounding rectangle using bottom-left and top-right coordinate pairs. Commonly used by map viewports (Google Maps bounding box) to load markers currently visible on screen.",
    "explanation": "`$box` defines a 2D planar bounding rectangle using bottom-left and top-right coordinate pairs. Commonly used by map viewports (Google Maps bounding box) to load markers currently visible on screen.",
    "importantPoints": [
      "Defines viewport bounding box via bottom-left and top-right coordinates.",
      "Standard for map viewport bounding queries."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $geoWithin with $box Operator",
        "code": "// Demonstration for: The $geoWithin with $box Operator\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "The $all Operator with $elemMatch for Nested Arrays",
    "question": "How do you match an array where multiple elements each satisfy distinct complex subdocument criteria?",
    "difficulty": "hard",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "all",
      "elemmatch",
      "nested-queries"
    ],
    "interviewAnswer": "Combine $all with $elemMatch: { items: { $all: [ { $elemMatch: { prodId: 1, qty: { $gte: 5 } } }, { $elemMatch: { prodId: 2, qty: { $gte: 10 } } } ] } }",
    "answer": "When checking that an order contains BOTH Product 1 (with quantity >= 5) AND Product 2 (with quantity >= 10), combining `$all` with nested `$elemMatch` blocks validates each complex condition against separate array elements.",
    "explanation": "When checking that an order contains BOTH Product 1 (with quantity >= 5) AND Product 2 (with quantity >= 10), combining `$all` with nested `$elemMatch` blocks validates each complex condition against separate array elements.",
    "importantPoints": [
      "Combines $all with multiple $elemMatch sub-queries.",
      "Enforces multiple independent multi-field criteria across distinct array elements."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $all Operator with $elemMatch for Nested Arrays",
        "code": "// Demonstration for: The $all Operator with $elemMatch for Nested Arrays\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "query-operators",
    "title": "Querying MinKey and MaxKey BSON Values",
    "question": "What are MinKey and MaxKey in MongoDB, and what are their comparison behaviors?",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "minkey",
      "maxkey",
      "bson-types",
      "sharding"
    ],
    "interviewAnswer": "MinKey and MaxKey are special BSON types that compare lower and higher than all other BSON values, respectively. They are primarily used in sharding chunk boundaries and index range bounds.",
    "answer": "In BSON type comparison ordering: `MinKey < All Other Types < MaxKey`. They allow defining open-ended intervals in shard chunk ranges: `{ $gte: MinKey, $lt: 100 }`.",
    "explanation": "In BSON type comparison ordering: `MinKey < All Other Types < MaxKey`. They allow defining open-ended intervals in shard chunk ranges: `{ $gte: MinKey, $lt: 100 }`.",
    "importantPoints": [
      "MinKey compares lower than any other BSON value.",
      "MaxKey compares higher than any other BSON value.",
      "Used internally for sharding chunk boundaries."
    ],
    "commonMistakes": [
      "Confusing operator syntax or mixing up array criteria."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Querying MinKey and MaxKey BSON Values",
        "code": "// Demonstration for: Querying MinKey and MaxKey BSON Values\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
