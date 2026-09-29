# React JS Interview Questions 1–40 — Interview Ready Answers

**Format:** Original question → Simple Explanation — English → Simple Explanation — Hindi → Example where useful.

## 1. What is React, and why is it used?

### Simple Explanation — English

React is a JavaScript library used for building user interfaces, especially interactive web applications.

The main idea of React is to build the UI using reusable components. Each component can have its own logic, state, and UI.

React also uses a declarative approach. We describe what the UI should look like for a particular state, and React updates the DOM when the state changes.

**Example:**
```jsx
function Welcome() {
  return <h1>Hello World</h1>;
}
```

In an interview, I would say: React helps us build complex user interfaces using reusable components and efficiently update the UI when data changes.

### Simple Explanation — Hindi

React ek JavaScript library hai jo user interfaces, especially interactive web applications, banane ke liye use hoti hai.

React mein UI ko reusable components mein divide karte hain. Har component ke paas apni UI, logic aur state ho sakti hai.

React declarative approach follow karta hai. Hum batate hain ki current state ke according UI kaisi honi chahiye, aur React required DOM updates handle karta hai.

**Example:**
```jsx
function Welcome() {
  return <h1>Hello World</h1>;
}
```

Interview mein simple way mein bol sakte hain: React reusable components ki help se UI build karna aur data change hone par UI ko efficiently update karna easy banata hai.

---

## 2. What are the main features of React?

### Simple Explanation — English

The main features of React are:

- **Component-based architecture** — UI is divided into reusable components.
- **JSX** — lets us write UI structure inside JavaScript.
- **Virtual DOM** — helps React efficiently update the real DOM.
- **One-way data flow** — data normally flows from parent to child through props.
- **Hooks** — allow functional components to use state and other React features.
- **Declarative UI** — we describe what the UI should look like for a given state.

For example, a large application can be divided into components such as `Navbar`, `Sidebar`, `ProductList`, and `ProductCard`.

### Simple Explanation — Hindi

React ke main features hain:

- **Component-based architecture** — UI ko reusable components mein divide karte hain.
- **JSX** — JavaScript ke andar UI structure likhne deta hai.
- **Virtual DOM** — required DOM updates ko efficiently handle karne mein help karta hai.
- **One-way data flow** — normally data parent se child ko props ke through jata hai.
- **Hooks** — functional components mein state aur other React features use karne dete hain.
- **Declarative UI** — current state ke according UI define karte hain.

Example ke liye ek application ko `Navbar`, `Sidebar`, `ProductList` aur `ProductCard` jaise reusable components mein divide kar sakte hain.

---

## 3. What is JSX, and why do we use it?

### Simple Explanation — English

JSX stands for JavaScript XML. It is a syntax that allows us to write HTML-like UI code inside JavaScript.

JSX makes component code easier to read because the UI structure and JavaScript logic can stay close together.

**Example:**
```jsx
const name = "Rahul";

function App() {
  return <h1>Hello {name}</h1>;
}
```

JSX is not directly understood by the browser. The React build process transforms JSX into JavaScript that creates React elements.

### Simple Explanation — Hindi

JSX ka full form JavaScript XML hai. Ye JavaScript ke andar HTML-like UI likhne ki syntax hai.

JSX se component ka UI code readable aur easy to maintain hota hai.

**Example:**
```jsx
const name = "Rahul";

function App() {
  return <h1>Hello {name}</h1>;
}
```

Browser JSX ko directly nahi samajhta. Build process JSX ko JavaScript mein transform karta hai jise React use karta hai.

---

## 4. What is the Virtual DOM?

### Simple Explanation — English

The Virtual DOM is an in-memory representation of the UI.

When state or props change, React creates a new representation of the UI. React compares it with the previous representation and determines what needs to change.

It then applies the required changes to the real DOM.

The main benefit is that developers can work with a declarative UI while React handles the DOM update process efficiently.

### Simple Explanation — Hindi

Virtual DOM UI ka ek in-memory representation hota hai.

Jab state ya props change hote hain, React UI ka updated representation create karta hai. Phir React previous aur new representation ko compare karta hai aur decide karta hai ki kya change karna hai.

Uske baad required changes real DOM mein apply kiye jate hain.

Isse developer ko manually DOM update karne ki zarurat kam padti hai.

---

## 5. How does the Virtual DOM work?

### Simple Explanation — English

When a component renders, React creates a representation of the UI.

