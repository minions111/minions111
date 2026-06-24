## 2025-05-15 - [Institutional Terminal-Style Combobox Pattern]
**Learning:** The Bloomberg Terminal simulation requires a "fingers on keys" experience. Standard HTML forms are often replaced by ARIA-compliant `div` containers with `role="combobox"` to support custom keyboard navigation (ArrowUp/Down for suggestions) while maintaining accessibility.
**Action:** Use the WAI-ARIA combobox pattern with `aria-activedescendant` for all command-entry interfaces to ensure they are screen-reader friendly and highly efficient for power users.

## 2025-05-15 - [Resolving SWC Unicode Escape Errors]
**Learning:** The SWC compiler used in Next.js 15 can fail with "Expected unicode escape" when backticks or dollar signs are escaped inside template literals in `.tsx` files, especially within JSX curly braces.
**Action:** Use standard backticks without unnecessary backslashes, or switch to string concatenation for complex code samples inside template literals to ensure build stability.
