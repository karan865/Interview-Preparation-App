# React Interview Questions 1–20 — PDF Answers + English + Hindi

> **Important:** The **“My PDF Answer — Verbatim Transcription”** section preserves the wording from the scanned PDF as closely as readable. Grammar, technical wording, and mistakes in the original PDF have not been silently corrected. Markdown/code formatting is only used to keep the content readable.
>
> The English and Hindi sections are simple interview-friendly explanations based on the PDF answer.

---

## 1. Describe the difference between React class components and functional components with hooks in terms of performance and readability.

### My PDF Answer — Verbatim Transcription

Functional components with hooks are more concise and readable compared to class components. They avoid the need for `this`, and use hooks like `useState` and `useEffect` and make logic reuse easier through custom hooks.

In terms of performance, they are slightly faster to initialize and easier to optimize using `React.memo`, `useMemo`, and `useCallback`.

### Simple Explanation — English

Functional components with Hooks are generally easier to read and maintain than class components. They avoid class-specific patterns such as `this`, constructors, and lifecycle methods.

Hooks such as `useState` and `useEffect` let us manage state and side effects directly inside a function, while custom Hooks make reusable logic easier.

For performance, I would not say functional components are automatically faster. Both styles can perform well. When profiling shows unnecessary work, tools such as `React.memo`, `useMemo`, and `useCallback` can help.

```text
Functional Component
      ↓
Hooks
      ↓
State + Effects + Reusable Logic
      ↓
Cleaner component structure
```

### Simple Explanation — Hindi

Hooks ke saath functional components generally class components se easier to read aur maintain hote hain. Inmein `this`, constructor aur class-based lifecycle methods ki need nahi hoti.

`useState` aur `useEffect` se state aur side effects directly function ke andar manage kar sakte hain. Custom Hooks reusable logic ko easy banate hain.

Performance ke case mein functional components automatically faster nahi hote. Dono approaches achhi performance de sakte hain. Actual unnecessary work identify hone par `React.memo`, `useMemo` aur `useCallback` use kiye ja sakte hain.

## 2. What are some strategies for managing application state in large-scale React applications?

### My PDF Answer — Verbatim Transcription

In large-scale React application, state can be managed by using a different strategy:

1) Local State - use `useState` and `useReducer` for isolated component logic.

2) Context API - for sharing global state like themes or auth across components.

3) State management libraries - such as Redux, Zustand, or Recoil for more structured and scalable state handling.

4) Server State - using tools like React Query, SWR, or RTK Query for managing data fetching, caching and syncing with the backend.

5) Persistent State - using localStorage, sessionStorage, or libraries like Redux-persist for maintaining data across sessions.

### Simple Explanation — English

In a large React application, I would first classify state by where it belongs instead of putting everything into one global store.

- **Local state:** `useState` or `useReducer` for component-specific state.
- **Shared state:** Context API for relatively simple shared values such as theme or auth information.
- **Global/complex state:** Redux, Zustand, or Recoil when the application needs structured global updates.
- **Server state:** React Query, SWR, or RTK Query for fetching, caching, and synchronizing backend data.
- **Persistent state:** `localStorage`, `sessionStorage`, or Redux Persist when data needs to survive refreshes.

The important idea is to choose the smallest suitable state-management solution for each type of data.

### Simple Explanation — Hindi

Large React application mein har state ko ek hi global store mein rakhna zaroori nahi hai. State ke type ke according approach choose karni chahiye.

- Local state → `useState` / `useReducer`
- Simple shared state → Context API
- Complex global state → Redux, Zustand, Recoil
- Server data → React Query, SWR, RTK Query
- Persistent data → `localStorage`, `sessionStorage`, Redux Persist

Main idea hai ki har state ke liye appropriate aur simple solution use kiya jaye.

## 3. What is lazy loading in React?

### My PDF Answer — Verbatim Transcription

Lazy loading is a performance optimization technique where components or resources are loaded only when needed, rather than at the initial load.

In React, it reduces the initial bundle size, improving load time and user experience.

* React.lazy() -> dynamically loads the component.

* Suspense -> shows a fallback UI (like a spinner) while loading.

### When to use Lazy Loading

- Large components
- Route-based code splitting (e.g React Router)
- Rarely-used features and admin panels.

