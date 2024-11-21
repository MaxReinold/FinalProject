import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { compare, hash } from "bcryptjs";
import User from "./models/userSchema";
import Item from "./models/itemSchema";
import connectMongoDB from "./libs/mongodb";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }
        console.log("Creds: " + JSON.stringify(credentials));

        try {
          const email = credentials.email as string;
          await connectMongoDB();
          const user = await User.findOne({ email: email });
          if (!user) {
            console.log("User failed!");
            return null;
          }

          console.log("User: " + JSON.stringify(user));
          const password = credentials.password as string;
          const maybeHashed = await hash(password, 5);
          console.log("PWs: " + maybeHashed + " | " + user.password);
          const isMatch = await compare(password, user.password);
          if (!isMatch) {
            console.log("Password failed!");
            return null;
          }

          return {
            id: user._id as string,
            email: user.email,
            username: user.username,
          };
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    newUser: "/register",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
});
