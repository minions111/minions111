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
      sentiment: 'neu', // Default to neutral as Sentiment API usually requires separate key
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

/**
 * World Bank API - Indicators
 * No API key required for basic queries
 */
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
