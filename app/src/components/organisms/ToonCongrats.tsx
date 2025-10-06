import { useToon } from "@/hooks/ToonContext";
import React from "react";
import Countdown from "react-countdown";
import Text from "../molecules/Text";

export default function ToonCongrats() {
  const { solved, borderStyle } = useToon();

  const now = new Date();
  const nextUTC = new Date(
    Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + 1,
      0,
      0,
      0,
      0
    )
  );

  return (
    <>
      {solved && (
        <div className={`bg-white/80 border-4 ${borderStyle} rounded-lg mt-5 p-4 flex flex-col items-center`}>
          <Text type="xl" className="mb-2">Congratulations!</Text>
          <div className="flex flex-col items-center mt-2 mb-2">
            <Text type="sm">Next toon in:</Text>
            <Countdown
              date={nextUTC}
              daysInHours
              renderer={({ hours, minutes, seconds }) => (
                <Text type="xl">
                  {String(hours).padStart(2, "0")}:
                  {String(minutes).padStart(2, "0")}:
                  {String(seconds).padStart(2, "0")}
                </Text>
              )}
            />
          </div>
          <Text type="md" className="text-center mt-2">
            Thank you for playing ToonGuesser!
          </Text>
        </div>
      )}
    </>
  );
}
