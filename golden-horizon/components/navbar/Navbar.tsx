"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@geist-ui/react";
import logo from "@/public/assets/images/logo.jpg";

export default function Navbar() {
  return (
    <nav className="bg-[#7C6A46] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="Golden Horizon Hotel"
                width={40}
                height={40}
                className="rounded-full object-cover aspect-square"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            <NavLink href="/">Início</NavLink>
            <NavLink href="/eventos">Eventos</NavLink>
            <NavLink href="/quartos">Quartos</NavLink>
            <NavLink href="/promocoes">Promoções</NavLink>
            <NavLink href="/contato">Contato</NavLink>
          </div>

          <div className="flex items-center">
            <Button
              type="secondary"
              auto
              scale={0.9}
              className="!bg-amber-600 !text-white hover:!bg-amber-700"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Entrar / Registrar
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="text-white hover:text-amber-200 transition-colors font-medium text-sm"
    >
      {children}
    </Link>
  );
}
