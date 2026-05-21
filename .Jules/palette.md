## 2025-05-14 - [CommandBar Accessibility and Keyboard Navigation]
**Learning:** For terminal-like interfaces, keyboard navigation is not just a "nice to have" but a core part of the mental model. Users expect Arrow keys and Enter to work intuitively with command suggestions. Additionally, providing ARIA attributes like `combobox` and `aria-activedescendant` ensures that this interaction is transparent to screen readers.
**Action:** Always implement `selectedIndex` state and `onKeyDown` handlers for components that provide suggestions or completions.

## 2025-05-14 - [React Hook Order and Next.js 15 Build Integrity]
**Learning:** Early returns in Next.js 15 components must be placed AFTER all hook declarations to avoid React Error #310. Build-time linting is strict and requires addressing high-volume legacy errors or explicitly suppressing them in `eslint.config.mjs` to maintain CI/CD pipelines.
**Action:** Define derived state before early returns and use `FlatCompat` in ESLint 9 to resolve `eslint-config-next` correctly.
