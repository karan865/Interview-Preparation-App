# React.js Interview — Set 1
## 50 Questions with Answers for 3 Years Experience

> **Answer format:** Definition → Simple Explanation in English → Simple Explanation in Hindi

---

## 1. What is React, and what problems does it solve?

### Definition
React is a JavaScript library for building user interfaces, especially interactive web applications. It lets developers build UIs from reusable components and update the UI when application data changes.

### Simple Explanation — English
Instead of manually finding DOM elements and changing them whenever data changes, you describe what the UI should look like for the current state. React handles updating the necessary parts of the interface. Its component model also helps break a large application into small, reusable pieces.

### सरल व्याख्या — हिंदी
React एक JavaScript library है जिसका उपयोग user interface बनाने के लिए किया जाता है। इसमें application को छोटे और reusable components में बाँटा जाता है। जब data या state बदलता है, तो हम manually DOM को बार-बार update करने के बजाय बताते हैं कि UI कैसा होना चाहिए, और React आवश्यक बदलाव करता है।

---

## 2. Why is React described as a library rather than a full framework?

### Definition
React is primarily a UI library. It focuses on rendering and component-based UI development, while many application-level concerns such as routing, data fetching, and project structure are handled by separate libraries or frameworks.

### Simple Explanation — English
React mainly gives you the tools for building the UI. It does not force one official solution for every part of your application. For example, you can choose React Router for routing or another library for server-state management. Frameworks such as Next.js add a broader application structure around React.

### सरल व्याख्या — हिंदी
React मुख्य रूप से UI बनाने के लिए library है। यह आपको components और rendering की सुविधा देता है, लेकिन routing, data fetching जैसी हर चीज के लिए एक ही official solution मजबूर नहीं करता। इसलिए React के साथ अलग-अलग libraries इस्तेमाल की जा सकती हैं। बड़े frameworks React के ऊपर application-level features भी देते हैं।

---

## 3. What are the main concepts behind React's component-based architecture?

### Definition
React's component-based architecture organizes the UI into independent, reusable components that receive inputs through props and can manage or use state.

### Simple Explanation — English
A page can be divided into components such as Header, Sidebar, ProductCard, Form, and Footer. Each component has a clear responsibility. Components can be composed together, reused in different places, tested separately, and updated without rewriting the entire page.

### सरल व्याख्या — हिंदी
React में पूरे UI को छोटे-छोटे components में बाँटा जाता है। जैसे Header, Sidebar, ProductCard और Form अलग components हो सकते हैं। हर component की अपनी जिम्मेदारी होती है। इससे code reusable, maintainable और testable बनता है और पूरे page को एक साथ manage करने की जरूरत नहीं पड़ती।

---

## 4. What is JSX, and why does React use it?

### Definition
JSX is a syntax extension for JavaScript that allows developers to write markup-like UI code inside JavaScript.

### Simple Explanation — English
JSX makes UI code easier to read because HTML-like structure and JavaScript logic can be written together. For example, you can write `<h1>{name}</h1>` to display a JavaScript value inside markup. JSX is not HTML itself; it is syntax that tooling transforms into JavaScript.

### सरल व्याख्या — हिंदी
JSX JavaScript के लिए एक syntax extension है, जिससे हम JavaScript के अंदर HTML जैसी structure लिख सकते हैं। उदाहरण के लिए `<h1>{name}</h1>` में JavaScript का `name` value UI में दिखाई जा सकता है। JSX असली HTML नहीं है; build tools इसे JavaScript में बदलते हैं।

---

## 5. How is JSX transformed into JavaScript?

### Definition
JSX is transformed by a compiler or build tool into JavaScript function calls that create React elements.

### Simple Explanation — English
Modern React projects commonly use the automatic JSX runtime. A JSX expression such as `<Button />` is compiled into calls related to the React JSX runtime rather than being sent directly to the browser as JSX. The browser ultimately executes normal JavaScript, not JSX syntax.

### सरल व्याख्या — हिंदी
Browser सीधे JSX को नहीं समझता। Build process में JSX को JavaScript में transform किया जाता है। Modern React projects में automatic JSX runtime का उपयोग हो सकता है। इसलिए जो code हमें `<Button />` जैसा दिखाई देता है, build के बाद वह JavaScript calls में बदल जाता है जिसे browser चला सकता है।

---

## 6. What is a React element?

### Definition
A React element is a lightweight JavaScript object that describes what React should render in the UI.

### Simple Explanation — English
When you write JSX, the result represents a description of UI. For example, `<h1>Hello</h1>` creates a React element describing an `h1` element and its content. A React element is not the actual DOM node. React uses these descriptions during rendering and reconciliation.

### सरल व्याख्या — हिंदी
React element एक JavaScript object के रूप में UI का description होता है। `<h1>Hello</h1>` एक React element को represent करता है जो बताता है कि `h1` और उसका content कैसा होना चाहिए। यह actual DOM node नहीं होता। React इसी description का उपयोग rendering और reconciliation में करता है।

---

## 7. What is the difference between a React element and a React component?

