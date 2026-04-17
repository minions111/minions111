"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type TerminalTheme = 'AMBER' | 'GREEN' | 'WHITE';

interface ThemeContextType {
  theme: TerminalTheme;
  setTheme: (theme: TerminalTheme) => void;
  colors: {
    primary: string;
    text: string;
    bg: string;
    border: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<TerminalTheme>('AMBER');

  const getColors = (t: TerminalTheme) => {
    switch (t) {
      case 'GREEN':
        return { primary: '#00ff00', text: '#00ff00', bg: '#000000', border: '#222222' };
      case 'WHITE':
        return { primary: '#ffffff', text: '#ffffff', bg: '#000000', border: '#222222' };
      default: // AMBER
        return { primary: '#ffb900', text: '#ffffff', bg: '#000000', border: '#333333' };
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors: getColors(theme) }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTerminalTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTerminalTheme must be used within a ThemeProvider');
  return context;
};
