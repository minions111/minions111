"use client";

import React from 'react';

export const PortfolioService = () => {
  const holdings = [
    { ticker: "AAPL", name: "APPLE INC", shares: "1,200", price: "185.92", marketVal: "223,104", weight: "24.5%", ret: "+4.2%" },
    { ticker: "MSFT", name: "MICROSOFT CORP", shares: "500", price: "415.10", marketVal: "207,550", weight: "22.8%", ret: "+1.8%" },
    { ticker: "NVDA", name: "NVIDIA CORP", shares: "200", price: "726.13", marketVal: "145,226", weight: "15.9%", ret: "+12.4%" },
    { ticker: "AMZN", name: "AMAZON.COM INC", shares: "600", price: "178.22", marketVal: "106,932", weight: "11.7%", ret: "-2.1%" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>BPS - INSTITUTIONAL PORTFOLIO SERVICE</span>
        <span>TOTAL NAV: 912,450 USD</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="bg-[#111] text-gray-500 uppercase text-[9px] border-b border-[#333]">
            <th className="py-2 px-1">Ticker</th>
            <th className="text-right px-1">Shares</th>
            <th className="text-right px-1">Market Val</th>
            <th className="text-right px-1">Weight</th>
            <th className="text-right px-1">Total Ret</th>
          </tr>
        </thead>
        <tbody className="text-white text-[11px]">
          {holdings.map((h, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 px-1 font-bold text-blue-400">{h.ticker}</td>
              <td className="text-right px-1">{h.shares}</td>
              <td className="text-right px-1 font-bold">{h.marketVal}</td>
              <td className="text-right px-1 text-gray-400">{h.weight}</td>
              <td className={`text-right px-1 font-bold ${h.ret.startsWith('+') ? 'text-[#00ff00]' : 'text-red-500'}`}>{h.ret}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-[#111] border border-[#222] p-4 text-center">
          <div className="text-gray-500 uppercase text-[9px] mb-1">Active Risk</div>
          <div className="text-white font-bold text-lg">2.14%</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-4 text-center">
          <div className="text-gray-500 uppercase text-[9px] mb-1">Information Ratio</div>
          <div className="text-[#00ff00] font-bold text-lg">0.82</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-4 text-center">
          <div className="text-gray-500 uppercase text-[9px] mb-1">Beta (Ex-Ante)</div>
          <div className="text-[#ffb900] font-bold text-lg">1.12</div>
        </div>
      </div>
    </div>
  );
};
