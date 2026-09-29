# React JS Logical / Scenario-Based Interview Questions — 81–110

**For:** 3 Years MERN Stack Developer

**Focus:** Practical React interview scenarios, debugging, performance, API behavior, large datasets, rendering decisions, and real-world problem solving.

These questions intentionally avoid basic definition-only questions. They are designed around the type of situation where an interviewer asks, “What would you do if...?”

## 81. Your React app has 20,000 items to display in a list. How would you make it performant?

### Simple Explanation — English

I would not render all 20,000 items into the DOM at once.

My first choice would be **list virtualization/windowing**. It renders only the items currently visible in the viewport, plus a small buffer.

For example, if only 20–30 rows are visible, the application may keep only those rows in the DOM instead of creating 20,000 DOM nodes.

For very large data coming from an API, I would also combine virtualization with pagination or incremental loading so we do not download everything unnecessarily.

The approach would be:

`Large dataset → Load data in chunks → Virtualize the visible rows → Memoize expensive rows if needed`

This keeps the DOM small and improves scrolling performance.

### Simple Explanation — Hindi

Agar React app mein 20,000 items show karne hain, to main saare 20,000 items ek saath DOM mein render nahi karunga.

Main **list virtualization** use karunga. Ismein sirf viewport mein visible items aur thode extra buffer items render hote hain.

Example: agar screen par 20–30 rows visible hain, to DOM mein 20,000 nodes banane ke bajay sirf required rows rakhi ja sakti hain.

Agar data API se aa raha hai, to virtualization ke saath pagination ya incremental loading bhi use karunga.

Flow:

`Large data → Chunks mein load → Visible items virtualize → Zarurat par row memoize`

---

## 82. You have 10,000 products and the user wants to search them while typing. The input becomes laggy. What would you do?

### Simple Explanation — English

First I would identify whether the bottleneck is filtering, rendering, or API requests.

If filtering/rendering is expensive, I can keep the input state immediate and use `useDeferredValue` for the expensive result list.

```jsx
const [query, setQuery] = useState("");
const deferredQuery = useDeferredValue(query);

const results = useMemo(
  () => products.filter(p => p.name.includes(deferredQuery)),
  [products, deferredQuery]
);
```

If the search calls an API on every keystroke, I would use **debouncing** and cancel obsolete requests.

If the result list itself is huge, I would combine this with virtualization.

So the solution depends on where the actual bottleneck is.

### Simple Explanation — Hindi

Agar 10,000 products mein typing ke time search laggy ho raha hai, to pehle identify karunga ki problem filtering mein hai, rendering mein hai ya API calls mein.

Agar local filtering/rendering expensive hai, to input ko immediately update rakhkar `useDeferredValue` se expensive list ko defer kar sakte hain.

Agar har keystroke par API call ho rahi hai, to **debouncing** aur old request cancellation use karunga.

Agar results bhi bahut zyada hain, to virtualization bhi add karunga.

Important point: pehle bottleneck identify karo, phir correct solution choose karo.

---

## 83. An API is being called on every keystroke in a search box. How would you optimize it?

### Simple Explanation — English

I would debounce the API request so that it runs after the user stops typing for a short period.

For example, instead of making requests for:

`r → re → rea → reac → react`

I would wait until the user pauses and then request `react`.

