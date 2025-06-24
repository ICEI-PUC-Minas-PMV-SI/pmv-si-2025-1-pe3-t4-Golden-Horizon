"use client";
import { MapPin, Home, User, Calendar } from "@geist-ui/icons";
import { Button, Select } from "@geist-ui/react";
import { useRouter } from "next/navigation";
import { DatePicker } from "rsuite";
import { useState } from "react";
import "rsuite/dist/rsuite-no-reset.min.css";

export default function ReserveRibbon({
  className = "",
}: {
  className?: string;
}) {
  const router = useRouter();

  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState<number | null>(null);

  const handleReserveClick = () => {
    if (!checkIn || !checkOut || !guests) return;

    const params = new URLSearchParams();
    params.set("checkIn", checkIn.toISOString());
    params.set("checkOut", checkOut.toISOString());
    params.set("guests", guests.toString());

    router.push(`/quartos?${params.toString()}`);
  };

  const isValid =
    checkIn !== null &&
    checkOut !== null &&
    guests !== null &&
    checkIn < checkOut;

  return (
    <>
      <div
        className={`${className} flex items-center w-full gap-6 bg-white p-4 justify-between`}
      >
        <div className="flex items-center gap-2">
          <MapPin />
          <div className="flex flex-col">
            <p className="font-bold !m-0">Localização</p>
            <span className="text-[rgba(28,28,28,0.6)]">Contagem/MG</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Home />
          <div className="flex flex-col">
            <p className="font-bold !m-0">Quarto</p>
            <Select
              placeholder="Escolha um"
              width="100px"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <Select.Option value="1">Solteiro</Select.Option>
              <Select.Option value="2">Casado</Select.Option>
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <User />
          <div className="flex flex-col">
            <p className="font-bold !m-0">Pessoas</p>
            <Select
              placeholder="Escolha"
              width="100px"
              onChange={(val) => {
                const num = parseInt(val as string);
                if (!isNaN(num)) setGuests(num);
              }}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <Select.Option key={i} value={`${i + 1}`}>
                  {i + 1}
                </Select.Option>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Calendar />
          <div className="flex flex-col">
            <p className="font-bold !m-0">Check-in</p>
            <DatePicker
              appearance="subtle"
              style={{ width: 150 }}
              value={checkIn}
              onChange={(val) => setCheckIn(val ?? null)}
              placeholder="Selecionar"
              oneTap
              shouldDisableDate={(date) => (checkOut ? date > checkOut : false)}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Calendar />
          <div className="flex flex-col">
            <p className="font-bold !m-0">Check-out</p>
            <DatePicker
              appearance="subtle"
              style={{ width: 150 }}
              value={checkOut}
              onChange={(val) => setCheckOut(val ?? null)}
              placeholder="Selecionar"
              oneTap
              shouldDisableDate={(date) => (checkIn ? date < checkIn : false)}
            />
          </div>
        </div>

        <Button
          className="!bg-[#7C6A46] !text-white !font-bold hover:!bg-amber-700 !border-none px-6"
          onClick={handleReserveClick}
          disabled={!isValid}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Reservar
        </Button>
      </div>

      <style jsx global>{`
        .rs-picker-caret-icon {
          display: none !important;
        }
      `}</style>
    </>
  );
}
