"use client";

import React, { useState, useEffect } from 'react';
import { PriceSimulationEngine } from '@/lib/priceEngine';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

interface TICProps {
  ticker: string;
}

export const IntradayTickChart = ({ ticker }: TICProps) => {
  const [ticks, setTicks] = useState<any[]>([]);

  useEffect(() => {
    const engine = PriceSimulationEngine.getInstance();
    const unsubscribe = engine.subscribe((updates) => {
      if (updates[ticker]) {
        const newTick = {
          time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          price: updates[ticker].price
        };
        setTicks(prev => [...prev, newTick].slice(-100));
      }
    });
    return () => {
      unsubscribe();
    };
  }, [ticker]);

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-hidden">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - TIC (Intraday Tick Chart)</span>
        <div className="flex items-center gap-2">
           <div className="w-1.5 h-1.5 bg-[#00ff00] rounded-full animate-pulse" />
           <span>LIVE FEED</span>
        </div>
      </div>

      <div className="flex-1 min-h-0 relative">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={ticks}>
            <CartesianGrid strokeDasharray="1 1" stroke="#222" vertical={false} />
            <XAxis dataKey="time" hide />
            <YAxis
              orientation="right"
              stroke="#666"
              fontSize={10}
              domain={['auto', 'auto']}
              tickFormatter={(v) => v.toFixed(3)}
              tickCount={10}
            />
            <Tooltip contentStyle={{ backgroundColor: '#111', border: '1px solid #333' }} />
            <Line
              type="stepAfter"
              dataKey="price"
              stroke="#00ff00"
              strokeWidth={1}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex justify-between text-[9px] text-gray-600">
         <span>TICKS DISPLAYED: {ticks.length}</span>
         <span className="uppercase">Aggregated from consolidated tape (SIP)</span>
      </div>
    </div>
  );
};
