# React JS Interview Questions 41–80 — Interview Ready Answers

**Format:** Simple Explanation — English → Simple Explanation — Hindi → Examples where useful.

## 41. What are Custom Hooks?

### Simple Explanation — English

Custom Hooks are reusable JavaScript functions in React whose names start with `use` and which can use other React Hooks.

They are used to extract reusable stateful logic from components.

For example, if multiple components need the same data-fetching logic, we can create a `useFetch` Hook instead of repeating the same logic in every component.

```jsx
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  return { count, increment };
}
```

A Custom Hook shares logic, not the same state instance.

### Simple Explanation — Hindi

Custom Hook ek reusable JavaScript function hota hai jiska naam normally `use` se start hota hai aur jiske andar React Hooks use kiye ja sakte hain.

Iska use reusable stateful logic ko component se alag karne ke liye hota hai.

Example ke liye agar multiple components mein same API fetching logic chahiye, to `useFetch` Custom Hook bana sakte hain.

```jsx
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  return { count, increment };
}
```

Custom Hook logic share karta hai, same state ko automatically share nahi karta.

---

## 42. When should you create a Custom Hook?

### Simple Explanation — English

I create a Custom Hook when the same stateful or effect-based logic is needed in more than one component, or when a component has complex logic that would be clearer when extracted.

Common examples are:

- Data fetching
- Form handling
- Debouncing
- Authentication logic
- Window size tracking
- Online/offline status

The goal is to reuse logic and keep components easier to read.

### Simple Explanation — Hindi

Custom Hook tab create karna useful hota hai jab same stateful ya effect-based logic multiple components mein required ho.

Examples:

- API/data fetching
- Form handling
- Debouncing
- Authentication logic
- Window size track karna
- Online/offline status

Iska main goal reusable logic banana aur components ko clean rakhna hai.

---

## 43. Do Custom Hooks share state between components?

### Simple Explanation — English

No. Custom Hooks share the logic, not the same state instance.

If two components call the same Custom Hook, each component gets its own state.

For example:

```jsx
const a = useCounter();
const b = useCounter();
```

`a.count` and `b.count` are separate states.

If components need the same shared state, use a suitable shared-state solution such as lifted state, Context, or a state-management library.

### Simple Explanation — Hindi

Nahi. Custom Hook same logic share karta hai, lekin automatically same state share nahi karta.

Agar do components `useCounter()` call karte hain, to dono ko separate state instances milengi.

```jsx
const a = useCounter();
const b = useCounter();
```

`a.count` aur `b.count` alag states hain.

Agar actual same state multiple components ko chahiye, to lifted state, Context ya state-management solution use karna chahiye.

---

## 44. How would you create a reusable data-fetching Custom Hook?

### Simple Explanation — English

I would keep the fetching state and effect logic inside a Custom Hook and return the data, loading state, and error.

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function load() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error("Request failed");
        const result = await response.json();

        if (!ignore) setData(result);
      } catch (err) {
        if (!ignore) setError(err);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    load();

    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
}
```

Then a component can call `useFetch("/api/users")` and focus mainly on displaying the result.

### Simple Explanation — Hindi

Reusable data-fetching Custom Hook mein main API logic, loading state, data aur error handling ko ek jagah rakhoonga.

Example:

```jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch logic...

  return { data, loading, error };
}
```

Phir component simply `useFetch("/api/users")` call karke data use kar sakta hai.

Isse fetching logic baar-baar likhne ki zarurat nahi padti.

---

## 45. What is `useReducer`, and when is it better than `useState`?

### Simple Explanation — English

`useReducer` is a Hook for managing state through a reducer function and dispatched actions.

It is useful when:

- State has multiple related values.
- Many different actions can update the state.
- State transitions are complex.
- You want update logic in one predictable place.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

For simple state, `useState` is usually easier.

### Simple Explanation — Hindi

`useReducer` state ko reducer function aur actions ke through manage karne wala Hook hai.

Ye tab useful hota hai jab:

- State mein multiple related values hon.
- Multiple actions state ko update karte hon.
- State transitions complex hon.
- Update logic ko ek place par rakhna ho.

```jsx
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

Simple state ke liye `useState` usually easier hota hai.

---

## 46. What is `useImperativeHandle`, and when would you use it?

### Simple Explanation — English

`useImperativeHandle` lets a child component control which methods or values are exposed to a parent through a ref.

For example, a custom input can expose only `focus()` and `clear()` instead of exposing its complete internal implementation.

Conceptually:

```jsx
useImperativeHandle(ref, () => ({
  focus() {
    inputRef.current.focus();
  },
  clear() {
    inputRef.current.value = "";
  }
}));
```

It is useful for controlled imperative interactions, but normal React props and state should be preferred when they are sufficient.

### Simple Explanation — Hindi

`useImperativeHandle` child component ko control karne deta hai ki parent ko ref ke through kaunse methods ya values expose karne hain.

