"use client";

import React, { useState, useEffect } from 'react';
import PortfolioStore, { Position } from '@/lib/portfolioStore';
import { PriceSimulationEngine } from '@/lib/priceEngine';

export const Portfolio = () => {
  const [positions, setPositions] = useState<Position[]>([]);
  const [cash, setCash] = useState(0);

  useEffect(() => {
    const store = PortfolioStore.getInstance();
    const engine = PriceSimulationEngine.getInstance();

    const updateLocalState = () => {
      setPositions(store.getPositions());
      setCash(store.getCash());
    };

    updateLocalState();

    const unsubStore = store.subscribe(updateLocalState);
    const unsubEngine = engine.subscribe((updates) => {
      const prices: Record<string, number> = {};
      Object.keys(updates).forEach(t => prices[t] = updates[t].price);
      store.updateMarketPrices(prices);
    });

    return () => {
      unsubStore();
      unsubEngine();
    };
  }, []);

  const totalMarketVal = positions.reduce((acc, p) => acc + p.marketValue, 0);
  const totalPL = positions.reduce((acc, p) => acc + p.profit, 0);

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs">
      <div className="bg-[#1a1a1a] p-2 border-b border-[#333] flex justify-between items-center">
        <span className="text-[#ffb900] font-bold text-base uppercase">PF - ACTIVE PORTFOLIO</span>
        <div className="flex gap-6 text-[10px]">
          <div className="flex flex-col items-end">
            <span className="text-gray-500 uppercase">Cash Available</span>
            <span className="text-white font-bold">${cash.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-gray-500 uppercase">Total NAV</span>
            <span className="text-white font-bold">${(cash + totalMarketVal).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <table className="w-full text-left">
          <thead className="bg-[#111] text-gray-500 sticky top-0 uppercase text-[9px]">
            <tr>
              <th className="p-2 border-b border-[#333]">Security</th>
              <th className="p-2 border-b border-[#333] text-right">Qty</th>
              <th className="p-2 border-b border-[#333] text-right">Avg Price</th>
              <th className="p-2 border-b border-[#333] text-right">Market</th>
              <th className="p-2 border-b border-[#333] text-right">Value</th>
              <th className="p-2 border-b border-[#333] text-right">P/L</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((p) => (
              <tr key={p.ticker} className="border-b border-[#222] hover:bg-[#111]">
                <td className="p-2 text-[#ffb900] font-bold">{p.ticker} US</td>
                <td className="p-2 text-right text-white font-bold">{p.shares.toLocaleString()}</td>
                <td className="p-2 text-right text-gray-400">{p.avgPrice.toFixed(2)}</td>
                <td className="p-2 text-right text-white">{p.marketPrice.toFixed(2)}</td>
                <td className="p-2 text-right text-white font-bold">${p.marketValue.toLocaleString(undefined, { maximumFractionDigits: 0 })}</td>
                <td className={`p-2 text-right font-bold ${p.profit >= 0 ? 'text-[#00ff00]' : 'text-red-500'}`}>
                  {p.profit >= 0 ? '+' : ''}{p.profit.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </td>
              </tr>
            ))}
            {positions.length === 0 && (
              <tr>
                <td colSpan={6} className="p-8 text-center text-gray-600 uppercase">No active positions in session</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="bg-[#111] p-3 border-t border-[#333] flex justify-between items-center text-[11px]">
        <div className="flex gap-4">
          <span className="text-gray-500">Day P/L:</span>
          <span className={totalPL >= 0 ? 'text-[#00ff00]' : 'text-red-500'}>
            ${totalPL.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </span>
        </div>
        <button className="text-[#ffb900] border border-[#ffb900] px-3 py-0.5 hover:bg-[#ffb900] hover:text-black transition-all">
          SETTLEMENT DETAILS
        </button>
      </div>
    </div>
  );
};
