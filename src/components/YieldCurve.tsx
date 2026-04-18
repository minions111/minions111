"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export const YieldCurve = () => {
  const data = [
    { tenor: '3M', yield: 5.38 },
    { tenor: '6M', yield: 5.32 },
    { tenor: '1Y', yield: 5.12 },
    { tenor: '2Y', yield: 4.92 },
    { tenor: '5Y', yield: 4.65 },
    { tenor: '10Y', yield: 4.61 },
    { tenor: '30Y', yield: 4.72 },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>YC - US TREASURY YIELD CURVE</span>
        <span>NY 21:05:44</span>
      </div>

      <div className="flex-1 min-h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis dataKey="tenor" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis
              stroke="#666"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              domain={[4, 6]}
              tickFormatter={(v) => `${v.toFixed(2)}%`}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#111', border: '1px solid #333', fontSize: '10px' }}
              itemStyle={{ color: '#ffb900' }}
              formatter={(v: number) => [`${v.toFixed(3)}%`, 'Yield']}
            />
            <Line
              type="monotone"
              dataKey="yield"
              stroke="#ffb900"
              strokeWidth={3}
              dot={{ fill: '#ffb900', r: 4 }}
              activeDot={{ r: 6 }}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-4">
        {data.slice(3).map((item, i) => (
          <div key={i} className="bg-[#111] p-2 border border-[#222]">
            <div className="text-gray-500 text-[9px] uppercase">{item.tenor} Yield</div>
            <div className="text-white font-bold text-lg">{item.yield.toFixed(2)}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};
