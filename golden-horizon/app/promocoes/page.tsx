"use client";
/* eslint-disable @next/next/no-img-element */
import { Room } from "@/interfaces/room";
import { getRandomRoomImage } from "@/utils/room.utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card } from "rsuite";

export default function PromocoesPage() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const guests = searchParams.get("guests");

  useEffect(() => {
    fetch("/api/rooms")
      .then((res) => res.json())
      .then((data: Room[]) => {
        // Filter only rooms with promoPrice
        const promoRooms = data.filter(
          (room) => room.promoPrice !== null && room.promoPrice !== undefined,
        );

        const roomsWithImages = promoRooms.map((room) => ({
          ...room,
          imageUrl: getRandomRoomImage(),
        }));
        setRooms(roomsWithImages);
      });
  }, []);

  const handleCardClick = (roomId: string) => {
    const params = new URLSearchParams();
    params.set("roomId", roomId);

    if (checkIn) params.set("checkIn", checkIn);
    if (checkOut) params.set("checkOut", checkOut);
    if (guests) params.set("guests", guests);

    router.push(`/reservas?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center p-10">
      {rooms.map((room: Room, index) => (
        <Card
          key={index}
          style={{
            width: 320,
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
          className="hover:shadow-lg hover:scale-[1.02] hover:cursor-pointer"
          shaded
          onClick={() => handleCardClick(room.id)}
        >
          <img
            src={room.imageUrl}
            alt={room.description}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderTopLeftRadius: 6,
              borderTopRightRadius: 6,
            }}
          />
          <Card.Header className="mx-3">
            <h5>{room.description}</h5>
          </Card.Header>
          <Card.Body className="space-y-1 mx-3">
            <p className="text-sm">
              <strong>Camas:</strong> {room.beds}
            </p>
            <p className="text-sm">
              <strong>Preço Promoção:</strong>{" "}
              <span className="text-green-600 font-semibold">
                R$ {room.promoPrice!.toFixed(2)}
              </span>
            </p>
            <p className="text-sm">Internet: {room.internet ? "Sim" : "Não"}</p>
            <p className="text-sm">Netflix: {room.netflix ? "Sim" : "Não"}</p>
            <p className="text-sm">
              Pet Friendly: {room.petFriendly ? "Sim" : "Não"}
            </p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
