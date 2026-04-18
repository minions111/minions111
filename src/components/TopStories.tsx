"use client";

import React from 'react';
import { Newspaper, ArrowRight, TrendingUp, Globe } from 'lucide-react';

export const TopStories = () => {
  const stories = [
    { category: "TOP NEWS", title: "FED PREPARES PIVOT AS INFLATION TARGET NEARS", time: "10m", source: "BN" },
    { category: "MARKETS", title: "TECH RALLY CONTINUES AMID AI INFRASTRUCTURE SPEND", time: "22m", source: "BN" },
    { category: "ECONOMICS", title: "EUROZONE PMIS BEAT ESTIMATES; GROWTH STABILIZING", time: "45m", source: "BN" },
    { category: "POLITICS", title: "GLOBAL LEADERS GATHER FOR CLIMATE FINANCE SUMMIT", time: "1h", source: "BN" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 text-[#ffb900] font-bold border-b border-[#333] flex justify-between uppercase text-[10px]">
        <span>TOP - BLOOMBERG TOP NEWS</span>
        <span>EDITOR'S PICK: GLOBAL</span>
      </div>

      <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Story */}
        <div className="lg:col-span-8 space-y-6">
          <div className="group cursor-pointer">
            <div className="text-[#ffb900] font-bold text-[10px] mb-2">TOP NEWS - EXCLUSIVE</div>
            <h1 className="text-3xl font-bold text-white leading-tight group-hover:underline mb-4 uppercase">
              The Great Decoupling: How Global Supply Chains are Realigning for 2025
            </h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Institutional investors are recalibrating portfolios as manufacturing hubs shift from Asia to the Americas.
              New data suggests a $1.2 trillion shift in trade flows over the next 18 months.
            </p>
            <div className="flex gap-4 text-gray-500 text-[10px] items-center">
              <span className="bg-[#ffb900] text-black px-1 font-bold">READ NOW</span>
              <span>12:42 PM NY</span>
              <span>By Bloomberg News</span>
            </div>
          </div>

          <div className="border-t border-[#222] pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {stories.slice(1).map((s, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="text-gray-500 font-bold text-[9px] mb-1 uppercase">{s.category}</div>
                <h3 className="text-white font-bold text-sm uppercase group-hover:text-[#ffb900]">{s.title}</h3>
                <div className="mt-2 text-[9px] text-gray-600">{s.time} | {s.source}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-[#111] p-4 border border-[#222]">
            <div className="flex items-center gap-2 mb-4 text-[#ffb900]">
              <TrendingUp size={16} /> <span className="font-bold uppercase">Market Pulse</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-[#222] pb-2">
                <span className="text-white">S&P 500</span> <span className="text-[#00ff00] font-bold">+0.82%</span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-2">
                <span className="text-white">UST 10Y</span> <span className="text-red-500 font-bold">4.21%</span>
              </div>
              <div className="flex justify-between border-b border-[#222] pb-2">
                <span className="text-white">EUR/USD</span> <span className="text-[#00ff00] font-bold">1.0842</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111] p-4 border border-[#222]">
            <div className="flex items-center gap-2 mb-4 text-[#ffb900]">
              <Globe size={16} /> <span className="font-bold uppercase">Most Read</span>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map(n => (
                <div key={n} className="flex gap-3 group cursor-pointer">
                  <span className="text-gray-700 font-bold text-lg leading-none">{n}</span>
                  <div className="text-[10px] text-gray-400 group-hover:text-white uppercase leading-tight font-bold">
                    Analysis: The future of private credit in a high rate environment
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