Example mein child sirf `focus()` ya `clear()` expose kar sakta hai, poori internal implementation nahi.

```jsx
useImperativeHandle(ref, () => ({
  focus() {
    inputRef.current.focus();
  }
}));
```

Ye specific imperative interactions ke liye useful hai. Normal props/state sufficient ho to unhe prefer karna chahiye.

---

## 47. What is `useTransition`, and why is it useful?

### Simple Explanation — English

`useTransition` lets us mark some state updates as non-urgent transitions.

This is useful when an update may involve expensive rendering and we want urgent interactions, such as typing or clicking, to remain responsive.

```jsx
const [isPending, startTransition] = useTransition();

function handleChange(value) {
  setInput(value);

  startTransition(() => {
    setSearchQuery(value);
  });
}
```

`isPending` can be used to show a loading indicator while the transition is in progress.

The important idea is that it helps React prioritize urgent UI work over lower-priority transition work.

### Simple Explanation — Hindi

`useTransition` kisi state update ko non-urgent transition ke roop mein mark karne deta hai.

Ye tab useful hai jab update expensive rendering cause kar sakta ho aur hum chahte hain ki typing ya clicking jaise urgent interactions responsive rahen.

```jsx
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setSearchQuery(value);
});
```

`isPending` se transition ke time loading indicator dikha sakte hain.

Simple words mein, React ko urgent aur less-urgent UI work prioritize karne mein help milti hai.

---

## 48. What is `useDeferredValue`, and when would you use it?

### Simple Explanation — English

`useDeferredValue` lets us use a deferred version of a value so that expensive UI work can lag behind a more urgent update.

For example, in a search screen, the input value should update immediately while a large result list can use a deferred value.

```jsx
const [query, setQuery] = useState("");
const deferredQuery = useDeferredValue(query);
```

The input can use `query`, while expensive rendering can use `deferredQuery`.

It is useful when the UI contains expensive rendering that should not block more urgent interactions.

### Simple Explanation — Hindi

`useDeferredValue` kisi value ka deferred version provide karta hai, jisse expensive UI work urgent update ke comparison mein baad mein process ho sakta hai.

Example search UI mein input immediately update ho sakta hai aur large result list deferred query use kar sakti hai.

```jsx
const [query, setQuery] = useState("");
const deferredQuery = useDeferredValue(query);
```

Ye tab useful hai jab expensive rendering user interaction ko slow kar sakti ho.

---

## 49. What causes a React component to re-render?

### Simple Explanation — English

A component can re-render when:

- Its state changes.
- Its parent renders and React renders that child as part of the process.
- Its consumed context value changes.
- Its subscribed external-store data changes.
- Its props change in a way that causes the component to render.

A re-render means React runs the component again to calculate the next UI. It does not automatically mean the browser DOM is fully recreated.

For example:

```jsx
setCount(prev => prev + 1);
```

changes state and schedules a new render.

### Simple Explanation — Hindi

React component re-render hone ke common reasons hain:

- State change
- Parent ka render
- Consumed Context value change
- External store ka subscribed data change
- Props mein relevant change

Re-render ka matlab component function ko dobara run karke next UI calculate karna hai. Iska matlab ye nahi ki pura browser DOM dobara create hota hai.

---

## 50. Does a parent re-render always cause its child to re-render?

### Simple Explanation — English

A parent rendering can cause its child to be considered for rendering, but React can sometimes skip child work through memoization or other optimizations.

For example:

```jsx
const Child = React.memo(function Child({ name }) {
  return <p>{name}</p>;
});
```

If the child's props remain the same according to `React.memo` comparison, React can skip that child render.

The important point is not to assume that every parent render means every child must produce new DOM. Measure performance before adding memoization.

### Simple Explanation — Hindi

Parent re-render hone par child normally rendering process mein aa sakta hai, lekin `React.memo` jaise optimization se child ka render skip ho sakta hai.

```jsx
const Child = React.memo(function Child({ name }) {
  return <p>{name}</p>;
});
```

Agar props same hain, `React.memo` child ko re-render se skip karne mein help kar sakta hai.

Har jagah memoization lagana zaroori nahi; actual performance issue ko measure karna better hai.

---

## 51. How does React decide what needs to be updated in the DOM?

### Simple Explanation — English

React renders the updated component tree, compares the new result with the previous result during reconciliation, and then commits the necessary changes to the host environment.

For a browser application, that means updating the required DOM nodes.

For example, if only text changes:

```jsx
<h1>{count}</h1>
```

React can update the relevant text node instead of manually rebuilding the entire page.

Keys help React maintain identity when working with lists.

### Simple Explanation — Hindi

React updated component tree ko render karta hai, new aur previous result ko reconciliation ke through compare karta hai, aur phir required changes commit karta hai.

Browser application mein iska result required DOM nodes ke updates ke form mein hota hai.

Agar sirf text change hua hai, to React relevant text ko update kar sakta hai, pura page manually rebuild nahi karta.

Lists mein keys identity maintain karne mein help karti hain.

