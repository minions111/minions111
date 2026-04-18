"use client";

import React from 'react';

export const CreditSpreadAnalysis = () => {
  const sectors = [
    { name: "Financials", spread: "112", chg: "-2", high: "145", low: "85", rating: "A-" },
    { name: "Energy", spread: "185", chg: "+5", high: "220", low: "140", rating: "BBB" },
    { name: "Technology", spread: "65", chg: "-1", high: "95", low: "52", rating: "AA" },
    { name: "Consumer", spread: "142", chg: "0", high: "168", low: "110", rating: "BBB+" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>CSAD - SECTOR CREDIT SPREAD ANALYSIS</span>
        <span>BENCHMARK: OAYS</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Sector</th>
            <th className="text-right">OAS (bps)</th>
            <th className="text-right">Chg</th>
            <th className="text-right">52W High</th>
            <th className="text-right">Avg Rating</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {sectors.map((s, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 font-bold text-blue-400">{s.name}</td>
              <td className="text-right font-bold tabular-nums">{s.spread}</td>
              <td className={`text-right ${s.chg.startsWith('-') ? 'text-[#00ff00]' : 'text-red-500'}`}>{s.chg}</td>
              <td className="text-right text-gray-500">{s.high}</td>
              <td className="text-right text-white font-bold">{s.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
