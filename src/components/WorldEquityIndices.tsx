"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export const WorldEquityIndices = () => {
  const regions = [
    {
      region: "AMERICAS",
      indices: [
        { name: "S&P 500", ticker: "SPX", value: "5,026.61", change: "+28.22", pct: "+0.58%" },
        { name: "NASDAQ 100", ticker: "NDX", value: "17,682.90", change: "+195.42", pct: "+1.12%" },
        { name: "DOW JONES", ticker: "INDU", value: "38,424.27", change: "-145.13", pct: "-0.38%" },
      ]
    },
    {
      region: "EUROPE",
      indices: [
        { name: "EURO STOXX 50", ticker: "SX5E", value: "4,721.42", change: "+12.10", pct: "+0.26%" },
        { name: "DAX", ticker: "DAX", value: "17,046.69", change: "+65.22", pct: "+0.38%" },
        { name: "FTSE 100", ticker: "UKX", value: "7,597.53", change: "+3.22", pct: "+0.04%" },
      ]
    },
    {
      region: "ASIA PACIFIC",
      indices: [
        { name: "NIKKEI 225", ticker: "NKY", value: "38,157.94", change: "-42.42", pct: "-0.11%" },
        { name: "HANG SENG", ticker: "HSI", value: "16,223.07", change: "+352.12", pct: "+2.22%" },
        { name: "CSI 300", ticker: "SHSZ300", value: "3,364.93", change: "+12.14", pct: "+0.36%" },
      ]
    }
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>WEI - WORLD EQUITY INDICES MONITOR</span>
        <span>MARKET: OPEN</span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {regions.map((reg, i) => (
          <div key={i} className="space-y-2">
            <h2 className="text-[#ffb900] font-bold border-b border-[#222] pb-1 uppercase">{reg.region}</h2>
            <table className="w-full">
              <thead className="text-gray-500 uppercase text-[9px]">
                <tr>
                  <th className="p-2 text-left font-normal">Index Name</th>
                  <th className="p-2 text-left font-normal">Ticker</th>
                  <th className="p-2 text-right font-normal">Last</th>
                  <th className="p-2 text-right font-normal">Change</th>
                  <th className="p-2 text-right font-normal">%Chg</th>
                </tr>
              </thead>
              <tbody>
                {reg.indices.map((idx, j) => {
                  const isUp = idx.pct.startsWith('+');
                  return (
                    <tr key={j} className="border-b border-[#111] hover:bg-[#111] cursor-pointer group">
                      <td className="p-2 text-white font-bold">{idx.name}</td>
                      <td className="p-2 text-gray-400">{idx.ticker}</td>
                      <td className="p-2 text-right text-white font-bold tabular-nums">{idx.value}</td>
                      <td className={cn("p-2 text-right font-bold tabular-nums", isUp ? "text-[#00ff00]" : "text-red-500")}>
                        {idx.change}
                      </td>
                      <td className={cn("p-2 text-right font-bold tabular-nums", isUp ? "text-[#00ff00]" : "text-red-500")}>
                        {idx.pct}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};
