"use client";

import React from 'react';
import { LayoutGrid, TrendingUp, Newspaper, Globe, MessageSquare, Bell } from 'lucide-react';

export const Launchpad = () => {
  const widgets = [
    { title: "Market Pulse", icon: <TrendingUp size={16} className="text-[#00ff00]" />, desc: "Top movers and index performance" },
    { title: "News Stream", icon: <Newspaper size={16} className="text-[#ffb900]" />, desc: "Real-time institutional headlines" },
    { title: "Global Macro", icon: <Globe size={16} className="text-blue-400" />, desc: "GDP, CPI, and central bank data" },
    { title: "Instant Bloomberg", icon: <MessageSquare size={16} className="text-gray-400" />, desc: "Secure team communication" },
    { title: "Alert Center", icon: <Bell size={16} className="text-red-500" />, desc: "Manage price and news triggers" },
    { title: "Grid Builder", icon: <LayoutGrid size={16} className="text-purple-400" />, desc: "Customize your workspace layout" },
  ];

  return (
    <div className="bg-[#050505] h-full flex flex-col font-mono text-xs p-6 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">LAUNCHPAD</h1>
        <p className="text-gray-500">Welcome to your personalized Bloomberg workstation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {widgets.map((w, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-5 hover:border-[#ffb900] cursor-pointer transition-all group">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-2 bg-black border border-[#333] rounded">
                {w.icon}
              </div>
              <div className="text-[#ffb900] font-bold uppercase group-hover:text-white">{w.title}</div>
            </div>
            <p className="text-gray-500 text-[10px] leading-relaxed">{w.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-[#1a1a1a] p-4 border border-[#333] rounded">
        <div className="text-white font-bold mb-2 uppercase text-[10px]">Quick Start Commands</div>
        <div className="grid grid-cols-4 gap-2">
          {['WEI', 'FA', 'BTMM', 'OMON', 'TECH', 'ALRT', 'PF', 'MOST'].map(cmd => (
            <div key={cmd} className="bg-black border border-[#444] p-2 text-center text-[#ffb900] font-bold hover:bg-[#222]">
              {cmd}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
