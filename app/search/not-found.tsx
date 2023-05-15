import Link from "next/link";
const NotFoundPage = () => {
  return (
    <>
      <div>🥲</div>
      <h1>인식에 실패했어요</h1>
      <div>
        *부족한 빛이나 평평하지 않은 배경이 원인일 수 있어요! 다시 한 번
        시도해주세요.
      </div>
      <li>
        <Link href="search/photo">다시 촬영하기</Link>
      </li>
      <li>
        <Link href="search/text">직접 입력하기</Link>
      </li>
    </>
  );
};

export default NotFoundPage;
