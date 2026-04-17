"use client";

import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Line, ComposedChart } from 'recharts';
import { MOCK_CHART_DATA } from '@/lib/constants';

interface StockChartProps {
  ticker?: string;
}

export const StockChart = ({ ticker = "AAPL" }: StockChartProps) => {
  // Add SMA (Simple Moving Average) and RSI-like mock data
  const chartDataWithIndicators = MOCK_CHART_DATA.map((d, i, arr) => {
    // SMA(3)
    let sma = d.price;
    if (i >= 2) {
      sma = (arr[i].price + arr[i-1].price + arr[i-2].price) / 3;
    }

    // RSI mock (Random but oscillating around 50)
    const rsi = 40 + Math.random() * 20 + (d.price - 185) * 10;

    return { ...d, sma, rsi };
  });

  return (
    <div className="h-full w-full bg-black p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-[#ffb900] text-xl font-bold uppercase">{ticker} US Equity</h2>
          <p className="text-gray-400 text-xs text-[10px]">GP Line Graph | SMA(3) | RSI(14)</p>
        </div>
        <div className="text-right">
          <div className="text-2xl text-[#00ff00] font-bold">185.92</div>
          <div className="text-[#00ff00] text-xs">+1.24 (+0.67%)</div>
        </div>
      </div>

      {/* Main Price Chart */}
      <div className="flex-[3] min-h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartDataWithIndicators}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffb900" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ffb900" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
            <XAxis
              dataKey="time"
              stroke="#666"
              fontSize={10}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#666"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              domain={['dataMin - 0.5', 'dataMax + 0.5']}
              orientation="right"
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#111', border: '1px solid #333', fontSize: '12px' }}
              itemStyle={{ color: '#ffb900' }}
            />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#ffb900"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPrice)"
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="sma"
              stroke="#00ffff"
              strokeWidth={1}
              dot={false}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* RSI Indicator Chart */}
      <div className="flex-1 min-h-[100px] border-t border-[#222] pt-2">
        <div className="text-[10px] text-gray-500 mb-1">RSI (14): <span className="text-[#ffb900]">54.21</span></div>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartDataWithIndicators}>
            <CartesianGrid strokeDasharray="3 3" stroke="#111" vertical={false} />
            <XAxis dataKey="time" hide />
            <YAxis domain={[0, 100]} stroke="#444" fontSize={8} orientation="right" ticks={[30, 70]} />
            <Line
              type="monotone"
              dataKey="rsi"
              stroke="#ffb900"
              strokeWidth={1}
              dot={false}
              isAnimationActive={false}
            />
            {/* Overbought/Oversold lines */}
            <Line dataKey={() => 70} stroke="#444" strokeDasharray="3 3" dot={false} isAnimationActive={false} />
            <Line dataKey={() => 30} stroke="#444" strokeDasharray="3 3" dot={false} isAnimationActive={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
