## 2025-05-15 - [CommandBar Accessibility and Build Integrity]
**Learning:** In terminal-style interfaces, keyboard navigation for command suggestions is a critical UX expectation ("fingers on keys"). Additionally, when working with Next.js 15, build integrity often requires addressing legacy lint errors or fixing template literal syntax errors that break production builds.
**Action:** Always implement W3C ARIA combobox patterns for suggestion lists and ensure production builds pass by fixing build-breaking syntax or adjusting ESLint 9 Flat Config.
