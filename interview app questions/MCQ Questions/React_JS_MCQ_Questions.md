# React.js MCQ Questions — Interview Preparation
## 110 Multiple Choice Questions with Answers & Explanations

> Based on React JS Interview Questions 1–110 for MERN Stack Developer

---

## 1. What is React?

- **A.** A backend framework for building APIs.
- **B.** A JavaScript library for building user interfaces using reusable components with a declarative approach.
- **C.** A database management system.
- **D.** A CSS framework for styling web pages.

**Answer:** B. A JavaScript library for building user interfaces using reusable components with a declarative approach.

**Explanation:** React helps build complex UIs using reusable components. It uses a declarative approach where we describe what the UI should look like for a state, and React handles DOM updates efficiently.

---

## 2. Which of the following is NOT a main feature of React?

- **A.** Component-based architecture and JSX.
- **B.** Two-way data binding by default.
- **C.** Virtual DOM and declarative UI.
- **D.** Hooks for state and side effects in functional components.

**Answer:** B. Two-way data binding by default.

**Explanation:** React uses one-way data flow (parent to child via props). Two-way binding is not a default React feature. Main features include component-based architecture, JSX, Virtual DOM, Hooks, and declarative UI.

---

## 3. What is JSX?

- **A.** A new programming language.
- **B.** JavaScript XML — a syntax that allows writing HTML-like UI code inside JavaScript, which is transformed during the build process.
- **C.** A database query language.
- **D.** A CSS preprocessor.

**Answer:** B. JavaScript XML — a syntax that allows writing HTML-like UI code inside JavaScript, which is transformed during the build process.

**Explanation:** JSX makes component code readable by keeping UI structure and logic together. The browser doesn't understand JSX directly — the build process transforms it into JavaScript function calls.

---

## 4. What is the Virtual DOM?

- **A.** A copy of the real DOM stored in a database.
- **B.** An in-memory representation of the UI that React uses to calculate required DOM changes efficiently before applying them.
- **C.** A browser extension for debugging.
- **D.** A replacement for the real DOM.

**Answer:** B. An in-memory representation of the UI that React uses to calculate required DOM changes efficiently before applying them.

**Explanation:** When state changes, React creates an updated Virtual DOM representation, compares it with the previous one (diffing), determines what changed, and applies only the necessary changes to the real DOM.

---

## 5. What is the correct flow of how the Virtual DOM works?

- **A.** Real DOM update → Virtual DOM → State change
- **B.** State/Props change → Render → Compare/Reconciliation → Commit required DOM updates
- **C.** Virtual DOM → State change → Browser refresh
- **D.** HTML parsing → Virtual DOM creation → CSS styling

**Answer:** B. State/Props change → Render → Compare/Reconciliation → Commit required DOM updates

**Explanation:** When state/props change, the component re-renders, React creates a new Virtual DOM representation, compares it with the previous one (reconciliation), and commits only the necessary changes to the real DOM.

---

## 6. What is reconciliation in React?

- **A.** The process of creating new components.
- **B.** The process React uses to compare the previous and new rendered UI to determine what needs to change in the actual DOM.
- **C.** The process of fetching data from an API.
- **D.** The process of installing npm packages.

**Answer:** B. The process React uses to compare the previous and new rendered UI to determine what needs to change in the actual DOM.

**Explanation:** Reconciliation compares the old and new Virtual DOM trees. For lists, keys help React identify items consistently. If only one item changes in a 100-item list, React updates only that item.

---

## 7. What is the difference between the Virtual DOM and the Real DOM?

- **A.** The Virtual DOM is faster because it renders directly on screen.
- **B.** The Virtual DOM is React's in-memory JS representation; the Real DOM is the browser's actual document structure that React updates efficiently.
- **C.** They are the same thing.
- **D.** The Real DOM is faster than the Virtual DOM.

**Answer:** B. The Virtual DOM is React's in-memory JS representation; the Real DOM is the browser's actual document structure that React updates efficiently.

**Explanation:** The Virtual DOM is not a separate browser DOM — it's a JavaScript object representation. React uses it to calculate the minimum necessary changes before touching the actual browser DOM.

---

## 8. What is the difference between props and state?

- **A.** Props and state are the same thing.
- **B.** Props are passed from parent to child (read-only); state is managed internally by a component and can change over time.
- **C.** State is passed from parent to child; props are internal.
- **D.** Props can be modified by the child component directly.

**Answer:** B. Props are passed from parent to child (read-only); state is managed internally by a component and can change over time.

**Explanation:** Props flow from parent to child and should be treated as read-only. State is internal data that the component manages using `useState` or `useReducer`, and changes trigger re-renders.

---

## 9. What is the difference between functional and class components?

- **A.** Functional components cannot have state.
- **B.** Functional components are functions that return UI and use Hooks; class components extend `React.Component` and use lifecycle methods.
- **C.** Class components are the only way to build React apps.
- **D.** Functional components are slower than class components.

**Answer:** B. Functional components are functions that return UI and use Hooks; class components extend `React.Component` and use lifecycle methods.

**Explanation:** Modern React uses functional components with Hooks (`useState`, `useEffect`, etc.) which are simpler and more flexible. Class components use `this`, lifecycle methods, and are the older approach.

---

## 10. What is a controlled component?

- **A.** A component that cannot be interacted with.
- **B.** A component where the form input's value is controlled by React state, updating through `onChange` and `value` props.
- **C.** A component wrapped in an error boundary.
- **D.** A component that only renders once.

**Answer:** B. A component where the form input's value is controlled by React state, updating through `onChange` and `value` props.

**Explanation:** In a controlled component, React state is the "single source of truth" for the input value. Example: `<input value={name} onChange={(e) => setName(e.target.value)} />`. This enables validation and dynamic behavior.

---

## 11. Why are keys required when rendering lists in React?

- **A.** Keys add CSS styles to list items.
- **B.** Keys help React identify which items changed, were added, or removed during reconciliation — they should be stable and unique.
- **C.** Keys are optional and have no effect.
- **D.** Keys determine the order of rendering.

**Answer:** B. Keys help React identify which items changed, were added, or removed during reconciliation — they should be stable and unique.

**Explanation:** Use stable IDs (like database IDs) as keys, not array indexes. Keys help React maintain item identity across re-renders, preventing incorrect state associations and unnecessary DOM operations.

---

## 12. What happens internally when a React component re-renders?

- **A.** The entire DOM is recreated from scratch.
- **B.** React re-executes the component function, compares the new output with the previous one, and commits only necessary DOM changes.
- **C.** The browser refreshes the page.
- **D.** All child components are unmounted and remounted.

**Answer:** B. React re-executes the component function, compares the new output with the previous one, and commits only necessary DOM changes.

**Explanation:** A re-render means the component function runs again to calculate new UI. React's diffing determines what actually changed in the DOM. Not every re-render results in DOM updates.

---

## 13. How do you pass data from parent to child component?

- **A.** Using global variables.
- **B.** Through props — the parent includes attributes on the child component JSX, and the child receives them as function parameters.
- **C.** Using `localStorage`.
- **D.** Through CSS variables.

**Answer:** B. Through props — the parent includes attributes on the child component JSX, and the child receives them as function parameters.

**Explanation:** Example: `<Child name={name} />` in parent, `function Child({ name })` in child. Props are the primary mechanism for parent-to-child data flow in React.

---

## 14. How do you pass data from child to parent component?

- **A.** The child directly modifies the parent's state.
- **B.** The parent passes a callback function as a prop; the child calls it with data when needed.
- **C.** Using `document.getElementById()`.
- **D.** Data cannot flow from child to parent.

**Answer:** B. The parent passes a callback function as a prop; the child calls it with data when needed.

**Explanation:** Example: Parent passes `onMessage={handleMessage}` as prop. Child calls `onMessage("Hello Parent")` on a button click. The child never directly modifies parent state.

---

## 15. What is prop drilling?

- **A.** A React performance optimization technique.
- **B.** Passing props through multiple intermediate components that don't need the data, just to reach a deeply nested component.
- **C.** A way to validate props.
- **D.** A method for creating components.

**Answer:** B. Passing props through multiple intermediate components that don't need the data, just to reach a deeply nested component.

