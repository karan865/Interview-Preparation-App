import { SeedQuestion } from '../types';

export const reactComponentsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "Why did functional components with React Hooks replace class components as the modern standard in React development?",
    "answer": "Functional components with hooks provide better code reuse without wrapper hell, eliminate \"this\" binding confusion, organize related lifecycle logic together in single hooks, and enable better minification and tree-shaking.",
    "explanation": "In class components, logic for a single concern (like subscribing and unsubscribing) was split across componentDidMount and componentWillUnmount. Hooks group related logic together.",
    "interviewAnswer": "Functional components with hooks provide better code reuse without wrapper hell, eliminate \"this\" binding confusion, organize related lifecycle logic together in single hooks, and enable better minification and tree-shaking. In class components, logic for a single concern (like subscribing and unsubscribing) was split across componentDidMount and componentWillUnmount. Hooks group related logic together.",
    "importantPoints": [
      "Functional components with hooks provide better code reuse without wrapper hell, eliminate \"this\" binding confusion, organize related lifecycle logic together in single hooks, and enable better minification and tree-shaking.",
      "In class components, logic for a single concern (like subscribing and unsubscribing) was split across componentDidMount and componentWillUnmount. Hooks group related logic together."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "components",
      "hooks",
      "functional-vs-class"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What is the Compound Component pattern in React, and how does it provide flexible, declarative UI APIs like <Select> and <Option>?",
    "answer": "The Compound Component pattern allows a family of components to share implicit state via React Context, giving the consumer complete declarative control over markup structure without manual prop drilling.",
    "explanation": "Like native HTML <select> and <option>, the parent coordinates state while the consumer arranges layout freely.",
    "interviewAnswer": "The Compound Component pattern allows a family of components to share implicit state via React Context, giving the consumer complete declarative control over markup structure without manual prop drilling. Like native HTML <select> and <option>, the parent coordinates state while the consumer arranges layout freely.",
    "importantPoints": [
      "The Compound Component pattern allows a family of components to share implicit state via React Context, giving the consumer complete declarative control over markup structure without manual prop drilling.",
      "Like native HTML <select> and <option>, the parent coordinates state while the consumer arranges layout freely."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "compound-components",
      "design-patterns",
      "context"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you build a polymorphic component in React with TypeScript (e.g. a <Button> that can render as an <a> link or a <button>)?",
    "answer": "A polymorphic component accepts an \"as\" prop. In TypeScript, generic type parameters and ComponentPropsWithoutRef<T> ensure that passing as=\"a\" enforces valid anchor attributes (href) and forbids button attributes.",
    "explanation": "Enables design system components to share unified styling while adapting the semantically correct HTML element for accessibility and SEO.",
    "interviewAnswer": "A polymorphic component accepts an \"as\" prop. In TypeScript, generic type parameters and ComponentPropsWithoutRef<T> ensure that passing as=\"a\" enforces valid anchor attributes (href) and forbids button attributes. Enables design system components to share unified styling while adapting the semantically correct HTML element for accessibility and SEO.",
    "importantPoints": [
      "A polymorphic component accepts an \"as\" prop. In TypeScript, generic type parameters and ComponentPropsWithoutRef<T> ensure that passing as=\"a\" enforces valid anchor attributes (href) and forbids button attributes.",
      "Enables design system components to share unified styling while adapting the semantically correct HTML element for accessibility and SEO."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "react",
      "typescript",
      "polymorphic-components",
      "design-systems"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What is the difference between calling a component as a function {MyComponent()} versus rendering it as JSX <MyComponent />?",
    "answer": "<MyComponent /> registers a distinct Fiber node with isolated state, lifecycle, and diffing boundaries. {MyComponent()} inlines the function directly into the parent, leaking its hooks into the parent hook array and violating the Rules of Hooks.",
    "explanation": "Calling a component function directly bypasses React reconciliation and can cause \"Rendered fewer hooks than expected\" crashes.",
    "interviewAnswer": "<MyComponent /> registers a distinct Fiber node with isolated state, lifecycle, and diffing boundaries. {MyComponent()} inlines the function directly into the parent, leaking its hooks into the parent hook array and violating the Rules of Hooks. Calling a component function directly bypasses React reconciliation and can cause \"Rendered fewer hooks than expected\" crashes.",
    "importantPoints": [
      "<MyComponent /> registers a distinct Fiber node with isolated state, lifecycle, and diffing boundaries. {MyComponent()} inlines the function directly into the parent, leaking its hooks into the parent hook array and violating the Rules of Hooks.",
      "Calling a component function directly bypasses React reconciliation and can cause \"Rendered fewer hooks than expected\" crashes."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "jsx",
      "fiber",
      "rules-of-hooks",
      "gotcha"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you reset a child component state completely when a parent selection changes, and why is using the key prop better than useEffect?",
    "answer": "Attach key={selectedId} to the child component. React treats key changes as a completely new element, unmounting the old instance and mounting a fresh instance in a single synchronous render pass, avoiding the extra render cycle and stale UI flash of useEffect.",
    "explanation": "Resetting state inside useEffect causes an initial render with stale state, followed by an effect run, followed by a second render pass. Changing key does it in one render.",
    "interviewAnswer": "Attach key={selectedId} to the child component. React treats key changes as a completely new element, unmounting the old instance and mounting a fresh instance in a single synchronous render pass, avoiding the extra render cycle and stale UI flash of useEffect. Resetting state inside useEffect causes an initial render with stale state, followed by an effect run, followed by a second render pass. Changing key does it in one render.",
    "importantPoints": [
      "Attach key={selectedId} to the child component. React treats key changes as a completely new element, unmounting the old instance and mounting a fresh instance in a single synchronous render pass, avoiding the extra render cycle and stale UI flash of useEffect.",
      "Resetting state inside useEffect causes an initial render with stale state, followed by an effect run, followed by a second render pass. Changing key does it in one render."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "keys",
      "reset-state",
      "performance"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What is the \"slots\" pattern in React, and how is it implemented using component props instead of inheritance?",
    "answer": "The slots pattern involves passing JSX elements or components as named props (e.g. <Card header={<Header />} sidebar={<Sidebar />} />) so the container can place them in specific layout areas without knowing their internal implementation.",
    "explanation": "This allows containers to control structural layout while callers control content, avoiding rigid inheritance hierarchies.",
    "interviewAnswer": "The slots pattern involves passing JSX elements or components as named props (e.g. <Card header={<Header />} sidebar={<Sidebar />} />) so the container can place them in specific layout areas without knowing their internal implementation. This allows containers to control structural layout while callers control content, avoiding rigid inheritance hierarchies.",
    "importantPoints": [
      "The slots pattern involves passing JSX elements or components as named props (e.g. <Card header={<Header />} sidebar={<Sidebar />} />) so the container can place them in specific layout areas without knowing their internal implementation.",
      "This allows containers to control structural layout while callers control content, avoiding rigid inheritance hierarchies."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "slots-pattern",
      "composition",
      "props"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How does React.Children.map differ from standard JavaScript Array.prototype.map when dealing with child elements?",
    "answer": "React.Children.map safely handles children whether they are an array, a single element object, null, or undefined. Standard Array.map crashes if children is a single element or null because it is not an array.",
    "explanation": "React.Children.map also flattens nested arrays and preserves key namespaces for child elements.",
    "interviewAnswer": "React.Children.map safely handles children whether they are an array, a single element object, null, or undefined. Standard Array.map crashes if children is a single element or null because it is not an array. React.Children.map also flattens nested arrays and preserves key namespaces for child elements.",
    "importantPoints": [
      "React.Children.map safely handles children whether they are an array, a single element object, null, or undefined. Standard Array.map crashes if children is a single element or null because it is not an array.",
      "React.Children.map also flattens nested arrays and preserves key namespaces for child elements."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "react-children",
      "children-prop",
      "api"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "Why does the React documentation recommend avoiding React.Children and React.cloneElement in modern React applications?",
    "answer": "React.Children and React.cloneElement create fragile, implicit couplings by inspecting and injecting props into children behind the scenes, which breaks easily when children are wrapped in fragments or custom components. Modern React favors explicit Context or render props.",
    "explanation": "If a parent clones children to inject an isActive prop, placing a wrapper <div> or custom <Tooltip> around the child intercepts the clone, breaking the prop injection.",
    "interviewAnswer": "React.Children and React.cloneElement create fragile, implicit couplings by inspecting and injecting props into children behind the scenes, which breaks easily when children are wrapped in fragments or custom components. Modern React favors explicit Context or render props. If a parent clones children to inject an isActive prop, placing a wrapper <div> or custom <Tooltip> around the child intercepts the clone, breaking the prop injection.",
    "importantPoints": [
      "React.Children and React.cloneElement create fragile, implicit couplings by inspecting and injecting props into children behind the scenes, which breaks easily when children are wrapped in fragments or custom components. Modern React favors explicit Context or render props.",
      "If a parent clones children to inject an isActive prop, placing a wrapper <div> or custom <Tooltip> around the child intercepts the clone, breaking the prop injection."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "react",
      "react-cloneelement",
      "react-children",
      "modern-react",
      "anti-patterns"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What is the purpose of React.forwardRef, and how does React 19 change ref forwarding on functional components?",
    "answer": "In React 18, functional components could not accept a ref prop directly, requiring React.forwardRef((props, ref) => ...) to forward refs to an underlying DOM node. In React 19, ref is treated as a regular prop on function components, deprecating the need for forwardRef.",
    "explanation": "React 19 compiler and reconciler pass ref directly in the props object, streamlining component signatures.",
    "interviewAnswer": "In React 18, functional components could not accept a ref prop directly, requiring React.forwardRef((props, ref) => ...) to forward refs to an underlying DOM node. In React 19, ref is treated as a regular prop on function components, deprecating the need for forwardRef. React 19 compiler and reconciler pass ref directly in the props object, streamlining component signatures.",
    "importantPoints": [
      "In React 18, functional components could not accept a ref prop directly, requiring React.forwardRef((props, ref) => ...) to forward refs to an underlying DOM node. In React 19, ref is treated as a regular prop on function components, deprecating the need for forwardRef.",
      "React 19 compiler and reconciler pass ref directly in the props object, streamlining component signatures."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "forwardref",
      "react19",
      "refs"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How does the useImperativeHandle hook work, and when should you use it to customize the ref exposed by a component?",
    "answer": "useImperativeHandle customizes the instance value exposed to parent components when using ref. Instead of exposing the raw DOM element, it exposes a restricted, intentional API (e.g. { focus, reset, scrollIntoView }).",
    "explanation": "Used to avoid leaking complete native DOM nodes to parents, keeping DOM access encapsulated and controlled.",
    "interviewAnswer": "useImperativeHandle customizes the instance value exposed to parent components when using ref. Instead of exposing the raw DOM element, it exposes a restricted, intentional API (e.g. { focus, reset, scrollIntoView }). Used to avoid leaking complete native DOM nodes to parents, keeping DOM access encapsulated and controlled.",
    "importantPoints": [
      "useImperativeHandle customizes the instance value exposed to parent components when using ref. Instead of exposing the raw DOM element, it exposes a restricted, intentional API (e.g. { focus, reset, scrollIntoView }).",
      "Used to avoid leaking complete native DOM nodes to parents, keeping DOM access encapsulated and controlled."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "react",
      "useimperativehandle",
      "refs",
      "encapsulation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What is a recursive component in React, and what guard condition is essential to prevent browser stack overflow?",
    "answer": "A recursive component is a component that renders itself to display hierarchical nested data structures (like folder trees, nested comments, or navigation menus). It requires a base termination condition (e.g. if (!node.children || node.children.length === 0) return null;) to prevent infinite rendering.",
    "explanation": "Without a base condition, the component renders infinitely until the JavaScript call stack or memory limit is exceeded.",
    "interviewAnswer": "A recursive component is a component that renders itself to display hierarchical nested data structures (like folder trees, nested comments, or navigation menus). It requires a base termination condition (e.g. if (!node.children || node.children.length === 0) return null;) to prevent infinite rendering. Without a base condition, the component renders infinitely until the JavaScript call stack or memory limit is exceeded.",
    "importantPoints": [
      "A recursive component is a component that renders itself to display hierarchical nested data structures (like folder trees, nested comments, or navigation menus). It requires a base termination condition (e.g. if (!node.children || node.children.length === 0) return null;) to prevent infinite rendering.",
      "Without a base condition, the component renders infinitely until the JavaScript call stack or memory limit is exceeded."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "recursive-components",
      "tree-view",
      "data-structures"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you design an accessible Accordion component that supports both \"single-expand\" and \"multi-expand\" modes?",
    "answer": "Store open items as an array or Set in state. If multi-expand is enabled, clicking an item toggles its presence in the set; if single-expand is enabled, clicking sets the open item exclusively or clears it if already active.",
    "explanation": "Use ARIA attributes: aria-expanded on trigger buttons, aria-controls pointing to the panel ID, and role=\"region\" on content panels.",
    "interviewAnswer": "Store open items as an array or Set in state. If multi-expand is enabled, clicking an item toggles its presence in the set; if single-expand is enabled, clicking sets the open item exclusively or clears it if already active. Use ARIA attributes: aria-expanded on trigger buttons, aria-controls pointing to the panel ID, and role=\"region\" on content panels.",
    "importantPoints": [
      "Store open items as an array or Set in state. If multi-expand is enabled, clicking an item toggles its presence in the set; if single-expand is enabled, clicking sets the open item exclusively or clears it if already active.",
      "Use ARIA attributes: aria-expanded on trigger buttons, aria-controls pointing to the panel ID, and role=\"region\" on content panels."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "accordion",
      "accessibility",
      "components"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What is the Headless Component pattern in React, and why is it increasingly popular for design systems?",
    "answer": "The Headless pattern separates state, keyboard interactions, and accessibility logic from UI markup and styling. The component provides logic via hooks or render props, while the consumer writes custom CSS and HTML.",
    "explanation": "Libraries like TanStack Table, Downshift, and Radix UI use this pattern to provide unstyled, fully accessible functionality that fits any brand design.",
    "interviewAnswer": "The Headless pattern separates state, keyboard interactions, and accessibility logic from UI markup and styling. The component provides logic via hooks or render props, while the consumer writes custom CSS and HTML. Libraries like TanStack Table, Downshift, and Radix UI use this pattern to provide unstyled, fully accessible functionality that fits any brand design.",
    "importantPoints": [
      "The Headless pattern separates state, keyboard interactions, and accessibility logic from UI markup and styling. The component provides logic via hooks or render props, while the consumer writes custom CSS and HTML.",
      "Libraries like TanStack Table, Downshift, and Radix UI use this pattern to provide unstyled, fully accessible functionality that fits any brand design."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "headless-ui",
      "design-systems",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What is the purpose of the displayName property on React components, and when is it necessary to declare it explicitly?",
    "answer": "displayName assigns a readable name to a component in React DevTools and error stack traces. It is necessary when using forwardRef, React.memo, or HOCs, which wrap components in anonymous functions that would otherwise display as \"Anonymous\" or \"ForwardRef\" in DevTools.",
    "explanation": "Babel automatically infers displayName from named function declarations, but wrapped higher-order components require explicit assignment.",
    "interviewAnswer": "displayName assigns a readable name to a component in React DevTools and error stack traces. It is necessary when using forwardRef, React.memo, or HOCs, which wrap components in anonymous functions that would otherwise display as \"Anonymous\" or \"ForwardRef\" in DevTools. Babel automatically infers displayName from named function declarations, but wrapped higher-order components require explicit assignment.",
    "importantPoints": [
      "displayName assigns a readable name to a component in React DevTools and error stack traces. It is necessary when using forwardRef, React.memo, or HOCs, which wrap components in anonymous functions that would otherwise display as \"Anonymous\" or \"ForwardRef\" in DevTools.",
      "Babel automatically infers displayName from named function declarations, but wrapped higher-order components require explicit assignment."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "displayname",
      "debugging",
      "devtools"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "Predict the output when rendering a component that defines an internal component function inside its own render body:",
    "answer": "Every time the parent component re-renders, the internal component is redefined as a brand new function reference. React reconciler sees a new component type on every render, completely unmounting and remounting the child, destroying all its internal state and input focus.",
    "explanation": "Defining components inside components is a severe anti-pattern. React treats different function references as different element types, tearing down the DOM tree on every render.",
    "interviewAnswer": "Every time the parent component re-renders, the internal component is redefined as a brand new function reference. React reconciler sees a new component type on every render, completely unmounting and remounting the child, destroying all its internal state and input focus. Defining components inside components is a severe anti-pattern. React treats different function references as different element types, tearing down the DOM tree on every render.",
    "importantPoints": [
      "Every time the parent component re-renders, the internal component is redefined as a brand new function reference. React reconciler sees a new component type on every render, completely unmounting and remounting the child, destroying all its internal state and input focus.",
      "Defining components inside components is a severe anti-pattern. React treats different function references as different element types, tearing down the DOM tree on every render."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "react",
      "nested-components",
      "anti-patterns",
      "bugs",
      "reconciliation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you pass HTML data-* and aria-* attributes through a custom React component without listing every possible attribute in props?",
    "answer": "Use prop destructuring with rest parameters: function MyInput({ label, error, ...restProps }). Spread {...restProps} onto the underlying HTML element, which forwards all data-*, aria-*, and standard HTML attributes cleanly.",
    "explanation": "Rest parameter spreading allows consumers to attach telemetry attributes (data-testid) and accessibility attributes without modifying the component interface.",
    "interviewAnswer": "Use prop destructuring with rest parameters: function MyInput({ label, error, ...restProps }). Spread {...restProps} onto the underlying HTML element, which forwards all data-*, aria-*, and standard HTML attributes cleanly. Rest parameter spreading allows consumers to attach telemetry attributes (data-testid) and accessibility attributes without modifying the component interface.",
    "importantPoints": [
      "Use prop destructuring with rest parameters: function MyInput({ label, error, ...restProps }). Spread {...restProps} onto the underlying HTML element, which forwards all data-*, aria-*, and standard HTML attributes cleanly.",
      "Rest parameter spreading allows consumers to attach telemetry attributes (data-testid) and accessibility attributes without modifying the component interface."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "props",
      "rest-spread",
      "accessibility"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What are the trade-offs between CSS Modules, Styled Components (CSS-in-JS), and Tailwind CSS in React applications?",
    "answer": "CSS Modules provide zero-runtime scoped CSS with standard syntax. Styled Components offer dynamic prop-based styling but introduce runtime JavaScript overhead and hydration costs in SSR. Tailwind CSS eliminates runtime overhead via utility classes and purges unused styles for tiny production bundles.",
    "explanation": "In modern SSR frameworks (Next.js App Router), zero-runtime CSS (Tailwind, CSS Modules, Vanilla Extract) is preferred over runtime CSS-in-JS due to streaming and Server Component constraints.",
    "interviewAnswer": "CSS Modules provide zero-runtime scoped CSS with standard syntax. Styled Components offer dynamic prop-based styling but introduce runtime JavaScript overhead and hydration costs in SSR. Tailwind CSS eliminates runtime overhead via utility classes and purges unused styles for tiny production bundles. In modern SSR frameworks (Next.js App Router), zero-runtime CSS (Tailwind, CSS Modules, Vanilla Extract) is preferred over runtime CSS-in-JS due to streaming and Server Component constraints.",
    "importantPoints": [
      "CSS Modules provide zero-runtime scoped CSS with standard syntax. Styled Components offer dynamic prop-based styling but introduce runtime JavaScript overhead and hydration costs in SSR. Tailwind CSS eliminates runtime overhead via utility classes and purges unused styles for tiny production bundles.",
      "In modern SSR frameworks (Next.js App Router), zero-runtime CSS (Tailwind, CSS Modules, Vanilla Extract) is preferred over runtime CSS-in-JS due to streaming and Server Component constraints."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "styling",
      "css-modules",
      "tailwind",
      "styled-components"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "Why can you not use HTML class attribute in JSX, and why did React adopt className instead?",
    "answer": "JSX compiles down to standard JavaScript. In JavaScript, \"class\" is a reserved keyword for ES6 classes. To prevent lexical parsing ambiguities in older JS engines and align with the DOM API property (element.className), React adopted className.",
    "explanation": "Similarly, htmlFor is used instead of the \"for\" attribute on <label> elements because \"for\" is a reserved JavaScript keyword for loops.",
    "interviewAnswer": "JSX compiles down to standard JavaScript. In JavaScript, \"class\" is a reserved keyword for ES6 classes. To prevent lexical parsing ambiguities in older JS engines and align with the DOM API property (element.className), React adopted className. Similarly, htmlFor is used instead of the \"for\" attribute on <label> elements because \"for\" is a reserved JavaScript keyword for loops.",
    "importantPoints": [
      "JSX compiles down to standard JavaScript. In JavaScript, \"class\" is a reserved keyword for ES6 classes. To prevent lexical parsing ambiguities in older JS engines and align with the DOM API property (element.className), React adopted className.",
      "Similarly, htmlFor is used instead of the \"for\" attribute on <label> elements because \"for\" is a reserved JavaScript keyword for loops."
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
      "classname",
      "html-differences"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do comments work in JSX, and what happens if you place a standard JavaScript comment (// comment) directly between JSX tags?",
    "answer": "Comments between JSX tags must be wrapped in curly braces using JavaScript block comment syntax: {/* comment */}. Placing // comment directly between tags causes React to render the literal text \"// comment\" as a text node in the browser DOM.",
    "explanation": "Anything inside JSX children is parsed as raw text unless escaped into a JavaScript expression with curly braces.",
    "interviewAnswer": "Comments between JSX tags must be wrapped in curly braces using JavaScript block comment syntax: {/* comment */}. Placing // comment directly between tags causes React to render the literal text \"// comment\" as a text node in the browser DOM. Anything inside JSX children is parsed as raw text unless escaped into a JavaScript expression with curly braces.",
    "importantPoints": [
      "Comments between JSX tags must be wrapped in curly braces using JavaScript block comment syntax: {/* comment */}. Placing // comment directly between tags causes React to render the literal text \"// comment\" as a text node in the browser DOM.",
      "Anything inside JSX children is parsed as raw text unless escaped into a JavaScript expression with curly braces."
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
      "comments",
      "syntax"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you render raw SVG icons in React components, and what are the performance trade-offs of importing SVGs as React components vs using SVG sprite sheets?",
    "answer": "Importing SVGs directly as React components (e.g. SVGR) creates independent React elements with dynamic prop styling (fill, stroke), but increases JavaScript bundle size because SVG paths become JS code. SVG sprite sheets (<use href=\"#icon\" />) keep SVGs in static asset caches with zero bundle size overhead.",
    "explanation": "In applications with hundreds of icons, converting all SVGs into React components can add megabytes to the JavaScript bundle. SVG sprites or icon fonts are more memory efficient.",
    "interviewAnswer": "Importing SVGs directly as React components (e.g. SVGR) creates independent React elements with dynamic prop styling (fill, stroke), but increases JavaScript bundle size because SVG paths become JS code. SVG sprite sheets (<use href=\"#icon\" />) keep SVGs in static asset caches with zero bundle size overhead. In applications with hundreds of icons, converting all SVGs into React components can add megabytes to the JavaScript bundle. SVG sprites or icon fonts are more memory efficient.",
    "importantPoints": [
      "Importing SVGs directly as React components (e.g. SVGR) creates independent React elements with dynamic prop styling (fill, stroke), but increases JavaScript bundle size because SVG paths become JS code. SVG sprite sheets (<use href=\"#icon\" />) keep SVGs in static asset caches with zero bundle size overhead.",
      "In applications with hundreds of icons, converting all SVGs into React components can add megabytes to the JavaScript bundle. SVG sprites or icon fonts are more memory efficient."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "svg",
      "bundle-size",
      "performance",
      "icons"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What is the Container / Presentational component pattern, and how did React Hooks alter its necessity?",
    "answer": "The Container/Presentational pattern split components into smart \"containers\" (managing data fetching, state, and side effects) and dumb \"presentational\" components (rendering pure UI via props). Hooks made this pattern less rigid because custom hooks encapsulate state and fetching logic cleanly without requiring dedicated container component wrappers.",
    "explanation": "Dan Abramov noted that while separation of concerns remains important, custom hooks allow components to be both presentational and connected to state logic without deep component nesting.",
    "interviewAnswer": "The Container/Presentational pattern split components into smart \"containers\" (managing data fetching, state, and side effects) and dumb \"presentational\" components (rendering pure UI via props). Hooks made this pattern less rigid because custom hooks encapsulate state and fetching logic cleanly without requiring dedicated container component wrappers. Dan Abramov noted that while separation of concerns remains important, custom hooks allow components to be both presentational and connected to state logic without deep component nesting.",
    "importantPoints": [
      "The Container/Presentational pattern split components into smart \"containers\" (managing data fetching, state, and side effects) and dumb \"presentational\" components (rendering pure UI via props). Hooks made this pattern less rigid because custom hooks encapsulate state and fetching logic cleanly without requiring dedicated container component wrappers.",
      "Dan Abramov noted that while separation of concerns remains important, custom hooks allow components to be both presentational and connected to state logic without deep component nesting."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "container-presentational",
      "design-patterns",
      "hooks"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How does React determine component identity when conditionally rendering components at the exact same position in the tree?",
    "answer": "React compares the element type at that tree position across renders. If the component type is identical (e.g. isEdit ? <Form user={u} /> : <Form user={defaultUser} />), React preserves the component instance and DOM node, updating only props. If the type differs (e.g. isEdit ? <EditForm /> : <ViewForm />), React destroys the old tree and mounts a new one.",
    "explanation": "To force React to destroy and remount even when the component type is the same, provide distinct keys: <Form key={isEdit ? \"edit\" : \"view\"} />.",
    "interviewAnswer": "React compares the element type at that tree position across renders. If the component type is identical (e.g. isEdit ? <Form user={u} /> : <Form user={defaultUser} />), React preserves the component instance and DOM node, updating only props. If the type differs (e.g. isEdit ? <EditForm /> : <ViewForm />), React destroys the old tree and mounts a new one. To force React to destroy and remount even when the component type is the same, provide distinct keys: <Form key={isEdit ? \"edit\" : \"view\"} />.",
    "importantPoints": [
      "React compares the element type at that tree position across renders. If the component type is identical (e.g. isEdit ? <Form user={u} /> : <Form user={defaultUser} />), React preserves the component instance and DOM node, updating only props. If the type differs (e.g. isEdit ? <EditForm /> : <ViewForm />), React destroys the old tree and mounts a new one.",
      "To force React to destroy and remount even when the component type is the same, provide distinct keys: <Form key={isEdit ? \"edit\" : \"view\"} />."
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
      "component-identity",
      "keys"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "A navigation sidebar re-renders on every page route change. How would you architect the Layout component so the Sidebar state and DOM remain intact across page navigations?",
    "answer": "Use a persistent root Layout component in your router that houses the Sidebar and Header, while rendering dynamic route pages inside an <Outlet /> or children prop. Because the Layout component stays mounted across route changes, the Sidebar state, scroll position, and DOM nodes never unmount.",
    "explanation": "In React Router or Next.js layout architectures, layouts wrap pages. Navigating between child routes only mounts and unmounts the page content inside the outlet, keeping layout components mounted.",
    "interviewAnswer": "Use a persistent root Layout component in your router that houses the Sidebar and Header, while rendering dynamic route pages inside an <Outlet /> or children prop. Because the Layout component stays mounted across route changes, the Sidebar state, scroll position, and DOM nodes never unmount. In React Router or Next.js layout architectures, layouts wrap pages. Navigating between child routes only mounts and unmounts the page content inside the outlet, keeping layout components mounted.",
    "importantPoints": [
      "Use a persistent root Layout component in your router that houses the Sidebar and Header, while rendering dynamic route pages inside an <Outlet /> or children prop. Because the Layout component stays mounted across route changes, the Sidebar state, scroll position, and DOM nodes never unmount.",
      "In React Router or Next.js layout architectures, layouts wrap pages. Navigating between child routes only mounts and unmounts the page content inside the outlet, keeping layout components mounted."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "routing",
      "layout",
      "state-preservation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you implement a Toast/Notification manager component that allows any component in the tree to trigger toast messages imperatively or declaratively?",
    "answer": "Create a ToastContext with a state array of active toasts and an API { addToast, removeToast }. Wrap the app in ToastProvider which renders a fixed-position container portal displaying the toasts, while child components call useToast().addToast({ title, type }).",
    "explanation": "Context provides the dispatch channel; Portals render the toasts at document.body level so parent CSS clipping or z-index rules do not affect toast visibility.",
    "interviewAnswer": "Create a ToastContext with a state array of active toasts and an API { addToast, removeToast }. Wrap the app in ToastProvider which renders a fixed-position container portal displaying the toasts, while child components call useToast().addToast({ title, type }). Context provides the dispatch channel; Portals render the toasts at document.body level so parent CSS clipping or z-index rules do not affect toast visibility.",
    "importantPoints": [
      "Create a ToastContext with a state array of active toasts and an API { addToast, removeToast }. Wrap the app in ToastProvider which renders a fixed-position container portal displaying the toasts, while child components call useToast().addToast({ title, type }).",
      "Context provides the dispatch channel; Portals render the toasts at document.body level so parent CSS clipping or z-index rules do not affect toast visibility."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "toast",
      "context",
      "portals",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What is a Polymorphic Ref in React with TypeScript, and how do you ensure the ref attribute is correctly typed when the \"as\" prop changes?",
    "answer": "A polymorphic ref must point to the specific DOM element specified by the \"as\" prop (e.g. HTMLAnchorElement when as=\"a\", HTMLButtonElement when as=\"button\"). In TypeScript, you use React.ComponentPropsWithRef<T>[\"ref\"] and type the ref parameter using generic T.",
    "explanation": "Without typing the polymorphic ref, TypeScript would allow assigning an anchor ref to a button element, causing runtime type errors when calling element-specific methods.",
    "interviewAnswer": "A polymorphic ref must point to the specific DOM element specified by the \"as\" prop (e.g. HTMLAnchorElement when as=\"a\", HTMLButtonElement when as=\"button\"). In TypeScript, you use React.ComponentPropsWithRef<T>[\"ref\"] and type the ref parameter using generic T. Without typing the polymorphic ref, TypeScript would allow assigning an anchor ref to a button element, causing runtime type errors when calling element-specific methods.",
    "importantPoints": [
      "A polymorphic ref must point to the specific DOM element specified by the \"as\" prop (e.g. HTMLAnchorElement when as=\"a\", HTMLButtonElement when as=\"button\"). In TypeScript, you use React.ComponentPropsWithRef<T>[\"ref\"] and type the ref parameter using generic T.",
      "Without typing the polymorphic ref, TypeScript would allow assigning an anchor ref to a button element, causing runtime type errors when calling element-specific methods."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "typescript",
      "polymorphic-components",
      "refs",
      "advanced"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "Why should you avoid using the index of an array as the key prop in a list of components that can be sorted, filtered, or reordered?",
    "answer": "Using indices as keys causes React to match components based on position rather than data identity. When items are sorted or filtered, existing component DOM nodes and internal local state (like input text or expanded toggles) will remain bound to the wrong data, corrupting the UI.",
    "explanation": "If item 0 is deleted, item 1 now becomes index 0. React assumes index 0 stayed in place and merely changed props, preserving any unmanaged DOM state from the deleted item.",
    "interviewAnswer": "Using indices as keys causes React to match components based on position rather than data identity. When items are sorted or filtered, existing component DOM nodes and internal local state (like input text or expanded toggles) will remain bound to the wrong data, corrupting the UI. If item 0 is deleted, item 1 now becomes index 0. React assumes index 0 stayed in place and merely changed props, preserving any unmanaged DOM state from the deleted item.",
    "importantPoints": [
      "Using indices as keys causes React to match components based on position rather than data identity. When items are sorted or filtered, existing component DOM nodes and internal local state (like input text or expanded toggles) will remain bound to the wrong data, corrupting the UI.",
      "If item 0 is deleted, item 1 now becomes index 0. React assumes index 0 stayed in place and merely changed props, preserving any unmanaged DOM state from the deleted item."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "keys",
      "lists",
      "anti-patterns"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you build an accessible Tooltip component that delays opening on hover and manages screen reader announcements?",
    "answer": "Use a hover timer with setTimeout (e.g. 200ms delay) to prevent accidental flashes when moving the mouse across elements. Attach onMouseEnter/onMouseLeave and onFocus/onBlur handlers. For accessibility, provide role=\"tooltip\", an id on the tooltip, and aria-describedby on the triggering element.",
    "explanation": "aria-describedby links the trigger to the tooltip text for screen readers. Managing timers in useEffect ensures timeouts are cleared when the trigger unmounts.",
    "interviewAnswer": "Use a hover timer with setTimeout (e.g. 200ms delay) to prevent accidental flashes when moving the mouse across elements. Attach onMouseEnter/onMouseLeave and onFocus/onBlur handlers. For accessibility, provide role=\"tooltip\", an id on the tooltip, and aria-describedby on the triggering element. aria-describedby links the trigger to the tooltip text for screen readers. Managing timers in useEffect ensures timeouts are cleared when the trigger unmounts.",
    "importantPoints": [
      "Use a hover timer with setTimeout (e.g. 200ms delay) to prevent accidental flashes when moving the mouse across elements. Attach onMouseEnter/onMouseLeave and onFocus/onBlur handlers. For accessibility, provide role=\"tooltip\", an id on the tooltip, and aria-describedby on the triggering element.",
      "aria-describedby links the trigger to the tooltip text for screen readers. Managing timers in useEffect ensures timeouts are cleared when the trigger unmounts."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "tooltip",
      "accessibility",
      "timers"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What is the difference between passing an element as a prop (icon={<Icon />}) versus passing a component reference (IconComponent={Icon})?",
    "answer": "Passing an element (icon={<Icon />}) creates the React element in the parent scope with the parent props and context, rendering it as-is. Passing a component reference (IconComponent={Icon}) gives the child component control over when to instantiate the element and allows the child to pass additional props down to it: <IconComponent size=\"small\" />.",
    "explanation": "Element props are simpler for static content; component reference props allow the receiver to inject dynamic props or control instantiation.",
    "interviewAnswer": "Passing an element (icon={<Icon />}) creates the React element in the parent scope with the parent props and context, rendering it as-is. Passing a component reference (IconComponent={Icon}) gives the child component control over when to instantiate the element and allows the child to pass additional props down to it: <IconComponent size=\"small\" />. Element props are simpler for static content; component reference props allow the receiver to inject dynamic props or control instantiation.",
    "importantPoints": [
      "Passing an element (icon={<Icon />}) creates the React element in the parent scope with the parent props and context, rendering it as-is. Passing a component reference (IconComponent={Icon}) gives the child component control over when to instantiate the element and allows the child to pass additional props down to it: <IconComponent size=\"small\" />.",
      "Element props are simpler for static content; component reference props allow the receiver to inject dynamic props or control instantiation."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "props",
      "element-vs-component",
      "composition"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you handle conditional styling in React components cleanly without messy string concatenation?",
    "answer": "Use utility libraries like clsx or classnames, or native template literals with boolean filtering (e.g. [styles.btn, isPrimary && styles.primary, disabled && styles.disabled].filter(Boolean).join(\" \")).",
    "explanation": "Libraries like clsx accept objects ({ [styles.active]: isActive }) and arrays, stripping out falsy values automatically.",
    "interviewAnswer": "Use utility libraries like clsx or classnames, or native template literals with boolean filtering (e.g. [styles.btn, isPrimary && styles.primary, disabled && styles.disabled].filter(Boolean).join(\" \")). Libraries like clsx accept objects ({ [styles.active]: isActive }) and arrays, stripping out falsy values automatically.",
    "importantPoints": [
      "Use utility libraries like clsx or classnames, or native template literals with boolean filtering (e.g. [styles.btn, isPrimary && styles.primary, disabled && styles.disabled].filter(Boolean).join(\" \")).",
      "Libraries like clsx accept objects ({ [styles.active]: isActive }) and arrays, stripping out falsy values automatically."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "styling",
      "clsx",
      "css-modules"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "Predict the bug when rendering a list of items using a Fragment without an explicit import of React.Fragment:",
    "answer": "Using shorthand syntax <>...</> cannot accept attributes (like key={item.id}). If a developer writes <key={item.id}>...</>, it is a syntax error. Sibling fragments in dynamic lists must use the explicit <React.Fragment key={item.id}> tag.",
    "explanation": "The empty <> tag does not support any attributes or keys. It is only valid for unkeyed grouping.",
    "interviewAnswer": "Using shorthand syntax <>...</> cannot accept attributes (like key={item.id}). If a developer writes <key={item.id}>...</>, it is a syntax error. Sibling fragments in dynamic lists must use the explicit <React.Fragment key={item.id}> tag. The empty <> tag does not support any attributes or keys. It is only valid for unkeyed grouping.",
    "importantPoints": [
      "Using shorthand syntax <>...</> cannot accept attributes (like key={item.id}). If a developer writes <key={item.id}>...</>, it is a syntax error. Sibling fragments in dynamic lists must use the explicit <React.Fragment key={item.id}> tag.",
      "The empty <> tag does not support any attributes or keys. It is only valid for unkeyed grouping."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "react",
      "fragments",
      "keys",
      "syntax"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How does React Error Boundary placement affect application fault tolerance and user experience?",
    "answer": "Placing a single top-level Error Boundary causes any component crash to unmount the entire application. Granular Error Boundaries wrapped around specific widgets (e.g. sidebar, widget cards, navigation) isolate failures so that a broken widget displays an inline error while the rest of the application remains interactive.",
    "explanation": "Granular boundaries allow critical sections (like checkout or navigation) to stay functional even if an analytics or recommendations component throws an error.",
    "interviewAnswer": "Placing a single top-level Error Boundary causes any component crash to unmount the entire application. Granular Error Boundaries wrapped around specific widgets (e.g. sidebar, widget cards, navigation) isolate failures so that a broken widget displays an inline error while the rest of the application remains interactive. Granular boundaries allow critical sections (like checkout or navigation) to stay functional even if an analytics or recommendations component throws an error.",
    "importantPoints": [
      "Placing a single top-level Error Boundary causes any component crash to unmount the entire application. Granular Error Boundaries wrapped around specific widgets (e.g. sidebar, widget cards, navigation) isolate failures so that a broken widget displays an inline error while the rest of the application remains interactive.",
      "Granular boundaries allow critical sections (like checkout or navigation) to stay functional even if an analytics or recommendations component throws an error."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "error-boundaries",
      "fault-tolerance",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you implement a Breadcrumbs component that derives its links automatically from the current URL path?",
    "answer": "Read the current pathname using the router (e.g. useLocation() or usePathname()). Split the path on \"/\" to get path segments, filter empty strings, and map each segment into a link with an accumulated href path, marking the final segment with aria-current=\"page\".",
    "explanation": "Accumulating path segments (/dashboard/settings/billing) creates breadcrumb trails dynamically with semantic <nav aria-label=\"Breadcrumb\"> HTML.",
    "interviewAnswer": "Read the current pathname using the router (e.g. useLocation() or usePathname()). Split the path on \"/\" to get path segments, filter empty strings, and map each segment into a link with an accumulated href path, marking the final segment with aria-current=\"page\". Accumulating path segments (/dashboard/settings/billing) creates breadcrumb trails dynamically with semantic <nav aria-label=\"Breadcrumb\"> HTML.",
    "importantPoints": [
      "Read the current pathname using the router (e.g. useLocation() or usePathname()). Split the path on \"/\" to get path segments, filter empty strings, and map each segment into a link with an accumulated href path, marking the final segment with aria-current=\"page\".",
      "Accumulating path segments (/dashboard/settings/billing) creates breadcrumb trails dynamically with semantic <nav aria-label=\"Breadcrumb\"> HTML."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "breadcrumbs",
      "routing",
      "components"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What is the difference between React Server Components (RSC) and standard Client Components in terms of component imports?",
    "answer": "Server Components can import Client Components directly. However, Client Components cannot directly import Server Components (because client bundles cannot execute server-only code). To render a Server Component inside a Client Component, the Server Component must be passed as children or as a prop from a parent Server Component.",
    "explanation": "This allows the server to evaluate the Server Component, and pass its serialized rendered output to the Client Component children slot.",
    "interviewAnswer": "Server Components can import Client Components directly. However, Client Components cannot directly import Server Components (because client bundles cannot execute server-only code). To render a Server Component inside a Client Component, the Server Component must be passed as children or as a prop from a parent Server Component. This allows the server to evaluate the Server Component, and pass its serialized rendered output to the Client Component children slot.",
    "importantPoints": [
      "Server Components can import Client Components directly. However, Client Components cannot directly import Server Components (because client bundles cannot execute server-only code). To render a Server Component inside a Client Component, the Server Component must be passed as children or as a prop from a parent Server Component.",
      "This allows the server to evaluate the Server Component, and pass its serialized rendered output to the Client Component children slot."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "rsc",
      "nextjs",
      "component-boundaries"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you build a responsive Tabs component with keyboard navigation conforming to W3C ARIA Tab pattern?",
    "answer": "The tablist container has role=\"tablist\". Each tab button has role=\"tab\", aria-selected, and aria-controls pointing to its tabpanel. Arrow Left/Right keys navigate focus between tabs, and the active tabpanel has role=\"tabpanel\" and aria-labelledby.",
    "explanation": "W3C pattern requires Tab key to enter the tablist and move into the panel, while Arrow keys navigate between sibling tabs within the list.",
    "interviewAnswer": "The tablist container has role=\"tablist\". Each tab button has role=\"tab\", aria-selected, and aria-controls pointing to its tabpanel. Arrow Left/Right keys navigate focus between tabs, and the active tabpanel has role=\"tabpanel\" and aria-labelledby. W3C pattern requires Tab key to enter the tablist and move into the panel, while Arrow keys navigate between sibling tabs within the list.",
    "importantPoints": [
      "The tablist container has role=\"tablist\". Each tab button has role=\"tab\", aria-selected, and aria-controls pointing to its tabpanel. Arrow Left/Right keys navigate focus between tabs, and the active tabpanel has role=\"tabpanel\" and aria-labelledby.",
      "W3C pattern requires Tab key to enter the tablist and move into the panel, while Arrow keys navigate between sibling tabs within the list."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "tabs",
      "accessibility",
      "w3c-aria",
      "keyboard-navigation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "Why does defining defaultProps on functional components trigger a deprecation warning in React 18.3+, and what is the recommended alternative?",
    "answer": "defaultProps on functional components was deprecated because modern JavaScript already has native ES6 default parameter syntax ({ variant = \"primary\" }), making defaultProps redundant, adding extra overhead to React runtime, and complicating TypeScript type inference.",
    "explanation": "The official alternative is simply using ES6 default parameter values in the component function signature.",
    "interviewAnswer": "defaultProps on functional components was deprecated because modern JavaScript already has native ES6 default parameter syntax ({ variant = \"primary\" }), making defaultProps redundant, adding extra overhead to React runtime, and complicating TypeScript type inference. The official alternative is simply using ES6 default parameter values in the component function signature.",
    "importantPoints": [
      "defaultProps on functional components was deprecated because modern JavaScript already has native ES6 default parameter syntax ({ variant = \"primary\" }), making defaultProps redundant, adding extra overhead to React runtime, and complicating TypeScript type inference.",
      "The official alternative is simply using ES6 default parameter values in the component function signature."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "defaultprops",
      "deprecation",
      "modern-react"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you prevent prop drilling across 4 intermediate layout components without using global state or Context?",
    "answer": "Use component composition: create the state in the top ancestor, instantiate the leaf component right there with its required props, and pass that component down as children or a named slot through the intermediate layout components.",
    "explanation": "Intermediate components act as pure layout shells ({children}), requiring zero knowledge of the child props or state.",
    "interviewAnswer": "Use component composition: create the state in the top ancestor, instantiate the leaf component right there with its required props, and pass that component down as children or a named slot through the intermediate layout components. Intermediate components act as pure layout shells ({children}), requiring zero knowledge of the child props or state.",
    "importantPoints": [
      "Use component composition: create the state in the top ancestor, instantiate the leaf component right there with its required props, and pass that component down as children or a named slot through the intermediate layout components.",
      "Intermediate components act as pure layout shells ({children}), requiring zero knowledge of the child props or state."
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
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What causes the \"Cannot update a component while rendering a different component\" warning in React, and how do you resolve it?",
    "answer": "This occurs when component A calls a state setter of component B (or dispatches a context update) directly during component A render pass. React forbids updating another component while rendering because it creates non-deterministic re-render cascades. Resolve it by moving the state update into a useEffect hook or an event handler.",
    "explanation": "Rendering must be pure calculation. Mutating other component state belongs strictly inside side-effect lifecycles or user interaction handlers.",
    "interviewAnswer": "This occurs when component A calls a state setter of component B (or dispatches a context update) directly during component A render pass. React forbids updating another component while rendering because it creates non-deterministic re-render cascades. Resolve it by moving the state update into a useEffect hook or an event handler. Rendering must be pure calculation. Mutating other component state belongs strictly inside side-effect lifecycles or user interaction handlers.",
    "importantPoints": [
      "This occurs when component A calls a state setter of component B (or dispatches a context update) directly during component A render pass. React forbids updating another component while rendering because it creates non-deterministic re-render cascades. Resolve it by moving the state update into a useEffect hook or an event handler.",
      "Rendering must be pure calculation. Mutating other component state belongs strictly inside side-effect lifecycles or user interaction handlers."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "warnings",
      "re-rendering",
      "pure-functions",
      "debugging"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you design a reusable Modal component that traps focus and closes on pressing the Escape key?",
    "answer": "Render the modal using ReactDOM.createPortal into document.body. In a useEffect, attach a keydown listener to window for event.key === \"Escape\" that triggers onClose. Trap focus using an effect that focuses the first interactive element and cycles Tab navigation within the modal.",
    "explanation": "Cleaning up the keydown listener and restoring focus to the original button that opened the modal on unmount ensures accessible UX.",
    "interviewAnswer": "Render the modal using ReactDOM.createPortal into document.body. In a useEffect, attach a keydown listener to window for event.key === \"Escape\" that triggers onClose. Trap focus using an effect that focuses the first interactive element and cycles Tab navigation within the modal. Cleaning up the keydown listener and restoring focus to the original button that opened the modal on unmount ensures accessible UX.",
    "importantPoints": [
      "Render the modal using ReactDOM.createPortal into document.body. In a useEffect, attach a keydown listener to window for event.key === \"Escape\" that triggers onClose. Trap focus using an effect that focuses the first interactive element and cycles Tab navigation within the modal.",
      "Cleaning up the keydown listener and restoring focus to the original button that opened the modal on unmount ensures accessible UX."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "modal",
      "focus-trap",
      "accessibility",
      "portals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "Predict the output when mapping an array of strings in JSX with curly braces omitted around the callback return statement:",
    "answer": "If a developer writes items.map(item => { <li>{item}</li> }), the arrow function body uses curly braces without an explicit return statement, returning undefined for every element. React renders nothing.",
    "explanation": "Arrow functions with curly braces require an explicit return statement: items.map(item => <li>{item}</li>) (implicit return with parentheses) or items.map(item => { return <li>{item}</li>; }).",
    "interviewAnswer": "If a developer writes items.map(item => { <li>{item}</li> }), the arrow function body uses curly braces without an explicit return statement, returning undefined for every element. React renders nothing. Arrow functions with curly braces require an explicit return statement: items.map(item => <li>{item}</li>) (implicit return with parentheses) or items.map(item => { return <li>{item}</li>; }).",
    "importantPoints": [
      "If a developer writes items.map(item => { <li>{item}</li> }), the arrow function body uses curly braces without an explicit return statement, returning undefined for every element. React renders nothing.",
      "Arrow functions with curly braces require an explicit return statement: items.map(item => <li>{item}</li>) (implicit return with parentheses) or items.map(item => { return <li>{item}</li>; })."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "react",
      "jsx",
      "arrow-functions",
      "gotcha"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you implement an Infinite Scrolling List component that loads more items as the user reaches the bottom of the page?",
    "answer": "Attach an IntersectionObserver to a sentinel <div> element placed at the bottom of the list. When the sentinel intersects the viewport and !isLoading, trigger the fetchNextPage callback.",
    "explanation": "IntersectionObserver runs asynchronously on the browser compositor thread, which is vastly superior to listening to window scroll events with high-overhead getBoundingClientRect calls.",
    "interviewAnswer": "Attach an IntersectionObserver to a sentinel <div> element placed at the bottom of the list. When the sentinel intersects the viewport and !isLoading, trigger the fetchNextPage callback. IntersectionObserver runs asynchronously on the browser compositor thread, which is vastly superior to listening to window scroll events with high-overhead getBoundingClientRect calls.",
    "importantPoints": [
      "Attach an IntersectionObserver to a sentinel <div> element placed at the bottom of the list. When the sentinel intersects the viewport and !isLoading, trigger the fetchNextPage callback.",
      "IntersectionObserver runs asynchronously on the browser compositor thread, which is vastly superior to listening to window scroll events with high-overhead getBoundingClientRect calls."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "react",
      "infinite-scroll",
      "intersection-observer",
      "performance"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What is the purpose of the \"use client\" directive in modern React (Next.js App Router / React 19), and where in the component file must it be declared?",
    "answer": "\"use client\" marks a file boundary where Server Components transition to Client Components. It must be declared at the very top of the file before any imports. It informs the bundler to include the component and its imported dependencies in the client JavaScript bundle.",
    "explanation": "Components without \"use client\" in the App Router default to Server Components, which cannot use hooks (useState/useEffect) or event handlers.",
    "interviewAnswer": "\"use client\" marks a file boundary where Server Components transition to Client Components. It must be declared at the very top of the file before any imports. It informs the bundler to include the component and its imported dependencies in the client JavaScript bundle. Components without \"use client\" in the App Router default to Server Components, which cannot use hooks (useState/useEffect) or event handlers.",
    "importantPoints": [
      "\"use client\" marks a file boundary where Server Components transition to Client Components. It must be declared at the very top of the file before any imports. It informs the bundler to include the component and its imported dependencies in the client JavaScript bundle.",
      "Components without \"use client\" in the App Router default to Server Components, which cannot use hooks (useState/useEffect) or event handlers."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "use-client",
      "rsc",
      "nextjs",
      "react19"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "Why is it considered best practice to place \"use client\" as deep down the component tree (at the leaves) as possible?",
    "answer": "Placing \"use client\" high up the tree converts that component and ALL of its imported child components into client-side code, drastically bloating the JavaScript bundle sent to the browser. Placing \"use client\" at leaf components keeps parent layouts and data-heavy wrappers as Server Components with zero bundle overhead.",
    "explanation": "By pushing interactivity down to leaf buttons or search inputs, the bulk of page HTML remains static and fast to stream from the server.",
    "interviewAnswer": "Placing \"use client\" high up the tree converts that component and ALL of its imported child components into client-side code, drastically bloating the JavaScript bundle sent to the browser. Placing \"use client\" at leaf components keeps parent layouts and data-heavy wrappers as Server Components with zero bundle overhead. By pushing interactivity down to leaf buttons or search inputs, the bulk of page HTML remains static and fast to stream from the server.",
    "importantPoints": [
      "Placing \"use client\" high up the tree converts that component and ALL of its imported child components into client-side code, drastically bloating the JavaScript bundle sent to the browser. Placing \"use client\" at leaf components keeps parent layouts and data-heavy wrappers as Server Components with zero bundle overhead.",
      "By pushing interactivity down to leaf buttons or search inputs, the bulk of page HTML remains static and fast to stream from the server."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "use-client",
      "bundle-size",
      "rsc",
      "best-practices"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you build a Carousel / Image Slider component in React that supports touch swipe gestures and keyboard navigation?",
    "answer": "Maintain an activeIndex state. On mobile touch, record touchStart X and calculate touchEnd X delta to detect left/right swipes. On desktop, attach keydown listeners for ArrowLeft/ArrowRight. Wrap slide elements in a flex container with CSS transform: translateX(-${activeIndex * 100}%) and transition: transform 300ms ease.",
    "explanation": "CSS transforms execute on the GPU compositor, ensuring smooth 60fps animations without causing browser layout reflows.",
    "interviewAnswer": "Maintain an activeIndex state. On mobile touch, record touchStart X and calculate touchEnd X delta to detect left/right swipes. On desktop, attach keydown listeners for ArrowLeft/ArrowRight. Wrap slide elements in a flex container with CSS transform: translateX(-${activeIndex * 100}%) and transition: transform 300ms ease. CSS transforms execute on the GPU compositor, ensuring smooth 60fps animations without causing browser layout reflows.",
    "importantPoints": [
      "Maintain an activeIndex state. On mobile touch, record touchStart X and calculate touchEnd X delta to detect left/right swipes. On desktop, attach keydown listeners for ArrowLeft/ArrowRight. Wrap slide elements in a flex container with CSS transform: translateX(-${activeIndex * 100}%) and transition: transform 300ms ease.",
      "CSS transforms execute on the GPU compositor, ensuring smooth 60fps animations without causing browser layout reflows."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "carousel",
      "touch-events",
      "animations"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What is Defensive Component Programming in React, and how do you protect components against undefined or null data props?",
    "answer": "Defensive programming ensures components gracefully handle missing or malformed data by providing default parameter values (items = []), using optional chaining (user?.profile?.avatar), nullish coalescing (count ?? 0), and explicit empty/loading state guards.",
    "explanation": "Without defensive guards, attempting to call items.map() when an API returns { items: null } causes an unhandled TypeError that crashes the entire React subtree.",
    "interviewAnswer": "Defensive programming ensures components gracefully handle missing or malformed data by providing default parameter values (items = []), using optional chaining (user?.profile?.avatar), nullish coalescing (count ?? 0), and explicit empty/loading state guards. Without defensive guards, attempting to call items.map() when an API returns { items: null } causes an unhandled TypeError that crashes the entire React subtree.",
    "importantPoints": [
      "Defensive programming ensures components gracefully handle missing or malformed data by providing default parameter values (items = []), using optional chaining (user?.profile?.avatar), nullish coalescing (count ?? 0), and explicit empty/loading state guards.",
      "Without defensive guards, attempting to call items.map() when an API returns { items: null } causes an unhandled TypeError that crashes the entire React subtree."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "defensive-programming",
      "error-prevention",
      "best-practices"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you create a Badge or Tag component in TypeScript with mutually exclusive color variants and size options?",
    "answer": "Define TypeScript union types for variant (\"success\" | \"warning\" | \"error\" | \"info\") and size (\"sm\" | \"md\" | \"lg\"). Map these unions to scoped CSS module classes or style maps, ensuring compile-time type safety for callers.",
    "explanation": "Union types ensure that developers cannot pass invalid arbitrary strings like variant=\"danger\" if the design system only supports \"error\".",
    "interviewAnswer": "Define TypeScript union types for variant (\"success\" | \"warning\" | \"error\" | \"info\") and size (\"sm\" | \"md\" | \"lg\"). Map these unions to scoped CSS module classes or style maps, ensuring compile-time type safety for callers. Union types ensure that developers cannot pass invalid arbitrary strings like variant=\"danger\" if the design system only supports \"error\".",
    "importantPoints": [
      "Define TypeScript union types for variant (\"success\" | \"warning\" | \"error\" | \"info\") and size (\"sm\" | \"md\" | \"lg\"). Map these unions to scoped CSS module classes or style maps, ensuring compile-time type safety for callers.",
      "Union types ensure that developers cannot pass invalid arbitrary strings like variant=\"danger\" if the design system only supports \"error\"."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "typescript",
      "badge",
      "design-systems"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "Explain why keys must be unique among immediate siblings, but do NOT need to be globally unique across the entire application.",
    "answer": "React diffing algorithm operates sibling-by-sibling within a single parent Fiber node children array. When diffing an array, React only compares keys among children within that specific parent container. Sibling keys in other components live in completely separate Fiber subtrees.",
    "explanation": "A key of key=\"item-1\" in a sidebar does not conflict with key=\"item-1\" in a main content list.",
    "interviewAnswer": "React diffing algorithm operates sibling-by-sibling within a single parent Fiber node children array. When diffing an array, React only compares keys among children within that specific parent container. Sibling keys in other components live in completely separate Fiber subtrees. A key of key=\"item-1\" in a sidebar does not conflict with key=\"item-1\" in a main content list.",
    "importantPoints": [
      "React diffing algorithm operates sibling-by-sibling within a single parent Fiber node children array. When diffing an array, React only compares keys among children within that specific parent container. Sibling keys in other components live in completely separate Fiber subtrees.",
      "A key of key=\"item-1\" in a sidebar does not conflict with key=\"item-1\" in a main content list."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "keys",
      "siblings",
      "reconciliation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How does React handle boolean attributes like disabled, required, and readOnly in JSX?",
    "answer": "In JSX, writing an attribute without a value (e.g. <button disabled>) implicitly evaluates to true (<button disabled={true}>). Passing false (disabled={false}), null, or undefined omits the attribute completely from the rendered HTML element.",
    "explanation": "In standard HTML, <button disabled=\"false\"> is still disabled because HTML only checks attribute presence. React correctly strips the attribute when false is passed.",
    "interviewAnswer": "In JSX, writing an attribute without a value (e.g. <button disabled>) implicitly evaluates to true (<button disabled={true}>). Passing false (disabled={false}), null, or undefined omits the attribute completely from the rendered HTML element. In standard HTML, <button disabled=\"false\"> is still disabled because HTML only checks attribute presence. React correctly strips the attribute when false is passed.",
    "importantPoints": [
      "In JSX, writing an attribute without a value (e.g. <button disabled>) implicitly evaluates to true (<button disabled={true}>). Passing false (disabled={false}), null, or undefined omits the attribute completely from the rendered HTML element.",
      "In standard HTML, <button disabled=\"false\"> is still disabled because HTML only checks attribute presence. React correctly strips the attribute when false is passed."
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
      "boolean-attributes",
      "html"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What is the purpose of React Testing Library (RTL), and why does it encourage querying by user-facing roles and labels rather than component state or CSS selectors?",
    "answer": "RTL tests components the way users and screen readers actually interact with them (getByRole(\"button\", { name: /submit/i }), getByLabelText). This makes tests resilient to implementation refactors (like changing CSS classes or switching from class to function components) while simultaneously guaranteeing accessibility.",
    "explanation": "Testing implementation details (like wrapper.state(\"count\")) causes tests to break on innocent refactors even if the user experience is unchanged.",
    "interviewAnswer": "RTL tests components the way users and screen readers actually interact with them (getByRole(\"button\", { name: /submit/i }), getByLabelText). This makes tests resilient to implementation refactors (like changing CSS classes or switching from class to function components) while simultaneously guaranteeing accessibility. Testing implementation details (like wrapper.state(\"count\")) causes tests to break on innocent refactors even if the user experience is unchanged.",
    "importantPoints": [
      "RTL tests components the way users and screen readers actually interact with them (getByRole(\"button\", { name: /submit/i }), getByLabelText). This makes tests resilient to implementation refactors (like changing CSS classes or switching from class to function components) while simultaneously guaranteeing accessibility.",
      "Testing implementation details (like wrapper.state(\"count\")) causes tests to break on innocent refactors even if the user experience is unchanged."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "testing",
      "react-testing-library",
      "accessibility"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "Predict what happens if you pass an inline object or array literal directly as a prop to a component wrapped in React.memo:",
    "answer": "The memoization is completely defeated. Because JavaScript creates a brand new object/array reference on every parent render pass, React.memo shallow comparison (Object.is) sees a new reference every time, forcing the memoized child to re-render constantly.",
    "explanation": "To preserve React.memo benefits, the object or array must be memoized in the parent with useMemo or defined outside the component if static.",
    "interviewAnswer": "The memoization is completely defeated. Because JavaScript creates a brand new object/array reference on every parent render pass, React.memo shallow comparison (Object.is) sees a new reference every time, forcing the memoized child to re-render constantly. To preserve React.memo benefits, the object or array must be memoized in the parent with useMemo or defined outside the component if static.",
    "importantPoints": [
      "The memoization is completely defeated. Because JavaScript creates a brand new object/array reference on every parent render pass, React.memo shallow comparison (Object.is) sees a new reference every time, forcing the memoized child to re-render constantly.",
      "To preserve React.memo benefits, the object or array must be memoized in the parent with useMemo or defined outside the component if static."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "react",
      "react-memo",
      "memoization",
      "reference-equality"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you design a custom Dropdown Menu component that closes automatically when clicking outside its boundaries?",
    "answer": "Attach a ref to the dropdown container. In a useEffect, attach a mousedown or click listener to document. In the listener, check if (!dropdownRef.current.contains(event.target)). If true, close the dropdown. Remember to remove the document listener in the effect cleanup.",
    "explanation": "Using Node.contains() checks if the clicked DOM node is a descendant of the dropdown container.",
    "interviewAnswer": "Attach a ref to the dropdown container. In a useEffect, attach a mousedown or click listener to document. In the listener, check if (!dropdownRef.current.contains(event.target)). If true, close the dropdown. Remember to remove the document listener in the effect cleanup. Using Node.contains() checks if the clicked DOM node is a descendant of the dropdown container.",
    "importantPoints": [
      "Attach a ref to the dropdown container. In a useEffect, attach a mousedown or click listener to document. In the listener, check if (!dropdownRef.current.contains(event.target)). If true, close the dropdown. Remember to remove the document listener in the effect cleanup.",
      "Using Node.contains() checks if the clicked DOM node is a descendant of the dropdown container."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "dropdown",
      "click-outside",
      "refs",
      "useeffect"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "What is the difference between shallow rendering and full DOM rendering in React component tests?",
    "answer": "Shallow rendering (common in legacy Enzyme) renders only the component under test one level deep, replacing child components with placeholders. Full DOM rendering (React Testing Library) renders the complete real component tree into a jsdom environment, verifying real user interactions, child effects, and integration.",
    "explanation": "RTL dropped shallow rendering because testing full integration catches real bugs that shallow mocks hide.",
    "interviewAnswer": "Shallow rendering (common in legacy Enzyme) renders only the component under test one level deep, replacing child components with placeholders. Full DOM rendering (React Testing Library) renders the complete real component tree into a jsdom environment, verifying real user interactions, child effects, and integration. RTL dropped shallow rendering because testing full integration catches real bugs that shallow mocks hide.",
    "importantPoints": [
      "Shallow rendering (common in legacy Enzyme) renders only the component under test one level deep, replacing child components with placeholders. Full DOM rendering (React Testing Library) renders the complete real component tree into a jsdom environment, verifying real user interactions, child effects, and integration.",
      "RTL dropped shallow rendering because testing full integration catches real bugs that shallow mocks hide."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "testing",
      "shallow-rendering",
      "rtl"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you pass ref down to an underlying DOM node in React 19 without wrapping the component in forwardRef?",
    "answer": "In React 19, simply accept \"ref\" as a standard prop in the component argument list: function MyInput({ label, ref, ...props }) { return <input ref={ref} {...props} />; }.",
    "explanation": "React 19 compiler automatically handles ref passing on functional components, removing the forwardRef boilerplate.",
    "interviewAnswer": "In React 19, simply accept \"ref\" as a standard prop in the component argument list: function MyInput({ label, ref, ...props }) { return <input ref={ref} {...props} />; }. React 19 compiler automatically handles ref passing on functional components, removing the forwardRef boilerplate.",
    "importantPoints": [
      "In React 19, simply accept \"ref\" as a standard prop in the component argument list: function MyInput({ label, ref, ...props }) { return <input ref={ref} {...props} />; }.",
      "React 19 compiler automatically handles ref passing on functional components, removing the forwardRef boilerplate."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "react19",
      "refs",
      "forwardref"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "A team creates a Card component with 25 optional props (hasHeader, hasFooter, isCompact, showAvatar, etc.). Why is this a design smell, and how should it be refactored using composition?",
    "answer": "Having 25 boolean/content props turns the component into an unmaintainable \"God component\" full of complex internal branching and brittle layouts. It should be refactored into composable subcomponents: <Card><Card.Header /><Card.Body /><Card.Footer /></Card>.",
    "explanation": "Composition lets the caller assemble only the sections needed without polluting the base component with dozens of flags.",
    "interviewAnswer": "Having 25 boolean/content props turns the component into an unmaintainable \"God component\" full of complex internal branching and brittle layouts. It should be refactored into composable subcomponents: <Card><Card.Header /><Card.Body /><Card.Footer /></Card>. Composition lets the caller assemble only the sections needed without polluting the base component with dozens of flags.",
    "importantPoints": [
      "Having 25 boolean/content props turns the component into an unmaintainable \"God component\" full of complex internal branching and brittle layouts. It should be refactored into composable subcomponents: <Card><Card.Header /><Card.Body /><Card.Footer /></Card>.",
      "Composition lets the caller assemble only the sections needed without polluting the base component with dozens of flags."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "composition",
      "code-smells",
      "refactoring",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How does React handle passing children when both a children prop and nested JSX elements are provided simultaneously?",
    "answer": "Nested JSX elements between the opening and closing tags always take precedence and overwrite any explicit children prop passed as an attribute: <Card children=\"Prop\">Nested JSX</Card> renders \"Nested JSX\".",
    "explanation": "Babel compiles JSX tags such that nested children become the final argument to createElement/jsx, overriding any children key in the props object.",
    "interviewAnswer": "Nested JSX elements between the opening and closing tags always take precedence and overwrite any explicit children prop passed as an attribute: <Card children=\"Prop\">Nested JSX</Card> renders \"Nested JSX\". Babel compiles JSX tags such that nested children become the final argument to createElement/jsx, overriding any children key in the props object.",
    "importantPoints": [
      "Nested JSX elements between the opening and closing tags always take precedence and overwrite any explicit children prop passed as an attribute: <Card children=\"Prop\">Nested JSX</Card> renders \"Nested JSX\".",
      "Babel compiles JSX tags such that nested children become the final argument to createElement/jsx, overriding any children key in the props object."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Output / Code Prediction",
    "isImportant": false,
    "tags": [
      "react",
      "children",
      "jsx",
      "precedence"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "components-jsx",
    "question": "How do you build a dynamic component registry in React where a backend JSON response dictates which UI component to render (Server-Driven UI)?",
    "answer": "Create a component map object mapping backend string types to React components: const registry = { hero: HeroBanner, carousel: ProductCarousel, banner: PromoBanner }; In the renderer, look up the component: const Component = registry[block.type]; return Component ? <Component {...block.props} /> : null;.",
    "explanation": "Server-Driven UI allows backends to dynamically dictate screen layouts, feature ordering, and promotional content without requiring client app updates.",
    "interviewAnswer": "Create a component map object mapping backend string types to React components: const registry = { hero: HeroBanner, carousel: ProductCarousel, banner: PromoBanner }; In the renderer, look up the component: const Component = registry[block.type]; return Component ? <Component {...block.props} /> : null;. Server-Driven UI allows backends to dynamically dictate screen layouts, feature ordering, and promotional content without requiring client app updates.",
    "importantPoints": [
      "Create a component map object mapping backend string types to React components: const registry = { hero: HeroBanner, carousel: ProductCarousel, banner: PromoBanner }; In the renderer, look up the component: const Component = registry[block.type]; return Component ? <Component {...block.props} /> : null;.",
      "Server-Driven UI allows backends to dynamically dictate screen layouts, feature ordering, and promotional content without requiring client app updates."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "server-driven-ui",
      "component-registry",
      "architecture"
    ]
  }
];
