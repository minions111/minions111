"use client";

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

export const OptionAdjustedSpread = () => {
  const data = [
    { date: 'JAN', oas: 145, zSpread: 162 },
    { date: 'FEB', oas: 138, zSpread: 155 },
    { date: 'MAR', oas: 152, zSpread: 170 },
    { date: 'APR', oas: 142, zSpread: 158 },
    { date: 'MAY', oas: 128, zSpread: 142 },
    { date: 'JUN', oas: 135, zSpread: 152 },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>OAS - OPTION ADJUSTED SPREAD ANALYSIS</span>
        <span>INDEX: CORP BOND AGG</span>
      </div>

      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis dataKey="date" stroke="#666" fontSize={10} />
            <YAxis orientation="right" stroke="#666" fontSize={10} domain={['auto', 'auto']} tickFormatter={(v) => `${v} bps`} />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Area type="monotone" dataKey="oas" stroke="#ffb900" fill="#ffb90011" strokeWidth={2} name="OAS" isAnimationActive={false} />
            <Area type="monotone" dataKey="zSpread" stroke="#3b82f6" fill="transparent" strokeWidth={1} strokeDasharray="5 5" name="Z-Spread" isAnimationActive={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-[#111] p-4 border border-[#333] grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <div className="text-gray-500 uppercase text-[8px]">Effective Duration</div>
          <div className="text-xl font-bold text-white">6.42 yrs</div>
        </div>
        <div>
          <div className="text-gray-500 uppercase text-[8px]">Effective Convexity</div>
          <div className="text-xl font-bold text-white">0.58</div>
        </div>
        <div>
          <div className="text-gray-500 uppercase text-[8px]">Volatility (Model)</div>
          <div className="text-xl font-bold text-[#00ff00]">12.4%</div>
        </div>
        <div>
          <div className="text-gray-500 uppercase text-[8px]">Option Cost</div>
          <div className="text-xl font-bold text-red-500">17 bps</div>
        </div>
      </div>
    </div>
  );
};