If state or props change, React renders the component again and creates the updated representation. React then compares the previous and new versions. This comparison is part of reconciliation.

Finally, React commits the required changes to the real DOM.

**Simple flow:**

`State/Props change → Render → Compare/Reconciliation → Commit DOM updates`

### Simple Explanation — Hindi

Jab component render hota hai, React UI ka representation create karta hai.

Agar state ya props change hote hain, component dobara render hota hai. React new aur previous UI representation ko compare karta hai. Is process ko reconciliation kehte hain.

Phir React required changes real DOM mein apply karta hai.

**Simple flow:**

`State/Props change → Render → Compare/Reconciliation → DOM update`

---

## 6. What is reconciliation in React?

### Simple Explanation — English

Reconciliation is the process React uses to compare the previous rendered UI with the new rendered UI and determine what needs to change.

For example, if a list has 100 items and only one item's text changes, React can identify the relevant change instead of treating the entire UI as completely new.

Keys are especially important when React reconciles lists because they help React identify items consistently.

### Simple Explanation — Hindi

Reconciliation wo process hai jisme React previous UI aur new UI ko compare karke decide karta hai ki kya update karna hai.

Example ke liye agar 100 items ki list mein sirf ek item ka text change hua hai, React required change ko identify kar sakta hai.

Lists mein `key` important hoti hai kyunki key React ko items ki identity samajhne mein help karti hai.

---

## 7. What is the difference between the Virtual DOM and the Real DOM?

### Simple Explanation — English

The **Virtual DOM** is React's in-memory representation of the UI, while the **Real DOM** is the browser's actual document structure.

When React state changes, React can calculate the required UI changes before applying them to the real DOM.

The important point is that the Virtual DOM is not a separate browser DOM. It is a JavaScript representation used by React's rendering system.

### Simple Explanation — Hindi

**Virtual DOM** UI ka React-side in-memory representation hai, jabki **Real DOM** browser ka actual document structure hai.

State change hone par React updated UI representation ke basis par required changes determine karta hai aur phir real DOM update karta hai.

Simple words mein, Virtual DOM actual browser DOM nahi hai; ye React ke rendering process ka representation hai.

---

## 8. What is the difference between props and state?

### Simple Explanation — English

Props and state are both used to manage data in React, but they have different purposes.

- **Props** are values passed from a parent component to a child component. The receiving component should treat them as read-only.
- **State** is data managed by a component and can change over time.

**Example:**
```jsx
function User({ name }) {
  const [age, setAge] = useState(25);

  return <p>{name} - {age}</p>;
}
```

Here, `name` is a prop and `age` is state.

### Simple Explanation — Hindi

Props aur state dono data handle karne ke liye use hote hain, lekin dono ka purpose different hai.

- **Props** parent component se child component ko data pass karne ke liye hote hain.
- **State** component ka internal data hota hai jo time ke saath change ho sakta hai.

**Example:**
```jsx
function User({ name }) {
  const [age, setAge] = useState(25);

  return <p>{name} - {age}</p>;
}
```

Yahan `name` prop hai aur `age` state hai.

---

## 9. What is the difference between functional and class components?

### Simple Explanation — English

A functional component is a JavaScript function that returns React UI. It can use Hooks for state, effects, context, and other React features.

A class component is a JavaScript class that extends `React.Component` and uses lifecycle methods and `this`.

**Functional component:**
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

Modern React development generally uses functional components and Hooks.

### Simple Explanation — Hindi

Functional component ek normal JavaScript function hota hai jo React UI return karta hai. Ismein Hooks ke through state, effects aur context use kar sakte hain.

Class component `React.Component` ko extend karne wali class hoti hai aur traditionally lifecycle methods aur `this` use karti hai.

Modern React mein functional components aur Hooks commonly preferred approach hain.

**Example:**
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

---

## 10. What are controlled and uncontrolled components?

### Simple Explanation — English

A **controlled component** gets its current value from React state.

```jsx
function Form() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

An **uncontrolled component** keeps its current value in the DOM and is usually accessed with a ref.

Controlled components are useful when React needs to control and validate form data.

### Simple Explanation — Hindi

**Controlled component** mein input ki value React state se control hoti hai.

```jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

**Uncontrolled component** mein value DOM ke paas hoti hai aur zarurat par ref se access kar sakte hain.

Jab form data ko React ke through control, validate ya dynamically use karna ho, controlled components useful hote hain.

---

## 11. Why are keys required when rendering lists in React?

