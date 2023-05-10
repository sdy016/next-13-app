import { Product, getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';

export const revalidate = 3;

type Props = {};

const Products = async (props: Props) => {
  const products: Product[] = await getProducts();

  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product: Product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
