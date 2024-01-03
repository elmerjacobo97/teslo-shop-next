import Link from 'next/link';
import { titleFont } from '@/config/fonts';

export default function NewAccountPage() {
  return (
    <main className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${titleFont.className} text-4xl mb-5`}>Nueva cuenta</h1>
      <div className="flex flex-col">
        <label htmlFor="email">Nombre completo</label>
        <input
          type="text"
          id="name"
          className="px-5 py-2 border bg-gray-200 rounded mb-5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="John Doe"
        />
        <label htmlFor="email">Correo electrónico</label>
        <input
          type="email"
          id="email"
          className="px-5 py-2 border bg-gray-200 rounded mb-5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="example@example.com"
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          className="px-5 py-2 border bg-gray-200 rounded mb-5 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="******"
        />
        <button className="btn-primary">Crear cuenta</button>
        <div className="flex items-center my-5">
          <div className="flex-1 border-t border-gray-500"></div>
          <div className="px-2 text-gray-800">O</div>
          <div className="flex-1 border-t border-gray-500"></div>
        </div>
        <Link href="/auth/login" className="btn-secondary text-center">
          Inicia sesión
        </Link>
      </div>
    </main>
  );
}
