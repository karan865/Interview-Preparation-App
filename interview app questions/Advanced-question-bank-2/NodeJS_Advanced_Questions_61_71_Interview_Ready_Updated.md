# Node.js Advanced Interview Questions 61–71 — PDF Answers + English + Hindi

> **Important:** The **“My PDF Answer — Verbatim Transcription”** section follows the handwritten/scanned PDF as closely as readable. The source contains shorthand, informal wording, and grammar mistakes, so these have not been silently corrected or replaced with generic answers.
>
> The English and Hindi sections are simple interview-friendly explanations based on the source answer.
>
> **Source:** Uploaded handwritten PDF, Node.js Advanced Questions section, Questions 61–71.

---

## 61. What are route parameters in Express.js? How do you access them?

### My PDF Answer — Verbatim Transcription

Route parameters in Express.js are placeholders in the route definition that capture values from the URL. They are specified in the route path using colon syntax (`:`) and can be accessed in route handlers using `req.params`.

```js
app.get('/users/:userId', (req, res) => {
    const userId = req.params.userId;
    // use userId in the route handler
});
```

### Simple Explanation — English

Route parameters are dynamic values captured from the URL path.

For example:

```js
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
  res.send(`User: ${userId}`);
});
```

If the request is `/users/123`, then `req.params.userId` is `"123"`.

The flow is:

```text
/users/123
    ↓
:userId = 123
    ↓
req.params.userId
```

Route parameters are useful when the resource identifier is part of the URL, such as a user ID, product ID, or order ID.

### Simple Explanation — Hindi

Route parameters URL se dynamic value capture karne ke liye use hote hain.

Example:

```js
app.get('/users/:userId', (req, res) => {
  const userId = req.params.userId;
});
```

Agar URL `/users/123` hai, to `req.params.userId` ki value `"123"` hogi.

```text
/users/123
    ↓
:userId = 123
    ↓
req.params.userId
```

Inka use user ID, product ID ya order ID jaise dynamic resources ke liye hota hai.

## 62. How do you handle sessions and cookies in an Express.js application?

### My PDF Answer — Verbatim Transcription

Session and cookies in Express.js application can be handled using middleware like `express-session` and `cookie-parser`.

Example:

```js
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));
```

### Simple Explanation — English

In Express.js, cookies and sessions are commonly handled using middleware such as `cookie-parser` and `express-session`.

A session normally works like this:

```text
Login
  ↓
Create server-side session
  ↓
Send session ID in cookie
  ↓
Browser sends cookie on later requests
  ↓
Server finds the session
  ↓
User is identified
```

Example:

```js
const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
```

The session ID is commonly stored in a cookie, while the actual session data is maintained by the server-side session store. In production, a shared session store is important when multiple application instances are running.

### Simple Explanation — Hindi

Express.js mein cookies aur sessions ko handle karne ke liye `cookie-parser` aur `express-session` jaise middleware use kiye ja sakte hain.

Session ka basic flow:

```text
Login
  ↓
Session Create
  ↓
Session ID Cookie
  ↓
Next Request + Cookie
  ↓
Server Session Find
  ↓
User Identify
```

Example:

```js
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
```

Session ID commonly cookie mein hoti hai, jabki actual session data server-side store mein maintain hota hai. Multiple servers hone par shared session store useful hota hai.

## 63. How do you create a basic HTTP server in Node.js?

### My PDF Answer — Verbatim Transcription

Node.js makes it simple to create an HTTP server using the built-in `http` module.

```js
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello world!');
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```

### Simple Explanation — English

Node.js provides a built-in `http` module for creating an HTTP server without Express.

The basic steps are:

1. Import the `http` module.
2. Create a server with `http.createServer()`.
3. Handle the request and response.
4. Start the server with `server.listen()`.

Example:

```js
const http = require('node:http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

Flow:

```text
Client Request
      ↓
http.createServer()
      ↓
Request Handler
      ↓
HTTP Response
```

Express is built on top of Node's HTTP capabilities and provides higher-level routing and middleware features.

### Simple Explanation — Hindi

Node.js mein built-in `http` module ka use karke Express ke bina basic HTTP server create kar sakte hain.

Steps:

1. `http` module import karo.
2. `http.createServer()` se server banao.
3. Request aur response handle karo.
4. `server.listen()` se port par server start karo.

```text
Client Request
      ↓
HTTP Server
      ↓
Request Handler
      ↓
