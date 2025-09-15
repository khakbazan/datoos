import { urlWithParams } from "@/core/utils";
import type {
  GetCurrenciesListParams,
  UseGetCurrenciesListType,
} from "../types";
import { clientRequest } from "@/core/config";

export const getCoinMarketCapCurrenciesList = async (
  params?: Partial<GetCurrenciesListParams>
) => {
  const url = urlWithParams("cryptocurrency/listing", params);

  const response = await clientRequest.get<
    UseGetCurrenciesListType["response"]
  >(url, {
    baseURL: "https://api.coinmarketcap.com/data-api/v3",
  });

  return response.data;
};
