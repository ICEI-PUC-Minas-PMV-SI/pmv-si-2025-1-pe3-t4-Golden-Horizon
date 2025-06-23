import { Text } from "@geist-ui/react";
import React from "react";

function DashboardAdmin({ userName }: { userName: string }) {
  return (
    <div>
      <Text h2>Bem-vindo, {userName}!</Text>

      <Text>Você pode gerenciar reservas e mensagens de contato.</Text>
    </div>
  );
}

export default DashboardAdmin;
