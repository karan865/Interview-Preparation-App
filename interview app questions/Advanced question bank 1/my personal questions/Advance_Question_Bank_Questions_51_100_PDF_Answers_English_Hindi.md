# Next Batch — Questions 51–100: PDF Answer + English + Hindi

> **Source:** Questions 51–100 from the provided `Advance_Question_Bank.md`, with the original handwritten PDF answer transcribed in the first section for each question.
>
> **Important:** The **My PDF Answer — Verbatim Transcription** section is kept in the wording/spelling/style of the PDF as closely as readable. It is not silently corrected. The English and Hindi sections are separate simple explanations.

## 51. Why do we need state instead of normal variables in React?

### My PDF Answer — Verbatim Transcription

State persists across re-render , while variable reset.

2) State triggers UI updates, but variable don't.

3) State handles async updates properly.

4) "State helps manage app data predictable"

### Simple Explanation — English

A normal variable is recreated when the component function runs again, and changing it does not tell React to update the UI. State is stored by React between renders, and calling the state setter schedules an update. That is why state is used for values that affect what the user sees.

### Simple Explanation — Hindi

Normal variable component ke re-render hone par dobara create ho sakta hai aur usko change karne se React ko UI update karne ka signal nahi milta. State React ke through renders ke beech persist hoti hai aur setter call karne par UI update hoti hai. Isliye UI ko affect karne wale data ke liye state use karte hain.

---

## 52. What is the cascading/cascade rule in CSS?

### My PDF Answer — Verbatim Transcription

The Cascade in CSS determine which Style apply when
multiple rules target the same element. (CSS Specificity)

### Simple Explanation — English

The CSS cascade decides which rule wins when multiple CSS rules apply to the same element. Specificity is one important part of this decision, along with factors such as origin, importance, and source order.

### Simple Explanation — Hindi

CSS cascade decide karta hai ki jab ek hi element par multiple CSS rules apply ho rahe hon to kaunsa rule use hoga. Specificity important factor hai, aur origin, importance aur source order bhi decision mein role play karte hain.

---

## 53. React app vs JavaScript app.

### My PDF Answer — Verbatim Transcription

① React uses Component bases approach or JS uses Vanilla js or Other lib.
② React uses useState, useReducer or Redux for hand handling State
JS uses variables , localStorage or Custom logic.
③ optimise with Reconciliation & Virtual DOM . JS -> Direct DOM updates
    (can be Slow)
④ Uses React Router DOM for navigation | uses window.location or third party app.
⑤ faster with Reusable Components & State management
    JS can be Slower due to manual DOM update.

### Simple Explanation — English

A React app uses a component-based UI architecture and React manages rendering from state and props. A plain JavaScript app commonly manipulates the DOM directly with browser APIs. React also provides patterns for reusable components, state management, and routing, while plain JavaScript requires you to build or choose those patterns yourself.

### Simple Explanation — Hindi

React app mein UI ko components ke through organize kiya jata hai aur React state/props ke basis par rendering manage karta hai. Plain JavaScript app mein commonly DOM ko directly manipulate kiya jata hai. React reusable components, state management aur routing ke liye structured approach deta hai.

---

## 54. Declarative vs imperative programming.

### My PDF Answer — Verbatim Transcription

Declarative programming focuses on what the outcome should be,
telling the System handle the details, it abstracts away the
step by step process. eg -> include React, SQL, and CSS.

Imperative programming focuses on how to achieve the result,
requiring explicit step-by-step instructions. Its used in
JS, C and java.

### Simple Explanation — English

Declarative code describes the result you want and lets the system decide many of the implementation steps. React is generally declarative because you describe what the UI should look like for a given state.

Imperative code tells the program exactly which steps to perform to achieve the result, such as directly manipulating DOM elements.

### Simple Explanation — Hindi

Declarative programming mein aap batate ho ki final result kya chahiye aur system implementation ke details handle karta hai. React is approach ka common example hai.

Imperative programming mein aap step-by-step batate ho ki result kaise achieve karna hai. Direct DOM manipulation iska common example hai.

---

## 55. What are pseudo-classes and pseudo-elements?

### My PDF Answer — Verbatim Transcription

pseudo-classes -> :hover, :focus, :nth-child(), checked
pseudo-element -> target specific part of an element
eg -> ::before, ::after, ::first-letter, first-line

### Simple Explanation — English

A pseudo-class represents a state or condition of an existing element, such as `:hover`, `:focus`, or `:checked`.

A pseudo-element targets a specific virtual part of an element, such as `::before`, `::after`, or `::first-letter`.

### Simple Explanation — Hindi

Pseudo-class element ki state ya condition ko represent karta hai, jaise `:hover`, `:focus`, `:checked`.

Pseudo-element element ke kisi specific part ko target karta hai, jaise `::before`, `::after` aur `::first-letter`.

---

## 56. What is the reconciliation process in React?

### My PDF Answer — Verbatim Transcription

Reconciliation process

1) When State or props changes, React creates a new virtual DOM.
2) It compare the new Virtual DOM with the previous one by
   diffing method.
3) React identify changes and update only the necessary parts
   in the Real DOM

Result - faster updates, best performance and Smooth UI rendering.

### Simple Explanation — English

When state or props change, React creates a new description of the UI and compares it with the previous one. This comparison helps React determine which parts need to change before committing updates to the real DOM.

Keys and component identity are important when React reconciles lists and component trees.

### Simple Explanation — Hindi

Jab state ya props change hoti hain, React UI ka new virtual representation banata hai aur usko previous representation ke saath compare karta hai. Is comparison se React ko pata chalta hai ki real DOM mein kya update karna hai.

Lists mein keys aur component identity reconciliation ke liye important hote hain.

---

## 57. How do you lift state up in React?

### My PDF Answer — Verbatim Transcription

lifting state up means moving the State from a child
component to a common parent Component so that multiple
children can Share and update the same State.

### Simple Explanation — English

Lifting state up means moving shared state to the closest common parent of the components that need it. The parent becomes the source of truth and passes values and callbacks down to the children.

