"use client";

import React from 'react';

export const DarkPoolMonitor = () => {
  const blocks = [
    { time: "14:20:15", ticker: "AAPL", price: "185.92", size: "125,000", value: "23.2M", venue: "IDP" },
    { time: "14:18:42", ticker: "NVDA", price: "725.10", size: "15,000", value: "10.8M", venue: "SIGMA" },
    { time: "14:15:10", ticker: "MSFT", price: "415.12", size: "50,000", value: "20.7M", venue: "LX" },
    { time: "14:12:33", ticker: "TSLA", price: "193.50", size: "85,000", value: "16.4M", venue: "CROSSF" },
    { time: "14:05:55", ticker: "GOOGL", price: "147.60", size: "250,000", value: "36.9M", venue: "IDP" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>DP - DARK POOL & BLOCK MONITOR</span>
        <span>NY 14:22:00</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Time</th>
            <th>Ticker</th>
            <th className="text-right">Price</th>
            <th className="text-right">Size</th>
            <th className="text-right">Value</th>
            <th className="text-center">Venue</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {blocks.map((b, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 text-[#00ff00]">{b.time}</td>
              <td className="text-blue-400 font-bold">{b.ticker}</td>
              <td className="text-right tabular-nums">{b.price}</td>
              <td className="text-right font-bold text-[#ffb900]">{b.size}</td>
              <td className="text-right font-bold">{b.value}</td>
              <td className="text-center text-gray-500">{b.venue}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-[#111] border border-[#222] p-4 text-center">
          <div className="text-gray-500 uppercase text-[9px] mb-1">Total Dark Vol (1H)</div>
          <div className="text-white font-bold text-xl">1.2B USD</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-4 text-center">
          <div className="text-gray-500 uppercase text-[9px] mb-1">Avg Block Size</div>
          <div className="text-[#00ff00] font-bold text-xl">42.5K</div>
        </div>
      </div>
    </div>
  );
};