Response
```

Express Node.js ke HTTP capabilities ke upar higher-level routing aur middleware features provide karta hai.

## 64. What is the `fs` module in Node.js?

### My PDF Answer — Verbatim Transcription

The `fs` module provides tools to interact with the file system.

Such as reading, writing, deleting files and directories.

### Simple Explanation — English

The Node.js `fs` module provides APIs for interacting with the file system.

It can be used to read, write, update, rename, and delete files and directories. Node.js provides both synchronous and asynchronous APIs, but asynchronous APIs are generally preferred in server applications so the event loop is not unnecessarily blocked.

Example:

```js
const fs = require('node:fs/promises');

const data = await fs.readFile('data.txt', 'utf8');
console.log(data);
```

Typical flow:

```text
Node.js Application
        ↓
       fs
        ↓
File System
        ↓
Read / Write / Update
```

### Simple Explanation — Hindi

Node.js ka `fs` module file system ke saath interact karne ke liye APIs provide karta hai.

Isse files aur directories ko read, write, update, rename aur delete kiya ja sakta hai. Server applications mein generally asynchronous APIs prefer ki jati hain taaki event loop unnecessarily block na ho.

Example:

```js
const fs = require('node:fs/promises');

const data = await fs.readFile('data.txt', 'utf8');
console.log(data);
```

Flow:

```text
Node.js App
    ↓
   fs
    ↓
File System
```


## 65. What is event-loop starvation and how can it be prevented?

### My PDF Answer — Verbatim Transcription

Event-loop starvation occurs when long-running tasks block the event loop, preventing it from handling other tasks.

This can make your application unresponsive.

### How to prevent event-loop starvation:

- **Use worker threads** → offload CPU-intensive tasks to separate threads.
- **Asynchronous operations** → avoid blocking the event loop with synchronous methods.
- **Split tasks into smaller chunks.**

### Simple Explanation — English

Event-loop starvation happens when the Node.js event loop is kept busy for too long, so it cannot process other callbacks, timers, or incoming requests.

A common cause is CPU-heavy synchronous code:

```text
Request A
   ↓
CPU-heavy task
   ↓
Event Loop blocked
   ↓
Request B, C, D wait
```

To prevent it:

- Move CPU-intensive work to worker threads or another process.
- Prefer asynchronous APIs instead of blocking synchronous APIs.
- Break very large computations into smaller chunks when appropriate.
- Avoid accidental infinite or very long loops in request handlers.

The key idea is to keep the main event loop free to process other work.

### Simple Explanation — Hindi

Event-loop starvation tab hota hai jab Node.js event loop bahut der tak busy ya blocked rahta hai aur doosre callbacks aur requests process nahi kar pata.

Example:

```text
Request A
   ↓
CPU-heavy Task
   ↓
Event Loop Blocked
   ↓
Request B, C, D Wait
```

Prevent karne ke liye:

- CPU-heavy work ko worker threads ya separate process mein bhejo.
- Blocking synchronous APIs ki jagah asynchronous APIs use karo.
- Large computation ko smaller chunks mein divide karo.
- Long/infinite loops ko request handlers mein avoid karo.

Main goal hai event loop ko free rakhna.

## 66. What are the differences between `process.nextTick()` and `setImmediate()`?

### My PDF Answer — Verbatim Transcription

Both `process.nextTick()` and `setImmediate()` schedule callbacks.

### `process.nextTick()`

Runs right after the current function, before the event loop continues.

**Super fast, high priority**

→ Do it immediately after this step, before moving on.

### `setImmediate()`

Runs on the next event loop cycle, after I/O is done.

**Slower, lower priority**

→ Do it as soon as possible but after I/O finishes.

### Simple Explanation — English

Both `process.nextTick()` and `setImmediate()` schedule a callback to run after the current synchronous work, but they are placed differently in Node's scheduling model.

- `process.nextTick()` runs through the next-tick queue before the event loop continues to later phases. Excessive use can starve the event loop.
- `setImmediate()` schedules a callback for the event loop's check phase.

A simple mental model is:

```text
Current synchronous code
        ↓
nextTick callbacks
        ↓
Event loop continues
        ↓
I/O / other phases
        ↓
setImmediate in check phase
```

The exact ordering can depend on where the calls are made, especially when comparing them inside versus outside an I/O callback. So I would avoid saying that `setImmediate()` is always simply "slower." 

### Simple Explanation — Hindi

`process.nextTick()` aur `setImmediate()` dono callback ko later execute karne ke liye schedule karte hain, lekin unka scheduling mechanism different hai.

- `process.nextTick()` next-tick queue mein callback schedule karta hai aur event loop ke later phases se pehle run ho sakta hai.
- `setImmediate()` event loop ke check phase mein callback schedule karta hai.

```text
Current Code
    ↓
nextTick
    ↓
Event Loop
    ↓
I/O / Other Phases
    ↓
