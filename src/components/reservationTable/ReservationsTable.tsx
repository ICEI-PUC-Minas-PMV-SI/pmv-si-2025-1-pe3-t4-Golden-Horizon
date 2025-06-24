"use client";

import { useEffect, useState } from "react";

type Reservation = {
  id: string;
  guestName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomDescription: string;
  userId: string | null;
};

export default function ReservationsTable() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch("/api/reservations")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch reservations");
        return res.json();
      })
      .then((data: Reservation[]) => {
        setReservations(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando reservas...</p>;
  if (error) return <p className="text-red-500">Erro: {error}</p>;
  if (reservations.length === 0) return <p>Nenhuma reserva encontrada.</p>;

  return (
    <div>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Nome</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Email
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Telefone
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Check-in
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Check-out
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Hóspedes
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Quarto
            </th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res) => (
            <tr key={res.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                {res.guestName}
              </td>
              <td className="border border-gray-300 px-4 py-2">{res.email}</td>
              <td className="border border-gray-300 px-4 py-2">{res.phone}</td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(res.checkIn).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(res.checkOut).toLocaleDateString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">{res.guests}</td>
              <td className="border border-gray-300 px-4 py-2">
                {res.roomDescription}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
