# React Interview Questions 21–40 — PDF Answers + English + Hindi

> **Important:** The **“My PDF Answer — Verbatim Transcription”** section preserves the wording from the scanned PDF as closely as readable. Grammar, technical wording, and mistakes in the original PDF have not been silently corrected. Markdown/code formatting is only used to keep the content readable.
>
> The English and Hindi sections are simple interview-friendly explanations based on the PDF answer.

---

## 21. Does React `useState` hook update immediately?

### My PDF Answer — Verbatim Transcription

No, `useState` does not update immediately. It updates the state in the next render. If I log the state right after calling `setState`, it will still show the old values.

### Simple Explanation — English

No. Calling a state setter such as `setCount()` does not immediately change the state value captured by the current render.

React schedules the update and then renders the component again with the new state.

Example:

```jsx
const [count, setCount] = useState(0);

setCount(1);
console.log(count); // current render still has 0
```

The important idea is:

```text
setCount(1)
    ↓
Update scheduled
    ↓
Next render
    ↓
count = 1
```

If the next state depends on the previous state, use the functional updater form: `setCount(prev => prev + 1)`. 

### Simple Explanation — Hindi

Nahi. `setCount()` call karne ke turant baad current render ke andar state variable ki value change nahi hoti.

React update ko schedule karta hai aur next render mein new state value milti hai.

```text
setCount(1)
    ↓
Update Schedule
    ↓
Next Render
    ↓
count = 1
```

Agar new state previous state par depend karti hai, to `setCount(prev => prev + 1)` jaise functional updater ka use karna chahiye.

## 22. When to use `useCallback`, `useMemo`, and `useEffect`?

### My PDF Answer — Verbatim Transcription

### (i) useCallback

- Use it to memorize function so they don't get re-created on every render, especially when passing them as props to child component.

### (ii) useMemo

- use it to memorize expensive calculations so they are not re-computed on every render.

### When to use

- expensive calculations.
- Avoid recalculation unless dependencies change.

### (iii) useEffect

- use it to handle side effects like data fetching, subscriptions or updating the DOM.

### When to use

- fetch API data
- set up event listeners
- update document title etc.

### Simple Explanation — English

These three Hooks solve different problems:

- **`useCallback`** memoizes a function reference. It is useful when function identity matters, such as passing a callback to a memoized child.
- **`useMemo`** memoizes the result of an expensive calculation.
- **`useEffect`** synchronizes the component with external systems such as APIs, subscriptions, timers, or browser APIs.

Example:

```text
Function reference → useCallback
Calculated value   → useMemo
External side effect → useEffect
```

I would not use `useCallback` or `useMemo` automatically. They are optimization tools and should be used when they solve an actual rendering or calculation problem.

### Simple Explanation — Hindi

In teen Hooks ka purpose different hai:

- `useCallback` → function reference memoize karta hai.
- `useMemo` → expensive calculation ka result memoize karta hai.
- `useEffect` → API, subscription, timer ya external system jaise side effects ke liye.

```text
Function → useCallback
Value    → useMemo
Effect   → useEffect
```

`useMemo` aur `useCallback` ko har jagah use nahi karna chahiye. Actual performance need hone par use karna better hai.

## 23. Explain the types of routers in React.

### My PDF Answer — Verbatim Transcription

1) **BrowserRouter**

- User normal URL like `/home`
- most commonly used in web apps.

2) **HashRouter**

- Add a `#` in the URL (like `/#/home`)
- Useful if the server doesn't support routes.

3) **MemoryRouter**

- Doesn't show URL changes.
- mostly used in testing or memory-based mobile apps.

4) **StaticRouter**

- Used in server-side rendering.
- It doesn't handle navigating - just renders routes based on input.

→ I usually use BrowserRouter in my projects because it's perfect for real web apps.

### Simple Explanation — English

React Router provides different routers for different environments.

- **BrowserRouter:** uses normal browser URLs such as `/home`; common for web applications.
- **HashRouter:** stores the route after `#`, such as `/#/home`; useful when the server cannot be configured to serve client-side routes correctly.
- **MemoryRouter:** keeps navigation history in memory; useful for tests and non-browser environments.
- **StaticRouter:** useful for server-side rendering where the location is supplied as input rather than changed through browser navigation.

