# React.js Interview Questions — 300 Genuine Questions for 3 Years Experience

## 1. React Fundamentals & Core Concepts

1. What is React, and what problems does it solve?
2. Why is React described as a library rather than a full framework?
3. What are the main concepts behind React's component-based architecture?
4. What is JSX, and why does React use it?
5. How is JSX transformed into JavaScript?
6. What is a React element?
7. What is the difference between a React element and a React component?
8. What is a functional component?
9. Why are functional components preferred in modern React development?
10. What is the difference between props and state?
11. Are props mutable? Why or why not?
12. Why should state be treated as immutable?
13. What causes a React component to render?
14. What happens during the render phase?
15. What happens during the commit phase?
16. What is reconciliation in React?
17. What is the virtual DOM, and what problem does it address?
18. How does React decide which parts of the UI need to change?
19. What is the role of keys when rendering lists?
20. Why is using the array index as a key sometimes problematic?
21. What happens when a key changes between renders?
22. How does React preserve or reset component state?
23. How does component position in the render tree affect state preservation?
24. What is conditional rendering in React?
25. What is the difference between rendering `null`, `false`, and an empty fragment?
26. How do fragments work in React?
27. What is the difference between `<>...</>` and `React.Fragment`?
28. What are children props in React?
29. How do you pass components as props?
30. What is composition in React, and why is it important?

## 2. Components, Props & Data Flow

31. How does data flow between parent and child components in React?
32. How do you pass data from a child component to its parent?
33. What is prop drilling, and when does it become a problem?
34. What are the common alternatives to prop drilling?
35. When should you lift state up?
36. What is the difference between local state and shared state?
37. How do you decide which component should own a piece of state?
38. What is a controlled component?
39. What is an uncontrolled component?
40. When would you choose a controlled input over an uncontrolled input?
41. How do `defaultValue` and `value` differ in form inputs?
42. What causes an uncontrolled-to-controlled warning in React?
43. How would you structure props for a reusable component?
44. How do you avoid passing too many unrelated props to a component?
45. What is prop spreading, and what risks can it introduce?
46. How can you provide default behavior for optional props?
47. What are compound components in React?
48. When would you use the render props pattern?
49. How does component composition compare with inheritance in React?
50. How would you design a reusable modal component used by multiple features?
51. How would you design a reusable table component with sorting and pagination?
52. How would you pass callbacks safely through multiple component levels?
53. How can a child component expose an imperative action to a parent?
54. When is it appropriate to use a callback prop instead of context?
55. How would you prevent a presentational component from knowing business logic?
56. How do you separate container logic from UI logic in a React application?
57. How would you design component boundaries in a large React feature?
58. What makes a React component reusable rather than tightly coupled?
59. How do you prevent a shared component from becoming a “god component”?
60. In a real project, how do you decide whether to create a new component or keep logic in an existing one?

## 3. State, Updates & Rendering Behavior

61. How does `useState` work at a high level?
62. Why does calling a state setter not immediately change the current render's state value?
63. What is a functional state update, and when should you use one?
64. What happens when you call a state setter multiple times in the same event handler?
65. What is state batching in React?
66. How does automatic batching affect updates from promises, timers, and native events?
67. Why can `setCount(count + 1)` produce an unexpected result when called multiple times?
68. How would you correctly increment state several times based on the previous value?
69. What is lazy initialization in `useState`?
70. When should you use a lazy initializer for state?
71. How do you update nested objects in state without mutating them?
72. How do you update an item inside an array stored in state?
73. What is derived state, and why is duplicated derived state risky?
74. When should a value be calculated during render instead of stored in state?
75. What problems can arise from storing redundant state?
76. How do you reset a component's state when a prop changes?
77. When should you use a changing `key` to reset state?
78. What is the difference between resetting state and synchronizing state?
79. Why should state updates be based on previous state when updates depend on previous values?
80. How does React determine whether a state update results in a meaningful change?
81. What does referential equality mean in React rendering?
82. Why can mutating an object in state prevent the UI from updating as expected?
83. What causes unnecessary re-renders in a component tree?
84. How would you debug a component that re-renders too often?
85. What is Strict Mode, and how can it affect rendering in development?
86. Why might an Effect appear to run twice in development?
87. How does React preserve state when a component moves within the tree?
88. How does changing a component type affect its state?
89. What happens to state when a component is conditionally removed and added again?
90. How would you model complex UI state without creating many unrelated `useState` calls?

