"use client";

import React, { useState, useEffect } from 'react';
import { MOCK_NEWS, NewsItem } from '@/lib/constants';
import { Search, Loader2 } from 'lucide-react';
import { fetchTopHeadlines } from '@/lib/news';
import { cn } from '@/lib/utils';

type Category = 'ALL' | 'TOP' | 'MARKETS' | 'TECH' | 'ECON';

export const NewsFeed = () => {
  const [category, setCategory] = useState<Category>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      setLoading(true);
      const data = await fetchTopHeadlines();
      setNews(data);
      setLoading(false);
    };
    loadNews();
    const interval = setInterval(loadNews, 60000); // Refresh news every minute
    return () => clearInterval(interval);
  }, []);

  const filteredNews = (news.length > 0 ? news : MOCK_NEWS).filter(item => {
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
              className={cn(
                "hover:text-white transition-colors px-1",
                category === cat ? "text-white border-b border-[#ffb900]" : "text-[#ffb900]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          {loading && <Loader2 size={10} className="animate-spin text-gray-500" />}
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
          <span className="text-[9px] text-gray-600">BBG LIVE</span>
        </div>
      </div>

      {/* News List */}
      <div className="flex-1 overflow-y-auto">
        {filteredNews.map((item) => (
          <div key={item.id} className="p-2 border-b border-[#222] hover:bg-[#111] cursor-pointer flex gap-3 text-[11px] group">
            <span className="text-[#00ff00] min-w-[40px] font-bold">{item.time}</span>
            <div className="flex flex-col flex-1">
              <div className="flex items-center gap-2">
                <span className="text-white uppercase leading-tight group-hover:underline font-bold">
                  {item.headline}
                </span>
                <div
                  className={cn(
                    "w-1.5 h-1.5 rounded-full flex-shrink-0",
                    item.sentiment === 'pos' ? 'bg-green-500' :
                    item.sentiment === 'neg' ? 'bg-red-500' : 'bg-gray-500'
                  )}
                />
              </div>
              <div className="flex justify-between mt-1 text-[9px]">
                <span className="text-gray-500 uppercase">Source: {item.source} | {item.category}</span>
                <span className="text-[#ffb900] group-hover:text-white">READ &gt;</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
