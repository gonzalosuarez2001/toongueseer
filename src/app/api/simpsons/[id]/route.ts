import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/db";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const toon = await prisma.toon.findUnique({
    where: { id: Number(params.id) },
  });

  if (!toon) {
    return NextResponse.json({ error: "Toon not found" }, { status: 404 });
  }

  return NextResponse.json(toon);
}
