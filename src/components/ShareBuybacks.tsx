"use client";

import React from 'react';

interface BUYBProps {
  ticker: string;
}

export const ShareBuybacks = ({ ticker }: BUYBProps) => {
  const history = [
    { period: "Q1 2026", amt: "25.0B", shares: "135M", avgPrice: "185.12" },
    { period: "Q4 2025", amt: "22.5B", shares: "122M", avgPrice: "184.42" },
    { period: "Q3 2025", amt: "20.0B", shares: "110M", avgPrice: "181.80" },
    { period: "Q2 2025", amt: "18.5B", shares: "105M", avgPrice: "176.20" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - BUYB (Share Buyback History)</span>
        <span>CURRENCY: USD</span>
      </div>

      <div className="bg-[#111] p-4 border border-[#222] mb-8 text-center">
        <div className="text-gray-500 uppercase text-[9px] mb-1">Authorization Remaining</div>
        <div className="text-white text-3xl font-bold">110.0B</div>
        <div className="text-[#00ff00] text-[9px] mt-1 uppercase">Valid through 2028</div>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Period</th>
            <th className="text-right">Spend</th>
            <th className="text-right">Shares Ret.</th>
            <th className="text-right">Avg Price</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {history.map((h, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 font-bold text-blue-400">{h.period}</td>
              <td className="text-right font-bold text-[#ffb900]">{h.amt}</td>
              <td className="text-right">{h.shares}</td>
              <td className="text-right text-gray-500">{h.avgPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