### How to implement it

```jsx
import React from 'react';

const LazyComponent = React.lazy(() => import('./MyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### Simple Explanation — English

Lazy loading means loading a component or resource only when it is actually needed instead of loading everything during the initial application startup.

In React, `React.lazy()` can dynamically import a component and `Suspense` provides fallback UI while the code is being loaded.

```jsx
const AdminPanel = React.lazy(() => import('./AdminPanel'));

<Suspense fallback={<div>Loading...</div>}>
  <AdminPanel />
</Suspense>
```

The flow is:

```text
Initial Load
    ↓
Load only required code
    ↓
User opens feature
    ↓
Load feature chunk
    ↓
Render component
```

It is especially useful for route-based code splitting, large components, and rarely used features.

### Simple Explanation — Hindi

Lazy loading ka matlab hai component ya resource ko initial load par sab kuch load karne ke bajay tab load karna jab uski actual need ho.

React mein `React.lazy()` component ko dynamically import kar sakta hai aur `Suspense` loading ke time fallback UI show karta hai.

```text
Initial Load
    ↓
Required Code
    ↓
User Feature Open
    ↓
Feature Load
    ↓
Component Render
```

Ye route-based code splitting, large components aur rarely-used features ke liye useful hai.

## 4. How would you integrate React with a backend server, such as Node.js or Django?

### My PDF Answer — Verbatim Transcription

### 1) Frontend (React)

- Use `fetch` or `axios` to make HTTP request to the backend.

Example:

```js
axios.get('/api/users').then(res => console.log(res.data))
```

### 2) Backend (Node.js or Django)

- Expose REST API or GraphQL endpoints.
- Enable CORS to allow frontend communication.
  - In Express.js: use `cors` middleware.
  - In Django: use `django-cors-headers`.

### 3) Proxy Setup (optional)

- In React, add a proxy in `package.json`

```json
"proxy": "http://localhost:5000"
```

### Summary

React communicate with a backend like Node.js or Django via HTTP (`REST` or `GraphQL`) using `fetch/axios`, with proper API setup and CORS handling.

### Simple Explanation — English

React frontend backend server se HTTP requests ke through communicate karta hai.

Typical flow:

```text
React UI
   ↓ fetch / Axios
REST or GraphQL API
   ↓
Node.js / Django
   ↓
Database / Business Logic
   ↓
JSON Response
   ↓
React UI
```

For example:

```js
axios.get('/api/users')
  .then(res => console.log(res.data));
```

The backend exposes REST or GraphQL endpoints. If frontend and backend are running on different origins, CORS must be configured correctly. During development, a proxy can simplify API calls.

### Simple Explanation — Hindi

React frontend backend se HTTP requests ke through communicate karta hai.

```text
React UI
   ↓ fetch / Axios
API
   ↓
Node.js / Django
   ↓
Database
   ↓
JSON Response
   ↓
React UI
```

`fetch` ya Axios se REST/GraphQL API call kar sakte hain. Agar frontend aur backend different origins par run kar rahe hain, to CORS configure karna hota hai. Development mein proxy bhi use kiya ja sakta hai.

## 5. What are common patterns for managing side effects in React?

### My PDF Answer — Verbatim Transcription

Common patterns for managing Side effects in React:

1. `useEffect` hook

-> for running side effect like data fetching, subscriptions or timers.

eg -

```jsx
useEffect(() => {
    fetchData();
}, []);
```

2) Custom Hooks

Encapsulate and reuse side-effect logic (like `useFetch`, `useDebounce`).

3) State management libraries

Libraries like Redux with middleware (like Redux Thunk or Saga) help manage side effect in centralized way.

4) React Query/SWR

for handling server-side effects like fetching, caching and syncing remote data.

5) Cleanup functions

used inside useEffect to handle component unmounting and avoid memory leaks.

```jsx
useEffect(() => {
    const timer = setInterval(...);
    return () => clearInterval(timer);
}, []);
```

### Simple Explanation — English

A side effect is work that happens outside React's pure rendering process, such as API calls, subscriptions, timers, or interacting with browser/external APIs.

Common patterns are:

- `useEffect` for component-level effects.
- Custom Hooks such as `useFetch` or `useDebounce` to reuse effect-related logic.
- Redux middleware such as Thunk or Saga for centralized application workflows.
- React Query/SWR for server-state fetching, caching, and synchronization.
- Cleanup functions inside `useEffect` to remove timers, subscriptions, or listeners.

Example:

```jsx
useEffect(() => {
  const timer = setInterval(refreshData, 5000);

  return () => clearInterval(timer);
}, []);
```

The cleanup is important because it prevents work from continuing after the component no longer needs it.

### Simple Explanation — Hindi

Side effect wo work hai jo normal React rendering ke bahar hota hai, jaise API call, timer, subscription ya browser API ke saath interaction.

Common approaches:

- `useEffect` → component-level effects
- Custom Hooks → reusable side-effect logic
- Redux Thunk/Saga → centralized workflows
- React Query/SWR → server data fetching, caching aur synchronization
- Cleanup function → timer/subscription/listener ko remove karna

```text
Effect Start
    ↓
