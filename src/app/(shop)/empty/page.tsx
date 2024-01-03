import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

export default function EmptyPage() {
  return (
    <div className="flex justify-center items-center h-[800px]">
      <IoCartOutline size={100} className="mx-5" />
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-semibold">Tu carrito esta vacío</h1>
        <Link href="/" className="text-blue-600 hover:text-blue-700 hover:underline mt-2 text-lg">
          Regresar
        </Link>
      </div>
    </div>
  );
}
