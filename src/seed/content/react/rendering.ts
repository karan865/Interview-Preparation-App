import { SeedQuestion } from '../types';

export const reactRenderingQuestions: SeedQuestion[] = [
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What are the two major phases of the React rendering process, and what is the crucial difference between them regarding side effects?",
    "answer": "The two phases are the Render Phase and the Commit Phase. In the Render Phase, React executes components to build the Fiber tree and compute the diff between old and new trees; this phase is pure, asynchronous, and interruptible by concurrent scheduler. In the Commit Phase, React takes the computed mutations and synchronously applies them to the actual DOM, invoking layout effects and DOM node lifecycle hooks.",
    "explanation": "Side effects (network requests, DOM mutations, timers) are strictly forbidden in the Render Phase because React may execute, pause, or discard rendering passes in Concurrent Mode.",
    "interviewAnswer": "The two phases are the Render Phase and the Commit Phase. In the Render Phase, React executes components to build the Fiber tree and compute the diff between old and new trees; this phase is pure, asynchronous, and interruptible by concurrent scheduler. In the Commit Phase, React takes the computed mutations and synchronously applies them to the actual DOM, invoking layout effects and DOM node lifecycle hooks. Side effects (network requests, DOM mutations, timers) are strictly forbidden in the Render Phase because React may execute, pause, or discard rendering passes in Concurrent Mode.",
    "importantPoints": [
      "The two phases are the Render Phase and the Commit Phase. In the Render Phase, React executes components to build the Fiber tree and compute the diff between old and new trees; this phase is pure, asynchronous, and interruptible by concurrent scheduler. In the Commit Phase, React takes the computed mutations and synchronously applies them to the actual DOM, invoking layout effects and DOM node lifecycle hooks.",
      "Side effects (network requests, DOM mutations, timers) are strictly forbidden in the Render Phase because React may execute, pause, or discard rendering passes in Concurrent Mode."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "render-phase",
      "commit-phase",
      "fiber"
    ],
    "followUpQuestions": [
      "Why does React 18 Strict Mode invoke the render phase twice in development?",
      "Which lifecycle hooks and effects run during the Commit phase?",
      "What happens if a component throws an error during the render phase vs the commit phase?"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React's \"Double Buffering\" technique work with the \"current\" Fiber tree and \"workInProgress\" Fiber tree?",
    "answer": "React maintains two Fiber trees in memory: the \"current\" tree (representing what is currently painted on the screen) and the \"workInProgress\" (WIP) tree (representing the new UI state currently being computed). When rendering finishes, React simply swaps the single pointer on the FiberRootNode from current to WIP in a single instantaneous pointer assignment during the commit phase.",
    "explanation": "Borrowed from graphics rendering pipelines, double buffering prevents users from ever seeing partially rendered or tearing UI states.",
    "interviewAnswer": "React maintains two Fiber trees in memory: the \"current\" tree (representing what is currently painted on the screen) and the \"workInProgress\" (WIP) tree (representing the new UI state currently being computed). When rendering finishes, React simply swaps the single pointer on the FiberRootNode from current to WIP in a single instantaneous pointer assignment during the commit phase. Borrowed from graphics rendering pipelines, double buffering prevents users from ever seeing partially rendered or tearing UI states.",
    "importantPoints": [
      "React maintains two Fiber trees in memory: the \"current\" tree (representing what is currently painted on the screen) and the \"workInProgress\" (WIP) tree (representing the new UI state currently being computed). When rendering finishes, React simply swaps the single pointer on the FiberRootNode from current to WIP in a single instantaneous pointer assignment during the commit phase.",
      "Borrowed from graphics rendering pipelines, double buffering prevents users from ever seeing partially rendered or tearing UI states."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "double-buffering",
      "fiber-internals",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "Why is using array indexes as \"key\" props dangerous in dynamic lists, and what specific bugs does it cause when items are deleted or prepended?",
    "answer": "Keys tell React how to match elements between renders. If you use array indexes (0, 1, 2) and delete or prepend an item, the item at index 0 remains key=\"0\" even though its data changed. React reuses the existing DOM node and internal component state (like uncontrolled inputs or CSS focus) for the wrong item, corrupting form data and causing visual chaos.",
    "explanation": "Always use stable, unique IDs from your data (e.g. user.id, item.uuid) that follow the item regardless of its array position.",
    "interviewAnswer": "Keys tell React how to match elements between renders. If you use array indexes (0, 1, 2) and delete or prepend an item, the item at index 0 remains key=\"0\" even though its data changed. React reuses the existing DOM node and internal component state (like uncontrolled inputs or CSS focus) for the wrong item, corrupting form data and causing visual chaos. Always use stable, unique IDs from your data (e.g. user.id, item.uuid) that follow the item regardless of its array position.",
    "importantPoints": [
      "Keys tell React how to match elements between renders. If you use array indexes (0, 1, 2) and delete or prepend an item, the item at index 0 remains key=\"0\" even though its data changed. React reuses the existing DOM node and internal component state (like uncontrolled inputs or CSS focus) for the wrong item, corrupting form data and causing visual chaos.",
      "Always use stable, unique IDs from your data (e.g. user.id, item.uuid) that follow the item regardless of its array position."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "keys",
      "reconciliation",
      "gotcha"
    ],
    "followUpQuestions": [
      "When is it actually acceptable to use array index as a key?",
      "What happens under the hood if two sibling elements share the exact same key?",
      "How does passing a different key to a top-level component reset all its internal state?"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React's heuristic diffing algorithm achieve O(n) time complexity instead of the theoretical O(n^3) minimum for general tree comparison?",
    "answer": "React assumes two heuristics: 1) Two elements of different types (e.g. <div> to <span>, or <Header> to <Nav>) produce completely different trees and will be destroyed and remounted rather than diffed, and 2) The developer can hint which child elements are stable across renders using the \"key\" prop.",
    "explanation": "By only diffing elements level-by-level at the same tree depth and destroying mismatched types, React reduces complexity from O(n^3) to linear O(n).",
    "interviewAnswer": "React assumes two heuristics: 1) Two elements of different types (e.g. <div> to <span>, or <Header> to <Nav>) produce completely different trees and will be destroyed and remounted rather than diffed, and 2) The developer can hint which child elements are stable across renders using the \"key\" prop. By only diffing elements level-by-level at the same tree depth and destroying mismatched types, React reduces complexity from O(n^3) to linear O(n).",
    "importantPoints": [
      "React assumes two heuristics: 1) Two elements of different types (e.g. <div> to <span>, or <Header> to <Nav>) produce completely different trees and will be destroyed and remounted rather than diffed, and 2) The developer can hint which child elements are stable across renders using the \"key\" prop.",
      "By only diffing elements level-by-level at the same tree depth and destroying mismatched types, React reduces complexity from O(n^3) to linear O(n)."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "reconciliation",
      "diffing-algorithm",
      "big-o"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What triggers a React component to re-render? List all four distinct triggers.",
    "answer": "A React component re-renders when: 1) Its internal state changes (via useState or useReducer), 2) Its parent component re-renders (unless protected by React.memo), 3) A React Context it subscribes to changes its value, or 4) A custom hook it invokes triggers an internal state update.",
    "explanation": "Notice that props changing is NOT what directly triggers a re-render—the parent re-rendering triggers child re-renders regardless of whether child props changed.",
    "interviewAnswer": "A React component re-renders when: 1) Its internal state changes (via useState or useReducer), 2) Its parent component re-renders (unless protected by React.memo), 3) A React Context it subscribes to changes its value, or 4) A custom hook it invokes triggers an internal state update. Notice that props changing is NOT what directly triggers a re-render—the parent re-rendering triggers child re-renders regardless of whether child props changed.",
    "importantPoints": [
      "A React component re-renders when: 1) Its internal state changes (via useState or useReducer), 2) Its parent component re-renders (unless protected by React.memo), 3) A React Context it subscribes to changes its value, or 4) A custom hook it invokes triggers an internal state update.",
      "Notice that props changing is NOT what directly triggers a re-render—the parent re-rendering triggers child re-renders regardless of whether child props changed."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "re-rendering",
      "fundamentals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "Why does changing a component HTML tag type (e.g. replacing <div className=\"card\"> with <section className=\"card\">) destroy all state in child components?",
    "answer": "Because the element type changed from \"div\" to \"section\", React reconciliation rule dictates that the old element and its entire subtree must be unmounted and destroyed. A brand new Fiber node tree is mounted from scratch, wiping all local state, timers, and DOM nodes.",
    "explanation": "React preserves state across renders ONLY if the element type at that exact tree position remains identical.",
    "interviewAnswer": "Because the element type changed from \"div\" to \"section\", React reconciliation rule dictates that the old element and its entire subtree must be unmounted and destroyed. A brand new Fiber node tree is mounted from scratch, wiping all local state, timers, and DOM nodes. React preserves state across renders ONLY if the element type at that exact tree position remains identical.",
    "importantPoints": [
      "Because the element type changed from \"div\" to \"section\", React reconciliation rule dictates that the old element and its entire subtree must be unmounted and destroyed. A brand new Fiber node tree is mounted from scratch, wiping all local state, timers, and DOM nodes.",
      "React preserves state across renders ONLY if the element type at that exact tree position remains identical."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "reconciliation",
      "unmounting",
      "element-types"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What are the three core structural pointers on a Fiber node that connect it to the rest of the Fiber tree?",
    "answer": "1) child: points to the first direct child Fiber, 2) sibling: points to the next sibling Fiber at the same tree level, and 3) return: points to the parent Fiber node that this Fiber returns to when work is completed.",
    "explanation": "This singly-linked tree structure allows React to traverse and pause tree processing without recursive call stack limitations.",
    "interviewAnswer": "1) child: points to the first direct child Fiber, 2) sibling: points to the next sibling Fiber at the same tree level, and 3) return: points to the parent Fiber node that this Fiber returns to when work is completed. This singly-linked tree structure allows React to traverse and pause tree processing without recursive call stack limitations.",
    "importantPoints": [
      "1) child: points to the first direct child Fiber, 2) sibling: points to the next sibling Fiber at the same tree level, and 3) return: points to the parent Fiber node that this Fiber returns to when work is completed.",
      "This singly-linked tree structure allows React to traverse and pause tree processing without recursive call stack limitations."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "fiber-internals",
      "data-structures",
      "singly-linked-tree"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is hydration in React, and what causes the infamous \"Text content does not match server-rendered HTML\" hydration mismatch error?",
    "answer": "Hydration is the client-side process where React attaches event listeners and Fiber node representations to the static HTML already delivered by the server. A hydration mismatch occurs when the server-rendered HTML differs from the initial client render (e.g. reading window.innerWidth, localStorage, or new Date() timestamps during render).",
    "explanation": "Hydration mismatches cause React to discard the server HTML or rebuild DOM nodes, hurting LCP and performance.",
    "interviewAnswer": "Hydration is the client-side process where React attaches event listeners and Fiber node representations to the static HTML already delivered by the server. A hydration mismatch occurs when the server-rendered HTML differs from the initial client render (e.g. reading window.innerWidth, localStorage, or new Date() timestamps during render). Hydration mismatches cause React to discard the server HTML or rebuild DOM nodes, hurting LCP and performance.",
    "importantPoints": [
      "Hydration is the client-side process where React attaches event listeners and Fiber node representations to the static HTML already delivered by the server. A hydration mismatch occurs when the server-rendered HTML differs from the initial client render (e.g. reading window.innerWidth, localStorage, or new Date() timestamps during render).",
      "Hydration mismatches cause React to discard the server HTML or rebuild DOM nodes, hurting LCP and performance."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "hydration",
      "ssr",
      "nextjs"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React 18 Concurrent Rendering handle time-slicing to maintain 60 FPS during long JavaScript rendering tasks?",
    "answer": "Concurrent React breaks large render tasks into 5ms slices using the Scheduler package (leveraging MessageChannel). After each slice, React yields control back to the browser to process high-priority tasks (mouse clicks, animations, key presses). If urgent work arrives, React pauses or restarts the background render.",
    "explanation": "Prevents the main thread from blocking and eliminates browser freeze during complex UI updates.",
    "interviewAnswer": "Concurrent React breaks large render tasks into 5ms slices using the Scheduler package (leveraging MessageChannel). After each slice, React yields control back to the browser to process high-priority tasks (mouse clicks, animations, key presses). If urgent work arrives, React pauses or restarts the background render. Prevents the main thread from blocking and eliminates browser freeze during complex UI updates.",
    "importantPoints": [
      "Concurrent React breaks large render tasks into 5ms slices using the Scheduler package (leveraging MessageChannel). After each slice, React yields control back to the browser to process high-priority tasks (mouse clicks, animations, key presses). If urgent work arrives, React pauses or restarts the background render.",
      "Prevents the main thread from blocking and eliminates browser freeze during complex UI updates."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "concurrent-mode",
      "time-slicing",
      "scheduler"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What are \"Lanes\" in React 18 Fiber architecture, and how do they replace the older expiration-time priority system?",
    "answer": "Lanes are 31-bit integers where each bit represents a specific priority channel (e.g. SyncLane, InputContinuousLane, DefaultLane, TransitionLane, OffscreenLane). By using bitwise masks, React can express multiple overlapping task priorities, decouple priorities from chronological deadlines, and selectively bundle or interrupt groups of updates.",
    "explanation": "Bitwise operations make priority checking and lane masking extremely fast (single CPU cycle).",
    "interviewAnswer": "Lanes are 31-bit integers where each bit represents a specific priority channel (e.g. SyncLane, InputContinuousLane, DefaultLane, TransitionLane, OffscreenLane). By using bitwise masks, React can express multiple overlapping task priorities, decouple priorities from chronological deadlines, and selectively bundle or interrupt groups of updates. Bitwise operations make priority checking and lane masking extremely fast (single CPU cycle).",
    "importantPoints": [
      "Lanes are 31-bit integers where each bit represents a specific priority channel (e.g. SyncLane, InputContinuousLane, DefaultLane, TransitionLane, OffscreenLane). By using bitwise masks, React can express multiple overlapping task priorities, decouple priorities from chronological deadlines, and selectively bundle or interrupt groups of updates.",
      "Bitwise operations make priority checking and lane masking extremely fast (single CPU cycle)."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "lanes",
      "fiber-internals",
      "scheduler"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What happens when a component returns null or undefined from its render function?",
    "answer": "Returning null tells React to render nothing in the DOM while keeping the component mounted and preserving its state. Returning undefined in React 17 threw an error (\"Nothing was returned from render\"); in React 18+, undefined is treated identically to null.",
    "explanation": "Returning null is standard for conditional rendering where no visual output should be committed.",
    "interviewAnswer": "Returning null tells React to render nothing in the DOM while keeping the component mounted and preserving its state. Returning undefined in React 17 threw an error (\"Nothing was returned from render\"); in React 18+, undefined is treated identically to null. Returning null is standard for conditional rendering where no visual output should be committed.",
    "importantPoints": [
      "Returning null tells React to render nothing in the DOM while keeping the component mounted and preserving its state. Returning undefined in React 17 threw an error (\"Nothing was returned from render\"); in React 18+, undefined is treated identically to null.",
      "Returning null is standard for conditional rendering where no visual output should be committed."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "null",
      "undefined",
      "conditional-rendering"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "Why does declaring a React component inside another component body cause it to lose focus and state on every keystroke?",
    "answer": "Declaring function Child() inside Parent creates a brand new function reference on every parent render pass. When React diffs <Child />, it sees type Child_Render2 !== type Child_Render1. React completely unmounts the old Child and mounts a new Child instance on every single keystroke, destroying focus and input state.",
    "explanation": "Components must ALWAYS be declared at the module level or in separate files, never nested inside component render functions.",
    "interviewAnswer": "Declaring function Child() inside Parent creates a brand new function reference on every parent render pass. When React diffs <Child />, it sees type Child_Render2 !== type Child_Render1. React completely unmounts the old Child and mounts a new Child instance on every single keystroke, destroying focus and input state. Components must ALWAYS be declared at the module level or in separate files, never nested inside component render functions.",
    "importantPoints": [
      "Declaring function Child() inside Parent creates a brand new function reference on every parent render pass. When React diffs <Child />, it sees type Child_Render2 !== type Child_Render1. React completely unmounts the old Child and mounts a new Child instance on every single keystroke, destroying focus and input state.",
      "Components must ALWAYS be declared at the module level or in separate files, never nested inside component render functions."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "nested-components",
      "anti-pattern",
      "gotcha"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the purpose of React.Fragment (<>...</>) and what is the ONLY attribute a Fragment can accept in JSX?",
    "answer": "React.Fragment lets you group a list of children without adding an extra wrapping DOM node (like a useless <div>) to the HTML output. The ONLY prop a Fragment can accept is the \"key\" prop: <React.Fragment key={item.id}>; the shorthand syntax <>...</> cannot accept any props.",
    "explanation": "Essential for maintaining valid semantic HTML structures like table rows (<tr>) or lists (<li>).",
    "interviewAnswer": "React.Fragment lets you group a list of children without adding an extra wrapping DOM node (like a useless <div>) to the HTML output. The ONLY prop a Fragment can accept is the \"key\" prop: <React.Fragment key={item.id}>; the shorthand syntax <>...</> cannot accept any props. Essential for maintaining valid semantic HTML structures like table rows (<tr>) or lists (<li>).",
    "importantPoints": [
      "React.Fragment lets you group a list of children without adding an extra wrapping DOM node (like a useless <div>) to the HTML output. The ONLY prop a Fragment can accept is the \"key\" prop: <React.Fragment key={item.id}>; the shorthand syntax <>...</> cannot accept any props.",
      "Essential for maintaining valid semantic HTML structures like table rows (<tr>) or lists (<li>)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "fragments",
      "jsx",
      "semantics"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React determine if it can bail out of rendering a component when parent re-renders?",
    "answer": "React checks: 1) Does the component use React.memo or shouldComponentUpdate? If yes, it compares old and new props. 2) Has state or context changed on this component? 3) Is the old Fiber element identical by reference to the new element? If all checks pass, React reuses the current Fiber and skips rendering the component and its subtree.",
    "explanation": "Bailout short-circuits subtree reconciliation, saving significant CPU cycles.",
    "interviewAnswer": "React checks: 1) Does the component use React.memo or shouldComponentUpdate? If yes, it compares old and new props. 2) Has state or context changed on this component? 3) Is the old Fiber element identical by reference to the new element? If all checks pass, React reuses the current Fiber and skips rendering the component and its subtree. Bailout short-circuits subtree reconciliation, saving significant CPU cycles.",
    "importantPoints": [
      "React checks: 1) Does the component use React.memo or shouldComponentUpdate? If yes, it compares old and new props. 2) Has state or context changed on this component? 3) Is the old Fiber element identical by reference to the new element? If all checks pass, React reuses the current Fiber and skips rendering the component and its subtree.",
      "Bailout short-circuits subtree reconciliation, saving significant CPU cycles."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "bailout",
      "react-memo",
      "reconciliation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the difference between client-side rendering (CSR), server-side rendering (SSR), and static site generation (SSG) in React?",
    "answer": "CSR: browser downloads empty HTML and heavy JS bundle, building UI entirely in the browser. SSR: server renders HTML on every HTTP request, sending complete HTML for fast First Contentful Paint followed by client hydration. SSG: HTML is pre-rendered at build time and served statically via CDN with near-zero TTFB.",
    "explanation": "Modern architectures mix them using Server Components and incremental static regeneration (ISR).",
    "interviewAnswer": "CSR: browser downloads empty HTML and heavy JS bundle, building UI entirely in the browser. SSR: server renders HTML on every HTTP request, sending complete HTML for fast First Contentful Paint followed by client hydration. SSG: HTML is pre-rendered at build time and served statically via CDN with near-zero TTFB. Modern architectures mix them using Server Components and incremental static regeneration (ISR).",
    "importantPoints": [
      "CSR: browser downloads empty HTML and heavy JS bundle, building UI entirely in the browser. SSR: server renders HTML on every HTTP request, sending complete HTML for fast First Contentful Paint followed by client hydration. SSG: HTML is pre-rendered at build time and served statically via CDN with near-zero TTFB.",
      "Modern architectures mix them using Server Components and incremental static regeneration (ISR)."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "csr",
      "ssr",
      "ssg",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React handle SVG elements differently from standard HTML elements during reconciliation?",
    "answer": "React creates SVG elements using document.createElementNS(\"http://www.w3.org/2000/svg\", tag) instead of document.createElement(tag). It also maps camelCase SVG attributes (viewBox, strokeWidth, clipPath) to their corresponding XML attribute names.",
    "explanation": "Without the XML namespace, the browser parses SVG tags as generic HTMLUnknownElement and fails to render vectors.",
    "interviewAnswer": "React creates SVG elements using document.createElementNS(\"http://www.w3.org/2000/svg\", tag) instead of document.createElement(tag). It also maps camelCase SVG attributes (viewBox, strokeWidth, clipPath) to their corresponding XML attribute names. Without the XML namespace, the browser parses SVG tags as generic HTMLUnknownElement and fails to render vectors.",
    "importantPoints": [
      "React creates SVG elements using document.createElementNS(\"http://www.w3.org/2000/svg\", tag) instead of document.createElement(tag). It also maps camelCase SVG attributes (viewBox, strokeWidth, clipPath) to their corresponding XML attribute names.",
      "Without the XML namespace, the browser parses SVG tags as generic HTMLUnknownElement and fails to render vectors."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "svg",
      "namespace",
      "dom-internals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "Why does conditionally hiding elements with display: none preserve internal state while {show && <Component />} does not?",
    "answer": "display: none keeps the component mounted in both the React Fiber tree and the physical DOM; it merely hides it visually via CSS, preserving internal state and scroll position. Conditional JSX ({show && <Component />}) removes the component from the Fiber tree entirely, unmounting it and destroying all state.",
    "explanation": "Choose CSS hiding when state must be preserved or remounting cost is prohibitive.",
    "interviewAnswer": "display: none keeps the component mounted in both the React Fiber tree and the physical DOM; it merely hides it visually via CSS, preserving internal state and scroll position. Conditional JSX ({show && <Component />}) removes the component from the Fiber tree entirely, unmounting it and destroying all state. Choose CSS hiding when state must be preserved or remounting cost is prohibitive.",
    "importantPoints": [
      "display: none keeps the component mounted in both the React Fiber tree and the physical DOM; it merely hides it visually via CSS, preserving internal state and scroll position. Conditional JSX ({show && <Component />}) removes the component from the Fiber tree entirely, unmounting it and destroying all state.",
      "Choose CSS hiding when state must be preserved or remounting cost is prohibitive."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "conditional-rendering",
      "unmounting",
      "css"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the \"render cascade\" or \"waterfall rendering\" problem in nested React components, and how do you resolve it?",
    "answer": "A render waterfall occurs when a parent component fetches data, renders a child that then fetches data, which renders a grandchild that fetches data, delaying full page load across multiple sequential roundtrips. Resolved by parallelizing requests at the route level, pre-fetching, or colocation with Suspense/GraphQL/React Server Components.",
    "explanation": "Hoisting data requirements eliminates multi-hop network latency.",
    "interviewAnswer": "A render waterfall occurs when a parent component fetches data, renders a child that then fetches data, which renders a grandchild that fetches data, delaying full page load across multiple sequential roundtrips. Resolved by parallelizing requests at the route level, pre-fetching, or colocation with Suspense/GraphQL/React Server Components. Hoisting data requirements eliminates multi-hop network latency.",
    "importantPoints": [
      "A render waterfall occurs when a parent component fetches data, renders a child that then fetches data, which renders a grandchild that fetches data, delaying full page load across multiple sequential roundtrips. Resolved by parallelizing requests at the route level, pre-fetching, or colocation with Suspense/GraphQL/React Server Components.",
      "Hoisting data requirements eliminates multi-hop network latency."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "render-waterfall",
      "data-fetching",
      "performance"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React's SyntheticEvent system work during event rendering in React 17+ vs React 16?",
    "answer": "React wraps native browser events in a cross-browser SyntheticEvent wrapper. In React 17+, React attaches event listeners to the root DOM container (e.g. <div id=\"root\">) rather than document, enabling safer nesting of multiple React versions on a single page.",
    "explanation": "Also stopped event pooling in React 17, allowing async access to event properties without event.persist().",
    "interviewAnswer": "React wraps native browser events in a cross-browser SyntheticEvent wrapper. In React 17+, React attaches event listeners to the root DOM container (e.g. <div id=\"root\">) rather than document, enabling safer nesting of multiple React versions on a single page. Also stopped event pooling in React 17, allowing async access to event properties without event.persist().",
    "importantPoints": [
      "React wraps native browser events in a cross-browser SyntheticEvent wrapper. In React 17+, React attaches event listeners to the root DOM container (e.g. <div id=\"root\">) rather than document, enabling safer nesting of multiple React versions on a single page.",
      "Also stopped event pooling in React 17, allowing async access to event properties without event.persist()."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "synthetic-events",
      "event-delegation",
      "react17"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the difference between flushSync and standard setState batching in React 18?",
    "answer": "Standard setState schedules a re-render asynchronously within the batch queue. flushSync(callback) forces React to synchronously flush all pending state updates inside the callback and immediately update the DOM before flushSync returns, allowing synchronous DOM measurement.",
    "explanation": "flushSync should be used sparingly because it de-optimizes batching and harms performance.",
    "interviewAnswer": "Standard setState schedules a re-render asynchronously within the batch queue. flushSync(callback) forces React to synchronously flush all pending state updates inside the callback and immediately update the DOM before flushSync returns, allowing synchronous DOM measurement. flushSync should be used sparingly because it de-optimizes batching and harms performance.",
    "importantPoints": [
      "Standard setState schedules a re-render asynchronously within the batch queue. flushSync(callback) forces React to synchronously flush all pending state updates inside the callback and immediately update the DOM before flushSync returns, allowing synchronous DOM measurement.",
      "flushSync should be used sparingly because it de-optimizes batching and harms performance."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "flushsync",
      "batching",
      "react18"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "Why does React 18 render components wrapped in Suspense on the server without waiting for all child data to resolve (Streaming SSR)?",
    "answer": "React 18 streaming SSR uses renderToPipeableStream to send the initial HTML shell immediately. Suspended components are emitted as fallback placeholders, and as individual backend data promises resolve, React streams inline HTML chunks and <script> tags to swap the fallbacks on the fly.",
    "explanation": "Dramatically improves Time to First Byte (TTFB) and allows slow backend APIs to not block fast content.",
    "interviewAnswer": "React 18 streaming SSR uses renderToPipeableStream to send the initial HTML shell immediately. Suspended components are emitted as fallback placeholders, and as individual backend data promises resolve, React streams inline HTML chunks and <script> tags to swap the fallbacks on the fly. Dramatically improves Time to First Byte (TTFB) and allows slow backend APIs to not block fast content.",
    "importantPoints": [
      "React 18 streaming SSR uses renderToPipeableStream to send the initial HTML shell immediately. Suspended components are emitted as fallback placeholders, and as individual backend data promises resolve, React streams inline HTML chunks and <script> tags to swap the fallbacks on the fly.",
      "Dramatically improves Time to First Byte (TTFB) and allows slow backend APIs to not block fast content."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "streaming-ssr",
      "suspense",
      "react18"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What happens during reconciliation when moving an item from the bottom of a list to the top if stable keys are present vs absent?",
    "answer": "With stable keys, React identifies that the Fiber key exists, shifts the single DOM node using insertBefore, and leaves the remaining sibling nodes untouched. Without stable keys (or with indexes), React mutates every single sibling node down the list to match new index props, causing massive DOM updates.",
    "explanation": "Keys convert O(N) DOM re-writes into a single O(1) DOM move.",
    "interviewAnswer": "With stable keys, React identifies that the Fiber key exists, shifts the single DOM node using insertBefore, and leaves the remaining sibling nodes untouched. Without stable keys (or with indexes), React mutates every single sibling node down the list to match new index props, causing massive DOM updates. Keys convert O(N) DOM re-writes into a single O(1) DOM move.",
    "importantPoints": [
      "With stable keys, React identifies that the Fiber key exists, shifts the single DOM node using insertBefore, and leaves the remaining sibling nodes untouched. Without stable keys (or with indexes), React mutates every single sibling node down the list to match new index props, causing massive DOM updates.",
      "Keys convert O(N) DOM re-writes into a single O(1) DOM move."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "keys",
      "reconciliation",
      "dom-mutation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the purpose of the key prop when passed to a standard non-list component: <UserProfile key={userId} />?",
    "answer": "It acts as an explicit instruction to React to treat the component as a completely new identity when userId changes, unmounting the previous instance and mounting a fresh instance with pristine state, clearing all cached inputs, local drafts, and pending effects cleanly.",
    "explanation": "Much cleaner than writing complex useEffect reset routines inside the child.",
    "interviewAnswer": "It acts as an explicit instruction to React to treat the component as a completely new identity when userId changes, unmounting the previous instance and mounting a fresh instance with pristine state, clearing all cached inputs, local drafts, and pending effects cleanly. Much cleaner than writing complex useEffect reset routines inside the child.",
    "importantPoints": [
      "It acts as an explicit instruction to React to treat the component as a completely new identity when userId changes, unmounting the previous instance and mounting a fresh instance with pristine state, clearing all cached inputs, local drafts, and pending effects cleanly.",
      "Much cleaner than writing complex useEffect reset routines inside the child."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "keys",
      "state-reset",
      "patterns"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React differentiate between a DOM tag element (<div>) and a custom Component (<MyComponent />) during JSX compilation and rendering?",
    "answer": "Babel/JSX compiler checks the first letter: lowercase tags (div, span) compile to string tags (\"div\"), which React treats as native DOM host elements. Uppercase tags (MyComponent) compile to identifier references (MyComponent), which React executes as component functions/classes.",
    "explanation": "This is why React components must ALWAYS start with a capital letter.",
    "interviewAnswer": "Babel/JSX compiler checks the first letter: lowercase tags (div, span) compile to string tags (\"div\"), which React treats as native DOM host elements. Uppercase tags (MyComponent) compile to identifier references (MyComponent), which React executes as component functions/classes. This is why React components must ALWAYS start with a capital letter.",
    "importantPoints": [
      "Babel/JSX compiler checks the first letter: lowercase tags (div, span) compile to string tags (\"div\"), which React treats as native DOM host elements. Uppercase tags (MyComponent) compile to identifier references (MyComponent), which React executes as component functions/classes.",
      "This is why React components must ALWAYS start with a capital letter."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "jsx",
      "compiler",
      "naming-conventions"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the difference between \"Mounting\", \"Updating\", and \"Unmounting\" in the React component lifecycle?",
    "answer": "Mounting: creating the Fiber node, running initial render, inserting into the DOM, and running mount effects. Updating: re-rendering due to state/prop/context changes, diffing trees, applying mutations, running update effects. Unmounting: removing from DOM, running cleanup functions, and discarding the Fiber node.",
    "explanation": "These three stages define the entire lifecycle of any element in a React tree.",
    "interviewAnswer": "Mounting: creating the Fiber node, running initial render, inserting into the DOM, and running mount effects. Updating: re-rendering due to state/prop/context changes, diffing trees, applying mutations, running update effects. Unmounting: removing from DOM, running cleanup functions, and discarding the Fiber node. These three stages define the entire lifecycle of any element in a React tree.",
    "importantPoints": [
      "Mounting: creating the Fiber node, running initial render, inserting into the DOM, and running mount effects. Updating: re-rendering due to state/prop/context changes, diffing trees, applying mutations, running update effects. Unmounting: removing from DOM, running cleanup functions, and discarding the Fiber node.",
      "These three stages define the entire lifecycle of any element in a React tree."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "lifecycle",
      "mounting",
      "unmounting"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "Why can two sibling elements not have the exact same key in React?",
    "answer": "Keys must be unique among siblings so React can unambiguously map each Fiber node to its specific data item during reconciliation. Duplicate keys cause React to issue a console error, misidentify elements during updates, and produce unpredictable rendering corruption.",
    "explanation": "Keys only need to be unique among immediate siblings, not globally unique across the whole application.",
    "interviewAnswer": "Keys must be unique among siblings so React can unambiguously map each Fiber node to its specific data item during reconciliation. Duplicate keys cause React to issue a console error, misidentify elements during updates, and produce unpredictable rendering corruption. Keys only need to be unique among immediate siblings, not globally unique across the whole application.",
    "importantPoints": [
      "Keys must be unique among siblings so React can unambiguously map each Fiber node to its specific data item during reconciliation. Duplicate keys cause React to issue a console error, misidentify elements during updates, and produce unpredictable rendering corruption.",
      "Keys only need to be unique among immediate siblings, not globally unique across the whole application."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "keys",
      "duplicate-keys",
      "errors"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React handle whitespace and comments inside JSX during rendering?",
    "answer": "React strips out multi-line whitespace and trims single spaces between tags, condensing them into a single space if between words. Standard HTML comments <!-- --> are not allowed inside JSX; developers must use JavaScript comments inside braces: {/* comment */}.",
    "explanation": "JSX compilation transforms children into arguments where leading/trailing empty string tokens are ignored.",
    "interviewAnswer": "React strips out multi-line whitespace and trims single spaces between tags, condensing them into a single space if between words. Standard HTML comments <!-- --> are not allowed inside JSX; developers must use JavaScript comments inside braces: {/* comment */}. JSX compilation transforms children into arguments where leading/trailing empty string tokens are ignored.",
    "importantPoints": [
      "React strips out multi-line whitespace and trims single spaces between tags, condensing them into a single space if between words. Standard HTML comments <!-- --> are not allowed inside JSX; developers must use JavaScript comments inside braces: {/* comment */}.",
      "JSX compilation transforms children into arguments where leading/trailing empty string tokens are ignored."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "jsx",
      "whitespace",
      "comments"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is Selective Hydration in React 18, and how does user interaction reprioritize which components hydrate first?",
    "answer": "In React 18, HTML wrapped in Suspense streams to the client and hydrates progressively. If a user clicks on an unhydrated component before others have finished, React intercepts the click, pauses the currently hydrating component, and prioritizes hydrating the clicked component synchronously to respond to user input.",
    "explanation": "Ensures the page feels interactive immediately without waiting for heavy background components.",
    "interviewAnswer": "In React 18, HTML wrapped in Suspense streams to the client and hydrates progressively. If a user clicks on an unhydrated component before others have finished, React intercepts the click, pauses the currently hydrating component, and prioritizes hydrating the clicked component synchronously to respond to user input. Ensures the page feels interactive immediately without waiting for heavy background components.",
    "importantPoints": [
      "In React 18, HTML wrapped in Suspense streams to the client and hydrates progressively. If a user clicks on an unhydrated component before others have finished, React intercepts the click, pauses the currently hydrating component, and prioritizes hydrating the clicked component synchronously to respond to user input.",
      "Ensures the page feels interactive immediately without waiting for heavy background components."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "selective-hydration",
      "suspense",
      "react18"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React reconcile boolean values, null, and undefined when embedded directly in JSX: <div>{false}{null}{undefined}</div>?",
    "answer": "React skips boolean values (true, false), null, and undefined completely, rendering nothing into the DOM. However, the number 0 is a valid number and WILL render as text: {items.length && <List />} renders \"0\" when items is empty!",
    "explanation": "To avoid the famous \"0\" rendering bug, always use explicit booleans: items.length > 0 && <List />.",
    "interviewAnswer": "React skips boolean values (true, false), null, and undefined completely, rendering nothing into the DOM. However, the number 0 is a valid number and WILL render as text: {items.length && <List />} renders \"0\" when items is empty! To avoid the famous \"0\" rendering bug, always use explicit booleans: items.length > 0 && <List />.",
    "importantPoints": [
      "React skips boolean values (true, false), null, and undefined completely, rendering nothing into the DOM. However, the number 0 is a valid number and WILL render as text: {items.length && <List />} renders \"0\" when items is empty!",
      "To avoid the famous \"0\" rendering bug, always use explicit booleans: items.length > 0 && <List />."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "conditional-rendering",
      "zero-bug",
      "gotcha"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the \"reconciliation bailout\" via props identity, and how does component composition (lifting children) exploit it?",
    "answer": "When a component receives JSX children as props, those child elements were evaluated by the parent. When the container component re-renders, its children props have the exact same reference identity (oldChild === newChild). React recognizes this and bails out of re-rendering the children subtree entirely.",
    "explanation": "A powerful technique to optimize rendering without React.memo or useMemo.",
    "interviewAnswer": "When a component receives JSX children as props, those child elements were evaluated by the parent. When the container component re-renders, its children props have the exact same reference identity (oldChild === newChild). React recognizes this and bails out of re-rendering the children subtree entirely. A powerful technique to optimize rendering without React.memo or useMemo.",
    "importantPoints": [
      "When a component receives JSX children as props, those child elements were evaluated by the parent. When the container component re-renders, its children props have the exact same reference identity (oldChild === newChild). React recognizes this and bails out of re-rendering the children subtree entirely.",
      "A powerful technique to optimize rendering without React.memo or useMemo."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "bailout",
      "composition",
      "props-identity"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React Server Components (RSC) fundamentally change the rendering boundary between server and client?",
    "answer": "RSCs render exclusively on the server and stream a JSON-like virtual DOM representation to the client, shipping zero JavaScript bundle size for server components. Client components (\"use client\") render on both server (for SSR) and client, handling interactivity and state.",
    "explanation": "RSC eliminates the compromise between heavy client bundles and interactive UIs.",
    "interviewAnswer": "RSCs render exclusively on the server and stream a JSON-like virtual DOM representation to the client, shipping zero JavaScript bundle size for server components. Client components (\"use client\") render on both server (for SSR) and client, handling interactivity and state. RSC eliminates the compromise between heavy client bundles and interactive UIs.",
    "importantPoints": [
      "RSCs render exclusively on the server and stream a JSON-like virtual DOM representation to the client, shipping zero JavaScript bundle size for server components. Client components (\"use client\") render on both server (for SSR) and client, handling interactivity and state.",
      "RSC eliminates the compromise between heavy client bundles and interactive UIs."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "rsc",
      "server-components",
      "nextjs"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What causes layout thrashing during React rendering, and how can useLayoutEffect be misused to cause it?",
    "answer": "Layout thrashing occurs when JavaScript repeatedly interleaves DOM writes and DOM reads (e.g. writing style.width then reading offsetWidth). Misusing useLayoutEffect to read and mutate multiple DOM nodes sequentially forces the browser to recalculate styles and layout multiple times per frame.",
    "explanation": "Batch DOM reads together first, then batch DOM writes.",
    "interviewAnswer": "Layout thrashing occurs when JavaScript repeatedly interleaves DOM writes and DOM reads (e.g. writing style.width then reading offsetWidth). Misusing useLayoutEffect to read and mutate multiple DOM nodes sequentially forces the browser to recalculate styles and layout multiple times per frame. Batch DOM reads together first, then batch DOM writes.",
    "importantPoints": [
      "Layout thrashing occurs when JavaScript repeatedly interleaves DOM writes and DOM reads (e.g. writing style.width then reading offsetWidth). Misusing useLayoutEffect to read and mutate multiple DOM nodes sequentially forces the browser to recalculate styles and layout multiple times per frame.",
      "Batch DOM reads together first, then batch DOM writes."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "layout-thrashing",
      "uselayouteffect",
      "browser-reflow"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "Why does React require that component render functions be pure functions?",
    "answer": "Pure render functions guarantee that given the same props and state, they always return the same JSX without mutating external variables. This allows React to safely pause, restart, abort, or reorder rendering in Concurrent Mode without producing corrupted UI or side effect bugs.",
    "explanation": "Impure functions cause unpredictable bugs when re-rendered speculatively.",
    "interviewAnswer": "Pure render functions guarantee that given the same props and state, they always return the same JSX without mutating external variables. This allows React to safely pause, restart, abort, or reorder rendering in Concurrent Mode without producing corrupted UI or side effect bugs. Impure functions cause unpredictable bugs when re-rendered speculatively.",
    "importantPoints": [
      "Pure render functions guarantee that given the same props and state, they always return the same JSX without mutating external variables. This allows React to safely pause, restart, abort, or reorder rendering in Concurrent Mode without producing corrupted UI or side effect bugs.",
      "Impure functions cause unpredictable bugs when re-rendered speculatively."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "purity",
      "concurrent-mode",
      "idempotence"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React 18 handle rendering errors that occur within concurrent transition updates?",
    "answer": "React 18 will automatically catch errors in transition updates and retry rendering synchronously in urgent mode. If the error persists synchronously, it bubbles to the nearest Error Boundary.",
    "explanation": "Guarantees that temporary concurrent race conditions do not crash the application unnecessarily.",
    "interviewAnswer": "React 18 will automatically catch errors in transition updates and retry rendering synchronously in urgent mode. If the error persists synchronously, it bubbles to the nearest Error Boundary. Guarantees that temporary concurrent race conditions do not crash the application unnecessarily.",
    "importantPoints": [
      "React 18 will automatically catch errors in transition updates and retry rendering synchronously in urgent mode. If the error persists synchronously, it bubbles to the nearest Error Boundary.",
      "Guarantees that temporary concurrent race conditions do not crash the application unnecessarily."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "error-handling",
      "transitions",
      "react18"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the role of Fiber.tag in the internal React Fiber node architecture?",
    "answer": "Fiber.tag is a numerical enum that designates the work type of the Fiber node (e.g. FunctionComponent = 0, ClassComponent = 1, HostRoot = 3, HostComponent = 5 for HTML tags, HostText = 6 for text, SuspenseComponent = 13). React switch-cases on tag to execute the proper reconciliation pipeline.",
    "explanation": "Allows React scheduler to handle diverse UI elements uniformly.",
    "interviewAnswer": "Fiber.tag is a numerical enum that designates the work type of the Fiber node (e.g. FunctionComponent = 0, ClassComponent = 1, HostRoot = 3, HostComponent = 5 for HTML tags, HostText = 6 for text, SuspenseComponent = 13). React switch-cases on tag to execute the proper reconciliation pipeline. Allows React scheduler to handle diverse UI elements uniformly.",
    "importantPoints": [
      "Fiber.tag is a numerical enum that designates the work type of the Fiber node (e.g. FunctionComponent = 0, ClassComponent = 1, HostRoot = 3, HostComponent = 5 for HTML tags, HostText = 6 for text, SuspenseComponent = 13). React switch-cases on tag to execute the proper reconciliation pipeline.",
      "Allows React scheduler to handle diverse UI elements uniformly."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "fiber-internals",
      "fiber-tag",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "Why does updating an element with dangerouslySetInnerHTML bypass React virtual DOM reconciliation for its contents?",
    "answer": "dangerouslySetInnerHTML directly assigns the innerHTML of the underlying DOM element. React creates a single Fiber node for the parent container and ignores whatever DOM child nodes the browser creates inside it, delegating all internal rendering to the browser HTML parser.",
    "explanation": "Subsequent React renders will overwrite the contents if the HTML string changes.",
    "interviewAnswer": "dangerouslySetInnerHTML directly assigns the innerHTML of the underlying DOM element. React creates a single Fiber node for the parent container and ignores whatever DOM child nodes the browser creates inside it, delegating all internal rendering to the browser HTML parser. Subsequent React renders will overwrite the contents if the HTML string changes.",
    "importantPoints": [
      "dangerouslySetInnerHTML directly assigns the innerHTML of the underlying DOM element. React creates a single Fiber node for the parent container and ignores whatever DOM child nodes the browser creates inside it, delegating all internal rendering to the browser HTML parser.",
      "Subsequent React renders will overwrite the contents if the HTML string changes."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "dangerouslysetinnerhtml",
      "dom",
      "security"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How do you prevent a component from re-rendering when a parent updates, without using React.memo?",
    "answer": "Pass the component as a JSX prop (like children) from a common ancestor above the parent: <Parent><StaticChild /></Parent>. Since StaticChild is created in the ancestor, its props reference is stable when Parent re-renders, causing React to bail out of rendering StaticChild.",
    "explanation": "Classic component composition pattern that avoids memoization overhead.",
    "interviewAnswer": "Pass the component as a JSX prop (like children) from a common ancestor above the parent: <Parent><StaticChild /></Parent>. Since StaticChild is created in the ancestor, its props reference is stable when Parent re-renders, causing React to bail out of rendering StaticChild. Classic component composition pattern that avoids memoization overhead.",
    "importantPoints": [
      "Pass the component as a JSX prop (like children) from a common ancestor above the parent: <Parent><StaticChild /></Parent>. Since StaticChild is created in the ancestor, its props reference is stable when Parent re-renders, causing React to bail out of rendering StaticChild.",
      "Classic component composition pattern that avoids memoization overhead."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "composition",
      "optimization",
      "children"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the difference between shallow rendering and full DOM rendering in React test suites?",
    "answer": "Shallow rendering renders only the component itself one level deep, asserting on what JSX it outputs without instantiating or executing child components. Full DOM rendering (React Testing Library) renders the entire component tree into a simulated DOM (jsdom), testing real user interactions and effects.",
    "explanation": "Shallow rendering tests implementation details; full rendering tests actual user behavior.",
    "interviewAnswer": "Shallow rendering renders only the component itself one level deep, asserting on what JSX it outputs without instantiating or executing child components. Full DOM rendering (React Testing Library) renders the entire component tree into a simulated DOM (jsdom), testing real user interactions and effects. Shallow rendering tests implementation details; full rendering tests actual user behavior.",
    "importantPoints": [
      "Shallow rendering renders only the component itself one level deep, asserting on what JSX it outputs without instantiating or executing child components. Full DOM rendering (React Testing Library) renders the entire component tree into a simulated DOM (jsdom), testing real user interactions and effects.",
      "Shallow rendering tests implementation details; full rendering tests actual user behavior."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "testing",
      "shallow-rendering",
      "rtl"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React handle multiple sibling elements when rendering arrays vs fragments?",
    "answer": "Rendering an array requires each item to have an explicit \"key\" prop ([<div key=\"1\" />, <div key=\"2\" />]). Rendering multiple elements inside a Fragment (<><div>1</div><div>2</div></>) does not require keys unless the Fragment itself is part of an array mapping.",
    "explanation": "Static sibling elements have fixed positions; dynamic arrays can be reordered.",
    "interviewAnswer": "Rendering an array requires each item to have an explicit \"key\" prop ([<div key=\"1\" />, <div key=\"2\" />]). Rendering multiple elements inside a Fragment (<><div>1</div><div>2</div></>) does not require keys unless the Fragment itself is part of an array mapping. Static sibling elements have fixed positions; dynamic arrays can be reordered.",
    "importantPoints": [
      "Rendering an array requires each item to have an explicit \"key\" prop ([<div key=\"1\" />, <div key=\"2\" />]). Rendering multiple elements inside a Fragment (<><div>1</div><div>2</div></>) does not require keys unless the Fragment itself is part of an array mapping.",
      "Static sibling elements have fixed positions; dynamic arrays can be reordered."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "arrays",
      "fragments",
      "keys"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the impact of rendering large data sets with 5,000 DOM nodes on browser memory and paint performance?",
    "answer": "Rendering 5,000 DOM nodes inflates DOM tree memory, increases style recalculation time, degrades scrolling to below 30 FPS, and slows down all subsequent reconciliation passes. The solution is Virtualization (react-window / @tanstack/virtual), which renders only the 20-30 rows currently visible in the viewport.",
    "explanation": "DOM elements are heavyweight browser objects; recycling them via virtual scrolling maintains steady 60 FPS.",
    "interviewAnswer": "Rendering 5,000 DOM nodes inflates DOM tree memory, increases style recalculation time, degrades scrolling to below 30 FPS, and slows down all subsequent reconciliation passes. The solution is Virtualization (react-window / @tanstack/virtual), which renders only the 20-30 rows currently visible in the viewport. DOM elements are heavyweight browser objects; recycling them via virtual scrolling maintains steady 60 FPS.",
    "importantPoints": [
      "Rendering 5,000 DOM nodes inflates DOM tree memory, increases style recalculation time, degrades scrolling to below 30 FPS, and slows down all subsequent reconciliation passes. The solution is Virtualization (react-window / @tanstack/virtual), which renders only the 20-30 rows currently visible in the viewport.",
      "DOM elements are heavyweight browser objects; recycling them via virtual scrolling maintains steady 60 FPS."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "virtualization",
      "dom-performance",
      "large-lists"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React 19 handle rendering form actions and server functions?",
    "answer": "In React 19, form actions (<form action={action}>) handle async server or client transitions natively. React manages submission states, transitions, pending indicators, and resets without requiring manual onSubmit event listeners or preventDefault() calls.",
    "explanation": "Closes the gap between progressive HTML standards and reactive client state.",
    "interviewAnswer": "In React 19, form actions (<form action={action}>) handle async server or client transitions natively. React manages submission states, transitions, pending indicators, and resets without requiring manual onSubmit event listeners or preventDefault() calls. Closes the gap between progressive HTML standards and reactive client state.",
    "importantPoints": [
      "In React 19, form actions (<form action={action}>) handle async server or client transitions natively. React manages submission states, transitions, pending indicators, and resets without requiring manual onSubmit event listeners or preventDefault() calls.",
      "Closes the gap between progressive HTML standards and reactive client state."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "react19",
      "form-actions",
      "server-functions"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the difference between reconciliation and rendering in React terminology?",
    "answer": "Rendering is the process where React calls your components to compute what the virtual DOM tree looks like. Reconciliation is the specific diffing algorithm that compares the new virtual DOM tree with the old virtual DOM tree to calculate the minimal list of DOM mutations required.",
    "explanation": "Rendering produces the new Virtual DOM; reconciliation compares and plans DOM updates.",
    "interviewAnswer": "Rendering is the process where React calls your components to compute what the virtual DOM tree looks like. Reconciliation is the specific diffing algorithm that compares the new virtual DOM tree with the old virtual DOM tree to calculate the minimal list of DOM mutations required. Rendering produces the new Virtual DOM; reconciliation compares and plans DOM updates.",
    "importantPoints": [
      "Rendering is the process where React calls your components to compute what the virtual DOM tree looks like. Reconciliation is the specific diffing algorithm that compares the new virtual DOM tree with the old virtual DOM tree to calculate the minimal list of DOM mutations required.",
      "Rendering produces the new Virtual DOM; reconciliation compares and plans DOM updates."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "reconciliation",
      "definitions",
      "mental-model"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "Why does setting state to the exact same primitive value (e.g. setCount(0) when count is already 0) skip rendering?",
    "answer": "React uses Object.is() equality check. When it detects prevState === nextState, it immediately marks the Fiber as clean and bails out of both the render phase and the commit phase, saving CPU cycles.",
    "explanation": "State mutation checks are synchronous and instantaneous.",
    "interviewAnswer": "React uses Object.is() equality check. When it detects prevState === nextState, it immediately marks the Fiber as clean and bails out of both the render phase and the commit phase, saving CPU cycles. State mutation checks are synchronous and instantaneous.",
    "importantPoints": [
      "React uses Object.is() equality check. When it detects prevState === nextState, it immediately marks the Fiber as clean and bails out of both the render phase and the commit phase, saving CPU cycles.",
      "State mutation checks are synchronous and instantaneous."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "usestate",
      "bailout",
      "object-is"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the \"commitRoot\" function in React reconciler architecture?",
    "answer": "commitRoot is the primary entry point to the Commit Phase in React. It takes the completed workInProgress Fiber tree and synchronously runs: 1) Before mutation phase (getSnapshotBeforeUpdate), 2) Mutation phase (DOM updates, removals, insertions), 3) Layout phase (useLayoutEffect), and finally schedules passive effects (useEffect).",
    "explanation": "Coordinates the entire physical browser paint pipeline.",
    "interviewAnswer": "commitRoot is the primary entry point to the Commit Phase in React. It takes the completed workInProgress Fiber tree and synchronously runs: 1) Before mutation phase (getSnapshotBeforeUpdate), 2) Mutation phase (DOM updates, removals, insertions), 3) Layout phase (useLayoutEffect), and finally schedules passive effects (useEffect). Coordinates the entire physical browser paint pipeline.",
    "importantPoints": [
      "commitRoot is the primary entry point to the Commit Phase in React. It takes the completed workInProgress Fiber tree and synchronously runs: 1) Before mutation phase (getSnapshotBeforeUpdate), 2) Mutation phase (DOM updates, removals, insertions), 3) Layout phase (useLayoutEffect), and finally schedules passive effects (useEffect).",
      "Coordinates the entire physical browser paint pipeline."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "commit-phase",
      "fiber-internals",
      "commitroot"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React prevent XSS (Cross-Site Scripting) attacks when rendering user-submitted text strings in JSX?",
    "answer": "By default, React escapes all string values embedded in JSX before rendering them to the DOM ({userInput}). It converts HTML entities (<, >, &, ', \") into safe text characters, preventing malicious script tags (<script>) from executing.",
    "explanation": "The only way to inject unescaped HTML is dangerouslySetInnerHTML.",
    "interviewAnswer": "By default, React escapes all string values embedded in JSX before rendering them to the DOM ({userInput}). It converts HTML entities (<, >, &, ', \") into safe text characters, preventing malicious script tags (<script>) from executing. The only way to inject unescaped HTML is dangerouslySetInnerHTML.",
    "importantPoints": [
      "By default, React escapes all string values embedded in JSX before rendering them to the DOM ({userInput}). It converts HTML entities (<, >, &, ', \") into safe text characters, preventing malicious script tags (<script>) from executing.",
      "The only way to inject unescaped HTML is dangerouslySetInnerHTML."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "security",
      "xss",
      "escaping"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "Why should you never mutate props directly inside a React component render function?",
    "answer": "Props are strictly read-only and immutable. Mutating props directly corrupts the parent component's state references, breaks shallow equality checks in React.memo, and introduces non-deterministic rendering bugs across renders.",
    "explanation": "Props represent pure input parameters from the parent component.",
    "interviewAnswer": "Props are strictly read-only and immutable. Mutating props directly corrupts the parent component's state references, breaks shallow equality checks in React.memo, and introduces non-deterministic rendering bugs across renders. Props represent pure input parameters from the parent component.",
    "importantPoints": [
      "Props are strictly read-only and immutable. Mutating props directly corrupts the parent component's state references, breaks shallow equality checks in React.memo, and introduces non-deterministic rendering bugs across renders.",
      "Props represent pure input parameters from the parent component."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "props",
      "immutability",
      "pure-functions"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How can you debug why a specific component rendered using the \"why-did-you-render\" library?",
    "answer": "Install @welldone-software/why-did-you-render. Enable it on the component: MyComponent.whyDidYouRender = true. The library patches React in development to monitor renders and log exact notifications when a component re-rendered due to identical object/function references.",
    "explanation": "Instantly identifies accidental reference recreations without manual console logs.",
    "interviewAnswer": "Install @welldone-software/why-did-you-render. Enable it on the component: MyComponent.whyDidYouRender = true. The library patches React in development to monitor renders and log exact notifications when a component re-rendered due to identical object/function references. Instantly identifies accidental reference recreations without manual console logs.",
    "importantPoints": [
      "Install @welldone-software/why-did-you-render. Enable it on the component: MyComponent.whyDidYouRender = true. The library patches React in development to monitor renders and log exact notifications when a component re-rendered due to identical object/function references.",
      "Instantly identifies accidental reference recreations without manual console logs."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Production / Real-World",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "why-did-you-render",
      "debugging",
      "performance"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the role of HostComponent vs HostText in React Fiber architecture?",
    "answer": "HostComponent represents a native DOM element node (like <div>, <button>, or <p>), managing DOM properties, styles, and event listeners. HostText represents a raw DOM text node (TextNode) containing pure string or numerical text.",
    "explanation": "Allows the reconciler to interact with different DOM node types through specialized adapters.",
    "interviewAnswer": "HostComponent represents a native DOM element node (like <div>, <button>, or <p>), managing DOM properties, styles, and event listeners. HostText represents a raw DOM text node (TextNode) containing pure string or numerical text. Allows the reconciler to interact with different DOM node types through specialized adapters.",
    "importantPoints": [
      "HostComponent represents a native DOM element node (like <div>, <button>, or <p>), managing DOM properties, styles, and event listeners. HostText represents a raw DOM text node (TextNode) containing pure string or numerical text.",
      "Allows the reconciler to interact with different DOM node types through specialized adapters."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "fiber-internals",
      "hostcomponent",
      "dom"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React render lists of elements created via Array.prototype.map() without keys in development vs production?",
    "answer": "In development, React logs a red console warning: \"Each child in a list should have a unique key prop\" and falls back to using the array index as the key. In production, it suppresses the warning and silently uses index as the key, carrying all performance and mutation risks.",
    "explanation": "Never ignore key warnings in development as they foreshadow production bugs.",
    "interviewAnswer": "In development, React logs a red console warning: \"Each child in a list should have a unique key prop\" and falls back to using the array index as the key. In production, it suppresses the warning and silently uses index as the key, carrying all performance and mutation risks. Never ignore key warnings in development as they foreshadow production bugs.",
    "importantPoints": [
      "In development, React logs a red console warning: \"Each child in a list should have a unique key prop\" and falls back to using the array index as the key. In production, it suppresses the warning and silently uses index as the key, carrying all performance and mutation risks.",
      "Never ignore key warnings in development as they foreshadow production bugs."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "keys",
      "warnings",
      "development-vs-production"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the difference between a controlled component re-render and an uncontrolled DOM update?",
    "answer": "In a controlled component, every keystroke updates React state, triggering a complete React render cycle and updating the DOM input value through props. In an uncontrolled component, the DOM handles the input change internally and React does not re-render until an event handler explicitly reads the DOM value via a ref.",
    "explanation": "Uncontrolled inputs avoid render overhead on high-speed typing.",
    "interviewAnswer": "In a controlled component, every keystroke updates React state, triggering a complete React render cycle and updating the DOM input value through props. In an uncontrolled component, the DOM handles the input change internally and React does not re-render until an event handler explicitly reads the DOM value via a ref. Uncontrolled inputs avoid render overhead on high-speed typing.",
    "importantPoints": [
      "In a controlled component, every keystroke updates React state, triggering a complete React render cycle and updating the DOM input value through props. In an uncontrolled component, the DOM handles the input change internally and React does not re-render until an event handler explicitly reads the DOM value via a ref.",
      "Uncontrolled inputs avoid render overhead on high-speed typing."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "controlled-vs-uncontrolled",
      "performance",
      "forms"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React 18 Suspense render fallbacks without unmounting the existing UI when navigating between tabs?",
    "answer": "By wrapping the tab change in startTransition, React tells Suspense to keep the current tab UI visible and interactive while fetching the next tab's data in the background. Once the new tab data is ready, React swaps them in a single render pass without ever showing the loading spinner.",
    "explanation": "Provides seamless transitions without UI flickering.",
    "interviewAnswer": "By wrapping the tab change in startTransition, React tells Suspense to keep the current tab UI visible and interactive while fetching the next tab's data in the background. Once the new tab data is ready, React swaps them in a single render pass without ever showing the loading spinner. Provides seamless transitions without UI flickering.",
    "importantPoints": [
      "By wrapping the tab change in startTransition, React tells Suspense to keep the current tab UI visible and interactive while fetching the next tab's data in the background. Once the new tab data is ready, React swaps them in a single render pass without ever showing the loading spinner.",
      "Provides seamless transitions without UI flickering."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "suspense",
      "transitions",
      "ux"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "Why does React require that component names in JSX start with a capital letter?",
    "answer": "JSX is compiled to React.createElement or _jsx calls. The compiler differentiates between built-in HTML tags (passed as strings like \"div\") and custom components (passed as identifiers like MyButton) solely based on whether the first character is capitalized.",
    "explanation": "Lowercase <button /> produces HTML button; capitalized <Button /> calls your component.",
    "interviewAnswer": "JSX is compiled to React.createElement or _jsx calls. The compiler differentiates between built-in HTML tags (passed as strings like \"div\") and custom components (passed as identifiers like MyButton) solely based on whether the first character is capitalized. Lowercase <button /> produces HTML button; capitalized <Button /> calls your component.",
    "importantPoints": [
      "JSX is compiled to React.createElement or _jsx calls. The compiler differentiates between built-in HTML tags (passed as strings like \"div\") and custom components (passed as identifiers like MyButton) solely based on whether the first character is capitalized.",
      "Lowercase <button /> produces HTML button; capitalized <Button /> calls your component."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "jsx",
      "compiler",
      "syntax"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the \"Offscreen\" API (Activity component) in React, and how does it optimize background rendering?",
    "answer": "The Offscreen component (now called <Activity mode=\"hidden\">) preserves component Fiber trees and DOM nodes in memory when hidden rather than unmounting them. When made visible again, it restores the UI instantly with preserved scroll position and state without re-fetching data or re-mounting.",
    "explanation": "Ideal for tab switching, drawer panels, and multi-step modal workflows.",
    "interviewAnswer": "The Offscreen component (now called <Activity mode=\"hidden\">) preserves component Fiber trees and DOM nodes in memory when hidden rather than unmounting them. When made visible again, it restores the UI instantly with preserved scroll position and state without re-fetching data or re-mounting. Ideal for tab switching, drawer panels, and multi-step modal workflows.",
    "importantPoints": [
      "The Offscreen component (now called <Activity mode=\"hidden\">) preserves component Fiber trees and DOM nodes in memory when hidden rather than unmounting them. When made visible again, it restores the UI instantly with preserved scroll position and state without re-fetching data or re-mounting.",
      "Ideal for tab switching, drawer panels, and multi-step modal workflows."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "activity",
      "offscreen",
      "react-internals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React handle conditional classes or inline style rendering cleanly without layout bugs?",
    "answer": "Use utility libraries like clsx or classnames to conditionally combine class strings cleanly, or use CSS custom properties for dynamic styles. Avoid passing newly created inline style objects {{ margin: 10 }} to heavily re-rendered children as it invalidates React.memo.",
    "explanation": "Pre-defined CSS classes are always preferred over dynamic inline style objects for performance.",
    "interviewAnswer": "Use utility libraries like clsx or classnames to conditionally combine class strings cleanly, or use CSS custom properties for dynamic styles. Avoid passing newly created inline style objects {{ margin: 10 }} to heavily re-rendered children as it invalidates React.memo. Pre-defined CSS classes are always preferred over dynamic inline style objects for performance.",
    "importantPoints": [
      "Use utility libraries like clsx or classnames to conditionally combine class strings cleanly, or use CSS custom properties for dynamic styles. Avoid passing newly created inline style objects {{ margin: 10 }} to heavily re-rendered children as it invalidates React.memo.",
      "Pre-defined CSS classes are always preferred over dynamic inline style objects for performance."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "styling",
      "clsx",
      "inline-styles"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React reconciliation process elements with the same key but different types?",
    "answer": "If two elements have the same key but different types (e.g. <input key=\"field\" type=\"text\" /> replaced by <textarea key=\"field\" />), React detects the type mismatch and destroys the entire old Fiber node and DOM element, creating a fresh one.",
    "explanation": "Keys only preserve state when the component or element type is also identical.",
    "interviewAnswer": "If two elements have the same key but different types (e.g. <input key=\"field\" type=\"text\" /> replaced by <textarea key=\"field\" />), React detects the type mismatch and destroys the entire old Fiber node and DOM element, creating a fresh one. Keys only preserve state when the component or element type is also identical.",
    "importantPoints": [
      "If two elements have the same key but different types (e.g. <input key=\"field\" type=\"text\" /> replaced by <textarea key=\"field\" />), React detects the type mismatch and destroys the entire old Fiber node and DOM element, creating a fresh one.",
      "Keys only preserve state when the component or element type is also identical."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "keys",
      "types",
      "reconciliation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the performance cost of deeply nested component trees during reconciliation?",
    "answer": "Deeply nested component trees increase the height of the Fiber tree, requiring more traversal steps during both render and commit phases. Additionally, deep trees increase call stack frames and make context propagation more expensive.",
    "explanation": "Keep component hierarchies reasonably flat using composition.",
    "interviewAnswer": "Deeply nested component trees increase the height of the Fiber tree, requiring more traversal steps during both render and commit phases. Additionally, deep trees increase call stack frames and make context propagation more expensive. Keep component hierarchies reasonably flat using composition.",
    "importantPoints": [
      "Deeply nested component trees increase the height of the Fiber tree, requiring more traversal steps during both render and commit phases. Additionally, deep trees increase call stack frames and make context propagation more expensive.",
      "Keep component hierarchies reasonably flat using composition."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "tree-depth",
      "performance",
      "fiber"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How does React Server-Side Rendering handle streaming HTML with renderToReadableStream on edge runtimes (Cloudflare Workers)?",
    "answer": "renderToReadableStream produces a Web standard ReadableStream that streams HTML chunks immediately as they are rendered by the edge runtime, reducing TTFB to under 50ms globally and supporting Suspense without Node.js stream dependencies.",
    "explanation": "Modern standard for edge-first web applications.",
    "interviewAnswer": "renderToReadableStream produces a Web standard ReadableStream that streams HTML chunks immediately as they are rendered by the edge runtime, reducing TTFB to under 50ms globally and supporting Suspense without Node.js stream dependencies. Modern standard for edge-first web applications.",
    "importantPoints": [
      "renderToReadableStream produces a Web standard ReadableStream that streams HTML chunks immediately as they are rendered by the edge runtime, reducing TTFB to under 50ms globally and supporting Suspense without Node.js stream dependencies.",
      "Modern standard for edge-first web applications."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "streaming-ssr",
      "edge-computing",
      "cloudflare"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "Why should you never write to localStorage or document.cookie inside a component render function?",
    "answer": "Render functions must be pure. Writing to browser storage during render produces side effects, fails during SSR (where window is undefined), and executes multiple times in Concurrent Mode and Strict Mode, causing duplicate or corrupted storage writes.",
    "explanation": "Storage writes belong strictly inside event handlers or useEffect.",
    "interviewAnswer": "Render functions must be pure. Writing to browser storage during render produces side effects, fails during SSR (where window is undefined), and executes multiple times in Concurrent Mode and Strict Mode, causing duplicate or corrupted storage writes. Storage writes belong strictly inside event handlers or useEffect.",
    "importantPoints": [
      "Render functions must be pure. Writing to browser storage during render produces side effects, fails during SSR (where window is undefined), and executes multiple times in Concurrent Mode and Strict Mode, causing duplicate or corrupted storage writes.",
      "Storage writes belong strictly inside event handlers or useEffect."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "localstorage",
      "side-effects",
      "purity"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "What is the difference between React Element, React Component, and React Node?",
    "answer": "React Element: a plain immutable JavaScript object created by JSX ({ type, props, key }). React Component: a function or class that accepts props and returns a React Element. React Node: any renderable unit in React (React Element, string, number, boolean, null, undefined, or array of React Nodes).",
    "explanation": "Core TypeScript typings (ReactElement vs ReactNode) depend on this distinction.",
    "interviewAnswer": "React Element: a plain immutable JavaScript object created by JSX ({ type, props, key }). React Component: a function or class that accepts props and returns a React Element. React Node: any renderable unit in React (React Element, string, number, boolean, null, undefined, or array of React Nodes). Core TypeScript typings (ReactElement vs ReactNode) depend on this distinction.",
    "importantPoints": [
      "React Element: a plain immutable JavaScript object created by JSX ({ type, props, key }). React Component: a function or class that accepts props and returns a React Element. React Node: any renderable unit in React (React Element, string, number, boolean, null, undefined, or array of React Nodes).",
      "Core TypeScript typings (ReactElement vs ReactNode) depend on this distinction."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "rendering",
      "typescript",
      "react-element",
      "react-node"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "rendering",
    "question": "How can you verify whether a performance bottleneck is caused by React rendering vs browser paint/layout execution in Chrome DevTools?",
    "answer": "Record a profile in Chrome DevTools Performance panel: inspect the main thread flame chart. If time is spent inside \"User Timing\" / function calls named \"render\", \"reconcile\", or component names, the issue is React rendering. If time is spent in purple/green blocks named \"Recalculate Style\", \"Layout\", or \"Paint\", the issue is DOM layout thrashing or heavy CSS.",
    "explanation": "Distinguishing JS execution time from browser rendering time is the first step in performance optimization.",
    "interviewAnswer": "Record a profile in Chrome DevTools Performance panel: inspect the main thread flame chart. If time is spent inside \"User Timing\" / function calls named \"render\", \"reconcile\", or component names, the issue is React rendering. If time is spent in purple/green blocks named \"Recalculate Style\", \"Layout\", or \"Paint\", the issue is DOM layout thrashing or heavy CSS. Distinguishing JS execution time from browser rendering time is the first step in performance optimization.",
    "importantPoints": [
      "Record a profile in Chrome DevTools Performance panel: inspect the main thread flame chart. If time is spent inside \"User Timing\" / function calls named \"render\", \"reconcile\", or component names, the issue is React rendering. If time is spent in purple/green blocks named \"Recalculate Style\", \"Layout\", or \"Paint\", the issue is DOM layout thrashing or heavy CSS.",
      "Distinguishing JS execution time from browser rendering time is the first step in performance optimization."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Logical / Scenario-Based",
    "isImportant": true,
    "tags": [
      "react",
      "rendering",
      "chrome-devtools",
      "profiling",
      "performance"
    ]
  }
];
