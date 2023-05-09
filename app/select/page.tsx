import Link from "next/link";

const ProductsPage = () => {
  return (
    <>
      <div>원하시는 검색 방법을 선택해주세요.</div>
      <li>
        <Link href={`select/text`}>직접 입력하기</Link>
      </li>
      <li>
        <Link href={`select/photo`}>사진으로 검색하기</Link>
      </li>
    </>
  );
};

export default ProductsPage;
