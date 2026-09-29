import { SeedQuestion } from './types';

export const reactQuestions: SeedQuestion[] = [
  {
    technologySlug: 'react',
    topicSlug: 'react-fundamentals',
    question: `1. What is React, and why is it used?`,
    slug: '1-what-is-react-and-why-is-it-used',
    answer: `React is a JavaScript library used for building user interfaces, especially interactive web applications.

The main idea of React is to build the UI using reusable components. Each component can have its own logic, state, and UI.

React also uses a declarative approach. We describe what the UI should look like for a particular state, and React updates the DOM when the state changes.

**Example:**
\`\`\`jsx
function Welcome() {
  return <h1>Hello World</h1>;
}
\`\`\`

In an interview, I would say: React helps us build complex user interfaces using reusable components and efficiently update the UI when data changes.`,
    explanation: `React is a JavaScript library used for building user interfaces, especially interactive web applications.

The main idea of React is to build the UI using reusable components. Each component can have its own logic, state, and UI.

React also uses a declarative approach. We describe what the UI should look like for a particular state, and React updates the DOM when the state changes.

**Example:**
\`\`\`jsx
function Welcome() {
  return <h1>Hello World</h1>;
}
\`\`\`

In an interview, I would say: React helps us build complex user interfaces using reusable components and efficiently update the UI when data changes.`,
    explanationHindi: `React ek JavaScript library hai jo user interfaces, especially interactive web applications, banane ke liye use hoti hai.

React mein UI ko reusable components mein divide karte hain. Har component ke paas apni UI, logic aur state ho sakti hai.

React declarative approach follow karta hai. Hum batate hain ki current state ke according UI kaisi honi chahiye, aur React required DOM updates handle karta hai.

**Example:**
\`\`\`jsx
function Welcome() {
  return <h1>Hello World</h1>;
}
\`\`\`

Interview mein simple way mein bol sakte hain: React reusable components ki help se UI build karna aur data change hone par UI ko efficiently update karna easy banata hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 1,
  },
  {
    technologySlug: 'react',
    topicSlug: 'react-fundamentals',
    question: `2. What are the main features of React?`,
    slug: '2-what-are-the-main-features-of-react',
    answer: `The main features of React are:

- **Component-based architecture** — UI is divided into reusable components.
- **JSX** — lets us write UI structure inside JavaScript.
- **Virtual DOM** — helps React efficiently update the real DOM.
- **One-way data flow** — data normally flows from parent to child through props.
- **Hooks** — allow functional components to use state and other React features.
- **Declarative UI** — we describe what the UI should look like for a given state.

For example, a large application can be divided into components such as \`Navbar\`, \`Sidebar\`, \`ProductList\`, and \`ProductCard\`.`,
    explanation: `The main features of React are:

- **Component-based architecture** — UI is divided into reusable components.
- **JSX** — lets us write UI structure inside JavaScript.
- **Virtual DOM** — helps React efficiently update the real DOM.
- **One-way data flow** — data normally flows from parent to child through props.
- **Hooks** — allow functional components to use state and other React features.
- **Declarative UI** — we describe what the UI should look like for a given state.

For example, a large application can be divided into components such as \`Navbar\`, \`Sidebar\`, \`ProductList\`, and \`ProductCard\`.`,
    explanationHindi: `React ke main features hain:

- **Component-based architecture** — UI ko reusable components mein divide karte hain.
- **JSX** — JavaScript ke andar UI structure likhne deta hai.
- **Virtual DOM** — required DOM updates ko efficiently handle karne mein help karta hai.
- **One-way data flow** — normally data parent se child ko props ke through jata hai.
- **Hooks** — functional components mein state aur other React features use karne dete hain.
- **Declarative UI** — current state ke according UI define karte hain.

Example ke liye ek application ko \`Navbar\`, \`Sidebar\`, \`ProductList\` aur \`ProductCard\` jaise reusable components mein divide kar sakte hain.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 2,
  },
  {
    technologySlug: 'react',
    topicSlug: 'react-fundamentals',
    question: `3. What is JSX, and why do we use it?`,
    slug: '3-what-is-jsx-and-why-do-we-use-it',
    answer: `JSX stands for JavaScript XML. It is a syntax that allows us to write HTML-like UI code inside JavaScript.

JSX makes component code easier to read because the UI structure and JavaScript logic can stay close together.

**Example:**
\`\`\`jsx
const name = "Rahul";

function App() {
  return <h1>Hello {name}</h1>;
}
\`\`\`

JSX is not directly understood by the browser. The React build process transforms JSX into JavaScript that creates React elements.`,
    explanation: `JSX stands for JavaScript XML. It is a syntax that allows us to write HTML-like UI code inside JavaScript.

JSX makes component code easier to read because the UI structure and JavaScript logic can stay close together.

**Example:**
\`\`\`jsx
const name = "Rahul";

function App() {
  return <h1>Hello {name}</h1>;
}
\`\`\`

JSX is not directly understood by the browser. The React build process transforms JSX into JavaScript that creates React elements.`,
    explanationHindi: `JSX ka full form JavaScript XML hai. Ye JavaScript ke andar HTML-like UI likhne ki syntax hai.

JSX se component ka UI code readable aur easy to maintain hota hai.

**Example:**
\`\`\`jsx
const name = "Rahul";

function App() {
  return <h1>Hello {name}</h1>;
}
\`\`\`

Browser JSX ko directly nahi samajhta. Build process JSX ko JavaScript mein transform karta hai jise React use karta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 3,
  },
  {
    technologySlug: 'react',
    topicSlug: 'react-fundamentals',
    question: `4. What is the Virtual DOM?`,
    slug: '4-what-is-the-virtual-dom',
    answer: `The Virtual DOM is an in-memory representation of the UI.

When state or props change, React creates a new representation of the UI. React compares it with the previous representation and determines what needs to change.

It then applies the required changes to the real DOM.

The main benefit is that developers can work with a declarative UI while React handles the DOM update process efficiently.`,
    explanation: `The Virtual DOM is an in-memory representation of the UI.

When state or props change, React creates a new representation of the UI. React compares it with the previous representation and determines what needs to change.

It then applies the required changes to the real DOM.

The main benefit is that developers can work with a declarative UI while React handles the DOM update process efficiently.`,
    explanationHindi: `Virtual DOM UI ka ek in-memory representation hota hai.

Jab state ya props change hote hain, React UI ka updated representation create karta hai. Phir React previous aur new representation ko compare karta hai aur decide karta hai ki kya change karna hai.

Uske baad required changes real DOM mein apply kiye jate hain.

Isse developer ko manually DOM update karne ki zarurat kam padti hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 4,
  },
  {
    technologySlug: 'react',
    topicSlug: 'react-fundamentals',
    question: `5. How does the Virtual DOM work?`,
    slug: '5-how-does-the-virtual-dom-work',
    answer: `When a component renders, React creates a representation of the UI.

If state or props change, React renders the component again and creates the updated representation. React then compares the previous and new versions. This comparison is part of reconciliation.

Finally, React commits the required changes to the real DOM.

**Simple flow:**

\`State/Props change → Render → Compare/Reconciliation → Commit DOM updates\``,
    explanation: `When a component renders, React creates a representation of the UI.

If state or props change, React renders the component again and creates the updated representation. React then compares the previous and new versions. This comparison is part of reconciliation.

Finally, React commits the required changes to the real DOM.

**Simple flow:**

\`State/Props change → Render → Compare/Reconciliation → Commit DOM updates\``,
    explanationHindi: `Jab component render hota hai, React UI ka representation create karta hai.

Agar state ya props change hote hain, component dobara render hota hai. React new aur previous UI representation ko compare karta hai. Is process ko reconciliation kehte hain.

Phir React required changes real DOM mein apply karta hai.

**Simple flow:**

\`State/Props change → Render → Compare/Reconciliation → DOM update\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 5,
  },
  {
    technologySlug: 'react',
    topicSlug: 'react-fundamentals',
    question: `6. What is reconciliation in React?`,
    slug: '6-what-is-reconciliation-in-react',
    answer: `Reconciliation is the process React uses to compare the previous rendered UI with the new rendered UI and determine what needs to change.

For example, if a list has 100 items and only one item's text changes, React can identify the relevant change instead of treating the entire UI as completely new.

Keys are especially important when React reconciles lists because they help React identify items consistently.`,
    explanation: `Reconciliation is the process React uses to compare the previous rendered UI with the new rendered UI and determine what needs to change.

For example, if a list has 100 items and only one item's text changes, React can identify the relevant change instead of treating the entire UI as completely new.

Keys are especially important when React reconciles lists because they help React identify items consistently.`,
    explanationHindi: `Reconciliation wo process hai jisme React previous UI aur new UI ko compare karke decide karta hai ki kya update karna hai.

Example ke liye agar 100 items ki list mein sirf ek item ka text change hua hai, React required change ko identify kar sakta hai.

Lists mein \`key\` important hoti hai kyunki key React ko items ki identity samajhne mein help karti hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 6,
  },
  {
    technologySlug: 'react',
    topicSlug: 'react-fundamentals',
    question: `7. What is the difference between the Virtual DOM and the Real DOM?`,
    slug: '7-what-is-the-difference-between-the-virtual-dom-and-the-real-dom',
    answer: `The **Virtual DOM** is React's in-memory representation of the UI, while the **Real DOM** is the browser's actual document structure.

When React state changes, React can calculate the required UI changes before applying them to the real DOM.

The important point is that the Virtual DOM is not a separate browser DOM. It is a JavaScript representation used by React's rendering system.`,
    explanation: `The **Virtual DOM** is React's in-memory representation of the UI, while the **Real DOM** is the browser's actual document structure.

When React state changes, React can calculate the required UI changes before applying them to the real DOM.

The important point is that the Virtual DOM is not a separate browser DOM. It is a JavaScript representation used by React's rendering system.`,
    explanationHindi: `**Virtual DOM** UI ka React-side in-memory representation hai, jabki **Real DOM** browser ka actual document structure hai.

State change hone par React updated UI representation ke basis par required changes determine karta hai aur phir real DOM update karta hai.

Simple words mein, Virtual DOM actual browser DOM nahi hai; ye React ke rendering process ka representation hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 7,
  },
  {
    technologySlug: 'react',
    topicSlug: 'react-fundamentals',
    question: `8. What is the difference between props and state?`,
    slug: '8-what-is-the-difference-between-props-and-state',
    answer: `Props and state are both used to manage data in React, but they have different purposes.

- **Props** are values passed from a parent component to a child component. The receiving component should treat them as read-only.
- **State** is data managed by a component and can change over time.

**Example:**
\`\`\`jsx
function User({ name }) {
  const [age, setAge] = useState(25);

  return <p>{name} - {age}</p>;
}
\`\`\`

Here, \`name\` is a prop and \`age\` is state.`,
    explanation: `Props and state are both used to manage data in React, but they have different purposes.

- **Props** are values passed from a parent component to a child component. The receiving component should treat them as read-only.
- **State** is data managed by a component and can change over time.

**Example:**
\`\`\`jsx
function User({ name }) {
  const [age, setAge] = useState(25);

  return <p>{name} - {age}</p>;
}
\`\`\`

Here, \`name\` is a prop and \`age\` is state.`,
    explanationHindi: `Props aur state dono data handle karne ke liye use hote hain, lekin dono ka purpose different hai.

- **Props** parent component se child component ko data pass karne ke liye hote hain.
- **State** component ka internal data hota hai jo time ke saath change ho sakta hai.

**Example:**
\`\`\`jsx
function User({ name }) {
  const [age, setAge] = useState(25);

  return <p>{name} - {age}</p>;
}
\`\`\`

Yahan \`name\` prop hai aur \`age\` state hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 8,
  },
  {
    technologySlug: 'react',
    topicSlug: 'react-fundamentals',
    question: `9. What is the difference between functional and class components?`,
    slug: '9-what-is-the-difference-between-functional-and-class-components',
    answer: `A functional component is a JavaScript function that returns React UI. It can use Hooks for state, effects, context, and other React features.

A class component is a JavaScript class that extends \`React.Component\` and uses lifecycle methods and \`this\`.

**Functional component:**
\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
\`\`\`

Modern React development generally uses functional components and Hooks.`,
    explanation: `A functional component is a JavaScript function that returns React UI. It can use Hooks for state, effects, context, and other React features.

A class component is a JavaScript class that extends \`React.Component\` and uses lifecycle methods and \`this\`.

**Functional component:**
\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
\`\`\`

Modern React development generally uses functional components and Hooks.`,
    explanationHindi: `Functional component ek normal JavaScript function hota hai jo React UI return karta hai. Ismein Hooks ke through state, effects aur context use kar sakte hain.

Class component \`React.Component\` ko extend karne wali class hoti hai aur traditionally lifecycle methods aur \`this\` use karti hai.

Modern React mein functional components aur Hooks commonly preferred approach hain.

**Example:**
\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 9,
  },
  {
    technologySlug: 'react',
    topicSlug: 'react-fundamentals',
    question: `10. What are controlled and uncontrolled components?`,
    slug: '10-what-are-controlled-and-uncontrolled-components',
    answer: `A **controlled component** gets its current value from React state.

\`\`\`jsx
function Form() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
\`\`\`

An **uncontrolled component** keeps its current value in the DOM and is usually accessed with a ref.

Controlled components are useful when React needs to control and validate form data.`,
    explanation: `A **controlled component** gets its current value from React state.

\`\`\`jsx
function Form() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
\`\`\`

An **uncontrolled component** keeps its current value in the DOM and is usually accessed with a ref.

Controlled components are useful when React needs to control and validate form data.`,
    explanationHindi: `**Controlled component** mein input ki value React state se control hoti hai.

\`\`\`jsx
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
\`\`\`

**Uncontrolled component** mein value DOM ke paas hoti hai aur zarurat par ref se access kar sakte hain.

Jab form data ko React ke through control, validate ya dynamically use karna ho, controlled components useful hote hain.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 10,
  },
  {
    technologySlug: 'react',
    topicSlug: 'react-fundamentals',
    question: `11. Why are keys required when rendering lists in React?`,
    slug: '11-why-are-keys-required-when-rendering-lists-in-react',
    answer: `Keys help React identify which items in a list have changed, been added, or removed.

**Example:**
\`\`\`jsx
users.map(user => (
  <User key={user.id} user={user} />
))
\`\`\`

A stable and unique key helps React maintain the identity of each item during reconciliation.

A key should normally come from stable data such as a database ID. Using an array index can cause problems when the list is reordered, inserted into, or deleted from.`,
    explanation: `Keys help React identify which items in a list have changed, been added, or removed.

**Example:**
\`\`\`jsx
users.map(user => (
  <User key={user.id} user={user} />
))
\`\`\`

A stable and unique key helps React maintain the identity of each item during reconciliation.

A key should normally come from stable data such as a database ID. Using an array index can cause problems when the list is reordered, inserted into, or deleted from.`,
    explanationHindi: `Keys React ko list ke items ki identity samajhne mein help karti hain.

**Example:**
\`\`\`jsx
users.map(user => (
  <User key={user.id} user={user} />
))
\`\`\`

Stable aur unique key se React identify kar sakta hai ki kaunsa item change, add ya remove hua hai.

Normally database ID jaisi stable value ko key banana better hota hai. Array index kuch dynamic lists mein problems create kar sakta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 11,
  },
  {
    technologySlug: 'react',
    topicSlug: 'components-jsx',
    question: `12. What happens internally when a React component re-renders?`,
    slug: '12-what-happens-internally-when-a-react-component-re-renders',
    answer: `When a React component re-renders, React executes the component again to calculate the new UI.

A simplified flow is:

\`State/Props update → Component renders → React compares output → Commit required DOM changes\`

A re-render does not automatically mean that every DOM node is recreated. React determines which actual DOM changes are necessary.

For example, if only a counter value changes, React can update the relevant text in the DOM.`,
    explanation: `When a React component re-renders, React executes the component again to calculate the new UI.

A simplified flow is:

\`State/Props update → Component renders → React compares output → Commit required DOM changes\`

A re-render does not automatically mean that every DOM node is recreated. React determines which actual DOM changes are necessary.

For example, if only a counter value changes, React can update the relevant text in the DOM.`,
    explanationHindi: `Jab React component re-render hota hai, React component ko dobara execute karke new UI calculate karta hai.

Simple flow:

\`State/Props update → Component render → React comparison → Required DOM update\`

Re-render ka matlab ye nahi hai ki pura DOM dobara create hoga. React required changes ko identify karta hai.

Example mein agar sirf counter value change hui hai, to relevant text update kiya ja sakta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 1,
  },
  {
    technologySlug: 'react',
    topicSlug: 'components-jsx',
    question: `13. How do you pass data from parent to child component?`,
    slug: '13-how-do-you-pass-data-from-parent-to-child-component',
    answer: `Data is normally passed from a parent to a child through props.

**Example:**
\`\`\`jsx
function Parent() {
  const name = "Rahul";
  return <Child name={name} />;
}

function Child({ name }) {
  return <h2>Hello {name}</h2>;
}
\`\`\`

The parent provides the prop, and the child receives it as a function parameter or through the \`props\` object.`,
    explanation: `Data is normally passed from a parent to a child through props.

**Example:**
\`\`\`jsx
function Parent() {
  const name = "Rahul";
  return <Child name={name} />;
}

function Child({ name }) {
  return <h2>Hello {name}</h2>;
}
\`\`\`

The parent provides the prop, and the child receives it as a function parameter or through the \`props\` object.`,
    explanationHindi: `Parent se child ko data normally **props** ke through pass kiya jata hai.

**Example:**
\`\`\`jsx
function Parent() {
  const name = "Rahul";
  return <Child name={name} />;
}

function Child({ name }) {
  return <h2>Hello {name}</h2>;
}
\`\`\`

Parent prop pass karta hai aur child us prop ko receive karke use karta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 2,
  },
  {
    technologySlug: 'react',
    topicSlug: 'components-jsx',
    question: `14. How do you pass data from child to parent component?`,
    slug: '14-how-do-you-pass-data-from-child-to-parent-component',
    answer: `A common way to send data from child to parent is for the parent to pass a callback function as a prop.

**Example:**
\`\`\`jsx
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
\`\`\`

The child does not directly modify the parent's state. It calls the callback provided by the parent.`,
    explanation: `A common way to send data from child to parent is for the parent to pass a callback function as a prop.

**Example:**
\`\`\`jsx
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
\`\`\`

The child does not directly modify the parent's state. It calls the callback provided by the parent.`,
    explanationHindi: `Child se parent ko data bhejne ke liye parent ek callback function prop ke through child ko deta hai.

**Example:**
\`\`\`jsx
function Parent() {
  const handleMessage = (message) => {
    console.log(message);
  };

  return <Child onMessage={handleMessage} />;
}
\`\`\`

Child callback ko call karta hai aur data parent tak pahunch jata hai.

Child directly parent ki state ko modify nahi karta; parent ke diye hue function ko call karta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 3,
  },
  {
    technologySlug: 'react',
    topicSlug: 'components-jsx',
    question: `15. What is prop drilling, and how can you avoid it?`,
    slug: '15-what-is-prop-drilling-and-how-can-you-avoid-it',
    answer: `Prop drilling happens when data is passed through several intermediate components even though those components do not need the data themselves.

For example:

\`App → Layout → Sidebar → UserProfile\`

If only \`UserProfile\` needs the user data, passing it through every intermediate component can make the code harder to maintain.

Common ways to avoid prop drilling include:

- Context API
- State management libraries such as Redux
- Better component structure
- Custom Hooks combined with an appropriate state solution`,
    explanation: `Prop drilling happens when data is passed through several intermediate components even though those components do not need the data themselves.

For example:

\`App → Layout → Sidebar → UserProfile\`

If only \`UserProfile\` needs the user data, passing it through every intermediate component can make the code harder to maintain.

Common ways to avoid prop drilling include:

- Context API
- State management libraries such as Redux
- Better component structure
- Custom Hooks combined with an appropriate state solution`,
    explanationHindi: `Prop drilling tab hoti hai jab data ko multiple intermediate components ke through pass karna padta hai, even though un components ko wo data directly nahi chahiye.

Example:

\`App → Layout → Sidebar → UserProfile\`

Agar sirf \`UserProfile\` ko user data chahiye, to har component ke through prop pass karna code ko difficult bana sakta hai.

Prop drilling avoid karne ke liye Context API, Redux ya better component/state structure use kar sakte hain.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 4,
  },
  {
    technologySlug: 'react',
    topicSlug: 'components-jsx',
    question: `16. What is lifting state up in React?`,
    slug: '16-what-is-lifting-state-up-in-react',
    answer: `Lifting state up means moving shared state to the closest common parent of the components that need it.

For example, if two sibling components need the same selected value, instead of keeping separate state in both children, the parent can own the state and pass the value and update function to both.

**Flow:**

\`Child A ↔ Parent State ↔ Child B\`

This creates a single source of truth for that shared state.`,
    explanation: `Lifting state up means moving shared state to the closest common parent of the components that need it.

For example, if two sibling components need the same selected value, instead of keeping separate state in both children, the parent can own the state and pass the value and update function to both.

**Flow:**

\`Child A ↔ Parent State ↔ Child B\`

This creates a single source of truth for that shared state.`,
    explanationHindi: `Lifting state up ka matlab hai shared state ko un components ke closest common parent mein move karna jo us state ko use karte hain.

Example ke liye agar do sibling components ko same selected value chahiye, to state parent mein rakh sakte hain aur dono children ko value aur update function pass kar sakte hain.

**Flow:**

\`Child A ↔ Parent State ↔ Child B\`

Isse shared state ke liye single source of truth milta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 5,
  },
  {
    technologySlug: 'react',
    topicSlug: 'components-jsx',
    question: `17. When should state be local versus shared?`,
    slug: '17-when-should-state-be-local-versus-shared',
    answer: `Keep state local when only one component or a small part of the component tree needs it.

Make state shared when multiple components need the same data.

For example:

- Modal open/close → usually local state
- Form input → usually local state
- Logged-in user information → may be shared
- Shopping cart used across many pages → shared/global state may be appropriate

The goal is to keep state as close as possible to where it is used, while sharing it when necessary.`,
    explanation: `Keep state local when only one component or a small part of the component tree needs it.

Make state shared when multiple components need the same data.

For example:

- Modal open/close → usually local state
- Form input → usually local state
- Logged-in user information → may be shared
- Shopping cart used across many pages → shared/global state may be appropriate

The goal is to keep state as close as possible to where it is used, while sharing it when necessary.`,
    explanationHindi: `Agar state sirf ek component ko chahiye to use local rakhna better hota hai.

Agar multiple components ko same data chahiye, to state ko shared solution mein rakh sakte hain.

Examples:

- Modal open/close → local state
- Form input → usually local state
- Logged-in user → shared state ho sakta hai
- Shopping cart → multiple pages mein required hone par shared/global state useful ho sakta hai

Simple rule: state ko jitna possible ho utna uske use ke close rakho.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 6,
  },
  {
    technologySlug: 'react',
    topicSlug: 'components-jsx',
    question: `18. Can a child component modify its parent's state directly?`,
    slug: '18-can-a-child-component-modify-its-parents-state-directly',
    answer: `A child should not directly modify its parent's state.

Instead, the parent should provide a callback function that updates the state.

**Example:**
\`\`\`jsx
function Parent() {
  const [count, setCount] = useState(0);

  return <Child onIncrease={() => setCount(c => c + 1)} />;
}

function Child({ onIncrease }) {
  return <button onClick={onIncrease}>Increase</button>;
}
\`\`\`

This keeps the parent as the owner of its state and follows React's one-way data flow.`,
    explanation: `A child should not directly modify its parent's state.

Instead, the parent should provide a callback function that updates the state.

**Example:**
\`\`\`jsx
function Parent() {
  const [count, setCount] = useState(0);

  return <Child onIncrease={() => setCount(c => c + 1)} />;
}

function Child({ onIncrease }) {
  return <button onClick={onIncrease}>Increase</button>;
}
\`\`\`

This keeps the parent as the owner of its state and follows React's one-way data flow.`,
    explanationHindi: `Child ko parent ki state directly modify nahi karni chahiye.

Parent ek callback function child ko pass kar sakta hai jo parent ki state update kare.

\`\`\`jsx
<Child onIncrease={() => setCount(c => c + 1)} />
\`\`\`

Isse state ka ownership parent ke paas rehta hai aur React ka one-way data flow maintain hota hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 7,
  },
  {
    technologySlug: 'react',
    topicSlug: 'components-jsx',
    question: `19. Why should React state not be mutated directly?`,
    slug: '19-why-should-react-state-not-be-mutated-directly',
    answer: `React state should be treated as immutable.

Instead of changing an existing object or array directly, create a new object or array and set that as the new state.

**Wrong:**
\`\`\`js
user.name = "Rahul";
\`\`\`

**Better:**
\`\`\`js
setUser({
  ...user,
  name: "Rahul"
});
\`\`\`

Immutable updates make state changes predictable and help React detect that a new state value has been provided.`,
    explanation: `React state should be treated as immutable.

Instead of changing an existing object or array directly, create a new object or array and set that as the new state.

**Wrong:**
\`\`\`js
user.name = "Rahul";
\`\`\`

**Better:**
\`\`\`js
setUser({
  ...user,
  name: "Rahul"
});
\`\`\`

Immutable updates make state changes predictable and help React detect that a new state value has been provided.`,
    explanationHindi: `React state ko directly mutate nahi karna chahiye.

Existing object ya array ko change karne ke bajay new object/array create karke state setter ko dena chahiye.

**Wrong:**
\`\`\`js
user.name = "Rahul";
\`\`\`

**Better:**
\`\`\`js
setUser({
  ...user,
  name: "Rahul"
});
\`\`\`

Isse state updates predictable rehte hain aur React ko new state value detect karne mein help milti hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 8,
  },
  {
    technologySlug: 'react',
    topicSlug: 'components-jsx',
    question: `20. What happens when you call a state setter such as \`setState\` or \`setCount\`?`,
    slug: '20-what-happens-when-you-call-a-state-setter-such-as-setstate-or-setcount',
    answer: `When we call a state setter, React schedules an update. React then renders the component again with the updated state and commits the required UI changes.

For example:
\`\`\`jsx
const [count, setCount] = useState(0);

setCount(1);
\`\`\`

The current render does not change its already-created values. The updated state is available during the next render.

React may also batch multiple state updates together to improve performance.`,
    explanation: `When we call a state setter, React schedules an update. React then renders the component again with the updated state and commits the required UI changes.

For example:
\`\`\`jsx
const [count, setCount] = useState(0);

setCount(1);
\`\`\`

The current render does not change its already-created values. The updated state is available during the next render.

React may also batch multiple state updates together to improve performance.`,
    explanationHindi: `Jab hum state setter call karte hain, React state update ko schedule karta hai. Phir component updated state ke saath re-render hota hai aur required UI changes commit hote hain.

\`\`\`jsx
const [count, setCount] = useState(0);

setCount(1);
\`\`\`

Current render ke existing values immediately change nahi hote. Updated value next render mein available hoti hai.

React multiple updates ko batch bhi kar sakta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 9,
  },
  {
    technologySlug: 'react',
    topicSlug: 'components-jsx',
    question: `21. Why does state sometimes appear not to update immediately?`,
    slug: '21-why-does-state-sometimes-appear-not-to-update-immediately',
    answer: `State can appear not to update immediately because each render has its own snapshot of state.

For example:
\`\`\`jsx
const [count, setCount] = useState(0);

setCount(count + 1);
console.log(count);
\`\`\`

The \`console.log\` here uses the \`count\` value from the current render.

When the next render happens, the updated value is available.

When the next state depends on the previous state, use the functional updater:

\`\`\`jsx
setCount(prev => prev + 1);
\`\`\``,
    explanation: `State can appear not to update immediately because each render has its own snapshot of state.

For example:
\`\`\`jsx
const [count, setCount] = useState(0);

setCount(count + 1);
console.log(count);
\`\`\`

The \`console.log\` here uses the \`count\` value from the current render.

When the next render happens, the updated value is available.

When the next state depends on the previous state, use the functional updater:

\`\`\`jsx
setCount(prev => prev + 1);
\`\`\``,
    explanationHindi: `State immediately update na hone jaisa lag sakta hai kyunki har render ke paas state ka apna snapshot hota hai.

\`\`\`jsx
setCount(count + 1);
console.log(count);
\`\`\`

Yahan \`console.log\` current render wali \`count\` value use karega.

Next render mein updated value milegi.

Agar new state previous state par depend karti hai, functional updater use karna better hai:

\`\`\`jsx
setCount(prev => prev + 1);
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 10,
  },
  {
    technologySlug: 'react',
    topicSlug: 'components-jsx',
    question: `22. When should you use \`useState\` versus \`useReducer\`?`,
    slug: '22-when-should-you-use-usestate-versus-usereducer',
    answer: `Use \`useState\` when the state is relatively simple and updates are straightforward.

Use \`useReducer\` when state has multiple related values or when many different actions can change the state.

**useState:**
\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

**useReducer:**
\`\`\`jsx
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

A reducer can make complex state transitions more organized because the update logic is kept in one place.`,
    explanation: `Use \`useState\` when the state is relatively simple and updates are straightforward.

Use \`useReducer\` when state has multiple related values or when many different actions can change the state.

**useState:**
\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

**useReducer:**
\`\`\`jsx
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

A reducer can make complex state transitions more organized because the update logic is kept in one place.`,
    explanationHindi: `\`useState\` tab use karna simple hota hai jab state simple ho aur updates straightforward hon.

\`useReducer\` tab useful hota hai jab state complex ho, multiple related values hon, ya different actions state ko update karte hon.

**useState:**
\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

**useReducer:**
\`\`\`jsx
const [state, dispatch] = useReducer(reducer, initialState);
\`\`\`

Reducer mein state update logic ek jagah organized rehta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 11,
  },
  {
    technologySlug: 'react',
    topicSlug: 'props-state',
    question: `23. What are React Hooks, and why were they introduced?`,
    slug: '23-what-are-react-hooks-and-why-were-they-introduced',
    answer: `Hooks are functions that let functional components use React features such as state, effects, context, refs, and other capabilities.

Hooks were introduced so developers could reuse stateful logic more easily without relying on class components.

Common Hooks include:

- \`useState\`
- \`useEffect\`
- \`useContext\`
- \`useRef\`
- \`useMemo\`
- \`useCallback\`

Developers can also create Custom Hooks to reuse application-specific logic.`,
    explanation: `Hooks are functions that let functional components use React features such as state, effects, context, refs, and other capabilities.

Hooks were introduced so developers could reuse stateful logic more easily without relying on class components.

Common Hooks include:

- \`useState\`
- \`useEffect\`
- \`useContext\`
- \`useRef\`
- \`useMemo\`
- \`useCallback\`

Developers can also create Custom Hooks to reuse application-specific logic.`,
    explanationHindi: `Hooks aise functions hain jo functional components ko React ke features jaise state, effects, context aur refs use karne dete hain.

Hooks ka main benefit ye hai ki stateful logic ko reusable way mein handle kar sakte hain bina class components par depend kiye.

Common Hooks hain:

- \`useState\`
- \`useEffect\`
- \`useContext\`
- \`useRef\`
- \`useMemo\`
- \`useCallback\`

Custom Hooks bhi create kar sakte hain.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 1,
  },
  {
    technologySlug: 'react',
    topicSlug: 'props-state',
    question: `24. What are the Rules of Hooks?`,
    slug: '24-what-are-the-rules-of-hooks',
    answer: `The Rules of Hooks are mainly:

1. **Only call Hooks at the top level.**
   Do not call Hooks inside loops, conditions, or nested functions.

2. **Only call Hooks from React functions.**
   Call them from React function components or Custom Hooks.

**Wrong:**
\`\`\`jsx
if (isLoggedIn) {
  const [user, setUser] = useState(null);
}
\`\`\`

**Correct:**
\`\`\`jsx
const [user, setUser] = useState(null);

if (isLoggedIn) {
  // use user here
}
\`\`\`

Following these rules allows React to maintain the correct order of Hook calls between renders.`,
    explanation: `The Rules of Hooks are mainly:

1. **Only call Hooks at the top level.**
   Do not call Hooks inside loops, conditions, or nested functions.

2. **Only call Hooks from React functions.**
   Call them from React function components or Custom Hooks.

**Wrong:**
\`\`\`jsx
if (isLoggedIn) {
  const [user, setUser] = useState(null);
}
\`\`\`

**Correct:**
\`\`\`jsx
const [user, setUser] = useState(null);

if (isLoggedIn) {
  // use user here
}
\`\`\`

Following these rules allows React to maintain the correct order of Hook calls between renders.`,
    explanationHindi: `Hooks ke important rules hain:

1. Hooks ko top level par call karo. Loops, conditions ya nested functions ke andar directly Hook call nahi karna chahiye.
2. Hooks ko React function component ya Custom Hook ke andar call karo.

**Wrong:**
\`\`\`jsx
if (isLoggedIn) {
  const [user, setUser] = useState(null);
}
\`\`\`

**Correct:**
\`\`\`jsx
const [user, setUser] = useState(null);
\`\`\`

Isse React har render mein Hooks ka order correctly maintain kar pata hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 2,
  },
  {
    technologySlug: 'react',
    topicSlug: 'props-state',
    question: `25. What is \`useState\`, and how does it work?`,
    slug: '25-what-is-usestate-and-how-does-it-work',
    answer: `\`useState\` is a Hook used to add state to a functional component.

**Example:**
\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
\`\`\`

\`count\` is the current state value and \`setCount\` is the function used to request an update.

When the state changes, React renders the component again with the new state.`,
    explanation: `\`useState\` is a Hook used to add state to a functional component.

**Example:**
\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
\`\`\`

\`count\` is the current state value and \`setCount\` is the function used to request an update.

When the state changes, React renders the component again with the new state.`,
    explanationHindi: `\`useState\` functional component mein state add karne ke liye use hota hai.

\`\`\`jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
\`\`\`

\`count\` current state value hai aur \`setCount\` state update karne ka function hai.

State change hone par component new state ke saath re-render hota hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 3,
  },
  {
    technologySlug: 'react',
    topicSlug: 'props-state',
    question: `26. What is the functional state update pattern, and when should you use it?`,
    slug: '26-what-is-the-functional-state-update-pattern-and-when-should-you-use-it',
    answer: `The functional state update pattern is used when the new state depends on the previous state.

Instead of:
\`\`\`jsx
setCount(count + 1);
\`\`\`

we can use:
\`\`\`jsx
setCount(prevCount => prevCount + 1);
\`\`\`

This is especially useful when multiple updates may be queued or when the update depends on the previous value.

For example:
\`\`\`jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
\`\`\`

Each update receives the latest previous state value.`,
    explanation: `The functional state update pattern is used when the new state depends on the previous state.

Instead of:
\`\`\`jsx
setCount(count + 1);
\`\`\`

we can use:
\`\`\`jsx
setCount(prevCount => prevCount + 1);
\`\`\`

This is especially useful when multiple updates may be queued or when the update depends on the previous value.

For example:
\`\`\`jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
\`\`\`

Each update receives the latest previous state value.`,
    explanationHindi: `Functional state update tab use karte hain jab new state previous state par depend karti hai.

Instead of:
\`\`\`jsx
setCount(count + 1);
\`\`\`

use:
\`\`\`jsx
setCount(prevCount => prevCount + 1);
\`\`\`

Ye multiple updates ya previous value par dependent updates mein useful hota hai.

Example:
\`\`\`jsx
setCount(prev => prev + 1);
setCount(prev => prev + 1);
\`\`\`

Har update ko previous/latest state value milti hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 4,
  },
  {
    technologySlug: 'react',
    topicSlug: 'props-state',
    question: `27. What is \`useEffect\` used for?`,
    slug: '27-what-is-useeffect-used-for',
    answer: `\`useEffect\` is used to synchronize a component with something outside its rendering logic.

Common examples include:

- Fetching data
- Setting up subscriptions
- Adding event listeners
- Starting timers
- Updating the document title

**Example:**
\`\`\`jsx
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

The dependency array tells React when the effect needs to run again.`,
    explanation: `\`useEffect\` is used to synchronize a component with something outside its rendering logic.

Common examples include:

- Fetching data
- Setting up subscriptions
- Adding event listeners
- Starting timers
- Updating the document title

**Example:**
\`\`\`jsx
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

The dependency array tells React when the effect needs to run again.`,
    explanationHindi: `\`useEffect\` ka use component ko rendering ke bahar wali activities ke saath synchronize karne ke liye hota hai.

Common examples:

- API/data fetching
- Subscription
- Event listener
- Timer
- Document title update

\`\`\`jsx
useEffect(() => {
  document.title = \`Count: \${count}\`;
}, [count]);
\`\`\`

Dependency array batati hai ki effect ko kab dobara run karna hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 5,
  },
  {
    technologySlug: 'react',
    topicSlug: 'props-state',
    question: `28. How does the dependency array of \`useEffect\` work?`,
    slug: '28-how-does-the-dependency-array-of-useeffect-work',
    answer: `The dependency array tells React which values an effect depends on.

**No dependency array:**
\`\`\`jsx
useEffect(() => {
  // runs after every render
});
\`\`\`

**Empty array:**
\`\`\`jsx
useEffect(() => {
  // runs after the initial mount
}, []);
\`\`\`

**With dependencies:**
\`\`\`jsx
useEffect(() => {
  // runs after initial mount and when count changes
}, [count]);
\`\`\`

If an effect uses a reactive value, that value generally needs to be included in its dependencies according to the effect's logic.`,
    explanation: `The dependency array tells React which values an effect depends on.

**No dependency array:**
\`\`\`jsx
useEffect(() => {
  // runs after every render
});
\`\`\`

**Empty array:**
\`\`\`jsx
useEffect(() => {
  // runs after the initial mount
}, []);
\`\`\`

**With dependencies:**
\`\`\`jsx
useEffect(() => {
  // runs after initial mount and when count changes
}, [count]);
\`\`\`

If an effect uses a reactive value, that value generally needs to be included in its dependencies according to the effect's logic.`,
    explanationHindi: `Dependency array React ko batati hai ki effect kin values par depend karta hai.

**No array:**
\`\`\`jsx
useEffect(() => {
  // every render ke baad
});
\`\`\`

**Empty array:**
\`\`\`jsx
useEffect(() => {
  // initial mount ke baad
}, []);
\`\`\`

**Dependency ke saath:**
\`\`\`jsx
useEffect(() => {
  // initial mount aur count change hone par
}, [count]);
\`\`\`

Effect ke andar use hone wali reactive values ko effect ki dependencies ke according handle karna chahiye.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 6,
  },
  {
    technologySlug: 'react',
    topicSlug: 'props-state',
    question: `29. What is the difference between \`useEffect(() => {})\`, \`useEffect(() => {}, [])\`, and \`useEffect(() => {}, [value])\`?`,
    slug: '29-what-is-the-difference-between-useeffect-useeffect-and-useeffect-value',
    answer: `The main difference is the dependency array:

\`\`\`jsx
useEffect(() => {
  // runs after every render
});
\`\`\`

\`\`\`jsx
useEffect(() => {
  // runs after the initial mount
}, []);
\`\`\`

\`\`\`jsx
useEffect(() => {
  // runs after the initial mount and when value changes
}, [value]);
\`\`\`

So, the dependency array controls when React needs to re-run the effect.`,
    explanation: `The main difference is the dependency array:

\`\`\`jsx
useEffect(() => {
  // runs after every render
});
\`\`\`

\`\`\`jsx
useEffect(() => {
  // runs after the initial mount
}, []);
\`\`\`

\`\`\`jsx
useEffect(() => {
  // runs after the initial mount and when value changes
}, [value]);
\`\`\`

So, the dependency array controls when React needs to re-run the effect.`,
    explanationHindi: `Teen cases mein main difference dependency array ka hai:

\`\`\`jsx
useEffect(() => {
  // har render ke baad
});
\`\`\`

\`\`\`jsx
useEffect(() => {
  // initial mount ke baad
}, []);
\`\`\`

\`\`\`jsx
useEffect(() => {
  // initial mount aur value change hone par
}, [value]);
\`\`\`

Simple words mein, dependency array effect ke re-run hone ka behavior control karti hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 7,
  },
  {
    technologySlug: 'react',
    topicSlug: 'props-state',
    question: `30. Why does \`useEffect\` sometimes run twice in development?`,
    slug: '30-why-does-useeffect-sometimes-run-twice-in-development',
    answer: `In development, React Strict Mode may intentionally run certain component logic and effects more than once to help detect unsafe side effects and other bugs.

This behavior is mainly a development check. It does not mean that React production rendering behaves exactly the same way.

If an effect runs twice in development, the correct approach is to make the effect and its cleanup safe and idempotent rather than simply trying to hide the second run.`,
    explanation: `In development, React Strict Mode may intentionally run certain component logic and effects more than once to help detect unsafe side effects and other bugs.

This behavior is mainly a development check. It does not mean that React production rendering behaves exactly the same way.

If an effect runs twice in development, the correct approach is to make the effect and its cleanup safe and idempotent rather than simply trying to hide the second run.`,
    explanationHindi: `Development mein React Strict Mode kuch component logic ya effects ko intentionally extra time run kar sakta hai taaki unsafe side effects aur bugs detect kiye ja saken.

Ye mainly development checking behavior hai.

Agar effect development mein twice run ho raha hai, to proper cleanup aur safe effect logic likhna chahiye, sirf second execution ko hide nahi karna chahiye.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 8,
  },
  {
    technologySlug: 'react',
    topicSlug: 'props-state',
    question: `31. What is the cleanup function in \`useEffect\`, and when is it required?`,
    slug: '31-what-is-the-cleanup-function-in-useeffect-and-when-is-it-required',
    answer: `A cleanup function is returned from an effect when the effect creates something that needs to be stopped or removed.

Common examples:

- Removing event listeners
- Clearing timers
- Unsubscribing from subscriptions
- Disconnecting external resources

**Example:**
\`\`\`jsx
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
\`\`\`

Cleanup helps prevent unwanted work and resource leaks.`,
    explanation: `A cleanup function is returned from an effect when the effect creates something that needs to be stopped or removed.

Common examples:

- Removing event listeners
- Clearing timers
- Unsubscribing from subscriptions
- Disconnecting external resources

**Example:**
\`\`\`jsx
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
\`\`\`

Cleanup helps prevent unwanted work and resource leaks.`,
    explanationHindi: `Cleanup function tab use hota hai jab effect ke through koi resource create kiya ho jise baad mein remove ya stop karna ho.

Examples:

- Event listener remove karna
- Timer clear karna
- Subscription unsubscribe karna
- External connection disconnect karna

\`\`\`jsx
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);

  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
\`\`\`

Cleanup unwanted work aur resource leaks ko avoid karne mein help karta hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 9,
  },
  {
    technologySlug: 'react',
    topicSlug: 'props-state',
    question: `32. How do you prevent infinite loops in \`useEffect\`?`,
    slug: '32-how-do-you-prevent-infinite-loops-in-useeffect',
    answer: `An infinite effect loop usually happens when an effect updates state and that update changes one of the effect's dependencies, causing the effect to run again.

For example, avoid patterns where:

\`Effect → setState → dependency changes → Effect → setState\`

To prevent this:

- Check whether the effect is actually needed.
- Use the correct dependency array.
- Avoid creating unstable object/function dependencies unnecessarily.
- Use functional state updates when appropriate.
- Separate event-driven logic from synchronization effects.

The goal is to fix the dependency or design problem rather than simply suppressing the effect.`,
    explanation: `An infinite effect loop usually happens when an effect updates state and that update changes one of the effect's dependencies, causing the effect to run again.

For example, avoid patterns where:

\`Effect → setState → dependency changes → Effect → setState\`

To prevent this:

- Check whether the effect is actually needed.
- Use the correct dependency array.
- Avoid creating unstable object/function dependencies unnecessarily.
- Use functional state updates when appropriate.
- Separate event-driven logic from synchronization effects.

The goal is to fix the dependency or design problem rather than simply suppressing the effect.`,
    explanationHindi: `Infinite \`useEffect\` loop usually tab hota hai jab effect state update karta hai aur wo state dependency ko change kar deti hai, jiski wajah se effect dobara run hota hai.

Flow:

\`Effect → setState → dependency change → Effect → setState\`

Avoid karne ke liye:

- Check karo ki effect actually required hai ya nahi.
- Correct dependencies use karo.
- Unnecessary new object/function dependencies avoid karo.
- Zarurat par functional state update use karo.
- Event logic aur synchronization logic ko separate rakho.

Sirf effect ko suppress karne ke bajay actual dependency/design issue solve karna better hai.

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 10,
  },
  {
    technologySlug: 'react',
    topicSlug: 'props-state',
    question: `33. What is a stale closure in React?`,
    slug: '33-what-is-a-stale-closure-in-react',
    answer: `A stale closure happens when a function created during an earlier render keeps using values from that render even though newer state or props exist.

For example, an asynchronous callback or timer may still refer to an older state value.

A common solution is to use the correct effect dependencies or a functional state update when updating based on previous state.

\`\`\`jsx
setCount(prev => prev + 1);
\`\`\`

Understanding closures is important when working with timers, subscriptions, async callbacks, and effects.`,
    explanation: `A stale closure happens when a function created during an earlier render keeps using values from that render even though newer state or props exist.

For example, an asynchronous callback or timer may still refer to an older state value.

A common solution is to use the correct effect dependencies or a functional state update when updating based on previous state.

\`\`\`jsx
setCount(prev => prev + 1);
\`\`\`

Understanding closures is important when working with timers, subscriptions, async callbacks, and effects.`,
    explanationHindi: `Stale closure tab hota hai jab kisi previous render mein create hua function usi render ki old state/props value ko use karta rehta hai, even though new value available hai.

Ye timers, subscriptions, async callbacks aur effects mein common ho sakta hai.

Correct dependencies aur zarurat par functional state update use karke problem handle kar sakte hain.

\`\`\`jsx
setCount(prev => prev + 1);
\`\`\`

---`,
    difficulty: 'easy',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 11,
  },
  {
    technologySlug: 'react',
    topicSlug: 'forms',
    question: `34. What is the difference between \`useEffect\` and \`useLayoutEffect\`?`,
    slug: '34-what-is-the-difference-between-useeffect-and-uselayouteffect',
    answer: `\`useEffect\` runs after the browser has had a chance to paint the updated UI, while \`useLayoutEffect\` runs synchronously after React commits DOM changes but before the browser paints.

Use \`useEffect\` for most side effects such as data fetching, subscriptions, and logging.

Use \`useLayoutEffect\` when you need to measure or synchronously adjust the DOM before the user sees the result.

For example, measuring an element's size is a case where \`useLayoutEffect\` can be appropriate.

Because \`useLayoutEffect\` can block painting, it should not be used everywhere.`,
    explanation: `\`useEffect\` runs after the browser has had a chance to paint the updated UI, while \`useLayoutEffect\` runs synchronously after React commits DOM changes but before the browser paints.

Use \`useEffect\` for most side effects such as data fetching, subscriptions, and logging.

Use \`useLayoutEffect\` when you need to measure or synchronously adjust the DOM before the user sees the result.

For example, measuring an element's size is a case where \`useLayoutEffect\` can be appropriate.

Because \`useLayoutEffect\` can block painting, it should not be used everywhere.`,
    explanationHindi: `\`useEffect\` generally browser paint ke baad side effect run karta hai, jabki \`useLayoutEffect\` DOM update commit hone ke baad aur browser paint se pehle synchronously run hota hai.

Most cases mein \`useEffect\` use karna chahiye, jaise API calls, subscriptions aur logging.

Agar DOM ko measure karna ya paint se pehle layout adjustment karna ho, tab \`useLayoutEffect\` useful ho sakta hai.

Kyuki \`useLayoutEffect\` painting ko delay kar sakta hai, ise unnecessarily use nahi karna chahiye.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 1,
  },
  {
    technologySlug: 'react',
    topicSlug: 'forms',
    question: `35. What is \`useRef\`, and when should you use it?`,
    slug: '35-what-is-useref-and-when-should-you-use-it',
    answer: `\`useRef\` is a Hook that stores a mutable value that persists between renders without causing a re-render when the value changes.

It is commonly used for:

- Accessing a DOM element
- Storing a timer ID
- Keeping a value between renders without rendering because of it

**Example:**
\`\`\`jsx
const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus();
};

return <input ref={inputRef} />;
\`\`\`

Here, \`inputRef.current\` points to the input element after it is mounted.`,
    explanation: `\`useRef\` is a Hook that stores a mutable value that persists between renders without causing a re-render when the value changes.

It is commonly used for:

- Accessing a DOM element
- Storing a timer ID
- Keeping a value between renders without rendering because of it

**Example:**
\`\`\`jsx
const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus();
};

return <input ref={inputRef} />;
\`\`\`

Here, \`inputRef.current\` points to the input element after it is mounted.`,
    explanationHindi: `\`useRef\` ek aisa Hook hai jo aisi value store karta hai jo renders ke beech persist karti hai, lekin value change hone par automatically re-render trigger nahi hota.

Common uses:

- DOM element access karna
- Timer ID store karna
- Aisi value store karna jo render ke liye required nahi hai

\`\`\`jsx
const inputRef = useRef(null);

const focusInput = () => {
  inputRef.current.focus();
};

return <input ref={inputRef} />;
\`\`\`

Yahan \`inputRef.current\` input element ko reference karta hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 2,
  },
  {
    technologySlug: 'react',
    topicSlug: 'forms',
    question: `36. What is the difference between \`useRef\` and \`useState\`?`,
    slug: '36-what-is-the-difference-between-useref-and-usestate',
    answer: `\`useState\` and \`useRef\` both preserve values between renders, but they behave differently.

- **useState**: updating it schedules a re-render.
- **useRef**: changing \`ref.current\` does not schedule a re-render.

Use state when the value affects what should be displayed on the screen.

Use a ref when you need to keep a value or access a DOM node without needing a render caused by that change.

**Example:**
\`\`\`jsx
const [count, setCount] = useState(0);
const timerId = useRef(null);
\`\`\``,
    explanation: `\`useState\` and \`useRef\` both preserve values between renders, but they behave differently.

- **useState**: updating it schedules a re-render.
- **useRef**: changing \`ref.current\` does not schedule a re-render.

Use state when the value affects what should be displayed on the screen.

Use a ref when you need to keep a value or access a DOM node without needing a render caused by that change.

**Example:**
\`\`\`jsx
const [count, setCount] = useState(0);
const timerId = useRef(null);
\`\`\``,
    explanationHindi: `\`useState\` aur \`useRef\` dono values ko renders ke beech preserve kar sakte hain, lekin behavior different hai.

- **useState** update karne par component re-render hota hai.
- **useRef** ka \`current\` change karne par re-render automatically nahi hota.

Agar value UI mein show karni hai to state use karo.

Agar value store karni hai ya DOM access karna hai bina re-render ke, ref useful hai.

\`\`\`jsx
const [count, setCount] = useState(0);
const timerId = useRef(null);
\`\`\`

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 3,
  },
  {
    technologySlug: 'react',
    topicSlug: 'forms',
    question: `37. What is \`useContext\`, and how does it work?`,
    slug: '37-what-is-usecontext-and-how-does-it-work',
    answer: `\`useContext\` lets a component read a value from a React Context without passing that value through every intermediate component as props.

**Example:**
\`\`\`jsx
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
\`\`\`

It is useful for shared values such as theme, locale, or authenticated user information.

Context is not automatically a replacement for every type of global state management.`,
    explanation: `\`useContext\` lets a component read a value from a React Context without passing that value through every intermediate component as props.

**Example:**
\`\`\`jsx
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
\`\`\`

It is useful for shared values such as theme, locale, or authenticated user information.

Context is not automatically a replacement for every type of global state management.`,
    explanationHindi: `\`useContext\` component ko Context se value directly read karne deta hai, bina har intermediate component ke through prop pass kiye.

\`\`\`jsx
const ThemeContext = createContext("light");

function Button() {
  const theme = useContext(ThemeContext);
  return <button>{theme}</button>;
}
\`\`\`

Theme, locale ya authenticated user information jaise shared values ke liye useful hai.

Lekin Context har type ke global state ke liye Redux ya other state solutions ka automatic replacement nahi hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 4,
  },
  {
    technologySlug: 'react',
    topicSlug: 'forms',
    question: `38. What is \`useMemo\`, and when should you use it?`,
    slug: '38-what-is-usememo-and-when-should-you-use-it',
    answer: `\`useMemo\` memoizes the result of a calculation between renders.

It is useful when a calculation is expensive and its dependencies have not changed.

**Example:**
\`\`\`jsx
const filteredUsers = useMemo(() => {
  return users.filter(user => user.active);
}, [users]);
\`\`\`

React can reuse the previous calculated value when the dependencies are unchanged.

\`useMemo\` should be used for a real performance reason. Using it everywhere can add complexity and memory overhead.`,
    explanation: `\`useMemo\` memoizes the result of a calculation between renders.

It is useful when a calculation is expensive and its dependencies have not changed.

**Example:**
\`\`\`jsx
const filteredUsers = useMemo(() => {
  return users.filter(user => user.active);
}, [users]);
\`\`\`

React can reuse the previous calculated value when the dependencies are unchanged.

\`useMemo\` should be used for a real performance reason. Using it everywhere can add complexity and memory overhead.`,
    explanationHindi: `\`useMemo\` kisi calculation ke result ko memoize karta hai.

Agar calculation expensive hai aur dependencies change nahi hui hain, to previous result reuse kiya ja sakta hai.

\`\`\`jsx
const filteredUsers = useMemo(() => {
  return users.filter(user => user.active);
}, [users]);
\`\`\`

Har jagah \`useMemo\` use nahi karna chahiye. Actual performance need ho tab use karna better hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 5,
  },
  {
    technologySlug: 'react',
    topicSlug: 'forms',
    question: `39. What is \`useCallback\`, and when should you use it?`,
    slug: '39-what-is-usecallback-and-when-should-you-use-it',
    answer: `\`useCallback\` memoizes a function reference between renders.

It is mainly useful when:

- Passing a callback to a memoized child component.
- A function is used as a dependency and needs a stable reference.
- There is a measured performance reason for keeping the function stable.

**Example:**
\`\`\`jsx
const handleClick = useCallback(() => {
  setCount(prev => prev + 1);
}, []);
\`\`\`

Like \`useMemo\`, \`useCallback\` should not be added automatically to every function.`,
    explanation: `\`useCallback\` memoizes a function reference between renders.

It is mainly useful when:

- Passing a callback to a memoized child component.
- A function is used as a dependency and needs a stable reference.
- There is a measured performance reason for keeping the function stable.

**Example:**
\`\`\`jsx
const handleClick = useCallback(() => {
  setCount(prev => prev + 1);
}, []);
\`\`\`

Like \`useMemo\`, \`useCallback\` should not be added automatically to every function.`,
    explanationHindi: `\`useCallback\` function reference ko renders ke beech memoize karta hai.

Ye useful ho sakta hai jab:

- Callback memoized child ko pass kar rahe ho.
- Function kisi dependency ke roop mein use ho raha ho.
- Performance reason ki wajah se stable function reference chahiye.

\`\`\`jsx
const handleClick = useCallback(() => {
  setCount(prev => prev + 1);
}, []);
\`\`\`

Har function ke saath automatically \`useCallback\` lagana zaroori nahi hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 6,
  },
  {
    technologySlug: 'react',
    topicSlug: 'forms',
    question: `40. What is the difference between \`useMemo\`, \`useCallback\`, and \`React.memo\`?`,
    slug: '40-what-is-the-difference-between-usememo-usecallback-and-reactmemo',
    answer: `These three tools solve different problems:

- **\`useMemo\`** memoizes a calculated value.
- **\`useCallback\`** memoizes a function reference.
- **\`React.memo\`** can skip rendering a component when its props have not changed according to its comparison.

**Example:**
\`\`\`jsx
const result = useMemo(() => calculate(data), [data]);

const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

const Child = React.memo(function Child({ onClick }) {
  return <button onClick={onClick}>Click</button>;
});
\`\`\`

They are performance optimization tools, not requirements for normal React code.`,
    explanation: `These three tools solve different problems:

- **\`useMemo\`** memoizes a calculated value.
- **\`useCallback\`** memoizes a function reference.
- **\`React.memo\`** can skip rendering a component when its props have not changed according to its comparison.

**Example:**
\`\`\`jsx
const result = useMemo(() => calculate(data), [data]);

const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

const Child = React.memo(function Child({ onClick }) {
  return <button onClick={onClick}>Click</button>;
});
\`\`\`

They are performance optimization tools, not requirements for normal React code.`,
    explanationHindi: `In teeno ka purpose different hai:

- **\`useMemo\`** calculated value ko memoize karta hai.
- **\`useCallback\`** function reference ko memoize karta hai.
- **\`React.memo\`** props unchanged hone par component ke unnecessary render ko skip karne mein help kar sakta hai.

Example:

\`\`\`jsx
const result = useMemo(() => calculate(data), [data]);

const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);
\`\`\`

Inhe performance optimization ke liye use karna chahiye, har jagah nahi.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 7,
  },
  {
    technologySlug: 'react',
    topicSlug: 'forms',
    question: `41. What are Custom Hooks?`,
    slug: '41-what-are-custom-hooks',
    answer: `Custom Hooks are reusable JavaScript functions in React whose names start with \`use\` and which can use other React Hooks.

They are used to extract reusable stateful logic from components.

For example, if multiple components need the same data-fetching logic, we can create a \`useFetch\` Hook instead of repeating the same logic in every component.

\`\`\`jsx
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  return { count, increment };
}
\`\`\`

A Custom Hook shares logic, not the same state instance.`,
    explanation: `Custom Hooks are reusable JavaScript functions in React whose names start with \`use\` and which can use other React Hooks.

They are used to extract reusable stateful logic from components.

For example, if multiple components need the same data-fetching logic, we can create a \`useFetch\` Hook instead of repeating the same logic in every component.

\`\`\`jsx
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  return { count, increment };
}
\`\`\`

A Custom Hook shares logic, not the same state instance.`,
    explanationHindi: `Custom Hook ek reusable JavaScript function hota hai jiska naam normally \`use\` se start hota hai aur jiske andar React Hooks use kiye ja sakte hain.

Iska use reusable stateful logic ko component se alag karne ke liye hota hai.

Example ke liye agar multiple components mein same API fetching logic chahiye, to \`useFetch\` Custom Hook bana sakte hain.

\`\`\`jsx
function useCounter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prev => prev + 1);

  return { count, increment };
}
\`\`\`

Custom Hook logic share karta hai, same state ko automatically share nahi karta.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 8,
  },
  {
    technologySlug: 'react',
    topicSlug: 'forms',
    question: `42. When should you create a Custom Hook?`,
    slug: '42-when-should-you-create-a-custom-hook',
    answer: `I create a Custom Hook when the same stateful or effect-based logic is needed in more than one component, or when a component has complex logic that would be clearer when extracted.

Common examples are:

- Data fetching
- Form handling
- Debouncing
- Authentication logic
- Window size tracking
- Online/offline status

The goal is to reuse logic and keep components easier to read.`,
    explanation: `I create a Custom Hook when the same stateful or effect-based logic is needed in more than one component, or when a component has complex logic that would be clearer when extracted.

Common examples are:

- Data fetching
- Form handling
- Debouncing
- Authentication logic
- Window size tracking
- Online/offline status

The goal is to reuse logic and keep components easier to read.`,
    explanationHindi: `Custom Hook tab create karna useful hota hai jab same stateful ya effect-based logic multiple components mein required ho.

Examples:

- API/data fetching
- Form handling
- Debouncing
- Authentication logic
- Window size track karna
- Online/offline status

Iska main goal reusable logic banana aur components ko clean rakhna hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 9,
  },
  {
    technologySlug: 'react',
    topicSlug: 'forms',
    question: `43. Do Custom Hooks share state between components?`,
    slug: '43-do-custom-hooks-share-state-between-components',
    answer: `No. Custom Hooks share the logic, not the same state instance.

If two components call the same Custom Hook, each component gets its own state.

For example:

\`\`\`jsx
const a = useCounter();
const b = useCounter();
\`\`\`

\`a.count\` and \`b.count\` are separate states.

If components need the same shared state, use a suitable shared-state solution such as lifted state, Context, or a state-management library.`,
    explanation: `No. Custom Hooks share the logic, not the same state instance.

If two components call the same Custom Hook, each component gets its own state.

For example:

\`\`\`jsx
const a = useCounter();
const b = useCounter();
\`\`\`

\`a.count\` and \`b.count\` are separate states.

If components need the same shared state, use a suitable shared-state solution such as lifted state, Context, or a state-management library.`,
    explanationHindi: `Nahi. Custom Hook same logic share karta hai, lekin automatically same state share nahi karta.

Agar do components \`useCounter()\` call karte hain, to dono ko separate state instances milengi.

\`\`\`jsx
const a = useCounter();
const b = useCounter();
\`\`\`

\`a.count\` aur \`b.count\` alag states hain.

Agar actual same state multiple components ko chahiye, to lifted state, Context ya state-management solution use karna chahiye.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 10,
  },
  {
    technologySlug: 'react',
    topicSlug: 'forms',
    question: `44. How would you create a reusable data-fetching Custom Hook?`,
    slug: '44-how-would-you-create-a-reusable-data-fetching-custom-hook',
    answer: `I would keep the fetching state and effect logic inside a Custom Hook and return the data, loading state, and error.

\`\`\`jsx
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
\`\`\`

Then a component can call \`useFetch("/api/users")\` and focus mainly on displaying the result.`,
    explanation: `I would keep the fetching state and effect logic inside a Custom Hook and return the data, loading state, and error.

\`\`\`jsx
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
\`\`\`

Then a component can call \`useFetch("/api/users")\` and focus mainly on displaying the result.`,
    explanationHindi: `Reusable data-fetching Custom Hook mein main API logic, loading state, data aur error handling ko ek jagah rakhoonga.

Example:

\`\`\`jsx
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch logic...

  return { data, loading, error };
}
\`\`\`

Phir component simply \`useFetch("/api/users")\` call karke data use kar sakta hai.

Isse fetching logic baar-baar likhne ki zarurat nahi padti.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 11,
  },
  {
    technologySlug: 'react',
    topicSlug: 'hooks',
    question: `45. What is \`useReducer\`, and when is it better than \`useState\`?`,
    slug: '45-what-is-usereducer-and-when-is-it-better-than-usestate',
    answer: `\`useReducer\` is a Hook for managing state through a reducer function and dispatched actions.

It is useful when:

- State has multiple related values.
- Many different actions can update the state.
- State transitions are complex.
- You want update logic in one predictable place.

\`\`\`jsx
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
\`\`\`

For simple state, \`useState\` is usually easier.`,
    explanation: `\`useReducer\` is a Hook for managing state through a reducer function and dispatched actions.

It is useful when:

- State has multiple related values.
- Many different actions can update the state.
- State transitions are complex.
- You want update logic in one predictable place.

\`\`\`jsx
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
\`\`\`

For simple state, \`useState\` is usually easier.`,
    explanationHindi: `\`useReducer\` state ko reducer function aur actions ke through manage karne wala Hook hai.

Ye tab useful hota hai jab:

- State mein multiple related values hon.
- Multiple actions state ko update karte hon.
- State transitions complex hon.
- Update logic ko ek place par rakhna ho.

\`\`\`jsx
const [state, dispatch] = useReducer(reducer, { count: 0 });
\`\`\`

Simple state ke liye \`useState\` usually easier hota hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 1,
  },
  {
    technologySlug: 'react',
    topicSlug: 'hooks',
    question: `46. What is \`useImperativeHandle\`, and when would you use it?`,
    slug: '46-what-is-useimperativehandle-and-when-would-you-use-it',
    answer: `\`useImperativeHandle\` lets a child component control which methods or values are exposed to a parent through a ref.

For example, a custom input can expose only \`focus()\` and \`clear()\` instead of exposing its complete internal implementation.

Conceptually:

\`\`\`jsx
useImperativeHandle(ref, () => ({
  focus() {
    inputRef.current.focus();
  },
  clear() {
    inputRef.current.value = "";
  }
}));
\`\`\`

It is useful for controlled imperative interactions, but normal React props and state should be preferred when they are sufficient.`,
    explanation: `\`useImperativeHandle\` lets a child component control which methods or values are exposed to a parent through a ref.

For example, a custom input can expose only \`focus()\` and \`clear()\` instead of exposing its complete internal implementation.

Conceptually:

\`\`\`jsx
useImperativeHandle(ref, () => ({
  focus() {
    inputRef.current.focus();
  },
  clear() {
    inputRef.current.value = "";
  }
}));
\`\`\`

It is useful for controlled imperative interactions, but normal React props and state should be preferred when they are sufficient.`,
    explanationHindi: `\`useImperativeHandle\` child component ko control karne deta hai ki parent ko ref ke through kaunse methods ya values expose karne hain.

Example mein child sirf \`focus()\` ya \`clear()\` expose kar sakta hai, poori internal implementation nahi.

\`\`\`jsx
useImperativeHandle(ref, () => ({
  focus() {
    inputRef.current.focus();
  }
}));
\`\`\`

Ye specific imperative interactions ke liye useful hai. Normal props/state sufficient ho to unhe prefer karna chahiye.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 2,
  },
  {
    technologySlug: 'react',
    topicSlug: 'hooks',
    question: `47. What is \`useTransition\`, and why is it useful?`,
    slug: '47-what-is-usetransition-and-why-is-it-useful',
    answer: `\`useTransition\` lets us mark some state updates as non-urgent transitions.

This is useful when an update may involve expensive rendering and we want urgent interactions, such as typing or clicking, to remain responsive.

\`\`\`jsx
const [isPending, startTransition] = useTransition();

function handleChange(value) {
  setInput(value);

  startTransition(() => {
    setSearchQuery(value);
  });
}
\`\`\`

\`isPending\` can be used to show a loading indicator while the transition is in progress.

The important idea is that it helps React prioritize urgent UI work over lower-priority transition work.`,
    explanation: `\`useTransition\` lets us mark some state updates as non-urgent transitions.

This is useful when an update may involve expensive rendering and we want urgent interactions, such as typing or clicking, to remain responsive.

\`\`\`jsx
const [isPending, startTransition] = useTransition();

function handleChange(value) {
  setInput(value);

  startTransition(() => {
    setSearchQuery(value);
  });
}
\`\`\`

\`isPending\` can be used to show a loading indicator while the transition is in progress.

The important idea is that it helps React prioritize urgent UI work over lower-priority transition work.`,
    explanationHindi: `\`useTransition\` kisi state update ko non-urgent transition ke roop mein mark karne deta hai.

Ye tab useful hai jab update expensive rendering cause kar sakta ho aur hum chahte hain ki typing ya clicking jaise urgent interactions responsive rahen.

\`\`\`jsx
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setSearchQuery(value);
});
\`\`\`

\`isPending\` se transition ke time loading indicator dikha sakte hain.

Simple words mein, React ko urgent aur less-urgent UI work prioritize karne mein help milti hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 3,
  },
  {
    technologySlug: 'react',
    topicSlug: 'hooks',
    question: `48. What is \`useDeferredValue\`, and when would you use it?`,
    slug: '48-what-is-usedeferredvalue-and-when-would-you-use-it',
    answer: `\`useDeferredValue\` lets us use a deferred version of a value so that expensive UI work can lag behind a more urgent update.

For example, in a search screen, the input value should update immediately while a large result list can use a deferred value.

\`\`\`jsx
const [query, setQuery] = useState("");
const deferredQuery = useDeferredValue(query);
\`\`\`

The input can use \`query\`, while expensive rendering can use \`deferredQuery\`.

It is useful when the UI contains expensive rendering that should not block more urgent interactions.`,
    explanation: `\`useDeferredValue\` lets us use a deferred version of a value so that expensive UI work can lag behind a more urgent update.

For example, in a search screen, the input value should update immediately while a large result list can use a deferred value.

\`\`\`jsx
const [query, setQuery] = useState("");
const deferredQuery = useDeferredValue(query);
\`\`\`

The input can use \`query\`, while expensive rendering can use \`deferredQuery\`.

It is useful when the UI contains expensive rendering that should not block more urgent interactions.`,
    explanationHindi: `\`useDeferredValue\` kisi value ka deferred version provide karta hai, jisse expensive UI work urgent update ke comparison mein baad mein process ho sakta hai.

Example search UI mein input immediately update ho sakta hai aur large result list deferred query use kar sakti hai.

\`\`\`jsx
const [query, setQuery] = useState("");
const deferredQuery = useDeferredValue(query);
\`\`\`

Ye tab useful hai jab expensive rendering user interaction ko slow kar sakti ho.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 4,
  },
  {
    technologySlug: 'react',
    topicSlug: 'hooks',
    question: `49. What causes a React component to re-render?`,
    slug: '49-what-causes-a-react-component-to-re-render',
    answer: `A component can re-render when:

- Its state changes.
- Its parent renders and React renders that child as part of the process.
- Its consumed context value changes.
- Its subscribed external-store data changes.
- Its props change in a way that causes the component to render.

A re-render means React runs the component again to calculate the next UI. It does not automatically mean the browser DOM is fully recreated.

For example:

\`\`\`jsx
setCount(prev => prev + 1);
\`\`\`

changes state and schedules a new render.`,
    explanation: `A component can re-render when:

- Its state changes.
- Its parent renders and React renders that child as part of the process.
- Its consumed context value changes.
- Its subscribed external-store data changes.
- Its props change in a way that causes the component to render.

A re-render means React runs the component again to calculate the next UI. It does not automatically mean the browser DOM is fully recreated.

For example:

\`\`\`jsx
setCount(prev => prev + 1);
\`\`\`

changes state and schedules a new render.`,
    explanationHindi: `React component re-render hone ke common reasons hain:

- State change
- Parent ka render
- Consumed Context value change
- External store ka subscribed data change
- Props mein relevant change

Re-render ka matlab component function ko dobara run karke next UI calculate karna hai. Iska matlab ye nahi ki pura browser DOM dobara create hota hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 5,
  },
  {
    technologySlug: 'react',
    topicSlug: 'hooks',
    question: `50. Does a parent re-render always cause its child to re-render?`,
    slug: '50-does-a-parent-re-render-always-cause-its-child-to-re-render',
    answer: `A parent rendering can cause its child to be considered for rendering, but React can sometimes skip child work through memoization or other optimizations.

For example:

\`\`\`jsx
const Child = React.memo(function Child({ name }) {
  return <p>{name}</p>;
});
\`\`\`

If the child's props remain the same according to \`React.memo\` comparison, React can skip that child render.

The important point is not to assume that every parent render means every child must produce new DOM. Measure performance before adding memoization.`,
    explanation: `A parent rendering can cause its child to be considered for rendering, but React can sometimes skip child work through memoization or other optimizations.

For example:

\`\`\`jsx
const Child = React.memo(function Child({ name }) {
  return <p>{name}</p>;
});
\`\`\`

If the child's props remain the same according to \`React.memo\` comparison, React can skip that child render.

The important point is not to assume that every parent render means every child must produce new DOM. Measure performance before adding memoization.`,
    explanationHindi: `Parent re-render hone par child normally rendering process mein aa sakta hai, lekin \`React.memo\` jaise optimization se child ka render skip ho sakta hai.

\`\`\`jsx
const Child = React.memo(function Child({ name }) {
  return <p>{name}</p>;
});
\`\`\`

Agar props same hain, \`React.memo\` child ko re-render se skip karne mein help kar sakta hai.

Har jagah memoization lagana zaroori nahi; actual performance issue ko measure karna better hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 6,
  },
  {
    technologySlug: 'react',
    topicSlug: 'hooks',
    question: `51. How does React decide what needs to be updated in the DOM?`,
    slug: '51-how-does-react-decide-what-needs-to-be-updated-in-the-dom',
    answer: `React renders the updated component tree, compares the new result with the previous result during reconciliation, and then commits the necessary changes to the host environment.

For a browser application, that means updating the required DOM nodes.

For example, if only text changes:

\`\`\`jsx
<h1>{count}</h1>
\`\`\`

React can update the relevant text node instead of manually rebuilding the entire page.

Keys help React maintain identity when working with lists.`,
    explanation: `React renders the updated component tree, compares the new result with the previous result during reconciliation, and then commits the necessary changes to the host environment.

For a browser application, that means updating the required DOM nodes.

For example, if only text changes:

\`\`\`jsx
<h1>{count}</h1>
\`\`\`

React can update the relevant text node instead of manually rebuilding the entire page.

Keys help React maintain identity when working with lists.`,
    explanationHindi: `React updated component tree ko render karta hai, new aur previous result ko reconciliation ke through compare karta hai, aur phir required changes commit karta hai.

Browser application mein iska result required DOM nodes ke updates ke form mein hota hai.

Agar sirf text change hua hai, to React relevant text ko update kar sakta hai, pura page manually rebuild nahi karta.

Lists mein keys identity maintain karne mein help karti hain.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 7,
  },
  {
    technologySlug: 'react',
    topicSlug: 'hooks',
    question: `52. Explain the React rendering process from state update to DOM update.`,
    slug: '52-explain-the-react-rendering-process-from-state-update-to-dom-update',
    answer: `A simplified rendering flow is:

1. State or props change.
2. React schedules an update.
3. The component renders again.
4. React calculates the new UI representation.
5. React reconciles it with the previous result.
6. React commits the required DOM changes.
7. The browser paints the updated UI.

Example:

\`setCount()\` → render → reconciliation → commit → browser displays updated count.

This is the high-level flow I would explain in an interview.`,
    explanation: `A simplified rendering flow is:

1. State or props change.
2. React schedules an update.
3. The component renders again.
4. React calculates the new UI representation.
5. React reconciles it with the previous result.
6. React commits the required DOM changes.
7. The browser paints the updated UI.

Example:

\`setCount()\` → render → reconciliation → commit → browser displays updated count.

This is the high-level flow I would explain in an interview.`,
    explanationHindi: `React rendering ka simplified flow:

1. State ya props change hote hain.
2. React update schedule karta hai.
3. Component dobara render hota hai.
4. New UI representation calculate hota hai.
5. Previous result ke saath reconciliation hoti hai.
6. Required DOM changes commit hote hain.
7. Browser updated UI display karta hai.

Simple flow:

\`setCount()\` → render → reconciliation → commit → updated UI

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 8,
  },
  {
    technologySlug: 'react',
    topicSlug: 'hooks',
    question: `53. How does reconciliation work with lists and keys?`,
    slug: '53-how-does-reconciliation-work-with-lists-and-keys',
    answer: `During reconciliation, React needs to determine which list items correspond to which previous items.

A stable key gives each item an identity.

\`\`\`jsx
users.map(user => (
  <User key={user.id} user={user} />
))
\`\`\`

If an item moves, is inserted, or is removed, stable keys help React match the existing item with the correct new item.

Without good keys, React may associate the wrong component instance with a list position, which can cause incorrect UI or state behavior.`,
    explanation: `During reconciliation, React needs to determine which list items correspond to which previous items.

A stable key gives each item an identity.

\`\`\`jsx
users.map(user => (
  <User key={user.id} user={user} />
))
\`\`\`

If an item moves, is inserted, or is removed, stable keys help React match the existing item with the correct new item.

Without good keys, React may associate the wrong component instance with a list position, which can cause incorrect UI or state behavior.`,
    explanationHindi: `Lists ke reconciliation mein React ko identify karna hota hai ki new list ka kaunsa item previous list ke kaunse item se related hai.

Stable key item ki identity provide karti hai.

\`\`\`jsx
users.map(user => (
  <User key={user.id} user={user} />
))
\`\`\`

Agar item move, insert ya delete hota hai, stable keys React ko correct item match karne mein help karti hain.

Isliye dynamic lists mein stable unique keys important hain.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 9,
  },
  {
    technologySlug: 'react',
    topicSlug: 'hooks',
    question: `54. Why is using an array index as a key sometimes problematic?`,
    slug: '54-why-is-using-an-array-index-as-a-key-sometimes-problematic',
    answer: `An array index is based on position, not item identity.

Suppose we have:

\`\`\`jsx
items.map((item, index) => (
  <Item key={index} item={item} />
))
\`\`\`

If an item is inserted at the beginning or the list is reordered, indexes change. React may then associate an existing component instance with a different item.

This can cause incorrect local state or unexpected UI behavior.

Using a stable ID is usually better:

\`\`\`jsx
key={item.id}
\`\`\`

An index can be acceptable for a truly static list that never changes order or gets items inserted/removed.`,
    explanation: `An array index is based on position, not item identity.

Suppose we have:

\`\`\`jsx
items.map((item, index) => (
  <Item key={index} item={item} />
))
\`\`\`

If an item is inserted at the beginning or the list is reordered, indexes change. React may then associate an existing component instance with a different item.

This can cause incorrect local state or unexpected UI behavior.

Using a stable ID is usually better:

\`\`\`jsx
key={item.id}
\`\`\`

An index can be acceptable for a truly static list that never changes order or gets items inserted/removed.`,
    explanationHindi: `Array index item ki identity nahi, uski position represent karta hai.

Agar list reorder ho, item insert/delete ho, to indexes change ho sakte hain. React existing component instance ko different item ke saath associate kar sakta hai.

Isse local state ya UI behavior unexpected ho sakta hai.

Better:

\`\`\`jsx
key={item.id}
\`\`\`

Lekin completely static list jiska order kabhi change nahi hota, wahan index acceptable ho sakta hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 10,
  },
  {
    technologySlug: 'react',
    topicSlug: 'hooks',
    question: `55. What is batching in React?`,
    slug: '55-what-is-batching-in-react',
    answer: `Batching means React can group multiple state updates together and process them in a coordinated render instead of rendering after every individual update.

For example:

\`\`\`jsx
setFirstName("A");
setLastName("B");
\`\`\`

React can batch these updates so the component does not need a separate render for every setter call.

Modern React performs automatic batching in many asynchronous contexts as well.

The benefit is fewer unnecessary renders and better performance.`,
    explanation: `Batching means React can group multiple state updates together and process them in a coordinated render instead of rendering after every individual update.

For example:

\`\`\`jsx
setFirstName("A");
setLastName("B");
\`\`\`

React can batch these updates so the component does not need a separate render for every setter call.

Modern React performs automatic batching in many asynchronous contexts as well.

The benefit is fewer unnecessary renders and better performance.`,
    explanationHindi: `Batching ka matlab hai React multiple state updates ko group karke ek coordinated render mein process kar sakta hai.

Example:

\`\`\`jsx
setFirstName("A");
setLastName("B");
\`\`\`

In updates ko React batch kar sakta hai, jisse unnecessary separate renders reduce hote hain.

Modern React mein automatic batching many asynchronous situations mein bhi available hai.

Main benefit better performance aur fewer renders hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 11,
  },
  {
    technologySlug: 'react',
    topicSlug: 'context-api',
    question: `56. What is Strict Mode, and why does React use it?`,
    slug: '56-what-is-strict-mode-and-why-does-react-use-it',
    answer: `\`StrictMode\` is a development-only tool that helps identify potential problems in a React application.

It can intentionally perform additional checks and development behavior around rendering and effects so that unsafe patterns become easier to detect.

Example:

\`\`\`jsx
<StrictMode>
  <App />
</StrictMode>
\`\`\`

It does not add a visible UI feature. It is mainly there to help developers find bugs and prepare code for modern React behavior.`,
    explanation: `\`StrictMode\` is a development-only tool that helps identify potential problems in a React application.

It can intentionally perform additional checks and development behavior around rendering and effects so that unsafe patterns become easier to detect.

Example:

\`\`\`jsx
<StrictMode>
  <App />
</StrictMode>
\`\`\`

It does not add a visible UI feature. It is mainly there to help developers find bugs and prepare code for modern React behavior.`,
    explanationHindi: `\`StrictMode\` React ka development tool hai jo application mein potential problems identify karne mein help karta hai.

Ye development mein additional checks ya behavior perform kar sakta hai taaki unsafe patterns aur bugs detect ho saken.

\`\`\`jsx
<StrictMode>
  <App />
</StrictMode>
\`\`\`

Ye UI feature nahi hai. Iska main purpose development ke time code quality aur potential issues identify karna hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 1,
  },
  {
    technologySlug: 'react',
    topicSlug: 'context-api',
    question: `57. What is concurrent rendering in React?`,
    slug: '57-what-is-concurrent-rendering-in-react',
    answer: `Concurrent rendering is a React rendering capability that allows rendering work to be interruptible and prioritized.

Instead of treating every update as one uninterrupted blocking task, React can work on lower-priority rendering while keeping more urgent interactions responsive.

For example, typing in an input should remain responsive even if updating a large result list is expensive.

Features such as transitions and deferred values are related to this model.

The important point is that concurrency is about scheduling and interruptibility of rendering work, not simply creating more JavaScript threads.`,
    explanation: `Concurrent rendering is a React rendering capability that allows rendering work to be interruptible and prioritized.

Instead of treating every update as one uninterrupted blocking task, React can work on lower-priority rendering while keeping more urgent interactions responsive.

For example, typing in an input should remain responsive even if updating a large result list is expensive.

Features such as transitions and deferred values are related to this model.

The important point is that concurrency is about scheduling and interruptibility of rendering work, not simply creating more JavaScript threads.`,
    explanationHindi: `Concurrent rendering React ki rendering capability hai jisme rendering work interruptible aur prioritizable ho sakta hai.

Agar large list render karna expensive hai aur user typing kar raha hai, React urgent interaction ko responsive rakhne ke liye lower-priority work ko manage kar sakta hai.

\`useTransition\` aur \`useDeferredValue\` isi model se related features hain.

Important point: concurrent rendering ka matlab extra JavaScript threads create karna nahi hai; ye rendering work ko schedule aur prioritize karne ke about hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 2,
  },
  {
    technologySlug: 'react',
    topicSlug: 'context-api',
    question: `58. How do you identify unnecessary re-renders in a React application?`,
    slug: '58-how-do-you-identify-unnecessary-re-renders-in-a-react-application',
    answer: `I would first measure the application instead of adding memoization blindly.

Useful tools include React DevTools Profiler and browser performance tools.

I would check:

- Which components render frequently.
- How long renders take.
- Which props or state changes trigger the render.
- Whether expensive calculations repeat unnecessarily.
- Whether large lists are causing expensive work.

After finding the bottleneck, I can apply an appropriate optimization such as component splitting, memoization, virtualization, or better state placement.`,
    explanation: `I would first measure the application instead of adding memoization blindly.

Useful tools include React DevTools Profiler and browser performance tools.

I would check:

- Which components render frequently.
- How long renders take.
- Which props or state changes trigger the render.
- Whether expensive calculations repeat unnecessarily.
- Whether large lists are causing expensive work.

After finding the bottleneck, I can apply an appropriate optimization such as component splitting, memoization, virtualization, or better state placement.`,
    explanationHindi: `Main unnecessary re-renders identify karne ke liye pehle performance measure karoonga, directly har jagah memoization nahi lagaoonga.

React DevTools Profiler useful hai.

Check karunga:

- Kaunse components frequently render ho rahe hain.
- Render mein kitna time lag raha hai.
- Kaunsa state/prop change render cause kar raha hai.
- Kya expensive calculation baar-baar ho rahi hai.
- Kya large list expensive work kar rahi hai.

Problem identify hone ke baad appropriate optimization apply karunga.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 3,
  },
  {
    technologySlug: 'react',
    topicSlug: 'context-api',
    question: `59. How do you optimize a slow React component?`,
    slug: '59-how-do-you-optimize-a-slow-react-component',
    answer: `First, I would profile the component to find the actual bottleneck.

Depending on the problem, I might:

- Split large components.
- Move state closer to where it is needed.
- Use \`React.memo\` when it prevents meaningful repeated work.
- Use \`useMemo\` for genuinely expensive calculations.
- Use \`useCallback\` when stable function identity matters.
- Virtualize large lists.
- Lazy-load expensive screens.
- Reduce unnecessary effects and work.

I would measure again after the change to verify that it actually improved performance.`,
    explanation: `First, I would profile the component to find the actual bottleneck.

Depending on the problem, I might:

- Split large components.
- Move state closer to where it is needed.
- Use \`React.memo\` when it prevents meaningful repeated work.
- Use \`useMemo\` for genuinely expensive calculations.
- Use \`useCallback\` when stable function identity matters.
- Virtualize large lists.
- Lazy-load expensive screens.
- Reduce unnecessary effects and work.

I would measure again after the change to verify that it actually improved performance.`,
    explanationHindi: `Slow component ko optimize karne se pehle actual bottleneck identify karna chahiye.

Problem ke according:

- Large component ko split kar sakte hain.
- State ko required location ke closer move kar sakte hain.
- Useful case mein \`React.memo\` use kar sakte hain.
- Expensive calculation ke liye \`useMemo\`.
- Stable callback reference ki actual need ho to \`useCallback\`.
- Large lists ke liye virtualization.
- Heavy screens ke liye lazy loading.
- Unnecessary effects/work reduce karna.

Optimization ke baad dobara measure karna important hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 4,
  },
  {
    technologySlug: 'react',
    topicSlug: 'context-api',
    question: `60. How do you use React DevTools Profiler to find performance problems?`,
    slug: '60-how-do-you-use-react-devtools-profiler-to-find-performance-problems',
    answer: `React DevTools Profiler records component rendering so we can inspect which components rendered and how much time they took.

A typical process is:

1. Open React DevTools.
2. Record an interaction.
3. Perform the slow action.
4. Inspect the components that rendered.
5. Look at render durations and repeated renders.
6. Identify the likely bottleneck.
7. Apply a targeted optimization.
8. Profile again.

This gives evidence instead of guessing which component is slow.`,
    explanation: `React DevTools Profiler records component rendering so we can inspect which components rendered and how much time they took.

A typical process is:

1. Open React DevTools.
2. Record an interaction.
3. Perform the slow action.
4. Inspect the components that rendered.
5. Look at render durations and repeated renders.
6. Identify the likely bottleneck.
7. Apply a targeted optimization.
8. Profile again.

This gives evidence instead of guessing which component is slow.`,
    explanationHindi: `React DevTools Profiler component rendering ko record karta hai aur batata hai ki kaunse components render hue aur kitna time laga.

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

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 5,
  },
  {
    technologySlug: 'react',
    topicSlug: 'context-api',
    question: `61. When does \`React.memo\` actually improve performance?`,
    slug: '61-when-does-reactmemo-actually-improve-performance',
    answer: `\`React.memo\` can improve performance when a component renders frequently, its rendering is meaningfully expensive, and its props often remain unchanged.

\`\`\`jsx
const UserCard = React.memo(function UserCard({ user }) {
  return <div>{user.name}</div>;
});
\`\`\`

If the parent renders but \`user\` is the same according to the memo comparison, React can skip rendering \`UserCard\`.

It may provide little or no benefit when props change every time, the component is already very cheap, or memoization itself adds unnecessary complexity.`,
    explanation: `\`React.memo\` can improve performance when a component renders frequently, its rendering is meaningfully expensive, and its props often remain unchanged.

\`\`\`jsx
const UserCard = React.memo(function UserCard({ user }) {
  return <div>{user.name}</div>;
});
\`\`\`

If the parent renders but \`user\` is the same according to the memo comparison, React can skip rendering \`UserCard\`.

It may provide little or no benefit when props change every time, the component is already very cheap, or memoization itself adds unnecessary complexity.`,
    explanationHindi: `\`React.memo\` tab useful hota hai jab component frequently render ho raha ho, rendering meaningful work karti ho aur props often same rehte hon.

\`\`\`jsx
const UserCard = React.memo(function UserCard({ user }) {
  return <div>{user.name}</div>;
});
\`\`\`

Agar parent render ho aur \`user\` prop same ho, React child render skip kar sakta hai.

Agar props har baar change hote hain ya component bahut simple hai, to \`React.memo\` ka benefit kam ho sakta hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 6,
  },
  {
    technologySlug: 'react',
    topicSlug: 'context-api',
    question: `62. When can \`useMemo\` make performance worse instead of better?`,
    slug: '62-when-can-usememo-make-performance-worse-instead-of-better',
    answer: `\`useMemo\` itself has a cost because React has to store the memoized value and compare dependencies.

It can be unnecessary when the calculation is already cheap.

For example:

\`\`\`jsx
const fullName = useMemo(
  () => \`\${firstName} \${lastName}\`,
  [firstName, lastName]
);
\`\`\`

For such a simple calculation, memoization may add complexity without meaningful benefit.

I would use \`useMemo\` when profiling or the nature of the calculation shows that avoiding repeated expensive work is useful.`,
    explanation: `\`useMemo\` itself has a cost because React has to store the memoized value and compare dependencies.

It can be unnecessary when the calculation is already cheap.

For example:

\`\`\`jsx
const fullName = useMemo(
  () => \`\${firstName} \${lastName}\`,
  [firstName, lastName]
);
\`\`\`

For such a simple calculation, memoization may add complexity without meaningful benefit.

I would use \`useMemo\` when profiling or the nature of the calculation shows that avoiding repeated expensive work is useful.`,
    explanationHindi: `\`useMemo\` ka bhi overhead hota hai, kyunki React memoized value ko store karta hai aur dependencies compare karta hai.

Agar calculation already very cheap hai, to \`useMemo\` unnecessary ho sakta hai.

\`\`\`jsx
const fullName = useMemo(
  () => \`\${firstName} \${lastName}\`,
  [firstName, lastName]
);
\`\`\`

Simple calculation ke liye ye extra complexity add kar sakta hai.

Isliye \`useMemo\` actual performance need ke according use karna chahiye.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 7,
  },
  {
    technologySlug: 'react',
    topicSlug: 'context-api',
    question: `63. When can \`useCallback\` make performance worse instead of better?`,
    slug: '63-when-can-usecallback-make-performance-worse-instead-of-better',
    answer: `\`useCallback\` also has a cost because React stores the function and compares its dependencies.

If the function is cheap and its identity does not matter, \`useCallback\` may add complexity without helping.

For example, wrapping every event handler in \`useCallback\` is not automatically a performance optimization.

It becomes more useful when stable function identity helps a memoized child or when the function is a relevant dependency.

The correct approach is to measure and use it where it provides value.`,
    explanation: `\`useCallback\` also has a cost because React stores the function and compares its dependencies.

If the function is cheap and its identity does not matter, \`useCallback\` may add complexity without helping.

For example, wrapping every event handler in \`useCallback\` is not automatically a performance optimization.

It becomes more useful when stable function identity helps a memoized child or when the function is a relevant dependency.

The correct approach is to measure and use it where it provides value.`,
    explanationHindi: `\`useCallback\` bhi free optimization nahi hai. React function reference aur dependencies ko manage karta hai.

Agar function simple hai aur uski identity ka koi importance nahi hai, to \`useCallback\` unnecessary complexity add kar sakta hai.

Har event handler ko automatically \`useCallback\` mein wrap karna zaroori nahi.

Ye especially useful ho sakta hai jab memoized child ko stable callback dena ho ya function dependency ka important part ho.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 8,
  },
  {
    technologySlug: 'react',
    topicSlug: 'context-api',
    question: `64. How would you optimize a list containing thousands of items?`,
    slug: '64-how-would-you-optimize-a-list-containing-thousands-of-items',
    answer: `For a very large list, rendering thousands of DOM elements at once can be expensive.

I would consider:

- List virtualization/windowing.
- Pagination or infinite scrolling.
- Memoizing expensive list items when appropriate.
- Stable keys.
- Avoiding unnecessary parent renders.
- Keeping item rendering lightweight.
- Loading data in manageable chunks.

For example, virtualization renders only the rows currently visible in the viewport instead of creating thousands of DOM nodes at once.`,
    explanation: `For a very large list, rendering thousands of DOM elements at once can be expensive.

I would consider:

- List virtualization/windowing.
- Pagination or infinite scrolling.
- Memoizing expensive list items when appropriate.
- Stable keys.
- Avoiding unnecessary parent renders.
- Keeping item rendering lightweight.
- Loading data in manageable chunks.

For example, virtualization renders only the rows currently visible in the viewport instead of creating thousands of DOM nodes at once.`,
    explanationHindi: `Thousands of items ki list ek saath render karna expensive ho sakta hai.

Main consider karunga:

- List virtualization/windowing
- Pagination ya infinite scrolling
- Appropriate item memoization
- Stable keys
- Unnecessary parent renders avoid karna
- Item component ko lightweight rakhna
- Data ko manageable chunks mein load karna

Virtualization mein generally sirf visible rows render hoti hain, isliye DOM work reduce hota hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 9,
  },
  {
    technologySlug: 'react',
    topicSlug: 'context-api',
    question: `65. What is list virtualization, and when would you use it?`,
    slug: '65-what-is-list-virtualization-and-when-would-you-use-it',
    answer: `List virtualization means rendering only the items currently visible, plus a small buffer, instead of rendering the entire large list.

For example, if a list contains 10,000 rows but only 20 are visible, virtualization can keep only the relevant rows rendered.

It is useful for:

- Large tables
- Large chat histories
- Product lists
- Logs
- Long feeds

Libraries such as \`react-window\` and other virtualization solutions can help implement this pattern.`,
    explanation: `List virtualization means rendering only the items currently visible, plus a small buffer, instead of rendering the entire large list.

For example, if a list contains 10,000 rows but only 20 are visible, virtualization can keep only the relevant rows rendered.

It is useful for:

- Large tables
- Large chat histories
- Product lists
- Logs
- Long feeds

Libraries such as \`react-window\` and other virtualization solutions can help implement this pattern.`,
    explanationHindi: `List virtualization ka matlab hai large list ke saare items render karne ke bajay currently visible items aur small buffer ko render karna.

Agar list mein 10,000 rows hain aur screen par sirf 20 visible hain, to virtualization relevant rows ko hi render kar sakti hai.

Ye large tables, chat history, product lists, logs aur feeds mein useful hota hai.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 10,
  },
  {
    technologySlug: 'react',
    topicSlug: 'context-api',
    question: `66. How would you improve the initial loading performance of a React application?`,
    slug: '66-how-would-you-improve-the-initial-loading-performance-of-a-react-application',
    answer: `I would first measure the initial load and then optimize the largest contributors.

Common techniques include:

- Code splitting.
- Route-level lazy loading.
- \`React.lazy()\` and \`Suspense\`.
- Reducing the JavaScript bundle.
- Removing unused dependencies.
- Optimizing images and fonts.
- Caching static assets.
- Server-side rendering or static generation when appropriate.
- Avoiding unnecessary JavaScript on the initial screen.

The goal is to deliver the content needed for the first interaction quickly and load less-critical code later.`,
    explanation: `I would first measure the initial load and then optimize the largest contributors.

Common techniques include:

- Code splitting.
- Route-level lazy loading.
- \`React.lazy()\` and \`Suspense\`.
- Reducing the JavaScript bundle.
- Removing unused dependencies.
- Optimizing images and fonts.
- Caching static assets.
- Server-side rendering or static generation when appropriate.
- Avoiding unnecessary JavaScript on the initial screen.

The goal is to deliver the content needed for the first interaction quickly and load less-critical code later.`,
    explanationHindi: `Initial loading improve karne ke liye pehle measure karunga ki bundle aur loading mein sabse bada contribution kis cheez ka hai.

Common techniques:

- Code splitting
- Route-level lazy loading
- \`React.lazy()\` aur \`Suspense\`
- JavaScript bundle reduce karna
- Unused dependencies remove karna
- Images/fonts optimize karna
- Static assets cache karna
- Appropriate case mein SSR ya static generation
- Initial screen par unnecessary JavaScript avoid karna

Goal hai important UI ko jaldi available karna aur non-critical code ko later load karna.

---`,
    difficulty: 'medium',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 11,
  },
  {
    technologySlug: 'react',
    topicSlug: 'rendering',
    question: `67. When should you use local state, Context API, or Redux?`,
    slug: '67-when-should-you-use-local-state-context-api-or-redux',
    answer: `I choose based on the scope and complexity of the state.

- **Local state:** when only one component or a small nearby component tree needs it.
- **Context:** when a value needs to be shared across a subtree and the update requirements are relatively simple.
- **Redux:** when application state is shared widely and has more complex update flows, debugging, middleware, or structured state requirements.

I would not introduce Redux just because an application has multiple components. The state should be moved to the simplest solution that satisfies the requirements.`,
    explanation: `I choose based on the scope and complexity of the state.

- **Local state:** when only one component or a small nearby component tree needs it.
- **Context:** when a value needs to be shared across a subtree and the update requirements are relatively simple.
- **Redux:** when application state is shared widely and has more complex update flows, debugging, middleware, or structured state requirements.

I would not introduce Redux just because an application has multiple components. The state should be moved to the simplest solution that satisfies the requirements.`,
    explanationHindi: `State solution choose karte time scope aur complexity dekhta hoon.

- **Local state:** jab data sirf ek component ya nearby components ko chahiye.
- **Context:** jab value ek subtree mein share karni ho aur state requirements simple hon.
- **Redux:** jab shared application state large/complex ho aur structured updates, middleware ya debugging ki need ho.

Sirf multiple components hone ki wajah se Redux introduce karna zaroori nahi hai. Simple requirement ke liye simple solution better hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 1,
  },
  {
    technologySlug: 'react',
    topicSlug: 'rendering',
    question: `68. What is Context API, and how does it work?`,
    slug: '68-what-is-context-api-and-how-does-it-work',
    answer: `Context lets us make a value available to components in a subtree without passing it manually through every level of props.

Basic flow:

\`createContext → Provider → useContext\`

Example:

\`\`\`jsx
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
\`\`\`

Context is useful for values such as theme, locale, or authenticated user information.`,
    explanation: `Context lets us make a value available to components in a subtree without passing it manually through every level of props.

Basic flow:

\`createContext → Provider → useContext\`

Example:

\`\`\`jsx
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
\`\`\`

Context is useful for values such as theme, locale, or authenticated user information.`,
    explanationHindi: `Context API kisi value ko component tree ke ek subtree mein available karne deta hai bina har level par props pass kiye.

Basic flow:

\`createContext → Provider → useContext\`

Example:

\`\`\`jsx
const ThemeContext = createContext("light");

<ThemeContext.Provider value="dark">
  <Page />
</ThemeContext.Provider>
\`\`\`

Child component \`useContext(ThemeContext)\` se value read kar sakta hai.

Theme, locale aur user information jaise shared values ke liye useful hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 2,
  },
  {
    technologySlug: 'react',
    topicSlug: 'rendering',
    question: `69. Why isn't Context always a replacement for Redux?`,
    slug: '69-why-isnt-context-always-a-replacement-for-redux',
    answer: `Context and Redux solve related but different problems.

Context mainly provides a way to pass shared values through a component tree. It does not by itself provide the full state-management architecture that Redux offers.

Redux can provide:

- Structured action-based updates.
- Centralized state.
- Middleware.
- Redux DevTools.
- Selectors.
- A predictable update model.

Context can still be the better choice for simple shared values such as theme or locale.

The decision depends on the application's state complexity.`,
    explanation: `Context and Redux solve related but different problems.

Context mainly provides a way to pass shared values through a component tree. It does not by itself provide the full state-management architecture that Redux offers.

Redux can provide:

- Structured action-based updates.
- Centralized state.
- Middleware.
- Redux DevTools.
- Selectors.
- A predictable update model.

Context can still be the better choice for simple shared values such as theme or locale.

The decision depends on the application's state complexity.`,
    explanationHindi: `Context aur Redux related problems solve karte hain, lekin exactly same tool nahi hain.

Context mainly shared value ko component tree mein provide karne ka mechanism hai. Redux structured state management ke liye additional architecture deta hai.

Redux mein actions, centralized state, middleware, DevTools aur selectors jaise features milte hain.

Simple theme ya locale ke liye Context enough ho sakta hai. Complex application state ke liye Redux useful ho sakta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 3,
  },
  {
    technologySlug: 'react',
    topicSlug: 'rendering',
    question: `70. What is Redux and why would you use it with React?`,
    slug: '70-what-is-redux-and-why-would-you-use-it-with-react',
    answer: `Redux is a predictable state-management library commonly used to manage shared application state.

The basic idea is to keep state in a store and update it through actions and reducers.

A simplified flow is:

\`UI → dispatch(action) → reducer → store updates → UI\`

Redux can be useful when many parts of an application need the same state and the update logic is complex enough to benefit from a structured architecture.

In modern Redux applications, Redux Toolkit is the recommended way to write Redux logic.`,
    explanation: `Redux is a predictable state-management library commonly used to manage shared application state.

The basic idea is to keep state in a store and update it through actions and reducers.

A simplified flow is:

\`UI → dispatch(action) → reducer → store updates → UI\`

Redux can be useful when many parts of an application need the same state and the update logic is complex enough to benefit from a structured architecture.

In modern Redux applications, Redux Toolkit is the recommended way to write Redux logic.`,
    explanationHindi: `Redux ek predictable state-management library hai jo shared application state manage karne ke liye use hoti hai.

Basic flow:

\`UI → dispatch(action) → reducer → store update → UI\`

Jab application ke multiple parts ko same state chahiye aur update logic complex ho, tab Redux useful ho sakta hai.

Modern Redux applications mein Redux Toolkit commonly recommended approach hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 4,
  },
  {
    technologySlug: 'react',
    topicSlug: 'rendering',
    question: `71. Explain the Redux data flow: Action → Dispatch → Middleware → Reducer → Store → UI.`,
    slug: '71-explain-the-redux-data-flow-action-dispatch-middleware-reducer-store-ui',
    answer: `The Redux flow can be explained step by step:

1. The user interacts with the UI.
2. The application dispatches an action.
3. Middleware can inspect or process the action.
4. The reducer calculates the next state.
5. The store updates with the new state.
6. Components subscribed to the relevant state update and render the new UI.

Example:

\`\`\`js
dispatch({ type: "cart/add", payload: product });
\`\`\`

The reducer receives the action and returns the next state.`,
    explanation: `The Redux flow can be explained step by step:

1. The user interacts with the UI.
2. The application dispatches an action.
3. Middleware can inspect or process the action.
4. The reducer calculates the next state.
5. The store updates with the new state.
6. Components subscribed to the relevant state update and render the new UI.

Example:

\`\`\`js
dispatch({ type: "cart/add", payload: product });
\`\`\`

The reducer receives the action and returns the next state.`,
    explanationHindi: `Redux flow ko step-by-step explain kar sakte hain:

1. User UI ke saath interact karta hai.
2. Application action dispatch karti hai.
3. Middleware action ko process/inspect kar sakta hai.
4. Reducer next state calculate karta hai.
5. Store new state rakhta hai.
6. Relevant components updated state ke according UI render karte hain.

Example:

\`\`\`js
dispatch({ type: "cart/add", payload: product });
\`\`\`

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 5,
  },
  {
    technologySlug: 'react',
    topicSlug: 'rendering',
    question: `72. What are Redux Toolkit, slices, reducers, actions, and selectors?`,
    slug: '72-what-are-redux-toolkit-slices-reducers-actions-and-selectors',
    answer: `**Redux Toolkit (RTK)** is the recommended way to write modern Redux logic.

- **Slice:** groups related state, reducers, and generated actions.
- **Reducer:** describes how state changes for an action.
- **Action:** describes what happened.
- **Selector:** reads or derives specific data from the Redux state.

Example:

\`\`\`js
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1;
    }
  }
});
\`\`\`

RTK uses Immer internally, so this reducer syntax is translated into immutable state updates.`,
    explanation: `**Redux Toolkit (RTK)** is the recommended way to write modern Redux logic.

- **Slice:** groups related state, reducers, and generated actions.
- **Reducer:** describes how state changes for an action.
- **Action:** describes what happened.
- **Selector:** reads or derives specific data from the Redux state.

Example:

\`\`\`js
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1;
    }
  }
});
\`\`\`

RTK uses Immer internally, so this reducer syntax is translated into immutable state updates.`,
    explanationHindi: `**Redux Toolkit (RTK)** modern Redux logic likhne ka recommended approach hai.

- **Slice:** related state, reducers aur actions ko group karta hai.
- **Reducer:** batata hai state kaise change hogi.
- **Action:** batata hai kya event/action hua.
- **Selector:** Redux state se required data read ya derive karta hai.

Example:

\`\`\`js
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1;
    }
  }
});
\`\`\`

RTK internally Immer use karta hai, isliye ye syntax immutable update mein convert hota hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 6,
  },
  {
    technologySlug: 'react',
    topicSlug: 'rendering',
    question: `73. What is Redux Thunk, and how do you handle asynchronous API calls with Redux?`,
    slug: '73-what-is-redux-thunk-and-how-do-you-handle-asynchronous-api-calls-with-redux',
    answer: `Redux Thunk is middleware that allows an action creator to return a function instead of only a plain action object.

That function can perform asynchronous work and dispatch actions such as loading, success, and failure.

Typical flow:

\`dispatch thunk → API request → pending state → success/failure action → reducer updates store\`

Example:

\`\`\`js
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
\`\`\`

In modern Redux, Redux Toolkit's async patterns such as \`createAsyncThunk\` can simplify this approach.`,
    explanation: `Redux Thunk is middleware that allows an action creator to return a function instead of only a plain action object.

That function can perform asynchronous work and dispatch actions such as loading, success, and failure.

Typical flow:

\`dispatch thunk → API request → pending state → success/failure action → reducer updates store\`

Example:

\`\`\`js
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
\`\`\`

In modern Redux, Redux Toolkit's async patterns such as \`createAsyncThunk\` can simplify this approach.`,
    explanationHindi: `Redux Thunk middleware action creator ko function return karne deta hai.

Ye function asynchronous API call kar sakta hai aur loading, success aur failure actions dispatch kar sakta hai.

Flow:

\`dispatch thunk → API request → loading → success/failure → reducer → store update\`

Example:

\`\`\`js
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
\`\`\`

Modern Redux mein \`createAsyncThunk\` is pattern ko simpler bana sakta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 7,
  },
  {
    technologySlug: 'react',
    topicSlug: 'rendering',
    question: `74. How does React Router work, and how do you create protected/private routes?`,
    slug: '74-how-does-react-router-work-and-how-do-you-create-protectedprivate-routes',
    answer: `React Router maps URL paths to React UI and lets the application navigate without a full browser page reload.

A protected route checks authentication before rendering the protected page.

Conceptually:

\`\`\`jsx
function ProtectedRoute({ children }) {
  const isAuthenticated = checkAuth();

  return isAuthenticated
    ? children
    : <Navigate to="/login" replace />;
}
\`\`\`

Then protected pages can be wrapped with this logic.

In a real application, authentication should also be enforced by the backend/API. A frontend route guard should not be treated as the security boundary.`,
    explanation: `React Router maps URL paths to React UI and lets the application navigate without a full browser page reload.

A protected route checks authentication before rendering the protected page.

Conceptually:

\`\`\`jsx
function ProtectedRoute({ children }) {
  const isAuthenticated = checkAuth();

  return isAuthenticated
    ? children
    : <Navigate to="/login" replace />;
}
\`\`\`

Then protected pages can be wrapped with this logic.

In a real application, authentication should also be enforced by the backend/API. A frontend route guard should not be treated as the security boundary.`,
    explanationHindi: `React Router URL paths ko React UI ke saath map karta hai aur SPA navigation provide karta hai.

Protected route mein pehle check karte hain ki user authenticated hai ya nahi.

\`\`\`jsx
function ProtectedRoute({ children }) {
  const isAuthenticated = checkAuth();

  return isAuthenticated
    ? children
    : <Navigate to="/login" replace />;
}
\`\`\`

Agar authenticated hai to page show hoga, warna login par redirect kar sakte hain.

Important: frontend route guard security boundary nahi hai; backend ko bhi authentication/authorization enforce karna chahiye.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 8,
  },
  {
    technologySlug: 'react',
    topicSlug: 'rendering',
    question: `75. How do you handle API calls in React, including loading, success, error, and empty states?`,
    slug: '75-how-do-you-handle-api-calls-in-react-including-loading-success-error-and-empty-states',
    answer: `I normally model an API request with explicit UI states:

- Loading
- Success with data
- Success with no data
- Error

For example:

\`\`\`jsx
if (loading) return <Spinner />;
if (error) return <ErrorMessage />;
if (!data?.length) return <EmptyState />;

return <UserList users={data} />;
\`\`\`

The actual request can be implemented with \`fetch\`, Axios, a Custom Hook, or a server-state library depending on the project.

For larger applications, tools such as TanStack Query can manage caching, retries, refetching, and server-state synchronization.`,
    explanation: `I normally model an API request with explicit UI states:

- Loading
- Success with data
- Success with no data
- Error

For example:

\`\`\`jsx
if (loading) return <Spinner />;
if (error) return <ErrorMessage />;
if (!data?.length) return <EmptyState />;

return <UserList users={data} />;
\`\`\`

The actual request can be implemented with \`fetch\`, Axios, a Custom Hook, or a server-state library depending on the project.

For larger applications, tools such as TanStack Query can manage caching, retries, refetching, and server-state synchronization.`,
    explanationHindi: `API call ko normally multiple UI states mein handle karna chahiye:

- Loading
- Success with data
- Empty state
- Error

Example:

\`\`\`jsx
if (loading) return <Spinner />;
if (error) return <ErrorMessage />;
if (!data?.length) return <EmptyState />;

return <UserList users={data} />;
\`\`\`

Request \`fetch\`, Axios, Custom Hook ya server-state library se handle kar sakte hain.

Large application mein TanStack Query jaise tools caching, refetching aur server-state management ko simplify kar sakte hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 9,
  },
  {
    technologySlug: 'react',
    topicSlug: 'rendering',
    question: `76. What are Error Boundaries, and what errors can they catch?`,
    slug: '76-what-are-error-boundaries-and-what-errors-can-they-catch',
    answer: `Error Boundaries are React components that catch certain rendering errors in their child component tree and show fallback UI instead of allowing the entire UI section to fail.

They are useful for isolating failures in parts of a React application.

A traditional Error Boundary is implemented using class component lifecycle APIs such as \`getDerivedStateFromError\` and \`componentDidCatch\`.

They generally catch errors during rendering and related lifecycle work in the child tree, but they do not catch every possible error, such as errors from ordinary event handlers or arbitrary asynchronous callbacks.

For event-handler errors, handle the error directly in the event logic.`,
    explanation: `Error Boundaries are React components that catch certain rendering errors in their child component tree and show fallback UI instead of allowing the entire UI section to fail.

They are useful for isolating failures in parts of a React application.

A traditional Error Boundary is implemented using class component lifecycle APIs such as \`getDerivedStateFromError\` and \`componentDidCatch\`.

They generally catch errors during rendering and related lifecycle work in the child tree, but they do not catch every possible error, such as errors from ordinary event handlers or arbitrary asynchronous callbacks.

For event-handler errors, handle the error directly in the event logic.`,
    explanationHindi: `Error Boundary React application ke child component tree mein certain rendering errors ko catch karke fallback UI show karne mein help karta hai.

Iska benefit ye hai ki ek component ka rendering error poori UI ko fail karne ke bajay ek specific section mein isolate kiya ja sakta hai.

Traditional Error Boundary class component ke lifecycle methods jaise \`getDerivedStateFromError\` aur \`componentDidCatch\` se banaya jata hai.

Ye har type ka error catch nahi karta. Event handler ya arbitrary async callback ke errors ko usually directly handle karna padta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 10,
  },
  {
    technologySlug: 'react',
    topicSlug: 'rendering',
    question: `77. How do you implement lazy loading and code splitting using \`React.lazy()\` and \`Suspense\`?`,
    slug: '77-how-do-you-implement-lazy-loading-and-code-splitting-using-reactlazy-and-suspense',
    answer: `Lazy loading means loading a component's code only when it is needed.

With \`React.lazy()\`, a component can be dynamically imported:

\`\`\`jsx
const Dashboard = React.lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

The bundler can create a separate chunk for the lazy-loaded module. The browser downloads that code when the component is needed.

This is especially useful for route-level code splitting and large features.`,
    explanation: `Lazy loading means loading a component's code only when it is needed.

With \`React.lazy()\`, a component can be dynamically imported:

\`\`\`jsx
const Dashboard = React.lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}
\`\`\`

The bundler can create a separate chunk for the lazy-loaded module. The browser downloads that code when the component is needed.

This is especially useful for route-level code splitting and large features.`,
    explanationHindi: `Lazy loading ka matlab hai component ka code tab load karna jab actually uski need ho.

\`React.lazy()\` aur \`Suspense\` ka example:

\`\`\`jsx
const Dashboard = React.lazy(() => import("./Dashboard"));

<Suspense fallback={<p>Loading...</p>}>
  <Dashboard />
</Suspense>
\`\`\`

Bundler lazy component ke liye separate chunk bana sakta hai aur required time par browser us code ko load karta hai.

Ye route-level code splitting aur large features ke liye useful hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 11,
  },
  {
    technologySlug: 'react',
    topicSlug: 'performance',
    question: `78. How do you test React components using React Testing Library?`,
    slug: '78-how-do-you-test-react-components-using-react-testing-library',
    answer: `React Testing Library focuses on testing components from the user's perspective.

A typical test does four things:

1. Render the component.
2. Find elements the user can interact with or see.
3. Perform an interaction.
4. Assert the expected result.

Example:

\`\`\`jsx
render(<Counter />);

await user.click(screen.getByRole("button", { name: /increment/i }));

expect(screen.getByText("1")).toBeInTheDocument();
\`\`\`

The goal is to test behavior rather than internal implementation details such as private state or component methods.`,
    explanation: `React Testing Library focuses on testing components from the user's perspective.

A typical test does four things:

1. Render the component.
2. Find elements the user can interact with or see.
3. Perform an interaction.
4. Assert the expected result.

Example:

\`\`\`jsx
render(<Counter />);

await user.click(screen.getByRole("button", { name: /increment/i }));

expect(screen.getByText("1")).toBeInTheDocument();
\`\`\`

The goal is to test behavior rather than internal implementation details such as private state or component methods.`,
    explanationHindi: `React Testing Library component ko user ke point of view se test karne par focus karti hai.

Typical process:

1. Component render karo.
2. Visible/interactable element find karo.
3. User interaction perform karo.
4. Expected result assert karo.

Example:

\`\`\`jsx
render(<Counter />);

await user.click(
  screen.getByRole("button", { name: /increment/i })
);

expect(screen.getByText("1")).toBeInTheDocument();
\`\`\`

Main focus user-visible behavior par hota hai, internal state ya private methods par nahi.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 1,
  },
  {
    technologySlug: 'react',
    topicSlug: 'performance',
    question: `79. How do you use TypeScript with React, including typing props, state, events, and components?`,
    slug: '79-how-do-you-use-typescript-with-react-including-typing-props-state-events-and-components',
    answer: `TypeScript adds static typing to React code.

For props:

\`\`\`tsx
type UserProps = {
  name: string;
  age: number;
};

function User({ name, age }: UserProps) {
  return <p>{name} - {age}</p>;
}
\`\`\`

For state:

\`\`\`tsx
const [count, setCount] = useState<number>(0);
\`\`\`

For events:

\`\`\`tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value);
};
\`\`\`

TypeScript helps catch incorrect values and API usage during development and makes component contracts clearer.`,
    explanation: `TypeScript adds static typing to React code.

For props:

\`\`\`tsx
type UserProps = {
  name: string;
  age: number;
};

function User({ name, age }: UserProps) {
  return <p>{name} - {age}</p>;
}
\`\`\`

For state:

\`\`\`tsx
const [count, setCount] = useState<number>(0);
\`\`\`

For events:

\`\`\`tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value);
};
\`\`\`

TypeScript helps catch incorrect values and API usage during development and makes component contracts clearer.`,
    explanationHindi: `TypeScript React code mein static typing provide karta hai.

Props ko type kar sakte hain:

\`\`\`tsx
type UserProps = {
  name: string;
  age: number;
};

function User({ name, age }: UserProps) {
  return <p>{name} - {age}</p>;
}
\`\`\`

State:

\`\`\`tsx
const [count, setCount] = useState<number>(0);
\`\`\`

Event:

\`\`\`tsx
const handleChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  setName(e.target.value);
};
\`\`\`

Isse incorrect data types development ke time detect karna aur component contracts clear rakhna easier hota hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 2,
  },
  {
    technologySlug: 'react',
    topicSlug: 'performance',
    question: `80. What important modern React features should you know in React 19, such as Actions, \`use\`, ref-as-prop, and Server Components?`,
    slug: '80-what-important-modern-react-features-should-you-know-in-react-19-such-as-actions-use-ref-as-prop-and-server-components',
    answer: `For a modern React interview, I would know the purpose of these React 19-era concepts:

- **Actions:** help organize async operations and form-related state updates, including pending and error handling patterns.
- **\`use\`:** lets components read certain resources such as Promises and Context during rendering, with Suspense handling for supported async cases.
- **Ref as a prop:** in modern React, function components can receive a \`ref\` prop directly, reducing the need for the older \`forwardRef\` pattern in cases supported by the new API.
- **Server Components:** allow supported frameworks to render components on the server and keep some components out of the client JavaScript bundle.

In an interview, I would also explain that Server Components are framework-dependent in practical application development and are different from simply using server-side rendering.

The important thing is to understand when these features solve a real problem rather than memorizing their names.`,
    explanation: `For a modern React interview, I would know the purpose of these React 19-era concepts:

- **Actions:** help organize async operations and form-related state updates, including pending and error handling patterns.
- **\`use\`:** lets components read certain resources such as Promises and Context during rendering, with Suspense handling for supported async cases.
- **Ref as a prop:** in modern React, function components can receive a \`ref\` prop directly, reducing the need for the older \`forwardRef\` pattern in cases supported by the new API.
- **Server Components:** allow supported frameworks to render components on the server and keep some components out of the client JavaScript bundle.

In an interview, I would also explain that Server Components are framework-dependent in practical application development and are different from simply using server-side rendering.

The important thing is to understand when these features solve a real problem rather than memorizing their names.`,
    explanationHindi: `Modern React interview ke liye React 19 ke kuch important concepts samajhna useful hai:

- **Actions:** async operations aur form-related state updates ko organize karne mein help karte hain, including pending/error handling.
- **\`use\`:** supported resources jaise Promise aur Context ko read karne ke liye use ho sakta hai, aur async cases mein Suspense ke saath work kar sakta hai.
- **Ref as a prop:** modern React mein supported cases mein function component directly \`ref\` prop receive kar sakta hai.
- **Server Components:** supported frameworks mein kuch components ko server par render karne aur unka client JavaScript bundle mein unnecessary inclusion avoid karne mein help karte hain.

Interview mein ye bhi samajhna important hai ki Server Components framework ecosystem ke saath practical use mein aate hain aur ye simple SSR ke same nahi hain.

Sirf names yaad karne ke bajay ye samajhna chahiye ki feature kis problem ko solve karta hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 3,
  },
  {
    technologySlug: 'react',
    topicSlug: 'performance',
    question: `81. Your React app has 20,000 items to display in a list. How would you make it performant?`,
    slug: '81-your-react-app-has-20000-items-to-display-in-a-list-how-would-you-make-it-performant',
    answer: `I would not render all 20,000 items into the DOM at once.

My first choice would be **list virtualization/windowing**. It renders only the items currently visible in the viewport, plus a small buffer.

For example, if only 20–30 rows are visible, the application may keep only those rows in the DOM instead of creating 20,000 DOM nodes.

For very large data coming from an API, I would also combine virtualization with pagination or incremental loading so we do not download everything unnecessarily.

The approach would be:

\`Large dataset → Load data in chunks → Virtualize the visible rows → Memoize expensive rows if needed\`

This keeps the DOM small and improves scrolling performance.`,
    explanation: `I would not render all 20,000 items into the DOM at once.

My first choice would be **list virtualization/windowing**. It renders only the items currently visible in the viewport, plus a small buffer.

For example, if only 20–30 rows are visible, the application may keep only those rows in the DOM instead of creating 20,000 DOM nodes.

For very large data coming from an API, I would also combine virtualization with pagination or incremental loading so we do not download everything unnecessarily.

The approach would be:

\`Large dataset → Load data in chunks → Virtualize the visible rows → Memoize expensive rows if needed\`

This keeps the DOM small and improves scrolling performance.`,
    explanationHindi: `Agar React app mein 20,000 items show karne hain, to main saare 20,000 items ek saath DOM mein render nahi karunga.

Main **list virtualization** use karunga. Ismein sirf viewport mein visible items aur thode extra buffer items render hote hain.

Example: agar screen par 20–30 rows visible hain, to DOM mein 20,000 nodes banane ke bajay sirf required rows rakhi ja sakti hain.

Agar data API se aa raha hai, to virtualization ke saath pagination ya incremental loading bhi use karunga.

Flow:

\`Large data → Chunks mein load → Visible items virtualize → Zarurat par row memoize\`

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 4,
  },
  {
    technologySlug: 'react',
    topicSlug: 'performance',
    question: `82. You have 10,000 products and the user wants to search them while typing. The input becomes laggy. What would you do?`,
    slug: '82-you-have-10000-products-and-the-user-wants-to-search-them-while-typing-the-input-becomes-laggy-what-would-you-do',
    answer: `First I would identify whether the bottleneck is filtering, rendering, or API requests.

If filtering/rendering is expensive, I can keep the input state immediate and use \`useDeferredValue\` for the expensive result list.

\`\`\`jsx
const [query, setQuery] = useState("");
const deferredQuery = useDeferredValue(query);

const results = useMemo(
  () => products.filter(p => p.name.includes(deferredQuery)),
  [products, deferredQuery]
);
\`\`\`

If the search calls an API on every keystroke, I would use **debouncing** and cancel obsolete requests.

If the result list itself is huge, I would combine this with virtualization.

So the solution depends on where the actual bottleneck is.`,
    explanation: `First I would identify whether the bottleneck is filtering, rendering, or API requests.

If filtering/rendering is expensive, I can keep the input state immediate and use \`useDeferredValue\` for the expensive result list.

\`\`\`jsx
const [query, setQuery] = useState("");
const deferredQuery = useDeferredValue(query);

const results = useMemo(
  () => products.filter(p => p.name.includes(deferredQuery)),
  [products, deferredQuery]
);
\`\`\`

If the search calls an API on every keystroke, I would use **debouncing** and cancel obsolete requests.

If the result list itself is huge, I would combine this with virtualization.

So the solution depends on where the actual bottleneck is.`,
    explanationHindi: `Agar 10,000 products mein typing ke time search laggy ho raha hai, to pehle identify karunga ki problem filtering mein hai, rendering mein hai ya API calls mein.

Agar local filtering/rendering expensive hai, to input ko immediately update rakhkar \`useDeferredValue\` se expensive list ko defer kar sakte hain.

Agar har keystroke par API call ho rahi hai, to **debouncing** aur old request cancellation use karunga.

Agar results bhi bahut zyada hain, to virtualization bhi add karunga.

Important point: pehle bottleneck identify karo, phir correct solution choose karo.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 5,
  },
  {
    technologySlug: 'react',
    topicSlug: 'performance',
    question: `83. An API is being called on every keystroke in a search box. How would you optimize it?`,
    slug: '83-an-api-is-being-called-on-every-keystroke-in-a-search-box-how-would-you-optimize-it',
    answer: `I would debounce the API request so that it runs after the user stops typing for a short period.

For example, instead of making requests for:

\`r → re → rea → reac → react\`

I would wait until the user pauses and then request \`react\`.

Conceptually:

\`\`\`jsx
useEffect(() => {
  const timer = setTimeout(() => {
    fetchResults(query);
  }, 300);

  return () => clearTimeout(timer);
}, [query]);
\`\`\`

I would also cancel obsolete requests with \`AbortController\` when appropriate, so an old request does not waste resources or overwrite newer results.`,
    explanation: `I would debounce the API request so that it runs after the user stops typing for a short period.

For example, instead of making requests for:

\`r → re → rea → reac → react\`

I would wait until the user pauses and then request \`react\`.

Conceptually:

\`\`\`jsx
useEffect(() => {
  const timer = setTimeout(() => {
    fetchResults(query);
  }, 300);

  return () => clearTimeout(timer);
}, [query]);
\`\`\`

I would also cancel obsolete requests with \`AbortController\` when appropriate, so an old request does not waste resources or overwrite newer results.`,
    explanationHindi: `Search box mein har keystroke par API call ho rahi ho to main **debouncing** use karunga.

Instead of:

\`r → re → rea → reac → react\`

har step par API call karne ke, user ke typing pause karne ke baad request bhejunga.

\`\`\`jsx
useEffect(() => {
  const timer = setTimeout(() => {
    fetchResults(query);
  }, 300);

  return () => clearTimeout(timer);
}, [query]);
\`\`\`

Old requests ko \`AbortController\` se cancel bhi kar sakte hain taaki old response new result ko overwrite na kare.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 6,
  },
  {
    technologySlug: 'react',
    topicSlug: 'performance',
    question: `84. The user types quickly and sometimes an old API response replaces the latest search result. What is the problem and how do you fix it?`,
    slug: '84-the-user-types-quickly-and-sometimes-an-old-api-response-replaces-the-latest-search-result-what-is-the-problem-and-how-do-you-fix-it',
    answer: `This is a **race condition**.

For example:

\`Request A: "rea"\` → starts first  
\`Request B: "react"\` → starts later

If B finishes first and then A finishes later, A can incorrectly overwrite the UI with stale data.

I would cancel obsolete requests using \`AbortController\`, and I would also make sure that only the latest request is allowed to update the state.

The important point is that network completion order is not guaranteed to match request order.`,
    explanation: `This is a **race condition**.

For example:

\`Request A: "rea"\` → starts first  
\`Request B: "react"\` → starts later

If B finishes first and then A finishes later, A can incorrectly overwrite the UI with stale data.

I would cancel obsolete requests using \`AbortController\`, and I would also make sure that only the latest request is allowed to update the state.

The important point is that network completion order is not guaranteed to match request order.`,
    explanationHindi: `Ye **race condition** hai.

Example:

\`Request A: "rea"\` pehle start hui  
\`Request B: "react"\` baad mein start hui

Agar B pehle complete ho gayi aur A baad mein complete hui, to old A response latest result ko overwrite kar sakta hai.

Isko handle karne ke liye \`AbortController\` se old request cancel kar sakte hain aur latest request ke response ko hi state update karne dena chahiye.

Network response ka order request ke order jaisa hona guaranteed nahi hota.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 7,
  },
  {
    technologySlug: 'react',
    topicSlug: 'performance',
    question: `85. A component re-renders many times and the page becomes slow. How would you debug it?`,
    slug: '85-a-component-re-renders-many-times-and-the-page-becomes-slow-how-would-you-debug-it',
    answer: `I would not immediately add \`useMemo\` or \`React.memo\`.

First, I would reproduce the problem and use **React DevTools Profiler** to identify which components render frequently and how long those renders take.

Then I would check:

- Which state change is causing the render.
- Whether state is placed too high in the tree.
- Whether new object/array/function references are created unnecessarily.
- Whether expensive calculations run during every render.
- Whether a Context value changes too frequently.

After identifying the cause, I would apply the smallest suitable fix and profile again.`,
    explanation: `I would not immediately add \`useMemo\` or \`React.memo\`.

First, I would reproduce the problem and use **React DevTools Profiler** to identify which components render frequently and how long those renders take.

Then I would check:

- Which state change is causing the render.
- Whether state is placed too high in the tree.
- Whether new object/array/function references are created unnecessarily.
- Whether expensive calculations run during every render.
- Whether a Context value changes too frequently.

After identifying the cause, I would apply the smallest suitable fix and profile again.`,
    explanationHindi: `Agar component bahut baar re-render ho raha hai aur page slow hai, to main directly \`useMemo\` ya \`React.memo\` nahi lagaunga.

Pehle React DevTools Profiler se identify karunga ki kaunse components render ho rahe hain aur kitna time le rahe hain.

Check karunga:

- Kaunsa state change render cause kar raha hai.
- Kya state unnecessarily parent mein rakhi hai.
- Kya new object/array/function references baar-baar create ho rahe hain.
- Kya expensive calculation har render mein ho rahi hai.
- Kya Context frequently change ho raha hai.

Phir actual problem ke according smallest fix apply karke dobara profile karunga.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 8,
  },
  {
    technologySlug: 'react',
    topicSlug: 'performance',
    question: `86. A child component is wrapped in \`React.memo\`, but it still re-renders every time. Why?`,
    slug: '86-a-child-component-is-wrapped-in-reactmemo-but-it-still-re-renders-every-time-why',
    answer: `\`React.memo\` compares props, and if a prop gets a new reference on every parent render, the child can still render.

For example:

\`\`\`jsx
<Child style={{ color: "red" }} />
\`\`\`

The object is newly created on every render.

Similarly:

\`\`\`jsx
<Child onClick={() => doSomething()} />
\`\`\`

creates a new function reference.

If stable identity is actually needed, I can use \`useMemo\` for objects or \`useCallback\` for functions.

But I would first verify that this re-render is actually a performance problem.`,
    explanation: `\`React.memo\` compares props, and if a prop gets a new reference on every parent render, the child can still render.

For example:

\`\`\`jsx
<Child style={{ color: "red" }} />
\`\`\`

The object is newly created on every render.

Similarly:

\`\`\`jsx
<Child onClick={() => doSomething()} />
\`\`\`

creates a new function reference.

If stable identity is actually needed, I can use \`useMemo\` for objects or \`useCallback\` for functions.

But I would first verify that this re-render is actually a performance problem.`,
    explanationHindi: `\`React.memo\` hone ke baad bhi child re-render kar sakta hai agar props ki reference har render mein change ho rahi ho.

Example:

\`\`\`jsx
<Child style={{ color: "red" }} />
\`\`\`

Har render mein new object create hota hai.

Similarly:

\`\`\`jsx
<Child onClick={() => doSomething()} />
\`\`\`

new function reference create karta hai.

Agar stable reference ki actual need hai to \`useMemo\` ya \`useCallback\` use kar sakte hain.

Lekin pehle check karna chahiye ki re-render actually performance problem hai ya nahi.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 9,
  },
  {
    technologySlug: 'react',
    topicSlug: 'performance',
    question: `87. A parent has a large form and changing one input causes the entire form to feel slow. How would you improve it?`,
    slug: '87-a-parent-has-a-large-form-and-changing-one-input-causes-the-entire-form-to-feel-slow-how-would-you-improve-it',
    answer: `I would first identify how much of the form is actually re-rendering.

Possible solutions include:

- Keep input state closer to the input instead of putting everything in one parent state.
- Split the form into smaller components.
- Use uncontrolled inputs where appropriate.
- Memoize expensive child sections when their props remain stable.
- Avoid expensive calculations during every keystroke.
- Use a form library when it genuinely simplifies large-form state management.

The main idea is to reduce the amount of UI work caused by each keystroke.`,
    explanation: `I would first identify how much of the form is actually re-rendering.

Possible solutions include:

- Keep input state closer to the input instead of putting everything in one parent state.
- Split the form into smaller components.
- Use uncontrolled inputs where appropriate.
- Memoize expensive child sections when their props remain stable.
- Avoid expensive calculations during every keystroke.
- Use a form library when it genuinely simplifies large-form state management.

The main idea is to reduce the amount of UI work caused by each keystroke.`,
    explanationHindi: `Agar large form mein ek input change karne par poora form slow feel ho raha hai, to pehle dekhunga ki kitna UI re-render ho raha hai.

Possible solutions:

- Input state ko unnecessarily high parent mein na rakho.
- Form ko smaller components mein split karo.
- Suitable cases mein uncontrolled inputs use karo.
- Expensive child sections ko memoize karo.
- Har keystroke par expensive calculation avoid karo.
- Large form ke liye suitable form library use kar sakte ho.

Goal hai ek keystroke ke response mein unnecessary UI work reduce karna.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 10,
  },
  {
    technologySlug: 'react',
    topicSlug: 'performance',
    question: `88. You have a dashboard with 20 widgets, and changing one filter causes all widgets to re-render. How would you improve it?`,
    slug: '88-you-have-a-dashboard-with-20-widgets-and-changing-one-filter-causes-all-widgets-to-re-render-how-would-you-improve-it',
    answer: `I would look at the state architecture first.

If the filter state is stored at the dashboard root, every update may cause a large subtree to render.

I could:

- Split the dashboard into independent widget components.
- Keep state close to the widgets that actually need it.
- Pass only the required values.
- Use \`React.memo\` for widgets where props are stable and rendering is expensive.
- Split frequently changing state from rarely changing state.
- Use selectors if the dashboard uses an external state store.

The goal is not to stop all renders, but to prevent unrelated widgets from doing expensive work.`,
    explanation: `I would look at the state architecture first.

If the filter state is stored at the dashboard root, every update may cause a large subtree to render.

I could:

- Split the dashboard into independent widget components.
- Keep state close to the widgets that actually need it.
- Pass only the required values.
- Use \`React.memo\` for widgets where props are stable and rendering is expensive.
- Split frequently changing state from rarely changing state.
- Use selectors if the dashboard uses an external state store.

The goal is not to stop all renders, but to prevent unrelated widgets from doing expensive work.`,
    explanationHindi: `Dashboard mein 20 widgets hain aur ek filter change karne par sab re-render ho rahe hain, to main pehle state architecture check karunga.

Possible approach:

- Dashboard ko independent widget components mein split karo.
- State ko un components ke closer rakho jahan actually required hai.
- Sirf required props pass karo.
- Expensive aur stable widgets par \`React.memo\` use karo.
- Frequently changing aur rarely changing state ko separate karo.
- External store ho to selectors use karo.

Goal har render ko stop karna nahi, balki unrelated widgets ka unnecessary expensive work avoid karna hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 11,
  },
  {
    technologySlug: 'react',
    topicSlug: 'state-management',
    question: `89. The same API data is being requested by five different components. How would you avoid duplicate requests?`,
    slug: '89-the-same-api-data-is-being-requested-by-five-different-components-how-would-you-avoid-duplicate-requests',
    answer: `I would avoid making every component independently fetch the same server state.

Depending on the application, I could:

- Fetch once in a common parent and pass the data down.
- Use Context for simple shared data.
- Use Redux or another global state solution if the data belongs in application state.
- Prefer a server-state library such as TanStack Query when caching, deduplication, refetching, and stale-data handling are required.

For server data, a query/cache solution is often cleaner than manually maintaining duplicated fetch state in multiple components.`,
    explanation: `I would avoid making every component independently fetch the same server state.

Depending on the application, I could:

- Fetch once in a common parent and pass the data down.
- Use Context for simple shared data.
- Use Redux or another global state solution if the data belongs in application state.
- Prefer a server-state library such as TanStack Query when caching, deduplication, refetching, and stale-data handling are required.

For server data, a query/cache solution is often cleaner than manually maintaining duplicated fetch state in multiple components.`,
    explanationHindi: `Agar same API data five components independently fetch kar rahe hain, to duplicate requests avoid karne ke liye common data source use karunga.

Options:

- Common parent mein ek baar fetch karke pass karo.
- Simple shared data ke liye Context.
- Complex application state ke liye Redux/other store.
- Server-state ke liye TanStack Query jaise solution, jo caching aur deduplication handle kar sakta hai.

Main manually same API logic multiple components mein repeat nahi karunga.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 1,
  },
  {
    technologySlug: 'react',
    topicSlug: 'state-management',
    question: `90. You have a list loaded from an API. Would you choose pagination, infinite scroll, or virtualization?`,
    slug: '90-you-have-a-list-loaded-from-an-api-would-you-choose-pagination-infinite-scroll-or-virtualization',
    answer: `These solve different problems.

- **Pagination** limits how much data is fetched and shown per page.
- **Infinite scroll** loads additional pages as the user reaches the end.
- **Virtualization** limits how many DOM elements are rendered at one time.

They can also be combined.

For example, for 100,000 server records, I might use:

\`Server pagination → Infinite loading → Virtualized list\`

If the user needs page numbers and predictable navigation, pagination may be better. For a feed-like experience, infinite scroll may be better. If the loaded list itself becomes very large, virtualization controls the DOM size.`,
    explanation: `These solve different problems.

- **Pagination** limits how much data is fetched and shown per page.
- **Infinite scroll** loads additional pages as the user reaches the end.
- **Virtualization** limits how many DOM elements are rendered at one time.

They can also be combined.

For example, for 100,000 server records, I might use:

\`Server pagination → Infinite loading → Virtualized list\`

If the user needs page numbers and predictable navigation, pagination may be better. For a feed-like experience, infinite scroll may be better. If the loaded list itself becomes very large, virtualization controls the DOM size.`,
    explanationHindi: `Pagination, infinite scroll aur virtualization same problem solve nahi karte.

- **Pagination:** ek time par limited data fetch/show karta hai.
- **Infinite scroll:** user bottom ke paas aane par next page load karta hai.
- **Virtualization:** DOM mein ek time par limited visible items render karta hai.

Inhe combine bhi kar sakte hain.

Example:

\`Server pagination → Infinite loading → Virtualized list\`

Page numbers aur predictable navigation chahiye to pagination. Feed jaisa experience ho to infinite scroll. Loaded list bahut large ho to virtualization DOM size control karti hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 2,
  },
  {
    technologySlug: 'react',
    topicSlug: 'state-management',
    question: `91. How would you implement infinite scroll without causing duplicate API calls?`,
    slug: '91-how-would-you-implement-infinite-scroll-without-causing-duplicate-api-calls',
    answer: `I would avoid triggering requests directly from every scroll event.

A practical approach is to use an \`IntersectionObserver\` on a sentinel element near the bottom of the list.

When the sentinel becomes visible:

1. Check whether a request is already loading.
2. Check whether another page exists.
3. Fetch the next page.
4. Append the new items.
5. Update the page/cursor.
6. Continue observing.

I would also make sure the same page/cursor cannot be requested twice.

For very long lists, I would combine infinite loading with virtualization.`,
    explanation: `I would avoid triggering requests directly from every scroll event.

A practical approach is to use an \`IntersectionObserver\` on a sentinel element near the bottom of the list.

When the sentinel becomes visible:

1. Check whether a request is already loading.
2. Check whether another page exists.
3. Fetch the next page.
4. Append the new items.
5. Update the page/cursor.
6. Continue observing.

I would also make sure the same page/cursor cannot be requested twice.

For very long lists, I would combine infinite loading with virtualization.`,
    explanationHindi: `Infinite scroll mein main har scroll event par API call nahi karunga.

Bottom mein ek sentinel element rakhkar \`IntersectionObserver\` use kar sakte hain.

Jab sentinel visible ho:

1. Check karo request already loading hai ya nahi.
2. Check karo next page available hai ya nahi.
3. Next page fetch karo.
4. New items append karo.
5. Page/cursor update karo.
6. Observer continue rakho.

Same page ko duplicate request hone se bhi prevent karna hoga.

Bahut long list ho to virtualization ke saath combine kar sakte hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 3,
  },
  {
    technologySlug: 'react',
    topicSlug: 'state-management',
    question: `92. A user scrolls very quickly and your infinite-scroll API fires multiple times. What would you do?`,
    slug: '92-a-user-scrolls-very-quickly-and-your-infinite-scroll-api-fires-multiple-times-what-would-you-do',
    answer: `I would add request guards and make pagination state explicit.

For example, I would track:

- \`isLoading\`
- Current page/cursor
- \`hasNextPage\`
- A request identifier or query key when necessary

The observer callback should return early if a request is already in progress or there is no next page.

I would also consider a data-fetching library that handles caching and request deduplication.

The key is to make loading the next page an idempotent, controlled operation rather than allowing every observer event to trigger a request.`,
    explanation: `I would add request guards and make pagination state explicit.

For example, I would track:

- \`isLoading\`
- Current page/cursor
- \`hasNextPage\`
- A request identifier or query key when necessary

The observer callback should return early if a request is already in progress or there is no next page.

I would also consider a data-fetching library that handles caching and request deduplication.

The key is to make loading the next page an idempotent, controlled operation rather than allowing every observer event to trigger a request.`,
    explanationHindi: `Fast scrolling ki wajah se multiple API calls ho rahi hain to request guards use karunga.

Track karunga:

- \`isLoading\`
- Current page/cursor
- \`hasNextPage\`
- Zarurat par request ID/query key

Agar request already running hai ya next page available nahi hai, observer callback ko return kar dena chahiye.

Caching/deduplication ke liye query library bhi use kar sakte hain.

Goal hai har observer event ko uncontrolled API call banne se rokna.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 4,
  },
  {
    technologySlug: 'react',
    topicSlug: 'state-management',
    question: `93. A search result list is slow even though the API response is fast. How would you find the real bottleneck?`,
    slug: '93-a-search-result-list-is-slow-even-though-the-api-response-is-fast-how-would-you-find-the-real-bottleneck',
    answer: `I would separate network time from UI time.

First I would check the Network panel to confirm the API is fast.

Then I would use the React Profiler and browser Performance panel to check:

- Expensive filtering/sorting.
- Too many component renders.
- Too many DOM nodes.
- Expensive layout or paint.
- Large images or heavy child components.

If filtering is expensive, I may memoize the calculation. If rendering is expensive, I may virtualize or split/memoize components.

The fix depends on whether the bottleneck is data processing, React rendering, or browser rendering.`,
    explanation: `I would separate network time from UI time.

First I would check the Network panel to confirm the API is fast.

Then I would use the React Profiler and browser Performance panel to check:

- Expensive filtering/sorting.
- Too many component renders.
- Too many DOM nodes.
- Expensive layout or paint.
- Large images or heavy child components.

If filtering is expensive, I may memoize the calculation. If rendering is expensive, I may virtualize or split/memoize components.

The fix depends on whether the bottleneck is data processing, React rendering, or browser rendering.`,
    explanationHindi: `Agar API fast hai lekin result list slow hai, to network aur UI performance ko separately check karunga.

Network panel se API timing verify karunga.

Phir React Profiler aur browser Performance panel se check karunga:

- Expensive filtering/sorting
- Too many renders
- Too many DOM nodes
- Layout/paint cost
- Heavy images/components

Filtering slow hai to calculation optimize kar sakte hain. Rendering slow hai to virtualization ya component optimization useful ho sakta hai.

Pehle bottleneck identify karna important hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 5,
  },
  {
    technologySlug: 'react',
    topicSlug: 'state-management',
    question: `94. A component has a \`useEffect\` that keeps calling the API repeatedly. How would you debug it?`,
    slug: '94-a-component-has-a-useeffect-that-keeps-calling-the-api-repeatedly-how-would-you-debug-it',
    answer: `I would inspect the effect dependencies and identify what is changing after the request.

A common problem is an unstable object or function in the dependency array.

For example:

\`\`\`jsx
const options = { page, limit: 20 };

useEffect(() => {
  fetchData(options);
}, [options]);
\`\`\`

\`options\` is a new object on every render, so the effect can run repeatedly.

Depending on the requirement, I could use primitive dependencies, memoize the value, or restructure the effect.

I would also check whether the effect is unnecessarily setting state that changes its own dependencies.`,
    explanation: `I would inspect the effect dependencies and identify what is changing after the request.

A common problem is an unstable object or function in the dependency array.

For example:

\`\`\`jsx
const options = { page, limit: 20 };

useEffect(() => {
  fetchData(options);
}, [options]);
\`\`\`

\`options\` is a new object on every render, so the effect can run repeatedly.

Depending on the requirement, I could use primitive dependencies, memoize the value, or restructure the effect.

I would also check whether the effect is unnecessarily setting state that changes its own dependencies.`,
    explanationHindi: `Agar \`useEffect\` repeatedly API call kar raha hai, to sabse pehle dependency array check karunga.

Common problem unstable object/function dependency hoti hai.

\`\`\`jsx
const options = { page, limit: 20 };

useEffect(() => {
  fetchData(options);
}, [options]);
\`\`\`

Har render mein \`options\` ka new object ban raha hai, isliye effect repeat ho sakta hai.

Primitive dependencies use kar sakte hain, required case mein value memoize kar sakte hain ya effect ka structure change kar sakte hain.

Ye bhi check karna hoga ki effect apni dependency ko repeatedly change to nahi kar raha.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 6,
  },
  {
    technologySlug: 'react',
    topicSlug: 'state-management',
    question: `95. A user navigates away from a page while an API request is still running. How would you handle it?`,
    slug: '95-a-user-navigates-away-from-a-page-while-an-api-request-is-still-running-how-would-you-handle-it',
    answer: `I would clean up the request when the component no longer needs it.

With \`fetch\`, \`AbortController\` is a common approach:

\`\`\`jsx
useEffect(() => {
  const controller = new AbortController();

  fetch("/api/users", {
    signal: controller.signal
  });

  return () => controller.abort();
}, []);
\`\`\`

This prevents unnecessary work for an obsolete request.

If a request cannot be cancelled, I would at least guard the result so an obsolete response cannot incorrectly update the current UI.`,
    explanation: `I would clean up the request when the component no longer needs it.

With \`fetch\`, \`AbortController\` is a common approach:

\`\`\`jsx
useEffect(() => {
  const controller = new AbortController();

  fetch("/api/users", {
    signal: controller.signal
  });

  return () => controller.abort();
}, []);
\`\`\`

This prevents unnecessary work for an obsolete request.

If a request cannot be cancelled, I would at least guard the result so an obsolete response cannot incorrectly update the current UI.`,
    explanationHindi: `Agar user page se navigate kar gaya aur API request abhi running hai, to obsolete request ko cleanup/cancel karna better hai.

\`fetch\` ke saath \`AbortController\` use kar sakte hain:

\`\`\`jsx
useEffect(() => {
  const controller = new AbortController();

  fetch("/api/users", {
    signal: controller.signal
  });

  return () => controller.abort();
}, []);
\`\`\`

Agar request cancel nahi ho sakti, to obsolete response ko current UI state update karne se guard karna chahiye.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 7,
  },
  {
    technologySlug: 'react',
    topicSlug: 'state-management',
    question: `96. You need to show images for 5,000 products. The page is slow. What would you do?`,
    slug: '96-you-need-to-show-images-for-5000-products-the-page-is-slow-what-would-you-do',
    answer: `I would address both the number of DOM elements and the image loading cost.

For the list:

- Use virtualization or pagination/infinite loading.
- Render only the required product cards.

For images:

- Use appropriately sized images.
- Use lazy loading where suitable.
- Serve modern/compressed image formats.
- Use placeholders or thumbnails before the full image loads.

I would also avoid loading 5,000 full-resolution images immediately.`,
    explanation: `I would address both the number of DOM elements and the image loading cost.

For the list:

- Use virtualization or pagination/infinite loading.
- Render only the required product cards.

For images:

- Use appropriately sized images.
- Use lazy loading where suitable.
- Serve modern/compressed image formats.
- Use placeholders or thumbnails before the full image loads.

I would also avoid loading 5,000 full-resolution images immediately.`,
    explanationHindi: `5,000 products ki images show karni hain to DOM aur image loading dono optimize karunga.

List ke liye:

- Virtualization ya pagination/infinite loading.
- Sirf required product cards render karna.

Images ke liye:

- Correct image dimensions.
- Suitable cases mein lazy loading.
- Compressed/modern formats.
- Placeholder ya thumbnail use karna.
- 5,000 full-resolution images ek saath load nahi karna.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 8,
  },
  {
    technologySlug: 'react',
    topicSlug: 'state-management',
    question: `97. A component needs data from an API and also receives the same data through props. How would you decide which source to use?`,
    slug: '97-a-component-needs-data-from-an-api-and-also-receives-the-same-data-through-props-how-would-you-decide-which-source-to-use',
    answer: `I would establish a single source of truth.

If the parent already owns the required data and passes it through props, the child should normally use the prop rather than fetching the same data again.

If the child owns a specific server-state responsibility, I may fetch it there through an appropriate data-fetching abstraction.

I would avoid having both prop data and independently fetched data represent the same state unless there is a clear reason.

Duplicate sources can become inconsistent.`,
    explanation: `I would establish a single source of truth.

If the parent already owns the required data and passes it through props, the child should normally use the prop rather than fetching the same data again.

If the child owns a specific server-state responsibility, I may fetch it there through an appropriate data-fetching abstraction.

I would avoid having both prop data and independently fetched data represent the same state unless there is a clear reason.

Duplicate sources can become inconsistent.`,
    explanationHindi: `Agar parent already same API data props ke through child ko de raha hai, to child ko normally wahi prop data use karna chahiye, same data dobara fetch nahi karna chahiye.

Main **single source of truth** maintain karunga.

Agar child ka clear server-state responsibility hai, to child mein proper data-fetching abstraction use ho sakta hai.

Same data ke do independent sources unnecessary inconsistency create kar sakte hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 9,
  },
  {
    technologySlug: 'react',
    topicSlug: 'state-management',
    question: `98. A user changes a filter and the application performs expensive sorting on every render. How would you optimize it?`,
    slug: '98-a-user-changes-a-filter-and-the-application-performs-expensive-sorting-on-every-render-how-would-you-optimize-it',
    answer: `If the sorting is genuinely expensive and depends on specific values, I would memoize the derived result.

\`\`\`jsx
const sortedProducts = useMemo(() => {
  return [...products].sort(compareProducts);
}, [products, sortBy]);
\`\`\`

I would also make sure the calculation is not being triggered by unrelated state changes.

If the dataset is extremely large, I would consider moving filtering/sorting to the server, especially when pagination is already server-driven.

So I would choose between client-side memoization and server-side processing based on dataset size and application requirements.`,
    explanation: `If the sorting is genuinely expensive and depends on specific values, I would memoize the derived result.

\`\`\`jsx
const sortedProducts = useMemo(() => {
  return [...products].sort(compareProducts);
}, [products, sortBy]);
\`\`\`

I would also make sure the calculation is not being triggered by unrelated state changes.

If the dataset is extremely large, I would consider moving filtering/sorting to the server, especially when pagination is already server-driven.

So I would choose between client-side memoization and server-side processing based on dataset size and application requirements.`,
    explanationHindi: `Agar expensive sorting har render mein run ho rahi hai, to relevant dependencies ke basis par derived result memoize kar sakte hain.

\`\`\`jsx
const sortedProducts = useMemo(() => {
  return [...products].sort(compareProducts);
}, [products, sortBy]);
\`\`\`

Ye bhi check karunga ki unrelated state change ki wajah se calculation repeat na ho.

Dataset bahut large hai to filtering/sorting server side karna better ho sakta hai, especially server pagination ke saath.

Solution dataset size aur architecture par depend karega.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 10,
  },
  {
    technologySlug: 'react',
    topicSlug: 'state-management',
    question: `99. A component receives a huge object as props, but it only needs two fields. How would you improve it?`,
    slug: '99-a-component-receives-a-huge-object-as-props-but-it-only-needs-two-fields-how-would-you-improve-it',
    answer: `I would avoid passing more data than the child needs.

Instead of:

\`\`\`jsx
<Profile user={hugeUserObject} />
\`\`\`

I might pass:

\`\`\`jsx
<Profile
  name={user.name}
  avatar={user.avatar}
/>
\`\`\`

This makes the component contract clearer and can also make memoization more effective because the child depends on smaller, more stable values.

I would especially consider this when the object changes frequently but the child only needs a small part of it.`,
    explanation: `I would avoid passing more data than the child needs.

Instead of:

\`\`\`jsx
<Profile user={hugeUserObject} />
\`\`\`

I might pass:

\`\`\`jsx
<Profile
  name={user.name}
  avatar={user.avatar}
/>
\`\`\`

This makes the component contract clearer and can also make memoization more effective because the child depends on smaller, more stable values.

I would especially consider this when the object changes frequently but the child only needs a small part of it.`,
    explanationHindi: `Agar child ko huge object mein se sirf do fields chahiye, to main unnecessary full object pass nahi karunga.

Instead of:

\`\`\`jsx
<Profile user={hugeUserObject} />
\`\`\`

pass kar sakte hain:

\`\`\`jsx
<Profile
  name={user.name}
  avatar={user.avatar}
/>
\`\`\`

Isse component ka contract clear hota hai aur memoization bhi more predictable ho sakti hai.

Especially useful jab large object frequently change hota hai lekin child ko sirf few fields chahiye.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 11,
  },
  {
    technologySlug: 'react',
    topicSlug: 'advanced-react',
    question: `100. You have a React page with a large table, filters, sorting, pagination, and API calls. How would you structure the solution?`,
    slug: '100-you-have-a-react-page-with-a-large-table-filters-sorting-pagination-and-api-calls-how-would-you-structure-the-solution',
    answer: `I would separate the concerns instead of putting everything in one component.

For example:

- \`TablePage\` → coordinates the page.
- \`Filters\` → owns or receives filter UI state.
- \`Table\` → displays rows.
- \`Pagination\` → handles page navigation.
- \`useUsersQuery\` or a query library → manages server data.
- A small utility or selector → handles derived sorting/filtering if it is client-side.

For a large dataset, I would prefer server-side filtering, sorting, and pagination. If a single loaded page is still large, I would add virtualization.

I would also keep loading, error, empty, and success states explicit.

The main goal is to make each responsibility independently testable and prevent one state change from causing unnecessary work across the entire page.`,
    explanation: `I would separate the concerns instead of putting everything in one component.

For example:

- \`TablePage\` → coordinates the page.
- \`Filters\` → owns or receives filter UI state.
- \`Table\` → displays rows.
- \`Pagination\` → handles page navigation.
- \`useUsersQuery\` or a query library → manages server data.
- A small utility or selector → handles derived sorting/filtering if it is client-side.

For a large dataset, I would prefer server-side filtering, sorting, and pagination. If a single loaded page is still large, I would add virtualization.

I would also keep loading, error, empty, and success states explicit.

The main goal is to make each responsibility independently testable and prevent one state change from causing unnecessary work across the entire page.`,
    explanationHindi: `Large table, filters, sorting, pagination aur API calls ko ek hi component mein nahi rakhunga.

Structure kuch aisa ho sakta hai:

- \`TablePage\` → overall coordination.
- \`Filters\` → filter UI.
- \`Table\` → rows display.
- \`Pagination\` → page navigation.
- Query Hook/library → server data.
- Utility/selector → client-side derived data.

Large dataset ke liye server-side filtering, sorting aur pagination prefer karunga. Agar ek loaded page bhi bahut large hai to virtualization add karunga.

Loading, error, empty aur success states clearly handle karunga.

Main goal responsibilities ko separate rakhna aur unnecessary re-renders/work avoid karna hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 1,
  },
  {
    technologySlug: 'react',
    topicSlug: 'advanced-react',
    question: `101. A modal contains a large component tree, but opening it makes the whole page slow. What would you check?`,
    slug: '101-a-modal-contains-a-large-component-tree-but-opening-it-makes-the-whole-page-slow-what-would-you-check',
    answer: `I would check whether the modal's code and heavy data are being loaded only when needed.

If the modal is rarely used, I can lazy-load its component.

I would also check:

- Whether opening the modal causes expensive calculations.
- Whether a large subtree renders unnecessarily.
- Whether data is fetched before it is needed.
- Whether images or heavy components are loaded immediately.

If the modal is complex, I would separate it into smaller components and load expensive sections only when required.`,
    explanation: `I would check whether the modal's code and heavy data are being loaded only when needed.

If the modal is rarely used, I can lazy-load its component.

I would also check:

- Whether opening the modal causes expensive calculations.
- Whether a large subtree renders unnecessarily.
- Whether data is fetched before it is needed.
- Whether images or heavy components are loaded immediately.

If the modal is complex, I would separate it into smaller components and load expensive sections only when required.`,
    explanationHindi: `Agar modal open karne par whole page slow ho raha hai, to check karunga ki modal ka heavy code aur data sirf need hone par load ho raha hai ya nahi.

Rarely used modal ho to lazy loading use kar sakte hain.

Check:

- Modal open hone par expensive calculation.
- Large subtree ka unnecessary render.
- Unnecessary early API/data fetching.
- Heavy images/components.

Complex modal ko smaller components mein split karke heavy parts ko only when needed load kar sakte hain.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 2,
  },
  {
    technologySlug: 'react',
    topicSlug: 'advanced-react',
    question: `102. A React page becomes slow after adding a third-party library. How would you investigate it?`,
    slug: '102-a-react-page-becomes-slow-after-adding-a-third-party-library-how-would-you-investigate-it',
    answer: `I would verify whether the library is affecting bundle size, initialization time, rendering, or network requests.

I would use:

- Bundle analysis.
- Browser Performance panel.
- Network panel.
- React Profiler if the library affects rendering.

If the library is only needed on one route, I could lazy-load that route or dynamically import the library.

If a smaller dependency can provide the same functionality, I would evaluate that as well.

The important part is measuring the actual impact before replacing a dependency.`,
    explanation: `I would verify whether the library is affecting bundle size, initialization time, rendering, or network requests.

I would use:

- Bundle analysis.
- Browser Performance panel.
- Network panel.
- React Profiler if the library affects rendering.

If the library is only needed on one route, I could lazy-load that route or dynamically import the library.

If a smaller dependency can provide the same functionality, I would evaluate that as well.

The important part is measuring the actual impact before replacing a dependency.`,
    explanationHindi: `Third-party library add karne ke baad page slow hua hai to main check karunga ki issue bundle size, initialization, rendering ya network request mein hai.

Tools:

- Bundle analysis
- Browser Performance panel
- Network panel
- React Profiler

Agar library sirf ek route par required hai to us route/library ko lazy load kar sakte hain.

Alternative smaller dependency bhi evaluate kar sakte hain, lekin actual measurement ke baad.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 3,
  },
  {
    technologySlug: 'react',
    topicSlug: 'advanced-react',
    question: `103. A user clicks a button multiple times and the same API request is submitted multiple times. How would you prevent duplicate submissions?`,
    slug: '103-a-user-clicks-a-button-multiple-times-and-the-same-api-request-is-submitted-multiple-times-how-would-you-prevent-duplicate-submissions',
    answer: `I would make the action state-aware.

For example:

\`\`\`jsx
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
\`\`\`

I would also disable the submit button while the request is pending.

For important backend operations, I would not rely only on the frontend. The backend can also use idempotency or duplicate-request protection when required.`,
    explanation: `I would make the action state-aware.

For example:

\`\`\`jsx
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
\`\`\`

I would also disable the submit button while the request is pending.

For important backend operations, I would not rely only on the frontend. The backend can also use idempotency or duplicate-request protection when required.`,
    explanationHindi: `Agar user button multiple times click karke same API request multiple baar send kar raha hai, to submission state maintain karunga.

\`\`\`jsx
if (isSubmitting) return;

setIsSubmitting(true);

try {
  await submitForm();
} finally {
  setIsSubmitting(false);
}
\`\`\`

Request pending hone par button disable bhi kar sakte hain.

Important operations ke liye backend side par bhi duplicate protection/idempotency useful hoti hai. Sirf frontend par depend nahi karna chahiye.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 4,
  },
  {
    technologySlug: 'react',
    topicSlug: 'advanced-react',
    question: `104. A component starts a timer, but after navigating away the timer continues running. What is wrong?`,
    slug: '104-a-component-starts-a-timer-but-after-navigating-away-the-timer-continues-running-what-is-wrong',
    answer: `The timer was created as an external side effect but was not cleaned up.

I would return a cleanup function from \`useEffect\`.

\`\`\`jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(id);
}, []);
\`\`\`

When the component no longer needs the effect, React runs the cleanup.

The same idea applies to event listeners, subscriptions, observers, and other resources.`,
    explanation: `The timer was created as an external side effect but was not cleaned up.

I would return a cleanup function from \`useEffect\`.

\`\`\`jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(id);
}, []);
\`\`\`

When the component no longer needs the effect, React runs the cleanup.

The same idea applies to event listeners, subscriptions, observers, and other resources.`,
    explanationHindi: `Component ne timer start kiya lekin page se navigate karne ke baad timer continue kar raha hai, to cleanup missing hai.

\`\`\`jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(id);
}, []);
\`\`\`

Cleanup mein timer clear ho jayega.

Same concept event listeners, subscriptions aur observers par bhi apply hota hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 5,
  },
  {
    technologySlug: 'react',
    topicSlug: 'advanced-react',
    question: `105. A component shows stale data after the user changes an ID quickly. How would you solve it?`,
    slug: '105-a-component-shows-stale-data-after-the-user-changes-an-id-quickly-how-would-you-solve-it',
    answer: `This can happen when multiple asynchronous requests are active and an older request finishes after a newer request.

I would:

- Cancel the previous request with \`AbortController\` where possible.
- Associate the response with the current request/query.
- Ignore results from obsolete requests.
- Use a query library that handles caching and request lifecycle if the application is complex.

The key is to ensure that an old response cannot overwrite the state belonging to the latest ID.`,
    explanation: `This can happen when multiple asynchronous requests are active and an older request finishes after a newer request.

I would:

- Cancel the previous request with \`AbortController\` where possible.
- Associate the response with the current request/query.
- Ignore results from obsolete requests.
- Use a query library that handles caching and request lifecycle if the application is complex.

The key is to ensure that an old response cannot overwrite the state belonging to the latest ID.`,
    explanationHindi: `User ID quickly change karta hai aur stale data show ho raha hai to multiple async requests ka race condition ho sakta hai.

Main:

- Possible ho to old request ko \`AbortController\` se cancel karunga.
- Response ko current request/query ke saath associate karunga.
- Obsolete response ko ignore karunga.
- Complex app mein query library use kar sakta hoon.

Important point: old response latest ID ka state overwrite nahi karna chahiye.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 6,
  },
  {
    technologySlug: 'react',
    topicSlug: 'advanced-react',
    question: `106. You have a large React page where only one small section changes frequently. How would you prevent unrelated sections from doing unnecessary work?`,
    slug: '106-you-have-a-large-react-page-where-only-one-small-section-changes-frequently-how-would-you-prevent-unrelated-sections-from-doing-unnecessary-work',
    answer: `I would colocate the frequently changing state as close as possible to the section that needs it.

If the state is currently at the page root, moving it down can prevent unrelated sections from participating in that update.

If state genuinely needs to be shared, I can split components and contexts or use selectors so components subscribe only to the data they need.

The principle is to minimize the scope of frequently changing state.`,
    explanation: `I would colocate the frequently changing state as close as possible to the section that needs it.

If the state is currently at the page root, moving it down can prevent unrelated sections from participating in that update.

If state genuinely needs to be shared, I can split components and contexts or use selectors so components subscribe only to the data they need.

The principle is to minimize the scope of frequently changing state.`,
    explanationHindi: `Agar page ka sirf ek small section frequently change hota hai, to us state ko jitna possible ho us section ke close rakhunga.

Agar state page root par unnecessarily stored hai, to usko neeche move karne se unrelated sections ka work reduce ho sakta hai.

Agar state genuinely shared hai, to components/contexts split kar sakte hain ya selectors use kar sakte hain.

Simple principle: frequently changing state ka scope chhota rakho.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 7,
  },
  {
    technologySlug: 'react',
    topicSlug: 'advanced-react',
    question: `107. A React search page has local filtering, API search, pagination, and sorting. How would you decide what should happen on the client and what should happen on the server?`,
    slug: '107-a-react-search-page-has-local-filtering-api-search-pagination-and-sorting-how-would-you-decide-what-should-happen-on-the-client-and-what-should-happen-on-the-server',
    answer: `I would consider dataset size and the amount of work involved.

For a small dataset already loaded in the browser, client-side filtering and sorting can be simple and fast.

For a very large dataset, I would usually move filtering, sorting, and pagination to the server so the browser does not download and process unnecessary records.

The client can then manage UI state such as the current search text, selected filters, loading state, and current page.

For example:

\`User filter → API query → Server filters/sorts → Server returns page → React renders page\`

This also keeps the amount of browser memory and DOM work under control.`,
    explanation: `I would consider dataset size and the amount of work involved.

For a small dataset already loaded in the browser, client-side filtering and sorting can be simple and fast.

For a very large dataset, I would usually move filtering, sorting, and pagination to the server so the browser does not download and process unnecessary records.

The client can then manage UI state such as the current search text, selected filters, loading state, and current page.

For example:

\`User filter → API query → Server filters/sorts → Server returns page → React renders page\`

This also keeps the amount of browser memory and DOM work under control.`,
    explanationHindi: `Client ya server par filtering/sorting decide karte time dataset size aur processing cost dekhta hoon.

Small dataset already browser mein loaded hai to client-side filtering/sorting simple ho sakti hai.

Very large dataset mein filtering, sorting aur pagination server par karna generally better hota hai, taaki browser unnecessary data download/process na kare.

Client UI state handle kar sakta hai:

\`Filter → API query → Server filter/sort → Page response → React render\`

Isse browser memory aur rendering work reduce hota hai.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 8,
  },
  {
    technologySlug: 'react',
    topicSlug: 'advanced-react',
    question: `108. You need to update a large list after one item changes. How would you avoid unnecessary work?`,
    slug: '108-you-need-to-update-a-large-list-after-one-item-changes-how-would-you-avoid-unnecessary-work',
    answer: `I would update the item immutably while preserving references for items that did not change.

For example:

\`\`\`jsx
setUsers(prev =>
  prev.map(user =>
    user.id === updated.id
      ? { ...user, ...updated }
      : user
  )
);
\`\`\`

Then I can use a memoized row component:

\`\`\`jsx
const UserRow = React.memo(...);
\`\`\`

If the unchanged rows receive the same item references and stable props, React can skip their rendering where appropriate.

For extremely large lists, I would still combine this with virtualization.`,
    explanation: `I would update the item immutably while preserving references for items that did not change.

For example:

\`\`\`jsx
setUsers(prev =>
  prev.map(user =>
    user.id === updated.id
      ? { ...user, ...updated }
      : user
  )
);
\`\`\`

Then I can use a memoized row component:

\`\`\`jsx
const UserRow = React.memo(...);
\`\`\`

If the unchanged rows receive the same item references and stable props, React can skip their rendering where appropriate.

For extremely large lists, I would still combine this with virtualization.`,
    explanationHindi: `Agar large list mein sirf ek item update hua hai, to immutable update karte time unchanged items ki references preserve karunga.

\`\`\`jsx
setUsers(prev =>
  prev.map(user =>
    user.id === updated.id
      ? { ...user, ...updated }
      : user
  )
);
\`\`\`

Rows ko \`React.memo\` se memoize kar sakte hain taaki unchanged rows unnecessary render na karein.

Very large list mein virtualization bhi useful rahegi.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 9,
  },
  {
    technologySlug: 'react',
    topicSlug: 'advanced-react',
    question: `109. A page has a very expensive calculation that does not depend on every piece of state. How would you prevent it from running on unrelated updates?`,
    slug: '109-a-page-has-a-very-expensive-calculation-that-does-not-depend-on-every-piece-of-state-how-would-you-prevent-it-from-running-on-unrelated-updates',
    answer: `I would first check whether the calculation is actually expensive.

If it is and its inputs are known, I can memoize the derived value:

\`\`\`jsx
const result = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
\`\`\`

I would also consider moving the calculation outside the component if it does not depend on component state at all.

The key is to avoid running expensive work just because an unrelated state value changed.`,
    explanation: `I would first check whether the calculation is actually expensive.

If it is and its inputs are known, I can memoize the derived value:

\`\`\`jsx
const result = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
\`\`\`

I would also consider moving the calculation outside the component if it does not depend on component state at all.

The key is to avoid running expensive work just because an unrelated state value changed.`,
    explanationHindi: `Agar calculation genuinely expensive hai aur sirf specific data par depend karti hai, to \`useMemo\` use kar sakte hain:

\`\`\`jsx
const result = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
\`\`\`

Agar calculation component state par depend hi nahi karti, to usko component ke bahar move karna bhi possible hai.

Goal hai unrelated state change par expensive calculation ko repeat hone se avoid karna.

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 10,
  },
  {
    technologySlug: 'react',
    topicSlug: 'advanced-react',
    question: `110. You are asked to improve a slow React application. What is your overall step-by-step approach?`,
    slug: '110-you-are-asked-to-improve-a-slow-react-application-what-is-your-overall-step-by-step-approach',
    answer: `My approach would be:

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

In an interview, I would emphasize **measure first, then optimize** rather than saying I would immediately add \`useMemo\` everywhere.`,
    explanation: `My approach would be:

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

In an interview, I would emphasize **measure first, then optimize** rather than saying I would immediately add \`useMemo\` everywhere.`,
    explanationHindi: `Slow React application ko improve karne ke liye mera approach:

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

---`,
    difficulty: 'hard',
    questionType: 'Conceptual',
    preparationLevels: ["intermediate","advanced"],
    isImportant: true,
    tags: ["react"],
    order: 11,
  },
];
