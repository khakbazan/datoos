import { queryOptions } from "@tanstack/react-query";
import type { UseGetCurrenciesListType } from "../types";
import { clientRequest } from "@/core/config";
import { urlWithParams } from "@/core/utils";

export const getCurrenciesListOptions = (
  options?: UseGetCurrenciesListType["options"]
) => {
  const { params, ...restOptions } = options || {};

  return queryOptions({
    queryKey: ["currencies", params],
    queryFn: async () => {
      const url = urlWithParams("currency/list", params);

      const response = await clientRequest.get(url);

      return response.data;
    },
    ...restOptions,
  });
};
