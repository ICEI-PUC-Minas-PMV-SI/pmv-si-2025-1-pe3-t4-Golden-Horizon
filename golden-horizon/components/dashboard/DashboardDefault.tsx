import { Text } from "@geist-ui/react";
import React from "react";

function DashboardDefault({ userName }: { userName: string }) {
  return (
    <div>
      <Text h2>Bem-vindo, {userName}!</Text>

      <Text>Aqui você pode ver suas reservas e informações pessoais.</Text>
    </div>
  );
}

export default DashboardDefault;
