"use client";
import DancingScript from "@/components/dancingScript/DancingScript";
import { Button, Text } from "@geist-ui/react";
import Form from "next/form";
import React from "react";
import registerAction from "./registerAction";
import FormInput from "@/components/formInput/FormInput";
import FormCard from "@/components/formCard/FormCard";

export default function Login() {
  return (
    <main className="h-[calc(100vh-96px)] flex justify-center items-center !m-5">
      <FormCard>
        <h2 className="!text-center">
          <DancingScript text="Golden Horizon" />
        </h2>

        <Form
          action={async (data) => {
            await registerAction(data);
          }}
        >
          <FormInput label="Primeiro nome" name="firstName" />

          <FormInput label="Último nome" name="lastName" />

          <FormInput
            label="Endereço de email"
            name="email"
            type="email"
            placeholder="Insira seu email"
          />

          <FormInput
            label="Senha"
            name="password"
            type="password"
            placeholder="Insira sua senha"
          />

          <FormInput
            label="Senha"
            name="confirmPassword"
            type="password"
            placeholder="Insira sua senha"
          />

          <FormInput label="Telefone" name="phone" type="tel" />

          <Button
            auto
            htmlType="submit"
            className="!bg-[#A9B388] !border-none !text-white hover:!bg-[#7C6A46]"
          >
            <Text b font="15px">
              Cadastrar
            </Text>
          </Button>
        </Form>
      </FormCard>
    </main>
  );
}
