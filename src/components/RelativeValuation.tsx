"use client";

import React from 'react';

interface RVProps {
  ticker: string;
}

export const RelativeValuation = ({ ticker }: RVProps) => {
  const multiples = [
    { name: "P/E Ratio (Current)", val: "28.4x", low: "22.5x", high: "35.2x", median: "26.4x" },
    { name: "EV/EBITDA", val: "22.1x", low: "18.4x", high: "28.5x", median: "20.5x" },
    { name: "P/Sales", val: "7.42x", low: "5.10x", high: "9.20x", median: "6.85x" },
    { name: "P/Book", val: "38.5x", low: "30.2x", high: "45.1x", median: "34.2x" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - RV (Relative Valuation Ranges)</span>
        <span>PERIOD: 5Y HISTORICAL</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Multiple</th>
            <th className="text-right">Current</th>
            <th className="text-right">5Y Low</th>
            <th className="text-right">5Y Median</th>
            <th className="text-right">5Y High</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {multiples.map((m, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 font-bold text-blue-400">{m.name}</td>
              <td className="text-right font-bold text-[#ffb900]">{m.val}</td>
              <td className="text-right text-gray-500">{m.low}</td>
              <td className="text-right text-white">{m.median}</td>
              <td className="text-right text-gray-500">{m.high}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 bg-[#111] p-4 border border-[#222]">
        <h2 className="text-[#ffb900] font-bold mb-2 uppercase text-[10px]">Valuation Insight</h2>
        <p className="text-gray-400 leading-relaxed text-[10px]">
          Current P/E of 28.4x is trading at a 7.6% premium to its 5Y median of 26.4x. EV/EBITDA also shows similar expansion. Institutional positioning suggests this premium is justified by higher services margin mix and AI-driven growth expectations.
        </p>
      </div>
    </div>
  );
};
