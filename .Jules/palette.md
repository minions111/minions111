## 2025-05-14 - [Accessible Command Navigation]
**Learning:** In a terminal-style interface, keyboard accessibility for command suggestions is as critical as the mouse experience. Users expect `ArrowDown`/`ArrowUp` to work seamlessly with the search input.
**Action:** Always implement W3C combobox patterns (roles, aria-activedescendant) for command palettes or search bars to ensure screen reader compatibility and keyboard efficiency.

## 2025-05-14 - [React Hook Order Violation]
**Learning:** Next.js 15 and ESLint 9 strictly enforce the "Rules of Hooks". Early returns in components can easily lead to conditional hook execution if not careful with state initialization.
**Action:** Ensure all hooks are declared at the top level and that early returns only happen *after* all hook declarations. Use sensible defaults for derived state when in a loading state.
