# React.js Interview Answers — Set 4 (Questions 151–200)

> Target: React.js interview preparation for around 3 years of experience  
> Format: Definition → Simple Explanation (English) → Simple Explanation (Hindi)  
> Source: Questions 151–200 from the provided React.js interview question document.

---

# 6. Effects, Async Work & External Systems

## 151. Why does React documentation describe Effects as an escape hatch?

### Definition
An Effect is called an escape hatch because it lets a React component step outside normal React rendering to synchronize with external systems.

### Simple Explanation — English
Most UI logic can be handled with props, state, and rendering. Effects are needed when React has to interact with something outside React, such as a browser API, subscription, network connection, timer, or third-party library. So an Effect should not be treated as the default place for application logic; it is mainly for external synchronization.

### Simple Explanation — Hindi
Effect ko escape hatch isliye kaha jata hai kyunki ye React component ko React ke normal rendering model ke bahar ke systems ke saath synchronize karne deta hai. Props, state aur rendering se bahut saara UI logic handle ho sakta hai. Effect mainly browser API, subscription, timer, network connection ya third-party library jaise external systems ke liye use hota hai.

---

## 152. How do you subscribe to an external system from a component?

### Definition
You subscribe inside an Effect and return cleanup code that unsubscribes when the synchronization is no longer needed.

### Simple Explanation — English
For example, if a component subscribes to a WebSocket or an external store, the Effect creates the subscription using the current inputs. The cleanup function removes that subscription. This keeps the external system synchronized with the component lifecycle.

### Simple Explanation — Hindi
External system ko subscribe karne ke liye Effect ke andar subscription create kar sakte hain. Effect ke cleanup mein us subscription ko remove ya unsubscribe karna chahiye. Isse component ke lifecycle ke saath external system properly synchronize rehta hai.

---

## 153. How do you correctly clean up a WebSocket connection in React?

### Definition
Create the WebSocket in an Effect and close it in the cleanup function when the component no longer needs that connection.

### Simple Explanation — English
If the connection depends on a value such as `roomId`, the Effect should use that value and include it in its dependencies. When the room changes, React cleans up the old socket and creates the new one. On unmount, the socket is also closed.

### Simple Explanation — Hindi
WebSocket ko Effect ke andar create karo aur cleanup function mein `close()` karo. Agar connection `roomId` par depend karta hai, to `roomId` dependency mein hona chahiye. Room change hone par old socket close hoga aur new socket create hoga.

---

## 154. How do you add and remove a browser event listener with `useEffect`?

### Definition
Register the listener in the Effect and remove the same listener in the cleanup function.

### Simple Explanation — English
For example, you can add a `resize` or `keydown` listener with `window.addEventListener`. The cleanup must call `removeEventListener` using the same event type and handler reference. This prevents listeners from accumulating over time.

### Simple Explanation — Hindi
`useEffect` ke andar `window.addEventListener` se listener add kar sakte hain. Cleanup mein same event type aur same handler reference ke saath `removeEventListener` call karna chahiye. Isse repeated renders ke baad duplicate listeners create nahi hote.

---

## 155. How do you integrate a third-party DOM library into a React component?

### Definition
Use an Effect to initialize and synchronize the non-React library with a DOM node, and clean it up when the component is removed or the relevant inputs change.

### Simple Explanation — English
I would give a DOM element a ref, wait until it is mounted, and then initialize the library in an Effect. If the library has a destroy or cleanup API, I would call it during cleanup. React should remain responsible for the React-rendered structure while the external library manages only its own area.

### Simple Explanation — Hindi
Third-party DOM library ko integrate karne ke liye DOM element ka ref use karunga aur mount hone ke baad Effect mein library initialize karunga. Agar library ka destroy ya cleanup method hai, to cleanup mein use call karunga. React apne DOM structure ko manage kare aur external library sirf apne area ko handle kare.

---

## 156. How do you avoid creating duplicate subscriptions when props change?

### Definition
Make the subscription Effect depend on the values that actually determine the subscription and always clean up the old subscription before creating the new one.

### Simple Explanation — English
Suppose a subscription depends on `userId`. When `userId` changes, React should remove the old subscription before creating the new one. If cleanup is missing, every prop change can add another listener or subscription. Correct Effect dependencies plus cleanup solve this.

### Simple Explanation — Hindi
Agar subscription `userId` par depend karti hai, to `userId` dependency mein hona chahiye. `userId` change hone par React old subscription cleanup karega aur new subscription create karega. Cleanup missing hone par har change par duplicate subscriptions create ho sakti hain.

