# React.js Interview Answers — Set 3 (Questions 101–150)

> Target: React.js interview preparation for around 3 years of experience  
> Format: Definition → Simple Explanation (English) → Simple Explanation (Hindi)  
> Source: Questions 101–150 from the provided React.js interview question document.

---

## 101. What happens when `useEffect` has an empty dependency array?

### Definition
An Effect with an empty dependency array has no reactive dependencies and runs after the initial commit of that component instance, with cleanup when the Effect is removed.

### Simple Explanation — English
With `useEffect(() => { ... }, [])`, React does not re-run the Effect because of changes to props or state used outside the dependency list. It is commonly used for synchronization that needs to be established when the component instance starts. In development Strict Mode, you may still see setup and cleanup happen more than once as a development check.

### Simple Explanation — Hindi
`useEffect(() => { ... }, [])` mein dependency list empty hoti hai, isliye props ya state change hone par Effect normally dobara run nahi hota. Ye un cases mein useful hota hai jahan component instance start hone par koi synchronization establish karni ho. Development Strict Mode mein extra setup/cleanup dikh sakta hai.

---

## 102. What happens when one of an Effect's dependencies changes?

### Definition
When a dependency changes, React cleans up the previous Effect and then runs the Effect again after the new render commits.

### Simple Explanation — English
Suppose an Effect depends on `roomId`. When `roomId` changes, React does not keep using the old synchronization. It first runs the cleanup from the previous Effect, then starts the new Effect using the latest values. This keeps subscriptions and other external resources aligned with current props and state.

### Simple Explanation — Hindi
Agar Effect `roomId` par depend karta hai aur `roomId` change ho jata hai, to React purane Effect ka cleanup run karta hai aur phir latest value ke saath Effect dobara run karta hai. Isse subscription ya external connection current data ke saath synchronized rehta hai.

---

## 103. What is the cleanup function of `useEffect` used for?

### Definition
The cleanup function reverses or releases the external work created by an Effect.

### Simple Explanation — English
Cleanup is important for things such as event listeners, timers, subscriptions, WebSocket connections, and third-party resources. If the Effect adds something, the cleanup should normally remove or stop it. Good cleanup prevents duplicate work, stale subscriptions, and resource leaks.

### Simple Explanation — Hindi
Cleanup function ka kaam Effect ke through create kiye gaye external work ko remove ya stop karna hota hai. Jaise event listener hatana, timer clear karna, subscription unsubscribe karna ya WebSocket close karna. Proper cleanup se duplicate work aur memory/resource leaks avoid hote hain.

---

## 104. When does React run an Effect cleanup function?

### Definition
React runs Effect cleanup before the Effect re-synchronizes because dependencies changed, and when the component is removed from the tree.

### Simple Explanation — English
If an Effect depends on a value and that value changes, React cleans up the previous synchronization before starting the new one. When the component is unmounted, cleanup is also performed. In development Strict Mode, an additional setup-cleanup cycle may be used for checking.

### Simple Explanation — Hindi
Dependency change hone par React pehle purane Effect ka cleanup karta hai aur phir new Effect setup karta hai. Component tree se remove hone par bhi cleanup run hota hai. Strict Mode development mein extra cleanup cycle bhi dekhne ko mil sakti hai.

---

## 105. How do you clean up a subscription or event listener in `useEffect`?

### Definition
Register the subscription or listener inside the Effect and return a cleanup function that removes exactly that subscription or listener.

### Simple Explanation — English
For example, if you call `window.addEventListener('resize', handler)`, the cleanup should call `window.removeEventListener('resize', handler)` with the same handler reference. This ensures the listener does not accumulate across renders. The same pattern applies to subscriptions.

### Simple Explanation — Hindi
Effect ke andar listener ya subscription add karo aur cleanup mein exactly usi listener ya subscription ko remove karo. Jaise `addEventListener` ke saath jo handler use hua hai, cleanup mein same handler ke saath `removeEventListener` use karna chahiye. Isse multiple listeners accumulate nahi honge.

---

## 106. How do you prevent race conditions in Effects that fetch data?

### Definition
A race condition occurs when multiple asynchronous requests overlap and an older response updates the UI after a newer request has already started or completed.

### Simple Explanation — English
A common solution is to cancel the previous request with `AbortController` or keep track of whether the current Effect is still active. When dependencies change, the old request is cleaned up. Only the response belonging to the current request should update the component's state.

