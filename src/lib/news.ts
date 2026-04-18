import { NewsItem, MOCK_NEWS } from './constants';

const NEWS_API_BASE = 'https://newsapi.org/v2';
const FINNHUB_BASE = 'https://finnhub.io/api/v1';

class NewsStreamingService {
  private static instance: NewsStreamingService;
  private listeners: Set<(news: NewsItem[]) => void> = new Set();
  private cache: NewsItem[] = [];
  private interval: NodeJS.Timeout | null = null;

  private constructor() {
    this.cache = [...MOCK_NEWS];
  }

  public static getInstance(): NewsStreamingService {
    if (!NewsStreamingService.instance) {
      NewsStreamingService.instance = new NewsStreamingService();
    }
    return NewsStreamingService.instance;
  }

  public start() {
    if (this.interval) return;
    this.fetchLatest();
    // High-frequency polling (every 10 seconds for "Terminal" feel, adjustable)
    this.interval = setInterval(() => this.fetchLatest(), 10000);
  }

  private async fetchLatest() {
    const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    const finnhubKey = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

    let newHeadlines: NewsItem[] = [];

    // 1. Try Finnhub for Market specific news (often faster)
    if (finnhubKey) {
      try {
        const resp = await fetch(`${FINNHUB_BASE}/news?category=general&token=${finnhubKey}`);
        const data = await resp.json();
        if (Array.isArray(data)) {
          newHeadlines = data.slice(0, 10).map((art: any, idx: number) => ({
            id: art.id || Date.now() + idx,
            time: new Date(art.datetime * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            headline: art.headline.toUpperCase(),
            source: art.source.substring(0, 3).toUpperCase(),
            category: 'MARKETS',
            sentiment: 'neu'
          }));
        }
      } catch (e) { console.error("Finnhub news error", e); }
    }

    // 2. Try NewsAPI for broad headlines
    if (apiKey && newHeadlines.length < 5) {
      try {
        const resp = await fetch(`${NEWS_API_BASE}/top-headlines?category=business&apiKey=${apiKey}`);
        const data = await resp.json();
        if (data.articles) {
          const mapped = data.articles.map((art: any, idx: number) => ({
            id: art.url || Date.now() + idx + 100,
            time: new Date(art.publishedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
            headline: art.title.toUpperCase(),
            source: art.source.name.substring(0, 3).toUpperCase(),
            category: 'TOP',
            sentiment: 'neu'
          }));
          newHeadlines = [...newHeadlines, ...mapped];
        }
      } catch (e) { console.error("NewsAPI error", e); }
    }

    if (newHeadlines.length > 0) {
      // Merge and remove duplicates by ID
      const merged = [...newHeadlines, ...this.cache];
      const unique = Array.from(new Map(merged.map(item => [item.id, item])).values())
        .sort((a, b) => b.id > a.id ? 1 : -1) // Crude temporal sort
        .slice(0, 50);

      this.cache = unique;
      this.notify();
    }
  }

  public subscribe(listener: (news: NewsItem[]) => void) {
    this.listeners.add(listener);
    listener(this.cache);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach(l => l(this.cache));
  }

  public getCache() { return this.cache; }
}

export default NewsStreamingService;

// Backward compatibility or simple hooks
export async function fetchTopHeadlines() {
  return NewsStreamingService.getInstance().getCache();
}

export async function fetchStockNews(symbol: string): Promise<NewsItem[]> {
  const finnhubKey = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
  if (!finnhubKey) return MOCK_NEWS.filter(n => n.category === 'MARKETS');

  try {
    const to = new Date().toISOString().split('T')[0];
    const from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    const response = await fetch(`${FINNHUB_BASE}/company-news?symbol=${symbol}&from=${from}&to=${to}&token=${finnhubKey}`);
    const data = await response.json();
    return data.slice(0, 10).map((art: any, idx: number) => ({
      id: art.id,
      time: new Date(art.datetime * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
      headline: art.headline.toUpperCase(),
      source: art.source.substring(0, 3).toUpperCase(),
      category: 'MARKETS',
      sentiment: 'neu',
    }));
  } catch (error) {
    return MOCK_NEWS.filter(n => n.category === 'MARKETS');
  }
}

export async function fetchHistoricalData(symbol: string, resolution: string = 'D') {
  const finnhubKey = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
  if (!finnhubKey) return null;
  try {
    const to = Math.floor(Date.now() / 1000);
    const from = to - (365 * 24 * 60 * 60);
    const response = await fetch(`${FINNHUB_BASE}/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${finnhubKey}`);
    const data = await response.json();
    if (data.s !== 'ok') return null;
    return data.t.map((time: number, i: number) => ({
      time: new Date(time * 1000).toISOString().split('T')[0],
      price: data.c[i],
      open: data.o[i],
      high: data.h[i],
      low: data.l[i],
      volume: data.v[i]
    }));
  } catch (error) { return null; }
}

export async function fetchEconomicIndicators() {
  try {
    const response = await fetch('https://api.worldbank.org/v2/country/WLD/indicator/NY.GDP.MKTP.KD.ZG?format=json&per_page=1');
    const data = await response.json();
    return data[1][0];
  } catch (error) { return null; }
}
