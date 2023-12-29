'use client';

import Link from 'next/link';
import { titleFont } from '@/config/fonts';
import { IoSearchOutline, IoCartOutline } from 'react-icons/io5';
import { useUIStore } from '@/store';

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="flex justify-between items-center px-5 mt-2 w-full">
      <div>
        <Link href="/">
          <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
          <span> | Shop</span>
        </Link>
      </div>
      <div className="hidden sm:block">
        <Link href="/category/men" className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          Hombres
        </Link>
        <Link href="/category/women" className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          Mujeres
        </Link>
        <Link href="/category/kid" className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
          Niños
        </Link>
      </div>
      <div className="flex items-center space-x-1">
        <Link href="/search">
          <div className="p-2 rounded-md transition-all hover:bg-gray-100">
            <IoSearchOutline size={26} />
          </div>
        </Link>
        <Link href="/cart">
          <div className="relative">
            <div className="absolute rounded-full flex justify-center items-center w-4 h-4 bg-blue-600 top-0.5 right-1">
              <span className="text-xs text-white">3</span>
            </div>
            <div className="p-2 rounded-md transition-all hover:bg-gray-100">
              <IoCartOutline size={26} />
            </div>
          </div>
        </Link>
        <button type="button" onClick={openSideMenu} className="p-2 rounded-md transition-all hover:bg-gray-100">
          Menu
        </button>
      </div>
    </nav>
  );
};
