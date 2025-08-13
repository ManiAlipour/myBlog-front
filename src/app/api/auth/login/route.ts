import { jwt, z } from "zod";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { signToken } from "@/lib/jwt";
import { verifyPassword } from "@/lib/password";

const userSchema = z.object({
  email: z.email("Email not valid"),
  password: z
    .string()
    .min(8, "Password must be between 8 and 20 characters.")
    .max(20, "Password must be between 4 and 20 characters."),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const data = userSchema.parse(body);

    const user = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user)
      return NextResponse.json({ message: "User not found" }, { status: 404 });

    const verifiedPassword = await verifyPassword(data.password, user.password);

    if (!verifiedPassword)
      return NextResponse.json(
        { message: "password or email is not valid" },
        { status: 500 }
      );

    const token = signToken({
      id: user.id,
      role: user.role,
      email: user.email,
    });

    return NextResponse.json({ message: "User logged in Success", token });
  } catch (error) {
    return NextResponse.json(
      { message: "Server internal error" },
      { status: 500 }
    );
  }
}
