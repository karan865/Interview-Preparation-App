import { SeedQuestion } from '../types';

export const nodeHttpQuestions: SeedQuestion[] = [
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How does the built-in 'http' module in Node.js handle incoming HTTP requests and responses?",
    "title": "How does the built-in 'http' module in Node.js handle incoming HTTP requests and responses?",
    "answer": "http.createServer() listens on a TCP socket, parsing incoming HTTP bytes into an http.IncomingMessage (Readable stream) and providing an http.ServerResponse (Writable stream).",
    "explanation": "Node's http module uses an internal HTTP parser written in C (llhttp) integrated with libuv. When a TCP connection sends HTTP data, the parser extracts method, URL, and headers, then emits a 'request' event with req and res.",
    "interviewAnswer": "http.createServer() listens on a TCP socket, parsing incoming HTTP bytes into an http.IncomingMessage (Readable stream) and providing an http.ServerResponse (Writable stream). Node's http module uses an internal HTTP parser written in C (llhttp) integrated with libuv. When a TCP connection sends HTTP data, the parser extracts method, URL, and headers, then emits a 'request' event with req and res.",
    "importantPoints": [
      "Built on top of the net module (TCP sockets)",
      "Uses llhttp C parser for maximum HTTP parsing efficiency",
      "req is an http.IncomingMessage (Readable stream)",
      "res is an http.ServerResponse (Writable stream)"
    ],
    "commonMistakes": [
      "Forgetting to call res.end(), leaving the client connection hanging indefinitely",
      "Attempting to read req body synchronously"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "nodejs",
      "http",
      "createServer",
      "IncomingMessage",
      "ServerResponse"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ status: 'ok' }));\n});\nserver.listen(3000);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "What causes 'ERR_HTTP_HEADERS_SENT' and how do you resolve it?",
    "title": "What causes 'ERR_HTTP_HEADERS_SENT' and how do you resolve it?",
    "answer": "'ERR_HTTP_HEADERS_SENT' occurs when application code attempts to set headers or call res.writeHead()/res.send() after headers have already been flushed to the client.",
    "explanation": "HTTP requires headers to be transmitted before the response body. Once headers are written to the socket, res.headersSent becomes true. Any subsequent attempt to modify headers or call res.redirect()/res.json() throws this error. It usually happens when missing returns allow multiple response attempts in a single request lifecycle.",
    "interviewAnswer": "'ERR_HTTP_HEADERS_SENT' occurs when application code attempts to set headers or call res.writeHead()/res.send() after headers have already been flushed to the client. HTTP requires headers to be transmitted before the response body. Once headers are written to the socket, res.headersSent becomes true. Any subsequent attempt to modify headers or call res.redirect()/res.json() throws this error. It usually happens when missing returns allow multiple response attempts in a single request lifecycle.",
    "importantPoints": [
      "HTTP headers must precede the body on the wire",
      "res.headersSent flag tracks if headers have been dispatched",
      "Commonly caused by missing 'return' statements before res.json() or next() in Express",
      "Also caused by unhandled error handlers executing after partial writes"
    ],
    "commonMistakes": [
      "Writing 'res.status(400).json(...)' without returning from the function",
      "Calling next(err) after sending a response in an async route"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "tags": [
      "nodejs",
      "http",
      "headers-sent",
      "debugging",
      "express",
      "troubleshooting"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "app.get('/user', (req, res) => {\n  if (!req.user) {\n    return res.status(401).json({ error: 'Unauthorized' });\n  }\n  return res.json({ user: req.user });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How does Node.js handle HTTP keep-alive and connection pooling with http.Agent?",
    "title": "How does Node.js handle HTTP keep-alive and connection pooling with http.Agent?",
    "answer": "http.Agent manages connection persistence and reuse for HTTP clients, reusing TCP sockets across multiple requests to reduce TLS/TCP handshake latency.",
    "explanation": "Setting keepAlive: true keeps TCP sockets open for subsequent requests to the same host:port. The agent manages maxSockets (maximum concurrent sockets per origin) and maxFreeSockets (maximum idle sockets kept open in pool).",
    "interviewAnswer": "http.Agent manages connection persistence and reuse for HTTP clients, reusing TCP sockets across multiple requests to reduce TLS/TCP handshake latency. Setting keepAlive: true keeps TCP sockets open for subsequent requests to the same host:port. The agent manages maxSockets (maximum concurrent sockets per origin) and maxFreeSockets (maximum idle sockets kept open in pool).",
    "importantPoints": [
      "Reduces latency by reusing TCP and TLS handshakes",
      "keepAlive: true keeps idle sockets open up to keepAliveMsecs",
      "maxSockets limits concurrency per origin to prevent socket starvation",
      "Node.js 19+ enables keepAlive: true by default on globalAgent"
    ],
    "commonMistakes": [
      "Default maxSockets in older Node versions was Infinity, causing socket exhaustion",
      "Leaving sockets open indefinitely without timeout, tying up load balancer resources"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "nodejs",
      "http",
      "http-agent",
      "keep-alive",
      "connection-pooling",
      "performance"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst agent = new http.Agent({ keepAlive: true, maxSockets: 100, timeout: 60000 });\nhttp.get('http://api.internal/data', { agent }, (res) => {});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How do you read the body of a POST request using raw Node.js 'http' without any frameworks?",
    "title": "How do you read the body of a POST request using raw Node.js 'http' without any frameworks?",
    "answer": "Listen to 'data' chunks on req (an IncomingMessage Readable stream), concatenate them into a Buffer array, and parse on the 'end' event.",
    "explanation": "req is a Readable stream emitting Buffer chunks as TCP packets arrive. To parse the body, accumulate chunks into an array. Once 'end' fires, Buffer.concat(chunks) produces the full payload. You must also enforce payload size limits to guard against Denial-of-Service attacks.",
    "interviewAnswer": "Listen to 'data' chunks on req (an IncomingMessage Readable stream), concatenate them into a Buffer array, and parse on the 'end' event. req is a Readable stream emitting Buffer chunks as TCP packets arrive. To parse the body, accumulate chunks into an array. Once 'end' fires, Buffer.concat(chunks) produces the full payload. You must also enforce payload size limits to guard against Denial-of-Service attacks.",
    "importantPoints": [
      "req is an IncomingMessage Readable stream",
      "Accumulate chunks into an array and call Buffer.concat on 'end'",
      "Enforce max payload limits to prevent memory exhaustion (DoS)",
      "Handle 'error' events on req to prevent crashes on truncated streams"
    ],
    "commonMistakes": [
      "Concatenating strings directly, corrupting multi-byte UTF-8 characters",
      "Failing to cap payload size, allowing malicious users to send gigabytes"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding",
    "tags": [
      "nodejs",
      "http",
      "request-body",
      "streams",
      "buffer",
      "security"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  if (req.method === 'POST') {\n    const chunks = [];\n    req.on('data', chunk => chunks.push(chunk));\n    req.on('end', () => {\n      const data = JSON.parse(Buffer.concat(chunks).toString());\n      res.writeHead(200, { 'Content-Type': 'application/json' });\n      res.end(JSON.stringify({ received: data }));\n    });\n  }\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How does Node.js support HTTP/2 and what are its key advantages over HTTP/1.1?",
    "title": "How does Node.js support HTTP/2 and what are its key advantages over HTTP/1.1?",
    "answer": "Node.js provides the 'http2' module supporting multiplexing multiple requests over a single TCP connection, binary framing, header compression (HPACK), and server push.",
    "explanation": "HTTP/2 splits communication into binary frames interleaved across a single TCP socket stream. The 'http2' module provides createSecureServer and connect methods to handle HTTP/2 natively.",
    "interviewAnswer": "Node.js provides the 'http2' module supporting multiplexing multiple requests over a single TCP connection, binary framing, header compression (HPACK), and server push. HTTP/2 splits communication into binary frames interleaved across a single TCP socket stream. The 'http2' module provides createSecureServer and connect methods to handle HTTP/2 natively.",
    "importantPoints": [
      "Single TCP connection with multiplexed concurrent bidirectional streams",
      "HPACK header compression saves bandwidth",
      "Binary framing layer replaces text-based HTTP/1.1 headers",
      "Requires TLS (ALPN negotiation) in browsers"
    ],
    "commonMistakes": [
      "TCP head-of-line blocking still exists at the transport layer if packet loss occurs",
      "Over-using server push, wasting client bandwidth"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "tags": [
      "nodejs",
      "http",
      "http2",
      "multiplexing",
      "hpack",
      "performance"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http2 from 'node:http2';\nimport fs from 'node:fs';\nconst server = http2.createSecureServer({\n  key: fs.readFileSync('server-key.pem'),\n  cert: fs.readFileSync('server-cert.pem')\n});\nserver.on('stream', (stream, headers) => {\n  stream.respond({ ':status': 200 });\n  stream.end('Hello HTTP/2');\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "What is the difference between res.write() and res.end() in Node.js HTTP?",
    "title": "What is the difference between res.write() and res.end() in Node.js HTTP?",
    "answer": "res.write() transmits a chunk of the response body and keeps the stream open for further writes; res.end() transmits optional final data and signals that the response is complete.",
    "explanation": "res is a Writable stream. res.write(chunk) sends a chunk with HTTP chunked transfer encoding if Content-Length was not set. res.end([chunk]) writes the final chunk, emits 'finish', closes the HTTP response stream, and flushes output to the TCP socket.",
    "interviewAnswer": "res.write() transmits a chunk of the response body and keeps the stream open for further writes; res.end() transmits optional final data and signals that the response is complete. res is a Writable stream. res.write(chunk) sends a chunk with HTTP chunked transfer encoding if Content-Length was not set. res.end([chunk]) writes the final chunk, emits 'finish', closes the HTTP response stream, and flushes output to the TCP socket.",
    "importantPoints": [
      "res.write can be called multiple times sequentially",
      "res.end must be called strictly once to conclude response",
      "res.write uses chunked transfer encoding when Content-Length is omitted",
      "Calling res.write after res.end throws ERR_STREAM_WRITE_AFTER_END"
    ],
    "commonMistakes": [
      "Calling res.write() without ever calling res.end(), keeping client hanging",
      "Passing non-Buffer / non-string types into res.write without serialization"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "nodejs",
      "http",
      "write",
      "end",
      "chunked-transfer",
      "streaming"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "res.writeHead(200, { 'Content-Type': 'text/event-stream' });\nres.write('data: ping\\n\\n');\n// res.end() called when client disconnects"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How do you implement Server-Sent Events (SSE) in a pure Node.js HTTP server?",
    "title": "How do you implement Server-Sent Events (SSE) in a pure Node.js HTTP server?",
    "answer": "Set headers 'Content-Type: text/event-stream', 'Cache-Control: no-cache', 'Connection: keep-alive', and write formatted events using res.write('data: ...\\n\\n').",
    "explanation": "SSE provides a lightweight, unidirectional server-to-client streaming protocol over standard HTTP. When the client disconnects, the server listens to req.on('close') to stop emitting events and prevent memory leaks.",
    "interviewAnswer": "Set headers 'Content-Type: text/event-stream', 'Cache-Control: no-cache', 'Connection: keep-alive', and write formatted events using res.write('data: ...\\n\\n'). SSE provides a lightweight, unidirectional server-to-client streaming protocol over standard HTTP. When the client disconnects, the server listens to req.on('close') to stop emitting events and prevent memory leaks.",
    "importantPoints": [
      "Unidirectional real-time protocol over standard HTTP",
      "Requires 'Content-Type: text/event-stream' and disabling cache",
      "Payload formatted as 'data: <message>\\n\\n'",
      "Must clean up interval or event listeners on req.on('close')"
    ],
    "commonMistakes": [
      "Forgetting double newlines '\\n\\n' required to terminate SSE event blocks",
      "Failing to clear intervals when client closes connection, leaking timers and memory"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding",
    "tags": [
      "nodejs",
      "http",
      "sse",
      "server-sent-events",
      "realtime",
      "streaming"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nhttp.createServer((req, res) => {\n  if (req.url === '/events') {\n    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', 'Connection': 'keep-alive' });\n    const timer = setInterval(() => res.write(`data: ${Date.now()}\\n\\n`), 1000);\n    req.on('close', () => { clearInterval(timer); res.end(); });\n  }\n}).listen(4000);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How do you protect a Node.js HTTP server against Slowloris attacks?",
    "title": "How do you protect a Node.js HTTP server against Slowloris attacks?",
    "answer": "Configure server timeouts (headersTimeout, requestTimeout, keepAliveTimeout) and enforce reverse proxy protection (Nginx/Cloudflare) to terminate slow headers.",
    "explanation": "Slowloris opens many TCP connections and transmits HTTP headers at extremely slow rates, never completing. Setting server.headersTimeout (e.g. 10s) and server.requestTimeout caps header receipt and total request duration.",
    "interviewAnswer": "Configure server timeouts (headersTimeout, requestTimeout, keepAliveTimeout) and enforce reverse proxy protection (Nginx/Cloudflare) to terminate slow headers. Slowloris opens many TCP connections and transmits HTTP headers at extremely slow rates, never completing. Setting server.headersTimeout (e.g. 10s) and server.requestTimeout caps header receipt and total request duration.",
    "importantPoints": [
      "Slowloris exploits slow header delivery to exhaust file descriptors",
      "server.headersTimeout limits time allowed to receive full HTTP headers",
      "server.requestTimeout caps total request duration",
      "Production defense requires reverse proxy / DDoS shielding"
    ],
    "commonMistakes": [
      "Leaving headersTimeout at 0 (unlimited), rendering server vulnerable",
      "Confusing socket timeout with HTTP request timeout"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Production",
    "tags": [
      "nodejs",
      "http",
      "security",
      "slowloris",
      "timeouts",
      "dos-protection"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => res.end('ok'));\nserver.headersTimeout = 10000;\nserver.requestTimeout = 30000;\nserver.keepAliveTimeout = 5000;\nserver.listen(3000);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How do you stream a large file download with proper HTTP headers (Content-Length, Content-Disposition, Range)?",
    "title": "How do you stream a large file download with proper HTTP headers (Content-Length, Content-Dispositio",
    "answer": "Use fs.stat to determine file size, set Content-Disposition for filename, and stream using pipeline(fs.createReadStream(path), res).",
    "explanation": "Setting Content-Disposition: attachment; filename=\"...\" triggers browser save dialog. Setting Content-Length lets the browser show a download progress bar. Streaming prevents buffering gigabytes into RAM.",
    "interviewAnswer": "Use fs.stat to determine file size, set Content-Disposition for filename, and stream using pipeline(fs.createReadStream(path), res). Setting Content-Disposition: attachment; filename=\"...\" triggers browser save dialog. Setting Content-Length lets the browser show a download progress bar. Streaming prevents buffering gigabytes into RAM.",
    "importantPoints": [
      "Content-Disposition instructs browser to download as file attachment",
      "Content-Length displays accurate progress bars on clients",
      "Use stream.pipeline to cleanly abort if user cancels download",
      "Supports HTTP 206 Partial Content for resumable video downloads"
    ],
    "commonMistakes": [
      "Using fs.readFileSync to read the whole file before sending",
      "Forgetting to sanitize filenames in Content-Disposition to prevent header injection"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding",
    "tags": [
      "nodejs",
      "http",
      "file-download",
      "headers",
      "streaming",
      "content-disposition"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nimport fs from 'node:fs';\nimport { pipeline } from 'node:stream';\n\nhttp.createServer((req, res) => {\n  const filePath = './archive.zip';\n  fs.stat(filePath, (err, stats) => {\n    res.writeHead(200, {\n      'Content-Type': 'application/zip',\n      'Content-Length': stats.size,\n      'Content-Disposition': 'attachment; filename=\"archive.zip\"'\n    });\n    pipeline(fs.createReadStream(filePath), res, () => {});\n  });\n}).listen(3000);"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How do you implement CORS (Cross-Origin Resource Sharing) in a raw Node.js HTTP server?",
    "title": "How do you implement CORS (Cross-Origin Resource Sharing) in a raw Node.js HTTP server?",
    "answer": "Inspect the 'Origin' header, return 'Access-Control-Allow-Origin' and relevant headers, and handle HTTP OPTIONS preflight requests with a 204 status.",
    "explanation": "When cross-origin requests use non-simple methods or custom headers, the browser first sends an OPTIONS preflight request. The server must reply with Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers.",
    "interviewAnswer": "Inspect the 'Origin' header, return 'Access-Control-Allow-Origin' and relevant headers, and handle HTTP OPTIONS preflight requests with a 204 status. When cross-origin requests use non-simple methods or custom headers, the browser first sends an OPTIONS preflight request. The server must reply with Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers.",
    "importantPoints": [
      "OPTIONS preflight requests must return 204 or 200 without body",
      "Set Access-Control-Allow-Origin (validate origin against whitelist)",
      "Set Access-Control-Allow-Headers for custom auth tokens",
      "Access-Control-Allow-Credentials: true required if sending cookies"
    ],
    "commonMistakes": [
      "Using Access-Control-Allow-Origin: * while setting Access-Control-Allow-Credentials: true",
      "Failing to handle OPTIONS requests, causing CORS failures on POST/PUT"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding",
    "tags": [
      "nodejs",
      "http",
      "cors",
      "security",
      "options",
      "preflight"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "function handleCors(req, res) {\n  const origin = req.headers.origin;\n  if (origin === 'https://myapp.com') {\n    res.setHeader('Access-Control-Allow-Origin', origin);\n  }\n  if (req.method === 'OPTIONS') {\n    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');\n    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');\n    res.writeHead(204);\n    res.end();\n    return true;\n  }\n  return false;\n}"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "What is the difference between global fetch() and http.request() in Node.js 18+?",
    "title": "What is the difference between global fetch() and http.request() in Node.js 18+?",
    "answer": "fetch() is standard WHATWG promise-based API built on Undici, while http.request() is legacy callback/stream-based Node API.",
    "explanation": "Node.js 18 added global fetch(), which complies with browser web standards, supports AbortController, and runs on high-performance Undici HTTP/1.1 client. http.request() returns a ClientRequest stream and requires manual chunk aggregation.",
    "interviewAnswer": "fetch() is standard WHATWG promise-based API built on Undici, while http.request() is legacy callback/stream-based Node API. Node.js 18 added global fetch(), which complies with browser web standards, supports AbortController, and runs on high-performance Undici HTTP/1.1 client. http.request() returns a ClientRequest stream and requires manual chunk aggregation.",
    "importantPoints": [
      "fetch() is Promise-based and isomorphic with browser code",
      "Built on top of Undici, offering higher throughput than legacy http.request",
      "Supports standard Request, Response, Headers, and FormData classes",
      "http.request() remains relevant for specialized raw TCP socket interception"
    ],
    "commonMistakes": [
      "Assuming global fetch uses http.globalAgent",
      "Forgetting that fetch does not reject on 4xx/5xx HTTP status codes"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off",
    "tags": [
      "nodejs",
      "http",
      "fetch",
      "undici",
      "http-request",
      "modern-node"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "const res = await fetch('https://api.github.com/users/octocat');\nif (!res.ok) throw new Error(`HTTP ${res.status}`);\nconst data = await res.json();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How do you handle HTTP request timeouts and distinguish socket timeout from request timeout?",
    "title": "How do you handle HTTP request timeouts and distinguish socket timeout from request timeout?",
    "answer": "Socket timeout (req.setTimeout) triggers if no data is transmitted within an interval; request timeout (server.requestTimeout) caps overall request processing duration.",
    "explanation": "A socket timeout fires when the TCP connection is idle for the configured duration. It does not automatically close the socket unless an event listener calls req.destroy(). server.requestTimeout enforces an absolute deadline from the moment the first byte arrives until the response is sent.",
    "interviewAnswer": "Socket timeout (req.setTimeout) triggers if no data is transmitted within an interval; request timeout (server.requestTimeout) caps overall request processing duration. A socket timeout fires when the TCP connection is idle for the configured duration. It does not automatically close the socket unless an event listener calls req.destroy(). server.requestTimeout enforces an absolute deadline from the moment the first byte arrives until the response is sent.",
    "importantPoints": [
      "Socket timeout: idle inactivity timer",
      "Request timeout: wall-clock cap on entire request lifecycle",
      "Triggering a socket timeout does not abort connection automatically unless handler calls req.destroy()",
      "Crucial for preventing hung connections from stalled upstream services"
    ],
    "commonMistakes": [
      "Attaching req.setTimeout() without destroying the socket inside the callback",
      "Setting timeouts shorter than normal long-polling or file upload duration"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "tags": [
      "nodejs",
      "http",
      "timeouts",
      "socket-timeout",
      "resilience",
      "troubleshooting"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "server.on('request', (req, res) => {\n  req.setTimeout(5000, () => {\n    res.writeHead(408, { 'Content-Type': 'text/plain' });\n    res.end('Request Timeout');\n    req.destroy();\n  });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How do you implement graceful shutdown of an HTTP server on SIGTERM in production?",
    "title": "How do you implement graceful shutdown of an HTTP server on SIGTERM in production?",
    "answer": "Intercept SIGTERM, stop accepting new connections with server.close(), wait for active in-flight requests to finish, set a force-exit safety timeout, and close database pools.",
    "explanation": "When Kubernetes terminates a pod, it sends SIGTERM. Calling server.close() prevents new incoming TCP connections while allowing in-flight HTTP requests to complete cleanly. server.closeIdleConnections() closes idle keep-alive sockets immediately. A fallback timer guarantees exit if requests hang.",
    "interviewAnswer": "Intercept SIGTERM, stop accepting new connections with server.close(), wait for active in-flight requests to finish, set a force-exit safety timeout, and close database pools. When Kubernetes terminates a pod, it sends SIGTERM. Calling server.close() prevents new incoming TCP connections while allowing in-flight HTTP requests to complete cleanly. server.closeIdleConnections() closes idle keep-alive sockets immediately. A fallback timer guarantees exit if requests hang.",
    "importantPoints": [
      "Stop accepting new connections via server.close()",
      "Close idle keep-alive sockets with server.closeIdleConnections()",
      "Wait for ongoing requests to drain before closing DB connections",
      "Implement a forceful process.exit(1) fallback after timeout period"
    ],
    "commonMistakes": [
      "Exiting immediately with process.exit(0) on SIGTERM, dropping in-flight user transactions",
      "Keeping keep-alive sockets open indefinitely, preventing server.close() callback from firing"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Production",
    "tags": [
      "nodejs",
      "http",
      "graceful-shutdown",
      "sigterm",
      "production",
      "kubernetes"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "process.on('SIGTERM', () => {\n  server.close(async () => {\n    await dbPool.end();\n    process.exit(0);\n  });\n  if (server.closeIdleConnections) server.closeIdleConnections();\n  setTimeout(() => process.exit(1), 10000).unref();\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How does HTTP chunked transfer encoding work and why does Node.js use it by default?",
    "title": "How does HTTP chunked transfer encoding work and why does Node.js use it by default?",
    "answer": "Chunked transfer encoding sends data as a series of size-delimited chunks without requiring an upfront Content-Length header, ideal for dynamic streaming.",
    "explanation": "When Content-Length is unknown (e.g. streaming database query results or dynamically generated HTML), HTTP/1.1 uses 'Transfer-Encoding: chunked'. Each chunk starts with its byte size in hexadecimal, followed by CRLF and data. Node.js enables this by default whenever res.write() is called before setting Content-Length.",
    "interviewAnswer": "Chunked transfer encoding sends data as a series of size-delimited chunks without requiring an upfront Content-Length header, ideal for dynamic streaming. When Content-Length is unknown (e.g. streaming database query results or dynamically generated HTML), HTTP/1.1 uses 'Transfer-Encoding: chunked'. Each chunk starts with its byte size in hexadecimal, followed by CRLF and data. Node.js enables this by default whenever res.write() is called before setting Content-Length.",
    "importantPoints": [
      "Eliminates the need to buffer the entire response to compute byte size",
      "Transmits each chunk preceded by hex size delimiter",
      "Terminated with empty chunk '0\\r\\n\\r\\n'",
      "Enables instant Time-to-First-Byte (TTFB) for dynamic payloads"
    ],
    "commonMistakes": [
      "Attempting to use chunked transfer encoding with HTTP/1.0 clients",
      "Setting an incorrect Content-Length header while using chunked writes"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "nodejs",
      "http",
      "chunked-transfer",
      "streaming",
      "ttfb",
      "headers"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "res.writeHead(200, { 'Content-Type': 'text/plain', 'Transfer-Encoding': 'chunked' });\nres.write('First chunk\\n');\nres.write('Second chunk\\n');\nres.end();"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How do you handle HTTP proxying and the X-Forwarded-* headers safely in Node.js?",
    "title": "How do you handle HTTP proxying and the X-Forwarded-* headers safely in Node.js?",
    "answer": "Only trust X-Forwarded-For, X-Forwarded-Proto, and X-Forwarded-Host if the direct TCP remoteAddress belongs to a trusted internal reverse proxy.",
    "explanation": "When behind Nginx, ALB, or Cloudflare, the incoming TCP connection to Node.js comes from the proxy's IP. Client metadata is passed in headers like X-Forwarded-For. If Node blindly trusts these headers from arbitrary clients, attackers can spoof IP addresses to bypass rate limiting.",
    "interviewAnswer": "Only trust X-Forwarded-For, X-Forwarded-Proto, and X-Forwarded-Host if the direct TCP remoteAddress belongs to a trusted internal reverse proxy. When behind Nginx, ALB, or Cloudflare, the incoming TCP connection to Node.js comes from the proxy's IP. Client metadata is passed in headers like X-Forwarded-For. If Node blindly trusts these headers from arbitrary clients, attackers can spoof IP addresses to bypass rate limiting.",
    "importantPoints": [
      "Reverse proxies append client IP to X-Forwarded-For header",
      "Never trust X-Forwarded-* unless the immediate peer IP is an authorized proxy",
      "Express app.set('trust proxy', count/fn) manages trusted IP hops",
      "Crucial for IP-based rate limiting and SSL enforcement"
    ],
    "commonMistakes": [
      "Trusting X-Forwarded-For blindly when server is directly exposed to the internet",
      "Reading the rightmost IP instead of the leftmost validated client IP"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Production",
    "tags": [
      "nodejs",
      "http",
      "proxy",
      "x-forwarded-for",
      "security",
      "production"
    ],
    "isImportant": true,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "app.set('trust proxy', 'loopback, 10.0.0.0/8');\napp.get('/client-ip', (req, res) => {\n  res.json({ clientIp: req.ip, protocol: req.protocol });\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Configuring HTTPS with TLS certificates and modern cipher suites in Node.js: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Configuring HTTPS with TLS certificates and modern cipher suites in Node.js: How is this implemented",
    "answer": "Managing Configuring HTTPS with TLS certificates and modern cipher suites in Node.js requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Configuring HTTPS with TLS certificates and modern cipher suites in Node.js directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Configuring HTTPS with TLS certificates and modern cipher suites in Node.js requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Configuring HTTPS with TLS certificates and modern cipher suites in Node.js directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Configuring HTTPS with TLS certificates and modern cipher suites in Node.js",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Production",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Handling HTTP client redirects automatically when using native http.get: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Handling HTTP client redirects automatically when using native http.get: How is this implemented and",
    "answer": "Managing Handling HTTP client redirects automatically when using native http.get requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Handling HTTP client redirects automatically when using native http.get directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Handling HTTP client redirects automatically when using native http.get requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Handling HTTP client redirects automatically when using native http.get directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Handling HTTP client redirects automatically when using native http.get",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Debugging memory leaks from unconsumed incoming request streams: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Debugging memory leaks from unconsumed incoming request streams: How is this implemented and managed",
    "answer": "Managing Debugging memory leaks from unconsumed incoming request streams requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Debugging memory leaks from unconsumed incoming request streams directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Debugging memory leaks from unconsumed incoming request streams requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Debugging memory leaks from unconsumed incoming request streams directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Debugging memory leaks from unconsumed incoming request streams",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Implementing HTTP Basic Authentication middleware from scratch: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Implementing HTTP Basic Authentication middleware from scratch: How is this implemented and managed ",
    "answer": "Managing Implementing HTTP Basic Authentication middleware from scratch requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Implementing HTTP Basic Authentication middleware from scratch directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Implementing HTTP Basic Authentication middleware from scratch requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Implementing HTTP Basic Authentication middleware from scratch directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Implementing HTTP Basic Authentication middleware from scratch",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How to handle multipart file uploads without external libraries using boundary parsing: How is this implemented and managed in Node.js HTTP servers?",
    "title": "How to handle multipart file uploads without external libraries using boundary parsing: How is this ",
    "answer": "Managing How to handle multipart file uploads without external libraries using boundary parsing requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, How to handle multipart file uploads without external libraries using boundary parsing directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing How to handle multipart file uploads without external libraries using boundary parsing requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, How to handle multipart file uploads without external libraries using boundary parsing directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding How to handle multipart file uploads without external libraries using boundary parsing",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "What is the role of the 100 Continue HTTP status code in Node.js: How is this implemented and managed in Node.js HTTP servers?",
    "title": "What is the role of the 100 Continue HTTP status code in Node.js: How is this implemented and manage",
    "answer": "Managing What is the role of the 100 Continue HTTP status code in Node.js requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, What is the role of the 100 Continue HTTP status code in Node.js directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing What is the role of the 100 Continue HTTP status code in Node.js requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, What is the role of the 100 Continue HTTP status code in Node.js directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding What is the role of the 100 Continue HTTP status code in Node.js",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How to implement an HTTP forward/reverse proxy using http-proxy or custom streams: How is this implemented and managed in Node.js HTTP servers?",
    "title": "How to implement an HTTP forward/reverse proxy using http-proxy or custom streams: How is this imple",
    "answer": "Managing How to implement an HTTP forward/reverse proxy using http-proxy or custom streams requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, How to implement an HTTP forward/reverse proxy using http-proxy or custom streams directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing How to implement an HTTP forward/reverse proxy using http-proxy or custom streams requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, How to implement an HTTP forward/reverse proxy using http-proxy or custom streams directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding How to implement an HTTP forward/reverse proxy using http-proxy or custom streams",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Preventing HTTP Parameter Pollution (HPP) vulnerabilities in query parsing: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Preventing HTTP Parameter Pollution (HPP) vulnerabilities in query parsing: How is this implemented ",
    "answer": "Managing Preventing HTTP Parameter Pollution (HPP) vulnerabilities in query parsing requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Preventing HTTP Parameter Pollution (HPP) vulnerabilities in query parsing directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Preventing HTTP Parameter Pollution (HPP) vulnerabilities in query parsing requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Preventing HTTP Parameter Pollution (HPP) vulnerabilities in query parsing directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Preventing HTTP Parameter Pollution (HPP) vulnerabilities in query parsing",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Security",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Understanding HTTP status code 429 Too Many Requests and Retry-After header: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Understanding HTTP status code 429 Too Many Requests and Retry-After header: How is this implemented",
    "answer": "Managing Understanding HTTP status code 429 Too Many Requests and Retry-After header requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Understanding HTTP status code 429 Too Many Requests and Retry-After header directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Understanding HTTP status code 429 Too Many Requests and Retry-After header requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Understanding HTTP status code 429 Too Many Requests and Retry-After header directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Understanding HTTP status code 429 Too Many Requests and Retry-After header",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How to implement sliding window rate limiting using Redis in Node.js HTTP servers: How is this implemented and managed in Node.js HTTP servers?",
    "title": "How to implement sliding window rate limiting using Redis in Node.js HTTP servers: How is this imple",
    "answer": "Managing How to implement sliding window rate limiting using Redis in Node.js HTTP servers requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, How to implement sliding window rate limiting using Redis in Node.js HTTP servers directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing How to implement sliding window rate limiting using Redis in Node.js HTTP servers requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, How to implement sliding window rate limiting using Redis in Node.js HTTP servers directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding How to implement sliding window rate limiting using Redis in Node.js HTTP servers",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Diagnosing socket hang up (ECONNRESET) errors under high traffic: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Diagnosing socket hang up (ECONNRESET) errors under high traffic: How is this implemented and manage",
    "answer": "Managing Diagnosing socket hang up (ECONNRESET) errors under high traffic requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Diagnosing socket hang up (ECONNRESET) errors under high traffic directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Diagnosing socket hang up (ECONNRESET) errors under high traffic requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Diagnosing socket hang up (ECONNRESET) errors under high traffic directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Diagnosing socket hang up (ECONNRESET) errors under high traffic",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Differences between WebSocket protocol upgrade and standard HTTP handling: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Differences between WebSocket protocol upgrade and standard HTTP handling: How is this implemented a",
    "answer": "Managing Differences between WebSocket protocol upgrade and standard HTTP handling requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Differences between WebSocket protocol upgrade and standard HTTP handling directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Differences between WebSocket protocol upgrade and standard HTTP handling requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Differences between WebSocket protocol upgrade and standard HTTP handling directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Differences between WebSocket protocol upgrade and standard HTTP handling",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How to use the Node.js Diagnostic Channel for tracing HTTP requests (OpenTelemetry): How is this implemented and managed in Node.js HTTP servers?",
    "title": "How to use the Node.js Diagnostic Channel for tracing HTTP requests (OpenTelemetry): How is this imp",
    "answer": "Managing How to use the Node.js Diagnostic Channel for tracing HTTP requests (OpenTelemetry) requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, How to use the Node.js Diagnostic Channel for tracing HTTP requests (OpenTelemetry) directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing How to use the Node.js Diagnostic Channel for tracing HTTP requests (OpenTelemetry) requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, How to use the Node.js Diagnostic Channel for tracing HTTP requests (OpenTelemetry) directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding How to use the Node.js Diagnostic Channel for tracing HTTP requests (OpenTelemetry)",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Production",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Setting secure HTTP cookie flags: HttpOnly, Secure, SameSite=Strict: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Setting secure HTTP cookie flags: HttpOnly, Secure, SameSite=Strict: How is this implemented and man",
    "answer": "Managing Setting secure HTTP cookie flags: HttpOnly, Secure, SameSite=Strict requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Setting secure HTTP cookie flags: HttpOnly, Secure, SameSite=Strict directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Setting secure HTTP cookie flags: HttpOnly, Secure, SameSite=Strict requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Setting secure HTTP cookie flags: HttpOnly, Secure, SameSite=Strict directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Setting secure HTTP cookie flags: HttpOnly, Secure, SameSite=Strict",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Security",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Implementing conditional HTTP GET requests using ETag and If-None-Match (304 Not Modified): How is this implemented and managed in Node.js HTTP servers?",
    "title": "Implementing conditional HTTP GET requests using ETag and If-None-Match (304 Not Modified): How is t",
    "answer": "Managing Implementing conditional HTTP GET requests using ETag and If-None-Match (304 Not Modified) requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Implementing conditional HTTP GET requests using ETag and If-None-Match (304 Not Modified) directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Implementing conditional HTTP GET requests using ETag and If-None-Match (304 Not Modified) requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Implementing conditional HTTP GET requests using ETag and If-None-Match (304 Not Modified) directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Implementing conditional HTTP GET requests using ETag and If-None-Match (304 Not Modified)",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Tuning maxHeaderSize in Node.js HTTP servers to prevent 431 Request Header Fields Too Large: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Tuning maxHeaderSize in Node.js HTTP servers to prevent 431 Request Header Fields Too Large: How is ",
    "answer": "Managing Tuning maxHeaderSize in Node.js HTTP servers to prevent 431 Request Header Fields Too Large requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Tuning maxHeaderSize in Node.js HTTP servers to prevent 431 Request Header Fields Too Large directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Tuning maxHeaderSize in Node.js HTTP servers to prevent 431 Request Header Fields Too Large requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Tuning maxHeaderSize in Node.js HTTP servers to prevent 431 Request Header Fields Too Large directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Tuning maxHeaderSize in Node.js HTTP servers to prevent 431 Request Header Fields Too Large",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How Node.js parses query strings: querystring vs URLSearchParams: How is this implemented and managed in Node.js HTTP servers?",
    "title": "How Node.js parses query strings: querystring vs URLSearchParams: How is this implemented and manage",
    "answer": "Managing How Node.js parses query strings: querystring vs URLSearchParams requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, How Node.js parses query strings: querystring vs URLSearchParams directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing How Node.js parses query strings: querystring vs URLSearchParams requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, How Node.js parses query strings: querystring vs URLSearchParams directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding How Node.js parses query strings: querystring vs URLSearchParams",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "junior"
    ],
    "preparationLevelSlugs": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Handling TLS session resumption and ticket caching in Node.js HTTPS servers: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Handling TLS session resumption and ticket caching in Node.js HTTPS servers: How is this implemented",
    "answer": "Managing Handling TLS session resumption and ticket caching in Node.js HTTPS servers requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Handling TLS session resumption and ticket caching in Node.js HTTPS servers directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Handling TLS session resumption and ticket caching in Node.js HTTPS servers requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Handling TLS session resumption and ticket caching in Node.js HTTPS servers directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Handling TLS session resumption and ticket caching in Node.js HTTPS servers",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How to implement mutual TLS (mTLS) client certificate authentication: How is this implemented and managed in Node.js HTTP servers?",
    "title": "How to implement mutual TLS (mTLS) client certificate authentication: How is this implemented and ma",
    "answer": "Managing How to implement mutual TLS (mTLS) client certificate authentication requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, How to implement mutual TLS (mTLS) client certificate authentication directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing How to implement mutual TLS (mTLS) client certificate authentication requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, How to implement mutual TLS (mTLS) client certificate authentication directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding How to implement mutual TLS (mTLS) client certificate authentication",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Security",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Using AsyncLocalStorage to track correlation IDs across asynchronous HTTP call chains: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Using AsyncLocalStorage to track correlation IDs across asynchronous HTTP call chains: How is this i",
    "answer": "Managing Using AsyncLocalStorage to track correlation IDs across asynchronous HTTP call chains requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Using AsyncLocalStorage to track correlation IDs across asynchronous HTTP call chains directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Using AsyncLocalStorage to track correlation IDs across asynchronous HTTP call chains requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Using AsyncLocalStorage to track correlation IDs across asynchronous HTTP call chains directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Using AsyncLocalStorage to track correlation IDs across asynchronous HTTP call chains",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Difference between Transfer-Encoding: chunked and Content-Length: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Difference between Transfer-Encoding: chunked and Content-Length: How is this implemented and manage",
    "answer": "Managing Difference between Transfer-Encoding: chunked and Content-Length requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Difference between Transfer-Encoding: chunked and Content-Length directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Difference between Transfer-Encoding: chunked and Content-Length requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Difference between Transfer-Encoding: chunked and Content-Length directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Difference between Transfer-Encoding: chunked and Content-Length",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Why calling JSON.stringify on large payloads can block the HTTP server event loop: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Why calling JSON.stringify on large payloads can block the HTTP server event loop: How is this imple",
    "answer": "Managing Why calling JSON.stringify on large payloads can block the HTTP server event loop requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Why calling JSON.stringify on large payloads can block the HTTP server event loop directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Why calling JSON.stringify on large payloads can block the HTTP server event loop requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Why calling JSON.stringify on large payloads can block the HTTP server event loop directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Why calling JSON.stringify on large payloads can block the HTTP server event loop",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How to set up HTTP compression middleware (Gzip / Brotli) effectively: How is this implemented and managed in Node.js HTTP servers?",
    "title": "How to set up HTTP compression middleware (Gzip / Brotli) effectively: How is this implemented and m",
    "answer": "Managing How to set up HTTP compression middleware (Gzip / Brotli) effectively requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, How to set up HTTP compression middleware (Gzip / Brotli) effectively directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing How to set up HTTP compression middleware (Gzip / Brotli) effectively requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, How to set up HTTP compression middleware (Gzip / Brotli) effectively directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding How to set up HTTP compression middleware (Gzip / Brotli) effectively",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Handling network partition and timeout retries with exponential backoff and jitter: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Handling network partition and timeout retries with exponential backoff and jitter: How is this impl",
    "answer": "Managing Handling network partition and timeout retries with exponential backoff and jitter requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Handling network partition and timeout retries with exponential backoff and jitter directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Handling network partition and timeout retries with exponential backoff and jitter requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Handling network partition and timeout retries with exponential backoff and jitter directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Handling network partition and timeout retries with exponential backoff and jitter",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How Node.js handles URL encoding / decoding and URL parsing vulnerabilities: How is this implemented and managed in Node.js HTTP servers?",
    "title": "How Node.js handles URL encoding / decoding and URL parsing vulnerabilities: How is this implemented",
    "answer": "Managing How Node.js handles URL encoding / decoding and URL parsing vulnerabilities requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, How Node.js handles URL encoding / decoding and URL parsing vulnerabilities directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing How Node.js handles URL encoding / decoding and URL parsing vulnerabilities requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, How Node.js handles URL encoding / decoding and URL parsing vulnerabilities directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding How Node.js handles URL encoding / decoding and URL parsing vulnerabilities",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Security",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Designing an idempotent HTTP POST/PUT API using Idempotency-Key headers: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Designing an idempotent HTTP POST/PUT API using Idempotency-Key headers: How is this implemented and",
    "answer": "Managing Designing an idempotent HTTP POST/PUT API using Idempotency-Key headers requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Designing an idempotent HTTP POST/PUT API using Idempotency-Key headers directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Designing an idempotent HTTP POST/PUT API using Idempotency-Key headers requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Designing an idempotent HTTP POST/PUT API using Idempotency-Key headers directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Designing an idempotent HTTP POST/PUT API using Idempotency-Key headers",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Why connection: close header might be sent by clients and its impact on performance: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Why connection: close header might be sent by clients and its impact on performance: How is this imp",
    "answer": "Managing Why connection: close header might be sent by clients and its impact on performance requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Why connection: close header might be sent by clients and its impact on performance directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Why connection: close header might be sent by clients and its impact on performance requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Why connection: close header might be sent by clients and its impact on performance directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Why connection: close header might be sent by clients and its impact on performance",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Monitoring HTTP server metrics: active connections, request duration, error rates: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Monitoring HTTP server metrics: active connections, request duration, error rates: How is this imple",
    "answer": "Managing Monitoring HTTP server metrics: active connections, request duration, error rates requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Monitoring HTTP server metrics: active connections, request duration, error rates directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Monitoring HTTP server metrics: active connections, request duration, error rates requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Monitoring HTTP server metrics: active connections, request duration, error rates directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Monitoring HTTP server metrics: active connections, request duration, error rates",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Production",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How to intercept and mock outbound HTTP requests in unit tests without network calls: How is this implemented and managed in Node.js HTTP servers?",
    "title": "How to intercept and mock outbound HTTP requests in unit tests without network calls: How is this im",
    "answer": "Managing How to intercept and mock outbound HTTP requests in unit tests without network calls requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, How to intercept and mock outbound HTTP requests in unit tests without network calls directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing How to intercept and mock outbound HTTP requests in unit tests without network calls requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, How to intercept and mock outbound HTTP requests in unit tests without network calls directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding How to intercept and mock outbound HTTP requests in unit tests without network calls",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Implementing an API Circuit Breaker using Opossum to protect slow external HTTP dependencies: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Implementing an API Circuit Breaker using Opossum to protect slow external HTTP dependencies: How is",
    "answer": "Managing Implementing an API Circuit Breaker using Opossum to protect slow external HTTP dependencies requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Implementing an API Circuit Breaker using Opossum to protect slow external HTTP dependencies directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Implementing an API Circuit Breaker using Opossum to protect slow external HTTP dependencies requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Implementing an API Circuit Breaker using Opossum to protect slow external HTTP dependencies directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Implementing an API Circuit Breaker using Opossum to protect slow external HTTP dependencies",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Handling HTTP/2 Server Push deprecation and modern alternatives (103 Early Hints): How is this implemented and managed in Node.js HTTP servers?",
    "title": "Handling HTTP/2 Server Push deprecation and modern alternatives (103 Early Hints): How is this imple",
    "answer": "Managing Handling HTTP/2 Server Push deprecation and modern alternatives (103 Early Hints) requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Handling HTTP/2 Server Push deprecation and modern alternatives (103 Early Hints) directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Handling HTTP/2 Server Push deprecation and modern alternatives (103 Early Hints) requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Handling HTTP/2 Server Push deprecation and modern alternatives (103 Early Hints) directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Handling HTTP/2 Server Push deprecation and modern alternatives (103 Early Hints)",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Why keep-alive socket reuse can cause EPIPE or ECONNRESET on stale connections: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Why keep-alive socket reuse can cause EPIPE or ECONNRESET on stale connections: How is this implemen",
    "answer": "Managing Why keep-alive socket reuse can cause EPIPE or ECONNRESET on stale connections requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Why keep-alive socket reuse can cause EPIPE or ECONNRESET on stale connections directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Why keep-alive socket reuse can cause EPIPE or ECONNRESET on stale connections requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Why keep-alive socket reuse can cause EPIPE or ECONNRESET on stale connections directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Why keep-alive socket reuse can cause EPIPE or ECONNRESET on stale connections",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "preparationLevelSlugs": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "How to write a custom Express-compatible middleware pipeline from scratch: How is this implemented and managed in Node.js HTTP servers?",
    "title": "How to write a custom Express-compatible middleware pipeline from scratch: How is this implemented a",
    "answer": "Managing How to write a custom Express-compatible middleware pipeline from scratch requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, How to write a custom Express-compatible middleware pipeline from scratch directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing How to write a custom Express-compatible middleware pipeline from scratch requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, How to write a custom Express-compatible middleware pipeline from scratch directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding How to write a custom Express-compatible middleware pipeline from scratch",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Comparing performance of Node.js native HTTP, Fastify, and Express: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Comparing performance of Node.js native HTTP, Fastify, and Express: How is this implemented and mana",
    "answer": "Managing Comparing performance of Node.js native HTTP, Fastify, and Express requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Comparing performance of Node.js native HTTP, Fastify, and Express directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Comparing performance of Node.js native HTTP, Fastify, and Express requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Comparing performance of Node.js native HTTP, Fastify, and Express directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Comparing performance of Node.js native HTTP, Fastify, and Express",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "nodejs",
    "topicSlug": "http",
    "question": "Configuring Content Security Policy (CSP) headers in Node.js using Helmet: How is this implemented and managed in Node.js HTTP servers?",
    "title": "Configuring Content Security Policy (CSP) headers in Node.js using Helmet: How is this implemented a",
    "answer": "Managing Configuring Content Security Policy (CSP) headers in Node.js using Helmet requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture.",
    "explanation": "In production Node.js backends, Configuring Content Security Policy (CSP) headers in Node.js using Helmet directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "interviewAnswer": "Managing Configuring Content Security Policy (CSP) headers in Node.js using Helmet requires deep understanding of HTTP protocols, socket lifecycles, and Node.js networking architecture. In production Node.js backends, Configuring Content Security Policy (CSP) headers in Node.js using Helmet directly influences security, availability, and throughput. Developers must navigate the nuances of TCP socket reuse, HTTP header validation, streaming request/response flows, and error boundaries. Proper implementation avoids resource leaks, prevents Denial of Service, and ensures consistent low latency under high concurrency.",
    "importantPoints": [
      "Ensures compliance with RFC standards regarding Configuring Content Security Policy (CSP) headers in Node.js using Helmet",
      "Prevents socket starvation, dangling handles, and memory leaks",
      "Protects downstream services via timeouts, pooling, and backoff",
      "Maintains high throughput and observability across distributed systems"
    ],
    "commonMistakes": [
      "Failing to destroy disconnected sockets, leaking connection state",
      "Assuming synchronous response generation won't block other concurrent requests"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "preparationLevelSlugs": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Security",
    "tags": [
      "nodejs",
      "http",
      "networking",
      "production"
    ],
    "isImportant": false,
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Implementation Example",
        "code": "import http from 'node:http';\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ ok: true }));\n});"
      }
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
