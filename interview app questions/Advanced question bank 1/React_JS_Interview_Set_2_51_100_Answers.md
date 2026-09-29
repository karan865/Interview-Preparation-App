# React.js Interview Answers — Set 2 (Questions 51–100)

> Target: React.js interview preparation for around 3 years of experience  
> Format: Definition → Simple Explanation (English) → Simple Explanation (Hindi)

---

## 51. How would you design a reusable table component with sorting and pagination?

### Definition
A reusable table component is a configurable UI component that accepts data, column definitions, and behavior such as sorting and pagination through props.

### Simple Explanation — English
I would keep the table generic and avoid putting business-specific logic inside it. The parent can provide columns, rows, sorting options, pagination information, and callbacks such as `onSort` or `onPageChange`. The table should mainly handle presentation and user interaction. For large datasets, I would usually let the backend handle sorting and pagination instead of loading every record into the browser.

### Simple Explanation — Hindi
Main table ko generic aur reusable rakhunga, usme kisi specific business ka logic hard-code nahi karunga. Parent component columns, rows, sorting options, pagination aur `onSort` ya `onPageChange` jaise callbacks pass karega. Table ka main kaam UI aur user interaction handle karna hoga. Agar data bahut zyada ho, to sorting aur pagination backend par karwana better rahega.

---

## 52. How would you pass callbacks safely through multiple component levels?

### Definition
Passing callbacks through multiple component levels means sending a function from a parent component to a deeply nested child so the child can trigger an action in the parent.

### Simple Explanation — English
I would first ask whether every intermediate component really needs the callback. If not, those components should simply forward it only when necessary. If many levels are involved and the callback represents shared application behavior, Context or a state-management solution may be cleaner. I would also keep callback contracts clear and avoid passing large objects or unrelated functions.

### Simple Explanation — Hindi
Sabse pehle main check karunga ki beech ke har component ko callback ki zarurat hai ya nahi. Agar nahi hai, to unnecessary forwarding avoid karunga. Agar bahut saare levels hain aur callback shared behavior ko represent karta hai, to Context ya state-management solution better ho sakta hai. Callback ka interface simple rakhna bhi important hai.

---

## 53. How can a child component expose an imperative action to a parent?

### Definition
A child can expose an imperative API to its parent by using a ref together with `useImperativeHandle`.

### Simple Explanation — English
React generally encourages declarative communication, but sometimes a parent needs to trigger an action such as focusing an input, resetting a widget, or opening a custom control. In such cases, the child can expose selected methods through a ref using `useImperativeHandle`. I would use this only for cases where normal props and state are not a good fit.

### Simple Explanation — Hindi
React mein normally declarative approach use ki jati hai, lekin kabhi parent ko child ke kisi action ko directly trigger karna hota hai, jaise input focus karna ya custom widget reset karna. Aise case mein child `useImperativeHandle` ke through ref par selected methods expose kar sakta hai. Is approach ka use limited situations mein karna chahiye.

---

## 54. When is it appropriate to use a callback prop instead of context?

### Definition
A callback prop is appropriate when the communication path is small, local, and clear, while Context is more useful when many distant components need the same shared value or behavior.

### Simple Explanation — English
If a child just needs to notify its parent about an event, a callback prop is usually simpler and easier to understand. Context becomes useful when passing the prop would require many intermediate components or when many components at different levels consume the same data. I would not introduce Context just to avoid one or two simple prop passes.

### Simple Explanation — Hindi
Agar child ko sirf parent ko kisi event ki information deni hai, to callback prop simple aur clear hota hai. Context tab useful hota hai jab bahut saare intermediate components ke through data pass karna pade ya tree ke different parts ko same data chahiye. Sirf ek-do prop passes bachane ke liye Context add nahi karna chahiye.

---

## 55. How would you prevent a presentational component from knowing business logic?

### Definition
A presentational component should focus on displaying data and handling UI interactions, while business rules and data operations should remain outside it.

### Simple Explanation — English
I would pass already-prepared data and simple callbacks into the component. For example, a button component should not know how an order is processed; it should only receive something like `onSubmit`. Business logic can live in a container, custom Hook, service, or state layer. This makes the component easier to test and reuse.

### Simple Explanation — Hindi
Presentational component ka main kaam UI dikhana hona chahiye. Business logic uske andar nahi honi chahiye. Jaise button component ko order process kaise hota hai ye nahi pata hona chahiye; usse sirf `onSubmit` callback mil sakta hai. Business logic container, custom Hook, service ya state layer mein rakhna better hai.

---

