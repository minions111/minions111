"use client";

import React from 'react';

export const CDSMonitor = () => {
  const spreads = [
    { entity: "United States", spread: "42.5", chg: "+1.2", period: "5Y", tenor: "Senior" },
    { entity: "United Kingdom", spread: "38.2", chg: "-0.5", period: "5Y", tenor: "Senior" },
    { entity: "Germany", spread: "18.4", chg: "0.0", period: "5Y", tenor: "Senior" },
    { entity: "Japan", spread: "22.1", chg: "+0.4", period: "5Y", tenor: "Senior" },
    { entity: "Goldman Sachs", spread: "85.2", chg: "-2.4", period: "5Y", tenor: "Sub" },
    { entity: "JPMorgan Chase", spread: "78.4", chg: "-1.8", period: "5Y", tenor: "Sub" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>CDS - CREDIT DEFAULT SWAP MONITOR</span>
        <span>NY 21:55:44</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Reference Entity</th>
            <th className="text-right">Spread (bps)</th>
            <th className="text-right">Change</th>
            <th className="text-center">Tenor</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {spreads.map((s, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 font-bold text-blue-400">{s.entity}</td>
              <td className="text-right font-bold tabular-nums">{s.spread}</td>
              <td className={`text-right ${s.chg.startsWith('+') ? 'text-red-500' : 'text-[#00ff00]'}`}>{s.chg}</td>
              <td className="text-center text-gray-500 uppercase">{s.tenor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
