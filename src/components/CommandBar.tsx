"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CommandBarProps {
  onCommand: (cmd: string) => void;
  commands?: string[];
}

export const CommandBar = ({ onCommand, commands = [] }: CommandBarProps) => {
  const [command, setCommand] = useState(''), [suggestions, setSuggestions] = useState<string[]>([]), [showSuggestions, setShowSuggestions] = useState(false), [selectedIndex, setSelectedIndex] = useState(-1), containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const click = (e: MouseEvent) => containerRef.current && !containerRef.current.contains(e.target as Node) && setShowSuggestions(false);
    document.addEventListener('mousedown', click); return () => document.removeEventListener('mousedown', click);
  }, []);

  useEffect(() => {
    const f = command ? commands.filter(c => c.startsWith(command.toUpperCase())).slice(0, 10) : [];
    setSuggestions(f); setShowSuggestions(f.length > 0); setSelectedIndex(-1);
  }, [command, commands]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return e.key === 'ArrowDown' && suggestions.length > 0 && (setShowSuggestions(true), setSelectedIndex(0));
    if (e.key === 'ArrowDown') setSelectedIndex(p => Math.min(p + 1, suggestions.length - 1));
    else if (e.key === 'ArrowUp') setSelectedIndex(p => Math.max(p - 1, -1));
    else if (e.key === 'Escape') (setShowSuggestions(false), setSelectedIndex(-1));
    else if (e.key === 'Enter' && selectedIndex >= 0) (e.preventDefault(), onCommand(suggestions[selectedIndex]), setCommand(''), setShowSuggestions(false));
  };

  return (
    <div ref={containerRef} className="bg-[#222] border-b border-[#333] p-1 flex items-center gap-2 relative z-[1000]">
      <div className="bg-[#ffb900] text-black px-2 py-0.5 font-bold text-xs">HELP</div>
      <div className="flex-1 relative">
        <form onSubmit={(e) => (e.preventDefault(), command.trim() && (onCommand(command.trim().toUpperCase()), setCommand(''), setShowSuggestions(false)))} className="flex items-center bg-black border border-[#444] px-2 py-0.5" role="search">
          <Search className="w-3 h-3 text-[#ffb900] mr-2" />
          <input
            type="text" role="combobox" aria-autocomplete="list" aria-expanded={showSuggestions} aria-haspopup="listbox" aria-controls="cmd-list" aria-activedescendant={selectedIndex >= 0 ? `opt-${selectedIndex}` : undefined}
            value={command} onChange={(e) => setCommand(e.target.value.toUpperCase())} onKeyDown={handleKeyDown} onFocus={() => setShowSuggestions(suggestions.length > 0)}
            className="bg-transparent text-[#ffb900] outline-none text-sm w-full font-mono" placeholder="Enter command or ticker..." aria-label="Terminal command input"
          />
        </form>
        {showSuggestions && (
          <div id="cmd-list" role="listbox" className="absolute top-full left-0 right-0 bg-black border border-[#444] shadow-2xl mt-1">
            {suggestions.map((s, i) => (
              <div key={i} id={`opt-${i}`} role="option" aria-selected={selectedIndex === i} onClick={() => (onCommand(s), setCommand(''), setShowSuggestions(false))} onMouseEnter={() => setSelectedIndex(i)}
                className={cn("p-2 text-[#ffb900] font-mono text-xs cursor-pointer border-b border-[#111]", selectedIndex === i ? "bg-[#ffb900] text-black" : "hover:bg-[#ffb900]/10")}>{s}</div>
            ))}
          </div>
        )}
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