### Simple Explanation — Hindi
Race condition tab hoti hai jab multiple API requests ek saath chal rahi hoti hain aur purani request ka response nayi request ke baad UI ko overwrite kar deta hai. Isko prevent karne ke liye `AbortController` se old request cancel kar sakte hain ya active request ko track kar sakte hain. Sirf current request ka result state update kare.

---

## 107. How do stale closures occur inside React Effects?

### Definition
A stale closure happens when an asynchronous callback or Effect callback keeps references to values from an older render.

### Simple Explanation — English
A function created during one render captures the values from that render. If an async callback later runs without the correct dependencies or another mechanism for current values, it can read old state or props. Correct dependencies, functional updates, or refs can help depending on the problem.

### Simple Explanation — Hindi
Har render ke time functions current render ke values ko capture karte hain. Agar async callback baad mein run ho aur usme old render ke values captured hon, to stale closure problem ho sakti hai. Situation ke according correct dependencies, functional updater ya ref use kiya ja sakta hai.

---

## 108. How can you avoid stale values inside asynchronous callbacks?

### Definition
You can avoid stale values by using correct Effect dependencies, functional state updates, or a ref when you intentionally need the latest mutable value.

### Simple Explanation — English
If the new state depends on previous state, use a functional updater such as `setCount(c => c + 1)`. If an async callback must always read the latest value, a ref can store that latest value. If the callback should be recreated when a value changes, put that value in the appropriate dependency list.

### Simple Explanation — Hindi
Previous state par depend karne wale update ke liye functional updater use karo. Agar async callback ko latest value directly read karni hai, to ref useful ho sakta hai. Aur agar callback ko value change hone par recreate hona chahiye, to correct dependency list maintain karo.

---

## 109. What is `useRef`, and how is it different from `useState`?

### Definition
`useRef` stores a mutable value that persists across renders without causing a re-render when changed, while `useState` stores state whose updates schedule re-renders.

### Simple Explanation — English
A ref is useful for values that React does not need to render, such as a DOM node, timer ID, or latest mutable value. State is for data that affects what the UI should display. Changing `ref.current` does not normally update the screen, while changing state schedules rendering.

### Simple Explanation — Hindi
`useRef` aisi mutable value store karta hai jo renders ke beech persist karti hai lekin `ref.current` change karne se normally re-render nahi hota. `useState` UI-related data ke liye hota hai aur setter call karne par re-render schedule hota hai. Ref DOM node ya timer ID ke liye bhi useful hai.

---

## 110. When should you store a value in a ref instead of state?

### Definition
Use a ref when the value must persist between renders but changing it should not itself cause a UI update.

### Simple Explanation — English
Examples include interval IDs, previous values, DOM references, or mutable values used by an event callback. If the user should see the new value in the rendered UI, state is usually the correct choice. The key question is whether the value affects rendering.

### Simple Explanation — Hindi
Ref tab use karo jab value ko renders ke beech preserve karna ho, lekin value change hone par UI ko re-render karna zaroori na ho. Timer ID, DOM reference, previous value aur mutable callback data common examples hain. Agar value UI mein dikhni hai, to state better choice hoti hai.

---

## 111. Does updating a ref trigger a re-render? Why?

### Definition
No. Updating `ref.current` does not trigger a re-render because refs are mutable containers that React does not use as a rendering signal.

### Simple Explanation — English
React tracks state updates to schedule renders, but changing `ref.current` is just a normal mutation of the ref object. This is why refs are useful for storing information that should survive renders but should not cause the component to render again.

### Simple Explanation — Hindi
Nahi. `ref.current` change karne se normally re-render trigger nahi hota. React state updates ko rendering signal ke roop mein use karta hai, jabki ref ek mutable container hota hai. Isi wajah se refs non-UI values ke liye useful hain.

---

## 112. How can `useRef` be used to access a DOM element?

### Definition
Pass a ref object to a DOM element through its `ref` prop and read the actual element from `ref.current`.

### Simple Explanation — English
For example, an input can receive `ref={inputRef}`. After the element is mounted, `inputRef.current` points to the input DOM node. This can be used for imperative operations such as focusing or selecting text.

### Simple Explanation — Hindi
DOM element ko `ref` prop ke through ref object assign kiya ja sakta hai, jaise `ref={inputRef}`. Mount hone ke baad `inputRef.current` mein actual DOM element milta hai. Isse input ko focus ya select kar sakte hain.

---

## 113. How can `useRef` store an interval or timeout ID?

### Definition
A ref can hold a timer ID so the same ID can be accessed across renders and cleared later.

