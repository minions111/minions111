## 2025-05-14 - [CommandBar Accessibility and Keyboard Navigation]
**Learning:** Implementing the W3C `combobox` pattern with `aria-activedescendant` requires a unique ID for each suggestion and precise synchronization of the `selectedIndex` state across keyboard and mouse interactions.
**Action:** Use `role="combobox"`, `role="listbox"`, and `role="option"` with `aria-activedescendant` and `onMouseEnter` to ensure a seamless, accessible autocomplete experience.

## 2025-05-14 - [React Hook Order and Early Returns]
**Learning:** Next.js and React 19 strictly enforce hook ordering. Defining state or effects after a conditional return (even for a loading screen) causes hydration and runtime errors.
**Action:** Always define hooks and derived state variables before any early return statements, using sensible defaults if necessary.

## 2025-05-14 - [Next.js Template Literal Escaping]
**Learning:** Escaping backticks or interpolation braces in template literals within TSX files can cause 'Expected unicode escape' errors during the Next.js production build process.
**Action:** Use standard template literal syntax without unnecessary escapes when working with Next.js/SWC.
