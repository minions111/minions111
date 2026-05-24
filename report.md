# Security Review Report: Bloomberg Terminal Simulation

**Date:** May 24, 2024
**Scope:** Read-only security audit of the repository including frontend (Next.js) and backend (FastAPI).

---

## 1. Executive Summary
The Bloomberg Terminal Simulation is a high-fidelity workstation mockup. While visually impressive, it lacks basic production security controls. The most critical findings involve the storage of third-party API keys in plaintext within the browser's `localStorage` and a highly permissive CORS policy on the Python data bridge.

---

## 2. Detailed Findings

### 2.1 Authentication & Session Management
*   **Simulated Authentication:** The `BloombergAnywhere` component (`src/components/BloombergAnywhere.tsx`) implements a "B-Unit" login simulation. This is a purely frontend state toggle and does not perform any backend verification.
*   **Plaintext Terminal State:** Active terminal views and ticker selections are stored in `localStorage` under the key `terminal_state`. This allows for state persistence but is vulnerable to local tampering.

### 2.2 Authorization
*   **Missing Access Controls:** There is no server-side authorization layer. All API endpoints in the Python backend are open to any requester.
*   **Permissive CORS Policy:** In `backend/main.py`, the `CORSMiddleware` is configured with `allow_origins=["*"]`. This allows any origin to interact with the API, which could be exploited if the bridge is exposed to the internet.

### 2.3 Exposed Secrets & Key Management
*   **LocalStorage Key Storage:** The `ConnectData` module (`src/components/ConnectData.tsx`) saves Finnhub and NewsAPI keys directly to `localStorage` in plaintext. This makes them easily accessible to any malicious script executing in the same origin (XSS).
*   **Client-Side Environment Variables:** The application references `process.env.NEXT_PUBLIC_FINNHUB_API_KEY`. In Next.js, `NEXT_PUBLIC_` variables are baked into the client-side bundle and are visible to any user.

### 2.4 Insecure API Routes
*   **Unauthenticated Data Bridge:** The FastAPI backend provides data from `yfinance` without any authentication or rate limiting.
*   **Direct Parameter Passing:** Ticker symbols are passed from URL parameters directly to the `yfinance` library. While not a classic SQL injection, this lack of sanitization could lead to unexpected behavior in the underlying data library.

### 2.5 SSRF & XSS Risks
*   **XSS Protection:** The project uses React 19, which provides robust default protection against XSS. A search for `dangerouslySetInnerHTML` and `eval()` returned no results.
*   **SSRF Vector:** The backend `get_quote` and `get_history` endpoints fetch external data based on user-supplied strings. While restricted by the `yfinance` library, this remains a theoretical SSRF vector if the library can be coerced into making internal network requests.

---

## 3. Risk Assessment

| Category | Risk Level | Impact |
| :--- | :--- | :--- |
| **Secrets Management** | **Critical** | Third-party API keys can be stolen via XSS or physical access. |
| **Network Security** | **High** | Permissive CORS allows unauthorized cross-origin requests. |
| **Authentication** | **Medium** | Simulated auth gives a false sense of security to users. |

---

## 4. Recommendations

1.  **Proxy API Requests:** Move all third-party API calls (Finnhub, NewsAPI) to the backend. Store API keys as server-side environment variables and never expose them to the frontend.
2.  **Restrict CORS:** Update `backend/main.py` to allow only the specific origin of the frontend application.
3.  **Validate Inputs:** Implement strict regex validation for ticker symbols on both the frontend and backend to prevent unexpected input.
4.  **Encrypt Local Storage:** If sensitive state must be kept on the client, use a library to encrypt the values, though moving sensitive logic to the server is preferred.
5.  **Secure Headers:** Implement security headers (CSP, HSTS) in the Next.js configuration to mitigate XSS and clickjacking risks.

---
*End of Report*