Conceptually:

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    fetchResults(query);
  }, 300);

  return () => clearTimeout(timer);
}, [query]);
```

I would also cancel obsolete requests with `AbortController` when appropriate, so an old request does not waste resources or overwrite newer results.

### Simple Explanation — Hindi

Search box mein har keystroke par API call ho rahi ho to main **debouncing** use karunga.

Instead of:

`r → re → rea → reac → react`

har step par API call karne ke, user ke typing pause karne ke baad request bhejunga.

```jsx
useEffect(() => {
  const timer = setTimeout(() => {
    fetchResults(query);
  }, 300);

  return () => clearTimeout(timer);
}, [query]);
```

Old requests ko `AbortController` se cancel bhi kar sakte hain taaki old response new result ko overwrite na kare.

---

## 84. The user types quickly and sometimes an old API response replaces the latest search result. What is the problem and how do you fix it?

### Simple Explanation — English

This is a **race condition**.

For example:

`Request A: "rea"` → starts first  
`Request B: "react"` → starts later

If B finishes first and then A finishes later, A can incorrectly overwrite the UI with stale data.

I would cancel obsolete requests using `AbortController`, and I would also make sure that only the latest request is allowed to update the state.

The important point is that network completion order is not guaranteed to match request order.

### Simple Explanation — Hindi

Ye **race condition** hai.

Example:

`Request A: "rea"` pehle start hui  
`Request B: "react"` baad mein start hui

Agar B pehle complete ho gayi aur A baad mein complete hui, to old A response latest result ko overwrite kar sakta hai.

Isko handle karne ke liye `AbortController` se old request cancel kar sakte hain aur latest request ke response ko hi state update karne dena chahiye.

Network response ka order request ke order jaisa hona guaranteed nahi hota.

---

## 85. A component re-renders many times and the page becomes slow. How would you debug it?

### Simple Explanation — English

I would not immediately add `useMemo` or `React.memo`.

First, I would reproduce the problem and use **React DevTools Profiler** to identify which components render frequently and how long those renders take.

Then I would check:

- Which state change is causing the render.
- Whether state is placed too high in the tree.
- Whether new object/array/function references are created unnecessarily.
- Whether expensive calculations run during every render.
- Whether a Context value changes too frequently.

After identifying the cause, I would apply the smallest suitable fix and profile again.

### Simple Explanation — Hindi

Agar component bahut baar re-render ho raha hai aur page slow hai, to main directly `useMemo` ya `React.memo` nahi lagaunga.

Pehle React DevTools Profiler se identify karunga ki kaunse components render ho rahe hain aur kitna time le rahe hain.

Check karunga:

- Kaunsa state change render cause kar raha hai.
- Kya state unnecessarily parent mein rakhi hai.
- Kya new object/array/function references baar-baar create ho rahe hain.
- Kya expensive calculation har render mein ho rahi hai.
- Kya Context frequently change ho raha hai.

Phir actual problem ke according smallest fix apply karke dobara profile karunga.

---

## 86. A child component is wrapped in `React.memo`, but it still re-renders every time. Why?

### Simple Explanation — English

`React.memo` compares props, and if a prop gets a new reference on every parent render, the child can still render.

For example:

```jsx
<Child style={{ color: "red" }} />
```

The object is newly created on every render.

Similarly:

```jsx
<Child onClick={() => doSomething()} />
```

creates a new function reference.

If stable identity is actually needed, I can use `useMemo` for objects or `useCallback` for functions.

But I would first verify that this re-render is actually a performance problem.

### Simple Explanation — Hindi

`React.memo` hone ke baad bhi child re-render kar sakta hai agar props ki reference har render mein change ho rahi ho.

Example:

```jsx
<Child style={{ color: "red" }} />
```

Har render mein new object create hota hai.

Similarly:

```jsx
<Child onClick={() => doSomething()} />
```

new function reference create karta hai.

Agar stable reference ki actual need hai to `useMemo` ya `useCallback` use kar sakte hain.

Lekin pehle check karna chahiye ki re-render actually performance problem hai ya nahi.

---

## 87. A parent has a large form and changing one input causes the entire form to feel slow. How would you improve it?

### Simple Explanation — English

I would first identify how much of the form is actually re-rendering.

Possible solutions include:

- Keep input state closer to the input instead of putting everything in one parent state.
- Split the form into smaller components.
- Use uncontrolled inputs where appropriate.
- Memoize expensive child sections when their props remain stable.
- Avoid expensive calculations during every keystroke.
- Use a form library when it genuinely simplifies large-form state management.

The main idea is to reduce the amount of UI work caused by each keystroke.

### Simple Explanation — Hindi

Agar large form mein ek input change karne par poora form slow feel ho raha hai, to pehle dekhunga ki kitna UI re-render ho raha hai.

Possible solutions:

- Input state ko unnecessarily high parent mein na rakho.
- Form ko smaller components mein split karo.
- Suitable cases mein uncontrolled inputs use karo.
- Expensive child sections ko memoize karo.
- Har keystroke par expensive calculation avoid karo.
- Large form ke liye suitable form library use kar sakte ho.

Goal hai ek keystroke ke response mein unnecessary UI work reduce karna.

---

## 88. You have a dashboard with 20 widgets, and changing one filter causes all widgets to re-render. How would you improve it?

### Simple Explanation — English

I would look at the state architecture first.

If the filter state is stored at the dashboard root, every update may cause a large subtree to render.

I could:

- Split the dashboard into independent widget components.
- Keep state close to the widgets that actually need it.
- Pass only the required values.
- Use `React.memo` for widgets where props are stable and rendering is expensive.
- Split frequently changing state from rarely changing state.
- Use selectors if the dashboard uses an external state store.

The goal is not to stop all renders, but to prevent unrelated widgets from doing expensive work.

### Simple Explanation — Hindi

Dashboard mein 20 widgets hain aur ek filter change karne par sab re-render ho rahe hain, to main pehle state architecture check karunga.

Possible approach:

- Dashboard ko independent widget components mein split karo.
- State ko un components ke closer rakho jahan actually required hai.
- Sirf required props pass karo.
- Expensive aur stable widgets par `React.memo` use karo.
- Frequently changing aur rarely changing state ko separate karo.
- External store ho to selectors use karo.

Goal har render ko stop karna nahi, balki unrelated widgets ka unnecessary expensive work avoid karna hai.

---

## 89. The same API data is being requested by five different components. How would you avoid duplicate requests?

### Simple Explanation — English

I would avoid making every component independently fetch the same server state.

Depending on the application, I could:

- Fetch once in a common parent and pass the data down.
- Use Context for simple shared data.
- Use Redux or another global state solution if the data belongs in application state.
- Prefer a server-state library such as TanStack Query when caching, deduplication, refetching, and stale-data handling are required.

For server data, a query/cache solution is often cleaner than manually maintaining duplicated fetch state in multiple components.

### Simple Explanation — Hindi

Agar same API data five components independently fetch kar rahe hain, to duplicate requests avoid karne ke liye common data source use karunga.

Options:

- Common parent mein ek baar fetch karke pass karo.
- Simple shared data ke liye Context.
- Complex application state ke liye Redux/other store.
- Server-state ke liye TanStack Query jaise solution, jo caching aur deduplication handle kar sakta hai.

Main manually same API logic multiple components mein repeat nahi karunga.

---

## 90. You have a list loaded from an API. Would you choose pagination, infinite scroll, or virtualization?

### Simple Explanation — English

These solve different problems.

- **Pagination** limits how much data is fetched and shown per page.
- **Infinite scroll** loads additional pages as the user reaches the end.
- **Virtualization** limits how many DOM elements are rendered at one time.

They can also be combined.

For example, for 100,000 server records, I might use:

`Server pagination → Infinite loading → Virtualized list`

If the user needs page numbers and predictable navigation, pagination may be better. For a feed-like experience, infinite scroll may be better. If the loaded list itself becomes very large, virtualization controls the DOM size.

### Simple Explanation — Hindi

Pagination, infinite scroll aur virtualization same problem solve nahi karte.

- **Pagination:** ek time par limited data fetch/show karta hai.
- **Infinite scroll:** user bottom ke paas aane par next page load karta hai.
- **Virtualization:** DOM mein ek time par limited visible items render karta hai.

Inhe combine bhi kar sakte hain.

Example:

`Server pagination → Infinite loading → Virtualized list`

Page numbers aur predictable navigation chahiye to pagination. Feed jaisa experience ho to infinite scroll. Loaded list bahut large ho to virtualization DOM size control karti hai.

---

## 91. How would you implement infinite scroll without causing duplicate API calls?

### Simple Explanation — English

I would avoid triggering requests directly from every scroll event.

A practical approach is to use an `IntersectionObserver` on a sentinel element near the bottom of the list.

When the sentinel becomes visible:

1. Check whether a request is already loading.
2. Check whether another page exists.
3. Fetch the next page.
4. Append the new items.
5. Update the page/cursor.
6. Continue observing.

I would also make sure the same page/cursor cannot be requested twice.

For very long lists, I would combine infinite loading with virtualization.

### Simple Explanation — Hindi

Infinite scroll mein main har scroll event par API call nahi karunga.

Bottom mein ek sentinel element rakhkar `IntersectionObserver` use kar sakte hain.

Jab sentinel visible ho:

1. Check karo request already loading hai ya nahi.
2. Check karo next page available hai ya nahi.
3. Next page fetch karo.
4. New items append karo.
5. Page/cursor update karo.
6. Observer continue rakho.

Same page ko duplicate request hone se bhi prevent karna hoga.

Bahut long list ho to virtualization ke saath combine kar sakte hain.

---

## 92. A user scrolls very quickly and your infinite-scroll API fires multiple times. What would you do?

### Simple Explanation — English

I would add request guards and make pagination state explicit.

For example, I would track:

- `isLoading`
- Current page/cursor
- `hasNextPage`
- A request identifier or query key when necessary

The observer callback should return early if a request is already in progress or there is no next page.

I would also consider a data-fetching library that handles caching and request deduplication.

The key is to make loading the next page an idempotent, controlled operation rather than allowing every observer event to trigger a request.

### Simple Explanation — Hindi

Fast scrolling ki wajah se multiple API calls ho rahi hain to request guards use karunga.

Track karunga:

- `isLoading`
- Current page/cursor
- `hasNextPage`
- Zarurat par request ID/query key

Agar request already running hai ya next page available nahi hai, observer callback ko return kar dena chahiye.

Caching/deduplication ke liye query library bhi use kar sakte hain.

Goal hai har observer event ko uncontrolled API call banne se rokna.

---

## 93. A search result list is slow even though the API response is fast. How would you find the real bottleneck?

### Simple Explanation — English

I would separate network time from UI time.

First I would check the Network panel to confirm the API is fast.

Then I would use the React Profiler and browser Performance panel to check:

- Expensive filtering/sorting.
- Too many component renders.
- Too many DOM nodes.
- Expensive layout or paint.
- Large images or heavy child components.

If filtering is expensive, I may memoize the calculation. If rendering is expensive, I may virtualize or split/memoize components.

The fix depends on whether the bottleneck is data processing, React rendering, or browser rendering.

### Simple Explanation — Hindi

Agar API fast hai lekin result list slow hai, to network aur UI performance ko separately check karunga.

Network panel se API timing verify karunga.

Phir React Profiler aur browser Performance panel se check karunga:

- Expensive filtering/sorting
- Too many renders
- Too many DOM nodes
- Layout/paint cost
- Heavy images/components

Filtering slow hai to calculation optimize kar sakte hain. Rendering slow hai to virtualization ya component optimization useful ho sakta hai.

Pehle bottleneck identify karna important hai.

---

## 94. A component has a `useEffect` that keeps calling the API repeatedly. How would you debug it?

### Simple Explanation — English

I would inspect the effect dependencies and identify what is changing after the request.

A common problem is an unstable object or function in the dependency array.

For example:

```jsx
const options = { page, limit: 20 };

