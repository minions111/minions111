## 2025-05-15 - Keyboard-First Terminal Navigation
**Learning:** Institutional-style interfaces (like Bloomberg) benefit significantly from robust keyboard navigation. Implementing WAI-ARIA combobox patterns with `ArrowUp`/`ArrowDown` and `Enter` selection makes the "Terminal" feel authentic and professional.
**Action:** Always include keyboard listeners and ARIA attributes for command-driven inputs to ensure high-fidelity workstation UX.

## 2025-05-15 - React Hook Order Safety
**Learning:** Guard clauses (like `if (!isLoaded) return ...`) must be placed AFTER all Hook declarations to avoid Hook order violations, but property extraction from data that might be uninitialized during the loading state must be done safely (e.g., optional chaining).
**Action:** Define all `useState` and `useEffect` at the top of the component, and use safe property access if data is derived before early returns.
