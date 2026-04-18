"use client";

import React, { useState, useEffect } from 'react';
import { PriceSimulationEngine } from '@/lib/priceEngine';

export const Level2Depth = () => {
  const [bids, setBids] = useState([
    { price: "185.91", size: "1,200", total: "1,200", ex: "NASD" },
    { price: "185.90", size: "2,450", total: "3,650", ex: "NYSE" },
    { price: "185.89", size: "800", total: "4,450", ex: "BATS" },
    { price: "185.88", size: "5,000", total: "9,450", ex: "ARCA" },
    { price: "185.87", size: "1,100", total: "10,550", ex: "EDGX" },
  ]);

  const [asks, setAsks] = useState([
    { price: "185.93", size: "900", total: "900", ex: "NASD" },
    { price: "185.94", size: "1,100", total: "2,000", ex: "NYSE" },
    { price: "185.95", size: "3,200", total: "5,200", ex: "BATS" },
    { price: "185.96", size: "450", total: "5,650", ex: "ARCA" },
    { price: "185.97", size: "15,000", total: "20,650", ex: "EDGA" },
  ]);

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>L2 - MARKET DEPTH (LEVEL II)</span>
        <span>SYMBOL: AAPL US</span>
      </div>

      <div className="grid grid-cols-2 gap-4 flex-1">
        <section>
          <h2 className="text-[#00ff00] font-bold border-b border-[#333] mb-2 uppercase text-[9px] text-center">Bids (Buy)</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b border-[#222] text-[8px]">
                <th>Ex</th>
                <th className="text-right">Size</th>
                <th className="text-right">Price</th>
              </tr>
            </thead>
            <tbody className="text-[#00ff00]">
              {bids.map((b, i) => (
                <tr key={i} className="border-b border-[#111] hover:bg-green-900/10">
                  <td className="py-1 text-gray-500">{b.ex}</td>
                  <td className="text-right">{b.size}</td>
                  <td className="text-right font-bold tabular-nums">{b.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-red-500 font-bold border-b border-[#333] mb-2 uppercase text-[9px] text-center">Asks (Sell)</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b border-[#222] text-[8px]">
                <th>Price</th>
                <th className="text-right">Size</th>
                <th className="text-right">Ex</th>
              </tr>
            </thead>
            <tbody className="text-red-500">
              {asks.map((a, i) => (
                <tr key={i} className="border-b border-[#111] hover:bg-red-900/10">
                  <td className="py-1 font-bold tabular-nums">{a.price}</td>
                  <td className="text-right">{a.size}</td>
                  <td className="text-right text-gray-500">{a.ex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>

      <div className="mt-4 bg-[#111] p-2 border border-[#222] flex justify-between text-[10px]">
        <div>
          <span className="text-gray-500">Spread:</span>
          <span className="text-white ml-2">0.02 (1.08 bps)</span>
        </div>
        <div>
          <span className="text-gray-500">Liquidity:</span>
          <span className="text-white ml-2">Deep</span>
        </div>
      </div>
    </div>
  );
};