### Simple Explanation — English
You can store the return value of `setInterval` or `setTimeout` in `ref.current`. During cleanup, call `clearInterval` or `clearTimeout` using that stored ID. This works well because changing the timer ID does not need a re-render.

### Simple Explanation — Hindi
`setInterval` ya `setTimeout` se milne wali ID ko `ref.current` mein store kiya ja sakta hai. Cleanup mein us ID ko use karke `clearInterval` ya `clearTimeout` call kar sakte hain. Ref isliye suitable hai kyunki timer ID change hone se UI re-render nahi chahiye.

---

## 114. What is `useContext` used for?

### Definition
`useContext` lets a component read a value from the nearest matching React Context provider without passing that value through every intermediate component.

### Simple Explanation — English
It is useful for shared values such as theme, locale, authentication information, or other data consumed by many parts of a component tree. A component calls `useContext` with the context object and receives the current provided value.

### Simple Explanation — Hindi
`useContext` ka use Context se value directly read karne ke liye hota hai. Isse har intermediate component ke through props pass karne ki zarurat nahi hoti. Theme, language, authentication-related shared information jaise cases mein Context useful ho sakta hai.

---

## 115. How does context differ from passing props?

### Definition
Props pass data explicitly from parent to child, while Context lets matching descendants read a shared value from a provider without explicit prop passing through each level.

### Simple Explanation — English
Props make the data flow visible and local: you can see where the value comes from. Context reduces repeated prop passing when many descendants need the same value. However, Context should not automatically replace props; for simple parent-child communication, props are often clearer.

### Simple Explanation — Hindi
Props mein parent explicitly child ko data pass karta hai, isliye data flow clear hota hai. Context mein provider ke andar ke descendants shared value directly read kar sakte hain. Lekin simple parent-child communication ke liye props usually easier aur clearer hote hain.

---

## 116. What happens to consumers when a context value changes?

### Definition
Components that read a context can re-render when the value provided by the nearest matching provider changes.

### Simple Explanation — English
Context updates are propagated to consumers that use that context. Therefore, putting frequently changing data into a broadly used Context can cause many components to update. Splitting contexts or keeping frequently changing state local can reduce unnecessary work.

### Simple Explanation — Hindi
Jab Context provider ki value change hoti hai, to us Context ko consume karne wale components re-render ho sakte hain. Agar ek hi broad Context mein frequently changing data hai aur bahut components usse use karte hain, to unnecessary renders badh sakte hain. Contexts ko logically split karna helpful ho sakta hai.

---

## 117. How can context cause unnecessary re-renders?

### Definition
Context can cause unnecessary re-renders when a provider's value changes frequently or contains multiple unrelated values consumed by many components.

### Simple Explanation — English
For example, if a provider creates a new object on every render, consumers can observe a changed context value even when the meaningful data did not change. Splitting contexts, moving state closer to consumers, or stabilizing the provided value when appropriate can help. The right solution depends on the actual render pattern.

### Simple Explanation — Hindi
Agar provider har render par new object value create karta hai, to consumers ko changed context value mil sakti hai even when meaningful data same ho. Context ko split karna, state ko relevant components ke close rakhna, ya appropriate case mein value ko stabilize karna unnecessary re-renders ko reduce kar sakta hai.

---

## 118. When should you use `useReducer` instead of `useState`?

### Definition
`useReducer` is useful when state transitions are complex, related, or easier to express as explicit actions rather than many independent setters.

### Simple Explanation — English
If you have a small piece of state with one or two simple updates, `useState` is usually enough. If multiple values change together, many events can affect the same state, or transition rules are becoming complicated, `useReducer` can make the logic more predictable and centralized.

### Simple Explanation — Hindi
Simple state aur simple updates ke liye `useState` enough hota hai. Lekin jab multiple related values hon, different actions same state ko change karte hon, ya update rules complex ho rahe hon, tab `useReducer` better ho sakta hai. Isse state transitions centralized aur easier to reason about hote hain.

---

## 119. How does `useReducer` work?

### Definition
`useReducer` stores state and updates it by dispatching actions to a reducer function that returns the next state.

### Simple Explanation — English
A reducer receives the current state and an action, then calculates the next state. The component calls `dispatch(action)` instead of directly setting a value. This makes state transitions explicit, especially when there are multiple ways to modify related state.

### Simple Explanation — Hindi
`useReducer` mein current state aur action reducer function ko milte hain. Reducer next state return karta hai. Component directly state change karne ke bajay `dispatch(action)` call karta hai. Ye complex state transitions ko organized rakhne mein helpful hai.

---

## 120. What makes a reducer function a good reducer for React state management?

