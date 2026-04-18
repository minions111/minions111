"use client";

import React, { useState, useEffect } from 'react';
import { Save, Trash2, Edit3 } from 'lucide-react';

interface MemoProps {
  ticker: string;
}

export const TickerMemo = ({ ticker }: MemoProps) => {
  const [memo, setMemo] = useState("");
  const [savedMemos, setSavedMemos] = useState<Record<string, string>>({});

  useEffect(() => {
    const saved = localStorage.getItem('bloomberg_memos');
    if (saved) {
      const parsed = JSON.parse(saved);
      setSavedMemos(parsed);
      setMemo(parsed[ticker] || "");
    }
  }, [ticker]);

  const handleSave = () => {
    const newMemos = { ...savedMemos, [ticker]: memo };
    setSavedMemos(newMemos);
    localStorage.setItem('bloomberg_memos', JSON.stringify(newMemos));
  };

  const handleClear = () => {
    setMemo("");
    const newMemos = { ...savedMemos, [ticker]: "" };
    setSavedMemos(newMemos);
    localStorage.setItem('bloomberg_memos', JSON.stringify(newMemos));
  };

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-hidden">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase text-[10px]">
        <span>MEMO - INTERNAL SECURITY NOTES: {ticker}</span>
        <div className="flex gap-4">
           <button onClick={handleSave} className="hover:text-white flex items-center gap-1">
             <Save size={10} /> SAVE
           </button>
           <button onClick={handleClear} className="hover:text-white flex items-center gap-1 text-red-500">
             <Trash2 size={10} /> CLEAR
           </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div className="bg-[#111] p-4 border border-[#222] flex-1">
          <div className="text-gray-500 text-[9px] mb-2 uppercase flex items-center gap-2">
            <Edit3 size={10} /> Analyst Journal
          </div>
          <textarea
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder={`Enter your thesis for ${ticker} US Equity...`}
            className="w-full h-full bg-transparent text-[#00ff00] outline-none resize-none leading-relaxed placeholder:text-gray-800"
          />
        </div>

        <div className="h-24 bg-[#111] border border-[#222] p-2 overflow-y-auto">
          <div className="text-gray-600 text-[8px] uppercase mb-1">Previous Note Fragments</div>
          <div className="text-gray-500 text-[10px] italic italic">
            {memo.substring(0, 100)}...
          </div>
        </div>
      </div>
    </div>
  );
};
