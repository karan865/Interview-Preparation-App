import { SeedQuestion } from '../types';

export const reactHooksQuestions: SeedQuestion[] = [
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How does React batch multiple state updates inside event handlers versus asynchronous callbacks like setTimeout in React 18?",
    "answer": "In React 18 with Automatic Batching (createRoot), all state updates inside event handlers, setTimeout, Promise.then, and native DOM listeners are automatically batched into a single re-render. In React 17 and earlier, updates inside async callbacks triggered separate renders.",
    "explanation": "Batching combines multiple setState calls into one render cycle to prevent unnecessary UI recalculations and layout thrashing. If immediate synchronous DOM updates are required, flushSync() can opt out.",
    "interviewAnswer": "In React 18 with Automatic Batching (createRoot), all state updates inside event handlers, setTimeout, Promise.then, and native DOM listeners are automatically batched into a single re-render. In React 17 and earlier, updates inside async callbacks triggered separate renders. Batching combines multiple setState calls into one render cycle to prevent unnecessary UI recalculations and layout thrashing. If immediate synchronous DOM updates are required, flushSync() can opt out.",
    "importantPoints": [
      "In React 18 with Automatic Batching (createRoot), all state updates inside event handlers, setTimeout, Promise.then, and native DOM listeners are automatically batched into a single re-render. In React 17 and earlier, updates inside async callbacks triggered separate renders.",
      "Batching combines multiple setState calls into one render cycle to prevent unnecessary UI recalculations and layout thrashing. If immediate synchronous DOM updates are required, flushSync() can opt out."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "usestate",
      "batching",
      "react18"
    ],
    "followUpQuestions": [
      "How does flushSync work and when should you avoid using it?",
      "Why did React 17 not batch updates inside setTimeout by default?",
      "What happens if two state setters inside a Promise update dependent values?"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why should you pass a function to useState initial state (lazy initial state) instead of invoking a calculation directly: useState(calculateValue) vs useState(calculateValue())?",
    "answer": "Passing a function (lazy initial state) ensures the calculation executes only once on initial mount. Passing the result of invoking calculateValue() runs the expensive calculation on EVERY render, even though React discards the return value on subsequent renders.",
    "explanation": "useState(() => computeExpensiveInitialState()) defers evaluation until React actually initializes the Fiber node state hook.",
    "interviewAnswer": "Passing a function (lazy initial state) ensures the calculation executes only once on initial mount. Passing the result of invoking calculateValue() runs the expensive calculation on EVERY render, even though React discards the return value on subsequent renders. useState(() => computeExpensiveInitialState()) defers evaluation until React actually initializes the Fiber node state hook.",
    "importantPoints": [
      "Passing a function (lazy initial state) ensures the calculation executes only once on initial mount. Passing the result of invoking calculateValue() runs the expensive calculation on EVERY render, even though React discards the return value on subsequent renders.",
      "useState(() => computeExpensiveInitialState()) defers evaluation until React actually initializes the Fiber node state hook."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "usestate",
      "lazy-initialization",
      "performance"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is a stale closure in React Hooks, and how does it cause bugs when reading state inside setTimeout or setInterval?",
    "answer": "A stale closure occurs when a callback or effect function captures state or props variables from an earlier render cycle. Because the function scope preserves references to old variables, asynchronous callbacks (timers, event listeners) read outdated values instead of the latest component state.",
    "explanation": "To resolve stale closures, either provide the latest value via functional state updates (setCount(c => c + 1)), store the value in a mutable useRef, or ensure all read variables are declared in the effect dependency array.",
    "interviewAnswer": "A stale closure occurs when a callback or effect function captures state or props variables from an earlier render cycle. Because the function scope preserves references to old variables, asynchronous callbacks (timers, event listeners) read outdated values instead of the latest component state. To resolve stale closures, either provide the latest value via functional state updates (setCount(c => c + 1)), store the value in a mutable useRef, or ensure all read variables are declared in the effect dependency array.",
    "importantPoints": [
      "A stale closure occurs when a callback or effect function captures state or props variables from an earlier render cycle. Because the function scope preserves references to old variables, asynchronous callbacks (timers, event listeners) read outdated values instead of the latest component state.",
      "To resolve stale closures, either provide the latest value via functional state updates (setCount(c => c + 1)), store the value in a mutable useRef, or ensure all read variables are declared in the effect dependency array."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "stale-closures",
      "closures",
      "gotcha"
    ],
    "followUpQuestions": [
      "How does useRef bypass the closure scope of a render cycle?",
      "Why does omitting a dependency from useEffect create a stale closure?",
      "Can you demonstrate fixing a timer with a functional update?"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is the output of clicking a button that runs: setCount(count + 1); setCount(count + 1); setCount(count + 1); when initial count is 0?",
    "answer": "The count increments to 1, not 3. All three calls read the same captured \"count\" variable from the current render closure (0), so each line executes setCount(0 + 1).",
    "explanation": "To increment by 3, functional updates must be used: setCount(prev => prev + 1); React queues updater functions and executes them sequentially during render.",
    "interviewAnswer": "The count increments to 1, not 3. All three calls read the same captured \"count\" variable from the current render closure (0), so each line executes setCount(0 + 1). To increment by 3, functional updates must be used: setCount(prev => prev + 1); React queues updater functions and executes them sequentially during render.",
    "importantPoints": [
      "The count increments to 1, not 3. All three calls read the same captured \"count\" variable from the current render closure (0), so each line executes setCount(0 + 1).",
      "To increment by 3, functional updates must be used: setCount(prev => prev + 1); React queues updater functions and executes them sequentially during render."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "usestate",
      "functional-updates",
      "code-prediction"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How does React determine whether to re-render when setState is called with a value: does it use == or Object.is()?",
    "answer": "React uses Object.is() comparison (via the ObjectIs polyfill) between previous and next state. If Object.is(prevState, nextState) returns true, React bails out of rendering the component and its children.",
    "explanation": "Mutating an existing array or object and passing it back to setState (e.g. items.push(newItem); setItems(items)) results in Object.is(items, items) === true, causing React to skip rendering entirely.",
    "interviewAnswer": "React uses Object.is() comparison (via the ObjectIs polyfill) between previous and next state. If Object.is(prevState, nextState) returns true, React bails out of rendering the component and its children. Mutating an existing array or object and passing it back to setState (e.g. items.push(newItem); setItems(items)) results in Object.is(items, items) === true, causing React to skip rendering entirely.",
    "importantPoints": [
      "React uses Object.is() comparison (via the ObjectIs polyfill) between previous and next state. If Object.is(prevState, nextState) returns true, React bails out of rendering the component and its children.",
      "Mutating an existing array or object and passing it back to setState (e.g. items.push(newItem); setItems(items)) results in Object.is(items, items) === true, causing React to skip rendering entirely."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "usestate",
      "object-is",
      "immutability"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "A component updates state inside an async handler, but the user navigates away before it resolves. How does React 18 handle this compared to React 17?",
    "answer": "In React 18, the notorious \"Can't perform a React state update on an unmounted component\" warning was removed because modern garbage collection handles it safely and the warning encouraged anti-patterns like isMounted flags. However, pending network requests should still be cancelled using AbortController to save memory and bandwidth.",
    "explanation": "React core team removed the memory leak warning in React 18 because setState on unmounted components does not cause a memory leak if the promise resolves normally.",
    "interviewAnswer": "In React 18, the notorious \"Can't perform a React state update on an unmounted component\" warning was removed because modern garbage collection handles it safely and the warning encouraged anti-patterns like isMounted flags. However, pending network requests should still be cancelled using AbortController to save memory and bandwidth. React core team removed the memory leak warning in React 18 because setState on unmounted components does not cause a memory leak if the promise resolves normally.",
    "importantPoints": [
      "In React 18, the notorious \"Can't perform a React state update on an unmounted component\" warning was removed because modern garbage collection handles it safely and the warning encouraged anti-patterns like isMounted flags. However, pending network requests should still be cancelled using AbortController to save memory and bandwidth.",
      "React core team removed the memory leak warning in React 18 because setState on unmounted components does not cause a memory leak if the promise resolves normally."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Production / Real-World",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usestate",
      "unmounted-components",
      "react18"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "When should you choose useReducer over useState in a complex component?",
    "answer": "Choose useReducer when state has complex transitions, when the next state depends on multiple previous state variables, when multiple sub-values change together, or when passing dispatch down deep component trees is cleaner than passing multiple setter callbacks.",
    "explanation": "useReducer centralizes state transition logic into a pure reducer function, making state mutations predictable and easily testable in isolation.",
    "interviewAnswer": "Choose useReducer when state has complex transitions, when the next state depends on multiple previous state variables, when multiple sub-values change together, or when passing dispatch down deep component trees is cleaner than passing multiple setter callbacks. useReducer centralizes state transition logic into a pure reducer function, making state mutations predictable and easily testable in isolation.",
    "importantPoints": [
      "Choose useReducer when state has complex transitions, when the next state depends on multiple previous state variables, when multiple sub-values change together, or when passing dispatch down deep component trees is cleaner than passing multiple setter callbacks.",
      "useReducer centralizes state transition logic into a pure reducer function, making state mutations predictable and easily testable in isolation."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "usereducer",
      "usestate",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Can dispatch from useReducer change identity between renders? Should it be included in useEffect dependency arrays?",
    "answer": "No, React guarantees that the dispatch function identity is stable and will never change across re-renders. While including it in dependency arrays is safe and satisfies the linter, it will never trigger the effect to re-run.",
    "explanation": "React attaches dispatch to the Fiber hook record once during mount. The reference remains identical for the lifetime of the component.",
    "interviewAnswer": "No, React guarantees that the dispatch function identity is stable and will never change across re-renders. While including it in dependency arrays is safe and satisfies the linter, it will never trigger the effect to re-run. React attaches dispatch to the Fiber hook record once during mount. The reference remains identical for the lifetime of the component.",
    "importantPoints": [
      "No, React guarantees that the dispatch function identity is stable and will never change across re-renders. While including it in dependency arrays is safe and satisfies the linter, it will never trigger the effect to re-run.",
      "React attaches dispatch to the Fiber hook record once during mount. The reference remains identical for the lifetime of the component."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usereducer",
      "stability",
      "dependencies"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How do you initialize useReducer state lazily when computing the initial state requires heavy processing or depends on props?",
    "answer": "Pass a third argument to useReducer: useReducer(reducer, initialArg, initFunction). React will call initFunction(initialArg) only once during initial mount.",
    "explanation": "This allows resetting state back to the initial computed value later by dispatching a reset action that invokes the init function or passing props.",
    "interviewAnswer": "Pass a third argument to useReducer: useReducer(reducer, initialArg, initFunction). React will call initFunction(initialArg) only once during initial mount. This allows resetting state back to the initial computed value later by dispatching a reset action that invokes the init function or passing props.",
    "importantPoints": [
      "Pass a third argument to useReducer: useReducer(reducer, initialArg, initFunction). React will call initFunction(initialArg) only once during initial mount.",
      "This allows resetting state back to the initial computed value later by dispatching a reset action that invokes the init function or passing props."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usereducer",
      "lazy-initialization"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why does calling a state setter with identical primitive values during render sometimes execute the component function once more before bailing out?",
    "answer": "If an update produces the exact same state as the current state, React may still need to re-render the component once to confirm no children were affected or because it already scheduled the work, but it bails out before visiting children or committing to the DOM.",
    "explanation": "React fiber scheduler bails out early during the render phase without entering the commit phase.",
    "interviewAnswer": "If an update produces the exact same state as the current state, React may still need to re-render the component once to confirm no children were affected or because it already scheduled the work, but it bails out before visiting children or committing to the DOM. React fiber scheduler bails out early during the render phase without entering the commit phase.",
    "importantPoints": [
      "If an update produces the exact same state as the current state, React may still need to re-render the component once to confirm no children were affected or because it already scheduled the work, but it bails out before visiting children or committing to the DOM.",
      "React fiber scheduler bails out early during the render phase without entering the commit phase."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usestate",
      "bailout",
      "fiber-internals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How does useEffect differ from useLayoutEffect in execution timing and browser paint blocking?",
    "answer": "useEffect runs asynchronously after the browser paints the screen to avoid blocking user interaction. useLayoutEffect runs synchronously immediately after DOM mutations but before the browser paints, blocking visual updates until the effect finishes.",
    "explanation": "useLayoutEffect is essential when reading DOM dimensions (scroll position, element measurements) and making DOM mutations to prevent visual flickering before the user sees the page.",
    "interviewAnswer": "useEffect runs asynchronously after the browser paints the screen to avoid blocking user interaction. useLayoutEffect runs synchronously immediately after DOM mutations but before the browser paints, blocking visual updates until the effect finishes. useLayoutEffect is essential when reading DOM dimensions (scroll position, element measurements) and making DOM mutations to prevent visual flickering before the user sees the page.",
    "importantPoints": [
      "useEffect runs asynchronously after the browser paints the screen to avoid blocking user interaction. useLayoutEffect runs synchronously immediately after DOM mutations but before the browser paints, blocking visual updates until the effect finishes.",
      "useLayoutEffect is essential when reading DOM dimensions (scroll position, element measurements) and making DOM mutations to prevent visual flickering before the user sees the page."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "useeffect",
      "uselayouteffect",
      "paint-cycle"
    ],
    "followUpQuestions": [
      "What happens if you run an expensive 200ms calculation inside useLayoutEffect?",
      "Why does useLayoutEffect trigger a console warning during SSR?",
      "When would you choose useInsertionEffect over useLayoutEffect?"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why does useEffect execute twice on mount in React 18 development mode, and how should you write your cleanup functions to handle it?",
    "answer": "In React 18 Strict Mode, React intentionally mounts, unmounts, and re-mounts every component to verify that effects are resilient to remounting (e.g. for Fast Refresh, Offscreen API, and Concurrent Mode). Cleanup functions must properly undo everything the effect created (cancelling subscriptions, clearing timers, aborting fetch requests).",
    "explanation": "If your effect breaks or duplicates data when mounted twice, it has a missing or defective cleanup routine.",
    "interviewAnswer": "In React 18 Strict Mode, React intentionally mounts, unmounts, and re-mounts every component to verify that effects are resilient to remounting (e.g. for Fast Refresh, Offscreen API, and Concurrent Mode). Cleanup functions must properly undo everything the effect created (cancelling subscriptions, clearing timers, aborting fetch requests). If your effect breaks or duplicates data when mounted twice, it has a missing or defective cleanup routine.",
    "importantPoints": [
      "In React 18 Strict Mode, React intentionally mounts, unmounts, and re-mounts every component to verify that effects are resilient to remounting (e.g. for Fast Refresh, Offscreen API, and Concurrent Mode). Cleanup functions must properly undo everything the effect created (cancelling subscriptions, clearing timers, aborting fetch requests).",
      "If your effect breaks or duplicates data when mounted twice, it has a missing or defective cleanup routine."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "strict-mode",
      "useeffect",
      "react18"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How do you prevent race conditions when fetching data inside useEffect as the user rapidly changes search queries?",
    "answer": "Use an AbortController or a boolean active flag inside useEffect. In the cleanup function, call controller.abort() or set active = false so that earlier out-of-order network responses are ignored when resolving.",
    "explanation": "Without cleanup, if request A takes 500ms and request B takes 100ms, request A will resolve last and overwrite the newer data from request B.",
    "interviewAnswer": "Use an AbortController or a boolean active flag inside useEffect. In the cleanup function, call controller.abort() or set active = false so that earlier out-of-order network responses are ignored when resolving. Without cleanup, if request A takes 500ms and request B takes 100ms, request A will resolve last and overwrite the newer data from request B.",
    "importantPoints": [
      "Use an AbortController or a boolean active flag inside useEffect. In the cleanup function, call controller.abort() or set active = false so that earlier out-of-order network responses are ignored when resolving.",
      "Without cleanup, if request A takes 500ms and request B takes 100ms, request A will resolve last and overwrite the newer data from request B."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "useeffect",
      "race-conditions",
      "data-fetching"
    ],
    "followUpQuestions": [
      "What is the difference between AbortController and a boolean cancelled flag?",
      "How does TanStack Query or SWR handle this automatically under the hood?",
      "Why should you catch AbortError when using fetch with AbortController?"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why is it an anti-pattern to use an async function directly as the argument to useEffect: useEffect(async () => {...})?",
    "answer": "An async function implicitly returns a Promise. React expects useEffect callback to either return nothing (undefined) or a synchronous cleanup function. Returning a Promise prevents React from invoking cleanup and causes a runtime warning.",
    "explanation": "To run async code, define an inner async function inside the effect and invoke it synchronously: useEffect(() => { const load = async () => {...}; load(); return () => cleanup(); }, []).",
    "interviewAnswer": "An async function implicitly returns a Promise. React expects useEffect callback to either return nothing (undefined) or a synchronous cleanup function. Returning a Promise prevents React from invoking cleanup and causes a runtime warning. To run async code, define an inner async function inside the effect and invoke it synchronously: useEffect(() => { const load = async () => {...}; load(); return () => cleanup(); }, []).",
    "importantPoints": [
      "An async function implicitly returns a Promise. React expects useEffect callback to either return nothing (undefined) or a synchronous cleanup function. Returning a Promise prevents React from invoking cleanup and causes a runtime warning.",
      "To run async code, define an inner async function inside the effect and invoke it synchronously: useEffect(() => { const load = async () => {...}; load(); return () => cleanup(); }, [])."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "useeffect",
      "async-await",
      "anti-pattern"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What causes an infinite render loop in useEffect, and what are the two most common root causes?",
    "answer": "An infinite loop occurs when useEffect updates a state variable that triggers a re-render, and that re-render re-triggers the effect. The two most common causes are: 1) Updating state inside an effect without a dependency array, and 2) Having an object or function in the dependency array that gets recreated on every render.",
    "explanation": "Every render creates a new object reference in memory ({}), causing the shallow comparison in the dependency array to fail and trigger the effect again.",
    "interviewAnswer": "An infinite loop occurs when useEffect updates a state variable that triggers a re-render, and that re-render re-triggers the effect. The two most common causes are: 1) Updating state inside an effect without a dependency array, and 2) Having an object or function in the dependency array that gets recreated on every render. Every render creates a new object reference in memory ({}), causing the shallow comparison in the dependency array to fail and trigger the effect again.",
    "importantPoints": [
      "An infinite loop occurs when useEffect updates a state variable that triggers a re-render, and that re-render re-triggers the effect. The two most common causes are: 1) Updating state inside an effect without a dependency array, and 2) Having an object or function in the dependency array that gets recreated on every render.",
      "Every render creates a new object reference in memory ({}), causing the shallow comparison in the dependency array to fail and trigger the effect again."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "useeffect",
      "infinite-loop",
      "dependencies"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "When does the cleanup function returned by useEffect execute during a component lifecycle?",
    "answer": "The cleanup function executes in two circumstances: 1) Right before the effect re-runs on a subsequent render (cleaning up the previous render effect), and 2) When the component unmounts from the DOM.",
    "explanation": "This ensures that resources from the previous render (e.g. event listeners, WebSocket connections) are cleanly released before new ones are established.",
    "interviewAnswer": "The cleanup function executes in two circumstances: 1) Right before the effect re-runs on a subsequent render (cleaning up the previous render effect), and 2) When the component unmounts from the DOM. This ensures that resources from the previous render (e.g. event listeners, WebSocket connections) are cleanly released before new ones are established.",
    "importantPoints": [
      "The cleanup function executes in two circumstances: 1) Right before the effect re-runs on a subsequent render (cleaning up the previous render effect), and 2) When the component unmounts from the DOM.",
      "This ensures that resources from the previous render (e.g. event listeners, WebSocket connections) are cleanly released before new ones are established."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "useeffect",
      "cleanup",
      "lifecycle"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why does the React team recommend avoiding useEffect for transforming data for rendering, and what should you do instead?",
    "answer": "Transforming data inside useEffect requires setting state, causing an unnecessary extra render pass where the user briefly sees stale data. Instead, transform data synchronously at the top level of the component during render (optionally memoized with useMemo if expensive).",
    "explanation": "Rendering should be a pure calculation of props and state. Extra effects for derived data add latency and complexity.",
    "interviewAnswer": "Transforming data inside useEffect requires setting state, causing an unnecessary extra render pass where the user briefly sees stale data. Instead, transform data synchronously at the top level of the component during render (optionally memoized with useMemo if expensive). Rendering should be a pure calculation of props and state. Extra effects for derived data add latency and complexity.",
    "importantPoints": [
      "Transforming data inside useEffect requires setting state, causing an unnecessary extra render pass where the user briefly sees stale data. Instead, transform data synchronously at the top level of the component during render (optionally memoized with useMemo if expensive).",
      "Rendering should be a pure calculation of props and state. Extra effects for derived data add latency and complexity."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "useeffect",
      "derived-state",
      "best-practices"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How do you synchronize with a third-party non-React library (like a chart or map widget) using useEffect and useRef?",
    "answer": "Attach a ref to the DOM container element. Inside useEffect with an empty dependency array (or key dependencies), initialize the widget instance using the ref.current. In the effect cleanup function, call the widget destroy() or dispose() method to free memory.",
    "explanation": "The ref provides access to the real DOM node while useEffect coordinates lifecycle hooks for initialization, prop updates, and teardown.",
    "interviewAnswer": "Attach a ref to the DOM container element. Inside useEffect with an empty dependency array (or key dependencies), initialize the widget instance using the ref.current. In the effect cleanup function, call the widget destroy() or dispose() method to free memory. The ref provides access to the real DOM node while useEffect coordinates lifecycle hooks for initialization, prop updates, and teardown.",
    "importantPoints": [
      "Attach a ref to the DOM container element. Inside useEffect with an empty dependency array (or key dependencies), initialize the widget instance using the ref.current. In the effect cleanup function, call the widget destroy() or dispose() method to free memory.",
      "The ref provides access to the real DOM node while useEffect coordinates lifecycle hooks for initialization, prop updates, and teardown."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "useeffect",
      "useref",
      "third-party-integration"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How does useEffect handle dependencies when comparing them: deep comparison or shallow reference comparison?",
    "answer": "React uses Object.is() shallow reference comparison on each item in the dependency array. It does not perform deep equality checks on objects or arrays.",
    "explanation": "If dependency is an object: const filter = { active: true }, its memory reference changes every render, causing the effect to run on every render even if contents are identical.",
    "interviewAnswer": "React uses Object.is() shallow reference comparison on each item in the dependency array. It does not perform deep equality checks on objects or arrays. If dependency is an object: const filter = { active: true }, its memory reference changes every render, causing the effect to run on every render even if contents are identical.",
    "importantPoints": [
      "React uses Object.is() shallow reference comparison on each item in the dependency array. It does not perform deep equality checks on objects or arrays.",
      "If dependency is an object: const filter = { active: true }, its memory reference changes every render, causing the effect to run on every render even if contents are identical."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "useeffect",
      "dependencies",
      "shallow-comparison"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why should you avoid disabling the eslint-plugin-react-hooks exhaustive-deps rule with // eslint-disable-next-line?",
    "answer": "Disabling exhaustive-deps masks bugs like stale closures, where the effect retains old props/state and operates on obsolete data. Instead, restructure the code: move functions inside the effect, extract pure logic outside the component, use functional state updates, or memoize stable callbacks.",
    "explanation": "Linter warnings indicate architectural issues with state synchronization rather than code formatting quirks.",
    "interviewAnswer": "Disabling exhaustive-deps masks bugs like stale closures, where the effect retains old props/state and operates on obsolete data. Instead, restructure the code: move functions inside the effect, extract pure logic outside the component, use functional state updates, or memoize stable callbacks. Linter warnings indicate architectural issues with state synchronization rather than code formatting quirks.",
    "importantPoints": [
      "Disabling exhaustive-deps masks bugs like stale closures, where the effect retains old props/state and operates on obsolete data. Instead, restructure the code: move functions inside the effect, extract pure logic outside the component, use functional state updates, or memoize stable callbacks.",
      "Linter warnings indicate architectural issues with state synchronization rather than code formatting quirks."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Production / Real-World",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "exhaustive-deps",
      "eslint",
      "code-quality"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What are the two primary use cases for useRef in React, and how does it differ fundamentally from useState?",
    "answer": "The two primary use cases are: 1) Accessing direct DOM nodes (focus, scroll position, measurements), and 2) Storing mutable instance variables (timer IDs, previous values, render counts) across renders without triggering a re-render when mutated. Unlike useState, mutating ref.current is synchronous and does NOT schedule a render.",
    "explanation": "useRef returns a plain JavaScript object { current: initialValue } whose reference remains stable across the lifetime of the component.",
    "interviewAnswer": "The two primary use cases are: 1) Accessing direct DOM nodes (focus, scroll position, measurements), and 2) Storing mutable instance variables (timer IDs, previous values, render counts) across renders without triggering a re-render when mutated. Unlike useState, mutating ref.current is synchronous and does NOT schedule a render. useRef returns a plain JavaScript object { current: initialValue } whose reference remains stable across the lifetime of the component.",
    "importantPoints": [
      "The two primary use cases are: 1) Accessing direct DOM nodes (focus, scroll position, measurements), and 2) Storing mutable instance variables (timer IDs, previous values, render counts) across renders without triggering a re-render when mutated. Unlike useState, mutating ref.current is synchronous and does NOT schedule a render.",
      "useRef returns a plain JavaScript object { current: initialValue } whose reference remains stable across the lifetime of the component."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "useref",
      "usestate",
      "dom"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why is it forbidden to read or write ref.current during rendering in React (except for lazy initialization)?",
    "answer": "Writing or reading ref.current during rendering breaks React pure render contract and concurrent rendering guarantees. In concurrent rendering, React may render a component multiple times, pause, or discard work before committing, resulting in unpredictable side effects and inconsistent UI state.",
    "explanation": "Refs should only be modified or read inside event handlers, useEffect, or useLayoutEffect, where DOM and React commit phases are guaranteed.",
    "interviewAnswer": "Writing or reading ref.current during rendering breaks React pure render contract and concurrent rendering guarantees. In concurrent rendering, React may render a component multiple times, pause, or discard work before committing, resulting in unpredictable side effects and inconsistent UI state. Refs should only be modified or read inside event handlers, useEffect, or useLayoutEffect, where DOM and React commit phases are guaranteed.",
    "importantPoints": [
      "Writing or reading ref.current during rendering breaks React pure render contract and concurrent rendering guarantees. In concurrent rendering, React may render a component multiple times, pause, or discard work before committing, resulting in unpredictable side effects and inconsistent UI state.",
      "Refs should only be modified or read inside event handlers, useEffect, or useLayoutEffect, where DOM and React commit phases are guaranteed."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "useref",
      "concurrent-mode",
      "purity"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How do you build a custom hook usePrevious(value) using useRef to track the state value from the previous render?",
    "answer": "Create a ref initialized with undefined. In useEffect (which runs after render), update ref.current = value. Return ref.current from the hook. During render, ref.current still holds the value from the prior render because useEffect hasn't executed for the current render yet.",
    "explanation": "Demonstrates understanding of the React lifecycle sequence: Render (reads previous ref) -> Commit -> useEffect (updates ref).",
    "interviewAnswer": "Create a ref initialized with undefined. In useEffect (which runs after render), update ref.current = value. Return ref.current from the hook. During render, ref.current still holds the value from the prior render because useEffect hasn't executed for the current render yet. Demonstrates understanding of the React lifecycle sequence: Render (reads previous ref) -> Commit -> useEffect (updates ref).",
    "importantPoints": [
      "Create a ref initialized with undefined. In useEffect (which runs after render), update ref.current = value. Return ref.current from the hook. During render, ref.current still holds the value from the prior render because useEffect hasn't executed for the current render yet.",
      "Demonstrates understanding of the React lifecycle sequence: Render (reads previous ref) -> Commit -> useEffect (updates ref)."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "useref",
      "useprevious",
      "custom-hooks"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is useImperativeHandle and forwardRef, and how do they restrict child DOM exposure to parent components?",
    "answer": "forwardRef allows a child component to receive a ref passed by a parent. useImperativeHandle customizes the ref value exposed to the parent, exposing only specific imperative methods (e.g. focus(), scrollIntoView(), reset()) instead of handing over the raw native DOM element.",
    "explanation": "Preserves component encapsulation by preventing parent components from directly mutating internal DOM trees or attaching arbitrary properties.",
    "interviewAnswer": "forwardRef allows a child component to receive a ref passed by a parent. useImperativeHandle customizes the ref value exposed to the parent, exposing only specific imperative methods (e.g. focus(), scrollIntoView(), reset()) instead of handing over the raw native DOM element. Preserves component encapsulation by preventing parent components from directly mutating internal DOM trees or attaching arbitrary properties.",
    "importantPoints": [
      "forwardRef allows a child component to receive a ref passed by a parent. useImperativeHandle customizes the ref value exposed to the parent, exposing only specific imperative methods (e.g. focus(), scrollIntoView(), reset()) instead of handing over the raw native DOM element.",
      "Preserves component encapsulation by preventing parent components from directly mutating internal DOM trees or attaching arbitrary properties."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "useimperativehandle",
      "forwardref",
      "encapsulation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How does React 19 simplify forwardRef for functional components?",
    "answer": "In React 19, ref is passed as a regular prop to functional components: function MyInput({ ref, ...props }). forwardRef is deprecated and no longer needed for standard functional components.",
    "explanation": "Simplifies TypeScript typings and eliminates HOC wrapper nesting around functional components.",
    "interviewAnswer": "In React 19, ref is passed as a regular prop to functional components: function MyInput({ ref, ...props }). forwardRef is deprecated and no longer needed for standard functional components. Simplifies TypeScript typings and eliminates HOC wrapper nesting around functional components.",
    "importantPoints": [
      "In React 19, ref is passed as a regular prop to functional components: function MyInput({ ref, ...props }). forwardRef is deprecated and no longer needed for standard functional components.",
      "Simplifies TypeScript typings and eliminates HOC wrapper nesting around functional components."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "react19",
      "forwardref",
      "ref-as-prop"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is a callback ref in React, and when is it superior to useRef for observing when a DOM node mounts or unmounts?",
    "answer": "A callback ref is a function passed to the ref attribute: ref={node => {...}}. React calls it with the DOM node when it mounts, and with null when it unmounts. It is superior to useRef when you need to run code immediately when a DOM element attaches (e.g. measuring dimensions, setting focus, or observing with ResizeObserver), which useRef cannot notify because mutating ref.current does not trigger effects.",
    "explanation": "useRef does not notify you when its content changes; a callback ref provides an immediate lifecycle hook.",
    "interviewAnswer": "A callback ref is a function passed to the ref attribute: ref={node => {...}}. React calls it with the DOM node when it mounts, and with null when it unmounts. It is superior to useRef when you need to run code immediately when a DOM element attaches (e.g. measuring dimensions, setting focus, or observing with ResizeObserver), which useRef cannot notify because mutating ref.current does not trigger effects. useRef does not notify you when its content changes; a callback ref provides an immediate lifecycle hook.",
    "importantPoints": [
      "A callback ref is a function passed to the ref attribute: ref={node => {...}}. React calls it with the DOM node when it mounts, and with null when it unmounts. It is superior to useRef when you need to run code immediately when a DOM element attaches (e.g. measuring dimensions, setting focus, or observing with ResizeObserver), which useRef cannot notify because mutating ref.current does not trigger effects.",
      "useRef does not notify you when its content changes; a callback ref provides an immediate lifecycle hook."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "callback-ref",
      "useref",
      "dom"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is the precise difference between useMemo and useCallback in React?",
    "answer": "useMemo caches the result of invoking a calculation function (useMemo(() => computeValue(a, b), [a, b])), whereas useCallback caches the function definition itself (useCallback((e) => handleClick(e), [a])). In fact, useCallback(fn, deps) is syntactic sugar for useMemo(() => fn, deps).",
    "explanation": "useMemo avoids recomputing expensive calculations; useCallback preserves function reference identity across renders to prevent unnecessary child re-renders.",
    "interviewAnswer": "useMemo caches the result of invoking a calculation function (useMemo(() => computeValue(a, b), [a, b])), whereas useCallback caches the function definition itself (useCallback((e) => handleClick(e), [a])). In fact, useCallback(fn, deps) is syntactic sugar for useMemo(() => fn, deps). useMemo avoids recomputing expensive calculations; useCallback preserves function reference identity across renders to prevent unnecessary child re-renders.",
    "importantPoints": [
      "useMemo caches the result of invoking a calculation function (useMemo(() => computeValue(a, b), [a, b])), whereas useCallback caches the function definition itself (useCallback((e) => handleClick(e), [a])). In fact, useCallback(fn, deps) is syntactic sugar for useMemo(() => fn, deps).",
      "useMemo avoids recomputing expensive calculations; useCallback preserves function reference identity across renders to prevent unnecessary child re-renders."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "usememo",
      "usecallback",
      "memoization"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why does wrapping an inline arrow function in useCallback provide ZERO performance benefit if passed to a standard HTML element like <button onClick={handleClick}>?",
    "answer": "Native HTML elements (<button>, <div>) are rendered by the DOM renderer, not React memoized components. Creating a useCallback function still allocates a closure, an array, and comparison overhead on every render, adding net overhead without preventing any DOM reconciliation.",
    "explanation": "useCallback only helps when passed to a child component wrapped in React.memo, or when used as a dependency in another hook like useEffect.",
    "interviewAnswer": "Native HTML elements (<button>, <div>) are rendered by the DOM renderer, not React memoized components. Creating a useCallback function still allocates a closure, an array, and comparison overhead on every render, adding net overhead without preventing any DOM reconciliation. useCallback only helps when passed to a child component wrapped in React.memo, or when used as a dependency in another hook like useEffect.",
    "importantPoints": [
      "Native HTML elements (<button>, <div>) are rendered by the DOM renderer, not React memoized components. Creating a useCallback function still allocates a closure, an array, and comparison overhead on every render, adding net overhead without preventing any DOM reconciliation.",
      "useCallback only helps when passed to a child component wrapped in React.memo, or when used as a dependency in another hook like useEffect."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "usecallback",
      "performance-traps",
      "memoization"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "A developer wrapped every function in useCallback and every object in useMemo across the entire application, yet page performance degraded. Why?",
    "answer": "Memoization is not free: every hook call allocates dependency arrays, captures closure memory, and executes shallow equality checks on every render pass. When applied indiscriminately to cheap computations or unmemoized children, memory consumption rises and render speed slows down.",
    "explanation": "Optimization should only be applied when measurements (React Profiler) confirm a genuine bottleneck, such as expensive array filtering (10,000+ items) or preventing heavy child tree re-renders.",
    "interviewAnswer": "Memoization is not free: every hook call allocates dependency arrays, captures closure memory, and executes shallow equality checks on every render pass. When applied indiscriminately to cheap computations or unmemoized children, memory consumption rises and render speed slows down. Optimization should only be applied when measurements (React Profiler) confirm a genuine bottleneck, such as expensive array filtering (10,000+ items) or preventing heavy child tree re-renders.",
    "importantPoints": [
      "Memoization is not free: every hook call allocates dependency arrays, captures closure memory, and executes shallow equality checks on every render pass. When applied indiscriminately to cheap computations or unmemoized children, memory consumption rises and render speed slows down.",
      "Optimization should only be applied when measurements (React Profiler) confirm a genuine bottleneck, such as expensive array filtering (10,000+ items) or preventing heavy child tree re-renders."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Logical / Scenario-Based",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "usememo",
      "usecallback",
      "profiling",
      "over-optimization"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How can you avoid needing useCallback when passing an event handler down to a child by using functional state updates?",
    "answer": "If a callback only updates state based on the current state (e.g. const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])), isOpen must be in the dependency array, recreating the function on every toggle. Using a functional update: const toggle = useCallback(() => setIsOpen(prev => !prev), []) removes the dependency entirely, keeping the callback reference permanently stable.",
    "explanation": "Functional updates decouple the state transition from the current render closure, enabling completely empty dependency arrays.",
    "interviewAnswer": "If a callback only updates state based on the current state (e.g. const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])), isOpen must be in the dependency array, recreating the function on every toggle. Using a functional update: const toggle = useCallback(() => setIsOpen(prev => !prev), []) removes the dependency entirely, keeping the callback reference permanently stable. Functional updates decouple the state transition from the current render closure, enabling completely empty dependency arrays.",
    "importantPoints": [
      "If a callback only updates state based on the current state (e.g. const toggle = useCallback(() => setIsOpen(!isOpen), [isOpen])), isOpen must be in the dependency array, recreating the function on every toggle. Using a functional update: const toggle = useCallback(() => setIsOpen(prev => !prev), []) removes the dependency entirely, keeping the callback reference permanently stable.",
      "Functional updates decouple the state transition from the current render closure, enabling completely empty dependency arrays."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usecallback",
      "functional-updates",
      "refactoring"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How does React Compiler (introduced in React 19) affect the manual usage of useMemo, useCallback, and React.memo?",
    "answer": "React Compiler is an optimizing build-time Babel/Vite plugin that automatically memoizes values, function references, and JSX element trees at the compiler level based on JavaScript and React rules. In applications using React Compiler, manual useMemo, useCallback, and React.memo become largely redundant.",
    "explanation": "The compiler performs fine-grained memoization across expressions, achieving higher performance than humans manually writing dependency arrays.",
    "interviewAnswer": "React Compiler is an optimizing build-time Babel/Vite plugin that automatically memoizes values, function references, and JSX element trees at the compiler level based on JavaScript and React rules. In applications using React Compiler, manual useMemo, useCallback, and React.memo become largely redundant. The compiler performs fine-grained memoization across expressions, achieving higher performance than humans manually writing dependency arrays.",
    "importantPoints": [
      "React Compiler is an optimizing build-time Babel/Vite plugin that automatically memoizes values, function references, and JSX element trees at the compiler level based on JavaScript and React rules. In applications using React Compiler, manual useMemo, useCallback, and React.memo become largely redundant.",
      "The compiler performs fine-grained memoization across expressions, achieving higher performance than humans manually writing dependency arrays."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "react19",
      "react-compiler",
      "future-react"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What problem does useId solve in React, and why should you NOT use Math.random() or an auto-incrementing integer for accessibility IDs?",
    "answer": "useId generates unique, stable identifier strings that are guaranteed to match identically between server-side rendering (SSR) and client hydration. Math.random() generates mismatched IDs between server and client, causing hydration mismatches and broken accessibility (aria-labelledby/htmlFor) relationships.",
    "explanation": "useId produces IDs formatted like :r0: based on the component position in the Fiber tree hierarchy.",
    "interviewAnswer": "useId generates unique, stable identifier strings that are guaranteed to match identically between server-side rendering (SSR) and client hydration. Math.random() generates mismatched IDs between server and client, causing hydration mismatches and broken accessibility (aria-labelledby/htmlFor) relationships. useId produces IDs formatted like :r0: based on the component position in the Fiber tree hierarchy.",
    "importantPoints": [
      "useId generates unique, stable identifier strings that are guaranteed to match identically between server-side rendering (SSR) and client hydration. Math.random() generates mismatched IDs between server and client, causing hydration mismatches and broken accessibility (aria-labelledby/htmlFor) relationships.",
      "useId produces IDs formatted like :r0: based on the component position in the Fiber tree hierarchy."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "useid",
      "ssr",
      "accessibility",
      "hydration"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is useTransition in React 18, and how does it prevent UI inputs from freezing during heavy state updates?",
    "answer": "useTransition marks state updates as non-urgent transitions: const [isPending, startTransition] = useTransition(). React prioritizes urgent user inputs (typing, clicking) immediately and interrupts or defers the non-urgent transition rendering in the background, keeping the main thread responsive.",
    "explanation": "isPending indicates whether the background transition is currently running, allowing you to show a subtle spinner without unmounting existing UI.",
    "interviewAnswer": "useTransition marks state updates as non-urgent transitions: const [isPending, startTransition] = useTransition(). React prioritizes urgent user inputs (typing, clicking) immediately and interrupts or defers the non-urgent transition rendering in the background, keeping the main thread responsive. isPending indicates whether the background transition is currently running, allowing you to show a subtle spinner without unmounting existing UI.",
    "importantPoints": [
      "useTransition marks state updates as non-urgent transitions: const [isPending, startTransition] = useTransition(). React prioritizes urgent user inputs (typing, clicking) immediately and interrupts or defers the non-urgent transition rendering in the background, keeping the main thread responsive.",
      "isPending indicates whether the background transition is currently running, allowing you to show a subtle spinner without unmounting existing UI."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "usetransition",
      "concurrent-react",
      "react18"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How does useDeferredValue differ from useTransition, and when would you choose one over the other?",
    "answer": "useTransition is used when you control the state update function (startTransition(() => setSearchTerm(text))). useDeferredValue is used when you only receive the value as a prop or hook output from an external source: const deferredQuery = useDeferredValue(query). useDeferredValue lags behind the urgent value until heavy re-renders complete.",
    "explanation": "Similar to debouncing or throttling, but without arbitrary millisecond delays—React updates the deferred value as soon as the main thread is idle.",
    "interviewAnswer": "useTransition is used when you control the state update function (startTransition(() => setSearchTerm(text))). useDeferredValue is used when you only receive the value as a prop or hook output from an external source: const deferredQuery = useDeferredValue(query). useDeferredValue lags behind the urgent value until heavy re-renders complete. Similar to debouncing or throttling, but without arbitrary millisecond delays—React updates the deferred value as soon as the main thread is idle.",
    "importantPoints": [
      "useTransition is used when you control the state update function (startTransition(() => setSearchTerm(text))). useDeferredValue is used when you only receive the value as a prop or hook output from an external source: const deferredQuery = useDeferredValue(query). useDeferredValue lags behind the urgent value until heavy re-renders complete.",
      "Similar to debouncing or throttling, but without arbitrary millisecond delays—React updates the deferred value as soon as the main thread is idle."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "usedeferredvalue",
      "usetransition",
      "concurrent-react"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What problem does useSyncExternalStore solve, and why did useEffect + useState cause \"tearing\" in Concurrent React?",
    "answer": "In Concurrent React, rendering can pause and yield to the browser. If an external store (Redux, Zustand, browser window size) mutates during this pause, different components reading the store within the same render pass can display different values for the same state—a visual artifact called \"tearing\". useSyncExternalStore forces synchronous reads of external stores to guarantee atomic consistency across the entire UI tree.",
    "explanation": "Required for all state management libraries operating outside React Fiber tree in React 18+.",
    "interviewAnswer": "In Concurrent React, rendering can pause and yield to the browser. If an external store (Redux, Zustand, browser window size) mutates during this pause, different components reading the store within the same render pass can display different values for the same state—a visual artifact called \"tearing\". useSyncExternalStore forces synchronous reads of external stores to guarantee atomic consistency across the entire UI tree. Required for all state management libraries operating outside React Fiber tree in React 18+.",
    "importantPoints": [
      "In Concurrent React, rendering can pause and yield to the browser. If an external store (Redux, Zustand, browser window size) mutates during this pause, different components reading the store within the same render pass can display different values for the same state—a visual artifact called \"tearing\". useSyncExternalStore forces synchronous reads of external stores to guarantee atomic consistency across the entire UI tree.",
      "Required for all state management libraries operating outside React Fiber tree in React 18+."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "usesyncexternalstore",
      "tearing",
      "concurrent-mode"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is useInsertionEffect and why is it specifically designated only for CSS-in-JS library authors?",
    "answer": "useInsertionEffect fires synchronously before any DOM mutations are made (before useLayoutEffect and useEffect). This allows CSS-in-JS libraries (Emotion, styled-components) to inject <style> tags into the DOM before layout calculations occur, preventing browsers from recalculating layout multiple times per frame.",
    "explanation": "Regular application developers should not use useInsertionEffect; standard effects handle all typical application tasks.",
    "interviewAnswer": "useInsertionEffect fires synchronously before any DOM mutations are made (before useLayoutEffect and useEffect). This allows CSS-in-JS libraries (Emotion, styled-components) to inject <style> tags into the DOM before layout calculations occur, preventing browsers from recalculating layout multiple times per frame. Regular application developers should not use useInsertionEffect; standard effects handle all typical application tasks.",
    "importantPoints": [
      "useInsertionEffect fires synchronously before any DOM mutations are made (before useLayoutEffect and useEffect). This allows CSS-in-JS libraries (Emotion, styled-components) to inject <style> tags into the DOM before layout calculations occur, preventing browsers from recalculating layout multiple times per frame.",
      "Regular application developers should not use useInsertionEffect; standard effects handle all typical application tasks."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "useinsertioneffect",
      "css-in-js",
      "browser-rendering"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What are the two foundational Rules of Hooks, and how does React Fiber internal linked-list architecture enforce them?",
    "answer": "The two rules are: 1) Only call hooks at the top level (never inside loops, conditions, or nested functions), and 2) Only call hooks from React function components or custom hooks. Internally, React stores hooks as a singly-linked list on the Fiber node. It relies on the exact same execution order on every render to map hook state to its corresponding Fiber node record.",
    "explanation": "Placing a hook inside an if statement shifts the indices in the linked list, causing subsequent hooks to receive mismatched state data.",
    "interviewAnswer": "The two rules are: 1) Only call hooks at the top level (never inside loops, conditions, or nested functions), and 2) Only call hooks from React function components or custom hooks. Internally, React stores hooks as a singly-linked list on the Fiber node. It relies on the exact same execution order on every render to map hook state to its corresponding Fiber node record. Placing a hook inside an if statement shifts the indices in the linked list, causing subsequent hooks to receive mismatched state data.",
    "importantPoints": [
      "The two rules are: 1) Only call hooks at the top level (never inside loops, conditions, or nested functions), and 2) Only call hooks from React function components or custom hooks. Internally, React stores hooks as a singly-linked list on the Fiber node. It relies on the exact same execution order on every render to map hook state to its corresponding Fiber node record.",
      "Placing a hook inside an if statement shifts the indices in the linked list, causing subsequent hooks to receive mismatched state data."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "rules-of-hooks",
      "fiber-internals",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How do you build a robust custom hook useDebounce<T>(value: T, delay: number): T in React?",
    "answer": "Maintain state for debouncedValue. Inside useEffect with dependencies [value, delay], set a setTimeout to update debouncedValue after delay. In the effect cleanup function, call clearTimeout(handler). The debounced value only updates after the delay has passed with no new input.",
    "explanation": "Encapsulates timer management, state synchronization, and cleanup in a reusable utility.",
    "interviewAnswer": "Maintain state for debouncedValue. Inside useEffect with dependencies [value, delay], set a setTimeout to update debouncedValue after delay. In the effect cleanup function, call clearTimeout(handler). The debounced value only updates after the delay has passed with no new input. Encapsulates timer management, state synchronization, and cleanup in a reusable utility.",
    "importantPoints": [
      "Maintain state for debouncedValue. Inside useEffect with dependencies [value, delay], set a setTimeout to update debouncedValue after delay. In the effect cleanup function, call clearTimeout(handler). The debounced value only updates after the delay has passed with no new input.",
      "Encapsulates timer management, state synchronization, and cleanup in a reusable utility."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "custom-hooks",
      "usedebounce",
      "timers"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How do you write a custom hook useOnlineStatus() using useSyncExternalStore to track browser connectivity?",
    "answer": "Define subscribe function: (callback) => { window.addEventListener(\"online\", callback); window.addEventListener(\"offline\", callback); return () => { window.removeEventListener(\"online\", callback); window.removeEventListener(\"offline\", callback); }; }. Define getSnapshot: () => navigator.onLine. Return useSyncExternalStore(subscribe, getSnapshot, () => true).",
    "explanation": "Demonstrates modern best practice for reading browser APIs without manual useEffect/useState boilerplate and SSR-safe hydration.",
    "interviewAnswer": "Define subscribe function: (callback) => { window.addEventListener(\"online\", callback); window.addEventListener(\"offline\", callback); return () => { window.removeEventListener(\"online\", callback); window.removeEventListener(\"offline\", callback); }; }. Define getSnapshot: () => navigator.onLine. Return useSyncExternalStore(subscribe, getSnapshot, () => true). Demonstrates modern best practice for reading browser APIs without manual useEffect/useState boilerplate and SSR-safe hydration.",
    "importantPoints": [
      "Define subscribe function: (callback) => { window.addEventListener(\"online\", callback); window.addEventListener(\"offline\", callback); return () => { window.removeEventListener(\"online\", callback); window.removeEventListener(\"offline\", callback); }; }. Define getSnapshot: () => navigator.onLine. Return useSyncExternalStore(subscribe, getSnapshot, () => true).",
      "Demonstrates modern best practice for reading browser APIs without manual useEffect/useState boilerplate and SSR-safe hydration."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "usesyncexternalstore",
      "custom-hooks",
      "browser-apis"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is the \"use\" hook in React 19, and how does it break the traditional rule that hooks cannot be called conditionally?",
    "answer": "The \"use\" API in React 19 is a special primitive that can read promises or React Context directly. Unlike all other React hooks, \"use\" CAN be called conditionally inside if statements and loops. When passed a promise, it integrates directly with Suspense, suspending the component until the promise resolves.",
    "explanation": "Allows resolving async data or conditional theme contexts without creating wrapper components or hoisting hooks.",
    "interviewAnswer": "The \"use\" API in React 19 is a special primitive that can read promises or React Context directly. Unlike all other React hooks, \"use\" CAN be called conditionally inside if statements and loops. When passed a promise, it integrates directly with Suspense, suspending the component until the promise resolves. Allows resolving async data or conditional theme contexts without creating wrapper components or hoisting hooks.",
    "importantPoints": [
      "The \"use\" API in React 19 is a special primitive that can read promises or React Context directly. Unlike all other React hooks, \"use\" CAN be called conditionally inside if statements and loops. When passed a promise, it integrates directly with Suspense, suspending the component until the promise resolves.",
      "Allows resolving async data or conditional theme contexts without creating wrapper components or hoisting hooks."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "react19",
      "use-api",
      "suspense"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is useActionState (formerly useFormState) in React 19, and how does it streamline form submission handling?",
    "answer": "useActionState manages async form actions: const [state, formAction, isPending] = useActionState(asyncAction, initialState). It automatically tracks the return state of the action, provides pending loading state (isPending), and handles form resetting without manual useState or try/catch boilerplate.",
    "explanation": "Native integration with HTML <form action={formAction}> allows forms to function progressively even before JavaScript hydrates.",
    "interviewAnswer": "useActionState manages async form actions: const [state, formAction, isPending] = useActionState(asyncAction, initialState). It automatically tracks the return state of the action, provides pending loading state (isPending), and handles form resetting without manual useState or try/catch boilerplate. Native integration with HTML <form action={formAction}> allows forms to function progressively even before JavaScript hydrates.",
    "importantPoints": [
      "useActionState manages async form actions: const [state, formAction, isPending] = useActionState(asyncAction, initialState). It automatically tracks the return state of the action, provides pending loading state (isPending), and handles form resetting without manual useState or try/catch boilerplate.",
      "Native integration with HTML <form action={formAction}> allows forms to function progressively even before JavaScript hydrates."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "react19",
      "useactionstate",
      "forms"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is useOptimistic in React 19, and how does it implement instant optimistic UI updates during async server actions?",
    "answer": "useOptimistic allows rendering an immediate, temporary UI state while an async background mutation is pending: const [optimisticItems, setOptimisticItems] = useOptimistic(items, (current, newItem) => [...current, newItem]). Once the server action completes or fails, React automatically reverts the UI back to the actual server state.",
    "explanation": "Eliminates complex manual rollback logic when server requests fail or require retry.",
    "interviewAnswer": "useOptimistic allows rendering an immediate, temporary UI state while an async background mutation is pending: const [optimisticItems, setOptimisticItems] = useOptimistic(items, (current, newItem) => [...current, newItem]). Once the server action completes or fails, React automatically reverts the UI back to the actual server state. Eliminates complex manual rollback logic when server requests fail or require retry.",
    "importantPoints": [
      "useOptimistic allows rendering an immediate, temporary UI state while an async background mutation is pending: const [optimisticItems, setOptimisticItems] = useOptimistic(items, (current, newItem) => [...current, newItem]). Once the server action completes or fails, React automatically reverts the UI back to the actual server state.",
      "Eliminates complex manual rollback logic when server requests fail or require retry."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "hooks",
      "react19",
      "useoptimistic",
      "optimistic-ui"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How does a custom hook differ from a standard JavaScript helper function, and when should you choose one over the other?",
    "answer": "A custom hook is a function whose name starts with \"use\" that invokes other React hooks (useState, useEffect, useContext). If a utility function only performs data manipulation without accessing React lifecycle or state hooks, it should be a pure utility function. Custom hooks should only be created to share stateful logic.",
    "explanation": "Overusing custom hooks for pure calculations adds unnecessary hook linked-list overhead.",
    "interviewAnswer": "A custom hook is a function whose name starts with \"use\" that invokes other React hooks (useState, useEffect, useContext). If a utility function only performs data manipulation without accessing React lifecycle or state hooks, it should be a pure utility function. Custom hooks should only be created to share stateful logic. Overusing custom hooks for pure calculations adds unnecessary hook linked-list overhead.",
    "importantPoints": [
      "A custom hook is a function whose name starts with \"use\" that invokes other React hooks (useState, useEffect, useContext). If a utility function only performs data manipulation without accessing React lifecycle or state hooks, it should be a pure utility function. Custom hooks should only be created to share stateful logic.",
      "Overusing custom hooks for pure calculations adds unnecessary hook linked-list overhead."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "custom-hooks",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How do you build a custom hook useEventListener(eventName, handler, element) that safely handles changing event handlers without re-registering the listener on every render?",
    "answer": "Store the handler in a mutable ref: const savedHandler = useRef(handler); useEffect(() => { savedHandler.current = handler; }, [handler]). In a second useEffect that depends on [eventName, element], attach a wrapper listener: const eventListener = (e) => savedHandler.current(e); target.addEventListener(eventName, eventListener); return () => target.removeEventListener(eventName, eventListener).",
    "explanation": "This common pattern keeps event listeners permanently registered while ensuring they always execute the freshest callback closure.",
    "interviewAnswer": "Store the handler in a mutable ref: const savedHandler = useRef(handler); useEffect(() => { savedHandler.current = handler; }, [handler]). In a second useEffect that depends on [eventName, element], attach a wrapper listener: const eventListener = (e) => savedHandler.current(e); target.addEventListener(eventName, eventListener); return () => target.removeEventListener(eventName, eventListener). This common pattern keeps event listeners permanently registered while ensuring they always execute the freshest callback closure.",
    "importantPoints": [
      "Store the handler in a mutable ref: const savedHandler = useRef(handler); useEffect(() => { savedHandler.current = handler; }, [handler]). In a second useEffect that depends on [eventName, element], attach a wrapper listener: const eventListener = (e) => savedHandler.current(e); target.addEventListener(eventName, eventListener); return () => target.removeEventListener(eventName, eventListener).",
      "This common pattern keeps event listeners permanently registered while ensuring they always execute the freshest callback closure."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "custom-hooks",
      "event-listeners",
      "performance"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Can two different components sharing the exact same custom hook share the underlying state values?",
    "answer": "No. Custom hooks share stateful LOGIC, not state itself. Each component calling the custom hook gets its own isolated instance of useState and useEffect in its personal Fiber node tree.",
    "explanation": "To share actual state values between multiple components, state must be lifted up to a common parent, placed in React Context, or stored in a global state store.",
    "interviewAnswer": "No. Custom hooks share stateful LOGIC, not state itself. Each component calling the custom hook gets its own isolated instance of useState and useEffect in its personal Fiber node tree. To share actual state values between multiple components, state must be lifted up to a common parent, placed in React Context, or stored in a global state store.",
    "importantPoints": [
      "No. Custom hooks share stateful LOGIC, not state itself. Each component calling the custom hook gets its own isolated instance of useState and useEffect in its personal Fiber node tree.",
      "To share actual state values between multiple components, state must be lifted up to a common parent, placed in React Context, or stored in a global state store."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "custom-hooks",
      "isolation",
      "state"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why should you never call hooks inside a loop like: items.map(item => useState(item))?",
    "answer": "If the items array length changes dynamically (e.g. adding or deleting an item), the total number and sequence of hook calls changes between renders. This desynchronizes React internal hook cursor and corrupts state across the entire component.",
    "explanation": "Extract the item into a dedicated child component (<ItemComponent item={item} key={item.id} />) that invokes the hook at its top level.",
    "interviewAnswer": "If the items array length changes dynamically (e.g. adding or deleting an item), the total number and sequence of hook calls changes between renders. This desynchronizes React internal hook cursor and corrupts state across the entire component. Extract the item into a dedicated child component (<ItemComponent item={item} key={item.id} />) that invokes the hook at its top level.",
    "importantPoints": [
      "If the items array length changes dynamically (e.g. adding or deleting an item), the total number and sequence of hook calls changes between renders. This desynchronizes React internal hook cursor and corrupts state across the entire component.",
      "Extract the item into a dedicated child component (<ItemComponent item={item} key={item.id} />) that invokes the hook at its top level."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "rules-of-hooks",
      "arrays",
      "gotcha"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "A useEffect listener on window scroll fires 100 times per second, causing frame drops. What is the best optimization pattern?",
    "answer": "Throttle the scroll listener or use requestAnimationFrame to batch DOM reads. Alternatively, use IntersectionObserver or CSS scroll-timeline instead of listening to window scroll events in React.",
    "explanation": "Listening to raw scroll events without throttling leads to heavy JavaScript execution and main thread jank.",
    "interviewAnswer": "Throttle the scroll listener or use requestAnimationFrame to batch DOM reads. Alternatively, use IntersectionObserver or CSS scroll-timeline instead of listening to window scroll events in React. Listening to raw scroll events without throttling leads to heavy JavaScript execution and main thread jank.",
    "importantPoints": [
      "Throttle the scroll listener or use requestAnimationFrame to batch DOM reads. Alternatively, use IntersectionObserver or CSS scroll-timeline instead of listening to window scroll events in React.",
      "Listening to raw scroll events without throttling leads to heavy JavaScript execution and main thread jank."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "useeffect",
      "scroll",
      "throttle"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How does React handle state updates when a component is unmounted during an ongoing asynchronous operation?",
    "answer": "In modern React, the state update is safely ignored without crashing the application. However, active network connections, WebSockets, or background timers should still be cleaned up using abort signals to avoid wasted bandwidth.",
    "explanation": "Uncleaned listeners or intervals can retain memory references, preventing the component instance from being garbage collected.",
    "interviewAnswer": "In modern React, the state update is safely ignored without crashing the application. However, active network connections, WebSockets, or background timers should still be cleaned up using abort signals to avoid wasted bandwidth. Uncleaned listeners or intervals can retain memory references, preventing the component instance from being garbage collected.",
    "importantPoints": [
      "In modern React, the state update is safely ignored without crashing the application. However, active network connections, WebSockets, or background timers should still be cleaned up using abort signals to avoid wasted bandwidth.",
      "Uncleaned listeners or intervals can retain memory references, preventing the component instance from being garbage collected."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Production / Real-World",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "unmount",
      "memory-leaks",
      "cleanup"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is the difference between passing an empty dependency array [] vs omitting the dependency array entirely in useEffect?",
    "answer": "Passing [] means the effect runs only once after the initial render (mount) and cleans up on unmount. Omitting the dependency array entirely means the effect executes after EVERY single render pass.",
    "explanation": "Omitting the array is often a mistake when setting up subscriptions, leading to duplicate listeners on every render.",
    "interviewAnswer": "Passing [] means the effect runs only once after the initial render (mount) and cleans up on unmount. Omitting the dependency array entirely means the effect executes after EVERY single render pass. Omitting the array is often a mistake when setting up subscriptions, leading to duplicate listeners on every render.",
    "importantPoints": [
      "Passing [] means the effect runs only once after the initial render (mount) and cleans up on unmount. Omitting the dependency array entirely means the effect executes after EVERY single render pass.",
      "Omitting the array is often a mistake when setting up subscriptions, leading to duplicate listeners on every render."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "useeffect",
      "dependencies"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How do you test a custom hook in isolation without rendering a complete UI component in React Testing Library?",
    "answer": "Use renderHook from @testing-library/react: const { result } = renderHook(() => useMyHook()); acts as a harness to trigger actions (via act(() => result.current.action())) and assert result.current state values.",
    "explanation": "renderHook wraps the hook inside a test component under the hood to manage its lifecycle.",
    "interviewAnswer": "Use renderHook from @testing-library/react: const { result } = renderHook(() => useMyHook()); acts as a harness to trigger actions (via act(() => result.current.action())) and assert result.current state values. renderHook wraps the hook inside a test component under the hood to manage its lifecycle.",
    "importantPoints": [
      "Use renderHook from @testing-library/react: const { result } = renderHook(() => useMyHook()); acts as a harness to trigger actions (via act(() => result.current.action())) and assert result.current state values.",
      "renderHook wraps the hook inside a test component under the hood to manage its lifecycle."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "testing",
      "react-testing-library"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why does accessing a ref.current inside the return JSX of a component create hydration errors in Next.js / SSR?",
    "answer": "During server rendering, refs are not attached to real DOM nodes (ref.current is undefined or initial value). If client hydration tries to render based on a ref attached during the DOM phase, HTML markup will differ between server and client, causing hydration mismatches.",
    "explanation": "Rendering markup should be purely driven by props and state.",
    "interviewAnswer": "During server rendering, refs are not attached to real DOM nodes (ref.current is undefined or initial value). If client hydration tries to render based on a ref attached during the DOM phase, HTML markup will differ between server and client, causing hydration mismatches. Rendering markup should be purely driven by props and state.",
    "importantPoints": [
      "During server rendering, refs are not attached to real DOM nodes (ref.current is undefined or initial value). If client hydration tries to render based on a ref attached during the DOM phase, HTML markup will differ between server and client, causing hydration mismatches.",
      "Rendering markup should be purely driven by props and state."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "useref",
      "ssr",
      "hydration"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How can you force a React functional component to re-render without changing any visible state?",
    "answer": "Call a dummy state updater: const [, forceUpdate] = useReducer(x => x + 1, 0); forceUpdate();. While possible, needing to force an update is an anti-pattern indicating improper state modeling or un-tracked mutable data.",
    "explanation": "Proper React applications should re-render naturally through immutable prop or state changes.",
    "interviewAnswer": "Call a dummy state updater: const [, forceUpdate] = useReducer(x => x + 1, 0); forceUpdate();. While possible, needing to force an update is an anti-pattern indicating improper state modeling or un-tracked mutable data. Proper React applications should re-render naturally through immutable prop or state changes.",
    "importantPoints": [
      "Call a dummy state updater: const [, forceUpdate] = useReducer(x => x + 1, 0); forceUpdate();. While possible, needing to force an update is an anti-pattern indicating improper state modeling or un-tracked mutable data.",
      "Proper React applications should re-render naturally through immutable prop or state changes."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "force-update",
      "anti-pattern"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How does useRef act as an \"instance variable\" equivalent from class components?",
    "answer": "In class components, you could attach instance properties: this.timerId = 123. In functional components, local variables reset on every render. useRef persists any mutable value across re-renders without triggering a new render when changed.",
    "explanation": "The ref object is bound to the Fiber node instance and stays alive until unmounted.",
    "interviewAnswer": "In class components, you could attach instance properties: this.timerId = 123. In functional components, local variables reset on every render. useRef persists any mutable value across re-renders without triggering a new render when changed. The ref object is bound to the Fiber node instance and stays alive until unmounted.",
    "importantPoints": [
      "In class components, you could attach instance properties: this.timerId = 123. In functional components, local variables reset on every render. useRef persists any mutable value across re-renders without triggering a new render when changed.",
      "The ref object is bound to the Fiber node instance and stays alive until unmounted."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "useref",
      "class-components",
      "instance-variables"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What happens if you throw an error inside useEffect vs inside the component render body?",
    "answer": "An error thrown inside the component render body is caught immediately by the nearest Error Boundary during the render phase. An error thrown inside useEffect occurs asynchronously during the commit/layout phase and will unmount the tree or crash unless caught by an Error Boundary or handled with try/catch.",
    "explanation": "Async errors in promises inside useEffect are unhandled promise rejections and bypass Error Boundaries unless caught.",
    "interviewAnswer": "An error thrown inside the component render body is caught immediately by the nearest Error Boundary during the render phase. An error thrown inside useEffect occurs asynchronously during the commit/layout phase and will unmount the tree or crash unless caught by an Error Boundary or handled with try/catch. Async errors in promises inside useEffect are unhandled promise rejections and bypass Error Boundaries unless caught.",
    "importantPoints": [
      "An error thrown inside the component render body is caught immediately by the nearest Error Boundary during the render phase. An error thrown inside useEffect occurs asynchronously during the commit/layout phase and will unmount the tree or crash unless caught by an Error Boundary or handled with try/catch.",
      "Async errors in promises inside useEffect are unhandled promise rejections and bypass Error Boundaries unless caught."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "useeffect",
      "error-boundaries",
      "error-handling"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How do you memoize an expensive object prop to prevent a memoized child from re-rendering on every parent render?",
    "answer": "Wrap the object creation in useMemo: const options = useMemo(() => ({ filter, sortBy }), [filter, sortBy]);. Pass this memoized object to the child so its reference remains unchanged between renders.",
    "explanation": "Passing an unmemoized inline object {{ filter, sortBy }} creates a new object in memory on every render, failing child React.memo shallow equality.",
    "interviewAnswer": "Wrap the object creation in useMemo: const options = useMemo(() => ({ filter, sortBy }), [filter, sortBy]);. Pass this memoized object to the child so its reference remains unchanged between renders. Passing an unmemoized inline object {{ filter, sortBy }} creates a new object in memory on every render, failing child React.memo shallow equality.",
    "importantPoints": [
      "Wrap the object creation in useMemo: const options = useMemo(() => ({ filter, sortBy }), [filter, sortBy]);. Pass this memoized object to the child so its reference remains unchanged between renders.",
      "Passing an unmemoized inline object {{ filter, sortBy }} creates a new object in memory on every render, failing child React.memo shallow equality."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usememo",
      "props",
      "react-memo"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why should you avoid copying props into useState initial state: const [name, setName] = useState(props.name)?",
    "answer": "useState initial value is only evaluated once during mount. If the parent passes an updated props.name later, the child component will ignore the new prop and retain the old state, causing state desynchronization.",
    "explanation": "If the prop represents source of truth, consume it directly from props; do not duplicate it into local state unless intentionally creating an editable draft.",
    "interviewAnswer": "useState initial value is only evaluated once during mount. If the parent passes an updated props.name later, the child component will ignore the new prop and retain the old state, causing state desynchronization. If the prop represents source of truth, consume it directly from props; do not duplicate it into local state unless intentionally creating an editable draft.",
    "importantPoints": [
      "useState initial value is only evaluated once during mount. If the parent passes an updated props.name later, the child component will ignore the new prop and retain the old state, causing state desynchronization.",
      "If the prop represents source of truth, consume it directly from props; do not duplicate it into local state unless intentionally creating an editable draft."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usestate",
      "props-in-state",
      "anti-pattern"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How do you build a custom hook useLocalStorage(key, initialValue) that synchronizes with browser localStorage?",
    "answer": "Initialize state with a lazy function reading from localStorage (falling back to initialValue). In useEffect or a custom setter function, update localStorage whenever the state changes, and optionally listen to window \"storage\" events to sync across browser tabs.",
    "explanation": "Guarantees state persistence and synchronizes multi-tab experiences seamlessly.",
    "interviewAnswer": "Initialize state with a lazy function reading from localStorage (falling back to initialValue). In useEffect or a custom setter function, update localStorage whenever the state changes, and optionally listen to window \"storage\" events to sync across browser tabs. Guarantees state persistence and synchronizes multi-tab experiences seamlessly.",
    "importantPoints": [
      "Initialize state with a lazy function reading from localStorage (falling back to initialValue). In useEffect or a custom setter function, update localStorage whenever the state changes, and optionally listen to window \"storage\" events to sync across browser tabs.",
      "Guarantees state persistence and synchronizes multi-tab experiences seamlessly."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "custom-hooks",
      "uselocalstorage",
      "storage"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is the execution order of multiple useEffect hooks declared within the same component?",
    "answer": "Multiple useEffect hooks execute in the exact order they are declared in the component code, from top to bottom, after the render phase completes.",
    "explanation": "Cleanups for those effects execute in the same declared order during subsequent re-renders and unmounts.",
    "interviewAnswer": "Multiple useEffect hooks execute in the exact order they are declared in the component code, from top to bottom, after the render phase completes. Cleanups for those effects execute in the same declared order during subsequent re-renders and unmounts.",
    "importantPoints": [
      "Multiple useEffect hooks execute in the exact order they are declared in the component code, from top to bottom, after the render phase completes.",
      "Cleanups for those effects execute in the same declared order during subsequent re-renders and unmounts."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "useeffect",
      "execution-order"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How does React maintain hook state between renders without passing any identifier or key to useState?",
    "answer": "React uses an internal pointer index on the currently rendering Fiber node. As each hook executes in top-to-bottom sequence, React increments the pointer and retrieves the next hook record from the Fiber's memoizedState linked list.",
    "explanation": "This is why conditional hook calls break React: altering the call order causes the pointer to retrieve the wrong state hook.",
    "interviewAnswer": "React uses an internal pointer index on the currently rendering Fiber node. As each hook executes in top-to-bottom sequence, React increments the pointer and retrieves the next hook record from the Fiber's memoizedState linked list. This is why conditional hook calls break React: altering the call order causes the pointer to retrieve the wrong state hook.",
    "importantPoints": [
      "React uses an internal pointer index on the currently rendering Fiber node. As each hook executes in top-to-bottom sequence, React increments the pointer and retrieves the next hook record from the Fiber's memoizedState linked list.",
      "This is why conditional hook calls break React: altering the call order causes the pointer to retrieve the wrong state hook."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "fiber-internals",
      "architecture",
      "linked-list"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How can you prevent a heavy function passed to an event handler from capturing stale state without re-creating the function?",
    "answer": "Store the latest state value in a useRef (e.g. const stateRef = useRef(state); stateRef.current = state;) and read stateRef.current inside the stable callback function.",
    "explanation": "This allows the callback reference to remain permanently stable with an empty dependency array while always accessing current state.",
    "interviewAnswer": "Store the latest state value in a useRef (e.g. const stateRef = useRef(state); stateRef.current = state;) and read stateRef.current inside the stable callback function. This allows the callback reference to remain permanently stable with an empty dependency array while always accessing current state.",
    "importantPoints": [
      "Store the latest state value in a useRef (e.g. const stateRef = useRef(state); stateRef.current = state;) and read stateRef.current inside the stable callback function.",
      "This allows the callback reference to remain permanently stable with an empty dependency array while always accessing current state."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "useref",
      "closures",
      "performance"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why does console.log(state) immediately after setState(newValue) print the old value?",
    "answer": "setState does not immediately update the variable in the current execution block; it schedules a state update and requests a re-render. The current function scope still holds the previous state value.",
    "explanation": "The new state value will only be visible in the next render pass of the component.",
    "interviewAnswer": "setState does not immediately update the variable in the current execution block; it schedules a state update and requests a re-render. The current function scope still holds the previous state value. The new state value will only be visible in the next render pass of the component.",
    "importantPoints": [
      "setState does not immediately update the variable in the current execution block; it schedules a state update and requests a re-render. The current function scope still holds the previous state value.",
      "The new state value will only be visible in the next render pass of the component."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usestate",
      "async-updates",
      "code-prediction"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How does useTransition interact with Suspense boundaries during page navigation?",
    "answer": "Wrapping a navigation state update in startTransition tells React to keep showing the current page and wait for the new page Suspense data to load in the background before swapping screens, preventing jarring fallbacks and flash of loading spinners.",
    "explanation": "Provides smooth page transitions comparable to native mobile applications.",
    "interviewAnswer": "Wrapping a navigation state update in startTransition tells React to keep showing the current page and wait for the new page Suspense data to load in the background before swapping screens, preventing jarring fallbacks and flash of loading spinners. Provides smooth page transitions comparable to native mobile applications.",
    "importantPoints": [
      "Wrapping a navigation state update in startTransition tells React to keep showing the current page and wait for the new page Suspense data to load in the background before swapping screens, preventing jarring fallbacks and flash of loading spinners.",
      "Provides smooth page transitions comparable to native mobile applications."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usetransition",
      "suspense",
      "navigation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How do you create a custom hook useIntersectionObserver(ref, options) to detect when an element scrolls into view?",
    "answer": "Inside useEffect, instantiate new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), options). Call observer.observe(ref.current). In cleanup, call observer.disconnect(). Return isIntersecting boolean.",
    "explanation": "Enables lazy loading images, infinite scrolling, and impression tracking with clean teardown.",
    "interviewAnswer": "Inside useEffect, instantiate new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), options). Call observer.observe(ref.current). In cleanup, call observer.disconnect(). Return isIntersecting boolean. Enables lazy loading images, infinite scrolling, and impression tracking with clean teardown.",
    "importantPoints": [
      "Inside useEffect, instantiate new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting), options). Call observer.observe(ref.current). In cleanup, call observer.disconnect(). Return isIntersecting boolean.",
      "Enables lazy loading images, infinite scrolling, and impression tracking with clean teardown."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "intersection-observer",
      "custom-hooks"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is the difference between useMemo and React.memo?",
    "answer": "useMemo is a hook used inside a component function to memoize the result of an expression or calculation. React.memo is a higher-order component that wraps a component to prevent it from re-rendering if its props have not changed.",
    "explanation": "useMemo memoizes values inside components; React.memo memoizes entire components.",
    "interviewAnswer": "useMemo is a hook used inside a component function to memoize the result of an expression or calculation. React.memo is a higher-order component that wraps a component to prevent it from re-rendering if its props have not changed. useMemo memoizes values inside components; React.memo memoizes entire components.",
    "importantPoints": [
      "useMemo is a hook used inside a component function to memoize the result of an expression or calculation. React.memo is a higher-order component that wraps a component to prevent it from re-rendering if its props have not changed.",
      "useMemo memoizes values inside components; React.memo memoizes entire components."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usememo",
      "react-memo",
      "comparison"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why should you avoid creating a custom hook that simply wraps a single useState: function useCounter() { return useState(0); }?",
    "answer": "Creating a custom hook with zero additional logic adds unnecessary abstraction and indirection without adding reusability, testing benefits, or separation of concerns. Custom hooks should encapsulate cohesive business logic or side effects.",
    "explanation": "Keep code simple until shared patterns genuinely justify extraction.",
    "interviewAnswer": "Creating a custom hook with zero additional logic adds unnecessary abstraction and indirection without adding reusability, testing benefits, or separation of concerns. Custom hooks should encapsulate cohesive business logic or side effects. Keep code simple until shared patterns genuinely justify extraction.",
    "importantPoints": [
      "Creating a custom hook with zero additional logic adds unnecessary abstraction and indirection without adding reusability, testing benefits, or separation of concerns. Custom hooks should encapsulate cohesive business logic or side effects.",
      "Keep code simple until shared patterns genuinely justify extraction."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "custom-hooks",
      "code-smells"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How do you implement a cleanup function inside useEffect when connecting to a WebSocket server?",
    "answer": "Create const ws = new WebSocket(url); ws.onmessage = handleMessage; inside useEffect. In the return function, invoke ws.close() to gracefully close the connection when the component unmounts or the URL changes.",
    "explanation": "Failing to close the socket leads to socket connection leaks and duplicate messages receiving on multiple dangling sockets.",
    "interviewAnswer": "Create const ws = new WebSocket(url); ws.onmessage = handleMessage; inside useEffect. In the return function, invoke ws.close() to gracefully close the connection when the component unmounts or the URL changes. Failing to close the socket leads to socket connection leaks and duplicate messages receiving on multiple dangling sockets.",
    "importantPoints": [
      "Create const ws = new WebSocket(url); ws.onmessage = handleMessage; inside useEffect. In the return function, invoke ws.close() to gracefully close the connection when the component unmounts or the URL changes.",
      "Failing to close the socket leads to socket connection leaks and duplicate messages receiving on multiple dangling sockets."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "useeffect",
      "websocket",
      "cleanup"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is the effect of passing NaN to useState and updating it with NaN: setState(NaN)?",
    "answer": "Because Object.is(NaN, NaN) is true in JavaScript, React recognizes that the new value is identical to the previous value and bails out without re-rendering.",
    "explanation": "Traditional JavaScript === evaluates NaN === NaN as false, but React Object.is correctly recognizes identical NaN states.",
    "interviewAnswer": "Because Object.is(NaN, NaN) is true in JavaScript, React recognizes that the new value is identical to the previous value and bails out without re-rendering. Traditional JavaScript === evaluates NaN === NaN as false, but React Object.is correctly recognizes identical NaN states.",
    "importantPoints": [
      "Because Object.is(NaN, NaN) is true in JavaScript, React recognizes that the new value is identical to the previous value and bails out without re-rendering.",
      "Traditional JavaScript === evaluates NaN === NaN as false, but React Object.is correctly recognizes identical NaN states."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usestate",
      "object-is",
      "nan"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How do you handle canceling an ongoing fetch request using AbortController inside a custom hook useFetch(url)?",
    "answer": "Instantiate const controller = new AbortController(). Pass signal: controller.signal in fetch options. In useEffect return cleanup, call controller.abort(). In catch block, check if error.name === \"AbortError\" and suppress it to avoid logging false errors on unmount.",
    "explanation": "Standard production pattern for clean HTTP request lifecycles.",
    "interviewAnswer": "Instantiate const controller = new AbortController(). Pass signal: controller.signal in fetch options. In useEffect return cleanup, call controller.abort(). In catch block, check if error.name === \"AbortError\" and suppress it to avoid logging false errors on unmount. Standard production pattern for clean HTTP request lifecycles.",
    "importantPoints": [
      "Instantiate const controller = new AbortController(). Pass signal: controller.signal in fetch options. In useEffect return cleanup, call controller.abort(). In catch block, check if error.name === \"AbortError\" and suppress it to avoid logging false errors on unmount.",
      "Standard production pattern for clean HTTP request lifecycles."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "abort-controller",
      "data-fetching",
      "custom-hooks"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why does useLayoutEffect cause a warning when rendered on the server in Next.js, and how can you safely resolve it?",
    "answer": "useLayoutEffect requires direct access to DOM layout which does not exist on the server during SSR. To resolve it safely, use standard useEffect, or use a custom isomorphic hook that uses useLayoutEffect on the client and useEffect on the server.",
    "explanation": "The warning warns that DOM mutations cannot be executed before server paint.",
    "interviewAnswer": "useLayoutEffect requires direct access to DOM layout which does not exist on the server during SSR. To resolve it safely, use standard useEffect, or use a custom isomorphic hook that uses useLayoutEffect on the client and useEffect on the server. The warning warns that DOM mutations cannot be executed before server paint.",
    "importantPoints": [
      "useLayoutEffect requires direct access to DOM layout which does not exist on the server during SSR. To resolve it safely, use standard useEffect, or use a custom isomorphic hook that uses useLayoutEffect on the client and useEffect on the server.",
      "The warning warns that DOM mutations cannot be executed before server paint."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "uselayouteffect",
      "ssr",
      "nextjs"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How can you measure the render time of a specific component using the React Profiler API or custom performance hooks?",
    "answer": "Wrap the component in <Profiler id=\"MyComponent\" onRender={onRenderCallback}>. The callback receives actualDuration, baseDuration, startTime, and commitTime to measure render performance precisely.",
    "explanation": "Useful for automated performance monitoring and logging regression metrics to analytics.",
    "interviewAnswer": "Wrap the component in <Profiler id=\"MyComponent\" onRender={onRenderCallback}>. The callback receives actualDuration, baseDuration, startTime, and commitTime to measure render performance precisely. Useful for automated performance monitoring and logging regression metrics to analytics.",
    "importantPoints": [
      "Wrap the component in <Profiler id=\"MyComponent\" onRender={onRenderCallback}>. The callback receives actualDuration, baseDuration, startTime, and commitTime to measure render performance precisely.",
      "Useful for automated performance monitoring and logging regression metrics to analytics."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "profiler",
      "performance-monitoring"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What happens when you return a value other than a function from a useEffect callback: return 123;?",
    "answer": "React will raise a console warning or runtime error: \"An effect function must not return anything besides a function, which is used for clean-up. You returned: 123\". Only functions or undefined are permitted return values.",
    "explanation": "React expects the return value to be callable as cleanup during unmount and re-render.",
    "interviewAnswer": "React will raise a console warning or runtime error: \"An effect function must not return anything besides a function, which is used for clean-up. You returned: 123\". Only functions or undefined are permitted return values. React expects the return value to be callable as cleanup during unmount and re-render.",
    "importantPoints": [
      "React will raise a console warning or runtime error: \"An effect function must not return anything besides a function, which is used for clean-up. You returned: 123\". Only functions or undefined are permitted return values.",
      "React expects the return value to be callable as cleanup during unmount and re-render."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "useeffect",
      "cleanup",
      "errors"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How do you build a custom hook useMediaQuery(query: string): boolean to build responsive components in React?",
    "answer": "Inside useSyncExternalStore or useEffect, create window.matchMedia(query). Subscribe to the change event to update state whenever the viewport matches or stops matching the media query. Return boolean isMatching.",
    "explanation": "Provides responsive UI logic in JavaScript without heavy window resize polling.",
    "interviewAnswer": "Inside useSyncExternalStore or useEffect, create window.matchMedia(query). Subscribe to the change event to update state whenever the viewport matches or stops matching the media query. Return boolean isMatching. Provides responsive UI logic in JavaScript without heavy window resize polling.",
    "importantPoints": [
      "Inside useSyncExternalStore or useEffect, create window.matchMedia(query). Subscribe to the change event to update state whenever the viewport matches or stops matching the media query. Return boolean isMatching.",
      "Provides responsive UI logic in JavaScript without heavy window resize polling."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "custom-hooks",
      "media-queries",
      "responsive"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why can you not use async / await directly inside useMemo: useMemo(async () => calculate(), [])?",
    "answer": "useMemo expects a synchronous calculation and returns the immediate return value. An async function returns a Promise object, so useMemo will memoize the Promise rather than the resolved value.",
    "explanation": "For asynchronous data handling, use useEffect with state, TanStack Query, or React 19 \"use\" hook.",
    "interviewAnswer": "useMemo expects a synchronous calculation and returns the immediate return value. An async function returns a Promise object, so useMemo will memoize the Promise rather than the resolved value. For asynchronous data handling, use useEffect with state, TanStack Query, or React 19 \"use\" hook.",
    "importantPoints": [
      "useMemo expects a synchronous calculation and returns the immediate return value. An async function returns a Promise object, so useMemo will memoize the Promise rather than the resolved value.",
      "For asynchronous data handling, use useEffect with state, TanStack Query, or React 19 \"use\" hook."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usememo",
      "async-await",
      "gotcha"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How does useDebugValue help developers when creating complex custom hooks?",
    "answer": "useDebugValue formats and displays custom label information for custom hooks inside React Developer Tools, making inspection easier during debugging without cluttering production console logs.",
    "explanation": "Can accept an optional formatting function as a second argument to defer expensive string formatting until React DevTools is actually open.",
    "interviewAnswer": "useDebugValue formats and displays custom label information for custom hooks inside React Developer Tools, making inspection easier during debugging without cluttering production console logs. Can accept an optional formatting function as a second argument to defer expensive string formatting until React DevTools is actually open.",
    "importantPoints": [
      "useDebugValue formats and displays custom label information for custom hooks inside React Developer Tools, making inspection easier during debugging without cluttering production console logs.",
      "Can accept an optional formatting function as a second argument to defer expensive string formatting until React DevTools is actually open."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usedebugvalue",
      "devtools",
      "debugging"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How does React handle updating state with a new object that has identical property keys and values: setState({ a: 1 }) after state is already { a: 1 }?",
    "answer": "Because { a: 1 } !== { a: 1 } in JavaScript reference comparison, Object.is evaluates them as different references. React will trigger a complete re-render of the component and its children.",
    "explanation": "Reference equality drives React state bailouts. Mutating or creating new objects always triggers re-rendering.",
    "interviewAnswer": "Because { a: 1 } !== { a: 1 } in JavaScript reference comparison, Object.is evaluates them as different references. React will trigger a complete re-render of the component and its children. Reference equality drives React state bailouts. Mutating or creating new objects always triggers re-rendering.",
    "importantPoints": [
      "Because { a: 1 } !== { a: 1 } in JavaScript reference comparison, Object.is evaluates them as different references. React will trigger a complete re-render of the component and its children.",
      "Reference equality drives React state bailouts. Mutating or creating new objects always triggers re-rendering."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usestate",
      "reference-equality",
      "code-prediction"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How do you create a custom hook useLockBodyScroll() to prevent background scrolling when a modal opens?",
    "answer": "Inside useLayoutEffect or useEffect, store original overflow: const originalStyle = window.getComputedStyle(document.body).overflow; document.body.style.overflow = \"hidden\"; return () => { document.body.style.overflow = originalStyle; };.",
    "explanation": "Cleanup guarantees that background scrolling is always restored when the modal unmounts.",
    "interviewAnswer": "Inside useLayoutEffect or useEffect, store original overflow: const originalStyle = window.getComputedStyle(document.body).overflow; document.body.style.overflow = \"hidden\"; return () => { document.body.style.overflow = originalStyle; };. Cleanup guarantees that background scrolling is always restored when the modal unmounts.",
    "importantPoints": [
      "Inside useLayoutEffect or useEffect, store original overflow: const originalStyle = window.getComputedStyle(document.body).overflow; document.body.style.overflow = \"hidden\"; return () => { document.body.style.overflow = originalStyle; };.",
      "Cleanup guarantees that background scrolling is always restored when the modal unmounts."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "custom-hooks",
      "modal",
      "scroll-lock"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is the purpose of the initialArg and init function pattern in useReducer, and how can it be used to reset state to its initial calculation?",
    "answer": "The init function computes initial state lazily from initialArg. Passing a reset action to the reducer can simply re-invoke init(initialArg) to reset state back to original pristine state cleanly.",
    "explanation": "Avoids repeating initial state calculation logic in multiple action handlers.",
    "interviewAnswer": "The init function computes initial state lazily from initialArg. Passing a reset action to the reducer can simply re-invoke init(initialArg) to reset state back to original pristine state cleanly. Avoids repeating initial state calculation logic in multiple action handlers.",
    "importantPoints": [
      "The init function computes initial state lazily from initialArg. Passing a reset action to the reducer can simply re-invoke init(initialArg) to reset state back to original pristine state cleanly.",
      "Avoids repeating initial state calculation logic in multiple action handlers."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usereducer",
      "state-reset",
      "patterns"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "How does React prioritize updates triggered inside startTransition compared to standard state updates?",
    "answer": "Standard state updates (e.g. typing, clicking) are assigned Urgent priority and rendered immediately. Updates inside startTransition are assigned Transition priority (non-urgent) and can be interrupted by new urgent events before finishing.",
    "explanation": "Concurrent React scheduler splits work into lanes, prioritizing urgent lanes over transition lanes.",
    "interviewAnswer": "Standard state updates (e.g. typing, clicking) are assigned Urgent priority and rendered immediately. Updates inside startTransition are assigned Transition priority (non-urgent) and can be interrupted by new urgent events before finishing. Concurrent React scheduler splits work into lanes, prioritizing urgent lanes over transition lanes.",
    "importantPoints": [
      "Standard state updates (e.g. typing, clicking) are assigned Urgent priority and rendered immediately. Updates inside startTransition are assigned Transition priority (non-urgent) and can be interrupted by new urgent events before finishing.",
      "Concurrent React scheduler splits work into lanes, prioritizing urgent lanes over transition lanes."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "usetransition",
      "concurrency",
      "lanes"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "What is the difference between a controlled hook and an uncontrolled hook pattern when creating reusable UI libraries?",
    "answer": "A controlled hook receives value and onChange from props, delegating state to the caller. An uncontrolled hook manages its own internal state with an optional defaultValue. A hybrid hook supports both by checking if value !== undefined.",
    "explanation": "Industry standard pattern used in Radix UI, Headless UI, and React Aria.",
    "interviewAnswer": "A controlled hook receives value and onChange from props, delegating state to the caller. An uncontrolled hook manages its own internal state with an optional defaultValue. A hybrid hook supports both by checking if value !== undefined. Industry standard pattern used in Radix UI, Headless UI, and React Aria.",
    "importantPoints": [
      "A controlled hook receives value and onChange from props, delegating state to the caller. An uncontrolled hook manages its own internal state with an optional defaultValue. A hybrid hook supports both by checking if value !== undefined.",
      "Industry standard pattern used in Radix UI, Headless UI, and React Aria."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "design-systems",
      "controlled-vs-uncontrolled"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "hooks",
    "question": "Why should you avoid defining a custom hook inside the body of a React component?",
    "answer": "Defining a hook inside a component redefines the hook function on every render, violating the static declaration requirement and preventing React linters and runtime from properly analyzing the hook structure.",
    "explanation": "Hooks must always be declared at the module root scope.",
    "interviewAnswer": "Defining a hook inside a component redefines the hook function on every render, violating the static declaration requirement and preventing React linters and runtime from properly analyzing the hook structure. Hooks must always be declared at the module root scope.",
    "importantPoints": [
      "Defining a hook inside a component redefines the hook function on every render, violating the static declaration requirement and preventing React linters and runtime from properly analyzing the hook structure.",
      "Hooks must always be declared at the module root scope."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "hooks",
      "rules-of-hooks",
      "best-practices"
    ]
  }
];