External Work
    ↓
Cleanup
```

Cleanup important hai taaki component ki need khatam hone ke baad old work continue na kare.

## 6. Explain the role of Redux middleware and provide examples of popular middleware.

### My PDF Answer — Verbatim Transcription

Redux middleware sits b/w dispatching an action and the reducer, allowing you to intercept, modify or delay actions.

It is mainly used to handle asynchronous logic, logging or side effects.

Popular examples are Redux Thunk, Saga, and logger.

Why it's useful?

Redux on its own only handles synchronous (instant) updates.

But in real apps, you often need to:

- fetch data from an API
- wait for something
- log actions

Examples:

1) Redux Thunk - lets you write async code (like fetching data) inside actions.

2) Redux Logger - logs every action and state update in the console.

3) Redux Saga - use generator for complex async operations.

4) Redux Persist - Redux persist is a library that helps you save (persist) your Redux state to local storage.

-> Even if the user refreshes the page, your app state the same.

### Simple Explanation — English

Redux middleware runs between dispatching an action and the reducer processing it.

```text
dispatch(action)
      ↓
   Middleware
      ↓
    Reducer
      ↓
   New State
```

Middleware can inspect actions, log them, perform asynchronous work, or dispatch additional actions.

Examples:

- **Redux Thunk** — useful for async logic such as API calls.
- **Redux Logger** — logs actions and state changes.
- **Redux Saga** — manages complex asynchronous workflows using generators.
- **Redux Persist** — persists Redux state, commonly to browser storage.

For example, with Thunk, an action creator can perform an API request and dispatch success/failure actions after the response.

### Simple Explanation — Hindi

Redux middleware action dispatch hone aur reducer tak pahunchne ke beech mein kaam karta hai.

```text
dispatch(action)
      ↓
 Middleware
      ↓
  Reducer
      ↓
 New State
