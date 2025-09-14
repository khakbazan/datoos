"use client";

import { Controller, useFormContext } from "react-hook-form";
import { ControlledAdvancedAddItemCmProps } from "./types";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Chip } from "@heroui/chip";

export const ControlledAdvancedAddItem: React.FC<
  ControlledAdvancedAddItemCmProps
> = ({ name, ...props }) => {
  const { control } = useFormContext();
  const [value, setValue] = useState<{ name: string; value: string }>({
    name: "",
    value: "",
  });

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <div>
            <div className="flex items-start gap-2">
              <div className="grid grid-cols-12 gap-2">
                <div className="col-span-4">
                  <Input
                    variant="bordered"
                    radius="sm"
                    label="نام"
                    size="sm"
                    value={value.name}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        if (value.name && value.value) {
                          field.onChange([...field.value, value]);
                          setValue({ name: "", value: "" });
                        }
                      }
                    }}
                    onChange={(e) =>
                      setValue({ ...value, name: e.target.value })
                    }
                    isInvalid={fieldState.invalid}
                    errorMessage={fieldState?.error?.message}
                    autoComplete="off"
                  />
                </div>

                <div className="col-span-8">
                  <Input
                    variant="bordered"
                    radius="sm"
                    label="مقدار"
                    size="sm"
                    value={value.value}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        if (value.name && value.value) {
                          field.onChange([...field.value, value]);
                          setValue({ name: "", value: "" });
                        }
                      }
                    }}
                    onChange={(e) =>
                      setValue({ ...value, value: e.target.value })
                    }
                    isInvalid={fieldState.invalid}
                    autoComplete="off"
                  />
                </div>
              </div>

              <Button
                type="button"
                onPress={() => {
                  field.onChange([...field.value, value]);
                  setValue({ name: "", value: "" });
                }}
                isIconOnly
                variant="light"
                isDisabled={!value.name || !value.value}
                // size="sm"
                color="primary"
                radius="sm"
                className="ml-1 mt-1 bg-primary hover:bg-primary/80!"
              >
                <Plus className="text-white" size={16} />
              </Button>
            </div>

            {field?.value?.length ? (
              <div className="flex items-center gap-2 mt-2">
                {field.value.map(
                  (item: { name: string; value: string }, idx: number) => (
                    <Chip
                      key={`${name}-${idx}`}
                      variant="bordered"
                      onClose={() => {
                        field.onChange(
                          field.value.filter(
                            (
                              _: { name: string; value: string },
                              index: number
                            ) => index !== idx
                          )
                        );
                      }}
                    >{`${item.name}: ${item.value}`}</Chip>
                  )
                )}
              </div>
            ) : null}
          </div>
        );
      }}
    />
  );
};
