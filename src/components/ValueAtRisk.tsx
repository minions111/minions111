"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, ReferenceLine } from 'recharts';

export const ValueAtRisk = () => {
  const data = Array.from({ length: 40 }).map((_, i) => ({
    ret: -5 + (i * 0.25),
    freq: Math.exp(-Math.pow(i - 20, 2) / 50) * 100
  }));

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>VAR - PORTFOLIO VALUE AT RISK (MC)</span>
        <span>CONFIDENCE: 99%</span>
      </div>

      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis dataKey="ret" stroke="#666" fontSize={10} tickFormatter={(v) => `${v}%`} />
            <YAxis hide />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <ReferenceLine x={-3.2} stroke="#ef4444" strokeWidth={2} label={{ position: 'top', value: 'VAR (99%)', fill: '#ef4444', fontSize: 10 }} />
            <Bar dataKey="freq" fill="#ffb900" isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 bg-[#111] p-6 border border-[#333]">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
               <div className="text-gray-500 uppercase text-[9px] mb-1">1-Day VaR (99%)</div>
               <div className="text-3xl font-bold text-red-500">-$42,450</div>
               <div className="text-[10px] text-gray-600 uppercase">3.24% of portfolio</div>
            </div>
            <div>
               <div className="text-gray-500 uppercase text-[9px] mb-1">Expected Shortfall</div>
               <div className="text-3xl font-bold text-red-700">-$58,210</div>
               <div className="text-[10px] text-gray-600 uppercase">Tail Risk Estimate</div>
            </div>
            <div>
               <div className="text-gray-500 uppercase text-[9px] mb-1">Diversification Benefit</div>
               <div className="text-3xl font-bold text-[#00ff00]">12.4%</div>
               <div className="text-[10px] text-gray-600 uppercase">Risk reduction vs sum</div>
            </div>
         </div>
      </div>
    </div>
  );
};