```

Ye actions ko inspect/log kar sakta hai aur async operations handle kar sakta hai.

- Redux Thunk → API calls/async logic
- Redux Logger → actions aur state logs
- Redux Saga → complex async workflows
- Redux Persist → Redux state ko persistent storage mein save karna

## 7. Describe the difference between Server-Side Rendering (SSR), Client-Side Rendering (CSR), and Static Site Generation (SSG) in the context of React.

### My PDF Answer — Verbatim Transcription

1) Client-Side Rendering (CSR)

- React loads in the browser.
- The initial HTML is almost empty; it loads the content after.
- slower initial load, but faster navigation after that.
- Common in Create React app.

eg -> A dashboard app with plain React where content loads after the spinner.

2) Server-Side Rendering (SSR)

- React components are rendered on the server, then sent as HTML to the browser.
- Content is visible immediately, improves SEO and performance.
- Good for dynamic pages.

eg -> An e-commerce product page that updates often, but needs to be SEO-friendly.

3) Static Site Generation (SSG)

- pages are built as static HTML at build time.
- very fast and great for SEO.
- Best for content that doesn't change often (blogs, marketing pages).
- Also in Next.js.

eg -> A blog site where all articles are pre-rendered once when deployed.

### One-Line Summary

- CSR → Renders in the browser.
- SSR → Renders on the server for each request.
- SSG → Renders at build time into static files.

### Simple Explanation — English

CSR, SSR, and SSG mainly differ in when the HTML for a page is generated.

```text
CSR → Browser generates the UI
SSR → Server generates HTML for a request
SSG → HTML is generated during build
```

- **CSR:** React runs mainly in the browser. It works well for highly interactive applications such as dashboards.
- **SSR:** The server renders the page and sends HTML to the browser. This can improve initial content visibility and can help SEO for public pages.
- **SSG:** Pages are generated ahead of time during the build and served as static files. This is useful for blogs and marketing pages whose content changes less frequently.

The choice depends on content freshness, SEO needs, performance goals, and application architecture.

### Simple Explanation — Hindi

CSR, SSR aur SSG mein main difference ye hai ki page ka HTML kab generate hota hai.

```text
CSR → Browser mein render
SSR → Server request ke time render
SSG → Build time par generate
```

- CSR → dashboards aur highly interactive apps ke liye useful.
- SSR → dynamic public pages aur SEO requirements ke liye useful.
- SSG → blogs aur marketing pages jaise less-changing content ke liye useful.

Choice application ke SEO, performance aur content-update requirements par depend karti hai.

## 8. What are some techniques for optimizing the rendering performance of React applications?

### My PDF Answer — Verbatim Transcription

1) memoization - use memoization techniques like `useMemo` and `React.memo` to prevent unnecessary re-renders of component and expensive computation.

2) Virtualization - implement virtualized list or grids using libraries like React Virtualized or React Window to render only the visible portion of large lists, reducing DOM nodes and improving performance.

3) code splitting - split your code into smaller chunks using dynamic imports (e.g `React.lazy`) to load only the necessary code for each feature, improving initial load time and reducing time to interactive.

4) optimizing CSS - minimize CSS file size, reduce CSS specificity and use techniques like CSS-in-JS or CSS modules to keep styles and avoid global styles that can affect rendering performance.

### Simple Explanation — English

React rendering performance optimize karne ka main goal unnecessary renders, calculations, DOM nodes, and initial JavaScript ko reduce karna hai.

Useful techniques include:

1. **Memoization** — `React.memo` for component render skipping and `useMemo` for expensive calculations.
2. **Virtualization** — render only visible rows in very large lists.
3. **Code splitting** — load feature code only when needed with dynamic imports and `React.lazy`.
4. **CSS optimization** — avoid unnecessary global styles and overly complex selectors.
5. **Profiling** — use React DevTools Profiler before optimizing so the actual bottleneck is known.

The important interview point is that memoization should be used where it solves a measured performance problem, not everywhere.

### Simple Explanation — Hindi

React performance optimize karne ka goal unnecessary renders, calculations aur DOM work ko reduce karna hai.

Techniques:

- `React.memo` aur `useMemo` → unnecessary rendering/calculation reduce karna
- Virtualization → large list mein sirf visible items render karna
- Code splitting → required code ko hi load karna
- CSS optimization → unnecessary global styles aur complex selectors avoid karna
- React Profiler → actual performance bottleneck identify karna

Memoization ko har jagah use nahi karna chahiye; actual performance issue ke according use karna better hai.

## 9. How do you handle internationalization (i18n) in React applications?

### My PDF Answer — Verbatim Transcription

Internationalization (i18n) is a process of making your app support multiple languages and locales.

- use `i18next` library

- use react-i18next.

### Simple Explanation — English

Internationalization, or i18n, means designing the application so it can support multiple languages and regional formats.

A common React approach is `i18next` with `react-i18next`.

Instead of hardcoding:

```jsx
<h1>Welcome</h1>
```

we can use a translation key:

```jsx
<h1>{t('welcome')}</h1>
```

The translation files contain the language-specific values, and the application selects the appropriate locale.

i18n can also cover locale-specific formatting such as dates, numbers, and currencies, depending on the library and application setup.

### Simple Explanation — Hindi

Internationalization ka matlab application ko multiple languages aur locales ke liye ready banana hai.

React mein `i18next` aur `react-i18next` commonly use kiye ja sakte hain.

```jsx
<h1>{t('welcome')}</h1>
```

Translation text alag language files mein rakha jata hai aur selected locale ke according correct text show hota hai.

i18n mein language ke saath date, number aur currency formatting bhi handle ki ja sakti hai.

## 10. What are the advantages and disadvantages of using TypeScript with React?

### My PDF Answer — Verbatim Transcription

### Advantages

1) Type Safety - catches bugs during development, not at runtime.

2) improved readability & maintenance - Easy to understand props, state and return type.

3) Scalability - ideal for large codebase and teams; helps enforces Structure.

### Disadvantages

1) Steeper learning Curve - Developer unfamiliar with TS might find complex at first.

### Summary

TypeScript improves code quality, scalability and maintainability in React apps, but it comes with added complexity and setup overhead.

### Simple Explanation — English

TypeScript adds static typing to a React application.

Advantages:

- It catches many type-related errors during development.
- Props, state, function parameters, and return values become clearer.
- It provides better editor autocomplete and refactoring support.
- It is useful for large codebases and teams because types provide structure.

Disadvantages:

- There is a learning curve for developers who are new to TypeScript.
- Types and configuration add some development overhead.
- Sometimes third-party libraries or complex types require additional understanding.

So TypeScript improves safety and maintainability, but it adds type-system complexity.

### Simple Explanation — Hindi

TypeScript React application mein static typing provide karta hai.

Advantages:

- Development ke time type-related errors identify karne mein help karta hai.
- Props, state aur function parameters clear hote hain.
- Editor autocomplete aur refactoring better ho sakta hai.
- Large projects aur teams mein structure maintain karne mein help karta hai.

Disadvantages:

- Starting mein learning curve hota hai.
- Extra types aur configuration likhne padte hain.
- Complex types ya third-party libraries samajhne mein extra effort lag sakta hai.

Overall, TypeScript safety aur maintainability improve karta hai, lekin additional complexity bhi laata hai.

## 11. Describe the difference between React Context and Redux for managing global state.

### My PDF Answer — Verbatim Transcription

### React Context

- Built-in part of React, no extra package needed.
- Best for: State sharing simple state (e.g theme, user auth) across components.
- Usage: Lightweight and easy to set up.

**Limitation:**
- Not optimized for frequent updates.
- can cause unnecessary re-render in deeply nested tree.

### Redux

- External library - Requires installation (`redux`, `react-redux`).
- Best for - complex and large-scale state management.
- Usage - centralized store, clear state flow (actions → reducers → state).

**Advantages:**
- time-saving debugging.
- middleware support (like Redux-Thunk, Redux-Saga).

**Downside:**
- more boilerplate than Context for simple case.

### When to use

- Context = simple, small, stable-ish global data.
- Redux = complex app with large state, many logic or many interactions.

### Simple Explanation — English

Context and Redux both help share state, but they solve different problems.

**Context** is built into React and is useful for relatively simple shared values such as theme, locale, or authentication information.

**Redux** is a dedicated state-management solution with a centralized store and explicit update flow:

```text
Component
   ↓ dispatch
 Action
   ↓
 Reducer
   ↓
