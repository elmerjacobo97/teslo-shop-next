import { titleFont } from '@/config/fonts';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 justify-items-center text-xs my-5 md:max-w-2xl mx-auto">
      <Link href="/" className="hover:underline">
        <div className="flex items-center">
          <span className={`${titleFont.className} antialiased font-bold`}>Teslo </span>
          <span className="ml-1"> | Shop</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </Link>
      <Link href="/" className="hover:underline">
        Privacidad y Aviso Legal
      </Link>
      <Link href="/" className="hover:underline">
        Contacto
      </Link>
      <Link href="/" className="hover:underline">
        Terminos y Condiciones
      </Link>
    </div>
  );
};
