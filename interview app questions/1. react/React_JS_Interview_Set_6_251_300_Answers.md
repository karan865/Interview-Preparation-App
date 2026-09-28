# React.js Interview Answers — Set 6 (Questions 251–300)

> Target: React.js interview preparation for around 3 years of experience  
> Format: Definition → Simple Explanation (English) → Simple Explanation (Hindi)  
> Source: Questions 251–300 from the provided React.js interview question document.

---

# 10. Routing, Code Splitting & Navigation

## 251. What problem does client-side routing solve in a React SPA?

### Definition
Client-side routing lets a single-page application change the displayed view based on the URL without requesting a completely new HTML document for every navigation.

### Simple Explanation — English
In an SPA, the browser can keep the application loaded while the router changes which components are displayed. This gives navigation a more app-like experience and avoids a full page reload for every route change. The URL can still represent the current page, so users can bookmark and use browser history normally.

### Simple Explanation — Hindi
Client-side routing SPA mein URL ke according UI ko change karne deta hai bina har navigation par complete HTML page dobara load kiye. Application loaded rehti hai aur router different components show karta hai. Isse navigation fast aur app-like feel hoti hai.

---

## 252. What is the difference between client-side routing and server-side routing?

### Definition
Client-side routing changes views in the browser using JavaScript, while server-side routing sends a request to the server and the server decides which response or page to return.

### Simple Explanation — English
With client-side routing, clicking a link can change the React UI without a full document reload. With server-side routing, navigation can trigger a network request for a new document. Modern applications can also use hybrid approaches where server rendering and client routing work together.

### Simple Explanation — Hindi
Client-side routing mein browser ke andar JavaScript route change karta hai aur React UI update hoti hai. Server-side routing mein request server par jati hai aur server new response ya page return karta hai. Modern apps mein dono approaches ko combine bhi kiya ja sakta hai.

---

## 253. How would you structure routes for a large React application?

### Definition
A large application's routes should be organized around clear feature boundaries, layouts, access rules, and navigation structure.

### Simple Explanation — English
I would group related routes by feature or application area and use nested layouts where pages share navigation or UI structure. Authentication and authorization rules should be explicit, and route configuration should remain easy to maintain. Large route components can also be lazy-loaded to improve the initial bundle.

### Simple Explanation — Hindi
Large React app mein routes ko feature ya application area ke according organize karunga. Shared navigation ke liye nested layouts use kar sakte hain. Authentication/authorization rules clear hone chahiye aur route structure maintainable hona chahiye. Large pages ko lazy-load bhi kiya ja sakta hai.

---

## 254. How do route parameters work in React Router?

### Definition
Route parameters are dynamic segments of a URL that the router extracts and makes available to the matched route component.

### Simple Explanation — English
For example, a route like `/users/:userId` can match `/users/42`. The component can read `userId` and use it to fetch or display the corresponding user. Route parameters are part of the path and are useful when the URL identifies a specific resource.

### Simple Explanation — Hindi
Route parameter URL ke dynamic part ko represent karta hai. Jaise `/users/:userId` route `/users/42` ko match kar sakta hai aur `userId` ki value `42` milegi. Is value ka use specific user ka data fetch karne mein kiya ja sakta hai.

---

## 255. How do query parameters differ from route parameters?

### Definition
Route parameters are dynamic parts of the path, while query parameters are optional key-value values attached after the `?` in the URL.

### Simple Explanation — English
A route such as `/products/42` uses `42` as part of the route identity. A URL such as `/products?sort=price&page=2` uses query parameters for filtering, sorting, paging, or optional view state. The URL design should match whether the value identifies a resource or modifies the way a resource is viewed.

### Simple Explanation — Hindi
Route parameter URL ke path ka part hota hai, jaise `/products/42`. Query parameter `?` ke baad hota hai, jaise `/products?sort=price&page=2`. Query parameters generally filtering, sorting, pagination ya optional UI state ke liye use hote hain.

---

## 256. How would you protect authenticated routes?

### Definition
Protected routing prevents unauthenticated users from accessing application views that require authentication.

### Simple Explanation — English
I would have a route guard or route-level authentication check that reads the current auth state. If the user is not authenticated, the router can redirect to login while preserving the intended destination. However, this only protects the UI; the backend must independently enforce authorization for protected data and operations.

### Simple Explanation — Hindi
Protected route mein current authentication state check ki jati hai. Agar user logged in nahi hai to usse login page par redirect kiya ja sakta hai aur original URL preserve ki ja sakti hai. Lekin sirf route guard security ke liye enough nahi hai; backend ko bhi authorization check karna chahiye.

---

## 257. Where should authentication state be managed in a React application?