---

## 52. Explain the React rendering process from state update to DOM update.

### Simple Explanation — English

A simplified rendering flow is:

1. State or props change.
2. React schedules an update.
3. The component renders again.
4. React calculates the new UI representation.
5. React reconciles it with the previous result.
6. React commits the required DOM changes.
7. The browser paints the updated UI.

Example:

`setCount()` → render → reconciliation → commit → browser displays updated count.

This is the high-level flow I would explain in an interview.

### Simple Explanation — Hindi

React rendering ka simplified flow:

1. State ya props change hote hain.
2. React update schedule karta hai.
3. Component dobara render hota hai.
4. New UI representation calculate hota hai.
5. Previous result ke saath reconciliation hoti hai.
6. Required DOM changes commit hote hain.
7. Browser updated UI display karta hai.

Simple flow:

`setCount()` → render → reconciliation → commit → updated UI

---

## 53. How does reconciliation work with lists and keys?

### Simple Explanation — English

During reconciliation, React needs to determine which list items correspond to which previous items.

A stable key gives each item an identity.

```jsx
users.map(user => (
  <User key={user.id} user={user} />
))
```

If an item moves, is inserted, or is removed, stable keys help React match the existing item with the correct new item.

Without good keys, React may associate the wrong component instance with a list position, which can cause incorrect UI or state behavior.

### Simple Explanation — Hindi

Lists ke reconciliation mein React ko identify karna hota hai ki new list ka kaunsa item previous list ke kaunse item se related hai.

Stable key item ki identity provide karti hai.

```jsx
users.map(user => (
  <User key={user.id} user={user} />
))
```

Agar item move, insert ya delete hota hai, stable keys React ko correct item match karne mein help karti hain.

Isliye dynamic lists mein stable unique keys important hain.

---

## 54. Why is using an array index as a key sometimes problematic?

### Simple Explanation — English

An array index is based on position, not item identity.

Suppose we have:

```jsx
items.map((item, index) => (
  <Item key={index} item={item} />
))
```

If an item is inserted at the beginning or the list is reordered, indexes change. React may then associate an existing component instance with a different item.

This can cause incorrect local state or unexpected UI behavior.

Using a stable ID is usually better:

```jsx
key={item.id}
```

An index can be acceptable for a truly static list that never changes order or gets items inserted/removed.

### Simple Explanation — Hindi

Array index item ki identity nahi, uski position represent karta hai.

Agar list reorder ho, item insert/delete ho, to indexes change ho sakte hain. React existing component instance ko different item ke saath associate kar sakta hai.

Isse local state ya UI behavior unexpected ho sakta hai.

Better:

```jsx
key={item.id}
```

Lekin completely static list jiska order kabhi change nahi hota, wahan index acceptable ho sakta hai.

---

## 55. What is batching in React?

### Simple Explanation — English

Batching means React can group multiple state updates together and process them in a coordinated render instead of rendering after every individual update.

For example:

```jsx
setFirstName("A");
setLastName("B");
```

React can batch these updates so the component does not need a separate render for every setter call.

Modern React performs automatic batching in many asynchronous contexts as well.

The benefit is fewer unnecessary renders and better performance.

### Simple Explanation — Hindi

Batching ka matlab hai React multiple state updates ko group karke ek coordinated render mein process kar sakta hai.

Example:

```jsx
setFirstName("A");
setLastName("B");
```

In updates ko React batch kar sakta hai, jisse unnecessary separate renders reduce hote hain.

Modern React mein automatic batching many asynchronous situations mein bhi available hai.

Main benefit better performance aur fewer renders hai.

---

## 56. What is Strict Mode, and why does React use it?

### Simple Explanation — English

`StrictMode` is a development-only tool that helps identify potential problems in a React application.

It can intentionally perform additional checks and development behavior around rendering and effects so that unsafe patterns become easier to detect.

Example:

```jsx
<StrictMode>
  <App />
</StrictMode>
```

It does not add a visible UI feature. It is mainly there to help developers find bugs and prepare code for modern React behavior.

### Simple Explanation — Hindi

`StrictMode` React ka development tool hai jo application mein potential problems identify karne mein help karta hai.

Ye development mein additional checks ya behavior perform kar sakta hai taaki unsafe patterns aur bugs detect ho saken.

```jsx
<StrictMode>
  <App />
</StrictMode>
```

Ye UI feature nahi hai. Iska main purpose development ke time code quality aur potential issues identify karna hai.

---

## 57. What is concurrent rendering in React?

### Simple Explanation — English

Concurrent rendering is a React rendering capability that allows rendering work to be interruptible and prioritized.

Instead of treating every update as one uninterrupted blocking task, React can work on lower-priority rendering while keeping more urgent interactions responsive.

For example, typing in an input should remain responsive even if updating a large result list is expensive.

Features such as transitions and deferred values are related to this model.

The important point is that concurrency is about scheduling and interruptibility of rendering work, not simply creating more JavaScript threads.

