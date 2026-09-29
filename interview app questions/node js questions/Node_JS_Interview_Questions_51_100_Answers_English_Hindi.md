# Node.js Interview Questions 51–100 — Answers
## 3-Year MERN Stack Developer | English + Hindi

> Format: Simple interview-ready explanation in English, followed by simple Hindi explanation and practical examples where useful.

---

## 51. What are Streams in Node.js?

### Simple Explanation — English
Streams are a way to process data piece by piece instead of loading the complete data into memory at once.

They are especially useful for large files, videos, network data, and other continuous data.

### Simple Explanation — Hindi
Streams data ko ek saath complete memory mein load karne ke bajay piece by piece process karne ka way hai.

Large files, videos, network data aur continuous data ke liye Streams bahut useful hain.

### Example
```js
const fs = require("fs");

const stream = fs.createReadStream("large-video.mp4");

stream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.length);
});
```

---

## 52. What are the different types of Streams?

### Simple Explanation — English
Node.js mainly has four types of Streams:

1. **Readable** — data can be read from it.
2. **Writable** — data can be written to it.
3. **Duplex** — can both read and write.
4. **Transform** — can read data, transform it, and produce output.

### Simple Explanation — Hindi
Node.js mein mainly four types ke Streams hote hain:

1. **Readable** — data read karne ke liye.
2. **Writable** — data write karne ke liye.
3. **Duplex** — read aur write dono.
4. **Transform** — data read karke transform karke output deta hai.

### Example
```text
Readable → Read data
Writable → Write data
Duplex   → Read + Write
Transform → Read + Transform + Write
```

---

## 53. What is the difference between a Buffer and a Stream?

### Simple Explanation — English
A Buffer holds a collection of bytes in memory.

A Stream provides a way to process data progressively over time.

For a small piece of binary data, a Buffer can be appropriate. For a large file, using a Stream can prevent the entire file from being loaded into memory.

### Simple Explanation — Hindi
Buffer bytes ko memory mein hold karta hai.

Stream data ko gradually process karta hai.

Small data ke liye Buffer useful ho sakta hai, while large files ke liye Stream better approach ho sakta hai because complete file ko memory mein load nahi karna padta.

---

## 54. Why should you use Streams when handling large files?

### Simple Explanation — English
If you load a very large file completely into memory, memory usage can become very high.

Streams allow the application to process the file in smaller chunks. This reduces memory pressure and is better for large files.

### Simple Explanation — Hindi
Agar hum 2 GB file ko ek saath memory mein load karenge, to bahut zyada memory use ho sakti hai.

Streams file ko chunks mein process karta hai, isliye memory usage comparatively controlled rehta hai.

### Example
```js
const fs = require("fs");

const input = fs.createReadStream("large.txt");
const output = fs.createWriteStream("copy.txt");

input.pipe(output);
```

---

## 55. What is backpressure in Node.js Streams?

### Simple Explanation — English
Backpressure happens when data is being produced faster than the destination can consume it.

A Stream mechanism can signal that the writable side is full or cannot currently accept more data. Proper Stream handling prevents the producer from overwhelming the consumer.

### Simple Explanation — Hindi
Backpressure tab hota hai jab data producer bahut fast data generate kar raha ho aur consumer utni speed se data process nahi kar pa raha ho.

Streams backpressure handling provide karte hain taaki consumer overload na ho.

### Example
```text
Fast Producer
     ↓
  Too much data
     ↓
Slow Consumer
     ↓
Backpressure
```

---

## 56. How does .pipe() work in Node.js?

### Simple Explanation — English
`.pipe()` connects a readable stream to a writable stream.

It transfers data from the readable stream to the writable stream and handles much of the flow control for you, including backpressure.

### Simple Explanation — Hindi
`.pipe()` ek Readable Stream ko Writable Stream se connect karta hai.

Readable se data automatically Writable mein flow hota hai aur Stream flow control bhi manage karne mein help karta hai.

### Example
```js
const fs = require("fs");

fs.createReadStream("input.txt")
  .pipe(fs.createWriteStream("output.txt"));
```

---

## 57. What is EventEmitter in Node.js?

### Simple Explanation — English
`EventEmitter` is a Node.js class used to create and handle custom events.

An object can emit an event, and other parts of the application can listen for that event.

