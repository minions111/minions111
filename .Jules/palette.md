## 2025-05-14 - [Fingers on Keys: Keyboard-Centric Navigation]
**Learning:** For terminal-style workstations, keyboard-centric navigation is not just a feature but a core requirement. Implementing W3C ARIA combobox patterns (roles: combobox, listbox, option) provides the necessary accessibility foundation while enabling efficient "fingers on keys" workflows for professional users.

**Action:** Always prioritize keyboard event listeners (ArrowDown, ArrowUp, Enter, Escape) and corresponding ARIA attributes for command-entry and search interfaces. Ensure mouse-hover and keyboard-selection states are synchronized to prevent visual discordance.

## 2025-05-14 - [React 19 Hook Order & Early Returns]
**Learning:** In React 19 / Next.js 15, conditional early returns (like loading screens) can easily trigger hook order violations if derived state or hooks are declared after the guard. Moving the loading guard *after* all hook declarations (using sensible defaults or optional chaining) ensures stability and compliance with the Rules of Hooks.

**Action:** Declare all state and hooks at the top of the component. Use derived variables with optional chaining for state that might be undefined during initial load, and place the "isLoaded" guard just before the main render logic.