## 4. Hooks — Core & Essential

91. What are React Hooks, and why were they introduced?
92. What are the Rules of Hooks?
93. Why can Hooks not be called inside conditions or loops?
94. Why can Hooks not be called inside ordinary nested functions?
95. What problem does `useEffect` solve?
96. When should you use `useEffect`?
97. When should you avoid using `useEffect`?
98. What is the difference between an Effect and an event handler?
99. What does the dependency array of `useEffect` mean?
100. What happens when `useEffect` has no dependency array?
101. What happens when `useEffect` has an empty dependency array?
102. What happens when one of an Effect's dependencies changes?
103. What is the cleanup function of `useEffect` used for?
104. When does React run an Effect cleanup function?
105. How do you clean up a subscription or event listener in `useEffect`?
106. How do you prevent race conditions in Effects that fetch data?
107. How do stale closures occur inside React Effects?
108. How can you avoid stale values inside asynchronous callbacks?
109. What is `useRef`, and how is it different from `useState`?
110. When should you store a value in a ref instead of state?
111. Does updating a ref trigger a re-render? Why?
112. How can `useRef` be used to access a DOM element?
113. How can `useRef` store an interval or timeout ID?
114. What is `useContext` used for?
115. How does context differ from passing props?
116. What happens to consumers when a context value changes?
117. How can context cause unnecessary re-renders?
118. When should you use `useReducer` instead of `useState`?
119. How does `useReducer` work?
120. What makes a reducer function a good reducer for React state management?

## 5. Hooks — Advanced & Custom Hooks

121. What is a custom Hook?
122. What rules must custom Hooks follow?
123. What is the difference between reusing stateful logic and sharing the same state?
124. When should logic be extracted into a custom Hook?
125. How would you build a `useFetch` custom Hook?
126. How would you build a `useDebounce` custom Hook?
127. How would you build a `usePrevious` custom Hook?
128. How would you build a `useLocalStorage` custom Hook?
129. How would you build a `useOnlineStatus` custom Hook?
130. How would you build a reusable `useInterval` Hook correctly?
131. How do custom Hooks handle cleanup?
132. How can a custom Hook accept options without becoming hard to maintain?
133. How do you avoid unnecessary re-runs inside a custom Hook?
134. How would you test a custom Hook?
135. What is `useMemo`, and what problem does it solve?
136. When is `useMemo` useful?
137. When can `useMemo` make code worse rather than better?
138. What is `useCallback`, and what does it memoize?
139. What is the difference between `useMemo` and `useCallback`?
140. Why does `useCallback` matter when passing callbacks to memoized children?
141. What is `React.memo`?
142. How does `React.memo` decide whether to skip a render?
143. When does `React.memo` not provide a benefit?
144. How are `React.memo`, `useMemo`, and `useCallback` commonly used together?
145. What is `useLayoutEffect`, and when would you use it instead of `useEffect`?
146. What is `useInsertionEffect`, and when is it relevant?
147. What is `useId`, and what problem does it solve?
148. When should `useId` not be used as a list key?
149. What is `useSyncExternalStore`, and what kind of problem does it solve?
150. What is `useImperativeHandle`, and when would you use it?

## 6. Effects, Async Work & External Systems

