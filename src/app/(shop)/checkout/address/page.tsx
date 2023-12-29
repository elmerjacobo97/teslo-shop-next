import { Title } from '@/components';
import Link from 'next/link';

export default function AddressPage() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Title title="Dirección" subtitle="Dirección de entrega" />
      <div className="w-full flex flex-col justify-center">
        <div className="grid grid-cols-1 gap-2 sm:gap-5 sm:grid-cols-2">
          <div className="mb-2">
            <label htmlFor="name">Nombres</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Tu nombre"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="last_name">Apellidos</label>
            <input
              type="text"
              id="last_name"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Tus apellidos"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address">Dirección</label>
            <input
              type="text"
              id="address"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Tu dirección"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address_2">Dirección 2 (opcional)</label>
            <input
              type="text"
              id="address_2"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Tu dirección"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="code">Código postal</label>
            <input
              type="text"
              id="code"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Tu código postal"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="city">Ciudad</label>
            <input
              type="text"
              id="city"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Tu ciudad"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="country">País</label>
            <select
              name="country"
              id="country"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="MX">Mexico</option>
              <option value="CO">Colombia</option>
              <option value="PE">Perú</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="text"
              id="phone"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-200 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Tu telefono"
            />
          </div>
          <div className="flex flex-col mt-5 sm:mt-10">
            <Link href="/checkout" className="btn-primary flex w-full sm:w-1/2 justify-center ">
              Siguiente
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
