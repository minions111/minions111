# Palette's Journal - Critical UX Learnings

## 2025-05-15 - [Keyboard Navigation in Search Components]
**Learning:** Adding full keyboard support (Arrow keys, Enter, Escape) to a search/command component drastically improves the "fingers on keys" experience for power users, especially in institutional/terminal-style interfaces. Implementing WAI-ARIA combobox patterns ensures this remains accessible to screen readers.
**Action:** Always include keyboard event handlers and ARIA attributes when implementing suggestion-based inputs.
