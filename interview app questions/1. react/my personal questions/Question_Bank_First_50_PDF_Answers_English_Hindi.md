# First 50 Interview Questions — PDF Answers + English + Hindi

> **Important:** The **“My PDF Answer — Verbatim Transcription”** section preserves the wording from the scanned PDF as closely as readable. I have **not corrected grammar, technical wording, or mistakes** in that section. Markdown/code formatting is only used to keep the content readable.
>
> The English and Hindi sections are my simple interview-friendly explanations.

## 1. Difference between `map`, `filter`, `reduce`, `forEach`, and `sort` methods. Also explain what a higher-order function is.

### My PDF Answer — Verbatim Transcription

Higher order function - a function which takes other function as argument or return a function is known as Higher Order function.

eg ->
function callBackfun (value) {
    console.log(value);
}

function higherOrderFunTwo (callBackfun) {
    return callBackfun;
}

higherOrderFunTwo (callBackfun ("I am Best"));

-> forEach loop

let Students = ['john', 'sana', 'jack'];

Students.forEach(functionOne);

function functionOne (item) {
    console.log(item);
}

-> filter method -> koi array se koi filter kar sakte hai koi condition de ke.

const ages = [33,12,20,54,10]

const canDrive = ages.filter(function(age) {
    if (age >= 18) return true;
})

console.log(canDrive)

-> Map method -> jab ek array se new array chahiye on the basis of its property.

-> sort method -> array ko sort karta hai ascending or descending order.

-> Reduce method -> koi v array ko sort kar sakte hai single value me kar deta hai.

const addno = ages.reduce(function(total,age) {
    return total + age;
}, 1)

-> kon sa index se start karna hai.

console.log(addno)

### Simple Explanation — English

A higher-order function is a function that takes another function as an argument or returns a function.

- `forEach()` runs a function for every item.
- `filter()` creates a new array containing items that satisfy a condition.
- `map()` creates a new array by transforming every item.
- `sort()` changes the array order.
- `reduce()` combines array values into one final result.

The main difference is what each method is used for: looping, filtering, transforming, sorting, or reducing.

### Simple Explanation — Hindi

Higher-order function woh function hai jo kisi doosre function ko argument ke roop mein leta hai ya function return karta hai.

- `forEach()` har item par function chalata hai.
- `filter()` condition match karne wale items ka naya array banata hai.
- `map()` har item ko transform karke naya array banata hai.
- `sort()` array ka order change karta hai.
- `reduce()` multiple values ko combine karke ek final value bana sakta hai.

Simple way mein: `forEach` = loop, `filter` = select, `map` = transform, `sort` = arrange, `reduce` = combine.

---

## 2. What is hoisting in JavaScript?

### My PDF Answer — Verbatim Transcription

Hoisting in JS ? -> page me jitna v variable declared hai wo sab ko top pe move kar diya jata hai, or wo sab ko undefined set kar diya jata hai.

eg ->
console.log(a); -> ye aayega undefined

var a;
a = 10;
var b;

-> in background ye ho jayega

var a = undefined
var b = undefined
console.log(a); -> undefined
a = 10;
console.log(a) -> 10

### Simple Explanation — English

Hoisting means JavaScript processes declarations before executing the code in that scope. With `var`, the declaration is available before the assignment, so reading it can give `undefined`. `let` and `const` are also hoisted internally, but they are not accessible before initialization because of the temporal dead zone.

### Simple Explanation — Hindi

Hoisting ka matlab hai JavaScript execution se pehle declarations ko process karta hai. `var` ke case mein declaration pehle available hoti hai, lekin value assignment baad mein hoti hai, isliye pehle access karne par `undefined` mil sakta hai. `let` aur `const` ko declaration se pehle access nahi kar sakte.

---

## 3. What is the Event Loop in JavaScript and Node.js?

### My PDF Answer — Verbatim Transcription

in the world of javascript, the event loop is a mechanism that enables asynchronous operation to be executed in a non-blocking manner.

* hamlog jo asynchronous operations perform karte hai wo sab ko event loop handle karta hai, or non-blocking banata hai.

### Simple Explanation — English

The Event Loop coordinates JavaScript work so asynchronous callbacks can run without blocking the main execution flow. JavaScript runs synchronous code first, while asynchronous work is handled through the runtime and its task queues. When the call stack becomes available, queued callbacks can be processed.

### Simple Explanation — Hindi

Event Loop JavaScript mein asynchronous work ko manage karta hai. Synchronous code pehle execute hota hai aur asynchronous operations ka callback queue mein wait kar sakta hai. Jab call stack free hota hai, Event Loop queued callback ko execution ke liye bhejta hai. Isi wajah se JavaScript non-blocking behavior provide kar sakta hai.

---

## 4. Promises or `setTimeout` — which one executes first and why?

### My PDF Answer — Verbatim Transcription

When javascript engine finishes executing the main Script (synchronous code) it processes :
1). All microtasks first (like promise.then)
2). then move to macrotasks (like setTimeout).

Thus, promise (or any other micro-task) will execute before a setTimeout callback.

eg ->
console.log("Start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("promise");
});

console.log("end");

Output

Start
end
promise
setTimeout

### Simple Explanation — English

A resolved Promise callback runs before a `setTimeout` callback because Promise reactions are microtasks, while `setTimeout` callbacks are scheduled as tasks/macrotasks. After the current synchronous code finishes, the runtime processes microtasks before moving to the timer task.

