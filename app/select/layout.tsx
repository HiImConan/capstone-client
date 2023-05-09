import styles from "./layout.module.css";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "알고 싶은 약, 알약 | 검색 선택하기",
  description: "검색 방법을 선택해주세요",
};

const ProductsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section className={styles.product}>{children}</section>
    </>
  );
};

export default ProductsLayout;
