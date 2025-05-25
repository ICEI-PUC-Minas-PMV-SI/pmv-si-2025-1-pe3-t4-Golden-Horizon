"use client";
import DancingScript from "@/components/dancingScript/DancingScript";
import { Button, Card, Checkbox, Input, Text } from "@geist-ui/react";
import Link from "next/link";
import React from "react";

export default function Login() {
  const inputLabel = ({
    label,
    id,
    placeholder,
  }: {
    label: string;
    id: string;
    placeholder: string;
  }) => {
    return (
      <label htmlFor={id}>
        <Text font="15px" className="my-1">
          {label}
        </Text>

        <Input placeholder={placeholder} width="100%" id={id} scale={4 / 3} />
      </label>
    );
  };

  return (
    <main className="h-[calc(100vh-96px)] flex justify-center items-center !m-5">
      <Card className="!w-[570px]">
        <Card.Content className="flex flex-col !w-full !p-[32px]">
          <h2 className="!text-center">
            <DancingScript text="Golden Horizon" />
          </h2>

          {inputLabel({
            label: "Endereço de email",
            id: "email",
            placeholder: "Insira seu email",
          })}

          {inputLabel({
            label: "Senha",
            id: "password",
            placeholder: "Insira sua senha",
          })}

          <Link href="/recover-password">
            <Text font="14px" type="secondary" className="my-0 ml-3">
              Esqueceu sua senha?
            </Text>
          </Link>

          <Checkbox value="remember" className="!my-[40px] !justify-start">
            <Text font="15px" type="secondary">
              Lembrar de mim
            </Text>
          </Checkbox>

          <div className="!w-full flex justify-between gap-5 items-center mb-[30px]">
            <Button
              auto
              className="!bg-[#A9B388] !border-none !text-white hover:!bg-[#7C6A46]"
            >
              <Text b font="15px">
                Entrar
              </Text>
            </Button>

            <Link href="/register">
              <Text font="14px" type="secondary">
                Não tem uma conta?
              </Text>
            </Link>
          </div>
        </Card.Content>
      </Card>
    </main>
  );
}
