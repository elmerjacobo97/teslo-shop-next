import { ProductGrid, Title } from '@/components';
import type { Category } from '@/interfaces';
import { initialData } from '@/seed/seed';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    id: Category;
  };
}

const seedProducts = initialData.products;

export default function CategoryPage({ params }: Props) {
  const { id } = params;

  // if (id === 'kids') {
  //   notFound();
  // }

  const products = seedProducts.filter((product) => product.gender === id);

  const labels: Record<Category, string> = {
    men: 'para hombres',
    women: 'para mujeres',
    kid: 'para niños',
    unisex: 'para todos',
  };

  return (
    <>
      <Title title={`Artículos ${labels[id]}`} subtitle="Todos los productos" />
      <ProductGrid products={products} />
    </>
  );
}
