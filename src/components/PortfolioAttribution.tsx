"use client";

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export const PortfolioAttribution = () => {
  const data = [
    { name: 'Technology', value: 45, color: '#3b82f6' },
    { name: 'Financials', value: 15, color: '#10b981' },
    { name: 'Healthcare', value: 12, color: '#6366f1' },
    { name: 'Consumer', value: 18, color: '#f59e0b' },
    { name: 'Energy', value: 10, color: '#ef4444' },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>PORT - PORTFOLIO ATTRIBUTION</span>
        <span>NY 21:20:11</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        <section className="flex flex-col">
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase text-[10px]">Sector Weighting</h2>
          <div className="flex-1 min-h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={false}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#111', border: '1px solid #333', fontSize: '10px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend iconType="rect" fontSize={10} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase text-[10px]">Performance Breakdown</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b border-[#222] text-[9px]">
                <th className="py-1">Sector</th>
                <th className="text-right">Return</th>
                <th className="text-right">Contrib</th>
              </tr>
            </thead>
            <tbody className="text-white text-[11px]">
              {data.map((s, i) => (
                <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
                  <td className="py-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5" style={{ backgroundColor: s.color }} />
                    {s.name}
                  </td>
                  <td className="text-right text-[#00ff00]">+{ (Math.random() * 5).toFixed(2) }%</td>
                  <td className="text-right font-bold">+{ (Math.random() * 1.5).toFixed(2) }%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};
