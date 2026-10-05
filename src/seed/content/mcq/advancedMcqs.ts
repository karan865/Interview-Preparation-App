import { CuratedMCQ } from './mcqSeedData';

export const advancedMCQs: CuratedMCQ[] = [
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `map()` do in JavaScript?",
    answer: "A. `map()` creates a new array by transforming each element with a callback.",
    explanation: "It is useful when you want one output value for each input element. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "`map()` creates a new array by transforming each element with a callback."}, {"id": "B", "text": "It removes elements that fail a condition from the array."}, {"id": "C", "text": "It combines all elements into one accumulated value."}, {"id": "D", "text": "It only runs a callback for side effects and returns no new array."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `filter()` do in JavaScript?",
    answer: "B. `filter()` creates a new array containing only elements that pass a condition.",
    explanation: "It is commonly used when you want to keep matching items and remove the rest. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It transforms every element into a new value for a new array."}, {"id": "B", "text": "`filter()` creates a new array containing only elements that pass a condition."}, {"id": "C", "text": "It combines all elements into one result."}, {"id": "D", "text": "It sorts the original array in ascending order automatically."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `reduce()` do in JavaScript?",
    answer: "C. `reduce()` processes array elements and combines them into a single accumulated result.",
    explanation: "It is useful for totals, grouping, building objects, and other accumulator-based operations. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It creates a new array by transforming every element."}, {"id": "B", "text": "It keeps only elements that pass a condition."}, {"id": "C", "text": "`reduce()` processes array elements and combines them into a single accumulated result."}, {"id": "D", "text": "It only executes a callback and ignores its returned values."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `forEach()` do in JavaScript?",
    answer: "D. `forEach()` runs a callback for each array element and is mainly used for side effects.",
    explanation: "Unlike `map()`, it does not create a new transformed array from the callback result. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It creates a new array from each callback result."}, {"id": "B", "text": "It combines the array into a single accumulated value."}, {"id": "C", "text": "It removes elements that do not match a condition."}, {"id": "D", "text": "`forEach()` runs a callback for each array element and is mainly used for side effects."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `sort()` do in JavaScript?",
    answer: "A. `sort()` orders the elements of an array and mutates the original array.",
    explanation: "A compare function can be supplied to define numeric or custom ordering. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "`sort()` orders the elements of an array and mutates the original array."}, {"id": "B", "text": "It creates a new array without changing the original order."}, {"id": "C", "text": "It combines array values into one result."}, {"id": "D", "text": "It removes elements based on a callback condition."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a higher-order function in JavaScript?",
    answer: "B. A higher-order function accepts a function as an argument, returns a function, or does both.",
    explanation: "Array methods such as `map()` and `filter()` are common examples because they accept callback functions. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a function that can only accept numbers."}, {"id": "B", "text": "A higher-order function accepts a function as an argument, returns a function, or does both."}, {"id": "C", "text": "It is a function that must always return a string."}, {"id": "D", "text": "It is a React component that cannot receive callbacks."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is hoisting in JavaScript?",
    answer: "C. Moving declarations to the top of their scope conceptually",
    explanation: "Hoisting is JavaScript's behavior of processing declarations before the code executes. Function declarations can generally be called before their definition, while `var` is hoisted with an initial value of `undefined`. `let` and `const` are also hoisted internally but stay in the Temporal Dead Zone until their declaration is reached. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It permanently deletes declarations before execution."}, {"id": "B", "text": "It converts JavaScript code into HTML before runtime."}, {"id": "C", "text": "Moving declarations to the top of their scope conceptually"}, {"id": "D", "text": "It means every function runs asynchronously."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is the Event Loop in JavaScript?",
    answer: "D. The Event Loop coordinates synchronous execution with queued asynchronous callbacks and microtasks.",
    explanation: "It lets JavaScript handle asynchronous work without blocking the main execution thread. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It replaces the JavaScript engine completely."}, {"id": "B", "text": "It is responsible only for rendering CSS animations."}, {"id": "C", "text": "It makes every asynchronous operation run synchronously."}, {"id": "D", "text": "The Event Loop coordinates synchronous execution with queued asynchronous callbacks and microtasks."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How does the Event Loop help Node.js handle asynchronous operations?",
    answer: "A. It allows Node.js to process callbacks for completed asynchronous I/O while continuing to handle other work.",
    explanation: "This event-driven model is a major reason Node.js can handle many concurrent I/O-bound operations. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It allows Node.js to process callbacks for completed asynchronous I/O while continuing to handle other work."}, {"id": "B", "text": "It replaces the JavaScript engine completely."}, {"id": "C", "text": "It is responsible only for rendering CSS animations."}, {"id": "D", "text": "It makes every asynchronous operation run synchronously."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "Promises or `setTimeout` \u2014 which one executes first and why?",
    answer: "B. Promise callbacks usually execute first because they are microtasks",
    explanation: "Promise callbacks are microtasks, while `setTimeout()` callbacks are timer tasks/macrotasks. After the current synchronous code finishes, JavaScript normally drains the microtask queue before moving to the next task such as a timer. Therefore, a resolved Promise callback usually runs before a zero-delay `setTimeout()`. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a CSS rule for delayed animations."}, {"id": "B", "text": "Promise callbacks usually execute first because they are microtasks"}, {"id": "C", "text": "It represents only synchronous function calls."}, {"id": "D", "text": "It can have unlimited state changes after it is settled."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a Pure Component?",
    answer: "C. A component that avoids re-rendering when its inputs/props/state have not meaningfully changed",
    explanation: "A pure component is designed to render the same output when its relevant inputs have not changed. In class components, `PureComponent` performs shallow comparison of props and state. In function components, `React.memo()` provides a similar optimization for props. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a component that cannot receive props."}, {"id": "B", "text": "It is a component that only contains CSS."}, {"id": "C", "text": "A component that avoids re-rendering when its inputs/props/state have not meaningfully changed"}, {"id": "D", "text": "It is a component with no rendered output."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is the `this` keyword in JavaScript?",
    answer: "D. It refers to the current execution context/object depending on how the function is called",
    explanation: "`this` depends on how a regular function is called, not simply where it is written. For an object method it can refer to that object; with `new` it refers to the new instance; with `call/apply/bind` it can be explicitly controlled. Arrow functions do not have their own `this` and inherit it from the surrounding scope. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It always refers to the global object."}, {"id": "B", "text": "It always refers to the parent function."}, {"id": "C", "text": "It is available only inside loops."}, {"id": "D", "text": "It refers to the current execution context/object depending on how the function is called"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a closure in JavaScript?",
    answer: "A. A function that remembers variables from its outer lexical scope",
    explanation: "A closure happens when a function keeps access to variables from its outer lexical scope even after the outer function has finished executing. This is useful for private data, callbacks, factories, and maintaining state between calls. Closures are a very common interview topic because they explain how JavaScript scope works. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A function that remembers variables from its outer lexical scope"}, {"id": "B", "text": "It is a function that cannot access outer variables."}, {"id": "C", "text": "It means a browser tab has been closed."}, {"id": "D", "text": "It is a special React component."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you pass data from a child component to a parent component?",
    answer: "B. Pass a callback function from parent to child and call it with the data",
    explanation: "The parent creates a callback function and passes it to the child as a prop. The child calls that callback with the required data, and the parent receives the value. React data normally flows down through props, so this callback pattern is the common way to send information upward. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "The child directly changes the parent's local variable."}, {"id": "B", "text": "Pass a callback function from parent to child and call it with the data"}, {"id": "C", "text": "CSS automatically sends the value to the parent."}, {"id": "D", "text": "useEffect is required for every parent-child update."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `useState()` used for in React?",
    answer: "C. `useState()` manages local component state and schedules a re-render when its setter updates the state.",
    explanation: "It is a straightforward choice for simple values or state with simple update logic. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly used to define CSS classes."}, {"id": "B", "text": "It can store state but its setter never causes rendering."}, {"id": "C", "text": "`useState()` manages local component state and schedules a re-render when its setter updates the state."}, {"id": "D", "text": "It is available only in class components."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "When is `useReducer()` useful in React?",
    answer: "D. `useReducer()` is useful when state has complex update logic or many related state transitions.",
    explanation: "Actions describe what happened and the reducer determines the next state, making complex transitions easier to organize. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is intended only for styling components."}, {"id": "B", "text": "It removes the need for state entirely."}, {"id": "C", "text": "It is mainly used to create HTTP routes."}, {"id": "D", "text": "`useReducer()` is useful when state has complex update logic or many related state transitions."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a dev dependency?",
    answer: "A. A dev dependency is mainly needed for development, testing, linting, or building rather than application runtime.",
    explanation: "Examples include testing and linting tools. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A dev dependency is mainly needed for development, testing, linting, or building rather than application runtime."}, {"id": "B", "text": "It is required by end users for every production request."}, {"id": "C", "text": "It is used only as a database table."}, {"id": "D", "text": "It must always be bundled into the browser runtime."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a normal/runtime dependency?",
    answer: "B. A normal dependency is a package the application needs while it runs.",
    explanation: "Libraries used directly by the running application are normally listed under `dependencies`. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is used only for local linting and testing."}, {"id": "B", "text": "A normal dependency is a package the application needs while it runs."}, {"id": "C", "text": "It is never needed after installation."}, {"id": "D", "text": "It is used only to configure Git hooks."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `package.json`?",
    answer: "C. `package.json` describes project metadata, scripts, and dependency requirements.",
    explanation: "It tells npm what the project needs and how common project commands can be run. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It records only the exact installed dependency tree."}, {"id": "B", "text": "It stores compiled JavaScript output only."}, {"id": "C", "text": "`package.json` describes project metadata, scripts, and dependency requirements."}, {"id": "D", "text": "It is generated solely from the npm cache."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `package-lock.json`?",
    answer: "D. `package-lock.json` records the exact dependency tree and resolved versions installed by npm.",
    explanation: "It helps keep installations reproducible across machines and CI environments. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is the main file for project scripts and metadata."}, {"id": "B", "text": "It stores application source code."}, {"id": "C", "text": "It replaces the need for package.json."}, {"id": "D", "text": "`package-lock.json` records the exact dependency tree and resolved versions installed by npm."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is ESLint?",
    answer: "A. A tool that finds and reports JavaScript/TypeScript code problems and style issues",
    explanation: "ESLint is a static analysis/linting tool for JavaScript and TypeScript. It checks code for possible bugs, bad patterns, and project style rules before the code runs. It can also work with plugins and auto-fix many formatting or rule violations. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A tool that finds and reports JavaScript/TypeScript code problems and style issues"}, {"id": "B", "text": "It is a database engine."}, {"id": "C", "text": "It is a browser."}, {"id": "D", "text": "It is a CSS framework."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is Canvas in web development?",
    answer: "B. Canvas is a pixel-based drawing surface that is commonly controlled through JavaScript.",
    explanation: "It is useful for games, dynamic graphics, and many-pixel drawing where individual shapes do not need to be DOM elements. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It represents shapes as normal DOM elements by default."}, {"id": "B", "text": "Canvas is a pixel-based drawing surface that is commonly controlled through JavaScript."}, {"id": "C", "text": "It is primarily a database visualization format."}, {"id": "D", "text": "It can only display text and cannot draw graphics."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is SVG in web development?",
    answer: "C. SVG is a vector-based, element-oriented graphics format whose shapes can be individually styled and manipulated.",
    explanation: "It is especially useful for scalable icons, diagrams, and charts. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a pixel-only drawing buffer with no individual elements."}, {"id": "B", "text": "It is available only on the server."}, {"id": "C", "text": "SVG is a vector-based, element-oriented graphics format whose shapes can be individually styled and manipulated."}, {"id": "D", "text": "It cannot scale without losing quality."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is CSS specificity?",
    answer: "D. The rule used to decide which CSS selector wins when multiple rules apply",
    explanation: "CSS specificity decides which matching selector has higher priority when multiple rules target the same element. IDs generally have higher specificity than classes/attributes/pseudo-classes, which are higher than element selectors. If specificity is equal, later rules normally win; `!important` changes the priority rules and should be used carefully. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It measures website loading speed."}, {"id": "B", "text": "It determines image dimensions."}, {"id": "C", "text": "It counts the number of HTML pages."}, {"id": "D", "text": "The rule used to decide which CSS selector wins when multiple rules apply"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a Promise in JavaScript?",
    answer: "A. A Promise represents the eventual result or failure of an asynchronous operation.",
    explanation: "It can be pending, fulfilled, or rejected and can be handled with methods such as `.then()` and `.catch()`. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A Promise represents the eventual result or failure of an asynchronous operation."}, {"id": "B", "text": "It is a CSS rule for delayed animations."}, {"id": "C", "text": "It represents only synchronous function calls."}, {"id": "D", "text": "It can have unlimited state changes after it is settled."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `async/await` in JavaScript?",
    answer: "B. `async/await` is syntax built on top of Promises that makes asynchronous code easier to read.",
    explanation: "An `async` function returns a Promise, and `await` pauses that function until a Promise settles. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It removes the need for Promises completely."}, {"id": "B", "text": "`async/await` is syntax built on top of Promises that makes asynchronous code easier to read."}, {"id": "C", "text": "It makes asynchronous operations execute synchronously on the whole application."}, {"id": "D", "text": "It can be used only with CSS animations."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a prototype in JavaScript?",
    answer: "C. An object from which another object can inherit properties and methods",
    explanation: "A prototype is an object that another object can use as a fallback source for properties and methods. JavaScript looks up a missing property through the prototype chain. This is the basis of prototypal inheritance and is used behind JavaScript classes as well. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a CSS file used by objects."}, {"id": "B", "text": "It is a database table inherited by queries."}, {"id": "C", "text": "An object from which another object can inherit properties and methods"}, {"id": "D", "text": "It is a React route definition."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is memoization in JavaScript?",
    answer: "D. Caching a function's result so repeated inputs can be faster",
    explanation: "Memoization stores a previous result so the same expensive calculation does not need to be repeated for the same inputs. It can improve performance when a function is expensive and receives repeated inputs. The trade-off is extra memory and cache-management complexity. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It deletes previous function results."}, {"id": "B", "text": "It forces every function to run twice."}, {"id": "C", "text": "It converts JavaScript into JSON."}, {"id": "D", "text": "Caching a function's result so repeated inputs can be faster"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is event bubbling in JavaScript?",
    answer: "A. An event moves from the target element upward through its ancestors",
    explanation: "Event bubbling means an event that occurs on a nested element can propagate upward through its parent elements. For example, clicking a button inside a div can trigger handlers on both the button and the div. Event delegation uses this behavior by placing one handler on a parent. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "An event moves from the target element upward through its ancestors"}, {"id": "B", "text": "Events can move only downward and never upward."}, {"id": "C", "text": "The browser immediately deletes the event."}, {"id": "D", "text": "It is a CSS animation."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is an Error Boundary in React?",
    answer: "B. A React component that catches rendering errors in its child component tree",
    explanation: "An Error Boundary is a React component that catches certain rendering/lifecycle errors in its child tree and displays fallback UI instead of crashing that part of the interface. Traditional Error Boundaries use class-based APIs. They do not automatically catch every kind of error, such as all event-handler or asynchronous errors. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It catches every API error automatically."}, {"id": "B", "text": "A React component that catches rendering errors in its child component tree"}, {"id": "C", "text": "It is used mainly for database queries."}, {"id": "D", "text": "It is a CSS layout boundary."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `every()` do in JavaScript?",
    answer: "C. `every()` returns `true` only when all elements pass the supplied test.",
    explanation: "It is useful for checking whether an entire array satisfies a condition. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It returns true when at least one element passes."}, {"id": "B", "text": "It returns a new filtered array."}, {"id": "C", "text": "`every()` returns `true` only when all elements pass the supplied test."}, {"id": "D", "text": "It sorts the original array."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `some()` do in JavaScript?",
    answer: "D. `some()` returns `true` when at least one element passes the supplied test.",
    explanation: "It is useful for checking whether an array contains at least one item matching a condition. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It returns true only when every element passes."}, {"id": "B", "text": "It always returns a new array."}, {"id": "C", "text": "It sorts the array before checking values."}, {"id": "D", "text": "`some()` returns `true` when at least one element passes the supplied test."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What are the new features introduced in ES6?",
    answer: "A. let/const, arrow functions, classes, modules, promises, destructuring, spread/rest, etc.",
    explanation: "ES6, also called ECMAScript 2015, introduced major features such as `let`, `const`, arrow functions, classes, template literals, destructuring, modules, default parameters, spread/rest syntax, Promises, Maps, Sets, and more. These features made modern JavaScript easier to structure and write. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "let/const, arrow functions, classes, modules, promises, destructuring, spread/rest, etc."}, {"id": "B", "text": "It introduced only HTML tags."}, {"id": "C", "text": "It introduced only CSS variables."}, {"id": "D", "text": "It introduced only database features."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is currying in JavaScript?",
    answer: "B. Converting a function with multiple arguments into a sequence of single-argument functions",
    explanation: "Currying converts a function that takes multiple arguments into a sequence of functions that each take one argument. For example, `add(2, 3)` can become `add(2)(3)`. It is useful for creating reusable partially configured functions and is related to functional programming. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It sorts an array automatically."}, {"id": "B", "text": "Converting a function with multiple arguments into a sequence of single-argument functions"}, {"id": "C", "text": "It creates a class from an object."}, {"id": "D", "text": "It removes closures from functions."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is the `<iframe>` tag in HTML?",
    answer: "C. It embeds another webpage or document inside the current page",
    explanation: "`iframe` embeds another HTML document or webpage inside the current page. It is commonly used for things like embedded videos, maps, or external widgets. Security controls such as `sandbox` and appropriate headers should be considered when embedding untrusted content. ## MongoDB Interview Questions ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It creates a database table."}, {"id": "B", "text": "It defines a CSS custom property."}, {"id": "C", "text": "It embeds another webpage or document inside the current page"}, {"id": "D", "text": "It starts a JavaScript loop."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What are some of the advantages of MongoDB?",
    answer: "D. Flexible document structure, easy scaling, and good support for JSON-like data",
    explanation: "MongoDB is a document-oriented database that stores data in BSON documents, which are similar to JSON objects. Its flexible structure can be useful when data changes often or naturally fits documents. It also supports indexes, aggregation, replication, and horizontal scaling. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It requires a fixed table for every field."}, {"id": "B", "text": "It stores only plain text."}, {"id": "C", "text": "It cannot scale horizontally."}, {"id": "D", "text": "Flexible document structure, easy scaling, and good support for JSON-like data"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "When should you use MongoDB?",
    answer: "A. When flexible document data and easy horizontal scaling are useful",
    explanation: "MongoDB is a good choice when the application benefits from flexible document structures, fast development with JSON-like data, or horizontal scaling. It is especially convenient for many content, catalog, event, and rapidly changing-schema applications. The best database still depends on the application's consistency, query, and relational requirements. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "When flexible document data and easy horizontal scaling are useful"}, {"id": "B", "text": "Only for CSS-based applications."}, {"id": "C", "text": "Only for static images."}, {"id": "D", "text": "Only for operating-system files."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What are the data types in MongoDB?",
    answer: "B. String, Number, Boolean, Date, ObjectId, Array, Object, Null, etc.",
    explanation: "MongoDB supports types such as string, double, integer, decimal, boolean, date, timestamp, ObjectId, array, embedded document, binary data, regular expression, and null. MongoDB stores these using BSON rather than plain JSON. Understanding ObjectId and embedded documents is especially useful in interviews. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "MongoDB supports only strings."}, {"id": "B", "text": "String, Number, Boolean, Date, ObjectId, Array, Object, Null, etc."}, {"id": "C", "text": "MongoDB supports only numbers and booleans."}, {"id": "D", "text": "MongoDB uses only HTML-specific types."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you perform queries in MongoDB?",
    answer: "C. Use MongoDB query methods such as `find()`, `findOne()`, and filter objects",
    explanation: "Queries use filter objects and methods such as `find()`, `findOne()`, and aggregation pipelines. For example, `{ age: { $gt: 18 } }` can find users older than 18. Indexes should be designed for frequently used queries to improve performance. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "MongoDB queries are written using CSS selectors only."}, {"id": "B", "text": "`console.log()` is the MongoDB query API."}, {"id": "C", "text": "Use MongoDB query methods such as `find()`, `findOne()`, and filter objects"}, {"id": "D", "text": "HTML forms are the only way to query MongoDB."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you delete a document in MongoDB?",
    answer: "D. Use `deleteOne()` or `deleteMany()`",
    explanation: "`deleteOne()` removes one matching document, while `deleteMany()` removes all matching documents. A filter should normally be supplied so you delete only the intended records. In production, destructive operations should be handled carefully and validated. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a group of MongoDB collections."}, {"id": "B", "text": "It is the entire MongoDB server."}, {"id": "C", "text": "It can contain only flat string values."}, {"id": "D", "text": "Use `deleteOne()` or `deleteMany()`"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you update a document in MongoDB?",
    answer: "A. Use `updateOne()`, `updateMany()`, or related update methods",
    explanation: "`updateOne()` changes the first matching document, while `updateMany()` changes all matching documents. Operators such as `$set`, `$inc`, `$push`, and `$unset` are commonly used. The filter determines which documents are affected. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Use `updateOne()`, `updateMany()`, or related update methods"}, {"id": "B", "text": "It is a group of MongoDB collections."}, {"id": "C", "text": "It is the entire MongoDB server."}, {"id": "D", "text": "It can contain only flat string values."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you add data in MongoDB?",
    answer: "B. Use `insertOne()` or `insertMany()`",
    explanation: "`insertOne()` adds a single document and `insertMany()` adds multiple documents. MongoDB assigns an `_id` automatically if one is not supplied. Data should still be validated before insertion, even though MongoDB has a flexible schema. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Use an HTML helper such as `addHTML()`."}, {"id": "B", "text": "Use `insertOne()` or `insertMany()`"}, {"id": "C", "text": "Use `console.log()` to insert documents."}, {"id": "D", "text": "MongoDB requires dropping a collection before every insert."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What are some features of MongoDB?",
    answer: "C. Document database, flexible schema, indexing, aggregation, replication, and sharding",
    explanation: "MongoDB provides document storage, flexible schemas, indexes, aggregation pipelines, replication, sharding, transactions, and a rich query language. These features make it useful for both simple and large-scale applications. Its document model can reduce the need for joins in some data designs. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is only a file-storage system."}, {"id": "B", "text": "It is mainly a frontend rendering engine."}, {"id": "C", "text": "Document database, flexible schema, indexing, aggregation, replication, and sharding"}, {"id": "D", "text": "It only processes CSS."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is replication in MongoDB?",
    answer: "D. Replication keeps copies of data on multiple MongoDB servers to improve availability and failover.",
    explanation: "A replica set provides redundancy so another member can take over if the primary fails. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It distributes different portions of data across shards."}, {"id": "B", "text": "It removes duplicate documents from a collection."}, {"id": "C", "text": "It is mainly used to rename MongoDB collections."}, {"id": "D", "text": "Replication keeps copies of data on multiple MongoDB servers to improve availability and failover."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is sharding in MongoDB?",
    answer: "A. Sharding distributes data across multiple servers so large datasets and workloads can scale horizontally.",
    explanation: "It is mainly about distributing data and load, whereas replication is mainly about redundancy and availability. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Sharding distributes data across multiple servers so large datasets and workloads can scale horizontally."}, {"id": "B", "text": "It keeps identical copies of all data on every server."}, {"id": "C", "text": "It is mainly a backup-only mechanism."}, {"id": "D", "text": "It prevents MongoDB from distributing workload across servers."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is MongoDB Shell?",
    answer: "B. A command-line tool for interacting with MongoDB",
    explanation: "MongoDB Shell, commonly called `mongosh`, is a command-line environment for interacting with MongoDB. You can connect to a server, run queries, inspect collections, and perform administrative tasks. It is useful for development, debugging, and database operations. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a browser developer tool."}, {"id": "B", "text": "A command-line tool for interacting with MongoDB"}, {"id": "C", "text": "It is a CSS editor."}, {"id": "D", "text": "It is a React component."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a Document in MongoDB?",
    answer: "C. A document is a single MongoDB record represented as a BSON document.",
    explanation: "It is similar to a row conceptually, but its structure can contain nested objects and arrays. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a group of MongoDB collections."}, {"id": "B", "text": "It is the entire MongoDB server."}, {"id": "C", "text": "A document is a single MongoDB record represented as a BSON document."}, {"id": "D", "text": "It can contain only flat string values."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a Collection in MongoDB?",
    answer: "D. A collection is a group of related MongoDB documents.",
    explanation: "It is roughly comparable to a table in a relational database, although MongoDB documents can have flexible structures. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is one BSON record only."}, {"id": "B", "text": "It is the entire database server."}, {"id": "C", "text": "It is a single property inside a document."}, {"id": "D", "text": "A collection is a group of related MongoDB documents."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is WebSocket?",
    answer: "A. WebSocket is a protocol that provides a persistent two-way communication channel between a client and server.",
    explanation: "It is useful when the server and client need to exchange real-time messages without repeated HTTP polling. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "WebSocket is a protocol that provides a persistent two-way communication channel between a client and server."}, {"id": "B", "text": "It is a one-way protocol where only the server can send data."}, {"id": "C", "text": "It requires a new HTTP request for every message."}, {"id": "D", "text": "It is primarily a database query language."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is Socket.IO?",
    answer: "B. Socket.IO is a higher-level real-time communication library that provides an event-based API plus features such as reconnection and rooms.",
    explanation: "It can use WebSocket when available but is not simply the same thing as the WebSocket protocol. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is exactly the same protocol as raw WebSocket."}, {"id": "B", "text": "Socket.IO is a higher-level real-time communication library that provides an event-based API plus features such as reconnection and rooms."}, {"id": "C", "text": "It is a CSS library for socket-shaped UI elements."}, {"id": "D", "text": "It provides only static file storage."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you update a component every second?",
    answer: "C. Use `setInterval()` with proper cleanup, usually inside `useEffect()`",
    explanation: "In React, use `setInterval()` inside `useEffect()` when you need a repeated update. Return a cleanup function that calls `clearInterval()` so the timer does not continue after the component unmounts. Without cleanup, you can create duplicate timers and memory/performance problems. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Reload the browser every second."}, {"id": "B", "text": "Use CSS animation to change React state."}, {"id": "C", "text": "Use `setInterval()` with proper cleanup, usually inside `useEffect()`"}, {"id": "D", "text": "Create a new component every second without cleanup."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `useRef()` in React?",
    answer: "D. `useRef()` stores a mutable value that persists between renders without causing a re-render when changed.",
    explanation: "It is commonly used for DOM references, timers, previous values, and other mutable instance-like data. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a CSS feature."}, {"id": "B", "text": "It is a database-only feature."}, {"id": "C", "text": "It requires all work to be synchronous."}, {"id": "D", "text": "`useRef()` stores a mutable value that persists between renders without causing a re-render when changed."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is the main difference between `useState()` and `useRef()`?",
    answer: "A. Updating state schedules a React re-render, while changing `ref.current` does not.",
    explanation: "Use state when the value affects rendered UI; use a ref when you need persistent mutable data without triggering rendering. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Updating state schedules a React re-render, while changing `ref.current` does not."}, {"id": "B", "text": "It is mainly used to define CSS classes."}, {"id": "C", "text": "It can store state but its setter never causes rendering."}, {"id": "D", "text": "It is available only in class components."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is Jest?",
    answer: "B. A JavaScript testing framework",
    explanation: "Jest is a JavaScript testing framework used for unit and integration-style tests. It provides test runners, assertions, mocks, spies, and coverage support. It is commonly used with React, Node.js, and other JavaScript projects. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a database."}, {"id": "B", "text": "A JavaScript testing framework"}, {"id": "C", "text": "It is a CSS preprocessor."}, {"id": "D", "text": "It is a browser."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "Is React a server-side library or a client-side library?",
    answer: "C. React is primarily a client-side UI library, though it can be used with server-side rendering",
    explanation: "React is primarily a UI library used to build client-side interfaces, but React applications can also use server-side rendering, static generation, and Server Components through supporting frameworks and tooling. React itself is not a traditional backend framework like Express. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a CSS feature."}, {"id": "B", "text": "It is a database-only feature."}, {"id": "C", "text": "React is primarily a client-side UI library, though it can be used with server-side rendering"}, {"id": "D", "text": "It requires all work to be synchronous."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What are React Server Components (RSC)?",
    answer: "D. Components that can render on the server and reduce client-side JavaScript for supported React frameworks",
    explanation: "React Server Components allow supported frameworks to render some components on the server and keep them out of the client JavaScript bundle. This can reduce client-side JavaScript and allow server-side access to data sources. Interactive components that need browser APIs or state generally remain client components. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "They run only as CSS rules."}, {"id": "B", "text": "They replace HTML completely."}, {"id": "C", "text": "They are used only to store cookies."}, {"id": "D", "text": "Components that can render on the server and reduce client-side JavaScript for supported React frameworks"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `if-else` in JavaScript?",
    answer: "A. `if-else` is a statement used to execute different blocks depending on a condition.",
    explanation: "It is convenient for larger or multi-step conditional logic. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "`if-else` is a statement used to execute different blocks depending on a condition."}, {"id": "B", "text": "It is an expression that always returns one of two values."}, {"id": "C", "text": "It can be used only inside JSX."}, {"id": "D", "text": "It cannot contain multiple statements."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is the ternary operator in JavaScript?",
    answer: "B. The ternary operator is a compact conditional expression written as `condition ? value1 : value2`.",
    explanation: "It is especially useful when choosing between two values, including inside JSX. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a statement that must contain multiple blocks."}, {"id": "B", "text": "The ternary operator is a compact conditional expression written as `condition ? value1 : value2`."}, {"id": "C", "text": "It can be used only in CSS."}, {"id": "D", "text": "It always executes both branches."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a shallow copy in JavaScript?",
    answer: "C. A shallow copy creates a new outer object or array while nested objects remain shared references.",
    explanation: "Changing a nested object through one copy can therefore affect the other copy. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It recursively clones every nested object."}, {"id": "B", "text": "It guarantees that no nested references are shared."}, {"id": "C", "text": "A shallow copy creates a new outer object or array while nested objects remain shared references."}, {"id": "D", "text": "It converts the object into JSON text automatically."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a deep copy in JavaScript?",
    answer: "D. A deep copy creates independent copies of nested data so nested references are not shared.",
    explanation: "It is useful when you need a fully independent object structure, although the copying method must support the data types involved. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It copies only the outer object and shares all nested references."}, {"id": "B", "text": "It never copies nested objects."}, {"id": "C", "text": "It only works for primitive strings."}, {"id": "D", "text": "A deep copy creates independent copies of nested data so nested references are not shared."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a callback function in JavaScript?",
    answer: "A. A callback is a function passed to another function so it can be called later or when an operation completes.",
    explanation: "Callbacks are a basic pattern for handling asynchronous or event-driven work. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A callback is a function passed to another function so it can be called later or when an operation completes."}, {"id": "B", "text": "It is a function that can never be passed to another function."}, {"id": "C", "text": "It always runs immediately before the current function."}, {"id": "D", "text": "It is a CSS event handler."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What role does a Promise play in asynchronous JavaScript?",
    answer: "B. A Promise represents the eventual success or failure of an asynchronous operation.",
    explanation: "A Promise provides a structured way to represent a future result and handle success or failure. It can be chained with `.then()`, `.catch()`, and `.finally()`. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a CSS rule for delayed animations."}, {"id": "B", "text": "A Promise represents the eventual success or failure of an asynchronous operation."}, {"id": "C", "text": "It represents only synchronous function calls."}, {"id": "D", "text": "It can have unlimited state changes after it is settled."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `async/await`?",
    answer: "C. `async/await` provides readable syntax for working with Promise-based asynchronous operations.",
    explanation: "It makes sequential asynchronous code look more like normal synchronous code while remaining asynchronous. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It removes the need for Promises completely."}, {"id": "B", "text": "It makes asynchronous operations execute synchronously on the whole application."}, {"id": "C", "text": "`async/await` provides readable syntax for working with Promise-based asynchronous operations."}, {"id": "D", "text": "It can be used only with CSS animations."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `document.getElementById()` return?",
    answer: "D. It returns the element with the specified `id`, or `null` when no matching element exists.",
    explanation: "It is intended for looking up one element by its ID. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It returns a NodeList containing every matching element."}, {"id": "B", "text": "It accepts any CSS selector rather than an ID."}, {"id": "C", "text": "It always returns an array."}, {"id": "D", "text": "It returns the element with the specified `id`, or `null` when no matching element exists."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `document.querySelectorAll()` return?",
    answer: "A. It returns a NodeList containing all elements that match a CSS selector.",
    explanation: "It can select by classes, attributes, nested selectors, and many other CSS selector patterns. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It returns a NodeList containing all elements that match a CSS selector."}, {"id": "B", "text": "It returns only the first matching element."}, {"id": "C", "text": "It accepts only element IDs."}, {"id": "D", "text": "It returns a single DOM element rather than a collection."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `setInterval()`?",
    answer: "B. It repeatedly runs a function after a fixed time interval until stopped",
    explanation: "`setInterval()` repeatedly schedules a callback after a specified interval until it is cancelled with `clearInterval()`. It is useful for polling, clocks, or periodic updates. The callback duration can affect actual timing, so it should not be treated as a precise real-time scheduler. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It runs the callback only once."}, {"id": "B", "text": "It repeatedly runs a function after a fixed time interval until stopped"}, {"id": "C", "text": "It guarantees exact real-time execution."}, {"id": "D", "text": "It cannot be cancelled."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does single-threaded execution mean in JavaScript?",
    answer: "C. It means one main JavaScript execution thread runs one piece of JavaScript at a time.",
    explanation: "Asynchronous APIs can still allow other work to progress without making the main JavaScript execution itself multi-threaded. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means every asynchronous operation is impossible."}, {"id": "B", "text": "It means JavaScript automatically creates a thread for every function."}, {"id": "C", "text": "It means one main JavaScript execution thread runs one piece of JavaScript at a time."}, {"id": "D", "text": "It means multiple JavaScript instructions execute simultaneously on one call stack."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does multi-threaded execution mean?",
    answer: "D. It means work can run on multiple threads, allowing suitable tasks to execute in parallel.",
    explanation: "Browsers provide Web Workers and Node.js provides `worker_threads` for explicit JavaScript work on separate threads. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means only one thread can ever execute work."}, {"id": "B", "text": "It prevents parallel CPU work."}, {"id": "C", "text": "It is another name for synchronous execution."}, {"id": "D", "text": "It means work can run on multiple threads, allowing suitable tasks to execute in parallel."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is the DOM?",
    answer: "A. The DOM is an object representation of the webpage document and its elements.",
    explanation: "JavaScript can use DOM APIs to read, create, update, and remove elements. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "The DOM is an object representation of the webpage document and its elements."}, {"id": "B", "text": "It represents only browser networking features."}, {"id": "C", "text": "It contains HTTP headers rather than page elements."}, {"id": "D", "text": "It is a database representation of application data."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is the BOM?",
    answer: "B. The Browser Object Model represents browser features such as `window`, `location`, `history`, and `navigator`.",
    explanation: "BOM APIs are focused on the browser environment rather than the HTML document itself. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It represents only HTML elements."}, {"id": "B", "text": "The Browser Object Model represents browser features such as `window`, `location`, `history`, and `navigator`."}, {"id": "C", "text": "It is a React state-management system."}, {"id": "D", "text": "It is a CSS rule hierarchy."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is HTTP?",
    answer: "C. HTTP is the protocol used for transferring web requests and responses without transport encryption by itself.",
    explanation: "Sensitive traffic should generally use HTTPS instead of plain HTTP. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It automatically encrypts all traffic with TLS."}, {"id": "B", "text": "It is used only for image requests."}, {"id": "C", "text": "HTTP is the protocol used for transferring web requests and responses without transport encryption by itself."}, {"id": "D", "text": "It is unrelated to client-server communication."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is HTTPS?",
    answer: "D. HTTPS is HTTP carried over TLS, providing transport encryption, integrity protection, and server authentication.",
    explanation: "It helps protect credentials, tokens, and other sensitive data sent between client and server. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is HTTP without any transport security."}, {"id": "B", "text": "It provides no server authentication."}, {"id": "C", "text": "It is a database protocol."}, {"id": "D", "text": "HTTPS is HTTP carried over TLS, providing transport encryption, integrity protection, and server authentication."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "HTML, CSS, and JavaScript \u2014 which one loads first in the browser?",
    answer: "A. HTML is parsed first to build the document; CSS and JS are then processed according to their placement/loading rules",
    explanation: "The browser starts by parsing HTML because it needs the document structure. While parsing HTML, it discovers CSS and JavaScript resources and processes them according to their placement and attributes such as `defer` and `async`. So there is no universal rule that CSS or JavaScript always finishes first. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "HTML is parsed first to build the document; CSS and JS are then processed according to their placement/loading rules"}, {"id": "B", "text": "JavaScript always finishes first regardless of loading attributes."}, {"id": "C", "text": "CSS always finishes last."}, {"id": "D", "text": "All resources must finish at exactly the same moment."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What are functions in JavaScript?",
    answer: "B. Reusable blocks of code that can accept inputs and return results",
    explanation: "A function is a reusable block of JavaScript code that can receive parameters and optionally return a value. Functions can be declared, assigned to variables, passed as arguments, returned from other functions, and used as methods. This makes them fundamental to JavaScript's functional patterns. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Functions are only HTML tags."}, {"id": "B", "text": "Reusable blocks of code that can accept inputs and return results"}, {"id": "C", "text": "Functions are database tables."}, {"id": "D", "text": "Functions are CSS selectors."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "Why do we need state instead of normal variables in React?",
    answer: "C. State changes tell React to re-render the component with the new value",
    explanation: "A normal variable changing does not tell React that the UI needs to be updated. React state is tracked by React, and its setter schedules a render with the new state. This allows the rendered UI to stay synchronized with application data. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Changing a normal variable automatically triggers React rendering."}, {"id": "B", "text": "React state cannot be changed after initialization."}, {"id": "C", "text": "State changes tell React to re-render the component with the new value"}, {"id": "D", "text": "State is used only for CSS values."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is the cascading/cascade rule in CSS?",
    answer: "D. The browser decides the winning style using origin, importance, specificity, and source order",
    explanation: "The CSS cascade is the process used to resolve competing style declarations. Browser/user/author origin, importance, specificity, and source order all influence the final value. Knowing the cascade helps debug why a seemingly correct CSS rule is not being applied. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "The last HTML tag always wins."}, {"id": "B", "text": "Only class names decide every conflict."}, {"id": "C", "text": "CSS never resolves competing declarations."}, {"id": "D", "text": "The browser decides the winning style using origin, importance, specificity, and source order"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a React application?",
    answer: "A. A React application builds UI from components and uses React's rendering/state model to update the interface.",
    explanation: "React provides structure for component-based UI development and manages updates through its rendering system. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A React application builds UI from components and uses React's rendering/state model to update the interface."}, {"id": "B", "text": "It must manipulate every DOM node manually."}, {"id": "C", "text": "It cannot use state or components."}, {"id": "D", "text": "It is primarily a database framework."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a plain JavaScript web application?",
    answer: "B. A plain JavaScript application can use browser APIs directly to create and update DOM elements.",
    explanation: "It does not require React's component and reconciliation abstractions. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It must use React reconciliation for DOM changes."}, {"id": "B", "text": "A plain JavaScript application can use browser APIs directly to create and update DOM elements."}, {"id": "C", "text": "It cannot call browser APIs."}, {"id": "D", "text": "It requires JSX for every UI element."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is declarative programming?",
    answer: "C. Declarative programming describes the desired result rather than listing every step required to produce it.",
    explanation: "React's UI model is largely declarative because you describe what the UI should look like for a given state. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It lists every DOM mutation step explicitly."}, {"id": "B", "text": "It means CSS-only programming."}, {"id": "C", "text": "Declarative programming describes the desired result rather than listing every step required to produce it."}, {"id": "D", "text": "It cannot use functions or expressions."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is imperative programming?",
    answer: "D. Imperative programming describes the steps the program should execute to reach a result.",
    explanation: "Direct DOM manipulation is a common example because code explicitly tells the browser what to change. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It describes only the desired final UI with no steps."}, {"id": "B", "text": "It is limited to CSS."}, {"id": "C", "text": "It prevents direct DOM manipulation."}, {"id": "D", "text": "Imperative programming describes the steps the program should execute to reach a result."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a CSS pseudo-class?",
    answer: "A. A pseudo-class targets an element based on a state or condition, such as `:hover` or `:focus`.",
    explanation: "It lets you style states without adding extra classes to the HTML. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A pseudo-class targets an element based on a state or condition, such as `:hover` or `:focus`."}, {"id": "B", "text": "It represents a virtual piece such as `::before`."}, {"id": "C", "text": "It is a JavaScript function."}, {"id": "D", "text": "It adds a database field to an element."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a CSS pseudo-element?",
    answer: "B. A pseudo-element targets a virtual part of an element, such as `::before` or `::after`.",
    explanation: "It can create or style generated content without adding a separate HTML element. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It targets only states such as `:hover`."}, {"id": "B", "text": "A pseudo-element targets a virtual part of an element, such as `::before` or `::after`."}, {"id": "C", "text": "It is a React component."}, {"id": "D", "text": "It is a browser storage object."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is the reconciliation process in React?",
    answer: "C. React compares the new virtual tree with the previous one and updates necessary DOM parts",
    explanation: "Reconciliation is how React compares the new rendered element tree with the previous one to determine what needs updating. React uses keys and its reconciliation algorithm to preserve or replace elements appropriately. The goal is to update the DOM efficiently rather than rebuild everything. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "React deletes and rebuilds the whole DOM on every render."}, {"id": "B", "text": "It only compiles CSS."}, {"id": "C", "text": "React compares the new virtual tree with the previous one and updates necessary DOM parts"}, {"id": "D", "text": "It is a database backup process."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you lift state up in React?",
    answer: "D. Move shared state to the nearest common parent and pass data/handlers through props",
    explanation: "Lifting state up means moving state from child components into their nearest common parent when multiple children need the same data. The parent then passes values and callback handlers down as props. This creates a single source of truth for that shared state. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Move shared state into CSS."}, {"id": "B", "text": "Delete the child component."}, {"id": "C", "text": "Keep separate duplicated state in every child."}, {"id": "D", "text": "Move shared state to the nearest common parent and pass data/handlers through props"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "Explain React Fragments.",
    answer: "A. Fragments group elements without adding an extra DOM element",
    explanation: "A Fragment lets a component return multiple sibling elements without adding an unnecessary wrapper to the DOM. You can write `<>...</>` or use `<React.Fragment>`. Fragments are useful when an extra `<div>` would affect layout or markup structure. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Fragments group elements without adding an extra DOM element"}, {"id": "B", "text": "A Fragment always adds a `<div>` to the DOM."}, {"id": "C", "text": "A Fragment creates a database."}, {"id": "D", "text": "A Fragment opens a browser window."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `useCallback()` do?",
    answer: "B. `useCallback()` memoizes a function reference until its dependencies change.",
    explanation: "It can help when a callback is passed to a memoized child and unnecessary function identity changes are causing renders. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It memoizes the result of a calculation rather than a function."}, {"id": "B", "text": "`useCallback()` memoizes a function reference until its dependencies change."}, {"id": "C", "text": "It automatically prevents every child re-render."}, {"id": "D", "text": "It replaces `useState()`."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `useMemo()` do?",
    answer: "C. `useMemo()` memoizes the result of a calculation until its dependencies change.",
    explanation: "It can avoid repeating an expensive calculation when the relevant inputs have not changed. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It memoizes a function reference rather than a calculated value."}, {"id": "B", "text": "It prevents all component renders."}, {"id": "C", "text": "`useMemo()` memoizes the result of a calculation until its dependencies change."}, {"id": "D", "text": "It replaces `useEffect()`."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `React.lazy()`?",
    answer: "D. `React.lazy()` lets a component be loaded dynamically, commonly for code splitting.",
    explanation: "It can reduce the amount of JavaScript needed for the initial load. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It loads every component before the application starts."}, {"id": "B", "text": "It disables code splitting."}, {"id": "C", "text": "It is used only for CSS files."}, {"id": "D", "text": "`React.lazy()` lets a component be loaded dynamically, commonly for code splitting."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is React Suspense?",
    answer: "A. Suspense lets React display fallback UI while supported asynchronous content, such as a lazy component, is loading.",
    explanation: "A common pattern is `<Suspense fallback={...}>` around lazily loaded components. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Suspense lets React display fallback UI while supported asynchronous content, such as a lazy component, is loading."}, {"id": "B", "text": "It forces lazy components to load synchronously."}, {"id": "C", "text": "It is only a database loading mechanism."}, {"id": "D", "text": "It removes the need for fallback UI."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What are portals in React, and when should they be used?",
    answer: "B. Portals render children into another DOM node, useful for modals, tooltips, etc.",
    explanation: "A portal renders React children into a DOM node outside the component's normal DOM hierarchy. It is useful for modals, dropdowns, tooltips, and overlays that need to escape parent overflow or stacking contexts. Events and React context still work through the React tree. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a CSS feature."}, {"id": "B", "text": "Portals render children into another DOM node, useful for modals, tooltips, etc."}, {"id": "C", "text": "It is a database-only feature."}, {"id": "D", "text": "It requires all work to be synchronous."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `forwardRef` in React?",
    answer: "C. It lets a component pass a ref through to a child DOM element or component",
    explanation: "`forwardRef` lets a parent pass a ref through a custom component to a child DOM node or exposed component. It is useful for reusable inputs where the parent needs to focus or measure the actual input. It bridges React's component abstraction with imperative DOM access. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a CSS feature."}, {"id": "B", "text": "It is a database-only feature."}, {"id": "C", "text": "It lets a component pass a ref through to a child DOM element or component"}, {"id": "D", "text": "It requires all work to be synchronous."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `useRef()` compared with `createRef()`?",
    answer: "D. `useRef()` is a hook that keeps the same ref object across renders in a function component.",
    explanation: "It is normally the preferred ref API for function components. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a Hook intended only for function components."}, {"id": "B", "text": "It causes a new ref to be discarded after every class render."}, {"id": "C", "text": "It is a CSS API."}, {"id": "D", "text": "`useRef()` is a hook that keeps the same ref object across renders in a function component."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `createRef()`?",
    answer: "A. `createRef()` creates a ref object commonly used with class components.",
    explanation: "In function components, `useRef()` is generally used instead because it persists across renders. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "`createRef()` creates a ref object commonly used with class components."}, {"id": "B", "text": "It is a Hook intended only for function components."}, {"id": "C", "text": "It causes a new ref to be discarded after every class render."}, {"id": "D", "text": "It is a CSS API."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How would you handle Error Boundaries in React?",
    answer: "B. Create an Error Boundary around risky UI and show fallback UI when rendering errors occur",
    explanation: "Use an Error Boundary around parts of the UI where a rendering failure should show a fallback instead of breaking the whole page. A boundary can log the error and render a recovery message. It does not automatically catch every event-handler, async, or server-side error. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a CSS feature."}, {"id": "B", "text": "Create an Error Boundary around risky UI and show fallback UI when rendering errors occur"}, {"id": "C", "text": "It is a database-only feature."}, {"id": "D", "text": "It requires all work to be synchronous."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How would you optimize a large-scale React application?",
    answer: "C. Use code splitting, memoization where useful, virtualization, efficient state management, caching, and profiling",
    explanation: "Large React apps benefit from code splitting, lazy loading, efficient state placement, virtualization for large lists, caching, memoization when justified, and performance profiling. Avoid unnecessary global state and unnecessary renders. Measure first so optimization targets the real bottleneck. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It must manipulate every DOM node manually."}, {"id": "B", "text": "It cannot use state or components."}, {"id": "C", "text": "Use code splitting, memoization where useful, virtualization, efficient state management, caching, and profiling"}, {"id": "D", "text": "It is primarily a database framework."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How does React Fiber work?",
    answer: "D. Fiber is React's rendering architecture that breaks work into units and schedules updates efficiently",
    explanation: "React Fiber is the internal reconciliation/rendering architecture that represents work as units called fibers. It allows React to prioritize and schedule rendering work rather than treating a render as one indivisible operation. This architecture supports features such as concurrent rendering. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Fiber is a database engine."}, {"id": "B", "text": "Fiber only handles CSS."}, {"id": "C", "text": "Fiber replaces JavaScript."}, {"id": "D", "text": "Fiber is React's rendering architecture that breaks work into units and schedules updates efficiently"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What are Web Workers?",
    answer: "A. Web Workers run JavaScript in a background thread separate from the main UI thread.",
    explanation: "They are useful for CPU-heavy work that would otherwise make the UI less responsive. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Web Workers run JavaScript in a background thread separate from the main UI thread."}, {"id": "B", "text": "Workers always run on the main UI thread."}, {"id": "C", "text": "Workers can directly manipulate the DOM from their background thread."}, {"id": "D", "text": "Workers are used only for HTTP routing."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How can React communicate with a Web Worker?",
    answer: "B. React can communicate with a worker using message APIs such as `postMessage()` and message events.",
    explanation: "The worker cannot directly manipulate the DOM, so results are sent back to the main thread. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a CSS feature."}, {"id": "B", "text": "React can communicate with a worker using message APIs such as `postMessage()` and message events."}, {"id": "C", "text": "It is a database-only feature."}, {"id": "D", "text": "It requires all work to be synchronous."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is hydration in React?",
    answer: "C. Hydration attaches React behavior to server-rendered HTML",
    explanation: "Hydration is the process of attaching React's event handlers and behavior to HTML that was already rendered on the server. The browser receives useful HTML first, then React makes it interactive. The server HTML and client-rendered structure need to match closely to avoid hydration problems. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Hydration deletes server-rendered HTML."}, {"id": "B", "text": "Hydration encrypts database records."}, {"id": "C", "text": "Hydration attaches React behavior to server-rendered HTML"}, {"id": "D", "text": "Hydration compresses images."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How does code splitting improve performance?",
    answer: "D. It loads only needed JavaScript chunks instead of the entire app at once",
    explanation: "Code splitting breaks a large JavaScript bundle into smaller chunks that can be loaded when needed. A user does not have to download code for every route or feature during the initial page load. This can improve initial load performance and reduce unnecessary network work. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It downloads the entire app bundle before any route loads."}, {"id": "B", "text": "It disables browser caching."}, {"id": "C", "text": "It removes client-side routing."}, {"id": "D", "text": "It loads only needed JavaScript chunks instead of the entire app at once"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is React Profiler?",
    answer: "A. A tool for measuring React rendering performance and identifying expensive updates",
    explanation: "React Profiler helps measure component render performance, including which components rendered and how much time was spent. It can be used through React DevTools or profiling APIs. The goal is to identify expensive renders before deciding what to optimize. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A tool for measuring React rendering performance and identifying expensive updates"}, {"id": "B", "text": "It is a CSS editor."}, {"id": "C", "text": "It is only a database monitor."}, {"id": "D", "text": "It is a deployment server."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "Explain lazy loading images in React.",
    answer: "B. Load images when they are near/needed instead of loading all images immediately",
    explanation: "Lazy loading images means delaying image loading until an image is close to being visible or actually needed. Native `loading=\"lazy\"`, Intersection Observer, or framework image components can help. It reduces initial network usage, especially on pages containing many images. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It loads every image twice."}, {"id": "B", "text": "Load images when they are near/needed instead of loading all images immediately"}, {"id": "C", "text": "It never loads images."}, {"id": "D", "text": "It converts images into CSS."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you optimize re-rendering in React?",
    answer: "C. Keep state local when possible, use stable props, memoization when useful, and avoid unnecessary updates",
    explanation: "Keep state as local as possible, avoid creating unnecessary new props, use stable keys, and memoize components or values only when useful. Large lists can use virtualization, and expensive calculations can be memoized. Profiling helps identify which components are actually causing unnecessary work. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a CSS feature."}, {"id": "B", "text": "It is a database-only feature."}, {"id": "C", "text": "Keep state local when possible, use stable props, memoization when useful, and avoid unnecessary updates"}, {"id": "D", "text": "It requires all work to be synchronous."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you handle memory leaks in a React application?",
    answer: "D. Clean up subscriptions, timers, listeners, and async effects when components unmount",
    explanation: "Memory leaks can happen when timers, event listeners, subscriptions, sockets, or async resources remain active after a component is no longer needed. React effects should return cleanup functions for resources they create. Proper cleanup prevents duplicate listeners, timers, and retained references. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It must manipulate every DOM node manually."}, {"id": "B", "text": "It cannot use state or components."}, {"id": "C", "text": "It is primarily a database framework."}, {"id": "D", "text": "Clean up subscriptions, timers, listeners, and async effects when components unmount"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "Explain tree shaking in React.",
    answer: "A. Build tools remove unused exported code from the final bundle when supported",
    explanation: "Tree shaking is a build-time optimization where unused exports are removed from the production bundle when the module system and tooling support static analysis. It can reduce JavaScript size and improve load performance. It works best with ES module imports/exports and properly configured build tools. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Build tools remove unused exported code from the final bundle when supported"}, {"id": "B", "text": "It removes the entire DOM tree at runtime."}, {"id": "C", "text": "It is a React Hook."}, {"id": "D", "text": "It only compresses images."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you prevent unnecessary API calls in React?",
    answer: "B. Use correct effect dependencies, caching, debouncing where needed, and avoid duplicate requests",
    explanation: "Avoid placing API calls in effects that run unnecessarily, use correct dependencies, and cache server data where appropriate. Debounce search requests and cancel/ignore outdated requests when needed. In development, React Strict Mode can expose effects that are not written to tolerate repeated execution. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Call the API on every render."}, {"id": "B", "text": "Use correct effect dependencies, caching, debouncing where needed, and avoid duplicate requests"}, {"id": "C", "text": "Use an infinite interval for every request."}, {"id": "D", "text": "Disable all component state."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you preload assets in React?",
    answer: "C. Use appropriate browser preload hints or framework features for critical assets",
    explanation: "Critical assets can be preloaded using browser hints such as `<link rel=\"preload\">` or framework-specific mechanisms. Preloading should be reserved for resources the browser will definitely need soon. Over-preloading can waste bandwidth and actually hurt performance. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A Set allows duplicate values by design."}, {"id": "B", "text": "A Set requires every key to be a string."}, {"id": "C", "text": "Use appropriate browser preload hints or framework features for critical assets"}, {"id": "D", "text": "A Set stores only key-value pairs."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How does `useDeferredValue()` improve performance?",
    answer: "D. It lets less urgent UI updates be deferred so urgent interactions stay responsive",
    explanation: "`useDeferredValue()` lets React treat a derived value as lower priority so urgent interactions can remain responsive. For example, typing into a search box can stay fast while a large result list updates later. It does not make the expensive work disappear; it changes its priority. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It makes every update synchronous."}, {"id": "B", "text": "It disables rendering."}, {"id": "C", "text": "It changes only CSS."}, {"id": "D", "text": "It lets less urgent UI updates be deferred so urgent interactions stay responsive"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you implement a Progressive Web App (PWA) in React?",
    answer: "A. Add a web app manifest, service worker, HTTPS, and appropriate caching/offline behavior",
    explanation: "A React PWA normally needs a web app manifest, HTTPS, a service worker, appropriate caching, and an installable/responsive UI. The service worker can support offline behavior and caching strategies. A PWA is a web application with enhanced browser/device capabilities, not simply a React app with a manifest. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Add a web app manifest, service worker, HTTPS, and appropriate caching/offline behavior"}, {"id": "B", "text": "A PWA requires only HTML comments."}, {"id": "C", "text": "A PWA should disable HTTPS."}, {"id": "D", "text": "A PWA replaces the browser with a database."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you handle errors in Express.js?",
    answer: "B. Use error-handling middleware and pass errors with `next(error)`",
    explanation: "Express error handling is commonly done with error middleware having four parameters: `(err, req, res, next)`. Route/middleware code can call `next(error)` to pass the error to that handler. Centralized handling keeps API error responses consistent and prevents duplicate error logic. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Ignore errors so requests continue silently."}, {"id": "B", "text": "Use error-handling middleware and pass errors with `next(error)`"}, {"id": "C", "text": "Use CSS to catch server errors."}, {"id": "D", "text": "Restart the browser whenever a route fails."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you connect MongoDB to Express.js?",
    answer: "C. Use a MongoDB driver or ODM such as Mongoose and connect from the Node.js server",
    explanation: "The Node/Express server can connect to MongoDB using the official MongoDB driver or an ODM such as Mongoose. The connection is usually created during application startup and reused rather than opening a new database connection for every request. Connection strings and credentials should be kept in environment variables. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Connect MongoDB using CSS."}, {"id": "B", "text": "Use browser localStorage as a MongoDB server."}, {"id": "C", "text": "Use a MongoDB driver or ODM such as Mongoose and connect from the Node.js server"}, {"id": "D", "text": "Use only HTML to establish the database connection."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How does JWT authentication work in Node.js?",
    answer: "D. Server signs a token after login; client sends it with requests and server verifies it",
    explanation: "After successful login, the server can sign a JWT containing claims such as a user ID and expiration. The client sends the token with later requests, and the server verifies its signature and claims before allowing protected operations. JWTs are signed tokens, not encrypted password storage. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "JWT stores passwords as plain text."}, {"id": "B", "text": "JWT is a CSS mechanism."}, {"id": "C", "text": "JWT removes the need for authentication."}, {"id": "D", "text": "Server signs a token after login; client sends it with requests and server verifies it"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `bcryptjs`, and how does it improve security?",
    answer: "A. It hashes passwords so passwords are not stored directly",
    explanation: "`bcryptjs` provides password hashing using bcrypt. A password is hashed with a salt and the resulting hash is stored instead of the original password. During login, the submitted password is compared with the stored hash; the original password cannot simply be recovered from the hash. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It hashes passwords so passwords are not stored directly"}, {"id": "B", "text": "It stores passwords in plain text."}, {"id": "C", "text": "It encrypts CSS styles."}, {"id": "D", "text": "It replaces all JWT authentication."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you handle file uploads in Node.js?",
    answer: "B. Use multipart/form-data handling middleware such as Multer and validate/store files safely",
    explanation: "File uploads are commonly sent as `multipart/form-data` and handled by middleware such as Multer. A secure implementation checks file size/type, generates safe filenames, stores files in an appropriate location, and avoids trusting user-provided paths. Cloud object storage is also common in production. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Use CSS to process multipart data."}, {"id": "B", "text": "Use multipart/form-data handling middleware such as Multer and validate/store files safely"}, {"id": "C", "text": "Use `console.log()` as the file upload protocol."}, {"id": "D", "text": "Accept every filename and path without validation."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What are Cookies?",
    answer: "C. Cookies are small browser values that can be automatically sent with matching HTTP requests.",
    explanation: "They can be configured with security attributes such as `HttpOnly`, `Secure`, and `SameSite`. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Cookies are never included in HTTP requests."}, {"id": "B", "text": "Cookies can store unlimited amounts of browser data."}, {"id": "C", "text": "Cookies are small browser values that can be automatically sent with matching HTTP requests."}, {"id": "D", "text": "Cookies are available only to CSS."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `localStorage`?",
    answer: "D. `localStorage` stores data in the browser and is accessed through JavaScript; it is not automatically sent with HTTP requests.",
    explanation: "It is useful for certain client-side data, but sensitive authentication data requires careful security design. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "localStorage is automatically attached to every HTTP request."}, {"id": "B", "text": "It can be accessed only from a Node.js server."}, {"id": "C", "text": "It automatically encrypts all stored values."}, {"id": "D", "text": "`localStorage` stores data in the browser and is accessed through JavaScript; it is not automatically sent with HTTP requests."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is PM2, and why is it used in production?",
    answer: "A. A Node.js process manager used for running, restarting, and monitoring apps",
    explanation: "PM2 is a Node.js process manager used to keep applications running, restart them after crashes, manage multiple instances, and provide basic monitoring/log management. It can also support cluster mode and startup configuration. In modern deployments, containers and cloud process managers can provide similar capabilities. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A Node.js process manager used for running, restarting, and monitoring apps"}, {"id": "B", "text": "PM2 is a database."}, {"id": "C", "text": "PM2 is a React hook."}, {"id": "D", "text": "PM2 is a CSS framework."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is Helmet.js, and how does it improve security?",
    answer: "B. It sets useful HTTP security headers in Express applications",
    explanation: "Helmet.js is Express middleware that sets or helps configure several HTTP security headers. These headers can reduce risks such as certain XSS, clickjacking, and MIME-sniffing attacks. Helmet is a security layer, not a replacement for authentication, validation, or HTTPS. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Helmet hashes passwords."}, {"id": "B", "text": "It sets useful HTTP security headers in Express applications"}, {"id": "C", "text": "Helmet replaces MongoDB."}, {"id": "D", "text": "Helmet is a UI component library."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you implement OAuth authentication in Express.js?",
    answer: "C. Use an OAuth provider flow to authenticate users and securely handle callback/tokens",
    explanation: "OAuth lets an application delegate authentication/authorization to a provider such as Google or another identity service. The typical flow redirects the user to the provider, receives an authorization response/callback, exchanges it securely when required, and creates a local session/token. HTTPS and correct redirect URI validation are important. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Store passwords in URLs."}, {"id": "B", "text": "Disable HTTPS during OAuth."}, {"id": "C", "text": "Use an OAuth provider flow to authenticate users and securely handle callback/tokens"}, {"id": "D", "text": "Use only a CSS login form."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is rate limiting, and how do you implement it?",
    answer: "D. It limits requests from clients; middleware such as express-rate-limit can implement it",
    explanation: "Rate limiting restricts how many requests a client can make in a given period. It helps protect login endpoints, APIs, and other resources from brute-force attacks and abuse. Express middleware such as `express-rate-limit` can implement basic rate limiting, often backed by shared storage in distributed systems. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It allows unlimited requests."}, {"id": "B", "text": "It is a database index."}, {"id": "C", "text": "It is React state management."}, {"id": "D", "text": "It limits requests from clients; middleware such as express-rate-limit can implement it"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you optimize API performance in Express.js?",
    answer: "A. Use caching, efficient queries, compression, pagination, indexes, and avoid unnecessary work",
    explanation: "API performance can be improved with database indexes and efficient queries, pagination, caching, compression, connection reuse, smaller payloads, and avoiding unnecessary processing. The right optimization depends on the bottleneck. Profiling and monitoring should guide the changes. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Use caching, efficient queries, compression, pagination, indexes, and avoid unnecessary work"}, {"id": "B", "text": "Add more blocking code."}, {"id": "C", "text": "Always return the largest possible payload."}, {"id": "D", "text": "Disable database indexes."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How does caching work in Node.js?",
    answer: "B. Frequently used data is stored temporarily so future requests can be served faster",
    explanation: "Caching stores frequently requested data temporarily so later requests can avoid expensive computation or database/network work. A cache has a key, value, and usually an expiration/invalidation strategy. Good cache design must consider stale data and memory usage. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Caching permanently deletes old data."}, {"id": "B", "text": "Frequently used data is stored temporarily so future requests can be served faster"}, {"id": "C", "text": "Caching changes only CSS."}, {"id": "D", "text": "Caching prevents every future API call forever."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you secure Express applications?",
    answer: "C. Validate input, use HTTPS, secure headers, authentication, authorization, rate limiting, and safe dependencies",
    explanation: "Secure Express applications use HTTPS, input validation, authentication, authorization, secure headers, rate limiting, safe cookies, dependency updates, secret management, and safe error responses. Database queries and file operations should also validate untrusted input. Security is a layered process. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Trust every request by default."}, {"id": "B", "text": "Store passwords in plain text."}, {"id": "C", "text": "Validate input, use HTTPS, secure headers, authentication, authorization, rate limiting, and safe dependencies"}, {"id": "D", "text": "Disable input validation."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you handle real-time events in Express.js?",
    answer: "D. Use WebSockets/Socket.IO or similar real-time communication tools",
    explanation: "Express itself is primarily request/response based, so real-time communication is usually added with WebSockets, Socket.IO, Server-Sent Events, or another real-time technology. The server can emit events to connected clients when something changes. This is useful for chat, live notifications, tracking, and collaborative features. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Use only HTML for live events."}, {"id": "B", "text": "Use CSS animations as the server communication layer."}, {"id": "C", "text": "Use localStorage as a real-time transport."}, {"id": "D", "text": "Use WebSockets/Socket.IO or similar real-time communication tools"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is the purpose of `process.nextTick()` in Node.js?",
    answer: "A. It schedules a callback to run after the current operation, before the event loop continues to later phases",
    explanation: "`process.nextTick()` queues a callback to run after the current operation completes but before the event loop proceeds to later phases. It is useful for deferring work while still running it very soon. Excessive recursive use can starve the event loop, so it should be used carefully. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It schedules a callback to run after the current operation, before the event loop continues to later phases"}, {"id": "B", "text": "It stops Node.js completely."}, {"id": "C", "text": "It creates a worker thread."}, {"id": "D", "text": "It waits for one hour before executing."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you handle memory leaks in a Node.js application?",
    answer: "B. Remove unused references/listeners, clean timers, manage resources, and monitor memory",
    explanation: "Node memory leaks often come from long-lived references, growing global collections, forgotten event listeners, timers, caches without limits, or resources that are never closed. Heap snapshots and memory profiling can help find retained objects. Fixing the reference/resource lifecycle is better than simply restarting the process repeatedly. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Ignore memory usage."}, {"id": "B", "text": "Remove unused references/listeners, clean timers, manage resources, and monitor memory"}, {"id": "C", "text": "Create more global references."}, {"id": "D", "text": "Restart after every request as the main fix."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you optimize Node.js for high performance?",
    answer: "C. Use async I/O, caching, efficient queries, clustering/workers when appropriate, and profiling",
    explanation: "High-performance Node.js systems generally keep I/O asynchronous, avoid blocking the event loop, use efficient database queries/indexes, cache repeated work, stream large data, and move CPU-heavy work to workers. Load balancing and multiple processes can scale across CPU cores. Profiling should guide optimization. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Block the event loop for heavy work."}, {"id": "B", "text": "Use synchronous I/O everywhere."}, {"id": "C", "text": "Use async I/O, caching, efficient queries, clustering/workers when appropriate, and profiling"}, {"id": "D", "text": "Disable caching."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is load balancing, and how does it work in Node.js?",
    answer: "D. It distributes incoming traffic across multiple server instances",
    explanation: "A load balancer receives incoming traffic and distributes it across multiple application instances. This allows horizontal scaling and can improve availability because traffic can be redirected if an instance fails. In production, load balancers can also handle TLS termination, health checks, and routing. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It stores passwords."}, {"id": "B", "text": "It compiles React code."}, {"id": "C", "text": "It deletes incoming requests."}, {"id": "D", "text": "It distributes incoming traffic across multiple server instances"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you scale a Node.js application?",
    answer: "A. Run multiple instances, use load balancing, caching, queues, and scalable databases as needed",
    explanation: "Scaling can be vertical, by giving a server more resources, or horizontal, by running multiple instances. Node applications commonly use load balancing, clustering/containers, Redis or other shared caches, background queues, and scalable databases. Stateless application design makes horizontal scaling easier. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Run multiple instances, use load balancing, caching, queues, and scalable databases as needed"}, {"id": "B", "text": "Keep only one process forever."}, {"id": "C", "text": "Disable networking."}, {"id": "D", "text": "Put all work in one blocking function."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How does Redis caching improve performance?",
    answer: "B. Redis keeps frequently needed data in fast memory, reducing repeated database work",
    explanation: "Redis stores frequently needed data in memory, making reads much faster than repeatedly querying a database in many use cases. A Node API can check Redis first and fall back to the database on a cache miss. TTLs and invalidation are important so stale data does not remain forever. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Redis replaces JavaScript."}, {"id": "B", "text": "Redis keeps frequently needed data in fast memory, reducing repeated database work"}, {"id": "C", "text": "Redis stores only CSS."}, {"id": "D", "text": "Redis makes every database query slower."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What are `worker_threads` in Node.js, and when should you use them?",
    answer: "C. They run JavaScript in separate threads and are useful for CPU-heavy work",
    explanation: "`worker_threads` allow JavaScript to run in separate threads inside the Node.js process. They are useful for CPU-heavy calculations such as image processing, encryption-heavy work, or data transformations that would otherwise block the event loop. They are not usually needed for normal asynchronous I/O. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "They are used only for CSS."}, {"id": "B", "text": "They replace HTTP itself."}, {"id": "C", "text": "They run JavaScript in separate threads and are useful for CPU-heavy work"}, {"id": "D", "text": "They are primarily a password storage feature."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How would you handle large file processing in Node.js?",
    answer: "D. Use streams/chunks and avoid loading the entire file into memory",
    explanation: "Large files should normally be processed with streams so data is handled in chunks rather than loading the whole file into memory. Streams can also pipe data through transformations such as compression or uploads. This keeps memory usage predictable for large inputs. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Always load the entire file into memory."}, {"id": "B", "text": "Use CSS for file processing."}, {"id": "C", "text": "Convert every file to HTML before processing."}, {"id": "D", "text": "Use streams/chunks and avoid loading the entire file into memory"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "Explain garbage collection in Node.js.",
    answer: "A. The runtime automatically finds unreachable objects and frees their memory",
    explanation: "Garbage collection automatically finds objects that are no longer reachable by the running program and reclaims their memory. Node.js uses the V8 JavaScript engine's garbage collector. Developers do not normally manually free objects, but they must avoid accidentally retaining references that prevent collection. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "The runtime automatically finds unreachable objects and frees their memory"}, {"id": "B", "text": "It is one BSON record only."}, {"id": "C", "text": "It is the entire database server."}, {"id": "D", "text": "It is a single property inside a document."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is cluster mode, and how does it help a Node.js application?",
    answer: "B. It can run multiple Node.js processes to use multiple CPU cores and handle more traffic",
    explanation: "Cluster mode runs multiple Node.js processes so an application can use more than one CPU core. The processes are independent and can share incoming server traffic through the cluster mechanism. Each worker has its own memory, so shared state must be externalized when necessary. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It creates one CSS file."}, {"id": "B", "text": "It can run multiple Node.js processes to use multiple CPU cores and handle more traffic"}, {"id": "C", "text": "It disables networking."}, {"id": "D", "text": "It stores MongoDB documents."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you monitor a Node.js application in production?",
    answer: "C. Use logs, metrics, health checks, tracing, and monitoring tools",
    explanation: "Production monitoring combines structured logs, metrics, health checks, error tracking, tracing, CPU/memory monitoring, and alerts. Tools such as application monitoring platforms can show latency, error rates, throughput, and resource usage. The goal is to detect and diagnose problems before users are heavily affected. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Check source code once and never collect runtime data."}, {"id": "B", "text": "Use CSS monitoring only."}, {"id": "C", "text": "Use logs, metrics, health checks, tracing, and monitoring tools"}, {"id": "D", "text": "Disable logs and health checks."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What are lexical environments in JavaScript?",
    answer: "D. They store identifiers and their bindings for a scope, enabling lexical scoping",
    explanation: "A lexical environment is the internal structure that stores variable/function bindings for a particular scope and a reference to its outer environment. It is what allows JavaScript's lexical scoping and closures to work. Nested functions can access variables from their outer lexical environments. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "They are browser windows."}, {"id": "B", "text": "They are CSS rules."}, {"id": "C", "text": "They are MongoDB collections."}, {"id": "D", "text": "They store identifiers and their bindings for a scope, enabling lexical scoping"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "Explain prototypal inheritance in JavaScript.",
    answer: "A. Objects can inherit properties and methods through the prototype chain",
    explanation: "Prototypal inheritance means an object can access properties and methods from another object through its prototype chain. If JavaScript does not find a property on the object itself, it checks the prototype and continues upward. ES6 classes provide syntax built on top of this prototype mechanism. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Objects can inherit properties and methods through the prototype chain"}, {"id": "B", "text": "Objects cannot inherit properties or methods."}, {"id": "C", "text": "It works only in CSS."}, {"id": "D", "text": "It is SQL inheritance."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How does `Object.create()` work?",
    answer: "B. It creates a new object using the given object as its prototype",
    explanation: "`Object.create(proto)` creates a new object whose internal prototype points to `proto`. The new object can access properties/methods from that prototype through the prototype chain. It is useful when you want explicit control over an object's prototype. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It deletes an object."}, {"id": "B", "text": "It creates a new object using the given object as its prototype"}, {"id": "C", "text": "It freezes every object automatically."}, {"id": "D", "text": "It creates React state."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What are getter and setter functions in JavaScript?",
    answer: "C. They define how a property is read and assigned",
    explanation: "Getters and setters allow you to define custom behavior when a property is read or assigned. A getter can calculate/return a value, while a setter can validate or transform an assigned value. They are defined with `get` and `set` in object literals or classes. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A Set allows duplicate values by design."}, {"id": "B", "text": "A Set requires every key to be a string."}, {"id": "C", "text": "They define how a property is read and assigned"}, {"id": "D", "text": "A Set stores only key-value pairs."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `Object.freeze()` do?",
    answer: "D. `Object.freeze()` prevents adding, removing, or changing properties of an object at the top level.",
    explanation: "It makes the object itself immutable at the top level, but nested objects are not automatically deeply frozen. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It allows adding and deleting top-level properties."}, {"id": "B", "text": "It automatically deep-freezes every nested object."}, {"id": "C", "text": "It copies the object into a new object."}, {"id": "D", "text": "`Object.freeze()` prevents adding, removing, or changing properties of an object at the top level."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `Object.seal()` do?",
    answer: "A. `Object.seal()` prevents adding or deleting properties but still allows existing writable properties to be changed.",
    explanation: "It is less restrictive than `Object.freeze()`. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "`Object.seal()` prevents adding or deleting properties but still allows existing writable properties to be changed."}, {"id": "B", "text": "It allows new properties to be added freely."}, {"id": "C", "text": "It prevents changing every existing property."}, {"id": "D", "text": "It creates a deep copy."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `Object.assign()` do?",
    answer: "B. `Object.assign()` copies enumerable own properties from source objects onto a target object and returns the target.",
    explanation: "It is commonly used for shallow object copying or merging. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It deep-clones every nested object."}, {"id": "B", "text": "`Object.assign()` copies enumerable own properties from source objects onto a target object and returns the target."}, {"id": "C", "text": "It freezes the target object."}, {"id": "D", "text": "It copies only inherited properties."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `setTimeout()` do?",
    answer: "C. `setTimeout()` schedules a callback to run once after at least the specified delay.",
    explanation: "The delay is a minimum scheduling delay, not a guarantee of exact execution time. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It repeats the callback forever until the page closes."}, {"id": "B", "text": "It runs the callback before the current synchronous code finishes."}, {"id": "C", "text": "`setTimeout()` schedules a callback to run once after at least the specified delay."}, {"id": "D", "text": "It cannot be cancelled."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What does `setInterval()` do?",
    answer: "D. `setInterval()` repeatedly schedules a callback at an interval until it is cancelled.",
    explanation: "Use `clearInterval()` to stop it and be careful about overlapping or long-running callbacks. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It runs the callback only once."}, {"id": "B", "text": "It guarantees exact real-time execution."}, {"id": "C", "text": "It cannot be cancelled."}, {"id": "D", "text": "`setInterval()` repeatedly schedules a callback at an interval until it is cancelled."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "Explain function composition in JavaScript.",
    answer: "A. It combines functions so the output of one becomes the input of another",
    explanation: "Function composition combines smaller functions so the output of one becomes the input of another. For example, if `double()` returns 10 and `square()` receives 10, composition can create a function that performs both operations. It is common in functional programming and reusable data-processing pipelines. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It combines functions so the output of one becomes the input of another"}, {"id": "B", "text": "It means deleting functions after use."}, {"id": "C", "text": "It means creating CSS selectors from functions."}, {"id": "D", "text": "It means every function must have a class."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is debouncing in JavaScript?",
    answer: "B. Debouncing delays execution until a specified period has passed without another trigger.",
    explanation: "It is useful for search inputs or resize handlers where you want to wait until rapid activity stops. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It runs the function at a fixed maximum frequency while events continue."}, {"id": "B", "text": "Debouncing delays execution until a specified period has passed without another trigger."}, {"id": "C", "text": "It executes immediately on every event."}, {"id": "D", "text": "It is mainly used to store API responses."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is throttling in JavaScript?",
    answer: "C. Throttling limits how often a function can run during a period of repeated events.",
    explanation: "It is useful for scroll, mousemove, or other high-frequency events where regular updates are enough. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It waits until all events stop before running once."}, {"id": "B", "text": "It executes an unlimited number of calls immediately."}, {"id": "C", "text": "Throttling limits how often a function can run during a period of repeated events."}, {"id": "D", "text": "It permanently disables the event."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How does JavaScript handle memory management and garbage collection?",
    answer: "D. JavaScript allocates memory automatically and garbage collection removes unreachable objects",
    explanation: "JavaScript automatically allocates memory for values and uses garbage collection to reclaim memory that is no longer reachable. Memory leaks still happen when code accidentally keeps references to objects that are no longer needed. Large caches, global arrays, listeners, and timers are common causes. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is one BSON record only."}, {"id": "B", "text": "It is the entire database server."}, {"id": "C", "text": "It is a single property inside a document."}, {"id": "D", "text": "JavaScript allocates memory automatically and garbage collection removes unreachable objects"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How could you optimize a large JavaScript application?",
    answer: "A. Code splitting, lazy loading, caching, efficient algorithms, profiling, and reducing unnecessary work",
    explanation: "Large applications can be optimized through code splitting, lazy loading, caching, efficient algorithms/data structures, image optimization, minimizing unnecessary work, and profiling. Bundle analysis can identify large dependencies. The best optimization is based on measured bottlenecks rather than assumptions. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Code splitting, lazy loading, caching, efficient algorithms, profiling, and reducing unnecessary work"}, {"id": "B", "text": "Add unnecessary synchronous work."}, {"id": "C", "text": "Disable caching and code splitting."}, {"id": "D", "text": "Load every feature before it is needed."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What are Web Workers, and how do they improve performance?",
    answer: "B. They run JavaScript in background threads so heavy work does not block the main UI thread",
    explanation: "Web Workers run JavaScript away from the main browser thread, so CPU-heavy work does not freeze the UI. Communication happens through messages such as `postMessage()`. Workers cannot directly access the normal DOM, so results must be sent back to the main thread. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Workers always run on the main UI thread."}, {"id": "B", "text": "They run JavaScript in background threads so heavy work does not block the main UI thread"}, {"id": "C", "text": "Workers can directly manipulate the DOM from their background thread."}, {"id": "D", "text": "Workers are used only for HTTP routing."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is Cross-Site Scripting (XSS), and how do you prevent it?",
    answer: "C. XSS injects malicious scripts; prevent it with output escaping, safe APIs, validation, CSP, and avoiding unsafe HTML",
    explanation: "XSS occurs when attacker-controlled content is interpreted as executable script in another user's browser. Prevent it by escaping output, avoiding unsafe HTML injection, validating input, using safe DOM APIs, applying a strong Content Security Policy, and configuring cookies securely. React escapes normal JSX text by default, but unsafe HTML APIs still require care. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Trust all user-provided HTML."}, {"id": "B", "text": "Disable output encoding."}, {"id": "C", "text": "XSS injects malicious scripts; prevent it with output escaping, safe APIs, validation, CSP, and avoiding unsafe HTML"}, {"id": "D", "text": "Insert unsanitized input directly into the DOM."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is the Spread operator (`...`) in JavaScript?",
    answer: "D. Spread expands iterable or object values into individual elements/properties in a new expression.",
    explanation: "It is commonly used for copying or combining arrays and objects. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It collects remaining function arguments into an array."}, {"id": "B", "text": "It always creates a deep copy."}, {"id": "C", "text": "It can be used only with function parameters."}, {"id": "D", "text": "Spread expands iterable or object values into individual elements/properties in a new expression."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is the Rest operator (`...`) in JavaScript?",
    answer: "A. Rest collects remaining arguments or properties into a single array or object.",
    explanation: "It is commonly used in function parameters and destructuring. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Rest collects remaining arguments or properties into a single array or object."}, {"id": "B", "text": "It expands an array into individual values."}, {"id": "C", "text": "It always clones nested objects."}, {"id": "D", "text": "It can be used only in object literals."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is destructuring, and how does it work?",
    answer: "B. It extracts values from arrays/objects into variables using matching syntax",
    explanation: "Destructuring extracts values from arrays or properties from objects into variables. For example, `const {name, age} = user` reads two properties, while `const [first, second] = arr` reads array positions. It makes code shorter and clearer when accessing known values. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It permanently deletes object properties."}, {"id": "B", "text": "It extracts values from arrays/objects into variables using matching syntax"}, {"id": "C", "text": "It is a CSS selector syntax."}, {"id": "D", "text": "It converts every value into a string."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "Explain default parameters in JavaScript.",
    answer: "C. They provide a default value when an argument is `undefined`",
    explanation: "Default parameters provide a fallback value when an argument is `undefined`. For example, `function greet(name = 'User')` uses `User` when no value or `undefined` is passed. Passing `null` does not trigger the default because `null` is a real value. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "They replace every function argument with `null`."}, {"id": "B", "text": "They can be used only in CSS."}, {"id": "C", "text": "They provide a default value when an argument is `undefined`"}, {"id": "D", "text": "They require every caller to pass a value."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `arguments`, and when would you use it?",
    answer: "D. It is an array-like object containing arguments passed to a non-arrow function",
    explanation: "`arguments` is an array-like object available inside traditional non-arrow functions and contains the arguments passed to that call. It can be useful in older code or when working with variable numbers of arguments. Modern JavaScript usually prefers rest parameters such as `(...args)` because they create a real array. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a database collection."}, {"id": "B", "text": "It is available only in arrow functions."}, {"id": "C", "text": "It automatically stores every global variable."}, {"id": "D", "text": "It is an array-like object containing arguments passed to a non-arrow function"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a Set in JavaScript?",
    answer: "A. A Set is a collection that stores unique values.",
    explanation: "It is useful when duplicate values should be removed or membership needs to be checked. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A Set is a collection that stores unique values."}, {"id": "B", "text": "A Set allows duplicate values by design."}, {"id": "C", "text": "A Set requires every key to be a string."}, {"id": "D", "text": "A Set stores only key-value pairs."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a Map in JavaScript?",
    answer: "B. A Map is a key-value collection that allows keys of many types and preserves insertion order during iteration.",
    explanation: "It is useful when you need flexible keys and explicit key-value storage. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A Map allows only string keys."}, {"id": "B", "text": "A Map is a key-value collection that allows keys of many types and preserves insertion order during iteration."}, {"id": "C", "text": "A Map stores values without keys."}, {"id": "D", "text": "A Map automatically removes duplicate keys and values separately."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a WeakMap in JavaScript?",
    answer: "C. A WeakMap stores key-value pairs where keys must be objects and are weakly referenced.",
    explanation: "It is useful for associating metadata with objects without preventing those objects from being garbage-collected. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A Map allows only string keys."}, {"id": "B", "text": "A Map stores values without keys."}, {"id": "C", "text": "A WeakMap stores key-value pairs where keys must be objects and are weakly referenced."}, {"id": "D", "text": "A Map automatically removes duplicate keys and values separately."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a WeakSet in JavaScript?",
    answer: "D. A WeakSet stores object references weakly and does not keep those objects alive by itself.",
    explanation: "It is useful for tracking object membership when you do not need enumeration or primitive values. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A Set allows duplicate values by design."}, {"id": "B", "text": "A Set requires every key to be a string."}, {"id": "C", "text": "A Set stores only key-value pairs."}, {"id": "D", "text": "A WeakSet stores object references weakly and does not keep those objects alive by itself."}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is an ES6 class in JavaScript?",
    answer: "A. An ES6 class provides syntax for defining constructors and methods while using JavaScript's prototype-based inheritance underneath.",
    explanation: "Classes offer a familiar object-oriented syntax but do not change JavaScript's prototype model. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "An ES6 class provides syntax for defining constructors and methods while using JavaScript's prototype-based inheritance underneath."}, {"id": "B", "text": "Classes remove JavaScript's prototype system."}, {"id": "C", "text": "Classes can be instantiated only without `new`."}, {"id": "D", "text": "Classes are CSS constructs."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is a constructor function in JavaScript?",
    answer: "B. A constructor function is a regular function intended to create objects when called with `new`.",
    explanation: "Instances created with `new` can inherit methods through the function's prototype. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It can never be used with `new`."}, {"id": "B", "text": "A constructor function is a regular function intended to create objects when called with `new`."}, {"id": "C", "text": "It is a database constructor rather than a JavaScript function."}, {"id": "D", "text": "Instances cannot inherit through its prototype."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `super()` in ES6 classes?",
    answer: "C. It calls the parent class constructor and is used in a derived class before using `this`",
    explanation: "`super()` calls the constructor of the parent class when used inside a derived class constructor. A derived constructor must call `super()` before accessing `this`. It is also used as `super.method()` to call a parent class method. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Classes remove JavaScript's prototype system."}, {"id": "B", "text": "Classes can be instantiated only without `new`."}, {"id": "C", "text": "It calls the parent class constructor and is used in a derived class before using `this`"}, {"id": "D", "text": "Classes are CSS constructs."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `Promise.all()` in JavaScript?",
    answer: "D. It waits for all promises to fulfill and rejects if any promise rejects",
    explanation: "`Promise.all()` runs multiple Promises together and fulfills only when all of them fulfill. If any input Promise rejects, the combined Promise rejects immediately with that rejection. It is useful when several independent async operations are all required before continuing. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a CSS rule for delayed animations."}, {"id": "B", "text": "It represents only synchronous function calls."}, {"id": "C", "text": "It can have unlimited state changes after it is settled."}, {"id": "D", "text": "It waits for all promises to fulfill and rejects if any promise rejects"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "What is `Promise.race()` in JavaScript?",
    answer: "A. It settles when the first input promise settles",
    explanation: "`Promise.race()` settles as soon as the first input Promise settles, whether fulfilled or rejected. It is useful for timeout patterns and choosing the fastest result. It does not cancel the other Promises; they may continue running in the background. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It settles when the first input promise settles"}, {"id": "B", "text": "It is a CSS rule for delayed animations."}, {"id": "C", "text": "It represents only synchronous function calls."}, {"id": "D", "text": "It can have unlimited state changes after it is settled."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-1',
    topicSlug: 'advanced-questions-1-50',
    question: "How do you handle errors with `async/await`?",
    answer: "B. Use `try/catch` around awaited operations and handle/rethrow the error as needed",
    explanation: "With async/await, wrap awaited operations in `try/catch` to handle rejected Promises. You can log the error, return a safe response, or rethrow it so a higher-level handler can deal with it. In Express, async route errors should also be passed to the application's error-handling middleware. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It removes the need for Promises completely."}, {"id": "B", "text": "Use `try/catch` around awaited operations and handle/rethrow the error as needed"}, {"id": "C", "text": "It makes asynchronous operations execute synchronously on the whole application."}, {"id": "D", "text": "It can be used only with CSS animations."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is a cluster in Node.js?",
    answer: "A. A group of Node.js processes that can use multiple CPU cores",
    explanation: "A Node.js cluster lets an application run multiple Node.js worker processes, usually one per CPU core. These workers can share the same server port and help use multi-core CPUs. It improves throughput and availability, but each worker has its own memory. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A group of Node.js processes that can use multiple CPU cores"}, {"id": "B", "text": "It is a single React component used to share state between pages."}, {"id": "C", "text": "It is a MongoDB collection that stores requests from multiple users."}, {"id": "D", "text": "It is a browser feature that creates one tab for every CPU core."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain some of the cluster methods in Node.js.",
    answer: "B. Methods include fork(), disconnect(), isPrimary/isMaster, and workers",
    explanation: "Cluster provides methods and properties to create and manage workers, such as fork(), worker events, disconnect(), and isPrimary/isMaster. The primary process manages workers while workers handle application requests. This is useful when you want multiple Node.js processes for better CPU utilization. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a single React component used to share state between pages."}, {"id": "B", "text": "Methods include fork(), disconnect(), isPrimary/isMaster, and workers"}, {"id": "C", "text": "It is a MongoDB collection that stores requests from multiple users."}, {"id": "D", "text": "It is a browser feature that creates one tab for every CPU core."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you manage sessions in Node.js?",
    answer: "C. Use sessions with cookies and session middleware such as express-session",
    explanation: "Sessions keep user-specific data across multiple HTTP requests. In Express, middleware such as express-session creates a session and usually stores a session ID in a cookie, while the actual session data can be stored in memory or a database/Redis in production. This is commonly used for login state. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It stores the user's complete session only inside React state."}, {"id": "B", "text": "It replaces HTTP cookies by putting session data in CSS variables."}, {"id": "C", "text": "Use sessions with cookies and session middleware such as express-session"}, {"id": "D", "text": "It requires every request to create a new database connection and user."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain the package needed for file uploading in Node.js.",
    answer: "D. Multer is commonly used for multipart/form-data file uploads",
    explanation: "Multer is a common Express middleware for handling multipart/form-data, which is the format normally used for file uploads. It can receive files from forms, validate limits, and place them in memory or on disk. In production, uploaded files should also be validated and stored securely. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is middleware mainly used for JSON validation and JWT creation."}, {"id": "B", "text": "It is a React library for previewing images before an upload."}, {"id": "C", "text": "It is a Node module used only for creating database indexes."}, {"id": "D", "text": "Multer is commonly used for multipart/form-data file uploads"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you read command-line arguments in Node.js?",
    answer: "A. Use process.argv to read command-line arguments",
    explanation: "Node.js exposes command-line arguments through process.argv. It is an array containing the Node executable, script path, and any arguments supplied by the user. For example, `node app.js dev` lets the program read `dev` from process.argv. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Use process.argv to read command-line arguments"}, {"id": "B", "text": "It reads arguments from the browser's window object."}, {"id": "C", "text": "It reads arguments from CSS custom properties."}, {"id": "D", "text": "It reads command-line values from MongoDB instead of the Node process."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain the `util` module in Node.js.",
    answer: "B. A Node.js utility module with helper functions such as promisify and callbackify",
    explanation: "The util module provides useful Node.js helper functions. Common examples include promisify(), which converts callback-style functions into Promise-based functions, and callbackify(), which does the reverse. It also contains other utility helpers used in Node applications. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is primarily a React routing package for navigating between pages."}, {"id": "B", "text": "A Node.js utility module with helper functions such as promisify and callbackify"}, {"id": "C", "text": "It is a database driver that stores utility functions in MongoDB."}, {"id": "D", "text": "It is a CSS framework for reusable utility classes."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you handle environment variables in Node.js?",
    answer: "C. Use process.env to access environment variables",
    explanation: "Environment variables are accessed through process.env. They are commonly used for values that change between environments, such as PORT, database URLs, API keys, and secrets. Sensitive values should normally be kept outside source code, for example in deployment secrets or a .env file during development. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a browser-only object that safely exposes server secrets to users."}, {"id": "B", "text": "It stores environment values permanently inside the JavaScript bundle."}, {"id": "C", "text": "Use process.env to access environment variables"}, {"id": "D", "text": "It is a React state object that changes automatically when deployment changes."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the DNS module in Node.js?",
    answer: "D. A Node.js module used for DNS lookups and name resolution",
    explanation: "The DNS module provides APIs for resolving domain names and DNS records. For example, Node can resolve a hostname to an IP address. It is useful when an application needs lower-level control over DNS lookups. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly responsible for parsing HTML and rendering React components."}, {"id": "B", "text": "It provides APIs for uploading files directly into MongoDB collections."}, {"id": "C", "text": "It is a CSS module used to map domain names to component styles."}, {"id": "D", "text": "A Node.js module used for DNS lookups and name resolution"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are child processes in Node.js?",
    answer: "A. Separate programs created from the main Node.js process",
    explanation: "Child processes are separate OS processes created by the main Node.js process. APIs such as spawn(), exec(), execFile(), and fork() allow Node to run external commands or other Node programs. They are useful for CPU-heavy or external work that should not block the main event loop. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Separate programs created from the main Node.js process"}, {"id": "B", "text": "It is a lightweight React child component running inside the same render tree."}, {"id": "C", "text": "It is a MongoDB document created automatically for each HTTP request."}, {"id": "D", "text": "It is a browser tab that shares the exact same operating-system process."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you validate data in Node.js?",
    answer: "B. Validate and sanitize input using schemas/libraries before processing it",
    explanation: "Validation checks whether incoming data has the expected type, format, and values before the application uses or stores it. Libraries such as Joi, Zod, or express-validator can make schema validation easier. Validation should happen at the API boundary because user input cannot be trusted. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means trusting client input and correcting it only after database insertion."}, {"id": "B", "text": "Validate and sanitize input using schemas/libraries before processing it"}, {"id": "C", "text": "It means validating only the CSS and HTML structure of a page."}, {"id": "D", "text": "It means checking data only when an administrator manually reviews it."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the role of the `net` module in Node.js?",
    answer: "C. It provides networking APIs such as TCP and IPC sockets",
    explanation: "The net module provides low-level networking APIs, especially TCP servers and clients. It is useful when you need direct socket-level communication rather than normal HTTP. Node's HTTP module is built on top of lower-level networking functionality. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It provides only high-level React routing and browser navigation APIs."}, {"id": "B", "text": "It is used only for reading and writing MongoDB documents."}, {"id": "C", "text": "It provides networking APIs such as TCP and IPC sockets"}, {"id": "D", "text": "It is a CSS networking utility that runs only during page rendering."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is tracing in Node.js?",
    answer: "D. Tracing records execution/activity to help diagnose performance and behavior",
    explanation: "Tracing means collecting information about what the application is doing and how long operations take. It helps developers find slow requests, bottlenecks, and the path of work through different services. In larger systems, tracing is often combined with logs and metrics. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means deleting old logs so an application uses less disk space."}, {"id": "B", "text": "It means changing CSS styles while a request is running."}, {"id": "C", "text": "It means storing database schemas without recording execution activity."}, {"id": "D", "text": "Tracing records execution/activity to help diagnose performance and behavior"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the Reactor Pattern in Node.js?",
    answer: "A. An event-driven pattern where events trigger callbacks/handlers for asynchronous work",
    explanation: "The Reactor Pattern is a core idea behind Node.js's event-driven architecture. Instead of waiting for an I/O operation to finish, Node registers a callback and continues doing other work. When the operation completes, the event loop invokes the appropriate handler. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "An event-driven pattern where events trigger callbacks/handlers for asynchronous work"}, {"id": "B", "text": "It means blocking the application until every I/O operation finishes."}, {"id": "C", "text": "It is a React component pattern for rendering reusable UI cards."}, {"id": "D", "text": "It is a database normalization pattern for splitting collections."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are global objects in Node.js?",
    answer: "B. Built-in objects available globally, such as process, console, Buffer, and setTimeout",
    explanation: "Global objects are values available throughout a Node.js application without importing them in the usual way. Examples include process, console, Buffer, setTimeout(), and global. They provide access to runtime, timing, logging, and system functionality. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "They are objects that must always be imported from MongoDB before use."}, {"id": "B", "text": "Built-in objects available globally, such as process, console, Buffer, and setTimeout"}, {"id": "C", "text": "They are browser DOM objects that are automatically available in every Node process."}, {"id": "D", "text": "They are user-created variables that become global only after a React render."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the Test Pyramid in Node.js?",
    answer: "C. A testing strategy with many unit tests, fewer integration tests, and fewer end-to-end tests",
    explanation: "The Test Pyramid recommends having many fast unit tests, fewer integration tests, and a smaller number of end-to-end tests. Unit tests verify small pieces of logic, integration tests verify components working together, and E2E tests verify complete user flows. This balances confidence with test speed and maintenance cost. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It recommends mostly end-to-end tests because unit tests are unreliable."}, {"id": "B", "text": "It means testing only the database and skipping application logic."}, {"id": "C", "text": "A testing strategy with many unit tests, fewer integration tests, and fewer end-to-end tests"}, {"id": "D", "text": "It recommends equal numbers of unit, integration, and end-to-end tests."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the Buffer class in Node.js?",
    answer: "D. A class for working with raw binary data in Node.js",
    explanation: "Buffer is Node.js's class for working with raw binary data. It is commonly used for files, network packets, streams, and other data that is not simple text. For example, when reading a file as binary data, Node may provide it as a Buffer. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a React state container used to store component props."}, {"id": "B", "text": "It is a CSS object used to temporarily hold layout measurements."}, {"id": "C", "text": "It is a MongoDB collection optimized for binary documents."}, {"id": "D", "text": "A class for working with raw binary data in Node.js"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the difference between `fork()` and `spawn()` methods in Node.js?",
    answer: "A. fork() starts a Node.js child with IPC; spawn() starts a general child process with streams",
    explanation: "spawn() is a general child-process API and is useful when you want to stream a command's input/output. fork() is specifically for starting another Node.js module and provides an IPC channel for communication between parent and child. So fork is convenient for Node-to-Node process communication. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "fork() starts a Node.js child with IPC; spawn() starts a general child process with streams"}, {"id": "B", "text": "It is a lightweight React child component running inside the same render tree."}, {"id": "C", "text": "It is a MongoDB document created automatically for each HTTP request."}, {"id": "D", "text": "It is a browser tab that shares the exact same operating-system process."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Give some examples of async functions.",
    answer: "B. Examples include async functions using await, Promise-based APIs, and async callbacks",
    explanation: "Examples include an async function using await, a callback passed to an asynchronous API, and functions that return Promises. Async code lets Node continue other work instead of waiting synchronously for I/O. `async/await` is mainly a cleaner syntax for working with Promises. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "An async function must block the Node.js event loop until every operation completes."}, {"id": "B", "text": "Examples include async functions using await, Promise-based APIs, and async callbacks"}, {"id": "C", "text": "An async function can return only plain strings and cannot work with Promises."}, {"id": "D", "text": "Async code means every callback runs synchronously before the next line."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How is JavaScript different from Node.js?",
    answer: "C. JavaScript is the language; Node.js is a runtime that executes JavaScript outside the browser",
    explanation: "JavaScript is the programming language, while Node.js is a runtime that provides an environment for executing JavaScript outside the browser. Node adds APIs for files, networking, processes, streams, and servers. JavaScript itself does not inherently provide all of these Node-specific APIs. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Node.js is the programming language, while JavaScript is only a package manager."}, {"id": "B", "text": "JavaScript and Node.js are two different databases with different query languages."}, {"id": "C", "text": "JavaScript is the language; Node.js is a runtime that executes JavaScript outside the browser"}, {"id": "D", "text": "JavaScript can run only on servers, while Node.js runs only inside browsers."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are security implementations within Node.js?",
    answer: "D. Use validation, secure headers, authentication, safe dependencies, rate limiting, and input sanitization",
    explanation: "Node.js security includes validating and sanitizing input, using HTTPS, secure headers, authentication/authorization, rate limiting, safe password hashing, dependency updates, and secret management. The key idea is to never trust client input. Security should be applied at multiple layers rather than relying on one package. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means trusting client input and correcting it only after database insertion."}, {"id": "B", "text": "It means validating only the CSS and HTML structure of a page."}, {"id": "C", "text": "It means checking data only when an administrator manually reviews it."}, {"id": "D", "text": "Use validation, secure headers, authentication, safe dependencies, rate limiting, and input sanitization"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are the states used in a Promise object in Node.js?",
    answer: "A. Pending, fulfilled, and rejected",
    explanation: "A Promise has three states: pending, fulfilled, and rejected. It starts as pending and eventually becomes fulfilled when the operation succeeds or rejected when it fails. Once settled, a Promise does not change to another state. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Pending, fulfilled, and rejected"}, {"id": "B", "text": "The states are created, compiled, and rendered."}, {"id": "C", "text": "The states are open, closed, and locked."}, {"id": "D", "text": "A Promise can move freely between fulfilled and rejected states forever."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain the function of exit code in Node.js.",
    answer: "B. It is the numeric status returned when a Node.js process exits",
    explanation: "An exit code is a numeric value returned when a Node.js process finishes. Conventionally, `0` means successful completion and a non-zero code indicates an error or abnormal termination. Operating systems, scripts, and process managers can use this value to detect success or failure. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is the HTTP status code returned to a browser by an Express route."}, {"id": "B", "text": "It is the numeric status returned when a Node.js process exits"}, {"id": "C", "text": "It is the React component status stored in props."}, {"id": "D", "text": "It is a MongoDB document ID returned after an insert."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What causes server latency and prevents scalability in Node.js?",
    answer: "C. Blocking CPU work, slow I/O, poor queries, and event-loop blocking can cause latency",
    explanation: "Latency can come from blocking CPU work, slow database queries, network delays, too much synchronous code, memory pressure, or inefficient application logic. Because Node's main JavaScript thread handles the event loop, blocking it can delay many requests. Profiling, caching, efficient queries, and moving CPU-heavy work to workers can help. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Latency is mainly caused by adding more asynchronous I/O and using efficient indexes."}, {"id": "B", "text": "Scalability problems disappear automatically when every operation is synchronous."}, {"id": "C", "text": "Blocking CPU work, slow I/O, poor queries, and event-loop blocking can cause latency"}, {"id": "D", "text": "CSS comments and HTML whitespace are normally the main server bottlenecks."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is a control function in Node.js?",
    answer: "D. A function that controls or coordinates what happens next, often through a callback",
    explanation: "A control function is generally a function that controls what happens next in a flow, often by invoking a callback or calling next(). In Express middleware, `next()` passes control to the next middleware. The exact meaning depends on the context in which the term is used. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a function whose only purpose is to create a CSS selector."}, {"id": "B", "text": "It is a MongoDB function that automatically creates indexes."}, {"id": "C", "text": "It is a React Hook that permanently controls browser navigation."}, {"id": "D", "text": "A function that controls or coordinates what happens next, often through a callback"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "When do you need modularization in Node.js?",
    answer: "A. When code is growing, reusable, or hard to maintain as one large file",
    explanation: "Modularization becomes useful when an application grows and one file starts doing too many jobs. Splitting routes, controllers, services, utilities, and data access into modules makes code easier to test, reuse, and maintain. Good modules usually have a clear responsibility. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "When code is growing, reusable, or hard to maintain as one large file"}, {"id": "B", "text": "It is primarily a React routing package for navigating between pages."}, {"id": "C", "text": "It is a database driver that stores utility functions in MongoDB."}, {"id": "D", "text": "It is a CSS framework for reusable utility classes."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain how blocking is prevented in Node.js.",
    answer: "B. By using non-blocking asynchronous I/O and keeping heavy work off the event loop",
    explanation: "Node prevents blocking mainly through asynchronous, non-blocking I/O. Instead of waiting for file, database, or network operations, Node registers the operation and continues handling other work. CPU-heavy synchronous code is still capable of blocking the event loop, so it should be avoided or moved elsewhere. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Blocking is prevented by converting every operation into synchronous code."}, {"id": "B", "text": "By using non-blocking asynchronous I/O and keeping heavy work off the event loop"}, {"id": "C", "text": "Node.js prevents blocking by stopping other requests until the current one finishes."}, {"id": "D", "text": "Blocking is solved only by increasing the browser's CSS bundle size."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How many layers are there in a Node.js application architecture?",
    answer: "C. Commonly described in layers such as presentation/API, business logic, and data/access layers",
    explanation: "A common Node.js architecture can be separated into presentation/API, business logic, and data-access layers. The API layer handles requests and responses, the business layer contains application rules, and the data layer communicates with databases or external services. The exact number of layers can vary by project. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A typical layered design puts all business rules directly inside database queries."}, {"id": "B", "text": "Every Node.js application must have exactly one layer and cannot be separated."}, {"id": "C", "text": "Commonly described in layers such as presentation/API, business logic, and data/access layers"}, {"id": "D", "text": "The API layer should contain every database query, UI rule, and deployment script."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Name the input arguments for an asynchronous queue.",
    answer: "D. The queue, worker/task handler, and callback/result-related arguments depend on the queue implementation",
    explanation: "The exact arguments depend on the asynchronous queue implementation, but a queue normally needs a task/job and a way to process it, often through a worker or callback. A result or error is then returned when processing finishes. Queues are useful for controlling concurrency and handling background work. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A queue needs only a CSS class and does not need a task or worker."}, {"id": "B", "text": "Every queue implementation has exactly the same arguments regardless of library."}, {"id": "C", "text": "A queue works by executing every job synchronously in the request thread."}, {"id": "D", "text": "The queue, worker/task handler, and callback/result-related arguments depend on the queue implementation"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Does Node.js application buffer data?",
    answer: "A. Yes, Node.js can buffer data, especially with streams and Buffer objects",
    explanation: "Yes. Node.js can buffer data using Buffer objects and stream buffering. Streams may temporarily hold chunks of data when the producer and consumer operate at different speeds. Proper stream handling helps process large data without loading everything into memory at once. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Yes, Node.js can buffer data, especially with streams and Buffer objects"}, {"id": "B", "text": "It is a React state container used to store component props."}, {"id": "C", "text": "It is a CSS object used to temporarily hold layout measurements."}, {"id": "D", "text": "It is a MongoDB collection optimized for binary documents."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Is it possible to run external processes with Node.js?",
    answer: "B. Yes, using child_process methods such as spawn(), exec(), or fork()",
    explanation: "Yes. Node can run external processes with child_process APIs such as spawn(), exec(), execFile(), and fork(). This is useful for calling system commands, running scripts, or separating expensive work. Input to external commands must be handled carefully to avoid command-injection vulnerabilities. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a lightweight React child component running inside the same render tree."}, {"id": "B", "text": "Yes, using child_process methods such as spawn(), exec(), or fork()"}, {"id": "C", "text": "It is a MongoDB document created automatically for each HTTP request."}, {"id": "D", "text": "It is a browser tab that shares the exact same operating-system process."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Is it possible to avoid callback hell and how?",
    answer: "C. Use Promises, async/await, named functions, or modular control-flow patterns",
    explanation: "Callback hell can be reduced by using Promises, async/await, named functions, and separating logic into smaller functions. `async/await` is often easiest to read because asynchronous code looks more like normal sequential code. Good error handling also becomes easier to structure. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means a single callback with no asynchronous operations at all."}, {"id": "B", "text": "It is a React lifecycle used to prevent nested components."}, {"id": "C", "text": "Use Promises, async/await, named functions, or modular control-flow patterns"}, {"id": "D", "text": "It is a database indexing problem caused by too many collections."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the function of the `fs` module?",
    answer: "D. It provides APIs for working with files and the file system",
    explanation: "The fs module provides file-system operations such as reading, writing, updating, deleting, renaming files, and working with directories. It provides both callback and Promise-based APIs. For large files, streams from fs are often better than reading the entire file into memory. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a React module for managing component state."}, {"id": "B", "text": "It is a browser API for changing CSS styles."}, {"id": "C", "text": "It is a MongoDB package for creating database schemas."}, {"id": "D", "text": "It provides APIs for working with files and the file system"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Define the `os` module in Node.js.",
    answer: "A. It provides operating-system information such as CPU, memory, and platform details",
    explanation: "The os module provides information about the operating system. It can provide CPU information, memory information, platform, architecture, home directory, and other system details. It is useful when application behavior depends on the host environment. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It provides operating-system information such as CPU, memory, and platform details"}, {"id": "B", "text": "It is mainly used to create HTTP routes and send JSON responses."}, {"id": "C", "text": "It is a React Hook for detecting the browser operating system."}, {"id": "D", "text": "It is a CSS parser that returns viewport information only."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is a Transform Stream in Node.js?",
    answer: "B. A stream that transforms data while it passes through, such as compression",
    explanation: "A Transform Stream is a stream that receives data, changes or processes it, and outputs the transformed data. Compression and encryption pipelines are common examples. Because it works with chunks, it can process large data without keeping the entire input in memory. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It stores the complete input in memory before any output can be produced."}, {"id": "B", "text": "A stream that transforms data while it passes through, such as compression"}, {"id": "C", "text": "It is a React component used to transform JSX into HTML."}, {"id": "D", "text": "It is a MongoDB collection that transforms documents automatically."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How does Node.js handle concurrency if it is single-threaded?",
    answer: "C. It uses the event loop and non-blocking I/O, while the OS/libuv handles many operations concurrently",
    explanation: "Node.js is single-threaded for JavaScript execution, but it can handle many concurrent operations through the event loop, non-blocking I/O, libuv, and operating-system facilities. Some operations are handled by a thread pool or other system mechanisms. This is why one Node process can serve many simultaneous I/O-heavy requests. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Blocking is prevented by converting every operation into synchronous code."}, {"id": "B", "text": "Node.js prevents blocking by stopping other requests until the current one finishes."}, {"id": "C", "text": "It uses the event loop and non-blocking I/O, while the OS/libuv handles many operations concurrently"}, {"id": "D", "text": "Blocking is solved only by increasing the browser's CSS bundle size."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the meaning of HTTP status code 500?",
    answer: "D. It means an internal server error occurred",
    explanation: "HTTP 500 means Internal Server Error. It indicates that the server encountered an unexpected problem while processing the request. The client usually cannot fix the problem directly; the server logs should be checked to find the cause. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means the request was successfully created with HTTP 201."}, {"id": "B", "text": "It means the client is authenticated and authorized with HTTP 200."}, {"id": "C", "text": "It means the resource was permanently redirected with HTTP 301."}, {"id": "D", "text": "It means an internal server error occurred"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is a Node Inspector?",
    answer: "A. A debugging tool/interface for inspecting and debugging Node.js applications",
    explanation: "Node Inspector is a debugging interface for Node.js applications. It works with debugging tools such as Chrome DevTools to inspect variables, set breakpoints, step through code, and examine call stacks. It is useful for finding runtime and logic problems. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A debugging tool/interface for inspecting and debugging Node.js applications"}, {"id": "B", "text": "It is a package manager used to install Node dependencies."}, {"id": "C", "text": "It is a database used to store application logs."}, {"id": "D", "text": "It is a CSS tool that changes production styles automatically."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "When are we required to use the cluster module in Node.js?",
    answer: "B. When the app needs to use multiple CPU cores or handle more traffic with multiple processes",
    explanation: "The cluster module is useful when a Node.js server needs to use multiple CPU cores or handle more traffic through multiple processes. Each worker runs independently, so one worker failing does not necessarily stop the others. For many modern deployments, process managers or containers may provide similar scaling. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a single React component used to share state between pages."}, {"id": "B", "text": "When the app needs to use multiple CPU cores or handle more traffic with multiple processes"}, {"id": "C", "text": "It is a MongoDB collection that stores requests from multiple users."}, {"id": "D", "text": "It is a browser feature that creates one tab for every CPU core."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How does Node.js use cryptography?",
    answer: "C. Through the built-in crypto module for hashing, encryption, signing, and secure random values",
    explanation: "Node's crypto module provides cryptographic functionality such as hashing, encryption/decryption, digital signatures, secure random bytes, and key operations. It is useful for security-related tasks, but cryptographic primitives should be used correctly rather than custom-built. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Security is achieved mainly by disabling validation and trusting authenticated clients."}, {"id": "B", "text": "Passwords should be stored as plain text so they can be recovered easily."}, {"id": "C", "text": "Through the built-in crypto module for hashing, encryption, signing, and secure random values"}, {"id": "D", "text": "HTTPS is unnecessary when an application already uses JSON APIs."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you include an HTTP server in a Node.js module?",
    answer: "D. Use Node's http module and createServer(), then export or use the server/module as needed",
    explanation: "Node can create an HTTP server using the built-in `http` module and `http.createServer()`. The server receives a request and response object, and `listen()` starts it on a port. This is the foundation behind many Node web frameworks. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "C", "text": "It requires all work to run synchronously and blocks other operations until completion."}, {"id": "D", "text": "Use Node's http module and createServer(), then export or use the server/module as needed"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the purpose of `EventEmitter`?",
    answer: "A. It allows objects to emit named events and listeners to respond to them",
    explanation: "EventEmitter provides a pattern for publishing and listening for events. An object can emit a named event, and one or more listeners can respond to it. Many Node APIs use this pattern, including streams and servers. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It allows objects to emit named events and listeners to respond to them"}, {"id": "B", "text": "It is a file-system API used to read and write files."}, {"id": "C", "text": "It is a database table that stores event records permanently."}, {"id": "D", "text": "It is a React component used only to render DOM events."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain the child process module in Node.js.",
    answer: "B. It provides APIs such as spawn(), exec(), execFile(), and fork() to run child processes",
    explanation: "The child_process module lets Node create and control separate processes. `spawn()` is good for streaming output, `exec()` is convenient for shell commands, `execFile()` runs an executable, and `fork()` starts another Node module with IPC. Choosing the right method depends on how you need to communicate with the process. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a lightweight React child component running inside the same render tree."}, {"id": "B", "text": "It provides APIs such as spawn(), exec(), execFile(), and fork() to run child processes"}, {"id": "C", "text": "It is a MongoDB document created automatically for each HTTP request."}, {"id": "D", "text": "It is a browser tab that shares the exact same operating-system process."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain event-driven programming in Node.js.",
    answer: "C. Programs respond to emitted events by running registered handlers",
    explanation: "Event-driven programming means code responds to events rather than constantly checking whether something happened. Node registers handlers for events such as requests, connections, or completed operations. This model fits I/O-heavy applications well. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means polling continuously with blocking loops instead of responding to events."}, {"id": "B", "text": "It is a database schema pattern unrelated to asynchronous operations."}, {"id": "C", "text": "Programs respond to emitted events by running registered handlers"}, {"id": "D", "text": "It disables callbacks and requires every request to be synchronous."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is callback hell in Node.js?",
    answer: "D. A deeply nested chain of callbacks that becomes difficult to read and maintain",
    explanation: "Callback hell is deeply nested asynchronous callbacks that make code difficult to read, maintain, and handle errors in. It often happens when several dependent async operations are nested inside one another. Promises, async/await, and better function structure help avoid it. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means a single callback with no asynchronous operations at all."}, {"id": "B", "text": "It is a React lifecycle used to prevent nested components."}, {"id": "C", "text": "It is a database indexing problem caused by too many collections."}, {"id": "D", "text": "A deeply nested chain of callbacks that becomes difficult to read and maintain"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are common performance bottlenecks in Node.js applications and how can they be handled?",
    answer: "A. Common issues include blocking CPU work, slow I/O, poor DB queries, and excessive memory use; use profiling, caching, async I/O, and optimization",
    explanation: "Common bottlenecks include blocking the event loop, slow database queries, excessive network calls, memory leaks, large payloads, and inefficient algorithms. Profiling helps identify the real bottleneck before optimizing. Caching, indexes, pagination, streams, and worker threads can then be used where appropriate. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Common issues include blocking CPU work, slow I/O, poor DB queries, and excessive memory use; use profiling, caching, async I/O, and optimization"}, {"id": "B", "text": "Blocking is prevented by converting every operation into synchronous code."}, {"id": "C", "text": "Node.js prevents blocking by stopping other requests until the current one finishes."}, {"id": "D", "text": "Blocking is solved only by increasing the browser's CSS bundle size."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain microservices architecture in Node.js development.",
    answer: "B. An application is split into small independent services that communicate through APIs/events",
    explanation: "Microservices split a large application into smaller independently deployable services. Each service normally owns a specific business capability and communicates through APIs or messaging. This can improve independent scaling and deployment, but it also adds network, monitoring, and operational complexity. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Microservices require every feature to run inside one indivisible process."}, {"id": "B", "text": "An application is split into small independent services that communicate through APIs/events"}, {"id": "C", "text": "Microservices remove the need for network communication between services."}, {"id": "D", "text": "Microservices always reduce operational complexity compared with a monolith."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain GraphQL and compare it with RESTful APIs in Node.js.",
    answer: "C. GraphQL lets clients request needed fields; REST uses resource-based endpoints and HTTP methods",
    explanation: "REST exposes resources through endpoints and standard HTTP methods, while GraphQL provides a query language where the client requests the fields it needs. GraphQL can reduce over-fetching but adds schema and query complexity. REST is often simpler and works naturally with HTTP caching and standard semantics. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "GraphQL and REST require exactly the same endpoint and response structure."}, {"id": "B", "text": "REST cannot use HTTP methods such as GET or POST."}, {"id": "C", "text": "GraphQL lets clients request needed fields; REST uses resource-based endpoints and HTTP methods"}, {"id": "D", "text": "GraphQL is a CSS technology and cannot request data from a server."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you deploy a Node.js application in a containerized environment using Docker?",
    answer: "D. Create a Dockerfile, build an image, run the container, configure environment/ports, and deploy it",
    explanation: "A typical Docker deployment creates a Dockerfile, installs dependencies, copies the application, exposes the required port, and defines the startup command. The image is built and then run as a container with environment-specific configuration. Docker makes the runtime environment more consistent across machines. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Docker deployment means copying source files into a browser without creating an image."}, {"id": "B", "text": "A Docker container requires every environment variable to be hard-coded into source files."}, {"id": "C", "text": "Containers eliminate the need for ports, startup commands, or runtime configuration."}, {"id": "D", "text": "Create a Dockerfile, build an image, run the container, configure environment/ports, and deploy it"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you handle long-running tasks in a Node.js application without blocking the event loop?",
    answer: "A. Use worker threads, child processes, queues, or external workers for CPU-heavy/long tasks",
    explanation: "Long-running or CPU-heavy tasks should not execute directly in the main event loop. They can be moved to worker_threads, child processes, background job queues, or external workers. This keeps request handling responsive while the heavy task runs separately. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Use worker threads, child processes, queues, or external workers for CPU-heavy/long tasks"}, {"id": "B", "text": "It is a lightweight React child component running inside the same render tree."}, {"id": "C", "text": "It is a MongoDB document created automatically for each HTTP request."}, {"id": "D", "text": "It is a browser tab that shares the exact same operating-system process."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are security vulnerabilities in Node.js applications and how can they be mitigated?",
    answer: "B. Risks include XSS, injection, weak auth, dependency vulnerabilities, and DoS; mitigate with validation, secure headers, auth, updates, and rate limits",
    explanation: "Common vulnerabilities include injection, XSS, broken authentication, insecure dependencies, weak authorization, sensitive-data exposure, and denial-of-service risks. Mitigation includes input validation, secure headers, HTTPS, safe password hashing, dependency updates, rate limiting, and least-privilege access. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means trusting client input and correcting it only after database insertion."}, {"id": "B", "text": "Risks include XSS, injection, weak auth, dependency vulnerabilities, and DoS; mitigate with validation, secure headers, auth, updates, and rate limits"}, {"id": "C", "text": "It means validating only the CSS and HTML structure of a page."}, {"id": "D", "text": "It means checking data only when an administrator manually reviews it."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain Continuous Integration and Continuous Deployment (CI/CD) in Node.js development.",
    answer: "C. CI automatically builds/tests changes; CD automates delivery/deployment",
    explanation: "CI automatically runs checks such as linting, tests, and builds whenever code changes. CD automates delivering or deploying validated builds to environments. Together they reduce manual deployment mistakes and make releases more repeatable. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "CI/CD means manually copying files to production after every code change."}, {"id": "B", "text": "CI/CD is only a database backup process and does not involve builds or tests."}, {"id": "C", "text": "CI automatically builds/tests changes; CD automates delivery/deployment"}, {"id": "D", "text": "CI/CD replaces version control and makes Git unnecessary."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How would you design and implement a robust error-handling strategy in a large-scale Node.js application?",
    answer: "D. Use centralized error middleware, consistent error types/responses, logging, monitoring, and safe handling of async errors",
    explanation: "A robust strategy usually has centralized error handling, consistent error types, safe client responses, structured logging, monitoring, and proper handling of async errors. Internal stack traces and secrets should not be exposed to users. Expected operational errors and unexpected programming errors should be treated appropriately. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "The safest strategy is to expose full stack traces and secrets to every client."}, {"id": "B", "text": "Errors should be ignored so successful requests are not affected."}, {"id": "C", "text": "Each route should invent unrelated error formats without centralized handling."}, {"id": "D", "text": "Use centralized error middleware, consistent error types/responses, logging, monitoring, and safe handling of async errors"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How does error handling differ in synchronous and asynchronous code in Node.js?",
    answer: "A. Synchronous code can use try/catch directly; async code uses callbacks, Promise catch, or try/catch with await",
    explanation: "Synchronous code can normally use try/catch around the operation. Callback APIs commonly use error-first callbacks, while Promises use `.catch()` and async/await uses try/catch around awaited operations. The important point is to handle errors at the correct asynchronous boundary. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Synchronous code can use try/catch directly; async code uses callbacks, Promise catch, or try/catch with await"}, {"id": "B", "text": "The safest strategy is to expose full stack traces and secrets to every client."}, {"id": "C", "text": "Errors should be ignored so successful requests are not affected."}, {"id": "D", "text": "Each route should invent unrelated error formats without centralized handling."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you debug a Node.js application?",
    answer: "B. Use logs, breakpoints, Node Inspector/DevTools, stack traces, and profiling tools",
    explanation: "Debugging can use console/logging, stack traces, breakpoints, Node Inspector/DevTools, tests, and profiling tools. Start by reproducing the issue, inspect the failing path, identify the root cause, and verify the fix. Logs and monitoring are especially important in production. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a package manager used to install Node dependencies."}, {"id": "B", "text": "Use logs, breakpoints, Node Inspector/DevTools, stack traces, and profiling tools"}, {"id": "C", "text": "It is a database used to store application logs."}, {"id": "D", "text": "It is a CSS tool that changes production styles automatically."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the role of the `process` object in Node.js? Give examples of its usage.",
    answer: "C. It provides process information/control such as env, argv, pid, exit(), and signals",
    explanation: "The process object represents the current Node.js process. Common uses include reading `process.env`, `process.argv`, `process.pid`, handling signals, and exiting with `process.exit()`. It is also useful for inspecting runtime information. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It reads arguments from the browser's window object."}, {"id": "B", "text": "It reads arguments from CSS custom properties."}, {"id": "C", "text": "It provides process information/control such as env, argv, pid, exit(), and signals"}, {"id": "D", "text": "It reads command-line values from MongoDB instead of the Node process."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is session management in Express.js? How can it be implemented?",
    answer: "D. It stores user session data and identifies the session using a cookie; Express can use express-session",
    explanation: "Express session management keeps track of a user between requests. A session ID is commonly stored in a cookie while session data is stored server-side, often in Redis or another shared store for production. Cookie settings such as secure, httpOnly, and sameSite are important for security. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It stores the user's complete session only inside React state."}, {"id": "B", "text": "It replaces HTTP cookies by putting session data in CSS variables."}, {"id": "C", "text": "It requires every request to create a new database connection and user."}, {"id": "D", "text": "It stores user session data and identifies the session using a cookie; Express can use express-session"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain the concept of middleware chaining in Express.js.",
    answer: "A. Multiple middleware functions run in order and pass control using next()",
    explanation: "Middleware chaining means multiple middleware functions execute in sequence for a request. Each middleware can modify the request/response, finish the response, or call `next()` to continue. Order matters because later middleware only runs when control reaches it. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Multiple middleware functions run in order and pass control using next()"}, {"id": "B", "text": "Middleware executes in random order and never needs to pass control."}, {"id": "C", "text": "Only one middleware can be registered for an Express request."}, {"id": "D", "text": "Middleware chaining is used only for styling HTML responses."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are the advantages of using a templating engine like EJS or Handlebars in Express.js?",
    answer: "B. They generate HTML dynamically from data and are useful for server-rendered pages",
    explanation: "Templating engines such as EJS or Handlebars let the server generate HTML using dynamic data. They are useful for server-rendered pages, emails, or simple web applications. They reduce repetitive HTML by allowing templates and reusable layouts/partials. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A template engine is used only to create database indexes."}, {"id": "B", "text": "They generate HTML dynamically from data and are useful for server-rendered pages"}, {"id": "C", "text": "A template engine replaces the Node.js runtime completely."}, {"id": "D", "text": "A template engine is a React state-management library."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you deploy a Node.js application to a production server?",
    answer: "C. Build/test the app, configure environment and process manager, use HTTPS/reverse proxy, and deploy the Node.js server",
    explanation: "Production deployment normally includes installing dependencies, setting production environment variables, building if needed, running the server with a process manager/container, configuring HTTPS/reverse proxy, and monitoring it. Tools such as PM2, Docker, or cloud platforms can help keep the application running. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a browser-only object that safely exposes server secrets to users."}, {"id": "B", "text": "It stores environment values permanently inside the JavaScript bundle."}, {"id": "C", "text": "Build/test the app, configure environment and process manager, use HTTPS/reverse proxy, and deploy the Node.js server"}, {"id": "D", "text": "It is a React state object that changes automatically when deployment changes."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain the purpose of the `express.static()` middleware in Express.js.",
    answer: "D. It serves static files such as HTML, CSS, JavaScript, and images from a directory",
    explanation: "`express.static()` serves static assets directly from a directory. For example, an Express app can expose an `uploads` or `public` folder so browsers can request images, CSS, or JavaScript files. It is different from an API route because it serves files rather than executing custom route logic. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is middleware that performs database joins before returning API responses."}, {"id": "B", "text": "It creates JWT tokens for every file request."}, {"id": "C", "text": "It stores static files in React state instead of serving them from a directory."}, {"id": "D", "text": "It serves static files such as HTML, CSS, JavaScript, and images from a directory"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are route parameters in Express.js? How do you access them?",
    answer: "A. They are dynamic URL values such as /users/:id, accessed through req.params",
    explanation: "Route parameters are dynamic values in a URL, such as `/users/:id`. Express makes them available through `req.params`, so `/users/25` gives `req.params.id` as `25`. They are useful when a resource is identified by a URL value. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "They are dynamic URL values such as /users/:id, accessed through req.params"}, {"id": "B", "text": "They are query-string values after the ? and are accessed through req.query only."}, {"id": "C", "text": "They are browser cookies and are available only through req.cookies."}, {"id": "D", "text": "They are database indexes automatically created from the URL."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you handle sessions and cookies in an Express.js application?",
    answer: "B. Use cookies plus session middleware such as express-session, with secure cookie settings",
    explanation: "Sessions store server-side user state while cookies store small values in the browser and can be sent with requests. Express can use session middleware to combine a session ID cookie with server-side session data. Secure cookie settings are important to reduce attacks such as session theft. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It stores the user's complete session only inside React state."}, {"id": "B", "text": "Use cookies plus session middleware such as express-session, with secure cookie settings"}, {"id": "C", "text": "It replaces HTTP cookies by putting session data in CSS variables."}, {"id": "D", "text": "It requires every request to create a new database connection and user."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you create a basic HTTP server in Node.js?",
    answer: "C. Use http.createServer() with a request handler and call listen() on a port",
    explanation: "A basic server can be created with `http.createServer((req, res) => { ... })` and started with `server.listen(port)`. The request object contains information about the incoming request and the response object is used to send data back. Express builds higher-level routing and middleware on top of these concepts. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "C", "text": "Use http.createServer() with a request handler and call listen() on a port"}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the `fs` module in Node.js?",
    answer: "D. A Node.js module for reading, writing, updating, and managing files and directories",
    explanation: "The fs module is Node's file-system API. It supports reading and writing files, creating/removing directories, renaming files, checking metadata, and more. Promise-based fs APIs are convenient with async/await. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a React module for managing component state."}, {"id": "B", "text": "It is a browser API for changing CSS styles."}, {"id": "C", "text": "It is a MongoDB package for creating database schemas."}, {"id": "D", "text": "A Node.js module for reading, writing, updating, and managing files and directories"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is event-loop starvation and how can it be prevented?",
    answer: "A. When long/blocking work prevents other callbacks from getting CPU time",
    explanation: "Event-loop starvation occurs when one callback or a sequence of heavy tasks keeps taking CPU time and prevents other callbacks from getting a chance to run. Avoid large synchronous loops, use asynchronous APIs, and move CPU-heavy work to worker threads or child processes. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "When long/blocking work prevents other callbacks from getting CPU time"}, {"id": "B", "text": "It is a lightweight React child component running inside the same render tree."}, {"id": "C", "text": "It is a MongoDB document created automatically for each HTTP request."}, {"id": "D", "text": "It is a browser tab that shares the exact same operating-system process."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are the differences between `process.nextTick()` and `setImmediate()`?",
    answer: "B. nextTick() runs before the event loop continues to later phases; setImmediate() runs in the check phase",
    explanation: "`process.nextTick()` schedules a callback to run after the current operation and before the event loop continues to later phases. `setImmediate()` schedules work for the check phase of the event loop. The difference matters when ordering asynchronous callbacks. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "nextTick() runs before the event loop continues to later phases; setImmediate() runs in the check phase"}, {"id": "C", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Can you explain how to handle security in a Node.js application?",
    answer: "C. Validate input, use HTTPS, secure headers, authentication, authorization, safe dependencies, rate limiting, and secrets management",
    explanation: "Node security requires multiple layers: validate input, authenticate and authorize users, use HTTPS, secure cookies/headers, limit requests, protect secrets, update dependencies, and log suspicious activity. No single package makes an application secure by itself. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Security is achieved mainly by disabling validation and trusting authenticated clients."}, {"id": "B", "text": "Passwords should be stored as plain text so they can be recovered easily."}, {"id": "C", "text": "Validate input, use HTTPS, secure headers, authentication, authorization, safe dependencies, rate limiting, and secrets management"}, {"id": "D", "text": "HTTPS is unnecessary when an application already uses JSON APIs."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Can you explain the difference between CommonJS and ES modules?",
    answer: "D. CommonJS uses require/module.exports; ES modules use import/export",
    explanation: "CommonJS uses `require()` and `module.exports`, while ES Modules use `import` and `export`. ES Modules are the standard JavaScript module system and support static analysis well. Node.js supports both, depending on project configuration and file/module type. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "CommonJS uses import/export while ES Modules use require/module.exports."}, {"id": "B", "text": "Both systems require exactly the same syntax in every Node.js configuration."}, {"id": "C", "text": "Neither module system supports exporting values from a file."}, {"id": "D", "text": "CommonJS uses require/module.exports; ES modules use import/export"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the difference between `app.route()` and `express.Router()` in Express.js?",
    answer: "A. app.route() groups handlers for one route; express.Router() creates modular route handlers",
    explanation: "`app.route()` groups HTTP handlers for one route path, such as GET and POST for `/users`. `express.Router()` creates a modular mini-router that can contain many related routes and middleware. Routers are especially useful for organizing larger Express applications. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "app.route() groups handlers for one route; express.Router() creates modular route handlers"}, {"id": "B", "text": "app.route() creates an entire application-wide router, while Router() can only define one handler."}, {"id": "C", "text": "express.Router() is only for CSS, while app.route() is only for MongoDB."}, {"id": "D", "text": "Both APIs are identical and cannot be used for different route organization needs."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you serve static files from an Express.js application?",
    answer: "B. Use express.static() middleware with the directory containing the files",
    explanation: "Use `express.static()` with a directory path to expose static files. For example, `app.use(express.static('public'))` can make files inside `public` available through the browser. In production, a CDN or reverse proxy may also be used for static assets. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is middleware that performs database joins before returning API responses."}, {"id": "B", "text": "Use express.static() middleware with the directory containing the files"}, {"id": "C", "text": "It creates JWT tokens for every file request."}, {"id": "D", "text": "It stores static files in React state instead of serving them from a directory."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you use a template engine with Express.js?",
    answer: "C. Configure an engine such as EJS/Handlebars, set the views directory, and render templates with res.render()",
    explanation: "Choose a template engine, configure it with `app.set('view engine', 'ejs')` or similar settings, store templates in the views directory, and render them with `res.render()`. Data can be passed from the route to the template. This is useful when the server needs to generate HTML dynamically. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A template engine is used only to create database indexes."}, {"id": "B", "text": "A template engine replaces the Node.js runtime completely."}, {"id": "C", "text": "Configure an engine such as EJS/Handlebars, set the views directory, and render templates with res.render()"}, {"id": "D", "text": "A template engine is a React state-management library."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Describe the difference between React class components and functional components with hooks in terms of performance and readability.",
    answer: "D. Functional components use hooks and are generally simpler; modern React performance depends more on rendering patterns than component type",
    explanation: "Functional components with hooks are generally easier to read and reuse than class components. Modern React performance is not simply about class versus function; it depends on rendering behavior, state placement, memoization, and component design. Hooks also make reusable stateful logic easier through custom hooks. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Custom hooks are CSS classes that cannot call other React hooks."}, {"id": "B", "text": "A custom hook must directly manipulate the DOM and cannot return values."}, {"id": "C", "text": "Custom hooks are MongoDB procedures rather than reusable React logic."}, {"id": "D", "text": "Functional components use hooks and are generally simpler; modern React performance depends more on rendering patterns than component type"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are some strategies for managing application state in large-scale React applications?",
    answer: "A. Use local state, Context, Redux or other state libraries, server-state tools, and clear state ownership",
    explanation: "Large applications usually combine several approaches: local useState/useReducer for local state, Context for some shared state, Redux or another store for complex client state, and tools such as React Query/TanStack Query for server state. The goal is to keep state close to where it is used and avoid unnecessary global state. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Use local state, Context, Redux or other state libraries, server-state tools, and clear state ownership"}, {"id": "B", "text": "Context and Redux are the same library with identical APIs and responsibilities."}, {"id": "C", "text": "Context is a database, while Redux is only a CSS framework."}, {"id": "D", "text": "Redux cannot manage shared application state."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is lazy loading in React?",
    answer: "B. Loading components or resources only when needed, often with React.lazy() and code splitting",
    explanation: "Lazy loading means delaying the loading of a component or resource until it is needed. React commonly uses `React.lazy()` with `Suspense` for component code splitting. This reduces the initial JavaScript bundle and can improve initial load performance. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means loading the entire application bundle before the first page is shown."}, {"id": "B", "text": "Loading components or resources only when needed, often with React.lazy() and code splitting"}, {"id": "C", "text": "It permanently deletes components that are not currently visible."}, {"id": "D", "text": "It disables JavaScript until the user closes the browser."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How would you integrate React with a backend server, such as Node.js or Django?",
    answer: "C. Call backend APIs from React using fetch/Axios and handle loading, data, and error states",
    explanation: "React communicates with a backend through HTTP APIs such as REST or GraphQL. `fetch()` or Axios can send requests, while the backend handles authentication, validation, database operations, and responses. React should not contain database credentials; it should communicate through the server. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means trusting client input and correcting it only after database insertion."}, {"id": "B", "text": "It means validating only the CSS and HTML structure of a page."}, {"id": "C", "text": "Call backend APIs from React using fetch/Axios and handle loading, data, and error states"}, {"id": "D", "text": "It means checking data only when an administrator manually reviews it."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are common patterns for managing side effects in React?",
    answer: "D. Use useEffect and custom hooks for effects such as fetching data, subscriptions, timers, and DOM work",
    explanation: "Side effects include API calls, subscriptions, timers, DOM interactions, and integrations with external systems. `useEffect` is commonly used for effects that synchronize with external systems, while custom hooks can package reusable effect logic. Cleanup functions should remove subscriptions and timers when needed. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It should contain every piece of application logic and replace normal rendering."}, {"id": "B", "text": "It is only a CSS optimization and has no relationship with external systems."}, {"id": "C", "text": "It runs only once in every situation regardless of its dependencies."}, {"id": "D", "text": "Use useEffect and custom hooks for effects such as fetching data, subscriptions, timers, and DOM work"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain the role of Redux middleware and provide examples of popular middleware.",
    answer: "A. Middleware can intercept/modify dispatched actions; common examples include Redux Thunk and Saga",
    explanation: "Redux middleware sits between dispatching an action and the reducer. It can log actions, handle asynchronous operations, or transform actions. Redux Thunk is a common middleware that lets action creators return functions so they can perform async work and dispatch actions later. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Middleware can intercept/modify dispatched actions; common examples include Redux Thunk and Saga"}, {"id": "B", "text": "Middleware runs only after reducers finish and cannot inspect dispatched actions."}, {"id": "C", "text": "Middleware replaces the Redux store and makes reducers unnecessary."}, {"id": "D", "text": "Middleware is responsible only for rendering HTML and CSS."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Describe the difference between Server-Side Rendering (SSR), Client-Side Rendering (CSR), and Static Site Generation (SSG) in the context of React.",
    answer: "B. SSR renders on the server, CSR renders in the browser, and SSG generates pages ahead of time",
    explanation: "SSR renders HTML on the server for each request or route generation, CSR sends JavaScript and renders mainly in the browser, and SSG generates HTML ahead of time. SSR/SSG can improve initial content visibility and SEO, while CSR can provide a highly interactive client experience. Frameworks such as Next.js support combinations of these approaches. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "CSR renders the complete page on the server, SSR renders only in the browser, and SSG creates pages after every request."}, {"id": "B", "text": "SSR renders on the server, CSR renders in the browser, and SSG generates pages ahead of time"}, {"id": "C", "text": "SSR, CSR, and SSG all mean exactly the same rendering strategy."}, {"id": "D", "text": "SSG means the browser receives no HTML at all."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are some techniques for optimizing the rendering performance of React applications?",
    answer: "C. Use memoization, code splitting, virtualization, stable props, efficient state, and profiling",
    explanation: "Useful techniques include code splitting, lazy loading, React.memo where appropriate, useMemo/useCallback when they solve a real re-render problem, virtualization for large lists, efficient state placement, and profiling. The key is to measure expensive renders instead of blindly adding memoization. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means loading the entire application bundle before the first page is shown."}, {"id": "B", "text": "It permanently deletes components that are not currently visible."}, {"id": "C", "text": "Use memoization, code splitting, virtualization, stable props, efficient state, and profiling"}, {"id": "D", "text": "It disables JavaScript until the user closes the browser."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you handle internationalization (i18n) in React applications?",
    answer: "D. Use i18n libraries, translation files, locale detection, formatting, and language switching",
    explanation: "Internationalization usually involves translation resources, locale detection, pluralization, date/number formatting, and a language-switching mechanism. Libraries such as i18next can help manage this. User-visible text should come from translation resources rather than being hard-coded everywhere. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means hard-coding one language and asking CSS to translate the text."}, {"id": "B", "text": "It stores every translation as an image so the application cannot modify it."}, {"id": "C", "text": "It only changes colors and fonts and has no relation to locale or language."}, {"id": "D", "text": "Use i18n libraries, translation files, locale detection, formatting, and language switching"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are the advantages and disadvantages of using TypeScript with React?",
    answer: "A. TypeScript adds static typing and better tooling; it can add setup and type-maintenance overhead",
    explanation: "TypeScript gives React applications static types, better editor support, safer refactoring, and clearer component/API contracts. The trade-offs are extra type definitions, a learning curve, and build/type-checking complexity. It catches many mistakes at development time, but it does not eliminate runtime errors. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "TypeScript adds static typing and better tooling; it can add setup and type-maintenance overhead"}, {"id": "B", "text": "TypeScript removes JavaScript from the application and guarantees that no runtime error can occur."}, {"id": "C", "text": "TypeScript is used only for CSS and cannot type React props or state."}, {"id": "D", "text": "TypeScript makes runtime validation of untrusted API data unnecessary."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Describe the difference between React Context and Redux for managing global state.",
    answer: "B. Context is simple built-in shared state; Redux offers structured centralized state and tooling for larger/complex apps",
    explanation: "Context is built into React and is good for relatively simple shared values such as theme, locale, or authentication information. Redux provides a more structured global state model with actions, reducers, middleware, and developer tools. The choice depends on application complexity rather than one being universally better. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Context and Redux are the same library with identical APIs and responsibilities."}, {"id": "B", "text": "Context is simple built-in shared state; Redux offers structured centralized state and tooling for larger/complex apps"}, {"id": "C", "text": "Context is a database, while Redux is only a CSS framework."}, {"id": "D", "text": "Redux cannot manage shared application state."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the difference between pure and regular components?",
    answer: "C. A pure component avoids rendering when relevant inputs are unchanged; a regular component may render whenever its parent renders",
    explanation: "A pure component tries to avoid unnecessary renders when its relevant props/state have not changed. A regular component can render whenever its parent renders. Pure rendering is useful for optimization, but it depends on stable and correctly compared inputs. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A pure component always re-renders even when all relevant inputs are unchanged."}, {"id": "B", "text": "A pure component cannot receive props or render children."}, {"id": "C", "text": "A pure component avoids rendering when relevant inputs are unchanged; a regular component may render whenever its parent renders"}, {"id": "D", "text": "Pure components are database objects rather than React components."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are some best practices for structuring and organizing React code in a large-scale application?",
    answer: "D. Use feature-based folders, reusable components, hooks, clear naming, separation of concerns, and consistent conventions",
    explanation: "Large React projects benefit from feature-based organization, reusable components, custom hooks, clear API/service layers, consistent naming, and separation between UI and business logic. Avoid creating huge components that handle fetching, state, validation, and presentation all at once. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means trusting client input and correcting it only after database insertion."}, {"id": "B", "text": "It means validating only the CSS and HTML structure of a page."}, {"id": "C", "text": "It means checking data only when an administrator manually reviews it."}, {"id": "D", "text": "Use feature-based folders, reusable components, hooks, clear naming, separation of concerns, and consistent conventions"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Describe the Flux architecture pattern and its relationship with Redux.",
    answer: "A. Flux uses unidirectional data flow; Redux follows similar ideas with a centralized store, actions, and reducers",
    explanation: "Flux introduced a unidirectional data-flow idea: actions lead to updates in a store, and the view reads from the store. Redux follows similar principles with actions, a centralized store, and reducers. Redux simplifies the original Flux ideas and provides predictable state transitions. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Flux uses unidirectional data flow; Redux follows similar ideas with a centralized store, actions, and reducers"}, {"id": "B", "text": "Flux uses bidirectional data flow, while Redux avoids actions and reducers completely."}, {"id": "C", "text": "Flux and Redux are database engines used for storing application data."}, {"id": "D", "text": "Redux is a CSS architecture with no relationship to state management."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the purpose of the `shouldComponentUpdate` method? When should you use it?",
    answer: "B. It lets a class component decide whether it should re-render; use it for performance optimization when appropriate",
    explanation: "`shouldComponentUpdate` lets a class component decide whether React should continue with a re-render. It can improve performance when rendering is expensive, but incorrect logic can prevent required UI updates. In modern function components, React.memo and hooks are more common. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It always forces a component to re-render even when shouldComponentUpdate returns false."}, {"id": "B", "text": "It lets a class component decide whether it should re-render; use it for performance optimization when appropriate"}, {"id": "C", "text": "It is a hook used only in function components."}, {"id": "D", "text": "It is used to create HTTP routes instead of controlling rendering."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are custom hooks in React?",
    answer: "C. Reusable functions that use hooks to share stateful logic between components",
    explanation: "Custom hooks are JavaScript functions beginning with `use` that can call other React hooks. They let you reuse stateful behavior without duplicating it across components. For example, a `useFetch` hook can package loading, data, error, and request logic. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Custom hooks are CSS classes that cannot call other React hooks."}, {"id": "B", "text": "A custom hook must directly manipulate the DOM and cannot return values."}, {"id": "C", "text": "Reusable functions that use hooks to share stateful logic between components"}, {"id": "D", "text": "Custom hooks are MongoDB procedures rather than reusable React logic."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is Axios and how do you use it in React?",
    answer: "D. Axios is an HTTP client; use it to send requests such as axios.get() or axios.post() and handle the response",
    explanation: "Axios is a promise-based HTTP client. In React, you can call `axios.get()` or `axios.post()`, then update component state with the response and handle loading/error states. Interceptors can also be used for concerns such as attaching tokens or handling common errors. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Axios is a React router that changes pages without making HTTP requests."}, {"id": "B", "text": "Axios is a database that stores API responses permanently."}, {"id": "C", "text": "Axios is a CSS framework for styling HTTP request forms."}, {"id": "D", "text": "Axios is an HTTP client; use it to send requests such as axios.get() or axios.post() and handle the response"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain why and how to update the state of components using a callback.",
    answer: "A. Use the functional state updater when the new state depends on previous state, e.g. setCount(c => c + 1)",
    explanation: "When new state depends on the previous state, use the functional updater form, such as `setCount(prev => prev + 1)`. This is safer when React batches multiple updates. It ensures the calculation uses the latest state value provided by React. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Use the functional state updater when the new state depends on previous state, e.g. setCount(c => c + 1)"}, {"id": "B", "text": "The safest approach is to mutate the current state object directly before calling the setter."}, {"id": "C", "text": "A state update that depends on previous state should always use a hard-coded old value."}, {"id": "D", "text": "React state can be updated by changing CSS instead of using the state setter."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is React Material UI?",
    answer: "B. A React UI component library based on Material Design with ready-made components",
    explanation: "Material UI is a popular React component library based on Google's Material Design principles. It provides ready-made components such as buttons, dialogs, tables, forms, and layouts. It speeds up UI development while still allowing customization through themes and styling. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Material UI is a MongoDB driver for storing Material Design components."}, {"id": "B", "text": "A React UI component library based on Material Design with ready-made components"}, {"id": "C", "text": "Material UI is a Node.js runtime rather than a React UI library."}, {"id": "D", "text": "Material UI is a testing framework that does not provide visual components."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is `useMemo()` in React?",
    answer: "C. It memoizes a calculated value and recomputes it when dependencies change",
    explanation: "`useMemo()` memoizes the result of a calculation and recalculates it when its dependency values change. It can help when a computation is genuinely expensive or when a stable value prevents unnecessary child renders. It should not be added everywhere because memoization itself has a cost. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "useMemo forces a component to render only once for the lifetime of the application."}, {"id": "B", "text": "useMemo is used only for HTTP requests and cannot return calculated values."}, {"id": "C", "text": "It memoizes a calculated value and recomputes it when dependencies change"}, {"id": "D", "text": "useMemo replaces useState and is the standard way to update component state."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Does React `useState` hook update immediately?",
    answer: "D. No. State updates are scheduled; React may batch them and apply them during rendering",
    explanation: "No. React state updates are scheduled and may be batched, so reading the state immediately after calling its setter may still show the previous value in that render. The next render receives the updated state. Functional setters are useful when multiple updates depend on previous state. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Calling a state setter changes the current render's state value synchronously in every case."}, {"id": "B", "text": "State setters update the DOM directly without another React render."}, {"id": "C", "text": "React never batches state updates."}, {"id": "D", "text": "No. State updates are scheduled; React may batch them and apply them during rendering"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "When to use `useCallback`, `useMemo`, and `useEffect`?",
    answer: "A. useCallback memoizes functions, useMemo memoizes values, and useEffect handles side effects",
    explanation: "`useCallback` memoizes a function reference, `useMemo` memoizes a calculated value, and `useEffect` performs synchronization/side effects after rendering. They solve different problems. Use them based on an actual dependency or performance need rather than using all three by default. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "useCallback memoizes functions, useMemo memoizes values, and useEffect handles side effects"}, {"id": "B", "text": "It should contain every piece of application logic and replace normal rendering."}, {"id": "C", "text": "It is only a CSS optimization and has no relationship with external systems."}, {"id": "D", "text": "It runs only once in every situation regardless of its dependencies."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain the types of routers in React.",
    answer: "B. Common options include BrowserRouter, HashRouter, MemoryRouter, and routers from React Router",
    explanation: "React Router commonly provides BrowserRouter for normal browser URLs, HashRouter for hash-based URLs, and MemoryRouter for environments without a normal browser history. Modern React Router also provides data routers such as createBrowserRouter. The choice depends on deployment and routing requirements. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "React has only one router and it must always use hash-based URLs."}, {"id": "B", "text": "Common options include BrowserRouter, HashRouter, MemoryRouter, and routers from React Router"}, {"id": "C", "text": "React routers are database tables used to store navigation history."}, {"id": "D", "text": "Routing in React cannot handle browser URLs or nested routes."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is Strict Mode in React?",
    answer: "C. A development feature that helps detect potential problems and intentionally re-runs some logic in development",
    explanation: "Strict Mode is a development-time feature that helps reveal unsafe patterns and side-effect problems. In development, React may intentionally invoke some logic more than once to expose code that is not resilient to repeated execution. It does not mean the production app necessarily behaves the same way. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Strict Mode is a production database that stores application configuration."}, {"id": "B", "text": "Strict Mode disables all development warnings and prevents effects from running."}, {"id": "C", "text": "A development feature that helps detect potential problems and intentionally re-runs some logic in development"}, {"id": "D", "text": "Strict Mode is a CSS framework for enforcing strict styling rules."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is conditional rendering in React?",
    answer: "D. Rendering UI based on a condition using if/ternary/&& or similar logic",
    explanation: "Conditional rendering means showing different UI depending on a condition. Common approaches include `if`, ternary expressions, and `&&`. For example, a loading spinner can be rendered while data is loading and the actual content afterward. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Conditional rendering means every component must render regardless of application state."}, {"id": "B", "text": "It can be done only with CSS and not with JavaScript conditions."}, {"id": "C", "text": "It means automatically calling every API whenever a condition changes."}, {"id": "D", "text": "Rendering UI based on a condition using if/ternary/&& or similar logic"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How can you avoid binding in React?",
    answer: "A. Use arrow functions, class fields, or bind methods when needed; function components with hooks avoid class method binding",
    explanation: "In class components, binding can be avoided with arrow-function class fields or by using methods carefully. Function components do not need class-style `this` binding because event handlers are ordinary functions. Arrow functions are commonly used directly in JSX when appropriate. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Use arrow functions, class fields, or bind methods when needed; function components with hooks avoid class method binding"}, {"id": "B", "text": "Class components always require bind() for every function, while function components require bind() too."}, {"id": "C", "text": "Binding is a CSS operation and has no relationship with JavaScript this."}, {"id": "D", "text": "Using arrow functions can never affect how this is handled in a class component."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How would you programmatically redirect after login?",
    answer: "B. Use navigation tools such as useNavigate() or navigate after successful login",
    explanation: "After successful login, React Router can navigate programmatically using `useNavigate()` in modern React Router. The app typically stores authentication state/token securely and then redirects the user to the protected area. The redirect should happen only after authentication succeeds. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "React has only one router and it must always use hash-based URLs."}, {"id": "B", "text": "Use navigation tools such as useNavigate() or navigate after successful login"}, {"id": "C", "text": "React routers are database tables used to store navigation history."}, {"id": "D", "text": "Routing in React cannot handle browser URLs or nested routes."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Do hooks cover all the functionality provided by the classes?",
    answer: "C. Hooks cover most class features, but not every class API maps one-to-one; error boundaries remain a notable class-based feature",
    explanation: "Hooks cover most common class component functionality such as state, effects, refs, and lifecycle-like behavior. They do not map one-to-one to every class API, and error boundaries are a notable case where class-based APIs remain important in React. Hooks are mainly a different composition model. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Hooks provide a one-to-one replacement for every class API, including error boundaries."}, {"id": "B", "text": "Hooks cannot manage state or effects and are only for styling."}, {"id": "C", "text": "Hooks cover most class features, but not every class API maps one-to-one; error boundaries remain a notable class-based feature"}, {"id": "D", "text": "Class components are required whenever a component receives props."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How does the performance of using hooks differ in comparison with classes?",
    answer: "D. Hooks generally have comparable performance; performance depends on rendering, state, and optimization rather than hooks alone",
    explanation: "Hooks are not inherently slower than classes. Performance depends on how components render, how state is organized, and whether unnecessary work is performed. Good component design and profiling matter more than choosing hooks versus classes. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Hooks are automatically slower than classes regardless of component design."}, {"id": "B", "text": "Classes are guaranteed to be many times faster than hooks."}, {"id": "C", "text": "Performance depends only on whether a component uses hooks, not on rendering behavior."}, {"id": "D", "text": "Hooks generally have comparable performance; performance depends on rendering, state, and optimization rather than hooks alone"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Does React Hooks work with static typing?",
    answer: "A. Yes. Hooks work with TypeScript and other static typing systems",
    explanation: "Yes. Hooks work well with TypeScript and other static typing systems. You can type state, props, refs, reducer actions, and custom hook inputs/outputs. TypeScript can catch many incorrect values before the application runs. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Yes. Hooks work with TypeScript and other static typing systems"}, {"id": "B", "text": "TypeScript removes JavaScript from the application and guarantees that no runtime error can occur."}, {"id": "C", "text": "TypeScript is used only for CSS and cannot type React props or state."}, {"id": "D", "text": "TypeScript makes runtime validation of untrusted API data unnecessary."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the difference between `createElement` and `cloneElement`?",
    answer: "B. createElement creates a React element; cloneElement creates a new element based on an existing one with changed props/children",
    explanation: "`createElement` creates a new React element from a type, props, and children. `cloneElement` takes an existing React element and creates another element with merged/overridden props or children. `cloneElement` is useful in some composition patterns but should not be overused. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "createElement modifies an existing element, while cloneElement always creates a database record."}, {"id": "B", "text": "createElement creates a React element; cloneElement creates a new element based on an existing one with changed props/children"}, {"id": "C", "text": "Both functions are React hooks that manage component state."}, {"id": "D", "text": "cloneElement deletes an existing React element from the DOM."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are PropTypes in React?",
    answer: "C. PropTypes provide runtime checks/documentation for expected component props",
    explanation: "PropTypes provide runtime validation/documentation for component props. They can warn during development when a prop has the wrong type or is missing when required. TypeScript provides compile-time type checking, so many modern projects prefer TypeScript instead. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It means trusting client input and correcting it only after database insertion."}, {"id": "B", "text": "It means validating only the CSS and HTML structure of a page."}, {"id": "C", "text": "PropTypes provide runtime checks/documentation for expected component props"}, {"id": "D", "text": "It means checking data only when an administrator manually reviews it."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are stateless and stateful components?",
    answer: "D. Stateless components mainly receive data; stateful components manage state",
    explanation: "A stateless component traditionally does not manage its own state and mainly receives props. A stateful component manages state internally. With hooks, function components can be stateful, so the old class-vs-function distinction is less important today. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A stateless component must never receive props, while a stateful component cannot render UI."}, {"id": "B", "text": "Both terms describe database storage models rather than component state."}, {"id": "C", "text": "Stateful components are not allowed to use function components."}, {"id": "D", "text": "Stateless components mainly receive data; stateful components manage state"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are the benefits of using hooks in React?",
    answer: "A. Hooks let function components use state, effects, refs, and reusable logic with simpler composition",
    explanation: "Hooks let function components use state, effects, refs, context, and other React features. They also make reusable stateful logic easier through custom hooks. This usually leads to simpler composition than many older class-based patterns. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Hooks let function components use state, effects, refs, and reusable logic with simpler composition"}, {"id": "B", "text": "Custom hooks are CSS classes that cannot call other React hooks."}, {"id": "C", "text": "A custom hook must directly manipulate the DOM and cannot return values."}, {"id": "D", "text": "Custom hooks are MongoDB procedures rather than reusable React logic."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the difference between `useEffect()` and `useLayoutEffect()` in React?",
    answer: "B. useEffect runs after paint in normal use; useLayoutEffect runs synchronously after DOM updates before paint",
    explanation: "`useEffect` normally runs after React has updated the DOM and the browser can paint. `useLayoutEffect` runs synchronously after DOM mutations but before the browser paints, which makes it useful for layout measurements or preventing visible layout flicker. It should be used carefully because it can block painting. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It should contain every piece of application logic and replace normal rendering."}, {"id": "B", "text": "useEffect runs after paint in normal use; useLayoutEffect runs synchronously after DOM updates before paint"}, {"id": "C", "text": "It is only a CSS optimization and has no relationship with external systems."}, {"id": "D", "text": "It runs only once in every situation regardless of its dependencies."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What does the dependency array of `useEffect` do?",
    answer: "C. It controls when the effect re-runs by specifying values the effect depends on",
    explanation: "The dependency array tells React when an effect should run again. An empty array generally means the effect runs after the initial mount (with development Strict Mode nuances), while dependencies cause the effect to re-run when those values change. Missing dependencies can create stale values or bugs. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It should contain every piece of application logic and replace normal rendering."}, {"id": "B", "text": "It is only a CSS optimization and has no relationship with external systems."}, {"id": "C", "text": "It controls when the effect re-runs by specifying values the effect depends on"}, {"id": "D", "text": "It runs only once in every situation regardless of its dependencies."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Why does React recommend against mutating state?",
    answer: "D. Direct mutation can make updates hard to detect and breaks predictable state management; create a new value instead",
    explanation: "React relies on detecting changes between values to decide what needs updating. Mutating an existing object/array can keep the same reference and make changes harder to detect, while creating a new value makes the update explicit. Immutable updates also make state reasoning and debugging easier. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a package manager used to install Node dependencies."}, {"id": "B", "text": "It is a database used to store application logs."}, {"id": "C", "text": "It is a CSS tool that changes production styles automatically."}, {"id": "D", "text": "Direct mutation can make updates hard to detect and breaks predictable state management; create a new value instead"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is reconciliation in React?",
    answer: "A. React compares the new element tree with the previous one and updates the necessary UI",
    explanation: "Reconciliation is React's process of comparing the newly returned element tree with the previous tree and determining what needs to change. React then updates the real DOM efficiently rather than rebuilding everything. Keys are important when reconciling lists. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "React compares the new element tree with the previous one and updates the necessary UI"}, {"id": "B", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "C", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is the purpose of the `useContext` hook in React?",
    answer: "B. It reads shared context values without passing props through every level",
    explanation: "useContext reads a value from a React Context without manually passing it through every intermediate component. It is useful for values shared across a subtree, such as theme, locale, or authentication information. Changing the context value can cause consuming components to re-render. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It reads shared context values without passing props through every level"}, {"id": "C", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What happens if you attempt to update state directly in React?",
    answer: "C. Direct mutation does not reliably trigger a render; use the state setter instead",
    explanation: "Directly changing a state variable does not tell React to schedule a render. For example, `count = count + 1` does not replace `setCount(count + 1)`. State should be updated through its setter or reducer so React can schedule the correct update. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "C", "text": "Direct mutation does not reliably trigger a render; use the state setter instead"}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Do Hooks replace Higher-Order Components (HOCs) in React?",
    answer: "D. Hooks can replace many HOC use cases, but HOCs are still useful for some patterns and libraries",
    explanation: "Hooks replace many common HOC use cases by allowing reusable logic to be composed directly. However, HOCs are still a valid pattern and can be useful when working with existing libraries or certain cross-cutting component transformations. They are not completely obsolete. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "C", "text": "It requires all work to run synchronously and blocks other operations until completion."}, {"id": "D", "text": "Hooks can replace many HOC use cases, but HOCs are still useful for some patterns and libraries"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Which method would you use to handle events in React?",
    answer: "A. Pass event handler functions such as onClick, onChange, etc. to React elements",
    explanation: "React handles events using props such as `onClick`, `onChange`, `onSubmit`, and `onMouseEnter`. You pass a function as the handler, for example `onClick={handleClick}`. React provides a consistent event interface around browser events. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Pass event handler functions such as onClick, onChange, etc. to React elements"}, {"id": "B", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "C", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "In which situation would you use refs in React?",
    answer: "B. When you need DOM access, focus, measurements, imperative APIs, or integrating non-React libraries",
    explanation: "Refs are useful when you need direct access to a DOM node or an imperative value, such as focusing an input, measuring an element, controlling a video, or integrating a non-React library. Refs are not a replacement for normal state because changing a ref does not trigger a render. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "When you need DOM access, focus, measurements, imperative APIs, or integrating non-React libraries"}, {"id": "C", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Which method would you use to add attributes to components conditionally?",
    answer: "C. Use conditional JSX/props, such as `{condition ? value : otherValue}` or spread/attribute logic",
    explanation: "Attributes can be added conditionally using JavaScript expressions in JSX, conditional objects, ternaries, or spread syntax. For example, a className or disabled prop can depend on a boolean. The goal is to keep the resulting props predictable and readable. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "C", "text": "Use conditional JSX/props, such as `{condition ? value : otherValue}` or spread/attribute logic"}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What method would you use to check and improve slow app rendering in React?",
    answer: "D. Use React DevTools Profiler and browser performance tools to find expensive renders",
    explanation: "React DevTools Profiler helps identify which components render, how often they render, and how long rendering takes. Browser performance tools can show scripting, layout, painting, and network costs. Profiling tells you where optimization is actually needed. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "C", "text": "It requires all work to run synchronously and blocks other operations until completion."}, {"id": "D", "text": "Use React DevTools Profiler and browser performance tools to find expensive renders"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "In which situation would you use `useMemo()` in React?",
    answer: "A. When a calculation is expensive and its result can be reused based on dependencies",
    explanation: "useMemo is useful when a calculation is expensive and its inputs do not change often, or when a stable calculated value helps prevent unnecessary child renders. It is not a general requirement for every calculation. Simple calculations often do not need memoization. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "When a calculation is expensive and its result can be reused based on dependencies"}, {"id": "B", "text": "useMemo forces a component to render only once for the lifetime of the application."}, {"id": "C", "text": "useMemo is used only for HTTP requests and cannot return calculated values."}, {"id": "D", "text": "useMemo replaces useState and is the standard way to update component state."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How would you avoid binding in React?",
    answer: "B. Use arrow functions or class fields; in function components, hooks remove the need for class method binding",
    explanation: "In function components there is no class `this`, so there is no need for `this.handleClick = this.handleClick.bind(this)`. You can define handlers as normal or arrow functions. In class components, arrow-function fields are one common way to keep the correct `this` context. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Class components always require bind() for every function, while function components require bind() too."}, {"id": "B", "text": "Use arrow functions or class fields; in function components, hooks remove the need for class method binding"}, {"id": "C", "text": "Binding is a CSS operation and has no relationship with JavaScript this."}, {"id": "D", "text": "Using arrow functions can never affect how this is handled in a class component."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain what MVC architecture is.",
    answer: "C. MVC separates Model, View, and Controller responsibilities",
    explanation: "MVC stands for Model, View, and Controller. The Model handles data/business representation, the View handles presentation, and the Controller coordinates requests and application logic. The exact implementation differs between frameworks. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "C", "text": "MVC separates Model, View, and Controller responsibilities"}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Does React or Next.js follow the MVC architecture? Briefly explain.",
    answer: "D. React itself is not MVC; Next.js provides a broader framework structure and does not strictly follow classic MVC",
    explanation: "React itself is a UI library and does not strictly implement classic MVC. Next.js is a full React framework with routing, server features, data fetching, and rendering strategies, but it also does not require a strict traditional MVC structure. Teams can organize application code using MVC-like separation if useful. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "C", "text": "It requires all work to run synchronously and blocks other operations until completion."}, {"id": "D", "text": "React itself is not MVC; Next.js provides a broader framework structure and does not strictly follow classic MVC"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Explain what the Shadow DOM is.",
    answer: "A. A browser feature that provides an encapsulated DOM/CSS tree for a component",
    explanation: "Shadow DOM is a browser platform feature that creates an encapsulated DOM subtree with its own styling boundaries. It is commonly used by Web Components. It is different from React's virtual DOM, which is a rendering concept rather than a browser DOM isolation mechanism. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A browser feature that provides an encapsulated DOM/CSS tree for a component"}, {"id": "B", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "C", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are synthetic events in React?",
    answer: "B. React's normalized event system that provides a consistent event interface across browsers",
    explanation: "Synthetic events are React's normalized event objects that provide a consistent API across browsers. They allow React event handlers such as `onClick` and `onChange` to work in a consistent way. Modern React has changed some internal event handling details, but the programming model remains similar. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "React's normalized event system that provides a consistent event interface across browsers"}, {"id": "C", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are custom Hooks in React?",
    answer: "C. Reusable functions that use React hooks to share stateful logic",
    explanation: "Custom hooks are reusable functions that encapsulate React hook logic. For example, `useOnlineStatus()` could subscribe to browser online/offline events and expose a boolean to multiple components. They share behavior, not the same state instance. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Custom hooks are CSS classes that cannot call other React hooks."}, {"id": "B", "text": "A custom hook must directly manipulate the DOM and cannot return values."}, {"id": "C", "text": "Reusable functions that use React hooks to share stateful logic"}, {"id": "D", "text": "Custom hooks are MongoDB procedures rather than reusable React logic."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "State the different side effects of a React component.",
    answer: "D. Examples include data fetching, subscriptions, timers, DOM manipulation, and external API interactions",
    explanation: "Side effects include fetching data, subscriptions, timers, manually changing DOM state, browser APIs, analytics, and external integrations. Effects should synchronize React with systems outside React. They should not be used simply because a component needs to calculate a value. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "C", "text": "It requires all work to run synchronously and blocks other operations until completion."}, {"id": "D", "text": "Examples include data fetching, subscriptions, timers, DOM manipulation, and external API interactions"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What do you understand by three dots (`...`) in React?",
    answer: "A. It is the spread/rest syntax used to expand or collect values in arrays, objects, and function parameters",
    explanation: "The `...` syntax is used as spread or rest. Spread expands values, such as copying object properties or array items; rest collects remaining values into an object, array, or function parameter. In React it is often used for props, such as `<Component {...props} />`. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is the spread/rest syntax used to expand or collect values in arrays, objects, and function parameters"}, {"id": "B", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "C", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you reset a component's state in React?",
    answer: "B. Reset state by changing the component's key, or explicitly set state back to its initial value",
    explanation: "A component can reset state by explicitly setting it back to initial values. Another common React technique is changing the component's `key`, which causes React to treat it as a new component and recreate its state. The key approach is useful when an entire component subtree should reset. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "Reset state by changing the component's key, or explicitly set state back to its initial value"}, {"id": "C", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How does React handle Concurrent Mode and what benefits does it offer?",
    answer: "C. Concurrent rendering lets React work on updates in an interruptible/prioritized way to keep UI responsive",
    explanation: "Concurrent rendering allows React to work on updates in a more interruptible and prioritized way. Less urgent rendering work can be paused so urgent interactions remain responsive. Modern React uses concurrent capabilities through features such as transitions and Suspense rather than treating every update equally. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "C", "text": "Concurrent rendering lets React work on updates in an interruptible/prioritized way to keep UI responsive"}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is `useImperativeHandle` and when would you use it?",
    answer: "D. It customizes what a forwarded ref exposes, useful for controlled imperative methods",
    explanation: "useImperativeHandle customizes what a parent receives through a forwarded ref. It is useful when a child should expose a small imperative API, such as `focus()` or `open()`, instead of exposing its entire DOM implementation. It should be used sparingly because declarative props are preferred when possible. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "C", "text": "It requires all work to run synchronously and blocks other operations until completion."}, {"id": "D", "text": "It customizes what a forwarded ref exposes, useful for controlled imperative methods"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are Render Props and how do you use them?",
    answer: "A. A pattern where a component receives a function as a prop to decide what UI to render",
    explanation: "Render Props is a pattern where a component receives a function prop and calls it to decide what UI to render. The function can receive data from the component and return JSX. Hooks are now often a simpler way to share logic, but Render Props remains an important interview concept. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A pattern where a component receives a function as a prop to decide what UI to render"}, {"id": "B", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "C", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is middleware in React (specifically with Redux), and why is Redux Thunk used?",
    answer: "B. Redux middleware intercepts actions; Redux Thunk lets action creators perform async logic and dispatch later",
    explanation: "Redux middleware can intercept actions before reducers receive them. Redux Thunk allows action creators to return functions, which can perform asynchronous work such as API requests and then dispatch success/failure actions. This keeps async Redux logic outside reducers. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Middleware runs only after reducers finish and cannot inspect dispatched actions."}, {"id": "B", "text": "Redux middleware intercepts actions; Redux Thunk lets action creators perform async logic and dispatch later"}, {"id": "C", "text": "Middleware replaces the Redux store and makes reducers unnecessary."}, {"id": "D", "text": "Middleware is responsible only for rendering HTML and CSS."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How would you test React Components using React Testing Library (RTL)?",
    answer: "C. Render components, interact with them, and make assertions using RTL queries such as getByRole",
    explanation: "React Testing Library tests components from the user's perspective. Render the component, find elements using queries such as getByRole, perform interactions with user-event, and assert the visible result. This encourages tests that focus on behavior instead of internal implementation details. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "C", "text": "Render components, interact with them, and make assertions using RTL queries such as getByRole"}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How do you update state in React?",
    answer: "D. Use the setter from useState or a reducer dispatch to update state",
    explanation: "Use a state setter from useState, such as `setCount(newValue)`, or dispatch an action when using useReducer. If the new value depends on previous state, use the functional form such as `setCount(prev => prev + 1)`. Avoid directly mutating the state variable. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "C", "text": "It requires all work to run synchronously and blocks other operations until completion."}, {"id": "D", "text": "Use the setter from useState or a reducer dispatch to update state"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are Webpack and Browserify?",
    answer: "A. Webpack and Browserify bundle JavaScript/modules and dependencies for browser use",
    explanation: "Webpack and Browserify are module bundlers that package JavaScript modules and dependencies for browser applications. Webpack has a broad plugin/loader ecosystem, while Browserify historically focused on bringing CommonJS-style modules to browsers. Modern tools such as Vite and other bundlers are also common. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Webpack and Browserify bundle JavaScript/modules and dependencies for browser use"}, {"id": "B", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "C", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How does Node.js handle concurrency if it is single-threaded?",
    answer: "B. It uses the event loop and non-blocking I/O, while libuv/OS handle many operations concurrently",
    explanation: "Node handles concurrency through the event loop and non-blocking I/O rather than creating a JavaScript thread for every request. libuv and the operating system handle many I/O operations, and a worker pool is used for certain tasks. This allows a single process to handle many simultaneous connections efficiently. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Blocking is prevented by converting every operation into synchronous code."}, {"id": "B", "text": "It uses the event loop and non-blocking I/O, while libuv/OS handle many operations concurrently"}, {"id": "C", "text": "Node.js prevents blocking by stopping other requests until the current one finishes."}, {"id": "D", "text": "Blocking is solved only by increasing the browser's CSS bundle size."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is a Node Inspector?",
    answer: "C. A debugging tool for inspecting and debugging Node.js applications",
    explanation: "Node Inspector provides debugging support for Node.js. With DevTools you can set breakpoints, inspect variables, view call stacks, step through code, and profile execution. It is useful when logs alone are not enough to find a bug. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a package manager used to install Node dependencies."}, {"id": "B", "text": "It is a database used to store application logs."}, {"id": "C", "text": "A debugging tool for inspecting and debugging Node.js applications"}, {"id": "D", "text": "It is a CSS tool that changes production styles automatically."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Can we import a Buffer class without the Buffer module?",
    answer: "D. Yes. Buffer is globally available in Node.js, though importing it explicitly can be clearer in some module setups",
    explanation: "Yes. In Node.js, Buffer is available globally, so code can use `Buffer` without an explicit import in typical setups. Explicit imports can still make dependencies clearer depending on the module style and project conventions. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a React state container used to store component props."}, {"id": "B", "text": "It is a CSS object used to temporarily hold layout measurements."}, {"id": "C", "text": "It is a MongoDB collection optimized for binary documents."}, {"id": "D", "text": "Yes. Buffer is globally available in Node.js, though importing it explicitly can be clearer in some module setups"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Which function is used to fire an event?",
    answer: "A. Use emitter.emit('eventName') to fire an event",
    explanation: "For an EventEmitter, the standard way to fire an event is `emitter.emit('eventName', data)`. Listeners registered with `emitter.on()` or related methods receive the event. This is a common Node.js event-driven pattern. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Use emitter.emit('eventName') to fire an event"}, {"id": "B", "text": "It is a file-system API used to read and write files."}, {"id": "C", "text": "It is a database table that stores event records permanently."}, {"id": "D", "text": "It is a React component used only to render DOM events."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "Can middleware functions execute code?",
    answer: "B. Yes. Middleware can execute code, modify req/res, end the response, or call next()",
    explanation: "Yes. Middleware can execute arbitrary JavaScript, read or modify request/response objects, perform authentication or logging, end the response, or call `next()` to continue. Middleware is one of the main building blocks of Express applications. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "Yes. Middleware can execute code, modify req/res, end the response, or call next()"}, {"id": "C", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "How will you delete a directory?",
    answer: "C. Use fs.rmdir/rm APIs or their promise versions; rm is preferred for modern Node.js",
    explanation: "Modern Node.js provides `fs.rm()` and `fs.rmSync()` for removing files/directories, including recursive removal when configured. Promise-based APIs are useful with async/await. The exact options depend on whether the directory contains content. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "C", "text": "Use fs.rmdir/rm APIs or their promise versions; rm is preferred for modern Node.js"}, {"id": "D", "text": "It requires all work to run synchronously and blocks other operations until completion."}],
      correctOption: 'C'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What is an error-first callback?",
    answer: "D. A callback whose first argument is an error; conventionally null on success and an Error on failure",
    explanation: "An error-first callback follows the convention `(err, result)`. If the operation fails, `err` contains an Error; if it succeeds, `err` is usually null and the result is provided. This convention was widely used throughout older Node.js callback APIs. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is mainly a database/storage mechanism rather than an application/runtime feature."}, {"id": "B", "text": "It works only in the browser and is not part of the Node.js/React application model."}, {"id": "C", "text": "It requires all work to run synchronously and blocks other operations until completion."}, {"id": "D", "text": "A callback whose first argument is an error; conventionally null on success and an Error on failure"}],
      correctOption: 'D'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "What are global objects in Node.js?",
    answer: "A. Built-in globals such as process, console, Buffer, setTimeout, and global",
    explanation: "Node global objects include values such as process, console, Buffer, timers, and global. Some are available directly in the runtime without importing them. They provide common runtime and system functionality. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Built-in globals such as process, console, Buffer, setTimeout, and global"}, {"id": "B", "text": "They are objects that must always be imported from MongoDB before use."}, {"id": "C", "text": "They are browser DOM objects that are automatically available in every Node process."}, {"id": "D", "text": "They are user-created variables that become global only after a React render."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-2',
    topicSlug: 'nodejs-advanced-1-20',
    question: "When does the child process occur?",
    answer: "B. It occurs when the main process creates/starts another process using child_process methods",
    explanation: "A child process occurs when the Node.js application starts another OS process using APIs such as spawn(), exec(), execFile(), or fork(). The child runs separately from the parent process and can communicate through streams or IPC depending on how it was created. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It is a lightweight React child component running inside the same render tree."}, {"id": "B", "text": "It occurs when the main process creates/starts another process using child_process methods"}, {"id": "C", "text": "It is a MongoDB document created automatically for each HTTP request."}, {"id": "D", "text": "It is a browser tab that shares the exact same operating-system process."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Shallow Copy?",
    answer: "A. It creates a new outer object but nested objects can still be shared by reference.",
    explanation: "A shallow copy creates a new top-level object, but nested objects or arrays can still point to the same references. Examples include object spread and Object.assign for ordinary objects. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It creates a new outer object but nested objects can still be shared by reference."}, {"id": "B", "text": "It recursively creates completely independent copies of every nested value."}, {"id": "C", "text": "It converts an object into a JSON string."}, {"id": "D", "text": "It permanently freezes the original object."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Deep Copy?",
    answer: "B. It creates independent copies of nested objects and arrays as well.",
    explanation: "A deep copy recursively copies nested data so changes in the copied nested object do not normally affect the original. `structuredClone()` is a modern option for many supported data types. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It copies only the first level of an object."}, {"id": "B", "text": "It creates independent copies of nested objects and arrays as well."}, {"id": "C", "text": "It only copies primitive values."}, {"id": "D", "text": "It copies an object's prototype but not its properties."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is the Event Loop?",
    answer: "B. A mechanism that coordinates the call stack and asynchronous task queues.",
    explanation: "The Event Loop coordinates synchronous JavaScript execution with asynchronous callbacks. When the call stack is empty, queued work can be processed. Promise microtasks are handled before the next regular task. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A mechanism that permanently stores JavaScript variables."}, {"id": "B", "text": "A mechanism that coordinates the call stack and asynchronous task queues."}, {"id": "C", "text": "A database query processor."}, {"id": "D", "text": "A React component lifecycle."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is useState() mainly used for?",
    answer: "A. Managing component state directly with a state value and setter.",
    explanation: "useState is convenient for simple or independent pieces of component state. Updating the state schedules a React render. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Managing component state directly with a state value and setter."}, {"id": "B", "text": "Creating MongoDB collections."}, {"id": "C", "text": "Running Node.js worker processes."}, {"id": "D", "text": "Creating HTTP routes."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "When is useReducer() useful in React?",
    answer: "B. When complex state has multiple related actions or transitions.",
    explanation: "useReducer is useful when state logic becomes complex or several actions update related state. A reducer receives the current state and an action and returns the next state. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "When state transitions are simple and unrelated."}, {"id": "B", "text": "When complex state has multiple related actions or transitions."}, {"id": "C", "text": "Only when using class components."}, {"id": "D", "text": "Only for API authentication."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What are prototypes in JavaScript?",
    answer: "A. A mechanism through which objects can inherit properties and methods.",
    explanation: "JavaScript objects can inherit through a prototype chain. If a property is not found directly on an object, JavaScript can look for it on its prototype and continue up the chain. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A mechanism through which objects can inherit properties and methods."}, {"id": "B", "text": "A React-specific state container."}, {"id": "C", "text": "A MongoDB indexing system."}, {"id": "D", "text": "A CSS inheritance rule."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is the purpose of Node.js clusters?",
    answer: "B. To run multiple Node.js worker processes so CPU cores can be used more effectively.",
    explanation: "The cluster approach can run multiple Node.js processes that share incoming workload. Each worker has its own memory and can use another CPU core. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "To create multiple database collections."}, {"id": "B", "text": "To run multiple Node.js worker processes so CPU cores can be used more effectively."}, {"id": "C", "text": "To convert JavaScript into TypeScript."}, {"id": "D", "text": "To make browser JavaScript multi-threaded."}],
      correctOption: 'B'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What are Worker Threads in Node.js?",
    answer: "A. They allow CPU-heavy JavaScript work to run in separate threads within a Node.js process.",
    explanation: "Worker Threads are useful for CPU-intensive work because the computation can run away from the main JavaScript thread. Threads can communicate using messages and transferable/shared data mechanisms. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "They allow CPU-heavy JavaScript work to run in separate threads within a Node.js process."}, {"id": "B", "text": "They are only browser CSS workers."}, {"id": "C", "text": "They are MongoDB background collections."}, {"id": "D", "text": "They create a new HTTP server for every request."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is a Child Process in Node.js?",
    answer: "A. A separate operating-system process started by a Node.js application.",
    explanation: "The `child_process` module can start external commands or other Node.js processes. APIs include `spawn`, `exec`, `execFile`, and `fork`, each suited to different use cases. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A separate operating-system process started by a Node.js application."}, {"id": "B", "text": "A React child component."}, {"id": "C", "text": "A MongoDB child document."}, {"id": "D", "text": "A browser Web Worker."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is a Web Worker?",
    answer: "A. A browser background thread that can run JavaScript without blocking the main UI thread.",
    explanation: "Web Workers run JavaScript in a background thread in the browser. They are useful for CPU-heavy calculations while keeping the UI responsive. They communicate with the main thread through messages. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A browser background thread that can run JavaScript without blocking the main UI thread."}, {"id": "B", "text": "A Node.js database process."}, {"id": "C", "text": "A React reducer."}, {"id": "D", "text": "A CSS rendering engine."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What are React Portals?",
    answer: "A. They render React content into another DOM node while keeping it in the React component tree.",
    explanation: "Portals are useful for modals, dialogs, tooltips, and dropdowns that need to escape a parent's DOM constraints. The content can be mounted into another DOM container while remaining part of the React tree. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "They render React content into another DOM node while keeping it in the React component tree."}, {"id": "B", "text": "They convert React components into database tables."}, {"id": "C", "text": "They disable event handling."}, {"id": "D", "text": "They are used only for CSS animations."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is a Side Effect in React?",
    answer: "A. An operation that interacts with something outside the component's pure rendering calculation.",
    explanation: "API calls, timers, subscriptions, browser APIs, and external-system synchronization are common side effects. React's useEffect is often used to synchronize with external systems. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "An operation that interacts with something outside the component's pure rendering calculation."}, {"id": "B", "text": "A JSX variable declaration."}, {"id": "C", "text": "A CSS selector."}, {"id": "D", "text": "A React key."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What are React Web Workers?",
    answer: "A. Using browser Web Workers with a React application to move heavy computation away from the main UI thread.",
    explanation: "React does not have a separate built-in worker runtime. The term usually means integrating the browser Web Worker API with React for CPU-heavy work such as parsing or image processing. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Using browser Web Workers with a React application to move heavy computation away from the main UI thread."}, {"id": "B", "text": "A special React database."}, {"id": "C", "text": "A replacement for JSX."}, {"id": "D", "text": "A React state hook."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Express Session?",
    answer: "A. It stores session information on the server and usually gives the client a session identifier.",
    explanation: "Express session authentication commonly stores server-side session state and sends a session ID through a cookie. The server uses that ID to retrieve the session. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It stores session information on the server and usually gives the client a session identifier."}, {"id": "B", "text": "It stores passwords directly in the browser."}, {"id": "C", "text": "It permanently stores JWT payloads in MongoDB."}, {"id": "D", "text": "It is only an Express routing method."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is the main difference between Token and Session Authentication?",
    answer: "A. Sessions normally keep authentication state server-side, while token authentication commonly validates a credential sent with requests.",
    explanation: "Session authentication uses a server-side session record and a session identifier. Token authentication commonly sends an access token with requests and the server validates it. Both can expire and both can be secured in different ways. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Sessions normally keep authentication state server-side, while token authentication commonly validates a credential sent with requests."}, {"id": "B", "text": "Tokens always require MongoDB while sessions never use cookies."}, {"id": "C", "text": "Sessions cannot expire."}, {"id": "D", "text": "Tokens can only be used by browsers."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What does Object.create() do?",
    answer: "A. It creates a new object whose prototype is the object supplied to Object.create().",
    explanation: "Object.create(proto) creates an object with the supplied prototype. It is useful when you need explicit control over the prototype chain without calling a constructor. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It creates a new object whose prototype is the object supplied to Object.create()."}, {"id": "B", "text": "It deep-copies every JavaScript object."}, {"id": "C", "text": "It freezes an object."}, {"id": "D", "text": "It converts an object to JSON."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Encoding?",
    answer: "A. Changing data into another representation for transport or compatibility without providing secrecy.",
    explanation: "Encoding changes representation, such as Base64 encoding. It is not a security mechanism because the encoded value can generally be reversed without a secret key. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Changing data into another representation for transport or compatibility without providing secrecy."}, {"id": "B", "text": "Using a secret key to hide data."}, {"id": "C", "text": "Deleting data permanently."}, {"id": "D", "text": "Hashing a password with a salt."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Encryption?",
    answer: "A. Transforming plaintext into protected ciphertext using a cryptographic key.",
    explanation: "Encryption protects confidentiality by transforming plaintext into ciphertext using cryptographic algorithms and keys. Decryption reverses the process when the required key is available. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Transforming plaintext into protected ciphertext using a cryptographic key."}, {"id": "B", "text": "Changing text to uppercase."}, {"id": "C", "text": "Compressing a file without any security purpose."}, {"id": "D", "text": "Converting JSON into JSX."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What does a 2xx HTTP status code generally mean?",
    answer: "A. The request was successfully processed.",
    explanation: "2xx status codes indicate success. Examples include 200 OK and 201 Created. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "The request was successfully processed."}, {"id": "B", "text": "The server is redirecting the request."}, {"id": "C", "text": "The client made an invalid request."}, {"id": "D", "text": "The server failed to process the request."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What does a 4xx HTTP status code generally indicate?",
    answer: "A. A client-side/request problem such as invalid input or missing authorization.",
    explanation: "4xx codes indicate that the request cannot be fulfilled because of something related to the client/request. Common examples include 400, 401, 403, and 404. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A client-side/request problem such as invalid input or missing authorization."}, {"id": "B", "text": "Successful server processing."}, {"id": "C", "text": "A server-side crash only."}, {"id": "D", "text": "A browser rendering problem."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What does a 5xx HTTP status code generally indicate?",
    answer: "A. A server-side failure while processing a valid request.",
    explanation: "5xx codes represent server-side errors. For example, 500 means Internal Server Error. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A server-side failure while processing a valid request."}, {"id": "B", "text": "A successful request."}, {"id": "C", "text": "A permanent client redirect."}, {"id": "D", "text": "A React state update."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Exception Handling in JavaScript?",
    answer: "A. Handling runtime errors using mechanisms such as try/catch, throw, and finally.",
    explanation: "Exception handling lets applications respond to unexpected conditions. JavaScript provides try/catch/finally and throw, and asynchronous promise errors can be handled with catch or try/catch around await. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Handling runtime errors using mechanisms such as try/catch, throw, and finally."}, {"id": "B", "text": "Ignoring all rejected promises."}, {"id": "C", "text": "Deleting errors from memory."}, {"id": "D", "text": "Only logging successful operations."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is an Access Token?",
    answer: "A. A credential used to access protected APIs or resources for a limited period.",
    explanation: "Access tokens are normally short-lived credentials presented to APIs. They should be protected carefully because anyone possessing a valid token may be able to use its granted permissions. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A credential used to access protected APIs or resources for a limited period."}, {"id": "B", "text": "A password stored permanently in the browser."}, {"id": "C", "text": "A MongoDB collection ID only."}, {"id": "D", "text": "A CSS authentication class."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is a Refresh Token?",
    answer: "A. A longer-lived credential used to obtain a new access token.",
    explanation: "Refresh tokens are generally longer-lived and more sensitive than access tokens. They can be used to obtain new access tokens and should be stored and rotated securely. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A longer-lived credential used to obtain a new access token."}, {"id": "B", "text": "A token that can only be used for CSS refresh."}, {"id": "C", "text": "A database index."}, {"id": "D", "text": "A browser cache key."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Redis Pub/Sub?",
    answer: "A. A messaging pattern where publishers send messages to channels and subscribers receive messages from those channels.",
    explanation: "Redis Pub/Sub provides lightweight real-time messaging. A subscriber listening to a channel receives messages published to that channel. Traditional Pub/Sub does not provide durable message storage for offline subscribers. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A messaging pattern where publishers send messages to channels and subscribers receive messages from those channels."}, {"id": "B", "text": "A MongoDB join operation."}, {"id": "C", "text": "A password hashing system."}, {"id": "D", "text": "A React event handler."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Authentication?",
    answer: "A. Verifying the identity of a user or system.",
    explanation: "Authentication answers 'Who are you?'. Login credentials, tokens, or other identity mechanisms are used to establish who the requester is. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Verifying the identity of a user or system."}, {"id": "B", "text": "Checking whether a user can access a specific admin feature."}, {"id": "C", "text": "Encrypting every database field."}, {"id": "D", "text": "Creating a React component."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Authorization?",
    answer: "A. Determining what an authenticated user is allowed to access or perform.",
    explanation: "Authorization answers 'What are you allowed to do?'. For example, a user may be authenticated but still not have permission to delete another user's account. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Determining what an authenticated user is allowed to access or perform."}, {"id": "B", "text": "Checking the user's password only."}, {"id": "C", "text": "Creating a session ID."}, {"id": "D", "text": "Encoding a response."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is WebRTC?",
    answer: "A. A browser technology for real-time peer-to-peer audio, video, and data communication.",
    explanation: "WebRTC enables real-time peer communication in browsers. Applications commonly use a separate signaling mechanism to exchange connection information before the peers establish communication. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A browser technology for real-time peer-to-peer audio, video, and data communication."}, {"id": "B", "text": "A database query language."}, {"id": "C", "text": "A CSS framework."}, {"id": "D", "text": "A Node.js package manager."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is DevOps?",
    answer: "A. A set of practices that combines development and operations to automate and improve software delivery.",
    explanation: "DevOps commonly involves CI/CD, automation, testing, deployment, infrastructure, monitoring, and collaboration between development and operations teams. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A set of practices that combines development and operations to automate and improve software delivery."}, {"id": "B", "text": "A JavaScript data type."}, {"id": "C", "text": "A React rendering mode."}, {"id": "D", "text": "A MongoDB storage engine."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Git?",
    answer: "A. A distributed version control system used to track source-code changes.",
    explanation: "Git tracks code history using commits, branches, merges, and other version-control concepts. It can work locally without GitHub. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A distributed version control system used to track source-code changes."}, {"id": "B", "text": "A cloud-only issue tracker."}, {"id": "C", "text": "A JavaScript runtime."}, {"id": "D", "text": "A database."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is GitHub?",
    answer: "A. A platform for hosting Git repositories and collaborating through features such as pull requests and issues.",
    explanation: "GitHub hosts Git repositories and provides collaboration, code review, issues, Actions, permissions, and other development workflows. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A platform for hosting Git repositories and collaborating through features such as pull requests and issues."}, {"id": "B", "text": "A replacement for Git itself."}, {"id": "C", "text": "A JavaScript compiler."}, {"id": "D", "text": "A database engine."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Jira?",
    answer: "A. A project and issue management tool commonly used for planning, tracking, and team workflows.",
    explanation: "Jira is commonly used for issue tracking, sprint planning, workflows, and project management. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A project and issue management tool commonly used for planning, tracking, and team workflows."}, {"id": "B", "text": "A JavaScript engine."}, {"id": "C", "text": "A database query language."}, {"id": "D", "text": "A CSS framework."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "Can MongoDB perform a join-like operation?",
    answer: "A. Yes, using aggregation stages such as $lookup, and Mongoose can also use populate().",
    explanation: "MongoDB's `$lookup` performs a join-like operation in an aggregation pipeline. Mongoose's `populate()` can fetch referenced documents at the ODM level. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Yes, using aggregation stages such as $lookup, and Mongoose can also use populate()."}, {"id": "B", "text": "No, MongoDB can never combine related data."}, {"id": "C", "text": "Only through CSS."}, {"id": "D", "text": "Only through SQL joins."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Material UI?",
    answer: "A. A React component library that provides ready-made UI components and follows Material Design principles.",
    explanation: "Material UI provides reusable React components such as buttons, dialogs, inputs, and tables. It is useful when a project wants a ready-made design system. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A React component library that provides ready-made UI components and follows Material Design principles."}, {"id": "B", "text": "A MongoDB query engine."}, {"id": "C", "text": "A Node.js process manager."}, {"id": "D", "text": "A browser JavaScript engine."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is shadcn/ui?",
    answer: "A. A collection of customizable components whose source is added to the project, commonly using Radix primitives and Tailwind CSS.",
    explanation: "shadcn/ui takes an ownership-oriented approach: components are added to the codebase so developers can customize them directly. It commonly works with Tailwind CSS and Radix primitives. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A collection of customizable components whose source is added to the project, commonly using Radix primitives and Tailwind CSS."}, {"id": "B", "text": "A database driver."}, {"id": "C", "text": "A Node.js runtime."}, {"id": "D", "text": "A browser storage API."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What are Server Actions in Next.js?",
    answer: "A. Server-side functions that can be invoked through Next.js's supported action mechanism, often for mutations.",
    explanation: "Server Actions let supported Next.js applications keep certain mutation logic on the server. They can be useful for form submissions and server-side operations while keeping sensitive logic off the client. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Server-side functions that can be invoked through Next.js's supported action mechanism, often for mutations."}, {"id": "B", "text": "Browser-only CSS functions."}, {"id": "C", "text": "MongoDB aggregation stages."}, {"id": "D", "text": "React class lifecycle methods."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Pagination?",
    answer: "A. Returning a large dataset in smaller pages instead of sending every record in one response.",
    explanation: "Pagination limits the amount of data returned per request. Offset/limit pagination is simple, while cursor-based pagination is often more efficient for large or changing datasets. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Returning a large dataset in smaller pages instead of sending every record in one response."}, {"id": "B", "text": "Deleting old database records."}, {"id": "C", "text": "Loading all records into browser memory."}, {"id": "D", "text": "Converting JSON to HTML."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is the MongoDB Aggregation Framework?",
    answer: "A. A pipeline system that processes documents through stages such as $match, $group, $project, and $sort.",
    explanation: "Aggregation processes and transforms MongoDB documents through stages. It is useful for filtering, grouping, calculations, sorting, joins, and reporting. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A pipeline system that processes documents through stages such as $match, $group, $project, and $sort."}, {"id": "B", "text": "A React state-management library."}, {"id": "C", "text": "A Node.js process manager."}, {"id": "D", "text": "A CSS layout engine."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What are MongoDB Query Operators?",
    answer: "A. Operators such as $gt, $lt, $in, and $or used to express query conditions.",
    explanation: "MongoDB query operators express conditions and logic. Examples include `$gt`, `$lt`, `$in`, `$and`, and `$or`. Update operators such as `$set` and `$inc` are used for modifications. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Operators such as $gt, $lt, $in, and $or used to express query conditions."}, {"id": "B", "text": "Only JavaScript arithmetic operators."}, {"id": "C", "text": "Only CSS operators."}, {"id": "D", "text": "React lifecycle methods."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What are Template Engines in Node.js?",
    answer: "A. Tools such as EJS, Pug, and Handlebars that generate HTML from templates and data.",
    explanation: "Template engines allow server-side HTML generation from templates and data. EJS, Pug, and Handlebars are common examples. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Tools such as EJS, Pug, and Handlebars that generate HTML from templates and data."}, {"id": "B", "text": "MongoDB indexing tools."}, {"id": "C", "text": "React Hooks."}, {"id": "D", "text": "Node.js worker threads."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is the V8 Engine?",
    answer: "A. A JavaScript and WebAssembly engine used by Chrome and Node.js.",
    explanation: "V8 executes JavaScript and WebAssembly. Chrome uses V8, and Node.js embeds V8 to run JavaScript outside the browser. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A JavaScript and WebAssembly engine used by Chrome and Node.js."}, {"id": "B", "text": "A MongoDB storage engine."}, {"id": "C", "text": "A React rendering library."}, {"id": "D", "text": "A package manager."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Event-Driven Programming?",
    answer: "A. A programming style where code responds to events such as clicks, messages, or completed I/O.",
    explanation: "Event-driven programming reacts to events instead of relying only on a fixed sequential flow. Node.js uses this style extensively for asynchronous I/O. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A programming style where code responds to events such as clicks, messages, or completed I/O."}, {"id": "B", "text": "A database normalization method."}, {"id": "C", "text": "A CSS inheritance system."}, {"id": "D", "text": "A method for encrypting files."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Event-Driven Architecture?",
    answer: "A. A system architecture where components or services communicate and react through events.",
    explanation: "Event-driven architecture applies event-based communication at a larger system level. Services can publish events and other services can react to them, often through a broker. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A system architecture where components or services communicate and react through events."}, {"id": "B", "text": "A React Hook rule."}, {"id": "C", "text": "A database index type."}, {"id": "D", "text": "A CSS animation technique."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is a REST API?",
    answer: "A. An HTTP-based API style that exposes resources and commonly uses methods such as GET, POST, PUT/PATCH, and DELETE.",
    explanation: "REST APIs commonly model resources and use HTTP methods and status codes consistently. Requests are generally stateless from the server's perspective. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "An HTTP-based API style that exposes resources and commonly uses methods such as GET, POST, PUT/PATCH, and DELETE."}, {"id": "B", "text": "A database storage format."}, {"id": "C", "text": "A React component."}, {"id": "D", "text": "A JavaScript compiler."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Non-Blocking I/O in Node.js?",
    answer: "A. Starting I/O work asynchronously so the main JavaScript thread can continue processing other work.",
    explanation: "Node.js uses asynchronous APIs and libuv/OS facilities so many I/O operations can be in progress without blocking the main JavaScript execution path. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Starting I/O work asynchronously so the main JavaScript thread can continue processing other work."}, {"id": "B", "text": "Waiting synchronously for every I/O operation."}, {"id": "C", "text": "Disabling all network operations."}, {"id": "D", "text": "Creating a new database for every request."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "Why should large 2\u20133 GB files be uploaded using streams?",
    answer: "A. Streams process data in chunks and avoid loading the entire file into memory.",
    explanation: "Streaming is memory-efficient because chunks are processed progressively. For very large production uploads, multipart or resumable uploads directly to object storage are often even better. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Streams process data in chunks and avoid loading the entire file into memory."}, {"id": "B", "text": "Streams always make files smaller."}, {"id": "C", "text": "Streams remove the need for validation."}, {"id": "D", "text": "Streams store files automatically in MongoDB."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is OAuth Authentication?",
    answer: "A. A framework for delegated authorization that lets an application access resources without receiving the user's password.",
    explanation: "OAuth is an authorization framework. Modern applications commonly use authorization code flow with PKCE for public clients. OAuth itself is about delegated access; OpenID Connect adds an identity layer. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A framework for delegated authorization that lets an application access resources without receiving the user's password."}, {"id": "B", "text": "A password hashing algorithm."}, {"id": "C", "text": "A database indexing method."}, {"id": "D", "text": "A React Hook."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "How should multiple roles such as User, Vendor, and Admin be handled?",
    answer: "A. Authenticate the user and enforce role/permission checks on protected backend routes or services.",
    explanation: "Role-based access control should be enforced on the backend. The server verifies identity and then checks whether the user's role or permissions allow the requested action. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Authenticate the user and enforce role/permission checks on protected backend routes or services."}, {"id": "B", "text": "Hide all admin buttons in React and trust the client."}, {"id": "C", "text": "Give every authenticated user every role."}, {"id": "D", "text": "Store role checks only in CSS."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "Which technology is commonly used for bidirectional real-time communication in Node.js?",
    answer: "A. WebSocket or Socket.IO.",
    explanation: "WebSockets provide bidirectional real-time communication. Socket.IO adds higher-level features such as rooms, events, and reconnection handling. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "WebSocket or Socket.IO."}, {"id": "B", "text": "CSS."}, {"id": "C", "text": "MongoDB indexes."}, {"id": "D", "text": "Git."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is the difference between Promise.all() and Promise.allSettled()?",
    answer: "A. Promise.all rejects when an input rejects; Promise.allSettled waits for all inputs and reports each result.",
    explanation: "Promise.all is useful when every operation is required to succeed. Promise.allSettled is useful when you need the outcome of every operation even if some fail. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Promise.all rejects when an input rejects; Promise.allSettled waits for all inputs and reports each result."}, {"id": "B", "text": "Promise.allSettled stops at the first rejection."}, {"id": "C", "text": "Both always return only successful results."}, {"id": "D", "text": "Promise.all works with only one promise."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is the Temporal Dead Zone (TDZ)?",
    answer: "A. The period before a let, const, or class binding is initialized during which accessing it throws a ReferenceError.",
    explanation: "The TDZ begins when the scope is entered and ends when the declaration is initialized. `let`, `const`, and class declarations are hoisted in a way that does not allow access before initialization. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "The period before a let, const, or class binding is initialized during which accessing it throws a ReferenceError."}, {"id": "B", "text": "A browser cache period."}, {"id": "C", "text": "A MongoDB transaction window."}, {"id": "D", "text": "A React render phase."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is req.params in Express?",
    answer: "A. An object containing route parameters captured from the URL.",
    explanation: "For a route such as `/users/:id`, `req.params.id` contains the value captured from the URL. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "An object containing route parameters captured from the URL."}, {"id": "B", "text": "An object containing only HTTP headers."}, {"id": "C", "text": "An object containing database indexes."}, {"id": "D", "text": "An object containing environment variables."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is req.query in Express?",
    answer: "A. An object containing query-string parameters from the URL.",
    explanation: "For `/users?page=2`, Express exposes the query value through `req.query.page` after query parsing. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "An object containing query-string parameters from the URL."}, {"id": "B", "text": "The raw HTTP response body."}, {"id": "C", "text": "The user's password."}, {"id": "D", "text": "The server's process ID."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is req.body in Express?",
    answer: "A. The parsed body data sent by the client when suitable body-parsing middleware is configured.",
    explanation: "req.body contains parsed request body data, such as JSON or form data, when the application has configured the relevant middleware. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "The parsed body data sent by the client when suitable body-parsing middleware is configured."}, {"id": "B", "text": "The route parameter object."}, {"id": "C", "text": "The server's CPU usage."}, {"id": "D", "text": "The response status code."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What are common challenges in a React project?",
    answer: "A. State management, unnecessary re-renders, bundle size, data fetching, accessibility, testing, and maintainability.",
    explanation: "Real projects can become difficult when state ownership, component boundaries, data fetching, performance, accessibility, testing, and dependencies are not designed carefully. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "State management, unnecessary re-renders, bundle size, data fetching, accessibility, testing, and maintainability."}, {"id": "B", "text": "React cannot render components."}, {"id": "C", "text": "React cannot use APIs."}, {"id": "D", "text": "React cannot work with TypeScript."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is a Browser Polyfill?",
    answer: "A. Code that provides an implementation for a web API missing from an older or unsupported browser.",
    explanation: "A polyfill supplies a missing runtime API. It differs from transpilation, which transforms syntax such as newer JavaScript syntax into code supported by older environments. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Code that provides an implementation for a web API missing from an older or unsupported browser."}, {"id": "B", "text": "A React component library."}, {"id": "C", "text": "A database migration."}, {"id": "D", "text": "A Node.js process."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "Which tool can profile React component rendering?",
    answer: "A. React DevTools Profiler.",
    explanation: "React DevTools Profiler can show which components rendered and how much time rendering took. Browser Performance tools and Lighthouse can complement React-specific profiling. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "React DevTools Profiler."}, {"id": "B", "text": "MongoDB Compass only."}, {"id": "C", "text": "Git only."}, {"id": "D", "text": "npm install only."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "Why must React Hooks be called at the top level?",
    answer: "A. React relies on a consistent Hook call order between renders.",
    explanation: "React associates Hook state with call order. Conditional or loop-based Hook calls can change that order between renders and break React's assumptions. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "React relies on a consistent Hook call order between renders."}, {"id": "B", "text": "Hooks only work inside CSS files."}, {"id": "C", "text": "Hooks must be called only from event handlers."}, {"id": "D", "text": "React stores Hook state by variable name."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What does fetch() normally return?",
    answer: "A. A Promise that resolves to a Response object.",
    explanation: "The Fetch API returns a Promise. After it resolves, the Response object provides status, headers, and methods such as `json()` to read the body. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A Promise that resolves to a Response object."}, {"id": "B", "text": "A MongoDB document directly."}, {"id": "C", "text": "A React component."}, {"id": "D", "text": "Always a plain string."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is the Node.js Event Loop?",
    answer: "A. The mechanism that coordinates asynchronous callbacks and I/O around Node's main JavaScript execution thread.",
    explanation: "Node's event loop processes asynchronous work through phases and callbacks. This allows I/O-heavy applications to handle many operations without creating a JavaScript thread for every request. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "The mechanism that coordinates asynchronous callbacks and I/O around Node's main JavaScript execution thread."}, {"id": "B", "text": "A database transaction manager."}, {"id": "C", "text": "A React rendering component."}, {"id": "D", "text": "A CSS layout algorithm."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is a key difference between a normal function and an arrow function?",
    answer: "A. A normal function can have call-time this; an arrow function captures this lexically from its surrounding scope.",
    explanation: "Arrow functions do not have their own `this`, `arguments`, or constructor behavior. Normal functions can have a dynamic `this` depending on how they are called. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A normal function can have call-time this; an arrow function captures this lexically from its surrounding scope."}, {"id": "B", "text": "Arrow functions always have their own dynamic this."}, {"id": "C", "text": "Normal functions cannot be callbacks."}, {"id": "D", "text": "Arrow functions can always be used as constructors."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What are Refs in React used for?",
    answer: "A. Accessing DOM nodes or storing mutable values without causing a render for every ref update.",
    explanation: "Refs are useful for focus, DOM measurement, imperative APIs, and mutable values that should not trigger rendering. They should not replace normal UI state. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Accessing DOM nodes or storing mutable values without causing a render for every ref update."}, {"id": "B", "text": "Replacing all component state."}, {"id": "C", "text": "Creating MongoDB indexes."}, {"id": "D", "text": "Calling SQL joins."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is forwardRef used for?",
    answer: "A. It lets a component expose a ref to a child DOM node or ref target through the component boundary.",
    explanation: "forwardRef has traditionally been used when a parent needs to pass a ref through a custom component to a DOM node or another ref target. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It lets a component expose a ref to a child DOM node or ref target through the component boundary."}, {"id": "B", "text": "It creates a server session."}, {"id": "C", "text": "It forwards HTTP requests automatically."}, {"id": "D", "text": "It creates a MongoDB reference."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What are HTTP Interceptors commonly used for?",
    answer: "A. Running logic around HTTP requests/responses, such as attaching tokens or handling errors.",
    explanation: "Axios and similar clients can use interceptors before requests and after responses. They are useful for auth headers, logging, centralized error handling, and token-refresh flows. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Running logic around HTTP requests/responses, such as attaching tokens or handling errors."}, {"id": "B", "text": "Creating MongoDB collections."}, {"id": "C", "text": "Rendering CSS."}, {"id": "D", "text": "Compiling TypeScript."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "How does Node.js handle many requests concurrently?",
    answer: "A. It uses an event loop and asynchronous I/O so many I/O operations can be in flight without a JavaScript thread per request.",
    explanation: "Node's concurrency model is based mainly on one main JavaScript thread plus asynchronous I/O. CPU-heavy synchronous work can still block that thread. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It uses an event loop and asynchronous I/O so many I/O operations can be in flight without a JavaScript thread per request."}, {"id": "B", "text": "It creates a new JavaScript process for every request."}, {"id": "C", "text": "It blocks until each request finishes."}, {"id": "D", "text": "It stores each request in a separate database."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is a major drawback of Node.js?",
    answer: "A. CPU-heavy synchronous work can block the event loop and delay other requests.",
    explanation: "Node is strong for I/O-bound applications but CPU-heavy work on the main thread can block the event loop. Worker Threads, child processes, queues, or horizontal scaling can help. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "CPU-heavy synchronous work can block the event loop and delay other requests."}, {"id": "B", "text": "Node cannot handle HTTP requests."}, {"id": "C", "text": "Node cannot use databases."}, {"id": "D", "text": "Node cannot use asynchronous code."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Redux Thunk?",
    answer: "A. Middleware that allows action creators to return functions for handling asynchronous or conditional dispatch logic.",
    explanation: "Redux Thunk allows a function to be dispatched instead of only a plain action object. That function can perform async work and dispatch actions before or after the operation. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Middleware that allows action creators to return functions for handling asynchronous or conditional dispatch logic."}, {"id": "B", "text": "A database indexing engine."}, {"id": "C", "text": "A React CSS library."}, {"id": "D", "text": "A replacement for Redux reducers."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Redux Saga?",
    answer: "A. A Redux middleware that uses generator-based effects to model complex asynchronous workflows.",
    explanation: "Redux Saga uses generators and effects to coordinate complex side effects such as cancellation, retries, and multiple async operations. It is more structured but often more complex than Thunk. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A Redux middleware that uses generator-based effects to model complex asynchronous workflows."}, {"id": "B", "text": "A browser storage API."}, {"id": "C", "text": "A MongoDB aggregation stage."}, {"id": "D", "text": "A CSS framework."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "Why is TypeScript important in large JavaScript projects?",
    answer: "A. It provides static typing and tooling that can catch many mistakes before runtime and improve maintainability.",
    explanation: "TypeScript improves editor support, API clarity, refactoring, and compile-time error detection. It does not replace runtime validation for untrusted external data. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It provides static typing and tooling that can catch many mistakes before runtime and improve maintainability."}, {"id": "B", "text": "It makes runtime validation unnecessary."}, {"id": "C", "text": "It removes JavaScript from browsers."}, {"id": "D", "text": "It automatically fixes every bug."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "When should a Next.js Client Component be used?",
    answer: "A. When the component needs client-side interactivity, state, effects, or browser APIs.",
    explanation: "Client Components are needed for things such as event handlers, state, effects, and browser APIs. Server Components are preferable when client interactivity is not required. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "When the component needs client-side interactivity, state, effects, or browser APIs."}, {"id": "B", "text": "Whenever a component reads static text."}, {"id": "C", "text": "Only for database queries."}, {"id": "D", "text": "Only for server environment variables."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "When are Next.js Server Components useful?",
    answer: "A. For server-side rendering/data access where client-side interactivity is not required.",
    explanation: "Server Components can fetch data on the server and avoid sending that component's JavaScript to the browser. This can reduce client-side JavaScript and keep server-only logic on the server. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "For server-side rendering/data access where client-side interactivity is not required."}, {"id": "B", "text": "Only for browser localStorage."}, {"id": "C", "text": "Only for click handlers."}, {"id": "D", "text": "Only for CSS animations."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is the Node.js Runtime Environment?",
    answer: "A. A runtime that uses V8 plus Node APIs to execute JavaScript outside the browser.",
    explanation: "Node.js combines V8 with runtime APIs for files, networking, streams, processes, buffers, and other server-side capabilities. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A runtime that uses V8 plus Node APIs to execute JavaScript outside the browser."}, {"id": "B", "text": "Only the npm package registry."}, {"id": "C", "text": "Only the Chrome browser."}, {"id": "D", "text": "Only MongoDB."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is a safe payment gateway integration flow?",
    answer: "A. Create an order server-side, start the gateway payment, verify the result server-side, and update the order only after trusted verification.",
    explanation: "The backend should be the source of truth for payment status. Verify gateway responses or signed webhooks before marking an order as paid. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Create an order server-side, start the gateway payment, verify the result server-side, and update the order only after trusted verification."}, {"id": "B", "text": "Trust any payment-success message sent by the browser."}, {"id": "C", "text": "Store card details in plaintext."}, {"id": "D", "text": "Mark every order paid before payment."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "How is email commonly sent from a Node.js backend?",
    answer: "A. Through SMTP or an email-provider API, often using a library such as Nodemailer.",
    explanation: "Node.js can send mail through SMTP or provider APIs. Credentials should stay server-side, and production systems should consider retries, rate limits, templates, and delivery failures. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Through SMTP or an email-provider API, often using a library such as Nodemailer."}, {"id": "B", "text": "Through CSS."}, {"id": "C", "text": "Through React state only."}, {"id": "D", "text": "Through MongoDB queries."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "How can multiple images be uploaded in Express?",
    answer: "A. Use multipart/form-data handling such as Multer, validate the files, and process or store them safely.",
    explanation: "Multer can parse multipart uploads and supports arrays or named fields. Production apps should validate file count, size, type, names, and storage location. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Use multipart/form-data handling such as Multer, validate the files, and process or store them safely."}, {"id": "B", "text": "Put all images in a URL query string."}, {"id": "C", "text": "Disable file-size validation."}, {"id": "D", "text": "Store every image permanently in React state."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is a secure forgot-password flow?",
    answer: "A. Generate a short-lived reset token, send a reset link, verify it, set the new password, and invalidate the token.",
    explanation: "A secure reset process uses an unpredictable, expiring, usually single-use token. The server should not reveal unnecessary account-existence information and should invalidate the token after use. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Generate a short-lived reset token, send a reset link, verify it, set the new password, and invalidate the token."}, {"id": "B", "text": "Email the user's existing password."}, {"id": "C", "text": "Create a permanent reset token."}, {"id": "D", "text": "Reset every user's password together."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Search Optimization in a Node.js backend?",
    answer: "A. Improving search with suitable indexes, filtering, pagination, caching, and possibly a dedicated search engine.",
    explanation: "Search performance depends on data size and requirements. Database indexes and query design may be enough for simple search, while large or advanced search can use systems such as Elasticsearch/OpenSearch. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Improving search with suitable indexes, filtering, pagination, caching, and possibly a dedicated search engine."}, {"id": "B", "text": "Only sorting React components."}, {"id": "C", "text": "Only renaming API routes."}, {"id": "D", "text": "Only increasing CSS specificity."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is database Indexing?",
    answer: "A. Creating an index on fields used by queries so the database can find matching documents more efficiently.",
    explanation: "Indexes can reduce the amount of data scanned for common query patterns. They consume storage and can add write overhead, so they should be designed from actual queries. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Creating an index on fields used by queries so the database can find matching documents more efficiently."}, {"id": "B", "text": "Adding IDs to HTML elements."}, {"id": "C", "text": "Installing npm packages."}, {"id": "D", "text": "Encrypting every API response."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is a Polyfill?",
    answer: "A. Runtime code that implements a feature missing from the target environment.",
    explanation: "A polyfill provides a missing runtime API. Transpilers transform syntax; polyfills provide APIs that the runtime itself may not support. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Runtime code that implements a feature missing from the target environment."}, {"id": "B", "text": "A password hashing algorithm."}, {"id": "C", "text": "A React state hook."}, {"id": "D", "text": "A MongoDB collection."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is an important React security practice?",
    answer: "A. Treat client input as untrusted, avoid unsafe HTML, protect authentication, use HTTPS, and enforce authorization on the backend.",
    explanation: "Frontend security requires safe rendering, secure authentication, dependency hygiene, and HTTPS. Most importantly, authorization must be enforced by the backend because client code can be modified by users. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Treat client input as untrusted, avoid unsafe HTML, protect authentication, use HTTPS, and enforce authorization on the backend."}, {"id": "B", "text": "Put private API keys in React source code."}, {"id": "C", "text": "Trust all values from localStorage."}, {"id": "D", "text": "Use only frontend role checks for security."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What are Synthetic Events in React?",
    answer: "A. React's event abstraction that provides a consistent event interface for React event handlers.",
    explanation: "React provides an event system around browser events so application code can handle events consistently through React handlers. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "React's event abstraction that provides a consistent event interface for React event handlers."}, {"id": "B", "text": "MongoDB database events."}, {"id": "C", "text": "CSS pseudo-elements."}, {"id": "D", "text": "Node.js worker messages."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is one drawback of React?",
    answer: "A. Large applications still require architecture decisions for state, data fetching, routing, testing, and performance.",
    explanation: "React is a UI library rather than a complete application architecture. Teams often need additional choices for routing, server state, forms, testing, and other concerns. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Large applications still require architecture decisions for state, data fetching, routing, testing, and performance."}, {"id": "B", "text": "React cannot create reusable components."}, {"id": "C", "text": "React cannot use APIs."}, {"id": "D", "text": "React cannot work with TypeScript."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is a Generator Function?",
    answer: "A. A function declared with function* that can pause at yield and resume later.",
    explanation: "Generator functions return generator objects and can pause at `yield`. They are useful for custom iteration and patterns such as Redux Saga. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A function declared with function* that can pause at yield and resume later."}, {"id": "B", "text": "A function that can only run once."}, {"id": "C", "text": "A MongoDB function."}, {"id": "D", "text": "A CSS function."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "Why should stable keys be used instead of array indexes in React lists?",
    answer: "A. Stable keys preserve item identity when list items are inserted, removed, or reordered.",
    explanation: "React uses keys to identify list items across renders. Index keys can cause incorrect component identity and state when list order changes. Stable unique IDs are usually better. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Stable keys preserve item identity when list items are inserted, removed, or reordered."}, {"id": "B", "text": "Indexes always cause faster rendering."}, {"id": "C", "text": "React ignores keys."}, {"id": "D", "text": "Keys are only used for CSS."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Virtualization in React?",
    answer: "A. Rendering only the visible portion of a large list instead of mounting every item at once.",
    explanation: "Virtualization reduces DOM size and rendering work for large lists by mounting only items near the visible viewport. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Rendering only the visible portion of a large list instead of mounting every item at once."}, {"id": "B", "text": "Rendering every item twice."}, {"id": "C", "text": "Disabling React rendering."}, {"id": "D", "text": "Replacing JavaScript with CSS."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Webpack?",
    answer: "A. A module bundler/build tool that processes application modules and assets into bundles.",
    explanation: "Webpack can bundle JavaScript, CSS, images, and dependencies and can support code splitting, optimization, loaders, plugins, and source maps. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A module bundler/build tool that processes application modules and assets into bundles."}, {"id": "B", "text": "A database server."}, {"id": "C", "text": "A browser engine."}, {"id": "D", "text": "A React Hook."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is a reducer in Redux?",
    answer: "A. A pure function that receives current state and an action and returns the next state.",
    explanation: "Redux reducers describe state transitions. They should be predictable and should not mutate the existing state directly. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A pure function that receives current state and an action and returns the next state."}, {"id": "B", "text": "A database query."}, {"id": "C", "text": "A React DOM node."}, {"id": "D", "text": "A CSS rule."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is useReducer in React?",
    answer: "A. A Hook that manages component state through a reducer function and dispatched actions.",
    explanation: "useReducer applies reducer-style state transitions locally inside a component. It is useful when state updates are complex or action-driven. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A Hook that manages component state through a reducer function and dispatched actions."}, {"id": "B", "text": "A replacement for useEffect."}, {"id": "C", "text": "A MongoDB aggregation stage."}, {"id": "D", "text": "A Node.js cluster API."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "Where is an access token often stored for web authentication?",
    answer: "A. A secure HttpOnly cookie can be a strong choice for session-style authentication, with appropriate CSRF protections.",
    explanation: "Storage depends on architecture. HttpOnly Secure cookies reduce JavaScript access to the credential, which can help against token theft via XSS, but cookie-based auth requires appropriate CSRF protections and SameSite configuration. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A secure HttpOnly cookie can be a strong choice for session-style authentication, with appropriate CSRF protections."}, {"id": "B", "text": "Always in a public JavaScript constant."}, {"id": "C", "text": "Always in the URL."}, {"id": "D", "text": "Inside React source code."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is encryption/decryption in Node.js commonly implemented with?",
    answer: "A. Node's crypto module and secure cryptographic algorithms with proper key management.",
    explanation: "Node's built-in `crypto` module provides cryptographic primitives. Secure application encryption also requires proper key handling, IV/nonce management, and authenticated encryption where appropriate. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Node's crypto module and secure cryptographic algorithms with proper key management."}, {"id": "B", "text": "The fs module only."}, {"id": "C", "text": "Base64 encoding only."}, {"id": "D", "text": "console.log()."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What does $unwind do in MongoDB?",
    answer: "A. It expands an array so each array element can become a separate pipeline document.",
    explanation: "For example, an array of three items can produce three pipeline documents after `$unwind`. This is useful when you need to process array elements individually. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It expands an array so each array element can become a separate pipeline document."}, {"id": "B", "text": "It creates an index."}, {"id": "C", "text": "It encrypts an array."}, {"id": "D", "text": "It deletes every document."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What does $group do in MongoDB?",
    answer: "A. It groups documents by a key and can calculate values such as count, sum, average, minimum, or maximum.",
    explanation: "The `$group` aggregation stage combines documents by a group key and supports accumulators such as `$sum`, `$avg`, `$min`, `$max`, and `$push`. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It groups documents by a key and can calculate values such as count, sum, average, minimum, or maximum."}, {"id": "B", "text": "It creates a React group component."}, {"id": "C", "text": "It creates database users."}, {"id": "D", "text": "It deletes duplicate collections."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "Why is explain() useful for MongoDB queries?",
    answer: "A. It shows how MongoDB plans and executes a query, helping identify scans, index usage, and examined documents.",
    explanation: "MongoDB `explain()` provides query-plan and execution information. It helps determine whether an index is being used and whether too many documents are being examined. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "It shows how MongoDB plans and executes a query, helping identify scans, index usage, and examined documents."}, {"id": "B", "text": "It automatically rewrites every query."}, {"id": "C", "text": "It deletes unused indexes."}, {"id": "D", "text": "It encrypts the query."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is a compound index in MongoDB?",
    answer: "A. An index that contains multiple fields in a defined field order.",
    explanation: "Compound indexes contain multiple fields and are designed around common query and sort patterns. Field order matters because it affects which query patterns can efficiently use the index. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "An index that contains multiple fields in a defined field order."}, {"id": "B", "text": "An index that can contain only one field."}, {"id": "C", "text": "An index stored in React."}, {"id": "D", "text": "An index that always replaces the primary key."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is a multikey index in MongoDB?",
    answer: "A. An index type that supports indexing array fields.",
    explanation: "MongoDB can create multikey indexes for fields containing arrays, allowing queries to efficiently match array elements. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "An index type that supports indexing array fields."}, {"id": "B", "text": "An index used only for passwords."}, {"id": "C", "text": "An index for CSS classes."}, {"id": "D", "text": "An index that can only contain strings."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Normalization?",
    answer: "A. Organizing related data to reduce unnecessary duplication and update anomalies.",
    explanation: "Normalization separates data into logical structures to reduce duplication and inconsistent updates. MongoDB may intentionally denormalize some data when read performance and access patterns justify it. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Organizing related data to reduce unnecessary duplication and update anomalies."}, {"id": "B", "text": "Encrypting every field."}, {"id": "C", "text": "Deleting all relationships."}, {"id": "D", "text": "Putting all data into one giant document."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "What is Infinite Currying?",
    answer: "A. A function pattern where each call returns another function so more values can be supplied until a terminating call.",
    explanation: "Infinite currying commonly uses closures to accumulate values across calls, for example `sum(1)(2)(3)()` where the final empty call returns the accumulated result. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "A function pattern where each call returns another function so more values can be supplied until a terminating call."}, {"id": "B", "text": "A loop that must run forever."}, {"id": "C", "text": "A MongoDB pipeline."}, {"id": "D", "text": "A React rendering technique."}],
      correctOption: 'A'
    }
  },
  {
    technologySlug: 'advanced-questions-bank-3',
    topicSlug: 'advanced-questions-3-batch-1',
    question: "How should forms be validated in a full-stack application?",
    answer: "A. Validate user input on the client for UX and validate it again on the server for security and correctness.",
    explanation: "Client validation gives immediate feedback, but it can be bypassed. Server validation is mandatory for important data, security rules, types, ranges, formats, and business constraints. ---",
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: true,
    mcq: {
      enabled: true,
      options: [{"id": "A", "text": "Validate user input on the client for UX and validate it again on the server for security and correctness."}, {"id": "B", "text": "Use CSS as the only validation layer."}, {"id": "C", "text": "Trust browser validation completely."}, {"id": "D", "text": "Never validate input on the server."}],
      correctOption: 'A'
    }
  },

];
