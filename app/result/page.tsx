"use client";

import Image from "next/image";
import Link from "next/link";

export interface ISearchResult {
  success: boolean;
  name: string;
  id: string;
  pill_img: string;
}

const ResultPage = () => {
  const resString = window.localStorage.getItem("res");
  const imgSearchResult: ISearchResult[] = resString && JSON.parse(resString);

  return (
    <div className="flex flex-col justify-center items-center h-full gap-4 my-20">
      <div className="font-bold text-3xl w-full flex justify-start">
        검색 결과는...
      </div>

      <div className="flex flex-col justify-start items-center w-full mb-8">
        {imgSearchResult.map((item: ISearchResult, index) => (
          <div className="flex justify-start items-center gap-4 w-full">
            <div className="text-2xl font-semibold">{index + 1}.</div>

            <Link
              href={{
                pathname: `/result/${item.id}`,
                query: {
                  itemName: `${item.name}`,
                  itemSeq: `${item.id}`,
                },
              }}
              className="flex justify-start items-center gap-4 border border-gray-300 rounded-lg p-4 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 w-full"
            >
              <div className="relative flex justify-center items-center">
                <Image
                  src={item.pill_img}
                  width={120}
                  height={100}
                  alt="result img"
                  className="rounded-lg"
                />
              </div>
              <div className="text-xl">{item.name}</div>
              <div className="text-sm font-semibold text-gray-400">
                품목기준코드 : {item.id}
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center gap-4 mb-20">
        <div className="text-md flex justify-center items-center text-center">
          출력된 결과가 정확하지 않다면, 다시 시도해보세요.
        </div>
        <div className="w-full flex justify-center items-center">
          <Link
            href="/search/photo"
            className="text-white bg-pink-400 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-full p-4 text-center w-28"
          >
            사진 검색
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
