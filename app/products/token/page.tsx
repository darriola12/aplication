'use client';


import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import type { Session } from "next-auth"; // Importar el tipo correctamente

export default function CheckSession() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    async function fetchSession() {
      const sessionData = await getSession();
      console.log("Session data:", sessionData);
      setSession(sessionData);
    }

    fetchSession();
  }, []);

  return (
    <div>
      {session ? (
        <p>Usuario autenticado: {session.user?.id}</p>
      ) : (
        <p>No hay sesión activa.</p>
      )}
    </div>
  );
}
