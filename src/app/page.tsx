"use client";

import { useState, useEffect } from "react";
import { CommandBar } from "@/components/CommandBar";
import { MarketGrid } from "@/components/MarketGrid";
import { StockChart } from "@/components/StockChart";
import { NewsFeed } from "@/components/NewsFeed";
import { Portfolio } from "@/components/Portfolio";
import { OrderEntry } from "@/components/OrderEntry";
import { EconomicCalendar } from "@/components/EconomicCalendar";
import { SecurityDescription } from "@/components/SecurityDescription";
import { Watchlist } from "@/components/Watchlist";
import { EconomicsNews } from "@/components/EconomicsNews";
import { Clock } from "lucide-react";

// Module Imports
import { FinancialAnalysis } from "@/components/FinancialAnalysis";
import { AnalystRecommendations } from "@/components/AnalystRecommendations";
import { MoneyMarketMonitor } from "@/components/MoneyMarketMonitor";
import { CurrencyMonitor } from "@/components/CurrencyMonitor";
import { BloombergIntelligence } from "@/components/BloombergIntelligence";
import { InstantBloomberg } from "@/components/InstantBloomberg";
import { WorldEquityIndices } from "@/components/WorldEquityIndices";
import { MostActive } from "@/components/MostActive";
import { EarningsEstimates } from "@/components/EarningsEstimates";
import { HoldingsOwnership } from "@/components/HoldingsOwnership";
import { DividendHistory } from "@/components/DividendHistory";
import { OptionMonitor } from "@/components/OptionMonitor";
import { QuoteRecap } from "@/components/QuoteRecap";
import { CompanyNews } from "@/components/CompanyNews";
import { TechnicalIndicators } from "@/components/TechnicalIndicators";
import { HistoricalPrices } from "@/components/HistoricalPrices";
import { PeerAnalysis } from "@/components/PeerAnalysis";
import { ManagementProfile } from "@/components/ManagementProfile";
import { SupplyChain } from "@/components/SupplyChain";
import { ESGScore } from "@/components/ESGScore";
import { MarketDrivers } from "@/components/MarketDrivers";
import { AlertManager } from "@/components/AlertManager";
import { FullNewsSearch } from "@/components/FullNewsSearch";
import { Launchpad } from "@/components/Launchpad";
import { YieldSpreadAnalysis } from "@/components/YieldSpreadAnalysis";
import { RevenueMap } from "@/components/RevenueMap";
import { EarningsEvents } from "@/components/EarningsEvents";
import { CorporateActions } from "@/components/CorporateActions";
import { InflationMonitor } from "@/components/InflationMonitor";
import { CentralBankTracker } from "@/components/CentralBankTracker";
import { CurrencyConverter } from "@/components/CurrencyConverter";
import { CommodityMonitor } from "@/components/CommodityMonitor";
import { DCFModel } from "@/components/DCFModel";
import { WACCCalculator } from "@/components/WACCCalculator";
import { InsiderTransactions } from "@/components/InsiderTransactions";
import { SocialSentiment } from "@/components/SocialSentiment";
import { BondSearch } from "@/components/BondSearch";
import { UserPreferences } from "@/components/UserPreferences";
import { ExecutiveBio } from "@/components/ExecutiveBio";
import { CashFlowStatement } from "@/components/CashFlowStatement";
import { FuturesMonitor } from "@/components/FuturesMonitor";
import { HelpSystem } from "@/components/HelpSystem";
import { BloombergGPT } from "@/components/BloombergGPT";
import { PortfolioRisk } from "@/components/PortfolioRisk";
import { TranscriptViewer } from "@/components/TranscriptViewer";
import { SecurityLock } from "@/components/SecurityLock";
import { YieldCurve } from "@/components/YieldCurve";
import { MarketHeatmap } from "@/components/MarketHeatmap";
import { EconomicStatistics } from "@/components/EconomicStatistics";
import { PortfolioAttribution } from "@/components/PortfolioAttribution";
import { TechnicalStudy } from "@/components/TechnicalStudy";
import { TerminalDiagnostics } from "@/components/TerminalDiagnostics";
import { FixedIncomeMonitor } from "@/components/FixedIncomeMonitor";
import { OptionValuation } from "@/components/OptionValuation";
import { GovBondPricing } from "@/components/GovBondPricing";
import { VolatilityAnalysis } from "@/components/VolatilityAnalysis";
import { PortfolioService } from "@/components/PortfolioService";
import { GraphicsBuilder } from "@/components/GraphicsBuilder";
import { IntradayGraph } from "@/components/IntradayGraph";
import { RegulatoryFilings } from "@/components/RegulatoryFilings";
import { Level2Depth } from "@/components/Level2Depth";
import { DarkPoolMonitor } from "@/components/DarkPoolMonitor";
import { AlgoTrading } from "@/components/AlgoTrading";
import { BacktestResults } from "@/components/BacktestResults";
import { CDSMonitor } from "@/components/CDSMonitor";
import { CreditRatings } from "@/components/CreditRatings";
import { RegionalEconomics } from "@/components/RegionalEconomics";
import { ETFMonitor } from "@/components/ETFMonitor";
import { FundHoldings } from "@/components/FundHoldings";
import { ClimateRisk } from "@/components/ClimateRisk";
import { ExcelLink } from "@/components/ExcelLink";
import { TradingHistory } from "@/components/TradingHistory";
import { MarketTreemap } from "@/components/MarketTreemap";
import { CorrelationMatrix } from "@/components/CorrelationMatrix";
import { AnalystConfidence } from "@/components/AnalystConfidence";
import { MergersAcquisitions } from "@/components/MergersAcquisitions";
import { ShortInterest } from "@/components/ShortInterest";
import { Seasonality } from "@/components/Seasonality";
import { AnalystHistory } from "@/components/AnalystHistory";
import { EnterpriseValue } from "@/components/EnterpriseValue";
import { RelativeValuation } from "@/components/RelativeValuation";
import { MergerArbitrage } from "@/components/MergerArbitrage";
import { CreditSpreadAnalysis } from "@/components/CreditSpreadAnalysis";
import { PortfolioOptimization } from "@/components/PortfolioOptimization";
import { EconomicReleasesDetail } from "@/components/EconomicReleasesDetail";
import { CentralBankSpeeches } from "@/components/CentralBankSpeeches";
import { SovereignCDS } from "@/components/SovereignCDS";
import { CommodityCurve } from "@/components/CommodityCurve";

