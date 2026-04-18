"use client";

import React from 'react';
import { Diamond, Watch, Car, Home } from 'lucide-react';

export const PoshMarket = () => {
  const items = [
    { cat: "WATCHES", item: "PATEK PHILIPPE NAUTILUS 5711/1A", price: "$145,000", delta: "+2.4%" },
    { cat: "ART", item: "WARHOL 'MARILYN' (1967 PRINT)", price: "$3,200,000", delta: "-0.8%" },
    { cat: "CARS", item: "FERRARI 296 GTB (2024)", price: "$342,000", delta: "+0.0%" },
    { cat: "REAL ESTATE", item: "PENTHOUSE - 432 PARK AVE", price: "$78,000,000", delta: "-1.2%" },
    { cat: "WINE", item: "DOMAINE DE LA ROMANÉE-CONTI 2015", price: "$22,500", delta: "+5.1%" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto text-[#ffb900]">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>POSH - THE BLOOMBERG LUXURY INDEX</span>
        <span>MARKET: EXOTICS</span>
      </div>

      <div className="flex-1">
        <table className="w-full">
          <thead className="text-gray-500 uppercase text-[9px] border-b border-[#333]">
            <tr>
              <th className="p-2 text-left font-normal">Category</th>
              <th className="p-2 text-left font-normal">Asset / Item</th>
              <th className="p-2 text-right font-normal">Last Price</th>
              <th className="p-2 text-right font-normal">1Y Change</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it, i) => (
              <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer group">
                <td className="p-2 text-gray-400">{it.cat}</td>
                <td className="p-2 text-white font-bold">{it.item}</td>
                <td className="p-2 text-right text-[#00ff00] tabular-nums font-bold">{it.price}</td>
                <td className={it.delta.startsWith('+') ? "p-2 text-right text-[#00ff00]" : "p-2 text-right text-red-500"}>{it.delta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 flex gap-4">
        <div className="flex-1 bg-[#111] p-3 border border-[#333] text-center">
          <div className="text-gray-500 text-[9px]">LUXURY SENTIMENT</div>
          <div className="text-2xl font-bold text-[#00ff00]">BULLISH</div>
        </div>
        <div className="flex-1 bg-[#111] p-3 border border-[#333] text-center">
          <div className="text-gray-500 text-[9px]">AUCTION VOLUME</div>
          <div className="text-2xl font-bold text-white">$1.2B</div>
        </div>
      </div>
    </div>
  );
};
