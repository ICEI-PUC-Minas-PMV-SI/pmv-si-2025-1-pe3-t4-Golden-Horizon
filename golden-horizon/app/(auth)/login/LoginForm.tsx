"use client";

import { Button, Checkbox, Text } from "@geist-ui/react";
import Link from "next/link";
import Form from "next/form";
import React from "react";
import FormInput from "@/components/formInput/FormInput";
import loginAction from "./loginAction";
import { useActionState } from "react";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);
  return (
    <>
      {state?.success === false && (
        <Text type="error" className="mb-5">
          {state.message}
        </Text>
      )}

      {state?.success === true && (
        <Text type="success" className="mb-5">
          Boas Vindas!
        </Text>
      )}

      <Form action={formAction}>
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
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
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
    </>
  );
}
