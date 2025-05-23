"use client";
import { Button } from "@geist-ui/react";

export default function LoginBtn() {
  return (
    <Button
      type="secondary"
      auto
      scale={1.2}
      className="!bg-[#7C6A46] !text-white !font-bold hover:!bg-amber-700 !border-none"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Entrar / Registrar
    </Button>
  );
}