### Definition
A React element is a description of what should be rendered, while a React component is a reusable piece of code that returns or produces React elements.

### Simple Explanation — English
Think of a component as the recipe and an element as one description created from that recipe. `function UserCard() { return <div>...</div> }` is a component. `<UserCard />` is an element describing that component's use in the UI. Components can accept props and contain logic; elements are the resulting descriptions.

### सरल व्याख्या — हिंदी
Component को आप एक reusable function या UI recipe की तरह समझ सकते हैं, जबकि element UI का description है। `UserCard` एक component है और `<UserCard />` उसका React element है। Component props और logic संभाल सकता है, जबकि element बताता है कि React को क्या render करना है।

---

## 8. What is a functional component?

### Definition
A functional component is a JavaScript function that accepts props and returns React elements describing part of the UI.

### Simple Explanation — English
A functional component can be very simple or can contain Hooks, event handlers, calculations, and other logic. For example, `function Welcome({ name }) { return <h1>Hello {name}</h1>; }`. In modern React, function components are the standard way to create components.

### सरल व्याख्या — हिंदी
Functional component एक JavaScript function होता है जो props ले सकता है और UI के लिए React elements return करता है। इसमें state, Hooks, event handlers और दूसरी logic भी हो सकती है। Modern React applications में function components सबसे सामान्य component style हैं।

---

## 9. Why are functional components preferred in modern React development?

### Definition
Functional components are preferred because they work naturally with Hooks and provide a simpler way to organize UI and component logic.

### Simple Explanation — English
Hooks such as `useState`, `useEffect`, `useMemo`, and `useContext` let function components handle state, effects, memoization, and context without class lifecycle methods. Function components also make logic easier to extract into custom Hooks. This does not mean every class component is wrong; class components are still supported for compatibility and existing codebases.

### सरल व्याख्या — हिंदी
Functional components में Hooks का उपयोग बहुत आसानी से किया जाता है। `useState`, `useEffect` और `useContext` जैसे Hooks की मदद से state और दूसरी logic manage की जा सकती है। Custom Hooks के जरिए reusable logic भी आसानी से निकाली जा सकती है। इसलिए modern React development में function components आम तौर पर standard choice हैं।

---

## 10. What is the difference between props and state?

### Definition
Props are inputs passed to a component by its parent, while state is data managed by a component or another state-management system that can change over time.

### Simple Explanation — English
Props are mainly used to pass information and behavior into a component. A child should not modify its props directly. State belongs to the component or its chosen owner and can be updated through a state setter or reducer. Changing relevant state can cause React to render the component again.

### सरल व्याख्या — हिंदी
Props parent से child component को दिए जाने वाले inputs हैं। State ऐसा data है जिसे component या उसका state owner manage करता है और जो समय के साथ बदल सकता है। Props को child सीधे modify नहीं करता। State update होने पर संबंधित UI दोबारा render हो सकता है।

---

## 11. Are props mutable? Why or why not?

### Definition
Props should be treated as read-only inputs by the receiving component.

### Simple Explanation — English
The child component should never try to change `props.user.name` or assign a new value to a prop variable. If data needs to change, the component that owns the state should update it and pass the new value down. This keeps data flow predictable and prevents components from secretly changing data owned elsewhere.

### सरल व्याख्या — हिंदी
Child component को props को read-only मानना चाहिए। उसे prop के अंदर मौजूद data को सीधे बदलने की कोशिश नहीं करनी चाहिए। अगर data बदलना है, तो state का owner उसे update करे और नया data child को pass करे। इससे data flow साफ और predictable रहता है।

---

## 12. Why should state be treated as immutable?

### Definition
State should be treated as immutable so that React receives new values or references when data changes and can reason correctly about updates.

### Simple Explanation — English
Instead of changing an existing object, create a new object. For example, use `{ ...user, name: 'Rahul' }` rather than `user.name = 'Rahul'`. Direct mutation can leave references unchanged, make updates difficult to detect, cause confusing bugs, and make optimization and debugging harder.

### सरल व्याख्या — हिंदी
State object या array को सीधे mutate करने के बजाय नया object या array बनाना चाहिए। जैसे `user.name = 'Rahul'` करने के बजाय `{ ...user, name: 'Rahul' }` बनाएं। इससे React को नया reference मिलता है और update को समझना आसान होता है। Mutation debugging और performance optimization में भी समस्या पैदा कर सकती है।

---

## 13. What causes a React component to render?

### Definition
A component can render because it initially mounts, its state changes, its parent renders, a consumed context value changes, or another relevant update causes React to render that part of the tree.

### Simple Explanation — English
A state update is not the only reason for rendering. For example, when a parent renders, React normally evaluates its child components again unless optimization or reconciliation means work can be skipped. A context consumer can also render when the context value it reads changes. External state libraries can schedule updates as well.

### सरल व्याख्या — हिंदी
Component केवल state change होने पर ही render नहीं होता। पहली बार mount होने पर भी render होता है। Parent render होने पर child को भी दोबारा evaluate किया जा सकता है। जिस context value को component use करता है वह बदल जाए, या external state system update करे, तब भी component render हो सकता है।

