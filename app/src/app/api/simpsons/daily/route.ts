import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/db";

export async function GET() {
  const res = await prisma.stats.findFirst({
    where: { cartoon_id: 1 },
  });

  if (res) {
    return NextResponse.json(res.daily_toon);
  } else {
    return NextResponse.json(
      { message: "Not Found" },
      { status: 404 }
    );
  }
}
