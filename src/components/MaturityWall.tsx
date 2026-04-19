"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface MATWProps {
  ticker: string;
}

export const MaturityWall = ({ ticker }: MATWProps) => {
  const data = [
    { year: '2024', amount: 450, type: 'Loans' },
    { year: '2025', amount: 1200, type: 'Bonds' },
    { year: '2026', amount: 800, type: 'Bonds' },
    { year: '2027', amount: 2100, type: 'Loans' },
    { year: '2028', amount: 1500, type: 'Bonds' },
    { year: '2029', amount: 3200, type: 'Bonds' },
    { year: '2030+', amount: 5400, type: 'Bonds' },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - MATW (Maturity Wall)</span>
        <span>TOTAL DEBT: $14.65B</span>
      </div>

      <div className="flex-1 min-h-[300px] mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis dataKey="year" stroke="#666" fontSize={10} />
            <YAxis stroke="#666" fontSize={10} label={{ value: 'USD (M)', angle: -90, position: 'insideLeft', fill: '#666' }} />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Legend />
            <Bar dataKey="amount" fill="#ffb900" name="Maturity Amount" isAnimationActive={false} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-[#111] p-4 border border-[#333]">
        <h3 className="text-white font-bold mb-2 uppercase text-[9px]">Upcoming Major Maturities</h3>
        <table className="w-full text-left">
           <thead className="text-gray-500 uppercase text-[8px] border-b border-[#222]">
             <tr>
               <th className="py-1">Issue</th>
               <th className="py-1">Date</th>
               <th className="py-1 text-right">Coupon</th>
               <th className="py-1 text-right">Amount (M)</th>
             </tr>
           </thead>
           <tbody>
             <tr className="border-b border-[#222] text-white">
               <td className="py-2">Sr Unsecured Note</td>
               <td>15-SEP-25</td>
               <td className="text-right">3.450%</td>
               <td className="text-right">$1,200</td>
             </tr>
             <tr className="text-white">
               <td className="py-2">Term Loan B</td>
               <td>22-JUN-27</td>
               <td className="text-right">L + 175</td>
               <td className="text-right">$2,100</td>
             </tr>
           </tbody>
        </table>
      </div>
    </div>
  );
};
