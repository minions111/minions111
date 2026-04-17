"use client";

import React from 'react';

interface HDSProps {
  ticker: string;
}

export const HoldingsOwnership = ({ ticker }: HDSProps) => {
  const holders = [
    { name: "Vanguard Group Inc", shares: "1,312.4M", pct: "8.45%", value: "244.0B", change: "+1.2M" },
    { name: "BlackRock Inc", shares: "1,050.2M", pct: "6.76%", value: "195.3B", change: "-0.5M" },
    { name: "Berkshire Hathaway Inc", shares: "915.6M", pct: "5.90%", value: "170.2B", change: "0.0" },
    { name: "State Street Corp", shares: "580.4M", pct: "3.74%", value: "107.9B", change: "+0.8M" },
    { name: "FMR LLC", shares: "310.2M", pct: "2.00%", value: "57.7B", change: "+4.1M" },
    { name: "Geode Capital Management", shares: "295.1M", pct: "1.90%", value: "54.8B", change: "+0.2M" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - HDS (Holdings/Ownership)</span>
        <span>DATA AS OF 03/31/2026</span>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-[#111] border border-[#222] p-3 text-center">
          <div className="text-gray-400 text-[10px] uppercase">Institutional Ownership</div>
          <div className="text-white text-2xl font-bold">59.8%</div>
          <div className="text-gray-500 text-[9px]">2,845 Institutions</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-3 text-center">
          <div className="text-gray-400 text-[10px] uppercase">Insider Ownership</div>
          <div className="text-white text-2xl font-bold">0.15%</div>
          <div className="text-gray-500 text-[9px]">12 Active Insiders</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-3 text-center">
          <div className="text-gray-400 text-[10px] uppercase">Float</div>
          <div className="text-white text-2xl font-bold">15,450.2M</div>
          <div className="text-gray-500 text-[9px]">99.8% of Shares Out</div>
        </div>
      </div>

      <section>
        <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase">Top Institutional Holders</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b border-[#222] text-[10px]">
              <th className="py-1">Holder Name</th>
              <th className="text-right">Shares</th>
              <th className="text-right">% Out</th>
              <th className="text-right">Value</th>
              <th className="text-right">Change</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {holders.map((h, i) => (
              <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
                <td className="py-2 text-blue-400">{h.name}</td>
                <td className="text-right">{h.shares}</td>
                <td className="text-right">{h.pct}</td>
                <td className="text-right">{h.value}</td>
                <td className={`text-right ${h.change.startsWith('+') ? 'text-[#00ff00]' : h.change.startsWith('-') ? 'text-[#ff0000]' : 'text-gray-500'}`}>
                  {h.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};
