import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.email === "admin@agroflow.com" &&
          credentials?.password === "123"
        ) {
          return { id: "1", name: "Admin", email: "admin@agroflow.com" };
        }

        return null;
      },
    }),
  ],
  secret: "6BChSrlwxa8izqF0ZUVzccymek0OaU1okVP65q380BDdoeOOctyMdOg5s1eoWVuk",
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