**Explanation:** Prop drilling makes code harder to maintain. Solutions: Context API for shared data, state management libraries (Redux), better component structure, or Custom Hooks with appropriate state solutions.

---

## 16. What is lifting state up in React?

- **A.** Moving state from the backend to the frontend.
- **B.** Moving state from a child component to a common parent so that sibling components can share and access the same data.
- **C.** Removing state from all components.
- **D.** Moving state to `localStorage`.

**Answer:** B. Moving state from a child component to a common parent so that sibling components can share and access the same data.

**Explanation:** When two sibling components need the same state, lift it to their closest common parent. The parent owns the state and passes it down as props, keeping data synchronized between siblings.

---

## 17. When should state be local versus shared?

- **A.** All state should always be global.
- **B.** State should be local when only one component uses it; shared (lifted or in context/store) when multiple components need the same data.
- **C.** State should never be local.
- **D.** All state should be in the URL.

**Answer:** B. State should be local when only one component uses it; shared (lifted or in context/store) when multiple components need the same data.

**Explanation:** Keep state as local as possible. Only lift it up or use global state when multiple components genuinely need the same data. This prevents unnecessary re-renders and keeps components independent.

---

## 18. Can a child component modify its parent's state directly?

- **A.** Yes, children can directly change parent state.
- **B.** No — the child should call a callback function provided by the parent to request a state change.
- **C.** Yes, using `this.parent.setState()`.
- **D.** Only class components can modify parent state.

**Answer:** B. No — the child should call a callback function provided by the parent to request a state change.

**Explanation:** React follows one-way data flow. A child communicates upward by calling callback functions received as props. The parent remains in control of its own state.

---

## 19. Why should React state not be mutated directly?

- **A.** Direct mutation is fine and works correctly.
- **B.** React compares old and new state by reference; direct mutation doesn't create a new reference, so React won't detect the change and won't re-render.
- **C.** Direct mutation causes the app to crash immediately.
- **D.** Direct mutation is only a problem in class components.

**Answer:** B. React compares old and new state by reference; direct mutation doesn't create a new reference, so React won't detect the change and won't re-render.

**Explanation:** Always create new objects/arrays when updating state: `setItems([...items, newItem])` instead of `items.push(newItem)`. Mutation can cause bugs where the UI doesn't update.

---

## 20. What happens when you call a state setter like `setCount`?

- **A.** The state updates immediately and the component re-renders synchronously within the same line.
- **B.** React schedules a re-render; the new state value is available in the next render, not immediately after the call.
- **C.** Nothing happens until the component unmounts.
- **D.** The entire application restarts.

**Answer:** B. React schedules a re-render; the new state value is available in the next render, not immediately after the call.

**Explanation:** State updates are asynchronous. After `setCount(5)`, reading `count` in the same function still shows the old value. The new value is available when the component re-renders.

---

## 21. Why does state sometimes appear not to update immediately?

- **A.** There's a bug in React.
- **B.** State updates are scheduled, not synchronous — the new value is available in the next render, not on the next line of code.
- **C.** The state was set incorrectly.
- **D.** State only updates when the browser tab is focused.

**Answer:** B. State updates are scheduled, not synchronous — the new value is available in the next render, not on the next line of code.

**Explanation:** React batches state updates for performance. If you need to use the new value immediately, use the functional update form: `setCount(prev => prev + 1)`.

---

## 22. When should you use `useState` versus `useReducer`?

- **A.** Always use `useState` for everything.
- **B.** `useState` for simple, independent state; `useReducer` for complex state with multiple related values or state transitions that depend on previous state.
- **C.** Always use `useReducer` for everything.
- **D.** `useReducer` is deprecated.

**Answer:** B. `useState` for simple, independent state; `useReducer` for complex state with multiple related values or state transitions that depend on previous state.

**Explanation:** `useState` is great for simple values (booleans, strings, numbers). `useReducer` shines when state logic is complex, involves multiple sub-values, or when the next state depends on the previous state with different action types.

---

## 23. What are React Hooks?

- **A.** Lifecycle methods for class components.
- **B.** Functions that let functional components use state, effects, context, refs, and other React features without writing classes.
- **C.** CSS selectors for React elements.
- **D.** Database connectors for React.

**Answer:** B. Functions that let functional components use state, effects, context, refs, and other React features without writing classes.

**Explanation:** Hooks (like `useState`, `useEffect`, `useContext`, `useRef`) were introduced in React 16.8 to replace class components for most use cases, making code simpler and more reusable.

---

## 24. What are the Rules of Hooks?

- **A.** Hooks can be called anywhere in the code.
- **B.** Hooks must be called at the top level (not inside loops, conditions, or nested functions) and only from React functions or Custom Hooks.
- **C.** Hooks must always be called inside `useEffect`.
- **D.** There are no rules for Hooks.

**Answer:** B. Hooks must be called at the top level (not inside loops, conditions, or nested functions) and only from React functions or Custom Hooks.

**Explanation:** React relies on the order of Hook calls to maintain state correctly. Calling Hooks conditionally or in loops would break this order, causing bugs with state associations.

---

## 25. What is `useState`?

- **A.** A function that creates global variables.
- **B.** A Hook that returns a state value and a setter function, allowing functional components to manage local state.
- **C.** A Hook that replaces `useEffect`.
- **D.** A method for fetching API data.

**Answer:** B. A Hook that returns a state value and a setter function, allowing functional components to manage local state.

**Explanation:** `const [count, setCount] = useState(0)` — `count` is the state value, `setCount` updates it. Calling the setter triggers a re-render with the new value.

---

## 26. What is the functional state update pattern?

- **A.** Always pass a direct value to the setter.
- **B.** Passing a function to the state setter that receives the previous state: `setCount(prev => prev + 1)`, ensuring you work with the latest state.
- **C.** Using `useReducer` instead of `useState`.
- **D.** Mutating state directly.

**Answer:** B. Passing a function to the state setter that receives the previous state: `setCount(prev => prev + 1)`, ensuring you work with the latest state.

**Explanation:** When the new state depends on the previous state, the functional form avoids stale state issues caused by closures. It's especially important when multiple updates happen in quick succession.

---

## 27. What is `useEffect` used for?

- **A.** For styling components.
- **B.** For performing side effects like API calls, subscriptions, DOM manipulation, and timers in functional components.
- **C.** For creating new components.
- **D.** For defining routes.

**Answer:** B. For performing side effects like API calls, subscriptions, DOM manipulation, and timers in functional components.

**Explanation:** `useEffect` runs after React has rendered the component. It replaces `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` lifecycle methods from class components.

---

## 28. How does the dependency array of `useEffect` work?

- **A.** It has no effect on when `useEffect` runs.
- **B.** `useEffect` re-runs only when values in the dependency array change; empty array means run once; no array means run after every render.
- **C.** The dependency array determines the return value of `useEffect`.
- **D.** It lists components that should be re-rendered.

**Answer:** B. `useEffect` re-runs only when values in the dependency array change; empty array means run once; no array means run after every render.

**Explanation:** `useEffect(() => {}, [])` = runs once on mount. `useEffect(() => {}, [value])` = runs when `value` changes. `useEffect(() => {})` (no array) = runs after every render.

---

## 29. What is the difference between `useEffect(() => {})`, `useEffect(() => {}, [])`, and `useEffect(() => {}, [value])`?

- **A.** They all behave the same way.
- **B.** No array = runs after every render; empty `[]` = runs only once on mount; `[value]` = runs when `value` changes.
- **C.** No array = runs once; `[]` = runs on every render.
- **D.** The dependency array only affects error handling.

**Answer:** B. No array = runs after every render; empty `[]` = runs only once on mount; `[value]` = runs when `value` changes.

**Explanation:** The dependency array controls when the effect re-runs. Missing it causes the effect to run on every render. An empty array makes it a "mount-only" effect. Specific values make it reactive to those changes.

---

## 30. Why does `useEffect` sometimes run twice in development?

- **A.** There's a bug in React.
- **B.** React Strict Mode intentionally double-invokes effects in development to help find missing cleanup functions and side-effect bugs.
- **C.** The dependency array is wrong.
- **D.** The browser runs JavaScript twice.

