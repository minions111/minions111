"use client";

import React from 'react';

export const CorrelationMatrix = () => {
  const assets = ["SPX", "NDX", "GOLD", "WTI", "UST10Y"];
  const matrix = [
    [1.00, 0.85, -0.12, 0.42, -0.65],
    [0.85, 1.00, -0.05, 0.38, -0.72],
    [-0.12, -0.05, 1.00, 0.15, 0.10],
    [0.42, 0.38, 0.15, 1.00, -0.15],
    [-0.65, -0.72, 0.10, -0.15, 1.00],
  ];

  const getColor = (val: number) => {
    if (val > 0.7) return "text-[#00ff00]";
    if (val < -0.5) return "text-[#ff0000]";
    return "text-gray-400";
  };

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-6 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>CORR - ASSET CORRELATION MATRIX</span>
        <span>PERIOD: 90D</span>
      </div>

      <div className="flex-1 flex items-center justify-center">
        <table className="border-collapse">
          <thead>
            <tr>
              <th className="p-2"></th>
              {assets.map(a => <th key={a} className="p-2 text-gray-500 text-[10px] uppercase font-normal">{a}</th>)}
            </tr>
          </thead>
          <tbody>
            {matrix.map((row, i) => (
              <tr key={i}>
                <td className="p-2 text-gray-500 text-[10px] uppercase font-bold text-right pr-4">{assets[i]}</td>
                {row.map((val, j) => (
                  <td key={j} className={`p-4 border border-[#222] text-center font-bold tabular-nums ${getColor(val)}`}>
                    {val.toFixed(2)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-3 bg-blue-950/10 border border-blue-900/30 rounded text-[10px] text-gray-500 text-center italic">
        * Matrix indicates Spearman correlation coefficients calculated using daily log returns.
      </div>
    </div>
  );
};
