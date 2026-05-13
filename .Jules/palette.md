
## 2025-05-22 - [Keyboard Navigation & ARIA in CommandBar]
**Learning:** Intelligent search routing and command bars benefit significantly from W3C combobox patterns, which provide a familiar terminal-like experience for power users while ensuring screen reader accessibility.
**Action:** Always implement ArrowUp/ArrowDown navigation and sync 'aria-activedescendant' when building suggestion-based inputs.

## 2025-05-22 - [React Hook Order & Early Returns]
**Learning:** In Next.js/React, defining derived state (e.g., from terminals[activeTerminal]) after an early loading return causes Hook order violations (Error #310) if any hooks (like useEffect) follow that return.
**Action:** Move all hook declarations and derived state logic before the early return, using sensible defaults to ensure stability.