### Definition
A good reducer is predictable, focused on state transitions, and returns a new state without performing unrelated side effects.

### Simple Explanation — English
A reducer should be easy to test: same state plus same action should produce the same next state. It should not perform API calls, timers, random operations, or other external side effects. It should also avoid mutating existing state directly unless using an abstraction that intentionally provides immutable updates.

### Simple Explanation — Hindi
Good reducer predictable aur easy to test hona chahiye. Same state aur same action se same next state milni chahiye. Reducer ke andar API call, timer ya random side effect nahi karna chahiye. State ko direct mutate karne ke bajay proper immutable update approach use karni chahiye.

---

# 5. Hooks — Advanced & Custom Hooks

## 121. What is a custom Hook?

### Definition
A custom Hook is a reusable JavaScript function whose name starts with `use` and that can use React Hooks to share stateful logic.

### Simple Explanation — English
A custom Hook does not share the same state instance between components. Instead, it shares the logic used to manage that state. For example, `useOnlineStatus()` can contain the subscription logic needed by many components, while each component using it has its own Hook state.

### Simple Explanation — Hindi
Custom Hook ek reusable function hota hai jiska naam normally `use` se start hota hai aur uske andar React Hooks use kiye ja sakte hain. Ye components ke beech same state share nahi karta; ye stateful logic reuse karta hai. Jaise `useOnlineStatus()` ka logic multiple components use kar sakte hain.

---

## 122. What rules must custom Hooks follow?

### Definition
Custom Hooks follow the Rules of Hooks, meaning they must call Hooks only at the top level and from React components or other custom Hooks.

### Simple Explanation — English
A custom Hook can call `useState`, `useEffect`, `useRef`, or other Hooks, but those calls must follow the same ordering rules. The custom Hook itself should be called consistently from a component or another custom Hook, not conditionally inside arbitrary code.

### Simple Explanation — Hindi
Custom Hook ko bhi Rules of Hooks follow karne hote hain. Iske andar `useState`, `useEffect` etc. top level par call hone chahiye. Custom Hook ko bhi component ya another custom Hook se consistent way mein call karna chahiye.

---

## 123. What is the difference between reusing stateful logic and sharing the same state?

### Definition
Reusing stateful logic means multiple components use the same logic independently, while sharing the same state means those components read and update one common state instance.

### Simple Explanation — English
Two components can both call `useOnlineStatus()` and each Hook handles its own subscription logic and state. That is logic reuse, not state sharing. If both need one shared value, they need a common owner such as a parent, Context, or state-management store.

### Simple Explanation — Hindi
Agar do components same custom Hook use karte hain, to dono same logic reuse kar rahe hain, lekin unki state instances alag ho sakti hain. Same state share karne ke liye common state owner chahiye, jaise parent component, Context ya global store.

---

## 124. When should logic be extracted into a custom Hook?

### Definition
Extract logic into a custom Hook when the same stateful behavior is reused or when separating complex stateful behavior improves component readability.

### Simple Explanation — English
A good candidate is logic involving state, Effects, subscriptions, event listeners, or repeated async behavior. If logic is used only once and already reads clearly inside the component, extraction may add unnecessary indirection. The goal is useful reuse or cleaner responsibility boundaries.

### Simple Explanation — Hindi
Custom Hook tab banana chahiye jab same stateful behavior multiple places par reuse ho raha ho ya complex logic component ko difficult bana rahi ho. State, Effect, subscription, event listener aur async logic good candidates hain. Sirf code ko alag file mein move karne ke liye custom Hook banana zaroori nahi hai.

---

## 125. How would you build a `useFetch` custom Hook?

### Definition
A `useFetch` Hook can encapsulate API request state such as loading, data, error, request cancellation, and synchronization with a request input.

### Simple Explanation — English
I would decide the Hook's API first, for example a URL or request function and optional configuration. Internally it can track `data`, `loading`, and `error`, start the request in an Effect when the relevant input changes, and use cleanup to cancel or ignore stale requests. In a production application, I would also consider whether a dedicated server-state library already solves this problem.

### Simple Explanation — Hindi
`useFetch` Hook ke andar `data`, `loading` aur `error` state rakh sakte hain. Relevant URL ya request input change hone par Effect API call start karega. Cleanup ke through old request ko cancel ya ignore kiya ja sakta hai. Production app mein existing server-state solution bhi evaluate karna chahiye.

---

## 126. How would you build a `useDebounce` custom Hook?

### Definition
A `useDebounce` Hook delays updating a value until the input has remained unchanged for a specified amount of time.

