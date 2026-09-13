import { SeedQuestion } from '../types';

export const reactAdvancedQuestions: SeedQuestion[] = [
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "Why can functional components with hooks NOT be Error Boundaries natively in React, and how does react-error-boundary solve this?",
    "answer": "Error Boundaries require two lifecycle methods: static getDerivedStateFromError() (to update fallback UI state) and componentDidCatch() (to log error stack traces and analytics). React has not implemented functional hook equivalents (like useErrorBoundary) because error catching requires intercepting fiber reconciliation failures during commit. react-error-boundary provides a lightweight class wrapper exposing declarative fallback props, FallbackComponent, and onReset callbacks for functional code.",
    "explanation": "Error Boundaries only catch errors in rendering, lifecycle methods, and constructors of child components—they do NOT catch errors in event handlers, asynchronous callbacks (setTimeout), or server-side rendering.",
    "interviewAnswer": "Error Boundaries require two lifecycle methods: static getDerivedStateFromError() (to update fallback UI state) and componentDidCatch() (to log error stack traces and analytics). React has not implemented functional hook equivalents (like useErrorBoundary) because error catching requires intercepting fiber reconciliation failures during commit. react-error-boundary provides a lightweight class wrapper exposing declarative fallback props, FallbackComponent, and onReset callbacks for functional code. Error Boundaries only catch errors in rendering, lifecycle methods, and constructors of child components—they do NOT catch errors in event handlers, asynchronous callbacks (setTimeout), or server-side rendering.",
    "importantPoints": [
      "Error Boundaries require two lifecycle methods: static getDerivedStateFromError() (to update fallback UI state) and componentDidCatch() (to log error stack traces and analytics). React has not implemented functional hook equivalents (like useErrorBoundary) because error catching requires intercepting fiber reconciliation failures during commit. react-error-boundary provides a lightweight class wrapper exposing declarative fallback props, FallbackComponent, and onReset callbacks for functional code.",
      "Error Boundaries only catch errors in rendering, lifecycle methods, and constructors of child components—they do NOT catch errors in event handlers, asynchronous callbacks (setTimeout), or server-side rendering."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "advanced-react",
      "error-boundaries",
      "lifecycles",
      "gotcha"
    ],
    "followUpQuestions": [
      "How do you catch errors that occur inside asynchronous event handlers?",
      "What happens if an Error Boundary itself throws an error while rendering its fallback UI?",
      "Why does an error boundary not catch errors inside setTimeout?"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How does event bubbling work with React Portals (ReactDOM.createPortal), and why is it surprising to developers looking at the physical HTML DOM tree?",
    "answer": "Even though createPortal renders physical HTML DOM nodes into an external container (like document.body), event bubbling follows the React Virtual DOM (Fiber) tree, NOT the HTML DOM tree. An event fired inside the portal will bubble up through all React parent components where the portal was declared in JSX, allowing ancestor event handlers to catch portal events naturally.",
    "explanation": "SyntheticEvent dispatching walks the Fiber parent pointer (return), completely oblivious to the physical DOM parentage.",
    "interviewAnswer": "Even though createPortal renders physical HTML DOM nodes into an external container (like document.body), event bubbling follows the React Virtual DOM (Fiber) tree, NOT the HTML DOM tree. An event fired inside the portal will bubble up through all React parent components where the portal was declared in JSX, allowing ancestor event handlers to catch portal events naturally. SyntheticEvent dispatching walks the Fiber parent pointer (return), completely oblivious to the physical DOM parentage.",
    "importantPoints": [
      "Even though createPortal renders physical HTML DOM nodes into an external container (like document.body), event bubbling follows the React Virtual DOM (Fiber) tree, NOT the HTML DOM tree. An event fired inside the portal will bubble up through all React parent components where the portal was declared in JSX, allowing ancestor event handlers to catch portal events naturally.",
      "SyntheticEvent dispatching walks the Fiber parent pointer (return), completely oblivious to the physical DOM parentage."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "advanced-react",
      "portals",
      "event-bubbling",
      "fiber-tree"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What is the architectural difference between React Server Components (RSC) and standard Server-Side Rendering (SSR)?",
    "answer": "SSR takes traditional client components, executes them on the server to produce initial HTML for fast First Contentful Paint, and still sends the full JavaScript bundle so the browser can hydrate the page. RSC renders server components into a serialized virtual DOM stream (RSC payload) that is sent to the client with ZERO client JavaScript bundle for those components, allowing direct database access and zero-bundle-size dependencies.",
    "explanation": "SSR improves initial page load HTML; RSC eliminates client bundle size and enables hybrid server/client execution.",
    "interviewAnswer": "SSR takes traditional client components, executes them on the server to produce initial HTML for fast First Contentful Paint, and still sends the full JavaScript bundle so the browser can hydrate the page. RSC renders server components into a serialized virtual DOM stream (RSC payload) that is sent to the client with ZERO client JavaScript bundle for those components, allowing direct database access and zero-bundle-size dependencies. SSR improves initial page load HTML; RSC eliminates client bundle size and enables hybrid server/client execution.",
    "importantPoints": [
      "SSR takes traditional client components, executes them on the server to produce initial HTML for fast First Contentful Paint, and still sends the full JavaScript bundle so the browser can hydrate the page. RSC renders server components into a serialized virtual DOM stream (RSC payload) that is sent to the client with ZERO client JavaScript bundle for those components, allowing direct database access and zero-bundle-size dependencies.",
      "SSR improves initial page load HTML; RSC eliminates client bundle size and enables hybrid server/client execution."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "advanced-react",
      "rsc",
      "ssr",
      "nextjs",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How does the \"use server\" directive work in React 19 / Next.js, and how does it convert a function into a callable Server Action?",
    "answer": "\"use server\" at the top of an async function or file marks it as a Server Action. The bundler extracts this function from the client bundle, assigns it a secure endpoint/action ID, and replaces the client import with an RPC stub that sends an HTTP POST request to the server, serializes arguments, executes on the server, and returns the result to the client seamlessly.",
    "explanation": "Allows invoking secure backend operations (database queries, mutations) directly from client forms or event handlers.",
    "interviewAnswer": "\"use server\" at the top of an async function or file marks it as a Server Action. The bundler extracts this function from the client bundle, assigns it a secure endpoint/action ID, and replaces the client import with an RPC stub that sends an HTTP POST request to the server, serializes arguments, executes on the server, and returns the result to the client seamlessly. Allows invoking secure backend operations (database queries, mutations) directly from client forms or event handlers.",
    "importantPoints": [
      "\"use server\" at the top of an async function or file marks it as a Server Action. The bundler extracts this function from the client bundle, assigns it a secure endpoint/action ID, and replaces the client import with an RPC stub that sends an HTTP POST request to the server, serializes arguments, executes on the server, and returns the result to the client seamlessly.",
      "Allows invoking secure backend operations (database queries, mutations) directly from client forms or event handlers."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "advanced-react",
      "use-server",
      "server-actions",
      "react19"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What is the \"use client\" directive in modern React frameworks, and does it mean the component runs ONLY on the client?",
    "answer": "No! \"use client\" does NOT mean \"client-only\". It marks the boundary where server-only code stops and client-interactive code begins. Components marked \"use client\" STILL pre-render to HTML on the server during initial SSR/SSG, but their JavaScript code is also included in the client bundle for hydration, state, effects, and browser event handling.",
    "explanation": "Think of \"use client\" as declaring an entry point for client hydration and bundler module splitting.",
    "interviewAnswer": "No! \"use client\" does NOT mean \"client-only\". It marks the boundary where server-only code stops and client-interactive code begins. Components marked \"use client\" STILL pre-render to HTML on the server during initial SSR/SSG, but their JavaScript code is also included in the client bundle for hydration, state, effects, and browser event handling. Think of \"use client\" as declaring an entry point for client hydration and bundler module splitting.",
    "importantPoints": [
      "No! \"use client\" does NOT mean \"client-only\". It marks the boundary where server-only code stops and client-interactive code begins. Components marked \"use client\" STILL pre-render to HTML on the server during initial SSR/SSG, but their JavaScript code is also included in the client bundle for hydration, state, effects, and browser event handling.",
      "Think of \"use client\" as declaring an entry point for client hydration and bundler module splitting."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "advanced-react",
      "use-client",
      "rsc",
      "hydration"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How do you build a custom React renderer using the \"react-reconciler\" package (e.g. for canvas, terminal, or native mobile)?",
    "answer": "You instantiate react-reconciler passing a host config object that implements host environment methods: createInstance, appendChild, removeChild, insertBefore, prepareUpdate, commitUpdate, shouldSetTextContent, etc. You then expose a custom render(element, hostContainer) function that creates a FiberRoot and calls reconciler.updateContainer().",
    "explanation": "This same abstraction powers React Native (mobile views), React Three Fiber (Three.js 3D), and Ink (CLI terminals).",
    "interviewAnswer": "You instantiate react-reconciler passing a host config object that implements host environment methods: createInstance, appendChild, removeChild, insertBefore, prepareUpdate, commitUpdate, shouldSetTextContent, etc. You then expose a custom render(element, hostContainer) function that creates a FiberRoot and calls reconciler.updateContainer(). This same abstraction powers React Native (mobile views), React Three Fiber (Three.js 3D), and Ink (CLI terminals).",
    "importantPoints": [
      "You instantiate react-reconciler passing a host config object that implements host environment methods: createInstance, appendChild, removeChild, insertBefore, prepareUpdate, commitUpdate, shouldSetTextContent, etc. You then expose a custom render(element, hostContainer) function that creates a FiberRoot and calls reconciler.updateContainer().",
      "This same abstraction powers React Native (mobile views), React Three Fiber (Three.js 3D), and Ink (CLI terminals)."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "react-reconciler",
      "custom-renderer",
      "fiber"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What is Module Federation, and how does it enable independent micro-frontend architectures with shared React dependencies?",
    "answer": "Module Federation (Webpack 5 / Vite) allows multiple independently built and deployed frontend applications to dynamically load remote components at runtime. Crucially, the shared configuration ensures that only a single instance of React and ReactDOM is loaded into memory across all micro-frontends (singleton: true), preventing multiple React copies and broken hook rules.",
    "explanation": "Allows autonomous teams to deploy sub-apps without monolithic build pipelines.",
    "interviewAnswer": "Module Federation (Webpack 5 / Vite) allows multiple independently built and deployed frontend applications to dynamically load remote components at runtime. Crucially, the shared configuration ensures that only a single instance of React and ReactDOM is loaded into memory across all micro-frontends (singleton: true), preventing multiple React copies and broken hook rules. Allows autonomous teams to deploy sub-apps without monolithic build pipelines.",
    "importantPoints": [
      "Module Federation (Webpack 5 / Vite) allows multiple independently built and deployed frontend applications to dynamically load remote components at runtime. Crucially, the shared configuration ensures that only a single instance of React and ReactDOM is loaded into memory across all micro-frontends (singleton: true), preventing multiple React copies and broken hook rules.",
      "Allows autonomous teams to deploy sub-apps without monolithic build pipelines."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "advanced-react",
      "module-federation",
      "micro-frontends",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How do you catch and handle errors that occur inside asynchronous event handlers or setTimeout, which Error Boundaries cannot catch?",
    "answer": "Because Error Boundaries only catch errors during rendering and React commit lifecycle, async errors in event handlers must be caught with try/catch. To trigger an Error Boundary from an async catch block, update React state by throwing the error inside a state updater: const [, setError] = useState(); try { await api(); } catch (err) { setError(() => { throw err; }); } (or use useErrorBoundary hook from react-error-boundary).",
    "explanation": "Throwing inside the state updater forces the error into the render phase where Error Boundaries can catch it.",
    "interviewAnswer": "Because Error Boundaries only catch errors during rendering and React commit lifecycle, async errors in event handlers must be caught with try/catch. To trigger an Error Boundary from an async catch block, update React state by throwing the error inside a state updater: const [, setError] = useState(); try { await api(); } catch (err) { setError(() => { throw err; }); } (or use useErrorBoundary hook from react-error-boundary). Throwing inside the state updater forces the error into the render phase where Error Boundaries can catch it.",
    "importantPoints": [
      "Because Error Boundaries only catch errors during rendering and React commit lifecycle, async errors in event handlers must be caught with try/catch. To trigger an Error Boundary from an async catch block, update React state by throwing the error inside a state updater: const [, setError] = useState(); try { await api(); } catch (err) { setError(() => { throw err; }); } (or use useErrorBoundary hook from react-error-boundary).",
      "Throwing inside the state updater forces the error into the render phase where Error Boundaries can catch it."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "advanced-react",
      "error-boundaries",
      "async-errors",
      "debugging"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What is a Focus Trap, and how do you implement one for an accessible modal dialog in React?",
    "answer": "A focus trap prevents keyboard navigation (Tab / Shift+Tab) from escaping a modal dialog into the background page. Inside useEffect when the modal opens: 1) Query all focusable elements (buttons, inputs, links). 2) Listen for \"keydown\" on the modal container. 3) If Tab is pressed on the last element, focus the first; if Shift+Tab on the first, focus the last. 4) Restore focus to the triggering element on unmount.",
    "explanation": "Critical accessibility (WCAG) requirement for dialogs and flyout menus.",
    "interviewAnswer": "A focus trap prevents keyboard navigation (Tab / Shift+Tab) from escaping a modal dialog into the background page. Inside useEffect when the modal opens: 1) Query all focusable elements (buttons, inputs, links). 2) Listen for \"keydown\" on the modal container. 3) If Tab is pressed on the last element, focus the first; if Shift+Tab on the first, focus the last. 4) Restore focus to the triggering element on unmount. Critical accessibility (WCAG) requirement for dialogs and flyout menus.",
    "importantPoints": [
      "A focus trap prevents keyboard navigation (Tab / Shift+Tab) from escaping a modal dialog into the background page. Inside useEffect when the modal opens: 1) Query all focusable elements (buttons, inputs, links). 2) Listen for \"keydown\" on the modal container. 3) If Tab is pressed on the last element, focus the first; if Shift+Tab on the first, focus the last. 4) Restore focus to the triggering element on unmount.",
      "Critical accessibility (WCAG) requirement for dialogs and flyout menus."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "focus-trap",
      "accessibility",
      "modals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How does React Compiler statically analyze code, and what JavaScript patterns can break its ability to auto-memoize?",
    "answer": "React Compiler models code into Control Flow Graphs (CFG) and static single assignment (SSA) forms to infer dependencies and object lifetimes. Patterns that break its analysis include: mutating props or state directly, reading/writing refs during render, invoking unstable global variables, non-deterministic render logic (Date.now(), Math.random()), or violating Rules of Hooks.",
    "explanation": "Strictly adhering to React pure functional contracts is required for automatic compiler optimization.",
    "interviewAnswer": "React Compiler models code into Control Flow Graphs (CFG) and static single assignment (SSA) forms to infer dependencies and object lifetimes. Patterns that break its analysis include: mutating props or state directly, reading/writing refs during render, invoking unstable global variables, non-deterministic render logic (Date.now(), Math.random()), or violating Rules of Hooks. Strictly adhering to React pure functional contracts is required for automatic compiler optimization.",
    "importantPoints": [
      "React Compiler models code into Control Flow Graphs (CFG) and static single assignment (SSA) forms to infer dependencies and object lifetimes. Patterns that break its analysis include: mutating props or state directly, reading/writing refs during render, invoking unstable global variables, non-deterministic render logic (Date.now(), Math.random()), or violating Rules of Hooks.",
      "Strictly adhering to React pure functional contracts is required for automatic compiler optimization."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "react-compiler",
      "static-analysis",
      "react19"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What was \"Wrapper Hell\" in legacy React, and how did React Hooks and Component Composition eliminate it?",
    "answer": "In legacy React, sharing cross-cutting concerns (authentication, theming, analytics, routing) required nesting Higher-Order Components (withAuth(withTheme(withRouter(MyComponent)))) or deeply nested Render Props. This produced 20+ layers of wrapper nodes in React DevTools (\"Wrapper Hell\"), polluted props, and made stack traces unreadable. Hooks extract stateful logic into flat function calls without adding any DOM or component wrapper layers.",
    "explanation": "Replaced HOC hierarchy with linear, flat, readable hook calls.",
    "interviewAnswer": "In legacy React, sharing cross-cutting concerns (authentication, theming, analytics, routing) required nesting Higher-Order Components (withAuth(withTheme(withRouter(MyComponent)))) or deeply nested Render Props. This produced 20+ layers of wrapper nodes in React DevTools (\"Wrapper Hell\"), polluted props, and made stack traces unreadable. Hooks extract stateful logic into flat function calls without adding any DOM or component wrapper layers. Replaced HOC hierarchy with linear, flat, readable hook calls.",
    "importantPoints": [
      "In legacy React, sharing cross-cutting concerns (authentication, theming, analytics, routing) required nesting Higher-Order Components (withAuth(withTheme(withRouter(MyComponent)))) or deeply nested Render Props. This produced 20+ layers of wrapper nodes in React DevTools (\"Wrapper Hell\"), polluted props, and made stack traces unreadable. Hooks extract stateful logic into flat function calls without adding any DOM or component wrapper layers.",
      "Replaced HOC hierarchy with linear, flat, readable hook calls."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "wrapper-hell",
      "hocs",
      "hooks-evolution"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How do you create an accessible Tooltip component in React that handles viewport collisions and renders via Portals?",
    "answer": "Render the tooltip content using createPortal(content, document.body). In useLayoutEffect, calculate the trigger element bounding rect (getBoundingClientRect()). Position the tooltip with position: fixed, adjusting top/left if it collides with viewport edges. Attach aria-describedby on trigger and role=\"tooltip\" on the portal container.",
    "explanation": "Portaling to body prevents CSS overflow: hidden or z-index stacking context clipping by parent containers.",
    "interviewAnswer": "Render the tooltip content using createPortal(content, document.body). In useLayoutEffect, calculate the trigger element bounding rect (getBoundingClientRect()). Position the tooltip with position: fixed, adjusting top/left if it collides with viewport edges. Attach aria-describedby on trigger and role=\"tooltip\" on the portal container. Portaling to body prevents CSS overflow: hidden or z-index stacking context clipping by parent containers.",
    "importantPoints": [
      "Render the tooltip content using createPortal(content, document.body). In useLayoutEffect, calculate the trigger element bounding rect (getBoundingClientRect()). Position the tooltip with position: fixed, adjusting top/left if it collides with viewport edges. Attach aria-describedby on trigger and role=\"tooltip\" on the portal container.",
      "Portaling to body prevents CSS overflow: hidden or z-index stacking context clipping by parent containers."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "tooltips",
      "portals",
      "accessibility"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How does React prevent prototype pollution vulnerabilities when rendering props objects with spread syntax: <Component {...props} />?",
    "answer": "While JSX spread does not execute deep property assignments, if untrusted user input is parsed via JSON.parse and spread directly, malicious properties like __proto__ or constructor can be injected. React elements internally freeze props in development (Object.freeze(element.props)) and use hasOwnProperty checks during reconciliation to prevent prototype traversal.",
    "explanation": "Never blindly spread unsanitized user-submitted JSON objects directly into component props.",
    "interviewAnswer": "While JSX spread does not execute deep property assignments, if untrusted user input is parsed via JSON.parse and spread directly, malicious properties like __proto__ or constructor can be injected. React elements internally freeze props in development (Object.freeze(element.props)) and use hasOwnProperty checks during reconciliation to prevent prototype traversal. Never blindly spread unsanitized user-submitted JSON objects directly into component props.",
    "importantPoints": [
      "While JSX spread does not execute deep property assignments, if untrusted user input is parsed via JSON.parse and spread directly, malicious properties like __proto__ or constructor can be injected. React elements internally freeze props in development (Object.freeze(element.props)) and use hasOwnProperty checks during reconciliation to prevent prototype traversal.",
      "Never blindly spread unsanitized user-submitted JSON objects directly into component props."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Production / Real-World",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "security",
      "prototype-pollution",
      "props-spread"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What is the difference between React.cloneElement and the modern children render prop / composition pattern?",
    "answer": "React.cloneElement(child, { extraProp }) creates a copy of an element and shallow merges new props onto it. However, it implicitly injects props without clear TypeScript contracts and can break if children are wrapped or non-elements. Modern composition uses explicit render props or React Context, where state and props are explicitly passed and strongly typed.",
    "explanation": "React team discourages cloneElement in modern applications in favor of Context or composition.",
    "interviewAnswer": "React.cloneElement(child, { extraProp }) creates a copy of an element and shallow merges new props onto it. However, it implicitly injects props without clear TypeScript contracts and can break if children are wrapped or non-elements. Modern composition uses explicit render props or React Context, where state and props are explicitly passed and strongly typed. React team discourages cloneElement in modern applications in favor of Context or composition.",
    "importantPoints": [
      "React.cloneElement(child, { extraProp }) creates a copy of an element and shallow merges new props onto it. However, it implicitly injects props without clear TypeScript contracts and can break if children are wrapped or non-elements. Modern composition uses explicit render props or React Context, where state and props are explicitly passed and strongly typed.",
      "React team discourages cloneElement in modern applications in favor of Context or composition."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "cloneelement",
      "composition",
      "anti-pattern"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How can you prevent SVG Cross-Site Scripting (XSS) when rendering user-uploaded SVG files in React?",
    "answer": "SVGs can contain executable JavaScript (<svg><script>alert(1)</script></svg> or onload attributes). Never inject raw SVG strings using dangerouslySetInnerHTML. Instead, sanitize SVG strings with DOMPurify with SVG tags enabled, or render them inside an <img> tag with sandbox attributes (<img src={svgUrl} />), which blocks all script execution by default.",
    "explanation": "Browsers disable script execution inside images, making <img> the safest vehicle for user SVGs.",
    "interviewAnswer": "SVGs can contain executable JavaScript (<svg><script>alert(1)</script></svg> or onload attributes). Never inject raw SVG strings using dangerouslySetInnerHTML. Instead, sanitize SVG strings with DOMPurify with SVG tags enabled, or render them inside an <img> tag with sandbox attributes (<img src={svgUrl} />), which blocks all script execution by default. Browsers disable script execution inside images, making <img> the safest vehicle for user SVGs.",
    "importantPoints": [
      "SVGs can contain executable JavaScript (<svg><script>alert(1)</script></svg> or onload attributes). Never inject raw SVG strings using dangerouslySetInnerHTML. Instead, sanitize SVG strings with DOMPurify with SVG tags enabled, or render them inside an <img> tag with sandbox attributes (<img src={svgUrl} />), which blocks all script execution by default.",
      "Browsers disable script execution inside images, making <img> the safest vehicle for user SVGs."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Production / Real-World",
    "isImportant": true,
    "tags": [
      "react",
      "advanced-react",
      "security",
      "svg",
      "xss",
      "dompurify"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What is the \"Render Props\" pattern, and what is its primary advantage over Higher-Order Components (HOCs)?",
    "answer": "The Render Props pattern involves passing a function as a prop (or children) that returns JSX: <DataProvider render={data => <View data={data} />} />. Its primary advantage over HOCs is that it eliminates prop naming collisions, makes the data flow completely explicit and traceable in JSX, and avoids wrapping component definitions statically.",
    "explanation": "While largely replaced by custom hooks for logic sharing, render props remain valuable for inversion-of-control UI components.",
    "interviewAnswer": "The Render Props pattern involves passing a function as a prop (or children) that returns JSX: <DataProvider render={data => <View data={data} />} />. Its primary advantage over HOCs is that it eliminates prop naming collisions, makes the data flow completely explicit and traceable in JSX, and avoids wrapping component definitions statically. While largely replaced by custom hooks for logic sharing, render props remain valuable for inversion-of-control UI components.",
    "importantPoints": [
      "The Render Props pattern involves passing a function as a prop (or children) that returns JSX: <DataProvider render={data => <View data={data} />} />. Its primary advantage over HOCs is that it eliminates prop naming collisions, makes the data flow completely explicit and traceable in JSX, and avoids wrapping component definitions statically.",
      "While largely replaced by custom hooks for logic sharing, render props remain valuable for inversion-of-control UI components."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "render-props",
      "hocs",
      "design-patterns"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How does React 19 Asset Loading (preloading stylesheets, fonts, and scripts) integrate directly into the component tree?",
    "answer": "In React 19, you can render <link rel=\"stylesheet\">, <link rel=\"preload\">, and <script async> directly inside any deeply nested component. React automatically hoists these tags to the document <head>, deduplicates duplicate requests, and pauses component rendering until stylesheets finish loading to prevent Flash of Unstyled Content (FOUC).",
    "explanation": "Eliminates the need for external head-management packages like react-helmet.",
    "interviewAnswer": "In React 19, you can render <link rel=\"stylesheet\">, <link rel=\"preload\">, and <script async> directly inside any deeply nested component. React automatically hoists these tags to the document <head>, deduplicates duplicate requests, and pauses component rendering until stylesheets finish loading to prevent Flash of Unstyled Content (FOUC). Eliminates the need for external head-management packages like react-helmet.",
    "importantPoints": [
      "In React 19, you can render <link rel=\"stylesheet\">, <link rel=\"preload\">, and <script async> directly inside any deeply nested component. React automatically hoists these tags to the document <head>, deduplicates duplicate requests, and pauses component rendering until stylesheets finish loading to prevent Flash of Unstyled Content (FOUC).",
      "Eliminates the need for external head-management packages like react-helmet."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "react19",
      "asset-loading",
      "fouc"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What is the difference between static methods forwarding in HOCs and why was hoist-non-react-statics required?",
    "answer": "When wrapping a component in a Higher-Order Component, the returned wrapper component does not automatically copy static methods (e.g. MyComponent.fetchData) declared on the original component. hoist-non-react-statics automatically traverses and copies all non-React static methods onto the wrapper component so external callers can still access them.",
    "explanation": "Another friction point of HOCs that custom hooks completely avoided.",
    "interviewAnswer": "When wrapping a component in a Higher-Order Component, the returned wrapper component does not automatically copy static methods (e.g. MyComponent.fetchData) declared on the original component. hoist-non-react-statics automatically traverses and copies all non-React static methods onto the wrapper component so external callers can still access them. Another friction point of HOCs that custom hooks completely avoided.",
    "importantPoints": [
      "When wrapping a component in a Higher-Order Component, the returned wrapper component does not automatically copy static methods (e.g. MyComponent.fetchData) declared on the original component. hoist-non-react-statics automatically traverses and copies all non-React static methods onto the wrapper component so external callers can still access them.",
      "Another friction point of HOCs that custom hooks completely avoided."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "hocs",
      "static-methods",
      "hoist-non-react-statics"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How do you implement a resilient circuit-breaker or retry mechanism around failed React.lazy dynamic imports (e.g. when network drops during deployment)?",
    "answer": "Wrap the dynamic import in a retry utility: const lazyWithRetry = (componentImport) => React.lazy(async () => { const pageHasAlreadyBeenRefreshed = JSON.parse(window.sessionStorage.getItem(\"retry-lazy\") || \"false\"); try { return await componentImport(); } catch (error) { if (!pageHasAlreadyBeenRefreshed) { window.sessionStorage.setItem(\"retry-lazy\", \"true\"); window.location.reload(); } throw error; } });.",
    "explanation": "When new deployments invalidate old chunk hashes on the server, auto-refresh fetches the new index HTML and correct chunk URLs.",
    "interviewAnswer": "Wrap the dynamic import in a retry utility: const lazyWithRetry = (componentImport) => React.lazy(async () => { const pageHasAlreadyBeenRefreshed = JSON.parse(window.sessionStorage.getItem(\"retry-lazy\") || \"false\"); try { return await componentImport(); } catch (error) { if (!pageHasAlreadyBeenRefreshed) { window.sessionStorage.setItem(\"retry-lazy\", \"true\"); window.location.reload(); } throw error; } });. When new deployments invalidate old chunk hashes on the server, auto-refresh fetches the new index HTML and correct chunk URLs.",
    "importantPoints": [
      "Wrap the dynamic import in a retry utility: const lazyWithRetry = (componentImport) => React.lazy(async () => { const pageHasAlreadyBeenRefreshed = JSON.parse(window.sessionStorage.getItem(\"retry-lazy\") || \"false\"); try { return await componentImport(); } catch (error) { if (!pageHasAlreadyBeenRefreshed) { window.sessionStorage.setItem(\"retry-lazy\", \"true\"); window.location.reload(); } throw error; } });.",
      "When new deployments invalidate old chunk hashes on the server, auto-refresh fetches the new index HTML and correct chunk URLs."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "react",
      "advanced-react",
      "react-lazy",
      "code-splitting",
      "production-resilience"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What is the purpose of React.startTransition in handling concurrent state updates across multiple subtrees?",
    "answer": "startTransition separates urgent updates (typing, clicking) from non-urgent transition updates (sorting 10,000 items, changing pages). React executes urgent updates immediately, rendering non-urgent transitions in the background and interrupting them if the user inputs another urgent event, preventing UI lag.",
    "explanation": "Core API powering smooth transitions in React 18+ Concurrent Mode.",
    "interviewAnswer": "startTransition separates urgent updates (typing, clicking) from non-urgent transition updates (sorting 10,000 items, changing pages). React executes urgent updates immediately, rendering non-urgent transitions in the background and interrupting them if the user inputs another urgent event, preventing UI lag. Core API powering smooth transitions in React 18+ Concurrent Mode.",
    "importantPoints": [
      "startTransition separates urgent updates (typing, clicking) from non-urgent transition updates (sorting 10,000 items, changing pages). React executes urgent updates immediately, rendering non-urgent transitions in the background and interrupting them if the user inputs another urgent event, preventing UI lag.",
      "Core API powering smooth transitions in React 18+ Concurrent Mode."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "starttransition",
      "concurrent-mode",
      "react18"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How can you build a headless component library in React (like Radix UI or React Aria)?",
    "answer": "A headless library provides complete accessibility (ARIA attributes, keyboard navigation, focus management, state machines) without any pre-defined visual CSS styling. It delivers hooks (useDialog) or unstyled primitives (<Dialog.Root>) that expose state and props, giving consumer teams total styling freedom via Tailwind, CSS Modules, or CSS-in-JS.",
    "explanation": "Separates accessibility and behavioral logic from visual design system aesthetics.",
    "interviewAnswer": "A headless library provides complete accessibility (ARIA attributes, keyboard navigation, focus management, state machines) without any pre-defined visual CSS styling. It delivers hooks (useDialog) or unstyled primitives (<Dialog.Root>) that expose state and props, giving consumer teams total styling freedom via Tailwind, CSS Modules, or CSS-in-JS. Separates accessibility and behavioral logic from visual design system aesthetics.",
    "importantPoints": [
      "A headless library provides complete accessibility (ARIA attributes, keyboard navigation, focus management, state machines) without any pre-defined visual CSS styling. It delivers hooks (useDialog) or unstyled primitives (<Dialog.Root>) that expose state and props, giving consumer teams total styling freedom via Tailwind, CSS Modules, or CSS-in-JS.",
      "Separates accessibility and behavioral logic from visual design system aesthetics."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "headless-ui",
      "design-systems",
      "accessibility"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How do you detect memory leaks caused by detached DOM nodes in enterprise React applications?",
    "answer": "In Chrome DevTools, record an interaction in the Memory tab or take Heap Snapshots before and after navigation. Filter by \"Detached\". Inspect the Retaining Tree to find which JavaScript closure (e.g. uncleared event listener, un-aborted promise, or window global) holds the reference to the detached HTML element.",
    "explanation": "A detached node cannot be reclaimed by garbage collection if a JS variable still references it.",
    "interviewAnswer": "In Chrome DevTools, record an interaction in the Memory tab or take Heap Snapshots before and after navigation. Filter by \"Detached\". Inspect the Retaining Tree to find which JavaScript closure (e.g. uncleared event listener, un-aborted promise, or window global) holds the reference to the detached HTML element. A detached node cannot be reclaimed by garbage collection if a JS variable still references it.",
    "importantPoints": [
      "In Chrome DevTools, record an interaction in the Memory tab or take Heap Snapshots before and after navigation. Filter by \"Detached\". Inspect the Retaining Tree to find which JavaScript closure (e.g. uncleared event listener, un-aborted promise, or window global) holds the reference to the detached HTML element.",
      "A detached node cannot be reclaimed by garbage collection if a JS variable still references it."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Production / Real-World",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "memory-leaks",
      "heap-snapshot",
      "detached-dom"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "Why should you avoid using dangerouslySetInnerHTML with user input, and what library should you always use to sanitize HTML strings?",
    "answer": "dangerouslySetInnerHTML injects unescaped raw HTML directly into the DOM, making the application vulnerable to Cross-Site Scripting (XSS) where malicious scripts steal cookies, tokens, or hijack user sessions. Always sanitize the string using DOMPurify (DOMPurify.sanitize(dirtyHtml)) before passing it to dangerouslySetInnerHTML.",
    "explanation": "DOMPurify strips out dangerous tags (<script>, <iframe>) and attributes (onload, onerror).",
    "interviewAnswer": "dangerouslySetInnerHTML injects unescaped raw HTML directly into the DOM, making the application vulnerable to Cross-Site Scripting (XSS) where malicious scripts steal cookies, tokens, or hijack user sessions. Always sanitize the string using DOMPurify (DOMPurify.sanitize(dirtyHtml)) before passing it to dangerouslySetInnerHTML. DOMPurify strips out dangerous tags (<script>, <iframe>) and attributes (onload, onerror).",
    "importantPoints": [
      "dangerouslySetInnerHTML injects unescaped raw HTML directly into the DOM, making the application vulnerable to Cross-Site Scripting (XSS) where malicious scripts steal cookies, tokens, or hijack user sessions. Always sanitize the string using DOMPurify (DOMPurify.sanitize(dirtyHtml)) before passing it to dangerouslySetInnerHTML.",
      "DOMPurify strips out dangerous tags (<script>, <iframe>) and attributes (onload, onerror)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Production / Real-World",
    "isImportant": true,
    "tags": [
      "react",
      "advanced-react",
      "security",
      "xss",
      "dompurify",
      "dangerouslysetinnerhtml"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How does React 19 Document Metadata support (<title>, <meta>) work without requiring third-party libraries?",
    "answer": "In React 19, components can render <title>, <meta>, and <link> tags anywhere in their JSX tree. React automatically discovers them and hoists them to the document <head>. In SSR and client navigation, React updates the document title and meta tags automatically, ensuring proper SEO tags per route natively.",
    "explanation": "Deprecates external libraries like react-helmet-async.",
    "interviewAnswer": "In React 19, components can render <title>, <meta>, and <link> tags anywhere in their JSX tree. React automatically discovers them and hoists them to the document <head>. In SSR and client navigation, React updates the document title and meta tags automatically, ensuring proper SEO tags per route natively. Deprecates external libraries like react-helmet-async.",
    "importantPoints": [
      "In React 19, components can render <title>, <meta>, and <link> tags anywhere in their JSX tree. React automatically discovers them and hoists them to the document <head>. In SSR and client navigation, React updates the document title and meta tags automatically, ensuring proper SEO tags per route natively.",
      "Deprecates external libraries like react-helmet-async."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "react19",
      "metadata",
      "seo",
      "head"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How does React handle focus management when a modal dialog is closed by the user?",
    "answer": "When opening a modal, save the currently focused element using document.activeElement in a ref. When the modal closes or unmounts, restore focus by calling previousActiveElementRef.current?.focus(). This ensures screen reader and keyboard users do not lose their focus position in the DOM.",
    "explanation": "Essential for accessibility (a11y) compliance.",
    "interviewAnswer": "When opening a modal, save the currently focused element using document.activeElement in a ref. When the modal closes or unmounts, restore focus by calling previousActiveElementRef.current?.focus(). This ensures screen reader and keyboard users do not lose their focus position in the DOM. Essential for accessibility (a11y) compliance.",
    "importantPoints": [
      "When opening a modal, save the currently focused element using document.activeElement in a ref. When the modal closes or unmounts, restore focus by calling previousActiveElementRef.current?.focus(). This ensures screen reader and keyboard users do not lose their focus position in the DOM.",
      "Essential for accessibility (a11y) compliance."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "accessibility",
      "focus-management",
      "modals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What is the difference between Server Actions and API Routes in Next.js / React 19?",
    "answer": "API Routes define public REST/JSON HTTP endpoints (/api/users) that require manual request parsing, response formatting, and route handlers. Server Actions are asynchronous backend functions defined directly in code (\"use server\") that can be invoked seamlessly like regular JavaScript functions from client components, with automatic type safety, serialization, and revalidation.",
    "explanation": "Server Actions streamline internal app mutations while API Routes serve public third-party APIs.",
    "interviewAnswer": "API Routes define public REST/JSON HTTP endpoints (/api/users) that require manual request parsing, response formatting, and route handlers. Server Actions are asynchronous backend functions defined directly in code (\"use server\") that can be invoked seamlessly like regular JavaScript functions from client components, with automatic type safety, serialization, and revalidation. Server Actions streamline internal app mutations while API Routes serve public third-party APIs.",
    "importantPoints": [
      "API Routes define public REST/JSON HTTP endpoints (/api/users) that require manual request parsing, response formatting, and route handlers. Server Actions are asynchronous backend functions defined directly in code (\"use server\") that can be invoked seamlessly like regular JavaScript functions from client components, with automatic type safety, serialization, and revalidation.",
      "Server Actions streamline internal app mutations while API Routes serve public third-party APIs."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "server-actions",
      "api-routes",
      "nextjs"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How do you create an Isomorphic / Universal React hook that behaves safely on both SSR server and browser client?",
    "answer": "Check for window existence: const isBrowser = typeof window !== \"undefined\" && typeof window.document !== \"undefined\";. For layout effects, conditionally export: export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;. This prevents SSR warnings on the server while maintaining flicker-free layout measurements on the client.",
    "explanation": "Standard pattern in major libraries (usehooks-ts, react-use).",
    "interviewAnswer": "Check for window existence: const isBrowser = typeof window !== \"undefined\" && typeof window.document !== \"undefined\";. For layout effects, conditionally export: export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;. This prevents SSR warnings on the server while maintaining flicker-free layout measurements on the client. Standard pattern in major libraries (usehooks-ts, react-use).",
    "importantPoints": [
      "Check for window existence: const isBrowser = typeof window !== \"undefined\" && typeof window.document !== \"undefined\";. For layout effects, conditionally export: export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;. This prevents SSR warnings on the server while maintaining flicker-free layout measurements on the client.",
      "Standard pattern in major libraries (usehooks-ts, react-use)."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "ssr",
      "isomorphic",
      "uselayouteffect"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What is the role of the Offscreen component (Activity) in React 18/19 for preserving tab state?",
    "answer": "The <Activity mode={isActive ? \"visible\" : \"hidden\"}> component allows keeping an inactive view (like a background tab) mounted in memory and connected to its Fiber tree while removing its physical DOM nodes and pausing its effects. When made visible again, it restores state instantly with zero re-rendering overhead.",
    "explanation": "Mimics native mobile view controllers that keep background screens paused in memory.",
    "interviewAnswer": "The <Activity mode={isActive ? \"visible\" : \"hidden\"}> component allows keeping an inactive view (like a background tab) mounted in memory and connected to its Fiber tree while removing its physical DOM nodes and pausing its effects. When made visible again, it restores state instantly with zero re-rendering overhead. Mimics native mobile view controllers that keep background screens paused in memory.",
    "importantPoints": [
      "The <Activity mode={isActive ? \"visible\" : \"hidden\"}> component allows keeping an inactive view (like a background tab) mounted in memory and connected to its Fiber tree while removing its physical DOM nodes and pausing its effects. When made visible again, it restores state instantly with zero re-rendering overhead.",
      "Mimics native mobile view controllers that keep background screens paused in memory."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "activity",
      "offscreen",
      "react18"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How does React protect against Tabnabbing vulnerabilities when rendering external links with target=\"_blank\"?",
    "answer": "When an anchor tag uses target=\"_blank\", the newly opened tab can access the original window via window.opener and redirect it to a phishing site. React automatically sets rel=\"noopener noreferrer\" when target=\"_blank\" is used, neutralizing the window.opener reference.",
    "explanation": "Modern browsers now do this by default, but React enforces it at the JSX level.",
    "interviewAnswer": "When an anchor tag uses target=\"_blank\", the newly opened tab can access the original window via window.opener and redirect it to a phishing site. React automatically sets rel=\"noopener noreferrer\" when target=\"_blank\" is used, neutralizing the window.opener reference. Modern browsers now do this by default, but React enforces it at the JSX level.",
    "importantPoints": [
      "When an anchor tag uses target=\"_blank\", the newly opened tab can access the original window via window.opener and redirect it to a phishing site. React automatically sets rel=\"noopener noreferrer\" when target=\"_blank\" is used, neutralizing the window.opener reference.",
      "Modern browsers now do this by default, but React enforces it at the JSX level."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "security",
      "tabnabbing",
      "links"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What is React Fiber \"Time Slicing\" and how does it prevent long JavaScript tasks from blocking user inputs?",
    "answer": "Time slicing breaks large render trees into small units of work executed inside 5ms time slices. After each slice, React checks if the browser has pending user input events. If an event is pending, React pauses rendering, yields execution back to the browser event loop to process the event, and resumes rendering where it left off.",
    "explanation": "Transforms React from a synchronous recursive engine into a cooperative multitasking OS.",
    "interviewAnswer": "Time slicing breaks large render trees into small units of work executed inside 5ms time slices. After each slice, React checks if the browser has pending user input events. If an event is pending, React pauses rendering, yields execution back to the browser event loop to process the event, and resumes rendering where it left off. Transforms React from a synchronous recursive engine into a cooperative multitasking OS.",
    "importantPoints": [
      "Time slicing breaks large render trees into small units of work executed inside 5ms time slices. After each slice, React checks if the browser has pending user input events. If an event is pending, React pauses rendering, yields execution back to the browser event loop to process the event, and resumes rendering where it left off.",
      "Transforms React from a synchronous recursive engine into a cooperative multitasking OS."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "time-slicing",
      "fiber",
      "scheduler"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How do you design a custom Error Boundary with an automated error reporting integration (like Sentry or Datadog)?",
    "answer": "In componentDidCatch(error, errorInfo), send the error and componentStack to the logging service: Sentry.captureException(error, { extra: { componentStack: errorInfo.componentStack } }). Provide a reset button in fallback UI that invokes this.setState({ hasError: false }) or navigation to restore normal rendering.",
    "explanation": "Captures critical production crash diagnostics with full component tree context.",
    "interviewAnswer": "In componentDidCatch(error, errorInfo), send the error and componentStack to the logging service: Sentry.captureException(error, { extra: { componentStack: errorInfo.componentStack } }). Provide a reset button in fallback UI that invokes this.setState({ hasError: false }) or navigation to restore normal rendering. Captures critical production crash diagnostics with full component tree context.",
    "importantPoints": [
      "In componentDidCatch(error, errorInfo), send the error and componentStack to the logging service: Sentry.captureException(error, { extra: { componentStack: errorInfo.componentStack } }). Provide a reset button in fallback UI that invokes this.setState({ hasError: false }) or navigation to restore normal rendering.",
      "Captures critical production crash diagnostics with full component tree context."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "error-boundaries",
      "sentry",
      "monitoring"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What is the difference between React 19 \"use\" hook and Promise.all when loading multiple asynchronous resources?",
    "answer": "Promise.all requires all promises to be initiated together and waits for all to resolve before rendering. With React 19 \"use(promise)\" and Suspense, individual components can suspend independently: faster data streams in and renders immediately, while slower promises remain suspended inside isolated Suspense boundaries.",
    "explanation": "Enables progressive, fine-grained component streaming rather than all-or-nothing waterfalls.",
    "interviewAnswer": "Promise.all requires all promises to be initiated together and waits for all to resolve before rendering. With React 19 \"use(promise)\" and Suspense, individual components can suspend independently: faster data streams in and renders immediately, while slower promises remain suspended inside isolated Suspense boundaries. Enables progressive, fine-grained component streaming rather than all-or-nothing waterfalls.",
    "importantPoints": [
      "Promise.all requires all promises to be initiated together and waits for all to resolve before rendering. With React 19 \"use(promise)\" and Suspense, individual components can suspend independently: faster data streams in and renders immediately, while slower promises remain suspended inside isolated Suspense boundaries.",
      "Enables progressive, fine-grained component streaming rather than all-or-nothing waterfalls."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "react19",
      "use-api",
      "suspense",
      "streaming"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How can you prevent prop drilling across 8 component levels without using React Context or global state managers?",
    "answer": "Use Component Composition: pass the child element directly as a prop or children from the top-level parent (<Page><Child /></Page>). The intermediate 6 components simply render {children} or {sidebar} without needing to accept, understand, or forward any child-specific props.",
    "explanation": "Composition solves most prop drilling problems with zero abstractions.",
    "interviewAnswer": "Use Component Composition: pass the child element directly as a prop or children from the top-level parent (<Page><Child /></Page>). The intermediate 6 components simply render {children} or {sidebar} without needing to accept, understand, or forward any child-specific props. Composition solves most prop drilling problems with zero abstractions.",
    "importantPoints": [
      "Use Component Composition: pass the child element directly as a prop or children from the top-level parent (<Page><Child /></Page>). The intermediate 6 components simply render {children} or {sidebar} without needing to accept, understand, or forward any child-specific props.",
      "Composition solves most prop drilling problems with zero abstractions."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "advanced-react",
      "prop-drilling",
      "composition",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What is the role of getDerivedStateFromError in an Error Boundary compared to componentDidCatch?",
    "answer": "getDerivedStateFromError is a static method called synchronously during the render phase when a descendant component throws. It returns an updated state object (e.g. { hasError: true }) to immediately render the fallback UI. componentDidCatch is called during the commit phase for side effects (logging to monitoring tools).",
    "explanation": "getDerivedStateFromError manages state; componentDidCatch handles side effects.",
    "interviewAnswer": "getDerivedStateFromError is a static method called synchronously during the render phase when a descendant component throws. It returns an updated state object (e.g. { hasError: true }) to immediately render the fallback UI. componentDidCatch is called during the commit phase for side effects (logging to monitoring tools). getDerivedStateFromError manages state; componentDidCatch handles side effects.",
    "importantPoints": [
      "getDerivedStateFromError is a static method called synchronously during the render phase when a descendant component throws. It returns an updated state object (e.g. { hasError: true }) to immediately render the fallback UI. componentDidCatch is called during the commit phase for side effects (logging to monitoring tools).",
      "getDerivedStateFromError manages state; componentDidCatch handles side effects."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "error-boundaries",
      "lifecycles"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How does React Three Fiber (R3F) adapt React's declarative component model to Three.js WebGL 3D scenes?",
    "answer": "R3F uses a custom React reconciler that maps JSX tags (<mesh>, <boxGeometry>, <meshStandardMaterial>) directly to Three.js class instances (THREE.Mesh, THREE.BoxGeometry). Changes to props automatically mutate Three.js properties in real time, bringing React's state, lifecycle, and component composition to 3D rendering.",
    "explanation": "Demonstrates the power of decoupled reconciler architecture beyond the HTML DOM.",
    "interviewAnswer": "R3F uses a custom React reconciler that maps JSX tags (<mesh>, <boxGeometry>, <meshStandardMaterial>) directly to Three.js class instances (THREE.Mesh, THREE.BoxGeometry). Changes to props automatically mutate Three.js properties in real time, bringing React's state, lifecycle, and component composition to 3D rendering. Demonstrates the power of decoupled reconciler architecture beyond the HTML DOM.",
    "importantPoints": [
      "R3F uses a custom React reconciler that maps JSX tags (<mesh>, <boxGeometry>, <meshStandardMaterial>) directly to Three.js class instances (THREE.Mesh, THREE.BoxGeometry). Changes to props automatically mutate Three.js properties in real time, bringing React's state, lifecycle, and component composition to 3D rendering.",
      "Demonstrates the power of decoupled reconciler architecture beyond the HTML DOM."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "react-three-fiber",
      "webgl",
      "custom-renderer"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How do you test error boundaries using React Testing Library without polluting the test terminal with console.error logs?",
    "answer": "Spy on console.error and mock its implementation: const spy = jest.spyOn(console, \"error\").mockImplementation(() => {});. Render a throwing component inside the ErrorBoundary, assert fallback UI appears, and restore the spy in afterEach: spy.mockRestore().",
    "explanation": "Keeps test test runners clean while asserting proper error containment.",
    "interviewAnswer": "Spy on console.error and mock its implementation: const spy = jest.spyOn(console, \"error\").mockImplementation(() => {});. Render a throwing component inside the ErrorBoundary, assert fallback UI appears, and restore the spy in afterEach: spy.mockRestore(). Keeps test test runners clean while asserting proper error containment.",
    "importantPoints": [
      "Spy on console.error and mock its implementation: const spy = jest.spyOn(console, \"error\").mockImplementation(() => {});. Render a throwing component inside the ErrorBoundary, assert fallback UI appears, and restore the spy in afterEach: spy.mockRestore().",
      "Keeps test test runners clean while asserting proper error containment."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "testing",
      "error-boundaries",
      "jest"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "Why does React 19 deprecate defaultProps on functional components in favor of JavaScript default parameter values?",
    "answer": "JavaScript native ES6 default parameters (function Button({ size = \"medium\", variant = \"primary\" })) are standard JavaScript, fully supported by TypeScript, and processed at zero runtime cost by JavaScript engines. defaultProps added extra React runtime property checks and required additional HOC overhead.",
    "explanation": "Modern React aligns with native JavaScript platform standards.",
    "interviewAnswer": "JavaScript native ES6 default parameters (function Button({ size = \"medium\", variant = \"primary\" })) are standard JavaScript, fully supported by TypeScript, and processed at zero runtime cost by JavaScript engines. defaultProps added extra React runtime property checks and required additional HOC overhead. Modern React aligns with native JavaScript platform standards.",
    "importantPoints": [
      "JavaScript native ES6 default parameters (function Button({ size = \"medium\", variant = \"primary\" })) are standard JavaScript, fully supported by TypeScript, and processed at zero runtime cost by JavaScript engines. defaultProps added extra React runtime property checks and required additional HOC overhead.",
      "Modern React aligns with native JavaScript platform standards."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "defaultprops",
      "react19",
      "javascript-standards"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What is the difference between Server Actions and Client Actions when handling progressive enhancement in HTML forms?",
    "answer": "With progressive enhancement, a form (<form action={serverAction}>) can submit directly via native HTTP POST even if JavaScript has not loaded or is disabled in the browser. Once JavaScript hydrates, React intercepts the submission and upgrades it to an AJAX/RPC client action with optimistic feedback and zero full-page reload.",
    "explanation": "Guarantees that forms work across unstable network connections and low-powered mobile devices.",
    "interviewAnswer": "With progressive enhancement, a form (<form action={serverAction}>) can submit directly via native HTTP POST even if JavaScript has not loaded or is disabled in the browser. Once JavaScript hydrates, React intercepts the submission and upgrades it to an AJAX/RPC client action with optimistic feedback and zero full-page reload. Guarantees that forms work across unstable network connections and low-powered mobile devices.",
    "importantPoints": [
      "With progressive enhancement, a form (<form action={serverAction}>) can submit directly via native HTTP POST even if JavaScript has not loaded or is disabled in the browser. Once JavaScript hydrates, React intercepts the submission and upgrades it to an AJAX/RPC client action with optimistic feedback and zero full-page reload.",
      "Guarantees that forms work across unstable network connections and low-powered mobile devices."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "progressive-enhancement",
      "forms",
      "server-actions"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "How does the React Native reconciler bridge the gap between JavaScript and native iOS/Android UI widgets?",
    "answer": "React Native maps React components (<View>, <Text>) to platform native UI widgets (UIView on iOS, android.view.View on Android). The Fabric reconciler communicates across the JavaScript and C++ JSI (JavaScript Interface) boundary, executing native layout and UI mutations synchronously without old asynchronous JSON message bridges.",
    "explanation": "JSI enables direct memory pointer sharing between JavaScript and C++ native code.",
    "interviewAnswer": "React Native maps React components (<View>, <Text>) to platform native UI widgets (UIView on iOS, android.view.View on Android). The Fabric reconciler communicates across the JavaScript and C++ JSI (JavaScript Interface) boundary, executing native layout and UI mutations synchronously without old asynchronous JSON message bridges. JSI enables direct memory pointer sharing between JavaScript and C++ native code.",
    "importantPoints": [
      "React Native maps React components (<View>, <Text>) to platform native UI widgets (UIView on iOS, android.view.View on Android). The Fabric reconciler communicates across the JavaScript and C++ JSI (JavaScript Interface) boundary, executing native layout and UI mutations synchronously without old asynchronous JSON message bridges.",
      "JSI enables direct memory pointer sharing between JavaScript and C++ native code."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "advanced-react",
      "react-native",
      "fabric",
      "jsi",
      "mobile"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "advanced-react",
    "question": "What are the security implications of server-side data fetching when passing data from Server Components to Client Components?",
    "answer": "Any data passed as props from a Server Component to a Client Component (\"use client\") is serialized into the HTML RSC payload sent to the user's browser. Never pass database records containing sensitive fields (hashed passwords, internal keys, API secrets) as props to client components. Always project or sanitize objects before passing across the server-client boundary.",
    "explanation": "Client component props are fully visible to anyone inspecting network responses in browser DevTools.",
    "interviewAnswer": "Any data passed as props from a Server Component to a Client Component (\"use client\") is serialized into the HTML RSC payload sent to the user's browser. Never pass database records containing sensitive fields (hashed passwords, internal keys, API secrets) as props to client components. Always project or sanitize objects before passing across the server-client boundary. Client component props are fully visible to anyone inspecting network responses in browser DevTools.",
    "importantPoints": [
      "Any data passed as props from a Server Component to a Client Component (\"use client\") is serialized into the HTML RSC payload sent to the user's browser. Never pass database records containing sensitive fields (hashed passwords, internal keys, API secrets) as props to client components. Always project or sanitize objects before passing across the server-client boundary.",
      "Client component props are fully visible to anyone inspecting network responses in browser DevTools."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Production / Real-World",
    "isImportant": true,
    "tags": [
      "react",
      "advanced-react",
      "security",
      "rsc",
      "data-leakage",
      "serialization"
    ]
  }
];
