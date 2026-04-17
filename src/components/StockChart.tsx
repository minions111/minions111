"use client";

import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { MOCK_CHART_DATA } from '@/lib/constants';

export const StockChart = () => {
  return (
    <div className="h-full w-full bg-black p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-[#ffb900] text-xl font-bold">AAPL US Equity</h2>
          <p className="text-gray-400 text-xs">Apple Inc. - GP Line Graph</p>
        </div>
        <div className="text-right">
          <div className="text-2xl text-[#00ff00] font-bold">185.92</div>
          <div className="text-[#00ff00] text-xs">+1.24 (+0.67%)</div>
        </div>
      </div>

      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={MOCK_CHART_DATA}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffb900" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ffb900" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis
              dataKey="time"
              stroke="#666"
              fontSize={10}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#666"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              domain={['dataMin - 0.5', 'dataMax + 0.5']}
              orientation="right"
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#111', border: '1px solid #333', fontSize: '12px' }}
              itemStyle={{ color: '#ffb900' }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#ffb900"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPrice)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