### Simple Explanation — Hindi

Resolved Promise ka callback `setTimeout` se pehle execute hota hai kyunki Promise ka `.then()` microtask queue mein jata hai. `setTimeout` callback task/macrotask queue mein jata hai. Pehle synchronous code complete hota hai, phir microtasks process hote hain, aur uske baad timer callback run hota hai.

---

## 5. What is a Pure Component?

### My PDF Answer — Verbatim Transcription

a pure component in React is a component that only re-renders when its props or state change. it is a performance optimization technique to prevent unnecessary renders and improve application efficiency.

### Simple Explanation — English

A Pure Component is a React optimization concept. A class component extending `React.PureComponent` can skip a render when props and state are shallowly equal. It is useful when unnecessary re-renders are a real performance concern.

### Simple Explanation — Hindi

Pure Component React ka performance optimization concept hai. Agar props aur state shallow comparison ke according same hain, to unnecessary re-render skip kiya ja sakta hai. Iska use performance improve karne ke liye hota hai.

---

## 6. What is the `this` keyword in JavaScript?

### My PDF Answer — Verbatim Transcription

this keyword refers to an object where it is called.

eg ->
const obj = {
    name = john,
    greet() {
        console.log(this.name); //john
    }
};

obj.greet();

### Simple Explanation — English

`this` refers to the value associated with the current function call. In the example, `obj.greet()` calls `greet` as a method of `obj`, so `this` refers to `obj` and `this.name` gives `john`. The exact value of `this` depends on how the function is called.

### Simple Explanation — Hindi

`this` us object/value ko refer karta hai jo function call ke context se decide hota hai. `obj.greet()` mein `greet` ko `obj` ke method ke roop mein call kiya gaya hai, isliye `this` `obj` ko refer karta hai. `this` ka value function ko kaise call kiya gaya hai uspar depend karta hai.

---

## 7. What is a closure in JavaScript?

### My PDF Answer — Verbatim Transcription

in closure inner function has access to the variables of its outer function.

eg ->
function outer (outerVariable) {
    return function inner() {
        console.log(outerVariable);
    }
}

### Simple Explanation — English

A closure happens when an inner function remembers and can access variables from its outer function even after the outer function has finished. Closures are commonly used for data privacy, function factories, callbacks, and maintaining state between calls.

### Simple Explanation — Hindi

Closure mein inner function apne outer function ke variables ko yaad rakhta hai aur access kar sakta hai, even jab outer function execute ho chuka ho. Closures private data, callbacks aur state maintain karne ke liye useful hote hain.

---

## 8. How do you pass data from a child component to a parent component?

### My PDF Answer — Verbatim Transcription

parent.jsx

import { useState } from 'react'
import child from './child'

const Parent = () => {
    const [a, setA] = useState("parent")
    return (
        <>
            I am parent
            <Child x={a} setX={setA} />
        </>
    )
}

export default Parent

child.jsx

const child = (props) => {
    return (
        <>
            <p>I am child</p>
            <button onClick={() => props.setX("parent")}>Click</button>
        </>
    )
}

export default child

-> set state ko pass kar rahe hai, child se parent mein change kar rahe hai.

### Simple Explanation — English

React mein child directly parent ka state change nahi karta. Parent ek callback function, usually a state setter, child ko prop ke through pass karta hai. Child us callback ko call karta hai aur required data parent tak bhej deta hai. This is a common form of upward communication.

### Simple Explanation — Hindi

Child component parent ka state direct change nahi karta. Parent ek function child ko prop ke through deta hai. Child us function ko call karta hai aur data parent ko bhej deta hai. React mein child-to-parent communication ke liye callback props common approach hain.

---

## 9. What is the difference between `useState()` and `useReducer()`?

### My PDF Answer — Verbatim Transcription

useState() -> use for Primitive type = number, string, Boolean
    -> manage one or two State Variable
    -> use for local component state

useReducer() -> use for object and arrays
    -> manage multiple states (loading, error, data)
    -> use for global state management.

### Simple Explanation — English

`useState` is usually simple for local state, especially when updates are straightforward. `useReducer` is useful when multiple related values change through defined actions or when state transition logic becomes complex. For global state, a dedicated state-management solution is often used; `useReducer` itself does not automatically make state global.

### Simple Explanation — Hindi

`useState` simple aur local state ke liye useful hai. `useReducer` tab useful hota hai jab multiple related states aur complex update logic ho. `useReducer` khud se global state nahi banata; global state ke liye Context ya state-management library ki zarurat ho sakti hai.

---

## 10. What is the difference between a dev dependency and a normal dependency?

### My PDF Answer — Verbatim Transcription

Dev Dependency -> Required only during development.
eg -> Eslint, Jest, Babble, Webpack etc.

Normal dependency -> Require at runtime in production
eg -> Redux, axios, express etc.

### Simple Explanation — English

A development dependency is mainly needed while developing, testing, linting, or building the application. A normal/runtime dependency is needed by the application when it runs in production. In npm, these are commonly stored under `devDependencies` and `dependencies` respectively.

### Simple Explanation — Hindi

Dev dependency development, testing aur build ke time chahiye hoti hai, jaise ESLint, Jest ya Webpack. Normal dependency application ko runtime par chahiye hoti hai, jaise Axios ya Redux. `package.json` mein inki categories alag hoti hain.

---

## 11. What is the difference between `package.json` and `package-lock.json`?

