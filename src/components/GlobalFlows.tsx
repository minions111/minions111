"use client";

import React from 'react';
import { ArrowRight, ArrowDownRight, ArrowUpRight } from 'lucide-react';

export const GlobalFlows = () => {
  const flows = [
    { from: "US", to: "JP", asset: "EQUITIES", amount: "$12.4B", trend: "up" },
    { from: "EU", to: "US", asset: "TREASURIES", amount: "$45.1B", trend: "up" },
    { from: "CN", to: "EU", asset: "DIRECT INV", amount: "$8.2B", trend: "down" },
    { from: "ME", to: "US", asset: "ENERGY FUT", amount: "$15.4B", trend: "neutral" },
    { from: "UK", to: "IN", asset: "SERVICES", amount: "$3.1B", trend: "up" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>FLOW - GLOBAL CAPITAL FLOW MONITOR</span>
        <span>PERIOD: LAST 30 DAYS (EST)</span>
      </div>

      <div className="grid grid-cols-1 gap-2 flex-1">
        {flows.map((f, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-4 flex items-center justify-between hover:border-[#ffb900] cursor-pointer group">
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-bold w-8">{f.from}</span>
                  <ArrowRight size={14} className="text-gray-600" />
                  <span className="text-[#ffb900] font-bold w-8">{f.to}</span>
               </div>
               <div className="border-l border-[#333] pl-6">
                  <div className="text-white font-bold text-[10px] uppercase">{f.asset}</div>
                  <div className="text-gray-500 text-[8px] uppercase">Cross-Border Transaction</div>
               </div>
            </div>
            <div className="flex items-center gap-8">
               <div className="text-right">
                  <div className="text-lg font-bold text-white tabular-nums">{f.amount}</div>
                  <div className="text-gray-600 text-[8px] uppercase">Net Volume</div>
               </div>
               <div className={f.trend === 'up' ? 'text-[#00ff00]' : f.trend === 'down' ? 'text-red-500' : 'text-gray-500'}>
                  {f.trend === 'up' && <ArrowUpRight size={20} />}
                  {f.trend === 'down' && <ArrowDownRight size={20} />}
                  {f.trend === 'neutral' && <ArrowRight size={20} />}
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-900/10 border border-blue-900/30 flex justify-between items-center">
         <span className="text-gray-400 uppercase text-[9px]">Global Liquidity Index (GLI)</span>
         <span className="text-[#00ff00] font-bold text-lg">104.2 (+2.1%)</span>
      </div>
    </div>
  );
};