Node.js itself uses event-driven patterns in many APIs.

### Simple Explanation — Hindi
`EventEmitter` Node.js ka class hai jiska use custom events create aur handle karne ke liye hota hai.

Ek part event emit kar sakta hai aur doosra part us event ko listen kar sakta hai.

### Example
```js
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("login", (user) => {
  console.log(user.name, "logged in");
});

emitter.emit("login", { name: "Rahul" });
```

---

## 58. How do you create and listen to custom events?

### Simple Explanation — English
Create an `EventEmitter` instance, register a listener using `.on()`, and trigger the event using `.emit()`.

### Simple Explanation — Hindi
Pehle `EventEmitter` ka instance create karte hain. Phir `.on()` se event listener register karte hain aur `.emit()` se event trigger karte hain.

### Example
```js
const EventEmitter = require("events");

const events = new EventEmitter();

events.on("orderCreated", (order) => {
  console.log("Order created:", order.id);
});

events.emit("orderCreated", { id: 101 });
```

---

## 59. What is the difference between on() and once() in EventEmitter?

### Simple Explanation — English
`.on()` registers a listener that can execute every time the event is emitted.

`.once()` registers a listener that executes only the first time the event is emitted and is then automatically removed.

### Simple Explanation — Hindi
`.on()` listener ko har event emission par execute karta hai.

`.once()` listener sirf first time event emit hone par execute hota hai aur uske baad remove ho jata hai.

### Example
```js
emitter.on("message", () => {
  console.log("Runs every time");
});

emitter.once("connected", () => {
  console.log("Runs only once");
});
```

---

## 60. What happens if an EventEmitter has too many listeners?

### Simple Explanation — English
Node.js has a default warning threshold for listeners on an EventEmitter. Adding many listeners to the same event can produce a `MaxListenersExceededWarning`.

The warning does not automatically mean the application has crashed. It can indicate that listeners are being added repeatedly and may point to a memory leak.

The correct solution is to find why listeners are accumulating rather than simply increasing the limit.

### Simple Explanation — Hindi
Agar same EventEmitter par bahut saare listeners add ho rahe hain, Node.js warning de sakta hai.

Ye warning possible memory leak ka signal ho sakti hai, especially agar listeners repeatedly add ho rahe hain aur remove nahi ho rahe.

Sirf listener limit badhana solution nahi hai. Pehle check karna chahiye ki listeners repeatedly add kyun ho rahe hain.

---

## 61. How can you create a basic HTTP server using Node.js?

### Simple Explanation — English
Node.js provides the built-in `http` module for creating HTTP servers.

We can create a server, inspect the incoming request, and send a response.

### Simple Explanation — Hindi
Node.js ka built-in `http` module basic HTTP server create karne ke liye use hota hai.

### Example
```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json"
  });

  res.end(JSON.stringify({
    message: "Hello World"
  }));
});

server.listen(3000);
```

---

## 62. What is the difference between Node's http module and Express.js?

### Simple Explanation — English
The `http` module is built into Node.js and provides lower-level functionality for creating HTTP servers.

Express.js is a framework built around Node.js HTTP capabilities. It provides convenient features such as routing, middleware, request handling, response helpers, and error handling patterns.

### Simple Explanation — Hindi
`http` Node.js ka built-in low-level module hai.

Express.js Node.js ke upar ek framework hai jo routing, middleware, request/response handling aur error handling ko easier banata hai.

### Example
Without Express:
```js
http.createServer(...)
```

With Express:
```js
app.get("/users", handler);
```

Express large APIs ko organize karna easier bana deta hai.

---

## 63. How does Node.js handle incoming HTTP requests and responses?

### Simple Explanation — English
An HTTP server receives a request containing information such as the method, URL, headers, and body.

Node.js provides request and response objects. The application processes the request and eventually sends a response with a status code, headers, and body.

### Simple Explanation — Hindi
Jab HTTP request server par aati hai, usmein method, URL, headers aur body jaise data hote hain.

Node.js request aur response objects provide karta hai. Server request process karke status code, headers aur response body send karta hai.

### Example
```js
const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);

  res.statusCode = 200;
  res.end("OK");
});
```

---

## 64. What is Express.js, and why is it commonly used with Node.js?

### Simple Explanation — English
Express.js is a lightweight web framework for Node.js.

