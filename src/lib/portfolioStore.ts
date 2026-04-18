"use client";

export interface Position {
  ticker: string;
  shares: number;
  avgPrice: number;
  marketPrice: number;
  marketValue: number;
  profit: number;
  pct: number;
}

class PortfolioStore {
  private static instance: PortfolioStore;
  private positions: Record<string, Position> = {};
  private cash: number = 100000; // Start with $100k
  private listeners: Set<() => void> = new Set();

  private constructor() {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('user_portfolio');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          this.positions = parsed.positions;
          this.cash = parsed.cash;
        } catch (e) { console.error("Failed to load portfolio", e); }
      }
    }
  }

  public static getInstance(): PortfolioStore {
    if (!PortfolioStore.instance) {
      PortfolioStore.instance = new PortfolioStore();
    }
    return PortfolioStore.instance;
  }

  public subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach(l => l());
    if (typeof window !== 'undefined') {
      localStorage.setItem('user_portfolio', JSON.stringify({
        positions: this.positions,
        cash: this.cash
      }));
    }
  }

  public getCash() { return this.cash; }
  public getPositions() { return Object.values(this.positions); }

  public executeTrade(ticker: string, shares: number, price: number, side: 'BUY' | 'SELL') {
    const cost = shares * price;

    if (side === 'BUY') {
      if (cost > this.cash) return false;
      this.cash -= cost;

      if (this.positions[ticker]) {
        const totalShares = this.positions[ticker].shares + shares;
        const totalCost = (this.positions[ticker].avgPrice * this.positions[ticker].shares) + cost;
        this.positions[ticker].shares = totalShares;
        this.positions[ticker].avgPrice = totalCost / totalShares;
      } else {
        this.positions[ticker] = {
          ticker,
          shares,
          avgPrice: price,
          marketPrice: price,
          marketValue: cost,
          profit: 0,
          pct: 0
        };
      }
    } else {
      if (!this.positions[ticker] || this.positions[ticker].shares < shares) return false;
      this.cash += cost;
      this.positions[ticker].shares -= shares;
      if (this.positions[ticker].shares === 0) {
        delete this.positions[ticker];
      }
    }
    this.notify();
    return true;
  }

  public updateMarketPrices(prices: Record<string, number>) {
    let changed = false;
    Object.keys(this.positions).forEach(ticker => {
      if (prices[ticker]) {
        const p = this.positions[ticker];
        p.marketPrice = prices[ticker];
        p.marketValue = p.shares * p.marketPrice;
        p.profit = p.marketValue - (p.shares * p.avgPrice);
        p.pct = (p.profit / (p.shares * p.avgPrice)) * 100;
        changed = true;
      }
    });
    if (changed) this.notify();
  }
}

export default PortfolioStore;
