## 2025-05-06 - [CommandBar Keyboard Navigation & Accessibility]
**Learning:** Implementing a full combobox pattern in the Terminal's CommandBar significantly improves the "pro workstation" feel. Keyboard navigation (Arrow keys + Enter) should always be synchronized with mouse hover (onMouseEnter) to prevent "focus jumps" when switching input methods.
**Action:** Use `role="combobox"` and `aria-activedescendant` for all intelligent search inputs. Ensure `selectedIndex` is reset on input change but preserved during navigation.

## 2025-05-06 - [React Hook Ordering in Next.js 15]
**Learning:** Next.js 15/React 19 strictly enforces hook ordering. Placing an early return (e.g., for a loading splash screen) *before* hook declarations or before using hooks that depend on state initialized by previous hooks will cause minified React error #310.
**Action:** Always declare all hooks at the top of the component, and define derived state variables after early returns if they depend on state that might be uninitialized during the loading phase.

## 2025-05-06 - [Next.js Template Literal Escaping]
**Learning:** Next.js production build (SWC/Webpack) fails with "Expected unicode escape" if backticks or `${}` are escaped with backslashes inside TSX files, even if intended for code blocks.
**Action:** Avoid backslash escaping for backticks in template literals within components; use standard template literal syntax or string concatenation if necessary.
