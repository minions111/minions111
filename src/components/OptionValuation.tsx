"use client";

import React from 'react';

interface OVMEProps {
  ticker: string;
}

export const OptionValuation = ({ ticker }: OVMEProps) => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - OVME (Option Valuation & Greeks)</span>
        <span>MODEL: BLACK-SCHOLES</span>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-3 uppercase text-[10px]">Inputs</h2>
          <div className="space-y-2">
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-500">Underlying Price</span>
              <span className="text-white font-bold">185.92</span>
            </div>
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-500">Strike Price</span>
              <span className="text-white font-bold">190.00</span>
            </div>
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-500">Days to Exp</span>
              <span className="text-white font-bold">35</span>
            </div>
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-500">Implied Vol (%)</span>
              <span className="text-[#ffb900] font-bold">24.50</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-3 uppercase text-[10px]">Greeks</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#111] p-3 border border-[#222]">
              <div className="text-gray-500 text-[9px] uppercase">Delta</div>
              <div className="text-white font-bold text-lg">0.425</div>
            </div>
            <div className="bg-[#111] p-3 border border-[#222]">
              <div className="text-gray-500 text-[9px] uppercase">Gamma</div>
              <div className="text-white font-bold text-lg">0.012</div>
            </div>
            <div className="bg-[#111] p-3 border border-[#222]">
              <div className="text-gray-500 text-[9px] uppercase">Vega</div>
              <div className="text-white font-bold text-lg">0.185</div>
            </div>
            <div className="bg-[#111] p-3 border border-[#222]">
              <div className="text-gray-500 text-[9px] uppercase">Theta</div>
              <div className="text-red-500 font-bold text-lg">-0.045</div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-blue-950/10 border border-blue-900/30 p-4 rounded text-center">
        <div className="text-gray-500 uppercase text-[10px] mb-1">Theoretical Call Value</div>
        <div className="text-white text-3xl font-bold">4.85 USD</div>
        <div className="text-gray-600 text-[9px] mt-2 uppercase">Scenario: +1% Vol = 5.04 USD</div>
      </div>
    </div>
  );
};
