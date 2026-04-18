"use client";

import React from 'react';

export const VolatilitySurface = () => {
  const strikes = ["-10%", "ATM", "+10%"];
  const tenors = ["1M", "3M", "6M", "1Y"];
  const matrix = [
    [32.5, 28.4, 30.1],
    [30.2, 26.5, 28.4],
    [28.5, 24.2, 26.8],
    [26.4, 22.1, 24.5],
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-6 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>SURF - IV VOLATILITY SURFACE</span>
        <span>SYMBOL: AAPL US</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-gray-500 uppercase text-[9px] mb-4">Implied Volatility Matrix (%)</h2>
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="p-2"></th>
              {strikes.map(s => <th key={s} className="p-2 text-gray-500 text-[9px] uppercase font-normal">{s}</th>)}
            </tr>
          </thead>
          <tbody>
            {matrix.map((row, i) => (
              <tr key={i}>
                <td className="p-2 text-gray-500 text-[10px] uppercase font-bold text-right pr-4">{tenors[i]}</td>
                {row.map((val, j) => (
                  <td key={j} className="p-5 border border-[#222] text-center font-bold tabular-nums text-[#ffb900] bg-blue-950/5">
                    {val.toFixed(1)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-3 bg-[#111] border border-[#222] text-[9px] text-gray-500 italic text-center">
        * Volatility surface interpolated using cubic-spline on listed option mid-prices.
      </div>
    </div>
  );
};
