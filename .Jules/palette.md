## 2025-05-14 - [Hook Order and SWC Compilation]
**Learning:** In Next.js 15, early returns for loading states must be placed AFTER all hooks to avoid "Rendered more hooks than during the previous render" errors. Additionally, SWC compiler may fail on escaped template literals inside JS-in-JSX blocks.
**Action:** Always define `useState` and `useEffect` at the top of the component, and use string concatenation for complex code samples in documentation components to avoid unicode escape errors.

## 2025-05-14 - [Institutional Keyboard UX]
**Learning:** Terminal simulations require robust keyboard navigation (`ArrowUp`/`ArrowDown`/`Enter`) to feel authentic. ARIA combobox patterns (role="combobox", aria-activedescendant) provide both the UX and accessibility required for institutional-grade tools.
**Action:** Implement manual `onKeyDown` handlers for command inputs and use `aria-selected` to highlight active suggestions for screen readers.
