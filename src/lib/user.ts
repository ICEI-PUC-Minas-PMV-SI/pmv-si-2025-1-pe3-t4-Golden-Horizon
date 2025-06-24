/* eslint-disable @typescript-eslint/no-unused-vars */
import db from "./prisma";
import bcrypt from "bcryptjs";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  phoneCountry: number;
  password: string;
  createdAt: Date;
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  return await db.user.findUnique({
    where: { email },
  });
};

export const getUserByCredentials = async (
  email: string,
  password: string,
): Promise<Omit<User, "password"> | null> => {
  const user = await getUserByEmail(email);

  if (!user) return null;

  const isMatch = bcrypt.compareSync(password, user.password);
  if (isMatch) {
    const { password, ...userWithoutPassword } = user;
    return userWithoutPassword;
  }

  return null;
};
