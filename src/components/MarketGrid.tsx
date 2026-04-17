"use client";

import React from 'react';
import { MOCK_STOCKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export const MarketGrid = () => {
  return (
    <div className="bg-black text-xs font-mono border-r border-[#333] h-full overflow-y-auto">
      <div className="grid grid-cols-5 bg-[#1a1a1a] p-2 text-gray-400 border-b border-[#333]">
        <div className="col-span-2">Security</div>
        <div className="text-right">Price</div>
        <div className="text-right">Change</div>
        <div className="text-right">%Chg</div>
      </div>
      {MOCK_STOCKS.map((stock) => (
        <div key={stock.symbol} className="grid grid-cols-5 p-2 border-b border-[#222] hover:bg-[#111] cursor-pointer">
          <div className="col-span-2 text-[#ffb900]">{stock.symbol} Equity</div>
          <div className="text-right text-white font-bold">{stock.price.toFixed(2)}</div>
          <div className={cn(
            "text-right",
            stock.change > 0 ? "text-[#00ff00]" : "text-[#ff0000]"
          )}>
            {stock.change > 0 ? `+${stock.change.toFixed(2)}` : stock.change.toFixed(2)}
          </div>
          <div className={cn(
            "text-right",
            stock.pct > 0 ? "text-[#00ff00]" : "text-[#ff0000]"
          )}>
            {stock.pct > 0 ? `+${stock.pct.toFixed(2)}%` : `${stock.pct.toFixed(2)}%`}
          </div>
        </div>
      ))}
    </div>
  );
};
