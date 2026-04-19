"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export const CommodityPriceGrid = () => {
  const groups = [
    {
      name: "ENERGY",
      items: [
        { name: "WTI CRUDE", ticker: "CL1", price: "82.45", change: "+1.22", pct: "+1.50%" },
        { name: "BRENT CRUDE", ticker: "CO1", price: "87.12", change: "+1.08", pct: "+1.26%" },
        { name: "NATURAL GAS", ticker: "NG1", price: "1.824", change: "-0.042", pct: "-2.25%" },
      ]
    },
    {
      name: "METALS",
      items: [
        { name: "GOLD", ticker: "GC1", price: "2385.40", change: "+12.10", pct: "+0.51%" },
        { name: "SILVER", ticker: "SI1", price: "28.42", change: "+0.45", pct: "+1.61%" },
        { name: "COPPER", ticker: "HG1", price: "4.12", change: "-0.02", pct: "-0.48%" },
      ]
    },
    {
      name: "AGRICULTURE",
      items: [
        { name: "CORN", ticker: "C 1", price: "432.50", change: "+4.25", pct: "+0.99%" },
        { name: "WHEAT", ticker: "W 1", price: "552.25", change: "-12.50", pct: "-2.21%" },
        { name: "SOYBEANS", ticker: "S 1", price: "1182.40", change: "+18.20", pct: "+1.56%" },
      ]
    }
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>CPG - GLOBAL COMMODITY PRICE GRID</span>
        <span>SESSION: NY LATE</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {groups.map((g, i) => (
          <div key={i} className="space-y-4">
            <h2 className="text-white font-bold bg-[#111] p-1 px-2 border-l-2 border-[#ffb900] uppercase text-[9px]">{g.name}</h2>
            <div className="space-y-2">
              {g.items.map((it, j) => {
                const isUp = it.pct.startsWith('+');
                return (
                  <div key={j} className="bg-[#0a0a0a] border border-[#222] p-3 hover:border-[#ffb900] cursor-pointer">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400 font-bold">{it.name}</span>
                      <span className="text-gray-600 text-[8px]">{it.ticker}</span>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-white text-lg font-bold tabular-nums">{it.price}</span>
                      <div className={cn("text-right font-bold tabular-nums", isUp ? "text-[#00ff00]" : "text-red-500")}>
                         <div>{it.change}</div>
                         <div className="text-[9px]">{it.pct}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
