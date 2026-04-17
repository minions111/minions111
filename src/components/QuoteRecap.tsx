"use client";

import React from 'react';

interface QRProps {
  ticker: string;
}

export const QuoteRecap = ({ ticker }: QRProps) => {
  const trades = [
    { time: "15:59:59", price: "185.92", size: "1,200", ex: "NASD", cond: "@" },
    { time: "15:59:58", price: "185.91", size: "500", ex: "NYSE", cond: "@" },
    { time: "15:59:57", price: "185.92", size: "2,400", ex: "NASD", cond: "@" },
    { time: "15:59:55", price: "185.93", size: "100", ex: "BATS", cond: "@" },
    { time: "15:59:54", price: "185.92", size: "15,000", ex: "NASD", cond: "BLOCK" },
    { time: "15:59:50", price: "185.90", size: "300", ex: "ARCA", cond: "@" },
    { time: "15:59:45", price: "185.89", size: "1,100", ex: "NYSE", cond: "@" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-[11px] p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - QR (Quote Recap)</span>
        <span>TRADES ONLY</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-1">Time</th>
            <th className="text-right">Price</th>
            <th className="text-right">Size</th>
            <th className="text-center">Ex</th>
            <th>Cond</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {trades.map((t, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-1 text-[#00ff00]">{t.time}</td>
              <td className="text-right font-bold">{t.price}</td>
              <td className={`text-right ${parseInt(t.size.replace(',','')) >= 10000 ? 'text-[#ffb900] font-bold' : ''}`}>{t.size}</td>
              <td className="text-center text-blue-400">{t.ex}</td>
              <td className="text-gray-500">{t.cond}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-auto pt-4 flex gap-4 text-[9px] text-gray-500 border-t border-[#222]">
        <span>VWAP: 184.85</span>
        <span>AVG SIZE: 425</span>
        <span>BLOCKS: 12</span>
      </div>
    </div>
  );
};
