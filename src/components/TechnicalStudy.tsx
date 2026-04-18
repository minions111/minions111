"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { fetchHistoricalData } from '@/lib/news';
import { calculateBollingerBands } from '@/lib/indicators';

interface TAProps {
  ticker: string;
}

export const TechnicalStudy = ({ ticker }: TAProps) => {
  const [histData, setHistData] = useState<any[]>([]);

  useEffect(() => {
    const loadHist = async () => {
      const data = await fetchHistoricalData(ticker);
      if (data) setHistData(data);
    };
    loadHist();
  }, [ticker]);

  const data = useMemo(() => {
    if (histData.length === 0) return [];
    const prices = histData.map(d => d.price);
    const bands = calculateBollingerBands(prices, 20, 2);

    return histData.map((d, i) => ({
      ...d,
      upper: bands.upper[i],
      lower: bands.lower[i],
      middle: bands.middle[i]
    }));
  }, [histData]);

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>{ticker} US Equity - TA (Technical Analysis Study)</span>
        <span>STUDY: BOLLINGER BANDS</span>
      </div>

      <div className="flex-1 min-h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis hide />
            <YAxis orientation="right" stroke="#666" fontSize={10} domain={['auto', 'auto']} />
            <Area type="monotone" dataKey="upper" stroke="#444" fill="#111" strokeDasharray="5 5" isAnimationActive={false} />
            <Area type="monotone" dataKey="lower" stroke="#444" fill="#000" strokeDasharray="5 5" isAnimationActive={false} />
            <Area type="monotone" dataKey="price" stroke="#ffb900" fill="transparent" strokeWidth={2} isAnimationActive={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex gap-8 text-[10px]">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-[#ffb900]" /> <span className="text-white uppercase">{ticker} PRICE</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-[#444] border-t border-dashed" /> <span className="text-gray-500 uppercase">BOLLINGER BANDS (20, 2)</span>
        </div>
      </div>
    </div>
  );
};
