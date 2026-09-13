import { SeedQuestion } from '../types';

export const nodeBuffersQuestions: SeedQuestion[] = [
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is a Buffer in Node.js, and why was it introduced before TypedArrays existed in JavaScript?",
    "answer": "A Buffer represents a fixed-length chunk of raw binary memory allocated outside the V8 JavaScript heap (using raw C++ malloc). Node.js introduced Buffers early on because server runtimes must handle raw binary TCP network streams, file systems, and image data, and ECMAScript at the time had only text strings and no native binary data types (TypedArrays were added later in ES6).",
    "explanation": "Allocates off-heap raw memory for high-performance network sockets and file I/O.",
    "interviewAnswer": "A Buffer represents a fixed-length chunk of raw binary memory allocated outside the V8 JavaScript heap (using raw C++ malloc). Node.js introduced Buffers early on because server runtimes must handle raw binary TCP network streams, file systems, and image data, and ECMAScript at the time had only text strings and no native binary data types (TypedArrays were added later in ES6). Allocates off-heap raw memory for high-performance network sockets and file I/O.",
    "importantPoints": [
      "A Buffer represents a fixed-length chunk of raw binary memory allocated outside the V8 JavaScript heap (using raw C++ malloc). Node.js introduced Buffers early on because server runtimes must handle raw binary TCP network streams, file systems, and image data, and ECMAScript at the time had only text strings and no native binary data types (TypedArrays were added later in ES6).",
      "Allocates off-heap raw memory for high-performance network sockets and file I/O."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "buffers",
      "binary",
      "memory",
      "v8"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the critical difference between Buffer.alloc() and Buffer.allocUnsafe() in Node.js?",
    "answer": "`Buffer.alloc(size)` allocates memory and initializes (zeros-out) every byte with `0`, preventing information leakage. `Buffer.allocUnsafe(size)` allocates raw memory WITHOUT zeroing it out. It is significantly faster because it avoids writing zeros across the buffer, but the allocated memory may contain old sensitive data (passwords, TLS keys, database records) from previously freed memory.",
    "explanation": "alloc zeroes memory (safe); allocUnsafe leaves uninitialized memory (fast, but security risk if exposed).",
    "interviewAnswer": "`Buffer.alloc(size)` allocates memory and initializes (zeros-out) every byte with `0`, preventing information leakage. `Buffer.allocUnsafe(size)` allocates raw memory WITHOUT zeroing it out. It is significantly faster because it avoids writing zeros across the buffer, but the allocated memory may contain old sensitive data (passwords, TLS keys, database records) from previously freed memory. alloc zeroes memory (safe); allocUnsafe leaves uninitialized memory (fast, but security risk if exposed).",
    "importantPoints": [
      "`Buffer.alloc(size)` allocates memory and initializes (zeros-out) every byte with `0`, preventing information leakage. `Buffer.allocUnsafe(size)` allocates raw memory WITHOUT zeroing it out. It is significantly faster because it avoids writing zeros across the buffer, but the allocated memory may contain old sensitive data (passwords, TLS keys, database records) from previously freed memory.",
      "alloc zeroes memory (safe); allocUnsafe leaves uninitialized memory (fast, but security risk if exposed)."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Security",
    "isImportant": true,
    "tags": [
      "nodejs",
      "buffers",
      "alloc",
      "allocUnsafe",
      "security"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "Why was `new Buffer(size)` deprecated in Node.js, and what security vulnerability did it introduce?",
    "answer": "`new Buffer(arg)` overloaded behavior based on the argument type. If passed a number (`new Buffer(100)`), it acted like `allocUnsafe`, returning uninitialized memory. If passed user-supplied input (e.g. an API accepting `{ size: 100 }`), an attacker could pass a number instead of a string to read uninitialized server RAM, leaking passwords and private keys. Replaced by explicit `Buffer.alloc()`, `Buffer.allocUnsafe()`, and `Buffer.from()`.",
    "explanation": "Overloaded constructor caused remote memory exposure vulnerabilities (CVE-2018-7166).",
    "interviewAnswer": "`new Buffer(arg)` overloaded behavior based on the argument type. If passed a number (`new Buffer(100)`), it acted like `allocUnsafe`, returning uninitialized memory. If passed user-supplied input (e.g. an API accepting `{ size: 100 }`), an attacker could pass a number instead of a string to read uninitialized server RAM, leaking passwords and private keys. Replaced by explicit `Buffer.alloc()`, `Buffer.allocUnsafe()`, and `Buffer.from()`. Overloaded constructor caused remote memory exposure vulnerabilities (CVE-2018-7166).",
    "importantPoints": [
      "`new Buffer(arg)` overloaded behavior based on the argument type. If passed a number (`new Buffer(100)`), it acted like `allocUnsafe`, returning uninitialized memory. If passed user-supplied input (e.g. an API accepting `{ size: 100 }`), an attacker could pass a number instead of a string to read uninitialized server RAM, leaking passwords and private keys. Replaced by explicit `Buffer.alloc()`, `Buffer.allocUnsafe()`, and `Buffer.from()`.",
      "Overloaded constructor caused remote memory exposure vulnerabilities (CVE-2018-7166)."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Security",
    "isImportant": true,
    "tags": [
      "nodejs",
      "buffers",
      "security",
      "cve",
      "deprecation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "How does Buffer Pooling work in Node.js via Buffer.poolSize (8KB)?",
    "answer": "To avoid the high overhead of repeatedly making C++ `malloc` syscalls for small buffers, Node.js pre-allocates an internal 8KB slab of memory (`Buffer.poolSize = 8192`). When `Buffer.allocUnsafe()` or `Buffer.from()` is called for sizes under `Buffer.poolSize >>> 1` (4KB), Node slices a piece from this pre-allocated pool instead of making a new system allocation.",
    "explanation": "Small buffers (<4KB) slice memory from a shared 8KB pre-allocated pool to eliminate malloc syscalls.",
    "interviewAnswer": "To avoid the high overhead of repeatedly making C++ `malloc` syscalls for small buffers, Node.js pre-allocates an internal 8KB slab of memory (`Buffer.poolSize = 8192`). When `Buffer.allocUnsafe()` or `Buffer.from()` is called for sizes under `Buffer.poolSize >>> 1` (4KB), Node slices a piece from this pre-allocated pool instead of making a new system allocation. Small buffers (<4KB) slice memory from a shared 8KB pre-allocated pool to eliminate malloc syscalls.",
    "importantPoints": [
      "To avoid the high overhead of repeatedly making C++ `malloc` syscalls for small buffers, Node.js pre-allocates an internal 8KB slab of memory (`Buffer.poolSize = 8192`). When `Buffer.allocUnsafe()` or `Buffer.from()` is called for sizes under `Buffer.poolSize >>> 1` (4KB), Node slices a piece from this pre-allocated pool instead of making a new system allocation.",
      "Small buffers (<4KB) slice memory from a shared 8KB pre-allocated pool to eliminate malloc syscalls."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "nodejs",
      "buffers",
      "buffer-pooling",
      "internals",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "How can small Buffers allocated from the Buffer Pool cause unexpected memory leaks?",
    "answer": "Because small Buffers (<4KB) share an underlying 8KB `ArrayBuffer` slab, retaining a reference to even a tiny 10-byte buffer slice in a cache or closure keeps the entire parent 8KB slab alive in memory, preventing the Garbage Collector from freeing the remaining 8,182 bytes. Fix by calling `Uint8Array.prototype.slice()` or copying to an un-pooled buffer.",
    "explanation": "Retaining a tiny pooled buffer slice prevents the entire 8KB parent slab from being garbage collected.",
    "interviewAnswer": "Because small Buffers (<4KB) share an underlying 8KB `ArrayBuffer` slab, retaining a reference to even a tiny 10-byte buffer slice in a cache or closure keeps the entire parent 8KB slab alive in memory, preventing the Garbage Collector from freeing the remaining 8,182 bytes. Fix by calling `Uint8Array.prototype.slice()` or copying to an un-pooled buffer. Retaining a tiny pooled buffer slice prevents the entire 8KB parent slab from being garbage collected.",
    "importantPoints": [
      "Because small Buffers (<4KB) share an underlying 8KB `ArrayBuffer` slab, retaining a reference to even a tiny 10-byte buffer slice in a cache or closure keeps the entire parent 8KB slab alive in memory, preventing the Garbage Collector from freeing the remaining 8,182 bytes. Fix by calling `Uint8Array.prototype.slice()` or copying to an un-pooled buffer.",
      "Retaining a tiny pooled buffer slice prevents the entire 8KB parent slab from being garbage collected."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "nodejs",
      "buffers",
      "memory-leaks",
      "buffer-pooling",
      "debugging"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the difference between buffer.slice() / buffer.subarray() and buffer.copy()?",
    "answer": "`buffer.subarray()` (and legacy `buffer.slice()`) returns a new Buffer view that shares the **exact same memory** as the original buffer; mutating the subarray mutates the original buffer. `buffer.copy(target)` or `Buffer.from(buf)` physically copies the bytes to an independent memory location.",
    "explanation": "subarray shares the memory reference; copy duplicates the physical bytes.",
    "interviewAnswer": "`buffer.subarray()` (and legacy `buffer.slice()`) returns a new Buffer view that shares the **exact same memory** as the original buffer; mutating the subarray mutates the original buffer. `buffer.copy(target)` or `Buffer.from(buf)` physically copies the bytes to an independent memory location. subarray shares the memory reference; copy duplicates the physical bytes.",
    "importantPoints": [
      "`buffer.subarray()` (and legacy `buffer.slice()`) returns a new Buffer view that shares the **exact same memory** as the original buffer; mutating the subarray mutates the original buffer. `buffer.copy(target)` or `Buffer.from(buf)` physically copies the bytes to an independent memory location.",
      "subarray shares the memory reference; copy duplicates the physical bytes."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "buffers",
      "subarray",
      "copy",
      "memory"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the output of: const a = Buffer.from([1, 2, 3]); const b = a.subarray(0, 2); b[0] = 99; console.log(a[0]);?",
    "answer": "Outputs 99. `subarray()` creates a view referencing the exact same underlying memory. Mutating `b[0]` modifies `a[0]` directly.",
    "explanation": "subarray does not copy memory; it creates an offset view over the original buffer.",
    "interviewAnswer": "Outputs 99. `subarray()` creates a view referencing the exact same underlying memory. Mutating `b[0]` modifies `a[0]` directly. subarray does not copy memory; it creates an offset view over the original buffer.",
    "importantPoints": [
      "Outputs 99. `subarray()` creates a view referencing the exact same underlying memory. Mutating `b[0]` modifies `a[0]` directly.",
      "subarray does not copy memory; it creates an offset view over the original buffer."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "nodejs",
      "output-prediction",
      "buffers",
      "subarray"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the difference between string.length and Buffer.byteLength(str) in UTF-8 strings?",
    "answer": "`string.length` counts the number of UTF-16 code units in the string. `Buffer.byteLength(str, \"utf8\")` returns the actual number of raw bytes required to encode the string in UTF-8. For ASCII, they match. For multi-byte characters (emojis, Chinese characters, accents), `Buffer.byteLength` is much larger (e.g. emoji `😊` has length 2 in UTF-16, but occupies 4 bytes in UTF-8).",
    "explanation": "Buffer.byteLength must always be used for HTTP Content-Length headers, never string.length.",
    "interviewAnswer": "`string.length` counts the number of UTF-16 code units in the string. `Buffer.byteLength(str, \"utf8\")` returns the actual number of raw bytes required to encode the string in UTF-8. For ASCII, they match. For multi-byte characters (emojis, Chinese characters, accents), `Buffer.byteLength` is much larger (e.g. emoji `😊` has length 2 in UTF-16, but occupies 4 bytes in UTF-8). Buffer.byteLength must always be used for HTTP Content-Length headers, never string.length.",
    "importantPoints": [
      "`string.length` counts the number of UTF-16 code units in the string. `Buffer.byteLength(str, \"utf8\")` returns the actual number of raw bytes required to encode the string in UTF-8. For ASCII, they match. For multi-byte characters (emojis, Chinese characters, accents), `Buffer.byteLength` is much larger (e.g. emoji `😊` has length 2 in UTF-16, but occupies 4 bytes in UTF-8).",
      "Buffer.byteLength must always be used for HTTP Content-Length headers, never string.length."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "buffers",
      "byteLength",
      "utf8",
      "content-length"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What disaster happens if you set HTTP `Content-Length` header using `str.length` instead of `Buffer.byteLength(str)`?",
    "answer": "If `str` contains multi-byte characters (e.g. UTF-8 accents or emojis), `str.length` is smaller than the actual byte count. The HTTP response will truncate the message body prematurely, cutting off closing JSON brackets or HTML tags. If `str.length` were larger, the client socket would hang waiting for missing bytes until a network timeout occurs.",
    "explanation": "Content-Length specifies byte count, not character count; truncates payloads or hangs sockets.",
    "interviewAnswer": "If `str` contains multi-byte characters (e.g. UTF-8 accents or emojis), `str.length` is smaller than the actual byte count. The HTTP response will truncate the message body prematurely, cutting off closing JSON brackets or HTML tags. If `str.length` were larger, the client socket would hang waiting for missing bytes until a network timeout occurs. Content-Length specifies byte count, not character count; truncates payloads or hangs sockets.",
    "importantPoints": [
      "If `str` contains multi-byte characters (e.g. UTF-8 accents or emojis), `str.length` is smaller than the actual byte count. The HTTP response will truncate the message body prematurely, cutting off closing JSON brackets or HTML tags. If `str.length` were larger, the client socket would hang waiting for missing bytes until a network timeout occurs.",
      "Content-Length specifies byte count, not character count; truncates payloads or hangs sockets."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "nodejs",
      "http",
      "buffers",
      "content-length",
      "gotcha"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What character encodings are supported natively by Node.js Buffers?",
    "answer": "Native encodings: `\"utf8\"` (default), `\"utf16le\"` / `\"ucs2\"`, `\"latin1\"` / `\"binary\"`, `\"base64\"`, `\"base64url\"`, `\"hex\"`, and `\"ascii\"`. Common encodings like UTF-7, GBK, or Big5 are NOT supported natively and require libraries like `iconv-lite`.",
    "explanation": "Standard binary encodings include utf8, base64, base64url, hex, latin1, and ascii.",
    "interviewAnswer": "Native encodings: `\"utf8\"` (default), `\"utf16le\"` / `\"ucs2\"`, `\"latin1\"` / `\"binary\"`, `\"base64\"`, `\"base64url\"`, `\"hex\"`, and `\"ascii\"`. Common encodings like UTF-7, GBK, or Big5 are NOT supported natively and require libraries like `iconv-lite`. Standard binary encodings include utf8, base64, base64url, hex, latin1, and ascii.",
    "importantPoints": [
      "Native encodings: `\"utf8\"` (default), `\"utf16le\"` / `\"ucs2\"`, `\"latin1\"` / `\"binary\"`, `\"base64\"`, `\"base64url\"`, `\"hex\"`, and `\"ascii\"`. Common encodings like UTF-7, GBK, or Big5 are NOT supported natively and require libraries like `iconv-lite`.",
      "Standard binary encodings include utf8, base64, base64url, hex, latin1, and ascii."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "buffers",
      "encodings",
      "base64",
      "hex"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "How do you convert a Buffer to a Base64 string and back to a Buffer in Node.js?",
    "answer": "Buffer to Base64: `const base64 = buf.toString(\"base64\");`. Base64 to Buffer: `const buf = Buffer.from(base64, \"base64\");`. For URLs, modern Node.js also supports `\"base64url\"` which replaces `+` with `-` and `/` with `_` and removes `=` padding.",
    "explanation": "toString(\"base64\") converts to base64; Buffer.from(str, \"base64\") reconstructs bytes.",
    "interviewAnswer": "Buffer to Base64: `const base64 = buf.toString(\"base64\");`. Base64 to Buffer: `const buf = Buffer.from(base64, \"base64\");`. For URLs, modern Node.js also supports `\"base64url\"` which replaces `+` with `-` and `/` with `_` and removes `=` padding. toString(\"base64\") converts to base64; Buffer.from(str, \"base64\") reconstructs bytes.",
    "importantPoints": [
      "Buffer to Base64: `const base64 = buf.toString(\"base64\");`. Base64 to Buffer: `const buf = Buffer.from(base64, \"base64\");`. For URLs, modern Node.js also supports `\"base64url\"` which replaces `+` with `-` and `/` with `_` and removes `=` padding.",
      "toString(\"base64\") converts to base64; Buffer.from(str, \"base64\") reconstructs bytes."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "nodejs",
      "buffers",
      "base64",
      "encoding",
      "coding"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the output of: const buf = Buffer.alloc(4); buf.writeUInt32BE(0x12345678, 0); console.log(buf.toString(\"hex\"));?",
    "answer": "Outputs `\"12345678\"`. `writeUInt32BE` writes a 32-bit unsigned integer in Big-Endian order (most significant byte first: 0x12, 0x34, 0x56, 0x78). Hex output prints each byte consecutively.",
    "explanation": "Big-Endian writes bytes in order of most to least significant.",
    "interviewAnswer": "Outputs `\"12345678\"`. `writeUInt32BE` writes a 32-bit unsigned integer in Big-Endian order (most significant byte first: 0x12, 0x34, 0x56, 0x78). Hex output prints each byte consecutively. Big-Endian writes bytes in order of most to least significant.",
    "importantPoints": [
      "Outputs `\"12345678\"`. `writeUInt32BE` writes a 32-bit unsigned integer in Big-Endian order (most significant byte first: 0x12, 0x34, 0x56, 0x78). Hex output prints each byte consecutively.",
      "Big-Endian writes bytes in order of most to least significant."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "nodejs",
      "output-prediction",
      "buffers",
      "endianness",
      "hex"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the difference between Buffer.concat() and manually pushing chunks into an array?",
    "answer": "`Buffer.concat(listOfBuffers, [totalLength])` allocates a single contiguous memory buffer and copies the bytes from all listed buffers into it. Passing `totalLength` upfront avoids calculating the sum of lengths, significantly speeding up concatenation.",
    "explanation": "Buffer.concat merges multiple chunks into one contiguous buffer; totalLength parameter optimizes speed.",
    "interviewAnswer": "`Buffer.concat(listOfBuffers, [totalLength])` allocates a single contiguous memory buffer and copies the bytes from all listed buffers into it. Passing `totalLength` upfront avoids calculating the sum of lengths, significantly speeding up concatenation. Buffer.concat merges multiple chunks into one contiguous buffer; totalLength parameter optimizes speed.",
    "importantPoints": [
      "`Buffer.concat(listOfBuffers, [totalLength])` allocates a single contiguous memory buffer and copies the bytes from all listed buffers into it. Passing `totalLength` upfront avoids calculating the sum of lengths, significantly speeding up concatenation.",
      "Buffer.concat merges multiple chunks into one contiguous buffer; totalLength parameter optimizes speed."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "nodejs",
      "buffers",
      "concat",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the purpose of the `string_decoder` module when decoding streaming Buffer chunks?",
    "answer": "Multi-byte UTF-8 characters can be split across streaming chunk boundaries (e.g. a 3-byte Chinese character with 2 bytes in chunk A and 1 byte in chunk B). Calling `chunk.toString(\"utf8\")` produces corrupt replacement characters (``). `StringDecoder` buffers incomplete multi-byte sequences and only emits completed characters when the next chunk arrives.",
    "explanation": "Prevents corrupted characters when multi-byte UTF-8 sequences are split across buffer stream chunks.",
    "interviewAnswer": "Multi-byte UTF-8 characters can be split across streaming chunk boundaries (e.g. a 3-byte Chinese character with 2 bytes in chunk A and 1 byte in chunk B). Calling `chunk.toString(\"utf8\")` produces corrupt replacement characters (``). `StringDecoder` buffers incomplete multi-byte sequences and only emits completed characters when the next chunk arrives. Prevents corrupted characters when multi-byte UTF-8 sequences are split across buffer stream chunks.",
    "importantPoints": [
      "Multi-byte UTF-8 characters can be split across streaming chunk boundaries (e.g. a 3-byte Chinese character with 2 bytes in chunk A and 1 byte in chunk B). Calling `chunk.toString(\"utf8\")` produces corrupt replacement characters (``). `StringDecoder` buffers incomplete multi-byte sequences and only emits completed characters when the next chunk arrives.",
      "Prevents corrupted characters when multi-byte UTF-8 sequences are split across buffer stream chunks."
    ],
    "preparationLevels": [
      "intermediate",
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "string_decoder",
      "buffers",
      "utf8",
      "streaming"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "How does Buffer.isBuffer() work, and how does Buffer inherit from JavaScript Uint8Array?",
    "answer": "`Buffer.isBuffer(obj)` returns true if `obj` is an instance of Buffer. In modern Node.js, `Buffer.prototype` extends JavaScript native `Uint8Array.prototype`. This means all standard TypedArray methods (`map`, `filter`, `subarray`, `indexOf`) work directly on Buffers, and Buffers can be passed to Web APIs accepting Uint8Array.",
    "explanation": "Buffer is an enhanced subclass of Uint8Array with Node-specific encoding and binary methods.",
    "interviewAnswer": "`Buffer.isBuffer(obj)` returns true if `obj` is an instance of Buffer. In modern Node.js, `Buffer.prototype` extends JavaScript native `Uint8Array.prototype`. This means all standard TypedArray methods (`map`, `filter`, `subarray`, `indexOf`) work directly on Buffers, and Buffers can be passed to Web APIs accepting Uint8Array. Buffer is an enhanced subclass of Uint8Array with Node-specific encoding and binary methods.",
    "importantPoints": [
      "`Buffer.isBuffer(obj)` returns true if `obj` is an instance of Buffer. In modern Node.js, `Buffer.prototype` extends JavaScript native `Uint8Array.prototype`. This means all standard TypedArray methods (`map`, `filter`, `subarray`, `indexOf`) work directly on Buffers, and Buffers can be passed to Web APIs accepting Uint8Array.",
      "Buffer is an enhanced subclass of Uint8Array with Node-specific encoding and binary methods."
    ],
    "preparationLevels": [
      "junior",
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "buffers",
      "uint8array",
      "typedarray"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the output of: const b = Buffer.from(\"abc\"); console.log(Array.isArray(b), b instanceof Uint8Array);?",
    "answer": "Outputs false, true. Buffers are not standard JavaScript Arrays, but they are direct subclasses of `Uint8Array`.",
    "explanation": "Buffer extends Uint8Array; it is not a standard Array.",
    "interviewAnswer": "Outputs false, true. Buffers are not standard JavaScript Arrays, but they are direct subclasses of `Uint8Array`. Buffer extends Uint8Array; it is not a standard Array.",
    "importantPoints": [
      "Outputs false, true. Buffers are not standard JavaScript Arrays, but they are direct subclasses of `Uint8Array`.",
      "Buffer extends Uint8Array; it is not a standard Array."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "nodejs",
      "output-prediction",
      "buffers",
      "uint8array"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the difference between Buffer.compare() and buffer.equals()?",
    "answer": "`buffer.equals(other)` returns a boolean indicating whether two buffers contain identical bytes. `Buffer.compare(buf1, buf2)` returns `-1`, `0`, or `1` based on lexicographical byte order comparison, designed for sorting arrays of Buffers with `bufArray.sort(Buffer.compare)`.",
    "explanation": "equals checks equality; compare provides sort ordering (-1, 0, 1).",
    "interviewAnswer": "`buffer.equals(other)` returns a boolean indicating whether two buffers contain identical bytes. `Buffer.compare(buf1, buf2)` returns `-1`, `0`, or `1` based on lexicographical byte order comparison, designed for sorting arrays of Buffers with `bufArray.sort(Buffer.compare)`. equals checks equality; compare provides sort ordering (-1, 0, 1).",
    "importantPoints": [
      "`buffer.equals(other)` returns a boolean indicating whether two buffers contain identical bytes. `Buffer.compare(buf1, buf2)` returns `-1`, `0`, or `1` based on lexicographical byte order comparison, designed for sorting arrays of Buffers with `bufArray.sort(Buffer.compare)`.",
      "equals checks equality; compare provides sort ordering (-1, 0, 1)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "buffers",
      "equals",
      "compare"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is a Timing Attack on string or buffer equality, and how does crypto.timingSafeEqual() prevent it?",
    "answer": "Standard equality (`===` or `buffer.equals()`) returns `false` as soon as the first non-matching byte is encountered. An attacker can measure response time variations in nanoseconds to infer secrets (passwords, HMAC signatures, API keys) byte-by-byte. `crypto.timingSafeEqual(buf1, buf2)` executes in constant time regardless of where mismatches occur.",
    "explanation": "Compares buffers in constant time to prevent side-channel timing attacks on signatures and tokens.",
    "interviewAnswer": "Standard equality (`===` or `buffer.equals()`) returns `false` as soon as the first non-matching byte is encountered. An attacker can measure response time variations in nanoseconds to infer secrets (passwords, HMAC signatures, API keys) byte-by-byte. `crypto.timingSafeEqual(buf1, buf2)` executes in constant time regardless of where mismatches occur. Compares buffers in constant time to prevent side-channel timing attacks on signatures and tokens.",
    "importantPoints": [
      "Standard equality (`===` or `buffer.equals()`) returns `false` as soon as the first non-matching byte is encountered. An attacker can measure response time variations in nanoseconds to infer secrets (passwords, HMAC signatures, API keys) byte-by-byte. `crypto.timingSafeEqual(buf1, buf2)` executes in constant time regardless of where mismatches occur.",
      "Compares buffers in constant time to prevent side-channel timing attacks on signatures and tokens."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Security",
    "isImportant": true,
    "tags": [
      "nodejs",
      "crypto",
      "timing-attack",
      "timingSafeEqual",
      "security"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the output of: const b = Buffer.from([256, 257, -1]); console.log([...b]);?",
    "answer": "Outputs `[0, 1, 255]`. Because Buffers store 8-bit unsigned integers (0 to 255), values wrap around modulo 256 (`x & 0xFF`). `256 % 256 = 0`, `257 % 256 = 1`, and `-1` wraps to `255`.",
    "explanation": "Buffer entries are clamped to 8-bit unsigned integer range 0-255.",
    "interviewAnswer": "Outputs `[0, 1, 255]`. Because Buffers store 8-bit unsigned integers (0 to 255), values wrap around modulo 256 (`x & 0xFF`). `256 % 256 = 0`, `257 % 256 = 1`, and `-1` wraps to `255`. Buffer entries are clamped to 8-bit unsigned integer range 0-255.",
    "importantPoints": [
      "Outputs `[0, 1, 255]`. Because Buffers store 8-bit unsigned integers (0 to 255), values wrap around modulo 256 (`x & 0xFF`). `256 % 256 = 0`, `257 % 256 = 1`, and `-1` wraps to `255`.",
      "Buffer entries are clamped to 8-bit unsigned integer range 0-255."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "nodejs",
      "output-prediction",
      "buffers",
      "overflow"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the maximum size of a Buffer in 64-bit Node.js architectures via buffer.constants.MAX_LENGTH?",
    "answer": "On 64-bit architectures, `buffer.constants.MAX_LENGTH` is 4GB (`4,294,967,296` bytes; on 32-bit systems it is 2GB - 1). Attempting to allocate a single Buffer exceeding `MAX_LENGTH` throws a `RangeError [ERR_BUFFER_TOO_LARGE]`.",
    "explanation": "Max single buffer size is 4GB on 64-bit Node.js; throws ERR_BUFFER_TOO_LARGE if exceeded.",
    "interviewAnswer": "On 64-bit architectures, `buffer.constants.MAX_LENGTH` is 4GB (`4,294,967,296` bytes; on 32-bit systems it is 2GB - 1). Attempting to allocate a single Buffer exceeding `MAX_LENGTH` throws a `RangeError [ERR_BUFFER_TOO_LARGE]`. Max single buffer size is 4GB on 64-bit Node.js; throws ERR_BUFFER_TOO_LARGE if exceeded.",
    "importantPoints": [
      "On 64-bit architectures, `buffer.constants.MAX_LENGTH` is 4GB (`4,294,967,296` bytes; on 32-bit systems it is 2GB - 1). Attempting to allocate a single Buffer exceeding `MAX_LENGTH` throws a `RangeError [ERR_BUFFER_TOO_LARGE]`.",
      "Max single buffer size is 4GB on 64-bit Node.js; throws ERR_BUFFER_TOO_LARGE if exceeded."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "buffers",
      "max-length",
      "limits"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is buffer.fill() and when should it be used with allocUnsafe()?",
    "answer": "`buf.fill(val, [offset], [end], [encoding])` writes `val` across the specified byte range. If you use `Buffer.allocUnsafe()` for performance and then populate part of it, calling `buf.fill(0)` on any unused trailing bytes ensures uninitialized memory is never leaked to consumers.",
    "explanation": "Fills buffer with a specified byte pattern; used to zero-out unused allocUnsafe trailing segments.",
    "interviewAnswer": "`buf.fill(val, [offset], [end], [encoding])` writes `val` across the specified byte range. If you use `Buffer.allocUnsafe()` for performance and then populate part of it, calling `buf.fill(0)` on any unused trailing bytes ensures uninitialized memory is never leaked to consumers. Fills buffer with a specified byte pattern; used to zero-out unused allocUnsafe trailing segments.",
    "importantPoints": [
      "`buf.fill(val, [offset], [end], [encoding])` writes `val` across the specified byte range. If you use `Buffer.allocUnsafe()` for performance and then populate part of it, calling `buf.fill(0)` on any unused trailing bytes ensures uninitialized memory is never leaked to consumers.",
      "Fills buffer with a specified byte pattern; used to zero-out unused allocUnsafe trailing segments."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "buffers",
      "fill",
      "memory-management"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "How does Buffer.transcode() convert character encodings between buffers in Node.js?",
    "answer": "`const { transcode } = require(\"buffer\"); const utf8Buf = transcode(cp1251Buf, \"cp1251\", \"utf8\");`. It transcodes a buffer from one encoding to another directly at the C++ layer without round-tripping through JavaScript strings, optimizing performance.",
    "explanation": "Transcodes character encodings directly in C++ without intermediate JavaScript strings.",
    "interviewAnswer": "`const { transcode } = require(\"buffer\"); const utf8Buf = transcode(cp1251Buf, \"cp1251\", \"utf8\");`. It transcodes a buffer from one encoding to another directly at the C++ layer without round-tripping through JavaScript strings, optimizing performance. Transcodes character encodings directly in C++ without intermediate JavaScript strings.",
    "importantPoints": [
      "`const { transcode } = require(\"buffer\"); const utf8Buf = transcode(cp1251Buf, \"cp1251\", \"utf8\");`. It transcodes a buffer from one encoding to another directly at the C++ layer without round-tripping through JavaScript strings, optimizing performance.",
      "Transcodes character encodings directly in C++ without intermediate JavaScript strings."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "buffer-transcode",
      "encodings",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the output of: const b = Buffer.alloc(2); b.writeInt16LE(-10, 0); console.log(b.readInt16LE(0));?",
    "answer": "Outputs -10. Writing a signed 16-bit integer using two's complement binary and reading it back with the matching endianness preserves the signed negative number.",
    "explanation": "Signed integer methods read and write negative numbers via two's complement representation.",
    "interviewAnswer": "Outputs -10. Writing a signed 16-bit integer using two's complement binary and reading it back with the matching endianness preserves the signed negative number. Signed integer methods read and write negative numbers via two's complement representation.",
    "importantPoints": [
      "Outputs -10. Writing a signed 16-bit integer using two's complement binary and reading it back with the matching endianness preserves the signed negative number.",
      "Signed integer methods read and write negative numbers via two's complement representation."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "nodejs",
      "output-prediction",
      "buffers",
      "signed-integers"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "Why should you avoid using JSON.stringify() on large Buffer instances?",
    "answer": "`JSON.stringify(buffer)` serializes the buffer into `{ type: \"Buffer\", data: [byte0, byte1, ...] }`, converting every single byte into an array element number string. A 10MB buffer balloons into a 40MB+ JSON string and creates 10,000,000 V8 heap numbers, leading to massive memory bloat and CPU spikes. Use Base64 or binary streams instead.",
    "explanation": "Serializing buffers to JSON expands memory 4x-5x and freezes CPU; use base64 or streams.",
    "interviewAnswer": "`JSON.stringify(buffer)` serializes the buffer into `{ type: \"Buffer\", data: [byte0, byte1, ...] }`, converting every single byte into an array element number string. A 10MB buffer balloons into a 40MB+ JSON string and creates 10,000,000 V8 heap numbers, leading to massive memory bloat and CPU spikes. Use Base64 or binary streams instead. Serializing buffers to JSON expands memory 4x-5x and freezes CPU; use base64 or streams.",
    "importantPoints": [
      "`JSON.stringify(buffer)` serializes the buffer into `{ type: \"Buffer\", data: [byte0, byte1, ...] }`, converting every single byte into an array element number string. A 10MB buffer balloons into a 40MB+ JSON string and creates 10,000,000 V8 heap numbers, leading to massive memory bloat and CPU spikes. Use Base64 or binary streams instead.",
      "Serializing buffers to JSON expands memory 4x-5x and freezes CPU; use base64 or streams."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "nodejs",
      "buffers",
      "json-stringify",
      "performance",
      "anti-patterns"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the difference between Buffer.from(arrayBuffer) and Buffer.from(array)?",
    "answer": "`Buffer.from(array)` (e.g. `[1, 2, 3]`) allocates new memory and copies the array elements. `Buffer.from(arrayBuffer, [offset], [length])` creates a Buffer view that **shares the exact same memory** as the underlying ArrayBuffer without copying.",
    "explanation": "ArrayBuffer sharing creates a zero-copy view; standard array creates a new physical copy.",
    "interviewAnswer": "`Buffer.from(array)` (e.g. `[1, 2, 3]`) allocates new memory and copies the array elements. `Buffer.from(arrayBuffer, [offset], [length])` creates a Buffer view that **shares the exact same memory** as the underlying ArrayBuffer without copying. ArrayBuffer sharing creates a zero-copy view; standard array creates a new physical copy.",
    "importantPoints": [
      "`Buffer.from(array)` (e.g. `[1, 2, 3]`) allocates new memory and copies the array elements. `Buffer.from(arrayBuffer, [offset], [length])` creates a Buffer view that **shares the exact same memory** as the underlying ArrayBuffer without copying.",
      "ArrayBuffer sharing creates a zero-copy view; standard array creates a new physical copy."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "nodejs",
      "buffers",
      "arraybuffer",
      "zero-copy"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the Blob object in modern Node.js, and how does it interoperate with Buffers?",
    "answer": "`Blob` (Binary Large Object) is an immutable representation of raw data standardized in HTML5 and available in Node 18+ (`node:buffer`). You can convert a Buffer to a Blob (`new Blob([buf])`) and convert a Blob back to a Buffer via `Buffer.from(await blob.arrayBuffer())`. Blobs are used in modern standard `fetch()` requests.",
    "explanation": "Standard immutable web binary format interoperating with Buffers and Fetch API.",
    "interviewAnswer": "`Blob` (Binary Large Object) is an immutable representation of raw data standardized in HTML5 and available in Node 18+ (`node:buffer`). You can convert a Buffer to a Blob (`new Blob([buf])`) and convert a Blob back to a Buffer via `Buffer.from(await blob.arrayBuffer())`. Blobs are used in modern standard `fetch()` requests. Standard immutable web binary format interoperating with Buffers and Fetch API.",
    "importantPoints": [
      "`Blob` (Binary Large Object) is an immutable representation of raw data standardized in HTML5 and available in Node 18+ (`node:buffer`). You can convert a Buffer to a Blob (`new Blob([buf])`) and convert a Blob back to a Buffer via `Buffer.from(await blob.arrayBuffer())`. Blobs are used in modern standard `fetch()` requests.",
      "Standard immutable web binary format interoperating with Buffers and Fetch API."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "blob",
      "buffers",
      "web-standards"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the output of: const b = Buffer.from(\"Node\"); console.log(b.toJSON());?",
    "answer": "Outputs `{ type: \"Buffer\", data: [ 78, 111, 100, 101 ] }`. `78, 111, 100, 101` are the ASCII/UTF-8 byte codes for \"N\", \"o\", \"d\", \"e\".",
    "explanation": "toJSON converts Buffer into { type: \"Buffer\", data: number[] }.",
    "interviewAnswer": "Outputs `{ type: \"Buffer\", data: [ 78, 111, 100, 101 ] }`. `78, 111, 100, 101` are the ASCII/UTF-8 byte codes for \"N\", \"o\", \"d\", \"e\". toJSON converts Buffer into { type: \"Buffer\", data: number[] }.",
    "importantPoints": [
      "Outputs `{ type: \"Buffer\", data: [ 78, 111, 100, 101 ] }`. `78, 111, 100, 101` are the ASCII/UTF-8 byte codes for \"N\", \"o\", \"d\", \"e\".",
      "toJSON converts Buffer into { type: \"Buffer\", data: number[] }."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "nodejs",
      "output-prediction",
      "buffers",
      "toJSON"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "How do you inspect whether a buffer is shared or detached in Node.js?",
    "answer": "Inspect `buf.buffer` (which references the underlying `ArrayBuffer`). If `buf.buffer.byteLength === 0`, the buffer has been detached (neutered, e.g. via worker thread transfer). `buf.byteOffset` shows the start offset inside `buf.buffer`.",
    "explanation": "buf.buffer references underlying ArrayBuffer; byteLength === 0 indicates detached memory.",
    "interviewAnswer": "Inspect `buf.buffer` (which references the underlying `ArrayBuffer`). If `buf.buffer.byteLength === 0`, the buffer has been detached (neutered, e.g. via worker thread transfer). `buf.byteOffset` shows the start offset inside `buf.buffer`. buf.buffer references underlying ArrayBuffer; byteLength === 0 indicates detached memory.",
    "importantPoints": [
      "Inspect `buf.buffer` (which references the underlying `ArrayBuffer`). If `buf.buffer.byteLength === 0`, the buffer has been detached (neutered, e.g. via worker thread transfer). `buf.byteOffset` shows the start offset inside `buf.buffer`.",
      "buf.buffer references underlying ArrayBuffer; byteLength === 0 indicates detached memory."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "buffers",
      "detached-buffer",
      "arraybuffer"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "What is the purpose of buffer.swap16(), buffer.swap32(), and buffer.swap64()?",
    "answer": "They swap byte ordering in-place (converting Little-Endian to Big-Endian or vice versa) for 16-bit, 32-bit, or 64-bit integer values. This mutates the buffer in-place at native C++ speed, useful for low-level network protocol transformations.",
    "explanation": "Mutates byte endianness in-place at native speed without reallocating buffers.",
    "interviewAnswer": "They swap byte ordering in-place (converting Little-Endian to Big-Endian or vice versa) for 16-bit, 32-bit, or 64-bit integer values. This mutates the buffer in-place at native C++ speed, useful for low-level network protocol transformations. Mutates byte endianness in-place at native speed without reallocating buffers.",
    "importantPoints": [
      "They swap byte ordering in-place (converting Little-Endian to Big-Endian or vice versa) for 16-bit, 32-bit, or 64-bit integer values. This mutates the buffer in-place at native C++ speed, useful for low-level network protocol transformations.",
      "Mutates byte endianness in-place at native speed without reallocating buffers."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "nodejs",
      "buffers",
      "endianness",
      "swap",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "buffers",
    "question": "How does Buffer allocation impact the V8 Garbage Collection cycles?",
    "answer": "Because Buffer byte data is allocated off-heap via C++ malloc, it does not occupy space in the V8 Young or Old Generation garbage collection spaces. However, the lightweight JS wrapper object resides on the V8 heap. V8 tracks external memory allocations, triggering GC cycles when external allocated memory (`process.memoryUsage().external`) exceeds thresholds.",
    "explanation": "Bytes are off-heap; JS wrapper is on-heap; V8 triggers GC based on external memory pressure.",
    "interviewAnswer": "Because Buffer byte data is allocated off-heap via C++ malloc, it does not occupy space in the V8 Young or Old Generation garbage collection spaces. However, the lightweight JS wrapper object resides on the V8 heap. V8 tracks external memory allocations, triggering GC cycles when external allocated memory (`process.memoryUsage().external`) exceeds thresholds. Bytes are off-heap; JS wrapper is on-heap; V8 triggers GC based on external memory pressure.",
    "importantPoints": [
      "Because Buffer byte data is allocated off-heap via C++ malloc, it does not occupy space in the V8 Young or Old Generation garbage collection spaces. However, the lightweight JS wrapper object resides on the V8 heap. V8 tracks external memory allocations, triggering GC cycles when external allocated memory (`process.memoryUsage().external`) exceeds thresholds.",
      "Bytes are off-heap; JS wrapper is on-heap; V8 triggers GC based on external memory pressure."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "nodejs",
      "buffers",
      "v8",
      "garbage-collection",
      "memory-pressure"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