**Answer:** B. React Strict Mode intentionally double-invokes effects in development to help find missing cleanup functions and side-effect bugs.

**Explanation:** This only happens in development mode, not in production. It helps developers catch issues like missing cleanup functions, race conditions, and effects that don't properly handle re-execution.

---

## 31. What is the cleanup function in `useEffect`?

- **A.** A function that deletes the component.
- **B.** A function returned from `useEffect` that runs before the effect re-runs or when the component unmounts — used to clean up subscriptions, timers, etc.
- **C.** A function that clears the browser cache.
- **D.** A function that resets all state.

**Answer:** B. A function returned from `useEffect` that runs before the effect re-runs or when the component unmounts — used to clean up subscriptions, timers, etc.

**Explanation:** Example: `useEffect(() => { const timer = setInterval(...); return () => clearInterval(timer); }, [])`. The cleanup prevents memory leaks from lingering timers, subscriptions, or event listeners.

---

## 32. How do you prevent infinite loops in `useEffect`?

- **A.** Infinite loops cannot happen in `useEffect`.
- **B.** Set the correct dependency array; avoid updating a state variable that's also in the dependency array without a proper condition or guard.
- **C.** Always use an empty dependency array.
- **D.** Remove `useEffect` entirely.

**Answer:** B. Set the correct dependency array; avoid updating a state variable that's also in the dependency array without a proper condition or guard.

**Explanation:** If `useEffect` updates state that's in its dependency array, it triggers another render, which triggers the effect again — creating an infinite loop. Use conditions or separate the concerns.

---

## 33. What is a stale closure in React?

- **A.** A component that hasn't been updated.
- **B.** When a callback or effect captures an old value of state/props from a previous render because the closure hasn't been updated.
- **C.** A CSS styling issue.
- **D.** A deprecated React API.

**Answer:** B. When a callback or effect captures an old value of state/props from a previous render because the closure hasn't been updated.

**Explanation:** JavaScript closures capture values at the time they're created. If a `useEffect` or event handler references state but isn't re-created with the latest value, it works with stale (old) data.

---

## 34. What is the difference between `useEffect` and `useLayoutEffect`?

- **A.** They are identical.
- **B.** `useEffect` runs asynchronously after paint; `useLayoutEffect` runs synchronously after DOM mutations but before the browser paints.
- **C.** `useLayoutEffect` is for API calls only.
- **D.** `useEffect` runs before rendering.

**Answer:** B. `useEffect` runs asynchronously after paint; `useLayoutEffect` runs synchronously after DOM mutations but before the browser paints.

**Explanation:** Use `useLayoutEffect` when you need to measure DOM elements or prevent visual flicker (like adjusting a tooltip position). Use `useEffect` for everything else — it's the default and doesn't block painting.

---

## 35. What is `useRef`?

- **A.** A Hook for making API calls.
- **B.** A Hook that returns a mutable ref object that persists across renders — used for DOM access, storing values without causing re-renders.
- **C.** A Hook that replaces `useState`.
- **D.** A Hook for routing.

**Answer:** B. A Hook that returns a mutable ref object that persists across renders — used for DOM access, storing values without causing re-renders.

**Explanation:** `useRef` returns `{ current: value }`. Changing `.current` does NOT trigger a re-render. Common uses: accessing DOM elements (`ref={inputRef}`), storing previous values, and tracking timers.

---

## 36. What is the difference between `useRef` and `useState`?

- **A.** They are identical.
- **B.** `useState` triggers a re-render when updated; `useRef` does NOT trigger a re-render — it stores mutable values silently.
- **C.** `useRef` triggers re-renders; `useState` does not.
- **D.** `useRef` can only hold strings.

**Answer:** B. `useState` triggers a re-render when updated; `useRef` does NOT trigger a re-render — it stores mutable values silently.

**Explanation:** Use `useState` when the UI should update when the value changes. Use `useRef` for values that need to persist but shouldn't cause re-renders (DOM references, timer IDs, previous values).

---

## 37. What is `useContext`?

- **A.** A Hook for creating animations.
- **B.** A Hook that lets you read and subscribe to context values from the nearest matching `Context.Provider` without prop drilling.
- **C.** A Hook for database queries.
- **D.** A Hook that replaces Redux completely.

**Answer:** B. A Hook that lets you read and subscribe to context values from the nearest matching `Context.Provider` without prop drilling.

**Explanation:** `useContext(MyContext)` accesses the value provided by the nearest `<MyContext.Provider value={...}>`. It eliminates prop drilling for shared data like themes, auth state, or locale.

---

## 38. What is `useMemo`?

- **A.** A Hook for making API calls.
- **B.** A Hook that memoizes the result of an expensive computation, recalculating only when dependencies change.
- **C.** A Hook for creating DOM elements.
- **D.** A Hook that replaces `useEffect`.

**Answer:** B. A Hook that memoizes the result of an expensive computation, recalculating only when dependencies change.

**Explanation:** `useMemo(() => expensiveCalculation(data), [data])` — the calculation only runs when `data` changes, not on every render. Use it only when the computation is genuinely expensive.

---

## 39. What is `useCallback`?

- **A.** A Hook for handling errors.
- **B.** A Hook that memoizes a function reference, returning the same function instance unless dependencies change.
- **C.** A Hook that creates new callback functions on every render.
- **D.** A Hook for CSS animations.

**Answer:** B. A Hook that memoizes a function reference, returning the same function instance unless dependencies change.

**Explanation:** `useCallback(fn, [deps])` prevents creating a new function reference on every render. Useful when passing callbacks to memoized child components (`React.memo`) to avoid unnecessary re-renders.

---

## 40. What is the difference between `useMemo`, `useCallback`, and `React.memo`?

- **A.** They are all the same thing.
- **B.** `useMemo` memoizes computed values; `useCallback` memoizes function references; `React.memo` memoizes entire component renders based on props.
- **C.** `React.memo` memoizes values; `useMemo` memoizes components.
- **D.** None of them improve performance.

**Answer:** B. `useMemo` memoizes computed values; `useCallback` memoizes function references; `React.memo` memoizes entire component renders based on props.

**Explanation:** `useMemo` = cache a calculated result. `useCallback` = cache a function reference. `React.memo` = skip re-rendering a component if its props haven't changed. They work together for optimization.

---

## 41. What are Custom Hooks?

- **A.** Built-in React components.
- **B.** Reusable functions starting with `use` that can use other React Hooks to extract and share stateful logic between components.
- **C.** Third-party npm packages.
- **D.** CSS utility classes.

**Answer:** B. Reusable functions starting with `use` that can use other React Hooks to extract and share stateful logic between components.

**Explanation:** Custom Hooks like `useFetch`, `useForm`, `useDebounce` extract reusable logic. They share logic, not state — each component calling the same Custom Hook gets its own state instance.

---

## 42. When should you create a Custom Hook?

- **A.** For every function in your application.
- **B.** When the same stateful or effect-based logic is needed in multiple components, or when complex logic should be extracted for clarity.
- **C.** Only for authentication.
- **D.** Never — Custom Hooks are not recommended.

**Answer:** B. When the same stateful or effect-based logic is needed in multiple components, or when complex logic should be extracted for clarity.

**Explanation:** Common Custom Hook use cases: data fetching, form handling, debouncing, authentication, window size tracking, online/offline status. They keep components clean and logic reusable.

---

## 43. Do Custom Hooks share state between components?

- **A.** Yes, all components using the same Custom Hook share the same state.
- **B.** No — each component calling the same Custom Hook gets its own independent state instance.
- **C.** Only if you use `useContext` inside the Custom Hook.
- **D.** Only class components share state from Custom Hooks.

**Answer:** B. No — each component calling the same Custom Hook gets its own independent state instance.

**Explanation:** `const a = useCounter(); const b = useCounter();` — `a.count` and `b.count` are completely separate. For shared state across components, use Context, Redux, or lifted state.

---

## 44. How would you create a reusable data-fetching Custom Hook?

- **A.** Use `document.fetch()` in a regular function.
- **B.** Create a `useFetch` Hook that manages loading, data, and error states using `useState` and `useEffect`, accepting a URL parameter.
- **C.** Use `localStorage` for all API data.
- **D.** Custom Hooks cannot make API calls.