It simplifies backend development by providing routing, middleware, request/response helpers, and a structured way to build APIs.

### Simple Explanation — Hindi
Express.js Node.js ke liye ek lightweight web framework hai.

Ye routing, middleware, API handling aur request/response management ko easy banata hai.

### Example
```js
const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.json({ message: "Users API" });
});

app.listen(3000);
```

---

## 65. What is middleware in Express.js?

### Simple Explanation — English
Middleware is a function that runs during the request-response lifecycle.

It can inspect or modify the request, modify the response, perform authentication, logging, validation, or pass control to the next middleware.

Middleware normally receives:

```js
(req, res, next)
```

### Simple Explanation — Hindi
Express middleware ek function hota hai jo request aur response ke beech execute hota hai.

Iska use authentication, logging, validation, request modification aur other common logic ke liye hota hai.

### Example
```js
const auth = (req, res, next) => {
  console.log("Checking authentication");
  next();
};

app.use(auth);
```

---

## 66. How does the Express middleware pipeline work?

### Simple Explanation — English
Express processes middleware in the order in which it is registered.

A middleware can:

- End the request
- Modify request/response
- Call `next()` to continue
- Pass an error to `next(error)`

If middleware does not call `next()` and does not send a response, the request may remain hanging.

### Simple Explanation — Hindi
Express middleware ko registration ke order mein execute karta hai.

Middleware response send kar sakta hai, request modify kar sakta hai, ya `next()` call karke next middleware ko control de sakta hai.

### Example
```js
app.use(logger);
app.use(auth);
app.use(validate);

app.get("/users", controller);
```

Execution generally:
```text
logger → auth → validate → controller
```

---

## 67. What is the difference between application-level and router-level middleware?

### Simple Explanation — English
Application-level middleware is attached to the main Express application using `app.use()` or similar methods.

Router-level middleware is attached to a specific Express Router. It is useful when middleware should apply only to a group of related routes.

### Simple Explanation — Hindi
Application-level middleware poori Express application ya broad route scope par apply kiya ja sakta hai.

Router-level middleware kisi particular router ya routes ke group par apply hota hai.

### Example
```js
app.use(globalLogger);

const userRouter = express.Router();

userRouter.use(auth);

userRouter.get("/", getUsers);
userRouter.get("/:id", getUser);
```

Yahan `auth` sirf user router ke routes par apply ho sakta hai.

---

## 68. What is the difference between app.use() and app.get()?

### Simple Explanation — English
`app.use()` is mainly used to register middleware or mount routers. It can apply to multiple HTTP methods depending on how it is configured.

`app.get()` specifically handles GET requests for a route.

### Simple Explanation — Hindi
`app.use()` middleware ya router mount karne ke liye commonly use hota hai.

`app.get()` specifically GET request ke route handler ke liye use hota hai.

### Example
```js
app.use(express.json());

app.get("/users", (req, res) => {
  res.json([]);
});
```

---

## 69. How do you create routes in Express.js?

### Simple Explanation — English
Express provides methods such as `get()`, `post()`, `put()`, `patch()`, and `delete()` to define routes.

Routes can also be organized using `express.Router()`.

### Simple Explanation — Hindi
Express mein HTTP methods ke according routes create karte hain:

```js
app.get()
app.post()
app.put()
app.patch()
app.delete()
```

Large applications mein `express.Router()` use karke routes ko separate files mein organize karna better hota hai.

### Example
```js
app.get("/users", getUsers);
app.post("/users", createUser);
app.patch("/users/:id", updateUser);
app.delete("/users/:id", deleteUser);
```

---

## 70. What is route parameter vs query parameter?

### Simple Explanation — English
A route parameter is part of the URL path and usually identifies a specific resource.

A query parameter is added after `?` and is commonly used for filtering, sorting, searching, or pagination.

### Simple Explanation — Hindi
Route parameter URL ka part hota hai aur usually specific resource identify karta hai.

Query parameter `?` ke baad aata hai aur filtering, search, sorting, pagination ke liye commonly use hota hai.

### Example
```text
/users/123
```

Here `123` can be a route parameter.

```text
/users?page=2&limit=20
```

Here `page` and `limit` are query parameters.

Express:
```js
req.params.id
req.query.page
```

