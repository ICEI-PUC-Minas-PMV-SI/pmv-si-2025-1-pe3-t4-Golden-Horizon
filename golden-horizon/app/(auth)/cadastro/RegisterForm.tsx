"use client";

import FormInput from "@/components/formInput/FormInput";
import { Button, Text } from "@geist-ui/react";
import Form from "next/form";
import Link from "next/link";
import registerAction from "./registerAction";
import { useActionState } from "react";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, null);

  return (
    <>
      {state?.success === false && (
        <Text type="error" className="!mb-4">
          {state.message}
        </Text>
      )}

      <Form action={formAction}>
        <div className="flex gap-4 justify-between">
          <FormInput label="Primeiro nome" name="firstName" />

          <FormInput label="Último nome" name="lastName" />
        </div>

        <FormInput
          label="Endereço de email"
          name="email"
          type="email"
          placeholder="Insira seu melhor email"
        />

        <FormInput
          label="Senha"
          name="password"
          type="password"
          placeholder="Escolha uma senha de pelo menos 8 caracteres."
        />

        <FormInput
          label="Confirme a senha"
          name="confirmPassword"
          type="password"
          placeholder="Insira sua senha"
        />

        <FormInput
          placeholder="Digite seu número de telefone"
          label="Telefone"
          name="phone"
          type="tel"
        />

        <div className="flex !my-[40px] justify-between">
          <Button
            auto
            htmlType="submit"
            className="!bg-[#A9B388] !border-none !text-white hover:!bg-[#7C6A46]"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <Text b font="15px">
              Cadastrar
            </Text>
          </Button>

          <Link href="/login">
            <Text font="14px" type="secondary">
              Já tem uma conta?
            </Text>
          </Link>
        </div>
      </Form>
    </>
  );
}
