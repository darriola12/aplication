import { SessionProvider } from 'next-auth/react';  // Importa el SessionProvider
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Navbar from './ui/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <SessionProvider> {/* Envuelve la aplicación con el SessionProvider */}
          <Navbar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