```text
Web App → BrowserRouter
Static Hosting Constraints → HashRouter
Tests / Memory Environment → MemoryRouter
SSR → StaticRouter
```

### Simple Explanation — Hindi

React Router mein environment ke according different routers use hote hain.

- BrowserRouter → normal browser URLs
- HashRouter → `#` ke baad routing
- MemoryRouter → memory mein routing, testing ke liye useful
- StaticRouter → server-side rendering ke liye

```text
Web App → BrowserRouter
Server Route Support Problem → HashRouter
Testing → MemoryRouter
SSR → StaticRouter
```

## 24. What is Strict Mode in React?

### My PDF Answer — Verbatim Transcription

React StrictMode is a tool that helps you write better React code.

1) Highlights potential problems in your app.
2) Helps find unsafe code patterns.
3) Runs some functions twice (in development only) to catch bugs.

### Simple Explanation — English

Strict Mode is a development-time feature that helps detect potential problems in React code.

It can enable additional checks and intentionally re-run certain logic in development so that unsafe side effects or assumptions become visible.

For example, in development you may notice an effect setup/cleanup cycle happening more than once. This is intended as a development check and is not the same as React simply rendering twice in production.

The purpose is to make side effects resilient and reveal bugs earlier.

### Simple Explanation — Hindi

Strict Mode React ka development-time feature hai jo potential problems identify karne mein help karta hai.

Development mein React kuch checks ke liye certain logic ko extra time run kar sakta hai, jisse unsafe side effects ya bugs jaldi identify ho saken.

Important point: development mein extra checks hona production mein same behavior hone ka matlab nahi hai.

## 25. What is conditional rendering in React?

### My PDF Answer — Verbatim Transcription

Conditional rendering in React means showing different UI element based on certain conditions (like if-else & ternary operator).

eg →

```jsx
isLoggedIn ? <h1>Welcome Back</h1> : <h1>Please Login</h1>
```

```jsx
const isLoggedIn = true;
```

### Simple Explanation — English

Conditional rendering means deciding which UI React should render based on a condition.

Common patterns are:

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}

{isAdmin && <AdminPanel />}
```

For more complex conditions, normal `if/else` logic can be used before returning JSX.

```text
Condition
   ↓
true  → UI A
false → UI B
```

This is one of the basic ways React applications display different UI states such as loading, authenticated, empty, or error states.

### Simple Explanation — Hindi

Conditional rendering ka matlab condition ke according different UI render karna.

Example:

```jsx
{isLoggedIn ? <Dashboard /> : <Login />}

{isAdmin && <AdminPanel />}
```

Complex condition ke liye normal `if/else` bhi use kar sakte hain.

```text
Condition
   ↓
true  → UI A
false → UI B
```

Iska use login state, loading, empty state aur error state jaise cases mein hota hai.

## 26. How can you avoid binding in React?

### My PDF Answer — Verbatim Transcription

To avoid binding in React (especially in class components) use one of these techniques.

→ To avoid binding, use arrow function in class components, which automatically preserve the `this` context.

In functional components, there isn't an issue since hooks are used instead.

### Simple Explanation — English

In older React class components, explicit binding was needed when a normal method was passed as an event handler because the `this` context could be lost.

An arrow function can avoid this problem because it uses lexical `this`.

```jsx
class Button extends React.Component {
  handleClick = () => {
    console.log(this);
  };