### Definition
Authentication state should be managed in a shared layer that is accessible to the parts of the application that need it.

### Simple Explanation — English
Depending on the architecture, this could be Context, Redux, another state store, or an authentication library. The important part is separating authentication state from sensitive secrets and ensuring the application can determine whether the current user is authenticated. Server-side authorization remains the actual security boundary.

### Simple Explanation — Hindi
Authentication state ko aise shared layer mein rakhna chahiye jahan required components access kar saken. Ye Context, Redux, custom store ya auth library ho sakta hai. UI ko login status pata hona chahiye, lekin actual security backend authorization se enforce hoti hai.

---

## 258. How would you redirect a user after login?

### Definition
After successful authentication, navigate the user programmatically to the appropriate destination.

### Simple Explanation — English
If there is a requested protected route, I would redirect the user back to that route after successful login. Otherwise, I would navigate to the application's default authenticated page. The redirect should happen only after authentication has actually succeeded.

### Simple Explanation — Hindi
Login successful hone ke baad user ko required route par navigate karna chahiye. Agar user pehle kisi protected page par jaana chahta tha, to login ke baad usi page par return kar sakte hain. Warna default dashboard ya home page par redirect kar sakte hain.

---

## 259. How would you preserve the originally requested URL before redirecting to login?

### Definition
Store the original route in navigation state, a controlled URL value, or another appropriate mechanism before redirecting to the login page.

### Simple Explanation — English
When an unauthenticated user requests `/dashboard/settings`, the application can remember that path while navigating to `/login`. After successful authentication, the login flow can read the saved destination and navigate there. The stored destination should be validated so an application does not introduce an unsafe external redirect.

### Simple Explanation — Hindi
Agar user `/dashboard/settings` open karna chahta hai aur logged in nahi hai, to login par redirect karte waqt original destination save kar sakte hain. Login successful hone ke baad us saved route par navigate kar sakte hain. Destination ko validate karna important hai taaki unsafe external redirect na ho.

---

## 260. How would you handle a 404 route in a React SPA?

### Definition
A 404 route is a catch-all route that displays a not-found UI when no application route matches the current URL.

### Simple Explanation — English
I would define a final catch-all route after the specific routes. It can render a useful not-found page with navigation back to a valid section. The server deployment must also be configured to return the SPA entry point for valid client-side routes; otherwise, deep links may fail before React gets a chance to render the 404 page.

### Simple Explanation — Hindi
Specific routes ke baad catch-all route define karke unmatched URL par 404 page show kar sakte hain. 404 page mein user ko useful navigation options dene chahiye. SPA hosting mein server rewrite configuration bhi important hai, warna deep links React tak pahunchne se pehle fail ho sakte hain.

---

## 261. How would you implement nested routes?

### Definition
Nested routes represent parent-child URL and UI relationships where a parent route provides shared structure and child routes render inside it.

### Simple Explanation — English
For example, a dashboard can have a parent layout with child routes such as `/dashboard/profile` and `/dashboard/settings`. The parent layout can render common navigation and an outlet for the active child route. This avoids duplicating shared dashboard UI across every page.

### Simple Explanation — Hindi
Nested routes mein parent route common layout provide karta hai aur child routes specific pages render karte hain. Example: dashboard ke andar profile aur settings routes. Parent layout mein common sidebar/navigation ho sakti hai aur outlet ke through active child page render hota hai.

---

## 262. What are route-level layouts, and why are they useful?

### Definition
A route-level layout is a shared UI structure associated with a group of routes.

### Simple Explanation — English
A layout can contain elements such as a header, sidebar, footer, or authentication shell while child routes render their own content inside it. This reduces duplication and keeps navigation consistent across related pages. Nested routing is commonly used to implement this pattern.

### Simple Explanation — Hindi
Route-level layout ek shared UI structure hota hai jo related routes ke saath use hota hai. Header, sidebar, footer ya dashboard navigation layout ka part ho sakte hain. Child routes sirf apna specific content render karte hain, isse duplicate UI code reduce hota hai.

---

## 263. How would you lazy-load route components?

### Definition
Route-level lazy loading loads a route's component code only when that route is needed.

### Simple Explanation — English
I would use dynamic imports, often through `React.lazy` or the router's lazy-loading mechanism. Each major route can become its own chunk so the initial application bundle stays smaller. A loading boundary should be provided for the time during which the route code is being fetched.

### Simple Explanation — Hindi
Route component ko dynamic import ke through lazy-load kar sakte hain. Major routes ko separate chunks mein divide karne se initial JavaScript bundle smaller ho sakta hai. Loading ke time fallback UI provide karna chahiye.

---

## 264. How would you show a loading UI during lazy route loading?

