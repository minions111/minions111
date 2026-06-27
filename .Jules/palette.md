## 2025-05-15 - [Workstation Accessibility & Hook Stability]
**Learning:** The "fingers on keys" experience is a critical UX requirement for the Bloomberg Terminal simulation. Implementing the WAI-ARIA combobox pattern with full keyboard support (Arrow keys, Enter, Escape) and proper `aria-activedescendant` mapping ensures the workstation feels professional and accessible.
**Action:** Apply the WAI-ARIA combobox pattern to all command-entry interfaces to maintain institutional high-fidelity standards.

**Learning:** React Hook order violations (defining hooks after early returns) cause dev server crashes and hydration mismatches. This is especially critical in Next.js applications with complex state derivations.
**Action:** Define all `useState`, `useEffect`, and state derivations at the top of the component before any early returns.

**Learning:** SWC compiler errors can be triggered by unnecessary backslash escapes in template literals within JSX curly braces.
**Action:** Use standard backticks for template literals and avoid backslash escapes for dollar signs unless absolutely necessary; use string concatenation for complex nested samples.
