"use client";

import React, { useState, useEffect, useMemo } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ComposedChart, Line, Bar
} from 'recharts';
import { PriceSimulationEngine } from '@/lib/priceEngine';
import { fetchHistoricalData } from '@/lib/news';
import { calculateSMA, calculateRSI } from '@/lib/indicators';

interface StockChartProps {
  ticker: string;
}

export const StockChart = ({ ticker }: StockChartProps) => {
  const [livePrice, setLivePrice] = useState<number | null>(null);
  const [histData, setHistData] = useState<any[]>([]);

  useEffect(() => {
    const loadHist = async () => {
      const data = await fetchHistoricalData(ticker);
      if (data) setHistData(data);
    };
    loadHist();

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
    // If no real historical data, generate high-quality fallback data
    const sourceData = histData.length > 0 ? histData : Array.from({ length: 100 }).map((_, i) => {
      const base = 180 + Math.sin(i / 10) * 5;
      return {
        time: `2024-01-${i + 1}`,
        price: base + Math.random() * 2,
        open: base,
        high: base + 2,
        low: base - 1,
        volume: 1000000 + Math.random() * 500000
      };
    });

    const prices = sourceData.map(d => d.price);
    const sma50 = calculateSMA(prices, 50);
    const rsi = calculateRSI(prices, 14);

    return sourceData.map((d, i) => ({
      ...d,
      sma50: sma50[i],
      rsi: rsi[i],
    }));
  }, [histData]);

  const currentPriceDisplay = livePrice || (data.length > 0 ? data[data.length - 1].price : 0);

  return (
    <div className="flex flex-col h-full bg-black p-2 font-mono">
      <div className="flex justify-between items-center mb-1 px-2 border-b border-[#333] pb-1">
        <div className="flex items-center gap-3">
          <span className="text-[#ffb900] font-bold text-lg">{ticker} US Equity</span>
          <span className="text-white text-xl font-bold tabular-nums">{currentPriceDisplay.toFixed(2)}</span>
          <span className="text-[#00ff00] font-bold text-xs">+1.24 (+0.67%)</span>
        </div>
        <div className="text-[10px] text-gray-500 flex gap-4 uppercase">
          <span>O: {data[data.length-1]?.open.toFixed(2) || '--'}</span>
          <span>H: {data[data.length-1]?.high.toFixed(2) || '--'}</span>
          <span>L: {data[data.length-1]?.low.toFixed(2) || '--'}</span>
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
            <XAxis dataKey="time" stroke="#666" fontSize={10} tickLine={false} axisLine={false} hide />
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
              dataKey="sma50"
              stroke="#00ff00"
              dot={false}
              strokeWidth={1}
              strokeDasharray="5 5"
              isAnimationActive={false}
              name="SMA 50"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="h-1/4 border-t border-[#222] mt-2 pt-1">
        <div className="flex justify-between px-2 text-[9px] text-gray-500 mb-1">
          <span>RSI (14): {data[data.length-1]?.rsi?.toFixed(2) || '--'}</span>
          <span>VOLUME: {data[data.length-1]?.volume.toLocaleString() || '--'}</span>
        </div>
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
