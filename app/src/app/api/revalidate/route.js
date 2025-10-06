import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET() {
  try {
    revalidatePath("/simpsons");
    return NextResponse.json({ revalidated: true });
  } catch (error) {
    return NextResponse.json({ revalidated: false, error: error });
  }
}
