'use client';
import { useUIStore } from '@/store';
import Link from 'next/link';
import clsx from 'clsx';
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from 'react-icons/io5';

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {/* black background */}
      {isSideMenuOpen && <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />}

      {/* Blur */}
      {isSideMenuOpen && (
        <div onClick={closeSideMenu} className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />
      )}

      {/* SideMenu */}
      <nav
        className={clsx('fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-xl transform transition-all duration-300', {
          'translate-x-full': !isSideMenuOpen,
        })}
      >
        <IoCloseOutline size={36} className="cursor-pointer absolute top-5 right-5" onClick={closeSideMenu} />

        {/* Input */}
        <div className="relative mt-14">
          <IoSearchOutline size={24} className="absolute top-2 left-2" />
          <input
            type="text"
            className="w-full p-2 bg-gray-50 px-10 py-2 border-b-2 text-md border-gray-200 focus:outline-none focus:border-blue-600"
            placeholder="Buscar"
          />
        </div>

        {/* Menu */}
        <div className="space-y-3 mt-5">
          <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded transition-all">
            <IoPersonOutline size={24} />
            <span className="ml-3 text-lg">Perfil</span>
          </Link>
          <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded transition-all">
            <IoTicketOutline size={24} />
            <span className="ml-3 text-lg">Ordenes</span>
          </Link>
          <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded transition-all">
            <IoLogInOutline size={24} />
            <span className="ml-3 text-lg">Ingresar</span>
          </Link>
          <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded transition-all">
            <IoLogOutOutline size={24} />
            <span className="ml-3 text-lg">Salir</span>
          </Link>
        </div>

        {/* Line separator */}
        <div className="h-[1px] w-full bg-gray-200 my-10 rounded"></div>
        <div className="space-y-3">
          <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded transition-all">
            <IoShirtOutline size={24} />
            <span className="ml-3 text-lg">Productos</span>
          </Link>
          <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded transition-all">
            <IoTicketOutline size={24} />
            <span className="ml-3 text-lg">Ordenes</span>
          </Link>
          <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded transition-all">
            <IoShirtOutline size={24} />
            <span className="ml-3 text-lg">Productos</span>
          </Link>
          <Link href="/" className="flex items-center p-2 hover:bg-gray-100 rounded transition-all">
            <IoPeopleOutline size={24} />
            <span className="ml-3 text-lg">Usuarios</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};
