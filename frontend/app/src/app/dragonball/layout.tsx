import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dragon Ball",
  description: "Guess the Dragon Ball Character",
};

export default function DragonBallLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