### Simple Explanation — English

Keys help React identify which items in a list have changed, been added, or removed.

**Example:**
```jsx
users.map(user => (
  <User key={user.id} user={user} />
))
```

A stable and unique key helps React maintain the identity of each item during reconciliation.

A key should normally come from stable data such as a database ID. Using an array index can cause problems when the list is reordered, inserted into, or deleted from.

### Simple Explanation — Hindi

Keys React ko list ke items ki identity samajhne mein help karti hain.

**Example:**
```jsx
users.map(user => (
  <User key={user.id} user={user} />
))
```

Stable aur unique key se React identify kar sakta hai ki kaunsa item change, add ya remove hua hai.

Normally database ID jaisi stable value ko key banana better hota hai. Array index kuch dynamic lists mein problems create kar sakta hai.

---

## 12. What happens internally when a React component re-renders?

### Simple Explanation — English

When a React component re-renders, React executes the component again to calculate the new UI.

A simplified flow is:

`State/Props update → Component renders → React compares output → Commit required DOM changes`

A re-render does not automatically mean that every DOM node is recreated. React determines which actual DOM changes are necessary.

For example, if only a counter value changes, React can update the relevant text in the DOM.

### Simple Explanation — Hindi

Jab React component re-render hota hai, React component ko dobara execute karke new UI calculate karta hai.

Simple flow:

`State/Props update → Component render → React comparison → Required DOM update`

Re-render ka matlab ye nahi hai ki pura DOM dobara create hoga. React required changes ko identify karta hai.

Example mein agar sirf counter value change hui hai, to relevant text update kiya ja sakta hai.

---

## 13. How do you pass data from parent to child component?

### Simple Explanation — English

Data is normally passed from a parent to a child through props.

**Example:**
```jsx
function Parent() {
  const name = "Rahul";
  return <Child name={name} />;
}

function Child({ name }) {
  return <h2>Hello {name}</h2>;
}
```

The parent provides the prop, and the child receives it as a function parameter or through the `props` object.

### Simple Explanation — Hindi

Parent se child ko data normally **props** ke through pass kiya jata hai.

**Example:**
```jsx
function Parent() {
  const name = "Rahul";
  return <Child name={name} />;
}

function Child({ name }) {
  return <h2>Hello {name}</h2>;
}
```

Parent prop pass karta hai aur child us prop ko receive karke use karta hai.

---

## 14. How do you pass data from child to parent component?

### Simple Explanation — English

A common way to send data from child to parent is for the parent to pass a callback function as a prop.

**Example:**
```jsx
function Parent() {
  const handleMessage = (message) => {
    console.log(message);
  };

  return <Child onMessage={handleMessage} />;
}

function Child({ onMessage }) {
  return (
    <button onClick={() => onMessage("Hello Parent")}>
      Send
    </button>
  );
}
```

The child does not directly modify the parent's state. It calls the callback provided by the parent.

### Simple Explanation — Hindi

Child se parent ko data bhejne ke liye parent ek callback function prop ke through child ko deta hai.

**Example:**
```jsx
function Parent() {
  const handleMessage = (message) => {
    console.log(message);
  };

  return <Child onMessage={handleMessage} />;
}
```

Child callback ko call karta hai aur data parent tak pahunch jata hai.

Child directly parent ki state ko modify nahi karta; parent ke diye hue function ko call karta hai.

---

## 15. What is prop drilling, and how can you avoid it?

### Simple Explanation — English

Prop drilling happens when data is passed through several intermediate components even though those components do not need the data themselves.

For example:

`App → Layout → Sidebar → UserProfile`

If only `UserProfile` needs the user data, passing it through every intermediate component can make the code harder to maintain.

Common ways to avoid prop drilling include:

- Context API
- State management libraries such as Redux
- Better component structure
- Custom Hooks combined with an appropriate state solution

### Simple Explanation — Hindi

Prop drilling tab hoti hai jab data ko multiple intermediate components ke through pass karna padta hai, even though un components ko wo data directly nahi chahiye.

Example:

`App → Layout → Sidebar → UserProfile`

Agar sirf `UserProfile` ko user data chahiye, to har component ke through prop pass karna code ko difficult bana sakta hai.

Prop drilling avoid karne ke liye Context API, Redux ya better component/state structure use kar sakte hain.

---

## 16. What is lifting state up in React?

### Simple Explanation — English

Lifting state up means moving shared state to the closest common parent of the components that need it.