### Simple Explanation — English
The Hook can keep a stateful debounced value and use an Effect with a timer. Every time the original value changes, the previous timer is cleared and a new timer starts. After the delay, the debounced value is updated. This is useful for search inputs and similar interactions.

### Simple Explanation — Hindi
`useDebounce` input value ko immediately update nahi karta. Value change hote hi previous timer clear karke new timer start hota hai. Agar delay tak value change nahi hoti, tab debounced value update hoti hai. Search boxes mein ye bahut useful hai.

---

## 127. How would you build a `usePrevious` custom Hook?

### Definition
A `usePrevious` Hook stores the value from the previous render in a ref and returns that stored value.

### Simple Explanation — English
Because refs persist across renders without causing a re-render, a Hook can update `ref.current` in an Effect after rendering and return the ref's previous value. This lets a component compare current and previous props or state. The exact timing matters because the previous value becomes available according to when the ref is updated.

### Simple Explanation — Hindi
`usePrevious` mein ref ka use karke previous value store ki ja sakti hai. Ref render ke beech value preserve karta hai aur ref update se re-render nahi hota. Current aur previous props/state compare karne ke liye ye useful hai.

---

## 128. How would you build a `useLocalStorage` custom Hook?

### Definition
A `useLocalStorage` Hook synchronizes React state with a browser `localStorage` entry.

### Simple Explanation — English
I would initialize state from `localStorage`, handle missing or invalid stored data, and write updated state back to storage when the value changes. If the Hook must support SSR, browser access should happen only where `window` and `localStorage` are available. Storage errors should also be handled safely.

### Simple Explanation — Hindi
`useLocalStorage` Hook initial value ko `localStorage` se read kar sakta hai aur state change hone par updated value storage mein save kar sakta hai. SSR environment mein `window` aur `localStorage` browser-only hain, isliye unka access safely handle karna chahiye. Invalid data aur storage errors bhi handle karne chahiye.

---

## 129. How would you build a `useOnlineStatus` custom Hook?

### Definition
A `useOnlineStatus` Hook exposes the browser's current online/offline status and updates when that status changes.

### Simple Explanation — English
The Hook can read the initial status and subscribe to browser `online` and `offline` events. The subscription is established in an Effect and removed in cleanup. The Hook returns a boolean such as `isOnline` so components can render an appropriate message or behavior.

### Simple Explanation — Hindi
`useOnlineStatus` browser ka current online/offline status track kar sakta hai. Initial status read karke `online` aur `offline` browser events ko subscribe kiya ja sakta hai. Cleanup mein listeners remove kiye jayenge aur Hook `isOnline` jaisi boolean value return karega.

---

## 130. How would you build a reusable `useInterval` Hook correctly?

### Definition
A reusable `useInterval` Hook should run the latest callback on a schedule while safely managing timer setup and cleanup.

### Simple Explanation — English
A common challenge is stale callback values. One approach is to store the latest callback in a ref while the interval itself depends only on the delay. When the delay changes, the old interval is cleaned up and a new one is created. On unmount, the interval must be cleared.

### Simple Explanation — Hindi
`useInterval` mein do important issues hain: timer cleanup aur stale callback. Latest callback ko ref mein rakh sakte hain aur interval ko delay ke basis par manage kar sakte hain. Delay change hone par old interval cleanup hoga aur new interval create hoga. Unmount par bhi interval clear karna zaroori hai.

---

## 131. How do custom Hooks handle cleanup?

### Definition
A custom Hook handles cleanup by returning cleanup functions from the Effects inside the Hook.

### Simple Explanation — English
The component using the Hook does not need to know every internal subscription or timer. If the Hook starts an event listener, timer, connection, or subscription, the Hook's Effect should return the corresponding cleanup. This keeps the lifecycle responsibility inside the reusable abstraction.

### Simple Explanation — Hindi
Custom Hook ke andar jo Effects hain, unke cleanup functions ke through resources clean kiye jate hain. Agar Hook listener, timer, connection ya subscription start karta hai, to cleanup bhi Hook ke andar hi hona chahiye. Isse lifecycle logic encapsulated rehta hai.

---

## 132. How can a custom Hook accept options without becoming hard to maintain?

### Definition
A custom Hook should expose a small, clear options API and keep internal implementation details hidden.

### Simple Explanation — English
I would avoid passing a huge options object containing unrelated settings. Group options by a meaningful concern, provide sensible defaults, and document what each option controls. If the Hook starts supporting many unrelated behaviors, it may be better to split it into smaller Hooks.

