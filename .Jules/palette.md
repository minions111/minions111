## 2025-05-14 - [Workstation Keyboard Navigation & ARIA Combobox]
**Learning:** The "fingers on keys" experience is a critical UX requirement for institutional terminal simulations. Users expect to navigate suggestions entirely via keyboard (Arrow keys + Enter) without reaching for the mouse. Implementing a WAI-ARIA compliant combobox pattern (role="combobox", aria-autocomplete="list", aria-activedescendant) is essential for both accessibility and the "pro" feel of the workstation.

**Action:** Always implement the full ARIA combobox pattern for command-entry interfaces. Ensure selection indices reset on input change and that the Enter key is explicitly handled for both list selection and form submission.

## 2025-05-14 - [Next.js 15 & ESLint 9 Flat Config Migration]
**Learning:** Moving to Next.js 15 with ESLint 9 Flat Config (`eslint.config.mjs`) requires using `FlatCompat` from `@eslint/eslintrc` to load legacy configs like `next/core-web-vitals`. Direct imports of these configs often result in "not iterable" or "module not found" errors during build/lint.

**Action:** Use `FlatCompat` to bridge legacy ESLint configurations in Next.js 15 projects. Ensure `@eslint/eslintrc` is added as a devDependency.