For example, if two sibling components need the same selected value, instead of keeping separate state in both children, the parent can own the state and pass the value and update function to both.

**Flow:**

`Child A ↔ Parent State ↔ Child B`

This creates a single source of truth for that shared state.

### Simple Explanation — Hindi

Lifting state up ka matlab hai shared state ko un components ke closest common parent mein move karna jo us state ko use karte hain.

Example ke liye agar do sibling components ko same selected value chahiye, to state parent mein rakh sakte hain aur dono children ko value aur update function pass kar sakte hain.

**Flow:**

`Child A ↔ Parent State ↔ Child B`

Isse shared state ke liye single source of truth milta hai.

---

## 17. When should state be local versus shared?

### Simple Explanation — English

Keep state local when only one component or a small part of the component tree needs it.

Make state shared when multiple components need the same data.

For example:

- Modal open/close → usually local state
- Form input → usually local state
- Logged-in user information → may be shared
- Shopping cart used across many pages → shared/global state may be appropriate

The goal is to keep state as close as possible to where it is used, while sharing it when necessary.

### Simple Explanation — Hindi

Agar state sirf ek component ko chahiye to use local rakhna better hota hai.

Agar multiple components ko same data chahiye, to state ko shared solution mein rakh sakte hain.

Examples:

- Modal open/close → local state
- Form input → usually local state
- Logged-in user → shared state ho sakta hai
- Shopping cart → multiple pages mein required hone par shared/global state useful ho sakta hai

Simple rule: state ko jitna possible ho utna uske use ke close rakho.

---

## 18. Can a child component modify its parent's state directly?

### Simple Explanation — English

A child should not directly modify its parent's state.

Instead, the parent should provide a callback function that updates the state.

**Example:**
```jsx
function Parent() {
  const [count, setCount] = useState(0);

  return <Child onIncrease={() => setCount(c => c + 1)} />;
}

function Child({ onIncrease }) {
  return <button onClick={onIncrease}>Increase</button>;
}
```

This keeps the parent as the owner of its state and follows React's one-way data flow.

### Simple Explanation — Hindi

Child ko parent ki state directly modify nahi karni chahiye.

Parent ek callback function child ko pass kar sakta hai jo parent ki state update kare.

```jsx
<Child onIncrease={() => setCount(c => c + 1)} />
```

Isse state ka ownership parent ke paas rehta hai aur React ka one-way data flow maintain hota hai.

---

## 19. Why should React state not be mutated directly?

### Simple Explanation — English

React state should be treated as immutable.

Instead of changing an existing object or array directly, create a new object or array and set that as the new state.

**Wrong:**
```js
user.name = "Rahul";
```

**Better:**
```js
setUser({
  ...user,
  name: "Rahul"
});
```

Immutable updates make state changes predictable and help React detect that a new state value has been provided.

### Simple Explanation — Hindi

React state ko directly mutate nahi karna chahiye.

Existing object ya array ko change karne ke bajay new object/array create karke state setter ko dena chahiye.

**Wrong:**
```js
user.name = "Rahul";
```

**Better:**
```js
setUser({
  ...user,
  name: "Rahul"
});
```

Isse state updates predictable rehte hain aur React ko new state value detect karne mein help milti hai.

---

## 20. What happens when you call a state setter such as `setState` or `setCount`?

### Simple Explanation — English

When we call a state setter, React schedules an update. React then renders the component again with the updated state and commits the required UI changes.

For example:
```jsx
const [count, setCount] = useState(0);

setCount(1);
```

The current render does not change its already-created values. The updated state is available during the next render.

React may also batch multiple state updates together to improve performance.

### Simple Explanation — Hindi

Jab hum state setter call karte hain, React state update ko schedule karta hai. Phir component updated state ke saath re-render hota hai aur required UI changes commit hote hain.

```jsx
const [count, setCount] = useState(0);

setCount(1);
```

Current render ke existing values immediately change nahi hote. Updated value next render mein available hoti hai.

React multiple updates ko batch bhi kar sakta hai.

---

## 21. Why does state sometimes appear not to update immediately?

### Simple Explanation — English

State can appear not to update immediately because each render has its own snapshot of state.

For example:
```jsx
const [count, setCount] = useState(0);

setCount(count + 1);
console.log(count);
```

The `console.log` here uses the `count` value from the current render.

When the next render happens, the updated value is available.

When the next state depends on the previous state, use the functional updater:

```jsx
setCount(prev => prev + 1);
```

### Simple Explanation — Hindi

State immediately update na hone jaisa lag sakta hai kyunki har render ke paas state ka apna snapshot hota hai.

```jsx
setCount(count + 1);
console.log(count);
```

Yahan `console.log` current render wali `count` value use karega.

Next render mein updated value milegi.

Agar new state previous state par depend karti hai, functional updater use karna better hai:

```jsx
setCount(prev => prev + 1);
```

---

## 22. When should you use `useState` versus `useReducer`?

### Simple Explanation — English

Use `useState` when the state is relatively simple and updates are straightforward.

Use `useReducer` when state has multiple related values or when many different actions can change the state.

**useState:**
```jsx
const [count, setCount] = useState(0);
```

**useReducer:**
```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

A reducer can make complex state transitions more organized because the update logic is kept in one place.

### Simple Explanation — Hindi

`useState` tab use karna simple hota hai jab state simple ho aur updates straightforward hon.

`useReducer` tab useful hota hai jab state complex ho, multiple related values hon, ya different actions state ko update karte hon.

**useState:**
```jsx
const [count, setCount] = useState(0);
```

**useReducer:**
```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

Reducer mein state update logic ek jagah organized rehta hai.

---

## 23. What are React Hooks, and why were they introduced?

### Simple Explanation — English

Hooks are functions that let functional components use React features such as state, effects, context, refs, and other capabilities.

Hooks were introduced so developers could reuse stateful logic more easily without relying on class components.

Common Hooks include:

- `useState`
- `useEffect`
- `useContext`
- `useRef`
- `useMemo`
- `useCallback`

Developers can also create Custom Hooks to reuse application-specific logic.

### Simple Explanation — Hindi

Hooks aise functions hain jo functional components ko React ke features jaise state, effects, context aur refs use karne dete hain.

Hooks ka main benefit ye hai ki stateful logic ko reusable way mein handle kar sakte hain bina class components par depend kiye.

Common Hooks hain:

- `useState`
- `useEffect`
- `useContext`
- `useRef`
- `useMemo`
- `useCallback`

Custom Hooks bhi create kar sakte hain.

---

## 24. What are the Rules of Hooks?

### Simple Explanation — English

The Rules of Hooks are mainly:

1. **Only call Hooks at the top level.**
   Do not call Hooks inside loops, conditions, or nested functions.

2. **Only call Hooks from React functions.**
   Call them from React function components or Custom Hooks.

**Wrong:**
```jsx
if (isLoggedIn) {
  const [user, setUser] = useState(null);
}
```

**Correct:**
```jsx
const [user, setUser] = useState(null);

if (isLoggedIn) {
  // use user here
}
```

Following these rules allows React to maintain the correct order of Hook calls between renders.

### Simple Explanation — Hindi

Hooks ke important rules hain:

1. Hooks ko top level par call karo. Loops, conditions ya nested functions ke andar directly Hook call nahi karna chahiye.
2. Hooks ko React function component ya Custom Hook ke andar call karo.

**Wrong:**
```jsx
if (isLoggedIn) {
  const [user, setUser] = useState(null);
}
```

**Correct:**
```jsx
const [user, setUser] = useState(null);
```

Isse React har render mein Hooks ka order correctly maintain kar pata hai.

---

## 25. What is `useState`, and how does it work?

### Simple Explanation — English

`useState` is a Hook used to add state to a functional component.

**Example:**
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

`count` is the current state value and `setCount` is the function used to request an update.

When the state changes, React renders the component again with the new state.

### Simple Explanation — Hindi

`useState` functional component mein state add karne ke liye use hota hai.

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
```

`count` current state value hai aur `setCount` state update karne ka function hai.

State change hone par component new state ke saath re-render hota hai.

---

## 26. What is the functional state update pattern, and when should you use it?

### Simple Explanation — English

The functional state update pattern is used when the new state depends on the previous state.

Instead of:
```jsx
setCount(count + 1);
```

we can use:
```jsx
setCount(prevCount => prevCount + 1);
```

This is especially useful when multiple updates may be queued or when the update depends on the previous value.

For example:
```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Each update receives the latest previous state value.

### Simple Explanation — Hindi

Functional state update tab use karte hain jab new state previous state par depend karti hai.

Instead of:
```jsx
setCount(count + 1);
```

use:
```jsx
setCount(prevCount => prevCount + 1);
```

