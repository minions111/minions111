"use client";

import React from 'react';

export const YieldSpreadAnalysis = () => {
  const yields = [
    { security: "US Generic Govt 2Y", yield: "4.921", change: "+0.012", spread: "--" },
    { security: "US Generic Govt 5Y", yield: "4.654", change: "+0.008", spread: "-26.7" },
    { security: "US Generic Govt 10Y", yield: "4.612", change: "+0.015", spread: "-30.9" },
    { security: "US Generic Govt 30Y", yield: "4.720", change: "+0.005", spread: "-20.1" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>YAS - YIELD & SPREAD ANALYSIS</span>
        <span>BENCHMARK: UST 2Y</span>
      </div>

      <div className="flex-1">
        <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">US Treasury Curve</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b border-[#222] text-[10px]">
              <th className="py-1">Security</th>
              <th className="text-right">Yield</th>
              <th className="text-right">Change</th>
              <th className="text-right">Spread (bps)</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {yields.map((y, i) => (
              <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
                <td className="py-2 text-blue-400 font-bold">{y.security}</td>
                <td className="text-right font-bold">{y.yield}</td>
                <td className="text-right text-[#00ff00]">{y.change}</td>
                <td className="text-right text-gray-400">{y.spread}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-8 bg-[#111] border border-[#222] p-4 text-center">
          <div className="text-gray-500 uppercase text-[9px] mb-1">Curve Sentiment</div>
          <div className="text-xl font-bold text-red-500">INVERTED</div>
          <p className="text-[10px] text-gray-400 mt-2">
            The 2s10s spread remains negative at -30.9 bps, signaling continued recessionary expectations in the bond market.
          </p>
        </div>
      </div>
    </div>
  );
};