---

## 157. How would you cancel an in-flight fetch request when a component unmounts?

### Definition
Use `AbortController` to cancel the request in the Effect cleanup.

### Simple Explanation — English
Create an `AbortController`, pass its signal to `fetch`, and call `controller.abort()` in the cleanup function. This tells the browser that the request is no longer needed. The code should handle the abort case separately so it is not shown as a normal application error.

### Simple Explanation — Hindi
Effect ke andar `AbortController` create karke uska `signal` `fetch` ko de sakte hain. Cleanup mein `controller.abort()` call karke in-flight request cancel ki ja sakti hai. Abort ko normal API error se alag handle karna chahiye.

---

## 158. How do `AbortController` and React Effects work together?

### Definition
`AbortController` provides a cancellation signal for asynchronous operations, and React Effect cleanup is a natural place to trigger that cancellation.

### Simple Explanation — English
When the Effect starts a request, it creates a controller. If the component unmounts or a dependency changes, React runs cleanup and the controller aborts the old request. This prevents unnecessary network work and reduces the chance of stale responses affecting the UI.

### Simple Explanation — Hindi
Effect mein request start karte waqt `AbortController` create kar sakte hain. Component unmount ya dependency change hone par cleanup run hota hai aur controller old request ko abort kar deta hai. Isse unnecessary network work aur stale response ka risk kam hota hai.

---

## 159. How would you prevent an older API response from overwriting newer data?

### Definition
Ensure only the latest active request is allowed to update the current UI state.

### Simple Explanation — English
I can use `AbortController` to cancel older requests or maintain a request identity and ignore responses that no longer match the current request. This is important when users quickly change filters, search terms, or selected IDs. The goal is to make the displayed data correspond to the latest request.

### Simple Explanation — Hindi
Older request ko cancel karne ke liye `AbortController` use kar sakte hain, ya request identity track karke old response ko ignore kar sakte hain. Ye search, filters ya selected ID quickly change hone par important hai. UI mein latest request ka hi result dikhna chahiye.

---

## 160. How do you handle loading, success, and error states for an API call?

### Definition
Represent the asynchronous request lifecycle with explicit states such as loading, success/data, and error.

### Simple Explanation — English
At minimum, I would know whether the request is loading, whether data was received, and whether an error occurred. The UI can then render a spinner or skeleton during loading, the result on success, and a useful error state on failure. For production systems, retry and empty-state behavior may also be needed.

### Simple Explanation — Hindi
API call ke liye minimum loading, success/data aur error states handle karne chahiye. Loading mein spinner ya skeleton, success mein data aur failure mein proper error message show kar sakte hain. Production application mein retry aur empty state bhi useful ho sakte hain.

---

## 161. How would you retry a failed API request from a React component?

### Definition
A retry mechanism repeats a failed request according to a controlled strategy, either from a user action or automatically with limits.

### Simple Explanation — English
For a simple component, I can expose a retry function that starts the request again. For automatic retries, I would limit the number of attempts and potentially use increasing delays. In production, I would prefer a dedicated data-fetching solution when it already provides robust retry and caching behavior.

### Simple Explanation — Hindi
Simple case mein `retry` function bana kar failed request ko dobara call kar sakte hain. Automatic retry ke case mein maximum attempts aur delay define karna chahiye. Production app mein agar data-fetching library retry handling deti hai, to usko use karna easier ho sakta hai.

---

## 162. How would you implement polling in React without leaking timers?

### Definition
Polling repeatedly requests data at a fixed interval while ensuring the timer is cleaned up when it is no longer needed.

### Simple Explanation — English
I would start the interval inside an Effect and return cleanup that calls `clearInterval`. The Effect dependencies should include the values that determine whether or how the polling should run. If a request is still pending, I would also consider avoiding overlapping requests depending on the requirement.

### Simple Explanation — Hindi
Polling ke liye Effect mein `setInterval` use kar sakte hain aur cleanup mein `clearInterval` call karna chahiye. Polling kis condition mein chalegi aur interval kya hoga, un values ko dependencies mein correctly handle karna chahiye. Overlapping API requests ko bhi requirement ke according control karna chahiye.

---

## 163. How would you implement a debounced search request?

### Definition
Debounced search waits until the user stops typing for a specified delay before sending the API request.

