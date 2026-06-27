"use client";

import React, { useState, useEffect, createContext, useContext } from 'react';
import { Bell, X, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type AlertType = 'info' | 'warning' | 'success';

interface Alert {
  id: string;
  type: AlertType;
  message: string;
}

interface AlertContextType {
  showAlert: (message: string, type?: AlertType) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlerts = () => {
  const context = useContext(AlertContext);
  if (!context) throw new Error("useAlerts must be used within AlertProvider");
  return context;
};

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const playChime = () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
      oscillator.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.1); // A4

      gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.2);
    } catch (e) { /* ignore audio errors */ }
  };

  const showAlert = (message: string, type: AlertType = 'info') => {
    const id = Math.random().toString(36).substr(2, 9);
    setAlerts(prev => [...prev, { id, message, type }]);
    playChime();
    setTimeout(() => {
      setAlerts(prev => prev.filter(a => a.id !== id));
    }, 5000);
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <div className="fixed top-12 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {alerts.map(alert => (
            <motion.div
              key={alert.id}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 300, opacity: 0 }}
              className={`p-3 rounded border flex items-center gap-3 w-80 pointer-events-auto shadow-2xl backdrop-blur-md font-mono text-xs ${
                alert.type === 'info' ? 'bg-blue-900/80 border-blue-500 text-white' :
                alert.type === 'warning' ? 'bg-orange-900/80 border-orange-500 text-white' :
                'bg-green-900/80 border-green-500 text-white'
              }`}
            >
              {alert.type === 'info' && <Info size={16} />}
              {alert.type === 'warning' && <AlertTriangle size={16} />}
              {alert.type === 'success' && <CheckCircle size={16} />}
              <div className="flex-1 uppercase font-bold">{alert.message}</div>
              <button
                onClick={() => setAlerts(prev => prev.filter(a => a.id !== alert.id))}
                className="hover:text-gray-300"
                aria-label="Dismiss alert"
              >
                <X size={14} aria-hidden="true" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </AlertContext.Provider>
  );
};
