import Image from "next/image";
import React from "react";

export default function ToonHeader() {
  return (
    <div className="w-full flex justify-center mt-5">
      <Image
        src="/simpsons_logo.png"
        alt="Simpsons Logo"
        width={250}
        height={0}
      />
    </div>
  );
}
