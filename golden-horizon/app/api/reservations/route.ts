import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.log("Payload recebido:", data);

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
    console.error("Erro ao criar reserva:", err);
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

  try {
    // Reservas ativas: checkOut >= agora
    const now = new Date();
    const reservations = await prisma.reservation.findMany({
      where: {
        checkOut: { gte: now },
      },
      orderBy: { checkIn: "desc" },
      include: {
        room: {
          select: { description: true },
        },
      },
    });

    // Formata o retorno
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
