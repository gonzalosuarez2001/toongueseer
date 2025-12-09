import React from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Text from "../molecules/Text";

export default function ToonFooter() {
  return (
    <div className="w-full my-2 flex items-center justify-center mt-20 mb-10">
      <Link
        href="/"
        className="rounded-lg p-2 pe-3 bg-gray-800 hover:bg-gray-900 transition-colors text-white cursor-pointer flex items-center"
      >
        <ChevronLeft className="size-7 me-1" />
        <Text type="md" color="text-white">Return to Menu</Text>
      </Link>
    </div>
  );
}
