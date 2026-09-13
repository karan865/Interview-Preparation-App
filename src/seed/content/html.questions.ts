import { SeedQuestion } from './types';

export const htmlQuestions: SeedQuestion[] = [
  // ==========================================
  // 1. HTML Fundamentals (3 Questions: 2 Junior, 1 Intermediate)
  // ==========================================
  {
    technologySlug: 'html',
    topicSlug: 'html-fundamentals',
    question: 'What is the purpose of the <!DOCTYPE html> declaration in modern web development?',
    title: 'DOCTYPE Declaration and Quirks Mode vs Standards Mode',
    answer:
      'The `<!DOCTYPE html>` declaration informs the web browser which HTML specification version is being used and forces the browser to render the document in modern "Standards Mode" instead of legacy "Quirks Mode".',
    explanation:
      'In the 1990s browser wars, Netscape Navigator and Internet Explorer implemented proprietary layout algorithms. When W3C web standards emerged, browsers introduced DOCTYPE switching to maintain backward compatibility for older non-standard websites without breaking modern CSS box model rendering.',
    interviewAnswer:
      'The <!DOCTYPE html> declaration is the very first line of an HTML document. Its primary purpose is to tell the browser to render the page in Standards Mode rather than Quirks Mode. In Standards Mode, browsers follow modern W3C CSS and HTML specifications, preventing legacy box-model bugs and cross-browser rendering inconsistencies.',
    importantPoints: [
      'Must appear as the absolute first line of the document before the <html> tag',
      'HTML5 DOCTYPE is case-insensitive and deliberately short: <!DOCTYPE html>',
      'Omitting the DOCTYPE triggers Quirks Mode, leading to erratic CSS box model behavior',
      'In Quirks Mode, Internet Explorer 5 box-model calculations (where padding was included in width) were emulated',
    ],
    comparisons: [
      {
        aspect: 'Rendering Mode',
        'Standards Mode': 'Complies strictly with W3C HTML and CSS specifications',
        'Quirks Mode': 'Emulates legacy late-1990s browser quirks and buggy box models',
      },
      {
        aspect: 'CSS Box Model',
        'Standards Mode': 'Width = content width (unless box-sizing: border-box is specified)',
        'Quirks Mode': 'Width often includes border and padding incorrectly',
      },
    ],
    tags: ['html', 'fundamentals', 'doctype', 'standards-mode', 'quirks-mode'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Conceptual',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'html-fundamentals',
    question: 'What is the difference between block-level elements, inline elements, and inline-block elements in HTML?',
    title: 'Block vs Inline vs Inline-Block Elements',
    answer:
      'Block-level elements begin on a new line and expand to fill the full width of their parent container. Inline elements flow within text, taking only the width of their content, and ignore vertical width, height, and top/bottom margins. Inline-block elements flow inline like text but respect width, height, and vertical padding/margin.',
    explanation:
      'Block elements (such as `<div>`, `<p>`, `<section>`) define the macro layout. Inline elements (such as `<span>`, `<a>`, `<strong>`) wrap text segments. Attempting to assign `width` or `margin-top` to a plain inline element has no effect in the browser layout engine unless its display is changed.',
    interviewAnswer:
      'Block-level elements like divs and paragraphs always start on a new line and take up 100% of the parent width by default. Inline elements like spans and links sit inside text lines and only take up as much space as their content; they cannot have custom widths, heights, or vertical margins. Inline-block combines both: it sits inline like text but allows you to set explicit width, height, and padding.',
    importantPoints: [
      'Block elements: Start on new line, default to 100% parent width, respect all margins and paddings',
      'Inline elements: Flow alongside text, width/height properties are ignored, top/bottom margins do not push lines away',
      'Inline-block: Flows horizontally with surrounding text while fully respecting width, height, padding, and margin',
      'Can be dynamically toggled via the CSS display property (display: block, inline, inline-block)',
    ],
    comparisons: [
      {
        aspect: 'New Line',
        'Block (div, p)': 'Always starts on new line',
        'Inline (span, a)': 'Continues on same line',
        'Inline-Block (img, button)': 'Continues on same line',
      },
      {
        aspect: 'Width & Height',
        'Block (div, p)': 'Responds to explicit dimensions',
        'Inline (span, a)': 'Ignored (sized strictly to content)',
        'Inline-Block (img, button)': 'Responds to explicit dimensions',
      },
      {
        aspect: 'Vertical Margin/Padding',
        'Block (div, p)': 'Pushes neighboring elements away',
        'Inline (span, a)': 'Visual only; does not affect line height flow',
        'Inline-Block (img, button)': 'Pushes neighboring elements away',
      },
    ],
    tags: ['html', 'fundamentals', 'block', 'inline', 'inline-block', 'layout'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Comparison',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'html-fundamentals',
    question: 'How do async and defer attributes affect script loading and DOM parsing in HTML?',
    title: 'Script Loading Execution: Normal vs Async vs Defer',
    answer:
      'A normal `<script>` pauses HTML parsing while downloading and executing immediately. `<script async>` downloads the file asynchronously in parallel with HTML parsing, but pauses parsing to execute immediately once downloaded. `<script defer>` downloads in parallel with HTML parsing and defers execution until the HTML parsing is completely finished, preserving script execution order.',
    explanation:
      'Without async or defer, scripts placed in `<head>` block the browser from constructing the DOM tree, causing blank screens and poor Largest Contentful Paint (LCP). `defer` is ideal for scripts that manipulate the DOM or depend on other scripts, while `async` is best for independent third-party utilities like Google Analytics.',
    interviewAnswer:
      'When the browser encounters a standard script tag, it stops HTML parsing completely to download and run the script. With async, the script downloads in the background, but pauses the parser the moment it finishes downloading to execute immediately, meaning execution order is not guaranteed. With defer, the script also downloads in the background, but waits until the entire DOM is parsed before executing, and it guarantees that scripts run in the order they appear in the HTML.',
    importantPoints: [
      'Normal script: Blocks HTML parsing during both download and execution',
      'async: Downloads asynchronously, executes immediately upon download completion (non-blocking download, blocking execution)',
      'defer: Downloads asynchronously, executes only after DOMContentLoaded event (preserves document order)',
      'Use async for independent tracking/analytics scripts; use defer for application code and UI bundles',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'Script Loading Attributes',
        code: `<!-- Parser blocking: Stops DOM construction immediately -->
<script src="legacy.js"></script>

<!-- Asynchronous: Executes as soon as download completes; execution order unpredictable -->
<script async src="analytics.js"></script>

<!-- Deferred: Executes in order after DOM parsing finishes, right before DOMContentLoaded -->
<script defer src="app.js"></script>`,
      },
    ],
    tags: ['html', 'fundamentals', 'scripts', 'performance', 'async', 'defer', 'dom-parsing'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Practical',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 2. Semantic HTML (3 Questions: 1 Junior, 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'html',
    topicSlug: 'semantic-html',
    question: 'What is Semantic HTML, and why is it preferred over generic <div> and <span> tags?',
    title: 'Semantic HTML Elements and Architecture',
    answer:
      'Semantic HTML uses tags that convey the meaning, structure, and intent of the content to both the browser and the developer (e.g. `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`), rather than presentation-only generic containers like `<div>` and `<span>`.',
    explanation:
      'Semantic tags give screen readers landmark navigation, allowing visually impaired users to jump directly to navigation or main content. They also help search engine crawlers understand page taxonomy, boosting SEO and improving code maintainability.',
    interviewAnswer:
      'Semantic HTML means using HTML elements according to their actual meaning rather than just for visual presentation. For example, using header, nav, main, article, and footer instead of a page full of nested divs. Semantic markup provides accessibility landmarks for screen readers, improves search engine indexing, and makes code significantly cleaner and easier for teams to maintain.',
    importantPoints: [
      'Provides accessibility landmarks for screen readers and assistive technology',
      'Improves SEO by helping search engine bots parse document structure and content relevance',
      'Reduces "div soup" and enhances code readability and maintainability across engineering teams',
      '<main> represents the primary unique content of the document (should only appear once per page)',
    ],
    comparisons: [
      {
        aspect: 'Tag Examples',
        'Semantic HTML': '<header>, <nav>, <main>, <article>, <section>, <aside>, <footer>',
        'Non-Semantic HTML': '<div>, <span>',
      },
      {
        aspect: 'Accessibility Role',
        'Semantic HTML': 'Exposes built-in accessibility landmarks automatically to screen readers',
        'Non-Semantic HTML': 'Requires manual role="" attributes to convey landmark meaning',
      },
      {
        aspect: 'Search Engine Indexing',
        'Semantic HTML': 'Identifies key article body vs navigation vs boilerplate footer',
        'Non-Semantic HTML': 'Treated uniformly as arbitrary layout containers',
      },
    ],
    tags: ['html', 'semantic-html', 'accessibility', 'seo', 'architecture'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Conceptual',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'semantic-html',
    question: 'What is the semantic distinction between <article>, <section>, and <div> in HTML5?',
    title: 'Semantic Distinction: <article> vs <section> vs <div>',
    answer:
      '`<article>` represents an independent, self-contained piece of content that could theoretically be syndicated, distributed, or reused on its own (like a blog post, news story, or user comment). `<section>` represents a thematic grouping of content, typically introduced with a heading. `<div>` is a generic non-semantic styling container with zero semantic meaning.',
    explanation:
      'A common antipattern is replacing every `<div>` with `<section>`. If a container is purely for layout, flexbox, or grid styling, `<div>` is the correct semantic choice. An `<article>` can contain multiple `<section>` elements (e.g. introduction, chapters), or a `<section>` can contain multiple `<article>` elements (e.g. a latest blog posts section containing individual article cards).',
    interviewAnswer:
      'An article represents an independent, reusable piece of content that makes sense on its own, like a blog post or product card. A section represents a thematic chunk of content within a document, almost always starting with a heading, like an About section. A div carries no meaning at all and should be used strictly as a styling or layout wrapper when no semantic tag fits.',
    importantPoints: [
      '<article>: Self-contained, independently distributable content (blog post, forum comment, tweet)',
      '<section>: Thematic group of content, typically requires an h2-h6 heading tag',
      '<div>: Pure styling wrapper; carries no semantic weight and conveys nothing to accessibility trees',
      'Do not abuse <section> as a substitute for <div> when no heading or thematic purpose exists',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'Proper Semantic Composition',
        code: `<main>
  <!-- Thematic section containing multiple independent articles -->
  <section aria-labelledby="featured-title">
    <h2 id="featured-title">Latest Articles</h2>
    
    <article>
      <h3>Understanding Event Loop in JS</h3>
      <p>A comprehensive guide to microtasks and macrotasks...</p>
    </article>
    
    <article>
      <h3>CSS Grid Masterclass</h3>
      <p>Building complex responsive layouts effortlessly...</p>
    </article>
  </section>
</main>`,
      },
    ],
    tags: ['html', 'semantic-html', 'article', 'section', 'div', 'best-practices'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Comparison',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'semantic-html',
    question: 'How do HTML heading tags (h1-h6) influence accessibility trees and search engine crawling algorithms?',
    title: 'Heading Hierarchy and Document Outlining in Accessibility and SEO',
    answer:
      'Heading tags (`<h1>` through `<h6>`) construct a hierarchical table of contents for both screen readers and search engine crawlers. Assistive technologies allow users to navigate web pages by jumping from heading to heading, while search engines use heading weights and keywords to determine document topical relevance.',
    explanation:
      'Skipping heading levels (e.g. jumping from `<h1>` directly to `<h3>`) disorients screen reader users who rely on heading level announcement to understand depth. A page must have exactly one primary `<h1>` representing the main subject, followed by sequentially nested subheadings.',
    interviewAnswer:
      'Headings create the document outline. Screen reader users often press the H key to scan a page by its headings before reading content, so skipping levels like going from H1 directly to H3 breaks their mental model of the page. For SEO, search engines use H1 to understand the core subject and H2 through H6 to extract secondary topics. Every page should have a single descriptive H1 followed by logically ordered subheadings.',
    importantPoints: [
      'Maintain strict sequential hierarchy: <h1> -> <h2> -> <h3> (never skip levels for visual sizing)',
      'Use CSS font-size for visual presentation, not heading levels',
      'A page should ideally feature a single <h1> that clearly states the document purpose',
      'Screen readers provide dedicated shortcut keys (like H in NVDA/JAWS) to jump across headings',
    ],
    tags: ['html', 'semantic-html', 'headings', 'accessibility', 'seo', 'screen-readers'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Practical',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 3. Forms (3 Questions: 1 Junior, 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'html',
    topicSlug: 'forms',
    question: 'What is the purpose of the <label> element and how does the "for" attribute improve form usability?',
    title: 'Form Labels and the "for" Attribute Association',
    answer:
      'The `<label>` element represents a caption for an interface item in a form. Connecting a label to an input via the `for` attribute (matching the input’s `id`) programmatically links them in the accessibility tree and expands the clickable target area to the label text itself.',
    explanation:
      'When clicking on a properly associated `<label>`, the browser automatically focuses the input or toggles a radio/checkbox. For mobile devices, this enlarges tiny hit areas for checkboxes and radio buttons, dramatically improving usability.',
    interviewAnswer:
      'The label tag gives an input an accessible name. By setting the for attribute on the label to match the input’s id, screen readers announce the label whenever the input is focused. Additionally, clicking the label text focuses the text input or toggles a checkbox, which makes small touch targets on mobile much easier to tap.',
    importantPoints: [
      'Binds label to input via label for="id" matching input id="id"',
      'Alternatively wraps the input inside the <label> element (implicit association)',
      'Expands clickable hit area to label text, crucial for checkboxes and radio buttons on touch screens',
      'Provides required accessible name for screen readers to announce on input focus',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'Explicit vs Implicit Label Association',
        code: `<!-- Explicit Association (Recommended): for matches input id -->
<label for="user-email">Email Address:</label>
<input type="email" id="user-email" name="email" required />

<!-- Implicit Association: Input nested inside label -->
<label>
  <input type="checkbox" name="terms" required />
  I agree to the Terms of Service
</label>`,
      },
    ],
    tags: ['html', 'forms', 'label', 'accessibility', 'usability'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Practical',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'forms',
    question: 'What native HTML5 form validation attributes exist, and how does the browser handle invalid inputs?',
    title: 'Native HTML5 Form Validation Attributes',
    answer:
      'HTML5 provides built-in client-side validation attributes including `required`, `pattern` (regex), `min`/`max` (numbers/dates), `minlength`/`maxlength` (string length), and specialized input types (`email`, `url`, `number`). When submitting, the browser blocks the submit event and displays native validation tooltips if constraints fail.',
    explanation:
      'The CSS pseudo-classes `:valid`, `:invalid`, `:user-invalid`, and `:required` allow styling inputs based on validation state. JavaScript can customize this behavior using the Constraint Validation API (`input.checkValidity()`, `input.setCustomValidity()`).',
    interviewAnswer:
      'HTML5 provides declarative validation without needing JavaScript. You can use attributes like required, pattern with a regular expression, min and max for numbers, and minlength or maxlength. The browser intercepts form submission, focuses the first invalid element, and shows a localized tooltip. We can style them using the :valid and :invalid CSS pseudo-classes, and control messaging with the checkValidity API.',
    importantPoints: [
      'Declarative validation via required, pattern, min, max, minlength, maxlength',
      'Input types like type="email" and type="url" perform automatic syntax checks',
      'Browser prevents form submission and triggers the invalid event on failed fields',
      'Always implement server-side validation; HTML5 client validation can be easily bypassed by disabling JS or editing DOM',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'HTML5 Form Validation Example',
        code: `<form action="/register" method="POST">
  <!-- Validates standard email pattern and non-empty -->
  <input type="email" name="email" required />

  <!-- Requires 8+ characters, at least 1 uppercase and 1 number -->
  <input type="password" name="pwd" 
         pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
         title="Must contain at least 8 characters, one number, and one uppercase letter" 
         required />

  <button type="submit">Sign Up</button>
</form>`,
      },
    ],
    tags: ['html', 'forms', 'validation', 'html5', 'constraint-validation'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Practical',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'forms',
    question: 'How do form submission encodings (application/x-www-form-urlencoded vs multipart/form-data) work, and how does CSRF protection integrate with forms?',
    title: 'Form Encodings (enctype) and CSRF Protection Mechanics',
    answer:
      '`application/x-www-form-urlencoded` encodes form key-value pairs into a percent-encoded query string (`name=John+Doe&age=30`), suitable for standard text inputs. `multipart/form-data` splits the request body into distinct MIME boundary sections, required when uploading binary files (`<input type="file">`). Cross-Site Request Forgery (CSRF) protection injects a hidden, cryptographically random token (`<input type="hidden" name="_csrf" value="...">`) that the server validates against the user’s session.',
    explanation:
      'Because browser forms automatically include authentication cookies when submitting cross-origin requests, malicious third-party websites can forge POST requests on behalf of logged-in users. CSRF tokens ensure that the request originated from an authentic HTML page generated by the legitimate application server.',
    interviewAnswer:
      'The form enctype dictates how payload data is serialized. Standard text forms use application/x-www-form-urlencoded which serializes fields like a URL query string. But if a form contains file uploads, you must use multipart/form-data so the browser sends the binary payload in separate boundary-delimited chunks. Because forms automatically attach cookies across domains, attackers can trigger unauthorized actions; we defend against this by embedding a hidden CSRF token inside the form that the server verifies before processing.',
    importantPoints: [
      'enctype defaults to application/x-www-form-urlencoded for text-based form submissions',
      'multipart/form-data is strictly required for file uploads (<input type="file">)',
      'CSRF attacks exploit automatic browser cookie attachment on cross-site form POSTs',
      'Hidden CSRF input fields ensure only requests containing a valid per-session secret are accepted',
    ],
    tags: ['html', 'forms', 'enctype', 'file-upload', 'security', 'csrf'],
    preparationLevels: ['advanced'],
    preparationLevelSlugs: ['advanced'],
    difficulty: 'hard',
    questionType: 'Scenario Based',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 4. Accessibility (3 Questions: 1 Junior, 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'html',
    topicSlug: 'accessibility',
    question: 'What is the purpose of the alt attribute on <img> tags, and when should an alt attribute be left completely empty (alt="")?',
    title: 'Image Accessibility and Decorative alt="" Attributes',
    answer:
      'The `alt` attribute provides alternative text for screen readers and displays when the image fails to load. An `alt` attribute should be left empty (`alt=""`) when an image is purely decorative and conveys no meaningful information to avoid cluttering screen reader announcements.',
    explanation:
      'If you omit the `alt` attribute entirely, screen readers announce the raw image filename (e.g. "image_4029_banner.jpg"), which creates a terrible accessibility experience. An empty `alt=""` explicitly tells screen readers to ignore the image.',
    interviewAnswer:
      'The alt attribute provides a text description of an image for screen reader users and displays if the image file fails to load. If an image conveys information or context, like a chart or user avatar, alt should describe that content concisely. If the image is purely decorative, like an ambient background flourish, you should set alt="" as an empty string so screen readers skip it. Never omit the alt attribute completely, because screen readers will read the raw image URL instead.',
    importantPoints: [
      'Informational images require concise, descriptive alt text',
      'Decorative images require alt="" (empty string) to inform screen readers to skip them',
      'Omitting alt completely causes screen readers to read the raw file URL',
      'Avoid starting alt text with "Image of..." or "Picture of..." since screen readers already announce it as an image',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'Informational vs Decorative Images',
        code: `<!-- Informative: Conveys key data -->
<img src="sales-chart.png" alt="Bar chart showing a 40% increase in Q3 sales revenue" />

<!-- Decorative: Purely visual flourish; screen reader skips it -->
<img src="geometric-shape.svg" alt="" role="presentation" />

<!-- BAD: Screen reader reads "https://example.com/assets/img83749.jpg" -->
<img src="hero-banner.jpg" />`,
      },
    ],
    tags: ['html', 'accessibility', 'images', 'alt-text', 'screen-readers', 'wcag'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Practical',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'accessibility',
    question: 'What is WAI-ARIA, what are ARIA roles and attributes, and what is the "First Rule of ARIA"?',
    title: 'WAI-ARIA Roles, Attributes, and the First Rule of ARIA',
    answer:
      'WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications) is a specification providing HTML attributes (`role`, `aria-expanded`, `aria-hidden`, `aria-live`) to communicate semantics to assistive technologies. The "First Rule of ARIA" states: "If you can use a native HTML element or attribute with the semantics you need, do so instead of re-purposing an element and adding an ARIA role."',
    explanation:
      'For example, using `<button>` natively gives you keyboard focusability (Tab key), Enter/Space key activation, and the button role in the accessibility tree. Building `<div role="button">` requires manually implementing tabindex, keydown listeners, and ARIA state synchronization.',
    interviewAnswer:
      'WAI-ARIA provides attributes to make dynamic web applications accessible when native HTML falls short. It lets you define roles, states, and live announcements like aria-expanded or aria-live. The First Rule of ARIA is that you should always use native semantic HTML instead of adding ARIA to non-semantic tags whenever possible. For example, using a native button gives you keyboard handling and focus out of the box, whereas putting role="button" on a div requires you to manually manage tabindex and key listeners.',
    importantPoints: [
      'First Rule of ARIA: Do not use ARIA when native semantic HTML is already available',
      'Native elements (<button>, <select>, <dialog>) provide free keyboard event handling and focus states',
      'aria-expanded indicates whether an accordion or dropdown menu is open or closed',
      'aria-live informs screen readers to announce dynamic content updates (like notifications or stock tickers)',
    ],
    comparisons: [
      {
        aspect: 'Implementation',
        'Native <button>': '1 line of HTML; built-in keyboard navigation & click handling',
        '<div role="button">': 'Requires role="button", tabindex="0", onKeyDown Enter/Space listener',
      },
      {
        aspect: 'Reliability',
        'Native <button>': '100% standard across all OS, browsers, and screen readers',
        '<div role="button">': 'High risk of accessibility regressions and incomplete keyboard support',
      },
    ],
    tags: ['html', 'accessibility', 'aria', 'wai-aria', 'wcag'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Conceptual',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'accessibility',
    question: 'How do you engineer an accessible modal dialog in HTML with focus management and focus trapping?',
    title: 'Accessible Modal Dialogs and Focus Trapping Mechanics',
    answer:
      'An accessible modal dialog must: 1) use the native `<dialog>` element (or `role="dialog"` with `aria-modal="true"`), 2) set `aria-labelledby` linking to the dialog title, 3) save the trigger element’s focus on open and transfer focus inside the modal, 4) trap keyboard Tab navigation inside the modal, and 5) close on Escape key and return focus back to the original trigger element.',
    explanation:
      'Focus trapping prevents keyboard users from accidentally tabbing into elements hidden behind the overlay backdrop. The modern native `<dialog>` element with `dialog.showModal()` implements focus trapping, backdrop styling (`::backdrop`), and Escape-key closure natively without custom JavaScript.',
    interviewAnswer:
      'An accessible modal requires strict focus management. When opened, the user’s current focus must be saved, and focus must move into the first interactive element inside the modal. You must trap focus so that pressing Tab circles within the dialog and cannot escape to the background document. Pressing the Escape key must close the modal and immediately restore focus to the button that originally triggered it. The best modern approach is using the native HTML dialog tag with showModal(), which handles focus trapping and the Escape key automatically.',
    importantPoints: [
      'HTML5 native <dialog> with showModal() implements top-layer focus trapping natively',
      'If implementing manually: require role="dialog", aria-modal="true", and aria-labelledby',
      'Trap keyboard focus: Cycle Tab and Shift+Tab between first and last focusable elements',
      'Always return focus to the invoking trigger button when the modal closes',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'Native Accessible Dialog',
        code: `<!-- Trigger Button -->
<button id="open-btn" onclick="document.getElementById('terms-dialog').showModal()">
  Review Terms
</button>

<!-- Native Dialog: Traps focus and handles Escape natively! -->
<dialog id="terms-dialog" aria-labelledby="dialog-heading">
  <h2 id="dialog-heading">Terms of Service</h2>
  <p>Please read and accept our policies...</p>
  <button onclick="document.getElementById('terms-dialog').close()">Accept & Close</button>
</dialog>`,
      },
    ],
    tags: ['html', 'accessibility', 'modal', 'dialog', 'focus-trap', 'keyboard-navigation'],
    preparationLevels: ['advanced'],
    preparationLevelSlugs: ['advanced'],
    difficulty: 'hard',
    questionType: 'Practical',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 5. Tables & Lists (2 Questions: 1 Junior, 1 Intermediate)
  // ==========================================
  {
    technologySlug: 'html',
    topicSlug: 'tables-lists',
    question: 'How do you build a semantically structured, accessible data table in HTML using <thead>, <tbody>, <th>, and the scope attribute?',
    title: 'Accessible HTML Table Architecture with <thead>, <tbody>, and scope',
    answer:
      'An accessible data table uses `<caption>` to describe the table’s purpose, `<thead>` for column headings, `<tbody>` for tabular data, and `<th>` with the `scope` attribute (`scope="col"` or `scope="row"`) to explicitly link header cells to their corresponding data cells (`<td>`).',
    explanation:
      'Screen readers use the `scope` attribute to announce the associated column and row headers as visually impaired users navigate individual data cells. Without `<th>` and `scope`, reading a matrix of numbers is nearly impossible for non-sighted users.',
    interviewAnswer:
      'To build an accessible table, you encapsulate header rows inside thead and data rows inside tbody. You use th instead of td for all headers and provide a scope attribute—set to "col" for column headers and "row" for row headers. You also add a caption tag at the top to describe the table. This allows screen readers to announce the exact row and column names whenever a user moves between cells.',
    importantPoints: [
      '<caption>: Provides a descriptive accessible title for the table',
      '<thead>, <tbody>, <tfoot>: Partitions header, data, and summary calculations',
      '<th> with scope="col" or scope="row": Connects header cells to data cells',
      'Never use HTML tables for page layouts; use CSS Flexbox or Grid instead',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'Accessible Data Table Example',
        code: `<table>
  <caption>Quarterly Sales Revenue by Region</caption>
  <thead>
    <tr>
      <th scope="col">Region</th>
      <th scope="col">Q1 Revenue</th>
      <th scope="col">Q2 Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">North America</th>
      <td>$120,000</td>
      <td>$145,000</td>
    </tr>
    <tr>
      <th scope="row">Europe</th>
      <td>$95,000</td>
      <td>$110,000</td>
    </tr>
  </tbody>
</table>`,
      },
    ],
    tags: ['html', 'tables-lists', 'tables', 'thead', 'tbody', 'accessibility'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Practical',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'tables-lists',
    question: 'When should you use Description Lists (<dl>, <dt>, <dd>) instead of standard <ul> or <ol> lists in HTML?',
    title: 'Description Lists (<dl>, <dt>, <dd>) vs Unordered Lists (<ul>)',
    answer:
      'Description Lists (`<dl>`) represent a collection of name-value or term-description pairs, comprised of term elements (`<dt>`) and description/definition elements (`<dd>`). They are ideal for glossaries, metadata displays, configuration key-value settings, and FAQ lists where items naturally form pairs.',
    explanation:
      'A `<dt>` can have multiple `<dd>` definitions, or multiple `<dt>` terms can share a single `<dd>`. Screen readers recognize description lists and announce term-description relationships distinctly compared to standard bulleted `<ul>` lists.',
    interviewAnswer:
      'Use description lists whenever your data consists of key-value pairs or term-definition relationships, such as glossaries, metadata displays (like Author and Published Date), or FAQs. You use dl as the wrapper, dt for the term or label, and dd for the value or definition. Unlike standard ul or ol lists, description lists communicate to screen readers that the elements are directly associated pairs.',
    importantPoints: [
      '<dl> wraps the list; <dt> denotes the term/key; <dd> denotes the description/value',
      'One <dt> can have multiple <dd> elements, or multiple <dt> can share one <dd>',
      'HTML5 allows grouping <dt> and <dd> inside <div> containers within the <dl> for CSS styling',
      'Perfect semantic fit for product specifications, metadata cards, and FAQ accordions',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'Description List for Metadata',
        code: `<dl class="metadata-grid">
  <div>
    <dt>Author:</dt>
    <dd>Jane Doe</dd>
  </div>
  <div>
    <dt>Published:</dt>
    <dd><time datetime="2026-09-01">September 1, 2026</time></dd>
  </div>
  <div>
    <dt>Tags:</dt>
    <dd>HTML</dd>
    <dd>Accessibility</dd>
  </div>
</dl>`,
      },
    ],
    tags: ['html', 'tables-lists', 'lists', 'description-list', 'semantic-html'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Conceptual',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 6. Media (3 Questions: 1 Junior, 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'html',
    topicSlug: 'media',
    question: 'How does responsive image optimization work using the <picture> element vs the <img> srcset and sizes attributes?',
    title: 'Responsive Images: <picture> vs <img> srcset and sizes',
    answer:
      '`srcset` and `sizes` on `<img>` let the browser choose the optimal image resolution based on device pixel density (DPR) and viewport width for resolution switching. The `<picture>` element enables "Art Direction" and format switching by serving completely different image crops or modern formats (AVIF/WebP) via child `<source>` elements.',
    explanation:
      'When you want the exact same image at different pixel sizes, `srcset` is best because the browser decides the most bandwidth-efficient asset. When you want a zoomed-in square crop on mobile and a panoramic banner on desktop, `<picture>` is required.',
    interviewAnswer:
      'Use img with srcset and sizes when you have the same image at multiple resolutions and want the browser to pick the best file based on screen width and pixel density. Use the picture element when you need art direction—such as serving a different crop on mobile versus desktop—or when serving modern file formats like AVIF and WebP with a JPEG fallback.',
    importantPoints: [
      'srcset on <img>: Supplies URLs with width descriptors (e.g. hero-800w.jpg 800w)',
      'sizes on <img>: Informs the browser how wide the image will display before CSS downloads',
      '<picture>: Offers art direction (different image crops via media queries) and format switching (AVIF -> WebP -> JPEG)',
      'Always include an <img> tag inside <picture> as the fallback and accessible target',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'Picture Element with Format Fallbacks',
        code: `<picture>
  <!-- Serve AVIF if browser supports it -->
  <source srcset="hero.avif" type="image/avif" />
  <!-- Fallback to WebP -->
  <source srcset="hero.webp" type="image/webp" />
  <!-- Default image tag for legacy browsers and alt text -->
  <img src="hero.jpg" alt="Developers collaborating around a workstation" loading="lazy" />
</picture>`,
      },
    ],
    tags: ['html', 'media', 'images', 'responsive', 'srcset', 'picture', 'performance'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Practical',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'media',
    question: 'How do you implement HTML5 <video> and <audio> with fallback codecs, subtitles (<track>), and preload settings?',
    title: 'HTML5 Video/Audio Architecture and Accessibility Subtitles',
    answer:
      'HTML5 `<video>` and `<audio>` use nested `<source>` tags to supply multiple format codecs (MP4/H.264, WebM/VP9) for cross-browser compatibility. Accessibility subtitles and captions are added via `<track kind="subtitles" src="subs.vtt" srclang="en">`. The `preload` attribute controls bandwidth consumption (`none`, `metadata`, `auto`).',
    explanation:
      'Setting `preload="none"` prevents mobile bandwidth waste. If autoplaying background video, modern browsers strictly require the `muted` and `playsinline` attributes; otherwise, autoplay is blocked by browser security policies.',
    interviewAnswer:
      'To embed video and audio reliably, wrap multiple source tags inside the video element so the browser can pick supported codecs like WebM or MP4. For accessibility, provide closed captions using the track tag with a WebVTT file. You can configure preload="metadata" to download only video duration and dimensions rather than the full stream. And if you need autoplay, you must include the muted and playsinline attributes or browsers will block playback.',
    importantPoints: [
      'Supply multiple <source> tags: WebM (efficient open format) and MP4 (universal support)',
      '<track> tag loads WebVTT (.vtt) text tracks for subtitles, captions, and chapter cues',
      'preload attribute: none (conserves bandwidth), metadata (fetches dimensions/duration), auto',
      'Autoplay requirements: Must be accompanied by muted and playsinline attributes in modern browsers',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'Accessible Video Embedding',
        code: `<video controls preload="metadata" poster="poster.jpg" width="800" height="450">
  <source src="interview-tips.webm" type="video/webm" />
  <source src="interview-tips.mp4" type="video/mp4" />
  <track kind="captions" src="captions-en.vtt" srclang="en" label="English Captions" default />
  <p>Your browser does not support HTML5 video. <a href="interview-tips.mp4">Download video</a>.</p>
</video>`,
      },
    ],
    tags: ['html', 'media', 'video', 'audio', 'track', 'subtitles', 'codecs'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Practical',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'media',
    question: 'How does omitting width and height attributes on <img> tags cause Cumulative Layout Shift (CLS), and how does the browser calculate aspect ratio?',
    title: 'Image Dimensions, Aspect Ratio, and Cumulative Layout Shift (CLS)',
    answer:
      'When an `<img>` lacks explicit `width` and `height` attributes, the browser allocates zero vertical height for it until the image binary downloads and decodes. Once loaded, the image suddenly expands, pushing down all subsequent content and causing severe Cumulative Layout Shift (CLS). Providing `width` and `height` attributes allows modern browsers to calculate the aspect ratio upfront and reserve layout space.',
    explanation:
      'Modern browsers use HTML `width` and `height` attributes to automatically establish an internal `aspect-ratio: width / height`. Combined with CSS `width: 100%; height: auto;`, the browser computes the reserved responsive height before the image file even begins downloading.',
    interviewAnswer:
      'If you don’t put width and height attributes on an image tag, the browser initially renders the container with zero height. When the image finally loads, the page jumps downward, which severely hurts your Cumulative Layout Shift (CLS) Core Web Vital. By adding width and height attributes in the HTML, modern browsers automatically calculate the image’s aspect ratio and reserve the exact space needed while the image downloads, eliminating layout jumps.',
    importantPoints: [
      'Omitting dimensions causes zero-height placeholders that expand on load (major CLS penalty)',
      'HTML width and height allow the browser to compute aspect-ratio before image download begins',
      'Combine with CSS: img { width: 100%; height: auto; } for fully responsive, non-jumping images',
      'Directly impacts Google Core Web Vitals and search rankings',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'Non-Jumping Responsive Image',
        code: `<!-- HTML specifies intrinsic dimensions -->
<img src="banner.jpg" width="1200" height="600" alt="Platform Overview" loading="lazy" />

<style>
  /* CSS makes it responsive while browser maintains 1200/600 aspect ratio */
  img {
    width: 100%;
    height: auto;
    display: block;
  }
</style>`,
      },
    ],
    tags: ['html', 'media', 'cls', 'performance', 'core-web-vitals', 'aspect-ratio'],
    preparationLevels: ['advanced'],
    preparationLevelSlugs: ['advanced'],
    difficulty: 'hard',
    questionType: 'Performance',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 7. SEO Basics (3 Questions: 1 Junior, 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'html',
    topicSlug: 'seo-basics',
    question: 'What are the essential <head> metadata tags required for SEO and mobile responsiveness?',
    title: 'Essential HTML <head> Tags for SEO and Mobile Responsiveness',
    answer:
      'The critical `<head>` tags are: 1) `<meta charset="UTF-8">` for text encoding, 2) `<meta name="viewport" content="width=device-width, initial-scale=1.0">` for mobile responsive rendering, 3) `<title>` for search engine listing titles and browser tabs, and 4) `<meta name="description">` for the search snippet summary.',
    explanation:
      'Without the viewport meta tag, mobile browsers assume a legacy desktop width of 980px and scale the entire page down to a microscopic size. The `<title>` tag is universally recognized as one of the strongest on-page ranking factors.',
    interviewAnswer:
      'Every web page needs four primary head tags. First is the UTF-8 charset declaration. Second is the viewport meta tag with width=device-width and initial-scale=1.0, which tells mobile devices to render at their actual device width instead of scaling down a 980px desktop canvas. Third is a unique, keyword-optimized title tag. And fourth is a compelling meta description tag of around 155 characters that search engines display as your search result snippet.',
    importantPoints: [
      '<meta charset="UTF-8">: Prevents character encoding bugs and garbled text',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0">: Enables responsive CSS',
      '<title>: Primary on-page SEO signal; appears in browser tab and search engine result titles',
      '<meta name="description">: Advertises page content in search results; influences click-through rates',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'Core SEO <head> Skeleton',
        code: `<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>System Design Interview Preparation Guide | TechPrep</title>
  <meta name="description" content="Master system design interviews with curated architectures, load balancing, and distributed cache questions." />
</head>`,
      },
    ],
    tags: ['html', 'seo-basics', 'meta-tags', 'viewport', 'mobile', 'fundamentals'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Practical',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'seo-basics',
    question: 'What is the purpose of rel="canonical" and Open Graph (og:*) meta tags in HTML?',
    title: 'Canonical Tags and Open Graph Social Sharing Metadata',
    answer:
      '`<link rel="canonical" href="...">` tells search engines which URL represents the authoritative "master" copy of a page, preventing duplicate content penalties caused by query parameters or tracking IDs. Open Graph tags (`og:title`, `og:image`, `og:description`) configure how a page preview card renders when shared across social platforms (Twitter, LinkedIn, Slack).',
    explanation:
      'If an e-commerce product is accessible via `/shoes?color=red` and `/shoes?ref=newsletter`, both pages share identical content. Setting the canonical tag to `/shoes` ensures search engine link equity concentrates on the main URL.',
    interviewAnswer:
      'The canonical tag tells search engines which URL is the single authoritative source of truth for a page. If the same content is reachable through multiple URLs with tracking parameters or different categories, the canonical tag consolidates page rank and prevents duplicate content penalties. Open Graph tags are specialized meta tags used by social media platforms like LinkedIn, Twitter, and Slack to generate rich visual link preview cards with images and titles when someone shares your URL.',
    importantPoints: [
      '<link rel="canonical">: Eliminates duplicate content penalties and consolidates ranking signals',
      'og:title and og:description: Define social card headlines and summaries',
      'og:image: Defines thumbnail image in social link unfurls (recommended 1200x630px)',
      'Twitter Cards (<meta name="twitter:card" content="summary_large_image">) complement Open Graph',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'Canonical & Open Graph Example',
        code: `<!-- Canonical URL -->
<link rel="canonical" href="https://example.com/blog/web-security" />

<!-- Open Graph Social Metadata -->
<meta property="og:type" content="article" />
<meta property="og:title" content="Web Security Best Practices for Engineers" />
<meta property="og:description" content="Learn how to mitigate XSS, CSRF, and clickjacking vulnerabilities." />
<meta property="og:image" content="https://example.com/images/security-card.png" />
<meta property="og:url" content="https://example.com/blog/web-security" />`,
      },
    ],
    tags: ['html', 'seo-basics', 'canonical', 'open-graph', 'social-media', 'seo'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Practical',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'seo-basics',
    question: 'What is JSON-LD Structured Data in HTML, and how does it generate Rich Snippets in Google search results?',
    title: 'JSON-LD Structured Data and Schema.org Search Snippets',
    answer:
      'JSON-LD (JavaScript Object Notation for Linked Data) is an ambient semantic standard embedded inside `<script type="application/ld+json">` that provides explicit machine-readable data based on Schema.org vocabularies (e.g. `Article`, `FAQPage`, `Course`, `Product`). Search engines use this structured data to generate Rich Snippets (star ratings, price tags, breadcrumbs, and FAQs).',
    explanation:
      'Unlike older Microdata which required cluttering HTML elements with `itemscope` and `itemprop` attributes, JSON-LD is completely decoupled from page markup. It can be easily generated on the server or dynamically injected without modifying CSS or layout.',
    interviewAnswer:
      'JSON-LD is a structured data format embedded inside a script tag with type="application/ld+json". It provides machine-readable metadata based on Schema.org schemas directly to search engines. For example, you can describe a product’s price, star ratings, or FAQ questions. Google uses this to enhance standard search results with rich snippets like review stars and interactive Q&A accordions, which significantly increases organic click-through rates.',
    importantPoints: [
      'Placed inside <script type="application/ld+json"> in the <head> or <body>',
      'Follows Schema.org vocabulary (@context: "https://schema.org", @type: "...")',
      'Completely decoupled from presentation; does not pollute visual HTML markup',
      'Unlocks Google Rich Results: Breadcrumbs, Review Stars, Event Dates, FAQ accordions',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'JSON-LD FAQ Schema Example',
        code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is the difference between SQL and NoSQL?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "SQL databases are relational and table-based with fixed schemas, while NoSQL databases are non-relational document or key-value stores."
    }
  }]
}
</script>`,
      },
    ],
    tags: ['html', 'seo-basics', 'json-ld', 'structured-data', 'schema-org', 'rich-snippets'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Practical',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 8. Browser APIs (2 Questions: 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'html',
    topicSlug: 'browser-apis',
    question: 'What are the architectural differences between localStorage, sessionStorage, Cookies, and IndexedDB for client-side storage?',
    title: 'Client-Side Storage Comparison: LocalStorage vs SessionStorage vs Cookies vs IndexedDB',
    answer:
      '`localStorage` stores synchronous key-value string data (~5-10MB) permanently until cleared. `sessionStorage` stores data scoped strictly to the current browser tab and lifetime. `Cookies` store tiny key-value pairs (~4KB) automatically transmitted in every HTTP request header. `IndexedDB` is an asynchronous, transactional NoSQL object store capable of storing hundreds of megabytes of structured data, blobs, and indexes.',
    explanation:
      'Never store sensitive authorization tokens in `localStorage` due to vulnerability to Cross-Site Scripting (XSS). Use `HttpOnly` cookies for authentication tokens so JavaScript cannot access them. Use `IndexedDB` for offline Progressive Web Apps (PWAs) caching large data sets.',
    interviewAnswer:
      'Cookies are small 4KB storage items sent to the server on every HTTP request; when marked HttpOnly, they protect auth tokens from XSS. LocalStorage provides 5 to 10MB of persistent synchronous key-value storage per origin that survives tab and browser restarts. SessionStorage has the same API as localStorage, but is scoped to a single tab and is cleared when that tab is closed. IndexedDB is an asynchronous, transactional database in the browser capable of storing hundreds of megabytes of complex objects and files, making it ideal for offline PWAs.',
    importantPoints: [
      'Cookies (~4KB): Automatically sent in HTTP request headers; HttpOnly flag prevents XSS theft',
      'localStorage (~5-10MB): Synchronous, origin-scoped, persistent until explicitly deleted',
      'sessionStorage (~5MB): Synchronous, isolated per browser tab, erased on tab closure',
      'IndexedDB (>100MB): Asynchronous, indexed NoSQL database supporting transactions and binary Blobs',
    ],
    comparisons: [
      {
        aspect: 'Capacity',
        Cookies: '~4KB',
        localStorage: '~5MB - 10MB',
        sessionStorage: '~5MB',
        IndexedDB: 'Hundreds of MBs (quota based)',
      },
      {
        aspect: 'Server Access',
        Cookies: 'Sent in every HTTP request automatically',
        localStorage: 'Client-side only',
        sessionStorage: 'Client-side only',
        IndexedDB: 'Client-side only',
      },
      {
        aspect: 'Lifetime',
        Cookies: 'Configurable (Expires/Max-Age)',
        localStorage: 'Persistent indefinitely',
        sessionStorage: 'Tab session only',
        IndexedDB: 'Persistent indefinitely',
      },
      {
        aspect: 'API Style',
        Cookies: 'Synchronous document.cookie string',
        localStorage: 'Synchronous key-value',
        sessionStorage: 'Synchronous key-value',
        IndexedDB: 'Asynchronous event/Promise based',
      },
    ],
    tags: ['html', 'browser-apis', 'storage', 'cookies', 'localstorage', 'indexeddb'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Comparison',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'browser-apis',
    question: 'How do Web Workers work in the browser, and how do they communicate with the main thread without blocking the UI?',
    title: 'Web Workers Architecture and Main Thread Concurrency',
    answer:
      'Web Workers run JavaScript scripts in background operating system threads isolated from the main browser thread. Because JavaScript on the main thread shares execution time with DOM rendering and user input, heavy computational tasks (data crunching, image filtering, cryptographic hashing) cause UI freezes. Web Workers run in the background and communicate with the main thread via message passing using `postMessage()` and the `onmessage` event listener.',
    explanation:
      'Web Workers do not have access to the `window`, `document`, or DOM tree directly. Data transferred between threads is cloned via the Structured Clone Algorithm or transferred zero-copy using `Transferable Objects` (such as `ArrayBuffer`).',
    interviewAnswer:
      'JavaScript in the browser is single-threaded on the main thread, meaning heavy CPU calculations will freeze user scrolling and animations. Web Workers solve this by running tasks on a separate background thread. They communicate back and forth with the main thread using postMessage and onmessage event listeners. Workers cannot access the DOM or window object directly, but they can make network calls using fetch and crunch data before sending the final result back to the main thread.',
    importantPoints: [
      'Executes CPU-intensive code on a background thread to keep UI at 60fps',
      'No direct access to the DOM, window, or document objects',
      'Communicates via asynchronous message passing (postMessage and onmessage)',
      'Data is cloned by default, but ArrayBuffers can be transferred zero-copy for high performance',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Web Worker Main Thread & Worker Communication',
        code: `// --- main.js ---
const worker = new Worker('compute.js');

// Send data to background worker
worker.postMessage({ items: [1000000, 2000000] });

// Receive calculated result
worker.onmessage = (event) => {
  console.log('Calculation complete:', event.data.result);
};

// --- compute.js (Background Thread) ---
self.onmessage = (event) => {
  const result = event.data.items.reduce((acc, n) => acc + n, 0);
  self.postMessage({ result });
};`,
      },
    ],
    tags: ['html', 'browser-apis', 'web-workers', 'multithreading', 'performance', 'concurrency'],
    preparationLevels: ['advanced'],
    preparationLevelSlugs: ['advanced'],
    difficulty: 'hard',
    questionType: 'Practical',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 9. HTML5 Features (3 Questions: 1 Junior, 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'html',
    topicSlug: 'html5-features',
    question: 'How do custom data attributes (data-*) work in HTML5, and how do you access them in JavaScript and CSS?',
    title: 'Custom Data Attributes (data-*) and Dataset API',
    answer:
      'Custom data attributes allow storing arbitrary custom data on standard HTML elements using the `data-*` naming convention (e.g. `data-user-id="42"`). In JavaScript, they are accessed via the `element.dataset` property using camelCase (`element.dataset.userId`). In CSS, they can be targeted using attribute selectors (`[data-status="active"]`).',
    explanation:
      'Data attributes are intended for private page-specific data and should not replace semantic HTML or ARIA roles. The browser automatically converts hyphenated names (`data-card-type`) to camelCase (`cardType`) on the `dataset` object.',
    interviewAnswer:
      'HTML5 data attributes let you attach custom metadata directly to HTML elements by prefixing the attribute name with data-. In JavaScript, you can read and write them using the element.dataset property in camelCase format, so data-user-id becomes dataset.userId. In CSS, you can style elements based on their data attributes using attribute selectors, like brackets around data-active="true".',
    importantPoints: [
      'Format: data-lowercase-hyphenated (e.g. data-analytics-event="click")',
      'JavaScript access: element.dataset.analyticsEvent (camelCase conversion)',
      'CSS targeting: [data-loading="true"] { opacity: 0.5; }',
      'Should not be used to store sensitive data because values are visible in DOM source',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'data-* Usage in HTML, CSS, and JS',
        code: `<!-- HTML -->
<button id="cart-btn" data-product-id="902" data-stock-status="in-stock">
  Add to Cart
</button>

<style>
  /* CSS Attribute Selector */
  button[data-stock-status="out-of-stock"] {
    cursor: not-allowed;
    background-color: #ccc;
  }
</style>

<script>
  // JavaScript Dataset Access
  const btn = document.getElementById('cart-btn');
  console.log(btn.dataset.productId);   // "902"
  console.log(btn.dataset.stockStatus); // "in-stock"
</script>`,
      },
    ],
    tags: ['html', 'html5-features', 'data-attributes', 'dataset', 'dom'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Practical',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'html5-features',
    question: 'What advantages does the native HTML5 <dialog> element provide over custom <div> modal overlays?',
    title: 'Native HTML5 <dialog> Element vs Custom Div Modals',
    answer:
      'The native `<dialog>` element provides built-in browser-managed modal behavior including: 1) rendering in the browser’s "Top Layer" above all `z-index` stacking contexts, 2) built-in `::backdrop` pseudo-element for background dimming, 3) native focus management and focus trapping, and 4) automatic closure and focus restoration on the Escape key.',
    explanation:
      'Custom div modals frequently suffer from z-index clipping bugs inside parents with `overflow: hidden` or CSS transforms. When opened with `dialog.showModal()`, the dialog is appended to the Top Layer by the browser engine, bypassing parent stacking contexts entirely.',
    interviewAnswer:
      'The native dialog tag replaces complex custom modal implementations. When opened with showModal(), the browser puts the dialog in the browser’s Top Layer, meaning it will never be clipped by parent z-index or overflow: hidden styles. It also gives you a native ::backdrop pseudo-element to dim the background, handles focus trapping inside the modal automatically, and listens for the Escape key to close the modal without a single line of custom event handling.',
    importantPoints: [
      'showModal(): Opens as a modal in the Top Layer with native focus trapping and backdrop',
      'show(): Opens as a non-modal popup without backdrop or focus trapping',
      '::backdrop pseudo-element allows direct CSS styling of the background overlay',
      'close() method dismisses dialog and triggers the close event, returning returnValue',
    ],
    comparisons: [
      {
        aspect: 'Stacking Context',
        'Native <dialog>': 'Rendered in browser Top Layer; immune to parent z-index & overflow',
        'Custom <div> Modal': 'Bound to parent stacking context; can be clipped by overflow: hidden',
      },
      {
        aspect: 'Focus Trapping',
        'Native <dialog>': 'Automatic native keyboard focus trap with showModal()',
        'Custom <div> Modal': 'Requires complex custom JavaScript event listeners to trap Tab key',
      },
      {
        aspect: 'Backdrop',
        'Native <dialog>': 'Native ::backdrop CSS pseudo-element',
        'Custom <div> Modal': 'Requires extra overlay div element in DOM',
      },
    ],
    tags: ['html', 'html5-features', 'dialog', 'modal', 'top-layer', 'accessibility'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Comparison',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'html',
    topicSlug: 'html5-features',
    question: 'How do Web Components, the Shadow DOM, and the <template> and <slot> elements enable true component encapsulation in native HTML?',
    title: 'Web Components Architecture: Custom Elements, Shadow DOM, and Slots',
    answer:
      'Web Components are a suite of native browser standards consisting of: 1) **Custom Elements** (`customElements.define()`) to define new HTML tags, 2) **Shadow DOM** (`attachShadow()`) to encapsulate styles and DOM nodes so they do not leak into or get affected by page CSS, and 3) **HTML Templates** (`<template>` and `<slot>`) to declare inert markup fragments that can be stamped out with customizable insertion points.',
    explanation:
      'Before Web Components, styling encapsulation required CSS conventions (like BEM) or build-step CSS modules. Shadow DOM provides true browser-level style encapsulation: a rule like `p { color: red; }` inside a shadow root will never affect paragraph tags outside the component.',
    interviewAnswer:
      'Web Components bring native component encapsulation to the browser without needing a framework like React or Vue. They rely on three core technologies: Custom Elements to define your own tags, the Shadow DOM to encapsulate your component’s internal DOM tree and CSS so styles cannot leak out or be overwritten from the outside, and templates with slots so consumers can inject their own markup into predefined slots inside the component.',
    importantPoints: [
      'Custom Elements: JavaScript class extending HTMLElement registered via customElements.define()',
      'Shadow DOM: Scoped subtree with isolated CSS styles (mode: "open" or "closed")',
      '<template>: Inert HTML parsed by the browser but not rendered until cloned via JS',
      '<slot>: Placeholder inside shadow DOM where consumers can project external children',
    ],
    codeExamples: [
      {
        language: 'javascript',
        title: 'Native Web Component Definition',
        code: `class UserBadge extends HTMLElement {
  constructor() {
    super();
    // Attach Shadow DOM for complete style and DOM isolation
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = \`
      <style>
        .badge { background: #2563eb; color: white; padding: 4px 8px; border-radius: 4px; }
      </style>
      <span class="badge"><slot>Default Role</slot></span>
    \`;
  }
}
customElements.define('user-badge', UserBadge);`,
      },
    ],
    tags: ['html', 'html5-features', 'web-components', 'shadow-dom', 'template', 'slots'],
    preparationLevels: ['advanced'],
    preparationLevelSlugs: ['advanced'],
    difficulty: 'hard',
    questionType: 'Architecture',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
];
