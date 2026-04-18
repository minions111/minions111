"use client";

import React from 'react';

export const ForwardRates = () => {
  const tenors = [
    { name: "3M Forward", r0: "5.38", r1: "5.21", r2: "5.02", r3: "4.85" },
    { name: "6M Forward", r0: "5.32", r1: "5.15", r2: "4.95", r3: "4.78" },
    { name: "1Y Forward", r0: "5.12", r1: "4.98", r2: "4.82", r3: "4.65" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>FWD - FORWARD RATE ANALYSIS</span>
        <span>BENCHMARK: OIS</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Forward Tenor</th>
            <th className="text-right">Spot</th>
            <th className="text-right">3M Fwd</th>
            <th className="text-right">6M Fwd</th>
            <th className="text-right">1Y Fwd</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {tenors.map((t, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2 font-bold text-blue-400">{t.name}</td>
              <td className="text-right text-gray-400 font-bold">{t.r0}%</td>
              <td className="text-right text-[#ffb900] font-bold">{t.r1}%</td>
              <td className="text-right text-[#ffb900] font-bold">{t.r2}%</td>
              <td className="text-right text-[#ffb900] font-bold">{t.r3}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