### Simple Explanation — English
I would first debounce the search value or the search trigger. Every input change resets the timer. After the delay, the request starts. I would also cancel or ignore older requests so a slow earlier response cannot overwrite the latest search results.

### Simple Explanation — Hindi
User typing ke time har character par request bhejne ke bajay search value ko debounce karunga. Har change par previous timer reset hoga aur delay ke baad API request bheji jayegi. Old requests ko cancel ya ignore bhi karna chahiye taaki old result latest result ko overwrite na kare.

---

## 164. What is the difference between debouncing and throttling in a React UI?

### Definition
Debouncing delays work until activity stops for a period, while throttling limits work to at most a controlled frequency during continuous activity.

### Simple Explanation — English
Debouncing is useful for search where you want a request after the user pauses typing. Throttling is useful for continuous events like scroll or resize where you want updates periodically while the event is still happening. The choice depends on the desired user experience.

### Simple Explanation — Hindi
Debouncing mein activity rukne ke baad work execute hota hai. Throttling mein continuous activity ke dauran bhi work controlled interval par hota rehta hai. Search input ke liye debounce aur scroll/resize jaise events ke liye throttle common examples hain.

---

## 165. How can an Effect accidentally cause an infinite render loop?

### Definition
An Effect can create an infinite loop when it updates state and that update causes the Effect's dependencies to change again.

### Simple Explanation — English
For example, an Effect that runs whenever `items` changes and then always creates a new `items` value can repeatedly trigger itself. Another common case is missing or incorrect dependencies combined with state updates. The fix is to identify the actual synchronization requirement and remove unnecessary state updates or dependencies.

### Simple Explanation — Hindi
Infinite loop tab ho sakta hai jab Effect state update kare aur us state update se Effect ki dependency dobara change ho jaye. Phir Effect dobara run karega aur cycle repeat hoti rahegi. Is situation mein Effect ka actual purpose samajh kar unnecessary state updates ko remove karna chahiye.

---

## 166. How can an object or function dependency cause an Effect to run repeatedly?

### Definition
Objects and functions can have a new reference on every render, so an Effect depending on them may see a changed dependency each time.

### Simple Explanation — English
If a component creates `{}` or an inline function on every render and uses that value in the dependency list, the reference can change on every render. The Effect may then run again even if the meaningful information is unchanged. Sometimes moving the object creation, memoizing it, or changing the Effect design is the better solution.

### Simple Explanation — Hindi
Har render mein new object ya function create ho sakta hai. Agar wahi object/function Effect dependency hai, to reference har render change ho sakta hai aur Effect repeatedly run kar sakta hai. Situation ke according value ko stabilize, creation ko move, ya Effect design ko simplify karna better hota hai.

---

## 167. How do you stabilize dependencies used by an Effect?

### Definition
Dependency stabilization means ensuring that dependency values have stable identities when their underlying meaning has not changed.

### Simple Explanation — English
For functions or expensive derived objects, `useCallback` or `useMemo` can help when there is a real need for stable identity. But I would first ask whether the dependency can be removed by redesigning the logic or by moving object creation inside the Effect. Memoization is not always the first solution.

### Simple Explanation — Hindi
Effect dependencies ko stable rakhne ke liye function ya derived object ki identity stabilize ki ja sakti hai. Kuch cases mein `useCallback` ya `useMemo` useful hote hain. Lekin pehle check karna chahiye ki dependency ki zarurat hi hai ya logic ko redesign karke problem solve ki ja sakti hai.

---

## 168. What is the “remove the Effect” approach, and when can it simplify a component?

### Definition
The “remove the Effect” approach means eliminating an unnecessary Effect when its work can be handled directly during rendering or in response to an event.

### Simple Explanation — English
For example, if an Effect calculates derived data and stores it in state, that calculation may be done directly from existing props and state. If a user click triggers an action, the action can usually happen in the event handler. Removing unnecessary Effects reduces synchronization code and potential render loops.

### Simple Explanation — Hindi
Remove the Effect approach ka matlab hai unnecessary Effect ko hata dena agar uska kaam render ya event handler se directly handle ho sakta hai. Derived data ko render mein calculate kiya ja sakta hai aur click-based action event handler mein. Isse component simpler aur predictable hota hai.

---

## 169. How would you synchronize a React state value with `localStorage`?

### Definition
Synchronizing state with `localStorage` means reading an initial value from storage and writing updated state back to storage.

