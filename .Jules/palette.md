## 2025-05-15 - [CommandBar Accessibility and Keyboard Navigation]
**Learning:** Decoupling suggestion filtering logic from selection reset logic in `CommandBar.tsx` ensures that `selectedIndex` only resets when the user intentionally changes the command query, avoiding resets on parent re-renders (e.g., from a clock component).
**Action:** Always wrap `selectedIndex` reset in its own `useEffect` dependency array targeting only the `command` text state.

## 2025-05-15 - [React Hook Order and Early Returns]
**Learning:** Early returns (e.g., `if (!isLoaded)`) must always be placed after all React hooks and derived state variables that use hooks to prevent Hook order violations and potential runtime crashes during hydration.
**Action:** Place all state derivations and hooks before any conditional early returns in the main component function.
