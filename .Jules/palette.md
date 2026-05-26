## 2025-05-14 - [Keyboard Navigation & ARIA in Terminal Command Bar]
**Learning:** Institutional workstations like the Bloomberg Terminal rely heavily on "fingers-on-keys" efficiency. Adding keyboard navigation (Arrow keys + Enter) to the Command Bar is not just a convenience but a core UX requirement for high-velocity users.
**Action:** Always prioritize keyboard shortcuts and ARIA combobox patterns for search/command inputs in workstation-style interfaces.

## 2025-05-14 - [Next.js 15 & ESLint 9 Flat Config Compatibility]
**Learning:** Upgrading to Next.js 15 and ESLint 9 requires using `FlatCompat` and explicit `.js` extensions for module resolution in `eslint.config.mjs` to avoid import errors.
**Action:** Use the `FlatCompat` pattern when configuring ESLint 9 in Next.js projects to maintain compatibility with existing `eslint-config-next`.
