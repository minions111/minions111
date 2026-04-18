"use client";

import React from 'react';
import { cn } from '@/lib/utils';

export const BusinessCycle = () => {
  const stages = [
    { name: "RECOVERY", status: "Past", color: "bg-blue-900/30" },
    { name: "EXPANSION", status: "Current", color: "bg-green-900/50" },
    { name: "OVERHEATING", status: "Projected", color: "bg-orange-900/30" },
    { name: "STAGFLATION", status: "Risk", color: "bg-red-900/20" },
    { name: "RECESSION", status: "Low Probability", color: "bg-gray-900/30" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-6 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>BCYC - GLOBAL BUSINESS CYCLE MONITOR</span>
        <span>STAGE: LATE EXPANSION</span>
      </div>

      <div className="flex-1 flex flex-col gap-6">
        <div className="grid grid-cols-5 gap-2 h-24">
          {stages.map((s, i) => (
            <div key={i} className={cn(
              "border border-[#333] p-2 flex flex-col justify-center items-center text-center",
              s.color,
              s.status === 'Current' ? 'border-[#00ff00] border-2 shadow-[0_0_10px_rgba(0,255,0,0.2)]' : ''
            )}>
              <div className="text-white font-bold text-[10px]">{s.name}</div>
              <div className="text-[8px] text-gray-500 uppercase mt-1">{s.status}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111] p-4 border border-[#222]">
            <h3 className="text-[#ffb900] font-bold mb-4 uppercase text-[9px]">Leading Indicators</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span>NEW ORDERS (ISM)</span> <span className="text-[#00ff00]">54.2</span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span>CONSUMER CONFIDENCE</span> <span className="text-red-500">102.1</span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span>YIELD CURVE SLOPE</span> <span className="text-red-500">-0.42</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-4 border border-[#222]">
            <h3 className="text-[#ffb900] font-bold mb-4 uppercase text-[9px]">Asset Class Preference</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span>EQUITIES</span> <span className="text-[#ffb900]">NEUTRAL</span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span>COMMODITIES</span> <span className="text-[#00ff00]">OVERWEIGHT</span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span>BONDS</span> <span className="text-red-500">UNDERWEIGHT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