  render() {
    return <button onClick={this.handleClick}>Click</button>;
  }
}
```

Functional components do not use class `this`, so this particular binding problem does not apply.

The key interview point is that modern functional components and Hooks largely remove the need for manual event-handler binding.

### Simple Explanation — Hindi

Old React class components mein normal method ko event handler ke roop mein pass karne par `this` context ka issue aa sakta tha.

Arrow function lexical `this` use karti hai, isliye manual `.bind(this)` ki need nahi padti.

Functional components mein class wala `this` hota hi nahi, isliye ye binding problem normally nahi hoti.

Modern React mein functional components + Hooks ki wajah se manual binding ki requirement kaafi kam ho gayi hai.

## 27. How would you programmatically redirect after login?

### My PDF Answer — Verbatim Transcription

In React Router v6, we use the `useNavigate()` hook to programmatically redirect users.

When login is successful, call `navigate('/path')`, and it will redirect automatically.

Example:

```jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ isLoggedIn }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/dashboard');
        }
    }, [isLoggedIn, navigate]);

    return <div>Login page</div>;
}
```

### Simple Explanation — English

In React Router v6, `useNavigate()` is used for programmatic navigation.

For example, after a successful login:

```jsx
const navigate = useNavigate();

async function handleLogin() {
  const success = await login();
  if (success) {
    navigate('/dashboard');
  }
}
```

Flow:

```text
Login Submit
    ↓
API Authentication
    ↓
Success
    ↓
navigate('/dashboard')
    ↓
Dashboard
```

If the navigation should happen after a state change, `useEffect` can also call `navigate()` based on that state, as in the source PDF.

### Simple Explanation — Hindi

React Router v6 mein JavaScript code ke through navigation karne ke liye `useNavigate()` use hota hai.

Login successful hone ke baad:

```js
navigate('/dashboard');
```

call karke user ko dashboard par bhej sakte hain.

```text
Login
 ↓
Authentication Success
 ↓
navigate()
 ↓
Dashboard
```

Agar navigation kisi state change ke basis par karni ho to `useEffect` ke andar bhi `navigate()` use kiya ja sakta hai.

## 28. Do hooks cover all the functionality provided by the classes?

### My PDF Answer — Verbatim Transcription

Yes, hooks cover all functionalities provided by class components, like State, lifecycle methods and Context and even make some things easier (like code reuse via custom hooks).

### Explanation (Simplified)

- `useState` replaces `this.state` and `setState`.
- `useEffect` replaces lifecycle methods like `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`.
- `useContext` replaces Context usage.
- Custom hooks let you reuse logic more easily than HOCs or render props in many cases.

Extra → Hooks don't need `this` keyword, which makes the code cleaner and easier to read.

### Simple Explanation — English

Hooks cover the main capabilities that class components traditionally provided for state, side effects, Context, and reusable logic.

Examples:

- `useState` → component state
- `useEffect` → side effects that were often handled in lifecycle methods
- `useContext` → read Context values
- Custom Hooks → reuse stateful logic

```text
Class Component
  ├─ State → useState
  ├─ Lifecycle-related effects → useEffect
  └─ Context → useContext
```

However, I would phrase this carefully: Hooks provide modern equivalents for these common capabilities, but they are not literally a one-to-one replacement for every class API.

### Simple Explanation — Hindi

Hooks class components ke major use cases ko functional components mein provide karte hain.

- `useState` → state
- `useEffect` → side effects/lifecycle-related work
- `useContext` → Context values
- Custom Hooks → reusable logic

```text
State → useState
Effects → useEffect
Context → useContext
Reusable Logic → Custom Hook
```

Interview mein ye kehna better hai ki Hooks common class capabilities ke modern alternatives provide karte hain; har class API ka exact one-to-one replacement kehna zaroori nahi hai.

## 29. How does the performance of using hooks differ in comparison with classes?

### My PDF Answer — Verbatim Transcription

Hooks have similar or better performance than classes in most cases.

They allow for cleaner, more optimized code, especially with tools like `useMemo`, `useCallback`, and React's concurrent rendering.

→ With `useCallback`, you can memorize a function and prevent unnecessary re-render, which is harder with class component unless you use `shouldComponentUpdate` or define methods carefully.

### Simple Explanation — English

Hooks are not automatically faster than class components. Both can perform well when the component is designed efficiently.

Hooks can make optimization convenient because functional components can use:

- `React.memo` to skip renders when props are equal.
- `useMemo` to cache expensive calculations.
- `useCallback` to preserve callback identity when useful.

Class components have comparable techniques such as `PureComponent` and `shouldComponentUpdate`.

So performance should be measured with profiling rather than assuming that Hooks alone make a component faster.

### Simple Explanation — Hindi

Hooks automatically classes se faster nahi hote. Dono approaches achhi performance de sakte hain.

Functional components mein:

- `React.memo` → unnecessary renders reduce
- `useMemo` → expensive calculation cache
- `useCallback` → callback reference stable rakhna

Class components mein `PureComponent` aur `shouldComponentUpdate` jaise optimization methods hain.

Performance ke liye assumption ke bajay profiling se actual bottleneck identify karna better hai.

## 30. Does React Hooks work with static typing?

### My PDF Answer — Verbatim Transcription

Yes, React Hooks work perfectly with static typing, especially using TypeScript.

React hooks like `useState`, `useEffect`, and `useRef` allow you to define types for state, props etc., which helps catch errors during development.

### Simple Explanation — English

Yes. React Hooks work well with static typing, especially TypeScript.

You can type state, props, refs, event handlers, and values returned by custom Hooks.

Example:

```tsx
const [count, setCount] = useState<number>(0);

