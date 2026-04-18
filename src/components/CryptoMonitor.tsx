"use client";

import React, { useState, useEffect } from 'react';
import { Bitcoin, Coins, TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const CryptoMonitor = () => {
  const [prices, setPrices] = useState([
    { ticker: "BTC", name: "BITCOIN", price: 63452.10, change: +1.24, marketCap: "$1.2T" },
    { ticker: "ETH", name: "ETHEREUM", price: 3452.85, change: -0.45, marketCap: "$412B" },
    { ticker: "SOL", name: "SOLANA", price: 142.60, change: +5.12, marketCap: "$62B" },
    { ticker: "XRP", name: "RIPPLE", price: 0.62, change: -1.10, marketCap: "$34B" },
    { ticker: "BNB", name: "BINANCE", price: 582.30, change: +0.25, marketCap: "$88B" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => prev.map(p => ({
        ...p,
        price: p.price * (1 + (Math.random() * 0.002 - 0.001))
      })));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>CRYP - DIGITAL ASSET MONITOR</span>
        <span>EXCHANGE: GLOBAL_AGGREGATE</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {prices.slice(0, 3).map((p, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-4 flex flex-col items-center">
            <div className="text-gray-500 uppercase text-[9px] mb-2">{p.name} / USD</div>
            <div className="text-xl font-bold text-white tabular-nums">${p.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
            <div className={p.change >= 0 ? "text-[#00ff00] font-bold" : "text-red-500 font-bold"}>
              {p.change >= 0 ? "+" : ""}{p.change}%
            </div>
          </div>
        ))}
      </div>

      <table className="w-full">
        <thead className="text-gray-500 uppercase text-[9px] border-b border-[#333]">
          <tr>
            <th className="p-2 text-left font-normal">Asset</th>
            <th className="p-2 text-right font-normal">Price (USD)</th>
            <th className="p-2 text-right font-normal">24H Chg</th>
            <th className="p-2 text-right font-normal">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {prices.map((p, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer group">
              <td className="p-2 flex items-center gap-2">
                <span className="text-[#ffb900] font-bold">{p.ticker}</span>
                <span className="text-gray-500 text-[9px] uppercase">{p.name}</span>
              </td>
              <td className="p-2 text-right text-white font-bold tabular-nums">
                {p.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </td>
              <td className={cn(
                "p-2 text-right font-bold tabular-nums",
                p.change >= 0 ? "text-[#00ff00]" : "text-red-500"
              )}>
                {p.change >= 0 ? "+" : ""}{p.change.toFixed(2)}%
              </td>
              <td className="p-2 text-right text-gray-400 font-bold">{p.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
