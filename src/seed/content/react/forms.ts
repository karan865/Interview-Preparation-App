import { SeedQuestion } from '../types';

export const reactFormsQuestions: SeedQuestion[] = [
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "What is the architectural difference between controlled and uncontrolled form inputs in React, and how do you choose between them?",
    "answer": "A controlled input binds its displayed value to React component state, updating state via an onChange handler (React is the single source of truth). An uncontrolled input stores its value directly in the browser DOM, read on demand using a React ref or FormData (the DOM is the single source of truth).",
    "explanation": "Controlled inputs offer instant access to input data for real-time validation, dynamic field enabling/disabling, and formatted displays. However, they trigger a component re-render on every keystroke. Uncontrolled inputs keep state isolated in native DOM inputs, eliminating re-renders during typing, making them ideal for large forms or file inputs.",
    "interviewAnswer": "In controlled inputs, React state dictates input value and updates on every keystroke, which is ideal for real-time validation and conditional UI. In uncontrolled inputs, the DOM manages the value and we query it via a ref on submit. I default to controlled for interactive forms, and use uncontrolled for high-performance forms or file uploads.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Controlled vs Uncontrolled Forms",
        "code": "// Controlled: Re-renders on every keystroke\nfunction Controlled() {\n  const [val, setVal] = React.useState('');\n  return <input value={val} onChange={e => setVal(e.target.value)} />;\n}\n\n// Uncontrolled: Zero re-renders while typing\nfunction Uncontrolled() {\n  const inputRef = React.useRef(null);\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    console.log(inputRef.current.value);\n  };\n  return (\n    <form onSubmit={handleSubmit}>\n      <input ref={inputRef} defaultValue=\"\" />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}",
        "explanation": "Controlled inputs sync with state on change; uncontrolled inputs query the DOM ref on submission."
      }
    ],
    "importantPoints": [
      "Controlled: React state is single source of truth, re-renders on keystroke",
      "Uncontrolled: DOM is single source of truth, read via ref or FormData",
      "Use defaultValue / defaultChecked for uncontrolled initial values"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "forms",
      "controlled-uncontrolled",
      "fundamentals"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do you manage a form with 15 different inputs in React state without writing 15 separate useState hooks or 15 separate onChange handlers?",
    "answer": "Store the form fields in a single state object and use a generic, dynamic change handler that reads the input name and value properties (e.g. setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))).",
    "explanation": "By ensuring each input element has a name attribute matching the key in your state object, a single handler can manage text inputs, textareas, and selects. For checkboxes, check e.target.type to read e.target.checked instead of e.target.value.",
    "interviewAnswer": "I use a single state object representing the form schema and one reusable change handler. The handler uses computed property names: setForm(prev => ({ ...prev, [e.target.name]: e.target.type === \"checkbox\" ? e.target.checked : e.target.value })). This keeps state centralized and scalable.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Generic Dynamic Form Handler",
        "code": "function DynamicForm() {\n  const [formData, setFormData] = React.useState({\n    username: '',\n    email: '',\n    subscribe: false,\n  });\n\n  const handleChange = (e) => {\n    const { name, value, type, checked } = e.target;\n    setFormData(prev => ({\n      ...prev,\n      [name]: type === 'checkbox' ? checked : value,\n    }));\n  };\n\n  return (\n    <form>\n      <input name=\"username\" value={formData.username} onChange={handleChange} />\n      <input name=\"email\" value={formData.email} onChange={handleChange} />\n      <input type=\"checkbox\" name=\"subscribe\" checked={formData.subscribe} onChange={handleChange} />\n    </form>\n  );\n}",
        "explanation": "A single handler dynamically sets the matching object key based on e.target.name."
      }
    ],
    "importantPoints": [
      "Matches input name attribute to state object keys",
      "Handles checkboxes via e.target.checked",
      "Uses functional state update to prevent stale state issues"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "tags": [
      "react",
      "forms",
      "computed-properties",
      "state-management"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "A complex enterprise form has 120 input fields. Users complain that typing in any input feels sluggish and drops keystrokes. Walk through diagnosing and fixing the bottleneck.",
    "answer": "The sluggishness occurs because the form uses controlled state at the parent level. Every single keystroke updates parent state, re-rendering all 120 input fields, their wrappers, and validation logic. The fix is to isolate field state: either use an uncontrolled approach (e.g. React Hook Form) or isolate each field into its own self-contained state component.",
    "explanation": "In React DevTools Profiler, recording typing will show the parent form component rendering for 30-50ms per keystroke. Libraries like React Hook Form solve this by using uncontrolled inputs registered via refs, eliminating re-renders entirely while typing and only validating on blur or submit.",
    "interviewAnswer": "I would profile the component in React DevTools to confirm that a single keystroke triggers re-renders across all 120 fields. The root cause is top-level controlled state. To fix this without rewriting everything, I migrate to an uncontrolled ref-based architecture (like React Hook Form) or wrap individual fields in memoized child components so only the active input renders.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Profile with DevTools",
        "description": "Record keystrokes in React DevTools Profiler to verify full-tree re-render duration."
      },
      {
        "stepNumber": 2,
        "title": "Identify State Ownership",
        "description": "Confirm top-level state setter invalidates all sibling field components."
      },
      {
        "stepNumber": 3,
        "title": "Isolate or Uncontrol",
        "description": "Adopt React Hook Form or isolate field components using local state + onBlur synchronization."
      },
      {
        "stepNumber": 4,
        "title": "Measure Improvement",
        "description": "Confirm keystroke latency drops from >40ms to under 2ms (zero dropped frames)."
      }
    ],
    "followUpQuestions": [
      "Why does React.memo on field inputs often fail to prevent re-renders when parent passes an inline onChange arrow function?",
      "How does React Hook Form achieve high performance without re-rendering the parent form?"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Performance / Optimization",
    "isImportant": true,
    "tags": [
      "react",
      "forms",
      "performance",
      "profiling",
      "react-hook-form"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do you implement schema-based form validation with Zod in a React component without external form libraries?",
    "answer": "Define a Zod schema matching the form shape. On form submission or input blur, run schema.safeParse(formData). If success is false, format error.issues into a keyed field error map and set it in component error state.",
    "explanation": "Zod provides type-safe schema definitions and parsing. safeParse does not throw exceptions; it returns an object with success: true and data, or success: false and error. Mapping error.issues by path[0] produces clean { [fieldName]: errorMessage } state.",
    "interviewAnswer": "I define a Zod schema matching the fields. In the handleSubmit or handleBlur function, I invoke schema.safeParse(formData). If parsing fails, I map error.issues into a field-to-message object using issue.path[0] and store it in an errors state to display inline feedback below each input.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Zod Schema Validation in React",
        "code": "import { z } from 'zod';\n\nconst userSchema = z.object({\n  email: z.string().email('Invalid email address'),\n  password: z.string().min(8, 'Password must be at least 8 characters'),\n});\n\nfunction LoginForm() {\n  const [formData, setFormData] = React.useState({ email: '', password: '' });\n  const [errors, setErrors] = React.useState({});\n\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    const result = userSchema.safeParse(formData);\n    if (!result.success) {\n      const fieldErrors = {};\n      result.error.issues.forEach(issue => {\n        fieldErrors[issue.path[0]] = issue.message;\n      });\n      setErrors(fieldErrors);\n      return;\n    }\n    setErrors({});\n    submitToServer(result.data);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name=\"email\" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />\n      {errors.email && <span className=\"error\">{errors.email}</span>}\n      <button type=\"submit\">Log In</button>\n    </form>\n  );\n}",
        "explanation": "safeParse returns typed errors mapped to form fields for inline display."
      }
    ],
    "importantPoints": [
      "schema.safeParse() returns { success, data } or { success, error }",
      "Provides compile-time TypeScript type inference: z.infer<typeof userSchema>",
      "Keeps validation rules decoupled from UI markup"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "tags": [
      "react",
      "forms",
      "validation",
      "zod"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "Why is <input type=\"file\" /> always an uncontrolled component in React, and how do you handle file uploads properly?",
    "answer": "In browser security architecture, the value attribute of a file input is strictly read-only and cannot be set programmatically by JavaScript. Because React cannot imperatively set or control input.value on file inputs, file inputs are always uncontrolled. File data is accessed via e.target.files or a React ref.",
    "explanation": "Attempting to pass value={myFile} to <input type=\"file\" /> throws an error in React. Instead, attach an onChange listener and read e.target.files[0] to store the File/Blob object in state, or use a ref to query the input on form submit.",
    "interviewAnswer": "<input type=\"file\" /> is always uncontrolled because browser security prevents JavaScript from writing to the file input value property. We handle file uploads by using an onChange handler that extracts e.target.files[0], or using a ref to append files directly to a FormData object on submit.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "File Upload Handling",
        "code": "function FileUploader() {\n  const [selectedFile, setSelectedFile] = React.useState(null);\n\n  const handleFileChange = (e) => {\n    if (e.target.files && e.target.files[0]) {\n      setSelectedFile(e.target.files[0]);\n    }\n  };\n\n  const handleUpload = async (e) => {\n    e.preventDefault();\n    if (!selectedFile) return;\n\n    const data = new FormData();\n    data.append('avatar', selectedFile);\n    await fetch('/api/upload', { method: 'POST', body: data });\n  };\n\n  return (\n    <form onSubmit={handleUpload}>\n      <input type=\"file\" onChange={handleFileChange} />\n      <button type=\"submit\" disabled={!selectedFile}>Upload</button>\n    </form>\n  );\n}",
        "explanation": "e.target.files[0] extracts the File instance for multipart FormData submission."
      }
    ],
    "importantPoints": [
      "value prop cannot be set on <input type=\"file\" /> due to browser security",
      "Access selected files via e.target.files (FileList)",
      "Transmit via multipart/form-data using the native FormData API"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "forms",
      "file-upload",
      "security"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do you debounce search input in a React form, and why should you avoid creating a new debounced function inside the component body on every render?",
    "answer": "Debouncing delays executing an expensive operation (like an API search call) until the user stops typing for a specified delay (e.g. 300ms). Creating a new debounced function inside the component body creates a new timer instance on every keystroke render, which resets the debounce and triggers the call on every keystroke anyway. Debounced functions must be stabilized using useCallback, useMemo, or a custom useDebounce hook.",
    "explanation": "Because components re-render on state change, writing const debouncedFn = debounce(...) in the body instantiates a brand new function every render. The previous timer is abandoned, defeating the debounce completely.",
    "interviewAnswer": "Debouncing waits for user typing to pause before firing a request. If you call debounce() inside the component render body, every keystroke re-render creates a new debounced function with its own timer, completely breaking the debounce. You must wrap the debounced callback in useCallback with empty dependencies, or use a useDebounce hook on the query value.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Custom useDebounce Hook",
        "code": "function useDebounce(value, delay = 300) {\n  const [debouncedValue, setDebouncedValue] = React.useState(value);\n\n  React.useEffect(() => {\n    const timer = setTimeout(() => setDebouncedValue(value), delay);\n    return () => clearTimeout(timer); // Reset timer on every keystroke!\n  }, [value, delay]);\n\n  return debouncedValue;\n}\n\nfunction Search() {\n  const [text, setText] = React.useState('');\n  const debouncedText = useDebounce(text, 400);\n\n  React.useEffect(() => {\n    if (debouncedText) fetchResults(debouncedText);\n  }, [debouncedText]);\n\n  return <input value={text} onChange={e => setText(e.target.value)} />;\n}",
        "explanation": "The cleanup function in useEffect clears the timeout, ensuring only the final paused value updates."
      }
    ],
    "importantPoints": [
      "Prevents excessive network traffic and backend load while typing",
      "Debounced handlers must be memoized or managed via useEffect timers",
      "Clear pending timeouts in effect cleanup to prevent memory leaks and late responses"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "isImportant": true,
    "tags": [
      "react",
      "forms",
      "debounce",
      "performance",
      "custom-hooks"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do React 19 Form Actions work, and how do they support progressive enhancement when JavaScript is disabled or slow to load?",
    "answer": "In React 19, the HTML <form> element action prop accepts a JavaScript function (an Action) instead of just a URL string: <form action={myAction}>. If JavaScript has loaded, React intercepts the submission, wraps it in a Transition, and passes a native FormData object to the action. If JavaScript has not loaded yet, the form submits natively to the server endpoint, enabling progressive enhancement.",
    "explanation": "Traditional React forms required onSubmit={(e) => { e.preventDefault(); ... }}. If the bundle was slow to download, clicking submit did nothing or caused an unexpected page reload. Form Actions integrate with the browser native form submission lifecycle and React 19 Server Actions.",
    "interviewAnswer": "React 19 allows functions to be passed directly to the form action prop. React automatically creates a FormData object and runs the function inside a Transition, managing pending states. Because it uses standard HTML form semantics, it progressively enhances before client JavaScript finishes executing.",
    "importantPoints": [
      "action prop accepts async functions: <form action={async (formData) => ...}>",
      "Automatically passes a native FormData instance populated with input values",
      "Runs within React Transitions, keeping the UI responsive during execution"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "react19",
      "form-actions",
      "progressive-enhancement"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "What is the purpose of the useActionState hook in React 19, and how does it replace manual form submission boilerplate?",
    "answer": "useActionState standardizes state management for async actions (like form submissions). It takes an async action function and an initial state, returning [state, formAction, isPending]. It eliminates manual useState flags for isSubmitting, error, and response data, automatically coordinating with React Transitions.",
    "explanation": "Before useActionState, handling a form required multiple useState hooks (for loading, error, success data) and manual try/catch/finally blocks. useActionState handles error catching, stores the latest action return value, and exposes isPending out of the box.",
    "interviewAnswer": "useActionState replaces manual form loading and error handling. It returns the current action state, a formAction dispatcher, and an isPending boolean. You pass formAction to <form action={formAction}>, and React manages the loading state and updates state when the async action resolves.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "React 19 useActionState Form",
        "code": "import { useActionState } from 'react';\n\nasync function updateEmail(prevState, formData) {\n  const email = formData.get('email');\n  const res = await api.updateEmail(email);\n  if (!res.ok) return { error: res.message, email };\n  return { success: true, email };\n}\n\nfunction EmailForm() {\n  const [state, formAction, isPending] = useActionState(updateEmail, { email: '' });\n\n  return (\n    <form action={formAction}>\n      <input name=\"email\" defaultValue={state.email} />\n      <button type=\"submit\" disabled={isPending}>\n        {isPending ? 'Updating...' : 'Update Email'}\n      </button>\n      {state.error && <p className=\"error\">{state.error}</p>}\n    </form>\n  );\n}",
        "explanation": "useActionState tracks isPending and return state without manual useState flags."
      }
    ],
    "importantPoints": [
      "Signature: const [state, formAction, isPending] = useActionState(fn, initial)",
      "fn receives (previousState, formData) arguments",
      "Integrates seamlessly with React 19 Form Actions"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "react19",
      "useactionstate",
      "forms"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How does the React 19 useFormStatus hook work, and why must it be called from a child component nested inside the form rather than the form component itself?",
    "answer": "useFormStatus is a hook that reads the pending status, data, method, and action of the parent <form>. It works via internal Context provided by the parent <form>. Because a component cannot consume context provided by itself, useFormStatus must be called from a child component rendered inside the <form>.",
    "explanation": "If you call useFormStatus inside the component that renders the <form>, the hook returns pending: false because it searches upwards for an enclosing parent <form>. Extracting the submit button into a dedicated <SubmitButton /> child allows useFormStatus to find the parent form context.",
    "interviewAnswer": "useFormStatus provides status information (pending, data, method) about the parent form. It uses context under the hood, which is why it must be called from a child component inside the <form> tree, such as a custom SubmitButton component, rather than within the form component itself.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "React 19 useFormStatus Submit Button",
        "code": "import { useFormStatus } from 'react-dom';\n\n// Child component inside the form\nfunction SubmitButton() {\n  const { pending } = useFormStatus();\n  return (\n    <button type=\"submit\" disabled={pending}>\n      {pending ? 'Submitting...' : 'Submit'}\n    </button>\n  );\n}\n\n// Parent form\nfunction ContactForm({ submitAction }) {\n  return (\n    <form action={submitAction}>\n      <input name=\"message\" />\n      <SubmitButton />\n    </form>\n  );\n}",
        "explanation": "SubmitButton accesses parent form status without prop drilling."
      }
    ],
    "importantPoints": [
      "Returns { pending, data, method, action } from parent form",
      "Must be called from a component nested inside the <form>",
      "Eliminates the need to pass isSubmitting props down to deeply nested buttons"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "react19",
      "useformstatus",
      "forms"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "What is the purpose of the useOptimistic hook in React 19, and how is it used to display instant form updates while awaiting server confirmation?",
    "answer": "useOptimistic allows components to show an immediate, optimistic UI state while an async action is pending. If the server request succeeds, the optimistic state is replaced with the permanent server data; if the request fails, the optimistic state is automatically reverted to the previous state.",
    "explanation": "When a user adds a comment, waiting 500ms for a network roundtrip feels laggy. useOptimistic allows you to immediately append the comment to the list with a temporary sending indicator. When the transition completes, React reverts the optimistic state and renders the authoritative server state.",
    "interviewAnswer": "useOptimistic gives users immediate visual feedback during form submissions. It takes the actual state and an updater function, returning [optimisticState, addOptimistic]. During an async action transition, calling addOptimistic renders the anticipated result immediately until the action finishes.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "React 19 useOptimistic Form",
        "code": "import { useOptimistic } from 'react';\n\nfunction CommentList({ comments, addCommentAction }) {\n  const [optimisticComments, setOptimisticComments] = useOptimistic(\n    comments,\n    (current, newCommentText) => [\n      ...current,\n      { id: 'temp-' + Date.now(), text: newCommentText, isSending: true }\n    ]\n  );\n\n  const formAction = async (formData) => {\n    const text = formData.get('comment');\n    setOptimisticComments(text); // Instant UI update!\n    await addCommentAction(text);\n  };\n\n  return (\n    <div>\n      {optimisticComments.map(c => (\n        <p key={c.id} style={{ opacity: c.isSending ? 0.5 : 1 }}>{c.text}</p>\n      ))}\n      <form action={formAction}>\n        <input name=\"comment\" />\n        <button type=\"submit\">Send</button>\n      </form>\n    </div>\n  );\n}",
        "explanation": "The comment appears immediately with reduced opacity until confirmed by the server."
      }
    ],
    "importantPoints": [
      "Provides instant optimistic UI during form actions",
      "Automatically rolls back if the action errors out",
      "Only active during React Transitions or Form Actions"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Conceptual",
    "isImportant": true,
    "tags": [
      "react",
      "react19",
      "useoptimistic",
      "optimistic-ui",
      "forms"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do you prevent duplicate or double form submissions when a user clicks the submit button multiple times rapidly?",
    "answer": "Prevent double submissions by: 1) Disabling the submit button while isSubmitting is true, 2) Using an active submission ref or abort controller to ignore subsequent clicks, and 3) Generating a unique idempotency key on form load to ensure the backend deduplicates duplicate POST requests.",
    "explanation": "Simply disabling the button via state can leave a micro-window before re-render where rapid clicks still register. Combining button disabling with an immediate synchronous ref guard (if (isSubmittingRef.current) return;) or an idempotency token provides bulletproof protection against accidental duplicate charges or records.",
    "interviewAnswer": "I combine client-side and server-side safeguards. On the client, I immediately set a synchronous ref isSubmittingRef.current = true to block synchronous double-clicks, while updating an isSubmitting state flag to disable the button visually. On the backend, I generate a unique idempotency key with the form so duplicate network requests are safely ignored.",
    "importantPoints": [
      "Disable the submit button visually when isSubmitting is true",
      "Use a useRef guard for synchronous click locking",
      "Use idempotency keys on the backend for mission-critical actions like payments"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "tags": [
      "react",
      "forms",
      "double-submit",
      "idempotency",
      "security"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do you manage a group of multi-select checkboxes in React state cleanly?",
    "answer": "Store selected checkbox values as an array or Set in state. When a checkbox toggles, check if its value already exists in state: if present, filter it out (uncheck); if absent, append it (check).",
    "explanation": "Using an array state like selectedIds ensures clean JSON payloads for API submission. Using a Set or an array with .includes() provides predictable state transitions.",
    "interviewAnswer": "I store an array of selected IDs in state. In the checkbox onChange handler, I check if the item ID is already in the array: if it is, I filter it out; if not, I spread the previous array and append the ID. This provides a single source of truth for the entire multi-select group.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Multi-Select Checkbox Group",
        "code": "function CheckboxGroup({ options }) {\n  const [selected, setSelected] = React.useState([]);\n\n  const handleToggle = (id) => {\n    setSelected(prev =>\n      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]\n    );\n  };\n\n  return (\n    <div>\n      {options.map(opt => (\n        <label key={opt.id}>\n          <input\n            type=\"checkbox\"\n            checked={selected.includes(opt.id)}\n            onChange={() => handleToggle(opt.id)}\n          />\n          {opt.label}\n        </label>\n      ))}\n    </div>\n  );\n}",
        "explanation": "Toggling either filters the ID out or appends it to state."
      }
    ],
    "importantPoints": [
      "Store selected values as an array or Set",
      "Filter out on uncheck, append on check",
      "Never mutate the existing array directly"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "tags": [
      "react",
      "forms",
      "checkboxes",
      "state"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do you build a completely uncontrolled form in React using the native browser FormData API on submit?",
    "answer": "Attach an onSubmit handler with e.preventDefault() to the <form>, then instantiate new FormData(e.currentTarget). Convert the FormData entries into a plain JavaScript object with Object.fromEntries(formData.entries()) for API submission.",
    "explanation": "This pattern completely avoids React state for form inputs. The browser manages all typing, input focus, and validation natively. On submit, React extracts all input values in one clean synchronous pass.",
    "interviewAnswer": "In the form onSubmit handler, I prevent default reload and call new FormData(e.currentTarget). Calling Object.fromEntries(formData) instantly transforms the form fields into a key-value object matching the input name attributes, with zero state management overhead.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Uncontrolled Form with FormData",
        "code": "function FastForm({ onSubmitData }) {\n  const handleSubmit = (e) => {\n    e.preventDefault();\n    const formData = new FormData(e.currentTarget);\n    const formValues = Object.fromEntries(formData.entries());\n    console.log('Submitted values:', formValues);\n    onSubmitData(formValues);\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <input name=\"firstName\" required />\n      <input name=\"lastName\" required />\n      <input name=\"email\" type=\"email\" required />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}",
        "explanation": "Object.fromEntries(formData) extracts values without component re-renders."
      }
    ],
    "importantPoints": [
      "Zero React re-renders while typing",
      "Inputs must have a name attribute to be included in FormData",
      "Leverages native HTML5 validation (required, pattern, type=\"email\")"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "tags": [
      "react",
      "forms",
      "uncontrolled",
      "formdata"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "What causes the text cursor to jump to the end of an input when applying an input mask (e.g. phone number formatting), and how do you fix it in React?",
    "answer": "When a user edits an input in the middle of a masked string (e.g. changing an area code in (123) 456-7890), the component formats the string and sets a new state value. When React applies the new value to the input DOM node, the browser default behavior is to move the selection cursor to the very end of the input.",
    "explanation": "To fix this, save the selectionStart position before formatting. In a useLayoutEffect (which runs synchronously after DOM update before paint), restore inputRef.current.setSelectionRange(targetCursor, targetCursor) so the cursor stays where the user was editing.",
    "interviewAnswer": "The cursor jumps to the end because setting input.value imperatively in React causes the browser to reset selection to value.length. To fix this, I calculate the cursor position before the update and use input.setSelectionRange() inside useLayoutEffect to restore the cursor position before the browser repaints.",
    "importantPoints": [
      "Caused by browser resetting selection to end when input value is updated",
      "Use useLayoutEffect to synchronously restore cursor position before paint",
      "inputRef.current.setSelectionRange(start, end) restores cursor focus"
    ],
    "preparationLevels": [
      "advanced"
    ],
    "difficulty": "hard",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "forms",
      "input-masking",
      "cursor-jump",
      "uselayouteffect"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do you implement an auto-resizing <textarea> component in React that expands its height smoothly as the user types?",
    "answer": "Attach a ref to the <textarea>. In an onChange handler or useLayoutEffect, reset textarea.style.height to \"auto\", then set textarea.style.height to `${textarea.scrollHeight}px`.",
    "explanation": "Resetting height to \"auto\" first is critical: if the user deletes lines, scrollHeight will not shrink unless the height is temporarily reset to recalculate the content height. useLayoutEffect ensures the height expands before the user sees any scrollbar flicker.",
    "interviewAnswer": "I attach a ref to the textarea. On every change, I reset ref.current.style.height to \"auto\" so it can shrink, and then immediately set ref.current.style.height to ref.current.scrollHeight + \"px\". Doing this in useLayoutEffect prevents visual height jumping.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Auto-Resizing Textarea",
        "code": "function AutoResizeTextarea({ value, onChange }) {\n  const textareaRef = React.useRef(null);\n\n  React.useLayoutEffect(() => {\n    const el = textareaRef.current;\n    if (el) {\n      el.style.height = 'auto'; // Reset height to allow shrinking\n      el.style.height = `${el.scrollHeight}px`; // Expand to content\n    }\n  }, [value]);\n\n  return (\n    <textarea\n      ref={textareaRef}\n      value={value}\n      onChange={onChange}\n      rows={1}\n      style={{ resize: 'none', overflow: 'hidden' }}\n    />\n  );\n}",
        "explanation": "useLayoutEffect synchronizes the DOM scrollHeight before browser paint."
      }
    ],
    "importantPoints": [
      "Must reset style.height = \"auto\" before reading scrollHeight to allow shrinking",
      "useLayoutEffect prevents visual scrollbar jitter",
      "Disable manual resize with style={{ resize: \"none\" }}"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "tags": [
      "react",
      "forms",
      "textarea",
      "dom-manipulation",
      "uselayouteffect"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "A user is filling out a multi-step registration wizard. When navigating from Step 1 to Step 2 and back to Step 1, all form inputs are wiped clean. Walk through why this happens and how to fix it.",
    "answer": "The inputs are wiped because the Step 1 component unmounts when the user advances to Step 2, destroying its local useState. To fix this, lift the wizard form state up to the parent wizard container component, or store it in a shared Context or state store (like Zustand) that persists across step transitions.",
    "explanation": "In React, component unmounting releases all component memory and state. If each wizard step manages its own inputs with local useState, switching steps unmounts the previous step. When navigating back, the step mounts afresh with initial blank state.",
    "interviewAnswer": "When the wizard switches steps, Step 1 unmounts, and React discards its local useState. To fix this, I lift the form state up to the WizardManager parent so the state remains alive across step changes. Alternatively, keep all steps mounted and toggle their visibility with CSS display: none.",
    "steps": [
      {
        "stepNumber": 1,
        "title": "Understand Root Cause",
        "description": "Step component unmounting destroys all local state."
      },
      {
        "stepNumber": 2,
        "title": "Lift State Up",
        "description": "Move all wizard step data into a single state object in the parent Wizard component."
      },
      {
        "stepNumber": 3,
        "title": "Pass State and Handlers",
        "description": "Pass step-specific slices and update handlers down as props to each step."
      },
      {
        "stepNumber": 4,
        "title": "Preserve on Navigation",
        "description": "When returning to Step 1, inputs receive existing values from the persistent parent state."
      }
    ],
    "importantPoints": [
      "Unmounted components lose their local state completely",
      "Lift state to the common ancestor that stays mounted",
      "Can persist to sessionStorage to survive page refreshes"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Logical / Scenario-Based",
    "tags": [
      "react",
      "forms",
      "multi-step-wizard",
      "lifting-state"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do you handle dependent dropdowns (e.g. Country -> State -> City) without race conditions or invalid stale selections?",
    "answer": "When a parent selection changes (e.g. user selects a new Country), immediately reset child state (selectedState = \"\", selectedCity = \"\") and fetch new options using an AbortController or active request ID to discard out-of-order network responses.",
    "explanation": "If a user rapidly switches from USA to Canada to Germany, network responses for USA states might arrive after Germany states, corrupting the dropdown options. Resetting child state synchronously and aborting stale fetch requests prevents invalid combinations.",
    "interviewAnswer": "When the country changes, I synchronously clear the selected state and city values. Inside a useEffect dependent on country, I use an AbortController to fetch states. If the country changes before the fetch finishes, the cleanup aborts the request, guaranteeing the state options match the selected country.",
    "importantPoints": [
      "Reset child selection values synchronously on parent change",
      "Use AbortController to cancel previous inflight option requests",
      "Disable child dropdowns while parent options are actively loading"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Logical / Scenario-Based",
    "tags": [
      "react",
      "forms",
      "dependent-dropdowns",
      "race-conditions"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do you implement asynchronous username availability validation with a debounce delay as the user types?",
    "answer": "Use a useEffect that watches the username state. Debounce the validation call using a setTimeout (e.g. 400ms). In the effect cleanup, clear the timeout and abort any ongoing fetch request using AbortController.",
    "explanation": "Checking availability on every keystroke floods the server with database queries and risks race conditions where an earlier query resolves after a later one. Debouncing waits for the user to stop typing, while AbortController cancels pending requests.",
    "interviewAnswer": "I watch the username input in a useEffect. I set a timer for 400ms to debounce. In the timer, I call an async checkUsername API with an AbortController. In the effect cleanup function, I clearTimeout and abort the controller. This prevents server spam and eliminates out-of-order race conditions.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Debounced Async Validation",
        "code": "function UsernameInput() {\n  const [username, setUsername] = React.useState('');\n  const [status, setStatus] = React.useState('idle'); // idle | checking | available | taken\n\n  React.useEffect(() => {\n    if (!username || username.length < 3) {\n      setStatus('idle');\n      return;\n    }\n\n    setStatus('checking');\n    const controller = new AbortController();\n    const timer = setTimeout(async () => {\n      try {\n        const res = await fetch(`/api/check-username?u=${username}`, { signal: controller.signal });\n        const data = await res.json();\n        setStatus(data.isAvailable ? 'available' : 'taken');\n      } catch (err) {\n        if (err.name !== 'AbortError') setStatus('idle');\n      }\n    }, 400);\n\n    return () => {\n      clearTimeout(timer);\n      controller.abort();\n    };\n  }, [username]);\n\n  return (\n    <div>\n      <input value={username} onChange={e => setUsername(e.target.value)} />\n      {status === 'checking' && <span>Checking availability...</span>}\n      {status === 'available' && <span className=\"ok\">Username available!</span>}\n      {status === 'taken' && <span className=\"err\">Username taken</span>}\n    </div>\n  );\n}",
        "explanation": "Debounces by 400ms and cancels stale requests on new keystrokes."
      }
    ],
    "importantPoints": [
      "Debounce prevents hammering database on every character",
      "AbortController eliminates network race conditions",
      "Provide clear visual indicators (checking, available, taken)"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "tags": [
      "react",
      "forms",
      "async-validation",
      "debounce",
      "race-conditions"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "Compare React Hook Form vs Formik vs plain React useState for form management. What are the key architectural trade-offs?",
    "answer": "React Hook Form uses uncontrolled inputs registered via refs, offering minimal re-renders, high performance, and small bundle size. Formik uses controlled inputs, causing component-wide re-renders on every keystroke, which can lag on large forms. Plain useState requires zero dependencies but requires writing manual validation and error tracking boilerplate.",
    "explanation": "For small forms (3-5 fields), plain useState is clean and dependency-free. For medium forms, Formik is familiar but incurs re-rendering costs. For complex, enterprise, or performance-sensitive forms, React Hook Form is the modern industry standard due to ref-based subscription isolation.",
    "interviewAnswer": "React Hook Form is uncontrolled and isolates re-renders to only the inputs that need updating, making it the most performant for large forms. Formik is controlled, re-rendering on every keystroke which can cause performance bottlenecks. Plain useState is best for simple 2-field forms where dependencies are unnecessary.",
    "importantPoints": [
      "React Hook Form: Uncontrolled ref-based, near-zero re-renders, best performance",
      "Formik: Controlled, re-renders on keystroke, higher memory usage on large forms",
      "Plain useState: Great for trivial forms; high boilerplate for complex validation"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Trade-off / Decision Making",
    "tags": [
      "react",
      "forms",
      "react-hook-form",
      "formik",
      "trade-offs"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "Why must e.preventDefault() be called inside an onSubmit handler in a standard React application?",
    "answer": "In HTML, the default browser action for a form submission is to make an HTTP GET or POST request to the action URL and reload the entire webpage. Calling e.preventDefault() stops the browser native form submission, allowing JavaScript/React to handle the form data asynchronously via fetch/Axios without reloading the Single Page Application (SPA).",
    "explanation": "If e.preventDefault() is omitted, the browser immediately cancels all ongoing client JavaScript execution and triggers a full page refresh, clearing all in-memory React and Redux state.",
    "interviewAnswer": "In standard HTML, submitting a form triggers a full page reload to the action URL. In a React SPA, calling e.preventDefault() cancels that default browser navigation so we can validate data, display loading states, and submit data asynchronously via fetch without wiping in-memory state.",
    "importantPoints": [
      "Cancels default browser page reload on form submit",
      "Preserves in-memory client state in Single Page Applications",
      "React 19 Form Actions handle this automatically when using the action prop"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "forms",
      "preventdefault",
      "spa"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do you implement a prompt warning users when they attempt to navigate away from a page with unsaved form changes?",
    "answer": "Attach a beforeunload event listener to window when the form is dirty (modified). If the user attempts to close the tab or reload, the browser displays a native confirmation prompt. For in-app SPA routing (like React Router v6), use the useBlocker hook to intercept navigation and present a custom modal.",
    "explanation": "The browser beforeunload event prevents accidental tab closures. Calling e.preventDefault() and setting e.returnValue = \"\" activates the native browser warning dialog.",
    "interviewAnswer": "I track a isDirty boolean. When isDirty is true, a useEffect attaches a window beforeunload listener to prevent closing the tab or browser refresh. For in-app navigation with React Router, I use useBlocker to intercept route transitions and display an unsaved changes confirmation modal.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Preventing Accidental Form Exit",
        "code": "function Form({ isDirty }) {\n  React.useEffect(() => {\n    const handleBeforeUnload = (e) => {\n      if (isDirty) {\n        e.preventDefault();\n        e.returnValue = ''; // Browser native warning trigger\n      }\n    };\n\n    window.addEventListener('beforeunload', handleBeforeUnload);\n    return () => window.removeEventListener('beforeunload', handleBeforeUnload);\n  }, [isDirty]);\n\n  return <form>...</form>;\n}",
        "explanation": "beforeunload intercepts browser reloads and tab closures when form is dirty."
      }
    ],
    "importantPoints": [
      "beforeunload protects against tab close and page refresh",
      "React Router useBlocker intercepts internal SPA route transitions",
      "Always clean up the window event listener when the component unmounts"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "tags": [
      "react",
      "forms",
      "beforeunload",
      "user-experience",
      "dirty-state"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "Predict the bug in the following code when updating a nested address field in a profile form:",
    "answer": "The developer directly mutates state (profile.address.city = e.target.value) and then calls setProfile(profile). Because the profile object reference has not changed, React bail-out logic detects identical object references and refuses to re-render the component, leaving the UI out of sync.",
    "explanation": "React relies on shallow reference equality. Mutating a nested property on the existing state object and passing the same object to setState does not trigger a re-render. You must create new shallow copies at every level of the updated path.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Nested State Mutation Bug",
        "code": "// BUGGY CODE:\nfunction Profile() {\n  const [profile, setProfile] = React.useState({\n    name: 'Alice',\n    address: { city: 'New York', zip: '10001' }\n  });\n\n  const handleCityChange = (e) => {\n    profile.address.city = e.target.value; // Direct mutation!\n    setProfile(profile); // Same object reference, NO RE-RENDER!\n  };\n\n  return <input value={profile.address.city} onChange={handleCityChange} />;\n}",
        "explanation": "Mutating nested properties in-place breaks React shallow equality checks."
      }
    ],
    "interviewAnswer": "The bug is direct state mutation: mutating profile.address.city in-place and passing the same profile reference to setProfile causes React Object.is comparison to return true, skipping the re-render entirely. The input will not update. To fix this, shallow copy both profile and address: setProfile(prev => ({ ...prev, address: { ...prev.address, city: e.target.value } })).",
    "importantPoints": [
      "Direct mutations break React Object.is equality check",
      "React bails out of re-rendering when the new state reference equals old state",
      "Must shallow-copy all parent objects along the modified path"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "medium",
    "questionType": "Output / Code Prediction",
    "isImportant": true,
    "tags": [
      "react",
      "forms",
      "immutability",
      "state-mutation",
      "bugs"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do you reset a controlled form vs an uncontrolled form back to its initial blank state in React?",
    "answer": "In a controlled form, reset state by calling the state setter with the initial state object (setForm(initialState)). In an uncontrolled form, call the native DOM form reset method using a ref: formRef.current.reset().",
    "explanation": "Calling formRef.current.reset() on an uncontrolled form restores all inputs to their defaultValue attributes without requiring any React state tracking. On controlled forms, calling form.reset() will not clear state because React re-renders with the current state value on the next render pass.",
    "interviewAnswer": "For controlled forms, I set the state back to the initial values object: setValues(initialValues). For uncontrolled forms, I get a reference to the form DOM element using a ref and call formRef.current.reset(), which natively restores all inputs to their defaultValue.",
    "importantPoints": [
      "Controlled: setState(initialValues)",
      "Uncontrolled: formRef.current.reset()",
      "Mixing the two can cause inputs to flicker or retain old values"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "forms",
      "form-reset",
      "state-vs-dom"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do you manage radio button groups in React, and how does React group them logically?",
    "answer": "Radio buttons belong to the same logical group when they share the exact same name attribute. In React, a single state variable stores the currently selected value. Each radio input has checked={selectedValue === opt.value} and onChange={() => setSelectedValue(opt.value)}.",
    "explanation": "Browser accessibility and keyboard arrow navigation depend on the name attribute being identical across all radio options in a group. In React, matching checked to state ensures controlled selection.",
    "interviewAnswer": "All radio buttons in a group must share the same name attribute so the browser knows they are mutually exclusive. In state, I store a single string representing the active selection, setting checked={selected === opt.value} on each radio item.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Radio Button Group",
        "code": "function RadioGroup({ options, selected, onChange }) {\n  return (\n    <div>\n      {options.map(opt => (\n        <label key={opt.value}>\n          <input\n            type=\"radio\"\n            name=\"planType\"\n            value={opt.value}\n            checked={selected === opt.value}\n            onChange={(e) => onChange(e.target.value)}\n          />\n          {opt.label}\n        </label>\n      ))}\n    </div>\n  );\n}",
        "explanation": "Shared name=\"planType\" binds the radio buttons into a single logical group."
      }
    ],
    "importantPoints": [
      "name attribute groups inputs together for mutual exclusivity and keyboard navigation",
      "State holds a single selected value string",
      "checked prop controls visual selection state"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Coding / Implementation",
    "tags": [
      "react",
      "forms",
      "radio-buttons",
      "accessibility"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do you build accessible custom form inputs (e.g. custom styled select or checkbox) that support screen readers and keyboard navigation?",
    "answer": "By either using the \"visually hidden\" native input technique (styling a wrapper while keeping the real input in the DOM for keyboard and focus events) or implementing ARIA attributes (role, aria-checked, aria-expanded, aria-labelledby) and custom onKeyDown handlers for Enter, Space, and Arrow keys.",
    "explanation": "Divs styled as checkboxes are invisible to screen readers and cannot be focused with Tab or toggled with Space unless role=\"checkbox\", tabIndex={0}, and keyboard listeners are manually attached. The safest and most accessible pattern is styling a label around a hidden native input.",
    "interviewAnswer": "The gold standard is using hidden native inputs: wrap a real <input type=\"checkbox\"> in a <label> and hide it with CSS clip-path or opacity: 0. This preserves native keyboard focus and screen reader announcements for free. If building a fully custom widget, you must manually provide ARIA roles, aria-checked, tabIndex, and keydown listeners.",
    "importantPoints": [
      "Hidden native input pattern gives full accessibility with zero custom ARIA code",
      "Custom widgets require role, aria-checked/aria-selected, and tabIndex={0}",
      "Must handle Space and Enter keypresses for activation"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Architecture / Design Thinking",
    "tags": [
      "react",
      "forms",
      "accessibility",
      "a11y",
      "aria"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "Why did React 16 use Event Pooling for synthetic events, and why was it completely removed in React 17?",
    "answer": "Event Pooling reused SyntheticEvent objects across different events to minimize memory allocation and garbage collection pauses in older JavaScript engines. When an event handler finished executing, all event properties were wiped to null. This caused bugs whenever developers tried to access e.target asynchronously inside setTimeout or a promise. React 17 removed pooling because modern JavaScript engines handle garbage collection efficiently.",
    "explanation": "In React 16, accessing e.target inside an async callback threw an error because the event object was already returned to the pool and wiped, requiring e.persist() to retain it. React 17 abolished pooling, simplifying async event handling.",
    "interviewAnswer": "React pooled synthetic events to reduce garbage collection overhead in old browsers, recycling event objects by wiping their properties immediately after the handler executed. This broke async access (e.target inside setTimeout would be null) unless e.persist() was called. React 17 eliminated pooling entirely because modern V8 engines optimize allocations efficiently.",
    "importantPoints": [
      "React 16 wiped SyntheticEvent properties after handler execution",
      "Required e.persist() to read event data asynchronously",
      "React 17 completely removed pooling, making event properties persistent"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "synthetic-event",
      "event-pooling",
      "react17"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do you handle date picker inputs and timezone conversions cleanly in a React form payload?",
    "answer": "Keep the date input value in standard ISO string format (YYYY-MM-DD or full ISO 8601 UTC) in state. When rendering, format to the user local display format; when submitting to the backend, serialize as an unambiguous UTC ISO string (new Date(val).toISOString()) to avoid timezone offset corruption.",
    "explanation": "Native <input type=\"date\" /> accepts and returns YYYY-MM-DD strings. If users in California and Tokyo select the same calendar day, converting to raw local timestamps can shift the date backwards or forwards by a day depending on server timezone interpretation.",
    "interviewAnswer": "I store dates as ISO 8601 strings (YYYY-MM-DD for calendar dates, or full UTC ISO strings for timestamps). On form submission, I convert the date to UTC using toISOString(). This prevents server/client timezone offset shifts from altering the intended calendar date.",
    "importantPoints": [
      "<input type=\"date\" /> values are formatted as YYYY-MM-DD strings",
      "Always serialize timestamps to UTC ISO strings before sending to API",
      "Decouple user display format from underlying stored state format"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Conceptual",
    "tags": [
      "react",
      "forms",
      "date-picker",
      "timezone",
      "serialization"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How do you implement input auto-focus when a modal opens, and how do you ensure it does not break accessibility or screen reader announcements?",
    "answer": "Use a useEffect with a ref attached to the target input (inputRef.current?.focus()). Ensure auto-focus only executes when the modal is fully mounted and visible. For accessibility, provide an aria-label on the modal and trap keyboard focus inside the modal using a focus trap.",
    "explanation": "Using the native autoFocus HTML attribute can fire before modal entrance animations complete or before screen readers announce the modal dialog, disorienting visually impaired users. Imperatively focusing in useEffect once the modal has mounted is more reliable.",
    "interviewAnswer": "I attach a ref to the primary input and invoke inputRef.current?.focus() inside a useEffect when the modal open state becomes true. To ensure accessibility, the modal container should have role=\"dialog\" and aria-modal=\"true\", and keyboard focus must be trapped so users cannot Tab out into the background page.",
    "importantPoints": [
      "Focus imperatively via ref inside useEffect when modal visibility is confirmed",
      "Use focus-trap-react to constrain Tab navigation within the modal",
      "Restore focus to the triggering button when modal closes"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Coding / Implementation",
    "tags": [
      "react",
      "forms",
      "focus-management",
      "accessibility",
      "modal"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "How does React handle form submission via pressing the keyboard Enter key, and why might an unintended button click trigger instead of submit?",
    "answer": "In HTML, pressing Enter inside an input submits the enclosing form by automatically triggering a click on the form FIRST button of type=\"submit\". If a button has no explicit type attribute, browsers default to type=\"submit\", causing an unintended button (like \"Cancel\" or \"Delete\") to fire when Enter is pressed.",
    "explanation": "Any <button> inside a <form> defaults to type=\"submit\" in HTML standards. If you place a \"Previous Step\" or \"Remove Item\" button before the actual submit button without type=\"button\", pressing Enter will click that first button.",
    "interviewAnswer": "Pressing Enter simulates a click on the first submit button in the form. Because buttons default to type=\"submit\", any secondary button (like \"Cancel\" or \"Add Item\") placed above the submit button will be triggered by Enter unless explicitly marked with type=\"button\". Always declare type=\"button\" on non-submitting buttons.",
    "importantPoints": [
      "Buttons inside a <form> default to type=\"submit\" unless specified otherwise",
      "Pressing Enter activates the first type=\"submit\" button in DOM order",
      "Always set type=\"button\" on cancel, back, and secondary buttons"
    ],
    "preparationLevels": [
      "junior"
    ],
    "difficulty": "easy",
    "questionType": "Troubleshooting / Debugging",
    "tags": [
      "react",
      "forms",
      "enter-key",
      "html-standards",
      "gotcha"
    ]
  },
  {
    "technologySlug": "react",
    "topicSlug": "forms",
    "question": "A form receives initial data from an asynchronous API call. Why does setting defaultValue on uncontrolled inputs fail to populate when data arrives late, and how do you fix it?",
    "answer": "defaultValue is only evaluated by the browser when the input initially mounts into the DOM. When the asynchronous API resolves 500ms later, the input is already mounted, so changing defaultValue does not update the DOM input. The fix is to either: 1) Conditionally render the form only after data loads (if (!data) return <Spinner />), or 2) Give the form a key prop tied to the data ID (key={data.id}) to force a fresh remount with the new defaultValue.",
    "explanation": "In React uncontrolled components, defaultValue is initial state only. Giving the input or form a key prop forces React to unmount the empty component and mount a new one with the populated defaultValue.",
    "interviewAnswer": "defaultValue only applies on initial mount; subsequent prop updates are ignored by the DOM. To fix this, I conditionally render the form only after the API data has loaded, or attach key={userData.id} to the form. When the ID arrives, React unmounts the blank form and mounts the populated form afresh.",
    "codeExamples": [
      {
        "language": "javascript",
        "title": "Fixing Uncontrolled Form Initial Data",
        "code": "// FIX 1: Render only when data is ready\nfunction EditUser({ userId }) {\n  const { data, loading } = useUser(userId);\n\n  if (loading || !data) return <Spinner />;\n\n  return (\n    <form>\n      <input name=\"username\" defaultValue={data.username} />\n    </form>\n  );\n}\n\n// FIX 2: Keyed form remounts with new defaultValue\nfunction EditUserKeyed({ user }) {\n  return (\n    <form key={user?.id || 'loading'}>\n      <input name=\"username\" defaultValue={user?.username || ''} />\n    </form>\n  );\n}",
        "explanation": "key={user.id} forces React to remount the form with updated defaultValues."
      }
    ],
    "importantPoints": [
      "defaultValue only applies on initial mount, not on re-renders",
      "Use key={item.id} to force remount when asynchronous data resolves",
      "Alternatively, use controlled inputs if values must react to prop changes after mount"
    ],
    "preparationLevels": [
      "intermediate"
    ],
    "difficulty": "medium",
    "questionType": "Troubleshooting / Debugging",
    "isImportant": true,
    "tags": [
      "react",
      "forms",
      "defaultvalue",
      "uncontrolled",
      "async-data"
    ]
  }
];
