"use client";

import Image from "next/image";
import { useState } from "react";

const ResultPage = () => {
  const [correct, setCorrect] = useState<boolean>(true);

  const handleRouteResult = () => {};

  return (
    <div>
      <div>검색 결과는...</div>
      <div>
        <div>타이레놀정</div>
        <div className="relative">
          <Image src="" fill={true} alt="result img" />
        </div>
      </div>
      <div>
        <div>출력된 결과가 정확한가요?</div>
        <div className="">
          <button
            onClick={handleRouteResult}
            className="text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-l-full p-8 text-center"
          >
            맞아요
          </button>
          <button
            onClick={handleRouteResult}
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
