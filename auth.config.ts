import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      // Definir rutas protegidas específicas
      const protectedRoutes = [
        '/products/add-craft',
        '/products/my-craft',
        '/products/my-profile',
      ];

      // Verifica si la ruta es exactamente /products o si es una de las protegidas
      const isProtected = protectedRoutes.some((route) =>
        nextUrl.pathname.startsWith(route)
      );

      // Protege todas las rutas que siguen a /products/ pero no /products
      const isOnProtectedProductPage = /^\/products\/.+/.test(nextUrl.pathname);
      const isOnLoginPage = nextUrl.pathname === '/login';

      // Si la ruta es protegida o está en products/..., verificar autenticación
      if (isProtected || isOnProtectedProductPage) {
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