### Simple Explanation — Hindi

Concurrent rendering React ki rendering capability hai jisme rendering work interruptible aur prioritizable ho sakta hai.

Agar large list render karna expensive hai aur user typing kar raha hai, React urgent interaction ko responsive rakhne ke liye lower-priority work ko manage kar sakta hai.

`useTransition` aur `useDeferredValue` isi model se related features hain.

Important point: concurrent rendering ka matlab extra JavaScript threads create karna nahi hai; ye rendering work ko schedule aur prioritize karne ke about hai.

---

## 58. How do you identify unnecessary re-renders in a React application?

### Simple Explanation — English

I would first measure the application instead of adding memoization blindly.

Useful tools include React DevTools Profiler and browser performance tools.

I would check:

- Which components render frequently.
- How long renders take.
- Which props or state changes trigger the render.
- Whether expensive calculations repeat unnecessarily.
- Whether large lists are causing expensive work.

After finding the bottleneck, I can apply an appropriate optimization such as component splitting, memoization, virtualization, or better state placement.

### Simple Explanation — Hindi

Main unnecessary re-renders identify karne ke liye pehle performance measure karoonga, directly har jagah memoization nahi lagaoonga.

React DevTools Profiler useful hai.

Check karunga:

- Kaunse components frequently render ho rahe hain.
- Render mein kitna time lag raha hai.
- Kaunsa state/prop change render cause kar raha hai.
- Kya expensive calculation baar-baar ho rahi hai.
- Kya large list expensive work kar rahi hai.

Problem identify hone ke baad appropriate optimization apply karunga.

---

## 59. How do you optimize a slow React component?

### Simple Explanation — English

First, I would profile the component to find the actual bottleneck.

Depending on the problem, I might:

- Split large components.
- Move state closer to where it is needed.
- Use `React.memo` when it prevents meaningful repeated work.
- Use `useMemo` for genuinely expensive calculations.
- Use `useCallback` when stable function identity matters.
- Virtualize large lists.
- Lazy-load expensive screens.
- Reduce unnecessary effects and work.

I would measure again after the change to verify that it actually improved performance.

### Simple Explanation — Hindi

Slow component ko optimize karne se pehle actual bottleneck identify karna chahiye.

Problem ke according:

- Large component ko split kar sakte hain.
- State ko required location ke closer move kar sakte hain.
- Useful case mein `React.memo` use kar sakte hain.
- Expensive calculation ke liye `useMemo`.
- Stable callback reference ki actual need ho to `useCallback`.
- Large lists ke liye virtualization.
- Heavy screens ke liye lazy loading.
- Unnecessary effects/work reduce karna.

Optimization ke baad dobara measure karna important hai.

---

## 60. How do you use React DevTools Profiler to find performance problems?

### Simple Explanation — English

React DevTools Profiler records component rendering so we can inspect which components rendered and how much time they took.

A typical process is:

1. Open React DevTools.
2. Record an interaction.
3. Perform the slow action.
4. Inspect the components that rendered.
5. Look at render durations and repeated renders.
6. Identify the likely bottleneck.
7. Apply a targeted optimization.
8. Profile again.

This gives evidence instead of guessing which component is slow.

### Simple Explanation — Hindi

React DevTools Profiler component rendering ko record karta hai aur batata hai ki kaunse components render hue aur kitna time laga.

Process:

1. React DevTools open karo.
2. Interaction record karo.
3. Slow action perform karo.
4. Rendered components inspect karo.
5. Duration aur repeated renders dekho.
6. Bottleneck identify karo.
7. Targeted optimization karo.
8. Dobara profile karo.

Isse guess karne ke bajay actual performance data milta hai.

---

## 61. When does `React.memo` actually improve performance?

### Simple Explanation — English

`React.memo` can improve performance when a component renders frequently, its rendering is meaningfully expensive, and its props often remain unchanged.

```jsx
const UserCard = React.memo(function UserCard({ user }) {
  return <div>{user.name}</div>;
});
```

If the parent renders but `user` is the same according to the memo comparison, React can skip rendering `UserCard`.

It may provide little or no benefit when props change every time, the component is already very cheap, or memoization itself adds unnecessary complexity.

### Simple Explanation — Hindi

`React.memo` tab useful hota hai jab component frequently render ho raha ho, rendering meaningful work karti ho aur props often same rehte hon.

```jsx
const UserCard = React.memo(function UserCard({ user }) {
  return <div>{user.name}</div>;
});
```

Agar parent render ho aur `user` prop same ho, React child render skip kar sakta hai.

Agar props har baar change hote hain ya component bahut simple hai, to `React.memo` ka benefit kam ho sakta hai.

---

## 62. When can `useMemo` make performance worse instead of better?

### Simple Explanation — English

`useMemo` itself has a cost because React has to store the memoized value and compare dependencies.

It can be unnecessary when the calculation is already cheap.

For example:

```jsx
const fullName = useMemo(
  () => `${firstName} ${lastName}`,
  [firstName, lastName]
);
```

