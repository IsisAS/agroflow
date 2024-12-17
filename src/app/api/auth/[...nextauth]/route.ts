import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
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
          credentials?.password === "Mudar@123"
        ) {
          return { id: "1", name: "Admin", email: "admin@agroflow.com" };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "6BChSrlwxa8izqF0ZUVzccymek0OaU1okVP65q380BDdoeOOctyMdOg5s1eoWVuk",
  callbacks: {
    async session({ session }) {
      if (session.user) {
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
});

export { handler as GET, handler as POST };
