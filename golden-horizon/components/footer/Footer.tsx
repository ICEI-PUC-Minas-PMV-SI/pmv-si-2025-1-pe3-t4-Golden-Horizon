"use client";
import Link from "next/link";
import Image from "next/image";
import { Input, Button } from "@geist-ui/react";
import logo from "@/public/assets/images/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#7C6A46] text-white border-t">
      <div className="container grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-5">
        <div className="flex items-start">
          <Image
            src={logo}
            alt="Company Logo"
            width={180}
            height={180}
            className="rounded-full object-cover aspect-square ml-10 shadow-md"
            quality={85}
            priority={true}
          />
        </div>

        <div className="col-span-3 grid grid-cols-3">
          <div>
            <h5 className="mb-4 text-sm font-medium">Quick links</h5>
            <ul className="text-sm space-y-2">
              <FooterLink href="/about">Room booking</FooterLink>
              <FooterLink href="/services">Roomd</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/portfolio">Explore</FooterLink>
            </ul>
          </div>
          <div>
            <h5 className="mb-4 text-sm font-medium">Company</h5>
            <ul className="text-sm space-y-2">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/careers">Refund policy</FooterLink>
              <FooterLink href="/blog">F.A.Q</FooterLink>
              <FooterLink href="/terms">About</FooterLink>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-medium">Social media</h5>
            <ul className="text-sm space-y-2">
              <FooterLink href="https://facebook.com">Facebook</FooterLink>
              <FooterLink href="https://twitter.com">Twitter</FooterLink>
              <FooterLink href="https://instagram.com">Instagram</FooterLink>
              <FooterLink href="https://linkedin.com">LinkedIn</FooterLink>
            </ul>
          </div>
        </div>

        {/* provisorio, mover para componente proprio pq esta obrigando todo o footer a ser clientside */}
        <div>
          <h3 className="mb-4 text-xs font-medium tracking-wider text-neutral-200 uppercase">
            Newsletter
          </h3>
          <div className="flex flex-col space-y-2">
            <Input placeholder="Your email" scale={0.8} width="100%" />
            <Button type="secondary" auto scale={0.8} className="w-full">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t py-6 text-center text-sm text-neutral-200">
        © {new Date().getFullYear()} Golden Horizon Hotel. All rights reserved.
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="list-none">
      <Link
        href={href}
        className="text-white hover:text-amber-100 transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
