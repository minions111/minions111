"use client";

import React from 'react';

export const StockScreener = () => {
  const results = [
    { ticker: "NVDA US", name: "Nvidia Corp", mktCap: "1.8T", pe: "45.2", revG: "+252%", margin: "54%" },
    { ticker: "ARM US", name: "Arm Holdings", mktCap: "135B", pe: "88.1", revG: "+45%", margin: "32%" },
    { ticker: "AVGO US", name: "Broadcom Inc", mktCap: "620B", pe: "24.5", revG: "+12%", margin: "42%" },
    { ticker: "AMD US", name: "AMD", mktCap: "280B", pe: "65.4", revG: "+8%", margin: "21%" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>SCRN - STOCK SCREENER (AI-FILTERS)</span>
        <span>UNIVERSE: S&P 500</span>
      </div>

      <div className="mb-4 bg-[#111] border border-[#222] p-3 flex gap-4 text-[9px] items-center">
        <span className="text-gray-500 uppercase">Active Filters:</span>
        <span className="bg-blue-900 px-2 py-0.5 rounded text-white">Sector: Technology</span>
        <span className="bg-blue-900 px-2 py-0.5 rounded text-white">Rev Growth &gt; 10%</span>
        <span className="bg-blue-900 px-2 py-0.5 rounded text-white">EBITDA Margin &gt; 20%</span>
        <button className="ml-auto text-[#ffb900] hover:underline">EDIT FILTERS</button>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Symbol</th>
            <th className="text-right">Mkt Cap</th>
            <th className="text-right">P/E</th>
            <th className="text-right">Rev Growth</th>
            <th className="text-right">Margin</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {results.map((r, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2">
                <div className="text-blue-400 font-bold">{r.ticker}</div>
                <div className="text-[8px] text-gray-500">{r.name}</div>
              </td>
              <td className="text-right font-bold">{r.mktCap}</td>
              <td className="text-right">{r.pe}</td>
              <td className="text-right text-[#00ff00]">{r.revG}</td>
              <td className="text-right font-bold">{r.margin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
