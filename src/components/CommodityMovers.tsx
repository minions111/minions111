"use client";

import React from 'react';

export const CommodityMovers = () => {
  const movers = [
    { type: "Top Performers (Energy)", data: [
      { ticker: "CL1", name: "WTI Crude", price: "85.45", chg: "+1.24", pct: "+1.47%" },
      { ticker: "CO1", name: "Brent Crude", price: "90.12", chg: "+1.10", pct: "+1.23%" },
    ]},
    { type: "Top Performers (Metals)", data: [
      { ticker: "GC1", name: "Gold", price: "2385.4", chg: "+15.2", pct: "+0.64%" },
      { ticker: "HG1", name: "Copper", price: "4.35", chg: "+0.08", pct: "+1.87%" },
    ]},
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>CMOV - COMMODITY MARKET MOVERS</span>
        <span>NY 23:35:44</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {movers.map((section, idx) => (
          <section key={idx}>
            <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">{section.type}</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 border-b border-[#222] text-[8px]">
                  <th>Contract</th>
                  <th className="text-right">Price</th>
                  <th className="text-right">% Chg</th>
                </tr>
              </thead>
              <tbody className="text-white text-[10px]">
                {section.data.map((item, i) => (
                  <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
                    <td className="py-2">
                      <span className="text-blue-400 font-bold">{item.ticker}</span>
                      <span className="ml-2 text-gray-500">{item.name}</span>
                    </td>
                    <td className="text-right font-bold tabular-nums">{item.price}</td>
                    <td className="text-right text-[#00ff00] font-bold">{item.pct}</td>
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
