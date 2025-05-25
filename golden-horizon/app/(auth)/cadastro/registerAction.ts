"use server";

import db from "@/lib/prisma";

export default async function RegisterAction(formData: FormData) {
  const entries = Array.from(formData.entries());

  const data = Object.fromEntries(entries) as {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
    phone: string;
  };

  const { firstName, lastName, email, password, phone, confirmPassword } = data;

  if (!firstName || !lastName || !email || !password || !phone) {
    throw new Error("Todos os campos são obrigatórios.");
  }

  if (password.length < 8) {
    throw new Error("A senha deve ter no mínimo 8 caracteres.");
  }

  if (password !== confirmPassword) {
    throw new Error("As senhas não correspondem.");
  }

  await db.user.create({
    data: {
      firstName,
      lastName,
      email,
      password,
      phone,
    },
  });

  console.log("Server Action Register User");
  console.log(data);

  return { success: true };
}
