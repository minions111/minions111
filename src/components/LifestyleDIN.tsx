"use client";

import React from 'react';
import { Utensils, Star, MapPin, DollarSign } from 'lucide-react';

export const LifestyleDIN = () => {
  const spots = [
    { name: "LE BERNARDIN", cuisine: "FRENCH/SEAFOOD", rating: "4.9", price: "\$\$\$\$", location: "MIDTOWN WEST" },
    { name: "PETER LUGER", cuisine: "STEAKHOUSE", rating: "4.7", price: "\$\$\$\$", location: "BROOKLYN" },
    { name: "NOBU DOWNTOWN", cuisine: "JAPANESE", rating: "4.6", price: "\$\$\$\$", location: "FINANCIAL DISTRICT" },
    { name: "CARBONE", cuisine: "ITALIAN", rating: "4.8", price: "\$\$\$\$", location: "GREENWICH VILLAGE" },
    { name: "THE GRILL", cuisine: "AMERICAN", rating: "4.5", price: "\$\$\$\$", location: "SEAGRAM BUILDING" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>DIN - BLOOMBERG DINING GUIDE</span>
        <span>NEW YORK CITY</span>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {spots.map((s, i) => (
          <div key={i} className="bg-[#111] border border-[#222] p-4 flex justify-between items-center hover:border-[#ffb900] cursor-pointer group">
            <div className="flex gap-4 items-center">
              <div className="bg-black p-2 border border-[#333] text-[#ffb900]">
                <Utensils size={16} />
              </div>
              <div>
                <div className="text-white font-bold text-sm uppercase group-hover:text-[#ffb900]">{s.name}</div>
                <div className="text-gray-500 text-[9px] uppercase">{s.cuisine} | {s.location}</div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1 text-[#00ff00] font-bold">
                <Star size={10} fill="#00ff00" /> {s.rating}
              </div>
              <div className="text-gray-400 font-bold">{s.price}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 border-t border-[#333] text-gray-500 text-[9px] uppercase">
        * BLOOMBERG EXCLUSIVE BOOKING SERVICE AVAILABLE VIA &lt;MSG&gt;
      </div>
    </div>
  );
};
