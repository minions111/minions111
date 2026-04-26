## 2025-05-22 - Command Bar Keyboard Navigation
**Learning:** Implemented full WAI-ARIA combobox pattern (roles, activedescendant) for the terminal command bar. Discovered that Next.js 15 has extremely strict Hook ordering enforcement that triggers even on initial mount if hooks are declared after an early return, requiring all logic to be moved to the top of the component.
**Action:** Always declare all hooks at the very top of Next.js components, even before status-based early returns (like loading screens), and memoize complex prop objects passed to keyboard-aware components.
