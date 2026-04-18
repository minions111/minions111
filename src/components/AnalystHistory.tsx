"use client";

import React from 'react';

interface ANRHProps {
  ticker: string;
}

export const AnalystHistory = ({ ticker }: ANRHProps) => {
  const history = [
    { date: "04/15/26", firm: "Goldman Sachs", action: "Reiterated", rating: "BUY", target: "220.00" },
    { date: "03/22/26", firm: "Morgan Stanley", action: "Upgraded", rating: "OVERWEIGHT", target: "215.00" },
    { date: "02/10/26", firm: "JPMorgan", action: "Initiated", rating: "OVERWEIGHT", target: "225.00" },
    { date: "01/15/26", firm: "BofA Securities", action: "Reiterated", rating: "NEUTRAL", target: "190.00" },
    { date: "12/05/25", firm: "UBS", action: "Downgraded", rating: "NEUTRAL", target: "185.00" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - ANRH (Analyst Rating History)</span>
        <span>PERIOD: 12M</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Action Date</th>
            <th>Firm</th>
            <th>Action</th>
            <th>Rating</th>
            <th className="text-right">Target</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {history.map((h, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2 text-gray-500">{h.date}</td>
              <td className="text-blue-400 font-bold">{h.firm}</td>
              <td className="uppercase text-[9px]">{h.action}</td>
              <td>
                <span className={`px-1 rounded-sm ${
                  h.rating === 'BUY' || h.rating === 'OVERWEIGHT' ? 'bg-green-900/40 text-green-400' :
                  h.rating === 'SELL' || h.rating === 'UNDERWEIGHT' ? 'bg-red-900/40 text-red-400' : 'bg-gray-800 text-gray-400'
                }`}>{h.rating}</span>
              </td>
              <td className="text-right font-bold tabular-nums">{h.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