### Simple Explanation — English
I would initialize the state from `localStorage` and then use an Effect to save the value when it changes. Because `localStorage` is browser-specific, SSR code needs a safe check before accessing it. I would also handle invalid stored JSON and storage exceptions.

### Simple Explanation — Hindi
State ka initial value `localStorage` se read kar sakte hain aur value change hone par Effect se storage update kar sakte hain. SSR application mein `localStorage` browser-only hone ki wajah se safe access zaroori hai. Invalid JSON aur storage errors ko bhi handle karna chahiye.

---

## 170. How would you handle browser-only APIs safely in an SSR application?

### Definition
Browser-only APIs should be accessed only in an environment where the browser exists, especially after hydration or inside client-only logic.

### Simple Explanation — English
Objects such as `window`, `document`, and `localStorage` do not exist during server rendering. Accessing them directly during server execution can fail or create mismatches. I would keep browser-specific work in appropriate client-side code, often inside Effects when the operation is an external synchronization.

### Simple Explanation — Hindi
SSR ke time `window`, `document` aur `localStorage` available nahi hote. Server par direct access error ya hydration mismatch create kar sakta hai. Browser-specific logic ko client-side execution mein rakhna chahiye, aur synchronization-type work ke liye Effect useful hota hai.

---

## 171. How would you synchronize document title with component state?

### Definition
Updating `document.title` in response to React state is an external DOM synchronization task.

### Simple Explanation — English
If the page title depends on current state or props, I can use an Effect that updates `document.title` when those values change. The important point is recognizing that `document.title` is an external browser API, so synchronization is an appropriate Effect use case.

### Simple Explanation — Hindi
Agar document title current state ya props par depend karta hai, to Effect ke through `document.title` update kar sakte hain. `document.title` React ke bahar browser API hai, isliye ise synchronize karna Effect ke liye appropriate use case hai.

---

## 172. How would you manage focus after opening a modal?

### Definition
Focus management means moving keyboard focus to the intended element when a UI state such as opening a modal changes.

### Simple Explanation — English
I would use a ref for the element that should receive focus and perform the focus operation at the appropriate time after the modal is committed. For example, the modal's first interactive element can receive focus. A complete accessible modal should also manage focus trapping and return focus to the triggering element when it closes.

### Simple Explanation — Hindi
Modal open hone par jis element ko focus dena hai uska ref bana sakte hain aur modal render hone ke baad focus set kar sakte hain. Accessible modal mein sirf initial focus hi nahi, balki keyboard focus trap aur close hone par previous triggering element par focus return karna bhi important hai.

---

## 173. How would you integrate a non-React chart library into React?

### Definition
Integrating a non-React chart library means allowing React to render a container while the chart library manages the visualization inside that container.

### Simple Explanation — English
I would create a ref for the chart container, initialize the chart after the DOM exists, and update the chart when relevant data or configuration changes. Cleanup should destroy the chart instance. The boundaries should be clear so React and the chart library do not fight over the same DOM.

### Simple Explanation — Hindi
Chart container ko ref denge aur DOM available hone ke baad Effect mein chart initialize karenge. Data ya configuration change hone par chart update karenge aur cleanup mein chart instance destroy karenge. React aur chart library ko same DOM par conflicting control nahi dena chahiye.

---

## 174. What cleanup concerns arise when integrating third-party libraries?

### Definition
Third-party integrations may create resources that React does not automatically manage, so those resources must be released explicitly.

### Simple Explanation — English
Examples include event listeners, timers, subscriptions, chart instances, observers, and DOM plugins. If they are created repeatedly without cleanup, they can cause duplicate behavior, memory growth, or stale references. Every integration should have a clear lifecycle: create, update if needed, and destroy.

### Simple Explanation — Hindi
Third-party libraries listeners, timers, subscriptions, observers ya DOM instances create kar sakti hain. Agar cleanup na ho to duplicate events, stale references aur resource leaks ho sakte hain. Integration ka lifecycle clear hona chahiye: create, update aur destroy.

---

## 175. How would you handle an API request when the user changes the selected ID quickly?

### Definition
The request logic should always reflect the latest selected ID and prevent outdated requests from updating the UI.

### Simple Explanation — English
I would make the selected ID an Effect dependency and cancel the previous request with `AbortController`, or otherwise ignore stale responses. When the ID changes, the old request is cleaned up and the new request starts. This prevents data for the previous selection from appearing under the new selection.

