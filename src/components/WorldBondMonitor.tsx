"use client";

import React from 'react';

export const WorldBondMonitor = () => {
  const bonds = [
    { country: "United States", "2Y": "4.92", "10Y": "4.61", spread: "-31", rtg: "AA+" },
    { country: "United Kingdom", "2Y": "4.35", "10Y": "4.25", spread: "-10", rtg: "AA" },
    { country: "Germany", "2Y": "2.85", "10Y": "2.35", spread: "-50", rtg: "AAA" },
    { country: "Japan", "2Y": "0.22", "10Y": "0.85", spread: "+63", rtg: "A+" },
    { country: "Australia", "2Y": "4.10", "10Y": "4.25", spread: "+15", rtg: "AAA" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>WB - WORLD BOND MONITOR</span>
        <span>NY 22:38:12</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Country</th>
            <th className="text-right">2Y Yield</th>
            <th className="text-right">10Y Yield</th>
            <th className="text-right">10-2 Spread</th>
            <th className="text-center">Rating</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {bonds.map((b, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2 font-bold text-blue-400">{b.country}</td>
              <td className="text-right font-bold">{b["2Y"]}%</td>
              <td className="text-right font-bold text-[#ffb900]">{b["10Y"]}%</td>
              <td className={`text-right font-bold ${parseInt(b.spread) < 0 ? 'text-red-500' : 'text-[#00ff00]'}`}>{b.spread} bps</td>
              <td className="text-center text-gray-500 uppercase">{b.rtg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
