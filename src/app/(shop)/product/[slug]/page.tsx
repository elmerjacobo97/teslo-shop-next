import { notFound } from 'next/navigation';
import { initialData } from '@/seed/seed';
import { titleFont } from '@/config/fonts';
import { formatPrice } from '@/helpers';
import { SizeSelector, QuantitySelector, ProductSlideshow, ProductMobileSlideshow } from '@/components';

interface Props {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 md:flex gap-5">
      {/* Slideshow */}
      <div className="w-full md:w-3/5">
        {/* Slideshow Mobile */}
        <ProductMobileSlideshow title={product.title} images={product.images} className="flex md:hidden" />
        {/* Slideshow Desktop */}
        <ProductSlideshow title={product.title} images={product.images} className="hidden md:block" />
      </div>

      {/* Info */}
      <div className="w-full md:w-2/5 p-5 md:p-0">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl mb-1`}>{product.title}</h1>
        <p className="text-lg font-bold mb-5">{formatPrice(product.price)}</p>

        {/* Selector de tallas */}
        <SizeSelector availableSizes={product.sizes} selectedSize={product.sizes[0]} />

        {/* Selector de cantidades */}
        <QuantitySelector quantity={3} />

        <button className="btn-primary my-5">Agregar al carrito</button>
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}
