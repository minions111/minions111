## 2025-05-15 - [Accessibility] Label-Input Association in Form Components
**Learning:** Several form components in the workstation (e.g., OrderEntry) lacked proper 'htmlFor' and 'id' associations, making them difficult to use with screen readers and reducing the clickable area for focus.
**Action:** Always ensure 'htmlFor' on labels matches the 'id' on inputs. Audit remaining form components for similar patterns.
