## 2026-06-11 - [Terminal Keyboard Navigation]
**Learning:** Keyboard-driven interfaces (like Bloomberg Terminal simulations) require robust ARIA combobox patterns and de-coupled state dependencies to prevent focus/selection resets during high-frequency parent re-renders (e.g., clock updates).
**Action:** Always memoize suggestion lists or use stable dependency arrays in 'useEffect' when implementing keyboard navigation in components nested under frequently updating providers.
