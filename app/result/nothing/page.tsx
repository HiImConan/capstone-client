"use client";

import React, { FunctionComponent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Tooltip } from "flowbite-react";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const NothingPage: FunctionComponent<Props> = ({ searchParams }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-8xl">😿</div>
        <div className="text-3xl font-bold">이런!</div>
        <div className="text-2xl">검색하고자 하는 알약의 정보가 없습니다.</div>
        <p className="text-center px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm">
          본 서비스에서 활용하고 있는 'e약은요' 서비스는 일반소비자 눈높이에
          맞춘 이해하기 쉬운 의약품 정보 제공을 위해 마련된
          의약품개요정보입니다.
          <br />
          의약품에 관한 모든 내용을 담고 있지 않으며 자세한 사항은 식약처
          의약품안전나라의 '의약품상세정보'를 참고하시기 바랍니다.
          <br />본 정보는 법적 효력을 가지는 것이 아닙니다.
        </p>
      </div>

      <div className="text-xl ">아래의 사이트에서 직접 검색해보세요.</div>

      <div className="flex justify-center items-center gap-4 h-max">
        <Tooltip
          content="링크 클릭 시 자동으로 알약이 검색됩니다."
          className="text-center flex justify-center items-center p-0 bg-gray-400 rounded-lg shadow-sm transition-opacity duration-300 tooltip"
        >
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
        </Tooltip>
        <Tooltip
          content="링크 클릭 시 자동으로 알약이 검색됩니다."
          className="text-center flex justify-center items-center p-0 bg-gray-400 rounded-lg shadow-sm transition-opacity duration-300 tooltip"
        >
          <Link
            href={`https://nedrug.mfds.go.kr/searchDrug?itemSeq=${searchParams.itemSeq}`}
            className="border-4 border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500 rounded-full p-4 text-center h-full flex justify-center items-center"
          >
            <Image
              src={"/img/logo/nedrug_logo.png"}
              width={150}
              height={75}
              alt="nedrug"
            />
          </Link>
        </Tooltip>
        <Tooltip
          content="링크 클릭 시 자동으로 알약이 검색됩니다."
          className="text-center flex justify-center items-center p-0 bg-gray-400 rounded-lg shadow-sm transition-opacity duration-300 tooltip"
        >
          <Link
            href={`https://www.druginfo.co.kr/search2/search.aspx?q=${searchParams.itemSeq}`}
            className="border-4 border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400 rounded-full p-4 text-center h-full flex justify-center items-center"
          >
            <Image
              src={"/img/logo/druginfo_logo.gif"}
              width={150}
              height={75}
              alt="druginfo"
            />
          </Link>
        </Tooltip>
      </div>
    </div>
  );
};
export default NothingPage;
