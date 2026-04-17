export const COLORS = {
  bg: "#000000",
  amber: "#ffb900", // Classic Bloomberg Amber
  green: "#00ff00",
  red: "#ff0000",
  blue: "#0000ff",
  gray: "#333333",
  white: "#ffffff",
};

export const STOCKS = [
  { ticker: "AAPL", name: "Apple Inc.", price: 185.92, change: +1.24, pct: +0.67 },
  { ticker: "MSFT", name: "Microsoft Corp.", price: 415.10, change: -2.45, pct: -0.59 },
  { ticker: "GOOGL", name: "Alphabet Inc.", price: 147.60, change: +0.85, pct: +0.58 },
  { ticker: "AMZN", name: "Amazon.com Inc.", price: 178.22, change: +3.12, pct: +1.78 },
  { ticker: "TSLA", name: "Tesla, Inc.", price: 193.57, change: -5.40, pct: -2.71 },
  { ticker: "META", name: "Meta Platforms", price: 484.03, change: +12.50, pct: +2.65 },
  { ticker: "NVDA", name: "NVIDIA Corp", price: 726.13, change: +15.20, pct: +2.14 },
];

export interface NewsItem {
  id: number;
  time: string;
  headline: string;
  source: string;
  category: string;
  sentiment: 'pos' | 'neg' | 'neu';
}

export const MOCK_NEWS: NewsItem[] = [
  { id: 1, time: "14:20", headline: "FED'S POWELL SAYS INFLATION PROGRESS NOT ASSURED", source: "BN", category: "ECON", sentiment: "neg" },
  { id: 2, time: "14:15", headline: "ECB TO KEEP RATES STEADY AS PRICE PRESSURES LINGER", source: "BBG", category: "ECON", sentiment: "neu" },
  { id: 3, time: "14:02", headline: "OIL RISES AS MIDDLE EAST TENSIONS OFFSET SUPPLY DATA", source: "REU", category: "MARKETS", sentiment: "pos" },
  { id: 4, time: "13:55", headline: "APPLE EXPLORES RENEWABLE ENERGY PARTNERSHIP IN ASIA", source: "BN", category: "TECH", sentiment: "pos" },
  { id: 5, time: "13:40", headline: "S&P 500 HITS NEW RECORD HIGH ON TECH RALLY", source: "BN", category: "TOP", sentiment: "pos" },
  { id: 6, time: "13:30", headline: "JPMORGAN FORECASTS MODEST GROWTH IN Q3", source: "BBG", category: "MARKETS", sentiment: "neu" },
  { id: 7, time: "13:15", headline: "CHINA MANUFACTURING DATA MISSES ESTIMATES", source: "REU", category: "ECON", sentiment: "neg" },
];

export const MOCK_CHART_DATA = [
  { time: "09:30", price: 184.50 },
  { time: "10:00", price: 185.10 },
  { time: "10:30", price: 184.80 },
  { time: "11:00", price: 185.40 },
  { time: "11:30", price: 186.20 },
  { time: "12:00", price: 185.90 },
  { time: "12:30", price: 185.50 },
  { time: "13:00", price: 185.70 },
  { time: "13:30", price: 186.10 },
  { time: "14:00", price: 185.92 },
];
