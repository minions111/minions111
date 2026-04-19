"use client";

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export const WorldEquityMarketCap = () => {
  const data = [
    { name: 'UNITED STATES', value: 48.5, color: '#ffb900' },
    { name: 'CHINA', value: 9.8, color: '#3b82f6' },
    { name: 'JAPAN', value: 6.2, color: '#ef4444' },
    { name: 'INDIA', value: 4.5, color: '#00ff00' },
    { name: 'EUROZONE', value: 12.4, color: '#8b5cf6' },
    { name: 'REST OF WORLD', value: 18.6, color: '#444' },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>WCAP - WORLD EQUITY MARKET CAPITALIZATION</span>
        <span>TOTAL GLOBAL CAP: $102.4 TRILLION</span>
      </div>

      <div className="flex-1 min-h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Legend verticalAlign="bottom" height={36}/>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-[#111] border border-[#333] p-4 flex justify-between items-center">
         <div className="text-gray-500 uppercase text-[9px]">US Concentration (MSCI World)</div>
         <div className="text-2xl font-bold text-white">68.2%</div>
      </div>
    </div>
  );
};