151. Why does React documentation describe Effects as an escape hatch?
152. How do you subscribe to an external system from a component?
153. How do you correctly clean up a WebSocket connection in React?
154. How do you add and remove a browser event listener with `useEffect`?
155. How do you integrate a third-party DOM library into a React component?
156. How do you avoid creating duplicate subscriptions when props change?
157. How would you cancel an in-flight fetch request when a component unmounts?
158. How do `AbortController` and React Effects work together?
159. How would you prevent an older API response from overwriting newer data?
160. How do you handle loading, success, and error states for an API call?
161. How would you retry a failed API request from a React component?
162. How would you implement polling in React without leaking timers?
163. How would you implement a debounced search request?
164. What is the difference between debouncing and throttling in a React UI?
165. How can an Effect accidentally cause an infinite render loop?
166. How can an object or function dependency cause an Effect to run repeatedly?
167. How do you stabilize dependencies used by an Effect?
168. What is the “remove the Effect” approach, and when can it simplify a component?
169. How would you synchronize a React state value with `localStorage`?
170. How would you handle browser-only APIs safely in an SSR application?
171. How would you synchronize document title with component state?
172. How would you manage focus after opening a modal?
173. How would you integrate a non-React chart library into React?
174. What cleanup concerns arise when integrating third-party libraries?
175. How would you handle an API request when the user changes the selected ID quickly?

## 7. Performance & Optimization

176. What are the most common causes of poor React performance?
177. How do you identify unnecessary re-renders?
178. How would you use React DevTools Profiler to diagnose a performance issue?
179. What is memoization in the context of React?
180. When should you use `React.memo`?
181. When should you use `useMemo`?
182. When should you use `useCallback`?
183. Why is adding memoization everywhere usually a bad strategy?
184. How can unstable object props cause child re-renders?
185. How can unstable callback props cause child re-renders?
186. How would you optimize a large list with hundreds or thousands of rows?
187. What is list virtualization?
188. What is code splitting in a React application?
189. How does `React.lazy` work?
190. How does `Suspense` support lazy-loaded components?
191. What is bundle splitting, and why does it matter for initial load performance?
192. How would you reduce the JavaScript bundle size of a React application?
193. How can an oversized context value hurt performance?
194. How can state placement affect rendering performance?
195. Why can colocating state sometimes improve performance?
196. How would you prevent an expensive child from re-rendering when unrelated parent state changes?
197. How would you optimize a search page that becomes slow while typing?
198. What is `useTransition`, and when would you use it?
199. What is `useDeferredValue`, and when would you use it?
200. What is the difference between `useTransition` and `useDeferredValue`?
201. Why can't transitions be used to control text input state?
202. How can Suspense and transitions work together to improve perceived responsiveness?
203. How would you diagnose a memory leak in a React application?
204. What types of browser resources commonly require cleanup in React?
205. How would you measure whether a React optimization actually improved performance?

## 8. React 18/19+, Concurrent Rendering & Modern APIs

206. What changed conceptually with concurrent rendering in modern React?
207. What is an interruptible render?
208. What is a Transition in React?
209. What does `startTransition` do?
210. What does the `isPending` value from `useTransition` represent?
211. How do transitions affect urgent and non-urgent updates?
212. What happens when a transition is interrupted by another update?
213. What is Suspense in modern React?
214. What types of work can suspend in React?
215. What are the important limitations of Suspense for data fetching inside Effects?
216. How does the `use` API relate to Promises and Context?
217. How does `use` differ from ordinary Hooks with respect to where it can be called?
218. What is `useActionState`, and what kind of UI state can it simplify?
219. What is `useOptimistic`, and where is optimistic UI useful?
220. What problem do modern form Actions solve?
221. What is `ViewTransition` in modern React, and where would it be useful?
222. What does `createRoot` do in a modern React application?
223. Why should an SSR application use `hydrateRoot` instead of `createRoot`?
224. What is hydration?
225. What is a hydration mismatch, and what commonly causes it?
226. How would you debug a hydration mismatch?
227. What APIs replaced the legacy `ReactDOM.render` approach?
228. Which legacy React DOM APIs were removed in React 19?
229. What is the React Compiler?
230. How does React Compiler affect the need for manual memoization?

