import React from 'react';
import { notFound, redirect } from 'next/navigation';

import { Product, getProduct, getProducts } from '@/service/products';
import Image, { StaticImageData } from 'next/image';
import GoProductsButton from '@/components/GoProductsButton';

export const revalidate = 3;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 ${params.slug}`,
  };
}

const Item = async ({ params: { slug } }: Props) => {
  const product: Product | undefined = await getProduct(slug);

  if (!product) {
    redirect('/products');
    // notFound();
  }
  return (
    <>
      <h1>{product.name} Item</h1>
      <div>
        <Image src={`/images/${product.image}`} alt={product.name} width={400} height={400} />
        <GoProductsButton />
      </div>
    </>
  );
};

export default Item;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
