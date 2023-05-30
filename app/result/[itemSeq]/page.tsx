"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { DRUG_INFO_BASE_URL, SERVICE_KEY } from "../constant/path";
import Image from "next/image";
import { DRUG_INFO_LIST, IDrugInfo } from "../constant/type";

export default function DetailPage() {
  const [drugInfo, setDrugInfo] = useState<IDrugInfo | null>(null);
  const searchParams = useSearchParams();
  const itemSeq = searchParams.get("itemSeq");

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
    <div className="flex flex-col justify-center items-center gap-4">
      {drugInfo ? (
        <div className="flex flex-col justify-start gap-4">
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
            <div key={category.key} className="gap-2">
              <div className="text-xl text-blue-400 font-semibold">
                {category.value}
              </div>
              <div>
                {Object.keys(drugInfo).filter((key) => key === category.key)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>알약이 검색되지 않았습니다.</div>
      )}
    </div>
  );
}
