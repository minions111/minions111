"use client";

import React from 'react';
import { ShieldAlert, Zap, Globe, TrendingDown } from 'lucide-react';

export const ScenarioManager = () => {
  const scenarios = [
    { name: "Hard Landing / Recession", impact: "-22.5%", prob: "15%", delta: "-205k" },
    { name: "Base Case / Soft Landing", impact: "+8.2%", prob: "65%", delta: "+12k" },
    { name: "Reflationary Spike", impact: "-4.5%", prob: "10%", delta: "-42k" },
    { name: "Black Swan: Geopolitical", impact: "-35.0%", prob: "5%", delta: "-315k" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>SCEN - MACRO SCENARIO MANAGER</span>
        <span>NY 23:48:12</span>
      </div>

      <div className="space-y-4 flex-1">
        {scenarios.map((s, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-4 flex justify-between items-center group hover:border-[#ffb900] cursor-pointer transition-colors">
            <div>
              <div className="text-white font-bold uppercase text-base group-hover:text-[#ffb900]">{s.name}</div>
              <div className="flex gap-4 mt-1">
                <span className="text-gray-500 text-[9px] uppercase">Probability: <span className="text-white">{s.prob}</span></span>
                <span className="text-gray-500 text-[9px] uppercase">NAV Impact: <span className={s.impact.startsWith('-') ? 'text-red-500' : 'text-[#00ff00]'}>{s.impact}</span></span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-gray-600 text-[8px] uppercase">Simulated P/L</div>
              <div className={`text-xl font-bold ${s.delta.startsWith('-') ? 'text-red-500' : 'text-[#00ff00]'}`}>{s.delta}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-red-950/10 border border-red-900/30 p-4 rounded text-red-400 flex items-center gap-4">
        <ShieldAlert size={24} />
        <div>
          <div className="font-bold uppercase text-[10px]">Stress Test Alert:</div>
          <p className="text-[9px] opacity-80 leading-relaxed">Systematic risk in Hard Landing scenario exceeds predefined VaR limit (15%). Recommend increase in long-duration volatility hedges.</p>
        </div>
      </div>
    </div>
  );
};