---

## 71. How do you handle request body data in Express?

### Simple Explanation — English
For JSON request bodies, Express provides the `express.json()` middleware.

It parses JSON payloads and makes the parsed data available through `req.body`.

### Simple Explanation — Hindi
JSON request body ko read karne ke liye Express mein `express.json()` middleware use karte hain.

Iske baad request data `req.body` mein milta hai.

### Example
```js
app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
```

Request:
```json
{
  "name": "Rahul",
  "age": 25
}
```

---

## 72. What is the purpose of express.json()?

### Simple Explanation — English
`express.json()` is built-in Express middleware that parses incoming requests containing JSON payloads.

After parsing, the data is available through `req.body`.

### Simple Explanation — Hindi
`express.json()` incoming JSON request body ko parse karta hai aur parsed data ko `req.body` mein available karta hai.

### Example
```js
app.use(express.json());

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  res.json({ email });
});
```

Without the appropriate body-parsing middleware, `req.body` may not contain the expected parsed JSON data.

---

## 73. How do you create custom middleware in Express?

### Simple Explanation — English
A custom middleware is simply a function that receives `req`, `res`, and `next`.

It can perform some logic and call `next()` to continue.

### Simple Explanation — Hindi
Custom middleware ek function hota hai jo normally `req`, `res`, aur `next` receive karta hai.

Logic perform karne ke baad `next()` call karke next middleware/controller ko control diya jata hai.

### Example
```js
const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

app.use(logger);
```

---

## 74. How does error-handling middleware work in Express?

### Simple Explanation — English
Express error-handling middleware has four parameters:

```js
(err, req, res, next)
```

When a middleware or route passes an error to `next(error)`, Express can route it to the error handler.

A centralized error handler helps keep API error responses consistent.

### Simple Explanation — Hindi
Express ka error-handling middleware four parameters leta hai:

```js
(err, req, res, next)
```

Agar route ya middleware `next(error)` call karta hai, to error centralized error handler tak ja sakta hai.

### Example
```js
app.use((err, req, res, next) => {
  console.error(err);

  res.status(500).json({
    message: "Internal server error"
  });
});
```

---

## 75. What is the correct order of middleware execution in Express?

### Simple Explanation — English
Express generally executes middleware in the order it is registered.

A common API structure can be:

```text
Request
 ↓
Security / CORS
 ↓
Body parser
 ↓
Logger
 ↓
Authentication
 ↓
Validation
 ↓
Controller
 ↓
Error handler
```

The exact order depends on the application's requirements.

### Simple Explanation — Hindi
Express middleware registration ke order mein execute hota hai.

Isliye middleware ka order important hai.

### Example
```js
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/api/users", auth, userRoutes);

app.use(errorHandler);
```

Error handler ko generally routes/middleware ke baad register kiya jata hai.

---

## 76. How would you organize a large Express.js project?

### Simple Explanation — English
For a large application, I would separate responsibilities instead of keeping everything inside route files.

A common structure is:

```text
src/
 ├── routes/
 ├── controllers/
 ├── services/
 ├── models/
 ├── middleware/
 ├── validators/
 ├── utils/
 ├── config/
 └── app.js
```

Routes define endpoints, controllers handle HTTP-level logic, services contain business logic, and models handle database-related concerns.

### Simple Explanation — Hindi
Large Express project mein saara code ek hi route file mein nahi rakhna chahiye.

Responsibilities separate karna better hai:

```text
routes → endpoints
controllers → request/response handling
services → business logic
models → database
middleware → common request logic
validators → validation
config → configuration
```

Isse project maintain aur test karna easier hota hai.

---

## 77. What makes an API RESTful?

### Simple Explanation — English
A RESTful API generally models resources and uses standard HTTP methods and status codes.

For example:

```text
GET    /users
GET    /users/123
POST   /users
PATCH  /users/123
DELETE /users/123
```

A REST API should use predictable resource-oriented URLs, appropriate HTTP methods, meaningful status codes, and stateless request handling.

### Simple Explanation — Hindi
RESTful API mein resources ko clearly represent kiya jata hai aur standard HTTP methods use kiye jate hain.

Example:

```text
GET    /users
POST   /users
PATCH  /users/123
DELETE /users/123
```

API predictable aur consistent honi chahiye.

---

