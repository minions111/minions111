"use client";

import React from 'react';

export const CommodityMonitor = () => {
  const categories = [
    { type: "Energy", data: [
      { name: "WTI Crude", price: "85.45", change: "+1.24", pct: "+1.47%", color: "green" },
      { name: "Brent Crude", price: "90.12", change: "+1.10", pct: "+1.23%", color: "green" },
      { name: "Natural Gas", price: "1.754", change: "-0.045", pct: "-2.50%", color: "red" },
    ]},
    { type: "Precious Metals", data: [
      { name: "Gold", price: "2,385.40", change: "+15.20", pct: "+0.64%", color: "green" },
      { name: "Silver", price: "28.45", change: "+0.32", pct: "+1.14%", color: "green" },
      { name: "Platinum", price: "945.20", change: "-8.40", pct: "-0.88%", color: "red" },
    ]},
    { type: "Agriculture", data: [
      { name: "Corn", price: "442.25", change: "-2.50", pct: "-0.56%", color: "red" },
      { name: "Wheat", price: "554.50", change: "+4.25", pct: "+0.77%", color: "green" },
      { name: "Soybeans", price: "1,155.00", change: "-12.00", pct: "-1.03%", color: "red" },
    ]}
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>COMM - COMMODITY MARKET MONITOR</span>
        <span>NY 20:22:12</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <section key={idx} className="bg-[#0a0a0a] border border-[#222] p-2">
            <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-center text-[10px]">{cat.type}</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 border-b border-[#222] text-[9px]">
                  <th className="py-1">Contract</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">% Chg</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {cat.data.map((item, i) => (
                  <tr key={i} className="border-b border-[#111] hover:bg-[#222] cursor-pointer">
                    <td className="py-2 text-blue-400 font-bold">{item.name}</td>
                    <td className="text-right font-bold">{item.price}</td>
                    <td className={`text-right ${item.color === 'green' ? 'text-[#00ff00]' : 'text-[#ff0000]'}`}>
                      {item.pct}
                    </td>
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
