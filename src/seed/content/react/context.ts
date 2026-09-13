import { SeedQuestion } from '../types';

export const reactContextQuestions: SeedQuestion[] = [
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How does React Context propagate changes down the component tree, and why does it bypass React.memo and shouldComponentUpdate bailouts?",
    "answer": "React Context uses an internal dependency list attached directly to the Fiber node of any component calling useContext. When the Provider value changes (by Object.is comparison), React traverses down and unconditionally marks all subscribing Fiber nodes as dirty, bypassing any React.memo or shouldComponentUpdate optimization on intermediate parent components.",
    "explanation": "This ensures that consumers always receive the latest context data regardless of whether intermediate components in the tree re-rendered or bailed out.",
    "interviewAnswer": "React Context uses an internal dependency list attached directly to the Fiber node of any component calling useContext. When the Provider value changes (by Object.is comparison), React traverses down and unconditionally marks all subscribing Fiber nodes as dirty, bypassing any React.memo or shouldComponentUpdate optimization on intermediate parent components. This ensures that consumers always receive the latest context data regardless of whether intermediate components in the tree re-rendered or bailed out.",
    "importantPoints": [
      "React Context uses an internal dependency list attached directly to the Fiber node of any component calling useContext. When the Provider value changes (by Object.is comparison), React traverses down and unconditionally marks all subscribing Fiber nodes as dirty, bypassing any React.memo or shouldComponentUpdate optimization on intermediate parent components.",
      "This ensures that consumers always receive the latest context data regardless of whether intermediate components in the tree re-rendered or bailed out."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "context-api",
      "fiber-internals",
      "re-rendering",
      "react-memo"
    ],
    "followUpQuestions": [
      "Why cannot React.memo prevent a child component from re-rendering if that child consumes an updated Context?",
      "How does Context subscriber notification differ from Redux store subscription model?",
      "What are the performance implications when a large context updates 60 times a second?"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "What is the \"Context Re-render Trap\", and why does passing an unmemoized object literal like <ThemeContext.Provider value={{ theme, setTheme }}> degrade application performance?",
    "answer": "Every time the Provider parent component re-renders, the object literal {{ theme, setTheme }} is created as a new reference in memory. Because React uses Object.is() to detect context changes, every single consumer of ThemeContext is forced to re-render, even if neither theme nor setTheme has changed.",
    "explanation": "The fix is to memoize the context value using useMemo: const value = useMemo(() => ({ theme, setTheme }), [theme]); and pass value to the provider.",
    "interviewAnswer": "Every time the Provider parent component re-renders, the object literal {{ theme, setTheme }} is created as a new reference in memory. Because React uses Object.is() to detect context changes, every single consumer of ThemeContext is forced to re-render, even if neither theme nor setTheme has changed. The fix is to memoize the context value using useMemo: const value = useMemo(() => ({ theme, setTheme }), [theme]); and pass value to the provider.",
    "importantPoints": [
      "Every time the Provider parent component re-renders, the object literal {{ theme, setTheme }} is created as a new reference in memory. Because React uses Object.is() to detect context changes, every single consumer of ThemeContext is forced to re-render, even if neither theme nor setTheme has changed.",
      "The fix is to memoize the context value using useMemo: const value = useMemo(() => ({ theme, setTheme }), [theme]); and pass value to the provider."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "react",
      "context-api",
      "performance",
      "usememo",
      "anti-pattern"
    ],
    "followUpQuestions": [
      "Will memoizing the Provider value prevent consumers from re-rendering when theme actually changes?",
      "How do you prevent children passed into the Provider from re-rendering when the Provider re-renders?"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How does \"Context Splitting\" solve the performance issue where components that only need dispatch or stable actions are re-rendering on every state update?",
    "answer": "Split the monolithic context into two separate contexts: one for state (e.g. StateContext) and one for dispatch/actions (e.g. DispatchContext). Components that only dispatch actions consume DispatchContext and will NEVER re-render when state changes, because the dispatch function reference never changes.",
    "explanation": "This decouples read components from write components, eliminating massive amounts of unnecessary render cycles in complex applications.",
    "interviewAnswer": "Split the monolithic context into two separate contexts: one for state (e.g. StateContext) and one for dispatch/actions (e.g. DispatchContext). Components that only dispatch actions consume DispatchContext and will NEVER re-render when state changes, because the dispatch function reference never changes. This decouples read components from write components, eliminating massive amounts of unnecessary render cycles in complex applications.",
    "importantPoints": [
      "Split the monolithic context into two separate contexts: one for state (e.g. StateContext) and one for dispatch/actions (e.g. DispatchContext). Components that only dispatch actions consume DispatchContext and will NEVER re-render when state changes, because the dispatch function reference never changes.",
      "This decouples read components from write components, eliminating massive amounts of unnecessary render cycles in complex applications."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "context-api",
      "context-splitting",
      "performance",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "Why does React Context lack fine-grained selectors natively, and what happens if a component only consumes 1 field out of a 20-field context object?",
    "answer": "useContext subscribes the component to the ENTIRE context value. React has no built-in mechanism to select only a slice of context. If ANY property in the context object changes, EVERY component calling useContext for that context re-renders, even if the specific property it reads is untouched.",
    "explanation": "To achieve fine-grained reactivity without re-rendering, teams split contexts, use React 18 useSyncExternalStore with selector-based stores (Zustand, Redux), or use libraries like use-context-selector.",
    "interviewAnswer": "useContext subscribes the component to the ENTIRE context value. React has no built-in mechanism to select only a slice of context. If ANY property in the context object changes, EVERY component calling useContext for that context re-renders, even if the specific property it reads is untouched. To achieve fine-grained reactivity without re-rendering, teams split contexts, use React 18 useSyncExternalStore with selector-based stores (Zustand, Redux), or use libraries like use-context-selector.",
    "importantPoints": [
      "useContext subscribes the component to the ENTIRE context value. React has no built-in mechanism to select only a slice of context. If ANY property in the context object changes, EVERY component calling useContext for that context re-renders, even if the specific property it reads is untouched.",
      "To achieve fine-grained reactivity without re-rendering, teams split contexts, use React 18 useSyncExternalStore with selector-based stores (Zustand, Redux), or use libraries like use-context-selector."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "context-api",
      "selectors",
      "performance",
      "trade-offs"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How does React 19 simplify the Context Provider syntax compared to previous versions?",
    "answer": "In React 19, you can render the Context object directly as a provider: <MyContext value={value}> instead of the legacy <MyContext.Provider value={value}>. <MyContext.Provider> is still supported for backward compatibility but is no longer required.",
    "explanation": "Cleans up JSX markup and makes context usage feel more native and concise.",
    "interviewAnswer": "In React 19, you can render the Context object directly as a provider: <MyContext value={value}> instead of the legacy <MyContext.Provider value={value}>. <MyContext.Provider> is still supported for backward compatibility but is no longer required. Cleans up JSX markup and makes context usage feel more native and concise.",
    "importantPoints": [
      "In React 19, you can render the Context object directly as a provider: <MyContext value={value}> instead of the legacy <MyContext.Provider value={value}>. <MyContext.Provider> is still supported for backward compatibility but is no longer required.",
      "Cleans up JSX markup and makes context usage feel more native and concise."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "react19",
      "syntax",
      "provider"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How do you create a type-safe custom hook guard for React Context in TypeScript (e.g. useAuthContext)?",
    "answer": "Create context with undefined default: const AuthContext = createContext<AuthContextType | undefined>(undefined). In custom hook useAuthContext(): const context = useContext(AuthContext); if (!context) throw new Error(\"useAuthContext must be used within an AuthProvider\"); return context;.",
    "explanation": "Eliminates annoying undefined checks in every consuming component and fails fast during development if a component is rendered outside its Provider.",
    "interviewAnswer": "Create context with undefined default: const AuthContext = createContext<AuthContextType | undefined>(undefined). In custom hook useAuthContext(): const context = useContext(AuthContext); if (!context) throw new Error(\"useAuthContext must be used within an AuthProvider\"); return context;. Eliminates annoying undefined checks in every consuming component and fails fast during development if a component is rendered outside its Provider.",
    "importantPoints": [
      "Create context with undefined default: const AuthContext = createContext<AuthContextType | undefined>(undefined). In custom hook useAuthContext(): const context = useContext(AuthContext); if (!context) throw new Error(\"useAuthContext must be used within an AuthProvider\"); return context;.",
      "Eliminates annoying undefined checks in every consuming component and fails fast during development if a component is rendered outside its Provider."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "react",
      "context-api",
      "typescript",
      "custom-hooks",
      "error-handling"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How does passing {children} to a Context Provider prevent the entire child tree from re-rendering when the Provider updates its state?",
    "answer": "When children are passed as props from a parent component (<MyProvider>{children}</MyProvider>), the children elements are created in the parent scope. When MyProvider re-renders due to its internal state change, its children prop reference is identical to the previous render. React bails out of re-rendering children whose props have not changed (unless they consume the context directly).",
    "explanation": "This leverages the \"Component Composition\" optimization to protect non-consuming descendants from re-rendering.",
    "interviewAnswer": "When children are passed as props from a parent component (<MyProvider>{children}</MyProvider>), the children elements are created in the parent scope. When MyProvider re-renders due to its internal state change, its children prop reference is identical to the previous render. React bails out of re-rendering children whose props have not changed (unless they consume the context directly). This leverages the \"Component Composition\" optimization to protect non-consuming descendants from re-rendering.",
    "importantPoints": [
      "When children are passed as props from a parent component (<MyProvider>{children}</MyProvider>), the children elements are created in the parent scope. When MyProvider re-renders due to its internal state change, its children prop reference is identical to the previous render. React bails out of re-rendering children whose props have not changed (unless they consume the context directly).",
      "This leverages the \"Component Composition\" optimization to protect non-consuming descendants from re-rendering."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "context-api",
      "composition",
      "children",
      "performance"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "What is \"Provider Hell\" (pyramid of doom), and what architectural patterns can clean up deeply nested context providers?",
    "answer": "Provider Hell occurs when an application wraps components in 10+ nested providers (<AuthProvider><ThemeProvider><SettingsProvider><CartProvider>...</CartProvider></SettingsProvider></ThemeProvider></AuthProvider>). It can be cleaned up using a Provider Composer component that reduces an array of provider components into a single nested tree using array.reduceRight().",
    "explanation": "A composeProviders utility takes a list of Providers and returns a single clean wrapper component: <AppProviders>{children}</AppProviders>.",
    "interviewAnswer": "Provider Hell occurs when an application wraps components in 10+ nested providers (<AuthProvider><ThemeProvider><SettingsProvider><CartProvider>...</CartProvider></SettingsProvider></ThemeProvider></AuthProvider>). It can be cleaned up using a Provider Composer component that reduces an array of provider components into a single nested tree using array.reduceRight(). A composeProviders utility takes a list of Providers and returns a single clean wrapper component: <AppProviders>{children}</AppProviders>.",
    "importantPoints": [
      "Provider Hell occurs when an application wraps components in 10+ nested providers (<AuthProvider><ThemeProvider><SettingsProvider><CartProvider>...</CartProvider></SettingsProvider></ThemeProvider></AuthProvider>). It can be cleaned up using a Provider Composer component that reduces an array of provider components into a single nested tree using array.reduceRight().",
      "A composeProviders utility takes a list of Providers and returns a single clean wrapper component: <AppProviders>{children}</AppProviders>."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "context-api",
      "provider-hell",
      "refactoring",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "When should you use React Context versus a dedicated global state management library like Zustand or Redux Toolkit?",
    "answer": "Use Context for low-velocity, application-wide data that changes infrequently (theme, authenticated user, locale, feature flags) or for localized compound components. Use Zustand/Redux for high-velocity state (frequent updates like animations, real-time feeds, form drafts) where fine-grained selector subscriptions and middleware are required to avoid excessive re-renders.",
    "explanation": "Context is a dependency injection mechanism, not a state manager. It does not have built-in action tracking, middleware, or selector memoization.",
    "interviewAnswer": "Use Context for low-velocity, application-wide data that changes infrequently (theme, authenticated user, locale, feature flags) or for localized compound components. Use Zustand/Redux for high-velocity state (frequent updates like animations, real-time feeds, form drafts) where fine-grained selector subscriptions and middleware are required to avoid excessive re-renders. Context is a dependency injection mechanism, not a state manager. It does not have built-in action tracking, middleware, or selector memoization.",
    "importantPoints": [
      "Use Context for low-velocity, application-wide data that changes infrequently (theme, authenticated user, locale, feature flags) or for localized compound components. Use Zustand/Redux for high-velocity state (frequent updates like animations, real-time feeds, form drafts) where fine-grained selector subscriptions and middleware are required to avoid excessive re-renders.",
      "Context is a dependency injection mechanism, not a state manager. It does not have built-in action tracking, middleware, or selector memoization."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "react",
      "context-api",
      "state-management",
      "zustand",
      "redux"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "What default value does a component receive if it calls useContext(MyContext) outside of a matching <MyContext.Provider>?",
    "answer": "It receives the defaultValue passed into createContext(defaultValue). If no defaultValue was provided (e.g. createContext()), it receives undefined.",
    "explanation": "The defaultValue argument passed to createContext is ONLY used when there is NO matching Provider above the component in the tree. It is static and cannot change at runtime.",
    "interviewAnswer": "It receives the defaultValue passed into createContext(defaultValue). If no defaultValue was provided (e.g. createContext()), it receives undefined. The defaultValue argument passed to createContext is ONLY used when there is NO matching Provider above the component in the tree. It is static and cannot change at runtime.",
    "importantPoints": [
      "It receives the defaultValue passed into createContext(defaultValue). If no defaultValue was provided (e.g. createContext()), it receives undefined.",
      "The defaultValue argument passed to createContext is ONLY used when there is NO matching Provider above the component in the tree. It is static and cannot change at runtime."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "default-value",
      "createcontext"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "Can you nest multiple Providers of the same Context in a single component tree? What value does a child component receive?",
    "answer": "Yes, multiple Providers for the same Context can be nested. A consuming component will always read the value from the NEAREST ancestor Provider above it in the Fiber tree.",
    "explanation": "This is commonly used in localized theme overrides (e.g. a dark sidebar inside an otherwise light themed application).",
    "interviewAnswer": "Yes, multiple Providers for the same Context can be nested. A consuming component will always read the value from the NEAREST ancestor Provider above it in the Fiber tree. This is commonly used in localized theme overrides (e.g. a dark sidebar inside an otherwise light themed application).",
    "importantPoints": [
      "Yes, multiple Providers for the same Context can be nested. A consuming component will always read the value from the NEAREST ancestor Provider above it in the Fiber tree.",
      "This is commonly used in localized theme overrides (e.g. a dark sidebar inside an otherwise light themed application)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "nesting",
      "provider-hierarchy"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How do you build an accessible Accordion compound component using React Context?",
    "answer": "Create AccordionContext holding activeIndex and setActiveIndex. Accordion provides the context. Accordion.Item tracks its index. Accordion.Header renders a button that toggles activeIndex on click with aria-expanded. Accordion.Panel reads activeIndex and conditionally renders its children with aria-hidden.",
    "explanation": "Allows consumers to assemble flexible layouts while Accordion subcomponents communicate state invisibly through Context.",
    "interviewAnswer": "Create AccordionContext holding activeIndex and setActiveIndex. Accordion provides the context. Accordion.Item tracks its index. Accordion.Header renders a button that toggles activeIndex on click with aria-expanded. Accordion.Panel reads activeIndex and conditionally renders its children with aria-hidden. Allows consumers to assemble flexible layouts while Accordion subcomponents communicate state invisibly through Context.",
    "importantPoints": [
      "Create AccordionContext holding activeIndex and setActiveIndex. Accordion provides the context. Accordion.Item tracks its index. Accordion.Header renders a button that toggles activeIndex on click with aria-expanded. Accordion.Panel reads activeIndex and conditionally renders its children with aria-hidden.",
      "Allows consumers to assemble flexible layouts while Accordion subcomponents communicate state invisibly through Context."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "compound-components",
      "accordion",
      "accessibility"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "What is the difference between consuming context with useContext hook versus the legacy <MyContext.Consumer> component?",
    "answer": "useContext is a hook that returns the context value directly within the component function body, keeping JSX flat and readable. <MyContext.Consumer> requires the Render Props pattern: <MyContext.Consumer>{value => <div>{value}</div>}</MyContext.Consumer>, which creates nested indentation and was required in class components.",
    "explanation": "useContext also allows using context values in logic before returning JSX (e.g. in hooks and conditionals).",
    "interviewAnswer": "useContext is a hook that returns the context value directly within the component function body, keeping JSX flat and readable. <MyContext.Consumer> requires the Render Props pattern: <MyContext.Consumer>{value => <div>{value}</div>}</MyContext.Consumer>, which creates nested indentation and was required in class components. useContext also allows using context values in logic before returning JSX (e.g. in hooks and conditionals).",
    "importantPoints": [
      "useContext is a hook that returns the context value directly within the component function body, keeping JSX flat and readable. <MyContext.Consumer> requires the Render Props pattern: <MyContext.Consumer>{value => <div>{value}</div>}</MyContext.Consumer>, which creates nested indentation and was required in class components.",
      "useContext also allows using context values in logic before returning JSX (e.g. in hooks and conditionals)."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "usecontext",
      "consumer",
      "render-props"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How does React DevTools display Context values and how can you give a Context a custom name in DevTools?",
    "answer": "You can set displayName on the context object: MyContext.displayName = \"UserAuthContext\";. React DevTools will then display <UserAuthContext.Provider> instead of the generic <Context.Provider>, significantly improving debugging scannability.",
    "explanation": "A simple best practice for production design systems and large enterprise codebases.",
    "interviewAnswer": "You can set displayName on the context object: MyContext.displayName = \"UserAuthContext\";. React DevTools will then display <UserAuthContext.Provider> instead of the generic <Context.Provider>, significantly improving debugging scannability. A simple best practice for production design systems and large enterprise codebases.",
    "importantPoints": [
      "You can set displayName on the context object: MyContext.displayName = \"UserAuthContext\";. React DevTools will then display <UserAuthContext.Provider> instead of the generic <Context.Provider>, significantly improving debugging scannability.",
      "A simple best practice for production design systems and large enterprise codebases."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Production / Real-World",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "devtools",
      "displayname",
      "debugging"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "A dashboard contains 50 widgets consuming DashboardContext. When one widget updates its filter, all 50 widgets freeze the screen for 400ms. How do you diagnose and fix this?",
    "answer": "Diagnosis: React DevTools Profiler will show all 50 widgets highlighted as rendered because of Context change. Fix: 1) Split DashboardContext into specific smaller contexts (FilterContext, DataContext, WidgetConfigContext), 2) Wrap heavy widget subtrees in React.memo and pass only primitive props instead of full context, or 3) Move widget states to an external store with selector subscriptions (Zustand).",
    "explanation": "Monolithic contexts that bundle high-frequency update state with heavy UI trees cause major performance bottlenecks.",
    "interviewAnswer": "Diagnosis: React DevTools Profiler will show all 50 widgets highlighted as rendered because of Context change. Fix: 1) Split DashboardContext into specific smaller contexts (FilterContext, DataContext, WidgetConfigContext), 2) Wrap heavy widget subtrees in React.memo and pass only primitive props instead of full context, or 3) Move widget states to an external store with selector subscriptions (Zustand). Monolithic contexts that bundle high-frequency update state with heavy UI trees cause major performance bottlenecks.",
    "importantPoints": [
      "Diagnosis: React DevTools Profiler will show all 50 widgets highlighted as rendered because of Context change. Fix: 1) Split DashboardContext into specific smaller contexts (FilterContext, DataContext, WidgetConfigContext), 2) Wrap heavy widget subtrees in React.memo and pass only primitive props instead of full context, or 3) Move widget states to an external store with selector subscriptions (Zustand).",
      "Monolithic contexts that bundle high-frequency update state with heavy UI trees cause major performance bottlenecks."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Logical / Scenario-Based",
    "isImportant": true,
    "tags": [
      "react",
      "context-api",
      "performance",
      "profiler",
      "troubleshooting"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "Can you conditionally provide different context values based on user authentication status without breaking Rules of Hooks?",
    "answer": "Yes. While hooks cannot be conditional, Provider values CAN be conditional: <AuthContext.Provider value={isAuthenticated ? authenticatedValue : guestValue}>{children}</AuthContext.Provider>.",
    "explanation": "The provider JSX evaluates standard JavaScript expressions to determine what value to provide.",
    "interviewAnswer": "Yes. While hooks cannot be conditional, Provider values CAN be conditional: <AuthContext.Provider value={isAuthenticated ? authenticatedValue : guestValue}>{children}</AuthContext.Provider>. The provider JSX evaluates standard JavaScript expressions to determine what value to provide.",
    "importantPoints": [
      "Yes. While hooks cannot be conditional, Provider values CAN be conditional: <AuthContext.Provider value={isAuthenticated ? authenticatedValue : guestValue}>{children}</AuthContext.Provider>.",
      "The provider JSX evaluates standard JavaScript expressions to determine what value to provide."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "conditional-values",
      "providers"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "What is the relationship between React Context and Dependency Injection (DI)?",
    "answer": "React Context is fundamentally a Dependency Injection system for component trees. It allows an ancestor to inject dependencies (services, API clients, themes, configuration) to any descendant component without intermediate components needing to know about or forward those dependencies.",
    "explanation": "Facilitates unit testing by allowing test suites to inject mock providers around components without mocking module imports.",
    "interviewAnswer": "React Context is fundamentally a Dependency Injection system for component trees. It allows an ancestor to inject dependencies (services, API clients, themes, configuration) to any descendant component without intermediate components needing to know about or forward those dependencies. Facilitates unit testing by allowing test suites to inject mock providers around components without mocking module imports.",
    "importantPoints": [
      "React Context is fundamentally a Dependency Injection system for component trees. It allows an ancestor to inject dependencies (services, API clients, themes, configuration) to any descendant component without intermediate components needing to know about or forward those dependencies.",
      "Facilitates unit testing by allowing test suites to inject mock providers around components without mocking module imports."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "dependency-injection",
      "design-patterns"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How do you unit test a component that consumes React Context using React Testing Library?",
    "answer": "Render the component wrapped in the corresponding Provider inside the test: render(<ThemeProvider value={mockTheme}><MyComponent /></ThemeProvider>). Alternatively, create a custom render wrapper (customRender) that automatically wraps tested components in all necessary app providers.",
    "explanation": "Testing Library custom render utilities standardize application wrappers across test suites.",
    "interviewAnswer": "Render the component wrapped in the corresponding Provider inside the test: render(<ThemeProvider value={mockTheme}><MyComponent /></ThemeProvider>). Alternatively, create a custom render wrapper (customRender) that automatically wraps tested components in all necessary app providers. Testing Library custom render utilities standardize application wrappers across test suites.",
    "importantPoints": [
      "Render the component wrapped in the corresponding Provider inside the test: render(<ThemeProvider value={mockTheme}><MyComponent /></ThemeProvider>). Alternatively, create a custom render wrapper (customRender) that automatically wraps tested components in all necessary app providers.",
      "Testing Library custom render utilities standardize application wrappers across test suites."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "testing",
      "react-testing-library"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "Why is it an anti-pattern to use React Context as an application-wide event bus?",
    "answer": "React Context is designed for shared state propagation, not transient event passing. Using Context as an event bus requires updating state for every event, causing all subscribed components to re-render. Transient events (like toast triggers or analytics pings) are better managed with dedicated event emitters, RxJS, or imperative callback hooks.",
    "explanation": "Event bus patterns on Context trigger massive unnecessary reconciliations across unrelated components.",
    "interviewAnswer": "React Context is designed for shared state propagation, not transient event passing. Using Context as an event bus requires updating state for every event, causing all subscribed components to re-render. Transient events (like toast triggers or analytics pings) are better managed with dedicated event emitters, RxJS, or imperative callback hooks. Event bus patterns on Context trigger massive unnecessary reconciliations across unrelated components.",
    "importantPoints": [
      "React Context is designed for shared state propagation, not transient event passing. Using Context as an event bus requires updating state for every event, causing all subscribed components to re-render. Transient events (like toast triggers or analytics pings) are better managed with dedicated event emitters, RxJS, or imperative callback hooks.",
      "Event bus patterns on Context trigger massive unnecessary reconciliations across unrelated components."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "anti-pattern",
      "event-bus",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How can you consume multiple contexts inside a single functional component cleanly?",
    "answer": "Call useContext multiple times at the top of the component: const theme = useContext(ThemeContext); const user = useContext(UserContext); const cart = useContext(CartContext);. Unlike class components with nested Consumers, hooks keep multiple context consumptions linear and flat.",
    "explanation": "Each useContext hook call operates independently and subscribes only to changes of that specific context.",
    "interviewAnswer": "Call useContext multiple times at the top of the component: const theme = useContext(ThemeContext); const user = useContext(UserContext); const cart = useContext(CartContext);. Unlike class components with nested Consumers, hooks keep multiple context consumptions linear and flat. Each useContext hook call operates independently and subscribes only to changes of that specific context.",
    "importantPoints": [
      "Call useContext multiple times at the top of the component: const theme = useContext(ThemeContext); const user = useContext(UserContext); const cart = useContext(CartContext);. Unlike class components with nested Consumers, hooks keep multiple context consumptions linear and flat.",
      "Each useContext hook call operates independently and subscribes only to changes of that specific context."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "multiple-contexts",
      "usecontext"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "What happens if you update a context state inside an effect that was triggered by that same context state updating?",
    "answer": "It triggers an infinite re-render loop: Context changes -> Component renders -> useEffect runs -> updates Context state -> Context changes -> Component renders again. The browser freezes and React throws \"Maximum update depth exceeded\".",
    "explanation": "Effects that update state based on context must have precise guards (e.g. if (newVal !== currentVal)) to break the cycle.",
    "interviewAnswer": "It triggers an infinite re-render loop: Context changes -> Component renders -> useEffect runs -> updates Context state -> Context changes -> Component renders again. The browser freezes and React throws \"Maximum update depth exceeded\". Effects that update state based on context must have precise guards (e.g. if (newVal !== currentVal)) to break the cycle.",
    "importantPoints": [
      "It triggers an infinite re-render loop: Context changes -> Component renders -> useEffect runs -> updates Context state -> Context changes -> Component renders again. The browser freezes and React throws \"Maximum update depth exceeded\".",
      "Effects that update state based on context must have precise guards (e.g. if (newVal !== currentVal)) to break the cycle."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "infinite-loop",
      "useeffect",
      "debugging"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How do you implement an Internationalization (i18n) system in React using Context API?",
    "answer": "Create I18nContext holding currentLocale, setLocale, and a translation function t(key, params). The Provider loads dictionary JSON files for currentLocale and memoizes the t function. Consuming components call const { t } = useI18n(); and render text with {t(\"welcome.message\")}.",
    "explanation": "Allows dynamic language switching across the entire app in a single render pass.",
    "interviewAnswer": "Create I18nContext holding currentLocale, setLocale, and a translation function t(key, params). The Provider loads dictionary JSON files for currentLocale and memoizes the t function. Consuming components call const { t } = useI18n(); and render text with {t(\"welcome.message\")}. Allows dynamic language switching across the entire app in a single render pass.",
    "importantPoints": [
      "Create I18nContext holding currentLocale, setLocale, and a translation function t(key, params). The Provider loads dictionary JSON files for currentLocale and memoizes the t function. Consuming components call const { t } = useI18n(); and render text with {t(\"welcome.message\")}.",
      "Allows dynamic language switching across the entire app in a single render pass."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "i18n",
      "localization"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "Can a React Portal component access the Context provided by ancestors in the React tree where it was declared?",
    "answer": "Yes. Even though a React Portal renders its DOM nodes into a different physical DOM container (like document.body), it remains part of the React Virtual DOM hierarchy. Therefore, it has full access to all Context Providers declared above it in the React component tree.",
    "explanation": "React Fiber tree determines context inheritance, not the physical HTML DOM tree.",
    "interviewAnswer": "Yes. Even though a React Portal renders its DOM nodes into a different physical DOM container (like document.body), it remains part of the React Virtual DOM hierarchy. Therefore, it has full access to all Context Providers declared above it in the React component tree. React Fiber tree determines context inheritance, not the physical HTML DOM tree.",
    "importantPoints": [
      "Yes. Even though a React Portal renders its DOM nodes into a different physical DOM container (like document.body), it remains part of the React Virtual DOM hierarchy. Therefore, it has full access to all Context Providers declared above it in the React component tree.",
      "React Fiber tree determines context inheritance, not the physical HTML DOM tree."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "context-api",
      "portals",
      "dom-vs-vdom",
      "fiber"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How does React 19 \"use\" hook differ from useContext when reading React Context?",
    "answer": "While useContext must always be called unconditionally at the top level of a component, the React 19 \"use(MyContext)\" hook CAN be called conditionally inside if statements and loops (e.g. if (showDetails) { const theme = use(ThemeContext); }).",
    "explanation": "Offers greater flexibility for conditionally rendered UI sections that do not need to subscribe to contexts when inactive.",
    "interviewAnswer": "While useContext must always be called unconditionally at the top level of a component, the React 19 \"use(MyContext)\" hook CAN be called conditionally inside if statements and loops (e.g. if (showDetails) { const theme = use(ThemeContext); }). Offers greater flexibility for conditionally rendered UI sections that do not need to subscribe to contexts when inactive.",
    "importantPoints": [
      "While useContext must always be called unconditionally at the top level of a component, the React 19 \"use(MyContext)\" hook CAN be called conditionally inside if statements and loops (e.g. if (showDetails) { const theme = use(ThemeContext); }).",
      "Offers greater flexibility for conditionally rendered UI sections that do not need to subscribe to contexts when inactive."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "react19",
      "use-api",
      "conditional-hooks"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How can you isolate context updates to a specific sub-tree without affecting sibling sub-trees?",
    "answer": "Wrap that specific sub-tree in its own local Context Provider with its own state. Siblings outside that Provider remain attached to the root Provider (or default value) and will never re-render when the local sub-tree context updates.",
    "explanation": "Demonstrates modularity and scoping capabilities of nested Providers.",
    "interviewAnswer": "Wrap that specific sub-tree in its own local Context Provider with its own state. Siblings outside that Provider remain attached to the root Provider (or default value) and will never re-render when the local sub-tree context updates. Demonstrates modularity and scoping capabilities of nested Providers.",
    "importantPoints": [
      "Wrap that specific sub-tree in its own local Context Provider with its own state. Siblings outside that Provider remain attached to the root Provider (or default value) and will never re-render when the local sub-tree context updates.",
      "Demonstrates modularity and scoping capabilities of nested Providers."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "scoping",
      "nested-providers"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "What is the difference between passing state and setState in a single context vs creating separate StateContext and DispatchContext?",
    "answer": "In a single context, whenever state changes, ALL consumers re-render, including buttons that only needed setState. With separate StateContext and DispatchContext, components that only trigger actions consume DispatchContext and NEVER re-render when state changes, drastically reducing render churn.",
    "explanation": "One of the most effective React architecture patterns for high-performance dashboards and forms.",
    "interviewAnswer": "In a single context, whenever state changes, ALL consumers re-render, including buttons that only needed setState. With separate StateContext and DispatchContext, components that only trigger actions consume DispatchContext and NEVER re-render when state changes, drastically reducing render churn. One of the most effective React architecture patterns for high-performance dashboards and forms.",
    "importantPoints": [
      "In a single context, whenever state changes, ALL consumers re-render, including buttons that only needed setState. With separate StateContext and DispatchContext, components that only trigger actions consume DispatchContext and NEVER re-render when state changes, drastically reducing render churn.",
      "One of the most effective React architecture patterns for high-performance dashboards and forms."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "react",
      "context-api",
      "dispatch-context",
      "optimization"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "Why should you avoid storing DOM element refs in React Context?",
    "answer": "DOM elements are mutable and do not trigger re-renders when updated. Storing them in Context often causes stale references, breaks SSR serialization, and couples distant components to physical DOM structures, violating encapsulation.",
    "explanation": "Pass callbacks or coordinate scroll/focus actions imperatively through custom event managers instead.",
    "interviewAnswer": "DOM elements are mutable and do not trigger re-renders when updated. Storing them in Context often causes stale references, breaks SSR serialization, and couples distant components to physical DOM structures, violating encapsulation. Pass callbacks or coordinate scroll/focus actions imperatively through custom event managers instead.",
    "importantPoints": [
      "DOM elements are mutable and do not trigger re-renders when updated. Storing them in Context often causes stale references, breaks SSR serialization, and couples distant components to physical DOM structures, violating encapsulation.",
      "Pass callbacks or coordinate scroll/focus actions imperatively through custom event managers instead."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "useref",
      "dom",
      "anti-pattern"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How can you build an optimistic cart provider in React using Context API and useReducer?",
    "answer": "Create CartContext with cart state and dispatch. When an ADD_ITEM action is dispatched, immediately append the item to local state and mark status: \"pending\". Fire background API request. If API fails, dispatch ROLLBACK_ITEM to revert to previous state and display an error toast.",
    "explanation": "Provides an instant, responsive e-commerce shopping experience for users.",
    "interviewAnswer": "Create CartContext with cart state and dispatch. When an ADD_ITEM action is dispatched, immediately append the item to local state and mark status: \"pending\". Fire background API request. If API fails, dispatch ROLLBACK_ITEM to revert to previous state and display an error toast. Provides an instant, responsive e-commerce shopping experience for users.",
    "importantPoints": [
      "Create CartContext with cart state and dispatch. When an ADD_ITEM action is dispatched, immediately append the item to local state and mark status: \"pending\". Fire background API request. If API fails, dispatch ROLLBACK_ITEM to revert to previous state and display an error toast.",
      "Provides an instant, responsive e-commerce shopping experience for users."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "optimistic-ui",
      "usereducer",
      "ecommerce"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How does Context API behave during React 18 Concurrent Rendering when updates are interrupted?",
    "answer": "React 18 Concurrent Mode creates consistent snapshots of Context values per render lane. If an urgent update interrupts a lower-priority transition render, React discards the transition work cleanly without leaking partially updated Context values to other components.",
    "explanation": "Guarantees transactional integrity across the UI tree during concurrent rendering.",
    "interviewAnswer": "React 18 Concurrent Mode creates consistent snapshots of Context values per render lane. If an urgent update interrupts a lower-priority transition render, React discards the transition work cleanly without leaking partially updated Context values to other components. Guarantees transactional integrity across the UI tree during concurrent rendering.",
    "importantPoints": [
      "React 18 Concurrent Mode creates consistent snapshots of Context values per render lane. If an urgent update interrupts a lower-priority transition render, React discards the transition work cleanly without leaking partially updated Context values to other components.",
      "Guarantees transactional integrity across the UI tree during concurrent rendering."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "concurrent-mode",
      "react18",
      "transactions"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "What is the difference between global Context and localized Context created inside a component file?",
    "answer": "Global Context is instantiated at application root and lives for the lifetime of the application (e.g. Auth, Theme). Localized Context is created to coordinate a specific feature or family of components (e.g. ModalContext, FormStepperContext) and is mounted/unmounted dynamically with that feature.",
    "explanation": "Keeps state lifecycles bounded to the exact screens or widgets that need them.",
    "interviewAnswer": "Global Context is instantiated at application root and lives for the lifetime of the application (e.g. Auth, Theme). Localized Context is created to coordinate a specific feature or family of components (e.g. ModalContext, FormStepperContext) and is mounted/unmounted dynamically with that feature. Keeps state lifecycles bounded to the exact screens or widgets that need them.",
    "importantPoints": [
      "Global Context is instantiated at application root and lives for the lifetime of the application (e.g. Auth, Theme). Localized Context is created to coordinate a specific feature or family of components (e.g. ModalContext, FormStepperContext) and is mounted/unmounted dynamically with that feature.",
      "Keeps state lifecycles bounded to the exact screens or widgets that need them."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "scoping",
      "lifecycle"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How can you memoize a component that consumes Context so it only re-renders when a specific property of the context changes?",
    "answer": "Extract the context consumption into a parent wrapper component that reads the context and passes only the specific property as a primitive prop to an inner child component wrapped in React.memo: const ThemeButton = () => { const { theme } = useSettings(); return <MemoButton theme={theme} />; };.",
    "explanation": "The inner MemoButton only re-renders when theme changes, ignoring updates to other properties in SettingsContext.",
    "interviewAnswer": "Extract the context consumption into a parent wrapper component that reads the context and passes only the specific property as a primitive prop to an inner child component wrapped in React.memo: const ThemeButton = () => { const { theme } = useSettings(); return <MemoButton theme={theme} />; };. The inner MemoButton only re-renders when theme changes, ignoring updates to other properties in SettingsContext.",
    "importantPoints": [
      "Extract the context consumption into a parent wrapper component that reads the context and passes only the specific property as a primitive prop to an inner child component wrapped in React.memo: const ThemeButton = () => { const { theme } = useSettings(); return <MemoButton theme={theme} />; };.",
      "The inner MemoButton only re-renders when theme changes, ignoring updates to other properties in SettingsContext."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "react",
      "context-api",
      "react-memo",
      "optimization",
      "selectors"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "What causes the error \"Cannot read properties of undefined (reading 'useContext')\" in React?",
    "answer": "This typically happens when importing useContext from an invalid module path, using mismatched React versions between packages (e.g. two conflicting copies of react in node_modules), or invoking a hook outside of a React function component.",
    "explanation": "Check package.json dependencies and deduplicate React with npm ls react.",
    "interviewAnswer": "This typically happens when importing useContext from an invalid module path, using mismatched React versions between packages (e.g. two conflicting copies of react in node_modules), or invoking a hook outside of a React function component. Check package.json dependencies and deduplicate React with npm ls react.",
    "importantPoints": [
      "This typically happens when importing useContext from an invalid module path, using mismatched React versions between packages (e.g. two conflicting copies of react in node_modules), or invoking a hook outside of a React function component.",
      "Check package.json dependencies and deduplicate React with npm ls react."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "debugging",
      "dependencies",
      "node-modules"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How do you create a ThemeProvider that persists the user preference in localStorage and respects system prefers-color-scheme?",
    "answer": "In ThemeProvider, initialize state by checking localStorage.getItem(\"theme\") ?? (window.matchMedia(\"(prefers-color-scheme: dark)\").matches ? \"dark\" : \"light\"). On change, update state, set localStorage, and toggle the \"dark\" class on document.documentElement.",
    "explanation": "Complete production-grade theme management pattern.",
    "interviewAnswer": "In ThemeProvider, initialize state by checking localStorage.getItem(\"theme\") ?? (window.matchMedia(\"(prefers-color-scheme: dark)\").matches ? \"dark\" : \"light\"). On change, update state, set localStorage, and toggle the \"dark\" class on document.documentElement. Complete production-grade theme management pattern.",
    "importantPoints": [
      "In ThemeProvider, initialize state by checking localStorage.getItem(\"theme\") ?? (window.matchMedia(\"(prefers-color-scheme: dark)\").matches ? \"dark\" : \"light\"). On change, update state, set localStorage, and toggle the \"dark\" class on document.documentElement.",
      "Complete production-grade theme management pattern."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "themes",
      "localstorage",
      "media-queries"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "Why should you never pass functions that mutate external state directly into Context without wrapping in React state dispatchers?",
    "answer": "Mutating external state bypasses React reconciliation engine. React will have no awareness that state changed, so Context consumers will display stale data and the UI will fail to synchronize with the underlying data store.",
    "explanation": "All state transitions must flow through React setState or useReducer dispatch to trigger proper rendering lifecycles.",
    "interviewAnswer": "Mutating external state bypasses React reconciliation engine. React will have no awareness that state changed, so Context consumers will display stale data and the UI will fail to synchronize with the underlying data store. All state transitions must flow through React setState or useReducer dispatch to trigger proper rendering lifecycles.",
    "importantPoints": [
      "Mutating external state bypasses React reconciliation engine. React will have no awareness that state changed, so Context consumers will display stale data and the UI will fail to synchronize with the underlying data store.",
      "All state transitions must flow through React setState or useReducer dispatch to trigger proper rendering lifecycles."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "context-api",
      "immutability",
      "reconciliation"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "context-api",
    "question": "How does React Context compare with CSS Custom Properties (CSS variables) for application-wide theming?",
    "answer": "CSS variables (e.g. --primary-color: #0070f3) update instantly in the browser without running any JavaScript or triggering React component re-renders. React Context requires JavaScript execution, Fiber reconciliation, and component re-renders for every change. CSS variables are therefore vastly superior for pure visual styling changes, while Context is appropriate for logic-driven state (icons, text labels, behavior).",
    "explanation": "Using CSS variables with a simple data-theme attribute on <html> gives 60fps instant theme switching with zero React render overhead.",
    "interviewAnswer": "CSS variables (e.g. --primary-color: #0070f3) update instantly in the browser without running any JavaScript or triggering React component re-renders. React Context requires JavaScript execution, Fiber reconciliation, and component re-renders for every change. CSS variables are therefore vastly superior for pure visual styling changes, while Context is appropriate for logic-driven state (icons, text labels, behavior). Using CSS variables with a simple data-theme attribute on <html> gives 60fps instant theme switching with zero React render overhead.",
    "importantPoints": [
      "CSS variables (e.g. --primary-color: #0070f3) update instantly in the browser without running any JavaScript or triggering React component re-renders. React Context requires JavaScript execution, Fiber reconciliation, and component re-renders for every change. CSS variables are therefore vastly superior for pure visual styling changes, while Context is appropriate for logic-driven state (icons, text labels, behavior).",
      "Using CSS variables with a simple data-theme attribute on <html> gives 60fps instant theme switching with zero React render overhead."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "react",
      "context-api",
      "css-variables",
      "theming",
      "performance"
    ]
  }
];