## 78. What is the difference between GET, POST, PUT, PATCH, and DELETE?

### Simple Explanation — English
- **GET** → retrieve data
- **POST** → create a resource or perform a non-idempotent operation
- **PUT** → replace/update a resource representation
- **PATCH** → partially update a resource
- **DELETE** → remove a resource

### Simple Explanation — Hindi
- **GET** → data lene ke liye
- **POST** → new resource create karne ke liye
- **PUT** → resource ko replace/update karne ke liye
- **PATCH** → resource ke kuch fields update karne ke liye
- **DELETE** → resource delete karne ke liye

### Example
```text
GET    /users/10
POST   /users
PUT    /users/10
PATCH  /users/10
DELETE /users/10
```

---

## 79. What is the difference between PUT and PATCH?

### Simple Explanation — English
`PUT` is generally used when the client sends a complete replacement representation of a resource.

`PATCH` is used for a partial modification.

In real applications, the exact API contract matters, but this is the common distinction.

### Simple Explanation — Hindi
`PUT` generally complete resource representation ko replace/update karne ke liye use hota hai.

`PATCH` sirf required fields ko partially update karne ke liye use hota hai.

### Example
Existing user:
```json
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "age": 25
}
```

PATCH:
```json
{
  "age": 26
}
```

Yahan sirf `age` update karna partial update hai.

---

## 80. What HTTP status codes do you commonly use in a REST API?

### Simple Explanation — English
Common status codes include:

- `200 OK` — successful request
- `201 Created` — resource created
- `204 No Content` — successful request with no response body
- `400 Bad Request` — invalid request
- `401 Unauthorized` — authentication is required or invalid
- `403 Forbidden` — authenticated but not allowed
- `404 Not Found` — resource not found
- `409 Conflict` — request conflicts with current resource state
- `422 Unprocessable Content` — request is syntactically valid but validation/business rules reject it
- `500 Internal Server Error` — unexpected server-side failure

### Simple Explanation — Hindi
API mein commonly:

```text
200 → success
201 → resource created
204 → success, no body
400 → invalid request
401 → authentication problem
403 → permission problem
404 → resource nahi mila
409 → conflict
422 → validation/business rule failure
500 → server error
```

Correct status code frontend ko response samajhne mein help karta hai.

---

## 81. How do you design a clean REST API?

### Simple Explanation — English
A clean REST API should have:

- Clear resource-based URLs
- Consistent HTTP methods
- Meaningful status codes
- Consistent response format
- Validation
- Authentication/authorization where needed
- Pagination for large collections
- Proper error handling
- API versioning when appropriate

### Simple Explanation — Hindi
Clean REST API ke liye:

- Clear URLs
- Correct HTTP methods
- Meaningful status codes
- Consistent response format
- Validation
- Authentication/authorization
- Pagination
- Centralized error handling

use karna important hai.

### Example
Instead of:
```text
GET /getAllUsers
```

A resource-oriented style can be:
```text
GET /users
```

---

## 82. How do you validate incoming API data?

### Simple Explanation — English
Input validation means checking whether incoming data matches the expected rules before processing it.

Validation can check:

- Required fields
- Data types
- String length
- Email format
- Numeric ranges
- Allowed values
- Business rules

Libraries such as Zod, Joi, or express-validator can be used.

### Simple Explanation — Hindi
API mein incoming data ko process karne se pehle validate karna chahiye.

For example:

```text
email → valid format?
age → number?
password → minimum length?
name → required?
```

Validation library ya custom validation use ki ja sakti hai.

### Example
```js
const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18)
});
```

---

## 83. Where should validation be performed in a Node.js application?

### Simple Explanation — English
Validation should happen before business logic processes untrusted input.

A common structure is:

```text
Request
 ↓
Authentication
 ↓
Validation
 ↓
Controller
 ↓
Service
 ↓
Database
```

Business rules can also be enforced in the service/database layer where appropriate. Client-side validation alone is not enough because clients cannot be trusted.

### Simple Explanation — Hindi
Validation ko business logic aur database operation se pehle perform karna chahiye.

Common flow:

```text
Request
 ↓
Auth
 ↓
Validation
 ↓
Controller
 ↓
Service
 ↓
Database
```

Sirf frontend validation par depend nahi karna chahiye because frontend input trusted nahi hota.