useEffect(() => {
  fetchData(options);
}, [options]);
```

`options` is a new object on every render, so the effect can run repeatedly.

Depending on the requirement, I could use primitive dependencies, memoize the value, or restructure the effect.

I would also check whether the effect is unnecessarily setting state that changes its own dependencies.

### Simple Explanation — Hindi

Agar `useEffect` repeatedly API call kar raha hai, to sabse pehle dependency array check karunga.

Common problem unstable object/function dependency hoti hai.

```jsx
const options = { page, limit: 20 };

useEffect(() => {
  fetchData(options);
}, [options]);
```

Har render mein `options` ka new object ban raha hai, isliye effect repeat ho sakta hai.

Primitive dependencies use kar sakte hain, required case mein value memoize kar sakte hain ya effect ka structure change kar sakte hain.

Ye bhi check karna hoga ki effect apni dependency ko repeatedly change to nahi kar raha.

---

## 95. A user navigates away from a page while an API request is still running. How would you handle it?

### Simple Explanation — English

I would clean up the request when the component no longer needs it.

With `fetch`, `AbortController` is a common approach:

```jsx
useEffect(() => {
  const controller = new AbortController();

  fetch("/api/users", {
    signal: controller.signal
  });

  return () => controller.abort();
}, []);
```

This prevents unnecessary work for an obsolete request.

If a request cannot be cancelled, I would at least guard the result so an obsolete response cannot incorrectly update the current UI.

### Simple Explanation — Hindi

Agar user page se navigate kar gaya aur API request abhi running hai, to obsolete request ko cleanup/cancel karna better hai.

`fetch` ke saath `AbortController` use kar sakte hain:

```jsx
useEffect(() => {
  const controller = new AbortController();

  fetch("/api/users", {
    signal: controller.signal
  });

  return () => controller.abort();
}, []);
```

Agar request cancel nahi ho sakti, to obsolete response ko current UI state update karne se guard karna chahiye.

---

## 96. You need to show images for 5,000 products. The page is slow. What would you do?

### Simple Explanation — English

I would address both the number of DOM elements and the image loading cost.

For the list:

- Use virtualization or pagination/infinite loading.
- Render only the required product cards.

For images:

- Use appropriately sized images.
- Use lazy loading where suitable.
- Serve modern/compressed image formats.
- Use placeholders or thumbnails before the full image loads.

I would also avoid loading 5,000 full-resolution images immediately.

### Simple Explanation — Hindi

5,000 products ki images show karni hain to DOM aur image loading dono optimize karunga.

List ke liye:

- Virtualization ya pagination/infinite loading.
- Sirf required product cards render karna.

Images ke liye:

- Correct image dimensions.
- Suitable cases mein lazy loading.
- Compressed/modern formats.
- Placeholder ya thumbnail use karna.
- 5,000 full-resolution images ek saath load nahi karna.

---

## 97. A component needs data from an API and also receives the same data through props. How would you decide which source to use?

### Simple Explanation — English

I would establish a single source of truth.

If the parent already owns the required data and passes it through props, the child should normally use the prop rather than fetching the same data again.

If the child owns a specific server-state responsibility, I may fetch it there through an appropriate data-fetching abstraction.

I would avoid having both prop data and independently fetched data represent the same state unless there is a clear reason.

Duplicate sources can become inconsistent.

### Simple Explanation — Hindi

Agar parent already same API data props ke through child ko de raha hai, to child ko normally wahi prop data use karna chahiye, same data dobara fetch nahi karna chahiye.

Main **single source of truth** maintain karunga.

Agar child ka clear server-state responsibility hai, to child mein proper data-fetching abstraction use ho sakta hai.

Same data ke do independent sources unnecessary inconsistency create kar sakte hain.

---

## 98. A user changes a filter and the application performs expensive sorting on every render. How would you optimize it?

### Simple Explanation — English

If the sorting is genuinely expensive and depends on specific values, I would memoize the derived result.

```jsx
const sortedProducts = useMemo(() => {
  return [...products].sort(compareProducts);
}, [products, sortBy]);
```

I would also make sure the calculation is not being triggered by unrelated state changes.

If the dataset is extremely large, I would consider moving filtering/sorting to the server, especially when pagination is already server-driven.

So I would choose between client-side memoization and server-side processing based on dataset size and application requirements.

### Simple Explanation — Hindi

Agar expensive sorting har render mein run ho rahi hai, to relevant dependencies ke basis par derived result memoize kar sakte hain.

```jsx
const sortedProducts = useMemo(() => {
  return [...products].sort(compareProducts);
}, [products, sortBy]);
```

Ye bhi check karunga ki unrelated state change ki wajah se calculation repeat na ho.

Dataset bahut large hai to filtering/sorting server side karna better ho sakta hai, especially server pagination ke saath.

Solution dataset size aur architecture par depend karega.

---

## 99. A component receives a huge object as props, but it only needs two fields. How would you improve it?

### Simple Explanation — English

I would avoid passing more data than the child needs.

Instead of:

```jsx
<Profile user={hugeUserObject} />
```

I might pass:

```jsx
<Profile
  name={user.name}
  avatar={user.avatar}
