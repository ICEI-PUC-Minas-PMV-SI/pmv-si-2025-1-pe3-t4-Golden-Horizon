import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

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
        userId: data.userId ?? null,
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

export async function GET() {
  try {
    const reservations = await prisma.reservation.findMany({
      orderBy: { checkIn: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        checkIn: true,
        checkOut: true,
        guests: true,
        room: {
          select: {
            description: true,
          },
        },
        userId: true,
      },
    });

    const formatted = reservations.map((r) => ({
      id: r.id,
      guestName: r.name,
      email: r.email,
      phone: r.phone,
      checkIn: r.checkIn.toISOString(),
      checkOut: r.checkOut.toISOString(),
      guests: r.guests,
      roomDescription: r.room?.description ?? "N/A",
      userId: r.userId,
    }));

    return NextResponse.json(formatted);
  } catch (err) {
    console.error("API GET reservations error:", err);
    return NextResponse.json(
      { error: "Failed to fetch reservations" },
      { status: 500 },
    );
  }
}
