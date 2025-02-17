import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // Definir rutas protegidas
      const protectedRoutes = [
        '/products/add-craft',
        '/products/my-craft',
        '/products/my-profile',
      ];

      const isProtected = protectedRoutes.some((route) =>
        nextUrl.pathname.startsWith(route)
      );

      const isOnProducts = nextUrl.pathname.startsWith('/products'); // Protege todo /products
      const isOnLoginPage = nextUrl.pathname === '/login';

      // Si está en una ruta protegida o en productos, verificar autenticación
      if (isProtected || isOnProducts) {
        if (!isLoggedIn) {
          return Response.redirect(new URL('/login', nextUrl.origin)); // Redirigir a login si no está autenticado
        }
        return true;
      }

      // Permitir acceso a cualquier otra página sin restricciones
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
