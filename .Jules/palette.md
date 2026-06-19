## 2025-05-15 - [ARIA Combobox Pattern for Command Bar]
**Learning:** When implementing a command palette with suggestions, replacing the standard HTML `<form>` with a `div role="combobox"` and managing keyboard events (`ArrowUp`, `ArrowDown`, `Enter`) manually provides a more accessible experience for screen readers while maintaining "fingers on keys" terminal efficiency.
**Action:** Use the `role="combobox"`, `aria-expanded`, and `aria-activedescendant` pattern for any future workstation command interfaces.

## 2025-05-15 - [Template Literal Escaping in Next.js/SWC]
**Learning:** Unnecessary backslash escapes inside template literals (e.g., \${var}) can cause "Expected unicode escape" build errors in Next.js with the SWC compiler.
**Action:** Use standard template literals without unnecessary escapes, or switch to string concatenation for complex nested strings to ensure build stability.