For such a simple calculation, memoization may add complexity without meaningful benefit.

I would use `useMemo` when profiling or the nature of the calculation shows that avoiding repeated expensive work is useful.

### Simple Explanation — Hindi

`useMemo` ka bhi overhead hota hai, kyunki React memoized value ko store karta hai aur dependencies compare karta hai.

Agar calculation already very cheap hai, to `useMemo` unnecessary ho sakta hai.

```jsx
const fullName = useMemo(
  () => `${firstName} ${lastName}`,
  [firstName, lastName]
);
```

Simple calculation ke liye ye extra complexity add kar sakta hai.

Isliye `useMemo` actual performance need ke according use karna chahiye.

---

## 63. When can `useCallback` make performance worse instead of better?

### Simple Explanation — English

`useCallback` also has a cost because React stores the function and compares its dependencies.

If the function is cheap and its identity does not matter, `useCallback` may add complexity without helping.

For example, wrapping every event handler in `useCallback` is not automatically a performance optimization.

It becomes more useful when stable function identity helps a memoized child or when the function is a relevant dependency.

The correct approach is to measure and use it where it provides value.

### Simple Explanation — Hindi

`useCallback` bhi free optimization nahi hai. React function reference aur dependencies ko manage karta hai.

Agar function simple hai aur uski identity ka koi importance nahi hai, to `useCallback` unnecessary complexity add kar sakta hai.

Har event handler ko automatically `useCallback` mein wrap karna zaroori nahi.

Ye especially useful ho sakta hai jab memoized child ko stable callback dena ho ya function dependency ka important part ho.

---

## 64. How would you optimize a list containing thousands of items?

### Simple Explanation — English

For a very large list, rendering thousands of DOM elements at once can be expensive.

I would consider:

- List virtualization/windowing.
- Pagination or infinite scrolling.
- Memoizing expensive list items when appropriate.
- Stable keys.
- Avoiding unnecessary parent renders.
- Keeping item rendering lightweight.
- Loading data in manageable chunks.

For example, virtualization renders only the rows currently visible in the viewport instead of creating thousands of DOM nodes at once.

### Simple Explanation — Hindi

Thousands of items ki list ek saath render karna expensive ho sakta hai.

Main consider karunga:

- List virtualization/windowing
- Pagination ya infinite scrolling
- Appropriate item memoization
- Stable keys
- Unnecessary parent renders avoid karna
- Item component ko lightweight rakhna
- Data ko manageable chunks mein load karna

Virtualization mein generally sirf visible rows render hoti hain, isliye DOM work reduce hota hai.

---

## 65. What is list virtualization, and when would you use it?

### Simple Explanation — English

List virtualization means rendering only the items currently visible, plus a small buffer, instead of rendering the entire large list.

For example, if a list contains 10,000 rows but only 20 are visible, virtualization can keep only the relevant rows rendered.

It is useful for:

- Large tables
- Large chat histories
- Product lists
- Logs
- Long feeds

Libraries such as `react-window` and other virtualization solutions can help implement this pattern.

### Simple Explanation — Hindi

List virtualization ka matlab hai large list ke saare items render karne ke bajay currently visible items aur small buffer ko render karna.

Agar list mein 10,000 rows hain aur screen par sirf 20 visible hain, to virtualization relevant rows ko hi render kar sakti hai.

Ye large tables, chat history, product lists, logs aur feeds mein useful hota hai.

---

## 66. How would you improve the initial loading performance of a React application?

### Simple Explanation — English

I would first measure the initial load and then optimize the largest contributors.

Common techniques include:

- Code splitting.
- Route-level lazy loading.
- `React.lazy()` and `Suspense`.
- Reducing the JavaScript bundle.
- Removing unused dependencies.
- Optimizing images and fonts.
- Caching static assets.
- Server-side rendering or static generation when appropriate.
- Avoiding unnecessary JavaScript on the initial screen.

The goal is to deliver the content needed for the first interaction quickly and load less-critical code later.

### Simple Explanation — Hindi

Initial loading improve karne ke liye pehle measure karunga ki bundle aur loading mein sabse bada contribution kis cheez ka hai.

Common techniques:

- Code splitting
- Route-level lazy loading
- `React.lazy()` aur `Suspense`
- JavaScript bundle reduce karna
- Unused dependencies remove karna
- Images/fonts optimize karna
- Static assets cache karna
- Appropriate case mein SSR ya static generation
- Initial screen par unnecessary JavaScript avoid karna

Goal hai important UI ko jaldi available karna aur non-critical code ko later load karna.

---

## 67. When should you use local state, Context API, or Redux?

### Simple Explanation — English

I choose based on the scope and complexity of the state.

- **Local state:** when only one component or a small nearby component tree needs it.
- **Context:** when a value needs to be shared across a subtree and the update requirements are relatively simple.
- **Redux:** when application state is shared widely and has more complex update flows, debugging, middleware, or structured state requirements.

