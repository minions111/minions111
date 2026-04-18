"use client";

import React from 'react';

export const Seasonality = () => {
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const returns = [1.2, 2.4, -0.5, 3.8, 0.4, 1.8, 4.2, -1.2, -2.4, 1.1, 3.5, 2.8];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>SEAS - HISTORICAL SEASONALITY</span>
        <span>INDEX: S&P 500 (10Y AVG)</span>
      </div>

      <div className="flex-1 grid grid-cols-6 md:grid-cols-12 gap-1 mb-8">
        {months.map((m, i) => (
          <div key={m} className="flex flex-col gap-1">
            <div className={`flex-1 flex items-center justify-center font-bold border border-white/5 ${
              returns[i] > 0 ? 'bg-green-900/40 text-[#00ff00]' : 'bg-red-900/40 text-red-500'
            }`}>
              {returns[i] > 0 ? '+' : ''}{returns[i]}%
            </div>
            <div className="text-center text-gray-500 text-[8px]">{m}</div>
          </div>
        ))}
      </div>

      <div className="bg-[#111] p-4 border border-[#222]">
        <h2 className="text-white font-bold mb-2 uppercase text-[10px]">Historical Probability</h2>
        <p className="text-gray-500 text-[10px] leading-relaxed">
          April has historically been the strongest month for the S&P 500 over the last 10 years, closing higher 80% of the time with an average return of +3.8%. September remains the weakest month with a 40% win rate and -2.4% average return.
        </p>
      </div>
    </div>
  );
};
