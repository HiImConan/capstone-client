import { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

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
      <body
        className="flex flex-col items-center h-full sm:h-screen pt-16"
        suppressHydrationWarning={true}
      >
        <header className="absolute top-0 w-full flex justify-between items-center p-4 border-b-2 border-skyblue bg-white">
          <Link href="/" className="w-24 h-full">
            <Image
              src="/img/logo/logo.png"
              alt="알약로고"
              width={96}
              height={48}
            />
          </Link>
          <nav>
            <Link href="/search" className="px-2">
              검색 메뉴
            </Link>
            {/* <Link href="/about" className="px-2">
              팀 소개
            </Link> */}
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