I would not introduce Redux just because an application has multiple components. The state should be moved to the simplest solution that satisfies the requirements.

### Simple Explanation — Hindi

State solution choose karte time scope aur complexity dekhta hoon.

- **Local state:** jab data sirf ek component ya nearby components ko chahiye.
- **Context:** jab value ek subtree mein share karni ho aur state requirements simple hon.
- **Redux:** jab shared application state large/complex ho aur structured updates, middleware ya debugging ki need ho.

Sirf multiple components hone ki wajah se Redux introduce karna zaroori nahi hai. Simple requirement ke liye simple solution better hai.

---

## 68. What is Context API, and how does it work?

### Simple Explanation — English

Context lets us make a value available to components in a subtree without passing it manually through every level of props.

Basic flow:

`createContext → Provider → useContext`

Example:

```jsx
const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Page />
    </ThemeContext.Provider>
  );
}

function Button() {
  const theme = useContext(ThemeContext);
  return <button>{theme}</button>;
}
```

Context is useful for values such as theme, locale, or authenticated user information.

### Simple Explanation — Hindi

Context API kisi value ko component tree ke ek subtree mein available karne deta hai bina har level par props pass kiye.

Basic flow:

`createContext → Provider → useContext`

Example:

```jsx
const ThemeContext = createContext("light");

<ThemeContext.Provider value="dark">
  <Page />
</ThemeContext.Provider>
```

Child component `useContext(ThemeContext)` se value read kar sakta hai.

Theme, locale aur user information jaise shared values ke liye useful hai.

---

## 69. Why isn't Context always a replacement for Redux?

### Simple Explanation — English

Context and Redux solve related but different problems.

Context mainly provides a way to pass shared values through a component tree. It does not by itself provide the full state-management architecture that Redux offers.

Redux can provide:

- Structured action-based updates.
- Centralized state.
- Middleware.
- Redux DevTools.
- Selectors.
- A predictable update model.

Context can still be the better choice for simple shared values such as theme or locale.

The decision depends on the application's state complexity.

### Simple Explanation — Hindi

Context aur Redux related problems solve karte hain, lekin exactly same tool nahi hain.

Context mainly shared value ko component tree mein provide karne ka mechanism hai. Redux structured state management ke liye additional architecture deta hai.

Redux mein actions, centralized state, middleware, DevTools aur selectors jaise features milte hain.

Simple theme ya locale ke liye Context enough ho sakta hai. Complex application state ke liye Redux useful ho sakta hai.

---

## 70. What is Redux and why would you use it with React?

### Simple Explanation — English

Redux is a predictable state-management library commonly used to manage shared application state.

The basic idea is to keep state in a store and update it through actions and reducers.

A simplified flow is:

`UI → dispatch(action) → reducer → store updates → UI`

Redux can be useful when many parts of an application need the same state and the update logic is complex enough to benefit from a structured architecture.

In modern Redux applications, Redux Toolkit is the recommended way to write Redux logic.

### Simple Explanation — Hindi

Redux ek predictable state-management library hai jo shared application state manage karne ke liye use hoti hai.

Basic flow:

`UI → dispatch(action) → reducer → store update → UI`

Jab application ke multiple parts ko same state chahiye aur update logic complex ho, tab Redux useful ho sakta hai.

Modern Redux applications mein Redux Toolkit commonly recommended approach hai.

---

## 71. Explain the Redux data flow: Action → Dispatch → Middleware → Reducer → Store → UI.

### Simple Explanation — English

The Redux flow can be explained step by step:

1. The user interacts with the UI.
2. The application dispatches an action.
3. Middleware can inspect or process the action.
4. The reducer calculates the next state.
5. The store updates with the new state.
6. Components subscribed to the relevant state update and render the new UI.

Example:

```js
dispatch({ type: "cart/add", payload: product });
```

The reducer receives the action and returns the next state.

### Simple Explanation — Hindi

Redux flow ko step-by-step explain kar sakte hain:

1. User UI ke saath interact karta hai.
2. Application action dispatch karti hai.
3. Middleware action ko process/inspect kar sakta hai.
4. Reducer next state calculate karta hai.
5. Store new state rakhta hai.
6. Relevant components updated state ke according UI render karte hain.

Example:

```js
dispatch({ type: "cart/add", payload: product });
```

---

## 72. What are Redux Toolkit, slices, reducers, actions, and selectors?

### Simple Explanation — English

**Redux Toolkit (RTK)** is the recommended way to write modern Redux logic.

- **Slice:** groups related state, reducers, and generated actions.
- **Reducer:** describes how state changes for an action.
- **Action:** describes what happened.
- **Selector:** reads or derives specific data from the Redux state.

Example:

```js
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1;
    }
  }
});
```

RTK uses Immer internally, so this reducer syntax is translated into immutable state updates.

### Simple Explanation — Hindi

**Redux Toolkit (RTK)** modern Redux logic likhne ka recommended approach hai.