type ViewType =
  | 'MARKET' | 'PORTFOLIO' | 'TRADE' | 'ECO' | 'DES' | 'WL' | 'ECON_NEWS'
  | 'FA' | 'ANR' | 'BTMM' | 'WFX' | 'BI' | 'IB' | 'WEI' | 'MOST' | 'EE'
  | 'HDS' | 'DVD' | 'OMON' | 'QR' | 'CN' | 'TECH' | 'HP' | 'PEER' | 'MGMT'
  | 'SUPP' | 'ESG' | 'DRIV' | 'ALRT' | 'NEWS' | 'LPAD' | 'YAS' | 'MAP' | 'EVT'
  | 'CACS' | 'IECO' | 'CBR' | 'FXCA' | 'COMM' | 'DCF' | 'WACC' | 'INS' | 'SENT'
  | 'SRCH' | 'USER' | 'BIO' | 'CASH' | 'DRV' | 'HELP' | 'GPT' | 'RISK' | 'TX'
  | 'LOCK' | 'YC' | 'HEAT' | 'ECST' | 'PORT' | 'TA' | 'DIAG' | 'FICM' | 'OVME'
  | 'GOVP' | 'VCA' | 'BPS' | 'G' | 'IGC' | 'FILP' | 'L2' | 'DP' | 'ALGO'
  | 'BTST' | 'CDS' | 'CRPR' | 'RECO' | 'ETF' | 'FUND' | 'CLIM' | 'XL' | 'BLOT'
  | 'MMAP' | 'CORR' | 'CONF' | 'MA' | 'SI' | 'SEAS' | 'ANRH' | 'EV' | 'RV'
  | 'MARB' | 'CSAD' | 'OPT' | 'ECOD' | 'SPEE' | 'SCDS' | 'CCUR';

