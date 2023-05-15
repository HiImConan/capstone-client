import Link from "next/link";

const ProductsPage = () => {
  return (
    <section className="flex flex-col items-center h-1/5 justify-between text-3xl">
      <div className="font-bold opacity-70">
        원하시는 검색 방법을 선택해주세요.
      </div>
      <div className="">
        <Link
          href={`search/text`}
          className="text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-l-full p-8 text-center"
        >
          직접 입력하기
        </Link>
        <Link
          href={`search/photo`}
          className="text-white bg-pink-400 hover:bg-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-r-full p-8 text-center"
        >
          사진 검색하기
        </Link>
      </div>
    </section>
  );
};

export default ProductsPage;
