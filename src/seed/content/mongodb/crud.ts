import { SeedQuestion } from '../types';

export const crudQuestions: SeedQuestion[] = [
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Ordered vs Unordered Bulk Operations (insertMany and bulkWrite)",
    "question": "What is the operational difference between ordered and unordered executions in insertMany() and bulkWrite()?",
    "difficulty": "medium",
    "questionType": "Comparison",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "bulkwrite",
      "insertmany",
      "error-handling"
    ],
    "interviewAnswer": "In ordered execution (default: ordered: true), MongoDB processes operations serially. If an error occurs (such as a duplicate key violation), execution halts immediately, and subsequent operations are aborted. In unordered execution (ordered: false), MongoDB executes operations in arbitrary parallel order and continues executing remaining operations even if some fail.",
    "answer": "When executing batch writes: 1) `ordered: true`: Operations are applied strictly in array sequence. If operation #5 fails, operations #6 through #100 are cancelled. Returns a BulkWriteError containing the failure details and count of operations succeeded prior to the failure. 2) `ordered: false`: Operations can be reordered and parallelized across worker threads on the cluster. If operation #5 fails, remaining operations #6 through #100 are still executed. All errors are collected and reported in a summary error array at the end.",
    "explanation": "Unordered bulk writes offer significantly higher throughput on sharded clusters because operations can be dispatched to different shard nodes simultaneously.",
    "importantPoints": [
      "ordered: true halts at first failure; remaining operations are not executed.",
      "ordered: false attempts all operations regardless of intermediate failures.",
      "Unordered bulk operations provide superior throughput on sharded clusters.",
      "Default for insertMany and bulkWrite is ordered: true."
    ],
    "commonMistakes": [
      "Assuming insertMany rolls back previously inserted documents when an error occurs (it does not roll back; previous inserts remain committed).",
      "Forgetting that ordered: false parallelizes operations without guaranteeing execution sequence."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Unordered Batch Insert Example",
        "code": "try {\n  db.products.insertMany(\n    [\n      { _id: 1, name: \"Product A\" },\n      { _id: 2, name: \"Product B\" },\n      { _id: 1, name: \"Duplicate ID\" }, // Fails duplicate key\n      { _id: 3, name: \"Product C\" }     // Still executed under ordered: false!\n    ],\n    { ordered: false }\n  );\n} catch (error) {\n  console.log(\"Bulk write encountered errors, but non-failing docs were inserted.\");\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Atomic Read-and-Modify: findOneAndUpdate() vs updateOne()",
    "question": "When should you use findOneAndUpdate() instead of updateOne(), and how does returnDocument control the result?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "findandmodify",
      "findoneandupdate",
      "atomicity"
    ],
    "interviewAnswer": "Use findOneAndUpdate() when you need to atomically modify a document and immediately inspect its state (e.g. reserving inventory, decrementing credits, or claiming a task). updateOne() only returns acknowledgment metrics (matchedCount, modifiedCount), requiring a separate read that is vulnerable to race conditions.",
    "answer": "In high-concurrency systems, checking a state and then updating it introduces race conditions. `findOneAndUpdate()` combines the find and update into an atomic operation under a single document write lock. The `returnDocument` option controls the return payload: `returnDocument: \"before\"` (default) returns the document prior to modification; `returnDocument: \"after\"` returns the updated document reflecting the changes.",
    "explanation": "In older MongoDB driver versions, `returnNewDocument: true` or `new: true` was used. Modern drivers standardized on `returnDocument: \"after\"`.",
    "importantPoints": [
      "Atomically finds and updates in a single operation under a single write lock.",
      "Prevents race conditions in balance decrements and task queue workers.",
      "returnDocument: \"before\" returns original document; \"after\" returns modified document.",
      "Supports upsert and projection options."
    ],
    "commonMistakes": [
      "Running findOne() followed by updateOne(), creating race condition windows.",
      "Expecting updateOne() to return the updated document object.",
      "Forgetting that findOneAndUpdate returns null if no document matched the filter."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Atomic Queue Worker Claiming a Task",
        "code": "const claimedTask = db.tasks.findOneAndUpdate(\n  { status: \"PENDING\" },\n  {\n    $set: {\n      status: \"PROCESSING\",\n      claimedBy: workerId,\n      claimedAt: new Date()\n    }\n  },\n  {\n    sort: { priority: -1, createdAt: 1 }, // Grab highest priority task\n    returnDocument: \"after\"               // Return task ready to execute!\n  }\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Array Update Operators: $push, $addToSet, $pull, and $pop",
    "question": "Explain the distinct functions of array update operators: $push, $addToSet, $pull, and $pop.",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "tags": [
      "mongodb",
      "crud",
      "arrays",
      "update-operators"
    ],
    "interviewAnswer": "$push appends an element to an array (allowing duplicates). $addToSet appends an element only if it does not already exist in the array (set semantics). $pull removes all instances matching a specified value or condition. $pop removes either the first element (-1) or the last element (1) of the array.",
    "answer": "Array manipulation operators allow atomic modifications without fetching and rewriting the entire array: 1) `$push`: Appends values to the array. Can be combined with `$each`, `$slice`, and `$sort`. 2) `$addToSet`: Treats array as a mathematical set; ignores the insert if the item already exists. 3) `$pull`: Evaluates a condition and removes all matching elements. 4) `$pop`: Removes the first element (`{ $pop: { array: -1 } }`) or the last element (`{ $pop: { array: 1 } }`).",
    "importantPoints": [
      "$push allows duplicate elements; $addToSet enforces uniqueness.",
      "$pull accepts complex conditions to remove matching subdocuments.",
      "$pop only removes from extremities (1 for last, -1 for first).",
      "Atomic execution prevents concurrent array update overwrite collisions."
    ],
    "commonMistakes": [
      "Using $push when set uniqueness is required, leading to duplicate tags.",
      "Passing an array to $push without $each, causing the entire array to be inserted as a single nested array element.",
      "Using $pull expecting it to remove only the first match (it removes all matching elements)."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Array Update Operations",
        "code": "// Add unique tag:\ndb.articles.updateOne({ _id: id }, { $addToSet: { tags: \"mongodb\" } });\n\n// Append multiple comments and cap at 100:\ndb.articles.updateOne({ _id: id }, {\n  $push: {\n    comments: {\n      $each: [ newComment ],\n      $slice: -100\n    }\n  }\n});\n\n// Remove all inactive tags:\ndb.articles.updateOne({ _id: id }, { $pull: { tags: \"deprecated\" } });"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Positional Array Operators: $, $[], and $[<identifier>]",
    "question": "How do the array positional update operators $, $[], and $[<identifier>] differ in MongoDB?",
    "difficulty": "hard",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "positional-operator",
      "array-updates",
      "arrayfilters"
    ],
    "interviewAnswer": "$ updates the FIRST array element that matched the query filter. $[] updates ALL elements in the array unconditionally. $[<identifier>] (filtered positional operator) updates all array elements matching specific conditions defined in the arrayFilters option.",
    "answer": "Updating elements inside nested arrays: 1) Positional `$`: References the index of the first array element matched by the query predicate: `db.coll.updateOne({ \"grades.grade\": \"F\" }, { $set: { \"grades.$.retake\": true } })`. 2) All Positional `$[]`: Applies modifications to every item in the array: `$inc: { \"scores.$[]\": 5 }` increases all scores by 5. 3) Filtered Positional `$[<elem>]`: Allows targeted conditional updates on multiple matching elements via `arrayFilters`: `$set: { \"items.$[elem].price\": 10 }` where `arrayFilters: [{ \"elem.category\": \"clearance\" }]`.",
    "explanation": "Prior to MongoDB 3.6 (which introduced `arrayFilters`), updating multiple specific array elements in a document required an aggregation pipeline rewrite or client-side iteration.",
    "importantPoints": [
      "$: Updates first matching element from the query filter.",
      "$[]: Updates all elements in the array.",
      "$[elem]: Updates matching elements specified in arrayFilters.",
      "arrayFilters allows updating complex nested subdocument arrays."
    ],
    "commonMistakes": [
      "Using $ expecting it to update all matching array elements (it only modifies the first match).",
      "Forgetting the arrayFilters option when using $[identifier]."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Filtered Positional Operator $[elem] with arrayFilters",
        "code": "// Increase prices by 10% only for items in \"electronics\" category:\ndb.stores.updateMany(\n  { storeId: \"NYC-01\" },\n  {\n    $mul: { \"inventory.$[elem].price\": 1.10 }\n  },\n  {\n    arrayFilters: [\n      { \"elem.category\": \"electronics\", \"elem.price\": { $lt: 500 } }\n    ]\n  }\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Upsert Mechanics and the $setOnInsert Operator",
    "question": "How does an upsert operation work in MongoDB, and what is the role of the $setOnInsert operator?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "junior",
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "upsert",
      "setoninsert",
      "concurrency"
    ],
    "interviewAnswer": "An upsert updates the document if it exists, or inserts a new document if no match is found. $setOnInsert specifies fields that should be written ONLY when an insert occurs; if the operation updates an existing document, $setOnInsert fields are completely ignored.",
    "answer": "In `updateOne(filter, update, { upsert: true })`: If a document matches `filter`, MongoDB applies the standard update operators (`$set`, `$inc`). If no document matches, MongoDB creates a new document combining the filter fields, the update fields, and any fields defined inside `$setOnInsert`. `$setOnInsert` is ideal for setting initialization metadata like `createdAt` or initial counter states without overwriting existing data during subsequent updates.",
    "explanation": "Always ensure unique indexes protect upsert keys to prevent duplicate creation race conditions under concurrent workloads.",
    "importantPoints": [
      "upsert: true creates a document if no match exists.",
      "$setOnInsert applies ONLY during creation; ignored during updates.",
      "Ideal for immutable creation metadata (createdAt, initialBalance).",
      "Requires a unique index on the filter field to prevent concurrent duplicate inserts."
    ],
    "commonMistakes": [
      "Using $set for createdAt in an upsert, which resets the creation date on every subsequent update.",
      "Expecting $setOnInsert to execute when an existing document is updated."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Using $setOnInsert in an Upsert Operation",
        "code": "db.userStats.updateOne(\n  { userId: \"USER-101\" },\n  {\n    $inc: { loginCount: 1 },\n    $set: { lastLogin: new Date() },\n    $setOnInsert: {\n      accountCreated: new Date(),\n      initialTier: \"FREE\" // Only set when document is FIRST created!\n    }\n  },\n  { upsert: true }\n);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Field Update Operators: $set, $unset, $inc, and $mul",
    "question": "How do atomic numerical update operators $inc and $mul operate in MongoDB?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "inc",
      "mul",
      "atomic-updates"
    ],
    "interviewAnswer": "$inc increments (or decrements with negative numbers) a numeric field by a specified value. $mul multiplies a numeric field by a specified factor. If the field does not exist, $inc initializes it to the value and $mul initializes it to 0.",
    "answer": "To increment: `{ $inc: { viewCount: 1, points: -10 } }`. To multiply: `{ $mul: { price: 1.05 } }`. Both execute atomically without requiring a read-modify-write cycle, preventing lost updates in high-concurrency environments.",
    "explanation": "To increment: `{ $inc: { viewCount: 1, points: -10 } }`. To multiply: `{ $mul: { price: 1.05 } }`. Both execute atomically without requiring a read-modify-write cycle, preventing lost updates in high-concurrency environments.",
    "importantPoints": [
      "$inc handles both increments and decrements (negative values).",
      "$mul multiplies by factor.",
      "Atomic execution eliminates race conditions."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Field Update Operators: $set, $unset, $inc, and $mul",
        "code": "// Example demonstration for: Field Update Operators: $set, $unset, $inc, and $mul\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "$min and $max Update Operators",
    "question": "What is the purpose of the $min and $max update operators in MongoDB?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "min",
      "max",
      "update-operators"
    ],
    "interviewAnswer": "$min updates the field only if the specified value is LESS THAN the existing value. $max updates the field only if the specified value is GREATER THAN the existing value.",
    "answer": "`{ $max: { highScore: newScore } }` updates highScore only if newScore exceeds the current stored score. `{ $min: { lowestPrice: quote } }` updates lowestPrice only if quote is lower. Both avoid client-side conditional checks.",
    "explanation": "`{ $max: { highScore: newScore } }` updates highScore only if newScore exceeds the current stored score. `{ $min: { lowestPrice: quote } }` updates lowestPrice only if quote is lower. Both avoid client-side conditional checks.",
    "importantPoints": [
      "$min sets field only if new value < current value.",
      "$max sets field only if new value > current value.",
      "Executes atomically."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "$min and $max Update Operators",
        "code": "// Example demonstration for: $min and $max Update Operators\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "BulkWrite API: Supported Operation Types",
    "question": "What operation types are supported by the bulkWrite() method in MongoDB?",
    "difficulty": "medium",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "bulkwrite",
      "batch-operations"
    ],
    "interviewAnswer": "bulkWrite() supports: insertOne, updateOne, updateMany, deleteOne, deleteMany, and replaceOne within a single network batch call.",
    "answer": "Instead of sending individual network requests, `db.collection.bulkWrite([...])` bundles heterogeneous operations into a single round trip. It dramatically reduces network overhead during ETL pipelines and message queue batch processing.",
    "explanation": "Instead of sending individual network requests, `db.collection.bulkWrite([...])` bundles heterogeneous operations into a single round trip. It dramatically reduces network overhead during ETL pipelines and message queue batch processing.",
    "importantPoints": [
      "Bundles multiple insert, update, replace, and delete operations.",
      "Reduces client-server network latency.",
      "Supports ordered: true and ordered: false."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "BulkWrite API: Supported Operation Types",
        "code": "// Example demonstration for: BulkWrite API: Supported Operation Types\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Cursor Methods: limit(), skip(), and sort() Execution Order",
    "question": "In what order does MongoDB execute sort(), skip(), and limit() on a cursor, regardless of chained query syntax?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "cursor",
      "sort",
      "skip",
      "limit"
    ],
    "interviewAnswer": "Regardless of the order chained in client code (e.g. .limit(10).skip(20).sort({ date: -1 })), MongoDB ALWAYS executes in the order: 1) SORT, 2) SKIP, 3) LIMIT.",
    "answer": "MongoDB optimizes cursor pipelines: it sorts the entire candidate result set first, skips the designated number of records, and returns the requested limit slice. Chaining order in driver syntax has zero effect on the server-side execution sequence.",
    "explanation": "MongoDB optimizes cursor pipelines: it sorts the entire candidate result set first, skips the designated number of records, and returns the requested limit slice. Chaining order in driver syntax has zero effect on the server-side execution sequence.",
    "importantPoints": [
      "Always executes in order: SORT -> SKIP -> LIMIT.",
      "Chaining order in JavaScript code does not alter execution sequence."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Cursor Methods: limit(), skip(), and sort() Execution Order",
        "code": "// Example demonstration for: Cursor Methods: limit(), skip(), and sort() Execution Order\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Deep Pagination with skip() and Cursor Degradation",
    "question": "Why is .skip(500000).limit(20) slow in MongoDB, and what is the performant alternative?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "pagination",
      "skip",
      "performance"
    ],
    "interviewAnswer": "skip(N) forces the engine to iterate and discard N documents in memory or index pages. For N=500,000, it performs 500,020 seeks. The performant alternative is Range/Cursor-based pagination (WHERE _id > last_seen_id).",
    "answer": "As skip offset grows, response latency degrades linearly O(N). Range pagination (Keyset pagination) filters on the indexed sort key: `find({ createdAt: { $lt: lastDate } }).sort({ createdAt: -1 }).limit(20)`. The B-Tree seeks directly to the target point in O(log N).",
    "explanation": "As skip offset grows, response latency degrades linearly O(N). Range pagination (Keyset pagination) filters on the indexed sort key: `find({ createdAt: { $lt: lastDate } }).sort({ createdAt: -1 }).limit(20)`. The B-Tree seeks directly to the target point in O(log N).",
    "importantPoints": [
      "skip(N) reads and discards N documents, causing O(N) degradation.",
      "Keyset/Range pagination maintains constant O(log N) latency."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Deep Pagination with skip() and Cursor Degradation",
        "code": "// Example demonstration for: Deep Pagination with skip() and Cursor Degradation\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "ReplaceOne() vs UpdateOne() with $set",
    "question": "What is the critical structural difference between replaceOne() and updateOne()?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "replaceone",
      "updateone"
    ],
    "interviewAnswer": "replaceOne() replaces the entire document with the new document payload (except _id). updateOne() applies targeted field update operators ($set, $inc) modifying specific fields while preserving all other existing fields.",
    "answer": "If a document has 20 fields and you call `replaceOne({ _id }, { name: \"Alice\" })`, the entire document is replaced with `{ _id, name: \"Alice\" }`, deleting all other 19 fields! `updateOne({ _id }, { $set: { name: \"Alice\" } })` modifies only the name attribute.",
    "explanation": "If a document has 20 fields and you call `replaceOne({ _id }, { name: \"Alice\" })`, the entire document is replaced with `{ _id, name: \"Alice\" }`, deleting all other 19 fields! `updateOne({ _id }, { $set: { name: \"Alice\" } })` modifies only the name attribute.",
    "importantPoints": [
      "replaceOne replaces entire document (deletes unspecified fields).",
      "updateOne modifies designated fields in-place via operators.",
      "_id cannot be overwritten in either operation."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "ReplaceOne() vs UpdateOne() with $set",
        "code": "// Example demonstration for: ReplaceOne() vs UpdateOne() with $set\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Deleting Documents: deleteOne() vs deleteMany()",
    "question": "How do deleteOne() and deleteMany() handle query filters matching multiple documents?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "delete",
      "deleteone",
      "deletemany"
    ],
    "interviewAnswer": "deleteOne() deletes the first document encountered that matches the filter (based on storage order or sort). deleteMany() deletes ALL documents matching the filter.",
    "answer": "If 100 documents match `{ status: \"EXPIRED\" }`, `deleteOne()` removes only 1 document and returns `{ deletedCount: 1 }`. `deleteMany()` removes all 100 matching documents. If no documents match, both succeed and return `{ deletedCount: 0 }`.",
    "explanation": "If 100 documents match `{ status: \"EXPIRED\" }`, `deleteOne()` removes only 1 document and returns `{ deletedCount: 1 }`. `deleteMany()` removes all 100 matching documents. If no documents match, both succeed and return `{ deletedCount: 0 }`.",
    "importantPoints": [
      "deleteOne removes first matching document only.",
      "deleteMany removes all matching documents.",
      "Both return deletedCount."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Deleting Documents: deleteOne() vs deleteMany()",
        "code": "// Example demonstration for: Deleting Documents: deleteOne() vs deleteMany()\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "The $currentDate Operator",
    "question": "How does the $currentDate update operator work, and what types does it support?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "currentdate",
      "timestamp",
      "date"
    ],
    "interviewAnswer": "$currentDate sets the field to the current server timestamp. It supports either BSON Date (default) or BSON Timestamp ($type: \"timestamp\").",
    "answer": "`{ $currentDate: { lastModified: true, oplogTime: { $type: \"timestamp\" } } }`. Using `$currentDate` ensures timestamps are generated by the MongoDB server clock, preventing client clock drift inconsistencies.",
    "explanation": "`{ $currentDate: { lastModified: true, oplogTime: { $type: \"timestamp\" } } }`. Using `$currentDate` ensures timestamps are generated by the MongoDB server clock, preventing client clock drift inconsistencies.",
    "importantPoints": [
      "Sets field to current server time.",
      "Avoids client system clock drift.",
      "Supports BSON Date and BSON Timestamp."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $currentDate Operator",
        "code": "// Example demonstration for: The $currentDate Operator\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Updating with an Aggregation Pipeline (MongoDB 4.2+)",
    "question": "How do pipeline updates in updateOne() allow updating a field based on the value of another field in the same document?",
    "difficulty": "hard",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "pipeline-updates",
      "aggregation"
    ],
    "interviewAnswer": "Pass an aggregation pipeline array instead of an update document: db.coll.updateOne({ _id }, [{ $set: { fullName: { $concat: [\"$firstName\", \" \", \"$lastName\"] } } }]). This allows referencing existing document fields during update.",
    "answer": "Standard update operators (`$set`) cannot reference other document fields (e.g. set total = price * quantity). MongoDB 4.2+ allows passing an array `[{ $set: { total: { $multiply: [\"$price\", \"$quantity\"] } } }]` to compute new field values dynamically from existing document fields in a single atomic write.",
    "explanation": "Standard update operators (`$set`) cannot reference other document fields (e.g. set total = price * quantity). MongoDB 4.2+ allows passing an array `[{ $set: { total: { $multiply: [\"$price\", \"$quantity\"] } } }]` to compute new field values dynamically from existing document fields in a single atomic write.",
    "importantPoints": [
      "Pass an array of stages ([$set, $project, $replaceRoot]) to update.",
      "Enables referencing existing document fields during write.",
      "Eliminates read-modify-write application loops."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Updating with an Aggregation Pipeline (MongoDB 4.2+)",
        "code": "// Example demonstration for: Updating with an Aggregation Pipeline (MongoDB 4.2+)\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "The $rename Operator and Embedded Paths",
    "question": "How does $rename work, and can it move fields into or out of embedded subdocuments?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "rename",
      "schema-evolution"
    ],
    "interviewAnswer": "$rename atomically renames a field. It CAN move fields into or out of embedded subdocuments using dot notation (e.g. $rename: { \"old_city\": \"address.city\" }).",
    "answer": "`db.users.updateMany({}, { $rename: { \"fname\": \"firstName\", \"phone\": \"contact.primaryPhone\" } })`. If the target field already exists, `$rename` drops the target field and renames. If source field does not exist, no action is taken.",
    "explanation": "`db.users.updateMany({}, { $rename: { \"fname\": \"firstName\", \"phone\": \"contact.primaryPhone\" } })`. If the target field already exists, `$rename` drops the target field and renames. If source field does not exist, no action is taken.",
    "importantPoints": [
      "Atomically renames document keys.",
      "Dot notation moves fields into/out of subdocuments.",
      "Drops target field if it already exists before renaming."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The $rename Operator and Embedded Paths",
        "code": "// Example demonstration for: The $rename Operator and Embedded Paths\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Cursor Isolation and the noCursorTimeout Option",
    "question": "What is the danger of setting noCursorTimeout: true on long-running query cursors?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "cursor",
      "memory-leaks",
      "timeout"
    ],
    "interviewAnswer": "Default cursors time out after 10 minutes of inactivity. Setting noCursorTimeout: true leaves server cursor resources and memory pins open indefinitely. If the client crashes or fails to exhaust the cursor, the cursor leaks on the database server until restart.",
    "answer": "Cursors pin server memory and WiredTiger read views. If `noCursorTimeout` is used for long batch processing, the application MUST explicitly close the cursor in a `finally` block (`cursor.close()`). Otherwise, leaked cursors accumulate, leading to server memory exhaustion.",
    "explanation": "Cursors pin server memory and WiredTiger read views. If `noCursorTimeout` is used for long batch processing, the application MUST explicitly close the cursor in a `finally` block (`cursor.close()`). Otherwise, leaked cursors accumulate, leading to server memory exhaustion.",
    "importantPoints": [
      "Default cursor timeout is 10 minutes.",
      "noCursorTimeout prevents timeout on slow batch processing.",
      "Must be manually closed to prevent server memory leaks."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Cursor Isolation and the noCursorTimeout Option",
        "code": "// Example demonstration for: Cursor Isolation and the noCursorTimeout Option\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Collation in Find Queries",
    "question": "How do you execute a case-insensitive find query using collation in MongoDB?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "collation",
      "case-insensitive"
    ],
    "interviewAnswer": "db.users.find({ username: \"alex\" }).collation({ locale: \"en\", strength: 2 }); This matches \"Alex\", \"ALEX\", and \"alex\" using index seeks if a matching collation index exists.",
    "answer": "Instead of slow regex `find({ username: /^alex$/i })`, applying `.collation({ locale: \"en\", strength: 2 })` allows the query planner to use an index built with that exact collation, executing at full B-Tree seek speeds.",
    "explanation": "Instead of slow regex `find({ username: /^alex$/i })`, applying `.collation({ locale: \"en\", strength: 2 })` allows the query planner to use an index built with that exact collation, executing at full B-Tree seek speeds.",
    "importantPoints": [
      "Matches case-insensitively without full table scan regex.",
      "strength 2 ignores case.",
      "Utilizes matching collation index for fast lookups."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Collation in Find Queries",
        "code": "// Example demonstration for: Collation in Find Queries\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Atomic Counter Pattern with $inc",
    "question": "How do you implement an atomic sequential order number generator in MongoDB without transactions?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "atomic-counter",
      "findandmodify",
      "inc"
    ],
    "interviewAnswer": "Use findOneAndUpdate on a counters collection: db.counters.findOneAndUpdate({ _id: \"orderId\" }, { $inc: { seq: 1 } }, { returnDocument: \"after\", upsert: true }).seq; It guarantees unique monotonic sequential numbers atomically.",
    "answer": "Single-document atomicity ensures that multiple concurrent threads calling `findOneAndUpdate` with `$inc: { seq: 1 }` will each receive a unique, strictly incrementing integer without collisions, deadlocks, or multi-document transaction overhead.",
    "explanation": "Single-document atomicity ensures that multiple concurrent threads calling `findOneAndUpdate` with `$inc: { seq: 1 }` will each receive a unique, strictly incrementing integer without collisions, deadlocks, or multi-document transaction overhead.",
    "importantPoints": [
      "Generates unique sequential numbers atomically.",
      "Guarantees zero duplicate sequence IDs under high concurrency.",
      "ReturnDocument: \"after\" yields the newly incremented value."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Atomic Counter Pattern with $inc",
        "code": "// Example demonstration for: Atomic Counter Pattern with $inc\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Removing Elements from Array by Value: $pull vs $pullAll",
    "question": "What is the difference between $pull and $pullAll in MongoDB array updates?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "pull",
      "pullall",
      "arrays"
    ],
    "interviewAnswer": "$pull removes all elements matching a value or condition (e.g. score < 50). $pullAll removes elements that match a list of literal values ($pullAll: { tags: [\"draft\", \"pending\"] }).",
    "answer": "`$pullAll` takes an array of exact literal values to remove: `{ $pullAll: { scores: [0, 5] } }`. `$pull` is more expressive: it accepts logical query operators like `{ $pull: { scores: { $lt: 60 } } }` or subdocument matches.",
    "explanation": "`$pullAll` takes an array of exact literal values to remove: `{ $pullAll: { scores: [0, 5] } }`. `$pull` is more expressive: it accepts logical query operators like `{ $pull: { scores: { $lt: 60 } } }` or subdocument matches.",
    "importantPoints": [
      "$pullAll removes exact literal values.",
      "$pull supports query operators and conditional predicates.",
      "Both remove all matching instances from the array."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Removing Elements from Array by Value: $pull vs $pullAll",
        "code": "// Example demonstration for: Removing Elements from Array by Value: $pull vs $pullAll\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Insert Duplication: Handling Error Code 11000",
    "question": "How should applications handle MongoDB driver Error Code 11000 during write operations?",
    "difficulty": "easy",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "duplicate-key",
      "error-11000",
      "unique-index"
    ],
    "interviewAnswer": "Error 11000 indicates an E11000 duplicate key exception from a UNIQUE index. The application should catch error.code === 11000, parse the duplicated key, and return an HTTP 409 Conflict or 400 Bad Request to the user.",
    "answer": "When a unique index constraint is violated (e.g. email already exists), MongoDB throws `MongoServerError: E11000 duplicate key error`. Applications should catch this specifically, distinguish it from transient network errors, and avoid retrying blind inserts.",
    "explanation": "When a unique index constraint is violated (e.g. email already exists), MongoDB throws `MongoServerError: E11000 duplicate key error`. Applications should catch this specifically, distinguish it from transient network errors, and avoid retrying blind inserts.",
    "importantPoints": [
      "E11000 indicates a UNIQUE index constraint violation.",
      "Application should return 409 Conflict.",
      "Do not retry blind inserts; fetch existing record or notify client."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Insert Duplication: Handling Error Code 11000",
        "code": "// Example demonstration for: Insert Duplication: Handling Error Code 11000\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Updating Subdocuments Inside Arrays by Query Match ($)",
    "question": "How do you update a specific field in a matched subdocument within an array using $?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "positional-operator",
      "arrays"
    ],
    "interviewAnswer": "Match the array element in the query filter and reference it with $ in the update: db.orders.updateOne({ _id: orderId, \"items.productId\": 101 }, { $set: { \"items.$.status\": \"SHIPPED\" } });",
    "answer": "The positional `$` operator identifies the index of the first array item that satisfied the query condition. It allows updating fields inside that specific array element without needing to know its numeric index ahead of time.",
    "explanation": "The positional `$` operator identifies the index of the first array item that satisfied the query condition. It allows updating fields inside that specific array element without needing to know its numeric index ahead of time.",
    "importantPoints": [
      "Query filter must include the array field.",
      "$ represents the index of the first matched array element.",
      "Updates nested fields inside that element."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Updating Subdocuments Inside Arrays by Query Match ($)",
        "code": "// Example demonstration for: Updating Subdocuments Inside Arrays by Query Match ($)\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Returning Document Fields with findOneAndReplace()",
    "question": "What is findOneAndReplace() and how does it differ from findOneAndUpdate()?",
    "difficulty": "easy",
    "questionType": "Comparison",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "findoneandreplace",
      "findoneandupdate"
    ],
    "interviewAnswer": "findOneAndUpdate modifies specified fields via update operators ($set). findOneAndReplace replaces the entire document payload with a new document while preserving the original _id, returning the document atomically.",
    "answer": "`findOneAndReplace(filter, replacement, options)` atomically replaces the document content with `replacement` (which cannot contain update operators). It supports `returnDocument: \"before\" | \"after\"` and `upsert: true`.",
    "explanation": "`findOneAndReplace(filter, replacement, options)` atomically replaces the document content with `replacement` (which cannot contain update operators). It supports `returnDocument: \"before\" | \"after\"` and `upsert: true`.",
    "importantPoints": [
      "Replaces entire document payload atomically.",
      "Replacement document cannot use $set/$inc operators.",
      "Preserves original _id."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Returning Document Fields with findOneAndReplace()",
        "code": "// Example demonstration for: Returning Document Fields with findOneAndReplace()\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "The countDocuments() vs estimatedDocumentCount() Methods",
    "question": "Why should you use estimatedDocumentCount() instead of countDocuments() for total collection counts?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "count",
      "estimateddocumentcount",
      "performance"
    ],
    "interviewAnswer": "estimatedDocumentCount() reads collection metadata directly, returning instantaneous O(1) counts. countDocuments() executes an aggregation pipeline ($collStats or collection scan) checking filters and active transaction visibility, which is slow on large collections.",
    "answer": "On a 50-million document collection, `countDocuments({})` scans an index to verify row visibility, taking seconds. `estimatedDocumentCount()` reads metadata metrics in microseconds. If you need filtered counts (`{ status: \"ACTIVE\" }`), you must use `countDocuments()`.",
    "explanation": "On a 50-million document collection, `countDocuments({})` scans an index to verify row visibility, taking seconds. `estimatedDocumentCount()` reads metadata metrics in microseconds. If you need filtered counts (`{ status: \"ACTIVE\" }`), you must use `countDocuments()`.",
    "importantPoints": [
      "estimatedDocumentCount() is O(1) metadata lookup (cannot take filters).",
      "countDocuments() takes query filters but is slower on large collections.",
      "Use estimatedDocumentCount for UI pagination and total metrics."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The countDocuments() vs estimatedDocumentCount() Methods",
        "code": "// Example demonstration for: The countDocuments() vs estimatedDocumentCount() Methods\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Read Preference: nearest Mode for Distributed Clusters",
    "question": "What is the read preference mode \"nearest\", and when is it appropriate?",
    "difficulty": "medium",
    "questionType": "Architecture",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "read-preference",
      "nearest",
      "geodistributed",
      "latency"
    ],
    "interviewAnswer": "nearest routes read requests to the replica set member with the lowest network round-trip ping time, regardless of whether it is a Primary or Secondary. It minimizes network latency for geo-distributed multi-region applications.",
    "answer": "In global multi-region deployments, clients in London query the nearest European secondary, while clients in New York query the American secondary. This cuts cross-Atlantic latency. Trade-off: reads from secondaries can return slightly stale data.",
    "explanation": "In global multi-region deployments, clients in London query the nearest European secondary, while clients in New York query the American secondary. This cuts cross-Atlantic latency. Trade-off: reads from secondaries can return slightly stale data.",
    "importantPoints": [
      "Measures network ping latency to all replica set members.",
      "Routes read to the closest node.",
      "Minimizes latency for global read-heavy architectures."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Read Preference: nearest Mode for Distributed Clusters",
        "code": "// Example demonstration for: Read Preference: nearest Mode for Distributed Clusters\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Array Push Modifiers: $each, $sort, and $slice",
    "question": "How do you push multiple items to an array, sort them, and keep only the top 10 elements in a single operation?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "push",
      "each",
      "sort",
      "slice"
    ],
    "interviewAnswer": "Combine $each with $sort and $slice inside $push: { $push: { scores: { $each: [88, 95], $sort: -1, $slice: 10 } } }",
    "answer": "MongoDB allows chaining modifiers inside a `$push`: 1) `$each` supplies multiple items; 2) `$sort: -1` sorts all elements descending; 3) `$slice: 10` retains only the top 10 elements, discarding the rest. Executes atomically in a single write.",
    "explanation": "MongoDB allows chaining modifiers inside a `$push`: 1) `$each` supplies multiple items; 2) `$sort: -1` sorts all elements descending; 3) `$slice: 10` retains only the top 10 elements, discarding the rest. Executes atomically in a single write.",
    "importantPoints": [
      "$each appends multiple values.",
      "$sort sorts the combined array.",
      "$slice caps the final array length.",
      "Maintains bounded top-N leaderboards in a single document."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Array Push Modifiers: $each, $sort, and $slice",
        "code": "// Example demonstration for: Array Push Modifiers: $each, $sort, and $slice\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Find Queries with Regular Expressions ($regex)",
    "question": "Why are unanchored regex queries slow, and how does prefix anchoring enable index usage?",
    "difficulty": "medium",
    "questionType": "Optimization",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "regex",
      "indexes",
      "performance"
    ],
    "interviewAnswer": "Unanchored regex ($regex: /pattern/) or leading wildcards cannot use B-Tree root navigation, forcing a full index or collection scan. Prefix-anchored regex ($regex: /^pattern/) starts with a fixed string, allowing B-Tree index range scans.",
    "answer": "`find({ name: /^Smith/ })` is an index range scan from \"Smith\" to \"Smiti\". `find({ name: /Smith/ })` must evaluate the regex against every string in the collection. For arbitrary substring search, use Atlas Search or text indexes instead.",
    "explanation": "`find({ name: /^Smith/ })` is an index range scan from \"Smith\" to \"Smiti\". `find({ name: /Smith/ })` must evaluate the regex against every string in the collection. For arbitrary substring search, use Atlas Search or text indexes instead.",
    "importantPoints": [
      "^prefix regex uses B-Tree index range scan.",
      "Unanchored /pattern/ forces full collection/index scan.",
      "Case-insensitive flag \"i\" disables standard index range scans (use Collation instead)."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Find Queries with Regular Expressions ($regex)",
        "code": "// Example demonstration for: Find Queries with Regular Expressions ($regex)\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Bulk Deletes and Write Locks",
    "question": "What are the performance implications of running deleteMany({}) on 5 million documents during peak hours?",
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "deletemany",
      "locks",
      "production-safety"
    ],
    "interviewAnswer": "Deleting 5M rows generates massive oplog entries, causes high WiredTiger cache eviction pressure, triggers secondary replication lag, and holds write locks that block concurrent transactions. You should batch deletes in chunks of 5,000 with sleep intervals.",
    "answer": "A single massive `deleteMany` command overwhelms the cluster: 5 million oplog events flood secondaries, replication lag spikes, and read queries on secondaries time out. The safe production pattern is a looping script: `deleteMany({ status: \"OLD\" }, { limit: 5000 })` with a 200ms delay between batches.",
    "explanation": "A single massive `deleteMany` command overwhelms the cluster: 5 million oplog events flood secondaries, replication lag spikes, and read queries on secondaries time out. The safe production pattern is a looping script: `deleteMany({ status: \"OLD\" }, { limit: 5000 })` with a 200ms delay between batches.",
    "importantPoints": [
      "Massive deleteMany causes replication lag and cache eviction.",
      "Floods the Oplog and stresses disk I/O.",
      "Batch deletes in chunks of 1,000-5,000 to maintain system responsiveness."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Bulk Deletes and Write Locks",
        "code": "// Example demonstration for: Bulk Deletes and Write Locks\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Projecting First Matched Array Element ($)",
    "question": "How do you use the positional projection operator $ to return only the single array element that matched your query?",
    "difficulty": "medium",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "projection",
      "positional-operator",
      "arrays"
    ],
    "interviewAnswer": "Include the array field with $ in projection: db.students.find({ \"grades.subject\": \"Math\" }, { \"grades.$\": 1 }). It returns only the specific Math grade element rather than all 20 grades in the array.",
    "answer": "In documents with large arrays, returning the entire array when only one item was matched wastes network bandwidth. The `$` projection operator (`{ \"grades.$\": 1 }`) slices the array to return only the first element matching the query filter.",
    "explanation": "In documents with large arrays, returning the entire array when only one item was matched wastes network bandwidth. The `$` projection operator (`{ \"grades.$\": 1 }`) slices the array to return only the first element matching the query filter.",
    "importantPoints": [
      "Returns only the array element matching the query predicate.",
      "Query must include the array field.",
      "Reduces client memory and network bandwidth."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Projecting First Matched Array Element ($)",
        "code": "// Example demonstration for: Projecting First Matched Array Element ($)\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "The replaceOne() Safe Upsert Pattern",
    "question": "How do you completely replace a document if it exists, or insert it if it does not, while preserving _id?",
    "difficulty": "easy",
    "questionType": "Coding",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "replaceone",
      "upsert"
    ],
    "interviewAnswer": "db.configs.replaceOne({ key: \"APP_SETTINGS\" }, { key: \"APP_SETTINGS\", theme: \"dark\", maxUsers: 100 }, { upsert: true });",
    "answer": "`replaceOne` with `{ upsert: true }` guarantees that the document is completely replaced by the new state. If it does not exist, MongoDB generates a new `_id` and inserts the replacement document.",
    "explanation": "`replaceOne` with `{ upsert: true }` guarantees that the document is completely replaced by the new state. If it does not exist, MongoDB generates a new `_id` and inserts the replacement document.",
    "importantPoints": [
      "Guarantees exact document structure match.",
      "Upsert creates document if missing.",
      "_id is preserved if document already existed."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The replaceOne() Safe Upsert Pattern",
        "code": "// Example demonstration for: The replaceOne() Safe Upsert Pattern\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "mongodb",
    "topicSlug": "crud",
    "title": "Driver Write Result Metrics: matchedCount, modifiedCount, and upsertedId",
    "question": "What is the difference between matchedCount and modifiedCount in a MongoDB UpdateResult?",
    "difficulty": "easy",
    "questionType": "Conceptual",
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "tags": [
      "mongodb",
      "crud",
      "updateresult",
      "driver"
    ],
    "interviewAnswer": "matchedCount is the number of documents matching the query filter. modifiedCount is the number of documents whose values actually CHANGED on disk. If an update sets a field to its existing value, matchedCount is 1 but modifiedCount is 0.",
    "answer": "MongoDB avoids unnecessary disk I/O: if `status` is already \"ACTIVE\", running `$set: { status: \"ACTIVE\" }` matches the document, but WiredTiger skips writing to disk. Thus, `matchedCount = 1` and `modifiedCount = 0`. Applications should check `matchedCount > 0` to confirm document existence.",
    "explanation": "MongoDB avoids unnecessary disk I/O: if `status` is already \"ACTIVE\", running `$set: { status: \"ACTIVE\" }` matches the document, but WiredTiger skips writing to disk. Thus, `matchedCount = 1` and `modifiedCount = 0`. Applications should check `matchedCount > 0` to confirm document existence.",
    "importantPoints": [
      "matchedCount: Documents matching filter.",
      "modifiedCount: Documents physically altered on disk.",
      "WiredTiger skips writes when values are identical."
    ],
    "commonMistakes": [
      "Neglecting concurrency race conditions or confusing array operators."
    ],
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Driver Write Result Metrics: matchedCount, modifiedCount, and upsertedId",
        "code": "// Example demonstration for: Driver Write Result Metrics: matchedCount, modifiedCount, and upsertedId\ndb.collection.find();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
