"use client";

import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export const PortfolioOptimization = () => {
  const data = Array.from({ length: 100 }).map((_, i) => ({
    x: 10 + Math.random() * 20, // Risk
    y: 5 + Math.random() * 15,  // Return
  })).sort((a, b) => a.x - b.x);

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>OPT - PORTFOLIO OPTIMIZER (FRONTIER)</span>
        <span>NY 22:20:11</span>
      </div>

      <div className="flex-1 min-h-[350px]">
        <h2 className="text-gray-500 uppercase text-[9px] mb-4">Efficient Frontier: Risk vs Expected Return</h2>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis type="number" dataKey="x" name="Risk" stroke="#666" fontSize={10} unit="%" label={{ value: 'Volatility', position: 'insideBottom', offset: -5, fontSize: 10, fill: '#666' }} />
            <YAxis type="number" dataKey="y" name="Return" stroke="#666" fontSize={10} unit="%" label={{ value: 'Exp Return', angle: -90, position: 'insideLeft', fontSize: 10, fill: '#666' }} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Scatter name="Portfolios" data={data} fill="#00ff00" opacity={0.4} isAnimationActive={false} />
            <ReferenceLine x={18} stroke="#ffb900" label={{ value: 'Current Portfolio', position: 'top', fill: '#ffb900', fontSize: 9 }} />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-8 bg-[#111] p-4 border border-[#222]">
        <div>
          <div className="text-white font-bold uppercase text-[9px] mb-2">Optimal Portfolio (Sharpe)</div>
          <div className="flex justify-between text-[10px]">
            <span className="text-gray-500">Expected Return:</span>
            <span className="text-[#00ff00] font-bold">14.2%</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-gray-500">Expected Vol:</span>
            <span className="text-white">12.5%</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-[#ffb900] text-black font-bold py-2 px-6 uppercase text-[10px] hover:bg-white transition-colors">
            EXECUTE REBALANCE
          </button>
        </div>
      </div>
    </div>
  );
};
