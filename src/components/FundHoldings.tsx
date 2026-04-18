"use client";

import React from 'react';

interface FUNDProps {
  ticker: string;
}

export const FundHoldings = ({ ticker }: FUNDProps) => {
  const funds = [
    { fund: "Vanguard Total Stock Market", shares: "42.5M", change: "+1.2M", date: "03/31/26", pct: "0.27%" },
    { fund: "SPDR S&P 500 ETF Trust", shares: "38.2M", change: "-0.5M", date: "04/12/26", pct: "0.24%" },
    { fund: "iShares Core S&P 500 ETF", shares: "35.1M", change: "0.0", date: "04/10/26", pct: "0.22%" },
    { fund: "Fidelity 500 Index Fund", shares: "29.4M", change: "+0.8M", date: "03/31/26", pct: "0.19%" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - FUND (Fund Ownership)</span>
        <span>AGGREGATE HOLDINGS</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Mutual Fund / ETF</th>
            <th className="text-right">Shares Held</th>
            <th className="text-right">Change</th>
            <th className="text-right">Port %</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {funds.map((f, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 font-bold text-blue-400">{f.fund}</td>
              <td className="text-right font-bold tabular-nums">{f.shares}</td>
              <td className={`text-right ${f.change.startsWith('+') ? 'text-[#00ff00]' : f.change.startsWith('-') ? 'text-red-500' : 'text-gray-500'}`}>{f.change}</td>
              <td className="text-right text-gray-500">{f.pct}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
