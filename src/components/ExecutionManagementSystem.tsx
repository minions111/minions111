"use client";

import React, { useState, useEffect } from 'react';
import { Play, Pause, X, ChevronRight, Filter, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Order {
  id: string;
  ticker: string;
  side: 'BUY' | 'SELL';
  qty: number;
  filled: number;
  price: string;
  status: 'WORKING' | 'FILLED' | 'CANCELLED' | 'PENDING';
  broker: string;
  algo: string;
  time: string;
}

export const ExecutionManagementSystem = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: "ORD-9281", ticker: "AAPL", side: "BUY", qty: 5000, filled: 3200, price: "MKT", status: "WORKING", broker: "GS", algo: "VWAP", time: "09:30:01" },
    { id: "ORD-9282", ticker: "MSFT", side: "SELL", qty: 10000, filled: 10000, price: "415.50", status: "FILLED", broker: "MS", algo: "LMT", time: "09:32:15" },
    { id: "ORD-9285", ticker: "NVDA", side: "BUY", qty: 2500, filled: 0, price: "MKT", status: "PENDING", broker: "JPM", algo: "TWAP", time: "10:05:42" },
    { id: "ORD-9289", ticker: "TSLA", side: "SELL", qty: 1500, filled: 0, price: "175.20", status: "WORKING", broker: "BARC", algo: "LMT", time: "10:12:00" },
  ]);

  const [filter, setFilter] = useState('ALL');

  const filteredOrders = orders.filter(o => filter === 'ALL' || o.status === filter);

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs overflow-hidden">
      {/* Header */}
      <div className="bg-[#1a1a1a] p-1 px-3 border-b border-[#333] flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-[#ffb900] font-bold">EMSX - EXECUTION MANAGEMENT SYSTEM</span>
          <div className="flex gap-2">
            {['ALL', 'WORKING', 'FILLED', 'CANCELLED'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-2 py-0.5 border border-transparent hover:border-gray-500",
                  filter === f ? "bg-blue-600 text-white" : "text-gray-400"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-3 text-gray-400">
          <Settings size={14} className="cursor-pointer hover:text-white" />
          <Filter size={14} className="cursor-pointer hover:text-white" />
        </div>
      </div>

      {/* Summary Toolbar */}
      <div className="bg-[#111] p-2 border-b border-[#333] flex gap-8">
        <div className="flex flex-col">
          <span className="text-gray-500 text-[9px] uppercase">Working Value</span>
          <span className="text-white font-bold">$1,452,890.00</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-[9px] uppercase">Filled Value</span>
          <span className="text-[#00ff00] font-bold">$8,921,440.00</span>
        </div>
        <div className="flex flex-col">
          <span className="text-gray-500 text-[9px] uppercase">Total Orders</span>
          <span className="text-white font-bold">{orders.length}</span>
        </div>
      </div>

      {/* Orders Grid */}
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-[#0a0a0a] text-gray-500 text-[9px] uppercase border-b border-[#333]">
            <tr>
              <th className="p-2 font-normal border-r border-[#222]">Order ID</th>
              <th className="p-2 font-normal border-r border-[#222]">Side</th>
              <th className="p-2 font-normal border-r border-[#222]">Ticker</th>
              <th className="p-2 font-normal border-r border-[#222]">Qty</th>
              <th className="p-2 font-normal border-r border-[#222]">Filled</th>
              <th className="p-2 font-normal border-r border-[#222]">Price</th>
              <th className="p-2 font-normal border-r border-[#222]">Broker</th>
              <th className="p-2 font-normal border-r border-[#222]">Algo</th>
              <th className="p-2 font-normal border-r border-[#222]">Status</th>
              <th className="p-2 font-normal">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b border-[#111] hover:bg-blue-900/10 group transition-colors">
                <td className="p-2 text-gray-400 border-r border-[#111]">{order.id}</td>
                <td className={cn(
                  "p-2 font-bold border-r border-[#111]",
                  order.side === 'BUY' ? "text-blue-500" : "text-red-500"
                )}>
                  {order.side}
                </td>
                <td className="p-2 text-white font-bold border-r border-[#111]">{order.ticker}</td>
                <td className="p-2 text-white border-r border-[#111]">{order.qty.toLocaleString()}</td>
                <td className="p-2 border-r border-[#111]">
                  <div className="flex flex-col gap-1">
                    <span className="text-white">{order.filled.toLocaleString()}</span>
                    <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: `${(order.filled / order.qty) * 100}%` }}
                      />
                    </div>
                  </div>
                </td>
                <td className="p-2 text-gray-300 border-r border-[#111]">{order.price}</td>
                <td className="p-2 text-orange-400 border-r border-[#111]">{order.broker}</td>
                <td className="p-2 text-gray-500 border-r border-[#111]">{order.algo}</td>
                <td className="p-2 border-r border-[#111]">
                  <span className={cn(
                    "px-1.5 py-0.5 rounded text-[9px] font-bold uppercase",
                    order.status === 'WORKING' && "bg-blue-900 text-blue-300",
                    order.status === 'FILLED' && "bg-green-900 text-green-300",
                    order.status === 'PENDING' && "bg-orange-900 text-orange-300",
                    order.status === 'CANCELLED' && "bg-red-900 text-red-300",
                  )}>
                    {order.status}
                  </span>
                </td>
                <td className="p-2">
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-gray-400 hover:text-white"><X size={14} /></button>
                    <button className="text-gray-400 hover:text-white"><Pause size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer / Log */}
      <div className="bg-[#1a1a1a] p-1 px-3 border-t border-[#333] text-[9px] text-gray-500 flex justify-between uppercase">
        <div className="flex gap-4">
          <span>Session: Bloomberg Tradebook</span>
          <span className="text-[#00ff00]">Connected: EMSX_NY_PROD_1</span>
        </div>
        <div className="flex gap-4">
          <span>Latency: 4ms</span>
          <span>FIX Status: Active</span>
        </div>
      </div>
    </div>
  );
};