const COMMAND_MAP: Record<string, ViewType> = {
  'MARKET': 'MARKET', 'MKT': 'MARKET', 'TOP': 'MARKET',
  'PORTFOLIO': 'PORTFOLIO', 'PF': 'PORTFOLIO',
  'TRADE': 'TRADE', 'TR': 'TRADE',
  'ECO': 'ECO', 'CAL': 'ECO',
  'DES': 'DES', 'WL': 'WL', 'WATCH': 'WL',
  'ECON': 'ECON_NEWS', 'EN': 'ECON_NEWS',
  'FA': 'FA', 'ANR': 'ANR', 'BTMM': 'BTMM', 'WFX': 'WFX', 'BI': 'BI', 'IB': 'IB',
  'WEI': 'WEI', 'MOST': 'MOST', 'MOVERS': 'MOST',
  'EE': 'EE', 'HDS': 'HDS', 'DVD': 'DVD', 'OMON': 'OMON', 'QR': 'QR', 'CN': 'CN', 'TECH': 'TECH',
  'HP': 'HP', 'HIST': 'HP', 'PEER': 'PEER', 'COMP': 'PEER', 'MGMT': 'MGMT', 'SUPP': 'SUPP', 'ESG': 'ESG',
  'DRIV': 'DRIV', 'ALRT': 'ALRT', 'NEWS': 'NEWS', 'LPAD': 'LPAD', 'YAS': 'YAS', 'MAP': 'MAP',
  'EVT': 'EVT', 'EARN': 'EVT',
  'CACS': 'CACS', 'CORP': 'CACS', 'IECO': 'IECO', 'INFL': 'IECO', 'CBR': 'CBR', 'RATE': 'CBR',
  'FXCA': 'FXCA', 'CONV': 'FXCA', 'COMM': 'COMM',
  'DCF': 'DCF', 'WACC': 'WACC', 'INS': 'INS', 'SENT': 'SENT', 'SRCH': 'SRCH', 'USER': 'USER',
  'BIO': 'BIO', 'CASH': 'CASH', 'DRV': 'DRV', 'HELP': 'HELP',
  'GPT': 'GPT', 'AI': 'GPT', 'RISK': 'RISK', 'TX': 'TX', 'LOCK': 'LOCK',
  'YC': 'YC', 'CURVE': 'YC', 'HEAT': 'HEAT', 'ECST': 'ECST', 'PORT': 'PORT', 'TA': 'TA', 'DIAG': 'DIAG',
  'FICM': 'FICM', 'OVME': 'OVME', 'GOVP': 'GOVP', 'VCA': 'VCA', 'BPS': 'BPS', 'G': 'G', 'IGC': 'IGC',
  'FILP': 'FILP', 'SEC': 'FILP', 'L2': 'L2', 'DEPTH': 'L2', 'DP': 'DP', 'DARK': 'DP', 'ALGO': 'ALGO',
  'BTST': 'BTST', 'CDS': 'CDS', 'CRPR': 'CRPR', 'RECO': 'RECO', 'ETF': 'ETF', 'FUND': 'FUND',
  'CLIM': 'CLIM', 'XL': 'XL', 'EXCEL': 'XL', 'BLOT': 'BLOT', 'HIST_TRADE': 'BLOT',
  'MMAP': 'MMAP', 'TREE': 'MMAP', 'CORR': 'CORR', 'CONF': 'CONF',
  'MA': 'MA', 'DEAL': 'MA', 'SI': 'SI', 'SHORT': 'SI', 'SEAS': 'SEAS', 'ANRH': 'ANRH',
  'EV': 'EV', 'RV': 'RV', 'MARB': 'MARB', 'CSAD': 'CSAD', 'OPT': 'OPT', 'ECOD': 'ECOD',
  'SPEE': 'SPEE', 'SCDS': 'SCDS', 'CCUR': 'CCUR',
};

