"use client";

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface SKEWProps {
  ticker: string;
}

export const OptionSkew = ({ ticker }: SKEWProps) => {
  const data = [
    { strike: '80%', iv: 42.4, call: 12.4 },
    { strike: '90%', iv: 34.2, call: 8.2 },
    { strike: '100% (ATM)', iv: 28.5, call: 4.5 },
    { strike: '110%', iv: 25.1, call: 2.1 },
    { strike: '120%', iv: 23.4, call: 1.2 },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - SKEW (Volatility Skew)</span>
        <span>IV INDEX: 28.5%</span>
      </div>

      <div className="flex-1 min-h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis dataKey="strike" stroke="#666" fontSize={10} />
            <YAxis orientation="right" stroke="#666" fontSize={10} domain={['auto', 'auto']} tickFormatter={(v) => `${v}%`} />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Legend />
            <Line type="monotone" dataKey="iv" stroke="#ffb900" strokeWidth={3} name="Implied Volatility" dot={{ r: 4, fill: '#ffb900' }} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 bg-[#111] p-4 border border-[#333]">
        <h3 className="text-[#ffb900] font-bold mb-2 uppercase text-[9px]">Skew Metrics</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           <div className="border-r border-[#222]">
              <div className="text-gray-500 text-[8px]">90/110 VOL RATIO</div>
              <div className="text-lg font-bold text-white">1.36</div>
           </div>
           <div className="border-r border-[#222]">
              <div className="text-gray-500 text-[8px]">PUT/CALL RATIO</div>
              <div className="text-lg font-bold text-[#00ff00]">0.82</div>
           </div>
           <div className="border-r border-[#222]">
              <div className="text-gray-500 text-[8px]">TERM PREM (3M)</div>
              <div className="text-lg font-bold text-white">+1.24%</div>
           </div>
           <div>
              <div className="text-gray-500 text-[8px]">CONTANGO/BACK</div>
              <div className="text-lg font-bold text-[#ffb900]">CON</div>
           </div>
        </div>
      </div>
    </div>
  );
};
