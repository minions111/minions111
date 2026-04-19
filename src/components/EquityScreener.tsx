"use client";

import React, { useState } from 'react';
import { Filter, Search, Download, ChevronDown } from 'lucide-react';

export const EquityScreener = () => {
  const [results] = useState([
    { ticker: "NVDA", name: "NVIDIA CORP", sector: "TECH", mktCap: "$2.2T", pe: "72.4", yield: "0.02%", perf: "+242%" },
    { ticker: "MSFT", name: "MICROSOFT CORP", sector: "TECH", mktCap: "$3.1T", pe: "36.2", yield: "0.72%", perf: "+48%" },
    { ticker: "LLY", name: "ELI LILLY & CO", sector: "HLTH", mktCap: "$712B", pe: "128.4", yield: "0.68%", perf: "+112%" },
    { ticker: "V", name: "VISA INC-A", sector: "FIN", mktCap: "$562B", pe: "32.1", yield: "0.75%", perf: "+22%" },
    { ticker: "AVGO", name: "BROADCOM INC", sector: "TECH", mktCap: "$582B", pe: "48.2", yield: "1.42%", perf: "+108%" },
  ]);

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>EQS - EQUITY SCREENER & FILTER</span>
        <span>UNIVERSE: GLOBAL EQUITIES (65,000+)</span>
      </div>

      <div className="flex gap-4 mb-6 bg-[#0a0a0a] p-3 border border-[#222]">
        <div className="flex items-center gap-2 text-[#ffb900] font-bold border-r border-[#333] pr-4">
          <Filter size={14} /> FILTERS
        </div>
        <div className="flex gap-4">
           <div className="flex items-center gap-2 text-gray-400">Sector: <span className="text-white bg-blue-900/30 px-1">TECH, HLTH <ChevronDown size={10} /></span></div>
           <div className="flex items-center gap-2 text-gray-400">Mkt Cap: <span className="text-white bg-blue-900/30 px-1">&gt; $500B <ChevronDown size={10} /></span></div>
           <div className="flex items-center gap-2 text-gray-400">P/E Ratio: <span className="text-white bg-blue-900/30 px-1">&lt; 150 <ChevronDown size={10} /></span></div>
        </div>
        <div className="ml-auto flex gap-2">
          <button className="bg-[#111] border border-[#444] px-2 py-1 text-white hover:bg-white hover:text-black transition-colors">SAVE SEARCH</button>
          <button className="bg-[#ffb900] border border-[#ffb900] px-2 py-1 text-black font-bold">RUN SCREEN</button>
        </div>
      </div>

      <div className="flex-1">
        <table className="w-full">
          <thead className="text-gray-500 uppercase text-[9px] border-b border-[#333]">
            <tr>
              <th className="p-2 text-left font-normal">Ticker</th>
              <th className="p-2 text-left font-normal">Security Name</th>
              <th className="p-2 text-right font-normal">Mkt Cap</th>
              <th className="p-2 text-right font-normal">P/E</th>
              <th className="p-2 text-right font-normal">Div Yield</th>
              <th className="p-2 text-right font-normal">1Y Perf</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer group">
                <td className="p-2 text-[#ffb900] font-bold">{r.ticker}</td>
                <td className="p-2 text-white font-bold uppercase">{r.name}</td>
                <td className="p-2 text-right text-gray-400 tabular-nums">{r.mktCap}</td>
                <td className="p-2 text-right text-white font-bold tabular-nums">{r.pe}</td>
                <td className="p-2 text-right text-blue-400 tabular-nums">{r.yield}</td>
                <td className="p-2 text-right text-[#00ff00] font-bold tabular-nums">{r.perf}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 text-[9px] text-gray-600 flex justify-between">
        <span>TOTAL MATCHES: 512 SECURITIES</span>
        <span className="flex items-center gap-1"><Download size={10} /> EXPORT RESULTS TO EXCEL</span>
      </div>
    </div>
  );
};
