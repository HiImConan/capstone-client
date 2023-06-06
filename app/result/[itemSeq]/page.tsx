"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { DRUG_INFO_BASE_URL, SERVICE_KEY } from "../constant/path";
import Image from "next/image";
import { DRUG_INFO_LIST, IDrugInfo } from "../constant/type";
import Loading from "@/app/loading";
import Nothing from "../nothing/page";

const DetailPage = () => {
  const [drugInfo, setDrugInfo] = useState<IDrugInfo | null>(null);
  const searchParams = useSearchParams();
  const itemSeq = searchParams.get("itemSeq") as string;
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
    } else {
      setDrugInfo({});
    }
  };

  useEffect(() => {
    getDrugInfo(itemSeq as string);
    console.log(drugInfo);
  }, []);

  return (
    <>
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <div className="flex flex-col justify-center items-center gap-4 h-full">
        {drugInfo ? (
          drugInfo.hasOwnProperty("itemName") ? (
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
            <Nothing searchParams={{ itemSeq: itemSeq }} />
          )
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};
export default DetailPage;