### Simple Explanation — Hindi

Lifting state up ka matlab hai shared state ko children se unke common parent mein move karna. Parent state ko manage karta hai aur values aur callbacks children ko props ke through deta hai.

---

## 58. Explain React Fragments.

### My PDF Answer — Verbatim Transcription

When Returning multiple elements from a Components without unnecessary
wrapper element.

### Simple Explanation — English

A React Fragment lets a component return multiple elements without adding an extra DOM wrapper. The short syntax is `<>...</>`, and `React.Fragment` can be used when you need to provide a key or prefer the explicit form.

### Simple Explanation — Hindi

React Fragment multiple elements ko group karne deta hai bina extra DOM wrapper ke. `<>...</>` iska short syntax hai. Isse unnecessary `<div>` add karne ki zarurat nahi padti.

---

## 59. Explain `useCallback()` and `useMemo()` with an example.

### My PDF Answer — Verbatim Transcription

useCallback() Both are React hooks used for performance optimization,
but they serve different purposes.

=> useCallback()
• memorizes a function
• Returns - a memorized functions
• prevents function recreation when passed as a prop.
-> without useCallback() -> function get recreated -> child re-render.
=> withCallback() -> function stays the same -> child only re-render
                                  if needed.

=> useMemo() -> memoizes a Computed value
• Return - A memoized value
• Avoids unnecessary recalculations.

### Simple Explanation — English

`useCallback` memoizes a function reference, while `useMemo` memoizes the result of a calculation.

`useCallback` is useful when a stable callback reference matters, for example when passing a callback to a memoized child.

`useMemo` is useful when an expensive calculation should not be repeated when its dependencies have not changed.

### Simple Explanation — Hindi

`useCallback` function reference ko memoize karta hai, jabki `useMemo` calculation ke result ko memoize karta hai.

`useCallback` tab useful hai jab callback ka stable reference important ho, jaise memoized child ko callback pass karna.

`useMemo` expensive calculation ko unnecessary repeat hone se bachane ke liye use hota hai jab dependencies same hon.

---

## 60. What are React Suspense and `React.lazy()`?

### My PDF Answer — Verbatim Transcription

Both React.Suspense and React.lazy help in Code-Splitting
and lazy loading Components, improving performance by loading
Components only when needed.

=> lazy loading Component
• purpose - Dynamically import Components only when needed
  instead of loading everything at once.
• Benefit - faster initial load time.

=> React.Suspense()
-> Suspense wraps multiple lazy-loaded Components and
   Shows a loading message until they are Ready.
• Suspense handles lazy-loaded Components and data fetching,
  Showing a fallback UI until they are ready.

### Simple Explanation — English

`React.lazy()` loads a component dynamically, usually through a dynamic import. `Suspense` provides fallback UI while that component is still loading.

For example, a lazy route component can be wrapped in a Suspense boundary that shows a spinner or skeleton until the code is ready.

### Simple Explanation — Hindi

`React.lazy()` component ko dynamically load karta hai aur `Suspense` loading ke time fallback UI show karta hai. Jaise route load hone tak spinner ya skeleton dikhaya ja sakta hai. Ye code splitting aur lazy loading ke liye useful hai.

---

## 61. What are portals in React, and when should they be used?

### My PDF Answer — Verbatim Transcription

A portal allows you to render a Component outside the
normal React DOM hierarchy , while still keeping it inside
React's Virtual DOM.

normally , when you render a React Component, it stays inside the
<div id="root"> where your React app lives.

But Sometime , you need to display Something outside of this root , like
• modal (pop up)
• Tooltips
• Dropmenu - dropdown menu.

A portal helps you do that: it moves the Component to another part
of the HTML (like <div id="modal-root"></div>), but React
Still Controls it as if it were inside the app.

### Simple Explanation — English

A portal renders React output into a different DOM node while keeping the component part of the same React tree. It is useful for UI such as modals, tooltips, dropdown overlays, and dialogs where normal DOM nesting can create stacking or overflow problems.

### Simple Explanation — Hindi

Portal component ko kisi different DOM location par render karne deta hai, lekin component React tree ka part hi rehta hai. Modal, tooltip, dropdown aur dialog jaise UI ke liye ye useful hai, especially jab `overflow` ya stacking problem ho.

---

## 62. What is `forwardRef` in React?

### My PDF Answer — Verbatim Transcription

forwardRef() allow a parent Component to a ref to a child
Component's DOM element.

normally , ref only works on DOM elements (eg .<input>), not on
custom Components, But with forwardRef, you can pass a ref
from a parent to a child Component and access its DOM.

### Simple Explanation — English

Ref forwarding historically let a parent access a DOM node inside a custom component. A custom input component could accept a ref and attach it to the real `<input>` element so the parent could focus or otherwise control it.

### Simple Explanation — Hindi

`forwardRef` ke through parent ka ref custom child component ke andar actual DOM element tak pass kiya ja sakta tha. Jaise custom input component ke actual `<input>` ko parent focus kar sake.

---

## 63. What is the difference between `useRef()` and `createRef()` in React?

### My PDF Answer — Verbatim Transcription

useRef() (used in functional components)
    -> Return the Same Ref Object across Renders.
    -> Do not trigger a re-render when updated
    -> can mutable values.

createRef() - used in class Components
    -> create a new Ref Object every render.
    -> Does not persist across Re-render
    -> mostly, used in class Components.

### Simple Explanation — English

`useRef` is the normal ref Hook for function components and keeps the same ref object across renders. Updating `current` does not cause a re-render.

`createRef` is traditionally used with class components. The main interview difference is that `useRef` is designed for function components and its object persists across renders.

### Simple Explanation — Hindi

`useRef` function components mein normal ref Hook hai aur same ref object renders ke beech preserve karta hai. `ref.current` change karne se re-render nahi hota.

`createRef` traditionally class components ke saath use hota tha. Simple rule: function component mein `useRef` aur class component mein `createRef` commonly dekha jata hai.

---

