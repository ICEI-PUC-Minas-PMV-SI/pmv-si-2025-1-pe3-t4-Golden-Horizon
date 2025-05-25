"use client";
import DancingScript from "@/components/dancingScript/DancingScript";
import { Button, Checkbox, Text } from "@geist-ui/react";
import Link from "next/link";
import Form from "next/form";
import React from "react";
import FormInput from "@/components/formInput/FormInput";
import FormCard from "@/components/formCard/FormCard";

export default function Login() {
  return (
    <main className="h-[calc(100vh-96px)] flex justify-center items-center !m-5">
      <FormCard>
        <h2 className="!text-center">
          <DancingScript text="Golden Horizon" />
        </h2>

        <Form action={(data) => console.log(data)}>
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

          <Link href="/recover-password">
            <Text font="14px" type="secondary" className="my-0 ml-3">
              Esqueceu sua senha?
            </Text>
          </Link>

          <Checkbox
            value="remember"
            name="remember"
            className="!my-[40px] !justify-start"
          >
            <Text font="15px" type="secondary">
              Lembrar de mim
            </Text>
          </Checkbox>

          <div className="!w-full flex justify-between gap-5 items-center mb-[30px]">
            <Button
              auto
              htmlType="submit"
              className="!bg-[#A9B388] !border-none !text-white hover:!bg-[#7C6A46]"
            >
              <Text b font="15px">
                Entrar
              </Text>
            </Button>

            <Link href="/cadastro">
              <Text font="14px" type="secondary">
                Não tem uma conta?
              </Text>
            </Link>
          </div>
        </Form>
      </FormCard>
    </main>
  );
}
