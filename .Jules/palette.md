## 2025-05-20 - [CommandBar Accessibility & Hook Order Integrity]
**Learning:** In high-density institutional workstations like this Bloomberg Terminal simulation, custom interactive components (like the CommandBar) often lack standard W3C accessibility patterns. Additionally, Next.js 15 projects with complex global states (like the heartbeat clock) require strict hook memoization to prevent UI "jank" where suggestions or focus states reset unexpectedly.
**Action:** Always implement W3C 'combobox' and 'listbox' patterns for search/command inputs. Use `useMemo` for static-ish lists passed to these components and ensure `useEffect` dependencies are as narrow as possible to prevent state resets on parent re-renders.

## 2025-05-20 - [Build Integrity and Template Literals]
**Learning:** Next.js production builds in this environment are sensitive to escaped characters in template literals within TSX files. Escaping backticks or interpolation braces (e.g., `\${ticker}`) can trigger 'Expected unicode escape' syntax errors during the SWC/Webpack build process.
**Action:** Use raw template literals without unnecessary escapes. If a literal backtick is needed inside a template literal, consider using string concatenation or alternative quoting to maintain build compatibility.