## 56. How do you separate container logic from UI logic in a React application?

### Definition
Separating container and UI logic means keeping data fetching, state management, and business decisions separate from the components responsible mainly for rendering the interface.

### Simple Explanation — English
A container or feature-level component can manage API calls, state, derived data, and event handlers. It can then pass the required values and callbacks to a presentational component. In modern React, custom Hooks are also useful for extracting reusable logic so the UI component stays focused on rendering.

### Simple Explanation — Hindi
Container ya feature-level component API calls, state, derived data aur event handlers handle kar sakta hai. Uske baad woh required data aur callbacks UI component ko pass karega. Modern React mein custom Hooks ka use karke logic ko alag karna bhi bahut useful hai.

---

## 57. How would you design component boundaries in a large React feature?

### Definition
Component boundaries are the points where a large UI is divided into smaller components based on responsibility, reuse, state ownership, and change frequency.

### Simple Explanation — English
I would split a feature around meaningful responsibilities instead of creating tiny components for every HTML element. Components that have their own behavior or reusable responsibility deserve clearer boundaries. State should usually live close to where it is needed, while shared logic can move into a Hook or shared layer. The goal is easier maintenance rather than maximum component count.

### Simple Explanation — Hindi
Main large feature ko meaningful responsibilities ke basis par divide karunga. Har chhote HTML element ke liye alag component banana zaroori nahi hai. Jis part ka apna behavior ya reusable responsibility hai uski clear boundary honi chahiye. State ko generally uske use ke close rakhna aur shared logic ko Hook ya shared layer mein rakhna better hota hai.

---

## 58. What makes a React component reusable rather than tightly coupled?

### Definition
A reusable component has a clear interface, accepts configurable data or behavior through props, and does not depend heavily on one specific feature or business rule.

### Simple Explanation — English
A reusable component should have a predictable prop API and should not directly depend on feature-specific stores, API responses, or business decisions unless that dependency is part of its purpose. For example, a generic `Button` should know about appearance and interaction, not about a particular payment workflow. Clear boundaries and composition improve reuse.

### Simple Explanation — Hindi
Reusable component ka interface clear hona chahiye aur woh props ke through data ya behavior receive kare. Usse kisi ek feature ke API response, store ya business rule par unnecessarily depend nahi karna chahiye. Jaise generic `Button` ko payment workflow ke details nahi pata hone chahiye. Clear boundaries aur composition se reusability improve hoti hai.

---

## 59. How do you prevent a shared component from becoming a “god component”?

### Definition
A “god component” is an overly large component that tries to handle many unrelated responsibilities, making it difficult to maintain and reuse.

### Simple Explanation — English
I would watch for too many props, many unrelated pieces of state, large conditional branches, API logic, and UI logic all living together. I would split independent responsibilities into smaller components, custom Hooks, utility functions, or feature-specific modules. The shared component should contain only behavior that is genuinely shared.

### Simple Explanation — Hindi
God component mein usually bahut saare props, unrelated states, large conditions, API logic aur UI logic sab ek jagah aa jate hain. Isse bachne ke liye main independent responsibilities ko smaller components, custom Hooks, utility functions ya feature modules mein divide karunga. Shared component mein sirf genuinely shared behavior rakhunga.

---

## 60. In a real project, how do you decide whether to create a new component or keep logic in an existing one?

### Definition
The decision depends on responsibility, reuse, complexity, readability, and whether the existing component is becoming harder to understand or maintain.

### Simple Explanation — English
I create a new component when a section has a meaningful responsibility, is reused, has its own state or behavior, or makes the parent too complex. I keep it in the existing component when splitting it would only add indirection without making the code clearer. I prefer meaningful boundaries rather than componentization for its own sake.

### Simple Explanation — Hindi
Main naya component tab banata hoon jab kisi section ki clear responsibility ho, woh reuse ho raha ho, uska apna state ya behavior ho, ya parent component unnecessarily complex ho raha ho. Sirf code ko chhota dikhane ke liye component banana zaroori nahi hai. Main readability aur maintainability ko priority dunga.

---

# 3. State, Updates & Rendering Behavior

## 61. How does `useState` work at a high level?

### Definition
`useState` is a React Hook that lets a functional component store state and provides a setter function to request an update.

### Simple Explanation — English
When React renders a component with `useState`, React associates that state with the component's position in the render tree. Calling the setter schedules a new render. During that render, React provides the current state value. React therefore manages the state across renders instead of the variable being recreated as ordinary local JavaScript data.

