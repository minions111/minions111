"use client";

import React, { useState, useEffect, useMemo } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ComposedChart, Line, Bar
} from 'recharts';
import { PriceSimulationEngine } from '@/lib/priceEngine';

interface StockChartProps {
  ticker: string;
}

export const StockChart = ({ ticker }: StockChartProps) => {
  const [livePrice, setLivePrice] = useState<number | null>(null);

  useEffect(() => {
    const engine = PriceSimulationEngine.getInstance();
    const unsubscribe = engine.subscribe((updates) => {
      if (updates[ticker]) {
        setLivePrice(updates[ticker].price);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [ticker]);

  const data = useMemo(() => {
    const basePrice = livePrice || 185;
    return Array.from({ length: 40 }).map((_, i) => {
      const p = basePrice + (Math.random() * 10 - 5);
      const sma = p + (Math.random() * 2 - 1);
      const rsi = 40 + Math.random() * 40;
      return {
        time: `${10 + Math.floor(i/4)}:${(i%4)*15}`,
        price: p,
        sma: sma,
        rsi: rsi,
        volume: 1000 + Math.random() * 5000
      };
    });
  }, [ticker, livePrice]);

  return (
    <div className="flex flex-col h-full bg-black p-2 font-mono">
      <div className="flex justify-between items-center mb-1 px-2 border-b border-[#333] pb-1">
        <div className="flex items-center gap-3">
          <span className="text-[#ffb900] font-bold text-lg">{ticker} US Equity</span>
          <span className="text-white text-xl font-bold">{livePrice?.toFixed(2) || '185.92'}</span>
          <span className="text-[#00ff00] font-bold text-xs">+1.24 (+0.67%)</span>
        </div>
        <div className="text-[10px] text-gray-500 flex gap-4">
          <span>O: 185.10</span>
          <span>H: 186.50</span>
          <span>L: 184.20</span>
          <span>V: 38.2M</span>
        </div>
      </div>

      <div className="flex-1 min-h-0 relative">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffb900" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ffb900" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis dataKey="time" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis
              orientation="right"
              stroke="#666"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              domain={['auto', 'auto']}
              tickFormatter={(v) => v.toFixed(2)}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#111', border: '1px solid #333', fontSize: '10px' }}
              itemStyle={{ color: '#ffb900' }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#ffb900"
              fillOpacity={1}
              fill="url(#colorPrice)"
              strokeWidth={2}
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="sma"
              stroke="#00ff00"
              dot={false}
              strokeWidth={1}
              strokeDasharray="5 5"
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="h-1/4 border-t border-[#222] mt-2 pt-1">
        <div className="text-[9px] text-gray-500 mb-1">RSI (14): 62.45</div>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis dataKey="time" hide />
            <YAxis orientation="right" stroke="#666" fontSize={8} domain={[0, 100]} />
            <Line
              type="monotone"
              dataKey="rsi"
              stroke="#ffb900"
              dot={false}
              strokeWidth={1}
              isAnimationActive={false}
            />
            <Bar dataKey="volume" fill="#333" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
