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
import { NewsTicker } from "@/components/NewsTicker";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { PriceSimulationEngine } from "@/lib/priceEngine";

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
import { WorldInterestRateProbabilities } from "@/components/WorldInterestRateProbabilities";
import { WorldBondMonitor } from "@/components/WorldBondMonitor";
import { InflationForecasts } from "@/components/InflationForecasts";
import { ForwardRates } from "@/components/ForwardRates";
import { OwnershipSummary } from "@/components/OwnershipSummary";
import { ShareBuybacks } from "@/components/ShareBuybacks";
import { RevenueSegmentation } from "@/components/RevenueSegmentation";
import { RelativeStrength } from "@/components/RelativeStrength";
import { PortfolioRebalancing } from "@/components/PortfolioRebalancing";
import { InterestRateSwaps } from "@/components/InterestRateSwaps";
import { GlobalGDPRanking } from "@/components/GlobalGDPRanking";
import { CentralBankAssets } from "@/components/CentralBankAssets";
import { StockScreener } from "@/components/StockScreener";
import { TerminalMessenger } from "@/components/TerminalMessenger";
import { MarketStories } from "@/components/MarketStories";
import { MonteCarloSimulation } from "@/components/MonteCarloSimulation";
import { CorrelationClustering } from "@/components/CorrelationClustering";
import { LiquidityAnalysis } from "@/components/LiquidityAnalysis";
import { TechMetrics } from "@/components/TechMetrics";
import { BankMetrics } from "@/components/BankMetrics";
import { EnergyMetrics } from "@/components/EnergyMetrics";
import { BondValuation } from "@/components/BondValuation";
import { CommodityMovers } from "@/components/CommodityMovers";
import { InventoryMonitor } from "@/components/InventoryMonitor";
import { FactorAnalysis } from "@/components/FactorAnalysis";
import { ScenarioManager } from "@/components/ScenarioManager";
import { VolatilitySurface } from "@/components/VolatilitySurface";
import { AnalystNews } from "@/components/AnalystNews";
import { MacroNews } from "@/components/MacroNews";
import { LifestyleDIN } from "@/components/LifestyleDIN";
import { PoshMarket } from "@/components/PoshMarket";
import { BillionairesIndex } from "@/components/BillionairesIndex";
import { WeatherMonitor } from "@/components/WeatherMonitor";
import { BloombergTV } from "@/components/BloombergTV";
import { TopStories } from "@/components/TopStories";
import { TradeTicks } from "@/components/TradeTicks";
import { TickerMemo } from "@/components/TickerMemo";
import { CryptoMonitor } from "@/components/CryptoMonitor";
import { EconomicSurpriseIndex } from "@/components/EconomicSurpriseIndex";
import { PortfolioHeatmap } from "@/components/PortfolioHeatmap";
import { AlertProvider } from "@/components/AlertToast";
import { TerminalDirectory } from "@/components/TerminalDirectory";
import { TerminalMessagingService } from "@/components/TerminalMessagingService";
import { PeopleSearch } from "@/components/PeopleSearch";
import { AdvancedPortfolioService } from "@/components/AdvancedPortfolioService";
import { BusinessCycle } from "@/components/BusinessCycle";
import { FinancialGlossary } from "@/components/FinancialGlossary";
import { TerminalOnboarding } from "@/components/TerminalOnboarding";
import { CentralBankCalendar } from "@/components/CentralBankCalendar";
import { EarningsTranscriptSearch } from "@/components/EarningsTranscriptSearch";
import { MarketWideHeatmap } from "@/components/MarketWideHeatmap";
import { CurrencyMatrix } from "@/components/CurrencyMatrix";
import { EquityScreener } from "@/components/EquityScreener";
import { CommodityPriceGrid } from "@/components/CommodityPriceGrid";
import { ESGDetail } from "@/components/ESGDetail";
import { GlobalYieldCurves } from "@/components/GlobalYieldCurves";
import { ShipTracking } from "@/components/ShipTracking";
import { ConnectData } from "@/components/ConnectData";
import { OptionAnalytics } from "@/components/OptionAnalytics";
import { HistoricalEvents } from "@/components/HistoricalEvents";
import { MaturityWall } from "@/components/MaturityWall";
import { CapitalStructure } from "@/components/CapitalStructure";
import { GlobalFlows } from "@/components/GlobalFlows";
import { EconomicMap } from "@/components/EconomicMap";
import { TerminalCommandPrompt } from "@/components/TerminalCommandPrompt";
import { OptionAdjustedSpread } from "@/components/OptionAdjustedSpread";
import { ValueAtRisk } from "@/components/ValueAtRisk";
import { FinancialModelBuilder } from "@/components/FinancialModelBuilder";
import { CompanyPrimer } from "@/components/CompanyPrimer";
import { TerminalAppStore } from "@/components/TerminalAppStore";
import { OptionSkew } from "@/components/OptionSkew";
import { CreditDefaultSwapSurface } from "@/components/CreditDefaultSwapSurface";
import { WorldEquityMarketCap } from "@/components/WorldEquityMarketCap";
import { IntradayTickChart } from "@/components/IntradayTickChart";
import { EconomicReleaseDrilldown } from "@/components/EconomicReleaseDrilldown";
import { TradeIdeaAnalytics } from "@/components/TradeIdeaAnalytics";
import { HedgeFundMonitor } from "@/components/HedgeFundMonitor";
import { GlobalSentimentMap } from "@/components/GlobalSentimentMap";
import { ExecutionManagementSystem } from "@/components/ExecutionManagementSystem";
import { DataFieldFinder } from "@/components/DataFieldFinder";
import { WebAPIIntegration } from "@/components/WebAPIIntegration";
import { GlobalSupplyChainMap } from "@/components/GlobalSupplyChainMap";
import { BloombergAnywhere } from "@/components/BloombergAnywhere";
import { PythonAnalytics } from "@/components/PythonAnalytics";

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
  | 'MARB' | 'CSAD' | 'OPT' | 'ECOD' | 'SPEE' | 'SCDS' | 'CCUR' | 'WIRP' | 'WB'
  | 'IFRC' | 'FWD' | 'OWN' | 'BUYB' | 'REV' | 'REL' | 'REBAL' | 'SWAP' | 'GDP'
  | 'CBAS' | 'SCRN' | 'MSG' | 'READ' | 'MCS' | 'CLUS' | 'LIQ' | 'TMT' | 'BNK'
  | 'ENRG' | 'BVAL' | 'CMOV' | 'INV' | 'FACT' | 'SCEN' | 'SURF' | 'AN' | 'MN'
  | 'DIN' | 'POSH' | 'RICH' | 'WX' | 'TV' | 'TICK' | 'MEMO'
  | 'CRYP' | 'CESI' | 'PFHM' | 'TOP' | 'DIR' | 'MSGS'
  | 'PEOP' | 'BPS' | 'BCYC' | 'GLOS' | 'JOIN'
  | 'CenB' | 'EVTS' | 'SHTM' | 'FXIP'
  | 'EQS' | 'CPG' | 'ESGD' | 'GCUR' | 'SHIP' | 'OA' | 'HEV'
  | 'MATW' | 'CAST' | 'FLOW' | 'EMAP' | 'CMD' | 'CONN'
  | 'SKEW' | 'CDSS' | 'WCAP' | 'TIC'
  | 'OAS' | 'VAR' | 'MODL' | 'BICO' | 'APPS'
  | 'ECDR' | 'IDEA' | '13F' | 'GSENT'
  | 'EMSX' | 'FLDS' | 'WAPI' | 'BBA' | 'PY';

