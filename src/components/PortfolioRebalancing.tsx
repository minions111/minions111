"use client";

import React from 'react';

export const PortfolioRebalancing = () => {
  const assets = [
    { name: "Equities (US)", target: "60.0%", current: "64.2%", drift: "+4.2%", action: "SELL 4.2%" },
    { name: "Fixed Income", target: "30.0%", current: "28.5%", drift: "-1.5%", action: "BUY 1.5%" },
    { name: "Cash", target: "5.0%", current: "4.1%", drift: "-0.9%", action: "BUY 0.9%" },
    { name: "Alternatives", target: "5.0%", current: "3.2%", drift: "-1.8%", action: "BUY 1.8%" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>REBAL - PORTFOLIO DRIFT & REBALANCING</span>
        <span>MODEL: TARGET WEIGHTS</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Asset Class</th>
            <th className="text-right">Target</th>
            <th className="text-right">Current</th>
            <th className="text-right">Drift</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {assets.map((a, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 font-bold text-blue-400">{a.name}</td>
              <td className="text-right text-gray-500">{a.target}</td>
              <td className="text-right font-bold">{a.current}</td>
              <td className={`text-right font-bold ${a.drift.startsWith('+') ? 'text-red-500' : 'text-[#00ff00]'}`}>{a.drift}</td>
              <td className="text-center">
                <span className={`px-2 py-0.5 rounded-sm text-[8px] border ${a.action.startsWith('SELL') ? 'border-red-900 text-red-500' : 'border-green-900 text-green-500'}`}>{a.action}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 bg-[#111] border border-[#222] p-4 flex justify-between items-center">
        <div>
          <div className="text-gray-500 uppercase text-[9px]">Total Portfolio Drift</div>
          <div className="text-white font-bold text-xl">4.2% (Absolute)</div>
        </div>
        <button className="bg-[#ffb900] text-black font-bold py-2 px-6 uppercase text-[10px] hover:bg-white transition-colors">
          GENERATE REBAL TRADES
        </button>
      </div>
    </div>
  );
};