## 64. How would you handle Error Boundaries in React?

### My PDF Answer — Verbatim Transcription

error boundaries are Special React Components that
catch javaScript error in child Components and prevent
the entire app from crashing. instead of braking , they
show a fallback UI.

Key points:
• only class Components can be error boundaries (functional Components
  can use hooks like useErrorBoundary() from external libraries).
• They Catch Rendering , lifecycle and Constructor error
  but not event handler error.

### Simple Explanation — English

I would place Error Boundaries around important UI sections such as routes or independent features. When a supported rendering error occurs, the boundary can show fallback UI and report the error.

An important point is that Error Boundaries do not catch every kind of error, such as all event-handler or asynchronous callback errors.

### Simple Explanation — Hindi

Important routes ya feature sections ke around Error Boundary place kar sakte hain. Agar child rendering mein supported error aaye, to boundary fallback UI show kar sakta hai aur error log bhi kiya ja sakta hai.

Error Boundary har type ka error catch nahi karta; especially normal event-handler errors automatically catch nahi hote.

---

## 65. How would you optimize a large-scale React application?

### My PDF Answer — Verbatim Transcription

code splitting - React.lazy() & webpack dynamic imports.

2) memoization - React.memo() , useMemo() , useCallback()

3) State Optimization - use local State where possible , useReducer()
   for Complex logic.

4) Rendering Performance - use Keys in lists , virtualized lists
   and avoid unnecessary State updates.

5) Asset & API Optimization - Cache API request , lazy load
   Images and compress assets.

6) SSR & Static Rendering - use Next.js for better Seo and
   performance.

### Simple Explanation — English

For a large React application, I would first measure the bottlenecks. Then I would use code splitting, appropriate memoization, local state where possible, virtualization for large lists, cached/server-state API data, and optimized assets.

For SSR and static rendering requirements, a framework such as Next.js can provide the needed architecture. The main goal is to reduce unnecessary JavaScript and rendering work rather than optimizing blindly.

### Simple Explanation — Hindi

Large React app ko optimize karne ke liye pehle actual bottleneck measure karna chahiye. Uske baad code splitting, required memoization, local state, large list virtualization, API caching aur asset optimization use kar sakte hain.

SSR ya static rendering ki need ho to Next.js jaisa framework useful ho sakta hai. Blindly har jagah memoization lagana sahi approach nahi hai.

---

## 66. How does React Fiber work?

### My PDF Answer — Verbatim Transcription

Before Fiber, React used a recursive reconciliation algorithm,
making updates blocking and Slow.
-> React fiber is a complete rewrite of React's reconciliation algorithm
introduced in React 16 , it makes React faster, Smoother and
more efficient by allowing interruptible rendering.

### Simple Explanation — English

React Fiber is the internal reconciliation architecture introduced in React 16. It represents rendering work as units that React can schedule more flexibly.

This architecture allows React to pause or prioritize rendering work, which supports modern features such as transitions and interruptible rendering.

### Simple Explanation — Hindi

React Fiber React ka internal reconciliation architecture hai jo React 16 mein introduce hua tha. Ye rendering work ko manageable units mein organize karta hai aur React ko work ko better schedule karne deta hai.

Isi architecture ki wajah se modern React urgent aur non-urgent work ko better handle kar sakta hai.

---

## 67. What are Web Workers, and how do they work with React?

### My PDF Answer — Verbatim Transcription

Web workers allow you to run JavaScript code in the
background , without blocking the main UI thread. This
helps keep React apps faster and responsive , especially
for heavy computations.

When to use web workers in React
• Heavy Computation
• large API responses
• Background tasks.

### Simple Explanation — English

Web Workers run JavaScript in a separate worker thread, so CPU-heavy tasks do not block the main browser UI thread. A React component can send data to a worker, let the worker process it, and then update React state with the result.

### Simple Explanation — Hindi

Web Worker JavaScript ko separate background thread mein run karta hai, jisse heavy calculation main UI thread ko block nahi karti. React component worker ko data bhej sakta hai aur result milne par state update kar sakta hai.

---

## 68. What is hydration in React?

### My PDF Answer — Verbatim Transcription

hydration is when React takes pre-rendered HTML page
and make it interactive.

1) Server Sends a ready-made HTML page to the browser.
2) the user sees the Content Quickly (better for seo & performance)
3) React then "hydrates" the page ,attaching event listeners
   to make it interactive.

### Simple Explanation — English

Hydration connects React's client-side behavior to HTML that was already rendered on the server. The browser can display the server HTML quickly, and React then attaches the necessary event handling and takes control of the application.

The server output and the client's initial render need to be compatible to avoid hydration mismatch problems.

### Simple Explanation — Hindi

Hydration mein server se aayi pre-rendered HTML ko React interactive banata hai. Browser pehle HTML display kar sakta hai, phir React event listeners aur client-side behavior attach karta hai.

Server aur client ka initial output compatible hona chahiye, warna hydration mismatch ho sakta hai.

---

## 69. How does code splitting improve performance?

### My PDF Answer — Verbatim Transcription

code splitting breaks a large javascript bundle into smaller
chunks , loading only what's needed . This improve performance
by reducing initial page load time.

Benefits
• fast page load - users see content quickly.
• Better performance - Reduces unused js execution.
• Efficient memory usage - loads Components only when require.

### Simple Explanation — English

Code splitting divides a large JavaScript bundle into smaller chunks so the browser does not need to load every feature on the first page. Routes or components can be loaded on demand.

This can reduce initial download, parsing, and execution work.

### Simple Explanation — Hindi

Code splitting large JavaScript bundle ko smaller chunks mein divide karta hai. First page ke liye sirf required code load hota hai aur baaki code baad mein load kiya ja sakta hai.

Isse initial download, parsing aur execution ka load reduce ho sakta hai.

---

## 70. What is React Profiler?

### My PDF Answer — Verbatim Transcription

React profiler is a tool that helps measure how long Component
take to render and identify performance issues. it is
useful for optimizing slow Components.

