## 2025-05-14 - [WAI-ARIA Combobox & Keyboard Nav]
**Learning:** Institutional-style command bars benefit significantly from the WAI-ARIA combobox pattern. Users expect "fingers on keys" efficiency, so keyboard navigation (ArrowUp/Down) for suggestions is a critical UX requirement.
**Action:** Always implement `selectedIndex` state and keyboard listeners for command-driven interfaces. Ensure `aria-activedescendant` is correctly linked to option IDs.

## 2025-05-14 - [React Hook Order & Early Returns]
**Learning:** In Next.js/React projects, placing early returns (e.g., for loading states) before hooks like `useEffect` or `useState` derivations will cause "Rules of Hooks" violations during hydration or state updates.
**Action:** Ensure all hooks and derived state variables are declared at the top of the component, before any conditional early returns.