### Simple Explanation — Hindi
Selected ID ko Effect dependency mein rakhna chahiye. ID change hone par previous request ko `AbortController` se cancel kar sakte hain ya stale response ignore kar sakte hain. Isse previous ID ka data new ID ke UI mein accidentally nahi dikhega.

---

# 7. Performance & Optimization

## 176. What are the most common causes of poor React performance?

### Definition
Poor React performance usually comes from doing too much work, too often, or loading too much code/data for the user's current task.

### Simple Explanation — English
Common causes include unnecessary re-renders, expensive calculations, large lists without virtualization, oversized JavaScript bundles, excessive Context updates, frequent state updates, and inefficient data fetching. I would measure first rather than assuming that every render is a problem.

### Simple Explanation — Hindi
React performance problems ke common reasons hain unnecessary re-renders, expensive calculations, large lists, oversized bundles, broad Context updates, frequent state changes aur inefficient API handling. Performance optimization start karne se pehle actual problem measure karna important hai.

---

## 177. How do you identify unnecessary re-renders?

### Definition
Identify unnecessary re-renders by observing component render activity and determining which props, state, context, or parent updates caused those renders.

### Simple Explanation — English
React DevTools Profiler is one of the main tools. I can also inspect changing object/function references and check whether parent state updates are causing unrelated children to render. The goal is to find renders that do not contribute useful UI changes.

### Simple Explanation — Hindi
React DevTools Profiler se dekh sakte hain kaunse components render ho rahe hain. Saath hi changing object/function references, parent state updates aur Context changes inspect kar sakte hain. Aim ye identify karna hai ki kaunse renders unnecessary hain.

---

## 178. How would you use React DevTools Profiler to diagnose a performance issue?

### Definition
The Profiler records render activity so you can identify expensive components and understand how updates affect the component tree.

### Simple Explanation — English
I would reproduce the slow interaction while profiling, then inspect which components took the most rendering time and which commits were expensive. I would look for patterns such as a large subtree re-rendering after a small state change. Then I would optimize the actual bottleneck and profile again to verify the improvement.

### Simple Explanation — Hindi
Profiler ke through slow interaction ko record karke dekhunga ki kaunse components zyada render time le rahe hain aur kaunse commits expensive hain. Agar small state change ke baad large subtree render ho raha hai, to us boundary ko investigate karunga. Optimization ke baad dobara profile karke result verify karunga.

---

## 179. What is memoization in the context of React?

### Definition
Memoization is caching a calculated value, function reference, or rendered component decision so repeated work can sometimes be avoided.

### Simple Explanation — English
React provides tools such as `useMemo`, `useCallback`, and `React.memo`. They can reduce repeated work when their inputs have not changed. Memoization has a cost, so it should be applied where it gives a meaningful benefit.

### Simple Explanation — Hindi
React mein memoization ka matlab repeated work ko avoid karne ke liye value, function reference ya component rendering decision ko reuse karna hai. `useMemo`, `useCallback` aur `React.memo` common tools hain. Inka use actual performance benefit ke liye karna chahiye.

---

## 180. When should you use `React.memo`?

### Definition
Use `React.memo` when a component receives mostly stable props and skipping unnecessary renders provides a meaningful performance benefit.

### Simple Explanation — English
It is most useful for expensive child components that frequently receive the same props while their parent re-renders. I would not use it blindly across the entire application. Profiling and understanding the prop relationships should guide the decision.

### Simple Explanation — Hindi
`React.memo` tab useful hai jab child ke props mostly stable hain aur parent ke re-render hone par child ko baar-baar render karna unnecessary hai. Expensive child components mein ye useful ho sakta hai. Har component par blindly use nahi karna chahiye.

---

## 181. When should you use `useMemo`?

### Definition
Use `useMemo` when avoiding a meaningful calculation cost or preserving a value's reference provides a real optimization benefit.

### Simple Explanation — English
A large data transformation or filtering operation may be a good candidate if it is measurably expensive. It can also help keep an object reference stable for a specific memoization boundary. For ordinary cheap calculations, regular code is usually simpler.

### Simple Explanation — Hindi
`useMemo` expensive calculation ko avoid karne ya required stable reference maintain karne ke liye useful hai. Large data transformation ya filtering ek example hai. Small calculations ke liye unnecessary `useMemo` code ko complex bana sakta hai.

---

## 182. When should you use `useCallback`?

### Definition
Use `useCallback` when a stable function reference matters to an optimization or dependency relationship.

