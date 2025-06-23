import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    firstName?: string;
    lastName?: string;
    role?: string;
    phone?: string;
  }
  interface Session {
    user: User;
    remember?: boolean;
  }
}
