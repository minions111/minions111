"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Smile, Frown, Meh, Globe } from 'lucide-react';

export const GlobalSentimentMap = () => {
  const regions = [
    { name: "US TECH", score: 82, trend: "UP", color: "bg-green-900/40" },
    { name: "EUROPE", score: 45, trend: "DOWN", color: "bg-red-900/40" },
    { name: "EM ASIA", score: 68, trend: "UP", color: "bg-green-700/40" },
    { name: "COMMODITIES", score: 52, trend: "SIDE", color: "bg-gray-800/40" },
    { name: "CRYPTO", score: 91, trend: "UP", color: "bg-green-950/60" },
    { name: "FIXED INCOME", score: 24, trend: "DOWN", color: "bg-red-950/60" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>GSENT - GLOBAL SOCIAL & NEWS SENTIMENT MAP</span>
        <span>INDEX: CROSS-ASSET AGGREGATE</span>
      </div>

      <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-2">
        {regions.map((r, i) => (
          <div key={i} className={cn("p-4 border border-[#222] flex flex-col justify-between hover:border-[#ffb900] transition-all cursor-pointer", r.color)}>
            <div className="flex justify-between items-start">
               <span className="text-white font-bold text-[10px] uppercase">{r.name}</span>
               {r.score > 70 ? <Smile size={14} className="text-[#00ff00]" /> :
                r.score < 40 ? <Frown size={14} className="text-red-500" /> : <Meh size={14} className="text-gray-500" />}
            </div>
            <div className="mt-4">
               <div className="text-2xl font-bold text-white">{r.score}</div>
               <div className="flex justify-between items-center text-[8px] text-gray-500 uppercase mt-1">
                  <span>Sentiment Score</span>
                  <span className={r.trend === 'UP' ? 'text-[#00ff00]' : r.trend === 'DOWN' ? 'text-red-500' : ''}>{r.trend}</span>
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 bg-[#111] p-4 border border-[#333]">
         <div className="text-[#ffb900] font-bold mb-2 uppercase text-[9px]">Intelligence Insight</div>
         <p className="text-gray-400 text-[10px] leading-relaxed uppercase">
            Sentiment in US Tech has reached extreme levels. Historically, 80+ readings precede mean reversion within 14 trading days.
            Fixed Income sentiment remains depressed as central bank rhetoric persists on 'higher for longer' path.
         </p>
      </div>
    </div>
  );
};
