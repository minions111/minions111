"use client";

import React from 'react';
import { cn } from '@/lib/utils';

const MOCK_HOLDINGS = [
  { symbol: "AAPL", qty: 50, avgPrice: 175.20, currentPrice: 185.92 },
  { symbol: "NVDA", qty: 10, avgPrice: 650.00, currentPrice: 726.13 },
  { symbol: "MSFT", qty: 20, avgPrice: 420.50, currentPrice: 415.10 },
];

export const Portfolio = () => {
  const totalMarketValue = MOCK_HOLDINGS.reduce((acc, h) => acc + (h.qty * h.currentPrice), 0);
  const totalCost = MOCK_HOLDINGS.reduce((acc, h) => acc + (h.qty * h.avgPrice), 0);
  const totalPnL = totalMarketValue - totalCost;

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs">
      <div className="bg-[#1a1a1a] p-2 border-b border-[#333] flex justify-between items-center">
        <span className="text-[#ffb900] font-bold text-base">PORTFOLIO SUMMARY - MAIN ACCT</span>
        <div className="text-right">
          <div className="text-gray-400">TOTAL P&L</div>
          <div className={cn("text-lg font-bold", totalPnL >= 0 ? "text-[#00ff00]" : "text-[#ff0000]")}>
            {totalPnL >= 0 ? "+" : ""}{totalPnL.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full text-left">
          <thead className="bg-[#111] text-gray-500 sticky top-0">
            <tr>
              <th className="p-2 border-b border-[#333]">SYMBOL</th>
              <th className="p-2 border-b border-[#333] text-right">QTY</th>
              <th className="p-2 border-b border-[#333] text-right">AVG PX</th>
              <th className="p-2 border-b border-[#333] text-right">LAST</th>
              <th className="p-2 border-b border-[#333] text-right">MKT VAL</th>
              <th className="p-2 border-b border-[#333] text-right">P&L</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_HOLDINGS.map((h) => {
              const pnl = (h.currentPrice - h.avgPrice) * h.qty;
              return (
                <tr key={h.symbol} className="border-b border-[#222] hover:bg-[#111]">
                  <td className="p-2 text-[#ffb900]">{h.symbol} US</td>
                  <td className="p-2 text-right text-white">{h.qty}</td>
                  <td className="p-2 text-right text-white">{h.avgPrice.toFixed(2)}</td>
                  <td className="p-2 text-right text-white">{h.currentPrice.toFixed(2)}</td>
                  <td className="p-2 text-right text-white">{(h.qty * h.currentPrice).toLocaleString()}</td>
                  <td className={cn("p-2 text-right", pnl >= 0 ? "text-[#00ff00]" : "text-[#ff0000]")}>
                    {pnl >= 0 ? "+" : ""}{pnl.toFixed(2)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="bg-[#222] p-2 grid grid-cols-3 gap-4 border-t border-[#333]">
        <div>
          <span className="text-gray-500">Buying Power:</span>
          <span className="ml-2 text-white">42,500.00</span>
        </div>
        <div>
          <span className="text-gray-500">Margin Used:</span>
          <span className="ml-2 text-white">12,400.00</span>
        </div>
        <div>
          <span className="text-gray-500">Day P&L:</span>
          <span className="ml-2 text-[#00ff00]">+1,240.50</span>
        </div>
      </div>
    </div>
  );
};