---

## 14. What happens during the render phase?

### Definition
During the render phase, React calls components and calculates what the UI should look like for the current state and props.

### Simple Explanation — English
React evaluates the component tree and creates the next description of the UI. The render phase should stay pure: it should not perform side effects such as manually changing the DOM, starting subscriptions, or sending requests. React may perform render work more than once in development or under concurrent rendering, so render logic must be safe to repeat.

### सरल व्याख्या — हिंदी
Render phase में React components को evaluate करके यह तय करता है कि current props और state के आधार पर UI कैसा होना चाहिए। यह phase pure रहना चाहिए। इसमें manually DOM बदलना, subscription शुरू करना या request भेजना जैसे side effects नहीं करने चाहिए। React कुछ परिस्थितियों में render work को दोबारा कर सकता है, इसलिए render logic repeatable होना चाहिए।

---

## 15. What happens during the commit phase?

### Definition
The commit phase is when React applies the selected changes to the host environment, such as the DOM, and performs commit-related work.

### Simple Explanation — English
After React has calculated the next UI, it commits the necessary DOM changes. React also runs certain lifecycle-related work around the commit, including layout Effects at the appropriate point. Passive `useEffect` callbacks run after the commit according to React's scheduling. The important interview distinction is: render calculates; commit applies.

### सरल व्याख्या — हिंदी
React पहले यह calculate करता है कि UI में क्या बदलना है। उसके बाद commit phase में आवश्यक changes actual DOM में apply किए जाते हैं। Commit के आसपास layout effects जैसे काम होते हैं, जबकि सामान्य `useEffect` callbacks commit के बाद schedule होते हैं। आसान तरीके से याद रखें: **render = क्या बदलना है तय करना, commit = बदलाव लागू करना।**

---

## 16. What is reconciliation in React?

### Definition
Reconciliation is the process React uses to compare the previous rendered tree with the next rendered result and determine what work is needed to update the UI.

### Simple Explanation — English
When state or props change, React generates a new description of the UI. It then uses reconciliation to determine what can stay the same and what needs to change. Element type, component identity, and keys are important parts of this process. Reconciliation helps React update the UI without rebuilding everything unnecessarily.

### सरल व्याख्या — हिंदी
जब props या state बदलते हैं, React UI का नया description बनाता है। Reconciliation में React पुराने और नए result के बीच यह तय करता है कि कौन-सी चीज same रह सकती है और कहाँ बदलाव चाहिए। Element type, component identity और keys इसमें महत्वपूर्ण भूमिका निभाते हैं।

---

## 17. What is the virtual DOM, and what problem does it address?

### Definition
The virtual DOM is a common term for the in-memory representation of React elements that React uses while determining UI updates.

### Simple Explanation — English
The virtual DOM is not the browser DOM and is not simply a magic faster copy of it. React uses JavaScript representations of the UI to calculate changes before committing necessary updates to the real DOM. This declarative approach lets developers describe the desired UI rather than manually managing every DOM change.

### सरल व्याख्या — हिंदी
Virtual DOM browser का actual DOM नहीं होता। यह UI के elements को memory में represent करने की एक सामान्य अवधारणा है, जिसका उपयोग React update process में करता है। React पहले यह तय करता है कि UI में क्या बदलाव चाहिए और फिर आवश्यक changes real DOM में commit करता है।

---

## 18. How does React decide which parts of the UI need to change?

### Definition
React uses reconciliation and component identity rules to determine which parts of the rendered tree can be reused and which need to be updated, inserted, removed, or replaced.

### Simple Explanation — English
React looks at the previous and next element trees. Matching element types can often be updated in place, while a different type can cause the previous subtree to be replaced. Keys help React match items correctly in lists. React then commits the necessary changes rather than blindly rebuilding the entire DOM tree.

### सरल व्याख्या — हिंदी
React पुराने और नए UI descriptions की तुलना करके तय करता है कि कौन-सा हिस्सा reuse किया जा सकता है और कहाँ update या replacement चाहिए। Same element type होने पर React अक्सर existing structure को update करता है। Lists में keys items की identity समझने में मदद करती हैं। अंत में केवल जरूरी changes DOM में लागू होते हैं।

---

## 19. What is the role of keys when rendering lists?

### Definition
A key is a stable identifier that helps React identify which list item corresponds to which item across renders.

### Simple Explanation — English
Suppose a list changes from `[A, B, C]` to `[X, A, B, C]`. With stable keys, React can understand that A, B, and C are existing items and X is new. Keys are especially important when items are inserted, removed, reordered, or when the items contain their own state.

### सरल व्याख्या — हिंदी
Key React को यह पहचानने में मदद करती है कि list में कौन-सा item पुराने और नए render में वही item है। जब items add, remove या reorder होते हैं, stable keys React को सही identity बनाए रखने में मदद करती हैं। खासकर तब यह बहुत महत्वपूर्ण है जब list item के अंदर अपनी state हो।

