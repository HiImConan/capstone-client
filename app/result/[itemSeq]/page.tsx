"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { DRUG_INFO_BASE_URL, SERVICE_KEY } from "../constant/path";
import Image from "next/image";
import { DRUG_INFO_LIST, IDrugInfo } from "../constant/type";
import Loading from "@/app/loading";
import Nothing from "../nothing/page";
import Link from "next/link";
import { Tooltip } from "flowbite-react";

const DetailPage = () => {
  const [drugInfo, setDrugInfo] = useState<IDrugInfo | null>(null);
  const searchParams = useSearchParams();
  const itemSeq = searchParams.get("itemSeq") as string;
  const itemName = searchParams.get("itemName");

  const getDrugInfo = async (itemSeq: string) => {
    const res = await fetch(
      `${DRUG_INFO_BASE_URL}?serviceKey=${SERVICE_KEY}&pageNo=1&numOfRows=3&itemSeq=${itemSeq}&type=json`
    );
    const result = await res.json();
    if (result.body.hasOwnProperty("items")) {
      setDrugInfo(result.body.items[0] as IDrugInfo);
    } else {
      setDrugInfo({});
    }
  };

  useEffect(() => {
    getDrugInfo(itemSeq as string);
  }, []);

  return (
    <>
      <meta
        httpEquiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
      <div className="flex flex-col justify-center items-center gap-4 h-max">
        {drugInfo ? (
          drugInfo.hasOwnProperty("itemName") ? (
            <>
              <div className="flex flex-col justify-start items-center gap-4 py-20 w-2/5">
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
                    className="flex flex-col items-start gap-2 w-full"
                  >
                    <div className="text-xl text-blue-400 font-semibold">
                      {category.value}
                    </div>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: Object.entries(drugInfo).filter(
                          ([key]) => key == category.key
                        )[0][1],
                      }}
                    ></div>
                  </div>
                ))}
                <div className="text-xl mt-12">
                  추가 정보를 알고 싶으시다면, 아래의 사이트에서 직접
                  검색해보세요.
                </div>

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
                      href={`https://nedrug.mfds.go.kr/searchDrug?itemSeq=${drugInfo.itemSeq}`}
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
                      href={`https://www.druginfo.co.kr/search2/search.aspx?q=${drugInfo.itemSeq}`}
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
            </>
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
