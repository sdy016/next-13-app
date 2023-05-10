import React from 'react';
import { notFound } from 'next/navigation';
type Props = {
  params: {
    slug: string;
  };
};
import type { Metadata } from 'next';
import { Product, getProduct, getProducts } from '@/service/products';

export const revalidate = 3;

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 ${params.slug}`,
  };
}

const Item = async ({ params: { slug } }: Props) => {
  const product: Product | undefined = await getProduct(slug);

  if (!product) {
    notFound();
  }
  // if (slug === 'nothing') {
  //   notFound();
  // }
  return <h1>{product.name} Item</h1>;
};

export default Item;

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