Store State
   ↓
Components
```

Redux becomes useful when state logic is complex, many parts of the application interact with the same data, or middleware/debugging capabilities are valuable.

Context is not automatically a replacement for Redux, and Redux is not required for every shared value.

### Simple Explanation — Hindi

Context aur Redux dono shared state ke liye use ho sakte hain, lekin dono ka purpose same nahi hai.

Context React ka built-in mechanism hai aur theme, locale ya auth information jaise relatively simple shared data ke liye useful hai.

Redux dedicated state-management solution hai:

```text
Component
   ↓ dispatch
 Action
   ↓
 Reducer
   ↓
Store
   ↓
Components
```

Complex state logic, multiple interactions aur middleware/debugging ki need hone par Redux useful ho sakta hai. Har shared value ke liye Redux use karna zaroori nahi hai.

## 12. What is the difference between pure and regular components?

### My PDF Answer — Verbatim Transcription

A regular component re-renders every time its parent re-renders.

A pure component only re-renders if its props or state have actually changed.

### Pure Component

```jsx
class MyComponent extends React.PureComponent {
    render() {
        return <div>{this.props.name}</div>;
    }
}
```

Functional Components use `useMemo`:

```jsx
const MyComponent = React.memo((props) => {
    return <div>{props.name}</div>;
});
```

### Simple Explanation — English

A regular component may render when its parent renders, while a pure component can skip some renders when its props and state have not changed according to a shallow comparison.

For class components:

```jsx
class MyComponent extends React.PureComponent {
  render() {
    return <div>{this.props.name}</div>;
  }
}
```

For function components, `React.memo` provides similar memoized rendering behavior:

```jsx
const MyComponent = React.memo(({ name }) => {
  return <div>{name}</div>;
});
```

The optimization is based on comparison, so changing object/function references can still cause a render even when their contents look similar.

### Simple Explanation — Hindi

Regular component parent ke render hone par render ho sakta hai. Pure component shallow comparison ke basis par unnecessary render ko skip kar sakta hai.

Class component mein `React.PureComponent` aur functional component mein `React.memo` use kiya ja sakta hai.

```text
New Props/State
      ↓