## 9. Forms, Events & User Interaction

231. How do controlled forms work in React?
232. How do you manage multiple form fields without creating repetitive code?
233. How would you validate a form on submit?
234. How would you validate a field while the user is typing?
235. How would you show validation errors without causing excessive renders?
236. How do you handle checkboxes, radio buttons, and select inputs in React?
237. How do you manage a dynamic list of form fields?
238. How would you implement a multi-step form?
239. How would you preserve form data when moving between steps?
240. How would you prevent duplicate form submissions?
241. How would you disable a submit button while an async submission is pending?
242. How would you reset a form after a successful submission?
243. What is synthetic event handling in React?
244. How do React event handlers differ from directly assigning DOM event handlers?
245. What is event propagation?
246. What is event bubbling, and how can you stop it?
247. What is event capturing, and when is it useful?
248. How would you prevent a button click from triggering a parent click handler?
249. How would you handle keyboard events accessibly in a React component?
250. How would you implement click-outside behavior for a dropdown or modal?

## 10. Routing, Code Splitting & Navigation

251. What problem does client-side routing solve in a React SPA?
252. What is the difference between client-side routing and server-side routing?
253. How would you structure routes for a large React application?
254. How do route parameters work in React Router?
255. How do query parameters differ from route parameters?
256. How would you protect authenticated routes?
257. Where should authentication state be managed in a React application?
258. How would you redirect a user after login?
259. How would you preserve the originally requested URL before redirecting to login?
260. How would you handle a 404 route in a React SPA?
261. How would you implement nested routes?
262. What are route-level layouts, and why are they useful?
263. How would you lazy-load route components?
264. How would you show a loading UI during lazy route loading?
265. How would you avoid losing user state unnecessarily during route changes?
266. How would you scroll to the top after navigation?
267. How would you handle deep links when deploying a React SPA?
268. How would you handle browser back and forward navigation correctly?
269. How would you prevent unauthorized users from accessing protected application data even if the route is hidden?
270. How would you design routing for a dashboard with nested sections and dynamic IDs?

## 11. Global State, Redux Toolkit & Server State

271. When does a React application actually need a global state manager?
272. What are the trade-offs between Context and Redux for application state?
273. What is Redux, and what problem does it solve?
274. What are the core concepts of Redux?
275. What is the Redux data flow?
276. What is an action in Redux?
277. What is a reducer in Redux?
278. What is a Redux store?
279. Why must Redux reducers be pure?
280. What is Redux Toolkit, and why is it preferred over writing traditional Redux boilerplate?
281. What is `configureStore`?
282. What is `createSlice`?
283. What is `createAsyncThunk`, and when is it useful?
284. What is the difference between `createAsyncThunk` and RTK Query?
285. What is RTK Query, and what problem does it solve?
286. How does RTK Query cache server data?
287. What is the difference between client state and server state?
288. How would you decide whether a piece of data belongs in Redux, component state, URL state, or server-state cache?
289. What are selectors in Redux?
290. Why should selectors be designed carefully for performance?
291. How does `useSelector` determine whether a component should re-render?
292. How would you avoid unnecessary renders caused by Redux selectors?
293. How would you normalize relational data in Redux state?
294. How would you handle optimistic updates with Redux Toolkit or RTK Query?
295. How would you persist selected Redux state across page refreshes?

## 12. Testing, Architecture, Debugging & Real-World Scenarios

296. How would you test a React component that fetches data from an API?
297. What is the difference between unit testing, integration testing, and end-to-end testing in a React application?
298. How would you debug a production issue where a React page is rendering stale data?
299. How would you design and explain a scalable React application architecture for a 3-year-experience interview?
300. You inherit a slow React dashboard with many API calls, large lists, global state, and frequent re-renders; how would you investigate the problem and decide which changes to make first?
