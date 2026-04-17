"use client";

import { useState, useEffect } from "react";
import { CommandBar } from "@/components/CommandBar";
import { MarketGrid } from "@/components/MarketGrid";
import { StockChart } from "@/components/StockChart";
import { NewsFeed } from "@/components/NewsFeed";
import { Portfolio } from "@/components/Portfolio";
import { OrderEntry } from "@/components/OrderEntry";
import { EconomicCalendar } from "@/components/EconomicCalendar";
import { SecurityDescription } from "@/components/SecurityDescription";
import { Watchlist } from "@/components/Watchlist";
import { EconomicsNews } from "@/components/EconomicsNews";
import { Clock } from "lucide-react";

// New modules to be created
import { FinancialAnalysis } from "@/components/FinancialAnalysis";
import { AnalystRecommendations } from "@/components/AnalystRecommendations";
import { MoneyMarketMonitor } from "@/components/MoneyMarketMonitor";
import { CurrencyMonitor } from "@/components/CurrencyMonitor";
import { BloombergIntelligence } from "@/components/BloombergIntelligence";
import { InstantBloomberg } from "@/components/InstantBloomberg";
import { WorldEquityIndices } from "@/components/WorldEquityIndices";
import { MostActive } from "@/components/MostActive";
import { EarningsEstimates } from "@/components/EarningsEstimates";
import { HoldingsOwnership } from "@/components/HoldingsOwnership";
import { DividendHistory } from "@/components/DividendHistory";
import { OptionMonitor } from "@/components/OptionMonitor";
import { QuoteRecap } from "@/components/QuoteRecap";
import { CompanyNews } from "@/components/CompanyNews";
import { TechnicalIndicators } from "@/components/TechnicalIndicators";

type ViewType =
  | 'MARKET'
  | 'PORTFOLIO'
  | 'TRADE'
  | 'ECO'
  | 'DES'
  | 'WL'
  | 'ECON_NEWS'
  | 'FA'
  | 'ANR'
  | 'BTMM'
  | 'WFX'
  | 'BI'
  | 'IB'
  | 'WEI'
  | 'MOST'
  | 'EE'
  | 'HDS'
  | 'DVD'
  | 'OMON'
  | 'QR'
  | 'CN'
  | 'TECH';

const COMMAND_MAP: Record<string, ViewType> = {
  'MARKET': 'MARKET',
  'MKT': 'MARKET',
  'TOP': 'MARKET',
  'PORTFOLIO': 'PORTFOLIO',
  'PF': 'PORTFOLIO',
  'TRADE': 'TRADE',
  'TR': 'TRADE',
  'ECO': 'ECO',
  'CAL': 'ECO',
  'DES': 'DES',
  'WL': 'WL',
  'WATCH': 'WL',
  'ECON': 'ECON_NEWS',
  'EN': 'ECON_NEWS',
  'FA': 'FA',
  'ANR': 'ANR',
  'BTMM': 'BTMM',
  'WFX': 'WFX',
  'BI': 'BI',
  'IB': 'IB',
  'WEI': 'WEI',
  'MOST': 'MOST',
  'MOVERS': 'MOST',
  'EE': 'EE',
  'HDS': 'HDS',
  'DVD': 'DVD',
  'OMON': 'OMON',
  'QR': 'QR',
  'CN': 'CN',
  'TECH': 'TECH',
};

