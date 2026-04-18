"use client";

import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ZAxis } from 'recharts';

export const AnalystConfidence = () => {
  const data = [
    { ticker: "AAPL", consensus: 215, dispersion: 12, rating: 4.2 },
    { ticker: "MSFT", consensus: 450, dispersion: 8, rating: 4.8 },
    { ticker: "NVDA", consensus: 850, dispersion: 45, rating: 4.9 },
    { ticker: "TSLA", consensus: 180, dispersion: 55, rating: 3.2 },
    { ticker: "GOOGL", consensus: 165, dispersion: 10, rating: 4.5 },
    { ticker: "AMZN", consensus: 205, dispersion: 15, rating: 4.7 },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>CONF - ANALYST TARGET DISPERSION</span>
        <span>NY 22:15:00</span>
      </div>

      <div className="flex-1 min-h-[350px]">
        <h2 className="text-gray-500 uppercase text-[9px] mb-4">Target Price Dispersion vs Buy Rating</h2>
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis type="number" dataKey="rating" name="Rating" stroke="#666" fontSize={10} domain={[3, 5]} unit="/5" />
            <YAxis type="number" dataKey="dispersion" name="Dispersion" stroke="#666" fontSize={10} domain={[0, 60]} unit="%" />
            <ZAxis type="category" dataKey="ticker" name="Ticker" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Scatter name="Securities" data={data} fill="#ffb900" />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 bg-[#111] p-4 border border-[#222]">
        <div className="text-white font-bold mb-2 uppercase text-[10px]">Confidence Insight</div>
        <p className="text-gray-500 leading-relaxed text-[10px]">
          Lower dispersion (Y-axis) indicates higher analyst consensus and confidence. NVDA and TSLA show significant price target divergence, reflecting uncertainty regarding long-term AI margins and EV demand cycles respectively.
        </p>
      </div>
    </div>
  );
};
