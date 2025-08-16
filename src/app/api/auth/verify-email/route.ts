import { z } from "zod";
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/db/connect";
import User from "@/lib/db/models/User";

const verifyEmailSchema = z.object({
  verificationCode: z
    .string()
    .length(6, "Verification code must be 6 characters"),
  email: z.email("Invalid email format"),
});

export async function POST(request: Request) {
  try {
    await dbConnect();

    const req = await request.json();
    const body = verifyEmailSchema.parse(req);

    const user = await User.findOne({ email: body.email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (
      user.verificationCode !== body.verificationCode ||
      !user.verificationCodeExpires ||
      user.verificationCodeExpires < new Date()
    ) {
      return NextResponse.json(
        { message: "Invalid or expired verification code" },
        { status: 400 }
      );
    }

    user.isEmailVerified = true;
    user.verificationCode = undefined;
    user.verificationCodeExpires = undefined;
    await user.save();

    return NextResponse.json(
      { message: "Email verified successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Validation error",
          errors: error.message, // برای نمایش فیلدهای خطادار
        },
        { status: 422 }
      );
    }

    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
