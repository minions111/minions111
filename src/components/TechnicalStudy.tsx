"use client";

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts';

export const TechnicalStudy = () => {
  const data = Array.from({ length: 50 }).map((_, i) => ({
    time: i,
    price: 150 + Math.sin(i / 5) * 20 + Math.random() * 5,
    bollUpper: 180 + Math.sin(i / 5) * 20,
    bollLower: 120 + Math.sin(i / 5) * 20,
  }));

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>TA - TECHNICAL ANALYSIS STUDY</span>
        <span>STUDY: BOLLINGER BANDS</span>
      </div>

      <div className="flex-1 min-h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis hide />
            <YAxis orientation="right" stroke="#666" fontSize={10} domain={['auto', 'auto']} />
            <Area type="monotone" dataKey="bollUpper" stroke="#444" fill="#111" strokeDasharray="5 5" isAnimationActive={false} />
            <Area type="monotone" dataKey="bollLower" stroke="#444" fill="#000" strokeDasharray="5 5" isAnimationActive={false} />
            <Area type="monotone" dataKey="price" stroke="#ffb900" fill="transparent" strokeWidth={2} isAnimationActive={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex gap-8 text-[10px]">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-[#ffb900]" /> <span className="text-white">Price</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-[#444] border-t border-dashed" /> <span className="text-gray-500">Bollinger Bands (20, 2)</span>
        </div>
      </div>
    </div>
  );
};
