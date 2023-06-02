import Link from "next/link";
import Image from "next/image";

export default function NotFound({ itemSeq }: { itemSeq: string }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="text-8xl">😿</div>
      <div className="text-3xl font-bold">이런!</div>
      <div className="text-2xl mb-8">
        검색하고자 하는 알약의 정보가 없습니다.
      </div>
      <div className="text-xl mb-2">아래의 사이트에서 직접 검색해보세요.</div>
      <div className="flex justify-center items-center gap-4 h-max">
        <Link
          href={`https://www.health.kr/searchIdentity/search.asp`}
          className="border-4 border-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-700 rounded-full p-4 text-center h-full flex justify-center items-center"
        >
          <Image
            src={"/img/logo/kpic_logo.png"}
            width={150}
            height={75}
            alt="kpic"
          />
        </Link>
        <Link
          href={`https://nedrug.mfds.go.kr/searchDrug?itemSeq=${itemSeq}`}
          className="border-4 border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 rounded-full p-4 text-center h-full flex justify-center items-center"
        >
          <Image
            src={"/img/logo/nedrug_logo.png"}
            width={150}
            height={75}
            alt="nedrug"
          />
        </Link>
        <Link
          href={`https://www.druginfo.co.kr/search2/search.aspx?q=${itemSeq}`}
          className="border-4 border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 rounded-full p-4 text-center h-full flex justify-center items-center"
        >
          <Image
            src={"/img/logo/druginfo_logo.gif"}
            width={150}
            height={75}
            alt="druginfo"
          />
        </Link>
      </div>
    </div>
  );
}
