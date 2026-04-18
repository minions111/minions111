"use client";

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

export const MonteCarloSimulation = () => {
  // Generate distribution curve data
  const data = Array.from({ length: 40 }).map((_, i) => {
    const x = i - 20;
    const y = Math.exp(-0.5 * Math.pow(x / 6, 2)) / (6 * Math.sqrt(2 * Math.PI));
    return {
      price: 185 + x * 2,
      prob: y * 100
    };
  });

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>MCS - MONTE CARLO PRICE PROJECTION</span>
        <span>NY 22:55:05</span>
      </div>

      <div className="flex-1 min-h-[350px]">
        <h2 className="text-gray-500 uppercase text-[9px] mb-4">Price Probability Distribution (1Y Horizon)</h2>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis dataKey="price" stroke="#666" fontSize={10} label={{ value: 'PRICE', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#666' }} />
            <YAxis orientation="right" stroke="#666" fontSize={10} label={{ value: 'PROB %', angle: -90, position: 'insideRight', fontSize: 10, fill: '#666' }} />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Area type="monotone" dataKey="prob" stroke="#ffb900" fill="#ffb900" fillOpacity={0.2} isAnimationActive={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-[#111] p-3 border border-[#222] text-center">
          <div className="text-gray-500 uppercase text-[8px] mb-1">Mean Projection</div>
          <div className="text-white font-bold text-lg">205.42</div>
        </div>
        <div className="bg-[#111] p-3 border border-[#222] text-center">
          <div className="text-gray-500 uppercase text-[8px] mb-1">5% Value-at-Risk</div>
          <div className="text-red-500 font-bold text-lg">158.20</div>
        </div>
        <div className="bg-[#111] p-3 border border-[#222] text-center">
          <div className="text-gray-500 uppercase text-[8px] mb-1">95% Confidence</div>
          <div className="text-[#00ff00] font-bold text-lg">252.10</div>
        </div>
      </div>
    </div>
  );
};
