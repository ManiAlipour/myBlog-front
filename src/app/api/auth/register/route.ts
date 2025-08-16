import { dbConnect } from "@/lib/db/connect";
import { hashPassword } from "@/lib/password";
import { z } from "zod";
import User from "@/lib/db/models/User";
import {
  generateVerificationCode,
  sendVerificationEmail,
} from "@/utils/sendVerificationEmail";
import { NextResponse } from "next/server";

const userSchema = z.object({
  name: z.string().min(3).max(15),
  email: z.email(),
  password: z.string().min(8).max(20),
  locale: z.enum(["fa", "en"]),
});

export async function POST(request: Request) {
  try {
    await dbConnect();
    const req = await request.json();

    const body = userSchema.parse(req);

    const user = await User.findOne({ email: body.email });

    if (user)
      return NextResponse.json(
        { message: "User already registred" },
        { status: 409 }
      );

    const verificationCode = generateVerificationCode();

    await sendVerificationEmail({
      to: body.email,
      locale: body.locale,
      code: verificationCode,
    });

    const password = await hashPassword(body.password);

    const VERIFICATION_CODE_EXPIRE_MS = 5 * 60 * 1000;
    const verificationCodeExpires = new Date(
      Date.now() + VERIFICATION_CODE_EXPIRE_MS
    );
    const newUser = new User({
      password,
      email: body.email,
      name: body.name,
      verificationCode,
      verificationCodeExpires,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: "User Added and send verification code success",
      data: {
        id: newUser._id,
        email: newUser.email,
        name: newUser.name,
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Server internal error" },
      { status: 500 }
    );
  }
}