type User = {
  id: number;
  name: string;
};

const [user, setUser] = useState<User | null>(null);
```

This helps catch type mismatches during development and improves editor autocomplete and refactoring support.

### Simple Explanation — Hindi

Haan, React Hooks TypeScript ke saath achhe se work karte hain.

State, props, refs, event handlers aur custom Hook return values ko type kiya ja sakta hai.

```tsx
const [count, setCount] = useState<number>(0);
```

Isse development ke time type errors jaldi identify hote hain aur editor autocomplete/refactoring bhi better hota hai.

## 31. What is the difference between `createElement` and `cloneElement`?

### My PDF Answer — Verbatim Transcription

### 1) React.createElement

**What it does**

→ Creates a new React element from scratch.

**When to use**

→ when you want to create a brand-new component's element.

Example:

```jsx
const element = React.createElement('div', { className: 'box' }, 'Hello');
```

This is equivalent to:

```jsx
<div className="box">Hello</div>
```

### 2) React.cloneElement

**What it does**

Takes an existing React element and clones it, optionally adding or overriding props.

**When do use**

When you want to modify an already existing child element.

Example:

```jsx
const element = <Button disabled={false} />;
const cloned = React.cloneElement(element, { disabled: true });
```

### Simple Explanation — English

`React.createElement()` creates a new React element from a type, props, and children.

```js
React.createElement('div', { className: 'box' }, 'Hello');
```

It is conceptually what JSX is transformed into.

`React.cloneElement()` starts with an existing React element and creates a new element while allowing props or children to be changed.

```jsx
const element = <Button disabled={false} />;
const cloned = React.cloneElement(element, { disabled: true });
```

Simple difference:

```text
createElement → create from inputs
cloneElement  → clone existing element + modify
```

### Simple Explanation — Hindi

`React.createElement()` inputs ke basis par ek naya React element create karta hai.

```js
React.createElement('div', { className: 'box' }, 'Hello');
```

`React.cloneElement()` existing React element ko clone karta hai aur props/children modify karne ka option deta hai.

```text
createElement → new element
cloneElement  → existing element ka clone
```

Isliye main difference hai new element create karna versus existing element ko clone karke modify karna.

## 32. What are PropTypes in React?

### My PDF Answer — Verbatim Transcription

PropTypes is a type checking tool in React that ensure components receives the correct type of props.

It's mainly used for debugging and validation during development.

### Why use PropTypes?

- to catch bugs early by verifying prop types.
- to make your code more readable and self-documenting.
- to alert developers when a component receives invalid or missing props.

Example:

```jsx
import PropTypes from 'prop-types';

