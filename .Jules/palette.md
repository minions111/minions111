# Palette's Journal - Critical UX/Accessibility Learnings

## 2025-05-15 - [Initial Entry]
**Learning:** Initializing the journal to track workstation-specific UX improvements.
**Action:** Always document reusable patterns here.

## 2025-05-15 - [CommandBar Keyboard Navigation]
**Learning:** Implementing ARIA combobox patterns (roles, expanded state, activedescendant) improves keyboard discoverability and screen reader support for command-driven interfaces.
**Action:** Use `aria-activedescendant` coupled with `selectedIndex` state to manage focus without moving actual browser focus, keeping the input active for continuous typing.

## 2025-05-15 - [ESLint and Template Literals]
**Learning:** Avoid unnecessary backslash escapes for backticks or '${}' in template literals within TSX files; the Next.js production compiler interprets these as invalid unicode escapes, causing build failures.
**Action:** Always verify builds with `pnpm build` as it catches template literal parsing errors that simple linting might miss.
