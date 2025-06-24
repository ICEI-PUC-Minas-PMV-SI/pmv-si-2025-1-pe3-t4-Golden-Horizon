import { Text, Card } from "@geist-ui/react";
import React from "react";

function DashboardDefault({ userName }: { userName: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <Card shadow width="100%" className="max-w-xl p-8">
        <Text h2 className="text-center mb-2">
          Bem-vindo, <span className="text-amber-700">{userName}</span>!
        </Text>
        <Text className="text-center mb-6">
          Aqui você pode visualizar suas reservas, editar seus dados pessoais e
          explorar os serviços do hotel.
        </Text>
        <ul className="list-disc pl-6 text-gray-700 mb-2">
          <li>Veja suas reservas ativas e passadas</li>
          <li>Atualize suas informações de contato</li>
          <li>Solicite novos serviços ou reservas</li>
        </ul>
        <Text small className="text-center text-gray-500 mt-4">
          Use o menu acima para navegar entre as opções do seu painel.
        </Text>
      </Card>
    </div>
  );
}

export default DashboardDefault;