function UserCard({ name, age }) {
    return (
        <>
            <h2>{name}</h2>
            <p>{age}</p>
        </>
    );
}

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};
```

→ name must be a string and is required.

→ age is optional but must be a number if provided.

### Simple Explanation — English

PropTypes is a runtime development-time validation mechanism for React props.

For example:

```jsx
UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};
```

This tells developers that `name` should be a required string and `age`, if provided, should be a number.

PropTypes can catch incorrect prop usage during development. They do not replace TypeScript's compile-time/static type checking; they are a runtime validation approach.

### Simple Explanation — Hindi

PropTypes React props ki runtime development-time validation ke liye use hota hai.

Example:

```jsx
UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number
};
```

Yahan `name` required string hai aur `age` optional number hai.

PropTypes development mein wrong prop usage detect karne mein help karta hai. Ye TypeScript ka replacement nahi hai; TypeScript static/compile-time type checking provide karta hai.

## 33. What are stateless and stateful components?

### My PDF Answer — Verbatim Transcription

### Stateless Component

A stateless component is a function that takes props and return JSX.

It doesn't use `useState` and `this.state`.

→ Just displays data from props.

→ Doesn't track or modify any internal state.

### Stateful Component

A stateful component is one that uses state (like with `useState` or `this.state`) to manage data that can change during the component's lifecycle.

### Simple Explanation — English

A stateless component is mainly responsible for rendering UI from props and does not maintain its own changing state.

A stateful component manages changing data using React state, such as `useState` in a functional component or `this.state` in an older class component.

Example:

```text
Props → Stateless Component → UI

State + Props → Stateful Component → UI
                  ↑
              State changes
```

The distinction is about whether the component owns changing state, not simply whether the component is a function or class.

### Simple Explanation — Hindi

Stateless component mainly props se UI render karta hai aur apna changing state maintain nahi karta.

Stateful component changing data ko React state ke through manage karta hai, jaise `useState` ya old class component mein `this.state`.

```text
Props → Stateless → UI

State + Props → Stateful → UI
```

Important point: difference component ke state ownership ka hai, sirf function/class hone ka nahi.

## 34. What are the benefits of using hooks in React?

### My PDF Answer — Verbatim Transcription

Hooks allow you to use State and other features in functional components, eliminating the need for classes. They simplify code by reducing reliance on lifecycle methods, improve code readability:

and make it easier to reuse Stateful logic across Components.

Common hooks like `useState` and `useEffect` help manage State and Side effects.

### Simple Explanation — English

Hooks provide several benefits in modern React:

- Functional components can use state and other React features.
- They reduce the need for class components and class lifecycle APIs.
- Custom Hooks allow reusable stateful logic.
- Related logic can stay together instead of being split across lifecycle methods.
- Hooks remove the need for class `this`.

For example, data-fetching logic can be extracted into `useFetch()` and reused by multiple components.

```text
Component A ─┐
Component B ─┼→ Custom Hook → Shared Stateful Logic
Component C ─┘
```

### Simple Explanation — Hindi

Hooks ke main benefits:

- Functional components mein state aur React features use kar sakte hain.
- Class components ki need kam hoti hai.
- Custom Hooks se stateful logic reuse kar sakte hain.
- Related logic ko ek jagah organize karna easier hota hai.
- Class wala `this` use nahi karna padta.

```text
Component A ─┐
Component B ─┼→ Custom Hook
Component C ─┘
```

Isse reusable logic cleaner aur DRY ban sakta hai.

## 35. What is the difference between `useEffect()` and `useLayoutEffect()` in React?

### My PDF Answer — Verbatim Transcription

`useEffect()` → Runs after the screen is updated (after the UI is shown).

Good for API calls, logging, setting timers.

```jsx
useEffect(() => {
    console.log("page is visible now");
}, []);
```

`useLayoutEffect()` → Runs before the screen is updated (before the UI is shown).

Good for measuring size of elements, fixing layout before user sees it.

### Simple Explanation — English

The main difference is when the effect runs relative to browser painting.

- **`useEffect`** is generally used for non-visual side effects such as API calls, subscriptions, logging, and timers. React runs it after the component has been committed, without blocking the normal paint in the common case.
- **`useLayoutEffect`** runs synchronously after the DOM has been updated but before the browser paints the updated screen. It is useful when you must measure layout or make a visual DOM adjustment before the user sees it.

Example:

```text
Render
  ↓
DOM Commit
  ↓
useLayoutEffect
  ↓
Browser Paint
  ↓
