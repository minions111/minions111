"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    if (command.length > 0) {
      const filtered = commands
        .filter(c => c.startsWith(command.toUpperCase()))
        .slice(0, 10);
      setSuggestions(filtered);
      setShowSuggestions(filtered.length > 0);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  }, [command, commands]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const finalCommand = selectedIndex >= 0 ? suggestions[selectedIndex] : command;
    if (finalCommand.trim()) {
      onCommand(finalCommand.trim().toUpperCase());
      setCommand('');
      setShowSuggestions(false);
      setSelectedIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showSuggestions) {
      if (e.key === 'ArrowDown' && suggestions.length > 0) {
        setShowSuggestions(true);
        setSelectedIndex(0);
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % suggestions.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + suggestions.length) % suggestions.length);
        break;
      case 'Enter':
        if (selectedIndex >= 0) {
          e.preventDefault();
          handleSelectSuggestion(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSelectSuggestion = (s: string) => {
    onCommand(s);
    setCommand('');
    setShowSuggestions(false);
    setSelectedIndex(-1);
  };

  return (
    <div className="bg-[#222] border-b border-[#333] p-1 flex items-center gap-2 relative z-[1000]" ref={containerRef}>
      <div className="bg-[#ffb900] text-black px-2 py-0.5 font-bold text-xs">
        HELP
      </div>
      <div className="flex-1 relative">
        <form onSubmit={handleSubmit} className="flex items-center bg-black border border-[#444] px-2 py-0.5">
          <Search className="w-3 h-3 text-[#ffb900] mr-2" />
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value.toUpperCase())}
            onFocus={() => setShowSuggestions(suggestions.length > 0)}
            onKeyDown={handleKeyDown}
            className="bg-transparent text-[#ffb900] outline-none text-sm w-full font-mono"
            placeholder="Enter command or ticker..."
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={showSuggestions}
            aria-haspopup="listbox"
            aria-controls="command-suggestions"
            aria-activedescendant={selectedIndex >= 0 ? `suggestion-${selectedIndex}` : undefined}
          />
        </form>

        {showSuggestions && (
          <div
            id="command-suggestions"
            role="listbox"
            className="absolute top-full left-0 right-0 bg-black border border-[#444] shadow-2xl mt-1"
          >
            {suggestions.map((s, i) => (
              <div
                key={i}
                id={`suggestion-${i}`}
                role="option"
                aria-selected={i === selectedIndex}
                onClick={() => handleSelectSuggestion(s)}
                onMouseEnter={() => setSelectedIndex(i)}
                className={cn(
                  "p-2 text-[#ffb900] font-mono text-xs cursor-pointer border-b border-[#111] transition-colors",
                  i === selectedIndex ? "bg-[#ffb900] text-black" : "hover:bg-[#ffb900]/10"
                )}
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
