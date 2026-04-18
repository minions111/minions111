"use client";

import React from 'react';

export const TradingHistory = () => {
  const blotter = [
    { time: "14:15:33", side: "BUY", ticker: "AAPL", qty: "500", price: "185.12", status: "FILLED" },
    { time: "13:42:10", side: "SELL", ticker: "TSLA", qty: "100", price: "194.20", status: "FILLED" },
    { time: "11:05:55", side: "BUY", ticker: "NVDA", qty: "1,200", price: "722.45", status: "FILLED" },
    { time: "09:32:15", side: "BUY", ticker: "MSFT", qty: "250", price: "412.10", status: "FILLED" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>BLOT - TRADING BLOTTER / HISTORY</span>
        <span>SESSION: 2026-04-17</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Time</th>
            <th>Side</th>
            <th>Ticker</th>
            <th className="text-right">Qty</th>
            <th className="text-right">Price</th>
            <th className="text-center">Status</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {blotter.map((t, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 text-gray-500">{t.time}</td>
              <td className={t.side === 'BUY' ? 'text-[#00ff00] font-bold' : 'text-red-500 font-bold'}>{t.side}</td>
              <td className="text-blue-400 font-bold">{t.ticker}</td>
              <td className="text-right tabular-nums font-bold">{t.qty}</td>
              <td className="text-right tabular-nums">{t.price}</td>
              <td className="text-center">
                <span className="bg-blue-900/40 text-blue-400 px-2 rounded-sm text-[8px] border border-blue-900">{t.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-auto pt-6 grid grid-cols-2 gap-4">
        <div className="bg-[#111] p-3 border border-[#222] flex justify-between">
          <span className="text-gray-500 uppercase text-[9px]">Gross Value</span>
          <span className="text-white font-bold">$1,242,150</span>
        </div>
        <div className="bg-[#111] p-3 border border-[#222] flex justify-between">
          <span className="text-gray-500 uppercase text-[9px]">Net Commission</span>
          <span className="text-[#ffb900] font-bold">$42.50</span>
        </div>
      </div>
    </div>
  );
};
