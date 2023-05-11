import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col p-5">
      <Image src="/img/logo/logo.png" alt="알약로고" width={400} height={200} />
      <button>
        <Link href="/select">시작하기</Link>
      </button>
    </div>
  );
}
