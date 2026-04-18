"use client";

import React from 'react';

export const MarketStories = () => {
  const stories = [
    { title: "THE FED'S NEW NORMAL: WHY HIGHER RATES ARE HERE TO STAY", author: "B. Smith", date: "2 Hours Ago", readTime: "12 min" },
    { title: "SEMICONDUCTOR SUPER-CYCLE: AI IS JUST THE BEGINNING", author: "L. Wang", date: "4 Hours Ago", readTime: "15 min" },
    { title: "EMERGING MARKETS: THE SEARCH FOR YIELD IN A VOLATILE WORLD", author: "A. Garcia", date: "Yesterday", readTime: "10 min" },
    { title: "QUANTITATIVE TIGHTENING: THE UNSEEN LIQUIDITY DRAIN", author: "J. Miller", date: "Yesterday", readTime: "20 min" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-6 overflow-y-auto">
      <div className="mb-8 flex justify-between items-end border-b border-[#333] pb-4">
        <div>
          <h1 className="text-2xl font-bold text-white uppercase">Market Stories</h1>
          <p className="text-gray-500 uppercase text-[10px]">Institutional Long-form Research</p>
        </div>
        <span className="text-[#ffb900] font-bold">SOURCE: RSCH_PLATFORM</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map((s, i) => (
          <div key={i} className="group cursor-pointer border-b border-[#111] pb-6">
            <div className="text-[9px] text-[#00ff00] font-bold mb-1">{s.date} | {s.readTime} READ</div>
            <h2 className="text-lg font-bold text-white group-hover:text-[#ffb900] transition-colors leading-tight mb-3">
              {s.title}
            </h2>
            <div className="flex justify-between text-[9px] text-gray-500 font-bold uppercase">
              <span>By {s.author}</span>
              <span className="text-blue-400">RESEARCH &gt;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