setImmediate
```

Important point: exact execution order context par depend kar sakta hai, especially I/O callback ke andar aur bahar. Isliye `setImmediate()` ko simply "always slower" kehna accurate nahi hai.

## 67. Can you explain how to handle security in a Node.js application?

### My PDF Answer — Verbatim Transcription

1) **Dependencies** → update often, use `npm audit`, Snyk/Dependabot.

2) **Input validation** → validate & sanitize (`Joi`, `validator.js`).

3) **Auth** → use JWT/Auth, hash passwords (`bcrypt`/`argon2`), apply RBAC.

4) **HTTP headers** → use Helmet middleware.

5) **HTTP & cookies** → enforce HTTPS (`httpOnly` + `secure` + `SameSite`).

6) **Rate limiting** → prevent brute-force (`express-rate-limit`).

7) **Error handling** → no sensitive info in errors, log securely.

8) **Env security** → store secrets in env vars, not code.

9) **Other** → enable CSRF protection where needed, update Node.js, use reverse proxy (Nginx).

### Simple Explanation — English

Node.js security should be handled in multiple layers.

The PDF recommends:

- Keep dependencies updated and audit them with tools such as `npm audit`.
- Validate and sanitize input.
- Use secure authentication, password hashing such as bcrypt/Argon2, and authorization/RBAC.
- Use security headers such as Helmet.
- Enforce HTTPS and secure cookie settings such as `httpOnly`, `secure`, and appropriate `SameSite`.
- Add rate limiting to reduce brute-force and abuse.
- Do not expose sensitive details in error responses.
- Store secrets in environment variables or a secret manager rather than source code.
- Use CSRF protection where the application architecture requires it.
- Keep Node.js updated and use a reverse proxy where appropriate.

A practical security flow is:

```text
Input Validation
      ↓
Authentication
      ↓
Authorization
      ↓
Secure HTTP / Cookies
      ↓
Rate Limiting
      ↓
Safe Errors + Logging
      ↓
Monitoring + Updates
```

### Simple Explanation — Hindi

Node.js security ko multiple layers mein implement karna chahiye.

PDF ke according important points:

- Dependencies updated rakho aur `npm audit` jaise tools use karo.
- Input validate aur sanitize karo.
- Secure authentication, password hashing aur RBAC use karo.
- Helmet jaise security headers use karo.
- HTTPS aur secure cookie settings (`httpOnly`, `secure`, `SameSite`) use karo.
- Brute-force attacks ko reduce karne ke liye rate limiting lagao.
- Error responses mein sensitive information expose mat karo.
- Secrets ko environment variables ya secret manager mein rakho.
- Architecture ke according CSRF protection use karo.
- Node.js updated rakho aur required cases mein reverse proxy use karo.

```text
Validation
   ↓
Authentication
   ↓
Authorization
   ↓
Secure HTTP/Cookies
   ↓
Rate Limiting
   ↓
Safe Errors + Logging
```

## 68. Can you explain the difference between CommonJS and ES modules?

### My PDF Answer — Verbatim Transcription

### CommonJS

Old Node.js module system (`require`).

Synchronous, Node-specific.

### ES modules

Modern standard (`import/export`).

Async, works in browsers + Node.

Future-proof.

### Simple Explanation — English

CommonJS and ES Modules are two module systems used in Node.js.

CommonJS typically uses `require()` and `module.exports`:

```js
const express = require('express');
module.exports = router;
```

ES Modules use `import` and `export`:

```js
import express from 'express';
export default router;
```

The main practical difference is the module syntax and how the module system is configured and loaded. ES Modules are the standardized JavaScript module system and are supported in modern Node.js and browsers.

In an interview, I would avoid saying that CommonJS is simply "synchronous" and ES Modules are simply "asynchronous"; the real differences are broader and include module resolution, loading semantics, interoperability, and configuration.

### Simple Explanation — Hindi

CommonJS aur ES Modules Node.js mein use hone wale do module systems hain.

CommonJS mein generally:

```js
const express = require('express');
module.exports = router;
```

use hota hai.

ES Modules mein:

```js
import express from 'express';
export default router;
```

use hota hai.

ES Modules standardized JavaScript module system hai aur modern Node.js aur browsers mein supported hai.

Interview mein sirf ye kehna ki CommonJS synchronous aur ES Modules asynchronous hain, complete explanation nahi hai. Module syntax, loading aur interoperability bhi important differences hain.

## 69. What is the difference between `app.route()` and `express.Router()` in Express.js?

### My PDF Answer — Verbatim Transcription

Use `app.route()` when you want to handle different methods for one route.

Example:

```js
app.route('/users')
    .get((req, res) => {
        res.send('get users');
    })
    .post((req, res) => {
        // ...
    })
    .put((req, res) => {
        // ...
    });
```

### `express.Router()`

Use Router() when you want to organize many related routes into modules.

```js
const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('get users');
});

