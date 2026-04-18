"use client";

import React from 'react';

export const InterestRateSwaps = () => {
  const swaps = [
    { tenor: "2Y", rate: "4.821", spread: "+12", pay: "Semi-Annual", rec: "Float" },
    { tenor: "5Y", rate: "4.254", spread: "+15", pay: "Semi-Annual", rec: "Float" },
    { tenor: "10Y", rate: "4.112", spread: "+22", pay: "Semi-Annual", rec: "Float" },
    { tenor: "30Y", rate: "3.985", spread: "+28", pay: "Semi-Annual", rec: "Float" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>SWAP - INTEREST RATE SWAP MONITOR</span>
        <span>BENCHMARK: SOFR</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Tenor</th>
            <th className="text-right">Swap Rate</th>
            <th className="text-right">Spread vs Govt</th>
            <th className="text-center">Reset</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {swaps.map((s, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2 font-bold text-blue-400">{s.tenor}</td>
              <td className="text-right font-bold tabular-nums text-[#ffb900]">{s.rate}%</td>
              <td className="text-right text-gray-500">{s.spread} bps</td>
              <td className="text-center uppercase text-[8px]">{s.rec}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-[#111] p-3 border border-[#222]">
          <div className="text-gray-500 uppercase text-[8px] mb-1">SOFR Fix (Current)</div>
          <div className="text-white font-bold text-lg">5.31%</div>
        </div>
        <div className="bg-[#111] p-3 border border-[#222]">
          <div className="text-gray-500 uppercase text-[8px] mb-1">Swap Spread Change</div>
          <div className="text-[#00ff00] font-bold text-lg">+1.2 bps</div>
        </div>
      </div>
    </div>
  );
};
