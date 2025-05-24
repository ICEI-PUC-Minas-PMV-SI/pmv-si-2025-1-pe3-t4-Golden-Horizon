"use client";
import { MapPin, Home, User, Calendar } from "@geist-ui/icons";
import { Button, Select } from "@geist-ui/react";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite-no-reset.min.css";

export default function ReserveRibbon({
  className = "",
}: {
  className?: string;
}) {
  const handlerRoom = (val: string | string[]) => console.log(val);
  const handlerPerson = (val: string | string[]) => console.log(val);

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
              onChange={handlerRoom}
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
              onChange={handlerPerson}
              width="100px"
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
            <DatePicker appearance="subtle" style={{ width: 150 }} />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Calendar />
          <div className="flex flex-col">
            <p className="font-bold !m-0">Check-out</p>
            <DatePicker appearance="subtle" style={{ width: 150 }} />
          </div>
        </div>
        <Button
          className="!bg-[#7C6A46] !text-white !font-bold hover:!bg-amber-700 !border-none !rounded-full px-6"
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
