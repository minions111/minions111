## 2026-05-09 - [Keyboard Navigation and Accessibility for Command Bar]
**Learning:** Implementing keyboard navigation (`ArrowUp`/`ArrowDown`/`Enter`) in a terminal-style command bar significantly improves interaction parity with native workstations. Using `aria-activedescendant` and `role="combobox"` patterns provides a standard way for screen readers to handle dynamic auto-suggestions.
**Action:** Always include keyboard event handlers and appropriate ARIA roles for custom input components with dropdown suggestions.
