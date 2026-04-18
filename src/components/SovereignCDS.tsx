"use client";

import React from 'react';

export const SovereignCDS = () => {
  const data = [
    { country: "United States", spread: "42.5", chg: "+1.2", rank: "1", rating: "AA+" },
    { country: "Brazil", spread: "185.4", chg: "-5.0", rank: "12", rating: "BB" },
    { country: "Mexico", spread: "112.8", chg: "-2.1", rank: "8", rating: "BBB" },
    { country: "Turkey", spread: "320.5", chg: "+12.4", rank: "45", rating: "B" },
    { country: "China", spread: "68.2", chg: "+0.5", rank: "4", rating: "A+" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>SCDS - SOVEREIGN CREDIT DEFAULT SWAPS</span>
        <span>PERIOD: 5Y</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Country</th>
            <th className="text-right">Spread (bps)</th>
            <th className="text-right">Change</th>
            <th className="text-center">Rating</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {data.map((d, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 font-bold text-blue-400">{d.country}</td>
              <td className="text-right font-bold tabular-nums">{d.spread}</td>
              <td className={`text-right ${d.chg.startsWith('-') ? 'text-[#00ff00]' : 'text-red-500'}`}>{d.chg}</td>
              <td className="text-center font-bold">{d.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
