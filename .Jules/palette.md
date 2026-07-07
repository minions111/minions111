## 2026-07-07 - [Correcting Hook Order in Terminal Root]
**Learning:** In 'src/app/page.tsx', a Hook order violation occurred because 'useEffect' was defined after an early return ('if (!isLoaded)'). This caused hydration errors and development server crashes. React requires hooks to be called in the same order on every render.
**Action:** Always define all React hooks (useState, useEffect, useMemo, etc.) and state derivations before any conditional early returns in the component body.

## 2026-07-07 - [WAI-ARIA Combobox Pattern for Terminal CommandBar]
**Learning:** The CommandBar is the primary interaction point in the Bloomberg simulation. Implementing the WAI-ARIA combobox pattern (roles: combobox, listbox, option; attributes: aria-expanded, aria-controls, aria-activedescendant) significantly improves accessibility for screen reader users while keyboard navigation (Arrow keys) enhances power-user efficiency.
**Action:** Use standard WAI-ARIA patterns for custom input/suggestion components to ensure institutional-grade accessibility and usability.