---

## 20. Why is using the array index as a key sometimes problematic?

### Definition
Using an array index as a key can be problematic when the order of list items can change because the index represents position, not stable item identity.

### Simple Explanation — English
Suppose `[A, B, C]` becomes `[X, A, B, C]`. Index-based keys shift: A was key 0 and becomes key 1. React may then associate component state with the wrong item. This can cause incorrect input values, selection, focus, or other stateful behavior. Index keys are safer only when the list is truly static or its order and membership never change.

### सरल व्याख्या — हिंदी
Array index item की identity नहीं बल्कि उसकी position बताता है। अगर list में नया item शुरुआत में जुड़ता है या items reorder होते हैं, तो indices बदल जाते हैं। इससे React गलत item के साथ component state जोड़ सकता है, जिससे input value, selection या focus जैसी समस्याएँ हो सकती हैं।

---

## 21. What happens when a key changes between renders?

### Definition
When a component's key changes, React treats it as a different component identity at that position and can remove the old instance and create a new one.

### Simple Explanation — English
A changed key is one way to intentionally reset component state. For example, rendering `<Form key={userId} />` means a change in `userId` gives the Form a new identity. Its previous local state is not preserved as the same component instance. This can be useful for resetting forms or other stateful UI.

### सरल व्याख्या — हिंदी
जब component की key बदलती है, React उसे वही पुराना component नहीं मानता। वह नई identity के रूप में treat कर सकता है, इसलिए पुराने component की local state preserve नहीं होती और नई state से component बनता है। यह form या किसी stateful UI को reset करने के लिए उपयोगी हो सकता है।

---

## 22. How does React preserve or reset component state?

### Definition
React preserves state when it recognizes the same component identity in the same logical position, and resets state when that identity changes or the component is removed.

### Simple Explanation — English
React does not preserve state simply because the JSX looks similar. Identity matters. Component type, position in the rendered tree, and keys affect whether state is preserved. If you replace a component with a different type or give it a different key, React can treat it as a new component and reset its state.

### सरल व्याख्या — हिंदी
React state को preserve करने के लिए component की identity देखता है। JSX देखने में similar होना पर्याप्त नहीं है। Component type, tree में उसकी position और key महत्वपूर्ण हैं। अगर type या key बदल जाए, या component remove होकर फिर नया बने, तो React उसे नया component मानकर state reset कर सकता है।

---

## 23. How does component position in the render tree affect state preservation?

### Definition
React associates state with a component's position and identity in the rendered tree, so changing where a component exists can change whether its state is preserved.

### Simple Explanation — English
Consider two branches such as `condition ? <Counter /> : <Counter />`. Because the same component type can occupy the same logical position, its state can be preserved. But if a component moves between different positions or its identity changes, React may preserve different state or reset it. Understanding tree position helps explain many surprising state behaviors.

### सरल व्याख्या — हिंदी
React state को rendered tree में component की position और identity से जोड़ता है। इसलिए केवल यह देखना पर्याप्त नहीं है कि code में component का नाम same है। अगर component दूसरी position या अलग identity में चला जाए, तो state preservation का behavior बदल सकता है। यही कारण है कि tree structure को समझना जरूरी है।

---

## 24. What is conditional rendering in React?

### Definition
Conditional rendering means rendering different UI based on a condition.

### Simple Explanation — English
React uses normal JavaScript conditions for this. You can use `if`, the ternary operator, or `&&`. For example, `isLoggedIn ? <Dashboard /> : <Login />`. The important point is that React does not have a separate template language for conditions; JavaScript expressions determine what elements are returned.

### सरल व्याख्या — हिंदी
Conditional rendering का मतलब condition के आधार पर अलग-अलग UI दिखाना है। React में इसके लिए normal JavaScript का उपयोग किया जाता है, जैसे `if`, ternary `? :` और `&&`। उदाहरण के लिए logged-in user को Dashboard और बाकी users को Login page दिखाया जा सकता है।

---

## 25. What is the difference between rendering `null`, `false`, and an empty fragment?

### Definition
`null` and `false` render no visible DOM node, while an empty fragment also adds no DOM wrapper but is a React fragment container.

### Simple Explanation — English
Returning `null` is commonly used when a component should render nothing. `false` is also rendered as nothing in JSX, which is why patterns like `{condition && <Modal />}` work. An empty fragment `<> </>` is a fragment with no children and also produces no extra DOM element. They are similar visually but have different meanings in code.

### सरल व्याख्या — हिंदी
`null` और `false` UI में कोई visible DOM node render नहीं करते। इसलिए `{condition && <Modal />}` जैसा code काम करता है। Empty Fragment भी कोई extra DOM wrapper नहीं बनाता। फर्क यह है कि fragment एक container concept है, जबकि `null` का मतलब component से कुछ भी render न करना है।

---

## 26. How do fragments work in React?

### Definition
A Fragment lets you group multiple React elements without adding an extra DOM element.