useEffect
```

Because `useLayoutEffect` can delay painting, it should be used only when the layout timing actually requires it.

### Simple Explanation — Hindi

Main difference timing ka hai.

- `useEffect` → normal side effects ke liye, jaise API calls, subscriptions, logging, timers.
- `useLayoutEffect` → DOM update ke baad aur browser paint se pehle synchronously run hota hai; layout measure/fix karne ke liye useful hai.

```text
Render
  ↓
DOM Commit
  ↓
useLayoutEffect
  ↓
Browser Paint
  ↓
useEffect
```

`useLayoutEffect` painting ko delay kar sakta hai, isliye sirf jab layout timing ki real need ho tab use karna chahiye.

## 36. What does the dependency array of `useEffect` do?

### My PDF Answer — Verbatim Transcription

The array you pass as the second argument to `useEffect` tells React when to re-run the effect based on the values inside it.

### 1) No dependency array

```jsx
useEffect(() => {
    // Runs after every render
});
```

### 2) Empty array `[]`

```jsx
useEffect(() => {
    // Runs only once after the initial render
}, []);
```

### 3) With dependencies

```jsx
useEffect(() => {
    // Runs on initial render
    // And runs again whenever "count" or "name" changes
}, [count, name]);
```

### Simple Explanation — English

The dependency array tells React which reactive values an effect depends on and when the effect should be re-synchronized.

```jsx
useEffect(() => {
  // effect
});
```

No array → runs after every render.

```jsx
useEffect(() => {
  // effect
}, []);
```

Empty array → runs after the initial commit and does not re-run because of changing dependencies.

```jsx
useEffect(() => {
  // effect
}, [count, name]);
```

With dependencies → runs after the initial commit and again when `count` or `name` changes.

If the effect returns a cleanup function, React runs cleanup before re-running the effect when dependencies change and when the component is removed.

### Simple Explanation — Hindi

Dependency array `useEffect` ko batata hai ki effect kin reactive values par depend karta hai.

- No array → har render ke baad effect
- `[]` → initial commit ke baad run; dependency changes ki wajah se re-run nahi
- `[count, name]` → initial run aur `count`/`name` change hone par re-run

Agar cleanup function return kiya hai, to dependency change par next effect se pehle cleanup run hota hai aur component remove hone par bhi cleanup hota hai.

## 37. Why does React recommend against mutating state?

### My PDF Answer — Verbatim Transcription

React recommends against mutating state directly because mutating state can break how React detects changes and manages re-renders, leading to bugs, inconsistent UI, or missed updates.

### Why it's a problem

React relies on immutability to:

1) Detect changes efficiently.
2) Trigger re-render when needed.
3) Preserve previous state for comparison and debugging (e.g. time-travel debugging).

When you mutate state, React might not realize anything changed.

Example → mutating vs updating state properly

```jsx
const [items, setItems] = useState([1, 2, 3]);

// BAD - mutates the array
items.push(4);
setItems(items);

// CORRECT - creates a new array
setItems([...items, 4]);
```

### Simple Explanation — English

React recommends immutable state updates because React needs to determine when state has changed and because immutable updates make state transitions easier to reason about.

Bad:

```jsx
items.push(4);
setItems(items);
```

Here the same array reference is reused.

Better:

```jsx
setItems([...items, 4]);
```

Now a new array reference is created.

The flow is:

```text
Old State
   ↓
Create New Value
   ↓
State Setter
   ↓
React sees new state
   ↓
Required render/update
```

Immutability also makes debugging, comparison, memoization, and predictable state transitions easier.

### Simple Explanation — Hindi

React state ko directly mutate karne ke bajay new value create karna better hai.

Bad:

```js
items.push(4);
setItems(items);
```

Better:

```js
setItems([...items, 4]);
```

```text
Old State
   ↓
New Value
   ↓
State Setter
   ↓
