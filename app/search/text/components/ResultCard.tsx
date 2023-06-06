import { ISearchResult } from "../types/Options";

const ResultCard = ({ searchResult }: { searchResult: ISearchResult[] }) => {
  // 빈 배열일 때는 검색결과가 없습니다.
  // 배열이 차있을 때는 map으로 전개
  // 약학정보원 긴 카드 형태로 보여주기
  return (
    <section className="bg-white border border-gray-200 shadow-md rounded-lg flex justify-center items-center">
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
        // table로 만들자 그냥
        <div className="flex flex-col justify-center items-center gap-4">
          {searchResult.map((pill) => (
            <div key={pill.name}>{pill.name}</div>
          ))}
        </div>
      )}
    </section>
  );
};

export default ResultCard;
