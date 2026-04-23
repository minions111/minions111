## 2025-05-22 - [Keyboard Navigation & ARIA in Terminal-Style Interfaces]
**Learning:** Terminal-style applications, despite being command-driven, benefit immensely from modern web patterns like IntelliSense-style keyboard navigation (ArrowDown/Up, Enter, Escape). These interactions must be paired with ARIA roles (combobox, listbox, option) to ensure they are discoverable and usable by screen reader users, who otherwise might perceive the "suggestions" as floating, disconnected text.
**Action:** When implementing auto-suggestions, always ensure `aria-activedescendant` and `aria-selected` are synchronized with the keyboard-highlighted index.

## 2025-05-22 - [Production Build vs Dev Server with Template Literals]
**Learning:** Some production compilers (like the one used in Next.js/Webpack for this project) are extremely sensitive to escaped backticks or dollar signs in template literals, even if they seem valid in standard JavaScript. Escaping ` ${ ` as ` \${ ` or similar can lead to "Expected unicode escape" syntax errors during the build phase that don't always appear in development.
**Action:** Use raw template literals or string concatenation if the compiler chokes on escapes.
