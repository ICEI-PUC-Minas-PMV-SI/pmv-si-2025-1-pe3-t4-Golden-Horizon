"use client";
import { Button } from "@geist-ui/react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function LoginBtn() {
  const { data: session, status } = useSession();
  console.log("SSSSSSESSION:", session, status);

  if (status === "loading") return null;

  if (session?.user) {
    return (
      <div className="flex items-center space-x-4">
        <Button
          className="btn"
          onClick={() => {
            window.location.href = "/minha-conta";
          }}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Minha Conta
        </Button>

        <Link
          href="/"
          className="btn"
          onClick={async (e) => {
            e.preventDefault();
            await signOut({ callbackUrl: "/" });
          }}
        >
          Sair
        </Link>
      </div>
    );
  }

  return (
    <Button
      auto
      scale={1.2}
      className="!bg-[#7C6A46] !text-white !font-bold hover:!bg-amber-700 !border-none"
      onClick={() => {
        window.location.href = "/login";
      }}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      Entrar / Registrar
    </Button>
  );
}