### Simple Explanation — Hindi
`useState` functional component ko state store karne ki facility deta hai. React state ko component ke render-tree position ke saath associate karta hai. Jab setter call hota hai, React update schedule karta hai aur component dobara render hota hai. Next render mein updated state value milti hai.

---

## 62. Why does calling a state setter not immediately change the current render's state value?

### Definition
A state update schedules a new render; it does not rewrite the state value that was already captured by the current render.

### Simple Explanation — English
Each render has its own snapshot of state. If you call `setCount`, React schedules another render, but the `count` variable inside the current function still represents the current render's snapshot. This is why logging the state immediately after the setter can show the previous value.

### Simple Explanation — Hindi
Har render ke paas state ka apna snapshot hota hai. `setCount` call karne ke baad React next render schedule karta hai, lekin current function ke andar jo `count` hai woh current render ka purana snapshot hi hota hai. Isi wajah se setter ke immediately baad `console.log` karne par old value mil sakti hai.

---

## 63. What is a functional state update, and when should you use one?

### Definition
A functional state update passes a function to the state setter so the next state is calculated from the previous state.

### Simple Explanation — English
For example, `setCount(c => c + 1)` uses the latest queued state value. This is especially useful when multiple updates happen together or when the next value depends on the previous value. It avoids relying on a stale state variable from the current render.

### Simple Explanation — Hindi
Functional update mein setter ko function diya jata hai, jaise `setCount(c => c + 1)`. Ye function previous state se next state calculate karta hai. Jab multiple updates hon ya next value previous value par depend karti ho, tab ye approach safer hoti hai.

---

## 64. What happens when you call a state setter multiple times in the same event handler?

### Definition
React can batch multiple state updates, and the final result depends on whether the updates use a direct value or functional updater.

### Simple Explanation — English
If you call `setCount(count + 1)` several times, all calls may calculate from the same current render snapshot, so they can result in only one increment. If you use `setCount(c => c + 1)` repeatedly, each updater can build on the previous queued value. That is the correct approach when each update depends on the previous state.

### Simple Explanation — Hindi
Agar aap `setCount(count + 1)` ko kai baar call karte hain, to sab calls same current snapshot ke `count` se calculate ho sakti hain, isliye result ek hi increment jaisa ho sakta hai. `setCount(c => c + 1)` use karne par har updater previous queued value par kaam karta hai.

---

## 65. What is state batching in React?

### Definition
State batching means React groups multiple state updates together so that it can perform fewer renders.

### Simple Explanation — English
Instead of rendering after every individual setter call, React can group related updates and process them together. This improves efficiency and also explains why several setter calls may produce a single render rather than many separate renders.

### Simple Explanation — Hindi
State batching ka matlab hai ki React multiple state updates ko group kar sakta hai aur unhe ek saath process kar sakta hai. Isse unnecessary renders kam hote hain aur performance improve hoti hai. Isi wajah se kai setter calls ke baad sirf ek render dekhne ko mil sakta hai.

---

## 66. How does automatic batching affect updates from promises, timers, and native events?

### Definition
Automatic batching in modern React allows multiple state updates from more asynchronous contexts to be grouped into fewer renders.

### Simple Explanation — English
In modern React, updates triggered inside places such as promise callbacks and timers can also be batched. This means developers generally do not need special code just to combine these updates. The result is fewer renders and more consistent update behavior.

### Simple Explanation — Hindi
Modern React mein promise callbacks aur timers jaise asynchronous contexts ke state updates bhi batch ho sakte hain. Isliye har jagah manually updates ko combine karne ki zarurat nahi hoti. React multiple updates ko group karke renders ko reduce kar sakta hai.

---

## 67. Why can `setCount(count + 1)` produce an unexpected result when called multiple times?

### Definition
The expression uses the `count` value from the current render snapshot, so multiple calls can all calculate the same next value.

### Simple Explanation — English
Suppose `count` is 0 and you call `setCount(count + 1)` three times. Each call can request `1` because all three expressions read the same `count` value of 0. React then processes those requests. A functional updater is safer when each increment depends on the previous update.

### Simple Explanation — Hindi
Maan lo `count` 0 hai aur aap `setCount(count + 1)` teen baar call karte hain. Har call current render ke same `count = 0` ko read karke `1` request kar sakti hai. Isliye expected `3` ke badle result `1` ho sakta hai. Aise case mein functional updater use karna chahiye.

---

## 68. How would you correctly increment state several times based on the previous value?

### Definition
Use a functional updater for each state change that depends on the previous state.

