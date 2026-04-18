"use client";

import React from 'react';

export const AnalystNews = () => {
  const news = [
    { time: "10:15", firm: "Goldman Sachs", ticker: "NVDA", headline: "REITERATING CONVICTION BUY; TARGET RAISED TO 950" },
    { time: "09:42", firm: "Morgan Stanley", ticker: "AAPL", headline: "SERVICES MOMENTUM OFFSETTING HARDWARE CONCERNS; OVERWEIGHT" },
    { time: "08:15", firm: "JPMorgan", ticker: "TSLA", headline: "INITIATING AT NEUTRAL; MONITORING DELIVERY VOLATILITY" },
    { time: "07:30", firm: "Citi", ticker: "MSFT", headline: "CLOUD LEADERSHIP REINFORCED BY AI INTEGRATION; TOP PICK" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>AN - ANALYST COMMENTARY & NEWS</span>
        <span>SOURCE: RESEARCH_LIVE</span>
      </div>

      <div className="space-y-4">
        {news.map((n, i) => (
          <div key={i} className="group cursor-pointer border-b border-[#111] pb-3 hover:bg-[#0a0a0a]">
            <div className="flex gap-4 items-center mb-1">
              <span className="text-[#00ff00] font-bold">{n.time}</span>
              <span className="text-blue-400 font-bold">[{n.firm}]</span>
              <span className="bg-white/10 px-1 text-[9px] font-bold text-white">{n.ticker}</span>
            </div>
            <h2 className="text-white font-bold uppercase text-[11px] group-hover:text-[#ffb900] transition-colors leading-tight">
              {n.headline}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