### Simple Explanation — English
A common use is passing a callback to a `React.memo` child so the callback prop does not change on every parent render. Another case is when a callback participates in an Effect dependency and its identity should only change when certain values change. It should not be added to every function automatically.

### Simple Explanation — Hindi
`useCallback` tab useful hai jab function reference stable rakhna important ho. Common example `React.memo` child ko callback pass karna hai. Effect dependency mein callback use ho raha ho tab bhi useful ho sakta hai. Har function par automatically lagana zaroori nahi hai.

---

## 183. Why is adding memoization everywhere usually a bad strategy?

### Definition
Memoization everywhere can add complexity and comparison overhead without producing a meaningful performance improvement.

### Simple Explanation — English
It makes dependency management harder and can obscure simple code. Some components are cheap to render, and some props change frequently, so memoization cannot help much. Performance work should target measured bottlenecks rather than treating every render as a problem.

### Simple Explanation — Hindi
Har jagah memoization add karne se code complex ho sakta hai aur unnecessary dependency management badh sakta hai. Cheap components ya frequently changing props wale components ko memoize karne se little benefit mil sakta hai. Optimization actual bottleneck ke basis par karni chahiye.

---

## 184. How can unstable object props cause child re-renders?

### Definition
An object prop is unstable when a new object reference is created even though its meaningful contents are unchanged.

### Simple Explanation — English
For example, `<Child options={{ enabled: true }} />` creates a new object each time the parent renders. A memoized child can see that as a changed prop because the reference is different. When needed, the object can be memoized or created outside the render path.

### Simple Explanation — Hindi
Agar parent render ke andar har baar new object create karta hai, to child ko new reference milta hai even if object ka data same hai. `React.memo` ke comparison mein reference change important hota hai, isliye child re-render kar sakta hai. Required case mein object ko stable banaya ja sakta hai.

---

## 185. How can unstable callback props cause child re-renders?

### Definition
A callback prop is unstable when the parent creates a new function reference on every render.

### Simple Explanation — English
A memoized child receiving a newly created callback may re-render because its props are not shallowly equal. `useCallback` can keep the function reference stable when the callback dependencies have not changed. Again, the optimization is only valuable when avoiding the child render matters.

### Simple Explanation — Hindi
Parent ke har render par callback ka new function reference ban sakta hai. Memoized child ko new callback milne par prop changed maana ja sakta hai aur child re-render kar sakta hai. `useCallback` suitable case mein reference stable rakh sakta hai.

---

## 186. How would you optimize a large list with hundreds or thousands of rows?

### Definition
Large-list optimization reduces the amount of DOM, rendering, and calculation work required for items that the user cannot currently see.

### Simple Explanation — English
First, I would check whether the data can be paginated or filtered on the server. On the client, virtualization can render only the visible rows, while stable keys and memoized row components can reduce unnecessary updates. I would also avoid expensive calculations inside every row and profile the actual bottleneck.

### Simple Explanation — Hindi
Large list ke liye pehle check karunga ki server-side pagination ya filtering possible hai ya nahi. Client side par virtualization se sirf visible rows render ki ja sakti hain. Stable keys, optimized row components aur unnecessary calculations avoid karna bhi important hai.

---

## 187. What is list virtualization?

### Definition
List virtualization is a technique where only the currently visible portion of a large list is rendered to the DOM.

### Simple Explanation — English
Instead of creating thousands of DOM nodes, a virtualized list creates only the rows around the viewport and reuses or updates them as the user scrolls. This can significantly reduce DOM size and rendering cost for very large lists.

### Simple Explanation — Hindi
Virtualization mein thousands of list items ko ek saath DOM mein render nahi kiya jata. Sirf viewport ke around visible items render hote hain aur scroll karne par required items render/update hote hain. Isse large list ka performance improve ho sakta hai.

---

## 188. What is code splitting in a React application?

### Definition
Code splitting divides the application's JavaScript into smaller chunks that can be loaded when needed instead of delivering everything initially.

### Simple Explanation — English
A large application does not need every feature's code on the first screen. Code splitting can delay loading less important features until the user needs them. This can reduce initial JavaScript and improve startup performance.

### Simple Explanation — Hindi
Code splitting mein application ke JavaScript ko smaller chunks mein divide kiya jata hai. Har feature ka code initial page par load karna zaroori nahi hota. User ko jis feature ki zarurat ho uska chunk baad mein load kiya ja sakta hai, jisse initial load improve ho sakta hai.

---

## 189. How does `React.lazy` work?

