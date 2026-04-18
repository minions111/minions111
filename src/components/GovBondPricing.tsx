"use client";

import React from 'react';

export const GovBondPricing = () => {
  const regions = [
    { country: "US", "2Y": "4.92", "5Y": "4.65", "10Y": "4.61", "30Y": "4.72" },
    { country: "UK", "2Y": "4.35", "5Y": "4.12", "10Y": "4.25", "30Y": "4.55" },
    { country: "Germany", "2Y": "2.85", "5Y": "2.42", "10Y": "2.35", "30Y": "2.55" },
    { country: "Japan", "2Y": "0.22", "5Y": "0.45", "10Y": "0.85", "30Y": "1.75" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>GOVP - GLOBAL GOVT BOND PRICING</span>
        <span>NY 21:28:44</span>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#111] text-gray-500 uppercase text-[10px] border-b border-[#333]">
            <th className="py-2 px-2">Country</th>
            <th className="text-right px-2">2Y</th>
            <th className="text-right px-2">5Y</th>
            <th className="text-right px-2">10Y</th>
            <th className="text-right px-2">30Y</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {regions.map((r, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 px-2 font-bold text-blue-400">{r.country}</td>
              <td className="text-right px-2">{r["2Y"]}%</td>
              <td className="text-right px-2">{r["5Y"]}%</td>
              <td className="text-right px-2 font-bold">{r["10Y"]}%</td>
              <td className="text-right px-2">{r["30Y"]}%</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 flex gap-4">
        <div className="bg-[#111] p-3 border border-[#222] flex-1">
          <div className="text-gray-500 uppercase text-[9px] mb-1">Global Sentiment</div>
          <div className="text-[#ffb900] font-bold">HAWKISH BIAS</div>
        </div>
        <div className="bg-[#111] p-3 border border-[#222] flex-1">
          <div className="text-gray-500 uppercase text-[9px] mb-1">Spread vs Bund</div>
          <div className="text-white font-bold">+226 bps (US)</div>
        </div>
      </div>
    </div>
  );
};
