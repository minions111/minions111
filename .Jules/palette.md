## 2025-05-30 - [Next.js 15 Build & A11y Fixes]
**Learning:** In Next.js 15 with ESLint 9, `eslint-config-next` must be loaded via `FlatCompat`. Hook order must be strictly maintained even during early returns (SSR/Hydration checks). Template literals in TSX should not escape backticks to avoid build-time unicode escape errors.
**Action:** Use `FlatCompat` for Next.js linting, define derived state before early returns, and ensure template literals are clean.

## 2025-05-30 - [CommandBar Keyboard UX]
**Learning:** Implementing the W3C 'combobox' pattern significantly improves terminal-style interfaces, enabling 'fingers on keys' workstation efficiency.
**Action:** Always include ARIA roles (combobox, listbox, option) and keyboard handlers (ArrowUp/Down, Enter, Escape) for search/command components.