### Simple Explanation — English
The standard approach is `setCount(c => c + 1)`. If you need three increments, call that updater three times. Each updater receives the most recent pending state value, so the updates can build on one another correctly.

### Simple Explanation — Hindi
Aise case mein `setCount(c => c + 1)` use karna chahiye. Agar teen increments chahiye to updater ko teen baar call kar sakte hain. Har updater latest pending state value se calculate karega, isliye updates correctly chain ho sakte hain.

---

## 69. What is lazy initialization in `useState`?

### Definition
Lazy initialization means passing a function to `useState` so React can calculate the initial state value when the state is initialized.

### Simple Explanation — English
For example, `useState(() => expensiveCalculation())` tells React to call the initializer when the initial state is needed rather than calculating the expression on every render. This is useful when the initial value requires meaningful computation or reading some initial data source.

### Simple Explanation — Hindi
Lazy initialization mein `useState` ko initial value ke badle function diya jata hai, jaise `useState(() => expensiveCalculation())`. Isse initial calculation state initialization ke time hoti hai, har render par nahi. Expensive initial calculation ke case mein ye useful hai.

---

## 70. When should you use a lazy initializer for state?

### Definition
A lazy initializer is useful when calculating the initial state is expensive or requires work that should not be repeated on every render.

### Simple Explanation — English
For a simple value like `useState(0)`, lazy initialization is unnecessary. But if the initial state requires parsing a large value, reading `localStorage`, or performing another meaningful calculation, a lazy initializer can avoid repeating that computation during renders.

### Simple Explanation — Hindi
Simple value ke liye lazy initializer ki zarurat nahi hoti, jaise `useState(0)`. Lekin agar initial state banane ke liye `localStorage` read karna, large data parse karna ya expensive calculation karna pade, tab lazy initializer useful ho sakta hai.

---

## 71. How do you update nested objects in state without mutating them?

### Definition
Create new objects for the changed levels instead of directly changing properties on the existing state object.

### Simple Explanation — English
For nested state, I would use object spread or another immutable update approach. For example, to update `user.address.city`, I would create a new `user` object and a new `address` object while keeping unchanged fields. Direct mutation can break React's change detection assumptions and make state updates harder to reason about.

### Simple Explanation — Hindi
Nested object ko direct mutate nahi karna chahiye. Main changed levels ke liye naye objects banaunga, usually spread syntax se. Agar `user.address.city` change karna hai, to new `user` aur new `address` object create karunga aur baaki fields preserve karunga.

---

## 72. How do you update an item inside an array stored in state?

### Definition
Create a new array and replace the changed item rather than mutating the existing array.

### Simple Explanation — English
Common approaches are `map`, `filter`, or spread syntax. For example, `map` can return a new updated object for the matching item and the existing item for everything else. This keeps the state update immutable and makes the change explicit.

### Simple Explanation — Hindi
Array ko directly mutate nahi karna chahiye. `map`, `filter` ya spread syntax se new array banana common approach hai. `map` se matching item ke liye updated object aur baaki items ke liye original item return kar sakte hain.

---

## 73. What is derived state, and why is duplicated derived state risky?

### Definition
Derived state is a value that can be calculated from existing props or state instead of being stored separately.

### Simple Explanation — English
For example, if `firstName` and `lastName` already exist, `fullName` usually does not need its own state. Storing it separately creates two sources of truth and can cause them to become inconsistent. It is generally cleaner to calculate simple derived values during rendering.

### Simple Explanation — Hindi
Derived state woh value hai jo already available props ya state se calculate ki ja sakti hai. Jaise `firstName` aur `lastName` se `fullName` calculate ho sakta hai, isliye `fullName` ko alag state mein rakhna zaroori nahi. Separate state rakhne se data mismatch ka risk badh jata hai.

---

## 74. When should a value be calculated during render instead of stored in state?

### Definition
A value should usually be calculated during render when it can be deterministically derived from current props or state.

### Simple Explanation — English
If a value does not represent independent user-controlled or asynchronous state, storing it can be unnecessary. For example, filtering a list based on a search term can be calculated from the list and search term. Storing the filtered result separately can create synchronization problems.

### Simple Explanation — Hindi
Agar koi value current props ya state se directly calculate ho sakti hai aur uski independent lifecycle nahi hai, to use render ke time calculate karna better hota hai. Jaise search term ke basis par list filter karna. Filtered list ko separate state mein rakhne se synchronization problem ho sakti hai.

---

## 75. What problems can arise from storing redundant state?

### Definition
Redundant state duplicates information that can already be derived from other state or props.

