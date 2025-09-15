import { finalizeError } from "@/core/config";
import { getRouteQueries } from "@/core/utils";
import { getCoinMarketCapCurrenciesList } from "@/models/cryptocurrency";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const url = new URL(request.url);

    const queryParams = getRouteQueries(url.searchParams, [
      "start",
      "limit",
      "sortBy",
      "sortType",
      "convert",
      "cryptoType",
      "tagType",
      "audited",
      "aux",
    ]);

    const response = await getCoinMarketCapCurrenciesList(queryParams);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    const finalError = finalizeError(error);

    return NextResponse.json(finalError, {
      status: finalError?.statusCode ?? 500,
    });
  }
};
