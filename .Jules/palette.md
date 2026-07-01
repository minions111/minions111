## 2026-07-01 - [Keyboard Navigation & ARIA in Terminal Simulations]
**Learning:** Terminal-style interfaces (like Bloomberg) rely heavily on keyboard efficiency. Standard combobox patterns (WAI-ARIA) are essential for accessibility, but institutional users also expect specific "neutral" states (e.g., ESC to clear selection but keep focus) and high-contrast institutional branding (#ffb900) for active states.
**Action:** Always implement full ArrowUp/Down/Enter/Esc navigation for command inputs and ensure `aria-activedescendant` is synced with the visual highlight.

## 2026-07-01 - [SWC Unicode Escape Errors in Next.js]
**Learning:** Next.js (using SWC) can be sensitive to escaped characters (like \` or \$) inside template literals when they are nested or passed through certain build pipelines, often throwing "Expected unicode escape" errors.
**Action:** Prefer standard string concatenation or unescaped template literals where possible to ensure build stability across environments.