**Answer:** B. Create a `useFetch` Hook that manages loading, data, and error states using `useState` and `useEffect`, accepting a URL parameter.

**Explanation:** A `useFetch(url)` Hook encapsulates the fetch logic, manages `loading`, `data`, `error` states, and handles cleanup. Components simply call `const { data, loading } = useFetch('/api/users')`.

---

## 45. What is `useReducer`?

- **A.** A Hook for reducing array size.
- **B.** A Hook that manages complex state using a reducer function with dispatched actions, similar to the Redux pattern.
- **C.** A Hook that replaces `useRef`.
- **D.** A Hook for CSS animations.

**Answer:** B. A Hook that manages complex state using a reducer function with dispatched actions, similar to the Redux pattern.

**Explanation:** `const [state, dispatch] = useReducer(reducer, initialState)` — dispatch actions like `dispatch({ type: 'INCREMENT' })`. Better than `useState` for complex state with multiple related transitions.

---

## 46. What is `useImperativeHandle`?

- **A.** A Hook for handling keyboard events.
- **B.** A Hook that customizes the instance value exposed to parent components when using `ref`, used with `forwardRef`.
- **C.** A Hook for creating forms.
- **D.** A Hook that replaces `useContext`.

**Answer:** B. A Hook that customizes the instance value exposed to parent components when using `ref`, used with `forwardRef`.

**Explanation:** Instead of exposing the full DOM node, `useImperativeHandle` lets you expose only specific methods (like `focus()` or `reset()`) to the parent, providing a controlled API.

---

## 47. What is `useTransition`?

- **A.** A Hook for CSS transitions.
- **B.** A Hook that marks certain state updates as non-urgent so React can keep the UI responsive while processing expensive updates in the background.
- **C.** A Hook for navigating between pages.
- **D.** A Hook for database transactions.

**Answer:** B. A Hook that marks certain state updates as non-urgent so React can keep the UI responsive while processing expensive updates in the background.

**Explanation:** `const [isPending, startTransition] = useTransition()` — wrap expensive state updates in `startTransition(() => setState(...))`. The input stays responsive while the expensive update processes.

---

## 48. What is `useDeferredValue`?

- **A.** A Hook for delaying API calls.
- **B.** A Hook that returns a deferred version of a value, letting React delay updating the expensive part of the UI while keeping the input responsive.
- **C.** A Hook for setting timeouts.
- **D.** A Hook that replaces `useState`.

**Answer:** B. A Hook that returns a deferred version of a value, letting React delay updating the expensive part of the UI while keeping the input responsive.

**Explanation:** `const deferredQuery = useDeferredValue(query)` — the input updates instantly with `query`, but the expensive list filtering uses `deferredQuery` which may lag behind to keep the UI smooth.

---

## 49. What causes a React component to re-render?

- **A.** Only when `forceUpdate()` is called.
- **B.** State change via setter, parent re-rendering, or context value change.
- **C.** Only when the URL changes.
- **D.** Components never re-render after the initial render.

**Answer:** B. State change via setter, parent re-rendering, or context value change.

**Explanation:** Three main triggers: (1) component's own state changes, (2) parent component re-renders (passes new props), (3) consumed context value changes. `React.memo` can skip parent-triggered re-renders if props haven't changed.

---

## 50. Does a parent re-render always cause its child to re-render?

- **A.** No, children never re-render when parent re-renders.
- **B.** Yes by default, but `React.memo` can skip re-rendering if the child's props haven't changed.
- **C.** Only class component children re-render.
- **D.** Parent re-renders are impossible in React.

**Answer:** B. Yes by default, but `React.memo` can skip re-rendering if the child's props haven't changed.

**Explanation:** By default, when a parent re-renders, all its children re-render too. Wrap children in `React.memo` to skip re-rendering when props are unchanged. Ensure callbacks use `useCallback` to maintain stable references.

---

## 51. How does React decide what needs to be updated in the DOM?

- **A.** It updates the entire DOM on every render.
- **B.** React compares the new Virtual DOM tree with the previous one (diffing/reconciliation) and applies only the minimum necessary changes.
- **C.** It replaces the entire page HTML.
- **D.** The browser decides what to update.

**Answer:** B. React compares the new Virtual DOM tree with the previous one (diffing/reconciliation) and applies only the minimum necessary changes.

**Explanation:** React's reconciliation algorithm efficiently diffs the old and new Virtual DOM trees. It uses element types and keys to determine what changed, what was added, and what was removed.

---

## 52. What is the React rendering process from state update to DOM update?

- **A.** State change → Browser refresh → DOM update
- **B.** State update → Trigger re-render → Execute component (render phase) → Diff with previous → Commit necessary DOM changes
- **C.** DOM update → State change → Re-render
- **D.** State update → Full page reload

**Answer:** B. State update → Trigger re-render → Execute component (render phase) → Diff with previous → Commit necessary DOM changes

**Explanation:** Render phase: React calls the component to calculate new UI (pure, no side effects). Commit phase: React applies the calculated DOM changes. Effects run after commit.

---

## 53. How does reconciliation work with lists and keys?

- **A.** React always re-creates the entire list.
- **B.** React uses keys to match items between old and new lists, identifying additions, removals, and reorders efficiently.
- **C.** Keys have no effect on reconciliation.
- **D.** Lists cannot be reconciled in React.

**Answer:** B. React uses keys to match items between old and new lists, identifying additions, removals, and reorders efficiently.

**Explanation:** With stable keys, React can match old items to new items even if the order changed. Without keys (or with index keys), React may incorrectly reuse components, causing state bugs.

---

## 54. Why is using an array index as a key sometimes problematic?

- **A.** Indexes are too large for React to handle.
- **B.** When items are reordered, inserted, or deleted, index-based keys can cause React to associate wrong state with wrong items.
- **C.** Array indexes are always fine to use as keys.
- **D.** Indexes cause CSS styling issues.

**Answer:** B. When items are reordered, inserted, or deleted, index-based keys can cause React to associate wrong state with wrong items.

**Explanation:** If item at index 0 is deleted, the item previously at index 1 now has key 0. React thinks it's the same item, incorrectly preserving the old item's state. Use stable IDs instead.

---

## 55. What is batching in React?

- **A.** Processing API requests in groups.
- **B.** React groups multiple state updates into a single re-render for better performance.
- **C.** Splitting components into batches.
- **D.** Loading images in groups.

**Answer:** B. React groups multiple state updates into a single re-render for better performance.

**Explanation:** If you call `setA(1); setB(2); setC(3);` in the same event handler, React batches them into one re-render instead of three. React 18+ batches automatically in all contexts including async code.

---

## 56. What is Strict Mode in React?

- **A.** A mode that makes React faster.
- **B.** A development-only wrapper that double-invokes components and effects to help find bugs like missing cleanup functions and side-effect issues.
- **C.** A production optimization mode.
- **D.** A mode that disables error messages.

**Answer:** B. A development-only wrapper that double-invokes components and effects to help find bugs like missing cleanup functions and side-effect issues.

**Explanation:** `<React.StrictMode>` only affects development. It helps catch impure renders, missing effect cleanup, and deprecated APIs. It has no effect in production builds.

---

## 57. What is concurrent rendering in React?

- **A.** Running React on multiple servers.
- **B.** React's ability to work on multiple rendering tasks simultaneously, interrupting and prioritizing urgent updates (like user input) over less urgent ones.
- **C.** Rendering multiple pages at once.
- **D.** A deprecated React feature.

**Answer:** B. React's ability to work on multiple rendering tasks simultaneously, interrupting and prioritizing urgent updates (like user input) over less urgent ones.

**Explanation:** Concurrent rendering lets React pause expensive work to handle urgent updates first. Features like `useTransition` and `useDeferredValue` leverage this to keep the UI responsive.

---

## 58. How do you identify unnecessary re-renders?

- **A.** You cannot identify re-renders.
- **B.** Use React DevTools Profiler to see which components re-render and why; enable "Highlight updates when components render."
- **C.** Count `console.log` outputs.
- **D.** Check the network tab in browser DevTools.

**Answer:** B. Use React DevTools Profiler to see which components re-render and why; enable "Highlight updates when components render."