const COMMAND_MAP: Record<string, ViewType> = {
  'MARKET': 'MARKET', 'MKT': 'MARKET', 'TOP': 'TOP',
  'PORTFOLIO': 'PORTFOLIO', 'PF': 'PORTFOLIO',
  'TRADE': 'TRADE', 'TR': 'TRADE',
  'ECO': 'ECO', 'CAL': 'ECO',
  'DES': 'DES', 'WL': 'WL', 'WATCH': 'WL',
  'ECON': 'ECON_NEWS', 'EN': 'ECON_NEWS',
  'FA': 'FA', 'ANR': 'ANR', 'BTMM': 'BTMM', 'WFX': 'WFX', 'BI': 'BI', 'IB': 'IB',
  'WEI': 'WEI', 'MOST': 'MOST', 'MOVERS': 'MOST',
  'EE': 'EE', 'HDS': 'HDS', 'DVD': 'DVD', 'OMON': 'OMON', 'QR': 'QR', 'CN': 'CN', 'TECH': 'TECH',
  'HP': 'HP', 'HIST': 'HP', 'PEER': 'PEER', 'COMP': 'PEER', 'MGMT': 'MGMT', 'SUPP': 'SUPP', 'ESG': 'ESG',
  'DRIV': 'DRIV', 'ALRT': 'ALRT', 'NEWS': 'NEWS', 'NI': 'NEWS', 'LPAD': 'LPAD', 'YAS': 'YAS', 'MAP': 'MAP',
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
  'SPEE': 'SPEE', 'SCDS': 'SCDS', 'CCUR': 'CCUR', 'WIRP': 'WIRP', 'WB': 'WB', 'IFRC': 'IFRC',
  'FWD': 'FWD', 'OWN': 'OWN', 'BUYB': 'BUYB', 'REV': 'REV', 'REL': 'REL', 'REBAL': 'REBAL',
  'SWAP': 'SWAP', 'GDP': 'GDP', 'CBAS': 'CBAS', 'SCRN': 'SCRN', 'SR': 'SCRN', 'MSG': 'MSG', 'READ': 'READ',
  'MCS': 'MCS', 'PROB': 'MCS', 'CLUS': 'CLUS', 'LIQ': 'LIQ', 'TMT': 'TMT', 'BNK': 'BNK',
  'ENRG': 'ENRG', 'BVAL': 'BVAL', 'CMOV': 'CMOV', 'INV': 'INV', 'FACT': 'FACT', 'SCEN': 'SCEN',
  'SURF': 'SURF', 'AN': 'AN', 'MN': 'MN', 'BETA': 'VCA', 'VAP': 'TA', 'GIP': 'IGC',
  'DIN': 'DIN', 'POSH': 'POSH', 'RICH': 'RICH', 'WX': 'WX', 'TV': 'TV', 'TICK': 'TICK', 'MEMO': 'MEMO',
  'CRYP': 'CRYP', 'BTC': 'CRYP', 'CESI': 'CESI', 'PFHM': 'PFHM', 'DIR': 'DIR', 'MSGS': 'MSGS',
  'PEOP': 'PEOP', 'BCYC': 'BCYC', 'GLOS': 'GLOS', 'JOIN': 'JOIN', 'START': 'JOIN',
  'CENB': 'CenB', 'EVTS': 'EVTS', 'SHTM': 'SHTM', 'FXIP': 'FXIP',
  'EQS': 'EQS', 'CPG': 'CPG', 'ESGD': 'ESGD', 'GCUR': 'GCUR', 'SHIP': 'SHIP',
  'OA': 'OA', 'HEV': 'HEV', 'MATW': 'MATW', 'CAST': 'CAST', 'FLOW': 'FLOW', 'CONN': 'CONN',
  'EMAP': 'EMAP', 'CMD': 'CMD', 'PROMPT': 'CMD',
  'SKEW': 'SKEW', 'CDSS': 'CDSS', 'WCAP': 'WCAP', 'TIC': 'TIC',
  'OAS': 'OAS', 'VAR': 'VAR', 'MODL': 'MODL', 'BICO': 'BICO', 'APPS': 'APPS',
  'ECDR': 'ECDR', 'IDEA': 'IDEA', '13F': '13F', 'GSENT': 'GSENT', 'SENTIMENT': 'GSENT',
  'EMSX': 'EMSX', 'FLDS': 'FLDS', 'WAPI': 'WAPI', 'BBA': 'BBA', 'PY': 'PY',
};