### Simple Explanation — Hindi
Custom Hook ko bahut bada options object dene se maintainability kharab ho sakti hai. Main related options ko logically group karunga aur sensible defaults dunga. Agar Hook bahut saare unrelated behaviors support karne lage, to usse multiple smaller Hooks mein split karna better ho sakta hai.

---

## 133. How do you avoid unnecessary re-runs inside a custom Hook?

### Definition
Avoid unnecessary re-runs by keeping Effect dependencies accurate and stable and by avoiding unnecessary object or function creation in dependency values.

### Simple Explanation — English
First, the dependency list should reflect what the Hook actually uses. Then I would inspect whether callers are passing unstable objects or functions that change on every render. Depending on the use case, moving logic, memoizing a value, or redesigning the Hook API may be better than blindly suppressing dependency warnings.

### Simple Explanation — Hindi
Pehle dependency list ko accurate rakhna chahiye. Uske baad check karna chahiye ki caller har render par new object ya function to nahi pass kar raha. Problem ke according API redesign ya value/function stabilization ki ja sakti hai; dependency warnings ko blindly ignore nahi karna chahiye.

---

## 134. How would you test a custom Hook?

### Definition
Testing a custom Hook means testing the behavior produced by the Hook, including state changes, returned values, side effects, and cleanup.

### Simple Explanation — English
I would test it through the behavior a component would observe rather than testing private implementation details. For example, for a debounce Hook, I would verify that the value updates only after the expected delay and that timers are cleaned up. For subscriptions, I would verify updates and cleanup behavior.

### Simple Explanation — Hindi
Custom Hook ko test karte waqt uska observable behavior test karna chahiye, na ki internal implementation details. `useDebounce` ke liye check karenge ki delay se pehle value update nahi hoti aur cleanup sahi hai. Subscription Hook ke liye updates aur unsubscribe behavior test karna chahiye.

---

## 135. What is `useMemo`, and what problem does it solve?

### Definition
`useMemo` caches the result of a calculation between renders until its dependencies change.

### Simple Explanation — English
It is useful when a calculation is expensive and repeating it on every render would be costly. React can reuse the previously calculated result when dependencies are unchanged. `useMemo` is a performance optimization, not a requirement for correctness in normal cases.

### Simple Explanation — Hindi
`useMemo` kisi calculation ka result cache karta hai aur dependencies same rehne par us result ko reuse kar sakta hai. Ye expensive calculations ko unnecessary repeat hone se bachane ke liye useful hai. Ye mainly performance optimization hai, correctness ke liye normally required nahi hota.

---

## 136. When is `useMemo` useful?

### Definition
`useMemo` is useful when a calculation is meaningfully expensive or when stable object identity is required for a specific optimization boundary.

### Simple Explanation — English
For example, filtering and transforming a very large dataset may justify memoization if profiling shows the calculation is expensive. It can also help keep a derived object reference stable when that stability matters to a memoized child or dependency. The benefit should be based on an actual need.

### Simple Explanation — Hindi
`useMemo` tab useful hai jab calculation genuinely expensive ho ya stable object identity ki requirement ho. Large dataset par expensive filtering/processing ek example hai. Lekin har small calculation ko automatically memoize nahi karna chahiye.

---

## 137. When can `useMemo` make code worse rather than better?

### Definition
`useMemo` can make code worse when it adds complexity or overhead without avoiding meaningful work.

### Simple Explanation — English
For cheap calculations, memoization can make the code harder to read while giving little or no performance benefit. It also requires maintaining a dependency list correctly. I would use it when profiling or a clear performance boundary justifies it, not simply because re-renders exist.

### Simple Explanation — Hindi
Agar calculation already cheap hai, to `useMemo` unnecessary complexity add kar sakta hai aur noticeable benefit nahi dega. Dependency list maintain karni padti hai, isliye debugging bhi harder ho sakti hai. Isko actual performance need ke according use karna chahiye.

---

## 138. What is `useCallback`, and what does it memoize?

### Definition
`useCallback` returns a cached function reference until its dependencies change.

### Simple Explanation — English
The function's behavior is still based on its code and captured values; `useCallback` mainly stabilizes the function identity. This can matter when passing a callback to a memoized child or when the function is itself an Effect dependency. It does not automatically make the underlying operation faster.

### Simple Explanation — Hindi
`useCallback` function reference ko cache/stabilize karta hai jab tak dependencies change na ho. Ye function ke kaam ko magically faster nahi banata. Iska main benefit function identity stable rakhna hai, especially memoized child ko callback pass karte waqt.