---

## 84. How do you handle API errors consistently?

### Simple Explanation — English
I would use a centralized error-handling approach.

Instead of every controller manually creating different error responses, errors can be passed to a common error handler. The API can then return a consistent structure.

### Simple Explanation — Hindi
API errors ko consistent rakhne ke liye centralized error handling use karna better hai.

Har controller mein alag-alag error response banane ke bajay common error handler use kar sakte hain.

### Example
```json
{
  "success": false,
  "message": "User not found",
  "code": "USER_NOT_FOUND"
}
```

The exact response structure should remain consistent across the API.

---

## 85. How would you implement centralized error handling in Express?

### Simple Explanation — English
I would create an error-handling middleware and make controllers pass errors to it.

A custom error class can also be used for known application errors.

### Simple Explanation — Hindi
Main centralized error middleware create karunga aur controllers se errors ko `next(error)` ke through us middleware tak bhejunga.

Known application errors ke liye custom error class bhi use kar sakte hain.

### Example
```js
app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      throw new Error("User not found");
    }

    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message
  });
});
```

In a production application, I would distinguish operational/client errors from unexpected internal errors.

---

## 86. How do you handle API pagination in Node.js?

### Simple Explanation — English
Pagination prevents the API from returning an unnecessarily large dataset in one response.

A common approach is to accept `page` and `limit`, calculate the offset, and query only the required records.

For very large or frequently changing datasets, cursor-based pagination can be preferable.

### Simple Explanation — Hindi
Pagination ka use large data ko ek hi response mein return karne se bachne ke liye hota hai.

Common approach:

```text
page = 2
limit = 20
```

Then the API returns only those 20 records.

### Example
```js
const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 20;

const skip = (page - 1) * limit;

const users = await User.find()
  .skip(skip)
  .limit(limit);
```

For very large collections, cursor-based pagination can provide better performance than large offsets.

---

## 87. What is authentication vs authorization?

### Simple Explanation — English
**Authentication** answers: "Who are you?"

**Authorization** answers: "What are you allowed to do?"

For example, logging in with email/password authenticates a user. Checking whether that user can delete another user's account is authorization.

### Simple Explanation — Hindi
**Authentication** ka matlab hai user ki identity verify karna.

**Authorization** ka matlab hai verify karna ki authenticated user ko kya permission hai.

### Example
```text
Login
 ↓
Authentication
 ↓
User identified
 ↓
Can user access admin route?
 ↓
Authorization
```

---

## 88. How does JWT authentication work?

### Simple Explanation — English
JWT-based authentication commonly works like this:

1. User sends login credentials.
2. Server verifies the credentials.
3. Server creates a signed access token.
4. Client sends the token with later requests.
5. Server verifies the token and identifies the user.

JWTs are signed so the server can detect whether the token was modified.

### Simple Explanation — Hindi
JWT authentication mein:

1. User login karta hai.
2. Server credentials verify karta hai.
3. Server signed JWT generate karta hai.
4. Client future requests mein token send karta hai.
5. Server token verify karke user ko identify karta hai.

### Example
```text
Login
 ↓
Credentials verified
 ↓
JWT created
 ↓
Client stores/sends token
 ↓
Authorization middleware verifies JWT
 ↓
Protected route
```

---

## 89. What is the difference between access tokens and refresh tokens?

### Simple Explanation — English
An access token is normally short-lived and is sent with API requests to access protected resources.

A refresh token is used to obtain a new access token when the access token expires. Refresh tokens are generally longer-lived and should be handled more carefully.

### Simple Explanation — Hindi
Access token usually short-lived hota hai aur protected API requests ke liye use hota hai.

Refresh token ka use new access token lene ke liye hota hai jab access token expire ho jata hai.

### Example
```text
Login
 ↓
Access Token + Refresh Token
 ↓
API requests use Access Token
 ↓
Access Token expires
 ↓
Refresh Token
 ↓
New Access Token
```

---

## 90. Where should you store JWT tokens on the frontend?

### Simple Explanation — English
There is no single answer for every architecture, but for browser-based applications, storing sensitive long-lived tokens in `localStorage` exposes them to JavaScript and therefore increases the impact of an XSS vulnerability.

