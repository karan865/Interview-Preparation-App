import { SeedQuestion } from '../types';

export const reactStateManagementQuestions: SeedQuestion[] = [
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "What is the fundamental architectural difference between \"Server State\" and \"Client State\", and why is storing server data in global Redux often an anti-pattern?",
    "answer": "Server State is data owned by an external remote server, shared asynchronously across multiple clients, requires caching, background revalidation, deduplication, and can become stale at any time (e.g. user profiles, product listings). Client State is synchronous, ephemeral UI state owned entirely by the browser (e.g. modal isOpen, dark mode, selected tab). Storing server data in traditional Redux requires manual boilerplate for loading flags, error handling, cache timers, and synchronization that dedicated server-state managers (TanStack Query, RTK Query) handle automatically.",
    "explanation": "Separating server cache from client UI state eliminates 70%+ of custom Redux boilerplate.",
    "interviewAnswer": "Server State is data owned by an external remote server, shared asynchronously across multiple clients, requires caching, background revalidation, deduplication, and can become stale at any time (e.g. user profiles, product listings). Client State is synchronous, ephemeral UI state owned entirely by the browser (e.g. modal isOpen, dark mode, selected tab). Storing server data in traditional Redux requires manual boilerplate for loading flags, error handling, cache timers, and synchronization that dedicated server-state managers (TanStack Query, RTK Query) handle automatically. Separating server cache from client UI state eliminates 70%+ of custom Redux boilerplate.",
    "importantPoints": [
      "Server State is data owned by an external remote server, shared asynchronously across multiple clients, requires caching, background revalidation, deduplication, and can become stale at any time (e.g. user profiles, product listings). Client State is synchronous, ephemeral UI state owned entirely by the browser (e.g. modal isOpen, dark mode, selected tab). Storing server data in traditional Redux requires manual boilerplate for loading flags, error handling, cache timers, and synchronization that dedicated server-state managers (TanStack Query, RTK Query) handle automatically.",
      "Separating server cache from client UI state eliminates 70%+ of custom Redux boilerplate."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "state-management",
      "server-state",
      "client-state",
      "tanstack-query",
      "redux"
    ],
    "followUpQuestions": [
      "What happens when two users edit the same entity in a server-state vs client-state model?",
      "How does staleTime differ from gcTime (cacheTime) in TanStack Query?",
      "When would you still need client state management if you use TanStack Query?"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How does Zustand achieve fine-grained component re-rendering without the Provider wrapper overhead of React Context?",
    "answer": "Zustand creates a vanilla JavaScript store outside the React Fiber tree. Inside components, the useStore hook uses React 18 useSyncExternalStore with selector functions (e.g. useStore(state => state.bears)). Zustand subscribes the component directly to that specific slice of state. When the store updates, only components whose selected slice changed (by Object.is equality) re-render, completely bypassing parent component trees and eliminating Provider wrappers.",
    "explanation": "Subscribing at the leaf level prevents the cascading re-render problems inherent to React Context.",
    "interviewAnswer": "Zustand creates a vanilla JavaScript store outside the React Fiber tree. Inside components, the useStore hook uses React 18 useSyncExternalStore with selector functions (e.g. useStore(state => state.bears)). Zustand subscribes the component directly to that specific slice of state. When the store updates, only components whose selected slice changed (by Object.is equality) re-render, completely bypassing parent component trees and eliminating Provider wrappers. Subscribing at the leaf level prevents the cascading re-render problems inherent to React Context.",
    "importantPoints": [
      "Zustand creates a vanilla JavaScript store outside the React Fiber tree. Inside components, the useStore hook uses React 18 useSyncExternalStore with selector functions (e.g. useStore(state => state.bears)). Zustand subscribes the component directly to that specific slice of state. When the store updates, only components whose selected slice changed (by Object.is equality) re-render, completely bypassing parent component trees and eliminating Provider wrappers.",
      "Subscribing at the leaf level prevents the cascading re-render problems inherent to React Context."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "state-management",
      "zustand",
      "usesyncexternalstore",
      "selectors"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How does Redux Toolkit (RTK) eliminate legacy Redux boilerplate, and how does createSlice use Immer internally?",
    "answer": "RTK provides createSlice, which combines actions, action types, and reducer logic into a single definition. Under the hood, createSlice wraps reducers in Immer draft proxies, allowing developers to write direct mutating syntax (state.items.push(action.payload)) while Immer immutably produces the next state with structural sharing.",
    "explanation": "RTK also bundles configureStore with Redux Thunk and Redux DevTools enabled by default.",
    "interviewAnswer": "RTK provides createSlice, which combines actions, action types, and reducer logic into a single definition. Under the hood, createSlice wraps reducers in Immer draft proxies, allowing developers to write direct mutating syntax (state.items.push(action.payload)) while Immer immutably produces the next state with structural sharing. RTK also bundles configureStore with Redux Thunk and Redux DevTools enabled by default.",
    "importantPoints": [
      "RTK provides createSlice, which combines actions, action types, and reducer logic into a single definition. Under the hood, createSlice wraps reducers in Immer draft proxies, allowing developers to write direct mutating syntax (state.items.push(action.payload)) while Immer immutably produces the next state with structural sharing.",
      "RTK also bundles configureStore with Redux Thunk and Redux DevTools enabled by default."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "state-management",
      "redux-toolkit",
      "immer",
      "createslice"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "What is the \"Atomic State\" paradigm represented by Jotai and Recoil, and how does it compare to centralized stores like Redux?",
    "answer": "In the atomic model, state is broken down into independent, composable units called \"atoms\" (e.g. const countAtom = atom(0)). Components subscribe directly to individual atoms or derived atoms (selectors). Unlike centralized monolithic stores where an action passes through a single root reducer, atomic updates only notify components reading that specific atom, enabling bottom-up state composition.",
    "explanation": "Atoms can be dynamically created and garbage collected with the component lifecycle.",
    "interviewAnswer": "In the atomic model, state is broken down into independent, composable units called \"atoms\" (e.g. const countAtom = atom(0)). Components subscribe directly to individual atoms or derived atoms (selectors). Unlike centralized monolithic stores where an action passes through a single root reducer, atomic updates only notify components reading that specific atom, enabling bottom-up state composition. Atoms can be dynamically created and garbage collected with the component lifecycle.",
    "importantPoints": [
      "In the atomic model, state is broken down into independent, composable units called \"atoms\" (e.g. const countAtom = atom(0)). Components subscribe directly to individual atoms or derived atoms (selectors). Unlike centralized monolithic stores where an action passes through a single root reducer, atomic updates only notify components reading that specific atom, enabling bottom-up state composition.",
      "Atoms can be dynamically created and garbage collected with the component lifecycle."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "jotai",
      "recoil",
      "atomic-state"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How do you normalize nested relational data in Redux using createEntityAdapter, and why is normalization essential for performance?",
    "answer": "createEntityAdapter manages collections in normalized format: { ids: [1, 2], entities: { 1: {...}, 2: {...} } }. It provides pre-built CRUD reducers (addOne, upsertMany, removeOne) and selectors. Normalization is essential because updating a single nested comment or author in an unnormalized tree requires cloning the entire parent post array, whereas normalized updates are O(1) hash lookups without nested data duplication.",
    "explanation": "Eliminates redundant copies of the same entity across different views.",
    "interviewAnswer": "createEntityAdapter manages collections in normalized format: { ids: [1, 2], entities: { 1: {...}, 2: {...} } }. It provides pre-built CRUD reducers (addOne, upsertMany, removeOne) and selectors. Normalization is essential because updating a single nested comment or author in an unnormalized tree requires cloning the entire parent post array, whereas normalized updates are O(1) hash lookups without nested data duplication. Eliminates redundant copies of the same entity across different views.",
    "importantPoints": [
      "createEntityAdapter manages collections in normalized format: { ids: [1, 2], entities: { 1: {...}, 2: {...} } }. It provides pre-built CRUD reducers (addOne, upsertMany, removeOne) and selectors. Normalization is essential because updating a single nested comment or author in an unnormalized tree requires cloning the entire parent post array, whereas normalized updates are O(1) hash lookups without nested data duplication.",
      "Eliminates redundant copies of the same entity across different views."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "react",
      "state-management",
      "redux-toolkit",
      "normalization",
      "createentityadapter"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How does createAsyncThunk in Redux Toolkit handle lifecycle action dispatches (pending, fulfilled, rejected)?",
    "answer": "When dispatched, createAsyncThunk immediately dispatches the action.pending action. When the payload creator promise resolves, it dispatches action.fulfilled with the returned data. If the promise rejects, it dispatches action.rejected with the error payload. Reducers listen to these actions via extraReducers builder cases to update loading states cleanly.",
    "explanation": "Standardizes asynchronous request state transitions across the application.",
    "interviewAnswer": "When dispatched, createAsyncThunk immediately dispatches the action.pending action. When the payload creator promise resolves, it dispatches action.fulfilled with the returned data. If the promise rejects, it dispatches action.rejected with the error payload. Reducers listen to these actions via extraReducers builder cases to update loading states cleanly. Standardizes asynchronous request state transitions across the application.",
    "importantPoints": [
      "When dispatched, createAsyncThunk immediately dispatches the action.pending action. When the payload creator promise resolves, it dispatches action.fulfilled with the returned data. If the promise rejects, it dispatches action.rejected with the error payload. Reducers listen to these actions via extraReducers builder cases to update loading states cleanly.",
      "Standardizes asynchronous request state transitions across the application."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "redux-toolkit",
      "createasyncthunk",
      "async"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How do you implement an Optimistic Update in TanStack Query when a user clicks \"Like\" on a post?",
    "answer": "In useMutation: 1) onMutate: cancel outgoing queries (queryClient.cancelQueries({ queryKey })), snapshot previous post data (queryClient.getQueryData), and optimistically update cache (queryClient.setQueryData) with like count + 1. 2) onError: rollback cache to the snapshot. 3) onSettled: invalidate query (queryClient.invalidateQueries) to synchronize with true server state.",
    "explanation": "Provides an instantaneous UI response while gracefully handling network failures.",
    "interviewAnswer": "In useMutation: 1) onMutate: cancel outgoing queries (queryClient.cancelQueries({ queryKey })), snapshot previous post data (queryClient.getQueryData), and optimistically update cache (queryClient.setQueryData) with like count + 1. 2) onError: rollback cache to the snapshot. 3) onSettled: invalidate query (queryClient.invalidateQueries) to synchronize with true server state. Provides an instantaneous UI response while gracefully handling network failures.",
    "importantPoints": [
      "In useMutation: 1) onMutate: cancel outgoing queries (queryClient.cancelQueries({ queryKey })), snapshot previous post data (queryClient.getQueryData), and optimistically update cache (queryClient.setQueryData) with like count + 1. 2) onError: rollback cache to the snapshot. 3) onSettled: invalidate query (queryClient.invalidateQueries) to synchronize with true server state.",
      "Provides an instantaneous UI response while gracefully handling network failures."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "react",
      "state-management",
      "tanstack-query",
      "optimistic-updates",
      "mutations"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "What are the three core principles of Redux architecture?",
    "answer": "1) Single Source of Truth: the global state of the application is stored in a single object tree within a single store. 2) State is Read-Only: the only way to change the state is to dispatch an action object describing what happened. 3) Changes are Made with Pure Functions: reducers are pure functions that take (previousState, action) and return nextState without mutating inputs.",
    "explanation": "Enables predictable state transitions, time-travel debugging, and centralized logging.",
    "interviewAnswer": "1) Single Source of Truth: the global state of the application is stored in a single object tree within a single store. 2) State is Read-Only: the only way to change the state is to dispatch an action object describing what happened. 3) Changes are Made with Pure Functions: reducers are pure functions that take (previousState, action) and return nextState without mutating inputs. Enables predictable state transitions, time-travel debugging, and centralized logging.",
    "importantPoints": [
      "1) Single Source of Truth: the global state of the application is stored in a single object tree within a single store. 2) State is Read-Only: the only way to change the state is to dispatch an action object describing what happened. 3) Changes are Made with Pure Functions: reducers are pure functions that take (previousState, action) and return nextState without mutating inputs.",
      "Enables predictable state transitions, time-travel debugging, and centralized logging."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "redux",
      "principles",
      "core-concepts"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How does Redux Middleware work, and what is the signature of a custom Redux middleware function?",
    "answer": "Redux middleware wraps the store's dispatch method, intercepting actions before they reach reducers to perform logging, async work, routing, or crash reporting. Its signature is curried with three levels: const myMiddleware = storeAPI => next => action => { ... return next(action); }.",
    "explanation": "Calling next(action) passes the action to the next middleware or reducer in the pipeline.",
    "interviewAnswer": "Redux middleware wraps the store's dispatch method, intercepting actions before they reach reducers to perform logging, async work, routing, or crash reporting. Its signature is curried with three levels: const myMiddleware = storeAPI => next => action => { ... return next(action); }. Calling next(action) passes the action to the next middleware or reducer in the pipeline.",
    "importantPoints": [
      "Redux middleware wraps the store's dispatch method, intercepting actions before they reach reducers to perform logging, async work, routing, or crash reporting. Its signature is curried with three levels: const myMiddleware = storeAPI => next => action => { ... return next(action); }.",
      "Calling next(action) passes the action to the next middleware or reducer in the pipeline."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "redux",
      "middleware",
      "currying"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How does Reselect createSelector memoize computations, and why should you avoid creating selectors inline inside components?",
    "answer": "createSelector takes input selectors and a transform function. It memoizes the result: if input selector outputs match previous inputs (via ===), it skips the transform function and returns the cached result. Creating selectors inline inside components creates a new selector instance on every render, destroying its memoization cache on every pass.",
    "explanation": "Define memoized selectors at the module scope or instantiate per-component with useMemo.",
    "interviewAnswer": "createSelector takes input selectors and a transform function. It memoizes the result: if input selector outputs match previous inputs (via ===), it skips the transform function and returns the cached result. Creating selectors inline inside components creates a new selector instance on every render, destroying its memoization cache on every pass. Define memoized selectors at the module scope or instantiate per-component with useMemo.",
    "importantPoints": [
      "createSelector takes input selectors and a transform function. It memoizes the result: if input selector outputs match previous inputs (via ===), it skips the transform function and returns the cached result. Creating selectors inline inside components creates a new selector instance on every render, destroying its memoization cache on every pass.",
      "Define memoized selectors at the module scope or instantiate per-component with useMemo."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "react",
      "state-management",
      "reselect",
      "selectors",
      "memoization"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "When should application state be stored in the URL query string instead of in-memory state managers like Redux or Zustand?",
    "answer": "State should be in the URL whenever it represents user navigation, filters, sorting, search queries, pagination, or tab selection that should be bookmarkable, shareable via link, or support browser back/forward navigation. If an in-memory store is used, refreshing the page or sharing the link resets the user's view.",
    "explanation": "The URL is the most accessible, durable state store in web applications.",
    "interviewAnswer": "State should be in the URL whenever it represents user navigation, filters, sorting, search queries, pagination, or tab selection that should be bookmarkable, shareable via link, or support browser back/forward navigation. If an in-memory store is used, refreshing the page or sharing the link resets the user's view. The URL is the most accessible, durable state store in web applications.",
    "importantPoints": [
      "State should be in the URL whenever it represents user navigation, filters, sorting, search queries, pagination, or tab selection that should be bookmarkable, shareable via link, or support browser back/forward navigation. If an in-memory store is used, refreshing the page or sharing the link resets the user's view.",
      "The URL is the most accessible, durable state store in web applications."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "url-state",
      "routing",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "What is a State Machine (such as XState), and how does it prevent \"impossible states\" compared to multiple boolean flags?",
    "answer": "With multiple booleans ({ isLoading, isError, isSuccess }), you can easily encounter impossible states like { isLoading: true, isSuccess: true }. A finite state machine defines explicit discrete states (\"idle\", \"loading\", \"success\", \"failure\") and strict transitions between them. It is mathematically impossible to be in two states at once or make an invalid transition.",
    "explanation": "Essential for mission-critical workflows like checkout funnels and authentication flows.",
    "interviewAnswer": "With multiple booleans ({ isLoading, isError, isSuccess }), you can easily encounter impossible states like { isLoading: true, isSuccess: true }. A finite state machine defines explicit discrete states (\"idle\", \"loading\", \"success\", \"failure\") and strict transitions between them. It is mathematically impossible to be in two states at once or make an invalid transition. Essential for mission-critical workflows like checkout funnels and authentication flows.",
    "importantPoints": [
      "With multiple booleans ({ isLoading, isError, isSuccess }), you can easily encounter impossible states like { isLoading: true, isSuccess: true }. A finite state machine defines explicit discrete states (\"idle\", \"loading\", \"success\", \"failure\") and strict transitions between them. It is mathematically impossible to be in two states at once or make an invalid transition.",
      "Essential for mission-critical workflows like checkout funnels and authentication flows."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "react",
      "state-management",
      "xstate",
      "state-machines",
      "impossible-states"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How does Zustand handle transient updates (subscribing to state without triggering React re-renders) for 60 FPS animations?",
    "answer": "Zustand stores expose an api.subscribe method: const unsub = useStore.subscribe(state => state.position, pos => { domRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`; }). This listens to store changes and mutates DOM styles directly without entering the React render lifecycle.",
    "explanation": "Perfect for game loops, drag-and-drop, and high-speed scroll synchronization.",
    "interviewAnswer": "Zustand stores expose an api.subscribe method: const unsub = useStore.subscribe(state => state.position, pos => { domRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`; }). This listens to store changes and mutates DOM styles directly without entering the React render lifecycle. Perfect for game loops, drag-and-drop, and high-speed scroll synchronization.",
    "importantPoints": [
      "Zustand stores expose an api.subscribe method: const unsub = useStore.subscribe(state => state.position, pos => { domRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`; }). This listens to store changes and mutates DOM styles directly without entering the React render lifecycle.",
      "Perfect for game loops, drag-and-drop, and high-speed scroll synchronization."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "zustand",
      "transient-updates",
      "60fps"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "What is the purpose of RTK Query, and how does it compare with TanStack Query (React Query)?",
    "answer": "RTK Query is an advanced data fetching and caching tool built into Redux Toolkit. It integrates directly with Redux store, Redux DevTools, and action dispatchers. TanStack Query is framework-agnostic, works independently of Redux, has a broader ecosystem for React, Vue, Svelte, and features simpler API primitives without Redux dependency.",
    "explanation": "Use RTK Query if you already use Redux Toolkit; use TanStack Query if you want lightweight, specialized server cache.",
    "interviewAnswer": "RTK Query is an advanced data fetching and caching tool built into Redux Toolkit. It integrates directly with Redux store, Redux DevTools, and action dispatchers. TanStack Query is framework-agnostic, works independently of Redux, has a broader ecosystem for React, Vue, Svelte, and features simpler API primitives without Redux dependency. Use RTK Query if you already use Redux Toolkit; use TanStack Query if you want lightweight, specialized server cache.",
    "importantPoints": [
      "RTK Query is an advanced data fetching and caching tool built into Redux Toolkit. It integrates directly with Redux store, Redux DevTools, and action dispatchers. TanStack Query is framework-agnostic, works independently of Redux, has a broader ecosystem for React, Vue, Svelte, and features simpler API primitives without Redux dependency.",
      "Use RTK Query if you already use Redux Toolkit; use TanStack Query if you want lightweight, specialized server cache."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "rtk-query",
      "tanstack-query",
      "comparison"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "Why does mutating state directly inside a classic Redux reducer without Immer break time-travel debugging and component re-renders?",
    "answer": "Classic Redux and useSelector rely on reference equality (prevState === nextState). If you mutate the existing state object directly, prevState and nextState point to the exact same modified object in memory. useSelector evaluates them as identical and skips re-rendering, while Redux DevTools loses historical state snapshots.",
    "explanation": "Reducers must always return new object references for modified state paths.",
    "interviewAnswer": "Classic Redux and useSelector rely on reference equality (prevState === nextState). If you mutate the existing state object directly, prevState and nextState point to the exact same modified object in memory. useSelector evaluates them as identical and skips re-rendering, while Redux DevTools loses historical state snapshots. Reducers must always return new object references for modified state paths.",
    "importantPoints": [
      "Classic Redux and useSelector rely on reference equality (prevState === nextState). If you mutate the existing state object directly, prevState and nextState point to the exact same modified object in memory. useSelector evaluates them as identical and skips re-rendering, while Redux DevTools loses historical state snapshots.",
      "Reducers must always return new object references for modified state paths."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "redux",
      "immutability",
      "devtools"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How do you persist state across page reloads in Zustand using its built-in persist middleware?",
    "answer": "Wrap the store creator in persist(): export const useStore = create(persist((set) => ({ count: 0, inc: () => set(s => ({ count: s.count + 1 })) }), { name: \"app-storage\", storage: createJSONStorage(() => localStorage) }));. Zustand automatically handles serialization, deserialization, and hydration synchronization.",
    "explanation": "Supports custom storage adapters like sessionStorage, IndexedDB, or AsyncStorage for mobile.",
    "interviewAnswer": "Wrap the store creator in persist(): export const useStore = create(persist((set) => ({ count: 0, inc: () => set(s => ({ count: s.count + 1 })) }), { name: \"app-storage\", storage: createJSONStorage(() => localStorage) }));. Zustand automatically handles serialization, deserialization, and hydration synchronization. Supports custom storage adapters like sessionStorage, IndexedDB, or AsyncStorage for mobile.",
    "importantPoints": [
      "Wrap the store creator in persist(): export const useStore = create(persist((set) => ({ count: 0, inc: () => set(s => ({ count: s.count + 1 })) }), { name: \"app-storage\", storage: createJSONStorage(() => localStorage) }));. Zustand automatically handles serialization, deserialization, and hydration synchronization.",
      "Supports custom storage adapters like sessionStorage, IndexedDB, or AsyncStorage for mobile."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "zustand",
      "persist",
      "localstorage"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "What causes the \"Zombie Child\" problem in older versions of React-Redux, and how did modern React resolve it?",
    "answer": "A zombie child occurs when a parent and child both subscribe to Redux. If a parent deletes a child entity from state, but the child's store subscription listener runs BEFORE the parent renders, the child selector tries to access the deleted entity and crashes with null reference errors. Modern React-Redux resolved this using unstable_batchedUpdates and React 18 useSyncExternalStore.",
    "explanation": "useSyncExternalStore guarantees top-down, synchronous store consistency across the Fiber tree.",
    "interviewAnswer": "A zombie child occurs when a parent and child both subscribe to Redux. If a parent deletes a child entity from state, but the child's store subscription listener runs BEFORE the parent renders, the child selector tries to access the deleted entity and crashes with null reference errors. Modern React-Redux resolved this using unstable_batchedUpdates and React 18 useSyncExternalStore. useSyncExternalStore guarantees top-down, synchronous store consistency across the Fiber tree.",
    "importantPoints": [
      "A zombie child occurs when a parent and child both subscribe to Redux. If a parent deletes a child entity from state, but the child's store subscription listener runs BEFORE the parent renders, the child selector tries to access the deleted entity and crashes with null reference errors. Modern React-Redux resolved this using unstable_batchedUpdates and React 18 useSyncExternalStore.",
      "useSyncExternalStore guarantees top-down, synchronous store consistency across the Fiber tree."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "zombie-child",
      "react-redux",
      "usesyncexternalstore"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How do you structure a multi-feature enterprise Redux Toolkit store cleanly?",
    "answer": "Create a features/ directory containing isolated feature slices (e.g. auth/authSlice.ts, products/productsSlice.ts, cart/cartSlice.ts). Each feature folder encapsulates its slice, async thunks, and selectors. In store.ts, combine slice reducers in configureStore({ reducer: { auth: authReducer, products: productsReducer, cart: cartReducer } }).",
    "explanation": "Modular feature-based organization promotes maintainability and scalability in large teams.",
    "interviewAnswer": "Create a features/ directory containing isolated feature slices (e.g. auth/authSlice.ts, products/productsSlice.ts, cart/cartSlice.ts). Each feature folder encapsulates its slice, async thunks, and selectors. In store.ts, combine slice reducers in configureStore({ reducer: { auth: authReducer, products: productsReducer, cart: cartReducer } }). Modular feature-based organization promotes maintainability and scalability in large teams.",
    "importantPoints": [
      "Create a features/ directory containing isolated feature slices (e.g. auth/authSlice.ts, products/productsSlice.ts, cart/cartSlice.ts). Each feature folder encapsulates its slice, async thunks, and selectors. In store.ts, combine slice reducers in configureStore({ reducer: { auth: authReducer, products: productsReducer, cart: cartReducer } }).",
      "Modular feature-based organization promotes maintainability and scalability in large teams."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "redux-toolkit",
      "folder-structure",
      "enterprise"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "What is the role of action creators in Redux, and why are they preferred over raw action objects in dispatch?",
    "answer": "Action creators are functions that return an action object: const addItem = (item) => ({ type: \"cart/addItem\", payload: item }). They encapsulate payload validation, centralize action type strings to prevent typo bugs, and abstract away internal action formatting from UI components.",
    "explanation": "createSlice in RTK automatically generates type-safe action creators for every reducer.",
    "interviewAnswer": "Action creators are functions that return an action object: const addItem = (item) => ({ type: \"cart/addItem\", payload: item }). They encapsulate payload validation, centralize action type strings to prevent typo bugs, and abstract away internal action formatting from UI components. createSlice in RTK automatically generates type-safe action creators for every reducer.",
    "importantPoints": [
      "Action creators are functions that return an action object: const addItem = (item) => ({ type: \"cart/addItem\", payload: item }). They encapsulate payload validation, centralize action type strings to prevent typo bugs, and abstract away internal action formatting from UI components.",
      "createSlice in RTK automatically generates type-safe action creators for every reducer."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "redux",
      "action-creators",
      "best-practices"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How does SWR (Stale-While-Revalidate) handle automatic revalidation on browser window focus and network reconnect?",
    "answer": "SWR attaches global window listeners to \"visibilitychange\", \"focus\", and \"online\" events. When a user switches back to the browser tab or regains Wi-Fi connectivity, SWR automatically fires a background revalidation query to refresh stale data without requiring manual refresh.",
    "explanation": "Ensures users always see up-to-date data when returning to the application.",
    "interviewAnswer": "SWR attaches global window listeners to \"visibilitychange\", \"focus\", and \"online\" events. When a user switches back to the browser tab or regains Wi-Fi connectivity, SWR automatically fires a background revalidation query to refresh stale data without requiring manual refresh. Ensures users always see up-to-date data when returning to the application.",
    "importantPoints": [
      "SWR attaches global window listeners to \"visibilitychange\", \"focus\", and \"online\" events. When a user switches back to the browser tab or regains Wi-Fi connectivity, SWR automatically fires a background revalidation query to refresh stale data without requiring manual refresh.",
      "Ensures users always see up-to-date data when returning to the application."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "swr",
      "revalidation",
      "window-focus"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "Why should you avoid storing derived data in Redux store state (e.g. storing filteredTodos alongside todos)?",
    "answer": "Storing derived data creates redundant state that must be manually synchronized whenever base state changes, leading to desynchronization bugs. Instead, store only the minimal raw state (todos and filterKey) and compute derived data dynamically using memoized selectors (Reselect / createSelector).",
    "explanation": "Keep state normalized, minimal, and single-source.",
    "interviewAnswer": "Storing derived data creates redundant state that must be manually synchronized whenever base state changes, leading to desynchronization bugs. Instead, store only the minimal raw state (todos and filterKey) and compute derived data dynamically using memoized selectors (Reselect / createSelector). Keep state normalized, minimal, and single-source.",
    "importantPoints": [
      "Storing derived data creates redundant state that must be manually synchronized whenever base state changes, leading to desynchronization bugs. Instead, store only the minimal raw state (todos and filterKey) and compute derived data dynamically using memoized selectors (Reselect / createSelector).",
      "Keep state normalized, minimal, and single-source."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "derived-state",
      "normalization",
      "reselect"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How do you create a parameterized selector in Reselect that accepts props (e.g. selectTodoById)?",
    "answer": "Create a selector function that accepts (state, id): const selectTodoById = createSelector([selectTodos, (state, id) => id], (todos, id) => todos[id]);. To ensure memoization across multiple component instances, create a unique selector instance per component using useMemo inside the component.",
    "explanation": "Instance-bound selectors prevent components with different IDs from continuously clearing each other's memoization cache.",
    "interviewAnswer": "Create a selector function that accepts (state, id): const selectTodoById = createSelector([selectTodos, (state, id) => id], (todos, id) => todos[id]);. To ensure memoization across multiple component instances, create a unique selector instance per component using useMemo inside the component. Instance-bound selectors prevent components with different IDs from continuously clearing each other's memoization cache.",
    "importantPoints": [
      "Create a selector function that accepts (state, id): const selectTodoById = createSelector([selectTodos, (state, id) => id], (todos, id) => todos[id]);. To ensure memoization across multiple component instances, create a unique selector instance per component using useMemo inside the component.",
      "Instance-bound selectors prevent components with different IDs from continuously clearing each other's memoization cache."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "reselect",
      "parameterized-selectors",
      "memoization"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "What is the difference between Redux Thunk and Redux Saga for asynchronous side effects management?",
    "answer": "Redux Thunk is simple and functional: action creators return a function (dispatch, getState) => Promise, ideal for 95% of standard CRUD requests. Redux Saga uses ES6 Generator functions (yield takeEvery, yield call) to orchestrate complex asynchronous workflows, supporting cancellation, debouncing, race conditions, and retry loops via declarative effects.",
    "explanation": "Sagas have higher learning curves but excel at complex event-driven enterprise workflows.",
    "interviewAnswer": "Redux Thunk is simple and functional: action creators return a function (dispatch, getState) => Promise, ideal for 95% of standard CRUD requests. Redux Saga uses ES6 Generator functions (yield takeEvery, yield call) to orchestrate complex asynchronous workflows, supporting cancellation, debouncing, race conditions, and retry loops via declarative effects. Sagas have higher learning curves but excel at complex event-driven enterprise workflows.",
    "importantPoints": [
      "Redux Thunk is simple and functional: action creators return a function (dispatch, getState) => Promise, ideal for 95% of standard CRUD requests. Redux Saga uses ES6 Generator functions (yield takeEvery, yield call) to orchestrate complex asynchronous workflows, supporting cancellation, debouncing, race conditions, and retry loops via declarative effects.",
      "Sagas have higher learning curves but excel at complex event-driven enterprise workflows."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "redux-thunk",
      "redux-saga",
      "generators"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How does Jotai handle asynchronous state dependencies cleanly using React Suspense?",
    "answer": "In Jotai, an atom can return a Promise: const userAtom = atom(async (get) => fetchUser(get(idAtom))). When a component reads userAtom via useAtom(userAtom), Jotai automatically suspends the component until the promise resolves, integrating seamlessly with React <Suspense> boundaries without manual isLoading booleans.",
    "explanation": "Combines reactive atom graphs with native React Concurrent primitives.",
    "interviewAnswer": "In Jotai, an atom can return a Promise: const userAtom = atom(async (get) => fetchUser(get(idAtom))). When a component reads userAtom via useAtom(userAtom), Jotai automatically suspends the component until the promise resolves, integrating seamlessly with React <Suspense> boundaries without manual isLoading booleans. Combines reactive atom graphs with native React Concurrent primitives.",
    "importantPoints": [
      "In Jotai, an atom can return a Promise: const userAtom = atom(async (get) => fetchUser(get(idAtom))). When a component reads userAtom via useAtom(userAtom), Jotai automatically suspends the component until the promise resolves, integrating seamlessly with React <Suspense> boundaries without manual isLoading booleans.",
      "Combines reactive atom graphs with native React Concurrent primitives."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "jotai",
      "suspense",
      "async-atoms"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How can you inspect and debug Redux state actions in production using Redux DevTools extension safely?",
    "answer": "In configureStore, pass devTools: process.env.NODE_ENV !== \"production\" or configure actionSanitizer/stateSanitizer options to strip sensitive customer data (passwords, tokens, PII) before sending actions to the DevTools extension.",
    "explanation": "Prevents security leaks and browser extension exploits in production.",
    "interviewAnswer": "In configureStore, pass devTools: process.env.NODE_ENV !== \"production\" or configure actionSanitizer/stateSanitizer options to strip sensitive customer data (passwords, tokens, PII) before sending actions to the DevTools extension. Prevents security leaks and browser extension exploits in production.",
    "importantPoints": [
      "In configureStore, pass devTools: process.env.NODE_ENV !== \"production\" or configure actionSanitizer/stateSanitizer options to strip sensitive customer data (passwords, tokens, PII) before sending actions to the DevTools extension.",
      "Prevents security leaks and browser extension exploits in production."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Production / Real-World",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "redux-devtools",
      "security",
      "production"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "What is the difference between shallow equality and deep equality in Zustand selectors?",
    "answer": "By default, Zustand uses Object.is() reference equality. If a selector returns a new object { a: state.a, b: state.b }, the component re-renders every time because the object reference changes. Passing useShallow (from zustand/shallow) compares properties shallowly, preventing re-renders if a and b have identical primitive values.",
    "explanation": "Essential when selecting multiple properties into a single combined object.",
    "interviewAnswer": "By default, Zustand uses Object.is() reference equality. If a selector returns a new object { a: state.a, b: state.b }, the component re-renders every time because the object reference changes. Passing useShallow (from zustand/shallow) compares properties shallowly, preventing re-renders if a and b have identical primitive values. Essential when selecting multiple properties into a single combined object.",
    "importantPoints": [
      "By default, Zustand uses Object.is() reference equality. If a selector returns a new object { a: state.a, b: state.b }, the component re-renders every time because the object reference changes. Passing useShallow (from zustand/shallow) compares properties shallowly, preventing re-renders if a and b have identical primitive values.",
      "Essential when selecting multiple properties into a single combined object."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "zustand",
      "shallow-equality",
      "optimization"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "Why does TanStack Query treat cached data as \"stale\" immediately (staleTime: 0) by default?",
    "answer": "Defaulting to staleTime: 0 ensures that data is always treated as potentially outdated, prompting immediate background revalidation whenever a component mounts or windows refocus. It guarantees users see cached data instantly while refreshing in the background without serving permanently stale content.",
    "explanation": "You can increase staleTime (e.g. 5 minutes) for data that rarely changes to reduce network requests.",
    "interviewAnswer": "Defaulting to staleTime: 0 ensures that data is always treated as potentially outdated, prompting immediate background revalidation whenever a component mounts or windows refocus. It guarantees users see cached data instantly while refreshing in the background without serving permanently stale content. You can increase staleTime (e.g. 5 minutes) for data that rarely changes to reduce network requests.",
    "importantPoints": [
      "Defaulting to staleTime: 0 ensures that data is always treated as potentially outdated, prompting immediate background revalidation whenever a component mounts or windows refocus. It guarantees users see cached data instantly while refreshing in the background without serving permanently stale content.",
      "You can increase staleTime (e.g. 5 minutes) for data that rarely changes to reduce network requests."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "tanstack-query",
      "staletime",
      "caching"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How do you reset all slices in a Redux store when a user logs out?",
    "answer": "In your root reducer, intercept a global logout action: const rootReducer = (state, action) => { if (action.type === \"auth/logout\") { state = undefined; } return appReducer(state, action); };. Setting state to undefined forces all slice reducers to re-initialize to their default initial state.",
    "explanation": "Guarantees that sensitive user data and previous session states are completely purged on logout.",
    "interviewAnswer": "In your root reducer, intercept a global logout action: const rootReducer = (state, action) => { if (action.type === \"auth/logout\") { state = undefined; } return appReducer(state, action); };. Setting state to undefined forces all slice reducers to re-initialize to their default initial state. Guarantees that sensitive user data and previous session states are completely purged on logout.",
    "importantPoints": [
      "In your root reducer, intercept a global logout action: const rootReducer = (state, action) => { if (action.type === \"auth/logout\") { state = undefined; } return appReducer(state, action); };. Setting state to undefined forces all slice reducers to re-initialize to their default initial state.",
      "Guarantees that sensitive user data and previous session states are completely purged on logout."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "state-management",
      "redux",
      "logout",
      "root-reducer"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How does Valtio use JavaScript Proxies to achieve state management in React?",
    "answer": "Valtio creates a mutable proxy object: const state = proxy({ count: 0 }). Components read it with useSnapshot(state). When state is mutated directly (state.count++), Valtio's proxy intercepts the mutation, creates an immutable frozen snapshot, and automatically triggers re-renders only for components reading modified properties.",
    "explanation": "Enables mental model of direct object mutation with automatic React reactivity.",
    "interviewAnswer": "Valtio creates a mutable proxy object: const state = proxy({ count: 0 }). Components read it with useSnapshot(state). When state is mutated directly (state.count++), Valtio's proxy intercepts the mutation, creates an immutable frozen snapshot, and automatically triggers re-renders only for components reading modified properties. Enables mental model of direct object mutation with automatic React reactivity.",
    "importantPoints": [
      "Valtio creates a mutable proxy object: const state = proxy({ count: 0 }). Components read it with useSnapshot(state). When state is mutated directly (state.count++), Valtio's proxy intercepts the mutation, creates an immutable frozen snapshot, and automatically triggers re-renders only for components reading modified properties.",
      "Enables mental model of direct object mutation with automatic React reactivity."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "valtio",
      "proxies",
      "snapshots"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "Why should you avoid dispatching multiple consecutive Redux actions inside an async loop?",
    "answer": "Dispatching actions sequentially inside a loop runs every middleware and subscriber for each dispatch, causing multiple intermediate re-renders and potential race conditions. Instead, batch the updates into a single action containing an array of changes, or update state once after the loop finishes.",
    "explanation": "Batching actions preserves transactional integrity and minimizes render overhead.",
    "interviewAnswer": "Dispatching actions sequentially inside a loop runs every middleware and subscriber for each dispatch, causing multiple intermediate re-renders and potential race conditions. Instead, batch the updates into a single action containing an array of changes, or update state once after the loop finishes. Batching actions preserves transactional integrity and minimizes render overhead.",
    "importantPoints": [
      "Dispatching actions sequentially inside a loop runs every middleware and subscriber for each dispatch, causing multiple intermediate re-renders and potential race conditions. Instead, batch the updates into a single action containing an array of changes, or update state once after the loop finishes.",
      "Batching actions preserves transactional integrity and minimizes render overhead."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "redux",
      "batching",
      "loops"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How can you implement an Undo/Redo feature in Redux or Zustand?",
    "answer": "Maintain three arrays in state: past, present, and future. When an action occurs, push present to past and set present to new state, clearing future. On UNDO: pop from past to become present, pushing old present to future. On REDO: pop from future to become present, pushing old present to past.",
    "explanation": "Classic memento design pattern enabled by immutable state history.",
    "interviewAnswer": "Maintain three arrays in state: past, present, and future. When an action occurs, push present to past and set present to new state, clearing future. On UNDO: pop from past to become present, pushing old present to future. On REDO: pop from future to become present, pushing old present to past. Classic memento design pattern enabled by immutable state history.",
    "importantPoints": [
      "Maintain three arrays in state: past, present, and future. When an action occurs, push present to past and set present to new state, clearing future. On UNDO: pop from past to become present, pushing old present to future. On REDO: pop from future to become present, pushing old present to past.",
      "Classic memento design pattern enabled by immutable state history."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "undo-redo",
      "design-patterns",
      "immutability"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "What is the role of extraReducers in createSlice, and how does it listen to actions generated by other slices?",
    "answer": "extraReducers allows a slice to respond to action types that were defined outside itself (such as createAsyncThunk actions or actions from other slices). Using the builder callback (builder.addCase(otherAction, (state, action) => ...)), slices can react to cross-feature events cleanly without circular dependencies.",
    "explanation": "Facilitates loose coupling across application domains.",
    "interviewAnswer": "extraReducers allows a slice to respond to action types that were defined outside itself (such as createAsyncThunk actions or actions from other slices). Using the builder callback (builder.addCase(otherAction, (state, action) => ...)), slices can react to cross-feature events cleanly without circular dependencies. Facilitates loose coupling across application domains.",
    "importantPoints": [
      "extraReducers allows a slice to respond to action types that were defined outside itself (such as createAsyncThunk actions or actions from other slices). Using the builder callback (builder.addCase(otherAction, (state, action) => ...)), slices can react to cross-feature events cleanly without circular dependencies.",
      "Facilitates loose coupling across application domains."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "redux-toolkit",
      "extrareducers",
      "architecture"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How does URL state management with libraries like nuqs (Next.js URL Query State) provide type-safe query parameters in React?",
    "answer": "nuqs provides type-safe custom hooks: const [count, setCount] = useQueryState(\"count\", parseAsInteger.withDefault(0)). It synchronizes React state bidirectionally with URL search parameters, handling serialization, browser history push/replace, and typing automatically without manual router queries.",
    "explanation": "Bridges the gap between URL parameters and reactive component state.",
    "interviewAnswer": "nuqs provides type-safe custom hooks: const [count, setCount] = useQueryState(\"count\", parseAsInteger.withDefault(0)). It synchronizes React state bidirectionally with URL search parameters, handling serialization, browser history push/replace, and typing automatically without manual router queries. Bridges the gap between URL parameters and reactive component state.",
    "importantPoints": [
      "nuqs provides type-safe custom hooks: const [count, setCount] = useQueryState(\"count\", parseAsInteger.withDefault(0)). It synchronizes React state bidirectionally with URL search parameters, handling serialization, browser history push/replace, and typing automatically without manual router queries.",
      "Bridges the gap between URL parameters and reactive component state."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "url-state",
      "nuqs",
      "nextjs"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "What is the danger of storing non-serializable values (Promises, Symbols, Map, Set, functions) in a Redux store?",
    "answer": "Non-serializable values break Redux DevTools time-travel debugging, prevent state persistence (localStorage / Redux Persist), and break hydration in SSR. Redux Toolkit includes a serializability middleware by default that logs runtime warnings if non-serializable values are detected.",
    "explanation": "Keep Redux state strictly composed of plain serializable JavaScript objects and arrays.",
    "interviewAnswer": "Non-serializable values break Redux DevTools time-travel debugging, prevent state persistence (localStorage / Redux Persist), and break hydration in SSR. Redux Toolkit includes a serializability middleware by default that logs runtime warnings if non-serializable values are detected. Keep Redux state strictly composed of plain serializable JavaScript objects and arrays.",
    "importantPoints": [
      "Non-serializable values break Redux DevTools time-travel debugging, prevent state persistence (localStorage / Redux Persist), and break hydration in SSR. Redux Toolkit includes a serializability middleware by default that logs runtime warnings if non-serializable values are detected.",
      "Keep Redux state strictly composed of plain serializable JavaScript objects and arrays."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "redux",
      "serialization",
      "best-practices"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How do you unit test a Redux Toolkit reducer in complete isolation?",
    "answer": "Because reducers are pure functions, you invoke them directly with state and an action: const nextState = myReducer(initialState, myAction(\"payload\")); expect(nextState.value).toBe(\"payload\");. No React components, mocks, or store harnesses are required.",
    "explanation": "Pure reducers are the easiest code in a frontend application to test with 100% test coverage.",
    "interviewAnswer": "Because reducers are pure functions, you invoke them directly with state and an action: const nextState = myReducer(initialState, myAction(\"payload\")); expect(nextState.value).toBe(\"payload\");. No React components, mocks, or store harnesses are required. Pure reducers are the easiest code in a frontend application to test with 100% test coverage.",
    "importantPoints": [
      "Because reducers are pure functions, you invoke them directly with state and an action: const nextState = myReducer(initialState, myAction(\"payload\")); expect(nextState.value).toBe(\"payload\");. No React components, mocks, or store harnesses are required.",
      "Pure reducers are the easiest code in a frontend application to test with 100% test coverage."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "testing",
      "redux-toolkit",
      "unit-tests"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How does TanStack Query handle infinite scrolling pagination with useInfiniteQuery?",
    "answer": "useInfiniteQuery manages multiple pages of data in a pages array. It accepts getNextPageParam to extract the next page token/cursor from the last API response. Calling fetchNextPage() fetches the subsequent page and automatically appends it to the cache without overwriting prior pages.",
    "explanation": "Standard implementation for infinite feeds and dynamic pagination.",
    "interviewAnswer": "useInfiniteQuery manages multiple pages of data in a pages array. It accepts getNextPageParam to extract the next page token/cursor from the last API response. Calling fetchNextPage() fetches the subsequent page and automatically appends it to the cache without overwriting prior pages. Standard implementation for infinite feeds and dynamic pagination.",
    "importantPoints": [
      "useInfiniteQuery manages multiple pages of data in a pages array. It accepts getNextPageParam to extract the next page token/cursor from the last API response. Calling fetchNextPage() fetches the subsequent page and automatically appends it to the cache without overwriting prior pages.",
      "Standard implementation for infinite feeds and dynamic pagination."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "tanstack-query",
      "infinite-query",
      "pagination"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "What is the trade-off of using a single global store versus multiple modular domain stores in Zustand?",
    "answer": "Single global store: easier time-travel debugging, easier cross-slice actions, single point of persistence. Multiple domain stores (useUserStore, useCartStore): better code-splitting, tighter encapsulation, no risk of naming collisions, and smaller bundle chunks loaded only when respective features mount.",
    "explanation": "Zustand officially recommends splitting into multiple small domain stores for modularity.",
    "interviewAnswer": "Single global store: easier time-travel debugging, easier cross-slice actions, single point of persistence. Multiple domain stores (useUserStore, useCartStore): better code-splitting, tighter encapsulation, no risk of naming collisions, and smaller bundle chunks loaded only when respective features mount. Zustand officially recommends splitting into multiple small domain stores for modularity.",
    "importantPoints": [
      "Single global store: easier time-travel debugging, easier cross-slice actions, single point of persistence. Multiple domain stores (useUserStore, useCartStore): better code-splitting, tighter encapsulation, no risk of naming collisions, and smaller bundle chunks loaded only when respective features mount.",
      "Zustand officially recommends splitting into multiple small domain stores for modularity."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "zustand",
      "architecture",
      "store-design"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "Why should you avoid using Redux state as a scratchpad for high-frequency user typing in large textareas?",
    "answer": "Dispatching actions and running Redux middlewares on every keystroke in a 10,000-character document triggers global store updates and potential selector checks on every frame, introducing typing latency. Instead, keep the textarea state local (or uncontrolled) and only dispatch to Redux on blur or debounced pause.",
    "explanation": "Confining high-velocity ephemeral drafts to local component state preserves 60 FPS responsiveness.",
    "interviewAnswer": "Dispatching actions and running Redux middlewares on every keystroke in a 10,000-character document triggers global store updates and potential selector checks on every frame, introducing typing latency. Instead, keep the textarea state local (or uncontrolled) and only dispatch to Redux on blur or debounced pause. Confining high-velocity ephemeral drafts to local component state preserves 60 FPS responsiveness.",
    "importantPoints": [
      "Dispatching actions and running Redux middlewares on every keystroke in a 10,000-character document triggers global store updates and potential selector checks on every frame, introducing typing latency. Instead, keep the textarea state local (or uncontrolled) and only dispatch to Redux on blur or debounced pause.",
      "Confining high-velocity ephemeral drafts to local component state preserves 60 FPS responsiveness."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "redux",
      "typing-latency",
      "performance"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How do you coordinate dependent queries in TanStack Query where Query B depends on the ID returned by Query A?",
    "answer": "Use the enabled option: const { data: user } = useQuery({ queryKey: [\"user\"], queryFn: fetchUser }); const { data: orders } = useQuery({ queryKey: [\"orders\", user?.id], queryFn: () => fetchOrders(user.id), enabled: !!user?.id });. Query B remains in idle state until user.id is defined.",
    "explanation": "Declaratively orchestrates sequential asynchronous data dependencies.",
    "interviewAnswer": "Use the enabled option: const { data: user } = useQuery({ queryKey: [\"user\"], queryFn: fetchUser }); const { data: orders } = useQuery({ queryKey: [\"orders\", user?.id], queryFn: () => fetchOrders(user.id), enabled: !!user?.id });. Query B remains in idle state until user.id is defined. Declaratively orchestrates sequential asynchronous data dependencies.",
    "importantPoints": [
      "Use the enabled option: const { data: user } = useQuery({ queryKey: [\"user\"], queryFn: fetchUser }); const { data: orders } = useQuery({ queryKey: [\"orders\", user?.id], queryFn: () => fetchOrders(user.id), enabled: !!user?.id });. Query B remains in idle state until user.id is defined.",
      "Declaratively orchestrates sequential asynchronous data dependencies."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "react",
      "state-management",
      "tanstack-query",
      "dependent-queries",
      "async"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "state-management",
    "question": "How does React 19 Action and Server Action model influence traditional state management choices?",
    "answer": "React 19 Server Actions handle data mutations, revalidations, and form states directly on the server without client API endpoints or client mutation boilerplate. Combined with useActionState and useOptimistic, simple CRUD applications can eliminate client-side state managers entirely, reserving them only for complex offline-first or highly interactive client canvases.",
    "explanation": "Shifts boilerplate from client state libraries back to standard web platform primitives.",
    "interviewAnswer": "React 19 Server Actions handle data mutations, revalidations, and form states directly on the server without client API endpoints or client mutation boilerplate. Combined with useActionState and useOptimistic, simple CRUD applications can eliminate client-side state managers entirely, reserving them only for complex offline-first or highly interactive client canvases. Shifts boilerplate from client state libraries back to standard web platform primitives.",
    "importantPoints": [
      "React 19 Server Actions handle data mutations, revalidations, and form states directly on the server without client API endpoints or client mutation boilerplate. Combined with useActionState and useOptimistic, simple CRUD applications can eliminate client-side state managers entirely, reserving them only for complex offline-first or highly interactive client canvases.",
      "Shifts boilerplate from client state libraries back to standard web platform primitives."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "react",
      "state-management",
      "react19",
      "server-actions",
      "future-architecture"
    ]
  }
];
