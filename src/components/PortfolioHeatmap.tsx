"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export const PortfolioHeatmap = () => {
  const sectors = [
    { name: "TECH", weight: "35%", perf: "+2.4%", status: "over" },
    { name: "FIN", weight: "15%", perf: "-0.8%", status: "under" },
    { name: "HLTH", weight: "12%", perf: "+0.5%", status: "neutral" },
    { name: "CONS", weight: "10%", perf: "-1.2%", status: "under" },
    { name: "ENER", weight: "8%", perf: "+4.2%", status: "over" },
    { name: "UTIL", weight: "5%", perf: "-0.2%", status: "neutral" },
    { name: "COMM", weight: "15%", perf: "+1.8%", status: "over" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>PFHM - PORTFOLIO SECTOR HEATMAP</span>
        <span>BENCHMARK: S&P 500</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 flex-1">
        {sectors.map((s, i) => {
          const isPos = s.perf.startsWith('+');
          const opacity = Math.min(Math.abs(parseFloat(s.perf)) * 20 + 20, 100);

          return (
            <div
              key={i}
              className={cn(
                "p-4 flex flex-col justify-between border border-black group cursor-pointer transition-all hover:scale-[1.02]",
                isPos ? "bg-green-900/40" : "bg-red-900/40"
              )}
              style={{ backgroundColor: isPos ? `rgba(0, 255, 0, ${opacity/300})` : `rgba(255, 0, 0, ${opacity/300})` }}
            >
              <div className="flex justify-between items-start">
                <span className="text-white font-bold text-lg">{s.name}</span>
                <span className="text-[9px] text-gray-400 font-normal uppercase">{s.status}</span>
              </div>
              <div className="mt-4">
                <div className="text-xl font-bold text-white tabular-nums">{s.perf}</div>
                <div className="text-[10px] text-gray-500">WT: {s.weight}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 p-2 bg-[#111] border border-[#333] flex justify-between items-center text-[10px]">
         <div className="flex gap-4">
           <span className="text-gray-500 uppercase">Total Return: <span className="text-[#00ff00]">+1.12%</span></span>
           <span className="text-gray-500 uppercase">Tracking Error: <span className="text-white">1.4%</span></span>
         </div>
         <div className="flex gap-1 items-center">
            <div className="w-2 h-2 bg-red-900" />
            <div className="w-2 h-2 bg-red-700" />
            <div className="w-2 h-2 bg-gray-700" />
            <div className="w-2 h-2 bg-green-700" />
            <div className="w-2 h-2 bg-green-900" />
         </div>
      </div>
    </div>
  );
};
