import { Product, getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';
import MeowArticle from '@/components/MeowArticle';

// export const revalidate = 3;

type Props = {};

const ProductsPage = async (props: Props) => {
  const products: Product[] = await getProducts();
  // const res = await fetch('https://meowfacts.herokuapp.com', { next: { revalidate: 3 } });

  // console.log('factText: ', factText);

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
      <MeowArticle styles={styles} />
    </div>
  );
};

export default ProductsPage;
