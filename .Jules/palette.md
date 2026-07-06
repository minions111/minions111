## 2025-05-15 - [Keyboard Navigation in Terminal Interfaces]
**Learning:** For command-driven interfaces, mouse-free navigation is not just an accessibility feature but a core UX requirement. Users expect to type, navigate suggestions with arrows, and select with Enter.
**Action:** Always implement WAI-ARIA combobox patterns (roles, aria-activedescendant) alongside keyboard event handlers for search/command inputs.

## 2025-05-15 - [React Hook Order & Early Returns]
**Learning:** Next.js hydration and SWC compilation are sensitive to Hook order violations. Placing Hooks after early returns (e.g., loading screens) causes runtime crashes and compilation errors.
**Action:** Ensure all Hooks (useState, useEffect, useMemo) are defined at the top level of the component before any conditional return statements.
