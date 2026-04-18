"use client";

import React from 'react';

interface CRPRProps {
  ticker: string;
}

export const CreditRatings = ({ ticker }: CRPRProps) => {
  const ratings = [
    { agency: "S&P Global", rating: "AA+", outlook: "Stable", date: "2025-11-12" },
    { agency: "Moody's", rating: "Aa1", outlook: "Stable", date: "2025-10-08" },
    { agency: "Fitch", rating: "AA", outlook: "Positive", date: "2026-01-15" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - CRPR (Credit Ratings)</span>
        <span>ISSUER LEVEL</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {ratings.map((r, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-4 text-center">
            <div className="text-gray-500 text-[8px] uppercase mb-1">{r.agency}</div>
            <div className="text-white text-2xl font-bold">{r.rating}</div>
            <div className="text-[#00ff00] text-[9px] uppercase mt-1">{r.outlook}</div>
          </div>
        ))}
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Agency</th>
            <th>Rating</th>
            <th>Outlook</th>
            <th className="text-right">Action Date</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {ratings.map((r, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 font-bold">{r.agency}</td>
              <td className="text-blue-400 font-bold">{r.rating}</td>
              <td className="text-gray-400">{r.outlook}</td>
              <td className="text-right text-gray-500">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
