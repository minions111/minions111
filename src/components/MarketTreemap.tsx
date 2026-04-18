"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export const MarketTreemap = () => {
  const groups = [
    { name: "Mag 7", perf: "+2.4%", color: "bg-green-600", width: "w-full", height: "h-32", items: ["AAPL", "MSFT", "NVDA", "AMZN", "GOOGL", "META", "TSLA"] },
    { name: "Semi", perf: "+3.8%", color: "bg-green-400", width: "w-2/3", height: "h-24", items: ["ARM", "AVGO", "AMD", "INTC"] },
    { name: "Bank", perf: "-0.5%", color: "bg-red-900/40", width: "w-1/3", height: "h-24", items: ["JPM", "GS", "MS"] },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>MMAP - MARKET PERFORMANCE TREEMAP</span>
        <span>INDEX: S&P 500</span>
      </div>

      <div className="flex flex-wrap gap-2 flex-1">
        {groups.map((g, i) => (
          <div key={i} className={cn("border border-white/10 p-3 flex flex-col justify-between hover:border-[#ffb900] cursor-pointer transition-all", g.width, g.height, g.color)}>
            <div className="flex justify-between items-center">
              <span className="text-white font-bold uppercase">{g.name}</span>
              <span className="text-white font-bold">{g.perf}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {g.items.map(ticker => (
                <span key={ticker} className="bg-black/30 px-1 text-[8px] border border-white/5">{ticker}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