How to use React profiler
1) open react-dev tool -> profiler tab -> click
   Record, perform actions in
   the app ,then stop recording -> analyse render
   times and find slow Components.

### Simple Explanation — English

React Profiler helps measure component rendering work so you can find expensive renders and performance bottlenecks.

A practical approach is to reproduce the slow interaction, record it with the Profiler, inspect expensive components/commits, optimize the actual bottleneck, and measure again.

### Simple Explanation — Hindi

React Profiler rendering performance measure karne ke liye use hota hai. Slow interaction ko record karke dekh sakte hain ki kaunse components zyada render time le rahe hain.

Optimization ke baad dobara profile karke confirm karna chahiye ki actual improvement hua hai.

---

## 71. Explain lazy loading images in React.

### My PDF Answer — Verbatim Transcription

lazy loading delays loading images, until they (images) on
visible on the screen. this improves performance by
reducing initial page load time.

### Simple Explanation — English

Lazy loading means delaying an image request until the image is near or inside the viewport. For many below-the-fold images, this can reduce initial network and page-load work.

For simple cases, the browser's native `loading="lazy"` attribute can be used.

### Simple Explanation — Hindi

Lazy loading mein image ko immediately load karne ke bajay tab load kiya jata hai jab woh screen par visible ya viewport ke near ho. Isse initial page load ka network work kam ho sakta hai.

---

## 72. How do you optimize re-rendering in React?

### My PDF Answer — Verbatim Transcription

use React.memo() to prevent unnecessary re-renders.
2) use useCallback() to prevent function recreation.
3) use useMemo() to cache expensive Calculations.
4) optimize State updates to avoid triggering renders.
5) use lazy loading (React.lazy) to Split large Components.

### Simple Explanation — English

I would first identify why the component is rendering too often. Then I would use stable state placement, `React.memo`, `useCallback`, `useMemo`, and code splitting only where they provide measurable value.

For large lists, virtualization and reducing unnecessary parent updates can be more important than memoizing everything.

### Simple Explanation — Hindi

Pehle ye identify karna chahiye ki unnecessary re-render kyun ho raha hai. Uske baad required case mein `React.memo`, `useCallback`, `useMemo`, proper state placement aur code splitting use kar sakte hain.

Large lists ke liye virtualization aur unnecessary parent updates reduce karna bhi important hai.

---

## 73. How do you handle memory leaks in a React application?

### My PDF Answer — Verbatim Transcription

memory leaks happen when when your app keeps using
memory even after it's no longer needed. This can slow
down your app over time.

Solutions -> fetch Requests or event listeners keep running even
after the component unmounts.
    -> clean use clean up function in useEffect().

### Simple Explanation — English

I look for resources that continue running after a component is removed, such as timers, subscriptions, event listeners, WebSockets, and observers. Effects that create these resources should return cleanup functions.

For harder cases, browser memory tools and heap snapshots can help identify retained objects.

### Simple Explanation — Hindi

React mein memory leak tab ho sakta hai jab component remove hone ke baad bhi timer, listener, subscription ya koi external resource active rahe. Isliye `useEffect` ke andar proper cleanup dena chahiye.

Difficult cases mein browser memory tools aur heap snapshots se leak trace ki ja sakti hai.

---

## 74. Explain tree shaking in React.

### My PDF Answer — Verbatim Transcription

tree Shaking is a technique that removes unused code (dead code)
from your final javaScript bundle . it helps reduce file size
and improve performance.

How to Enable tree Shaking in React
• use ESM module (import/export) - avoid require (commonJS)
• Set "sideEffects": false in package.json.

### Simple Explanation — English

Tree shaking is a build-time optimization that removes unused exports from the production JavaScript bundle when the module format and build tooling allow it.

It is not a React-specific feature. Using ES modules and configuring package/build metadata correctly can help bundlers perform tree shaking.

### Simple Explanation — Hindi

Tree shaking production bundle se unused JavaScript code remove karne ki build-time optimization hai. Ye React-specific feature nahi hai.

ES module `import/export` aur correct bundler configuration tree shaking mein help kar sakte hain.

---

## 75. How do you prevent unnecessary API calls in React?

### My PDF Answer — Verbatim Transcription

too many API calls Slow down app and resources. here's how
to prevent them effectively.

1) Use useEffect() with Dependencies
   so the API runs only when needed.
2) Debounce API calls (for Search inputs)
   - avoid API calls on every keystroke; wait until the user stop typing.
   Solution - use setTimeout() or a debounce library.

3) Cache API Response (useMemo) or Redis
   -> avoid fetching the Same data multiple time.
   -> Solution : Store the API response and reuse it.

### Simple Explanation — English

I would control request triggers carefully. For Effects, dependencies should match the data the request actually depends on. Search inputs can be debounced so a request is not sent for every keystroke.

For repeated data, caching or a server-state library can avoid duplicate fetching. Older requests can also be cancelled or ignored when newer requests replace them.

### Simple Explanation — Hindi

API calls ko unnecessary hone se bachane ke liye Effect dependencies correct rakhni chahiye aur search inputs ko debounce kar sakte hain. Repeated data ke liye caching ya server-state solution use kiya ja sakta hai.

Agar nayi request old request ko replace kar rahi hai, to old request ko cancel ya ignore bhi kar sakte hain.

---

## 76. How do you preload assets in React?

### My PDF Answer — Verbatim Transcription

pre-loading assets (image ,fonts , scripts etc) ensure they are
Ready before they are needed, improving performance and
user Experience.

-> <head>
   <link rel="preload" href="....." >
</head>

### Simple Explanation — English

Asset preloading tells the browser that an important resource should be fetched early. It can be useful for critical fonts, images, or other resources needed very soon.

The important point is to preload only truly important assets, because unnecessary preloads consume network resources.

### Simple Explanation — Hindi

Preload ka matlab browser ko pehle hi batana hai ki koi important asset jaldi fetch karna chahiye. Critical fonts, hero images ya immediately needed resources ke liye useful ho sakta hai.

