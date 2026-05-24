## 2025-05-15 - [Keyboard Navigation in Terminal UIs]
**Learning:** Terminal-style interfaces demand a 'fingers on keys' experience. Adding ARIA combobox patterns (listbox, option, activedescendant) not only improves accessibility but also provides the necessary infrastructure for robust keyboard navigation (ArrowUp/Down/Enter).
**Action:** Always implement full keyboard support and standard ARIA roles for command-entry components in simulation environments.

## 2025-05-15 - [Next.js 15 ESLint 9 Flat Config Migration]
**Learning:** Next.js 15 projects using `eslint.config.mjs` require `FlatCompat` from `@eslint/eslintrc` to correctly load `next/core-web-vitals` and `next/typescript`. Direct imports of legacy configs fail due to module resolution issues in ESM.
**Action:** Use `FlatCompat` and ensure `devDependencies` include `@eslint/eslintrc` when configuring ESLint for Next.js 15.
