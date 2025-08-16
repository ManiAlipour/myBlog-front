import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db/connect";
import User from "@/lib/db/models/User";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) return NextResponse.json({ exists: false });

  await dbConnect();
  const user = await User.findOne({ email });
  return NextResponse.json({ exists: !!user });
}