### Definition
Show a fallback UI while the lazy-loaded route component is still being downloaded or resolved.

### Simple Explanation — English
A `Suspense` boundary can provide a loading fallback such as a spinner, skeleton, or route-specific loading screen. For a good user experience, the fallback should be appropriate to the size and importance of the section being loaded.

### Simple Explanation — Hindi
Lazy route load hone ke time `Suspense` ke fallback mein spinner, skeleton ya loading screen show kar sakte hain. Fallback aisa hona chahiye jo user ko clearly bataye ki navigation process ho rahi hai aur wait karna hai.

---

## 265. How would you avoid losing user state unnecessarily during route changes?

### Definition
Preserve shared state by placing it above route boundaries that should not be recreated and by keeping component identity stable where appropriate.

### Simple Explanation — English
If a state value should survive navigation between child pages, it can live in a parent layout, shared store, or Context rather than inside the page component that unmounts. I would also avoid changing keys or component structures unnecessarily. State ownership should match how long the state is meant to live.

### Simple Explanation — Hindi
Agar state ko multiple child routes ke beech preserve karna hai, to usse parent layout, Context ya shared store mein rakhna better hai. Page component ke andar state rakhne se route change par unmount ke time state lose ho sakti hai. State ki lifetime aur ownership ko match karna chahiye.

---

## 266. How would you scroll to the top after navigation?

### Definition
Scroll restoration moves the viewport to the desired position when the route changes.

### Simple Explanation — English
For a simple SPA, a navigation-aware component can detect route changes and call `window.scrollTo`. In larger applications, the behavior should account for browser back/forward navigation so users do not unexpectedly lose useful scroll positions. Accessibility and smoothness should also be considered.

### Simple Explanation — Hindi
Route change detect karke `window.scrollTo` se page ko top par le ja sakte hain. Lekin back/forward navigation ke time user ka previous scroll position preserve karna useful ho sakta hai. Isliye har navigation par blindly top karna ideal nahi hota.

---

## 267. How would you handle deep links when deploying a React SPA?

### Definition
Deep-link handling ensures that a direct request to a nested client-side route still serves the SPA entry document so the client router can resolve the URL.

### Simple Explanation — English
A user may open `/dashboard/settings` directly from a bookmark. If the server looks for a physical `/dashboard/settings` file, it may return 404. The deployment server should rewrite application routes to the SPA entry point, while still allowing real static assets and server-specific endpoints to work correctly.

### Simple Explanation — Hindi
Agar user directly `/dashboard/settings` open kare, to server ko SPA ka entry HTML return karna chahiye. Sirf physical file search karne par server 404 de sakta hai. Isliye hosting configuration mein client-side routes ke liye proper rewrite/fallback required hota hai.

---

## 268. How would you handle browser back and forward navigation correctly?

### Definition
Correct navigation handling means allowing the browser history stack and router state to remain synchronized.

### Simple Explanation — English
A proper client-side router listens to browser history changes and updates the rendered route accordingly. Application code should generally use the router's navigation APIs rather than manually changing the URL without updating route state. Special state such as scroll position can be restored based on navigation history.

### Simple Explanation — Hindi
Router ko browser history ke changes ke saath synchronized rehna chahiye. Application mein direct URL manipulation ke bajay router ki navigation APIs use karna better hai. Back/forward navigation ke saath scroll ya page-specific state restore bhi ki ja sakti hai.

---

## 269. How would you prevent unauthorized users from accessing protected application data even if the route is hidden?

### Definition
Protect sensitive data at the backend and authorization layer rather than relying on client-side route visibility.

### Simple Explanation — English
Hiding a route or button only changes what the user sees. A user can still call an API directly if the server does not verify permissions. Therefore, every sensitive API operation must validate the authenticated identity and authorization on the server. The frontend should treat route guards as a user-experience feature, not the primary security boundary.

### Simple Explanation — Hindi
Frontend par route ya button hide karna security nahi hai. User API ko directly call kar sakta hai agar backend permission check nahi karta. Isliye sensitive data aur operations ke liye backend ko authentication aur authorization verify karna chahiye. Frontend route guard mainly UX aur navigation control ke liye hai.

---

## 270. How would you design routing for a dashboard with nested sections and dynamic IDs?

### Definition
A dashboard route structure should combine a shared layout, nested sections, and dynamic parameters for resources such as users, projects, or orders.

### Simple Explanation — English
For example, a parent dashboard layout can contain children such as `/dashboard/overview`, `/dashboard/projects`, and `/dashboard/projects/:projectId`. The layout provides shared navigation while the dynamic route identifies a specific resource. Access control and lazy loading can be added at the appropriate route boundaries.

