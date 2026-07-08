## 2026-07-08 - Keyboard Navigation for Terminal Command Bar
**Learning:** In a keyboard-centric application like a Bloomberg Terminal simulation, the lack of keyboard navigation for suggestions is a major UX gap. Implementing the WAI-ARIA combobox pattern significantly improves both accessibility and power-user efficiency.
**Action:** Use `selectedIndex` state to track highlights, ensure `ArrowDown`/`ArrowUp` cycle through suggestions, and use `aria-activedescendant` on the input to link it to the current suggestion ID.
