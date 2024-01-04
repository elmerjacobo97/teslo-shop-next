import { initialData } from './seed';
import prisma from '../lib/prisma';

async function main() {
  // 1. Eliminar registros previos.
  // await Promise.all([
  await prisma.productImage.deleteMany(), await prisma.product.deleteMany(), await prisma.category.deleteMany();
  // ]);

  // 2. Crear categorias.
  const { categories, products } = initialData;
  const categoriesData = categories.map((cat) => ({
    name: cat,
  }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();
  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>); //<string=category, string=id>

  // 3. Crear productos.
  products.forEach(async (product) => {
    const { images, type, ...rest } = product;
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });

    // Images.
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  console.log('Seed ejecutando correctamente.');
}

(() => {
  if (process.env.NODE_ENV === 'production') return;

  main();
})();
