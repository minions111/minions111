"use client";

import React, { useState } from 'react';
import { Search, FileText, Quote, ArrowRight } from 'lucide-react';

export const EarningsTranscriptSearch = () => {
  const [query, setQuery] = useState("");
  const results = [
    { ticker: "AAPL", date: "FEB 01, 2024", snippet: "...we are seeing incredible momentum in our SERVICES division, specifically with AI integrations in the App Store ecosystem...", relevance: "98%" },
    { ticker: "MSFT", date: "JAN 30, 2024", snippet: "...Azure revenue growth was driven by continued demand for GPU-based compute and our leadership in generative AI models...", relevance: "95%" },
    { ticker: "NVDA", date: "FEB 21, 2024", snippet: "...accelerated computing and generative AI have hit the tipping point. Demand is surging worldwide across companies, industries...", relevance: "92%" },
    { ticker: "GOOGL", date: "JAN 30, 2024", snippet: "...we are excited about the progress of Gemini. Our search business remains robust as we integrate more generative features...", relevance: "88%" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>EVTS - CORPORATE EARNINGS TRANSCRIPT SEARCH</span>
        <span>DATABASE: 20,000+ CALLS</span>
      </div>

      <div className="mb-6 relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search keywords (e.g., 'artificial intelligence', 'margin compression')..."
          className="w-full bg-[#111] border border-[#444] text-white p-3 pl-10 outline-none focus:border-[#ffb900]"
        />
        <Search size={16} className="absolute left-3 top-3 text-gray-500" />
      </div>

      <div className="space-y-6">
        {results.map((r, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-4 hover:border-[#ffb900] cursor-pointer group">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-3">
                <span className="bg-white/10 px-2 py-0.5 text-white font-bold">{r.ticker}</span>
                <span className="text-gray-500 font-bold">{r.date}</span>
              </div>
              <span className="text-[#00ff00] font-bold text-[10px]">RELEVANCE: {r.relevance}</span>
            </div>
            <div className="flex gap-4">
              <Quote size={24} className="text-gray-700 flex-shrink-0" />
              <p className="text-gray-400 italic text-[11px] leading-relaxed">
                {r.snippet}
              </p>
            </div>
            <div className="mt-3 flex justify-end">
              <span className="text-[#ffb900] font-bold flex items-center gap-1 group-hover:underline uppercase text-[9px]">
                Open Full Transcript <ArrowRight size={10} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