### Simple Explanation — English
The biggest problem is having multiple sources of truth. One value can update while the duplicated value stays old, causing bugs and extra Effects or synchronization code. Reducing unnecessary state often makes the component easier to understand and more reliable.

### Simple Explanation — Hindi
Redundant state ka main problem multiple sources of truth hona hai. Ek value update ho sakti hai lekin duplicate value purani reh sakti hai, jisse bugs aur extra synchronization code create hota hai. Unnecessary state ko avoid karne se component simple aur reliable banta hai.

---

## 76. How do you reset a component's state when a prop changes?

### Definition
State can be reset by changing the component's identity, commonly by giving it a new `key`.

### Simple Explanation — English
If a component should represent a completely new entity when a prop changes, giving it a key based on that entity can reset its internal state. Another possibility is explicitly synchronizing state from the prop, but that is a different requirement and should not be done automatically. The important question is whether the state should be reset or synchronized.

### Simple Explanation — Hindi
Agar prop change hone par component ko completely new entity maana jana chahiye, to entity-based `key` dene se uska internal state reset ho sakta hai. Lekin agar state ko prop ke saath synchronize karna hai, to woh alag requirement hai. Dono situations ko confuse nahi karna chahiye.

---

## 77. When should you use a changing `key` to reset state?

### Definition
A changing `key` should be used when you intentionally want React to treat a component as a new identity and recreate its state.

### Simple Explanation — English
A common example is a form that should start fresh when the selected user changes. If the form component receives `key={userId}`, changing the user ID creates a new component identity and resets its internal state. This is useful when resetting is the desired behavior, not as a general trick for synchronization.

### Simple Explanation — Hindi
Changing `key` tab useful hai jab aap intentionally component ko nayi identity dena chahte hain. Example ke liye, selected user change hone par form ko completely fresh start karna ho. `key={userId}` se user ID change hone par component recreate ho sakta hai aur internal state reset ho sakti hai.

---

## 78. What is the difference between resetting state and synchronizing state?

### Definition
Resetting creates fresh state for a new component identity, while synchronization keeps existing state aligned with an external prop or value.

### Simple Explanation — English
Suppose a profile form changes from user A to user B. If you want a completely fresh form, resetting state is appropriate. If you want to keep the same component state structure but update one value based on new props, synchronization may be needed. The implementation should match the intended behavior.

### Simple Explanation — Hindi
Reset ka matlab hai component ko fresh state se start karna. Synchronization ka matlab hai existing state ko kisi prop ya external value ke saath align karna. User A se User B par switch karne par agar form bilkul naya chahiye to reset useful hai; agar existing state ko update karna hai to synchronization alag approach hai.

---

## 79. Why should state updates be based on previous state when updates depend on previous values?

### Definition
When the next state depends on the previous state, a functional updater ensures React uses the correct previous queued state rather than a possibly stale render value.

### Simple Explanation — English
This matters for counters, toggles, queues, and any repeated update. `setValue(v => v + 1)` expresses the dependency directly. It remains correct even when React batches multiple updates.

### Simple Explanation — Hindi
Jab next value previous state par depend karti hai, functional updater use karna safe hota hai. Jaise `setValue(v => v + 1)`. Ye React ko clearly batata hai ki next value previous queued value se calculate karni hai. Batching ke case mein bhi ye reliable rehta hai.

---

## 80. How does React determine whether a state update results in a meaningful change?

### Definition
React uses state identity comparison to determine whether the new state is effectively the same as the previous state.

### Simple Explanation — English
For primitive values, normal value equality is straightforward. For objects and arrays, identity matters. If you create a new object, React can observe a different reference; if you mutate the existing object and set the same reference, React may treat the state as unchanged. That is one reason immutable updates are important.

### Simple Explanation — Hindi
React state update mein new state aur previous state ki identity compare karta hai. Primitive values ke liye comparison simple hota hai, lekin objects aur arrays mein reference identity important hoti hai. Agar same object ko mutate karke wahi reference set kiya jaye, React change ko expected tarike se detect nahi kar sakta.

---

## 81. What does referential equality mean in React rendering?

### Definition
Referential equality means checking whether two object, array, or function values are the exact same reference.

### Simple Explanation — English
Two objects may contain the same data but still have different references. React optimization tools such as `React.memo`, and comparison logic used by selectors or dependencies, can behave differently depending on whether the reference changed. Therefore, creating new objects unnecessarily can also trigger work.

