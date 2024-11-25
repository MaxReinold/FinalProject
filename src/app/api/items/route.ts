import { auth } from "@/auth";
import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";

export const POST = auth(async function POST(request) {
  if (!request.auth)
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

  const { name, description, price, picture } = await request.json();
  await connectMongoDB();
  await Item.create({ name, description, price, picture });
  return NextResponse.json({ message: "Item created." }, { status: 201 });
});

export async function GET() {
  await connectMongoDB();
  const items = await Item.find();
  return NextResponse.json(items);
}
