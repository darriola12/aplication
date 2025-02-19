// src/types/next-auth.d.ts (o en la raíz si prefieres)
import NextAuth from "next-auth";

// Extiende el tipo de usuario para agregar el 'id'
declare module "next-auth" {
  interface User {
    id: string; // Define que 'id' es de tipo string
  }

  interface Session {
    user: User;
  }
}