**Explanation:** React DevTools Profiler shows render count, duration, and reasons. "Highlight updates" visually shows which components are re-rendering. Look for components that re-render without their props/state actually changing.

---

## 59. How do you optimize a slow React component?

- **A.** Add more state to the component.
- **B.** Profile first to find the bottleneck, then use `React.memo`, `useMemo`, `useCallback`, split large components, or virtualize long lists.
- **C.** Remove all props from the component.
- **D.** Convert it to a class component.

**Answer:** B. Profile first to find the bottleneck, then use `React.memo`, `useMemo`, `useCallback`, split large components, or virtualize long lists.

**Explanation:** Don't optimize blindly. Profile first to find the actual problem. Common fixes: memoize expensive computations, prevent unnecessary re-renders, split into smaller components, or virtualize lists.

---

## 60. How do you use React DevTools Profiler?

- **A.** Install it from npm and import it into your code.
- **B.** Open the Profiler tab in React DevTools browser extension, record a session, and analyze which components rendered, how long they took, and why.
- **C.** Use `console.time()` exclusively.
- **D.** React DevTools only shows CSS issues.

**Answer:** B. Open the Profiler tab in React DevTools browser extension, record a session, and analyze which components rendered, how long they took, and why.

**Explanation:** The Profiler shows flame charts of render times, commit counts, and "Why did this render?" information. It helps pinpoint exactly which components are slow and whether re-renders are necessary.

---

## 61. When does `React.memo` actually improve performance?

- **A.** Always — wrap every component in `React.memo`.
- **B.** When a component re-renders frequently with the same props and its render is expensive enough that the comparison cost is worthwhile.
- **C.** Only for class components.
- **D.** `React.memo` never improves performance.

**Answer:** B. When a component re-renders frequently with the same props and its render is expensive enough that the comparison cost is worthwhile.

**Explanation:** `React.memo` adds a shallow props comparison before each render. If the component is cheap to render, the comparison overhead may not be worth it. Use it for expensive components that receive stable props.

---

## 62. When can `useMemo` make performance worse?

- **A.** `useMemo` always improves performance.
- **B.** When the computation is trivial — the overhead of memoization (storing the value, comparing dependencies) can exceed the cost of just recalculating.
- **C.** When used with `useState`.
- **D.** `useMemo` never makes performance worse.

**Answer:** B. When the computation is trivial — the overhead of memoization (storing the value, comparing dependencies) can exceed the cost of just recalculating.

**Explanation:** `useMemo` has overhead: storing the cached value and comparing dependencies. For simple operations like basic arithmetic or string concatenation, this overhead can be worse than just recomputing.

---

## 63. When can `useCallback` make performance worse?

- **A.** `useCallback` always improves performance.
- **B.** When the callback is passed to non-memoized children — the dependency comparison overhead is added without any benefit since the child re-renders anyway.
- **C.** When used inside `useEffect`.
- **D.** `useCallback` never makes performance worse.

**Answer:** B. When the callback is passed to non-memoized children — the dependency comparison overhead is added without any benefit since the child re-renders anyway.

**Explanation:** `useCallback` only helps when the child is wrapped in `React.memo`. Without `React.memo`, the child re-renders regardless, making `useCallback` just unnecessary overhead.

---

## 64. How would you optimize a list containing thousands of items?

- **A.** Render all items and use CSS to hide them.
- **B.** Use list virtualization (windowing) to render only visible items plus a small buffer, drastically reducing DOM nodes.
- **C.** Limit the list to 10 items.
- **D.** Put all items in a single string.

**Answer:** B. Use list virtualization (windowing) to render only visible items plus a small buffer, drastically reducing DOM nodes.

**Explanation:** Virtualization libraries render only 20-30 visible items instead of thousands. This dramatically reduces DOM nodes, memory usage, and paint time, resulting in smooth scrolling.

---

## 65. What is list virtualization?

- **A.** Converting list items to virtual reality.
- **B.** A technique that renders only the items visible in the viewport (plus a buffer), keeping the DOM small regardless of total list size.
- **C.** Storing list data in virtual memory.
- **D.** A CSS layout technique.

**Answer:** B. A technique that renders only the items visible in the viewport (plus a buffer), keeping the DOM small regardless of total list size.

**Explanation:** With 10,000 items but only 20 visible, virtualization creates ~25 DOM nodes instead of 10,000. As the user scrolls, items are recycled. Libraries like `react-window` or `react-virtualized` implement this.

---

## 66. How would you improve the initial loading performance of a React application?

- **A.** Load all JavaScript upfront.
- **B.** Use code splitting with `React.lazy()` and `Suspense`, optimize bundle size, lazy load images, and use a CDN for static assets.
- **C.** Remove all components.
- **D.** Disable JavaScript.

**Answer:** B. Use code splitting with `React.lazy()` and `Suspense`, optimize bundle size, lazy load images, and use a CDN for static assets.

**Explanation:** Code splitting loads only the code needed for the current page. Bundle analysis helps remove unnecessary dependencies. Lazy loading images and using CDNs reduce initial load time.

---

## 67. When should you use local state, Context API, or Redux?

- **A.** Always use Redux for everything.
- **B.** Local state for component-specific data; Context for shared data across many components (theme, auth); Redux for complex global state with many actions and selectors.
- **C.** Always use Context API for everything.
- **D.** State management is not needed in React.

**Answer:** B. Local state for component-specific data; Context for shared data across many components (theme, auth); Redux for complex global state with many actions and selectors.

**Explanation:** Keep state as local as possible. Context is great for low-frequency updates (theme, auth, locale). Redux/Redux Toolkit is better for complex, frequently-changing global state with sophisticated selectors.

---

## 68. What is Context API?

- **A.** A REST API provided by React.
- **B.** A React mechanism to pass data through the component tree without prop drilling, using `createContext`, `Provider`, and `useContext`.
- **C.** A database connector.
- **D.** A testing framework.

**Answer:** B. A React mechanism to pass data through the component tree without prop drilling, using `createContext`, `Provider`, and `useContext`.

**Explanation:** Create context with `createContext()`, provide data with `<Context.Provider value={...}>`, and consume with `useContext(Context)`. All components under the Provider can access the data directly.

---

## 69. Why isn't Context always a replacement for Redux?

- **A.** Context is more powerful than Redux.
- **B.** Context re-renders all consumers when any part of the value changes; it lacks built-in middleware, devtools, and optimized selectors that Redux provides.
- **C.** Context cannot hold objects.
- **D.** Redux is simpler than Context.

**Answer:** B. Context re-renders all consumers when any part of the value changes; it lacks built-in middleware, devtools, and optimized selectors that Redux provides.

**Explanation:** Context is great for infrequently changing data. For frequently updating state consumed by many components, Context can cause excessive re-renders. Redux provides fine-grained subscriptions and middleware.

---

## 70. What is Redux?

- **A.** A CSS framework.
- **B.** A predictable state management library with a single store, reducers, actions, and middleware — commonly used with React for complex global state.
- **C.** A database.
- **D.** A React component library.

**Answer:** B. A predictable state management library with a single store, reducers, actions, and middleware — commonly used with React for complex global state.

**Explanation:** Redux follows: Action → Dispatch → Middleware → Reducer → Store → UI. It provides predictable state changes, time-travel debugging, and middleware for async operations.

---

## 71. What is the Redux data flow?

- **A.** UI → Store → Action → Reducer
- **B.** UI dispatches an Action → Middleware processes it → Reducer calculates new state → Store updates → UI re-renders.
- **C.** Store → UI → Action → Reducer
- **D.** Reducer → Action → Store → Middleware

**Answer:** B. UI dispatches an Action → Middleware processes it → Reducer calculates new state → Store updates → UI re-renders.

**Explanation:** User clicks a button → action is dispatched → middleware (like thunk) handles async work → reducer returns new state → store updates → subscribed components re-render with new data.

---

## 72. What are Redux Toolkit slices?

- **A.** Pieces of the UI.
- **B.** `createSlice` combines reducers, actions, and initial state for a feature in one place, simplifying Redux boilerplate.
- **C.** Database tables.
- **D.** CSS components.

**Answer:** B. `createSlice` combines reducers, actions, and initial state for a feature in one place, simplifying Redux boilerplate.