### My PDF Answer — Verbatim Transcription

package.json -> Store metadata of our project (basic version rakhta hai jo project ko chahiye)

Package.lock.json -> jitna v naya version ka library install karte hai wo sab package.lock.json me ja k Store hota hai.

### Simple Explanation — English

`package.json` describes the project, its scripts, and declared dependency ranges. `package-lock.json` records the resolved dependency tree and exact versions that were installed, along with related metadata. This helps installations stay consistent across environments.

### Simple Explanation — Hindi

`package.json` project ki basic information, scripts aur required dependencies ko describe karta hai. `package-lock.json` installed dependency tree ke exact resolved versions ko lock karta hai. Isse different machines par consistent installation milti hai.

---

## 12. What is ESLint?

### My PDF Answer — Verbatim Transcription

code karte time code me gadbadi hoga to wo batata hai. (learning)

### Simple Explanation — English

ESLint is a static-analysis tool that checks JavaScript and related code for syntax problems, risky patterns, style issues, and project-specific rules. It helps developers catch problems early and keep code consistent.

### Simple Explanation — Hindi

ESLint code ko analyze karke common mistakes, risky patterns aur coding-rule violations batata hai. Isse code quality improve hoti hai aur mistakes development ke time hi pakdi ja sakti hain.

---

## 13. Canvas vs SVG.

### My PDF Answer — Verbatim Transcription

SVG is used for describing 2D graphic in XML.

-> canvas draws 2D graphics with JS.

### Simple Explanation — English

SVG is a vector-based graphics format where shapes are represented as DOM elements. Canvas is a drawing surface where JavaScript draws pixels. SVG is often convenient for scalable interactive diagrams, while Canvas is useful for frequent drawing and pixel-oriented graphics.

### Simple Explanation — Hindi

SVG mein 2D graphics shapes/elements ke roop mein represent hote hain aur ye vector based hota hai. Canvas ek drawing surface hota hai jahan JavaScript se graphics draw ki jati hain. SVG interactive diagrams ke liye aur Canvas frequent drawing ke liye useful ho sakta hai.

---

## 14. What is CSS specificity?

### My PDF Answer — Verbatim Transcription

ek element me 2...3 css laga hua hai to kon sa apply hoga. (external sheet word is lighter)

* priority -> inline -> internal -> external css

Ans -> <div>
    <p class = "red-p">Text...</p>
</div>

p {
    color: green;
}

#red.p {
    color:red;
}

div.red-p {
    color:blue;
}

-> 10000 point to !important.
-> 1000 to inline
-> 100 to id
-> 10 to class, attribute or pseudo-class
-> 1 for element selector & pseudo element
-> 0 for universal selector.

### Simple Explanation — English

CSS specificity is the rule used to decide which CSS selector wins when multiple rules apply to the same element. In general, inline styles have higher specificity than IDs, IDs are higher than classes/attributes/pseudo-classes, and those are higher than element selectors. `!important` changes the priority behavior and should be used carefully.

### Simple Explanation — Hindi

CSS specificity decide karta hai ki same element par multiple CSS rules hone par kaunsa rule apply hoga. General order mein inline style, ID, class/attribute/pseudo-class aur element selector ki specificity alag hoti hai. `!important` bahut high priority deta hai, lekin ise unnecessary use nahi karna chahiye.

---

## 15. What is the difference between Promises and `async/await`?

### My PDF Answer — Verbatim Transcription

both are useful tools for asynchronous programming.
• promises are suitable for simple asynchronous chains.
• async await preferred for more complex asynchronous code.
    -> syntax is clean.

### Simple Explanation — English

Promises and `async/await` are both ways to handle asynchronous operations. `async/await` is syntax built on top of Promises and often makes sequential asynchronous code easier to read. Promises can be useful for chaining, composition, and direct `.then()`/`.catch()` handling.

### Simple Explanation — Hindi

Promises aur `async/await` dono asynchronous programming ke liye use hote hain. `async/await` Promises ke upar based syntax hai aur sequential async code ko readable bana deta hai. Promises mein `.then()` aur `.catch()` ke through chaining bhi ki ja sakti hai.

---

## 16. What is a prototype in JavaScript?

### My PDF Answer — Verbatim Transcription

in js, prototype is a mechanism by which object can inherit properties and methods from other object.

* same object ka internal property hota hai jisko humlog prototype bolte hai.

-> inherited property or method.

or ye properties or methods ko humlog console.log me dekh sakte hai.

### Simple Explanation — English

A prototype is an object that another object can use as a source for inherited properties and methods. JavaScript uses prototype-based inheritance. When a property is not found directly on an object, JavaScript can look along its prototype chain.

### Simple Explanation — Hindi

Prototype ek object hota hai jahan se doosra object properties aur methods inherit kar sakta hai. JavaScript prototype chain use karta hai. Agar property object ke andar directly nahi milti, to JavaScript prototype chain mein search kar sakta hai.

---

## 17. What is memoization in JavaScript?

### My PDF Answer — Verbatim Transcription

memoization is an optimization technique that store the result of expensive function calls and return the cached result when the same input occurs again. it helps improve performance by avoiding redundant computation.

### Simple Explanation — English

Memoization means caching a function's result so repeated calls with the same relevant input can reuse the previous result. It is useful when a calculation is expensive and the inputs are repeated.

### Simple Explanation — Hindi

