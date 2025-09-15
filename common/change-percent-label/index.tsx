"use client";
import { Chip } from "@heroui/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ChangePercentLabelProps } from "./types";

export const ChangePercentLabel: React.FC<ChangePercentLabelProps> = ({
  changePercent,
}) => {
  return (
    <Chip
      size="sm"
      variant="light"
      classNames={{
        content: "font-medium",
      }}
      className="ltr"
      startContent={
        changePercent > 0 ? (
          <ChevronUp size={15} strokeWidth={3.2} />
        ) : changePercent < 0 ? (
          <ChevronDown size={15} strokeWidth={3.2} />
        ) : null
      }
      color={
        changePercent > 0 ? "success" : changePercent < 0 ? "danger" : "warning"
      }
    >
      {changePercent.toFixed(2)}%
    </Chip>
  );
};
