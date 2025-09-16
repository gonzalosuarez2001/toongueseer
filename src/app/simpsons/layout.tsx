import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simpsons",
  description: "Guess the Simpsons character",
};

export default function SimpsonsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
