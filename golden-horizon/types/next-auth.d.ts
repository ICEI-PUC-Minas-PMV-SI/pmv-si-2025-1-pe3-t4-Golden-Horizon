import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User extends DefaultUser {
    firstName?: string;
    lastName?: string;
    role?: string;
  }
  interface Session {
    user: User;
    remember?: boolean;
  }
}