### Simple Explanation — Hindi
Dashboard ke liye ek parent layout bana sakte hain aur uske andar overview, projects aur dynamic project detail routes rakh sakte hain. Jaise `/dashboard/projects/:projectId`. Shared navigation parent layout mein rahegi aur dynamic ID specific project ko identify karegi.

---

# 11. Global State, Redux Toolkit & Server State

## 271. When does a React application actually need a global state manager?

### Definition
A global state manager is useful when state is shared across distant parts of the application and managing it through local state, props, or Context becomes difficult.

### Simple Explanation — English
Not every application needs Redux or another global store. Local state is best for local UI concerns. A global store becomes useful when many unrelated branches need the same client state, when state transitions are complex, or when predictable centralized updates and tooling provide significant value.

### Simple Explanation — Hindi
Har React app ko global state manager ki zarurat nahi hoti. Local UI state ke liye `useState` ya `useReducer` enough ho sakta hai. Global store tab useful hota hai jab distant components ko same client state chahiye, state transitions complex hon, ya centralized state management se real benefit mile.

---

## 272. What are the trade-offs between Context and Redux for application state?

### Definition
Context is a built-in mechanism for sharing values through a tree, while Redux provides a centralized state store, explicit update patterns, and specialized development tooling.

### Simple Explanation — English
Context is simple and useful for values such as theme, locale, or relatively stable shared state. Redux Toolkit is more structured for larger client-state domains where many actions, reducers, selectors, middleware, and debugging tools are useful. Context itself is not a complete replacement for every state-management problem.

### Simple Explanation — Hindi
Context simple built-in solution hai aur theme, locale ya stable shared values ke liye useful hai. Redux Toolkit larger client-state problems mein useful ho sakta hai jahan actions, reducers, selectors, middleware aur debugging tools ki need ho. Context ko har situation mein Redux ka direct replacement nahi samajhna chahiye.

---

## 273. What is Redux, and what problem does it solve?

### Definition
Redux is a state-management library that keeps application state in a centralized store and updates it through explicit actions and reducers.

### Simple Explanation — English
Instead of having many unrelated components manage shared state independently, Redux gives the application one predictable state model. Components dispatch actions, reducers calculate next state, and components subscribe to the state they need. This can make complex client-state flows easier to trace and debug.

### Simple Explanation — Hindi
Redux centralized store mein application state manage karta hai. Components actions dispatch karte hain aur reducers next state calculate karte hain. Isse shared state ke updates predictable aur traceable ho sakte hain, especially large applications mein.

---

## 274. What are the core concepts of Redux?

### Definition
The core Redux concepts are store, state, actions, reducers, and dispatch/subscription-based updates.

### Simple Explanation — English
The store holds the state. An action describes what happened. A reducer calculates the next state from the current state and action. Components or other code dispatch actions, and subscribed components receive the updated state. Middleware can extend behavior around dispatch.

### Simple Explanation — Hindi
Redux ke core concepts mein store, state, actions aur reducers aate hain. Store state hold karta hai, action batata hai kya hua, aur reducer current state plus action ke basis par next state banata hai. `dispatch` ke through action bheja jata hai.

---

## 275. What is the Redux data flow?

### Definition
Redux data flow is a one-way process where an event causes an action to be dispatched, reducers calculate new state, and subscribers receive the updated state.

### Simple Explanation — English
A user interaction can dispatch an action. The reducer processes that action and produces a new state. The store updates, and subscribed components read the relevant parts of the new state and render again. This predictable flow makes state changes easier to trace.

### Simple Explanation — Hindi
User interaction ke result mein action dispatch hota hai. Reducer action ko process karke new state banata hai. Store update hota hai aur subscribed components relevant state read karke re-render karte hain. Is one-way flow ki wajah se debugging easier hoti hai.

---

## 276. What is an action in Redux?

### Definition
An action is a plain description of an event that can cause a state transition in the Redux store.

### Simple Explanation — English
An action usually contains a `type` and may contain additional data in a `payload`. For example, `todoAdded` can describe that a todo was added and carry the new todo information. Actions describe what happened; reducers decide how state changes because of that event.

### Simple Explanation — Hindi
Redux action ek event ko describe karta hai. Isme usually `type` aur optional `payload` hota hai. Example `todoAdded` action bata sakta hai ki todo add hua hai aur payload mein todo data de sakta hai. Action khud state change nahi karta; reducer decide karta hai kya change hoga.

---

## 277. What is a reducer in Redux?

### Definition
A reducer is a function that receives the current state and an action and returns the next state.

