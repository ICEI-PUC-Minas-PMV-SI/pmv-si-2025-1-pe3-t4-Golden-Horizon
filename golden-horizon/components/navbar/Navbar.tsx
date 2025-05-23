import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/images/logo.jpg";
import LoginBtn from "@/components/login/LoginBtn";

export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="Golden Horizon Hotel"
                width={60}
                height={60}
                className="rounded-full object-cover aspect-square shadow-lg"
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
            <LoginBtn />
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
      className="!text-black hover:!text-[#7C6A46] transition-colors font-bold text-sm"
    >
      {children}
    </Link>
  );
}
