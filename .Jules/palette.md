## 2026-06-07 - [Keyboard Navigation and ARIA for CommandBar]
**Learning:** For a "fingers-on-keys" institutional terminal experience, keyboard navigation for auto-suggestions is a critical efficiency win. Using the WAI-ARIA combobox pattern ensures these interactions are correctly announced by screen readers.
**Action:** Always implement `ArrowUp/Down` and `Enter` for search/command suggestions, and wrap the input/list in a `combobox` role with appropriate `aria-expanded` and `aria-controls` attributes.

## 2026-06-07 - [Hook Order and Hydration in Next.js 15]
**Learning:** Early returns for loading states (e.g., `if (!isLoaded) return ...`) can cause Hook order violations if hooks are defined after them, or hydration mismatches if state is used before it's properly initialized.
**Action:** Ensure all React hooks and state derivations are defined before any early returns. Use optional chaining and nullish coalescing to safely handle initial unhydrated states.
