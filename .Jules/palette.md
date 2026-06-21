## 2025-05-15 - [Institutional Keyboard Navigation & ARIA Combobox Pattern]
**Learning:** For terminal-style workstation simulations, the "fingers on keys" experience is paramount. A standard input with suggestions is insufficient; users expect ArrowDown/Up to cycle suggestions and Enter to commit. Implementing the WAI-ARIA combobox pattern (`role="combobox"`, `role="listbox"`, `aria-activedescendant`) is critical for ensuring screen readers correctly announce these non-standard interactions.
**Action:** Always implement full keyboard navigation (Arrow keys + Enter/Escape) for command-driven interfaces and use the WAI-ARIA combobox pattern to maintain accessibility parity with the institutional design.

## 2025-05-15 - [Next.js 15 SWC Template Literal Parsing Errors]
**Learning:** Next.js 15 (using SWC) can sometimes fail to parse template literals containing dollar signs and backticks when they are nested inside JSX curly braces, throwing "Expected unicode escape" errors. This often occurs in code-sample components.
**Action:** Replace complex template literals in JSX with standard string concatenation (e.g., `'string' + var`) to avoid compiler parsing ambiguities in Next.js 15.

## 2025-05-15 - [React 19 Hook Order & Loading States]
**Learning:** Using early returns for loading states (e.g., `if (!isLoaded) return <Loading />`) can lead to Hook order violations if hooks or state derivations are placed after the return. Additionally, it causes a jarring "blank-to-content" transition.
**Action:** Move all hooks to the top of the component and use conditional rendering within the JSX return to keep the "shell" (header/navigation) visible during loading, providing better visual feedback and avoiding hydration crashes.
