## 2025-05-14 - [CommandBar Accessibility & Navigation]
**Learning:** For terminal-style command inputs with auto-suggestions, keyboard navigation (Arrow keys + Enter/Escape) and standard ARIA roles (`combobox`, `listbox`, `option`) are critical for accessibility and power-user ergonomics. Using `aria-activedescendant` allows for seamless focus management without moving focus away from the input.
**Action:** Always implement `selectedIndex` state and `onKeyDown` handlers for suggestion lists. Use `aria-activedescendant` to link the input to the active suggestion.

## 2025-05-14 - [React Hook Order Violation in Next.js]
**Learning:** Early return patterns (e.g., `if (!isLoaded) return <Loading />`) can cause React Hook order violations if hooks are declared after them. This is especially prevalent in Next.js applications with hydration checks.
**Action:** Ensure all hooks are declared at the top of the component, before any conditional early returns. Use sensible defaults or safe navigation for state variables used in hooks.
