"use client";

import { useState, useEffect } from "react";
import { CommandBar } from "@/components/CommandBar";
import { MarketGrid } from "@/components/MarketGrid";
import { StockChart } from "@/components/StockChart";
import { NewsFeed } from "@/components/NewsFeed";
import { Clock } from "lucide-react";

export default function Home() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    setTime(new Date().toLocaleTimeString() + " NY");
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString() + " NY");
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex flex-col h-screen bg-black text-white font-mono overflow-hidden">
      {/* Top Header */}
      <div className="bg-[#1a1a1a] flex justify-between items-center px-4 py-1 border-b border-[#333] text-[10px] text-gray-400">
        <div className="flex gap-4">
          <span className="text-[#ffb900] font-bold">BLOOMBERG TERMINAL</span>
          <span>TERMINAL 1: MARKET MONITOR</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3" />
          <span>{time || "--:--:-- NY"}</span>
        </div>
      </div>

      {/* Command Bar */}
      <CommandBar />

      {/* Main Grid Layout */}
      <div className="flex-1 grid grid-cols-12 overflow-hidden">
        {/* Left Panel: Market Data */}
        <div className="col-span-3 h-full">
          <MarketGrid />
        </div>

        {/* Center Panel: Chart and News */}
        <div className="col-span-9 flex flex-col h-full border-l border-[#333]">
          <div className="flex-1 overflow-hidden">
            <StockChart />
          </div>
          <div className="h-1/3 min-h-[200px]">
            <NewsFeed />
          </div>
        </div>
      </div>

      {/* Footer / Status Bar */}
      <div className="bg-[#222] border-t border-[#333] p-1 px-4 text-[10px] flex justify-between text-gray-400">
        <div className="flex gap-4">
          <span className="text-[#00ff00]">CONN OK</span>
          <span>MSG 0</span>
          <span>ALRM 0</span>
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