Memoization mein expensive function ke result ko cache kiya jata hai. Agar same input dobara aaye, to calculation ko repeat karne ke bajay cached result return kiya ja sakta hai. Isse performance improve ho sakti hai.

---

## 18. What is event bubbling in JavaScript?

### My PDF Answer — Verbatim Transcription

Event bubbling is the process in js where an event triggered on a child element propagate up to the DOM tree.

* ek parent div hai or uske andar child div hai, or child ke andar ek button hai or jab hamlog wo button me click karte hai to uska Sara parent div trigger ho jata hai, isi ko Event bubbling bolte hai.

### Simple Explanation — English

Event bubbling means an event starts at the target element and then propagates upward through its ancestors. For example, a button click can also trigger a parent click handler unless propagation is stopped.

### Simple Explanation — Hindi

Event bubbling mein child element par hua event parent elements ki taraf propagate hota hai. Jaise button ke click ke saath uske parent ka click handler bhi run ho sakta hai. Zarurat ho to `stopPropagation()` se bubbling roki ja sakti hai.

---

## 19. What is an Error Boundary in React?

### My PDF Answer — Verbatim Transcription

agar Application me koi error data hai to pura app crash ho jata hai. magar Error Boundary use karne se jis with component crash hoga jisme error aaya hai.

### Simple Explanation — English

An Error Boundary catches certain rendering and lifecycle errors in a child component tree and shows fallback UI instead of allowing that part of the UI to break the whole application. It is commonly used around routes or major feature sections.

### Simple Explanation — Hindi

Error Boundary child component tree ke certain rendering errors ko catch karta hai aur fallback UI show karta hai. Isse ek feature ke fail hone par poori application UI crash hone se bach sakti hai.

---

## 20. Explain the `every()` and `some()` methods.

### My PDF Answer — Verbatim Transcription

every() -> same condition check or ek baar v wo true ho jayega to return karega true, nhi to return karega false.

some() -> koi condition ko return karega, agar condition true ho jayega to return karega true nahi to false.

tabhi every and some isliye dono nahi to false.

### Simple Explanation — English

`every()` checks whether all elements satisfy a condition. It returns `true` only when every tested element passes.

`some()` checks whether at least one element satisfies the condition. It returns `true` as soon as one matching element is found.

### Simple Explanation — Hindi

`every()` tab `true` deta hai jab sabhi elements condition ko satisfy karte hain. Agar ek bhi fail ho jaye to `false` milta hai.

`some()` tab `true` deta hai jab kam se kam ek element condition satisfy kare. Agar koi bhi match na kare to `false` milta hai.

---

## 21. What are the new features introduced in ES6?

### My PDF Answer — Verbatim Transcription

arrow-function
• template literals
• array Destructuring
• Spread operator
• promises (asynchronous programming)
• modules (import/export)
• map method

### Simple Explanation — English

ES6 introduced many major JavaScript features such as arrow functions, template literals, destructuring, spread/rest syntax, Promises, modules, `let`/`const`, classes, and more. These features made JavaScript syntax and application development more expressive.

### Simple Explanation — Hindi

ES6 ne JavaScript mein kaafi important features introduce kiye, jaise arrow functions, template literals, destructuring, spread/rest, Promises, modules, `let`/`const` aur classes. In features ne code ko modern aur readable banaya.

---

## 22. What is currying in JavaScript?

### My PDF Answer — Verbatim Transcription

maan lo a function hai jo 3 argument le raha hai or hamlog chahte hai ki jab tak teeno argument nahi aa jata tab tak wo function na chale. (or 3no argument API se aa raha hai)

-> to iske liye hamlog function currying ka use karenge with closure.

eg ->
function add (a,b,c) {
    return a+b+c;
}
console.log(add(2,5,10)); -> normal example.

currying example

function add(a) {
    return function(b) {
        return function(c) {
            return a+b+c;
        }
    }
}

console.log(add(2)(3)(10));

### Simple Explanation — English

Currying converts a function that normally accepts multiple arguments into a sequence of functions, where each function receives one argument and returns another function until all required arguments are available. It is often implemented using closures.

### Simple Explanation — Hindi

Currying mein multiple arguments lene wale function ko functions ki chain mein convert kiya jata hai. Har function ek argument leta hai aur next function return karta hai. Jab saare arguments mil jate hain tab final result return hota hai.

---

## 23. What is the `<iframe>` tag in HTML?

### My PDF Answer — Verbatim Transcription

the <figure> tag in HTML is used to group media element such as images, illustration, video or code snippets with their associated captions.

### Simple Explanation — English

The PDF answer itself says `<figure>`, while the question asks about `<iframe>`. A `<figure>` element groups self-contained media or content with an optional caption. An `<iframe>` is a different HTML element used to embed another browsing context such as another page.

### Simple Explanation — Hindi

PDF mein answer `<figure>` tag ke baare mein hai, jabki question `<iframe>` ke baare mein poochta hai. `<figure>` image, illustration, video ya code snippet ko caption ke saath group karta hai. `<iframe>` ka use kisi doosre page/browsing context ko embed karne ke liye hota hai.

---

## 24. What are some of the advantages of MongoDB?

### My PDF Answer — Verbatim Transcription

Flexible Schema - unlike relational database (SQL), mongoDB does not require a fixed Schema.

• mongoDB has inbuilt Support for data partitioning (sharding)
• mongoDB is very easy to Scale and Scale down.

### Simple Explanation — English

