"use client";

import React from 'react';
import { ShieldAlert, TrendingDown, Target, Activity } from 'lucide-react';

export const PortfolioRisk = () => {
  const metrics = [
    { name: "Portfolio Beta", val: "1.14", status: "Moderate", color: "text-[#ffb900]" },
    { name: "Sharpe Ratio", val: "2.14", status: "Good", color: "text-[#00ff00]" },
    { name: "Value at Risk (95%)", val: "2.4M", status: "Target", color: "text-white" },
    { name: "Max Drawdown (YTD)", val: "-12.4%", status: "High", color: "text-red-500" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>RISK - PORTFOLIO RISK ANALYTICS</span>
        <span>BENCHMARK: S&P 500</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {metrics.map((m, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-3 text-center">
            <div className="text-gray-500 text-[9px] uppercase mb-1">{m.name}</div>
            <div className={`text-xl font-bold ${m.color}`}>{m.val}</div>
            <div className="text-[8px] text-gray-600 uppercase mt-1">{m.status}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase text-[10px]">Factor Exposure</h2>
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="flex justify-between text-[10px]">
                <span className="text-white">Growth vs Value</span>
                <span className="text-[#00ff00]">82% Growth</span>
              </div>
              <div className="w-full bg-[#222] h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-[#00ff00]" style={{ width: '82%' }}></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px]">
                <span className="text-white">Large Cap vs Small Cap</span>
                <span className="text-blue-400">95% Large</span>
              </div>
              <div className="w-full bg-[#222] h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px]">
                <span className="text-white">Volatility (Standard Dev)</span>
                <span className="text-red-500">24.5% (High)</span>
              </div>
              <div className="w-full bg-[#222] h-1.5 rounded-full overflow-hidden">
                <div className="h-full bg-red-600" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0a0a0a] border border-[#222] p-4 flex flex-col justify-center text-center">
          <ShieldAlert size={40} className="mx-auto text-[#ffb900] mb-4" />
          <div className="text-white font-bold uppercase text-base">Risk Concentration Alert</div>
          <p className="text-gray-500 mt-2 leading-relaxed">
            Portfolio has high exposure (42%) to the Technology sector. A 100bps move in NVDA could impact total NAV by 4.2%. Consider hedging with index puts or sector rotation.
          </p>
          <button className="mt-6 bg-[#ffb900] text-black font-bold py-2 uppercase hover:bg-white transition-colors">
            Run Stress Test
          </button>
        </section>
      </div>
    </div>
  );
};