### Simple Explanation — English
Reducers contain state-transition logic. They should be predictable and should not perform side effects such as API calls. Redux Toolkit uses Immer internally in reducers created with `createSlice`, which lets developers write update code that looks mutable while Redux still produces immutable state updates.

### Simple Explanation — Hindi
Reducer current state aur action ko receive karke next state return karta hai. Reducer ke andar API calls ya other side effects nahi hone chahiye. Redux Toolkit ke `createSlice` reducers mein Immer ki wajah se update syntax simple lag sakta hai, lekin state update immutable way mein produce hota hai.

---

## 278. What is a Redux store?

### Definition
The Redux store is the central object that holds the Redux state and manages dispatching and subscriptions.

### Simple Explanation — English
The store provides the current application state and receives actions through dispatch. Reducers determine how that state changes. Components can subscribe to relevant state through React-Redux hooks such as `useSelector`, while updates are triggered with `useDispatch`.

### Simple Explanation — Hindi
Redux store application ka centralized state hold karta hai. Actions `dispatch` ke through store tak jate hain aur reducers decide karte hain state kaise change hogi. React components `useSelector` se state read aur `useDispatch` se actions dispatch kar sakte hain.

---

## 279. Why must Redux reducers be pure?

### Definition
Reducers should be pure so the same input state and action produce the same output state without external side effects.

### Simple Explanation — English
Purity makes Redux updates predictable and easier to test. A reducer should not depend on changing external data, make network requests, or perform random operations. Side effects belong in appropriate middleware, thunks, listeners, or other application layers.

### Simple Explanation — Hindi
Reducer pure hone se state transitions predictable aur testable rehte hain. Reducer ko API call, random operation ya external mutable data par depend nahi karna chahiye. Side effects ko middleware, thunk, listener ya suitable service layer mein handle karna chahiye.

---

## 280. What is Redux Toolkit, and why is it preferred over writing traditional Redux boilerplate?

### Definition
Redux Toolkit is the official recommended way to write Redux logic and provides utilities that reduce boilerplate and simplify common patterns.

### Simple Explanation — English
Redux Toolkit gives APIs such as `configureStore`, `createSlice`, `createAsyncThunk`, and RTK Query. It provides sensible defaults, good developer experience, and less repetitive action/reducer setup. It also uses Immer to simplify immutable updates inside reducers.

### Simple Explanation — Hindi
Redux Toolkit Redux ka recommended modern approach hai. Isme `configureStore`, `createSlice`, `createAsyncThunk` aur RTK Query jaise tools milte hain. Ye traditional Redux ke repetitive code ko reduce karta hai aur state update likhna easier banata hai.

---

## 281. What is `configureStore`?

### Definition
`configureStore` creates a Redux store with sensible default configuration and commonly used middleware and development checks.

### Simple Explanation — English
Instead of manually combining reducers, middleware, and DevTools configuration, `configureStore` provides a simpler setup. You give it reducer configuration and optional settings. It is the standard starting point for a Redux Toolkit application.

### Simple Explanation — Hindi
`configureStore` Redux store create karne ka Redux Toolkit ka standard API hai. Ye reducers, middleware aur development tooling ki common configuration ko simple bana deta hai. Usually application ke store setup ka starting point hota hai.

---

## 282. What is `createSlice`?

### Definition
`createSlice` generates a Redux slice containing a name, initial state, reducers, and automatically generated action creators.

### Simple Explanation — English
It lets you keep related state and update logic together. Instead of manually writing action types, action creators, and a reducer for every operation, `createSlice` generates much of that code for you. This makes Redux feature code easier to organize.

### Simple Explanation — Hindi
`createSlice` related state, initial state aur reducers ko ek place par organize karta hai aur action creators bhi automatically generate karta hai. Traditional Redux mein jo repetitive action type aur creator code likhna padta tha, uska kaafi part automatically handle ho jata hai.

---

## 283. What is `createAsyncThunk`, and when is it useful?

### Definition
`createAsyncThunk` is a Redux Toolkit utility for handling common asynchronous request lifecycles and dispatching pending, fulfilled, and rejected actions.

### Simple Explanation — English
It is useful when you want an async operation to update Redux state in a predictable way. For example, fetching a user's profile can dispatch pending while loading, fulfilled with the response, and rejected on failure. For more complete server-state caching, RTK Query may be a better fit.

### Simple Explanation — Hindi
`createAsyncThunk` async operations ko Redux flow ke saath integrate karta hai. API request ke liye pending, fulfilled aur rejected states automatically represent ki ja sakti hain. Lekin agar caching, invalidation aur server-state management chahiye, to RTK Query usually more suitable hai.

---

## 284. What is the difference between `createAsyncThunk` and RTK Query?

