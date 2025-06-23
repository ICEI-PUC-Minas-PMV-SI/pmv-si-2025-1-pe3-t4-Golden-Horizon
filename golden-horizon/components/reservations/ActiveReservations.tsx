"use client";
import { useEffect, useState } from "react";
import { Text, Card, Button, Spinner } from "@geist-ui/react";

type Reservation = {
  id: string;
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  room: { description: string };
};

export default function ActiveReservations() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/reservations?status=active")
      .then((res) => res.json())
      .then((data) => {
        setReservations(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );

  if (reservations.length === 0)
    return (
      <Text className="text-center text-gray-500">Nenhuma reserva ativa.</Text>
    );

  return (
    <div className="flex flex-col gap-4">
      {reservations.map((r) => (
        <Card key={r.id} className="!p-4">
          <Text h4 className="mb-1">
            {r.name} ({r.email})
          </Text>
          <div className="text-sm text-gray-600 mb-2">
            Quarto: <b>{r.room.description}</b> <br />
            Check-in: {new Date(r.checkIn).toLocaleDateString()} <br />
            Check-out: {new Date(r.checkOut).toLocaleDateString()} <br />
            Hóspedes: {r.guests}
          </div>
          {/* Aqui você pode adicionar botões para cancelar, editar, etc */}
        </Card>
      ))}
    </div>
  );
}
