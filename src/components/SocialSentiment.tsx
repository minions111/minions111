"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from 'recharts';

export const SocialSentiment = () => {
  const data = [
    { name: 'X/Twitter', pos: 65, neg: 35, sentiment: 30 },
    { name: 'Reddit', pos: 58, neg: 42, sentiment: 16 },
    { name: 'Stocktwits', pos: 72, neg: 28, sentiment: 44 },
    { name: 'Institutional', pos: 85, neg: 15, sentiment: 70 },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>SENT - SOCIAL & MARKET SENTIMENT</span>
        <span>NY 20:42:05</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        <section className="flex flex-col">
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase text-[10px]">Sentiment Score by Source</h2>
          <div className="flex-1 min-h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical">
                <XAxis type="number" domain={[-100, 100]} hide />
                <YAxis dataKey="name" type="category" stroke="#666" fontSize={10} width={80} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#111', border: '1px solid #333', fontSize: '10px' }}
                  itemStyle={{ color: '#ffb900' }}
                />
                <Bar dataKey="sentiment">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.sentiment > 0 ? '#00ff00' : '#ff0000'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase text-[10px]">Sentiment Highlights</h2>
          <div className="space-y-4">
            <div className="bg-[#111] p-3 border-l-4 border-l-[#00ff00]">
              <div className="text-[#00ff00] font-bold mb-1 uppercase text-[9px]">High Institutional Conviction</div>
              <p className="text-white text-[10px] leading-tight">
                Institutional news flow suggests strong rotation into semiconductor hardware following earnings updates.
              </p>
            </div>
            <div className="bg-[#111] p-3 border-l-4 border-l-gray-500">
              <div className="text-gray-500 font-bold mb-1 uppercase text-[9px]">Retail Caution on Tech</div>
              <p className="text-white text-[10px] leading-tight">
                Social media buzz has decreased by 14% WoW, reflecting short-term consolidation fears among retail traders.
              </p>
            </div>
          </div>

          <div className="bg-[#1a1a1a] border border-[#333] p-4 text-center">
            <div className="text-gray-500 uppercase text-[9px] mb-1">Composite Sentiment Index</div>
            <div className="text-white text-4xl font-bold">64.2</div>
            <div className="text-[#00ff00] font-bold uppercase text-[10px] mt-1">Bullish Bias</div>
          </div>
        </section>
      </div>
    </div>
  );
};
