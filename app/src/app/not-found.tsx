"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  });
  
  return null;
}
