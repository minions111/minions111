"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts';

export const EconomicSurpriseIndex = () => {
  const data = [
    { period: 'JAN', surprise: 1.2 },
    { period: 'FEB', surprise: -0.5 },
    { period: 'MAR', surprise: 0.8 },
    { period: 'APR', surprise: 2.1 },
    { period: 'MAY', surprise: 1.5 },
    { period: 'JUN', surprise: -1.2 },
    { period: 'JUL', surprise: -0.2 },
    { period: 'AUG', surprise: 0.9 },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>CESI - CITIGROUP ECONOMIC SURPRISE INDEX</span>
        <span>INDEX: UNITED STATES</span>
      </div>

      <div className="flex-1 min-h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis dataKey="period" stroke="#666" fontSize={10} />
            <YAxis stroke="#666" fontSize={10} domain={[-3, 3]} />
            <ReferenceLine y={0} stroke="#444" />
            <Bar
              dataKey="surprise"
              fill={(d: any) => d.surprise >= 0 ? "#00ff00" : "#ff0000"}
              isAnimationActive={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 bg-[#111] p-4 border border-[#333]">
        <div className="text-[#ffb900] font-bold mb-2 uppercase">Analysis</div>
        <p className="text-gray-400 leading-relaxed text-[10px]">
          The Economic Surprise Index measures the degree to which economic data exceeds or falls short of consensus expectations.
          A positive reading suggests data is beating estimates, often leading to upward pressure on yields and the currency.
        </p>
      </div>
    </div>
  );
};
