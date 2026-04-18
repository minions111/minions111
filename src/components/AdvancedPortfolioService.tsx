"use client";

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export const AdvancedPortfolioService = () => {
  const allocation = [
    { name: 'EQUITY', value: 65, color: '#ffb900' },
    { name: 'FIXED INCOME', value: 25, color: '#00ff00' },
    { name: 'CASH', value: 5, color: '#3b82f6' },
    { name: 'ALTERNATIVES', value: 5, color: '#ef4444' },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>BPS - ADVANCED PORTFOLIO ATTRIBUTION</span>
        <span>BENCHMARK: GLOBAL_AGG</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-[300px] bg-[#111] border border-[#222] p-4">
          <h3 className="text-gray-500 uppercase text-[9px] mb-4">Asset Allocation</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={allocation}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={false}
              >
                {allocation.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: '#111', border: '1px solid #333', fontSize: '10px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          <div className="bg-[#111] border border-[#222] p-4">
            <h3 className="text-gray-500 uppercase text-[9px] mb-2">Alpha Attribution</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span>SELECTION EFFECT</span> <span className="text-[#00ff00] font-bold">+1.24%</span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span>ALLOCATION EFFECT</span> <span className="text-red-500 font-bold">-0.15%</span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-1">
                <span>CURRENCY IMPACT</span> <span className="text-[#00ff00] font-bold">+0.04%</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111] border border-[#222] p-4">
            <h3 className="text-gray-500 uppercase text-[9px] mb-2">Risk Metrics</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-white">1.12</div>
                <div className="text-[8px] text-gray-500 uppercase">Tracking Error</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">1.84</div>
                <div className="text-[8px] text-gray-500 uppercase">Information Ratio</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
