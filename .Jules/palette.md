## 2025-05-15 - Keyboard Navigation for Command Suggestions
**Learning:** Implementing custom dropdowns (like terminal auto-suggestions) requires manual keyboard event handling and specific ARIA roles (combobox, listbox, option) to ensure they are accessible and feel "native" to power users.
**Action:** Always include ArrowDown/ArrowUp and Enter/Escape handlers for suggestion lists, and use `aria-activedescendant` to link the input with the active suggestion for screen readers.

## 2025-05-15 - React Hook Order and Template Literals
**Learning:** Next.js production builds can fail due to escaped backticks in template literals (interpreted as invalid unicode escapes) and React Hook order violations (hooks declared before early returns must be consistent).
**Action:** Avoid backslash escapes for `${}` or backticks in TSX files and ensure all Hooks are called unconditionally before any early returns in the component.
