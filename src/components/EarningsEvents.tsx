"use client";

import React from 'react';

export const EarningsEvents = () => {
  const events = [
    { date: "Apr 23", ticker: "TSLA", time: "Post", period: "Q1", est: "0.52", last: "0.85" },
    { date: "Apr 24", ticker: "META", time: "Post", period: "Q1", est: "4.30", last: "2.20" },
    { date: "Apr 25", ticker: "MSFT", time: "Post", period: "Q3", est: "2.82", last: "2.45" },
    { date: "Apr 25", ticker: "GOOGL", time: "Post", period: "Q1", est: "1.50", last: "1.17" },
    { date: "Apr 30", ticker: "AMZN", time: "Post", period: "Q1", est: "0.83", last: "0.31" },
    { date: "May 02", ticker: "AAPL", time: "Post", period: "Q2", est: "1.51", last: "1.52" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>EVT - CORPORATE EARNINGS EVENTS</span>
        <span>UPCOMING: 14 DAYS</span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500 border-b border-[#333] uppercase text-[9px]">
            <th className="py-1">Date</th>
            <th>Ticker</th>
            <th>Time</th>
            <th>Period</th>
            <th className="text-right">Est EPS</th>
            <th className="text-right">Prev EPS</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {events.map((e, i) => (
            <tr key={i} className="border-b border-[#111] hover:bg-[#111] cursor-pointer">
              <td className="py-2 text-[#ffb900]">{e.date}</td>
              <td className="text-blue-400 font-bold">{e.ticker}</td>
              <td className="text-gray-400">{e.time}</td>
              <td className="text-center">{e.period}</td>
              <td className="text-right font-bold">{e.est}</td>
              <td className="text-right text-gray-500">{e.last}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
