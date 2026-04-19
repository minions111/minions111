"use client";

import React from 'react';
import { Target, Zap, AlertTriangle, ArrowUpRight } from 'lucide-react';

export const TradeIdeaAnalytics = () => {
  const ideas = [
    { ticker: "AAPL", strategy: "BULL CALL SPREAD", horizon: "2W", conviction: "HIGH", catalyst: "Product Launch" },
    { ticker: "EURUSD", strategy: "LONG CROSS", horizon: "1M", conviction: "MED", catalyst: "ECB Meeting" },
    { ticker: "GLD", strategy: "STRIKE CALENDAR", horizon: "3M", conviction: "HIGH", catalyst: "Macro Hedge" },
    { ticker: "TSLA", strategy: "BEARISH REVERSAL", horizon: "1W", conviction: "MED", catalyst: "Technicals" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>IDEA - TRADE IDEA GENERATOR & ANALYTICS</span>
        <span>ENGINE: QUANT_STRAT_v4</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
        {ideas.map((idea, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-4 hover:border-[#ffb900] cursor-pointer group flex flex-col">
            <div className="flex justify-between items-center mb-2">
               <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-lg">{idea.ticker}</span>
                  <span className="bg-[#ffb900] text-black px-1 font-bold text-[8px]">{idea.conviction}</span>
               </div>
               <div className="text-gray-500 uppercase text-[9px]">{idea.horizon} Horizon</div>
            </div>
            <div className="text-[#00ff00] font-bold mb-3 uppercase">{idea.strategy}</div>
            <div className="flex-1 text-gray-400 text-[10px] uppercase leading-tight mb-4">
               Catalyst: {idea.catalyst} | Beta: 1.14 | Implied Vol: 32%
            </div>
            <div className="mt-auto border-t border-[#222] pt-2 flex justify-between items-center">
               <span className="text-gray-600 text-[8px]">PROB SUCCESS: 68%</span>
               <ArrowUpRight size={14} className="text-[#ffb900] group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