React Update
```

Immutable updates se state changes predictable rehte hain aur comparison, debugging aur memoization easier ho sakte hain.

## 38. What is reconciliation in React?

### My PDF Answer — Verbatim Transcription

Reconciliation in React is the process of comparing the new Virtual DOM with the previous Virtual DOM to determine what has changed. Based on this comparison, React efficiently updates only the parts of the actual DOM that need to change.

This process helps React achieve high performance because it avoids unnecessary DOM manipulations. React uses keys to track elements during reconciliation, especially in lists, to correctly identify which elements have changed, been added or removed.

### Simple Explanation — English

Reconciliation is the process React uses to determine what needs to change after a new render.

Conceptually:

```text
Previous Render
      ↓
New Render
      ↓
Compare element structure
      ↓
Determine required changes
      ↓
Commit updates to DOM
```

React uses element type, position, and keys to preserve identity where appropriate. Keys are especially important in lists because they help React understand which item corresponds to which previous item.

Reconciliation does not mean React blindly rewrites the entire DOM; it calculates the updates needed for the committed UI.

### Simple Explanation — Hindi

Reconciliation React ka process hai jisme new render ke baad determine kiya jata hai ki UI mein kya change hua.

```text
Previous Render
      ↓
New Render
      ↓
Compare
      ↓
Required Changes
      ↓
DOM Commit
```

Lists mein `key` important hoti hai kyunki React ko items ki identity track karne mein help karti hai.

React poora DOM blindly replace nahi karta; required UI updates determine karta hai.

## 39. What is the purpose of the `useContext` hook in React?

### My PDF Answer — Verbatim Transcription

A `useContext` hook in React is used to access context values directly in a functional component without having to use the `Context.Consumer` wrapper.

It allows you to share data like theme, user info or language settings across the component tree without passing props manually to every component.

### Simple Explanation — English

`useContext` lets a functional component read the current value of a React Context without manually passing that value through every intermediate component.

Example:

```jsx
const ThemeContext = createContext('light');

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Save</button>;
}
```

The flow is:

```text
Context Provider
      ↓
Component Tree
      ↓
useContext()
      ↓
Read shared value
```

It is useful for shared values such as theme, locale, or authenticated-user information. It should not automatically be treated as a replacement for every form of global state management.

### Simple Explanation — Hindi

`useContext` functional component ko React Context ki current value directly read karne deta hai.

```text
Context Provider
      ↓
Component Tree
      ↓
useContext()
      ↓
Shared Value
```

Theme, language/locale aur authenticated user information jaise shared data ke liye useful hai.

Isse har intermediate component ko manually props pass karne ki need kam hoti hai.

## 40. What happens if you attempt to update state directly in React?

### My PDF Answer — Verbatim Transcription

If you update the state directly (eg. `this.state.count = 5` or state value = 'new'), React will not re-render the component, and the change won't be reflected in the UI.

This is because updates on the state setter function (or change components) use `setState` to know when a state change has occurred and trigger a re-render.

→ Correct → `this.state.count = 10`; // React updates and re-renders.

Directly modifying state breaks React's internal update process, can cause bugs and leads to an inconsistent UI - always use the appropriate state updater method to ensure proper rendering.

### Simple Explanation — English

State should not be updated by directly changing the state variable.

In a functional component:

```jsx
const [count, setCount] = useState(0);

setCount(10);
```

In a class component, use `setState()` rather than assigning directly to `this.state`.

The flow is:

```text
State Setter
    ↓
React schedules update
    ↓
Component renders with new state
    ↓
UI updates
```

Direct mutation bypasses React's normal state-update mechanism and can lead to stale or inconsistent UI. The same immutable-update principle applies to objects and arrays stored in state.

### Simple Explanation — Hindi

State ko directly modify nahi karna chahiye. Functional component mein `useState` se mila setter use karo:

```jsx
const [count, setCount] = useState(0);

setCount(10);
```

Class component mein `this.state.count = 10` ki jagah `setState()` use karna chahiye.

```text
State Setter
    ↓
React Update Schedule
    ↓
New Render
    ↓
UI Update
```

Direct mutation React ke normal update process ko bypass kar sakti hai aur inconsistent UI create kar sakti hai.

## Source Note

Questions 21–40 and their **“My PDF Answer — Verbatim Transcription”** sections are based on the corresponding handwritten answers in the uploaded scanned PDF. The explanations are simplified interview-friendly versions while keeping the PDF's terminology and structure.
