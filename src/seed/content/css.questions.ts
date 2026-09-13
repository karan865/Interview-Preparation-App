import { SeedQuestion } from './types';

export const cssQuestions: SeedQuestion[] = [
  // ==========================================
  // 1. CSS Fundamentals (2 Questions: 1 Junior, 1 Intermediate)
  // ==========================================
  {
    technologySlug: 'css',
    topicSlug: 'css-fundamentals',
    question: 'How does the CSS Cascade work, and how does the browser resolve conflicting style rules?',
    title: 'The CSS Cascade and Style Resolution Algorithm',
    answer:
      'The CSS Cascade is the algorithm browsers use to resolve conflicting CSS rules targeting the same element. It resolves conflicts in order through four main stages: 1) **Origin and Importance** (User-Agent vs User vs Author styles, with `!important` reversing precedence), 2) **Context** (Cascade Layers `@layer`), 3) **Specificity** (Inline styles > ID > Class/Attribute/Pseudo-class > Element/Pseudo-element), and 4) **Order of Appearance** (the rule declared last in source code wins).',
    explanation:
      'A common misconception is that proximity in HTML determines cascade precedence. In reality, HTML structure does not determine precedence: CSS source code order and specificity break all ties.',
    interviewAnswer:
      'The Cascade resolves conflicting styles through four strict stages. First is Origin and Importance, which compares browser default styles, user stylesheets, and author styles, where !important reverses the normal priority. Second is Cascade Layers defined by @layer. Third is Specificity, counting IDs, classes, and elements. And finally, if specificity is equal, Order of Appearance wins—meaning the rule defined latest in the CSS source code takes effect.',
    importantPoints: [
      'Four cascade sorting steps: Origin/Importance -> Cascade Layers -> Specificity -> Source Order',
      '!important gives highest priority to author styles, but user !important overrides author !important for accessibility',
      'HTML element proximity does NOT matter; only CSS source declaration order breaks specificity ties',
      'Inherited styles have the absolute lowest specificity and lose to any direct selector rule',
    ],
    comparisons: [
      {
        aspect: 'Sorting Stage',
        1: 'Origin & Importance (User-Agent vs User vs Author + !important)',
        2: 'Cascade Layers (@layer)',
        3: 'Specificity (Inline > ID > Class > Element)',
        4: 'Source Order (Latest declaration in stylesheet wins)',
      },
    ],
    tags: ['css', 'fundamentals', 'cascade', 'inheritance', 'source-order'],
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
    technologySlug: 'css',
    topicSlug: 'css-fundamentals',
    question: 'What is the architectural difference between CSS Reset, Normalize.css, and modern CSS baselines?',
    title: 'CSS Reset vs Normalize.css vs Modern CSS Baselines',
    answer:
      'A **CSS Reset** (e.g. Eric Meyer Reset) aggressively removes all browser default styling (`margin: 0; padding: 0; border: 0; font-size: 100%`), forcing developers to redefine everything from scratch. **Normalize.css** preserves useful browser defaults (like form styles and heading weights) while normalizing cross-browser rendering bugs. **Modern CSS Baselines** (like Andy Bell’s modern-css-reset) focus on responsive hygiene: setting `box-sizing: border-box`, smooth scrolling, responsive image baselines, and font rendering.',
    explanation:
      'Aggressive resets often strip semantic focus outlines and list indentation, accidentally harming accessibility. Modern projects favor lightweight, opinionated resets focused on layout defaults and accessibility retention.',
    interviewAnswer:
      'A CSS Reset wipes out all default browser styles completely, setting margins, paddings, and font sizes to zero so you start with a blank slate. Normalize.css takes a gentler approach: it keeps useful defaults like form styling and heading bolding, but fixes cross-browser bugs and inconsistencies. Modern CSS resets take the best of both: they enforce box-sizing border-box globally, ensure images never overflow their parents, and maintain keyboard accessibility outlines.',
    importantPoints: [
      'CSS Reset: Aggressive zeroing of all margins, paddings, and borders',
      'Normalize.css: Preserves standard defaults while fixing cross-browser rendering inconsistencies',
      'Modern baseline: Focuses on box-sizing: border-box, max-width: 100% on media, and focus-visible retention',
      'Never remove :focus outlines without providing an accessible alternative focus ring',
    ],
    tags: ['css', 'fundamentals', 'reset', 'normalize', 'best-practices'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Comparison',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 2. Selectors (2 Questions: 1 Junior, 1 Intermediate)
  // ==========================================
  {
    technologySlug: 'css',
    topicSlug: 'selectors',
    question: 'What are CSS combinators, and what is the difference between descendant, child (>), adjacent sibling (+), and general sibling (~)?',
    title: 'CSS Combinators: Descendant vs Child vs Sibling Selectors',
    answer:
      'CSS combinators explain the relationship between two selectors: 1) **Descendant selector (space)** matches all matching elements nested anywhere inside the ancestor. 2) **Child combinator (`>`)** matches only immediate direct children. 3) **Adjacent sibling (`+`)** matches the immediately following sibling element. 4) **General sibling (`~`)** matches any following sibling that shares the same parent.',
    explanation:
      'Descendant selectors cause unintended styling leaks if an element is deeply nested inside another component. Using direct child `>` keeps styling scoped tightly to immediate children, avoiding style bleeding.',
    interviewAnswer:
      'CSS combinators define how elements relate in the DOM tree. A space is a descendant selector, matching elements at any depth inside an ancestor. A greater-than sign (>) is a child combinator, matching only immediate direct children. A plus sign (+) is an adjacent sibling selector, targeting only the element immediately after another element. A tilde (~) is a general sibling selector, targeting all following siblings that share the same parent.',
    importantPoints: [
      'div p (space): All <p> tags inside <div> regardless of nesting depth',
      'div > p (>): Only <p> tags that are immediate direct children of <div>',
      'h2 + p (+): Only the single <p> tag positioned immediately after <h2>',
      'h2 ~ p (~): All <p> siblings that follow <h2> under the same parent',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'Combinators in Action',
        code: `/* Direct child only (avoids leaking into nested sub-lists) */
ul.nav > li {
  display: inline-block;
}

/* First paragraph immediately following an h1 */
h1 + p.lead {
  font-size: 1.25rem;
  font-weight: 500;
}

/* All following sibling error messages */
input.invalid ~ span.error-msg {
  color: #dc2626;
}`,
      },
    ],
    tags: ['css', 'selectors', 'combinators', 'child-selector', 'sibling-selector'],
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
    technologySlug: 'css',
    topicSlug: 'selectors',
    question: 'What is the difference between :nth-child() and :nth-of-type() pseudo-classes in CSS?',
    title: ':nth-child() vs :nth-of-type() Pseudo-Classes',
    answer:
      '`:nth-child(n)` counts every sibling element regardless of tag name; it matches only if the target element is at the exact nth position among all siblings and matches the selector. `:nth-of-type(n)` filters siblings to only those of the exact same HTML tag type first, counting only elements of that specific type.',
    explanation:
      'If you have `<header>`, `<p>`, `<p>`, targeting `p:nth-child(2)` matches the first paragraph (because `<p>` is the 2nd sibling overall). Targeting `p:nth-of-type(2)` matches the second paragraph (because it is the 2nd `<p>` tag among siblings).',
    interviewAnswer:
      'nth-child counts all sibling elements unconditionally. If you write p:nth-child(2), it checks if the second child of the parent is a p tag—if the second child is an h2, nothing matches. In contrast, nth-of-type filters by element type first. So p:nth-of-type(2) skips all headers and divs, and targets the second paragraph element specifically.',
    importantPoints: [
      ':nth-child(an+b): Evaluates position across ALL sibling elements, then checks selector match',
      ':nth-of-type(an+b): Groups siblings by HTML tag name first, then evaluates position among that type',
      'Supports formulas: :nth-child(odd), :nth-child(even), :nth-child(3n+1)',
      'Modern CSS allows :nth-child(n of .class) to filter by class name before counting position',
    ],
    codeExamples: [
      {
        language: 'html',
        title: 'HTML Structure Illustrating Difference',
        code: `<div>
  <h1>Title</h1>       <!-- Sibling 1 -->
  <p>First Para</p>    <!-- Sibling 2: matches p:nth-child(2) AND p:nth-of-type(1) -->
  <p>Second Para</p>   <!-- Sibling 3: matches p:nth-child(3) AND p:nth-of-type(2) -->
</div>

<style>
  /* Matches "First Para" */
  p:nth-child(2) { color: blue; }

  /* Matches "Second Para" */
  p:nth-of-type(2) { color: green; }
</style>`,
      },
    ],
    tags: ['css', 'selectors', 'nth-child', 'nth-of-type', 'pseudo-classes'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Comparison',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 3. Box Model (3 Questions: 1 Junior, 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'css',
    topicSlug: 'box-model',
    question: 'How does the CSS Box Model work, and what is the difference between box-sizing: content-box and border-box?',
    title: 'CSS Box Model and box-sizing: content-box vs border-box',
    answer:
      'Every HTML element is rendered as a rectangular box comprising four concentric layers: **Content**, **Padding**, **Border**, and **Margin**. With `box-sizing: content-box` (default), the `width` property sets only the content area; adding padding or border expands the element’s rendered total width. With `box-sizing: border-box`, `width` encompasses content + padding + border, keeping the outer dimensions fixed.',
    explanation:
      'Under `content-box`, an element with `width: 200px; padding: 20px; border: 5px solid;` renders at `250px` wide (`200 + 40 + 10`), frequently breaking multi-column grid layouts. Setting `border-box` globally makes layout math predictable and intuitive.',
    interviewAnswer:
      'The CSS box model consists of content, padding, border, and margin. Under the default content-box model, if you set width to 200px and add 20px of padding, the actual rendered width becomes 240px because padding is added on top of width. With border-box, the width you specify is the final outer width—padding and border are absorbed inward into that width, making layout sizing completely predictable. This is why almost every modern codebase sets box-sizing: border-box globally.',
    importantPoints: [
      'Four layers from inside out: Content -> Padding -> Border -> Margin',
      'content-box (default): Total width = width + horizontal padding + horizontal border',
      'border-box: Total width = width (padding and border are subtracted from internal content space)',
      'Universal reset: *, *::before, *::after { box-sizing: border-box; }',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'Universal border-box Reset',
        code: `/* Industry standard reset for predictable sizing */
html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}`,
      },
    ],
    tags: ['css', 'box-model', 'box-sizing', 'border-box', 'content-box', 'fundamentals'],
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
    technologySlug: 'css',
    topicSlug: 'box-model',
    question: 'What is margin collapsing in CSS, in what scenarios does it occur, and how can you prevent it?',
    title: 'Margin Collapsing Rules and Prevention Techniques',
    answer:
      'Margin collapsing occurs when the vertical margins (top and bottom) of adjacent block-level elements combine into a single margin whose size equals the maximum of the two margins (rather than the sum). It occurs in three scenarios: 1) Adjacent siblings, 2) Parent and first/last child without separating border/padding, and 3) Empty block elements with margins.',
    explanation:
      'Horizontal margins never collapse. Margins also do not collapse on flex items, grid items, floats, absolute elements, or elements that establish a Block Formatting Context (BFC).',
    interviewAnswer:
      'Margin collapsing happens when vertical margins of block elements touch and collapse into a single margin equal to the largest one, rather than adding together. It commonly happens between adjacent sibling paragraphs, or between a parent and its first child if there is no border or padding separating them. You can prevent margin collapsing by using flexbox or grid (which disable collapsing), adding a 1px border or padding, or using display: flow-root to establish a new block formatting context.',
    importantPoints: [
      'Applies ONLY to vertical margins on block elements in normal flow (horizontal margins never collapse)',
      'Adjacent siblings: margin-bottom of element A collapses with margin-top of element B (largest wins)',
      'Parent and child: child margin-top collapses through parent if parent has no border, padding, or BFC',
      'Prevent via: display: flow-root, 1px padding/border, or using Flexbox/Grid containers',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'Preventing Margin Collapse with flow-root',
        code: `/* Problem: Child margin-top leaks through parent and pushes parent down */
.parent {
  background: #f1f5f9;
}
.child {
  margin-top: 40px; /* Collapses with parent! */
}

/* Solution: Establish Block Formatting Context */
.parent-fixed {
  display: flow-root; /* Creates BFC; margins contained cleanly inside */
  background: #f1f5f9;
}`,
      },
    ],
    tags: ['css', 'box-model', 'margin-collapsing', 'layout', 'bfc'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Troubleshooting',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'css',
    topicSlug: 'box-model',
    question: 'What is a Block Formatting Context (BFC), what triggers create a BFC, and what architectural layout problems does it solve?',
    title: 'Block Formatting Context (BFC) Mechanics and Float Containment',
    answer:
      'A Block Formatting Context (BFC) is an isolated visual formatting region of a web page in which block boxes are laid out according to block formatting rules. What happens inside a BFC does not affect the outside layout, and vice versa. It solves three critical problems: 1) **Containing internal floats** (clearing floats without clearfixes), 2) **Preventing margin collapsing** with external elements, and 3) **Preventing text from wrapping around adjacent floats** (creating two-column layouts).',
    explanation:
      'In modern CSS, the cleanest way to create a BFC without unintended side effects is `display: flow-root`. Legacy hacks used `overflow: hidden` or `overflow: auto`, which carried risks of clipping dropdown menus or generating unwanted scrollbars.',
    interviewAnswer:
      'A Block Formatting Context, or BFC, is an independent rendering environment in CSS where layout rules are contained locally. Inside a BFC, floating elements are contained so parent containers don’t collapse to zero height, and vertical margins cannot leak outside to collapse with external elements. Historically, developers triggered a BFC with overflow: hidden, but today the standard and cleanest way to establish a BFC is using display: flow-root.',
    importantPoints: [
      'BFC isolates internal layout: floats are contained, and external margins cannot collapse into it',
      'Common triggers: display: flow-root (modern standard), overflow: hidden/auto, position: absolute/fixed, display: inline-block',
      'Prevents parent height collapse when containing floated child elements',
      'Prevents sibling elements from overlapping or wrapping around floated items',
    ],
    tags: ['css', 'box-model', 'bfc', 'block-formatting-context', 'floats', 'advanced'],
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
  // 4. Flexbox (3 Questions: 1 Junior, 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'css',
    topicSlug: 'flexbox',
    question: 'What is the difference between the main axis and cross axis in Flexbox, and how do justify-content and align-items control alignment?',
    title: 'Flexbox Main Axis vs Cross Axis Alignment Mechanics',
    answer:
      'The **Main Axis** is defined by the `flex-direction` property (defaults to horizontal `row`), and the **Cross Axis** runs perpendicular to it (vertical `column`). `justify-content` controls alignment along the **Main Axis** (`flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`). `align-items` controls alignment along the **Cross Axis** (`stretch`, `center`, `flex-start`, `flex-end`, `baseline`).',
    explanation:
      'When `flex-direction: column` is declared, the axes swap: the main axis becomes vertical, meaning `justify-content` now controls vertical spacing, while `align-items` controls horizontal alignment.',
    interviewAnswer:
      'In Flexbox, the main axis follows the direction set by flex-direction, which defaults to row (horizontal). The cross axis is always perpendicular to the main axis. justify-content always aligns items along the main axis, while align-items aligns items along the cross axis. If you switch flex-direction to column, the main axis becomes vertical, meaning justify-content now aligns vertically and align-items aligns horizontally.',
    importantPoints: [
      'Main Axis: Controlled by flex-direction (row, row-reverse, column, column-reverse)',
      'Cross Axis: Always perpendicular (90 degrees) to the main axis',
      'justify-content: Distributes free space along the MAIN axis',
      'align-items: Aligns items along the CROSS axis (defaults to stretch)',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'Perfect Centering with Flexbox',
        code: `.container {
  display: flex;
  justify-content: center; /* Centers along main axis (horizontal) */
  align-items: center;     /* Centers along cross axis (vertical) */
  height: 100vh;
}`,
      },
    ],
    tags: ['css', 'flexbox', 'justify-content', 'align-items', 'axis', 'layout'],
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
    technologySlug: 'css',
    topicSlug: 'flexbox',
    question: 'How does the flex shorthand property work, and what is the mathematical calculation behind flex-grow, flex-shrink, and flex-basis?',
    title: 'Flex Shorthand Math: flex-grow, flex-shrink, and flex-basis',
    answer:
      'The shorthand `flex: <grow> <shrink> <basis>` controls how a flex item sizes relative to available space. 1) **flex-basis** defines the initial size before free space is distributed. 2) **flex-grow** determines how remaining positive free space is divided among items proportional to their grow factors. 3) **flex-shrink** determines how negative space (overflow) is removed from items proportional to their shrink factor multiplied by their flex-basis.',
    explanation:
      'Common shorthands: `flex: 1` expands to `flex: 1 1 0%` (items grow and shrink equally, ignoring content size). `flex: auto` expands to `flex: 1 1 auto` (items grow and shrink based on their intrinsic content size). `flex: initial` expands to `flex: 0 1 auto` (items do not grow, but shrink if needed).',
    interviewAnswer:
      'The flex shorthand combines flex-grow, flex-shrink, and flex-basis. flex-basis sets the item’s initial size before distributing remaining space. If there is extra space in the container, flex-grow distributes that leftover space proportionally. If the container is too small, flex-shrink determines how much each item compresses to prevent overflow. A key interview tip is knowing that flex: 1 expands to 1 1 0%, which distributes space evenly regardless of original content length.',
    importantPoints: [
      'flex-basis: Initial size before space distribution (defaults to auto)',
      'flex-grow: Ratio of remaining positive space allocated to this item',
      'flex-shrink: Ratio of negative overflow space deducted from this item',
      'flex: 1 = flex: 1 1 0%; flex: auto = flex: 1 1 auto; flex: none = flex: 0 0 auto',
    ],
    comparisons: [
      {
        aspect: 'Shorthand',
        'flex: 1': 'flex: 1 1 0% (ignores intrinsic size; guarantees equal widths)',
        'flex: auto': 'flex: 1 1 auto (factors in intrinsic content width before growing)',
        'flex: initial': 'flex: 0 1 auto (default: won’t grow, but shrinks if cramped)',
        'flex: none': 'flex: 0 0 auto (rigid: neither grows nor shrinks)',
      },
    ],
    tags: ['css', 'flexbox', 'flex-grow', 'flex-shrink', 'flex-basis', 'shorthand'],
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
    technologySlug: 'css',
    topicSlug: 'flexbox',
    question: 'Why does text-overflow: ellipsis fail inside a flex item by default, and how does min-width: 0 resolve flexbox overflow bugs?',
    title: 'Flex Item Text Truncation and the min-width: 0 Fix',
    answer:
      'By default, flex items have an implicit `min-width: auto` (or `min-height: auto` in column mode). This prevents flex items from shrinking smaller than their intrinsic content size (the length of a long non-breaking word or URL), causing text truncation (`white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`) to fail and overflow the container. Setting `min-width: 0` overrides this default, allowing the item to shrink below content size and trigger ellipsis truncation.',
    explanation:
      'In standard block layout, `min-width` defaults to `0`. But in Flexbox specifications, `min-width: auto` was intentionally designed so items don’t collapse content unexpectedly. Overriding it with `min-width: 0` is the canonical fix for responsive flex children.',
    interviewAnswer:
      'By default in flexbox, flex items have min-width: auto, which means they refuse to shrink narrower than their longest word or content. When you try to truncate a long line of text using text-overflow: ellipsis, the flex item expands past the container boundary rather than clipping, because min-width: auto prevents shrinking. Adding min-width: 0 to the flex item allows it to compress below its content width, which immediately enables text-overflow: ellipsis to work properly.',
    importantPoints: [
      'Flex items default to min-width: auto (cannot shrink below intrinsic content size)',
      'Long URLs or single words force flex container to blow out horizontally',
      'text-overflow: ellipsis requires element to have smaller width than its text content',
      'Fix: Apply min-width: 0 (or min-height: 0 in column direction) on the flex child',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'Fixing Truncation in Flexbox',
        code: `.card-header {
  display: flex;
  align-items: center;
}

.card-title {
  flex: 1;
  min-width: 0; /* CRITICAL FIX: Allows item to shrink smaller than text! */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}`,
      },
    ],
    tags: ['css', 'flexbox', 'min-width', 'text-overflow', 'ellipsis', 'troubleshooting'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Troubleshooting',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 5. Grid (3 Questions: 1 Junior, 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'css',
    topicSlug: 'grid',
    question: 'What is CSS Grid, how does the fr (fractional) unit work, and how does Grid differ fundamentally from Flexbox?',
    title: 'CSS Grid Fundamentals and 2D Grid vs 1D Flexbox',
    answer:
      'CSS Grid is a two-dimensional layout system capable of handling both rows and columns simultaneously, whereas Flexbox is a one-dimensional system designed for laying out items in a single row or column. The `fr` (fractional) unit represents a fraction of the leftover free space in the grid container after fixed tracks (`px`, `rem`, content) are allocated.',
    explanation:
      'Use Flexbox when you want content to dictate its own size and flow linearly (like navigation bars, toolbars, card button rows). Use Grid when you want strict two-dimensional alignment where rows and columns align simultaneously across both axes (like photo galleries, dashboards, application shells).',
    interviewAnswer:
      'The core difference is that Flexbox is one-dimensional—handling either a row or a column at a time—while CSS Grid is two-dimensional, controlling both rows and columns at the same time. The fr unit stands for fractional unit; it distributes leftover space proportionally among tracks. For example, 1fr 2fr divides available space into three parts, giving twice as much space to the second column.',
    importantPoints: [
      'CSS Grid: 2D layout engine (rows AND columns simultaneously)',
      'Flexbox: 1D layout engine (single row OR single column at a time)',
      'fr unit: Represents a fraction of available free space after fixed tracks are subtracted',
      'gap property: Defines spacing between tracks without affecting outer margins',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'Basic 3-Column Grid with fr Units',
        code: `.grid-container {
  display: grid;
  /* Fixed 250px sidebar, remainder split 2:1 between main content and aside */
  grid-template-columns: 250px 2fr 1fr;
  gap: 24px;
}`,
      },
    ],
    tags: ['css', 'grid', 'flexbox', 'fr-unit', 'comparison', 'layout'],
    preparationLevels: ['junior'],
    preparationLevelSlugs: ['junior'],
    difficulty: 'easy',
    questionType: 'Comparison',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'css',
    topicSlug: 'grid',
    question: 'How do you build a fully responsive card grid without media queries using repeat(), auto-fit (or auto-fill), and minmax()?',
    title: 'Responsive Grid Without Media Queries: repeat(auto-fit, minmax())',
    answer:
      'You can achieve a completely responsive card layout with: `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));`. `repeat()` automates column track repetition. `minmax(280px, 1fr)` ensures cards are never narrower than 280px and stretch up to fill remaining space. `auto-fit` collapses empty tracks to zero width, expanding existing cards to fill the entire row width.',
    explanation:
      'The difference between `auto-fit` and `auto-fill`: if you have only 2 cards on a wide 1920px monitor, `auto-fill` reserves empty ghost columns, keeping the 2 cards at their minimum width. `auto-fit` collapses the empty tracks and stretches the 2 cards across the full container width.',
    interviewAnswer:
      'The magic formula for a media-query-less responsive grid is grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)). This tells the browser to automatically create as many columns as will fit, with each column at least 280px wide. If there is extra space, 1fr stretches them equally. On mobile, if the screen is narrower than 560px, it naturally drops to a single full-width column without needing any @media query breakpoints.',
    importantPoints: [
      'repeat(auto-fit, minmax(MIN, 1fr)): Creates fluid responsive columns automatically',
      'auto-fit: Collapses unused tracks, allowing existing items to stretch across available space',
      'auto-fill: Preserves unused empty tracks as placeholders',
      'Eliminates dozens of rigid media query breakpoints across various device widths',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'Zero-Media-Query Responsive Grid',
        code: `.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}`,
      },
    ],
    tags: ['css', 'grid', 'responsive', 'minmax', 'auto-fit', 'best-practices'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Practical',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'css',
    topicSlug: 'grid',
    question: 'What is CSS Subgrid (subgrid), what layout limitation does it solve, and how does it align nested card elements across sibling cards?',
    title: 'CSS Subgrid: Aligning Nested Child Elements Across Sibling Cards',
    answer:
      '**CSS Subgrid** (`grid-template-rows: subgrid` or `grid-template-columns: subgrid`) allows a child element that is a grid container itself to adopt the row and column tracks of its parent grid, rather than defining its own independent tracks. It solves the common problem where card headers, variable-length descriptions, and footers across different cards fail to align vertically.',
    explanation:
      'Without Subgrid, each card in a grid calculates its internal row heights independently. If Card A has a 1-line title and Card B has a 3-line title, their footers and buttons end up misaligned. With Subgrid, all card internal rows share the parent’s row tracks, ensuring perfect vertical alignment across cards.',
    interviewAnswer:
      'Subgrid allows a nested grid item to inherit and participate in the parent grid’s rows or columns. In a standard grid of cards, if one card has a long 3-line title and its neighbor has a 1-line title, the card footers and action buttons misalign because each card calculates its internal height independently. By declaring grid-template-rows: subgrid on the cards, every card’s title, body, and button share the exact same global row tracks, guaranteeing flawless alignment across the entire row.',
    importantPoints: [
      'Inherits parent grid tracks: grid-template-rows: subgrid or grid-template-columns: subgrid',
      'Solves vertical misalignment of card titles, descriptions, and action buttons in card grids',
      'Child grid items automatically snap to the parent’s track lines',
      'Now baseline supported across all modern evergreen browsers',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'Subgrid Card Alignment Example',
        code: `.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: auto;
}

.card {
  display: grid;
  grid-row: span 3; /* Spans 3 rows in parent: Header, Body, Footer */
  grid-template-rows: subgrid; /* Inherits row sizing from parent grid! */
}`,
      },
    ],
    tags: ['css', 'grid', 'subgrid', 'layout', 'advanced', 'modern-css'],
    preparationLevels: ['advanced'],
    preparationLevelSlugs: ['advanced'],
    difficulty: 'hard',
    questionType: 'Architecture',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 6. Positioning (3 Questions: 1 Junior, 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'css',
    topicSlug: 'positioning',
    question: 'What are the differences between static, relative, absolute, and fixed positioning in CSS?',
    title: 'CSS Positioning Types: static vs relative vs absolute vs fixed',
    answer:
      '1) **static** (default): Element stays in normal document flow; `top`/`left`/`z-index` have no effect. 2) **relative**: Remains in document flow, but can be offset visually via `top`/`left` without affecting surrounding elements; acts as a positioning anchor for absolute children. 3) **absolute**: Removed completely from document flow and positioned relative to the nearest positioned ancestor (`relative`, `absolute`, `fixed`). 4) **fixed**: Removed from document flow and positioned relative to the browser viewport window, remaining stationary during scrolling.',
    explanation:
      'If an absolute element has no positioned ancestor, it positions relative to the Initial Containing Block (the document root `<html>`).',
    interviewAnswer:
      'static is the default document flow where top, left, and z-index are ignored. relative keeps the element in the normal flow, but lets you nudge it with top or left, and crucially creates a positioning anchor for absolute children. absolute pulls the element out of normal flow and positions it relative to its closest parent that has a position other than static. fixed also pulls the element out of flow, but anchors it to the browser viewport, so it stays locked in place when the user scrolls.',
    importantPoints: [
      'static (default): In normal document flow; top, right, bottom, left, and z-index are ignored',
      'relative: In normal flow; offset is visual only; serves as containing block for absolute children',
      'absolute: Removed from flow; positioned relative to nearest positioned ancestor (non-static)',
      'fixed: Removed from flow; positioned relative to the viewport window',
    ],
    comparisons: [
      {
        aspect: 'In Document Flow?',
        static: 'Yes',
        relative: 'Yes (original space preserved)',
        absolute: 'No (space collapsed)',
        fixed: 'No (space collapsed)',
      },
      {
        aspect: 'Positioned Relative To',
        static: 'N/A (normal flow)',
        relative: 'Its own original position',
        absolute: 'Nearest positioned ancestor',
        fixed: 'Browser viewport',
      },
    ],
    tags: ['css', 'positioning', 'static', 'relative', 'absolute', 'fixed'],
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
    technologySlug: 'css',
    topicSlug: 'positioning',
    question: 'How does position: sticky work in CSS, and why does it frequently fail to stick in real-world layouts?',
    title: 'position: sticky Mechanics and Why Sticky Positioning Fails',
    answer:
      '`position: sticky` is a hybrid of `relative` and `fixed`: it behaves as `relative` in normal flow until the user scrolls to a specified threshold offset (e.g. `top: 0`), at which point it "sticks" like `fixed` within the bounds of its parent container. It fails to stick in two common scenarios: 1) **Missing threshold property** (omitting `top`, `bottom`, `left`, or `right`), and 2) **Ancestor with overflow** (`overflow: hidden`, `auto`, or `scroll` on any parent element traps the scrolling context).',
    explanation:
      'A sticky element also cannot stick if its parent container is the exact same height as the sticky element itself. Because sticky items cannot leave their parent boundary, the element has zero distance to travel.',
    interviewAnswer:
      'position: sticky acts like relative positioning until you scroll past a defined threshold—like top: 0—at which point it locks into place like fixed positioning, but only within the boundaries of its parent container. It usually fails for two reasons: first, forgetting to specify an offset like top: 0, without which it won’t know when to stick. Second, if any parent element has overflow set to hidden, auto, or scroll, that cuts off the scrolling context and prevents the sticky element from tracking the main window scroll.',
    importantPoints: [
      'Requires an explicit threshold: top: 0, bottom: 0, etc. (otherwise remains relative)',
      'Contained within parent: Once parent scrolls out of view, the sticky element scrolls with it',
      'Primary failure cause: Ancestor element having overflow: hidden, overflow: auto, or overflow: scroll',
      'Secondary failure cause: Parent container having no extra height for the element to scroll through',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'Sticky Header Implementation',
        code: `.sticky-header {
  position: sticky;
  top: 0; /* REQUIRED: Defines the sticking threshold */
  z-index: 100;
  background-color: white;
}`,
      },
    ],
    tags: ['css', 'positioning', 'sticky', 'overflow', 'troubleshooting'],
    preparationLevels: ['intermediate'],
    preparationLevelSlugs: ['intermediate'],
    difficulty: 'medium',
    questionType: 'Troubleshooting',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
  {
    technologySlug: 'css',
    topicSlug: 'positioning',
    question: 'What is a Stacking Context in CSS, what properties trigger a new Stacking Context, and how does isolation: isolate solve z-index wars?',
    title: 'Stacking Contexts, z-index Ordering, and isolation: isolate',
    answer:
      'A **Stacking Context** is a three-dimensional conceptualization of HTML elements along an imaginary z-axis perpendicular to the screen. Elements inside a child stacking context are stacked together as an atomic group: no matter how high a child’s `z-index` is (e.g. `z-index: 999999`), it cannot render in front of an element in a higher parent stacking context. `isolation: isolate` explicitly creates a new stacking context on an element without requiring hacky properties like `z-index` or `opacity`.',
    explanation:
      'Common triggers of a new stacking context include: `opacity < 1`, `transform` (other than none), `filter`, `will-change`, `position: relative/absolute` with `z-index` other than `auto`, and `isolation: isolate`.',
    interviewAnswer:
      'A stacking context is a self-contained 3D layer on the page. The classic trap is setting z-index: 99999 on a tooltip or modal, yet it still renders behind a completely different element. This happens because the tooltip is trapped inside a child stacking context whose parent has a lower z-index than the other element. The child can never escape its parent’s stacking level. You can use isolation: isolate to cleanly declare a component as its own self-contained stacking context, stopping internal z-indexes from bleeding out or causing z-index wars across teams.',
    importantPoints: [
      'Child elements cannot escape their parent stacking context; parent z-index determines global order',
      'Common triggers: opacity < 1, transform, filter, position with z-index, isolation: isolate',
      'isolation: isolate creates a clean, intentional stacking context boundary on a component',
      'Avoid arbitrary astronomical z-indices (z-index: 999999); structure components into defined stacking layers',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'isolation: isolate Component Boundary',
        code: `/* Component defines a clean, self-contained stacking boundary */
.card {
  position: relative;
  isolation: isolate; /* Cleanly creates new stacking context! */
}

/* Tooltip z-index: 10 stays contained strictly inside the card */
.card .tooltip {
  position: absolute;
  z-index: 10;
}`,
      },
    ],
    tags: ['css', 'positioning', 'z-index', 'stacking-context', 'isolation', 'advanced'],
    preparationLevels: ['advanced'],
    preparationLevelSlugs: ['advanced'],
    difficulty: 'hard',
    questionType: 'Conceptual',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 7. Responsive Design (2 Questions: 1 Junior, 1 Intermediate)
  // ==========================================
  {
    technologySlug: 'css',
    topicSlug: 'responsive-design',
    question: 'What is the Mobile-First approach in responsive web design, and why are min-width media queries preferred over max-width?',
    title: 'Mobile-First Design Architecture and min-width Media Queries',
    answer:
      '**Mobile-First Design** means writing base CSS rules for the simplest mobile viewport first, and progressively layering on complexity for larger tablet and desktop screens using `min-width` media queries (`@media (min-width: 768px)`). It is preferred because: 1) Mobile devices have lower CPU and bandwidth, so baseline CSS loads minimal overhead, and 2) CSS naturally overrides previous declarations progressively without needing to undo desktop styles.',
    explanation:
      'With desktop-first (`max-width`), you write complex desktop multi-column layouts first, and then spend dozens of rules overriding and resetting widths, floats, and margins to single columns for mobile (`width: auto !important`). Mobile-first results in smaller, cleaner, additive stylesheets.',
    interviewAnswer:
      'Mobile-first means you write your default CSS styles for small mobile screens first without any media queries. Then, as the screen gets wider, you use min-width media queries to add layout complexity, such as multiple columns or larger typography. This is better than desktop-first because mobile devices receive the simplest, most performant CSS by default, and styles are added progressively rather than having to reset and undo desktop styles for smaller screens.',
    importantPoints: [
      'Mobile-first uses min-width (@media (min-width: 768px)); desktop-first uses max-width',
      'Additive cascade: Base styles apply to mobile; larger screens inherit and add properties',
      'Better mobile performance: Simpler layouts rendered on resource-constrained mobile hardware',
      'Avoids "un-styling" desktop rules (like resetting multi-column grids back to single columns)',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'Mobile-First Progressive Enhancement',
        code: `/* 1. Base Mobile Styles: Default 1-column layout */
.layout {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* 2. Tablet breakpoint: 2-column layout */
@media (min-width: 768px) {
  .layout {
    flex-direction: row;
  }
}

/* 3. Desktop breakpoint: 3-column with sidebar */
@media (min-width: 1024px) {
  .layout {
    display: grid;
    grid-template-columns: 280px 1fr;
  }
}`,
      },
    ],
    tags: ['css', 'responsive-design', 'mobile-first', 'media-queries', 'min-width'],
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
    technologySlug: 'css',
    topicSlug: 'responsive-design',
    question: 'How do modern CSS comparison functions clamp(), min(), and max() create fluid typography and responsive layouts without media queries?',
    title: 'Fluid Typography and Layouts with CSS clamp(), min(), and max()',
    answer:
      '`clamp(MIN, PREFERRED, MAX)` constrains a value between an absolute lower minimum and an upper maximum, calculating a fluid value in between. For typography (`font-size: clamp(1rem, 2.5vw + 0.5rem, 2.5rem)`), text smoothly scales up with the viewport width (`vw`) on tablets and laptops, but never shrinks smaller than 1rem on phones or grows larger than 2.5rem on ultra-wide monitors.',
    explanation:
      '`min(a, b)` picks the smallest value (`width: min(100% - 2rem, 1200px)`), creating a centered responsive container with 1rem side padding on mobile and fixed 1200px on desktop. `max(a, b)` picks the largest value.',
    interviewAnswer:
      'clamp, min, and max allow you to build fluid designs without media queries. clamp takes three parameters: a minimum size, a preferred fluid size, and a maximum size. For example, font-size: clamp(1rem, 2.5vw + 0.5rem, 2rem) allows the font to smoothly scale up and down with the viewport width using viewport units, while guaranteeing the text never gets too small to read on phones or ridiculously huge on desktop monitors.',
    importantPoints: [
      'clamp(min, preferred, max): Fluid scaling bound strictly between min and max limits',
      'min(val1, val2): Chooses smallest value; perfect for container bounds (min(100% - 2rem, 1200px))',
      'max(val1, val2): Chooses largest value; ensures minimum clickable hit areas or margins',
      'Drastically reduces media queries by making font sizes and paddings mathematically fluid',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'Fluid Typography & Container with clamp() and min()',
        code: `/* Fluid heading: scales smoothly with viewport, bounded between 24px and 48px */
h1 {
  font-size: clamp(1.5rem, 4vw + 1rem, 3rem);
}

/* Fluid responsive container: 100% minus padding on mobile, capped at 1200px on desktop */
.container {
  width: min(100% - 2rem, 1200px);
  margin-inline: auto;
}`,
      },
    ],
    tags: ['css', 'responsive-design', 'clamp', 'min', 'max', 'fluid-typography', 'modern-css'],
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
  // 8. Animations & Transitions (2 Questions: 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'css',
    topicSlug: 'animations-transitions',
    question: 'What is the difference between CSS transitions and @keyframes animations, and when should you choose each?',
    title: 'CSS Transitions vs @keyframes Animations',
    answer:
      '**CSS Transitions** smoothly interpolate between an initial state and a final state triggered by an interaction (like `:hover`, `:focus`, or toggling a class with JavaScript). **`@keyframes` Animations** define multi-step keyframe sequences (`0%`, `50%`, `100%`) that can run automatically on page load, loop infinitely, pause/resume, and execute complex state changes without requiring user interaction.',
    explanation:
      'Transitions require two defined states and a trigger. `@keyframes` are standalone animations capable of looping loaders, pulse effects, and multi-stage choreography.',
    interviewAnswer:
      'CSS transitions are designed for simple two-state changes triggered by an interaction, such as changing a button’s background color on hover. You specify a property, duration, and easing. @keyframes animations are for complex, multi-stage sequences that can run automatically on load, cycle through multiple steps at different percentage marks, and loop infinitely—making them ideal for loading spinners, continuous pulses, and intricate UI entrances.',
    importantPoints: [
      'transition: Two-state interpolation (A -> B); requires trigger (:hover, class toggle)',
      '@keyframes: Multi-step timeline (0%, 25%, 50%, 100%); runs independently without triggers',
      'animation-iteration-count: infinite allows continuous animations (e.g. loaders)',
      'animation-fill-mode: forwards preserves the final keyframe styling after animation completes',
    ],
    comparisons: [
      {
        aspect: 'States',
        'transition': 'Two states: from initial to final state',
        '@keyframes': 'Arbitrary multiple intermediate states (0% to 100%)',
      },
      {
        aspect: 'Trigger',
        'transition': 'Requires state change (:hover, class change via JS)',
        '@keyframes': 'Can execute automatically on page load',
      },
      {
        aspect: 'Looping',
        'transition': 'Cannot loop natively',
        '@keyframes': 'Supports infinite loops (animation-iteration-count: infinite)',
      },
    ],
    tags: ['css', 'animations-transitions', 'transitions', 'keyframes', 'animation'],
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
    technologySlug: 'css',
    topicSlug: 'animations-transitions',
    question: 'How do GPU acceleration, compositor layers, and the will-change property enable 60fps animations without layout thrashing?',
    title: 'GPU Acceleration, Composite Layers, and High-Performance 60fps CSS',
    answer:
      'Browsers render pages in three successive phases: **Layout** (calculating geometry), **Paint** (filling pixels, colors, shadows), and **Composite** (layering textures on the GPU). Animating layout properties (`width`, `height`, `top`, `left`, `margin`) forces the CPU to recompute layout on every frame (Layout Thrashing), dropping frame rates. Animating compositor-only properties (`transform` and `opacity`) offloads computation to the GPU compositor thread without triggering layout or paint, guaranteeing smooth 60fps performance.',
    explanation:
      '`will-change: transform` hints to the browser engine ahead of time to promote the element to its own dedicated GPU Compositor Layer. Overusing `will-change` consumes excess GPU video memory (VRAM), which degrades performance.',
    interviewAnswer:
      'Browser rendering follows three stages: Layout, Paint, and Composite. Properties like width, height, top, and left trigger full layout recalculations on the CPU, causing laggy, stuttering animations. In contrast, transform and opacity are handled directly on the GPU compositor thread, skipping layout and paint entirely to guarantee a buttery-smooth 60 frames per second. You can use will-change: transform to promote an element to its own GPU layer before animation starts, but use it sparingly to avoid wasting GPU memory.',
    importantPoints: [
      'Only animate transform and opacity for 60fps performance (bypasses Layout and Paint)',
      'Never animate top, left, width, height, or margin for movement; use transform: translate()',
      'will-change: transform hints browser to promote element to GPU layer ahead of time',
      'Overusing will-change or layer promotion creates memory bloat on mobile devices',
    ],
    codeExamples: [
      {
        language: 'css',
        title: '60fps High-Performance Modal Slide-In',
        code: `/* BAD: Animates 'top' -> Triggers expensive CPU Layout recalculation on every frame */
.modal-bad {
  transition: top 0.3s ease;
  top: 100px;
}

/* GOOD: Animates 'transform' -> GPU Compositor thread only, guaranteed 60fps! */
.modal-good {
  will-change: transform;
  transform: translateY(0);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}`,
      },
    ],
    tags: ['css', 'animations-transitions', 'performance', 'gpu', 'compositor', 'will-change'],
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
  // 9. Specificity (2 Questions: 1 Junior, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'css',
    topicSlug: 'specificity',
    question: 'How is CSS Specificity calculated, what is the 4-part specificity weight formula, and why should !important be avoided?',
    title: 'CSS Specificity Calculation Formula and !important Hazards',
    answer:
      'Specificity is calculated using a 4-part tuple `(Inline, ID, Class/Attribute/Pseudo-class, Element/Pseudo-element)`: 1) **Inline styles** (`style="..."`): (1, 0, 0, 0), 2) **ID selectors** (`#header`): (0, 1, 0, 0), 3) **Classes, attributes, pseudo-classes** (`.btn`, `[type="text"]`, `:hover`): (0, 0, 1, 0), and 4) **Elements and pseudo-elements** (`div`, `::before`): (0, 0, 0, 1). Higher specificity categories always beat lower ones regardless of quantity (1 ID beats 100 classes).',
    explanation:
      '`!important` overrides the normal specificity hierarchy. Overusing it causes an escalation war where future developers must use even more `!important` declarations to override styles, destroying maintainability.',
    interviewAnswer:
      'Specificity is calculated as a four-part score: Inline styles, IDs, Classes (including attributes and pseudo-classes), and Elements. For example, a single ID selector with weight 0-1-0-0 will always beat a selector with 10 classes with weight 0-0-10-0, because each column takes absolute precedence over the column to its right. We avoid !important because it bypasses this hierarchy entirely; once you introduce !important, other developers can only override it with another !important, creating unmaintainable code.',
    importantPoints: [
      'Tuple: (Inline, IDs, Classes/Attributes/Pseudo-classes, Elements/Pseudo-elements)',
      '1 ID (0, 1, 0, 0) beats any number of classes (0, 0, 50, 0)',
      'Universal selector (*), combinators (+, >, ~), and :where() carry (0, 0, 0, 0) specificity',
      '!important breaks normal cascade resolution; reserve exclusively for utility helper overrides',
    ],
    comparisons: [
      {
        Selector: 'h1',
        Specificity: '(0, 0, 0, 1)',
        Score: 'Element only',
      },
      {
        Selector: '.header .title',
        Specificity: '(0, 0, 2, 0)',
        Score: 'Two classes',
      },
      {
        Selector: '#main-content .title',
        Specificity: '(0, 1, 1, 0)',
        Score: 'One ID + one class (Wins over previous)',
      },
      {
        Selector: 'style="color: red"',
        Specificity: '(1, 0, 0, 0)',
        Score: 'Inline style (Wins over all CSS selectors)',
      },
    ],
    tags: ['css', 'specificity', 'cascade', 'important', 'selectors'],
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
    technologySlug: 'css',
    topicSlug: 'specificity',
    question: 'How do CSS Cascade Layers (@layer) solve specificity wars in large design systems and component libraries?',
    title: 'CSS Cascade Layers (@layer) and Specificity Management',
    answer:
      '**CSS Cascade Layers** (`@layer`) allow developers to structure stylesheets into explicit priority tiers (e.g. `@layer reset, base, components, utilities;`). Rules in higher-priority layers always defeat rules in lower-priority layers, **regardless of selector specificity**. A simple class `.btn` in the `components` layer will defeat an ID `#submit-button` in the `base` layer.',
    explanation:
      'Before `@layer`, third-party UI libraries (like Bootstrap or Tailwind) frequently clashed with application styles, forcing developers to artificially inflate selector specificity. With `@layer`, you can declare third-party styles in an underlying layer so application code overrides them cleanly with single-class selectors.',
    interviewAnswer:
      'Cascade Layers, declared using the @layer at-rule, solve specificity wars by introducing explicit priority layers before specificity is even evaluated. You can define layers in order: reset, base, components, and utilities. Any rule in the components layer will automatically override a rule in the base layer, even if the base rule used an ID selector and the component rule only used a single class. This allows design systems to provide base component styles that consumers can easily override without resorting to !important.',
    importantPoints: [
      'Layer order determines priority: later declared layers override earlier layers',
      'Layer precedence beats selector specificity: low-specificity rule in higher layer wins over high-specificity rule in lower layer',
      'Un-layered styles have the highest priority of all normal styles (overrides all layers)',
      'Solves design system override issues without specificity hacks or !important',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'Cascade Layers Definition',
        code: `/* 1. Establish explicit layer priority order */
@layer reset, base, components, utilities;

@layer base {
  /* High specificity (ID + element), but in a lower layer */
  #main-content button {
    background: gray;
  }
}

@layer components {
  /* Lower specificity (single class), but in a higher layer -> WINS! */
  .btn-primary {
    background: blue;
  }
}`,
      },
    ],
    tags: ['css', 'specificity', 'cascade-layers', 'at-layer', 'design-systems', 'advanced'],
    preparationLevels: ['advanced'],
    preparationLevelSlugs: ['advanced'],
    difficulty: 'hard',
    questionType: 'Architecture',
    isImportant: false,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },

  // ==========================================
  // 10. Modern CSS (3 Questions: 1 Junior, 1 Intermediate, 1 Advanced)
  // ==========================================
  {
    technologySlug: 'css',
    topicSlug: 'modern-css',
    question: 'How do CSS Custom Properties (Variables) work, how do they inherit, and how do you define fallback values?',
    title: 'CSS Custom Properties (Variables), Inheritance, and Fallbacks',
    answer:
      'CSS Custom Properties (variables) are declared with a double hyphen prefix (`--primary-color: #2563eb;`) and accessed via the `var()` function (`var(--primary-color, #000);`). They follow the standard CSS cascade and inheritance model, meaning variables declared on `:root` are globally accessible, while variables declared on a component class are scoped strictly to that subtree.',
    explanation:
      'Unlike preprocessor variables (Sass `$variable`), CSS Custom Properties are live dynamic DOM properties. Changing a variable value in JavaScript (`element.style.setProperty("--theme", "dark")`) or in a media query immediately recalculates all consuming styles across the DOM tree in real time.',
    interviewAnswer:
      'CSS variables are declared using two hyphens, like --primary-color, and accessed using var(). When declared in :root, they are available globally, but they can also be scoped to specific selectors where they inherit down the DOM tree. You can supply a fallback value inside var(), such as var(--color, blue). The biggest advantage over Sass variables is that CSS custom properties exist live in the browser, meaning you can change them with JavaScript or inside media queries to switch themes instantly without recompiling CSS.',
    importantPoints: [
      'Declared with double-dash: --variable-name: value;',
      'Accessed with var(): background: var(--theme-color, #ffffff); (second argument is fallback)',
      'Live in browser runtime: Dynamic DOM updates and theming without CSS recompilation',
      'Inherits down the DOM tree; can be overridden per component subtree',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'Theming with CSS Custom Properties',
        code: `:root {
  --bg-color: #ffffff;
  --text-color: #0f172a;
}

[data-theme="dark"] {
  --bg-color: #0f172a;
  --text-color: #f8fafc;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease;
}`,
      },
    ],
    tags: ['css', 'modern-css', 'custom-properties', 'variables', 'theming'],
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
    technologySlug: 'css',
    topicSlug: 'modern-css',
    question: 'How does Native CSS Nesting work, and how does the ampersand (&) selector differ from preprocessor (Sass/SCSS) nesting?',
    title: 'Native CSS Nesting and the Ampersand (&) Selector',
    answer:
      'Native CSS Nesting allows nesting child rules directly inside parent selectors without requiring build-step preprocessors like Sass or Less. The ampersand (`&`) represents the parent selector. In Native CSS, nested rules without `&` automatically desugar as descendant selectors (`.card { p { ... } }` is equivalent to `.card p`).',
    explanation:
      'Unlike Sass which simply concatenated strings (e.g. `&__element` in BEM), Native CSS Nesting treats `&` as a selector wrapped in `:is()`. Therefore, string-concatenating BEM syntax (`&__element`) is NOT supported in Native CSS; you must write out the full class name.',
    interviewAnswer:
      'Native CSS Nesting brings the convenience of Sass nesting directly into the browser without build tools. You can nest selectors inside parent blocks, and use the ampersand symbol to represent the parent for hover states or modifier classes. An important difference from Sass is that you cannot use the ampersand to concatenate class names like BEM’s &__element, because the browser parses the ampersand as a complete selector wrapped in an :is() pseudo-class rather than performing string concatenation.',
    importantPoints: [
      'Native browser feature: Works without Sass, Less, PostCSS, or build tools',
      '& represents the parent selector: .btn { &:hover { ... } }',
      'Direct nesting without &: .card { h2 { ... } } implies descendant combinator',
      'BEM string concatenation (&__title) is NOT supported in Native CSS Nesting',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'Native CSS Nesting Syntax',
        code: `.card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;

  /* Nested descendant */
  h2 {
    font-size: 1.25rem;
  }

  /* Ampersand for pseudo-classes */
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* Ampersand with modifier class */
  &.featured {
    border: 2px solid #2563eb;
  }
}`,
      },
    ],
    tags: ['css', 'modern-css', 'nesting', 'sass', 'ampersand'],
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
    technologySlug: 'css',
    topicSlug: 'modern-css',
    question: 'How do CSS Container Queries (@container) differ from Media Queries (@media), and how do they enable truly modular component design?',
    title: 'CSS Container Queries (@container) vs Media Queries (@media)',
    answer:
      '**Media Queries** (`@media`) query the dimensions of the entire browser viewport window. **Container Queries** (`@container`) query the size of the element’s specific parent container (`container-type: inline-size`). This allows a component (like a product card) to adapt its layout based on the space available inside its parent column, whether placed in a narrow 300px sidebar or an 800px main content feed, on the exact same screen.',
    explanation:
      'With media queries, a card in a narrow sidebar on a 1920px desktop monitor mistakenly renders in horizontal desktop mode because the viewport is wide. Container queries ensure the card renders in compact vertical mode because its immediate parent container is narrow.',
    interviewAnswer:
      'Media queries look at the entire viewport width, which breaks component modularity because a component’s layout should depend on how much space its parent gives it, not how wide the user’s monitor is. A product card placed in a narrow sidebar on a large desktop monitor would incorrectly stretch into a wide desktop layout with media queries. Container queries fix this by allowing a component to query the width of its parent container using container-type: inline-size, making components truly self-contained and reusable anywhere in a design system.',
    importantPoints: [
      'Media Queries (@media): Query global browser viewport dimensions',
      'Container Queries (@container): Query parent element dimensions',
      'Setup: Parent must declare container-type: inline-size (and optional container-name)',
      'Enables true design system component reusability across sidebars, drawers, and main feeds',
    ],
    codeExamples: [
      {
        language: 'css',
        title: 'Container Query Implementation',
        code: `/* 1. Designate the container */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

/* 2. Default Card: Stacked vertical layout */
.card {
  display: flex;
  flex-direction: column;
}

/* 3. When container is wider than 400px, switch card to horizontal layout! */
@container card (min-width: 400px) {
  .card {
    flex-direction: row;
    align-items: center;
  }
}`,
      },
    ],
    tags: ['css', 'modern-css', 'container-queries', 'responsive', 'modular-design', 'advanced'],
    preparationLevels: ['advanced'],
    preparationLevelSlugs: ['advanced'],
    difficulty: 'hard',
    questionType: 'Architecture',
    isImportant: true,
    source: 'ai-generated',
    sourceReference: 'Curated interview preparation content',
    status: 'published',
  },
];
