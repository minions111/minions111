## 2026-05-07 - Accessible Terminal Command Navigation
**Learning:** Institutional terminal interfaces rely heavily on keyboard efficiency. Combining W3C ARIA combobox patterns with "immediate-focus" ArrowDown navigation (where the first press reveals and highlights) significantly reduces friction for power users.
**Action:** Always implement `aria-activedescendant` and `aria-selected` alongside `onKeyDown` and `onMouseEnter` synchronization to provide a seamless hybrid (mouse/keyboard) discovery experience.
