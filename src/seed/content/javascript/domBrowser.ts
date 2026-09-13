import { SeedQuestion } from '../types';

export const javascriptDomBrowserQuestions: SeedQuestion[] = [
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What are the three phases of DOM Event Propagation, and in what order do they execute?",
    "answer": "The three phases are: 1) Capturing Phase: the event trickles down from the window/document through ancestors to the target element. 2) Target Phase: the event arrives at the target element. 3) Bubbling Phase: the event bubbles up from the target back through ancestors up to document and window.",
    "explanation": "By default, addEventListener listens in the bubbling phase unless the third parameter { capture: true } is specified.",
    "interviewAnswer": "The three phases are: 1) Capturing Phase: the event trickles down from the window/document through ancestors to the target element. 2) Target Phase: the event arrives at the target element. 3) Bubbling Phase: the event bubbles up from the target back through ancestors up to document and window. By default, addEventListener listens in the bubbling phase unless the third parameter { capture: true } is specified.",
    "importantPoints": [
      "The three phases are: 1) Capturing Phase: the event trickles down from the window/document through ancestors to the target element. 2) Target Phase: the event arrives at the target element. 3) Bubbling Phase: the event bubbles up from the target back through ancestors up to document and window.",
      "By default, addEventListener listens in the bubbling phase unless the third parameter { capture: true } is specified."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "dom-browser",
      "event-propagation",
      "bubbling",
      "capturing"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is Event Delegation in the DOM, and why is it superior to attaching event listeners to 1,000 individual list items?",
    "answer": "Event Delegation attaches a single event listener to a common parent element rather than attaching 1,000 listeners to individual children. Leveraging event bubbling, the parent inspects event.target to handle actions. It conserves browser memory, eliminates memory leaks from uncleaned child listeners, and automatically handles dynamically inserted items without re-attaching listeners.",
    "explanation": "One listener replaces thousands of function references in heap memory.",
    "interviewAnswer": "Event Delegation attaches a single event listener to a common parent element rather than attaching 1,000 listeners to individual children. Leveraging event bubbling, the parent inspects event.target to handle actions. It conserves browser memory, eliminates memory leaks from uncleaned child listeners, and automatically handles dynamically inserted items without re-attaching listeners. One listener replaces thousands of function references in heap memory.",
    "importantPoints": [
      "Event Delegation attaches a single event listener to a common parent element rather than attaching 1,000 listeners to individual children. Leveraging event bubbling, the parent inspects event.target to handle actions. It conserves browser memory, eliminates memory leaks from uncleaned child listeners, and automatically handles dynamically inserted items without re-attaching listeners.",
      "One listener replaces thousands of function references in heap memory."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "javascript",
      "dom-browser",
      "event-delegation",
      "performance",
      "memory"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is the difference between event.stopPropagation(), event.stopImmediatePropagation(), and event.preventDefault()?",
    "answer": "1) preventDefault() stops the browser default action (e.g. following a link, submitting a form) without stopping event bubbling. 2) stopPropagation() prevents the event from bubbling up to parent ancestors. 3) stopImmediatePropagation() stops the event from bubbling AND prevents other listeners attached to the SAME element from executing.",
    "explanation": "Knowing when to use stopImmediatePropagation is critical when third-party libraries attach competing handlers.",
    "interviewAnswer": "1) preventDefault() stops the browser default action (e.g. following a link, submitting a form) without stopping event bubbling. 2) stopPropagation() prevents the event from bubbling up to parent ancestors. 3) stopImmediatePropagation() stops the event from bubbling AND prevents other listeners attached to the SAME element from executing. Knowing when to use stopImmediatePropagation is critical when third-party libraries attach competing handlers.",
    "importantPoints": [
      "1) preventDefault() stops the browser default action (e.g. following a link, submitting a form) without stopping event bubbling. 2) stopPropagation() prevents the event from bubbling up to parent ancestors. 3) stopImmediatePropagation() stops the event from bubbling AND prevents other listeners attached to the SAME element from executing.",
      "Knowing when to use stopImmediatePropagation is critical when third-party libraries attach competing handlers."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "stoppropagation",
      "preventdefault",
      "events"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is the difference between a NodeList and an HTMLCollection in the DOM API?",
    "answer": "HTMLCollection is a live collection containing ONLY element nodes (returned by getElementsByTagName or children), which automatically updates when the DOM changes. NodeList (returned by querySelectorAll) is a static snapshot containing any node type (elements, text nodes, comments) that does NOT automatically update on DOM mutation, and supports native forEach().",
    "explanation": "Live collections can cause infinite loops if iterating while mutating the DOM.",
    "interviewAnswer": "HTMLCollection is a live collection containing ONLY element nodes (returned by getElementsByTagName or children), which automatically updates when the DOM changes. NodeList (returned by querySelectorAll) is a static snapshot containing any node type (elements, text nodes, comments) that does NOT automatically update on DOM mutation, and supports native forEach(). Live collections can cause infinite loops if iterating while mutating the DOM.",
    "importantPoints": [
      "HTMLCollection is a live collection containing ONLY element nodes (returned by getElementsByTagName or children), which automatically updates when the DOM changes. NodeList (returned by querySelectorAll) is a static snapshot containing any node type (elements, text nodes, comments) that does NOT automatically update on DOM mutation, and supports native forEach().",
      "Live collections can cause infinite loops if iterating while mutating the DOM."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Comparison",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "nodelist",
      "htmlcollection",
      "dom-nodes"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is the difference between window.DOMContentLoaded and window.onload events?",
    "answer": "DOMContentLoaded fires as soon as the HTML document has been completely parsed and the DOM tree is constructed, without waiting for stylesheets, images, or subframes to finish loading. window.onload fires only after the entire page, including all external resources (images, stylesheets, iframes), has fully loaded.",
    "explanation": "DOMContentLoaded is preferred for initializing JavaScript widgets to start earlier.",
    "interviewAnswer": "DOMContentLoaded fires as soon as the HTML document has been completely parsed and the DOM tree is constructed, without waiting for stylesheets, images, or subframes to finish loading. window.onload fires only after the entire page, including all external resources (images, stylesheets, iframes), has fully loaded. DOMContentLoaded is preferred for initializing JavaScript widgets to start earlier.",
    "importantPoints": [
      "DOMContentLoaded fires as soon as the HTML document has been completely parsed and the DOM tree is constructed, without waiting for stylesheets, images, or subframes to finish loading. window.onload fires only after the entire page, including all external resources (images, stylesheets, iframes), has fully loaded.",
      "DOMContentLoaded is preferred for initializing JavaScript widgets to start earlier."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "domcontentloaded",
      "onload",
      "lifecycle"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is the difference between localStorage, sessionStorage, and Cookies regarding storage limits, expiration, and server transmission?",
    "answer": "1) localStorage: ~5-10MB limit, persists indefinitely until manually cleared, client-side only (never sent with HTTP requests). 2) sessionStorage: ~5MB limit, scoped to the current browser tab and deleted when tab closes, client-side only. 3) Cookies: ~4KB limit, configurable expiration, and automatically transmitted to the server with every HTTP request matching domain and path.",
    "explanation": "Sensitive authentication tokens should be stored in HttpOnly cookies to defend against XSS theft.",
    "interviewAnswer": "1) localStorage: ~5-10MB limit, persists indefinitely until manually cleared, client-side only (never sent with HTTP requests). 2) sessionStorage: ~5MB limit, scoped to the current browser tab and deleted when tab closes, client-side only. 3) Cookies: ~4KB limit, configurable expiration, and automatically transmitted to the server with every HTTP request matching domain and path. Sensitive authentication tokens should be stored in HttpOnly cookies to defend against XSS theft.",
    "importantPoints": [
      "1) localStorage: ~5-10MB limit, persists indefinitely until manually cleared, client-side only (never sent with HTTP requests). 2) sessionStorage: ~5MB limit, scoped to the current browser tab and deleted when tab closes, client-side only. 3) Cookies: ~4KB limit, configurable expiration, and automatically transmitted to the server with every HTTP request matching domain and path.",
      "Sensitive authentication tokens should be stored in HttpOnly cookies to defend against XSS theft."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "isImportant": true,
    "tags": [
      "javascript",
      "dom-browser",
      "storage",
      "cookies",
      "localstorage"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "Why should sensitive JWT authentication tokens be stored in HttpOnly cookies rather than localStorage?",
    "answer": "Any JavaScript code running on the page—including malicious scripts injected via Cross-Site Scripting (XSS)—has full read and write access to window.localStorage. An HttpOnly cookie cannot be read or modified by JavaScript via document.cookie, protecting tokens from being stolen by XSS exploits.",
    "explanation": "Combine HttpOnly with Secure and SameSite=Strict/Lax to mitigate CSRF risks.",
    "interviewAnswer": "Any JavaScript code running on the page—including malicious scripts injected via Cross-Site Scripting (XSS)—has full read and write access to window.localStorage. An HttpOnly cookie cannot be read or modified by JavaScript via document.cookie, protecting tokens from being stolen by XSS exploits. Combine HttpOnly with Secure and SameSite=Strict/Lax to mitigate CSRF risks.",
    "importantPoints": [
      "Any JavaScript code running on the page—including malicious scripts injected via Cross-Site Scripting (XSS)—has full read and write access to window.localStorage. An HttpOnly cookie cannot be read or modified by JavaScript via document.cookie, protecting tokens from being stolen by XSS exploits.",
      "Combine HttpOnly with Secure and SameSite=Strict/Lax to mitigate CSRF risks."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Production / Real-World",
    "isImportant": true,
    "tags": [
      "javascript",
      "dom-browser",
      "security",
      "xss",
      "httponly-cookies"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What causes DOM Reflow (Layout) vs Repaint, and what common JavaScript operations trigger layout thrashing?",
    "answer": "Repaint occurs when visual appearances change without affecting geometry (color, visibility). Reflow (Layout) occurs when elements change geometry, size, or position, requiring the browser to recalculate render tree positions. Layout thrashing occurs when JavaScript repeatedly interleaves DOM writes and DOM reads (e.g. setting element.style.width then reading offsetWidth inside a loop), forcing synchronous reflow on every iteration.",
    "explanation": "Batch all DOM reads first, then batch all DOM writes to prevent layout thrashing.",
    "interviewAnswer": "Repaint occurs when visual appearances change without affecting geometry (color, visibility). Reflow (Layout) occurs when elements change geometry, size, or position, requiring the browser to recalculate render tree positions. Layout thrashing occurs when JavaScript repeatedly interleaves DOM writes and DOM reads (e.g. setting element.style.width then reading offsetWidth inside a loop), forcing synchronous reflow on every iteration. Batch all DOM reads first, then batch all DOM writes to prevent layout thrashing.",
    "importantPoints": [
      "Repaint occurs when visual appearances change without affecting geometry (color, visibility). Reflow (Layout) occurs when elements change geometry, size, or position, requiring the browser to recalculate render tree positions. Layout thrashing occurs when JavaScript repeatedly interleaves DOM writes and DOM reads (e.g. setting element.style.width then reading offsetWidth inside a loop), forcing synchronous reflow on every iteration.",
      "Batch all DOM reads first, then batch all DOM writes to prevent layout thrashing."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "javascript",
      "dom-browser",
      "reflow",
      "repaint",
      "layout-thrashing"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "How does DocumentFragment optimize performance when inserting 1,000 DOM elements into a list?",
    "answer": "Inserting 1,000 nodes one by one via element.appendChild() triggers 1,000 separate layout recalculations and repaints. Creating a DocumentFragment (document.createDocumentFragment()), appending all 1,000 elements to it in memory, and appending the fragment once to the DOM causes only a SINGLE reflow and repaint.",
    "explanation": "The fragment container itself is not added to the DOM; only its child nodes are transferred.",
    "interviewAnswer": "Inserting 1,000 nodes one by one via element.appendChild() triggers 1,000 separate layout recalculations and repaints. Creating a DocumentFragment (document.createDocumentFragment()), appending all 1,000 elements to it in memory, and appending the fragment once to the DOM causes only a SINGLE reflow and repaint. The fragment container itself is not added to the DOM; only its child nodes are transferred.",
    "importantPoints": [
      "Inserting 1,000 nodes one by one via element.appendChild() triggers 1,000 separate layout recalculations and repaints. Creating a DocumentFragment (document.createDocumentFragment()), appending all 1,000 elements to it in memory, and appending the fragment once to the DOM causes only a SINGLE reflow and repaint.",
      "The fragment container itself is not added to the DOM; only its child nodes are transferred."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "documentfragment",
      "performance",
      "dom-insertion"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is IntersectionObserver, and why is it superior to listening to window scroll events for lazy loading images?",
    "answer": "Listening to window scroll events executes JavaScript synchronously on the main thread 60+ times per second and requires calling getBoundingClientRect(), which triggers layout reflows. IntersectionObserver runs asynchronously in the browser compositor thread off the main thread, notifying the callback only when an element enters or exits the viewport, consuming virtually zero CPU during scrolling.",
    "explanation": "Standard browser API for lazy loading images, infinite scroll, and impression tracking.",
    "interviewAnswer": "Listening to window scroll events executes JavaScript synchronously on the main thread 60+ times per second and requires calling getBoundingClientRect(), which triggers layout reflows. IntersectionObserver runs asynchronously in the browser compositor thread off the main thread, notifying the callback only when an element enters or exits the viewport, consuming virtually zero CPU during scrolling. Standard browser API for lazy loading images, infinite scroll, and impression tracking.",
    "importantPoints": [
      "Listening to window scroll events executes JavaScript synchronously on the main thread 60+ times per second and requires calling getBoundingClientRect(), which triggers layout reflows. IntersectionObserver runs asynchronously in the browser compositor thread off the main thread, notifying the callback only when an element enters or exits the viewport, consuming virtually zero CPU during scrolling.",
      "Standard browser API for lazy loading images, infinite scroll, and impression tracking."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "javascript",
      "dom-browser",
      "intersectionobserver",
      "scroll",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is the purpose of the passive: true option in addEventListener for scroll and touch listeners?",
    "answer": "Setting { passive: true } guarantees to the browser that the event listener will NEVER call event.preventDefault(). This allows the browser to scroll the page immediately on the compositor thread without waiting for the JavaScript main thread to execute the listener, eliminating scroll stutter and jank.",
    "explanation": "Lighthouse audits flag non-passive touch/wheel listeners on window and document.",
    "interviewAnswer": "Setting { passive: true } guarantees to the browser that the event listener will NEVER call event.preventDefault(). This allows the browser to scroll the page immediately on the compositor thread without waiting for the JavaScript main thread to execute the listener, eliminating scroll stutter and jank. Lighthouse audits flag non-passive touch/wheel listeners on window and document.",
    "importantPoints": [
      "Setting { passive: true } guarantees to the browser that the event listener will NEVER call event.preventDefault(). This allows the browser to scroll the page immediately on the compositor thread without waiting for the JavaScript main thread to execute the listener, eliminating scroll stutter and jank.",
      "Lighthouse audits flag non-passive touch/wheel listeners on window and document."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "passive-listeners",
      "scroll-jank",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is a Web Worker, and how does it prevent CPU-heavy JavaScript calculations from freezing the browser UI?",
    "answer": "JavaScript in browsers is single-threaded; a heavy 2-second computation freezes the UI, blocking clicks and animations. A Web Worker executes JavaScript code on an independent background thread. It communicates with the main thread asynchronously via postMessage() and message event listeners, keeping the main UI thread running smoothly at 60 FPS.",
    "explanation": "Web Workers do not have access to the DOM, window, or document objects for thread safety.",
    "interviewAnswer": "JavaScript in browsers is single-threaded; a heavy 2-second computation freezes the UI, blocking clicks and animations. A Web Worker executes JavaScript code on an independent background thread. It communicates with the main thread asynchronously via postMessage() and message event listeners, keeping the main UI thread running smoothly at 60 FPS. Web Workers do not have access to the DOM, window, or document objects for thread safety.",
    "importantPoints": [
      "JavaScript in browsers is single-threaded; a heavy 2-second computation freezes the UI, blocking clicks and animations. A Web Worker executes JavaScript code on an independent background thread. It communicates with the main thread asynchronously via postMessage() and message event listeners, keeping the main UI thread running smoothly at 60 FPS.",
      "Web Workers do not have access to the DOM, window, or document objects for thread safety."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "javascript",
      "dom-browser",
      "web-workers",
      "multithreading",
      "performance"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "How does Structured Clone algorithm differ from JSON.parse(JSON.stringify()) when transferring objects to a Web Worker?",
    "answer": "JSON serialization fails on circular references, drops undefined, converts Date objects to strings, and cannot handle Map, Set, RegExp, or ArrayBuffer. structuredClone() supports circular references, Dates, Sets, Maps, and TypedArrays natively.",
    "explanation": "Structured cloning is built into the Web standard structuredClone() and Web Worker postMessage().",
    "interviewAnswer": "JSON serialization fails on circular references, drops undefined, converts Date objects to strings, and cannot handle Map, Set, RegExp, or ArrayBuffer. structuredClone() supports circular references, Dates, Sets, Maps, and TypedArrays natively. Structured cloning is built into the Web standard structuredClone() and Web Worker postMessage().",
    "importantPoints": [
      "JSON serialization fails on circular references, drops undefined, converts Date objects to strings, and cannot handle Map, Set, RegExp, or ArrayBuffer. structuredClone() supports circular references, Dates, Sets, Maps, and TypedArrays natively.",
      "Structured cloning is built into the Web standard structuredClone() and Web Worker postMessage()."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "structured-clone",
      "web-workers",
      "serialization"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What are Transferable Objects in Web Worker communication and why do they achieve zero-copy transfer?",
    "answer": "By default, postMessage clones data, which is slow for large 100MB ArrayBuffers. Transferable Objects (like ArrayBuffer or ImageBitmap) transfer ownership of the memory buffer directly to the worker: the memory address is handed over instantaneously (0ms) and the original buffer on the sender thread becomes detached (byteLength 0), achieving zero-copy performance.",
    "explanation": "Essential for high-performance audio, video processing, and 3D graphics.",
    "interviewAnswer": "By default, postMessage clones data, which is slow for large 100MB ArrayBuffers. Transferable Objects (like ArrayBuffer or ImageBitmap) transfer ownership of the memory buffer directly to the worker: the memory address is handed over instantaneously (0ms) and the original buffer on the sender thread becomes detached (byteLength 0), achieving zero-copy performance. Essential for high-performance audio, video processing, and 3D graphics.",
    "importantPoints": [
      "By default, postMessage clones data, which is slow for large 100MB ArrayBuffers. Transferable Objects (like ArrayBuffer or ImageBitmap) transfer ownership of the memory buffer directly to the worker: the memory address is handed over instantaneously (0ms) and the original buffer on the sender thread becomes detached (byteLength 0), achieving zero-copy performance.",
      "Essential for high-performance audio, video processing, and 3D graphics."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "transferable-objects",
      "arraybuffer",
      "web-workers"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is MutationObserver in the DOM API and what problem did it solve over legacy Mutation Events?",
    "answer": "MutationObserver watches for changes to the DOM tree (child insertions/removals, attribute changes, character data). Unlike legacy Mutation Events (DOMSubtreeModified) which fired synchronously for every single node change and degraded browser performance, MutationObserver batches change records and delivers them asynchronously after DOM mutations complete.",
    "explanation": "Standard API for observing DOM changes in modern web extensions and UI libraries.",
    "interviewAnswer": "MutationObserver watches for changes to the DOM tree (child insertions/removals, attribute changes, character data). Unlike legacy Mutation Events (DOMSubtreeModified) which fired synchronously for every single node change and degraded browser performance, MutationObserver batches change records and delivers them asynchronously after DOM mutations complete. Standard API for observing DOM changes in modern web extensions and UI libraries.",
    "importantPoints": [
      "MutationObserver watches for changes to the DOM tree (child insertions/removals, attribute changes, character data). Unlike legacy Mutation Events (DOMSubtreeModified) which fired synchronously for every single node change and degraded browser performance, MutationObserver batches change records and delivers them asynchronously after DOM mutations complete.",
      "Standard API for observing DOM changes in modern web extensions and UI libraries."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "mutationobserver",
      "dom-changes"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is ResizeObserver and how does it differ from listening to window resize events?",
    "answer": "window.onresize only fires when the entire browser viewport dimensions change. ResizeObserver observes dimensional changes of individual element bounding boxes (e.g. when an element changes width due to flexbox, CSS grid, or content changes) without requiring viewport resize.",
    "explanation": "Essential for implementing component-level responsive designs (like Container Queries in JS).",
    "interviewAnswer": "window.onresize only fires when the entire browser viewport dimensions change. ResizeObserver observes dimensional changes of individual element bounding boxes (e.g. when an element changes width due to flexbox, CSS grid, or content changes) without requiring viewport resize. Essential for implementing component-level responsive designs (like Container Queries in JS).",
    "importantPoints": [
      "window.onresize only fires when the entire browser viewport dimensions change. ResizeObserver observes dimensional changes of individual element bounding boxes (e.g. when an element changes width due to flexbox, CSS grid, or content changes) without requiring viewport resize.",
      "Essential for implementing component-level responsive designs (like Container Queries in JS)."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "resizeobserver",
      "responsive",
      "dom"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is the difference between innerHTML, textContent, and innerText in DOM manipulation?",
    "answer": "1) innerHTML: parses and serializes HTML markup (vulnerable to XSS if inserting untrusted content). 2) textContent: retrieves or sets raw text content of all elements including <script> and <style>, does NOT trigger layout reflow. 3) innerText: aware of rendered styles and layout; it ignores hidden elements (display: none), converts line breaks, and triggers synchronous layout reflow to compute visible text.",
    "explanation": "textContent is faster and safer than both innerHTML and innerText for plain text insertion.",
    "interviewAnswer": "1) innerHTML: parses and serializes HTML markup (vulnerable to XSS if inserting untrusted content). 2) textContent: retrieves or sets raw text content of all elements including <script> and <style>, does NOT trigger layout reflow. 3) innerText: aware of rendered styles and layout; it ignores hidden elements (display: none), converts line breaks, and triggers synchronous layout reflow to compute visible text. textContent is faster and safer than both innerHTML and innerText for plain text insertion.",
    "importantPoints": [
      "1) innerHTML: parses and serializes HTML markup (vulnerable to XSS if inserting untrusted content). 2) textContent: retrieves or sets raw text content of all elements including <script> and <style>, does NOT trigger layout reflow. 3) innerText: aware of rendered styles and layout; it ignores hidden elements (display: none), converts line breaks, and triggers synchronous layout reflow to compute visible text.",
      "textContent is faster and safer than both innerHTML and innerText for plain text insertion."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "innerhtml",
      "textcontent",
      "innertext"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is the difference between clientWidth, offsetWidth, and scrollWidth of a DOM element?",
    "answer": "1) clientWidth: inner width of the element content + padding, excluding borders, margins, and scrollbars. 2) offsetWidth: full visual width including content + padding + borders + vertical scrollbar (if present). 3) scrollWidth: total width of the element content including content overflowing outside the visible viewport.",
    "explanation": "Useful for detecting overflow: element.scrollWidth > element.clientWidth means horizontal overflow is present.",
    "interviewAnswer": "1) clientWidth: inner width of the element content + padding, excluding borders, margins, and scrollbars. 2) offsetWidth: full visual width including content + padding + borders + vertical scrollbar (if present). 3) scrollWidth: total width of the element content including content overflowing outside the visible viewport. Useful for detecting overflow: element.scrollWidth > element.clientWidth means horizontal overflow is present.",
    "importantPoints": [
      "1) clientWidth: inner width of the element content + padding, excluding borders, margins, and scrollbars. 2) offsetWidth: full visual width including content + padding + borders + vertical scrollbar (if present). 3) scrollWidth: total width of the element content including content overflowing outside the visible viewport.",
      "Useful for detecting overflow: element.scrollWidth > element.clientWidth means horizontal overflow is present."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "dimensions",
      "clientwidth",
      "offsetwidth",
      "scrollwidth"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "How does the HTML5 History API (pushState and replaceState) enable Single Page Application (SPA) client-side routing?",
    "answer": "history.pushState(state, title, url) and history.replaceState() update the browser address bar and history stack without triggering a full page reload or contacting the server. Listening to the window \"popstate\" event detects when the user clicks the browser Back or Forward buttons, allowing client-side routers to render matching views dynamically.",
    "explanation": "Servers must be configured with a fallback rule redirecting all routes to index.html to support direct URL visits.",
    "interviewAnswer": "history.pushState(state, title, url) and history.replaceState() update the browser address bar and history stack without triggering a full page reload or contacting the server. Listening to the window \"popstate\" event detects when the user clicks the browser Back or Forward buttons, allowing client-side routers to render matching views dynamically. Servers must be configured with a fallback rule redirecting all routes to index.html to support direct URL visits.",
    "importantPoints": [
      "history.pushState(state, title, url) and history.replaceState() update the browser address bar and history stack without triggering a full page reload or contacting the server. Listening to the window \"popstate\" event detects when the user clicks the browser Back or Forward buttons, allowing client-side routers to render matching views dynamically.",
      "Servers must be configured with a fallback rule redirecting all routes to index.html to support direct URL visits."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "isImportant": true,
    "tags": [
      "javascript",
      "dom-browser",
      "history-api",
      "spa",
      "routing"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is Cross-Origin Resource Sharing (CORS) and why does the browser block responses instead of the server?",
    "answer": "CORS is a browser security mechanism enforced via the Same-Origin Policy. The browser blocks JavaScript from reading responses from a different origin unless the server explicitly returns the Access-Control-Allow-Origin header. Crucially, the server often DOES receive and execute the request; the browser simply blocks the client JavaScript from accessing the response payload.",
    "explanation": "CORS is a client-side browser restriction, not a server-to-server restriction.",
    "interviewAnswer": "CORS is a browser security mechanism enforced via the Same-Origin Policy. The browser blocks JavaScript from reading responses from a different origin unless the server explicitly returns the Access-Control-Allow-Origin header. Crucially, the server often DOES receive and execute the request; the browser simply blocks the client JavaScript from accessing the response payload. CORS is a client-side browser restriction, not a server-to-server restriction.",
    "importantPoints": [
      "CORS is a browser security mechanism enforced via the Same-Origin Policy. The browser blocks JavaScript from reading responses from a different origin unless the server explicitly returns the Access-Control-Allow-Origin header. Crucially, the server often DOES receive and execute the request; the browser simply blocks the client JavaScript from accessing the response payload.",
      "CORS is a client-side browser restriction, not a server-to-server restriction."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "dom-browser",
      "cors",
      "security",
      "same-origin-policy"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What triggers a CORS Preflight (OPTIONS) request, and what are \"Simple Requests\"?",
    "answer": "A preflight request is an automated HTTP OPTIONS request sent by the browser before the actual request. A request triggers a preflight if it uses methods other than GET/POST/HEAD, sends headers other than CORS-safelisted headers (Accept, Accept-Language, Content-Language), or uses Content-Type other than application/x-www-form-urlencoded, multipart/form-data, or text/plain (e.g. application/json).",
    "explanation": "Sending application/json or custom Authorization headers always triggers an OPTIONS preflight.",
    "interviewAnswer": "A preflight request is an automated HTTP OPTIONS request sent by the browser before the actual request. A request triggers a preflight if it uses methods other than GET/POST/HEAD, sends headers other than CORS-safelisted headers (Accept, Accept-Language, Content-Language), or uses Content-Type other than application/x-www-form-urlencoded, multipart/form-data, or text/plain (e.g. application/json). Sending application/json or custom Authorization headers always triggers an OPTIONS preflight.",
    "importantPoints": [
      "A preflight request is an automated HTTP OPTIONS request sent by the browser before the actual request. A request triggers a preflight if it uses methods other than GET/POST/HEAD, sends headers other than CORS-safelisted headers (Accept, Accept-Language, Content-Language), or uses Content-Type other than application/x-www-form-urlencoded, multipart/form-data, or text/plain (e.g. application/json).",
      "Sending application/json or custom Authorization headers always triggers an OPTIONS preflight."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "cors",
      "preflight",
      "options-request"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is the difference between script async, script defer, and standard script tags in HTML?",
    "answer": "1) Standard `<script>`: pauses HTML parsing, downloads the script, executes it immediately, then resumes HTML parsing. 2) `<script defer>`: downloads in background while HTML parsing continues, executes in document order only after HTML parsing completes (before DOMContentLoaded). 3) `<script async>`: downloads in background, executes immediately when ready, interrupting HTML parsing and executing in arbitrary order.",
    "explanation": "defer is preferred for dependent application scripts; async is ideal for independent third-party trackers.",
    "interviewAnswer": "1) Standard `<script>`: pauses HTML parsing, downloads the script, executes it immediately, then resumes HTML parsing. 2) `<script defer>`: downloads in background while HTML parsing continues, executes in document order only after HTML parsing completes (before DOMContentLoaded). 3) `<script async>`: downloads in background, executes immediately when ready, interrupting HTML parsing and executing in arbitrary order. defer is preferred for dependent application scripts; async is ideal for independent third-party trackers.",
    "importantPoints": [
      "1) Standard `<script>`: pauses HTML parsing, downloads the script, executes it immediately, then resumes HTML parsing. 2) `<script defer>`: downloads in background while HTML parsing continues, executes in document order only after HTML parsing completes (before DOMContentLoaded). 3) `<script async>`: downloads in background, executes immediately when ready, interrupting HTML parsing and executing in arbitrary order.",
      "defer is preferred for dependent application scripts; async is ideal for independent third-party trackers."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Comparison",
    "isImportant": true,
    "tags": [
      "javascript",
      "dom-browser",
      "script-loading",
      "async",
      "defer"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "How does event.target differ from event.currentTarget in JavaScript event handling?",
    "answer": "event.target refers to the exact element that originally triggered the event (the deepest element clicked). event.currentTarget refers to the element to which the event listener is currently attached as the event bubbles up the DOM tree.",
    "explanation": "In event delegation, event.currentTarget is the container, while event.target is the child button or icon.",
    "interviewAnswer": "event.target refers to the exact element that originally triggered the event (the deepest element clicked). event.currentTarget refers to the element to which the event listener is currently attached as the event bubbles up the DOM tree. In event delegation, event.currentTarget is the container, while event.target is the child button or icon.",
    "importantPoints": [
      "event.target refers to the exact element that originally triggered the event (the deepest element clicked). event.currentTarget refers to the element to which the event listener is currently attached as the event bubbles up the DOM tree.",
      "In event delegation, event.currentTarget is the container, while event.target is the child button or icon."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "event-target",
      "current-target"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "How do you detect memory leaks caused by detached DOM elements using Chrome DevTools?",
    "answer": "Take a Heap Snapshot in Chrome DevTools Memory tab before and after an action (like removing a widget). Filter constructor names by \"Detached\". If Detached HTML elements exist with a yellow background, a JavaScript closure, array, or global variable still holds a reference to them, preventing garbage collection.",
    "explanation": "Detached DOM nodes keep their entire subtree alive in memory.",
    "interviewAnswer": "Take a Heap Snapshot in Chrome DevTools Memory tab before and after an action (like removing a widget). Filter constructor names by \"Detached\". If Detached HTML elements exist with a yellow background, a JavaScript closure, array, or global variable still holds a reference to them, preventing garbage collection. Detached DOM nodes keep their entire subtree alive in memory.",
    "importantPoints": [
      "Take a Heap Snapshot in Chrome DevTools Memory tab before and after an action (like removing a widget). Filter constructor names by \"Detached\". If Detached HTML elements exist with a yellow background, a JavaScript closure, array, or global variable still holds a reference to them, preventing garbage collection.",
      "Detached DOM nodes keep their entire subtree alive in memory."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "memory-leaks",
      "detached-dom",
      "heap-snapshot"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "Why should you remove event listeners when a DOM element is removed or replaced in vanilla JavaScript?",
    "answer": "If an event listener is attached to an external element (e.g. window or document) and captures a local element in its closure, that local element cannot be garbage collected even after being removed from the DOM. This results in a detached DOM tree memory leak.",
    "explanation": "Always invoke removeEventListener or use AbortController signal option for automated teardown.",
    "interviewAnswer": "If an event listener is attached to an external element (e.g. window or document) and captures a local element in its closure, that local element cannot be garbage collected even after being removed from the DOM. This results in a detached DOM tree memory leak. Always invoke removeEventListener or use AbortController signal option for automated teardown.",
    "importantPoints": [
      "If an event listener is attached to an external element (e.g. window or document) and captures a local element in its closure, that local element cannot be garbage collected even after being removed from the DOM. This results in a detached DOM tree memory leak.",
      "Always invoke removeEventListener or use AbortController signal option for automated teardown."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Production / Real-World",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "event-listeners",
      "memory-leaks",
      "cleanup"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "How can AbortController be used to clean up multiple event listeners simultaneously in modern DOM APIs?",
    "answer": "Pass the AbortSignal to addEventListener: const controller = new AbortController(); window.addEventListener(\"resize\", handler, { signal: controller.signal }); window.addEventListener(\"scroll\", handler, { signal: controller.signal });. Calling controller.abort() automatically removes all listeners bound to that signal in a single line.",
    "explanation": "Eliminates repetitive removeEventListener calls and matching handler references.",
    "interviewAnswer": "Pass the AbortSignal to addEventListener: const controller = new AbortController(); window.addEventListener(\"resize\", handler, { signal: controller.signal }); window.addEventListener(\"scroll\", handler, { signal: controller.signal });. Calling controller.abort() automatically removes all listeners bound to that signal in a single line. Eliminates repetitive removeEventListener calls and matching handler references.",
    "importantPoints": [
      "Pass the AbortSignal to addEventListener: const controller = new AbortController(); window.addEventListener(\"resize\", handler, { signal: controller.signal }); window.addEventListener(\"scroll\", handler, { signal: controller.signal });. Calling controller.abort() automatically removes all listeners bound to that signal in a single line.",
      "Eliminates repetitive removeEventListener calls and matching handler references."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "abortcontroller",
      "event-listeners",
      "modern-apis"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is the difference between window.requestAnimationFrame() and setTimeout() for driving smooth 60 FPS animations?",
    "answer": "requestAnimationFrame matches the display refresh rate (typically 60Hz or 120Hz), executing callbacks right before the browser calculates layout and paints. It automatically pauses in background tabs to save battery and CPU. setTimeout ignores screen refresh cycles, causing dropped frames, screen tearing, and continues firing when backgrounded.",
    "explanation": "rAF provides jitter-free visual updates aligned with hardware V-Sync.",
    "interviewAnswer": "requestAnimationFrame matches the display refresh rate (typically 60Hz or 120Hz), executing callbacks right before the browser calculates layout and paints. It automatically pauses in background tabs to save battery and CPU. setTimeout ignores screen refresh cycles, causing dropped frames, screen tearing, and continues firing when backgrounded. rAF provides jitter-free visual updates aligned with hardware V-Sync.",
    "importantPoints": [
      "requestAnimationFrame matches the display refresh rate (typically 60Hz or 120Hz), executing callbacks right before the browser calculates layout and paints. It automatically pauses in background tabs to save battery and CPU. setTimeout ignores screen refresh cycles, causing dropped frames, screen tearing, and continues firing when backgrounded.",
      "rAF provides jitter-free visual updates aligned with hardware V-Sync."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Performance / Optimization",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "requestanimationframe",
      "animations",
      "60fps"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "How does navigator.sendBeacon() solve the problem of sending analytics data reliably when a user closes the browser tab?",
    "answer": "Standard fetch() or XHR requests are often aborted by browsers when the page unloads before the network handshake completes. navigator.sendBeacon(url, data) asynchronously transmits small payloads via HTTP POST in the background, guaranteed by the browser to complete even after the page is completely unloaded, without delaying tab closure.",
    "explanation": "Essential for accurate page leave telemetry and analytics tracking.",
    "interviewAnswer": "Standard fetch() or XHR requests are often aborted by browsers when the page unloads before the network handshake completes. navigator.sendBeacon(url, data) asynchronously transmits small payloads via HTTP POST in the background, guaranteed by the browser to complete even after the page is completely unloaded, without delaying tab closure. Essential for accurate page leave telemetry and analytics tracking.",
    "importantPoints": [
      "Standard fetch() or XHR requests are often aborted by browsers when the page unloads before the network handshake completes. navigator.sendBeacon(url, data) asynchronously transmits small payloads via HTTP POST in the background, guaranteed by the browser to complete even after the page is completely unloaded, without delaying tab closure.",
      "Essential for accurate page leave telemetry and analytics tracking."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Production / Real-World",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "sendbeacon",
      "analytics",
      "unload"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is the SameSite cookie attribute, and how do \"Strict\", \"Lax\", and \"None\" defend against Cross-Site Request Forgery (CSRF)?",
    "answer": "SameSite controls whether cookies are sent with cross-site requests. SameSite=Strict blocks cookies on ALL cross-site requests (even following links). SameSite=Lax (browser default) permits cookies only on top-level safe GET navigations (clicking a link), blocking on cross-site POST requests. SameSite=None allows cookies on all cross-site requests but requires the Secure (HTTPS) flag.",
    "explanation": "SameSite=Lax defends against traditional image-based or form-based CSRF attacks automatically.",
    "interviewAnswer": "SameSite controls whether cookies are sent with cross-site requests. SameSite=Strict blocks cookies on ALL cross-site requests (even following links). SameSite=Lax (browser default) permits cookies only on top-level safe GET navigations (clicking a link), blocking on cross-site POST requests. SameSite=None allows cookies on all cross-site requests but requires the Secure (HTTPS) flag. SameSite=Lax defends against traditional image-based or form-based CSRF attacks automatically.",
    "importantPoints": [
      "SameSite controls whether cookies are sent with cross-site requests. SameSite=Strict blocks cookies on ALL cross-site requests (even following links). SameSite=Lax (browser default) permits cookies only on top-level safe GET navigations (clicking a link), blocking on cross-site POST requests. SameSite=None allows cookies on all cross-site requests but requires the Secure (HTTPS) flag.",
      "SameSite=Lax defends against traditional image-based or form-based CSRF attacks automatically."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "cookies",
      "samesite",
      "csrf",
      "security"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is Shadow DOM and how does it provide encapsulation for Web Components?",
    "answer": "Shadow DOM allows a component to attach an isolated DOM subtree (a \"shadow root\") to an element. Styles defined inside the shadow tree do not leak out to the document, and document styles do not bleed in. Internal element IDs and classes are completely scoped, preventing collisions in large design systems.",
    "explanation": "One of the three core pillars of Web Components alongside Custom Elements and HTML Templates.",
    "interviewAnswer": "Shadow DOM allows a component to attach an isolated DOM subtree (a \"shadow root\") to an element. Styles defined inside the shadow tree do not leak out to the document, and document styles do not bleed in. Internal element IDs and classes are completely scoped, preventing collisions in large design systems. One of the three core pillars of Web Components alongside Custom Elements and HTML Templates.",
    "importantPoints": [
      "Shadow DOM allows a component to attach an isolated DOM subtree (a \"shadow root\") to an element. Styles defined inside the shadow tree do not leak out to the document, and document styles do not bleed in. Internal element IDs and classes are completely scoped, preventing collisions in large design systems.",
      "One of the three core pillars of Web Components alongside Custom Elements and HTML Templates."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Architecture / Design Thinking",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "shadow-dom",
      "web-components",
      "encapsulation"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is the purpose of window.matchMedia() in JavaScript responsive design?",
    "answer": "window.matchMedia(mediaQueryString) evaluates CSS media queries programmatically in JavaScript. It returns a MediaQueryList object with a matches boolean and supports addEventListener(\"change\", callback) to listen for viewport orientation or breakpoint changes without polling window.innerWidth on scroll.",
    "explanation": "Much more performant than listening to window resize events.",
    "interviewAnswer": "window.matchMedia(mediaQueryString) evaluates CSS media queries programmatically in JavaScript. It returns a MediaQueryList object with a matches boolean and supports addEventListener(\"change\", callback) to listen for viewport orientation or breakpoint changes without polling window.innerWidth on scroll. Much more performant than listening to window resize events.",
    "importantPoints": [
      "window.matchMedia(mediaQueryString) evaluates CSS media queries programmatically in JavaScript. It returns a MediaQueryList object with a matches boolean and supports addEventListener(\"change\", callback) to listen for viewport orientation or breakpoint changes without polling window.innerWidth on scroll.",
      "Much more performant than listening to window resize events."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "matchmedia",
      "responsive",
      "css"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is the Content Security Policy (CSP) and how does it prevent Cross-Site Scripting (XSS)?",
    "answer": "CSP is an HTTP header (or <meta> tag) that restricts which resource domains (scripts, styles, images, websockets) the browser is allowed to load and execute. By configuring script-src with nonces, hashes, or trusted domains, and disabling unsafe-inline and unsafe-eval, injected inline attacker scripts (<script>alert(1)</script>) are blocked from executing.",
    "explanation": "One of the strongest defense-in-depth security mechanisms in modern web development.",
    "interviewAnswer": "CSP is an HTTP header (or <meta> tag) that restricts which resource domains (scripts, styles, images, websockets) the browser is allowed to load and execute. By configuring script-src with nonces, hashes, or trusted domains, and disabling unsafe-inline and unsafe-eval, injected inline attacker scripts (<script>alert(1)</script>) are blocked from executing. One of the strongest defense-in-depth security mechanisms in modern web development.",
    "importantPoints": [
      "CSP is an HTTP header (or <meta> tag) that restricts which resource domains (scripts, styles, images, websockets) the browser is allowed to load and execute. By configuring script-src with nonces, hashes, or trusted domains, and disabling unsafe-inline and unsafe-eval, injected inline attacker scripts (<script>alert(1)</script>) are blocked from executing.",
      "One of the strongest defense-in-depth security mechanisms in modern web development."
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "javascript",
      "dom-browser",
      "csp",
      "xss",
      "security"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "How does the browser Same-Origin Policy define an \"Origin\"?",
    "answer": "An origin is defined by the tuple of Protocol (scheme), Host (domain), and Port. Two URLs are of the same origin ONLY if all three components match identically. For example, http://example.com and https://example.com differ in protocol; http://example.com and http://api.example.com differ in host.",
    "explanation": "Foundational security boundary preventing untrusted websites from reading sensitive session data.",
    "interviewAnswer": "An origin is defined by the tuple of Protocol (scheme), Host (domain), and Port. Two URLs are of the same origin ONLY if all three components match identically. For example, http://example.com and https://example.com differ in protocol; http://example.com and http://api.example.com differ in host. Foundational security boundary preventing untrusted websites from reading sensitive session data.",
    "importantPoints": [
      "An origin is defined by the tuple of Protocol (scheme), Host (domain), and Port. Two URLs are of the same origin ONLY if all three components match identically. For example, http://example.com and https://example.com differ in protocol; http://example.com and http://api.example.com differ in host.",
      "Foundational security boundary preventing untrusted websites from reading sensitive session data."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "same-origin-policy",
      "security"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is the difference between element.matches() and element.closest() in DOM querying?",
    "answer": "element.matches(selector) checks if the current element matches the specified CSS selector, returning true or false. element.closest(selector) traverses upwards through the element and its ancestors, returning the nearest ancestor element that matches the selector (or null if none match).",
    "explanation": "element.closest() is fundamental when implementing event delegation with nested icons or text nodes inside buttons.",
    "interviewAnswer": "element.matches(selector) checks if the current element matches the specified CSS selector, returning true or false. element.closest(selector) traverses upwards through the element and its ancestors, returning the nearest ancestor element that matches the selector (or null if none match). element.closest() is fundamental when implementing event delegation with nested icons or text nodes inside buttons.",
    "importantPoints": [
      "element.matches(selector) checks if the current element matches the specified CSS selector, returning true or false. element.closest(selector) traverses upwards through the element and its ancestors, returning the nearest ancestor element that matches the selector (or null if none match).",
      "element.closest() is fundamental when implementing event delegation with nested icons or text nodes inside buttons."
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "dom-traversal",
      "matches",
      "closest"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  },
  {
    "technologySlug": "javascript",
    "topicSlug": "dom-browser",
    "question": "What is the difference between getBoundingClientRect() and offsetLeft/offsetTop?",
    "answer": "getBoundingClientRect() returns the size and position of an element relative to the CURRENT VIEWPORT, accounting for page scroll and CSS transforms. offsetLeft/offsetTop return the pixel position relative to the element's nearest positioned offsetParent (offsetParent), ignoring transforms and scroll.",
    "explanation": "getBoundingClientRect() is essential for positioning tooltips, popovers, and viewport collision detection.",
    "interviewAnswer": "getBoundingClientRect() returns the size and position of an element relative to the CURRENT VIEWPORT, accounting for page scroll and CSS transforms. offsetLeft/offsetTop return the pixel position relative to the element's nearest positioned offsetParent (offsetParent), ignoring transforms and scroll. getBoundingClientRect() is essential for positioning tooltips, popovers, and viewport collision detection.",
    "importantPoints": [
      "getBoundingClientRect() returns the size and position of an element relative to the CURRENT VIEWPORT, accounting for page scroll and CSS transforms. offsetLeft/offsetTop return the pixel position relative to the element's nearest positioned offsetParent (offsetParent), ignoring transforms and scroll.",
      "getBoundingClientRect() is essential for positioning tooltips, popovers, and viewport collision detection."
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "isImportant": false,
    "tags": [
      "javascript",
      "dom-browser",
      "getboundingclientrect",
      "offsetparent",
      "positioning"
    ],
    "source": "ai-generated",
    "sourceReference": "Curated interview preparation content",
    "status": "published"
  }
];
