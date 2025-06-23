import { Text, Button } from "@geist-ui/react";
import { useState } from "react";
import NewRoomForm from "@/components/newRoomForm/NewRoomForm";
import ReservationsTable from "../reservationTable/ReservationsTable";
import AdminRoomReservation from "../rooms/AdminRoomReservation";

export default function DashboardAdmin({ userName }: { userName: string }) {
  const [activeSection, setActiveSection] = useState<
    "addRoom" | "reservations" | "searchRoom" | "guests" | null
  >(null);

  const baseBtn =
    "!bg-white !text-[#7C6A46] !border-[#7C6A46] !border !shadow-sm !rounded-lg font-semibold transition-all duration-150 hover:!bg-[#f8f8f8] hover:!text-amber-700 focus:!ring-2 focus:!ring-amber-700";

  const activeBtn =
    "!bg-amber-100 !text-[#7C6A46] !border-2 !border-[#7C6A46] !shadow";

  return (
    <div className="flex flex-col items-center justify-start min-h-[80vh] bg-[#f8f8f8] py-10">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg p-8">
        <Text h2 className="mb-2 text-center">
          Bem-vindo, {userName}!
        </Text>
        <Text className="mb-8 text-center text-gray-600">
          O que deseja gerenciar?
        </Text>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Button
            className={`${baseBtn} ${activeSection === "addRoom" ? activeBtn : ""}`}
            type="default"
            onClick={() => setActiveSection("addRoom")}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            auto
          >
            Adicionar quarto
          </Button>
          <Button
            className={`${baseBtn} ${activeSection === "reservations" ? activeBtn : ""}`}
            type="default"
            onClick={() => setActiveSection("reservations")}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            auto
          >
            Reservas ativas
          </Button>
          <Button
            className={`${baseBtn} ${activeSection === "searchRoom" ? activeBtn : ""}`}
            type="default"
            onClick={() => setActiveSection("searchRoom")}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            auto
          >
            Consultar quarto
          </Button>
          <Button
            className={`${baseBtn} ${activeSection === "guests" ? activeBtn : ""}`}
            type="default"
            onClick={() => setActiveSection("guests")}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            auto
          >
            Gerenciar hóspedes
          </Button>
        </div>

        {activeSection === "addRoom" && <NewRoomForm />}
        {activeSection === "reservations" && <ReservationsTable />}
        {activeSection === "searchRoom" && (
          <div className="text-center text-gray-500">
            <AdminRoomReservation />
          </div>
        )}
        {activeSection === "guests" && (
          <div className="text-center text-gray-500">
            [Gestão de hóspedes aqui]
          </div>
        )}
      </div>
    </div>
  );
}
