## 2026-06-02 - [WAI-ARIA Combobox Pattern for Command Bars]
**Learning:** Institutional workstations like the Bloomberg Terminal require robust keyboard navigation. Implementing the WAI-ARIA combobox pattern (combobox, listbox, option) with `aria-activedescendant` provides a superior experience for both power users and screen reader users.
**Action:** Always use `aria-activedescendant` to manage focus in suggestion lists, and ensure `ArrowUp`/`ArrowDown` allow de-selection (index -1).

## 2026-06-02 - [Next.js 15 Hook Order and Hydration]
**Learning:** Next.js 15 is strict about React Hook order. Declaring hooks after a conditional early return (e.g., loading state) causes build failures (Error #310). Hydration-safe state (like from `localStorage`) should be derived before the early return using nullish coalescing.
**Action:** Define all derived state variables before any early returns in the component body.
