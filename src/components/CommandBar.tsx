"use client";

import React, { useState, useEffect, useRef } from 'react';
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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setShowSuggestions(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    setSelectedIndex(-1);
  }, [suggestions]);

  useEffect(() => {
    if (command.length > 0) {
      const filtered = commands
        .filter(c => c.startsWith(command.toUpperCase()))
        .slice(0, 10);
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [command, commands]);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (command.trim()) {
      onCommand(command.trim().toUpperCase());
      setCommand('');
      setShowSuggestions(false);
    }
  };

  const handleSelectSuggestion = (s: string) => {
    onCommand(s);
    setCommand('');
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) {
      if (e.key === 'ArrowDown' && suggestions.length > 0) {
        setShowSuggestions(true);
        setSelectedIndex(0);
      }
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(p => (p < suggestions.length - 1 ? p + 1 : p));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIndex === -1 ? setShowSuggestions(false) : setSelectedIndex(p => p - 1);
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleSelectSuggestion(suggestions[selectedIndex]);
    } else if (e.key === 'Escape') {
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  };

  return (
    <div className="bg-[#222] border-b border-[#333] p-1 flex items-center gap-2 relative z-[1000]">
      <div className="bg-[#ffb900] text-black px-2 py-0.5 font-bold text-xs">
        HELP
      </div>
      <div className="flex-1 relative" ref={containerRef}>
        <form onSubmit={handleSubmit} className="flex items-center bg-black border border-[#444] px-2 py-0.5">
          <Search className="w-3 h-3 text-[#ffb900] mr-2" />
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value.toUpperCase())}
            onFocus={() => setShowSuggestions(suggestions.length > 0)}
            onKeyDown={handleKeyDown}
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={showSuggestions}
            aria-haspopup="listbox"
            aria-controls="cmd-suggestions"
            aria-activedescendant={selectedIndex >= 0 ? `sug-${selectedIndex}` : undefined}
            className="bg-transparent text-[#ffb900] outline-none text-sm w-full font-mono"
            placeholder="Enter command or ticker..."
          />
        </form>

        {showSuggestions && (
          <div id="cmd-suggestions" role="listbox" className="absolute top-full left-0 right-0 bg-black border border-[#444] shadow-2xl mt-1">
            {suggestions.map((s, i) => (
              <div
                key={i} id={`sug-${i}`} role="option" aria-selected={selectedIndex === i}
                onClick={() => handleSelectSuggestion(s)}
                onMouseEnter={() => setSelectedIndex(i)}
                className={`p-2 font-mono text-xs cursor-pointer border-b border-[#111] transition-colors ${
                  selectedIndex === i ? 'bg-[#ffb900] text-black' : 'text-[#ffb900]'
                }`}
              >
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
