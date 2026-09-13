import { SeedQuestion } from '../types';

export const reactPropsStateQuestions: SeedQuestion[] = [
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What is state in React, and how does it fundamentally differ from props?",
    "answer": "Props are external inputs passed down from parent components, immutable from the perspective of the receiving child. State is internal data managed and held within the component itself, which can change over time in response to user actions or network events to trigger re-renders.",
    "explanation": "Props allow parent components to configure children; state allows components to remember information and remain interactive.",
    "interviewAnswer": "Props are external inputs passed down from parent components, immutable from the perspective of the receiving child. State is internal data managed and held within the component itself, which can change over time in response to user actions or network events to trigger re-renders. Props allow parent components to configure children; state allows components to remember information and remain interactive.",
    "importantPoints": [
      "Props are external inputs passed down from parent components, immutable from the perspective of the receiving child. State is internal data managed and held within the component itself, which can change over time in response to user actions or network events to trigger re-renders.",
      "Props allow parent components to configure children; state allows components to remember information and remain interactive."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "props",
      "state",
      "fundamentals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "Why is state in React considered immutable, and what happens when you mutate state directly instead of using the setter function?",
    "answer": "Direct mutation (e.g. user.name = \"Bob\") mutates the existing object in memory without changing its reference. React reconciliation uses Object.is shallow equality to check if state changed; since the object reference is identical, React skips re-rendering, leaving the UI completely stale.",
    "explanation": "Always return a new object reference using the spread operator or functional update: setUser(prev => ({ ...prev, name: \"Bob\" })).",
    "interviewAnswer": "Direct mutation (e.g. user.name = \"Bob\") mutates the existing object in memory without changing its reference. React reconciliation uses Object.is shallow equality to check if state changed; since the object reference is identical, React skips re-rendering, leaving the UI completely stale. Always return a new object reference using the spread operator or functional update: setUser(prev => ({ ...prev, name: \"Bob\" })).",
    "importantPoints": [
      "Direct mutation (e.g. user.name = \"Bob\") mutates the existing object in memory without changing its reference. React reconciliation uses Object.is shallow equality to check if state changed; since the object reference is identical, React skips re-rendering, leaving the UI completely stale.",
      "Always return a new object reference using the spread operator or functional update: setUser(prev => ({ ...prev, name: \"Bob\" }))."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "immutability",
      "state",
      "reconciliation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What is derived state, and why is calculating values during render preferred over synchronizing them in useEffect?",
    "answer": "Derived state is any value that can be computed from existing props or state (e.g. const fullName = `${firstName} ${lastName}`). Storing derived values in separate state and synchronizing with useEffect causes extra render cycles, stale UI bugs, and redundant boilerplate. Calculate it inline during render or with useMemo if computationally expensive.",
    "explanation": "If value B depends purely on value A, do not store value B in useState. Calculate it on the fly during the render pass.",
    "interviewAnswer": "Derived state is any value that can be computed from existing props or state (e.g. const fullName = `${firstName} ${lastName}`). Storing derived values in separate state and synchronizing with useEffect causes extra render cycles, stale UI bugs, and redundant boilerplate. Calculate it inline during render or with useMemo if computationally expensive. If value B depends purely on value A, do not store value B in useState. Calculate it on the fly during the render pass.",
    "importantPoints": [
      "Derived state is any value that can be computed from existing props or state (e.g. const fullName = `${firstName} ${lastName}`). Storing derived values in separate state and synchronizing with useEffect causes extra render cycles, stale UI bugs, and redundant boilerplate. Calculate it inline during render or with useMemo if computationally expensive.",
      "If value B depends purely on value A, do not store value B in useState. Calculate it on the fly during the render pass."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "derived-state",
      "useeffect",
      "anti-patterns",
      "performance"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What is Prop Drilling, what problems does it create in large codebases, and what are 3 distinct architectural patterns to eliminate it?",
    "answer": "Prop drilling is the process of passing props through multiple layers of intermediate components that do not need the data themselves, merely to reach deeply nested children. It creates tight coupling and makes refactoring painful. Three solutions: 1) Component Composition (passing children or slots), 2) React Context API, and 3) Global state managers (Zustand, Redux Toolkit).",
    "explanation": "Component composition is often the best first step: rather than drilling user prop through 5 layers, pass <UserProfile user={user} /> directly into the top container children slot.",
    "interviewAnswer": "Prop drilling is the process of passing props through multiple layers of intermediate components that do not need the data themselves, merely to reach deeply nested children. It creates tight coupling and makes refactoring painful. Three solutions: 1) Component Composition (passing children or slots), 2) React Context API, and 3) Global state managers (Zustand, Redux Toolkit). Component composition is often the best first step: rather than drilling user prop through 5 layers, pass <UserProfile user={user} /> directly into the top container children slot.",
    "importantPoints": [
      "Prop drilling is the process of passing props through multiple layers of intermediate components that do not need the data themselves, merely to reach deeply nested children. It creates tight coupling and makes refactoring painful. Three solutions: 1) Component Composition (passing children or slots), 2) React Context API, and 3) Global state managers (Zustand, Redux Toolkit).",
      "Component composition is often the best first step: rather than drilling user prop through 5 layers, pass <UserProfile user={user} /> directly into the top container children slot."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "prop-drilling",
      "composition",
      "context",
      "state-management"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you determine the lowest common ancestor component when Lifting State Up in React?",
    "answer": "Identify all components that need to read or mutate the shared state. Traverse up the component hierarchy tree until you find the closest single parent component that sits above all of those consumers. Place the state in that ancestor, passing data down as props and change callbacks down to the children.",
    "explanation": "Keeping state in the lowest common ancestor prevents unnecessarily lifting state to the application root, preserving component modularity and limiting re-render scopes.",
    "interviewAnswer": "Identify all components that need to read or mutate the shared state. Traverse up the component hierarchy tree until you find the closest single parent component that sits above all of those consumers. Place the state in that ancestor, passing data down as props and change callbacks down to the children. Keeping state in the lowest common ancestor prevents unnecessarily lifting state to the application root, preserving component modularity and limiting re-render scopes.",
    "importantPoints": [
      "Identify all components that need to read or mutate the shared state. Traverse up the component hierarchy tree until you find the closest single parent component that sits above all of those consumers. Place the state in that ancestor, passing data down as props and change callbacks down to the children.",
      "Keeping state in the lowest common ancestor prevents unnecessarily lifting state to the application root, preserving component modularity and limiting re-render scopes."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "lifting-state",
      "architecture",
      "state-colocation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How does automatic batching work in React 18, and how does it behave across promises, setTimeout, and native event handlers?",
    "answer": "In React 18, all state updates—regardless of whether they originate inside React synthetic events, setTimeout timers, Promise.then callbacks, or native event listeners—are automatically batched into a single re-render pass at the end of the microtask.",
    "explanation": "In React 17, batching was limited to synthetic event handlers. React 18 uses createRoot to batch asynchronously across all execution contexts.",
    "interviewAnswer": "In React 18, all state updates—regardless of whether they originate inside React synthetic events, setTimeout timers, Promise.then callbacks, or native event listeners—are automatically batched into a single re-render pass at the end of the microtask. In React 17, batching was limited to synthetic event handlers. React 18 uses createRoot to batch asynchronously across all execution contexts.",
    "importantPoints": [
      "In React 18, all state updates—regardless of whether they originate inside React synthetic events, setTimeout timers, Promise.then callbacks, or native event listeners—are automatically batched into a single re-render pass at the end of the microtask.",
      "In React 17, batching was limited to synthetic event handlers. React 18 uses createRoot to batch asynchronously across all execution contexts."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "batching",
      "react18",
      "performance"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "When is a functional state update setState(prev => prev + 1) mandatory over setState(count + 1)?",
    "answer": "Functional updates are mandatory when the new state depends on the previous state and multiple updates occur within the same batch, inside asynchronous closures (setTimeout, promise callbacks), or when state setters are passed into memoized child components with empty dependency arrays.",
    "explanation": "Direct updates (setCount(count + 1)) capture the closure snapshot of count from the current render. If invoked twice in the same event, both read 0 and set 1.",
    "interviewAnswer": "Functional updates are mandatory when the new state depends on the previous state and multiple updates occur within the same batch, inside asynchronous closures (setTimeout, promise callbacks), or when state setters are passed into memoized child components with empty dependency arrays. Direct updates (setCount(count + 1)) capture the closure snapshot of count from the current render. If invoked twice in the same event, both read 0 and set 1.",
    "importantPoints": [
      "Functional updates are mandatory when the new state depends on the previous state and multiple updates occur within the same batch, inside asynchronous closures (setTimeout, promise callbacks), or when state setters are passed into memoized child components with empty dependency arrays.",
      "Direct updates (setCount(count + 1)) capture the closure snapshot of count from the current render. If invoked twice in the same event, both read 0 and set 1."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "functional-updates",
      "usestate",
      "batching"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What causes Stale State Closures in React, and how do you resolve them in asynchronous event handlers and useEffect hooks?",
    "answer": "A stale closure occurs when an asynchronous callback or effect captures a variable from an earlier render pass, retaining an outdated snapshot of state even after the component has re-rendered. Resolve it by: 1) Using functional state updates (setVal(prev => ...)), 2) Adding the state to the hook dependency array, or 3) Storing the latest value in a mutable ref.",
    "explanation": "JavaScript closures retain references to variables in their lexical scope at creation time. If an effect runs once on mount with [], any callback inside it retains initial render state forever.",
    "interviewAnswer": "A stale closure occurs when an asynchronous callback or effect captures a variable from an earlier render pass, retaining an outdated snapshot of state even after the component has re-rendered. Resolve it by: 1) Using functional state updates (setVal(prev => ...)), 2) Adding the state to the hook dependency array, or 3) Storing the latest value in a mutable ref. JavaScript closures retain references to variables in their lexical scope at creation time. If an effect runs once on mount with [], any callback inside it retains initial render state forever.",
    "importantPoints": [
      "A stale closure occurs when an asynchronous callback or effect captures a variable from an earlier render pass, retaining an outdated snapshot of state even after the component has re-rendered. Resolve it by: 1) Using functional state updates (setVal(prev => ...)), 2) Adding the state to the hook dependency array, or 3) Storing the latest value in a mutable ref.",
      "JavaScript closures retain references to variables in their lexical scope at creation time. If an effect runs once on mount with [], any callback inside it retains initial render state forever."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "stale-closures",
      "hooks",
      "javascript-closures",
      "debugging"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What is lazy state initialization in useState, and when should you use useState(() => expensiveFunction())?",
    "answer": "Lazy state initialization passes a function to useState (useState(initFn)). React executes the function only once on initial mount. If you pass an invocation directly (useState(expensiveFunction())), the expensive calculation executes on every single re-render, even though React discards its return value on subsequent renders.",
    "explanation": "Use lazy initialization when reading from localStorage, parsing large JSON schemas, or running cryptographic calculations.",
    "interviewAnswer": "Lazy state initialization passes a function to useState (useState(initFn)). React executes the function only once on initial mount. If you pass an invocation directly (useState(expensiveFunction())), the expensive calculation executes on every single re-render, even though React discards its return value on subsequent renders. Use lazy initialization when reading from localStorage, parsing large JSON schemas, or running cryptographic calculations.",
    "importantPoints": [
      "Lazy state initialization passes a function to useState (useState(initFn)). React executes the function only once on initial mount. If you pass an invocation directly (useState(expensiveFunction())), the expensive calculation executes on every single re-render, even though React discards its return value on subsequent renders.",
      "Use lazy initialization when reading from localStorage, parsing large JSON schemas, or running cryptographic calculations."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "react",
      "usestate",
      "lazy-initialization",
      "performance"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "When should you choose useReducer over multiple useState hooks in component state management?",
    "answer": "Use useReducer when: 1) State consists of complex nested objects or arrays, 2) Next state depends on multiple previous state values, 3) State transitions follow a clear finite state machine, or 4) You want to pass dispatch down deep trees instead of multiple callback props.",
    "explanation": "useReducer centralizes all state transition logic into a pure reducer function that can be easily unit-tested outside React.",
    "interviewAnswer": "Use useReducer when: 1) State consists of complex nested objects or arrays, 2) Next state depends on multiple previous state values, 3) State transitions follow a clear finite state machine, or 4) You want to pass dispatch down deep trees instead of multiple callback props. useReducer centralizes all state transition logic into a pure reducer function that can be easily unit-tested outside React.",
    "importantPoints": [
      "Use useReducer when: 1) State consists of complex nested objects or arrays, 2) Next state depends on multiple previous state values, 3) State transitions follow a clear finite state machine, or 4) You want to pass dispatch down deep trees instead of multiple callback props.",
      "useReducer centralizes all state transition logic into a pure reducer function that can be easily unit-tested outside React."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "react",
      "usereducer",
      "usestate",
      "state-management"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How does modeling state as a Finite State Machine (FSM) prevent impossible states like { isLoading: true, isError: true }?",
    "answer": "Instead of separate boolean flags (isLoading, isError, isSuccess) that can accidentally be true simultaneously, an FSM models state with a single status string: \"idle\" | \"loading\" | \"success\" | \"error\". State transitions only move between valid states, eliminating conflicting UI states.",
    "explanation": "An FSM guarantees that a component cannot simultaneously show a loading spinner and an error banner.",
    "interviewAnswer": "Instead of separate boolean flags (isLoading, isError, isSuccess) that can accidentally be true simultaneously, an FSM models state with a single status string: \"idle\" | \"loading\" | \"success\" | \"error\". State transitions only move between valid states, eliminating conflicting UI states. An FSM guarantees that a component cannot simultaneously show a loading spinner and an error banner.",
    "importantPoints": [
      "Instead of separate boolean flags (isLoading, isError, isSuccess) that can accidentally be true simultaneously, an FSM models state with a single status string: \"idle\" | \"loading\" | \"success\" | \"error\". State transitions only move between valid states, eliminating conflicting UI states.",
      "An FSM guarantees that a component cannot simultaneously show a loading spinner and an error banner."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "state-machines",
      "fsm",
      "error-prevention",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What is state normalization, and why is storing relational data as { byId: {}, allIds: [] } better than nested arrays in client state?",
    "answer": "Normalized state stores each entity once in a lookup table keyed by ID (byId), referencing relationships via arrays of IDs. This prevents duplicate data synchronization bugs, enables O(1) lookups and updates, and avoids deeply nested spread operations when modifying child entities.",
    "explanation": "Updating a nested comment inside a post inside an array of authors requires 4 levels of object cloning. In normalized state, updating a comment touches only comments.byId[commentId].",
    "interviewAnswer": "Normalized state stores each entity once in a lookup table keyed by ID (byId), referencing relationships via arrays of IDs. This prevents duplicate data synchronization bugs, enables O(1) lookups and updates, and avoids deeply nested spread operations when modifying child entities. Updating a nested comment inside a post inside an array of authors requires 4 levels of object cloning. In normalized state, updating a comment touches only comments.byId[commentId].",
    "importantPoints": [
      "Normalized state stores each entity once in a lookup table keyed by ID (byId), referencing relationships via arrays of IDs. This prevents duplicate data synchronization bugs, enables O(1) lookups and updates, and avoids deeply nested spread operations when modifying child entities.",
      "Updating a nested comment inside a post inside an array of authors requires 4 levels of object cloning. In normalized state, updating a comment touches only comments.byId[commentId]."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "state-normalization",
      "redux",
      "architecture",
      "data-structures"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "Why is copying props into state considered an anti-pattern in React, and what is the legitimate exception?",
    "answer": "Copying props into state (useState(props.value)) creates duplicate sources of truth: when the parent prop updates, the child state does NOT update automatically, causing stale UI bugs. The only legitimate exception is when the prop is explicitly intended as an initial default value that the child subsequently owns and manages independently (named initialValue or defaultValue).",
    "explanation": "If the child must reflect parent prop changes, read the prop directly rather than storing it in local state.",
    "interviewAnswer": "Copying props into state (useState(props.value)) creates duplicate sources of truth: when the parent prop updates, the child state does NOT update automatically, causing stale UI bugs. The only legitimate exception is when the prop is explicitly intended as an initial default value that the child subsequently owns and manages independently (named initialValue or defaultValue). If the child must reflect parent prop changes, read the prop directly rather than storing it in local state.",
    "importantPoints": [
      "Copying props into state (useState(props.value)) creates duplicate sources of truth: when the parent prop updates, the child state does NOT update automatically, causing stale UI bugs. The only legitimate exception is when the prop is explicitly intended as an initial default value that the child subsequently owns and manages independently (named initialValue or defaultValue).",
      "If the child must reflect parent prop changes, read the prop directly rather than storing it in local state."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "anti-patterns",
      "props-in-state",
      "single-source-of-truth"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "Why must props be treated as strictly read-only and immutable by receiving child components?",
    "answer": "Props represent the parent component state or configuration. Directly mutating props (e.g. props.user.name = \"Jane\") mutates the parent state behind the scenes without triggering parent reconciliation, violating unidirectional data flow and creating unpredictable cross-component bugs.",
    "explanation": "If a child needs to modify data, the parent must pass down an update callback function that the child invokes.",
    "interviewAnswer": "Props represent the parent component state or configuration. Directly mutating props (e.g. props.user.name = \"Jane\") mutates the parent state behind the scenes without triggering parent reconciliation, violating unidirectional data flow and creating unpredictable cross-component bugs. If a child needs to modify data, the parent must pass down an update callback function that the child invokes.",
    "importantPoints": [
      "Props represent the parent component state or configuration. Directly mutating props (e.g. props.user.name = \"Jane\") mutates the parent state behind the scenes without triggering parent reconciliation, violating unidirectional data flow and creating unpredictable cross-component bugs.",
      "If a child needs to modify data, the parent must pass down an update callback function that the child invokes."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "props",
      "immutability",
      "unidirectional-flow"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How does React handle default values for props in functional components using ES6 default parameters?",
    "answer": "Destructure props directly in the function parameter list with default values: function Card({ title = \"Untitled\", padding = 16 }). If the caller passes undefined or omits the prop, the default parameter takes effect; if the caller passes null, null is preserved.",
    "explanation": "ES6 default parameters are evaluated at call time and work seamlessly with TypeScript type inference.",
    "interviewAnswer": "Destructure props directly in the function parameter list with default values: function Card({ title = \"Untitled\", padding = 16 }). If the caller passes undefined or omits the prop, the default parameter takes effect; if the caller passes null, null is preserved. ES6 default parameters are evaluated at call time and work seamlessly with TypeScript type inference.",
    "importantPoints": [
      "Destructure props directly in the function parameter list with default values: function Card({ title = \"Untitled\", padding = 16 }). If the caller passes undefined or omits the prop, the default parameter takes effect; if the caller passes null, null is preserved.",
      "ES6 default parameters are evaluated at call time and work seamlessly with TypeScript type inference."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "props",
      "default-props",
      "es6"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "Why does passing an inline callback function as a prop to a child component wrapped in React.memo cause the child to re-render every time?",
    "answer": "On every parent render pass, JavaScript instantiates a brand new function reference for inline callbacks (() => doSomething()). Because React.memo uses shallow reference equality (Object.is), it sees a new function reference each time and forces the memoized child to re-render.",
    "explanation": "Stabilize callback references using the useCallback hook: const handleClick = useCallback(() => ..., [deps]).",
    "interviewAnswer": "On every parent render pass, JavaScript instantiates a brand new function reference for inline callbacks (() => doSomething()). Because React.memo uses shallow reference equality (Object.is), it sees a new function reference each time and forces the memoized child to re-render. Stabilize callback references using the useCallback hook: const handleClick = useCallback(() => ..., [deps]).",
    "importantPoints": [
      "On every parent render pass, JavaScript instantiates a brand new function reference for inline callbacks (() => doSomething()). Because React.memo uses shallow reference equality (Object.is), it sees a new function reference each time and forces the memoized child to re-render.",
      "Stabilize callback references using the useCallback hook: const handleClick = useCallback(() => ..., [deps])."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "react-memo",
      "usecallback",
      "performance",
      "reference-equality"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What is the boolean prop shorthand in JSX, and how does passing a prop without a value evaluate?",
    "answer": "In JSX, passing a prop name without an explicit value (e.g. <Modal open />) is syntactic shorthand for passing true (<Modal open={true} />). Omitting the prop entirely leaves it as undefined in the props object.",
    "explanation": "Matches HTML boolean attribute semantics (like disabled or required).",
    "interviewAnswer": "In JSX, passing a prop name without an explicit value (e.g. <Modal open />) is syntactic shorthand for passing true (<Modal open={true} />). Omitting the prop entirely leaves it as undefined in the props object. Matches HTML boolean attribute semantics (like disabled or required).",
    "importantPoints": [
      "In JSX, passing a prop name without an explicit value (e.g. <Modal open />) is syntactic shorthand for passing true (<Modal open={true} />). Omitting the prop entirely leaves it as undefined in the props object.",
      "Matches HTML boolean attribute semantics (like disabled or required)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "jsx",
      "props",
      "boolean-shorthand"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "When is spreading props {...props} appropriate, and when does it become an over-spreading anti-pattern?",
    "answer": "Spreading props is appropriate in reusable wrapper components (like HOCs, polymorphic UI elements, or custom input wrappers that forward standard HTML attributes). It becomes an anti-pattern when developers blindly spread unknown props onto DOM elements, leaking invalid custom attributes into the DOM and causing React console warnings.",
    "explanation": "Always destructure known custom props first, then spread remaining standard attributes via rest parameters: const { customProp, ...domProps } = props.",
    "interviewAnswer": "Spreading props is appropriate in reusable wrapper components (like HOCs, polymorphic UI elements, or custom input wrappers that forward standard HTML attributes). It becomes an anti-pattern when developers blindly spread unknown props onto DOM elements, leaking invalid custom attributes into the DOM and causing React console warnings. Always destructure known custom props first, then spread remaining standard attributes via rest parameters: const { customProp, ...domProps } = props.",
    "importantPoints": [
      "Spreading props is appropriate in reusable wrapper components (like HOCs, polymorphic UI elements, or custom input wrappers that forward standard HTML attributes). It becomes an anti-pattern when developers blindly spread unknown props onto DOM elements, leaking invalid custom attributes into the DOM and causing React console warnings.",
      "Always destructure known custom props first, then spread remaining standard attributes via rest parameters: const { customProp, ...domProps } = props."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "props-spreading",
      "anti-patterns",
      "best-practices"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What are the naming conventions for props in React, and why is distinguishing between onEvent and handleEvent recommended?",
    "answer": "The convention is: use \"onEvent\" for prop names passed to children (e.g. onSelect, onSubmit, onToggle), representing an event listener contract. Use \"handleEvent\" for the internal component function that actually executes the logic (e.g. handleSelect, handleSubmit).",
    "explanation": "This convention clearly distinguishes between the interface contract (prop) and the implementation handler.",
    "interviewAnswer": "The convention is: use \"onEvent\" for prop names passed to children (e.g. onSelect, onSubmit, onToggle), representing an event listener contract. Use \"handleEvent\" for the internal component function that actually executes the logic (e.g. handleSelect, handleSubmit). This convention clearly distinguishes between the interface contract (prop) and the implementation handler.",
    "importantPoints": [
      "The convention is: use \"onEvent\" for prop names passed to children (e.g. onSelect, onSubmit, onToggle), representing an event listener contract. Use \"handleEvent\" for the internal component function that actually executes the logic (e.g. handleSelect, handleSubmit).",
      "This convention clearly distinguishes between the interface contract (prop) and the implementation handler."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "naming-conventions",
      "props",
      "best-practices"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What is State Colocation, and how does it improve application maintainability and performance?",
    "answer": "State Colocation is the architectural practice of placing state as close as possible to the components that read and mutate it. Instead of keeping all state in a global store, state is kept local until it is truly needed by siblings or ancestors, reducing re-render radius and simplifying component deletion.",
    "explanation": "Colocating state ensures that when a component re-renders, only its immediate subtree re-renders, preventing application-wide performance degradation.",
    "interviewAnswer": "State Colocation is the architectural practice of placing state as close as possible to the components that read and mutate it. Instead of keeping all state in a global store, state is kept local until it is truly needed by siblings or ancestors, reducing re-render radius and simplifying component deletion. Colocating state ensures that when a component re-renders, only its immediate subtree re-renders, preventing application-wide performance degradation.",
    "importantPoints": [
      "State Colocation is the architectural practice of placing state as close as possible to the components that read and mutate it. Instead of keeping all state in a global store, state is kept local until it is truly needed by siblings or ancestors, reducing re-render radius and simplifying component deletion.",
      "Colocating state ensures that when a component re-renders, only its immediate subtree re-renders, preventing application-wide performance degradation."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "state-colocation",
      "architecture",
      "performance"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What is the difference between transient UI state, persistent client state, and server cache state?",
    "answer": "Transient UI state is ephemeral (e.g. modal open, dropdown expanded, hover tooltips) and dies on unmount. Persistent client state survives page changes (e.g. auth tokens, draft forms, user preferences in localStorage). Server cache state is a client-side mirror of backend database records (managed via TanStack Query/SWR) requiring revalidation, caching, and invalidation.",
    "explanation": "Confusing server cache state with client state leads to bloated global Redux stores filled with manual fetching flags.",
    "interviewAnswer": "Transient UI state is ephemeral (e.g. modal open, dropdown expanded, hover tooltips) and dies on unmount. Persistent client state survives page changes (e.g. auth tokens, draft forms, user preferences in localStorage). Server cache state is a client-side mirror of backend database records (managed via TanStack Query/SWR) requiring revalidation, caching, and invalidation. Confusing server cache state with client state leads to bloated global Redux stores filled with manual fetching flags.",
    "importantPoints": [
      "Transient UI state is ephemeral (e.g. modal open, dropdown expanded, hover tooltips) and dies on unmount. Persistent client state survives page changes (e.g. auth tokens, draft forms, user preferences in localStorage). Server cache state is a client-side mirror of backend database records (managed via TanStack Query/SWR) requiring revalidation, caching, and invalidation.",
      "Confusing server cache state with client state leads to bloated global Redux stores filled with manual fetching flags."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "state-categories",
      "server-state",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you implement optimistic state updates when a user likes a post, including error rollback if the network request fails?",
    "answer": "Immediately update local state to reflect the liked status (optimistic update). Then dispatch the API call. If the promise rejects, revert state back to the previous snapshot in the catch block and display an error toast.",
    "explanation": "React 19 formalizes this with the useOptimistic hook, which automatically handles rollback if the action transition fails.",
    "interviewAnswer": "Immediately update local state to reflect the liked status (optimistic update). Then dispatch the API call. If the promise rejects, revert state back to the previous snapshot in the catch block and display an error toast. React 19 formalizes this with the useOptimistic hook, which automatically handles rollback if the action transition fails.",
    "importantPoints": [
      "Immediately update local state to reflect the liked status (optimistic update). Then dispatch the API call. If the promise rejects, revert state back to the previous snapshot in the catch block and display an error toast.",
      "React 19 formalizes this with the useOptimistic hook, which automatically handles rollback if the action transition fails."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "react",
      "optimistic-ui",
      "error-handling",
      "state"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How does Object.is equality algorithm determine whether React should bail out of a component re-render when setState is called?",
    "answer": "React compares the new state with current state using Object.is. If Object.is(nextState, currentState) is true, React bails out of re-rendering the component and its children entirely.",
    "explanation": "Object.is behaves like ===, but correctly handles NaN (Object.is(NaN, NaN) is true) and +0 vs -0.",
    "interviewAnswer": "React compares the new state with current state using Object.is. If Object.is(nextState, currentState) is true, React bails out of re-rendering the component and its children entirely. Object.is behaves like ===, but correctly handles NaN (Object.is(NaN, NaN) is true) and +0 vs -0.",
    "importantPoints": [
      "React compares the new state with current state using Object.is. If Object.is(nextState, currentState) is true, React bails out of re-rendering the component and its children entirely.",
      "Object.is behaves like ===, but correctly handles NaN (Object.is(NaN, NaN) is true) and +0 vs -0."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "object-is",
      "reconciliation",
      "bailout"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you immutably append, prepend, insert at an index, remove, and update an item in an array in React state?",
    "answer": "Append: [...arr, item]. Prepend: [item, ...arr]. Insert at index: [...arr.slice(0, idx), item, ...arr.slice(idx)]. Remove: arr.filter(x => x.id !== targetId). Update: arr.map(x => x.id === targetId ? { ...x, ...updates } : x).",
    "explanation": "Never use mutating array methods like push, pop, shift, unshift, or splice on state arrays.",
    "interviewAnswer": "Append: [...arr, item]. Prepend: [item, ...arr]. Insert at index: [...arr.slice(0, idx), item, ...arr.slice(idx)]. Remove: arr.filter(x => x.id !== targetId). Update: arr.map(x => x.id === targetId ? { ...x, ...updates } : x). Never use mutating array methods like push, pop, shift, unshift, or splice on state arrays.",
    "importantPoints": [
      "Append: [...arr, item]. Prepend: [item, ...arr]. Insert at index: [...arr.slice(0, idx), item, ...arr.slice(idx)]. Remove: arr.filter(x => x.id !== targetId). Update: arr.map(x => x.id === targetId ? { ...x, ...updates } : x).",
      "Never use mutating array methods like push, pop, shift, unshift, or splice on state arrays."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "react",
      "immutability",
      "arrays",
      "state-manipulation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How does the Immer library simplify immutable state updates, and what are its performance trade-offs?",
    "answer": "Immer uses JavaScript Proxies to let developers write code that looks like direct mutations (draft.user.posts[0].likes++). Immer records mutations and produces a frozen, structurally shared immutable state tree. The trade-off is minor Proxy creation overhead, which is negligible for UI state but noticeable in high-frequency 60fps loops.",
    "explanation": "Redux Toolkit includes Immer out of the box in createSlice.",
    "interviewAnswer": "Immer uses JavaScript Proxies to let developers write code that looks like direct mutations (draft.user.posts[0].likes++). Immer records mutations and produces a frozen, structurally shared immutable state tree. The trade-off is minor Proxy creation overhead, which is negligible for UI state but noticeable in high-frequency 60fps loops. Redux Toolkit includes Immer out of the box in createSlice.",
    "importantPoints": [
      "Immer uses JavaScript Proxies to let developers write code that looks like direct mutations (draft.user.posts[0].likes++). Immer records mutations and produces a frozen, structurally shared immutable state tree. The trade-off is minor Proxy creation overhead, which is negligible for UI state but noticeable in high-frequency 60fps loops.",
      "Redux Toolkit includes Immer out of the box in createSlice."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "immer",
      "immutability",
      "proxies",
      "redux-toolkit"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "Why can reading from window.localStorage during initial state declaration cause hydration mismatches in Next.js or SSR apps, and how do you fix it?",
    "answer": "On the server, window is undefined (or has no user localStorage), rendering default state. In the browser, localStorage has saved data, rendering populated state. The HTML mismatch throws a hydration error. Fix it by initializing state with default server-safe data and syncing localStorage inside a useEffect hook that only runs on the client.",
    "explanation": "Alternatively, use a client-only mounting guard (const [mounted, setMounted] = useState(false)) before rendering client-stored data.",
    "interviewAnswer": "On the server, window is undefined (or has no user localStorage), rendering default state. In the browser, localStorage has saved data, rendering populated state. The HTML mismatch throws a hydration error. Fix it by initializing state with default server-safe data and syncing localStorage inside a useEffect hook that only runs on the client. Alternatively, use a client-only mounting guard (const [mounted, setMounted] = useState(false)) before rendering client-stored data.",
    "importantPoints": [
      "On the server, window is undefined (or has no user localStorage), rendering default state. In the browser, localStorage has saved data, rendering populated state. The HTML mismatch throws a hydration error. Fix it by initializing state with default server-safe data and syncing localStorage inside a useEffect hook that only runs on the client.",
      "Alternatively, use a client-only mounting guard (const [mounted, setMounted] = useState(false)) before rendering client-stored data."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "ssr",
      "hydration-mismatch",
      "localstorage",
      "nextjs"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "When should application state be synchronized with URL query parameters instead of component useState?",
    "answer": "State should live in URL query parameters whenever the state represents content filtering, search queries, pagination pages, active tabs, or sorting orders that users expect to bookmark, refresh, or share via a direct link.",
    "explanation": "Keeping search filters in useState means refreshing the page resets filters back to default, creating poor user experience.",
    "interviewAnswer": "State should live in URL query parameters whenever the state represents content filtering, search queries, pagination pages, active tabs, or sorting orders that users expect to bookmark, refresh, or share via a direct link. Keeping search filters in useState means refreshing the page resets filters back to default, creating poor user experience.",
    "importantPoints": [
      "State should live in URL query parameters whenever the state represents content filtering, search queries, pagination pages, active tabs, or sorting orders that users expect to bookmark, refresh, or share via a direct link.",
      "Keeping search filters in useState means refreshing the page resets filters back to default, creating poor user experience."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "url-state",
      "routing",
      "single-source-of-truth"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "Why is a specialized data-fetching library (TanStack Query or SWR) superior to storing API server data in Redux or useState?",
    "answer": "Server state has unique characteristics: it is asynchronous, shared, potentially stale, and requires caching, background refetching, deduplication of concurrent requests, pagination, and optimistic updates. Doing this manually in Redux requires thousands of lines of boilerplate that TanStack Query handles automatically.",
    "explanation": "Redux was built for client-owned state; server-cache libraries handle the complexities of remote data synchronization.",
    "interviewAnswer": "Server state has unique characteristics: it is asynchronous, shared, potentially stale, and requires caching, background refetching, deduplication of concurrent requests, pagination, and optimistic updates. Doing this manually in Redux requires thousands of lines of boilerplate that TanStack Query handles automatically. Redux was built for client-owned state; server-cache libraries handle the complexities of remote data synchronization.",
    "importantPoints": [
      "Server state has unique characteristics: it is asynchronous, shared, potentially stale, and requires caching, background refetching, deduplication of concurrent requests, pagination, and optimistic updates. Doing this manually in Redux requires thousands of lines of boilerplate that TanStack Query handles automatically.",
      "Redux was built for client-owned state; server-cache libraries handle the complexities of remote data synchronization."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "react",
      "server-state",
      "tanstack-query",
      "swr",
      "redux"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What are the pure function rules for a React useReducer reducer function, and why must it never generate random IDs or timestamps?",
    "answer": "A reducer must be strictly pure: given the same state and action, it must return the exact same new state with zero side effects. Generating random IDs (Math.random()) or timestamps (Date.now()) inside the reducer produces non-deterministic state, breaking time-travel debugging and causing mismatches during concurrent re-renders.",
    "explanation": "Any random values or timestamps should be generated in the action creator or dispatch call and passed inside action.payload.",
    "interviewAnswer": "A reducer must be strictly pure: given the same state and action, it must return the exact same new state with zero side effects. Generating random IDs (Math.random()) or timestamps (Date.now()) inside the reducer produces non-deterministic state, breaking time-travel debugging and causing mismatches during concurrent re-renders. Any random values or timestamps should be generated in the action creator or dispatch call and passed inside action.payload.",
    "importantPoints": [
      "A reducer must be strictly pure: given the same state and action, it must return the exact same new state with zero side effects. Generating random IDs (Math.random()) or timestamps (Date.now()) inside the reducer produces non-deterministic state, breaking time-travel debugging and causing mismatches during concurrent re-renders.",
      "Any random values or timestamps should be generated in the action creator or dispatch call and passed inside action.payload."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "usereducer",
      "pure-functions",
      "determinism"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "Why does updating React Context trigger re-renders in all consuming components even if they only use an un-updated property of the context value?",
    "answer": "React Context operates on whole-value reference equality. When the context Provider value changes, React flags every single component calling useContext(MyContext) for a re-render. React does not have built-in property-level selectors for context.",
    "explanation": "To solve this: 1) Split context into separate smaller contexts, 2) Split State Context from Dispatch Context, or 3) Use external stores with selectors (Zustand).",
    "interviewAnswer": "React Context operates on whole-value reference equality. When the context Provider value changes, React flags every single component calling useContext(MyContext) for a re-render. React does not have built-in property-level selectors for context. To solve this: 1) Split context into separate smaller contexts, 2) Split State Context from Dispatch Context, or 3) Use external stores with selectors (Zustand).",
    "importantPoints": [
      "React Context operates on whole-value reference equality. When the context Provider value changes, React flags every single component calling useContext(MyContext) for a re-render. React does not have built-in property-level selectors for context.",
      "To solve this: 1) Split context into separate smaller contexts, 2) Split State Context from Dispatch Context, or 3) Use external stores with selectors (Zustand)."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "react",
      "context-api",
      "performance",
      "re-rendering",
      "selectors"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How does splitting State Context from Dispatch Context optimize performance in large React applications?",
    "answer": "Dispatch functions (from useReducer or useState) are guaranteed to have stable identity and never change across renders. By placing state in StateContext and dispatch in DispatchContext, components that only need to trigger actions (like a button) consume DispatchContext and NEVER re-render when state updates.",
    "explanation": "This pattern prevents button and toolbar components from re-rendering every time the underlying data changes.",
    "interviewAnswer": "Dispatch functions (from useReducer or useState) are guaranteed to have stable identity and never change across renders. By placing state in StateContext and dispatch in DispatchContext, components that only need to trigger actions (like a button) consume DispatchContext and NEVER re-render when state updates. This pattern prevents button and toolbar components from re-rendering every time the underlying data changes.",
    "importantPoints": [
      "Dispatch functions (from useReducer or useState) are guaranteed to have stable identity and never change across renders. By placing state in StateContext and dispatch in DispatchContext, components that only need to trigger actions (like a button) consume DispatchContext and NEVER re-render when state updates.",
      "This pattern prevents button and toolbar components from re-rendering every time the underlying data changes."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "context-api",
      "performance",
      "architecture",
      "usereducer"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you build a custom usePrevious hook to track the previous value of a prop or state variable?",
    "answer": "Use a useRef. In a useEffect (which runs after render commits), update ref.current = value. Inside the hook body, return ref.current before the effect executes, which returns the value from the previous render pass.",
    "explanation": "Because useEffect executes after the render is committed to screen, returning ref.current during render yields the value stored in the prior pass.",
    "interviewAnswer": "Use a useRef. In a useEffect (which runs after render commits), update ref.current = value. Inside the hook body, return ref.current before the effect executes, which returns the value from the previous render pass. Because useEffect executes after the render is committed to screen, returning ref.current during render yields the value stored in the prior pass.",
    "importantPoints": [
      "Use a useRef. In a useEffect (which runs after render commits), update ref.current = value. Inside the hook body, return ref.current before the effect executes, which returns the value from the previous render pass.",
      "Because useEffect executes after the render is committed to screen, returning ref.current during render yields the value stored in the prior pass."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "custom-hooks",
      "useprevious",
      "useref"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you implement Undo and Redo functionality in React state management using state history stacks?",
    "answer": "Structure state as { past: [], present: initial, future: [] }. When a new action occurs, push present into past, set present to the new data, and clear future. On Undo: pop from past to present and push old present into future. On Redo: pop from future to present and push old present into past.",
    "explanation": "This can be packaged cleanly into a custom useUndoableReducer hook.",
    "interviewAnswer": "Structure state as { past: [], present: initial, future: [] }. When a new action occurs, push present into past, set present to the new data, and clear future. On Undo: pop from past to present and push old present into future. On Redo: pop from future to present and push old present into past. This can be packaged cleanly into a custom useUndoableReducer hook.",
    "importantPoints": [
      "Structure state as { past: [], present: initial, future: [] }. When a new action occurs, push present into past, set present to the new data, and clear future. On Undo: pop from past to present and push old present into future. On Redo: pop from future to present and push old present into past.",
      "This can be packaged cleanly into a custom useUndoableReducer hook."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "undo-redo",
      "state-machines",
      "usereducer"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you set up polling in React state using setInterval inside useEffect without causing stale closure bugs?",
    "answer": "In useEffect, set a setInterval timer that calls the fetch function. Ensure the effect returns a cleanup function calling clearInterval(id). To avoid stale closures when reading state inside the interval, either use a functional state update or store dynamic values in a ref.",
    "explanation": "Forgetting the clearInterval cleanup creates orphaned intervals that keep running in the background after component unmount.",
    "interviewAnswer": "In useEffect, set a setInterval timer that calls the fetch function. Ensure the effect returns a cleanup function calling clearInterval(id). To avoid stale closures when reading state inside the interval, either use a functional state update or store dynamic values in a ref. Forgetting the clearInterval cleanup creates orphaned intervals that keep running in the background after component unmount.",
    "importantPoints": [
      "In useEffect, set a setInterval timer that calls the fetch function. Ensure the effect returns a cleanup function calling clearInterval(id). To avoid stale closures when reading state inside the interval, either use a functional state update or store dynamic values in a ref.",
      "Forgetting the clearInterval cleanup creates orphaned intervals that keep running in the background after component unmount."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "polling",
      "setinterval",
      "useeffect",
      "cleanup"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you handle real-time WebSocket messages updating React state without causing high-frequency re-render stutter?",
    "answer": "Buffer incoming WebSocket messages in a mutable ref array instead of calling setState on every single message packet. Use requestAnimationFrame or a throttle interval (e.g. 100ms) to flush the buffered messages into state in batches.",
    "explanation": "If 200 WebSocket messages arrive per second, calling setState 200 times chokes React reconciliation. Batching in memory flushes at 60fps.",
    "interviewAnswer": "Buffer incoming WebSocket messages in a mutable ref array instead of calling setState on every single message packet. Use requestAnimationFrame or a throttle interval (e.g. 100ms) to flush the buffered messages into state in batches. If 200 WebSocket messages arrive per second, calling setState 200 times chokes React reconciliation. Batching in memory flushes at 60fps.",
    "importantPoints": [
      "Buffer incoming WebSocket messages in a mutable ref array instead of calling setState on every single message packet. Use requestAnimationFrame or a throttle interval (e.g. 100ms) to flush the buffered messages into state in batches.",
      "If 200 WebSocket messages arrive per second, calling setState 200 times chokes React reconciliation. Batching in memory flushes at 60fps."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "react",
      "websockets",
      "batching",
      "performance",
      "throttling"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "Why did React 18 remove the \"Can't perform a React state update on an unmounted component\" memory leak warning?",
    "answer": "The warning was misleading: setting state on an unmounted component does not cause a memory leak; the memory leak is caused by the uncancelled async operation (like an event listener or open promise) holding onto the component reference. Furthermore, in React 18 Concurrent features, components can be unmounted and remounted speculatively, making the warning noisy and counterproductive.",
    "explanation": "Developers were writing boilerplate isMounted refs that hid the true problem (uncancelled subscriptions).",
    "interviewAnswer": "The warning was misleading: setting state on an unmounted component does not cause a memory leak; the memory leak is caused by the uncancelled async operation (like an event listener or open promise) holding onto the component reference. Furthermore, in React 18 Concurrent features, components can be unmounted and remounted speculatively, making the warning noisy and counterproductive. Developers were writing boilerplate isMounted refs that hid the true problem (uncancelled subscriptions).",
    "importantPoints": [
      "The warning was misleading: setting state on an unmounted component does not cause a memory leak; the memory leak is caused by the uncancelled async operation (like an event listener or open promise) holding onto the component reference. Furthermore, in React 18 Concurrent features, components can be unmounted and remounted speculatively, making the warning noisy and counterproductive.",
      "Developers were writing boilerplate isMounted refs that hid the true problem (uncancelled subscriptions)."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "react18",
      "unmounted-warning",
      "memory-leaks"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "Predict the output of the following code when clicking the button: console.log(count) immediately following setCount(count + 1):",
    "answer": "The console log prints the OLD count value, not the incremented value. State updates in React are scheduled asynchronously; the local variable count in the current execution frame retains its closure value until the component re-renders.",
    "explanation": "Calling setCount schedules a re-render; it does not synchronously mutate the local variable in the executing function.",
    "interviewAnswer": "The console log prints the OLD count value, not the incremented value. State updates in React are scheduled asynchronously; the local variable count in the current execution frame retains its closure value until the component re-renders. Calling setCount schedules a re-render; it does not synchronously mutate the local variable in the executing function.",
    "importantPoints": [
      "The console log prints the OLD count value, not the incremented value. State updates in React are scheduled asynchronously; the local variable count in the current execution frame retains its closure value until the component re-renders.",
      "Calling setCount schedules a re-render; it does not synchronously mutate the local variable in the executing function."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "react",
      "usestate",
      "output-prediction",
      "asynchronous-state"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What causes the \"Too many re-renders. React limits the number of renders to prevent an infinite loop\" error, and how do you fix it?",
    "answer": "This occurs when a state setter is invoked directly inside the component render body (e.g. onClick={handleClick()} with parentheses, or calling setCount() at top level without an event or effect guard). React executes the setter, triggers a re-render, executes the setter again, and loops until React aborts at 50 iterations.",
    "explanation": "Pass function references to event handlers (onClick={handleClick} or onClick={() => handleClick()}) rather than calling them immediately.",
    "interviewAnswer": "This occurs when a state setter is invoked directly inside the component render body (e.g. onClick={handleClick()} with parentheses, or calling setCount() at top level without an event or effect guard). React executes the setter, triggers a re-render, executes the setter again, and loops until React aborts at 50 iterations. Pass function references to event handlers (onClick={handleClick} or onClick={() => handleClick()}) rather than calling them immediately.",
    "importantPoints": [
      "This occurs when a state setter is invoked directly inside the component render body (e.g. onClick={handleClick()} with parentheses, or calling setCount() at top level without an event or effect guard). React executes the setter, triggers a re-render, executes the setter again, and loops until React aborts at 50 iterations.",
      "Pass function references to event handlers (onClick={handleClick} or onClick={() => handleClick()}) rather than calling them immediately."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "infinite-loop",
      "too-many-rerenders",
      "troubleshooting"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "A child component local state resets unexpectedly every time its parent component re-renders. What is the most likely architectural bug?",
    "answer": "The parent component is declaring the child component function definition INSIDE the parent render body. On every parent re-render, a brand-new component function reference is created. React treats this as an entirely different component type, unmounting the previous child and remounting a new instance with fresh initial state.",
    "explanation": "Move the child component definition OUTSIDE the parent component file scope so its reference remains stable.",
    "interviewAnswer": "The parent component is declaring the child component function definition INSIDE the parent render body. On every parent re-render, a brand-new component function reference is created. React treats this as an entirely different component type, unmounting the previous child and remounting a new instance with fresh initial state. Move the child component definition OUTSIDE the parent component file scope so its reference remains stable.",
    "importantPoints": [
      "The parent component is declaring the child component function definition INSIDE the parent render body. On every parent re-render, a brand-new component function reference is created. React treats this as an entirely different component type, unmounting the previous child and remounting a new instance with fresh initial state.",
      "Move the child component definition OUTSIDE the parent component file scope so its reference remains stable."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "nested-components",
      "state-reset",
      "debugging"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you create a custom useToggle hook in React that manages boolean state with toggle, setTrue, and setFalse helpers?",
    "answer": "Wrap useState(initial) in a custom hook. Memoize toggle ((prev) => !prev), setTrue, and setFalse callbacks using useCallback so consumers can pass them to memoized children without breaking reference equality.",
    "explanation": "Provides clean ergonomic APIs for modals, drawers, and accordion toggles.",
    "interviewAnswer": "Wrap useState(initial) in a custom hook. Memoize toggle ((prev) => !prev), setTrue, and setFalse callbacks using useCallback so consumers can pass them to memoized children without breaking reference equality. Provides clean ergonomic APIs for modals, drawers, and accordion toggles.",
    "importantPoints": [
      "Wrap useState(initial) in a custom hook. Memoize toggle ((prev) => !prev), setTrue, and setFalse callbacks using useCallback so consumers can pass them to memoized children without breaking reference equality.",
      "Provides clean ergonomic APIs for modals, drawers, and accordion toggles."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "custom-hooks",
      "usetoggle",
      "boilerplate-reduction"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you preserve scroll position in React state when navigating back and forth between a list view and a detail view?",
    "answer": "Before navigating to the detail view, record window.scrollY (or listContainer.scrollTop) in session storage or a persistent state store. When returning to the list view, use a useLayoutEffect to restore the recorded scroll offset before browser paint.",
    "explanation": "useLayoutEffect runs synchronously before browser paint, preventing the user from seeing the page jump from top to the previous scroll position.",
    "interviewAnswer": "Before navigating to the detail view, record window.scrollY (or listContainer.scrollTop) in session storage or a persistent state store. When returning to the list view, use a useLayoutEffect to restore the recorded scroll offset before browser paint. useLayoutEffect runs synchronously before browser paint, preventing the user from seeing the page jump from top to the previous scroll position.",
    "importantPoints": [
      "Before navigating to the detail view, record window.scrollY (or listContainer.scrollTop) in session storage or a persistent state store. When returning to the list view, use a useLayoutEffect to restore the recorded scroll offset before browser paint.",
      "useLayoutEffect runs synchronously before browser paint, preventing the user from seeing the page jump from top to the previous scroll position."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "scroll-restoration",
      "uselayouteffect",
      "user-experience"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What is the difference between controlled state and uncontrolled state in a custom reusable UI component?",
    "answer": "A controlled custom component accepts \"value\" and \"onChange\" props from its parent. An uncontrolled custom component manages its own internal useState, optionally accepting \"defaultValue\". High-quality library components support both: if \"value\" is provided, act controlled; if not, fall back to internal uncontrolled state.",
    "explanation": "Libraries like Radix UI use a useControllableState hook to seamlessly support both paradigms.",
    "interviewAnswer": "A controlled custom component accepts \"value\" and \"onChange\" props from its parent. An uncontrolled custom component manages its own internal useState, optionally accepting \"defaultValue\". High-quality library components support both: if \"value\" is provided, act controlled; if not, fall back to internal uncontrolled state. Libraries like Radix UI use a useControllableState hook to seamlessly support both paradigms.",
    "importantPoints": [
      "A controlled custom component accepts \"value\" and \"onChange\" props from its parent. An uncontrolled custom component manages its own internal useState, optionally accepting \"defaultValue\". High-quality library components support both: if \"value\" is provided, act controlled; if not, fall back to internal uncontrolled state.",
      "Libraries like Radix UI use a useControllableState hook to seamlessly support both paradigms."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "controlled-uncontrolled",
      "custom-components",
      "design-systems"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "Why should you avoid storing DOM element references directly in React useState?",
    "answer": "Storing a DOM element in useState triggers an extra re-render when the node mounts. Furthermore, reading and setting DOM elements in state can cause circular dependencies and memory leaks. Direct DOM nodes belong in useRef, which holds mutable references without causing re-renders.",
    "explanation": "Use callback refs if you strictly need to execute logic when a DOM node attaches and detaches.",
    "interviewAnswer": "Storing a DOM element in useState triggers an extra re-render when the node mounts. Furthermore, reading and setting DOM elements in state can cause circular dependencies and memory leaks. Direct DOM nodes belong in useRef, which holds mutable references without causing re-renders. Use callback refs if you strictly need to execute logic when a DOM node attaches and detaches.",
    "importantPoints": [
      "Storing a DOM element in useState triggers an extra re-render when the node mounts. Furthermore, reading and setting DOM elements in state can cause circular dependencies and memory leaks. Direct DOM nodes belong in useRef, which holds mutable references without causing re-renders.",
      "Use callback refs if you strictly need to execute logic when a DOM node attaches and detaches."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "useref",
      "usestate",
      "dom-nodes",
      "anti-patterns"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What is a Callback Ref in React, and when is it superior to useRef for tracking DOM nodes?",
    "answer": "A Callback Ref is a function passed to the ref attribute (ref={node => ...}). React calls the function with the DOM node when it mounts, and with null when it unmounts. It is superior to useRef when you need to know the EXACT moment a DOM node attaches (e.g. measuring dimensions, focusing, or initializing a third-party canvas library) because useRef does not notify you when its .current changes.",
    "explanation": "useRef does not trigger re-renders or notify listeners when the DOM node is assigned.",
    "interviewAnswer": "A Callback Ref is a function passed to the ref attribute (ref={node => ...}). React calls the function with the DOM node when it mounts, and with null when it unmounts. It is superior to useRef when you need to know the EXACT moment a DOM node attaches (e.g. measuring dimensions, focusing, or initializing a third-party canvas library) because useRef does not notify you when its .current changes. useRef does not trigger re-renders or notify listeners when the DOM node is assigned.",
    "importantPoints": [
      "A Callback Ref is a function passed to the ref attribute (ref={node => ...}). React calls the function with the DOM node when it mounts, and with null when it unmounts. It is superior to useRef when you need to know the EXACT moment a DOM node attaches (e.g. measuring dimensions, focusing, or initializing a third-party canvas library) because useRef does not notify you when its .current changes.",
      "useRef does not trigger re-renders or notify listeners when the DOM node is assigned."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "callback-refs",
      "dom-measurement",
      "advanced"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How does React 19 Action state handling simplify optimistic state updates compared to manual useState management?",
    "answer": "React 19 useOptimistic integrates directly with async Form Actions and Transitions. When an action starts, useOptimistic displays the optimistic value; once the action completes or throws, React automatically rolls back the optimistic state without manual error catch blocks or rollback tracking.",
    "explanation": "Removes complex manual rollback logic from component state.",
    "interviewAnswer": "React 19 useOptimistic integrates directly with async Form Actions and Transitions. When an action starts, useOptimistic displays the optimistic value; once the action completes or throws, React automatically rolls back the optimistic state without manual error catch blocks or rollback tracking. Removes complex manual rollback logic from component state.",
    "importantPoints": [
      "React 19 useOptimistic integrates directly with async Form Actions and Transitions. When an action starts, useOptimistic displays the optimistic value; once the action completes or throws, React automatically rolls back the optimistic state without manual error catch blocks or rollback tracking.",
      "Removes complex manual rollback logic from component state."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "react19",
      "useoptimistic",
      "actions"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "Predict the outcome when passing an unmemoized function down 5 levels of pure components wrapped in React.memo:",
    "answer": "Every time the top-level parent component re-renders, a new function instance is created. Every single intermediate React.memo component receives a new prop reference and re-renders, completely defeating all 5 levels of memoization.",
    "explanation": "Memoization is only as strong as its weakest prop link. A single unmemoized function or object breaks the entire memoization chain.",
    "interviewAnswer": "Every time the top-level parent component re-renders, a new function instance is created. Every single intermediate React.memo component receives a new prop reference and re-renders, completely defeating all 5 levels of memoization. Memoization is only as strong as its weakest prop link. A single unmemoized function or object breaks the entire memoization chain.",
    "importantPoints": [
      "Every time the top-level parent component re-renders, a new function instance is created. Every single intermediate React.memo component receives a new prop reference and re-renders, completely defeating all 5 levels of memoization.",
      "Memoization is only as strong as its weakest prop link. A single unmemoized function or object breaks the entire memoization chain."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "react",
      "react-memo",
      "prop-drilling",
      "performance"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you handle pagination state in React, and why should the page number always reset to 1 when search filters change?",
    "answer": "When a search query or filter changes, the total matching records change. If a user was on page 8 of 10, and applies a filter matching only 2 pages, remaining on page 8 returns an empty dataset. Updating filters must always reset page to 1.",
    "explanation": "Best implemented by syncing both page and filter state in URL search parameters.",
    "interviewAnswer": "When a search query or filter changes, the total matching records change. If a user was on page 8 of 10, and applies a filter matching only 2 pages, remaining on page 8 returns an empty dataset. Updating filters must always reset page to 1. Best implemented by syncing both page and filter state in URL search parameters.",
    "importantPoints": [
      "When a search query or filter changes, the total matching records change. If a user was on page 8 of 10, and applies a filter matching only 2 pages, remaining on page 8 returns an empty dataset. Updating filters must always reset page to 1.",
      "Best implemented by syncing both page and filter state in URL search parameters."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Logical / Scenario-Based",
    "isImportant": false,
    "tags": [
      "react",
      "pagination",
      "filters",
      "state-management"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you create a custom useLocalStorage hook in React that stays synchronized across multiple browser tabs?",
    "answer": "Read initial value from localStorage (lazily). On state updates, write to localStorage. To sync across multiple browser tabs, attach a \"storage\" event listener to window in a useEffect. When another tab updates localStorage, the listener fires and updates local state.",
    "explanation": "The window \"storage\" event only fires in other tabs, making it the perfect cross-tab synchronization mechanism.",
    "interviewAnswer": "Read initial value from localStorage (lazily). On state updates, write to localStorage. To sync across multiple browser tabs, attach a \"storage\" event listener to window in a useEffect. When another tab updates localStorage, the listener fires and updates local state. The window \"storage\" event only fires in other tabs, making it the perfect cross-tab synchronization mechanism.",
    "importantPoints": [
      "Read initial value from localStorage (lazily). On state updates, write to localStorage. To sync across multiple browser tabs, attach a \"storage\" event listener to window in a useEffect. When another tab updates localStorage, the listener fires and updates local state.",
      "The window \"storage\" event only fires in other tabs, making it the perfect cross-tab synchronization mechanism."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "custom-hooks",
      "localstorage",
      "cross-tab-sync"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What is the difference between props validation using PropTypes vs TypeScript in modern React?",
    "answer": "PropTypes performs runtime validation in development mode in the browser. TypeScript performs compile-time static type checking during build time with zero runtime JavaScript bundle overhead. TypeScript is the universal modern standard, though PropTypes is still used in standalone JavaScript component libraries.",
    "explanation": "TypeScript catches errors during coding; PropTypes catches errors when the component renders in development.",
    "interviewAnswer": "PropTypes performs runtime validation in development mode in the browser. TypeScript performs compile-time static type checking during build time with zero runtime JavaScript bundle overhead. TypeScript is the universal modern standard, though PropTypes is still used in standalone JavaScript component libraries. TypeScript catches errors during coding; PropTypes catches errors when the component renders in development.",
    "importantPoints": [
      "PropTypes performs runtime validation in development mode in the browser. TypeScript performs compile-time static type checking during build time with zero runtime JavaScript bundle overhead. TypeScript is the universal modern standard, though PropTypes is still used in standalone JavaScript component libraries.",
      "TypeScript catches errors during coding; PropTypes catches errors when the component renders in development."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "typescript",
      "proptypes",
      "type-checking"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you build a debounced state updater for a slider or range input so the UI slider moves smoothly at 60fps while API calls are throttled?",
    "answer": "Separate local visual state from debounced API state: use local useState for the slider value so it updates synchronously on every mousemove with zero lag. Then use a debounced effect to dispatch the API call or expensive chart recalculation 300ms after the user stops dragging.",
    "explanation": "Never throttle the immediate visual slider state—throttle only the expensive side effect.",
    "interviewAnswer": "Separate local visual state from debounced API state: use local useState for the slider value so it updates synchronously on every mousemove with zero lag. Then use a debounced effect to dispatch the API call or expensive chart recalculation 300ms after the user stops dragging. Never throttle the immediate visual slider state—throttle only the expensive side effect.",
    "importantPoints": [
      "Separate local visual state from debounced API state: use local useState for the slider value so it updates synchronously on every mousemove with zero lag. Then use a debounced effect to dispatch the API call or expensive chart recalculation 300ms after the user stops dragging.",
      "Never throttle the immediate visual slider state—throttle only the expensive side effect."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "react",
      "sliders",
      "debouncing",
      "performance",
      "ux"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "Why does passing an inline arrow function to an event handler onClick={() => handleClick(id)} NOT necessarily hurt performance in standard components?",
    "answer": "Modern V8 engines allocate small arrow functions in microseconds. In standard components (not wrapped in React.memo), inline functions have virtually zero performance impact. Inline functions only cause performance problems when passed to memoized pure components or virtualized list items.",
    "explanation": "Prematurely wrapping every event handler in useCallback adds memory overhead and clutter without measurable benefit.",
    "interviewAnswer": "Modern V8 engines allocate small arrow functions in microseconds. In standard components (not wrapped in React.memo), inline functions have virtually zero performance impact. Inline functions only cause performance problems when passed to memoized pure components or virtualized list items. Prematurely wrapping every event handler in useCallback adds memory overhead and clutter without measurable benefit.",
    "importantPoints": [
      "Modern V8 engines allocate small arrow functions in microseconds. In standard components (not wrapped in React.memo), inline functions have virtually zero performance impact. Inline functions only cause performance problems when passed to memoized pure components or virtualized list items.",
      "Prematurely wrapping every event handler in useCallback adds memory overhead and clutter without measurable benefit."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "usecallback",
      "performance-myths",
      "arrow-functions"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you handle dirty form state tracking in React to detect whether any input has been modified from its original initial values?",
    "answer": "Store initialValues in a ref or initial state. In component render or a useMemo, compare current formValues against initialValues (e.g. JSON.stringify(formValues) !== JSON.stringify(initialValues) or shallow key comparison) to compute a boolean isDirty flag.",
    "explanation": "Use isDirty to enable the \"Save\" button and trigger unsaved change warnings.",
    "interviewAnswer": "Store initialValues in a ref or initial state. In component render or a useMemo, compare current formValues against initialValues (e.g. JSON.stringify(formValues) !== JSON.stringify(initialValues) or shallow key comparison) to compute a boolean isDirty flag. Use isDirty to enable the \"Save\" button and trigger unsaved change warnings.",
    "importantPoints": [
      "Store initialValues in a ref or initial state. In component render or a useMemo, compare current formValues against initialValues (e.g. JSON.stringify(formValues) !== JSON.stringify(initialValues) or shallow key comparison) to compute a boolean isDirty flag.",
      "Use isDirty to enable the \"Save\" button and trigger unsaved change warnings."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "forms",
      "dirty-state",
      "state-tracking"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What is the risk of using Date.now() or Math.random() as the default value in useState(Date.now()) during SSR?",
    "answer": "The server executes Date.now() during SSR generation. By the time the client browser hydrates seconds later, Date.now() returns a different timestamp. The client virtual DOM and server HTML mismatch, throwing a React Hydration Error.",
    "explanation": "Client-specific dynamic values must be initialized in useEffect after initial hydration completes.",
    "interviewAnswer": "The server executes Date.now() during SSR generation. By the time the client browser hydrates seconds later, Date.now() returns a different timestamp. The client virtual DOM and server HTML mismatch, throwing a React Hydration Error. Client-specific dynamic values must be initialized in useEffect after initial hydration completes.",
    "importantPoints": [
      "The server executes Date.now() during SSR generation. By the time the client browser hydrates seconds later, Date.now() returns a different timestamp. The client virtual DOM and server HTML mismatch, throwing a React Hydration Error.",
      "Client-specific dynamic values must be initialized in useEffect after initial hydration completes."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "ssr",
      "hydration",
      "dates",
      "random"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you pass multiple values through React Context without creating multiple nested Context Providers?",
    "answer": "Combine related values into a single state object provided by a single Context Provider: <AppContext.Provider value={{ user, theme, settings, dispatch }}>. Ensure the object is memoized with useMemo so consumers do not re-render unless one of the values changes.",
    "explanation": "Memoizing the value object prevents creating a new reference on every parent render.",
    "interviewAnswer": "Combine related values into a single state object provided by a single Context Provider: <AppContext.Provider value={{ user, theme, settings, dispatch }}>. Ensure the object is memoized with useMemo so consumers do not re-render unless one of the values changes. Memoizing the value object prevents creating a new reference on every parent render.",
    "importantPoints": [
      "Combine related values into a single state object provided by a single Context Provider: <AppContext.Provider value={{ user, theme, settings, dispatch }}>. Ensure the object is memoized with useMemo so consumers do not re-render unless one of the values changes.",
      "Memoizing the value object prevents creating a new reference on every parent render."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "context",
      "providers",
      "performance"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What is the purpose of React.memo second argument (arePropsEqual), and how do you use it for custom comparison?",
    "answer": "The second argument is a custom comparison function: React.memo(MyComponent, (prevProps, nextProps) => boolean). If it returns true, React skips re-rendering; if false, it re-renders. Unlike shouldComponentUpdate, returning true means props are equal.",
    "explanation": "Useful when props contain complex objects where only a single ID needs to be compared.",
    "interviewAnswer": "The second argument is a custom comparison function: React.memo(MyComponent, (prevProps, nextProps) => boolean). If it returns true, React skips re-rendering; if false, it re-renders. Unlike shouldComponentUpdate, returning true means props are equal. Useful when props contain complex objects where only a single ID needs to be compared.",
    "importantPoints": [
      "The second argument is a custom comparison function: React.memo(MyComponent, (prevProps, nextProps) => boolean). If it returns true, React skips re-rendering; if false, it re-renders. Unlike shouldComponentUpdate, returning true means props are equal.",
      "Useful when props contain complex objects where only a single ID needs to be compared."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "react",
      "react-memo",
      "arepropsequal",
      "custom-comparison"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "Predict the bug: const [items] = useState([...props.items]); Why does the list fail to update when props.items changes?",
    "answer": "useState only evaluates its initial value on component mount. When the parent passes a new props.items array, the child component useState ignores the new prop, keeping the stale initial array in state.",
    "explanation": "Read props.items directly instead of copying it into local useState.",
    "interviewAnswer": "useState only evaluates its initial value on component mount. When the parent passes a new props.items array, the child component useState ignores the new prop, keeping the stale initial array in state. Read props.items directly instead of copying it into local useState.",
    "importantPoints": [
      "useState only evaluates its initial value on component mount. When the parent passes a new props.items array, the child component useState ignores the new prop, keeping the stale initial array in state.",
      "Read props.items directly instead of copying it into local useState."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "react",
      "usestate",
      "props-copying",
      "anti-patterns",
      "bugs"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you handle keyboard focus trapping inside an active state drawer or modal dialog in React?",
    "answer": "Attach a keydown listener for the Tab key. Query all focusable elements (buttons, inputs, links). If Tab is pressed on the last element, wrap focus to the first element; if Shift+Tab is pressed on the first element, wrap focus to the last element.",
    "explanation": "Essential for accessibility (WCAG 2.1) so keyboard users cannot navigate behind open overlays.",
    "interviewAnswer": "Attach a keydown listener for the Tab key. Query all focusable elements (buttons, inputs, links). If Tab is pressed on the last element, wrap focus to the first element; if Shift+Tab is pressed on the first element, wrap focus to the last element. Essential for accessibility (WCAG 2.1) so keyboard users cannot navigate behind open overlays.",
    "importantPoints": [
      "Attach a keydown listener for the Tab key. Query all focusable elements (buttons, inputs, links). If Tab is pressed on the last element, wrap focus to the first element; if Shift+Tab is pressed on the first element, wrap focus to the last element.",
      "Essential for accessibility (WCAG 2.1) so keyboard users cannot navigate behind open overlays."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "focus-trap",
      "accessibility",
      "modal"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "What is the difference between shallow prop comparison and deep prop comparison in React memoization?",
    "answer": "Shallow comparison checks primitive equality and object reference identity (prevProps.user === nextProps.user). Deep comparison recursively checks every nested key and array index. Deep comparison is computationally expensive on large objects and often costs more CPU time than simply re-rendering the component.",
    "explanation": "React.memo uses shallow comparison by default because deep comparison is rarely cost-effective.",
    "interviewAnswer": "Shallow comparison checks primitive equality and object reference identity (prevProps.user === nextProps.user). Deep comparison recursively checks every nested key and array index. Deep comparison is computationally expensive on large objects and often costs more CPU time than simply re-rendering the component. React.memo uses shallow comparison by default because deep comparison is rarely cost-effective.",
    "importantPoints": [
      "Shallow comparison checks primitive equality and object reference identity (prevProps.user === nextProps.user). Deep comparison recursively checks every nested key and array index. Deep comparison is computationally expensive on large objects and often costs more CPU time than simply re-rendering the component.",
      "React.memo uses shallow comparison by default because deep comparison is rarely cost-effective."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "shallow-comparison",
      "deep-comparison",
      "react-memo"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "How do you structure global state in React when different parts of the application have different read/write frequencies?",
    "answer": "Segregate state by update frequency: keep high-frequency state (input text, scroll position, animations) local or in ref-based atomic stores (Zustand/Jotai). Keep low-frequency global state (user profile, theme, permissions) in React Context or standard stores. This prevents fast updates from triggering application-wide re-renders.",
    "explanation": "Placing rapid typing state in a global root Context causes typing lag across the entire application.",
    "interviewAnswer": "Segregate state by update frequency: keep high-frequency state (input text, scroll position, animations) local or in ref-based atomic stores (Zustand/Jotai). Keep low-frequency global state (user profile, theme, permissions) in React Context or standard stores. This prevents fast updates from triggering application-wide re-renders. Placing rapid typing state in a global root Context causes typing lag across the entire application.",
    "importantPoints": [
      "Segregate state by update frequency: keep high-frequency state (input text, scroll position, animations) local or in ref-based atomic stores (Zustand/Jotai). Keep low-frequency global state (user profile, theme, permissions) in React Context or standard stores. This prevents fast updates from triggering application-wide re-renders.",
      "Placing rapid typing state in a global root Context causes typing lag across the entire application."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "state-architecture",
      "performance",
      "context",
      "zustand"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "props-state",
    "question": "Why is setState in React 18 not guaranteed to run synchronously after flushSync in the presence of Error Boundaries or Suspense?",
    "answer": "If a component suspends or throws an error during flushSync, React cannot commit the work synchronously to the DOM. React catches the boundary, aborts the synchronous commit, and schedules the fallback UI to render according to boundary priorities.",
    "explanation": "flushSync forces synchronous execution only when rendering succeeds without suspension or errors.",
    "interviewAnswer": "If a component suspends or throws an error during flushSync, React cannot commit the work synchronously to the DOM. React catches the boundary, aborts the synchronous commit, and schedules the fallback UI to render according to boundary priorities. flushSync forces synchronous execution only when rendering succeeds without suspension or errors.",
    "importantPoints": [
      "If a component suspends or throws an error during flushSync, React cannot commit the work synchronously to the DOM. React catches the boundary, aborts the synchronous commit, and schedules the fallback UI to render according to boundary priorities.",
      "flushSync forces synchronous execution only when rendering succeeds without suspension or errors."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "flushsync",
      "error-boundaries",
      "suspense",
      "react18"
    ]
  }
];
