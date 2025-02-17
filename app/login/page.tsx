import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';

export default function LoginPage() {
  return (
    <main
      className="flex items-center justify-center md:h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/02/01/18/14/wicker-3123707_1280.jpg)' }} // Replace with your image path
    >
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32 bg-white/90 rounded-lg shadow-lg backdrop-blur-sm">
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
    </main>
  );
}