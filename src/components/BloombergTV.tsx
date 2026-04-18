"use client";

import React, { useState } from 'react';
import { Play, Pause, Volume2, Maximize, Tv } from 'lucide-react';

export const BloombergTV = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-hidden">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>TV - BLOOMBERG LIVE MEDIA PLAYER</span>
        <span className="text-[#00ff00] animate-pulse">● LIVE FROM NEW YORK</span>
      </div>

      <div className="flex-1 bg-gradient-to-br from-[#111] to-[#000] border border-[#333] relative flex items-center justify-center group overflow-hidden">
        {/* Simulated Video Placeholder */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974717482-480928d195d5?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay grayscale group-hover:grayscale-0 transition-all duration-700" />

        <div className="z-10 flex flex-col items-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-16 h-16 bg-[#ffb900]/20 border border-[#ffb900] rounded-full flex items-center justify-center hover:bg-[#ffb900]/40 transition-all"
          >
            {isPlaying ? <Pause className="text-[#ffb900]" /> : <Play className="text-[#ffb900] ml-1" />}
          </button>
          <div className="text-white font-bold uppercase tracking-widest text-lg drop-shadow-lg">Bloomberg Surveillance</div>
        </div>

        {/* Lower Thirds Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#ffb900] text-black p-4 font-bold">
          <div className="text-xl mb-1 uppercase">FED EXPECTED TO HOLD RATES AS INFLATION COOLS</div>
          <div className="flex gap-4 text-[10px] items-center">
            <span className="bg-black text-[#ffb900] px-1">BREAKING</span>
            <span>TREASURY 10Y AT 4.21%</span>
            <span>S&P 500 FUTURES +0.45%</span>
          </div>
        </div>
      </div>

      <div className="h-12 bg-[#111] border-t border-[#333] flex items-center px-4 justify-between">
        <div className="flex gap-4 items-center">
          <Volume2 size={16} className="text-gray-500" />
          <div className="w-24 h-1 bg-[#333] rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-[#ffb900]" />
          </div>
        </div>
        <div className="flex gap-4 text-gray-500">
          <Maximize size={16} className="cursor-pointer hover:text-white" />
          <Tv size={16} className="cursor-pointer hover:text-white" />
        </div>
      </div>
    </div>
  );
};
