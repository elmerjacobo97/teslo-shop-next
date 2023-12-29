'use client';

import { useState } from 'react';
import { Product } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '@/helpers';

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayImage}`}
          alt={product.title}
          width={500}
          height={500}
          className="w-full object-cover rounded"
          onMouseEnter={() => setDisplayImage(product.images[1])} // Cuando el mouse entra
          onMouseLeave={() => setDisplayImage(product.images[0])} // Cuando el mouse sale
        />
      </Link>
      <div className="flex flex-col p-4">
        <Link href={`/product/${product.slug}`} className="hover:text-blue-600">
          {product.title}
        </Link>
        <span className="font-bold">{formatPrice(product.price)}</span>
      </div>
    </div>
  );
};