MongoDB uses a flexible document model, so documents in the same collection can evolve without a rigid relational table schema. It also supports horizontal scaling through sharding and can scale resources according to application needs.

### Simple Explanation — Hindi

MongoDB ka schema flexible hota hai, isliye relational database ki tarah rigid table structure maintain karna zaroori nahi hota. MongoDB sharding support karta hai aur large applications ko horizontally scale karne mein help kar sakta hai.

---

## 25. When should you use MongoDB?

### My PDF Answer — Verbatim Transcription

• When you need a flexible schema
• When you handle large-scale Data & High Traffic.
• When Speed and Performance are crucial

### Simple Explanation — English

MongoDB can be a good fit when application data changes structure frequently, when a document model maps naturally to the data, or when horizontal scaling and high-throughput workloads are important. The final choice should still depend on query patterns and consistency requirements.

### Simple Explanation — Hindi

MongoDB tab useful ho sakta hai jab schema frequently change hota ho, data document form mein naturally fit hota ho, ya large-scale/high-traffic workload ho. Database choose karte waqt query pattern aur consistency requirements bhi dekhni chahiye.

---

## 26. What are the data types in MongoDB?

### My PDF Answer — Verbatim Transcription

String
-> number
-> Boolean
-> array
-> Object
-> null

-> ObjectId
-> Binary Data
-> RegEx (regular expression)
-> timeStamp
-> minkey/maxkey

-> Represent lowest/highest possible Value.

### Simple Explanation — English

MongoDB supports many BSON data types, including strings, numbers, booleans, arrays, embedded documents, null, ObjectId, binary data, regular expressions, dates/timestamps, and special MinKey/MaxKey values.

### Simple Explanation — Hindi

MongoDB mein String, Number, Boolean, Array, Object, Null, ObjectId, Binary Data, Regex, Date/Timestamp aur MinKey/MaxKey jaise BSON types hote hain. Ye alag-alag data requirements ke liye use hote hain.

---

## 27. How do you perform queries in MongoDB?

### My PDF Answer — Verbatim Transcription

Semnory table

-> db.collection.find() -> find all documents

-> db.user.find({ $name: abc }) -> find with filter

-> .sort({ field: 1 }) -> sorting

-> .limit(n) & .skip(n) -> limit & skip

### Simple Explanation — English

MongoDB queries are usually performed through collection methods such as `find()`. You can filter results using a query object, sort them, limit the number of results, and skip a number of documents for pagination-like behavior.

### Simple Explanation — Hindi

MongoDB mein `find()` se documents search kiye ja sakte hain. Query object ke through filter laga sakte hain, `sort()` se sorting, `limit()` se result count aur `skip()` se starting documents skip kar sakte hain.

---

## 28. How do you delete a document in MongoDB?

### My PDF Answer — Verbatim Transcription

db.user.deleteOne({ age:25 }) -> first matching document
user.deleteMany({ city:'ny' }) -> all matching doc
user.deleteMany({}) -> delet all document in a collection
db.user.drop() -> Entire Collection.

### Simple Explanation — English

`deleteOne()` removes one matching document, `deleteMany()` removes all documents matching the filter, and `drop()` removes the entire collection. A delete operation should always use a deliberate filter because it can permanently remove data.

### Simple Explanation — Hindi

`deleteOne()` ek matching document delete karta hai. `deleteMany()` saare matching documents delete karta hai. `deleteMany({})` collection ke saare documents remove kar sakta hai, aur `drop()` poori collection delete kar deta hai. Delete operation bahut carefully use karna chahiye.

---

## 29. How do you update a document in MongoDB?

### My PDF Answer — Verbatim Transcription

updateOne() -> update the first matching document
updateMany() -> update all matching Document
replaceOne() -> Replace an entire document
findOneAndUpdate() -> Return the updated document

### Simple Explanation — English

`updateOne()` changes the first document matching the filter. `updateMany()` changes all matching documents. `replaceOne()` replaces the complete document, while `findOneAndUpdate()` finds a document, updates it, and can return the document depending on options.

### Simple Explanation — Hindi

`updateOne()` first matching document ko update karta hai. `updateMany()` saare matching documents ko update karta hai. `replaceOne()` poora document replace karta hai, aur `findOneAndUpdate()` document ko update karke updated result return kar sakta hai.

---

## 30. How do you add data in MongoDB?

### My PDF Answer — Verbatim Transcription

insertOne() -> insert a Single Document
insertMany() -> Insert multiple Document.

### Simple Explanation — English

Use `insertOne()` when you want to add one document and `insertMany()` when you want to add multiple documents in one operation.

### Simple Explanation — Hindi

Ek document add karne ke liye `insertOne()` aur multiple documents add karne ke liye `insertMany()` use karte hain.

---

## 31. What are some features of MongoDB?

### My PDF Answer — Verbatim Transcription

File Storage :- It Supports an easy-to-use protocol for Storing large files and file metadata.

Sharding :- Sharding is the process of Spilling data up across machine.

### Simple Explanation — English

MongoDB supports document storage and also provides GridFS for storing files larger than the normal document size limit. Sharding distributes data across multiple machines so large datasets and traffic can be handled across a cluster.

### Simple Explanation — Hindi

MongoDB document data ke saath large files ke liye GridFS support bhi provide karta hai. Sharding data ko multiple machines par distribute karta hai, jisse large dataset aur high traffic handle karne mein help milti hai.

---

## 32. What are replication and sharding in MongoDB?

