import Link from "next/link";

const NotFoundPage = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              🥲
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              인식에 실패했어요.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              * 부족한 빛이나 평평하지 않은 배경이 원인일 수 있어요. 다시 한 번
              시도해주세요.
            </p>
            <Link
              href="/search/photo"
              className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              다시 촬영하기
            </Link>
            <Link
              href="/search/text"
              className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
            >
              직접 검색하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
