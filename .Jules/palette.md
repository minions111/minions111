## 2025-05-22 - [Combobox Pattern and Hook Order]
**Learning:** In terminal-style interfaces, the "fingers on keys" experience requires robust keyboard navigation. When implementing ARIA comboboxes, `aria-expanded` and `aria-controls` should be on the container with `role="combobox"`, and all hooks must be defined before any conditional early returns (like loading screens) to prevent Hook order violations.
**Action:** Always wrap `role="combobox"` around command inputs and ensure state-derived views are accessed with optional chaining before the loading return.
