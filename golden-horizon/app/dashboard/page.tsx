"use client";
import DashboardAdmin from "@/components/dashboard/DashboardAdmin";
import DashboardDefault from "@/components/dashboard/DashboardDefault";
import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Carregando...</p>;
  if (!session) return <p>Você precisa estar logado.</p>;

  const DashboardContent =
    session.user.role === "admin" ? DashboardAdmin : DashboardDefault;

  console.log("AAAAAA", session.user);
  const userName = session.user?.firstName || "usuário";

  return (
    <main>
      <DashboardContent userName={userName} />
    </main>
  );
}
