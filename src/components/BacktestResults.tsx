"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export const BacktestResults = () => {
  const data = Array.from({ length: 40 }).map((_, i) => ({
    time: i,
    strategy: 100 + i * 0.8 + Math.random() * 5,
    benchmark: 100 + i * 0.5 + Math.random() * 3,
  }));

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>BTST - STRATEGY BACKTEST RESULTS</span>
        <span>PERIOD: 3Y (ANNUALIZED)</span>
      </div>

      <div className="flex-1 min-h-[300px] mb-8">
        <h2 className="text-gray-500 uppercase text-[9px] mb-4">Cumulative Returns vs Benchmark (S&P 500)</h2>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis hide />
            <YAxis orientation="right" stroke="#666" fontSize={10} domain={['auto', 'auto']} tickFormatter={(v) => `${v.toFixed(0)}%`} />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Legend verticalAlign="top" height={36} />
            <Line type="monotone" name="Trend Follower Alpha" dataKey="strategy" stroke="#ffb900" strokeWidth={2} dot={false} isAnimationActive={false} />
            <Line type="monotone" name="SPX Index" dataKey="benchmark" stroke="#666" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#111] p-3 border border-[#222] text-center">
          <div className="text-gray-500 uppercase text-[8px] mb-1">Annual Return</div>
          <div className="text-[#00ff00] font-bold text-lg">18.4%</div>
        </div>
        <div className="bg-[#111] p-3 border border-[#222] text-center">
          <div className="text-gray-500 uppercase text-[8px] mb-1">Sharpe Ratio</div>
          <div className="text-white font-bold text-lg">1.42</div>
        </div>
        <div className="bg-[#111] p-3 border border-[#222] text-center">
          <div className="text-gray-500 uppercase text-[8px] mb-1">Max Drawdown</div>
          <div className="text-red-500 font-bold text-lg">-8.5%</div>
        </div>
      </div>
    </div>
  );
};
