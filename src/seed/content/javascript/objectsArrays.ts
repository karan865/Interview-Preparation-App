import { SeedQuestion } from '../types';

export const javascriptObjectsArraysQuestions: SeedQuestion[] = [
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the difference between shallow copy and deep copy in JavaScript, and what are the limitations of JSON.parse(JSON.stringify(obj))?",
    "answer": "A shallow copy copies only top-level properties; nested objects/arrays share the same memory reference as the original. A deep copy recursively duplicates all nested structures. JSON.parse(JSON.stringify(obj)) fails on deep copies because: 1) It throws on circular references, 2) It converts Date objects to ISO strings, 3) It omits functions, undefined, and Symbols, and 4) It converts NaN and Infinity to null. The modern standard is structuredClone(obj).",
    "explanation": "structuredClone is a native browser and Node.js API that handles circular references, Dates, Sets, Maps, and TypedArrays safely.",
    "interviewAnswer": "A shallow copy copies only top-level properties; nested objects/arrays share the same memory reference as the original. A deep copy recursively duplicates all nested structures. JSON.parse(JSON.stringify(obj)) fails on deep copies because: 1) It throws on circular references, 2) It converts Date objects to ISO strings, 3) It omits functions, undefined, and Symbols, and 4) It converts NaN and Infinity to null. The modern standard is structuredClone(obj). structuredClone is a native browser and Node.js API that handles circular references, Dates, Sets, Maps, and TypedArrays safely.",
    "importantPoints": [
      "A shallow copy copies only top-level properties; nested objects/arrays share the same memory reference as the original. A deep copy recursively duplicates all nested structures. JSON.parse(JSON.stringify(obj)) fails on deep copies because: 1) It throws on circular references, 2) It converts Date objects to ISO strings, 3) It omits functions, undefined, and Symbols, and 4) It converts NaN and Infinity to null. The modern standard is structuredClone(obj).",
      "structuredClone is a native browser and Node.js API that handles circular references, Dates, Sets, Maps, and TypedArrays safely."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects-arrays",
      "deep-copy",
      "shallow-copy",
      "structuredclone"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What are Property Descriptors in JavaScript (writable, enumerable, configurable, value), and how do they affect object property behavior?",
    "answer": "Property descriptors define internal attributes of an object property. 1) value: the actual data value. 2) writable: if false, the property value cannot be reassigned. 3) enumerable: if false, the property is hidden from for...in loops and Object.keys(). 4) configurable: if false, the property cannot be deleted and its descriptor attributes (except writable to false) cannot be modified.",
    "explanation": "Created and inspected using Object.defineProperty() and Object.getOwnPropertyDescriptor().",
    "interviewAnswer": "Property descriptors define internal attributes of an object property. 1) value: the actual data value. 2) writable: if false, the property value cannot be reassigned. 3) enumerable: if false, the property is hidden from for...in loops and Object.keys(). 4) configurable: if false, the property cannot be deleted and its descriptor attributes (except writable to false) cannot be modified. Created and inspected using Object.defineProperty() and Object.getOwnPropertyDescriptor().",
    "importantPoints": [
      "Property descriptors define internal attributes of an object property. 1) value: the actual data value. 2) writable: if false, the property value cannot be reassigned. 3) enumerable: if false, the property is hidden from for...in loops and Object.keys(). 4) configurable: if false, the property cannot be deleted and its descriptor attributes (except writable to false) cannot be modified.",
      "Created and inspected using Object.defineProperty() and Object.getOwnPropertyDescriptor()."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects-arrays",
      "property-descriptors",
      "object-defineproperty"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const arr = [1, 10, 2, 21, 5]; console.log(arr.sort()); and how do you sort numbers correctly?",
    "answer": "Outputs [1, 10, 2, 21, 5]. By default, Array.prototype.sort() converts array elements to strings and compares their UTF-16 code unit values in lexicographical (alphabetical) order (\"10\" comes before \"2\"). To sort numbers numerically, provide a comparator function: arr.sort((a, b) => a - b) for ascending order, or (b - a) for descending.",
    "explanation": "One of the most common gotchas in JavaScript interviews; sort() also mutates the array in place.",
    "interviewAnswer": "Outputs [1, 10, 2, 21, 5]. By default, Array.prototype.sort() converts array elements to strings and compares their UTF-16 code unit values in lexicographical (alphabetical) order (\"10\" comes before \"2\"). To sort numbers numerically, provide a comparator function: arr.sort((a, b) => a - b) for ascending order, or (b - a) for descending. One of the most common gotchas in JavaScript interviews; sort() also mutates the array in place.",
    "importantPoints": [
      "Outputs [1, 10, 2, 21, 5]. By default, Array.prototype.sort() converts array elements to strings and compares their UTF-16 code unit values in lexicographical (alphabetical) order (\"10\" comes before \"2\"). To sort numbers numerically, provide a comparator function: arr.sort((a, b) => a - b) for ascending order, or (b - a) for descending.",
      "One of the most common gotchas in JavaScript interviews; sort() also mutates the array in place."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects-arrays",
      "array-sort",
      "lexicographical",
      "gotcha"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "Which Array methods mutate the original array in place, and what are their modern non-mutating equivalents introduced in ES2023?",
    "answer": "Mutating methods include: push(), pop(), shift(), unshift(), splice(), sort(), and reverse(). ES2023 introduced non-mutating alternatives that return a new copied array: 1) sort() -> toSorted(), 2) reverse() -> toReversed(), 3) splice() -> toSpliced(), and 4) arr[index] = val -> with(index, val).",
    "explanation": "Using non-mutating array methods prevents accidental state corruption in React and functional code.",
    "interviewAnswer": "Mutating methods include: push(), pop(), shift(), unshift(), splice(), sort(), and reverse(). ES2023 introduced non-mutating alternatives that return a new copied array: 1) sort() -> toSorted(), 2) reverse() -> toReversed(), 3) splice() -> toSpliced(), and 4) arr[index] = val -> with(index, val). Using non-mutating array methods prevents accidental state corruption in React and functional code.",
    "importantPoints": [
      "Mutating methods include: push(), pop(), shift(), unshift(), splice(), sort(), and reverse(). ES2023 introduced non-mutating alternatives that return a new copied array: 1) sort() -> toSorted(), 2) reverse() -> toReversed(), 3) splice() -> toSpliced(), and 4) arr[index] = val -> with(index, val).",
      "Using non-mutating array methods prevents accidental state corruption in React and functional code."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Comparison",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects-arrays",
      "immutability",
      "es2023",
      "array-methods"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "How does Array.prototype.reduce() work, and how can you use it to group an array of objects by a specific property (e.g. category)?",
    "answer": "reduce((acc, curr, index, arr) => { ... }, initialValue) accumulates a single value by executing a reducer function on each element. Grouping implementation: const groupBy = (arr, key) => arr.reduce((acc, item) => { (acc[item[key]] = acc[item[key]] || []).push(item); return acc; }, {});.",
    "explanation": "Modern JavaScript also provides Object.groupBy(arr, item => item.key) as a native ES2024 utility.",
    "interviewAnswer": "reduce((acc, curr, index, arr) => { ... }, initialValue) accumulates a single value by executing a reducer function on each element. Grouping implementation: const groupBy = (arr, key) => arr.reduce((acc, item) => { (acc[item[key]] = acc[item[key]] || []).push(item); return acc; }, {});. Modern JavaScript also provides Object.groupBy(arr, item => item.key) as a native ES2024 utility.",
    "importantPoints": [
      "reduce((acc, curr, index, arr) => { ... }, initialValue) accumulates a single value by executing a reducer function on each element. Grouping implementation: const groupBy = (arr, key) => arr.reduce((acc, item) => { (acc[item[key]] = acc[item[key]] || []).push(item); return acc; }, {});.",
      "Modern JavaScript also provides Object.groupBy(arr, item => item.key) as a native ES2024 utility."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects-arrays",
      "array-reduce",
      "groupby",
      "data-transformation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is a \"Sparse Array\" (array with holes) in JavaScript, and how do methods like map(), forEach(), and find() treat missing indices?",
    "answer": "A sparse array has missing indices (e.g. const a = [1, , 3] or new Array(3)). Methods like forEach(), map(), and filter() SKIP uninitialized holes entirely (e.g. [1, , 3].map(x => x * 2) returns [2, <empty>, 6]). However, find(), includes(), and the spread operator [...a] treat holes as undefined.",
    "explanation": "Creating arrays with new Array(n).fill(null) avoids sparse array gotchas.",
    "interviewAnswer": "A sparse array has missing indices (e.g. const a = [1, , 3] or new Array(3)). Methods like forEach(), map(), and filter() SKIP uninitialized holes entirely (e.g. [1, , 3].map(x => x * 2) returns [2, <empty>, 6]). However, find(), includes(), and the spread operator [...a] treat holes as undefined. Creating arrays with new Array(n).fill(null) avoids sparse array gotchas.",
    "importantPoints": [
      "A sparse array has missing indices (e.g. const a = [1, , 3] or new Array(3)). Methods like forEach(), map(), and filter() SKIP uninitialized holes entirely (e.g. [1, , 3].map(x => x * 2) returns [2, <empty>, 6]). However, find(), includes(), and the spread operator [...a] treat holes as undefined.",
      "Creating arrays with new Array(n).fill(null) avoids sparse array gotchas."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "sparse-arrays",
      "array-holes",
      "map"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const obj = {}; Object.defineProperty(obj, \"x\", { value: 42 }); for (let key in obj) { console.log(key); } console.log(obj.x);?",
    "answer": "for...in logs NOTHING, and console.log(obj.x) prints 42. When using Object.defineProperty, property descriptor flags (enumerable, writable, configurable) default to false unless explicitly set to true. Because enumerable is false, the property is omitted from for...in and Object.keys().",
    "explanation": "Properties created via normal assignment (obj.x = 42) have enumerable: true by default.",
    "interviewAnswer": "for...in logs NOTHING, and console.log(obj.x) prints 42. When using Object.defineProperty, property descriptor flags (enumerable, writable, configurable) default to false unless explicitly set to true. Because enumerable is false, the property is omitted from for...in and Object.keys(). Properties created via normal assignment (obj.x = 42) have enumerable: true by default.",
    "importantPoints": [
      "for...in logs NOTHING, and console.log(obj.x) prints 42. When using Object.defineProperty, property descriptor flags (enumerable, writable, configurable) default to false unless explicitly set to true. Because enumerable is false, the property is omitted from for...in and Object.keys().",
      "Properties created via normal assignment (obj.x = 42) have enumerable: true by default."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "object-defineproperty",
      "enumerable"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const arr = [1, 2, 3]; arr[10] = 99; console.log(arr.length); console.log(arr[5]);?",
    "answer": "arr.length outputs 11, and arr[5] outputs undefined. Assigning to index 10 expands the length of the array to 10 + 1 = 11, creating empty slots (holes) for indices 3 through 9. Reading an empty slot returns undefined.",
    "explanation": "JavaScript array length is automatically kept as one greater than the highest numerical index.",
    "interviewAnswer": "arr.length outputs 11, and arr[5] outputs undefined. Assigning to index 10 expands the length of the array to 10 + 1 = 11, creating empty slots (holes) for indices 3 through 9. Reading an empty slot returns undefined. JavaScript array length is automatically kept as one greater than the highest numerical index.",
    "importantPoints": [
      "arr.length outputs 11, and arr[5] outputs undefined. Assigning to index 10 expands the length of the array to 10 + 1 = 11, creating empty slots (holes) for indices 3 through 9. Reading an empty slot returns undefined.",
      "JavaScript array length is automatically kept as one greater than the highest numerical index."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "sparse-arrays",
      "array-length"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the difference between Object.keys(), Object.getOwnPropertyNames(), and Reflect.ownKeys()?",
    "answer": "1) Object.keys(obj): returns only own ENUMERABLE string-keyed properties. 2) Object.getOwnPropertyNames(obj): returns all own string-keyed properties, including non-enumerable ones. 3) Reflect.ownKeys(obj): returns ALL own property keys, including non-enumerable properties AND Symbol keys.",
    "explanation": "Reflect.ownKeys is the most exhaustive key extraction method in JavaScript.",
    "interviewAnswer": "1) Object.keys(obj): returns only own ENUMERABLE string-keyed properties. 2) Object.getOwnPropertyNames(obj): returns all own string-keyed properties, including non-enumerable ones. 3) Reflect.ownKeys(obj): returns ALL own property keys, including non-enumerable properties AND Symbol keys. Reflect.ownKeys is the most exhaustive key extraction method in JavaScript.",
    "importantPoints": [
      "1) Object.keys(obj): returns only own ENUMERABLE string-keyed properties. 2) Object.getOwnPropertyNames(obj): returns all own string-keyed properties, including non-enumerable ones. 3) Reflect.ownKeys(obj): returns ALL own property keys, including non-enumerable properties AND Symbol keys.",
      "Reflect.ownKeys is the most exhaustive key extraction method in JavaScript."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Comparison",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "object-keys",
      "reflect-ownkeys",
      "reflection"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the difference between Array.prototype.splice() and Array.prototype.slice()?",
    "answer": "slice(start, end) returns a shallow copy of a portion of an array without modifying the original array. splice(start, deleteCount, ...items) MUTATES the original array by removing, replacing, or adding elements in place, returning an array of deleted elements.",
    "explanation": "Common interview mnemonic: \"splice\" modifies the original; \"slice\" takes a slice of the original.",
    "interviewAnswer": "slice(start, end) returns a shallow copy of a portion of an array without modifying the original array. splice(start, deleteCount, ...items) MUTATES the original array by removing, replacing, or adding elements in place, returning an array of deleted elements. Common interview mnemonic: \"splice\" modifies the original; \"slice\" takes a slice of the original.",
    "importantPoints": [
      "slice(start, end) returns a shallow copy of a portion of an array without modifying the original array. splice(start, deleteCount, ...items) MUTATES the original array by removing, replacing, or adding elements in place, returning an array of deleted elements.",
      "Common interview mnemonic: \"splice\" modifies the original; \"slice\" takes a slice of the original."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects-arrays",
      "slice-vs-splice",
      "array-mutation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const arr = [1, 2, 3, 4, 5]; arr.length = 2; console.log(arr); arr.length = 4; console.log(arr);?",
    "answer": "1) arr.length = 2 truncates the array to [1, 2], permanently deleting elements 3, 4, and 5. 2) arr.length = 4 expands the length, outputting [1, 2, <2 empty slots>]. Truncated elements are not restored.",
    "explanation": "Setting length on an array is a mutating operation that can delete elements.",
    "interviewAnswer": "1) arr.length = 2 truncates the array to [1, 2], permanently deleting elements 3, 4, and 5. 2) arr.length = 4 expands the length, outputting [1, 2, <2 empty slots>]. Truncated elements are not restored. Setting length on an array is a mutating operation that can delete elements.",
    "importantPoints": [
      "1) arr.length = 2 truncates the array to [1, 2], permanently deleting elements 3, 4, and 5. 2) arr.length = 4 expands the length, outputting [1, 2, <2 empty slots>]. Truncated elements are not restored.",
      "Setting length on an array is a mutating operation that can delete elements."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "array-length",
      "truncation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "How do you flatten a deeply nested array of arbitrary depth without using Array.prototype.flat()?",
    "answer": "Using recursion with reduce: function flatten(arr) { return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []); }. Alternatively, an iterative stack-based solution: const stack = [...arr]; const res = []; while (stack.length) { const next = stack.pop(); if (Array.isArray(next)) stack.push(...next); else res.push(next); } return res.reverse();.",
    "explanation": "A staple technical interview coding question testing recursion and stack structures.",
    "interviewAnswer": "Using recursion with reduce: function flatten(arr) { return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []); }. Alternatively, an iterative stack-based solution: const stack = [...arr]; const res = []; while (stack.length) { const next = stack.pop(); if (Array.isArray(next)) stack.push(...next); else res.push(next); } return res.reverse();. A staple technical interview coding question testing recursion and stack structures.",
    "importantPoints": [
      "Using recursion with reduce: function flatten(arr) { return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []); }. Alternatively, an iterative stack-based solution: const stack = [...arr]; const res = []; while (stack.length) { const next = stack.pop(); if (Array.isArray(next)) stack.push(...next); else res.push(next); } return res.reverse();.",
      "A staple technical interview coding question testing recursion and stack structures."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects-arrays",
      "flatten-array",
      "recursion",
      "reduce"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: console.log([] == false), console.log([0] == false), and console.log([1] == true)?",
    "answer": "All three output true! 1) [] == false: false coerces to 0; [].toString() is \"\"; \"\" coerces to 0; 0 == 0 is true. 2) [0] == false: false becomes 0; [0].toString() is \"0\"; \"0\" becomes 0; 0 == 0 is true. 3) [1] == true: true becomes 1; [1].toString() is \"1\"; \"1\" becomes 1; 1 == 1 is true.",
    "explanation": "Array toPrimitive coercion calls toString(), producing numeric strings that equal boolean numeric equivalents.",
    "interviewAnswer": "All three output true! 1) [] == false: false coerces to 0; [].toString() is \"\"; \"\" coerces to 0; 0 == 0 is true. 2) [0] == false: false becomes 0; [0].toString() is \"0\"; \"0\" becomes 0; 0 == 0 is true. 3) [1] == true: true becomes 1; [1].toString() is \"1\"; \"1\" becomes 1; 1 == 1 is true. Array toPrimitive coercion calls toString(), producing numeric strings that equal boolean numeric equivalents.",
    "importantPoints": [
      "All three output true! 1) [] == false: false coerces to 0; [].toString() is \"\"; \"\" coerces to 0; 0 == 0 is true. 2) [0] == false: false becomes 0; [0].toString() is \"0\"; \"0\" becomes 0; 0 == 0 is true. 3) [1] == true: true becomes 1; [1].toString() is \"1\"; \"1\" becomes 1; 1 == 1 is true.",
      "Array toPrimitive coercion calls toString(), producing numeric strings that equal boolean numeric equivalents."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "array-coercion",
      "equality",
      "gotcha"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "How does Object.create(proto, propertiesObject) work, and how does it differ from creating an object with an object literal {}?",
    "answer": "Object.create(proto) creates a brand new object whose internal [[Prototype]] is explicitly set to the passed proto object. Object.create(null) creates a pure dictionary with NO prototype (no toString, hasOwnProperty, or constructor). An object literal {} always inherits from Object.prototype.",
    "explanation": "Object.create(null) is ideal for safe hash maps immune to prototype pollution vulnerabilities.",
    "interviewAnswer": "Object.create(proto) creates a brand new object whose internal [[Prototype]] is explicitly set to the passed proto object. Object.create(null) creates a pure dictionary with NO prototype (no toString, hasOwnProperty, or constructor). An object literal {} always inherits from Object.prototype. Object.create(null) is ideal for safe hash maps immune to prototype pollution vulnerabilities.",
    "importantPoints": [
      "Object.create(proto) creates a brand new object whose internal [[Prototype]] is explicitly set to the passed proto object. Object.create(null) creates a pure dictionary with NO prototype (no toString, hasOwnProperty, or constructor). An object literal {} always inherits from Object.prototype.",
      "Object.create(null) is ideal for safe hash maps immune to prototype pollution vulnerabilities."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "object-create",
      "prototypes",
      "prototype-pollution"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const obj = Object.create(null); console.log(obj.toString); console.log(\"toString\" in obj);?",
    "answer": "console.log(obj.toString) outputs undefined, and \"toString\" in obj outputs false. Because obj was created with null prototype, it does not inherit from Object.prototype and possesses zero default methods or properties.",
    "explanation": "Accessing obj.hasOwnProperty throws TypeError: obj.hasOwnProperty is not a function.",
    "interviewAnswer": "console.log(obj.toString) outputs undefined, and \"toString\" in obj outputs false. Because obj was created with null prototype, it does not inherit from Object.prototype and possesses zero default methods or properties. Accessing obj.hasOwnProperty throws TypeError: obj.hasOwnProperty is not a function.",
    "importantPoints": [
      "console.log(obj.toString) outputs undefined, and \"toString\" in obj outputs false. Because obj was created with null prototype, it does not inherit from Object.prototype and possesses zero default methods or properties.",
      "Accessing obj.hasOwnProperty throws TypeError: obj.hasOwnProperty is not a function."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "object-create-null",
      "prototypes"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "How do you check if an object has a property as its OWN property (not inherited from prototype) safely in modern JavaScript?",
    "answer": "Use Object.hasOwn(obj, \"prop\") (introduced in ES2022). Do not call obj.hasOwnProperty(\"prop\") directly because if obj was created with Object.create(null) or has an overridden hasOwnProperty property, it will crash. Alternatively, use Object.prototype.hasOwnProperty.call(obj, \"prop\").",
    "explanation": "Object.hasOwn is the modern, safe built-in replacement for hasOwnProperty.",
    "interviewAnswer": "Use Object.hasOwn(obj, \"prop\") (introduced in ES2022). Do not call obj.hasOwnProperty(\"prop\") directly because if obj was created with Object.create(null) or has an overridden hasOwnProperty property, it will crash. Alternatively, use Object.prototype.hasOwnProperty.call(obj, \"prop\"). Object.hasOwn is the modern, safe built-in replacement for hasOwnProperty.",
    "importantPoints": [
      "Use Object.hasOwn(obj, \"prop\") (introduced in ES2022). Do not call obj.hasOwnProperty(\"prop\") directly because if obj was created with Object.create(null) or has an overridden hasOwnProperty property, it will crash. Alternatively, use Object.prototype.hasOwnProperty.call(obj, \"prop\").",
      "Object.hasOwn is the modern, safe built-in replacement for hasOwnProperty."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects-arrays",
      "object-hasown",
      "hasownproperty",
      "es2022"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const a = [1, 2]; const b = [1, 2]; console.log(a == b); console.log(a === b);?",
    "answer": "Both output false. In JavaScript, non-primitive types (objects and arrays) are compared by REFERENCE IDENTITY (memory address), not by structural content. Even though a and b have identical contents, they are allocated as two separate array instances in heap memory.",
    "explanation": "To compare arrays by content, iterate and compare elements, or use JSON.stringify for simple arrays.",
    "interviewAnswer": "Both output false. In JavaScript, non-primitive types (objects and arrays) are compared by REFERENCE IDENTITY (memory address), not by structural content. Even though a and b have identical contents, they are allocated as two separate array instances in heap memory. To compare arrays by content, iterate and compare elements, or use JSON.stringify for simple arrays.",
    "importantPoints": [
      "Both output false. In JavaScript, non-primitive types (objects and arrays) are compared by REFERENCE IDENTITY (memory address), not by structural content. Even though a and b have identical contents, they are allocated as two separate array instances in heap memory.",
      "To compare arrays by content, iterate and compare elements, or use JSON.stringify for simple arrays."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "array-equality",
      "reference-comparison"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the difference between Array.prototype.find() and Array.prototype.filter()?",
    "answer": "find(predicate) executes the callback until the first element matches, immediately returning that single element (or undefined if none found). filter(predicate) continues iterating through the entire array, returning a new array containing ALL elements that satisfy the condition (or an empty array []).",
    "explanation": "find() short-circuits on the first match (O(k) time); filter() is always O(n).",
    "interviewAnswer": "find(predicate) executes the callback until the first element matches, immediately returning that single element (or undefined if none found). filter(predicate) continues iterating through the entire array, returning a new array containing ALL elements that satisfy the condition (or an empty array []). find() short-circuits on the first match (O(k) time); filter() is always O(n).",
    "importantPoints": [
      "find(predicate) executes the callback until the first element matches, immediately returning that single element (or undefined if none found). filter(predicate) continues iterating through the entire array, returning a new array containing ALL elements that satisfy the condition (or an empty array []).",
      "find() short-circuits on the first match (O(k) time); filter() is always O(n)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "array-find",
      "array-filter"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const obj = { a: 1, b: 2 }; Object.defineProperty(obj, \"c\", { value: 3, enumerable: false }); console.log(Object.keys(obj)); console.log(\"c\" in obj); console.log(obj.c);?",
    "answer": "1) Object.keys(obj) outputs [\"a\", \"b\"] (omits non-enumerable c). 2) \"c\" in obj outputs true (the \"in\" operator checks property existence regardless of enumerability). 3) obj.c outputs 3 (non-enumerable properties are still accessible directly).",
    "explanation": "Demonstrates difference between enumerability and accessibility.",
    "interviewAnswer": "1) Object.keys(obj) outputs [\"a\", \"b\"] (omits non-enumerable c). 2) \"c\" in obj outputs true (the \"in\" operator checks property existence regardless of enumerability). 3) obj.c outputs 3 (non-enumerable properties are still accessible directly). Demonstrates difference between enumerability and accessibility.",
    "importantPoints": [
      "1) Object.keys(obj) outputs [\"a\", \"b\"] (omits non-enumerable c). 2) \"c\" in obj outputs true (the \"in\" operator checks property existence regardless of enumerability). 3) obj.c outputs 3 (non-enumerable properties are still accessible directly).",
      "Demonstrates difference between enumerability and accessibility."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "enumerable",
      "in-operator",
      "object-keys"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "How does Array.from() differ from Array.prototype.slice.call() for converting array-like objects into arrays?",
    "answer": "Array.from(iterableOrArrayLike, mapFn?) converts both array-like objects (with length property) AND any iterable (Set, Map, DOM NodeList, generators). It also accepts an optional second map function argument, combining conversion and transformation in a single step without allocating an intermediate array.",
    "explanation": "Array.from({ length: 3 }, (_, i) => i) generates [0, 1, 2] cleanly.",
    "interviewAnswer": "Array.from(iterableOrArrayLike, mapFn?) converts both array-like objects (with length property) AND any iterable (Set, Map, DOM NodeList, generators). It also accepts an optional second map function argument, combining conversion and transformation in a single step without allocating an intermediate array. Array.from({ length: 3 }, (_, i) => i) generates [0, 1, 2] cleanly.",
    "importantPoints": [
      "Array.from(iterableOrArrayLike, mapFn?) converts both array-like objects (with length property) AND any iterable (Set, Map, DOM NodeList, generators). It also accepts an optional second map function argument, combining conversion and transformation in a single step without allocating an intermediate array.",
      "Array.from({ length: 3 }, (_, i) => i) generates [0, 1, 2] cleanly."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "array-from",
      "iterables",
      "array-like"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const arr = [1, 2, 3]; arr.reduce((acc, x) => acc + x); vs arr.reduce((acc, x) => acc + x, 0); on an empty array []?",
    "answer": "On an empty array [], reduce without an initial value throws a TypeError: \"Reduce of empty array with no initial value\". reduce with an initial value (0) returns 0 without error.",
    "explanation": "Always provide an explicit initial value to reduce() to prevent runtime crashes on empty data sets.",
    "interviewAnswer": "On an empty array [], reduce without an initial value throws a TypeError: \"Reduce of empty array with no initial value\". reduce with an initial value (0) returns 0 without error. Always provide an explicit initial value to reduce() to prevent runtime crashes on empty data sets.",
    "importantPoints": [
      "On an empty array [], reduce without an initial value throws a TypeError: \"Reduce of empty array with no initial value\". reduce with an initial value (0) returns 0 without error.",
      "Always provide an explicit initial value to reduce() to prevent runtime crashes on empty data sets."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects-arrays",
      "array-reduce",
      "typeerror",
      "initial-value"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the difference between for...in and for...of loops when iterating over arrays and objects?",
    "answer": "for...in iterates over all ENUMERABLE PROPERTY KEYS (strings) of an object, including inherited properties on the prototype chain. for...of iterates over VALUES of any ITERABLE collection (arrays, strings, Sets, Maps, NodeLists) that implements the Symbol.iterator method. Using for...in on arrays is an anti-pattern because it returns string indices and includes custom prototype properties.",
    "explanation": "Use for...of for arrays and iterables; use for...in or Object.keys() for plain objects.",
    "interviewAnswer": "for...in iterates over all ENUMERABLE PROPERTY KEYS (strings) of an object, including inherited properties on the prototype chain. for...of iterates over VALUES of any ITERABLE collection (arrays, strings, Sets, Maps, NodeLists) that implements the Symbol.iterator method. Using for...in on arrays is an anti-pattern because it returns string indices and includes custom prototype properties. Use for...of for arrays and iterables; use for...in or Object.keys() for plain objects.",
    "importantPoints": [
      "for...in iterates over all ENUMERABLE PROPERTY KEYS (strings) of an object, including inherited properties on the prototype chain. for...of iterates over VALUES of any ITERABLE collection (arrays, strings, Sets, Maps, NodeLists) that implements the Symbol.iterator method. Using for...in on arrays is an anti-pattern because it returns string indices and includes custom prototype properties.",
      "Use for...of for arrays and iterables; use for...in or Object.keys() for plain objects."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects-arrays",
      "for-in",
      "for-of",
      "iteration"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const target = { a: 1 }; const source = { b: 2 }; const result = Object.assign(target, source); console.log(result === target); console.log(target);?",
    "answer": "result === target outputs true, and target outputs { a: 1, b: 2 }. Object.assign mutates the first argument (target) directly and returns that exact same target reference. To avoid mutating target, pass an empty object as first argument: Object.assign({}, target, source).",
    "explanation": "A common source of accidental state mutation bugs.",
    "interviewAnswer": "result === target outputs true, and target outputs { a: 1, b: 2 }. Object.assign mutates the first argument (target) directly and returns that exact same target reference. To avoid mutating target, pass an empty object as first argument: Object.assign({}, target, source). A common source of accidental state mutation bugs.",
    "importantPoints": [
      "result === target outputs true, and target outputs { a: 1, b: 2 }. Object.assign mutates the first argument (target) directly and returns that exact same target reference. To avoid mutating target, pass an empty object as first argument: Object.assign({}, target, source).",
      "A common source of accidental state mutation bugs."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "object-assign",
      "mutations"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const obj = { 10: \"ten\", 2: \"two\", \"b\": \"beta\", \"a\": \"alpha\" }; console.log(Object.keys(obj));?",
    "answer": "Outputs [\"2\", \"10\", \"b\", \"a\"]. According to the ECMAScript specification, object key iteration order is deterministic: 1) Integer keys in ascending numerical order, 2) String keys in chronological insertion order, and 3) Symbol keys in chronological insertion order.",
    "explanation": "Numeric keys are always sorted numerically first regardless of where they were inserted.",
    "interviewAnswer": "Outputs [\"2\", \"10\", \"b\", \"a\"]. According to the ECMAScript specification, object key iteration order is deterministic: 1) Integer keys in ascending numerical order, 2) String keys in chronological insertion order, and 3) Symbol keys in chronological insertion order. Numeric keys are always sorted numerically first regardless of where they were inserted.",
    "importantPoints": [
      "Outputs [\"2\", \"10\", \"b\", \"a\"]. According to the ECMAScript specification, object key iteration order is deterministic: 1) Integer keys in ascending numerical order, 2) String keys in chronological insertion order, and 3) Symbol keys in chronological insertion order.",
      "Numeric keys are always sorted numerically first regardless of where they were inserted."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "javascript",
      "objects-arrays",
      "object-keys",
      "property-order",
      "ecmascript-spec"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "How does Array.prototype.flatMap() differ from calling .map().flat()?",
    "answer": "flatMap(callback) maps each element using a mapping function and flattens the result by 1 level in a single pass. It is identical to map().flat(1), but is more computationally efficient because it avoids allocating an intermediate array between the mapping and flattening steps.",
    "explanation": "Useful for filtering and mapping simultaneously (return [] to discard an element).",
    "interviewAnswer": "flatMap(callback) maps each element using a mapping function and flattens the result by 1 level in a single pass. It is identical to map().flat(1), but is more computationally efficient because it avoids allocating an intermediate array between the mapping and flattening steps. Useful for filtering and mapping simultaneously (return [] to discard an element).",
    "importantPoints": [
      "flatMap(callback) maps each element using a mapping function and flattens the result by 1 level in a single pass. It is identical to map().flat(1), but is more computationally efficient because it avoids allocating an intermediate array between the mapping and flattening steps.",
      "Useful for filtering and mapping simultaneously (return [] to discard an element)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "flatmap",
      "performance",
      "arrays"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const arr = [1, 2, 3]; const it = arr[Symbol.iterator](); console.log(it.next()); console.log(it.next());?",
    "answer": "1) { value: 1, done: false }. 2) { value: 2, done: false }. Calling next() advances the iterator cursor through the collection until done is true.",
    "explanation": "Underlies the iterable protocol that powers for...of loops and spread operators.",
    "interviewAnswer": "1) { value: 1, done: false }. 2) { value: 2, done: false }. Calling next() advances the iterator cursor through the collection until done is true. Underlies the iterable protocol that powers for...of loops and spread operators.",
    "importantPoints": [
      "1) { value: 1, done: false }. 2) { value: 2, done: false }. Calling next() advances the iterator cursor through the collection until done is true.",
      "Underlies the iterable protocol that powers for...of loops and spread operators."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "iterators",
      "symbol-iterator"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "How do getter and setter accessor properties work in JavaScript object literals?",
    "answer": "Getters and setters bind an object property to a function that is invoked when that property is read or written: const obj = { _val: 0, get val() { return this._val; }, set val(v) { if (v < 0) throw new Error(\"Negative\"); this._val = v; } };. Accessing obj.val runs the getter; assigning obj.val = 5 runs the setter.",
    "explanation": "Allows data validation and computed properties without explicit function call syntax.",
    "interviewAnswer": "Getters and setters bind an object property to a function that is invoked when that property is read or written: const obj = { _val: 0, get val() { return this._val; }, set val(v) { if (v < 0) throw new Error(\"Negative\"); this._val = v; } };. Accessing obj.val runs the getter; assigning obj.val = 5 runs the setter. Allows data validation and computed properties without explicit function call syntax.",
    "importantPoints": [
      "Getters and setters bind an object property to a function that is invoked when that property is read or written: const obj = { _val: 0, get val() { return this._val; }, set val(v) { if (v < 0) throw new Error(\"Negative\"); this._val = v; } };. Accessing obj.val runs the getter; assigning obj.val = 5 runs the setter.",
      "Allows data validation and computed properties without explicit function call syntax."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "getters-setters",
      "accessors"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const user = { get name() { return \"Alice\"; } }; user.name = \"Bob\"; console.log(user.name); in non-strict mode vs strict mode?",
    "answer": "In non-strict mode, it outputs \"Alice\" (assignment to a getter-only property fails silently). In strict mode (\"use strict\"), it throws TypeError: Cannot set property name of #<Object> which has only a getter.",
    "explanation": "Properties without a setter are read-only.",
    "interviewAnswer": "In non-strict mode, it outputs \"Alice\" (assignment to a getter-only property fails silently). In strict mode (\"use strict\"), it throws TypeError: Cannot set property name of #<Object> which has only a getter. Properties without a setter are read-only.",
    "importantPoints": [
      "In non-strict mode, it outputs \"Alice\" (assignment to a getter-only property fails silently). In strict mode (\"use strict\"), it throws TypeError: Cannot set property name of #<Object> which has only a getter.",
      "Properties without a setter are read-only."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "getters",
      "strict-mode",
      "typeerror"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the difference between Array.prototype.some() and Array.prototype.every()?",
    "answer": "some(predicate) checks if AT LEAST ONE element in the array passes the test, short-circuiting and returning true as soon as a match is found. every(predicate) checks if ALL elements pass the test, short-circuiting and returning false as soon as any element fails.",
    "explanation": "On an empty array [], some() always returns false, while every() always returns true (vacuous truth).",
    "interviewAnswer": "some(predicate) checks if AT LEAST ONE element in the array passes the test, short-circuiting and returning true as soon as a match is found. every(predicate) checks if ALL elements pass the test, short-circuiting and returning false as soon as any element fails. On an empty array [], some() always returns false, while every() always returns true (vacuous truth).",
    "importantPoints": [
      "some(predicate) checks if AT LEAST ONE element in the array passes the test, short-circuiting and returning true as soon as a match is found. every(predicate) checks if ALL elements pass the test, short-circuiting and returning false as soon as any element fails.",
      "On an empty array [], some() always returns false, while every() always returns true (vacuous truth)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "array-some",
      "array-every",
      "short-circuiting"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: [].every(x => x > 0) and [].some(x => x > 0)?",
    "answer": "[].every(...) outputs true. [].some(...) outputs false. In mathematical logic, a universal quantifier over an empty set is vacuously true (every item satisfies condition because no item fails it), while an existential quantifier is false.",
    "explanation": "A notorious JavaScript interview question testing edge cases in array methods.",
    "interviewAnswer": "[].every(...) outputs true. [].some(...) outputs false. In mathematical logic, a universal quantifier over an empty set is vacuously true (every item satisfies condition because no item fails it), while an existential quantifier is false. A notorious JavaScript interview question testing edge cases in array methods.",
    "importantPoints": [
      "[].every(...) outputs true. [].some(...) outputs false. In mathematical logic, a universal quantifier over an empty set is vacuously true (every item satisfies condition because no item fails it), while an existential quantifier is false.",
      "A notorious JavaScript interview question testing edge cases in array methods."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "every",
      "some",
      "vacuous-truth"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "How does Object.preventExtensions() differ from Object.seal() and Object.freeze()?",
    "answer": "1) preventExtensions: only prevents ADDING new properties (existing properties can still be deleted or modified). 2) seal: prevents adding AND deleting properties (existing writable properties can still be modified). 3) freeze: prevents adding, deleting, AND modifying property values (completely read-only shallow immutability).",
    "explanation": "Hierarchy of object lock levels: freeze is strictest, preventExtensions is least strict.",
    "interviewAnswer": "1) preventExtensions: only prevents ADDING new properties (existing properties can still be deleted or modified). 2) seal: prevents adding AND deleting properties (existing writable properties can still be modified). 3) freeze: prevents adding, deleting, AND modifying property values (completely read-only shallow immutability). Hierarchy of object lock levels: freeze is strictest, preventExtensions is least strict.",
    "importantPoints": [
      "1) preventExtensions: only prevents ADDING new properties (existing properties can still be deleted or modified). 2) seal: prevents adding AND deleting properties (existing writable properties can still be modified). 3) freeze: prevents adding, deleting, AND modifying property values (completely read-only shallow immutability).",
      "Hierarchy of object lock levels: freeze is strictest, preventExtensions is least strict."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Comparison",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "preventextensions",
      "seal",
      "freeze"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const obj = {}; Object.preventExtensions(obj); obj.a = 1; console.log(obj.a); in non-strict mode vs strict mode?",
    "answer": "In non-strict mode, it outputs undefined (property addition fails silently). In strict mode, it throws TypeError: Cannot add property a, object is not extensible.",
    "explanation": "Strict mode surfaces silent object modification failures as runtime errors.",
    "interviewAnswer": "In non-strict mode, it outputs undefined (property addition fails silently). In strict mode, it throws TypeError: Cannot add property a, object is not extensible. Strict mode surfaces silent object modification failures as runtime errors.",
    "importantPoints": [
      "In non-strict mode, it outputs undefined (property addition fails silently). In strict mode, it throws TypeError: Cannot add property a, object is not extensible.",
      "Strict mode surfaces silent object modification failures as runtime errors."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "preventextensions",
      "strict-mode"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "How do you check if an object is an empty object {} in JavaScript correctly?",
    "answer": "Check that it has no string keys AND no symbol keys: Object.keys(obj).length === 0 && Object.getOwnPropertySymbols(obj).length === 0 && obj.constructor === Object. Alternatively, check Reflect.ownKeys(obj).length === 0.",
    "explanation": "Checking only Object.keys(obj).length === 0 misses Symbol properties.",
    "interviewAnswer": "Check that it has no string keys AND no symbol keys: Object.keys(obj).length === 0 && Object.getOwnPropertySymbols(obj).length === 0 && obj.constructor === Object. Alternatively, check Reflect.ownKeys(obj).length === 0. Checking only Object.keys(obj).length === 0 misses Symbol properties.",
    "importantPoints": [
      "Check that it has no string keys AND no symbol keys: Object.keys(obj).length === 0 && Object.getOwnPropertySymbols(obj).length === 0 && obj.constructor === Object. Alternatively, check Reflect.ownKeys(obj).length === 0.",
      "Checking only Object.keys(obj).length === 0 misses Symbol properties."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "empty-object",
      "symbols"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const a = [1, 2, 3]; const b = a.concat(); b.push(4); console.log(a.length, b.length);?",
    "answer": "Outputs \"3 4\". Invoking concat() with no arguments returns a shallow clone of the array. Mutating b does not affect a.",
    "explanation": "A common idiom for shallow cloning arrays before spread syntax (...arr).",
    "interviewAnswer": "Outputs \"3 4\". Invoking concat() with no arguments returns a shallow clone of the array. Mutating b does not affect a. A common idiom for shallow cloning arrays before spread syntax (...arr).",
    "importantPoints": [
      "Outputs \"3 4\". Invoking concat() with no arguments returns a shallow clone of the array. Mutating b does not affect a.",
      "A common idiom for shallow cloning arrays before spread syntax (...arr)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "array-concat",
      "cloning"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const arr = [\"a\", \"b\", \"c\"]; for (const index in arr) { console.log(typeof index); }?",
    "answer": "Outputs \"string\", \"string\", \"string\". for...in iterates over object property keys, and in JavaScript, all object keys (including array indices) are STRINGS.",
    "explanation": "Using index + 1 inside for...in results in string concatenation (\"01\", \"11\") rather than arithmetic.",
    "interviewAnswer": "Outputs \"string\", \"string\", \"string\". for...in iterates over object property keys, and in JavaScript, all object keys (including array indices) are STRINGS. Using index + 1 inside for...in results in string concatenation (\"01\", \"11\") rather than arithmetic.",
    "importantPoints": [
      "Outputs \"string\", \"string\", \"string\". for...in iterates over object property keys, and in JavaScript, all object keys (including array indices) are STRINGS.",
      "Using index + 1 inside for...in results in string concatenation (\"01\", \"11\") rather than arithmetic."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "for-in",
      "array-indices",
      "typeof"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the difference between Array.prototype.includes() and Array.prototype.indexOf() regarding NaN?",
    "answer": "arr.indexOf(NaN) always returns -1 because indexOf uses strict equality (===), and NaN === NaN is false. arr.includes(NaN) uses the SameValueZero algorithm, so it correctly recognizes NaN and returns true if NaN exists in the array.",
    "explanation": "includes() was added in ES2016 specifically to fix NaN lookup limitations of indexOf.",
    "interviewAnswer": "arr.indexOf(NaN) always returns -1 because indexOf uses strict equality (===), and NaN === NaN is false. arr.includes(NaN) uses the SameValueZero algorithm, so it correctly recognizes NaN and returns true if NaN exists in the array. includes() was added in ES2016 specifically to fix NaN lookup limitations of indexOf.",
    "importantPoints": [
      "arr.indexOf(NaN) always returns -1 because indexOf uses strict equality (===), and NaN === NaN is false. arr.includes(NaN) uses the SameValueZero algorithm, so it correctly recognizes NaN and returns true if NaN exists in the array.",
      "includes() was added in ES2016 specifically to fix NaN lookup limitations of indexOf."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "array-includes",
      "indexof",
      "nan"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: console.log([NaN].indexOf(NaN)), console.log([NaN].includes(NaN))?",
    "answer": "1) [NaN].indexOf(NaN) outputs -1. 2) [NaN].includes(NaN) outputs true.",
    "explanation": "Direct demonstration of indexOf vs includes equality comparison differences.",
    "interviewAnswer": "1) [NaN].indexOf(NaN) outputs -1. 2) [NaN].includes(NaN) outputs true. Direct demonstration of indexOf vs includes equality comparison differences.",
    "importantPoints": [
      "1) [NaN].indexOf(NaN) outputs -1. 2) [NaN].includes(NaN) outputs true.",
      "Direct demonstration of indexOf vs includes equality comparison differences."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "indexof",
      "includes",
      "nan"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "How does Array.prototype.at() differ from bracket notation [index] for accessing array elements?",
    "answer": "arr.at(index) accepts negative integers to count backwards from the end of the array (e.g. arr.at(-1) returns the last element, arr.at(-2) returns the second to last). Standard bracket notation arr[-1] treats \"-1\" as a string property key and returns undefined on standard arrays.",
    "explanation": "Eliminates verbose syntax like arr[arr.length - 1].",
    "interviewAnswer": "arr.at(index) accepts negative integers to count backwards from the end of the array (e.g. arr.at(-1) returns the last element, arr.at(-2) returns the second to last). Standard bracket notation arr[-1] treats \"-1\" as a string property key and returns undefined on standard arrays. Eliminates verbose syntax like arr[arr.length - 1].",
    "importantPoints": [
      "arr.at(index) accepts negative integers to count backwards from the end of the array (e.g. arr.at(-1) returns the last element, arr.at(-2) returns the second to last). Standard bracket notation arr[-1] treats \"-1\" as a string property key and returns undefined on standard arrays.",
      "Eliminates verbose syntax like arr[arr.length - 1]."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "array-at",
      "negative-indexing",
      "es2022"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const obj = { a: 1 }; Object.preventExtensions(obj); delete obj.a; console.log(obj.a);?",
    "answer": "Outputs undefined. Object.preventExtensions() prevents adding NEW properties, but does NOT prevent deleting existing properties. delete obj.a successfully removes the property.",
    "explanation": "To prevent property deletion, use Object.seal() or Object.freeze().",
    "interviewAnswer": "Outputs undefined. Object.preventExtensions() prevents adding NEW properties, but does NOT prevent deleting existing properties. delete obj.a successfully removes the property. To prevent property deletion, use Object.seal() or Object.freeze().",
    "importantPoints": [
      "Outputs undefined. Object.preventExtensions() prevents adding NEW properties, but does NOT prevent deleting existing properties. delete obj.a successfully removes the property.",
      "To prevent property deletion, use Object.seal() or Object.freeze()."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "preventextensions",
      "delete-operator"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "How do you remove duplicates from an array of primitive values in a single line of JavaScript?",
    "answer": "const unique = [...new Set(array)]; or Array.from(new Set(array));. Set guarantees uniqueness of elements and preserves insertion order.",
    "explanation": "Runs in O(n) time, vastly superior to O(n^2) nested loop filters.",
    "interviewAnswer": "const unique = [...new Set(array)]; or Array.from(new Set(array));. Set guarantees uniqueness of elements and preserves insertion order. Runs in O(n) time, vastly superior to O(n^2) nested loop filters.",
    "importantPoints": [
      "const unique = [...new Set(array)]; or Array.from(new Set(array));. Set guarantees uniqueness of elements and preserves insertion order.",
      "Runs in O(n) time, vastly superior to O(n^2) nested loop filters."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "set",
      "deduplication",
      "one-liner"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const arr = [1, 2, 3]; arr.copyWithin(0, 1, 3); console.log(arr);?",
    "answer": "Outputs [2, 3, 3]. copyWithin(target, start, end) shallow copies a sequence of array elements within the same array without changing its length, mutating the array in place.",
    "explanation": "A high-performance in-memory buffer manipulation method.",
    "interviewAnswer": "Outputs [2, 3, 3]. copyWithin(target, start, end) shallow copies a sequence of array elements within the same array without changing its length, mutating the array in place. A high-performance in-memory buffer manipulation method.",
    "importantPoints": [
      "Outputs [2, 3, 3]. copyWithin(target, start, end) shallow copies a sequence of array elements within the same array without changing its length, mutating the array in place.",
      "A high-performance in-memory buffer manipulation method."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "copywithin",
      "array-mutation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the difference between Object.entries() and Object.fromEntries()?",
    "answer": "Object.entries(obj) transforms an object into an array of [key, value] pairs (e.g. { a: 1 } -> [[\"a\", 1]]). Object.fromEntries(iterable) performs the exact inverse, transforming an iterable of [key, value] pairs (like a Map or array of pairs) back into an object.",
    "explanation": "Allows applying array methods (map, filter) to objects: Object.fromEntries(Object.entries(obj).filter(...)).",
    "interviewAnswer": "Object.entries(obj) transforms an object into an array of [key, value] pairs (e.g. { a: 1 } -> [[\"a\", 1]]). Object.fromEntries(iterable) performs the exact inverse, transforming an iterable of [key, value] pairs (like a Map or array of pairs) back into an object. Allows applying array methods (map, filter) to objects: Object.fromEntries(Object.entries(obj).filter(...)).",
    "importantPoints": [
      "Object.entries(obj) transforms an object into an array of [key, value] pairs (e.g. { a: 1 } -> [[\"a\", 1]]). Object.fromEntries(iterable) performs the exact inverse, transforming an iterable of [key, value] pairs (like a Map or array of pairs) back into an object.",
      "Allows applying array methods (map, filter) to objects: Object.fromEntries(Object.entries(obj).filter(...))."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "object-fromentries",
      "object-entries"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const map = new Map([[\"a\", 1], [\"b\", 2]]); const obj = Object.fromEntries(map); console.log(obj);?",
    "answer": "Outputs { a: 1, b: 2 }. Object.fromEntries consumes the Map iterable and builds a plain JavaScript object.",
    "explanation": "Seamless bridge between Map instances and standard objects.",
    "interviewAnswer": "Outputs { a: 1, b: 2 }. Object.fromEntries consumes the Map iterable and builds a plain JavaScript object. Seamless bridge between Map instances and standard objects.",
    "importantPoints": [
      "Outputs { a: 1, b: 2 }. Object.fromEntries consumes the Map iterable and builds a plain JavaScript object.",
      "Seamless bridge between Map instances and standard objects."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "map",
      "object-fromentries"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "What is the output of: const arr = [1, [2, [3, [4]]]]; console.log(arr.flat(2));?",
    "answer": "Outputs [1, 2, 3, [4]]. flat(depth) flattens array nesting up to the specified depth (2 levels in this case). To flatten arbitrarily deep arrays completely, use arr.flat(Infinity).",
    "explanation": "flat(Infinity) flattens all nested arrays regardless of depth.",
    "interviewAnswer": "Outputs [1, 2, 3, [4]]. flat(depth) flattens array nesting up to the specified depth (2 levels in this case). To flatten arbitrarily deep arrays completely, use arr.flat(Infinity). flat(Infinity) flattens all nested arrays regardless of depth.",
    "importantPoints": [
      "Outputs [1, 2, 3, [4]]. flat(depth) flattens array nesting up to the specified depth (2 levels in this case). To flatten arbitrarily deep arrays completely, use arr.flat(Infinity).",
      "flat(Infinity) flattens all nested arrays regardless of depth."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "array-flat",
      "flattening"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "objects-arrays",
    "question": "How can you convert an object to a query string (e.g. { page: 1, filter: \"active\" } -> \"page=1&filter=active\") using modern URLSearchParams?",
    "answer": "const queryString = new URLSearchParams(object).toString();. It automatically handles URL encoding of parameter keys and values without manual string concatenation.",
    "explanation": "Standard Web and Node.js URL API.",
    "interviewAnswer": "const queryString = new URLSearchParams(object).toString();. It automatically handles URL encoding of parameter keys and values without manual string concatenation. Standard Web and Node.js URL API.",
    "importantPoints": [
      "const queryString = new URLSearchParams(object).toString();. It automatically handles URL encoding of parameter keys and values without manual string concatenation.",
      "Standard Web and Node.js URL API."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "javascript",
      "objects-arrays",
      "urlsearchparams",
      "query-string"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
