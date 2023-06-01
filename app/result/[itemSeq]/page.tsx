"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { DRUG_INFO_BASE_URL, SERVICE_KEY } from "../constant/path";
import Image from "next/image";
import { DRUG_INFO_LIST, IDrugInfo } from "../constant/type";
import Link from "next/link";

export default function DetailPage() {
  const [drugInfo, setDrugInfo] = useState<IDrugInfo | null>(null);
  const searchParams = useSearchParams();
  const itemSeq = searchParams.get("itemSeq");
  const itemName = searchParams.get("itemName");

  const getDrugInfo = async (itemSeq: string) => {
    console.log(itemSeq);
    const res = await fetch(
      `${DRUG_INFO_BASE_URL}?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=3&itemSeq=${itemSeq}&type=json`
    );
    const result = await res.json();
    if (result.body.hasOwnProperty("items")) {
      setDrugInfo(result.body.items[0] as IDrugInfo);
      console.log(result.body.items[0]);
    }
  };

  useEffect(() => {
    getDrugInfo(itemSeq as string);
    console.log(drugInfo);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4 h-full">
      {drugInfo ? (
        <div className="flex flex-col justify-start items-center gap-4 h-max overflow-y-auto">
          <div className="text-3xl font-bold">{drugInfo.itemName}</div>
          <div className="flex justify-center items-center w-full">
            <Image
              src={drugInfo.itemImage as string}
              width={500}
              height={250}
              alt="item image"
            />
          </div>
          {DRUG_INFO_LIST.map((category) => (
            <div
              key={category.key}
              className="flex flex-col items-start gap-2 w-1/2"
            >
              <div className="text-xl text-blue-400 font-semibold">
                {category.value}
              </div>
              <div>
                {Object.entries(drugInfo)
                  .filter(([key]) => key == category.key)[0][1]
                  .replace(/(<br>|<br\/>|<br \/>)/g, "\r\n")
                  .replace(/(<p>|<\/p>|)/g, "")}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="text-8xl">😿</div>
          <div className="text-3xl font-bold">이런!</div>
          <div className="text-2xl mb-8">
            검색하고자 하는 알약의 정보가 없습니다.
          </div>
          <div className="text-xl mb-2">
            아래의 사이트에서 직접 검색해보세요.
          </div>
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
      )}
    </div>
  );
}
