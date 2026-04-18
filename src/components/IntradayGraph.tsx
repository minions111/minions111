"use client";

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export const IntradayGraph = () => {
  const data = Array.from({ length: 60 }).map((_, i) => ({
    time: i,
    price: 185.50 + Math.sin(i / 10) * 0.5 + Math.random() * 0.2
  }));

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>IGC - INTRADAY TICK-BY-TICK GRAPH</span>
        <span>NY 21:45:33</span>
      </div>

      <div className="flex-1 min-h-[350px]">
        <div className="flex justify-between items-center mb-2 text-[10px]">
          <span className="text-white font-bold uppercase">AAPL US Equity</span>
          <span className="text-[#00ff00] font-bold">185.92 +1.24</span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="1 1" stroke="#222" vertical={false} />
            <XAxis hide />
            <YAxis orientation="right" stroke="#666" fontSize={10} domain={['auto', 'auto']} />
            <Area
              type="stepAfter"
              dataKey="price"
              stroke="#00ff00"
              fill="#00ff00"
              fillOpacity={0.05}
              strokeWidth={1}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex justify-between items-center text-[9px] text-gray-500 bg-[#111] p-2 border border-[#222]">
        <span>TICKS: 1,452</span>
        <span>VWAP: 185.42</span>
        <span>B/A: 185.91 / 185.93</span>
      </div>
    </div>
  );
};
