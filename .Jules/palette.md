## 2025-05-15 - [CommandBar Keyboard Navigation & Accessibility]
**Learning:** Implementing W3C Combobox patterns in a terminal-style interface significantly improves productivity for power users while ensuring screen reader compatibility. Standardizing ArrowUp/Down and Escape keys provides a familiar 'IDE-like' experience.
**Action:** Always include keyboard navigation and ARIA-compliant metadata (role="combobox", aria-activedescendant) for any search or command entry components.

## 2025-05-15 - [React Hook Order & Early Returns]
**Learning:** Next.js 15 and React 19 are stricter about Hook order. Variables derived from state must be initialized before any early return (e.g., a loading screen) if Hooks declared after the return depend on them.
**Action:** Ensure all Hooks (useState, useEffect, useMemo) are declared at the top level and early returns only happen after all primary Hook declarations.
