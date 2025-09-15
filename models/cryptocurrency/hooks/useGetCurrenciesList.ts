import { useQuery } from "@tanstack/react-query";
import { getCurrenciesListOptions } from "../options";
import type { UseGetCurrenciesListType } from "../types";

export const useGetCurrenciesList = (
  options?: UseGetCurrenciesListType["options"]
) => {
  return useQuery(getCurrenciesListOptions(options));
};
