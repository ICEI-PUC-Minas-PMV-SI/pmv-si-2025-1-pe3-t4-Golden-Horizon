import { auth } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Painel!</h1>
      <p>
        Olá,{" "}
        <span className="font-semibold">
          {session?.user?.name || session?.user?.email}
        </span>
        !
      </p>
      <p className="mt-2">Esta é a sua área inicial após o login.</p>
    </main>
  );
}
