"use client";

import React from 'react';

interface HPProps {
  ticker: string;
}

export const HistoricalPrices = ({ ticker }: HPProps) => {
  const prices = [
    { date: "04/17/26", open: "185.10", high: "186.50", low: "184.20", close: "185.92", volume: "38.2M" },
    { date: "04/16/26", open: "184.20", high: "185.80", low: "183.10", close: "184.68", volume: "41.5M" },
    { date: "04/15/26", open: "183.50", high: "184.90", low: "182.80", close: "184.22", volume: "35.1M" },
    { date: "04/14/26", open: "185.80", high: "186.20", low: "183.40", close: "183.64", volume: "45.2M" },
    { date: "04/13/26", open: "186.20", high: "187.50", low: "185.10", close: "185.90", volume: "32.8M" },
    { date: "04/10/26", open: "184.90", high: "186.40", low: "184.20", close: "186.12", volume: "39.4M" },
    { date: "04/09/26", open: "183.20", high: "185.10", low: "182.90", close: "184.85", volume: "37.6M" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-[11px] p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - HP (Historical Prices)</span>
        <span>RANGE: 10 DAYS</span>
      </div>

      <table className="w-full text-right">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-1 text-left">Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {prices.map((p, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 text-left text-gray-400">{p.date}</td>
              <td>{p.open}</td>
              <td className="text-[#00ff00]">{p.high}</td>
              <td className="text-[#ff0000]">{p.low}</td>
              <td className="font-bold">{p.close}</td>
              <td className="text-blue-400">{p.volume}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
