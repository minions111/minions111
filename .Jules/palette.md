## 2025-05-15 - [Command Bar Accessibility and Navigation]
**Learning:** Terminal-style applications benefit significantly from robust keyboard-first navigation. Implementing WAI-ARIA combobox patterns (roles, aria-activedescendant) combined with `ArrowUp`/`ArrowDown` support makes command-driven interfaces feel professional and accessible.
**Action:** Always implement `aria-activedescendant` alongside `selectedIndex` state to provide screen reader feedback for highlighted items in a listbox.

## 2025-05-15 - [React Hook Ordering]
**Learning:** In Next.js 15/React 19, conditional early returns before hooks cause major build and runtime failures. Stricter enforcement of Hook rules is necessary for production builds and reliable Playwright testing.
**Action:** Always group `useState` and `useEffect` at the top of the component, before any conditional logic that might skip them.