Comparison
      ↓
Changed? → Render
Not changed? → Skip
```

Object ya function references change hone par memoized component phir bhi render kar sakta hai, even if data similar dikhe.

## 13. What are some best practices for structuring and organizing React code in a large-scale application?

### My PDF Answer — Verbatim Transcription

1) Use a feature-based folder structure.

2) Keep components small and reusable.

3) Use index files for exports.

4) Separate logic from UI - keep API calls, hooks and state logic outside component using:
   - custom hooks (e.g `useFetch`)
   - context or Redux

5) Use absolute imports.

6) Code splitting and lazy loading.

7) centralized state management.

8) Documentation and comments
   - keep README files for feature and comment complex logic.

### Simple Explanation — English

For a large React application, I prefer a feature-based structure so related UI, hooks, API logic, and tests stay together.

Example:

```text
src/
  features/
    users/
      components/
      hooks/
      api/
      pages/
      tests/
  shared/
    components/
    hooks/
    utils/
```

Other practices include:

- Keep components small and reusable.
- Separate UI from API and business logic.
- Use custom Hooks for reusable stateful logic.
- Use centralized state only where needed.
- Use lazy loading/code splitting for large features.
- Prefer consistent import conventions.
- Keep documentation for complex logic.

The goal is maintainability and clear ownership of each feature.

### Simple Explanation — Hindi

Large React application mein feature-based folder structure useful hota hai, jahan related UI, hooks, API aur tests ek feature ke andar organized rahen.

```text
features/
  users/
    components/
    hooks/
    api/
    pages/
    tests/
```

Other practices:

- Components small aur reusable rakho.
- UI aur API/business logic separate rakho.
- Reusable logic ke liye custom Hooks use karo.
- Zarurat ke according centralized state use karo.
- Large features ke liye lazy loading/code splitting use karo.
- Consistent imports aur documentation maintain karo.

Goal hai code ko maintainable aur easy to understand rakhna.

## 14. Describe the Flux architecture pattern and its relationship with Redux.

### My PDF Answer — Verbatim Transcription

Flux is an architectural pattern for managing State in React apps.

It enforces a unidirectional data flow using Actions, Dispatcher, Stores and Views (React components).

The flow is:

`User → Action → Dispatcher → Store → View`

### Flux

- made by Facebook.
- use multiple Stores to hold different parts of the app's state.
- needs a dispatcher to send actions to the right store.
- more code and a bit complex.

### Redux

- inspired by Flux, but simpler and cleaner.
- uses just one Store to hold the app's state.
- no dispatcher - uses reducers to update the State.
- easier to debug and test.

### Simple Explanation — English

Flux is an architectural pattern based on one-way data flow.

Classic Flux flow:

```text
User
 ↓
Action
 ↓
Dispatcher
 ↓
Store
 ↓
View
```

Flux commonly uses multiple stores and a dispatcher.

Redux was inspired by Flux but simplifies the model:

```text
Action
  ↓
Reducer
  ↓
Single Store
  ↓
View
```

Redux normally uses one centralized store and reducers calculate the next state. It does not use the separate dispatcher found in classic Flux.

The key interview point is that both encourage predictable one-way data flow, while Redux simplifies the architecture.

### Simple Explanation — Hindi

Flux ek one-way data flow architecture pattern hai.

Classic flow:

```text
User
 ↓
Action
 ↓
Dispatcher
 ↓
Store
 ↓
