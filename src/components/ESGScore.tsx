"use client";

import React from 'react';

interface ESGProps {
  ticker: string;
}

export const ESGScore = ({ ticker }: ESGProps) => {
  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - ESG (Sustainability Profile)</span>
        <span>BLOOMBERG ESG DATA</span>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-[#111] border border-[#222] p-4 text-center border-t-4 border-t-[#00ff00]">
          <div className="text-gray-500 text-[10px] uppercase">Bloomberg ESG Score</div>
          <div className="text-white text-3xl font-bold">7.4</div>
          <div className="text-[#00ff00] text-[9px] uppercase mt-1">Above Peer Median</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-3 text-center">
          <div className="text-gray-500 text-[9px] uppercase">Environmental</div>
          <div className="text-white text-xl font-bold">6.8</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-3 text-center">
          <div className="text-gray-500 text-[9px] uppercase">Social</div>
          <div className="text-white text-xl font-bold">7.2</div>
        </div>
        <div className="bg-[#111] border border-[#222] p-3 text-center">
          <div className="text-gray-500 text-[9px] uppercase">Governance</div>
          <div className="text-white text-xl font-bold">8.5</div>
        </div>
      </div>

      <section className="space-y-6">
        <div>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-3 uppercase text-[10px]">ESG Disclosures & Metrics</h2>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2">
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-400">GHG Intensity per Revenue</span>
              <span className="text-white">12.4 MT</span>
            </div>
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-400">% Women in Management</span>
              <span className="text-white">34.5%</span>
            </div>
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-400">Independent Board Members</span>
              <span className="text-white">88.9%</span>
            </div>
            <div className="flex justify-between border-b border-[#111] py-1">
              <span className="text-gray-400">Total Energy Consumption</span>
              <span className="text-white">2.1M GWh</span>
            </div>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-3 border border-[#333] italic text-[10px] text-gray-400">
          Note: Bloomberg ESG Scores are based on company-disclosed data and proprietary weighting models. Metrics are updated annually following the release of sustainability reports.
        </div>
      </section>
    </div>
  );
};