---

## 139. What is the difference between `useMemo` and `useCallback`?

### Definition
`useMemo` memoizes a calculated value, while `useCallback` memoizes a function reference.

### Simple Explanation — English
Think of `useMemo` as “cache this result” and `useCallback` as “cache this function identity.” For example, `useMemo` may return a filtered list, while `useCallback` may return `handleSubmit`. Both are optimizations and should be used when they solve a real problem.

### Simple Explanation — Hindi
`useMemo` value/result ko memoize karta hai, jabki `useCallback` function reference ko memoize karta hai. Simple way mein: `useMemo` = result cache karna, `useCallback` = function identity stable rakhna. Dono ka use practical performance reason ke saath karna chahiye.

---

## 140. Why does `useCallback` matter when passing callbacks to memoized children?

### Definition
`useCallback` can keep a callback reference stable so a memoized child does not re-render only because the callback prop received a new function identity.

### Simple Explanation — English
Every normal function declaration inside a component creates a new function object on each render. If a child is wrapped in `React.memo`, that changed function reference can make the child appear to have a changed prop. `useCallback` can stabilize the reference when the callback's dependencies have not changed.

### Simple Explanation — Hindi
Component ke har render mein normal function ka new reference ban sakta hai. Agar child `React.memo` se memoized hai, to new callback reference uske props ko changed bana sakta hai aur child re-render kar sakta hai. `useCallback` suitable case mein callback reference ko stable rakh sakta hai.

---

## 141. What is `React.memo`?

### Definition
`React.memo` is a higher-order optimization that lets a component skip re-rendering when its props are considered unchanged.

### Simple Explanation — English
A memoized component can avoid a render when its parent renders but the relevant props remain equal according to the comparison React uses. It is most useful when the child is expensive enough for avoiding the render to matter. It does not stop a component from rendering when its own state or consumed context changes.

### Simple Explanation — Hindi
`React.memo` component ko unnecessary re-render se bachane ke liye use kiya jata hai jab its props unchanged hain. Ye tab useful hai jab child ka render expensive ho. Lekin child ka own state ya consumed Context change ho to `memo` us render ko automatically stop nahi karta.

---

## 142. How does `React.memo` decide whether to skip a render?

### Definition
By default, `React.memo` compares the component's props using shallow reference/value comparison semantics.

### Simple Explanation — English
Primitive values are compared by value, while objects, arrays, and functions depend on reference identity. That is why passing a new object or callback on every parent render can still cause a memoized child to render again. A custom comparison function can be supplied, but it should be used carefully.

### Simple Explanation — Hindi
Default comparison mein primitive values ko value ke basis par aur objects, arrays aur functions ko reference identity ke basis par compare kiya jata hai. Isliye parent har render mein new object ya function pass kare to memoized child re-render kar sakta hai. Custom comparison possible hai, lekin carefully use karna chahiye.

---

## 143. When does `React.memo` not provide a benefit?

### Definition
`React.memo` provides little benefit when renders are already cheap, props change frequently, or the component re-renders because of its own state or context.

### Simple Explanation — English
If the child receives a new prop every time anyway, memoization may not skip much work. Wrapping every component in `React.memo` can also add mental and comparison overhead. It is better to use profiling and clear component boundaries to decide where memoization matters.

### Simple Explanation — Hindi
Agar props har render par change ho rahe hain ya component khud state/Context ki wajah se render ho raha hai, to `React.memo` ka benefit limited ho sakta hai. Har component ko memoize karna good strategy nahi hai. Actual performance issue ke basis par use karna chahiye.

---

## 144. How are `React.memo`, `useMemo`, and `useCallback` commonly used together?

### Definition
They can be combined to keep expensive calculations, object values, or callback references stable so memoized child components have a chance to skip unnecessary work.

### Simple Explanation — English
For example, a parent can use `useMemo` for an expensive derived value and `useCallback` for handlers, while the child uses `React.memo`. The combination only helps when the props are actually stable and avoiding the child's render matters. Using all three without a measured reason can add unnecessary complexity.

### Simple Explanation — Hindi
Parent `useMemo` se expensive derived value ko stable rakh sakta hai, `useCallback` se callback reference stable rakh sakta hai, aur child `React.memo` use kar sakta hai. Ye combination tabhi useful hai jab props stable rahen aur child render avoid karna meaningful ho. Bina reason sab jagah use karna unnecessary complexity hai.

---

## 145. What is `useLayoutEffect`, and when would you use it instead of `useEffect`?

