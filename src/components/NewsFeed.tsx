"use client";

import React, { useState, useEffect } from 'react';
import NewsStreamingService from '@/lib/news';
import { NewsItem } from '@/lib/constants';
import { Search, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

type Category = 'ALL' | 'TOP' | 'MARKETS' | 'TECH' | 'ECON';

export const NewsFeed = () => {
  const [category, setCategory] = useState<Category>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const service = NewsStreamingService.getInstance();
    service.start();
    const unsubscribe = service.subscribe((latest) => {
      setNews([...latest]);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const filteredNews = news.filter(item => {
    const matchesSearch = item.headline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'ALL' || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-black h-full flex flex-col font-mono overflow-hidden">
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
          <div className="flex items-center gap-1">
             <div className="w-1 h-1 bg-[#00ff00] rounded-full animate-pulse" />
             <span className="text-[8px] text-[#00ff00] uppercase font-normal">Streaming</span>
          </div>
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
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <AnimatePresence initial={false}>
          {filteredNews.map((item) => (
            <motion.div
              key={item.id}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="p-2 border-b border-[#222] hover:bg-[#111] cursor-pointer flex gap-3 text-[11px] group overflow-hidden"
            >
              <span className="text-[#00ff00] min-w-[40px] font-bold">{item.time}</span>
              <div className="flex flex-col flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-white uppercase leading-tight group-hover:underline font-bold">
                    {item.headline}
                  </span>
                  <div className={cn(
                    "w-1.5 h-1.5 rounded-full flex-shrink-0",
                    item.sentiment === 'pos' ? 'bg-green-500' :
                    item.sentiment === 'neg' ? 'bg-red-500' : 'bg-gray-500'
                  )} />
                </div>
                <div className="flex justify-between mt-1 text-[9px]">
                  <span className="text-gray-500 uppercase">Source: {item.source} | {item.category}</span>
                  <span className="text-[#ffb900] group-hover:text-white font-bold">READ &gt;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {filteredNews.length === 0 && (
          <div className="p-8 text-center text-gray-600 uppercase text-xs">NO NEWS HEADLINES FOUND</div>
        )}
      </div>
    </div>
  );
};
