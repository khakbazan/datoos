"use client";
import { Image } from "@heroui/react";
import { WeeklyPriceGraphProps } from "./types";
import clsx from "clsx";

export const WeeklyPriceGraph: React.FC<WeeklyPriceGraphProps> = ({
  currencyId,
  width = 120,
  height = 30,
  currencySymbol,
  weeklyChangePercentage,
}) => {
  return (
    <Image
      src={`https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${currencyId}.svg`}
      alt={`weekly price graph of ${currencySymbol}`}
      width={width}
      height={height}
      radius="sm"
      className={clsx(
        "min-w-24 min-h-8",
        weeklyChangePercentage > 0
          ? "hue-rotate-90 saturate-100 brightness-75"
          : "hue-rotate-[300deg] saturate-[210%] brightness-[0.7] contrast-[170%]"
      )}
    />
  );
};
