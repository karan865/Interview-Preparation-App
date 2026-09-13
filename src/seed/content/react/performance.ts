import { SeedQuestion } from '../types';

export const reactPerformanceQuestions: SeedQuestion[] = [
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "Your React application is working correctly but a critical page has become very slow. How would you determine whether the problem is rendering, JavaScript execution, network latency, or backend latency?",
    "answer": "Use browser developer tools systematically: 1) Network tab: check Time to First Byte (TTFB) to measure backend latency, and download duration to measure network/payload latency. 2) Chrome DevTools Performance tab: record an interaction. Check Long Tasks (>50ms). If the main thread is blocked by script evaluation or layout recalculations, inspect the flame chart. 3) React DevTools Profiler: inspect \"Commit duration\" and \"Render duration\". If React render time is low but total time is high, the bottleneck is external JS, third-party libraries, or DOM layout thrashing, not React reconciliation.",
    "explanation": "Never optimize blindly. Always measure first to pinpoint which tier of the stack is causing latency.",
    "interviewAnswer": "Use browser developer tools systematically: 1) Network tab: check Time to First Byte (TTFB) to measure backend latency, and download duration to measure network/payload latency. 2) Chrome DevTools Performance tab: record an interaction. Check Long Tasks (>50ms). If the main thread is blocked by script evaluation or layout recalculations, inspect the flame chart. 3) React DevTools Profiler: inspect \"Commit duration\" and \"Render duration\". If React render time is low but total time is high, the bottleneck is external JS, third-party libraries, or DOM layout thrashing, not React reconciliation. Never optimize blindly. Always measure first to pinpoint which tier of the stack is causing latency.",
    "importantPoints": [
      "Use browser developer tools systematically: 1) Network tab: check Time to First Byte (TTFB) to measure backend latency, and download duration to measure network/payload latency. 2) Chrome DevTools Performance tab: record an interaction. Check Long Tasks (>50ms). If the main thread is blocked by script evaluation or layout recalculations, inspect the flame chart. 3) React DevTools Profiler: inspect \"Commit duration\" and \"Render duration\". If React render time is low but total time is high, the bottleneck is external JS, third-party libraries, or DOM layout thrashing, not React reconciliation.",
      "Never optimize blindly. Always measure first to pinpoint which tier of the stack is causing latency."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Logical / Scenario-Based",
    "isImportant": true,
    "tags": [
      "react",
      "performance",
      "profiling",
      "troubleshooting",
      "diagnostics"
    ],
    "followUpQuestions": [
      "What specific metric in Chrome DevTools reveals layout thrashing?",
      "If TTFB is 800ms, will React.memo or code-splitting fix the page?",
      "How does Interaction to Next Paint (INP) measure this user experience?"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "A dashboard contains 10,000 rows in a table and the browser completely freezes when rendering. How would you diagnose and improve it?",
    "answer": "1) Diagnose: 10,000 table rows create 50,000+ real DOM nodes, exhausting browser memory and causing massive style recalculation and layout times. 2) Fix: Implement Virtualization (Windowing) using react-window or @tanstack/virtual. Virtualization calculates the scroll position and renders only the ~25 rows currently visible in the viewport, recycling DOM nodes as the user scrolls. 3) Backed by server-side pagination or cursor-based infinite scrolling to avoid transferring 10,000 rows over the network initially.",
    "explanation": "Virtualization keeps the DOM node count constant (~30 nodes) regardless of whether the dataset contains 100 or 1,000,000 items.",
    "interviewAnswer": "1) Diagnose: 10,000 table rows create 50,000+ real DOM nodes, exhausting browser memory and causing massive style recalculation and layout times. 2) Fix: Implement Virtualization (Windowing) using react-window or @tanstack/virtual. Virtualization calculates the scroll position and renders only the ~25 rows currently visible in the viewport, recycling DOM nodes as the user scrolls. 3) Backed by server-side pagination or cursor-based infinite scrolling to avoid transferring 10,000 rows over the network initially. Virtualization keeps the DOM node count constant (~30 nodes) regardless of whether the dataset contains 100 or 1,000,000 items.",
    "importantPoints": [
      "1) Diagnose: 10,000 table rows create 50,000+ real DOM nodes, exhausting browser memory and causing massive style recalculation and layout times. 2) Fix: Implement Virtualization (Windowing) using react-window or @tanstack/virtual. Virtualization calculates the scroll position and renders only the ~25 rows currently visible in the viewport, recycling DOM nodes as the user scrolls. 3) Backed by server-side pagination or cursor-based infinite scrolling to avoid transferring 10,000 rows over the network initially.",
      "Virtualization keeps the DOM node count constant (~30 nodes) regardless of whether the dataset contains 100 or 1,000,000 items."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "react",
      "performance",
      "virtualization",
      "large-lists",
      "react-window"
    ],
    "followUpQuestions": [
      "How do you handle dynamic variable row heights in a virtualized table?",
      "Why would React.memo alone NOT solve this 10,000-row freeze?",
      "When would server-side pagination be preferable to virtualization?"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "A search input becomes extremely laggy when the user types rapidly. What would you check first, and what are the best remediation techniques?",
    "answer": "Check what runs synchronously on every keystroke. Common causes: 1) Filtering a huge array in the same render pass, 2) Expensive re-renders of the results list blocking the main thread, or 3) Immediate uncontrolled API dispatches. Remediation: 1) Keep the text input local and urgent, 2) Wrap list filtering/rendering in useTransition or useDeferredValue so typing is never interrupted, 3) Debounce the backend query by 250ms, and 4) Memoize individual list rows with React.memo.",
    "explanation": "Separating urgent input updates from non-urgent list filtering guarantees instantaneous 60fps typing responsiveness.",
    "interviewAnswer": "Check what runs synchronously on every keystroke. Common causes: 1) Filtering a huge array in the same render pass, 2) Expensive re-renders of the results list blocking the main thread, or 3) Immediate uncontrolled API dispatches. Remediation: 1) Keep the text input local and urgent, 2) Wrap list filtering/rendering in useTransition or useDeferredValue so typing is never interrupted, 3) Debounce the backend query by 250ms, and 4) Memoize individual list rows with React.memo. Separating urgent input updates from non-urgent list filtering guarantees instantaneous 60fps typing responsiveness.",
    "importantPoints": [
      "Check what runs synchronously on every keystroke. Common causes: 1) Filtering a huge array in the same render pass, 2) Expensive re-renders of the results list blocking the main thread, or 3) Immediate uncontrolled API dispatches. Remediation: 1) Keep the text input local and urgent, 2) Wrap list filtering/rendering in useTransition or useDeferredValue so typing is never interrupted, 3) Debounce the backend query by 250ms, and 4) Memoize individual list rows with React.memo.",
      "Separating urgent input updates from non-urgent list filtering guarantees instantaneous 60fps typing responsiveness."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "performance",
      "search-input",
      "usetransition",
      "debouncing"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "The developer added useMemo and useCallback everywhere across the application, but the application is still slow or actually slower. What does this tell you?",
    "answer": "It indicates \"cargo-cult\" optimization without profiling. useMemo and useCallback do not make code faster by default; they add memory overhead (storing dependency arrays, closures, and cache references) and CPU overhead (shallow equality checks on every render). If the child components are not wrapped in React.memo, or if dependencies change on every render, the memoization provides zero bailout benefit while adding constant overhead.",
    "explanation": "Memoization only helps when either: 1) An internal calculation is genuinely computationally heavy (e.g. matrix math, heavy filtering), or 2) A reference is passed to a memoized child (React.memo) or hook dependency.",
    "interviewAnswer": "It indicates \"cargo-cult\" optimization without profiling. useMemo and useCallback do not make code faster by default; they add memory overhead (storing dependency arrays, closures, and cache references) and CPU overhead (shallow equality checks on every render). If the child components are not wrapped in React.memo, or if dependencies change on every render, the memoization provides zero bailout benefit while adding constant overhead. Memoization only helps when either: 1) An internal calculation is genuinely computationally heavy (e.g. matrix math, heavy filtering), or 2) A reference is passed to a memoized child (React.memo) or hook dependency.",
    "importantPoints": [
      "It indicates \"cargo-cult\" optimization without profiling. useMemo and useCallback do not make code faster by default; they add memory overhead (storing dependency arrays, closures, and cache references) and CPU overhead (shallow equality checks on every render). If the child components are not wrapped in React.memo, or if dependencies change on every render, the memoization provides zero bailout benefit while adding constant overhead.",
      "Memoization only helps when either: 1) An internal calculation is genuinely computationally heavy (e.g. matrix math, heavy filtering), or 2) A reference is passed to a memoized child (React.memo) or hook dependency."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Logical / Scenario-Based",
    "isImportant": true,
    "tags": [
      "react",
      "performance",
      "usememo",
      "usecallback",
      "over-optimization"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "A React component keeps re-rendering even though its visible data on screen has not changed. How would you investigate?",
    "answer": "1) Open React DevTools Profiler, enable \"Record why each component rendered\" in settings, and record an action. 2) Inspect the component: it will explicitly tell you whether props changed, hooks changed, or parent rendered. 3) If props changed, inspect which prop: commonly an unmemoized inline object {{...}}, array [...], or arrow function () => {}. 4) If props are identical, check if a subscribed Context updated or if the parent re-rendered without React.memo on the child.",
    "explanation": "React re-renders children by default whenever their parent re-renders, regardless of whether props changed.",
    "interviewAnswer": "1) Open React DevTools Profiler, enable \"Record why each component rendered\" in settings, and record an action. 2) Inspect the component: it will explicitly tell you whether props changed, hooks changed, or parent rendered. 3) If props changed, inspect which prop: commonly an unmemoized inline object {{...}}, array [...], or arrow function () => {}. 4) If props are identical, check if a subscribed Context updated or if the parent re-rendered without React.memo on the child. React re-renders children by default whenever their parent re-renders, regardless of whether props changed.",
    "importantPoints": [
      "1) Open React DevTools Profiler, enable \"Record why each component rendered\" in settings, and record an action. 2) Inspect the component: it will explicitly tell you whether props changed, hooks changed, or parent rendered. 3) If props changed, inspect which prop: commonly an unmemoized inline object {{...}}, array [...], or arrow function () => {}. 4) If props are identical, check if a subscribed Context updated or if the parent re-rendered without React.memo on the child.",
      "React re-renders children by default whenever their parent re-renders, regardless of whether props changed."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "performance",
      "re-rendering",
      "profiler",
      "diagnostics"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "Users report that the application becomes progressively slower after navigating between screens several times. How would you investigate a possible memory leak?",
    "answer": "1) Use Chrome DevTools Memory tab: take a Heap Snapshot on Screen A, navigate to Screen B and back to A 5 times, take a second Heap Snapshot. 2) In Comparison view, filter by \"Detached HTMLElement\" or constructor names. 3) Look for detached DOM trees retained by uncleared setInterval/setTimeout, active WebSocket/EventSource listeners, un-aborted fetch promises, or global event listeners (window.addEventListener) whose useEffect cleanup was omitted or broken.",
    "explanation": "Retained closures keep references to entire unmounted component Fiber trees, preventing garbage collection.",
    "interviewAnswer": "1) Use Chrome DevTools Memory tab: take a Heap Snapshot on Screen A, navigate to Screen B and back to A 5 times, take a second Heap Snapshot. 2) In Comparison view, filter by \"Detached HTMLElement\" or constructor names. 3) Look for detached DOM trees retained by uncleared setInterval/setTimeout, active WebSocket/EventSource listeners, un-aborted fetch promises, or global event listeners (window.addEventListener) whose useEffect cleanup was omitted or broken. Retained closures keep references to entire unmounted component Fiber trees, preventing garbage collection.",
    "importantPoints": [
      "1) Use Chrome DevTools Memory tab: take a Heap Snapshot on Screen A, navigate to Screen B and back to A 5 times, take a second Heap Snapshot. 2) In Comparison view, filter by \"Detached HTMLElement\" or constructor names. 3) Look for detached DOM trees retained by uncleared setInterval/setTimeout, active WebSocket/EventSource listeners, un-aborted fetch promises, or global event listeners (window.addEventListener) whose useEffect cleanup was omitted or broken.",
      "Retained closures keep references to entire unmounted component Fiber trees, preventing garbage collection."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Logical / Scenario-Based",
    "isImportant": true,
    "tags": [
      "react",
      "performance",
      "memory-leaks",
      "heap-snapshot",
      "chrome-devtools"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "The React application has a very large JavaScript bundle (e.g. 5 MB) causing slow initial load times. How would you reduce initial bundle size?",
    "answer": "1) Analyze bundle with @next/bundle-analyzer or source-map-explorer to find the biggest culprits. 2) Implement Route-based Code Splitting using React.lazy and Suspense so users only download code for the page they visit. 3) Component-based Splitting: dynamically import heavy modal dialogs, rich text editors (Monaco/DraftJS), and chart libraries (Chart.js/D3) only when opened. 4) Replace bloated libraries: swap moment.js for date-fns/dayjs, replace lodash with lodash-es or native JS. 5) Enable Brotli/Gzip compression on CDN.",
    "explanation": "Code splitting breaks the monolithic bundle into bite-sized chunks loaded on demand.",
    "interviewAnswer": "1) Analyze bundle with @next/bundle-analyzer or source-map-explorer to find the biggest culprits. 2) Implement Route-based Code Splitting using React.lazy and Suspense so users only download code for the page they visit. 3) Component-based Splitting: dynamically import heavy modal dialogs, rich text editors (Monaco/DraftJS), and chart libraries (Chart.js/D3) only when opened. 4) Replace bloated libraries: swap moment.js for date-fns/dayjs, replace lodash with lodash-es or native JS. 5) Enable Brotli/Gzip compression on CDN. Code splitting breaks the monolithic bundle into bite-sized chunks loaded on demand.",
    "importantPoints": [
      "1) Analyze bundle with @next/bundle-analyzer or source-map-explorer to find the biggest culprits. 2) Implement Route-based Code Splitting using React.lazy and Suspense so users only download code for the page they visit. 3) Component-based Splitting: dynamically import heavy modal dialogs, rich text editors (Monaco/DraftJS), and chart libraries (Chart.js/D3) only when opened. 4) Replace bloated libraries: swap moment.js for date-fns/dayjs, replace lodash with lodash-es or native JS. 5) Enable Brotli/Gzip compression on CDN.",
      "Code splitting breaks the monolithic bundle into bite-sized chunks loaded on demand."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "react",
      "performance",
      "code-splitting",
      "bundle-size",
      "react-lazy"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How does React.memo work, and when should you provide a custom comparison function areEqual(prevProps, nextProps)?",
    "answer": "React.memo is a higher-order component that wraps a functional component. By default, it performs a shallow reference comparison (Object.is) on all props. You provide a custom areEqual function when props contain deeply nested structures or objects where only specific sub-properties matter for rendering, returning true if props are equal (skip render) and false if different (trigger render).",
    "explanation": "Note: areEqual returns the OPPOSITE of class component shouldComponentUpdate (true = skip render).",
    "interviewAnswer": "React.memo is a higher-order component that wraps a functional component. By default, it performs a shallow reference comparison (Object.is) on all props. You provide a custom areEqual function when props contain deeply nested structures or objects where only specific sub-properties matter for rendering, returning true if props are equal (skip render) and false if different (trigger render). Note: areEqual returns the OPPOSITE of class component shouldComponentUpdate (true = skip render).",
    "importantPoints": [
      "React.memo is a higher-order component that wraps a functional component. By default, it performs a shallow reference comparison (Object.is) on all props. You provide a custom areEqual function when props contain deeply nested structures or objects where only specific sub-properties matter for rendering, returning true if props are equal (skip render) and false if different (trigger render).",
      "Note: areEqual returns the OPPOSITE of class component shouldComponentUpdate (true = skip render)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "performance",
      "react-memo",
      "shallow-comparison",
      "areequal"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "Why does passing an inline object style={{ color: \"red\" }} or callback onClick={() => doSomething()} break React.memo optimization?",
    "answer": "In JavaScript, {} !== {} and () => {} !== () => {}. Every time the parent renders, a new object and function reference is allocated in memory. React.memo shallow comparison checks prevProps.style === nextProps.style, which evaluates to false, forcing the child to re-render every time despite identical values.",
    "explanation": "Extract styles to CSS classes or useMemo, and wrap callbacks in useCallback or remove the child React.memo if parent updates are rare.",
    "interviewAnswer": "In JavaScript, {} !== {} and () => {} !== () => {}. Every time the parent renders, a new object and function reference is allocated in memory. React.memo shallow comparison checks prevProps.style === nextProps.style, which evaluates to false, forcing the child to re-render every time despite identical values. Extract styles to CSS classes or useMemo, and wrap callbacks in useCallback or remove the child React.memo if parent updates are rare.",
    "importantPoints": [
      "In JavaScript, {} !== {} and () => {} !== () => {}. Every time the parent renders, a new object and function reference is allocated in memory. React.memo shallow comparison checks prevProps.style === nextProps.style, which evaluates to false, forcing the child to re-render every time despite identical values.",
      "Extract styles to CSS classes or useMemo, and wrap callbacks in useCallback or remove the child React.memo if parent updates are rare."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "react-memo",
      "inline-functions",
      "gotcha"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "What is Interaction to Next Paint (INP) and how does it replace First Input Delay (FID) as a Core Web Vital for React apps?",
    "answer": "INP measures the responsiveness of ALL user interactions (clicks, taps, key presses) throughout the entire user session, reporting the worst or 98th percentile latency until the browser actually paints the next visual frame. FID only measured the first click and only measured delay until JS started executing, ignoring slow React rendering that delayed the visual update.",
    "explanation": "React 18 useTransition directly optimizes INP by yielding the main thread so feedback paints immediately.",
    "interviewAnswer": "INP measures the responsiveness of ALL user interactions (clicks, taps, key presses) throughout the entire user session, reporting the worst or 98th percentile latency until the browser actually paints the next visual frame. FID only measured the first click and only measured delay until JS started executing, ignoring slow React rendering that delayed the visual update. React 18 useTransition directly optimizes INP by yielding the main thread so feedback paints immediately.",
    "importantPoints": [
      "INP measures the responsiveness of ALL user interactions (clicks, taps, key presses) throughout the entire user session, reporting the worst or 98th percentile latency until the browser actually paints the next visual frame. FID only measured the first click and only measured delay until JS started executing, ignoring slow React rendering that delayed the visual update.",
      "React 18 useTransition directly optimizes INP by yielding the main thread so feedback paints immediately."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "performance",
      "inp",
      "core-web-vitals",
      "user-experience"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How do you optimize images in a modern React application to improve Largest Contentful Paint (LCP)?",
    "answer": "1) Use modern image formats (WebP, AVIF) with appropriate compression. 2) Specify explicit width and height (or aspect-ratio) to prevent Cumulative Layout Shift (CLS). 3) Use responsive srcset and sizes attributes so mobile devices download smaller resolutions. 4) Add priority or fetchpriority=\"high\" on the hero/LCP image while adding loading=\"lazy\" on all offscreen images. 5) Use Next.js <Image /> or a cloud image CDN (Cloudinary).",
    "explanation": "Hero images are often the LCP element; ensuring they start downloading immediately without waiting for JS bundles is vital.",
    "interviewAnswer": "1) Use modern image formats (WebP, AVIF) with appropriate compression. 2) Specify explicit width and height (or aspect-ratio) to prevent Cumulative Layout Shift (CLS). 3) Use responsive srcset and sizes attributes so mobile devices download smaller resolutions. 4) Add priority or fetchpriority=\"high\" on the hero/LCP image while adding loading=\"lazy\" on all offscreen images. 5) Use Next.js <Image /> or a cloud image CDN (Cloudinary). Hero images are often the LCP element; ensuring they start downloading immediately without waiting for JS bundles is vital.",
    "importantPoints": [
      "1) Use modern image formats (WebP, AVIF) with appropriate compression. 2) Specify explicit width and height (or aspect-ratio) to prevent Cumulative Layout Shift (CLS). 3) Use responsive srcset and sizes attributes so mobile devices download smaller resolutions. 4) Add priority or fetchpriority=\"high\" on the hero/LCP image while adding loading=\"lazy\" on all offscreen images. 5) Use Next.js <Image /> or a cloud image CDN (Cloudinary).",
      "Hero images are often the LCP element; ensuring they start downloading immediately without waiting for JS bundles is vital."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "lcp",
      "images",
      "core-web-vitals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "What is Tree Shaking, and why do \"barrel files\" (index.js files re-exporting everything) often sabotage tree shaking in React apps?",
    "answer": "Tree shaking is a bundler optimization that removes unused exported code from the final bundle. Barrel files (export * from \"./components\") can force bundlers to parse and bundle hundreds of unrelated modules if any module has potential side-effects (sideEffects: true) or circular references, ballooning bundle size by megabytes.",
    "explanation": "Direct imports (import Button from \"@components/Button\") allow bundlers to cleanly tree-shake unused code.",
    "interviewAnswer": "Tree shaking is a bundler optimization that removes unused exported code from the final bundle. Barrel files (export * from \"./components\") can force bundlers to parse and bundle hundreds of unrelated modules if any module has potential side-effects (sideEffects: true) or circular references, ballooning bundle size by megabytes. Direct imports (import Button from \"@components/Button\") allow bundlers to cleanly tree-shake unused code.",
    "importantPoints": [
      "Tree shaking is a bundler optimization that removes unused exported code from the final bundle. Barrel files (export * from \"./components\") can force bundlers to parse and bundle hundreds of unrelated modules if any module has potential side-effects (sideEffects: true) or circular references, ballooning bundle size by megabytes.",
      "Direct imports (import Button from \"@components/Button\") allow bundlers to cleanly tree-shake unused code."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "tree-shaking",
      "barrel-files",
      "bundling"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How does React Compiler (React Forget) fundamentally change how developers write performance optimizations?",
    "answer": "React Compiler is an optimizing compiler that automatically memoizes values, objects, and JSX trees at compile time. It analyzes JavaScript semantics and dependency graphs, inserting optimal memoization caches automatically. Developers no longer need to manually write useMemo, useCallback, or React.memo in their code.",
    "explanation": "Eliminates human error in dependency arrays and prevents both under-memoization and over-memoization.",
    "interviewAnswer": "React Compiler is an optimizing compiler that automatically memoizes values, objects, and JSX trees at compile time. It analyzes JavaScript semantics and dependency graphs, inserting optimal memoization caches automatically. Developers no longer need to manually write useMemo, useCallback, or React.memo in their code. Eliminates human error in dependency arrays and prevents both under-memoization and over-memoization.",
    "importantPoints": [
      "React Compiler is an optimizing compiler that automatically memoizes values, objects, and JSX trees at compile time. It analyzes JavaScript semantics and dependency graphs, inserting optimal memoization caches automatically. Developers no longer need to manually write useMemo, useCallback, or React.memo in their code.",
      "Eliminates human error in dependency arrays and prevents both under-memoization and over-memoization."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "react-compiler",
      "react19",
      "memoization"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "What is the \"flamegraph\" view in React DevTools Profiler, and what do the different block colors and widths represent?",
    "answer": "The flamegraph shows the component hierarchy for a specific commit. Each bar is a component. Bar width represents how long that component took to render (including its children). Bar color indicates render duration: Gray means the component did NOT render during that commit; Blue/Green means it rendered fast; Yellow/Red means it took significant render time.",
    "explanation": "Allows developers to visually identify which subtrees are consuming the most CPU time.",
    "interviewAnswer": "The flamegraph shows the component hierarchy for a specific commit. Each bar is a component. Bar width represents how long that component took to render (including its children). Bar color indicates render duration: Gray means the component did NOT render during that commit; Blue/Green means it rendered fast; Yellow/Red means it took significant render time. Allows developers to visually identify which subtrees are consuming the most CPU time.",
    "importantPoints": [
      "The flamegraph shows the component hierarchy for a specific commit. Each bar is a component. Bar width represents how long that component took to render (including its children). Bar color indicates render duration: Gray means the component did NOT render during that commit; Blue/Green means it rendered fast; Yellow/Red means it took significant render time.",
      "Allows developers to visually identify which subtrees are consuming the most CPU time."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "profiler",
      "flamegraph",
      "devtools"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "Why should you avoid using anonymous arrow functions or inline object literals in custom hooks that return values?",
    "answer": "If a custom hook returns an unmemoized object or newly created function on every call (return { data, refetch: () => fetch() }), any component consuming the hook will receive a new reference on every render, invalidating child React.memo optimizations and triggering downstream useEffect runs.",
    "explanation": "Wrap returned helper functions in useCallback and returned objects in useMemo.",
    "interviewAnswer": "If a custom hook returns an unmemoized object or newly created function on every call (return { data, refetch: () => fetch() }), any component consuming the hook will receive a new reference on every render, invalidating child React.memo optimizations and triggering downstream useEffect runs. Wrap returned helper functions in useCallback and returned objects in useMemo.",
    "importantPoints": [
      "If a custom hook returns an unmemoized object or newly created function on every call (return { data, refetch: () => fetch() }), any component consuming the hook will receive a new reference on every render, invalidating child React.memo optimizations and triggering downstream useEffect runs.",
      "Wrap returned helper functions in useCallback and returned objects in useMemo."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "custom-hooks",
      "usememo",
      "usecallback"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How does web worker offloading optimize heavy computational tasks (like CSV parsing or image processing) in React?",
    "answer": "JavaScript is single-threaded. Running a 500ms CSV parse on the main thread freezes the entire browser UI. Offloading the computation to a Web Worker (via Comlink or workerize) runs the calculation on a separate background thread, communicating results via postMessage and keeping the React UI running at 60 FPS.",
    "explanation": "Ensures that intense calculations never block user typing, scrolling, or animations.",
    "interviewAnswer": "JavaScript is single-threaded. Running a 500ms CSV parse on the main thread freezes the entire browser UI. Offloading the computation to a Web Worker (via Comlink or workerize) runs the calculation on a separate background thread, communicating results via postMessage and keeping the React UI running at 60 FPS. Ensures that intense calculations never block user typing, scrolling, or animations.",
    "importantPoints": [
      "JavaScript is single-threaded. Running a 500ms CSV parse on the main thread freezes the entire browser UI. Offloading the computation to a Web Worker (via Comlink or workerize) runs the calculation on a separate background thread, communicating results via postMessage and keeping the React UI running at 60 FPS.",
      "Ensures that intense calculations never block user typing, scrolling, or animations."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "web-workers",
      "multi-threading",
      "main-thread"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "What is the difference between debouncing and throttling in user input handling?",
    "answer": "Debouncing delays invoking the function until after a specific duration of inactivity has elapsed since the last event (e.g. wait 300ms after user stops typing to trigger search). Throttling limits the execution of the function to at most once every specified interval (e.g. run scroll handler at most once every 100ms).",
    "explanation": "Debouncing is best for search inputs; throttling is best for continuous events like scroll or resize.",
    "interviewAnswer": "Debouncing delays invoking the function until after a specific duration of inactivity has elapsed since the last event (e.g. wait 300ms after user stops typing to trigger search). Throttling limits the execution of the function to at most once every specified interval (e.g. run scroll handler at most once every 100ms). Debouncing is best for search inputs; throttling is best for continuous events like scroll or resize.",
    "importantPoints": [
      "Debouncing delays invoking the function until after a specific duration of inactivity has elapsed since the last event (e.g. wait 300ms after user stops typing to trigger search). Throttling limits the execution of the function to at most once every specified interval (e.g. run scroll handler at most once every 100ms).",
      "Debouncing is best for search inputs; throttling is best for continuous events like scroll or resize."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "debouncing",
      "throttling",
      "events"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How do you prevent Cumulative Layout Shift (CLS) when conditionally loading ads, banners, or dynamic images in React?",
    "answer": "Reserve space in the layout ahead of time using CSS min-height, aspect-ratio, or skeleton loaders. By reserving the exact bounding box before dynamic content loads, the page layout does not jump or shift when the content arrives.",
    "explanation": "CLS degrades Core Web Vitals and causes users to misclick buttons.",
    "interviewAnswer": "Reserve space in the layout ahead of time using CSS min-height, aspect-ratio, or skeleton loaders. By reserving the exact bounding box before dynamic content loads, the page layout does not jump or shift when the content arrives. CLS degrades Core Web Vitals and causes users to misclick buttons.",
    "importantPoints": [
      "Reserve space in the layout ahead of time using CSS min-height, aspect-ratio, or skeleton loaders. By reserving the exact bounding box before dynamic content loads, the page layout does not jump or shift when the content arrives.",
      "CLS degrades Core Web Vitals and causes users to misclick buttons."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "cls",
      "layout-shift",
      "core-web-vitals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "Why does React recommend moving state as close to where it is needed as possible (\"Pushing State Down\") for performance?",
    "answer": "When state is lifted high up in the component tree, any change to that state forces the root/parent component to re-render, cascading re-renders down the entire subtree. Pushing state down to the specific leaf component that actually needs it confines re-rendering to that small component, leaving the rest of the application completely untouched.",
    "explanation": "One of the most effective and cleanest performance optimizations in React without writing any memoization code.",
    "interviewAnswer": "When state is lifted high up in the component tree, any change to that state forces the root/parent component to re-render, cascading re-renders down the entire subtree. Pushing state down to the specific leaf component that actually needs it confines re-rendering to that small component, leaving the rest of the application completely untouched. One of the most effective and cleanest performance optimizations in React without writing any memoization code.",
    "importantPoints": [
      "When state is lifted high up in the component tree, any change to that state forces the root/parent component to re-render, cascading re-renders down the entire subtree. Pushing state down to the specific leaf component that actually needs it confines re-rendering to that small component, leaving the rest of the application completely untouched.",
      "One of the most effective and cleanest performance optimizations in React without writing any memoization code."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "performance",
      "colocation",
      "state-management",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How can you measure the real-world performance of your React application in production across actual users (Real User Monitoring - RUM)?",
    "answer": "Use the web-vitals JavaScript library or React Profiler onRender callback to measure Core Web Vitals (LCP, INP, CLS) and send metrics to an analytics endpoint (DataDog, Sentry, Google Analytics). This captures real device capabilities, network conditions, and user interaction patterns across your actual user base.",
    "explanation": "Synthetic lab benchmarks (Lighthouse) do not reflect real low-end mobile devices on 3G connections.",
    "interviewAnswer": "Use the web-vitals JavaScript library or React Profiler onRender callback to measure Core Web Vitals (LCP, INP, CLS) and send metrics to an analytics endpoint (DataDog, Sentry, Google Analytics). This captures real device capabilities, network conditions, and user interaction patterns across your actual user base. Synthetic lab benchmarks (Lighthouse) do not reflect real low-end mobile devices on 3G connections.",
    "importantPoints": [
      "Use the web-vitals JavaScript library or React Profiler onRender callback to measure Core Web Vitals (LCP, INP, CLS) and send metrics to an analytics endpoint (DataDog, Sentry, Google Analytics). This captures real device capabilities, network conditions, and user interaction patterns across your actual user base.",
      "Synthetic lab benchmarks (Lighthouse) do not reflect real low-end mobile devices on 3G connections."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Production / Real-World",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "rum",
      "web-vitals",
      "monitoring"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How does dynamic import with React.lazy handle prefetching a chunk before the user clicks on the link?",
    "answer": "You can trigger the dynamic import on mouse hover or component focus: const loadDashboard = () => import(\"./Dashboard\"); const Dashboard = React.lazy(loadDashboard); In <Link onMouseEnter={loadDashboard}>. The browser initiates the chunk download over the network during hover time (~200ms before click), making the transition instant.",
    "explanation": "Prefetching eliminates the visible Suspense fallback when the user clicks.",
    "interviewAnswer": "You can trigger the dynamic import on mouse hover or component focus: const loadDashboard = () => import(\"./Dashboard\"); const Dashboard = React.lazy(loadDashboard); In <Link onMouseEnter={loadDashboard}>. The browser initiates the chunk download over the network during hover time (~200ms before click), making the transition instant. Prefetching eliminates the visible Suspense fallback when the user clicks.",
    "importantPoints": [
      "You can trigger the dynamic import on mouse hover or component focus: const loadDashboard = () => import(\"./Dashboard\"); const Dashboard = React.lazy(loadDashboard); In <Link onMouseEnter={loadDashboard}>. The browser initiates the chunk download over the network during hover time (~200ms before click), making the transition instant.",
      "Prefetching eliminates the visible Suspense fallback when the user clicks."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "prefetching",
      "code-splitting",
      "react-lazy"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "Why should you avoid calculating derived state inside useEffect instead of computing it during render?",
    "answer": "Calculating derived state inside useEffect requires calling setState, which schedules a second, redundant render pass. During the first render, the component displays stale or empty data, causing visual flicker and wasting CPU cycles. Computing derived values inline during render executes in a single pass.",
    "explanation": "If the derived calculation is expensive, wrap it in useMemo.",
    "interviewAnswer": "Calculating derived state inside useEffect requires calling setState, which schedules a second, redundant render pass. During the first render, the component displays stale or empty data, causing visual flicker and wasting CPU cycles. Computing derived values inline during render executes in a single pass. If the derived calculation is expensive, wrap it in useMemo.",
    "importantPoints": [
      "Calculating derived state inside useEffect requires calling setState, which schedules a second, redundant render pass. During the first render, the component displays stale or empty data, causing visual flicker and wasting CPU cycles. Computing derived values inline during render executes in a single pass.",
      "If the derived calculation is expensive, wrap it in useMemo."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "derived-state",
      "useeffect",
      "anti-pattern"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "What causes garbage collection pauses in React applications, and how can excessive object allocation during render trigger them?",
    "answer": "Allocating thousands of temporary objects, arrays, and closures every frame (e.g. inline styles, unmemoized transformations inside map()) fills the V8 Young Generation heap memory rapidly. When the nursery fills, the browser engine must pause JavaScript execution to run a Major Garbage Collection cycle, causing visible frame drops (jank).",
    "explanation": "Reusing data structures and minimizing allocations inside hot render loops reduces GC pressure.",
    "interviewAnswer": "Allocating thousands of temporary objects, arrays, and closures every frame (e.g. inline styles, unmemoized transformations inside map()) fills the V8 Young Generation heap memory rapidly. When the nursery fills, the browser engine must pause JavaScript execution to run a Major Garbage Collection cycle, causing visible frame drops (jank). Reusing data structures and minimizing allocations inside hot render loops reduces GC pressure.",
    "importantPoints": [
      "Allocating thousands of temporary objects, arrays, and closures every frame (e.g. inline styles, unmemoized transformations inside map()) fills the V8 Young Generation heap memory rapidly. When the nursery fills, the browser engine must pause JavaScript execution to run a Major Garbage Collection cycle, causing visible frame drops (jank).",
      "Reusing data structures and minimizing allocations inside hot render loops reduces GC pressure."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "garbage-collection",
      "v8-internals",
      "memory"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How does font-display: swap impact First Contentful Paint and Cumulative Layout Shift in React applications?",
    "answer": "font-display: swap instructs the browser to render text immediately using a fallback system font while the custom web font downloads, preventing Flash of Invisible Text (FOIT). However, if fallback font metrics differ from the web font, it can cause Flash of Unstyled Text (FOUT) and layout shift (CLS). Best practice is to size-adjust fallback fonts using @font-face { size-adjust: ... }.",
    "explanation": "Proper font loading strategies directly improve both FCP and CLS scores.",
    "interviewAnswer": "font-display: swap instructs the browser to render text immediately using a fallback system font while the custom web font downloads, preventing Flash of Invisible Text (FOIT). However, if fallback font metrics differ from the web font, it can cause Flash of Unstyled Text (FOUT) and layout shift (CLS). Best practice is to size-adjust fallback fonts using @font-face { size-adjust: ... }. Proper font loading strategies directly improve both FCP and CLS scores.",
    "importantPoints": [
      "font-display: swap instructs the browser to render text immediately using a fallback system font while the custom web font downloads, preventing Flash of Invisible Text (FOIT). However, if fallback font metrics differ from the web font, it can cause Flash of Unstyled Text (FOUT) and layout shift (CLS). Best practice is to size-adjust fallback fonts using @font-face { size-adjust: ... }.",
      "Proper font loading strategies directly improve both FCP and CLS scores."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "fonts",
      "cls",
      "fcp"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How can you optimize animated components in React to guarantee 60 FPS without triggering React re-renders?",
    "answer": "Drive animations using CSS transforms/opacity or animation libraries that bypass React state updates (Framer Motion with layoutId/hardware acceleration, or GSAP). Avoid updating React state on every requestAnimationFrame frame; animate via CSS or direct DOM style transforms directly on the GPU composite layer.",
    "explanation": "GPU-accelerated properties (transform, opacity) do not trigger layout or paint cycles in the browser.",
    "interviewAnswer": "Drive animations using CSS transforms/opacity or animation libraries that bypass React state updates (Framer Motion with layoutId/hardware acceleration, or GSAP). Avoid updating React state on every requestAnimationFrame frame; animate via CSS or direct DOM style transforms directly on the GPU composite layer. GPU-accelerated properties (transform, opacity) do not trigger layout or paint cycles in the browser.",
    "importantPoints": [
      "Drive animations using CSS transforms/opacity or animation libraries that bypass React state updates (Framer Motion with layoutId/hardware acceleration, or GSAP). Avoid updating React state on every requestAnimationFrame frame; animate via CSS or direct DOM style transforms directly on the GPU composite layer.",
      "GPU-accelerated properties (transform, opacity) do not trigger layout or paint cycles in the browser."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "animations",
      "gpu",
      "framer-motion"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "What is the \"Ranked\" view in React DevTools Profiler, and how does it help prioritize optimization efforts?",
    "answer": "The Ranked view orders every component that rendered in a given commit by how long it took to render, with the slowest component at the very top. This lets engineers instantly identify the single biggest bottleneck component rather than hunting through deep component trees.",
    "explanation": "Focus optimization on the top 2-3 components for maximum ROI.",
    "interviewAnswer": "The Ranked view orders every component that rendered in a given commit by how long it took to render, with the slowest component at the very top. This lets engineers instantly identify the single biggest bottleneck component rather than hunting through deep component trees. Focus optimization on the top 2-3 components for maximum ROI.",
    "importantPoints": [
      "The Ranked view orders every component that rendered in a given commit by how long it took to render, with the slowest component at the very top. This lets engineers instantly identify the single biggest bottleneck component rather than hunting through deep component trees.",
      "Focus optimization on the top 2-3 components for maximum ROI."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "profiler",
      "ranked-view",
      "devtools"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How do you optimize a React app that must render a live WebSocket feed updating 50 times per second?",
    "answer": "1) Do not store raw high-frequency messages in top-level React state. 2) Buffer incoming messages in a mutable ref or external store. 3) Throttle UI updates using requestAnimationFrame or a 100ms interval (batching updates to ~10 FPS visual refresh). 4) Use canvas or WebGL for dense charts, or use fine-grained leaf subscriptions (Zustand/useSyncExternalStore) so only the specific updated price ticker cell re-renders.",
    "explanation": "Human eyes cannot perceive 50 updates per second; batching to 10 FPS saves 80% of React render overhead.",
    "interviewAnswer": "1) Do not store raw high-frequency messages in top-level React state. 2) Buffer incoming messages in a mutable ref or external store. 3) Throttle UI updates using requestAnimationFrame or a 100ms interval (batching updates to ~10 FPS visual refresh). 4) Use canvas or WebGL for dense charts, or use fine-grained leaf subscriptions (Zustand/useSyncExternalStore) so only the specific updated price ticker cell re-renders. Human eyes cannot perceive 50 updates per second; batching to 10 FPS saves 80% of React render overhead.",
    "importantPoints": [
      "1) Do not store raw high-frequency messages in top-level React state. 2) Buffer incoming messages in a mutable ref or external store. 3) Throttle UI updates using requestAnimationFrame or a 100ms interval (batching updates to ~10 FPS visual refresh). 4) Use canvas or WebGL for dense charts, or use fine-grained leaf subscriptions (Zustand/useSyncExternalStore) so only the specific updated price ticker cell re-renders.",
      "Human eyes cannot perceive 50 updates per second; batching to 10 FPS saves 80% of React render overhead."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "performance",
      "websockets",
      "real-time",
      "batching"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "Why is it faster to update a list of items using Map or Record keys lookup than using Array.prototype.find() inside a component render loop?",
    "answer": "Array.prototype.find() is an O(N) linear search. If executed inside a list of M items, total lookup complexity is O(M * N). Normalizing the data into a hash map or Record<id, Item> reduces individual lookups to O(1), making the entire render pass O(M).",
    "explanation": "Normalized state structures eliminate nested loop bottlenecks.",
    "interviewAnswer": "Array.prototype.find() is an O(N) linear search. If executed inside a list of M items, total lookup complexity is O(M * N). Normalizing the data into a hash map or Record<id, Item> reduces individual lookups to O(1), making the entire render pass O(M). Normalized state structures eliminate nested loop bottlenecks.",
    "importantPoints": [
      "Array.prototype.find() is an O(N) linear search. If executed inside a list of M items, total lookup complexity is O(M * N). Normalizing the data into a hash map or Record<id, Item> reduces individual lookups to O(1), making the entire render pass O(M).",
      "Normalized state structures eliminate nested loop bottlenecks."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "data-structures",
      "normalization",
      "big-o"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "What is the performance impact of using CSS-in-JS libraries (like styled-components or Emotion) compared to Tailwind CSS or CSS Modules in large React applications?",
    "answer": "Runtime CSS-in-JS libraries serialize style rules, generate hash class names, and inject <style> tags into the DOM during runtime JavaScript execution, adding CPU overhead to every render and increasing bundle size. Zero-runtime solutions (Tailwind CSS, Vanilla Extract, CSS Modules) extract CSS at build time, eliminating all runtime styling overhead.",
    "explanation": "For high-frequency rendering and massive tables, zero-runtime CSS yields significantly faster renders.",
    "interviewAnswer": "Runtime CSS-in-JS libraries serialize style rules, generate hash class names, and inject <style> tags into the DOM during runtime JavaScript execution, adding CPU overhead to every render and increasing bundle size. Zero-runtime solutions (Tailwind CSS, Vanilla Extract, CSS Modules) extract CSS at build time, eliminating all runtime styling overhead. For high-frequency rendering and massive tables, zero-runtime CSS yields significantly faster renders.",
    "importantPoints": [
      "Runtime CSS-in-JS libraries serialize style rules, generate hash class names, and inject <style> tags into the DOM during runtime JavaScript execution, adding CPU overhead to every render and increasing bundle size. Zero-runtime solutions (Tailwind CSS, Vanilla Extract, CSS Modules) extract CSS at build time, eliminating all runtime styling overhead.",
      "For high-frequency rendering and massive tables, zero-runtime CSS yields significantly faster renders."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "css-in-js",
      "tailwind",
      "styling"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How does the React 18 useDeferredValue hook implement debouncing without setting arbitrary timer delays?",
    "answer": "Instead of waiting for an arbitrary 300ms setTimeout, useDeferredValue uses the React Concurrent Scheduler. It yields the main thread to process immediate events (keystrokes) and computes the deferred value immediately once the main thread becomes idle. On fast machines it updates almost instantly; on slow machines it automatically defers longer.",
    "explanation": "Adapts dynamically to the hardware speed of the client device.",
    "interviewAnswer": "Instead of waiting for an arbitrary 300ms setTimeout, useDeferredValue uses the React Concurrent Scheduler. It yields the main thread to process immediate events (keystrokes) and computes the deferred value immediately once the main thread becomes idle. On fast machines it updates almost instantly; on slow machines it automatically defers longer. Adapts dynamically to the hardware speed of the client device.",
    "importantPoints": [
      "Instead of waiting for an arbitrary 300ms setTimeout, useDeferredValue uses the React Concurrent Scheduler. It yields the main thread to process immediate events (keystrokes) and computes the deferred value immediately once the main thread becomes idle. On fast machines it updates almost instantly; on slow machines it automatically defers longer.",
      "Adapts dynamically to the hardware speed of the client device."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "usedeferredvalue",
      "concurrent-mode",
      "debouncing"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How can you prevent memory leaks when utilizing event listeners inside custom React hooks?",
    "answer": "Always return a cleanup function from useEffect that removes the exact listener: return () => target.removeEventListener(type, listener). Ensure the listener function reference passed to removeEventListener matches the one passed to addEventListener.",
    "explanation": "Passing an inline anonymous function to addEventListener makes it impossible to remove via removeEventListener.",
    "interviewAnswer": "Always return a cleanup function from useEffect that removes the exact listener: return () => target.removeEventListener(type, listener). Ensure the listener function reference passed to removeEventListener matches the one passed to addEventListener. Passing an inline anonymous function to addEventListener makes it impossible to remove via removeEventListener.",
    "importantPoints": [
      "Always return a cleanup function from useEffect that removes the exact listener: return () => target.removeEventListener(type, listener). Ensure the listener function reference passed to removeEventListener matches the one passed to addEventListener.",
      "Passing an inline anonymous function to addEventListener makes it impossible to remove via removeEventListener."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "memory-leaks",
      "event-listeners",
      "cleanup"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "What is HTTP/2 multiplexing, and how does it influence modern bundle splitting strategies compared to HTTP/1.1?",
    "answer": "Under HTTP/1.1, browsers had a limit of ~6 concurrent TCP connections per domain, encouraging large monolithic bundles. HTTP/2 supports multiplexing multiple concurrent requests over a single TCP connection, allowing applications to split code into dozens of smaller, granular chunks that download in parallel and cache independently without connection overhead.",
    "explanation": "Enables aggressive route and component code splitting.",
    "interviewAnswer": "Under HTTP/1.1, browsers had a limit of ~6 concurrent TCP connections per domain, encouraging large monolithic bundles. HTTP/2 supports multiplexing multiple concurrent requests over a single TCP connection, allowing applications to split code into dozens of smaller, granular chunks that download in parallel and cache independently without connection overhead. Enables aggressive route and component code splitting.",
    "importantPoints": [
      "Under HTTP/1.1, browsers had a limit of ~6 concurrent TCP connections per domain, encouraging large monolithic bundles. HTTP/2 supports multiplexing multiple concurrent requests over a single TCP connection, allowing applications to split code into dozens of smaller, granular chunks that download in parallel and cache independently without connection overhead.",
      "Enables aggressive route and component code splitting."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "http2",
      "multiplexing",
      "code-splitting"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How does TanStack Query (React Query) deduplicate identical API requests across different components mounted simultaneously?",
    "answer": "TanStack Query uses a centralized QueryClient cache keyed by queryKey. When 5 components request the same queryKey simultaneously, TanStack Query identifies that an inflight promise already exists, merges the requests into a single network call, and distributes the resolved data to all 5 components.",
    "explanation": "Eliminates duplicate network roundtrips across deeply nested component trees.",
    "interviewAnswer": "TanStack Query uses a centralized QueryClient cache keyed by queryKey. When 5 components request the same queryKey simultaneously, TanStack Query identifies that an inflight promise already exists, merges the requests into a single network call, and distributes the resolved data to all 5 components. Eliminates duplicate network roundtrips across deeply nested component trees.",
    "importantPoints": [
      "TanStack Query uses a centralized QueryClient cache keyed by queryKey. When 5 components request the same queryKey simultaneously, TanStack Query identifies that an inflight promise already exists, merges the requests into a single network call, and distributes the resolved data to all 5 components.",
      "Eliminates duplicate network roundtrips across deeply nested component trees."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "react-query",
      "caching",
      "deduplication"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "Why should you avoid using Math.random() as a key for React elements in performance-critical views?",
    "answer": "Math.random() generates a new key on every single render. React interprets every render as a brand new element, completely destroying and remounting the DOM node and Fiber tree on every update, ruining animation states, destroying form inputs, and tanking performance.",
    "explanation": "Always use deterministic, stable IDs from data.",
    "interviewAnswer": "Math.random() generates a new key on every single render. React interprets every render as a brand new element, completely destroying and remounting the DOM node and Fiber tree on every update, ruining animation states, destroying form inputs, and tanking performance. Always use deterministic, stable IDs from data.",
    "importantPoints": [
      "Math.random() generates a new key on every single render. React interprets every render as a brand new element, completely destroying and remounting the DOM node and Fiber tree on every update, ruining animation states, destroying form inputs, and tanking performance.",
      "Always use deterministic, stable IDs from data."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "keys",
      "math-random",
      "anti-pattern"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How can you profile a production React build where React DevTools Profiler is disabled by default?",
    "answer": "Create a dedicated staging profiling build by aliasing react-dom to react-dom/profiling in your bundler (webpack/vite) configuration. This includes the profiling hooks in the production-optimized minified code without running slow development-mode checks.",
    "explanation": "Development mode is 2-5x slower than production and can mislead profiling results.",
    "interviewAnswer": "Create a dedicated staging profiling build by aliasing react-dom to react-dom/profiling in your bundler (webpack/vite) configuration. This includes the profiling hooks in the production-optimized minified code without running slow development-mode checks. Development mode is 2-5x slower than production and can mislead profiling results.",
    "importantPoints": [
      "Create a dedicated staging profiling build by aliasing react-dom to react-dom/profiling in your bundler (webpack/vite) configuration. This includes the profiling hooks in the production-optimized minified code without running slow development-mode checks.",
      "Development mode is 2-5x slower than production and can mislead profiling results."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Production / Real-World",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "profiling",
      "production-profiling",
      "bundler"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "What is the \"stale-while-revalidate\" caching strategy and how does it improve perceived performance in React?",
    "answer": "It immediately serves stale cached data from memory/disk so the user sees content instantly (0ms), while asynchronously fetching fresh data in the background and silently updating the UI once the network response resolves.",
    "explanation": "Core caching architecture of SWR, React Query, and HTTP Cache-Control.",
    "interviewAnswer": "It immediately serves stale cached data from memory/disk so the user sees content instantly (0ms), while asynchronously fetching fresh data in the background and silently updating the UI once the network response resolves. Core caching architecture of SWR, React Query, and HTTP Cache-Control.",
    "importantPoints": [
      "It immediately serves stale cached data from memory/disk so the user sees content instantly (0ms), while asynchronously fetching fresh data in the background and silently updating the UI once the network response resolves.",
      "Core caching architecture of SWR, React Query, and HTTP Cache-Control."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "stale-while-revalidate",
      "caching",
      "swr"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How does passing a non-primitive dependency to useCallback cause it to re-create the function on every render anyway?",
    "answer": "If the dependency is an inline object or array ([filter]), that dependency reference changes every render. useCallback's dependency comparison fails, causing it to discard the previous function and re-create a new callback every single render pass.",
    "explanation": "Dependencies must be stable primitives or memoized themselves.",
    "interviewAnswer": "If the dependency is an inline object or array ([filter]), that dependency reference changes every render. useCallback's dependency comparison fails, causing it to discard the previous function and re-create a new callback every single render pass. Dependencies must be stable primitives or memoized themselves.",
    "importantPoints": [
      "If the dependency is an inline object or array ([filter]), that dependency reference changes every render. useCallback's dependency comparison fails, causing it to discard the previous function and re-create a new callback every single render pass.",
      "Dependencies must be stable primitives or memoized themselves."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "usecallback",
      "dependencies",
      "closures"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "What is DOM recycling in virtualized lists, and why is it superior to appending elements indefinitely during infinite scroll?",
    "answer": "Appending elements indefinitely keeps growing the physical DOM tree (10,000+ nodes), exhausting memory and degrading scrolling FPS. DOM recycling keeps a fixed pool of ~30 DOM nodes and continuously re-positions them and re-populates their content as the user scrolls, maintaining flat memory usage.",
    "explanation": "Virtual lists maintain constant O(1) DOM memory.",
    "interviewAnswer": "Appending elements indefinitely keeps growing the physical DOM tree (10,000+ nodes), exhausting memory and degrading scrolling FPS. DOM recycling keeps a fixed pool of ~30 DOM nodes and continuously re-positions them and re-populates their content as the user scrolls, maintaining flat memory usage. Virtual lists maintain constant O(1) DOM memory.",
    "importantPoints": [
      "Appending elements indefinitely keeps growing the physical DOM tree (10,000+ nodes), exhausting memory and degrading scrolling FPS. DOM recycling keeps a fixed pool of ~30 DOM nodes and continuously re-positions them and re-populates their content as the user scrolls, maintaining flat memory usage.",
      "Virtual lists maintain constant O(1) DOM memory."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "virtualization",
      "infinite-scroll",
      "dom-recycling"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How do you prevent re-rendering of non-active tabs in a multi-tab interface while keeping their state alive?",
    "answer": "Hide inactive tabs using CSS (display: none or hidden attribute) or React 18 <Activity mode=\"hidden\">, rather than unmounting them. If using CSS, wrap tab contents in React.memo so that state updates in active tabs do not trigger re-renders of the hidden tab components.",
    "explanation": "Combines instant tab switching with zero background rendering overhead.",
    "interviewAnswer": "Hide inactive tabs using CSS (display: none or hidden attribute) or React 18 <Activity mode=\"hidden\">, rather than unmounting them. If using CSS, wrap tab contents in React.memo so that state updates in active tabs do not trigger re-renders of the hidden tab components. Combines instant tab switching with zero background rendering overhead.",
    "importantPoints": [
      "Hide inactive tabs using CSS (display: none or hidden attribute) or React 18 <Activity mode=\"hidden\">, rather than unmounting them. If using CSS, wrap tab contents in React.memo so that state updates in active tabs do not trigger re-renders of the hidden tab components.",
      "Combines instant tab switching with zero background rendering overhead."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "tabs",
      "react-memo",
      "activity"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How does Service Worker caching improve performance and offline reliability for React single-page applications?",
    "answer": "A Service Worker acts as a client-side network proxy. It intercepts HTTP requests, serving static assets (HTML, CSS, JS bundles, images) instantly from the Cache Storage API even with zero internet connectivity, enabling sub-second load times and offline PWA experiences.",
    "explanation": "Decouples UI asset availability from network stability.",
    "interviewAnswer": "A Service Worker acts as a client-side network proxy. It intercepts HTTP requests, serving static assets (HTML, CSS, JS bundles, images) instantly from the Cache Storage API even with zero internet connectivity, enabling sub-second load times and offline PWA experiences. Decouples UI asset availability from network stability.",
    "importantPoints": [
      "A Service Worker acts as a client-side network proxy. It intercepts HTTP requests, serving static assets (HTML, CSS, JS bundles, images) instantly from the Cache Storage API even with zero internet connectivity, enabling sub-second load times and offline PWA experiences.",
      "Decouples UI asset availability from network stability."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "service-worker",
      "pwa",
      "caching"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "Why should you avoid deep cloning large objects (e.g. structuredClone or JSON.parse(JSON.stringify())) during React state updates?",
    "answer": "Deep cloning an entire 10,000-item state tree copies every single nested object in memory, taking hundreds of milliseconds and triggering heavy garbage collection. React only requires shallow copying of the modified path using the spread operator or libraries like Immer (structural sharing).",
    "explanation": "Structural sharing reuses all untouched nodes by reference, completing updates in sub-millisecond time.",
    "interviewAnswer": "Deep cloning an entire 10,000-item state tree copies every single nested object in memory, taking hundreds of milliseconds and triggering heavy garbage collection. React only requires shallow copying of the modified path using the spread operator or libraries like Immer (structural sharing). Structural sharing reuses all untouched nodes by reference, completing updates in sub-millisecond time.",
    "importantPoints": [
      "Deep cloning an entire 10,000-item state tree copies every single nested object in memory, taking hundreds of milliseconds and triggering heavy garbage collection. React only requires shallow copying of the modified path using the spread operator or libraries like Immer (structural sharing).",
      "Structural sharing reuses all untouched nodes by reference, completing updates in sub-millisecond time."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "immutability",
      "structural-sharing",
      "immer"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "What is the difference between Time to Interactive (TTI) and Total Blocking Time (TBT)?",
    "answer": "TBT measures the total amount of time between First Contentful Paint and Time to Interactive where the main thread was blocked by tasks taking longer than 50ms. TTI measures the point in time when the page is both visually rendered and capable of reliably responding to user input within 50ms.",
    "explanation": "Reducing TBT directly improves INP and user responsiveness.",
    "interviewAnswer": "TBT measures the total amount of time between First Contentful Paint and Time to Interactive where the main thread was blocked by tasks taking longer than 50ms. TTI measures the point in time when the page is both visually rendered and capable of reliably responding to user input within 50ms. Reducing TBT directly improves INP and user responsiveness.",
    "importantPoints": [
      "TBT measures the total amount of time between First Contentful Paint and Time to Interactive where the main thread was blocked by tasks taking longer than 50ms. TTI measures the point in time when the page is both visually rendered and capable of reliably responding to user input within 50ms.",
      "Reducing TBT directly improves INP and user responsiveness."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "tbt",
      "tti",
      "core-web-vitals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How does Server-Driven UI optimize mobile and web app performance in massive enterprise applications?",
    "answer": "Server-Driven UI sends pre-computed component layouts and JSON payloads from the server, eliminating heavy client-side business logic and allowing backend teams to update UI layouts, feature banners, and business workflows dynamically without deploying new frontend bundles.",
    "explanation": "Minimizes client bundle sizes and centralizes layout orchestration on fast server infrastructure.",
    "interviewAnswer": "Server-Driven UI sends pre-computed component layouts and JSON payloads from the server, eliminating heavy client-side business logic and allowing backend teams to update UI layouts, feature banners, and business workflows dynamically without deploying new frontend bundles. Minimizes client bundle sizes and centralizes layout orchestration on fast server infrastructure.",
    "importantPoints": [
      "Server-Driven UI sends pre-computed component layouts and JSON payloads from the server, eliminating heavy client-side business logic and allowing backend teams to update UI layouts, feature banners, and business workflows dynamically without deploying new frontend bundles.",
      "Minimizes client bundle sizes and centralizes layout orchestration on fast server infrastructure."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "server-driven-ui",
      "architecture",
      "enterprise"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "Why does passing children directly to an unmemoized parent component prevent child re-rendering?",
    "answer": "When children are passed as JSX props from outside (<Parent><Child /></Parent>), the Child element object was created in the outer scope. When Parent re-renders due to its internal state, props.children has the exact same object reference as the prior render. React bails out of re-rendering Child.",
    "explanation": "One of the most elegant, zero-overhead patterns to isolate heavy child trees from parent state changes.",
    "interviewAnswer": "When children are passed as JSX props from outside (<Parent><Child /></Parent>), the Child element object was created in the outer scope. When Parent re-renders due to its internal state, props.children has the exact same object reference as the prior render. React bails out of re-rendering Child. One of the most elegant, zero-overhead patterns to isolate heavy child trees from parent state changes.",
    "importantPoints": [
      "When children are passed as JSX props from outside (<Parent><Child /></Parent>), the Child element object was created in the outer scope. When Parent re-renders due to its internal state, props.children has the exact same object reference as the prior render. React bails out of re-rendering Child.",
      "One of the most elegant, zero-overhead patterns to isolate heavy child trees from parent state changes."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "composition",
      "children",
      "bailout"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How do you detect and fix memory leaks caused by closures retaining large scopes in React event handlers?",
    "answer": "If a callback captures an outer object or array that is no longer needed, the V8 engine cannot garbage collect that object as long as the callback exists. Fix: extract the needed primitive value from the object before defining the callback closure, or null out large references when no longer in use.",
    "explanation": "Prevents accidentally retaining entire state objects in long-lived event listeners.",
    "interviewAnswer": "If a callback captures an outer object or array that is no longer needed, the V8 engine cannot garbage collect that object as long as the callback exists. Fix: extract the needed primitive value from the object before defining the callback closure, or null out large references when no longer in use. Prevents accidentally retaining entire state objects in long-lived event listeners.",
    "importantPoints": [
      "If a callback captures an outer object or array that is no longer needed, the V8 engine cannot garbage collect that object as long as the callback exists. Fix: extract the needed primitive value from the object before defining the callback closure, or null out large references when no longer in use.",
      "Prevents accidentally retaining entire state objects in long-lived event listeners."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "memory-leaks",
      "closures",
      "v8-internals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "What is the performance advantage of CSS content-visibility: auto for long scrolling pages?",
    "answer": "content-visibility: auto tells the browser to skip layout and rendering work for offscreen elements entirely until they approach the viewport. It gives virtualization-like performance gains natively in CSS with just one line of code, drastically speeding up initial render time.",
    "explanation": "Browser engine manages rendering boundaries natively.",
    "interviewAnswer": "content-visibility: auto tells the browser to skip layout and rendering work for offscreen elements entirely until they approach the viewport. It gives virtualization-like performance gains natively in CSS with just one line of code, drastically speeding up initial render time. Browser engine manages rendering boundaries natively.",
    "importantPoints": [
      "content-visibility: auto tells the browser to skip layout and rendering work for offscreen elements entirely until they approach the viewport. It gives virtualization-like performance gains natively in CSS with just one line of code, drastically speeding up initial render time.",
      "Browser engine manages rendering boundaries natively."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "css",
      "content-visibility",
      "browser-optimization"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How do you optimize bundle size when importing utility functions from libraries like lodash or date-fns?",
    "answer": "Import specific sub-paths or use ES module variants: import debounce from \"lodash-es/debounce\" or import { format } from \"date-fns\". Never use default wildcard imports like import _ from \"lodash\", which pulls the entire 500KB library into your bundle.",
    "explanation": "Tree-shaking requires granular or ESM-compliant module imports.",
    "interviewAnswer": "Import specific sub-paths or use ES module variants: import debounce from \"lodash-es/debounce\" or import { format } from \"date-fns\". Never use default wildcard imports like import _ from \"lodash\", which pulls the entire 500KB library into your bundle. Tree-shaking requires granular or ESM-compliant module imports.",
    "importantPoints": [
      "Import specific sub-paths or use ES module variants: import debounce from \"lodash-es/debounce\" or import { format } from \"date-fns\". Never use default wildcard imports like import _ from \"lodash\", which pulls the entire 500KB library into your bundle.",
      "Tree-shaking requires granular or ESM-compliant module imports."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "bundle-size",
      "lodash",
      "tree-shaking"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How does React 18 automatic batching improve network performance when multiple state updates trigger API calls?",
    "answer": "By batching all updates within async callbacks into a single render pass, effects that depend on those state variables run only ONCE rather than multiple times, preventing duplicate or cascading API requests.",
    "explanation": "Eliminates redundant HTTP requests caused by split render passes.",
    "interviewAnswer": "By batching all updates within async callbacks into a single render pass, effects that depend on those state variables run only ONCE rather than multiple times, preventing duplicate or cascading API requests. Eliminates redundant HTTP requests caused by split render passes.",
    "importantPoints": [
      "By batching all updates within async callbacks into a single render pass, effects that depend on those state variables run only ONCE rather than multiple times, preventing duplicate or cascading API requests.",
      "Eliminates redundant HTTP requests caused by split render passes."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "batching",
      "react18",
      "network"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "Why should you avoid using dangerouslySetInnerHTML inside frequently re-rendered components?",
    "answer": "dangerouslySetInnerHTML invokes the browser's internal HTML parser and DOM construction engine on every render. If the HTML string is large, parsing HTML repeatedly consumes significant CPU cycles and bypasses virtual DOM diffing efficiencies.",
    "explanation": "Sanitize and parse HTML once, caching the result or rendering static wrappers.",
    "interviewAnswer": "dangerouslySetInnerHTML invokes the browser's internal HTML parser and DOM construction engine on every render. If the HTML string is large, parsing HTML repeatedly consumes significant CPU cycles and bypasses virtual DOM diffing efficiencies. Sanitize and parse HTML once, caching the result or rendering static wrappers.",
    "importantPoints": [
      "dangerouslySetInnerHTML invokes the browser's internal HTML parser and DOM construction engine on every render. If the HTML string is large, parsing HTML repeatedly consumes significant CPU cycles and bypasses virtual DOM diffing efficiencies.",
      "Sanitize and parse HTML once, caching the result or rendering static wrappers."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "dangerouslysetinnerhtml",
      "html-parsing",
      "dom"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "What is the difference between preloading, prefetching, and preconnecting in modern React web performance?",
    "answer": "Preload (<link rel=\"preload\">): instructs browser to immediately download a high-priority resource needed for the current page. Prefetch (<link rel=\"prefetch\">): tells browser to download a low-priority resource during idle time for a FUTURE page navigation. Preconnect (<link rel=\"preconnect\">): sets up early DNS lookup, TCP handshake, and TLS negotiation with a third-party domain.",
    "explanation": "Proper resource hints dramatically improve asset delivery pipelines.",
    "interviewAnswer": "Preload (<link rel=\"preload\">): instructs browser to immediately download a high-priority resource needed for the current page. Prefetch (<link rel=\"prefetch\">): tells browser to download a low-priority resource during idle time for a FUTURE page navigation. Preconnect (<link rel=\"preconnect\">): sets up early DNS lookup, TCP handshake, and TLS negotiation with a third-party domain. Proper resource hints dramatically improve asset delivery pipelines.",
    "importantPoints": [
      "Preload (<link rel=\"preload\">): instructs browser to immediately download a high-priority resource needed for the current page. Prefetch (<link rel=\"prefetch\">): tells browser to download a low-priority resource during idle time for a FUTURE page navigation. Preconnect (<link rel=\"preconnect\">): sets up early DNS lookup, TCP handshake, and TLS negotiation with a third-party domain.",
      "Proper resource hints dramatically improve asset delivery pipelines."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "resource-hints",
      "preload",
      "prefetch"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How can you prevent unnecessary re-renders in a Redux Toolkit application using useSelector?",
    "answer": "Pass a selector that returns primitive values, or use createSelector (Reselect) for derived computations to memoize the result. If returning a new object or array, pass shallowEqual as the second argument to useSelector: useSelector(mySelector, shallowEqual).",
    "explanation": "By default, useSelector uses strict reference equality (===); returning a new array reference causes the component to re-render on every action.",
    "interviewAnswer": "Pass a selector that returns primitive values, or use createSelector (Reselect) for derived computations to memoize the result. If returning a new object or array, pass shallowEqual as the second argument to useSelector: useSelector(mySelector, shallowEqual). By default, useSelector uses strict reference equality (===); returning a new array reference causes the component to re-render on every action.",
    "importantPoints": [
      "Pass a selector that returns primitive values, or use createSelector (Reselect) for derived computations to memoize the result. If returning a new object or array, pass shallowEqual as the second argument to useSelector: useSelector(mySelector, shallowEqual).",
      "By default, useSelector uses strict reference equality (===); returning a new array reference causes the component to re-render on every action."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "redux",
      "useselector",
      "reselect"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How does the \"Bailout with No Changes\" optimization work in React Fiber when child elements have not changed?",
    "answer": "When React enters a Fiber node, it checks if workInProgress.child === current.child and no pending updates exist. If true, React clones the existing child Fiber pointers directly without executing any component functions, skipping entire branches of the UI tree.",
    "explanation": "Fiber tree cloning enables near-instantaneous reconciliations for unchanged subtrees.",
    "interviewAnswer": "When React enters a Fiber node, it checks if workInProgress.child === current.child and no pending updates exist. If true, React clones the existing child Fiber pointers directly without executing any component functions, skipping entire branches of the UI tree. Fiber tree cloning enables near-instantaneous reconciliations for unchanged subtrees.",
    "importantPoints": [
      "When React enters a Fiber node, it checks if workInProgress.child === current.child and no pending updates exist. If true, React clones the existing child Fiber pointers directly without executing any component functions, skipping entire branches of the UI tree.",
      "Fiber tree cloning enables near-instantaneous reconciliations for unchanged subtrees."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "fiber-internals",
      "bailout",
      "reconciliation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "Why is it dangerous to rely on React.memo without wrapping callback props in useCallback?",
    "answer": "If a parent passes an inline function to a React.memo child, a new function reference is passed on every parent render. React.memo detects a prop change and re-renders the child anyway, rendering the React.memo wrapper completely useless while still incurring comparison overhead.",
    "explanation": "React.memo and useCallback work as a team; one without the other often fails.",
    "interviewAnswer": "If a parent passes an inline function to a React.memo child, a new function reference is passed on every parent render. React.memo detects a prop change and re-renders the child anyway, rendering the React.memo wrapper completely useless while still incurring comparison overhead. React.memo and useCallback work as a team; one without the other often fails.",
    "importantPoints": [
      "If a parent passes an inline function to a React.memo child, a new function reference is passed on every parent render. React.memo detects a prop change and re-renders the child anyway, rendering the React.memo wrapper completely useless while still incurring comparison overhead.",
      "React.memo and useCallback work as a team; one without the other often fails."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "react-memo",
      "usecallback",
      "gotcha"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How can you eliminate CLS when loading dynamic web fonts in React applications?",
    "answer": "Use font loading services or CSS font-display: optional with local fallback overrides using font metric overrides (ascent-override, descent-override, line-gap-override). Next.js @next/font automates this by injecting zero-layout-shift fallback font metrics.",
    "explanation": "Eliminates text reflow when web fonts load.",
    "interviewAnswer": "Use font loading services or CSS font-display: optional with local fallback overrides using font metric overrides (ascent-override, descent-override, line-gap-override). Next.js @next/font automates this by injecting zero-layout-shift fallback font metrics. Eliminates text reflow when web fonts load.",
    "importantPoints": [
      "Use font loading services or CSS font-display: optional with local fallback overrides using font metric overrides (ascent-override, descent-override, line-gap-override). Next.js @next/font automates this by injecting zero-layout-shift fallback font metrics.",
      "Eliminates text reflow when web fonts load."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "fonts",
      "cls",
      "web-vitals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "What is the role of requestIdleCallback in scheduling low-priority work in React applications?",
    "answer": "requestIdleCallback schedules non-essential tasks (analytics logging, pre-fetching, cache warming) to execute only when the browser main thread has free idle time at the end of an animation frame, ensuring user interactions and rendering are never delayed.",
    "explanation": "React Scheduler uses a MessageChannel polyfill to provide cross-browser cooperative multitasking.",
    "interviewAnswer": "requestIdleCallback schedules non-essential tasks (analytics logging, pre-fetching, cache warming) to execute only when the browser main thread has free idle time at the end of an animation frame, ensuring user interactions and rendering are never delayed. React Scheduler uses a MessageChannel polyfill to provide cross-browser cooperative multitasking.",
    "importantPoints": [
      "requestIdleCallback schedules non-essential tasks (analytics logging, pre-fetching, cache warming) to execute only when the browser main thread has free idle time at the end of an animation frame, ensuring user interactions and rendering are never delayed.",
      "React Scheduler uses a MessageChannel polyfill to provide cross-browser cooperative multitasking."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "requestidlecallback",
      "scheduler",
      "concurrency"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How do you monitor and catch React re-rendering performance regressions in continuous integration (CI) pipelines?",
    "answer": "Run automated end-to-end tests using Playwright or Puppeteer with Lighthouse CI or Chrome Tracing. Assert on Core Web Vitals thresholds (INP < 200ms, LCP < 2.5s) and count total DOM node allocations to fail pull requests that introduce heavy regressions.",
    "explanation": "Automates performance governance before code reaches production.",
    "interviewAnswer": "Run automated end-to-end tests using Playwright or Puppeteer with Lighthouse CI or Chrome Tracing. Assert on Core Web Vitals thresholds (INP < 200ms, LCP < 2.5s) and count total DOM node allocations to fail pull requests that introduce heavy regressions. Automates performance governance before code reaches production.",
    "importantPoints": [
      "Run automated end-to-end tests using Playwright or Puppeteer with Lighthouse CI or Chrome Tracing. Assert on Core Web Vitals thresholds (INP < 200ms, LCP < 2.5s) and count total DOM node allocations to fail pull requests that introduce heavy regressions.",
      "Automates performance governance before code reaches production."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Production / Real-World",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "ci-cd",
      "lighthouse",
      "automation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "Why should you avoid binding functions in JSX inside loop iterations: {items.map(item => <Item onClick={() => handleClick(item.id)} />)}?",
    "answer": "In a list of 1,000 items, 1,000 new function closures are allocated every single render pass. If <Item> is memoized with React.memo, all 1,000 items will fail prop comparison and re-render. Instead, pass item.id to Item and let Item invoke onClick(id) internally.",
    "explanation": "Preserves function reference stability across all list items.",
    "interviewAnswer": "In a list of 1,000 items, 1,000 new function closures are allocated every single render pass. If <Item> is memoized with React.memo, all 1,000 items will fail prop comparison and re-render. Instead, pass item.id to Item and let Item invoke onClick(id) internally. Preserves function reference stability across all list items.",
    "importantPoints": [
      "In a list of 1,000 items, 1,000 new function closures are allocated every single render pass. If <Item> is memoized with React.memo, all 1,000 items will fail prop comparison and re-render. Instead, pass item.id to Item and let Item invoke onClick(id) internally.",
      "Preserves function reference stability across all list items."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "loops",
      "callbacks",
      "react-memo"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How does code-splitting by route differ from code-splitting by component feature?",
    "answer": "Route-based splitting loads code based on URLs (/dashboard, /settings), ensuring initial bundle only contains current page assets. Component feature splitting loads heavy on-page components on demand (e.g. rich text editor, export-to-PDF modal) only when the user clicks to open that feature.",
    "explanation": "Both strategies together yield minimal initial download and fast subsequent interactions.",
    "interviewAnswer": "Route-based splitting loads code based on URLs (/dashboard, /settings), ensuring initial bundle only contains current page assets. Component feature splitting loads heavy on-page components on demand (e.g. rich text editor, export-to-PDF modal) only when the user clicks to open that feature. Both strategies together yield minimal initial download and fast subsequent interactions.",
    "importantPoints": [
      "Route-based splitting loads code based on URLs (/dashboard, /settings), ensuring initial bundle only contains current page assets. Component feature splitting loads heavy on-page components on demand (e.g. rich text editor, export-to-PDF modal) only when the user clicks to open that feature.",
      "Both strategies together yield minimal initial download and fast subsequent interactions."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "code-splitting",
      "architecture",
      "routes"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "What is the benefit of using React 18 useTransition for tab switching compared to showing a loading spinner?",
    "answer": "Showing a spinner unmounts the current tab content immediately, causing visual jarring and losing the user scroll position. useTransition leaves the current tab completely interactive while preparing the new tab in the background, smoothly transitioning only when the new tab is ready.",
    "explanation": "Significantly improves perceived performance and user experience.",
    "interviewAnswer": "Showing a spinner unmounts the current tab content immediately, causing visual jarring and losing the user scroll position. useTransition leaves the current tab completely interactive while preparing the new tab in the background, smoothly transitioning only when the new tab is ready. Significantly improves perceived performance and user experience.",
    "importantPoints": [
      "Showing a spinner unmounts the current tab content immediately, causing visual jarring and losing the user scroll position. useTransition leaves the current tab completely interactive while preparing the new tab in the background, smoothly transitioning only when the new tab is ready.",
      "Significantly improves perceived performance and user experience."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "usetransition",
      "tabs",
      "ux"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "performance",
    "question": "How can you measure the total memory consumption of a React single-page app over time using window.performance.memory?",
    "answer": "In Chromium browsers, window.performance.memory exposes usedJSHeapSize, totalJSHeapSize, and jsHeapSizeLimit. Logging usedJSHeapSize periodically or after navigation transitions reveals upward-trending memory consumption indicative of leaks.",
    "explanation": "Useful for telemetry monitoring on long-running enterprise single-page applications.",
    "interviewAnswer": "In Chromium browsers, window.performance.memory exposes usedJSHeapSize, totalJSHeapSize, and jsHeapSizeLimit. Logging usedJSHeapSize periodically or after navigation transitions reveals upward-trending memory consumption indicative of leaks. Useful for telemetry monitoring on long-running enterprise single-page applications.",
    "importantPoints": [
      "In Chromium browsers, window.performance.memory exposes usedJSHeapSize, totalJSHeapSize, and jsHeapSizeLimit. Logging usedJSHeapSize periodically or after navigation transitions reveals upward-trending memory consumption indicative of leaks.",
      "Useful for telemetry monitoring on long-running enterprise single-page applications."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Production / Real-World",
    "isImportant": false,
    "tags": [
      "react",
      "performance",
      "memory",
      "telemetry",
      "chrome-devtools"
    ]
  }
];