View
```

Redux Flux se inspired hai lekin architecture ko simpler banata hai:

```text
Action
  ↓
Reducer
  ↓
Store
  ↓
View
```

Redux mein generally centralized store aur reducers use hote hain aur classic Flux jaisa separate Dispatcher nahi hota.

## 15. What is the purpose of the `shouldComponentUpdate` method? When should you use it?

### My PDF Answer — Verbatim Transcription

The `shouldComponentUpdate` method is a lifecycle method in React that allows a component to control whether it should re-render or not.

It is invoked before rendering when new props or state are being received. By default, `shouldComponentUpdate` returns true, indicating that the component should re-render.

### Simple Explanation — English

`shouldComponentUpdate` is a class-component lifecycle method that lets us decide whether React should continue rendering a component after receiving new props or state.

Conceptually:

```text
New Props / State
       ↓
shouldComponentUpdate()
       ↓
 true → continue render
 false → skip this component render
```

It is mainly useful when profiling shows unnecessary renders in a class component.

For example:

```js
shouldComponentUpdate(nextProps) {
  return nextProps.id !== this.props.id;
}
```

In modern functional components, similar optimization is often handled with `React.memo` and carefully designed props.

### Simple Explanation — Hindi

`shouldComponentUpdate` class component ka lifecycle method hai jo decide karne mein help karta hai ki component ko render continue karna hai ya nahi.

```text
New Props / State
       ↓
shouldComponentUpdate()
       ↓
true  → render
false → skip
```

Iska use mainly tab karna chahiye jab unnecessary renders identify ho aur class component ko optimize karna ho.

Modern functional components mein similar optimization ke liye `React.memo` use kiya ja sakta hai.

## 16. What are custom hooks in React?

### My PDF Answer — Verbatim Transcription

Custom hooks in React are reusable functions that let you share logic (like fetching data or managing forms) b/w components using built-in hooks like useState and useEffect.

→ custom hooks are reusable function that encapsulate stateful logic using React hooks. They help make code cleaner, modern and DRY (Don't Repeat Yourself).

### How to create one?

Just define a function that starts with `use` and use any built-in hooks inside it.

### Example

```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(json => setData(json));
    }, [url]);

    return data;
}

export default useFetch;
```

### Simple Explanation — English

A custom Hook is a reusable JavaScript function whose name starts with `use` and which can call other React Hooks.

It extracts repeated stateful logic from components without sharing the component's UI.

For example, a reusable data-fetching Hook can contain state, an effect, loading/error handling, and return the result:

```text
Component A ─┐
Component B ─┼→ useFetch() → shared logic
Component C ─┘
```

This keeps components focused on rendering while the custom Hook owns reusable behavior.

### Simple Explanation — Hindi

Custom Hook ek reusable JavaScript function hota hai jiska naam generally `use` se start hota hai aur uske andar React Hooks use kiye ja sakte hain.

Ye repeated stateful logic ko component se bahar extract karta hai, UI ko share nahi karta.

```text
Component A ─┐
Component B ─┼→ useFetch()
Component C ─┘
```

Isse component rendering par focus kar sakta hai aur reusable behavior custom Hook handle kar sakta hai.

## 17. What is Axios and how do you use it in React?

### My PDF Answer — Verbatim Transcription

Axios, which is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints.

This library is very useful to perform CRUD operations.

### Simple Explanation — English

Axios is a JavaScript HTTP client commonly used to communicate with backend APIs.

Typical React flow:

```text
React Component
      ↓
Axios Request
      ↓
Backend API
      ↓
Response
      ↓
Update React State
```

It supports common CRUD operations:

```text
GET    → read
POST   → create
PUT/PATCH → update
DELETE → remove
```

For example:

```js
const response = await axios.get('/api/users');
console.log(response.data);
```

Axios also provides features such as request configuration and interceptors, which can be useful in larger applications.

### Simple Explanation — Hindi

Axios ek JavaScript HTTP client hai jo React application se backend APIs ke saath communicate karne ke liye use hota hai.

```text
React Component
      ↓
Axios Request
      ↓
Backend API
      ↓
Response
      ↓
