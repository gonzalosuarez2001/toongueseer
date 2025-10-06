import React from "react";
import cartoonConfig from "../../cartoonConfig";
import { useToon } from "@/hooks/ToonContext";

export default function Text({
  type,
  color = "text-gray-700",
  className,
  children,
}: {
  type: "xl" | "lg" | "md" | "sm";
  color?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const { cartoon } = useToon();

  let formatType = "text-md";

  if (cartoon != "") {
    formatType = cartoonConfig[cartoon].textStyles[type];
  }

  return <p className={`${formatType} ${color} ${className}`}>{children}</p>;
}
