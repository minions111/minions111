## 2025-05-15 - [Enhanced CommandBar Navigation & Accessibility]
**Learning:** Implementing the WAI-ARIA combobox pattern in the `CommandBar` significantly improves the 'fingers on keys' institutional experience. Using `aria-activedescendant` allows screen readers to follow keyboard navigation through suggestions without moving focus from the input.
**Action:** Always use `aria-activedescendant` and `role="listbox"` for searchable suggestion components. Ensure `selectedIndex` is reset to `-1` when the input changes to maintain a neutral starting state for each new query.

## 2025-05-15 - [Build Stability & ESLint 9 Flat Config]
**Learning:** Next.js 15 projects with ESLint 9 Flat Config may require explicit `@eslint/eslintrc` usage with `FlatCompat` to correctly load legacy configs like `next/core-web-vitals`. Hook order violations (like calling `useEffect` after an early return) and template literal parsing errors (escaped backticks in JSX) are critical blockers for production builds.
**Action:** Define all React hooks before early returns. Avoid escaping backticks inside template literals in `.tsx` files to prevent SWC compiler errors.
