import { NextResponse } from "next/server";
import { prisma } from "../../../lib/db";

export async function GET() {
  const charactes = await prisma.toon.findMany();
  return NextResponse.json(charactes);
}
