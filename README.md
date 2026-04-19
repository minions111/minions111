# Bloomberg Terminal Pro - Absolute Sovereign Edition

An institutional-grade replication of the Bloomberg Terminal workstation, built with Next.js 15, React 19, and Tailwind CSS.

## 🚀 Overview

This project is a high-fidelity web simulation of the world's most powerful financial tool. It features a command-driven interface with over **275 functional mnemonics** covering Equities, Fixed Income, Derivatives, Macroeconomics, Crypto, and Intelligence.

### Key Features

- **Command Navigation:** Institutional-style command bar with **IntelliSense auto-suggestions** and persistent **Command History (CMD)**.
- **Real-Time Data:** `PriceSimulationEngine` (Finnhub WS/REST) and `NewsStreamingService` (NewsAPI/World Bank).
- **Multi-Terminal:** Independent workflow states across 4 virtual terminals (T1-T4).
- **Advanced Analytics:** Dynamic RSI, SMA, and Bollinger Bands with Wilder's smoothing logic.
- **Master Directory:** Searchable index (DIR) of all 230+ terminal functions.
- **Institutional Ecosystem:** Electronic Trading (EMSX), BloombergGPT AI, and Instant Bloomberg messaging.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** React 19, Tailwind CSS v3.4.19
- **Visuals:** Recharts, Framer Motion, Lucide Icons
- **State:** LocalStorage persistence, Singleton Service patterns

## 📖 Command Guide (Highlights)

- `FA`: Financial Analysis
- `CenB`: Central Bank Calendar
- `FXIP`: Currency Cross-Rate Matrix
- `SHTM`: Market-Wide Sector Heatmap
- `EVTS`: Earnings Transcript Search
- `PEOP`: People & Biographies
- `BPS`: Advanced Portfolio Attribution
- `SKEW`: Implied Volatility Skew Chart
- `TIC`: High-Frequency Tick Price Feed
- `FLOW`: Global Capital Flow Monitor
- `EMAP`: Interactive Economic Growth Map
- `JOIN`: Terminal Onboarding Tour

## 🚦 Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Create a `.env.local` file:
   ```
   NEXT_PUBLIC_FINNHUB_API_KEY=your_key
   NEXT_PUBLIC_NEWS_API_KEY=your_key
   ```

3. **Run Dev Server:**
   ```bash
   npm run dev
   ```

4. **Access Terminal:**
   Open `http://localhost:3000`. Use `F1` for HELP or `DIR` for the directory.

## ⚖️ License

Proprietary Simulation - For Educational & Research Purposes.
