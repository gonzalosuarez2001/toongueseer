import { useToon } from "@/hooks/ToonContext";
import React from "react";
import Text from "./Text";

export default function ToonControlButton({
  title,
  icon: Icon,
  active = false,
  onClick,
  levels = false,
  difficulty = 0,
}: {
  title: string;
  icon: React.ElementType;
  active: boolean;
  onClick: () => void;
  difficulty?: number;
  levels?: boolean;
}) {
  const maxDifficulty = Number(process.env.NEXT_PUBLIC_MAX_DIFFICULTY) || 7;

  const { bgStyle, textStyle } = useToon();

  return (
    <div className="flex flex-col items-center space-y-1">
      <button
        onClick={onClick}
        className={`${
          active ? "bg-black/20" : " hover:bg-black/10"
        }  rounded-full   p-3 cursor-pointer transition-colors`}
      >
        <Icon
          className={`${active ? textStyle : "text-gray-700"} size-8`}
        />
      </button>
      <Text type="md">{title}</Text>

      {levels && (
        <div className="flex space-x-1 bg-black/20 p-1 rounded-full mt-1">
          {Array.from({ length: maxDifficulty }).map((_, index) => {
            return (
              <div
                key={index}
                className={`${
                  difficulty < index + 1 ? "bg-gray-100" : bgStyle
                } h-1 w-2 rounded`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
