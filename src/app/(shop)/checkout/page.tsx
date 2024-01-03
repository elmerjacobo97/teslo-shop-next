import { Title } from '@/components';
import { initialData } from '@/seed/seed';
import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/helpers';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
  initialData.products[3],
  initialData.products[4],
  initialData.products[5],
];

export default function CheckoutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Title title="Verificar orden" />
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-14 mb-10 lg:mb-0">
        <div className="lg:w-2/3">
          <div className="flex flex-col">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/cart" className="underline mb-5">
              Editar carrito
            </Link>
          </div>
          {productsInCart.map((product) => (
            <div key={product.slug} className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                <Image src={`/products/${product.images[0]}`} alt={product.title} width={100} height={100} className="mr-5 rounded object-cover" />
                <div>
                  <p>{product.title}</p>
                  <span>{formatPrice(product.price)}</span>
                  <p className="font-light">x 3</p>
                  <div className="flex gap-10">
                    <span className="font-bold">Subtotal</span>
                    <span className="font-bold">{formatPrice(100)}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3 bg-white rounded-xl shadow-lg p-5 mt-5 h-fit">
          <h2 className="text-2xl font-bold mb-2">Dirección de entrega</h2>
          <div className="space-y-2 mb-4">
            <p>Elmer Jacobo</p>
            <p>Av. Siempreviva 123</p>
            <p>1234567890</p>
            <p>México, CDMX</p>
          </div>
          <div className="w-full border-b border-gray-100"></div>

          <h2 className="text-2xl font-bold my-2">Resumen del pedido</h2>
          <div className="mb-4">
            <div className="flex justify-between">
              <span>No. de productos</span>
              <span>{productsInCart.length}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Subtotal</span>
              <span>{formatPrice(100)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Impuestos (15%)</span>
              <span>10</span>
            </div>
            <div className="flex justify-between mt-5">
              <span className="text-xl font-medium">Total</span>
              <span className="text-xl font-medium">{formatPrice(110)}</span>
            </div>
          </div>
          <div className="mt-5  ">
            <span className="text-xs">
              Al hacer click en colocar orden, aceptas los
              <a href="#" className="underline mx-1">
                términos y condiciones
              </a>
              y
              <a href="#" className="underline ml-1">
                política de privacidad
              </a>
              .
            </span>
            <Link href="/orders/123" className="flex justify-center btn-primary mt-5">
              Colocar orden
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
