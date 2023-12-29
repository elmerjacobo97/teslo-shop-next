import { QuantitySelector, Title } from '@/components';
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

export default function CartPage() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <Title title="Carrito" />
      <div className="flex flex-col lg:flex-row justify-between gap-4 lg:gap-14 mb-10 lg:mb-0">
        <div className="lg:w-2/3">
          <div className="flex flex-col">
            <span className="text-xl">Agregar más productos</span>
            <Link href="/" className="underline mb-5">
              continúa comprando
            </Link>
          </div>
          {productsInCart.map((product) => (
            <div key={product.slug} className="flex justify-between items-center mb-5">
              <div className="flex items-center">
                <Image src={`/products/${product.images[0]}`} alt={product.title} width={100} height={100} className="mr-5 rounded object-cover" />
                <div className="space-y-2">
                  <p className="font-semibold">{product.title}</p>
                  <span className="text-lg block lg:hidden">{formatPrice(product.price)}</span>
                  <QuantitySelector quantity={3} />
                  <button className="text-blue-600 hover:text-blue-700 hover:underline">Quitar</button>
                </div>
              </div>
              <span className="text-lg hidden lg:block">{formatPrice(product.price)}</span>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3 bg-white rounded-xl shadow-lg p-5 mt-5 max-h-80 overflow-auto">
          <h2 className="text-2xl font-bold mb-2">Resumen del pedido</h2>
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
            <div className="flex justify-between mt-2">
              <span className="text-xl font-medium">Total</span>
              <span className="text-xl font-medium">{formatPrice(110)}</span>
            </div>
          </div>
          <div className="mt-5">
            <Link href="/checkout/address" className="flex justify-center btn-primary">
              Ir a pagar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