### Simple Explanation — English
Normally a component returning multiple sibling elements needs a single parent. A Fragment solves this without creating something like an extra `<div>`. You can write `<>...</>` or `<React.Fragment>...</React.Fragment>`. Fragments are useful when an extra wrapper would affect CSS, layout, semantics, or the DOM structure.

### सरल व्याख्या — हिंदी
Fragment कई elements को एक group में रखने देता है बिना extra DOM element बनाए। उदाहरण के लिए `<div>` wrapper जोड़ने की जरूरत हो सकती है, लेकिन उससे layout या CSS प्रभावित हो सकता है। ऐसे cases में `<>...</>` या `<React.Fragment>...</React.Fragment>` उपयोगी है।

---

## 27. What is the difference between `<>...</>` and `React.Fragment`?

### Definition
Both represent React fragments, but the short syntax `<>...</>` cannot receive a key, while `React.Fragment` can receive a key.

### Simple Explanation — English
For ordinary grouping, `<>...</>` is shorter and convenient. When a Fragment itself needs a key, commonly inside a mapped list, use `<React.Fragment key={item.id}>...</React.Fragment>`. The two forms have the same basic purpose of grouping children without creating an extra DOM wrapper.

### सरल व्याख्या — हिंदी
दोनों Fragment का ही काम करते हैं और extra DOM element नहीं बनाते। लेकिन short syntax `<>...</>` में key नहीं दे सकते। अगर Fragment को key की जरूरत हो, जैसे list में multiple elements return करते समय, तो `<React.Fragment key={id}>...</React.Fragment>` का उपयोग करना चाहिए।

---

## 28. What are children props in React?

### Definition
`children` is a special prop that contains whatever React nodes are placed between a component's opening and closing tags.

### Simple Explanation — English
For example, in `<Card><Button /></Card>`, the `Card` component receives the `Button` as `children`. This makes wrapper components highly composable. A component can control layout or behavior while allowing callers to decide what content appears inside it.

### सरल व्याख्या — हिंदी
जब हम component को opening और closing tags के बीच content देते हैं, तो वह content `children` prop के रूप में मिलता है। जैसे `<Card><Button /></Card>` में `Button`, `Card` का `children` है। इससे wrapper components बहुत reusable और flexible बनते हैं।

---

## 29. How do you pass components as props?

### Definition
You can pass a component type, a React element, or a render function through props, depending on the required behavior.

### Simple Explanation — English
For example, a component can receive `icon={SearchIcon}` and render `<Icon />`, or receive `content={<UserCard />}` and render `{content}`. Passing a component type is useful when the receiving component controls how it is instantiated. Passing an element is useful when the caller already created the UI. Choose the form that matches the required flexibility.

### सरल व्याख्या — हिंदी
आप props के माध्यम से component type या already-created React element pass कर सकते हैं। जैसे `icon={SearchIcon}` देकर child component खुद `<Icon />` render कर सकता है। दूसरी तरफ `content={<UserCard />}` में caller पहले से element बना देता है। किस रूप का उपयोग करना है, यह control और flexibility की जरूरत पर निर्भर करता है।

---

## 30. What is composition in React, and why is it important?

### Definition
Composition means building complex UIs by combining smaller components rather than relying on inheritance to share UI structure.

### Simple Explanation — English
For example, a `Modal` can accept `children`, a `Header` can accept an action area, and a `Card` can accept custom content. Each component handles its own responsibility while composition lets another component decide what goes inside it. This usually creates flexible components with fewer hard-coded assumptions.

### सरल व्याख्या — हिंदी
Composition का मतलब छोटे components को जोड़कर बड़े UI बनाना है। जैसे `Modal` अपने अंदर `children` ले सकता है और `Card` अलग-अलग content accept कर सकता है। इससे component के अंदर हर use case hard-code नहीं करना पड़ता। Result में components ज्यादा flexible और reusable बनते हैं।

---

# Components, Props & Data Flow

## 31. How does data flow between parent and child components in React?

### Definition
React primarily uses one-way data flow, where a parent passes data and callbacks to a child through props.

### Simple Explanation — English
The parent owns or receives some data and passes it down. The child reads that data through props. If the child needs to request a change, the parent can pass a callback such as `onSave`. The child calls the callback, and the parent updates state and sends new props down. This makes data flow easier to understand and debug.

### सरल व्याख्या — हिंदी
React में सामान्य data flow parent से child की ओर होता है। Parent props के माध्यम से data और callback child को देता है। Child सीधे parent की state नहीं बदलता; वह callback call कर सकता है। Parent state update करता है और नया data फिर child को props के रूप में भेजता है।

---

## 32. How do you pass data from a child component to its parent?

### Definition
A child usually sends data to a parent by calling a callback function passed from the parent through props.

### Simple Explanation — English
For example, the parent passes `onSelect={handleSelect}`. When the user clicks an item, the child calls `onSelect(item)`. The parent receives the item and can update its state. React does not provide a built-in “child-to-parent state setter”; the common pattern is callback-based communication.

