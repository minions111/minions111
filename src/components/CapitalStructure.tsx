"use client";

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

interface CASTProps {
  ticker: string;
}

export const CapitalStructure = ({ ticker }: CASTProps) => {
  const data = [
    { name: 'Common Equity', value: 72, color: '#ffb900' },
    { name: 'Senior Debt', value: 18, color: '#3b82f6' },
    { name: 'Subordinated Debt', value: 5, color: '#ef4444' },
    { name: 'Preferred Stock', value: 3, color: '#00ff00' },
    { name: 'Cash & Equiv', value: 2, color: '#666' },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - CAST (Capital Structure)</span>
        <span>TOTAL CAPITAL: $342.1B</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-[300px] bg-[#111] border border-[#222] p-4">
           <h3 className="text-gray-500 uppercase text-[9px] mb-4">Capital Breakdown</h3>
           <ResponsiveContainer width="100%" height="100%">
             <PieChart>
               <Pie data={data} dataKey="value" innerRadius={60} outerRadius={80} paddingAngle={5} isAnimationActive={false}>
                 {data.map((entry, i) => <Cell key={i} fill={entry.color} />)}
               </Pie>
               <Legend />
             </PieChart>
           </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          <div className="bg-[#111] border border-[#222] p-4">
             <h3 className="text-[#ffb900] font-bold mb-3 uppercase text-[9px]">Solvency Metrics</h3>
             <div className="space-y-3">
                <div className="flex justify-between border-b border-[#222] pb-1">
                  <span>Net Debt / EBITDA</span> <span className="text-white font-bold">1.84x</span>
                </div>
                <div className="flex justify-between border-b border-[#222] pb-1">
                  <span>Interest Coverage</span> <span className="text-[#00ff00] font-bold">12.4x</span>
                </div>
                <div className="flex justify-between border-b border-[#222] pb-1">
                  <span>Debt / Total Cap</span> <span className="text-white font-bold">23.4%</span>
                </div>
             </div>
          </div>
          <div className="bg-[#111] border border-[#222] p-4">
             <h3 className="text-[#ffb900] font-bold mb-3 uppercase text-[9px]">Credit Rating</h3>
             <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-[#00ff00]">AA-</div>
                <div className="text-gray-500 uppercase text-[8px]">Standard & Poor's<br/>Outlook: STABLE</div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
