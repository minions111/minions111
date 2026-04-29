# Palette's Journal - Bloomberg Terminal Pro

## 2025-05-15 - CommandBar Keyboard Accessibility
**Learning:** Terminal-style interfaces rely heavily on keyboard efficiency. Command suggestion lists without keyboard navigation (Arrow keys) break the "power user" mental model. ARIA combobox patterns are essential for screen reader users to understand the dynamic suggestion list.
**Action:** Implement 'selectedIndex' state with ArrowUp/ArrowDown support and full WAI-ARIA combobox/listbox roles.
