## 2025-05-15 - [Terminal Navigation & Build Constraints]
**Learning:** In high-density terminal UIs, memoizing command registries with `useMemo` is critical when passed to components like `CommandBar`. Without it, global state updates (like a clock) cause parent re-renders that reset internal `selectedIndex` state if the prop is viewed as "new". Also, Next.js production builds are extremely sensitive to escaped backticks in template literals within TSX.
**Action:** Always wrap static-ish arrays in `useMemo` before passing to child components with internal selection state. Avoid backslash-escaping backticks in template literals unless absolutely necessary for the logic.

## 2025-05-15 - [ARIA Combobox Synchronization]
**Learning:** Standardizing keyboard navigation (ArrowUp/Down) with ARIA roles (combobox/listbox) significantly improves accessibility. Using `aria-activedescendant` allows screen readers to follow focus without needing to move actual DOM focus, which is ideal for "IntelliSense" style suggestion lists.
**Action:** Use `aria-activedescendant` tied to a stable ID pattern for suggestions and synchronize it with a `selectedIndex` state.
