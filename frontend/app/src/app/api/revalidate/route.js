import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import cartoonConfig from "../../../cartoonConfig";

export async function GET() {
  try {
    Object.keys(cartoonConfig).forEach((cartoon) => {
      revalidatePath(`/${cartoon}`);
    });

    return NextResponse.json({ revalidated: true });
  } catch (error) {
    return NextResponse.json({ revalidated: false, error: error });
  }
}