const COMMAND_LIST = Object.keys(COMMAND_MAP);

interface TerminalState {
  view: ViewType;
  ticker: string;
}

export default function Home() {
  const [time, setTime] = useState<string | null>(null);
  const [activeTerminal, setActiveTerminal] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLive, setIsLive] = useState(false);
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

    const engine = PriceSimulationEngine.getInstance();
    const unsubscribeLive = engine.subscribe((updates) => {
      const first = Object.values(updates)[0];
      if (first) setIsLive(first.isRealTime);
    });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case 'F1': e.preventDefault(); handleCommand('HELP'); break;
        case 'F2': e.preventDefault(); handleCommand('GOVP'); break;
        case 'F3': e.preventDefault(); handleCommand('CRPR'); break;
        case 'F4': e.preventDefault(); handleCommand('MKT'); break;
        case 'F5': e.preventDefault(); handleCommand('WL'); break;
        case 'F8': e.preventDefault(); handleCommand('TICK'); break;
        case 'F9': e.preventDefault(); handleCommand('MSG'); break;
        case '1': if (e.altKey) handleCommand('T1'); break;
        case '2': if (e.altKey) handleCommand('T2'); break;
        case '3': if (e.altKey) handleCommand('T3'); break;
        case '4': if (e.altKey) handleCommand('T4'); break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearInterval(timer);
      window.removeEventListener('keydown', handleKeyDown);
      unsubscribeLive();
    };
  }, [activeTerminal, view]);

  if (!isLoaded) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center font-mono">
        <div className="text-[#ffb900] text-4xl font-bold tracking-tighter mb-4 animate-pulse">
          BLOOMBERG
        </div>
        <div className="w-64 h-1 bg-[#222] rounded-full overflow-hidden">
          <div className="h-full bg-[#ffb900] animate-progress" />
        </div>
        <div className="text-gray-600 text-[10px] mt-4 uppercase tracking-widest">
          Terminal Pro Workstation v2025.1 | Authenticating...
        </div>
        <style jsx>{`
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          .animate-progress {
            animation: progress 1.5s ease-in-out forwards;
          }
        `}</style>
      </div>
    );
  }

  const handleCommand = (cmd: string) => {
    const command = cmd.toUpperCase();

    // Track command history
    const saved = localStorage.getItem('bloomberg_history');
    const history = saved ? JSON.parse(saved) : [];
    const newHistory = [command, ...history.filter((h: string) => h !== command)].slice(0, 50);
    localStorage.setItem('bloomberg_history', JSON.stringify(newHistory));

    if (['T1', 'T2', 'T3', 'T4'].includes(command)) {
      setActiveTerminal(parseInt(command.substring(1)));
      return;
    }

    if (COMMAND_MAP[command]) {
      setView(COMMAND_MAP[command]);
    } else if (command.length >= 6 && !/^[A-Z0-9]+$/.test(command)) {
      // Intelligent Search Routing: If it looks like a long sentence, route to News/Intelligence
      setView('NEWS');
    } else if (command.length <= 5 && /^[A-Z0-9]+$/.test(command)) {
      setSelectedTicker(command);
      // If we are in a stock-specific view, stay there. Otherwise go to Market/Chart
      const stockSpecificViews: ViewType[] = [
        'DES', 'FA', 'ANR', 'TRADE', 'EE', 'HDS', 'DVD', 'OMON', 'QR', 'CN', 'TECH',
        'HP', 'PEER', 'MGMT', 'SUPP', 'ESG', 'MAP', 'CACS', 'DCF', 'WACC', 'INS', 'BIO', 'CASH', 'TX',
        'OVME', 'FILP', 'CRPR', 'FUND', 'CLIM', 'SI', 'ANRH', 'EV', 'RV', 'OWN', 'BUYB', 'REV',
        'TMT', 'BNK', 'ENRG'
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
      case 'MAP': return <GlobalSupplyChainMap ticker={selectedTicker} />;
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
      case 'TA': return <TechnicalStudy ticker={selectedTicker} />;
      case 'DIAG': return <TerminalDiagnostics />;
      case 'FICM': return <FixedIncomeMonitor />;
      case 'OVME': return <OptionValuation ticker={selectedTicker} />;
      case 'GOVP': return <GovBondPricing />;
      case 'VCA': return <VolatilityAnalysis />;
      case 'BPS': return <AdvancedPortfolioService />;
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
      case 'WIRP': return <WorldInterestRateProbabilities />;
      case 'WB': return <WorldBondMonitor />;
      case 'IFRC': return <InflationForecasts />;
      case 'FWD': return <ForwardRates />;
      case 'OWN': return <OwnershipSummary ticker={selectedTicker} />;
      case 'BUYB': return <ShareBuybacks ticker={selectedTicker} />;
      case 'REV': return <RevenueSegmentation ticker={selectedTicker} />;
      case 'REL': return <RelativeStrength />;
      case 'REBAL': return <PortfolioRebalancing />;
      case 'SWAP': return <InterestRateSwaps />;
      case 'GDP': return <GlobalGDPRanking />;
      case 'CBAS': return <CentralBankAssets />;
      case 'SCRN': return <StockScreener />;
      case 'MSG': return <TerminalMessenger />;
      case 'READ': return <MarketStories />;
      case 'MCS': return <MonteCarloSimulation />;
      case 'CLUS': return <CorrelationClustering />;
      case 'LIQ': return <LiquidityAnalysis />;
      case 'TMT': return <TechMetrics ticker={selectedTicker} />;
      case 'BNK': return <BankMetrics ticker={selectedTicker} />;
      case 'ENRG': return <EnergyMetrics ticker={selectedTicker} />;
      case 'BVAL': return <BondValuation />;
      case 'CMOV': return <CommodityMovers />;
      case 'INV': return <InventoryMonitor />;
      case 'FACT': return <FactorAnalysis />;
      case 'SCEN': return <ScenarioManager />;
      case 'SURF': return <VolatilitySurface />;
      case 'AN': return <AnalystNews />;
      case 'MN': return <MacroNews />;
      case 'DIN': return <LifestyleDIN />;
      case 'POSH': return <PoshMarket />;
      case 'RICH': return <BillionairesIndex />;
      case 'TOP': return <TopStories />;
      case 'WX': return <WeatherMonitor />;
      case 'TV': return <BloombergTV />;
      case 'TICK': return <TradeTicks />;
      case 'MEMO': return <TickerMemo ticker={selectedTicker} />;
      case 'CRYP': return <CryptoMonitor />;
      case 'CESI': return <EconomicSurpriseIndex />;
      case 'PFHM': return <PortfolioHeatmap />;
      case 'DIR': return <TerminalDirectory />;
      case 'MSGS': return <TerminalMessagingService />;
      case 'PEOP': return <PeopleSearch />;
      case 'BCYC': return <BusinessCycle />;
      case 'GLOS': return <FinancialGlossary />;
      case 'JOIN': return <TerminalOnboarding />;
      case 'CenB': return <CentralBankCalendar />;
      case 'EVTS': return <EarningsTranscriptSearch />;
      case 'SHTM': return <MarketWideHeatmap />;
      case 'FXIP': return <CurrencyMatrix />;
      case 'EQS': return <EquityScreener />;
      case 'CPG': return <CommodityPriceGrid />;
      case 'ESGD': return <ESGDetail ticker={selectedTicker} />;
      case 'GCUR': return <GlobalYieldCurves />;
      case 'SHIP': return <ShipTracking />;
      case 'OA': return <OptionAnalytics ticker={selectedTicker} />;
      case 'HEV': return <HistoricalEvents />;
      case 'MATW': return <MaturityWall ticker={selectedTicker} />;
      case 'CAST': return <CapitalStructure ticker={selectedTicker} />;
      case 'FLOW': return <GlobalFlows />;
      case 'EMAP': return <EconomicMap />;
      case 'CMD': return <TerminalCommandPrompt />;
      case 'OAS': return <OptionAdjustedSpread />;
      case 'VAR': return <ValueAtRisk />;
      case 'MODL': return <FinancialModelBuilder />;
      case 'BICO': return <CompanyPrimer ticker={selectedTicker} />;
      case 'APPS': return <TerminalAppStore />;
      case 'SKEW': return <OptionSkew ticker={selectedTicker} />;
      case 'CDSS': return <CreditDefaultSwapSurface />;
      case 'WCAP': return <WorldEquityMarketCap />;
      case 'TIC': return <IntradayTickChart ticker={selectedTicker} />;
      case 'CONN': return <ConnectData />;
      case 'ECDR': return <EconomicReleaseDrilldown />;
      case 'IDEA': return <TradeIdeaAnalytics />;
      case '13F': return <HedgeFundMonitor />;
      case 'GSENT': return <GlobalSentimentMap />;
      case 'EMSX': return <ExecutionManagementSystem />;
      case 'FLDS': return <DataFieldFinder />;
      case 'WAPI': return <WebAPIIntegration />;
      case 'BBA': return <BloombergAnywhere />;
      case 'PY': return <PythonAnalytics ticker={selectedTicker} />;
      default:
        return <div className="p-4 text-red-500 font-bold uppercase">Function Not Found</div>;
    }
  };

  return (
    <AlertProvider>
    <main className="flex flex-col h-screen bg-black text-white font-mono overflow-hidden">
      {/* Top Header */}
      <div className="bg-[#1a1a1a] flex justify-between items-center px-4 py-1 border-b border-[#333] text-[10px] text-gray-400">
        <div className="flex gap-4 items-center">
          <span className="text-[#ffb900] font-bold">BLOOMBERG TERMINAL</span>
          <div className="w-[1px] h-3 bg-[#333] mx-2" />
          <span className="uppercase tracking-tight">TERMINAL {activeTerminal}: {view} MONITOR</span>
          <div className="flex items-center gap-1 ml-4 bg-black/40 px-2 py-0.5 rounded border border-[#333]">
             <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse", isLive ? "bg-[#00ff00]" : "bg-blue-500")} />
             <span className="text-[8px] text-gray-500 uppercase">{isLive ? "SYS_OK_LIVE" : "SYS_SIMULATED"}</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 border-r border-[#333] pr-4">
             <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center text-[8px] text-white font-bold">P</div>
             <span className="hover:text-white cursor-pointer transition-colors">TRADER_PRO_01</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3" />
            <span>{time || "--:--:-- NY"}</span>
          </div>
        </div>
      </div>

      <CommandBar onCommand={handleCommand} commands={COMMAND_LIST} />

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

      {/* News Ticker */}
      <NewsTicker />

      {/* Footer / Status Bar */}
      <div className="bg-[#222] border-t border-[#333] p-1 px-4 text-[10px] flex justify-between text-gray-400">
        <div className="flex gap-4">
          <span className="text-[#00ff00]">CONN OK</span>
          <span className={view === 'PORTFOLIO' ? "text-[#ffb900]" : ""}>PF</span>
          <span className={view === 'TRADE' ? "text-[#ffb900]" : ""}>TR</span>
          <span className={view === 'AN' ? "text-[#ffb900]" : ""}>AN</span>
          <span className={view === 'MN' ? "text-[#ffb900]" : ""}>MN</span>
          <span className={view === 'HELP' ? "text-[#ffb900]" : ""}>HELP</span>
          <span className={view === 'LOCK' ? "text-[#ffb900]" : ""}>LOCK</span>
        </div>
        <div className="flex gap-4 items-center">
          <span>S&P 500: 5,026.61 <span className="text-[#00ff00]">+0.58%</span></span>
          <span>GOLD: 2,385.40 <span className="text-[#00ff00]">+0.64%</span></span>
          <span>WTI: 85.45 <span className="text-[#00ff00]">+1.47%</span></span>
        </div>
      </div>
    </main>
    </AlertProvider>
  );
}
