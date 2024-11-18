import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { name, description, price, images } = await request.json();
  await connectMongoDB();
  await Item.create({ name, description, price, images });
  return NextResponse.json({ message: "Item created." }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const items = await Item.find();
  return NextResponse.json(items);
}
