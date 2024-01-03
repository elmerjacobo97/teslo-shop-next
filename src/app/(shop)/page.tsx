import { ProductGrid, Title } from '@/components';
import { titleFont } from '@/config/fonts';
import { initialData } from '../../seed/seed';

const products = initialData.products;

export default function Home() {
  return (
    <div className="mx-5 sm:mx-0">
      <Title title="Tienda" subtitle="Todos los productos" />
      <ProductGrid products={products} />
    </div>
  );
}