Har asset ko preload nahi karna chahiye, warna unnecessary network load badh sakta hai.

---

## 77. How does `useDeferredValue()` improve performance?

### My PDF Answer — Verbatim Transcription

useDeferredValue() improve performance by delaying
updates to less important parts of the UI, keeping the
app responsive.

### Simple Explanation — English

`useDeferredValue` provides a deferred version of an existing value. This is useful when one part of the UI should update immediately, such as a search input, while an expensive result list can update with lower priority.

### Simple Explanation — Hindi

`useDeferredValue` existing value ka deferred version deta hai. Search input immediately update ho sakta hai, jabki expensive result list deferred value use karke lower priority par update ho sakti hai. Isse UI responsive reh sakti hai.

---

## 78. How do you implement a Progressive Web App (PWA) in React?

### My PDF Answer — Verbatim Transcription

A progressive web app (PWA) makes your React app faster,
offline-ready and installable like a native app.

### Simple Explanation — English

A React application can become a PWA by using web platform features such as a web app manifest, service worker, HTTPS, and appropriate caching/offline strategies.

The service worker can handle selected network and cache behavior, while the React app provides the UI.

### Simple Explanation — Hindi

React app ko PWA banane ke liye web app manifest, service worker, HTTPS, caching aur offline behavior use kiya ja sakta hai. React UI normal app ki tarah kaam karti hai aur service worker selected network/cache behavior manage kar sakta hai.

---

## 79. How do you handle errors in Express.js?

### My PDF Answer — Verbatim Transcription

1) always use an error-handling middleware : ( err,req,res,next) =>
                                                            { }
2) handle async errors properly using try-catch or express-async-errors.
3) use meaningful HTTP Status Codes . (eg -> 400 for Validation errors,
   500, for Server errors)
4) Return json error response in API.

### Simple Explanation — English

In Express, I would centralize errors in an error-handling middleware with the four-argument signature. Async route errors should be caught and passed to the error middleware.

The API should return appropriate HTTP status codes and a consistent JSON error structure so clients can handle errors predictably.

### Simple Explanation — Hindi

Express mein centralized error-handling middleware use karna chahiye. Async routes ke errors ko properly catch karke error middleware tak bhejna chahiye.

Validation errors ke liye suitable 4xx status aur server failures ke liye suitable 5xx status use karna chahiye, aur API response consistent JSON format mein dena useful hai.

---

## 80. How do you connect MongoDB to Express.js?

### My PDF Answer — Verbatim Transcription

To Connect MongoDB to an Express.js application , you
typically use the mongoose library , which provides a Schema-
based Solution for handling MongoDB operations.

### Simple Explanation — English

A common approach is to use Mongoose as the ODM layer. You create a database connection when the application starts, define schemas/models where appropriate, and then use those models inside Express route or service logic.

Connection configuration such as the MongoDB URI should normally come from environment variables.

### Simple Explanation — Hindi

Express app ko MongoDB se connect karne ke liye commonly Mongoose use kiya jata hai. Application startup par database connection establish karte hain aur models ke through database operations perform karte hain.

MongoDB URI ko environment variable mein rakhna better hota hai.

---

## 81. How does JWT authentication work in Node.js?

### My PDF Answer — Verbatim Transcription

1) User logs in with their Credentials.
2) Server verifies Credentials and generate a JWT token.
3) Client Store the token (eg in localstore or Cookies)
4) Client Includes Sends the token with Request (Authentication
   (Authorization header )
5) Server verifies the token and grants access to protected
   routes.

### Simple Explanation — English

After successful login, the server signs a JWT containing the necessary claims. The client sends that token with later requests, and the server verifies the signature before allowing access to protected resources.

The token storage mechanism matters for security; a browser-based application should choose storage based on its threat model rather than blindly storing sensitive tokens in any one place.

### Simple Explanation — Hindi

Login ke baad server JWT token generate/sign karta hai. Client later requests ke saath token bhejta hai aur server token verify karke protected resource ka access deta hai.

Token ko kahan store karna hai ye security design par depend karta hai. Browser app mein storage choice carefully karni chahiye.

---

## 82. What is `bcryptjs`, and how does it improve security?

### My PDF Answer — Verbatim Transcription

bcrypt.js is a JS library used for hashing password
Securely. it applies the bcrypt hashing algorithm, which include
• Salting - add random data to prevent dictionary attack.
• multiple Rounds - Uses Computational Cost to Slow down
  brute-force attack.
• one-way hashing - make it impossible to retrieve the
  original password.

### Simple Explanation — English

`bcryptjs` is a JavaScript implementation of the bcrypt password-hashing algorithm. A password is hashed with a salt and a configurable computational cost so the original password is not stored directly.

During login, the entered password is checked against the stored hash rather than being decrypted.

### Simple Explanation — Hindi

`bcryptjs` password ko securely hash karne ke liye use hota hai. Isme salt aur computational cost hoti hai, jisse brute-force attack ko harder banaya ja sakta hai.

Password plain text mein store nahi hota; login ke time entered password ko stored hash ke against verify kiya jata hai.

---

## 83. How do you handle file uploads in Node.js?

### My PDF Answer — Verbatim Transcription

file uploads in Node.js can be managed using the multer package,
Which simplifies handling multipart / form-data.

### Simple Explanation — English

For multipart file uploads in an Express application, `multer` is a common middleware. It parses the multipart request and exposes uploaded files to the route handler.

In production, I would also validate file type/size, generate safe filenames, and decide whether files should be stored locally or in object storage.

### Simple Explanation — Hindi

Node.js/Express mein file upload ke liye `multer` commonly use hota hai. Ye multipart/form-data ko parse karke uploaded file ko route handler tak provide karta hai.

Production mein file type, size aur storage location ko securely handle karna bhi zaroori hai.

---

## 84. Explain the difference between Cookies and Local Storage.

### My PDF Answer — Verbatim Transcription

Both Cookies and localStorage store data in the browser , but
they Serve difference purpose.

