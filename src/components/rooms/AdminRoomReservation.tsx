"use client";
import { useState, useEffect } from "react";
import { Input, Button, Text, Card, Select } from "@geist-ui/react";
import { RoomDTO, UserDTO } from "@/types/models";

export default function AdminRoomReservation() {
  const [query, setQuery] = useState("");
  const [rooms, setRooms] = useState<RoomDTO[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<RoomDTO | null>(null);
  const [error, setError] = useState("");
  const [users, setUsers] = useState<UserDTO[]>([]);
  const [userId, setUserId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [bedsFilter, setBedsFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [petFriendlyFilter, setPetFriendlyFilter] = useState("");
  const [reservedFilter, setReservedFilter] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setRooms([]);
    setSelectedRoom(null);
    setMessage("");
    const params = new URLSearchParams();
    if (query) params.append("q", query);
    if (bedsFilter) params.append("beds", bedsFilter);
    if (priceFilter) params.append("price", priceFilter);
    if (petFriendlyFilter) params.append("petFriendly", petFriendlyFilter);
    if (reservedFilter) params.append("reserved", reservedFilter);

    const res = await fetch(`/api/rooms?${params.toString()}`);
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setRooms(data);
      } else if (data && !Array.isArray(data)) {
        setRooms([data]);
      } else {
        setError("Nenhum quarto encontrado.");
      }
    } else {
      setError("Erro ao buscar quartos.");
    }
  }

  // Criar reserva
  async function handleReserve(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");
    if (!selectedRoom) {
      setMessage("Quarto não selecionado.");
      return;
    }
    const guest = users.find((u) => u.id === userId);

    const res = await fetch("/api/reservations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        roomId: selectedRoom.id,
        userId,
        checkIn,
        checkOut,
        guests,
        name: guest ? `${guest.firstName} ${guest.lastName}` : "",
        email: guest?.email || "",
        phone: guest?.phone || "",
      }),
    });

    if (res.ok) {
      setMessage("Reserva criada com sucesso!");
      setSelectedRoom(null);
      setRooms([]);
      setUserId("");
      setCheckIn("");
      setCheckOut("");
      setGuests(1);
    } else {
      setMessage("Erro ao criar reserva.");
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="flex flex-col gap-2 mb-4">
        <Input
          placeholder="ID ou descrição do quarto"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          width="100%"
          crossOrigin={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <Input
          placeholder="Camas"
          htmlType="number"
          value={bedsFilter}
          onChange={(e) => setBedsFilter(e.target.value)}
          width="100%"
          min={1}
          crossOrigin={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <Input
          placeholder="Preço"
          htmlType="number"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
          width="100%"
          min={1}
          crossOrigin={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        />
        <Select
          placeholder="Pet Friendly"
          value={petFriendlyFilter}
          onChange={(value) => {
            if (typeof value === "string") setPetFriendlyFilter(value);
          }}
          width="100%"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Select.Option value="">Qualquer</Select.Option>
          <Select.Option value="true">Sim</Select.Option>
          <Select.Option value="false">Não</Select.Option>
        </Select>
        <Select
          placeholder="Reservado"
          value={reservedFilter}
          onChange={(value) => {
            if (typeof value === "string") setReservedFilter(value);
          }}
          width="100%"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Select.Option value="">Qualquer</Select.Option>
          <Select.Option value="true">Sim</Select.Option>
          <Select.Option value="false">Não</Select.Option>
        </Select>
        <Button
          type="success"
          htmlType="submit"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Buscar
        </Button>
      </form>
      {error && <Text className="text-red-600">{error}</Text>}
      {message && <Text className="text-green-700 mb-2">{message}</Text>}

      {rooms.length > 0 && (
        <div className="flex flex-col gap-2 mb-4">
          <Text small className="mb-2">
            Selecione um quarto:
          </Text>
          {rooms.map((room) => (
            <Card
              key={room.id}
              className={`cursor-pointer ${selectedRoom?.id === room.id ? "!border-2 !border-amber-700" : ""}`}
              onClick={() => setSelectedRoom(room)}
              onPointerOverCapture={undefined}
              onPointerMoveCapture={undefined}
            >
              <Text h4>{room.description}</Text>
              <div>Camas: {room.beds}</div>
              <div>Preço: R$ {room.price}</div>
              <div>Reservado: {room.reserved ? "Sim" : "Não"}</div>
            </Card>
          ))}
        </div>
      )}

      {selectedRoom && (
        <Card className="mb-4">
          <Text h4>Reserva para: {selectedRoom.description}</Text>
          <form onSubmit={handleReserve} className="flex flex-col gap-2 mt-4">
            <label className="font-semibold">Hóspede</label>
            <Select
              placeholder="Selecione um hóspede"
              value={userId}
              onChange={(value) => {
                if (typeof value === "string") setUserId(value);
              }}
              width="100%"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {users
                .filter((u) => u.role !== "admin")
                .map((u) => (
                  <Select.Option key={u.id} value={u.id}>
                    {u.firstName} {u.lastName} ({u.email})
                  </Select.Option>
                ))}
            </Select>
            <label className="font-semibold">Check-in</label>
            <Input
              htmlType="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              width="100%"
              required
              crossOrigin={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <label className="font-semibold">Check-out</label>
            <Input
              htmlType="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              width="100%"
              required
              crossOrigin={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <label className="font-semibold">Hóspedes</label>
            <Input
              htmlType="number"
              value={String(guests)}
              onChange={(e) => setGuests(Number(e.target.value))}
              width="100%"
              min={1}
              required
              crossOrigin={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
            <Button
              type="success"
              htmlType="submit"
              className="mt-2"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Criar reserva
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
}
