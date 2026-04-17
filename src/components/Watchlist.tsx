"use client";

import React from 'react';
import { MOCK_STOCKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const Watchlist = () => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs">
      <div className="bg-[#1a1a1a] p-2 border-b border-[#333] flex justify-between items-center">
        <span className="text-[#ffb900] font-bold text-base">WL - CUSTOM WATCHLIST</span>
        <button className="text-gray-400 border border-[#444] px-2 hover:bg-[#222]">EDIT</button>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full text-left">
          <thead className="bg-[#111] text-gray-500 sticky top-0">
            <tr>
              <th className="p-2 border-b border-[#333]">SYMBOL</th>
              <th className="p-2 border-b border-[#333] text-right">LAST</th>
              <th className="p-2 border-b border-[#333] text-right">CHANGE</th>
              <th className="p-2 border-b border-[#333] text-right">%CHG</th>
              <th className="p-2 border-b border-[#333] text-right">VOLUME</th>
              <th className="p-2 border-b border-[#333] text-right">YTD %</th>
            </tr>
          </thead>
          <tbody>
            {MOCK_STOCKS.map((stock) => (
              <tr key={stock.symbol} className="border-b border-[#222] hover:bg-[#111] cursor-pointer">
                <td className="p-2 text-[#ffb900] font-bold">{stock.symbol} US</td>
                <td className="p-2 text-right text-white font-bold">{stock.price.toFixed(2)}</td>
                <td className={cn(
                  "p-2 text-right",
                  stock.change >= 0 ? "text-[#00ff00]" : "text-[#ff0000]"
                )}>
                  {stock.change >= 0 ? `+${stock.change.toFixed(2)}` : stock.change.toFixed(2)}
                </td>
                <td className={cn(
                  "p-2 text-right",
                  stock.pct >= 0 ? "text-[#00ff00]" : "text-[#ff0000]"
                )}>
                  {stock.pct >= 0 ? `+${stock.pct.toFixed(2)}%` : `${stock.pct.toFixed(2)}%`}
                </td>
                <td className="p-2 text-right text-white">{(Math.random() * 100).toFixed(2)}M</td>
                <td className="p-2 text-right text-[#00ff00]">{(Math.random() * 10).toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
