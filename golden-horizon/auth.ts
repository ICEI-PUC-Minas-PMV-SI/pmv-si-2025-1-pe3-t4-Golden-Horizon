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
      authorize: async (credentials) => {
        const user = await getUserByCredentials(
          credentials.email as string,
          credentials.password as string,
        );
        if (!user) return null;
        return { ...user, id: String(user.id) };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24, // 1 dia
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.phone = user.phone;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.id as string,
        role: token.role as string,
        firstName: token.firstName as string,
        lastName: token.lastName as string,
        phone: token.phone as string,
      };
      session.remember =
        typeof token.remember === "boolean" ? token.remember : undefined;
      return session;
    },
  },
});
