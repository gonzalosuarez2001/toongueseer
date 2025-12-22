import React from "react";
import Text from "../molecules/Text";

export default function ToonFootNote() {
  return (
    <div className="w-full flex justify-center pb-5">
      <h3
        className="text-gray-400 font-sans font-semibold text-m"
        style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
      >
        Developed by Gonzalo Suarez
      </h3>
    </div>
  );
}