### My PDF Answer — Verbatim Transcription

Replication ->
jab client request karta hai or primary data base band hai to hamlog same data ko 2-3 or Server me uska Copy kar ke rakh sakte hai or primary node jab band ho ya bahut busy ho to client ko dusra Server se response bhejte hai.

Sharding / horizontal partition / horizontal Scaling / Scale-out
-> Sharding is a method in mongoDB that Splits data across multiple Servers/machines to handle large data sets and high performance.

### Simple Explanation — English

Replication keeps multiple copies of data through replica-set members, providing redundancy and availability. If the primary becomes unavailable, an eligible secondary can be elected as the new primary.

Sharding distributes data across multiple servers so the database can scale horizontally for large datasets and high traffic.

### Simple Explanation — Hindi

Replication mein same data ki multiple copies replica set members par hoti hain. Agar primary unavailable ho jaye to secondary se new primary elect ho sakta hai.

Sharding mein data ko multiple servers/machines par distribute kiya jata hai. Isse large dataset ko horizontally scale karna easier hota hai.

---

## 33. What is MongoDB Shell?

### My PDF Answer — Verbatim Transcription

Shell refers to a Command-Line interface (CLI) that allows users to interact with an operating System using text based Command.

-> It allow users to query, insert, update and delete data in mongoDB Collection using CLI (Command line interface)

### Simple Explanation — English

MongoDB Shell is a command-line environment used to interact with MongoDB. Developers and administrators can run database commands, inspect collections, query data, insert documents, update them, and delete them from the shell.

### Simple Explanation — Hindi

MongoDB Shell ek command-line interface hai jahan se MongoDB ko commands ke through access kiya jata hai. Isse query, insert, update aur delete operations perform kar sakte hain.

---

## 34. What is a Document and what is a Collection in MongoDB?

### My PDF Answer — Verbatim Transcription

Document -> a document in mongodb is a single record in a collection in Binary JSON format.

collection -> a collection in mongoDB is a group of related database,
similar to a table in a relational database.

### Simple Explanation — English

A MongoDB document is one record represented using BSON. A collection is a group of related documents and is roughly comparable to a table in a relational database.

### Simple Explanation — Hindi

MongoDB mein document ek single record hota hai jo BSON format mein store hota hai. Collection related documents ka group hoti hai. Relational database mein collection ko roughly table ke saath compare kar sakte hain.

---

## 35. What are WebSocket and Socket.IO?

### My PDF Answer — Verbatim Transcription

webSocket is a communication protocol that provides full-duplex, bidirectional communication b/w client and a server over a Single persistence Connection.

Unlike HTTP, which follows a request -> response model. webSocket allow Real time data transfer with low latency and Reduced overhead.

eg -> chat application,
-> live notification
-> online multiplayer games

Socket.io
=> “Socket.io is a javascript library build on top of websocket that provides additional features like automatic Reconnection,
fallbacks to HTTP polling and broadcasting, it Simplifies Real-time Communication b/w client and server.

### Simple Explanation — English

WebSocket is a protocol that creates a persistent two-way connection between client and server, which is useful for real-time communication.

Socket.IO is a library that can use WebSocket and provides additional features such as connection management, fallback transports, rooms, broadcasting, and easier event-based APIs.

### Simple Explanation — Hindi

WebSocket client aur server ke beech persistent two-way connection provide karta hai. Ye chat, live notifications aur games jaise real-time applications ke liye useful hai.

Socket.IO WebSocket ke upar additional features provide karne wali library hai, jaise reconnection, rooms, broadcasting aur convenient event-based communication.

---

## 36. How do you update a component every second?

### My PDF Answer — Verbatim Transcription

(setInterval in useEffect)

### Simple Explanation — English

Use `setInterval` inside an Effect and update React state on each interval. The interval should be cleared in the Effect cleanup so it does not continue after the component is removed.

### Simple Explanation — Hindi

`useEffect` ke andar `setInterval` use karke har second state update kar sakte hain. Cleanup mein `clearInterval` use karna zaroori hai taaki component remove hone ke baad timer chalta na rahe.

---

## 37. What is `useRef()` and what is the difference between `useState()` and `useRef()`?

### My PDF Answer — Verbatim Transcription

Refs (short for Reference) in React provide a way to access and interact with DOM element by React Components directly without causing Re-render. they are mainly used for:
• manipulating the DOM Directly (eg -> focusing an input field)
• Storing values persistently with causing Re-render
• Accessing child component methods or properties.

Difference b/w useState and useRef()
useState -> triggers a re-render when updated.
useRef -> Store values without triggering a Re-render
          - manipulating the DOM Directly

### Simple Explanation — English

`useRef()` returns a persistent mutable ref object. Updating `ref.current` does not normally trigger a re-render.

`useState()` is for data that affects the rendered UI, so calling its setter schedules a new render. A ref is useful for DOM references, timer IDs, previous values, or other mutable values that should survive renders without driving the UI.

### Simple Explanation — Hindi

`useState()` UI ko affect karne wale data ke liye hota hai. Setter call karne par re-render schedule hota hai.

`useRef()` aisi value ko persist karta hai jo renders ke beech bani rahe lekin value change hone par re-render na ho. DOM reference, timer ID aur previous value iske common examples hain.

---

## 38. What is Jest?

### My PDF Answer — Verbatim Transcription

jest a javaScript testing framework development by facebook, primarily used for test React application. it is fast, easy to use and work look well with React, node.js and js project.

