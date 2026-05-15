## 2026-05-15 - [Keyboard-First Navigation in Command Bar]
**Learning:** In terminal-style applications, keyboard navigation for auto-suggestions is critical for power users. Implementing the WAI-ARIA `combobox` pattern not only ensures accessibility for screen readers but also provides a structured way to manage keyboard focus using `aria-activedescendant`.
**Action:** Use `aria-activedescendant` and `role="combobox"` for any future command-driven or search-intensive components to maintain terminal fidelity.