A common secure approach is to keep sensitive authentication tokens in `HttpOnly`, `Secure` cookies where appropriate, with suitable CSRF protections.

The final design depends on the application's architecture and threat model.

### Simple Explanation — Hindi
JWT ko browser mein store karne ka choice security architecture par depend karta hai.

`localStorage` mein token JavaScript se accessible hota hai, isliye XSS hone par token theft ka risk ho sakta hai.

Common approach mein sensitive tokens ko `HttpOnly` aur `Secure` cookies mein rakhna consider kiya jata hai, aur cookie-based authentication ke saath CSRF protection bhi properly handle karna hota hai.

### Interview Point
Sirf "JWT ko localStorage mein rakhenge" bolna enough nahi hai. Security trade-offs explain karna better answer hai.

---

## 91. What is the difference between cookies and localStorage for authentication?

### Simple Explanation — English
Cookies are automatically included in matching HTTP requests by the browser. `HttpOnly` cookies cannot be read directly by client-side JavaScript, which can reduce token exposure to XSS.

`localStorage` is accessible to JavaScript, so malicious JavaScript running in the page can potentially read stored tokens.

Cookies introduce their own considerations, especially CSRF, so secure cookie attributes and appropriate CSRF defenses are important.

### Simple Explanation — Hindi
Cookies browser ke matching requests ke saath automatically send ho sakti hain. `HttpOnly` cookie ko client-side JavaScript directly read nahi kar sakta.

`localStorage` JavaScript se directly accessible hota hai, isliye XSS attack ke case mein stored token expose ho sakta hai.

Cookie use karte waqt CSRF protection aur secure cookie settings ka dhyan rakhna chahiye.

---

## 92. What is CORS, and why does it happen?

### Simple Explanation — English
CORS stands for Cross-Origin Resource Sharing.

Browsers enforce the same-origin policy. When a frontend from one origin tries to access a resource from another origin, the server needs to provide appropriate CORS headers to allow the browser to make the request.

### Simple Explanation — Hindi
CORS ka full form Cross-Origin Resource Sharing hai.

Browser security ke according different origins ke beech requests restricted ho sakti hain.

Agar React frontend aur Node.js API different origins par hain, server ko appropriate CORS headers provide karne pad sakte hain.

### Example
```text
Frontend:
http://localhost:5173

Backend:
http://localhost:5000
```

Ye different origins hain, so CORS configuration may be required.

---

## 93. How do you configure CORS securely in Express?

### Simple Explanation — English
I would avoid allowing every origin blindly in production.

Instead, I would configure the allowed frontend origins and only enable credentials when required.

### Simple Explanation — Hindi
Production mein blindly:

```js
origin: "*"
```

allow karna avoid karna chahiye, especially when credentials/cookies are involved.

Specific trusted origins configure karna better hai.

### Example
```js
const cors = require("cors");

app.use(cors({
  origin: ["https://example.com"],
  credentials: true
}));
```

The allowed origin list should match the actual application architecture.

---

## 94. What is the purpose of Helmet in Express?

### Simple Explanation — English
Helmet is a collection of Express middleware that helps set various HTTP security-related headers.

These headers can reduce exposure to certain common web security risks by giving browsers safer instructions.

Helmet is not a complete security solution. Input validation, authentication, authorization, rate limiting, dependency security, and secure application design are still required.

### Simple Explanation — Hindi
Helmet Express application mein different security-related HTTP headers set karne mein help karta hai.

Ye security improve karta hai, lekin sirf Helmet se application fully secure nahi ho jati.

Input validation, authentication, authorization, rate limiting aur other security practices bhi required hain.

### Example
```js
const helmet = require("helmet");

app.use(helmet());
```

---

## 95. How do you protect a Node.js API from brute-force attacks?

### Simple Explanation — English
Common protections include:

- Rate limiting
- Login attempt limits
- Temporary account/IP throttling
- Strong password policies
- Multi-factor authentication where appropriate
- Monitoring and alerting
- Avoiding overly detailed authentication error messages

For sensitive endpoints such as login and password reset, rate limiting is particularly important.

### Simple Explanation — Hindi
Brute-force attacks se bachne ke liye:

- Rate limiting
- Login attempt limits
- Temporary blocking/throttling
- Strong passwords
- MFA where appropriate
- Monitoring

use kiya ja sakta hai.

