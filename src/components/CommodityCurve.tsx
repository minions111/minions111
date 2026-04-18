"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

export const CommodityCurve = () => {
  const data = [
    { month: 'MAY 26', price: 85.45 },
    { month: 'JUN 26', price: 85.92 },
    { month: 'JUL 26', price: 86.40 },
    { month: 'AUG 26', price: 86.85 },
    { month: 'SEP 26', price: 87.20 },
    { month: 'DEC 26', price: 88.50 },
    { month: 'DEC 27', price: 92.10 },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>CCUR - COMMODITY FORWARD CURVE</span>
        <span>SYMBOL: CL (WTI CRUDE)</span>
      </div>

      <div className="flex-1 min-h-[350px]">
        <h2 className="text-gray-500 uppercase text-[10px] mb-4">Futures Term Structure</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis dataKey="month" stroke="#666" fontSize={9} />
            <YAxis orientation="right" stroke="#666" fontSize={10} domain={['auto', 'auto']} tickFormatter={(v) => `$${v}`} />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Line type="monotone" dataKey="price" stroke="#ffb900" strokeWidth={3} dot={{ fill: '#ffb900' }} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 bg-[#111] border border-[#222] p-4 text-center">
        <div className="text-gray-500 uppercase text-[9px] mb-1">Curve Status</div>
        <div className="text-xl font-bold text-blue-400 uppercase">Contango</div>
        <p className="text-[10px] text-gray-500 mt-2">
          Front-month discount to back-month futures indicates sufficient physical supply and positive storage carry costs.
        </p>
      </div>
    </div>
  );
};
