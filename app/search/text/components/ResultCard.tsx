import { ISearchResult } from "../types/Options";
import Image from "next/image";
import Pagination from "./Pagination";
import { useState, useEffect } from "react";
import Link from "next/link";

const ResultCard = ({ searchResult }: { searchResult: ISearchResult[] }) => {
  const [searchResultList, setSearchResultList] = useState<ISearchResult[]>([]);
  const [pageList, setPageList] = useState([1]);
  const [presentPage, setPresentPage] = useState(1);

  const limit = 10;
  const offset = (num: number) => (num - 1) * limit;

  const pageListLength = searchResult.length / limit;
  const lastPage = Number.isInteger(pageListLength)
    ? pageListLength
    : Math.ceil(pageListLength);
  const wholePageList = [...Array(lastPage).keys()].map(
    (element) => element + 1
  );

  const updatePagination = () => {
    setSearchResultList(
      searchResult.slice(offset(presentPage), offset(presentPage) + limit)
    );
    setPageList(wholePageList.slice(0, 5));
    setPresentPage(1);
  };

  useEffect(() => {
    updatePagination();
  }, []);

  const loadPage = (num: number) => {
    setPresentPage(num);
    setSearchResultList(searchResult.slice(offset(num), offset(num) + limit));
    {
      lastPage > 5 && num > 3
        ? num <= lastPage - 3
          ? setPageList(wholePageList.slice(num - 3, num + 2))
          : setPageList(wholePageList.slice(lastPage - 5))
        : setPageList(wholePageList.slice(0, 5));
    }
  };

  return (
    <>
      <section
        className={
          searchResult.length > 0
            ? "bg-white border border-gray-200 shadow-md rounded-lg flex justify-center items-center"
            : "bg-white border border-gray-200 shadow-md rounded-lg flex justify-center items-center mb-8"
        }
      >
        {searchResult.length === 0 ? (
          <div className="py-8 px-4 mx-auto max-w-screen-xl">
            <div className="mx-auto max-w-screen-sm text-center">
              <div className="mb-4 text-3xl tracking-tight font-extrabold text-primary-600">
                검색 결과가 없습니다.
              </div>
              <p className="mb-4 text-lg font-light text-gray-500">
                검색 옵션을 정확하게 설정했는지 확인해보세요.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center text-center first-line:gap-4">
            <div className="relative overflow-x-auto shadow-md">
              <table className="w-full text-sm text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-5 py-3 text-center w-28">
                      식별 이미지
                    </th>
                    <th scope="col" className="px-5 py-3 text-center">
                      제품명
                    </th>
                    <th scope="col" className="px-5 py-3 text-center">
                      제형
                    </th>
                    <th scope="col" className="px-5 py-3 text-center">
                      <p>식별표시</p>
                      <p>{`(앞/뒤)`}</p>
                    </th>
                    <th scope="col" className="px-5 py-3 text-center">
                      색상
                    </th>
                    <th scope="col" className="px-5 py-3 text-center w-24">
                      회사명
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {searchResultList.map((pill) => (
                    <tr
                      key={pill.name}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th scope="row" className="px-3 py-2 w-28">
                        <Image
                          src={pill.pill_img}
                          width={112}
                          height={112}
                          alt="pillimg"
                        />
                      </th>
                      <td className="px-5 py-4 text-center w-1/4 cursor-pointer">
                        <Link
                          href={{
                            pathname: `/result/${pill.id}`,
                            query: {
                              itemName: `${pill.name}`,
                              itemSeq: `${pill.id}`,
                            },
                          }}
                        >
                          <p className="w-44 truncate">{pill.name}</p>
                        </Link>
                      </td>
                      <td className="px-5 py-4 text-center">
                        {pill.pill_type.replace(/(\|)/g, " / ")}
                      </td>
                      <td className="px-5 py-4 w-1/6 text-center">
                        <p className="w-28 truncate">{pill.char_front}</p>
                        <p className="w-28 truncate">{pill.char_back}</p>
                      </td>
                      <td className="px-5 py-4 text-center">
                        {pill.color_front !== pill.color_back
                          ? `${pill.color_front} / ${pill.color_back}`
                          : pill.color_front}
                      </td>
                      <td className="px-5 py-4 text-center">
                        <p className="w-28 truncate">{pill.company}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
      {searchResult.length > limit && (
        <Pagination
          loadPage={loadPage}
          presentPage={presentPage}
          lastPage={lastPage}
          pageList={pageList}
          resultLength={searchResult.length}
          limit={limit}
        />
      )}
    </>
  );
};

export default ResultCard;
