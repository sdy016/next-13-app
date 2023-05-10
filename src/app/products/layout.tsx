import React from "react";
import styles from "./layout.module.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "멋진 제품 사이트 | 전체 제품 확인",
  description: "멋진 제품",
  icons: {
    icon: "/favicon.ico",
  },
};

function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/여성옷">여성옷</Link>
        <Link href="/products/남성옷">남성옷</Link>
      </nav>
      <div className={styles.product}>{children}</div>
    </>
  );
}

export default ProductLayout;
