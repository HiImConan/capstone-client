"use client"; // Error components must be Client Components

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            {error.name}
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            {error.message || "서버와의 통신에 오류가 생겼습니다."}
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            서버에 일시적인 오류가 발생하여 요청을 완료할 수 없습니다.
          </p>
          <button onClick={reset}>다시 시도해주세요.</button>
        </div>
      </div>
    </section>
  );
}
