import { Product, getProducts } from '@/service/products';
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';
import MeowArticle from '@/components/MeowArticle';
import Image from 'next/image';
import clothesImage from '../../../public/images/clothes.jpg';
// export const revalidate = 3;

type Props = {};

const ProductsPage = async (props: Props) => {
  const products: Product[] = await getProducts();
  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothesImage} alt="clothes" />
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
