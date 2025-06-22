import type { User } from "@/lib/user";
import type { Session } from "next-auth";

import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByCredentials } from "@/lib/user";

type SessionWithRemember = Session & { remember?: boolean };

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
        if (!user) return null;

        // Remove a senha e garante que id é string
        return { ...user, id: String(user.id) };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, //1 dia
  },
  callbacks: {
    async jwt({ token, user }) {
      const u = user as typeof user & { remember?: boolean };
      if (u && typeof u.remember !== "undefined") {
        token.remember = u.remember;
        if (u.remember) {
          token.exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30;
        }
      }
      return token;
    },
    async session({ session, token }) {
      const s: SessionWithRemember = {
        ...session,
        remember:
          typeof token.remember === "boolean" ? token.remember : undefined,
      };
      return s;
    },
  },
});
