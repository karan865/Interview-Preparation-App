import { SeedQuestion } from '../types';

export const reactFundamentalsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is the Virtual DOM in React, and how does the reconciliation algorithm use it to update the browser DOM?",
    "answer": "The Virtual DOM is an in-memory tree representation of real DOM nodes constructed from React elements. When state changes occur, React creates a new virtual node tree, diffs it against the previous snapshot (reconciliation), and commits only the minimal set of batched mutations to the real browser DOM.",
    "explanation": "Direct browser DOM updates trigger expensive layout recalculations, reflows, and repaints. React minimizes these by computing deltas in plain JavaScript memory. In React 16+, the Fiber architecture manages this process in two phases: an interruptible render/reconciliation phase and a synchronous commit phase.",
    "interviewAnswer": "I view the Virtual DOM as an in-memory blueprint. Rather than imperatively mutating DOM nodes whenever data shifts, React generates a lightweight virtual representation, calculates the exact diff using its heuristic O(n) diffing algorithm, and flushes only the net changes in a single batch to the browser DOM.",
    "interviewTips": [
      "Clarify that the Virtual DOM is not necessarily faster than handwritten vanilla JS DOM operations, but it provides predictable performance and a declarative abstraction that eliminates direct DOM sync bugs."
    ],
    "importantPoints": [
      "In-memory representation of DOM nodes as lightweight JavaScript objects",
      "Uses reconciliation diffing with heuristics (different types produce different trees, keys maintain identity)",
      "Render phase calculates diffs; commit phase applies changes to actual DOM",
      "Enables declarative programming: UI = f(state)"
    ],
    "followUpQuestions": [
      "How does the React Fiber engine improve upon the older stack reconciler?",
      "Why is the render phase interruptible while the commit phase must be synchronous?"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "virtual-dom",
      "reconciliation",
      "fundamentals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What does \"declarative UI\" mean in React, and how does it contrast with imperative DOM manipulation?",
    "answer": "Declarative UI means specifying what the user interface should look like for any given application state, rather than imperatively coding the step-by-step instructions and DOM mutations needed to transition between states.",
    "explanation": "In imperative libraries (like vanilla JS or jQuery), developers manually select elements, clear children, create nodes, and attach event listeners. In React, components are pure projections of state: UI = f(state). Developers update state, and React determines how to reconcile the DOM.",
    "interviewAnswer": "Declarative programming shifts the focus from \"how\" to \"what\". In React, I write components that declare the desired DOM layout based on current props and state. When state changes, React figures out the optimal sequence of DOM updates behind the scenes.",
    "importantPoints": [
      "Declarative: declare the target state; React manages the DOM mutations",
      "Imperative: manually write steps (e.g. document.createElement, appendChild, removeChild)",
      "Prevents UI out-of-sync bugs where intermediate state transitions fail"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "declarative",
      "ui-paradigm"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What are pure functions in React, and why must component rendering logic be strictly pure?",
    "answer": "A pure function produces the exact same output given the identical inputs (props and state) and causes zero side effects outside its scope. In React, components must be pure functions so that React can safely call them multiple times, pause rendering, or re-render trees in concurrent mode without generating bugs.",
    "explanation": "If a component mutates an external variable, writes to local storage, or fetches data during its render pass, concurrent rendering (time-slicing) will repeat or abort those side effects unpredictably. All side effects belong inside event handlers or useEffect hooks.",
    "interviewAnswer": "Component rendering must be idempotent and free of side effects. Given the same props and state, the component should return identical JSX without modifying global variables or triggering DOM side effects. This guarantees consistency during React concurrent interruptions and strict mode double-invocations.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Impure vs Pure Component",
        "code": "// BAD: Impure component mutating external state during render\nlet renderCount = 0;\nfunction BadCounter() {\n  renderCount++; // External mutation!\n  return <div>Count: {renderCount}</div>;\n}\n\n// GOOD: Pure component relying only on props/state\nfunction GoodCounter({ count }) {\n  return <div>Count: {count}</div>;\n}",
        "explanation": "Mutating external variables causes unpredictability when React renders components multiple times."
      }
    ],
    "importantPoints": [
      "Same input props/state must always produce the same JSX",
      "No mutations of existing objects or external variables during render",
      "Side effects belong strictly in useEffect or event handlers",
      "Enables Concurrent React, caching, and deterministic time-travel debugging"
    ],
    "followUpQuestions": [
      "How does React StrictMode in development help detect impure rendering logic?"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "purity",
      "concurrent-mode"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is JSX, and what does the Babel/SWC compiler transform it into under the hood?",
    "answer": "JSX (JavaScript XML) is a syntactic extension for JavaScript that allows developers to write HTML-like structures directly inside JavaScript code. Compilers (Babel, SWC, or TypeScript) transform JSX elements into standard React.createElement() calls (or modern jsxRuntime jsx() functions), which return plain JavaScript objects called React Elements.",
    "explanation": "A JSX element like <div className=\"card\">Hello</div> compiles into jsx(\"div\", { className: \"card\", children: \"Hello\" }). This object has properties such as type, props, key, and ref, which React uses to construct its virtual Fiber tree.",
    "interviewAnswer": "JSX is syntactic sugar that compiles down to function calls—historically React.createElement and now the automatic JSX runtime jsx() function. These function calls evaluate to lightweight JavaScript objects describing what DOM nodes to produce.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "JSX Compilation",
        "code": "// Input JSX:\nconst element = <button className=\"btn\" onClick={handleClick}>Submit</button>;\n\n// Compiled JavaScript (Modern JSX Runtime):\nimport { jsx as _jsx } from 'react/jsx-runtime';\nconst element = _jsx('button', {\n  className: 'btn',\n  onClick: handleClick,\n  children: 'Submit'\n});",
        "explanation": "Compilers transform JSX tags into function calls that yield plain React element descriptors."
      }
    ],
    "importantPoints": [
      "JSX is not HTML; it is compiled JavaScript expressions",
      "Evaluates to plain JavaScript objects ({ type, props, key, ref })",
      "React 17+ uses the automatic JSX runtime (no need to import React manually for JSX)"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "jsx",
      "compiler",
      "babel"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "Why can a React component return only a single root element or Fragment, and what happens under the hood?",
    "answer": "A component function compiles down to a JavaScript function call (like jsx() or React.createElement()). In JavaScript, a function can return only one value or object expression. Returning multiple adjacent tags without a wrapper would be equivalent to returning multiple comma-separated values from a function, which is a syntax error.",
    "explanation": "Using a wrapper div adds unnecessary DOM node depth. React Fragments (<React.Fragment> or <></>) solve this by grouping children without creating an extra DOM node in the browser.",
    "interviewAnswer": "Because JSX compiles to function calls that return a single JavaScript element object, returning multiple sibling tags without a root wrapper is invalid JavaScript. React.Fragment lets us group siblings without introducing redundant DOM nodes.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Using React Fragments",
        "code": "// Syntax error: cannot return two expressions\n// return <h1>Title</h1><p>Description</p>;\n\n// Correct: Single root using Fragment\nfunction Card() {\n  return (\n    <>\n      <h1>Title</h1>\n      <p>Description</p>\n    </>\n  );\n}",
        "explanation": "Fragments group sibling elements without generating extra wrapper elements in the real DOM."
      }
    ],
    "importantPoints": [
      "JavaScript functions can return only one expression/value",
      "React.Fragment or <> syntax groups children without adding browser DOM nodes",
      "Keyed fragments (<React.Fragment key={item.id}>) must use explicit Fragment syntax"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "fragments",
      "jsx-syntax"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is a React Element, and how does it fundamentally differ from a React Component and a DOM node?",
    "answer": "A React Element is a lightweight, immutable plain JavaScript object describing a virtual DOM node (e.g. { type: \"div\", props: { children: \"Hi\" } }). A React Component is a function or class that accepts props and returns a tree of React Elements. A DOM node is an actual browser C++ representation living in the live browser document.",
    "explanation": "React Elements are inexpensive to instantiate and throw away. Components are blueprints containing logic, state, and lifecycle. React evaluates components to obtain elements, then reconciles those elements into real DOM nodes.",
    "interviewAnswer": "A React Component is a function that defines UI logic. When executed, it produces a tree of React Elements (plain JavaScript descriptors). React takes those elements, diffs them against prior snapshots, and creates or updates real browser DOM nodes.",
    "importantPoints": [
      "React Element: Plain object descriptor ({ type, props, key, ref, $$typeof })",
      "React Component: Function or class that returns React Elements",
      "DOM Node: Native browser tree entity with real geometry, styles, and events",
      "React Elements are immutable once created"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "element-vs-component",
      "dom"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is the purpose of the internal $$typeof property attached to React Elements?",
    "answer": "The $$typeof property is a Symbol (Symbol.for(\"react.element\")) attached to all valid React elements to protect applications against Cross-Site Scripting (XSS) attacks involving malicious JSON injection.",
    "explanation": "If an application accepts arbitrary user JSON from an API and renders it directly as JSX, an attacker could supply a forged React element with dangerous props (like dangerouslySetInnerHTML). Because JSON cannot contain JavaScript Symbols, JSON.parse cannot forge Symbol.for(\"react.element\"). React checks $$typeof and refuses to render forged objects.",
    "interviewAnswer": "React stamps every element with $$typeof: Symbol.for(\"react.element\") as a security boundary against XSS. Since JSON cannot represent Symbols, server responses or attacker payloads cannot forge valid React elements even if a developer unsafely passes raw parsed JSON to the renderer.",
    "importantPoints": [
      "Value is Symbol.for(\"react.element\")",
      "Prevents XSS through JSON injection of fake element objects",
      "JSON cannot serialize or transmit JavaScript Symbols"
    ],
    "followUpQuestions": [
      "What fallback does React use if the browser does not support ES6 Symbols?"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "security",
      "xss",
      "internals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is unidirectional data flow in React, and why is it a foundational architectural principle?",
    "answer": "Unidirectional data flow means data has one, and only one, single path of transfer throughout the application: from parent components down to child components via props. State lives in a single source of truth, and children request state changes by dispatching callbacks back up.",
    "explanation": "In two-way data binding (like AngularJS or Knockout), changing a model in a child view could invisibly mutate parent data, creating hard-to-trace cascading updates. One-way binding ensures that state mutations are explicit, predictable, and simple to debug because state transitions flow top-down.",
    "interviewAnswer": "Unidirectional data flow means state flows downwards via props, while user interactions trigger callbacks that flow upwards to mutate state at the owner component. This keeps state changes traceable, eliminates two-way synchronization bugs, and makes component trees modular.",
    "importantPoints": [
      "Props flow down, events/callbacks bubble up",
      "Ensures a single source of truth for every piece of state",
      "Simplifies reasoning and debugging compared to two-way data binding"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "unidirectional-flow",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "Predict the output of the following code when the button is clicked twice in quick succession:",
    "answer": "The rendered count displays 1 after the first click and 2 after the second click. Inside the onClick handler, count logs 0 on both consecutive invocations of the first click event.",
    "explanation": "In React 18+, state updates are batched automatically. When calling setCount(count + 1) twice with standard closures, both calls capture the same stale snapshot of count (0), so 0 + 1 evaluates to 1. To increment reliably by 2, functional updates must be used: setCount(prev => prev + 1).",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Counter Output Prediction",
        "code": "function Counter() {\n  const [count, setCount] = React.useState(0);\n\n  const handleClick = () => {\n    setCount(count + 1);\n    setCount(count + 1);\n    console.log('Current count:', count);\n  };\n\n  return <button onClick={handleClick}>Count: {count}</button>;\n}",
        "explanation": "State setters do not update the local count variable immediately within the current render frame."
      }
    ],
    "interviewAnswer": "Clicking the button will only increment count to 1, not 2. Both setCount calls read count from the current closure where it is 0. Additionally, the console log prints 0 because state updates are asynchronous and batched; the updated count is only visible during the subsequent render.",
    "importantPoints": [
      "State setters schedule a re-render; they do not mutate local closure variables synchronously",
      "Consecutive setCount(count + 1) calls override each other in the same batch",
      "Use functional updater setCount(prev => prev + 1) for consecutive state derivations"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "tags": [
      "react",
      "output-prediction",
      "usestate",
      "batching"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "A junior developer calls document.getElementById(\"title\").innerText = \"Updated\" inside a React component. Walk through why this is an anti-pattern and what bugs it causes.",
    "answer": "Directly mutating the browser DOM bypasses React reconciliation. When React subsequent state changes occur, React reconstructs the DOM based on its internal Virtual DOM snapshot, completely overwriting the manual mutation or causing hydration mismatches.",
    "explanation": "React maintains an internal Fiber tree representing DOM state. Manual imperative mutations make the real DOM diverge from React internal mental model. This leads to wiped changes on re-renders, broken synthetic event listeners, memory leaks, and hydration crashes in SSR.",
    "interviewAnswer": "Direct DOM manipulation bypasses the Virtual DOM. React does not know the DOM changed, so on the next re-render, React will overwrite the manual text with whatever its JSX declared. Furthermore, it breaks SSR hydration and component reusability. The React way is to store \"Updated\" in state and render it declaratively.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Bypasses Virtual DOM",
        "description": "React Fiber tree remains unaware of the imperative change."
      },
      {
        "stepNumber": 2,
        "title": "Overwritten on Render",
        "description": "Any state or prop update causes React to rewrite the DOM node from JSX."
      },
      {
        "stepNumber": 3,
        "title": "Hydration Failure",
        "description": "In SSR/Next.js, client-rendered markup mismatches server HTML, throwing hydration errors."
      }
    ],
    "importantPoints": [
      "Always let React own the DOM elements it renders",
      "Use state for text or attribute changes",
      "Use useRef only for imperative non-render concerns like focusing, measuring, or animations"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Logical / Scenario-Based",
    "tags": [
      "react",
      "anti-pattern",
      "direct-dom",
      "troubleshooting"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is React StrictMode, and why does it intentionally invoke component functions and effects twice in development?",
    "answer": "React.StrictMode is a development-only tool that highlights potential problems such as side effects during render, deprecated lifecycle APIs, and improper cleanup in effects. In development mode, React renders components and mounts effects twice to verify that render logic is pure and that effect cleanup functions work properly.",
    "explanation": "If a component creates a listener or mutates an object without proper cleanup, double-invoking it immediately exposes the bug (e.g. duplicate network calls, leaking event listeners, or doubling counters). StrictMode does not execute twice in production builds.",
    "interviewAnswer": "StrictMode runs in development to help write resilient code. By double-invoking render functions and unmounting/remounting effects immediately, it exposes impure rendering logic, missing effect cleanups, and memory leaks before they reach production.",
    "importantPoints": [
      "Runs only in development; completely disabled in production",
      "Double-renders components to verify render purity",
      "Mounts, unmounts, and remounts effects to verify cleanup symmetry",
      "Warns against legacy string refs, findDOMNode, and deprecated context APIs"
    ],
    "followUpQuestions": [
      "How would you explain double API calls in development to a junior developer alarmed by network traffic?"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "strict-mode",
      "development",
      "debugging"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "How does React SyntheticEvent system work, and how did event delegation change between React 16 and React 17?",
    "answer": "React SyntheticEvent is a cross-browser wrapper around native browser events that provides a consistent API across different browsers while implementing pooling (in React 16) and delegated event dispatching. In React 16, delegated listeners were attached to the root document object; in React 17+, they attach to the root DOM container (e.g. #root) where the app is mounted.",
    "explanation": "Attaching listeners to #root rather than document in React 17 enables multiple isolated React microfrontends or nested apps to coexist on a single HTML page without event handlers in one React root interfering with event handlers in another root.",
    "interviewAnswer": "SyntheticEvent wraps native browser events for cross-browser consistency and performance. In React 17, React moved event delegation from the document element to the specific container element where the React tree is mounted, allowing seamless micro-frontend coexistence.",
    "importantPoints": [
      "Provides consistent cross-browser event object interface",
      "Event delegation attaches single listeners at the root container rather than on individual DOM nodes",
      "React 17+ attaches to root container (#root), not the global document",
      "Event pooling (e.persist()) was completely removed in React 17"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "synthetic-event",
      "event-delegation",
      "react17"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "Explain the difference between the Render Phase and the Commit Phase in the React lifecycle.",
    "answer": "The Render Phase evaluates component functions, builds new Fiber nodes, and calculates the difference (diff) between new and old trees. It is pure and can be interrupted or discarded in concurrent mode. The Commit Phase takes the calculated mutations and synchronously applies them to the browser DOM, runs useLayoutEffect, and schedules useEffect.",
    "explanation": "Because the render phase does not touch the real DOM, React can compute rendering work asynchronously, pause for high-priority user input, or abandon rendering stale data. Once React commits, it must update the real DOM synchronously to prevent visual tearing.",
    "interviewAnswer": "The Render phase is the calculation phase: React invokes components and computes diffs in memory without touching the DOM. It can be paused or restarted. The Commit phase is the execution phase: React writes changes to the actual DOM and triggers layout effects synchronously.",
    "importantPoints": [
      "Render Phase: Pure calculation, Fiber diffing, interruptible, side-effect free",
      "Commit Phase: Synchronous DOM writes, DOM element creation/deletion, layout effects",
      "Side effects must never run in the Render phase"
    ],
    "followUpQuestions": [
      "Which React hooks run in the render phase vs the commit phase?"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "fiber",
      "render-phase",
      "commit-phase"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is component composition, and why is it preferred over classical class inheritance in React application design?",
    "answer": "Component composition is the design pattern of assembling complex UI components from smaller, specialized components using props (especially children and render props). React promotes composition over inheritance because it provides maximum flexibility, eliminates fragile base class coupling, and mirrors how UI elements nest naturally.",
    "explanation": "Inheritance forces rigid hierarchies where changing a parent class can break child subclasses across the codebase. Composition allows components to accept custom content through children or named slots, keeping components decoupled and easily testable.",
    "interviewAnswer": "In React, composition means building rich components by nesting and passing components as props rather than extending parent classes. This provides modularity, prevents tight coupling, and avoids the fragile base class problem.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Composition via Slots",
        "code": "// Composable Card component with header and content slots\nfunction Card({ header, children, footer }) {\n  return (\n    <div className=\"card\">\n      <div className=\"card-header\">{header}</div>\n      <div className=\"card-body\">{children}</div>\n      {footer && <div className=\"card-footer\">{footer}</div>}\n    </div>\n  );\n}",
        "explanation": "Passing components as props allows flexible assembly without subclassing."
      }
    ],
    "importantPoints": [
      "React has no use cases where class inheritance is recommended over composition",
      "children prop allows components to act as generic layout containers",
      "Named prop slots provide clean multi-region composition"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "composition",
      "architecture",
      "design-patterns"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "Why does React require keys in lists, and what bugs occur when array indices are used as keys in dynamic lists?",
    "answer": "Keys provide stable identity across renders so React reconciliation can track which items are added, removed, or reordered. Using array indices as keys breaks when items are inserted, deleted, or sorted, causing component state to bind to the wrong item and triggering subtle UI data-corruption bugs.",
    "explanation": "When an item is inserted at the beginning of an array, every subsequent item gets a new index (0 becomes 1, 1 becomes 2). If index is used as key, React believes the existing components merely changed props rather than shifting positions, leading to inputs retaining old values, animations breaking, and performance degradation.",
    "interviewAnswer": "Keys allow React to match virtual elements to existing DOM nodes during reconciliation. If you use indices as keys and insert an item at the beginning of a list, React matches index 0 to the old index 0, corrupting uncontrolled inputs and destroying performance. Stable, unique IDs must always be used for dynamic collections.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Index as Key Bug Demonstration",
        "code": "// BAD: Deleting item 0 causes item 1 to inherit item 0's internal DOM state\n{todos.map((todo, index) => (\n  <TodoItem key={index} title={todo.title} />\n))}\n\n// GOOD: Stable ID guarantees correct state mapping\n{todos.map((todo) => (\n  <TodoItem key={todo.id} title={todo.title} />\n))}",
        "explanation": "Stable IDs ensure that stateful children remain paired with their corresponding data item."
      }
    ],
    "importantPoints": [
      "Keys must be unique among siblings and stable across renders",
      "Index as key is only safe for static lists that are never sorted, filtered, or mutated",
      "Never generate keys on the fly using Math.random() or crypto.randomUUID() during render"
    ],
    "followUpQuestions": [
      "What happens if you generate a key with Math.random() inside the render function?"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "keys",
      "reconciliation",
      "lists"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What happens under the hood if a developer generates keys using Math.random() during render in a list of components?",
    "answer": "Every single render assigns a brand-new key to every item in the list. React reconciliation interprets this as all previous elements being completely unmounted and destroyed, followed by completely new elements being mounted from scratch.",
    "explanation": "Generating random keys completely defeats reconciliation. It causes severe performance loss, wipes out all local component state (like input focus, scroll position, and local useState), and triggers all useEffect cleanup and setup functions on every render.",
    "interviewAnswer": "Because Math.random generates a new key on every render, React concludes that every item was deleted and a new one was inserted. This causes the entire list DOM to be torn down and rebuilt on every state change, losing input focus, wiping child state, and causing severe visual flickering.",
    "importantPoints": [
      "Forces full DOM teardown and recreation on every single render",
      "Loses all child component state, active input focus, and scroll offsets",
      "Runs unmount and remount lifecycles constantly"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "tags": [
      "react",
      "keys",
      "bugs",
      "dom-teardown"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is the purpose of React createRoot API introduced in React 18, and how does it differ from ReactDOM.render in React 17?",
    "answer": "createRoot is the entry-point API in React 18 that enables concurrent features (such as automatic batching, Transitions, and Suspense streaming). In contrast, the legacy ReactDOM.render API ran React in legacy synchronous mode where concurrent capabilities were disabled.",
    "explanation": "In React 17, ReactDOM.render(<App />, container) attached React directly to the DOM node. In React 18, const root = ReactDOM.createRoot(container); root.render(<App />); creates a Fiber root object that manages concurrent rendering queues and automatic event batching across promises and timeouts.",
    "interviewAnswer": "createRoot replaces the legacy ReactDOM.render method to unlock React 18 Concurrent features, including out-of-the-box automatic batching across async tasks, Transitions, and concurrent Suspense hydration.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "React 17 vs React 18 Mounting",
        "code": "// React 17 (Legacy synchronous mode)\nimport ReactDOM from 'react-dom';\nReactDOM.render(<App />, document.getElementById('root'));\n\n// React 18+ (Concurrent mode enabled)\nimport ReactDOM from 'react-dom/client';\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render(<App />);",
        "explanation": "createRoot enables concurrent features and modern hydration capabilities."
      }
    ],
    "importantPoints": [
      "createRoot enables React 18 concurrent features",
      "Enables automatic batching for promises, setTimeout, and native event listeners",
      "Allows root.unmount() to cleanly unmount the React tree"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "createroot",
      "react18",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "How does React handle conditional rendering, and why can the logical AND operator (condition && <Component />) render unwanted zeros (0) to the screen?",
    "answer": "React evaluates JavaScript expressions directly in JSX. In JavaScript, 0 && <Component /> evaluates to 0 because 0 is falsy, short-circuiting the expression and returning 0 itself. Because React renders numbers (including 0) directly into the DOM, the literal text \"0\" appears on the screen.",
    "explanation": "React treats false, null, undefined, and true as valid empty nodes that render nothing. However, the number 0 is a valid renderable value. When array.length is 0, writing items.length && <List /> prints \"0\" instead of rendering nothing.",
    "interviewAnswer": "The logical && operator returns the first falsy operand if one is encountered. When items.length is 0, JavaScript evaluates 0 && <List /> to 0. Since React renders numeric 0, the number 0 leaks into the UI. The fix is to convert to boolean (items.length > 0 && <List /> or Boolean(items.length)) or use a ternary.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "The 0 Rendering Trap",
        "code": "// BUG: When items is [], prints \"0\" on the webpage!\nconst items = [];\nreturn <div>{items.length && <List items={items} />}</div>;\n\n// FIX 1: Explicit comparison\nreturn <div>{items.length > 0 && <List items={items} />}</div>;\n\n// FIX 2: Ternary operator\nreturn <div>{items.length > 0 ? <List items={items} /> : null}</div>;",
        "explanation": "Always ensure the left-hand operand of && in JSX is a strict boolean."
      }
    ],
    "importantPoints": [
      "React renders numbers (including 0), but ignores boolean false, null, and undefined",
      "Falsy numbers short-circuit to 0, leaking text into the browser",
      "Use explicit comparisons (length > 0) or ternary operator"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "react",
      "conditional-rendering",
      "gotcha",
      "javascript-coercion"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is a higher-order component (HOC), and what are its common trade-offs compared to custom React hooks?",
    "answer": "A Higher-Order Component is a pure function that takes an existing component and returns an enhanced new component (e.g. withAuth(Dashboard)). While HOCs were common for cross-cutting concerns (auth, telemetry, styling), custom hooks are now preferred because HOCs introduce wrapper hell, prop name collisions, and difficult TypeScript typing.",
    "explanation": "HOCs wrap components in extra virtual DOM layers, obscuring the component hierarchy in React DevTools and making it unclear which HOC injected which prop. Custom hooks encapsulate logic without adding DOM or component wrapper layers.",
    "interviewAnswer": "An HOC is a function that accepts a component and returns an augmented component. They were popular for cross-cutting logic like authentication and data fetching. However, custom hooks have largely replaced HOCs because hooks share stateful logic directly without adding wrapper nesting or causing prop namespace collisions.",
    "importantPoints": [
      "HOC is a function: ComponentIn => ComponentOut",
      "Drawbacks: \"Wrapper hell\" in DevTools, prop collisions, static method loss, typing complexity",
      "Custom hooks are the modern standard for stateful logic reuse"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "tags": [
      "react",
      "hoc",
      "hooks-vs-hoc",
      "design-patterns"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "Explain what the Render Props pattern is, when it is useful, and how custom hooks have affected its usage.",
    "answer": "The Render Props pattern is a technique where a component receives a function as a prop (often children or render) and calls that function with its internal state to determine what to render. While custom hooks now handle stateful logic reuse, Render Props remains valuable when a component needs to control rendering layout while sharing dynamic state.",
    "explanation": "Before hooks, libraries like Formik and React Router relied heavily on render props to share state without HOC prop collisions. Today, render props is still useful in headless UI libraries (like Downshift or Radix) where a component manages keyboard events and accessibility while delegating markup rendering to the consumer.",
    "interviewAnswer": "Render props is a pattern where a component accepts a function that returns JSX, passing its own internal state into that function. While custom hooks replaced render props for pure data logic, render props is still prominent in headless UI libraries where component layout must be customized by the consumer.",
    "importantPoints": [
      "Decouples stateful logic from UI presentation",
      "Function receives child component state and returns JSX",
      "Common in headless UI libraries and compound components"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "render-props",
      "patterns",
      "design-thinking"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "How does React diffing algorithm achieve O(n) linear complexity instead of the theoretical O(n^3) minimum for general tree diffing?",
    "answer": "General minimum-edit tree diffing algorithms have an O(n^3) time complexity, which would be completely unusable for 1,000 DOM elements (requiring 1 billion comparisons). React achieves O(n) linear time by employing two practical heuristics: 1) Two elements of different types produce fundamentally different trees, and 2) Developer-provided key props identify stable child elements across renders.",
    "explanation": "If a <div> is replaced with a <span>, React does not attempt to match their children—it tears down the entire <div> subtree and builds the <span> subtree from scratch. For lists, unique keys allow React to match existing nodes even if their positions change, reducing comparisons to a single linear pass.",
    "interviewAnswer": "React avoids O(n^3) tree diffing by using two heuristics: first, changing an element type (like div to section) destroys and rebuilds the whole subtree; second, unique keys across sibling lists allow React to match and reuse identical children in O(n) time.",
    "importantPoints": [
      "Heuristic 1: Elements of different types generate different trees (immediate teardown)",
      "Heuristic 2: Sibling keys provide stable identity across render passes",
      "Reduces complexity from O(n^3) to O(n), enabling 60fps UI updates"
    ],
    "followUpQuestions": [
      "What happens when a component type changes in-place (e.g. <UserCard /> replaced by <AdminCard /> at the same tree position)?"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "reconciliation",
      "diffing-algorithm",
      "heuristics",
      "fiber"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "Why did the React team deprecate legacy lifecycle methods like componentWillMount, componentWillReceiveProps, and componentWillUpdate in React 16.3+?",
    "answer": "These lifecycle methods ran during the render phase before DOM commits. In React asynchronous/concurrent architecture, the render phase can be paused, restarted, or executed multiple times before committing. Calling side effects or state updates inside these legacy methods resulted in duplicate network requests, memory leaks, and broken race conditions.",
    "explanation": "Under Concurrent React, any lifecycle that runs before commit must be strictly pure. Developers routinely placed data fetching and subscriptions in componentWillMount, expecting it to run once. React introduced static getDerivedStateFromProps and componentDidCatch, moving side effects exclusively to componentDidMount or useEffect.",
    "interviewAnswer": "They were deprecated because they run in the render phase, which in Concurrent React is interruptible and can execute multiple times before committing to the DOM. Placing side effects in them caused duplicate executions and inconsistent state. Side effects were moved into componentDidMount and useEffect, which only run once after commit.",
    "importantPoints": [
      "Render phase in Concurrent React can pause, restart, or discard renders",
      "componentWillMount ran multiple times if rendering was aborted or restarted",
      "Replaced by getDerivedStateFromProps, componentDidMount, and useEffect"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "lifecycles",
      "deprecation",
      "concurrent-react"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is the purpose of React dangerouslySetInnerHTML, and what security precautions must always be taken when using it?",
    "answer": "dangerouslySetInnerHTML is React replacement for innerHTML on DOM elements, used to inject raw HTML strings into components. Because direct HTML injection exposes applications to Cross-Site Scripting (XSS) attacks, any untrusted or user-generated HTML must first be sanitized using a trusted sanitizer library like DOMPurify before injection.",
    "explanation": "If an attacker inputs <img src=x onerror=\"fetch('/steal?c='+document.cookie)\"> and the application renders it via dangerouslySetInnerHTML without sanitizing, the browser executes the script in the user security context.",
    "interviewAnswer": "dangerouslySetInnerHTML injects raw HTML into a node. It is named \"dangerously\" deliberately to remind developers of XSS vulnerabilities. We should always sanitize user-supplied HTML using DOMPurify.sanitize() before setting it.",
    "importantPoints": [
      "Equivalent to native innerHTML; bypasses React built-in XSS escaping",
      "Property accepts an object with __html key as a safety safeguard",
      "Must sanitize with DOMPurify or sanitize-html before rendering"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "security",
      "xss",
      "dangerouslysetinnerhtml"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "How does React prevent Cross-Site Scripting (XSS) by default when rendering standard strings in JSX?",
    "answer": "React automatically escapes all strings rendered inside JSX expressions (e.g. <div>{userInput}</div>) before inserting them into the DOM, converting HTML special characters into their safe entity equivalents and ensuring that strings are treated purely as text nodes rather than executable markup.",
    "explanation": "When user input containing <script>alert(1)</script> is rendered inside JSX curly braces, React converts it into textContent or safe string entities. The browser never parses it as executable HTML tags unless dangerouslySetInnerHTML is explicitly invoked.",
    "interviewAnswer": "By default, React escapes all values embedded in JSX expressions before rendering them. Strings are treated strictly as textContent, neutralizing script tags, img error attributes, or injected markup.",
    "importantPoints": [
      "JSX automatically escapes all string expressions",
      "Renders text as DOM Text nodes rather than innerHTML",
      "Protects against basic reflected and stored XSS"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "security",
      "xss",
      "escaping"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "Explain why keys must NOT be defined inside the child component itself, but rather on elements in the mapping array.",
    "answer": "Keys are used by the parent reconciler to track the identity of elements in an array. If a key is defined inside the child component JSX (e.g. inside <ListItem />), the parent reconciler cannot see it when diffing the array of <ListItem /> elements.",
    "explanation": "During reconciliation of a collection, React inspects the React Element descriptor ({ type: ListItem, key: \"123\" }). If the key is inside the ListItem implementation, the parent element descriptor has key: null, preventing React from identifying which child moved or changed.",
    "interviewAnswer": "Keys must be placed on the element inside the array iterator context so that the parent diffing algorithm can identify which element is which. Placing the key inside the child component JSX means the parent reconciler sees key: null when comparing children.",
    "importantPoints": [
      "Parent reconciler diffs the array elements, so key must be on the top-level returned tag",
      "Keys are not passed down as props to the child component (props.key is undefined)"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "keys",
      "reconciliation",
      "gotcha"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "Can props.key or props.ref be accessed inside a child component, and how does React 19 change ref prop handling?",
    "answer": "In React 18 and earlier, key and ref were reserved by React and stripped from props; accessing props.key or props.ref returned undefined and triggered a warning. In React 19, ref is now passed as a standard prop to functional components, eliminating the need for React.forwardRef. key remains reserved and inaccessible via props.",
    "explanation": "React reserves key to manage identity during reconciliation. Passing ref previously required wrapping components in forwardRef((props, ref) => ...). React 19 compiler and engine treat ref as a normal prop on function components.",
    "interviewAnswer": "Historically, both key and ref were reserved keywords stripped from props. Trying to access props.key still returns undefined. In React 19, however, ref is treated as a regular prop on function components, deprecating the need for forwardRef.",
    "importantPoints": [
      "props.key is always reserved and returns undefined in child components",
      "To pass an ID down, use an explicit prop name like id={item.id}",
      "React 19 supports ref as a standard prop directly, deprecating forwardRef"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "ref",
      "key",
      "react19"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "How does React batching work, and how did React 18 expand automatic batching compared to React 17?",
    "answer": "Batching is the process of grouping multiple state update calls into a single re-render pass for performance. In React 17, automatic batching only occurred inside React synthetic event handlers. In React 18, automatic batching is universal, grouping state updates inside promises, setTimeout timers, native event listeners, and async callbacks.",
    "explanation": "In React 17, two setState calls inside a fetch().then() callback caused two separate re-renders. In React 18 with createRoot, both state updates are batched into a single re-render automatically. If immediate synchronous rendering is strictly required, flushSync() can be used.",
    "interviewAnswer": "In React 17, batching was limited to synthetic event handlers. React 18 introduced Automatic Batching everywhere: whether state updates happen in setTimeout, Promise.then, or native events, React batches them into a single render pass, improving performance and avoiding intermediate renders.",
    "importantPoints": [
      "React 17 only batched inside React event handlers",
      "React 18 batches across promises, timers, and native event handlers",
      "Use flushSync from react-dom to opt out of batching if immediate DOM read is mandatory"
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
    "topicSlug": "react-fundamentals",
    "question": "When would you use flushSync in React 18, and what performance trade-off does it introduce?",
    "answer": "flushSync forces React to synchronously flush pending state updates and immediately update the real DOM before returning. It is used when an immediate DOM measurement (like scroll position, canvas sizing, or cursor placement) is required immediately after a state update. The trade-off is that it de-optimizes rendering by forcing an immediate synchronous reflow and breaking automatic batching.",
    "explanation": "React 18 automatic batching delays the render until the current macro/micro task completes. If you need to scroll an element into view immediately after adding it to state, the DOM node does not exist yet. Wrapping the state update in flushSync forces synchronous DOM creation.",
    "interviewAnswer": "flushSync forces an immediate synchronous render, bypassing batching. It is used in rare edge cases where you must query the DOM (e.g. measuring an element or scrolling) immediately after a state update. It should be used sparingly because it blocks the main thread.",
    "importantPoints": [
      "Forces synchronous DOM write; bypasses automatic batching",
      "Main use case: immediate DOM measurement or scroll sync after state update",
      "Hurts performance if overused"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "flushsync",
      "batching",
      "dom-measurement"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is hydration in React server-side rendering (SSR), and what causes \"Hydration Mismatch\" errors?",
    "answer": "Hydration is the client-side process where React takes the static HTML rendered by the server, parses it, and attaches event listeners and state to make it interactive without recreating the DOM nodes. A Hydration Mismatch occurs when the HTML generated on the server does not match the initial virtual DOM tree generated on the client.",
    "explanation": "Common causes of hydration mismatches include: using window/localStorage during initial render, rendering new Date() or Math.random(), browser extensions injecting HTML attributes, or invalid HTML nesting (like putting a <div> inside a <p> tag, which the browser parser automatically splits).",
    "interviewAnswer": "Hydration is when client React breathes interactivity into server-rendered HTML by attaching event listeners. A hydration mismatch occurs when client initial render differs from server HTML. Common causes are using client-only variables (window, Date.now()) or invalid HTML nesting like <div> inside <p>.",
    "importantPoints": [
      "Hydration preserves existing DOM nodes and attaches event listeners",
      "Initial client render must be identical to server render",
      "Fix client-only state by setting it inside a useEffect hook (which runs only on client)"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "ssr",
      "hydration",
      "nextjs",
      "troubleshooting"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "How would you fix a hydration mismatch caused by displaying a user local time zone or current timestamp in Next.js / SSR?",
    "answer": "The server renders in UTC or server time, while the browser renders in the user local time zone, causing a mismatch. The fix is to render a fallback or server-compatible timestamp initially, and update to the user localized time inside a useEffect hook, which only executes on the client after initial hydration completes.",
    "explanation": "Because useEffect only runs on the browser after mounting, the initial client render will perfectly match the server-generated HTML. Once mounted, the effect triggers a client-side update with the user local time zone.",
    "interviewAnswer": "I use a two-pass rendering pattern with useEffect and an isMounted flag. The component initially renders the server-safe formatted date. In useEffect, I set isMounted to true, triggering a client update to the user local timezone. Alternatively, suppressHydrationWarning={true} can be added if the mismatch is harmless.",
    "importantPoints": [
      "Initial render must match server HTML exactly",
      "useEffect only executes on the client after hydration succeeds",
      "suppressHydrationWarning can be used on individual elements for minor differences"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "tags": [
      "react",
      "ssr",
      "hydration",
      "timezone",
      "nextjs"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is the React Compiler (React Forget) introduced in React 19, and how does it fundamentally change manual memoization?",
    "answer": "The React Compiler is an optimizing build-time compiler that automatically memoizes values, callback functions, and JSX component trees at the JavaScript AST level. It eliminates the need for developers to manually write useMemo, useCallback, and React.memo across their codebase.",
    "explanation": "Historically, developers had to manually maintain dependency arrays and wrap handlers in useCallback to prevent unnecessary child re-renders. The React Compiler understands JavaScript semantics and component dependencies, automatically inserting fine-grained memoization caches during build time.",
    "interviewAnswer": "The React Compiler analyzes component code at build time and automatically memoizes values and components based on dependency graphs. This removes the mental overhead and bugs associated with manual useMemo, useCallback, and dependency arrays.",
    "importantPoints": [
      "Build-time optimization tool developed by the React Core team",
      "Analyzes code adherence to the \"Rules of React\"",
      "Automates fine-grained memoization, making manual useMemo/useCallback mostly obsolete"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "react19",
      "react-compiler",
      "performance",
      "memoization"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What are the core \"Rules of React\" that components must strictly obey to remain compatible with the React Compiler and Concurrent Mode?",
    "answer": "The Rules of React are: 1) Components and hooks must be pure (idempotent, no side effects during render, no mutating props/state directly), 2) Hooks must only be called at the top level and inside React functions, and 3) React element props and state must be treated as immutable.",
    "explanation": "Violating these rules (e.g. mutating props directly or writing to localStorage during render) causes the React Compiler to bail out of optimizations and creates visual inconsistencies in Concurrent React.",
    "interviewAnswer": "The primary rules are component purity (rendering must not cause side effects or mutate existing objects), the Rules of Hooks (top-level invocation only), and treating state and props as immutable. These rules allow the compiler to safely memoize and Concurrent React to interrupt rendering.",
    "importantPoints": [
      "Never mutate existing props or state objects directly",
      "No side effects in the render pass (use effects or event handlers)",
      "Only call hooks at the top level of function components"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "rules-of-react",
      "purity",
      "best-practices"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "Explain why React state updates are asynchronous and batched rather than immediate and synchronous.",
    "answer": "State updates are asynchronous to enable batching (combining multiple state updates into a single re-render), maintain internal consistency across sibling and child component trees, and enable concurrent rendering (prioritizing urgent user input like typing over non-urgent background data renders).",
    "explanation": "If state updates were synchronous, updating state in a parent would immediately re-render children before other parent state was updated, causing visual tearing and running layout calculations multiple times. Asynchronous batching ensures high framerates and consistent snapshots.",
    "interviewAnswer": "Asynchronous updates enable batching multiple updates into a single render pass, avoiding wasted layout reflows. Furthermore, it ensures internal consistency: if state updated immediately but props did not update until render, props and state would be out of sync.",
    "importantPoints": [
      "Batches updates to prevent multiple redundant layout reflows",
      "Maintains consistency between props, state, and child trees",
      "Enables Concurrent Mode priority scheduling"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "state-updates",
      "batching",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is the difference between shallow copying and deep copying state in React, and why is shallow copying usually sufficient?",
    "answer": "A shallow copy duplicates the outermost object/array container ({ ...state }), while nested objects remain shared references. A deep copy recursively duplicates every nested level. In React, shallow copying only the modified path is preferred because deep copying is computationally expensive on large state trees and breaks reference equality optimizations used by React.memo.",
    "explanation": "If you deep copy an entire state tree on every keystroke, every child component memoized with React.memo will receive a new object reference and re-render unnecessarily. React developers use structural sharing: shallow-copy only the ancestors of the modified property.",
    "interviewAnswer": "Shallow copying duplicates the top-level container, preserving references for unchanged subtrees. Deep copying clones everything, which is slow and breaks memoization. React uses structural sharing where you shallow-copy only the path to the property you are mutating.",
    "importantPoints": [
      "Structural sharing preserves unchanged object references for React.memo",
      "Deep cloning large state trees causes significant CPU overhead",
      "Libraries like Immer automate structural shallow copying"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "immutability",
      "shallow-copy",
      "structural-sharing"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is the role of the ref object in React, and how does mutating ref.current differ from calling a useState setter?",
    "answer": "A ref (useRef) is a mutable container whose .current property can hold any value across renders. Mutating ref.current does NOT trigger a re-render, whereas calling a useState setter schedules a component re-render. Refs are used for persisting values between renders without affecting UI layout, and for holding direct references to real DOM elements.",
    "explanation": "State is for data that dictates what is displayed on the screen. Refs are for escape hatches: timer IDs, previous state references, interval instances, and direct browser DOM references (measuring dimensions, managing focus).",
    "interviewAnswer": "useRef returns a persistent mutable object whose .current property can be modified without triggering a re-render. useState triggers a re-render whenever state updates. Use state for render-critical data and refs for instance variables, timer IDs, and direct DOM access.",
    "importantPoints": [
      "Mutating ref.current does NOT trigger a re-render",
      "Values persist across the entire component lifecycle",
      "Never read or write ref.current during rendering (read/write only in effects or handlers)"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "useref",
      "state-vs-ref",
      "fundamentals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "Why should you NEVER read or write ref.current during the component render pass?",
    "answer": "Reading or writing ref.current during render breaks component purity. In Concurrent React, render passes can be aborted, paused, or called multiple times before committing. Mutating a ref during render causes non-deterministic behavior, while reading a ref during render means the UI might miss updates since ref mutations do not trigger re-renders.",
    "explanation": "If a render pass is discarded by React concurrent scheduler, the mutation to ref.current remains committed in memory, corrupting subsequent render passes. Reading a ref in JSX is also problematic because if ref.current changes later, React will not know to re-render the component.",
    "interviewAnswer": "Mutating or reading ref.current during render violates the purity rule. Since Concurrent React can pause or restart renders, mutating a ref during render causes inconsistent side effects. Refs should strictly be accessed inside useEffect or event handlers.",
    "importantPoints": [
      "Render logic must remain pure and idempotent",
      "Concurrent React can abort renders, leaving dirty ref mutations behind",
      "Only modify or read refs inside event handlers or useEffect"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "useref",
      "purity",
      "rules-of-react"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is the distinction between mounting, rendering, and painting in a browser-based React application?",
    "answer": "Rendering is the execution of component functions to construct the Virtual DOM/Fiber tree. Mounting is the process of creating and inserting DOM nodes into the browser document for the first time during the commit phase. Painting is the browser subsequent operation of rasterizing pixels, calculating geometry, and displaying the updated DOM onto the screen.",
    "explanation": "A component renders many times over its lifecycle, but only mounts once. Furthermore, a React commit phase can update DOM node attributes without the browser necessarily needing a full paint or layout reflow if geometry did not shift.",
    "interviewAnswer": "Rendering is React calling your component functions to determine what changed. Mounting is React placing the resulting DOM nodes into the real document tree for the very first time. Painting is the browser engine rasterizing those DOM elements into pixels on the user display.",
    "importantPoints": [
      "Rendering: JavaScript evaluation of JSX into Fiber nodes (can occur frequently)",
      "Mounting: First-time insertion of a component DOM nodes into the browser DOM",
      "Painting: Browser layout, styling, and pixel rasterization onto the screen"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "rendering",
      "mounting",
      "browser-painting"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "How does React JSX syntax distinguish between native DOM elements (like <button>) and custom React components (like <Button>)?",
    "answer": "React uses casing conventions. Tags starting with a lowercase letter (e.g. <div />, <span />) are compiled into string literals (e.g. jsx(\"div\", ...)), signaling to React that they correspond to native HTML/DOM elements. Tags starting with an uppercase letter (e.g. <Card />, <Button />) are compiled into direct identifier references (e.g. jsx(Button, ...)), telling React to invoke that component function.",
    "explanation": "Babel and modern JSX runtimes check the first character of the tag name. If it is lowercase, the compiler outputs a string. If uppercase, it outputs the variable identifier in scope. If you name a custom component lowercase (function myButton()), React attempts to render a non-existent <mybutton> HTML tag.",
    "interviewAnswer": "JSX differentiates based on casing: lowercase tags are compiled as strings representing native HTML elements (\"div\", \"button\"), while uppercase tags are treated as JavaScript component references (Button, Header) to be invoked during reconciliation.",
    "importantPoints": [
      "Lowercase tags compile to strings: jsx(\"div\")",
      "Uppercase tags compile to variable references: jsx(MyComponent)",
      "Custom React components must always start with a capital letter"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "jsx",
      "casing",
      "compiler-rules"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is the role of React Fiber as an internal data structure, and how does its singly-linked tree structure enable pausing and resuming work?",
    "answer": "React Fiber is a reimplementation of the reconciliation engine where every React element corresponds to a Fiber node—a mutable JavaScript object tracking component state, props, DOM pointers, and work tags. The Fiber tree is structured as a singly-linked list with child, sibling, and return pointers, allowing React to traverse and pause rendering using a simple while loop without overflowing the JavaScript call stack.",
    "explanation": "In the older stack reconciler, recursion through child components tied rendering directly to the browser call stack, making interruption impossible. Fiber converted the recursive call stack into a virtual stack frame on the heap. React can execute work for 5ms, check shouldYieldToHost(), pause, allow user clicks to process, and resume right where it left off using fiber.child or fiber.sibling.",
    "interviewAnswer": "Fiber is React internal virtual stack frame architecture. Instead of recursive function calls, Fiber models the component tree as a linked list with child, sibling, and return pointers. This enables the scheduler to pause traversal, yield the main thread to high-priority events, and resume rendering seamlessly.",
    "importantPoints": [
      "Fiber nodes represent units of work with child, sibling, and return pointers",
      "Transforms recursive call stack into an interruptible heap data structure",
      "Enables Concurrent React: time-slicing, priority scheduling, and Suspense"
    ],
    "followUpQuestions": [
      "What is the \"workInProgress\" tree and how does Fiber implement double-buffering?"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "fiber",
      "internals",
      "architecture",
      "concurrency"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "react-fundamentals",
    "question": "What is double-buffering in React Fiber, and why does React maintain both a \"current\" tree and a \"workInProgress\" tree?",
    "answer": "Double-buffering is an optimization borrowed from computer graphics where React maintains two Fiber trees: the \"current\" tree (representing the DOM currently visible on the screen) and the \"workInProgress\" tree (representing the draft tree being calculated during the render phase). Once reconciliation completes, React flips a single top-level pointer, making workInProgress the new current tree.",
    "explanation": "Double-buffering ensures that the user never sees partially rendered, incomplete UI states. If a background render is aborted because higher-priority typing occurs, React simply discards the workInProgress tree without ever touching or corrupting the visible DOM on screen.",
    "interviewAnswer": "React Fiber uses double-buffering by keeping two trees: \"current\" (what is on screen) and \"workInProgress\" (what is being rendered). Work is performed on the workInProgress tree in memory. On commit, React switches the root pointer in O(1) time. This prevents visual tearing and allows uncommitted renders to be discarded safely.",
    "importantPoints": [
      "Current tree matches the live browser DOM; workInProgress is the in-memory draft",
      "Commit phase swaps pointers instantaneously (current = workInProgress)",
      "Prevents visual tearing and allows safe abandonment of aborted renders"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "tags": [
      "react",
      "fiber",
      "double-buffering",
      "internals"
    ]
  }
];