### सरल व्याख्या — हिंदी
Child से parent को data भेजने के लिए parent एक callback prop pass करता है। उदाहरण के लिए `onSelect={handleSelect}`। Child user action के समय `onSelect(item)` call करता है। Parent उस data को receive करके अपनी state update कर सकता है।

---

## 33. What is prop drilling, and when does it become a problem?

### Definition
Prop drilling is passing the same data or callbacks through multiple intermediate components that do not actually need them, only so a deeper component can receive them.

### Simple Explanation — English
Imagine `App → Layout → Sidebar → UserMenu`, while only `UserMenu` needs the user object. Passing `user` through every layer can make component APIs noisy and tightly coupled. It becomes a problem when the prop chain is deep, repeated, frequently changing, or makes refactoring difficult. Small amounts of prop passing are completely normal.

### सरल व्याख्या — हिंदी
Prop drilling तब होता है जब किसी deep child तक data पहुँचाने के लिए बीच के कई components से वही prop pass करना पड़ता है, जबकि उन बीच वाले components को data की जरूरत नहीं होती। इससे APIs messy हो सकती हैं। लेकिन हर prop passing prop drilling problem नहीं है; छोटा और स्पष्ट parent-child flow सामान्य है।

---

## 34. What are the common alternatives to prop drilling?

### Definition
Common alternatives include React Context, state-management libraries, composition, and restructuring state/component boundaries.

### Simple Explanation — English
The correct alternative depends on the problem. Context can share values such as theme, locale, or authentication-related data across a subtree. A state library can help when many distant parts of an application need coordinated state. Composition can sometimes remove the need to pass data through unrelated layers. Do not introduce global state only to avoid a couple of props.

### सरल व्याख्या — हिंदी
Prop drilling कम करने के लिए Context, state-management libraries, composition या component structure को बेहतर करना उपयोगी हो सकता है। Context पूरे subtree में कुछ common values उपलब्ध करा सकता है। Complex shared state के लिए Redux Toolkit जैसे tools उपयोग किए जा सकते हैं। लेकिन केवल कुछ props बचाने के लिए global state बनाना जरूरी नहीं है।

---

## 35. When should you lift state up?

### Definition
Lift state up when multiple components need to read or coordinate the same changing data and there is a natural common owner for it.

### Simple Explanation — English
Suppose two sibling components need the selected product. Instead of maintaining separate copies and trying to synchronize them, move the selected product state to their nearest appropriate common parent. The parent becomes the source of truth and passes the value and callbacks to the children.

### सरल व्याख्या — हिंदी
जब दो या अधिक components को एक ही changing data की जरूरत हो, तो उस state को उनके suitable common parent में रखा जा सकता है। इससे एक ही source of truth रहता है। Parent state manage करता है और children को value तथा callbacks props से देता है।

---

## 36. What is the difference between local state and shared state?

### Definition
Local state is used by one component or a small local subtree, while shared state is intentionally made available to multiple components or features.

### Simple Explanation — English
A dropdown's open/closed state is usually local because only the dropdown cares about it. A shopping cart may be shared because header, cart page, checkout, and product pages can all need it. The key is ownership and scope: keep state as close as possible to where it is needed without duplicating the source of truth.

### सरल व्याख्या — हिंदी
Local state उस data के लिए होती है जिसकी जरूरत एक component या छोटे subtree को होती है। Shared state तब उपयोगी है जब कई components को एक ही data चाहिए। उदाहरण के लिए dropdown की `open` state local हो सकती है, जबकि shopping cart कई pages में shared हो सकता है।

---

## 37. How do you decide which component should own a piece of state?

### Definition
The best state owner is usually the lowest component in the tree that needs to coordinate all consumers of that state.

### Simple Explanation — English
First identify every component that reads or changes the state. Then find their nearest suitable common owner. Keep state there if the ownership remains clear. If completely unrelated areas need the same state or it must survive across broader application boundaries, Context or an external state solution may be more appropriate.

### सरल व्याख्या — हिंदी
सबसे पहले देखें कि कौन-कौन से components state को read और update करते हैं। फिर उनका सबसे नजदीकी common owner खोजें और state वहीं रखें। इससे state unnecessary तरीके से ऊपर नहीं जाती। अगर state बहुत दूर-दूर के unrelated features को चाहिए, तब Context या external state-management solution पर विचार किया जा सकता है।

---

## 38. What is a controlled component?

### Definition
A controlled component is a UI component whose important value is controlled by React state or another explicit state owner.

### Simple Explanation — English
For an input, a controlled approach looks like `<input value={name} onChange={e => setName(e.target.value)} />`. React state is the source of truth for the input value. This makes validation, conditional behavior, formatting, and synchronization easier because the current value is explicitly available in React state.

### सरल व्याख्या — हिंदी
Controlled component में input की value React state से control होती है। जैसे `<input value={name} onChange={...} />`। यहाँ `name` state source of truth है। इसका फायदा है कि validation, formatting और conditional behavior आसानी से manage किया जा सकता है।

---

## 39. What is an uncontrolled component?

### Definition
An uncontrolled component lets the underlying DOM maintain its current value, with React accessing it when needed, commonly through a ref.

