import { Metadata } from "next";
import "./globals.css";
import styles from "./layout.module.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "한국외대 종합설계 B3팀 프로젝트",
  description: "알고싶은 약, 알약",
  icons: {
    // icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <Link href="/">알고싶은 약, 알약</Link>
          <nav className={styles.nav}>
            <Link href="/select">검색 메뉴</Link>
            <Link href="/about">팀 소개</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