React State Update
```

CRUD operations:

- GET → data read
- POST → data create
- PUT/PATCH → data update
- DELETE → data remove

Axios mein request configuration aur interceptors jaise features bhi hote hain jo larger applications mein useful ho sakte hain.

## 18. Explain why and how to update the state of components using a callback.

### My PDF Answer — Verbatim Transcription

Why use a callback when updating state?

- React state updates are asynchronous meaning they don't happen immediately. If you try to use the updated state right after calling `setState`, you might get the old state.

- To safely use the latest state, use pass a callback function to setState.

### How to update state using a callback

For ex - using `useState` in a functional component:

```jsx
const [count, setCount] = useState(0);

setCount(prevCount => prevCount + 1);
```

→ using callback to get the latest state.

### Simple Explanation — English

When the next state depends on the previous state, use the functional updater form.

Example:

```jsx
const [count, setCount] = useState(0);

setCount(prevCount => prevCount + 1);
```

Here React supplies the latest previous state value to the updater function.

This is important when multiple updates may be queued in the same event or when the current render's `count` value may be stale.

```text
Previous State
      ↓
Updater Function
      ↓
Next State
```

The same idea exists in class components with the functional form of `setState`.

### Simple Explanation — Hindi

Jab new state previous state par depend karti hai, tab functional updater use karna best hota hai.

```jsx
setCount(prevCount => prevCount + 1);
```

React updater function ko latest previous state value provide karta hai.

```text
Previous State
      ↓
Updater Function
      ↓
Next State
```

Ye especially multiple queued updates ke case mein useful hai, kyunki current render ki value stale ho sakti hai.

## 19. What is React Material UI?

### My PDF Answer — Verbatim Transcription

Material UI is a collection of ready-made beautiful and customizable UI components (like buttons, form, modals) that helps you build modern, responsive React apps faster.

### Simple Explanation — English

Material UI, commonly called MUI, is a React component library that provides ready-made UI components.

Examples include buttons, dialogs, forms, navigation components, tables, and layout components.

Instead of creating every component from scratch, developers can customize MUI components and use them consistently across the application.

Typical benefit:

```text
MUI Components
      ↓
Customize Theme / Props
      ↓
Build Consistent UI Faster
```

It is useful when a project wants a ready-made design system and reusable React components.

### Simple Explanation — Hindi

Material UI, commonly MUI, React ke liye ready-made UI component library hai.

Ismein buttons, dialogs, forms, navigation, tables aur layout components milte hain.

Developer in components ko customize karke consistent UI faster build kar sakta hai.

```text
MUI Components
      ↓
Theme / Props Customize
      ↓
Consistent UI
```

## 20. What is `useMemo()` in React?

### My PDF Answer — Verbatim Transcription

`useMemo` in React is hook that memoizes (remembers) the result of a function to avoid unnecessary recalculation on every render.

→ If you have a slow and expensive computation, `useMemo` helps optimize performance by re-running it only when its dependencies change, not on every render.

### Syntax

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

### Simple Explanation — English

`useMemo()` memoizes the result of a calculation between renders.

Example:

```jsx
const filteredUsers = useMemo(
  () => users.filter(user => user.active),
  [users]
);
```

React can reuse the previous calculated value when the dependencies have not changed.

```text
Render
  ↓
Dependencies changed?
  ├─ No  → reuse memoized value
  └─ Yes → calculate again
```

It is most useful for genuinely expensive calculations or when referential stability is important. It should not be added automatically to every calculation because memoization itself has a cost.

### Simple Explanation — Hindi

`useMemo()` calculation ke result ko memoize/cache karta hai.

```jsx
const filteredUsers = useMemo(
  () => users.filter(user => user.active),
  [users]
);
```

Agar dependencies change nahi hui hain, React previous calculated value reuse kar sakta hai.

```text
Render
  ↓
Dependencies Changed?
  ├─ No  → Old memoized value
  └─ Yes → Recalculate
```

`useMemo()` ko actual expensive calculation ya performance need hone par use karna better hai. Har calculation par use karna necessary nahi hai.

## Source Note

The questions and the **“My PDF Answer — Verbatim Transcription”** sections above are based on the uploaded scanned PDF, specifically the first 20 React questions and their handwritten answers. The supplied reference `.md` file establishes the requested three-section structure: verbatim PDF answer, simple English explanation, and simple Hindi explanation.
