"use client";

import React from 'react';

export const ETFMonitor = () => {
  const etfs = [
    { ticker: "SPY US", name: "SPDR S&P 500 ETF", flow: "+1,245M", assets: "502B", expense: "0.09%" },
    { ticker: "QQQ US", name: "INVESCO QQQ TRUST", flow: "+850M", assets: "254B", expense: "0.20%" },
    { ticker: "IWM US", name: "ISHARES RUSSELL 2000", flow: "-120M", assets: "68B", expense: "0.19%" },
    { ticker: "GLD US", name: "SPDR GOLD SHARES", flow: "+45M", assets: "58B", expense: "0.40%" },
    { ticker: "HYG US", name: "ISHARES IBOXX HIGH YIELD", flow: "-310M", assets: "18B", expense: "0.49%" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>ETF - GLOBAL ETF MONITOR</span>
        <span>FLOWS: 24H</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Symbol</th>
            <th>Name</th>
            <th className="text-right">Net Flow</th>
            <th className="text-right">Total Assets</th>
            <th className="text-right">Expense</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {etfs.map((e, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 font-bold text-blue-400">{e.ticker}</td>
              <td className="text-gray-400">{e.name}</td>
              <td className={`text-right font-bold ${e.flow.startsWith('+') ? 'text-[#00ff00]' : 'text-red-500'}`}>{e.flow}</td>
              <td className="text-right font-bold tabular-nums">{e.assets}</td>
              <td className="text-right text-gray-500">{e.expense}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
