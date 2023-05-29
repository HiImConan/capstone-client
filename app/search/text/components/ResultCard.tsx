import { ISearchResult } from "../types/Options";

const ResultCard = ({ searchResult }: { searchResult: ISearchResult[] }) => {
  // 빈 배열일 때는 검색결과가 없습니다.
  // 배열이 차있을 때는 map으로 전개
  // 약학정보원 긴 카드 형태로 보여주기
  return <div></div>;
};

export default ResultCard;
