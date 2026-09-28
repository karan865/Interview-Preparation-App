import { SeedQuestion } from '../types';

export const advancedQuestionsBank1Questions: SeedQuestion[] = [
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "1. Difference between `map`, `filter`, `reduce`, `forEach`, and `sort` methods. Also explain what a higher-order function is.",
    "answer": "Higher order function - a function which takes other function as argument or return a function is known as Higher Order function.\n\neg ->\nfunction callBackfun (value) {\n    console.log(value);\n}\n\nfunction higherOrderFunTwo (callBackfun) {\n    return callBackfun;\n}\n\nhigherOrderFunTwo (callBackfun (\"I am Best\"));\n\n-> forEach loop\n\nlet Students = ['john', 'sana', 'jack'];\n\nStudents.forEach(functionOne);\n\nfunction functionOne (item) {\n    console.log(item);\n}\n\n-> filter method -> koi array se koi filter kar sakte hai koi condition de ke.\n\nconst ages = [33,12,20,54,10]\n\nconst canDrive = ages.filter(function(age) {\n    if (age >= 18) return true;\n})\n\nconsole.log(canDrive)\n\n-> Map method -> jab ek array se new array chahiye on the basis of its property.\n\n-> sort method -> array ko sort karta hai ascending or descending order.\n\n-> Reduce method -> koi v array ko sort kar sakte hai single value me kar deta hai.\n\nconst addno = ages.reduce(function(total,age) {\n    return total + age;\n}, 1)\n\n-> kon sa index se start karna hai.\n\nconsole.log(addno)",
    "explanation": "A higher-order function is a function that takes another function as an argument or returns a function.\n\n- `forEach()` runs a function for every item.\n- `filter()` creates a new array containing items that satisfy a condition.\n- `map()` creates a new array by transforming every item.\n- `sort()` changes the array order.\n- `reduce()` combines array values into one final result.\n\nThe main difference is what each method is used for: looping, filtering, transforming, sorting, or reducing.",
    "explanationHindi": "Higher-order function woh function hai jo kisi doosre function ko argument ke roop mein leta hai ya function return karta hai.\n\n- `forEach()` har item par function chalata hai.\n- `filter()` condition match karne wale items ka naya array banata hai.\n- `map()` har item ko transform karke naya array banata hai.\n- `sort()` array ka order change karta hai.\n- `reduce()` multiple values ko combine karke ek final value bana sakta hai.\n\nSimple way mein: `forEach` = loop, `filter` = select, `map` = transform, `sort` = arrange, `reduce` = combine.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "2. What is hoisting in JavaScript?",
    "answer": "Hoisting in JS ? -> page me jitna v variable declared hai wo sab ko top pe move kar diya jata hai, or wo sab ko undefined set kar diya jata hai.\n\neg ->\nconsole.log(a); -> ye aayega undefined\n\nvar a;\na = 10;\nvar b;\n\n-> in background ye ho jayega\n\nvar a = undefined\nvar b = undefined\nconsole.log(a); -> undefined\na = 10;\nconsole.log(a) -> 10",
    "explanation": "Hoisting means JavaScript processes declarations before executing the code in that scope. With `var`, the declaration is available before the assignment, so reading it can give `undefined`. `let` and `const` are also hoisted internally, but they are not accessible before initialization because of the temporal dead zone.",
    "explanationHindi": "Hoisting ka matlab hai JavaScript execution se pehle declarations ko process karta hai. `var` ke case mein declaration pehle available hoti hai, lekin value assignment baad mein hoti hai, isliye pehle access karne par `undefined` mil sakta hai. `let` aur `const` ko declaration se pehle access nahi kar sakte.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "3. What is the Event Loop in JavaScript and Node.js?",
    "answer": "in the world of javascript, the event loop is a mechanism that enables asynchronous operation to be executed in a non-blocking manner.\n\n* hamlog jo asynchronous operations perform karte hai wo sab ko event loop handle karta hai, or non-blocking banata hai.",
    "explanation": "The Event Loop coordinates JavaScript work so asynchronous callbacks can run without blocking the main execution flow. JavaScript runs synchronous code first, while asynchronous work is handled through the runtime and its task queues. When the call stack becomes available, queued callbacks can be processed.",
    "explanationHindi": "Event Loop JavaScript mein asynchronous work ko manage karta hai. Synchronous code pehle execute hota hai aur asynchronous operations ka callback queue mein wait kar sakta hai. Jab call stack free hota hai, Event Loop queued callback ko execution ke liye bhejta hai. Isi wajah se JavaScript non-blocking behavior provide kar sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "4. Promises or `setTimeout` — which one executes first and why?",
    "answer": "When javascript engine finishes executing the main Script (synchronous code) it processes :\n1). All microtasks first (like promise.then)\n2). then move to macrotasks (like setTimeout).\n\nThus, promise (or any other micro-task) will execute before a setTimeout callback.\n\neg ->\nconsole.log(\"Start\");\n\nsetTimeout(() => {\n    console.log(\"setTimeout\");\n}, 0);\n\nPromise.resolve().then(() => {\n    console.log(\"promise\");\n});\n\nconsole.log(\"end\");\n\nOutput\n\nStart\nend\npromise\nsetTimeout",
    "explanation": "A resolved Promise callback runs before a `setTimeout` callback because Promise reactions are microtasks, while `setTimeout` callbacks are scheduled as tasks/macrotasks. After the current synchronous code finishes, the runtime processes microtasks before moving to the timer task.",
    "explanationHindi": "Resolved Promise ka callback `setTimeout` se pehle execute hota hai kyunki Promise ka `.then()` microtask queue mein jata hai. `setTimeout` callback task/macrotask queue mein jata hai. Pehle synchronous code complete hota hai, phir microtasks process hote hain, aur uske baad timer callback run hota hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "5. What is a Pure Component?",
    "answer": "a pure component in React is a component that only re-renders when its props or state change. it is a performance optimization technique to prevent unnecessary renders and improve application efficiency.",
    "explanation": "A Pure Component is a React optimization concept. A class component extending `React.PureComponent` can skip a render when props and state are shallowly equal. It is useful when unnecessary re-renders are a real performance concern.",
    "explanationHindi": "Pure Component React ka performance optimization concept hai. Agar props aur state shallow comparison ke according same hain, to unnecessary re-render skip kiya ja sakta hai. Iska use performance improve karne ke liye hota hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "6. What is the `this` keyword in JavaScript?",
    "answer": "this keyword refers to an object where it is called.\n\neg ->\nconst obj = {\n    name = john,\n    greet() {\n        console.log(this.name); //john\n    }\n};\n\nobj.greet();",
    "explanation": "`this` refers to the value associated with the current function call. In the example, `obj.greet()` calls `greet` as a method of `obj`, so `this` refers to `obj` and `this.name` gives `john`. The exact value of `this` depends on how the function is called.",
    "explanationHindi": "`this` us object/value ko refer karta hai jo function call ke context se decide hota hai. `obj.greet()` mein `greet` ko `obj` ke method ke roop mein call kiya gaya hai, isliye `this` `obj` ko refer karta hai. `this` ka value function ko kaise call kiya gaya hai uspar depend karta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "7. What is a closure in JavaScript?",
    "answer": "in closure inner function has access to the variables of its outer function.\n\neg ->\nfunction outer (outerVariable) {\n    return function inner() {\n        console.log(outerVariable);\n    }\n}",
    "explanation": "A closure happens when an inner function remembers and can access variables from its outer function even after the outer function has finished. Closures are commonly used for data privacy, function factories, callbacks, and maintaining state between calls.",
    "explanationHindi": "Closure mein inner function apne outer function ke variables ko yaad rakhta hai aur access kar sakta hai, even jab outer function execute ho chuka ho. Closures private data, callbacks aur state maintain karne ke liye useful hote hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "8. How do you pass data from a child component to a parent component?",
    "answer": "parent.jsx\n\nimport { useState } from 'react'\nimport child from './child'\n\nconst Parent = () => {\n    const [a, setA] = useState(\"parent\")\n    return (\n        <>\n            I am parent\n            <Child x={a} setX={setA} />\n        </>\n    )\n}\n\nexport default Parent\n\nchild.jsx\n\nconst child = (props) => {\n    return (\n        <>\n            <p>I am child</p>\n            <button onClick={() => props.setX(\"parent\")}>Click</button>\n        </>\n    )\n}\n\nexport default child\n\n-> set state ko pass kar rahe hai, child se parent mein change kar rahe hai.",
    "explanation": "React mein child directly parent ka state change nahi karta. Parent ek callback function, usually a state setter, child ko prop ke through pass karta hai. Child us callback ko call karta hai aur required data parent tak bhej deta hai. This is a common form of upward communication.",
    "explanationHindi": "Child component parent ka state direct change nahi karta. Parent ek function child ko prop ke through deta hai. Child us function ko call karta hai aur data parent ko bhej deta hai. React mein child-to-parent communication ke liye callback props common approach hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "9. What is the difference between `useState()` and `useReducer()`?",
    "answer": "useState() -> use for Primitive type = number, string, Boolean\n    -> manage one or two State Variable\n    -> use for local component state\n\nuseReducer() -> use for object and arrays\n    -> manage multiple states (loading, error, data)\n    -> use for global state management.",
    "explanation": "`useState` is usually simple for local state, especially when updates are straightforward. `useReducer` is useful when multiple related values change through defined actions or when state transition logic becomes complex. For global state, a dedicated state-management solution is often used; `useReducer` itself does not automatically make state global.",
    "explanationHindi": "`useState` simple aur local state ke liye useful hai. `useReducer` tab useful hota hai jab multiple related states aur complex update logic ho. `useReducer` khud se global state nahi banata; global state ke liye Context ya state-management library ki zarurat ho sakti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "10. What is the difference between a dev dependency and a normal dependency?",
    "answer": "Dev Dependency -> Required only during development.\neg -> Eslint, Jest, Babble, Webpack etc.\n\nNormal dependency -> Require at runtime in production\neg -> Redux, axios, express etc.",
    "explanation": "A development dependency is mainly needed while developing, testing, linting, or building the application. A normal/runtime dependency is needed by the application when it runs in production. In npm, these are commonly stored under `devDependencies` and `dependencies` respectively.",
    "explanationHindi": "Dev dependency development, testing aur build ke time chahiye hoti hai, jaise ESLint, Jest ya Webpack. Normal dependency application ko runtime par chahiye hoti hai, jaise Axios ya Redux. `package.json` mein inki categories alag hoti hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "11. What is the difference between `package.json` and `package-lock.json`?",
    "answer": "package.json -> Store metadata of our project (basic version rakhta hai jo project ko chahiye)\n\nPackage.lock.json -> jitna v naya version ka library install karte hai wo sab package.lock.json me ja k Store hota hai.",
    "explanation": "`package.json` describes the project, its scripts, and declared dependency ranges. `package-lock.json` records the resolved dependency tree and exact versions that were installed, along with related metadata. This helps installations stay consistent across environments.",
    "explanationHindi": "`package.json` project ki basic information, scripts aur required dependencies ko describe karta hai. `package-lock.json` installed dependency tree ke exact resolved versions ko lock karta hai. Isse different machines par consistent installation milti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "12. What is ESLint?",
    "answer": "code karte time code me gadbadi hoga to wo batata hai. (learning)",
    "explanation": "ESLint is a static-analysis tool that checks JavaScript and related code for syntax problems, risky patterns, style issues, and project-specific rules. It helps developers catch problems early and keep code consistent.",
    "explanationHindi": "ESLint code ko analyze karke common mistakes, risky patterns aur coding-rule violations batata hai. Isse code quality improve hoti hai aur mistakes development ke time hi pakdi ja sakti hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "13. Canvas vs SVG.",
    "answer": "SVG is used for describing 2D graphic in XML.\n\n-> canvas draws 2D graphics with JS.",
    "explanation": "SVG is a vector-based graphics format where shapes are represented as DOM elements. Canvas is a drawing surface where JavaScript draws pixels. SVG is often convenient for scalable interactive diagrams, while Canvas is useful for frequent drawing and pixel-oriented graphics.",
    "explanationHindi": "SVG mein 2D graphics shapes/elements ke roop mein represent hote hain aur ye vector based hota hai. Canvas ek drawing surface hota hai jahan JavaScript se graphics draw ki jati hain. SVG interactive diagrams ke liye aur Canvas frequent drawing ke liye useful ho sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "14. What is CSS specificity?",
    "answer": "ek element me 2...3 css laga hua hai to kon sa apply hoga. (external sheet word is lighter)\n\n* priority -> inline -> internal -> external css\n\nAns -> <div>\n    <p class = \"red-p\">Text...</p>\n</div>\n\np {\n    color: green;\n}\n\n#red.p {\n    color:red;\n}\n\ndiv.red-p {\n    color:blue;\n}\n\n-> 10000 point to !important.\n-> 1000 to inline\n-> 100 to id\n-> 10 to class, attribute or pseudo-class\n-> 1 for element selector & pseudo element\n-> 0 for universal selector.",
    "explanation": "CSS specificity is the rule used to decide which CSS selector wins when multiple rules apply to the same element. In general, inline styles have higher specificity than IDs, IDs are higher than classes/attributes/pseudo-classes, and those are higher than element selectors. `!important` changes the priority behavior and should be used carefully.",
    "explanationHindi": "CSS specificity decide karta hai ki same element par multiple CSS rules hone par kaunsa rule apply hoga. General order mein inline style, ID, class/attribute/pseudo-class aur element selector ki specificity alag hoti hai. `!important` bahut high priority deta hai, lekin ise unnecessary use nahi karna chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "15. What is the difference between Promises and `async/await`?",
    "answer": "both are useful tools for asynchronous programming.\n• promises are suitable for simple asynchronous chains.\n• async await preferred for more complex asynchronous code.\n    -> syntax is clean.",
    "explanation": "Promises and `async/await` are both ways to handle asynchronous operations. `async/await` is syntax built on top of Promises and often makes sequential asynchronous code easier to read. Promises can be useful for chaining, composition, and direct `.then()`/`.catch()` handling.",
    "explanationHindi": "Promises aur `async/await` dono asynchronous programming ke liye use hote hain. `async/await` Promises ke upar based syntax hai aur sequential async code ko readable bana deta hai. Promises mein `.then()` aur `.catch()` ke through chaining bhi ki ja sakti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "16. What is a prototype in JavaScript?",
    "answer": "in js, prototype is a mechanism by which object can inherit properties and methods from other object.\n\n* same object ka internal property hota hai jisko humlog prototype bolte hai.\n\n-> inherited property or method.\n\nor ye properties or methods ko humlog console.log me dekh sakte hai.",
    "explanation": "A prototype is an object that another object can use as a source for inherited properties and methods. JavaScript uses prototype-based inheritance. When a property is not found directly on an object, JavaScript can look along its prototype chain.",
    "explanationHindi": "Prototype ek object hota hai jahan se doosra object properties aur methods inherit kar sakta hai. JavaScript prototype chain use karta hai. Agar property object ke andar directly nahi milti, to JavaScript prototype chain mein search kar sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "17. What is memoization in JavaScript?",
    "answer": "memoization is an optimization technique that store the result of expensive function calls and return the cached result when the same input occurs again. it helps improve performance by avoiding redundant computation.",
    "explanation": "Memoization means caching a function's result so repeated calls with the same relevant input can reuse the previous result. It is useful when a calculation is expensive and the inputs are repeated.",
    "explanationHindi": "Memoization mein expensive function ke result ko cache kiya jata hai. Agar same input dobara aaye, to calculation ko repeat karne ke bajay cached result return kiya ja sakta hai. Isse performance improve ho sakti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "18. What is event bubbling in JavaScript?",
    "answer": "Event bubbling is the process in js where an event triggered on a child element propagate up to the DOM tree.\n\n* ek parent div hai or uske andar child div hai, or child ke andar ek button hai or jab hamlog wo button me click karte hai to uska Sara parent div trigger ho jata hai, isi ko Event bubbling bolte hai.",
    "explanation": "Event bubbling means an event starts at the target element and then propagates upward through its ancestors. For example, a button click can also trigger a parent click handler unless propagation is stopped.",
    "explanationHindi": "Event bubbling mein child element par hua event parent elements ki taraf propagate hota hai. Jaise button ke click ke saath uske parent ka click handler bhi run ho sakta hai. Zarurat ho to `stopPropagation()` se bubbling roki ja sakti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "19. What is an Error Boundary in React?",
    "answer": "agar Application me koi error data hai to pura app crash ho jata hai. magar Error Boundary use karne se jis with component crash hoga jisme error aaya hai.",
    "explanation": "An Error Boundary catches certain rendering and lifecycle errors in a child component tree and shows fallback UI instead of allowing that part of the UI to break the whole application. It is commonly used around routes or major feature sections.",
    "explanationHindi": "Error Boundary child component tree ke certain rendering errors ko catch karta hai aur fallback UI show karta hai. Isse ek feature ke fail hone par poori application UI crash hone se bach sakti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "20. Explain the `every()` and `some()` methods.",
    "answer": "every() -> same condition check or ek baar v wo true ho jayega to return karega true, nhi to return karega false.\n\nsome() -> koi condition ko return karega, agar condition true ho jayega to return karega true nahi to false.\n\ntabhi every and some isliye dono nahi to false.",
    "explanation": "`every()` checks whether all elements satisfy a condition. It returns `true` only when every tested element passes.\n\n`some()` checks whether at least one element satisfies the condition. It returns `true` as soon as one matching element is found.",
    "explanationHindi": "`every()` tab `true` deta hai jab sabhi elements condition ko satisfy karte hain. Agar ek bhi fail ho jaye to `false` milta hai.\n\n`some()` tab `true` deta hai jab kam se kam ek element condition satisfy kare. Agar koi bhi match na kare to `false` milta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "21. What are the new features introduced in ES6?",
    "answer": "arrow-function\n• template literals\n• array Destructuring\n• Spread operator\n• promises (asynchronous programming)\n• modules (import/export)\n• map method",
    "explanation": "ES6 introduced many major JavaScript features such as arrow functions, template literals, destructuring, spread/rest syntax, Promises, modules, `let`/`const`, classes, and more. These features made JavaScript syntax and application development more expressive.",
    "explanationHindi": "ES6 ne JavaScript mein kaafi important features introduce kiye, jaise arrow functions, template literals, destructuring, spread/rest, Promises, modules, `let`/`const` aur classes. In features ne code ko modern aur readable banaya.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "22. What is currying in JavaScript?",
    "answer": "maan lo a function hai jo 3 argument le raha hai or hamlog chahte hai ki jab tak teeno argument nahi aa jata tab tak wo function na chale. (or 3no argument API se aa raha hai)\n\n-> to iske liye hamlog function currying ka use karenge with closure.\n\neg ->\nfunction add (a,b,c) {\n    return a+b+c;\n}\nconsole.log(add(2,5,10)); -> normal example.\n\ncurrying example\n\nfunction add(a) {\n    return function(b) {\n        return function(c) {\n            return a+b+c;\n        }\n    }\n}\n\nconsole.log(add(2)(3)(10));",
    "explanation": "Currying converts a function that normally accepts multiple arguments into a sequence of functions, where each function receives one argument and returns another function until all required arguments are available. It is often implemented using closures.",
    "explanationHindi": "Currying mein multiple arguments lene wale function ko functions ki chain mein convert kiya jata hai. Har function ek argument leta hai aur next function return karta hai. Jab saare arguments mil jate hain tab final result return hota hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "23. What is the `<iframe>` tag in HTML?",
    "answer": "the <figure> tag in HTML is used to group media element such as images, illustration, video or code snippets with their associated captions.",
    "explanation": "The PDF answer itself says `<figure>`, while the question asks about `<iframe>`. A `<figure>` element groups self-contained media or content with an optional caption. An `<iframe>` is a different HTML element used to embed another browsing context such as another page.",
    "explanationHindi": "PDF mein answer `<figure>` tag ke baare mein hai, jabki question `<iframe>` ke baare mein poochta hai. `<figure>` image, illustration, video ya code snippet ko caption ke saath group karta hai. `<iframe>` ka use kisi doosre page/browsing context ko embed karne ke liye hota hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "24. What are some of the advantages of MongoDB?",
    "answer": "Flexible Schema - unlike relational database (SQL), mongoDB does not require a fixed Schema.\n\n• mongoDB has inbuilt Support for data partitioning (sharding)\n• mongoDB is very easy to Scale and Scale down.",
    "explanation": "MongoDB uses a flexible document model, so documents in the same collection can evolve without a rigid relational table schema. It also supports horizontal scaling through sharding and can scale resources according to application needs.",
    "explanationHindi": "MongoDB ka schema flexible hota hai, isliye relational database ki tarah rigid table structure maintain karna zaroori nahi hota. MongoDB sharding support karta hai aur large applications ko horizontally scale karne mein help kar sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "25. When should you use MongoDB?",
    "answer": "• When you need a flexible schema\n• When you handle large-scale Data & High Traffic.\n• When Speed and Performance are crucial",
    "explanation": "MongoDB can be a good fit when application data changes structure frequently, when a document model maps naturally to the data, or when horizontal scaling and high-throughput workloads are important. The final choice should still depend on query patterns and consistency requirements.",
    "explanationHindi": "MongoDB tab useful ho sakta hai jab schema frequently change hota ho, data document form mein naturally fit hota ho, ya large-scale/high-traffic workload ho. Database choose karte waqt query pattern aur consistency requirements bhi dekhni chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "26. What are the data types in MongoDB?",
    "answer": "String\n-> number\n-> Boolean\n-> array\n-> Object\n-> null\n\n-> ObjectId\n-> Binary Data\n-> RegEx (regular expression)\n-> timeStamp\n-> minkey/maxkey\n\n-> Represent lowest/highest possible Value.",
    "explanation": "MongoDB supports many BSON data types, including strings, numbers, booleans, arrays, embedded documents, null, ObjectId, binary data, regular expressions, dates/timestamps, and special MinKey/MaxKey values.",
    "explanationHindi": "MongoDB mein String, Number, Boolean, Array, Object, Null, ObjectId, Binary Data, Regex, Date/Timestamp aur MinKey/MaxKey jaise BSON types hote hain. Ye alag-alag data requirements ke liye use hote hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "27. How do you perform queries in MongoDB?",
    "answer": "Semnory table\n\n-> db.collection.find() -> find all documents\n\n-> db.user.find({ $name: abc }) -> find with filter\n\n-> .sort({ field: 1 }) -> sorting\n\n-> .limit(n) & .skip(n) -> limit & skip",
    "explanation": "MongoDB queries are usually performed through collection methods such as `find()`. You can filter results using a query object, sort them, limit the number of results, and skip a number of documents for pagination-like behavior.",
    "explanationHindi": "MongoDB mein `find()` se documents search kiye ja sakte hain. Query object ke through filter laga sakte hain, `sort()` se sorting, `limit()` se result count aur `skip()` se starting documents skip kar sakte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "28. How do you delete a document in MongoDB?",
    "answer": "db.user.deleteOne({ age:25 }) -> first matching document\nuser.deleteMany({ city:'ny' }) -> all matching doc\nuser.deleteMany({}) -> delet all document in a collection\ndb.user.drop() -> Entire Collection.",
    "explanation": "`deleteOne()` removes one matching document, `deleteMany()` removes all documents matching the filter, and `drop()` removes the entire collection. A delete operation should always use a deliberate filter because it can permanently remove data.",
    "explanationHindi": "`deleteOne()` ek matching document delete karta hai. `deleteMany()` saare matching documents delete karta hai. `deleteMany({})` collection ke saare documents remove kar sakta hai, aur `drop()` poori collection delete kar deta hai. Delete operation bahut carefully use karna chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "29. How do you update a document in MongoDB?",
    "answer": "updateOne() -> update the first matching document\nupdateMany() -> update all matching Document\nreplaceOne() -> Replace an entire document\nfindOneAndUpdate() -> Return the updated document",
    "explanation": "`updateOne()` changes the first document matching the filter. `updateMany()` changes all matching documents. `replaceOne()` replaces the complete document, while `findOneAndUpdate()` finds a document, updates it, and can return the document depending on options.",
    "explanationHindi": "`updateOne()` first matching document ko update karta hai. `updateMany()` saare matching documents ko update karta hai. `replaceOne()` poora document replace karta hai, aur `findOneAndUpdate()` document ko update karke updated result return kar sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "30. How do you add data in MongoDB?",
    "answer": "insertOne() -> insert a Single Document\ninsertMany() -> Insert multiple Document.",
    "explanation": "Use `insertOne()` when you want to add one document and `insertMany()` when you want to add multiple documents in one operation.",
    "explanationHindi": "Ek document add karne ke liye `insertOne()` aur multiple documents add karne ke liye `insertMany()` use karte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "31. What are some features of MongoDB?",
    "answer": "File Storage :- It Supports an easy-to-use protocol for Storing large files and file metadata.\n\nSharding :- Sharding is the process of Spilling data up across machine.",
    "explanation": "MongoDB supports document storage and also provides GridFS for storing files larger than the normal document size limit. Sharding distributes data across multiple machines so large datasets and traffic can be handled across a cluster.",
    "explanationHindi": "MongoDB document data ke saath large files ke liye GridFS support bhi provide karta hai. Sharding data ko multiple machines par distribute karta hai, jisse large dataset aur high traffic handle karne mein help milti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "32. What are replication and sharding in MongoDB?",
    "answer": "Replication ->\njab client request karta hai or primary data base band hai to hamlog same data ko 2-3 or Server me uska Copy kar ke rakh sakte hai or primary node jab band ho ya bahut busy ho to client ko dusra Server se response bhejte hai.\n\nSharding / horizontal partition / horizontal Scaling / Scale-out\n-> Sharding is a method in mongoDB that Splits data across multiple Servers/machines to handle large data sets and high performance.",
    "explanation": "Replication keeps multiple copies of data through replica-set members, providing redundancy and availability. If the primary becomes unavailable, an eligible secondary can be elected as the new primary.\n\nSharding distributes data across multiple servers so the database can scale horizontally for large datasets and high traffic.",
    "explanationHindi": "Replication mein same data ki multiple copies replica set members par hoti hain. Agar primary unavailable ho jaye to secondary se new primary elect ho sakta hai.\n\nSharding mein data ko multiple servers/machines par distribute kiya jata hai. Isse large dataset ko horizontally scale karna easier hota hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "33. What is MongoDB Shell?",
    "answer": "Shell refers to a Command-Line interface (CLI) that allows users to interact with an operating System using text based Command.\n\n-> It allow users to query, insert, update and delete data in mongoDB Collection using CLI (Command line interface)",
    "explanation": "MongoDB Shell is a command-line environment used to interact with MongoDB. Developers and administrators can run database commands, inspect collections, query data, insert documents, update them, and delete them from the shell.",
    "explanationHindi": "MongoDB Shell ek command-line interface hai jahan se MongoDB ko commands ke through access kiya jata hai. Isse query, insert, update aur delete operations perform kar sakte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "34. What is a Document and what is a Collection in MongoDB?",
    "answer": "Document -> a document in mongodb is a single record in a collection in Binary JSON format.\n\ncollection -> a collection in mongoDB is a group of related database,\nsimilar to a table in a relational database.",
    "explanation": "A MongoDB document is one record represented using BSON. A collection is a group of related documents and is roughly comparable to a table in a relational database.",
    "explanationHindi": "MongoDB mein document ek single record hota hai jo BSON format mein store hota hai. Collection related documents ka group hoti hai. Relational database mein collection ko roughly table ke saath compare kar sakte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "35. What are WebSocket and Socket.IO?",
    "answer": "webSocket is a communication protocol that provides full-duplex, bidirectional communication b/w client and a server over a Single persistence Connection.\n\nUnlike HTTP, which follows a request -> response model. webSocket allow Real time data transfer with low latency and Reduced overhead.\n\neg -> chat application,\n-> live notification\n-> online multiplayer games\n\nSocket.io\n=> “Socket.io is a javascript library build on top of websocket that provides additional features like automatic Reconnection,\nfallbacks to HTTP polling and broadcasting, it Simplifies Real-time Communication b/w client and server.",
    "explanation": "WebSocket is a protocol that creates a persistent two-way connection between client and server, which is useful for real-time communication.\n\nSocket.IO is a library that can use WebSocket and provides additional features such as connection management, fallback transports, rooms, broadcasting, and easier event-based APIs.",
    "explanationHindi": "WebSocket client aur server ke beech persistent two-way connection provide karta hai. Ye chat, live notifications aur games jaise real-time applications ke liye useful hai.\n\nSocket.IO WebSocket ke upar additional features provide karne wali library hai, jaise reconnection, rooms, broadcasting aur convenient event-based communication.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "36. How do you update a component every second?",
    "answer": "(setInterval in useEffect)",
    "explanation": "Use `setInterval` inside an Effect and update React state on each interval. The interval should be cleared in the Effect cleanup so it does not continue after the component is removed.",
    "explanationHindi": "`useEffect` ke andar `setInterval` use karke har second state update kar sakte hain. Cleanup mein `clearInterval` use karna zaroori hai taaki component remove hone ke baad timer chalta na rahe.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "37. What is `useRef()` and what is the difference between `useState()` and `useRef()`?",
    "answer": "Refs (short for Reference) in React provide a way to access and interact with DOM element by React Components directly without causing Re-render. they are mainly used for:\n• manipulating the DOM Directly (eg -> focusing an input field)\n• Storing values persistently with causing Re-render\n• Accessing child component methods or properties.\n\nDifference b/w useState and useRef()\nuseState -> triggers a re-render when updated.\nuseRef -> Store values without triggering a Re-render\n          - manipulating the DOM Directly",
    "explanation": "`useRef()` returns a persistent mutable ref object. Updating `ref.current` does not normally trigger a re-render.\n\n`useState()` is for data that affects the rendered UI, so calling its setter schedules a new render. A ref is useful for DOM references, timer IDs, previous values, or other mutable values that should survive renders without driving the UI.",
    "explanationHindi": "`useState()` UI ko affect karne wale data ke liye hota hai. Setter call karne par re-render schedule hota hai.\n\n`useRef()` aisi value ko persist karta hai jo renders ke beech bani rahe lekin value change hone par re-render na ho. DOM reference, timer ID aur previous value iske common examples hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "38. What is Jest?",
    "answer": "jest a javaScript testing framework development by facebook, primarily used for test React application. it is fast, easy to use and work look well with React, node.js and js project.",
    "explanation": "Jest is a JavaScript testing framework used to write and run automated tests. It is commonly used for unit and integration testing in JavaScript and React projects and provides features such as assertions, mocks, spies, and coverage support.",
    "explanationHindi": "Jest JavaScript testing framework hai jo automated tests likhne aur run karne ke liye use hota hai. React, Node.js aur JavaScript projects mein iska use common hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "39. Is React a server-side library or a client-side library?",
    "answer": "React is a primarily a client-side library, but it supports Server Side Rendering (SSR) using framework like Next.js.",
    "explanation": "React is primarily a UI library and can be used for client-side rendering. It can also participate in server rendering architectures through frameworks and runtimes such as Next.js. So React is not limited to only one rendering environment.",
    "explanationHindi": "React mainly UI library hai aur client-side rendering mein commonly use hoti hai. Lekin Next.js jaise frameworks ke through server-side rendering bhi ki ja sakti hai. Isliye React ko sirf ek hi side tak limited nahi samajhna chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "40. What are React Server Components (RSC)?",
    "answer": "React Server Components are a feature in React 18+ that allow Components to run Only on the server, reducing javaScript sent to the client.\n\nThey improve performance, reduce bundle size and enable direct data fetching without useEffect().\n\nUsed in: Next 13+ (app Router)\n\nBenefits: faster page load, better Seo, Smaller js size",
    "explanation": "React Server Components let supported frameworks execute certain components on the server so their implementation does not need to become client-side JavaScript. They can access server-side resources and reduce the amount of code sent to the browser.\n\nRSC is different from SSR: SSR renders HTML on the server, while RSC defines where component logic runs.",
    "explanationHindi": "React Server Components mein suitable components server par run ho sakte hain aur unka JavaScript browser ko client execution ke liye bhejna zaroori nahi hota. Isse bundle size aur client-side work reduce ho sakta hai.\n\nRSC aur SSR same nahi hain. SSR server par HTML generate karta hai, jabki RSC component execution ko server/client boundaries ke through organize karta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "41. What is the difference between `if-else` and the ternary operator?",
    "answer": "both are same but\n• use if-else for complex conditions\n• use ternary operator for simple, concise expression.",
    "explanation": "Both can choose between alternatives based on a condition, but they are used differently in code structure. `if-else` is easier for complex branching and multiple statements. The ternary operator is convenient for short expressions, especially inside JSX.",
    "explanationHindi": "Dono condition ke basis par decision le sakte hain. Complex logic aur multiple statements ke liye `if-else` clearer hota hai. Short expression, especially JSX ke andar, ternary operator convenient hota hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "42. Deep copy vs shallow/nested copy.",
    "answer": "Shallow Copy in nested object case will modify the parent object property value, if cloned object property value is changed.\n\nBut deep copy will not modify the parent object property value.\n\n* agar koi nested object hai or uska properties ko Shallow Copy karte hai or koi property ko change karte hai to parent me v change ho jayega.\n\n* magar deep copy me hamlog kisi nested object ke property ko jitna bhi variable me change karenge, parent me change nahi hoga.",
    "explanation": "A shallow copy creates a new outer object but keeps references to nested objects. So changing a nested object through the copied structure can also affect the original.\n\nA deep copy duplicates nested data as well, so changing nested properties in the copy does not affect the original object, assuming the deep-copy method correctly handles the data types involved.",
    "explanationHindi": "Shallow copy mein outer object naya hota hai, lekin nested objects ke references same reh sakte hain. Isliye nested property change karne par original object bhi affect ho sakta hai.\n\nDeep copy nested data ko bhi separate copy banata hai, isliye copy ke nested data mein change karne se original normally affect nahi hota.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "43. Explain callbacks, Promises, and `async/await`.",
    "answer": "Sabse pehle asynchronous code ko handle karne ke liye callbacks use karte the magar usme 2 problems thi:\n1) usme error handling ka feature nahi tha.\n2) call hell ho jata tha.\n\nPromises me magar ye dono ka solution hai.\nisme error handling hai or code readable v hai, as compared to callbacks(). magar isme promise chaining ban jata hai .then .then kar ke.\n\nmagar async await me koi v .then nahi hota or promise chaining nahi hota hai. matlab iska Syntax or readability accha hai.",
    "explanation": "A callback is a function passed to another function to be executed later. Promises represent the eventual result of an asynchronous operation and provide structured success/error handling. `async/await` is syntax built on Promises that makes asynchronous code read more like synchronous code.\n\nCallbacks can become difficult when many operations are nested. Promise chains improve structure, while `async/await` usually makes sequential flows easier to read.",
    "explanationHindi": "Callback mein ek function ko doosre function ke andar later execute karne ke liye pass karte hain. Promises asynchronous operation ka future result represent karte hain aur error handling ko structure karte hain. `async/await` Promises ke upar based readable syntax hai.\n\nBahut saare nested callbacks se callback hell ho sakta hai. Promise chaining structure improve karti hai, aur `async/await` sequential async code ko aur readable bana deta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "44. What is the difference between `document.getElementById()` and `document.querySelectorAll()`?",
    "answer": "only select element by class\n\nallow more complex selectors eg - id, class, div.class, ul>li",
    "explanation": "`getElementById()` is specialized for finding an element by its unique `id`. `querySelectorAll()` accepts CSS selectors and can return all matching elements. So `querySelectorAll()` is more flexible, while `getElementById()` is direct and simple for an ID lookup.",
    "explanationHindi": "`getElementById()` sirf specific ID wale element ko find karne ke liye hota hai. `querySelectorAll()` CSS selector use karta hai aur multiple matching elements return kar sakta hai. Isliye `querySelectorAll()` more flexible hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "45. What is `setInterval()`?",
    "answer": "SetInterval is used to run a piece of code again and again after certain period of time.\n\neg ->\nfunction abc() {\n    console.log(\"abc\");\n}\nsetInterval(abc,2000);",
    "explanation": "`setInterval()` schedules a function to run repeatedly after a specified delay. It continues until the interval is cancelled with `clearInterval()`. In React, intervals should usually be cleaned up when the component unmounts.",
    "explanationHindi": "`setInterval()` kisi function ko fixed time gap ke baad repeatedly run karta hai. Ye tab tak chalta hai jab tak `clearInterval()` se stop na kiya jaye. React mein component unmount hone par interval cleanup karna chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "46. What is single-threaded and multi-threaded execution in JavaScript?",
    "answer": "JS runs on a Single-thread, meaning one task execute at a time\n-> In multi-thread - Runs multiple task in parallel.\n\nJS is a Single-threaded by default but can simulate multi-threading with asynchronous code and achieve true multi-threading using web workers.",
    "explanation": "Normal JavaScript execution on the browser's main thread is single-threaded, so one JavaScript execution path runs at a time. Web APIs and mechanisms such as Web Workers can move certain work to another thread, allowing CPU-heavy tasks to run outside the main UI thread.",
    "explanationHindi": "Browser mein normal JavaScript execution main thread par single-threaded hota hai. Ek time par main JS execution path ek task process karta hai. Web Workers ke through heavy CPU work ko separate thread par run kiya ja sakta hai, jisse UI zyada responsive reh sakti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "47. DOM vs BOM.",
    "answer": "JS interact with web pages using two key models:\n\n1) DOM (Document object model)\n    - manages the content and structure of a web page.\n\n2) BOM (Browser object model)\n    - manages the browser window and features\n      (like alerts, history and locations)",
    "explanation": "The DOM represents the document and its elements, so JavaScript can read or change page content and structure. The BOM represents browser-level objects and features such as the window, history, location, and browser dialogs.",
    "explanationHindi": "DOM web page ke content aur structure ko represent karta hai. Iske through elements aur page content ke saath interact kar sakte hain.\n\nBOM browser window aur browser-related features jaise `history`, `location` aur dialogs ko represent karta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "48. HTTP vs HTTPS.",
    "answer": "Both http and https is are protocols used for Communication b/w web browser and Server.\n\nbut http is less Secure and not encrypted.\nand https is Secured and encrypted.",
    "explanation": "HTTP transfers web data without TLS encryption. HTTPS is HTTP over a secure TLS connection, which protects data in transit and helps verify the server's identity through certificates.",
    "explanationHindi": "HTTP browser aur server ke beech data transfer karta hai lekin normally encrypted nahi hota. HTTPS TLS encryption use karta hai, isliye data transit mein zyada secure hota hai aur server identity verify karne mein help karta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "49. HTML, CSS, and JavaScript — which one loads first in the browser?",
    "answer": "“Html load first -> provide Structure\nCSS -> Style the page (blocking rendering until loaded)\nJS -> loads last (best loaded with defer or async to avoid blocking.",
    "explanation": "HTML provides the initial document structure. CSS is loaded to determine presentation and can block rendering while required styles are being processed. JavaScript execution depends on how scripts are included, and `defer`/`async` can change when scripts execute relative to parsing.",
    "explanationHindi": "HTML page ka basic structure provide karta hai. CSS page ko style karne ke liye load hoti hai aur rendering ko affect kar sakti hai. JavaScript ka loading/execution script attributes par depend karta hai; `defer` aur `async` blocking reduce karne mein help kar sakte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "50. What are functions in JavaScript?",
    "answer": "a function in JS is a reusable block of code that perform a specific task. functions helps organize, reuse and manage code efficiently.",
    "explanation": "A function is a reusable block of JavaScript code that performs a particular task. Functions can receive parameters, return values, and be passed to other functions. They are one of the main ways to organize reusable logic.",
    "explanationHindi": "Function JavaScript mein reusable code ka block hota hai jo ek specific task perform karta hai. Function parameters le sakta hai, value return kar sakta hai aur doosre function ko pass bhi kiya ja sakta hai. Isse code organized aur reusable banta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-1-50",
    "question": "✅ Batch Complete",
    "answer": "No PDF answer provided.",
    "explanation": "",
    "explanationHindi": "",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "51. Why do we need state instead of normal variables in React?",
    "answer": "State persists across re-render , while variable reset.\n\n2) State triggers UI updates, but variable don't.\n\n3) State handles async updates properly.\n\n4) \"State helps manage app data predictable\"",
    "explanation": "A normal variable is recreated when the component function runs again, and changing it does not tell React to update the UI. State is stored by React between renders, and calling the state setter schedules an update. That is why state is used for values that affect what the user sees.",
    "explanationHindi": "Normal variable component ke re-render hone par dobara create ho sakta hai aur usko change karne se React ko UI update karne ka signal nahi milta. State React ke through renders ke beech persist hoti hai aur setter call karne par UI update hoti hai. Isliye UI ko affect karne wale data ke liye state use karte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "52. What is the cascading/cascade rule in CSS?",
    "answer": "The Cascade in CSS determine which Style apply when\nmultiple rules target the same element. (CSS Specificity)",
    "explanation": "The CSS cascade decides which rule wins when multiple CSS rules apply to the same element. Specificity is one important part of this decision, along with factors such as origin, importance, and source order.",
    "explanationHindi": "CSS cascade decide karta hai ki jab ek hi element par multiple CSS rules apply ho rahe hon to kaunsa rule use hoga. Specificity important factor hai, aur origin, importance aur source order bhi decision mein role play karte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "53. React app vs JavaScript app.",
    "answer": "① React uses Component bases approach or JS uses Vanilla js or Other lib.\n② React uses useState, useReducer or Redux for hand handling State\nJS uses variables , localStorage or Custom logic.\n③ optimise with Reconciliation & Virtual DOM . JS -> Direct DOM updates\n    (can be Slow)\n④ Uses React Router DOM for navigation | uses window.location or third party app.\n⑤ faster with Reusable Components & State management\n    JS can be Slower due to manual DOM update.",
    "explanation": "A React app uses a component-based UI architecture and React manages rendering from state and props. A plain JavaScript app commonly manipulates the DOM directly with browser APIs. React also provides patterns for reusable components, state management, and routing, while plain JavaScript requires you to build or choose those patterns yourself.",
    "explanationHindi": "React app mein UI ko components ke through organize kiya jata hai aur React state/props ke basis par rendering manage karta hai. Plain JavaScript app mein commonly DOM ko directly manipulate kiya jata hai. React reusable components, state management aur routing ke liye structured approach deta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "54. Declarative vs imperative programming.",
    "answer": "Declarative programming focuses on what the outcome should be,\ntelling the System handle the details, it abstracts away the\nstep by step process. eg -> include React, SQL, and CSS.\n\nImperative programming focuses on how to achieve the result,\nrequiring explicit step-by-step instructions. Its used in\nJS, C and java.",
    "explanation": "Declarative code describes the result you want and lets the system decide many of the implementation steps. React is generally declarative because you describe what the UI should look like for a given state.\n\nImperative code tells the program exactly which steps to perform to achieve the result, such as directly manipulating DOM elements.",
    "explanationHindi": "Declarative programming mein aap batate ho ki final result kya chahiye aur system implementation ke details handle karta hai. React is approach ka common example hai.\n\nImperative programming mein aap step-by-step batate ho ki result kaise achieve karna hai. Direct DOM manipulation iska common example hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "55. What are pseudo-classes and pseudo-elements?",
    "answer": "pseudo-classes -> :hover, :focus, :nth-child(), checked\npseudo-element -> target specific part of an element\neg -> ::before, ::after, ::first-letter, first-line",
    "explanation": "A pseudo-class represents a state or condition of an existing element, such as `:hover`, `:focus`, or `:checked`.\n\nA pseudo-element targets a specific virtual part of an element, such as `::before`, `::after`, or `::first-letter`.",
    "explanationHindi": "Pseudo-class element ki state ya condition ko represent karta hai, jaise `:hover`, `:focus`, `:checked`.\n\nPseudo-element element ke kisi specific part ko target karta hai, jaise `::before`, `::after` aur `::first-letter`.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "56. What is the reconciliation process in React?",
    "answer": "Reconciliation process\n\n1) When State or props changes, React creates a new virtual DOM.\n2) It compare the new Virtual DOM with the previous one by\n   diffing method.\n3) React identify changes and update only the necessary parts\n   in the Real DOM\n\nResult - faster updates, best performance and Smooth UI rendering.",
    "explanation": "When state or props change, React creates a new description of the UI and compares it with the previous one. This comparison helps React determine which parts need to change before committing updates to the real DOM.\n\nKeys and component identity are important when React reconciles lists and component trees.",
    "explanationHindi": "Jab state ya props change hoti hain, React UI ka new virtual representation banata hai aur usko previous representation ke saath compare karta hai. Is comparison se React ko pata chalta hai ki real DOM mein kya update karna hai.\n\nLists mein keys aur component identity reconciliation ke liye important hote hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "57. How do you lift state up in React?",
    "answer": "lifting state up means moving the State from a child\ncomponent to a common parent Component so that multiple\nchildren can Share and update the same State.",
    "explanation": "Lifting state up means moving shared state to the closest common parent of the components that need it. The parent becomes the source of truth and passes values and callbacks down to the children.",
    "explanationHindi": "Lifting state up ka matlab hai shared state ko children se unke common parent mein move karna. Parent state ko manage karta hai aur values aur callbacks children ko props ke through deta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "58. Explain React Fragments.",
    "answer": "When Returning multiple elements from a Components without unnecessary\nwrapper element.",
    "explanation": "A React Fragment lets a component return multiple elements without adding an extra DOM wrapper. The short syntax is `<>...</>`, and `React.Fragment` can be used when you need to provide a key or prefer the explicit form.",
    "explanationHindi": "React Fragment multiple elements ko group karne deta hai bina extra DOM wrapper ke. `<>...</>` iska short syntax hai. Isse unnecessary `<div>` add karne ki zarurat nahi padti.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "59. Explain `useCallback()` and `useMemo()` with an example.",
    "answer": "useCallback() Both are React hooks used for performance optimization,\nbut they serve different purposes.\n\n=> useCallback()\n• memorizes a function\n• Returns - a memorized functions\n• prevents function recreation when passed as a prop.\n-> without useCallback() -> function get recreated -> child re-render.\n=> withCallback() -> function stays the same -> child only re-render\n                                  if needed.\n\n=> useMemo() -> memoizes a Computed value\n• Return - A memoized value\n• Avoids unnecessary recalculations.",
    "explanation": "`useCallback` memoizes a function reference, while `useMemo` memoizes the result of a calculation.\n\n`useCallback` is useful when a stable callback reference matters, for example when passing a callback to a memoized child.\n\n`useMemo` is useful when an expensive calculation should not be repeated when its dependencies have not changed.",
    "explanationHindi": "`useCallback` function reference ko memoize karta hai, jabki `useMemo` calculation ke result ko memoize karta hai.\n\n`useCallback` tab useful hai jab callback ka stable reference important ho, jaise memoized child ko callback pass karna.\n\n`useMemo` expensive calculation ko unnecessary repeat hone se bachane ke liye use hota hai jab dependencies same hon.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "60. What are React Suspense and `React.lazy()`?",
    "answer": "Both React.Suspense and React.lazy help in Code-Splitting\nand lazy loading Components, improving performance by loading\nComponents only when needed.\n\n=> lazy loading Component\n• purpose - Dynamically import Components only when needed\n  instead of loading everything at once.\n• Benefit - faster initial load time.\n\n=> React.Suspense()\n-> Suspense wraps multiple lazy-loaded Components and\n   Shows a loading message until they are Ready.\n• Suspense handles lazy-loaded Components and data fetching,\n  Showing a fallback UI until they are ready.",
    "explanation": "`React.lazy()` loads a component dynamically, usually through a dynamic import. `Suspense` provides fallback UI while that component is still loading.\n\nFor example, a lazy route component can be wrapped in a Suspense boundary that shows a spinner or skeleton until the code is ready.",
    "explanationHindi": "`React.lazy()` component ko dynamically load karta hai aur `Suspense` loading ke time fallback UI show karta hai. Jaise route load hone tak spinner ya skeleton dikhaya ja sakta hai. Ye code splitting aur lazy loading ke liye useful hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "61. What are portals in React, and when should they be used?",
    "answer": "A portal allows you to render a Component outside the\nnormal React DOM hierarchy , while still keeping it inside\nReact's Virtual DOM.\n\nnormally , when you render a React Component, it stays inside the\n<div id=\"root\"> where your React app lives.\n\nBut Sometime , you need to display Something outside of this root , like\n• modal (pop up)\n• Tooltips\n• Dropmenu - dropdown menu.\n\nA portal helps you do that: it moves the Component to another part\nof the HTML (like <div id=\"modal-root\"></div>), but React\nStill Controls it as if it were inside the app.",
    "explanation": "A portal renders React output into a different DOM node while keeping the component part of the same React tree. It is useful for UI such as modals, tooltips, dropdown overlays, and dialogs where normal DOM nesting can create stacking or overflow problems.",
    "explanationHindi": "Portal component ko kisi different DOM location par render karne deta hai, lekin component React tree ka part hi rehta hai. Modal, tooltip, dropdown aur dialog jaise UI ke liye ye useful hai, especially jab `overflow` ya stacking problem ho.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "62. What is `forwardRef` in React?",
    "answer": "forwardRef() allow a parent Component to a ref to a child\nComponent's DOM element.\n\nnormally , ref only works on DOM elements (eg .<input>), not on\ncustom Components, But with forwardRef, you can pass a ref\nfrom a parent to a child Component and access its DOM.",
    "explanation": "Ref forwarding historically let a parent access a DOM node inside a custom component. A custom input component could accept a ref and attach it to the real `<input>` element so the parent could focus or otherwise control it.",
    "explanationHindi": "`forwardRef` ke through parent ka ref custom child component ke andar actual DOM element tak pass kiya ja sakta tha. Jaise custom input component ke actual `<input>` ko parent focus kar sake.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "63. What is the difference between `useRef()` and `createRef()` in React?",
    "answer": "useRef() (used in functional components)\n    -> Return the Same Ref Object across Renders.\n    -> Do not trigger a re-render when updated\n    -> can mutable values.\n\ncreateRef() - used in class Components\n    -> create a new Ref Object every render.\n    -> Does not persist across Re-render\n    -> mostly, used in class Components.",
    "explanation": "`useRef` is the normal ref Hook for function components and keeps the same ref object across renders. Updating `current` does not cause a re-render.\n\n`createRef` is traditionally used with class components. The main interview difference is that `useRef` is designed for function components and its object persists across renders.",
    "explanationHindi": "`useRef` function components mein normal ref Hook hai aur same ref object renders ke beech preserve karta hai. `ref.current` change karne se re-render nahi hota.\n\n`createRef` traditionally class components ke saath use hota tha. Simple rule: function component mein `useRef` aur class component mein `createRef` commonly dekha jata hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "64. How would you handle Error Boundaries in React?",
    "answer": "error boundaries are Special React Components that\ncatch javaScript error in child Components and prevent\nthe entire app from crashing. instead of braking , they\nshow a fallback UI.\n\nKey points:\n• only class Components can be error boundaries (functional Components\n  can use hooks like useErrorBoundary() from external libraries).\n• They Catch Rendering , lifecycle and Constructor error\n  but not event handler error.",
    "explanation": "I would place Error Boundaries around important UI sections such as routes or independent features. When a supported rendering error occurs, the boundary can show fallback UI and report the error.\n\nAn important point is that Error Boundaries do not catch every kind of error, such as all event-handler or asynchronous callback errors.",
    "explanationHindi": "Important routes ya feature sections ke around Error Boundary place kar sakte hain. Agar child rendering mein supported error aaye, to boundary fallback UI show kar sakta hai aur error log bhi kiya ja sakta hai.\n\nError Boundary har type ka error catch nahi karta; especially normal event-handler errors automatically catch nahi hote.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "65. How would you optimize a large-scale React application?",
    "answer": "code splitting - React.lazy() & webpack dynamic imports.\n\n2) memoization - React.memo() , useMemo() , useCallback()\n\n3) State Optimization - use local State where possible , useReducer()\n   for Complex logic.\n\n4) Rendering Performance - use Keys in lists , virtualized lists\n   and avoid unnecessary State updates.\n\n5) Asset & API Optimization - Cache API request , lazy load\n   Images and compress assets.\n\n6) SSR & Static Rendering - use Next.js for better Seo and\n   performance.",
    "explanation": "For a large React application, I would first measure the bottlenecks. Then I would use code splitting, appropriate memoization, local state where possible, virtualization for large lists, cached/server-state API data, and optimized assets.\n\nFor SSR and static rendering requirements, a framework such as Next.js can provide the needed architecture. The main goal is to reduce unnecessary JavaScript and rendering work rather than optimizing blindly.",
    "explanationHindi": "Large React app ko optimize karne ke liye pehle actual bottleneck measure karna chahiye. Uske baad code splitting, required memoization, local state, large list virtualization, API caching aur asset optimization use kar sakte hain.\n\nSSR ya static rendering ki need ho to Next.js jaisa framework useful ho sakta hai. Blindly har jagah memoization lagana sahi approach nahi hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "66. How does React Fiber work?",
    "answer": "Before Fiber, React used a recursive reconciliation algorithm,\nmaking updates blocking and Slow.\n-> React fiber is a complete rewrite of React's reconciliation algorithm\nintroduced in React 16 , it makes React faster, Smoother and\nmore efficient by allowing interruptible rendering.",
    "explanation": "React Fiber is the internal reconciliation architecture introduced in React 16. It represents rendering work as units that React can schedule more flexibly.\n\nThis architecture allows React to pause or prioritize rendering work, which supports modern features such as transitions and interruptible rendering.",
    "explanationHindi": "React Fiber React ka internal reconciliation architecture hai jo React 16 mein introduce hua tha. Ye rendering work ko manageable units mein organize karta hai aur React ko work ko better schedule karne deta hai.\n\nIsi architecture ki wajah se modern React urgent aur non-urgent work ko better handle kar sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "67. What are Web Workers, and how do they work with React?",
    "answer": "Web workers allow you to run JavaScript code in the\nbackground , without blocking the main UI thread. This\nhelps keep React apps faster and responsive , especially\nfor heavy computations.\n\nWhen to use web workers in React\n• Heavy Computation\n• large API responses\n• Background tasks.",
    "explanation": "Web Workers run JavaScript in a separate worker thread, so CPU-heavy tasks do not block the main browser UI thread. A React component can send data to a worker, let the worker process it, and then update React state with the result.",
    "explanationHindi": "Web Worker JavaScript ko separate background thread mein run karta hai, jisse heavy calculation main UI thread ko block nahi karti. React component worker ko data bhej sakta hai aur result milne par state update kar sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "68. What is hydration in React?",
    "answer": "hydration is when React takes pre-rendered HTML page\nand make it interactive.\n\n1) Server Sends a ready-made HTML page to the browser.\n2) the user sees the Content Quickly (better for seo & performance)\n3) React then \"hydrates\" the page ,attaching event listeners\n   to make it interactive.",
    "explanation": "Hydration connects React's client-side behavior to HTML that was already rendered on the server. The browser can display the server HTML quickly, and React then attaches the necessary event handling and takes control of the application.\n\nThe server output and the client's initial render need to be compatible to avoid hydration mismatch problems.",
    "explanationHindi": "Hydration mein server se aayi pre-rendered HTML ko React interactive banata hai. Browser pehle HTML display kar sakta hai, phir React event listeners aur client-side behavior attach karta hai.\n\nServer aur client ka initial output compatible hona chahiye, warna hydration mismatch ho sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "69. How does code splitting improve performance?",
    "answer": "code splitting breaks a large javascript bundle into smaller\nchunks , loading only what's needed . This improve performance\nby reducing initial page load time.\n\nBenefits\n• fast page load - users see content quickly.\n• Better performance - Reduces unused js execution.\n• Efficient memory usage - loads Components only when require.",
    "explanation": "Code splitting divides a large JavaScript bundle into smaller chunks so the browser does not need to load every feature on the first page. Routes or components can be loaded on demand.\n\nThis can reduce initial download, parsing, and execution work.",
    "explanationHindi": "Code splitting large JavaScript bundle ko smaller chunks mein divide karta hai. First page ke liye sirf required code load hota hai aur baaki code baad mein load kiya ja sakta hai.\n\nIsse initial download, parsing aur execution ka load reduce ho sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "70. What is React Profiler?",
    "answer": "React profiler is a tool that helps measure how long Component\ntake to render and identify performance issues. it is\nuseful for optimizing slow Components.\n\nHow to use React profiler\n1) open react-dev tool -> profiler tab -> click\n   Record, perform actions in\n   the app ,then stop recording -> analyse render\n   times and find slow Components.",
    "explanation": "React Profiler helps measure component rendering work so you can find expensive renders and performance bottlenecks.\n\nA practical approach is to reproduce the slow interaction, record it with the Profiler, inspect expensive components/commits, optimize the actual bottleneck, and measure again.",
    "explanationHindi": "React Profiler rendering performance measure karne ke liye use hota hai. Slow interaction ko record karke dekh sakte hain ki kaunse components zyada render time le rahe hain.\n\nOptimization ke baad dobara profile karke confirm karna chahiye ki actual improvement hua hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "71. Explain lazy loading images in React.",
    "answer": "lazy loading delays loading images, until they (images) on\nvisible on the screen. this improves performance by\nreducing initial page load time.",
    "explanation": "Lazy loading means delaying an image request until the image is near or inside the viewport. For many below-the-fold images, this can reduce initial network and page-load work.\n\nFor simple cases, the browser's native `loading=\"lazy\"` attribute can be used.",
    "explanationHindi": "Lazy loading mein image ko immediately load karne ke bajay tab load kiya jata hai jab woh screen par visible ya viewport ke near ho. Isse initial page load ka network work kam ho sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "72. How do you optimize re-rendering in React?",
    "answer": "use React.memo() to prevent unnecessary re-renders.\n2) use useCallback() to prevent function recreation.\n3) use useMemo() to cache expensive Calculations.\n4) optimize State updates to avoid triggering renders.\n5) use lazy loading (React.lazy) to Split large Components.",
    "explanation": "I would first identify why the component is rendering too often. Then I would use stable state placement, `React.memo`, `useCallback`, `useMemo`, and code splitting only where they provide measurable value.\n\nFor large lists, virtualization and reducing unnecessary parent updates can be more important than memoizing everything.",
    "explanationHindi": "Pehle ye identify karna chahiye ki unnecessary re-render kyun ho raha hai. Uske baad required case mein `React.memo`, `useCallback`, `useMemo`, proper state placement aur code splitting use kar sakte hain.\n\nLarge lists ke liye virtualization aur unnecessary parent updates reduce karna bhi important hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "73. How do you handle memory leaks in a React application?",
    "answer": "memory leaks happen when when your app keeps using\nmemory even after it's no longer needed. This can slow\ndown your app over time.\n\nSolutions -> fetch Requests or event listeners keep running even\nafter the component unmounts.\n    -> clean use clean up function in useEffect().",
    "explanation": "I look for resources that continue running after a component is removed, such as timers, subscriptions, event listeners, WebSockets, and observers. Effects that create these resources should return cleanup functions.\n\nFor harder cases, browser memory tools and heap snapshots can help identify retained objects.",
    "explanationHindi": "React mein memory leak tab ho sakta hai jab component remove hone ke baad bhi timer, listener, subscription ya koi external resource active rahe. Isliye `useEffect` ke andar proper cleanup dena chahiye.\n\nDifficult cases mein browser memory tools aur heap snapshots se leak trace ki ja sakti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "74. Explain tree shaking in React.",
    "answer": "tree Shaking is a technique that removes unused code (dead code)\nfrom your final javaScript bundle . it helps reduce file size\nand improve performance.\n\nHow to Enable tree Shaking in React\n• use ESM module (import/export) - avoid require (commonJS)\n• Set \"sideEffects\": false in package.json.",
    "explanation": "Tree shaking is a build-time optimization that removes unused exports from the production JavaScript bundle when the module format and build tooling allow it.\n\nIt is not a React-specific feature. Using ES modules and configuring package/build metadata correctly can help bundlers perform tree shaking.",
    "explanationHindi": "Tree shaking production bundle se unused JavaScript code remove karne ki build-time optimization hai. Ye React-specific feature nahi hai.\n\nES module `import/export` aur correct bundler configuration tree shaking mein help kar sakte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "75. How do you prevent unnecessary API calls in React?",
    "answer": "too many API calls Slow down app and resources. here's how\nto prevent them effectively.\n\n1) Use useEffect() with Dependencies\n   so the API runs only when needed.\n2) Debounce API calls (for Search inputs)\n   - avoid API calls on every keystroke; wait until the user stop typing.\n   Solution - use setTimeout() or a debounce library.\n\n3) Cache API Response (useMemo) or Redis\n   -> avoid fetching the Same data multiple time.\n   -> Solution : Store the API response and reuse it.",
    "explanation": "I would control request triggers carefully. For Effects, dependencies should match the data the request actually depends on. Search inputs can be debounced so a request is not sent for every keystroke.\n\nFor repeated data, caching or a server-state library can avoid duplicate fetching. Older requests can also be cancelled or ignored when newer requests replace them.",
    "explanationHindi": "API calls ko unnecessary hone se bachane ke liye Effect dependencies correct rakhni chahiye aur search inputs ko debounce kar sakte hain. Repeated data ke liye caching ya server-state solution use kiya ja sakta hai.\n\nAgar nayi request old request ko replace kar rahi hai, to old request ko cancel ya ignore bhi kar sakte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "76. How do you preload assets in React?",
    "answer": "pre-loading assets (image ,fonts , scripts etc) ensure they are\nReady before they are needed, improving performance and\nuser Experience.\n\n-> <head>\n   <link rel=\"preload\" href=\".....\" >\n</head>",
    "explanation": "Asset preloading tells the browser that an important resource should be fetched early. It can be useful for critical fonts, images, or other resources needed very soon.\n\nThe important point is to preload only truly important assets, because unnecessary preloads consume network resources.",
    "explanationHindi": "Preload ka matlab browser ko pehle hi batana hai ki koi important asset jaldi fetch karna chahiye. Critical fonts, hero images ya immediately needed resources ke liye useful ho sakta hai.\n\nHar asset ko preload nahi karna chahiye, warna unnecessary network load badh sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "77. How does `useDeferredValue()` improve performance?",
    "answer": "useDeferredValue() improve performance by delaying\nupdates to less important parts of the UI, keeping the\napp responsive.",
    "explanation": "`useDeferredValue` provides a deferred version of an existing value. This is useful when one part of the UI should update immediately, such as a search input, while an expensive result list can update with lower priority.",
    "explanationHindi": "`useDeferredValue` existing value ka deferred version deta hai. Search input immediately update ho sakta hai, jabki expensive result list deferred value use karke lower priority par update ho sakti hai. Isse UI responsive reh sakti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "78. How do you implement a Progressive Web App (PWA) in React?",
    "answer": "A progressive web app (PWA) makes your React app faster,\noffline-ready and installable like a native app.",
    "explanation": "A React application can become a PWA by using web platform features such as a web app manifest, service worker, HTTPS, and appropriate caching/offline strategies.\n\nThe service worker can handle selected network and cache behavior, while the React app provides the UI.",
    "explanationHindi": "React app ko PWA banane ke liye web app manifest, service worker, HTTPS, caching aur offline behavior use kiya ja sakta hai. React UI normal app ki tarah kaam karti hai aur service worker selected network/cache behavior manage kar sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "79. How do you handle errors in Express.js?",
    "answer": "1) always use an error-handling middleware : ( err,req,res,next) =>\n                                                            { }\n2) handle async errors properly using try-catch or express-async-errors.\n3) use meaningful HTTP Status Codes . (eg -> 400 for Validation errors,\n   500, for Server errors)\n4) Return json error response in API.",
    "explanation": "In Express, I would centralize errors in an error-handling middleware with the four-argument signature. Async route errors should be caught and passed to the error middleware.\n\nThe API should return appropriate HTTP status codes and a consistent JSON error structure so clients can handle errors predictably.",
    "explanationHindi": "Express mein centralized error-handling middleware use karna chahiye. Async routes ke errors ko properly catch karke error middleware tak bhejna chahiye.\n\nValidation errors ke liye suitable 4xx status aur server failures ke liye suitable 5xx status use karna chahiye, aur API response consistent JSON format mein dena useful hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "80. How do you connect MongoDB to Express.js?",
    "answer": "To Connect MongoDB to an Express.js application , you\ntypically use the mongoose library , which provides a Schema-\nbased Solution for handling MongoDB operations.",
    "explanation": "A common approach is to use Mongoose as the ODM layer. You create a database connection when the application starts, define schemas/models where appropriate, and then use those models inside Express route or service logic.\n\nConnection configuration such as the MongoDB URI should normally come from environment variables.",
    "explanationHindi": "Express app ko MongoDB se connect karne ke liye commonly Mongoose use kiya jata hai. Application startup par database connection establish karte hain aur models ke through database operations perform karte hain.\n\nMongoDB URI ko environment variable mein rakhna better hota hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "81. How does JWT authentication work in Node.js?",
    "answer": "1) User logs in with their Credentials.\n2) Server verifies Credentials and generate a JWT token.\n3) Client Store the token (eg in localstore or Cookies)\n4) Client Includes Sends the token with Request (Authentication\n   (Authorization header )\n5) Server verifies the token and grants access to protected\n   routes.",
    "explanation": "After successful login, the server signs a JWT containing the necessary claims. The client sends that token with later requests, and the server verifies the signature before allowing access to protected resources.\n\nThe token storage mechanism matters for security; a browser-based application should choose storage based on its threat model rather than blindly storing sensitive tokens in any one place.",
    "explanationHindi": "Login ke baad server JWT token generate/sign karta hai. Client later requests ke saath token bhejta hai aur server token verify karke protected resource ka access deta hai.\n\nToken ko kahan store karna hai ye security design par depend karta hai. Browser app mein storage choice carefully karni chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "82. What is `bcryptjs`, and how does it improve security?",
    "answer": "bcrypt.js is a JS library used for hashing password\nSecurely. it applies the bcrypt hashing algorithm, which include\n• Salting - add random data to prevent dictionary attack.\n• multiple Rounds - Uses Computational Cost to Slow down\n  brute-force attack.\n• one-way hashing - make it impossible to retrieve the\n  original password.",
    "explanation": "`bcryptjs` is a JavaScript implementation of the bcrypt password-hashing algorithm. A password is hashed with a salt and a configurable computational cost so the original password is not stored directly.\n\nDuring login, the entered password is checked against the stored hash rather than being decrypted.",
    "explanationHindi": "`bcryptjs` password ko securely hash karne ke liye use hota hai. Isme salt aur computational cost hoti hai, jisse brute-force attack ko harder banaya ja sakta hai.\n\nPassword plain text mein store nahi hota; login ke time entered password ko stored hash ke against verify kiya jata hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "83. How do you handle file uploads in Node.js?",
    "answer": "file uploads in Node.js can be managed using the multer package,\nWhich simplifies handling multipart / form-data.",
    "explanation": "For multipart file uploads in an Express application, `multer` is a common middleware. It parses the multipart request and exposes uploaded files to the route handler.\n\nIn production, I would also validate file type/size, generate safe filenames, and decide whether files should be stored locally or in object storage.",
    "explanationHindi": "Node.js/Express mein file upload ke liye `multer` commonly use hota hai. Ye multipart/form-data ko parse karke uploaded file ko route handler tak provide karta hai.\n\nProduction mein file type, size aur storage location ko securely handle karna bhi zaroori hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "84. Explain the difference between Cookies and Local Storage.",
    "answer": "Both Cookies and localStorage store data in the browser , but\nthey Serve difference purpose.\n\nFeature          Cookies                 Local Storage\nStore limit      4 kb per cookie         5 MB per domain\nExpiration       Can expire (set by server) No expiration (persist until manually cleared)\nAccessibility    Sent with every HTTP Request Only accessible via JS\nSecurity         Vulnerable to CSRF & XSS Vulnerable\nUse Case         Authentication (jwt,session) Storing user preferences\n                                         temporary data.\n\n-> Use Cookies - When you need Server-side access (eg - authentication\n   tokens)\n-> Use Local Storage - When you need to Storage larger cli\n-> Use local Storage - When you need to Store large client-side\n   data that doesn't needn't need to be sent to the Server. (eg. theme\n   preferences , UI settings)",
    "explanation": "Cookies can be sent automatically with HTTP requests and support attributes such as `HttpOnly`, `Secure`, and `SameSite`. Local Storage is client-side storage accessed through JavaScript and is not automatically sent with requests.\n\nFor authentication, secure cookie-based sessions are often preferred when the architecture supports them. Local Storage is better suited to non-sensitive client preferences that do not need to be sent with every request.",
    "explanationHindi": "Cookies browser data store karti hain aur request ke saath automatically send ho sakti hain. `HttpOnly`, `Secure` aur `SameSite` jaise attributes security improve kar sakte hain.\n\nLocal Storage sirf client-side JavaScript se access hota hai aur request ke saath automatically nahi bheja jata. Theme ya UI settings jaise non-sensitive data ke liye ye useful hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "85. What is PM2, and why is it used in production?",
    "answer": "pm2 (process manager 2) is a popular process manager\nfor Node.js applications. it helps keep your application\nrunning continuously , even after crashes or reboots , making\nit ideal for production environment.\n\nWhy Use PM2 in Production\n\n1) Process management - automatically restarts your app if it crashes.\n2) Load Balancing - Uses Cluster mode to distribute traffic\n   across CPU Cores.\n3) Logging & Monitoring - provides real-time logs,\n   error tracking , and performance monitoring.\n4) Auto-Restart on failure - Ensure uptime by restarting\n   crashed processes.\n5) Startup Script - Runs app automatically on System\n   boot.",
    "explanation": "PM2 is a process manager commonly used to run Node.js applications in production. It can keep processes alive, restart crashed processes, manage logs, and support cluster-based process execution.\n\nIt is a deployment/process-management tool rather than a replacement for application-level monitoring or infrastructure orchestration.",
    "explanationHindi": "PM2 Node.js applications ko production mein run aur manage karne ke liye process manager hai. Ye app crash hone par restart, logs, monitoring aur cluster mode support kar sakta hai.\n\nPM2 useful process-management tool hai, lekin complete infrastructure monitoring ka replacement nahi hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "86. What is Helmet.js, and how does it improve security?",
    "answer": "Helmet.js is a Simple yet effective tool for improving Security in\nNode.js Applications by setting Secure HTTP headers , reducing\nattack vectors and enforcing best practices.",
    "explanation": "Helmet is Express/Node middleware that sets or configures security-related HTTP headers. These headers can reduce exposure to certain browser-based attacks and improve security defaults.\n\nIt should be combined with other protections such as input validation, authentication, secure cookies, and rate limiting.",
    "explanationHindi": "Helmet Node.js/Express app mein security-related HTTP headers set karne mein help karta hai. Isse kuch browser-based attacks ka risk reduce karne mein madad mil sakti hai.\n\nHelmet alone complete security solution nahi hai; validation, auth aur other protections bhi zaroori hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "87. How do you implement OAuth authentication in Express.js?",
    "answer": "OAuth authentication allows users to log in using third-party\nproviders (Google, Facebook, GitHub etc) instead of creating\na new account.\n\n-> To implement OAuth authentication in Express.js , we typically use\n   Passport.js , a flexible authentication middleware.",
    "explanation": "With OAuth, the application redirects the user to a trusted identity provider such as Google or GitHub. After the user authenticates and grants permission, the provider sends the application an authorization result according to the OAuth flow.\n\nIn Express, Passport or another OAuth library can simplify the integration, while the server handles callback validation and application session/token creation.",
    "explanationHindi": "OAuth mein user Google, GitHub jaise third-party provider ke through login kar sakta hai. Provider user ko authenticate karke application ko authorization result deta hai.\n\nExpress mein Passport.js ya suitable OAuth library integration ko simpler bana sakti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "88. What is rate limiting, and how do you implement it?",
    "answer": "Rate limiting is a Security mechanism that restricts the\nnumber of requests a client can make to a server within\na Specific time-frame. it helps\n• prevent DDOS (Distributed Denial of Service) attacks.\n• protect from brute-force login attack attempts.\n• manage API quotas and fair usage.",
    "explanation": "Rate limiting controls how many requests a client can make during a time window. In Express, middleware can apply a limit per IP, user, API key, or other identity.\n\nIt is useful for protecting login endpoints and reducing abuse, but distributed systems may need a shared store such as Redis so limits work consistently across multiple instances.",
    "explanationHindi": "Rate limiting ek time window mein client ki request count limit karta hai. Express mein middleware ke through IP, user ya API key ke basis par limit laga sakte hain.\n\nYe brute-force aur abuse ko reduce karne mein useful hai. Multiple server instances mein shared store jaise Redis ki zarurat pad sakti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "89. How do you optimize API performance in Express.js?",
    "answer": "must do optimization\n\n1) cashing (Redis)\n\n2) Database optimization -> use pagination & limit results\n   -> optimize Queries : Avoid \"*SELECT\n      fetch only required field.\n\n3) Rate limiting -> prevent API abuse & DDOS\n\n4) Enable Gzip Compression -> Compression Reduces the Size of\n   response, making API Responses\n   faster.\n\n5) Use Async Code",
    "explanation": "I would look at the full request path: database queries, network payloads, application logic, and repeated requests.\n\nCommon optimizations include caching, pagination, selecting only required fields, compression, asynchronous/non-blocking operations, and rate limiting. I would measure response time before and after changes to confirm which optimization helps.",
    "explanationHindi": "API performance improve karne ke liye caching, pagination, limited fields, compression aur proper async code use kiya ja sakta hai. Database query ko optimize karna bhi important hai.\n\nOptimization ke baad response time measure karke verify karna chahiye ki actual bottleneck improve hua.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "90. How does caching work in Node.js?",
    "answer": "Caching is a process of Storing frequently accessed data in\nmemory to reduce database load and response time.\n\nWhy use Caching\n• improve API performance\n• Reduce database load.\n• Handles high-traffic efficiently\n• Enhance user experience",
    "explanation": "Caching stores reusable data closer to the application so repeated requests can be served faster. A Node.js application might use an in-memory cache for small workloads or Redis for shared/distributed caching.\n\nA cache strategy should define expiration, invalidation, and what happens when cached data is missing or stale.",
    "explanationHindi": "Caching frequently used data ko memory ya cache store mein rakhne ki technique hai. Isse repeated request par database hit kam hota hai aur response faster mil sakta hai.\n\nSmall app mein in-memory cache aur large/distributed setup mein Redis jaise shared cache useful ho sakte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "91. How do you secure Express applications?",
    "answer": "1) Helmet.js -> Secure HTTP headers\n2) Rate limiting -> prevent brute force & DDOS\n3) JWT & password hashing (bcrypt).\n4) CORS -> control cross-origin Requesting\n5) Session Security -> Protects cookies & Sessions",
    "explanation": "I would use multiple layers: secure HTTP headers, input validation, authentication/authorization, safe password hashing, rate limiting, CORS configuration, secure cookies, and careful session management.\n\nSecurity is not one middleware. Each layer addresses a different class of risk.",
    "explanationHindi": "Express app ko secure karne ke liye multiple layers use karne chahiye: Helmet, validation, authentication/authorization, bcrypt hashing, rate limiting, CORS aur secure session/cookie settings.\n\nEk single middleware se complete security nahi milti; layered approach better hoti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "92. How do you handle real-time events in Express.js?",
    "answer": "Real time functionality is essential for applications like chat app ,\nlive notification , Stock updates , gaming and Collaborative tools.\nin Express.js , Real time events can be handled using Websockets , Socket.io\nor Server-sent Event (SSE).",
    "explanation": "Express can be part of a real-time system using WebSocket-based libraries such as Socket.IO or using Server-Sent Events for one-way server-to-client streams.\n\nThe exact choice depends on whether communication needs to be bidirectional, how connections are managed, and how the application scales across multiple servers.",
    "explanationHindi": "Express application mein real-time functionality ke liye WebSocket, Socket.IO ya Server-Sent Events use kiye ja sakte hain. Chat, live notification, stock updates aur collaborative tools common examples hain.\n\nBidirectional communication chahiye ya one-way updates, uske basis par technology choose karni chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "93. What is the purpose of `process.nextTick()` in Node.js?",
    "answer": "It is used when you want to execute code immediately after\nthe current operation , but before the event loop continues.\n\n* process.nextTick() event loop Code se pehle chalta hai.\n\neg ->\nconsole.log ('Start')\n\nprocess.nextTick ( () => console.log ('nextTick'));\n\nSetTimeout ( () => console.log ('setTimeout'))\n\nSetImmediate ( () => console.log ('setImmediate'))\n\nPromise.resolve() .then ( () => console.log ('promise resolve'))\n\nconsole.log ('end')\n\no/p -> Start\n        end\n        nextTick\n        promise resolve\n        Set immediate\n        Set timeout",
    "explanation": "`process.nextTick()` schedules a callback to run after the current operation completes but before the event loop continues to later phases. It therefore has very high priority in Node's scheduling model.\n\nBecause excessive `nextTick` usage can delay other work, it should be used carefully.",
    "explanationHindi": "`process.nextTick()` current operation ke complete hone ke baad callback ko schedule karta hai aur Node event loop ke further processing se pehle chal sakta hai. Isliye iska scheduling priority high hota hai.\n\nBahut zyada `nextTick` use karne se doosre tasks delay ho sakte hain, isliye carefully use karna chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "94. How do you handle memory leaks in a Node.js application?",
    "answer": "memory leaks in a node.js application can cause performance degradation\nand crashes over time. here's how to handle and prevent them:\n\n1) Identify leaks using heap Snapshots , process.memoryUsage() , eg\n   tool like clinic.js and no memwatch-next.\n\n2) fix Common Causes :\n   • avoid global variable\n   • clean unused timers (setTimeout(), setInterval())\n   • Remove event listeners (removeListener() , off())\n   • prevent excessive closures.\n   • use LRU caching to manage memory\n   • close database Connections properly\n\n3) Debug using tools : node --inspect, chrome Devtool or heapdump",
    "explanation": "I would first confirm the leak with memory metrics and heap snapshots. Then I would look for retained objects caused by global references, listeners, timers, unbounded caches, closures, or resources that were not closed.\n\nAfter fixing the suspected source, I would run the application under similar load again and verify that memory stabilizes instead of continuously increasing.",
    "explanationHindi": "Node.js memory leak diagnose karne ke liye heap snapshots, `process.memoryUsage()` aur debugging tools use kiye ja sakte hain. Global references, unused timers, event listeners, large caches aur unclosed database connections common causes hain.\n\nFix ke baad similar load par app ko dobara test karke verify karna chahiye ki memory continuously increase nahi ho rahi.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "95. How do you optimize Node.js for high performance?",
    "answer": "1) use asynchronous , non-blocking operations (async/await,promises)\n\n2) optimise queries with indexes and Caching (Redis, memcached)\n\n3) use pagination for large dataset queries.\n\n4) implement in-memory caching with Redis or Node-cache.\n\n5) Avoid memory leaks (close DB Connection, remove unused\n   event listeners)\n\n6) use PM2 for process management and auto-restart.",
    "explanation": "For high performance, I would keep I/O asynchronous, optimize database queries with proper indexes, cache repeated data, paginate large results, control memory usage, and scale application processes when needed.\n\nI would also use profiling and monitoring to identify the real bottleneck rather than applying every optimization at once.",
    "explanationHindi": "High-performance Node.js ke liye asynchronous non-blocking operations, optimized database queries, indexes, caching, pagination aur proper memory management important hain. PM2 ya another process manager process management aur restart ke liye help kar sakta hai.\n\nActual bottleneck identify karne ke liye profiling aur monitoring bhi karni chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "96. What is load balancing, and how does it work in Node.js?",
    "answer": "load balancing is the process of distributing incoming\nnetwork traffic across multiple Servers to optimize resource\nuse, minimum latency , and prevent Server Overload.",
    "explanation": "A load balancer receives incoming requests and distributes them across multiple healthy application instances. This can improve capacity and availability and prevent one instance from taking all the traffic.",
    "explanationHindi": "Load balancing mein incoming requests ko multiple servers/instances ke beech distribute kiya jata hai. Isse resource usage better hota hai, latency reduce ho sakti hai aur ek server overload hone se bach sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "97. How do you scale a Node.js application?",
    "answer": "Scale is means increasing or decreasing the capacity of a system\nto handle more (or fewer) requests, users or workload.\n\nType of Scaling\n\n1) Scale up (Vertical Scaling) - add more CPU, RAM or Storage to a\n   Single Server.\n\n2) Scale up (horizontal scaling) -> add more servers/instances\n   to distribute the load.\n\neg -> A website going from 100 users to 1 million users need to\n     Scale to handle the traffic efficiently.",
    "explanation": "Scaling means increasing application capacity as workload grows. Vertical scaling increases resources on one machine, while horizontal scaling adds more instances and distributes traffic across them.\n\nFor horizontal scaling, stateless application design, shared caches/stores, and a load balancer are commonly important.",
    "explanationHindi": "Scaling ka matlab workload badhne par system ki capacity increase karna hai. Vertical scaling mein same server ko more CPU/RAM diya jata hai. Horizontal scaling mein multiple server instances add karke load distribute kiya jata hai.\n\nHorizontal scaling ke liye stateless design, shared cache/store aur load balancer important ho sakte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "98. How does Redis caching improve performance?",
    "answer": "Redis Caching improves performance in several ways :\n\n1) Redis makes apps faster by Storing frequently used data in\nmemory instead of fetching it from a Slow database.\nthis reduces wait time , lower database load and Speeds\nup Responses . it also removes old and unused data\nautomatically , ensuring efficient memory use.",
    "explanation": "Redis is an in-memory data store, so retrieving frequently accessed values can be much faster than repeatedly querying a database. It can reduce database load and improve response latency.\n\nA production cache still needs a clear expiration and invalidation strategy so stale data does not remain indefinitely.",
    "explanationHindi": "Redis memory mein frequently used data store karta hai, isliye repeated request ke liye database ko har baar hit karna zaroori nahi hota. Isse response faster aur database load lower ho sakta hai.\n\nCache ke liye expiration aur invalidation strategy bhi important hai taaki stale data unnecessarily retain na ho.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "99. What are `worker_threads` in Node.js, and when should you use them?",
    "answer": "Worker thread in node.js allow you to run multiple task in\nparallel , preventing the main thread from getting blocked.\nnormally node.js runs on a Single thread , meaning it can\nonly handle one task at a time. if a task is CPU-intensive\n(like long Calculations or file processing), it can slow everything\ndown.\n\nworker threads Solve this by running Such task in Separate\nthreads , keeping the main thread free to handle other\nRequest . this makes your app faster and more responsive.",
    "explanation": "`worker_threads` provide a way to run JavaScript work in separate threads inside the same Node.js process. They are useful for CPU-intensive tasks such as heavy calculations, parsing, encryption, or transformations that would otherwise block the main event loop.\n\nThey are not generally needed for ordinary I/O operations, because Node already handles much I/O asynchronously.",
    "explanationHindi": "`worker_threads` CPU-intensive work ko separate threads mein run karne dete hain. Heavy calculation, parsing, encryption ya transformation jaise tasks ke liye useful hain.\n\nNormal I/O requests ke liye usually worker thread ki need nahi hoti, kyunki Node asynchronous I/O already handle karta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "100. How would you handle large file processing in Node.js?",
    "answer": "handling large files processing in Node.js requires efficient\nmemory management to avoid blocking the event loop.\nhere are the best approach.\n\n1) use Streams (Best for long files)\n   -> Node.js Streams allow you to read and process large files\n      chunks by chunk instead of loading the whole file into memory.\n\n2) Use Worker thread (for CPU-intensive tasks)\n   -> if the processing involves heavy Computations (eg- parsing , encryption)\n      use worker threads to avoid blocking the main thread.\n\n3) Use External processing tools (for very large files)\n   -> for extremely large files (GB or TB), use child process or\n      external tools like ffmpeg , gzip or database batch processing.",
    "explanation": "For large files, I would avoid reading the entire file into memory at once. Streams allow the file to be processed chunk by chunk, which keeps memory usage under control.\n\nIf processing each chunk requires heavy CPU work, worker threads can move that computation away from the event loop. For extremely large or specialized processing, external tools or batch workers can be more appropriate.",
    "explanationHindi": "Large file ko process karte waqt poori file ko ek saath memory mein load nahi karna chahiye. Streams file ko chunks mein process karne dete hain, jisse memory usage controlled rehti hai.\n\nAgar processing CPU-intensive hai to worker threads use kar sakte hain. Bahut large ya specialized processing ke liye external tools ya batch processing better ho sakti hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-51-100",
    "question": "✅ Batch Complete",
    "answer": "No PDF answer provided.",
    "explanation": "",
    "explanationHindi": "",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "101. Explain garbage collection in Node.js.",
    "answer": "Garbage Collection in Node.js automatically removes unused data\nto free up memory.\n\n-> the v8 engine handles this using the Mark and Sweep method.\n\n-> to keep memory usage low.\n1) avoid global variables,\n2) use Streams for big files.\n3) monitor memory with process.memoryUsage() .",
    "explanation": "Garbage collection automatically removes objects that are no longer reachable so memory can be reused. Node.js uses the V8 JavaScript engine, which performs automatic garbage collection.\n\nIn practice, developers should still avoid accidental memory retention—for example, long-lived references, unbounded caches, timers, or listeners that are never cleaned up. The PDF also recommends avoiding unnecessary global variables, using streams for large files, and monitoring memory usage.",
    "explanationHindi": "Garbage collection ka kaam un data/objects ko memory se clean karna hai jo ab use nahi ho rahe aur reachable nahi hain. Node.js mein V8 engine automatic garbage collection handle karta hai.\n\nDeveloper ko phir bhi unnecessary global variables, continuously growing cache, timers aur listeners ko properly manage karna chahiye. Large files ke liye streams aur memory monitor karna bhi useful hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "102. What is cluster mode, and how does it help a Node.js application?",
    "answer": "cluster mode allows a Node.js app to run multiple processes\n(workers) using all CPU cores instead of just one.\nThis improves performance and handles more requests efficiently.\n\nHow it helps\n\n1) Better performance - Uses multiple CPU cores for faster\n   processing.\n2) Handle more traffic - Distributes requests across workers.\n3) prevent crashes - if one workers fails, other keep\n   running.",
    "explanation": "Cluster mode lets a Node.js application run multiple worker processes so it can make better use of multiple CPU cores. Incoming work can be distributed across workers.\n\nThis can increase throughput and provide some process-level fault isolation. It is different from `worker_threads`, which use threads inside a Node.js process.",
    "explanationHindi": "Cluster mode ek Node.js application ke multiple worker processes run karne deta hai, jisse multiple CPU cores ka better use ho sakta hai. Requests workers ke across distribute ki ja sakti hain.\n\nIsse performance aur throughput improve ho sakta hai, aur agar ek worker fail ho jaye to baaki workers continue kar sakte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "103. How do you monitor a Node.js application in production?",
    "answer": "monitoring helps tracks performance, detect issues and\noptimize resource usage. here are the keys to monitor a node app.\n\n1) Use node.js Built-in tools\n• process.memoryUsage() -> check memory usage.\n• process.cpuUsage() -> track CPU load.\n• console.log() & console.timeEnd() -> measure execution time.\n\n2) use Monitoring tools.\n• PM2 -> process manager with built in monitoring.\n\n3) monitor API & Response times\n• Express middleware like morgan logs HTTP request.\n\n4) Setup Alerts & Crash Handling\n... Set up Slack and email alerts for high memory or cpu usage.",
    "explanation": "Production monitoring means tracking application health, performance, errors, resource usage, and request latency.\n\nThe PDF suggests using Node.js metrics such as `process.memoryUsage()` and `process.cpuUsage()`, timing code when useful, PM2 monitoring, HTTP request logging such as Morgan, and alerts for abnormal CPU or memory usage.\n\nIn a real production system, centralized logs, metrics, tracing, and error monitoring can be added as the application grows.",
    "explanationHindi": "Production monitoring mein memory, CPU, API response time, errors aur application health track karte hain.\n\nPDF mein `process.memoryUsage()`, `process.cpuUsage()`, `console.timeEnd()`, PM2 monitoring, Morgan request logs aur high CPU/memory ke liye alerts suggest kiye gaye hain.\n\nLarge production system mein centralized logging, metrics aur error monitoring bhi useful hote hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "104. What are lexical environments in JavaScript?",
    "answer": "A lexical environment in js is like a Storage Space where\nvariable and functions are kept. Each function or block\ngets its own Storage when it runs, and it can access\nvariable from its outer (parent) function.\n\nKey points\n• Every function gets its own memory Space (lexical environment)\n• inner functions can access outer variables, but not the\n  other way around.\n• this is the reason why closures work in js.",
    "explanation": "A lexical environment is the execution-time structure JavaScript uses to keep track of variables and their relationships within a scope.\n\nA function can access variables from its outer lexical environments. This scope relationship is what allows closures to remember outer variables.",
    "explanationHindi": "Lexical environment ek conceptual storage structure hai jahan current scope ke variables aur functions track hote hain. Inner function apne outer scope ke variables ko access kar sakta hai.\n\nIsi scope relationship ki wajah se closures kaam karte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "105. Explain prototypal inheritance in JavaScript.",
    "answer": "in js, prototypal inheritance allows objects to inherit\nproperties and methods from other objects. Every object\nhas a hidden link to a prototype , which it can to access\nShared properties.",
    "explanation": "Prototypal inheritance means an object can access properties and methods through its prototype chain. If JavaScript does not find a property directly on the object, it can continue looking up the chain.\n\nThis is JavaScript's underlying inheritance model and is also used by ES6 classes internally.",
    "explanationHindi": "Prototypal inheritance mein object apne prototype se properties aur methods access kar sakta hai. Agar property directly object mein na mile, to JavaScript prototype chain mein search karta hai.\n\nJavaScript ka inheritance model prototype based hai, aur ES6 classes bhi internally isi mechanism par based hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "106. How does `Object.create()` work?",
    "answer": "Object.create() create a new object and sets its prototype to\nan existing object. this allow the new object to inherit\nproperties and methods without copying them.\n\neg ->\nconst person = {\n    greet: function() {\n        console.log(\"Hello abc \" + this.name);\n    }\n}\n\nconst Student = Object.create(person);\nStudent.name = \"Alice\";\nStudent.greet(); -> Hello abc, Alice",
    "explanation": "`Object.create(proto)` creates a new object whose prototype is the object you provide. The new object does not copy the prototype's properties; it can access inherited properties through the prototype chain.\n\nThis is useful when you want explicit prototype-based object creation.",
    "explanationHindi": "`Object.create(proto)` ek naya object banata hai aur diye gaye object ko uska prototype set karta hai. Properties copy nahi hoti; new object prototype chain ke through unhe access kar sakta hai.\n\nIska use direct prototype-based inheritance create karne ke liye kiya ja sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "107. What are getter and setter functions in JavaScript?",
    "answer": "in js, getter (get) and setter (set) functions allow you to control\nhow properties of any Object are accessed and modified.\n\n• get -> Retrieves a property value\n• set -> updates a property value with custom logic.",
    "explanation": "A getter runs when a property is read, while a setter runs when a property is assigned. They let you add custom logic around reading or changing a property while keeping property-like syntax.\n\nFor example, a setter can validate a value before storing it.",
    "explanationHindi": "Getter property read hone par custom logic run karta hai aur setter property assign hone par. Isse property access ke around validation ya custom processing add kar sakte hain aur syntax property jaisa hi rehta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "108. Explain `Object.freeze()`, `Object.seal()`, and `Object.assign()`.",
    "answer": "Object.freeze()\n• object.freeze() makes an object immutable - you cannot\n  add, modify or delete properties.\n\nObject.seal() -> allows modification of existing properties\n                  but preventing adding or deleting properties.\n\nobject.assign() -> copies properties from one or more objects\n                   to a target object.\n• used for cloning or merging objects.\n• only perform a shallow copy.\n\neg -> const obj1 = { a:1, b:2 }\nconst obj2 = { b:3, c:4 }\n\nconst merged = object.assign({}, obj1, obj2);\nconsole.log(merged); -> {a:1,b:3,c:4}",
    "explanation": "`Object.freeze()` prevents adding, removing, or changing an object's own properties through normal mutation.\n\n`Object.seal()` prevents adding and deleting properties, but existing writable properties can still be changed.\n\n`Object.assign()` copies enumerable own properties from source objects into a target object. It performs a shallow copy, so nested object references are still shared.",
    "explanationHindi": "`Object.freeze()` object ko normally add, delete ya modify hone se rokta hai.\n\n`Object.seal()` new properties add ya delete hone nahi deta, lekin existing writable properties ko change kiya ja sakta hai.\n\n`Object.assign()` ek ya multiple objects ki properties target object mein copy karta hai. Ye shallow copy karta hai, isliye nested objects ke references shared reh sakte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "109. What is the difference between `setTimeout()` and `setInterval()`?",
    "answer": "SetTimeout() -> Runs a function once after a delay.\n\n• setInterval() -> Runs a function repeatedly at fixed intervals.\n\n-> use setTimeout() for delayed execution.\n-> use setInterval() for repeated tasks.",
    "explanation": "`setTimeout()` schedules a function to run once after the specified delay.\n\n`setInterval()` schedules repeated executions at a specified interval until the interval is cleared.\n\nIn React, both should be cleaned up when necessary, especially when they are created inside Effects.",
    "explanationHindi": "`setTimeout()` function ko delay ke baad ek baar run karta hai.\n\n`setInterval()` function ko fixed interval par repeatedly run karta hai jab tak `clearInterval()` se stop na karein.\n\nReact mein Effect ke andar timer create kiya ho to cleanup zaroor dena chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "110. Explain function composition in JavaScript.",
    "answer": "function Composition in js is a process of combining multiple\nfunctions into a single function, where the output of one\nfunction become the input of the next. this technique\nallows for cleaner , more modular and reusable code.\n\neg ->\nconst add = (x) => x+2;\nconst multiply = (x) => x*3;\n\nconst result = multiply(add(4)); -> (4+2)*3 = 18\nconsole.log(result);",
    "explanation": "Function composition means combining functions so the output of one function becomes the input of another.\n\nFor example, if `add` returns `x + 2` and `multiply` returns `x * 3`, composing them lets you calculate `multiply(add(4))`. This style can make transformations modular and reusable.",
    "explanationHindi": "Function composition mein ek function ka output doosre function ka input ban jata hai. Multiple small functions ko combine karke larger operation banaya ja sakta hai.\n\nIsse code modular aur reusable ban sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "111. What is debouncing and throttling?",
    "answer": "Debouncing -> Debouncing ensures that a function is\nexecuted only after a specific delay Since the\nlast time it was called.\n\n-> this is useful for handling rapid events\nlike keypress or window resizing.\n\neg -> Search input field - prevent sending API\nrequests on every keystroke , instead, wait until\nthe user stop typing.\n\nThrottling -> throttling ensures that a function is executed\nat most once specified interval, regardless of how\nmany times it is triggered.\n\n-> this is useful for events that fire continuously,\nlike scrolling or resize.\n\neg -> Button click on API polling -> prevent excessive API calls\nactions.\n\nScroll event: limit the number of times an event fires\nwhile scrolling.",
    "explanation": "Debouncing delays execution until the rapid activity has stopped for the specified delay. It is useful for search inputs where you want to wait until the user pauses typing.\n\nThrottling limits how often a function can execute during continuous activity. It is useful for high-frequency events such as scroll and resize.\n\nThe choice depends on the desired behavior: debounce waits for a pause; throttle controls the frequency while activity continues.",
    "explanationHindi": "Debouncing mein function tab execute hota hai jab user ki rapid activity kuch time ke liye ruk jaye. Search input iska common example hai.\n\nThrottling mein continuous activity ke dauran function ko controlled interval par execute karte hain. Scroll aur resize common examples hain.\n\nSimple difference: debounce = pause ka wait; throttle = execution frequency limit.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "112. How does JavaScript handle memory management and garbage collection?",
    "answer": "1) memory lifecycle in js\n\nJS memory management follows three main steps.\n\n1) Allocation - memory is allocated when variable , object or\n   functions are created.\n2) Usage - the program uses allocated memory for execution\n3) Dellocation (Garbage Collection) - when memory is no\n   longer needed, it is automatically freed.\n\n2) Javascript common cause of memory leaks.\n\ni) Unintentional Global Variables\n-> Global variable stay in memory throughout the program\n   execution.\n\nPro -> avoid global variable & use let,const to declare variable.\n\n2) Detached DOM element -> remove event listeners when\n   elements are deleted.",
    "explanation": "JavaScript memory management can be viewed as allocation, usage, and deallocation.\n\nWhen variables and objects are created, memory is allocated. The program uses that memory during execution. Garbage collection later reclaims memory that is no longer reachable.\n\nThe PDF highlights accidental global variables and detached DOM elements as memory-leak risks. In practice, long-lived references, timers, listeners, caches, and closures can also keep objects reachable.",
    "explanationHindi": "JavaScript memory lifecycle ko simple way mein allocation, usage aur deallocation samajh sakte hain.\n\nVariables aur objects create hone par memory allocate hoti hai. Program use karta hai, aur jab data reachable nahi rehta to garbage collector memory reclaim kar sakta hai.\n\nPDF mein accidental global variables aur detached DOM elements ko memory leak ke common reasons bataya gaya hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "113. How could you optimize a large JavaScript application?",
    "answer": "1) code Splitting & lazy loading -> use webpack/vite to\n   split code & load Components dynamically.\n\n2) Reduce Dom manipulation -> use Virtual DOM (React/Vue)\n\n3) Optimize memory usage -> use weakmaps , Remove event\n   listeners and avoid memory leaks.\n\n4) Optimize API calls -> use debouncing , throttling &\n   caching (GraphQL , Redux , localStorage).\n\n5) Compress Assets -> Use webp / AVIF for image &\n   defer / async scripts.\n\n6) Optimize loops & functions -> use map , foreach and\n   memoization (useMemo , useCallback).\n\n7) Use Service Workers -> cache assets & enable offline Support.\n\n8) minify & Compress Code -> use Terser / UglifyJS & enable\n   Gzip / Brotli Compression.\n\n9) monitor performance -> use chrome DevTools (performance ,\n   memory , lighthouse).",
    "explanation": "For a large JavaScript application, I would reduce the amount of code loaded initially, reduce unnecessary DOM work, control memory usage, optimize API traffic, compress assets, and measure performance.\n\nThe PDF recommends code splitting/lazy loading, reducing DOM manipulation, debouncing/throttling/caching, modern image formats, service workers, minification/compression, and Chrome DevTools monitoring. Which techniques are useful depends on the actual bottleneck.",
    "explanationHindi": "Large JavaScript application optimize karne ke liye initial code load kam karna, unnecessary DOM work reduce karna, memory usage control karna, API calls optimize karna aur assets compress karna useful hai.\n\nPDF mein code splitting, lazy loading, DOM optimization, debounce/throttle, caching, WebP/AVIF, service workers, minification/compression aur Chrome DevTools monitoring suggest kiya gaya hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "114. What are Web Workers, and how do they improve performance?",
    "answer": "web workers allow js to run background tasks without\nblocking the main thread (UI). They help improve performance\nby offloading heavy computations.\n\n-> How web workers improve performance\n\n• Run JS in the background - keeps the UI responsive\n• handle cpu-intensive tasks - Avoid UI lag (eg - large\n  calculation , data processing.\n• multithread - Uses separate thread\n               for parallel execution.\n• non-blocking execution\n\nWhen to use web workers in React\n• Heavy Computation\n• large API responses\n• Background tasks.",
    "explanation": "Web Workers run JavaScript in a worker thread instead of the main UI thread. This is useful for CPU-heavy work that would otherwise make the interface unresponsive.\n\nA React component can communicate with a worker using messages, then update React state when the worker returns the result.",
    "explanationHindi": "Web Workers JavaScript ko background worker thread par run karte hain, isliye heavy CPU work main UI thread ko block nahi karta.\n\nLarge calculations, data processing aur other CPU-intensive tasks ke liye useful hain. React component worker ko message bhej sakta hai aur result aane par state update kar sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "115. What is Cross-Site Scripting (XSS), and how do you prevent it?",
    "answer": "Cross-site Scripting (XSS) is a Security vulnerability\nwhere attackers inject malicious Scripts into web pages\nviewed by users.\n\n-> this can steal data , hijack session or manipulation page Content.",
    "explanation": "XSS happens when untrusted input is treated as executable HTML or JavaScript in a user's browser.\n\nTo reduce XSS risk, applications should safely escape/render untrusted content, validate input where appropriate, avoid unsafe HTML injection, and use browser security controls such as Content Security Policy where suitable. Frameworks such as React escape normal text output by default, but deliberately using unsafe HTML APIs still requires care.",
    "explanationHindi": "XSS tab hota hai jab untrusted user input browser mein executable HTML/JavaScript ke roop mein render ho jata hai.\n\nRisk reduce karne ke liye untrusted content ko safely render karna, unsafe HTML injection avoid karna, input validation aur suitable Content Security Policy use karna important hai. React normal text output ko escape karta hai, lekin unsafe HTML APIs use karte waqt extra care chahiye.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "116. Explain the difference between the Spread and Rest operators.",
    "answer": "both 1) Spread operator (...)\n\n• Expands an iterable (array , object , string) into individual\n  element.\n\n• Used in function calls , array merging and object cloning.\n\neg -> const arr = [1,2,3]\nconsole.log (...arr) -> 1,2,3  expanding an array\n\n-> copying & merging arrays.\nconst nums = [1,2,3]\nconst newNums = [...nums,4,5]\nconsole.log(newNums) -> [1,2,3,4,5]\n\n2) Rest operator (...)\n\n• collects multiple arguments into a Single array.\n\n• Used in function parameters and destructuring.\n\neg -> function sum (...numbers) {\n    return numbers.reduce((a,b) => a+b,0);\n}\n\nconsole.log(sum(1,2,3,4)); -> output - 10",
    "explanation": "The spread syntax expands an iterable or object into individual values/properties. It is useful for combining arrays, copying objects, and passing individual arguments.\n\nThe rest syntax collects multiple remaining values into one array or object. It is commonly used in function parameters and destructuring.\n\nThe syntax is the same `...`; the context tells you whether it is expanding or collecting.",
    "explanationHindi": "Spread aur rest dono `...` syntax use karte hain, lekin kaam opposite hota hai.\n\nSpread values ko expand karta hai, jaise arrays merge karna ya object copy karna.\n\nRest multiple values ko collect karke ek array/object mein rakhta hai, jaise function parameters ya destructuring mein.\n\nSimple difference: spread = expand, rest = collect.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "117. What is destructuring, and how does it work?",
    "answer": "No written prose answer is provided under the `Ans ->` line in the PDF. The PDF immediately shows these examples under the destructuring section:\n\n3) Destructuring array\n\nconst [first, second, ...rest] = [10,20,30,40,50]\n\nconsole.log(rest); -> [30,40,50]\n\nC) Destructure objects\n\nconst user = { name:'Alice', age:25, country:'usa' };\n\nconst { name, ...details } = user;\n\nconsole.log(details);\n\n-> { age:25, country:'usa' }",
    "explanation": "Destructuring is a JavaScript syntax for extracting values from arrays or properties from objects into variables.\n\nFor arrays, values are assigned by position. For objects, values are matched by property name. Rest syntax can collect the remaining values or properties, as shown in the PDF examples.",
    "explanationHindi": "Destructuring JavaScript ka syntax hai jisse array ke values ya object ki properties ko directly variables mein extract kar sakte hain.\n\nArray destructuring position ke basis par hoti hai. Object destructuring property name ke basis par hoti hai. `...rest` remaining values/properties ko collect kar sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "118. Explain default parameters in JavaScript.",
    "answer": "function greet (name = \"Guest\") {\n    console.log (`Hello, ${name}`);\n}\n\ngreet();        -> Hello guest\n\ngreet(\"abc\");   -> hello abc.",
    "explanation": "A default parameter gives a function parameter a value to use when the caller does not provide a value, or passes `undefined`.\n\nIn the PDF example, `name` becomes `\"Guest\"` when `greet()` is called without an argument. When `\"abc\"` is passed, that value is used instead.",
    "explanationHindi": "Default parameter function parameter ko default value deta hai jab caller value provide nahi karta ya `undefined` pass karta hai.\n\nPDF ke example mein `greet()` par `name` ki value `\"Guest\"` hoti hai, aur `greet(\"abc\")` par `\"abc\"` use hota hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "119. What is `arguments`, and when would you use it?",
    "answer": "No corresponding answer for this question was found in the provided PDF scan.",
    "explanation": "The provided PDF does not contain a written answer for this exact question. In JavaScript, the `arguments` object is an array-like object available inside traditional non-arrow functions that contains the arguments passed to that function.\n\nFor modern code, rest parameters such as `function sum(...args)` are usually clearer when you need to collect variable arguments.",
    "explanationHindi": "Provided PDF mein is exact question ka written answer nahi mila. JavaScript mein `arguments` traditional non-arrow function ke andar passed arguments ka array-like object hota hai.\n\nModern code mein variable arguments collect karne ke liye `...args` rest parameter usually clearer hota hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "120. Explain how Set and Map work in JavaScript.",
    "answer": "Set -> use set when you need unique value (eg . removing\nduplicates)\n\nmap -> takes an array or Object then iterate every element of\nthat array & Object and return a new array.",
    "explanation": "A JavaScript `Set` stores unique values, so it is useful when duplicates should not be stored.\n\nA JavaScript `Map` is a key-value collection where keys can be values of many types. Note that the PDF's answer describes the array `.map()` method rather than the JavaScript `Map` collection. The `.map()` array method transforms each array item and returns a new array.",
    "explanationHindi": "`Set` unique values store karta hai, isliye duplicates remove karne ke liye useful hai.\n\nPDF mein `map` ka answer array `.map()` method ko describe karta hai, JavaScript `Map` collection ko nahi. Array `.map()` har element par function chala kar new array return karta hai. JavaScript `Map` alag key-value collection hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "121. What are WeakMap and WeakSet, and when would you use them?",
    "answer": "A weakMap is Similar to a map , but\n\n1) keys must be objects (not primitives)\n\n2) if there are no other reference to the key , it gets\n   garbage Collected.\n\n3) It does not Support iteration methods (foreach, keys,\n   values, entries)\n\n-> Use weakMap , when you need temporary key-value Storage for\nobject , such as caching or private properties.",
    "explanation": "A `WeakMap` stores key-value pairs where the keys must be objects. If an object key is no longer strongly referenced elsewhere, the garbage collector can reclaim it and the corresponding WeakMap entry does not keep the object alive.\n\nThe PDF answer does not separately explain `WeakSet`. A `WeakSet` stores objects as unique values and also does not provide normal iteration over all stored values. Both are useful when you want object-associated data without keeping those objects alive solely because of the collection.",
    "explanationHindi": "`WeakMap` mein keys objects honi chahiye. Agar key object ko kahin aur strong reference nahi mil raha, to garbage collector use clean kar sakta hai aur WeakMap us object ko alive rakhne ke liye force nahi karta.\n\nPDF mein `WeakSet` ko separately explain nahi kiya gaya. `WeakSet` objects ko unique values ke roop mein store karta hai aur normal iteration provide nahi karta. Caching ya temporary object-related data ke liye ye structures useful ho sakte hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "122. What is the difference between ES6 classes and constructor functions?",
    "answer": "Before ES6 (ECMAScript 2015) , Constructor functions were\nused to create Objects and handle inheritance , ES6 introduce\nthe class Syntax.\nWhich provides a more Structured and readable way to\ndefine Object blueprint.",
    "explanation": "Before ES6, constructor functions with prototypes were a common way to create objects and implement inheritance.\n\nES6 classes provide cleaner syntax for defining constructors and methods, but JavaScript classes still use the prototype-based inheritance model underneath.",
    "explanationHindi": "ES6 se pehle constructor functions aur prototypes ka use objects aur inheritance ke liye common tha.\n\nES6 classes ne object blueprint, constructor aur methods define karne ke liye cleaner syntax diya. Lekin classes ke peeche JavaScript ka prototype-based inheritance model hi use hota hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "123. What is `super()` in ES6 classes?",
    "answer": "Super() is a Special function used inside a Subclass to call the\nconstructor of its parent (superclass) , it is essential when extending\na class using extends.",
    "explanation": "In a derived class, `super()` calls the parent class constructor and initializes the parent part of the object. In a derived constructor, it must be called before using `this` when the class requires an explicit constructor.\n\n`super.method()` can also call a parent class method.",
    "explanationHindi": "`super()` subclass ke constructor ke andar parent class ke constructor ko call karta hai. `extends` ke saath class inheritance use karte waqt ye important hai.\n\n`super.method()` ke through parent class ka method bhi call kiya ja sakta hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "124. What is `Promise.all()` in JavaScript?",
    "answer": "promise.all() is a method that takes an array of promises\nand Returns a Single promises that :\n\n1) Resolves when all the input promises have resolved.\n2) Rejects immediately if any promises rejects.",
    "explanation": "`Promise.all()` accepts an iterable of Promises and returns one Promise. It fulfills when all input Promises fulfill and gives an array of their results in the same order.\n\nIf any input Promise rejects, the returned Promise rejects with that rejection. Other operations that were already started are not automatically cancelled.",
    "explanationHindi": "`Promise.all()` multiple Promises ko ek saath handle karne ke liye use hota hai. Jab sabhi Promises resolve ho jati hain, returned Promise resolve hota hai aur results same order mein milte hain.\n\nAgar koi ek Promise reject ho jaye, returned Promise reject ho jata hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "125. What is `Promise.race()` in JavaScript?",
    "answer": "promise.race() take an array of promises and Returns a\nSingle promise that.\n\n• Resolves or Rejects as soon as the first promise settle (i.e either\n  resolves or rejects)\n\n• Ignore all other promises once the first one settles.",
    "explanation": "`Promise.race()` returns a Promise that settles as soon as the first input Promise settles. The first settled Promise determines whether the returned Promise fulfills or rejects.\n\nThe other Promises continue running; `race()` does not automatically cancel them.",
    "explanationHindi": "`Promise.race()` multiple Promises mein jo Promise sabse pehle settle hoti hai uske result ke basis par returned Promise settle ho jata hai.\n\nImportant point: baaki Promises automatically cancel nahi hoti; woh background mein continue kar sakti hain.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "126. How do you handle errors with `async/await`?",
    "answer": "Error handling methods.\n\n1) try...catch inside async function\n2) .catch of function call\n3) promise.all() + try...catch\n4) promise.allSettled()\n5) process.on ('unhandledRejection')",
    "explanation": "With `async/await`, the most common pattern is `try...catch` around awaited operations. If an async function returns a Promise, the caller can also handle rejection with `.catch()`.\n\nFor multiple independent operations, `Promise.all()` can be wrapped in `try...catch`, while `Promise.allSettled()` is useful when you want the result of every operation even when some fail. Node.js also provides process-level handling for unhandled rejections, but application code should handle expected errors explicitly.",
    "explanationHindi": "`async/await` ke saath error handle karne ka common way `try...catch` hai.\n\nAsync function ke returned Promise par `.catch()` bhi use kar sakte hain. Multiple promises ke liye `Promise.all()` ko `try...catch` ke andar use kar sakte hain. Agar har Promise ka result chahiye chahe fail ho ya success, to `Promise.allSettled()` useful hai. Expected application errors ko explicitly handle karna better hai.\n\n---",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  },
  {
    "technologySlug": "advanced-questions-bank-1",
    "topicSlug": "advanced-questions-101-126",
    "question": "✅ Remaining Questions Complete",
    "answer": "No PDF answer provided.",
    "explanation": "",
    "explanationHindi": "",
    "difficulty": "hard",
    "questionType": "Conceptual",
    "preparationLevels": [
      "advanced"
    ],
    "isImportant": true,
    "tags": [
      "advanced",
      "react",
      "javascript"
    ]
  }
];
