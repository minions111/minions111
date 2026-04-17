"use client";

import React from 'react';

export const InflationMonitor = () => {
  const data = [
    { country: "United States", cpi: "3.2%", ppi: "2.1%", core: "3.8%", trend: "Down" },
    { country: "Eurozone", cpi: "2.4%", ppi: "1.8%", core: "2.9%", trend: "Down" },
    { country: "United Kingdom", cpi: "3.4%", ppi: "2.5%", core: "4.5%", trend: "Stable" },
    { country: "Japan", cpi: "2.6%", ppi: "0.8%", core: "2.2%", trend: "Up" },
    { country: "China", cpi: "0.1%", ppi: "-2.7%", core: "0.4%", trend: "Stable" },
    { country: "Brazil", cpi: "4.5%", ppi: "3.2%", core: "4.8%", trend: "Up" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>IECO - GLOBAL INFLATION MONITOR</span>
        <span>NY 20:15:33</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[10px]">
            <th className="py-1">Economy</th>
            <th className="text-right">CPI (YoY)</th>
            <th className="text-right">PPI (YoY)</th>
            <th className="text-right">Core CPI</th>
            <th className="text-right">Trend</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {data.map((d, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 font-bold text-blue-400">{d.country}</td>
              <td className={`text-right font-bold ${parseFloat(d.cpi) > 3 ? 'text-red-500' : 'text-[#00ff00]'}`}>{d.cpi}</td>
              <td className="text-right text-gray-400">{d.ppi}</td>
              <td className="text-right font-bold">{d.core}</td>
              <td className="text-right text-[10px] uppercase">{d.trend}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
