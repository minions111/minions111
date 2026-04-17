"use client";

import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState('1000');
  const [base, setBase] = useState('USD');
  const [target, setTarget] = useState('EUR');

  const rates: Record<string, number> = {
    'EUR': 0.94,
    'GBP': 0.81,
    'JPY': 154.55,
    'AUD': 1.56,
    'CAD': 1.38,
    'CHF': 0.91,
  };

  const result = (parseFloat(amount) * (rates[target] || 1)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>FXCA - CURRENCY CONVERTER</span>
        <span>LIVE MID RATES</span>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-8">
        <div className="bg-[#111] p-6 border border-[#222] w-full max-w-md">
          <div className="space-y-4">
            <div>
              <label className="text-gray-500 uppercase text-[9px] block mb-1">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-black border border-[#444] text-[#ffb900] text-xl font-bold w-full p-2 outline-none focus:border-[#ffb900]"
              />
            </div>

            <div className="flex gap-4 items-end">
              <div className="flex-1">
                <label className="text-gray-500 uppercase text-[9px] block mb-1">From</label>
                <select className="bg-black border border-[#444] text-white w-full p-2 outline-none">
                  <option>USD - US DOLLAR</option>
                </select>
              </div>
              <div className="pb-2 text-[#ffb900]">
                <RefreshCw size={16} />
              </div>
              <div className="flex-1">
                <label className="text-gray-500 uppercase text-[9px] block mb-1">To</label>
                <select
                  className="bg-black border border-[#444] text-white w-full p-2 outline-none"
                  value={target}
                  onChange={(e) => setTarget(e.target.value)}
                >
                  {Object.keys(rates).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            <div className="pt-6 border-t border-[#222] text-center">
              <div className="text-gray-500 uppercase text-[10px] mb-1">Converted Amount</div>
              <div className="text-white text-4xl font-bold">{result} {target}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full max-w-md">
          {Object.entries(rates).slice(0, 3).map(([c, r]) => (
            <div key={c} className="bg-[#0a0a0a] border border-[#222] p-2 text-center">
              <div className="text-gray-500 text-[9px]">{c}/USD</div>
              <div className="text-white font-bold">{r}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