Ye multiple updates ya previous value par dependent updates mein useful hota hai.

Example:
```jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
```

Har update ko previous/latest state value milti hai.

---

## 27. What is `useEffect` used for?

### Simple Explanation — English

`useEffect` is used to synchronize a component with something outside its rendering logic.

Common examples include:

- Fetching data
- Setting up subscriptions
- Adding event listeners
- Starting timers
- Updating the document title

**Example:**
```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

The dependency array tells React when the effect needs to run again.

### Simple Explanation — Hindi

`useEffect` ka use component ko rendering ke bahar wali activities ke saath synchronize karne ke liye hota hai.

Common examples:

- API/data fetching
- Subscription
- Event listener
- Timer
- Document title update

```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

Dependency array batati hai ki effect ko kab dobara run karna hai.

---

## 28. How does the dependency array of `useEffect` work?

### Simple Explanation — English

The dependency array tells React which values an effect depends on.

**No dependency array:**
```jsx
useEffect(() => {
  // runs after every render
});
```

**Empty array:**
```jsx
useEffect(() => {
  // runs after the initial mount
}, []);
```

**With dependencies:**
```jsx
useEffect(() => {
  // runs after initial mount and when count changes
}, [count]);
```

If an effect uses a reactive value, that value generally needs to be included in its dependencies according to the effect's logic.

### Simple Explanation — Hindi

Dependency array React ko batati hai ki effect kin values par depend karta hai.

**No array:**
```jsx
useEffect(() => {
  // every render ke baad
});
```

**Empty array:**
```jsx
useEffect(() => {
  // initial mount ke baad
}, []);
```

**Dependency ke saath:**
```jsx
useEffect(() => {
  // initial mount aur count change hone par
}, [count]);
```

Effect ke andar use hone wali reactive values ko effect ki dependencies ke according handle karna chahiye.

---

## 29. What is the difference between `useEffect(() => {})`, `useEffect(() => {}, [])`, and `useEffect(() => {}, [value])`?

### Simple Explanation — English

The main difference is the dependency array:

```jsx
useEffect(() => {
  // runs after every render
});
```

```jsx
useEffect(() => {
  // runs after the initial mount
}, []);
```

```jsx
useEffect(() => {
  // runs after the initial mount and when value changes
}, [value]);
```

So, the dependency array controls when React needs to re-run the effect.

### Simple Explanation — Hindi

Teen cases mein main difference dependency array ka hai:

```jsx
useEffect(() => {
  // har render ke baad
});
```

```jsx
useEffect(() => {
  // initial mount ke baad
}, []);
```

```jsx
useEffect(() => {
  // initial mount aur value change hone par
}, [value]);
```

Simple words mein, dependency array effect ke re-run hone ka behavior control karti hai.

---

## 30. Why does `useEffect` sometimes run twice in development?

### Simple Explanation — English

In development, React Strict Mode may intentionally run certain component logic and effects more than once to help detect unsafe side effects and other bugs.

This behavior is mainly a development check. It does not mean that React production rendering behaves exactly the same way.

If an effect runs twice in development, the correct approach is to make the effect and its cleanup safe and idempotent rather than simply trying to hide the second run.

### Simple Explanation — Hindi

Development mein React Strict Mode kuch component logic ya effects ko intentionally extra time run kar sakta hai taaki unsafe side effects aur bugs detect kiye ja saken.

Ye mainly development checking behavior hai.

Agar effect development mein twice run ho raha hai, to proper cleanup aur safe effect logic likhna chahiye, sirf second execution ko hide nahi karna chahiye.

---

## 31. What is the cleanup function in `useEffect`, and when is it required?

### Simple Explanation — English

A cleanup function is returned from an effect when the effect creates something that needs to be stopped or removed.

Common examples:

- Removing event listeners
- Clearing timers
- Unsubscribing from subscriptions
- Disconnecting external resources