router.post('/', (req, res) => {
    res.send('create user');
});

app.use('/users', router);
```

### Simple Explanation — English

`app.route()` and `express.Router()` solve different organizational problems.

`app.route()` is useful when several HTTP methods belong to the same route path:

```js
app.route('/users')
  .get((req, res) => res.send('get users'))
  .post((req, res) => res.send('create user'));
```

`express.Router()` creates a modular router that can group many related routes:

```js
const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);

app.use('/users', router);
```

So the interview summary is:

```text
app.route()
→ Multiple methods for one path

express.Router()
→ Group and modularize related routes
```

### Simple Explanation — Hindi

`app.route()` aur `express.Router()` ka use different organization purposes ke liye hota hai.

`app.route()` same route path par multiple HTTP methods define karne ke liye useful hai:

```js
app.route('/users')
  .get(...)
  .post(...);
```

`express.Router()` related multiple routes ko separate modular router mein organize karta hai:

```js
const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);

app.use('/users', router);
```

Simple difference:

```text
app.route()
→ Ek path ke multiple methods

express.Router()
→ Related routes ko module mein organize karna
```

## 70. How do you serve static files from an Express.js application?

### My PDF Answer — Verbatim Transcription

Use `express.static('folder name')` to serve static files like images, CSS and JavaScript in an Express app.

Example:

```js
app.use(express.static('public'));
```

→ serve files from `public` folder

Or:

```js
app.use('/static', express.static('public'));
```

### Simple Explanation — English

Express provides the `express.static()` middleware for serving static files such as images, CSS, JavaScript, and other public assets.

For example:

```js
app.use(express.static('public'));
```

If `public/logo.png` exists, the file can be requested directly through the corresponding URL.

A URL prefix can also be added:

```js
app.use('/static', express.static('public'));
```

Then the public files are exposed under the `/static` path.

The important point is that `express.static()` maps a directory of files to URLs so Express can serve those assets directly.

### Simple Explanation — Hindi

Express mein static files jaise images, CSS, JavaScript aur other assets serve karne ke liye `express.static()` middleware use hota hai.

Example:

```js
app.use(express.static('public'));
```

Agar `public` folder mein `logo.png` hai, to usse URL ke through serve kiya ja sakta hai.

Prefix bhi de sakte hain:

```js
app.use('/static', express.static('public'));
```

Isse files `/static` URL path ke under serve hongi.

Simple words mein, `express.static()` folder ki files ko URLs ke through directly serve karta hai.

## 71. How do you use a template engine with Express.js?

### My PDF Answer — Verbatim Transcription

### Step 1 → Install a template engine (EJS/Pug etc.)

```bash
npm install ejs
```

### Step 2 → Set it in Express with `app.set('view engine', ...)`

```js
app.set('view engine', 'ejs');
```

→ use EJS

```js
app.set('views', './views');
```

→ folder where templates live

### Step 3 → Render in a route

```js
app.get('/', (req, res) => {
    res.render('index', {name: 'John'});
});
```

### Popular engines

EJS, Pug, Handlebars, Mustache

### Simple Explanation — English

To use a template engine with Express, I would follow four basic steps.

1. Install the engine, for example EJS:

```bash
npm install ejs
```

2. Configure Express:

```js
app.set('view engine', 'ejs');
app.set('views', './views');
```

3. Create a template such as `views/index.ejs`.

4. Render it from a route:

```js
app.get('/', (req, res) => {
  res.render('index', { name: 'John' });
});
```

The flow is:

```text
Route
  ↓
res.render()
  ↓
Template Engine
  ↓
HTML Generated
  ↓
Response to Browser
```

Common template engines mentioned in the PDF include EJS, Pug, Handlebars, and Mustache.

### Simple Explanation — Hindi

Express ke saath template engine use karne ke liye basic steps hain:

1. EJS/Pug jaise engine ko install karo.
2. Express mein view engine configure karo.
3. Views folder mein template banao.
4. Route ke andar `res.render()` use karo.

Example:

```js
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', { name: 'John' });
});
```

Flow:

```text
Route
  ↓
res.render()
  ↓
Template Engine
  ↓
HTML
  ↓
Browser
```

PDF mein EJS, Pug, Handlebars aur Mustache popular template engines ke examples diye gaye hain.

## Source Note

Questions 61–71 and the **“My PDF Answer — Verbatim Transcription”** sections above are based on the final handwritten/scanned pages of the Node.js Advanced Questions section. The source pages contain Questions 61–71 and their handwritten answers. fileciteturn13file0 fileciteturn14file0

The English and Hindi sections are simplified explanations for interview preparation. They do not replace or silently correct the source-PDF answers.
