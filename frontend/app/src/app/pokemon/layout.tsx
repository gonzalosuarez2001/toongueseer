import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokémon",
  description: "Guess the Pokemon Character",
};

export default function PokemonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
