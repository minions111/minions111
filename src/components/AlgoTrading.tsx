"use client";

import React from 'react';
import { Play, Settings, Database, Activity } from 'lucide-react';

export const AlgoTrading = () => {
  const algos = [
    { name: "VWAP", status: "Active", fill: "42%", participation: "15%", variance: "-1.2" },
    { name: "TWAP", status: "Inactive", fill: "0%", participation: "5%", variance: "0.0" },
    { name: "ICEBERG", status: "Pending", fill: "0%", participation: "N/A", variance: "N/A" },
    { name: "POV (5%)", status: "Active", fill: "88%", participation: "5.1%", variance: "+0.4" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-6 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>ALGO - STRATEGY EXECUTION ENGINE</span>
        <span>AUTH: TRDR_NY_82</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase text-[10px]">Strategy Control</h2>
          <div className="space-y-4">
            {algos.map((a, i) => (
              <div key={i} className="bg-[#111] border border-[#222] p-3 flex justify-between items-center group hover:border-[#ffb900] cursor-pointer">
                <div>
                  <div className="text-white font-bold">{a.name}</div>
                  <div className={`text-[8px] uppercase ${a.status === 'Active' ? 'text-[#00ff00]' : 'text-gray-500'}`}>{a.status}</div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="text-right">
                    <div className="text-gray-500 text-[8px] uppercase">Fill</div>
                    <div className="text-white font-bold">{a.fill}</div>
                  </div>
                  <button className="bg-black border border-[#444] p-1 group-hover:bg-[#ffb900] group-hover:text-black transition-colors">
                    <Play size={14} fill={a.status === 'Active' ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="bg-[#111] border border-[#222] p-4">
            <h2 className="text-gray-500 font-bold mb-4 uppercase text-[10px] flex items-center gap-2">
              <Database size={14} /> Global Params
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-600 text-[8px] uppercase block mb-1">Max Participation</label>
                <div className="text-white font-bold border-b border-[#333]">20.0%</div>
              </div>
              <div>
                <label className="text-gray-600 text-[8px] uppercase block mb-1">Aggression Level</label>
                <div className="text-[#ffb900] font-bold border-b border-[#333]">NEUTRAL (3)</div>
              </div>
            </div>
          </div>

          <div className="bg-green-900/10 border border-green-900/30 p-4 text-center">
            <Activity size={32} className="mx-auto text-[#00ff00] mb-2" />
            <div className="text-[#00ff00] font-bold uppercase text-[10px]">TCA Pulse: -2.4 bps</div>
            <p className="text-gray-500 text-[9px] mt-1 italic">Performance is beating arrival mid-price across all active strategies.</p>
          </div>
        </section>
      </div>
    </div>
  );
};
