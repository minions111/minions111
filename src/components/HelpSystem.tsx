"use client";

import React, { useState } from 'react';
import { Search, Book, Bookmark } from 'lucide-react';

export const HelpSystem = () => {
  const [query, setQuery] = useState('');

  const commonCommands = [
    { cmd: "MARKET", desc: "Main market monitor and charting hub" },
    { cmd: "FA", desc: "Financial analysis and summary statements" },
    { cmd: "OMON", desc: "Option monitor and chains" },
    { cmd: "WEI", desc: "World equity indices monitor" },
    { cmd: "BTMM", desc: "Treasury and money market monitor" },
    { cmd: "YC", desc: "Treasury yield curve plotting" },
    { cmd: "ALRT", desc: "Manage price and news alerts" },
    { cmd: "GPT", desc: "AI-driven market intelligence assistant" },
    { cmd: "L2", desc: "Level II market depth / order book" },
    { cmd: "CDS", desc: "Credit default swap spread monitor" },
    { cmd: "ETF", desc: "Global fund and ETF flow monitor" },
    { cmd: "ALGO", desc: "Systematic strategy execution engine" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-6 overflow-y-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-[#ffb900] p-3 text-black">
          <Book size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white uppercase">Bloomberg Terminal Help</h1>
          <p className="text-gray-500 uppercase text-[10px]">Command Guide & User Manual (120+ Modules)</p>
        </div>
      </div>

      <div className="max-w-2xl">
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search for commands, functions, or topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#111] border border-[#444] text-white p-3 pl-10 outline-none focus:border-[#ffb900]"
          />
          <Search size={16} className="absolute left-3 top-3.5 text-gray-500" />
        </div>

        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase">Popular Commands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {commonCommands.map((item, i) => (
              <div key={i} className="flex gap-4 group cursor-pointer border-b border-[#111] pb-2">
                <span className="text-white font-bold min-w-[60px] group-hover:text-[#ffb900] transition-colors">{item.cmd}</span>
                <span className="text-gray-500 leading-tight">{item.desc}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase">Navigation Basics</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              <span className="text-white font-bold mr-2">Tickers:</span>
              Type a security ticker (e.g., <span className="text-[#ffb900]">AAPL</span>) to load data for that security.
            </p>
            <p>
              <span className="text-white font-bold mr-2">Functions:</span>
              Type a mnemonic (e.g., <span className="text-[#ffb900]">DES</span>) to navigate to a specific functional module.
            </p>
            <p>
              <span className="text-white font-bold mr-2">Terminals:</span>
              Use <span className="text-[#ffb900]">T1</span> through <span className="text-[#ffb900]">T4</span> to switch between workstation screens.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
