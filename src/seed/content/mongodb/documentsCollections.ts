import { SeedQuestion } from '../types';

export const documentsCollectionsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Scenario: A Document Has Grown Very Large",
    "question": "A document has grown very large. What problems might this cause in MongoDB?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "documents-collections",
      "document-growth",
      "16mb-limit",
      "scenario"
    ],
    "interviewAnswer": "A very large document causes multiple critical problems: 1) Hitting the hard 16MB BSON limit, causing insert/update failures; 2) WiredTiger cache thrashing, as large documents consume disproportionate memory; 3) Network bandwidth saturation, as the entire document must be transferred over the wire even if only one field is needed; 4) Slow index updates when large embedded arrays are indexed (multikey explosion).",
    "answer": "When documents grow excessively (e.g. embedding unbounded arrays of comments, activity logs, or sensor events): 1) Hard Limit: MongoDB strictly enforces a 16MB maximum document size limit; writes exceeding this throw fatal `BSONObjectTooLarge` errors. 2) Memory Contention: WiredTiger caches uncompressed documents in RAM. A 15MB document read frequently crowds out hundreds of smaller documents from the cache, degrading buffer hit ratios. 3) Network & CPU Overhead: Serialization and deserialization of massive BSON payloads over TCP increases API latency. 4) Multikey Index Explosion: If an embedded array contains 10,000 elements and is indexed, updating the document requires modifying 10,000 index entries.",
    "explanation": "To prevent large document bloat: adopt the Subset Pattern (keep only the 10 most recent comments in the document, move the rest to a dedicated comments collection) or use the Bucket Pattern for time-series data.",
    "importantPoints": [
      "Hard 16MB BSON document size limit causes runtime write failures.",
      "Crowds out smaller active documents from WiredTiger in-memory cache.",
      "Inflates network payload size and client deserialization latency.",
      "Multikey index explosion on large embedded arrays causes heavy write amplification.",
      "Resolved using the Subset Pattern, Referencing, or GridFS."
    ],
    "commonMistakes": [
      "Allowing unbounded arrays to grow infinitely (e.g. push without $slice).",
      "Storing binary images or PDF files directly inside BSON documents instead of S3/GridFS.",
      "Selecting full 15MB documents with find() instead of using field projections."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Capping Embedded Array Size with $slice",
        "code": "// Prevent unbounded array growth by retaining only the 50 most recent logs:\ndb.users.updateOne(\n  { _id: userId },\n  {\n    $push: {\n      activityLogs: {\n        $each: [ newLogEntry ],\n        $sort: { timestamp: -1 },\n        $slice: 50 // Enforces maximum 50 elements!\n      }\n    }\n  }\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "The 16MB BSON Document Size Limit: Rationale and Workarounds",
    "question": "Why does MongoDB enforce a strict 16MB BSON document size limit, and what are the architectural workarounds?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "documents-collections",
      "16mb-limit",
      "bson",
      "architecture"
    ],
    "interviewAnswer": "MongoDB enforces the 16MB limit to ensure that single documents cannot consume excessive RAM in the WiredTiger cache, monopolize network socket bandwidth, or cause page-splitting thrashing. Workarounds include referencing related documents across collections, using the Subset Pattern, or using GridFS for large binaries.",
    "answer": "The 16MB limit is an intentional architectural guardrail. Without it, developers would store entire multi-megabyte files or millions of nested logs in a single document, causing memory allocation spikes and CPU stalls during BSON decoding. For large structures: 1) Break 1-to-many relationships into referenced child documents; 2) For large files (PDFs, media), use GridFS or cloud object storage (S3); 3) For historical series, use time-based bucketing.",
    "importantPoints": [
      "Prevents single documents from monopolizing WiredTiger RAM cache.",
      "Guarantees predictable network packet transfer and BSON parsing speed.",
      "Enforces sound document data modeling practices.",
      "Workarounds: Referencing, Subset pattern, Bucketing, GridFS."
    ],
    "commonMistakes": [
      "Assuming 16MB is a configurable parameter in mongod.conf (it is a hardcoded engine limit).",
      "Relying on embedding when child arrays grow indefinitely."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Checking Document Size in mongosh",
        "code": "// Check byte size of a specific document:\nconst doc = db.articles.findOne({ slug: \"deep-dive-mongodb\" });\nconst sizeInBytes = Object.bsonsize(doc);\nprint(\"Document size: \" + sizeInBytes + \" bytes (\" + (sizeInBytes / (1024 * 1024)).toFixed(2) + \" MB)\");"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "ObjectId Anatomy: Internal 12-Byte Structure",
    "question": "Explain the internal 12-byte structure of a MongoDB ObjectId and how to extract its creation timestamp.",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "objectid",
      "primary-key",
      "internals",
      "timestamp"
    ],
    "interviewAnswer": "A BSON ObjectId is a 12-byte binary identifier: 4 bytes of Unix timestamp (seconds), 5 bytes of random value unique to the machine and process, and 3 bytes of incrementing counter initialized to a random value. Because the first 4 bytes are a timestamp, ObjectIds are naturally roughly sorted by creation time.",
    "answer": "The 12-byte (24-hex character) ObjectId provides globally unique, decentralized primary keys without requiring a centralized sequence coordinator: 1) 4-byte value representing the seconds since Unix epoch; 2) 5-byte random value unique to the host machine and process; 3) 3-byte incrementing counter, initialized to a random value. To extract the timestamp: `objectId.getTimestamp()` in mongosh or driver SDKs. This eliminates the need for an explicit `createdAt` column in simple schemas.",
    "explanation": "Because the leading 4 bytes represent a timestamp, B-Tree indexes on `_id` append roughly to the right edge of the index tree, maintaining high cache locality during sequential inserts.",
    "importantPoints": [
      "Total 12 bytes (24 hexadecimal characters).",
      "First 4 bytes represent Unix timestamp in seconds.",
      "Next 5 bytes are a process/machine unique random value.",
      "Final 3 bytes are a monotonic incrementing counter.",
      "Naturally roughly time-ordered, providing high B-Tree write efficiency."
    ],
    "commonMistakes": [
      "Assuming ObjectIds are 100% strictly chronological across different machines with drifting system clocks.",
      "Treating ObjectId as a 24-byte string rather than a compact 12-byte binary in storage.",
      "Creating redundant createdAt indexes when sorting by _id achieves the same chronological order."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Extracting Creation Timestamp from ObjectId",
        "code": "const id = ObjectId(\"65e21f92a1b2c3d4e5f67890\");\nprint(\"Created At: \" + id.getTimestamp());\n// Output: Created At: Sat Mar 02 2024 09:30:10 GMT+0000\n\n// Query documents created in the last 24 hours using ONLY _id:\nconst yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);\nconst hexSeconds = Math.floor(yesterday.getTime() / 1000).toString(16);\nconst minId = ObjectId(hexSeconds + \"0000000000000000\");\n\ndb.orders.find({ _id: { $gte: minId } }); // Uses _id clustered/primary index!"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Dot Notation for Embedded Subdocuments and Arrays",
    "question": "How does Dot Notation work in MongoDB for querying and updating deeply nested subdocuments and array elements?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "mongodb",
      "dot-notation",
      "nested-documents",
      "arrays",
      "crud"
    ],
    "interviewAnswer": "Dot notation navigates nested hierarchies: \"address.city\" accesses an embedded object field, while \"scores.0\" accesses the first element of an array. When updating or querying nested keys, the dot-notated string must always be enclosed in quotes.",
    "answer": "MongoDB allows accessing nested fields without flattening documents: 1) Nested Subdocument: `db.users.find({ \"contact.address.zipcode\": \"90210\" })`. 2) Specific Array Index: `db.posts.find({ \"comments.0.author\": \"Alice\" })`. 3) Any Array Match: `db.posts.find({ \"tags\": \"mongodb\" })` matches if \"mongodb\" is an element in the tags array. 4) Updating Nested Field: `$set: { \"profile.email\": \"new@example.com\" }` updates only the nested email without overwriting the rest of the profile object.",
    "explanation": "A major junior pitfall: writing `{ profile: { email: \"new@example.com\" } }` in an update replaces the ENTIRE profile object, wiping out all other profile attributes. Always use dot notation `$set: { \"profile.email\": ... }` for targeted nested updates.",
    "importantPoints": [
      "Dot notation navigates nested objects (\"a.b.c\") and array indices (\"items.0.name\").",
      "Must be wrapped in quotation marks in queries and update expressions.",
      "Allows creating indexes on specific nested subdocument attributes.",
      "Partial updates via dot notation preserve surrounding subdocument attributes."
    ],
    "commonMistakes": [
      "Omitting quotation marks around dot-notated strings (syntax error in JS).",
      "Overwriting an entire subdocument with $set: { subdoc: { a: 1 } } instead of $set: { \"subdoc.a\": 1 }.",
      "Confusing object dot notation with array element traversal."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Dot Notation Query and Update",
        "code": "// Query users living in California:\ndb.customers.find({ \"address.state\": \"CA\" });\n\n// Safe in-place update of nested field:\ndb.customers.updateOne(\n  { _id: customerId },\n  {\n    $set: {\n      \"address.zipcode\": \"94105\",        // Updates only zipcode\n      \"metadata.lastLogin\": new Date()   // Updates nested date\n    }\n  }\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Document Field Ordering in Equality Matches",
    "question": "Why does document field order matter when performing exact subdocument equality matches in MongoDB?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "tags": [
      "mongodb",
      "field-order",
      "subdocument-equality",
      "bson",
      "pitfalls"
    ],
    "interviewAnswer": "In BSON, subdocuments are compared byte-by-byte in the exact physical order of their keys. If you query by subdocument equality { address: { city: \"NYC\", zip: \"10001\" } }, it will NOT match a document stored as { address: { zip: \"10001\", city: \"NYC\" } }! Always use dot notation for field-order-independent matches.",
    "answer": "Exact subdocument equality (`{ subdoc: { a: 1, b: 2 } }`) requires an exact byte-for-byte match, including the sequence of keys. If one document was inserted with `{ a: 1, b: 2 }` and another with `{ b: 2, a: 1 }`, the subdocument equality query only matches the first. The solution is using dot notation (`{ \"subdoc.a\": 1, \"subdoc.b\": 2 }`), which evaluates individual fields independently of key order.",
    "explanation": "This subtle BSON serialization characteristic frequently causes mysterious production bugs when different microservices or SDKs serialize JSON keys in differing alphabetic or chronological orders.",
    "importantPoints": [
      "BSON subdocument equality requires exact key order match.",
      "{ a: 1, b: 2 } does NOT match { b: 2, a: 1 } in subdocument equality.",
      "Dot notation (\"subdoc.a\": 1, \"subdoc.b\": 2) is completely immune to field ordering.",
      "Always prefer dot notation over whole-subdocument equality matching."
    ],
    "commonMistakes": [
      "Using subdocument equality matching in queries instead of dot notation.",
      "Expecting { x: 1, y: 1 } to match documents where keys were inserted as y, x.",
      "Creating compound indexes on subdocuments and expecting field order invariance."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Field Order Pitfall vs Safe Dot Notation",
        "code": "-- Suppose document in DB has: { specs: { ram: 16, cpu: \"M3\" } }\n\n-- FAILS (Zero matches due to reversed field order):\ndb.devices.find({ specs: { cpu: \"M3\", ram: 16 } });\n\n-- SUCCEEDS (Dot notation matches regardless of key ordering):\ndb.devices.find({ \"specs.cpu\": \"M3\", \"specs.ram\": 16 });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "BSON Data Types and the $type Operator",
    "question": "How do you query documents by their internal BSON data type using the $type operator?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "bson-types",
      "type-operator",
      "data-quality"
    ],
    "interviewAnswer": "Use the $type operator matching either string aliases (e.g. \"string\", \"int\", \"decimal\", \"array\") or BSON numeric type codes (e.g. 2 for string, 16 for 32-bit integer).",
    "answer": "Because MongoDB schemas can be polymorphic, a field might accidentally contain strings in some rows and integers in others. The `$type` operator locates type inconsistencies: `db.users.find({ age: { $type: \"string\" } })` finds records where age was incorrectly stored as text.",
    "explanation": "Because MongoDB schemas can be polymorphic, a field might accidentally contain strings in some rows and integers in others. The `$type` operator locates type inconsistencies: `db.users.find({ age: { $type: \"string\" } })` finds records where age was incorrectly stored as text.",
    "importantPoints": [
      "$type accepts string aliases (\"string\", \"date\", \"number\") or numeric BSON codes.",
      "Essential for schema auditing and data migration sanitization."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "BSON Data Types and the $type Operator",
        "code": "// Example demonstration for: BSON Data Types and the $type Operator\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Field Projection: Inclusion vs Exclusion Rules",
    "question": "What are the rules for combining inclusion and exclusion fields in MongoDB query projection?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "projection",
      "find",
      "optimization"
    ],
    "interviewAnswer": "You cannot mix inclusion (field: 1) and exclusion (field: 0) in the same projection specification. The ONLY exception is the _id field, which can be explicitly excluded (_id: 0) alongside included fields.",
    "answer": "In MongoDB projection: 1) Inclusion specifies which fields to return (`{ name: 1, email: 1 }`), implicitly omitting all others; 2) Exclusion specifies which fields to suppress (`{ passwordHash: 0, internalNotes: 0 }`); 3) Mixing `{ name: 1, password: 0 }` triggers a projection conflict error. The `_id` field is the sole exception: `{ name: 1, _id: 0 }` is valid.",
    "explanation": "In MongoDB projection: 1) Inclusion specifies which fields to return (`{ name: 1, email: 1 }`), implicitly omitting all others; 2) Exclusion specifies which fields to suppress (`{ passwordHash: 0, internalNotes: 0 }`); 3) Mixing `{ name: 1, password: 0 }` triggers a projection conflict error. The `_id` field is the sole exception: `{ name: 1, _id: 0 }` is valid.",
    "importantPoints": [
      "Cannot mix 1 and 0 in projection.",
      "_id is included by default unless explicitly set to _id: 0.",
      "Reduces network bandwidth by returning only needed attributes."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Field Projection: Inclusion vs Exclusion Rules",
        "code": "// Example demonstration for: Field Projection: Inclusion vs Exclusion Rules\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Array Slicing in Projection ($slice)",
    "question": "How do you project only a subset of array elements using the $slice operator?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "projection",
      "slice",
      "arrays"
    ],
    "interviewAnswer": "Use $slice in projection: { comments: { $slice: 5 } } returns the first 5 elements; { comments: { $slice: -5 } } returns the last 5; { comments: { $slice: [20, 10] } } skips 20 and returns 10 (pagination).",
    "answer": "The `$slice` projection operator limits array elements returned without modifying the database document. For pagination: `db.posts.find({}, { comments: { $slice: [0, 10] } })` retrieves the first 10 comments, keeping network payload small.",
    "explanation": "The `$slice` projection operator limits array elements returned without modifying the database document. For pagination: `db.posts.find({}, { comments: { $slice: [0, 10] } })` retrieves the first 10 comments, keeping network payload small.",
    "importantPoints": [
      "Limits array elements returned in read query.",
      "Negative numbers return elements from the end of the array.",
      "[skip, limit] syntax enables array-level pagination."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Array Slicing in Projection ($slice)",
        "code": "// Example demonstration for: Array Slicing in Projection ($slice)\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Read-Only Views vs On-Demand Materialized Views",
    "question": "Compare standard read-only views (db.createView) with on-demand materialized views ($merge) in MongoDB.",
    "difficulty": "hard",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "views",
      "materialized-views",
      "merge",
      "aggregation"
    ],
    "interviewAnswer": "Standard views (db.createView) are virtual and execute their aggregation pipeline on demand for every query (zero extra storage, always fresh, read-only). Materialized views physically write pre-computed aggregation results to a collection using $merge or $out, delivering fast indexed reads at the cost of periodic refresh maintenance.",
    "answer": "Virtual views act as saved queries; every read recalculates the underlying aggregation pipeline. If the pipeline joins 3 collections, querying the virtual view is slow. An on-demand materialized view runs `$merge` on a schedule, writing pre-joined results to an actual collection that can be indexed, providing sub-millisecond lookups.",
    "explanation": "Virtual views act as saved queries; every read recalculates the underlying aggregation pipeline. If the pipeline joins 3 collections, querying the virtual view is slow. An on-demand materialized view runs `$merge` on a schedule, writing pre-joined results to an actual collection that can be indexed, providing sub-millisecond lookups.",
    "importantPoints": [
      "Virtual views: Zero storage, dynamically computed on read, always current.",
      "Materialized views: Stored in physical collections via $merge, pre-indexed, fast reads.",
      "Materialized views require scheduled refresh pipelines."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Read-Only Views vs On-Demand Materialized Views",
        "code": "// Example demonstration for: Read-Only Views vs On-Demand Materialized Views\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Capped Collections vs TTL Collections Comparison",
    "question": "When should you choose a Capped Collection over a TTL Collection for data expiration?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "capped-collections",
      "ttl",
      "expiration",
      "trade-offs"
    ],
    "interviewAnswer": "Use Capped Collections when you have a strict physical DISK QUOTA (e.g. allocate exactly 10GB for logs, overwriting oldest). Use TTL Collections when you have a strict TIME DURATION (e.g. delete after exactly 30 days, regardless of disk space).",
    "answer": "Capped collections purge based on byte size or document count; if write volume doubles, documents expire twice as fast. TTL collections expire strictly on timestamp age, meaning storage can grow indefinitely if write velocity spikes. Capped collections also enforce update restrictions, whereas TTL collections support normal document modifications.",
    "explanation": "Capped collections purge based on byte size or document count; if write volume doubles, documents expire twice as fast. TTL collections expire strictly on timestamp age, meaning storage can grow indefinitely if write velocity spikes. Capped collections also enforce update restrictions, whereas TTL collections support normal document modifications.",
    "importantPoints": [
      "Capped: Fixed storage size (FIFO byte limit).",
      "TTL: Fixed time span (expiration after N seconds).",
      "TTL supports standard indexing and unbounded document growth."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Capped Collections vs TTL Collections Comparison",
        "code": "// Example demonstration for: Capped Collections vs TTL Collections Comparison\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Handling Null vs Missing Fields in Queries",
    "question": "How do you differentiate between a field containing null versus a field that does not exist in a document?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "null-handling",
      "exists",
      "querying"
    ],
    "interviewAnswer": "Querying { field: null } matches BOTH documents where field is null AND documents where the field does not exist! To match strictly null values: { field: { $type: \"null\" } }. To check non-existence: { field: { $exists: false } }.",
    "answer": "A major source of query bugs: `db.users.find({ middleName: null })` returns users who set their middle name to null AND users whose document completely lacks the `middleName` key. Using `{ middleName: { $type: \"null\" } }` checks for an explicit BSON null value.",
    "explanation": "A major source of query bugs: `db.users.find({ middleName: null })` returns users who set their middle name to null AND users whose document completely lacks the `middleName` key. Using `{ middleName: { $type: \"null\" } }` checks for an explicit BSON null value.",
    "importantPoints": [
      "{ field: null } matches both null and missing fields.",
      "{ field: { $type: \"null\" } } matches only explicit nulls.",
      "{ field: { $exists: false } } matches only missing fields."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling Null vs Missing Fields in Queries",
        "code": "// Example demonstration for: Handling Null vs Missing Fields in Queries\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "The $exists Operator and Index Utilization",
    "question": "Can the $exists: true operator efficiently use standard B-Tree indexes?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "exists",
      "indexes",
      "sparse-indexes",
      "performance"
    ],
    "interviewAnswer": "A standard index stores index entries for every document, including null and missing values (as null). Thus, { field: { $exists: true } } must scan the index. A Sparse Index or Partial Index indexing only documents where the field exists is dramatically faster and smaller.",
    "answer": "In a standard index on `phone`, missing fields are indexed as null. To optimize `$exists: true` queries on sparse attributes (where only 5% of users have a phone), create a Sparse Index (`{ sparse: true }`) or a Partial Index (`{ partialFilterExpression: { phone: { $exists: true } } }`), which indexes only matching rows.",
    "explanation": "In a standard index on `phone`, missing fields are indexed as null. To optimize `$exists: true` queries on sparse attributes (where only 5% of users have a phone), create a Sparse Index (`{ sparse: true }`) or a Partial Index (`{ partialFilterExpression: { phone: { $exists: true } } }`), which indexes only matching rows.",
    "importantPoints": [
      "Standard indexes store entries for missing fields.",
      "Sparse/Partial indexes optimize $exists: true queries.",
      "Partial indexes are more flexible than legacy sparse indexes."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $exists Operator and Index Utilization",
        "code": "// Example demonstration for: The $exists Operator and Index Utilization\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Document Validation Levels and Actions",
    "question": "What is the difference between validationAction: \"error\" vs \"warn\" and validationLevel: \"strict\" vs \"moderate\"?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-validation",
      "validation-level",
      "validation-action"
    ],
    "interviewAnswer": "validationAction: \"error\" rejects invalid writes; \"warn\" permits the write and logs a warning. validationLevel: \"strict\" validates all inserts and updates; \"moderate\" validates inserts and updates to already-valid documents, but allows existing invalid documents to be updated without fixing old violations.",
    "answer": "When introducing schema validation to an existing legacy collection with dirty data, setting `validationLevel: \"moderate\"` ensures that old non-conforming documents do not block updates to other fields, while all new `insert` operations are strictly validated.",
    "explanation": "When introducing schema validation to an existing legacy collection with dirty data, setting `validationLevel: \"moderate\"` ensures that old non-conforming documents do not block updates to other fields, while all new `insert` operations are strictly validated.",
    "importantPoints": [
      "error rejects write; warn allows write and logs violation.",
      "strict validates everything; moderate applies checks to valid docs only.",
      "Moderate level enables gradual adoption on legacy collections."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Document Validation Levels and Actions",
        "code": "// Example demonstration for: Document Validation Levels and Actions\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Collection Renaming and Drop Performance",
    "question": "Why is db.collection.drop() faster than db.collection.deleteMany({}) for clearing a collection?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "drop",
      "deletemany",
      "performance",
      "wiredtiger"
    ],
    "interviewAnswer": "deleteMany({}) scans the collection, writes an oplog delete entry for every single row, removes index entries one by one, and creates dead space. drop() drops the collection metadata and frees the entire file segment in a single metadata operation in milliseconds.",
    "answer": "Deleting 10 million documents via `deleteMany({})` generates 10 million oplog records, forces massive disk I/O, and causes replication lag. `db.collection.drop()` is an O(1) metadata operation that drops the table and all associated indexes instantaneously, returning storage pages immediately.",
    "explanation": "Deleting 10 million documents via `deleteMany({})` generates 10 million oplog records, forces massive disk I/O, and causes replication lag. `db.collection.drop()` is an O(1) metadata operation that drops the table and all associated indexes instantaneously, returning storage pages immediately.",
    "importantPoints": [
      "drop() is instantaneous O(1) metadata deletion.",
      "deleteMany({}) incurs per-document index removal and oplog bloat.",
      "Always use drop() when purging entire collections."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Collection Renaming and Drop Performance",
        "code": "// Example demonstration for: Collection Renaming and Drop Performance\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Array Element Matching: $elemMatch in Queries",
    "question": "Why is $elemMatch mandatory when matching multiple criteria on the SAME subdocument inside an array?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "elemmatch",
      "arrays",
      "subdocuments",
      "pitfalls"
    ],
    "interviewAnswer": "Without $elemMatch, querying { \"grades.subject\": \"Math\", \"grades.score\": { $gte: 90 } } matches if ANY grade has Math and ANY grade (even History) has score >= 90. $elemMatch guarantees that BOTH conditions are satisfied by the EXACT SAME array element.",
    "answer": "Standard dot notation on array elements checks across the entire array independently. If student has Math: 70 and Science: 95, querying `{ \"grades.subject\": \"Math\", \"grades.score\": { $gte: 90 } }` returns true. Using `{ grades: { $elemMatch: { subject: \"Math\", score: { $gte: 90 } } } }` strictly tests each single element.",
    "explanation": "Standard dot notation on array elements checks across the entire array independently. If student has Math: 70 and Science: 95, querying `{ \"grades.subject\": \"Math\", \"grades.score\": { $gte: 90 } }` returns true. Using `{ grades: { $elemMatch: { subject: \"Math\", score: { $gte: 90 } } } }` strictly tests each single element.",
    "importantPoints": [
      "Standard array queries check conditions across different elements.",
      "$elemMatch requires all conditions to be satisfied by the same element.",
      "Critical for correct multi-field array filtering."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Array Element Matching: $elemMatch in Queries",
        "code": "// Example demonstration for: Array Element Matching: $elemMatch in Queries\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Decimal128 for High-Precision Financial Calculations",
    "question": "Why must financial currency values in MongoDB use Decimal128 instead of standard Double?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "decimal128",
      "floating-point",
      "financial",
      "precision"
    ],
    "interviewAnswer": "Standard floating-point Doubles suffer from IEEE 754 binary rounding errors (e.g. 0.1 + 0.2 = 0.30000000000000004). Decimal128 uses IEEE 754-2008 decimal floating point, providing 34 decimal digits of precision with zero binary rounding inaccuracies.",
    "answer": "In financial transactions, rounding fractions of a cent causes audit failures. BSON `NumberDecimal(\"199.99\")` stores values as 128-bit decimal fractions, guaranteeing exact mathematical representations for currency, interest rates, and accounting ledgers.",
    "explanation": "In financial transactions, rounding fractions of a cent causes audit failures. BSON `NumberDecimal(\"199.99\")` stores values as 128-bit decimal fractions, guaranteeing exact mathematical representations for currency, interest rates, and accounting ledgers.",
    "importantPoints": [
      "Avoids binary floating-point rounding errors.",
      "Provides 34 decimal digits of precision.",
      "Standard for financial and monetary data in MongoDB."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Decimal128 for High-Precision Financial Calculations",
        "code": "// Example demonstration for: Decimal128 for High-Precision Financial Calculations\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Array Index Size Limits and Multikey Index Boundaries",
    "question": "What happens to index size when a document contains an array of 5,000 tags?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "multikey-index",
      "array-size",
      "index-bloat"
    ],
    "interviewAnswer": "An index on that array field becomes a Multikey Index, creating 5,000 separate index entries for that single document. This causes severe index bloat, slows down insert/update performance, and exhausts WiredTiger cache.",
    "answer": "Multikey indexes index each array element individually. A document with 5,000 array elements produces 5,000 B-Tree entries. If 1,000 documents each have 5,000 elements, the index contains 5 million keys! Keep indexed array sizes bounded to prevent write amplification.",
    "explanation": "Multikey indexes index each array element individually. A document with 5,000 array elements produces 5,000 B-Tree entries. If 1,000 documents each have 5,000 elements, the index contains 5 million keys! Keep indexed array sizes bounded to prevent write amplification.",
    "importantPoints": [
      "Multikey indexes create 1 index key per array element.",
      "Large arrays cause exponential index growth and write slowdowns.",
      "Cap indexed array lengths using $slice or separate collections."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Array Index Size Limits and Multikey Index Boundaries",
        "code": "// Example demonstration for: Array Index Size Limits and Multikey Index Boundaries\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Querying Arrays: Exact Match vs Element Containment",
    "question": "What is the difference between db.posts.find({ tags: [\"tech\", \"news\"] }) versus db.posts.find({ tags: \"tech\" })?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "arrays",
      "exact-match",
      "containment"
    ],
    "interviewAnswer": "Querying tags: \"tech\" checks if the array CONTAINS the string \"tech\". Querying tags: [\"tech\", \"news\"] checks for an EXACT match: the array must contain only those two elements in that exact order.",
    "answer": "Passing a scalar value tests array membership (contains). Passing an array literal tests exact array equality (both elements and order must match). To match multiple elements regardless of order, use `$all: [\"tech\", \"news\"]`.",
    "explanation": "Passing a scalar value tests array membership (contains). Passing an array literal tests exact array equality (both elements and order must match). To match multiple elements regardless of order, use `$all: [\"tech\", \"news\"]`.",
    "importantPoints": [
      "Scalar query tests array membership.",
      "Array query tests exact sequence and length equality.",
      "Use $all to match multiple elements in any order."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Querying Arrays: Exact Match vs Element Containment",
        "code": "// Example demonstration for: Querying Arrays: Exact Match vs Element Containment\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Capped Collection Maximum Document Limit vs Size Limit",
    "question": "How do the size and max options interact when creating a Capped Collection?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "capped-collection",
      "max-documents",
      "size"
    ],
    "interviewAnswer": "size (in bytes) is mandatory; max (document count) is optional. MongoDB purges documents whenever EITHER threshold is exceeded (whichever limit is reached first).",
    "answer": "In `db.createCollection(\"cache\", { capped: true, size: 10485760, max: 1000 })`, documents are purged when either total collection size reaches 10MB OR total document count reaches 1,000 documents.",
    "explanation": "In `db.createCollection(\"cache\", { capped: true, size: 10485760, max: 1000 })`, documents are purged when either total collection size reaches 10MB OR total document count reaches 1,000 documents.",
    "importantPoints": [
      "size in bytes is required for capped collections.",
      "max specifies optional upper bound on document count.",
      "Purging triggers when either limit is reached."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Capped Collection Maximum Document Limit vs Size Limit",
        "code": "// Example demonstration for: Capped Collection Maximum Document Limit vs Size Limit\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Document Mutation and Upsert Concurrency Race Conditions",
    "question": "How does MongoDB handle concurrent upsert operations on the same unique query criteria?",
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "upsert",
      "concurrency",
      "unique-index",
      "race-conditions"
    ],
    "interviewAnswer": "Without a UNIQUE index, two concurrent upsert operations can both find zero matching documents and both execute an insert, creating duplicate records. A unique index is mandatory on the upsert filter fields to ensure atomic deduplication.",
    "answer": "If Thread A and Thread B simultaneously run `updateOne({ email: \"x\" }, { $set: { ... } }, { upsert: true })`, both threads check the collection, see 0 documents, and both issue an insert. If a unique index on `email` exists, one succeeds and the other fails with a duplicate key error (code 11000) and can retry safely.",
    "explanation": "If Thread A and Thread B simultaneously run `updateOne({ email: \"x\" }, { $set: { ... } }, { upsert: true })`, both threads check the collection, see 0 documents, and both issue an insert. If a unique index on `email` exists, one succeeds and the other fails with a duplicate key error (code 11000) and can retry safely.",
    "importantPoints": [
      "Concurrent upserts without unique indexes create duplicate records.",
      "Unique index serializes concurrent upsert attempts.",
      "Applications must handle transient E11000 duplicate key retries."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Document Mutation and Upsert Concurrency Race Conditions",
        "code": "// Example demonstration for: Document Mutation and Upsert Concurrency Race Conditions\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "The $in Operator and Array Elements",
    "question": "How does the $in operator behave when querying against an array field?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "query-operators",
      "in-operator",
      "arrays"
    ],
    "interviewAnswer": "When applied to an array field, $in checks for an intersection: it matches if at least one element of the document's array matches any value in the $in target array.",
    "answer": "If a document has `roles: [\"editor\", \"writer\"]`, querying `roles: { $in: [\"admin\", \"editor\"] }` evaluates to true because \"editor\" intersects. It acts as an optimized set intersection check.",
    "explanation": "If a document has `roles: [\"editor\", \"writer\"]`, querying `roles: { $in: [\"admin\", \"editor\"] }` evaluates to true because \"editor\" intersects. It acts as an optimized set intersection check.",
    "importantPoints": [
      "Acts as set intersection on array fields.",
      "Matches if any element in document array matches any element in query array.",
      "Can utilize multikey indexes efficiently."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $in Operator and Array Elements",
        "code": "// Example demonstration for: The $in Operator and Array Elements\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Storage Compression: Snappy vs zlib vs zstd",
    "question": "Compare Snappy, zlib, and zstd block compressors in WiredTiger.",
    "difficulty": "hard",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "compression",
      "snappy",
      "zlib",
      "zstd",
      "wiredtiger"
    ],
    "interviewAnswer": "Snappy (default) provides fast compression and decompression with low CPU utilization. zlib provides maximum compression ratio (saving 50% more disk than Snappy) at the cost of higher CPU latency. zstd (MongoDB 4.2+) delivers high compression ratios approaching zlib with CPU speeds approaching Snappy.",
    "answer": "Choosing a compressor balances disk space vs CPU: 1) Snappy: Low CPU footprint; best for write-heavy OLTP. 2) zlib: Highest compression; best for cold archive collections. 3) zstd: Modern balance providing superior compression to Snappy with minimal CPU penalty.",
    "explanation": "Choosing a compressor balances disk space vs CPU: 1) Snappy: Low CPU footprint; best for write-heavy OLTP. 2) zlib: Highest compression; best for cold archive collections. 3) zstd: Modern balance providing superior compression to Snappy with minimal CPU penalty.",
    "importantPoints": [
      "Snappy: Fast, low CPU, default compressor.",
      "zlib: High compression, CPU-heavy.",
      "zstd: Balanced high compression with near-Snappy speeds."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Storage Compression: Snappy vs zlib vs zstd",
        "code": "// Example demonstration for: Storage Compression: Snappy vs zlib vs zstd\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "Unset Fields vs Setting Fields to Null",
    "question": "What is the performance and storage difference between $unset and $set: { field: null }?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "unset",
      "null",
      "storage-efficiency"
    ],
    "interviewAnswer": "$unset physically removes the field and its key name from the BSON document, freeing storage and removing it from sparse/partial indexes. $set: { field: null } keeps the field name and stores a 1-byte BSON Null type, maintaining field presence.",
    "answer": "Storing explicit nulls wastes storage because the field name string is retained in the document. Using `$unset: { field: \"\" }` eliminates the key entirely. Furthermore, queries checking `{ field: { $exists: true } }` treat explicit nulls as existing, whereas `$unset` fields evaluate to false.",
    "explanation": "Storing explicit nulls wastes storage because the field name string is retained in the document. Using `$unset: { field: \"\" }` eliminates the key entirely. Furthermore, queries checking `{ field: { $exists: true } }` treat explicit nulls as existing, whereas `$unset` fields evaluate to false.",
    "importantPoints": [
      "$unset deletes field key and value from document.",
      "$set: null retains field key with null BSON type.",
      "$unset reduces document byte size."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Unset Fields vs Setting Fields to Null",
        "code": "// Example demonstration for: Unset Fields vs Setting Fields to Null\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "BSON Date Range Queries and Timezone Handling",
    "question": "How does MongoDB store BSON Dates, and how should timezone conversions be handled?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "date",
      "timezone",
      "utc"
    ],
    "interviewAnswer": "MongoDB stores BSON Dates internally as a 64-bit signed integer representing milliseconds since the Unix epoch (UTC). MongoDB is timezone-agnostic; all dates are UTC. Timezone formatting must be handled by the application or aggregation $dateToString.",
    "answer": "BSON Date does not preserve client local timezone offsets (like +05:30). If client sends `2026-05-01T15:00:00+05:30`, MongoDB converts and stores it as UTC `2026-05-01T09:30:00Z`. If original client timezone is needed, store it in an auxiliary field (e.g. `timezone: \"Asia/Kolkata\"`).",
    "explanation": "BSON Date does not preserve client local timezone offsets (like +05:30). If client sends `2026-05-01T15:00:00+05:30`, MongoDB converts and stores it as UTC `2026-05-01T09:30:00Z`. If original client timezone is needed, store it in an auxiliary field (e.g. `timezone: \"Asia/Kolkata\"`).",
    "importantPoints": [
      "Stored as 64-bit integer milliseconds UTC.",
      "Does not retain client timezone offset.",
      "Always format timezone conversions in application or via $dateToString."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "BSON Date Range Queries and Timezone Handling",
        "code": "// Example demonstration for: BSON Date Range Queries and Timezone Handling\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "documents-collections",
    "title": "The Hidden _id Index: Immutability and Clustering",
    "question": "Why is the _id field immutable in MongoDB, and what happens if an application attempts to update it?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "id-field",
      "immutability",
      "primary-key"
    ],
    "interviewAnswer": "The _id field serves as the permanent unique identifier and clustering/primary key for the document; it is strictly immutable. Attempting to update the _id field throws an error: \"Plan executor error during findAndModify :: caused by :: Performing an update on the path '_id' would modify the immutable field '_id'\".",
    "answer": "To change a document's `_id`, you must read the document, delete the old document, and insert a new document with the desired `_id`. MongoDB forbids modifying `_id` in-place to preserve internal RecordID tracking, replica set synchronization, and index integrity.",
    "explanation": "To change a document's `_id`, you must read the document, delete the old document, and insert a new document with the desired `_id`. MongoDB forbids modifying `_id` in-place to preserve internal RecordID tracking, replica set synchronization, and index integrity.",
    "importantPoints": [
      "_id is strictly immutable.",
      "Cannot be updated via updateOne or findAndModify.",
      "Changing _id requires an insert + delete workflow."
    ],
    "commonMistakes": [
      "Ignoring BSON serialization rules or 16MB document boundaries."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The Hidden _id Index: Immutability and Clustering",
        "code": "// Example demonstration for: The Hidden _id Index: Immutability and Clustering\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
