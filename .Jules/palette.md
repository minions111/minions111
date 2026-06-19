## 2025-05-14 - [Keyboard Navigation & ARIA Combobox for CommandBar]
**Learning:** Institutional-style terminal interfaces require high-density keyboard support. Users expect Arrow navigation and Enter selection for command suggestions. Implementing the WAI-ARIA combobox pattern ensures these features are discoverable and accessible to screen readers.
**Action:** Use 'selectedIndex' state linked with 'aria-activedescendant' and 'aria-selected' for all suggestion/autocomplete components.

## 2025-05-14 - [React Hook Order & Prop Memoization]
**Learning:** Frequent parent re-renders (e.g., from a real-time clock) can reset child component state if props (like arrays or objects) are recreated on every render.
**Action:** Memoize static or derived lists passed as props (e.g., COMMAND_MAP keys) using 'useMemo' and ensure all hooks are defined before any early returns in the component body.
