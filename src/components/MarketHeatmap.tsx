"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export const MarketHeatmap = () => {
  const sectors = [
    { name: "Tech", perf: "+2.14%", stocks: ["AAPL", "MSFT", "NVDA", "ARM", "GOOGL"], color: "bg-green-600/80" },
    { name: "Finance", perf: "+0.85%", stocks: ["JPM", "BAC", "GS", "MS", "WFC"], color: "bg-green-900/40" },
    { name: "Energy", perf: "-1.24%", stocks: ["XOM", "CVX", "COP", "SLB", "EOG"], color: "bg-red-900/40" },
    { name: "Health", perf: "+0.12%", stocks: ["UNH", "JNJ", "LLY", "ABBV", "PFE"], color: "bg-gray-800" },
    { name: "Retail", perf: "+1.78%", stocks: ["AMZN", "WMT", "HD", "TGT", "COST"], color: "bg-green-700/60" },
    { name: "Auto", perf: "-2.71%", stocks: ["TSLA", "TM", "F", "GM", "RIVN"], color: "bg-red-600/80" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>HEAT - S&P 500 SECTOR HEATMAP</span>
        <span>NY 21:12:05</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-1">
        {sectors.map((s, i) => (
          <div key={i} className={cn("border border-[#222] p-4 flex flex-col hover:border-[#ffb900] transition-colors cursor-pointer", s.color)}>
            <div className="flex justify-between items-center mb-4">
              <span className="text-white font-bold uppercase text-base">{s.name}</span>
              <span className="text-white font-bold">{s.perf}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {s.stocks.map(ticker => (
                <span key={ticker} className="bg-black/40 px-2 py-0.5 text-[9px] font-bold border border-white/10">{ticker}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-8 border-t border-[#222] pt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-600" /> <span className="text-gray-500 text-[9px]">-3.0%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-800" /> <span className="text-gray-500 text-[9px]">0.0%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-600" /> <span className="text-gray-500 text-[9px]">+3.0%</span>
        </div>
      </div>
    </div>
  );
};
