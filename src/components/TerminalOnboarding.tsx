"use client";

import React from 'react';
import { Rocket, MousePointer2, Keyboard, Search } from 'lucide-react';

export const TerminalOnboarding = () => {
  const steps = [
    { title: "Navigation", icon: <MousePointer2 size={16} />, desc: "Type any ticker (e.g., AAPL) or command (e.g., FA) in the command bar above." },
    { title: "Shortcuts", icon: <Keyboard size={16} />, desc: "Use F1 for Help, F4 for Market, and Alt+1 through Alt+4 to switch terminals." },
    { title: "Discovery", icon: <Search size={16} />, desc: "Use DIR to see every available function or GPT to ask the AI assistant." },
  ];

  return (
    <div className="bg-[#050505] h-full flex flex-col font-mono text-xs p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center">
          <div className="inline-block bg-[#ffb900] p-4 text-black mb-6">
            <Rocket size={48} />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 uppercase tracking-tighter">Welcome to Terminal Pro</h1>
          <p className="text-gray-500 text-lg uppercase font-bold">Absolute Complete Institutional Workstation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <div key={i} className="bg-[#111] border border-[#222] p-6 hover:border-[#ffb900] transition-all group">
              <div className="text-[#ffb900] mb-4 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-white font-bold text-sm mb-2 uppercase">{s.title}</h3>
              <p className="text-gray-500 leading-relaxed uppercase text-[10px]">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#1a1a1a] p-8 border border-[#333] space-y-6">
          <h2 className="text-[#ffb900] font-bold text-center uppercase">Get Started with Core Commands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['TOP', 'WEI', 'BTMM', 'CRYP', 'FA', 'YC', 'GPT', 'DIR'].map(cmd => (
              <div key={cmd} className="bg-black border border-[#444] p-3 text-[#ffb900] font-bold hover:bg-[#222] cursor-pointer">
                {cmd}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-gray-600 uppercase text-[9px]">
          BLOOMBERG TERMINAL CLONE - PLATINUM DIAMOND EDITION - VERSION 2025.1
        </div>
      </div>
    </div>
  );
};
