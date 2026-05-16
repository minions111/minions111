## 2026-05-16 - [Fixing React Hook Order and Build Blockers]
**Learning:** In Next.js/React components, derived state variables (e.g., view, selectedTicker) must be defined before any early return checks (like loading states) if they are used by hooks that are declared before that return. This prevents React Hook order violations (Error #310). Additionally, unescaped characters in template literals inside TSX can block Next.js production builds.
**Action:** Always ensure derived state is computed safely with sensible defaults before early returns, and double-check template literals for unnecessary backtick/interpolation escapes.

## 2026-05-16 - [ESLint 9 Flat Config with Next.js 15]
**Learning:** Next.js 15 uses ESLint 9 which requires Flat Config. To use traditional `next/core-web-vitals` or `next/typescript` configs, they must be wrapped with `FlatCompat` from `@eslint/eslintrc`.
**Action:** Use `FlatCompat` in `eslint.config.mjs` and ensure `@eslint/eslintrc` is in `devDependencies`.
