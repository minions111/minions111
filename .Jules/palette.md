## 2024-05-06 - [Keyboard Navigation & ARIA Patterns]
**Learning:** In a command-driven interface like a Bloomberg terminal, keyboard navigation for suggestions is not a "nice-to-have" but a core accessibility requirement. Implementing the W3C 'combobox' pattern with `aria-activedescendant` provides a robust experience for screen readers without needing to manage DOM focus between the input and the list.
**Action:** Always use `aria-activedescendant` for listbox components to maintain focus in the input while allowing navigation through suggestions.
