## 2025-05-16 - [Keyboard Navigation and Accessibility in CommandBar]
**Learning:** High-fidelity terminal simulations require robust keyboard navigation (ArrowDown/ArrowUp/Escape) and W3C-compliant ARIA attributes (combobox/listbox/option) to ensure parity with professional workstations and accessibility for screen reader users.
**Action:** Always implement `aria-activedescendant` and `aria-expanded` in autocomplete components, and ensure `onMouseEnter` synchronizes state with keyboard selection for a seamless hybrid experience.

## 2025-05-16 - [ESM and ESLint 9 Flat Config Resolution]
**Learning:** In Next.js 15 with ESLint 9, `eslint-config-next` may have module resolution issues in ESM environments. Using `FlatCompat` from `@eslint/eslintrc` is necessary to bridge legacy configurations into the new Flat Config system.
**Action:** When setting up ESLint 9 in a Next.js project, use `FlatCompat` to load `next/core-web-vitals` and `next/typescript` to avoid 'Module Not Found' errors.
