import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await sql<User[]>`SELECT * FROM users WHERE email=${email}`;
    return user[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
  callbacks: {
    // Callback para el JWT: agrega el id del usuario al token
    async jwt({ token, user }) {
      if (user?.id) {
        token.id = user.id;
      }
      return token;
    },

    // Callback para la sesión: agrega el id del token a la sesión
    async session({ session, token }) {
      if (token?.id) {
        session.user.id = token.id as string; // Asegúrate de que es un string
      }
      return session;
    },
  },
  // Asegúrate de que el tipo de la sesión se ajuste al tipo de usuario
  session: {
    strategy: 'jwt', // Usar JWT para la sesión
  },
});