### Definition
`useLayoutEffect` runs after the DOM has been updated but before the browser paints, allowing synchronous layout-related work.

### Simple Explanation — English
It is useful when you need to measure the DOM or make a visual adjustment before the user sees the result, such as positioning or measuring an element. Because it can block painting, it should not be used by default. For most external synchronization, `useEffect` is the better choice.

### Simple Explanation — Hindi
`useLayoutEffect` DOM update hone ke baad aur browser paint se pehle run hota hai. Ye DOM measure karne ya paint se pehle visual adjustment karne ke liye useful hai. Kyunki ye browser painting ko block kar sakta hai, isliye default choice nahi hona chahiye. Normal synchronization ke liye `useEffect` better hai.

---

## 146. What is `useInsertionEffect`, and when is it relevant?

### Definition
`useInsertionEffect` is a specialized Hook intended primarily for inserting styles or working with style injection before layout effects run.

### Simple Explanation — English
It was designed mainly for library authors such as CSS-in-JS libraries that need to insert styles at a specific point in the commit sequence. Application developers usually do not need it for ordinary UI logic. It is not a general replacement for `useEffect` or `useLayoutEffect`.

### Simple Explanation — Hindi
`useInsertionEffect` ek specialized Hook hai jo mainly style insertion, especially CSS-in-JS libraries, ke liye relevant hai. Normal application UI logic mein iski usually zarurat nahi hoti. Ye `useEffect` ya `useLayoutEffect` ka general replacement nahi hai.

---

## 147. What is `useId`, and what problem does it solve?

### Definition
`useId` generates a stable unique ID for accessibility attributes and related cases across client and server rendering.

### Simple Explanation — English
It is useful when a label and input need matching `id` and `htmlFor`, or when related elements need stable IDs. It helps avoid manually generating IDs that can mismatch between server-rendered and client-rendered markup. It is meant for identifier generation, not for list keys.

### Simple Explanation — Hindi
`useId` stable unique ID generate karne ke liye hota hai. Ye label aur input ke `id`/`htmlFor` relation ya accessibility attributes ke liye useful hai. SSR aur client rendering ke beech ID mismatch avoid karne mein bhi help karta hai. Ye list keys ke liye nahi hai.

---

## 148. When should `useId` not be used as a list key?

### Definition
`useId` should not be used for list keys because keys should identify data items consistently, not represent generated component or accessibility IDs.

### Simple Explanation — English
A list key should come from the item's stable identity, such as a database ID. `useId` is designed for DOM ID generation and accessibility relationships. Using it as a list key mixes two different concepts and does not solve the problem of identifying the data item.

### Simple Explanation — Hindi
List key ka purpose data item ki stable identity batana hai, isliye database ID jaise value use karni chahiye. `useId` ka purpose DOM IDs aur accessibility relationships hai. Dono concepts alag hain, isliye `useId` ko list key ke roop mein use nahi karna chahiye.

---

## 149. What is `useSyncExternalStore`, and what kind of problem does it solve?

### Definition
`useSyncExternalStore` lets React components safely subscribe to an external store or mutable data source in a way that integrates with React's rendering model.

### Simple Explanation — English
It is useful when state lives outside React, such as a custom store or another external subscription system. The Hook provides React with a subscription mechanism and a way to read the current snapshot. It is especially important for libraries that integrate external stores with modern React rendering.

### Simple Explanation — Hindi
`useSyncExternalStore` tab useful hai jab state React ke bahar kisi external store ya mutable source mein ho. Ye React ko subscription aur current snapshot read karne ka proper mechanism deta hai. External state libraries ya custom stores ko modern React rendering ke saath safely integrate karne mein ye helpful hai.

---

## 150. What is `useImperativeHandle`, and when would you use it?

### Definition
`useImperativeHandle` customizes the value exposed through a ref so a parent can access a limited imperative API from a child.

### Simple Explanation — English
For example, a custom input component may expose methods such as `focus()` or `clear()` instead of exposing all of its internal details. This can be useful for focus management, media controls, or specialized widgets. It should be used sparingly because React generally prefers declarative props and state.

### Simple Explanation — Hindi
`useImperativeHandle` ref ke through parent ko child ke selected methods expose karne deta hai. Jaise custom input component `focus()` ya `clear()` method provide kar sakta hai. Ye focus management ya special widgets ke liye useful hai, lekin generally declarative props/state ko priority deni chahiye.

---

## ✅ Set 3 Complete

**Questions covered:** 101–150  
**Format used:** Definition → Simple English → Simple Hindi  
**Source order:** Preserved from the provided 300-question document.
