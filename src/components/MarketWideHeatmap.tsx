"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export const MarketWideHeatmap = () => {
  const sectors = [
    { name: "TECHNOLOGY", perf: "+1.24%", items: ["AAPL", "MSFT", "NVDA", "ORCL", "CRM", "ADBE"] },
    { name: "FINANCIALS", perf: "-0.45%", items: ["JPM", "BAC", "WFC", "GS", "MS", "C"] },
    { name: "HEALTHCARE", perf: "+0.15%", items: ["LLY", "UNH", "JNJ", "ABBV", "MRK", "TMO"] },
    { name: "CONSUMER", perf: "+0.82%", items: ["AMZN", "TSLA", "HD", "MCD", "NKE", "SBUX"] },
    { name: "ENERGY", perf: "-1.12%", items: ["XOM", "CVX", "COP", "SLB", "EOG", "MPC"] },
    { name: "COMMUNICATION", perf: "+2.15%", items: ["META", "GOOGL", "NFLX", "DIS", "TMUS", "VZ"] },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-hidden">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>SHTM - MARKET-WIDE SECTOR HEATMAP</span>
        <span>INDEX: S&P 500 AGGREGATE</span>
      </div>

      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-2">
        {sectors.map((s, i) => {
          const isPos = s.perf.startsWith('+');
          return (
            <div key={i} className="flex flex-col border border-[#222] bg-[#0a0a0a]">
              <div className="p-2 border-b border-[#222] flex justify-between items-center">
                <span className="text-white font-bold uppercase text-[10px]">{s.name}</span>
                <span className={isPos ? "text-[#00ff00] font-bold" : "text-red-500 font-bold"}>{s.perf}</span>
              </div>
              <div className="flex-1 p-2 grid grid-cols-3 gap-1">
                {s.items.map((ticker, j) => (
                  <div
                    key={j}
                    className={cn(
                      "flex items-center justify-center text-[9px] font-bold h-12 transition-all hover:scale-105 cursor-pointer border border-black",
                      isPos ? "bg-green-900/30 text-[#00ff00]" : "bg-red-900/30 text-red-500"
                    )}
                  >
                    {ticker}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-2 bg-[#111] border border-[#333] flex justify-between items-center text-[10px]">
         <div className="flex gap-4">
           <span className="text-gray-500 uppercase">Advance: <span className="text-[#00ff00]">342</span></span>
           <span className="text-gray-500 uppercase">Decline: <span className="text-red-500">158</span></span>
           <span className="text-gray-500 uppercase">Unchanged: <span className="text-gray-400">12</span></span>
         </div>
      </div>
    </div>
  );
};
