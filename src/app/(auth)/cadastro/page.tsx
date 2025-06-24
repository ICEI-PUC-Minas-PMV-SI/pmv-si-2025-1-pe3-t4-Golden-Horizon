import DancingScript from "@/components/dancingScript/DancingScript";
import React from "react";
import FormCard from "@/components/formCard/FormCard";
import RegisterForm from "./RegisterForm";

export default function Cadastro() {
  return (
    <main className="h-[calc(100vh-96px)] flex justify-center items-center !m-5 !p-5">
      <FormCard>
        <h2 className="!text-center">
          <DancingScript text="Golden Horizon" />
        </h2>

        <RegisterForm />
      </FormCard>
    </main>
  );
}
