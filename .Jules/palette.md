## 2025-05-15 - [Accessible Command Bar Navigation]
**Learning:** The Bloomberg Terminal experience is heavily keyboard-driven. Implementing a W3C-compliant combobox pattern (roles: combobox, listbox, option) with ArrowKey navigation significantly improves the "fingers on keys" workflow.
**Action:** Always wrap search inputs in a `role="combobox"` container when using `aria-expanded` to avoid 'textbox' attribute support warnings. Synchronize mouse hover with keyboard selection via `onMouseEnter` to prevent "jumping" selection states.

## 2025-05-15 - [Hook Order and SSR Hydration]
**Learning:** In Next.js App Router, derived state and effects must be declared before any early returns (like loading screens) to ensure consistent hook execution order across renders.
**Action:** Define all `useState` and `useEffect` at the top of the component, and place loading/early return checks after them. Use optional chaining when accessing state that might not be fully initialized yet.