### Simple Explanation — English

Jest is a JavaScript testing framework used to write and run automated tests. It is commonly used for unit and integration testing in JavaScript and React projects and provides features such as assertions, mocks, spies, and coverage support.

### Simple Explanation — Hindi

Jest JavaScript testing framework hai jo automated tests likhne aur run karne ke liye use hota hai. React, Node.js aur JavaScript projects mein iska use common hai.

---

## 39. Is React a server-side library or a client-side library?

### My PDF Answer — Verbatim Transcription

React is a primarily a client-side library, but it supports Server Side Rendering (SSR) using framework like Next.js.

### Simple Explanation — English

React is primarily a UI library and can be used for client-side rendering. It can also participate in server rendering architectures through frameworks and runtimes such as Next.js. So React is not limited to only one rendering environment.

### Simple Explanation — Hindi

React mainly UI library hai aur client-side rendering mein commonly use hoti hai. Lekin Next.js jaise frameworks ke through server-side rendering bhi ki ja sakti hai. Isliye React ko sirf ek hi side tak limited nahi samajhna chahiye.

---

## 40. What are React Server Components (RSC)?

### My PDF Answer — Verbatim Transcription

React Server Components are a feature in React 18+ that allow Components to run Only on the server, reducing javaScript sent to the client.

They improve performance, reduce bundle size and enable direct data fetching without useEffect().

Used in: Next 13+ (app Router)

Benefits: faster page load, better Seo, Smaller js size

### Simple Explanation — English

React Server Components let supported frameworks execute certain components on the server so their implementation does not need to become client-side JavaScript. They can access server-side resources and reduce the amount of code sent to the browser.

RSC is different from SSR: SSR renders HTML on the server, while RSC defines where component logic runs.

### Simple Explanation — Hindi

React Server Components mein suitable components server par run ho sakte hain aur unka JavaScript browser ko client execution ke liye bhejna zaroori nahi hota. Isse bundle size aur client-side work reduce ho sakta hai.

RSC aur SSR same nahi hain. SSR server par HTML generate karta hai, jabki RSC component execution ko server/client boundaries ke through organize karta hai.

---

## 41. What is the difference between `if-else` and the ternary operator?

### My PDF Answer — Verbatim Transcription

both are same but
• use if-else for complex conditions
• use ternary operator for simple, concise expression.

### Simple Explanation — English

Both can choose between alternatives based on a condition, but they are used differently in code structure. `if-else` is easier for complex branching and multiple statements. The ternary operator is convenient for short expressions, especially inside JSX.

### Simple Explanation — Hindi

Dono condition ke basis par decision le sakte hain. Complex logic aur multiple statements ke liye `if-else` clearer hota hai. Short expression, especially JSX ke andar, ternary operator convenient hota hai.

---

## 42. Deep copy vs shallow/nested copy.

### My PDF Answer — Verbatim Transcription

Shallow Copy in nested object case will modify the parent object property value, if cloned object property value is changed.

But deep copy will not modify the parent object property value.

* agar koi nested object hai or uska properties ko Shallow Copy karte hai or koi property ko change karte hai to parent me v change ho jayega.

* magar deep copy me hamlog kisi nested object ke property ko jitna bhi variable me change karenge, parent me change nahi hoga.

### Simple Explanation — English

A shallow copy creates a new outer object but keeps references to nested objects. So changing a nested object through the copied structure can also affect the original.

A deep copy duplicates nested data as well, so changing nested properties in the copy does not affect the original object, assuming the deep-copy method correctly handles the data types involved.

### Simple Explanation — Hindi

Shallow copy mein outer object naya hota hai, lekin nested objects ke references same reh sakte hain. Isliye nested property change karne par original object bhi affect ho sakta hai.

Deep copy nested data ko bhi separate copy banata hai, isliye copy ke nested data mein change karne se original normally affect nahi hota.

---

## 43. Explain callbacks, Promises, and `async/await`.

### My PDF Answer — Verbatim Transcription

Sabse pehle asynchronous code ko handle karne ke liye callbacks use karte the magar usme 2 problems thi:
1) usme error handling ka feature nahi tha.
2) call hell ho jata tha.

Promises me magar ye dono ka solution hai.
isme error handling hai or code readable v hai, as compared to callbacks(). magar isme promise chaining ban jata hai .then .then kar ke.

magar async await me koi v .then nahi hota or promise chaining nahi hota hai. matlab iska Syntax or readability accha hai.

### Simple Explanation — English

A callback is a function passed to another function to be executed later. Promises represent the eventual result of an asynchronous operation and provide structured success/error handling. `async/await` is syntax built on Promises that makes asynchronous code read more like synchronous code.

Callbacks can become difficult when many operations are nested. Promise chains improve structure, while `async/await` usually makes sequential flows easier to read.

### Simple Explanation — Hindi

Callback mein ek function ko doosre function ke andar later execute karne ke liye pass karte hain. Promises asynchronous operation ka future result represent karte hain aur error handling ko structure karte hain. `async/await` Promises ke upar based readable syntax hai.

Bahut saare nested callbacks se callback hell ho sakta hai. Promise chaining structure improve karti hai, aur `async/await` sequential async code ko aur readable bana deta hai.

---

## 44. What is the difference between `document.getElementById()` and `document.querySelectorAll()`?

### My PDF Answer — Verbatim Transcription

only select element by class