**Example:**
```jsx
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

Cleanup helps prevent unwanted work and resource leaks.

### Simple Explanation — Hindi

Cleanup function tab use hota hai jab effect ke through koi resource create kiya ho jise baad mein remove ya stop karna ho.

Examples:

- Event listener remove karna
- Timer clear karna
- Subscription unsubscribe karna
- External connection disconnect karna

```jsx
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
```

Cleanup unwanted work aur resource leaks ko avoid karne mein help karta hai.

---

## 32. How do you prevent infinite loops in `useEffect`?

### Simple Explanation — English

An infinite effect loop usually happens when an effect updates state and that update changes one of the effect's dependencies, causing the effect to run again.

For example, avoid patterns where:

`Effect → setState → dependency changes → Effect → setState`

To prevent this:

- Check whether the effect is actually needed.
- Use the correct dependency array.
- Avoid creating unstable object/function dependencies unnecessarily.
- Use functional state updates when appropriate.
- Separate event-driven logic from synchronization effects.

The goal is to fix the dependency or design problem rather than simply suppressing the effect.

### Simple Explanation — Hindi

Infinite `useEffect` loop usually tab hota hai jab effect state update karta hai aur wo state dependency ko change kar deti hai, jiski wajah se effect dobara run hota hai.

Flow:

`Effect → setState → dependency change → Effect → setState`

Avoid karne ke liye:

- Check karo ki effect actually required hai ya nahi.
- Correct dependencies use karo.
- Unnecessary new object/function dependencies avoid karo.
- Zarurat par functional state update use karo.
- Event logic aur synchronization logic ko separate rakho.

Sirf effect ko suppress karne ke bajay actual dependency/design issue solve karna better hai.

---

## 33. What is a stale closure in React?

### Simple Explanation — English

A stale closure happens when a function created during an earlier render keeps using values from that render even though newer state or props exist.

For example, an asynchronous callback or timer may still refer to an older state value.

A common solution is to use the correct effect dependencies or a functional state update when updating based on previous state.

```jsx
setCount(prev => prev + 1);
```

Understanding closures is important when working with timers, subscriptions, async callbacks, and effects.

### Simple Explanation — Hindi

Stale closure tab hota hai jab kisi previous render mein create hua function usi render ki old state/props value ko use karta rehta hai, even though new value available hai.

Ye timers, subscriptions, async callbacks aur effects mein common ho sakta hai.

Correct dependencies aur zarurat par functional state update use karke problem handle kar sakte hain.

```jsx
setCount(prev => prev + 1);
```

---

## 34. What is the difference between `useEffect` and `useLayoutEffect`?

### Simple Explanation — English

`useEffect` runs after the browser has had a chance to paint the updated UI, while `useLayoutEffect` runs synchronously after React commits DOM changes but before the browser paints.

Use `useEffect` for most side effects such as data fetching, subscriptions, and logging.

Use `useLayoutEffect` when you need to measure or synchronously adjust the DOM before the user sees the result.

For example, measuring an element's size is a case where `useLayoutEffect` can be appropriate.

Because `useLayoutEffect` can block painting, it should not be used everywhere.

### Simple Explanation — Hindi

`useEffect` generally browser paint ke baad side effect run karta hai, jabki `useLayoutEffect` DOM update commit hone ke baad aur browser paint se pehle synchronously run hota hai.

Most cases mein `useEffect` use karna chahiye, jaise API calls, subscriptions aur logging.

Agar DOM ko measure karna ya paint se pehle layout adjustment karna ho, tab `useLayoutEffect` useful ho sakta hai.

Kyuki `useLayoutEffect` painting ko delay kar sakta hai, ise unnecessarily use nahi karna chahiye.

---

## 35. What is `useRef`, and when should you use it?

### Simple Explanation — English

`useRef` is a Hook that stores a mutable value that persists between renders without causing a re-render when the value changes.

It is commonly used for:

- Accessing a DOM element
- Storing a timer ID
- Keeping a value between renders without rendering because of it

**Example:**
```jsx
const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus();
};

return <input ref={inputRef} />;
```

Here, `inputRef.current` points to the input element after it is mounted.

### Simple Explanation — Hindi

`useRef` ek aisa Hook hai jo aisi value store karta hai jo renders ke beech persist karti hai, lekin value change hone par automatically re-render trigger nahi hota.

Common uses:

- DOM element access karna
- Timer ID store karna
- Aisi value store karna jo render ke liye required nahi hai

```jsx
const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus();
};

