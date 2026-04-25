## 2025-05-15 - Command Bar Accessibility and Hook Stability
**Learning:** In Next.js/React 19, useMemo and useCallback are critical for preventing child component re-renders that reset interactive state (like suggestion index). Also, ARIA combobox patterns require synchronized state between input attributes (activedescendant) and the listbox container.
**Action:** Always memoize arrays or functions passed as props to search components. Ensure all hooks are declared at the top of the component to avoid "order of hooks" errors that break production builds.