### Simple Explanation — Hindi
Referential equality ka matlab hai check karna ki do object, array ya function exactly same reference ko point kar rahe hain ya nahi. Do objects ka data same ho sakta hai, lekin unke references different ho sakte hain. React ki optimizations mein ye distinction important hoti hai.

---

## 82. Why can mutating an object in state prevent the UI from updating as expected?

### Definition
Direct mutation keeps the same object reference, which can prevent React and related optimization logic from recognizing that the state changed.

### Simple Explanation — English
For example, changing `user.name` directly modifies the existing object. If the same object reference is then reused, React may see no meaningful identity change. Creating a new object such as `{ ...user, name: newName }` makes the update explicit and predictable.

### Simple Explanation — Hindi
Agar aap `user.name` ko directly change kar dete hain, to existing object mutate hota hai aur reference same reh sakta hai. Is wajah se React expected change detect nahi kar sakta. Better hai new object banana, jaise `{ ...user, name: newName }`.

---

## 83. What causes unnecessary re-renders in a component tree?

### Definition
Unnecessary re-renders happen when components render again even though the part of the UI they produce did not need new data.

### Simple Explanation — English
Common causes include parent state updates, changing object or function references, overly broad Context values, unstable selector results, and state being placed too high in the tree. The solution is not always memoization. First identify the actual source of the render and then choose the smallest effective change.

### Simple Explanation — Hindi
Unnecessary re-renders ke common reasons hain parent state updates, new object/function references, broad Context values, unstable selectors aur state ko tree mein unnecessarily high rakhna. Har problem ka solution `useMemo` nahi hai. Pehle actual render source identify karna chahiye.

---

## 84. How would you debug a component that re-renders too often?

### Definition
Debugging excessive re-renders means identifying which update or changing dependency is causing renders and whether those renders are actually necessary.

### Simple Explanation — English
I would use React DevTools Profiler to see which components render and why. Then I would inspect parent state changes, Context values, props, selectors, and object/function identities. I would only add `memo`, `useMemo`, or `useCallback` after identifying a real performance issue and a stable optimization boundary.

### Simple Explanation — Hindi
Main React DevTools Profiler se check karunga ki kaunse components render ho rahe hain aur render ka reason kya hai. Phir parent state, Context, props, selectors aur object/function references inspect karunga. Actual issue milne ke baad hi `memo`, `useMemo` ya `useCallback` jaisi optimization use karunga.

---

## 85. What is Strict Mode, and how can it affect rendering in development?

### Definition
React Strict Mode is a development-only tool that helps detect certain unsafe patterns and side-effect problems.

### Simple Explanation — English
Strict Mode can intentionally perform additional development checks. In some cases, React may invoke rendering-related logic or Effect setup more than once during development to expose code that is not resilient to remounting or missing cleanup. This does not mean the same behavior necessarily happens in the production build.

### Simple Explanation — Hindi
Strict Mode React ka development-time checking tool hai. Iska purpose unsafe patterns aur side-effect related problems ko detect karna hai. Development mein React kuch logic ko extra times run karke bugs expose kar sakta hai. Is behavior ko production behavior ke saath directly confuse nahi karna chahiye.

---

## 86. Why might an Effect appear to run twice in development?

### Definition
In Strict Mode development, React can run an Effect setup, perform its cleanup, and run the setup again to verify that the Effect is correctly implemented.

### Simple Explanation — English
This is a development stress test for Effect cleanup and side-effect correctness. If an Effect opens a connection, adds a listener, or starts a timer, the cleanup should properly undo that work. Seeing a setup-cleanup-setup sequence during development is often expected under Strict Mode.

### Simple Explanation — Hindi
Strict Mode ke development behavior mein React Effect ko setup, cleanup aur phir setup kar sakta hai. Iska purpose check karna hai ki Effect ka cleanup correctly implemented hai ya nahi. Agar listener, timer ya connection create kiya hai, to cleanup ko properly remove karna chahiye.

---

## 87. How does React preserve state when a component moves within the tree?

### Definition
React preserves state based primarily on a component's identity and position in the rendered tree; changing that identity or structural position can cause state to reset.

### Simple Explanation — English
State is not tied only to the component function name. React associates it with the position and identity of the component in the render tree. If the same component remains at the same logical position, its state can be preserved. If moving it changes its identity or tree position in a way React considers different, the state can be recreated.

### Simple Explanation — Hindi
React state sirf component ke function name se linked nahi hota. React component ki identity aur render tree mein uski position ko consider karta hai. Same identity aur suitable position maintain rahe to state preserve ho sakti hai. Identity ya relevant position change hone par state reset ho sakti hai.

---

