"use client";

import React, { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';

export const FinancialGlossary = () => {
  const [query, setQuery] = useState("");
  const terms = [
    { term: "BDP", def: "Bloomberg Data Point - used in Excel for single data requests." },
    { term: "BDH", def: "Bloomberg Data History - used in Excel for time-series data." },
    { term: "WACC", def: "Weighted Average Cost of Capital - the average rate a company pays to finance its assets." },
    { term: "ALPHA", def: "A measure of the active return on an investment compared to a benchmark." },
    { term: "BETA", def: "A measure of a stock's volatility in relation to the overall market." },
    { term: "DURATION", def: "A measure of the sensitivity of the price of a bond to a change in interest rates." },
    { term: "CONVEXITY", def: "A measure of the curvature in the relationship between bond prices and bond yields." },
    { term: "SWAP", def: "A derivative contract through which two parties exchange financial instruments." },
  ];

  const filtered = terms.filter(t =>
    t.term.toLowerCase().includes(query.toLowerCase()) ||
    t.def.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>GLOS - BLOOMBERG FINANCIAL GLOSSARY</span>
        <span>TERMINOLOGY MASTER</span>
      </div>

      <div className="mb-6 relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for term or mnemonic..."
          className="w-full bg-[#111] border border-[#444] text-white p-2 pl-10 outline-none focus:border-[#ffb900]"
        />
        <Search size={16} className="absolute left-3 top-2.5 text-gray-500" />
      </div>

      <div className="space-y-4">
        {filtered.map((t, i) => (
          <div key={i} className="border-b border-[#111] pb-3 group">
            <div className="text-[#ffb900] font-bold text-sm mb-1 group-hover:text-white transition-colors">{t.term}</div>
            <div className="text-gray-400 leading-relaxed uppercase text-[10px]">{t.def}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
