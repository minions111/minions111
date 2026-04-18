"use client";

import React from 'react';

export const CurrencyMatrix = () => {
  const currencies = ["USD", "EUR", "JPY", "GBP", "AUD", "CAD", "CHF"];
  const rates: Record<string, Record<string, string>> = {
    "USD": { "EUR": "0.92", "JPY": "149.2", "GBP": "0.78", "AUD": "1.52", "CAD": "1.35", "CHF": "0.88" },
    "EUR": { "USD": "1.08", "JPY": "161.4", "GBP": "0.85", "AUD": "1.64", "CAD": "1.46", "CHF": "0.95" },
    "JPY": { "USD": "0.0067", "EUR": "0.0062", "GBP": "0.0052", "AUD": "0.010", "CAD": "0.009", "CHF": "0.005" },
  };

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>FXIP - GLOBAL CURRENCY MATRIX</span>
        <span>CROSS RATES: REAL-TIME</span>
      </div>

      <div className="flex-1 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-3 bg-[#111] border border-[#222] text-[#ffb900]">CROSS</th>
              {currencies.map(c => (
                <th key={c} className="p-3 bg-[#111] border border-[#222] text-white font-bold">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currencies.map(row => (
              <tr key={row}>
                <td className="p-3 bg-[#111] border border-[#222] text-white font-bold">{row}</td>
                {currencies.map(col => {
                  if (row === col) return <td key={col} className="p-3 border border-[#222] bg-gray-900/30 text-gray-700 text-center">--</td>;
                  const rate = rates[row]?.[col] || (Math.random() * 2).toFixed(2);
                  return (
                    <td key={col} className="p-3 border border-[#222] text-white text-right tabular-nums group hover:bg-[#ffb900] hover:text-black cursor-pointer transition-colors">
                      {rate}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex gap-8">
        <div className="flex flex-col">
          <span className="text-gray-500 uppercase text-[9px]">DXY Index</span>
          <span className="text-xl font-bold text-white">103.45 <span className="text-[#00ff00] text-sm">+0.12%</span></span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 uppercase text-[9px]">Volatility Index (VXY)</span>
          <span className="text-xl font-bold text-white">8.42 <span className="text-red-500 text-sm">-1.24%</span></span>
        </div>
      </div>
    </div>
  );
};
