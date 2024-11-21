import connectMongoDB from "@/libs/mongodb";
import User from "@/models/userSchema";
import { hash } from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { username, email, password } = await request.json();
  await connectMongoDB();
  const hashedPassword = await hash(password, 5);
  await User.create({ username, email, password: hashedPassword });
  return NextResponse.json({ message: "User registered." }, { status: 201 });
}
