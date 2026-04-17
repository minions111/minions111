"use client";

import React from 'react';

interface SUPPProps {
  ticker: string;
}

export const SupplyChain = ({ ticker }: SUPPProps) => {
  const suppliers = [
    { name: "Taiwan Semiconductor (TSMC)", ticker: "2330 TT", revExposure: "24.5%", relationship: "Strategic" },
    { name: "Hon Hai Precision (Foxconn)", ticker: "2317 TT", revExposure: "18.2%", relationship: "Assembly" },
    { name: "Samsung Electronics", ticker: "005930 KS", revExposure: "8.4%", relationship: "Component" },
    { name: "Qualcomm Inc", ticker: "QCOM US", revExposure: "5.1%", relationship: "IP/Chipset" },
  ];

  const customers = [
    { name: "Verizon Communications", ticker: "VZ US", revExposure: "12.4%", relationship: "Carrier" },
    { name: "AT&T Inc", ticker: "T US", revExposure: "10.8%", relationship: "Carrier" },
    { name: "T-Mobile US", ticker: "TMUS US", revExposure: "9.5%", relationship: "Carrier" },
    { name: "Best Buy Co Inc", ticker: "BBY US", revExposure: "4.2%", relationship: "Retail" },
  ];

  return (
    <div className="bg-black h-full flex flex-col font-mono text-xs p-4 overflow-y-auto">
      <div className="bg-[#1a1a1a] p-1 px-3 mb-4 text-[#ffb900] font-bold border border-[#333] flex justify-between uppercase">
        <span>{ticker} US Equity - SUPP (Supply Chain Analysis)</span>
        <span>REVENUE EXPOSURE DATA</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">Key Suppliers</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b border-[#222] text-[10px]">
                <th className="py-1">Name</th>
                <th className="text-right">Exposure</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {suppliers.map((s, i) => (
                <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
                  <td className="py-2">
                    <div className="text-blue-400 font-bold">{s.name}</div>
                    <div className="text-[9px] text-gray-500">{s.ticker}</div>
                  </td>
                  <td className="text-right font-bold text-[#ffb900]">{s.revExposure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-[#ffb900] font-bold border-b border-[#333] mb-2 uppercase text-[10px]">Key Customers</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-500 border-b border-[#222] text-[10px]">
                <th className="py-1">Name</th>
                <th className="text-right">Exposure</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {customers.map((c, i) => (
                <tr key={i} className="border-b border-[#111] hover:bg-[#111]">
                  <td className="py-2">
                    <div className="text-blue-400 font-bold">{c.name}</div>
                    <div className="text-[9px] text-gray-500">{c.ticker}</div>
                  </td>
                  <td className="text-right font-bold text-[#00ff00]">{c.revExposure}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};
