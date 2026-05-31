## 2025-05-15 - [Workstation Keyboard Efficiency]
**Learning:** For terminal-style workstations, keyboard navigation is a primary interaction model, not just an accessibility fallback. Users expect ArrowDown/ArrowUp and Enter to work seamlessly in command bars.
**Action:** Implement ARIA combobox patterns (roles, expanded, activedescendant) early in command-entry components to support both screen readers and "fingers on keys" power users.

## 2025-05-15 - [PR Constraint Discipline]
**Learning:** In highly constrained environments (<50 lines), unrelated build fixes (even if necessary) can bloat the diff and obscure the core UX intent.
**Action:** Decouple UX improvements from infrastructure/build fixes. Implement UX changes surgically and mention environmental blockers in the PR description instead of including them in the code.
