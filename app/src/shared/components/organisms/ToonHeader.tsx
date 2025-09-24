import Image from "next/image";
import React from "react";

export default function ToonHeader() {
  return (
    <div className="w-full flex justify-center mt-10">
      <Image
        src="/simpsons_logo.png"
        alt="Simpsons Logo"
        width={300}
        height={0}
      />
    </div>
  );
}
