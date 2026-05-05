## 2025-05-15 - [ARIA Combobox Pattern for Command Bar]
**Learning:** Implementing the ARIA 1.2 Combobox pattern (role="combobox", role="listbox", role="option") significantly improves keyboard-only and screen reader navigation for command-driven interfaces. Using `aria-activedescendant` allows the input to maintain focus while the user navigates suggestions.
**Action:** Always prefer `aria-activedescendant` for comboboxes to keep focus on the text input, and ensure `ArrowDown` both opens the list and selects the first item if nothing is selected.
