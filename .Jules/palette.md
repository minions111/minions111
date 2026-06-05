## 2025-05-15 - [Keyboard-First Navigation in Terminal Workstations]
**Learning:** For institutional-grade simulations like a Bloomberg Terminal, the 'fingers on keys' experience is as critical as visual fidelity. Implementing a WAI-ARIA compliant combobox pattern for the CommandBar significantly improves both professional UX and accessibility for screen reader users.
**Action:** Always prioritize keyboard navigation (Arrow keys, Enter, Escape) and ARIA attributes (role="combobox", aria-activedescendant) for any command-entry or search interface.

## 2025-05-15 - [Hook Order Stability]
**Learning:** Conditional early returns before hooks in Next.js/React components (like `if (!isLoaded) return ...`) can cause critical runtime failures when state changes trigger a re-render with different hook counts.
**Action:** Ensure all hooks and derived state variables are declared before any early return checks to maintain hook order stability.
