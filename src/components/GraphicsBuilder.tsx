"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

export const GraphicsBuilder = () => {
  const data = Array.from({ length: 20 }).map((_, i) => ({
    time: i,
    AAPL: 180 + Math.random() * 10,
    MSFT: 410 + Math.random() * 15,
    NVDA: 720 + Math.random() * 20,
  }));

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>G - MULTI-SECURITY GRAPHICS BUILDER</span>
        <span>NY 21:42:11</span>
      </div>

      <div className="flex-1 min-h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis hide />
            <YAxis orientation="right" stroke="#666" fontSize={10} domain={['auto', 'auto']} />
            <Legend verticalAlign="top" height={36}/>
            <Line type="monotone" dataKey="AAPL" stroke="#ffb900" strokeWidth={2} dot={false} isAnimationActive={false} />
            <Line type="monotone" dataKey="MSFT" stroke="#00ff00" strokeWidth={2} dot={false} isAnimationActive={false} />
            <Line type="monotone" dataKey="NVDA" stroke="#3b82f6" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 p-3 bg-[#111] border border-[#222] text-[10px] text-gray-500">
        Normalize: [OFF] | Frequency: [DAILY] | Time Range: [1M]
      </div>
    </div>
  );
};
