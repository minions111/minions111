"use client";

import React from 'react';

export const FixedIncomeMonitor = () => {
  const categories = [
    { name: "US Treasuries", data: [
      { name: "UST 2Y", yield: "4.921", chg: "+0.012", spread: "--" },
      { name: "UST 10Y", yield: "4.612", chg: "+0.015", spread: "-30.9" },
    ]},
    { name: "US Corporates (IG)", data: [
      { name: "AAPL 3.35 27", yield: "4.821", chg: "-0.005", spread: "+42" },
      { name: "MSFT 2.40 26", yield: "4.954", chg: "+0.002", spread: "+38" },
    ]},
    { name: "High Yield", data: [
      { name: "CDX HY S41", price: "102.45", chg: "+0.12", spread: "385" },
      { name: "FORD 6.10 32", yield: "7.125", chg: "+0.045", spread: "+265" },
    ]}
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>FICM - FIXED INCOME MONITOR</span>
        <span>ALL SECTORS</span>
      </div>

      <div className="space-y-6">
        {categories.map((cat, idx) => (
          <section key={idx}>
            <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">{cat.name}</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 border-b border-[#222] text-[9px]">
                  <th className="py-1">Security</th>
                  <th className="text-right">Yield/Price</th>
                  <th className="text-right">Change</th>
                  <th className="text-right">Spread (bps)</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {cat.data.map((item, i) => (
                  <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
                    <td className="py-2 text-blue-400 font-bold">{item.name}</td>
                    <td className="text-right font-bold">{item.yield || (item as any).price}</td>
                    <td className={`text-right ${item.chg.startsWith('+') ? 'text-[#00ff00]' : 'text-red-500'}`}>{item.chg}</td>
                    <td className="text-right text-gray-400">{item.spread}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ))}
      </div>
    </div>
  );
};
