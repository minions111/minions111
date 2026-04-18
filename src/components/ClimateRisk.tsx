"use client";

import React from 'react';
import { Leaf, Wind, Thermometer, ShieldAlert } from 'lucide-react';

interface CLIMProps {
  ticker: string;
}

export const ClimateRisk = ({ ticker }: CLIMProps) => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - CLIM (Climate Risk Metrics)</span>
        <span>BLOOMBERG CARBON DATA</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <section className="bg-[#111] border border-[#222] p-4 flex flex-col items-center justify-center text-center">
          <Leaf size={48} className="text-[#00ff00] mb-4" />
          <div className="text-white font-bold text-lg uppercase">Carbon Transition Score</div>
          <div className="text-white text-4xl font-bold mt-2">8.2</div>
          <div className="text-[#00ff00] text-[9px] uppercase mt-1">Leading Sector Alignment</div>
        </section>

        <section className="space-y-4">
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">Emissions Profile</h2>
          <div className="space-y-3">
            <div className="flex justify-between border-b border-[#111] pb-1">
              <span className="text-gray-500 uppercase">Scope 1 (Direct)</span>
              <span className="text-white">42.5K tCO2e</span>
            </div>
            <div className="flex justify-between border-b border-[#111] pb-1">
              <span className="text-gray-500 uppercase">Scope 2 (Indirect)</span>
              <span className="text-white">12.8K tCO2e</span>
            </div>
            <div className="flex justify-between border-b border-[#111] pb-1">
              <span className="text-gray-500 uppercase">Energy Intensity</span>
              <span className="text-[#00ff00]">Low (-12% YoY)</span>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-red-950/10 border border-red-900/30 p-4 rounded text-[10px] text-red-400">
        <div className="flex items-center gap-2 font-bold mb-2">
          <ShieldAlert size={14} /> PHYSICAL RISK ALERT
        </div>
        <p className="leading-relaxed opacity-80">
          Exposure to high water-stress regions identified in data center supply chain (14% of revenue). Potential 2030 cost impact estimated at 1.2% of EBITDA if mitigation strategies are not accelerated.
        </p>
      </div>
    </div>
  );
};
