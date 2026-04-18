"use client";

import React, { useState, useEffect } from 'react';
import NewsStreamingService from '@/lib/news';
import { NewsItem } from '@/lib/constants';

export const NewsTicker = () => {
  const [headline, setHeadline] = useState<string>("WAITING FOR NEWS FEED...");

  useEffect(() => {
    const service = NewsStreamingService.getInstance();
    const unsubscribe = service.subscribe((news) => {
      if (news.length > 0) {
        setHeadline(news[0].headline);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="bg-[#111] border-t border-[#333] h-6 flex items-center overflow-hidden font-mono text-[10px]">
      <div className="bg-[#ffb900] text-black px-2 font-bold h-full flex items-center whitespace-nowrap">
        LATEST NEWS
      </div>
      <div className="flex-1 px-4 text-[#ffb900] font-bold overflow-hidden relative">
        <div className="animate-marquee whitespace-nowrap">
          {headline}
        </div>
      </div>
      <div className="bg-black border-l border-[#333] px-2 text-gray-500 h-full flex items-center gap-2">
        <div className="w-1 h-1 bg-[#00ff00] rounded-full animate-pulse" />
        LIVE
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(100%); }
          to { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};
