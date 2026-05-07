
## 2026-05-07 - [Template Literals & Hook Order]
**Learning:** Next.js production builds fail if template literals contain unnecessary backslash escapes for backticks or dollar-braces (interpreted as invalid unicode). Also, React 19/Next.js 15 strictly enforces hook order; declaring hooks after an early return (e.g., loading state) causes runtime crashes and build failures.
**Action:** Always verify builds with 'pnpm build' and ensure all hooks precede any conditional returns in functional components.