**Explanation:** Redux Toolkit's `createSlice({ name, initialState, reducers })` auto-generates action creators and action types. It also uses Immer internally, allowing "mutating" syntax in reducers.

---

## 73. What is Redux Thunk?

- **A.** A CSS animation library.
- **B.** Middleware that allows Redux action creators to return functions (thunks) instead of plain objects, enabling async operations like API calls.
- **C.** A React component.
- **D.** A database ORM.

**Answer:** B. Middleware that allows Redux action creators to return functions (thunks) instead of plain objects, enabling async operations like API calls.

**Explanation:** Redux Toolkit's `createAsyncThunk` simplifies async operations. It auto-dispatches pending/fulfilled/rejected actions that you can handle in `extraReducers` to manage loading, data, and error states.

---

## 74. How does React Router work?

- **A.** It refreshes the entire page for each route.
- **B.** It enables client-side navigation by matching URL paths to components and rendering them without full page reloads.
- **C.** It's a server-side routing library.
- **D.** It replaces the browser's URL bar.

**Answer:** B. It enables client-side navigation by matching URL paths to components and rendering them without full page reloads.

**Explanation:** React Router uses `<BrowserRouter>`, `<Routes>`, and `<Route>` to map URLs to components. Protected routes can check authentication and redirect unauthorized users.

---

## 75. How do you handle API calls in React with loading, success, error, and empty states?

- **A.** Just show the data without handling states.
- **B.** Manage `loading`, `data`, and `error` state; show a loader while fetching, error message on failure, empty state when no results, and data on success.
- **C.** Use `alert()` for all API responses.
- **D.** API calls should only be in the backend.

**Answer:** B. Manage `loading`, `data`, and `error` state; show a loader while fetching, error message on failure, empty state when no results, and data on success.

**Explanation:** Good UX requires handling all states: loading spinner, error message with retry option, empty state message, and the actual data display. Custom Hooks like `useFetch` can encapsulate this pattern.

---

## 76. What are Error Boundaries?

- **A.** CSS borders around error messages.
- **B.** Class components that catch JavaScript errors in their child component tree during rendering, preventing the entire app from crashing.
- **C.** Try/catch blocks in JSX.
- **D.** Error Boundaries catch all errors including event handlers.

**Answer:** B. Class components that catch JavaScript errors in their child component tree during rendering, preventing the entire app from crashing.

**Explanation:** Error Boundaries use `componentDidCatch` and `getDerivedStateFromError`. They catch render errors but NOT errors in event handlers, async code, or the Error Boundary itself. They show a fallback UI.

---

## 77. How do you implement lazy loading with `React.lazy()` and `Suspense`?

- **A.** Use `setTimeout` to delay loading.
- **B.** `React.lazy(() => import('./Component'))` dynamically imports a component; `<Suspense fallback={<Loading />}>` shows a fallback while loading.
- **C.** Use `display: none` in CSS.
- **D.** Lazy loading is not supported in React.

**Answer:** B. `React.lazy(() => import('./Component'))` dynamically imports a component; `<Suspense fallback={<Loading />}>` shows a fallback while loading.

**Explanation:** This splits the bundle so the component's code is only downloaded when needed. Common for route-level code splitting: each page loads its own JavaScript bundle on demand.

---

## 78. How do you test React components using React Testing Library?

- **A.** Test only CSS styles.
- **B.** Render components, query elements by text/role/label (not implementation details), simulate user interactions, and assert expected outcomes.
- **C.** Test by manually clicking in the browser.
- **D.** Testing is not possible for React components.

**Answer:** B. Render components, query elements by text/role/label (not implementation details), simulate user interactions, and assert expected outcomes.

**Explanation:** React Testing Library encourages testing from the user's perspective: `render(<Component />)`, `screen.getByText('Submit')`, `fireEvent.click(button)`, `expect(result).toBeInTheDocument()`.

---

## 79. How do you use TypeScript with React?

- **A.** TypeScript cannot be used with React.
- **B.** Define types/interfaces for props, state, events, and API responses; use generics for hooks; type component function signatures.
- **C.** Use JavaScript `typeof` checks instead.
- **D.** TypeScript only works with class components.

**Answer:** B. Define types/interfaces for props, state, events, and API responses; use generics for hooks; type component function signatures.

**Explanation:** Example: `interface Props { name: string; age: number }`, `const [count, setCount] = useState<number>(0)`, `(e: React.ChangeEvent<HTMLInputElement>)`. TypeScript catches bugs at compile time.

---

## 80. What are React 19 features like Actions, `use`, and Server Components?

- **A.** React 19 has no new features.
- **B.** Actions simplify form handling with async transitions; `use` reads Promises/Context in render; Server Components run on the server reducing client-side JavaScript.
- **C.** React 19 removes all Hooks.
- **D.** Server Components replace all client components.

**Answer:** B. Actions simplify form handling with async transitions; `use` reads Promises/Context in render; Server Components run on the server reducing client-side JavaScript.

**Explanation:** React 19 introduces: Actions for async form handling, `use()` Hook to read resources in render, `ref` as a prop (no `forwardRef` needed), and Server Components that render on the server for better performance.

---

## 81. Your React app has 20,000 items to display. How would you make it performant?

- **A.** Render all 20,000 items into the DOM.
- **B.** Use list virtualization to render only visible items (~20-30) plus a small buffer, combined with pagination or incremental loading for data.
- **C.** Use `display: none` for off-screen items.
- **D.** Split items across 200 separate pages of 100 items each.

**Answer:** B. Use list virtualization to render only visible items (~20-30) plus a small buffer, combined with pagination or incremental loading for data.

**Explanation:** Virtualization keeps the DOM small (20-30 nodes instead of 20,000). Combine with API pagination so you don't download all data at once. Memoize expensive row components if needed.

---

## 82. A search input filtering 10,000 products becomes laggy while typing. What would you do?

- **A.** Remove the search feature.
- **B.** Use `useDeferredValue` to defer the expensive list update while keeping the input responsive; combine with virtualization and debouncing if calling an API.
- **C.** Add more products to fix the lag.
- **D.** Use `setTimeout` for every keystroke.

**Answer:** B. Use `useDeferredValue` to defer the expensive list update while keeping the input responsive; combine with virtualization and debouncing if calling an API.

**Explanation:** First identify the bottleneck (filtering, rendering, or API). `useDeferredValue` keeps the input snappy. Debouncing reduces API calls. Virtualization handles rendering thousands of results.

---

## 83. An API is called on every keystroke in a search box. How would you optimize it?

- **A.** Make the API faster.
- **B.** Use debouncing to wait until the user stops typing (e.g., 300ms), and cancel previous pending requests to avoid race conditions.
- **C.** Remove the search box.
- **D.** Call the API only on page load.

**Answer:** B. Use debouncing to wait until the user stops typing (e.g., 300ms), and cancel previous pending requests to avoid race conditions.

**Explanation:** Instead of calling the API for `r → re → rea → react`, debouncing waits 300ms after the last keystroke and calls only once for `react`. Use `AbortController` to cancel obsolete requests.

---

## 84. An old API response replaces the latest search result. What is the problem?

- **A.** The API is broken.
- **B.** A race condition — an older, slower request finishes after a newer one, overwriting the current results. Fix with request cancellation using AbortController.
- **C.** React is rendering in the wrong order.
- **D.** The search box is broken.

**Answer:** B. A race condition — an older, slower request finishes after a newer one, overwriting the current results. Fix with request cancellation using AbortController.

**Explanation:** Cancel previous requests when a new one starts: use `AbortController` in `useEffect` cleanup. Or track request IDs and ignore responses from stale requests.

---

## 85. A component re-renders many times and the page becomes slow. How would you debug it?

- **A.** Delete the component.
- **B.** Use React DevTools Profiler to see what triggers re-renders; check for changing references in props, unnecessary state updates, or missing memoization.
- **C.** Add more `console.log` statements.
- **D.** Refresh the browser repeatedly.

**Answer:** B. Use React DevTools Profiler to see what triggers re-renders; check for changing references in props, unnecessary state updates, or missing memoization.

**Explanation:** The Profiler's "Why did this render?" feature identifies causes. Common culprits: new object/array/function references created every render, state updates in effects, or context changes.

---

