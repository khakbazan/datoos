"use client";

import { Tooltip } from "@heroui/react";
import { SupplyLabelProps } from "./types";
import { formatNumberCompact, thousandSeperator } from "@/core/utils";

export const SupplyLabel: React.FC<SupplyLabelProps> = ({
  totalSupply,
  maxSupply,
  symbol,
}) => {
  const percentage = (totalSupply * 100) / maxSupply;

  return (
    <Tooltip
      className="w-[300px]"
      showArrow
      content={
        <div className="w-full">
          {maxSupply ? (
            <div>
              <div className="flex  items-center justify-between mb-1">
                <p>میزان توزیع شده</p>
                <p>{percentage.toFixed(2)}%</p>
              </div>

              <div className="relative w-full h-1.5 rounded-md bg-content3 border border-divider">
                <div
                  className="absolute top-0 right-0 w-full h-full rounded-md bg-slate-500"
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>

              <div className="mt-3">
                <div className="flex  items-center justify-between">
                  <p>توزیع شده</p>

                  {thousandSeperator(totalSupply, symbol)}
                </div>

                <div className="flex  items-center justify-between">
                  <p>حداکثر توزیع</p>

                  {thousandSeperator(maxSupply, symbol)}
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full flex  items-center justify-between">
              <p>توزیع شده</p>

              {thousandSeperator(totalSupply, symbol)}
            </div>
          )}
        </div>
      }
    >
      <div className="w-full">
        <div className="flex items-center gap-1 mb-0.5">
          <p className="text-foreground">{symbol}</p>
          <p className="text-foreground">{formatNumberCompact(totalSupply)}</p>
        </div>

        {maxSupply ? (
          <div className="relative w-32 h-1.5 rounded-md bg-content3 border border-divider">
            <div
              className="absolute top-0 right-0 w-full h-full rounded-md bg-slate-500"
              style={{
                width: `${percentage}%`,
              }}
            />
          </div>
        ) : null}
      </div>
    </Tooltip>
  );
};
