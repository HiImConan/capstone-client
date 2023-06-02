import { ISearchResult } from "../types/Options";

const ResultCard = ({ searchResult }: { searchResult: ISearchResult[] }) => {
  // 빈 배열일 때는 검색결과가 없습니다.
  // 배열이 차있을 때는 map으로 전개
  // 약학정보원 긴 카드 형태로 보여주기
  return (
    <>
      {searchResult.length === 0 ? (
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="mb-4 text-3xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                검색 결과가 없습니다.
              </h1>
              <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                검색 옵션을 정확하게 설정했는지 확인해보세요.
              </p>
            </div>
          </div>
        </section>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default ResultCard;