### Definition
`createAsyncThunk` gives you a lower-level pattern for running async logic and dispatching lifecycle actions, while RTK Query is a higher-level server-state solution with caching and data-fetching features.

### Simple Explanation — English
With `createAsyncThunk`, you usually decide where the request result lives, how loading and errors are stored, and how cache behavior works. RTK Query manages request lifecycles, caching, deduplication, invalidation, and generated hooks for you. I would choose based on whether I need custom client-state async logic or a complete server-data solution.

### Simple Explanation — Hindi
`createAsyncThunk` mein async logic ka kaafi control developer ke paas hota hai, lekin loading, caching aur data management manually organize karna pad sakta hai. RTK Query server data ke liye caching, invalidation, request lifecycle aur hooks provide karta hai. Server-state problem ke liye RTK Query often simpler hota hai.

---

## 285. What is RTK Query, and what problem does it solve?

### Definition
RTK Query is Redux Toolkit's data-fetching and server-state management solution for fetching, caching, updating, and synchronizing remote data.

### Simple Explanation — English
It reduces the need to manually write fetching, loading, error, cache, and refetch logic for every endpoint. You define an API service and endpoints, and RTK Query generates hooks and manages cached server data. It is especially useful when the application has many API-driven screens.

### Simple Explanation — Hindi
RTK Query server data ko fetch, cache, update aur synchronize karne ke liye Redux Toolkit ka solution hai. Isse har API ke liye manually loading, error, cache aur refetch logic likhne ki zarurat kam hoti hai. Large API-driven apps mein ye bahut useful ho sakta hai.

---

## 286. How does RTK Query cache server data?

### Definition
RTK Query stores fetched endpoint results in its cache and associates them with query arguments so different components can reuse the same server data.

### Simple Explanation — English
If multiple components request the same endpoint with the same parameters, RTK Query can reuse the cached data instead of unnecessarily sending duplicate requests. Cache lifetime, invalidation, and refetch behavior can be configured according to application needs.

### Simple Explanation — Hindi
RTK Query endpoint aur query arguments ke basis par fetched data ko cache karta hai. Agar multiple components same data request karte hain, to cached result reuse ho sakta hai aur duplicate request avoid ho sakti hai. Cache aur refetch behavior configuration ke according control kiya ja sakta hai.

---

## 287. What is the difference between client state and server state?

### Definition
Client state is data primarily owned by the frontend UI, while server state is data that originates from and is controlled by a backend system.

### Simple Explanation — English
Examples of client state include whether a modal is open or which tab is selected. Server state includes user profiles, product lists, or orders fetched from an API. Server state has concerns such as caching, refetching, synchronization, and stale data, which is why specialized server-state tools can be useful.

### Simple Explanation — Hindi
Client state frontend UI ka state hota hai, jaise modal open hai ya kaunsa tab selected hai. Server state backend se aane wala data hota hai, jaise users, products ya orders. Server data ke saath caching, refetching aur stale data jaise extra concerns hote hain.

---

## 288. How would you decide whether a piece of data belongs in Redux, component state, URL state, or server-state cache?

### Definition
State should be placed according to who owns it, who needs it, how long it should live, and whether it comes from the server.

### Simple Explanation — English
Local UI state belongs near the component that owns it. URL state is useful when the value should be shareable through the URL, such as filters or pagination. Server data is often best managed by a server-state/cache solution such as RTK Query. Redux is appropriate when multiple parts of the application need shared client state with centralized update logic.

### Simple Explanation — Hindi
Agar state sirf ek component ke UI ko control karti hai to local state best hai. Filters ya pagination jo URL mein represent hone chahiye, unke liye URL state useful hai. API data ke liye server-state/cache solution better ho sakta hai. Shared client state jise many areas need karte hain uske liye Redux suitable ho sakta hai.

---

## 289. What are selectors in Redux?

### Definition
Selectors are functions that read or derive specific pieces of data from the Redux state.

### Simple Explanation — English
A selector hides the exact store structure from components and lets them request the data they need. Selectors can also derive values, such as filtered lists or computed totals. Reusable selectors improve separation between component code and state structure.

### Simple Explanation — Hindi
Selectors Redux state se specific data read ya derive karne wale functions hote hain. Component ko complete store structure directly understand karne ki zarurat nahi hoti. Selectors filtered data, totals ya other derived values bhi calculate kar sakte hain.

---

## 290. Why should selectors be designed carefully for performance?

### Definition
Selectors should avoid unnecessary recalculation and unstable results that can cause components to re-render more often than necessary.

### Simple Explanation — English
If a selector creates a new array or object on every call, a component using that result may see a changed reference even when the actual data is unchanged. Memoized selectors can help when derived calculations are expensive or when stable references matter. Selector design should match the application's render behavior.