Feature          Cookies                 Local Storage
Store limit      4 kb per cookie         5 MB per domain
Expiration       Can expire (set by server) No expiration (persist until manually cleared)
Accessibility    Sent with every HTTP Request Only accessible via JS
Security         Vulnerable to CSRF & XSS Vulnerable
Use Case         Authentication (jwt,session) Storing user preferences
                                         temporary data.

-> Use Cookies - When you need Server-side access (eg - authentication
   tokens)
-> Use Local Storage - When you need to Storage larger cli
-> Use local Storage - When you need to Store large client-side
   data that doesn't needn't need to be sent to the Server. (eg. theme
   preferences , UI settings)

### Simple Explanation — English

Cookies can be sent automatically with HTTP requests and support attributes such as `HttpOnly`, `Secure`, and `SameSite`. Local Storage is client-side storage accessed through JavaScript and is not automatically sent with requests.

For authentication, secure cookie-based sessions are often preferred when the architecture supports them. Local Storage is better suited to non-sensitive client preferences that do not need to be sent with every request.

### Simple Explanation — Hindi

Cookies browser data store karti hain aur request ke saath automatically send ho sakti hain. `HttpOnly`, `Secure` aur `SameSite` jaise attributes security improve kar sakte hain.

Local Storage sirf client-side JavaScript se access hota hai aur request ke saath automatically nahi bheja jata. Theme ya UI settings jaise non-sensitive data ke liye ye useful hai.

---

## 85. What is PM2, and why is it used in production?

### My PDF Answer — Verbatim Transcription

pm2 (process manager 2) is a popular process manager
for Node.js applications. it helps keep your application
running continuously , even after crashes or reboots , making
it ideal for production environment.

Why Use PM2 in Production

1) Process management - automatically restarts your app if it crashes.
2) Load Balancing - Uses Cluster mode to distribute traffic
   across CPU Cores.
3) Logging & Monitoring - provides real-time logs,
   error tracking , and performance monitoring.
4) Auto-Restart on failure - Ensure uptime by restarting
   crashed processes.
5) Startup Script - Runs app automatically on System
   boot.

### Simple Explanation — English

PM2 is a process manager commonly used to run Node.js applications in production. It can keep processes alive, restart crashed processes, manage logs, and support cluster-based process execution.

It is a deployment/process-management tool rather than a replacement for application-level monitoring or infrastructure orchestration.

### Simple Explanation — Hindi

PM2 Node.js applications ko production mein run aur manage karne ke liye process manager hai. Ye app crash hone par restart, logs, monitoring aur cluster mode support kar sakta hai.

PM2 useful process-management tool hai, lekin complete infrastructure monitoring ka replacement nahi hai.

---

## 86. What is Helmet.js, and how does it improve security?

### My PDF Answer — Verbatim Transcription

Helmet.js is a Simple yet effective tool for improving Security in
Node.js Applications by setting Secure HTTP headers , reducing
attack vectors and enforcing best practices.

### Simple Explanation — English

Helmet is Express/Node middleware that sets or configures security-related HTTP headers. These headers can reduce exposure to certain browser-based attacks and improve security defaults.

It should be combined with other protections such as input validation, authentication, secure cookies, and rate limiting.

### Simple Explanation — Hindi

Helmet Node.js/Express app mein security-related HTTP headers set karne mein help karta hai. Isse kuch browser-based attacks ka risk reduce karne mein madad mil sakti hai.

Helmet alone complete security solution nahi hai; validation, auth aur other protections bhi zaroori hain.

---

## 87. How do you implement OAuth authentication in Express.js?

### My PDF Answer — Verbatim Transcription

OAuth authentication allows users to log in using third-party
providers (Google, Facebook, GitHub etc) instead of creating
a new account.

-> To implement OAuth authentication in Express.js , we typically use
   Passport.js , a flexible authentication middleware.

### Simple Explanation — English

With OAuth, the application redirects the user to a trusted identity provider such as Google or GitHub. After the user authenticates and grants permission, the provider sends the application an authorization result according to the OAuth flow.

In Express, Passport or another OAuth library can simplify the integration, while the server handles callback validation and application session/token creation.

### Simple Explanation — Hindi

OAuth mein user Google, GitHub jaise third-party provider ke through login kar sakta hai. Provider user ko authenticate karke application ko authorization result deta hai.

Express mein Passport.js ya suitable OAuth library integration ko simpler bana sakti hai.

---

## 88. What is rate limiting, and how do you implement it?

### My PDF Answer — Verbatim Transcription

Rate limiting is a Security mechanism that restricts the
number of requests a client can make to a server within
a Specific time-frame. it helps
• prevent DDOS (Distributed Denial of Service) attacks.
• protect from brute-force login attack attempts.
• manage API quotas and fair usage.

### Simple Explanation — English

Rate limiting controls how many requests a client can make during a time window. In Express, middleware can apply a limit per IP, user, API key, or other identity.

It is useful for protecting login endpoints and reducing abuse, but distributed systems may need a shared store such as Redis so limits work consistently across multiple instances.

### Simple Explanation — Hindi

Rate limiting ek time window mein client ki request count limit karta hai. Express mein middleware ke through IP, user ya API key ke basis par limit laga sakte hain.

Ye brute-force aur abuse ko reduce karne mein useful hai. Multiple server instances mein shared store jaise Redis ki zarurat pad sakti hai.

---

## 89. How do you optimize API performance in Express.js?

### My PDF Answer — Verbatim Transcription

must do optimization

1) cashing (Redis)

2) Database optimization -> use pagination & limit results
   -> optimize Queries : Avoid "*SELECT
      fetch only required field.

3) Rate limiting -> prevent API abuse & DDOS

4) Enable Gzip Compression -> Compression Reduces the Size of
   response, making API Responses
   faster.

5) Use Async Code

### Simple Explanation — English

I would look at the full request path: database queries, network payloads, application logic, and repeated requests.

Common optimizations include caching, pagination, selecting only required fields, compression, asynchronous/non-blocking operations, and rate limiting. I would measure response time before and after changes to confirm which optimization helps.

