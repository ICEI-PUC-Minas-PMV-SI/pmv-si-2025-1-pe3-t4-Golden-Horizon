import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { auth } from "@/auth";

export async function GET(req: NextRequest) {
  const session = await auth();
  const { searchParams } = new URL(req.url);

  // Filtros
  const q = searchParams.get("q");
  const beds = searchParams.get("beds");
  const price = searchParams.get("price");
  const petFriendly = searchParams.get("petFriendly");
  const reserved = searchParams.get("reserved");

  // Se houver algum filtro, exige admin
  if (q || beds || price || petFriendly || reserved) {
    if (!session || session.user.role !== "admin") {
      return NextResponse.json({ message: "Acesso negado" }, { status: 403 });
    }

    const where = {
      ...(q && {
        OR: [{ id: q }, { description: { contains: q, mode: "insensitive" } }],
      }),
      ...(beds && !isNaN(Number(beds)) && { beds: Number(beds) }),
      ...(price && !isNaN(Number(price)) && { price: Number(price) }),
      ...(petFriendly && { petFriendly: petFriendly === "true" }),
      ...(reserved && { reserved: reserved === "true" }),
    };

    try {
      const rooms = await prisma.room.findMany({ where });
      return NextResponse.json(rooms);
    } catch (error) {
      return NextResponse.json(
        { message: "Erro ao buscar quartos." },
        { status: 500 },
      );
    }
  }

  // Busca geral (pública)
  try {
    const rooms = await prisma.room.findMany();
    return NextResponse.json(rooms);
  } catch (error) {
    return NextResponse.json(
      { message: "Erro ao buscar quartos." },
      { status: 500 },
    );
  }
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
