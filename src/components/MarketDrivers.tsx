"use client";

import React from 'react';

export const MarketDrivers = () => {
  const drivers = [
    { name: "NVIDIA CORP", impact: "+12.45", weight: "5.4%", pct: "+2.14%", color: "green" },
    { name: "APPLE INC", impact: "+8.12", weight: "6.2%", pct: "+0.67%", color: "green" },
    { name: "MICROSOFT CORP", impact: "-4.50", weight: "6.8%", pct: "-0.59%", color: "red" },
    { name: "AMAZON.COM INC", impact: "+3.20", weight: "3.5%", pct: "+1.78%", color: "green" },
    { name: "META PLATFORMS", impact: "+2.85", weight: "2.4%", pct: "+2.65%", color: "green" },
    { name: "TESLA INC", impact: "-2.40", weight: "1.8%", pct: "-2.71%", color: "red" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>DRIV - S&P 500 MARKET DRIVERS</span>
        <span>INDEX CHANGE: +29.11 (+0.58%)</span>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">Top Index Contributors</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b border-[#222] text-[10px]">
                <th className="py-1">Company</th>
                <th className="text-right">Index Points</th>
                <th className="text-right">Weight</th>
                <th className="text-right">% Change</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {drivers.map((d, i) => (
                <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
                  <td className="py-2 text-blue-400 font-bold">{d.name}</td>
                  <td className={`text-right font-bold ${d.color === 'green' ? 'text-[#00ff00]' : 'text-[#ff0000]'}`}>
                    {d.impact}
                  </td>
                  <td className="text-right text-gray-400">{d.weight}</td>
                  <td className={`text-right ${d.color === 'green' ? 'text-[#00ff00]' : 'text-[#ff0000]'}`}>
                    {d.pct}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="bg-[#111] border border-[#222] p-4">
          <div className="text-[#ffb900] font-bold mb-3 uppercase text-center">Market Breadth</div>
          <div className="flex items-center h-4 w-full bg-[#333] rounded-full overflow-hidden">
            <div className="h-full bg-[#00ff00]" style={{ width: '65%' }}></div>
            <div className="h-full bg-gray-500" style={{ width: '10%' }}></div>
            <div className="h-full bg-[#ff0000]" style={{ width: '25%' }}></div>
          </div>
          <div className="flex justify-between mt-2 text-[10px] font-bold">
            <span className="text-[#00ff00]">325 ADVANCING</span>
            <span className="text-gray-400">50 UNCHANGED</span>
            <span className="text-[#ff0000]">125 DECLINING</span>
          </div>
        </div>
      </div>
    </div>
  );
};
