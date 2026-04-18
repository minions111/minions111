"use client";

import React from 'react';

export const LiquidityAnalysis = () => {
  const data = [
    { ticker: "AAPL US", spread: "0.01", bps: "0.54", depth: "125M", turnover: "0.42%", score: "98" },
    { ticker: "MSFT US", spread: "0.02", bps: "0.48", depth: "85M", turnover: "0.31%", score: "96" },
    { ticker: "NVDA US", spread: "0.05", bps: "0.68", depth: "240M", turnover: "1.25%", score: "99" },
    { ticker: "TSLA US", spread: "0.03", bps: "1.54", depth: "52M", turnover: "1.10%", score: "92" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>LIQ - LIQUIDITY & EXECUTION ANALYSIS</span>
        <span>NY 23:02:44</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Security</th>
            <th className="text-right">Spread ($)</th>
            <th className="text-right">Spread (bps)</th>
            <th className="text-right">Mkt Depth</th>
            <th className="text-center">Score</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {data.map((d, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2 font-bold text-blue-400">{d.ticker}</td>
              <td className="text-right tabular-nums">{d.spread}</td>
              <td className="text-right text-[#00ff00]">{d.bps}</td>
              <td className="text-right font-bold text-white">{d.depth}</td>
              <td className="text-center">
                <span className="bg-green-900/40 text-green-400 px-2 rounded-sm border border-green-900 font-bold">{d.score}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 bg-blue-950/10 border border-blue-900/30 p-4 rounded text-blue-400 text-[10px]">
        <div className="font-bold mb-1 uppercase">Liquidity Insight:</div>
        Market depth in the Tech sector has increased by 14% WoW, following the normalization of volatility in the long-end of the yield curve. Institutional participation remains high in the top 5 names.
      </div>
    </div>
  );
};
