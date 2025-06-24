import { auth } from "@/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await auth();

  const publicPaths = [
    "/",
    "/login",
    "/cadastro",
    "/eventos",
    "/quartos",
    "/contato",
  ];

  if (
    session?.user &&
    ["/login", "/cadastro"].includes(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (
    request.nextUrl.pathname === "/" ||
    publicPaths
      .filter((p) => p !== "/")
      .some((path) => request.nextUrl.pathname.startsWith(path))
  ) {
    return NextResponse.next();
  }

  if (!session?.user) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|assets|.*\\..*).*)"],
};
