"use client";

import Image from "next/image";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { imgSearchResultState, ISearchResult } from "../atoms";

const ResultPage = () => {
  const imgSearchResult = useRecoilValue<ISearchResult>(imgSearchResultState);
  console.log(imgSearchResult);

  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
      <div className="font-bold text-3xl w-full flex justify-start">
        검색 결과는...
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-3xl">{imgSearchResult.name}</div>
        <div className="relative flex justify-center items-center">
          <Image
            src={imgSearchResult.pill_img}
            width={500}
            height={250}
            alt="result img"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-md flex justify-center items-center text-center">
          출력된 결과가 정확한가요?
        </div>
        <div className="w-full flex justify-center items-center">
          <Link
            href={{
              pathname: "/result/detail",
              query: { itemSeq: `${imgSearchResult.id}` },
            }}
            className="text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-l-full p-4 text-center w-28"
          >
            맞아요 👍
          </Link>
          <Link
            href="/search"
            className="text-white bg-pink-400 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-r-full p-4 text-center w-28"
          >
            아니에요 👎
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
