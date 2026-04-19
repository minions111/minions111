"use client";

import React from 'react';
import { AppWindow, Layers, Zap, Star, LayoutGrid } from 'lucide-react';

export const TerminalAppStore = () => {
  const apps = [
    { name: "Excel Link v6.0", category: "PRODUCTIVITY", rating: 4.8, status: "INSTALLED" },
    { name: "Risk Analytics Pro", category: "QUANT", rating: 4.5, status: "OPEN" },
    { name: "Social Sentinel", category: "DATA", rating: 4.2, status: "GET" },
    { name: "ESG Scorer Plus", category: "ESG", rating: 4.6, status: "GET" },
    { name: "Trade Flow Map", category: "MACRO", rating: 4.7, status: "GET" },
  ];

  return (
    <div className="bg-[#050505] h-full flex flex-col font-mono text-xs p-6 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 uppercase">Terminal App Store</h1>
        <p className="text-gray-500 font-bold uppercase text-[10px]">Customize your workstation with professional extensions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-5 hover:border-[#ffb900] transition-all group cursor-pointer relative overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-black border border-[#333] rounded">
                <AppWindow size={20} className="text-[#ffb900]" />
              </div>
              <div className="flex items-center gap-1 text-[#ffb900]">
                <Star size={10} fill="#ffb900" /> <span className="font-bold">{app.rating}</span>
              </div>
            </div>
            <h3 className="text-white font-bold text-sm mb-1 uppercase group-hover:text-[#ffb900]">{app.name}</h3>
            <p className="text-gray-600 text-[9px] font-bold uppercase mb-4">{app.category}</p>
            <button className={`w-full py-2 font-bold text-[10px] border transition-colors ${
              app.status === 'GET' ? 'bg-[#ffb900] text-black border-[#ffb900]' : 'bg-transparent text-gray-400 border-[#333]'
            }`}>
              {app.status}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-[#1a1a1a] p-6 border border-[#333] flex justify-between items-center">
         <div>
            <h2 className="text-white font-bold mb-1 uppercase">Workstation Performance</h2>
            <p className="text-gray-500 text-[9px] uppercase">Active extensions are monitored for resource utilization</p>
         </div>
         <div className="flex gap-4">
            <div className="text-right">
               <div className="text-gray-600 text-[8px] uppercase">CPU</div>
               <div className="text-[#00ff00] font-bold">12%</div>
            </div>
            <div className="text-right">
               <div className="text-gray-600 text-[8px] uppercase">LATENCY</div>
               <div className="text-[#00ff00] font-bold">45ms</div>
            </div>
         </div>
      </div>
    </div>
  );
};
