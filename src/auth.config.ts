import { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  session: {
    strategy: "jwt",
  },
  providers: [],
  secret: process.env.NEXTAUTH_SECRET,
};
