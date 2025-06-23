"use server";

import db from "@/lib/prisma";
import bcrypt from "bcryptjs";

export default async function RegisterAction(
  _prevState: unknown,
  formData: FormData,
) {
  const entries = Array.from(formData.entries());

  const data = Object.fromEntries(entries) as {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
    role?: string;
  };

  const { firstName, lastName, email, password, phone, confirmPassword, role } =
    data;

  if (!firstName || !lastName || !email || !password || !phone) {
    return {
      message: "Todos os campos são obrigatórios.",
      success: false,
    };
  }

  const user = await db.user.findUnique({
    where: { email },
  });

  if (user) {
    return {
      message: "Este e-mail já está em uso.",
      success: false,
    };
  }

  if (password.length < 8) {
    return {
      message: "A senha deve ter no mínimo 8 caracteres.",
      success: false,
    };
  }

  if (password !== confirmPassword) {
    return {
      message: "As senhas não correspondem.",
      success: false,
    };
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  await db.user.create({
    data: {
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      role: role === "admin" ? "admin" : "user",
    },
  });

  console.log("Server Action Register User");
  console.log(data);

  return {
    message: "Usuario cadastrado com sucesso",
    success: true,
  };
}
