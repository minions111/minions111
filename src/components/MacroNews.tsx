"use client";

import React from 'react';

export const MacroNews = () => {
  const news = [
    { time: "11:20", region: "GLOBAL", headline: "IMF REVISES WORLD GROWTH FORECAST TO 3.1% AMID SERVICES RESILIENCE" },
    { time: "10:05", region: "US", headline: "RETAIL SALES BEAT ESTIMATES; HIGHER-FOR-LONGER RATE PATH REINFORCED" },
    { time: "09:30", region: "EU", headline: "ECB'S STOURNARAS SEES ROOM FOR FOUR RATE CUTS IN 2026" },
    { time: "Yesterday", region: "ASIA", headline: "CHINA MANUFACTURING PMI SLIPS TO 50.4; POLICY SUPPORT EXPECTED" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>MN - GLOBAL MACRO NEWS</span>
        <span>SOURCE: MACRO_WIRE</span>
      </div>

      <div className="space-y-4">
        {news.map((n, i) => (
          <div key={i} className="group cursor-pointer border-b border-[#111] pb-3 hover:bg-[#0a0a0a]">
            <div className="flex gap-4 items-center mb-1">
              <span className="text-[#00ff00] font-bold">{n.time}</span>
              <span className="text-gray-500 font-bold uppercase">[{n.region}]</span>
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
