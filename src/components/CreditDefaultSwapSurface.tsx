"use client";

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

export const CreditDefaultSwapSurface = () => {
  const data = [
    { maturity: '1Y', spread: 45 },
    { maturity: '2Y', spread: 52 },
    { maturity: '3Y', spread: 68 },
    { maturity: '5Y', spread: 92 },
    { maturity: '10Y', spread: 124 },
    { maturity: '20Y', spread: 145 },
    { maturity: '30Y', spread: 158 },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>CDSS - CREDIT DEFAULT SWAP TERM STRUCTURE</span>
        <span>INDEX: CDX IG S42</span>
      </div>

      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis dataKey="maturity" stroke="#666" fontSize={10} />
            <YAxis orientation="right" stroke="#666" fontSize={10} domain={['auto', 'auto']} tickFormatter={(v) => `${v} bps`} />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Area type="monotone" dataKey="spread" stroke="#ef4444" fill="#ef444422" strokeWidth={2} isAnimationActive={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 bg-[#111] p-4 border border-[#333]">
         <div className="flex justify-between items-center">
            <div>
               <div className="text-gray-500 uppercase text-[9px]">Curve Slope (1Y-30Y)</div>
               <div className="text-xl font-bold text-white">113 bps</div>
            </div>
            <div className="text-right">
               <div className="text-gray-500 uppercase text-[9px]">Implied Prob Default</div>
               <div className="text-xl font-bold text-red-500">1.84%</div>
            </div>
         </div>
      </div>
    </div>
  );
};
