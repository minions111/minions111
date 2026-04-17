"use client";

import React from 'react';

interface MGMTProps {
  ticker: string;
}

export const ManagementProfile = ({ ticker }: MGMTProps) => {
  const executives = [
    { name: "Timothy D. Cook", title: "Chief Executive Officer", since: "2011", age: "63" },
    { name: "Luca Maestri", title: "CFO & Senior VP", since: "2014", age: "60" },
    { name: "Jeff Williams", title: "Chief Operating Officer", since: "2015", age: "61" },
    { name: "Katherine L. Adams", title: "Senior VP/Gen Counsel", since: "2017", age: "60" },
    { name: "Eddy Cue", title: "Senior VP: Services", since: "2011", age: "59" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - MGMT (Management Profile)</span>
        <span>EXECUTIVE TEAM</span>
      </div>

      <div className="flex-1">
        <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">Officers</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 border-b border-[#222] text-[10px]">
              <th className="py-1">Name</th>
              <th>Title</th>
              <th className="text-right">Since</th>
              <th className="text-right">Age</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {executives.map((exec, i) => (
              <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
                <td className="py-2 text-blue-400 font-bold">{exec.name}</td>
                <td className="text-gray-300">{exec.title}</td>
                <td className="text-right">{exec.since}</td>
                <td className="text-right text-gray-400">{exec.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-[#111] border border-[#222] p-3">
        <div className="text-[#ffb900] font-bold mb-2 uppercase text-[10px]">Board Composition</div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-white font-bold">9</div>
            <div className="text-[9px] text-gray-500 uppercase">Directors</div>
          </div>
          <div>
            <div className="text-white font-bold">8</div>
            <div className="text-[9px] text-gray-500 uppercase">Independent</div>
          </div>
          <div>
            <div className="text-white font-bold">3.2Y</div>
            <div className="text-[9px] text-gray-500 uppercase">Avg Tenure</div>
          </div>
        </div>
      </div>
    </div>
  );
};
