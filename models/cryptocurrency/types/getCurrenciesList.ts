import { QueryOptionsParams } from "@/core/types";
import { PaginationParams } from "@/types/pagination";
import { SortParams } from "@/types/sort";

export type GetCurrenciesListParams = {
  convert: string; //  'USD,BTC,ETH'
  cryptoType: string; // 'all'
  tagType: string; // 'all'
  audited: boolean; //
  aux: string; // Comma-separated auxiliary fields
} & PaginationParams &
  SortParams;

export type QuotesInCurrencyListResponse = {
  name: string;
  price: number;
  volume24h: number;
  volume7d: number;
  volume30d: number;
  marketCap: number;
  selfReportedMarketCap: number;
  percentChange1h: number;
  percentChange24h: number;
  percentChange7d: number;
  lastUpdated: string;
  percentChange30d: number;
  percentChange60d: number;
  percentChange90d: number;
  fullyDilluttedMarketCap: number;
  marketCapByTotalSupply: number;
  dominance: number;
  turnover: number;
  ytdPriceChangePercentage: number;
  percentChange1y: number;
};

export type CurrencyInListResponse = {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  cmcRank: number;
  marketPairCount: number;
  circulatingSupply: number;
  selfReportedCirculatingSupply: number;
  totalSupply: number;
  maxSupply: number;
  ath: number;
  atl: number;
  high24h: number;
  low24h: number;
  isActive: number;
  lastUpdated: string;
  dateAdded: string;
  quotes: QuotesInCurrencyListResponse[];
  isAudited: boolean;
  auditInfoList: unknown[];
  badges: number[];
};

export type GetCurrenciesListResponse = {
  data: {
    cryptoCurrencyList: CurrencyInListResponse[];
    totalCount: number;
  };
};

export type UseGetCurrenciesListType = {
  options?: QueryOptionsParams<
    GetCurrenciesListResponse,
    { params?: Partial<GetCurrenciesListParams> }
  >;
  response: GetCurrenciesListResponse;
};