### Definition
`React.lazy` lets a component be loaded dynamically through a module promise instead of being included in the initial JavaScript bundle.

### Simple Explanation — English
You can dynamically import a component and pass that import to `lazy`. React then loads the component chunk when it is rendered. Because the component may not be available immediately, it is normally used with `Suspense` to provide a loading fallback.

### Simple Explanation — Hindi
`React.lazy` dynamic import ke through component ko on-demand load karne deta hai. Isse component ka code initial bundle mein immediately include nahi karna padta. Loading ke time UI handle karne ke liye usually `Suspense` fallback use kiya jata hai.

---

## 190. How does `Suspense` support lazy-loaded components?

### Definition
`Suspense` displays a fallback UI while a child is waiting for something that suspends rendering, such as a lazy-loaded component.

### Simple Explanation — English
When a lazy component's code is still loading, React can suspend that part of rendering. A surrounding `Suspense` boundary shows a fallback like a spinner or skeleton until the component becomes available. This creates a controlled loading experience.

### Simple Explanation — Hindi
Jab lazy-loaded component ka code abhi load nahi hua hota, React us part ko suspend kar sakta hai. `Suspense` boundary ke andar fallback UI, jaise spinner ya skeleton, show hota hai. Component ready hone ke baad actual UI render hoti hai.

---

## 191. What is bundle splitting, and why does it matter for initial load performance?

### Definition
Bundle splitting means dividing application code into independently loadable chunks to reduce how much JavaScript must be downloaded and parsed initially.

### Simple Explanation — English
A smaller initial bundle can improve startup, especially on slower devices and networks. Features that are not needed for the first screen can load later. The goal is not merely to create many chunks, but to create a loading strategy that matches how users navigate the application.

### Simple Explanation — Hindi
Bundle splitting initial JavaScript ko smaller chunks mein divide karta hai. Isse first screen ke liye required code kam download aur parse karna padta hai. Important point ye hai ki chunks logically divide hon aur user journey ke according load hon.

---

## 192. How would you reduce the JavaScript bundle size of a React application?

### Definition
Bundle-size optimization means reducing the amount of JavaScript delivered and executed for the user's current experience.

### Simple Explanation — English
I would inspect the bundle first, then consider route-based code splitting, lazy loading, removing unnecessary dependencies, choosing smaller libraries, and avoiding shipping server-only or unused code to the browser. Tree-shaking and production builds also matter. The right approach depends on what the bundle analysis shows.

### Simple Explanation — Hindi
Sabse pehle bundle analyze karunga ki kaunsa code zyada size le raha hai. Uske baad route-based code splitting, lazy loading, unnecessary dependencies remove karna aur lighter libraries use karna consider karunga. Production build aur tree-shaking bhi important hain.

---

## 193. How can an oversized context value hurt performance?

### Definition
A broad Context value can cause many consumers to re-render when that context changes.

### Simple Explanation — English
If one Context contains unrelated values that change at different frequencies, a change to one value can affect many consumers. Splitting contexts by responsibility can reduce the number of components that respond to each update. State placement and context design are often more important than adding memoization afterward.

### Simple Explanation — Hindi
Agar ek Context mein bahut saari unrelated values hain aur ek value frequently change hoti hai, to us Context ke bahut consumers update ho sakte hain. Context ko responsibility ke according split karna unnecessary renders reduce kar sakta hai. Proper state placement bhi important hai.

---

## 194. How can state placement affect rendering performance?

### Definition
State placement determines which part of the component tree needs to re-render when that state changes.

### Simple Explanation — English
If frequently changing state is kept high in the tree, many descendants may re-render. Keeping local state close to the components that actually use it can reduce the affected subtree. This is one reason state colocation is often a useful performance and architecture strategy.

### Simple Explanation — Hindi
Agar frequently changing state tree ke bahut high level par rakha gaya hai, to uske change hone par large subtree re-render ho sakta hai. State ko jitna relevant components ke close rakh sakte hain, utna render impact reduce ho sakta hai. Isi ko state colocation ke benefit ke roop mein dekh sakte hain.

---

## 195. Why can colocating state sometimes improve performance?

### Definition
State colocation means keeping state near the components that use it, which can limit how much of the tree responds to state updates.

### Simple Explanation — English
Suppose a small form controls only one section of a large page. Keeping the form state inside that section means typing in the form does not necessarily force unrelated page sections to update. Colocation also makes ownership easier to understand.

