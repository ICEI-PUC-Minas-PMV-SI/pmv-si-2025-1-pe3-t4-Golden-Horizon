import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const reservation = await prisma.reservation.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        checkIn: new Date(data.checkIn),
        checkOut: new Date(data.checkOut),
        guests: data.guests,
        roomId: data.roomId,
        userId: data.userId ?? null, // if available
      },
    });

    return NextResponse.json({ success: true, reservation }, { status: 201 });
  } catch (err) {
    console.error("API reservation error:", err);
    return NextResponse.json(
      { error: "Failed to create reservation" },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!session || session.user.role !== "admin") {
    return NextResponse.json([], { status: 403 });
  }

  // Exemplo: considera reservas ativas as que ainda não passaram do check-out
  const now = new Date();
  const reservations = await prisma.reservation.findMany({
    where: {
      checkOut: { gte: now },
    },
    include: { room: true },
  });

  return NextResponse.json(reservations);
}
