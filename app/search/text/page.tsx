"use client";

import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { NewMenuType, ISearchResult } from "./types/Options";
import { useState } from "react";
import ResultCard from "@/app/search/text/components/ResultCard";
import Loading from "@/app/loading";
import DropdownModal from "./components/DropdownModal";
import Image from "next/image";
import { useModalVisible } from "./hooks/useModalVisible";

const TextPage = () => {
  const [searchResult, setSearchResult] = useState<ISearchResult[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const {
    componentRef: modalRef,
    collapseState,
    handleModalCollapse,
  } = useModalVisible();

  const methods = useForm({
    defaultValues: {
      char_front: "",
      shape: "전체",
      color: "전체",
      pill_type: "전체",
      line: "전체",
    },
  });
  const {
    watch,
    formState: { isDirty },
    resetField,
  } = methods;
  const watchList = [
    watch("char_front"),
    watch("shape"),
    watch("color"),
    watch("pill_type"),
    watch("line"),
  ];

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    setLoading(true);
    setIsCollapsed(true);
    const res = await fetch("https://find-my-pills.shop/search/text", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const result = await res.json();
    console.log(result);
    setSearchResult(result);
    setLoading(false);
  };

  const onResetField = (
    field: "char_front" | "shape" | "color" | "pill_type" | "line"
  ) => {
    resetField(field);
  };

  return (
    <div className="w-[800px] mt-4">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="p-5 mx-auto bg-gray-200 rounded-lg mb-4 flex flex-col justify-center items-center"
        >
          <div className="p-5 text-2xl tracking-tight font-semibold text-left text-gray-900">
            알약 직접 검색하기
            <div className="flex justify-between items-center gap-12 sm:gap-8">
              <p className="mt-1 text-lg font-normal text-gray-500">
                찾고 싶은 알약의 각인, 색상, 모양, 제형 그리고 분할선 정보를
                입력하세요. 하나의 정보만 입력해도 검색이 되지만, 여러 개를
                입력할수록 정확한 결과를 얻을 수 있습니다.
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-center items-center select-none text-black">
            {NewMenuType.map((menu, i) => (
              <div className="relative" key={menu.value}>
                <div
                  className="flex flex-col justify-center items-center w-28 h-28 p-4 border-2 border-gray-300 rounded-lg bg-gray-500/75 text-white text-sm hover:bg-gray-400 drop-shadow-md"
                  onClick={() => handleModalCollapse(menu.name)}
                  ref={(element) => (modalRef!.current[i] = element)}
                >
                  {watchList[i] !== "전체" && watchList[i] ? (
                    <Image
                      src={menu.selected_img}
                      height={100}
                      width={100}
                      alt={menu.value}
                    />
                  ) : (
                    <Image
                      src={menu.img}
                      height={100}
                      width={100}
                      alt={menu.value}
                    />
                  )}
                  <div>{menu.value}</div>
                  {collapseState[i] && <DropdownModal index={i} />}
                </div>
                {watchList[i] !== "전체" && watchList[i] && (
                  <button
                    className="absolute top-0 right-0 rounded-full text-white bg-gray-600 border-1 border-white"
                    onClick={() =>
                      onResetField(
                        menu.default as
                          | "char_front"
                          | "shape"
                          | "color"
                          | "pill_type"
                          | "line"
                      )
                    }
                  >
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>

          <button
            type="submit"
            className="text-white bg-blue-400 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mt-6"
            disabled={!isDirty}
          >
            검색하기
          </button>
        </form>
      </FormProvider>
      {loading ? (
        <section
          className={
            isCollapsed
              ? "h-3/5 border border-gray-300 shadow-md rounded-lg"
              : "h-3/5 border border-gray-200 rounded-lg"
          }
        >
          <Loading />
        </section>
      ) : (
        <ResultCard searchResult={searchResult} />
      )}
    </div>
  );
};

export default TextPage;
