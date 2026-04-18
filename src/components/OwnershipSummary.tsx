"use client";

import React from 'react';

interface OWNProps {
  ticker: string;
}

export const OwnershipSummary = ({ ticker }: OWNProps) => {
  const categories = [
    { name: "Investment Advisor", shares: "12,450M", pct: "82.4%", count: "1,452" },
    { name: "Hedge Fund", shares: "1,200M", pct: "8.2%", count: "320" },
    { name: "Pension Fund", shares: "850M", pct: "5.4%", count: "115" },
    { name: "Sovereign Wealth", shares: "420M", pct: "2.8%", count: "12" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - OWN (Ownership Summary)</span>
        <span>NY 22:42:00</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Holder Type</th>
            <th className="text-right">Shares Held</th>
            <th className="text-right">% Out</th>
            <th className="text-right">Holders</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {categories.map((c, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2 font-bold text-blue-400">{c.name}</td>
              <td className="text-right font-bold tabular-nums">{c.shares}</td>
              <td className="text-right font-bold text-[#ffb900]">{c.pct}</td>
              <td className="text-right text-gray-500">{c.count}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 bg-[#111] border border-[#222] p-4 text-center">
        <div className="text-gray-500 uppercase text-[9px] mb-1">Concentration Insight</div>
        <div className="text-white font-bold uppercase">High Institutional Concentration</div>
        <p className="text-[10px] text-gray-500 mt-2">
          Top 10 holders control 42.5% of total shares outstanding. Low retail float (5.2%) suggests potential for institutional-driven volatility during quarterly rebalancing cycles.
        </p>
      </div>
    </div>
  );
};
