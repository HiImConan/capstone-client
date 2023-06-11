const Pagination = ({
  loadPage,
  presentPage,
  lastPage,
  pageList,
  resultLength,
  limit,
}: {
  loadPage: (num: number) => void;
  presentPage: number;
  lastPage: number;
  pageList: number[];
  resultLength: number;
  limit: number;
}) => {
  return (
    <nav
      className="flex items-center justify-between pt-4 mb-12"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        {"전체 "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {resultLength}
        </span>
        {"개 중 "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {presentPage * limit <= resultLength
            ? `${limit * (presentPage - 1) + 1} - ${presentPage * limit}`
            : `${limit * (presentPage - 1) + 1} - ${resultLength}`}
          번째
        </span>
      </span>
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <div
            onClick={() => loadPage(presentPage - 1)}
            className={
              presentPage > 1
                ? "block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
                : "block px-3 py-2 ml-0 leading-tight text-gray-500 bg-gray-100 pointer-events-none border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
            }
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </li>
        {pageList.map((num: number) => (
          <li key={num}>
            <div
              onClick={() => loadPage(num)}
              className={
                num == presentPage
                  ? "px-3 py-2 leading-tight text-gray-500 bg-gray-200 border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
              }
            >
              {num}
            </div>
          </li>
        ))}

        <li>
          <div
            onClick={() => loadPage(presentPage + 1)}
            className={
              presentPage < lastPage
                ? "block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
                : "block px-3 py-2 ml-0 leading-tight text-gray-500 bg-gray-100 pointer-events-none border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
            }
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