### Simple Explanation — English
For example, `<input defaultValue="John" ref={inputRef} />` can be read through `inputRef.current.value` when the form is submitted. React is not updating the value on every keystroke. Uncontrolled inputs can be useful for simple forms or integrations where keeping every field in React state is unnecessary.

### सरल व्याख्या — हिंदी
Uncontrolled component में input की current value DOM खुद maintain करता है। React जरूरत पड़ने पर ref के माध्यम से value पढ़ सकता है। उदाहरण के लिए form submit होने पर `inputRef.current.value` लिया जा सकता है। Simple forms या कुछ external integrations में यह approach उपयोगी हो सकती है।

---

## 40. When would you choose a controlled input over an uncontrolled input?

### Definition
Choose a controlled input when React needs to own and react to the input's value during user interaction.

### Simple Explanation — English
Controlled inputs are useful when you need live validation, conditional UI, dynamic formatting, values that affect other components, or precise synchronization with application state. Uncontrolled inputs are reasonable when the form is simple and you mostly need the value at submit time. The decision should be driven by the application's requirements, not by a rule that one approach is always superior.

### सरल व्याख्या — हिंदी
जब input की value के आधार पर तुरंत validation, conditional UI, formatting या दूसरे components का behavior बदलना हो, तब controlled input उपयोगी है। अगर केवल form submit होने पर value चाहिए और interaction के दौरान React को value manage करने की जरूरत नहीं है, तो uncontrolled approach पर्याप्त हो सकती है।

---

## 41. How do `defaultValue` and `value` differ in form inputs?

### Definition
`value` controls the current input value from React, while `defaultValue` sets the initial value for an uncontrolled input.

### Simple Explanation — English
With `value`, React controls what appears in the input, so the value should normally be updated through `onChange`. With `defaultValue`, the DOM starts with the given value but manages subsequent changes itself. Changing `defaultValue` later does not work like continuously controlling the input with `value`.

### सरल व्याख्या — हिंदी
`value` का उपयोग input को controlled बनाने के लिए किया जाता है। React current value को control करता है। `defaultValue` initial value देता है, लेकिन उसके बाद input DOM के अनुसार बदलता रहता है। इसलिए `defaultValue` और `value` को interchangeable नहीं समझना चाहिए।

---

## 42. What causes an uncontrolled-to-controlled warning in React?

### Definition
This warning commonly occurs when an input starts without a defined controlled value and later receives a defined value, changing its control mode during its lifetime.

### Simple Explanation — English
A common example is `value={user?.name}`, where the first render gives `undefined` and a later render gives a string. React sees the input as uncontrolled first and controlled later. Use a stable initial value such as `value={user?.name ?? ''}` when the input is intended to be controlled.

### सरल व्याख्या — हिंदी
यह warning तब आ सकती है जब input पहली render में `undefined` जैसी value के कारण uncontrolled हो और बाद में string जैसी defined value मिलने पर controlled बन जाए। Controlled input के लिए शुरुआत से stable value दें, जैसे `value={user?.name ?? ''}`। इससे control mode बदलता नहीं है।

---

## 43. How would you structure props for a reusable component?

### Definition
Reusable component props should represent the component's actual public API, stay focused, and avoid exposing unnecessary implementation details.

### Simple Explanation — English
For a reusable `Button`, useful props might include `variant`, `disabled`, `onClick`, and `children`. Avoid passing a huge object when the component only needs two fields. Name props by behavior or meaning rather than by a specific page. A good API is predictable, flexible, and difficult to misuse.

### सरल व्याख्या — हिंदी
Reusable component के props उसके public API की तरह होने चाहिए। केवल वही data और behavior expose करें जिसकी component को जरूरत है। उदाहरण के लिए Button में `variant`, `disabled`, `onClick` और `children` पर्याप्त हो सकते हैं। Unnecessary बड़े objects pass करने से component tightly coupled हो सकता है।

---

## 44. How do you avoid passing too many unrelated props to a component?

### Definition
Keep components focused, split responsibilities when appropriate, and design props around the component's real responsibilities instead of passing a large collection of unrelated data.

### Simple Explanation — English
If a component receives `user`, `cart`, `theme`, `permissions`, `analytics`, `filters`, and many unrelated callbacks, it may be doing too much. Extract smaller components or create domain-focused props. Also consider composition so the parent can supply a UI section directly instead of making the child understand every possible use case.

### सरल व्याख्या — हिंदी
अगर किसी component को बहुत सारे unrelated props मिल रहे हैं, तो यह संकेत हो सकता है कि component बहुत ज्यादा जिम्मेदारियाँ संभाल रहा है। उसे छोटे components में बाँटें या focused props दें। Composition भी मदद कर सकता है, जिससे parent custom UI directly provide कर सके।

---

## 45. What is prop spreading, and what risks can it introduce?

### Definition
Prop spreading means passing all properties of an object into a component or element using syntax such as `{...props}`.

