import type { Metadata } from "next";
import "../globals.css";

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
      <body>{children}</body>
    </html>
  );
}
