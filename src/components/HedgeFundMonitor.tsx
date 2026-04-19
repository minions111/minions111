"use client";

import React from 'react';
import { History, TrendingUp, TrendingDown, Users } from 'lucide-react';

export const HedgeFundMonitor = () => {
  const filings = [
    { fund: "BERKSHIRE HATHAWAY", ticker: "AAPL", action: "REDUCED", change: "-1.2%", value: "$165B" },
    { fund: "RENAISSANCE TECH", ticker: "NVDA", action: "INCREASED", change: "+15.4%", value: "$4.2B" },
    { fund: "BRIDGEWATER", ticker: "GLD", action: "NEW POS", change: "+100%", value: "$820M" },
    { fund: "TIGER GLOBAL", ticker: "MSFT", action: "REDUCED", change: "-4.5%", value: "$3.1B" },
    { fund: "PERSHING SQUARE", ticker: "GOOGL", action: "HELD", change: "0.0%", value: "$1.8B" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>13F - HEDGE FUND FILING MONITOR</span>
        <span>PERIOD: Q4 2023 REVEALED</span>
      </div>

      <div className="flex-1">
        <table className="w-full">
          <thead className="text-gray-500 uppercase text-[9px] border-b border-[#333]">
            <tr>
              <th className="p-2 text-left font-normal">Institution / Fund</th>
              <th className="p-2 text-left font-normal">Security</th>
              <th className="p-2 text-left font-normal">Action</th>
              <th className="p-2 text-right font-normal">Size (MV)</th>
              <th className="p-2 text-right font-normal">Chg</th>
            </tr>
          </thead>
          <tbody>
            {filings.map((f, i) => (
              <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer group">
                <td className="p-2 text-white font-bold uppercase">{f.fund}</td>
                <td className="p-2 text-blue-400 font-bold">{f.ticker}</td>
                <td className={`p-2 font-bold text-[9px] ${
                  f.action === 'INCREASED' || f.action === 'NEW POS' ? 'text-[#00ff00]' :
                  f.action === 'REDUCED' ? 'text-red-500' : 'text-gray-500'
                }`}>{f.action}</td>
                <td className="p-2 text-right text-white tabular-nums">{f.value}</td>
                <td className={`p-2 text-right tabular-nums ${f.change.startsWith('+') ? 'text-[#00ff00]' : 'text-red-500'}`}>
                  {f.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-blue-900/10 border border-blue-900/30 p-4">
         <h3 className="text-blue-400 font-bold mb-2 uppercase text-[9px]">Institutional Crowd Sentiment</h3>
         <div className="flex justify-between items-center">
            <span className="text-gray-400 uppercase text-[10px]">Smart Money Net Exposure</span>
            <span className="text-2xl font-bold text-[#00ff00]">BULLISH (+4.2%)</span>
         </div>
      </div>
    </div>
  );
};
