import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col h-screen gap-12">
      <Image
        src="/img/logo/logo-vertical.png"
        alt="알약로고"
        width={400}
        height={200}
      />
      <button className="mt-10">
        <Link href="/search" className="font-bold text-3xl cursor-pointer">
          시작하기
        </Link>
      </button>
    </div>
  );
}
