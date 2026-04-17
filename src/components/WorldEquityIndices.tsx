"use client";

import React from 'react';

export const WorldEquityIndices = () => {
  const indices = [
    { region: "Americas", data: [
      { name: "S&P 500", price: "5,026.61", change: "+29.11", pct: "+0.58%", color: "green" },
      { name: "Dow Jones", price: "38,627.99", change: "-54.55", pct: "-0.14%", color: "red" },
      { name: "Nasdaq", price: "15,990.66", change: "+197.63", pct: "+1.25%", color: "green" },
      { name: "TSX Composite", price: "20,919.40", change: "+102.12", pct: "+0.49%", color: "green" },
    ]},
    { region: "Europe/Middle East/Africa", data: [
      { name: "Euro Stoxx 50", price: "4,765.65", change: "+32.10", pct: "+0.68%", color: "green" },
      { name: "FTSE 100", price: "7,711.71", change: "+14.50", pct: "+0.19%", color: "green" },
      { name: "DAX", price: "17,092.26", change: "+71.50", pct: "+0.42%", color: "green" },
      { name: "CAC 40", price: "7,743.42", change: "+55.20", pct: "+0.72%", color: "green" },
    ]},
    { region: "Asia/Pacific", data: [
      { name: "Nikkei 225", price: "38,487.24", change: "+329.30", pct: "+0.86%", color: "green" },
      { name: "Hang Seng", price: "16,339.96", change: "+395.33", pct: "+2.48%", color: "green" },
      { name: "CSI 300", price: "3,403.81", change: "+39.22", pct: "+1.17%", color: "green" },
      { name: "Nifty 50", price: "22,040.70", change: "+129.95", pct: "+0.59%", color: "green" },
    ]}
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>WEI - WORLD EQUITY INDICES</span>
        <span>NY 19:48:12</span>
      </div>

      <div className="space-y-6">
        {indices.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase">{section.region}</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 border-b border-[#222]">
                  <th className="py-1">Index Name</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">Change</th>
                  <th className="text-right">% Chg</th>
                </tr>
              </thead>
              <tbody className="text-white">
                {section.data.map((item, i) => (
                  <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
                    <td className="py-2 text-blue-400 font-bold">{item.name}</td>
                    <td className="text-right font-bold">{item.price}</td>
                    <td className={`text-right ${item.color === 'green' ? 'text-[#00ff00]' : 'text-[#ff0000]'}`}>
                      {item.change}
                    </td>
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
