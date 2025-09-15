"use client";

import { ChangePercentLabel, SupplyLabel, WeeklyPriceGraph } from "@/common";
import { TableLoading } from "@/core/components";
import { thousandSeperator } from "@/core/utils";
import { usePagination } from "@/hooks";
import { useGetCurrenciesList } from "@/models/cryptocurrency";
import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { Image } from "@heroui/react";

export const CurrenciesList: React.FC = () => {
  const { start, limit, page, handlePageChange } = usePagination();

  const { data, isLoading } = useGetCurrenciesList({
    params: {
      start: start,
      limit: limit,
      sortBy: "rank",
      sortType: "desc",
      convert: "USD,BTC,ETH",
      cryptoType: "all",
      tagType: "all",
      audited: false,
      aux: "ath,atl,high24h,low24h,num_market_pairs,cmc_rank,date_added,max_supply,circulating_supply,total_supply,volume_7d,volume_30d,self_reported_circulating_supply,self_reported_market_cap",
    },
    refetchInterval: 60 * 1000,
    // refetchOnMount: "always", if we set this to always, still we are reading the data from indexeddb, but after showing user the data from indexeddb, we will run a background fetch and make sure we are reading the latest data from the server
  });

  return (
    <div className="py-5">
      <div className="bg-white rounded-lg shadow-card p-5">
        <div className="mb-5">
          <h2 className="text-xl text-foreground font-bold">لیست رمزارز ها</h2>
        </div>

        <Table
          isHeaderSticky
          shadow="none"
          classNames={{
            wrapper: "p-0 bg-transparent overflow-y-clip min-h-[500px]",
          }}
          bottomContent={
            <div className="rtl w-full flex justify-center mt-5 py-5">
              <Pagination
                dir="rtl"
                classNames={{
                  item: "cursor-pointer",
                }}
                total={Number(data?.data?.totalCount)}
                page={page}
                onChange={handlePageChange}
              />
            </div>
          }
        >
          <TableHeader>
            <TableColumn width={50}>#</TableColumn>
            <TableColumn className="sticky right-0 z-50">نام</TableColumn>
            <TableColumn>قیمت</TableColumn>
            <TableColumn>1h %</TableColumn>
            <TableColumn>24h %</TableColumn>
            <TableColumn>7d %</TableColumn>
            <TableColumn>ارزش بازار</TableColumn>
            <TableColumn>حجم روزانه</TableColumn>
            <TableColumn>عرضه کل</TableColumn>
            <TableColumn>7 روز اخیر</TableColumn>
          </TableHeader>

          <TableBody
            isLoading={isLoading}
            emptyContent="داده ای یافت نشد"
            loadingContent={<TableLoading />}
          >
            {!data?.data?.cryptoCurrencyList?.length
              ? []
              : data?.data?.cryptoCurrencyList?.map((item, idx) => {
                  const usdQuote = item?.quotes?.find(
                    (quote) => quote?.name === "USD"
                  );

                  return (
                    <TableRow key={item?.symbol}>
                      <TableCell>{item?.cmcRank}</TableCell>

                      <TableCell className="sticky right-0 bg-white z-50">
                        <div className="flex items-center gap-2 ">
                          <Image
                            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${item?.id}.png`}
                            alt={item?.symbol}
                            width={24}
                            height={24}
                            className="min-w-6 min-h-6"
                            radius="full"
                          />

                          <div className="flex md:flex-row flex-col md:items-center gap-2">
                            <span className="font-medium text-foreground capitalize whitespace-nowrap">
                              {item?.name}
                            </span>
                            <span className=" text-foreground whitespace-nowrap text-xs sm:text-sm">
                              {item?.symbol}
                            </span>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell className="whitespace-nowrap">
                        {thousandSeperator(usdQuote?.price, "$")}
                      </TableCell>

                      <TableCell className="whitespace-nowrap">
                        <ChangePercentLabel
                          changePercent={usdQuote?.percentChange1h ?? 0}
                        />
                      </TableCell>

                      <TableCell className="whitespace-nowrap">
                        <ChangePercentLabel
                          changePercent={usdQuote?.percentChange24h ?? 0}
                        />
                      </TableCell>

                      <TableCell className="whitespace-nowrap">
                        <ChangePercentLabel
                          changePercent={usdQuote?.percentChange7d ?? 0}
                        />
                      </TableCell>

                      <TableCell className="whitespace-nowrap">
                        {thousandSeperator(usdQuote?.marketCap, "$")}
                      </TableCell>

                      <TableCell className="whitespace-nowrap">
                        {thousandSeperator(usdQuote?.volume24h, "$")}
                      </TableCell>

                      <TableCell>
                        <SupplyLabel
                          totalSupply={item?.totalSupply}
                          maxSupply={item?.maxSupply}
                          symbol={item?.symbol}
                        />
                      </TableCell>

                      <TableCell>
                        <WeeklyPriceGraph
                          currencyId={item?.id}
                          currencySymbol={item?.symbol}
                          weeklyChangePercentage={
                            usdQuote?.percentChange7d ?? 0
                          }
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