### Simple Explanation — Hindi
Agar small form sirf page ke ek section ko control karta hai, to uska state usi section ke close rakhna better hai. Isse form typing ke updates unrelated page sections tak unnecessarily propagate nahi hote. Saath hi state ownership bhi clear rehti hai.

---

## 196. How would you prevent an expensive child from re-rendering when unrelated parent state changes?

### Definition
Prevent unrelated re-renders by creating a clear optimization boundary, keeping props stable, and memoizing the child when profiling shows that it is beneficial.

### Simple Explanation — English
I would first see why the child is rendering. If its props are unchanged and the child is expensive, `React.memo` can help. I would then stabilize relevant object or callback props if they are causing changes. Sometimes moving the unrelated state lower in the tree is even better than adding memoization.

### Simple Explanation — Hindi
Pehle reason identify karna zaroori hai. Agar child ke props same hain aur render expensive hai, to `React.memo` useful ho sakta hai. Agar object/function props unstable hain to unhe stabilize kar sakte hain. Lekin kabhi unrelated state ko tree mein lower rakhna memoization se bhi better solution hota hai.

---

## 197. How would you optimize a search page that becomes slow while typing?

### Definition
Typing performance can be improved by reducing synchronous work per keystroke and avoiding unnecessary network requests or large component renders.

### Simple Explanation — English
I would inspect whether filtering is expensive, whether the entire page renders on each keystroke, and whether every character starts an API request. Possible solutions include debouncing network requests, moving heavy work, memoizing expensive calculations where justified, using list virtualization, or using `useDeferredValue`/transitions for non-urgent UI. I would profile before choosing the change.

### Simple Explanation — Hindi
Sabse pehle check karunga ki typing ke har character par expensive filtering, complete page re-render ya API call to nahi ho rahi. Search request ko debounce kar sakte hain, heavy work optimize kar sakte hain, large list ko virtualize kar sakte hain aur appropriate case mein `useDeferredValue` ya transitions use kar sakte hain. Pehle profile karna best hai.

---

## 198. What is `useTransition`, and when would you use it?

### Definition
`useTransition` lets you mark a state update as non-urgent so React can keep more urgent interactions responsive while processing the transition update.

### Simple Explanation — English
For example, typing into an input should feel immediate, while updating a large filtered result list can be treated as less urgent. The transition API lets React prioritize the urgent input update and work on the expensive UI update separately. `isPending` can be used to show progress for the transition.

### Simple Explanation — Hindi
`useTransition` se kisi state update ko non-urgent mark kar sakte hain. Example mein search input typing urgent hai, lekin large filtered list ko update karna less urgent ho sakta hai. React urgent interaction ko responsive rakhte hue transition work ko manage karta hai. `isPending` se pending state show kar sakte hain.

---

## 199. What is `useDeferredValue`, and when would you use it?

### Definition
`useDeferredValue` lets a component use a deferred version of a value so updates using that value can lag behind more urgent updates.

### Simple Explanation — English
Suppose a search input changes immediately but rendering a huge result list is expensive. The input can use the current value while the list receives the deferred value. This can keep typing responsive without manually managing a second state value.

### Simple Explanation — Hindi
Agar search input ko immediately update karna hai lekin result list expensive hai, to input current value use kar sakta hai aur list ko deferred value diya ja sakta hai. Isse typing responsive reh sakti hai aur manually duplicate state maintain karne ki zarurat nahi pad sakti.

---

## 200. What is the difference between `useTransition` and `useDeferredValue`?

### Definition
`useTransition` marks a state update as non-urgent, while `useDeferredValue` creates a deferred version of an existing value.

### Simple Explanation — English
Use `useTransition` when you control the state update and want to tell React that the update is non-urgent. Use `useDeferredValue` when you already receive or hold a value and want a less urgent version of it for an expensive part of the UI. Both help keep urgent interactions responsive, but they solve slightly different problems.

### Simple Explanation — Hindi
`useTransition` tab use hota hai jab aap state update ko khud control kar rahe hain aur usse non-urgent mark karna chahte hain. `useDeferredValue` tab use hota hai jab existing value ka ek delayed/non-urgent version chahiye. Dono ka goal responsive UI maintain karna hai, lekin use case alag hai.

---

## ✅ Set 4 Complete

**Questions covered:** 151–200  
**Sections:** Effects, Async Work & External Systems + Performance & Optimization  
**Format:** Definition → Simple English → Simple Hindi
