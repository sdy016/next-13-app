import React from "react";
import { notFound } from "next/navigation";
type Props = {
  params: {
    slug: string;
  };
};
import type { Metadata } from "next";

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름 ${params.slug}`,
  };
}
// export const metadata: Metadata = {
//   title: "멋진 제품 사이트 | 전체 제품 확인",
//   description: "멋진 제품",
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

const Item = ({ params: { slug } }: Props) => {
  if (slug === "nothing") {
    notFound();
  }
  return <h1>{decodeURI(slug)} Item</h1>;
};

export default Item;

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
