import Link from "next/link";
import React from "react";

type Props = {};

const products = ["shirt", "pants", "skirt", "shoes"];

const Products = (props: Props) => {
  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map((product) => (
          <li key={product}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
