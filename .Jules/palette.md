## 2025-05-22 - [Keyboard Navigation & Accessibility in Command-Style Interfaces]
**Learning:** For terminal-style interfaces, keyboard navigation (Arrow keys, Enter, Escape) is not just a "bonus" but a core part of the UX. Additionally, when using early returns in React components, ensure all derived state and hooks are declared at the very top to avoid hook order violations (Error #310) when the loading state resolves.
**Action:** Always implement ArrowUp/Down and Enter for autocomplete lists; use W3C Combobox patterns; ensure state derivation precedes early returns.
