"use client";

import React from 'react';

interface CACSProps {
  ticker: string;
}

export const CorporateActions = ({ ticker }: CACSProps) => {
  const actions = [
    { date: "05/15/2026", type: "Cash Dividend", amt: "0.25 USD", status: "Announced" },
    { date: "02/10/2026", type: "Cash Dividend", amt: "0.24 USD", status: "Effective" },
    { date: "08/28/2025", type: "Stock Split", amt: "4-for-1", status: "Effective" },
    { date: "06/12/2025", type: "Share Buyback", amt: "50.0B USD", status: "Completed" },
    { date: "05/09/2025", type: "Cash Dividend", amt: "0.23 USD", status: "Effective" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - CACS (Corporate Actions)</span>
        <span>ALL TYPES</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-1">Action Date</th>
            <th>Type</th>
            <th className="text-right">Amount/Ratio</th>
            <th className="text-right">Status</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {actions.map((a, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 text-gray-400">{a.date}</td>
              <td className="font-bold">{a.type}</td>
              <td className="text-right text-[#00ff00]">{a.amt}</td>
              <td className="text-right text-blue-400 uppercase text-[9px]">{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
