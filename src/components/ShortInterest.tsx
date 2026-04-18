"use client";

import React from 'react';

interface SIProps {
  ticker: string;
}

export const ShortInterest = ({ ticker }: SIProps) => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - SI (Short Interest)</span>
        <span>SETTLEMENT: 2026-04-15</span>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-[#111] border border-[#222] p-4 text-center">
          <div className="text-gray-500 text-[8px] uppercase mb-1">Short Interest (Shares)</div>
          <div className="text-white text-xl font-bold">12.4M</div>
          <div className="text-red-500 text-[9px] mt-1">+2.4% vs Prev</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-4 text-center border-t-4 border-t-red-600">
          <div className="text-gray-500 text-[8px] uppercase mb-1">% of Float</div>
          <div className="text-white text-xl font-bold">8.42%</div>
          <div className="text-gray-500 text-[9px] mt-1">Peer Median: 2.1%</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-4 text-center">
          <div className="text-gray-500 text-[8px] uppercase mb-1">Days to Cover</div>
          <div className="text-white text-xl font-bold">2.4 Days</div>
          <div className="text-gray-500 text-[9px] mt-1">Avg Vol: 38.2M</div>
        </div>
      </div>

      <section>
        <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-4 uppercase text-[10px]">Historical Short Positioning</h2>
        <div className="h-40 bg-[#0a0a0a] border border-[#222] flex items-end justify-between px-4 pb-4">
          {[40, 45, 38, 52, 60, 58, 65, 72].map((h, i) => (
            <div key={i} className="bg-red-900/40 border-t border-red-500 w-8" style={{ height: `${h}%` }}></div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[8px] text-gray-600 uppercase">
          <span>SEP 25</span>
          <span>OCT 25</span>
          <span>NOV 25</span>
          <span>DEC 25</span>
          <span>JAN 26</span>
          <span>FEB 26</span>
          <span>MAR 26</span>
          <span>APR 26</span>
        </div>
      </section>
    </div>
  );
};
