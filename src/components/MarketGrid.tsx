"use client";

import React, { useState, useEffect } from 'react';
import { PriceSimulationEngine, PriceUpdate } from '@/lib/priceEngine';
import { cn } from '@/lib/utils';
import { STOCKS } from '@/lib/constants';
import { useAlerts } from './AlertToast';

export const MarketGrid = () => {
  const [prices, setPrices] = useState<Record<string, PriceUpdate>>({});
  const [isLive, setIsLive] = useState(false);
  const { showAlert } = useAlerts();

  useEffect(() => {
    // Initial connection alert
    setTimeout(() => {
      showAlert("Terminal Connection Established", "success");
    }, 2000);

    const engine = PriceSimulationEngine.getInstance();
    engine.start();
    const unsubscribe = engine.subscribe((updates) => {
      setPrices(prev => ({ ...prev, ...updates }));
      const firstUpdate = Object.values(updates)[0];
      if (firstUpdate) setIsLive(firstUpdate.isRealTime);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="flex flex-col h-full bg-black font-mono text-[11px]">
      <div className="bg-[#1a1a1a] p-1 px-3 text-[#ffb900] font-bold border-b border-[#333] flex justify-between items-center">
        <span>SECURITY MONITOR</span>
        <div className="flex items-center gap-2">
          <div className={cn("w-1.5 h-1.5 rounded-full", isLive ? "bg-[#00ff00] animate-pulse" : "bg-gray-600")} />
          <span className="text-[9px] text-gray-500 uppercase">{isLive ? "LIVE: FINNHUB" : "SIMULATED"}</span>
        </div>
      </div>

      <div className="overflow-y-auto flex-1">
        <table className="w-full text-left">
          <thead className="sticky top-0 bg-black border-b border-[#333] text-gray-500 uppercase text-[9px]">
            <tr>
              <th className="p-2 font-normal">Security</th>
              <th className="p-2 text-right font-normal">Price</th>
              <th className="p-2 text-right font-normal">Change</th>
              <th className="p-2 text-right font-normal">%Chg</th>
            </tr>
          </thead>
          <tbody>
            {STOCKS.map((stock) => {
              const liveData = prices[stock.ticker];
              const price = liveData ? liveData.price : stock.price;
              const change = liveData ? liveData.change : stock.change;
              const pct = liveData ? liveData.pct : stock.pct;
              const isUp = change >= 0;

              return (
                <tr
                  key={stock.ticker}
                  className="border-b border-[#111] hover:bg-[#111] cursor-pointer group"
                >
                  <td className="p-2">
                    <span className="text-[#ffb900] font-bold">{stock.ticker}</span>
                    <span className="ml-1 text-gray-500 group-hover:text-gray-300 uppercase text-[9px]">Equity</span>
                  </td>
                  <td className="p-2 text-right text-white font-bold tabular-nums">
                    {price.toFixed(2)}
                  </td>
                  <td className={cn(
                    "p-2 text-right font-bold tabular-nums text-[10px]",
                    isUp ? "text-[#00ff00]" : "text-[#ff0000]"
                  )}>
                    {isUp ? "+" : ""}{change.toFixed(2)}
                  </td>
                  <td className={cn(
                    "p-2 text-right font-bold tabular-nums text-[10px]",
                    isUp ? "text-[#00ff00]" : "text-[#ff0000]"
                  )}>
                    {isUp ? "+" : ""}{pct.toFixed(2)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
