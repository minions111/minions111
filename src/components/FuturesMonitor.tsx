"use client";

import React from 'react';

export const FuturesMonitor = () => {
  const futures = [
    { name: "S&P 500 E-MINI", month: "JUN 26", price: "5,124.50", change: "+12.25", pct: "+0.24%", color: "green" },
    { name: "NASDAQ 100 E-MINI", month: "JUN 26", price: "18,450.75", change: "+95.50", pct: "+0.52%", color: "green" },
    { name: "WTI CRUDE", month: "JUN 26", price: "85.92", change: "+0.47", pct: "+0.55%", color: "green" },
    { name: "BRENT CRUDE", month: "JUN 26", price: "90.55", change: "+0.43", pct: "+0.48%", color: "green" },
    { name: "GOLD 100 OZ", month: "JUN 26", price: "2,398.40", change: "+13.00", pct: "+0.54%", color: "green" },
    { name: "NATURAL GAS", month: "JUN 26", price: "1.785", change: "-0.014", pct: "-0.78%", color: "red" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>DRV - FUTURES & DERIVATIVES MONITOR</span>
        <span>GLOBEX TRADING</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[10px]">
            <th className="py-1">Contract</th>
            <th>Month</th>
            <th className="text-right">Price</th>
            <th className="text-right">% Change</th>
          </tr>
        </thead>
        <tbody className="text-white text-[11px]">
          {futures.map((f, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2 text-blue-400 font-bold">{f.name}</td>
              <td className="text-gray-500">{f.month}</td>
              <td className="text-right font-bold tabular-nums">{f.price}</td>
              <td className={`text-right font-bold ${f.color === 'green' ? 'text-[#00ff00]' : 'text-[#ff0000]'}`}>
                {f.pct}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-[#111] p-3 border border-[#222]">
          <div className="text-[#ffb900] font-bold mb-2 uppercase text-[9px]">Market Status</div>
          <div className="flex justify-between items-center">
            <span className="text-white font-bold">CME GLOBEX</span>
            <span className="text-[#00ff00] text-[9px] font-bold uppercase">Open</span>
          </div>
        </div>
        <div className="bg-[#111] p-3 border border-[#222]">
          <div className="text-[#ffb900] font-bold mb-2 uppercase text-[9px]">Trading Volume</div>
          <div className="flex justify-between items-center">
            <span className="text-white font-bold">1,452,100</span>
            <span className="text-gray-500 text-[9px] uppercase">Contracts</span>
          </div>
        </div>
      </div>
    </div>
  );
};
