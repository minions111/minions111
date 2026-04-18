"use client";

import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from 'recharts';

export const FactorAnalysis = () => {
  const data = [
    { factor: 'Value', score: 45 },
    { factor: 'Growth', score: 85 },
    { factor: 'Momentum', score: 72 },
    { factor: 'Volatility', score: 60 },
    { factor: 'Quality', score: 80 },
    { factor: 'Size', score: 95 },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>FACT - MULTI-FACTOR EXPOSURE</span>
        <span>BENCHMARK: MSCI WORLD</span>
      </div>

      <div className="flex-1 min-h-[350px]">
        <h2 className="text-gray-500 uppercase text-[9px] mb-4">Factor Profile Radar</h2>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="#333" />
            <PolarAngleAxis dataKey="factor" stroke="#666" fontSize={10} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Radar
              name="Portfolio"
              dataKey="score"
              stroke="#ffb900"
              fill="#ffb900"
              fillOpacity={0.3}
              isAnimationActive={false}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 bg-[#111] p-4 border border-[#222]">
        <div className="text-white font-bold mb-2 uppercase text-[10px]">Factor Insight</div>
        <p className="text-gray-500 text-[10px] leading-relaxed">
          Significant over-indexing in Growth and Quality factors. Portfolio remains sensitive to interest rate duration risk due to high software/tech growth tilt. Momentum remains strong following Q1 earnings beats.
        </p>
      </div>
    </div>
  );
};
