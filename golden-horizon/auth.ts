import type { User } from "@/lib/user";

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByCredentials } from "@/lib/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (
        credentials,
      ): Promise<Omit<User, "password"> | null> => {
        const user = await getUserByCredentials(
          credentials.email as string,
          credentials.password as string,
        );

        return user;
      },
    }),
  ],
});