### Simple Explanation — English
It can reduce repetitive code, especially when forwarding native element props: `<button {...buttonProps}>`. But uncontrolled spreading can expose unexpected props, overwrite explicitly set values depending on ordering, make the component API unclear, and accidentally pass invalid attributes to DOM elements. Spread only when you understand and control the object being forwarded.

### सरल व्याख्या — हिंदी
Prop spreading में object के सारे properties को `{...props}` के जरिए आगे pass किया जाता है। यह convenient है, खासकर native attributes forward करने में। लेकिन इसमें unwanted props pass हो सकते हैं, explicit values overwrite हो सकती हैं और component का API unclear हो सकता है। इसलिए spread का उपयोग सोच-समझकर करें।

---

## 46. How can you provide default behavior for optional props?

### Definition
Default behavior can be provided with JavaScript default parameters, default values during destructuring, or fallback logic when a prop is absent.

### Simple Explanation — English
For example: `function Button({ variant = 'primary' }) { ... }`. This means callers can omit `variant` and the component still behaves predictably. For values that may be `null` or `undefined`, nullish coalescing such as `label ?? 'Submit'` can also be useful. Choose a default that matches the component's API contract.

### सरल व्याख्या — हिंदी
Optional prop के लिए default value destructuring में दी जा सकती है, जैसे `variant = 'primary'`। अगर prop नहीं दिया गया, तो component primary behavior use करेगा। `null` या `undefined` की स्थिति में `??` fallback भी उपयोगी है। Default हमेशा component के intended behavior से match होना चाहिए।

---

## 47. What are compound components in React?

### Definition
Compound components are a group of related components designed to work together through shared state, context, or a coordinated API.

### Simple Explanation — English
A common example is an accessible Tabs API such as `<Tabs><Tabs.List>...</Tabs.List><Tabs.Panel>...</Tabs.Panel></Tabs>`. The parent coordinates behavior while child components provide flexible pieces of the UI. This pattern is useful for reusable components where consumers need control over structure without controlling the internal implementation.

### सरल व्याख्या — हिंदी
Compound components कई related components का group होते हैं जो मिलकर एक feature बनाते हैं। जैसे Tabs में `Tabs`, `Tabs.List` और `Tabs.Panel` मिलकर काम कर सकते हैं। Parent shared behavior manage करता है और child components UI structure को flexible रखते हैं। यह reusable UI libraries में बहुत उपयोगी pattern है।

---

## 48. When would you use the render props pattern?

### Definition
The render props pattern passes a function as a prop so the component can provide data or behavior while the caller decides what UI to render.

### Simple Explanation — English
For example, a component might provide `{x, y}` mouse position to a render function, while the caller decides whether to display a tooltip, dot, or coordinates. Render props were an important pre-Hooks reuse pattern and are still valid. In modern React, custom Hooks and composition often provide a simpler solution for logic reuse.

### सरल व्याख्या — हिंदी
Render props में component एक function prop लेता है और उसे data या behavior देता है। Caller तय करता है कि उस data के आधार पर कौन-सा UI render करना है। यह reusable logic के लिए पुराने और उपयोगी patterns में से एक है। Modern React में कई cases में custom Hooks इसका simpler alternative हो सकते हैं।

---

## 49. How does component composition compare with inheritance in React?

### Definition
React generally favors composition, where components are combined and configured through props and children, rather than UI inheritance hierarchies.

### Simple Explanation — English
Instead of creating `SpecialButton extends Button extends Component`, you can build a Button from smaller behavior and presentational pieces or allow customization through props and children. Composition makes relationships more explicit and usually avoids deep inheritance chains. React's component model is designed around combining components.

### सरल व्याख्या — हिंदी
React में inheritance की लंबी hierarchy बनाने के बजाय composition को प्राथमिकता दी जाती है। Components को props, children और छोटे reusable pieces के साथ combine किया जाता है। इससे code ज्यादा flexible रहता है और deep inheritance chains से आने वाली complexity कम होती है।

---

## 50. How would you design a reusable modal component used by multiple features?

### Definition
A reusable modal should separate generic modal behavior and accessibility from feature-specific content, state, and business logic.

### Simple Explanation — English
I would give the modal a focused API such as `open`, `onClose`, `title`, `children`, and perhaps `actions`. The modal should handle concerns such as dialog semantics, focus management, escape handling, and proper layering. Feature components should provide the actual content and business logic. For more complex apps, an existing accessible dialog primitive can reduce accessibility risks.

### सरल व्याख्या — हिंदी
Reusable Modal में generic behavior और feature-specific logic अलग रखना चाहिए। API में `open`, `onClose`, `title`, `children` और जरूरत के अनुसार `actions` जैसे props रखे जा सकते हैं। Modal को accessibility, focus management, Escape handling और dialog behavior संभालना चाहिए। Feature component केवल अपना content और business logic दे।

---

# End of Set 1

**Coverage:** React fundamentals, JSX, elements/components, rendering, reconciliation, keys, state identity, conditional rendering, fragments, children, composition, props, data flow, state ownership, controlled/uncontrolled inputs, reusable component design, compound components, render props, and modal architecture.
