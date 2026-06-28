"use client";

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface CommandBarProps {
  onCommand: (cmd: string) => void;
  commands?: string[];
}

export const CommandBar = ({ onCommand, commands = [] }: CommandBarProps) => {
  const [command, setCommand] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    setSelectedIndex(-1);
    if (command.length > 0) {
      const filtered = commands.filter(c => c.startsWith(command.toUpperCase())).slice(0, 10);
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [command, commands]);

  const handleSelectSuggestion = (s: string) => {
    onCommand(s);
    setCommand('');
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIndex(p => (p + 1) % suggestions.length); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIndex(p => (p <= 0 ? suggestions.length - 1 : p - 1)); }
    else if (e.key === 'Enter' && selectedIndex >= 0) { e.preventDefault(); handleSelectSuggestion(suggestions[selectedIndex]); }
    else if (e.key === 'Escape') setShowSuggestions(false);
  };

  return (
    <div className="bg-[#222] border-b border-[#333] p-1 flex items-center gap-2 relative z-[1000]">
      <div className="bg-[#ffb900] text-black px-2 py-0.5 font-bold text-xs">HELP</div>
      <div className="flex-1 relative">
        <div role="combobox" aria-expanded={showSuggestions} aria-haspopup="listbox" aria-controls="cmd-list" className="flex items-center bg-black border border-[#444] px-2 py-0.5">
          <Search className="w-3 h-3 text-[#ffb900] mr-2" />
          <form onSubmit={(e) => { e.preventDefault(); if (command.trim()) handleSelectSuggestion(command.trim().toUpperCase()); }} className="flex-1">
            <input
              type="text" id="command-input" value={command}
              onChange={(e) => setCommand(e.target.value.toUpperCase())}
              onFocus={() => setShowSuggestions(suggestions.length > 0)}
              onKeyDown={handleKeyDown}
              className="bg-transparent text-[#ffb900] outline-none text-sm w-full font-mono"
              placeholder="Enter command or ticker..."
              aria-label="Terminal command" aria-autocomplete="list"
              aria-activedescendant={selectedIndex >= 0 ? `opt-${selectedIndex}` : undefined}
            />
          </form>
        </div>
        {showSuggestions && (
          <div id="cmd-list" role="listbox" className="absolute top-full left-0 right-0 bg-black border border-[#444] shadow-2xl mt-1 max-h-60 overflow-y-auto">
            {suggestions.map((s, i) => (
              <div
                key={i} id={`opt-${i}`} role="option" aria-selected={i === selectedIndex}
                onClick={() => handleSelectSuggestion(s)}
                className={`p-2 text-[#ffb900] font-mono text-xs cursor-pointer border-b border-[#111] ${i === selectedIndex ? 'bg-[#ffb900] text-black' : 'hover:bg-[#ffb900]/10'}`}
              >
                {s}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex gap-2 px-2 text-[10px] font-mono text-gray-400">
        <span>F1 HELP</span><span>F2 GOV</span><span>F3 CORP</span><span>F4 MTGE</span><span>F5 M-MKT</span>
      </div>
    </div>
  );
};
