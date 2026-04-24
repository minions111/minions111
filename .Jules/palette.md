## 2025-05-15 - [Terminal Command Bar Accessibility & Navigation]
**Learning:** Terminal-style applications benefit significantly from intelligent command suggestions that are fully navigable via keyboard (Arrow keys + Enter) and communicate state to screen readers using WAI-ARIA combobox patterns.
**Action:** Always implement `role="combobox"` with `aria-activedescendant` for mnemonic-heavy search bars to ensure institutional-grade accessibility.
