"use client";

import React, { useState } from 'react';
import { Search, Filter, Calendar } from 'lucide-react';

export const FullNewsSearch = () => {
  const [query, setQuery] = useState('');

  const results = [
    { time: "18:45", source: "BBG", headline: "Fed's Daly Says No Urgency to Cut Rates With Economy Strong", country: "US" },
    { time: "18:30", source: "REU", headline: "Wall Street Ends Week on High Note as Tech Rally Resumes", country: "US" },
    { time: "17:12", source: "BN", headline: "Oil Prices Steady Amid Geopolitical Tensions in Middle East", country: "WLD" },
    { time: "16:45", source: "DJ", headline: "Goldman Sachs Raises S&P 500 Year-End Target to 5,500", country: "US" },
    { time: "15:20", source: "BBG", headline: "European Markets Close Higher as ECB Hints at June Cut", country: "EU" },
    { time: "14:05", source: "BN", headline: "China Property Sector Recovery Remains Patchy, Data Shows", country: "CH" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs">
      <div className="bg-[#1a1a1a] p-2 px-4 border-b border-[#333] flex items-center gap-4">
        <div className="flex-1 flex items-center bg-black border border-[#444] px-3 py-1">
          <Search size={14} className="text-[#ffb900] mr-3" />
          <input
            type="text"
            placeholder="Search news by headline, ticker, or topic..."
            className="bg-transparent text-white outline-none w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button className="bg-[#222] hover:bg-[#333] p-1 px-3 border border-[#444] text-[10px] flex items-center gap-2">
            <Filter size={10} /> FILTER
          </button>
          <button className="bg-[#222] hover:bg-[#333] p-1 px-3 border border-[#444] text-[10px] flex items-center gap-2">
            <Calendar size={10} /> DATE
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="bg-[#111] p-1 px-4 text-gray-500 text-[9px] font-bold border-b border-[#222]">
          SEARCH RESULTS: TOP HEADLINES
        </div>
        {results.map((n, i) => (
          <div key={i} className="p-3 border-b border-[#111] hover:bg-[#0a0a0a] cursor-pointer group flex gap-4">
            <div className="flex flex-col items-center min-w-[50px]">
              <span className="text-[#00ff00] font-bold">{n.time}</span>
              <span className="text-gray-600 text-[9px]">{n.country}</span>
            </div>
            <div className="flex-1">
              <div className="text-white group-hover:text-[#ffb900] transition-colors font-bold uppercase leading-tight mb-1">
                {n.headline}
              </div>
              <div className="flex gap-3 text-[9px] text-gray-500">
                <span className="bg-[#222] px-1">SOURCE: {n.source}</span>
                <span className="hover:text-blue-400">RESEARCH &gt;</span>
                <span className="hover:text-blue-400">CHART &gt;</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
