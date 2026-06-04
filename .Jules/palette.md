## 2025-05-15 - [Auto-scroll & ARIA Labels]
**Learning:** In terminal simulations, users expect high-fidelity workstation behavior. Auto-scrolling the chat history ensures the newest trade information is immediately visible, reducing cognitive load. Additionally, icon-only buttons (like 'Send' or 'Close') require explicit ARIA labels for screen reader accessibility in minimalist UI designs.
**Action:** Always implement `useRef` + `useEffect` auto-scroll for streaming text components and verify all icon buttons have `aria-label` or `sr-only` descriptive text.
