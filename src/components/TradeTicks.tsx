"use client";

import React, { useState, useEffect } from 'react';
import { PriceSimulationEngine } from '@/lib/priceEngine';

export const TradeTicks = () => {
  const [ticks, setTicks] = useState<any[]>([]);

  useEffect(() => {
    const engine = PriceSimulationEngine.getInstance();
    const unsubscribe = engine.subscribe((updates) => {
      const newTicks = Object.entries(updates).map(([ticker, data]) => ({
        ticker,
        price: data.price,
        time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        size: Math.floor(Math.random() * 5000) + 100,
        condition: Math.random() > 0.8 ? 'BLOCK' : 'REG',
        side: Math.random() > 0.5 ? 'BUY' : 'SELL'
      }));
      setTicks(prev => [...newTicks, ...prev].slice(0, 50));
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-hidden">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>TICK - HIGH FREQUENCY TRADE LOGGER</span>
        <span>SESSION: LIVE_STREAM</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        <table className="w-full">
          <thead className="text-gray-500 uppercase text-[9px] border-b border-[#333] sticky top-0 bg-black">
            <tr>
              <th className="p-2 text-left font-normal">Time</th>
              <th className="p-2 text-left font-normal">Ticker</th>
              <th className="p-2 text-right font-normal">Price</th>
              <th className="p-2 text-right font-normal">Size</th>
              <th className="p-2 text-center font-normal">Side</th>
              <th className="p-2 text-center font-normal">Cond</th>
            </tr>
          </thead>
          <tbody>
            {ticks.map((t, i) => (
              <tr key={i} className="border-b border-[#111] hover:bg-[#111] tabular-nums group">
                <td className="p-2 text-gray-500">{t.time}</td>
                <td className="p-2 text-[#ffb900] font-bold">{t.ticker}</td>
                <td className="p-2 text-right text-white font-bold">{t.price.toFixed(4)}</td>
                <td className="p-2 text-right text-white">{t.size.toLocaleString()}</td>
                <td className={t.side === 'BUY' ? "p-2 text-center text-[#00ff00] font-bold" : "p-2 text-center text-red-500 font-bold"}>
                  {t.side}
                </td>
                <td className="p-2 text-center">
                  <span className={t.condition === 'BLOCK' ? "bg-[#ffb900] text-black px-1 font-bold text-[8px]" : "text-gray-600 text-[8px]"}>
                    {t.condition}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
