"use client";

import React from 'react';

export const MostActive = () => {
  const movers = [
    { type: "Active by Volume", data: [
      { ticker: "NVDA", price: "726.13", change: "+15.20", pct: "+2.14%", volume: "42.5M" },
      { ticker: "AAPL", price: "185.92", change: "+1.24", pct: "+0.67%", volume: "38.2M" },
      { ticker: "TSLA", price: "193.57", change: "-5.40", pct: "-2.71%", volume: "35.8M" },
      { ticker: "AMD", price: "173.87", change: "+4.12", pct: "+2.43%", volume: "29.1M" },
    ]},
    { type: "Top Gainers", data: [
      { ticker: "SMCI", price: "880.55", change: "+45.20", pct: "+5.41%", volume: "8.2M" },
      { ticker: "ARM", price: "133.15", change: "+5.12", pct: "+4.00%", volume: "12.1M" },
      { ticker: "PLTR", price: "24.50", change: "+0.85", pct: "+3.59%", volume: "15.4M" },
      { ticker: "CRWD", price: "320.10", change: "+9.45", pct: "+3.04%", volume: "4.2M" },
    ]},
    { type: "Top Losers", data: [
      { ticker: "SNOW", price: "185.20", change: "-12.45", pct: "-6.30%", volume: "9.1M" },
      { ticker: "ZS", price: "215.10", change: "-10.12", pct: "-4.49%", volume: "5.4M" },
      { ticker: "PANW", price: "280.45", change: "-8.50", pct: "-2.94%", volume: "6.2M" },
      { ticker: "MDB", price: "410.20", change: "-12.15", pct: "-2.88%", volume: "3.1M" },
    ]}
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>MOST - MARKET MOVERS</span>
        <span>NY 19:50:44</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {movers.map((section, idx) => (
          <section key={idx} className="bg-[#0a0a0a] border border-[#222] p-2">
            <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-center">{section.type}</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 border-b border-[#222] text-[10px]">
                  <th className="py-1">Ticker</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">Chg%</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {section.data.map((item, i) => (
                  <tr key={i} className="border-b border-[#111] hover:bg-[#222] cursor-pointer">
                    <td className="py-2 text-blue-400 font-bold">{item.ticker}</td>
                    <td className="text-right">{item.price}</td>
                    <td className={`text-right ${item.pct.startsWith('+') ? 'text-[#00ff00]' : 'text-[#ff0000]'}`}>
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
