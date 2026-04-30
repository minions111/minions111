# Palette's Journal - Critical UX/Accessibility Learnings

## 2026-04-30 - Accessible Combobox with ARIA Roles
**Learning:** Implementing a terminal-style command bar requires more than just a list of suggestions. To be truly accessible, it must follow the WAI-ARIA `combobox` pattern, including `aria-autocomplete`, `aria-expanded`, and `aria-activedescendant` for screen reader synchronization.
**Action:** Always use `role="combobox"` for inputs with suggestions and ensure `selectedIndex` is synchronized with `aria-activedescendant`.

## 2026-04-30 - Production Build Constraints in Template Literals
**Learning:** Next.js production compiler (SWC/Webpack) is stricter than the development server regarding backslash escapes in template literals. Escaping backticks or `${}` in TSX can lead to "Expected unicode escape" errors during the build.
**Action:** Avoid unnecessary backslash escapes in template literals within `.tsx` files; rely on standard template literal syntax.

## 2026-04-30 - React Hook Ordering and Early Returns
**Learning:** Next.js 15 and React 19 strictly enforce that all hooks must be called before any early returns. However, derived state that depends on successfully loaded data (like `terminals[activeTerminal]`) must be accessed AFTER the `isLoaded` check to prevent runtime crashes during initial hydration.
**Action:** Group all hooks at the top of the component, and place data-dependent derived state variables immediately after the `if (!isLoaded)` return.