### Simple Explanation — Hindi

API performance improve karne ke liye caching, pagination, limited fields, compression aur proper async code use kiya ja sakta hai. Database query ko optimize karna bhi important hai.

Optimization ke baad response time measure karke verify karna chahiye ki actual bottleneck improve hua.

---

## 90. How does caching work in Node.js?

### My PDF Answer — Verbatim Transcription

Caching is a process of Storing frequently accessed data in
memory to reduce database load and response time.

Why use Caching
• improve API performance
• Reduce database load.
• Handles high-traffic efficiently
• Enhance user experience

### Simple Explanation — English

Caching stores reusable data closer to the application so repeated requests can be served faster. A Node.js application might use an in-memory cache for small workloads or Redis for shared/distributed caching.

A cache strategy should define expiration, invalidation, and what happens when cached data is missing or stale.

### Simple Explanation — Hindi

Caching frequently used data ko memory ya cache store mein rakhne ki technique hai. Isse repeated request par database hit kam hota hai aur response faster mil sakta hai.

Small app mein in-memory cache aur large/distributed setup mein Redis jaise shared cache useful ho sakte hain.

---

## 91. How do you secure Express applications?

### My PDF Answer — Verbatim Transcription

1) Helmet.js -> Secure HTTP headers
2) Rate limiting -> prevent brute force & DDOS
3) JWT & password hashing (bcrypt).
4) CORS -> control cross-origin Requesting
5) Session Security -> Protects cookies & Sessions

### Simple Explanation — English

I would use multiple layers: secure HTTP headers, input validation, authentication/authorization, safe password hashing, rate limiting, CORS configuration, secure cookies, and careful session management.

Security is not one middleware. Each layer addresses a different class of risk.

### Simple Explanation — Hindi

Express app ko secure karne ke liye multiple layers use karne chahiye: Helmet, validation, authentication/authorization, bcrypt hashing, rate limiting, CORS aur secure session/cookie settings.

Ek single middleware se complete security nahi milti; layered approach better hoti hai.

---

## 92. How do you handle real-time events in Express.js?

### My PDF Answer — Verbatim Transcription

Real time functionality is essential for applications like chat app ,
live notification , Stock updates , gaming and Collaborative tools.
in Express.js , Real time events can be handled using Websockets , Socket.io
or Server-sent Event (SSE).

### Simple Explanation — English

Express can be part of a real-time system using WebSocket-based libraries such as Socket.IO or using Server-Sent Events for one-way server-to-client streams.

The exact choice depends on whether communication needs to be bidirectional, how connections are managed, and how the application scales across multiple servers.

### Simple Explanation — Hindi

Express application mein real-time functionality ke liye WebSocket, Socket.IO ya Server-Sent Events use kiye ja sakte hain. Chat, live notification, stock updates aur collaborative tools common examples hain.

Bidirectional communication chahiye ya one-way updates, uske basis par technology choose karni chahiye.

---

## 93. What is the purpose of `process.nextTick()` in Node.js?

### My PDF Answer — Verbatim Transcription

It is used when you want to execute code immediately after
the current operation , but before the event loop continues.

* process.nextTick() event loop Code se pehle chalta hai.

eg ->
console.log ('Start')

process.nextTick ( () => console.log ('nextTick'));

SetTimeout ( () => console.log ('setTimeout'))

SetImmediate ( () => console.log ('setImmediate'))

Promise.resolve() .then ( () => console.log ('promise resolve'))

console.log ('end')

o/p -> Start
        end
        nextTick
        promise resolve
        Set immediate
        Set timeout

### Simple Explanation — English

`process.nextTick()` schedules a callback to run after the current operation completes but before the event loop continues to later phases. It therefore has very high priority in Node's scheduling model.

Because excessive `nextTick` usage can delay other work, it should be used carefully.

### Simple Explanation — Hindi

`process.nextTick()` current operation ke complete hone ke baad callback ko schedule karta hai aur Node event loop ke further processing se pehle chal sakta hai. Isliye iska scheduling priority high hota hai.

Bahut zyada `nextTick` use karne se doosre tasks delay ho sakte hain, isliye carefully use karna chahiye.

---

## 94. How do you handle memory leaks in a Node.js application?

### My PDF Answer — Verbatim Transcription

memory leaks in a node.js application can cause performance degradation
and crashes over time. here's how to handle and prevent them:

1) Identify leaks using heap Snapshots , process.memoryUsage() , eg
   tool like clinic.js and no memwatch-next.

2) fix Common Causes :
   • avoid global variable
   • clean unused timers (setTimeout(), setInterval())
   • Remove event listeners (removeListener() , off())
   • prevent excessive closures.
   • use LRU caching to manage memory
   • close database Connections properly

3) Debug using tools : node --inspect, chrome Devtool or heapdump

### Simple Explanation — English

I would first confirm the leak with memory metrics and heap snapshots. Then I would look for retained objects caused by global references, listeners, timers, unbounded caches, closures, or resources that were not closed.

After fixing the suspected source, I would run the application under similar load again and verify that memory stabilizes instead of continuously increasing.

### Simple Explanation — Hindi

Node.js memory leak diagnose karne ke liye heap snapshots, `process.memoryUsage()` aur debugging tools use kiye ja sakte hain. Global references, unused timers, event listeners, large caches aur unclosed database connections common causes hain.

Fix ke baad similar load par app ko dobara test karke verify karna chahiye ki memory continuously increase nahi ho rahi.

---

## 95. How do you optimize Node.js for high performance?

### My PDF Answer — Verbatim Transcription

1) use asynchronous , non-blocking operations (async/await,promises)

2) optimise queries with indexes and Caching (Redis, memcached)

3) use pagination for large dataset queries.

4) implement in-memory caching with Redis or Node-cache.

5) Avoid memory leaks (close DB Connection, remove unused
   event listeners)

6) use PM2 for process management and auto-restart.

### Simple Explanation — English

For high performance, I would keep I/O asynchronous, optimize database queries with proper indexes, cache repeated data, paginate large results, control memory usage, and scale application processes when needed.

