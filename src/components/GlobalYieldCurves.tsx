"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export const GlobalYieldCurves = () => {
  const data = [
    { tenor: '3M', us: 5.38, eu: 3.85, uk: 5.25, jp: 0.02 },
    { tenor: '2Y', us: 4.62, eu: 2.92, uk: 4.12, jp: 0.18 },
    { tenor: '5Y', us: 4.25, eu: 2.45, uk: 3.95, jp: 0.35 },
    { tenor: '10Y', us: 4.21, eu: 2.38, uk: 4.02, jp: 0.72 },
    { tenor: '30Y', us: 4.35, eu: 2.52, uk: 4.45, jp: 1.82 },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>GCUR - GLOBAL SOVEREIGN YIELD CURVES</span>
        <span>BENCHMARK COMPARISON</span>
      </div>

      <div className="flex-1 min-h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis dataKey="tenor" stroke="#666" fontSize={10} />
            <YAxis orientation="right" stroke="#666" fontSize={10} domain={['auto', 'auto']} tickFormatter={(v) => `${v}%`} />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Legend verticalAlign="top" height={36}/>
            <Line type="monotone" dataKey="us" stroke="#ffb900" strokeWidth={2} name="US TREASURY" isAnimationActive={false} />
            <Line type="monotone" dataKey="eu" stroke="#3b82f6" strokeWidth={2} name="GERMAN BUND" isAnimationActive={false} />
            <Line type="monotone" dataKey="uk" stroke="#ef4444" strokeWidth={2} name="UK GILT" isAnimationActive={false} />
            <Line type="monotone" dataKey="jp" stroke="#00ff00" strokeWidth={2} name="JGB" isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#111] p-3 border border-[#333]">
          <div className="text-gray-500 text-[8px] uppercase">US 2S10S SPREAD</div>
          <div className="text-lg font-bold text-red-500">-0.41%</div>
        </div>
        <div className="bg-[#111] p-3 border border-[#333]">
          <div className="text-gray-500 text-[8px] uppercase">EU 2S10S SPREAD</div>
          <div className="text-lg font-bold text-red-500">-0.54%</div>
        </div>
        <div className="bg-[#111] p-3 border border-[#333]">
          <div className="text-gray-500 text-[8px] uppercase">MOVE INDEX (VOL)</div>
          <div className="text-lg font-bold text-white">108.4</div>
        </div>
        <div className="bg-[#111] p-3 border border-[#333]">
          <div className="text-gray-500 text-[8px] uppercase">SKEW INDEX</div>
          <div className="text-lg font-bold text-white">142.1</div>
        </div>
      </div>
    </div>
  );
};