### Simple Explanation — Hindi
Agar selector har call par new array ya object create karta hai, to component ko new reference mil sakta hai aur unnecessary re-render ho sakta hai. Expensive derived calculations ke liye memoized selectors useful ho sakte hain. Selector ko performance aur data flow dono ko dhyan mein rakhkar design karna chahiye.

---

## 291. How does `useSelector` determine whether a component should re-render?

### Definition
`useSelector` subscribes the component to Redux store updates and compares the selector result to its previous result to decide whether the selected value changed.

### Simple Explanation — English
By default, React-Redux uses strict reference equality for the selector result. If the returned value is a new object on every store update, the component can re-render even when the underlying data is equivalent. This is why selecting stable values or using appropriate memoized selectors matters.

### Simple Explanation — Hindi
`useSelector` store updates ko observe karta hai aur selector ke current result ko previous result se compare karta hai. Default behavior mein reference equality important hoti hai. Agar selector har baar new object return kare, to component unnecessary re-render kar sakta hai.

---

## 292. How would you avoid unnecessary renders caused by Redux selectors?

### Definition
Avoid selector-driven extra renders by returning stable results, selecting only necessary state, and using memoized selectors where derived data requires them.

### Simple Explanation — English
Instead of selecting a large object and then reading one field, I would select only the needed value when practical. For derived data, a memoized selector can return the same result until its inputs change. I would also avoid creating new arrays or objects unnecessarily inside selectors.

### Simple Explanation — Hindi
Sirf required value select karna better hai instead of large object select karna. Derived data ke liye memoized selector use karke result reference stable rakha ja sakta hai jab inputs same hon. Selector ke andar unnecessary new arrays/objects create nahi karne chahiye.

---

## 293. How would you normalize relational data in Redux state?

### Definition
Normalization stores entities by stable IDs and keeps relationships as references instead of deeply duplicating the same objects in multiple places.

### Simple Explanation — English
For example, instead of copying the same user object into every message, store users by ID and messages with `userId` references. This reduces duplication and makes updates consistent. Redux Toolkit provides utilities such as `createEntityAdapter` to help with normalized collections.

### Simple Explanation — Hindi
Normalized state mein entities ko stable IDs ke basis par store kiya jata hai aur relations mein IDs reference hoti hain. Jaise har message mein complete user object copy karne ke bajay `userId` store kar sakte hain. Isse duplicate data kam hota hai aur updates easier hote hain.

---

## 294. How would you handle optimistic updates with Redux Toolkit or RTK Query?

### Definition
An optimistic update changes the UI or local cache immediately before the server confirms the operation, with a rollback path if the request fails.

### Simple Explanation — English
For example, when a user likes a post, the UI can immediately show the updated count. The API request runs in the background. If it fails, the previous state should be restored or synchronized with the server. RTK Query provides utilities for updating cached data optimistically and undoing the change when necessary.

### Simple Explanation — Hindi
Optimistic update mein server response ka wait kiye bina UI ko expected result ke according immediately update kar dete hain. Jaise like count immediately increase karna. Agar API fail ho jaye, to old value restore ya server se resync karni chahiye. RTK Query is pattern ko cache update utilities ke through support karta hai.

---

## 295. How would you persist selected Redux state across page refreshes?

### Definition
Redux state persistence means saving selected state to a browser storage mechanism or other persistence layer and rehydrating it when the application starts.

### Simple Explanation — English
I would persist only the state that actually needs to survive a refresh, such as selected preferences or certain non-sensitive settings. On startup, the application can read that stored data and initialize the store. Sensitive authentication data should be handled according to a secure authentication architecture rather than blindly placing it in browser storage.

### Simple Explanation — Hindi
Sirf required Redux state ko persist karna chahiye, jaise user preferences ya selected settings. App start hone par stored data read karke store initialize kar sakte hain. Sensitive authentication information ko browser storage mein blindly store nahi karna chahiye; secure auth architecture follow karni chahiye.

---

# 12. Testing, Architecture, Debugging & Real-World Scenarios

## 296. How would you test a React component that fetches data from an API?

### Definition
Testing an API-driven component means verifying its observable UI behavior for loading, success, error, and relevant user interactions without depending on a real production backend.

### Simple Explanation — English
I would mock or intercept the network request and test what the user sees. First verify the loading state, then provide a successful response and verify the rendered data. I would also test an error response and important interactions such as retry or submit. The test should focus on user-visible behavior rather than private implementation details.

### Simple Explanation — Hindi
API-based component ko test karte waqt network request ko mock/intercept karke loading, success aur error states verify karunga. Pehle loading UI check karunga, phir success response dekar data render hona verify karunga. Error aur retry jaise important interactions bhi test karne chahiye. Test ko user-visible behavior par focus karna chahiye.

