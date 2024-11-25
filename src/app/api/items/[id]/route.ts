import connectMongoDB from "@/libs/mongodb";
import Item from "@/models/itemSchema";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import mongoose from "mongoose";
import { auth } from "@/auth";

interface RouteParams {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  await connectMongoDB();
  const item = await Item.findOne({ _id: id });
  return NextResponse.json({ item }, { status: 200 });
}

export const PUT = auth(async function PUT(request, context) {
  if (!request.auth)
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

  const ctx = await (context as RouteParams).params;
  const { id } = ctx;
  const { name, description, price, picture } = await request.json();
  await connectMongoDB();
  await Item.findByIdAndUpdate(id, { name, description, price, picture });
  return NextResponse.json({ message: "Item updated." }, { status: 200 });
});

export const DELETE = auth(async function DELETE(request, context) {
  if (!request.auth)
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

  const ctx = await (context as RouteParams).params;
  const { id } = ctx;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid ID." }, { status: 400 });
  }

  await connectMongoDB();
  const deletedItem = await Item.findByIdAndDelete(id);

  if (!deletedItem) {
    return NextResponse.json({ message: "Item not found." }, { status: 404 });
  }

  return NextResponse.json({ message: "Item deleted." }, { status: 200 });
});
