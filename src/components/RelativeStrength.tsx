"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export const RelativeStrength = () => {
  const data = Array.from({ length: 40 }).map((_, i) => ({
    time: i,
    security: 100 + Math.sin(i / 5) * 10 + i * 0.5,
    benchmark: 100 + i * 0.4,
  }));

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>REL - RELATIVE STRENGTH ANALYSIS</span>
        <span>BENCHMARK: S&P 500</span>
      </div>

      <div className="flex-1 min-h-[350px]">
        <h2 className="text-gray-500 uppercase text-[9px] mb-4">Price Performance vs Benchmark (100 Base)</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis hide />
            <YAxis orientation="right" stroke="#666" fontSize={10} domain={['auto', 'auto']} />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Legend verticalAlign="top" height={36} />
            <Line type="monotone" name="Selected Security" dataKey="security" stroke="#ffb900" strokeWidth={2} dot={false} isAnimationActive={false} />
            <Line type="monotone" name="S&P 500 Index" dataKey="benchmark" stroke="#666" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 bg-[#111] p-3 border border-[#222] flex justify-between items-center">
        <div className="text-gray-500 uppercase text-[9px]">Relative Alpha (YTD)</div>
        <div className="text-[#00ff00] font-bold text-lg">+4.2%</div>
      </div>
    </div>
  );
};
