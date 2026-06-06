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
    const filtered = command ? commands.filter(c => c.startsWith(command.toUpperCase())).slice(0, 10) : [];
    setSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
    setSelectedIndex(-1);
  }, [command, commands]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    const finalCmd = selectedIndex >= 0 ? suggestions[selectedIndex] : command.trim();
    if (finalCmd) {
      onCommand(finalCmd.toUpperCase());
      setCommand('');
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) return;
    if (e.key === 'ArrowDown') setSelectedIndex(p => (p + 1) % suggestions.length);
    else if (e.key === 'ArrowUp') setSelectedIndex(p => (p - 1 + suggestions.length) % suggestions.length);
    else if (e.key === 'Escape') setShowSuggestions(false);
    else return;
    e.preventDefault();
  };

  return (
    <div className="bg-[#222] border-b border-[#333] p-1 flex items-center gap-2 relative z-[1000]">
      <div className="bg-[#ffb900] text-black px-2 py-0.5 font-bold text-xs">HELP</div>
      <div className="flex-1 relative" role="combobox" aria-expanded={showSuggestions} aria-haspopup="listbox" aria-controls="cmd-list">
        <label htmlFor="cmd-input" className="sr-only">Command</label>
        <form onSubmit={handleSubmit} className="flex items-center bg-black border border-[#444] px-2 py-0.5">
          <Search className="w-3 h-3 text-[#ffb900] mr-2" />
          <input id="cmd-input" type="text" value={command} onChange={e => setCommand(e.target.value.toUpperCase())}
            onFocus={() => setShowSuggestions(suggestions.length > 0)} onKeyDown={handleKeyDown}
            aria-autocomplete="list" aria-controls="cmd-list" aria-activedescendant={selectedIndex >= 0 ? `opt-${selectedIndex}` : undefined}
            className="bg-transparent text-[#ffb900] outline-none text-sm w-full font-mono" placeholder="Enter command..." />
        </form>
        {showSuggestions && (
          <div id="cmd-list" role="listbox" className="absolute top-full left-0 right-0 bg-black border border-[#444] shadow-2xl mt-1">
            {suggestions.map((s, i) => (
              <div key={s} id={`opt-${i}`} role="option" aria-selected={i === selectedIndex} onClick={() => { onCommand(s); setCommand(''); setShowSuggestions(false); }}
                className={`p-2 text-[#ffb900] font-mono text-xs cursor-pointer border-b border-[#111] ${i === selectedIndex ? 'bg-[#ffb900] text-black' : 'hover:bg-[#ffb900]/10'}`}>
                {s}
              </div>
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
