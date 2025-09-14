"use client";
import { Controller, useFormContext } from "react-hook-form";
import { ControlledAddItemCmProps } from "./types";
import { Input } from "@heroui/input";
import { useState } from "react";
import { Button } from "@heroui/button";
import { Plus, X } from "lucide-react";
import { Chip } from "@heroui/chip";

export const ControlledAddItem: React.FC<ControlledAddItemCmProps> = ({
  name,
  ...props
}) => {
  const [inputValue, setInputValue] = useState("");

  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <div>
            <div className="flex items-start gap-2">
              <Input
                fullWidth
                value={inputValue}
                variant="bordered"
                classNames={{
                  inputWrapper: "pl-0",
                }}
                radius="sm"
                label="مزیت محصول"
                size="sm"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    field.onChange([...field.value, inputValue]);
                    setInputValue("");
                  }
                }}
                onChange={(e) => setInputValue(e.target.value)}
                isInvalid={fieldState.invalid}
                errorMessage={fieldState?.error?.message}
                autoComplete="off"
              />

              <Button
                type="button"
                onPress={() => {
                  field.onChange([...field.value, inputValue]);
                  setInputValue("");
                }}
                isIconOnly
                variant="light"
                isDisabled={!inputValue}
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
                {field.value.map((item: string, idx: number) => (
                  <Chip
                    variant="bordered"
                    key={`${name}-${idx}`}
                    onClose={() => {
                      field.onChange(
                        field.value.filter(
                          (_: string, index: number) => index !== idx
                        )
                      );
                    }}
                  >
                    {item}
                  </Chip>
                ))}
              </div>
            ) : null}
          </div>
        );
      }}
    />
  );
};