return <input ref={inputRef} />;
```

Yahan `inputRef.current` input element ko reference karta hai.

---

## 36. What is the difference between `useRef` and `useState`?

### Simple Explanation — English

`useState` and `useRef` both preserve values between renders, but they behave differently.

- **useState**: updating it schedules a re-render.
- **useRef**: changing `ref.current` does not schedule a re-render.

Use state when the value affects what should be displayed on the screen.

Use a ref when you need to keep a value or access a DOM node without needing a render caused by that change.

**Example:**
```jsx
const [count, setCount] = useState(0);
const timerId = useRef(null);
```

### Simple Explanation — Hindi

`useState` aur `useRef` dono values ko renders ke beech preserve kar sakte hain, lekin behavior different hai.

- **useState** update karne par component re-render hota hai.
- **useRef** ka `current` change karne par re-render automatically nahi hota.

Agar value UI mein show karni hai to state use karo.

Agar value store karni hai ya DOM access karna hai bina re-render ke, ref useful hai.

```jsx
const [count, setCount] = useState(0);
const timerId = useRef(null);
```

---

## 37. What is `useContext`, and how does it work?

### Simple Explanation — English

`useContext` lets a component read a value from a React Context without passing that value through every intermediate component as props.

**Example:**
```jsx
const ThemeContext = createContext("light");

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Button() {
  const theme = useContext(ThemeContext);
  return <button>{theme}</button>;
}
```

It is useful for shared values such as theme, locale, or authenticated user information.

Context is not automatically a replacement for every type of global state management.

### Simple Explanation — Hindi

`useContext` component ko Context se value directly read karne deta hai, bina har intermediate component ke through prop pass kiye.

```jsx
const ThemeContext = createContext("light");

function Button() {
  const theme = useContext(ThemeContext);
  return <button>{theme}</button>;
}
```

Theme, locale ya authenticated user information jaise shared values ke liye useful hai.

Lekin Context har type ke global state ke liye Redux ya other state solutions ka automatic replacement nahi hai.

---

## 38. What is `useMemo`, and when should you use it?

### Simple Explanation — English

`useMemo` memoizes the result of a calculation between renders.

It is useful when a calculation is expensive and its dependencies have not changed.

**Example:**
```jsx
const filteredUsers = useMemo(() => {
  return users.filter(user => user.active);
}, [users]);
```

React can reuse the previous calculated value when the dependencies are unchanged.

`useMemo` should be used for a real performance reason. Using it everywhere can add complexity and memory overhead.

### Simple Explanation — Hindi

`useMemo` kisi calculation ke result ko memoize karta hai.

Agar calculation expensive hai aur dependencies change nahi hui hain, to previous result reuse kiya ja sakta hai.

```jsx
const filteredUsers = useMemo(() => {
  return users.filter(user => user.active);
}, [users]);
```

Har jagah `useMemo` use nahi karna chahiye. Actual performance need ho tab use karna better hai.

---

## 39. What is `useCallback`, and when should you use it?

### Simple Explanation — English

`useCallback` memoizes a function reference between renders.

It is mainly useful when:

- Passing a callback to a memoized child component.
- A function is used as a dependency and needs a stable reference.
- There is a measured performance reason for keeping the function stable.

**Example:**
```jsx
const handleClick = useCallback(() => {
  setCount(prev => prev + 1);
}, []);
```

Like `useMemo`, `useCallback` should not be added automatically to every function.

### Simple Explanation — Hindi

`useCallback` function reference ko renders ke beech memoize karta hai.

Ye useful ho sakta hai jab:

- Callback memoized child ko pass kar rahe ho.
- Function kisi dependency ke roop mein use ho raha ho.
- Performance reason ki wajah se stable function reference chahiye.

```jsx
const handleClick = useCallback(() => {
  setCount(prev => prev + 1);
}, []);
```

Har function ke saath automatically `useCallback` lagana zaroori nahi hai.

---

## 40. What is the difference between `useMemo`, `useCallback`, and `React.memo`?

### Simple Explanation — English

These three tools solve different problems:

- **`useMemo`** memoizes a calculated value.
- **`useCallback`** memoizes a function reference.
- **`React.memo`** can skip rendering a component when its props have not changed according to its comparison.

**Example:**
```jsx
const result = useMemo(() => calculate(data), [data]);

const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

const Child = React.memo(function Child({ onClick }) {
  return <button onClick={onClick}>Click</button>;
});
```

They are performance optimization tools, not requirements for normal React code.

### Simple Explanation — Hindi

In teeno ka purpose different hai:

- **`useMemo`** calculated value ko memoize karta hai.
- **`useCallback`** function reference ko memoize karta hai.
- **`React.memo`** props unchanged hone par component ke unnecessary render ko skip karne mein help kar sakta hai.

Example:

```jsx
const result = useMemo(() => calculate(data), [data]);

const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
```

Inhe performance optimization ke liye use karna chahiye, har jagah nahi.

---