---

## 297. What is the difference between unit testing, integration testing, and end-to-end testing in a React application?

### Definition
Unit tests verify small isolated pieces, integration tests verify multiple parts working together, and end-to-end tests verify complete user flows through the application.

### Simple Explanation — English
A unit test might check a utility function or small component behavior. An integration test can verify a form, state layer, and API boundary working together. An end-to-end test can simulate a real workflow such as login, navigating to a dashboard, and submitting a form. A good test strategy uses the right level for the behavior being verified.

### Simple Explanation — Hindi
Unit test chhote isolated logic ya component behavior ko verify karta hai. Integration test multiple pieces ke interaction ko verify karta hai. End-to-end test complete user flow ko browser ke through test karta hai, jaise login se dashboard tak jaana aur form submit karna. Har behavior ke liye appropriate test level choose karna chahiye.

---

## 298. How would you debug a production issue where a React page is rendering stale data?

### Definition
Debugging stale data means finding why the UI is displaying an older value than the latest expected application or server state.

### Simple Explanation — English
I would first determine whether the stale value comes from React state, a cache, a selector, an API response, or a synchronization issue. Then I would inspect request timing, Effect dependencies, stale closures, memoization, route changes, and server-state cache invalidation. I would also reproduce the exact user flow and use logs or monitoring data to determine where the old value entered the system.

### Simple Explanation — Hindi
Sabse pehle identify karunga ki stale data state, cache, selector, API response ya synchronization issue se aa raha hai. Phir Effect dependencies, stale closures, memoization, route changes aur server cache invalidation inspect karunga. Exact user flow reproduce karke logs/monitoring se trace karna useful hoga ki old data system mein kahan se aa raha hai.

---

## 299. How would you design and explain a scalable React application architecture for a 3-year-experience interview?

### Definition
A scalable React architecture separates features, UI, state, data access, and shared utilities so the codebase can grow without creating excessive coupling.

### Simple Explanation — English
I would organize the application around feature boundaries instead of putting everything into one global folder. Shared UI components should stay generic, while business-specific components and logic remain inside their feature. API access and server-state management should have clear boundaries, routing should support layouts and lazy loading, and shared client state should be introduced only where needed. I would also explain testing, error handling, performance monitoring, and coding conventions as part of the architecture.

### Simple Explanation — Hindi
Scalable React architecture mein features, UI, state, API/data layer aur shared utilities ko clear boundaries ke saath organize karna chahiye. Feature-specific logic ko same feature ke andar rakhna aur shared UI ko generic rakhna better hai. Routing mein layouts aur lazy loading ho sakti hai, server data ke liye clear data layer aur global client state ko only when needed use karna chahiye. Testing, error handling aur performance monitoring bhi architecture ka part hain.

---

## 300. You inherit a slow React dashboard with many API calls, large lists, global state, and frequent re-renders; how would you investigate the problem and decide which changes to make first?

### Definition
The correct approach is to measure the system, identify the largest bottlenecks, and then optimize the highest-impact problems in a controlled order.

### Simple Explanation — English
I would not immediately add `useMemo`, `useCallback`, or `React.memo` everywhere. First, I would reproduce the slow interactions and use React DevTools Profiler plus browser performance and network tools to determine whether the bottleneck is rendering, JavaScript execution, network requests, large DOM trees, or state propagation. Then I would prioritize high-impact changes such as reducing unnecessary API requests, improving server-state caching, virtualizing large lists, moving frequently changing state closer to where it is used, splitting large bundles, and optimizing expensive components. After every meaningful change, I would measure again to confirm the improvement.

### Simple Explanation — Hindi
Main directly har jagah `useMemo`, `useCallback` ya `React.memo` add nahi karunga. Pehle slow interaction reproduce karke React DevTools Profiler, browser performance tools aur network tools se actual bottleneck identify karunga. Phir high-impact problems ko priority dunga, jaise duplicate API requests reduce karna, server-state caching improve karna, large lists virtualize karna, frequently changing state ko relevant components ke close rakhna, large bundles split karna aur expensive components optimize karna. Har major change ke baad dobara measure karke verify karunga.

---

# ✅ Set 6 Complete

**Questions covered:** 251–300  
**Sections:** Routing, Code Splitting & Navigation + Global State, Redux Toolkit & Server State + Testing, Architecture, Debugging & Real-World Scenarios  
**Format:** Definition → Simple English → Simple Hindi

## 🎯 Full 300-Question Answer Bank Complete

You now have answers for all **300 React.js interview questions** from the provided source document.