## 86. A `React.memo` wrapped component still re-renders every time. Why?

- **A.** `React.memo` doesn't work.
- **B.** The parent creates new object/array/function references on every render, so the shallow comparison detects "changed" props even if the values are the same.
- **C.** `React.memo` only works with class components.
- **D.** The component has too many props.

**Answer:** B. The parent creates new object/array/function references on every render, so the shallow comparison detects "changed" props even if the values are the same.

**Explanation:** `React.memo` does shallow comparison. `{a: 1} !== {a: 1}` because they're different references. Fix: use `useMemo` for objects/arrays and `useCallback` for functions passed as props.

---

## 87. A large form re-renders entirely when changing one input. How would you improve it?

- **A.** Make all inputs uncontrolled.
- **B.** Split the form into smaller sub-components with their own local state, or use `React.memo` on expensive sections to prevent unnecessary re-renders.
- **C.** Remove form validation.
- **D.** Use a single state variable for all inputs.

**Answer:** B. Split the form into smaller sub-components with their own local state, or use `React.memo` on expensive sections to prevent unnecessary re-renders.

**Explanation:** When state is in one parent, changing one input re-renders the entire form. Splitting into isolated sub-components with their own state prevents unrelated fields from re-rendering.

---

## 88. A dashboard with 20 widgets re-renders all widgets when one filter changes. How would you improve it?

- **A.** Remove widgets.
- **B.** Isolate each widget's state, use `React.memo` with stable props, and use fine-grained selectors so each widget subscribes only to its relevant data.
- **C.** Put all widgets on separate pages.
- **D.** Refresh the page on every filter change.

**Answer:** B. Isolate each widget's state, use `React.memo` with stable props, and use fine-grained selectors so each widget subscribes only to its relevant data.

**Explanation:** If all 20 widgets consume the entire context/store, any change re-renders all. Use Redux selectors to subscribe to specific data. `React.memo` prevents re-renders when a widget's data hasn't changed.

---

## 89. Five different components request the same API data. How would you avoid duplicate requests?

- **A.** Let all five make separate requests.
- **B.** Use a shared state solution (Redux/Context), a data-fetching library with caching (React Query/SWR), or lift the data fetching to a common parent.
- **C.** Copy the API response to `localStorage` after each call.
- **D.** Only allow one component to exist at a time.

**Answer:** B. Use a shared state solution (Redux/Context), a data-fetching library with caching (React Query/SWR), or lift the data fetching to a common parent.

**Explanation:** React Query/SWR automatically deduplicate concurrent requests for the same key. Redux stores data globally. Lifting data fetching to a parent and passing via props also works.

---

## 90. Should you choose pagination, infinite scroll, or virtualization for an API-loaded list?

- **A.** Always use infinite scroll.
- **B.** Pagination for structured navigation; infinite scroll for social-feed-style browsing; virtualization for rendering performance of large already-loaded datasets.
- **C.** Always use pagination.
- **D.** None of them are needed.

**Answer:** B. Pagination for structured navigation; infinite scroll for social-feed-style browsing; virtualization for rendering performance of large already-loaded datasets.

**Explanation:** Pagination: user controls which page to view (e-commerce products). Infinite scroll: continuous loading as user scrolls (social feeds). Virtualization: DOM performance for thousands of rendered items. They can be combined.

---

## 91. How would you implement infinite scroll without duplicate API calls?

- **A.** Call the API on every scroll event.
- **B.** Use a flag/ref to track loading state, prevent triggering while a request is in flight, and use `IntersectionObserver` for efficient scroll detection.
- **C.** Load all data at once.
- **D.** Disable scrolling.

**Answer:** B. Use a flag/ref to track loading state, prevent triggering while a request is in flight, and use `IntersectionObserver` for efficient scroll detection.

**Explanation:** Use `IntersectionObserver` on a sentinel element at the bottom. Set `isLoading = true` before fetching, preventing duplicate calls. Reset after the response arrives. Track `hasMore` to stop when all data is loaded.

---

## 92. A user scrolls quickly and infinite-scroll fires multiple API calls. What would you do?

- **A.** Tell the user to scroll slowly.
- **B.** Debounce or throttle the scroll handler, use a loading flag to prevent concurrent requests, and use `IntersectionObserver` instead of scroll events.
- **C.** Remove infinite scroll.
- **D.** Add more data to each page.

**Answer:** B. Debounce or throttle the scroll handler, use a loading flag to prevent concurrent requests, and use `IntersectionObserver` instead of scroll events.

**Explanation:** `IntersectionObserver` is more efficient than scroll event listeners. The loading flag (`isLoading` ref) prevents firing new requests while one is in progress. This eliminates duplicate calls during fast scrolling.

---

## 93. A search result list is slow even though the API response is fast. How would you find the bottleneck?

- **A.** The API must be lying about being fast.
- **B.** Profile the React rendering with DevTools Profiler — the bottleneck is likely in rendering too many DOM nodes; fix with virtualization or memoization.
- **C.** Add a delay before rendering results.
- **D.** Check the CSS files.

**Answer:** B. Profile the React rendering with DevTools Profiler — the bottleneck is likely in rendering too many DOM nodes; fix with virtualization or memoization.

**Explanation:** If the API is fast but the UI is slow, the problem is in rendering. Profiling reveals which components are expensive. Solutions: virtualize long lists, memoize expensive rows, reduce DOM complexity.

---

## 94. A `useEffect` keeps calling the API repeatedly. How would you debug it?

- **A.** Remove `useEffect` entirely.
- **B.** Check the dependency array for values that change on every render (new objects/arrays/functions) causing the effect to re-run in an infinite loop.
- **C.** Add more dependencies to the array.
- **D.** Wrap the entire component in `React.memo`.

**Answer:** B. Check the dependency array for values that change on every render (new objects/arrays/functions) causing the effect to re-run in an infinite loop.

**Explanation:** Common cause: a dependency like `{ page: 1 }` (new object every render) or a function not wrapped in `useCallback`. The effect sees a "new" dependency and re-runs. Use primitive values or memoize dependencies.

---

## 95. A user navigates away while an API request is still running. How would you handle it?

- **A.** Let the response update state of the unmounted component.
- **B.** Cancel the request in the `useEffect` cleanup function using `AbortController` to prevent state updates on unmounted components.
- **C.** Block navigation until the request completes.
- **D.** Ignore the response automatically.

**Answer:** B. Cancel the request in the `useEffect` cleanup function using `AbortController` to prevent state updates on unmounted components.

**Explanation:** `useEffect(() => { const controller = new AbortController(); fetch(url, { signal: controller.signal }); return () => controller.abort(); }, [])`. This prevents memory leaks and "update on unmounted component" warnings.

---

## 96. You need to show images for 5,000 products. The page is slow. What would you do?

- **A.** Load all 5,000 images immediately.
- **B.** Use lazy loading (`loading="lazy"`), virtualization, optimized image formats (WebP), responsive sizes, and a CDN for serving images.
- **C.** Remove all images.
- **D.** Use higher resolution images.

**Answer:** B. Use lazy loading (`loading="lazy"`), virtualization, optimized image formats (WebP), responsive sizes, and a CDN for serving images.

**Explanation:** `loading="lazy"` defers off-screen images. Virtualization only renders visible product cards. WebP/AVIF formats are smaller. `srcSet` serves appropriate sizes. CDN caches images near users.

---

## 97. A component receives API data through props AND fetches the same data directly. Which source should you use?

- **A.** Always fetch directly in every component.
- **B.** Use one source of truth — usually receive data through props from a parent that fetches it, to avoid duplicate requests and keep data consistent.
- **C.** Use both sources and merge the data.
- **D.** Store everything in `localStorage`.

**Answer:** B. Use one source of truth — usually receive data through props from a parent that fetches it, to avoid duplicate requests and keep data consistent.

**Explanation:** Having two sources of truth for the same data causes sync issues and duplicate requests. Fetch at a common parent (or use a shared cache like React Query) and pass data down as props.

---

## 98. A user changes a filter and expensive sorting runs on every render. How would you optimize it?

- **A.** Remove sorting.
- **B.** Use `useMemo` to memoize the sorted result, recalculating only when the data or sort criteria actually change.
- **C.** Sort on every render for accuracy.
- **D.** Move sorting to CSS.

