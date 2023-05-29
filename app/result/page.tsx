"use client";

import Image from "next/image";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { imgSearchResultState, ISearchResult } from "../atoms";

const ResultPage = () => {
  const [correct, setCorrect] = useState<boolean>(true);
  const imgSearchResult = useRecoilValue<ISearchResult>(imgSearchResultState);
  console.log(imgSearchResult);
  return (
    <div className="flex flex-col justify-center items-center h-full gap-4">
      <div className="font-bold text-3xl w-full flex justify-start">
        검색 결과는...
      </div>
      <div>
        <div>{imgSearchResult.name}</div>
        <div className="relative">
          <Image
            src={imgSearchResult.pill_img}
            width={500}
            height={250}
            alt="result img"
          />
        </div>
      </div>
      <div>
        <div>출력된 결과가 정확한가요?</div>
        <div className="">
          <button
            // onClick={handleRouteResult}
            className="text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-l-full p-8 text-center"
          >
            맞아요
          </button>
          <button
            // onClick={handleRouteResult}
            className="text-white bg-pink-400 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-r-full p-8 text-center"
          >
            아니에요
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
