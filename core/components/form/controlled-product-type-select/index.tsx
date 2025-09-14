"use client";
import { Controller, useFormContext } from "react-hook-form";
import { RadioGroup, Radio } from "@heroui/radio";
import { Input } from "@heroui/input";
import { Search, X } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";
import { Skeleton } from "@heroui/skeleton";
import { useState } from "react";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { ControlledBrandSelectCmProps } from "./types";
import { useGetProductTypeList } from "@/models/products";

export const ControlledProductTypeSelect: React.FC<
  ControlledBrandSelectCmProps
> = ({ name }) => {
  const { control } = useFormContext();

  const [inputValue, setInputValue] = useState("");

  const [searchValue, setSearchValue] = useDebounceValue("", 500);

  const { data: productTypes, isFetching } = useGetProductTypeList({
    params: {
      name: searchValue,
      page_size: 15,
      page_number: 0,
    },
  });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <div className="space-y-4">
            <Input
              variant="bordered"
              radius="sm"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setSearchValue(e.target.value);
              }}
              placeholder="جستجوی نوع محصول..."
              endContent={
                inputValue ? (
                  <X
                    className="text-foreground/85 cursor-pointer"
                    size={16}
                    onClick={() => {
                      setSearchValue("");
                      setInputValue("");
                    }}
                  />
                ) : (
                  <Search className="text-foreground/85" size={16} />
                )
              }
            />

            <ScrollShadow className="w-full h-56">
              {isFetching ? (
                <div className="flex flex-col gap-y-4">
                  {Array.from({ length: 5 }, (_, idx) => (
                    <div
                      key={`loading-${idx}`}
                      className="flex items-center gap-2"
                    >
                      <Skeleton className="size-6 rounded-md" />
                      <Skeleton className="w-full h-5 rounded-md" />
                    </div>
                  ))}
                </div>
              ) : (
                <RadioGroup
                  value={field.value}
                  onValueChange={(value) => {
                    field.onChange(value);
                  }}
                >
                  {productTypes?.data?.length ? (
                    productTypes?.data?.map((productType) => {
                      return (
                        <Radio
                          key={productType?.id}
                          value={productType?.id}
                          className="capitalize "
                          classNames={{
                            label: "text-sm",
                            base: "py-2.5",
                          }}
                        >
                          {productType?.name ?? productType?.title ?? "-"}
                        </Radio>
                      );
                    })
                  ) : (
                    <div className="py-5 w-full">
                      <p className="text-foreground/85 text-center">
                        نوع محصولی یافت نشد!
                      </p>
                    </div>
                  )}
                </RadioGroup>
              )}
            </ScrollShadow>
          </div>
        );
      }}
    />
  );
};
