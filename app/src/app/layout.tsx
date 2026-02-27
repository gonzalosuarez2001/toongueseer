import type { Metadata } from "next";
import "../globals.css";
import StoreProvider from "@/store/StoreProvider";

export const metadata: Metadata = {
  title: {
    template: "Toon Guesser | %s",
    default: "Toon Guesser",
  },
  description: "Guess the cartoon with a pixel image",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><StoreProvider>{children}</StoreProvider></body>
    </html>
  );
}