### Example
```text
User
 ↓
5 failed login attempts
 ↓
Rate limit / temporary delay
 ↓
Further attempts slowed or blocked
```

---

## 96. How do you prevent SQL/NoSQL injection in a Node.js application?

### Simple Explanation — English
Never directly trust user input when constructing database queries.

Use:

- Parameterized queries for SQL
- Safe query APIs/ODM patterns
- Strict input validation
- Allow-lists where appropriate
- Proper authorization
- Avoid unsafe dynamic query construction

For MongoDB/Mongoose, do not blindly merge user-provided objects into query operators or update objects.

### Simple Explanation — Hindi
User input ko directly database query mein trust nahi karna chahiye.

SQL mein parameterized queries use karni chahiye. MongoDB mein safe query patterns, validation aur controlled fields use karne chahiye.

### Example
Avoid blindly doing:
```js
User.find(req.body);
```

Instead, explicitly select expected fields:

```js
User.find({
  email: req.body.email
});
```

---

## 97. How do you securely store passwords?

### Simple Explanation — English
Passwords should never be stored as plain text.

They should be hashed using a password-hashing algorithm designed for passwords, such as Argon2 or bcrypt. A unique salt should be used as part of the password-hashing process.

When logging in, hash verification compares the supplied password against the stored hash.

### Simple Explanation — Hindi
Password ko kabhi plain text mein database mein store nahi karna chahiye.

Password hashing algorithm jaise Argon2 ya bcrypt ka use karna chahiye.

### Example
```js
const hash = await bcrypt.hash(password, 12);

const isValid = await bcrypt.compare(password, hash);
```

Database mein actual password nahi, hash store hota hai.

---

## 98. Why should sensitive information not be stored directly in package.json, source code, or Git?

### Simple Explanation — English
API keys, database passwords, JWT secrets, and other secrets should not be hard-coded in source code or committed to Git.

Once a secret is committed, it can remain in Git history even after the visible line is removed.

Use environment variables or a proper secrets-management system instead.

### Simple Explanation — Hindi
API keys, database passwords, JWT secrets jaise sensitive data source code ya Git repository mein directly store nahi karna chahiye.

Git history mein secret commit hone ke baad delete karne par bhi old history mein reh sakta hai.

### Example
Avoid:
```js
const DB_PASSWORD = "mySecret123";
```

Prefer:
```js
const dbPassword = process.env.DB_PASSWORD;
```

Production mein proper secrets manager bhi use kiya ja sakta hai.

---

## 99. How do you improve the performance of a Node.js API?

### Simple Explanation — English
I would first measure the bottleneck instead of blindly adding optimizations.

Common areas to check:

- Slow database queries
- Missing database indexes
- Excessive API calls
- Large response payloads
- Blocking CPU work
- Unnecessary serialization
- Memory usage
- External API latency
- Caching opportunities
- Pagination
- Connection pooling

### Simple Explanation — Hindi
API performance improve karne se pehle bottleneck identify karna chahiye.

Main check karunga:

```text
Database slow?
CPU blocking?
External API slow?
Response too large?
Missing indexes?
Repeated queries?
Memory issue?
```

Phir actual bottleneck ke according optimization karunga.

---

## 100. How do you identify why a Node.js API is slow?

### Simple Explanation — English
I would break the request into parts and measure each one.

For example:

```text
Request
 ↓
Middleware time
 ↓
Database query
 ↓
External API
 ↓
Business logic
 ↓
Serialization
 ↓
Response
```

Then I would use logs, metrics, tracing, database query analysis, Node.js profiling, and monitoring tools to find the slow section.

The key interview point is: **measure first, then optimize the actual bottleneck.**

### Simple Explanation — Hindi
API slow hone par directly code optimize nahi karna chahiye.

Request ke different parts ka time measure karna chahiye:

```text
Middleware
 ↓
Database
 ↓
External API
 ↓
Business Logic
 ↓
Response
```

Logs, metrics, tracing aur database analysis se bottleneck identify karke targeted optimization karni chahiye.

### Example
If total API time is 5 seconds:

```text
DB query       → 4.2 sec
Business logic → 0.1 sec
Response       → 0.2 sec
```

To main pehle database bottleneck investigate karunga, Node.js code ko blindly optimize nahi karunga.
