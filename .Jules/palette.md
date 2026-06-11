## 2025-05-15 - [Accessible Terminal Command Bar]
**Learning:** Terminal-style interfaces that rely heavily on keyboard input must implement the WAI-ARIA combobox pattern to be accessible to screen readers and efficient for power users. This includes `aria-expanded`, `aria-haspopup`, `aria-controls`, and `aria-activedescendant`.
**Action:** Always wrap command inputs in a `role="combobox"` container and manage focus/selection states with keyboard listeners (`ArrowUp`/`ArrowDown`).

## 2025-05-15 - [Stable Suggestion References]
**Learning:** In highly dynamic UIs (like those with second-by-second clock updates), passing inline-generated arrays (e.g., `Object.keys(MAP)`) to interactive components like `CommandBar` causes unnecessary re-renders and resets component-internal state (like `selectedIndex`) unless memoized or defined outside the component.
**Action:** Move static lookup keys outside the React component or use `useMemo` to ensure stable references.