**Answer:** B. Use `useMemo` to memoize the sorted result, recalculating only when the data or sort criteria actually change.

**Explanation:** `const sorted = useMemo(() => expensiveSort(data, criteria), [data, criteria])` — the sort only runs when `data` or `criteria` change, not on unrelated re-renders.

---

## 99. A component receives a huge object as props but only needs two fields. How would you improve it?

- **A.** Pass the entire object — it doesn't matter.
- **B.** Pass only the two needed fields as separate props, so the component doesn't re-render when unrelated fields of the huge object change.
- **C.** Use `JSON.stringify` to compare.
- **D.** Convert the object to a string.

**Answer:** B. Pass only the two needed fields as separate props, so the component doesn't re-render when unrelated fields of the huge object change.

**Explanation:** Passing `<Child name={obj.name} age={obj.age} />` instead of `<Child data={obj} />` means the child only re-renders when `name` or `age` actually change, not when any other field changes.

---

## 100. You have a React page with a large table, filters, sorting, pagination, and API calls. How would you structure it?

- **A.** Put everything in one giant component.
- **B.** Separate into focused components: TableContainer (data/state), FilterBar, SortControls, Pagination, TableBody; use Custom Hooks for data fetching and state logic.
- **C.** Use only inline styles for structure.
- **D.** Build separate pages for each feature.

**Answer:** B. Separate into focused components: TableContainer (data/state), FilterBar, SortControls, Pagination, TableBody; use Custom Hooks for data fetching and state logic.

**Explanation:** Component separation keeps code maintainable. Custom Hooks like `useTableData(filters, sort, page)` encapsulate complex logic. Each sub-component handles one concern and can be optimized independently.

---

## 101. A modal with a large component tree makes the whole page slow. What would you check?

- **A.** Modals are always slow.
- **B.** Check if the modal's component tree renders even when closed; lazy load the modal content; ensure it only mounts when opened.
- **C.** Remove the modal.
- **D.** Make the modal smaller with CSS.

**Answer:** B. Check if the modal's component tree renders even when closed; lazy load the modal content; ensure it only mounts when opened.

**Explanation:** If the modal renders (but is hidden with CSS) even when closed, its component tree runs on every parent re-render. Fix: conditionally render (`isOpen && <Modal />`), or use `React.lazy` for heavy content.

---

## 102. A React page becomes slow after adding a third-party library. How would you investigate?

- **A.** Remove all third-party libraries.
- **B.** Profile with DevTools to find the slow component; check the library's bundle size; verify it's not causing excessive re-renders or blocking the main thread.
- **C.** Ignore the slowness.
- **D.** Switch to a different framework.

**Answer:** B. Profile with DevTools to find the slow component; check the library's bundle size; verify it's not causing excessive re-renders or blocking the main thread.

**Explanation:** Use React DevTools Profiler and bundle analyzer. The library might be large (increasing load time), might cause re-renders (if it uses context poorly), or might block the main thread with heavy computation.

---

## 103. A user clicks Submit multiple times and duplicate API requests are sent. How would you prevent this?

- **A.** Tell the user to click once.
- **B.** Disable the button after the first click (show loading state), and use a loading flag to prevent duplicate requests until the current one completes.
- **C.** Remove the submit button.
- **D.** Accept all duplicate requests.

**Answer:** B. Disable the button after the first click (show loading state), and use a loading flag to prevent duplicate requests until the current one completes.

**Explanation:** `<button disabled={isSubmitting}>` prevents re-clicks. Set `isSubmitting = true` before the API call, `false` after it completes. Backend idempotency keys provide additional protection.

---

## 104. A timer continues running after navigating away from the component. What is wrong?

- **A.** Timers are supposed to run forever.
- **B.** The `useEffect` cleanup function is missing — it should clear the timer when the component unmounts.
- **C.** React doesn't support timers.
- **D.** The navigation is broken.

**Answer:** B. The `useEffect` cleanup function is missing — it should clear the timer when the component unmounts.

**Explanation:** `useEffect(() => { const timer = setInterval(..., 1000); return () => clearInterval(timer); }, [])` — the cleanup function `clearInterval` runs when the component unmounts, stopping the timer.

---

## 105. A component shows stale data after the user changes an ID quickly. How would you solve it?

- **A.** Make the user wait.
- **B.** Cancel the previous request when the ID changes using AbortController in `useEffect` cleanup, or track the latest request ID and ignore stale responses.
- **C.** Disable the ID selector.
- **D.** Cache all possible IDs.

**Answer:** B. Cancel the previous request when the ID changes using AbortController in `useEffect` cleanup, or track the latest request ID and ignore stale responses.

**Explanation:** When the user changes ID from 1→2→3 quickly, the response for ID 1 might arrive after ID 3's response. Cancel old requests or track `currentId` to ignore outdated responses.

---

## 106. A large page where only one small section changes frequently. How would you prevent unrelated sections from doing unnecessary work?

- **A.** Re-render the entire page — it's unavoidable.
- **B.** Isolate the frequently-changing section into its own component with its own state, so parent and sibling components don't re-render.
- **C.** Use `setInterval` to update only that section.
- **D.** Put the section on a separate page.

**Answer:** B. Isolate the frequently-changing section into its own component with its own state, so parent and sibling components don't re-render.

**Explanation:** If the timer/counter state lives in the parent, the entire page re-renders. Moving it to a child component keeps the state change local. Combine with `React.memo` on expensive siblings for extra protection.

---

## 107. A search page has local filtering, API search, pagination, and sorting. What should be client-side vs server-side?

- **A.** Everything should be client-side.
- **B.** Small datasets: filter/sort/paginate on client. Large datasets: filter/sort/paginate on server (send query params). Search queries: always server-side with debouncing.
- **C.** Everything should be server-side.
- **D.** It doesn't matter where logic runs.

**Answer:** B. Small datasets: filter/sort/paginate on client. Large datasets: filter/sort/paginate on server (send query params). Search queries: always server-side with debouncing.

**Explanation:** Client-side is faster for small, already-loaded data. Server-side is necessary for large datasets where loading everything is impractical. API search should be server-side with debounced requests.

---

## 108. You need to update a large list after one item changes. How would you avoid unnecessary work?

- **A.** Re-render the entire list.
- **B.** Use stable keys, memoize list items with `React.memo`, and update only the changed item's data to trigger a re-render of just that row.
- **C.** Reload the entire list from the API.
- **D.** Remove the list.

**Answer:** B. Use stable keys, memoize list items with `React.memo`, and update only the changed item's data to trigger a re-render of just that row.

**Explanation:** With `React.memo` and stable keys, only the item whose props changed will re-render. Other items skip re-rendering because their props are unchanged. Use `useCallback` for event handlers.

---

## 109. A page has an expensive calculation that doesn't depend on every piece of state. How would you prevent it from running on unrelated updates?

- **A.** Move the calculation to the backend.
- **B.** Use `useMemo` with a dependency array containing only the values the calculation depends on, so it skips recalculation on unrelated state changes.
- **C.** Run the calculation only once on mount.
- **D.** Remove the calculation.

**Answer:** B. Use `useMemo` with a dependency array containing only the values the calculation depends on, so it skips recalculation on unrelated state changes.

**Explanation:** `useMemo(() => expensiveCalc(dataA), [dataA])` — only runs when `dataA` changes. If `dataB` or `dataC` change, the cached result is returned instantly without recalculating.

---

## 110. You are asked to improve a slow React application. What is your step-by-step approach?

- **A.** Rewrite the entire application.
- **B.** Profile first (DevTools Profiler) → identify bottlenecks → fix the biggest issues (unnecessary re-renders, heavy computations, large lists) → measure again → repeat.
- **C.** Add `React.memo` to every component.
- **D.** Switch to a different framework.

**Answer:** B. Profile first (DevTools Profiler) → identify bottlenecks → fix the biggest issues (unnecessary re-renders, heavy computations, large lists) → measure again → repeat.

**Explanation:** Never optimize blindly. Profile to find actual bottlenecks. Common fixes: memoize expensive components, virtualize long lists, split large components, fix dependency arrays, lazy load routes. Always measure before and after.

---