allow more complex selectors eg - id, class, div.class, ul>li

### Simple Explanation — English

`getElementById()` is specialized for finding an element by its unique `id`. `querySelectorAll()` accepts CSS selectors and can return all matching elements. So `querySelectorAll()` is more flexible, while `getElementById()` is direct and simple for an ID lookup.

### Simple Explanation — Hindi

`getElementById()` sirf specific ID wale element ko find karne ke liye hota hai. `querySelectorAll()` CSS selector use karta hai aur multiple matching elements return kar sakta hai. Isliye `querySelectorAll()` more flexible hai.

---

## 45. What is `setInterval()`?

### My PDF Answer — Verbatim Transcription

SetInterval is used to run a piece of code again and again after certain period of time.

eg ->
function abc() {
    console.log("abc");
}
setInterval(abc,2000);

### Simple Explanation — English

`setInterval()` schedules a function to run repeatedly after a specified delay. It continues until the interval is cancelled with `clearInterval()`. In React, intervals should usually be cleaned up when the component unmounts.

### Simple Explanation — Hindi

`setInterval()` kisi function ko fixed time gap ke baad repeatedly run karta hai. Ye tab tak chalta hai jab tak `clearInterval()` se stop na kiya jaye. React mein component unmount hone par interval cleanup karna chahiye.

---

## 46. What is single-threaded and multi-threaded execution in JavaScript?

### My PDF Answer — Verbatim Transcription

JS runs on a Single-thread, meaning one task execute at a time
-> In multi-thread - Runs multiple task in parallel.

JS is a Single-threaded by default but can simulate multi-threading with asynchronous code and achieve true multi-threading using web workers.

### Simple Explanation — English

Normal JavaScript execution on the browser's main thread is single-threaded, so one JavaScript execution path runs at a time. Web APIs and mechanisms such as Web Workers can move certain work to another thread, allowing CPU-heavy tasks to run outside the main UI thread.

### Simple Explanation — Hindi

Browser mein normal JavaScript execution main thread par single-threaded hota hai. Ek time par main JS execution path ek task process karta hai. Web Workers ke through heavy CPU work ko separate thread par run kiya ja sakta hai, jisse UI zyada responsive reh sakti hai.

---

## 47. DOM vs BOM.

### My PDF Answer — Verbatim Transcription

JS interact with web pages using two key models:

1) DOM (Document object model)
    - manages the content and structure of a web page.

2) BOM (Browser object model)
    - manages the browser window and features
      (like alerts, history and locations)

### Simple Explanation — English

The DOM represents the document and its elements, so JavaScript can read or change page content and structure. The BOM represents browser-level objects and features such as the window, history, location, and browser dialogs.

### Simple Explanation — Hindi

DOM web page ke content aur structure ko represent karta hai. Iske through elements aur page content ke saath interact kar sakte hain.

BOM browser window aur browser-related features jaise `history`, `location` aur dialogs ko represent karta hai.

---

## 48. HTTP vs HTTPS.

### My PDF Answer — Verbatim Transcription

Both http and https is are protocols used for Communication b/w web browser and Server.

but http is less Secure and not encrypted.
and https is Secured and encrypted.

### Simple Explanation — English

HTTP transfers web data without TLS encryption. HTTPS is HTTP over a secure TLS connection, which protects data in transit and helps verify the server's identity through certificates.

### Simple Explanation — Hindi

HTTP browser aur server ke beech data transfer karta hai lekin normally encrypted nahi hota. HTTPS TLS encryption use karta hai, isliye data transit mein zyada secure hota hai aur server identity verify karne mein help karta hai.

---

## 49. HTML, CSS, and JavaScript — which one loads first in the browser?

### My PDF Answer — Verbatim Transcription

“Html load first -> provide Structure
CSS -> Style the page (blocking rendering until loaded)
JS -> loads last (best loaded with defer or async to avoid blocking.

### Simple Explanation — English

HTML provides the initial document structure. CSS is loaded to determine presentation and can block rendering while required styles are being processed. JavaScript execution depends on how scripts are included, and `defer`/`async` can change when scripts execute relative to parsing.

### Simple Explanation — Hindi

HTML page ka basic structure provide karta hai. CSS page ko style karne ke liye load hoti hai aur rendering ko affect kar sakti hai. JavaScript ka loading/execution script attributes par depend karta hai; `defer` aur `async` blocking reduce karne mein help kar sakte hain.

---

## 50. What are functions in JavaScript?

### My PDF Answer — Verbatim Transcription

a function in JS is a reusable block of code that perform a specific task. functions helps organize, reuse and manage code efficiently.

### Simple Explanation — English

A function is a reusable block of JavaScript code that performs a particular task. Functions can receive parameters, return values, and be passed to other functions. They are one of the main ways to organize reusable logic.

### Simple Explanation — Hindi

Function JavaScript mein reusable code ka block hota hai jo ek specific task perform karta hai. Function parameters le sakta hai, value return kar sakta hai aur doosre function ko pass bhi kiya ja sakta hai. Isse code organized aur reusable banta hai.

---

## ✅ Batch Complete

**Questions covered:** 1–50

**Format:**
- My PDF Answer — Verbatim Transcription
- Simple Explanation — English
- Simple Explanation — Hindi

**Note:** Where the handwritten PDF contains an answer that does not exactly match the wording of the question, the PDF answer has been retained as written, and the mismatch is explained separately rather than silently correcting it.