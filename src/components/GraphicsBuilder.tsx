"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

export const GraphicsBuilder = () => {
  const data = [
    { time: '09:30', aapl: 182.4, msft: 412.5, googl: 147.2 },
    { time: '10:30', aapl: 183.1, msft: 411.8, googl: 147.8 },
    { time: '11:30', aapl: 182.8, msft: 413.2, googl: 148.5 },
    { time: '12:30', aapl: 184.2, msft: 414.5, googl: 148.2 },
    { time: '13:30', aapl: 183.9, msft: 415.1, googl: 149.1 },
    { time: '14:30', aapl: 185.2, msft: 416.4, googl: 149.8 },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>G - MULTI-SECURITY GRAPHICS BUILDER</span>
        <span>PERIOD: 1D</span>
      </div>

      <div className="flex-1 min-h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis dataKey="time" stroke="#666" fontSize={10} />
            <YAxis orientation="right" stroke="#666" fontSize={10} domain={['auto', 'auto']} />
            <Legend verticalAlign="top" height={36}/>
            <Line type="monotone" dataKey="aapl" stroke="#ffb900" strokeWidth={2} dot={false} name="AAPL US" isAnimationActive={false} />
            <Line type="monotone" dataKey="msft" stroke="#00ff00" strokeWidth={2} dot={false} name="MSFT US" isAnimationActive={false} />
            <Line type="monotone" dataKey="googl" stroke="#3b82f6" strokeWidth={2} dot={false} name="GOOGL US" isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex gap-4">
        <div className="bg-[#111] p-3 border border-[#333] flex-1">
          <div className="text-gray-500 text-[9px] mb-1">CORRELATION (AAPL/MSFT)</div>
          <div className="text-lg font-bold text-white">0.84</div>
        </div>
        <div className="bg-[#111] p-3 border border-[#333] flex-1">
          <div className="text-gray-500 text-[9px] mb-1">BETA (VS SPX)</div>
          <div className="text-lg font-bold text-white">1.12</div>
        </div>
      </div>
    </div>
  );
};
