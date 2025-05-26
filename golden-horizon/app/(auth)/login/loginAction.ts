"use server";

import { signIn } from "@/auth";

export default async function loginAction(
  _prevState: unknown,
  formData: FormData,
) {
  try {
    await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });
    return { success: true };
  } catch (e) {
    if (e.type === "CredentialsSignin") {
      return {
        success: false,
        message: "Credenciais inválidas. Por favor, tente novamente.",
      };
    }

    return {
      success: false,
      message:
        "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.",
    };
  }
}
