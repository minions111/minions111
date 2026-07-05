## 2026-07-05 - [WAI-ARIA Combobox in CommandBar]
**Learning:** Implementing the WAI-ARIA combobox pattern requires careful coordination between 'aria-activedescendant' on the input and unique IDs on the suggestion items to ensure screen readers correctly announce the highlighted option.
**Action:** Always link the input's 'aria-activedescendant' to the highlighted option's ID and ensure the 'selectedIndex' resets when the query changes.
