export interface AssetData {
  name: string;
  value: number;
}

export interface PerformanceData {
  month: string;
  value: number;
}

export interface MarketTrendData {
  name: string;
  value: number;
}

export interface DashboardData {
  assetAllocation: AssetData[];
  performanceOverTime: PerformanceData[];
  marketTrends: MarketTrendData[];
}