I would also use profiling and monitoring to identify the real bottleneck rather than applying every optimization at once.

### Simple Explanation — Hindi

High-performance Node.js ke liye asynchronous non-blocking operations, optimized database queries, indexes, caching, pagination aur proper memory management important hain. PM2 ya another process manager process management aur restart ke liye help kar sakta hai.

Actual bottleneck identify karne ke liye profiling aur monitoring bhi karni chahiye.

---

## 96. What is load balancing, and how does it work in Node.js?

### My PDF Answer — Verbatim Transcription

load balancing is the process of distributing incoming
network traffic across multiple Servers to optimize resource
use, minimum latency , and prevent Server Overload.

### Simple Explanation — English

A load balancer receives incoming requests and distributes them across multiple healthy application instances. This can improve capacity and availability and prevent one instance from taking all the traffic.

### Simple Explanation — Hindi

Load balancing mein incoming requests ko multiple servers/instances ke beech distribute kiya jata hai. Isse resource usage better hota hai, latency reduce ho sakti hai aur ek server overload hone se bach sakta hai.

---

## 97. How do you scale a Node.js application?

### My PDF Answer — Verbatim Transcription

Scale is means increasing or decreasing the capacity of a system
to handle more (or fewer) requests, users or workload.

Type of Scaling

1) Scale up (Vertical Scaling) - add more CPU, RAM or Storage to a
   Single Server.

2) Scale up (horizontal scaling) -> add more servers/instances
   to distribute the load.

eg -> A website going from 100 users to 1 million users need to
     Scale to handle the traffic efficiently.

### Simple Explanation — English

Scaling means increasing application capacity as workload grows. Vertical scaling increases resources on one machine, while horizontal scaling adds more instances and distributes traffic across them.

For horizontal scaling, stateless application design, shared caches/stores, and a load balancer are commonly important.

### Simple Explanation — Hindi

Scaling ka matlab workload badhne par system ki capacity increase karna hai. Vertical scaling mein same server ko more CPU/RAM diya jata hai. Horizontal scaling mein multiple server instances add karke load distribute kiya jata hai.

Horizontal scaling ke liye stateless design, shared cache/store aur load balancer important ho sakte hain.

---

## 98. How does Redis caching improve performance?

### My PDF Answer — Verbatim Transcription

Redis Caching improves performance in several ways :

1) Redis makes apps faster by Storing frequently used data in
memory instead of fetching it from a Slow database.
this reduces wait time , lower database load and Speeds
up Responses . it also removes old and unused data
automatically , ensuring efficient memory use.

### Simple Explanation — English

Redis is an in-memory data store, so retrieving frequently accessed values can be much faster than repeatedly querying a database. It can reduce database load and improve response latency.

A production cache still needs a clear expiration and invalidation strategy so stale data does not remain indefinitely.

### Simple Explanation — Hindi

Redis memory mein frequently used data store karta hai, isliye repeated request ke liye database ko har baar hit karna zaroori nahi hota. Isse response faster aur database load lower ho sakta hai.

Cache ke liye expiration aur invalidation strategy bhi important hai taaki stale data unnecessarily retain na ho.

---

## 99. What are `worker_threads` in Node.js, and when should you use them?

### My PDF Answer — Verbatim Transcription

Worker thread in node.js allow you to run multiple task in
parallel , preventing the main thread from getting blocked.
normally node.js runs on a Single thread , meaning it can
only handle one task at a time. if a task is CPU-intensive
(like long Calculations or file processing), it can slow everything
down.

worker threads Solve this by running Such task in Separate
threads , keeping the main thread free to handle other
Request . this makes your app faster and more responsive.

### Simple Explanation — English

`worker_threads` provide a way to run JavaScript work in separate threads inside the same Node.js process. They are useful for CPU-intensive tasks such as heavy calculations, parsing, encryption, or transformations that would otherwise block the main event loop.

They are not generally needed for ordinary I/O operations, because Node already handles much I/O asynchronously.

### Simple Explanation — Hindi

`worker_threads` CPU-intensive work ko separate threads mein run karne dete hain. Heavy calculation, parsing, encryption ya transformation jaise tasks ke liye useful hain.

Normal I/O requests ke liye usually worker thread ki need nahi hoti, kyunki Node asynchronous I/O already handle karta hai.

---

## 100. How would you handle large file processing in Node.js?

### My PDF Answer — Verbatim Transcription

handling large files processing in Node.js requires efficient
memory management to avoid blocking the event loop.
here are the best approach.

1) use Streams (Best for long files)
   -> Node.js Streams allow you to read and process large files
      chunks by chunk instead of loading the whole file into memory.

2) Use Worker thread (for CPU-intensive tasks)
   -> if the processing involves heavy Computations (eg- parsing , encryption)
      use worker threads to avoid blocking the main thread.

3) Use External processing tools (for very large files)
   -> for extremely large files (GB or TB), use child process or
      external tools like ffmpeg , gzip or database batch processing.

### Simple Explanation — English

For large files, I would avoid reading the entire file into memory at once. Streams allow the file to be processed chunk by chunk, which keeps memory usage under control.

If processing each chunk requires heavy CPU work, worker threads can move that computation away from the event loop. For extremely large or specialized processing, external tools or batch workers can be more appropriate.

### Simple Explanation — Hindi

Large file ko process karte waqt poori file ko ek saath memory mein load nahi karna chahiye. Streams file ko chunks mein process karne dete hain, jisse memory usage controlled rehti hai.

Agar processing CPU-intensive hai to worker threads use kar sakte hain. Bahut large ya specialized processing ke liye external tools ya batch processing better ho sakti hai.

---

## ✅ Batch Complete

**Questions covered:** 51–100

**Format:**
- My PDF Answer — Verbatim Transcription
- Simple Explanation — English
- Simple Explanation — Hindi

**Source alignment:** The question order follows Questions 51–100 in the extracted question-bank file. The handwritten answers were taken from the corresponding sections of the supplied PDF.