- **Slice:** related state, reducers aur actions ko group karta hai.
- **Reducer:** batata hai state kaise change hogi.
- **Action:** batata hai kya event/action hua.
- **Selector:** Redux state se required data read ya derive karta hai.

Example:

```js
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1;
    }
  }
});
```

RTK internally Immer use karta hai, isliye ye syntax immutable update mein convert hota hai.

---

## 73. What is Redux Thunk, and how do you handle asynchronous API calls with Redux?

### Simple Explanation — English

Redux Thunk is middleware that allows an action creator to return a function instead of only a plain action object.

That function can perform asynchronous work and dispatch actions such as loading, success, and failure.

Typical flow:

`dispatch thunk → API request → pending state → success/failure action → reducer updates store`

Example:

```js
const fetchUsers = () => async dispatch => {
  dispatch(usersLoading());

  try {
    const response = await fetch("/api/users");
    const data = await response.json();
    dispatch(usersSuccess(data));
  } catch (error) {
    dispatch(usersFailure(error.message));
  }
};
```

In modern Redux, Redux Toolkit's async patterns such as `createAsyncThunk` can simplify this approach.

### Simple Explanation — Hindi

Redux Thunk middleware action creator ko function return karne deta hai.

Ye function asynchronous API call kar sakta hai aur loading, success aur failure actions dispatch kar sakta hai.

Flow:

`dispatch thunk → API request → loading → success/failure → reducer → store update`

Example:

```js
const fetchUsers = () => async dispatch => {
  dispatch(usersLoading());

  try {
    const response = await fetch("/api/users");
    const data = await response.json();
    dispatch(usersSuccess(data));
  } catch (error) {
    dispatch(usersFailure(error.message));
  }
};
```

Modern Redux mein `createAsyncThunk` is pattern ko simpler bana sakta hai.

---

## 74. How does React Router work, and how do you create protected/private routes?

### Simple Explanation — English

React Router maps URL paths to React UI and lets the application navigate without a full browser page reload.

A protected route checks authentication before rendering the protected page.

Conceptually:

```jsx
function ProtectedRoute({ children }) {
  const isAuthenticated = checkAuth();

  return isAuthenticated
    ? children
    : <Navigate to="/login" replace />;
}
```

Then protected pages can be wrapped with this logic.

In a real application, authentication should also be enforced by the backend/API. A frontend route guard should not be treated as the security boundary.

### Simple Explanation — Hindi

React Router URL paths ko React UI ke saath map karta hai aur SPA navigation provide karta hai.

Protected route mein pehle check karte hain ki user authenticated hai ya nahi.

```jsx
function ProtectedRoute({ children }) {
  const isAuthenticated = checkAuth();

  return isAuthenticated
    ? children
    : <Navigate to="/login" replace />;
}
```

Agar authenticated hai to page show hoga, warna login par redirect kar sakte hain.

Important: frontend route guard security boundary nahi hai; backend ko bhi authentication/authorization enforce karna chahiye.

---

## 75. How do you handle API calls in React, including loading, success, error, and empty states?

### Simple Explanation — English

I normally model an API request with explicit UI states:

- Loading
- Success with data
- Success with no data
- Error

For example:

```jsx
if (loading) return <Spinner />;
if (error) return <ErrorMessage />;
if (!data?.length) return <EmptyState />;

return <UserList users={data} />;
```

The actual request can be implemented with `fetch`, Axios, a Custom Hook, or a server-state library depending on the project.

For larger applications, tools such as TanStack Query can manage caching, retries, refetching, and server-state synchronization.

### Simple Explanation — Hindi

API call ko normally multiple UI states mein handle karna chahiye:

- Loading
- Success with data
- Empty state
- Error

Example:

```jsx
if (loading) return <Spinner />;
if (error) return <ErrorMessage />;
if (!data?.length) return <EmptyState />;

return <UserList users={data} />;
```

Request `fetch`, Axios, Custom Hook ya server-state library se handle kar sakte hain.

Large application mein TanStack Query jaise tools caching, refetching aur server-state management ko simplify kar sakte hain.

---

## 76. What are Error Boundaries, and what errors can they catch?

### Simple Explanation — English

Error Boundaries are React components that catch certain rendering errors in their child component tree and show fallback UI instead of allowing the entire UI section to fail.

They are useful for isolating failures in parts of a React application.

A traditional Error Boundary is implemented using class component lifecycle APIs such as `getDerivedStateFromError` and `componentDidCatch`.

They generally catch errors during rendering and related lifecycle work in the child tree, but they do not catch every possible error, such as errors from ordinary event handlers or arbitrary asynchronous callbacks.

For event-handler errors, handle the error directly in the event logic.

### Simple Explanation — Hindi

Error Boundary React application ke child component tree mein certain rendering errors ko catch karke fallback UI show karne mein help karta hai.

Iska benefit ye hai ki ek component ka rendering error poori UI ko fail karne ke bajay ek specific section mein isolate kiya ja sakta hai.

