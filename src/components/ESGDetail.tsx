"use client";

import React from 'react';
import { ShieldCheck, Leaf, Users, Scale } from 'lucide-react';

interface ESGDProps {
  ticker: string;
}

export const ESGDetail = ({ ticker }: ESGDProps) => {
  const scores = [
    { name: "ENVIRONMENTAL", score: "8.4", icon: <Leaf size={16} className="text-green-500" />, pillars: ["Carbon Emissions", "Water Stress", "Toxic Waste"] },
    { name: "SOCIAL", score: "7.2", icon: <Users size={16} className="text-blue-500" />, pillars: ["Labor Management", "Health & Safety", "Human Capital"] },
    { name: "GOVERNANCE", score: "9.1", icon: <Scale size={16} className="text-[#ffb900]" />, pillars: ["Board Diversity", "Executive Pay", "Tax Transparency"] },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - ESGD (ESG Deep Dive)</span>
        <span>BLOOMBERG ESG SCORE: 8.2 (OUTPERFORM)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {scores.map((s, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-5 flex flex-col items-center group hover:border-white transition-colors">
            <div className="p-3 bg-black border border-[#333] rounded-full mb-3">
              {s.icon}
            </div>
            <div className="text-white font-bold mb-1">{s.name}</div>
            <div className="text-3xl font-bold text-white mb-4">{s.score}</div>
            <div className="w-full space-y-1">
              {s.pillars.map((p, j) => (
                <div key={j} className="flex justify-between text-[8px] text-gray-500 uppercase">
                  <span>{p}</span> <span className="text-[#00ff00]">●</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#1a1a1a] p-4 border border-[#333]">
        <h3 className="text-[#ffb900] font-bold mb-2 uppercase">Company Peer Comparison</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-gray-400">
            <span>PERCENTILE RANK VS SECTOR</span>
            <span className="text-white font-bold">92nd</span>
          </div>
          <div className="h-2 w-full bg-[#333] rounded-full overflow-hidden">
            <div className="h-full bg-green-500 w-[92%]" />
          </div>
          <div className="flex justify-between text-[9px] text-gray-600">
            <span>LAGGARD</span>
            <span>LEADER</span>
          </div>
        </div>
      </div>
    </div>
  );
};