/>
```

This makes the component contract clearer and can also make memoization more effective because the child depends on smaller, more stable values.

I would especially consider this when the object changes frequently but the child only needs a small part of it.

### Simple Explanation — Hindi

Agar child ko huge object mein se sirf do fields chahiye, to main unnecessary full object pass nahi karunga.

Instead of:

```jsx
<Profile user={hugeUserObject} />
```

pass kar sakte hain:

```jsx
<Profile
  name={user.name}
  avatar={user.avatar}
/>
```

Isse component ka contract clear hota hai aur memoization bhi more predictable ho sakti hai.

Especially useful jab large object frequently change hota hai lekin child ko sirf few fields chahiye.

---

## 100. You have a React page with a large table, filters, sorting, pagination, and API calls. How would you structure the solution?

### Simple Explanation — English

I would separate the concerns instead of putting everything in one component.

For example:

- `TablePage` → coordinates the page.
- `Filters` → owns or receives filter UI state.
- `Table` → displays rows.
- `Pagination` → handles page navigation.
- `useUsersQuery` or a query library → manages server data.
- A small utility or selector → handles derived sorting/filtering if it is client-side.

For a large dataset, I would prefer server-side filtering, sorting, and pagination. If a single loaded page is still large, I would add virtualization.

I would also keep loading, error, empty, and success states explicit.

The main goal is to make each responsibility independently testable and prevent one state change from causing unnecessary work across the entire page.

### Simple Explanation — Hindi

Large table, filters, sorting, pagination aur API calls ko ek hi component mein nahi rakhunga.

Structure kuch aisa ho sakta hai:

- `TablePage` → overall coordination.
- `Filters` → filter UI.
- `Table` → rows display.
- `Pagination` → page navigation.
- Query Hook/library → server data.
- Utility/selector → client-side derived data.

Large dataset ke liye server-side filtering, sorting aur pagination prefer karunga. Agar ek loaded page bhi bahut large hai to virtualization add karunga.

Loading, error, empty aur success states clearly handle karunga.

Main goal responsibilities ko separate rakhna aur unnecessary re-renders/work avoid karna hai.

---

## 101. A modal contains a large component tree, but opening it makes the whole page slow. What would you check?

### Simple Explanation — English

I would check whether the modal's code and heavy data are being loaded only when needed.

If the modal is rarely used, I can lazy-load its component.

I would also check:

- Whether opening the modal causes expensive calculations.
- Whether a large subtree renders unnecessarily.
- Whether data is fetched before it is needed.
- Whether images or heavy components are loaded immediately.

If the modal is complex, I would separate it into smaller components and load expensive sections only when required.

### Simple Explanation — Hindi

Agar modal open karne par whole page slow ho raha hai, to check karunga ki modal ka heavy code aur data sirf need hone par load ho raha hai ya nahi.

Rarely used modal ho to lazy loading use kar sakte hain.

Check:

- Modal open hone par expensive calculation.
- Large subtree ka unnecessary render.
- Unnecessary early API/data fetching.
- Heavy images/components.

Complex modal ko smaller components mein split karke heavy parts ko only when needed load kar sakte hain.

---

## 102. A React page becomes slow after adding a third-party library. How would you investigate it?

### Simple Explanation — English

I would verify whether the library is affecting bundle size, initialization time, rendering, or network requests.

I would use:

- Bundle analysis.
- Browser Performance panel.
- Network panel.
- React Profiler if the library affects rendering.

If the library is only needed on one route, I could lazy-load that route or dynamically import the library.

If a smaller dependency can provide the same functionality, I would evaluate that as well.

The important part is measuring the actual impact before replacing a dependency.

### Simple Explanation — Hindi

Third-party library add karne ke baad page slow hua hai to main check karunga ki issue bundle size, initialization, rendering ya network request mein hai.

Tools:

- Bundle analysis
- Browser Performance panel
- Network panel
- React Profiler

Agar library sirf ek route par required hai to us route/library ko lazy load kar sakte hain.

Alternative smaller dependency bhi evaluate kar sakte hain, lekin actual measurement ke baad.

---

## 103. A user clicks a button multiple times and the same API request is submitted multiple times. How would you prevent duplicate submissions?

### Simple Explanation — English

I would make the action state-aware.

For example:

```jsx
const [isSubmitting, setIsSubmitting] = useState(false);

