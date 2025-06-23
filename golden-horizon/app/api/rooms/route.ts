import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET() {
  const rooms = await prisma.room.findMany();
  return NextResponse.json(rooms);
}

export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session || session.user.role !== "admin") {
    return NextResponse.json({ message: "Acesso negado" }, { status: 403 });
  }

  const {
    description,
    beds,
    breakfast,
    netflix,
    internet,
    suite,
    petFriendly,
    price,
    promoPrice,
    reserved,
  } = await req.json();

  try {
    await prisma.room.create({
      data: {
        description,
        beds: Number(beds),
        breakfast: Boolean(breakfast),
        netflix: Boolean(netflix),
        internet: Boolean(internet),
        suite: Boolean(suite),
        petFriendly: Boolean(petFriendly),
        price: Number(price),
        promoPrice:
          promoPrice === null || promoPrice === "" ? null : Number(promoPrice),
        reserved: Boolean(reserved),
        createdAt: new Date(),
      },
    });
    return NextResponse.json(
      { message: "Quarto criado com sucesso!" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao criar quarto." },
      { status: 500 },
    );
  }
}
