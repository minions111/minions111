"use client";

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ScatterChart, Scatter, ZAxis, Tooltip } from 'recharts';

interface OAProps {
  ticker: string;
}

export const OptionAnalytics = ({ ticker }: OAProps) => {
  const greeks = [
    { name: 'DELTA', value: '0.52', color: 'text-[#00ff00]' },
    { name: 'GAMMA', value: '0.04', color: 'text-white' },
    { name: 'THETA', value: '-0.12', color: 'text-red-500' },
    { name: 'VEGA', value: '0.18', color: 'text-white' },
    { name: 'RHO', value: '0.02', color: 'text-white' },
  ];

  const volData = [
    { strike: 160, vol: 32 },
    { strike: 170, vol: 28 },
    { strike: 180, vol: 25 },
    { strike: 190, vol: 27 },
    { strike: 200, vol: 31 },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - OA (Option Analytics)</span>
        <span>IV RANK: 42.1%</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1 bg-[#111] border border-[#222] p-4">
          <h3 className="text-gray-500 uppercase text-[9px] mb-4">Option Greeks</h3>
          <div className="space-y-4">
            {greeks.map((g, i) => (
              <div key={i} className="flex justify-between border-b border-[#222] pb-1">
                <span className="text-gray-400">{g.name}</span>
                <span className={`font-bold ${g.color}`}>{g.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 bg-[#111] border border-[#222] p-4 h-[250px]">
          <h3 className="text-gray-500 uppercase text-[9px] mb-4">Implied Volatility Smile</h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={volData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
              <XAxis dataKey="strike" stroke="#666" fontSize={10} label={{ value: 'STRIKE', position: 'bottom', fill: '#666', fontSize: 8 }} />
              <YAxis orientation="right" stroke="#666" fontSize={10} domain={['auto', 'auto']} tickFormatter={(v) => `${v}%`} />
              <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
              <Area type="monotone" dataKey="vol" stroke="#ffb900" fill="#ffb90011" strokeWidth={2} isAnimationActive={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-[#0a0a0a] border border-[#333] p-4">
        <h3 className="text-[#ffb900] font-bold mb-2 uppercase">Probability Distribution</h3>
        <div className="flex justify-between text-gray-500 text-[10px]">
           <span>-2 SD</span>
           <span>-1 SD</span>
           <span className="text-white">ATM</span>
           <span>+1 SD</span>
           <span>+2 SD</span>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-red-900 via-green-900 to-red-900 rounded-full mt-2" />
      </div>
    </div>
  );
};