interface TerminalState {
  view: ViewType;
  ticker: string;
}

export default function Home() {
  const [time, setTime] = useState<string | null>(null);
  const [activeTerminal, setActiveTerminal] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [terminals, setTerminals] = useState<Record<number, TerminalState>>({
    1: { view: 'MARKET', ticker: 'AAPL' },
    2: { view: 'LPAD', ticker: 'MSFT' },
    3: { view: 'ECO', ticker: 'TSLA' },
    4: { view: 'PORTFOLIO', ticker: 'NVDA' },
  });

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('terminal_state');
    if (saved) {
      try {
        setTerminals(JSON.parse(saved));
      } catch (e) { console.error("Failed to load terminal state", e); }
    }
    setIsLoaded(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('terminal_state', JSON.stringify(terminals));
    }
  }, [terminals, isLoaded]);

  const view = terminals[activeTerminal].view;
  const selectedTicker = terminals[activeTerminal].ticker;

  const setView = (v: ViewType) => {
    setTerminals(prev => ({
      ...prev,
      [activeTerminal]: { ...prev[activeTerminal], view: v }
    }));
  };

  const setSelectedTicker = (t: string) => {
    setTerminals(prev => ({
      ...prev,
      [activeTerminal]: { ...prev[activeTerminal], ticker: t }
    }));
  };

  useEffect(() => {
    setTime(new Date().toLocaleTimeString() + " NY");
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString() + " NY");
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCommand = (cmd: string) => {
    const command = cmd.toUpperCase();

    if (['T1', 'T2', 'T3', 'T4'].includes(command)) {
      setActiveTerminal(parseInt(command.substring(1)));
      return;
    }

    if (COMMAND_MAP[command]) {
      setView(COMMAND_MAP[command]);
    } else if (command.length <= 5 && /^[A-Z0-9]+$/.test(command)) {
      setSelectedTicker(command);
      // If we are in a stock-specific view, stay there. Otherwise go to Market/Chart
      const stockSpecificViews: ViewType[] = [
        'DES', 'FA', 'ANR', 'TRADE', 'EE', 'HDS', 'DVD', 'OMON', 'QR', 'CN', 'TECH',
        'HP', 'PEER', 'MGMT', 'SUPP', 'ESG', 'MAP', 'CACS', 'DCF', 'WACC', 'INS', 'BIO', 'CASH', 'TX',
        'OVME', 'FILP', 'CRPR', 'FUND', 'CLIM', 'SI', 'ANRH', 'EV', 'RV'
      ];
      if (!stockSpecificViews.includes(view)) {
        setView('MARKET');
      }
    }
  };

  const renderView = () => {
    switch (view) {
      case 'MARKET':
        return (
          <>
            <div className="flex-1 overflow-hidden">
              <StockChart ticker={selectedTicker} />
            </div>
            <div className="h-1/3 min-h-[200px]">
              <NewsFeed />
            </div>
          </>
        );
      case 'PORTFOLIO': return <Portfolio />;
      case 'TRADE':
        return (
          <div className="flex-1 grid grid-cols-3 overflow-hidden">
            <div className="col-span-2">
              <StockChart ticker={selectedTicker} />
            </div>
            <div className="col-span-1 border-l border-[#333]">
              <OrderEntry />
            </div>
          </div>
        );
      case 'ECO': return <EconomicCalendar />;
      case 'DES': return <SecurityDescription ticker={selectedTicker} />;
      case 'WL': return <Watchlist />;
      case 'ECON_NEWS': return <EconomicsNews />;
      case 'FA': return <FinancialAnalysis ticker={selectedTicker} />;
      case 'ANR': return <AnalystRecommendations ticker={selectedTicker} />;
      case 'BTMM': return <MoneyMarketMonitor />;
      case 'WFX': return <CurrencyMonitor />;
      case 'BI': return <BloombergIntelligence />;
      case 'IB': return <InstantBloomberg />;
      case 'WEI': return <WorldEquityIndices />;
      case 'MOST': return <MostActive />;
      case 'EE': return <EarningsEstimates ticker={selectedTicker} />;
      case 'HDS': return <HoldingsOwnership ticker={selectedTicker} />;
      case 'DVD': return <DividendHistory ticker={selectedTicker} />;
      case 'OMON': return <OptionMonitor ticker={selectedTicker} />;
      case 'QR': return <QuoteRecap ticker={selectedTicker} />;
      case 'CN': return <CompanyNews ticker={selectedTicker} />;
      case 'TECH': return <TechnicalIndicators ticker={selectedTicker} />;
      case 'HP': return <HistoricalPrices ticker={selectedTicker} />;
      case 'PEER': return <PeerAnalysis ticker={selectedTicker} />;
      case 'MGMT': return <ManagementProfile ticker={selectedTicker} />;
      case 'SUPP': return <SupplyChain ticker={selectedTicker} />;
      case 'ESG': return <ESGScore ticker={selectedTicker} />;
      case 'DRIV': return <MarketDrivers />;
      case 'ALRT': return <AlertManager />;
      case 'NEWS': return <FullNewsSearch />;
      case 'LPAD': return <Launchpad />;
      case 'YAS': return <YieldSpreadAnalysis />;
      case 'MAP': return <RevenueMap ticker={selectedTicker} />;
      case 'EVT': return <EarningsEvents />;
      case 'CACS': return <CorporateActions ticker={selectedTicker} />;
      case 'IECO': return <InflationMonitor />;
      case 'CBR': return <CentralBankTracker />;
      case 'FXCA': return <CurrencyConverter />;
      case 'COMM': return <CommodityMonitor />;
      case 'DCF': return <DCFModel ticker={selectedTicker} />;
      case 'WACC': return <WACCCalculator ticker={selectedTicker} />;
      case 'INS': return <InsiderTransactions ticker={selectedTicker} />;
      case 'SENT': return <SocialSentiment />;
      case 'SRCH': return <BondSearch />;
      case 'USER': return <UserPreferences />;
      case 'BIO': return <ExecutiveBio ticker={selectedTicker} />;
      case 'CASH': return <CashFlowStatement ticker={selectedTicker} />;
      case 'DRV': return <FuturesMonitor />;
      case 'HELP': return <HelpSystem />;
      case 'GPT': return <BloombergGPT />;
      case 'RISK': return <PortfolioRisk />;
      case 'TX': return <TranscriptViewer ticker={selectedTicker} />;
      case 'LOCK': return <SecurityLock />;
      case 'YC': return <YieldCurve />;
      case 'HEAT': return <MarketHeatmap />;
      case 'ECST': return <EconomicStatistics />;
      case 'PORT': return <PortfolioAttribution />;
      case 'TA': return <TechnicalStudy />;
      case 'DIAG': return <TerminalDiagnostics />;
      case 'FICM': return <FixedIncomeMonitor />;
      case 'OVME': return <OptionValuation ticker={selectedTicker} />;
      case 'GOVP': return <GovBondPricing />;
      case 'VCA': return <VolatilityAnalysis />;
      case 'BPS': return <PortfolioService />;
      case 'G': return <GraphicsBuilder />;
      case 'IGC': return <IntradayGraph />;
      case 'FILP': return <RegulatoryFilings ticker={selectedTicker} />;
      case 'L2': return <Level2Depth />;
      case 'DP': return <DarkPoolMonitor />;
      case 'ALGO': return <AlgoTrading />;
      case 'BTST': return <BacktestResults />;
      case 'CDS': return <CDSMonitor />;
      case 'CRPR': return <CreditRatings ticker={selectedTicker} />;
      case 'RECO': return <RegionalEconomics />;
      case 'ETF': return <ETFMonitor />;
      case 'FUND': return <FundHoldings ticker={selectedTicker} />;
      case 'CLIM': return <ClimateRisk ticker={selectedTicker} />;
      case 'XL': return <ExcelLink />;
      case 'BLOT': return <TradingHistory />;
      case 'MMAP': return <MarketTreemap />;
      case 'CORR': return <CorrelationMatrix />;
      case 'CONF': return <AnalystConfidence />;
      case 'MA': return <MergersAcquisitions />;
      case 'SI': return <ShortInterest ticker={selectedTicker} />;
      case 'SEAS': return <Seasonality />;
      case 'ANRH': return <AnalystHistory ticker={selectedTicker} />;
      case 'EV': return <EnterpriseValue ticker={selectedTicker} />;
      case 'RV': return <RelativeValuation ticker={selectedTicker} />;
      case 'MARB': return <MergerArbitrage />;
      case 'CSAD': return <CreditSpreadAnalysis />;
      case 'OPT': return <PortfolioOptimization />;
      case 'ECOD': return <EconomicReleasesDetail />;
      case 'SPEE': return <CentralBankSpeeches />;
      case 'SCDS': return <SovereignCDS />;
      case 'CCUR': return <CommodityCurve />;
      default:
        return <div className="p-4 text-red-500 font-bold uppercase">Function Not Found</div>;
    }
  };

  return (
    <main className="flex flex-col h-screen bg-black text-white font-mono overflow-hidden">
      {/* Top Header */}
      <div className="bg-[#1a1a1a] flex justify-between items-center px-4 py-1 border-b border-[#333] text-[10px] text-gray-400">
        <div className="flex gap-4">
          <span className="text-[#ffb900] font-bold">BLOOMBERG TERMINAL</span>
          <span className="uppercase">TERMINAL {activeTerminal}: {view} MONITOR</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-3 h-3" />
          <span>{time || "--:--:-- NY"}</span>
        </div>
      </div>

      <CommandBar onCommand={handleCommand} />

      <div className="flex-1 grid grid-cols-12 overflow-hidden">
        {/* Left Panel: Market Data */}
        <div className="col-span-3 h-full border-r border-[#333]">
          <MarketGrid />
        </div>

        {/* Center/Right Panel: Dynamic View */}
        <div className="col-span-9 flex flex-col h-full overflow-hidden">
          {renderView()}
        </div>
      </div>

      {/* Footer / Status Bar */}
      <div className="bg-[#222] border-t border-[#333] p-1 px-4 text-[10px] flex justify-between text-gray-400">
        <div className="flex gap-4">
          <span className="text-[#00ff00]">CONN OK</span>
          <span className={view === 'PORTFOLIO' ? "text-[#ffb900]" : ""}>PF</span>
          <span className={view === 'TRADE' ? "text-[#ffb900]" : ""}>TR</span>
          <span className={view === 'OPT' ? "text-[#ffb900]" : ""}>OPT</span>
          <span className={view === 'RV' ? "text-[#ffb900]" : ""}>RV</span>
          <span className={view === 'ECOD' ? "text-[#ffb900]" : ""}>ECOD</span>
          <span className={view === 'HELP' ? "text-[#ffb900]" : ""}>HELP</span>
          <span className={view === 'LOCK' ? "text-[#ffb900]" : ""}>LOCK</span>
        </div>
        <div className="flex gap-4">
          <span>S&P 500: 5,026.61 <span className="text-[#00ff00]">+0.58%</span></span>
          <span>GOLD: 2,385.40 <span className="text-[#00ff00]">+0.64%</span></span>
          <span>WTI: 85.45 <span className="text-[#00ff00]">+1.47%</span></span>
        </div>
      </div>
    </main>
  );
}