## 88. How does changing a component type affect its state?

### Definition
When React sees a different component type at a position, it can treat it as a different component identity and reset the previous component's state.

### Simple Explanation — English
For example, replacing one component type with another at the same position usually means the old state does not carry over. React must create the new component instance. Therefore, changing component type is one way state can be reset.

### Simple Explanation — Hindi
Agar same position par component type change kar diya jaye, to React use different identity maan sakta hai. Purane component ka state new component ko automatically carry forward nahi hota. New component ka state fresh create ho sakta hai.

---

## 89. What happens to state when a component is conditionally removed and added again?

### Definition
When a component is removed from the render tree, its state is generally removed with that component identity; adding it again creates fresh state.

### Simple Explanation — English
For example, if `{show && <Form />}` changes from `true` to `false`, the `Form` is removed. When `show` becomes `true` again, React creates the component again and its local state starts from the initial state. Whether state is preserved depends on whether the component remains present with the same identity and position.

### Simple Explanation — Hindi
Agar `{show && <Form />}` mein `show` false ho jata hai, to `Form` tree se remove ho jata hai. Baad mein `show` true hone par component dobara create hota hai aur local state initial value se start hoti hai. State preservation identity aur position par depend karti hai.

---

## 90. How would you model complex UI state without creating many unrelated `useState` calls?

### Definition
Complex related state can often be modeled as one structured state object or with `useReducer`, especially when many transitions depend on related events.

### Simple Explanation — English
If a UI has states such as loading, selected item, filters, form values, and error transitions that interact with each other, many independent setters can become difficult to reason about. `useReducer` can centralize state transitions into explicit actions and a reducer. I would choose it when the state changes are related and the transition rules are becoming complex.

### Simple Explanation — Hindi
Agar UI mein multiple related states hain aur unke updates ek-doosre se connected hain, to bahut saare independent `useState` calls difficult ho sakte hain. Aise cases mein `useReducer` useful hai, kyunki state transitions ko actions aur reducer mein clearly define kiya ja sakta hai. Complexity badhne par ye approach easier to maintain hoti hai.

---

# 4. Hooks — Core & Essential

## 91. What are React Hooks, and why were they introduced?

### Definition
Hooks are React functions that let functional components use features such as state, Effects, refs, context, and reducers.

### Simple Explanation — English
Hooks allow stateful and reusable logic to live in function components without relying on class lifecycle methods. They also make it easier to extract related behavior into custom Hooks. The main benefit is not simply shorter code; it is better organization and reuse of stateful logic.

### Simple Explanation — Hindi
Hooks React ke functions hain jo functional components ko state, Effects, refs, context aur reducers jaise features use karne dete hain. Inke through class lifecycle methods ke bina stateful logic manage ki ja sakti hai. Custom Hooks ke through logic reuse karna bhi easy hota hai.

---

## 92. What are the Rules of Hooks?

### Definition
The Rules of Hooks require Hooks to be called only at the top level of React function components or custom Hooks and not conditionally or inside arbitrary functions.

### Simple Explanation — English
React relies on Hooks being called in a consistent order on every render. That is why a Hook should not be placed inside an `if`, loop, nested function, or event handler. Following the rules allows React to associate each Hook call with the correct stored state and behavior.

### Simple Explanation — Hindi
Hooks ko React function component ya custom Hook ke top level par call karna chahiye. Unhe `if`, loop, nested function ya event handler ke andar call nahi karna chahiye. React Hooks ko correct state ke saath map karne ke liye consistent call order par depend karta hai.

---

## 93. Why can Hooks not be called inside conditions or loops?

### Definition
Hooks must run in the same order on every render, and conditions or loops can change that order.

### Simple Explanation — English
Imagine a component calls three Hooks on one render but only two on another because an `if` condition changed. React could no longer reliably associate each Hook call with the same stored state slot. Keeping Hook calls at the top level prevents this mismatch.

### Simple Explanation — Hindi
Agar Hook condition ya loop ke andar ho, to ek render mein Hook call ho sakta hai aur doosre render mein na ho. Isse Hook call order change ho jayega aur React state ko wrong Hook ke saath associate kar sakta hai. Isi liye Hooks top level par call karne chahiye.

---

## 94. Why can Hooks not be called inside ordinary nested functions?

### Definition
Hooks must be called from React-controlled component or custom Hook execution so React can track their order consistently.

### Simple Explanation — English
An arbitrary nested function may run zero times, multiple times, or at different moments. React cannot use such calls as a stable Hook sequence. Event handlers and ordinary helper functions should call regular logic, while Hooks themselves remain at the component or custom Hook level.

