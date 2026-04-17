"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';

export const CommandBar = () => {
  const [command, setCommand] = useState('');

  return (
    <div className="bg-[#222] border-b border-[#333] p-1 flex items-center gap-2">
      <div className="bg-[#ffb900] text-black px-2 py-0.5 font-bold text-xs">
        HELP
      </div>
      <div className="flex-1 flex items-center bg-black border border-[#444] px-2 py-0.5">
        <Search className="w-3 h-3 text-[#ffb900] mr-2" />
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value.toUpperCase())}
          className="bg-transparent text-[#ffb900] outline-none text-sm w-full font-mono"
          placeholder="Enter command or ticker..."
        />
      </div>
      <div className="flex gap-2 px-2 text-[10px] font-mono text-gray-400">
        <span>F1 HELP</span>
        <span>F2 GOV</span>
        <span>F3 CORP</span>
        <span>F4 MTGE</span>
        <span>F5 M-MKT</span>
      </div>
    </div>
  );
};
