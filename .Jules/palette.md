## 2025-05-15 - [ARIA Combobox for Terminal Command Bar]
**Learning:** Implementing keyboard navigation for terminal-style command bars should follow the WAI-ARIA Combobox pattern (role="combobox", listbox, option) with aria-activedescendant for accessibility.
**Action:** Always include aria-activedescendant and aria-selected when implementing custom suggestion lists to ensure screen readers can track the focused item.

## 2025-05-15 - [React Hook Ordering in Next.js 15]
**Learning:** Next.js 15 / React 19 strictly enforces hook ordering. Conditional returns (like loading screens) must come AFTER all hooks (useState, useEffect, etc.) to avoid "Rendered more hooks than during the previous render" errors.
**Action:** Group all hooks at the top of the component and use optional chaining or fallbacks for state access before the early return.

## 2025-05-15 - [Template Literal Escapes in Production Builds]
**Learning:** Next.js production compiler (SWC) may fail if backticks or ${} are unnecessarily escaped (e.g., \` or \${}) inside TSX files, treating them as invalid unicode escapes.
**Action:** Avoid backslash escapes for template literals in TSX unless strictly required by the logic.
