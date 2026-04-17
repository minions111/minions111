"use client";

import React, { useState } from 'react';
import { MOCK_NEWS, NewsItem } from '@/lib/constants';
import { Search } from 'lucide-react';

type Category = 'ALL' | 'TOP' | 'MARKETS' | 'TECH' | 'ECON';

export const NewsFeed = () => {
  const [category, setCategory] = useState<Category>('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = MOCK_NEWS.filter(item => {
    const matchesSearch = item.headline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'ALL' || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-black h-full flex flex-col font-mono">
      {/* Header with Navigation */}
      <div className="bg-[#1a1a1a] p-1 px-3 text-[#ffb900] text-xs font-bold flex justify-between items-center border-b border-[#333]">
        <div className="flex gap-4">
          {(['ALL', 'TOP', 'MARKETS', 'TECH', 'ECON'] as Category[]).map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`hover:text-white transition-colors ${category === cat ? 'text-white border-b border-[#ffb900]' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-black border border-[#444] text-white px-2 py-0.5 text-[10px] w-32 focus:outline-none focus:border-[#ffb900]"
            />
            <Search size={10} className="absolute right-1.5 top-1.5 text-gray-500" />
          </div>
          <span>BN</span>
        </div>
      </div>

      {/* News List */}
      <div className="flex-1 overflow-y-auto">
        {filteredNews.map((item) => (
          <div key={item.id} className="p-2 border-b border-[#222] hover:bg-[#111] cursor-pointer flex gap-3 text-[11px] group">
            <span className="text-[#00ff00] min-w-[40px]">{item.time}</span>
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-2">
                <span className="text-white uppercase leading-tight group-hover:underline">
                  {item.headline}
                </span>
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    item.sentiment === 'pos' ? 'bg-green-500' :
                    item.sentiment === 'neg' ? 'bg-red-500' : 'bg-gray-500'
                  }`}
                  title={`Sentiment: ${item.sentiment}`}
                />
              </div>
              <div className="flex justify-between mt-1 text-[9px]">
                <span className="text-gray-500">Source: {item.source} | Cat: {item.category}</span>
                <span className="text-[#ffb900]">READ &gt;</span>
              </div>
            </div>
          </div>
        ))}
        {filteredNews.length === 0 && (
          <div className="p-4 text-center text-gray-500 text-xs">NO HEADLINES FOUND</div>
        )}
      </div>
    </div>
  );
};
