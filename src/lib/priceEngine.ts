import { STOCKS } from './constants';

export interface PriceUpdate {
  ticker: string;
  price: number;
  change: number;
  pct: number;
}

export class PriceSimulationEngine {
  private static instance: PriceSimulationEngine;
  private prices: Record<string, number> = {};
  private initialPrices: Record<string, number> = {};
  private listeners: Set<(updates: Record<string, PriceUpdate>) => void> = new Set();
  private interval: NodeJS.Timeout | null = null;

  private constructor() {
    STOCKS.forEach(stock => {
      this.prices[stock.ticker] = stock.price;
      this.initialPrices[stock.ticker] = stock.price;
    });
  }

  public static getInstance(): PriceSimulationEngine {
    if (!PriceSimulationEngine.instance) {
      PriceSimulationEngine.instance = new PriceSimulationEngine();
    }
    return PriceSimulationEngine.instance;
  }

  public start() {
    if (this.interval) return;
    this.interval = setInterval(() => {
      const updates: Record<string, PriceUpdate> = {};
      STOCKS.forEach(stock => {
        const currentPrice = this.prices[stock.ticker];
        const volatility = 0.001; // 0.1% max move per tick
        const change = currentPrice * (Math.random() * volatility * 2 - volatility);
        const newPrice = currentPrice + change;
        this.prices[stock.ticker] = newPrice;

        const totalChange = newPrice - this.initialPrices[stock.ticker];
        const totalPct = (totalChange / this.initialPrices[stock.ticker]) * 100;

        updates[stock.ticker] = {
          ticker: stock.ticker,
          price: newPrice,
          change: totalChange,
          pct: totalPct
        };
      });
      this.listeners.forEach(listener => listener(updates));
    }, 2000); // Update every 2 seconds
  }

  public stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  public subscribe(listener: (updates: Record<string, PriceUpdate>) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  public getPrice(ticker: string): number {
    return this.prices[ticker] || 0;
  }
}
