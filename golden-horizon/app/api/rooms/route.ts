import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const rooms = await prisma.room.findMany();
  return NextResponse.json(rooms);
}
