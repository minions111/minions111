"use client";

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, ReferenceLine } from 'recharts';

export const EconomicReleaseDrilldown = () => {
  const data = [
    { name: 'ISM MANUF', actual: 52.4, forecast: 51.5, prior: 50.8 },
    { name: 'PAYROLLS', actual: 275000, forecast: 200000, prior: 229000 },
    { name: 'CPI YOY', actual: 3.1, forecast: 3.2, prior: 3.4 },
    { name: 'GDP QOQ', actual: 2.4, forecast: 2.1, prior: 3.3 },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>ECDR - ECONOMIC RELEASE IMPACT DRILLDOWN</span>
        <span>DATASET: US_MACRO_CORE</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
        <div className="bg-[#111] border border-[#222] p-4">
           <h3 className="text-white font-bold mb-4 uppercase text-[9px]">Market Impact Probability</h3>
           <div className="space-y-4">
              <div className="flex justify-between items-center">
                 <span className="text-gray-500 uppercase">UST 10Y SENSITIVITY</span>
                 <span className="text-[#00ff00] font-bold">+4.2 bps / dev</span>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-gray-500 uppercase">S&P 500 SENSITIVITY</span>
                 <span className="text-red-500 font-bold">-0.12% / dev</span>
              </div>
              <div className="flex justify-between items-center">
                 <span className="text-gray-500 uppercase">DXY SENSITIVITY</span>
                 <span className="text-[#00ff00] font-bold">+15 pips / dev</span>
              </div>
           </div>
        </div>
        <div className="bg-[#111] border border-[#222] p-4 h-[200px]">
           <h3 className="text-gray-500 uppercase text-[9px] mb-2">Historical Surprise Distribution</h3>
           <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                 <XAxis dataKey="name" stroke="#444" fontSize={8} />
                 <YAxis hide />
                 <Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                 <Bar dataKey="actual" fill="#ffb900" isAnimationActive={false} />
                 <Bar dataKey="forecast" fill="#333" isAnimationActive={false} />
              </BarChart>
           </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-[#050505] border border-[#333] p-4">
         <h3 className="text-[#ffb900] font-bold mb-2 uppercase">Institutional Consensus</h3>
         <p className="text-gray-400 text-[10px] leading-relaxed">
            Market participants are bracing for a potential upside surprise in tonight's Non-Farm Payrolls.
            Options skew (SKEW) indicates heavy hedging for a 'hawkish' beat, with primary focus on the wage growth component.
         </p>
      </div>
    </div>
  );
};
