"use client";

import React from 'react';
import { MOCK_NEWS } from '@/lib/constants';

export const NewsFeed = () => {
  return (
    <div className="bg-black h-full overflow-y-auto border-t border-[#333]">
      <div className="bg-[#1a1a1a] p-1 px-3 text-[#ffb900] text-xs font-bold flex justify-between">
        <span>TOP HEADLINES</span>
        <span>BN</span>
      </div>
      <div className="flex flex-col">
        {MOCK_NEWS.map((item) => (
          <div key={item.id} className="p-2 border-b border-[#222] hover:bg-[#111] cursor-pointer flex gap-3 text-xs">
            <span className="text-[#00ff00] font-mono">{item.time}</span>
            <span className="text-white font-mono uppercase leading-tight">{item.headline}</span>
            <span className="text-gray-500 font-mono ml-auto">[{item.source}]</span>
          </div>
        ))}
      </div>
    </div>
  );
};
