## 2025-05-14 - [CommandBar Keyboard Navigation & ARIA]
**Learning:** Adding keyboard navigation (ArrowUp/Down/Enter) to command suggestions significantly improves terminal-style UX. Proper ARIA attributes (`combobox`, `listbox`, `option`) ensure the power-user interface remains accessible. Resetting selection index on suggestion change is critical for preventing stale focus.
**Action:** Always implement `onKeyDown` for autocomplete/command inputs and synchronize `selectedIndex` with the suggestion list.

## 2025-05-14 - [Next.js 15 / React 19 Hook Ordering]
**Learning:** Next.js 15 and React 19 strictly enforce hook ordering. Hooks declared after an early return (e.g., a loading splash screen) will cause production build failures even if they don't trigger during development.
**Action:** Ensure all hooks (`useState`, `useEffect`, `useCallback`) are declared at the top of the component, before any conditional returns.

## 2025-05-14 - [Template Literal Escape Sequences]
**Learning:** Unnecessary backslash escapes in template literals (e.g., `\`\${ticker}\``) can cause "Expected unicode escape" errors in the SWC/Next.js compiler during production builds.
**Action:** Avoid escaping backticks or interpolation markers inside template literals unless explicitly required for the string content.
