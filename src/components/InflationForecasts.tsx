"use client";

import React from 'react';

export const InflationForecasts = () => {
  const forecasts = [
    { country: "United States", cpi2026: "2.8%", cpi2027: "2.2%", target: "2.0%", confidence: "High" },
    { country: "Eurozone", cpi2026: "2.1%", cpi2027: "1.9%", target: "2.0%", confidence: "Med" },
    { country: "United Kingdom", cpi2026: "3.2%", cpi2027: "2.5%", target: "2.0%", confidence: "Low" },
    { country: "Japan", cpi2026: "2.4%", cpi2027: "2.1%", target: "2.0%", confidence: "Med" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>IFRC - GLOBAL INFLATION FORECASTS</span>
        <span>PERIOD: FY 2026-2027</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Economy</th>
            <th className="text-right">2026 (E)</th>
            <th className="text-right">2027 (E)</th>
            <th className="text-right">CB Target</th>
            <th className="text-center">Conviction</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {forecasts.map((f, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2 font-bold text-blue-400">{f.country}</td>
              <td className="text-right font-bold text-[#ffb900]">{f.cpi2026}</td>
              <td className="text-right text-[#00ff00]">{f.cpi2027}</td>
              <td className="text-right text-gray-500">{f.target}</td>
              <td className="text-center uppercase text-[8px]">{f.confidence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
