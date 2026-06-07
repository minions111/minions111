## 2025-05-15 - [Keyboard-First Navigation & ARIA Combobox Pattern]
**Learning:** For terminal-style workstation interfaces, the "fingers on keys" experience is critical. Relying solely on mouse clicks for command suggestions breaks the institutional user's flow. Implementing the WAI-ARIA Combobox pattern with keyboard support (ArrowDown/Up, Enter, Escape) ensures both speed for power users and accessibility for screen reader users.
**Action:** Always implement full keyboard navigation and appropriate ARIA attributes (`aria-activedescendant`, `aria-controls`) when adding auto-suggestion or dropdown lists to terminal inputs.

## 2025-05-15 - [React Hook Order & Early Returns]
**Learning:** High-fidelity simulations with loading states (like the Bloomberg Terminal splash) often use early returns. Defining Hooks after these returns causes "Rules of Hooks" violations that crash the Next.js dev server during hydration.
**Action:** Ensure all React hooks (useState, useEffect) are defined at the top level of the component before any early returns for loading or authentication states.
