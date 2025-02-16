import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const protectedRoutes = ['/products/add-craft', '/products/my-craft', '/products/my-profile'];
      const isProtected = protectedRoutes.some((route) => nextUrl.pathname.startsWith(route));
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnLoginPage = nextUrl.pathname === '/login';

      // Si la ruta es protegida, validar autenticación
      if (isProtected || isOnDashboard) {
        return isLoggedIn ? true : false; // Solo deja pasar si está autenticado
      }

      // Permitir acceso a cualquier otra página sin restricciones
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
