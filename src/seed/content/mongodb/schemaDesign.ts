import { SeedQuestion } from '../types';

export const schemaDesignQuestions: SeedQuestion[] = [
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Scenario: Embedding vs Referencing Decision Framework",
    "question": "You need to decide between embedding and referencing in a MongoDB schema. What factors would influence your decision?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "embedding",
      "referencing",
      "data-modeling",
      "cardinality"
    ],
    "interviewAnswer": "The decision hinges on 5 core criteria: 1) Relationship Cardinality (1-to-few embeds well; 1-to-many or 1-to-squillions requires referencing); 2) Data Access Patterns (if child data is always read and written alongside parent data, embed; if queried independently, reference); 3) Document Growth and the 16MB Limit (unbounded arrays must never be embedded); 4) Write/Update Frequency (frequently updated shared entities should be referenced to prevent write duplication); 5) Atomicity Requirements (MongoDB guarantees ACID atomicity within a single document, making embedding ideal for transactional consistency).",
    "answer": "Choosing between embedding (denormalization) and referencing (normalization) is the central architectural question in MongoDB schema design:\n\n1. Cardinality Analysis:\n- One-to-Few (e.g. a user with 2-3 delivery addresses): Embed directly as an array of subdocuments.\n- One-to-Many (e.g. a product with hundreds of parts): Embed if bounded, or reference if individual parts are queried independently.\n- One-to-Squillions (e.g. an IoT device logging millions of pings, or a Twitter user with 50M followers): Must use Referencing (or Bucket Pattern). Never embed unbounded data.\n\n2. Access Patterns:\n- Do queries always need the child data when displaying the parent? (e.g., Order Items displayed on an Order Receipt -> Embed).\n- Does the child entity exist independently outside the parent lifecycle? (e.g., Students and Courses -> Reference).\n\n3. Update Velocity and Consistency:\n- If an author changes their pen name, do you want to update 1,000 embedded book documents, or 1 author document? High-velocity shared mutable state demands referencing.\n\n4. Performance & Memory:\n- Embedding yields zero-join single-seek reads from WiredTiger cache. Referencing requires client-side joins or $lookup pipelines.",
    "explanation": "A helpful rule of thumb from MongoDB architects: \"Data that is accessed together should be stored together, provided it does not grow without bound.\"",
    "importantPoints": [
      "1-to-few favors embedding; unbounded 1-to-many demands referencing.",
      "Data queried together should be stored together (locality of reference).",
      "Never allow embedded arrays to grow unbounded towards the 16MB BSON limit.",
      "Single-document updates are strictly atomic without transactions.",
      "Reference entities with high write frequency or shared ownership across parents."
    ],
    "commonMistakes": [
      "Embedding unbounded arrays (e.g. comments, log events) that eventually breach the 16MB document limit.",
      "Over-normalizing like a relational database, resulting in endless slow $lookup joins.",
      "Duplicating highly mutable fields across thousands of embedded documents."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Embedding (1-to-Few) vs Referencing (1-to-Many)",
        "code": "// EMBEDDING: User with bounded addresses (Queried together, 1-to-few)\nconst userDocument = {\n  _id: ObjectId(\"64a1f...\"),\n  name: \"Sarah Connor\",\n  email: \"sarah@sky.net\",\n  addresses: [\n    { type: \"home\", street: \"123 Resistance Way\", city: \"Los Angeles\" },\n    { type: \"work\", street: \"456 Cyberdyne Blvd\", city: \"Pasadena\" }\n  ]\n};\n\n// REFERENCING: Order with unbounded activity logs (1-to-Squillions)\nconst orderDocument = {\n  _id: ObjectId(\"64a2e...\"),\n  orderNumber: \"ORD-9982\",\n  total: 249.99\n};\n// Stored in separate \"auditLogs\" collection with parent reference:\nconst auditLogDocument = {\n  _id: ObjectId(\"64a3f...\"),\n  orderId: ObjectId(\"64a2e...\"), // Reference to parent\n  action: \"PAYMENT_PROCESSED\",\n  timestamp: ISODate(\"2026-09-10T00:00:00Z\")\n};"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Scenario: Document Has Grown Very Large - Problems and Remediation",
    "question": "A document in a production collection has grown very large over time. What problems might this cause, and how would you fix it?",
    "difficulty": "hard",
    "questionType": "Scenario",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "document-size",
      "16mb-limit",
      "wiredtiger",
      "subset-pattern"
    ],
    "interviewAnswer": "A very large document causes 5 major problems: 1) Risk of hitting the hard 16MB BSON limit, crashing writes; 2) Excessive RAM consumption, polluting the WiredTiger cache with unneeded data; 3) Heavy network bandwidth saturation on every query; 4) Slow index updates and document reallocations; 5) Aggregation pipeline memory overflows (100MB limit). I would remediate this by applying the Subset Pattern (moving old/rarely accessed data to an overflow collection) or the Bucket Pattern.",
    "answer": "When documents swell (often due to accumulating array elements like user activity, comments, or sensor logs):\n\n1. Severe Consequences:\n- Hard Crash on 16MB: MongoDB rejects any document exceeding 16,777,216 bytes with a fatal write error.\n- WiredTiger Cache Eviction: WiredTiger caches uncompressed documents in RAM. Loading a 12MB document to read a user's name evicts hundreds of small, hot documents, destroying cache hit ratios.\n- Network Saturation: Even with projections, transferring large documents consumes excessive bandwidth.\n- Replication & Oplog Bloat: Updating a massive document creates huge oplog entries, causing secondary replication lag.\n\n2. Architectural Remediation:\n- Subset Pattern: Split the document into a main document (storing only recent/top 10 items) and a secondary collection (storing the complete historical archive).\n- Bucket Pattern: Group events into bounded buckets (e.g. 100 events per document).\n- Extended Reference Pattern: Keep only essential summary fields in the parent and link to external documents.",
    "explanation": "Always monitor Average Document Size (avgObjSize) in db.collection.stats(). If avgObjSize approaches megabytes, immediate schema refactoring is required.",
    "importantPoints": [
      "Hard 16MB BSON limit will cause write operations to fail abruptly.",
      "Large documents waste WiredTiger RAM cache by loading unnecessary fields.",
      "Saturates network I/O and bloats the replica set oplog.",
      "Remediate with the Subset Pattern: store top 10 items in main doc, archive rest.",
      "Use Bucket Pattern to cap arrays to fixed counts (e.g. 50 items per bucket)."
    ],
    "commonMistakes": [
      "Assuming projections ($project: { name: 1 }) completely negate the cost of large documents in WiredTiger cache.",
      "Waiting until production throws BSONObjectTooLarge errors before redesigning the schema."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Applying the Subset Pattern to Resolve Large Documents",
        "code": "// BEFORE: Document grew to 14MB because of 50,000 product reviews\n// AFTER: Main Product collection stores only the top 5 most recent reviews\nconst productDoc = {\n  _id: ObjectId(\"64a10...\"),\n  title: \"Gaming Laptop X\",\n  price: 1499.99,\n  rating: 4.8,\n  reviewCount: 4820,\n  recentReviews: [ // Bounded Subset Pattern (max 5)\n    { reviewer: \"Alex\", rating: 5, snippet: \"Blazing fast!\" },\n    { reviewer: \"Dana\", rating: 4, snippet: \"Great display.\" }\n  ]\n};\n\n// All other historical reviews reside in a dedicated \"reviews\" collection:\nconst fullReviewDoc = {\n  _id: ObjectId(\"64b20...\"),\n  productId: ObjectId(\"64a10...\"),\n  reviewer: \"Jordan\",\n  rating: 5,\n  comment: \"Full long-form review text...\",\n  createdAt: ISODate(\"2025-01-15\")\n};"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "The Bucket Pattern for Time Series and IoT Data",
    "question": "How does the Bucket Pattern optimize time-series and high-frequency IoT data ingestion in MongoDB?",
    "difficulty": "hard",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "bucket-pattern",
      "iot",
      "time-series",
      "optimization"
    ],
    "interviewAnswer": "The Bucket Pattern groups multiple discrete data points (e.g. 1 hour or 100 readings from an IoT sensor) into a single document containing an array of measurements along with pre-aggregated summary fields (count, sum, min, max). This reduces index size by 99%, minimizes storage overhead, and enables fast range scans.",
    "answer": "Instead of inserting 1 document per second (yielding 86,400 documents per sensor per day):\n\nWith the Bucket Pattern, each document represents a fixed interval (e.g. 1 hour = 3,600 readings) or a fixed count (e.g. 500 samples).\n\nBenefits:\n1. Index Footprint: 1 index entry per hour instead of 3,600 entries. The index stays in RAM.\n2. Data Compression: WiredTiger achieves up to 80% higher compression on sequential arrays in a single document.\n3. Pre-computed Aggregates: The document can maintain running totals (`count`, `sum`, `max`), making average temperature queries instantaneous without scanning individual points.",
    "explanation": "MongoDB 5.0+ native Time-Series collections implement the Bucket Pattern under the hood automatically using columnar compression.",
    "importantPoints": [
      "Groups discrete time-series measurements into fixed-interval bucket documents.",
      "Reduces B-tree index size by orders of magnitude.",
      "Improves WiredTiger compression ratios on repetitive metrics.",
      "Enables pre-aggregated metrics (min, max, count, sum) directly in bucket metadata."
    ],
    "commonMistakes": [
      "Creating an unbounded bucket that exceeds 16MB.",
      "Failing to use $push with $each and $slice to cap bucket array sizes."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "IoT Sensor Document Using the Bucket Pattern",
        "code": "db.sensorBuckets.updateOne(\n  {\n    sensorId: \"TEMP-SENSOR-04\",\n    bucketStartTime: ISODate(\"2026-09-10T00:00:00Z\"),\n    count: { $lt: 60 } // Max 60 readings per minute/hour bucket\n  },\n  {\n    $push: {\n      readings: { timestamp: ISODate(\"2026-09-10T00:05:12Z\"), temp: 21.4 }\n    },\n    $inc: { count: 1, sumTemp: 21.4 },\n    $min: { minTemp: 21.4 },\n    $max: { maxTemp: 21.4 },\n    $setOnInsert: { sensorId: \"TEMP-SENSOR-04\", bucketStartTime: ISODate(\"2026-09-10T00:00:00Z\") }\n  },\n  { upsert: true }\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "The Extended Reference Pattern: Eliminating Expensive Joins",
    "question": "How does the Extended Reference Pattern reduce join overhead in frequently read collections?",
    "difficulty": "medium",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "extended-reference",
      "denormalization",
      "performance"
    ],
    "interviewAnswer": "The Extended Reference Pattern copies only the most frequently accessed fields from a referenced document directly into the referencing document (e.g. storing customerName and customerEmail alongside customerId inside an Order). This satisfies 95% of read queries with zero joins, only performing a $lookup when full customer details are required.",
    "answer": "In a normalized schema, displaying an order list requires joining the `customers` collection to get the customer's name. In the Extended Reference Pattern:\n\nInstead of just storing `{ customerId: ObjectId(\"...\") }`, you store:\n`{ customer: { _id: ObjectId(\"...\"), name: \"Jane Doe\", phone: \"555-0199\" } }`.\n\nTrade-off:\n- Read Performance: Instantaneous, zero joins.\n- Consistency Maintenance: If Jane Doe updates her name, you must either update existing orders or accept historical immutability (in fact, in orders, an invoice MUST reflect the customer's name at the time of purchase!).",
    "explanation": "The Extended Reference Pattern is especially powerful when the referenced data is immutable or rarely updated.",
    "importantPoints": [
      "Embeds only the top 2-3 most frequently read fields of a related entity.",
      "Eliminates $lookup joins for primary user interface views.",
      "Perfect for orders, invoices, and audit trails where historical snapshots are required.",
      "Requires update strategy if referenced data changes frequently."
    ],
    "commonMistakes": [
      "Copying all 50 fields of the referenced document instead of just the critical 2-3 fields.",
      "Using this pattern on fields that change every minute without a background synchronization worker."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Order Document with Extended Reference to Customer",
        "code": "const order = {\n  _id: ObjectId(\"65a00...\"),\n  orderDate: ISODate(\"2026-09-10\"),\n  total: 129.50,\n  // Extended Reference:\n  customer: {\n    _id: ObjectId(\"64f11...\"),\n    name: \"Jane Doe\",\n    email: \"jane@example.com\"\n  },\n  status: \"PROCESSING\"\n};"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "The Computed Pattern: Offloading Read-Time Calculations",
    "question": "How does the Computed Pattern improve query latency for computationally intensive metrics?",
    "difficulty": "medium",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "computed-pattern",
      "caching",
      "pre-aggregation"
    ],
    "interviewAnswer": "The Computed Pattern pre-calculates expensive aggregations (such as total revenue, average movie rating, or follower count) at write time or via background batch jobs, storing the pre-computed value directly in the document. Read queries fetch the pre-computed value in O(1) time without running heavy aggregation pipelines.",
    "answer": "If an application has 100,000 reads for every 1 write, computing `averageRating` dynamically on every page load with an aggregation pipeline wastes massive CPU resources.\n\nWith the Computed Pattern:\nOn every new review submission, execute an atomic update:\n`$inc: { reviewCount: 1, sumRatings: newRating }`\nCompute `averageRating = sumRatings / reviewCount` and persist it.\nNow, reading the product page requires a simple `findOne()`, completely bypassing the aggregation engine.",
    "importantPoints": [
      "Trades slightly slower write operations for lightning-fast O(1) read operations.",
      "Ideal for read-heavy systems (e.g. 99% read / 1% write ratios).",
      "Stores pre-aggregated summaries (count, sum, avg, lastUpdated).",
      "Can be updated incrementally at write time or periodically via cron / $merge."
    ],
    "commonMistakes": [
      "Calculating heavy aggregations dynamically on every HTTP request in high-traffic APIs.",
      "Allowing computed values to drift out of sync due to unhandled write rollbacks."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Atomic Update Using the Computed Pattern",
        "code": "// When a new review with score 5 is added:\ndb.movies.updateOne(\n  { _id: movieId },\n  [\n    {\n      $set: {\n        totalReviews: { $add: [\"$totalReviews\", 1] },\n        totalScore: { $add: [\"$totalScore\", 5] },\n        avgRating: {\n          $round: [\n            { $divide: [ { $add: [\"$totalScore\", 5] }, { $add: [\"$totalReviews\", 1] } ] },\n            2\n          ]\n        }\n      }\n    }\n  ]\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "The Outlier Pattern: Handling Viral and Asymmetric Data",
    "question": "How does the Outlier Pattern handle documents that deviate drastically from typical size or cardinality?",
    "difficulty": "hard",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "outlier-pattern",
      "celebrity-problem",
      "asymmetric-data"
    ],
    "interviewAnswer": "The Outlier Pattern handles atypical edge cases (such as a celebrity with 80 million followers, while 99.9% of users have under 500 followers). Instead of redesigning the entire schema for the 0.1% outlier, standard users embed their followers, while outlier documents are flagged with { hasOverflow: true } and their additional data is routed to an overflow collection.",
    "answer": "Designing a schema for the average case makes the application fast and simple for 99.9% of documents. However, if Justin Bieber or Elon Musk has millions of interactions, an embedded array would crash on the 16MB limit.\n\nOutlier Solution:\n1. Standard Document: Embeds up to 1,000 items in an array.\n2. Once the array hits 1,000, mark the document with a flag: `hasOverflow: true`.\n3. All subsequent items are written to a separate `userFollowersOverflow` collection.\n4. Application logic checks `hasOverflow`: if false, it reads the embedded array directly; if true, it reads both the array and queries the overflow collection.",
    "importantPoints": [
      "Optimizes schema for the 99.9% normal case without breaking on the 0.1% extreme case.",
      "Prevents blowing up document size for celebrity or viral records.",
      "Uses a boolean flag (hasOverflow: true) to trigger overflow querying.",
      "Preserves the performance benefits of embedding for the vast majority of users."
    ],
    "commonMistakes": [
      "Completely normalizing the entire schema for all 50M users just to accommodate 10 celebrity accounts.",
      "Forgetting to query the overflow collection when hasOverflow is true."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Outlier Pattern Implementation",
        "code": "// Normal User Document:\nconst regularUser = {\n  _id: \"user_123\",\n  name: \"Bob Smith\",\n  hasOverflow: false,\n  followers: [ \"user_456\", \"user_789\" ] // Embedded directly\n};\n\n// Outlier (Celebrity) Document:\nconst celebrityUser = {\n  _id: \"user_999\",\n  name: \"Global Superstar\",\n  hasOverflow: true, // Application knows to query overflow collection\n  followers: [ /* First 1,000 followers */ ]\n};"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "The Schema Versioning Pattern: Zero-Downtime Migrations",
    "question": "How does the Schema Versioning Pattern enable zero-downtime database migrations in MongoDB?",
    "difficulty": "medium",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "schema-versioning",
      "migrations",
      "zero-downtime"
    ],
    "interviewAnswer": "The Schema Versioning Pattern adds a schemaVersion field (e.g. { schemaVersion: 2 }) to every document. When application code reads a document, a handler transforms older versions (v1) into the current format (v2) on the fly, optionally writing the upgraded document back on save. This eliminates the need for risky, multi-hour stop-the-world migration scripts.",
    "answer": "In relational databases, altering a table with 500M rows requires locking the table and hours of downtime. In MongoDB:\n\n1. Add `schemaVersion: 1` to initial schemas.\n2. When fields change (e.g., splitting `fullName` into `firstName` and `lastName`), bump the version to `schemaVersion: 2` for newly created or updated documents.\n3. In the application Data Access Layer (DAL) or Mongoose middleware:\n```javascript\nfunction normalizeUser(doc) {\n  if (doc.schemaVersion === 1) {\n    const parts = doc.fullName.split(\" \");\n    doc.firstName = parts[0];\n    doc.lastName = parts[1];\n    doc.schemaVersion = 2;\n  }\n  return doc;\n}\n```\n4. Documents are migrated incrementally as they are accessed, or updated gradually by a low-priority background worker.",
    "importantPoints": [
      "Documents carry their own schemaVersion integer.",
      "Application code normalizes older versions into current shape on the fly.",
      "Eliminates lock-heavy, all-at-once migration downtime on massive collections.",
      "Supports running two versions of application services concurrently during rolling deployments."
    ],
    "commonMistakes": [
      "Running an un-throttled global migration script on 100M documents, saturating I/O and locking production.",
      "Not maintaining backward-compatibility handlers in code during canary releases."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Mongoose Middleware for Schema Versioning",
        "code": "userSchema.post('init', function(doc) {\n  if (!doc.schemaVersion || doc.schemaVersion === 1) {\n    // Migrate v1 to v2 in-memory:\n    const [first, ...rest] = (doc.fullName || \"\").split(\" \");\n    doc.firstName = first || \"\";\n    doc.lastName = rest.join(\" \");\n    doc.schemaVersion = 2;\n  }\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "The Attribute Pattern: Polymorphic and E-Commerce Catalogs",
    "question": "How does the Attribute Pattern solve schema design for products with unpredictable or diverse specifications?",
    "difficulty": "medium",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "attribute-pattern",
      "polymorphism",
      "e-commerce"
    ],
    "interviewAnswer": "The Attribute Pattern reorganizes diverse and sparse product fields into an array of key-value subdocuments: specs: [{ k: \"ram\", v: 16, u: \"GB\" }, { k: \"screen\", v: 15.6, u: \"in\" }]. This allows a single compound index on { \"specs.k\": 1, \"specs.v\": 1 } to index thousands of diverse attributes, avoiding index explosion.",
    "answer": "In e-commerce catalogs, laptops have RAM and CPU; shoes have size and color; televisions have screen resolution and refresh rate. Storing them as individual top-level fields requires dozens of separate indexes.\n\nWith the Attribute Pattern:\nTransform:\n`{ ram: \"16GB\", color: \"black\", shoeSize: 10 }`\nInto:\n`specs: [ { k: \"ram\", v: 16 }, { k: \"color\", v: \"black\" } ]`.\n\nA single compound index on `specs.k` and `specs.v` efficiently powers all dynamic facet searches across the entire store.",
    "importantPoints": [
      "Groups heterogeneous attributes into an array of { k, v, [u] } objects.",
      "Solves the problem of needing dozens of sparse indexes on diverse catalog items.",
      "A single compound multikey index { \"specs.k\": 1, \"specs.v\": 1 } indexes all attributes.",
      "Simplifies search filters across polymorphic products."
    ],
    "commonMistakes": [
      "Creating hundreds of top-level single-field indexes for every product attribute.",
      "Forgetting to standardize attribute key names (e.g. \"RAM\" vs \"ram\" vs \"memory\")."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Attribute Pattern Document and Index",
        "code": "// Polymorphic Product Catalog\nconst product = {\n  _id: ObjectId(\"64d1...\"),\n  title: \"UltraBook Pro\",\n  category: \"Laptops\",\n  attributes: [\n    { k: \"screenSize\", v: 14.0, u: \"inches\" },\n    { k: \"ram\", v: 32, u: \"GB\" },\n    { k: \"storage\", v: 1024, u: \"GB\" }\n  ]\n};\n\n// Single index covers searches on ANY attribute:\ndb.products.createIndex({ \"attributes.k\": 1, \"attributes.v\": 1 });\n\n// Query: Find laptops with 32GB RAM:\ndb.products.find({\n  category: \"Laptops\",\n  attributes: { $elemMatch: { k: \"ram\", v: 32 } }\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "The 16MB BSON Document Limit: Technical Reasons and Workarounds",
    "question": "Why does MongoDB enforce a strict 16MB document size limit, and how should applications store larger data?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "16mb-limit",
      "bson",
      "gridfs",
      "architecture"
    ],
    "interviewAnswer": "The 16MB limit ensures: 1) A single document cannot monopolize the WiredTiger RAM cache; 2) Network bandwidth and serialization/deserialization times remain bounded; 3) Oplog replication does not stall secondaries. For files or datasets larger than 16MB, applications should use GridFS or store files in object storage (AWS S3) and store metadata/URLs in MongoDB.",
    "answer": "Technical rationale for 16MB:\n- Memory Management: WiredTiger uncompresses documents when loading them into memory. Bounding document size prevents single queries from thrashing the operating system page cache.\n- Oplog Consistency: Oplog entries record full document changes. Gigabyte-sized documents would quickly exhaust the oplog buffer and cause replication failure.\n- Protocol Efficiency: BSON transmission over sockets is optimized for small-to-medium objects.\n\nWorkarounds for large payloads:\n1. GridFS: Automatically splits files into 255KB chunks across two collections (`fs.files` and `fs.chunks`).\n2. External Object Storage (S3, GCS): The industry standard for media and PDFs, storing the URL in MongoDB.",
    "importantPoints": [
      "16MB limit protects WiredTiger cache, network transfer, and oplog replication.",
      "Cannot be increased or overridden in MongoDB configuration.",
      "Use GridFS for binary files that must reside in the database.",
      "Use S3/Cloud Storage for large assets, referencing the URL in MongoDB documents."
    ],
    "commonMistakes": [
      "Storing raw base64-encoded image or PDF files directly inside standard documents.",
      "Expecting MongoDB configuration flags to increase the 16MB limit."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Storing File References vs GridFS",
        "code": "// Recommended pattern: Store S3 URL and metadata in MongoDB\nconst userWithAvatar = {\n  _id: ObjectId(\"64e1...\"),\n  username: \"alex99\",\n  avatar: {\n    storageProvider: \"S3\",\n    bucket: \"app-user-avatars\",\n    key: \"avatars/alex99.png\",\n    url: \"https://cdn.myapp.com/avatars/alex99.png\",\n    bytes: 245108,\n    uploadedAt: ISODate(\"2026-09-10\")\n  }\n};"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Hierarchical Tree Patterns: Parent Reference vs Child Reference vs Ancestor Array",
    "question": "What are the trade-offs among Parent Reference, Child Reference, and Array of Ancestors for modeling tree hierarchies?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "trees",
      "hierarchies",
      "ancestors",
      "data-modeling"
    ],
    "interviewAnswer": "1) Parent Reference: Each node stores parentId (great for moving subtrees and finding immediate parent; slow for finding full subtrees without $graphLookup); 2) Child Reference: Each node stores children: [id1, id2] (fast to find immediate children, but moving nodes requires updating two documents); 3) Array of Ancestors: Each node stores ancestors: [rootId, catId, subCatId] (fastest for breadcrumbs and finding all descendants with a single indexed query { ancestors: categoryId }).",
    "answer": "Tree structures (category taxonomies, file systems, organizational charts) require specific trade-offs:\n\n1. Parent Reference (`{ parentId: ObjectId(\"...\") }`):\n- Best for: Deep trees where nodes move frequently (re-parenting requires updating exactly one field in one document).\n- Drawback: Fetching an entire branch requires recursive `$graphLookup`.\n\n2. Child Reference (`{ children: [ id1, id2 ] }`):\n- Best for: Quick access to immediate direct sub-elements.\n- Drawback: Risk of unbounded array if a node has thousands of children.\n\n3. Array of Ancestors (`{ ancestors: [ id1, id2, id3 ], parent: id3 }`):\n- Best for: E-commerce category navigation. Finding all products under \"Electronics\" (including all sub-categories) is a single indexed query: `db.products.find({ \"categories.ancestors\": electronicsId })`.\n- Generating breadcrumb navigation is instantaneous.",
    "importantPoints": [
      "Parent Reference is simplest and makes moving subtrees O(1).",
      "Child Reference is efficient for bounded sibling lookups.",
      "Array of Ancestors enables single-query lookups of entire descendant subtrees.",
      "Combine Array of Ancestors with Parent Reference for optimal flexibility."
    ],
    "commonMistakes": [
      "Using Child Reference on nodes that can have tens of thousands of children (unbounded array).",
      "Writing recursive client-side queries instead of using Array of Ancestors or $graphLookup."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Tree Node with Array of Ancestors Pattern",
        "code": "const categoryNode = {\n  _id: \"laptops\",\n  name: \"Laptops & Notebooks\",\n  parent: \"computers\",\n  ancestors: [ \"electronics\", \"computers\" ] // Root to immediate parent\n};\n\n// Find ALL items in \"electronics\" and all its subcategories in 1 query:\ndb.categories.find({ ancestors: \"electronics\" });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "JSON Schema Validation ($jsonSchema) in MongoDB Collections",
    "question": "How does MongoDB enforce document structure and type safety at the database level using $jsonSchema?",
    "difficulty": "medium",
    "questionType": "Data Governance",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "jsonSchema",
      "validation",
      "data-integrity"
    ],
    "interviewAnswer": "MongoDB supports JSON Schema validation via the validator collection option using the $jsonSchema operator. It enforces required fields, BSON data types, regex patterns, enum values, and numeric ranges on inserts and updates, preventing malformed data from entering the database regardless of client language.",
    "answer": "Configured during `createCollection` or `collMod`. Key properties: `validationLevel` (\"strict\" vs \"moderate\") and `validationAction` (\"error\" vs \"warn\"). It allows teams to enforce schema contracts at the database engine level alongside application-level validation (like Mongoose or Zod).",
    "explanation": "Configured during `createCollection` or `collMod`. Key properties: `validationLevel` (\"strict\" vs \"moderate\") and `validationAction` (\"error\" vs \"warn\"). It allows teams to enforce schema contracts at the database engine level alongside application-level validation (like Mongoose or Zod).",
    "importantPoints": [
      "Enforces schema rules natively in the database engine.",
      "Supports standard JSON Schema Draft 4 keywords.",
      "Can reject invalid writes (error) or log warnings (warn)."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "JSON Schema Validation ($jsonSchema) in MongoDB Collections",
        "code": "// Schema design pattern: JSON Schema Validation ($jsonSchema) in MongoDB Collections\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Materialized Paths Pattern for Hierarchical Trees",
    "question": "How does the Materialized Path pattern represent hierarchy using string paths, and how does regex indexing support it?",
    "difficulty": "medium",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "materialized-path",
      "trees",
      "regex"
    ],
    "interviewAnswer": "The Materialized Path pattern stores the full ancestral path as a delimited string (e.g. path: \",Electronics,Computers,Laptops,\"). Finding all descendants of \"Electronics\" is performed using a left-anchored prefix regular expression query: { path: /^,Electronics,/ }, which is fully supported by standard B-tree indexes.",
    "answer": "Similar to filesystem directory paths (`/home/user/docs`). A single index on `path` satisfies tree queries, and re-parenting involves a regex find-and-replace update on the path prefix of matching documents.",
    "explanation": "Similar to filesystem directory paths (`/home/user/docs`). A single index on `path` satisfies tree queries, and re-parenting involves a regex find-and-replace update on the path prefix of matching documents.",
    "importantPoints": [
      "Stores ancestral chain as a delimited string.",
      "Left-anchored regex queries utilize standard B-tree indexes.",
      "Enables fast branch retrieval and breadcrumbs."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Materialized Paths Pattern for Hierarchical Trees",
        "code": "// Schema design pattern: Materialized Paths Pattern for Hierarchical Trees\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Designing for Write Heavy vs Read Heavy Workloads",
    "question": "How does workload read-to-write ratio fundamentally alter schema modeling choices in MongoDB?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "workloads",
      "read-heavy",
      "write-heavy",
      "performance"
    ],
    "interviewAnswer": "For read-heavy workloads (e.g. 95% reads), favor denormalization, extensive embedding, the Computed Pattern, and duplicate summary fields to maximize single-seek read throughput. For write-heavy workloads (e.g. 80% writes), favor normalization, minimal indexing, referencing, and raw append-only ingestion to minimize B-Tree index updates and lock contention.",
    "answer": "Every embedded duplicate field requires multiple updates on every change. In write-heavy telemetry or trading systems, duplicate data introduces write amplification and secondary lag. In read-heavy content systems, denormalization avoids costly joins.",
    "explanation": "Every embedded duplicate field requires multiple updates on every change. In write-heavy telemetry or trading systems, duplicate data introduces write amplification and secondary lag. In read-heavy content systems, denormalization avoids costly joins.",
    "importantPoints": [
      "Read-heavy favors denormalization, embedding, and computed fields.",
      "Write-heavy favors referencing, normalization, and minimal indexes.",
      "Balance depends strictly on the application read/write ratio."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Designing for Write Heavy vs Read Heavy Workloads",
        "code": "// Schema design pattern: Designing for Write Heavy vs Read Heavy Workloads\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Polymorphic Pattern: Modeling Distinct Entities in a Single Collection",
    "question": "When should distinct entity types be stored in a single polymorphic collection using a type discriminator?",
    "difficulty": "medium",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "polymorphic-pattern",
      "inheritance",
      "single-table-design"
    ],
    "interviewAnswer": "The Polymorphic Pattern stores entities that share common characteristics but have differing specific fields in a single collection, identified by a discriminator field (e.g. type: \"ORGANIZATION\" vs type: \"INDIVIDUAL\"). Use it when entities are frequently queried together or share common business workflows.",
    "answer": "Commonly used for payment methods (CreditCard, PayPal, Crypto), notifications (Email, SMS, Push), and users/accounts. A unified query `db.payments.find({ status: \"PENDING\" })` returns all pending payments regardless of underlying payment type.",
    "explanation": "Commonly used for payment methods (CreditCard, PayPal, Crypto), notifications (Email, SMS, Push), and users/accounts. A unified query `db.payments.find({ status: \"PENDING\" })` returns all pending payments regardless of underlying payment type.",
    "importantPoints": [
      "Uses a discriminator field (type) to distinguish shapes.",
      "Ideal when different entity types are queried together.",
      "Avoids managing dozens of nearly identical collections."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Polymorphic Pattern: Modeling Distinct Entities in a Single Collection",
        "code": "// Schema design pattern: Polymorphic Pattern: Modeling Distinct Entities in a Single Collection\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Handling Sensitive Data and Field-Level Encryption (CSFLE)",
    "question": "How should schema design account for PII and Client-Side Field Level Encryption (CSFLE)?",
    "difficulty": "hard",
    "questionType": "Security",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "csfle",
      "encryption",
      "security",
      "compliance"
    ],
    "interviewAnswer": "CSFLE encrypts sensitive fields (SSN, credit card numbers, medical data) in the application driver before sending them across the wire to MongoDB. In schema design, encrypted fields must be isolated, and developers must choose between Deterministic encryption (allows equality queries) and Randomized encryption (highest security, but no querying allowed).",
    "answer": "With Queryable Encryption (QE) introduced in MongoDB 6.0+, range and equality queries on encrypted fields are expanding. In schema design, keep encrypted fields separate and avoid indexing sensitive fields unless deterministic encryption is explicitly configured.",
    "explanation": "With Queryable Encryption (QE) introduced in MongoDB 6.0+, range and equality queries on encrypted fields are expanding. In schema design, keep encrypted fields separate and avoid indexing sensitive fields unless deterministic encryption is explicitly configured.",
    "importantPoints": [
      "Encrypts data before it leaves the application process.",
      "Deterministic encryption allows equality queries.",
      "Randomized encryption prevents all query indexing.",
      "Protects data even if the database server is compromised."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Handling Sensitive Data and Field-Level Encryption (CSFLE)",
        "code": "// Schema design pattern: Handling Sensitive Data and Field-Level Encryption (CSFLE)\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Designing Multi-Tenant Schemas: Shared Collection vs Database per Tenant",
    "question": "What are the trade-offs between a Shared Collection multi-tenant model and a Database-per-Tenant model?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "multi-tenancy",
      "sharding",
      "isolation"
    ],
    "interviewAnswer": "1) Shared Collection with tenantId: Best for scalability, cost efficiency, and managing thousands of small tenants; requires compound indexes starting with { tenantId: 1 } and strict query filters to prevent data leakage. 2) Database-per-Tenant: Best for strict regulatory compliance, tenant-specific backups, and noisy-neighbor isolation, but limited by MongoDB namespace limits and connection overhead.",
    "answer": "Most enterprise SaaS architectures use a hybrid approach: standard tier tenants share collections partitioned by `tenantId`, while enterprise/VIP tenants receive dedicated databases or dedicated sharded replica sets.",
    "explanation": "Most enterprise SaaS architectures use a hybrid approach: standard tier tenants share collections partitioned by `tenantId`, while enterprise/VIP tenants receive dedicated databases or dedicated sharded replica sets.",
    "importantPoints": [
      "Shared collection requires tenantId as the leftmost index prefix.",
      "Database-per-tenant provides physical data isolation and custom backups.",
      "WiredTiger namespace limits restrict scaling to tens of thousands of databases."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Designing Multi-Tenant Schemas: Shared Collection vs Database per Tenant",
        "code": "// Schema design pattern: Designing Multi-Tenant Schemas: Shared Collection vs Database per Tenant\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "The Document Versioning Pattern for Audit Trails",
    "question": "How does the Document Versioning Pattern maintain a complete historical audit log of every document mutation?",
    "difficulty": "medium",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "document-versioning",
      "audit-trail",
      "compliance"
    ],
    "interviewAnswer": "The Document Versioning Pattern maintains the current active state in a main collection (e.g. contracts) and moves previous versions to an archive collection (e.g. contracts_history) with an incremented revision number and timestamp on every update, or embeds historical delta snapshots directly.",
    "answer": "Keeping historical revisions in a separate `_history` collection keeps the active collection small and fast for everyday queries. Historical audits query the archive collection only when compliance audits occur.",
    "explanation": "Keeping historical revisions in a separate `_history` collection keeps the active collection small and fast for everyday queries. Historical audits query the archive collection only when compliance audits occur.",
    "importantPoints": [
      "Active collection stays lean and fast.",
      "Historical versions are archived with revision numbers and timestamps.",
      "Supports regulatory compliance (HIPAA, SOC2, GDPR)."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The Document Versioning Pattern for Audit Trails",
        "code": "// Schema design pattern: The Document Versioning Pattern for Audit Trails\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Soft Deletion Pattern (isDeleted vs deletedAt) and Indexing Gotchas",
    "question": "What performance and indexing issues arise from implementing soft deletes, and how do you resolve them?",
    "difficulty": "medium",
    "questionType": "Data Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "soft-delete",
      "partial-indexes",
      "unique-indexes"
    ],
    "interviewAnswer": "Soft deletes (adding { isDeleted: true, deletedAt: ISODate() }) pollute indexes with dead records and break standard unique constraints (e.g. cannot reuse an email if a deleted record holds it). The solution is using Partial Indexes with partialFilterExpression: { deletedAt: null } so that deleted records are excluded from the active B-tree index.",
    "answer": "Every query must remember to append `{ isDeleted: false }`, risking low selectivity index scans. Using partial indexes ensures the active index only contains live records, keeping working sets tiny and allowing unique index re-use.",
    "explanation": "Every query must remember to append `{ isDeleted: false }`, risking low selectivity index scans. Using partial indexes ensures the active index only contains live records, keeping working sets tiny and allowing unique index re-use.",
    "importantPoints": [
      "Standard unique indexes prevent re-registering soft-deleted unique keys.",
      "Partial indexes solve unique key conflicts by indexing only active records.",
      "Exclude deleted records from the active working set."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Soft Deletion Pattern (isDeleted vs deletedAt) and Indexing Gotchas",
        "code": "// Schema design pattern: Soft Deletion Pattern (isDeleted vs deletedAt) and Indexing Gotchas\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Two-Way Referencing vs One-Way Referencing in Many-to-Many Relationships",
    "question": "When should a many-to-many relationship be modeled with Two-Way Referencing versus One-Way Referencing?",
    "difficulty": "medium",
    "questionType": "Relationships",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "many-to-many",
      "two-way-referencing",
      "relationships"
    ],
    "interviewAnswer": "One-Way Referencing stores an array of foreign IDs on only one side of the relationship (e.g. Course stores studentIds: []). Two-Way Referencing stores foreign IDs on both sides (Student stores courseIds: [], and Course stores studentIds: []). Use One-Way when cardinality is asymmetrical; use Two-Way only when both sides require frequent O(1) lookups and updates are infrequent.",
    "answer": "Two-Way Referencing requires maintaining synchronization on both documents whenever a relationship is added or removed, necessitating multi-document transactions or careful atomic operations.",
    "explanation": "Two-Way Referencing requires maintaining synchronization on both documents whenever a relationship is added or removed, necessitating multi-document transactions or careful atomic operations.",
    "importantPoints": [
      "One-Way referencing requires updating only one document.",
      "Two-Way referencing enables O(1) lookups from both directions.",
      "Two-Way referencing introduces dual-write consistency risks."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Two-Way Referencing vs One-Way Referencing in Many-to-Many Relationships",
        "code": "// Schema design pattern: Two-Way Referencing vs One-Way Referencing in Many-to-Many Relationships\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Anti-Pattern: Massive Unbounded Arrays (The Kitchen Sink Document)",
    "question": "Why is the \"Kitchen Sink\" anti-pattern of embedding logs, messages, and history into a single document disastrous?",
    "difficulty": "easy",
    "questionType": "Anti-Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "anti-pattern",
      "unbounded-arrays",
      "kitchen-sink"
    ],
    "interviewAnswer": "Embedding all related data into a single monolithic document leads to: 1) Document size approaching 16MB; 2) Constant memory reallocation and page fragmentation in WiredTiger as the document expands; 3) Unnecessary network transfer of megabytes of data on simple reads; 4) Slow index updates on multikey fields.",
    "answer": "New MongoDB developers often take \"document databases embed everything\" to the extreme. If an entity accumulates events over time, those events MUST be partitioned into separate documents or bucketed.",
    "explanation": "New MongoDB developers often take \"document databases embed everything\" to the extreme. If an entity accumulates events over time, those events MUST be partitioned into separate documents or bucketed.",
    "importantPoints": [
      "Document growth causes disk fragmentation and cache eviction.",
      "Violates single responsibility and locality principles.",
      "Remediate by splitting unbounded events into child collections."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Anti-Pattern: Massive Unbounded Arrays (The Kitchen Sink Document)",
        "code": "// Schema design pattern: Anti-Pattern: Massive Unbounded Arrays (The Kitchen Sink Document)\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Modeling E-Commerce Shopping Carts vs Completed Orders",
    "question": "Why should an active shopping cart and a completed order use fundamentally different schema designs?",
    "difficulty": "medium",
    "questionType": "Practical",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "e-commerce",
      "immutability",
      "carts-vs-orders"
    ],
    "interviewAnswer": "An active shopping cart is a live, highly mutable document referencing current product prices, discounts, and real-time inventory. A completed order must be completely immutable and denormalized, embedding the exact product titles, SKU, prices paid, tax rates, and shipping addresses at the moment of checkout for legal and financial audit compliance.",
    "answer": "If an order only references `productId`, and the vendor changes the product price or description next month, past invoices would display corrupted historical records. Orders must capture an immutable snapshot.",
    "explanation": "If an order only references `productId`, and the vendor changes the product price or description next month, past invoices would display corrupted historical records. Orders must capture an immutable snapshot.",
    "importantPoints": [
      "Carts reference live, mutable catalog data.",
      "Orders embed completely denormalized, immutable historical snapshots.",
      "Protects legal, tax, and invoicing integrity."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Modeling E-Commerce Shopping Carts vs Completed Orders",
        "code": "// Schema design pattern: Modeling E-Commerce Shopping Carts vs Completed Orders\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "The Approximation Pattern: Reducing High-Frequency Counter Writes",
    "question": "How does the Approximation Pattern reduce write load on viral counters like page views or video likes?",
    "difficulty": "hard",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "approximation-pattern",
      "high-throughput",
      "counters"
    ],
    "interviewAnswer": "The Approximation Pattern reduces database write volume by updating counters only once every N events (e.g. incrementing by 100 on every 100th event, determined probabilistically in application code with Math.random() < 0.01). This reduces database write traffic by 99% while maintaining statistical accuracy for high-volume metrics.",
    "answer": "On a website with 100 million page views per day, updating the database on every single view generates 1,200 writes per second just for view counts. Incrementing by 100 every ~100 views cuts write load to 12 writes per second.",
    "explanation": "On a website with 100 million page views per day, updating the database on every single view generates 1,200 writes per second just for view counts. Incrementing by 100 every ~100 views cuts write load to 12 writes per second.",
    "importantPoints": [
      "Reduces database write operations by 90-99%.",
      "Statistically accurate over large sample sizes.",
      "Critical for viral video view counts, website impressions, and telemetry."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The Approximation Pattern: Reducing High-Frequency Counter Writes",
        "code": "// Schema design pattern: The Approximation Pattern: Reducing High-Frequency Counter Writes\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Shard Key Selection and its Impact on Schema Design",
    "question": "How does the future necessity of sharding dictate initial schema design and field choices?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "sharding",
      "shard-key",
      "scalability"
    ],
    "interviewAnswer": "A shard key must be present in every query that targets a single shard; otherwise, the query router (mongos) must broadcast the query to ALL shards (scatter-gather). Therefore, the schema must include the anticipated shard key (e.g. tenantId, customerId, or userId) in all major collections and compound indexes from day one.",
    "answer": "If you choose `customerId` as the shard key, every collection related to orders, carts, and payments must store `customerId` so queries can be routed directly to the specific shard housing that customer's data.",
    "explanation": "If you choose `customerId` as the shard key, every collection related to orders, carts, and payments must store `customerId` so queries can be routed directly to the specific shard housing that customer's data.",
    "importantPoints": [
      "Shard key must be embedded in all related documents to avoid scatter-gather.",
      "Unique indexes on sharded collections must include the shard key as a prefix.",
      "Anticipate horizontal scaling needs early in schema modeling."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Shard Key Selection and its Impact on Schema Design",
        "code": "// Schema design pattern: Shard Key Selection and its Impact on Schema Design\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Anti-Pattern: Over-Normalizing (Relational Thinking in MongoDB)",
    "question": "What operational symptoms indicate that a MongoDB schema has been over-normalized like a relational database?",
    "difficulty": "medium",
    "questionType": "Anti-Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "anti-pattern",
      "over-normalization",
      "lookups"
    ],
    "interviewAnswer": "Symptoms include: 1) Proliferation of tiny collections (tables with 2-3 fields); 2) Massive aggregation pipelines chaining 4 or 5 $lookup stages for simple screen renders; 3) High query latency and heavy CPU usage on joins; 4) Application code issuing dozens of round-trip queries to construct a single domain model.",
    "answer": "MongoDB is not a relational database. It lacks relational query engine optimizations for multi-table hash joins. Forcing normalized tables forces MongoDB to perform nested-loop lookups, crippling performance.",
    "explanation": "MongoDB is not a relational database. It lacks relational query engine optimizations for multi-table hash joins. Forcing normalized tables forces MongoDB to perform nested-loop lookups, crippling performance.",
    "importantPoints": [
      "Chaining multiple $lookup stages kills throughput.",
      "Defeats the primary benefit of MongoDB (data locality).",
      "Embed bounded data that is always accessed together."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Anti-Pattern: Over-Normalizing (Relational Thinking in MongoDB)",
        "code": "// Schema design pattern: Anti-Pattern: Over-Normalizing (Relational Thinking in MongoDB)\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Compound Documents as IDs (_id as a Subdocument)",
    "question": "What are the architectural advantages of using an embedded subdocument as the _id primary key?",
    "difficulty": "medium",
    "questionType": "Advanced",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "compound-id",
      "primary-key",
      "clustering"
    ],
    "interviewAnswer": "Using a subdocument as _id (e.g. _id: { tenantId: \"acme\", orderId: 1042 }) enforces multi-field compound uniqueness natively without needing a secondary unique index, saves index RAM by reusing the mandatory clustered _id index, and guarantees deterministic sharding when sharded on _id.",
    "answer": "Every MongoDB collection must have a unique index on `_id`. Storing a compound key in `_id` avoids creating an additional compound unique index, saving hundreds of megabytes of RAM on large collections.",
    "explanation": "Every MongoDB collection must have a unique index on `_id`. Storing a compound key in `_id` avoids creating an additional compound unique index, saving hundreds of megabytes of RAM on large collections.",
    "importantPoints": [
      "Enforces composite uniqueness on the mandatory _id index.",
      "Saves B-tree memory by eliminating secondary unique indexes.",
      "Ensures immutable, deterministic primary keys."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Compound Documents as IDs (_id as a Subdocument)",
        "code": "// Schema design pattern: Compound Documents as IDs (_id as a Subdocument)\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Designing Indexes for Aggregation $lookup Stages",
    "question": "What specific index configuration is required on the foreign collection to make $lookup performant?",
    "difficulty": "medium",
    "questionType": "Performance",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "lookup",
      "foreignField",
      "indexes"
    ],
    "interviewAnswer": "The foreign collection MUST have an index where foreignField is the leading prefix. Without this index, for every single document in the source collection, MongoDB performs a full collection scan (COLLSCAN) on the foreign collection, turning an O(N) query into an catastrophic O(N * M) operation.",
    "answer": "If `orders` has 100,000 documents and joins `customers` on `foreignField: \"_id\"`, `_id` is indexed by default. But if it joins on `foreignField: \"customerCode\"`, lacking an index on `customerCode` will scan the entire `customers` collection 100,000 times.",
    "explanation": "If `orders` has 100,000 documents and joins `customers` on `foreignField: \"_id\"`, `_id` is indexed by default. But if it joins on `foreignField: \"customerCode\"`, lacking an index on `customerCode` will scan the entire `customers` collection 100,000 times.",
    "importantPoints": [
      "foreignField MUST be indexed in the target collection.",
      "Missing foreign index causes O(N * M) nested-loop collection scans.",
      "Crucial check whenever $lookup latency spikes."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Designing Indexes for Aggregation $lookup Stages",
        "code": "// Schema design pattern: Designing Indexes for Aggregation $lookup Stages\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Capping Collections (Capped Collections) for Logging and Caching",
    "question": "When should a Capped Collection be used in schema design, and what are its behavioral constraints?",
    "difficulty": "medium",
    "questionType": "Storage Engine",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "capped-collections",
      "circular-buffer",
      "logging"
    ],
    "interviewAnswer": "Capped collections are fixed-size circular buffers that automatically overwrite the oldest documents when they reach their allocated byte or document limit. They guarantee insertion-order document retrieval without indexes, making them ideal for high-throughput activity logging and circular caches.",
    "answer": "Constraints: 1) Cannot delete individual documents (only drop collection); 2) Documents cannot grow in size upon update; 3) Cannot be sharded; 4) Support tailable cursors that stream new entries like `tail -f`.",
    "explanation": "Constraints: 1) Cannot delete individual documents (only drop collection); 2) Documents cannot grow in size upon update; 3) Cannot be sharded; 4) Support tailable cursors that stream new entries like `tail -f`.",
    "importantPoints": [
      "Fixed-size circular FIFO buffer.",
      "High-speed sequential write throughput with zero fragmentation.",
      "Supports tailable cursors for real-time log streaming."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Capping Collections (Capped Collections) for Logging and Caching",
        "code": "// Schema design pattern: Capping Collections (Capped Collections) for Logging and Caching\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Time-to-Live (TTL) Collections for Ephemeral Session Storage",
    "question": "How does TTL indexing automate session expiration and cache cleanup in MongoDB schemas?",
    "difficulty": "easy",
    "questionType": "Storage",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "ttl",
      "sessions",
      "cache",
      "expiration"
    ],
    "interviewAnswer": "A TTL index (created on a single Date field with expireAfterSeconds) instructs MongoDB's background thread (which runs every 60 seconds) to automatically delete documents once their date value plus expireAfterSeconds has passed. It eliminates manual cron cleanup scripts for sessions, OTP codes, and temporary carts.",
    "answer": "Syntax: `db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })`.\nDynamic expiration: Set `expireAfterSeconds: 0` and store the exact expiration timestamp in an `expiresAt` field in each document.",
    "explanation": "Syntax: `db.sessions.createIndex({ createdAt: 1 }, { expireAfterSeconds: 3600 })`.\nDynamic expiration: Set `expireAfterSeconds: 0` and store the exact expiration timestamp in an `expiresAt` field in each document.",
    "importantPoints": [
      "Background thread runs every 60 seconds to purge expired docs.",
      "Must be built on a single BSON Date field.",
      "ExpireAfterSeconds: 0 allows setting custom expiration times per document."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Time-to-Live (TTL) Collections for Ephemeral Session Storage",
        "code": "// Schema design pattern: Time-to-Live (TTL) Collections for Ephemeral Session Storage\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Denormalizing with Change Streams for Eventual Consistency",
    "question": "How can Change Streams maintain eventual consistency across denormalized collections without distributed locks?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "change-streams",
      "denormalization",
      "eventual-consistency"
    ],
    "interviewAnswer": "When shared data is denormalized across multiple collections for read speed, an application microservice listens to MongoDB Change Streams on the primary collection. Whenever an entity is updated, the service asynchronously publishes updates or directly propagates the changes to all denormalized child documents, ensuring eventual consistency.",
    "answer": "This decouples the client write path from downstream synchronization: user updates complete in 2ms, and the change stream propagates the updated user name to 10,000 embedded documents in the background without blocking the user.",
    "explanation": "This decouples the client write path from downstream synchronization: user updates complete in 2ms, and the change stream propagates the updated user name to 10,000 embedded documents in the background without blocking the user.",
    "importantPoints": [
      "Decouples primary write from multi-collection updates.",
      "Guarantees reliable, ordered event delivery via replica set oplog.",
      "Powers asynchronous eventual consistency for read-optimized schemas."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Denormalizing with Change Streams for Eventual Consistency",
        "code": "// Schema design pattern: Denormalizing with Change Streams for Eventual Consistency\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Schema Design for Geospatial Data (GeoJSON and 2dsphere)",
    "question": "How must documents be structured to support geospatial indexing and distance queries?",
    "difficulty": "medium",
    "questionType": "Geospatial",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "geospatial",
      "geojson",
      "2dsphere",
      "coordinates"
    ],
    "interviewAnswer": "Documents must store coordinates formatted as GeoJSON objects containing type: \"Point\" and coordinates: [longitude, latitude] (note: longitude comes FIRST). A 2dsphere index on this field enables spherical earth queries like $near, $geoWithin, and $geoIntersects.",
    "answer": "Syntax:\n`location: { type: \"Point\", coordinates: [ -73.985130, 40.748817 ] }`\nNotice: Longitude (-180 to 180) is index 0, Latitude (-90 to 90) is index 1. Swapping them is the most common geospatial bug in MongoDB.",
    "explanation": "Syntax:\n`location: { type: \"Point\", coordinates: [ -73.985130, 40.748817 ] }`\nNotice: Longitude (-180 to 180) is index 0, Latitude (-90 to 90) is index 1. Swapping them is the most common geospatial bug in MongoDB.",
    "importantPoints": [
      "Coordinates array MUST be [longitude, latitude].",
      "Requires type (\"Point\", \"Polygon\", etc.) and coordinates keys.",
      "Indexed using 2dsphere for accurate spherical distance math."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Schema Design for Geospatial Data (GeoJSON and 2dsphere)",
        "code": "// Schema design pattern: Schema Design for Geospatial Data (GeoJSON and 2dsphere)\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Managing Schema Evolution Across Mobile App Versions",
    "question": "How does schema design accommodate legacy mobile app versions that cannot be forced to update immediately?",
    "difficulty": "hard",
    "questionType": "Mobile Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "mobile",
      "backward-compatibility",
      "schema-evolution"
    ],
    "interviewAnswer": "Because mobile clients update slowly over months, backend schemas must adhere to additive-only changes (never delete or rename active fields; add new fields with default values). Older clients continue reading legacy fields, while modern clients read new fields, supported by database-level Schema Versioning or API translation layers.",
    "answer": "If v1 mobile apps expect `avatarUrl` and v2 apps expect `avatar: { url, thumbnail }`, the document can store both or the API gateway can map between them until telemetry confirms v1 traffic has dropped to zero.",
    "explanation": "If v1 mobile apps expect `avatarUrl` and v2 apps expect `avatar: { url, thumbnail }`, the document can store both or the API gateway can map between them until telemetry confirms v1 traffic has dropped to zero.",
    "importantPoints": [
      "Make schema changes additive-only during multi-version lifecycles.",
      "Never rename or delete fields while legacy mobile builds are active.",
      "Use API translation layers or Schema Versioning handlers."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Managing Schema Evolution Across Mobile App Versions",
        "code": "// Schema design pattern: Managing Schema Evolution Across Mobile App Versions\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "The Document Growth Factor and Storage Fragmentation",
    "question": "Why does frequent in-place document expansion cause performance degradation in storage engines?",
    "difficulty": "hard",
    "questionType": "Storage Engine",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "document-growth",
      "wiredtiger",
      "fragmentation",
      "padding"
    ],
    "interviewAnswer": "When updates constantly add fields or push array elements to a document, the document outgrows its allocated disk block. In WiredTiger, this causes the document to be rewritten to a new disk location, triggering internal cache page splits, write amplification, and file fragmentation over time.",
    "answer": "In the legacy MMAPv1 engine, this caused severe padding reallocation. In WiredTiger, constant page splits increase B-tree depth and fragment WiredTiger data files, demanding periodic compaction or pre-allocation.",
    "explanation": "In the legacy MMAPv1 engine, this caused severe padding reallocation. In WiredTiger, constant page splits increase B-tree depth and fragment WiredTiger data files, demanding periodic compaction or pre-allocation.",
    "importantPoints": [
      "Constantly growing documents trigger page splits and write amplification.",
      "Pre-allocate bounded arrays or bucket documents to minimize size shifts.",
      "Keep documents relatively stable in size throughout their lifecycle."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The Document Growth Factor and Storage Fragmentation",
        "code": "// Schema design pattern: The Document Growth Factor and Storage Fragmentation\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Modeling Many-to-One Relationships: When to Invert the Reference",
    "question": "Why is it often advantageous to invert a 1-to-N reference so the child points to the parent rather than the parent storing an array of children?",
    "difficulty": "medium",
    "questionType": "Relationships",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "one-to-many",
      "inverted-reference",
      "unbounded-arrays"
    ],
    "interviewAnswer": "Storing an array of child IDs in the parent document creates an unbounded array that will eventually breach the 16MB limit, causes frequent document expansion, and creates write contention when multiple concurrent processes add children. Inverting the reference (storing parentId in each child) makes the relationship infinitely scalable and concurrent.",
    "answer": "Example: An order with 5 items can embed items. But a blog post with 100,000 comments should NEVER store `comments: [commentId1, ...]`. Instead, each comment document stores `{ postId: ... }`. Adding a comment is a clean, single-document insert with zero contention on the blog post.",
    "explanation": "Example: An order with 5 items can embed items. But a blog post with 100,000 comments should NEVER store `comments: [commentId1, ...]`. Instead, each comment document stores `{ postId: ... }`. Adding a comment is a clean, single-document insert with zero contention on the blog post.",
    "importantPoints": [
      "Inverting references avoids unbounded arrays in the parent.",
      "Child insert has zero lock contention on the parent document.",
      "Child documents can be indexed and queried with standard pagination."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Modeling Many-to-One Relationships: When to Invert the Reference",
        "code": "// Schema design pattern: Modeling Many-to-One Relationships: When to Invert the Reference\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Data Archiving Strategy: Cold Storage vs Hot Working Set",
    "question": "How should schemas segregate hot operational data from historical cold data to optimize memory utilization?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "data-archiving",
      "working-set",
      "hot-cold-storage"
    ],
    "interviewAnswer": "Move records older than a specific threshold (e.g. orders older than 90 days) from the active collection to a separate historical archive collection (or Atlas Online Archive / S3). This keeps the active collection small enough to fit completely within WiredTiger RAM cache, maximizing cache hit ratios for 99% of daily queries.",
    "answer": "If a 1TB collection contains 900GB of historical data from 5 years ago, random queries on old data will evict active, hot documents from RAM, causing severe disk thrashing. Segregating into `orders_active` and `orders_archive` protects production throughput.",
    "explanation": "If a 1TB collection contains 900GB of historical data from 5 years ago, random queries on old data will evict active, hot documents from RAM, causing severe disk thrashing. Segregating into `orders_active` and `orders_archive` protects production throughput.",
    "importantPoints": [
      "Keeping active working set in RAM is the #1 rule of MongoDB performance.",
      "Segregate cold data into archive collections or Atlas Online Archive.",
      "Prevents historical queries from evicting hot data from WiredTiger cache."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Data Archiving Strategy: Cold Storage vs Hot Working Set",
        "code": "// Schema design pattern: Data Archiving Strategy: Cold Storage vs Hot Working Set\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Using MongoDB with GraphQL: Overcoming the N+1 Query Problem in Schemas",
    "question": "How does schema design interact with GraphQL resolvers to avoid the N+1 query problem?",
    "difficulty": "hard",
    "questionType": "Integration",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "graphql",
      "n-plus-one",
      "dataloader",
      "batching"
    ],
    "interviewAnswer": "If a GraphQL schema mirrors a normalized MongoDB schema, resolving nested fields triggers N separate find queries for N parent documents. Schema solutions include: 1) Embedding related data to resolve the query in a single find(); 2) Using Dataloader in the Node.js API to batch individual foreign keys into a single $in query; 3) Compiling GraphQL AST directly into a single $lookup aggregation pipeline.",
    "answer": "Without DataLoader or proper embedding, rendering a list of 50 posts with their authors fires 1 query for posts + 50 queries for authors (51 round-trips). DataLoader batches the 50 author IDs into `db.authors.find({ _id: { $in: [ids...] } })` in 1 round trip.",
    "explanation": "Without DataLoader or proper embedding, rendering a list of 50 posts with their authors fires 1 query for posts + 50 queries for authors (51 round-trips). DataLoader batches the 50 author IDs into `db.authors.find({ _id: { $in: [ids...] } })` in 1 round trip.",
    "importantPoints": [
      "Normalized schemas cause N+1 query loops in naive GraphQL resolvers.",
      "Embedding solves N+1 at the database layer (single query fetch).",
      "Use DataLoader or aggregation compilation for normalized GraphQL schemas."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Using MongoDB with GraphQL: Overcoming the N+1 Query Problem in Schemas",
        "code": "// Schema design pattern: Using MongoDB with GraphQL: Overcoming the N+1 Query Problem in Schemas\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "The State Machine Pattern for Order and Workflow Schemas",
    "question": "How should state-driven entities (e.g. order statuses) be modeled to ensure valid state transitions and auditability?",
    "difficulty": "medium",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "state-machine",
      "workflow",
      "status-history"
    ],
    "interviewAnswer": "Model state-driven entities with a currentStatus string field for fast indexing and filtering, paired with an embedded statusHistory array storing timestamped transition records: [{ status: \"PENDING\", at: date, by: userId }, { status: \"PAID\", at: date }]. State transitions must execute conditional atomic updates checking currentStatus.",
    "answer": "Conditional update ensures atomic transition:\n`db.orders.updateOne({ _id: id, currentStatus: \"PENDING\" }, { $set: { currentStatus: \"PAID\" }, $push: { statusHistory: { status: \"PAID\", at: new Date() } } })`.\nIf two workers attempt to fulfill the order simultaneously, only one succeeds.",
    "explanation": "Conditional update ensures atomic transition:\n`db.orders.updateOne({ _id: id, currentStatus: \"PENDING\" }, { $set: { currentStatus: \"PAID\" }, $push: { statusHistory: { status: \"PAID\", at: new Date() } } })`.\nIf two workers attempt to fulfill the order simultaneously, only one succeeds.",
    "importantPoints": [
      "Current state field allows fast single-key index lookups.",
      "Status history array provides an immutable audit trail.",
      "Atomic conditional updates prevent invalid concurrent state transitions."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The State Machine Pattern for Order and Workflow Schemas",
        "code": "// Schema design pattern: The State Machine Pattern for Order and Workflow Schemas\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Designing Read-Only Materialized Views with On-Demand Maintenance",
    "question": "How can on-demand materialized views be designed using $merge to serve heavy analytical read queries?",
    "difficulty": "hard",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "materialized-views",
      "merge",
      "analytics"
    ],
    "interviewAnswer": "Complex aggregations that join multiple collections should not be computed on user page loads. Instead, an aggregation pipeline with a terminal $merge stage runs periodically or event-driven, writing pre-computed, denormalized view documents into a dedicated reporting collection that application endpoints query with simple find() calls.",
    "answer": "Unlike relational materialized views that require database vendor triggers, MongoDB's `$merge` can update individual documents incrementally without rebuilding the whole view, scaling to millions of view records smoothly.",
    "explanation": "Unlike relational materialized views that require database vendor triggers, MongoDB's `$merge` can update individual documents incrementally without rebuilding the whole view, scaling to millions of view records smoothly.",
    "importantPoints": [
      "Isolates heavy analytical computations from user-facing APIs.",
      "$merge enables incremental updates to view collections.",
      "Application queries pre-aggregated documents in O(1) time."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Designing Read-Only Materialized Views with On-Demand Maintenance",
        "code": "// Schema design pattern: Designing Read-Only Materialized Views with On-Demand Maintenance\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Atomic Multi-Field Inventory Reservation Pattern",
    "question": "How can an e-commerce inventory schema guarantee stock reservation without negative quantities or race conditions?",
    "difficulty": "hard",
    "questionType": "Concurrency",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "inventory",
      "concurrency",
      "atomic-updates",
      "race-conditions"
    ],
    "interviewAnswer": "Store inventory as { availableStock: 10, reservedStock: 0 }. When reserving stock, execute an atomic conditional update matching availableStock >= requestedQty: db.inventory.updateOne({ _id: itemId, availableStock: { $gte: qty } }, { $inc: { availableStock: -qty, reservedStock: qty } }). If matchedCount is 0, the item is out of stock, eliminating race conditions without distributed locks.",
    "answer": "This single-document atomic update leverages MongoDB's internal document-level lock. Two checkout requests arriving at the exact same millisecond will serialize; the first decrements available stock, and the second fails if stock is insufficient.",
    "explanation": "This single-document atomic update leverages MongoDB's internal document-level lock. Two checkout requests arriving at the exact same millisecond will serialize; the first decrements available stock, and the second fails if stock is insufficient.",
    "importantPoints": [
      "Guarantees zero overselling without multi-document transactions.",
      "Leverages document-level write locks for atomic verification and update.",
      "Fastest possible concurrency control for high-demand flash sales."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Atomic Multi-Field Inventory Reservation Pattern",
        "code": "// Schema design pattern: Atomic Multi-Field Inventory Reservation Pattern\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Storing Binary Data: BinData vs External Storage vs GridFS",
    "question": "What are the rules for deciding among BSON BinData, GridFS, and Cloud Object Storage (S3) for binary assets?",
    "difficulty": "medium",
    "questionType": "Storage",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "bindata",
      "gridfs",
      "s3",
      "storage"
    ],
    "interviewAnswer": "1) BSON BinData: Small thumbnails or cryptographic keys (< 1MB) directly embedded; 2) GridFS: Files between 1MB and 50MB when database backups and transactions must strictly bundle the binary files; 3) Cloud Object Storage (S3/GCS): Files > 50MB, user uploads, videos, and PDFs (storing only metadata/URL in MongoDB) for superior CDN caching, cost, and streaming performance.",
    "answer": "Storing gigabytes of binary video in MongoDB pollutes the WiredTiger cache and slows down backups. Offloading large binaries to S3 and caching via Cloudflare CDN is the modern cloud best practice.",
    "explanation": "Storing gigabytes of binary video in MongoDB pollutes the WiredTiger cache and slows down backups. Offloading large binaries to S3 and caching via Cloudflare CDN is the modern cloud best practice.",
    "importantPoints": [
      "BinData for tiny binaries (< 1MB) embedded directly.",
      "GridFS for files requiring unified database backup and access control.",
      "S3/GCS object storage for public assets, media, and documents."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Storing Binary Data: BinData vs External Storage vs GridFS",
        "code": "// Schema design pattern: Storing Binary Data: BinData vs External Storage vs GridFS\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Auditing Schema Design Health: Key Metrics in db.collection.stats()",
    "question": "Which metrics in db.collection.stats() reveal schema design bottlenecks in a production collection?",
    "difficulty": "medium",
    "questionType": "Diagnostics",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "collection-stats",
      "avgObjSize",
      "totalIndexSize"
    ],
    "interviewAnswer": "Key diagnostic metrics include: 1) avgObjSize (signals whether documents are growing dangerously large); 2) totalIndexSize vs totalSize (if index size exceeds data size, the collection has index bloat); 3) nindexes (too many indexes slow down writes); 4) capped (confirms circular buffer settings); 5) freeStorage (indicates disk fragmentation from document rewrites).",
    "answer": "If `totalIndexSize` exceeds available server RAM, the working set will not fit in memory, causing continuous page faults and disk I/O latency on every query and insert.",
    "explanation": "If `totalIndexSize` exceeds available server RAM, the working set will not fit in memory, causing continuous page faults and disk I/O latency on every query and insert.",
    "importantPoints": [
      "avgObjSize indicates document bloat and risk of 16MB threshold.",
      "totalIndexSize must fit within server RAM for optimal performance.",
      "freeStorage highlights fragmentation from volatile document sizes."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Auditing Schema Design Health: Key Metrics in db.collection.stats()",
        "code": "// Schema design pattern: Auditing Schema Design Health: Key Metrics in db.collection.stats()\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Designing Schemas for Full-Text Search vs Atlas Search",
    "question": "How does schema design differ when using MongoDB core Text Indexes versus Lucene-based Atlas Search?",
    "difficulty": "hard",
    "questionType": "Search",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "atlas-search",
      "text-index",
      "lucene",
      "full-text"
    ],
    "interviewAnswer": "Core Text Indexes require embedding all searchable text fields or indexing them with text index weights, but they suffer from high B-tree write overhead and limited language stemmers. Atlas Search (Lucene) builds an asynchronous inverted index outside the WiredTiger engine, allowing complex autocomplete, fuzzy search, and faceting without altering the primary schema or impacting write latency.",
    "answer": "When using Atlas Search, you do not need to create text indexes or denormalize text fields into search arrays. Lucene automatically parses the schema documents asynchronously, providing enterprise search with zero document-level index penalties.",
    "explanation": "When using Atlas Search, you do not need to create text indexes or denormalize text fields into search arrays. Lucene automatically parses the schema documents asynchronously, providing enterprise search with zero document-level index penalties.",
    "importantPoints": [
      "Core Text indexes add significant write latency to the B-tree.",
      "Atlas Search operates on an external Lucene index asynchronously.",
      "Atlas Search provides fuzzy matching, autocomplete, and scoring out of the box."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Designing Schemas for Full-Text Search vs Atlas Search",
        "code": "// Schema design pattern: Designing Schemas for Full-Text Search vs Atlas Search\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "The Token Bucket Rate Limiting Schema Pattern",
    "question": "How can a MongoDB document implement the Token Bucket algorithm for API rate limiting?",
    "difficulty": "hard",
    "questionType": "Design Pattern",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "rate-limiting",
      "token-bucket",
      "atomic-updates"
    ],
    "interviewAnswer": "Store { _id: apiKey, tokens: 100, lastRefill: ISODate() }. When an API request arrives, execute a findOneAndUpdate with an aggregation pipeline that refills tokens based on elapsed time since lastRefill, and decrements 1 token if tokens > 0, all within a single atomic operation.",
    "answer": "This provides an atomic, distributed rate limiter across multiple web servers without needing Redis, leveraging MongoDB's atomic document-level locking to prevent race conditions during burst traffic.",
    "explanation": "This provides an atomic, distributed rate limiter across multiple web servers without needing Redis, leveraging MongoDB's atomic document-level locking to prevent race conditions during burst traffic.",
    "importantPoints": [
      "Computes token replenishment and consumption in one atomic operation.",
      "Eliminates need for separate Redis infrastructure in moderate-scale apps.",
      "Leverages pipeline updates to calculate elapsed-time refills."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The Token Bucket Rate Limiting Schema Pattern",
        "code": "// Schema design pattern: The Token Bucket Rate Limiting Schema Pattern\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Composite Shard Keys: Balancing Monotonic Ingestion and Targeted Reads",
    "question": "Why is a composite shard key combining a low-cardinality routing field and a monotonic field recommended for time series?",
    "difficulty": "hard",
    "questionType": "Sharding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "sharding",
      "shard-key",
      "composite-key",
      "jumbo-chunks"
    ],
    "interviewAnswer": "Sharding on a monotonic field alone (e.g. createdAt) sends 100% of inserts to a single \"hot shard\". Sharding on a random UUID scatters data, making range queries hit every shard. A composite shard key { customerId: 1, createdAt: 1 } balances writes across shards by customerId while keeping each customer's time-series data sorted for fast localized range queries.",
    "answer": "The leading field (`customerId` or `deviceType`) provides high cardinality to distribute chunks across shards. The secondary field (`createdAt`) enables efficient single-shard range queries without scatter-gather.",
    "explanation": "The leading field (`customerId` or `deviceType`) provides high cardinality to distribute chunks across shards. The secondary field (`createdAt`) enables efficient single-shard range queries without scatter-gather.",
    "importantPoints": [
      "Monotonic keys alone create hot-spot shards during insert.",
      "Random keys scatter data, preventing efficient range scans.",
      "Composite shard key { category: 1, timestamp: 1 } provides the ideal compromise."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Composite Shard Keys: Balancing Monotonic Ingestion and Targeted Reads",
        "code": "// Schema design pattern: Composite Shard Keys: Balancing Monotonic Ingestion and Targeted Reads\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Managing Schema Constraints with Unique Compound Sparse Indexes",
    "question": "When is a Unique Compound Sparse or Partial Index required in complex multi-tenant schemas?",
    "difficulty": "hard",
    "questionType": "Integrity",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "unique-index",
      "partial-index",
      "multi-tenant"
    ],
    "interviewAnswer": "In multi-tenant systems, usernames or slugs must be unique per tenant, but may be optional (null). A Unique Compound Partial Index on { tenantId: 1, username: 1 } with partialFilterExpression: { username: { $type: \"string\" } } enforces uniqueness only within each tenant while allowing multiple documents to have missing or null usernames.",
    "answer": "Without the partial filter expression, a standard unique index rejects a second document with a null username for the same tenant. Combining compound keys with partial filters gives precise relational-grade uniqueness guarantees.",
    "explanation": "Without the partial filter expression, a standard unique index rejects a second document with a null username for the same tenant. Combining compound keys with partial filters gives precise relational-grade uniqueness guarantees.",
    "importantPoints": [
      "Enforces uniqueness scoped to each tenant.",
      "Excludes null or non-string values to allow optional fields.",
      "Avoids duplicate key errors on uninitialized user records."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Managing Schema Constraints with Unique Compound Sparse Indexes",
        "code": "// Schema design pattern: Managing Schema Constraints with Unique Compound Sparse Indexes\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "schema-design",
    "title": "Conclusion on Schema Design: The Operational Rule of Thumb",
    "question": "What is the overarching operational philosophy of MongoDB data modeling compared to relational modeling?",
    "difficulty": "easy",
    "questionType": "Philosophy",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "schema-design",
      "data-modeling",
      "philosophy",
      "access-patterns"
    ],
    "interviewAnswer": "Relational data modeling designs for the data (normalizing entities and relationships regardless of how they are queried). MongoDB data modeling designs strictly for the application's access patterns (storing together data that is queried together), prioritizing read performance, atomic single-document operations, and horizontal scalability.",
    "answer": "In MongoDB, there is no single \"correct\" schema for an entity in the abstract. An e-commerce product schema for a real-time bidding app will look completely different from a product schema for a historical warehouse, because their query access patterns dictate the physical storage layout.",
    "explanation": "In MongoDB, there is no single \"correct\" schema for an entity in the abstract. An e-commerce product schema for a real-time bidding app will look completely different from a product schema for a historical warehouse, because their query access patterns dictate the physical storage layout.",
    "importantPoints": [
      "Model for application access patterns, not abstract entities.",
      "Store together data that is queried together.",
      "Optimize for read performance and atomic single-document writes.",
      "Let cardinality and update frequency guide embedding vs referencing."
    ],
    "commonMistakes": [
      "Over-normalizing or creating unbounded embedded arrays."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Conclusion on Schema Design: The Operational Rule of Thumb",
        "code": "// Schema design pattern: Conclusion on Schema Design: The Operational Rule of Thumb\ndb.collection.insertOne({});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
