## 2025-06-27 - [A11y] Accessible Command Suggestions
**Learning:** Implementing a terminal-style command bar with auto-suggestions requires more than just a list; it needs the WAI-ARIA combobox pattern to be truly accessible to screen readers, especially when keyboard navigation is the primary interaction method.
**Action:** Always wrap search/command inputs in a `role="combobox"` container with `aria-expanded` and `aria-controls` when displaying a suggestion list, and use `aria-activedescendant` to sync the focused state.

## 2025-06-27 - [UX] Keyboard-First Navigation
**Learning:** In institutional/terminal-grade UIs, keyboard-first navigation (ArrowUp/Down/Enter/Esc) is not just a "nice-to-have" but a core efficiency requirement. Users expect to navigate suggestions without leaving the home row.
**Action:** Prioritize `onKeyDown` handlers for all suggestion-based inputs and ensure selection cycling (modulo navigation) is intuitive.
