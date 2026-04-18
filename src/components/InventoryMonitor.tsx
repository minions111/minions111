"use client";

import React from 'react';

export const InventoryMonitor = () => {
  const inventory = [
    { name: "Cushing Crude Hub", current: "34.5M", capacity: "78.4M", utilization: "44%", chg: "+1.2M" },
    { name: "US Strategic Reserve", current: "365.2M", capacity: "714.0M", utilization: "51%", chg: "0.0" },
    { name: "European Gas Storage", current: "62.4B", capacity: "105.0B", utilization: "59%", chg: "-2.1B" },
    { name: "China Crude Stockpile", current: "952M", capacity: "1.2B", utilization: "79%", chg: "+4.5M" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>INV - GLOBAL COMMODITY INVENTORY</span>
        <span>NY 23:42:05</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-2">Storage Hub / Reserve</th>
            <th className="text-right">Current level</th>
            <th className="text-right">Util %</th>
            <th className="text-right">Net Chg</th>
          </tr>
        </thead>
        <tbody className="text-white text-[10px]">
          {inventory.map((i, idx) => (
            <tr key={idx} className="border-b border-[#111] hover:bg-[#111]">
              <td className="py-2 font-bold text-blue-400">{i.name}</td>
              <td className="text-right font-bold tabular-nums">{i.current}</td>
              <td className="text-right text-[#ffb900]">{i.utilization}</td>
              <td className={`text-right ${i.chg.startsWith('+') ? 'text-[#00ff00]' : 'text-red-500'}`}>{i.chg}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-8 bg-blue-950/10 border border-blue-900/30 p-4 rounded text-blue-400 text-[10px]">
        <div className="font-bold mb-1 uppercase">Inventory Note:</div>
        Drawdowns in Cushing hubs have accelerated in the last 48 hours due to export demand shift. Utilization across European gas reserves remains above 5Y seasonal averages (59% vs 42%).
      </div>
    </div>
  );
};