### Simple Explanation — Hindi
Ordinary nested function kabhi run ho sakti hai, kabhi nahi, ya multiple times run ho sakti hai. Isliye React uske andar Hook calls ko stable sequence ke roop mein track nahi kar sakta. Event handler ke andar normal functions call kar sakte hain, lekin Hooks ko component ya custom Hook ke top level par hi rakhna chahiye.

---

## 95. What problem does `useEffect` solve?

### Definition
`useEffect` lets a component synchronize with external systems after React has committed the UI.

### Simple Explanation — English
External systems include network connections, browser APIs, subscriptions, timers, and third-party libraries. The Effect runs after rendering and can optionally return cleanup logic. It should be used for synchronization with something outside React, not simply as a place to put any code that happens after rendering.

### Simple Explanation — Hindi
`useEffect` ka main purpose React ke bahar ke systems ke saath synchronization karna hai. Ismein API interaction, subscriptions, timers, browser APIs ya third-party libraries aa sakti hain. Effect render ke baad run hota hai aur cleanup bhi return kar sakta hai.

---

## 96. When should you use `useEffect`?

### Definition
Use `useEffect` when the component needs to synchronize with an external system as a result of rendering.

### Simple Explanation — English
Typical examples are connecting to a WebSocket, subscribing to an event source, integrating a non-React library, or synchronizing a browser API. If a value can simply be calculated from props and state during render, an Effect is often unnecessary.

### Simple Explanation — Hindi
`useEffect` tab use karna chahiye jab component ko kisi external system ke saath synchronize karna ho, jaise WebSocket connection, event subscription, third-party library ya browser API. Simple derived value calculate karne ke liye Effect use karna usually unnecessary hota hai.

---

## 97. When should you avoid using `useEffect`?

### Definition
Avoid `useEffect` when the work can be performed directly during rendering or as a direct response to a user event without synchronizing with an external system.

### Simple Explanation — English
A common mistake is using an Effect to calculate derived state or handle event-specific logic. For example, if clicking a button should submit a form, do that in the event handler. If a filtered list can be calculated from existing state, calculate it during render instead of storing it through an Effect.

### Simple Explanation — Hindi
Har logic ko `useEffect` ke andar dalna sahi nahi hai. Event-specific work event handler mein hona chahiye. Derived data ko render ke time calculate kar sakte hain. Unnecessary Effects code ko complex bana dete hain aur extra renders ya synchronization bugs create kar sakte hain.

---

## 98. What is the difference between an Effect and an event handler?

### Definition
An event handler responds to a specific user interaction, while an Effect runs because rendering created a need to synchronize with an external system.

### Simple Explanation — English
A click handler runs because the user clicked. An Effect may run because a component rendered with a changed dependency and needs to synchronize something external. If the requirement is specifically “when the user does X,” an event handler is usually the clearer choice.

### Simple Explanation — Hindi
Event handler user ke specific action par run hota hai, jaise click ya submit. Effect rendering aur dependency changes ke result mein external system ko synchronize karta hai. Agar requirement hai “user ne X kiya to ye karo,” to event handler usually better choice hota hai.

---

## 99. What does the dependency array of `useEffect` mean?

### Definition
The dependency array tells React which reactive values the Effect reads and which changes should cause the Effect to re-synchronize.

### Simple Explanation — English
If an Effect reads `roomId`, for example, `roomId` should generally be a dependency. When a dependency changes, React cleans up the previous Effect if needed and runs the new setup. The dependency list is about the values used by the Effect, not simply about controlling how often it runs.

### Simple Explanation — Hindi
Dependency array batata hai ki Effect kin reactive values par depend karta hai. Agar Effect `roomId` use karta hai, to `roomId` dependency honi chahiye. Dependency change hone par React previous Effect ka cleanup karke new synchronization run kar sakta hai.

---

## 100. What happens when `useEffect` has no dependency array?

### Definition
An Effect without a dependency array runs after every committed render where the component remains mounted.

### Simple Explanation — English
That means it can run after the initial render and after later renders. Whether that is appropriate depends on what the Effect is doing. If the Effect changes state unconditionally, it can create a render loop, so the code must have a valid synchronization purpose.

### Simple Explanation — Hindi
Agar `useEffect` mein dependency array nahi hai, to component mounted rehne tak har committed render ke baad Effect run kar sakta hai. Ye tabhi sahi hai jab har render ke baad synchronization genuinely required ho. Galat implementation infinite render loop bhi create kar sakti hai.

