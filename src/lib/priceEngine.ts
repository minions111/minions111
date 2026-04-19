import { STOCKS } from './constants';

export interface PriceUpdate {
  ticker: string;
  price: number;
  change: number;
  pct: number;
  isRealTime: boolean;
}

export class PriceSimulationEngine {
  private static instance: PriceSimulationEngine;
  private prices: Record<string, number> = {};
  private initialPrices: Record<string, number> = {};
  private listeners: Set<(updates: Record<string, PriceUpdate>) => void> = new Set();
  private interval: NodeJS.Timeout | null = null;
  private socket: WebSocket | null = null;
  private apiKey: string | undefined;

  private constructor() {
    // Priority: LocalStorage (User entered) -> Environment Variable
    this.apiKey = (typeof window !== 'undefined' && localStorage.getItem('user_finnhub_key')) || process.env.NEXT_PUBLIC_FINNHUB_API_KEY || undefined;
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
    if (this.apiKey) {
      this.startRealTime();
    } else {
      this.startSimulation();
    }
  }

  private startRealTime() {
    if (this.socket) return;

    // Connect to Finnhub WebSocket for real-time trades
    this.socket = new WebSocket(`wss://ws.finnhub.io?token=${this.apiKey}`);

    this.socket.addEventListener('open', () => {
      STOCKS.forEach(stock => {
        this.socket?.send(JSON.stringify({ 'type': 'subscribe', 'symbol': stock.ticker }));
      });
    });

    this.socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'trade') {
        const updates: Record<string, PriceUpdate> = {};
        data.data.forEach((trade: any) => {
          const ticker = trade.s;
          const price = trade.p;

          if (this.initialPrices[ticker]) {
            const change = price - this.initialPrices[ticker];
            const pct = (change / this.initialPrices[ticker]) * 100;

            this.prices[ticker] = price;
            updates[ticker] = { ticker, price, change, pct, isRealTime: true };
          }
        });
        if (Object.keys(updates).length > 0) {
          this.listeners.forEach(listener => listener(updates));
        }
      }
    });

    this.socket.addEventListener('error', (err) => {
      console.error('WebSocket Error:', err);
      this.startSimulation();
    });
  }

  private startSimulation() {
    if (this.interval) return;
    this.interval = setInterval(() => {
      const updates: Record<string, PriceUpdate> = {};
      STOCKS.forEach(stock => {
        const currentPrice = this.prices[stock.ticker];
        const volatility = 0.0005;
        const change = currentPrice * (Math.random() * volatility * 2 - volatility);
        const newPrice = currentPrice + change;
        this.prices[stock.ticker] = newPrice;

        const totalChange = newPrice - this.initialPrices[stock.ticker];
        const totalPct = (totalChange / this.initialPrices[stock.ticker]) * 100;

        updates[stock.ticker] = {
          ticker: stock.ticker,
          price: newPrice,
          change: totalChange,
          pct: totalPct,
          isRealTime: false
        };
      });
      this.listeners.forEach(listener => listener(updates));
    }, 2000);
  }

  public stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    if (this.socket) {
      this.socket.close();
      this.socket = null;
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
