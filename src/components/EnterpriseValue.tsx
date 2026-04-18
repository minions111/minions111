"use client";

import React from 'react';

interface EVProps {
  ticker: string;
}

export const EnterpriseValue = ({ ticker }: EVProps) => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - EV (Enterprise Value)</span>
        <span>CURRENCY: USD M</span>
      </div>

      <div className="flex-1 space-y-6">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-3 uppercase text-[10px]">Market Capitalization</h2>
          <div className="space-y-2">
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-500 uppercase">Shares Outstanding</span>
              <span className="text-white">15,450.2</span>
            </div>
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-500 uppercase">Share Price</span>
              <span className="text-[#00ff00]">185.92</span>
            </div>
            <div className="flex justify-between font-bold py-1">
              <span className="text-white uppercase">Market Cap</span>
              <span className="text-white">2,872,500</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-3 uppercase text-[10px]">Adjustments to Enterprise Value</h2>
          <div className="space-y-2">
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-500 uppercase">(+) Total Debt</span>
              <span className="text-[#ff0000]">108,040</span>
            </div>
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-500 uppercase">(+) Preferred Stock</span>
              <span className="text-white">0</span>
            </div>
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-500 uppercase">(+) Minority Interest</span>
              <span className="text-white">0</span>
            </div>
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-500 uppercase">(-) Cash & Equivalents</span>
              <span className="text-[#00ff00]">(73,100)</span>
            </div>
          </div>
        </section>

        <div className="bg-[#111] border border-[#222] p-4 text-center">
          <div className="text-gray-500 uppercase text-[10px] mb-1">Total Enterprise Value (TEV)</div>
          <div className="text-white text-3xl font-bold">2,907,440</div>
        </div>
      </div>
    </div>
  );
};
