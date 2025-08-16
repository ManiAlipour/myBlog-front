import { z } from "zod";
import { NextResponse } from "next/server";
import { signToken } from "@/lib/jwt";
import { verifyPassword } from "@/lib/password";
import { dbConnect } from "@/lib/db/connect";
import User from "@/lib/db/models/User";

const userSchema = z.object({
  email: z.email("Email not valid"),
  password: z
    .string()
    .min(8, "Password must be between 8 and 20 characters.")
    .max(20, "Password must be between 8 and 20 characters."),
});

export async function POST(request: Request) {
  try {
    await dbConnect();

    const body = await request.json();
    const data = userSchema.parse(body);

    const user = await User.findOne({ email: data.email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const verifiedPassword = await verifyPassword(data.password, user.password);
    if (!verifiedPassword) {
      return NextResponse.json(
        { message: "Password or email is not valid" },
        { status: 401 }
      );
    }

    const token = signToken({
      id: user._id.toString(),
      role: user.role,
      email: user.email,
    });

    return NextResponse.json({
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
