## 2025-02-12 - Keyboard Navigation in Terminal Interfaces
**Learning:** Institutional terminal users (like Bloomberg Terminal users) rely heavily on keyboard efficiency. Standard ARIA combobox patterns are essential for making these high-density command interfaces accessible and intuitive.
**Action:** Always implement ArrowDown/ArrowUp and Enter selection for command-driven inputs. Ensure `aria-activedescendant` is correctly managed to provide screen reader feedback during navigation.
