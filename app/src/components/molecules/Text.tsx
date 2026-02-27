import React from "react";
import cartoonConfig from "../../cartoonConfig";
import { useAppSelector } from "@/store/hooks";

export default function Text({
  type,
  color = "text-gray-700",
  className,
  children,
}: {
  type: "xxl" | "xl" | "lg" | "md" | "sm";
  color?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const cartoon = useAppSelector((state)=> state.game.cartoon)

  let formatType = "text-md";

  formatType = cartoonConfig[cartoon].textStyles[type];

  return <p className={`${formatType} ${color} ${className}`}>{children}</p>;
}