export default function Home() {
  const [time, setTime] = useState<string | null>(null);
  const [view, setView] = useState<ViewType>('MARKET');
  const [selectedTicker, setSelectedTicker] = useState('AAPL');

  useEffect(() => {
    setTime(new Date().toLocaleTimeString() + " NY");
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString() + " NY");
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCommand = (cmd: string) => {
    const command = cmd.toUpperCase();

    if (COMMAND_MAP[command]) {
      setView(COMMAND_MAP[command]);
    } else if (command.length <= 5 && /^[A-Z0-9]+$/.test(command)) {
      setSelectedTicker(command);
      // If we are in a stock-specific view, stay there. Otherwise go to Market/Chart
      const stockSpecificViews: ViewType[] = ['DES', 'FA', 'ANR', 'TRADE', 'EE', 'HDS', 'DVD', 'OMON', 'QR', 'CN', 'TECH'];
      if (!stockSpecificViews.includes(view)) {
        setView('MARKET');
      }
    }
  };

  const renderView = () => {
    switch (view) {
      case 'MARKET':
        return (
          <>
            <div className="flex-1 overflow-hidden">
              <StockChart ticker={selectedTicker} />
            </div>
            <div className="h-1/3 min-h-[200px]">
              <NewsFeed />
            </div>
          </>
        );
      case 'PORTFOLIO':
        return <Portfolio />;
      case 'TRADE':
        return (
          <div className="flex-1 grid grid-cols-3 overflow-hidden">
            <div className="col-span-2">
              <StockChart ticker={selectedTicker} />
            </div>
            <div className="col-span-1 border-l border-[#333]">
              <OrderEntry />
            </div>
          </div>
        );
      case 'ECO':
        return <EconomicCalendar />;
      case 'DES':
        return <SecurityDescription ticker={selectedTicker} />;
      case 'WL':
        return <Watchlist />;
      case 'ECON_NEWS':
        return <EconomicsNews />;
      case 'FA':
        return <FinancialAnalysis ticker={selectedTicker} />;
      case 'ANR':
        return <AnalystRecommendations ticker={selectedTicker} />;
      case 'BTMM':
        return <MoneyMarketMonitor />;
      case 'WFX':
        return <CurrencyMonitor />;
      case 'BI':
        return <BloombergIntelligence />;
      case 'IB':
        return <InstantBloomberg />;
      case 'WEI':
        return <WorldEquityIndices />;
      case 'MOST':
        return <MostActive />;
      case 'EE':
        return <EarningsEstimates ticker={selectedTicker} />;
      case 'HDS':
        return <HoldingsOwnership ticker={selectedTicker} />;
      case 'DVD':
        return <DividendHistory ticker={selectedTicker} />;
      case 'OMON':
        return <OptionMonitor ticker={selectedTicker} />;
      case 'QR':
        return <QuoteRecap ticker={selectedTicker} />;
      case 'CN':
        return <CompanyNews ticker={selectedTicker} />;
      case 'TECH':
        return <TechnicalIndicators ticker={selectedTicker} />;
      default:
        return <div className="p-4 text-red-500 font-bold uppercase">Function Not Found</div>;
    }
  };

  return (
    <main className="flex flex-col h-screen bg-black text-white font-mono overflow-hidden">
      {/* Top Header */}
      <div className="bg-[#1a1a1a] flex justify-between items-center px-4 py-1 border-b border-[#333] text-[10px] text-gray-400">
        <div className="flex gap-4">
          <span className="text-[#ffb900] font-bold">BLOOMBERG TERMINAL</span>
          <span className="uppercase">TERMINAL 1: {view} MONITOR</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3" />
          <span>{time || "--:--:-- NY"}</span>
        </div>
      </div>

      {/* Command Bar */}
      <CommandBar onCommand={handleCommand} />

      {/* Main Grid Layout */}
      <div className="flex-1 grid grid-cols-12 overflow-hidden">
        {/* Left Panel: Market Data */}
        <div className="col-span-3 h-full border-r border-[#333]">
          <MarketGrid />
        </div>

        {/* Center/Right Panel: Dynamic View */}
        <div className="col-span-9 flex flex-col h-full overflow-hidden">
          {renderView()}
        </div>
      </div>

      {/* Footer / Status Bar */}
      <div className="bg-[#222] border-t border-[#333] p-1 px-4 text-[10px] flex justify-between text-gray-400">
        <div className="flex gap-4">
          <span className="text-[#00ff00]">CONN OK</span>
          <span className={view === 'PORTFOLIO' ? "text-[#ffb900]" : ""}>PF</span>
          <span className={view === 'TRADE' ? "text-[#ffb900]" : ""}>TR</span>
          <span className={view === 'ECO' ? "text-[#ffb900]" : ""}>ECO</span>
          <span className={view === 'ECON_NEWS' ? "text-[#ffb900]" : ""}>ECON</span>
          <span className={view === 'FA' ? "text-[#ffb900]" : ""}>FA</span>
          <span className={view === 'BTMM' ? "text-[#ffb900]" : ""}>BTMM</span>
        </div>
        <div className="flex gap-4">
          <span>S&P 500: 5,026.61 <span className="text-[#00ff00]">+0.58%</span></span>
          <span>DOW: 38,627.99 <span className="text-[#ff0000]">-0.14%</span></span>
          <span>NASDAQ: 15,990.66 <span className="text-[#00ff00]">+1.25%</span></span>
        </div>
      </div>
    </main>
  );
}
