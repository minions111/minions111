## 2025-05-15 - [Accessible Minimalist Inputs]
**Learning:** In high-density, terminal-style UIs where visual labels might be omitted for aesthetics (e.g., in `ConnectData.tsx`), using `sr-only` labels is essential to maintain accessibility without compromising the "pro" aesthetic.
**Action:** Always include a `<label className="sr-only">` for inputs that don't have a visible, associated label.

## 2025-05-15 - [React Hook Order in Hydrated Apps]
**Learning:** In Next.js apps with client-side state loading (like `isLoaded` checks), declaring derived state or additional hooks after an early return causes "Rendered more hooks than during the previous render" errors.
**Action:** Declare all hooks and derived variables (with sensible defaults) before any early return statements in the component body.
