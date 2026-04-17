"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

export const OrderEntry = () => {
  const [side, setSide] = useState<'BUY' | 'SELL'>('BUY');
  const [symbol, setSymbol] = useState('AAPL');
  const [qty, setQty] = useState('100');
  const [type, setType] = useState('LIMIT');
  const [price, setPrice] = useState('185.92');

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs border-l border-[#333]">
      <div className="bg-[#1a1a1a] p-2 border-b border-[#333] text-[#ffb900] font-bold text-sm">
        EMSX - ORDER ENTRY
      </div>

      <div className="p-4 space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => setSide('BUY')}
            className={cn(
              "flex-1 py-2 font-bold border",
              side === 'BUY' ? "bg-[#00ff00] text-black border-[#00ff00]" : "bg-black text-[#00ff00] border-[#00ff00]"
            )}
          >
            BUY
          </button>
          <button
            onClick={() => setSide('SELL')}
            className={cn(
              "flex-1 py-2 font-bold border",
              side === 'SELL' ? "bg-[#ff0000] text-white border-[#ff0000]" : "bg-black text-[#ff0000] border-[#ff0000]"
            )}
          >
            SELL
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-gray-500 block text-[10px]">TICKER</label>
            <input
              type="text"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value.toUpperCase())}
              className="w-full bg-[#111] border border-[#333] p-1 text-[#ffb900] outline-none focus:border-[#ffb900]"
            />
          </div>
          <div className="space-y-1">
            <label className="text-gray-500 block text-[10px]">QUANTITY</label>
            <input
              type="number"
              value={qty}
              onChange={(e) => setQty(e.target.value)}
              className="w-full bg-[#111] border border-[#333] p-1 text-white outline-none focus:border-[#ffb900]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-gray-500 block text-[10px]">ORDER TYPE</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-[#111] border border-[#333] p-1 text-white outline-none focus:border-[#ffb900] appearance-none"
            >
              <option>LIMIT</option>
              <option>MARKET</option>
              <option>STOP</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-gray-500 block text-[10px]">LIMIT PRICE</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-[#111] border border-[#333] p-1 text-white outline-none focus:border-[#ffb900]"
            />
          </div>
        </div>

        <div className="pt-4 space-y-2 border-t border-[#222]">
          <div className="flex justify-between text-gray-500">
            <span>Est. Total:</span>
            <span className="text-white">{(parseFloat(qty) * parseFloat(price)).toLocaleString()} USD</span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>Comm. (Est):</span>
            <span className="text-white">1.00 USD</span>
          </div>
        </div>

        <button className="w-full bg-[#ffb900] text-black font-bold py-3 mt-4 hover:bg-[#e6a800] transition-colors">
          TRANSMIT {side} ORDER
        </button>
      </div>

      <div className="mt-auto bg-[#111] p-2 text-[10px] text-gray-600 border-t border-[#333]">
        WARNING: Live trading is active for account BLMB-8821.
        Orders are subject to market volatility.
      </div>
    </div>
  );
};
