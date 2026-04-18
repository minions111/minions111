"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import PortfolioStore from '@/lib/portfolioStore';
import { PriceSimulationEngine } from '@/lib/priceEngine';

export const OrderEntry = () => {
  const [side, setSide] = useState<'BUY' | 'SELL'>('BUY');
  const [ticker, setTicker] = useState('AAPL');
  const [shares, setShares] = useState('100');
  const [status, setStatus] = useState<string | null>(null);

  const executeOrder = () => {
    const store = PortfolioStore.getInstance();
    const engine = PriceSimulationEngine.getInstance();
    const currentPrice = engine.getPrice(ticker) || 185;

    const success = store.executeTrade(
      ticker,
      parseInt(shares),
      currentPrice,
      side
    );

    if (success) {
      setStatus(`Order Filled: ${side} ${shares} ${ticker} @ ${currentPrice.toFixed(2)}`);
      setTimeout(() => setStatus(null), 3000);
    } else {
      setStatus("Error: Insufficient Funds/Position");
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <div className="bg-[#0a0a0a] h-full flex flex-col font-mono text-[11px] p-3">
      <div className="text-[#ffb900] font-bold border-b border-[#333] pb-2 mb-4 uppercase">
        EMSX - EXECUTION MANAGEMENT
      </div>

      <div className="space-y-4">
        <div className="flex bg-black border border-[#333] p-1 rounded">
          <button
            onClick={() => setSide('BUY')}
            className={cn(
              "flex-1 py-2 font-bold transition-all",
              side === 'BUY' ? "bg-[#00ff00] text-black" : "text-gray-500"
            )}
          >
            BUY
          </button>
          <button
            onClick={() => setSide('SELL')}
            className={cn(
              "flex-1 py-2 font-bold transition-all",
              side === 'SELL' ? "bg-red-600 text-white" : "text-gray-500"
            )}
          >
            SELL
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex flex-col">
            <label className="text-gray-500 uppercase text-[9px] mb-1">Ticker</label>
            <input
              type="text"
              value={ticker}
              onChange={(e) => setTicker(e.target.value.toUpperCase())}
              className="bg-black border border-[#444] text-white p-2 outline-none focus:border-[#ffb900]"
              placeholder="SYMBOL..."
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-500 uppercase text-[9px] mb-1">Shares</label>
            <input
              type="number"
              value={shares}
              onChange={(e) => setShares(e.target.value)}
              className="bg-black border border-[#444] text-white p-2 outline-none focus:border-[#ffb900]"
            />
          </div>
        </div>

        <div className="pt-4 space-y-3">
          <div className="flex justify-between text-[10px]">
            <span className="text-gray-500 uppercase">TIF:</span>
            <span className="text-white">DAY</span>
          </div>
          <div className="flex justify-between text-[10px]">
            <span className="text-gray-500 uppercase">Route:</span>
            <span className="text-blue-400 font-bold uppercase">Smart (BATS)</span>
          </div>
        </div>

        <button
          onClick={executeOrder}
          className="w-full py-3 bg-[#ffb900] text-black font-bold uppercase hover:bg-white transition-colors"
        >
          Transmit Order
        </button>

        {status && (
          <div className={cn(
            "p-2 text-center text-[10px] font-bold border",
            status.startsWith('Order') ? "bg-green-900/20 border-green-900 text-green-400" : "bg-red-900/20 border-red-900 text-red-400"
          )}>
            {status}
          </div>
        )}
      </div>

      <div className="mt-auto pt-4 border-t border-[#222]">
        <div className="text-gray-600 text-[9px] uppercase leading-relaxed">
          Disclaimer: Execution simulated via workstation virtual blotter. No real trades are routed to external exchanges.
        </div>
      </div>
    </div>
  );
};