async function handleSubmit() {
  if (isSubmitting) return;

  setIsSubmitting(true);

  try {
    await submitForm();
  } finally {
    setIsSubmitting(false);
  }
}
```

I would also disable the submit button while the request is pending.

For important backend operations, I would not rely only on the frontend. The backend can also use idempotency or duplicate-request protection when required.

### Simple Explanation — Hindi

Agar user button multiple times click karke same API request multiple baar send kar raha hai, to submission state maintain karunga.

```jsx
if (isSubmitting) return;

setIsSubmitting(true);

try {
  await submitForm();
} finally {
  setIsSubmitting(false);
}
```

Request pending hone par button disable bhi kar sakte hain.

Important operations ke liye backend side par bhi duplicate protection/idempotency useful hoti hai. Sirf frontend par depend nahi karna chahiye.

---

## 104. A component starts a timer, but after navigating away the timer continues running. What is wrong?

### Simple Explanation — English

The timer was created as an external side effect but was not cleaned up.

I would return a cleanup function from `useEffect`.

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(id);
}, []);
```

When the component no longer needs the effect, React runs the cleanup.

The same idea applies to event listeners, subscriptions, observers, and other resources.

### Simple Explanation — Hindi

Component ne timer start kiya lekin page se navigate karne ke baad timer continue kar raha hai, to cleanup missing hai.

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(id);
}, []);
```

Cleanup mein timer clear ho jayega.

Same concept event listeners, subscriptions aur observers par bhi apply hota hai.

---

## 105. A component shows stale data after the user changes an ID quickly. How would you solve it?

### Simple Explanation — English

This can happen when multiple asynchronous requests are active and an older request finishes after a newer request.

I would:

- Cancel the previous request with `AbortController` where possible.
- Associate the response with the current request/query.
- Ignore results from obsolete requests.
- Use a query library that handles caching and request lifecycle if the application is complex.

The key is to ensure that an old response cannot overwrite the state belonging to the latest ID.

### Simple Explanation — Hindi

User ID quickly change karta hai aur stale data show ho raha hai to multiple async requests ka race condition ho sakta hai.

Main:

- Possible ho to old request ko `AbortController` se cancel karunga.
- Response ko current request/query ke saath associate karunga.
- Obsolete response ko ignore karunga.
- Complex app mein query library use kar sakta hoon.

Important point: old response latest ID ka state overwrite nahi karna chahiye.

---

## 106. You have a large React page where only one small section changes frequently. How would you prevent unrelated sections from doing unnecessary work?

### Simple Explanation — English

I would colocate the frequently changing state as close as possible to the section that needs it.

If the state is currently at the page root, moving it down can prevent unrelated sections from participating in that update.

If state genuinely needs to be shared, I can split components and contexts or use selectors so components subscribe only to the data they need.

The principle is to minimize the scope of frequently changing state.

### Simple Explanation — Hindi

Agar page ka sirf ek small section frequently change hota hai, to us state ko jitna possible ho us section ke close rakhunga.

Agar state page root par unnecessarily stored hai, to usko neeche move karne se unrelated sections ka work reduce ho sakta hai.

Agar state genuinely shared hai, to components/contexts split kar sakte hain ya selectors use kar sakte hain.

Simple principle: frequently changing state ka scope chhota rakho.

---

## 107. A React search page has local filtering, API search, pagination, and sorting. How would you decide what should happen on the client and what should happen on the server?

### Simple Explanation — English

I would consider dataset size and the amount of work involved.

For a small dataset already loaded in the browser, client-side filtering and sorting can be simple and fast.

For a very large dataset, I would usually move filtering, sorting, and pagination to the server so the browser does not download and process unnecessary records.

The client can then manage UI state such as the current search text, selected filters, loading state, and current page.

For example:

`User filter → API query → Server filters/sorts → Server returns page → React renders page`

This also keeps the amount of browser memory and DOM work under control.

### Simple Explanation — Hindi

Client ya server par filtering/sorting decide karte time dataset size aur processing cost dekhta hoon.

Small dataset already browser mein loaded hai to client-side filtering/sorting simple ho sakti hai.

Very large dataset mein filtering, sorting aur pagination server par karna generally better hota hai, taaki browser unnecessary data download/process na kare.

Client UI state handle kar sakta hai:

`Filter → API query → Server filter/sort → Page response → React render`

Isse browser memory aur rendering work reduce hota hai.

---

## 108. You need to update a large list after one item changes. How would you avoid unnecessary work?

### Simple Explanation — English

I would update the item immutably while preserving references for items that did not change.

For example:

```jsx
setUsers(prev =>
  prev.map(user =>
    user.id === updated.id
      ? { ...user, ...updated }
      : user
  )
);
```

Then I can use a memoized row component:

```jsx
const UserRow = React.memo(...);
```

If the unchanged rows receive the same item references and stable props, React can skip their rendering where appropriate.

For extremely large lists, I would still combine this with virtualization.

### Simple Explanation — Hindi

Agar large list mein sirf ek item update hua hai, to immutable update karte time unchanged items ki references preserve karunga.

```jsx
setUsers(prev =>
  prev.map(user =>
    user.id === updated.id
      ? { ...user, ...updated }
      : user
  )
);
```

Rows ko `React.memo` se memoize kar sakte hain taaki unchanged rows unnecessary render na karein.

Very large list mein virtualization bhi useful rahegi.

---

## 109. A page has a very expensive calculation that does not depend on every piece of state. How would you prevent it from running on unrelated updates?

### Simple Explanation — English

I would first check whether the calculation is actually expensive.

If it is and its inputs are known, I can memoize the derived value:

```jsx
const result = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
```

I would also consider moving the calculation outside the component if it does not depend on component state at all.

The key is to avoid running expensive work just because an unrelated state value changed.

### Simple Explanation — Hindi

Agar calculation genuinely expensive hai aur sirf specific data par depend karti hai, to `useMemo` use kar sakte hain:

```jsx
const result = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
```

Agar calculation component state par depend hi nahi karti, to usko component ke bahar move karna bhi possible hai.

Goal hai unrelated state change par expensive calculation ko repeat hone se avoid karna.

---

## 110. You are asked to improve a slow React application. What is your overall step-by-step approach?

### Simple Explanation — English

My approach would be:

1. **Reproduce the problem** consistently.
2. **Measure it** using React Profiler and browser performance tools.
3. Identify whether the bottleneck is network, JavaScript, React rendering, DOM size, layout, or assets.
4. Fix the highest-impact issue first.
5. For large lists, consider virtualization and pagination.
6. For unnecessary renders, improve state placement and use memoization only where useful.
7. For search/API issues, use debouncing, cancellation, caching, or server-side filtering where appropriate.
8. For initial load, use code splitting and lazy loading.
9. Test the change again with the profiler.
10. Verify that the optimization improved real user behavior.

In an interview, I would emphasize **measure first, then optimize** rather than saying I would immediately add `useMemo` everywhere.

### Simple Explanation — Hindi

Slow React application ko improve karne ke liye mera approach:

1. Problem reproduce karunga.
2. React Profiler aur browser tools se measure karunga.
3. Identify karunga ki bottleneck network, JS, React rendering, DOM, layout ya assets mein hai.
4. Highest-impact issue pehle fix karunga.
5. Large lists ke liye virtualization/pagination consider karunga.
6. Unnecessary renders ke liye state placement aur appropriate memoization improve karunga.
7. Search/API issues mein debounce, cancellation, caching ya server-side filtering use karunga.
8. Initial loading ke liye code splitting/lazy loading.
9. Dobara profile karunga.
10. Confirm karunga ki actual performance improve hui.

Interview mein sabse important line: **pehle measure karo, phir optimize karo.**

---
