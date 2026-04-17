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

type ViewType = 'MARKET' | 'PORTFOLIO' | 'TRADE' | 'ECO' | 'DES' | 'WL' | 'ECON_NEWS';

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
    if (command === 'MARKET' || command === 'MKT') setView('MARKET');
    else if (command === 'PORTFOLIO' || command === 'PF') setView('PORTFOLIO');
    else if (command === 'TRADE' || command === 'TR') setView('TRADE');
    else if (command === 'ECO' || command === 'CAL') setView('ECO');
    else if (command === 'DES') setView('DES');
    else if (command === 'WL' || command === 'WATCH') setView('WL');
    else if (command === 'ECON' || command === 'EN') setView('ECON_NEWS');
    else if (command.length <= 5) {
      setSelectedTicker(command);
      if (view !== 'TRADE') setView('MARKET');
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
          {view === 'MARKET' && (
            <>
              <div className="flex-1 overflow-hidden">
                <StockChart ticker={selectedTicker} />
              </div>
              <div className="h-1/3 min-h-[200px]">
                <NewsFeed />
              </div>
            </>
          )}

          {view === 'PORTFOLIO' && (
            <div className="flex-1 overflow-hidden">
              <Portfolio />
            </div>
          )}

          {view === 'TRADE' && (
            <div className="flex-1 grid grid-cols-3 overflow-hidden">
              <div className="col-span-2">
                <StockChart ticker={selectedTicker} />
              </div>
              <div className="col-span-1 border-l border-[#333]">
                <OrderEntry />
              </div>
            </div>
          )}

          {view === 'ECO' && (
            <div className="flex-1 overflow-hidden">
              <EconomicCalendar />
            </div>
          )}

          {view === 'DES' && (
            <div className="flex-1 overflow-hidden">
              <SecurityDescription ticker={selectedTicker} />
            </div>
          )}

          {view === 'WL' && (
            <div className="flex-1 overflow-hidden">
              <Watchlist />
            </div>
          )}

          {view === 'ECON_NEWS' && (
            <div className="flex-1 overflow-hidden">
              <EconomicsNews />
            </div>
          )}
        </div>
      </div>

      {/* Footer / Status Bar */}
      <div className="bg-[#222] border-t border-[#333] p-1 px-4 text-[10px] flex justify-between text-gray-400">
        <div className="flex gap-4">
          <span className="text-[#00ff00]">CONN OK</span>
          <span className={view === 'PORTFOLIO' ? "text-[#ffb900]" : ""}>PF {view === 'PORTFOLIO' ? "ACTIVE" : ""}</span>
          <span className={view === 'TRADE' ? "text-[#ffb900]" : ""}>TR {view === 'TRADE' ? "ACTIVE" : ""}</span>
          <span className={view === 'ECO' ? "text-[#ffb900]" : ""}>ECO {view === 'ECO' ? "ACTIVE" : ""}</span>
          <span className={view === 'ECON_NEWS' ? "text-[#ffb900]" : ""}>ECON {view === 'ECON_NEWS' ? "ACTIVE" : ""}</span>
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
