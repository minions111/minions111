"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

export const VolatilityAnalysis = () => {
  const data = [
    { strike: 160, vol: 32.5 },
    { strike: 170, vol: 28.4 },
    { strike: 180, vol: 25.1 },
    { strike: 185, vol: 24.5 },
    { strike: 190, vol: 26.2 },
    { strike: 200, vol: 29.5 },
    { strike: 210, vol: 33.1 },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>VCA - VOLATILITY ANALYSIS (SMILE)</span>
        <span>NY 21:32:05</span>
      </div>

      <div className="flex-1 min-h-[350px]">
        <h2 className="text-gray-500 uppercase text-[10px] mb-4">Implied Volatility Smile (30D)</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis dataKey="strike" stroke="#666" fontSize={10} label={{ value: 'STRIKE', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#666' }} />
            <YAxis orientation="right" stroke="#666" fontSize={10} domain={['auto', 'auto']} tickFormatter={(v) => `${v}%`} />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Line type="monotone" dataKey="vol" stroke="#ffb900" strokeWidth={3} dot={{ fill: '#ffb900' }} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 bg-[#111] border border-[#222] p-4">
        <div className="text-[#ffb900] font-bold mb-2 uppercase text-[10px]">Volatility Skew Summary</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-between border-b border-[#222] pb-1">
            <span className="text-gray-500">25D Put-Call Skew:</span>
            <span className="text-[#00ff00]">2.4 pts (Bullish)</span>
          </div>
          <div className="flex justify-between border-b border-[#222] pb-1">
            <span className="text-gray-500">ATM IV Percentile:</span>
            <span className="text-white font-bold">62%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
