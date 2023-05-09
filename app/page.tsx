import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>알고 싶은 약, 알약</h1>
      <button>
        <Link href="/select">시작하기</Link>
      </button>
    </>
  );
}
