import { NewsItem, MOCK_NEWS } from './constants';

const NEWS_API_BASE = 'https://newsapi.org/v2';
const FINNHUB_BASE = 'https://finnhub.io/api/v1';

export async function fetchTopHeadlines(): Promise<NewsItem[]> {
  const apiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;

  if (!apiKey) {
    console.warn('NEXT_PUBLIC_NEWS_API_KEY not found, returning mock data');
    return MOCK_NEWS;
  }

  try {
    const response = await fetch(`${NEWS_API_BASE}/top-headlines?category=business&apiKey=${apiKey}`);
    if (!response.ok) throw new Error('NewsAPI fetch failed');

    const data = await response.json();
    return data.articles.map((art: any, idx: number) => ({
      id: 100 + idx,
      time: new Date(art.publishedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
      headline: art.title.toUpperCase(),
      source: art.source.name.substring(0, 3).toUpperCase(),
      category: 'TOP',
      sentiment: 'neu',
    }));
  } catch (error) {
    console.error('Error fetching headlines:', error);
    return MOCK_NEWS;
  }
}

export async function fetchStockNews(symbol: string): Promise<NewsItem[]> {
  const finnhubKey = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

  if (!finnhubKey) {
    console.warn('NEXT_PUBLIC_FINNHUB_API_KEY not found, returning mock data');
    return MOCK_NEWS.filter(n => n.category === 'MARKETS');
  }

  try {
    const to = new Date().toISOString().split('T')[0];
    const from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    const response = await fetch(`${FINNHUB_BASE}/company-news?symbol=${symbol}&from=${from}&to=${to}&token=${finnhubKey}`);
    if (!response.ok) throw new Error('Finnhub fetch failed');

    const data = await response.json();
    return data.slice(0, 10).map((art: any, idx: number) => ({
      id: 200 + idx,
      time: new Date(art.datetime * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }),
      headline: art.headline.toUpperCase(),
      source: art.source.substring(0, 3).toUpperCase(),
      category: 'MARKETS',
      sentiment: 'neu',
    }));
  } catch (error) {
    console.error('Error fetching stock news:', error);
    return MOCK_NEWS.filter(n => n.category === 'MARKETS');
  }
}

export async function fetchHistoricalData(symbol: string, resolution: string = 'D') {
  const finnhubKey = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;
  if (!finnhubKey) return null;

  try {
    const to = Math.floor(Date.now() / 1000);
    const from = to - (365 * 24 * 60 * 60); // 1 year
    const response = await fetch(`${FINNHUB_BASE}/stock/candle?symbol=${symbol}&resolution=${resolution}&from=${from}&to=${to}&token=${finnhubKey}`);
    if (!response.ok) throw new Error('Historical data fetch failed');
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
  } catch (error) {
    console.error('Error fetching historical data:', error);
    return null;
  }
}

export async function fetchEconomicIndicators() {
  try {
    const response = await fetch('https://api.worldbank.org/v2/country/WLD/indicator/NY.GDP.MKTP.KD.ZG?format=json&per_page=1');
    if (!response.ok) throw new Error('World Bank API failed');
    const data = await response.json();
    return data[1][0];
  } catch (error) {
    console.error('World Bank fetch error:', error);
    return null;
  }
}
