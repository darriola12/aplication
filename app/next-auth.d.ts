// types/next-auth.d.ts
import { DefaultSession } from 'next-auth';

// Extiende el tipo `User` y `Session` de NextAuth
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      // Aquí puedes agregar otros campos si lo necesitas
      name: string;
      email: string;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    // Otros campos del usuario
  }
}