Traditional Error Boundary class component ke lifecycle methods jaise `getDerivedStateFromError` aur `componentDidCatch` se banaya jata hai.

Ye har type ka error catch nahi karta. Event handler ya arbitrary async callback ke errors ko usually directly handle karna padta hai.

---

## 77. How do you implement lazy loading and code splitting using `React.lazy()` and `Suspense`?

### Simple Explanation — English

Lazy loading means loading a component's code only when it is needed.

With `React.lazy()`, a component can be dynamically imported:

```jsx
const Dashboard = React.lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}
```

The bundler can create a separate chunk for the lazy-loaded module. The browser downloads that code when the component is needed.

This is especially useful for route-level code splitting and large features.

### Simple Explanation — Hindi

Lazy loading ka matlab hai component ka code tab load karna jab actually uski need ho.

`React.lazy()` aur `Suspense` ka example:

```jsx
const Dashboard = React.lazy(() => import("./Dashboard"));

<Suspense fallback={<p>Loading...</p>}>
  <Dashboard />
</Suspense>
```

Bundler lazy component ke liye separate chunk bana sakta hai aur required time par browser us code ko load karta hai.

Ye route-level code splitting aur large features ke liye useful hai.

---

## 78. How do you test React components using React Testing Library?

### Simple Explanation — English

React Testing Library focuses on testing components from the user's perspective.

A typical test does four things:

1. Render the component.
2. Find elements the user can interact with or see.
3. Perform an interaction.
4. Assert the expected result.

Example:

```jsx
render(<Counter />);

await user.click(screen.getByRole("button", { name: /increment/i }));

expect(screen.getByText("1")).toBeInTheDocument();
```

The goal is to test behavior rather than internal implementation details such as private state or component methods.

### Simple Explanation — Hindi

React Testing Library component ko user ke point of view se test karne par focus karti hai.

Typical process:

1. Component render karo.
2. Visible/interactable element find karo.
3. User interaction perform karo.
4. Expected result assert karo.

Example:

```jsx
render(<Counter />);

await user.click(
  screen.getByRole("button", { name: /increment/i })
);

expect(screen.getByText("1")).toBeInTheDocument();
```

Main focus user-visible behavior par hota hai, internal state ya private methods par nahi.

---

## 79. How do you use TypeScript with React, including typing props, state, events, and components?

### Simple Explanation — English

TypeScript adds static typing to React code.

For props:

```tsx
type UserProps = {
  name: string;
  age: number;
};

function User({ name, age }: UserProps) {
  return <p>{name} - {age}</p>;
}
```

For state:

```tsx
const [count, setCount] = useState<number>(0);
```

For events:

```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value);
};
```

TypeScript helps catch incorrect values and API usage during development and makes component contracts clearer.

### Simple Explanation — Hindi

TypeScript React code mein static typing provide karta hai.

Props ko type kar sakte hain:

```tsx
type UserProps = {
  name: string;
  age: number;
};

function User({ name, age }: UserProps) {
  return <p>{name} - {age}</p>;
}
```

State:

```tsx
const [count, setCount] = useState<number>(0);
```

Event:

```tsx
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  setName(e.target.value);
};
```

Isse incorrect data types development ke time detect karna aur component contracts clear rakhna easier hota hai.

---

## 80. What important modern React features should you know in React 19, such as Actions, `use`, ref-as-prop, and Server Components?

### Simple Explanation — English

For a modern React interview, I would know the purpose of these React 19-era concepts:

- **Actions:** help organize async operations and form-related state updates, including pending and error handling patterns.
- **`use`:** lets components read certain resources such as Promises and Context during rendering, with Suspense handling for supported async cases.
- **Ref as a prop:** in modern React, function components can receive a `ref` prop directly, reducing the need for the older `forwardRef` pattern in cases supported by the new API.
- **Server Components:** allow supported frameworks to render components on the server and keep some components out of the client JavaScript bundle.

In an interview, I would also explain that Server Components are framework-dependent in practical application development and are different from simply using server-side rendering.

The important thing is to understand when these features solve a real problem rather than memorizing their names.

### Simple Explanation — Hindi

Modern React interview ke liye React 19 ke kuch important concepts samajhna useful hai:

- **Actions:** async operations aur form-related state updates ko organize karne mein help karte hain, including pending/error handling.
- **`use`:** supported resources jaise Promise aur Context ko read karne ke liye use ho sakta hai, aur async cases mein Suspense ke saath work kar sakta hai.
- **Ref as a prop:** modern React mein supported cases mein function component directly `ref` prop receive kar sakta hai.
- **Server Components:** supported frameworks mein kuch components ko server par render karne aur unka client JavaScript bundle mein unnecessary inclusion avoid karne mein help karte hain.

Interview mein ye bhi samajhna important hai ki Server Components framework ecosystem ke saath practical use mein aate hain aur ye simple SSR ke same nahi hain.

Sirf names yaad karne ke bajay ye samajhna chahiye ki feature kis problem ko solve karta hai.

---
