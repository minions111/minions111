## 2025-05-15 - [Accessible Combobox Pattern for Financial Terminals]
**Learning:** Institutional interfaces often rely on dense, command-driven inputs. Implementing the WAI-ARIA combobox pattern (role="combobox", aria-autocomplete="list") with keyboard navigation (ArrowUp/Down) significantly reduces cognitive load and improves accessibility for power users who prefer not to leave the home row.
**Action:** Always include keyboard selection logic and proper ARIA states (aria-activedescendant, aria-selected) when implementing command bars or suggestion-based inputs.
